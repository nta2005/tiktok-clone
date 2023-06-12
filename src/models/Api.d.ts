import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface Account {
	id: number;
	first_name: string;
	last_name: string;
	full_name: string;
	nickname: string;
	avatar: string;
	bio: string;
	tick: boolean;
	followings_count: number;
	followers_count: number;
	likes_count: number;
	website_url: string;
	facebook_url: string;
	youtube_url: string;
	twitter_url: string;
	instagram_url: string;
	created_at: Date;
	updated_at: Date;
}

/* Menu */
export interface Menu {
	id: number;
	icon: IconDefinition;
	title: string;
	to?: string;
	separate?: boolean;
	children?: MenuChildren;
}

interface MenuChildren {
	title: string;
	data: MenuChildrenData[];
}

interface MenuChildrenData {
	id: number;
	type: string;
	code: string;
	title: string;
}
/* -------------------------------------- */
