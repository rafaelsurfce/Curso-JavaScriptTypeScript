import GeraCpf from './modules/geraCpf'
import './assets/css/style.css';


const geraCpf = new GeraCpf();
const resultado = document.querySelector('.resultado');
resultado.innerHTML = geraCpf.geraNovoCpf();