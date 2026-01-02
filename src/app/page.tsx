import { Page } from '@components/page';
import { Theme } from '@components/shared';

export default function Landing() {
  return (
    <Page
      popupItems={
        <>
          <Theme />
        </>
      }
    />
  );
}
