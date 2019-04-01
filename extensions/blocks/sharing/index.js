/**
 * Internal dependencies
 */
import JetpackLikesAndSharingPanel from '../../utils/likes-and-sharing-panel';
import SharingCheckbox from './sharing-checkbox';

export const name = 'sharing';

export const settings = {
	render: () => {
		return (
			<JetpackLikesAndSharingPanel>
				<SharingCheckbox />
			</JetpackLikesAndSharingPanel>
		);
	},
};
