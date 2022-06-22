import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import AOS from 'aos'
import { useRouter } from 'next/router'
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
import ReactHtmlParser from 'react-html-parser';

const CourseDetails = () => {

    const [courseDetails, setCourseDetails] = useState([])
    const [errorCode , setErrorCode] = useState(0);

    const router = useRouter()
  
    useEffect(() => {
    AOS.init({
      duration: 2000,
    })

    if (router.isReady) {
      const _id = router.query._id
      getCourseDetails(_id)
      console.log(router.query);
    }


  },[router.isReady])

  const getCourseDetails = async (_id) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/get-course-details`,
        {
          slug: _id,
        },
        config,
      )

      const getCoursesDetails = data.get_course_details
      

      if(getCoursesDetails == null){
        router.push('/404')
      }

      console.log(getCoursesDetails);

    //   const keyHlits = getCoursesDetails.key_highlights.split(',')

    //   setKeyHighlightss(keyHlits)

      setCourseDetails(getCoursesDetails)
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
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 2,
        nav: true,
        dots: false,
        autoplay: true,
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
        autoplay: true,
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
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        autoplay: true,
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
        autoplay: true,
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
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
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
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        dots: true,
      },
    },

    
    responsive_hrngcomps: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 3,
        nav: false,
        dots: true,
        autoplay: true,
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
        items: 6,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: false,
      },
    },
  }

  return (
    <>
      <Nav />

      {courseDetails && courseDetails.name && (
          <>

      <section className="vdobanners">
        <img src="/images/coursevdothumbs.jpg" className="fllimg" />
        <img src="/images/playicon.png" className="plicon" />
      </section>
      <section className="coursenmeinfos onestopcourse text-center">
        <div className="container">
          <img src="/images/abbots.png" className="regsbotms" />
          <img src="/images/abbots.png" className="topmstomabuis" />
          <div className="coursetextmoreinf">
            <h3 className="crsnames">{courseDetails.name}</h3>
            {/* <h4 className="crsubtitle">Aviation Management </h4> */}
            <p>{courseDetails.short_desc}</p>
          </div>
          <div className="coursedescps">
            <div className="iniinfos">
              <div className="row">
                <div className="col-6 col-lg-6 col-md-6">
                  <div className="cicon">
                    <img src="/images/timeic.png" />
                  </div>
                  <p>Duration</p>
                  <p className="ogtxts">{courseDetails.duration} Years</p>
                </div>
                <div className="col-6 col-lg-6 col-md-6">
                  <div className="cicon">
                    <img src="/images/calenicon.png" />
                  </div>
                  <p>Start Date</p>
                  <p className="ogtxts">{courseDetails.start_date}</p>
                </div>
              </div>
            </div>
            <div className="crctsinf">
              <div className="row">
                <div className="col-6 col-lg-6 col-md-6">
                  <a href="javascript:void(0);"  data-toggle="modal" data-target="#exampleModalCenter" className="orangectathms nobrd">
                    Apply Now
                  </a>
                </div>
                <div className="col-6 col-lg-6 col-md-6">
                  <a href="javascript:void(0);"  data-toggle="modal" data-target="#exampleModalCenter2" className="blackctathms nobrd">
                    <img src="/images/downldico.png" />
                    Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      
      <div className="modal-body">
						  
						  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">×</span>
							</button>
							
							<div className="basicenqforms">
								<div className="row">
									<div className="col-lg-12 mx-auto">
										<h3>Download Brochure</h3>
										<div className="form-groupsets">
										<label>Name</label>
										<input type="text" className="form-control" placeholder=""/>
										</div>
										
										<div className="form-groupsets">
										<label>Email id</label>
										<input type="email" className="form-control" placeholder=""/>
										</div>
										
										
										<div className="form-groupsets">
										<label>Phone No.</label>
										<input type="text" className="form-control" placeholder=""/>
										</div>
										
										<div className="form-groupsets">
										<label>Query</label>
										<textarea type="text" class="form-control" placeholder=""></textarea>
										</div>

									
										
									</div>
									
									
									<div className="col-lg-12 text-center roundbotms">
										<button className="orangectadms">Submit</button>
									</div>
							
								</div>
							</div>
						
						  </div>
      
    </div>
  </div>
</div>

      </section>
      <section className="aboutsect innerprograms">
        <div className="container">
          <div
            className="col-md-12 col-lg-12 align-self-center text-center"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <h2 className="mainhds mb-lg-4 ">
              Ab<div className="ogcl">o</div>ut Program
            </h2>
            <p>
                 {ReactHtmlParser(courseDetails.about_program)}
            </p>
            <p className="moretext2">
              BBA program offers knowledge and training in management and
              leadership skills to prepare the learners for managerial roles and
              entrepreneurship. The program will equip the learners with a clear
              understanding of various aspects of business administration,
              market trends and managerial decision making. Some of the
              significant job profiles that one can opt for after completing a
              BBA are Human Resource Executive, Marketing Executive, Marketing
              Manager, Sales Executive, Operations Executive and Finance
              Associate.
            </p>
            <a href="javascript:void(0);" className="moreless-button2">
              Read more{' '}
            </a>
          </div>
        </div>
      </section>
      <div className="stckds">
        <div className="mnptsd nofx">
          <div className="container">
            <ul>
              <li className="active">
                <a href="#specialization">About Specialization</a>
              </li>
              {/* <li><a href="#highlights">Highlights</a></li> */}
              <li>
                <a href="#eligiblity">Eligiblity</a>
              </li>
              <li>
                <a href="#syllabus">Syllabus</a>
              </li>
              <li>
                <a href="#feeplan">Fee Plan</a>
              </li>
              <li>
                <a href="#learnmethodology">Learning Methodology</a>
              </li>
              <li>
                <a href="#applynow">Enroll Now</a>
              </li>
            </ul>
          </div>
        </div>
        <section className="sefixpointrs">
          <div className="bgrays" id="specialization">
            <img src="/images/topbllefts.png" className="spcltopblfts" />
            <div className="container">
              <div className="text-center hdingst  mt-5 mb-lg-4">
                <h2 className="mainhds">
                  Ab<div className="ogcl">o</div>ut Specialization
                </h2>
              </div>
              <div
                className="mx-auto  col-md-12 col-lg-11 align-self-center text-center"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <p>
                    {ReactHtmlParser(courseDetails.about_specialization)}
                </p>
                <p className="moretext">
                  {' '}
                  Our program uses a unique blend of industry-relevant content
                  on par with IATA standards resulting in an increased
                  employability of our learners. This specialization offers a
                  Choice Based Credit System, where the student has more
                  expansive choices of electives to choose from based on their
                  interests. The program provides the right blend of practical
                  and theoretical knowledge with a strong emphasis on customer
                  sensitivity, skills, and the holistic development of a
                  learner.
                </p>
                <a href="javascript:void(0);" className="moreless-button">
                  Read more{' '}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="whtsects trustbycoms higlgtsdd" id="highlights">
          <div className="container">
            <div className="text-center hdingst">
              <h2 className="mainhds">
                Specializati<div className="ogcl">o</div>n Highlights
              </h2>
            </div>
          </div>
          {/* for desktop slider only */}
          <div className="cpmslide desktopsds  pntrsbased">
            {/*<img src="/images/longdots.png" class="lngdts">*/}
            <div className="container">
              <div className="row lengtheds">
                <div className="col-md-6">
                  <div className="lgocirc"></div>
                  <p>
                    Be thoroughly equipped with the breadth of aircraft,
                    airline, and airport operations courses
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="lgocirc"></div>
                  <p>
                    Learn new age courses like Aviation Safety &amp; Security,
                    Aviation Supply Chain, and Travel &amp; Tourism Management
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="lgocirc"></div>
                  <p>
                    Gain business mastery with a unique blend of aviation and
                    management courses
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="lgocirc"></div>
                  <p>
                    Obtain in-depth knowledge of business and business processes
                    of the aviation industry
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="lgocirc"></div>
                  <p>
                    Be proficient in professional skills required to tackle
                    challenges in aviation with the help of an industry-aligned
                    curriculum.
                  </p>
                </div>
              </div>
              <a href="javascript:void(0);" className="rdspecials">
                Read more{' '}
              </a>
            </div>
          </div>
        </section>
        <section className="egsyllabys" id="eligiblity">
          <div className="container">
            <img className="elemidrghts" src="/images/elegdotsnew.png" />
            <img className="whtsmidrghts" src="/images/elegdotsnewbts.png" />
            <div className="row">
              <div className="col-lg-6  whtsbga text-center">
                <div className=" hdingst text-center">
                  <h2 className="mainhds">Eligiblity</h2>
                </div>
                <img src="/images/checklistind.png" className="chdatalsts" />
                <p>
                    {courseDetails.eligibility}
                </p>
              </div>
              <div className="col-lg-6 grelgbg " id="syllabus">
                <div className="hdingst text-center text-lg-left">
                  <h2 className="mainhds">Syllabus</h2>
                </div>
                <div className="semsylabsdsns">
                  <div id="accordion10">
                    <div className="card">
                      <div className="card-header" id="headingOneSb">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link"
                            data-toggle="collapse"
                            data-target="#collapseOneSb"
                            aria-expanded="true"
                            aria-controls="collapseOneSb"
                          >
                            Semester 1
                            <i className="fal fa-plus" />
                            <i className="fal fa-minus" />
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseOneSb"
                        className="collapse show"
                        aria-labelledby="headingOneSb"
                        data-parent="#accordion10"
                      >
                        <div className="card-body">
                          <ul>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwoSb">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwoSb"
                            aria-expanded="false"
                            aria-controls="collapseTwoSb"
                          >
                            Semester 2
                            <i className="fal fa-plus" />
                            <i className="fal fa-minus" />
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseTwoSb"
                        className="collapse"
                        aria-labelledby="headingTwoSb"
                        data-parent="#accordion10"
                      >
                        <div className="card-body">
                          <ul>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThreeSb">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThreeSb"
                            aria-expanded="false"
                            aria-controls="collapseThreeSb"
                          >
                            Semester 3
                            <i className="fal fa-plus" />
                            <i className="fal fa-minus" />
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseThreeSb"
                        className="collapse"
                        aria-labelledby="headingThreeSb"
                        data-parent="#accordion10"
                      >
                        <div className="card-body">
                          <ul>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFourSb">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFourSb"
                            aria-expanded="false"
                            aria-controls="collapseFourSb"
                          >
                            Semester 4
                            <i className="fal fa-plus" />
                            <i className="fal fa-minus" />
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseFourSb"
                        className="collapse"
                        aria-labelledby="headingFourSb"
                        data-parent="#accordion10"
                      >
                        <div className="card-body">
                          <ul>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFiveSb">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFiveSb"
                            aria-expanded="false"
                            aria-controls="collapseFiveSb"
                          >
                            Semester 5
                            <i className="fal fa-plus" />
                            <i className="fal fa-minus" />
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseFiveSb"
                        className="collapse"
                        aria-labelledby="headingFiveSb"
                        data-parent="#accordion10"
                      >
                        <div className="card-body">
                          <ul>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                            <li>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feeplansne" id="feeplan">
          <div className="container">
            <img src="/images/abbots.png" className="topmstomabuis" />
            <div className="hdingst text-center text-lg-leftt">
              <h2 className="mainhds">Fee Plan</h2>
            </div>
            <div className="planstabsdesn">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="trending-tab"
                    data-toggle="tab"
                    href="#trending"
                    role="tab"
                    aria-controls="trending"
                    aria-selected="true"
                  >
                    National
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="allprofile-tab"
                    data-toggle="tab"
                    href="#allprofile"
                    role="tab"
                    aria-controls="allprofile"
                    aria-selected="false"
                  >
                    International
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="trending"
                  role="tabpanel"
                  aria-labelledby="trending-tab"
                >
                  <div className="planscards">
                    <div className="row">
                      <div className="col-6 col-lg-6">
                        <div className=" crds">
                          <p className="tmevse">Semester - wise</p>
                          <h3 className="feecst">17,500</h3>
                          <p className="ttsms">x 6 Semester</p>
                          <p className="sbintr">Total Fees</p>
                          <p className="ttlcrs">1,05, 000</p>
                        </div>
                      </div>
                      <div className="col-6  col-lg-6">
                        <div className=" crds">
                          <p className="tmevse">Year - wise</p>
                          <h3 className="feecst">35,000</h3>
                          <p className="ttsms">x 3 Years</p>
                          <p className="sbintr">Total Fees</p>
                          <p className="ttlcrs">1,05, 000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="allprofile"
                  role="tabpanel"
                  aria-labelledby="allprofile-tab"
                >
                  <div className="planscards">
                    <div className="row">
                      <div className="col-6  col-lg-6">
                        <div className=" crds">
                          <p className="tmevse">Semester - wise</p>
                          <h3 className="feecst">750$</h3>
                          <p className="ttsms">x 6 Semester</p>
                          <p className="sbintr">Total Fees</p>
                          <p className="ttlcrs">4,500$</p>
                        </div>
                      </div>
                      <div className="col-6  col-lg-6">
                        <div className=" crds">
                          <p className="tmevse">Year - wise</p>
                          <h3 className="feecst">1500$</h3>
                          <p className="ttsms">x 3 Years</p>
                          <p className="sbintr">Total Fees</p>
                          <p className="ttlcrs">4,500$</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hiringcompns">
          <div className="container">
            {/* <img src="/images/topabdots.png" class="topmstomabuis">
	<img src="/images/blacklondts.png" class="bottomabuis"> */}
            <div className="text-center hdingst">
              <h2 className="mainhds">
                Hiring C<div className="ogcl">o</div>mpanies
              </h2>
            </div>
          </div>
          <div className="hirecomparts ">
            <div className="container">
            <OwlCarousel
                    className="hrngcomps owl-theme owl-carousel"
                    loop
                    responsive={state.responsive_hrngcomps}
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
              
              </OwlCarousel>
            </div>
          </div>
        </section>
        <section className="learningmeths" id="learnmethodology">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hdingst text-center">
                  <h2 className="mainhds">
                    Learning Meth<div className="ogcl">o</div>dology
                  </h2>
                </div>
                <div className="deskverticals">
                  <div
                    id="owl_about_main_slider"
                    className="owl-carousel owl-theme row"
                  >
                    <div className="row">
                      <div className="col-6 col-lg-3">
                        <img src="/images/lm/LM1.png" />
                        <p>
                          Each program involves approximately 120 hours of
                          learning
                        </p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <img src="/images/lm/LM2.png" />
                        <p>Two-way live online audio-video sessions</p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <img src="/images/lm/LM3.png" />
                        <p>
                          Pre-recorded audio-video sessions available on the
                          Learning Management System (LMS)
                        </p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <img src="/images/lm/LM4.png" />
                        <p>Multimedia content</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 col-lg-3">
                        <img src="/images/lm/LM5.png" />
                        <p>
                          Interactions through the discussion forum on the LMS
                        </p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <img src="/images/lm/LM6.png" />
                        <p>
                          Exhaustive e-content/ printed material for in-depth
                          reference
                        </p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <img src="/images/lm/LM7.png" />
                        <p>
                          Self-study activities including assignments, quiz
                          &amp; MCQs, essay-type questions, case study, etc.
                        </p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <img src="/images/lm/LM8.png" />
                        <p>
                          Experiential learning methods including individual and
                          group projects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="col-lg-6 whyrssd">
				<div class="bdlines">
					<div class="hdingst">
						<h2 class="mainhds"> 
							<div class="ogcl">WHY</div>?
						</h2>
					</div>
					
					<p>Lorem Ipsum is simply dummy text of the printing and 
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an
					unknown printer took a galley of type and scrambled it to 
					make a type specimen book. It has survived not only five 
					centuries, but alsothe leap into electronic typesetting, 
					remaining essentially unchanged. It was popularised in 
					the 1960s with the release of Letraset sheets containing 
					Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions
					of Lorem Ipsum.</p>
				</div>
				
				<div class="rinwhrs">
					<div class="row">
						<div class="col-6 col-lg-6">
							<div class="lgocirc">
								
							</div>
							<p>Neque porro quisquam est
								qui dolorem ipsum</p>
						</div>
						<div class="col-6 col-lg-6">
							<div class="lgocirc">
								
							</div>
							<p>Neque porro quisquam est
								qui dolorem ipsum</p>
						</div>
					</div>
				</div>
				
			</div> */}
            </div>
          </div>
        </section>
      </div>
      <section className="faqnewtys">
        <img src="/images/topbllefts.png" className="topblfts shfrgs" />
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
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Is Hindustan Online - CODE Post Graduate Degree valid?
                    <i className="fal fa-plus" />
                    <i className="fal fa-minus" />
                  </button>
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  <p>
                    Yes, a Post Graduate Degree from HITS is valid and accepted
                    by all major corporates in India as well as in foreign
                    countries. HITS is a globally entitled institution by UGC
                    and AICTE. HITS is accredited by NAAC, NBA, NIRF, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Are the programs offered by Hindustan Online - CODE Entitled
                    by UGC?
                    <i className="fal fa-plus" />
                    <i className="fal fa-minus" />
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  <p>Yes, the programs are entitled by AICTE/UGC.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What are the courses offered by Hindustan Online - CODE?
                    <i className="fal fa-plus" />
                    <i className="fal fa-minus" />
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  <p>
                    Hindustan Online - CODE offers PG &amp; UG Degree programs.
                    The name of the programs are as follows:
                  </p>
                  <ul>
                    <li>MBA</li>
                    <li>MCA</li>
                    <li>BBA</li>
                    <li>B Com</li>
                    <li>BCA</li>
                  </ul>
                  <p>
                    The student can choose any of the programs depending on
                    one's flair, aptitude and eligibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What are the eligibility criteria for admission?
                    <i className="fal fa-plus" />
                    <i className="fal fa-minus" />
                  </button>
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  <p>
                    <b>Master of Business Administration (MBA)</b>
                    <br />
                    Graduates / Bachelor's Degree holders of any discipline from
                    a recognized University who have scored a minimum of 50%
                    aggregate are eligible to apply.
                  </p>
                  <p>
                    <b>Master of Computer Applications (MCA)</b>
                    <br />
                    Under graduate degree with science or applied science in
                    Computer Applications or Computer Science or Information
                    Technology or other computer related areas with minimum 50%
                    of marks. The candidates should have studied core
                    Mathematics either at +2 level or Mathematics/statistics as
                    one of the subjects at degree level.
                  </p>
                  <p>
                    <b>B.Com. (Bachelor of Commerce)</b>
                    <br />
                    Three year program CommerceFintech. Banking and Finance
                    Candidates who have passed Class 12th/PUC/HSC from any
                    stream are eligible for Admission to B.Com. Program.
                  </p>
                  <p>
                    <b>BBA(Bachelor of Business Administration)</b>
                    <br />
                    Three year program Travel and Tourism Aviation Logistics
                    Candidates who have passed Class 12th/PUC/HSC from any
                    stream are eligible for Admission to BBA Program.
                  </p>
                  <p>
                    <b>BCA(Bachelor of Computer Applications)</b>
                    <br />
                    Three year program Data Base Systems Multimedia and
                    Animation Data Analytics Candidate from any stream (Science,
                    Commerce or Arts) securing 50% or more at 10+2 level without
                    any approximation is eligible to take Admission to BCA
                    program.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFive">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    How should I pay the fees at the time of admission?
                    <i className="fal fa-plus" />
                    <i className="fal fa-minus" />
                  </button>
                </h5>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  <p>
                    A Candidate can pay the program fee online. Candidates
                    seeking admission at the HITS office in person can remit
                    their fees directly through challan at Indian Overseas Bank,
                    HITS Branch.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSix">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How will I be notified about the admission confirmation?
                    <i className="fal fa-plus" />
                    <i className="fal fa-minus" />
                  </button>
                </h5>
              </div>
              <div
                id="collapseSix"
                className="collapse"
                aria-labelledby="headingSix"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  <p>
                    Our admission office will contact you about your admission
                    status via your registered email or phone number.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSeven">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    What learning methodology does Hindustan Online - CODE use?
                    <i className="fal fa-plus" />
                    <i className="fal fa-minus" />
                  </button>
                </h5>
              </div>
              <div
                id="collapseSeven"
                className="collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  <p>
                    Hindustan Online - CODE use a blended approach to student
                    learning with a combination of recorded lectures, online
                    study materials, and faculty &amp; group interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<section class="applyareaforms" id="applynow">
	<div class="container">
		<div class="text-center hdingst  align-self-center">
			<h2 class="mainhds"> 
				Apply N<div class="ogcl">o</div>w!
			</h2>
			<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,<br>
consectetur, adipisci velit...</p>
		</div>
		
		
		<form>
						  <div class="customfrms lssmg">
							<div class="row">
							
							<div class="form-group col-lg-6">
							  <input type="textr" class="form-control" placeholder="First Name">
							</div>
							
							<div class="form-group col-lg-6">
							  <input type="email" class="form-control" placeholder="Email Id">
							</div>
							
							
							<div class="form-group col-lg-6">
							  <input type="text" class="form-control" placeholder="Phone Number">
							</div>
							
							<div class="form-group col-lg-6 selectdrs">
							  <select class="form-control">
								<option>Select State</option>
							  </select>
							</div>
							
							<div class="form-group col-lg-6 selectdrs">
							  <select class="form-control">
								<option>Select City</option>
							  </select>
							</div>
							
							<div class="form-group col-lg-6 selectdrs">
							  <select class="form-control">
								<option>Select elective</option>
							  </select>
							</div>
							
							<div class="form-group col-lg-6 mx-auto selectdrs">
							  <select class="form-control">
								<option>Select Program</option>
							  </select>
							</div>
							
							<div class="form-group col-lg-12 text-center">
							  <button>Apply</button>
							</div>
							</div>
							
						  </div>
					</form>
					
					
	</div>
</section>*/}
      <div className="sideaassets">
        <a href="tel:+91 9945580408" className="graytelsnaps">
          {' '}
          <i className="fas fa-phone-alt" /> +91 9945580408{' '}
        </a>
        <div className="ctatcs">
          <ul>
            <li>
              <a href="#">
                <img src="/images/telnumb.png" />
              </a>
              <span className="hntps">
                <i className="fas fa-phone-alt" /> +919945580408{' '}
              </span>
            </li>
            <li>
              <a href="#">
                <img src="/images/whatsappcta.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section className="mobileiconpanel">
        <ul>
          <li>
            <a href="#">
              <img src="/images/applyico.png" />
              <span>
                Apply Now
                <span />
              </span>
            </a>
          </li>
          <li style={{ width: 300 }}>
            <a href="tel:+919945580408">
              <img src="/images/callicos.png" />
              <span>
                Call us
                <span />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/whatsappicos.png" />
              <span>
                Whatsapp Us
                <span />
              </span>
            </a>
          </li>
          <li style={{ border: 'none' }}>
            <a href="#">
              <img src="/images/downldico.png" />
              <span>
                Brochure
                <span />
              </span>
            </a>
          </li>
        </ul>
      </section>
      <footer className="stfooter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <iframe
                className="ftaddrs"
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d9772.811866649241!2d77.15170263339316!3d28.525641134925795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d28.531875699999997!2d77.1553133!4m5!1s0x390d1e7892180119%3A0x4e0f72dc6aef31a7!2sHindustan%20University%2C%20Commercial%20Space%20No.%20S-5%2C%20Vasant%20Square%20Mall%2C%20Vasant%20Kunj%2C%20New%20Delhi%2C%20Delhi%20110070!3m2!1d28.5246544!2d77.1563467!5e0!3m2!1sen!2sin!4v1652362293526!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col-lg-4 col-md-6 align-self-center">
              <div className="ftad">
                <p>
                  40, G.S.T Road, St. Thomas Mount, Chennai - 600 016, India.
                </p>
                <a href="tel:+91-9606333232"> +91-44-2234 1389</a>
                <a href="mailto:enquiry@jainxacademy.com">
                  info@hindustanuniv.ac.in
                </a>
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
                  <h4
                    data-toggle="collapse"
                    data-target="#collapseOneft"
                    aria-expanded="true"
                    aria-controls="collapseOneft"
                    className="mobclick"
                  >
                    ABOUT US
                    <i className="fal fa-plus" /> <i className="fal fa-minus" />
                  </h4>
                  <h4>ABOUT US</h4>
                  <div
                    id="collapseOneft"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample2"
                  >
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Blogs</a>
                      </li>
                      <li>
                        <a href="#">Vision &amp; Mission Of CODE</a>
                      </li>
                      <li>
                        <a href="#">Uniqueness Of CODE</a>
                      </li>
                      <li>
                        <a href="#">CODE Coursera Advantage</a>
                      </li>
                      <li>
                        <a href="#">CODE Brochure</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Vision &amp; Mission</a>
                      </li>
                      <li>
                        <a href="#">Awards</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <h4
                    data-toggle="collapse"
                    data-target="#collapseTwoft"
                    aria-expanded="false"
                    aria-controls="collapseTwoft"
                    className="mobclick collapsed"
                  >
                    PROGRAMS
                    <i className="fal fa-plus" /> <i className="fal fa-minus" />
                  </h4>
                  <h4>PROGRAMS</h4>
                  <div
                    id="collapseTwoft"
                    className="collapse"
                    aria-labelledby="headingTwoft"
                    data-parent="#accordionExample2"
                  >
                    <ul>
                      <li>
                        <a href="#">MBA</a>
                      </li>
                      <li>
                        <a href="#">MCA</a>
                      </li>
                      <li>
                        <a href="#">MA</a>
                      </li>
                      <li>
                        <a href="#">
                          <b>UG PROGRAMS</b>{' '}
                        </a>
                      </li>
                      <li>
                        <a href="#">BBA</a>
                      </li>
                      <li>
                        <a href="#">BCA</a>
                      </li>
                      <li>
                        <a href="#">B.COM</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <h4
                    data-toggle="collapse"
                    data-target="#collapseThreeft"
                    aria-expanded="false"
                    aria-controls="collapseThreeft"
                    className="mobclick collapsed"
                  >
                    ACADEMICS
                    <i className="fal fa-plus" /> <i className="fal fa-minus" />
                  </h4>
                  <h4>ACADEMICS</h4>
                  <div
                    id="collapseThreeft"
                    className="collapse"
                    aria-labelledby="headingThreeft"
                    data-parent="#accordionExample2"
                  >
                    <ul>
                      <li>
                        <a href="#">Pedagogy</a>
                      </li>
                      <li>
                        <a href="#">Evaluation Methodology</a>
                      </li>
                      <li>
                        <a href="#">Credit System</a>
                      </li>
                      <li>
                        <a href="#">CIQA </a>
                      </li>
                      <li>
                        <a href="#">Digital Library</a>
                      </li>
                      <li>
                        <a href="#">
                          <b>LEADERSHIP MESSAGE</b>
                        </a>
                      </li>
                      <li>
                        <a href="#">Chancellor's Message</a>
                      </li>
                      <li>
                        <a href="#">Pro Chancellor</a>
                      </li>
                      <li>
                        <a href="#">Directors</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <h4
                    data-toggle="collapse"
                    data-target="#collapseFourft"
                    aria-expanded="false"
                    aria-controls="collapseFourft"
                    className="mobclick collapsed"
                  >
                    SERVICES
                    <i className="fal fa-plus" /> <i className="fal fa-minus" />
                  </h4>
                  <h4>SERVICES</h4>
                  <div
                    id="collapseFourft"
                    className="collapse"
                    aria-labelledby="headingFourft"
                    data-parent="#accordionExample2"
                  >
                    <ul>
                      <li>
                        <a href="#">Student Counselling</a>
                      </li>
                      <li>
                        <a href="#">Grievance Redressal</a>
                      </li>
                      <li>
                        <a href="#">Alumni Association</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Faculty</a>
                      </li>
                      <li>
                        <a href="#">Event Gallery</a>
                      </li>
                      <li>
                        <a href="#">Events At HITS</a>
                      </li>
                      <li>
                        <a href="#">Digitalk</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </>
)}

    </>
  )
}

export default CourseDetails
