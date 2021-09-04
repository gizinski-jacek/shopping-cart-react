import cooler_master_power_01 from '../../assets/products/psu/cooler-master-power-supply-01.jpg';
import cooler_master_power_02 from '../../assets/products/psu/cooler-master-power-supply-02.jpg';

import corsair_power_01 from '../../assets/products/psu/corsair-power-supply-rm1000-01.jpg';
import corsair_power_02 from '../../assets/products/psu/corsair-power-supply-rm1000-02.jpg';
import corsair_power_03 from '../../assets/products/psu/corsair-power-supply-rm1000-03.jpg';

import seasonic_prime_px_01 from '../../assets/products/psu/seasonic-prime-px-850-w-80-01.jpg';
import seasonic_prime_px_02 from '../../assets/products/psu/seasonic-prime-px-850-w-80-02.jpg';

const psu = [
	{
		categoryId: 'psu',
		name: 'Cooler Master 80+ Gold Fully Modular',
		price: 119.99,
		wattage: '750 W',
		length: '140 mm',
		preview: cooler_master_power_01,
		gallery: [cooler_master_power_01, cooler_master_power_02],
	},
	{
		categoryId: 'psu',
		name: 'Corsair RM 80+ Gold Fully Modular',
		price: 189.99,
		wattage: '1000 W',
		length: '180 mm',
		preview: corsair_power_01,
		gallery: [corsair_power_01, corsair_power_02, corsair_power_03],
	},
	{
		categoryId: 'psu',
		name: 'SeaSonic PRIME PX 80+ Platinum Fully Modular',
		price: 209.99,
		wattage: '850 W',
		length: '170 mm',
		preview: seasonic_prime_px_01,
		gallery: [seasonic_prime_px_01, seasonic_prime_px_02],
	},
];

export default psu;
