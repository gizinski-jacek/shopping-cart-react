import ryzen_7_5800x_01 from '../../assets/products/cpu/amd-ryzen-7-5800x-01.jpg';
import ryzen_7_5800x_02 from '../../assets/products/cpu/amd-ryzen-7-5800x-02.jpg';

import ryzen_5_5600x_01 from '../../assets/products/cpu/amd-ryzen-5-5600x-01.jpg';
import ryzen_5_5600x_02 from '../../assets/products/cpu/amd-ryzen-5-5600x-02.jpg';

import ryzen_3_3300x_01 from '../../assets/products/cpu/amd-ryzen-3-3300x-02.jpg';
import ryzen_3_3300x_02 from '../../assets/products/cpu/amd-ryzen-3-3300x-02.jpg';

const cpu = [
	{
		categoryId: 'cpu',
		name: 'AMD Ryzen 7 5800X',
		price: 389.99,
		cores: 8,
		threads: 16,
		tdp: '105 W',
		coreClock: '3.8 Ghz',
		boostClock: '4.7 Ghz',
		preview: ryzen_7_5800x_01,
		gallery: [ryzen_7_5800x_01, ryzen_7_5800x_02],
	},
	{
		categoryId: 'cpu',
		name: 'AMD Ryzen 5 5600X',
		price: 274.99,
		cores: 6,
		threads: 12,
		tdp: '65 W',
		coreClock: '3.7 Ghz',
		boostClock: '4.6 Ghz',
		preview: ryzen_5_5600x_01,
		gallery: [ryzen_5_5600x_01, ryzen_5_5600x_02],
	},
	{
		categoryId: 'cpu',
		name: 'AMD Ryzen 3 3300X',
		price: 139.99,
		cores: 4,
		threads: 8,
		tdp: '65 W',
		coreClock: '3.8 Ghz',
		boostClock: '4.3 Ghz',
		preview: ryzen_3_3300x_01,
		gallery: [ryzen_3_3300x_01, ryzen_3_3300x_02],
	},
];

export default cpu;
