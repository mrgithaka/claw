import { Recover as _Recover } from '@components/handler';
import { Page } from '@components/page';
import { NavItem, Theme } from '@components/ui';

export default function Recover() {
  return (
    <Page
      navItems={
        <>
          <NavItem
            name='Recover'
            href='/site/private/authentication/recover'
            active
          />
          <NavItem
            name='Login'
            href='/site/public/authentication/login'
          />
          <NavItem
            name='Landing'
            href='/'
            button
          />
        </>
      }
      mainItems={<_Recover />}
      modalItems={
        <>
          <Theme />
        </>
      }
    />
  );
}
