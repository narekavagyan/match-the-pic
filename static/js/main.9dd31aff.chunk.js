(this["webpackJsonpmatch-the-pic"]=this["webpackJsonpmatch-the-pic"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(3),r=n.n(c),o=(n(10),n(4)),l=n(1);n(11);var u=function(e){var t=e.handleClick,n=e.id,i=e.type,c=e.flipped,r=e.solved,o=e.height,l=e.width,u=e.disabled;return a.a.createElement("div",{className:"flip-container ".concat(c?"flipped":""),style:{width:l,height:o},onClick:function(){return u?null:t(n)}},a.a.createElement("div",{className:"flipper"},a.a.createElement("img",{style:{height:o,width:l},className:c?"front":"back",src:c||r?"".concat(i,".jpg"):"back.png"})))};n(12);var d=function(e){var t=e.disabled,n=e.dimension,i=e.cards,c=e.flipped,r=e.solved,o=e.handleClick;return a.a.createElement("div",{className:"board"},i.map((function(e){return a.a.createElement(u,{key:e.id,id:e.id,type:e.type,width:n/5.5,height:n/5.5,flipped:c.includes(e.id),solved:r.includes(e.id),handleClick:o,disabled:t||r.includes(e.id)})})))};function s(){var e=0;return function(e){for(var t=e.slice(0),n=0;n<e.length;n++){var i=Math.floor(Math.random()*(n+1)),a=t[n];t[n]=t[i],t[i]=a}return t}(["img1","img2","img3","img4","img5","img6","img7","img8"].reduce((function(t,n){return t.push({id:e++,type:n}),t.push({id:e++,type:n}),t}),[]))}n(13);var m=function(e){var t=e.restartGame;return a.a.createElement("div",{className:"justify-center"},a.a.createElement("h1",null,"YOU WIN!"),a.a.createElement("button",{className:"restart-button",onClick:t},"Restart Game"))};var f=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)([]),u=Object(l.a)(r,2),f=u[0],h=u[1],p=Object(i.useState)(400),v=Object(l.a)(p,2),g=v[0],b=v[1],E=Object(i.useState)([]),w=Object(l.a)(E,2),j=w[0],O=w[1],y=Object(i.useState)(!1),k=Object(l.a)(y,2),N=k[0],C=k[1];Object(i.useEffect)((function(){I(),c(s())}),[]),Object(i.useEffect)((function(){S()}),[n.join(",")]),Object(i.useEffect)((function(){var e=window.addEventListener("resize",I);return function(){return window.removeEventListener("resize",e)}}));var S=function(){n.map((function(e){var t="".concat(e.type,".jpg");console.log(t),(new Image).src=t}))},M=function(){h([]),C(!1)},W=function(e){return f.includes(e)},G=function(e){var t=n.find((function(t){return t.id===e}));return n.find((function(e){return f[0]===e.id})).type===t.type},I=function(){b(Math.min(document.documentElement.clientWidth,document.documentElement.clientHeight))},z=16===j.length&&0===f.length;return a.a.createElement("div",null,z?a.a.createElement(m,{restartGame:function(){window.location.reload()}}):a.a.createElement("h2",{className:"title"},"Match The Pictures"),a.a.createElement(d,{dimension:g,cards:n,flipped:f,handleClick:function(e){if(C(!0),0===f.length)h([e]),C(!1);else{if(W(e))return void C(!1);h([f[0],e]),G(e)?(O([].concat(Object(o.a)(j),[f[0],e])),M()):setTimeout(M,1500)}},disabled:N,solved:j}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.9dd31aff.chunk.js.map