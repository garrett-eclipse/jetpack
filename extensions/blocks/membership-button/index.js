/**
 * External dependencies
 */
import { Path, Rect, SVG, G } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { __, _x } from '../../utils/i18n';
import edit from './edit';
import './editor.scss';
import { DEFAULT_CURRENCY } from '../simple-payments/constants';

export const name = 'membership-button';

export const icon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
		<Rect x="0" fill="none" width="24" height="24" />
		<G>
			<Path d="M20 4H4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 2v2H4V6h16zM4 18v-6h16v6H4zm2-4h7v2H6v-2zm9 0h3v2h-3v-2z" />
		</G>
	</SVG>
);

export const settings = {
	title: __( 'Membership Button' ),
	icon,
	description: __( 'Button allowing you to sell subscription products.' ),
	category: 'jetpack',
	keywords: [
		_x( 'sell', 'block search term' ),
		_x( 'subscription', 'block search term' ),
		_x( 'stripe', 'block search term' ),
	],
	attributes: {
		planId: {
			type: 'integer',
		},
		submitButtonText: {
			type: 'string',
			default: __( 'Your donation' ),
		},
		customBackgroundButtonColor: {
			type: 'string',
		},
		customTextButtonColor: {
			type: 'string',
		},
	},
	edit,
	save: () => null,
};

export const SUPPORTED_CURRENCY_LIST = [
	DEFAULT_CURRENCY,
	'EUR',
	'AUD',
	'BRL',
	'CAD',
	'CZK',
	'DKK',
	'HKD',
	'HUF',
	'ILS',
	'JPY',
	'MYR',
	'MXN',
	'TWD',
	'NZD',
	'NOK',
	'PHP',
	'PLN',
	'GBP',
	'RUB',
	'SGD',
	'SEK',
	'CHF',
	'THB',
];