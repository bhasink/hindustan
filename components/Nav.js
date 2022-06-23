import { useState,useEffect } from "react";
import Link from 'next/link'
import { useToasts } from 'react-toast-notifications'
import axios from 'axios'
import { useRouter } from 'next/router'

const Nav = () => {
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



    return(

      <>

        <header className={`site-header topmain mobexheight norm ${isActive ? "" : "heightexps"}`}>
        {/*--New Updates---*/}   
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Brand */}
            <Link href="/">
                <a className="navbar-brand">
                <img src="/images/logo.jpg" className="navbar-brand-img" alt="logo" />
                </a>
            </Link>
            {/* Toggler */}
            <button  onClick={handleToggle} className={`navbar-toggler openhdas ${isActive ? "" : "crossshwos"}`}  type="button" >
              <i className="fal fa-bars" />
              <i className="fal fa-times" />
            </button>
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="mobile-widgets">
                <div className="cross" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
                  <i className="fal fa-times" />
                </div>
              </div>
              {/* Navigation */}
              <div className="ml-auto" id="accordionExample">
                <ul className="navbar-nav ml-auto position-relative" id="menu-center">
                  <li className="nav-item nosublnk active">
                    <a className="nav-link bidevices" href="tel:+91 9945580408" style={{color: '#fe982c'}}><i className="fas fa-phone-alt" /> +91 9945580408 </a>
                  </li>
                  <li className="nav-item nosublnk active">
                    <Link href="/courses">
                      <a className="nav-link bidevices">Programs </a>
                    </Link>
                  </li>
                  <li className="nav-item nosublnk active">
                    <Link href="/about">
                        <a className="nav-link bidevices">About Us</a>
                    </Link>
                  </li>

                  <li className="nav-item nosublnk active">
                    <Link href="../contact">
                        <a className="nav-link bidevices">Contact</a>
                    </Link>
                  </li>

                  <li className="nav-item  active">
                    <a className="nav-link bidevices orangebtns"   data-toggle="modal" data-target="#exampleModalCenter">Apply Now</a>
                  </li>
                  {/*
                      
                      <li class="nav-item nosublnk">
                          <a class="nav-link bidevices nosublnk subarrs" href="contactus.html">Contact</a>
                          <h3 data-toggle="collapse" data-target="#collapsemenusFive" aria-expanded="false" aria-controls="collapsemenusFive" class="mobclick collapsed">
                              Contact Us<i class="fal fa-angle-up"></i> <i class="fal fa-angle-down"></i>
                          </h3>
    
                          <div id="collapsemenusFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                
                                    <div class="megamenu">
                                  <div class="row">
                                      <div class="col-lg-12 colorchng">
                                          <ul>
                                              <li><a href="#">Inner Link 1</a></li>
                                              <li><a href="#">Inner Link 2</a></li>
                                              <li><a href="#">Inner Link 3</a></li>
                                                    <li><a href="#">Inner Link 4</a></li>
                                                    
    
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                                    
                                </div>
                      </li>*/}
                </ul>
              </div>
            </div>
          </div>
        </nav>

      </header>    

      
      <div
                    className="modal fade"
                    id="exampleModalCenter"
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

export default Nav;