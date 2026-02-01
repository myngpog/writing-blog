import { AnnualChart, MonthlyChart } from './WritingChart';

export default function WritingStatsPage() {
  return (
    <article className="flex-1 flex flex-col gap-8">
      <MonthlyChart />
      <AnnualChart />
    </article>
  );
}
