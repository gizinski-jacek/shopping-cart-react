import samsung_970_pro_01 from '../../assets/products/storage/samsung-970-pro-1tb-01.jpg';
import samsung_970_pro_02 from '../../assets/products/storage/samsung-970-pro-1tb-01.jpg';

import samsung_960_evo_01 from '../../assets/products/storage/samsung-960-evo-500gb-01.jpg';
import samsung_960_evo_02 from '../../assets/products/storage/samsung-960-evo-500gb-01.jpg';

import samsung_860_evo_01 from '../../assets/products/storage/samsung-860-evo-1tb-01.jpg';
import samsung_860_evo_02 from '../../assets/products/storage/samsung-860-evo-1tb-02.jpg';

import crucial_mx500_01 from '../../assets/products/storage/crucial-mx500-1tb-01.jpg';

import western_digital_gold_01 from '../../assets/products/storage/western-digital-gold-18-tb-01.jpg';
import western_digital_gold_02 from '../../assets/products/storage/western-digital-gold-18-tb-02.jpg';

const storage = [
	{
		categoryId: 'storage',
		name: 'Samsung 970 Pro',
		price: 299.99,
		capacity: '1 TB',
		cache: '1024 MB',
		preview: samsung_970_pro_01,
		gallery: [samsung_970_pro_01, samsung_970_pro_02],
	},
	{
		categoryId: 'storage',
		name: 'Samsung 960 EVO',
		price: 259.99,
		capacity: '500 GB',
		cache: '512 MB',
		preview: samsung_960_evo_01,
		gallery: [samsung_960_evo_01, samsung_960_evo_02],
	},
	{
		categoryId: 'storage',
		name: 'Samsung 860 Evo ',
		price: 119.99,
		capacity: '1 TB',
		cache: '1024 MB',
		preview: samsung_860_evo_01,
		gallery: [samsung_860_evo_01, samsung_860_evo_02],
	},
	{
		categoryId: 'storage',
		name: 'Crucial MX500',
		price: 99.99,
		capacity: '1 TB',
		cache: '1024 MB',
		preview: crucial_mx500_01,
		gallery: [crucial_mx500_01],
	},
	{
		categoryId: 'storage',
		name: 'Western Digital Gold 7200RPM',
		price: 629.99,
		capacity: '18 TB',
		cache: '512 MB',
		preview: western_digital_gold_01,
		gallery: [western_digital_gold_01, western_digital_gold_02],
	},
];

export default storage;
