import ryzen_7_5800x_01 from '../../assets/products/cpu/amd-ryzen-7-5800x-01.jpg';
import ryzen_7_5800x_02 from '../../assets/products/cpu/amd-ryzen-7-5800x-02.jpg';

import ryzen_5_5600x_01 from '../../assets/products/cpu/amd-ryzen-5-5600x-01.jpg';
import ryzen_5_5600x_02 from '../../assets/products/cpu/amd-ryzen-5-5600x-02.jpg';

import ryzen_3_3300x_01 from '../../assets/products/cpu/amd-ryzen-3-3300x-01.jpg';
import ryzen_3_3300x_02 from '../../assets/products/cpu/amd-ryzen-3-3300x-02.jpg';

const cpu = [
	{
		categoryId: 'cpu',
		Name: 'AMD Ryzen 7 5800X',
		Cores: 8,
		Threads: 16,
		'Core Clock': '3.8 Ghz',
		'Boost Clock': '4.7 Ghz',
		TDP: '105 W',
		Price: 389.99,
		preview: ryzen_7_5800x_01,
		gallery: [ryzen_7_5800x_01, ryzen_7_5800x_02],
	},
	{
		categoryId: 'cpu',
		Name: 'AMD Ryzen 5 5600X',
		Cores: 6,
		Threads: 12,
		'Core Clock': '3.7 Ghz',
		'Boost Clock': '4.6 Ghz',
		TDP: '65 W',
		Price: 274.99,
		preview: ryzen_5_5600x_01,
		gallery: [ryzen_5_5600x_01, ryzen_5_5600x_02],
	},
	{
		categoryId: 'cpu',
		Name: 'AMD Ryzen 3 3300X',
		Cores: 4,
		Threads: 8,
		'Core Clock': '3.8 Ghz',
		'Boost Clock': '4.3 Ghz',
		TDP: '65 W',
		Price: 139.99,
		preview: ryzen_3_3300x_01,
		gallery: [ryzen_3_3300x_01, ryzen_3_3300x_02],
	},
];

export default cpu;
