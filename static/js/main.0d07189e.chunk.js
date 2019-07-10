(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(58)},37:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),m=a(8),i=a(7),l=(a(37),function(){return c.a.createElement("div",{className:"rmdb-header"},c.a.createElement("div",{className:"rmdb-header-content"},c.a.createElement(i.b,{to:"/"},c.a.createElement("img",{src:"./images/reactMovie_logo.png",alt:"RMDB Logo",className:"rmdb-logo"})),c.a.createElement("a",{href:"https://www.themoviedb.org/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:"./images/tmdb_logo.png",alt:"TMDB Logo",className:"rmdb-tmdb-logo"}))))}),s=a(3),u="https://api.themoviedb.org/3/",d="d00159c5a83c1383d6fa79bc6f2d11c0",v="http://image.tmdb.org/t/p/",b=a(25),f=a.n(b),g=(a(42),function(e){return c.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0)\n\t\t\t\t39%, rgba(0,0,0,0)\n\t\t\t\t41%, rgba(0,0,0,0.65)\n\t\t\t\t100%),\n\t\t\t\turl('".concat(e.image,"'), #1c1c1c")}},c.a.createElement("div",{className:"rmdb-heroimage-content"},c.a.createElement("div",{className:"rmdb-heroimage-text"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.text))))}),h=a(26),p=a(27),E=a(30),N=a(28),w=a(31),k=a(5),j=a.n(k),y=a(29),O=(a(44),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.timeout=null,a.doSearch=function(e){a.setState({value:e.target.value}),a.doCallback()},a.doCallback=Object(y.debounce)(function(){a.props.callback(!1,a.state.value)},800),a}return Object(w.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.setState({value:""!==this.state.value?this.state.value:this.props.text})}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-searchbar"},c.a.createElement("div",{className:"rmdb-searchbar-content"},c.a.createElement(j.a,{className:"rmdb-fa-search",name:"search",size:"2x"}),c.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"search",onChange:this.doSearch,value:this.state.value})))}}]),t}(n.Component)),S=(a(45),function(e){var t=e.changeType,a=e.callback,n=e.text,r=e.active;return c.a.createElement("div",{className:"rmdb-menu"},c.a.createElement("div",{className:"rmdb-menu-content"},c.a.createElement("div",{className:"rmdb-menu-content-links"},c.a.createElement("button",{className:"rmdb-menu-link ".concat("tv"==r?"active":""),onClick:function(){return t("tv")}},"Series"),c.a.createElement("button",{className:"rmdb-menu-link ".concat("movie"==r?"active":""),onClick:function(){return t("movie")}},"Peliculas")),c.a.createElement("div",{className:"rmdb-menu-content-search"},c.a.createElement(O,{callback:a,text:n}))))}),x=(a(46),function(e){var t=e.children,a=e.header,n=e.loading;return c.a.createElement("div",{className:"rmdb-grid"},a&&!n?c.a.createElement("h1",null,a):null,c.a.createElement("div",{className:"rmdb-grid-content"},t.map(function(e,t){return c.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)})))}),_=(a(47),function(e){var t=e.clickable,a=e.image,n=e.id,r=e.type;return c.a.createElement("div",{className:"rmdb-moviethumb"},t?c.a.createElement(i.b,{className:"clickable",to:"/".concat(r,"/").concat(n)},c.a.createElement("img",{src:a,alt:"Thumb"})):c.a.createElement("img",{src:a,alt:"Thumb"}))}),T=(a(48),function(){return c.a.createElement("div",{className:"loader"})}),I=a(12),R=a.n(I),P=a(18),A=a(9),C=a(14),M=(a(50),function(){var e=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(s.a)(r,2),m=o[0],i=o[1],l=Object(n.useState)(""),v=Object(s.a)(l,2),b=v[0],f=v[1],g=Object(n.useState)({movies:[],heroImage:null,currentPage:0,totalPages:0,searchTerm:""}),h=Object(s.a)(g,2),p=h[0],E=h[1],N=function(e){return function(t){return function(a){return"".concat(u).concat(e,"?api_key=").concat(d,"&language=en-US&page=").concat(t?p.currentPage+1:1,"&query=").concat(a)}}},w=N("search/".concat(b)),k=N("".concat(b,"/popular")),j=function(){var e=Object(C.a)(R.a.mark(function e(t){var a;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(!1),c(!0),e.prev=2,e.next=5,fetch(t);case 5:return e.next=7,e.sent.json();case 7:a=e.sent,console.log(a),E(function(e){return Object(A.a)({},e,{movies:[].concat(Object(P.a)(e.movies),Object(P.a)(a.results)),currentPage:a.page,totalPages:a.total_pages})}),E(function(e){return Object(A.a)({},e,{heroImage:e.movies[0]})}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),i(!0);case 16:c(!1);case 17:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t){return e.apply(this,arguments)}}(),y=function(e,t){e=void 0===e||e,E(function(a){return Object(A.a)({},a,{movies:e?a.movies:[],searchTerm:t})});var a=t?w(e)(t):k(e)("");console.log(a),j(a)};return Object(n.useEffect)(function(){if(localStorage.getItem("HomeState")){var e=JSON.parse(localStorage.getItem("HomeState"));E(Object(A.a)({},e))}else j(k(!1)(""))},[]),Object(n.useEffect)(function(){localStorage.setItem("HomeState",JSON.stringify(p))},[p]),Object(n.useEffect)(function(){var e=b;""==b&&(e=localStorage.getItem("HomeType")||"movie"),localStorage.setItem("HomeType",e),b==e?y(!1,p.searchTerm):f(e)},[b]),[{state:p,isLoading:a,isError:m,type:b},y,function(e){f(e)}]}(),t=Object(s.a)(e,3),a=t[0],r=a.state,o=a.isLoading,m=(a.isError,a.type),i=t[1],l=t[2];return c.a.createElement("div",{className:"rmdb-home"},c.a.createElement(S,{changeType:l,active:m,callback:i,text:r.searchTerm}),r.heroImage&&!r.searchTerm?c.a.createElement("div",null,c.a.createElement(g,{image:"".concat(v).concat("w1280").concat(r.heroImage.backdrop_path),title:r.heroImage.original_title||r.heroImage.original_name,text:r.heroImage.overview})):null,c.a.createElement("div",{className:"rmdb-home-grid"},c.a.createElement(f.a,{dataLength:r.movies.length,next:i,hasMore:r.currentPage<r.totalPages,endMessage:!o&&c.a.createElement("div",{className:"rmdb-grid"},c.a.createElement("h1",{style:{textAlign:"center"}},c.a.createElement("b",null,"Yay! You have seen it all")))},c.a.createElement(x,{header:r.searchTerm?"SEARCH RESULT":"POPULAR ".concat(m.toUpperCase(),"S"),loading:o},r.movies.map(function(e,t){return c.a.createElement(_,{key:t,clickable:!0,id:e.id,type:m,image:e.poster_path?"".concat(v).concat("w500").concat(e.poster_path):"./images/no_image.jpg"})}))),o?c.a.createElement(T,null):null))}),L=(a(51),function(){return c.a.createElement("div",{className:"rmdb-not-found"},c.a.createElement(j.a,{className:"rmdb-fa",name:"frown-o",size:"5x"}),c.a.createElement("h1",null,"This page does not exists"))}),U=a(13),D=(a(52),function(e){var t=e.movie;return c.a.createElement("div",{className:"rmdb-navigation"},c.a.createElement("div",{className:"rmdb-navigation-content"},c.a.createElement(i.b,{to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,t)))}),z=(a(53),function(e){return c.a.createElement("div",{className:"rmdb-movieinfo",style:{background:e.movie.backdrop_path?"url('".concat(v).concat("w1280").concat(e.movie.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"rmdb-movieinfo-content"},c.a.createElement("div",{className:"rmdb-movieinfo-thumb"},c.a.createElement(_,{image:e.movie.poster_path?"".concat(v).concat("w500").concat(e.movie.poster_path):"./images/no_image.jpg",clickable:!1})),c.a.createElement("div",{className:"rmdb-movieinfo-text"},c.a.createElement("h1",null,e.movie.title),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,e.movie.overview),c.a.createElement("h3",null,"IMDB RATING"),c.a.createElement("div",{className:"rmdb-rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*e.movie.vote_average}),c.a.createElement("p",{className:"rmdb-score"},e.movie.vote_average)),(e.directors.length,c.a.createElement("h3",null,"DIRECTOR")),e.directors.map(function(e,t){return c.a.createElement("p",{key:t,className:"rmdb-director"},e.name)}))))}),H=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},W=(a(54),function(e){var t=e.movie;return c.a.createElement("div",{className:"rmdb-movieinfobar"},c.a.createElement("div",{className:"rmdb-movieinfobar-content"},t.runtime&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(j.a,{className:"fa-time",name:"clock-o",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time: ",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(t.runtime))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(j.a,{className:"fa-budget",name:"money",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",H(t.budget))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(j.a,{className:"fa-revenue",name:"ticket",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue: ",H(t.revenue)))),t.number_of_episodes&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(j.a,{className:"fa-time",name:"clock-o",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Number of Episodes: ",t.number_of_episodes)),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(j.a,{className:"fa-budget",name:"money",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Number of Seasons: ",t.number_of_seasons)))))}),B=(a(55),function(e){var t,a=e.actor;return c.a.createElement("div",{className:"rmdb-actor"},c.a.createElement("img",{alt:"Actor Thumb",src:(t=a.profile_path,t?"".concat(v).concat("w500").concat(t):"./images/no_image.jpg")}),c.a.createElement("span",{className:"rmdb-actor-name"},a.name),c.a.createElement("span",{className:"rmdb-actor-character"},a.character))}),F=(a(56),function(e){var t=Object(n.useState)({movie:{},directors:[],actors:{},recommendations:{}}),a=Object(s.a)(t,2),r=a[0],o=a[1],m=Object(n.useState)(!1),i=Object(s.a)(m,2),l=i[0],b=i[1],f=Object(n.useState)(e.match.params.id),g=Object(s.a)(f,2),h=g[0],p=g[1],E=Object(n.useState)(e.match.params.type),N=Object(s.a)(E,2),w=N[0],k=N[1];Object(n.useEffect)(function(){b(!0),j("".concat(w,"/").concat(h),"movie"),j("".concat(w,"/").concat(h,"/credits"),"actors"),j("".concat(w,"/").concat(h,"/recommendations"),"recommendations"),b(!1)},[h]),Object(n.useEffect)(function(){k(e.match.params.type),p(e.match.params.id)},[e.match.params]);var j=function(){var e=Object(C.a)(R.a.mark(function e(t,a){var n,c;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(u).concat(t,"?api_key=").concat(d,"&language=en-US"),e.next=4,fetch(n);case 4:return e.next=6,e.sent.json();case 6:c=e.sent,console.log(c),c.status_code||o(function(e){return Object(A.a)({},e,Object(U.a)({},a,c))}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("There was an error: ",e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"rmdb-movie"},r.movie&&r.actors.cast&&!l?c.a.createElement("div",null,c.a.createElement(D,{movie:r.movie.title||r.movie.name}),c.a.createElement(z,{movie:r.movie,directors:r.actors.crew.filter(function(e){return"Director"===e.job})}),c.a.createElement(W,{movie:r.movie})):null,r.actors.cast&&r.actors.cast.length>0?c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(x,{header:"Main Actors"},r.actors.cast.slice(0,12).map(function(e,t){return c.a.createElement(B,{key:t,actor:e})}))):null,r.recommendations.results&&r.recommendations.results.length>0?c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(x,{header:"Recommendations"},r.recommendations.results.slice(0,4).map(function(e,t){return c.a.createElement(_,{key:t,clickable:!0,id:e.id,type:w,image:e.poster_path?"".concat(v).concat("w500").concat(e.poster_path):"./images/no_image.jpg"})}))):null,r.movie||l?null:c.a.createElement("h1",null,"No Movie Found!"),l?c.a.createElement(T,null):null)}),J=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",component:M,exact:!0}),c.a.createElement(m.a,{path:"/:type/:id",component:F,exact:!0}),c.a.createElement(m.a,{component:L})))},Y=(a(57),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function q(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(c.a.createElement(i.a,{basename:"/"},c.a.createElement(J,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ReactMovie",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/ReactMovie","/service-worker.js");Y?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):q(t,e)})}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.0d07189e.chunk.js.map