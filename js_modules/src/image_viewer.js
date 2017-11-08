import big from './assets/lg.png';
import sm from './assets/sm.png';
import './image_viewer.css';

export default () => {
	const image1 = document.createElement('img');
	image1.src = sm;
	document.body.appendChild(image1);
}

