import React, { Component}  from 'react';
import {Link} from 'react-router-dom';

import "../components/seller-section.css"

class Seller extends Component {
	render() {
		return(				
    	<section className="home-cat-sec text-center">
        <div className="container-fluid">
          <h2 className="site-title">Sellers, use <a href="http://iticket.kyazoonga.com/"><img src="http://www.kyazoonga.com/images/iticket-logo.png" alt="fgv n" />
          </a> to create and sell your event tickets online <small>
          Discover and purchase tickets to cool events created and listed by organizers directly</small></h2>
          <div className="row">
            <div className="col-sm-6 cat-box">
              <div className="dvYoutube">
                <iframe width="360"  height="315" src="https://www.youtube.com/embed/IyucJZev9wM?autoplay=1&loop=1&autopause=0"  allow="encrypted-media">
                </iframe>
              </div>
            </div>
            <div className="col-sm-6 cat-box">
              <Link to="/" className="block-link">
                <div className="cat-txt">
                  <h3>Kyazoonga Blog</h3>
                </div>
                <img src="https://static2.kyazoonga.com/Images/kzconsumer/kz-blog.jpg" alt="" className="img-full-width"/>
              </Link>
            </div>
          </div>
        </div>
      </section>
		);
	}
}
export default Seller