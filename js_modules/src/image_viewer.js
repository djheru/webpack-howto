import big from './assets/lg.png';
import sm from './assets/sm.png';
import './image_viewer.css';

const image1 = document.createElement('img');
image1.src = sm;

document.body.appendChild(image1);


const image2 = document.createElement('img');
image2.src = big;

document.body.appendChild(image2);
