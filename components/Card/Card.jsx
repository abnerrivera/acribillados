import Image from 'next/image';
import './Card.css';
import Button from '../Button/Button';
import Link from 'next/link';

const Card = ({ img, title, desc, href, variant, newTab }) => {
	const linkProps = {};

	if (newTab) {
		linkProps.target = '_blank';
		linkProps.rel = 'noopener noreferrer';
	}

	return (
		<div className="card">
			{img && <Image src={img} alt={title} width={220} height={240} />}
			<div className={`card-ctn ${variant}`}>
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
			<Link {...linkProps} href={href}>
				<Button title="VER MAS" type="button" variant="btn-secondary" />
			</Link>
		</div>
	);
};

export default Card;
