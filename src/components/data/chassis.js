import lian_01 from '../../assets/products/chassis/lian-li-pc-o11dx-01.jpg';
import lian_02 from '../../assets/products/chassis/lian-li-pc-o11dx-02.jpg';
import lian_03 from '../../assets/products/chassis/lian-li-pc-o11dx-03.jpg';

import corsair_01 from '../../assets/products/chassis/corsair-4000d-airflow-01.jpg';
import corsair_02 from '../../assets/products/chassis/corsair-4000d-airflow-02.jpg';
import corsair_03 from '../../assets/products/chassis/corsair-4000d-airflow-03.jpg';

import nzxt_01 from '../../assets/products/chassis/nzxt-h510-elite-01.jpg';
import nzxt_02 from '../../assets/products/chassis/nzxt-h510-elite-02.jpg';

const chassis = [
	{
		categoryId: 'chassis',
		name: 'Lian Li PC-O11 Dynamic ATX Full Tower',
		price: 139.99,
		dimensions: '445 mm x 272 mm x 446 mm',
		gpuMaxLength: '420 mm',
		preview: lian_01,
		gallery: [lian_01, lian_02, lian_03],
	},
	{
		categoryId: 'chassis',
		name: 'Corsair 4000D Airflow ATX Mid Tower',
		price: 94.99,
		dimensions: '453 mm x 230 mm x 466 mm',
		gpuMaxLength: '360 mm',
		preview: corsair_01,
		gallery: [corsair_01, corsair_02, corsair_03],
	},
	{
		categoryId: 'chassis',
		name: 'NZXT H510 Elite ATX Mid Tower',
		price: 145.99,
		dimensions: '428 mm x 210 mm x 460 mm',
		gpuMaxLength: '381 mm',
		preview: nzxt_01,
		gallery: [nzxt_01, nzxt_02],
	},
];

export default chassis;
