import portrait from '../assets/images/portrait.jpg';
// import facebook from '../assets/images/facebook.png';
// import instagram from '../assets/images/instagram.png';
import info from '../assets/images/info.png';

function Author() {
	return (
		<div className='author-wrapper portrait'>
			<img src={portrait} alt='portrait' className='portrait' />
			<div className='informations'>
				<div className='top'>
					<h1>Gérard Millot</h1>
					<div className='actuality' style={{ marginBottom: '5px' }}>
						<img src={info} alt='' />
						Séance de dédicace dans 3 jours !
					</div>
					<div className='biography'>
						Gérard Millot est un auteur de bande dessinée français né à Paris.
						Son œuvre, "La Ligue des Emblématiques", est sortie en 2004. Cette
						série captivante mêle habilement action, mystère et personnages
						complexes. Grâce à son talent exceptionnel et à son imagination
						débordante de son auteur. "La Ligue des Emblématiques" saura
						captiver les lecteurs avec ses histoires palpitantes et ses
						personnages inoubliables.
					</div>
				</div>
				<div className='social-media'>
					<div style={{ marginBottom: '10px' }}>
						Retrouvez le sur vos réseaux préférés
					</div>
					{/* <div className='logo'>
						<img src={facebook} alt='facebook' />
						<img src={twitter} alt='twitter' />
						<img src={instagram} alt='instagram' />
					</div> */}
					<div>
						<a href='#'>Facebook</a> | <a href='#'>Twitter</a> |{' '}
						<a href='#'>Instagram</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Author;
