(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{104:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=(a(104),a(15)),l=a(75),s=a(41),m=a.n(s),u=a(52),d=a(167),p=a(76),f="iGCjNM7pGTHKCz04rDK2DCnfQMKIWtxo",E=a.n(p).a.create({baseURL:"http://dataservice.accuweather.com/",headers:{Accept:"application/json","Content-Type":"application/json"}}),h=a(31),v=a(165),b=a(169),y=a(170),g=a(160),x=a(171);function O(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var j=Object(g.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function k(e){var t=e.showModal,a=e.handleClosePar,n=j(),c=r.a.useState(O),o=Object(i.a)(c,1)[0],l=r.a.useState(!1),s=Object(i.a)(l,2),m=(s[0],s[1],r.a.createElement("div",{style:o,className:n.paper},r.a.createElement("h2",{id:"simple-modal-title"},"Error"),r.a.createElement("p",{id:"simple-modal-description"},"Something went wrong try to refresh the page")));return r.a.createElement("div",null,r.a.createElement(x.a,{open:t,onClose:function(){a()},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},m))}function w(e){var t=e.onFormSubmit,a=Object(n.useState)(""),c=Object(i.a)(a,2),o=(c[0],c[1],Object(n.useState)("")),l=Object(i.a)(o,2),s=l[0],m=l[1],u=r.a.useState([]),d=Object(i.a)(u,2),p=d[0],h=d[1],g=r.a.useState(!1),x=Object(i.a)(g,2),O=x[0],j=x[1];return r.a.createElement(v.a,{style:{padding:"25px"}},r.a.createElement("form",{onSubmit:function(e){t(s),e.preventDefault()}},r.a.createElement(y.a,{id:"combo-box-demo",freeSolo:!0,options:p,onChange:function(e,t){return m(t)},getOptionLabel:function(e){return e.title},renderInput:function(e){return r.a.createElement(b.a,Object.assign({},e,{label:"Search country...",onChange:function(e){return t=e.target.value,void E.get("locations/v1/cities/autocomplete",{params:{apikey:f,q:t}}).then((function(e){e&&e.data&&e.data.length>0&&h(e.data.map((function(e){return{title:e.LocalizedName,key:e.Key}})))})).catch((function(e){j(!0)}));var t},variant:"outlined"}))}})),O&&r.a.createElement(k,{showModal:O,handleClosePar:function(){j(!1)}}))}var S=a(168),T=a(30),F=a.n(T),I=function(e){var t=e.weather;return r.a.createElement(d.a,null,r.a.createElement(v.a,{elevation:7,className:"weather-det-paper",style:{backgroundImage:"url(".concat(F.a,")")}},r.a.createElement(S.a,{style:{fontSize:"23px",textAlign:"center"},variant:"subtitle1"},t.title),r.a.createElement(S.a,{style:{fontSize:"18px",textAlign:"center"}},t.Temperature.Value+t.Temperature.Unit)))},_=new Array(7);_[0]="Monday",_[1]="Tuesday",_[2]="Wednesday",_[3]="Thursday",_[4]="Friday",_[5]="Saturday",_[6]="Sunday";var D=function(e){e.WeatherItem;var t=e.day,a=e.temp;return r.a.createElement(d.a,{item:!0,md:3,xs:12},r.a.createElement(v.a,{className:"weather-item",style:{backgroundImage:"url(".concat(F.a,")")}},r.a.createElement(S.a,{style:{fontSize:"23px",textAlign:"center"},variant:"subtitle1"}," ",_[t]," "),r.a.createElement(S.a,{style:{fontSize:"17px",textAlign:"center"},variant:"subtitle1"}," ",a," ")))},N=function(e){var t=e.listItems;return r.a.createElement(d.a,{container:!0,justify:"center",item:!0,style:{margin:"0px",display:"-webkit-inline-box"},md:12,spacing:4},t)},A=function(e){return{type:"ADD_TO_FAVORITS",obj:e}},C=function(e){return{type:"REMOVE_FROM_FAVORITS",obj:e}},M=a(83),R=a.n(M),V=a(84),W=a.n(V),z=a(166);a(72);function L(){var e=r.a.useState([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=r.a.useState(null),o=Object(i.a)(c,2),l=o[0],s=o[1],p=r.a.useState(!1),v=Object(i.a)(p,2),b=v[0],y=v[1],g=Object(h.b)(),x=Object(h.c)((function(e){return e.favoritesState.favorits}));function O(){return(O=Object(u.a)(m.a.mark((function e(t){var a,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/currentconditions/v1/".concat(t.key),e.prev=1,e.next=4,E.get(a,{params:{apikey:f}});case 4:(n=e.sent)&&n.data&&n.data.length>0&&(r=n.data.shift(),c=!1,null!=r&&(x&&x.length>0&&x.filter((function(e){return e.key===t.key})).length>0&&(c=!0),s({title:t.title,key:t.key,WeatherIcon:r.WeatherIcon,WeatherText:r.WeatherText,Temperature:r.Temperature.Metric,isFavorites:c})),j(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),y(!0);case 12:case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function j(e){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(m.a.mark((function e(t){var a,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/forecasts/v1/daily/5day/".concat(t.key),e.next=3,E.get(a,{params:{apikey:f}});case 3:(c=e.sent)&&c.data&&c.data.DailyForecasts&&c.data.DailyForecasts.length>0&&null!=(o=c.data.DailyForecasts)&&n(o.map((function(e){return r.a.createElement(D,{weatherItem:e,key:e.EpochDate,temp:Math.floor(5/9*(e.Temperature.Maximum.Value-32)*100)/100+"C",day:new Date(e.Date).getDay()})})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(d.a,{justify:"center",container:!0,spacing:10},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(d.a,{justify:"center",container:!0,spacing:10},r.a.createElement(d.a,{className:"searchBar-grid",item:!0,md:6,xs:12},r.a.createElement(w,{onFormSubmit:function(e){return O.apply(this,arguments)}})),null!=l&&r.a.createElement(d.a,{item:!0,md:8,xs:12},r.a.createElement(d.a,{style:{display:"flex",float:"right"}},null!=l&&l.isFavorites?r.a.createElement(R.a,null):r.a.createElement(W.a,null),null==l||l.isFavorites?r.a.createElement(z.a,{className:"add-to-favorites-text",onClick:function(){g(C(l))}},"Remove from Favorites"):r.a.createElement(z.a,{className:"add-to-favorites-text",onClick:function(){g(A(l))}},"Add To Favorites")),r.a.createElement(d.a,{item:!0,md:8,xs:12},r.a.createElement(I,{weather:l}))),a.length>0&&r.a.createElement(d.a,{item:!0,xs:8},r.a.createElement(N,{listItems:a})))),b&&r.a.createElement(k,{showModal:b,handleClosePar:function(){y(!1)}}))}var U=a(40),K=a(85),X=a.n(K);function B(){return r.a.createElement(d.a,{className:"nav-div",item:!0,xs:9},r.a.createElement("nav",{className:"nav"},r.a.createElement("img",{style:{width:"200px"},src:X.a}),r.a.createElement("ul",{style:{float:"right",display:"flex",listStyleType:"none"}},r.a.createElement("li",{style:{marginRight:"10px"}},r.a.createElement(U.b,{to:"/"},"Home")),r.a.createElement("li",{className:"cart"},r.a.createElement(U.b,{to:"/Favorites"},"Favorites"),r.a.createElement("span",null)))))}var P=a(12),G=function(e){var t=e.title,a=e.temp,n=e.desc;return r.a.createElement(d.a,{item:!0,md:3,xs:12},r.a.createElement(v.a,{className:"weather-item",style:{backgroundImage:"url(".concat(F.a,")")}},r.a.createElement(S.a,{style:{fontSize:"23px",textAlign:"center"},variant:"subtitle1"}," ",t," "),r.a.createElement(S.a,{style:{fontSize:"17px",textAlign:"center"},variant:"subtitle1"}," ",a," "),r.a.createElement(S.a,{style:{fontSize:"17px",textAlign:"center"},variant:"subtitle1"}," ",n," ")))},H=function(){var e=Object(h.c)((function(e){return e.favoritesState.favorits.map((function(e,t){return r.a.createElement(G,{title:e.title,key:t,temp:e.Temperature.Value+e.Temperature.Unit,desc:e.WeatherText})}))}));return r.a.createElement(d.a,{item:!0,justify:"center",md:9,xs:8},r.a.createElement(N,{listItems:e}))},J=a(56);function q(){var e=Object(l.a)(["\n  body{\n    background-color: ",";\n    color: ",";\n  }\n  .add-to-favorites-text {\n    color: ",";\n  }\n"]);return q=function(){return e},e}var Q=Object(J.b)(q(),(function(e){return"dark"===e.theme.mode?"#111":"#EEE"}),(function(e){return"dark"===e.theme.mode?"#EEE !important":"#111"}),(function(e){return"dark"===e.theme.mode?"#EEE !important":"#111"}));function $(){var e=Object(n.useState)({mode:"light"}),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(J.a,{theme:a},r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement("div",{id:"root",className:"App"},r.a.createElement(z.a,{className:"toggle-btn",style:{color:"dark"===a.mode?"#EEE":"#111"},onClick:function(e){return c("dark"===a.mode?{mode:"light"}:{mode:"dark"})}},"Theme mode"),r.a.createElement(U.a,null,r.a.createElement(B,null),r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,style:{color:"dark"===a.mode?"#EEE":"#111"},path:"/",component:L}),r.a.createElement(P.a,{style:{color:"dark"===a.mode?"#EEE":"#111"},path:"/Favorites",component:H}))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(32),Z=a(57),ee=a(42),te={selectedValue:"",favorits:[],currDay:""},ae=Object(Y.b)({favoritesState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_FAVORITS":var a=t.obj;return a.isFavorites=!0,Object(ee.a)(Object(ee.a)({},e),{},{selectedValue:t.obj,favorits:[].concat(Object(Z.a)(e.favorits),[e.favorits[e.favorits.length+1]=a])});case"REMOVE_FROM_FAVORITS":return t.obj.isFavorites=!1,e.favorits.forEach((function(a,n){if(a.key===t.obj.key)return e.favorits.splice(n,1),!1})),Object(ee.a)(Object(ee.a)({},e),{},{favorits:Object(Z.a)(e.favorits)});default:return e}}}),ne=Object(Y.c)(ae,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:ne},r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,a){e.exports=a.p+"static/media/weatherImage.7322d5b9.jpg"},72:function(e,t,a){},85:function(e,t,a){e.exports=a.p+"static/media/heroloLogo.71e6cc86.jpg"},99:function(e,t,a){e.exports=a(128)}},[[99,1,2]]]);
//# sourceMappingURL=main.cb8c2f68.chunk.js.map