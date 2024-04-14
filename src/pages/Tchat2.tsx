import { useRef, useEffect, useState } from 'react';

import send from '../assets/images/send.png';

interface Message {
	text: string;
	author: string;
	date: string;
}

function Tchat() {
	const messagesSuperDestroyer = [
		'Je viens vers toi suite à ton commentaire. C’est juste. Très juste. Nous honoreras-tu de ta présence lors de la séance de dédicaces ?',
		'Erreur. Très grosse erreur.',
		'Tu possèdes le potentiel.',
		'Je voulais te faire une proposition. Je cherche des gens pour m’accompagner. Je vais proposer à l’auteur de réécrire sa fin. Si tu veux te joindre à moi... rendez-vous au Bar Barella à 11h30.',
	];

	const messagesStan = [
		' Non. Ce n’est certainement plus d’actualité.',
		'Pourquoi ?',
		'Comment ça?',
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
	];
	const [messageIsSending, setMessageIsSending] = useState<boolean>(false);

	const [inputValue, setInputValue] = useState<string>('');

	const [messageIndex, setMessageIndex] = useState(1);

	const tchatRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		scrollToTop();
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

		divMessageWrapper.classList.add(
			'message-wrapper',
			message.author,
			'new-message'
		);

		divTitre.classList.add('titre');
		divPersonMessage.classList.add('person-message');
		divDate.classList.add('date');
		divMessage.classList.add('message');

		divPersonMessage.textContent = message.author;
		divDate.textContent = message.date;
		divMessage.textContent = message.text;

		divTitre.appendChild(divPersonMessage);
		divTitre.appendChild(divDate);
		divMessageWrapper.appendChild(divTitre);
		divMessageWrapper.appendChild(divMessage);
		tchat?.insertBefore(divMessageWrapper, tchat.firstChild);
	}

	function sendStanMessage() {
		if (messages[messageIndex] && !messageIsSending) {
			addDivMessage(messages[messageIndex]);
			sendSuperDestroyerMessage(messageIndex + 1);
		}
	}

	function onEnterPressed(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter') {
			setInputValue('');
			sendStanMessage();
		}
	}

	function sendSuperDestroyerMessage(index: number) {
		setMessageIsSending(true);
		const nombreMots =
			messages[index].text.split(/\s+/).length > 30
				? messages[index].text.split(/\s+/).length / 2
				: messages[index].text.split(/\s+/).length;

		const dureeEnMinutes = nombreMots / 40;

		setTimeout(() => {
			addDivMessage(messages[index]);
			setMessageIndex(index + 1);
			setMessageIsSending(false);
		}, dureeEnMinutes * 20000);
	}

	function scrollToTop() {
		if (tchatRef.current) {
			tchatRef.current.scrollTop = 0;
		}
	}

	return (
		messages && (
			<div className='tchat-wrapper'>
				<div className='tchat' ref={tchatRef}>
					<div className={`message-wrapper ${messages[0].author} new-message`}>
						<div className='titre'>
							<div className='person-message'>{messages[0].author}</div>
							<div className='date'>{messages[0].date}</div>
						</div>
						<div className='message'>{messages[0].text}</div>
					</div>
				</div>
				<div className='new-tchat'>
					<input
						type='text'
						placeholder='Envoyez un nouveau message ...'
						onKeyDown={(event) => onEnterPressed(event)}
						value={inputValue}
						onChange={(event) => setInputValue(event.target.value)}
					/>
					<img
						src={send}
						alt=''
						onClick={() => {
							setInputValue('');
							sendStanMessage();
						}}
					/>
				</div>
			</div>
		)
	);
}

export default Tchat;
