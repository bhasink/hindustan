import { useContext,useState,useEffect } from "react";
import Link from 'next/link'

const Nav = () => {

    return(
        <header className="site-header topmain mobexheight norm">
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
            <button className="navbar-toggler openhdas" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
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
                    <Link href="about">
                        <a className="nav-link bidevices">About Us</a>
                    </Link>
                  </li>
                  <li className="nav-item nosublnk active">
                    <a className="nav-link bidevices orangebtns" href="javascript:void(0);"  data-toggle="modal" data-target="#exampleModalCenter">Apply Now</a>
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


       
<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      
      <div className="modal-body">
						  
						  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">×</span>
							</button>
							
							<div className="basicenqforms">
								<div className="row">
									<div className="col-lg-12 mx-auto">
										<h3>Apply Now !</h3>
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
										<label>courses</label>
                    <select>
												<option value="hide">---</option>
												<option value="2010">Course 1</option>
												<option value="2011">Course 2</option>
												<option value="2012">Course 3</option>
												<option value="2013">Course 4</option>
												<option value="2014">Course 5</option>
												
											</select>
										</div>

										<div className="form-groupsets">
										<label>How We can Help</label>
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


      </header>    
    );

};

export default Nav;