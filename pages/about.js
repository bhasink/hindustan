import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import AOS from 'aos'
var $ = require('jquery')
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
})
import Nav from '../components/Nav'


const AboutUs = () => {

    const state = {
        responsive: {
          0: {
            items: 1,
            nav: true,
            dots: false,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            loop: true,
          },
          300: {
            items: 2,
            nav: true,
            dots: false,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            margin: 10,
            loop: true,
          },
    
          766: {
            items: 2,
            nav: true,
            dots: false,
            loop: true,
          },
    
          1200: {
            items: 4,
            nav: true,
            dots: true,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            loop: true,
          },
        },
        responsive_top_cat: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            loop: true,
          },
          300: {
            items: 1,
            nav: true,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            dots: false,
            loop: true,
          },
    
          766: {
            items: 3,
            nav: true,
            dots: false,
            loop: true,
          },
    
          1200: {
            items: 3,
            nav: true,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            dots: true,
          },
        },
        responsive_top_catnew: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            loop: true,
          },
          300: {
            items: 1,
            nav: true,
            dots: false,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            loop: true,
          },
    
          766: {
            items: 3,
            nav: true,
            dots: false,
            loop: true,
          },
    
          1200: {
            items: 4,
            nav: false,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            dots: true,
          },
        },
        responsive_reviewtestim: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            loop: true,
          },
          300: {
            items: 3,
            nav: false,
            dots: true,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            loop: true,
          },
    
          766: {
            items: 3,
            nav: false,
            dots: false,
            loop: true,
          },
    
          1200: {
            items: 3,
            nav: true,
            dots: false,
            autoplay:true,
            margin:40,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            center: true,
          },
        },
      }

    return (
        <>

  <Nav />
  
  <section className="homemainbanner aboutbgbacks">
    <div className="item">
      <img src="/images/aboutmainban.jpg" className="bgdeskmb" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-7 text-center align-self-center">
            <div className="hmbannerquotes">
              <img src="/images/bnrtexttop.png" className="tpquotelf" />
              <h1 className="bnrhd">
                <b>Lorem Ipsum</b> is simply<br />
                dummy text</h1>
              <p>Neque porro quisquam est qui dolorem ipsum </p>
              <img src="/images/bnquotergs.png" className="bnquoterg" />
            </div>
          </div>
          <div className="col-md-6 col-lg-5 text-center">
            <img src="/images/aboutmobiles.jpg" className="mobhomeshos" />
          </div>
        </div>
      </div>	
    </div>
  </section>	
  <section className="whoarewes">
    <div className="container">
      <div className>
        <div className="row">
          <div className="col-md-6 col-lg-6 pr-lg-5">
            <div className="hdingst  text-center mbltop">
              <h2 className="mainhds">Wh<span className="ogx">o</span> we are</h2>
            </div>
            <div className="vdthmbs">
              <img src="/images/aboutthmbs.jpg" className="fllimg" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 text-lg-left text-center mt-lg-0 mt-5 align-self-center">
            <div className="hdingst dsktop">
              <h2 className="mainhds">Wh<span className="ogx">o</span> we are</h2>
            </div>
            <p>The renowned Hindustan Group of Institutions in its non-stop endeavor to be at the the forefront of quality education has proudly launched HINDUSTAN ONLINE - CODE (Centre for Open and Digital Education). In the wake of the National Education Policy 2020, India is experiencing an important shift in education and Online programs have successfully catered to the need of the hour by providing highly revered qualifications to both aspiring students and working professionals.</p>
            <p className="moretext"> HINDUSTAN ONLINE - CODE offers specially designed programs with well-researched curricula to reduce the industry-academia gap. This makes our learners more employable in this highly competitive world. The programs are all contemporary with a well-curated and well-researched curriculum. Our programs do not just provide the theoretical learning of concepts, but we focus on the practical application of these concepts by following Outcome-based Learning concepts. HINDUSTAN ONLINE - CODE aims at reforming the Indian Higher Education landscape through the provision of equitable and inclusive learning opportunities, contributing to a significant increase in enrolment.</p>
            <a href="javascript:void(0);" className="moreless-button">Read more </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="leaderbdrs">
    <div className="container">
      <div className="dotsptns" />
      <img src="/images/featblus.png" className="bottomabuis" />
      <div className="row">
        <div className="col-md-6 col-lg-5 pr-lg-5">
          <div className="hdingst text-center mbltop">
            <h2 className="mainhds">leadership n<span className="ogx">o</span>te</h2>
          </div>
          <div className="vdthmbs">
            <img src="/images/aboutleader.jpg" className="fllimg" />
          </div>
        </div>
        <div className="col-md-6 col-lg-7 align-self-center mt-lg-0 mt-5">
          <div className="hdingst dsktop">
            <h2 className="mainhds">leadership n<span className="ogx">o</span>te</h2>
          </div>
          <p className="text-center text-lg-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
            make a type specimen book. </p>
        </div>
      </div>
    </div>
  </section>
  <section className="rnkers">
    <div className="container">
      <div className="dotsptns" />
      <img src="/images/abbots.png" className="bottomabuis" />
      <div className="text-center hdingst">
        <h2 className="mainhds">Awards &amp; Ranking</h2>
      </div>
      <div className="testimparts awardscrdsd">
      <OwlCarousel
                    className="featuredslide owl-theme owl-carousel"
                    loop
                    responsive={state.responsive_reviewtestim}
                    nav
                   
                  >
          <div className="item">
            <div className="testipnlpts">
              <div className="lgocirc">
                <img src="/images/awardscrd/1.png" />
              </div>
              <p className="usrnmtst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>quia dolor sit amet, consectetur adipisci velit</p>
            </div>
          </div>
          <div className="item">
            <div className="testipnlpts">
              <div className="lgocirc">
                <img src="/images/awardscrd/1.png" />
              </div>
              <p className="usrnmtst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>quia dolor sit amet, consectetur adipisci velit</p>
            </div>
          </div>
          <div className="item">
            <div className="testipnlpts">
              <div className="lgocirc">
                <img src="/images/awardscrd/1.png" />
              </div>
              <p className="usrnmtst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>quia dolor sit amet, consectetur adipisci velit</p>
            </div>
          </div>
          <div className="item">
            <div className="testipnlpts">
              <div className="lgocirc">
                <img src="/images/awardscrd/1.png" />
              </div>
              <p className="usrnmtst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>quia dolor sit amet, consectetur adipisci velit</p>
            </div>
          </div>

          <div className="item">
            <div className="testipnlpts">
              <div className="lgocirc">
                <img src="/images/awardscrd/1.png" />
              </div>
              <p className="usrnmtst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>quia dolor sit amet, consectetur adipisci velit</p>
            </div>
          </div>

          <div className="item">
            <div className="testipnlpts">
              <div className="lgocirc">
                <img src="/images/awardscrd/1.png" />
              </div>
              <p className="usrnmtst">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>quia dolor sit amet, consectetur adipisci velit</p>
            </div>
          </div>
         </OwlCarousel>
      </div>
    </div>
  </section>
  <div className="sideaassets">
    <a href="tel:+91 9945580408" className="graytelsnaps"> <i className="fas fa-phone-alt" /> +91 9945580408 </a>
    <div className="ctatcs">
      <ul>
        <li><a href="#"><img src="/images/telnumb.png" /></a><span className="hntps"><i className="fas fa-phone-alt" /> +919945580408 </span></li>
        <li><a href="#"><img src="/images/whatsappcta.png" /></a></li>
      </ul>
    </div>
  </div>
  <section className="mobileiconpanel">
    <ul>
      <li><a href="#"><img src="/images/applyico.png" /><span>Apply Now<span /></span></a></li>
      <li style={{width: 300}}><a href="tel:+919945580408"><img src="/images/callicos.png" /><span>Call us<span /></span></a></li>
      <li><a href="#"><img src="/images/whatsappicos.png" /><span>Whatsapp Us<span /></span></a></li>
      <li style={{border: 'none'}}><a href="#"><img src="/images/downldico.png" /><span>Brochure<span /></span></a></li>
    </ul>
  </section>
  <footer className="stfooter">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-6">
          <iframe className="ftaddrs" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d9772.811866649241!2d77.15170263339316!3d28.525641134925795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d28.531875699999997!2d77.1553133!4m5!1s0x390d1e7892180119%3A0x4e0f72dc6aef31a7!2sHindustan%20University%2C%20Commercial%20Space%20No.%20S-5%2C%20Vasant%20Square%20Mall%2C%20Vasant%20Kunj%2C%20New%20Delhi%2C%20Delhi%20110070!3m2!1d28.5246544!2d77.1563467!5e0!3m2!1sen!2sin!4v1652362293526!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="col-lg-4 col-md-6 align-self-center">
          <div className="ftad">
            <p>40, G.S.T Road, St. Thomas Mount,
              Chennai - 600 016, India.</p>
            <a href="tel:+91-9606333232"> +91-44-2234 1389</a>
            <a href="mailto:enquiry@jainxacademy.com">info@hindustanuniv.ac.in</a>
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
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">Vision &amp; Mission Of CODE</a></li>
                  <li><a href="#">Uniqueness Of CODE</a></li>
                  <li><a href="#">CODE Coursera Advantage</a></li>
                  <li><a href="#">CODE Brochure</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Vision &amp; Mission</a></li>
                  <li><a href="#">Awards</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseTwoft" aria-expanded="false" aria-controls="collapseTwoft" className="mobclick collapsed">PROGRAMS
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>PROGRAMS</h4>
              <div id="collapseTwoft" className="collapse" aria-labelledby="headingTwoft" data-parent="#accordionExample2">  
                <ul>
                  <li><a href="#">MBA</a></li>
                  <li><a href="#">MCA</a></li>
                  <li><a href="#">MA</a></li>
                  <li><a href="#"><b>UG PROGRAMS</b> </a></li>
                  <li><a href="#">BBA</a></li>
                  <li><a href="#">BCA</a></li>
                  <li><a href="#">B.COM</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseThreeft" aria-expanded="false" aria-controls="collapseThreeft" className="mobclick collapsed">ACADEMICS
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>ACADEMICS</h4>
              <div id="collapseThreeft" className="collapse" aria-labelledby="headingThreeft" data-parent="#accordionExample2">  
                <ul>
                  <li><a href="#">Pedagogy</a></li>
                  <li><a href="#">Evaluation Methodology</a></li>
                  <li><a href="#">Credit System</a></li>
                  <li><a href="#">CIQA </a></li>
                  <li><a href="#">Digital Library</a></li>
                  <li><a href="#"><b>LEADERSHIP MESSAGE</b></a></li>
                  <li><a href="#">Chancellor's Message</a></li>
                  <li><a href="#">Pro Chancellor</a></li>
                  <li><a href="#">Directors</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseFourft" aria-expanded="false" aria-controls="collapseFourft" className="mobclick collapsed">SERVICES
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>SERVICES</h4>
              <div id="collapseFourft" className="collapse" aria-labelledby="headingFourft" data-parent="#accordionExample2">  
                <ul>
                  <li><a href="#">Student Counselling</a></li>
                  <li><a href="#">Grievance Redressal</a></li>
                  <li><a href="#">Alumni Association</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Faculty</a></li>
                  <li><a href="#">Event Gallery</a></li>
                  <li><a href="#">Events At HITS</a></li>
                  <li><a href="#">Digitalk</a></li>
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

export default AboutUs;