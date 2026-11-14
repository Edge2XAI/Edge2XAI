(function(){
  var KEY='e2x-pv-dismissed';
  function get(){try{return localStorage.getItem(KEY)==='1';}catch(e){return false;}}
  function set(){try{localStorage.setItem(KEY,'1');}catch(e){}}
  if(get())return;
  var target=document.getElementById('perspective');
  var header=document.querySelector('header.site');
  if(!target||!header)return;

  var bar=document.createElement('div');
  bar.className='pv-bar';
  bar.setAttribute('role','region');
  bar.setAttribute('aria-label','EdgeVerse survey invitation');
  bar.innerHTML='<span>Help shape EdgeVerse — a 6-minute anonymous survey for faculty and academic leaders.</span> <a href="survey.html">Share your perspective →</a><button type="button" aria-label="Dismiss survey invitation">×</button>';
  header.parentNode.insertBefore(bar,header);

  var pill=document.createElement('div');
  pill.className='pv-pill';
  pill.innerHTML='<a href="survey.html">Share your perspective</a><button type="button" aria-label="Dismiss">×</button>';
  document.body.appendChild(pill);

  function dismiss(){set();bar.remove();pill.remove();window.removeEventListener('scroll',onScroll);}
  bar.querySelector('button').addEventListener('click',dismiss);
  pill.querySelector('button').addEventListener('click',dismiss);

  var ticking=false;
  function update(){
    ticking=false;
    var doc=document.documentElement;
    var pct=(window.scrollY||doc.scrollTop)/Math.max(1,doc.scrollHeight-window.innerHeight);
    var r=target.getBoundingClientRect();
    var inView=r.top<window.innerHeight&&r.bottom>0;
    pill.classList.toggle('is-on',pct>0.4&&!inView);
  }
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(update);}}
  window.addEventListener('scroll',onScroll,{passive:true});
  update();
})();
