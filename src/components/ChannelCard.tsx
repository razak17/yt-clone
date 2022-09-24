import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../constants';
import { Video } from '../types';
import { toLocale } from '../utils/toLocale';

const ChannelCard = ({
	channelDetail,
	marginTop
}: {
	channelDetail: Video;
	marginTop?: string;
}) => (
	<Box
		sx={{
			boxShadow: 'none',
			borderRadius: '20px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: { xs: '356px', md: '320px' },
			height: '326px',
			margin: 'auto',
			marginTop
		}}
	>
		<Link to={`/channel/${channelDetail?.id?.channelId}`}>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					textAlign: 'center',
					color: '#fff'
				}}
			>
				<CardMedia
					component='img'
					image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
					alt={channelDetail?.snippet?.title}
					sx={{
						borderRadius: '50%',
						height: '180px',
						width: '180px',
						mb: 2,
						border: '1px solid #e3e3e3'
					}}
				/>
				<Typography variant='h6'>
					{channelDetail?.snippet?.title}{' '}
					<CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
				</Typography>
				{channelDetail?.statistics?.subscriberCount && (
					<Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
						{toLocale(parseInt(channelDetail?.statistics?.subscriberCount))}
						Subscribers
					</Typography>
				)}
			</CardContent>
		</Link>
	</Box>
);

export default ChannelCard;
