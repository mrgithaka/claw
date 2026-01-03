import { Otp as _Otp } from '@components/handler';
import { Page } from '@components/page';
import { NavItem, Theme } from '@components/ui';

export default function Otp() {
  return (
    <Page
      navItems={
        <>
          <NavItem
            name='Otp'
            href='/site/private/authentication/otp'
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
      mainItems={<_Otp />}
      modalItems={
        <>
          <Theme />
        </>
      }
    />
  );
}
