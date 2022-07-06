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
import { useRouter } from 'next/router'


const BlogDetails = () => {

    const [blogsDetails, setBlogsDetails] = useState([])
    const [trendingCourses, setTrendingCourses] = useState([])
    const [catCourses, setCatCourses] = useState([])

    
    const [isReadMore, setIsReadMore] = useState(true);
    const router = useRouter()

    useEffect(() => {
    AOS.init({
      duration: 2000,
    })

    if (router.isReady) {
      const _id = router.query._id
      getBlogsDetails(_id)
      console.log(router.query);
    }


  },[router.isReady])

  const getBlogsDetails = async (_id) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/get-blogs-details`,
        {
          slug: _id,
        },
        config,
      )

      const getBlogsDetails = data.get_blogs_details
      const getTrendingCourses = data.get_t_courses.data
      const getCatCourses = data.get_cat_courses.data

      if(getBlogsDetails == null){
        router.push('/404')
      }

      console.log(getBlogsDetails);

      setBlogsDetails(getBlogsDetails)
      setTrendingCourses(getTrendingCourses)
      setCatCourses(getCatCourses)

    } catch (err) {
      console.log(err)
    }
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
  <section className="blogsdescrarts">
    <div className="container">
      <img src="/images/abbots.png" className="topmstomabuis rghts" />
      <img src="/images/topbllefts.png" className="topmstomabuis mdlvl" />
      <div className="text-lg-left hdingst">
        <h2 className="mainhds">{blogsDetails.name}</h2>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="aticlblgfl">
            <div className="mainthumbs">
              <img src="/images/blogthmbs/1.jpg" />
            </div>
            <p>{blogsDetails.description}</p>
          </div>
          <div className="publishinfos">
            <p className="dtpst">Posted by: {blogsDetails.posted_by}</p>
            <p className="dtpst">Published date: {blogsDetails.published_date}</p>

            <div className="socialplu">
              <div className="shrmeda">
                <p>Share if you like</p>
                <ul>
                  <li><a href="#"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                </ul>
              </div>
              {/* <div className="lkcomms">
                <a href="#"><img src="/images/hearts.png" /></a>
                <a href="#"><img src="/images/comnt.png" /></a>
              </div> */}
              {/* <div className="nextartcl">
                <a href="#">Next article <i className="fal fa-chevron-circle-right" /></a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sideblogsbars">
            <h4>Most Popular Articles</h4>

            {/* {JSON.stringify(trendingCourses,null,2)} */}
            <ul>

            {trendingCourses &&
                  trendingCourses.map((trending, key) => (
              <li>

                {trending.blog_category == 1 ? "Admission" : trending.blog_category == 1 ? "Programs" : "Others"}
                
                <br />
              
                <Link href={`/blogs/${trending.slug}`}>
              <a>
                  {trending.name}
              </a>
              </Link>

              </li>

))}
            
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="relatedblogs">
    <div className="container">
      <img src="/images/abbots.png" className="topmstomabuis btms" />
      <img src="/images/blacklondts.png" className="topmstomabuis leftbtms" />
      <div className="text-center hdingst">
        <h2 className="mainhds">Related Bl<div className="ogcl">O</div>g</h2>
      </div>
      <div className="gallcrd">


      <OwlCarousel
                    className="featuredslide owl-theme owl-carousel"
                    loop
                    responsive={state.responsive_trust_comp}
                    nav
                    margin={20}
                   
                  >

{catCourses &&
                  catCourses.map((relatedBlogs, key) => (
<div className="item">
            <div className="artblogs">
              <img src="/images/blogthmbs/related2.jpg" />
              <div className="inpds">
                <p className="blhds">{relatedBlogs.name}</p>
                <p className="sbhd">{relatedBlogs.short_desc} </p>
                <Link href={`/blogs/${relatedBlogs.slug}`}>
                  <a>Read More!</a>
                </Link>
              </div>
            </div>
          </div>

                  ))}
         

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

export default BlogDetails;