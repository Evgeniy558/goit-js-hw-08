var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var o=r("kEUo3");const l=document.querySelector("[name=email]"),n=document.querySelector("[name=message]"),s=document.querySelector(".feedback-form"),d=e=>JSON.parse(localStorage.getItem(e)),i={email:"",message:""};s.addEventListener("input",(0,o.throttle)((()=>{var e,t;i.email=l.value,i.message=n.value,e="feedback-form-state",t=i,localStorage.setItem(e,JSON.stringify(t))}),2e3)),s.addEventListener("submit",(e=>{console.log(i),localStorage.clear(),e.preventDefault(),s.reset()}));d("feedback-form-state")&&(l.value=d("feedback-form-state").email,n.value=d("feedback-form-state").message);
//# sourceMappingURL=03-feedback.db6e0e5d.js.map