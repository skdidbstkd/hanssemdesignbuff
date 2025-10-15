// 필터
const btns=[...document.querySelectorAll('.filters button')];
const cards=[...document.querySelectorAll('.grid .card')];
btns.forEach(b=>b.onclick=()=>{
  btns.forEach(x=>x.classList.remove('active')); b.classList.add('active');
  const f=b.dataset.filter; cards.forEach(c=>{
    c.style.display=(f==='all'||c.dataset.cat===f)?'block':'none';
  });
});

// 슬라이드
let s=1; const slides=[...document.querySelectorAll('.slide')];
setInterval(()=>{slides.forEach((el,i)=>el.classList.toggle('on', i===s)); s=(s+1)%slides.length;}, 4000);

// 상담신청: 메일로 열기
document.getElementById('consultForm')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const f = new FormData(e.target);
  const body =
`성함: ${f.get('name')||''}
연락처: ${f.get('phone')||''}
주소지: ${f.get('address')||''}
희망 품목: ${f.getAll('items').join(', ')}
예산: ${f.get('budget')||''}
희망 일정: ${f.get('date')||''}
요청사항:
${f.get('notes')||''}`;
  location.href = `mailto:skdidbstkd@naver.com?subject=${encodeURIComponent('[상담신청] 한샘 리하우스 디자인버프')}&body=${encodeURIComponent(body)}`;
});
