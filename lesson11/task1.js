function textInTime(text, time) {
	setTimeout(() => {
		console.log(text);
	}, time);
}

textInTime('Hello World!', 8000);
