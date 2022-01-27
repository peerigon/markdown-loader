// This file is currently necessary because webpack needs the loader to be a CommonJS module.
// Its only purpose is to serve as a "trampolin" for the actual loader module.
/* eslint-disable @babel/no-invalid-this */
"use strict";

const loaderImport = import("./loader.js");

async function trampolin(...args) {
  const { markdownLoader } = await loaderImport;

  return markdownLoader.call(this, ...args);
}

module.exports = trampolin;
