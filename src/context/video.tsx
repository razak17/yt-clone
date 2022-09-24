import { createContext, ReactNode, useContext } from 'react';
import { RefetchOptions, RefetchQueryFilters, useQuery } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';
import { getVideos } from '../lib/api';
import { Video } from '../types';

const VideoContext = createContext<{
	videos: Video[] | undefined;
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
		<VideoContext.Provider value={{ videos: data as Video[], refetch }}>
			{isLoading ? <CircularProgress size='1rem' /> : children}
		</VideoContext.Provider>
	);
};

const useVideo = () => useContext(VideoContext);

export { VideoContextProvider, useVideo };
