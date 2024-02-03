const paragraph = document.querySelector('p');

if (paragraph) {
	(paragraph as HTMLInputElement).value = 'Hi there!';
}
