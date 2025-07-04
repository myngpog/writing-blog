import * as TOML from "toml";

const text = await (await fetch("/writing_stats.toml")).text();
const entries = TOML.parse(text).word_count.map((obj) => {
  return {
    ...obj,
  };
});

export const months = Array.from({ length: 12 }, () => ({
  fanfiction: 0,
  novel: 0,
}));
export const years = new Map();

const currYear = new Date().getFullYear();

for (const entry of entries) {
  if (entry.year == currYear) {
    months[entry.month - 1].fanfiction += entry.fanfiction;
    months[entry.month - 1].novel += entry.novel;
  }

  const year = years.get(entry.year) ?? {
    fanfiction: 0,
    novel: 0,
  };
  year.fanfiction += entry.fanfiction;
  year.novel += entry.novel;
  years.set(entry.year, year);
}
