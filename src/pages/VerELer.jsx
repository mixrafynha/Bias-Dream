import Guestbook from "../components/Guestbook";
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
        {"Livro de Visitas"}
      </h3>
      <p className={"title-style"} style={{"textAlign": "left"}}>
        <b>
          <font face={"Arial"} size={"3"} color={"#000000"}>
            <br />
            <Guestbook />
          </font>
        </b>
      </p>
    </div>
  </div>
</div>
);}

function Section2(){return (
<section className={"w3l-index5 pb-5 pt-4"}>
  <div className={"container-fluid py-lg-5 py-md-4 py-2"}>
    <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
      <p>
        {"Bia's Dream Kennel"}
      </p>
      <h3 className={"title-style"}>
        {"Spitz Alemão"}
      </h3>
    </div>
    <div className={"inner-sec-w3layouts pb-4"}>
      <Carousel>
        <div className={"item"}>
          <div className={"content-left-sec"}>
            <img src={"/assets/images/spitzalemao1.jpg"} className={"img-fluid scale-image"} alt={""} />
            <div className={"blog-info"}>
              <div className={"to-price mt-2"}></div>
              <div className={"d-flex align-items-center justify-content-between mt-4"}></div>
            </div>
          </div>
        </div>
        <div className={"item"}>
          <div className={"content-left-sec"}>
            <img src={"/assets/images/spitzalemao2.jpg"} className={"img-fluid scale-image"} alt={""} />
            <div className={"blog-info"}>
              <div className={"to-price mt-2"}></div>
              <div className={"d-flex align-items-center justify-content-between mt-4"}></div>
            </div>
          </div>
        </div>
        <div className={"item"}>
          <div className={"content-left-sec"}>
            <img src={"/assets/images/spitzalemao3.jpg"} className={"img-fluid scale-image"} alt={""} />
            <div className={"blog-info"}>
              <div className={"to-price mt-2"}></div>
              <div className={"d-flex align-items-center justify-content-between mt-4"}></div>
            </div>
          </div>
        </div>
        <div className={"item"}>
          <div className={"content-left-sec"}>
            <img src={"/assets/images/spitzalemao4.jpg"} className={"img-fluid scale-image"} alt={""} />
            <div className={"blog-info"}>
              <div className={"to-price mt-2"}></div>
              <div className={"d-flex align-items-center justify-content-between mt-4"}></div>
            </div>
          </div>
        </div>
        <div className={"item"}>
          <div className={"content-left-sec"}>
            <img src={"/assets/images/spitzalemao5.jpg"} className={"img-fluid scale-image"} alt={""} />
            <div className={"blog-info"}>
              <div className={"to-price mt-2"}></div>
              <div className={"d-flex align-items-center justify-content-between mt-4"}></div>
            </div>
          </div>
        </div>
        <div className={"item"}>
          <div className={"content-left-sec"}>
            <img src={"/assets/images/spitzalemao6.jpg"} className={"img-fluid scale-image"} alt={""} />
            <div className={"blog-info"}>
              <div className={"to-price mt-2"}></div>
              <div className={"d-flex align-items-center justify-content-between mt-4"}></div>
            </div>
          </div>
        </div>
        <div className={"item"}>
          <div className={"content-left-sec"}>
            <img src={"/assets/images/spitzalemao7.jpg"} className={"img-fluid scale-image"} alt={""} />
            <div className={"blog-info"}>
              <div className={"to-price mt-2"}></div>
              <div className={"d-flex align-items-cente8 justify-content-between mt-4"}></div>
            </div>
          </div>
        </div>
        <div className={"item"}>
          <div className={"content-left-sec"}>
            <img src={"/assets/images/spitzalemao8.jpg"} className={"img-fluid scale-image"} alt={""} />
            <div className={"blog-info"}>
              <div className={"to-price mt-2"}></div>
              <div className={"d-flex align-items-center justify-content-between mt-4"}></div>
            </div>
          </div>
        </div>
        <div className={"item"}>
          <div className={"content-left-sec"}>
            <img src={"/assets/images/spitzalemao9.jpg"} className={"img-fluid scale-image"} alt={""} />
            <div className={"blog-info"}>
              <div className={"to-price mt-2"}></div>
              <div className={"d-flex align-items-center justify-content-between mt-4"}></div>
            </div>
          </div>
        </div>
        <div className={"item"}>
          <div className={"content-left-sec"}>
            <img src={"/assets/images/spitzalemao10.jpg"} className={"img-fluid scale-image"} alt={""} />
            <div className={"blog-info"}>
              <div className={"to-price mt-2"}></div>
              <div className={"d-flex align-items-center justify-content-between mt-4"}></div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  </div>
</section>
);}
export default function VerELer(){return <><Banner /><Section1 /><Section2 /></>;}
