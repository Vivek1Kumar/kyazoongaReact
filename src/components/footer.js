import React ,{Component} from 'react'
import "../components/footer.css"
import { BrowserRouter as Router, Link } from "react-router-dom";

class Footer extends Component {
	render()	{
		return(
				<footer className="site-footer">
					<div className="container">  
						<div className="row">
							<div className="col-sm-3 cont-drop">
    						<div className="dropdown">  
     						  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Dropdown
      					    <span className="caret"></span>
    						  </button>
                  <Router>
        					<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
         				   	<li><Link to='/'>Action</Link></li><br/>
          					<li><Link to='/'>Another action</Link></li>
          					<li><Link to='/'>Something else here</Link></li>
          					<li role="separator" className="divider"></li>
          					<li><Link to='/'>Separated link</Link></li>
        					</ul>
                  </Router>
    				  	</div> 
							</div>
							<div className="col-sm-9 home-newsletter">
								<div className="row">
								  <div className="col-sm-5 news-subs-txt">
								    <h3>Subscribe to our Newsletter</h3>
								  </div>
								  <div className="col-sm-7">
								  <div className="input-group">
								    <input type="email" className="form-control" placeholder="Enter your email"/>
								    <span className="input-group-btn">
								      <button className="btn btn-theme" type="submit">Subscribe</button>
								    </span>
								  </div>
								  </div>
								  </div>
								</div>
						</div>
							<div className="row footer-links">
        <div className="col-sm-3">
          <h6>Help</h6>
          <Router>
          <ul>
            <li><Link to="/">24x7 Customer Service</Link></li>
            <li><Link to="/">Regenerate your PAH e-Ticket</Link></li>
            <li><Link to="/">Reprint Confirmation</Link></li><br/>
            <li><Link to="/">Regenerate-e-Ticket</Link></li><br/>
            <li><Link to="/">Track Courier</Link></li>
          </ul>
          </Router>
        </div>
        <div className="col-sm-3">
          <h6>Company</h6>
          <Router>
          <ul>
            <li><Link to="/">About Us</Link></li><br/>
            <li><Link to="/">Blog</Link></li><br/>
            <li><Link to="/">Careers</Link></li><br/>
            <li><Link to="/">Contact Us</Link></li><br/>
            <li><Link to="/">Media Center</Link></li><br/>
            <li><Link to="/">Policies</Link></li>
          </ul>
          </Router>
        </div>
        <div className="col-sm-3">
          <h6>Popular Events</h6>
          <Router>
          <ul>
            <li><Link to="/">EsselWorld</Link></li><br/>
            <li><Link to="/">KidZania</Link></li><br/>
            <li><Link to="/">Water Kingdom</Link></li><br/>
            <li><Link to="/">Water Kingdom</Link></li><br/>
            <li><Link to="/">Adventure Park</Link></li><br/>
            <li><Link to="/">Vineyard Tour & Cycling</Link></li>
          </ul>
          </Router>
        </div>
        <div className="col-sm-3 country-flag-sec">  
          <h6>Popular Events</h6>
          <Router>
          <ul>
            <li><Link to="http://www.kyazoonga.com.au/" target="_blank"><img src={require('../image/CountriesFlag/aus.png')} alt="img"/>Australia</Link></li><br/>
            <li><Link to="http://www.kyazoonga.com/" target="_blank"><img src={require('../image/CountriesFlag/ind.png')} alt="img"/>India</Link></li><br/>
            <li><Link to="http://www.kyazoonga.ie/" target="_blank"><img src={require('../image/CountriesFlag/ireland.png')} alt="img"/>Ireland</Link></li><br/>
            <li><Link to="http://www.kyazoonga.ae/" target="_blank"><img src={require('../image/CountriesFlag/uae.png')} alt="img"/>United Arab Emirates</Link></li><br/>
            <li><Link to="http://www.kyazoonga.com/" target="_blank"><img src={require('../image/CountriesFlag/usa.png')} alt="img"/>United States</Link></li>
          </ul>
          </Router>
        </div>
      </div>

      <div className="footer-social text-center"><br/>
        <h6>Follow Us</h6>
        <ul>
          <li><Link className="f" to="https://www.facebook.com/kyazoonga" target="blank" rel="me">
            <img src={require('../image/facebook.png')} alt="img"/></Link></li>
          <li><Link className="t" to="https://twitter.com/kyazoonga"  target="blank" rel="me">
            <img src={require('../image/twitter.png')} alt="img"/></Link></li>
          <li><Link className="ig" to="https://www.instagram.com/kyazoonga/" target="blank" rel="me">
            <img src={require('../image/instagram.png')} alt="img"/></Link></li>
          <li><Link className="sc" to="https://www.snapchat.com/add/kyazoonga" target="blank" rel="me">
            <img src={require('../image/snapchat.png')} alt="img"/></Link></li>
          <li><Link className="in" to="https://www.linkedin.com/company/kyazoonga" target="blank" rel="me">
            <img src={require('../image/in.png')} alt="img"/></Link></li>
          <li><Link className="yt" to="https://www.youtube.com/user/kyazoongachannel" target="blank" rel="me">
            <img src={require('../image/youtube.png')} alt="img"/></Link></li>
          <li><Link className="g" to="https://plus.google.com/+kyazoongachannel" target="blank" rel="me">
            <img src={require('../image/google.png')} alt="img"/></Link></li>
          <li><Link className="p" to="https://www.pinterest.com/kyazoonga/" target="blank" rel="me">
            <img src={require('../image/pinterest.png')} alt="img"/></Link></li>
        </ul>
        <p className="copy-txt">Copyright ©Kyazoonga. All rights reserved. </p>
      </div>
		</div>
	</footer>
	);
	}
}

export default Footer;