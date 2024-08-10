declare module 'react-slick' {
	import * as React from 'react';

	export interface Settings {
		dots?: boolean;
		infinite?: boolean;
		speed?: number;
		slidesToShow?: number;
		slidesToScroll?: number;
		responsive?: Array<{
			breakpoint: number;
			settings: {
				slidesToShow?: number;
				slidesToScroll?: number;
				infinite?: boolean;
				dots?: boolean;
			};
		}>;
		// Adicione outras configurações conforme necessário
	}

	export class Slider extends React.Component<Settings> { }
	export default Slider;
}