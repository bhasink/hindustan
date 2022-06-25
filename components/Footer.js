import { useState,useEffect } from "react";
import Link from 'next/link'

const Footer = () => {
  
  

    return(

      <>
  
  <footer className="stfooter">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-6">
        <iframe className="ftaddrs" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28041.587045186683!2d77.12252401562505!3d28.533756324031703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c3fdb9b9f8f%3A0xd261102f628a137b!2sHindustan%20Institute%20of%20Technology%20%26%20Science!5e0!3m2!1sen!2sin!4v1656139144837!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         
        </div>
        <div className="col-lg-4 col-md-6 align-self-center">
          <div className="ftad">
            <p>Rajiv Gandhi Salai (OMR), Padur,
(Via) Kelambakkam,
Chennai - 603 103, India.</p>
            <a href="tel:+919945580408"> +91 9945580408</a>
            <a href="mailto:enquiry@jainxacademy.com">admission@hindustancode.com</a>
            {/*<div class="sclics">
					<ul>
						<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
						<li><a href="#"><i class="fab fa-twitter"></i></a></li>
						<li><a href="#"><i class="fab fa-instagram"></i></a></li>
						<li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
					</ul>
				</div>*/}
          </div>
        </div>
      </div>
      <div className="usfllinks">
        <div className="accordion2" id="accordionExample2">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseOneft" aria-expanded="true" aria-controls="collapseOneft" className="mobclick">ABOUT US
                <i className="fal fa-plus" /> <i className="fal fa-minus" /></h4>
              <h4>ABOUT US</h4>
              <div id="collapseOneft" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample2">
                <ul>
            
                  <li>
                 <Link  href="/about#whoweare">
                    <a>Who We Are</a>
                    </Link>
                    </li>

                    
                 <li>
                 <Link  href="/about#leadership">
                    <a>Leadership Note</a>
                    </Link>
                    </li>

                    
                 <li>
                 <Link  href="/about#awardsranking">
                    <a>Awards &amp; Ranking</a>
                    </Link>
                    </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseTwoft" aria-expanded="false" aria-controls="collapseTwoft" className="mobclick collapsed">All PROGRAMS
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>All PROGRAMS</h4>
              <div id="collapseTwoft" className="collapse" aria-labelledby="headingTwoft" data-parent="#accordionExample2">  
                <ul>
                
                 <li>
                 <Link  href="/courses#onestop">
                    <a>Our One Stop Study Destination</a>
                    </Link>
                    </li>
                    <li>
                 <Link  href="/courses#bachelors">
                    <a>Bachelors</a>
                    </Link>
                    </li>
                 <li>
                 <Link  href="/courses#masters">
                    <a>Masters</a>
                    </Link>
                    </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseThreeft" aria-expanded="false" aria-controls="collapseThreeft" className="mobclick collapsed">PROGRAMS OFFERED
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>PROGRAMS OFFERED</h4>
              <div id="collapseThreeft" className="collapse" aria-labelledby="headingThreeft" data-parent="#accordionExample2">  
                <ul>
                  
                  <li>
                    <a href="/courses/data-analytics">Data Analytics </a>
                    </li>
                    <li>
                    <a href="/courses/multimedia-and-animation" >Multimedia and Animation</a>
                    </li>
                  <li>
                    <a href="/courses/bba-aviation-management">BBA Aviation Management</a>
                    </li>
                  <li>
                    <a href="/courses/accounting-and-finance">Accounting and Finance</a>
                    </li>
                  <li>
                    <a href="/courses/human-resource-management">Human Resource Management</a>
                    </li>
                  <li>
                    <a href="/courses/tourism-and-hospitality-management">Tourism and Hospitality Management</a>
                    </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseFourft" aria-expanded="false" aria-controls="collapseFourft" className="mobclick collapsed">LATEST NEWS
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>LATEST NEWS</h4>
              <div id="collapseFourft" className="collapse" aria-labelledby="headingFourft" data-parent="#accordionExample2">  
                <ul>
                  <li><a href="https://www.indiatoday.in/pr-newswire?rkey=20220525EN68796&filter=4315" target="_blank">Hindustan Online - CODE introduces new specializations for the Academic year (2022-2023)</a></li>
                  <li><a href="https://www.aninews.in/news/business/hindustan-online-code-to-host-a-webinar-on-career-opportunities-in-aviation-management20220525142658/" target="_blank">Hindustan Online - opportunities in Aviation Management</a></li>
                  <li><a href="https://timesofindia.indiatimes.com/hindustan-code-bets-big-on-nations-digital-education-mandate-prepares-to-welcome-its-students-for-the-academic-year-2022-23/articleshow/89496899.cms" target="_blank">Hindustan CODE bets big on nation's 'Digital Education'</a></li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

      </>

    );

};

export default Footer;