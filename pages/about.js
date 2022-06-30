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
      
        responsive_top_cat: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            margin:20,
            autoplay:false,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            loop: false,
          },
          300: {
            items: 1,
            nav: true,
            margin:20,
            autoplay:false,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            dots: false,
            loop: false,
          },
    
          766: {
            items: 1,
            margin:20,
            nav: true,
            dots: false,
            loop: true,
          },
    
          1200: {
            items: 1,
            margin:20,
            nav: true,
            autoplay:false,
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
            autoplay:false,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            loop: true,
          },
          300: {
            items: 1,
            nav: true,
            margin:20,
            autoplay:false,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            dots: false,
            loop: true,
          },
    
          766: {
            items: 2,
            nav: true,
            dots: false,
            loop: true,
          },
    
          1200: {
            items: 3,
            margin:40,
            nav: true,
            center:true,
            autoplay:false,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            dots: false,
          },
        }
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
  <section className="leaderbdrs"  id="leadership">
    <div className="container">

    <div className="hdingst text-center">
            <h2 className="mainhds">leadership n<span className="ogx">o</span>te</h2>
          </div>


      <div className="dotsptns" />
      <img src="/images/featblus.png" className="bottomabuis" />

      <OwlCarousel className="aboutleadslides" responsive={state.responsive_top_cat}>
      <div className="item">
      <div className="row">
        <div className="col-md-6 col-lg-5 pr-lg-5">
        
          <div className="vdthmbs">
            <img src="/images/aboutleader.jpg" className="fllimg" />
          </div>
        </div>
        <div className="col-md-6 col-lg-7 align-self-center mt-lg-0 mt-5 mt-md-0">
        <div class="agthghts">
          <p className="text-center text-lg-left text-md-left">Hindustan Institute of Technology and Science(HITS), is one amongst the first few Universities in India to be entitled by AICTE to offer online professional Master Degree Programs of MBA and MCA. In the rapidly changing world with increasing movement, flexibility, and information overflow, HITS is determined to create new learning experiences through Hindustan Online - CODE.

Inclusive education is the new mantra for the knowledge society. Our vision is where anyone, anywhere can acquire knowledge and learn new business and management skills faster than ever before. This is feasible due to digital technology and our expertise in delivering quality online education.

Crossing all geographical boundaries CODE is offering online PG Degree programs of MBA and MCA apart from BBA, B.Com. and BCA and many more in the years to come.

Even during the pandemic year our faculty were continuously engaged in updating their knowledge and skills through courses offered by Ed X, Coursera and various MOOCs. All these digital assets worth millions were procured by the University.

HITS holds the World Record of Excellence for “HIGHEST NUMBER OF ONLINE LESSONS COMPLETED” awarded by the International Book of Records. 4359 participants completed 2,20,745 online lessons as on November 2020. It is a very unique distinction to HITS.

In a pioneering effort, HITS has partnered with the Global EdTech Giant Coursera, to deliver industry-ready learning pathways to students.

I wish all the learners from across the globe the very best and welcome you all to Hindustan.

Affordable, quality education at the convenience of the Learner at their door steps is our mission in shaping the future of our nation.

I wish all the teachers and learners success in exploring the world of education. in the new normal.</p>
</div>
<p className="text-center text-lg-left text-md-left"><b>Mr. Ashok Verghese</b><br/>
<b>Director</b></p>
        </div>
      </div>
       </div> 


       <div className="item">
      <div className="row">
        <div className="col-md-6 col-lg-5 pr-lg-5">
        
          <div className="vdthmbs">
            <img src="/images/vcsridhara.jpg" className="fllimg" />
          </div>
        </div>
        <div className="col-md-6 col-lg-7 align-self-center mt-lg-0 mt-5 mt-md-0">
        <div class="agthghts">
          <p className="text-center text-lg-left text-md-left">Hindustan Institute of Technology and Science has always been in the forefront of reaching out. Education needs a greater focus on Accessibility, Equity and Quality. With the guiding Vision of our Founder Chairman “To make every man a success and no man a failure” HITS has established “Centre for Open and Digital Education” (CODE). Moving beyond dissemination of knowledge, CODE resolves to blend academic rigor, the culture of inquisitions leading to innovation and sustained Industry engagement.
