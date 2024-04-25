import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import tumblr from '../assets/images/tumblr.png';
import ytb from '../assets/images/ytb.png';
import pinterest from '../assets/images/pinterest.png';
import twitter from '../assets/images/twitter.png';
import search from '../assets/images/search.png';
import notification from '../assets/audio/notification.mp3';

import titre from '../assets/images/titre6.png';

function Header() {
	const location = useLocation();
	const [showNotification, setShowNotification] = useState<boolean>(false);

	const locations = [
		{ url: '/', name: 'Accueil' },
		{ url: '/tchat', name: 'Tchat' },
		{ url: '/comics', name: 'Comics' },
		{ url: '/livres', name: 'Livres' },
		{ url: '/auteur', name: 'Auteur' },
	];

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'n') {
			setShowNotification(true);
			const myAudio = document.createElement('audio');
			myAudio.src = `${notification}`;
			myAudio.play();
		}
	}

	document.addEventListener('keydown', handleKeyDown);

	return (
		<header>
			<img src={titre} alt='titre' className='titre' />
			<h1>Fansite</h1>
			<nav>
				<div className='left'>
					<ul>
						{locations.map((loc, index) => (
							<li
								key={index}
								className={location.pathname === loc.url ? 'active' : ''}
							>
								{index === 1 ? (
									<Link
										to={loc.url}
										className='notification-wrapper'
										onClick={() => setShowNotification(false)}
									>
										<span>{loc.name}</span>
										{showNotification && (
											<>
												<div className='notification'>1</div>
												<audio src={notification}></audio>
											</>
										)}
									</Link>
								) : (
									<Link to={loc.url}>{loc.name}</Link>
								)}
							</li>
						))}
					</ul>
					<div className='search'>
						<input type='text' />
						<img src={search} alt='search' />
					</div>
				</div>
				<div className='logo'>
					<img src={facebook} alt='facebook' />
					<img src={twitter} alt='twitter' />
					<img src={tumblr} alt='tumblr' />
					<img src={ytb} alt='ytb' />
					<img src={instagram} alt='instagram' />
					<img src={pinterest} alt='pinterest' />
				</div>
			</nav>
		</header>
	);
}

export default Header;
