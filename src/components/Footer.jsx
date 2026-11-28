import React from 'react';
import {Link} from 'react-router-dom';
export default function Footer(){return (
<footer className={"w3l-footer-29-main py-5"}>
  <div className={"container pt-lg-5 pt-sm-4 pt-2 pb-2"}>
    <div className={"row footer-top-29"}>
      <div className={"col-lg-4 col-md-6 footer-list-29"}>
        <h6 className={"footer-title-29"}>
          {"Contactos "}
        </h6>
        <p className={"mb-2 pe-xl-5 footer-contact-line"}>
          <a href={"https://www.google.com/maps/search/?api=1&query=Largo%20das%20Leiras%20136%2C%20Travassos%2C%20Fafe%204820-790"} target={"_blank"} rel={"noreferrer"}><i className={"fas fa-location-dot"}/> {"Largo das Leiras nº136\n                    Travassos, Fafe 4820-790"}</a>
        </p>
        <p className={"mb-2 footer-contact-line"}>
          <a href={"tel:+351930580893"}><i className={"fas fa-phone"}/> {"+351 930 580 893"}</a>
        </p>
        <p className={"mb-2 footer-contact-line"}>
          <a href={"mailto:lucarvalho34@outlook.pt"}><i className={"fas fa-envelope"}/> {"lucarvalho34@outlook.pt"}</a>
        </p>
        <div className={"mt-4"}>
          <ul className={"social"}>
            <li>
              <a href={"https://www.facebook.com/luzy.carvalho"}>
                <i className={"fab fa-facebook-f"}></i>
              </a>
            </li>
            <li>
              <a href={"https://www.instagram.com/"}>
                <i className={"fab fa-instagram"}></i>
              </a>
            </li>
            <li>
              <a href={"https://www.tiktok.com/@biacarvalho821"}>
                <i className={"fab fa-tiktok"}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={"col-lg-2 col-md-3 col-6 footer-list-29 mt-md-0 mt-4"}>
        <ul>
          <h6 className={"footer-title-29"}>
            {"Menu"}
          </h6>
          <li>
            <Link to={"/index.html"}>
              {"Home"}
            </Link>
          </li>
          <li>
            <Link to={"/biasdream.html"}>
              {"quem Somos"}
            </Link>
          </li>
          <li>
            <Link to={"/biasdreammachos.html"}>
              {"Machos"}
            </Link>
          </li>
          <li>
            <Link to={"/biasdreamfemeas.html"}>
              {"Fêmeas"}
            </Link>
          </li>
          <li>
            <Link to={"/biasdreamninhadas.html"}>
              {"Ninhadas"}
            </Link>
          </li>
        </ul>
      </div>
      <div className={"col-lg-2 col-md-3 col-6 ps-lg-5 ps-lg-4 footer-list-29 mt-md-0 mt-4"}>
        <ul>
          <h6 className={"footer-title-29"}>Links Úteis</h6>
          <li>
            <Link to={"/biasdreamkennelvideos.html"}>
              {"Vídeos"}
            </Link>
          </li>
          <li>
            <Link to={"/spitzalemao.html"}>
              {"Sobre a Raça"}
            </Link>
          </li>
          <li>
            <Link to={"/spitzalemaoestalao.html"}>
              {"Estalão"}
            </Link>
          </li>
          <li>
            <Link to={"/biasdreamvereler.html"}>
              {"Livro de Visitas"}
            </Link>
          </li>
          <li>
            <Link to={"/biasdreamcontactos.html"}>
              {"Contactos"}
            </Link>
          </li>
        </ul>
      </div>
      <div className={"col-lg-2 col-md-3 col-6 footer-list-29 mt-md-0 mt-4"}>
        <ul>
          <h6 className={"footer-title-29"}>Legal</h6>
          <li><Link to={"/politica-privacidade.html"}><i className={"fas fa-shield-alt"}/> <span>Privacidade</span><b>›</b></Link></li>
          <li><Link to={"/politica-cookies.html"}><i className={"fas fa-cookie-bite"}/> <span>Cookies</span><b>›</b></Link></li>
          <li><Link to={"/termos-condicoes.html"}><i className={"fas fa-file-alt"}/> <span>Termos</span><b>›</b></Link></li>
        </ul>
      </div>
      <div className={"col-lg-2 col-md-6 col-sm-8 footer-list-29 mt-lg-0 mt-4 ps-lg-5"}>
        <h6 className={"footer-title-29 footer-brand-title"}>
          <img src={"/assets/images/footer-logo.png"} alt={"Bia's Dream"} />
        </h6>
      </div>
    </div>
    <p className={"copy-footer-29 text-center mt-5 pt-lg-3"}>
      {"© 2026 Bia's Dream. \n\t\t\tAll rights reserved. Design by "}
      <a href={"#"} target={"_blank"}>
        {"\n\t\t\tRafynha"}
      </a>
    </p>
  </div>
</footer>
);}
