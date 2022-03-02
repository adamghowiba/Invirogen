export interface Models {
	title: string;
	desc: string;
	imgSrc: string;
	slug: string;
	specs: ModelSpecs[];
}

export interface ModelSpecs {
	name: string;
	value: string;
}

export const MODELS: Models[] = [
	{
		title: 'Versalis 1.0',
		desc: 'Progressively transition functionalized total linkage through corporate interfaces. Globally enable principle-centered sources after customized results. Holisticly innovate enterprise-wide testing procedures through distributed bandwidth. Quickly cultivate.',
		imgSrc: 'model_closed_small.png',
		slug: 'versalis-1',
		specs: [
			{ name: 'Size', value: '432  L x 2,000 W' },
			{ name: 'Windows', value: 'Customizeable' },
			{ name: 'Price', value: '$60,000' },
			{ name: 'Sq Ft', value: '600 x 800 sq ft' },
			{ name: 'Rooms', value: '1b 2b' }
		]
	},
	{
		title: 'Versalis 2.0',
		desc: 'Holisticly innovate enterprise-wide testing procedures through distributed bandwidth. Quickly cultivate. Progressively transition functionalized total linkage through corporate interfaces. Globally enable principle-centered sources after customized results.',
		imgSrc: 'model_open_small.png',
		slug: 'versalis-2',
		specs: [
			{ name: 'Size', value: '432  L x 1,400 W' },
			{ name: 'Windows', value: 'Customizeable' },
			{ name: 'Price', value: '$74,000' },
			{ name: 'Sq Ft', value: '800 x 800 sq ft' },
			{ name: 'Rooms', value: '1b 2b' }
		]
	},
	{
		title: 'Versalis 3.0',
		desc: 'Globally enable principle-centered sources after customized results. Progressively transition functionalized total linkage through corporate interfaces. Quickly cultivate. Holisticly innovate enterprise-wide testing procedures through distributed bandwidth',
		imgSrc: 'model_full_small.png',
		slug: 'versalis-3',
		specs: [
			{ name: 'Size', value: '432  L x 3,000 W' },
			{ name: 'Windows', value: 'Customizeable' },
			{ name: 'Price', value: '$82,000' },
			{ name: 'Sq Ft', value: '1200 x 800 sq ft' },
			{ name: 'Rooms', value: '1b 2b' }
		]
	}
];
