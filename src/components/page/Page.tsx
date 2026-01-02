'use client';

import { Header, Main, Nav } from '@components/layout';
import { Popup } from '@components/page';
import { Brand } from '@components/ui';
import { AsideProvider, ModeProvider, ThemeProvider } from '@library/providers';
import { HeaderStyles, MainStyles } from '@styles/layout';
import { PageStyles } from '@styles/page';
import { ReactNode } from 'react';

interface Props {
  navItems?: ReactNode;
  mainItems?: ReactNode;
  popupItems?: ReactNode;
}

export default function Page({ navItems, mainItems, popupItems }: Props) {
  return (
    <ModeProvider>
      <ThemeProvider>
        <AsideProvider>
          <div className={PageStyles.Page}>
            <Header className={HeaderStyles.Page}>
              <Brand />
              <Nav>{navItems}</Nav>
              <Popup>{popupItems}</Popup>
            </Header>
            <Main className={MainStyles.Page}>{mainItems}</Main>
          </div>
        </AsideProvider>
      </ThemeProvider>
    </ModeProvider>
  );
}
