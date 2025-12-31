import { MainStyles } from '@styles/layout';

interface Props {
  className?: string;
}

export default function Main({ className }: Props) {
  return <main className={`${MainStyles.Header} ${className || ''}`}></main>;
}
