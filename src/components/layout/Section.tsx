import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  id: string;
  className: string;
}

export default function Section({ children, id, className }: Props) {
  return (
    <section
      id={id}
      className={className}
    >
      {children}
    </section>
  );
}
