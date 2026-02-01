import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeadingProps {
  className?: string;
  children?: ReactNode;
}

export default function Heading({ className, children }: HeadingProps) {
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
