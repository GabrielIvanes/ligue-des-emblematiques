import portrait from '../../public/portrait.jpg';

function Home() {
	return (
		<div className='home-content'>
			<div className='top-content'>
				<div className='biography'>
					<img src={portrait} alt='portrait' />
					<div className='text'>
						Gérard Millot est un auteur de bande dessinée français né à Paris.
						Son œuvre, "La Ligue des Emblématiques", est sortie en 2004. Cette
						série captivante mêle habilement action, mystère et personnages
						complexes. Grâce à son talent exceptionnel et à son imagination
						débordante de son auteur. "La Ligue des Emblématiques" saura
						captiver les lecteurs avec ses histoires palpitantes et ses
						personnages inoubliables.
					</div>
				</div>
				<div className='information'>
					<h1>Séance de dédicace avec Gérard Milot dans 2 jours !</h1>
				</div>
			</div>
			<hr />
		</div>
	);
}

export default Home;
