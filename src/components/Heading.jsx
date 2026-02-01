import { twMerge } from 'tailwind-merge';

export default function Heading({ className = '', children }) {
  return (
    <h1
      className={twMerge(
        'font-header text-3xl font-bold text-dark-pink',
        className
      )}
    >
      {children}
    </h1>
  );
}
