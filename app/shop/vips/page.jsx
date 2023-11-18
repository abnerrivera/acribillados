import Link from 'next/link';

export const metadata = {
	title: 'Vips of the server',
};

const Vip = () => {
	return (
		<>
			<h1>Vips</h1>
			<ul>
				<li>
					<Link href="/shop/vips/gold">Gold</Link>
				</li>
			</ul>
		</>
	);
};

export default Vip;
