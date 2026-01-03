import { Register as _Register } from '@components/handler';
import { Page } from '@components/page';
import { NavItem, Theme } from '@components/ui';

export default function Register() {
  return (
    <Page
      navItems={
        <>
          <NavItem
            name='Login'
            href='/site/public/authentication/login'
          />
          <NavItem
            name='Register'
            href='/site/public/authentication/register'
            active
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
      mainItems={<_Register />}
      modalItems={
        <>
          <Theme />
        </>
      }
    />
  );
}
