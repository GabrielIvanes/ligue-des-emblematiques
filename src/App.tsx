import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Tchat from './pages/Tchat';
// import Tchat2 from './pages/Tchat2';
import Tchat3 from './pages/Tchat3';
import Header from './components/Header';
import Author from './pages/Author';

function App() {
	return (
		<BrowserRouter>
			<div className='main-wrapper'>
				<div className='content'>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/tchat' element={<Tchat3 />} />
						<Route path='/auteur' element={<Author />} />
						<Route path='*' element={<Home />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
