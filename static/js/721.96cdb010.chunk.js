"use strict";(self.webpackChunktask_test_cars=self.webpackChunktask_test_cars||[]).push([[721],{8633:function(e,n,t){t.d(n,{Z:function(){return D}});var r=t(9439),s=t(9434),a=t(8820),i=t(5385),l=t(184),c=function(e){var n=e.locationData,t=e.carData,s=function(e,n){return"functionalities"===e?function(e){if(!e||0===e.length)return"";for(var n=e[0],t=1;t<e.length;t++){var r=e[t];r.split(" ").length<n.split(" ").length&&(n=r)}var s=n.split(" ");return s.length>3?s.slice(0,3).join(" "):n}(n):"type"===e?n.split(",")[0].trim():n};return(0,l.jsxs)("div",{children:[(0,l.jsx)("ul",{className:i.Z.listCard,children:n.map((function(e,t){return(0,l.jsxs)("li",{className:i.Z.itemCard,children:[e,t<n.length-1]},t)}))}),(0,l.jsx)("ul",{className:i.Z.listCard,children:Object.entries(t).map((function(e,n,t){var a=(0,r.Z)(e,2),c=a[0],o=a[1];return(0,l.jsxs)("li",{className:i.Z.itemCard,children:[s(c,o),n<t.length-1]},n)}))})]})},o=t.p+"static/media/DefaultImage.2f1dfdb3f92f50a95b90.jpeg",d=t(3558),u=t(4766),m=t(2791),_=t(4164),h=t(4373),f="Modal_backdrop__xTnIT",j="Modal_modal__DJDMv",x="Modal_image__PGSjp",p="Modal_buttonClose__5LpkD",v="Modal_iconClose__AUpu-",g="Modal_containerCard__VYMyg",N="Modal_titleCard__zed2q",b="Modal_titleAccent__N8b-c",C="Modal_listLocation__QaeWu",L="Modal_itemLocation__k1Sx3",Z="Modal_containerDescription__w8xjk",M="Modal_containerFunc__iivOd",y="Modal_titleFunc__HAgyd",F="Modal_listAcces__FLQM0",k="Modal_itemAcces__1Ppmv",P="Modal_listRental__iEL-h",I="Modal_itemRental__jZ-H1",S="Modal_itemAccent__7zPRR",w="Modal_linkModal__E3SjW",E=document.getElementById("modal"),q=function(e){var n=e.onClose,t=e.children,r=e.isOpen;(0,m.useEffect)((function(){document.body.style.overflow=r?"hidden":"visible"}),[r]);var s=(0,m.useCallback)((function(e){document.body.style.overflow="visible",function(e,n){var t=e.target,r=e.currentTarget,s=e.code;t!==r&&"Escape"!==s||n()}(e,n)}),[n]);return(0,m.useEffect)((function(){return document.body.addEventListener("keydown",s),function(){return document.body.removeEventListener("keydown",s)}}),[s]),(0,_.createPortal)((0,l.jsx)("div",{className:f,onClick:s,children:(0,l.jsxs)("div",{className:j,children:[(0,l.jsx)("button",{onClick:n,className:p,type:"button",children:(0,l.jsx)(h.QAE,{className:v})}),t]})}),E)},z=function(e){var n=e.car,t=n.year,r=n.make,s=n.model,a=n.img,i=n.rentalPrice,c=n.address,d=n.description,u=n.accessories,m=n.functionalities,_=n.rentalConditions,h=n.mileage,f=function(e){var n=e.fuelConsumption,t=e.engineSize;return["Fuel Consumption: ".concat(n),"Engine Size: ".concat(t)]}(n),j=function(e,n){var t=e.split(", "),r=t[1],s=t[t.length-1],a=n.year,i=n.type,l=n.id;return[r,s,"Id: ".concat(l),"Year: ".concat(a),"Type: ".concat(i)]}(c,n),p=function(e){var n=e.split("\n"),t=n[0].split(" ").slice(-1).join("");return n[0]=n[0].replace(t,""),n.splice(1,0,t),n}(_),v=h.toLocaleString("en-EN"),E=i.split("").slice(1).join("");return(0,l.jsxs)("div",{className:g,children:[(0,l.jsx)("img",{className:x,src:a||o,alt:"".concat(r," ").concat(s),width:"461",height:"248",loading:"lazy"}),(0,l.jsxs)("h2",{className:N,children:[r," ",(0,l.jsx)("span",{className:b,children:s}),", ",t]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("ul",{className:C,children:j.map((function(e,n){return(0,l.jsxs)("li",{className:L,children:[e,n<j.length-1]},n)}))}),(0,l.jsx)("ul",{className:C,children:f.map((function(e,n){return(0,l.jsxs)("li",{className:L,children:[e,n<j.length-1]},n)}))})]}),(0,l.jsx)("div",{className:Z,children:d}),(0,l.jsxs)("div",{className:M,children:[(0,l.jsx)("h3",{className:y,children:"Accessories and functionalities:"}),(0,l.jsx)("ul",{className:F,children:u.map((function(e,n){return(0,l.jsxs)("li",{className:k,children:[e,n<u.length-1]},n)}))}),(0,l.jsx)("ul",{className:F,children:m.map((function(e,n){return(0,l.jsxs)("li",{className:k,children:[e,n<u.length-1]},n)}))})]}),(0,l.jsxs)("div",{className:M,children:[(0,l.jsx)("h3",{className:y,children:"Rental Conditions:"}),(0,l.jsxs)("ul",{className:P,children:[(0,l.jsxs)("li",{className:I,children:[(0,l.jsx)("p",{children:p[0]}),(0,l.jsx)("span",{className:S,children:p[1]})]}),(0,l.jsx)("li",{className:I,children:(0,l.jsx)("p",{children:p[2]})}),(0,l.jsx)("li",{className:I,children:(0,l.jsx)("p",{children:p[3]})}),(0,l.jsxs)("li",{className:I,children:[(0,l.jsx)("p",{children:"Mileage: "}),(0,l.jsx)("span",{className:S,children:v})]}),(0,l.jsxs)("li",{className:I,children:[(0,l.jsx)("p",{children:"Price: "}),(0,l.jsx)("span",{className:S,children:"".concat(E,"$")})]})]})]}),(0,l.jsx)("a",{href:"tel:+380730000000",className:w,children:"Rental car"})]})},D=function(e){var n=e.car,t=(0,s.I0)(),_=(0,s.v9)(u.Tc),h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,m.useState)(e),t=(0,r.Z)(n,2),s=t[0],a=t[1],i=function(){return a(!0)},l=function(){return a(!1)},c=function(){return a((function(e){return!e}))};return{isOpen:s,open:i,close:l,toggle:c}}(!1),f=h.isOpen,j=h.open,x=h.close,p=null===_||void 0===_?void 0:_.some((function(e){return e.id===n.id})),v=function(e){var n=e.address,t=e.rentalCompany,r=n.split(", ");return[r[1],r[r.length-1],t]}(n),g=function(e){return{type:e.type,mileage:e.mileage,functionalities:e.functionalities}}(n);return(0,l.jsxs)("li",{className:i.Z.item,children:[(0,l.jsxs)("div",{className:i.Z.thumbImage,children:[(0,l.jsx)("button",{className:i.Z.buttonImage,type:"button",onClick:function(){return t(p?(0,d.zm)(n):(0,d.Im)(n))},children:(0,l.jsx)(a.M_L,{className:" ".concat(p?i.Z.iconHeart_favorite:i.Z.iconHeart)})}),(0,l.jsx)("img",{className:i.Z.image,src:n.img?n.img:o,alt:"".concat(n.make," ").concat(n.model),width:"274",height:"268",loading:"lazy"})]}),(0,l.jsxs)("h2",{className:i.Z.titleCard,children:[" ",(0,l.jsxs)("span",{children:[" ",n.make,"  ",(0,l.jsx)("span",{children:n.model}),", ",n.year]})," ",(0,l.jsx)("span",{className:i.Z.titlePart,children:n.rentalPrice})]}),(0,l.jsx)(c,{locationData:v,carData:g}),(0,l.jsx)("button",{className:i.Z.buttonCard,onClick:j,children:"Learn more"}),f&&(0,l.jsx)(q,{isOpen:f,onClose:x,children:(0,l.jsx)(z,{car:n})})]})}},3620:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(1413),s=t(9434),a=t(887),i=t(2791),l=t(3558),c=t(4766),o=t(3433),d=t(9439),u=t(2791),m=u.useState,_=u.useEffect,h={form:"Filter_form__wVnxJ",containerForm:"Filter_containerForm__mQLXu",select:"Filter_select__QmVYV",selectLabel:"Filter_selectLabel__dgCCC",selectBrand:"Filter_selectBrand__LpogC",buttonFilter:"Filter_buttonFilter__wqIs2",containerButton:"Filter_containerButton__IHlFD",containerPrice:"Filter_containerPrice__Hx84A",selectPrice:"Filter_selectPrice__XCn0+",containerSelect:"Filter_containerSelect__bLm+q",errorMessage:"Filter_errorMessage__CoJBz"},f=t(184),j=function(e){var n=e.cars,t=(0,s.v9)(c.AD),u=(0,s.I0)(),j=function(e){if(e.length){var n=0,t=[];e.forEach((function(e){var t=+e.rentalPrice.split("").slice(1).join("");t>n&&(n=t)}));for(var r=10;r<=n;)t.push(r),r+=10;return t}}(n),x=function(e,n){var t=m([]),r=(0,d.Z)(t,2),s=r[0],a=r[1];return _((function(){if(n){var t=(0,o.Z)(new Set(e.map((function(e){return e[n]}))));a(t)}}),[e,n]),s}(n,"make"),p=(0,a.cI)({mode:"onChange"}),v=p.register,g=p.handleSubmit,N=p.control,b=p.reset,C=p.formState.errors;(0,i.useEffect)((function(){b(t)}),[t,b]);return(0,f.jsx)("form",{onSubmit:g((function(e){u((0,l.Tv)(e))})),children:(0,f.jsxs)("div",{className:h.form,children:[(0,f.jsxs)("div",{className:h.containerForm,children:[(0,f.jsxs)("div",{className:h.select,children:[(0,f.jsx)("label",{htmlFor:"brand",className:h.selectLabel,children:"Car brand"}),(0,f.jsx)(a.Qr,{name:"brand",control:N,rules:{required:!0,message:"Brand is required"},render:function(e){var n=e.field;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("select",(0,r.Z)((0,r.Z)({},n),{},{className:h.selectBrand,children:[(0,f.jsx)("option",{value:"",className:h.selectPlaceholder,children:"Enter the text"}),x&&x.map((function(e,n){return(0,f.jsx)("option",{value:e,className:h.selectText,children:e},n)}))]})),C.brand&&(0,f.jsx)("p",{className:h.errorMessage,children:"required"===C.brand.type?"Brand is required":C.brand.message})]})}})]}),(0,f.jsxs)("div",{className:h.select,children:[(0,f.jsx)("label",{htmlFor:"price",className:h.selectLabel,children:"Price/ 1 hour"}),(0,f.jsx)("div",{children:(0,f.jsx)(a.Qr,{name:"price",control:N,rules:{required:!0,min:{value:0,message:"Must be 0 or greater"}},render:function(e){var n=e.field;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("select",(0,r.Z)((0,r.Z)({},n),{},{className:h.selectBrand,children:[(0,f.jsx)("option",{value:"",children:"To $"}),j&&j.map((function(e,n){return(0,f.jsx)("option",{value:e,children:e},n)}))]})),C.price&&(0,f.jsx)("p",{className:h.errorMessage,children:"required"===C.price.type?"Price is required":C.price.message})]})}})})]}),(0,f.jsxs)("div",{className:h.containerPrice,children:[(0,f.jsx)("label",{htmlFor:"minMileage",className:h.selectLabel,children:"Car mileage / km (from)"}),(0,f.jsxs)("div",{className:h.containerSelect,children:[(0,f.jsx)("label",{className:h.selectLabel,children:(0,f.jsx)("input",(0,r.Z)({type:"number",placeholder:"From",className:h.selectPrice},v("from",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"}})))}),(0,f.jsx)("label",{className:h.selectLabel,children:(0,f.jsx)("input",(0,r.Z)({type:"number",placeholder:"To",className:h.selectPrice},v("to",{required:"This field is required",min:{value:0,message:"Must be 0 or greater"},validate:function(e,n){var t=n.from;return parseInt(e)>parseInt(t)||"To must be greater than From"}})))}),(0,f.jsxs)("p",{className:h.errorMessage,children:[(null===C||void 0===C?void 0:C.from)&&(0,f.jsx)("span",{children:C.from.message}),(null===C||void 0===C?void 0:C.to)&&(0,f.jsx)("span",{children:C.to.message})]})]})]})]}),(0,f.jsxs)("div",{className:h.containerButton,children:[(0,f.jsx)("button",{type:"submit",className:h.buttonFilter,children:"Search"}),(0,f.jsx)("button",{type:"button",className:h.buttonFilter,onClick:function(){u((0,l.sx)()),b({brand:"",price:"",from:"",to:""})},children:"Reset"})]})]})})}},5222:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(2791),s=t(9434),a=t(7660),i=t(4766),l=t(3558),c=t(9439),o=t(8633),d=t(5385),u=t(184),m=function(e){var n,t,s=e.adverts,a=function(e){var n=(0,r.useState)(1),t=(0,c.Z)(n,2),s=t[0],a=t[1],i=(0,r.useState)(e);return[(0,c.Z)(i,1)[0],s,function(){return a((function(e){return e+1}))}]}(8),i=(0,c.Z)(a,3),l=i[0],m=i[1],_=i[2],h=l*m;return(0,u.jsxs)("div",{className:d.Z.containerCatalog,children:[(0,u.jsx)("ul",{className:d.Z.list,children:(n=s,t=h,null===n||void 0===n?void 0:n.slice(0,t)).map((function(e){return(0,u.jsx)(o.Z,{car:e},e.id)}))}),(null===s||void 0===s?void 0:s.length)>=h&&(0,u.jsx)("button",{className:d.Z.button,onClick:_,children:"Load more"})]})},_=t(3620),h=t(8699),f=function(){var e=(0,s.I0)(),n=(0,s.v9)(i.Wz),t=function(e,n){return n?e.filter((function(e){var t=parseInt(e.rentalPrice.substring(1)),r=parseFloat(e.mileage),s=!n.brand||e.make.toLowerCase()===n.brand.toLowerCase(),a=!n.price||t<=n.price,i=!n.from||r>=n.from,l=!n.to||r<=n.to,c=!n.rentalCompany||e.rentalCompany.toLowerCase()===n.rentalCompany.toLowerCase();return s&&a&&i&&l&&c})):e}(n,(0,s.v9)(i.AD));return(0,r.useEffect)((function(){e((0,a.t)())}),[e]),(0,r.useEffect)((function(){e((0,l.Tv)(null))}),[e]),(0,u.jsxs)("div",{className:h.Z.container,children:[(0,u.jsx)(_.Z,{cars:t}),(null===n||void 0===n?void 0:n.length)>0&&(0,u.jsx)(m,{adverts:t})]})}},4766:function(e,n,t){t.d(n,{AD:function(){return a},Tc:function(){return s},Wz:function(){return r}});var r=function(e){return e.cars.items},s=function(e){return e.cars.favorites},a=function(e){return e.cars.filter}},5385:function(e,n){n.Z={containerCatalog:"CarsList_containerCatalog__klDmo",list:"CarsList_list__CjSQY",button:"CarsList_button__OHdZY",item:"CarsList_item__UxzUF",thumbImage:"CarsList_thumbImage__6QjSI",buttonImage:"CarsList_buttonImage__rRzCi",iconHeart:"CarsList_iconHeart__M9ICc",iconHeart_favorite:"CarsList_iconHeart_favorite__oFdYk",image:"CarsList_image__XQzuG",buttonCard:"CarsList_buttonCard__6zQVo",listCard:"CarsList_listCard__gjs5U",itemCard:"CarsList_itemCard__hjNes",titleCard:"CarsList_titleCard__Jq4yL",titlePart:"CarsList_titlePart__uiGY7"}},8699:function(e,n){n.Z={container:"CatalogPage_container__w3ZO8"}}}]);
//# sourceMappingURL=721.96cdb010.chunk.js.map