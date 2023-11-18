import Image from 'next/image';
import './CardsHome.css';
import { CARDS_HOME } from '@/constants';

const CardsHome = () => {
	return (
		<div className="cards-home ctn">
			<h2 className="title">NUESTROS IDEALES</h2>
			<div className="cards-ctn">
				{CARDS_HOME.map(({ desc, icon, key, title }) => (
					<div key={key} className="card-item">
						<Image src={icon} alt={title} width={80} height={80} />
						<h3>{title}</h3>
						<p>{desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default CardsHome;
