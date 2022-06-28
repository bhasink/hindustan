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
        
      }

    return (
        <>

  <Nav />

 <div>
  <section className="contactinfoons">
    <div className="container">
      
      <div className="hdingst text-center">
        <h2 className="mainhds">Privacy Policy</h2>
      </div>

      <div className="pt-5">
      <p>Your privacy is of utmost priority and we are committed to respecting it. Rest assured, we DO NOT give, share, sell, or transfer any personal information to a third party.
This privacy statement applies to the user information that we gather when you visit Hindustan Institute of Technology &amp; Science (HITS) a (Deemed-to-be University)’s and its other sub-sites that are owned, and managed, and controlled by the University team. This page contains information and a description of how this information is processed and protected
</p>

<p><b>Browsing Behaviour</b></p>

<p>We track the browsing patterns of the visitors to understand how our sites are being used. The websites deploy Google Analytics to gather anonymous statistics which are used to improve user experience.
</p>
<p>The web-operating system will help us identify the following:
</p>

<ul>
 <li>The Internet domain for your internet services, such as “xyz.com” or
“xyz.net” if you use a private internet access account, or
“yourcollege.edu” if you connect from a college or university domain.</li>
<li>Type of browser being used (“Google Chrome version X” or “Internet Explorer version X”).</li>
<li>Type of operating system being used (Macintosh, UNIX, or Windows).</li>
<li>Time and date of your prior visits to the website, what you had viewed or clicked and how you found us</li>
<li>Personal information is NOT recorded</li>
</ul>


<p><b>The information asked on the website</b></p>

<p>
The University websites and its sub-sites may ask you for personally- identifiable information like name, email ID, and/or phone number. The purpose of requesting this information is to communicate effectively with our visitors. Hindustan Institute of Technology &amp; Science a (Deemed-to-be University) will never sell, share, or disclose the information provided on its
websites.
</p>

<p><b>Information received from an email</b></p>


<p>
If in case you decide to send us an electronic mail message (email), it will usually contain your return email address. If you include personally-identifying information in your email because you want us to address issues specific to your circumstances, we may use that information in responding to your request. Also, e-mail is not necessarily secure against interception.Please send only the information necessary to help us process your request.
</p>

<p><b>Information collected from interactive forms</b></p>


<p>On some of our web pages, we offer interactive forms that let you voluntarily submit personal information such as your email address, name, or organization. This occurs when you are registering for online counseling, various tests, quizzes, seminars, workshops, or training sessions offered by Hindustan Institute of Technology &amp; Science a (Deemed-to-be University), downloading admission forms. In such cases, all submitted information is
used only for the purposes for which it is intended and is not made available to any third party.</p>

<p><b>Cookies</b></p>

<ul>
<li>
Necessary Cookies - We use this type of cookie on all the Hindustan Institute of Technology &amp; Science a (Deemed-to-be University) webpages to help you use our websites interactively and regularly. A cookie is a small file that a website transfers to your computer’s hard disk, usually to keep track of you while you are connected to that website.
</li>

<li>
Performance Enhancing Cookies - This doesn’t collect any personal information about individuals, but only about your browser “session.” The cookie makes it easier for you to use the dynamic features of these web pages, without providing the same information again as you move from one page to another.
</li>

<li>
Functional Cookies - This allows the websites to remember the choices you made during your previous. It identifies user behavior and enables us to serve content based on the user profile.
Third-party links The University and its other sub-sites may contain links to Third-Party Sites.Hindustan Institute of Technology &amp; Science a (Deemed-to-be University) is not accountable for the privacy practices followed by these websites. Hence, we encourage you to read through the privacy policy published by these Third-Party websites.
</li>







</ul>

<p>
For more information regarding the University’s privacy policy or if you have
If any queries, please write to: info@hindustanuniv.ac.in
</p>
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