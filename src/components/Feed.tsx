import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useQuery } from 'react-query';

import Sidebar from './Sidebar';
import Videos from './Videos';
import { getVideos } from '../lib/api';
import { Videos as VideosType } from '../types';

const Feed = () => {
	const [category, setCategory] = useState('New');

	const { data: videos, isLoading } = useQuery(['feedVideos', category], () =>
		getVideos(`search?part=snippet&q=${category}`)
	);

	console.log({ videos });

	return (
		<Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
			<Box
				sx={{
					height: { sx: 'auto', md: '92vh' },
					borderRight: '1px solid #3d3d3d',
					px: { sx: 0, md: 2 }
				}}
			>
				<Sidebar selectedCategory={category} setSelectedCategory={setCategory} />

				<Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
					Copyright © 2022 DevTube
				</Typography>
			</Box>

			<Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
				<Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
					{category} <span style={{ color: '#FC1503' }}>videos</span>
				</Typography>

				<Videos isLoading={isLoading} videos={videos as VideosType} />
			</Box>
		</Stack>
	);
};

export default Feed;
