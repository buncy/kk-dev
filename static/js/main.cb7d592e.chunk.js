(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{77:function(n,e,t){"use strict";t.r(e);var r,a,i=t(1),o=t(33),c=t.n(o),s=t(23),l=t(17),d=t(9),m=t(10),b=t(0),p=m.b.div(r||(r=Object(d.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function h(n){var e=n.heading,t=void 0===e?"Col Heading":e,r=n.links,a=void 0===r?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:r;return Object(b.jsxs)(p,{children:[Object(b.jsx)("h2",{className:"heading",children:t}),Object(b.jsx)("ul",{children:a.map((function(n,e){return Object(b.jsx)("li",{children:"Link"===n.type?Object(b.jsx)(s.b,{to:n.path,children:n.title}):Object(b.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var j,x=m.b.div(a||(a=Object(d.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function u(n){var e=n.children;return Object(b.jsx)(x,{className:"para",children:Object(b.jsx)("p",{children:e})})}var g=m.b.div(j||(j=Object(d.a)(["\n  background-color: var(--deep-dark);\n  padding-top: 10rem;\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer__col1 {\n    flex: 2;\n  }\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n  .footer__col1__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function f(){return Object(b.jsxs)(g,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"footer__col1",children:[Object(b.jsx)("h1",{className:"footer__col1__title",children:"Karthik Bokkesam"}),Object(b.jsx)(u,{children:"A Full-stack developer."})]}),Object(b.jsx)("div",{className:"footer__col2",children:Object(b.jsx)(h,{heading:"Important Links",links:[{title:"Home",path:"/",type:"Link"},{type:"Link",title:"About",path:"/about"},{type:"Link",title:"Projects",path:"/projects"},{type:"Link",title:"Contact",path:"/contact"}]})}),Object(b.jsx)("div",{className:"footer__col3",children:Object(b.jsx)(h,{heading:"Contact Info",links:[{title:"+91 7522990194",path:"tel:+917522990194"},{title:"kbokkesam@gmail.com",path:"mailto:kbokkesam@gmail.com"},{title:"Pune, Maharashtra, India",path:"https://www.google.com/maps/place/Pune,+Maharashtra/@18.5247663,73.792928,12z/data=!3m1!4b1!4m5!3m4!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437"}]})}),Object(b.jsx)("div",{className:"footer__col4",children:Object(b.jsx)(h,{heading:"social Links",links:[{title:"Facebook",path:"http://facebook.com"},{title:"Twitter",path:"http://twitter.com"},{title:"Instagram",path:"http://instagram.com"}]})})]}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(u,{children:["\xa9 2021 - Designed By"," ",Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"#",children:"Karthik Bokkesam"})," "]})})})]})}var _,O,v=t(14),y=t(19),w=m.b.nav(_||(_=Object(d.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function k(){var n=Object(i.useState)(!1),e=Object(v.a)(n,2),t=e[0],r=e[1];return Object(b.jsxs)(w,{children:[Object(b.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:Object(b.jsx)(y.h,{})}),Object(b.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(b.jsx)("div",{className:"closeNavIcon",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:Object(b.jsx)(y.c,{})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/",exact:!0,onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/about",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/projects",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Projects"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/contact",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Contact"})})]})]})}function N(){var n=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var I=m.b.div(O||(O=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"}));function z(n){var e=n.btnText,t=void 0===e?"test":e,r=n.btnLink,a=void 0===r?"test":r,i=n.outline,o=void 0!==i&&i;return Object(b.jsx)(I,{outline:o,className:"button-wrapper",children:Object(b.jsx)(s.b,{className:"button",to:a,children:t})})}var M,S,B=t.p+"static/media/about-page-img.9c8789a0.png",L=m.b.div(M||(M=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  /* gap: 5rem; */\n  margin-top: 3rem;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 18rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"])));function C(n){var e=n.title,t=void 0===e?"Title":e,r=n.items,a=void 0===r?["HTML","CSS"]:r;return Object(b.jsxs)(L,{children:[Object(b.jsx)("h1",{className:"title",children:t}),Object(b.jsx)("div",{className:"items",children:a.map((function(n,e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(u,{children:n})},e)}))})]})}var F,R=m.b.div(S||(S=Object(d.a)(["\n  padding: 5rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"])));function A(){return Object(b.jsx)(R,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(b.jsx)(u,{children:"Have a project in mind"}),Object(b.jsx)("h3",{className:"contactBanner__heading",children:"Let me help you"}),Object(b.jsx)(z,{btnText:"Contact Now",btnLink:"/contact"})]})})})}var D,T=m.b.div(F||(F=Object(d.a)(["\n  padding: 20rem 0 10rem 0;\n\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"])));function P(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(T,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"top-section",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsxs)("p",{className:"about__subheading",children:["Hi, I am ",Object(b.jsx)("span",{children:"Karthik Bokkesam"})]}),Object(b.jsx)("h2",{className:"about__heading",children:"A full-stack developer"}),Object(b.jsx)("div",{className:"about__info",children:Object(b.jsx)(u,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})}),Object(b.jsx)(z,{btnText:"Download CV",btnLink:"#"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("img",{src:B,alt:"me"})})]}),Object(b.jsxs)("div",{className:"about__info__items",children:[Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),Object(b.jsx)(C,{title:"FrontEnd",items:["HTML","CSS","JavaScript","REACT"]}),Object(b.jsx)(C,{title:"BackEnd",items:["Node","Express","PHP"]}),Object(b.jsx)(C,{title:"Design",items:["Photoshop","Figma"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Experiences"}),Object(b.jsx)(C,{title:"2010-2012",items:["junior developer at"]}),Object(b.jsx)(C,{title:"2012-2016",items:["Front end developer at"]}),Object(b.jsx)(C,{title:"2016-",items:["Freelance web Developer"]})]})]})]}),Object(b.jsx)(A,{})]})})}var E,H=m.b.form(D||(D=Object(d.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n"])));function K(){var n=Object(i.useState)(""),e=Object(v.a)(n,2),t=e[0],r=e[1],a=Object(i.useState)(""),o=Object(v.a)(a,2),c=o[0],s=o[1],l=Object(i.useState)(""),d=Object(v.a)(l,2),m=d[0],p=d[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(H,{children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"name",children:["Your Name",Object(b.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(n){return r(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"email",children:["Your Email",Object(b.jsx)("input",{type:"email",id:"email",name:"email",value:c,onChange:function(n){return s(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"message",children:["Your message",Object(b.jsx)("textarea",{type:"text",id:"message",name:"message",value:m,onChange:function(n){return p(n.target.value)}})]})}),Object(b.jsx)("button",{type:"submit",children:"Send"})]})})}var Y,G=m.b.div(E||(E=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function J(n){var e=n.icon,t=void 0===e?Object(b.jsx)(y.j,{}):e,r=n.text,a=void 0===r?"I need text ":r;return Object(b.jsxs)(G,{children:[Object(b.jsx)("div",{className:"icon",children:t}),Object(b.jsx)("div",{className:"info",children:Object(b.jsx)(u,{children:a})})]})}var U,V=m.b.div(Y||(Y=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function W(n){var e=n.subheading,t=void 0===e?"Need Subheading":e,r=n.heading,a=void 0===r?"need heading":r;return Object(b.jsxs)(V,{className:"section-title",children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("h2",{children:a})]})}var q=m.b.div(U||(U=Object(d.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function Q(){return Object(b.jsx)(q,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(W,{heading:"contact",subheading:"get in touch"}),Object(b.jsxs)("div",{className:"contactSection__wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)(J,{icon:Object(b.jsx)(y.g,{}),text:"+91 7522990194"}),Object(b.jsx)(J,{icon:Object(b.jsx)(y.f,{}),text:"kbokkesam@gmail.com"}),Object(b.jsx)(J,{text:"Pune, India"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)(K,{})})]})]})})}var X;t.p,m.b.div(X||(X=Object(d.a)(["\n  background-color:var(--deep-dark);\n  background-position: center;\n  background-size: cover;\n  min-height: 400px;\n  .container {\n    position: relative;\n    min-height: 400px;\n  }\n  .map__card {\n    position: absolute;\n    right: 10%;\n    bottom: 10%;\n    padding: 2rem;\n    background: var(--deep-dark);\n    width: 100%;\n    max-width: 300px;\n    border-radius: 12px;\n  }\n  .map__card__heading {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n  .map__card__link {\n    display: inline-block;\n    font-size: 1.6rem;\n    margin-top: 3rem;\n    text-decoration: underline;\n  }\n  @media only screen and (max-width: 768px) {\n    background-position: 80% center;\n  }\n  @media only screen and (max-width: 400px) {\n    .map__card {\n      max-width: none;\n      right: auto;\n    }\n  }\n"])));function Z(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Q,{})})}var $,nn,en=t.p+"static/media/about-sec-img.dc869837.png",tn=m.b.div($||($=Object(d.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function rn(){return Object(b.jsx)(tn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"aboutSection__left",children:[Object(b.jsx)(W,{subheading:"Let me introduce myself",heading:"About Me"}),Object(b.jsx)(u,{children:"I am a full-stack developer."}),Object(b.jsxs)("div",{className:"aboutSection__buttons",children:[Object(b.jsx)(z,{btnText:"Works",btnLink:"/projects"}),Object(b.jsx)(z,{btnText:"Read More",btnLink:"/about",outline:!0})]})]}),Object(b.jsx)("div",{className:"aboutSection__right",children:Object(b.jsx)("img",{className:"aboutImg",src:en,alt:"Img"})})]})})}var an;m.b.div(nn||(nn=Object(d.a)(["\n  text-align: center;\n  .servicesItem__icon {\n    svg {\n      width: 3rem;\n    }\n  }\n  .servicesItem__title {\n    font-size: 2.5rem;\n    font-family: 'Montserrat SemiBold';\n  }\n  .para {\n    margin-top: 2rem;\n  }\n"])));m.b.div(an||(an=Object(d.a)(["\n  padding: 10rem 0;\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"])));t(85),t(82);var on,cn=t(84),sn=t(81),ln=t.p+"static/media/projectImg.771236e1.png",dn=m.b.div(on||(on=Object(d.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function mn(n){var e=n.img,t=void 0===e?ln:e,r=n.title,a=void 0===r?"Project Name":r,i=n.desc,o=void 0===i?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":i;return Object(b.jsxs)(dn,{children:[Object(b.jsx)(s.b,{to:"/projects",className:"projectItem__img",children:Object(b.jsx)("img",{src:t,alt:"project img"})}),Object(b.jsxs)("div",{className:"projectItem__info",children:[Object(b.jsx)(s.b,{to:"#",children:Object(b.jsx)("h3",{className:"projectItem__title",children:a})}),Object(b.jsx)("p",{className:"projectItem__desc",children:o})]})]})}t(73);var bn,pn=t(86),hn=t.p+"static/media/utracker.be1fe64a.jpg",jn=t.p+"static/media/greenctg.e51b3bbd.jpg",xn=t.p+"static/media/cointracker.8da9e0cd.jpg",un=t.p+"static/media/cavinimg.77adeaa3.jpg",gn=[{id:Object(pn.a)(),name:"U Tracker",desc:"An application to track your all data from one place. I developed the website and the mobile app",img:hn},{id:Object(pn.a)(),name:"Green CTG",desc:"An app to help people to get an overview of how they can make the city beautiful.",img:jn},{id:Object(pn.a)(),name:"Coin Tracker",desc:"Using this app you can track any e coin. Also you will get a good advise about investment form the professional",img:xn},{id:Object(pn.a)(),name:"Cavin's Portfolio",desc:"A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.",img:un},{id:Object(pn.a)(),name:"Tracking Soft",desc:"A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.",img:ln}];cn.a.use([sn.a]);m.b.div(bn||(bn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"])));var fn;t(83),t(87),m.b.div(fn||(fn=Object(d.a)(["\n  overflow-x: hidden;\n  padding: 10rem 0;\n  text-align: center;\n  .testimonial__wrapper {\n    position: relative;\n    max-width: 700px;\n    margin: 0 auto;\n  }\n  .testimonial__info {\n    width: 100%;\n    height: fit-content;\n    padding: 3rem;\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    margin-top: 5rem;\n  }\n  .testimonial__desc {\n    .para {\n      text-align: center;\n    }\n  }\n  .testimonial__name {\n    margin-top: 4rem;\n    font-family: 'Montserrat Bold';\n    font-size: 2.2rem;\n  }\n  .testimonial__title {\n    font-size: 1.6rem;\n    margin-top: 0.3rem;\n  }\n  .arrows {\n    margin-top: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg {\n      width: 30px;\n      pointer-events: none;\n    }\n    .next,\n    .prev {\n      margin: 0 0.5rem;\n      width: fit-content;\n      background-color: var(--deep-dark);\n      padding: 0.5rem 2rem;\n      border-radius: 8px;\n      cursor: pointer;\n    }\n  }\n  .fade-enter {\n    opacity: 0;\n    transform: scale(0.96);\n    z-index: 1;\n  }\n  .fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: 250ms ease-in;\n    transition-property: transform, opacity;\n    z-index: 1;\n  }\n  .fade-exit {\n    transform: scale(1);\n    opacity: 1;\n  }\n  .fade-exit-active {\n    opacity: 0;\n    transform: scale(0.96);\n    transition: 200ms ease-in;\n    transition-property: transform, opacity;\n  }\n"])));var _n=t(37),On=t(15);function vn(n){var e=n.count,t=n.mouse,r=Object(i.useRef)(),a=Object(i.useRef)(),o=Object(_n.c)(),c=o.size,s=o.viewport,l=c.width/s.width,d=Object(i.useMemo)((function(){return new On.Object3D}),[]),m=Object(i.useMemo)((function(){for(var n=[],t=0;t<e;t++){var r=100*Math.random(),a=20+100*Math.random(),i=.001+Math.random()/200,o=100*Math.random()-50,c=100*Math.random()-50,s=100*Math.random()-50;n.push({t:r,factor:a,speed:i,xFactor:o,yFactor:c,zFactor:s,mx:0,my:0})}return n}),[e]);return Object(_n.b)((function(n){a.current.position.set(t.current[0]/l,-t.current[1]/l,0),m.forEach((function(n,e){var a=n.t,i=n.factor,o=n.speed,c=n.xFactor,s=n.yFactor,l=n.zFactor;a=n.t+=o/2;var m=Math.cos(a)+Math.sin(1*a)/10,b=Math.sin(a)+Math.cos(2*a)/10,p=Math.cos(a);n.mx+=.01*(t.current[0]-n.mx),n.my+=.01*(-1*t.current[1]-n.my),d.position.set(n.mx/10*m+c+Math.cos(a/10*i)+Math.sin(1*a)*i/10,n.my/10*b+s+Math.sin(a/10*i)+Math.cos(2*a)*i/10,n.my/10*b+l+Math.cos(a/10*i)+Math.sin(3*a)*i/10),d.scale.set(p,p,p),d.rotation.set(5*p,5*p,5*p),d.updateMatrix(),r.current.setMatrixAt(e,d.matrix)})),r.current.instanceMatrix.needsUpdate=!0})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("pointLight",{ref:a,distance:40,intensity:8,color:"lightblue"}),Object(b.jsxs)("instancedMesh",{ref:r,args:[null,null,e],children:[Object(b.jsx)("dodecahedronGeometry",{args:[.2,0]}),Object(b.jsx)("meshPhongMaterial",{color:"#050505"})]})]})}var yn,wn,kn=t.p+"static/media/hero.67448392.png",Nn=t.p+"static/media/social-media-arrow.f5e093ce.svg",In=t.p+"static/media/scroll-down-arrow.b013ca45.svg",zn=m.b.div(yn||(yn=Object(d.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    margin-top: -18rem;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 750px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero__img {\n      height: 300px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function Mn(){var n=Object(i.useState)(!1),e=Object(v.a)(n,2),t=e[0],r=(e[1],Object(i.useRef)([0,0])),a=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);return Object(i.useEffect)((function(){document.body.style.cursor=t?"pointer":"url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 39 39, auto"}),[t]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(_n.a,{className:"hero-canvas",style:{position:"absolute"},children:Object(b.jsx)(vn,{count:a?5e3:7e3,mouse:r})}),Object(b.jsx)(zn,{className:"hero-styles",children:Object(b.jsx)("div",{className:"hero",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"hero__heading",children:[Object(b.jsx)("span",{children:"Hello, This is"}),Object(b.jsx)("span",{className:"hero__name",children:"Karthik Bokkesam"})]}),Object(b.jsx)("div",{className:"hero__img",children:Object(b.jsx)("img",{src:kn,alt:""})}),Object(b.jsxs)("div",{className:"hero__info",children:[Object(b.jsx)(u,{children:"I have been working as a Full-stack developer for 2 years."}),Object(b.jsx)(z,{btnText:"see my works",btnLink:"/projects"})]}),Object(b.jsxs)("div",{className:"hero__social",children:[Object(b.jsxs)("div",{className:"hero__social__indicator",children:[Object(b.jsx)("p",{children:"Follow"}),Object(b.jsx)("img",{src:Nn,alt:"icon"})]}),Object(b.jsx)("div",{className:"hero__social__text",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/karthik-bokkesam/",target:"_blank",rel:"noreferrer",children:"LI"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://github.com/buncy",target:"_blank",rel:"noreferrer",children:"GH"})})]})})]}),Object(b.jsxs)("div",{className:"hero__scrollDown",children:[Object(b.jsx)("p",{children:"Scroll"}),Object(b.jsx)("img",{src:In,alt:"ScrollDown Arrow"})]})]})})})]})}function Sn(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Mn,{}),Object(b.jsx)(rn,{}),Object(b.jsx)(A,{})]})}var Bn,Ln=m.b.div(wn||(wn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function Cn(){var n=Object(i.useState)(""),e=Object(v.a)(n,2),t=e[0],r=e[1],a=Object(i.useState)(gn),o=Object(v.a)(a,2),c=o[0],s=o[1];Object(i.useEffect)((function(){""!==t&&s((function(){return gn.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Ln,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(W,{heading:"Projects",subheading:"some of my recent works"}),Object(b.jsx)("div",{className:"projects__searchBar",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),r(n.target.value),!n.target.value.length>0&&s(gn)},placeholder:"Project Name"}),Object(b.jsx)(y.k,{className:"searchIcon"})]})}),Object(b.jsx)("div",{className:"projects__allItems",children:c.map((function(n){return Object(b.jsx)(mn,{title:n.name,desc:n.desc,img:n.img},n.id)}))})]})})})}function Fn(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(k,{}),Object(b.jsx)(N,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/about",children:Object(b.jsx)(P,{})}),Object(b.jsx)(l.a,{path:"/contact",children:Object(b.jsx)(Z,{})}),Object(b.jsx)(l.a,{path:"/projects",children:Object(b.jsx)(Cn,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(Sn,{})})]}),Object(b.jsx)(f,{})]})})}var Rn,An=Object(m.a)(Bn||(Bn=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #121111;\n    --gray-1: #007aff;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --yellow-1:#29e31d;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),Dn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Tn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Pn=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",En=Object(m.a)(Rn||(Rn=Object(d.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--yellow-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n\n"])),Dn,Tn,Pn);c.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(An,{}),Object(b.jsx)(En,{}),Object(b.jsx)(Fn,{})]}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.cb7d592e.chunk.js.map