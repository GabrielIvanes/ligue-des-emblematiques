import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tchat from './pages/Tchat';
import Header from './components/Header';

function App() {
	return (
		<BrowserRouter>
			<div className='main-wrapper'>
				<div className='content'>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/tchat' element={<Tchat />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
