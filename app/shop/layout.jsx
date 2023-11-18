import Link from 'next/link';

export const metadata = {
	title: 'Shop Server',
};

const ShopLayout = ({ children }) => {
	return (
		<div>
			<div>
				<h3>Seccion Tienda</h3>

				<ul>
					<li>
						<Link href="/shop">Shop</Link>
					</li>
					<li>
						<Link href="/shop/vips">Vips</Link>
					</li>
					<li>
						<Link href="/shop/vehicles">Vehicles</Link>
					</li>
				</ul>
			</div>
			{children}
		</div>
	);
};

export default ShopLayout;
