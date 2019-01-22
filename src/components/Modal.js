import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
	render() {
		// Render nothing if the "show" prop is false
		if (!this.props.show) {
			return null;
		}

		// The gray background
		const backdropStyle = {
			position: 'absolute',
			top: '50%',
			left: '50%',
			margin: '0 auto',
			backgroundColor: 'rgba(0,0,0,0.3)',
		};

		// The modal "window"
		const modalStyle = {
			backgroundColor: '#fff',
			borderRadius: 5,
			margin: '0 auto',
			padding: 30
		};

		return (
			<div className="backdrop" style={{backdropStyle}}>
				<div className="modal" style={{modalStyle}}>
					{this.props.children}

					<div className="footer">
						<button onClick={this.props.onClose}>
							Close
						</button>
					</div>
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool,
	children: PropTypes.node
};

export default Modal;