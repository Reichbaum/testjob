(this.webpackJsonptestjob=this.webpackJsonptestjob||[]).push([[0],{107:function(e,a,t){e.exports={preloader:"Preloader_preloader__1mKY0"}},109:function(e,a,t){e.exports=t.p+"static/media/reichbaum-logo.e3bf0b87.svg"},110:function(e,a,t){e.exports={aside:"Aside_aside__1qVwO"}},111:function(e,a,t){e.exports=t.p+"static/media/reich.2167a108.jpg"},112:function(e,a,t){e.exports={contactsList:"Contacts_contactsList__3tV7Z"}},118:function(e,a,t){e.exports={list:"Frontpage_list__1f-ld"}},134:function(e,a,t){e.exports=t(166)},139:function(e,a,t){},140:function(e,a,t){},166:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),o=(t(139),t(15)),m=t(43),u=(t(140),t(20)),i=t(30),s=t(47),E=t.n(s),p=t(48),g=t(100),_=t.n(g).a.create({baseURL:"https://api.github.com/"}),b=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return _.get("orgs/".concat(e,"/repos"),{params:{per_page:a,page:t}}).then((function(e){return e}))},d=t(55),f=E.a.mark(R),h=E.a.mark(k),v=E.a.mark(w),S={repositories:[],org:"",loading:!1,error:!1,number_of_pages:1,per_page:10,current_page:1,error_message:""},y=function(){return{type:"REPOS/SET_REPOS"}},O=function(e,a,t,n,r){return{type:"REPOS/SET_REPOS_SUCCESS",payload:e,org:a,number_of_pages:t,per_page:n,current_page:r}},x=function(e){return{type:"REPOS/SET_REPOS_FAILED",error_message:e}},j=function(e,a){return{type:"FETCHED_REPOS",data:e,page:a}};function R(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)("FETCHED_REPOS",k);case 2:case"end":return e.stop()}}),f)}function k(e){var a,t,n,r,l,c;return E.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(d.b)(y());case 2:return a=e.data,t=a.org,n=a.per_page,r=a.number_of_pages,o.prev=3,o.next=6,b(t,n,e.page);case 6:return(l=o.sent).headers.link&&l.headers.link.includes("last")&&(c=l.headers.link.match(new RegExp("next(.*)last")),r=c[1].match(/&page=(\d+).*$/)[1]),o.next=10,Object(d.b)(O(l.data,t,r,n,e.page));case 10:o.next=16;break;case 12:return o.prev=12,o.t0=o.catch(3),o.next=16,Object(d.b)(x(o.t0.message));case 16:case"end":return o.stop()}}),h,null,[[3,12]])}function w(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)([R()]);case 2:case"end":return e.stop()}}),v)}var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"REPOS/SET_REPOS":return Object(p.a)(Object(p.a)({},e),{},{repositories:[],loading:!0,error:!1,number_of_pages:0});case"REPOS/SET_REPOS_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{repositories:a.payload,loading:!1,error:!1,org:a.org,number_of_pages:a.number_of_pages,per_page:a.per_page,current_page:a.current_page});case"REPOS/SET_REPOS_FAILED":return Object(p.a)(Object(p.a)({},e),{},{repositories:[],loading:!1,error:!0,number_of_pages:0,error_message:a.error_message});default:return e}},C=t(215),P=function(e){var a=e.onPageChanged,t=e.number_of_pages,n=e.current_page;return r.a.createElement(C.a,{onChange:a,count:t,page:n,color:"primary"})},z=t(214),T=t(196),F=t(197),H=t(27),L=t.n(H),W=t(104),B=t.n(W),A=t(105),D=t.n(A),I=t(106),M=t.n(I),J=function(e){var a=e.name,t=e.html_url,n=e.forks_count,l=e.stargazers_count,c=e.watchers_count,o=e.description;return r.a.createElement("div",{className:L.a.singleRepo},r.a.createElement("a",{href:t,className:L.a.link},a),r.a.createElement("p",null,o),r.a.createElement("div",{className:L.a.features},r.a.createElement("div",{className:L.a.iconWrapper},r.a.createElement(B.a,{fontSize:"small"}),"Star ",r.a.createElement("span",null,l)),r.a.createElement("div",{className:L.a.iconWrapper},r.a.createElement(D.a,{fontSize:"small"}),"Fork ",r.a.createElement("span",null,n)),r.a.createElement("div",{className:L.a.iconWrapper},r.a.createElement(M.a,{fontSize:"small"}),"Watch ",r.a.createElement("span",null,c))))},G=function(){var e=Object(u.c)((function(e){return e.repos.repositories})),a=Object(u.c)((function(e){return e.repos.org})),t=Object(u.c)((function(e){return e.repos.number_of_pages})),n=Object(u.c)((function(e){return e.repos.current_page})),l=Object(u.c)((function(e){return e.repos.per_page})),c=Object(u.b)(),o=function(e,r){c(j({org:a,number_of_pages:t,current_page:n,per_page:l},r))};return r.a.createElement(z.a,null,0!==e.length?r.a.createElement(P,{onPageChanged:o,number_of_pages:t,current_page:n}):null,r.a.createElement(T.a,null,e.map((function(e){return r.a.createElement(F.a,{key:e.id},r.a.createElement(J,{name:e.name,html_url:e.html_url,forks_count:e.forks_count,stargazers_count:e.stargazers_count,watchers_count:e.watchers_count,description:e.description}))}))),0!==e.length?r.a.createElement(P,{onPageChanged:o,number_of_pages:t,current_page:n}):null)},U=t(107),K=t.n(U),V=function(){return r.a.createElement("div",{className:K.a.preloader},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},q=t(198),Y=t(83),Z=function(){var e=Object(u.c)((function(e){return e.repos.error})),a=Object(u.c)((function(e){return e.repos.loading})),t=Object(u.b)(),n=Object(u.c)((function(e){return e.repos.org})),l=Object(u.c)((function(e){return e.repos.number_of_pages})),c=Object(u.c)((function(e){return e.repos.per_page})),o=Object(u.c)((function(e){return e.repos.error_message}));return r.a.createElement(i.c,{initialValues:{org:n||"google",per_page:c||10,number_of_pages:l||1},onSubmit:function(e,a){var n=a.setSubmitting;t(j(e,1)),n(!1)}},(function(t){var n=t.isSubmitting;return r.a.createElement(i.b,{className:L.a.repoForm},r.a.createElement(z.a,{className:L.a.repoContainer},r.a.createElement(i.a,{name:"org",label:"Organisation",margin:"normal",variant:"filled",className:L.a.inputText,component:Y.a}),r.a.createElement(i.a,{name:"per_page",label:"Per page",type:"number",margin:"normal",variant:"filled",className:L.a.inputNumber,component:Y.a}),r.a.createElement(i.a,{type:"hidden",name:"number_of_pages"})),r.a.createElement(q.a,{variant:"contained",color:"primary",type:"submit",disabled:n},"Submit"),a?r.a.createElement(V,null):e?r.a.createElement("p",null,"Error! ",o):r.a.createElement(G,null))}))},$=t(108),X=t.n($),Q=t(61),ee=t(199),ae=function(){return r.a.createElement("div",null,r.a.createElement(Q.a,{variant:"h1",component:"h1",gutterBottom:!0},r.a.createElement(X.a,{fontSize:"large"})," List organization repositories"),r.a.createElement(ee.a,{variant:"body2",href:"https://github.com/Reichbaum/testjob"},"Link to Github"),r.a.createElement(Z,null))},te=t(41),ne=t(120),re=Object(te.c)({repos:N}),le=Object(ne.a)(),ce=Object(te.e)(re,Object(te.a)(le));le.run(w);var oe=ce,me=t(201),ue=t(200),ie=t(109),se=t.n(ie),Ee=t(59),pe=t.n(Ee),ge=function(){return r.a.createElement("header",{className:pe.a.header},r.a.createElement(ue.a,null,r.a.createElement("a",{className:pe.a.logo,href:"/testjob/"},r.a.createElement("img",{src:se.a,alt:"Reichbaum"})),r.a.createElement("p",{className:pe.a.title},"Frontender React"),r.a.createElement(ee.a,{className:pe.a.link,variant:"body2",href:"https://github.com/Reichbaum/testjob"},"Github")))},_e=t(110),be=t.n(_e),de=t(60),fe=t.n(de),he=function(){return r.a.createElement("nav",{className:fe.a.nav},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/test",activeClassName:fe.a.active},"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/aboutme",activeClassName:fe.a.active},"\u041e\u0431\u043e \u043c\u043d\u0435")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/contacts",activeClassName:fe.a.active},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"))))},ve=function(){return r.a.createElement("aside",{className:be.a.aside},r.a.createElement(he,null))},Se=t(212),ye=t(119),Oe=Object(ye.a)({palette:{type:"dark",primary:{main:"#6b5b95"},secondary:{main:"#6dbd1c"}},typography:{h1:{fontSize:"2.6rem"},h2:{fontSize:"2rem"}}}),xe=t(202),je=t(203),Re=t(204),ke=t(111),we=t.n(ke),Ne=t(82),Ce=t.n(Ne),Pe=t(73),ze=t.n(Pe),Te=t(205),Fe=t(206),He=t(207),Le=t(208),We=t(209),Be=t(210),Ae=t(211),De=function(){return r.a.createElement("div",null,r.a.createElement(Q.a,{variant:"h1",component:"h1",gutterBottom:!0},"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u042e\u043b\u0438\u044f"),r.a.createElement(me.a,{container:!0},r.a.createElement(me.a,{item:!0,xs:12,sm:3},r.a.createElement("img",{src:we.a,width:150,className:"avatar",alt:"Reichbaum Julia"})),r.a.createElement(me.a,{item:!0,xs:12,sm:9},r.a.createElement(Q.a,{variant:"body1",paragraph:!0},"\u041c\u043d\u0435 38 \u043b\u0435\u0442, \u044f \u0440\u043e\u0434\u043e\u043c \u0438\u0437 \u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430, \u0441\u0435\u0439\u0447\u0430\u0441 \u0436\u0438\u0432\u0443 \u0432 \u0410\u043d\u0430\u043f\u0435. 7 \u043b\u0435\u0442 \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c \u0444\u0440\u0438\u043b\u0430\u043d\u0441\u0435\u0440\u0441\u043a\u043e\u0439 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439 - \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e \u0441\u0430\u0439\u0442\u044b, \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c, \u043f\u043e \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u044f\u043c \u043c\u043e\u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 - ",r.a.createElement("a",{href:"https://reichbaum.ru/projects",target:"_blank",rel:"noopener noreferrer"},"\u0432\u043e\u0442 \u043e\u043d\u0438"),". \u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0432 \u0441\u0435\u0431\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043d\u0430\u0441\u0442\u0430\u0432\u043d\u0438\u043a\u0430 \u043d\u0430 \u043e\u043d\u043b\u0430\u0439\u043d-\u043a\u0443\u0440\u0441\u0430\u0445 \u043f\u043e HTML \u0438 CSS, \u044f \u043f\u043e\u043d\u044f\u043b\u0430, \u0447\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u044f \u0432 \u043e\u0434\u0438\u043d\u043e\u0447\u043a\u0443 \u044f \u043d\u0435 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044e\u0441\u044c, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u0440\u0438\u043d\u044f\u043b\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 - \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0430 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0431\u044f \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u0435 \u043d\u0430 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."))),r.a.createElement(Q.a,{variant:"body1",paragraph:!0},"\u041c\u043e\u0438 \u0441\u043a\u0438\u043b\u043b\u044b - \u0445\u043e\u0440\u043e\u0448\u043e \u0437\u043d\u0430\u044e HTML, CSS, \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0442\u043a\u0443, \u0432\u043b\u0430\u0434\u0435\u044e \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u043c\u0438. Javacript - \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0435 \u043e\u0447\u0435\u043d\u044c \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447, \u0441\u0435\u0439\u0447\u0430\u0441 \u0438\u0437\u0443\u0447\u0430\u044e \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0447\u0430\u0441\u0442\u044c. PHP - \u043d\u0430 \u0440\u0430\u0431\u043e\u0447\u0435\u043c \u0443\u0440\u043e\u0432\u043d\u0435, \u0432 \u0441\u0438\u043b\u0443 \u043f\u043b\u043e\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0412\u043e\u0440\u0434\u043f\u0440\u0435\u0441\u0441\u043e\u043c. \u0420\u0430\u0437\u043e\u0431\u0440\u0430\u043b\u0430\u0441\u044c \u0441 \u043f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430\u043c\u0438 (Less/Sass), \u043d\u0430\u0443\u0447\u0438\u043b\u0430\u0441\u044c Git, \u043f\u043e\u043d\u044f\u043b\u0430 \u0441\u0443\u0442\u044c Gulp, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e \u0432 \u0440\u0430\u0431\u043e\u0442\u0435. \u0412 \u0442\u0435\u043e\u0440\u0438\u044e \u0443\u0433\u043b\u0443\u0431\u043b\u044f\u044e\u0441\u044c \u043f\u043e \u043c\u0435\u0440\u0435 \u043d\u0430\u0434\u043e\u0431\u043d\u043e\u0441\u0442\u0438, \u0443\u043c\u0435\u044e \u0433\u0443\u0433\u043b\u0438\u0442\u044c, \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c \u0438 \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0434 \u043f\u043e\u0434 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043d\u0443\u0436\u0434\u044b. \u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 - \u0447\u0438\u0442\u0430\u044e \u0445\u043e\u0440\u043e\u0448\u043e, \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u043d\u044b\u0439 - \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0431\u044b\u0442\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u0449\u0435\u043d\u0438\u044f."),r.a.createElement(Q.a,{variant:"body1",paragraph:!0},"\u0421\u0435\u0439\u0447\u0430\u0441 \u043e\u0447\u0435\u043d\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0435\u043d React \u0438 \u0441\u043e\u043f\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 - \u0437\u043d\u0430\u043a\u043e\u043c\u0430 \u0441 Typescript, Redux, Axios, Thunk/Saga, Formik, Material UI. \u0425\u043e\u0447\u0443 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043f\u043e\u0434 \u043d\u0430\u0447\u0430\u043b\u043e \u043a\u0440\u0443\u0442\u044b\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0438 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0431\u043e\u0435\u0432\u044b\u0445 \u0437\u0430\u0434\u0430\u0447\u0430\u0445. \u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043f\u043e\u0447\u0442\u0438 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u044e\u0442, \u043d\u043e\u0432\u044b\u0445 \u043d\u0435 \u0431\u0435\u0440\u0443, \u0438\u043c\u0435\u044e \u0446\u0435\u043b\u044c."),r.a.createElement(xe.a,{className:"gutterBottom"}),r.a.createElement(Q.a,{variant:"h2",component:"h2"},"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),r.a.createElement(T.a,null,r.a.createElement(F.a,null,r.a.createElement(je.a,null,r.a.createElement(Ce.a,{color:"error"})),r.a.createElement(Re.a,{primary:"2 \u043a\u0443\u0440\u0441\u0430 \u0412\u044f\u0442\u0413\u0422\u0423 \u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u0440\u0438\u0432\u043e\u0434 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u0445 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043e\u043a (\u0445\u043e\u0442\u0435\u043b\u0430 \u043d\u0430 \u0418\u0422, \u0437\u0430\u0432\u0430\u043b\u0438\u043b\u0430 \u0444\u0438\u0437\u0438\u043a\u0443. \u041d\u0435 \u0442\u043e.)"})),r.a.createElement(F.a,null,r.a.createElement(je.a,null,r.a.createElement(Ce.a,{color:"error"})),r.a.createElement(Re.a,{primary:"1 \u043a\u0443\u0440\u0441 \u0418\u0413\u0423 \u0422\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0444\u0438\u0437\u0438\u043a\u0430 (\u043d\u0430 \u0418\u0422 \u043d\u0435 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 \u0438\u0437-\u0437\u0430 \u043d\u0435\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f\r \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b. \u0412\u043e\u043e\u0431\u0449\u0435 \u043d\u0435 \u0442\u043e.)"})),r.a.createElement(F.a,null,r.a.createElement(je.a,null,r.a.createElement(ze.a,{color:"secondary"})),r.a.createElement(Re.a,{primary:"\u0418\u0440\u0413\u0423\u041f\u0421 \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u043e\u043c (\u0437\u0430\u0447\u0438\u0441\u043b\u0438\u043b\u0438 \u0432\u043c\u0435\u0441\u0442\u043e \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0439 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0418\u0422. \u0420\u0435\u0448\u0438\u043b\u0430, \u0447\u0442\u043e \u043d\u0435 \u0441\u0443\u0434\u044c\u0431\u0430, \u043e\u0441\u0442\u0430\u043b\u0430\u0441\u044c \u0442\u0443\u0442."}))),r.a.createElement(Q.a,{variant:"body2",paragraph:!0},"\u0412 \u043e\u0431\u0449\u0435\u043c, \u043f\u043e \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u044f \u043e\u0431\u043b\u0430\u0434\u0430\u044e \u043d\u0435 \u0441\u0430\u043c\u044b\u043c\u0438 \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u043c\u0438 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438, \u043d\u043e \u0438\u043c\u0435\u044e \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u043a\u043b\u0430\u0434 \u0443\u043c\u0430 \u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0438 \u0440\u0435\u0448\u0438\u0442\u044c \u043b\u044e\u0431\u0443\u044e \u0432\u0437\u044f\u0442\u0443\u044e \u043d\u0430 \u0441\u0435\u0431\u044f \u0437\u0430\u0434\u0430\u0447\u0443, \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0432 \u0435\u0435 \u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u043c\u0435\u043b\u043a\u0438\u0435."),r.a.createElement(xe.a,{className:"gutterBottom"}),r.a.createElement(Q.a,{variant:"h2",component:"h2"},"\u0420\u0430\u0431\u043e\u0442\u0430"),r.a.createElement(Te.a,{align:"alternate"},r.a.createElement(Fe.a,null,r.a.createElement(He.a,null,r.a.createElement(Q.a,{color:"textSecondary"},"\u041e\u043a\u0442\u044f\u0431\u0440\u044c, 2018 \u2014 \u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f")),r.a.createElement(Le.a,null,r.a.createElement(We.a,null),r.a.createElement(Be.a,null)),r.a.createElement(Ae.a,null,r.a.createElement(Q.a,null,"\u041a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u043d\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u0441\u0430\u0439\u0442\u0430 ",r.a.createElement("a",{href:"https://www.bahn-erlebnisreise.de/",target:"_blank",rel:"noopener noreferrer"},"Die Eisenbahn Erlebnisreise")," (Deutchland, D\xfcsseldorf). ",r.a.createElement("br",null),"CMS Wordpress - \u0440\u0435\u0434\u0438\u0437\u0430\u0439\u043d, \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u0437\u0430\u0434\u0430\u0447 \u043f\u043e \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u044e \u043d\u043e\u0432\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 (PHP + Javascript). \u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 \u0430\u0433\u0433\u0440\u0435\u0433\u0430\u0442\u043e\u0440\u043e\u043c Journaway.com. ",r.a.createElement("a",{href:"https://reichbaum.ru/projects",target:"_blank",rel:"noopener noreferrer"},"\u0412\u0441\u044f\u043a\u0438\u0439 \u0444\u0440\u0438\u043b\u0430\u043d\u0441.")))),r.a.createElement(Fe.a,null,r.a.createElement(He.a,null,r.a.createElement(Q.a,{color:"textSecondary"},"\u0414\u0435\u043a\u0430\u0431\u0440\u044c, 2012 \u2014 \u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c 2018")),r.a.createElement(Le.a,null,r.a.createElement(We.a,null),r.a.createElement(Be.a,null)),r.a.createElement(Ae.a,null,r.a.createElement(Q.a,null,"\u0421\u0432\u043e\u0439 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0434\u043b\u044f \u0441\u0435\u043c\u0435\u0439\u043d\u043e\u0433\u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430 ",r.a.createElement("a",{href:"https://ultrairk.ru",target:"_blank",rel:"noopener noreferrer"},"\u0410\u0432\u0442\u043e\u0441\u0438\u0433\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438")," (\u0441\u0435\u0439\u0447\u0430\u0441 \u043d\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f) - \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u0430 CMS Opencart, \u043d\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u043e\u043c, \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u0424\u0440\u0438\u043b\u0430\u043d\u0441. "))),r.a.createElement(Fe.a,null,r.a.createElement(He.a,null,r.a.createElement(Q.a,{color:"textSecondary"},"\u0410\u043f\u0440\u0435\u043b\u044c, 2010 \u2014 \u041d\u043e\u044f\u0431\u0440\u044c, 2012")),r.a.createElement(Le.a,null,r.a.createElement(We.a,null),r.a.createElement(Be.a,null)),r.a.createElement(Ae.a,null,r.a.createElement(Q.a,null,r.a.createElement("b",null,"\u0422\u0413 \u0412\u041e\u0421\u0422\u041e\u041a \u041a\u041e\u0421\u041c\u0415\u0422\u0418\u041a, \u041d\u0410\u0427\u0410\u041b\u042c\u041d\u0418\u041a \u041e\u0422\u0414\u0415\u041b\u0410 \u0418\u041d\u0422\u0415\u0420\u041d\u0415\u0422-\u041c\u0410\u0413\u0410\u0417\u0418\u041d\u0410"),r.a.createElement("br",null),"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 \u0431\u044b\u0442\u043e\u0432\u043e\u0439 \u0445\u0438\u043c\u0438\u0438 \u0438 \u043a\u043e\u0441\u043c\u0435\u0442\u0438\u043a\u0438 Irmag.ru \u043d\u0430 \u0431\u0430\u0437\u0435 \u043a\u0440\u0443\u043f\u043d\u043e\u0439 \u043e\u043f\u0442\u043e\u0432\u043e\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u2014 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0434\u0435\u0439 \u0438 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0434\u0430\u0447 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430\u043c-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u0441\u0430\u0439\u0442\u0430 (CMS Bitrix), \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 \u0432\u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430, \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0439 \u0442\u043e\u0432\u0430\u0440\u043e\u0432, \u043d\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u043e\u043c (25000 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0439). \u0417\u0430\u043f\u0443\u0441\u043a \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430."))),r.a.createElement(Fe.a,null,r.a.createElement(He.a,null,r.a.createElement(Q.a,{color:"textSecondary"},"\u0414\u0435\u043a\u0430\u0431\u0440\u044c, 2006 \u2014 \u041e\u043a\u0442\u044f\u0431\u0440\u044c, 2009")),r.a.createElement(Le.a,null,r.a.createElement(We.a,null),r.a.createElement(Be.a,null)),r.a.createElement(Ae.a,null,r.a.createElement(Q.a,null,r.a.createElement("b",null,"\u0422\u0415\u041b\u0415\u041a\u041e\u041c\u041f\u0410\u041d\u0418\u042f \u0410\u0418\u0421\u0422, \u0414\u0418\u0417\u0410\u0419\u041d\u0415\u0420-\u0412\u0415\u0420\u0421\u0422\u0410\u041b\u042c\u0429\u0418\u041a"),r.a.createElement("br",null),"\u0412\u0435\u0440\u0441\u0442\u043a\u0430 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0433\u0430\u0437\u0435\u0442\u044b \u0438 \u0436\u0443\u0440\u043d\u0430\u043b\u0430 \u043d\u0430 \u0442\u0435\u043c\u0443 \xab\u0422\u0435\u043b\u0435\u0432\u0438\u0434\u0435\u043d\u0438\u0435, \u043a\u0438\u043d\u043e, \u043c\u0443\u0437\u044b\u043a\u0430, \u0448\u043e\u0443-\u0431\u0438\u0437\u043d\u0435\u0441\xbb, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0445 \u043c\u0430\u043a\u0435\u0442\u043e\u0432, \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u043a \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438. \u0414\u0438\u0437\u0430\u0439\u043d \u043f\u043e\u043b\u0438\u0433\u0440\u0430\u0444\u0438\u0438, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0444\u0438\u0440\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u0442\u0438\u043b\u044f \u043f\u043e \u0437\u0430\u043a\u0430\u0437\u0443."))),r.a.createElement(Fe.a,null,r.a.createElement(He.a,null,r.a.createElement(Q.a,{color:"textSecondary"},"\u041e\u043a\u0442\u044f\u0431\u0440\u044c, 2004 \u2014 \u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c, 2006")),r.a.createElement(Le.a,null,r.a.createElement(We.a,null),r.a.createElement(Be.a,null)),r.a.createElement(Ae.a,null,r.a.createElement(Q.a,null,r.a.createElement("b",null,"\u0420\u0415\u041a\u041b\u0410\u041c\u041d\u041e-\u0418\u0417\u0414\u0410\u0422\u0415\u041b\u042c\u0421\u041a\u0410\u042f \u0424\u0418\u0420\u041c\u0410 \xab\u0413\u0412\u041e\u0417\u0414\u042c \u041f\u041b\u042e\u0421\xbb, \u0414\u0418\u0417\u0410\u0419\u041d\u0415\u0420-\u0412\u0415\u0420\u0421\u0422\u0410\u041b\u042c\u0429\u0418\u041a"),r.a.createElement("br",null),"\u0412\u0435\u0440\u0441\u0442\u043a\u0430 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u043e\u0433\u043e \u0436\u0443\u0440\u043d\u0430\u043b\u0430-\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0445 \u043c\u0430\u043a\u0435\u0442\u043e\u0432 \u0438 \u0441\u0442\u0430\u0442\u0435\u0439. \u0414\u0438\u0437\u0430\u0439\u043d \u043f\u043e\u043b\u0438\u0433\u0440\u0430\u0444\u0438\u0438, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0444\u0438\u0440\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u0442\u0438\u043b\u044f \u043f\u043e \u0437\u0430\u043a\u0430\u0437\u0443."))),r.a.createElement(Fe.a,null,r.a.createElement(He.a,null,r.a.createElement(Q.a,{color:"textSecondary"},"\u041d\u043e\u044f\u0431\u0440\u044c 2001 - \u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c, 2004")),r.a.createElement(Le.a,null,r.a.createElement(We.a,null),r.a.createElement(Be.a,null)),r.a.createElement(Ae.a,null,r.a.createElement(Q.a,null,r.a.createElement("b",null,"\u0418\u0417\u0414\u0410\u0422\u0415\u041b\u042c\u0421\u041a\u0418\u0419 \u0414\u041e\u041c \xab\u0421\u041c \u041d\u041e\u041c\u0415\u0420 \u041e\u0414\u0418\u041d\xbb, \u041e\u041f\u0415\u0420\u0410\u0422\u041e\u0420 \u041f\u041a"),r.a.createElement("br",null),"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438.")))))},Ie=t(112),Me=t.n(Ie),Je=t(114),Ge=t.n(Je),Ue=t(115),Ke=t.n(Ue),Ve=t(116),qe=t.n(Ve),Ye=t(117),Ze=t.n(Ye),$e=t(113),Xe=t.n($e),Qe=function(e){return r.a.createElement(F.a,Object.assign({component:"a"},e))},ea=function(){return r.a.createElement("div",null,r.a.createElement(Q.a,{variant:"h1",component:"h1",gutterBottom:!0},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),r.a.createElement(T.a,{className:Me.a.contactsList},r.a.createElement(F.a,null,r.a.createElement(Qe,{href:"https://reichbaum.ru/projects",target:"_blank",rel:"noopener"},r.a.createElement(je.a,null,r.a.createElement(Xe.a,{color:"secondary",fontSize:"large"})),r.a.createElement(Re.a,{primary:"Porfolio"}))),r.a.createElement(F.a,null,r.a.createElement(Qe,{href:"https://www.facebook.com/?id=100009515889198",target:"_blank",rel:"noopener"},r.a.createElement(je.a,null,r.a.createElement(Ge.a,{htmlColor:"#3b5998",fontSize:"large"})),r.a.createElement(Re.a,{primary:"Facebook"}))),r.a.createElement(F.a,null,r.a.createElement(Qe,{href:"https://www.instagram.com/reichbaum.ju",target:"_blank",rel:"noopener"},r.a.createElement(je.a,null,r.a.createElement(Ke.a,{htmlColor:"#bc2a8d",fontSize:"large"})),r.a.createElement(Re.a,{primary:"Instagram"}))),r.a.createElement(F.a,null,r.a.createElement(Qe,{href:"https://resolve/?domain=ReichbaumJu",target:"_blank",rel:"noopener"},r.a.createElement(je.a,null,r.a.createElement(qe.a,{htmlColor:"#0088cc",fontSize:"large"})),r.a.createElement(Re.a,{primary:"Telegram"}))),r.a.createElement(F.a,null,r.a.createElement(Qe,{href:"https://api.whatsapp.com/send?phone=79180635700",target:"_blank",rel:"noopener"},r.a.createElement(je.a,null,r.a.createElement(Ze.a,{htmlColor:"#4AC959",fontSize:"large"})),r.a.createElement(Re.a,{primary:"WhatsApp"})))))},aa=t(118),ta=t.n(aa),na=function(e){var a=e.text;return r.a.createElement(F.a,null,r.a.createElement(je.a,null,r.a.createElement(ze.a,{color:"secondary"})),r.a.createElement(Re.a,{primary:a}))},ra=function(){return r.a.createElement("div",null,r.a.createElement(Q.a,{variant:"body1",gutterBottom:!0},"\u0417\u0430\u0434\u0430\u0447\u0430: \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c SPA \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432 \u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u043d\u0430 Github. \u041f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438, \u043b\u043e\u0430\u0434\u0435\u0440 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432.",r.a.createElement("br",null),"\u0412 \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u044b\u0432\u043e\u0434\u0438\u043c\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b:"),r.a.createElement(T.a,{className:ta.a.list},r.a.createElement(na,{text:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),r.a.createElement(na,{text:"URL \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f (\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0441 \u0432\u044b\u0432\u043e\u0434\u043e\u043c \u0438\u043c\u0435\u043d\u0438)"}),r.a.createElement(na,{text:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u043e\u0440\u043a\u043e\u0432, \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e watchers"}),r.a.createElement(na,{text:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0432\u0435\u0437\u0434 \u0443 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f (stargazers)"})),r.a.createElement(m.b,{to:"/test"},r.a.createElement(q.a,{variant:"contained",color:"primary"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0437\u0430\u0434\u0430\u043d\u0438\u044e")))};t(165);function la(){return r.a.createElement("div",{className:"app"},r.a.createElement(me.a,{container:!0,spacing:3},r.a.createElement(me.a,{item:!0,xs:12},r.a.createElement(ge,null)),r.a.createElement(ue.a,null,r.a.createElement(me.a,{container:!0,spacing:5},r.a.createElement(me.a,{item:!0,xs:12,sm:3},r.a.createElement(ve,null)),r.a.createElement(me.a,{item:!0,xs:12,sm:9},r.a.createElement("div",{className:"content"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/test",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(o.a,{path:"/contacts",render:function(){return r.a.createElement(ea,null)}}),r.a.createElement(o.a,{path:"/aboutme",render:function(){return r.a.createElement(De,null)}}),r.a.createElement(o.a,{exact:!0,path:"/",render:function(){return r.a.createElement(ra,null)}}))))))))}var ca=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(u.a,{store:oe},r.a.createElement(Se.a,{theme:Oe},r.a.createElement(la,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ca,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,a,t){e.exports={singleRepo:"Repos_singleRepo__1FYmO",features:"Repos_features__2Ihz0",link:"Repos_link__1xldI",iconWrapper:"Repos_iconWrapper__3RHKg",repoForm:"Repos_repoForm__11rMD",repoContainer:"Repos_repoContainer__2m6yR",inputText:"Repos_inputText__3za4Z",inputNumber:"Repos_inputNumber__1WLsP"}},59:function(e,a,t){e.exports={header:"Header_header__33_HH",title:"Header_title__3-9ex",logo:"Header_logo__3zFc4",link:"Header_link__u-Awe"}},60:function(e,a,t){e.exports={nav:"Navbar_nav__2qKuH",active:"Navbar_active__R5XNr"}}},[[134,1,2]]]);
//# sourceMappingURL=main.da78da22.chunk.js.map