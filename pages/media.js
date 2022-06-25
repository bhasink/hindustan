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
import Footer from '../components/Footer'


const Media = () => {

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
  <section className="mediadescs">
    <div className="mdcategtbs">
      <div className="container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">In the news</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Media kit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Gallery</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="container">
      <img src="/images/ogdotsmid.png" className="topmstomabuis" />
      <img src="/images/topbllefts.png" className="botmfoots" />
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className="sotfllshw">
            <select className="selectpicker" data-show-subtext="true" data-live-search-placeholder="Sort By Tag">
              <option value="Sort By">Sort By</option>
              <option value="Recent Articles">Recent Articles</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
          </div>
          <div className="newshmbs">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="crds">
                  <img src="/images/mediaic/1.jpg" />
                  <p>This new Program is designed to learn how to make a business
                    desirable for customers, financially viable for stakeholders, and
                    feasible to build and deliver to the world. Instead of writing a static
                    business plan, the learner will learn to design rapid prototypes to
                    test and iterate business concepts. <a href="#">(Read more)</a></p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="crds">
                  <img src="/images/mediaic/2bl.jpg" />
                  <p>This new Program is designed to learn how to make a business
                    desirable for customers, financially viable for stakeholders, and
                    feasible to build and deliver to the world. Instead of writing a static
                    business plan, the learner will learn to design rapid prototypes to
                    test and iterate business concepts. <a href="#">(Read more)</a></p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="crds">
                  <img src="/images/mediaic/3bl.jpg" />
                  <p>This new Program is designed to learn how to make a business
                    desirable for customers, financially viable for stakeholders, and
                    feasible to build and deliver to the world. Instead of writing a static
                    business plan, the learner will learn to design rapid prototypes to
                    test and iterate business concepts. <a href="#">(Read more)</a></p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="crds">
                  <img src="/images/mediaic/4bl.jpg" />
                  <p>This new Program is designed to learn how to make a business
                    desirable for customers, financially viable for stakeholders, and
                    feasible to build and deliver to the world. Instead of writing a static
                    business plan, the learner will learn to design rapid prototypes to
                    test and iterate business concepts. <a href="#">(Read more)</a></p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="crds">
                  <img src="/images/mediaic/5bl.jpg" />
                  <p>This new Program is designed to learn how to make a business
                    desirable for customers, financially viable for stakeholders, and
                    feasible to build and deliver to the world. Instead of writing a static
                    business plan, the learner will learn to design rapid prototypes to
                    test and iterate business concepts. <a href="#">(Read more)</a></p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="crds">
                  <img src="/images/mediaic/6bl.jpg" />
                  <p>This new Program is designed to learn how to make a business
                    desirable for customers, financially viable for stakeholders, and
                    feasible to build and deliver to the world. Instead of writing a static
                    business plan, the learner will learn to design rapid prototypes to
                    test and iterate business concepts. <a href="#">(Read more)</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div className="sotfllshw">
            <select className="selectpicker" data-show-subtext="true" data-live-search-placeholder="Sort By Tag">
              <option value="Sort By">Sort By</option>
              <option value="Recent Articles">Recent Articles</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="crdmda">
                <img src="/images/mediaic/1.png" />
                <div className="vloptn">
                  <p>Brand Guidelines</p>
                  <img src="/images/downldico.png" />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="crdmda">
                <img src="/images/mediaic/2.png" />
                <div className="vloptn">
                  <p>Logo</p>
                  <img src="/images/downldico.png" />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              {/* <div class="crdmda">
              <img src="/images/mediaic/3.png">
              <div class="vloptn">
                  <p>Images</p>
                  <img src="/images/downldico.png">
              </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <div className="tabblogsd">
            <ul className="nav nav-tabs" id="myTab2" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="universitytb-tab" data-toggle="tab" href="#universitytb" role="tab" aria-controls="universitytb" aria-selected="false">University</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="gallerytbs-tab" data-toggle="tab" href="#gallerytbs" role="tab" aria-controls="gallerytbs" aria-selected="false">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="otherstbs-tab" data-toggle="tab" href="#otherstbs" role="tab" aria-controls="otherstbs" aria-selected="false">Others</a>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent2">
            <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
              <div className="sotfllshw">
                <select className="selectpicker" data-show-subtext="true" data-live-search-placeholder="Sort By Tag">
                  <option value="Sort By">Sort By</option>
                  <option value="Recent Articles">Recent Articles</option>
                  <option value="Month">Month</option>
                  <option value="Year">Year</option>
                </select>
              </div>
              <div className="gallcrd">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/1lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/2lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/3lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/4lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/5lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/6lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/7lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/8lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/9lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/10lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/11lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/12lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="universitytb" role="tabpanel" aria-labelledby="universitytb-tab">
              <div className="sotfllshw">
                <select className="selectpicker" data-show-subtext="true" data-live-search-placeholder="Sort By Tag">
                  <option value="Sort By">Sort By</option>
                  <option value="Recent Articles">Recent Articles</option>
                  <option value="Month">Month</option>
                  <option value="Year">Year</option>
                </select>
              </div>
              <div className="gallcrd">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/4lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/5lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/6lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/7lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/8lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/9lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/10lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/11lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/12lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="gallerytbs" role="tabpanel" aria-labelledby="gallerytbs-tab">
              <div className="sotfllshw">
                <select className="selectpicker" data-show-subtext="true" data-live-search-placeholder="Sort By Tag">
                  <option value="Sort By">Sort By</option>
                  <option value="Recent Articles">Recent Articles</option>
                  <option value="Month">Month</option>
                  <option value="Year">Year</option>
                </select>
              </div>
              <div className="gallcrd">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/4lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/5lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/6lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/7lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/8lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/9lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/10lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/11lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/12lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="otherstbs" role="tabpanel" aria-labelledby="otherstbs-tab">
              <div className="sotfllshw">
                <select className="selectpicker" data-show-subtext="true" data-live-search-placeholder="Sort By Tag">
                  <option value="Sort By">Sort By</option>
                  <option value="Recent Articles">Recent Articles</option>
                  <option value="Month">Month</option>
                  <option value="Year">Year</option>
                </select>
              </div>
              <div className="gallcrd">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/7lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/8lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/9lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/10lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/11lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                  <div className="col-lg-4">
                    <img src="/images/galleryhn/12lb.jpg" />
                    <p className="blhds">Neque porro</p>
                    <p className="sbhd">Lorem Ipsum </p>
                  </div>
                </div>
              </div>
            </div>
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
          <a href="#" className="blackctathms nobrd"><img src="/images/downldico.png" />Download Brochure</a>
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

export default Media;