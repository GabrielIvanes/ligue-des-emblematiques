// import facebook from '../assets/images/facebook.png';
// import instagram from '../assets/images/instagram.png';
// import info from '../assets/images/info.png';

function Author() {
	return (
		<div className='author-wrapper'>
			<div className='portrait-wrapper'>
				<h1>Gérard Millot</h1>
				<div className='portrait'></div>
			</div>

			<div className='informations'>
				<div className='top'>
					<div className='actuality'>Séance de dédicace: J-3 !</div>
					<div className='biography'>
						<h2>Biographie</h2>
						<div>
							Gérard Millot est un auteur de bande dessinée français né à Paris.
							Son œuvre, "La Ligue des Emblématiques", est sortie en 2004. Cette
							série captivante mêle habilement action, mystère et personnages
							complexes. Grâce à son talent exceptionnel et à son imagination
							débordante de son auteur. "La Ligue des Emblématiques" saura
							captiver les lecteurs avec ses histoires palpitantes et ses
							personnages inoubliables.
						</div>
					</div>
					{/* <div className='biography'>
						Gérard Millot est un auteur de bande dessinée français né à Paris.
						Son œuvre, "La Ligue des Emblématiques", est sortie en 2004. Cette
						série captivante mêle habilement action, mystère et personnages
						complexes. Grâce à son talent exceptionnel et à son imagination
						débordante de son auteur. "La Ligue des Emblématiques" saura
						captiver les lecteurs avec ses histoires palpitantes et ses
						personnages inoubliables.
					</div> */}
				</div>
				{/* <div className='social-media'>
					<div style={{ marginBottom: '10px' }}>
						Retrouvez le sur vos réseaux préférés
					</div>
					<div>
						<a href='#'>Facebook</a> | <a href='#'>Twitter</a> |{' '}
						<a href='#'>Instagram</a>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default Author;
