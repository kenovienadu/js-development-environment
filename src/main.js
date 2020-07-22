import { startApp } from './second';
import { sayMyName } from './third';


const showlog = () => console.log('logged from main.js');


showlog();
sayMyName('Bob');
startApp();