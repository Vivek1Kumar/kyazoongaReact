import React,{Component} from 'react'
import {Link} from 'react-router-dom';

import "../components/featured.css"

class Featured extends Component {
	render()		{
		return(
			<div className="container-fluid " id="featured">
				<section className="home-featured-sec text-center">
				<h2 className="site-title"><span>We've been featured in</span></h2>
				<div className="container-fluid">
				<Link target="_blank" to="https://www.forbes.com/sites/julianmitchell/2017/06/08/this-ticketing-platform-aims-to-overthrow-ticketmaster-and-stubhub-as-global-leader/#2eee65851bc2">
				<img src="https://static3.kyazoonga.com/Images/featured-logo/forbes-logo.jpg" alt="Forbes"/></Link>

				<Link target="_blank" to="https://tech.co/technology-upgrading-events-industry-2017-06">
				<img src="https://static3.kyazoonga.com/Images/featured-logo/techco-logo.jpg" alt="Forbes"/></Link>
				<Link target="_blank" to="https://www.ausleisure.com.au/news/forbes-names-kyazoonga-as-the-fastest-growing-international-online-ticket-p/">
				<img src="https://static3.kyazoonga.com/Images/featured-logo/ausleisure-logo.jpg" alt="INC"/></Link>


				<Link target="_blank" to="http://www.inc.com/drew-hendricks/top-3-trends-driving-change-for-the-events-industry.html">
				<img src="https://static3.kyazoonga.com/Images/featured-logo/inc-logo.jpg" alt="INC"/></Link>
				<Link target="_blank" to="https://www.entrepreneur.com/article/289909">
				<img src="https://static3.kyazoonga.com/Images/featured-logo/entrepreneur-magazine.jpg" alt="Entrepreneur Magazine"/></Link> <Link target="_blank" to="https://www.youtube.com/watch?v=1aSuorjmrRs">
				<img src="https://static3.kyazoonga.com/Images/featured-logo/cnbc.jpg" alt="CNBC"/></Link>
				<Link target="_blank" to="http://zeenews.india.com/exclusive/guns-n-roses-in-delhi-waiting-with-impatience-for-the-next-time_5910.html">
				<img src="https://static3.kyazoonga.com/Images/featured-logo/z-news.jpg" alt="Z News"/></Link>
				<Link target="_blank" to="http://tech.economictimes.indiatimes.com/news/startups/ratan-tata-invests-undisclosed-amount-in-e-ticketing-startup-kyazoonga/52681961">
				<img src="https://static3.kyazoonga.com/Images/featured-logo/the-economic-times.jpg" alt="The Economic Times"/></Link>
				<Link target="_blank" to="http://timesofindia.indiatimes.com/australia-in-india-2009/top-stories/MCA-appoints-KyaZoonga-com-as-the-official-ticketing-partner/articleshow/5196286.cms">
				<img src="https://static3.kyazoonga.com/Images/featured-logo/the-times-of-india.jpg" alt="Times of India"/></Link>
				<Link target="_blank" to="http://www.business-standard.com/article/companies/ratan-tata-invests-in-kyazoonga-116061000326_1.html">
				<img src="https://static3.kyazoonga.com/Images/featured-logo/business-standard.jpg" alt="Business Standard"/></Link>
				<Link target="_blank" to="http://www.news18.com/news/buzz/guns-n-roses-india-tour-80-tickets-outlets-opened-524376.html">
				<img src="https://static3.kyazoonga.com/Images/featured-logo/news18.jpg" alt="News 18"/></Link>
				<Link target="_blank" to="https://sports.ndtv.com/india-vs-west-indies-2013-14/sachin-tendulkars-200th-test-tickets-sold-out-in-15-hours-kyazoongacom-1527446">
				<img src="https://static3.kyazoonga.com/Images/featured-logo/ndtv.jpg" alt="NDTV"/></Link>
				</div>
				</section>
			</div>
		);
	}
}
export default Featured