import './index.css';

import numeral from 'numeral';

const num = numeral(1000).format('$0,0.00');

console.log(`I will pay ${num} for this awesome course.`);