Gross Enrolment Ratio (GER)the percentage of students belonging to the eligible age group enrolled in Higher Education in India in 2019-20 is 27.1% only.National Educational Policy 2020 aims at increasing it to 50% in five years. The present growth rate of expansion of Higher Education Institutions will not be sufficient to reach this target. Online and Distance Education Mode is added means of reaching this dream.
In this context, the Online Programs offered by HITS shall bring in the revolution in the education and career of millions of Indians who can study through online mode and earn a degree that is duly entitled by AICTE/UGC. The working professionals, home makers and others can earn their degree at their convenient pace. Well prepared learning material, Live and Recorded Videos of Class Lectures, strong student support, interaction rooms, highly experienced faculty from academics and industries are few of many key advantages with Hindustan Online.
We welcome the aspiring students to explore new arena of online education and make their dreams come true by acquiring higher knowledge and also get recognised academic degrees to build better career.
</p>
</div>

<p className="text-center text-lg-left text-md-left"><b>Dr. S.N. Sridhara</b><br/>
<b>Vice Chancellor</b></p>
        </div>
      </div>
       </div> 



       <div className="item">
      <div className="row">
        <div className="col-md-6 col-lg-5 pr-lg-5">
        
          <div className="vdthmbs">
            <img src="/images/chancellor.jpg" className="fllimg" />
          </div>
        </div>
        <div className="col-md-6 col-lg-7 align-self-center mt-lg-0 mt-5 mt-md-0">
         <div class="agthghts">

         
          <p className="text-center text-lg-left text-md-left">Hindustan Group of Institutions was established by our Founder and Chairman (late) Dr. K.C.G. Verghese with the aim of offering quality education with practical application in the field of Aviation, Engineering, Technology, Management and Applied Sciences. Our Founder had envisioned “To make everyman a success and no man a failure” which is the guiding spirit that leads us today.
Hindustan Institute of Technology and Science, is always enduring and striving to develop the graduates to innovative leaders capable of facing challenges in the specialized fields at par with the students of any institution of international repute. In its endeavour to benefit the working professionals and students wanting to pursue Higher Education to further their prospects, HITS has opened a new chapter “CODE” - Centre for Open and Digital Education, to offer higher degrees in the digital platform.
CODE aims to create an inclusive environment - Educate all - Empower all and Enhance their employability. Through CODE Hindustan endeavours to provide socially and industrially relevant quality higher education to all strata of society, and to provide better opportunities for an inclusive society to achieve global standards.
I welcome the Learners to reinvent themselves with access to quality education that has been made affordable by CODE.
I hope HITS will develop more Certificate, Diploma and Degree Level Programs to bring out the best in young India to develop into an Economically Sound Knowledge Society.
</p>

<p>I wish HITS, CODE and all learners a great success.</p>
<h5>Some of the Awards and accolades received by Dr. Mrs. Verghese are:</h5>
<ul>
<li>"India Icon 2020 Award - the Iconic Person" presented by ICT Academy</li>
<li>Indo Australian Award for the Meritorious Service in the field of Education in 2014.</li>
<li>Perarignar Anna Award - for her excellent contribution in highways and rural works department - awarded by the Government of Tamil Nadu in the year 1997. She received this award from the then Chief Minister of Tamil Nadu, Dr. M.K. Karunanidhi.</li>
<li>Lifetime Achievement Award for Education Excellence - by Indian Economic Development & Research Association (IEDRA)..</li>
<li>Women Super Achiever Award - 2013 - by Asian Leadership Forum, Dubai.</li>
<li>Eminent Engineering Personality Award - 2013 from Institution of Engineers, India.</li>
</ul>
</div>

