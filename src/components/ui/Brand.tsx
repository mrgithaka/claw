import { Icon } from '@components/ui';
import { BrandStyles } from '@styles/ui';

export default function Brand() {
  return (
    <div className={BrandStyles.Brand}>
      <Icon
        name='logo'
        alt="Volty's Logo"
        size={24}
      />
      <p>Claw</p>
    </div>
  );
}
