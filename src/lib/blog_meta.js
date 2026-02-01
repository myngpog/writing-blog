import * as TOML from 'toml';

const rawBlogMeta = await (await fetch('/entries/_meta.toml')).text();

/**
 * @typedef {Object} Metadata
 * @property {string} title
 * @property {string} desc
 * @property {string} date
 * @property {string[] | undefined} files
 * @property {string | undefined} markdown
 */
/** @type {Metadata[]} */
// We don't actually use each object's key as the id, it's more of a note to keep track of where
// you are in the meta file. Post id is really determined by array order.
const blogMetas = Object.values(TOML.parse(rawBlogMeta));

export default blogMetas;
