'use client';

import { Icon } from '@components/ui';
import { useMode, useTheme } from '@library/hooks';
import { ThemeStyles } from '@styles/ui';

interface Props {
  hidden?: boolean;
}

export default function Theme({ hidden }: Props) {
  const { theme, triggerTheme } = useTheme();
  const { mode } = useMode();

  return (
    <div
      className={hidden ? ThemeStyles.Hidden : ThemeStyles.Theme}
      onClick={triggerTheme}
    >
      <div className={ThemeStyles.Head}>
        <Icon
          inverted
          name={
            theme === 'dark' ? 'moon' : theme === 'light' ? 'sun' : 'system'
          }
          alt=''
          size={16}
        />
      </div>
      <div className={ThemeStyles.Body}>
        <p>{theme}</p>
        <span>
          <span>{mode}</span> Mode
        </span>
      </div>
    </div>
  );
}
