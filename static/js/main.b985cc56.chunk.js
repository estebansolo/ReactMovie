(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t(36)},23:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(14),r=t.n(c),i=t(17),l=(t(23),function(){return o.a.createElement("div",{className:"rmdb-header"},o.a.createElement("div",{className:"rmdb-header-content"},o.a.createElement("img",{src:"./images/reactMovie_logo.png",alt:"RMDB Logo",className:"rmdb-logo"}),o.a.createElement("img",{src:"./images/tmdb_logo.png",alt:"TMDB Logo",className:"rmdb-tmdb-logo"})))}),s=t(10),u=t(2),m=t(3),d=t(5),f=t(4),g=t(6),h="https://api.themoviedb.org/3/",v="d00159c5a83c1383d6fa79bc6f2d11c0",p=(t(24),function(e){return o.a.createElement("div",null,"Hero Image")}),b=(t(25),function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(o)))).state={},t}return Object(g.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"SearchBar")}}]),n}(a.Component)),w=(t(26),function(e){return o.a.createElement("div",null,"FourColGrid")}),E=(t(27),t(28),function(e){return o.a.createElement("div",null,"Load More")}),y=(t(29),function(){return o.a.createElement("div",{className:"loader"})}),k=(t(30),function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(o)))).state={movies:[],heroImage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:""},t.loadMoreItems=function(){var e="";t.setState({loading:!0}),e=""===t.state.searchTerm?"".concat(h,"movie/popular?api_key=").concat(v,"&language=en-US&page=").concat(t.state.currentPage+1):"".concat(h,"search/movie?api_key=").concat(v,"&language=en-US&query=").concat(t.state.searchTerm,"&page=").concat(t.state.currentPage+1),t.fetchItems(e)},t.fetchItems=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){t.setState({movies:[].concat(Object(s.a)(t.state.movies),Object(s.a)(e.results)),heroImage:t.state.heroImage||e.results[0],loading:!1,currentPage:e.page,totalPages:e.total_pages}),console.log(e)})},t}return Object(g.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){this.setState({loading:!0});var e="".concat(h,"movie/popular?api_key=").concat(v,"&language=en-US&page=1");this.fetchItems(e)}},{key:"render",value:function(){return o.a.createElement("div",{className:"rmdb-home"},o.a.createElement(p,null),o.a.createElement(b,null),o.a.createElement(w,null),o.a.createElement(y,null),o.a.createElement(E,null))}}]),n}(a.Component)),j=function(){return o.a.createElement("div",null,o.a.createElement(l,null),o.a.createElement(k,null))},O=(t(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function S(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(i.a,{basename:"/"},o.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ReactMovie",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/ReactMovie","/service-worker.js");O?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):S(n,e)})}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.b985cc56.chunk.js.map