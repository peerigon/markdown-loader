/* eslint-disable @babel/no-invalid-this */
import { parse } from "marked";

export function markdownLoader(markdown) {
  const options = this.getOptions();

  return parse(markdown, options);
}
