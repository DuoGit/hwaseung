(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{38:function(e,t,n){e.exports=n(67)},43:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(13),c=n.n(l),r=(n(43),n(21)),i=n.n(r),s=n(11),m=n(95),u=n(104),d=n(99),p=n(103),g=n(102),f=n(97),h=n(100),E=n(101),v=n(98),b=n(105),y=n(22);function L(e,t,n,a,o){return{name:e,calories:t,fat:n,carbs:a,protein:o}}var w=[L("1",""),L("2",""),L("3",""),L("4",""),L("5","")],I=Object(m.a)((function(e){return{button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:100,textAlign:"center"},table:{minWidth:650}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement((function(){var e,t=I(),n=o.a.useState(""),l=Object(s.a)(n,2),c=l[0],r=l[1],m=o.a.useState(""),L=Object(s.a)(m,2),j=L[0],S=L[1],x=o.a.useState(""),O=Object(s.a)(x,2),k=(O[0],O[1],o.a.useState("")),B=Object(s.a)(k,2),T=(B[0],B[1],o.a.useState(!1)),C=Object(s.a)(T,2),H=(C[0],C[1],o.a.useState(!1)),M=Object(s.a)(H,2),N=(M[0],M[1],o.a.useState("hidden")),W=Object(s.a)(N,2),A=W[0],J=W[1],F=!1,R=Object(a.useState)(),U=Object(s.a)(R,2),_=U[0],D=U[1];Object(a.useEffect)((function(){var e=!0;return function(){var t;i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(y("./structure.json"));case 2:t=n.sent,e&&D(t.data);case 4:case"end":return n.stop()}}))}(),function(){e=!1}}),[]);var P=[],$=function(){var e=document.getElementById("demo").innerHTML-0;document.getElementById("demo").innerHTML=(e+.01).toFixed(2)};return o.a.createElement("div",{style:{width:"650px",textAlign:"center",alignContent:"center",alignSelf:"center",marginLeft:"auto",marginRight:"auto"}},o.a.createElement(b.a,{placeholder:"please input item",onInput:function(e){console.log(e.target.value),r(e.target.value)},style:{width:"200px",fullWidth:!0}}),o.a.createElement("br",null),o.a.createElement(b.a,{placeholder:"please input operation",onInput:function(e){console.log(e.target.value),S(e.target.value)},style:{width:"200px",fullWidth:!0}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(u.a,{onClick:function(){console.log("item");var e=!0;_.map((function(t,n){if(t.name==c){for(var a in console.log(t),t.processList)if(console.log(a),console.log("input2: ",j),t.processList[a].processName==j)return console.log("asas"),e=!1,J("hidden"),void alert("Duplicate Item and Process");if(console.log(e,c,j),e&&""!=c&&""!=j){var o=_;o[n].processList.push({processName:j,cycleList:P}),D(o),console.log("d: ",o),J("visible")}else J("hidden")}else _.push({name:c,processList:[]}),D(_);console.log("data 1212")}))},color:"primary",variant:"contained",style:{width:"200px"}},"Add"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{style:{visibility:A}},o.a.createElement(u.a,{onClick:function(){if(P.length>=5)return 0;if(0==F)F=!0,document.getElementById("timerLabel").innerHTML="Stop",e=setInterval($,.01);else{F=!1,clearInterval(e);var t=document.getElementById("demo").innerHTML;P.push(t);_.map((function(e,t){if(e.name==c){for(var n in console.log(e),e.processList)if(e.processList[n].processName==j){!1;var a=_;a[t].processList[n]={processName:a[t].processList[n].processName,cycleList:P},D(a)}}else _.push({name:c,processList:[]}),D(_);console.log("data 1212")})),document.getElementById("time_"+(P.length-1)).innerHTML=t,document.getElementById("demo").innerHTML=0,document.getElementById("timerLabel").innerHTML="Start",console.log(P)}},id:"timerLabel",color:"primary",variant:"contained",style:{width:"200px"}},"Start"),o.a.createElement("p",{id:"demo"}),o.a.createElement(f.a,{component:v.a},o.a.createElement(d.a,{className:t.table,"aria-label":"simple table"},o.a.createElement(h.a,null,o.a.createElement(E.a,null,o.a.createElement(g.a,null,"Cycle"),o.a.createElement(g.a,{align:"center"},"Time"))),o.a.createElement(p.a,null,w.map((function(e,t){return o.a.createElement(E.a,{key:e.name},o.a.createElement(g.a,{component:"th",scope:"row"},e.name),o.a.createElement(g.a,{align:"center",id:"time_"+t}))}))))),o.a.createElement("br",null),o.a.createElement(u.a,{onClick:function(){var e=document.createElement("a");e.href="data:application/octet-stream,"+encodeURIComponent(JSON.stringify(_)),e.download="myFile.json",e.click(),y.get("www.google.com").then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},color:"secondary",variant:"contained",style:{width:"200px"}},"Update")))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.b9cf5e38.chunk.js.map