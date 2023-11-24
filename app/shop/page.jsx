import Card from '@/components/Card/Card';
import './Shop.css';
import { SHOP_HOME } from '@/constants';

const Shop = () => {
	return (
		<div className="shop ctn">
			<h2 className="title">TIENDA</h2>
			<div className="shop-ctn">
				{SHOP_HOME.map(({ img, desc, href, key, label }) => (
					<Card
						key={key}
						desc={desc}
						title={label}
						href={href}
						img={img}
						variant="card-medium"
						newTab={false}
					/>
				))}
			</div>
		</div>
	);
};

export default Shop;
