import { Link, useLocation } from 'react-router-dom';

function Header() {
	const location = useLocation();

	const locations = [
		{ url: '/', name: 'Accueil' },
		{ url: '/tchat', name: 'Tchat' },
		{ url: '/comics', name: 'Comics' },
		{ url: '/livres', name: 'Livres' },
		{ url: '/auteur', name: 'Auteur' },
	];

	return (
		<header>
			<h1>La ligue des emblématiques</h1>
			<nav>
				<ul>
					{locations.map((loc, index) => (
						<li
							key={index}
							className={location.pathname === loc.url ? 'active' : ''}
						>
							<Link to={loc.url}>{loc.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
