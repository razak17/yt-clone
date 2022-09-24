import { Stack, Box } from '@mui/material';
import { Videos as VideosType } from '../types';
import ChannelCard from './ChannelCard';
import Loader from './Loader';
import VideoCard from './VideoCard';

const Videos = ({
	videos,
	direction
}: {
	videos: VideosType;
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}) => {
	if (!videos?.items.length) return <Loader />;

	return (
		<Stack
			direction={direction || 'row'}
			flexWrap='wrap'
			justifyContent='start'
			alignItems='start'
			gap={2}
		>
			{videos?.items?.map((item, idx) => (
				<Box key={idx}>
					{item.id.videoId && <VideoCard video={item} />}
					{item.id.channelId && <ChannelCard channelDetail={item} />}
				</Box>
			))}
		</Stack>
	);
};

export default Videos;
