import tremton from './assets/tremton.png';
import justine from './assets/justine.png';
import boom from './assets/boom.png';
import air from './assets/air.png';
import cato from './assets/cato.png';
import waterfall from './assets/waterfall.png';
import edge from './assets/edge.png';
import cora from './assets/cora.png';
import fallstone from './assets/fallstone.png';
import buddy from './assets/buddy.png';
import ocean from './assets/ocean.png';

export interface Products {
	id: number;
	category: string;
	title: string;
	image: string;
	description: string;
	price: number;
}

// För dig som vill sitta riktigt gott framför en bra film eller brasan så är soffan Happy ett måste. Den har ett stort härligt sittdjup på 65 cm, kuddar med 80% dun. Sittdynorna har duntopp och är vändbara!

export const productss: Products[] = [
	{
		id: 0,
		category: 'sofa',
		title: 'Justine',
		image: justine,
		description:
			'Justine är en trivsam 3-sits soffa i ljust tyg med 2 plymåer. Kombinera gärna med Justine fåtölj för fler sociala sittplatser. Tillhörande ben i ek.',
		price: 19899,
	},
	{
		id: 1,
		category: 'sofa',
		title: 'Tremton',
		image: tremton,
		description:
			'Tremton 2-sits soffa i tyg Rocco grå. För dig som vill sitta riktigt gott framför en bra film eller brasan.',
		price: 14899,
	},
	{
		id: 2,
		category: 'sofa',
		title: 'Fallstone',
		image: fallstone,
		description:
			'Fallstone är en klassisk soffa med mjukt rundade former och med en stomme av björkplywood. ',
		price: 18499,
	},
	{
		id: 3,
		category: 'sofa',
		title: 'Boom',
		image: boom,
		description:
			'Boom är en en perfekt 3-sits soffa till inredningsfantasten. Soffan är klädd i tyg och är underbart mjuk att sitta i. En snygg detalj till soffan är de svarta metallbenen som ger ett modernt och rustikt intryck.',
		price: 27499,
	},
	{
		id: 4,
		category: 'drawer',
		title: 'Cora',
		image: cora,
		description:
			'I Cora sideboard förvarar du dina saker snyggt och praktiskt! Med både dolda och öppna utrymmen väljer du själv vad som ska gömmas undan och vad som gärna får synas. Både lådor och dörrar är mjukstängande.',
		price: 35,
	},
	{
		id: 5,
		category: 'boll',
		title: 'Edge',
		image: edge,
		description: 'Edge är en stilren byrå som passar lika bra i sovrummet som i hallen. ',
		price: 35,
	},
	{
		id: 6,
		category: 'lamp',
		title: 'Buddy',
		image: buddy,
		description:
			'Buddy taklampa har en stilren och tidlös design som passar in i många olika inredningsstilar. ',
		price: 35,
	},
	{
		id: 7,
		category: 'lamp',
		title: 'Waterfall',
		image: waterfall,
		description:
			'Med sina nio inglasade ljuskällor lyser Waterfall upp vilket rum som helst, i dubbel bemärkelse.',
		price: 35,
	},
	{
		id: 8,
		category: 'lamp',
		title: 'Ocean',
		image: ocean,
		description:
			'Ocean är en stilren och modern lampa med ett tidlöst formspråk. Den sprider ett skönt ljus som och är dimbar vilket gör att den passar lika bra över matbordet som soffbordet.',
		price: 35,
	},
	{
		id: 9,
		category: 'lamp',
		title: 'Cato',
		image: cato,
		description:
			'Taklampan Cato är otroligt fin och stilren. Materialet är glas och den sprider både vacker glans och ett behagligt ljus.',
		price: 35,
	},
	{
		id: 10,
		category: 'lamp',
		title: 'Air',
		image: air,
		description:
			'En liten nätt taklampa i metall. Gör sig bra som solitär men har du möjlighet att hänga flera lampor tillsammans',
		price: 35,
	},
];
