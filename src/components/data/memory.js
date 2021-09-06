import corsair_vengeance_01 from '../../assets/products/memory/corsair-vengeance-lpx-16-gb-01.jpg';
import corsair_vengeance_02 from '../../assets/products/memory/corsair-vengeance-lpx-16-gb-02.jpg';

import gskill_trident_01 from '../../assets/products/memory/gskill-trident-z-royal-16-gb-01.jpg';
import gskill_trident_02 from '../../assets/products/memory/gskill-trident-z-royal-16-gb-02.jpg';

import crucial_ballistix_01 from '../../assets/products/memory/crucial-ballistix-rgb-16-gb-01.jpg';

const memory = [
	{
		categoryId: 'memory',
		Name: 'Corsair Vengeance LPX',
		Memory: '2 x 8 GB',
		Speed: '5000',
		Timing: '18-26-26-46',
		Voltage: '1.5 V',
		Price: 1074.99,
		preview: corsair_vengeance_01,
		gallery: [corsair_vengeance_01, corsair_vengeance_02],
	},
	{
		categoryId: 'memory',
		Name: 'G.Skill Trident Z Royal',
		Memory: '2 x 8 GB',
		Speed: '4800',
		Timing: '18-22-22-41',
		Voltage: '1.5 V',
		Price: 379.99,
		preview: gskill_trident_01,
		gallery: [gskill_trident_01, gskill_trident_02],
	},
	{
		categoryId: 'memory',
		Name: 'Crucial Ballistix RGB',
		Memory: '2 x 8 GB',
		Speed: '3600',
		Timing: '16-18-18-38',
		Voltage: '1.35 V',
		Price: 109.99,
		preview: crucial_ballistix_01,
		gallery: [crucial_ballistix_01],
	},
];

export default memory;
