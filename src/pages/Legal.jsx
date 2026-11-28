import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const content={
  privacy:{title:'Política de Privacidade',intro:'Esta política explica como a Bia’s Dream trata os dados pessoais enviados através deste website.',sections:[
    ['Responsável pelo tratamento','Responsável: Bia’s Dream. Morada: Largo das Leiras nº136, Travassos, Fafe 4820-790. Contacto: lucarvalho34@outlook.pt. NIF e outros dados legais devem ser confirmados pelo responsável antes da publicação.'],
    ['Dados tratados','Podemos tratar os dados que enviar voluntariamente, como nome, email, telefone e mensagem, além de dados técnicos necessários à segurança e funcionamento do website.'],
    ['Finalidades e conservação','Os dados são usados para responder a pedidos, gerir contactos e cumprir obrigações legais. Conservamos os dados apenas pelo período necessário à finalidade ou aos prazos legais aplicáveis.'],
    ['Direitos','Pode pedir acesso, retificação, apagamento, limitação, oposição ou portabilidade, quando aplicável, através de lucarvalho34@outlook.pt. Também pode apresentar reclamação à CNPD.']
  ]},
  cookies:{title:'Política de Cookies',intro:'Este website deve usar apenas cookies estritamente necessários por defeito.',sections:[
    ['Cookies necessários','Podem ser usados para manter preferências essenciais e garantir o funcionamento técnico do website.'],
    ['Cookies opcionais','Cookies de análise, publicidade ou serviços de terceiros só devem ser ativados após consentimento livre, específico, informado e revogável. Atualmente não são ativados por este banner.'],
    ['Gestão de preferências','Pode retirar o consentimento a qualquer momento apagando as preferências do navegador ou contactando-nos. A utilização de cookies deve ser documentada e atualizada quando forem adicionados novos serviços.']
  ]},
  terms:{title:'Termos e Condições',intro:'Ao utilizar este website, aceita utilizá-lo de forma lícita e responsável.',sections:[
    ['Conteúdo','As imagens, textos e marcas pertencem à Bia’s Dream ou são usados com autorização. Não é permitida a reprodução sem autorização.'],
    ['Informação sobre animais','As informações de disponibilidade, ninhadas e características são indicativas e devem ser confirmadas diretamente com o canil.'],
    ['Contactos e pedidos','O envio de um pedido não constitui contrato, reserva ou obrigação de venda. Qualquer reserva ou aquisição depende de confirmação e documentação própria.']
  ]}
};

export default function Legal(){
  const {pathname}=useLocation();
  const key=pathname.includes('cookies')?'cookies':pathname.includes('termos')?'terms':'privacy';
  const page=content[key];
  return <section className="legal-page"><div className="legal-inner"><Link className="legal-back" to="/">← Voltar ao início</Link><h1>{page.title}</h1><p className="legal-intro">{page.intro}</p>{page.sections.map(([title,text])=><section key={title}><h2>{title}</h2><p>{text}</p></section>)}<small>Última atualização: 28/11/2026. Este conteúdo é informativo e deve ser revisto com apoio jurídico antes da publicação definitiva.</small></div></section>;
}
