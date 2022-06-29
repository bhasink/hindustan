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
import { useToasts } from 'react-toast-notifications'
import { useRouter } from 'next/router'

const ContactUs = () => {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [query, setQuery] = useState('')
  const [course, setCourse] = useState('')

  const [courseData, setCourseData] = useState([])

  const router = useRouter()
  const { addToast } = useToasts()

  useEffect(() => {
   
    getAllCourses()
  }, [])
  
  const getAllCourses = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/listing`)

      const getCourses = data.data.get_all_courses

      setCourseData(getCourses)

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    FileSaver.saveAs(
      process.env.NEXT_PUBLIC_B_API + '/brochure/ho-brochure.pdf',
      'ho-brochure.pdf',
    )


  }

  const handleSubmit4 = async (e) => {
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

    if (course == '') {
      addToast('Please select the course!', { appearance: 'error' })

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
          course_id: course,
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
              <p><b>Email Us:</b> info@hindustancode.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 bdbtms">
            <img src="/images/contic2.png" />
            <h5>International enquiry</h5>
            <div className="adlnone">
              <p><b>WhatsApp Us :</b> +91 9945580408</p>
              <p><b>Call Us: :</b> +91 9945580408</p>
              <p><b>Email Us:</b> intl@hindustancode.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 bdbtms">
            <img src="/images/contic3.png" />
            <h5>Other enquiry</h5>
            <div className="adlnone">
              <p><b>WhatsApp Us :</b> +91 9986342290</p>
              <p><b>Call Us: :</b> 91 9986342290</p>
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
          <a href="#" className="blackctathms nobrd" data-toggle="modal" data-target="#exampleModalCenter4"><img src="/images/downldico.png" />Download Brochure</a>
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


<div
                    className="modal fade"
                    id="exampleModalCenter4"
                    tabIndex="-1"
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
                            <form onSubmit={handleSubmit4}>
                              <div className="row">
                                <div className="col-lg-12 mx-auto">
                                  <h3>Download Brochure</h3>
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
                                    <label>Course</label>

                                    <select 
                                      className="form-control"
                                      placeholder=""
                                      value={course}
                                      onChange={(e) =>
                                        setCourse(e.target.value)
                                      }
                                    >

                                      <option>Select Course</option>

                                      {courseData && courseData.map((get_courses_data, key) => (
                                      <option value={get_courses_data.id}>{get_courses_data.name}</option>
                                      ))}

                                    </select>
                                
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
                 

        </>
    );
};

export default ContactUs;