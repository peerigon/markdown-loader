/* eslint-disable @babel/no-invalid-this */
"use strict";

const loaderImport = import("./loader.js");

async function trampolin(...args) {
  const { markdownLoader } = await loaderImport;

  return markdownLoader.call(this, ...args);
}

module.exports = trampolin;
