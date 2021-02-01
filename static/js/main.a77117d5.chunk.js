(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),i=a.n(r),l=(a(15),a(9)),m=a(2),s=(a(16),a(17),a(18),function(e){var t=e.Title,a=e.Plot,n=void 0===a?"":a,r=e.Poster,i=e.imdbID;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("figure",{className:"image is-4by3"},c.a.createElement("img",{src:r,alt:"Film logo"}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("figure",{className:"image is-48x48"},c.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),c.a.createElement("div",{className:"media-content"},c.a.createElement("p",{className:"title is-8"},t))),c.a.createElement("div",{className:"content"},n,c.a.createElement("br",null),c.a.createElement("a",{href:"https://www.imdb.com/title/".concat(i)},"IMDB"))))}),o=function(e){var t=e.movies,a=void 0===t?[]:t;return c.a.createElement("div",{className:"movies"},a.map((function(e){return c.a.createElement(s,Object.assign({key:e.imdbID},e))})))},u=a(4),d=a.n(u),v=a(7),E=a(8),f=a.n(E),b=(a(20),function(e){var t=e.addMovie,a=Object(n.useState)(""),r=Object(m.a)(a,2),i=r[0],l=r[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),E=u[0],b=u[1],p=function(){var e=Object(v.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=i,fetch("".concat("https://www.omdbapi.com/?apikey=d83d550f","&t=").concat(a)).then((function(e){return e.json()})).catch((function(e){return e}));case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"find-movie",action:"",method:"GET",onSubmit:function(e){e.preventDefault(),t(E),l(""),b("")}},c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:f()("input",{"is-danger":E.Error}),value:i,onChange:function(e){return l(e.target.value)}})),E.Error&&c.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),c.a.createElement("div",{className:"field is-grouped"},c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"button",className:"button is-light",onClick:p},"Find a movie")),c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"submit",className:"button is-primary"},"Add to the list")))),c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"title"},"Preview"),E?!E.Error&&c.a.createElement(s,E):c.a.createElement("i",null,"Input movie above*")))}),p=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page-content"},c.a.createElement(o,{movies:a})),c.a.createElement("div",{className:"sidebar"},c.a.createElement(b,{addMovie:function(e){r((function(t){var a=t.filter((function(t){return t.imdbID!==e.imdbID}));return t.length===a.length&&e.imdbID?[].concat(Object(l.a)(t),[e]):t}))}})))};i.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.a77117d5.chunk.js.map