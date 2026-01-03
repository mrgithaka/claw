import { Login as _Login } from '@components/handler';
import { Page } from '@components/page';
import { Theme } from '@components/ui';

export default function Login() {
  return (
    <Page
      navItems={<></>}
      mainItems={<_Login />}
      modalItems={
        <>
          <Theme />
        </>
      }
    />
  );
}
