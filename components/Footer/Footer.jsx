import Image from 'next/image';
import './Footer.css';
import Link from 'next/link';
import { FOOTER_SOCIAL, NAV_ITEMS } from '@/constants';

const Footer = () => {
	return (
		<div className="footer">
			<footer className="footer-ctn ctn">
				<div className="footer-left">
					<Link href="/">
						<Image src="/Logo.png" alt="logo" width={160} height={30} />
					</Link>
					<p>
						En nuestro servidor los donadores no tienen ventajas, solo tienen
						recompensas estéticas por contribuir en la estabilidad del servidor,
						estas recompensas no alteran la experiencia en el juego ni deja en
						desbalance el resto de jugadores.{' '}
					</p>
					<div className="footer-social">
						{FOOTER_SOCIAL.map(({ href, icon, key, label }) => (
							<Link key={key} href={href}>
								<Image src={icon} alt={label} width={42} height={42} />
							</Link>
						))}
					</div>
				</div>
				<div className="footer-right">
					{NAV_ITEMS.map(({ href, key, label, more }) => (
						<div key={key} className="footer-list">
							<h4 className="list-item">{label}</h4>
							<ul>
								{more?.map(({ href, key, label }) => (
									<li>
										<Link key={key} href={href}>
											{label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</footer>
		</div>
	);
};

export default Footer;
