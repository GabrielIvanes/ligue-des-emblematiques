import { useRef, useEffect, useState } from 'react';

import dots from '../assets/images/dots.svg';
import send from '../assets/images/send.png';

interface Message {
	text: string;
	author: string;
	date: string;
}

function Tchat() {
	const messagesSuperDestroyer = [
		'Naleko, je viens vers toi suite à ton commentaire. C’est juste. Très juste. Nous honoreras-tu de ta présence lors de la séance de dédicace ?',
		'Erreur. Très grosse erreur.',
		'Tu possèdes le potentiel.',
		'Je voulais te faire une proposition.',
		'Je cherche des gens pour m’accompagner. Je vais proposer à l’auteur de réécrire sa fin. Si tu veux te joindre à moi... rendez-vous au Bar Barella à 11h30.',
	];

	const messagesStan = [
		'Okelan, Non. Ce n’est certainement plus d’actualité.',
		'Pourquoi ?',
		'Comment ça ?',
	];

	const messages = [
		{
			text: messagesSuperDestroyer[0],
			author: 'SuperDestroyer78',
			date: '27/04/2024 03:16',
		},
		{
			text: messagesStan[0],
			author: 'Stan',
			date: '27/04/2024 03:16',
		},
		{
			text: messagesSuperDestroyer[1],
			author: 'SuperDestroyer78',
			date: '27/04/2024 03:16',
		},
		{
			text: messagesStan[1],
			author: 'Stan',
			date: '27/04/2024 03:16',
		},
		{
			text: messagesSuperDestroyer[2],
			author: 'SuperDestroyer78',
			date: '27/04/2024 03:17',
		},
		{
			text: messagesStan[2],
			author: 'Stan',
			date: '27/04/2024 03:17',
		},
		{
			text: messagesSuperDestroyer[3],
			author: 'SuperDestroyer78',
			date: '27/04/2024 03:17',
		},
		{
			text: messagesSuperDestroyer[4],
			author: 'SuperDestroyer78',
			date: '27/04/2024 03:18',
		},
	];

	const [inputValue, setInputValue] = useState<string>('');

	const [messageIndex, setMessageIndex] = useState(1);
	const [messageAccepted, setMessageAccepted] = useState<boolean>(false);

	const tchatRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	useEffect(() => {
		const tchat = document.querySelector('.tchat');
		const divPetitsPoints = document.querySelector('.petitsPoints');
		if (divPetitsPoints && tchat) {
			tchat.removeChild(divPetitsPoints);
		}
		if (
			messages[messageIndex] &&
			messages[messageIndex].author === 'SuperDestroyer78' &&
			tchat &&
			!divPetitsPoints
		) {
			const div = document.createElement('div');
			const img = document.createElement('img');
			img.src = dots;
			img.alt = 'dots';
			div.classList.add('petitsPoints');

			div.appendChild(img);

			setTimeout(() => {
				requestAnimationFrame(() => {
					div.classList.add('fade-in');
				});
				if (!document.querySelector('.petitsPoints')) tchat.appendChild(div);
			}, 4000);
		}
	}, [messageIndex]);

	useEffect(() => {
		function writeText() {
			let index = 0;
			const input =
				document.querySelector<HTMLInputElement>('.new-tchat input');

			const interval = setInterval(() => {
				if (
					messages[messageIndex].text &&
					index < messages[messageIndex].text.length &&
					input &&
					messages[messageIndex].author !== 'SuperDestroyer78' &&
					messageAccepted
				) {
					input.value += messages[messageIndex].text[index];
					index += 1;
				} else {
					clearInterval(interval);
				}
			}, 100);
		}

		const timeoutId = setTimeout(writeText, messageIndex === 1 ? 6000 : 3000);

		return () => clearTimeout(timeoutId);
	}, [messageIndex, messageAccepted]);

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	function addDivMessage(message: Message) {
		const tchat = document.querySelector('.tchat');
		const divMessageWrapper = document.createElement('div');
		const divTitre = document.createElement('div');
		const divPersonMessage = document.createElement('div');
		const divDate = document.createElement('div');
		const divMessage = document.createElement('div');
		const divLeft = document.createElement('div');
		const divFace = document.createElement('div');

		divMessageWrapper.classList.add(
			'message-wrapper',
			message.author,
			'new-message'
		);

		divTitre.classList.add('titre');
		divPersonMessage.classList.add('person-message');
		divDate.classList.add('date');
		divMessage.classList.add('message');
		divLeft.classList.add('left');
		divFace.classList.add('face');

		divPersonMessage.textContent = message.author;
		divDate.textContent = message.date;
		divMessage.textContent = message.text;
		divLeft.appendChild(divFace);
		divLeft.appendChild(divPersonMessage);
		divTitre.appendChild(divLeft);
		divTitre.appendChild(divDate);
		divMessageWrapper.appendChild(divTitre);
		divMessageWrapper.appendChild(divMessage);
		tchat?.appendChild(divMessageWrapper);
	}

	function onEnterPressed(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'm') {
			const tchat = document.querySelector('.tchat');
			const divPetitsPoints = document.querySelector('.petitsPoints');
			if (divPetitsPoints && tchat) {
				tchat.removeChild(divPetitsPoints);
			}

			setInputValue('');
			addDivMessage(messages[messageIndex]);
			setMessageIndex(messageIndex + 1);
		}
	}

	function scrollToBottom() {
		if (tchatRef.current) {
			tchatRef.current.scrollTop = tchatRef.current.scrollHeight;
		}
	}

	return (
		messages && (
			<div className='tchat-page-wrapper'>
				<div
					className='tchat-wrapper'
					style={!messageAccepted ? { filter: 'blur(10px)' } : {}}
				>
					<div className='tchat' ref={tchatRef}>
						<div
							className={`message-wrapper ${messages[0].author} new-message`}
						>
							<div className='titre'>
								<div className='left'>
									<div className='face'></div>
									<div className='person-message'>{messages[0].author}</div>
								</div>

								<div className='date'>{messages[0].date}</div>
							</div>
							<div className='message'>
								<div className='response'>
									<div>Réponse au post de Stan du 27/04/2024</div>
									<div>
										{'>>'} Absolument abject ! La fin de "La Ligue des
										Emblématiques" est un affront à l'intelligence ...
									</div>
								</div>
								<div>{messages[0].text}</div>
							</div>
						</div>
					</div>
					<div className='new-tchat'>
						<input
							ref={inputRef}
							type='text'
							placeholder='Envoyez un nouveau message ...'
							onKeyDown={(event) => onEnterPressed(event)}
							value={inputValue}
							onChange={(event) =>
								event.target.value != 'm' && setInputValue(event.target.value)
							}
						/>
						<img
							src={send}
							alt=''
							onClick={() => {
								setInputValue('');
								addDivMessage(messages[messageIndex]);
								setMessageIndex(messageIndex + 1);
							}}
						/>
					</div>
				</div>
				{!messageAccepted && (
					<div className='message-accepted'>
						<div className='text'>
							SuperDestroyer78 veut vous envoyer un message
						</div>
						<div className='buttons'>
							<button
								className='accepted'
								onClick={() => {
									setMessageAccepted(true);
									inputRef.current && inputRef.current.focus();
								}}
							>
								Accepter
							</button>
							<button className='refused'>Refuser</button>
						</div>
					</div>
				)}
			</div>
		)
	);
}

export default Tchat;
