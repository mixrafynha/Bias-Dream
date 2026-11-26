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
        {"Fêmeas"}
      </h3>
      <br />
      <p className={"title-style"}>
        {"Jasmine"}
      </p>
    </div>
    <p align={"center"}>
      <img src={"/assets/images/femeajasmine.jpg"} alt={""} className={"img-fluid radius-image"} />
      <p align={"center"}>
        <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
          <p className={"title-style"}>
            {"Cleo"}
          </p>
        </div>
        <p align={"center"}>
          <img src={"/assets/images/femeacleo.jpg"} alt={""} className={"img-fluid radius-image"} />
          <p align={"center"}>
            <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
              <p className={"title-style"}>
                {"Cris"}
              </p>
            </div>
            <p align={"center"}>
              <img src={"/assets/images/femeacris.jpg"} alt={""} className={"img-fluid radius-image"} />
              <p align={"center"}>
                <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                  <p className={"title-style"}>
                    {"Shakira"}
                  </p>
                </div>
                <p align={"center"}>
                  <img src={"/assets/images/femeashakira.jpg"} alt={""} className={"img-fluid radius-image"} />
                  <p align={"center"}>
                    <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                      <p className={"title-style"}>
                        {"Sol"}
                      </p>
                    </div>
                    <p align={"center"}>
                      <img src={"/assets/images/femeasol.jpg"} alt={""} className={"img-fluid radius-image"} />
                      <p align={"center"}>
                        <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                          <p className={"title-style"}>
                            {"Julieta"}
                          </p>
                        </div>
                        <p align={"center"}>
                          <img src={"/assets/images/femeajulieta.jpg"} alt={""} className={"img-fluid radius-image"} />
                          <p align={"center"}>
                            <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
                              <p className={"title-style"}>
                                {"Princesa"}
                              </p>
                            </div>
                            <p align={"center"}>
                              <img src={"/assets/images/femeaprincesa.jpg"} alt={""} className={"img-fluid radius-image"} />
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
  </div>
</div>
);}
export default function Femeas(){return <><Banner /><Section1 /></>;}
