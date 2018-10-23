import React, { Component}  from 'react';
import "../components/browser.css";


class Browser extends Component {
	render() {
		return(
  	<section className="home-cat-sec text-center">
  <div className="btn-sec text-center p-20 pt-0">
            <a className="btn btn-primary btn-custome-lg">Discover More</a>
          </div>
    <div className="container">
            
      <h2 className="site-title">Browse by top categories</h2>
      <div className="row">
        <div className="col-sm-4 cat-box">
          <a className="block-link">
            <div className="cat-txt">
              <h3>Concerts</h3>
            </div>
            <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg" alt="" className="img-full-width"/>
          </a>
        </div>
        <div className="col-sm-4 cat-box">
          <a className="block-link">
            <div className="cat-txt">
              <h3>Cricket</h3>
            </div>
            <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg" alt="" className="img-full-width"/>
          </a>
        </div>
        <div className="col-sm-4 cat-box">
          <a className="block-link">
            <div className="cat-txt">
              <h3>Theatre & Arts</h3>
            </div>
            <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg" alt="" className="img-full-width"/>
          </a>
        </div>
        <div className="col-sm-4 cat-box">
          <a className="block-link">
            <div className="cat-txt">
              <h3>Amusement Parks</h3>
            </div>
            <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg" alt="" className="img-full-width"/>
          </a>
        </div>
        <div className="col-sm-4 cat-box">
          <a className="block-link">
            <div className="cat-txt">
              <h3>Sports</h3>
            </div>
            <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg" alt="" className="img-full-width"/>
          </a>
        </div>
        <div className="col-sm-4 cat-box">
          <a className="block-link">
            <div className="cat-txt">
              <h3>Restaurants</h3>
            </div>
            <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg" alt="" className="img-full-width"/>
          </a>
        </div>
      </div>
    </div>
  </section>
	);
	}
}
export default Browser