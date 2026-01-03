import { Reset as _Reset } from '@components/handler';
import { Page } from '@components/page';
import { NavItem, Theme } from '@components/ui';

export default function Reset() {
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
          />
          <NavItem
            name='Reset'
            href='/site/public/authentication/reset'
            active
          />
          <NavItem
            name='Landing'
            href='/'
            button
          />
        </>
      }
      mainItems={<_Reset />}
      modalItems={
        <>
          <Theme />
        </>
      }
    />
  );
}
