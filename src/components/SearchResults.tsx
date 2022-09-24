import { Typography, Box } from '@mui/material';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { getVideos } from '../lib/api';
import Videos from './Videos';
import { Videos as VideosType } from '../types';

const SearchResults = () => {
	const { searchQuery } = useParams();

	const { data: videos, isLoading } = useQuery(['searchResults', searchQuery], () =>
		getVideos(`search?part=snippet&q=${searchQuery}`)
	);

	return (
		<Box p={2} minHeight='95vh'>
			<Typography variant='h4' fontWeight={900} color='white' mb={3} ml={{ sm: '100px' }}>
				Search Results for: <span style={{ color: '#FC1503' }}>{searchQuery}</span>
			</Typography>
			<Box display='flex'>
				<Box sx={{ mr: { sm: '100px' } }} />
				{<Videos isLoading={isLoading} videos={videos as VideosType} />}
			</Box>
		</Box>
	);
};

export default SearchResults;
