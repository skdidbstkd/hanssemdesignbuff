// Index 전용 슬라이드
(function(){
  const slides = document.querySelectorAll('.hero .slide');
  if(!slides.length) return;
  let i=0;
  setInterval(()=>{
    slides.forEach((s,idx)=>s.classList.toggle('on', idx===i));
    i=(i+1)%slides.length;
  }, 4000);
})();
