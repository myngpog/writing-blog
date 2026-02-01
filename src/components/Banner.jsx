import Line from './Line';

export default function Banner({ quote }) {
  return (
    <div className="flex mt-8 lg:mt-19 mb-5 lg:mb-8 mx-4 flex-row justify-center items-center gap-4 text-dark-pink">
      <Line />
      <div className="text-center text-xs lg:text-base font-accent">
        {quote}
      </div>
      <Line />
    </div>
  );
}
