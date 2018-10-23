import React, { Component}  from 'react';
import {Link} from 'react-router-dom';
import Radium from 'radium'
import "../components/slider.css";

class Slider extends Component {
	render() {
		return(
			<div className="slider" id="slider">
			<h1 className='centered'>Tickets made simple for everyone, everywhere</h1>
			<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
			<div className="carousel-inner">
			<div className="carousel-item active">
			<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/8590/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="First slide" />
			</div>
			<div className="carousel-item">
			<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/89699/pexels-photo-89699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Second slide"/>
			</div>
			<div className="carousel-item">
			<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/305244/pexels-photo-305244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide"/>
			</div>
			<div className="carousel-item">
			<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/186076/pexels-photo-186076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide"/>
			</div>
			<div className="carousel-item">
			<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide"/>
			</div>
			</div>
			
			</div>
			<ul className="nav justify-content-center hide-on-mobile" id="menu-bar">
				<li><Link id="Concerts" to="/">Concerts</Link></li>
				<li><Link id="Cricket" to="/" className="blue-bg">Cricket</Link></li>
				<li><Link id="Events" to="/" className="orange-bg">Events</Link></li>
				<li><Link id="Sports" to="/" className="green-bg">Sports</Link></li>
				<li><Link id="Parks" to="/" className="pink-lt-bg">Amusement Parks</Link></li>
				<li><Link id="Restaurants" to="/" className="purple-bg">Restaurants</Link></li>
				<li><Link id="Theatre" to="/" className="yellow-bg">Theatre & Arts</Link></li>
				<li><Link id="Parties" to="/">Parties</Link></li>
			</ul>		
			<div className="container" id="ticket">
   				<div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg-12">
                            <form>
                                <div className="card-body">
                        			<div className="banner-serch-box">
                        				<input id="txtSearchBox" placeholder="Search for an event, venue or city" type="text"/>
                        				<a>
                        				   <i className="fa fa-search faa" aria-hidden="true"></i>
                        				</a>
                        			</div>
                                </div>
                            </form>
               			</div>
        			</div>
				</div>
			</div>	
		);
	}
}

export default Radium(Slider)