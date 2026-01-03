import { Login as _Login } from '@components/handler';
import { Page } from '@components/page';
import { NavItem, Theme } from '@components/ui';

export default function Login() {
  return (
    <Page
      navItems={
        <>
          <NavItem
            name='Login'
            href='/site/public/authentication/login'
            active
          />
          <NavItem
            name='Register'
            href='/site/public/authentication/register'
          />
          <NavItem
            name='Reset'
            href='/site/public/authentication/reset'
          />
          <NavItem
            name='Landing'
            href='/'
            button
          />
        </>
      }
      mainItems={<_Login />}
      modalItems={
        <>
          <Theme />
        </>
      }
    />
  );
}
