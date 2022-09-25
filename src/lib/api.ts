import axios from 'axios';
import { Videos, VideoDetail } from '../types';

const apiKey = import.meta.env.VITE_RAPID_API_ENDPOINT;
const baseUrl = 'https://youtube-v31.p.rapidapi.com';

const options = {
	params: {
		maxResults: 50
	},
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export const getVideos = async (url: string): Promise<Videos> => {
	if (!url) throw new Error('url is not defined.');
	const { data } = await axios.get(`${baseUrl}/${url}`, options);
	return data;
};

export const getVideoDetails = async (id: string): Promise<VideoDetail> => {
	if (!id) throw new Error('id is not defined.');
	const { data } = await axios.get(`${baseUrl}/videos?part=snippet,statistics&id=${id}`, options);
	return data;
};
