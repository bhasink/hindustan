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
import Footer from '../../components/Footer'

const Blog = () => {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const [allBlogs, setAllBlogs] = useState([])
  const [trendingCourses, setTrendingCourses] = useState([])
  const [filterCoursesLastPage, setFilterCoursesLastPage] = useState(
    false,
  )
  const [loader, setLoader] = useState(false)
  const [currentPageFilter, setCurrentPageFilter] = useState(1)
  const [blogsMode, setBlogsMode] = useState('all')


  useEffect(() => {
    AOS.init({
      duration: 2000,
    })

    getAllBlogs()
  }, [])

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/blogs`)

      const getBlogs = data.data.get_blogs.data
      const getTrendingcourses = data.data.get_t_courses.data

      // const get_courses_masters = data.data.get_courses_masters.data
      // const get_courses_bachelors = data.data.get_courses_bachelors.data
      // const get_courses_trending = data.data.get_courses_trending.data

      // console.log(get_courses_trending)

      setAllBlogs(getBlogs)
      setTrendingCourses(getTrendingcourses)
      // setMastersCourses(get_courses_masters)
      // setBachelorsCourses(get_courses_bachelors)
      // setTrendingCourses(get_courses_trending)

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  
  const filtersLoadMore = async (data) => {

    let blog_type;
    setLoader(true)
    setFilterCoursesLastPage(false)
    setCurrentPageFilter(1)

    if(data == "admission"){
      blog_type = "admission";
      setBlogsMode("admission")
    }else if(data == "programs"){
      blog_type = "programs";
      setBlogsMode("programs")
    }else if(data == "others"){
      blog_type = "others";
      setBlogsMode("others")
    }else{
      blog_type = 4;
      setBlogsMode("all")
    }

   
    try {

      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/blog-filter-data`,
        {
          blog_type: blog_type
        },
        config,
      )

      const get_courses = data.data.get_blogs.data
     
      setAllBlogs(get_courses)

      setLoader(false)

      console.log(data)
    } catch (err) {
      console.log(err)
      setLoader(false)
    }

  }
  

  const filtersLoadMoreData = async (data) => {
    setCurrentPageFilter((currentPageFilter = currentPageFilter + 1))
    setLoader(true)

    try {
    
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/blog-filter-data?page=${currentPageFilter}`,
        {
          blog_type: blogsMode
        },
        config,
      )

      const get_blogs = data.data.get_blogs.data
      const get_blogs_last_page = data.data.get_blogs.last_page

        setAllBlogs((oldArray) => [...oldArray, ...get_blogs])

      if (get_blogs_last_page < currentPageFilter) {
        setFilterCoursesLastPage(true)
      }

      setLoader(false)

      console.log(data)
    } catch (err) {
      console.log(err)
      setLoader(false)
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
        responsive_trust_comp: {
          0: {
            items: 2,
            nav: false,
            dots: true,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            loop: true,
          },
          300: {
            items: 2,
            nav: false,
            dots: true,
            autoplay:true,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            loop: true,
          },
    
          766: {
            items: 2,
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
            center: false,
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

      <OwlCarousel
                    className="featuredslide owl-theme owl-carousel"
                    nav
                   
                    responsive={state.responsive_trust_comp}
                    
                   
                  >

{trendingCourses &&
                  trendingCourses.map((trending, key) => (
<div className="item">
            <p><b>{trending.name}</b></p>
            <p>{trending.short_desc}
            </p>
          
            <Link href={`/blogs/${trending.slug}`}>

            <a href="#" className="rdpopart">Read More!</a>

            </Link>

            {/* <div className="lkcomms">
              <a href="#"><img src="/images/hearts.png" /></a>
              <a href="#"><img src="/images/comnt.png" /></a>
            </div> */}
            <p className="dtpst">Posted by: {trending.posted_by}</p>
            {/* <p className="dtpst">Published date: {trending.published_date}</p> */}
          </div>

                  ))}
                    </OwlCarousel>
     
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
            <a   className={
                  blogsMode == 'all'
                    ? 'btn-group nav-link btn-group-toggle active'
                    : 'btn-group nav-link btn-group-toggle'
                }  onClick={() => filtersLoadMore('all')} >All</a>
          </li>
          <li className="nav-item">
            <a  className={
                  blogsMode == 'admission'
                    ? 'btn-group nav-link btn-group-toggle active'
                    : 'btn-group nav-link btn-group-toggle'
                }  onClick={() => filtersLoadMore('admission')}>Admission</a>
          </li>
          <li className="nav-item">
            <a   className={
                  blogsMode == 'programs'
                    ? 'btn-group nav-link btn-group-toggle active'
                    : 'btn-group nav-link btn-group-toggle'
                }  onClick={() => filtersLoadMore('programs')}>Programs</a>
          </li>
          <li className="nav-item">
            <a   className={
                  blogsMode == 'others'
                    ? 'btn-group nav-link btn-group-toggle active'
                    : 'btn-group nav-link btn-group-toggle'
                }   onClick={() => filtersLoadMore('others')} >Others</a>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="myTabContent2">
        <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
          {/* <div className="sotfllshw">
            <select className="selectpicker" data-show-subtext="true" data-live-search-placeholder="Sort By Tag">
              <option value="Sort By">Sort By</option>
              <option value="Recent Articles">Recent Articles</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
          </div> */}
      
          <div className="gallcrd">
            <div className="row">
          
            {allBlogs &&
                  allBlogs.map((blogs, key) => (
              <div className="col-lg-6">
                <div className="artblogs">
                  <img src="/images/blogthmbs/1.jpg" />
                  <div className="inpds">
                    <p className="blhds">{blogs.name}</p>
                    <p className="sbhd">
                    {blogs.short_desc}
                    </p>
                    <Link href={`blogs/${blogs.slug}`}>
                    <a href="#">Read More!</a>
                    </Link>
                  </div>
                </div>
              </div>

              ))}

            </div>

            <div className="text-center pt-5 pt-lg-4 showctmore">
              {filterCoursesLastPage ? (
                <p> Yay! you have seen all</p>
              ) : (
                <>
                  {loader ? (
                    <p> Loading ... .. .</p>
                  ) : (
                    <a onClick={filtersLoadMoreData} className="orangectathms">
                      View more
                    </a>
                  )}
                </>
              )}
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
  <Footer/> 
</div>



        </>
    );
};

export default Blog;