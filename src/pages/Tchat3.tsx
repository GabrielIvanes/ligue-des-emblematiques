import { useRef, useEffect, useState } from 'react';

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
			date: getTime(),
		},
		{
			text: messagesStan[0],
			author: 'Stan',
			date: getTime(),
		},
		{
			text: messagesSuperDestroyer[1],
			author: 'SuperDestroyer78',
			date: getTime(),
		},
		{
			text: messagesStan[1],
			author: 'Stan',
			date: getTime(),
		},
		{
			text: messagesSuperDestroyer[2],
			author: 'SuperDestroyer78',
			date: getTime(),
		},
		{
			text: messagesStan[2],
			author: 'Stan',
			date: getTime(),
		},
		{
			text: messagesSuperDestroyer[3],
			author: 'SuperDestroyer78',
			date: getTime(),
		},
		{
			text: messagesSuperDestroyer[4],
			author: 'SuperDestroyer78',
			date: getTime(),
		},
	];

	const firstMessageDate = getTime();

	const [inputValue, setInputValue] = useState<string>('');

	const [messageIndex, setMessageIndex] = useState(1);

	const tchatRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

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
					messages[messageIndex].author !== 'SuperDestroyer78'
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
	}, [messageIndex]);

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	function getTime() {
		const currentDate = new Date();
		const day = String(currentDate.getDate()).padStart(2, '0');
		const month = String(currentDate.getMonth() + 1).padStart(2, '0');
		const year = currentDate.getFullYear();
		const hours = String(currentDate.getHours()).padStart(2, '0');
		const minutes = String(currentDate.getMinutes()).padStart(2, '0');

		const formattedDateTime = `${day}/${month}/${year} 	${hours}:${minutes}`;

		return formattedDateTime;
	}

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

		const currentDate = new Date();

		// Formater la date et l'heure sans les secondes
		const formattedDate =
			currentDate.toLocaleDateString(undefined, {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
			}) +
			' ' +
			currentDate.toLocaleTimeString(undefined, {
				hour: '2-digit',
				minute: '2-digit',
			});

		divPersonMessage.textContent = message.author;
		divDate.textContent = formattedDate;
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
			<div className='tchat-wrapper'>
				<div className='tchat' ref={tchatRef}>
					<div className={`message-wrapper ${messages[0].author} new-message`}>
						<div className='titre'>
							<div className='left'>
								<div className='face'></div>
								<div className='person-message'>{messages[0].author}</div>
							</div>

							<div className='date'>{firstMessageDate}</div>
						</div>
						<div className='message'>
							<div className='response'>
								<div>Réponse au commentaire de Stan du 27/04/2024</div>
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
		)
	);
}

export default Tchat;
