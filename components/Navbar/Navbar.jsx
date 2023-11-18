'use client';

import Link from 'next/link';
import './Navbar.css';
import { NAV_ITEMS } from '@/constants';
import Image from 'next/image';
import Button from '../Button/Button';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="nav-fix">
			<nav className="nav ctn">
				<div className="nav-logo">
					<Link onClick={() => setIsOpen(!isOpen)} href="/">
						<Image
							priority={true}
							src="/Logo.png"
							alt="logo"
							width={160}
							height={30}
						/>
					</Link>
				</div>
				<ul className={`nav-options ${isOpen && 'active'} `}>
					{NAV_ITEMS.map(({ key, href, label }) => (
						<li key={key}>
							<Link onClick={() => setIsOpen(!isOpen)} href={href}>
								{label}
							</Link>
						</li>
					))}
					<Button
						onClick={() => setIsOpen(!isOpen)}
						title="VIP GRATIS !!!"
						type="button"
						variant="btn-play btn-mobile"
					/>
				</ul>
				<Button
					onClick={() => setIsOpen(!isOpen)}
					title="VIP GRATIS !!!"
					type="button"
					variant="btn-play btn-pc"
				/>
				<Image
					onClick={() => setIsOpen(!isOpen)}
					className={`menu-mobile ${isOpen && 'active'}`}
					src="/menu-mobile.png"
					alt="mobile menu"
					width={35}
					height={35}
				/>
			</nav>
		</div>
	);
};

export default Navbar;
