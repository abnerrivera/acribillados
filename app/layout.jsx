import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
	title: 'Acribillados - rp | Servidor de rol gta v',
	description:
		'Toma el control de tu experiencia en GTA V con nuestro servidor de rol play. Sumérgete en un mundo virtual lleno de posibilidades, donde la narrativa y la interacción se fusionan para crear una experiencia de juego única. Únete a una comunidad vibrante y participa en emocionantes escenarios de interpretación. Descubre un servidor dedicado que ofrece una inmersión total, con funciones personalizadas, eventos exclusivos y una jugabilidad inigualable en GTA V. ¡Únete ahora y desata tu creatividad en nuestro servidor de rol play de GTA V!',
	keywords: 'server rp, servidor role play, fivem server',
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
