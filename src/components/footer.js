import React from 'react';
import ReactDOM from 'react-dom';
function Footer(){
    return ( 
        <div>
        <div className="footer-w3ls py-4">
		<div className="container py-xl-5 py-lg-3">
			<div className="agileits_w3layouts_logo logo2">
				<h2>
					<a href="index.html">AORHR</a>
				</h2>
				<div className="w3social-icons">
					<ul>
						<li>
							<a href="#">
								<i className="fa fa-facebook"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa fa-google-plus"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa fa-twitter"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa fa-dribbble"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="row agileits_w3layouts_footer_grids">
				<div className="col-lg-4 agileits_w3layouts_footer_grid">
					<h3>Call Us</h3>
					<ul>
						<li>
							<span>Office Phone :</span> (+123) 2302 232</li>
						<li>
							<span>Fax :</span> (+123) 123 456 455</li>
					</ul>
				</div>
				<div className="col-lg-4 agileits_w3layouts_footer_grid my-lg-0 my-5">
					<h3>Visit Us</h3>
					<p>132 New Lenox, 868 1st Avenue
						<i>4th Street NYC.</i>
					</p>
				</div>
				<div className="col-lg-4 agileits_w3layouts_footer_grid">
					<h3>Write Us</h3>
					<ul>
						<li>
							<span>Email :</span>
							<a href="mailto:info@example.com">info@example1.com</a>
						</li>
						<li>
							<span>Enquiry :</span>
							<a href="mailto:info@enquiry.com">info@enquiry.com</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
    <a href="#home" className="move-top text-center"></a>
    </div>
        );
}
export default Footer;