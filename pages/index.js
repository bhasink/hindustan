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


const Index = () => {

  const [allCourses, setAllCourses] = useState([])
  const [mastersCourses, setMastersCourses] = useState([])
  const [bachelorsCourses, setBachelorsCourses] = useState([])
  const [trendingCourses, setTrendingCourses] = useState([])
  
  useEffect(() => {
  
    
    AOS.init({
      duration: 2000,
    })

    getAllCourses()
  }, [])


  const getAllCourses = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/listing`)

      const getCourses = data.data.get_courses.data
      const get_courses_masters = data.data.get_courses_masters.data
      const get_courses_bachelors = data.data.get_courses_bachelors.data
      const get_courses_trending = data.data.get_courses_trending.data

      console.log(get_courses_trending)

      setAllCourses(getCourses)
      setMastersCourses(get_courses_masters)
      setBachelorsCourses(get_courses_bachelors)
      setTrendingCourses(get_courses_trending)

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  
    const state = {
       

        responsive_featuredslide: {
        
            0: {
              items: 1,
              nav: true,
              dots: false,
              loop: true
            },
            300: {
              items: 2,
              nav: false,
             dots: true,
               margin: 10,
              loop: true
            },
      
            766: {
              items: 3,
              nav: true,
              center:true,
              dots: false,
              loop: true
            },
      
            1200: {
              items: 3,
              nav: true,
              center:true,
              autoplay: true,
              margin: 20,
              autoplaySpeed: 3000,
                autoplayHoverPause: true,
              dots: false,
              loop: true
            }
          },
        


        responsive_reviewtestim: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            autoplay:true,
            autoplaySpeed: 3000,
            center: true,
            autoplayHoverPause: true,
            loop: true,
          },
          300: {
            items: 1,
            nav: true,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            center: true,
            dots: false,
            loop: true,
          },
    
          766: {
            items: 2,
            nav: true,
            margin: 0,
            dots: false,
            loop: true,
          },
    
          1200: {
            items: 3,
            margin: 40,
            nav: true,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            center: true,
            dots: false
          }
      },

        responsive_advantfeat: {
          items: 3,
    loop: true,
    nav:false,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    center: true,

          0: {
            items: 1,
            nav: false,
            dots: true,
            loop: true
          },
          300: {
            items: 1,
            nav: false,
           dots: true,
           center: true,
            loop: true
          },
    
          766: {
            items:2,
            nav: true,
            dots: false,
            loop: true
          },
    
          1200: {
            items: 3,
            margin: 20,
            nav: true,
        center:true,
            dots: true
          }
        },

        responsive_homefirstbbn: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            loop: true
          },
          300: {
            items: 1,
            nav: true,
           dots: true,
            loop: true
          },
    
          766: {
            items: 1,
            nav: false,
            dots: false,
            loop: true
          },
    
          1200: {
            items: 1,
            nav: true,
            dots: true,
        center: true,
          },
        },

        responsive_trust_comp: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            animateOut: 1,
            animateIn: 0,
            loop: true
          },
          300: {
            loop: true,
            autoplay: true,
            items: 1,
            nav: false,
            animate:true,
            autoplay:true,
            autoplaySpeed: 6000,
            autoplayHoverPause: true,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp'
          },
    
          766: {
            items: 4,
           nav: false,
          dots: false,
            loop: true
          },
    
          1200: {
            items: 6,
            nav: false,
            autoplay:true,
            animate:true,
            autoplaySpeed: 6000,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
            dots: true, 
            loop: true
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
      
      }

    

    return (
        <>

  <Nav />



  <section className="homemainbanner mainfnbans">


  <OwlCarousel
                    className="featuredslide owl-theme owl-carousel"
                    loop
                    responsive={state.responsive_homefirstbbn}
                    nav
                   
                  >
                     <div className="item">
                     <img src="/images/homebanners/1Banner.jpg" className="backdeksbgs" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 text-center align-self-center commonbnlyts">
              <div className="hmbannerquotes">
               
                <h1 className="bnrhd">
                  Cracking the <span>C<div className="ogcl">O</div>DE</span> to<br />
                  Success</h1>
               
               
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center">
              <img src="/images/smartboysbn1.png" className="rgtmds" />
              <img src="/images/homebanners/1mobbn.jpg" className="mobhomeshos" />
            </div>
          </div>
        </div>	
      </div>

      <div className="item">
      <img src="/images/homebanners/2Banner.jpg" className="backdeksbgs" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 text-center align-self-center commonbnlyts">
              <div className="hmbannerquotes">
              <a class="orangectathms" href  data-toggle="modal" data-target="#exampleModalCenter">Apply Now</a>
                <h1 className="bnrhd">
                 <span>#CrackTheC<div className="ogcl">O</div>DE</span><br />
                  with our superlative set of programs</h1>
                
              
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center appmbctas">
              <img src="/images/smartboys2.png" className="rgtmds" />
              <img src="/images/homebanners/2mobbn.jpg" className="mobhomeshos" />
              <a class="orangectathms" href data-toggle="modal" data-target="#exampleModalCenter">Apply Now</a>
            </div>
          </div>
        </div>	
      </div>


      <div className="item">
      <img src="/images/homebanners/3Banner.jpg" className="backdeksbgs" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 text-center align-self-center  commonbnlyts">
              <div className="hmbannerquotes">
                
                <h1 className="bnrhd">
                  Cracking the <span>C<div className="ogcl">O</div>DE</span> to<br />
                  Success</h1>
               
                
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center">
              <img src="/images/smartboysbn3.png" className="rgtmds" />
              <img src="/images/homebanners/3mobbn.jpg" className="mobhomeshos" />
            </div>
          </div>
        </div>	
      </div>


     
                  </OwlCarousel>
                  

  </section>
  <section className="onestopcourse">
    <div className="container">
      <img src="/images/bluedots.png" className="bldotslefts" />
      <div className="mx-auto col-md-10 col-lg-8 bgorngs text-center">
        <div className="coursetextmoreinf">
          <h2 className="mdbldshds">Our one stop <b>study destination</b></h2>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="trending-tab" data-toggle="tab" href="#trending" role="tab" aria-controls="trending" aria-selected="true">Trending</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="allprofile-tab" data-toggle="tab" href="#allprofile" role="tab" aria-controls="allprofile" aria-selected="false">All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="masters-tab" data-toggle="tab" href="#masters" role="tab" aria-controls="masters" aria-selected="false">Masters</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="batchelors-tab" data-toggle="tab" href="#batchelors" role="tab" aria-controls="batchelors" aria-selected="false">Bachelors</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="trending" role="tabpanel" aria-labelledby="trending-tab">
              <div className="coursehnd">
                <ul class="data-list" data-autoscroll>
                {trendingCourses &&
                  trendingCourses.map((get_courses, key) => (

<Link href={`programs/${get_courses.slug}`}>
                  <li><a href="#">{get_courses.name}</a></li>
                  </Link>

                  ))}
                 
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="allprofile" role="tabpanel" aria-labelledby="allprofile-tab">
              <div className="coursehnd">
                <ul>
                {allCourses &&
                  allCourses.map((get_courses, key) => (

<Link href={`programs/${get_courses.slug}`}>
                  <li><a href="#">{get_courses.name}</a></li>
                  </Link>

                  ))}
                 
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="masters" role="tabpanel" aria-labelledby="masters-tab">
              <div className="coursehnd">
                <ul>
                {mastersCourses &&
                  mastersCourses.map((get_courses, key) => (

<Link href={`programs/${get_courses.slug}`}>
                  <li><a href="#">{get_courses.name}</a></li>
                  </Link>

                  ))}
                 
                                 </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="batchelors" role="tabpanel" aria-labelledby="batchelors-tab">
              <div className="coursehnd">
                <ul>
                {bachelorsCourses &&
                  bachelorsCourses.map((get_courses, key) => (

<Link href={`programs/${get_courses.slug}`}>
                  <li><a href="#">{get_courses.name}</a></li>
                  </Link>

                  ))}
                                 </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="aboutsect">
    <img src="/images/abbots.png" className="bottomabuis" />
    <img src="/images/topabdots.png" className="topmstomabuis" />
    <div className="container">
      <div className="col-md-12 col-lg-12 align-self-center text-center" data-aos="fade-up" data-aos-duration={1000}>
        <h2 className="mainhds mb-lg-4 ">Ab<div className="ogcl">o</div>ut Us</h2>
        <p>Hindustan Online - CODE - the Centre for Open and Digital Education, the newest addition to the renowned Hindustan Group of Institutions is an endeavor in making world-class education accessible. With a well-curated, well-researched curriculum we believe in the power of Outcome-based Learning. Our programs do not just provide theoretical learning, but focus on practical application of concepts.  {/* <a href="#">know more</a> */}</p>
      </div>
      <div className="text-center pt-4 pb-4">
        <Link href="about">
          <a className="orangectathms">know more</a>
        </Link>
      </div>
      <div className="col-md-12 taglineabs">
      <OwlCarousel
                    className="featuredslide owl-theme owl-carousel"
                    loop
                    responsive={state.responsive_homefirstbbn}
                    nav
                   
                  >
          <div className="item">
            <div className="mnboxstg">
              <div className="usericons">
                <img src="/images/abouttags1.png" />
              </div>
              <div className="mnlines">
                <p>Online Degree Entitled by UGC/AICTE</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="mnboxstg">
              <div className="usericons">
                <img src="/images/abouttags2.png" />
              </div>
              <div className="mnlines">
                <p> Live online sessions</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="mnboxstg">
              <div className="usericons">
                <img src="/images/abouttags3.png" />
              </div>
              <div className="mnlines">
                <p>Value-added certifications by Coursera &amp; edX</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="mnboxstg">
              <div className="usericons">
                <img src="/images/abouttags4.png" />
              </div>
              <div className="mnlines">
                <p>Global Accreditation</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="mnboxstg">
              <div className="usericons">
                <img src="/images/abouttags5.png" />
              </div>
              <div className="mnlines">
                <p>Sessions by Top industry experts </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="mnboxstg">
              <div className="usericons">
                <img src="/images/abouttags6.png" />
              </div>
              <div className="mnlines">
                <p>100+ Hiring companies </p>
              </div>
            </div>
          </div>
         </OwlCarousel>
      </div>
    </div>
  </section>
  <section className="featuredcls">
    <img src="/images/featblus.png" className="bottomabuis" />
    <img src="/images/abbots.png" className="borblfts mobmls" />
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">Popular <div className="ogcl">O</div>nline Programs</h2>
      </div>
      <div className="allprogtabs">
        <ul className="nav nav-tabs" id="myTab2" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="trendingprg-tab" data-toggle="tab" href="#trendingprg" role="tab" aria-controls="trendingprg" aria-selected="true">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="allprofileprg-tab" data-toggle="tab" href="#allprofileprg" role="tab" aria-controls="allprofileprg" aria-selected="false">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="mastersprg-tab" data-toggle="tab" href="#mastersprg" role="tab" aria-controls="mastersprg" aria-selected="false">Masters</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="batchelorsprg-tab" data-toggle="tab" href="#batchelorsprg" role="tab" aria-controls="batchelorsprg" aria-selected="false">Bachelors</a>
          </li>
        </ul>
      </div>

      {trendingCourses.length && (

      <div className="tab-content" id="myTabContent2">
        <div className="tab-pane fade show active" id="trendingprg" role="tabpanel" aria-labelledby="trendingprg-tab">
          <div className="coursespanels">

          <OwlCarousel
                    className="featuredslide owl-theme owl-carousel"
                    loop
                    responsive={state.responsive_featuredslide}
                    nav
                   
                  >

{trendingCourses.map((get_courses, key) => (

<Link href={`programs/${get_courses.slug}`}>

<div className="item">
                <div className="crsimgs">
                  <a href="#">
                    <img
                            src={
                              `${process.env.NEXT_PUBLIC_B_API}thumbnail/` +
                              get_courses.thumbnail
                            }
                            className="fllimg"
                          />
                    </a>
                  <a href="#" className="crcategs">                          {get_courses.course_type == 1 ? 'Master' : 'Bachelor'}  
</a>
                </div>
                <div className="panelcards">
                  <h5 className="csnms crlnts">{get_courses.name}</h5>
                  <div className="tmclcs">
                    <img src="/images/wallclock.png" className="tmicn" />
                    <p>{get_courses.duration} Years</p>
                  </div>
                  <div className="tmclcs crsinfs">
                    <img src="/images/scholors.png" className="tmicn" />
                    <p>{get_courses.short_desc.substring(0, 50)}</p>
                  </div>
                  {/* <div className="tmclcs">
                    <img src="/images/rupicon.png" className="tmicn" />
                    <p>45,000</p>
                  </div> */}
                </div>
              </div>

              </Link>

                  ))}

                      </OwlCarousel>

        
          </div>
        </div>
        <div className="tab-pane fade" id="allprofileprg" role="tabpanel" aria-labelledby="allprofileprg-tab">
          <div className="coursespanels">
          <OwlCarousel
                    className="featuredslide owl-theme owl-carousel"
                    loop
                    responsive={state.responsive_featuredslide}
                    nav
                   
                  >

{allCourses && allCourses.map((get_courses, key) => (

<Link href={`programs/${get_courses.slug}`}>

<div className="item">
                <div className="crsimgs">
                <a href="#">
                    <img
                            src={
                              `${process.env.NEXT_PUBLIC_B_API}thumbnail/` +
                              get_courses.thumbnail
                            }
                            className="fllimg"
                          />
                    </a>
                    <a href="#" className="crcategs">                          {get_courses.course_type == 1 ? 'Master' : 'Bachelor'}  
</a>
                </div>
                <div className="panelcards">
                  <h5 className="csnms crlnts">{get_courses.name}</h5>
                  <div className="tmclcs">
                    <img src="/images/wallclock.png" className="tmicn" />
                    <p>{get_courses.duration} Years</p>
                  </div>
                  <div className="tmclcs crsinfs">
                    <img src="/images/scholors.png" className="tmicn" />
                    <p>{get_courses.short_desc.substring(0, 50)}</p>
                  </div>
                  {/* <div className="tmclcs">
                    <img src="/images/rupicon.png" className="tmicn" />
                    <p>45,000</p>
                  </div> */}
                </div>
              </div>

              </Link>

                  ))}

                      </OwlCarousel>
          </div>
        </div>
        <div className="tab-pane fade" id="mastersprg" role="tabpanel" aria-labelledby="mastersprg-tab">
          <div className="coursespanels">
          <OwlCarousel
                    className="featuredslide owl-theme owl-carousel"
                    loop
                    responsive={state.responsive_featuredslide}
                    nav
                   
                  >

{mastersCourses &&
                  mastersCourses.map((get_courses, key) => (

<Link href={`programs/${get_courses.slug}`}>

<div className="item">
                <div className="crsimgs">
                <a href="#">
                    <img
                            src={
                              `${process.env.NEXT_PUBLIC_B_API}thumbnail/` +
                              get_courses.thumbnail
                            }
                            className="fllimg"
                          />
                    </a>
                  <a href="#" className="crcategs">                          {get_courses.course_type == 1 ? 'Master' : 'Bachelor'}  
</a>
                </div>
                <div className="panelcards">
                  <h5 className="csnms crlnts">{get_courses.name}</h5>
                  <div className="tmclcs">
                    <img src="/images/wallclock.png" className="tmicn" />
                    <p>{get_courses.duration} Years</p>
                  </div>
                  <div className="tmclcs crsinfs">
                    <img src="/images/scholors.png" className="tmicn" />
                    <p>{get_courses.short_desc.substring(0, 50)}</p>
                  </div>
                  {/* <div className="tmclcs">
                    <img src="/images/rupicon.png" className="tmicn" />
                    <p>45,000</p>
                  </div> */}
                </div>
              </div>

              </Link>

                  ))}

                      </OwlCarousel>


          </div>
        </div>
        <div className="tab-pane fade" id="batchelorsprg" role="tabpanel" aria-labelledby="batchelorsprg-tab">
          <div className="coursespanels">
          <OwlCarousel
                    className="featuredslide owl-theme owl-carousel"
                    loop
                    responsive={state.responsive_featuredslide}
                    nav
                   
                  >

{bachelorsCourses &&
                  bachelorsCourses.map((get_courses, key) => (

<Link href={`programs/${get_courses.slug}`}>

<div className="item">
                <div className="crsimgs">
                  
                <a href="#">
                    <img
                            src={
                              `${process.env.NEXT_PUBLIC_B_API}thumbnail/` +
                              get_courses.thumbnail
                            }
                            className="fllimg"
                          />
                    </a>

                  <a href="#" className="crcategs">                          {get_courses.course_type == 1 ? 'Master' : 'Bachelor'}  
</a>
                  
                </div>
                <div className="panelcards">
                  <h5 className="csnms crlnts">{get_courses.name}</h5>
                  <div className="tmclcs">
                    <img src="/images/wallclock.png" className="tmicn" />
                    <p>{get_courses.duration} Years</p>
                  </div>
                  <div className="tmclcs crsinfs">
                    <img src="/images/scholors.png" className="tmicn" />
                    <p>{get_courses.short_desc.substring(0, 50)}</p>
                  </div>
                  {/* <div className="tmclcs">
                    <img src="/images/rupicon.png" className="tmicn" />
                    <p>45,000</p>
                  </div> */}
                </div>
              </div>

              </Link>

                  ))}

                      </OwlCarousel>
          </div>
        </div>
      </div>

      )}


    </div>
  </section>
  <section className="whtsects trustbycoms">
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds"><div className="ogcl">O</div>ur Recruiters</h2>
      </div>
      {/* for desktop slider only */}
      <div className="cpmslide desktopsds">

      <OwlCarousel
                    className="trustcmpcarso owl-theme owl-carousel"
                    loop
                    responsive={state.responsive_trust_comp}
                    nav
                   
                  >
<div className="item">
<div className="lgocirc">
                  <img src="/images/client/1.png" />
                </div>
</div>

<div className="item">
<div className="lgocirc">
                  <img src="/images/client/2.png" />
                </div>

          </div>


          <div className="item">
<div className="lgocirc">
                  <img src="/images/client/3.png" />
                </div>

          </div>

          <div className="item">
<div className="lgocirc">
                  <img src="/images/client/4.png" />
                </div>

          </div>

          <div className="item">
<div className="lgocirc">
                  <img src="/images/client/5.png" />
                </div>

          </div>

          <div className="item">
<div className="lgocirc">
                  <img src="/images/client/6.png" />
                </div>

          </div>

          <div className="item">
<div className="lgocirc">
                  <img src="/images/client/7.png" />
                </div>

          </div>

          <div className="item">
<div className="lgocirc">
                  <img src="/images/client/8.png" />
                </div>

          </div>

          <div className="item">
<div className="lgocirc">
                  <img src="/images/client/9.png" />
                </div>

          </div>

          <div className="item">
<div className="lgocirc">
                  <img src="/images/client/10.png" />
                </div>

          </div>

          <div className="item">
<div className="lgocirc">
                  <img src="/images/client/11.png" />
                </div>

          </div>

          <div className="item">
<div className="lgocirc">
                  <img src="/images/client/12.png" />
                </div>

          </div>

         

     </OwlCarousel>
       
      </div>


      <div className="cpmslide mobilesds">
      <OwlCarousel
                    className="owl-theme owl-carousel"
                    autoplaySpeed={6000}
                    animateOut={'slideOutUp'} 
                    animateIn={'slideInUp'}
                    responsive={state.responsive_trust_comp}
                                      
                  >

          <div className="item">
            <div className="row">
              <div className="col-6 col-md-2">
                <div className="lgocirc">
                  <img src="/images/client/1.png" />
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="lgocirc">
                  <img src="/images/client/2.png" />
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="lgocirc">
                  <img src="/images/client/3.png" />
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="lgocirc">
                  <img src="/images/client/4.png" />
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="lgocirc">
                  <img src="/images/client/5.png" />
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="lgocirc">
                  <img src="/images/client/6.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-6 col-md-2">
                <div className="lgocirc">
                  <img src="/images/client/7.png" />
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="lgocirc">
                  <img src="/images/client/8.png" />
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="lgocirc">
                  <img src="/images/client/9.png" />
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="lgocirc">
                  <img src="/images/client/10.png" />
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="lgocirc">
                  <img src="/images/client/11.png" />
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="lgocirc">
                  <img src="/images/client/12.png" />
                </div>
              </div>
            </div>
          </div>
         </OwlCarousel>
      </div>
    </div>
  </section>
  <section className="testimoniapn">
    <img src="/images/topbllefts.png" className="topblfts" />
    <img src="/images/abbots.png" className="borblfts" />
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">In <div className="ogcl">N</div>ews</h2>
      </div>
      <div className="testimparts">


      <OwlCarousel
                    className="reviewtestim owl-theme owl-carousel "
                    loop
                    // margin={15}
                    nav
                    responsive={state.responsive_reviewtestim}
                    
                    >

<div className="item">
            <div className="testipnlpts">
            <a href="https://www.indiatoday.in/pr-newswire?rkey=20220525EN68796&filter=4315" target="_blank">
              <p className="usrnmtst">Hindustan Online - CODE</p>
              <p>introduces new specializations for the Academic year (2022-2023)</p>
              <img src="/images/innews/1.jpg" />
           </a>
            </div>
          </div>
          <div className="item">
            <div className="testipnlpts">
            <a href="https://www.aninews.in/news/business/hindustan-online-code-to-host-a-webinar-on-career-opportunities-in-aviation-management20220525142658/" target="_blank">
              <p className="usrnmtst">Hindustan Online - CODE</p>
              <p>to host a webinar on career opportunities in Aviation Management</p>
              
                 <img src="/images/innews/2.jpg" />
            </a>
            </div>
          </div>
          <div className="item">
            <div className="testipnlpts">
            <a href="https://timesofindia.indiatimes.com/hindustan-code-bets-big-on-nations-digital-education-mandate-prepares-to-welcome-its-students-for-the-academic-year-2022-23/articleshow/89496899.cms" target="_blank">
              <p className="usrnmtst">Hindustan Online - CODE</p>
              <p>bets big on nation's 'Digital Education' mandate; prepares to welcome its students for the academic year 2022-23 </p>
             <img src="/images/innews/3.jpg" />
             </a>
            </div>
          </div>
          
          
                        </OwlCarousel>

        {/* <div className="text-center pt-4">
        <Link href="media">
          <a  className="orangectathms">View All</a>
          </Link>
        </div>  */}
      </div>
    </div>
  </section>
   {/* <section className="whtsects jnadvts galhnds taglineabs">
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">Gallery</h2>
      </div>

      
      <OwlCarousel
                    className="advantfeat owl-theme owl-carousel text-center pt-5"
                    loop
                    // margin={15}
                    nav
                    responsive={state.responsive_advantfeat}
                    >

<div className="item">
          <img src="/images/galleryhn/1.jpg" />
          <p>Lorem Ipsum is simply dummy text of the printing and </p>
        </div>
        <div className="item">
          <img src="/images/galleryhn/2.jpg" />
          <p>Lorem Ipsum is simply dummy text of the printing and </p>
        </div>
        <div className="item">
          <img src="/images/galleryhn/3.jpg" />
          <p>Lorem Ipsum is simply dummy text of the printing and </p>
        </div>
        <div className="item">
          <img src="/images/galleryhn/1.jpg" />
          <p>Lorem Ipsum is simply dummy text of the printing and </p>
        </div>
        <div className="item">
          <img src="/images/galleryhn/2.jpg" />
          <p>Lorem Ipsum is simply dummy text of the printing and </p>
        </div>
        <div className="item">
          <img src="/images/galleryhn/3.jpg" />
          <p>Lorem Ipsum is simply dummy text of the printing and </p>
        </div>
        
        </OwlCarousel>
                    
      
    </div>
  </section> */}
  <section className="faqnewtys">
    <img src="/images/topbllefts.png" className="topblfts" />
    <img src="/images/abbots.png" className="borblfts" />
    <div className="container">
      <div className="text-center hdingst  align-self-center">
        <h2 className="mainhds"> 
          FAQ<div className="ogcl">s</div>
        </h2>
      </div>
      <div id="accordion8">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Is Hindustan Online - CODE Post Graduate Degree valid?
                <i className="fal fa-plus" />
                <i className="fal fa-minus" />
              </button>
            </h5>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion8">
            <div className="card-body">
              <p>Yes, a Post Graduate Degree from HITS is valid and accepted by all major corporates in India as well as in foreign countries. HITS is a globally entitled institution by UGC and AICTE. HITS is accredited by NAAC, NBA, NIRF, etc.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Are the programs offered by Hindustan Online - CODE Entitled by UGC?
                <i className="fal fa-plus" />
                <i className="fal fa-minus" />
              </button>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion8">
            <div className="card-body">
              <p>Yes, the programs are entitled by AICTE/UGC.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                What programs does Hindustan Online - CODE offer?
                <i className="fal fa-plus" />
                <i className="fal fa-minus" />
              </button>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion8">
            <div className="card-body">
              <p>Hindustan Online - CODE offers an array of under-graduate and post- graduate programs. These include-</p>
              <ul>
              
                <li>BBA</li>
                <li>BCA</li>
                <li>B. Com</li>
                <li>MBA</li>
                <li>MCA</li>
                <li>MA</li>
              </ul>
            
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
              What are the eligibility criteria for admission?
                <i className="fal fa-plus" />
                <i className="fal fa-minus" />
              </button>
            </h5>
          </div>
          <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion8">
            <div className="card-body">
              <p><b>Master of Business Administration (MBA)</b><br />
              Graduates / Bachelor's Degree holders of any discipline from a recognized University who have scored a minimum of 50% aggregate are eligible to apply.</p>
              <p><b>Master of Computer Applications (MCA)</b><br />
              Under graduate degree with science or applied science in Computer Applications or Computer Science or Information Technology or other computer related areas with minimum 50% of marks. The candidates should have studied core Mathematics either at +2 level or Mathematics/statistics as one of the subjects at degree level.</p>
              <p><b>B.Com. (Bachelor of Commerce)</b><br />
              Three year program CommerceFintech. Banking and Finance Candidates who have passed Class 12th/PUC/HSC from any stream are eligible for Admission to B.Com. Program.</p>
              <p><b>BBA(Bachelor of Business Administration)</b><br />
              Three year program Travel and Tourism Aviation Logistics Candidates who have passed Class 12th/PUC/HSC from any stream are eligible for Admission to BBA Program.</p>
              <p><b>BCA(Bachelor of Computer Applications)</b><br />
              Three year program Data Base Systems Multimedia and Animation Data Analytics Candidate from any stream (Science, Commerce or Arts) securing 50% or more at 10+2 level without any approximation is eligible to take Admission to BCA program.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFive">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              What are the fee payment methods available? 
                <i className="fal fa-plus" />
                <i className="fal fa-minus" />
              </button>
            </h5>
          </div>
          <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion8">
            <div className="card-body">
              <p>There are two fee payment methods available-</p>
<ol> <li>Students can pay the program fee online </li>
<li>Candidates seeking admission at the HITS office in person can remit their fees directly through challan at Indian Overseas Bank, HITS Branch
Students can opt for any one of the above mentioned methods available</li> </ol>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingSix">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              How will I be notified about the admission confirmation?
                <i className="fal fa-plus" />
                <i className="fal fa-minus" />
              </button>
            </h5>
          </div>
          <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion8">
            <div className="card-body">
              <p>Our admission office will contact you about your admission status via your registered email or phone number.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingSeven">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              What learning methodology does Hindustan Online - CODE use?
                <i className="fal fa-plus" />
                <i className="fal fa-minus" />
              </button>
            </h5>
          </div>
          <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion8">
            <div className="card-body">
              <p>Hindustan Online - CODE use a blended approach to student learning with a combination of recorded lectures, online study materials, and faculty & group interactions.</p>
            </div>
          </div>
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

        </>
    );
};

export default Index;