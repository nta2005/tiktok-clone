import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import { Account } from 'models';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

interface Props {
	label: string;
	data?: Account;
}

const SuggestedAccounts: React.FC<Props> = ({ label, data }) => {
	return (
		<div className={cx('wrapper')}>
			<p className={cx('label')}>{label}</p>

			<AccountItem />
			<AccountItem />
			<AccountItem />

			<p className={cx('more-btn')}>See all</p>
		</div>
	);
};

export default SuggestedAccounts;
