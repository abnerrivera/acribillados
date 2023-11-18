export const NAV_ITEMS = [
	{
		href: '/',
		key: 'home',
		label: 'Inicio',
		more: [
			{ href: '/', key: 'staff', label: 'Staff' },
			{ href: '/', key: 'normativas', label: 'Normativas' },
			{ href: '/', key: 'guias', label: 'Guias' },
		],
	},
	{
		href: '/about',
		key: 'about',
		label: 'Nosotros',
		more: [
			{ href: '/', key: 'contact', label: 'Contacto' },
			{ href: '/', key: 'info', label: 'Mas info' },
			{ href: '/', key: 'servers', label: 'Servidores' },
		],
	},
	{
		href: '/shop',
		key: 'shop',
		label: 'Tienda',
		more: [
			{ href: '/', key: 'vip', label: 'Vips' },
			{ href: '/', key: 'vehicle', label: 'Autos' },
			{ href: '/', key: 'house', label: 'Casas' },
		],
	},
];

export const FOOTER_SOCIAL = [
	{ href: '/', key: 'fb', label: 'facebook link', icon: '/fbfoo.png' },
	{ href: '/', key: 'di', label: 'discord link', icon: '/fbdis.png' },
	{ href: '/', key: 'tik', label: 'tiktok link', icon: '/fbtik.png' },
	{ href: '/', key: 'yt', label: 'youtube link', icon: '/fbyt.png' },
];

export const CARDS_HOME = [
	{
		key: '1',
		icon: '/iconCard2.png',
		title: 'ROL SERIO',
		desc: 'Nuestro servidor busca llevar un rol serio, adaptando muchas características de la vida real, sin olvidar que se trata de un videojuego y el objetivo final siempre será pasarla bien.',
	},
	{
		key: '2',
		icon: '/iconCard.png',
		title: 'ECONOMIA BALANCEADA',
		desc: 'Hemos adaptado la economía en Euros (€), así mismo cada vehículo, alimento, casas y todo lo que puedas adquirir dentro del juego.',
	},
	{
		key: '3',
		icon: '/iconCard3.png',
		title: 'NO EXISTE EL PAY TO WIN',
		desc: 'En nuestro servidor los donadores no tienen ventajas, estas recompensas no alteran la experiencia en el juego ni deja en desbalance el resto de jugadores.',
	},
];
