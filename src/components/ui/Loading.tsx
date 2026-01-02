import { LoadingStyles } from '@styles/ui';

export default function Loading() {
  return (
    <div className={LoadingStyles.Loading}>
      <span className={LoadingStyles.Loader}></span>
    </div>
  );
}
