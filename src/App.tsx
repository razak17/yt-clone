import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Feed from './components/Feed';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';

const App = () => {
	return (
		<BrowserRouter>
			<Box sx={{ backgroundColor: '#000' }}>
				<Navbar />
				<Routes>
					<Route path='/' element={<Feed />} />
					<Route path='/watch/:id' element={<VideoDetail />} />
					<Route path='/channel/:id' element={<ChannelDetail />} />
					<Route path='/search/:searchQuery' element={<SearchResults />} />
				</Routes>
			</Box>
		</BrowserRouter>
	);
};

export default App;
