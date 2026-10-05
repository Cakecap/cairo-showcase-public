import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  const classes = ['page-reveal', className].filter(Boolean).join(' ');

  return <main className={classes}>{children}</main>;
}
