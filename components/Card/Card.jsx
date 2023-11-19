import Image from 'next/image';
import './Card.css';
import Button from '../Button/Button';
import Link from 'next/link';

const Card = ({ img, title, desc, href }) => {
	return (
		<div className="card">
			{img && <Image src={img} alt={title} width={220} height={240} />}
			<div className="card-ctn">
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
			<Link target="_blank" rel='"noopener noreferrer' href={href}>
				<Button title="VER MAS" type="button" variant="btn-secondary" />
			</Link>
		</div>
	);
};

export default Card;
