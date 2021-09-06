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
		Name: 'Asus ROG Crosshair VII Hero WiFi ATX',
		Socket: 'AM4',
		Chipset: 'AMD X470',
		'Max Memory': '64 GB DDR4',
		'PCI 16 Slots': '3',
		Price: 249.99,
		preview: asus_rog_crosshair_01,
		gallery: [
			asus_rog_crosshair_01,
			asus_rog_crosshair_02,
			asus_rog_crosshair_03,
		],
	},
	{
		categoryId: 'mboard',
		Name: 'ASRock X570 Extreme4 WiFi ATX',
		Socket: 'AM4',
		Chipset: 'AMD X570',
		'Max Memory': '128 GB DDR4',
		'PCI 16 Slots': '2',
		Price: 249.99,
		preview: asrock_x570_01,
		gallery: [asrock_x570_01, asrock_x570_02, asrock_x570_03],
	},
	{
		categoryId: 'mboard',
		Name: 'Gigabyte X570 AORUS XTREME',
		Socket: 'AM4',
		Chipset: 'AMD X570',
		'Max Memory': '128 GB DDR4',
		'PCI 16 Slots': '3',
		Price: 699.99,
		preview: gigabyte_x570_01,
		gallery: [gigabyte_x570_01, gigabyte_x570_02],
	},
];

export default mboard;
