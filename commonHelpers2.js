import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".feedback-form"),t={email:"",message:""};a.addEventListener("input",()=>{const e=new FormData(a);t.email=e.get("email").trim(),t.message=e.get("message").trim(),m("feedback-form-state",t)});function m(e,s){const o=JSON.stringify(s);localStorage.setItem(e,o)}function n(e){const s=localStorage.getItem(e);try{return JSON.parse(s)}catch{return s}}window.addEventListener("DOMContentLoaded",()=>{const e=n("feedback-form-state");a.elements.email.value=(e==null?void 0:e.email)||"",a.elements.message.value=(e==null?void 0:e.message)||""});a.addEventListener("submit",e=>{if(e.preventDefault(),t.email===""||t.message===""){alert("Fill please all fields");return}console.log(t),a.reset(),t.email="",t.message="",localStorage.removeItem("feedback-form-state")});
//# sourceMappingURL=commonHelpers2.js.map