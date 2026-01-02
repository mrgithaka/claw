'use client';

import { Header, Main } from '@components/layout';
import { Icon } from '@components/ui';
import { useAside, useTrigger } from '@library/hooks';
import { HeaderStyles, MainStyles } from '@styles/layout';
import { PageStyles, PopupStyles } from '@styles/page';
import { ReactNode, useEffect } from 'react';

interface Props {
  children?: ReactNode;
}

export default function Popup({ children }: Props) {
  const { trigger, pullTrigger } = useTrigger();

  const { setHidden } = useAside();

  useEffect(() => {
    setHidden(trigger);
    return () => setHidden(false);
  }, [trigger, setHidden]);

  return (
    <div className={PopupStyles.Popup}>
      <div
        className={PopupStyles.TriggerOff}
        onClick={() => pullTrigger()}
      >
        <Icon
          name='popup'
          alt='Popup Icon'
          size={16}
          inverted
        />
      </div>
      {trigger && (
        <div className={PopupStyles.PopupItself}>
          <div className={PageStyles.Page}>
            <Header className={HeaderStyles.Page}>
              <div className={PopupStyles.Nav}></div>
              <div
                className={PopupStyles.TriggerOn}
                onClick={() => pullTrigger()}
              >
                <Icon
                  name='popup'
                  alt='Popup Icon'
                  size={16}
                />
              </div>
            </Header>
            <Main className={MainStyles.Page}>{children}</Main>
          </div>
        </div>
      )}
    </div>
  );
}
