import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h}from"./assets/vendor-EyZmBGcZ.js";const n=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]"),r=document.getElementById("datetime-picker");let u=null,c=null;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<new Date?(iziToast.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(u=t,n.disabled=!1)}};h(r,C);function s(e){return String(e).padStart(2,"0")}function D(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}function d({days:e,hours:t,minutes:o,seconds:a}){y.textContent=s(e),p.textContent=s(t),S.textContent=s(o),b.textContent=s(a)}function T(){c=setInterval(()=>{const t=u-new Date;if(t<=0){clearInterval(c),d({days:0,hours:0,minutes:0,seconds:0}),iziToast.success({title:"Success",message:"Countdown finished!"}),r.disabled=!1,n.disabled=!0;return}const o=D(t);d(o)},1e3),n.disabled=!0,r.disabled=!0}n.addEventListener("click",T);
//# sourceMappingURL=1-timer.js.map
