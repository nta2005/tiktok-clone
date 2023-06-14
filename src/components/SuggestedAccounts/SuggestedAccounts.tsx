import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import { Account } from 'models';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

interface Props {
	label: string;
	data?: Account[];
	onViewChange?: () => void;
}

const SuggestedAccounts: React.FC<Props> = ({ label, data = [], onViewChange }) => {
	return data.length > 0 ? (
		<div className={cx('wrapper')}>
			<p className={cx('label')}>{label}</p>

			{data.map((item: Account) => (
				<AccountItem key={item.id} data={item} />
			))}

			<p className={cx('more-btn')} onClick={onViewChange}>
				See all
			</p>
		</div>
	) : null;
};

export default SuggestedAccounts;
