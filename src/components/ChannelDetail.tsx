import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { getVideos } from '../lib/api';
import ChannelCard from './ChannelCard';
import Videos from './Videos';
import { Videos as VideosType, Video } from '../types';

const ChannelDetail = () => {
	const { id } = useParams();

	const { data: channelInfo } = useQuery(['channelDetail', id], () =>
		getVideos(`channels?part=snippet&id=${id}`)
	);

	const { data: videos, isLoading: videosLoading } = useQuery(['channelVideos', id], () =>
		getVideos(`search?channelId=${id}&part=snippet%2Cid&order=date`)
	);

	return (
		<Box minHeight='95vh'>
			<Box>
				<div
					style={{
						height: '300px',
						background:
							'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
						zIndex: 10
					}}
				/>
				<ChannelCard channelDetail={channelInfo?.items[0] as Video} marginTop='-120px' />
			</Box>
			<Box p={2} display='flex'>
				<Box sx={{ mr: { sm: '100px' } }} />
				<Videos isLoading={videosLoading} videos={videos as VideosType} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
