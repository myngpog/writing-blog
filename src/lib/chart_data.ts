import * as TOML from 'toml';

interface StatFile {
  word_count: WritingRecord[];
}

interface WritingRecord {
  month: number;
  year: number;
  fanfiction: number;
  novel: number;
}

type WritingStat = Pick<WritingRecord, 'fanfiction' | 'novel'>;

const raw = await (await fetch('/writing_stats.toml')).text();
const { word_count: wordCount } = TOML.parse(raw) as StatFile;

export const months = Array.from({ length: 12 }, () => ({
  fanfiction: 0,
  novel: 0,
}));
export const years = new Map<number, WritingStat>();

const currYear = new Date().getFullYear();

for (const wc of wordCount) {
  if (wc.year == currYear) {
    const monthIdx = wc.month - 1;
    if (months[monthIdx]) {
      months[monthIdx].fanfiction += wc.fanfiction;
      months[monthIdx].novel += wc.novel;
    }
  }

  const year = years.get(wc.year) ?? {
    fanfiction: 0,
    novel: 0,
  };
  year.fanfiction += wc.fanfiction;
  year.novel += wc.novel;

  years.set(wc.year, year);
}
