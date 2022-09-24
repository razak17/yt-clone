import axios from 'axios';
import { Videos } from '../types';

const apiKey = import.meta.env.VITE_RAPID_API_ENDPOINT;
const baseUrl = 'https://youtube-v31.p.rapidapi.com';

export const getVideos = async (url: string): Promise<Videos> => {
	const { data } = await axios.get(`${baseUrl}/${url}`, {
		params: {
			maxResults: 50
		},
		headers: {
			'X-RapidAPI-Key': apiKey,
			'X-RapidAPI-Host': baseUrl.replace('https://', '')
		}
	});

	return data;
};
