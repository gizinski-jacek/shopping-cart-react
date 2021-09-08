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
		Name: 'Western Digital Gold 7200RPM',
		Capacity: '18 TB',
		Cache: '512 MB',
		Price: 629.99,
		preview: western_digital_gold_01,
		gallery: [western_digital_gold_01, western_digital_gold_02],
	},
	{
		categoryId: 'storage',
		Name: 'Samsung 970 Pro',
		Capacity: '1 TB',
		Cache: '1024 MB',
		Price: 299.99,
		preview: samsung_970_pro_01,
		gallery: [samsung_970_pro_01, samsung_970_pro_02],
	},
	{
		categoryId: 'storage',
		Name: 'Samsung 960 EVO',
		Capacity: '500 GB',
		Cache: '512 MB',
		Price: 259.99,
		preview: samsung_960_evo_01,
		gallery: [samsung_960_evo_01, samsung_960_evo_02],
	},
	{
		categoryId: 'storage',
		Name: 'Samsung 860 Evo ',
		Capacity: '1 TB',
		Cache: '1024 MB',
		Price: 119.99,
		preview: samsung_860_evo_01,
		gallery: [samsung_860_evo_01, samsung_860_evo_02],
	},
	{
		categoryId: 'storage',
		Name: 'Crucial MX500',
		Capacity: '1 TB',
		Cache: '1024 MB',
		Price: 99.99,
		preview: crucial_mx500_01,
		gallery: [crucial_mx500_01],
	},
];

export default storage;
