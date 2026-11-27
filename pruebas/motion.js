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
