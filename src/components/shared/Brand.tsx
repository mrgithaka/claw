import { Icon } from '@components/shared';
import { BrandStyles } from '@styles/shared';

export default function Brand() {
  return (
    <div className={BrandStyles.Brand}>
      <Icon
        name='logo'
        alt="Mr. Githaka's Logo"
        size={28}
      />
      <p>Claw</p>
    </div>
  );
}
