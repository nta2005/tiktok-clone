import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import { Account } from 'models';
import { Image } from 'components';
import { PopperWrapper } from 'components/Popper';
import { avatarUrl } from 'utils';

import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

interface Props {
	label?: string;
	data?: Account;
}

const AccountItem: React.FC<Props> = ({ label, data }) => {
	const renderPreview = (attrs: any) => (
		<div tabIndex={-1} {...attrs}>
			<PopperWrapper>
				<AccountPreview />
			</PopperWrapper>
		</div>
	);

	return (
		<div>
			<Tippy
				interactive
				delay={[800, 0]}
				offset={[-20, 0]}
				placement="bottom"
				render={renderPreview}>
				<div className={cx('account-item')}>
					<Image className={cx('avatar')} src={avatarUrl} alt="Nguyen Thanh An" />

					<div className={cx('item-info')}>
						<p className={cx('nickname')}>
							<strong>thanhan0520</strong>
							<FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
						</p>
						<p className={cx('name')}>Nguyen Thanh An</p>
					</div>
				</div>
			</Tippy>
		</div>
	);
};

export default AccountItem;
