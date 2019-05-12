import React, {Component, Fragment} from 'react';
import Contact from './components/contact/Contact.js';
import EventList from './components/schedule/EventList.js';
import NavBar from './components/navigation/NavBar.js';
import Footer from './components/misc/Footer.js';
import About from './components/misc/About.js';
import Front from './components/misc/Front.js';

class App extends Component {
  render() {
    return (
    	<Fragment>
    		<NavBar />
    		<div className="section section--white" id="front">
    			<Front />
    		</div>
    		<div className="section section--purple" id="about">
    			<About />
    		</div>
    		<div className="section section--white" id="schedule">
    			<EventList />
    		</div>
    		<div className="section section--purple" id="contact">
    			<Contact />
    		</div>
    		<Footer />
    	</Fragment>

    );
  }
}

export default App;
