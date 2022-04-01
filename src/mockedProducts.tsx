import tremton from './assets/images/tremton.png';
import justine from './assets/images/justine.png';
import boom from './assets/images/boom.png';
import air from './assets/images/air.png';
import cato from './assets/images/cato.png';
import waterfall from './assets/images/waterfall.png';
import edge from './assets/images/edge.png';
import cora from './assets/images/cora.png';
import fallstone from './assets/images/fallstone.png';
import buddy from './assets/images/buddy.png';
import ocean from './assets/images/ocean.png';

export interface IProduct {
	id: string;
	category: string;
	title: string;
	image: string;
	description_short: string;
	description_long: string;
	price: number;
}

// För dig som vill sitta riktigt gott framför en bra film eller brasan så är soffan Happy ett måste. Den har ett stort härligt sittdjup på 65 cm, kuddar med 80% dun. Sittdynorna har duntopp och är vändbara!
// En snygg detalj till soffan är de svarta metallbenen som ger ett modernt och rustikt intryck.
// Både lådor och dörrar är mjukstängande.

export const products: IProduct[] = [
	{
		id: '0',
		category: 'sofa',
		title: 'Justine',
		image: justine,
		description_short: '3-sits soffa i läder.',
		description_long:
			'Justine är en trivsam 3-sits soffa i läder med 2 plymåer. Sittdynorna har duntopp och är vändbara! Tillhörande ben i ek.',
		price: 19899,
	},
	{
		id: '1',
		category: 'sofa',
		title: 'Tremton',
		image: tremton,
		description_short: '2-sits soffa i tyg.',
		description_long:
			'Tremton 2-sits soffa i tyg Rocco grå. För dig som vill sitta riktigt gott framför en bra film eller brasan. Sittdynorna har duntopp och är vändbara!',
		price: 14899,
	},
	{
		id: '2',
		category: 'sofa',
		title: 'Boom',
		image: boom,
		description_short: '3-sits i tyg.',
		description_long:
			'Boom är en en perfekt 3-sits soffa till inredningsfantasten. Soffan är klädd i tyg och är underbart mjuk att sitta i. Sittdynorna har duntopp och är vändbara!',
		price: 27499,
	},
	{
		id: '3',
		category: 'sofa',
		title: 'Fallstone',
		image: fallstone,
		description_short: '2-sits soffa i läderimitation.',
		description_long:
			'Fallstone är en klassisk soffa med mjukt rundade former och med en stomme av björkplywood. ',
		price: 18499,
	},
	{
		id: '4',
		category: 'drawer',
		title: 'Cora',
		image: cora,
		description_short: 'Sideboard.',
		description_long:
			'I Cora sideboard förvarar du dina saker snyggt och praktiskt! Med både dolda och öppna utrymmen väljer du själv vad som ska gömmas undan och vad som gärna får synas. Både lådor och dörrar är mjukstängande.',
		price: 1499,
	},
	{
		id: '5',
		category: 'boll',
		title: 'Edge',
		image: edge,
		description_short: 'Stilren byrå. ',
		description_long: 'Byrå med mjukstängande lådor.',
		price: 1299,
	},
	{
		id: '6',
		category: 'lamp',
		title: 'Buddy',
		image: buddy,
		description_short: 'Taklampa med tidlös design. ',
		description_long:
			'Buddy taklampa har en stilren och tidlös design som passar in i många olika inredningsstilar. ',
		price: 349,
	},
	{
		id: '7',
		category: 'lamp',
		title: 'Waterfall',
		image: waterfall,
		description_short: 'Lampa med nio inglasade ljuskällor.',
		description_long:
			'Med sina nio inglasade ljuskällor lyser Waterfall upp vilket rum som helst, i dubbel bemärkelse.',
		price: 799,
	},
	{
		id: '8',
		category: 'lamp',
		title: 'Ocean',
		image: ocean,
		description_short: 'Lampa med ett tidlöst formspråk.',
		description_long:
			'Ocean är en stilren och modern lampa med ett tidlöst formspråk. Den sprider ett skönt ljus och är dimbar vilket gör att den passar lika bra över matbordet som soffbordet.',
		price: 299,
	},
	{
		id: '9',
		category: 'lamp',
		title: 'Cato',
		image: cato,
		description_short: 'Taklampa i glas.',
		description_long:
			'Taklampan Cato är otroligt fin och stilren. Materialet är glas och den sprider både vacker glans och ett behagligt ljus.',
		price: 999,
	},
	{
		id: '10',
		category: 'lamp',
		title: 'Air',
		image: air,
		description_short: 'Taklampa i metall.',
		description_long:
			'En liten nätt taklampa i metall. Gör sig bra som solitär men har du möjlighet att hänga flera lampor tillsammans',
		price: 499,
	},
];

export const getProductsObject = (array) =>
	array.reduce(
		(obj, product) => ({
			...obj,
			[product.id]: product,
		}),
		{},
	);
