import axios from 'axios';
import { Video } from '../types';

const apiKey = import.meta.env.VITE_RAPID_API_ENDPOINT;
const baseUrl = 'https://youtube-v31.p.rapidapi.com';

export const getVideos = async (url: string): Promise<Video[]> => {
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
