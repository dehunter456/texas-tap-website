import React, {PureComponent} from 'react';

class Event extends PureComponent {
	render () {
		return (
			<a href={this.props.link} className="event">
				<div className="event__title">{this.props.title}</div>
				<div className="event__time">
					<div className="event__day">{this.props.day}</div>
					<div className="event__time-range">{this.props.start} – {this.props.end}</div>
				</div>
			</a>
		);
	}
}

export default Event;