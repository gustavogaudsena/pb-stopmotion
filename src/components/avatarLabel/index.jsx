import { IMAGES_BASE_URL } from '../../utils/constants';
import styles from './styles.module.css';

export default function AvatarLabel({ name, logo }) {
    return (
        <div className={styles.avatarLabel}>
            <img src={`${IMAGES_BASE_URL}/original/${logo}`} />
            {name}
        </div>
    )
}