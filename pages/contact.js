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
import FileSaver from 'file-saver'


const ContactUs = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    FileSaver.saveAs(
      process.env.NEXT_PUBLIC_B_API + '/brochure/ho-brochure.pdf',
      'ho-brochure.pdf',
    )


  }

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

 <div>
  <section className="contactinfoons">
    <div className="container">
      <div className="dotsptns tplfd" />
      <div className="dotsptns btmlfd" />
      <div className="dotsptns verytmlfd" />
      <div className="hdingst text-center">
        <h2 className="mainhds">c<span className="ogx">o</span>ntact Information</h2>
      </div>
      <div className="addressportns text-center">
        <div className="row">
          <div className="col-lg-4 col-md-6 bdbtms">
            <img src="/images/contic1.png" />
            <h5>Admission enquiry</h5>
            <div className="adlnone">
              <p><b>WhatsApp Us :</b> +91 9945580408</p>
              <p><b>Call Us: :</b> +91 9945580408</p>
              <p><b>Email Us:</b> admission@hindustancode.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 bdbtms">
            <img src="/images/contic2.png" />
            <h5>International enquiry</h5>
            <div className="adlnone">
              <p><b>WhatsApp Us :</b> +91 9945580408</p>
              <p><b>Call Us: :</b> +91 9945580408</p>
              <p><b>Email Us:</b> info@hindustanuniv.ac.in</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 bdbtms">
            <img src="/images/contic3.png" />
            <h5>Other enquiry</h5>
            <div className="adlnone">
              <p><b>WhatsApp Us :</b> +91 9945580408</p>
              <p><b>Call Us: :</b> +91 9945580408</p>
              <p><b>Email Us:</b> enquiry@hindustancode.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mx-auto">
            <img src="/images/contic4.png" />
            <h5>Media enquiry</h5>
            <div className="adlnone">
              <p><b>Email Us:</b> media@hindustancode.com</p>
            </div>
          </div>
        </div>
      </div><div className="addresspnorgs">
        <div className="row">
          <div className="col-lg-4 col-md-4 icmds text-center align-self-center">
            <img src="/images/mapcont.png" />
          </div>
          <div className="col-lg-6 col-md-6">
            <h4 className="adhds">UNIVERSITY CAMPUS</h4>
            <p> Rajiv Gandhi Salai (OMR), Padur,<br />
              (Via) Kelambakkam,<br />
              Chennai - 603 103, India.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="downbrochures">
    <div className="container">
      <div className="row">
        <div className="col-lg-7  text-center text-lg-left p-2">
          <h4>Learn future-ready and industry-relevant skills and build a promising career</h4>
          
        </div>
        <div className="col-lg-4 text-lg-right text-center align-self-center">
          <a href="#" className="blackctathms nobrd" onClick={handleSubmit}><img src="/images/downldico.png" />Download Brochure</a>
        </div>
      </div>
    </div>
  </section>
  <div className="sideaassets">
    <a href="tel:+91 9945580408" className="graytelsnaps"> <i className="fas fa-phone-alt" /> +91 9945580408 </a>
    <div className="ctatcs">
      <ul>
        <li><a href="#"><img src="/images/telnumb.png" /></a><span className="hntps"><i className="fas fa-phone-alt" /> +919945580408 </span></li>
        <li><a href="https://wa.me/9945580408/?text="><img src="/images/whatsappcta.png" /></a></li>
      </ul>
    </div>
  </div>
  <section className="mobileiconpanel">
    <ul>
      <li><a href="#"><img src="/images/applyico.png" /><span>Apply Now<span /></span></a></li>
      <li style={{width: 300}}><a href="tel:+919945580408"><img src="/images/callicos.png" /><span>Call us<span /></span></a></li>
      <li><a href="https://wa.me/9945580408/?text="><img src="/images/whatsappicos.png" /><span>Whatsapp Us<span /></span></a></li>
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
            <p>(Address) 1, Rajiv Gandhi Salai (OMR), Padur,
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
                  <li><a href="../about#whoweare">Who We Are</a></li>
                  <li><a href="../about#leadership">Leadership Note</a></li>
                  <li><a href="../about#awardsranking">Awards & Ranking</a></li>
                 
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseTwoft" aria-expanded="false" aria-controls="collapseTwoft" className="mobclick collapsed">PROGRAMS
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>All PROGRAMS</h4>
              <div id="collapseTwoft" className="collapse" aria-labelledby="headingTwoft" data-parent="#accordionExample2">  
                <ul>
                 <li><a href="../courses#onestop">Our One Stop Study DesTination</a></li>
                 <li><a href="../courses#bachelors">Bachelors</a></li>
                 <li><a href="../courses#masters">Masters</a></li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseThreeft" aria-expanded="false" aria-controls="collapseThreeft" className="mobclick collapsed">ACADEMICS
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>PROGRAMS OFFERED</h4>
              <div id="collapseThreeft" className="collapse" aria-labelledby="headingThreeft" data-parent="#accordionExample2">  
                <ul>
                  <li><a href="../courses/data-analytics">Data Analytics </a></li>
                  <li><a href="../courses/multimedia-and-animation">Multimedia and Animation</a></li>
                  <li><a href="../courses/bba-aviation-management">BBA Aviation Management</a></li>
                  <li><a href="../courses/"><b>UG PROGRAMS</b> </a></li>
                  <li><a href="../courses/accounting-and-finance">Accounting and Finance</a></li>
                  <li><a href="../courses/human-resource-management">Human Resource Management</a></li>
                  <li><a href="../courses/tourism-and-hospitality-management">Tourism and Hospitality Management</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseFourft" aria-expanded="false" aria-controls="collapseFourft" className="mobclick collapsed">SERVICES
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
</div>




        </>
    );
};

export default ContactUs;