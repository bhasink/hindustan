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
import Nav from '../../components/Nav'


const Blog = () => {

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
  <section className="featuredcls mostpopblogs">
    <div className="container">
      <img src="/images/topabdots.png" className="topmstomabuis rghts" />
      <img src="/images/blusmalldots.png" className="topmstomabuis botmar" />
      <div className="text-center hdingst">
        <h2 className="mainhds lnmidbel">M<div className="ogcl">O</div>st Popular Articles</h2>
      </div>
      <div className="populararts">
        <div className="featuredslide owl-theme owl-carousel">
          <div className="item">
            <p><b>Getting Smart</b></p>
            <p>An online community and support system for teachers ranging from
              primary school level to post
              secondary education. Articles
              share the latest innovations in
              teaching and learning with a focus
              on remote schooling 
            </p>
            <a href="#" className="rdpopart">Read More!</a>
            <div className="lkcomms">
              <a href="#"><img src="/images/hearts.png" /></a>
              <a href="#"><img src="/images/comnt.png" /></a>
            </div>
            <p className="dtpst">Posted by: 4 April 2022</p>
          </div>
          <div className="item">
            <p><b>The Edvocate</b></p>
            <p>Covers the latest news revolving 
              the world of education, including
              current events, new policy
              changes, and more. Articles
              advocate positive educational
              reform and innovation within the
              modern schooling system.
            </p>
            <a href="#" className="rdpopart">Read More!</a>
            <div className="lkcomms">
              <a href="#"><img src="/images/hearts.png" /></a>
              <a href="#"><img src="/images/comnt.png" /></a>
            </div>
            <p className="dtpst">Posted by: 4 April 2022</p>
          </div>
          <div className="item">
            <p><b>New Programs</b></p>
            <p>An online community and support system for teachers ranging from
              primary school level to post
              secondary education. Articles
              share the latest innovations in
              teaching and learning with a focus
              on remote schooling 
            </p>
            <a href="#" className="rdpopart">Read More!</a>
            <div className="lkcomms">
              <a href="#"><img src="/images/hearts.png" /></a>
              <a href="#"><img src="/images/comnt.png" /></a>
            </div>
            <p className="dtpst">Posted by: 4 April 2022</p>
          </div>
          <div className="item">
            <p><b>The Edvocate</b></p>
            <p>An online community and support system for teachers ranging from
              primary school level to post
              secondary education. Articles
              share the latest innovations in
              teaching and learning with a focus
              on remote schooling 
            </p>
            <a href="#" className="rdpopart">Read More!</a>
            <div className="lkcomms">
              <a href="#"><img src="/images/hearts.png" /></a>
              <a href="#"><img src="/images/comnt.png" /></a>
            </div>
            <p className="dtpst">Posted by: 4 April 2022</p>
          </div>
          <div className="item">
            <p><b>Getting Smart</b></p>
            <p>An online community and support system for teachers ranging from
              primary school level to post
              secondary education. Articles
              share the latest innovations in
              teaching and learning with a focus
              on remote schooling 
            </p>
            <a href="#" className="rdpopart">Read More!</a>
            <div className="lkcomms">
              <a href="#"><img src="/images/hearts.png" /></a>
              <a href="#"><img src="/images/comnt.png" /></a>
            </div>
            <p className="dtpst">Posted by: 4 April 2022</p>
          </div>
          <div className="item">
            <p><b>Getting Smart</b></p>
            <p>An online community and support system for teachers ranging from
              primary school level to post
              secondary education. Articles
              share the latest innovations in
              teaching and learning with a focus
              on remote schooling 
            </p>
            <a href="#" className="rdpopart">Read More!</a>
            <div className="lkcomms">
              <a href="#"><img src="/images/hearts.png" /></a>
              <a href="#"><img src="/images/comnt.png" /></a>
            </div>
            <p className="dtpst">Posted by: 4 April 2022</p>
          </div>
          <div className="item">
            <p><b>Getting Smart</b></p>
            <p>An online community and support system for teachers ranging from
              primary school level to post
              secondary education. Articles
              share the latest innovations in
              teaching and learning with a focus
              on remote schooling 
            </p>
            <a href="#" className="rdpopart">Read More!</a>
            <div className="lkcomms">
              <a href="#"><img src="/images/hearts.png" /></a>
              <a href="#"><img src="/images/comnt.png" /></a>
            </div>
            <p className="dtpst">Posted by: 4 April 2022</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mediadescs blognopds">
    <div className="container">
      <img src="/images/abbots.png" className="topmstomabuis rghts" />
      <img src="/images/abbots.png" className="topmstomabuis btms" />
      <img src="/images/topbllefts.png" className="topmstomabuis mdlvl" />
      <img src="/images/blacklondts.png" className="bluewhl botmar" />
      <div className="tabblogsd">
        <ul className="nav nav-tabs" id="myTab2" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="universitytb-tab" data-toggle="tab" href="#universitytb" role="tab" aria-controls="universitytb" aria-selected="false">Admission</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="gallerytbs-tab" data-toggle="tab" href="#gallerytbs" role="tab" aria-controls="gallerytbs" aria-selected="false">Programs</a>
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
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/1.jpg" />
                  <div className="inpds">
                    <p className="blhds">What is CODE?</p>
                    <p className="sbhd">The recent past has highlighted that the world is fast-changing, whether
                      it is the recession or the pandemic, who survives such calamities?
                      Darwin’s Theory of ‘Survival of the Fittest’, says that the species which has
                      the ability to adapt to face the change survive. So, the point is to make
                      ourselves THE FITTEST to survive.</p>
                    <p>The fast-changing world has also provided us with the best tools,
                      technology and connectivity</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/2.jpg" />
                  <div className="inpds">
                    <p className="blhds">New Normal in Education</p>
                    <p className="sbhd">Before the year 2020 when the pandemic struck, many works were being
                      done in a traditional way for ages. We never thought of changing the
                      way these works were being done. But the pandemic presented many
                      challenges and forced us to think in a way where our way of life changed.
                      It created new work paths which were more efficient, but this also meant
                      that many jobs became redundant or obsolete. The people involved in
                      these jobs had only two options, either they face a job loss or they
                      learn new skills </p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/3.jpg" />
                  <div className="inpds">
                    <p className="blhds">What is CODE?</p>
                    <p className="sbhd">The recent past has highlighted that the world is fast-changing, whether
                      it is the recession or the pandemic, who survives such calamities?
                      Darwin’s Theory of ‘Survival of the Fittest’, says that the species which has
                      the ability to adapt to face the change survive. So, the point is to make
                      ourselves THE FITTEST to survive.</p>
                    <p>The fast-changing world has also provided us with the best tools,
                      technology and connectivity</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/4.jpg" />
                  <div className="inpds">
                    <p className="blhds">Lorem Ipsum</p>
                    <p className="sbhd">Before the year 2020 when the pandemic struck, many works were being
                      done in a traditional way for ages. We never thought of changing the
                      way these works were being done. But the pandemic presented many
                      challenges and forced us to think in a way where our way of life changed.
                      It created new work paths which were more efficient, but this also meant
                      that many jobs became redundant or obsolete. The people involved in
                      these jobs had only two options, either they face a job loss or they
                      learn new skills .</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/5.jpg" />
                  <div className="inpds">
                    <p className="blhds">What is CODE?</p>
                    <p className="sbhd">The recent past has highlighted that the world is fast-changing, whether
                      it is the recession or the pandemic, who survives such calamities?
                      Darwin’s Theory of ‘Survival of the Fittest’, says that the species which has
                      the ability to adapt to face the change survive. So, the point is to make
                      ourselves THE FITTEST to survive.</p>
                    <p>The fast-changing world has also provided us with the best tools,
                      technology and connectivity</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/6.jpg" />
                  <div className="inpds">
                    <p className="blhds">Lorem Ipsum</p>
                    <p className="sbhd">Before the year 2020 when the pandemic struck, many works were being
                      done in a traditional way for ages. We never thought of changing the
                      way these works were being done. But the pandemic presented many
                      challenges and forced us to think in a way where our way of life changed.
                      It created new work paths which were more efficient, but this also meant
                      that many jobs became redundant or obsolete. The people involved in
                      these jobs had only two options, either they face a job loss or they
                      learn new skills .</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pt-5  pt-lg-4 showctmore">
              <a href="javascript:void(0);" className="orangectathms">Load more</a>
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
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/1.jpg" />
                  <div className="inpds">
                    <p className="blhds">What is CODE?</p>
                    <p className="sbhd">The recent past has highlighted that the world is fast-changing, whether
                      it is the recession or the pandemic, who survives such calamities?
                      Darwin’s Theory of ‘Survival of the Fittest’, says that the species which has
                      the ability to adapt to face the change survive. So, the point is to make
                      ourselves THE FITTEST to survive.</p>
                    <p>The fast-changing world has also provided us with the best tools,
                      technology and connectivity</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/2.jpg" />
                  <div className="inpds">
                    <p className="blhds">New Normal in Education</p>
                    <p className="sbhd">Before the year 2020 when the pandemic struck, many works were being
                      done in a traditional way for ages. We never thought of changing the
                      way these works were being done. But the pandemic presented many
                      challenges and forced us to think in a way where our way of life changed.
                      It created new work paths which were more efficient, but this also meant
                      that many jobs became redundant or obsolete. The people involved in
                      these jobs had only two options, either they face a job loss or they
                      learn new skills </p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/3.jpg" />
                  <div className="inpds">
                    <p className="blhds">What is CODE?</p>
                    <p className="sbhd">The recent past has highlighted that the world is fast-changing, whether
                      it is the recession or the pandemic, who survives such calamities?
                      Darwin’s Theory of ‘Survival of the Fittest’, says that the species which has
                      the ability to adapt to face the change survive. So, the point is to make
                      ourselves THE FITTEST to survive.</p>
                    <p>The fast-changing world has also provided us with the best tools,
                      technology and connectivity</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/4.jpg" />
                  <div className="inpds">
                    <p className="blhds">Lorem Ipsum</p>
                    <p className="sbhd">Before the year 2020 when the pandemic struck, many works were being
                      done in a traditional way for ages. We never thought of changing the
                      way these works were being done. But the pandemic presented many
                      challenges and forced us to think in a way where our way of life changed.
                      It created new work paths which were more efficient, but this also meant
                      that many jobs became redundant or obsolete. The people involved in
                      these jobs had only two options, either they face a job loss or they
                      learn new skills .</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/5.jpg" />
                  <div className="inpds">
                    <p className="blhds">What is CODE?</p>
                    <p className="sbhd">The recent past has highlighted that the world is fast-changing, whether
                      it is the recession or the pandemic, who survives such calamities?
                      Darwin’s Theory of ‘Survival of the Fittest’, says that the species which has
                      the ability to adapt to face the change survive. So, the point is to make
                      ourselves THE FITTEST to survive.</p>
                    <p>The fast-changing world has also provided us with the best tools,
                      technology and connectivity</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/6.jpg" />
                  <div className="inpds">
                    <p className="blhds">Lorem Ipsum</p>
                    <p className="sbhd">Before the year 2020 when the pandemic struck, many works were being
                      done in a traditional way for ages. We never thought of changing the
                      way these works were being done. But the pandemic presented many
                      challenges and forced us to think in a way where our way of life changed.
                      It created new work paths which were more efficient, but this also meant
                      that many jobs became redundant or obsolete. The people involved in
                      these jobs had only two options, either they face a job loss or they
                      learn new skills .</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pt-5  pt-lg-4 showctmore">
              <a href="javascript:void(0);" className="orangectathms">Load more</a>
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
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/3.jpg" />
                  <div className="inpds">
                    <p className="blhds">What is CODE?</p>
                    <p className="sbhd">The recent past has highlighted that the world is fast-changing, whether
                      it is the recession or the pandemic, who survives such calamities?
                      Darwin’s Theory of ‘Survival of the Fittest’, says that the species which has
                      the ability to adapt to face the change survive. So, the point is to make
                      ourselves THE FITTEST to survive.</p>
                    <p>The fast-changing world has also provided us with the best tools,
                      technology and connectivity</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/4.jpg" />
                  <div className="inpds">
                    <p className="blhds">Lorem Ipsum</p>
                    <p className="sbhd">Before the year 2020 when the pandemic struck, many works were being
                      done in a traditional way for ages. We never thought of changing the
                      way these works were being done. But the pandemic presented many
                      challenges and forced us to think in a way where our way of life changed.
                      It created new work paths which were more efficient, but this also meant
                      that many jobs became redundant or obsolete. The people involved in
                      these jobs had only two options, either they face a job loss or they
                      learn new skills .</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/5.jpg" />
                  <div className="inpds">
                    <p className="blhds">What is CODE?</p>
                    <p className="sbhd">The recent past has highlighted that the world is fast-changing, whether
                      it is the recession or the pandemic, who survives such calamities?
                      Darwin’s Theory of ‘Survival of the Fittest’, says that the species which has
                      the ability to adapt to face the change survive. So, the point is to make
                      ourselves THE FITTEST to survive.</p>
                    <p>The fast-changing world has also provided us with the best tools,
                      technology and connectivity</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/6.jpg" />
                  <div className="inpds">
                    <p className="blhds">Lorem Ipsum</p>
                    <p className="sbhd">Before the year 2020 when the pandemic struck, many works were being
                      done in a traditional way for ages. We never thought of changing the
                      way these works were being done. But the pandemic presented many
                      challenges and forced us to think in a way where our way of life changed.
                      It created new work paths which were more efficient, but this also meant
                      that many jobs became redundant or obsolete. The people involved in
                      these jobs had only two options, either they face a job loss or they
                      learn new skills .</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pt-5  pt-lg-4 showctmore">
              <a href="javascript:void(0);" className="orangectathms">Load more</a>
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
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/5.jpg" />
                  <div className="inpds">
                    <p className="blhds">What is CODE?</p>
                    <p className="sbhd">The recent past has highlighted that the world is fast-changing, whether
                      it is the recession or the pandemic, who survives such calamities?
                      Darwin’s Theory of ‘Survival of the Fittest’, says that the species which has
                      the ability to adapt to face the change survive. So, the point is to make
                      ourselves THE FITTEST to survive.</p>
                    <p>The fast-changing world has also provided us with the best tools,
                      technology and connectivity</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/6.jpg" />
                  <div className="inpds">
                    <p className="blhds">Lorem Ipsum</p>
                    <p className="sbhd">Before the year 2020 when the pandemic struck, many works were being
                      done in a traditional way for ages. We never thought of changing the
                      way these works were being done. But the pandemic presented many
                      challenges and forced us to think in a way where our way of life changed.
                      It created new work paths which were more efficient, but this also meant
                      that many jobs became redundant or obsolete. The people involved in
                      these jobs had only two options, either they face a job loss or they
                      learn new skills .</p>
                    <a href="#">Read More!</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pt-5  pt-lg-4 showctmore">
              <a href="javascript:void(0);" className="orangectathms">Load more</a>
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
          <h4>Lorum Ipsum</h4>
          <p>Best-in-class content by leading faculty and industry leaders<br /> in the 
            form of videos, cases and projects</p>
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
            <p>41, Rajiv Gandhi Salai (OMR), Padur,
              (Via) Kelambakkam,
              Chennai - 603 103, India</p>
            <a href="tel:+91-9606333232"> +91 9945580408 </a>
            <a href="mailto:codeadmissions@hindustanuniv.ac.in ">codeadmissions@hindustanuniv.ac.in </a>
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
</div>



        </>
    );
};

export default Blog;