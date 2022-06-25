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
import Footer from '../components/Footer'


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
 
  <Footer/>
</div>




        </>
    );
};

export default ContactUs;