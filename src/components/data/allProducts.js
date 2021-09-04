import cpu from './cpu';
import gpu from './gpu';
import memory from './memory';
import mboard from './mboard';
import psu from './psu';
import storage from './storage';
import chassis from './chassis';

const allProducts = [
	...cpu,
	...gpu,
	...memory,
	...mboard,
	...psu,
	...storage,
	...chassis,
];

export default allProducts;
