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
        {"Vídeos"}
      </h3>
      <br />
      <p className={"title-style"}>
        <font size={"5"}>
          {"Click nos videos para \n\t\t\t\treproduzir"}
        </font>
      </p>
    </div>
    <p align={"center"}>
      <video height={"500"} controls={true}>
        <source src={"video10.mp4"} type={"video/mp4"} />
        {"\n  O seu navegador não suporta a reprodução de vídeos.\n"}
      </video>
      <br />
      <p align={"center"}>
        <video height={"500"} controls={true}>
          <source src={"video9.mp4"} type={"video/mp4"} />
          {"\n  O seu navegador não suporta a reprodução de vídeos.\n"}
        </video>
        <br />
        <p align={"center"}>
          <video height={"500"} controls={true}>
            <source src={"video8.mp4"} type={"video/mp4"} />
            {"\n  O seu navegador não suporta a reprodução de vídeos.\n"}
          </video>
          <br />
          <p align={"center"}>
            <video height={"500"} controls={true}>
              <source src={"video7.mp4"} type={"video/mp4"} />
              {"\n  O seu navegador não suporta a reprodução de vídeos.\n"}
            </video>
            <br />
            <video height={"500"} controls={true}>
              <source src={"video6.mp4"} type={"video/mp4"} />
              {"\n  O seu navegador não suporta a reprodução de vídeos.\n"}
            </video>
            <br />
            <video height={"500"} controls={true}>
              <source src={"video5.mp4"} type={"video/mp4"} />
              {"\n  O seu navegador não suporta a reprodução de vídeos.\n"}
            </video>
            <br />
            <video height={"500"} controls={true}>
              <source src={"video4.mp4"} type={"video/mp4"} />
              {"\n  O seu navegador não suporta a reprodução de vídeos.\n"}
            </video>
            <br />
            <video height={"500"} controls={true}>
              <source src={"video3.mp4"} type={"video/mp4"} />
              {"\n  O seu navegador não suporta a reprodução de vídeos.\n"}
            </video>
            <br />
            <video height={"500"} controls={true}>
              <source src={"video2.mp4"} type={"video/mp4"} />
              {"\n  O seu navegador não suporta a reprodução de vídeos.\n"}
            </video>
            <br />
            <video height={"500"} controls={true}>
              <source src={"video1.mp4"} type={"video/mp4"} />
              {"\n  O seu navegador não suporta a reprodução de vídeos.\n"}
            </video>
            <br />
            <p align={"center"}>
              <p align={"center"}>
                <p align={"center"}></p>
              </p>
            </p>
          </p>
        </p>
      </p>
    </p>
  </div>
</div>
);}
export default function Videos(){return <><Banner /><Section1 /></>;}
