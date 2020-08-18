import React from 'react';
import Newslogoimg from '../images/blog1.jpg';
function News(){
    return(
        <div className="news py-5" id="news">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="tittle mb-sm-5 mb-4 text-bl text-center font-weight-bold">Latest News</h3>
			<div className="row news-grids pt-xl-4">
				<div className="col-lg-5 text-lg-left text-center">
					<img src={Newslogoimg} alt="" className="img-fluid" />
				</div>
				<div className="col-lg-7 news-wthreegrid mt-lg-0 mt-5">
					<div className="news-grid-left mt-xl-5 mt-lg-4 mt-5">
						<h6>March 7th 2018</h6>
						<a href="#" className="text-news-st">Adipiscing elit sed do eiusmod tempor</a>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut
							perspiciatis
							unde doloremque laudantium.</p>
						<a href="#" className="news-button btn">Read More</a>
					</div>
                    <div className="news-grid-left mt-xl-5 mt-lg-4 mt-5">
						<h6>March 7th 2018</h6>
						<a href="#" className="text-news-st">Adipiscing elit sed do eiusmod tempor</a>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut
							perspiciatis
							unde doloremque laudantium.</p>
						<a href="#" className="news-button btn">Read More</a>
					</div>
                    <div className="news-grid-left mt-xl-5 mt-lg-4 mt-5">
						<h6>March 7th 2018</h6>
						<a href="#" className="text-news-st">Adipiscing elit sed do eiusmod tempor</a>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut
							perspiciatis
							unde doloremque laudantium.</p>
						<a href="#" className="news-button btn">Read More</a>
					</div>
					<div className="news-grid-left mt-xl-5 mt-lg-4 mt-5">
						<h6>Date</h6>
						<a href="#" className="text-news-st">Title</a>
						<p>Body.</p>
						<div className="news-button">
							<a href="#" className="news-button btn">Read More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
}
export default News;