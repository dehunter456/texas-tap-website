import React, {Component} from 'react';
import Button from '../misc/Button.js';
import Event from './Event.js';
import '../../styles/event.css';

// Wrapper ES6 object to hold event data
class EventObject {
	constructor (title, day, startTime, endTime, htmlLink) {
		this.title = title;
		this.day = day;
		this.start = startTime;
		this.end = endTime;
		this.link = htmlLink;
	}
}

class EventList extends Component {

	constructor (props) {
		super(props);
		this.state = { events: [] };
		this.getEvents().then((eventList) => {
			this.setState({events: eventList});
		});
	}

	// Make API call to get the most recent events and return them in a promise
	async getEvents () {
		let newEvents = []
		newEvents.push(new EventObject("Playing Minecraft", "April 20, 2019", "5:00 PM", "8:00PM", "#"));
		newEvents.push(new EventObject("Driving Chris Golubski's Teslas", "May 5, 2019", "2:00 PM", "3:00PM", "#"));
		newEvents.push(new EventObject("Failing CS429", "May 10, 2019", "5:00 AM", "8:00AM", "#"));
		return newEvents
	}

	render () {
		const events = this.state.events.map((event, i) => {
			return <Event title={event.title} day={event.day} start={event.start} end={event.end} link={event.link} key={i} />
		});
		return (
			<div className="schedule">
				<h3 className="--normal">Our Schedule</h3>
				<div className="events">
					{events}
				</div>
				<Button link="#" style="normal" text="Subscribe to our Calendar." />
			</div>
		);
	}

}

export default EventList;