import cpu from './cpu';
import gpu from './gpu';
import memory from './memory';
import motherboard from './motherboard';
import psu from './psu';
import storage from './storage';
import chassis from './chassis';

const allProducts = [
	...cpu,
	...gpu,
	...memory,
	...motherboard,
	...psu,
	...storage,
	...chassis,
];

export default allProducts;
