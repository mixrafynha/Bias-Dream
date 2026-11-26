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
        {"Estalão"}
      </h3>
      <p className={"title-style"} style={{"textAlign": "left"}}>
        <b>
          <font face={"Arial"} size={"3"} color={"#000000"}>
            {"PADRÃO OFICIAL"}
            <br />
            {"\n\t\t\t\tFCI nº 97, de 5/2/1992 País de origem: Alemanha Utilização: cão \n\t\t\t\tde guarda e companhia."}
            <br />
            <br />
            {"\n\t\t\t\tBreve histórico: os Spitzes são descendentes do cão da turfa da \n\t\t\t\tidade da pedra \"Canis bamiliaris palustris Ruthimeyer\"e \n\t\t\t\tposteriormente dos \"Cães de cidades lacustres\". São a raça mais \n\t\t\t\tantiga da Europa Central. Numerosas outras raças são suas \n\t\t\t\tdescendentes. Em algumas regiões o Spitz anão tem o nome de \n\t\t\t\t\"Pomerânia\"."}
            <br />
            <br />
            {"\n\t\t\t\tAspecto geral: os Spitzes seduzem pela as beleza e pelagem \n\t\t\t\tarmada por um abundante subpêlo. O pescoço é provido de uma \n\t\t\t\topulenta gola em forma de juba e a cauda espessa portada \n\t\t\t\torgulhosamente sobre o dorso, que é uma particularidade. Sua \n\t\t\t\tcabeça com olhos vivazes lembram uma raposa e suas orelhas \n\t\t\t\tpequenas, pontudas lhe dão seu aspecto impertinente \n\t\t\t\tcaracterístico. Proporções importantes: a relação entre a altura \n\t\t\t\tna cernelha e o comprimento do corpo é de 1:1. Comportamento e \n\t\t\t\tcaráter: O Sptz Alemão é sempre atento, vivo e \n\t\t\t\textraordinariamente ligado ao dono. Muito receptivo, fácil de se \n\t\t\t\teducar. Sua desconfiança de tudo o que lhe é desconhecido, a \n\t\t\t\tausência de instinto de caça fazem dele um guardião ideal para \n\t\t\t\tcasas ou fazendas. Resistente às intempéries, vigor e \n\t\t\t\tlongevidade são suas outras qualidades."}
            <br />
            <br />
            {"\n\t\t\t\tCabeça - crânio: tamanho médio, visto de cima é mais largo na \n\t\t\t\tsua parte posterior afinando, em forma de cunha (cuneiforme) até \n\t\t\t\ta ponta do nariz. De perfil, apresenta um stop moderadamente \n\t\t\t\tmarcado."}
            <br />
            <br />
            {"\n\t\t\t\tRegião facial:"}
            <br />
            {"\n\t\t\t\tFocinho: proporcionado ao crânio, não muito longo.Trufa: pequena \n\t\t\t\te redonda, cor preta, exceto aqueles Spitzes com pelagem marrom \n\t\t\t\tquando ela é marrom-escuro. Lábios: não se encobrem, são bem \n\t\t\t\testicados sem vincos na comissura. São inteiramente pretos nos \n\t\t\t\tSpitzes de todas as variedades de cor, exceto nos de cor marrom \n\t\t\t\tonde eles são marrom-escuro.Maxilares-dentes: desenvolvimento \n\t\t\t\tnormal, mordedura em tesoura, dentição completa (42 dentes) no \n\t\t\t\tSpitz grande e médio. No pequeno e no anão a ausência de um \n\t\t\t\tnúmero restrito de pré-molares é tolerado. Mordedura em torquês \n\t\t\t\té tolerada em todas as variedades. Bochechas:suavemente \n\t\t\t\tarredondadas sem ser salientes. Olhos: de tamanho médio, de \n\t\t\t\tforma ligeiramente alongada em posição um pouco oblíqua. Cor \n\t\t\t\tescura. As pálpebras são pigmentadas de preto em todas as \n\t\t\t\tvariedades de cor, exceto nos de cor marrom onde são de cor \n\t\t\t\tmarrom-escuro. Orelhas: pequenas, muito próximas, pontudas, \n\t\t\t\ttriangulares, inserção alta, portadas eretas com ponta bem \n\t\t\t\trígida."}
            <br />
            <br />
            {"\n\t\t\t\tPescoço: comprimento médio, largo na inserção entre os ombros, \n\t\t\t\tportado garbosamente. Sem borbelas apresenta uma gola em forma \n\t\t\t\tde juba."}
            <br />
            <br />
            {"\n\t\t\t\tTronco"}
            <br />
            {"\n\t\t\t\tLinha superior: começa na ponta das orelhas, portadas retas, bem \n\t\t\t\tperpendiculares e se prolonga após uma suave curva no dorso \n\t\t\t\tcurto e reto. A cauda espessa sobre o dorso cobre uma parte da \n\t\t\t\tsilhueta. Cernelha: bem definida. Une-se ao dorso que é o mais \n\t\t\t\tcurto possível. Lombo curto, largo e possante. Garupa: é \n\t\t\t\tlarga-curta não oblíqua. Peito: profundo e arqueado. A região do \n\t\t\t\testerno bem desenvolvida. A caixa torácica é bem desenvolvida e \n\t\t\t\to ventre moderadamente esgalgado. Cauda: inserção alta, \n\t\t\t\tcomprimento médio. Pelagem muito espessa desde a sua raiz, \n\t\t\t\tportada para a frente enrolada sobre o dorso, sobre o qual se \n\t\t\t\tapóia firmemente."}
            <br />
            <br />
            {"\n\t\t\t\tMembros anteriores:"}
            <br />
            {"\n\t\t\t\tretos, sendo que os anteriores mais compridos. Ombros: omoplata \n\t\t\t\tcomprida colocada obliquamente virada para trás. O braço de um \n\t\t\t\tcomprimento mais ou menos igual forma com a omoplata um ângulo \n\t\t\t\tde quase 90º. Bem musculoso, firmemente ajustados à caixa \n\t\t\t\ttorácica. Cotovelos: articulação sólida, bem ajustada ao tórax. \n\t\t\t\tAnte-braço: comprimento médio, vigoroso, reto com a parte \n\t\t\t\tposterior bem guarnecida de franjas. Metacarpo: sólido, \n\t\t\t\tcomprimento médio forma com o antebraço um ângulo aproximado de \n\t\t\t\t20º em relação à vertical. Pés: devem ser tão pequenos quanto \n\t\t\t\tpossível, rdondos com dedos fechados (pés de gato) e bem \n\t\t\t\tarqueados. As unhas e almofadas plantares são pretas em todas as \n\t\t\t\tvariedades de cor, com exceção no Spitz de cor marrom, onde são \n\t\t\t\tde cor marrom."}
            <br />
            <br />
            {"\n\t\t\t\tMembros posteriores:"}
            <br />
            {"\n\t\t\t\tsão muito musculosos e têm até os jarretes, culotes abundantes. \n\t\t\t\tSão retos e paralelos. Coxa e perna: são aproximadamente do \n\t\t\t\tmesmo comprimento. Joelho: moderadamente angulado, sólido no seu \n\t\t\t\tmovimento, não se desloca nem para dentro nem para fora. \n\t\t\t\tMetatarso: comprimento médio, forte, perpendicular ao solo. Pés: \n\t\t\t\tos pés traseiros não são tão redondos como os dianteiros, mas os \n\t\t\t\tdedos são bem fechados e as almofadas plantares o mais escuras \n\t\t\t\tpossível"}
            <br />
            <br />
            {"\n\t\t\t\tMovimentação: o trote ligeiro, bom impulso, é fluente e \n\t\t\t\telástico."}
            <br />
            <br />
            {"\n\t\t\t\tPele: aderente, não forma nenhuma ruga."}
            <br />
            {"\n\t\t\t\tPelagem - natureza do pêlo: pelagem dupla, pêlo de cobertura \n\t\t\t\tcomprido, reto e fechado e um subpêlo curto e espesso. A cabeça, \n\t\t\t\torelhas, face anterior dos membros e os pés longo e abundante. \n\t\t\t\tNão é ondulado, nem cacheado ou em tufos, não se reparte na \n\t\t\t\tlinha do dorso. O pescoço e os ombros são cobertos por um \n\t\t\t\tabundante juba. A parte posterior dos membros anteriores são \n\t\t\t\tguarnecidas por franjas. Os membros posteriores apresentam da \n\t\t\t\tgarupa ao jarrete um culote opulento e a cauda é espessa. Cor do \n\t\t\t\tpêlo: Spitz; lobo; cinza lobo (nuances de cinza). Spitz grande: \n\t\t\t\tpreto, marrom, branco. Spitz médio: preto marrom, branco, \n\t\t\t\tlaranja, cinza-lobo (nuances de cinza) e outras cores. Spitz \n\t\t\t\tpequeno: preto, marrom, branco, laranja, cinza-lobo (nuances de \n\t\t\t\tcinza) e oturas cores. Spitz anão: preto, marrom, branco, \n\t\t\t\tlaranja, cinza-lobo (nuances de cinza) e oturas cores. Spitz \n\t\t\t\tpreto: a pele e o subpêlo devem ser escuros. Pelagem negra sem \n\t\t\t\tvestígios de branco ou qualquer outra marcação. Spitz marrom: a \n\t\t\t\tpelagem deve ser marrom escura uniforme. Spitz branco: pelagem \n\t\t\t\tbranco puro sem nuances, particularmente amarelos que aparecem \n\t\t\t\tnas orelhas. Spitz laranja: unicolor, uniforme, sem apresentar \n\t\t\t\ttonalidades da escala internacional das cores (RAL). Spitz \n\t\t\t\tcinza-lobo e nuances: gradações de cinza, cina-lobo (cinza prata \n\t\t\t\tcom gradações com preto-carvão na extremidade dos pêlos). A \n\t\t\t\tmáscara não deve ser muito escura. A juba é mais clara. Os \n\t\t\t\tmembros anteriores e posteriores são cinza-prateado sem marca \n\t\t\t\tpreta embaixo dos cotovelos e joelhos. A ponta da cauda e \n\t\t\t\tculotes são cinza-prata claro. Spitz de outras cores: com esta \n\t\t\t\tdenominação figuram as raças com todas as outras cores: creme- \n\t\t\t\tcreme zibelina, laranja zibelina, preto e fogo panaché. Os cães \n\t\t\t\tmalhados devem ter fundo branco e manchas de cor preta, marrom, \n\t\t\t\tcinza, laranja por todo o corpo."}
            <br />
            <br />
            {"\n\t\t\t\tTamanho - Spitz lobo: 50 cm, pode ter uma variação para mais ou \n\t\t\t\tpara menos de 5 cm (admite-se até 60 cm, mas o aspecto geral não \n\t\t\t\tdeve ser comprometido). Spitz grande: 46 cm, pode ter uma \n\t\t\t\tvariação para mais ou para menos de 4 cm. Spitz médio: 34 cm, \n\t\t\t\tpode ter uma variação para mais ou para menos de 4 cm. Spitz \n\t\t\t\tpequeno: 26 cm, pode ter uma variação para mais ou para menos de \n\t\t\t\t3 cm. Spitz anão: 20 cm, pode ter uma variação para mais ou para \n\t\t\t\tmenos de 2 cm. Os cães abaixo de 16 cms não são procurados. \n\t\t\t\tPeso: cada variedade deve ter peso correspondente ao tamanho."}
            <br />
            <br />
            {"\n\t\t\t\tFaltas: tudo que não corresponde ao standard deve ser \n\t\t\t\tconsiderado defeito que será penalizado em função de sua \n\t\t\t\tgravidade. Faltas graves: cabeça muito chata, em formato de \n\t\t\t\tmaçã, olhos muito grandes e muito claros, olhos proeminentes. \n\t\t\t\tEntrópio. Trufa, pálpebras e lábios de cor clara (manchado). \n\t\t\t\tDefeitos de construção; movimentação defeituosa. Ausência de \n\t\t\t\tpré-molares nos Spitzes lobo, Spitz grande e Spitz médio."}
            <br />
            <br />
            {"\n\t\t\t\tFaltas desqualificantes: prognatismo superior ou inferior, \n\t\t\t\tpersistência de moleira, orelha quebrada. Monorquidia ou \n\t\t\t\tausência de testículos. Um testículo desenvolvido \n\t\t\t\tinsuficientemente."}
          </font>
        </b>
      </p>
    </div>
    <p align={"center"}>
      <p align={"center"}></p>
    </p>
  </div>
</div>
);}
export default function Estalao(){return <><Banner /><Section1 /></>;}
