(this["webpackJsonpdionysis-koufis-weather-app"]=this["webpackJsonpdionysis-koufis-weather-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},15:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),i=a.n(r),c=(a(15),a(4)),s=a(5),l=a(8),u=a(6),m=a(1),h=a(9),d=a(7),p=a.n(d),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={long:null,lat:null,timezone:null,summary:null,temperature:null,icon:null},a.ref=o.a.createRef(),a.toCelsius=a.toCelsius.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.tittle="SkyChecker",navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){e.setState({long:t.coords.longitude,lat:t.coords.latitude});var a="".concat("https://cors-anywhere.herokuapp.com/","https://api.darksky.net/forecast/9cf4efbb3abf34df3415d1db93aad9d6/").concat(e.state.lat,",").concat(e.state.long);fetch(a).then((function(e){return e.json()})).then((function(t){console.log(t);var a=t.timezone,n=t.currently,o=n.summary,r=n.temperature,i=n.icon.replace(/-/g,"_").toUpperCase(),c=Math.floor(e.toCelsius(r));e.setState({timezone:a,summary:o,temperature:c,icon:i})}))}))}},{key:"toCelsius",value:function(e){return 5/9*(e-32)}},{key:"render",value:function(){return null===this.state.timzone||null===this.state.summary||null===this.state.temperature?o.a.createElement("div",null,o.a.createElement("p",{className:"loadingScreen"},"Loading ...")):o.a.createElement("div",{className:"info"},o.a.createElement("p",{className:"info__country"}," ",this.state.timezone),o.a.createElement("p",{className:"info__celicius"},this.state.temperature," \xb0C"),o.a.createElement("div",{className:"info__icon"}," ",o.a.createElement(p.a,{height:"200",width:"200",color:"black",icon:this.state.icon})),o.a.createElement("p",{className:"info__description"},this.state.summary))}}]),t}(o.a.Component);var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("p",{className:"header__heading"},"Sky Checker")),o.a.createElement(f,null),o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__text"},"Made by Dionysis Koufis With React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.bc58c0ca.chunk.js.map