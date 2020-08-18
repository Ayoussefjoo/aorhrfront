import React from 'react';
import ReactDom from 'react-dom';
function btnchange(){
    return false;
}
function HomeBanner(){

    return(
        <div className="banner_w3lspvt">
			<div className="csslider infinity" id="slider1">
				<input type="radio" name="slides" defaultChecked="checked" id="slides_1" />
				<input type="radio" name="slides" id="slides_2" />
				<input type="radio" name="slides" id="slides_3" />
				<input type="radio" name="slides" id="slides_4" />
                
				<ul className="banner_slide_bg">
					<li>
						<div className="container-fluid">
							<div className="w3ls_banner_txt">

								<h3 className="w3ls_pvt-title text-wh text-uppercase let mb-2">Arab Organization</h3>
								<p>Relief And Human Rights.</p>
								<a href="#about"  className="btn button-style mt-sm-5 mt-4 bannarabout">Read More</a>
							</div>
						</div>
					</li>
					<li>
						<div className="container-fluid">
							<div className="w3ls_banner_txt">
								<h3 className="w3ls_pvt-title text-wh text-uppercase let mb-2">Arab Organization</h3>
								<p>Relief And Human Rights.</p>
								<a href="#about"  className="btn button-style mt-sm-5 mt-4 bannarabout">Read More</a>
							</div>
						</div>
					</li>
                    <li>
						<div className="container-fluid">
							<div className="w3ls_banner_txt">
								<h3 className="w3ls_pvt-title text-wh text-uppercase let mb-2">Arab Organization </h3>
								<p>Relief And Human Rights.</p>
								<a href="#about"  className="btn button-style mt-sm-5 mt-4 bannarabout">Read More</a>
							</div>
						</div>
					</li>
					<li>
						<div className="container-fluid">
							<div className="w3ls_banner_txt">
								<h3 className="w3ls_pvt-title text-wh text-uppercase let mb-2">Arab Organization </h3>
								<p>Relief And Human Rights.</p>
								<a href="#about"  className="btn button-style mt-sm-5 mt-4 bannarabout">Read More</a>
							</div>
						</div>
					</li>
				</ul>
				<div className="arrows">
					<label htmlFor="slides_1"></label>
					<label htmlFor="slides_2"></label>
					<label htmlFor="slides_3"></label>
				</div>
			</div>
		</div>
    );
}

export default HomeBanner;