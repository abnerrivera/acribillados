import Image from 'next/image';
import './Banner.css';
import Button from '../Button/Button';

const Banner = () => {
	return (
		<div className="banner ctn">
			<div className="banner-left">
				<h1 className="banner-subtitle">
					EL MEJOR SERVIDOR DE ROL EN GTA V - FIVEM
				</h1>
				<h2 className="title-banner">
					CREA TU VIDA EN
					<br />
					<span className="title-primary">ACRIBILLADOS</span>
				</h2>
				<p>
					Nuestro servidor busca llevar un rol serio, adaptando muchas
					características de la vida real, sin olvidar que se trata de un
					videojuego y el objetivo final siempre será pasarla bien.
				</p>
				<div>
					<Button title="JUGAR AHORA" type="button" variant="btn-primary" />
				</div>
			</div>
			<div className="banner-right">
				<Image
					src="/banner-2.png"
					alt="banner photo"
					width={1350}
					height={1350}
				/>
			</div>
		</div>
	);
};

export default Banner;
