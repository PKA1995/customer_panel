!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=9)}({10:function(e,t){({validate:function(){var e=document.getElementById("name"),t=document.getElementById("family"),n=document.getElementById("email"),r=document.getElementById("mobile"),l=(document.getElementById("password"),document.getElementById("edit-form")),o=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,i=[],u=/^[0-9]*$/;r.onkeypress=function(e){u.test(e.key)||8===e.keyCode||13===e.keyCode||16===e.keyCode||32===e.keyCode||e.preventDefault()},l.onsubmit=function(){return i=[],e.value.trim()?(e.nextElementSibling.textContent=null,e.classList.remove("error")):(e.nextElementSibling.textContent="الزامی است",e.classList.add("error"),i.push(!1)),t.value.trim()?(t.nextElementSibling.textContent=null,t.classList.remove("error")):(t.nextElementSibling.textContent="الزامی است",t.classList.add("error"),i.push(!1)),n.value.trim()?o.test(n.value.trim())?(n.nextElementSibling.textContent=null,n.classList.remove("error")):(n.nextElementSibling.textContent="نامعتبر است",n.classList.add("error"),i.push(!1)):(n.nextElementSibling.textContent="الزامی است",n.classList.add("error"),i.push(!1)),r.value.trim()?r.value.length<11?(r.nextElementSibling.textContent="11 رقم باشد",r.classList.add("error"),i.push(!1)):u.test(r.value.trim())?(r.nextElementSibling.textContent=null,r.classList.remove("error")):(r.nextElementSibling.textContent="نامعتبر است",r.classList.add("error"),i.push(!1)):(r.nextElementSibling.textContent="الزامی است",r.classList.add("error"),i.push(!1)),!i.includes(!1)}},init:function(){this.validate()}}).init()},9:function(e,t,n){e.exports=n(10)}});