import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
	return (
		<div className={cx('wrapper')}>
			<img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1686290400&x-signature=%2F5iJhGp6k5JckhV%2F2jlFioLaNbY%3D" alt="account-name" />
			<div className={cx('info')}>
				<h4 className={cx('name')}>
					<span>Nguyen Thanh An</span>
					<FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
				</h4>
				<span className={cx("username")}>thanhan0520</span>
			</div>
		</div>
	);
}

export default AccountItem;
