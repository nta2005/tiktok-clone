import axiosClient from './axiosClient';

export default class UserApi {
	static URL = 'users/suggested';

	static getSuggested = (page: number = 1, per_page: number = 5) => {
		return axiosClient.get(this.URL, { params: { page, per_page } });
	};

	static getSuggestedExcept = (page: number = 1, except: number = -1, per_page: number = 5) => {
		return axiosClient.get(this.URL, { params: { page, except, per_page } });
	};
}
