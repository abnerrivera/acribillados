import Link from 'next/link';
import { LINKS_SHOP } from '@/constants';
import './Shop.css';

export const metadata = {
	title: 'Tienda Acribillados',
};

const ShopLayout = ({ children }) => {
	return (
		<>
			<div className="nav-shop">
				<ul>
					{LINKS_SHOP.map(({ key, href, label }) => (
						<li key={key}>
							<Link href={href}>{label}</Link>
						</li>
					))}
				</ul>
			</div>
			{children}
		</>
	);
};

export default ShopLayout;
