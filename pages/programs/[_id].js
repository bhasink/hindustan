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
import Footer from '../../components/Footer'
import ReactHtmlParser from 'react-html-parser';
import { useToasts } from 'react-toast-notifications'
import FileSaver from 'file-saver'
import NumberFormat from 'react-number-format';

const CourseDetails = () => {

    const [courseDetails, setCourseDetails] = useState([])
    const [courseSemesters, setCourseSemesters] = useState([])
    const [courseFees, setCourseFees] = useState([])
    const [currentProject, setCurrentProject] = useState(null)

    
    const [isReadMore, setIsReadMore] = useState(true);


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [query, setQuery] = useState('')
    const [errorCode , setErrorCode] = useState(0);

    const router = useRouter()
    const { addToast } = useToasts()

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


  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src= "https://widgets.in5.nopaperforms.com/emwgts.js";
    scriptTag.async = true;
    document.body.appendChild(scriptTag);
}, []);
  


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
      const getCoursesSemesters = data.get_semesters
      const getCoursesFees = data.get_fees

      if(getCoursesDetails == null){
        router.push('/404')
      }

      console.log(getCoursesDetails);

    //   const keyHlits = getCoursesDetails.key_highlights.split(',')

    //   setKeyHighlightss(keyHlits)

      setCourseDetails(getCoursesDetails)
      setCourseSemesters(getCoursesSemesters)
      setCourseFees(getCoursesFees)
      setCurrentProject(getCoursesDetails.id)

    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (name == '') {
      addToast('Please enter the name!', { appearance: 'error' })

      return false
    }

    if (email == '') {
      addToast('Please enter the email!', { appearance: 'error' })
      return false
    }

    if (IsEmail(email) == false) {
      addToast('Incorrect email!', { appearance: 'error' })

      return false
    }

    if (mobileNo == '') {
      addToast('Please enter the mobile number!', { appearance: 'error' })
      return false
    }

    if (mobileNo.length != 10) {
      addToast('Mobile number must be of ten digits!', { appearance: 'error' })
      return false
    }

    if (query == '') {
      addToast('Please enter the query!', { appearance: 'error' })
      return false
    }

    $('body').removeClass('modal-open')
    $('.modal-backdrop').remove()
    $('#exampleModalEnquirenow').hide()

    try {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/course-leads`,
        {
          name: name,
          email: email,
          mobile_no: mobileNo,
          query: query,
          course_id: currentProject,
        },
      )

      if (data.status == 200) {
        addToast('Success!', { appearance: 'success' })
        router.push('/thanks')
      }

      //
    } catch (err) {
      console.log(err)
      addToast('Invalid! Please try again.', { appearance: 'error' })
    }
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault()

    if (name == '') {
      addToast('Please enter the name!', { appearance: 'error' })

      return false
    }

    if (email == '') {
      addToast('Please enter the email!', { appearance: 'error' })
      return false
    }

    if (IsEmail(email) == false) {
      addToast('Incorrect email!', { appearance: 'error' })

      return false
    }

    if (mobileNo == '') {
      addToast('Please enter the mobile number!', { appearance: 'error' })
      return false
    }

    if (mobileNo.length != 10) {
      addToast('Mobile number must be of ten digits!', { appearance: 'error' })
      return false
    }

    if (query == '') {
      addToast('Please enter the query!', { appearance: 'error' })
      return false
    }

    $('body').removeClass('modal-open')
    $('.modal-backdrop').remove()
    $('#exampleModalEnquirenow').hide()

    try {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/course-leads`,
        {
          name: name,
          email: email,
          mobile_no: mobileNo,
          query: query,
          course_id: currentProject,
        },
      )

      if (data.status == 200) {
        FileSaver.saveAs(
          process.env.NEXT_PUBLIC_B_API + '/brochure/ho-brochure.pdf',
          'ho-brochure.pdf',
        )

        addToast('Success!', { appearance: 'success' })
        router.push('/thanks')
      }

      //
    } catch (err) {
      console.log(err)
      addToast('Invalid! Please try again.', { appearance: 'error' })
    }
  }

  const IsEmail = (email) => {
    let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!regex.test(email)) {
      return false
    } else {
      return true
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

         {/* for  Desktop course */}

        <img
                            src={
                              `${process.env.NEXT_PUBLIC_B_API}banners/` +
                              courseDetails.banner
                            }
                            className="fllimg dekindicourse"
                          />

        {/* for mobile course */}

        <img
                            src={
                              `${process.env.NEXT_PUBLIC_B_API}banners_mob/` +
                              courseDetails.mob_banner
                            }
                            className="fllimg moblinndicourse"
                          />


        
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
                  <a href="https://apply.hindustancode.com/" target="_blank" className="orangectathms nobrd">
                    Apply Now
                  </a>
                </div>
                <div className="col-6 col-lg-6 col-md-6">
                
                  <a href="javascript:void(0);"  data-toggle="modal" data-target="#exampleModalCenter22ff" className="blackctathms nobrd">
                    <img src="/images/downldico.png" />
                    Brochure
                  </a>
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
              
            {/* {isReadMore && courseDetails.about_program.length > 450 ? ReactHtmlParser(courseDetails.about_program.slice(0, 450)) : ReactHtmlParser(courseDetails.about_program) } */}

                 
            </p>
           
            {/* <a href="javascript:void(0);" className="moreless-button2">
              Read more{' '}
            </a> */}
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
                <a href="#eligiblity">Eligibility</a>
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
                <a href="javascript:void(0);"  data-toggle="modal" data-target="#exampleModalCenter4">Enquire Now</a>
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
                {/* <p className="moretext">
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
                </a> */}
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
              <div className="row">
             
              {courseDetails && courseDetails.specialization_highlights.split('#').map((specialization_highlights_data, key) => (

                <div className="col-md-6">
                  <div className="lgocirc"></div>
                  <p>
                  {specialization_highlights_data}
                  </p>
                </div>
              ))}
             
              </div>
              {/* <a href="javascript:void(0);" className="rdspecials">
                Read more{' '}
              </a> */}
            </div>
          </div>
        </section>
        <section className="egsyllabys" id="eligiblity">
          <div className="container">
            <img className="elemidrghts" src="/images/elegdotsnew.png" />
            <img className="whtsmidrghts" src="/images/elegdotsnewbts.png" />
            <div className="row">
              <div className="col-lg-6 col-md-6  whtsbga text-center">
                <div className=" hdingst text-center">
                  <h2 className="mainhds">Eligibility</h2>
                </div>
                <img src="/images/checklistind.png" className="chdatalsts" />
                <p>
                    {ReactHtmlParser(courseDetails.eligibility)}
                </p>
              </div>
              <div className="col-lg-6 col-md-6 grelgbg " id="syllabus">
                <div className="hdingst text-center text-lg-left">
                  <h2 className="mainhds">Syllabus</h2>
                </div>
                <div className="semsylabsdsns">
                  <div id="accordion10">

                    {courseSemesters && courseSemesters.map((get_sems, key) => (
                  
                   
                    <div className="card">
                      <div className="card-header" id={`headingTwoSb${key+1}`}>
                        <h5 className="mb-0">
                          <button
                            className={key == 0 ? 'btn btn-link' : ' btn btn-link collapsed'}
                            data-toggle="collapse"
                            data-target={`#collapseTwoSb${key+1}`}
                            aria-expanded={key == 0 ? 'true' : 'false'}
                            aria-controls={`collapseTwoSb${key+1}`}
                          >
                            {get_sems.name}
                            <i className="fal fa-plus" />
                            <i className="fal fa-minus" />
                          </button>
                        </h5>
                      </div>
                      <div
                        id={`collapseTwoSb${key+1}`}
                        className={key == 0 ? 'collapse show' : 'collapse'}
                        aria-labelledby={`headingTwoSb${key+1}`}
                        data-parent="#accordion10"
                      >
                        <div className="card-body">
                          <ul>

                          {courseSemesters && get_sems.data.split('#').map((get_sems_data, key) => (
                            <li>
                              {get_sems_data}
                            </li>

                          ))}
                           
                          </ul>
                        </div>
                      </div>
                    </div>

                    ))}
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feeplansne" id="feeplan">
          <div className="container">
          <img src="/images/topabdots.png" className="dopgoffs"/>
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
                          <h3 className="feecst"> {<NumberFormat displayType="text" value={courseFees[0].national_semester_price} thousandSeparator={true} prefix={'₹'} />}</h3>
                          <p className="ttsms">x {courseFees[0].national_semester_month} Semester</p>
                          <p className="sbintr">Total Fees</p>
                          <p className="ttlcrs">
                            
                            {<NumberFormat displayType="text" value={courseFees[0].national_semester_price * courseFees[0].national_semester_month} thousandSeparator={true} prefix={'₹'} suffix={'/-'} />
                                                        }
                             </p>
                        </div>
                      </div>
                      <div className="col-6  col-lg-6">
                        <div className=" crds">
                          <p className="tmevse">Year - wise</p>
                          <h3 className="feecst">{<NumberFormat displayType="text" value={courseFees[0].national_yearly_price} thousandSeparator={true} prefix={'₹'} />}
                            </h3>
                          <p className="ttsms">x {courseFees[0].national_yearly_month} Years</p>
                          <p className="sbintr">Total Fees</p>
                          <p className="ttlcrs">
                          {<NumberFormat displayType="text" value={courseFees[0].national_yearly_price * courseFees[0].national_yearly_month} thousandSeparator={true} prefix={'₹'} suffix={'/-'} />
                                                        }                            </p>
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
                          <h3 className="feecst">{courseFees[0].international_semester_price}$</h3>
                          <p className="ttsms">x {courseFees[0].international_semester_month} Semester</p>
                          <p className="sbintr">Total Fees</p>
                          <p className="ttlcrs">{courseFees[0].international_semester_price * courseFees[0].international_semester_month}$</p>
                        </div>
                      </div>
                      <div className="col-6  col-lg-6">
                        <div className=" crds">
                          <p className="tmevse">Year - wise</p>
                          <h3 className="feecst"> {courseFees[0].international_yearly_price}$</h3>
                          <p className="ttsms">x {courseFees[0].international_yearly_month} Years</p>
                          <p className="sbintr">Total Fees</p>
                          <p className="ttlcrs">{courseFees[0].international_yearly_price * courseFees[0].international_yearly_month}$</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {courseDetails && courseDetails.hiring_companies.length > 0 && (

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
              
              {courseDetails && courseDetails.hiring_companies.split(',').map((hiring_companies_data, key) => (

                <div className="item">
                  <div className="lgocirc">

                    <img
                            src={
                              `${process.env.NEXT_PUBLIC_B_API}hiring-companies/` +
                              hiring_companies_data
                            }
                          />

                  </div>
                </div>

              ))}
              
              </OwlCarousel>
            </div>
          </div>
        </section>


        )}

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
                          Exhaustive e-content/printed material for in-depth
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
      <section className="faqnewtys fqallcrsdt">
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
              <p>Hindustan Online - CODE offers an array of under-graduate and post-graduate programs. These include-</p>
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
     {/*   <div className="card">
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
        </div> */}
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
                <i className="fas fa-phone-alt" /> +91 9945580408{' '}
              </span>
            </li>
            <li><a href="https://wa.me/9945580408/?text="><img src="/images/whatsappcta.png" /></a></li>

          </ul>
        </div>
      </div>
     
      <Footer/>


      <div
                    className="modal fade"
                    id="exampleModalCenter1"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalEnquirenowTitle3"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered   jncustm trasntypes"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-body">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>

                          <div className="basicenqforms">
                            <form onSubmit={handleSubmit}>
                              <div className="row">
                                <div className="col-lg-12 mx-auto">
                                  <h3>Enquire Now !</h3>
                                  <div className="form-groupsets">
                                    <label>Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}
                                    />
                                  </div>

                                  <div className="form-groupsets">
                                    <label>Email id</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                  </div>

                                  <div className="form-groupsets">
                                    <label>Mobile No.</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                      value={mobileNo}
                                      onChange={(e) =>
                                        setMobileNo(e.target.value)
                                      }
                                    />
                                  </div>

                                  <div className="form-groupsets">
                                    <label>Query</label>
                                    <textarea
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                      value={query}
                                      onChange={(e) => setQuery(e.target.value)}
                                    ></textarea>
                                  </div>
                                </div>

                                <div className="col-lg-12 text-center roundbotms">
                                  <button
                                    type="submit"
                                    className="orangectadms"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  


                  
      <div
        className="modal fade"
        id="exampleModalCenter22ff"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalEnquirenowTitle3"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered   jncustm trasntypes"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>

              <div className="basicenqforms">

              <div className="npf_wgts" data-height="500px" data-w="b2c2434e61006dae7b80093b9c72233c"></div> 
              </div>
            </div>
          </div>
        </div>
      </div>


      </>
)}

    </>
  )
}

export default CourseDetails
