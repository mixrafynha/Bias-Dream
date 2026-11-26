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
        {"Sobre a Raça"}
      </h3>
      <p className={"title-style"} style={{"textAlign": "left"}}>
        <b>
          <font face={"Arial"} size={"3"} color={"#000000"}>
            <br />
            {"\n\t\t\t\tHistória"}
            <br />
            {"\n\t\t\t\tHistoricamente, cães do tipo spitz (lupoides) chegaram à Europa \n\t\t\t\tlevados pelos viquingues, sendo mencionados pela primeira vez na \n\t\t\t\tliteratura alemã em 1450. Enquanto o canino de porte médio foi \n\t\t\t\tcriado para o pastoreio, os outros dois foram desenvolvidos para \n\t\t\t\tserem cães de companhia. São ainda muito classificados como \n\t\t\t\talertas e extrovertidos, embora teimosos."}
            <br />
            <br />
            {"\n\t\t\t\tCaracterísticas"}
            <br />
            {"\n\t\t\t\tSeu físico chega aos 40 cm e os 19 kg para a variante grande. Já \n\t\t\t\to standard pode medir 36 cm e atingir os 12 kg, enquanto o \n\t\t\t\tpequeno pode chegar a pesar um máximo de 8 kg e medir 28 cm. "}
          </font>
        </b>
      </p>
      <p className={"title-style"} style={{"textAlign": "left"}}>
        <b>
          <font face={"Arial"} size={"3"} color={"#000000"}>
            {"O lulu, a versão \n\t\t\t\tminiatura do spitz, popularizou-se devido à Rainha Vitória, que \n\t\t\t\ta tinha como raça de companhia. O lulu é facilmente adestrável \n\t\t\t\tquando filhote."}
            <br />
            <br />
            {"\n\t\t\t\tDe acordo com o padrão estabelecido pela FCI, este canino é \n\t\t\t\taceito em praticamente todas as cores. Apesar do pelo longo, a \n\t\t\t\tfacilidade em trata-lo contribuiu para a sua popularidade, \n\t\t\t\texigindo apenas escovações periódicas e banhos mensais. "}
          </font>
        </b>
      </p>
      <p className={"title-style"} style={{"textAlign": "left"}}>
        <b>
          <font face={"Arial"} size={"3"} color={"#000000"}>
            {"Não há tosa \n\t\t\t\tespecífica para a raça, pede-se que apenas os bigodes do focinho \n\t\t\t\te pelos sob as patas sejam aparados. Apesar disso, muitos \n\t\t\t\tcriadores consideram o padrão quadrado (quando a altura é igual \n\t\t\t\tao comprimento), o lulu perfeito, já que esta característica dá \n\t\t\t\tao cão a aparência de uma bola de pelos."}
            <br />
            <br />
            {"\n\t\t\t\tVariedades"}
            <br />
            {"\n\t\t\t\tKeeshond (Wolfspitz) — Altura: de 43–55 cm na cernelha; Peso: \n\t\t\t\t15–20 kg"}
            <br />
            {"\n\t\t\t\tSpitz alemão grande (Großspitz) — Altura: entre 42–50 cm; Peso: \n\t\t\t\t15–20 kg. Difere do Keeshond pela pelagem."}
            <br />
            {"\n\t\t\t\tSpitz alemão médio (Mittelspitz) — Altura: de 30–38 cm; Peso: \n\t\t\t\t5–10 kg"}
            <br />
            {"\n\t\t\t\tSpitz alemão pequeno (Kleinspitz) — Altura: 23–29 cm; Peso: 5–10 \n\t\t\t\tkg"}
            <br />
            {"\n\t\t\t\tSpitz alemão anão (Zwergspitz) ou lulu-da-pomerânia — Altura: 18 \n\t\t\t\t- 22 cm; Peso: 1,0–3,5 kg."}
          </font>
        </b>
      </p>
    </div>
    <p align={"center"}></p>
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
export default function SpitzAlemao(){return <><Banner /><Section1 /><Section2 /></>;}
