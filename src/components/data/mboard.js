import asus_rog_crosshair_01 from '../../assets/products/mboard/asus-rog-crosshair-vii-hero-01.jpg';
import asus_rog_crosshair_02 from '../../assets/products/mboard/asus-rog-crosshair-vii-hero-02.jpg';
import asus_rog_crosshair_03 from '../../assets/products/mboard/asus-rog-crosshair-vii-hero-03.jpg';

import asrock_x570_01 from '../../assets/products/mboard/asrock-x570-extreme4-01.jpg';
import asrock_x570_02 from '../../assets/products/mboard/asrock-x570-extreme4-02.jpg';
import asrock_x570_03 from '../../assets/products/mboard/asrock-x570-extreme4-03.jpg';

import gigabyte_x570_01 from '../../assets/products/mboard/gigabyte-x570-aorus-xtreme-01.jpg';
import gigabyte_x570_02 from '../../assets/products/mboard/gigabyte-x570-aorus-xtreme-02.jpg';

const mboard = [
	{
		categoryId: 'mboard',
		name: 'Asus ROG Crosshair VII Hero WiFi ATX',
		price: 249.99,
		socket: 'AM4',
		chipset: 'AMD X470',
		memMax: '64 GB DDR4',
		pci16Slots: '3',
		preview: asus_rog_crosshair_01,
		gallery: [
			asus_rog_crosshair_01,
			asus_rog_crosshair_02,
			asus_rog_crosshair_03,
		],
	},
	{
		categoryId: 'mboard',
		name: 'ASRock X570 Extreme4 WiFi ATX',
		price: 249.99,
		socket: 'AM4',
		chipset: 'AMD X570',
		memMax: '128 GB DDR4',
		pci16Slots: '2',
		preview: asrock_x570_01,
		gallery: [asrock_x570_01, asrock_x570_02, asrock_x570_03],
	},
	{
		categoryId: 'mboard',
		name: 'Gigabyte X570 AORUS XTREME',
		price: 699.99,
		socket: 'AM4',
		chipset: 'AMD X570',
		memMax: '128 GB DDR4',
		pci16Slots: '3',
		preview: gigabyte_x570_01,
		gallery: [gigabyte_x570_01, gigabyte_x570_02],
	},
];

export default mboard;
