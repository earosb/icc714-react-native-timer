/**
 * 
 * @param {Number} time 
 */const formatTime = (time) => {
	let minutes = Math.floor(time / 60);
	time -= minutes * 60;
	let seconds = parseInt(time % 60, 10);
	return `${minutes < 10 ? `0${minutes}` : minutes}:${
		seconds < 10 ? `0${seconds}` : seconds
	}`;
}

export {formatTime};