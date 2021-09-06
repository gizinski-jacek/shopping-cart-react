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
		Name: 'Cooler Master 80+ Gold Fully Modular',
		Wattage: '750 W',
		Length: '140 mm',
		Price: 119.99,
		preview: cooler_master_power_01,
		gallery: [cooler_master_power_01, cooler_master_power_02],
	},
	{
		categoryId: 'psu',
		Name: 'Corsair RM 80+ Gold Fully Modular',
		Wattage: '1000 W',
		Length: '180 mm',
		Price: 189.99,
		preview: corsair_power_01,
		gallery: [corsair_power_01, corsair_power_02, corsair_power_03],
	},
	{
		categoryId: 'psu',
		Name: 'SeaSonic PRIME PX 80+ Platinum Fully Modular',
		Wattage: '850 W',
		Length: '170 mm',
		Price: 209.99,
		preview: seasonic_prime_px_01,
		gallery: [seasonic_prime_px_01, seasonic_prime_px_02],
	},
];

export default psu;
