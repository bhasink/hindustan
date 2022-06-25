import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Thanks = () => {
  

  return (
    <>
      <Nav />



  <section className="whoarewes">
    <div className="container">
      <div className>
        <div className="row">
          <div className="col-md-6 col-lg-6 pr-lg-5" id="whoweare">
            
            <div className="vdthmbs">
              <img src="/images/aboutthmbs.jpg" className="fllimg" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 text-lg-left text-center text-md-left mt-lg-0 mt-5 mt-md-0 align-self-center">
            <div className="hdingst">
            <h2 className="mainhds">Thanks!</h2> 
       
            </div>
            <p>Form has been submitted successfully!  we'll get back to you ASAP</p>
            <button className='orangectathms' style={{border: 'none'}}>Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  </section>


  <Footer />


    </>
  )
}

export default Thanks
