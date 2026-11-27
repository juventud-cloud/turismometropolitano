/* V4.5.1 — motion fix for V4.4. */
document.documentElement.dataset.motionVersion="4.5.1";
(()=>{
  if(!document.getElementById('v45-motion-styles')){
    const style=document.createElement('style');
    style.id='v45-motion-styles';
    style.textContent="\n/* V4.5 — adaptive motion, never rotate touch screens or interactive maps. */\n.floatnav nav{position:relative;isolation:isolate}.floatnav nav .nav-motion-pill{position:absolute;left:0;top:0;transform:translate(var(--pill-x,0px),var(--pill-y,0px));background:#e8eef9;border-radius:22px;z-index:-1;opacity:0;pointer-events:none}.floatnav nav:has(.nav-motion-pill) a.active{background:transparent}\n@media(prefers-reduced-motion:no-preference){\n .nav-motion-pill{transition:transform .35s cubic-bezier(.2,.75,.25,1),width .35s cubic-bezier(.2,.75,.25,1),height .3s,opacity .2s}\n .proposal{animation-fill-mode:backwards}\n .hero-copy .btn{animation-fill-mode:backwards}\n @media(min-width:721px) and (any-hover:hover) and (any-pointer:fine){\n  .town-card,.proposal,.comm-banner,.collage-main,.collage-slot{position:relative;transition:transform .4s cubic-bezier(.2,.75,.25,1),box-shadow .3s,border-color .2s;--tilt-x:0deg;--tilt-y:0deg}\n  .motion-ready .town-card.scroll-reveal.is-visible.tilt-live,.proposal.tilt-live,.comm-banner.tilt-live,.collage-main.tilt-live,.collage-slot.tilt-live,.town-card.tilt-live{transform:perspective(850px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y)) translateZ(5px)!important;animation-fill-mode:backwards;transition:transform .12s ease-out,box-shadow .25s;box-shadow:0 10px 25px #0b1e4420;z-index:2}\n  .town-card.tilt-live::before{pointer-events:none}\n  .proposal.tilt-live,.comm-banner.tilt-live{background-image:radial-gradient(ellipse at var(--shine-x,50%) var(--shine-y,50%),#247af20d,transparent 65%)}\n  .collage-main img,.collage-slot img{translate:var(--hero-x,0px) var(--hero-y,0px);scale:1.055;transition:translate .18s ease-out,transform .6s ease}\n  .hero-copy .btn.light{translate:var(--mag-x,0px) var(--mag-y,0px);transition:translate .18s ease-out,transform .25s,background .25s,box-shadow .25s}\n }\n @media(hover:none),(pointer:coarse){\n  .town-card,.proposal,.btn,.primary,.secondary,.floatnav nav a,.floatnav nav button,.modebar button,.chips button,.periodbar button{transition:scale .18s cubic-bezier(.2,.75,.25,1),background-color .18s,box-shadow .18s}\n  .town-card:active,.btn:active,.primary:active,.secondary:active,.floatnav nav a:active,.floatnav nav button:active,.modebar button:active,.chips button:active,.periodbar button:active{scale:.975}\n  .proposal:active{scale:.99}.town-card:hover img{transform:none}.town-card:hover,.proposal:hover{box-shadow:none}\n  .collage-main img,.collage-slot img{transform:scale(1.075) translateY(var(--hero-scroll,0px));transition:transform .15s linear}\n }\n}\n.filter-sheet{padding:0;overflow:auto}.sheet-heading{position:relative;padding:25px 20px 12px;display:flex;align-items:center;justify-content:space-between;gap:12px}.sheet-heading h2{font-size:24px;letter-spacing:-.03em}.sheet-grip{position:absolute;top:9px;left:50%;width:36px;height:4px;border-radius:4px;background:#cbd5e1;transform:translateX(-50%)}.sheet-close{width:44px;height:44px;padding:0;font-size:24px}.sheet-fields .advanced{padding:8px 20px 18px;display:grid;grid-template-columns:1fr;gap:12px}.sheet-fields .advanced label{min-width:0}.sheet-fields .advanced select,.sheet-fields .advanced input{min-height:44px;font-size:16px}.sheet-footer{position:sticky;bottom:0;background:#fff;padding:12px 20px max(16px,env(safe-area-inset-bottom));border-top:1px solid var(--line)}.sheet-done{width:100%}\n@media(max-width:720px){\n .floatnav nav .nav-motion-pill{border-radius:17px}\n .gallery{scroll-snap-type:x mandatory;overscroll-behavior-inline:contain;scrollbar-width:thin}.gallery img{flex:0 0 min(82%,320px);height:190px;scroll-snap-align:start}\n dialog.filter-sheet{position:fixed;inset:auto 0 0;margin:0;width:100%;height:auto;max-height:85dvh;border-radius:24px 24px 0 0;box-shadow:0 -16px 60px #07152d44}\n @media(prefers-reduced-motion:no-preference){@keyframes tm-sheet-in{from{transform:translateY(100%);opacity:.85}to{transform:translateY(0);opacity:1}}dialog[open]{animation:tm-sheet-in .36s cubic-bezier(.2,.8,.25,1) both}}\n}\n@media(prefers-reduced-motion:reduce){.nav-motion-pill{transition:none!important}.tilt-live{transform:none!important}.gallery{scroll-behavior:auto}}\n";
    document.head.appendChild(style);
  }
  if(document.title.includes('V4.4'))document.title=document.title.replace('V4.4','V4.5.1');
})();
/* V4.4: motion layer. No dependencies, no changes to business data. */
(()=>{
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const root=document.documentElement;
  const observer=new IntersectionObserver((entries)=>{
    for(const entry of entries) if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
  },{threshold:.08,rootMargin:'0px 0px 0px 0px'});
  const register=(node,delay=0)=>{
    if(!node || node.classList.contains('scroll-reveal'))return;
    node.classList.add('scroll-reveal');node.style.setProperty('--reveal-delay',`${delay}ms`);
    const rect=node.getBoundingClientRect();
    if(rect.top<innerHeight && rect.bottom>0)node.classList.add('is-visible');else observer.observe(node);
  };
  root.classList.add('motion-ready');
  document.querySelectorAll('.guide>div').forEach((node,i)=>register(node,i*65));
  document.querySelectorAll('.section>.heading,.map-shell,.footer-inner>div').forEach(node=>register(node));
  const towns=document.getElementById('towns');
  const scanTowns=()=>towns?.querySelectorAll('.town-card').forEach((node,i)=>register(node,(i%4)*40));
  scanTowns();if(towns)new MutationObserver(scanTowns).observe(towns,{childList:true});
  const shell=document.getElementById('mapShell');
  for(const id of ['modeGeneral','modeTrails'])document.getElementById(id)?.addEventListener('click',()=>{if(!shell)return;shell.classList.remove('mode-changed');void shell.offsetWidth;shell.classList.add('mode-changed');});
})();
/* Active section state is useful even with reduced motion. */
(()=>{const navs=[...document.querySelectorAll('[data-nav]')];function sync(){let active='mapa';const t=document.getElementById('localidades');if(t&&t.getBoundingClientRect().top<innerHeight*.45)active='localidades';navs.forEach(a=>{const on=a.dataset.nav===active;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}addEventListener('scroll',sync,{passive:true});sync()})();

/* V4.5 — adaptive motion. Pointer-only 3D, touch feedback, accessible filters. */
(()=>{
  const fine=matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const mobile=matchMedia('(max-width: 720px)');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const selector='.town-card,.proposal,.comm-banner:not([hidden]),.collage-main,.collage-slot';
  const hero=document.getElementById('hero');
  const cta=hero?.querySelector('.btn.light');
  let active=null,rect=null,point=null,frame=0,scrollFrame=0;
  const reset=()=>{if(active){active.classList.remove('tilt-live');for(const k of ['--tilt-x','--tilt-y','--shine-x','--shine-y'])active.style.removeProperty(k);}active=null;rect=null;};
  const resetHero=()=>{hero?.style.removeProperty('--hero-x');hero?.style.removeProperty('--hero-y');cta?.style.removeProperty('--mag-x');cta?.style.removeProperty('--mag-y');};
  function update(){frame=0;if(!point||!fine.matches||mobile.matches||reduced.matches)return;const {x,y,target}=point;const next=target.isConnected?target.closest(selector):null;
    if(next!==active){reset();if(next){active=next;rect=next.getBoundingClientRect();active.classList.add('tilt-live');}}
    if(active&&rect){const nx=Math.max(-1,Math.min(1,(x-rect.left)/Math.max(1,rect.width)*2-1)),ny=Math.max(-1,Math.min(1,(y-rect.top)/Math.max(1,rect.height)*2-1));const angle=active.matches('.proposal,.comm-banner')?6:8;active.style.setProperty('--tilt-x',`${-ny*angle}deg`);active.style.setProperty('--tilt-y',`${nx*angle}deg`);active.style.setProperty('--shine-x',`${(nx+1)*50}%`);active.style.setProperty('--shine-y',`${(ny+1)*50}%`);}
    if(hero?.contains(target)){const r=hero.getBoundingClientRect();hero.style.setProperty('--hero-x',`${(x-r.left-r.width/2)/r.width*16}px`);hero.style.setProperty('--hero-y',`${(y-r.top-r.height/2)/r.height*12}px`);}else resetHero();
    if(cta?.contains(target)){const r=cta.getBoundingClientRect();cta.style.setProperty('--mag-x',`${Math.max(-5,Math.min(5,(x-r.left-r.width/2)*.07))}px`);cta.style.setProperty('--mag-y',`${Math.max(-3,Math.min(3,(y-r.top-r.height/2)*.12))}px`);}else {cta?.style.removeProperty('--mag-x');cta?.style.removeProperty('--mag-y');}
  }
  document.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||!fine.matches||mobile.matches||reduced.matches)return;point={x:e.clientX,y:e.clientY,target:e.target};if(!frame)frame=requestAnimationFrame(update);},{passive:true});
  document.addEventListener('pointerout',e=>{if(!e.relatedTarget){point=null;reset();resetHero();}},{passive:true});
  document.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'){point=null;reset();resetHero();}},{passive:true});
  document.addEventListener('scroll',()=>{point=null;reset();resetHero();},{passive:true,capture:true});
  window.addEventListener('blur',()=>{point=null;reset();resetHero();});
  function clear(){point=null;reset();resetHero();hero?.style.removeProperty('--hero-scroll');}
  fine.addEventListener('change',clear);mobile.addEventListener('change',clear);reduced.addEventListener('change',clear);
  function scrollMotion(){scrollFrame=0;if(!hero||!mobile.matches||fine.matches||reduced.matches){hero?.style.removeProperty('--hero-scroll');return;}const r=hero.getBoundingClientRect();if(r.bottom>0)hero.style.setProperty('--hero-scroll',`${Math.min(14,Math.max(0,-r.top*.035))}px`);}
  window.addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(scrollMotion);},{passive:true});mobile.addEventListener('change',scrollMotion);scrollMotion();
  // Active navigation pill: follow the existing section state, no new routes.
  const nav=document.querySelector('.floatnav nav');
  if(nav){const pill=document.createElement('span');pill.className='nav-motion-pill';pill.setAttribute('aria-hidden','true');nav.prepend(pill);let pending=0;const sync=()=>{pending=0;const link=nav.querySelector('a.active');if(!link||!nav.clientWidth){pill.style.opacity='0';return;}pill.style.setProperty('--pill-x',`${link.offsetLeft}px`);pill.style.setProperty('--pill-y',`${link.offsetTop}px`);pill.style.width=`${link.offsetWidth}px`;pill.style.height=`${link.offsetHeight}px`;pill.style.opacity='1';};const queue=()=>{if(!pending)pending=requestAnimationFrame(sync);};new MutationObserver(queue).observe(nav,{subtree:true,attributes:true,attributeFilter:['class']});if('ResizeObserver'in window)new ResizeObserver(queue).observe(nav);window.addEventListener('resize',queue,{passive:true});queue();}
  // Native modal sheet on phones. Move the existing fields, not a duplicate form.
  const advanced=document.getElementById('advanced'),filterBtn=document.getElementById('filterBtn');
  if(advanced&&filterBtn&&typeof HTMLDialogElement!=='undefined'){
    const anchor=document.createComment('advanced filters original position');advanced.before(anchor);const desktopHandler=filterBtn.onclick;
    const sheet=document.createElement('dialog');sheet.id='filterSheet';sheet.className='filter-sheet';sheet.setAttribute('aria-labelledby','filterSheetTitle');sheet.innerHTML='<div class="sheet-heading"><span class="sheet-grip" aria-hidden="true"></span><h2 id="filterSheetTitle">Filtros</h2><button type="button" class="secondary sheet-close" aria-label="Cerrar filtros">×</button></div><div class="sheet-fields"></div><div class="sheet-footer"><button type="button" class="btn sheet-done">Aplicar filtros</button></div>';document.body.append(sheet);
    const restore=()=>{anchor.after(advanced);advanced.hidden=true;filterBtn.setAttribute('aria-expanded','false');filterBtn.focus({preventScroll:true});};
    sheet.addEventListener('close',restore);sheet.addEventListener('keydown',e=>{if(e.key==='Escape')e.stopPropagation();});sheet.addEventListener('click',e=>{if(e.target===sheet||e.target.closest('.sheet-close,.sheet-done'))sheet.close();});
    filterBtn.onclick=function(e){if(!mobile.matches){desktopHandler?.call(this,e);return;}sheet.querySelector('.sheet-fields').append(advanced);advanced.hidden=false;filterBtn.setAttribute('aria-expanded','true');sheet.showModal();sheet.querySelector('.sheet-close').focus({preventScroll:true});};
    mobile.addEventListener('change',()=>{if(sheet.open&&!mobile.matches)sheet.close();else if(mobile.matches&&!sheet.open){advanced.hidden=true;filterBtn.setAttribute('aria-expanded','false');}});
  }
})();
