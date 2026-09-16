const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
if(menuToggle){
  menuToggle.addEventListener("click",()=>{
    const open=navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded",open);
  });
}
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const subject=encodeURIComponent(`Free sample request — ${data.get("business")}`);
  const body=encodeURIComponent(
`Hi AI Content Lab,

I'd like to request a free sample.

Name: ${data.get("name")}
Business: ${data.get("business")}
Business type: ${data.get("type")}

What I need:
${data.get("message") || "I'd like to discuss content for my business."}

Thanks.`
  );
  window.location.href=`mailto:info@aicontentlab.com?subject=${subject}&body=${body}`;
});
