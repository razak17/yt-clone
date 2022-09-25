import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { useQuery } from 'react-query';
import { getVideoDetails, getVideos } from '../lib/api';
import Loader from './Loader';
import Videos from './Videos';
import { Videos as VideosType } from '../types';

const VideoDetail = () => {
	const { id } = useParams();

	const { data: videoDetail } = useQuery(['videoDetail', id], () => getVideoDetails(id as string));

	const { data: videoDetailVideo, isLoading } = useQuery(['videoDetailVideo', id], () =>
		getVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`)
	);

	console.log({ videoDetail });
	console.log({ videoDetailVideo });

	if (isLoading) return <Loader />;

	if (!videoDetail?.items) return <h1>Video Not Found</h1>;

	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount }
	} = videoDetail.items[0];

	return (
		<Box minHeight='95vh'>
			<Stack direction={{ xs: 'column', md: 'row' }}>
				<Box flex={1}>
					<Box sx={{ width: '100%', top: '86px' }}>
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							className='react-player'
							controls
						/>
						<Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
							{title}
						</Typography>
						<Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
							<Link to={`/channel/${channelId}`}>
								<Typography variant='h6' color='#fff'>
									{channelTitle}
									<CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
								</Typography>
							</Link>
							<Stack direction='row' gap='20px' alignItems='center'>
								<Typography variant='body1' sx={{ opacity: 0.7 }}>
									{parseInt(viewCount).toLocaleString()} views
								</Typography>
								<Typography variant='body1' sx={{ opacity: 0.7 }}>
									{parseInt(likeCount).toLocaleString()} likes
								</Typography>
							</Stack>
						</Stack>
					</Box>
				</Box>
				<Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
					<Videos isLoading={isLoading} videos={videoDetailVideo as VideosType} direction='column' />
				</Box>
			</Stack>
		</Box>
	);
};

export default VideoDetail;
