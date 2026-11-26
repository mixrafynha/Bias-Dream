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
<div className={"w3l-about-content py-5"}>
  <div className={"container py-lg-5 py-md-4 py-2"}>
    <div className={"row align-items-center"}>
      <div className={"col-lg-6"}>
        <img src={"/assets/images/luziacarvalho2.jpg"} className={"img-fluid radius-image"} alt={""} />
      </div>
      <div className={"col-lg-6 ps-lg-5 mt-lg-0 mt-4"}>
        <div className={"title-main"}>
          <p>
            {"Bia's Dream"}
          </p>
          <h3 className={"title-style"}>
            {"Quem Somos"}
          </h3>
        </div>
        <p className={"mt-4"}>
          <b>
            {"Somos uma grande equipa com muita \n\t\t\t\t\tcriatividade, trabalhamos com muita dedicação e \n\t\t\t\t\tresponsabilidade no que determina a qualidade dos nosso \n\t\t\t\t\tanimais."}
          </b>
        </p>
        <p className={"mt-3"}>
          <b>
            {"Este projecto, foi construído peça por \n\t\t\t\t\tpeça e foi mais um sonho concretizado, então tudo que \n\t\t\t\t\timplique a nossa qualidade, seja saúde, progenitores ou o \n\t\t\t\t\tdespiste das vacinas tudo é realizado com muita \n\t\t\t\t\tprofissionalidade!"}
          </b>
        </p>
        <p className={"mt-3"}>
          <b>
            {"Nós gostamos de deixar famílias felizes, \n\t\t\t\t\tpor isso damos preferência a animais de companhia! O Spitz \n\t\t\t\t\tAlemão tem uma pelagem dupla, densa e longa, e a cauda é \n\t\t\t\t\tenrolada sobre o dorso, as cores variam, desde o preto, \n\t\t\t\t\tbranco, castanho, cinzento, até ao laranja."}
          </b>
        </p>
        <p className={"mt-3"}>
          <b>
            {"Temos diferentes tipos de Spitz Alemão, \n\t\t\t\t\tincluindo o anão (Lulu da Pomerânia), pequeno, médio, cada \n\t\t\t\t\tum com suas diferenças e nao existem cães iguais, cada um \n\t\t\t\t\ttem as suas características..."}
          </b>
        </p>
        <p className={"mt-3"}>
          <b>
            {"Para saber mais sobre a raça, \n\t\t\t\t\tcontacte-nos."}
          </b>
        </p>
        <Link className={"btn btn-style mt-5"} to={"/biasdreamcontactos.html"}>
          {"Contactos"}
        </Link>
      </div>
    </div>
  </div>
</div>
);}

function Section2(){return (
<div className={"w3l-blog-content py-5"}>
  <div className={"container py-lg-5 py-md-4 py-2"}>
    <div className={"title-main text-center mx-auto mb-md-5 mb-4"} style={{"maxWidth": "600px"}}>
      <p>
        {"Bia's Dream Kennel"}
      </p>
      <h3 className={"title-style"}>
        {"Os Nossos Spitz"}
      </h3>
    </div>
    <div className={"row justify-content-center"}>
      <div className={"col-lg-4 col-md-6"}>
        <div className={"blog-grid-1"}>
          <div className={"card-header p-0 position-relative"}>
            <Link className={"zoom d-block"} to={"/biasdreammachos.html"}>
              <img className={"card-img-bottom d-block"} src={"/assets/images/machohome1.jpg"} alt={"Card image cap"} />
            </Link>
            <Link className={"course-desc"} to={"/biasdreammachos.html"}>
              <Link className={"btn btn-style mt-4"} to={"/biasdreammachos.html"}>
                {"Machos"}
              </Link>
            </Link>
          </div>
        </div>
      </div>
      <div className={"col-lg-4 col-md-6 mt-md-0 mt-4"}>
        <div className={"blog-grid-1"}>
          <div className={"card-header p-0 position-relative"}>
            <Link className={"zoom d-block"} to={"/biasdreamfemeas.html"}>
              <img className={"card-img-bottom d-block"} src={"/assets/images/femeahome.jpg"} alt={"Card image cap"} />
            </Link>
            <Link className={"course-desc"} to={"/biasdreamfemeas.html"}>
              <Link className={"btn btn-style mt-4"} to={"/biasdreamfemeas.html"}>
                {"Fêmeas"}
              </Link>
            </Link>
          </div>
        </div>
      </div>
      <div className={"col-lg-4 col-md-6 mt-lg-0 mt-4"}>
        <div className={"blog-grid-1"}>
          <div className={"card-header p-0 position-relative"}>
            <Link className={"zoom d-block"} to={"/biasdreamninhadas.html"}>
              <img className={"card-img-bottom d-block"} src={"/assets/images/ninhadahome.jpg"} alt={"Card image cap"} />
            </Link>
            <Link className={"course-desc"} to={"/biasdreamninhadas.html"}>
              <Link className={"btn btn-style mt-4"} to={"/biasdreamninhadas.html"}>
                {"Ninhadas"}
              </Link>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);}
export default function SobreNos(){return <><Banner /><Section1 /><Section2 /></>;}
