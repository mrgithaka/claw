import { Icon } from '@components/shared';
import { BrandStyles } from '@styles/shared';

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
