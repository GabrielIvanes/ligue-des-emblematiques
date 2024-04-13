import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tchat from './pages/Tchat';
import Header from './components/Header';
import pub1 from './assets/images/pub1.png';

function App() {
	return (
		<BrowserRouter>
			<div className='main-wrapper'>
				<div className='content'>
					<img src={pub1} alt='pub' className='pub1' />
					<img src={pub1} alt='pub' className='pub2' />

					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/tchat' element={<Tchat />} />
						<Route path='*' element={<Home />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
