(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,'* {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: "Montserrat", sans-serif;\r\n}\r\n\r\ninput {\r\n    cursor: pointer;\r\n}\r\n\r\nh1 {\r\n    cursor: pointer;\r\n}\r\n\r\nh2 {\r\n    cursor: pointer;\r\n}\r\n\r\nh3 {\r\n    cursor: pointer;\r\n}\r\n\r\n.header {\r\n    width: 100%;\r\n    height: 130px;\r\n    background-color: rgb(0, 0, 0);\r\n    display: flex;\r\n    font-weight: 600;\r\n    font-size: 30px;\r\n    color: white;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.main-buttoms {\r\n    width: 100%;\r\n    height: 80px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n.main-buttoms input {\r\n    border-style: none;\r\n    width: 150px;\r\n    height: 50px;\r\n    background-color: black;\r\n    color: white;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.main-buttoms input:hover {\r\n    color: black;\r\n    background-color: white;\r\n    transform: scale(1.05);\r\n    transition: 0.3s ease all;\r\n    border: 2px solid rgb(0, 0, 0);\r\n    font-weight: 600;\r\n}\r\n\r\n.boxTodosMain {\r\n    width: 75%;\r\n    height: 100vh;\r\n    background-color: black;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.boxesMain {\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    width: 49%;\r\n    height: 98%;\r\n    background-color: white;\r\n}\r\n\r\n.boxProjects {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n}\r\n\r\n.boxProjects h1 {\r\n    margin: 50px;\r\n    font-size: 60px;\r\n}\r\n\r\n.buttoms {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    width: 30%;\r\n}\r\n\r\n.titleProjects {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.overlay {\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    visibility: hidden;\r\n}\r\n\r\n.overlay.active {\r\n    visibility: visible;\r\n    transform: scale(1.1);\r\n    transition: 0.3s ease all;\r\n}\r\n\r\n.popup {\r\n    background-color: white;\r\n    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);\r\n    border-radius: 15px;\r\n    padding: 20px;\r\n    text-align: center;\r\n    width: 650px;\r\n    transition: 0.3s ease all;\r\n    transform: scale(0.7);\r\n    opacity: 0;\r\n}\r\n\r\n.popup.active {\r\n    transform: scale(1.05);\r\n    transition: 0.3s ease all;\r\n    opacity: 1;\r\n}\r\n\r\n.popup .cerrarPopup {\r\n    font-size: 16px;\r\n    line-height: 16px;\r\n    display: block;\r\n    text-align: right;\r\n    color: rgb(128, 120, 120);\r\n    transition: 0.1s ease all;\r\n}\r\n.popup .cerrarPopup:hover {\r\n    color: black;\r\n}\r\n\r\n.popup h3 {\r\n    font-size: 36px;\r\n    font-weight: 600;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.popup h4 {\r\n    font-size: 26px;\r\n    font-weight: 300;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.popup form .contenedor-inputs h4 {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.popup form .contenedor-inputs input {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    height: 52px;\r\n    line-height: 52px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    border: 1px solid black;\r\n    border-radius: 25px;\r\n}\r\n\r\n.popup form .contenedor-inputs select {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    height: 52px;\r\n    line-height: 52px;\r\n    font-size: 22px;\r\n    border: 1px solid black;\r\n    border-radius: 25px;\r\n}\r\n\r\n.popup form .btn-añadir {\r\n    font-weight: bold;\r\n    width: 150px;\r\n    border-radius: 50px;\r\n    padding: 0 20px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    border: none;\r\n    color: rgb(0, 0, 0);\r\n    background-color: white;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.popup form .btn-añadir:hover {\r\n    background: black;\r\n    color: white;\r\n}\r\n\r\n.muestra {\r\n    width: 80%;\r\n    height: 150px;\r\n    margin: 0 auto;\r\n    margin-top: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.muestra h3 {\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.muestra input {\r\n    margin-top: 10px;\r\n}\r\n\r\n.muestra p {\r\n    margin: 10px;\r\n}\r\n\r\n.muestra.one {\r\n    background-color: #f72585;\r\n    color: white;\r\n}\r\n\r\n.muestra.two {\r\n    background-color: #3a0ca3;\r\n    color: white;\r\n}\r\n\r\n.muestra.three {\r\n    background-color: #4cc9f0;\r\n}\r\n\r\n.btnTareas {\r\n    border-style: none;\r\n    width: 150px;\r\n    height: 25px;\r\n    color: black;\r\n    background-color: white;\r\n    font-weight: 500;\r\n}\r\n\r\n.btnProjects {\r\n    border-style: none;\r\n    width: 150px;\r\n    height: 25px;\r\n    color: black;\r\n    background-color: white;\r\n    font-weight: 500;\r\n}\r\n\r\n.delete {\r\n    margin-right: 10px;\r\n}\r\n\r\n.delete:hover {\r\n    background-color: red;\r\n    color: white;\r\n    font-weight: 600;\r\n}\r\n\r\n.doya:hover {\r\n    background-color: green;\r\n    color: white;\r\n    font-weight: 600;\r\n}\r\n',""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:u,updater:o(m,r),references:1}),i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var c=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),d=n(565),c=n.n(d),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const v=document.querySelector(".main"),b=document.querySelector(".main");let f=[],x=[];function y(e,t,n,r){const o=document.querySelector("#pendientesMain"),a=document.querySelector("#realizadasMain");console.log(o.childNodes),this.title=e,this.description=t,this.date=n,this.priority=r;let i=document.createElement("div"),d=document.createElement("h3"),c=document.createElement("p"),s=document.createElement("p"),l=document.createElement("input"),u=document.createElement("input");return d.textContent=this.title,c.textContent=this.description,s.textContent=this.date,l.value="Eliminar",l.type="button",u.value="Completado",u.type="button",i.classList.add("muestra"),l.classList.add("btnTareas","delete"),u.classList.add("btnTareas","doya"),1==this.priority?i.classList.add("one"):2==this.priority?i.classList.add("two"):i.classList.add("three"),l.addEventListener("click",(()=>{i.remove()})),u.addEventListener("click",(()=>{i.append(d,c,s,l,u),i.removeChild(u),a.appendChild(i),f.push(i),console.log(f)})),i.append(d,c,s,l,u),o.appendChild(i),i}function g(e,t,n,r){this.title=e,this.description=t,this.date=n,this.priority=r;const o=document.querySelector("#cajaPendientes"),a=document.querySelector("#cajaRealizados");let i=document.createElement("div"),d=document.createElement("h3"),c=document.createElement("p"),s=document.createElement("p"),l=document.createElement("input"),u=document.createElement("input");i.addEventListener("click",(()=>{!function(e,t){let n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("h1"),i=document.createElement("p"),d=document.createElement("input"),c=document.createElement("input"),s=document.createElement("input");d.type="button",d.value="Editar",c.type="button",c.value="Completado",s.type="button",s.value="Volver",a.textContent=e,i.textContent=t,o.classList.add("buttoms"),r.classList.add("titleProjects"),o.append(d,c,s),r.append(a,o),n.append(r,i),v.appendChild(n),w()}(this.title,this.description)})),d.textContent=this.title,c.textContent=this.description,s.textContent=this.date,l.value="Eliminar",l.type="button",u.value="Completado",u.type="button",i.classList.add("muestra"),l.classList.add("btnProjects","delete"),u.classList.add("btnProjects","doya"),1==this.priority?i.classList.add("one"):2==this.priority?i.classList.add("two"):i.classList.add("three"),l.addEventListener("click",(()=>{i.remove()})),u.addEventListener("click",(()=>{i.append(d,c,s,l,u),i.removeChild(u),a.appendChild(i),x.push(i),console.log(x)})),i.append(d,c,s,l,u),o.appendChild(i)}const E=document.querySelector(".main");let L=[],C=[];function w(){let e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("h2"),i=document.createElement("h2");a.textContent="Pendiente",i.textContent="Realizado",t.textContent="Tareas",r.classList.add("boxesMain"),r.setAttribute("id","pendientesMain"),o.classList.add("boxesMain"),o.setAttribute("id","realizadasMain"),n.classList.add("boxTodosMain"),e.classList.add("boxProjects"),r.appendChild(a),o.appendChild(i),n.append(r,o),e.append(t,n),E.appendChild(e)}!function(){let e=document.createElement("div"),t=document.createElement("h1");t.textContent="TODO List",e.classList.add("header"),e.appendChild(t),E.appendChild(e)}(),function(){let e=document.createElement("div"),t=document.createElement("input"),n=document.createElement("input");t.type="button",t.value="Añadir Tarea",t.setAttribute("id","addItem"),n.type="button",n.value="Añadir Proyecto",n.setAttribute("id","addProjects"),e.classList.add("main-buttoms"),e.append(t,n),E.appendChild(e)}(),w(),function(){let e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("h2"),i=document.createElement("h2");t.textContent="Proyectos",a.textContent="Pendientes",i.textContent="Realizados",e.classList.add("boxProjects"),n.classList.add("boxTodosMain"),r.classList.add("boxesMain"),r.setAttribute("id","cajaPendientes"),o.classList.add("boxesMain"),o.setAttribute("id","cajaRealizados"),r.appendChild(a),o.appendChild(i),n.append(r,o),e.append(t,n),E.appendChild(e)}(),document.querySelector("#addItem").addEventListener("click",(()=>{E.childNodes[4]&&E.removeChild(E.childNodes[4]),function(e,t){let n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("i"),i=document.createElement("h3"),d=document.createElement("form"),c=document.createElement("div"),s=document.createElement("input"),l=document.createElement("input"),u=document.createElement("input"),p=document.createElement("select"),m=document.createElement("option"),h=document.createElement("option"),v=document.createElement("option"),f=document.createElement("input");i.textContent="Añadir Nueva Tarea",n.classList.add("overlay"),r.classList.add("popup"),o.classList.add("cerrarPopup"),a.classList.add("fas","fa-times"),c.classList.add("contenedor-inputs"),f.classList.add("btn-añadir"),f.type="button",f.value="Añadir",s.type="text",s.placeholder="Tarea",s.setAttribute("id","titleItem"),l.type="text",l.placeholder="Añade una descripción",l.setAttribute("id","descriptionItem"),u.type="date",u.setAttribute("id","dueDate"),p.name="combo",p.setAttribute("id","priorityItem"),m.value="1",m.textContent="Prioridad: Alta",m.setAttribute("id","optionOne"),h.value="2",h.textContent="Prioridad: Media",h.setAttribute("id","optionTwo"),v.value="3",v.textContent="Prioridad: Baja",v.setAttribute("id","optionThree"),p.append(m,h,v),c.append(s,l,u,p),d.append(c,f),o.appendChild(a),r.append(o,i,d),n.appendChild(r),b.appendChild(n)}();let e=document.querySelector(".cerrarPopup"),t=document.querySelector(".overlay"),n=document.querySelector(".popup"),r=document.querySelector(".btn-añadir"),o=document.querySelector("#titleItem"),a=document.querySelector("#descriptionItem"),i=document.querySelector("#dueDate"),d=document.querySelector("#priorityItem");t.classList.add("active"),n.classList.add("active"),e.addEventListener("click",(()=>{t.classList.remove("active"),n.classList.remove("active")})),r.addEventListener("click",(()=>{""==o.value||""==a.value||""==i.value?alert("Llena todos los campos por favor"):(t.classList.remove("active"),n.classList.remove("active"),function(e,t,n,r){let o=new y(e,t,n,r);L.push(o)}(o.value,a.value,i.value,d.value))}))})),document.querySelector("#addProjects").addEventListener("click",(()=>{E.childNodes[4]&&E.removeChild(E.childNodes[4]),function(e,t){let n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("i"),i=document.createElement("h3"),d=document.createElement("form"),c=document.createElement("div"),s=document.createElement("input"),l=document.createElement("input"),u=document.createElement("input"),p=document.createElement("select"),m=document.createElement("option"),h=document.createElement("option"),v=document.createElement("option"),f=document.createElement("input");i.textContent="Añadir Nuevo Proyecto",n.classList.add("overlay"),r.classList.add("popup"),o.classList.add("cerrarPopup"),a.classList.add("fas","fa-times"),c.classList.add("contenedor-inputs"),f.classList.add("btn-añadir"),f.type="button",f.value="Añadir",s.type="text",s.placeholder="Proyecto",s.setAttribute("id","titleProject"),l.type="text",l.placeholder="Añade una descripción",l.setAttribute("id","descriptionProject"),u.type="date",u.setAttribute("id","dueDateProject"),p.name="combo",p.setAttribute("id","priorityProjects"),m.value="1",m.textContent="Prioridad: Alta",m.setAttribute("id","optionOneProject"),h.value="2",h.textContent="Prioridad: Media",h.setAttribute("id","optionTwoProject"),v.value="3",v.textContent="Prioridad: Baja",v.setAttribute("id","optionThreeProject"),p.append(m,h,v),c.append(s,l,u,p),d.append(c,f),o.appendChild(a),r.append(o,i,d),n.appendChild(r),b.appendChild(n)}();let e=document.querySelector(".cerrarPopup"),t=document.querySelector(".overlay"),n=document.querySelector(".popup"),r=document.querySelector(".btn-añadir"),o=document.querySelector("#titleProject"),a=document.querySelector("#descriptionProject"),i=document.querySelector("#dueDateProject"),d=document.querySelector("#priorityProjects");t.classList.add("active"),n.classList.add("active"),e.addEventListener("click",(()=>{t.classList.remove("active"),n.classList.remove("active")})),r.addEventListener("click",(()=>{""==o.value||""==a.value||""==i.value?alert("Llena todos los campos por favor"):(t.classList.remove("active"),n.classList.remove("active"),function(e,t,n,r){let o=new g(e,t,n,r);C.push(o)}(o.value,a.value,i.value,d.value))}))}))})()})();