<p className="text-center text-lg-left text-md-left"><b>Dr. Elizabeth Verghese</b><br/>
<b>Chairperson, HGI</b></p>
        </div>
      </div>
       </div> 


       <div className="item">
      <div className="row">
        <div className="col-md-6 col-lg-5 pr-lg-5">
        
          <div className="vdthmbs">
            <img src="/images/prochancellor.jpg" className="fllimg" />
          </div>
        </div>
        <div className="col-md-6 col-lg-7 align-self-center mt-lg-0 mt-5 mt-md-0">
        <div class="agthghts">
          <p className="text-center text-lg-left text-md-left">In the chronicles of Hindustan Institute of Technology & Science (HITS), a new page has been created with the establishment of the Centre for Open and Digital Education (CODE). This new initiative aims to offer full academic programs through online education.
HITS has a legacy in empowering students with creative thinking by using innovative teaching methods. Our multi-disciplinary learning environment with Choice-Based Credit System (CBCS) hones the skills of students and provides them practical knowledge to enhance their prospects for employment. Our MoUswith leading industries and our collaborative partnerships with International Universities help students develop a strong global competency.
The widespread integration of technology have made distance learning easier and faster. Using this advantage, HITS aims to make higher education more accessible to aspiring students. As a first step in this direction HITS plans to initially introduce PG programs (MBA and MCA) that will ensure global career opportunities for our students. The dreams of aspirants to pursue higher education while working after schooling will be fulfilled by specially curated UG courses of BBA, BCA and B.Com offered Online
These courses will be conducted utilising the expertise of our faculty from the School of Management and School of Computing Sciences. These departments have been offering regular programs for the last three decades and our students from these streams of education have found gainful employment as Entrepreneurs and also as IT Experts and Management Professionals in notable corporate entities.
I wish all success & expect this mode of learning will take HITS to the farthest corners of the society to provide quality education.

</p>
</div>

<p className="text-center text-lg-left text-md-left"><b>Dr. Anand Jacob Verghese</b><br/>
<b>Pro Chancellor’s Message </b></p>
        </div>
      </div>
       </div>


       <div className="item">
      <div className="row">
        <div className="col-md-6 col-lg-5 pr-lg-5">
        
          <div className="vdthmbs">
            <img src="/images/provc.jpg" className="fllimg" />
          </div>
        </div>
        <div className="col-md-6 col-lg-7 align-self-center mt-lg-0 mt-5 mt-md-0">
        <div class="agthghts">
          <p className="text-center text-lg-left text-md-left">Centre for Open and Digital Education (CODE) is yet another feather in the cap of Hindustan Institute of Technology and Science (HITS), an Institution committed to excellence in world class higher education.
Popular Online Higher Education programs are now reachable to everyone who desires to learn and acquire degrees in their own interested arena, realised through Open Distant Learning (ODL) and Online Learning (OL) offered by HITS. These programs are designed with enriched curriculum to make them apt for the professional career advancement and to reach the expectations of industries, corporate and public. The legacy of HITS in rendering world class higher education is evident in design of course material and delivery with interactive sessions by experienced faculty and professionals.
Higher Education is the only hope for success in today’s Volatile, Uncertain, Complex and Ambiguous (VUCA) World. HITS has democratized higher education through CODE. The PG Degree programs of MBA and MCA are entitled by AICTE and the UG Degree programs of BBA, B. Com and BCA are entitled by UGC. The programs are delivered through Open and distance mode as well as Online mode.
At affordable costs, with self paced learning, delivered by experienced faculty and international as well industry experts the programs open up a world of opportunities for personal and professional growth. With high academic standards, experienced faculty, and engaging curriculum as on campus, one can conquer the VUCA World.
Centre for Open and Digital Education (CODE) of HITS welcome the prospecting students and delegates for exploring the new experience of Open Learning and Online Learning for satisfying their hunger of new learnings and excel in their career.


</p>
</div>

<p className="text-center text-lg-left text-md-left"><b>Dr. R. W. Alexander Jesudasan</b><br/>
<b>Pro Vice Chancellor </b></p>
        </div>
      </div>
       </div>


      </OwlCarousel>
      

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