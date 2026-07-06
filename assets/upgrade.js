const r=new URL('.',import.meta.url).pathname.replace(/assets\/$/,'');
const a=p=>r+p.slice(1);
const logo={
 main:a('/brand/SURE%20MECHACNIAL_Experienced-Innovative-Diverse.png'),
 symbol:a('/brand/SURE_symbol.png'),
 cac:a('/brand/SURE%20GROUP%20CAC%20LOGO.png'),
 therm:a('/brand/Thermolinear%20logo.png')
};
const pics=[
 // TEMP: Project images are placeholder visuals from the uploaded projects folder.
 // Replace these with verified project-specific folders once final image matching is complete.
 a('/projects/photos/Gemini_Generated_Image_.png'),
 a('/projects/photos/Gemini_Generated_Image_%20%282%29.png'),
 a('/projects/photos/Gemini_Generated_Image_%20%283%29.png'),
 a('/projects/photos/Gemini_Generated_Image_%20%284%29.png'),
 a('/projects/photos/Gemini_Generated_Image_%20%285%29.png')
];
const css=document.createElement('style');
css.textContent='.brand-logo__image{max-width:230px;max-height:58px;object-fit:contain}.site-footer .brand-logo__image{max-width:132px}.company-card__logo{object-fit:contain!important;padding:42px 38px 178px!important;opacity:.96!important;filter:drop-shadow(0 18px 34px rgba(0,0,0,.36))}';
document.head.append(css);
function brand(el,src,alt){if(!el)return;const m=el.querySelector('.brand-mark');if(m)m.hidden=true;const w=document.createElement('span');w.className='brand-logo';const i=document.createElement('img');i.className='brand-logo__image';i.src=src;i.alt=alt;i.loading='eager';w.append(i);el.prepend(w);}
brand(document.querySelector('.site-header .brand'),logo.main,'SURE Mechanical — Experienced Innovative Diverse');
brand(document.querySelector('.site-footer .brand'),logo.symbol,'SURE Group symbol');
document.querySelectorAll('.company-card--image').forEach(c=>{let t=c.querySelector('h3')?.textContent||'';let i=c.querySelector('.company-card__img');if(!i)return;i.src=/Cincinnati Air/i.test(t)?logo.cac:/Thermolinear/i.test(t)?logo.therm:logo.main;i.alt=t+' logo';i.classList.add('company-card__logo');});
document.querySelectorAll('.portfolio-card').forEach((c,n)=>{let i=c.querySelector('.portfolio-card__image');if(!i)return;i.src=pics[n%pics.length];i.alt=(c.querySelector('.portfolio-card__title')?.textContent||'Project')+' temporary project visual';});
let pd=document.getElementById('project-data');if(pd){let ps=JSON.parse(pd.textContent);pd.textContent=JSON.stringify(ps.map((p,n)=>({...p,featuredImage:pics[n%pics.length],gallery:pics.map((_,x)=>({src:pics[(n+x)%pics.length],alt:p.title+' temporary project visual '+(x+1),caption:p.title+' — temporary gallery visual '+(x+1)}))}))).replace(/</g,'\\u003c');}
