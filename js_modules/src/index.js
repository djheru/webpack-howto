const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = () => {
	System.import('./image_viewer').then(({ default: showImage }) => {
		showImage();
	});
};

document.body.appendChild(button);
