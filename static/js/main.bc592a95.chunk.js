(this["webpackJsonptip-calculator-app"]=this["webpackJsonptip-calculator-app"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(6),i=c.n(a),l=c(4),j=c(3),r=c(2),b=c(0),d=n.a.memo((function(e){var t=e.setData,c=Object(s.useState)({tip:0}),n=Object(l.a)(c,2),a=n[0],i=n[1];Object(s.useEffect)((function(){t((function(e){return Object(r.a)(Object(r.a)({},e),{},{tip:a.tip})}))}),[t,a]);var j=function(){for(var e=document.getElementsByClassName("btn"),t=0;t<e.length;t++)e[t].classList.remove("active")},d=function(e,t){j(),document.querySelector("#inputTip").value="",document.querySelector("#btn".concat(t)).classList.add("active"),i(Object(r.a)(Object(r.a)({},a),{},{tip:t}))};return Object(b.jsxs)("div",{className:"tip",children:[Object(b.jsx)("span",{children:"Select Tip %"}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("div",{className:"btn",id:"btn5",onClick:function(e){return d(0,5)},children:"5%"}),Object(b.jsx)("div",{className:"btn",id:"btn10",onClick:function(e){return d(0,10)},children:"10%"}),Object(b.jsx)("div",{className:"btn",id:"btn15",onClick:function(e){return d(0,15)},children:"15%"}),Object(b.jsx)("div",{className:"btn",id:"btn25",onClick:function(e){return d(0,25)},children:"25%"}),Object(b.jsx)("div",{className:"btn",id:"btn50",onClick:function(e){return d(0,50)},children:"50%"}),Object(b.jsx)("input",{type:"number",id:"inputTip",placeholder:"Custom",onChange:function(e){var t=e.target;j(),i(Object(r.a)(Object(r.a)({},a),{},{tip:parseInt(t.value)}))}})]})]})})),o=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"17",children:Object(b.jsx)("path",{fill:"#9EBBBD",d:"M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"})})},p=function(e){var t=e.dataProp,c=t.data,s=t.setData,n=function(e){var t=e.target;s((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(j.a)({},t.name,t.value))}))},a=c.bill,i=c.people;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"inputs bill",children:[Object(b.jsx)("span",{children:"Bill"}),Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)("input",{type:"number",name:"bill",value:a,onChange:n}),Object(b.jsx)(o,{})]})]}),Object(b.jsx)(d,{setData:s}),Object(b.jsxs)("div",{className:"inputs people",children:[Object(b.jsxs)("span",{children:["Number of people ",i<=0?Object(b.jsx)("span",{className:"red",children:"Can't be 0"}):""," "]}),Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)("input",{type:"number",name:"people",value:i,onChange:n,className:i<1?"morePeople":" "}),Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"16",children:Object(b.jsx)("path",{fill:"#9EBBBD",d:"M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"})})]})]})]})},u=function(e){var t=e.dataProp,c=t.data,s=t.setData,n=c.tip,a=c.bill,i=c.people,l=parseFloat(a/100*n).toFixed(2),j=parseFloat(a/100*n*i).toFixed(2);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"info",children:[Object(b.jsxs)("div",{className:"text",children:[Object(b.jsx)("span",{children:"Tip Amount"}),Object(b.jsx)("span",{className:"small",children:"/ person"})]}),Object(b.jsxs)("div",{className:"numbers",children:[Object(b.jsx)(o,{}),Object(b.jsx)("span",{children:l})]})]}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsxs)("div",{className:"text",children:[Object(b.jsx)("span",{children:"Total"}),Object(b.jsx)("span",{className:"small",children:"/ person"})]}),Object(b.jsxs)("div",{className:"numbers",children:[Object(b.jsx)(o,{}),Object(b.jsx)("span",{children:j})]})]})]}),Object(b.jsx)("button",{className:j>0?"btnActive":"",onClick:function(){s({tip:0,bill:0,people:0})},children:"Reset"})]})},O=function(){var e=Object(s.useState)({bill:0,tip:0,people:0}),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(b.jsxs)("div",{className:"calculator",children:[Object(b.jsx)("div",{className:"options",children:Object(b.jsx)(p,{dataProp:{data:c,setData:n}})}),Object(b.jsx)("div",{className:"results",children:Object(b.jsx)(u,{dataProp:{data:c,setData:n}})})]})},h=(c(12),function(){return Object(b.jsxs)("div",{className:"main_container",children:[Object(b.jsxs)("span",{className:"title",children:["SPLI",Object(b.jsx)("br",{}),"TTER"]}),Object(b.jsx)(O,{})]})});i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.bc592a95.chunk.js.map