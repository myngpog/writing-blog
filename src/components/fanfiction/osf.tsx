import Heading from '../Heading';

export default function Osf() {
  return (
    <article className="flex flex-col gap-4">
      <Heading className="text-3xl">one sentence fics</Heading>
      <p className="text-text-light">
        A collection of one-sentence stories; snapshots of worlds, moments,
        and feelings compressed into one line. Or, my blurbs.
      </p>
      <ul className="list-disc list-inside text-text-light flex flex-col gap-2">
        <li><span className="text-dark-pink font-semibold font-header text-base">Ship Name</span>: Text 1.</li>
        <li><span className="text-dark-pink font-semibold font-header text-base">Ship Name</span>: Text 2.</li>
        <li><span className="text-dark-pink font-semibold font-header text-base">Ship Name</span>: Text 3.</li>
        <li><span className="text-dark-pink font-semibold font-header text-base">Ship Name</span>: Text 4.</li>
        <li><span className="text-dark-pink font-semibold font-header text-base">Ship Name</span>: Text 5.</li>
      </ul>
    </article>
  );
}
