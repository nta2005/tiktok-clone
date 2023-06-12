import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	timeout: 30000,
});

axiosClient.interceptors.request.use(
	function (config: AxiosRequestConfig): any {
		if (config.headers === undefined) {
			config.headers = {
				'Content-Type': 'application/json',
			};
		}

		// console.log(
		// 	config.method?.toUpperCase(),
		// 	config.url,
		// 	`\nbody: ${JSON.stringify(config?.data)}`,
		// 	`\nparams: ${JSON.stringify(config?.params)}`,
		// );

		return config;
	},
	function (error: AxiosError) {
		return Promise.reject(error);
	},
);

// Add a response interceptor
axiosClient.interceptors.response.use(
	function (response: AxiosResponse) {
		return response.data;
	},
	function (error: AxiosError) {
		return Promise.reject(error.response?.data);
	},
);

export default axiosClient;
