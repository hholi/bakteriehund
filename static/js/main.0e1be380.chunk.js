(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),l=n.n(i),o=(n(66),n(145)),s=n(146),d=n(2),u=n(12),c=n(13),m=n(15),k=n(14),g=n(16),h=n(52),p=n(53),b=(n(77),Object(d.c)(function(e){var t=e.languages,n=e.activeLanguage,a=e.setActiveLanguage;return r.a.createElement("ul",{className:"selector"},t.filter(function(e){return e!==n}).map(function(e){return r.a.createElement("li",{key:e.code},r.a.createElement("button",{onClick:function(){return a(e.code)}},e.name))}))})),f=n(27),v=n.n(f),E=(n(79),n(54)),j=n.n(E),y=n(55),w=n.n(y),N=(n(81),a.Component,n(22)),x=n(5),H=n.n(x),I=n(56),A=n.n(I),M=n(57),T=n.n(M),O=n(58),B=n.n(O),K=n(59),P=n.n(K),U=(n(83),function(e){function t(e,n){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(k.a)(t).call(this,e,n))).handleSelect=a.handleSelect.bind(Object(N.a)(Object(N.a)(a))),a.state={},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"handleSelect",value:function(e,t){this.setState({index:e,direction:t.direction})}},{key:"render",value:function(){var e=this.state,t=(e.index,e.direction);return r.a.createElement(H.a,{direction:t,onSelect:this.handleSelect,interval:6e3},r.a.createElement(H.a.Item,null,r.a.createElement("img",{width:900,height:500,alt:"900x500",src:A.a}),r.a.createElement(H.a.Caption,null,r.a.createElement("h3",null),r.a.createElement("p",null))),r.a.createElement(H.a.Item,null,r.a.createElement("img",{width:900,height:500,alt:"900x500",src:T.a}),r.a.createElement(H.a.Caption,null,r.a.createElement("h3",null),r.a.createElement("p",null))),r.a.createElement(H.a.Item,null,r.a.createElement("img",{width:900,height:500,alt:"900x500",src:B.a}),r.a.createElement(H.a.Caption,null,r.a.createElement("h3",null),r.a.createElement("p",null))),r.a.createElement(H.a.Item,null,r.a.createElement("img",{width:900,height:500,alt:"900x500",src:P.a}),r.a.createElement(H.a.Caption,null,r.a.createElement("h3",null),r.a.createElement("p",null))))}}]),t}(r.a.Component)),S=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(k.a)(t).call(this,e))).props.initialize({languages:[{name:"no",code:"no"},{name:"en",code:"en"}],translation:p,options:{defaultLanguage:"no",renderToStaticMarkup:h.renderToStaticMarkup}}),n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"left-margin"}),r.a.createElement("div",{className:"LanguageSelect"},r.a.createElement(b,null)),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null),r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement(d.b,{id:"project.title"}))),r.a.createElement(U,null),r.a.createElement("div",{className:"App-info"},r.a.createElement("p",null,r.a.createElement(d.b,{id:"project.info1"})),r.a.createElement("p",null,r.a.createElement(d.b,{id:"project.info2"}))),r.a.createElement("div",{className:"App-proj",align:"left"},r.a.createElement("p",null,r.a.createElement(d.b,{id:"project.contrib"})),r.a.createElement("p",null,r.a.createElement(d.b,{id:"project.mk1"})),r.a.createElement("p",null,r.a.createElement(d.b,{id:"project.amh1"})),r.a.createElement("p",null,r.a.createElement(d.b,{id:"project.ama"})),r.a.createElement("p",null,r.a.createElement(d.b,{id:"project.jn"}))),r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("p",{className:"App-dark"},r.a.createElement(d.b,{id:"wheel.text5"})),r.a.createElement("p",{className:"App-separator"},r.a.createElement(d.b,{id:"objective.conclusion"}))),r.a.createElement("div",{className:"App-contributors"},r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:merethe.kumle@bakteriehund.no"},"Merethe Kumle"),", ",r.a.createElement(d.b,{id:"project.mk"})),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:anne.marit.hagen@bakteriehund.no"},"Anne Marit Hagen"),", ",r.a.createElement(d.b,{id:"project.amh"}))),r.a.createElement("div",null)))}}]),t}(a.Component),C=Object(d.c)(S),D=function(e){return r.a.createElement(d.a,null,r.a.createElement(o.a,null,r.a.createElement(s.a,{path:"/",component:C})))};Object(i.render)(r.a.createElement(D,null),document.getElementById("root"));var F=D;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},27:function(e,t,n){e.exports=n.p+"static/media/hovedlogo.79600773.svg"},53:function(e){e.exports={main:{soon:["Her kommer Bakteriehund","Bakteriehund coming soon"]},objective:{question:["Kan hunder bidra i detektering og sanering av utbrudd i sykehus?","May dogs contribute in detection and ... ?"],conclusion:["Ved a\u030a identifisere bakteriekilder vil bakteriehundene kunne forhindre/begrense spredning av helsetjenesteervervede infeksjoner, og gjennom dette forhindre at allerede sa\u030arbare pasienter fa\u030ar en ekstra belastning.","By identifying bacteria sources the bacteria dogs may prevent or reduce the spread of healthcare-acquired infections and preventing an additional burden on vulnerable patients "]},project:{title:[" ","- with a nose for bacteria"],info1:["Prosjekt Bakteriehund har som ma\u030alsetning a\u030a v\xe6re de f\xf8rste i Norge som utdanner hunder som effektivt og sikkert s\xf8ker opp bakteriekilder pa\u030a interi\xf8r, vegger, gulv og medisinsk utstyr inne i sykehus.",'Project "Bacteria dogs" aims to be the first in Norway to train dogs that efficiently and safely searches for bacterial sources hospital environment.'],info2:["Bruk av bakteriehunder er en helt ny ma\u030ate a\u030a tenke tiltak for a\u030a redusere forekomsten av helsetjenesteervervede bakterieinfeksjoner og kan bli en viktig ressurs i detektering og sanering av utbrudd i sykehus.","Use of bacteria dogs is a completely new strategy to address the occurence of healthcare-acquired infections and may be an important resource for detection and decontamination after nosocomial outbreaks in hospitals."],contrib:["Initiativtakerne bak Bakteriehund prosjektet er dr. med Merethe Kumle og hundetrener/atferdskonsulent Anne Marit Hagen. I 2018 og 2019 finansieres prosjektet via Innovasjonsmidler fra Helse-Nord. I dag best\xe5r prosjektet av: ","Project Bakteriehund was initiated by dr.med. Merethe Kumle and dog trainer/behavioral and trainer consultant Anne Marit Hagen. In 2018-2019 the project is supported by innovation funding from Northern Norway Regional Health Authority. Currently the project staff is:"],mk1:["Prosjektleder Merethe Kumle, forsker, R\xf8ntgenavdelingen UNN Troms\xf8","Project manager Merethe Kumle, researcher, R\xf8ntgenavdelingen UNN Troms\xf8"],amh1:["Prosjektmedarbeider Anne Marit Hagen, Hundefaglig ansvarlig Bakteriehundprosjektet, Hundehagen, Trondheim.","Project associate Anne Marit Hagen, responsible for dog training, Hundehagen, Trondheim."],mk:["Forsker, R\xf8ntgenavdelingen UNN Troms\xf8","Researcher, R\xf8ntgenavdelingen UNN Troms\xf8"],amh:["Spesials\xf8kstrener, Hundehagen, Trondheim","dog trainer, Hundehagen, Trondheim"],ama:["Prosjektmedarbeider Anne Mette Asfeldt, R\xe5dgivende smittevernoverlege for Finnmarkssykehuset, 1. amanuensis II UiT.","Project associate  Anne Mette Asfeldt, R\xe5dgivende smittevernoverlege for Finnmarkssykehuset, 1. amanuensis II UiT."],jn:["Prosjektmedarbeider Jan Norum, professor II UiT, overlege Finnmarkssykehuset Hammerfest.","Project associate Jan Norum, professor II UiT, overlege Finnmarkssykehuset Hammerfest."]},wheel:{title1:["Utbrudd i sykehus","Outbreaks in hospitals"],text1:["Utbrudd av Klebsiella pneumonia i sykehus kan medf\xf8re \xf8kt sykelighet og d\xf8delighet. Det kan v\xe6re vanskelig a\u030a stanse et utbrudd og en av utfordringene er a\u030a finne og sanere alle smittekilder. Der kan hundesnuten komme inn.","Outbreaks of Klebsiella pneumonia in hospitals may increase lethality. Outbreaks may be difficult to stop and a  "],title2:["Bakteriehund \u2013 en hund etter bakterier","eng"],text2:["Erfaringsmessig vil spesials\xf8kshunder kunne s\xf8ke etter flere ulike kjemiske komponenter. Vi forventer derfor at hundene skal kunne l\xe6re a\u030a detektere flere typer bakterier, og at na\u030ar de har l\xe6rt a\u030a gjenkjenne Klebsiella pneumonia vil vi pa\u030a relativt kort tid l\xe6re dem a\u030a finne andre bakterier. Pa\u030a sikt vil elektroniske \u201dneser\u201d kunne utkonkurrere hunder i ulike typer av s\xf8ksarbeid. Fordelen med elektroniske \u201dneser\u201d, er at de ikke blir slitne og ikke har da\u030arlige dager, men hundene kan opps\xf8ke luktkilden, noe maskinene ikke kan.","eng"],title3:["Metode","eng"],text3:["Vi har brukt moderne treningsmetoder og ulike typer s\xf8kshjelpemidler for a\u030a l\xe6re hundene a\u030a skille mellom ulike typer lukt. Hundene har l\xe6rt a\u030a markere lukten av Klebsiella pneumonia og ignorere andre lukter, f.eks. lukten av E-coli. I prosjektet har vi brukt tid pa\u030a a\u030a utvikle en metode for a\u030a samle lukt fra levende bakterier over i et trygt treningsmedium. Bioingeni\xf8r Lotte Andreassen ved Mikrobiologisk avdeling ved UNN Troms\xf8 har deltatt i dette arbeidet.","eng"],title4:["Hvor er vi og hvor ga\u030ar vi?","enf"],text4a:["Hundene kan i dag skille mellom ulike bakterier og identifisere Klebsiella pneumonia i labratoriesetting. Vi planlegger a\u030a gjennomf\xf8re en dobbeltblind test i l\xf8pet av h\xf8sten 2018. I denne testen randomiseres plasseringen av lukten og hverken hundef\xf8rer eller den som hjelper til i treningslokalet vet hvor lukten befinner seg.","eng"],text4b:["Den overordnede ma\u030alsetningen for prosjekt Bakteriehund er a\u030a utvikle et konsept for trening av hunder til bruk ved utbrudd av sykehusinfeksjoner. F\xf8rste milep\xe6l er a\u030a trene opp prosjektets to hunder slik at de effektivt og sikkert markerer Klebsiella pneumonia kontaminert pa\u030a interi\xf8r, vegger, gulv og medisinsk utstyr i sykehus.","eng"],title5:["Hvorfor hund?","Why use dogs?"],text5:['"Mange dyr har god luktesans og kan brukes i ulike typer av s\xf8ksarbeid, for eksempel brukes Apoporotter til a\u030a s\xf8ke etter miner og diagnostisere Tuberkulose i Tanzania. Det er likevel hunder som oftest brukes i s\xf8ksarbeid, dette fordi de i tillegg til god luktesans har gode samarbeidsevner og er lette a\u030a trene til ulike typer s\xf8ksarbeid. I tillegg er de et robust verkt\xf8y som kan brukes i n\xe6rmest alle slags milj\xf8er."','"Many animals have a strong sence of smell and may be utilized in various scent/search work, e.g. the use of Apopo rats are trained to search for mines and used to diagnose Tuberculosis in Tanzania. But dogs are still the prefered animal in most scent detection work, due to its cooperation abilities in combination with an exellent sence of smell. Dogs are also robust and can work in nearly all environments."'],title6:["Hunden som s\xf8ksressurs","eng"],text6:["Mennesker har i flere tusen a\u030ar dratt nytte av hundens fantastiske luktesans og dens enesta\u030aende evne til a\u030a samarbeide med oss. Hunder har en lang historie pa\u030a a\u030a s\xf8ke seg frem til ulike sorter vilt under jakt. I dag bruker vi etters\xf8kshunder til a\u030a finne skadde eller d\xf8de mennesker i ras og ruiner. De kan ogsa\u030a lokalisere druknede mennesker pa\u030a mange meters dyp. Hunder identifiserer blant annet narkotika, sprengstoff, s\xe6d, blod og brukes i forbindelse med viltforvaltning i mange land. Na\u030a er de ogsa\u030a pa\u030a vei inn i den medisinske verden.","Man has for millenia made use of dog's fantastic smelling ability and it's ability to cooperate with us. Dogs have a long history of searching various animals during hunt. We are currently using dogs to search for wounded or dead people in avalanches and ruins. They may localize drowned people through deep water. Dogs identifies narcotics, explosives, semen, blood and are used by "],title7:["Lave konsentrasjoner","eng"],text7:["Hunder kan lukte noen forbindelser ved sa\u030a lave konsentrasjoner som en del per trillion (1 i 1018). For menesker er det laveste funnet en del per milliard (1 i 109). (1)","eng"]}}},54:function(e,t,n){e.exports=n.p+"static/media/fms_logo.bdc791a2.svg"},55:function(e,t,n){e.exports=n.p+"static/media/unn_logo.53772bee.svg"},56:function(e,t,n){e.exports=n.p+"static/media/bh1.c42961b0.jpg"},57:function(e,t,n){e.exports=n.p+"static/media/bh2.d61d9c22.jpg"},58:function(e,t,n){e.exports=n.p+"static/media/bh3.13f2363b.jpg"},59:function(e,t,n){e.exports=n.p+"static/media/bh4.308413ae.jpg"},61:function(e,t,n){e.exports=n(143)},66:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){}},[[61,2,1]]]);
//# sourceMappingURL=main.0e1be380.chunk.js.map