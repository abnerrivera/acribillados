import Image from 'next/image';
import './Button.css';

const Button = ({ type, title, icon, variant, onClick }) => {
	return (
		<button
			className={`btn ${variant}`}
			type={type}
			onClick={onClick ? onClick : null}
		>
			{icon && <Image src={icon} alt={title} width={24} height={24} />}
			<span className="">{title}</span>
		</button>
	);
};

export default Button;
