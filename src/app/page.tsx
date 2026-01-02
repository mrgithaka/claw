import { Page } from '@components/page';
import { NavItem, Theme } from '@components/shared';

export default function Landing() {
  return (
    <Page
      navItems={
        <>
          <NavItem
            name='Landing'
            href='/'
            active
          />
          <NavItem
            name='Work'
            href='/'
          />
          <NavItem
            name='Courses'
            href='/'
          />
          <NavItem
            name='Account'
            href='/'
            button
          />
        </>
      }
      popupItems={
        <>
          <Theme />
        </>
      }
    />
  );
}
