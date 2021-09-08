import rtx_3080_01 from '../../assets/products/gpu/asus-geforce-rtx-3080-01.jpg';
import rtx_3080_02 from '../../assets/products/gpu/asus-geforce-rtx-3080-02.jpg';

import rtx_3070_01 from '../../assets/products/gpu/asus-geforce-rtx-3070-01.jpg';
import rtx_3070_02 from '../../assets/products/gpu/asus-geforce-rtx-3070-02.jpg';
import rtx_3070_03 from '../../assets/products/gpu/asus-geforce-rtx-3070-03.jpg';

import rx_6800_01 from '../../assets/products/gpu/xfx-radeon-rx-6800-01.jpg';
import rx_6800_02 from '../../assets/products/gpu/xfx-radeon-rx-6800-02.jpg';
import rx_6800_03 from '../../assets/products/gpu/xfx-radeon-rx-6800-03.jpg';

const gpu = [
	{
		categoryId: 'gpu',
		Name: 'Asus GeForce RTX 3080 Ti',
		Memory: 'GDDR6X 12 GB',
		'Core Clock': '1365 MHz',
		'Boost Clock': '1845 MHz',
		TDP: '350 W',
		Length: '318.5 mm',
		Price: 2149.99,
		preview: rtx_3080_01,
		gallery: [rtx_3080_01, rtx_3080_02],
	},
	{
		categoryId: 'gpu',
		Name: 'XFX Radeon RX 6800',
		Memory: 'GDDR6 16 GB',
		'Core Clock': '1850 MHz',
		'Boost Clock': '2190 MHz',
		TDP: '250 W',
		Length: '340.0 mm',
		Price: 899.99,
		preview: rx_6800_01,
		gallery: [rx_6800_01, rx_6800_02, rx_6800_03],
	},
	{
		categoryId: 'gpu',
		Name: 'Asus GeForce RTX 3070',
		Memory: 'GDDR6 8 GB',
		'Core Clock': '1500 MHz',
		'Boost Clock': '1935 MHz',
		TDP: '220 W',
		Length: '318.5 mm',
		Price: 819.99,
		preview: rtx_3070_01,
		gallery: [rtx_3070_01, rtx_3070_02, rtx_3070_03],
	},
];

export default gpu;
