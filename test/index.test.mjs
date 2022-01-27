import * as url from "url";
import * as path from "path";
import { createRequire } from "module";
import test from "ava";
import webpack from "webpack";
import { Renderer } from "marked";
import highlighter from "highlight.js";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

async function createBundle({ fixture, output, options }) {
    await new Promise((resolve, reject) => {
        webpack(
            {
                entry: path.resolve(__dirname, "fixtures", fixture),
                mode: "development",
                module: {
                    rules: [
                        {
                            test: /\.md$/,
                            use: [
                                {
                                    loader: "html-loader",
                                },
                                {
                                    loader: require.resolve("../src/main.cjs"),
                                    options,
                                },
                            ],
                        },
                    ],
                },
                output: {
                    library: {
                        type: "commonjs2",
                    },
                    path: path.resolve(__dirname, "output"),
                    filename: output,
                },
            },
            function onCompilationFinished(error, stats) {
                if (error) {
                    return reject(error);
                }
                if (stats.hasErrors()) {
                    return reject(stats.compilation.errors[0]);
                }
                if (stats.hasWarnings()) {
                    return reject(stats.compilation.warnings[0]);
                }
                resolve();
            }
        );
    });

    const result = await import(`./output/${output}`);

    // The result is wrapped in 2 default exports:
    // - The html-loader creates an ESM with the string assigned to export default
    // - The final bundle is a CommonJS module that re-exports the result from the html-loader
    return result.default.default;
}

test("plain markdown", async (t) => {
    const code = await createBundle({
        fixture: "plain-markdown.md",
        output: "plain-markdown.cjs",
    });

    t.snapshot(code);
});

test("with code", async (t) => {
    const code = await createBundle({
        fixture: "with-code.md",
        output: "with-code.cjs",
    });

    t.snapshot(code);
});

test("with custom renderer", async (t) => {
    class CustomRenderer extends Renderer {
        text() {
            return "CUSTOM RENDERER";
        }
    }

    let code = await createBundle({
        fixture: "plain-markdown.md",
        output: "with-custom-renderer.cjs",
        options: {
            renderer: new CustomRenderer(),
        },
    });

    t.assert(code.includes("CUSTOM RENDERER"));

    // Make sure that the second call doesn't pick up custom renderer
    // This would happen if we used setOptions(), see https://github.com/markedjs/marked/issues/907
    code = await createBundle({
        fixture: "plain-markdown.md",
        output: "without-custom-renderer.cjs",
    });

    t.assert(code.includes("CUSTOM RENDERER") === false);
});

test("with custom highlighter", async (t) => {
    const code = await createBundle({
        fixture: "with-code.md",
        output: "with-custom-highlighter.cjs",
        options: {
            highlight: code => highlighter.highlightAuto(code).value,
        }
    });

    t.snapshot(code);
});
