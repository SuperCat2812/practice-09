import{r as c}from"./assets/refs-zsk1m86T.js";/* empty css                      */const u=()=>{const t=new Date,r=t.getHours(),o=t.getMinutes(),s=t.getSeconds();return`${e(r)} : ${e(o)} : ${e(s)}`},n=()=>{c.currentTime.textContent=u()};n();setInterval(()=>n(),1e3);function e(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=time-clock.js.map
