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
<section className={"w3l-contact-main py-5"} id={"contact"}>
  <div className={"container py-lg-5 py-md-4 py-2"}>
    <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
      <p>
        {"Bia's Dream"}
      </p>
      <h3 className={"title-style"}>
        {"Contactos"}
      </h3>
    </div>
    <div className={"w3l-contact-info"}>
      <div className={"row contact-infos justify-content-center"}>
        <div className={"col-lg-4 col-md-6"}>
          <div className={"single-contact-infos"}>
            <div className={"icon-box"}>
              <i className={"fas fa-map-marked-alt"}></i>
            </div>
            <div className={"text-box"}>
              <h3 className={"mb-2"}>
                {"Bia's Dream"}
              </h3>
              <p>
                <b>
                  {"Luzia da Conceição Magalhães Carvalho"}
                  <br />
                  {"\n\t\t\t\t\t\t\t\tLargo das leiras nº 136 Travassos Fafe 4820 790. \n\t\t\t\t\t\t\t\tPortugal"}
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className={"col-lg-4 col-md-6 mt-md-0 mt-4"}>
          <div className={"single-contact-infos"}>
            <div className={"icon-box"}>
              <i className={"fas fa-mobile-alt"}></i>
            </div>
            <div className={"text-box"}>
              <h3 className={"mb-2"}>
                {"Telemóvel"}
              </h3>
              <p>
                <b>
                  <a href={"tel:+12 234-45-67-63"}>
                    {"+ (351) \n\t\t\t\t\t\t\t\t930580893"}
                  </a>
                </b>
              </p>
              <p>
                <b>
                  <a href={"tel:+12 404-11-22-99"}>
                    {"Chamada para \n\t\t\t\t\t\t\t\trede móvel nacional."}
                  </a>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className={"col-lg-4 col-md-6 mt-lg-0 mt-4"}>
          <div className={"single-contact-infos"}>
            <div className={"icon-box"}>
              <i className={"fas fa-envelope-open-text"}></i>
            </div>
            <div className={"text-box"}>
              <h3 className={"mb-2"}>
                {"E-mail"}
              </h3>
              <p>
                <b>
                  <a href={"mailto:lucarvalho34@outlook.pt"}>
                    <span style={{"fontWeight": "400"}}>
                      {"lucarvalho34@outlook.pt"}
                    </span>
                  </a>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);}

function Section2(){return (
<section className={"w3l-contact-main"} id={"contact"}>
  <div className={"container"}>
    <div className={"map pt-lg-3"}>
      <a href="https://www.google.com/maps/search/?api=1&query=Largo+das+Leiras+Travassos" target="_blank" rel="noreferrer">Ver localização no Google Maps</a>
      {"\"\n                    allowfullscreen=\"\">"}
    </div>
  </div>
</section>
);}
export default function Contactos(){return <><Banner /><Section1 /><Section2 /></>;}
