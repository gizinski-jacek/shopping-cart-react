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
		name: 'Asus GeForce RTX 3080 Ti',
		price: 2149.99,
		memory: 'GDDR6X 12 GB',
		tdp: '350 W',
		coreClock: '1365 MHz',
		boostClock: '1845 MHz',
		length: '318.5 mm',
		preview: rtx_3080_01,
		gallery: [rtx_3080_01, rtx_3080_02],
	},
	{
		categoryId: 'gpu',
		name: 'Asus GeForce RTX 3070',
		price: 819.99,
		memory: 'GDDR6 8 GB',
		tdp: '220 W',
		coreClock: '1500 MHz',
		boostClock: '1935 MHz',
		length: '318.5 mm',
		preview: rtx_3070_01,
		gallery: [rtx_3070_01, rtx_3070_02, rtx_3070_03],
	},
	{
		categoryId: 'gpu',
		name: 'XFX Radeon RX 6800',
		price: 899.99,
		memory: 'GDDR6 16 GB',
		tdp: '250 W',
		coreClock: '1850 MHz',
		boostClock: '2190 MHz',
		length: '340.0 mm',
		preview: rx_6800_01,
		gallery: [rx_6800_01, rx_6800_02, rx_6800_03],
	},
];

export default gpu;
