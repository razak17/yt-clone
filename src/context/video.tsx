import { createContext, ReactNode, useContext } from 'react';
import { RefetchOptions, RefetchQueryFilters, useQuery } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';
import { getVideos } from '../lib/api';
import { Videos } from '../types';

const VideoContext = createContext<{
	videos: Videos | undefined;
	refetch?: <TPageData>(
		/* eslint-disable-next-line no-unused-vars */
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => any;
	remove?: () => void;
}>({ videos: undefined });

const VideoContextProvider = ({ children }: { children: ReactNode }) => {
	const { data, refetch, isLoading } = useQuery(['getVideos'], () =>
		getVideos('search?part=snippet&q=New')
	);

	return (
		<VideoContext.Provider value={{ videos: data as Videos, refetch }}>
			{isLoading ? <CircularProgress size='1rem' /> : children}
		</VideoContext.Provider>
	);
};

const useVideo = () => useContext(VideoContext);

export { VideoContextProvider, useVideo };
