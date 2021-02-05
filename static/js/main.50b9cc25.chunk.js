(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},35:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(4),i=n(9),r=n(6),s=n(5),c=n(0),l=n.n(c),p=n(15),u=n.n(p),d=n(37),m=n(11),h=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{onClick:e.openWindow,to:e.to},l.a.createElement("img",{className:e.imgSrc,src:e.imgSrc,alt:e.atlTxt}),l.a.createElement("br",null),e.txt))},g=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"sidebar"},l.a.createElement(d.a.Item,{className:"noselect desktop_icon"},l.a.createElement(h,{openWindow:e.openWindow,imgSrc:"/icons8-txt-50.png",atlTxt:"about icon",to:"/",txt:"about"})),l.a.createElement(d.a.Item,{className:"noselect desktop_icon"},l.a.createElement(h,{openWindow:e.openWindow,imgSrc:"/icons8-folder-48.png",atlTxt:"projects icon",to:"projects",txt:"projects"}))))},w=n(20),f=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).move=function(e,t){return o.setState({x:e,y:t})},o.state={x:0,y:0},o}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.x,n=e.y;return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{x:t,y:n,onMove:this.move},l.a.createElement("div",{className:"window "+this.props.className},l.a.createElement("div",{id:"window-header",className:"window-header"},l.a.createElement("span",null,l.a.createElement("button",{id:"esc-btn",className:"esc-btn text-center",onClick:this.props.toggleWindowShowing},"X"))),l.a.createElement("div",{className:this.props.contentClass},this.props.children))))}}]),n}(l.a.Component),b=function(e){var t=null,n=null,a=function(){e.apply(void 0,Object(w.a)(n)),t=null},o=function(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];n=o,t||(t=requestAnimationFrame(a))};return o.cancel=function(){return t&&cancelAnimationFrame(t)},o},v=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i)))._relX=0,e._relY=0,e._ref=l.a.createRef(),e._onMouseDown=function(t){var n=document.getElementById("window-header"),a=document.getElementById("esc-btn");if(n.parentNode.querySelector(":hover")===n&&a.parentNode.querySelector(":hover")!==a&&0===t.button){var o=document.body,i=o.scrollLeft,r=o.scrollTop,s=o.clientLeft,c=o.clientTop,l=e._ref.current.getBoundingClientRect(),p=l.left,u=l.top;e._relX=t.pageX-(p+i-s),e._relY=t.pageY-(u+r-c),document.addEventListener("mousemove",e._onMouseMove),document.addEventListener("mouseup",e._onMouseUp),t.preventDefault()}},e._onMouseUp=function(t){document.removeEventListener("mousemove",e._onMouseMove),document.removeEventListener("mouseup",e._onMouseUp),t.preventDefault()},e._onMouseMove=function(t){e.props.onMove(t.pageX-e._relX,t.pageY-e._relY),t.preventDefault()},e._update=b((function(){var t=e.props,n=t.x,a=t.y;e._ref.current.style.transform="translate(".concat(n,"px, ").concat(a,"px)")})),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this._ref.current.addEventListener("mousedown",this._onMouseDown),this._update()}},{key:"componentDidUpdate",value:function(){this._update()}},{key:"componentWillUnmount",value:function(){this._ref.current.removeEventListener("mousedown",this._onMouseDown),this._update.cancel()}},{key:"render",value:function(){return l.a.createElement("div",{className:"draggable",ref:this._ref},this.props.children)}}]),n}(l.a.PureComponent),E=f,y=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{contentClass:"window-content",className:"about-window "+(this.props.showing?"":"d-none"),toggleWindowShowing:this.props.toggleWindowShowing},l.a.createElement("h2",null,"> whoami"),l.a.createElement("ul",null,l.a.createElement("li",null,"I'm a developer and student studying computing science at the University of Alberta. I\u2019m interested in building software that improves people\u2019s lives, businesses, and art.")),l.a.createElement("p",null,"Check out my work at:",l.a.createElement("a",{href:"https://github.com/MichaelongII"},l.a.createElement("img",{className:"small-icon",src:"gh.png",alt:"github icon"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/michael-long-5a1623160/"},l.a.createElement("img",{className:"small-icon",src:"li.png",alt:"linkedin icon"})))))}}]),n}(l.a.Component),j=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).projects=[{title:"TapeFlip.app",type:"web",techs:["Python","Flask","Bootstrap","Twillio"],desc:["Full-stack web application for music producers to upload their\n                    sounds to be recorded on old tape machines.\n                    Giving their music an authentic vintage sound.","Features include user login, uploading and downloading files,\n                    notifications via email and SMS powered by Twillio\u2019s Api/SDK,\n                    and collecting payments using the PayPal Api/SDK."],date:"Summer, 2020",link:{exists:!0,git:!0,url:"https://github.com/MichaelongII/TapeFlip.app"}},{title:"Swift iPod App",type:"iOS",techs:["Swift","SwitUi","CoreData"],desc:["iOS app that\u2019s goal is to replicate the core features of\n                    an iPod with the songs a user has stored in the Files App.","I implemented a space and time efficient player object\n                    to handle playing and skipping though songs, as well as\n                    support for playlists, artists, and albums."],date:"Spring, 2020",link:{exists:!0,git:!0,url:"https://github.com/MichaelongII/Swift-iPod"}},{title:"Little Free Library App",type:"Android",techs:["Java","Android"],desc:["A book sharing app for Android built in a group as the term project\n                    for my Intro to Software Engineering class.","The features that I implemented were, scanning\n                    a book\u2019s barcode with the camera, getting a book\u2019s information\n                    from the Google Books API, and storing this information using Firebase."],date:"Fall, 2020",link:{exists:!0,git:!0,url:"https://github.com/CMPUT301F20T29/Bobs-Little-Free-Library"}},{title:"Portfolio Site",type:"Android",techs:["JavaScript","React","CSS"],desc:["The website you're on right now! A simple desktop themed portfolio\n                    site built using React.","I find the best way for me to wrap my head around a new technology is\n                    to build a small project with it - so I made this site as my introduction to React."],date:"Summer, 2020",link:{exists:!0,git:!0,url:"https://github.com/MichaelongII/react-desktop-portfolio"}}],e}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{contentClass:"window-content h-65",className:"projects-window"+(this.props.showing?"":" d-none"),toggleWindowShowing:this.props.toggleWindowShowing},l.a.createElement("h2",null,"> projects"),this.projects.map((function(e,t){return l.a.createElement(k,{key:e.title,title:e.title,type:e.type,techs:e.techs,desc:e.desc,date:e.date,link:e.link})}))))}}]),n}(l.a.Component),k=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={projectExpanded:!1},e.toggleDescShowing=e.toggleDescShowing.bind(Object(i.a)(e)),e}return Object(o.a)(n,[{key:"toggleDescShowing",value:function(){!0===this.state.projectExpanded?null===document.querySelector(".project-desc:hover")&&this.setState({projectExpanded:!1}):this.setState({projectExpanded:!0})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"project-content",onClick:this.toggleDescShowing},l.a.createElement("p",{className:"expand-icon"},this.state.projectExpanded?"-":"+"),l.a.createElement("p",{className:"project-date"},this.props.date),l.a.createElement("h5",{className:"project-title"},"/ ",this.props.title,l.a.createElement("a",{className:this.props.link.exists?"":"d-none",href:this.props.link.url,target:"__blank"},l.a.createElement("img",{className:"small-icon",src:this.props.link.git?"gh.png":"link.png",alt:"link to project"}))),this.props.techs.map((function(e,t){return l.a.createElement("span",{key:e,className:"project-tech"}," ",e," ")})),l.a.createElement("p",{id:"project-desc"},this.props.desc.map((function(t,n){return l.a.createElement("p",{key:n,className:"project-desc"+(e.state.projectExpanded?"":" d-none")},t)})))))}}]),n}(l.a.Component),S=j,_=(l.a.Component,function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={showingWindow:!0},o.toggleWindowShowing=o.toggleWindowShowing.bind(Object(i.a)(o)),o.openWindow=o.openWindow.bind(Object(i.a)(o)),o}return Object(o.a)(n,[{key:"toggleWindowShowing",value:function(){this.setState((function(e){return{showingWindow:!e.showingWindow}}))}},{key:"openWindow",value:function(){!1===this.state.showingWindow&&this.setState({showingWindow:!0})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,{openWindow:this.openWindow}),l.a.createElement("div",{className:"window-container"},l.a.createElement(m.b,null,l.a.createElement(y,{path:"/",showing:this.state.showingWindow,toggleWindowShowing:this.toggleWindowShowing}),l.a.createElement(S,{path:"/projects",showing:this.state.showingWindow,toggleWindowShowing:this.toggleWindowShowing}))),l.a.createElement("footer",null,"built with ","<3"," by Michael Long / icons from ",l.a.createElement("a",{href:"https://icons8.com",target:"__blank"},"Icons8")))}}]),n}(l.a.Component));u.a.render(l.a.createElement(_,null),document.querySelector("#root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.50b9cc25.chunk.js.map