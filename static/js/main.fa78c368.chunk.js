(this["webpackJsonpair-quality-monitoring"]=this["webpackJsonpair-quality-monitoring"]||[]).push([[0],{188:function(t,e,a){},190:function(t,e,a){},191:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),o=a(66),i=a.n(o),c=(a(79),a(73)),s=a(67),l=a.n(s),u=a(194),d=a(43),j=a.n(d),b=a(68),f=a(3),y=a(2),h=a(19),g=a.n(h),O=a(69),p=a.n(O),v=function(t){return new Promise((function(e){return t>=0&&t<=50?e({bgColor:"#55a84f",category:"Good"}):t>=51&&t<=100?e({bgColor:"#a3c853",category:"Satisfactory"}):t>=101&&t<=200?e({bgColor:"#fff833",category:"Moderate"}):t>=201&&t<=300?e({bgColor:"#f29c33",category:"Poor"}):t>=301&&t<=400?e({bgColor:"#e93f33",category:"Very Poor"}):t>=401&&t<=500?e({bgColor:"#af2d24",category:"Severe"}):void 0}))},x=a(192),m=a(195),C=a(193),D=a(72),w=(a(188),a(1));var S=function(t){var e=t.aqiData,a=e&&e.liveData?e.liveData:[],r=e&&e.historyData?e.historyData:{},n={animation:!1,interaction:{intersect:!1},plugins:{legend:!1}},o=a&&Array.isArray(a)&&a.length?a.map((function(t){return Object(w.jsx)(x.a,{sm:"4",className:"CardContainer",children:Object(w.jsxs)(m.a,{style:{backgroundColor:null===t||void 0===t?void 0:t.bgColor,color:"inherit"},children:[Object(w.jsx)(m.a.Body,{children:Object(w.jsxs)(C.a,{children:[Object(w.jsxs)(x.a,{sm:"5",children:[Object(w.jsx)(m.a.Title,{children:t.city}),Object(w.jsx)(m.a.Subtitle,{children:Object(w.jsx)("small",{children:null===t||void 0===t?void 0:t.lups})}),Object(w.jsx)(m.a.Text,{children:Object(w.jsx)("strong",{children:parseFloat(t.aqi).toFixed(2)})})]}),Object(w.jsx)(x.a,{sm:"7",children:Object(w.jsx)(D.a,{data:function(){return e=t.city,{labels:["1","2","3","4","5","6","7","8","9","10"],datasets:[{label:"",data:r[e]||[],fill:!1,lineTension:0,backgroundColor:"#ccc",borderColor:"#000"}]};var e},options:n,height:"200px"})})]})}),Object(w.jsx)(m.a.Footer,{children:(null===t||void 0===t?void 0:t.category)||"Loading..."})]})},t.city)})):Object(w.jsx)(x.a,{children:Object(w.jsx)("p",{className:"text-center",children:"Please wait..."})});return Object(w.jsx)(C.a,{className:"Citymonitor",children:o})};a(190);var q=function(){var t="aqiData",e=Object(r.useState)({liveData:[],historyData:{}}),a=Object(c.a)(e,2),n=a[0],o=a[1];return Object(r.useEffect)((function(){try{var e=JSON.parse(localStorage.getItem(t));o(e),localStorage.removeItem(t)}catch(a){}}),[]),window.onbeforeunload=function(){n&&localStorage.setItem(t,JSON.stringify(n))},Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{className:"text-center AQI-title",children:"Air Quality Monitor"}),Object(w.jsx)(u.a,{fluid:!0,children:Object(w.jsx)(S,{aqiData:n})}),Object(w.jsx)(l.a,{url:"ws://city-ws.herokuapp.com",onMessage:function(t){try{var e=JSON.parse(t);o((function(t){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=t&&t.liveData?t.liveData:[];e=e||[];var r,n=t&&t.historyData?t.historyData:{},o=Object(y.a)(a);try{for(o.s();!(r=o.n()).done;){var i=r.value;i.lastUpdatedOn||(i.lastUpdatedOn=g()().format());for(var c=0;c<=e.length;c++)e[c]&&(e[c].city===i.city?(i.aqi=e[c].aqi,i.lastUpdatedOn=g()().format(),e.splice(c,1)):e[c].lastUpdatedOn=g()().format())}}catch(u){o.e(u)}finally{o.f()}var s=[].concat(Object(f.a)(a),Object(f.a)(e)),l=s.map((function(t){return t.city}));return l.sort(),l=l.map((function(t,e){return t=s.filter((function(e){return e.city===t}))[0]})),p.a.mapLimit(l,12,function(){var t=Object(b.a)(j.a.mark((function t(e){var a,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=parseFloat(parseFloat(e.aqi).toFixed(2)),t.next=3,v(a);case 3:return r=t.sent,e.bgColor=r.bgColor,e.category=r.category,e.lups=g()(e.lastUpdatedOn).fromNow(),n[e.city]||(n[e.city]=[]),n[e.city].push(a),n[e.city].length>10&&n[e.city].shift(),t.abrupt("return",e);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t,e){t||(l=e)})),{liveData:l,historyData:n}}(t,e)}))}catch(a){}}})]})};i.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(q,{})}),document.getElementById("root"))},79:function(t,e,a){}},[[191,1,2]]]);
//# sourceMappingURL=main.fa78c368.chunk.js.map