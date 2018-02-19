'use strict';

const clockDebug = document.querySelector('.clock-debug>p');


const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondDegrees = ((seconds * 360) / 60) + 90;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	const minutes = now.getMinutes();
	const minuteDegrees = ((minutes * 360) / 60) + 90;
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

	const hours = now.getHours();
	const hourDegrees = ((hours * 360) / 12) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	clockDebug.innerHTML = `${hours}h ${minutes}m ${seconds}s`;

};

setInterval(setDate, 1000);