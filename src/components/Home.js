import React, {Component} from 'react';
import Slider from '../components/slider.js'
import Ticket from '../components/ticket.js'
import Browser from '../components/browser'
import Seller from '../components/seller-section.js'
import Featured from '../components/feature.js'
import Footer from '../components/footer.js'


class Home extends Component {
	render() {	
		return(
			<div>
				<Slider/>
				<Ticket/>
				<Browser/>
				<Seller/>
				<Featured/>
				<Footer/>		
			</div>
		);
	}
} 

export default Home