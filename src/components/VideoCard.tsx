import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Video } from '../types';
import { replaceApos } from '../utils/replaceApos';
import { format } from 'timeago.js';
import Loader from './Loader';

const VideoCard = ({
	isLoading,
	video: {
		id: { videoId },
		snippet
	}
}: {
	isLoading: boolean;
	video: Video;
}) => {
	if (isLoading) {
		return <Loader />;
	}

	return (
		<Card
			sx={{
				width: { xs: '100%', sm: '358px', md: '320px' },
				boxShadow: 'none',
				borderRadius: 0
			}}
		>
			<Link to={`/watch/${videoId}`}>
				<CardMedia
					component='img'
					image={snippet.thumbnails.high.url}
					alt={snippet.title}
					sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
				/>
			</Link>
			<CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
				<Link to={`/watch/${videoId}`}>
					<Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
						{replaceApos(snippet.title.slice(0, 60)) + '...'}
					</Typography>
				</Link>
				<Link to={`/channel/${snippet.channelId}`}>
					<Typography variant='subtitle2' color='gray'>
						{snippet?.channelTitle}
						<CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
					</Typography>
				</Link>
				<Typography pt={2} variant='subtitle2' color='#FFF'>
					{} {format(snippet.publishedAt)}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default VideoCard;
