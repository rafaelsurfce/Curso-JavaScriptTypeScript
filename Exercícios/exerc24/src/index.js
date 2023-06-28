import GeraCPF from './modules/GeraCpf'

import './assets/css/style.css';

const createCpf = new GeraCPF();

document.querySelector('.result').innerText = createCpf.geraNovoCpf();

