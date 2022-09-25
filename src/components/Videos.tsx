import { Stack, Box } from '@mui/material';

import { Videos as VideosType } from '../types';
import ChannelCard from './ChannelCard';
import Loader from './Loader';
import VideoCard from './VideoCard';

const Videos = ({
	isLoading,
	videos,
	direction
}: {
	isLoading: boolean;
	videos: VideosType;
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}) => {
	if (isLoading) return <Loader />;

	if (!videos?.items.length) return <h1>No videos found</h1>;

	return (
		<Stack
			direction={direction || 'row'}
			flexWrap='wrap'
			justifyContent='start'
			alignItems='start'
			gap={2}
		>
			{videos.items.map((item, idx) => (
				<Box key={idx}>
					{item.id.videoId && <VideoCard isLoading={isLoading} video={item} />}
					{item.id.channelId && <ChannelCard channelDetail={item} />}
				</Box>
			))}
		</Stack>
	);
};

export default Videos;
