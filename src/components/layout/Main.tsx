import { Container, Footer } from '@components/layout';
import { MainStyles } from '@styles/layout';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  children?: ReactNode;
}

export default function Main({ className, children }: Props) {
  return (
    <main className={`${MainStyles.Main} ${className || ''}`}>
      <Container>{children}</Container>
      <Footer />
    </main>
  );
}
