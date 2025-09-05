import * as TOML from "toml";

const rawBlogMeta = await (await fetch("/entries/_meta.toml")).text();
/**
 * @typedef {Object} Metadata
 * @property {string} title
 * @property {string} desc
 * @property {string} date
 */
/** @type {Metadata[]} */
const blogMetas = Object.values(TOML.parse(rawBlogMeta));

export default blogMetas;
