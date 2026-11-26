import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
function Banner(){return (
<section className={"inner-banner py-sm-5 py-4"}>
  <div className={"w3l-breadcrumb pt-5 pb-4"}>
    <div className={"container py-xl-5 py-lg-4"}>
      <h4 className={"inner-text-title font-weight-bold pt-5"}></h4>
      <ul className={"breadcrumbs-custom-path"}>
        <li>
          <Link to={"/index.html"}></Link>
        </li>
        <li className={"active"}>
          <i className={"fas fa-angle-right mx-2"}></i>
        </li>
      </ul>
    </div>
  </div>
</section>
);}

function Section1(){return (
<div className={"w3l-blog-content py-5"}>
  <div className={"container py-lg-5 py-md-4 py-2"}>
    <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
      <p>
        {"Bia's Dream Kennel"}
      </p>
      <h3 className={"title-style"}>
        {"Machos"}
      </h3>
      <br />
      <p className={"title-style"}>
        {"Jake - Lilás"}
      </p>
    </div>
    <p align={"center"}>
      <img src={"/assets/images/machojakelilas.jpg"} alt={""} className={"img-fluid radius-image"} />
      <p align={"center"}>
        <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
          <p className={"title-style"}>
            {"Luxe"}
          </p>
        </div>
        <p align={"center"}>
          <img src={"/assets/images/macholuxe.jpg"} alt={""} className={"img-fluid radius-image"} />
          <p align={"center"}>
            <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
              <p className={"title-style"}>
                {"Chocapik - Chocolate sable"}
              </p>
            </div>
            <p align={"center"}>
              <img src={"/assets/images/machochocapik.jpg"} alt={""} className={"img-fluid radius-image"} />
              <p align={"center"}>
                <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                  <p className={"title-style"}>
                    {"Grizzly"}
                  </p>
                </div>
                <p align={"center"}>
                  <img src={"/assets/images/machospitz.jpg"} alt={""} className={"img-fluid radius-image"} />
                  <p align={"center"}>
                    <p align={"center"}>
                      <img src={"/assets/images/machospitz3.jpg"} alt={""} className={"img-fluid radius-image"} />
                      <p align={"center"}>
                        <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                          <p className={"title-style"}>
                            {"ShanChi - Branco"}
                          </p>
                        </div>
                        <p align={"center"}>
                          <img src={"/assets/images/machoshanChi.jpg"} alt={""} className={"img-fluid radius-image"} />
                          <p align={"center"}>
                            <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                              <p className={"title-style"}>
                                {"Boston - Blue tan"}
                              </p>
                            </div>
                            <p align={"center"}>
                              <img src={"/assets/images/machoboston.jpg"} alt={""} className={"img-fluid radius-image"} />
                              <p align={"center"}>
                                <p align={"center"}>
                                  <img src={"/assets/images/machoboston2.jpg"} alt={""} className={"img-fluid radius-image"} />
                                  <p align={"center"}>
                                    <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                                      <p className={"title-style"}>
                                        {"Martin - Branco"}
                                      </p>
                                    </div>
                                    <p align={"center"}>
                                      <img src={"/assets/images/machomartin.jpg"} alt={""} className={"img-fluid radius-image"} />
                                      <p align={"center"}>
                                        <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                                          <p className={"title-style"}>
                                            {"Brutus - Branco"}
                                          </p>
                                        </div>
                                        <p align={"center"}>
                                          <img src={"/assets/images/machobrutus.jpg"} alt={""} className={"img-fluid radius-image"} />
                                          <p align={"center"}>
                                            <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                                              <p className={"title-style"}>
                                                {"Teddy"}
                                              </p>
                                            </div>
                                            <p align={"center"}>
                                              <img src={"/assets/images/macholindor.jpg"} alt={""} className={"img-fluid radius-image"} />
                                              <p align={"center"}>
                                                <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                                                  <p className={"title-style"}>
                                                    {"Leo - Creme"}
                                                  </p>
                                                </div>
                                                <p align={"center"}>
                                                  <img src={"/assets/images/macholeo.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                  <p align={"center"}>
                                                    <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                                                      <p className={"title-style"}>
                                                        {"Magic - Chocolate tan"}
                                                      </p>
                                                    </div>
                                                    <p align={"center"}>
                                                      <img src={"/assets/images/machomagic.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                      <p align={"center"}>
                                                        <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                                                          <p className={"title-style"}>
                                                            {"Eddison - Branco"}
                                                          </p>
                                                        </div>
                                                        <p align={"center"}>
                                                          <img src={"/assets/images/machoedison.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                          <p align={"center"}>
                                                            <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                                                              <p className={"title-style"}>
                                                                {"Kai - Branco"}
                                                              </p>
                                                            </div>
                                                            <p align={"center"}>
                                                              <img src={"/assets/images/machokai11.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                              <p align={"center"}>
                                                                <p align={"center"}>
                                                                  <img src={"/assets/images/machokai2.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                                  <p align={"center"}>
                                                                    <p align={"center"}>
                                                                      <img src={"/assets/images/machokai1.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                                      <p align={"center"}>
                                                                        <p align={"center"}>
                                                                          <p align={"center"}>
                                                                            <p align={"center"}></p>
                                                                          </p>
                                                                        </p>
                                                                      </p>
                                                                    </p>
                                                                  </p>
                                                                </p>
                                                              </p>
                                                            </p>
                                                          </p>
                                                        </p>
                                                      </p>
                                                    </p>
                                                  </p>
                                                </p>
                                              </p>
                                            </p>
                                          </p>
                                        </p>
                                      </p>
                                    </p>
                                  </p>
                                </p>
                              </p>
                            </p>
                          </p>
                        </p>
                      </p>
                    </p>
                  </p>
                </p>
              </p>
            </p>
          </p>
        </p>
      </p>
    </p>
  </div>
</div>
);}
export default function Machos(){return <><Banner /><Section1 /></>;}
