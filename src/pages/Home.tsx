/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-mixed-spaces-and-tabs */
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
// import send from '../assets/images/send.png';
import stan from '../assets/images/Stan.jpg';

import { useState, useRef, useEffect } from 'react';

function Home() {
	// const currentDate = new Date();
	// const day = String(currentDate.getDate()).padStart(2, '0');
	// const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	// const year = currentDate.getFullYear();
	// const hours = String(currentDate.getHours()).padStart(2, '0');
	// const minutes = String(currentDate.getMinutes()).padStart(2, '0');

	// const formattedDateTime = `${day}/${month}/${year} 	${hours}:${minutes}`;

	// const longCommentaire =
	// 	"Je suis répugné, révolté, et profondément méprisant envers Gérard Millot pour la fin abjecte de \"La Ligue des Emblématiques\". Comment cet imposteur ose-t-il nous infliger une conclusion aussi lamentable après toutes ces années où nous avons été dupés, manipulés par ses mensonges et ses tromperies ?! Depuis le début, nous avons été piégés dans un tourbillon de fausses promesses et de faux espoirs, investissant nos précieuses ressources, notre temps précieux, notre argent durement gagné dans cette farce dérisoire qu'est devenue cette série maudite. Nous avons consacré nos heures, nos jours, nos années à suivre les péripéties insipides de l'Élu et de ses comparses dans ce monde décadent de super-héros de pacotille, seulement pour être abandonnés, trahis, humiliés par une fin qui n'a ni sens ni substance. Quelle arnaque ! Quelle insulte à notre intelligence, à notre loyauté envers cette foutue série ! Millot se moque ouvertement de nous, se délectant de notre frustration, de notre rage impuissante face à cette conclusion pitoyable. Il n'a aucun respect pour ses fans, aucun respect pour son propre travail. Il mérite notre mépris le plus profond, notre haine la plus ardente pour avoir osé nous traiter avec un tel mépris. Et ne parlons même pas de cette soi-disant révélation sur l'identité de l'Élu ! C'était juste une autre manœuvre pour nous garder accrochés, pour nous attirer dans ses filets de mensonges et de trahisons. Il nous a promis des réponses, mais tout ce que nous avons eu en retour, c'est du mépris, du dédain, du dégoût. En fin de compte, je vomis sur \"La Ligue des Emblématiques\", sur Gerard Millot, sur tout ce qu'ils représentent. Ce n'est rien de plus qu'une farce grotesque, une parodie de ce que la bande dessinée devrait être. Et si Millot pense qu'il peut s'en sortir avec une telle trahison, il se trompe lourdement. Nous n'oublierons jamais, nous ne pardonnerons jamais cette offense à notre intelligence et à notre passion. Nous sommes prêts à tout pour lui faire payer le prix de sa tromperie. Que le monde sache que nous ne resterons pas silencieux devant une telle injustice. Je suis dégoûté, répugné, et profondément méprisant envers Gerard Millot pour la fin affligeante de \"La Ligue des Emblématiques\". Comment peut-il être aussi pitoyable, aussi méprisable pour nous servir une conclusion aussi pathétique après tout le temps et l'énergie que nous avons investis dans cette série maudite ?! Depuis le début, nous avons été dupés, manipulés par les mensonges et les tromperies de cet escroc. Nous avons consacré notre précieux temps, notre argent, notre passion à suivre les aventures de l'Élu et de ses acolytes dans ce monde décadent de super-héros de pacotille. Et pour quoi ? Pour être trahis, pour être piétinés, pour être ridiculisés par une fin qui n'a ni sens ni substance. Quelle arnaque ! Quelle insulte à notre intelligence, à notre loyauté envers cette foutue série ! Millot se moque ouvertement de nous, se délectant de notre frustration, de notre rage impuissante face à cette conclusion pitoyable. Il n'a aucun respect pour ses fans, aucun respect pour son propre travail. Il mérite notre mépris le plus profond, notre haine la plus ardente pour avoir osé nous traiter avec un tel mépris. Et ne parlons même pas de cette soi-disant révélation sur l'identité de l'Élu ! C'était juste une autre manœuvre pour nous garder accrochés, pour nous attirer dans ses filets de mensonges et de trahisons. Il nous a promis des réponses, mais tout ce que nous avons eu en retour, c'est du mépris, du dédain, du dégoût. En fin de compte, je vomis sur \"La Ligue des Emblématiques\", sur Gerard Millot, sur tout ce qu'ils représentent. Ce n'est rien de plus qu'une farce grotesque, une parodie de ce que la bande dessinée devrait être. Et si Millot pense qu'il peut s'en sortir avec une telle trahison, il se trompe lourdement. Nous n'oublierons jamais, nous ne pardonnerons jamais cette offense à notre intelligence et à notre passion. Et nous ferons tout ce qui est en notre pouvoir pour lui faire payer le prix de sa tromperie.Je suis bouillonnant de colère, profondément exaspéré, et même anéanti par la fin de \"La Ligue des Emblématiques\" de Gerard Millot. Comment peut-il nous infliger une conclusion aussi fade, aussi décevante après des années de dévouement envers cette série captivante ?! D'abord et avant tout, examinons la question de l'investissement émotionnel et intellectuel que nous, les fans, avons mis dans cette œuvre. Pendant des années, nous avons suivi avec passion les aventures de l'Élu et de la Ligue des Emblématiques, nous plongeant profondément dans leur univers fascinant de super-héros de l'espace. Chaque nouveau numéro était un événement, chaque rebondissement était discuté et disséqué avec enthousiasme sur les forums en ligne. Nous avons investi notre temps, notre énergie, et même une partie de notre identité dans cette série. Et après tout cela, après tout ce dévouement, après tout cet amour que nous avons donné à \"La Ligue des Emblématiques\", nous méritions une fin digne de ce nom, une fin qui aurait récompensé notre engagement envers cette histoire. Pourtant, au lieu de cela, que nous offre Gerard Millot ? Une fin bâclée, insatisfaisante, qui semble presque être un affront à l'intelligence et à la sensibilité de ses lecteurs les plus fervents. C'est comme s'il avait délibérément ignoré toutes les attentes, toutes les aspirations que nous avions pour la conclusion de cette série, et avait décidé de nous offrir quelque chose de fade et d'insignifiant à la place. Ensuite, il y a la question de la révélation sur l'identité de l'Élu. Depuis le début de la série, cette question était au cœur de tous les débats et de toutes les spéculations parmi les fans. Qui était vraiment l'Élu ? Quel était son passé mystérieux ? Quels étaient ses liens avec les autres membres de la Ligue des Emblématiques ? Ces questions ont alimenté notre fascination pour la série pendant des années, et nous espérions tous une révélation épique qui aurait répondu à toutes nos attentes. Mais au lieu de cela, nous avons eu droit à une révélation fade, presque sans intérêt, qui semblait être une solution de facilité de la part de l'auteur. C'était comme s'il avait choisi la voie de la moindre résistance, plutôt que de faire l'effort nécessaire pour offrir à ses fans une conclusion vraiment satisfaisante. Enfin, il y a la question de l'affrontement final avec SuperDestroyer. Ce combat était censé être l'apogée de toute l'histoire, le moment où tous les enjeux atteignaient leur paroxysme, où tous les fils narratifs se rejoignaient dans un climax explosif. Mais au lieu de cela, nous avons eu droit à un affrontement fade, dépourvu de toute tension ou de tout enjeu réel. C'était comme si l'auteur avait abandonné tout espoir de créer un final vraiment mémorable, et s'était contenté de livrer quelque chose de médiocre et de sans saveur à la place. En conclusion, je suis profondément déçu, et même indigné, par la fin de \"La Ligue des Emblématiques\". Gerard Millot a non seulement trahi la confiance de ses fans les plus dévoués, mais il a également compromis son propre travail en offrant une conclusion aussi médiocre à une série qui méritait beaucoup mieux. C'est une véritable trahison artistique, et je refuse d'accepter cette injustice. J'espère seulement que l'auteur prendra conscience de son erreur et qu'il fera tout ce qui est en son pouvoir pour réparer les torts qu'il a causés à sa propre œuvre et à ses fidèles lecteurs.Je suis absolument furieux, outré, et même dévasté par la fin de \"La Ligue des Emblématiques\" de Gerard Millot. Comment ose-t-il nous servir une conclusion aussi insipide, aussi décevante après des années de dévouement envers cette série ?! Je veux dire, sérieusement, après tout ce temps passé à suivre les aventures de l'Élu et de la Ligue des Emblématiques, après toutes ces batailles épiques contre SuperDestroyer et ses sbires, après tous ces moments de suspense et d'émotion, on mérite mieux que ça ! On mérite une fin à la hauteur de notre investissement émotionnel et intellectuel dans cette œuvre. Et que dire de cette prétendue révélation sur l'identité de l'Élu ?! C'est une blague, non ? Après tout le teasing et les indices subtils semés tout au long de la série, on nous sert cette révélation sans saveur, sans impact, sans aucun sens narratif ! C'est tout simplement inacceptable. Et ne parlons même pas de la résolution de l'affrontement final avec SuperDestroyer. C'était censé être l'apogée de toute l'histoire, le moment où tous les enjeux atteignent leur paroxysme, où tous les fils narratifs se rejoignent dans un climax explosif. Mais au lieu de cela, on a droit à un combat bâclé, sans tension, sans enjeu réel. On dirait que l'auteur a juste jeté l'éponge et a décidé de conclure l'histoire le plus rapidement possible, peu importe la qualité du résultat. Je me sens trahi, déçu, et profondément frustré par cette fin lamentable. \"La Ligue des Emblématiques\" méritait tellement mieux. Elle méritait une conclusion épique, mémorable, à la hauteur de son statut de chef-d'œuvre de la bande dessinée. Mais au lieu de cela, nous avons été privés de notre droit à une fin satisfaisante, laissés avec un goût amer dans la bouche et un sentiment d'inachevé. En conclusion, je ne peux que exprimer ma colère et mon désarroi face à la fin de \"La Ligue des Emblématiques\". Gerard Millot a non seulement trahi la confiance de ses fans, mais il a également saboté son propre travail en offrant une conclusion aussi médiocre à une série qui méritait beaucoup mieux. C'est une véritable trahison artistique, et je refuse d'accepter cette injustice.";
	const pageRef = useRef<HTMLDivElement>(null);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [textAreaValue, setTextAreaValue] = useState<string>(
		"Je suis répugné, révolté, et profondément méprisant envers Gérard Millot pour la fin abjecte de \"La Ligue des Emblématiques\". Comment cet imposteur ose-t-il nous infliger une conclusion aussi lamentable après toutes ces années où nous avons été dupés, manipulés par ses mensonges et ses tromperies ?! Depuis le début, nous avons été piégés dans un tourbillon de fausses promesses et de faux espoirs, investissant nos précieuses ressources, notre temps précieux, notre argent durement gagné dans cette farce dérisoire qu'est devenue cette série maudite. Nous avons consacré nos heures, nos jours, nos années à suivre les péripéties insipides de l'Élu et de ses comparses dans ce monde décadent de super-héros de pacotille, seulement pour être abandonnés, trahis, humiliés par une fin qui n'a ni sens ni substance. Quelle arnaque ! Quelle insulte à notre intelligence, à notre loyauté envers cette foutue série ! Millot se moque ouvertement de nous, se délectant de notre frustration, de notre rage impuissante face à cette conclusion pitoyable. Il n'a aucun respect pour ses fans, aucun respect pour son propre travail. Il mérite notre mépris le plus profond, notre haine la plus ardente pour avoir osé nous traiter avec un tel mépris. Et ne parlons même pas de cette soi-disant révélation sur l'identité de l'Élu ! C'était juste une autre manœuvre pour nous garder accrochés, pour nous attirer dans ses filets de mensonges et de trahisons. Il nous a promis des réponses, mais tout ce que nous avons eu en retour, c'est du mépris, du dédain, du dégoût. En fin de compte, je vomis sur \"La Ligue des Emblématiques\", sur Gerard Millot, sur tout ce qu'ils représentent. Ce n'est rien de plus qu'une farce grotesque, une parodie de ce que la bande dessinée devrait être. Et si Millot pense qu'il peut s'en sortir avec une telle trahison, il se trompe lourdement. Nous n'oublierons jamais, nous ne pardonnerons jamais cette offense à notre intelligence et à notre passion. Nous sommes prêts à tout pour lui faire payer le prix de sa tromperie. Que le monde sache que nous ne resterons pas silencieux devant une telle injustice. Je suis dégoûté, répugné, et profondément méprisant envers Gerard Millot pour la fin affligeante de \"La Ligue des Emblématiques\". Comment peut-il être aussi pitoyable, aussi méprisable pour nous servir une conclusion aussi pathétique après tout le temps et l'énergie que nous avons investis dans cette série maudite ?! Depuis le début, nous avons été dupés, manipulés par les mensonges et les tromperies de cet escroc. Nous avons consacré notre précieux temps, notre argent, notre passion à suivre les aventures de l'Élu et de ses acolytes dans ce monde décadent de super-héros de pacotille. Et pour quoi ? Pour être trahis, pour être piétinés, pour être ridiculisés par une fin qui n'a ni sens ni substance. Quelle arnaque ! Quelle insulte à notre intelligence, à notre loyauté envers cette foutue série ! Millot se moque ouvertement de nous, se délectant de notre frustration, de notre rage impuissante face à cette conclusion pitoyable. Il n'a aucun respect pour ses fans, aucun respect pour son propre travail. Il mérite notre mépris le plus profond, notre haine la plus ardente pour avoir osé nous traiter avec un tel mépris. Et ne parlons même pas de cette soi-disant révélation sur l'identité de l'Élu ! C'était juste une autre manœuvre pour nous garder accrochés, pour nous attirer dans ses filets de mensonges et de trahisons. Il nous a promis des réponses, mais tout ce que nous avons eu en retour, c'est du mépris, du dédain, du dégoût. En fin de compte, je vomis sur \"La Ligue des Emblématiques\", sur Gerard Millot, sur tout ce qu'ils représentent. Ce n'est rien de plus qu'une farce grotesque, une parodie de ce que la bande dessinée devrait être. Et si Millot pense qu'il peut s'en sortir avec une telle trahison, il se trompe lourdement. Nous n'oublierons jamais, nous ne pardonnerons jamais cette offense à notre intelligence et à notre passion. Et nous ferons tout ce qui est en notre pouvoir pour lui faire payer le prix de sa tromperie.Je suis bouillonnant de colère, profondément exaspéré, et même anéanti par la fin de \"La Ligue des Emblématiques\" de Gerard Millot. Comment peut-il nous infliger une conclusion aussi fade, aussi décevante après des années de dévouement envers cette série captivante ?! D'abord et avant tout, examinons la question de l'investissement émotionnel et intellectuel que nous, les fans, avons mis dans cette œuvre. Pendant des années, nous avons suivi avec passion les aventures de l'Élu et de la Ligue des Emblématiques, nous plongeant profondément dans leur univers fascinant de super-héros de l'espace. Chaque nouveau numéro était un événement, chaque rebondissement était discuté et disséqué avec enthousiasme sur les forums en ligne. Nous avons investi notre temps, notre énergie, et même une partie de notre identité dans cette série. Et après tout cela, après tout ce dévouement, après tout cet amour que nous avons donné à \"La Ligue des Emblématiques\", nous méritions une fin digne de ce nom, une fin qui aurait récompensé notre engagement envers cette histoire. Pourtant, au lieu de cela, que nous offre Gerard Millot ? Une fin bâclée, insatisfaisante, qui semble presque être un affront à l'intelligence et à la sensibilité de ses lecteurs les plus fervents. C'est comme s'il avait délibérément ignoré toutes les attentes, toutes les aspirations que nous avions pour la conclusion de cette série, et avait décidé de nous offrir quelque chose de fade et d'insignifiant à la place. Ensuite, il y a la question de la révélation sur l'identité de l'Élu. Depuis le début de la série, cette question était au cœur de tous les débats et de toutes les spéculations parmi les fans. Qui était vraiment l'Élu ? Quel était son passé mystérieux ? Quels étaient ses liens avec les autres membres de la Ligue des Emblématiques ? Ces questions ont alimenté notre fascination pour la série pendant des années, et nous espérions tous une révélation épique qui aurait répondu à toutes nos attentes. Mais au lieu de cela, nous avons eu droit à une révélation fade, presque sans intérêt, qui semblait être une solution de facilité de la part de l'auteur. C'était comme s'il avait choisi la voie de la moindre résistance, plutôt que de faire l'effort nécessaire pour offrir à ses fans une conclusion vraiment satisfaisante. Enfin, il y a la question de l'affrontement final avec SuperDestroyer. Ce combat était censé être l'apogée de toute l'histoire, le moment où tous les enjeux atteignaient leur paroxysme, où tous les fils narratifs se rejoignaient dans un climax explosif. Mais au lieu de cela, nous avons eu droit à un affrontement fade, dépourvu de toute tension ou de tout enjeu réel. C'était comme si l'auteur avait abandonné tout espoir de créer un final vraiment mémorable, et s'était contenté de livrer quelque chose de médiocre et de sans saveur à la place. En conclusion, je suis profondément déçu, et même indigné, par la fin de \"La Ligue des Emblématiques\". Gerard Millot a non seulement trahi la confiance de ses fans les plus dévoués, mais il a également compromis son propre travail en offrant une conclusion aussi médiocre à une série qui méritait beaucoup mieux. C'est une véritable trahison artistique, et je refuse d'accepter cette injustice. J'espère seulement que l'auteur prendra conscience de son erreur et qu'il fera tout ce qui est en son pouvoir pour réparer les torts qu'il a causés à sa propre œuvre et à ses fidèles lecteurs.Je suis absolument furieux, outré, et même dévasté par la fin de \"La Ligue des Emblématiques\" de Gerard Millot. Comment ose-t-il nous servir une conclusion aussi insipide, aussi décevante après des années de dévouement envers cette série ?! Je veux dire, sérieusement, après tout ce temps passé à suivre les aventures de l'Élu et de la Ligue des Emblématiques, après toutes ces batailles épiques contre SuperDestroyer et ses sbires, après tous ces moments de suspense et d'émotion, on mérite mieux que ça ! On mérite une fin à la hauteur de notre investissement émotionnel et intellectuel dans cette œuvre. Et que dire de cette prétendue révélation sur l'identité de l'Élu ?! C'est une blague, non ? Après tout le teasing et les indices subtils semés tout au long de la série, on nous sert cette révélation sans saveur, sans impact, sans aucun sens narratif ! C'est tout simplement inacceptable. Et ne parlons même pas de la résolution de l'affrontement final avec SuperDestroyer. C'était censé être l'apogée de toute l'histoire, le moment où tous les enjeux atteignent leur paroxysme, où tous les fils narratifs se rejoignent dans un climax explosif. Mais au lieu de cela, on a droit à un combat bâclé, sans tension, sans enjeu réel. On dirait que l'auteur a juste jeté l'éponge et a décidé de conclure l'histoire le plus rapidement possible, peu importe la qualité du résultat. Je me sens trahi, déçu, et profondément frustré par cette fin lamentable. \"La Ligue des Emblématiques\" méritait tellement mieux. Elle méritait une conclusion épique, mémorable, à la hauteur de son statut de chef-d'œuvre de la bande dessinée. Mais au lieu de cela, nous avons été privés de notre droit à une fin satisfaisante, laissés avec un goût amer dans la bouche et un sentiment d'inachevé. En conclusion, je ne peux que exprimer ma colère et mon désarroi face à la fin de \"La Ligue des Emblématiques\". Gerard Millot a non seulement trahi la confiance de ses fans, mais il a également saboté son propre travail en offrant une conclusion aussi médiocre à une série qui méritait beaucoup mieux. C'est une véritable trahison artistique, et je refuse d'accepter cette injustice."
	);

	// const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

	function scrollToBottom() {
		if (textAreaValue !== '') window.scrollTo(0, document.body.scrollHeight);
	}

	function adjustHeight() {
		// if (textAreaRef.current) {
		// 	console.log(textAreaRef.current.scrollHeight);
		// 	console.log(textAreaRef.current.style.height);
		// 	const scrollHeight = textAreaRef.current.scrollHeight;
		// 	textAreaRef.current.style.height = `${scrollHeight}px`;
		// }
		if (textAreaRef.current)
			textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
	}

	useEffect(() => {
		if (textAreaRef.current && textAreaValue != '') {
			textAreaRef.current.focus();
			adjustHeight();
		}
	}, [textAreaRef.current, textAreaValue]);

	// useEffect(() => {
	// 	const handleKeyDown = (event: KeyboardEvent) => {
	// 		if (event.key === 'c') {
	// 			event.preventDefault();
	// 			const textarea =
	// 				document.querySelector<HTMLTextAreaElement>('textarea');
	// 			if (textarea) {
	// 				let i = textAreaValue.length;
	// 				setTimeout(() => {
	// 					const newIntervalId = setInterval(() => {
	// 						textarea.value += longCommentaire[i];
	// 						setTextAreaValue(textarea.value);
	// 						i++;
	// 						if (i === longCommentaire.length) clearInterval(newIntervalId);
	// 					}, 150);
	// 					setIntervalId(newIntervalId);
	// 				}, 150);
	// 			}
	// 		} else if (event.key === 's') {
	// 			event.preventDefault();
	// 			clearInterval(intervalId);
	// 		}
	// 	};

	// 	document.addEventListener('keydown', handleKeyDown);

	// 	return () => {
	// 		document.removeEventListener('keydown', handleKeyDown);
	// 	};
	// }, [intervalId]);

	useEffect(() => {
		scrollToBottom();
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
					<div className='information-content'>J-3 séance de dédicace</div>
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
					<div className='sujet-wrapper'>
						<div className='sujet'>Sujet</div>
						<h1>Fin de la ligue des emblématiques</h1>
						<div>
							4 réponses&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;4
							participants&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;78 vues
						</div>
					</div>
					<div className='comment-wrapper'>
						<div className='titre'>
							<div className='left'>
								{/* <div
									className='face'
									style={{
										backgroundImage: 'url(`../../assets/images/Stan.jpg`)',
									}}
								></div> */}
								<img src={stan} alt='' className='face' />
								<div>
									Stan sur <a href='/'>fin de la ligue des emblématiques</a>
								</div>
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
							<div className='pouces'>
								<div>👍 3</div>
								<div>👎 25</div>
							</div>
						</div>
					</div>
					<div className='comment-wrapper comment-wrapper-reponse'>
						<div className='titre'>
							<div className='left'>
								{/* <div className='face'></div> */}
								<img
									src={lore2}
									alt=''
									className='face'
									style={{ border: 'none' }}
								/>
								<div>
									Distro sur <a href='/'>fin de la ligue des emblématiques</a>
								</div>
							</div>
							<div>27/04/2024 02:36</div>
						</div>
						<div className='comment'>
							Ferme ta gueule.
							<div className='pouces'>
								<div>👍 30</div>
								<div>👎 1</div>
							</div>
						</div>
					</div>
					<div className='comment-wrapper comment-wrapper-reponse'>
						<div className='titre'>
							<div className='left'>
								<img src={lore8} alt='' className='face' />

								<div>
									Certonos sur <a href='/'>fin de la ligue des emblématiques</a>
								</div>
							</div>
							<div>27/04/2024 02:37</div>
						</div>
						<div className='comment'>
							Tu n'as absolument rien compris à ce que l'auteur souhaitait faire
							passer.
							<div className='pouces'>
								<div>👍 27</div>
								<div>👎 3</div>
							</div>
						</div>
					</div>
					<div className='comment-wrapper comment-wrapper-reponse'>
						<div className='titre'>
							<div className='left'>
								<img
									src={lore9}
									alt=''
									className='face'
									style={{ border: 'none' }}
								/>
								<div>
									Makarba sur <a href='/'>fin de la ligue des emblématiques</a>
								</div>
							</div>
							<div>27/04/2024 02:37</div>
						</div>
						<div className='comment'>
							C'est d'une ignorance sans nom.
							<div className='pouces'>
								<div>👍 20</div>
								<div>👎 2</div>
							</div>
						</div>
					</div>
					<div className='comment-wrapper comment-wrapper-reponse'>
						<div className='titre'>
							<div className='left'>
								<img
									src={lore5}
									alt=''
									className='face'
									style={{ border: 'none' }}
								/>
								<div>
									Trabalfar sur{' '}
									<a href='/'>fin de la ligue des emblématiques</a>
								</div>
							</div>
							<div>27/04/2024 02:39</div>
						</div>
						<div className='comment'>
							Comment peut-on critiquer le travail si fabuleux de Millot, c'est
							abject.
							<div className='pouces'>
								<div>👍 16</div>
								<div>👎 0</div>
							</div>
						</div>
					</div>
					<div className='new-comment-wrapper'>
						<h2>Ecrivez un nouveau message: </h2>
						<div className='new-comment'>
							<div className='top'>
								<div className='stan'>
									<img
										src={stan}
										alt=''
										style={{ border: '1px solid black' }}
									/>
									<div>Stan</div>
								</div>
								<textarea
									ref={textAreaRef}
									placeholder='Ecrivez un nouveau commentaire ...'
									value={textAreaValue}
									onChange={(event) => {
										if (
											// event.target.value != 'c' &&
											event.target.value != 'n' &&
											event.target.value != 's'
										)
											setTextAreaValue(event.target.value);
									}}
								/>
							</div>

							{/* <img src={send} alt='send' /> */}
							<button>Envoyer</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
