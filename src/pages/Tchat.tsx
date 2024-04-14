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

	const [messages, setMessages] = useState<Message[]>([
		{
			text: messagesSuperDestroyer[0],
			author: 'SuperDestroyer78',
			date: getTime(),
		},
	]);
	const [messageIsSending, setMessageIsSending] = useState<boolean>(false);

	const [inputValue, setInputValue] = useState<string>('');

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

	function sendStanMessage() {
		const index = Math.floor(messages.length / 2);
		const messagesTmp = [...messages];

		messagesTmp.push({
			text: messagesStan[index],
			author: 'Stan',
			date: getTime(),
		});

		if (messagesStan[index] && !messageIsSending) {
			setMessages(messagesTmp);
			sendSuperDestroyerMessage(index, [...messagesTmp]);
		}
	}

	function onEnterPressed(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter') {
			setInputValue('');
			sendStanMessage();
		}
	}

	function sendSuperDestroyerMessage(index: number, messagesTmp: Message[]) {
		setMessageIsSending(true);
		const nombreMots =
			messagesSuperDestroyer[index + 1].split(/\s+/).length > 30
				? messagesSuperDestroyer[index + 1].split(/\s+/).length / 2
				: messagesSuperDestroyer[index + 1].split(/\s+/).length;

		const dureeEnMinutes = nombreMots / 40;

		const newMessagesTmp = [...messagesTmp];

		newMessagesTmp.push({
			text: messagesSuperDestroyer[index + 1],
			author: 'SuperDestroyer78',
			date: getTime(),
		});
		setTimeout(() => {
			setMessages(newMessagesTmp);
			setMessageIsSending(false);
			// const lastMessage = document.querySelector('.tchat div:first-child');
			// setTimeout(() => {
			// 	lastMessage && lastMessage.classList.add('slide-in');
			// }, 10);
		}, dureeEnMinutes * 20000);
	}

	function scrollToTop() {
		if (tchatRef.current) {
			tchatRef.current.scrollTop = 0;
		}
	}

	console.log(messages.slice().reverse());

	return (
		<div className='tchat-wrapper'>
			<div className='tchat' ref={tchatRef}>
				{messages
					.slice()
					.reverse()
					.map((message, index) => (
						<div
							key={index}
							className={`message-wrapper ${message.author} ${
								index === 0 ? 'slide-in' : ''
							}`}
						>
							<div className='titre'>
								<div className='person-message'>{message.author}</div>
								<div className='date'>{message.date}</div>
							</div>
							<div className='message'>{message.text}</div>
						</div>
					))}
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
	);
}

export default Tchat;
