"use strict";

import test from "ava";
import webpack from "webpack";
import path from "path";
import markdownOptions from "./markdown-options";

function createBundle(markdownFile, bundleName) {
    return new Promise((resolve, reject) => {
        webpack({
            entry: path.resolve(__dirname, markdownFile),
            mode: "development",
            module: {
                rules: [{
                    test: /\.md$/,
                    use: [
                        {
                            loader: "html-loader"
                        },
                        {
                            loader: require.resolve("../index.js"),
                            options: markdownOptions
                        }
                    ]
                }]
            },
            output: {
                libraryTarget: "commonjs2",
                path: __dirname + "/output",
                filename: bundleName
            }
        }, function onCompilationFinished(err, stats) {
            if (err) {
                return reject(err);
            }
            if (stats.hasErrors()) {
                return reject(stats.compilation.errors[0]);            
            }
            if (stats.hasWarnings()) {
                return reject(stats.compilation.warnings[0]);
            }
    
            resolve(require(`./output/${bundleName}`));
        });
    });
}

test("plain markdown", async (t) => {
    t.plan(1);
    const bundle = await createBundle("./assets/simple-markdown.md", "simpleMarkdown.js");
    t.snapshot(bundle);
});

test("with code", async (t) => {
    t.plan(1);
    const bundle = await createBundle("./assets/with-code.md", "withCode.js");
    t.snapshot(bundle);
});


