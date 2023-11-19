import Card from '@/components/Card/Card';
import { NORMATIVAS } from '@/constants';
import './Rules.css';

const Rules = () => {
	return (
		<div className="rules ctn">
			<h2 className="title">NORMATIVAS</h2>
			<div className="cards-rules-ctn">
				{NORMATIVAS.map(({ desc, href, img, key, label }) => (
					<Card key={key} img={img} title={label} desc={desc} href={href} />
				))}
			</div>
		</div>
	);
};

export default Rules;
