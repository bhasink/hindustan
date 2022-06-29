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


const AboutUs = () => {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

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
            nav: false,
            dots: true,
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
          <div className="col-md-8 col-lg-7 text-center align-self-center">
            <div className="hmbannerquotes">
              <img src="/images/bnrtexttop.png" className="tpquotelf" />
              <h1 className="bnrhd">
                <b>About <br/> Hindustan Online</b> - <br/> C<span className='ogx'>O</span>DE</h1>
              
              <img src="/images/bnquotergs.png" className="bnquoterg" />
            </div>
          </div>
          <div className="col-md-4 col-lg-5 text-center">
            <img src="/images/aboutmobilesnew.jpg" className="mobhomeshos" />
          </div>
        </div>
      </div>	
    </div>
  </section>	
  <section className="whoarewes">
    <div className="container">
      <div className>
        <div className="row">
          <div className="col-md-6 col-lg-6 pr-lg-5" id="whoweare">
            <div className="hdingst  text-center mbltop">
              <h2 className="mainhds">Wh<span className="ogx">o</span> we are</h2>
            </div>
            <div className="vdthmbs">
              <img src="/images/aboutthmbs.jpg" className="fllimg" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 text-lg-left text-center text-md-left mt-lg-0 mt-5 mt-md-0 align-self-center">
            <div className="hdingst dsktop">
              <h2 className="mainhds">Wh<span className="ogx">o</span> we are</h2>
            </div>
            <p>The renowned Hindustan Group of Institutions in its non-stop endeavor to be at the forefront of quality education has proudly launched HINDUSTAN ONLINE - CODE (Centre for Open and Digital Education). In the wake of the National Education Policy 2020, India is experiencing an important shift in education and Online programs have successfully catered to the need of the hour by providing highly revered qualifications to both aspiring students and working professionals.</p>
            <p  className={`moretext ${isActive ? "" : "showtexts"}`} > HINDUSTAN ONLINE - CODE offers specially designed programs with well-researched curricula to reduce the industry-academia gap. This makes our learners more employable in this highly competitive world. The programs are all contemporary with a well-curated and well-researched curriculum. Our programs do not just provide the theoretical learning of concepts, but we focus on the practical application of these concepts by following Outcome-based Learning concepts. HINDUSTAN ONLINE - CODE aims at reforming the Indian Higher Education landscape through the provision of equitable and inclusive learning opportunities, contributing to a significant increase in enrolment.</p>
           <a href onClick={handleToggle} className={`moreless-button ${isActive ? "" : "rdlss "}`}><span>Read more</span> <span>Read less</span> </a> 
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
        <div className="col-md-6 col-lg-7 align-self-center mt-lg-0 mt-5 mt-md-0" id="leadership">
          <div className="hdingst dsktop">
            <h2 className="mainhds">leadership n<span className="ogx">o</span>te</h2>
          </div>
          <p className="text-center text-lg-left text-md-left">Hindustan Institute of Technology and Science(HITS), is one amongst the first few Universities in India to be entitled by AICTE to offer online professional Master Degree Programs of MBA and MCA. In the rapidly changing world with increasing movement, flexibility, and information overflow, HITS is determined to create new learning experiences through Hindustan Online - CODE.

Inclusive education is the new mantra for the knowledge society. Our vision is where anyone, anywhere can acquire knowledge and learn new business and management skills faster than ever before. This is feasible due to digital technology and our expertise in delivering quality online education.

Crossing all geographical boundaries CODE is offering online PG Degree programs of MBA and MCA apart from BBA, B.Com. and BCA and many more in the years to come.

Even during the pandemic year our faculty were continuously engaged in updating their knowledge and skills through courses offered by Ed X, Coursera and various MOOCs. All these digital assets worth millions were procured by the University.

HITS holds the World Record of Excellence for “HIGHEST NUMBER OF ONLINE LESSONS COMPLETED” awarded by the International Book of Records. 4359 participants completed 2,20,745 online lessons as on November 2020. It is a very unique distinction to HITS.

In a pioneering effort, HITS has partnered with the Global EdTech Giant Coursera, to deliver industry-ready learning pathways to students.

I wish all the learners from across the globe the very best and welcome you all to Hindustan.

Affordable, quality education at the convenience of the Learner at their door steps is our mission in shaping the future of our nation.

I wish all the teachers and learners success in exploring the world of education. in the new normal.</p>

<p className="text-center text-lg-left text-md-left"><b>Mr. Ashok Verghese</b><br/>
<b>Director</b></p>
        </div>
      </div>
    </div>
  </section>
  <section className="rnkers" id="awardsranking">
    <div className="container">
      <div className="dotsptns" />
      <img src="/images/abbots.png" className="bottomabuis" />
      <div className="text-center hdingst">
        <h2 className="mainhds">Awards &amp; Rankings</h2>
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
						<img src="./images/awardscrd/1.jpg"/>
					</div>
						
					<p className="usrnmtst">Ranked No.2 Deemed to be University in India,2020  </p>
					<p>INDIA TODAY</p>
					
					</div>
				</div>
				
				<div className="item">
					<div className="testipnlpts">
					<div className="lgocirc">
						<img src="./images/awardscrd/2.jpg"/>
					</div>
						
					<p className="usrnmtst">Ranked 107th position amongst the top Engineering Institutions</p>
					<p>NIRF</p>
					
					</div>
				</div>
				
				<div className="item">
					<div className="testipnlpts">
					<div className="lgocirc">
						<img src="./images/awardscrd/3.jpg"/>
					</div>
						
					<p className="usrnmtst">QS BRICS Ranking.  </p>
					<p>Rated 301-350 band in the World University Rankings 2019</p>
					
					</div>
				</div>
				
				
				<div className="item">
					<div className="testipnlpts">
					<div className="lgocirc">
						<img src="./images/awardscrd/4.jpg"/>
					</div>
						
					<p className="usrnmtst">Rated GOLD (overall) in the QS I-GAUGE Indian University Rating  </p>
					<p>QS I-GAUGE Indian University</p>
					
					</div>
				</div>
				
				<div className="item">
					<div className="testipnlpts">
					<div className="lgocirc">
						<img src="./images/awardscrd/5.jpg"/>
					</div>
						
					<p className="usrnmtst">Awarded “HIGHEST NUMBER OF ONLINE LESSONS COMPLETED”  </p>
					<p>INTERNATIONAL BOOK OF RECORDS</p>
					
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
        <li><a href="https://wa.me/9945580408/?text="><img src="/images/whatsappcta.png" /></a></li>
      </ul>
    </div>
  </div>
  
  <Footer/>

        </>
    );
};

export default AboutUs;