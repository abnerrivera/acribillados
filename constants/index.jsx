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
		href: '/rules',
		key: 'rules',
		label: 'Normativas',
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

export const LINKS_SHOP = [
	{ key: '1', href: '/shop', label: 'Tienda' },
	{ key: '2', href: '/shop/vips', label: 'Vips' },
	{ key: '3', href: '/shop/vehicles', label: 'Autos' },
];

export const NORMATIVAS = [
	{
		key: '1',
		img: '/test-img.png',
		label: 'NORMATIVA GENERAL',
		desc: 'La siguiente normativa contiene los conceptos basicos de rol y tambien la normativa interna de la ciudad.',
		href: 'https://docs.google.com/document/d/19BEWca63dWSWlzWDJSwV1zl3fitfFcE0EubrxrxajR8/edit',
	},
	{
		key: '2',
		img: '/test-img.png',
		label: 'FACCIONES DELICTIVAS',
		desc: 'La siguiente normativa contiene los conceptos y procedimientos para las facciones delictivas.',
		href: 'https://docs.google.com/document/d/1I4TPvkImeS9lRhIhXa83Zi6BQPVfSdvHw-afeWPLOTk/edit',
	},
	{
		key: '3',
		img: '/test-img.png',
		label: 'NORMATIVA ROBOS',
		desc: 'La siguiente normativa contiene los conceptos y procedimientos para hacer cualquier tipo de robo en el server.',
		href: 'https://docs.google.com/document/d/1570UwoRnob4lshMgCfQ0ETi4nKeyj7bgnMBxTVMHYCE/edit',
	},
	{
		key: '4',
		img: '/test-img.png',
		label: 'NORMATIVA STREAMERS',
		desc: 'La siguiente normativa contiene los beneficios al solicitar el rol de streamer en Discord',
		href: 'https://docs.google.com/document/d/1qwKe9qtsGF6mqMuM91xlYqKdfuT8u15RtViz0M8mKpg/edit',
	},
	{
		key: '5',
		img: '/test-img.png',
		label: 'NORMATIVA FACCIONES',
		desc: 'La siguiente normativa contiene los conceptos sobre las normas y prcedimientos de todas las facciones',
		href: 'https://docs.google.com/document/d/1qwKe9qtsGF6mqMuM91xlYqKdfuT8u15RtViz0M8mKpg/edit',
	},
];
