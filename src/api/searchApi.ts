import axiosClient from './axiosClient';

export default class SearchApi {
	static URL = 'users/search';

	static searchAccounts = (q: any, type: string = 'less') => {
		return axiosClient.get(this.URL, { params: { q, type } });
	};
}
