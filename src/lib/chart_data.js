import * as TOML from "toml";

const text = await (await fetch("/writing_stats.toml")).text();
const entries = TOML.parse(text).word_count.map((obj) => {
  return {
    ...obj,
    date: new Date(obj.date),
  };
});

console.log(entries);
