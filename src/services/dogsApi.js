const fallbackDogs=[
  {id:'lulu-pomerania-branco-id',image:'/assets/images/dog-brown-rug.webp',title:'Lulu Pomerânia Chocolate',status:'Disponibilidade atual',description:'Conheça o nosso Lulu Pomerânia Chocolate.',url:'/biasdreammachos.html'},
  {id:'lulu-pomerania-chocolate-id',image:'/assets/images/dog-brown-gravel.webp',title:'Lulu Pomerânia Merle',status:'Lista de interesse',description:'Conheça o nosso Lulu Pomerânia Merle.',url:'/biasdreamfemeas.html'},
  {id:'lulu-pomerania-preto-id',image:'/assets/images/dog-black-blanket.webp',title:'Lulu Pomerânia Preto',status:'Reserve o seu interesse',description:'Conheça o nosso Lulu Pomerânia Preto.',url:'/biasdreamninhadas.html'}
];

const apiUrl=import.meta.env.VITE_DOGS_API_URL||'/api/dogs';

export async function getDogs(signal){
  const response=await fetch(apiUrl,{signal,headers:{Accept:'application/json'}});
  if(!response.ok) throw new Error(`Dogs API returned ${response.status}`);
  const payload=await response.json();
  const dogs=Array.isArray(payload)?payload:payload.dogs;
  if(!Array.isArray(dogs)) throw new Error('Invalid dogs API response');
  return dogs.map(dog=>({
    id:dog.id,
    image:dog.image||dog.imageUrl,
    title:dog.title||dog.name,
    status:dog.status||'Disponível para consulta',
    description:dog.description||'Consulte os detalhes deste anúncio.',
    url:dog.url||'/biasdreamcontactos.html'
  })).filter(dog=>dog.id&&dog.image&&dog.title);
}

export {fallbackDogs};
