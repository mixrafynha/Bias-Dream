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
        {"Ninhadas"}
      </h3>
      <p className={"title-style"}>
        <b>
          <font face={"Arial"} size={"4"} color={"#000000"}>
            {"Macho de excelente \n\t\t\t\tqualidade disponível para entrega imediata."}
          </font>
          <font face={"Arial"} size={"3"} color={"#000000"}></font>
        </b>
      </p>
      <p className={"title-style"}>
        <b>
          <font face={"Arial"} size={"4"} color={"#000000"}>
            {"Com lop chip, \n\t\t\t\tvacinas todas."}
          </font>
        </b>
      </p>
    </div>
    <p align={"center"}>
      <img src={"/assets/images/disponivel1.jpg"} alt={""} className={"img-fluid radius-image"} />
      <p align={"center"}>
        <p align={"center"}>
          <img src={"/assets/images/disponivel2.jpg"} alt={""} className={"img-fluid radius-image"} />
          <p align={"center"}>
            <p align={"center"}>
              <img src={"/assets/images/disponivel3.jpg"} alt={""} className={"img-fluid radius-image"} />
              <p align={"center"}>
                <p className={"title-style"} align={"center"}>
                  <b>
                    <font face={"Arial"} size={"4"} color={"#000000"}>
                      {"Lindor Pai"}
                    </font>
                  </b>
                </p>
                <p align={"right"}>
                  <p align={"center"}>
                    <img src={"/assets/images/disponivelpai.jpg"} alt={""} className={"img-fluid radius-image"} />
                    <p align={"center"}>
                      <p className={"title-style"} align={"center"}>
                        <b>
                          <font face={"Arial"} size={"4"} color={"#000000"}>
                            {"Julieta mãe"}
                          </font>
                        </b>
                      </p>
                      <p align={"right"}>
                        <p align={"center"}>
                          <img src={"/assets/images/disponivelmae.jpg"} alt={""} className={"img-fluid radius-image"} />
                          <p align={"center"}>
                            <p align={"center"}>
                              <b>
                                <font face={"Arial"} size={"4"} color={"#000000"}>
                                  {"Veja em baixo, fotos \n\t\t\t\tde ninhadas anteriores."}
                                </font>
                              </b>
                              <p align={"center"}>
                                <font size={"4"} color={"#000000"}>
                                  {"Para mais informações, \n\t\t\t\tcontacte-nos."}
                                </font>
                                <p align={"center"}>
                                  <p align={"center"}>
                                    <img src={"/assets/images/biasdreamninhadas.jpg"} alt={""} className={"img-fluid radius-image"} />
                                    <p align={"center"}>
                                      <p align={"center"}>
                                        <img src={"/assets/images/niantes19.jpg"} alt={""} className={"img-fluid radius-image"} />
                                        <p align={"center"}>
                                          <p align={"center"}>
                                            <img src={"/assets/images/niantes18.jpg"} alt={""} className={"img-fluid radius-image"} />
                                            <p align={"center"}>
                                              <p align={"center"}>
                                                <img src={"/assets/images/niantes15.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                <p align={"center"}>
                                                  <p align={"center"}>
                                                    <img src={"/assets/images/niantes16.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                    <p align={"center"}>
                                                      <p align={"center"}>
                                                        <img src={"/assets/images/niantes2.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                        <p align={"center"}>
                                                          <p align={"center"}>
                                                            <img src={"/assets/images/niantes33.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                            <p align={"center"}>
                                                              <p align={"center"}>
                                                                <img src={"/assets/images/niantes17.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                                <p align={"center"}>
                                                                  <p align={"center"}>
                                                                    <img src={"/assets/images/niantes44.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                                    <p align={"center"}>
                                                                      <p align={"center"}>
                                                                        <img src={"/assets/images/niantes55.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                                        <p align={"center"}>
                                                                          <p align={"center"}>
                                                                            <img src={"/assets/images/niantes66.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                                            <p align={"center"}>
                                                                              <p align={"center"}>
                                                                                <img src={"/assets/images/niantes77.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                                                <p align={"center"}>
                                                                                  <p align={"center"}>
                                                                                    <img src={"/assets/images/niantes11.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                                                    <p align={"center"}>
                                                                                      <p align={"center"}>
                                                                                        <img src={"/assets/images/niantes12.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                                                        <p align={"center"}>
                                                                                          <p align={"center"}>
                                                                                            <img src={"/assets/images/niantes13.jpg"} alt={""} className={"img-fluid radius-image"} />
                                                                                            <p align={"center"}>
                                                                                              <p align={"center"}>
                                                                                                <img src={"/assets/images/niantes14.jpg"} alt={""} className={"img-fluid radius-image"} />
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
export default function Ninhadas(){return <><Banner /><Section1 /></>;}
