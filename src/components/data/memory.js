import corsair_vengeance_01 from '../../assets/products/memory/corsair-vengeance-lpx-16-gb-01.jpg';
import corsair_vengeance_02 from '../../assets/products/memory/corsair-vengeance-lpx-16-gb-02.jpg';

import gskill_trident_01 from '../../assets/products/memory/gskill-trident-z-royal-16-gb-01.jpg';
import gskill_trident_02 from '../../assets/products/memory/gskill-trident-z-royal-16-gb-02.jpg';

import crucial_ballistix_01 from '../../assets/products/memory/crucial-ballistix-rgb-16-gb-01.jpg';

const memory = [
	{
		categoryId: 'memory',
		name: 'Corsair Vengeance LPX',
		price: 1074.99,
		memory: '2 x 8 GB',
		voltage: '1.5 V',
		speed: '5000',
		timing: '18-26-26-46',
		latency: '18',
		preview: corsair_vengeance_01,
		gallery: [corsair_vengeance_01, corsair_vengeance_02],
	},
	{
		categoryId: 'memory',
		name: 'G.Skill Trident Z Royal',
		price: 379.99,
		memory: '2 x 8 GB',
		voltage: '1.5 V',
		speed: '4800',
		timing: '18-22-22-41',
		latency: '18',
		preview: gskill_trident_01,
		gallery: [gskill_trident_01, gskill_trident_02],
	},
	{
		categoryId: 'memory',
		name: 'Crucial Ballistix RGB',
		price: 109.99,
		memory: '2 x 8 GB',
		voltage: '1.35 V',
		speed: '3600',
		timing: '16-18-18-38',
		latency: '16',
		preview: crucial_ballistix_01,
		gallery: [crucial_ballistix_01],
	},
];

export default memory;
