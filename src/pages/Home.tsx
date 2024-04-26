import portrait from '../assets/images/portrait.jpg';
import lore1 from '../assets/images/lore/1.png';
import lore2 from '../assets/images/lore/2.png';
import lore3 from '../assets/images/lore/3.png';
import lore4 from '../assets/images/lore/4.png';
import lore5 from '../assets/images/lore/5.png';
import lore6 from '../assets/images/lore/6.png';
import lore7 from '../assets/images/lore/7.png';
import lore8 from '../assets/images/lore/8.png';
import lore9 from '../assets/images/lore/9.png';
import lore10 from '../assets/images/lore/10.png';
import attention from '../assets/images/attention.png';
import send from '../assets/images/send.png';

import { useState, FormEvent, useRef, useEffect } from 'react';

function Home() {
	// const currentDate = new Date();
	// const day = String(currentDate.getDate()).padStart(2, '0');
	// const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	// const year = currentDate.getFullYear();
	// const hours = String(currentDate.getHours()).padStart(2, '0');
	// const minutes = String(currentDate.getMinutes()).padStart(2, '0');

	// const formattedDateTime = `${day}/${month}/${year} 	${hours}:${minutes}`;

	const longCommentaire =
		'Gérard Millot est un auteur de bande dessinée français né à Paris. Son œuvre, "La Ligue des Emblématiques", est sortie en 2004. Cettesérie captivante mêle habilement action, mystère et personnagescomplexes. Grâce à son talent exceptionnel et à son imaginationdébordante de son auteur. "La Ligue des Emblématiques" sauracaptiver les lecteurs avec ses histoires palpitantes et sespersonnages inoubliables.Gérard Millot est un auteur de bande dessinée français né à Paris.Son œuvre, "La Ligue des Emblématiques", est sortie en 2004. Cettesérie captivante mêle habilement action, mystère et personnagescomplexes. Grâce à son talent exceptionnel et à son imaginationdébordante de son auteur. "La Ligue des Emblématiques" sauracaptiver les lecteurs avec ses histoires palpitantes et sespersonnages inoubliables.Gérard Millot est un auteur de bande dessinée français né à Paris.Son œuvre, "La Ligue des Emblématiques", est sortie en 2004. Cettesérie captivante mêle habilement action, mystère et personnagescomplexes. Grâce à son talent exceptionnel et à son imaginationdébordante de son auteur. "La Ligue des Emblématiques" sauracaptiver les lecteurs avec ses histoires palpitantes et sespersonnages inoubliables.Gérard Millot est un auteur de bande dessinée français né à Paris.Son œuvre, "La Ligue des Emblématiques", est sortie en 2004. Cettesérie captivante mêle habilement action, mystère et personnagescomplexes. Grâce à son talent exceptionnel et à son imaginationdébordante de son auteur. "La Ligue des Emblématiques" sauracaptiver les lecteurs avec ses histoires palpitantes et sespersonnages inoubliables.';

	const pageRef = useRef<HTMLDivElement>(null);

	const [textAreaValue, setTextAreaValue] = useState<string>('');
	const [heightTextArea, setHeightTextArea] = useState<number>(0);

	useEffect(() => {
		scrollToBottom();
	}, [textAreaValue]);

	function scrollToBottom() {
		if (pageRef.current) {
			pageRef.current.scrollTop = pageRef.current.scrollHeight;
		}
	}

	function adjustHeight(event: FormEvent<HTMLTextAreaElement> | null) {
		if (event) {
			const contentHeight = Math.max(
				event.currentTarget.scrollHeight,
				event.currentTarget.clientHeight
			);
			if (textAreaValue === '') setHeightTextArea(30);
			else setHeightTextArea(contentHeight);
		}
	}

	function writeText() {
		let index = 0;
		const textarea = document.querySelector<HTMLInputElement>('textarea');

		const interval = setInterval(() => {
			if (longCommentaire && index < longCommentaire.length && textarea) {
				textarea.value += longCommentaire[index];
				index += 1;
			} else {
				clearInterval(interval);
			}
		}, 100);
	}

	useEffect(() => {
		if (textAreaValue === '') setHeightTextArea(30);
	}, [textAreaValue]);

	return (
		<div className='home-content' ref={pageRef}>
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
					<div className='titre'>
						<img src={attention} alt='' />
						Dernières news
					</div>
					<div className='information-content'>
						Séance de dédicace avec Gérard Millot dans 2 jours !
					</div>
				</div>
			</div>
			<hr />
			<div className='lore-wrapper'>
				<h2>Lore</h2>
				<div className='lore'>
					<img src={lore1} alt='lore1' />
					<img src={lore2} alt='lore2' />
					<img src={lore3} alt='lore3' />
					<img src={lore4} alt='lore4' />
					<img src={lore5} alt='lore5' />
					<img src={lore6} alt='lore6' />
					<img src={lore7} alt='lore7' />
					<img src={lore8} alt='lore8' />
					<img src={lore9} alt='lore9' />
					<img src={lore10} alt='lore10' />
				</div>
			</div>
			<hr />
			<div className='comments-wrapper'>
				<h2>Espace commentaire</h2>
				<div className='comments'>
					<div className='comment-wrapper'>
						<div className='titre'>
							<div>
								Stan sur <a href='/'>fin de la ligue des emblématiques</a>
							</div>
							<div>27/04/2024 02:34</div>
						</div>
						<div className='comment'>
							Absolument abject ! La fin de "La Ligue des Emblématiques" est un
							affront à l'intelligence même des lecteurs. Après des années
							d'investissement émotionnel dans ces personnages, l'auteur décide
							de les trahir en les faisant mourir de manière absurde et
							incohérente. Aucune résolution, aucun sens, juste un gâchis de
							potentiel narratif. C'est une insulte à ceux qui ont suivi cette
							saga avec passion, une marque de mépris délibéré envers ceux qui
							ont investi leur temps et leur affection dans cet univers. Que cet
							auteur ose appeler cela un épilogue digne de ce nom est une HONTE.
						</div>
					</div>
					<div className='new-comment'>
						<textarea
							style={{ height: `${heightTextArea}px` }}
							placeholder='Ecrivez un nouveau commentaire ...'
							value={textAreaValue}
							onChange={(event) => {
								adjustHeight(event);
								setTextAreaValue(event.target.value);
							}}
						/>
						<img src={send} alt='send' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
