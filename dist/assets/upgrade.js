const root=new URL('.',import.meta.url).pathname.replace(/assets\/$/,'');
const asset=path=>root+path.slice(1);
const logos={
  sure:asset('/brand/SURE%20MECHACNIAL_Experienced-Innovative-Diverse.png'),
  symbol:asset('/brand/SURE_symbol.png'),
  cac:asset('/brand/SURE%20GROUP%20CAC%20LOGO.png'),
  thermo:asset('/brand/Thermolinear%20logo.png')
};
const projectImages=[
  // TEMP: Project images are placeholder visuals from the uploaded projects folder.
  // Replace these with verified project-specific folders once final image matching is complete.
  asset('/projects/photos/Gemini_Generated_Image_.png'),
  asset('/projects/photos/Gemini_Generated_Image_%20%282%29.png'),
  asset('/projects/photos/Gemini_Generated_Image_%20%283%29.png'),
  asset('/projects/photos/Gemini_Generated_Image_%20%284%29.png'),
  asset('/projects/photos/Gemini_Generated_Image_%20%285%29.png')
];

document.head.insertAdjacentHTML('beforeend',`<style>
.site-header .brand{min-width:min(390px,34vw);gap:0!important}.brand-logo{display:inline-flex;align-items:center;justify-content:flex-start}.brand-logo__image{display:block;width:auto;object-fit:contain}.site-header .brand-logo__image{max-width:min(370px,31vw);max-height:78px}.site-footer .brand-logo__image{max-width:190px;max-height:118px}.brand:has(.brand-logo__image)>.brand-mark,.brand:has(.brand-logo__image)>span:not(.brand-logo){display:none!important}.company-card__img.company-card__logo{object-fit:contain!important;object-position:center 32%!important;padding:42px 38px 176px!important;opacity:1!important;filter:drop-shadow(0 18px 34px rgba(0,0,0,.38));background:radial-gradient(circle at center,rgba(17,197,214,.22),transparent 48%)}.portfolio-card__image,.project-gallery__image,.hero-media__image,.workforce__img{display:block!important;visibility:visible!important}.portfolio-card__image{opacity:1!important}.portfolio-card__placeholder{display:none!important}@media(max-width:860px){.site-header .brand{min-width:220px}.site-header .brand-logo__image{max-width:220px;max-height:58px}.site-footer .brand-logo__image{max-width:150px}.company-card__img.company-card__logo{padding:34px 28px 160px!important}}
</style>`);

function setBrand(selector,src,alt){
  const el=document.querySelector(selector);
  if(!el)return;
  const wrap=document.createElement('span');
  wrap.className='brand-logo';
  const img=document.createElement('img');
  img.className='brand-logo__image';
  img.src=src;
  img.alt=alt;
  img.loading='eager';
  img.decoding='async';
  wrap.append(img);
  el.replaceChildren(wrap);
}
setBrand('.site-header .brand',logos.sure,'SURE Mechanical — Experienced Innovative Diverse');
setBrand('.site-footer .brand',logos.symbol,'SURE Group symbol');

function cleanImage(img,src,alt){
  if(!img)return;
  img.removeAttribute('data-failed');
  img.removeAttribute('aria-hidden');
  img.hidden=false;
  img.style.display='block';
  img.src=src;
  img.alt=alt;
  img.decoding='async';
}

document.querySelectorAll('.company-card--image').forEach(card=>{
  const title=card.querySelector('h3')?.textContent?.trim()||'SURE Mechanical';
  const img=card.querySelector('.company-card__img');
  const src=/Cincinnati Air/i.test(title)?logos.cac:/Thermolinear/i.test(title)?logos.thermo:logos.sure;
  cleanImage(img,src,`${title} logo`);
  img?.classList.add('company-card__logo');
});

document.querySelectorAll('.portfolio-card').forEach((card,index)=>{
  const title=card.querySelector('.portfolio-card__title')?.textContent?.trim()||'SURE Group project';
  cleanImage(card.querySelector('.portfolio-card__image'),projectImages[index%projectImages.length],`${title} temporary project visual`);
});

const projectData=document.getElementById('project-data');
if(projectData){
  const projects=JSON.parse(projectData.textContent);
  const mapped=projects.map((project,index)=>({
    ...project,
    featuredImage:projectImages[index%projectImages.length],
    gallery:projectImages.map((_,offset)=>({
      src:projectImages[(index+offset)%projectImages.length],
      alt:`${project.title} temporary project visual ${offset+1}`,
      caption:`${project.title} — temporary gallery visual ${offset+1}`
    }))
  }));
  projectData.textContent=JSON.stringify(mapped).replace(/</g,'\\u003c');
}
