var aa="",ca="",ea="",fa={},pa={enable:!1,jj:10,vj:1,Ih:!0,Jh:!0,itemList1:[],itemList2:[]},wa={type:[],quality:[],Nj:!1,useCloths:!1},ya={enable:!1,wh:!1,Oh:[1],vi:3,ei:3,si:3,ui:3,Wh:3,Fi:3};function za(A){let F=`${window.location.origin}/game/index.php?`;Object.entries(A).forEach((y,I)=>{F+=(0==I?"":"&")+y[0]+"="+y[1]});return F}function D(A){let F=`${window.location.origin}/game/ajax.php?`;Object.entries(A).forEach((y,I)=>{F+=(0==I?"":"&")+y[0]+"="+y[1]});return F}
async function Aa(A,F){F=await Da(A,F);if(!F)return!1;F.slot&&await Ha(F.slot,A.dataset.itemId||A.parentNode.dataset.containerNumber);Ka(A,F.x,F.y);return!0}
async function Ka(A,F,y){var I=jQuery(A).offset();I={x:I.left,y:I.top};La(A,"mousedown",{clientX:I.x-window.scrollX,clientY:I.y-window.scrollY});La(document,"mousemove",{clientX:F-window.scrollX,clientY:y-window.scrollY});La(document,"mouseup",{clientX:F-window.scrollX,clientY:y-window.scrollY});setTimeout(()=>{window.scroll(scroll.x,scroll.y)},0)}function Pa(A){A=A.getAttribute("data-quality");return null!=A?A:"0"}function Za(A){return parseInt(A.getAttribute("data-amount"))}
function $a(A){return A.getAttribute("data-content-type")}function ab(A){return A.getAttribute("data-level")}function ib(A){return A.getAttribute("data-basis")}function jb(A){return parseInt(A.getAttribute("data-measurement-x"))*parseInt(A.getAttribute("data-measurement-y"))}function kb(A){A=A.getAttribute("data-tooltip");A=A.substring(4,A.indexOf(",")).replace('"',"");return unescape(JSON.parse('"'+A+'"'))}
function ub(A){A=A.getAttribute("data-tooltip");return parseInt(A.replace(/\./g,"").match(/(\d+) (<img|<div class=\\"icon_gold\\")/i)[1])}function vb(A){A=parseInt(A.getAttribute("data-basis").split("-")[0]);return-1<[1,2,3,4,5,6,8,9].indexOf(A)}function wb(A){for(var F=0,y=0;y<A.length;y++){var I=A[y];F+=I.fg*I.w}return F}function Pb(A){if("string"!==typeof A)return"";A=A.split(" ");return A[A.length-1]}function Qb(A){return"string"!==typeof A?"":A.split(" ")[0]}
async function Rb(A){function F(J,K){J!=y.length?jQuery.post(y[J],R=>{R=jQuery("<div>").append(R)[0];R=Sb(R);R=Tb(I[0],I[1],R);(R=Zb(3,2,R))?K(R,J+512):F(J+1,K)}):K(null)}let y=[];y.push(D({mod:"inventory",submod:"loadBag",shopType:0,bag:512,sh:O("sh")}));let I=[5,8];F(0,A)}
async function qc(A){function F(K,R){K!=y.length?jQuery.post(y[K],X=>{X=jQuery("<div>").append(X)[0];X=Sb(X);X=Tb(J[0],J[1],X);(X=Zb(3,2,X))?R(X,K+512):F(K+1,R)}):R(null)}let y=[];for(var I of[512,513,514,515])y.push(D({mod:"inventory",submod:"loadBag",shopType:0,bag:I,sh:O("sh")}));let J=[5,8];F(0,A)}
async function rc(A,F){return new Promise(y=>{async function I(X){X===J.length&&I(X+1);await jQuery.post(J[X],ma=>{ma=jQuery("<div>").append(ma)[0];ma=Sb(ma);ma=Tb(R[0],R[1],ma);(ma=Zb(F,A,ma))?y({spot:ma,bag:X+512}):I(X+1)})}let J=[];for(var K of[512,513,514,515])J.push(D({mod:"inventory",submod:"loadBag",shopType:0,bag:K,sh:O("sh")}));let R=[5,8];I(0)})}var tc=[],oe={};
function Ha(A,F){if("inv"==A.target||"shop"==A.target){var y=pe(A.target),I=[];for(let J=0;J<A.w;J++)for(let K=0;K<A.fg;K++)I.push(y+"<"+(A.x+J)+","+(A.y+K)+">");I.forEach(J=>{tc.includes(J)||tc.push(J)});F&&(qe(F),oe[F]=I)}}function qe(A){A&&oe.hasOwnProperty(A)&&(oe[A].forEach(F=>{F=tc.indexOf(F);-1<F&&tc.splice(F,1)}),delete oe[A])}
function pe(A){let F=document.getElementById(A);return F?"inv"==A?F.parentNode.getElementsByClassName("awesome-tabs current")[0].dataset.Yi:"inv"==A?F.dataset.containerNumber:A:A}
function re(A,F){var y=A.querySelectorAll('.ui-draggable:not([style*="display: none"])');A=Array(5).fill(null).map(()=>Array(8).fill(!1));const I=parseInt(F.getAttribute("data-measurement-x"));F=parseInt(F.getAttribute("data-measurement-y"));for(var J of y){y=parseInt(J.getAttribute("data-position-x"))-1;var K=parseInt(J.getAttribute("data-position-y"))-1,R=parseInt(J.getAttribute("data-measurement-x")),X=parseInt(J.getAttribute("data-measurement-y"));for(let ma=0;ma<R;ma++)for(let xa=0;xa<X;xa++)0<=
y+ma&&8>y+ma&&0<=K+xa&&5>K+xa&&(A[K+xa][y+ma]=!0)}for(J=0;5>J;J++)for(y=0;8>y;y++){K=!0;for(R=0;R<I;R++){for(X=0;X<F;X++)if(8<=y+R||5<=J+X||A[J+X][y+R]){K=!1;break}if(!K)break}if(K)return{x:y,y:J}}return null}
function se(A){var F=A.querySelectorAll('.ui-draggable:not([style*="display: none"])');A=Array(5).fill(null).map(()=>Array(8).fill(!1));for(var y of F){F=parseInt(y.getAttribute("data-position-x"))-1;const I=parseInt(y.getAttribute("data-position-y"))-1,J=parseInt(y.getAttribute("data-measurement-x")),K=parseInt(y.getAttribute("data-measurement-y"));for(let R=0;R<J;R++)for(let X=0;X<K;X++)0<=F+R&&8>F+R&&0<=I+X&&5>I+X&&(A[I+X][F+R]=!0)}for(y=0;5>y;y++)for(F=0;8>F;F++)if(!A[y][F])return{x:F,y};return null}
async function Da(A,F){var y=!1;if("shop"==F){var I=document.getElementById("shop");var J=[Math.round(I.clientHeight/32),6];y="shop"}else if("inv-guild"==F)Array.from(document.querySelectorAll('#inventory_nav a.awesome-tabs[data-available="true"]'));else if("inv"==F)I=document.getElementById("inv"),J=[5,8],y="inv";else{if("market"==F){I=document.getElementById("market_sell");var K=jQuery(I).offset();return{x:Math.ceil(K.left+32+8),y:Math.ceil(K.top+32+8),parent:I}}if("avatar"==F)return I=document.getElementById("avatar"),
K=jQuery(I).offset(),{x:Math.ceil(K.left+84),y:Math.ceil(K.top+97),parent:I};if("char"==F)for(var R=document.getElementById("char").children,X=parseInt(A.dataset.contentType||"0"),ma=0;ma<R.length;ma++){var xa=R[ma];if(parseInt(xa.getAttribute("data-content-type-accept")||"0")==X&&0==R[ma].children.length)return K=jQuery(xa).offset(),{x:K.left+5,y:K.top+5}}else return!1}R=Sb(I);X=parseInt(A.dataset.measurementX,10);ma=parseInt(A.dataset.measurementY,10);try{var qb;if(qb="shop"!=F)a:{let sc=A.dataset.amount?
parseInt(A.dataset.amount,10):1;for(xa=0;xa<R.length;xa++)if(R[xa].hash==A.dataset.hash&&100>=R[xa].amount+sc){qb={y:R[xa].y,x:R[xa].x};break a}qb=!1}var Ia=qb||Zb(ma,X,Tb(J[0],J[1],R,y));if(!Ia)return!1;K=jQuery(I).offset();K={x:K.left,y:K.top};return Ia={x:Math.ceil(K.x+32*Ia.x+8),y:Math.ceil(K.y+32*Ia.y+8),parent:I,slot:{target:F,x:Ia.x,y:Ia.y,fg:ma,w:X}}}catch{return!1}}
function Sb(A){if(!A)return[];var F=[];A=A.getElementsByClassName("ui-draggable");for(var y=0;y<A.length;y++)F.push({y:parseInt(A[y].style.top,10)/32,x:parseInt(A[y].style.left,10)/32,fg:parseInt(A[y].dataset.measurementY,10),w:parseInt(A[y].dataset.measurementX,10)});return F}
function Tb(A,F,y,I){var J=[];for(var K=0;K<A;K++){J.push([]);for(var R=0;R<F;R++)J[K].push(!1)}for(K=y.length-1;0<=K;K--)for(R=0;R<y[K].fg;R++)for(let X=0;X<y[K].w;X++)J[y[K].y+R][y[K].x+X]=!0;if(I)for(y=pe(I),I=0;I<A;I++)for(K=0;K<F;K++)J[I][K]||tc.includes(y+"<"+K+","+I+">")&&(J[I][K]=!0);return J}
function Zb(A,F,y){var I,J,K,R,X=!1;for(I=0;I<=y[0].length-F;I++){for(J=0;J<=y.length-A;J++){X=!0;if(1==A)0==y[J][I]?X=!0:0==y[J][I+1]?I++:X=!1;else for(K=0;K<F;K++){for(R=0;R<A;R++)if(1==y[J+R][I+K]){X=!1;break}if(!X)break}if(X){for(K=0;K<F;K++)for(R=0;R<A;R++)y[J+R][I+K]=!0;X={y:J,x:I};break}}if(X)break;1==A&&I++}return X}
function La(A,F,y){var I="mousemove"!==F,J=window;var K=y.clientX;y=y.clientY;var R=document.createEvent("MouseEvents");R.initMouseEvent(F,!0,I,J,0,0,0,K,y,!1,!1,!1,!1,0,document.body.parentNode);A.dispatchEvent(R)}
function te(){new Promise(A=>{let F=2,y=()=>{--F;0===F&&A()};if(ue.includes("mod=auction")&&ue.includes("ttype=3")){var I=ve();(I<localStorage.getItem("auctionMStatus")&&Ae("AuctionMEmpty")||4===I&&Ae("AuctionMEmpty"))&&localStorage.setItem("auctionM.timeOut",0);localStorage.setItem("auctionMStatus",I);y()}else ue.includes("mod=auction")?(I=ve(),(I<localStorage.getItem("auctionStatus")&&Ae("AuctionEmpty")||4===I&&Ae("AuctionEmpty"))&&localStorage.setItem("auction.timeOut",0),localStorage.setItem("auctionStatus",
I),y()):(jQuery.get(za({mod:"auction",ttype:3,itemLevel:999,itemQuality:2,sh:O("sh")}),J=>{J=ve(jQuery(J));(J<localStorage.getItem("auctionMStatus")&&Ae("AuctionMEmpty")||4===J&&Ae("AuctionMEmpty"))&&localStorage.setItem("auctionM.timeOut",0);localStorage.setItem("auctionMStatus",J);y()}),jQuery.get(za({mod:"auction",itemLevel:999,itemQuality:2,sh:O("sh")}),J=>{J=ve(jQuery(J));(J<localStorage.getItem("auctionStatus")&&Ae("AuctionEmpty")||4===J&&Ae("AuctionEmpty"))&&localStorage.setItem("auction.timeOut",
0);localStorage.setItem("auctionStatus",J);y()}))})}function Be(A){if(document.querySelector("#inv div.spinner-img"))return setTimeout(()=>{Be(A)},500),!1;A&&A();return!0}var Ce=new URLSearchParams(window.location.search);function O(A){return Ce.get(A)}
var ue=window.location.search.match(/mod=.*&sh/)?window.location.search.match(/mod=.*&sh/)[0].slice(0,-3):null,De=window.location.hostname.split(/\./)?window.location.hostname.split(/\./)[0]:null,Ee={Bj:{j:"muito longo",g:"longo",h:"m\u00e9dio",i:"curto",l:"muito curto"},Cj:{j:"foarte lung",g:"lung",h:"mijlociu",i:"scurt",l:"foarte scurt"},Hj:{j:"ve\u013emi dlho",g:"dlho",h:"stredne",i:"kr\u00e1tko",l:"ve\u013emi kr\u00e1tko"},Pj:{j:"jako dugo",g:"dugo",h:"srednje",i:"kratko",l:"jako kratko"},kj:{j:"hyvin pitk\u00e4",
g:"pitk\u00e4",h:"keskim\u00e4\u00e4r\u00e4inen",i:"lyhyt",l:"hyvin lyhyt"},Ej:{j:"mycket l\u00e5ng",g:"l\u00e5ng",h:"medel",i:"kort",l:"mycket kort"},Ij:{j:"\u00e7ok uzun",g:"uzun",h:"orta",i:"k\u0131sa",l:"\u00e7ok k\u0131sa"},Vi:{j:"\u0637\u0648\u064a\u0644 \u062c\u062f\u0627\u064b",g:"\u0637\u0648\u064a\u0644",h:"\u0645\u0646\u062a\u0635\u0641",i:"\u0642\u0635\u064a\u0631",l:"\u0642\u0635\u064a\u0631\u0629 \u062c\u062f\u0627\u064b"},qj:{j:"\u05d0\u05e8\u05d5\u05da \u05de\u05d0\u05d5\u05d3",g:"\u05d0\u05e8\u05d5\u05da",
h:"\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9",i:"\u05e7\u05e6\u05e8",l:"\u05e7\u05e6\u05e8 \u05de\u05d0\u05d5\u05d3"},nj:{j:"\u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03b7",g:"\u03bc\u03b5\u03b3\u03ac\u03bb\u03b7",h:"m\u03ad\u03c3\u03b7",i:"\u03bc\u03b9\u03ba\u03c1\u03ae",l:"\u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03ae"},Zi:{j:"\u043c\u043d\u043e\u0433\u043e \u0434\u044a\u043b\u044a\u0433",g:"\u0434\u044a\u043b\u044a\u0433",h:"\u0441\u0440\u0435\u0434\u0435\u043d",i:"\u043a\u044a\u0441",
l:"\u043c\u043d\u043e\u0433\u043e \u043a\u044a\u0441"},Dj:{j:"\u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e",g:"\u043c\u043d\u043e\u0433\u043e",h:"\u0441\u0440\u0435\u0434\u043d\u0435",i:"\u043c\u0430\u043b\u043e",l:"\u043e\u0447\u0435\u043d\u044c \u043c\u0430\u043b\u043e"},$i:{j:"muito tempo",g:"longo",h:"m\u00e9dio",i:"curto",l:"bastante curto"},cj:{j:"velmi dlouh\u00e1",g:"dlouh\u00e1",h:"st\u0159edn\u00ed",i:"kr\u00e1tk\u00e1",l:"velmi kr\u00e1tk\u00e1"},ej:{j:"meget lang tid",
g:"lang tid",h:"halv tid",i:"kort tid",l:"meget kort tid"},dj:{j:"sehr lange",g:"lange",h:"mittel",i:"kurz",l:"sehr kurz"},fj:{j:"v\u00e4ga pikk",g:"pikk",h:"keskmine",i:"l\u00fchike",l:"v\u00e4ga l\u00fchike"},gj:{j:"very long",g:"long",h:"middle",i:"short",l:"very short"},Mj:{j:"very long",g:"long",h:"middle",i:"short",l:"very short"},Wi:{j:"muy largo",g:"largo",h:"medio",i:"corto",l:"muy corto"},ij:{j:"muy largo",g:"largo",h:"medio",i:"corto",l:"muy corto"},wj:{j:"muy largo",g:"largo",h:"medio",
i:"corto",l:"muy corto"},lj:{j:"tr\u00e8s longtemps",g:"longtemps",h:"moyen",i:"court",l:"tr\u00e8s court"},sj:{j:"lunghissima",g:"lunga",h:"media",i:"breve",l:"brevissima"},uj:{j:"\u013coti gar\u0161",g:"gar\u0161",h:"vid\u0113js",i:"\u012bss",l:"\u013coti \u012bss"},tj:{j:"labai ilgai",g:"ilgai",h:"vidutini\u0161kai",i:"trumpai",l:"labai trumpai"},pj:{j:"nagyon hossz\u00fa",g:"hossz\u00fa",h:"k\u00f6zepes",i:"r\u00f6vid",l:"nagyon r\u00f6vid"},yj:{j:"heel lang",g:"lang",h:"gemiddeld",i:"kort",l:"zeer kort"},
Xe:{j:"veldig lenge",g:"lenge",h:"medium",i:"kortvarig",l:"veldig kort"},Aj:{j:"bardzo d\u0142ugi",g:"d\u0142ugi",h:"\u015bredni",i:"kr\u00f3tki",l:"bardzo kr\u00f3tki"},Kj:{j:"\u8d85\u9577",g:"\u8f03\u9577",h:"\u5e38\u898f\u6642\u9593",i:"\u8f03\u77ed",l:"\u8d85\u77ed"}},ve=(A=document)=>{A=jQuery(".description_span_right",A).text().trim().toLowerCase();for(const F in Ee){const y=Ee[F],I=Object.values(y);for(const J in y)if(y[J].toLowerCase()===A)return I.indexOf(y[J])}return-1};
async function Fe(A="-1",F=""){const y=za({mod:"packages",submod:"sort",page:"1",sh:O("sh")});jQuery.post(y,{packageSorting:"in_desc"});return Promise.all(Array.from({length:2},(I,J)=>J+1).map(async I=>await ag(A,F,I))).then(I=>I.reduce((J,K)=>J.concat(K),[]))}async function ag(A="-1",F="",y){A=await jQuery.get(za({mod:"packages",f:"0",fq:A||-1,qry:F||"",page:y,sh:O("sh")}),()=>{});return Array.from(jQuery(A).find(".packageItem"))}function bg(A){setTimeout(()=>{window.location.reload(!1)},A)}
function cg(A){window.location.href=`${window.location.origin}/game/index.php?${A}&sh=${O("sh")}`}function dg(A){A&&(A.classList.contains("disabled")?window.location.reload():A.click())}
function eg(){return{u:parseInt($("#header_values_hp_percent")[0].innerText),gold:Number($("#sstat_gold_val")[0].innerHTML.replace(/\./g,"")),ii:document.querySelectorAll("#cooldown_bar_expedition .cooldown_bar_fill_ready")[0],gi:document.querySelectorAll("#cooldown_bar_dungeon .cooldown_bar_fill_ready")[0],Jj:document.querySelectorAll("#cooldown_bar_ct .cooldown_bar_fill_ready")[0],Hg:document.getElementById("expeditionpoints_value_point").innerText,fi:document.getElementById("dungeonpoints_value_point").innerText,
Xi:document.querySelectorAll("#cooldown_bar_arena .cooldown_bar_fill_ready")[0],Kh:parseInt(document.getElementById("sstat_ruby_val").innerText),level:parseInt(document.getElementById("header_values_level").innerText)}}function Ae(A){let F=(new Date).getTime(),y=localStorage.getItem(A+".timeOut");null===y?(localStorage.setItem(A+".timeOut",0),y=0):y=parseInt(y);return y<=F?!0:!1}
function fg(){let A=0;JSON.parse(localStorage.getItem("packagesPurchased")||"[]").forEach(F=>{A+=Math.round(.04*F.price)});return eg().gold>=A?!0:!1}function gg(A,F){F-=A;let y=.04*A;JSON.parse(localStorage.getItem("packagesPurchased")||"[]").forEach(I=>{y+=Math.round(.04*I.price)});return F>=y}function Z(A,F){localStorage.setItem(A+".timeOut",(new Date).getTime()+Math.floor(6E4*(F?F:5)))};(async function(){function A(){we=setInterval(function(){xe++;5>=xe?location.reload():clearInterval(we)},12E4)}function F(){var b=document.querySelector('a[title="Pantheon"]');if(b){const c=b.innerHTML,d=c.match(/<font color="green">(\d+)<\/font>/);if(d&&0<d[1]||c.match(/<font color="yellow">(\w+)<\/font>/)||(b=b.innerText.match(/Pantheon \((\d+)\)/))&&0<b[1])return localStorage.setItem("nextQuestTime",0),localStorage.setItem("nextQuestTime.timeOut",0),!0}return!1}function y(b){function c(k){let m=
localStorage.getItem(k);m&&(m=JSON.parse(m),localStorage.setItem(k,JSON.stringify(m.slice(-20))))}var d=document.querySelector("#logEntriesContainer");if(d){var e=new Date,h=`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`;e=document.createElement("p");e.style.margin="0";e.style.padding="0";e.style.fontSize="12px";b=`[${h}] ${b}`;e.textContent=b;d.prepend(e);(d=localStorage.getItem("savedLogs"))?d=JSON.parse(d):d=[];d.unshift(b);30<d.length&&d.pop();localStorage.setItem("savedLogs",
JSON.stringify(d));c("bidList");c("smeltedItems");c("MarketboughtItems")}}function I(b,c){return null==b?"":b.split("").map(d=>String.fromCharCode(d.charCodeAt(0)+c)).join("")}function J(b){return((localStorage.getItem("playerId")|0)+5|0)%100===b}function K(){return(localStorage.getItem("playerId")|0)%100|0}async function R(b){function c(m){const n=[];for(let l=0;l<m.length;l+=2)n.push(parseInt(m.substr(l,2),16));return new Uint8Array(n)}const [d,e]=b.split(":");b=c(d);const h=c(e),k=await window.crypto.subtle.importKey("raw",
c("46d9ef519c1474cf8699ba24ab2a726a"),{name:"AES-CBC"},!1,["decrypt"]);b=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:b},k,h);b=(new TextDecoder).decode(new Uint8Array(b));b=new Date(b);b.setHours(0,0,0,0);return b}function X(b){(b.target.classList.contains("licotok-close")||"licotok"===b.target.id)&&document.getElementById("licotok").remove()}async function ma(){Ia();const b=document.getElementById("licotok-input").value,c=localStorage.getItem("playerId"),d=document.getElementById("status_message");
let e=null;try{e=await (await fetch("https://fociisoftware.com/validate-license",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({licenseKey:b,playerId:c})})).json()}catch(h){try{e=await (await fetch("https://glad.fociisoftware.com/validate-license",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({licenseKey:b,playerId:c})})).json()}catch(k){}}e?e.valid?(localStorage.setItem("nana_lcn","true"),localStorage.setItem("tkz_lcr",e.token),localStorage.setItem("license_remaining",
e.expirationDate),localStorage.setItem("tkn",e.refreshToken),localStorage.setItem("pid",c),window.location.reload()):e.message?d.textContent=e.message:(d.textContent="Invalid license key or token!",d.style.display="block"):(d.textContent="Error communicating with the server. Please try again later!",d.style.display="block")}function xa(){var b=document.createElement("div");b.setAttribute("id","licotok");b.innerHTML='\n        <style>\n            .licotok-popup {\n            background: #ddd5b4; /* Beige background */\n            box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.3);\n            border-radius: 10px;\n            color: #333; /* Darker text color for better contrast */\n            padding: 20px;\n            border: 1px solid #c4ac70; /* Golden border */\n            font-family: Arial, sans-serif; /* Optional: Change the font */\n            }\n        \n            .licotok-popup h2 {\n            color: #333;\n            text-shadow: none; /* Removing text shadow for better readability */\n            background: linear-gradient(to right, #c4ac70, #ddd5b4); /* Gradient title background */\n            padding: 10px;\n            margin: -20px; /* To offset the padding of the parent */\n            margin-bottom: 15px;\n            border-radius: 10px 10px 0 0; /* Rounded corners on the top */\n            }\n        \n            .licotok-popup a {\n            text-decoration: none;\n            color: #fff; /* White text for buttons */\n            background-color: #c4ac70; /* Golden background */\n            border-radius: 5px;\n            padding: 5px 10px;\n            margin-right: 10px;\n            transition: background-color 0.3s ease;\n            }\n        \n            .licotok-popup a:hover {\n            background-color: #b3a369; /* Darker shade on hover */\n            }\n        \n            .licotok-popup input {\n            width: calc(100% - 10px); /* Full width minus padding */\n            padding: 5px;\n            margin-bottom: 10px;\n            border: 1px solid #c4ac70; /* Border color similar to the theme */\n            border-radius: 5px;\n            }\n        \n\n            \n            .licotok-popup #status_message {\n            margin-top: 10px;\n            }\n        </style>\n        <div class="licotok-popup">\n        <h2>Warning</h2>\n        <span style="color: black" class="span-new">Your expedition/dungeon settings are incorrect!</span>\n        <p>\n        <button id="licotok-close" class="awesome-button">Close</button>\n        <div id="status_message"></div>\n    </div>\n        \n        ';
document.getElementById("header_game").insertBefore(b,document.getElementById("header_game").children[0]);b.querySelector("#licotok-close").addEventListener("click",function(){b.remove()})}function qb(){var b=document.createElement("div");b.setAttribute("id","licotok");b.innerHTML='\n        <style>\n            .licotok-popup {\n            background: #ddd5b4; /* Beige background */\n            box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.3);\n            border-radius: 10px;\n            color: #333; /* Darker text color for better contrast */\n            padding: 20px;\n            border: 1px solid #c4ac70; /* Golden border */\n            font-family: Arial, sans-serif; /* Optional: Change the font */\n            }\n        \n            .licotok-popup h2 {\n            color: #333;\n            text-shadow: none; /* Removing text shadow for better readability */\n            background: linear-gradient(to right, #c4ac70, #ddd5b4); /* Gradient title background */\n            padding: 10px;\n            margin: -20px; /* To offset the padding of the parent */\n            margin-bottom: 15px;\n            border-radius: 10px 10px 0 0; /* Rounded corners on the top */\n            }\n        \n            .licotok-popup a {\n            text-decoration: none;\n            color: #fff; /* White text for buttons */\n            background-color: #c4ac70; /* Golden background */\n            border-radius: 5px;\n            padding: 5px 10px;\n            margin-right: 10px;\n            transition: background-color 0.3s ease;\n            }\n        \n            .licotok-popup a:hover {\n            background-color: #b3a369; /* Darker shade on hover */\n            }\n        \n            .licotok-popup input {\n            width: calc(100% - 10px); /* Full width minus padding */\n            padding: 5px;\n            margin-bottom: 10px;\n            border: 1px solid #c4ac70; /* Border color similar to the theme */\n            border-radius: 5px;\n            }\n        \n\n            \n            .licotok-popup #status_message {\n            margin-top: 10px;\n            }\n        </style>\n        <div class="licotok-popup">\n            <h2>Enter Your License Key</h2>\n            <input id="licotok-input" type="text" placeholder="License Key">\n            &nbsp&nbsp&nbsp<a href="https://fociisoftware.com/#gladbot" target="_blank">Gladbot Management Site</a>\n            <p>\n            <a href="https://gladbotius.gumroad.com/l/vntkyw" target="_blank">Buy License Key</a>\n            <a href="#" id="get-trial-key-a">Get a Trial Key</a>\n            <p>\n            &nbsp&nbsp&nbsp<a href="https://discord.gg/dKCTFFnkjZ" target="_blank">Discord</a>\n            \n            <a href="https://www.paypal.com/donate/?hosted_button_id=7TVLC3GZ9GLD8" target="_blank">Donate</a></p>\n\n            <div id="alertMessage" class="alert-message" style="display: none; font-weight: bold;"></div>\n\n            <span style="color: class="span-new">Donate Tether 0xcA31EBb748Efab41d3A77C3Bd08a4CF3fBC68d2f Accepted Chains: Eth, Polygon, Arbitrum,\u00a0Optimism</span>\n\n            <button class="awesome-button licotok-submit">Submit</button>\n            <button class="awesome-button licotok-close">Close</button>\n            <div id="status_message"></div>\n        </div>\n        ';
document.getElementById("header_game").insertBefore(b,document.getElementById("header_game").children[0]);b.addEventListener("click",X);b.querySelector(".licotok-submit").addEventListener("click",ma);let c=localStorage.getItem("playerId");null==c&&(Ia(),c=localStorage.getItem("playerId"));b.querySelector("#get-trial-key-a").addEventListener("click",function(){function d(e){return fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({playerId:c})}).then(h=>h.json()).then(h=>
{var k=document.getElementById("alertMessage");h.success?(k.textContent="Your 1 day trial key : "+h.trialKey,k.style.display="block",localStorage.setItem("nana_lcn","true"),localStorage.setItem("trlky_lcr",h.trialKey),localStorage.setItem("tkz_lcr",h.token),localStorage.setItem("pid",c)):(k.textContent="You have already used a trial key",k.style.display="block")})}d("https://www.fociisoftware.com/get-trial").catch(()=>d("https://glad.fociisoftware.com/get-trial")).catch(()=>{})})}async function Ia(){var b=
document.location.href;let c,d=b.match(/s\d+-(\w*)\.gladiatus\.gameforge\.com/)?b.match(/s\d+-(\w*)\.gladiatus\.gameforge\.com/)[1]:null,e=b.match(/s\d+-/i)?b.match(/s(\d+)-/i)[1]:null;var h=(b=b.match(/sh=[0-9a-fA-F]+/i)?b.match(/sh=([0-9a-fA-F]+)/i)[1]:null)?document.cookie.match(new RegExp("GB_"+d+"_"+e+"=(\\d+)_"+b.substring(0,b.length/4),"i")):!1;h&&h[1]&&(c=h[1]);if(c)return localStorage.setItem("playerId",c),localStorage.setItem("pid",c),c;try{const k=await jQuery.get(za({mod:"overview",sh:O("sh")}));
let m=jQuery(k).find("section > p")[1]?.querySelector("b")?.innerText.match(/\d+$/)[0];if(m)return document.cookie=`${`GB_${d}_${e}`}=${`${m}_${b?b.substring(0,b.length/4):""}`};${"expires="+(new Date((new Date).getTime()+31536E6)).toUTCString()};path=/`,m}catch(k){}}function sc(){let b=document.querySelector(".playername")||document.querySelector(".playername_achievement");b&&(b=b.textContent.trim(),localStorage.setItem("Username",b))}function lb(b,c,d){var e="";d&&(e=new Date,e.setTime(e.getTime()+
864E5*d),e="; expires="+e.toUTCString());document.cookie=b+"="+(c||"")+e+"; path=/; domain=.gameforge.com"}function rb(b){b+="=";for(var c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null}function Ub(b){document.cookie=`glautologin=${b?"true":"false"}; path=/; domain=.gameforge.com; samesite=strict`}function ye(){return"true"===localStorage.getItem("nana_lcn")&&Vb&&ca>=new Date&&
J(K())-Qa&&qa===uc&&aa===qa}function og(){let b=document.querySelector(".playername_achievement.ellipsis");b&&localStorage.setItem("Username",b.textContent.trim())}function vc(b,c){b.style.border="1px solid #c4ac70";b.style.backgroundColor=c;b.style.color="black";b.style.padding="5px 10px";b.style.cursor="pointer";b.style.borderRadius="5px";b.style.flexGrow="1";b.style.marginRight="5px";b.style.boxShadow="0px 0px 15px 2px rgba(0, 0, 0, 0.3)";b.style.fontFamily="Arial, sans-serif";b.style.transition=
"background-color 0.2s"}function ze(){localStorage.setItem("logMenuHeight",sa.style.height)}async function pg(){var b={async hh(){var c=localStorage.getItem("filterGM");if(ue!=`mod=guildMarket&fl=0&fq=-1&f=0&qry=&seller=&s=${c}&p=1`)cg(`mod=guildMarket&fl=0&fq=-1&f=0&qry=&seller=&s=${c}&p=1`);else try{const k=localStorage.getItem("guildPackHour");let m=JSON.parse(localStorage.getItem("packagesPurchased")||"[]"),n=m[0];"undefined"===typeof n&&(n=m);let l=await Fe(n.quality,n.itemName);l=l.filter(q=>
{var t=q.querySelector(".ui-draggable");q=n.itemLevel===ab(t);const r=n.itemName===kb(t),u=n.basis===ib(t),v=n.quality===Pa(t);t=n.amount===Za(t);return q&&r&&u&&v&&t});if(0!==l.length&&l[0].querySelector(".ui-draggable")){const q=l[0].querySelector(".ui-draggable");ab(q);kb(q);ib(q);Pa(q);Za(q);var d=parseInt(q.getAttribute("data-measurement-x")),e=parseInt(q.getAttribute("data-measurement-y")),h=l[0].querySelector("input").value;let {spot:t,bag:r}=await rc(d,e);const u=await jQuery.post(D({mod:"inventory",
submod:"move",from:"-"+h,fromX:1,fromY:1,to:r,toX:t.x+1,toY:t.y+1,amount:n.amount}),{a:(new Date).getTime(),sh:O("sh")}),v=JSON.parse(u).to.data.itemId;c=0;if(2>c||u.includes("containerNumber"))if((await jQuery.post(za({mod:"guildMarket",sh:O("sh")}),{sellid:v,preis:n.price,dauer:k||3,sell_mode:0,anbieten:"Offer"})).includes("<!DOCTYPE HTML>"))y("Item "+n.itemName+" sold for "+n.price+" gold"),m.shift(),localStorage.setItem("packagesPurchased",JSON.stringify(m)),window.location.reload();else if(c++,
2>c)await this.hh();else{const w=JSON.parse(localStorage.getItem("Timers"));Z("gold",w.GuildMarket||2);window.location.reload()}}else m.shift(),localStorage.setItem("packagesPurchased",JSON.stringify(m)),window.location.reload()}catch(k){y("Empty first slots of the first inventory at least 2x3."),window.location.reload()}},async Zh(c,d){let e=c.shift();for(var h=!1;e;)gg(e.price,d)&&d>=e.price&&(d-=e.price,await jQuery.post(za({mod:"guildMarket",sh:O("sh")}),{buyid:e.id,f:0,fl:0,fq:-1,p:1,buy:"Comprar"}),
h=JSON.parse(localStorage.getItem("packagesPurchased")||"[]"),h.push(e),localStorage.setItem("packagesPurchased",JSON.stringify(h)),y("Item Bought: "+e.itemName+" for "+e.price),h=!0),e=c.shift();return h},async buy(){var c=localStorage.getItem("filterGM");const d=JSON.parse(localStorage.getItem("Timers"));if(ue!=`mod=guildMarket&fl=0&fq=-1&f=0&qry=&seller=&s=${c}&p=1`)cg(`mod=guildMarket&fl=0&fq=-1&f=0&qry=&seller=&s=${c}&p=1`);else if(V.gold>Math.floor(localStorage.getItem("KasaHoldGold"))){var e=
document.querySelectorAll("#market_item_table tr");let h=document.querySelectorAll("#market_item_table input[name=buyid]");c=[];for(let k=1;k<e.length;k++){let m=e[k].querySelectorAll("td"),n=m[0].querySelector("div"),l=Number(m[2].innerText.replace(/\./g,"")),q=m[5].querySelector("input");"cancel"===q.name||q.classList.contains("disabled")||l<Number(localStorage.getItem("minimumGoldAmount"))||l>eg().gold-Number(localStorage.getItem("KasaHoldGold"))||c.push({id:h[k-1].value,itemLevel:ab(n),itemName:kb(n),
basis:ib(n),quality:Pa(n),amount:Za(n),sellerName:m[1].querySelector("span").innerText,price:l})}e=eg().gold-Number(localStorage.getItem("KasaHoldGold"));c.length&&fg()?await this.Zh(c,e)||Z("gold",d.GuildMarket||2):Z("gold",d.GuildMarket||2);window.location.reload()}}};0<JSON.parse(localStorage.getItem("packagesPurchased")||"[]").length?await b.hh():V.gold>Number(localStorage.getItem("minimumGoldAmount"))+Number(localStorage.getItem("KasaHoldGold"))?await b.buy():(b=JSON.parse(localStorage.getItem("Timers")),
Z("gold",b.GuildMarket||2),window.location.reload())}function wc(){sessionStorage.setItem("autoGoActive",!0);document.getElementById("autoGoButton").innerHTML='<span style="position: relative; top: -9px;">&#9724;</span>';document.getElementById("autoGoButton").removeEventListener("click",wc);document.getElementById("autoGoButton").addEventListener("click",xc);location.reload()}function xc(){sessionStorage.setItem("autoGoActive",!1);document.getElementById("autoGoButton").innerHTML='<span style="position: relative; top: -9px;">&#9658;</span>';
document.getElementById("autoGoButton").addEventListener("click",wc);document.getElementById("autoGoButton").removeEventListener("click",xc);clearTimeout(setTimeout);document.getElementById("nextActionWindow")&&document.getElementById("nextActionWindow").remove();document.getElementById("lowHealth")&&document.getElementById("lowHealth").remove()}function Wb(){localStorage.setItem("AucTab",!0);document.getElementById("popup-header").remove();document.getElementById("overlayBack").remove()}function Xb(){async function b(C){function W(L){let T=
L.target.name;L=Number(L.target.value);let ha=JSON.parse(localStorage.getItem("gods"));ha||={vi:3,ei:3,si:3,ui:3,Wh:3,Fi:3};ha[T]=L;localStorage.setItem("gods",JSON.stringify(ha))}function Q(){var L=JSON.parse(localStorage.getItem("prefixes"))||[],T=JSON.parse(localStorage.getItem("suffixes"))||[],ha=JSON.parse(localStorage.getItem("IgnoredPrefixes"))||[],ta=JSON.parse(localStorage.getItem("IgnoredSuffixes"))||[];ja("prefixList",L,"prefixes");ja("suffixList",T,"suffixes");ja("IgnoredprefixList",ha,
"IgnoredPrefixes");ja("IgnoredsuffixList",ta,"IgnoredSuffixes");L=JSON.parse(localStorage.getItem("auctionPrefixes"))||[];T=JSON.parse(localStorage.getItem("auctionSuffixes"))||[];ja("AuctionprefixList",L,"auctionPrefixes");ja("AuctionsuffixList",T,"auctionSuffixes");ta=JSON.parse(localStorage.getItem("smeltedItems"))||[];T=document.getElementById("smeltedList");ha=JSON.parse(localStorage.getItem("bidList"))||[];for(L=document.getElementById("bidList");T.firstChild;)T.firstChild.remove();for(var la of ta)ta=
document.createElement("li"),ta.textContent=la,T.appendChild(ta);for(;L.firstChild;)L.firstChild.remove();for(let Ma of ha)la=document.createElement("li"),la.textContent=Ma,L.appendChild(la)}function ba(L,T,ha){""!==T.trim()&&(L=JSON.parse(localStorage.getItem(ha))||[],L.push(T),localStorage.setItem(ha,JSON.stringify(L)),Q())}function ja(L,T,ha){let ta=document.getElementById(L);ta.innerHTML="";T.forEach((la,Ma)=>{let mb=document.createElement("li");mb.textContent=la;mb.draggable=!0;mb.setAttribute("data-index",
Ma);Ma=document.createElement("button");Ma.textContent="X";Ma.style.marginLeft="10px";Ma.addEventListener("click",function(){let Yb=T.indexOf(la);-1<Yb&&(T.splice(Yb,1),localStorage.setItem(ha,JSON.stringify(T)),ja(L,T,ha))});mb.appendChild(Ma);ta.appendChild(mb)});ra(ta,T,ha)}function ra(L,T,ha){let ta=-1;L.addEventListener("dragstart",la=>{ta=parseInt(la.target.getAttribute("data-index"))});L.addEventListener("dragover",la=>{la.preventDefault()});L.addEventListener("drop",la=>{la.preventDefault();
la=parseInt(la.target.closest("li").getAttribute("data-index"));0<=la&&0<=ta&&([T[ta],T[la]]=[T[la],T[ta]],localStorage.setItem(ha,JSON.stringify(T)),ja(L.id,T,ha));Q()})}function ka(){setInterval(()=>{if(Ae("randomPause")){const L=localStorage.getItem("selectedPauseDuration");sb(L)}},6E4)}function sb(L){let T,ha;switch(L){case "1":ha=8;T={mod:"work",submod:"start",sh:O("sh"),Pg:1,Vg:ha,Rg:2};break;case "2":ha=6;T={mod:"work",submod:"start",sh:O("sh"),Pg:1,Vg:ha,Rg:3};break;case "3":ha=3;T={mod:"work",
submod:"start",sh:O("sh"),Pg:1,Vg:ha,Rg:4};break;case "4":ha=10;T={mod:"work",submod:"start",sh:O("sh"),Pg:1,Vg:ha,Rg:5};break;case "5":ha=4,T={mod:"work",submod:"start",sh:O("sh"),Pg:1,Vg:ha,Rg:6}}$.post(D({}),T).done(()=>{setTimeout(()=>{location.reload()},6E4*(ha+1));Z("randomPause",Math.floor(1440*Math.random())+600)}).fail(()=>{})}const bb=C.dataset.target;document.querySelectorAll(".popup-tab").forEach(L=>{L.classList.remove("active")});C.classList.add("active");document.querySelectorAll(".popup-box").forEach(L=>
{L.classList.remove("active")});document.getElementById(bb).classList.add("active");document.querySelectorAll("input[type=radio]").forEach(L=>{L.addEventListener("change",W);let T=JSON.parse(localStorage.getItem("gods"));T&&void 0!==T[L.name]&&(L.checked=L.value==T[L.name])});document.getElementById("addPrefixButton").onclick=function(){let L=document.getElementById("newPrefixInput").value;ba("prefixList",L,"prefixes")};document.getElementById("addSuffixButton").onclick=function(){let L=document.getElementById("newSuffixInput").value;
ba("suffixList",L,"suffixes")};document.getElementById("IgnoredaddPrefixButton").onclick=function(){let L=document.getElementById("newIgnoredPrefixInput").value;ba("IgnoredprefixList",L,"IgnoredPrefixes")};document.getElementById("IgnoredaddSuffixButton").onclick=function(){let L=document.getElementById("newIgnoredSuffixInput").value;ba("IgnoredsuffixList",L,"IgnoredSuffixes")};document.getElementById("clearSmeltedItemsHistory").addEventListener("click",function(){localStorage.setItem("smeltedItems",
JSON.stringify([]));Q()});Q();document.getElementById("clearBidItemsHistory").addEventListener("click",function(){localStorage.setItem("bidList",JSON.stringify([]));Q()});document.getElementById("AuctionaddPrefixButton").onclick=function(){let L=document.getElementById("AuctionnewPrefixInput").value;ba("AuctionprefixList",L,"auctionPrefixes")};document.getElementById("AuctionaddSuffixButton").onclick=function(){let L=document.getElementById("AuctionnewSuffixInput").value;ba("AuctionsuffixList",L,
"auctionSuffixes")};document.getElementById("pauseDuration").addEventListener("change",L=>{L=L.target.value;localStorage.setItem("selectedPauseDuration",L);localStorage.setItem("randomPause.timeOut",0);"0"!==L&&(Z("randomPause",Math.floor(1440*Math.random())),ka())});document.getElementById("exportBtn").addEventListener("click",function(){var L={},T="bidList license_remaining playerCountry itemsToSearch smeltedItems rtksn MarketboughtItems tkz_lcr trlky_lcr token tkn playerId underworld savedUnderworldStates playerTimeouts tempOpponentDetails smelt.timer".split(" ");
for(let ha in localStorage)T.includes(ha)||(L[ha]=localStorage.getItem(ha));L=JSON.stringify(L);L=URL.createObjectURL(new Blob([L],{type:"application/json"}));T=document.createElement("a");T.href=L;T.download="GladBotSettings.json";T.click()});document.getElementById("importFileBtn").addEventListener("click",function(){document.getElementById("importBtn").click()});document.getElementById("importBtn").addEventListener("change",function(L){if(L=L.target.files[0]){var T=new FileReader;T.onload=function(ha){try{const ta=
JSON.parse(ha.target.result);ha="bidList license_remaining playerCountry itemsToSearch smeltedItems rtksn MarketboughtItems tkz_lcr trlky_lcr token tkn playerId underworld savedUnderworldStates playerTimeouts tempOpponentDetails smelt.timer".split(" ");for(let la in ta)ha.includes(la)||localStorage.setItem(la,ta[la]);document.getElementById("importStatus").textContent="Import successful! Please refresh the page."}catch(ta){document.getElementById("importStatus").textContent="Import failed. Please check the input file and try again."}};
T.readAsText(L)}});C=document.createElement("div");C.id="loadingSpinner";C.innerHTML='\n            <div class="spinner"></div>\n            <div class="loading-text">0</div>\n          ';document.querySelector("#selectAllButton").addEventListener("click",()=>{document.querySelectorAll(".playerCheckbox").forEach(L=>{L.checked=!0;L.dispatchEvent(new Event("change"))})});document.querySelector("#unselectAllButton").addEventListener("click",()=>{document.querySelectorAll(".playerCheckbox").forEach(L=>
{L.checked=!1;L.dispatchEvent(new Event("change"))})})}function c(C){localStorage.setItem("settings.language",C);switch(C){case "EN":g={...hg};break;case "PL":g={...ig};break;case "ES":g={...jg};break;case "TR":g={...kg};break;case "FR":g={...lg};break;case "HG":g={...mg};break;case "BR":g={...ng};break;default:g={...hg}}Wb();Xb()}function d(C){Ga=C;localStorage.setItem("doExpedition",C)}function e(C){yc=C;localStorage.setItem("monsterId",C)}function h(C){Ea=C;localStorage.setItem("doDungeon",C)}
function k(C){xb=C;localStorage.setItem("dungeonDifficulty",C);m(C)}function m(C){$(".monster-button").removeClass("active");$(`#set_dungeon_difficulty_${C}`).addClass("active")}function n(C){Fa=C;localStorage.setItem("doArena",C)}function l(C){Ba=C;localStorage.setItem("doCircus",C)}function q(C){Na=C;localStorage.setItem("doQuests",C)}function t(C){cb[C]=!cb[C];localStorage.setItem("questTypes",JSON.stringify(cb));Wb();Xb()}function r(C){Ca=C;localStorage.setItem("doEventExpedition",C)}function u(C,
W,Q){const ba=document.createElement("li"),ja="object"===typeof C?C.playerName:C;ba.textContent=ja;C=document.createElement("button");C.textContent="X";C.style.marginLeft="10px";C.addEventListener("click",()=>{ba.remove();var ra=JSON.parse(localStorage.getItem(Q))||[];ra=Q.includes("ServerList")?ra.filter(ka=>"object"===typeof ka&&ka.playerName!==ja):ra.filter(ka=>ka!==ja);localStorage.setItem(Q,JSON.stringify(ra))});ba.appendChild(C);(W=document.getElementById(W))&&W.appendChild(ba)}function v(C,
W,Q){u(C,W,Q);W=JSON.parse(localStorage.getItem(Q))||[];Q.includes("ServerList")?W.push({playerName:C}):W.push(C);localStorage.setItem(Q,JSON.stringify(W))}function w(){const C=JSON.parse(localStorage.getItem("autoAttackList"))||[],W=JSON.parse(localStorage.getItem("autoAttackServerList"))||[],Q=JSON.parse(localStorage.getItem("avoidAttackList"))||[],ba=JSON.parse(localStorage.getItem("avoidAttackCircusList"))||[],ja=JSON.parse(localStorage.getItem("autoAttackCircusList"))||[],ra=JSON.parse(localStorage.getItem("autoAttackCircusServerList"))||
[];C.forEach(ka=>u(ka,"autoAttackList","autoAttackList"));W.forEach(ka=>u(ka,"autoAttackServerList","autoAttackServerList"));Q.forEach(ka=>u(ka,"avoidAttackList","avoidAttackList"));ba.forEach(ka=>u(ka,"avoidAttackCircusList","avoidAttackCircusList"));ja.forEach(ka=>u(ka,"autoAttackCircusList","autoAttackCircusList"));ra.forEach(ka=>u(ka,"autoAttackCircusServerList","autoAttackCircusServerList"))}function z(C){$b=C;localStorage.setItem("eventMonsterId",C);Wb();Xb()}function B(){var C=localStorage.getItem("doExpedition");
null!==C&&(Ga=JSON.parse(C));1==Ga?$("#doExpedition").prop("checked",!0):$("#doExpedition").prop("checked",!1);C=localStorage.getItem("doDungeon");null!==C&&(Ea=JSON.parse(C));1==Ea?$("#doDungeon").prop("checked",!0):$("#doDungeon").prop("checked",!1);C=localStorage.getItem("doArena");null!==C&&(Fa=JSON.parse(C));1==Fa?$("#doArena").prop("checked",!0):$("#doArena").prop("checked",!1);C=localStorage.getItem("doCircus");null!==C&&(Ba=JSON.parse(C));1==Ba?$("#doCircus").prop("checked",!0):$("#doCircus").prop("checked",
!1);C=localStorage.getItem("doQuests");null!==C&&(Na=JSON.parse(C));1==Na?$("#doQuests").prop("checked",!0):$("#doQuests").prop("checked",!1);C=localStorage.getItem("AutoAuction");null!==C&&(Ra=JSON.parse(C));1==Ra?$("#activateAutoBid").prop("checked",!0):$("#activateAutoBid").prop("checked",!1);C=localStorage.getItem("doKasa");null!==C&&(db=JSON.parse(C));1==db?$("#doKasa").prop("checked",!0):$("#doKasa").prop("checked",!1);C=localStorage.getItem("doEventExpedition");null!==C&&(Ca=JSON.parse(C));
1==Ca?$("#doEventExpedition").prop("checked",!0):$("#doEventExpedition").prop("checked",!1);$("#expedition_settings").addClass(Ga?"active":"inactive");$(`#do_expedition_${Ga}`).addClass("active");$(`#set_monster_id_${yc}`).addClass("active");$("#dungeon_settings").addClass(Ea?"active":"inactive");$(`#do_dungeon_${Ea}`).addClass("active");$(`#set_dungeon_difficulty_${xb}`).addClass("active");$("#arena_settings").addClass(Fa?"active":"inactive");$(`#do_arena_${Fa}`).addClass("active");$(`#set_arena_opponent_level_${Ge}`).addClass("active");
$("#circus_settings").addClass(Ba?"active":"inactive");$(`#do_circus_${Ba}`).addClass("active");$(`#set_circus_opponent_level_${He}`).addClass("active");$("#quests_settings").addClass(Na?"active":"inactive");$(`#do_quests_${Na}`).addClass("active");for(const W in cb)cb[W]&&$(`#do_${W}_quests`).addClass("active");$("#auto_auction_settings").addClass(Ra?"active":"inactive");$("#event_expedition_settings").addClass(Ca?"active":"inactive");$(`#do_event_expedition_${Ca}`).addClass("active");$(`#set_event_monster_id_${$b}`).addClass("active")}
var G=document.createElement("div");G.setAttribute("id","popup-header");var H=localStorage.getItem("latestAnnouncement")||"";G.innerHTML=`
                <div id="announcement" class="announcement">
                    ${H}
                </div>
      <div class="popup-menu">
        <div class="popup-header" style="display: flex; justify-content: space-between; align-items: center;">
        <span style="display: inline-block;"><a style="color: white" href="https://www.paypal.com/donate/?hosted_button_id=7TVLC3GZ9GLD8" target="_blank">Version 2.9.5 Beta</a></span>
        <span style="display: inline-block;"><a style="color: white" href="https://discord.gg/dKCTFFnkjZ" target="_blank">Discord</a></span>
        <span style="display: inline-block;"><a style="color: white" href="https://gladbotius.gumroad.com/l/vntkyw" target="_blank">News</a></span>
      
        <div style="display: flex; justify-content: space-between; align-items: right;">    
        <div class="menu-type logo" style="width: 48px; height: 48px; margin-right: 250px;"></div>
        
        </div>

              <span id="settingsLanguage" style="margin-left: 300px; right: 17px; top: 32px;">          
                <img class="menu-type GB" id="languageGB"> 
                <img class="menu-type PL" id="languagePL"> 
                <img class="menu-type ES" id="languageES"> 
                <img class="menu-type TR" id="languageTR">
                <img class="menu-type FR" id="languageFR">
                <img class="menu-type HG" id="languageHG">
                <img class="menu-type BR" id="languageBR">
                <br>
                <a style="color: white" href="https://www.paypal.com/donate/?hosted_button_id=7TVLC3GZ9GLD8">Donate</a>
                 - 
                 <a style="color: white" href="https://gladbot.gitbook.io/gladbot/gladbot-tutorials" target="_blank"> Documentation</a>
              </span>
              
              </div><span id="settingsLanguage"></span>

              <div class="popup-content">
                <ul class="popup-tabs">
                
                <li class="popup-tab" data-target="expedition_settings">
                <div class="headericon_big" id="icon_expeditionpoints" style="margin-left: 4px;"></div>

                ${g.expedition}
                <div class="toggle-switch">
                  <input type="checkbox" id="doExpedition">
                  <label class="switch" for="doExpedition"></label>
                </div>
              </li>

                  <li class="popup-tab" data-target="dungeon_settings">
                  <div class="headericon_big" id="icon_dungeonpoints" style="margin-left: 4px;"></div>
                  ${g.dungeon}
                    <div class="toggle-switch">
                      <input type="checkbox" id="doDungeon">
                      <label class="switch" for="doDungeon"></label>
                    </div>
                  </li>

                  <li class="popup-tab" data-target="arena_settings">
                  <div class="headericon_big" id="icon_arena" style="margin-left: 4px;"></div>
                  ${g.arena}
                    <div class="toggle-switch">
                      <input type="checkbox" id="doArena">
                      <label class="switch" for="doArena"></label>
                    </div>
                  </li>

                  <li class="popup-tab" data-target="circus_settings">
                  <div class="headericon_big" id="icon_grouparena" style="margin-left: 4px;"></div>
                  ${g.circusTurma}
                    <div class="toggle-switch">
                      <input type="checkbox" id="doCircus">
                      <label class="switch" for="doCircus"></label>
                    </div>
                  </li>

                  <li class="popup-tab" data-target="quests_settings">
                  <div class="quest-type menu"></div>
                  ${g.mf}
                    <div class="toggle-switch">
                      <input type="checkbox" id="doQuests">
                      <label class="switch" for="doQuests"></label>
                    </div>
                  </li>

                  <li class="popup-tab" data-target="heal_settings">
                  <div class="quest-type potion"></div>
                  ${g.Te}
                    <div class="toggle-switch">
                      <input type="checkbox" id="doHeal">
                      <label class="switch" for="doHeal"></label>
                    </div>
                  </li>

                  <li class="popup-tab" data-target="event_expedition_settings">
                  <div class="quest-type event"></div>${g.eventExpedition}
                    <div class="toggle-switch">
                      <input type="checkbox" id="doEventExpedition">
                      <label class="switch" for="doEventExpedition"></label>
                    </div>
                  </li>

                  <li class="popup-tab" data-target="auto_auction_settings">
                  <div class="quest-type search"></div>
                  ${g.A}
                  
                    <div class="toggle-switch">
                      <input type="checkbox" id="activateAutoBid">
                      <label class="switch" for="activateAutoBid">
                      <div class="toggle-bg"></div>
                    </div>
                  </li>
                  
                  <li class="popup-tab" data-target="auto_auction2_settings">
                    <div class="quest-type auction"></div>
                    ${g.zb}
                    <div class="toggle-switch ">
                      <input type="checkbox" id="activateAuction2">
                      <label class="switch" for="activateAuction2">
                      <div class="toggle-bg"></div>
                    </div>
                  </li>
                  
                  <li class="popup-tab" data-target="auto_smelt_settings">
                  <div class="quest-type smelt"></div>${g.Oa}
                    <div class="toggle-switch">
                      <input type="checkbox" id="activateSmelt">
                      <label class="switch" for="activateSmelt">
                      <div class="toggle-bg"></div>
                    </div>
                  </li>

                  <li class="popup-tab" data-target="auto_repair_settings">
                  <div class="quest-type repair"></div>
                  ${g.Fa}
                  <div class="toggle-switch">
                    <input type="checkbox" id="activateRepair">
                    <label class="switch" for="activateRepair">
                    <div class="toggle-bg"></div>
                    </div>
                  </li>

                  <li class="popup-tab" data-target="Market">
                  <div class="quest-type market"></div>
                  ${g.Jc}
                  <div class="toggle-switch">
                  <div class="toggle-bg"></div>
                  </div>
                  </li>
                 
                  <li class="popup-tab" data-target="Timers">
                  <div class="quest-type timer"></div>
                  ${g.Qa} 
                  <div class="toggle-switch">
                  <div class="toggle-bg"></div>
                  </div>
                  </li>

                  <li class="popup-tab" data-target="other_settings">
                  <div class="quest-type settings"></div>
                  ${g.cd}
                  <div class="toggle-bg"></div>
                  </li>
                  
                  <li class="popup-tab" data-target="other_settings2">
                  <div class="quest-type reset">
                  </div>${g.xd}
                  </li>

                  <li class="popup-tab" data-target="Extra">
                  <div class="quest-type extra">
                  </div>${g.wa}
                  <div class="toggle-bg"></div>
                  <div class="toggle-bg"></div>
                  <div class="toggle-bg"></div> </li>

                </ul>

              <div class="popup-box" id="expedition_settings">
              
                <div class="settings_tab_title">${g.Oe}</div>
                  <div class="settings-tab">

                    <div class="setting-row">
                        <label for="expeditionLocation">${g.cc}</label>
                        <select id="expeditionLocation"></select>
                    </div>

                    <div class="setting-row">
                        <label for="autoCollectBonuses">${g.Cb}</label>
                        <label class="toggle-switch">
                            <input type="checkbox" id="autoCollectBonuses">
                            <span class="switch"></span>
                        </label>
                    </div>

                    <div id="enemySelection" class="setting-row">
                        <label for="enemySelect">${g.pf}:</label>
                        <select id="enemySelect">
                            <option value="0">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">Boss</option>
                        </select>
                    </div>

                    <div class="settings_tab_title">${g.qc}</div>
                      <span class="span-new"> ${g.rc}</span>
                      <div class="setting-row">
                        <label for="hellDifficulty">${g.oc}</label>
                        <select id="hellDifficulty">
                            <option value="0">${g.Ie}</option>
                            <option value="1">${g.He}</option>
                            <option value="2">${g.Ge}</option>
                        </select>
                      </div>
                    </div>

                    <div class="setting-row">
                      <label for="hellEnterHP">${g.$b}</label>
                      <div class="switch-field3">
                        <input type="number" id="hellEnterHP" min="1" max="100" value="${localStorage.getItem("hellEnterHP")||75}">
                      </div>
                    </div>
                    
                    <div class="setting-row">
                        <label for="autoEnterHell">${g.Fb}</label>
                        <label class="toggle-switch">
                        
                            <input type="checkbox" id="autoEnterHell">
                            <span class="switch"></span>
                        </label>
                    </div>

                    <div class="setting-row">
                      <label for="UnderworldUseMobi">${g.ze}</label>
                      <label class="toggle-switch">
                          <input type="checkbox" id="UnderworldUseMobi">
                          <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="UnderWorldUseRuby">${g.Ce}</label>
                      <label class="toggle-switch">
                          <input type="checkbox" id="UnderWorldUseRuby">
                          <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="exitUnderworld">${g.bc}</label>
                      <label class="toggle-switch">
                          <input type="checkbox" id="exitUnderworld">
                          <span class="switch"></span>
                      </label>
                    </div>

                    <div class="settings_tab_title">${g.ic}</div>
                    <span class="span-new">${g.jc}: </span>
                    <div class="setting-row">
                        <label for="farmEnable">${g.B}</label>
                        <label class="toggle-switch">
                            <input type="checkbox" id="farmEnable">
                            <span class="switch"></span>
                        </label>
                    </div>

                    <div class="setting-row">
                        <label for="farmLocation">${g.hc}</label>
                        <select id="farmLocation">
                            <option value="0">Entrance</option>
                            <option value="1">Court of the Dead</option>
                            <option value="2">Tartarus</option>
                            <option value="3">Erebus</option>
                        </select>
                    </div>

                    <div class="setting-row">
                        <label for="farmEnemy">${g.fc}:</label>
                        <select id="farmEnemy">
                            <option value="0">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">Boss</option>
                        </select>
                    </div>

                    <div class="settings_tab_title">${g.pc}</div>
                      <div class="setting-row">
                          <label for="useVillaMedici">${g.Be}</label>
                          <label class="toggle-switch">
                              <input type="checkbox" id="useVillaMedici">
                              <span class="switch"></span>
                          </label>
                    </div>
                    

                    <div class="setting-row">
                        <label for="useHealingPotion">${g.Ae}</label>
                        <label class="toggle-switch">
                            <input type="checkbox" id="useHealingPotion">
                            <span class="switch"></span>
                        </label>
                    </div>

                    <span class="span-new"> ${g.ue}</span>
                    <span class="span-new">${g.ve}</span>

                    <div class="settings_tab_title">${g.Db}</div>
                    <span class="span-new">Cooldown is 30 minutes. If you dont have a costume on you, bot will reset cooldown to 0.</span>
                      <div class="setting-row">
                          <label for="useCostume">${g.ye}</label>
                          <label class="toggle-switch">
                              <input type="checkbox" id="useCostume">
                              <span class="switch"></span>
                          </label>
                    </div>

                    <div class="setting-row">
                        <label for="wearUnderworld">${g.De}</label>
                        <label class="toggle-switch">
                            <input type="checkbox" id="wearUnderworld">
                            <span class="switch"></span>
                        </label>
                    </div>
                    
                    <div id="costumeUnderworldWrapper" style="display:none;">
                      <div class="setting-row">
                          <label for="costumeUnderworld">${g.Pb}</label>
                          <select id="costumeUnderworld">
                              <option value="9">Dis Pater Normal</option>
                              <option value="10">Dis Pater Medium</option>
                              <option value="11">Dis Pater Hard</option>
                          </select>
                      </div>
                    </div>                

                    <div class="setting-row">
                      <label for="costumeBasic">${g.Ib}</label>
                      <select id="costumeBasic">
                          <option value="1">Vulcanus Forge</option>
                          <option value="2">Feronia's Earthen Shield</option>
                          <option value="3">Neptune's Fluid Might</option>
                          <option value="4">Aelous' Aerial Freedom</option>
                          <option value="5">Pluto's Deadly Mist</option>
                          <option value="6">Juno's Breath of Life</option>
                          <option value="7">Wrath Mountain's Scale Armour</option>
                          <option value="8">Eagle Eyes</option>
                          <option value="12">Saturns Winter Garment</option>
                          <option value="13">Bubona Bull Armour</option>
                          <option value="14">Mercerius Robbers Garments</option>
                          <option value="15">Ra Light Robe</option>
                      </select>
                    </div>

                    <div class="setting-row">
                      <label for="costumeDungeon">${g.Vb}</label>
                      <select id="costumeDungeon">
                          <option value="1">Vulcanus Forge</option>
                          <option value="2">Feronia's Earthen Shield</option>
                          <option value="3">Neptune's Fluid Might</option>
                          <option value="4">Aelous' Aerial Freedom</option>
                          <option value="5">Pluto's Deadly Mist</option>
                          <option value="6">Juno's Breath of Life</option>
                          <option value="7">Wrath Mountain's Scale Armour</option>
                          <option value="8">Eagle Eyes</option>
                          <option value="12">Saturns Winter Garment</option>
                          <option value="13">Bubona Bull Armour</option>
                          <option value="14">Mercerius Robbers Garments</option>
                          <option value="15">Ra Light Robe</option>
                      </select>
                    </div>
                    <span class="span-new">${g.Eb}</span>
                </div>
            
                <div class="popup-box" id="dungeon_settings">
                  <div class="settings_tab_title">${g.Ke}</div>
                  <div class="settings-tab">
                    <div class="setting-row">      
                      <label for="dungeonLocation">${g.Wb}</label>
                      <select id="dungeonLocation"></select>
                    </div>

                    <div class="setting-row">
                      <span class="span-new">${g.Je}</span>
                        <div id="set_dungeon_difficulty_normal" class="monster-button">
                          ${g.Ye}
                        </div>
                        <div id="set_dungeon_difficulty_advanced" class="monster-button">
                          ${g.advanced}
                        </div>
                    </div>

                    <div class="setting-row">
                      <label for="skipBossToggle">${g.Nd}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="skipBossToggle">
                        <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="resetIfLoseToggle">${g.yd}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="resetIfLoseToggle">
                        <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="dungeonAB">${g.xb}</label>  
                      <label class="toggle-switch">
                        <input type="checkbox" id="dungeonAB">
                        <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="dungeonFocusQuest">${g.lc}</label>  
                      <label class="toggle-switch">
                        <input type="checkbox" id="dungeonFocusQuest">
                        <span class="switch"></span>
                      </label>
                    </div>
                    <span class="span-new">Focus Quest, if enabled, will follow the shortest path to finish the dungeon.</span>  

                  
                    </div>
                      <div class="tutorial-container">
                        <span class="span-new">${g.Le}</span>  
                      </div>
                    </div>

                  <!-- ARENA -->
  
                  <div class="popup-box" id="arena_settings">
                  <div class="settings_tab_title">Arena</div>
                  <span class="span-new">${g.na}</span>

                  
                  <div class="settings_tab_title2">
                    <button id="tabA" class="tab-button active">Arena Local Server</button>
                    <button id="tabB" class="tab-button">Arena Other Servers</button>
                  </div>

                  <!-- Tab A Content -->
                  <div id="contentA" class="setting-row">
                    <div class="avoid-attack">
                      <div class="top-section">
                      <h3>${g.W}</h3>
                        <div class="switch-field2">
                          <input type="text" id="autoAttackInput" placeholder="${g.V}">
                          <button id="addAutoAttack" class="awesome-button">${g.U}</button>
                          <button id="ClearAttackList" class="awesome-button">Clear List</button>
                        </div>
                      </div>
                      <ul id="autoAttackList" class="scrollable-list"></ul>
                    </div>
                  </div>

                  <!-- Tab B Content -->
                  <div id="contentB" class="setting-row" style="display: none;">
                    <div class="avoid-attack">
                      <div class="top-section">
                        <h3>${g.W}</h3>
                        </div>
                        <ul id="autoAttackServerList" class="scrollable-list"></ul>
                      </div>
                  </div>

                  <div class="setting-row">
                    <div class="avoid-attack">
                        <div class="top-section">
                            <h3>${g.Ta}</h3>
                            <div class="switch-field2">
                                <input type="text" id="avoidAttackInput" placeholder="${g.V}">
                                <button id="addAvoidAttack" class="awesome-button">${g.U}</button>
                                <button id="ClearAvoidList" class="awesome-button">Clear List</button>
                            </div>
                        </div>
                        <ul id="avoidAttackList" class="scrollable-list"></ul>
                        ${g.Va}
                    </div>
                  </div>

                  <div class="setting-row">
                    <label for="arenaAttackGM">${g.ma}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="arenaAttackGM">
                      <span class="switch"></span>
                    </label>    
                  </div>

                  <div class="setting-row">
                    <div class="switch-field3">
                    <input type="number" id="autoAddArenaAmount" placeholder="Amount" min="0" value="${localStorage.getItem("autoAddArenaAmount")||0}">
                    </div>
                      <label for="autoAddArena">${g.ka}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="autoAddArena">
                        <span class="switch"></span>
                      </label>
                  </div>
  
                  <div class="setting-row">
                    <label for="autoAvoidArena">${g.la}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="autoAvoidArena">
                      <span class="switch"></span>
                    </label>
                  </div>

                  <div class="scoreboard-attack">
                    <div class="settings_tab_title">${g.Ja}</div>
                    <div class="setting-row">
                    <label for="scoreboardattackenable">${g.ua}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="scoreboardattackenable">
                      <span class="switch"></span>
                    </label>
                  </div>

                  <div class="setting-row">
                    <label for="scoreRange">${g.Ha}</label>
                    <select id="scoreRange" class="input">
                      <option value="1">1-50</option>
                      <option value="2">51-100</option>
                      <option value="3">101-150</option>
                      <option value="4">151-200</option>
                      <option value="5">201-250</option>
                      <option value="6">251-300</option>
                      <option value="7">301-350</option>
                      <option value="8">351-400</option>
                      <option value="9">401-450</option>
                      <option value="10">451-500</option>
                      <option value="11">501-550</option>
                      <option value="12">551-600</option>
                      <option value="13">601-650</option>
                      <option value="14">651-700</option>
                      <option value="15">701-750</option>
                      <option value="16">751-800</option>
                      <option value="17">801-850</option>
                      <option value="18">851-900</option>
                      <option value="19">901-950</option>
                      <option value="20">951-1000</option>
                      <!-- Add more options as needed -->
                    </select>
                  </div>
                  </div>
                  <span class="span-new">${g.Ia}</span>
                  
                  <div class="settings_tab_title">${g.xa}</div>

                  <div class="setting-row">
                  <label for="leagueattackenable">${g.ta}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="leagueattackenable">
                      <span class="switch"></span>
                    </label>
                  </div>

                  <div class="setting-row">
                  <label for="leaguerandom">${g.Da}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="leaguerandom">
                      <span class="switch"></span>
                    </label>
                  </div>

                  <div class="setting-row">
                  <label for="leaguelowtohigh">${g.Ea}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="leaguelowtohigh">
                      <span class="switch"></span>
                    </label>
                  </div>

                  <span class="span-new">${g.ya}</span>

                </div>

  
                  <!-- Circus -->

                  <div class="popup-box" id="circus_settings">
                    <div class="settings_tab_title">Circus</div>
                    <span class="span-new">${g.na}</span>

                  <div class="settings_tab_title2">
                    <button id="tabACircus" class="tab-button active">Circus Local Server</button>
                    <button id="tabBCircus" class="tab-button">Circus Other Servers</button>
                  </div>

                  <!-- Tab A Content -->
                  <div id="contentACircus" class="setting-row">
                    <div class="avoid-attack">
                      <div class="top-section">
                      <h3>${g.W}</h3>
                        <div class="switch-field2">
                          <input type="text" id="autoAttackCircusInput" placeholder="${g.V}">
                          <button id="addAutoCircusAttack" class="awesome-button">${g.U}</button>
                          <button id="ClearCircusAttackList" class="awesome-button">Clear List</button>
                        </div>
                      </div>
                      <ul id="autoAttackCircusList" class="scrollable-list"></ul>
                    </div>
                  </div>

                  <!-- Tab B Content -->
                  <div id="contentBCircus" class="setting-row" style="display: none;">
                    <div class="avoid-attack">
                      <div class="top-section">
                        <h3>${g.W}</h3>
                        </div>
                        <ul id="autoAttackCircusServerList" class="scrollable-list"></ul>
                      </div>
                  </div>

                    <div class="setting-row">
                    <div class="avoid-attack">
                    <div class="top-section">
                      <h3>${g.Ta}</h3>
                      <div class="switch-field2">
                        <input type="text" id="avoidAttackCircusInput" placeholder="${g.V}">
                        <button class="awesome-button" id="addAvoidCircusAttack">${g.U}</button>
                        <button class="awesome-button" id="ClearCircusAvoidList">Clear List</button>
                      </div>
                      </div>
                        <ul id="avoidAttackCircusList" class="scrollable-list"></ul>
                        ${g.Va}
                      </div>
                    </div>

                    <div class="setting-row">
                      <label for="circusAttackGM">${g.ma}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="circusAttackGM">
                        <span class="switch"></span>
                      </label>    
                    </div>

                    <div class="setting-row">
                      <div class="switch-field3">
                      <input type="number" id="autoAddCircusAmount" placeholder="Amount" min="0" value="${localStorage.getItem("autoAddCircusAmount")||0}">
                      </div>
                        <label for="autoAddCircus">${g.ka}</label>
                        <label class="toggle-switch">
                          <input type="checkbox" id="autoAddCircus">
                          <span class="switch"></span>
                        </label>
                    </div>

                    <div class="setting-row">
                      <label for="autoAvoidCircus">${g.la}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="autoAvoidCircus">
                        <span class="switch"></span>
                      </label>
                    </div>

                    <div class="scoreboard-attack">
                    <div class="settings_tab_title">${g.Ja}</div>
                      <div class="setting-row">
                      <label for="scoreboardcircusenable">${g.ua}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="scoreboardcircusenable">
                        <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="scoreRangeCircus">${g.Ha}</label>
                        <select id="scoreRangeCircus" class="input">
                          <option value="1">1-50</option>
                          <option value="2">51-100</option>
                          <option value="3">101-150</option>
                          <option value="4">151-200</option>
                          <option value="5">201-250</option>
                          <option value="6">251-300</option>
                          <option value="7">301-350</option>
                          <option value="8">351-400</option>
                          <option value="9">401-450</option>
                          <option value="10">451-500</option>
                          <option value="11">501-550</option>
                          <option value="12">551-600</option>
                          <option value="13">601-650</option>
                          <option value="14">651-700</option>
                          <option value="15">701-750</option>
                          <option value="16">751-800</option>
                          <option value="17">801-850</option>
                          <option value="18">851-900</option>
                          <option value="19">901-950</option>
                          <option value="20">951-1000</option>
                          <!-- Add more options as needed -->
                        </select>
                      </div>
                    </div>
                    <span class="span-new"> ${g.Ia} </span>
                    
                    <div class="settings_tab_title">${g.xa}</div>

                    <div class="setting-row">
                    <label for="leaguecircusattackenable">${g.ta}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="leaguecircusattackenable">
                        <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                    <label for="leaguecircusrandom">${g.Da}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="leaguecircusrandom">
                        <span class="switch"></span>
                      </label>
                    </div>
  
                    <div class="setting-row">
                    <label for="leaguecircuslowtohigh">${g.Ea}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="leaguecircuslowtohigh">
                        <span class="switch"></span>
                      </label>
                    </div>
                    <span class="span-new">${g.ya}</span>

                    </div>
                  
                  <div class="popup-box" id="quests_settings">

                    <div class="settings_tab_title">Quests</div>

                    <div class="setting-row">
                      <div class="monster-buttons">
                        <span class="span-new">${g.type}</span>
                        <div class="quest-container">
                          <div id="do_combat_quests" class="settingsButton quest-type combat"></div>
                          <div id="do_arena_quests" class="settingsButton quest-type arena"></div>
                          <div id="do_circus_quests" class="settingsButton quest-type circus"></div>
                          <div id="do_expedition_quests" class="settingsButton quest-type expedition"></div>
                          <div id="do_dungeon_quests" class="settingsButton quest-type dungeon"></div>
                          <div id="do_items_quests" class="settingsButton quest-type items"></div>
                        </div>
                      </div>
                    </div>

                    <div class="settings_tab_title">Quest Settings</div>

                    <div class="setting-row">
                      <label for="skipTimeQuests">Arena ${g.fa}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="skipTimeQuests">
                        <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                    <label for="skipTimeCircusQuests">Circus ${g.fa}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="skipTimeCircusQuests">
                      <span class="switch"></span>
                    </label>
                    </div>

                    <div class="setting-row">
                    <label for="skipTimeOtherQuests">Other ${g.fa}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="skipTimeOtherQuests">
                      <span class="switch"></span>
                    </label>
                    </div>

                    <div class="setting-row">
                    <label for="acceptnotfilter">${g.jd}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="acceptnotfilter">
                      <span class="switch"></span>
                    </label>
                    </div>

                    <div class="settings_tab_title">${g.od}</div>
                      <div class="setting-row">
                        ${g.hd}
                        <select id="questSpeed">
                        <option value="0">5x</option>
                        <option value="1">4x</option>
                        <option value="2">3x</option>
                        <option value="3">2x</option>
                        <option value="4">1x</option>
                      </select>
                    </div>
                    <div class="settings_tab_title">${g.nd}</div>

                    <div class="setting-row">
                      ${g.md}
                      <div class="input-container">
                      <input type="text" id="keywordInput" placeholder="${g.va}">
                      <button class="awesome-button" id="addKeywordBtn">${g.N}</button>
                      </div>
                      <div id="keywordList"></div>
                    </div>
                    
                    <div class="settings_tab_title">${g.kd}</div>

                    <div class="setting-row">
                      ${g.ld}
                      <div class="input-container">
                      <input type="text" id="keywordAcceptInput" placeholder="${g.va}">
                      <button class="awesome-button" id="addKeywordAcceptBtn">${g.N}</button>
                      </div>
                      <div id="keywordAcceptList"></div>
                      </div>         
                    </div>

                <div class="popup-box" id="heal_settings">
                  <div class="monster-buttons">
                  </div>
                  <div class="settings_tab_title">${g.Se}</div>

                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; margin-right: 50px;">
                  </div>

                  <div class="setting-row">
                  <label for="healPercentage">${g.Re}</label>
                  <div class="switch-field3">
                    <input type="number" id="healPercentage" min="1" max="99" value="${localStorage.getItem("healPercentage")||75}">
                  </div>
                </div>

                  <div class="setting-row">
                  <img style="margin-top: -10px" src="https://gf3.geo.gfsrv.net/cdneb/91e0372cccc24f52758be611a10a3b.png">
                  <label for="HealClothToggle">${g.Ad}</label>
                  
                    <label class="toggle-switch">
                      <input type="checkbox" id="HealClothToggle">
                      <span class="switch"></span>
                    </label>
                  </div>

                  <div class="setting-row">
                  <label for="HealRubyToggle">${g.Dg}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="HealRubyToggle">
                      <span class="switch"></span>
                    </label>
                  </div>

                  <div class="setting-row">
                  <label for="healShopToggle">${g.Df}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="healShopToggle">
                      <span class="switch"></span>
                    </label>
                  </div>

                  <div class="setting-row">
                  <label for="healfrompackage">${g.Ef}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="healfrompackage">
                      <span class="switch"></span>
                    </label>
                  </div>

                  <div class="setting-row">
                    <label for="HealPickBag">${g.nc}</label>
                     <select id="HealPickBag" class="input">
                     <option value="1">
                        1
                      </option>
                      <option value="2">
                        2
                      </option>
                      <option value="3">
                        3
                      </option>
                      <option value="4">
                        4
                      </option>
                      <option value="5">
                        5
                      </option>
                      <option value="6">
                        6
                      </option>
                      <option value="7">
                        7
                      </option>
                      <option value="8">
                      8
                    </option>
                    </select>
                  </div>
                  
                  <div class="setting-row">
                  <label for="FoodAmount">${g.Qe}</label>
                   <select id="FoodAmount" class="input">
                   <option value="1">
                      1
                    </option>
                    <option value="2">
                      2
                    </option>
                    <option value="3">
                      3
                    </option>
                    <option value="4">
                      4
                    </option>
                    <option value="5">
                      5
                    </option>
                    <option value="6">
                      6
                    </option>
                    <option value="7">
                      7
                    </option>
                    <option value="8">
                    8
                  </option>
                  </select>
                </div>   
                  
                  <div class="setting-row">
                  <label for="healcervisia">${g.Cf}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="healcervisia">
                      <span class="switch"></span>
                    </label>
                  </div>

                  <div class="settings_tab_title">${g.sc}</div>
                  <span class="span-new">${g.$c}</span>
                  <div class="setting-row">
                  <label for="OilEnable">${g.Zb}</label>
                    <label class="toggle-switch">
                      <input type="checkbox" id="OilEnable">
                      <span class="switch"></span>
                    </label>
                  </div>

                  <div class="setting-row">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-right: 50px;">
                  <table style="width: 100%">
                    <tbody>
                      <tr>
                        <td style="font-weight: bold; text-align: left; width: 30%">Minerva:</td>
                          <td style="text-align: right;">
                            <div class="radio-group">
                              <input type="radio" name="minerva" value="0"><span class="span-new">I</span>
                              <input type="radio" name="minerva" value="1"><span class="span-new">II</span>
                              <input type="radio" name="minerva" value="2"><span class="span-new">III</span>
                              <input type="radio" name="minerva" value="3" checked="true"><span class="span-new">Off</span>
                            </div>
                              </td>
                          </tr>
                          <tr>
                              <td style="font-weight: bold; text-align: left; width: 30%">Diana:</td>
                              <td>
                                  <div class="radio-group">
                                      <input type="radio" name="diana" value="0"><span class="span-new">I</span>
                                      <input type="radio" name="diana" value="1"><span class="span-new">II</span>
                                      <input type="radio" name="diana" value="2"><span class="span-new">III</span>
                                      <input type="radio" name="diana" value="3" checked="true"><span class="span-new">Off</span>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td style="font-weight: bold; text-align: left; width: 30%">Mars:</td>
                              <td>
                                  <div class="radio-group">
                                      <input type="radio" name="mars" value="0"><span class="span-new">I</span>
                                      <input type="radio" name="mars" value="1"><span class="span-new">II</span>
                                      <input type="radio" name="mars" value="2"><span class="span-new">III</span>
                                      <input type="radio" name="mars" value="3" checked="true"><span class="span-new">Off</span>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td style="font-weight: bold; text-align: left; width: 30%">Merkur:</td>
                              <td>
                                  <div class="radio-group">
                                      <input type="radio" name="merkur" value="0"><span class="span-new">I</span>
                                      <input type="radio" name="merkur" value="1"><span class="span-new">II</span>
                                      <input type="radio" name="merkur" value="2"><span class="span-new">III</span>
                                      <input type="radio" name="merkur" value="3" checked="true"><span class="span-new">Off</span>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td style="font-weight: bold; text-align: left; width: 30%">Apollo:</td>
                              <td>
                                  <div class="radio-group">
                                      <input type="radio" name="apollo" value="0"><span class="span-new">I</span>
                                      <input type="radio" name="apollo" value="1"><span class="span-new">II</span>
                                      <input type="radio" name="apollo" value="2"><span class="span-new">III</span>
                                      <input type="radio" name="apollo" value="3" checked="true"><span class="span-new">Off</span>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td style="font-weight: bold; text-align: left; width: 30%">Vulcanus:</td>
                              <td>
                                  <div class="radio-group">
                                      <input type="radio" name="vulcanus" value="0"><span class="span-new">I</span>
                                      <input type="radio" name="vulcanus" value="1"><span class="span-new">II</span>
                                      <input type="radio" name="vulcanus" value="2"><span class="span-new">III</span>
                                      <input type="radio" name="vulcanus" value="3" checked="true"><span class="span-new">Off</span>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div class="popup-box" id="event_expedition_settings">
                    <div class="settings_tab_title">${g.eventExpedition}</div>

                    <div class="setting-row">
                        <div id="set_event_monster_id_0" class="monster-button">1</div>
                        <div id="set_event_monster_id_1" class="monster-button">2</div>
                        <div id="set_event_monster_id_2" class="monster-button">3</div>
                        <div id="set_event_monster_id_3" class="monster-button">Boss</div>
                    </div>
                    <div id="clear_next_event_expedition_time" class="awesome-button">${g.qd}</div> <!-- New Button -->

                      <div class="setting-row">
                      <label for="renewEvent">${g.td}</label>
                        <label class="toggle-switch">
                        <input type="checkbox" id="renewEvent">
                        <span class="switch"></span>
                      </label>
                      </div>
                      <div class="setting-row">
                      <label for="throwDice">Throw Dice Automatically?</label>
                        <label class="toggle-switch">
                        <input type="checkbox" id="throwDice">
                        <span class="switch"></span>
                      </label>
                      </div>
                      <div class="setting-row">
                      <span class="span-new">Use throw dice cautiously, it will keep using the first dice until you disable the option.<span class="span-new">
                      
                                          </div>
                      <div class="setting-row">
                    <span class="span-new">${g.ac}<span class="span-new">
                    
                                        </div>
                    </div>

                  <div class="popup-box" id="auto_auction_settings">
                  
                    <div class="settings_tab_title">${g.Ab}</div>
                    <span class="span-new">To open search panels including Unique shop items, enable this option.<span class="span-new">
                    <div class="setting-row">
                    <label for="AuctionItemLevel2">${g.Uc}</label>
                      <div class="switch-field2">
                        <input type="text" id="search_input" placeholder="${g.rb}">
                      </div>
                    </div>

                    <div class="setting-row">
                      <label for="AuctionItemLevel2">${g.O}</label>
                      <div class="switch-field3">
                        <input type="number" id="AuctionItemLevel2" min="1" max="1000" value="5">
                      </div>
                    </div>   

                    <div class="setting-row">
                      <label for="SearchQuality">${g.Vc}</label>
                      <select id="SearchQuality" class="input">
                          <option value="-1">
                          ${g.Xa}
                          </option>
                            <option value="0">
                            ${g.G}
                            </option>
                            <option value="1">
                            ${g.F}
                            </option>
                            <option value="2">
                            ${g.H}
                            </option>
                          </option>
                      </select>
                    </div> 

                    <div class="setting-row">
                      <label>${g.Y}</label>
                      <div class="equipment-search-selection">
                          <label><input type="checkbox" class="equipment-search-option" value="2"> ${g.T}</label>
                          <label><input type="checkbox" class="equipment-search-option" value="4"> ${g.R}</label>
                          <label><input type="checkbox" class="equipment-search-option" value="8"> ${g.J}</label>
                          <label><input type="checkbox" class="equipment-search-option" value="1"> ${g.L}</label>
                          <label><input type="checkbox" class="equipment-search-option" value="256"> ${g.K}</label>
                          <label><input type="checkbox" class="equipment-search-option" value="512"> ${g.S}</label>
                          <label><input type="checkbox" class="equipment-search-option" value="48"> ${g.P}</label>
                          <label><input type="checkbox" class="equipment-search-option" value="1024"> ${g.I}</label>
                          <label><input type="checkbox" class="equipment-search-option" value="9999"> ${g.D}</label>
                      </div>
                    </div>

                    <button class="awesome-button" id="search_button" type="button">${g.rb}</button>
                    <button class="awesome-button" id="search_reset" type="button">${g.wb}</button>
       
                    <div class="setting-row">
                    <ul id="search_list"></ul>
                    <span class="span-new">${g.yb}</span>
                    </div>

                    <div class="settings_tab_title">${g.Dd}</div>
                    <div class="setting-row">

                      <!-- Title & Instructions -->
                      <div style="margin-bottom: 20px;">
                          <h2>${g.Fd}</h2>
                          <p>${g.Ed}</p>
                      </div>
                    </div>
                    <!-- Item Input Section -->

                        <div class="setting-row">
                          <label for="clothCount">${g.Gd}</label>
                          <div class="switch-field2">
                              <input type="number" id="clothCount" placeholder="${g.Hd}">
                          </div>
                        </div>

                        <div class="setting-row">
                              <label for="newItem">${g.Ma}:</label>
                          <div class="switch-field2">                              
                              <input type="text" id="newItem" placeholder="${g.Ma}">
                          </div>
                        </div>

                        <div class="setting-row">
                          <label for="newItemLevel">Min ${g.La}:</label>
                          <div class="switch-field2">                              
                              <input type="text" id="newItemLevel" placeholder="Min ${g.La}">
                          </div>
                        </div>
                
                        <div class="setting-row">
                          <label for="itemQuality">Min ${g.Jd}:</label>
                          <select id="itemQuality">
                              <option value="0">${g.G}</option>
                              <option value="1">${g.F}</option>
                              <option value="2">${g.H}</option>
                              <option value="3">${g.Z}</option>
                              <option value="4">${g.ja}</option>
                          </select>
                        </div>

                        <div style="text-align: right;">
                        <button class="awesome-button" id="addItemButton">${g.N}</button>
                      </div>

                      <div class="setting-row">
                        <div id="itemsList" style="margin-bottom: 10px;">
                        <!-- Example item -->
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="flex: 1;">${g.Id}</span>
                            <button onclick="removeItem('uniqueItemID')">X</button>
                        </div>
                        <!-- Add more items similarly -->
                        </div>
                      </div>  
                  
                      <!-- Search Buttons -->
                      <div style="display: flex; justify-content: space-between; gap: 10px; margin-bottom: 20px;">
                        <button class="awesome-button" id="startSearchButton">${g.Kd}</button>
                        <button class="awesome-button" id="skipSearchButton" style="display: none;">${g.Ld}</button>
                        <button class="awesome-button" id="stopSearchButton">${g.Md}</button>
                      </div>
                      <div class="setting-row">
                      <!-- Progress Bar -->
                      <div style="margin-bottom: 20px;">
                          <label>Search Progress:</label>
                          <div id="progressBarOuter" style="width: 100%; height: 20px; background-color: grey; border-radius: 10px;">
                              <div id="progressBarInner" style="height: 100%; width: 0%; background-color: green; border-radius: 10px;"></div>
                          </div>
                      </div>
                  
                      <!-- Found Items Container -->
                      <div id="foundItemsContainer"></div>
                    </div>
                </div>
                
                    


                  
                
                

                  <div class="popup-box" id="auto_auction2_settings">



                  
                    <div class="settings_tab_title">${g.Yc}</div>
                    <span class="span-new">${g.Bb}</span>
                    
                    <div class="setting-row">
                      <div class="table-container">
                          <table class="styled-table">
                            <thead>
                              <tr>
                                <th>Prefix</th>
                                <th>Suffix</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <ul class="styled-list" id="AuctionprefixList"></ul>
                                </td>
                                <td>
                                  <ul class="styled-list" id="AuctionsuffixList"></ul>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="list-options">
                                 
                                    <input type="text" class="styled-input" id="AuctionnewPrefixInput">
                                    <input type="button" id="AuctionaddPrefixButton" value="${g.aa}">
                                  </div>
                                </td>
                                <td>
                                  <div class="list-options">
                                    <input type="text" class="styled-input" id="AuctionnewSuffixInput">
                                    <input type="button" id="AuctionaddSuffixButton" value="${g.ba}">
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                      </div>
                    </div>
                  
                    <div class="setting-row">
                        <label>${g.Y}</label>
                        <div class="equipment-selection">
                            <label><input type="checkbox" class="equipment-option" value="2"> ${g.T}</label>
                            <label><input type="checkbox" class="equipment-option" value="4"> ${g.R}</label>
                            <label><input type="checkbox" class="equipment-option" value="8"> ${g.J}</label>
                            <label><input type="checkbox" class="equipment-option" value="1"> ${g.L}</label>
                            <label><input type="checkbox" class="equipment-option" value="256"> ${g.K}</label>
                            <label><input type="checkbox" class="equipment-option" value="512"> ${g.S}</label>
                            <label><input type="checkbox" class="equipment-option" value="48"> ${g.P}</label>
                            <label><input type="checkbox" class="equipment-option" value="1024"> ${g.I}</label>
                            <label><input type="checkbox" class="equipment-option" value="9999"> ${g.D}</label>
                        </div>
                    </div>

                      <div class="setting-row">
                        <label for="auctiongladiatorenable">${g.zd}</label>
                          <label class="toggle-switch">
                          <input type="checkbox" id="auctiongladiatorenable">
                          <span class="switch"></span>
                        </label>
                      </div>

                      <div class="setting-row">
                        <label for="auctionmercenaryenable">${g.Bd}</label>
                          <label class="toggle-switch">
                          <input type="checkbox" id="auctionmercenaryenable">
                          <span class="switch"></span>
                         </label>
                      </div>

                      <div class="setting-row">
                      <label for="ignorePS">${g.uc}</label>
                        <label class="toggle-switch">
                        <input type="checkbox" id="ignorePS">
                        <span class="switch"></span>
                      </label>
                    </div>

                      <div class="setting-row">
                        <label for="bidFood">${g.Jb}</label>
                          <label class="toggle-switch">
                          <input type="checkbox" id="bidFood">
                          <span class="switch"></span>
                        </label>
                      </div>

                      <div class="setting-row">
                      <label for="AuctionCover">${g.ra}</label>
                        <label class="toggle-switch">
                        <input type="checkbox" id="AuctionCover">
                        <span class="switch"></span>
                      </label>
                    </div>

                      <div class="setting-row">
                        <label for="bidfood">${g.Lc}</label>
                        <div class="switch-field3">
                          <input type="number" id="maximumBid" min="1" max="1000000" value="25">
                        </div>
                      </div>

                    <div class="setting-row">
                      <label for="auctionminlevel">${g.O}</label>
                      <div class="switch-field3">
                        <input type="number" id="auctionminlevel" min="1" max="1000" value="0">
                      </div>
                    </div>

                      <div class="setting-row">
                        <label for="bidStatus">${g.Kb}</label>
                         <select id="bidStatus" class="input">
                          <option value="4">
                          ${g.Sa}
                          </option>
                          <option value="3">
                          ${g.Na}
                          </option>
                          <option value="2">
                          ${g.Ca}
                          </option>
                          <option value="1">
                          ${g.za}
                          </option>
                          <option value="0">
                          ${g.Ra}
                          </option><!-- Add more options as needed -->
                        </select>
                      </div>

                      <div class="setting-row">
                        <label for="enableMercenarySearch">${g.Ne}</label>
                        <label class="toggle-switch">
                            <input type="checkbox" id="enableMercenarySearch">
                            <span class="switch"></span>
                        </label>
                    </div>

                    <div id="mercenarySearchOptions" style="display:none">
                        <div class="setting-row">
                        
                            <label for="minDexterity">Min: ${g.da}</label>
                            <div class="switch-field3">
                                <input type="number" id="minDexterity" min="1" max="10000" value="0">
                            </div>
                        </div>
                        <div class="setting-row">
                            <label for="minAgility">Min: ${g.ca}</label>
                            <div class="switch-field3">
                                <input type="number" id="minAgility" min="1" max="10000" value="0">
                            </div>
                        </div>
                        <div class="setting-row">
                            <label for="minIntelligence">Min: ${g.ea}</label>
                            <div class="switch-field3">
                                <input type="number" id="minIntelligence" min="1" max="10000" value="0">
                            </div>
                        </div>
                        <span class="span-new">Enter 0 to ignore stats.</span>
                    </div>
                      
                      <div class="setting-row">
                        <h4>${g.Lb}</h4>
                        <div class="table-container">
                          <table class="styled-table">
                            <tbody>
                              <tr>
                                <td>
                                  <ul class="styled-list" id="bidList"></ul>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="list-options">
                                    <input type="button" class="awesome-button" id="clearBidItemsHistory" value="${g.pa}">
                                  </div>
                                  
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                                     
          
                  </div>
     

                  <div class="popup-box" id="auto_smelt_settings">
                  <div class="settings_tab_title">Auto Smelt</div>
                  <span class="span-new">${g.Fe}</span>
                  <div class="setting-row">
                    <div class="table-container">
                      <table class="styled-table">
                        <thead>
                          <tr>
                            <th>Prefix</th>
                            <th>Suffix</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <ul class="styled-list" id="prefixList"></ul>
                            </td>
                            <td>
                              <ul class="styled-list" id="suffixList"></ul>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="list-options">
                                <input type="text" class="styled-input" id="newPrefixInput">
                                <input type="button" id="addPrefixButton" value="${g.aa}">
                              </div>
                            </td>
                            <td>
                              <div class="list-options">
                                <input type="text" class="styled-input" id="newSuffixInput">
                                <input type="button" id="addSuffixButton" value="${g.ba}">
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <!-- Smelted Items List -->
 
                    <span class="span-new">${g.Af}</span>     
                    <span class="span-new">${g.Rd}</span>     
                      
                    <div class="setting-row">
                    <label>${g.Y}</label>
                      <div class="equipment-selection-smelt">
                          <label><input type="checkbox" class="equipment-option-smelt" value="2"> ${g.T}</label>
                          <label><input type="checkbox" class="equipment-option-smelt" value="4"> ${g.R}</label>
                          <label><input type="checkbox" class="equipment-option-smelt" value="8"> ${g.J}</label>
                          <label><input type="checkbox" class="equipment-option-smelt" value="1"> ${g.L}</label>
                          <label><input type="checkbox" class="equipment-option-smelt" value="256"> ${g.K}</label>
                          <label><input type="checkbox" class="equipment-option-smelt" value="512"> ${g.S}</label>
                          <label><input type="checkbox" class="equipment-option-smelt" value="48"> ${g.P}</label>
                          <label><input type="checkbox" class="equipment-option-smelt" value="1024"> ${g.I}</label>
                          <label><input type="checkbox" class="equipment-option-smelt" value="9999"> ${g.D}</label>
                      </div>
                    </div>
                  
                    <div class="setting-row">
                      <label for="smeltGreen">${g.tf}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="smeltGreen">
                        <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="smeltBlue">${g.sf}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="smeltBlue">
                        <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="smeltPurple">${g.wf}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="smeltPurple">
                        <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="smeltOrange">${g.vf}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="smeltOrange">
                        <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                        <label for="smeltRed">${g.Oa} Red?</label>
                        <label class="toggle-switch">
                        <input type="checkbox" id="smeltRed">
                        <span class="switch"></span>
                        </label>
                    </div>

                    <div class="setting-row">
                      <label for="smeltIgnorePS">${g.uf}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="smeltIgnorePS">
                        <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="smeltAnything">${g.Pd}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="smeltAnything">
                        <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="smelteverything2">${g.yf}</label>
                      <label class="toggle-switch">
                        <input type="checkbox" id="smelteverything2">
                        <span class="switch"></span>
                      </label>
                    </div>
                    
                  <div class="setting-row">
                    <label for="smeltTab">${g.Qd}</label>
                    <select id="smeltTab" class="input">
                    <option value="6">
                        8
                      </option>
                          <option value="5">
                            7
                          </option>
                          <option value="4">
                            6
                          </option>
                          <option value="3">
                            5
                          </option>
                          <option value="2">
                            4
                          </option>
                          <option value="1">
                            3
                          </option>
                          <option value="0">
                            2
                          </option>
                    </select>
                  </div>

                  <span class="span-new">${g.zf}</span>

                    <div class="settings_tab_title">${g.Od}</div>

                    <div class="setting-row">
                      <div class="table-container">
                        <table class="styled-table">
                          <thead>
                            <tr>
                              <th>${g.gd}</th>
                              <th>${g.Td}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <ul class="styled-list" id="IgnoredprefixList"></ul>
                              </td>
                              <td>
                                <ul class="styled-list" id="IgnoredsuffixList"></ul>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="list-options">
                                  <input type="text" class="styled-input" id="newIgnoredPrefixInput">
                                  <input type="button" class="awesome-button" id="IgnoredaddPrefixButton" value="${g.aa}">
                                </div>
                              </td>
                              <td>
                                <div class="list-options">
                                  <input type="text" class="styled-input" id="newIgnoredSuffixInput">
                                  <input type="button" class="awesome-button" id="IgnoredaddSuffixButton" value="${g.ba}">
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                  <!-- Smelted Items List -->
                  
                  <div class="settings_tab_title">${g.xf}</div>
                  <div class="setting-row">
                    <div class="table-container">
                      <table class="styled-table">
                        <tbody>
                          <tr>
                            <td>
                              <ul class="styled-list" id="smeltedList"></ul>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="list-options">
                                <input type="button" class="awesome-button" id="clearSmeltedItemsHistory" value="${g.pa}">
                                
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                

                  
                <div class="popup-box" id="auto_repair_settings">
                <div class="settings_tab_title">${g.Fa} v2.0 Beta</div>
                <div class="setting-row">
                  <div class="inventory">
                  <div class="inventory-row">
                      <div class="inventory-item" id="helmet">
                          <div class="helmet-image" id="helmet-image"></div>
                      </div>
                      <div class="inventory-item" id="necklace">
                      <div class="necklace-image" id="necklace-image"></div>
                    </div>
                  </div>

                  <div class="inventory-row">
                      <div class="inventory-item" id="weapon">
                          <div class="sword-image" id="sword-image"></div>
                      </div>
                      <div class="inventory-item" id="armor">
                          <div class="chest-image" id="chest-image" ></div>
                      </div>
                      <div class="inventory-item" id="shield">
                          <div class="shield-image" id="shield-image"></div>
                      </div>
                  </div>

                  <div class="inventory-row">
                      <div class="inventory-item" id="gloves">
                          <div class="gloves-image" id="gloves-image"></div>
                      </div>
                      <div class="inventory-item" id="shoes">
                          <div class="shoes-image" id="shoes-image"></div>
                      </div>
                      <div class="inventory-item" id="rings1">
                          <div class="ring1-image" id="ring1-image"></div>
                      </div>
                      <div class="inventory-item" id="rings2">
                          <div class="ring2-image" id="ring2-image"></div>
                      </div>
                  </div>

                  
                  <div class="instructions">
                    <span class="span-new">${g.Wa}</span>
                    </div>
                  <br>
                  <span class="span-new">Cooldown for repair by default is 10 minutes.</span>
                  </div>
                



                </div>

                <div class="setting-row">
                  <label for="repairGladiator">${g.ga} Gladiator?</label>
                  <label class="toggle-switch">
                    <input type="checkbox" id="repairGladiator">
                    <span class="switch"></span>
                  </label>
                  </div>
                  
                <div class="setting-row">
                <label for="repairMercenary">${g.ga} Mercenary?</label>
                <label class="toggle-switch">
                  <input type="checkbox" id="repairMercenary">
                  <span class="switch"></span>
                </label>
                </div>



            <div class="setting-row">
                <label for="repairPercentage">Min Condition</label>
                <select id="repairPercentage" class="input">
                <option value="3">%10</option>
                <option value="2">%20</option>
                <option value="1">%30</option>
                <option value="0">%40</option>
                <option value="-1">%50</option>
                </select>
            </div>

              <div class="setting-row">
                  <label for="repairMaxQuality">${g.Ve}</label>
                  <select id="repairMaxQuality" class="input">
                        <option value="3">
                        ${g.Z}
                        </option>
                        <option value="2">
                        ${g.H}
                        </option>
                        <option value="1">
                        ${g.F}
                        </option>
                        <option value="0">
                        ${g.G}
                        </option>
                        <option value="-1">
                        ${g.Xa}
                        </option>
                  </select>
              </div>

                <div class="setting-row">
                    <label for="currentWorkbenchItem">Current item on workbench [Clear if bot pauses unexpectedly]:</label>
                    <span id="currentWorkbenchItem"></span> <!-- Item name will be displayed here -->
                </div>
                <div class="setting-row">
                    <div id="clear_repair" class="awesome-button">Clear</div> <!-- Button to clear -->
                </div>

                </div>

                <div class="popup-box" id="other_settings2">

                    <div class="settings_tab_title">${g.ud}</div>


                    <div class="setting-row">
                    <span class="span-new">${g.vd}</span>
                    <div class="instructionsReset">
                    
                    <span class="span-new">${g.Ga}</span>
                    </div>
                 
                    </div>
                    
                    <div class="setting-row">
                      <label for="resetExpiredItems">${g.B}</label>
                      <label class="toggle-switch">
                          <input type="checkbox" id="resetExpiredItems">
                          <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
 
                        <label for="resetDays">${g.wd}</label>
                        <select id="resetDays" style="margin-left: 5px;">
                            <option value="1">1 day</option>
                            <option value="2">2 days</option>
                            <option value="3">3 days</option>
                            <option value="4">4 days</option>
                        </select>
                    </div>
                    
                    <div class="setting-row">
                        <label for="itemsToReset">${g.Sf}</label>
                        <div id="itemsToReset" class="items-reset-list">
                            <div class="item-reset"><input type="checkbox" id="WEAPONS" value="WEAPONS"><label for="WEAPONS">Weapons</label></div>
                            <div class="item-reset"><input type="checkbox" id="SHIELD" value="SHIELD"><label for="SHIELD">Shield</label></div>
                            <div class="item-reset"><input type="checkbox" id="CHEST" value="CHEST"><label for="CHEST">Chest</label></div>
                            <div class="item-reset"><input type="checkbox" id="HELMET" value="HELMET"><label for="HELMET">Helmet</label></div>
                            <div class="item-reset"><input type="checkbox" id="GLOVES" value="GLOVES"><label for="GLOVES">Gloves</label></div>
                            <div class="item-reset"><input type="checkbox" id="SHOES" value="SHOES"><label for="SHOES">Shoes</label></div>
                            <div class="item-reset"><input type="checkbox" id="RINGS" value="RINGS"><label for="RINGS">Rings</label></div>
                            <div class="item-reset"><input type="checkbox" id="AMULETS" value="AMULETS"><label for="AMULETS">Amulets</label></div>
                            <div class="item-reset"><input type="checkbox" id="USABLES" value="USABLES"><label for="USABLES">Usables</label></div>
                            <div class="item-reset"><input type="checkbox" id="UPGRADES" value="UPGRADES"><label for="UPGRADES">Upgrades</label></div>
                            <div class="item-reset"><input type="checkbox" id="RECIPES" value="RECIPES"><label for="RECIPES">Recipes</label></div>
                            <div class="item-reset"><input type="checkbox" id="MERCENARY" value="MERCENARY"><label for="MERCENARY">Mercenary</label></div>
                            <div class="item-reset"><input type="checkbox" id="SCROLLS" value="SCROLLS"><label for="SCROLLS">Scrolls</label></div>
                            <div class="item-reset"><input type="checkbox" id="REINFORCEMENTS" value="REINFORCEMENTS"><label for="REINFORCEMENTS">Reinforcements</label></div>
                        </div>
                    </div>
                    
                    <hr style="border: none; border-top: 1px solid black; margin: 10px 0px;">

                    <div class="setting-row">
                        <label for="pauseDuration">${g.fd} </label>
                        <select id="pauseDuration">
                        <option value="0">No pause</option>
                        <option value="1">Stable Boy</option>
                        <option value="2">Farmer</option>
                        <option value="3">Butcher</option>
                        <option value="4">Fisherman</option>
                        <option value="5">Baker</option>
                        </select>
                    </div>
                     
              </div>

              <div class="popup-box" id="Timers">
              
              <div class="settings_tab_title">${g.Qa}</div>
              <span class="span-new">${g.Timers}</span>
              <div class="setting-row">
              <div class="timer-list" style="display: grid; grid-template-columns: repeat(2, 5fr); gap: 10px;">
              <div class="timer-item">
                  <label for="smelting-timer" style="font-weight: bold;">${g.me}</label>
                  <p class="description">${g.ke}</p>

                  
                  <input type="number" id="smelting-timer" class="timer-input" style="width: 60px;" min="3" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).Smelting||10}">
                </div>
                <div class="timer-item">
                <label for="reset-expired-timer" style="font-weight: bold;">${g.le}</label>
                <p class="description">${g.he}</p>

                
                <input type="number" id="smelting-timer-nogold" class="timer-input" style="width: 60px;" min="3" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).SmeltingNoGold||5}">
              </div>
              <div class="timer-item">
              <label for="reset-expired-timer" style="font-weight: bold;">${g.ie}</label>
              <p class="description">${g.je}</p>

              
              <input type="number" id="smelting-timer-noitem" class="timer-input" style="width: 60px;" min="3" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).SmeltingNoItem||15}">
            </div>
                <div class="timer-item">
                  <label for="repair-timer" style="font-weight: bold;">${g.ga}</label>
                  <p class="description">${g.ce}</p>

                  
                  <input type="number" id="repair-timer" class="timer-input" style="width: 60px;" min="3" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).Repair||10}">
                </div>
                <div class="timer-item">
                  <label for="guild-market-timer" style="font-weight: bold;">${g.ae}</label>
                  <p class="description">${g.be}</p>

                  
                  <input type="number" id="guild-market-timer" class="timer-input" style="width: 60px;" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).GuildMarket||2}">
                </div>
                <div class="timer-item">
                  <label for="auction-hold-timer" style="font-weight: bold;">${g.Xd}</label>
                  <p class="description">${g.Yd}</p>

                  
                  <input type="number" id="auction-hold-timer" class="timer-input" style="width: 60px;" min="3" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).AuctionHoldGold||5}">
                </div>
                <div class="timer-item">
                  <label for="arena-timer" style="font-weight: bold;">Arena:</label>
                  <p class="description">${g.Ud}</p>

                  
                  <input type="number" id="arena-timer" class="timer-input" style="width: 60px;" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).Arena||10}">
                </div>
                <div class="timer-item">
                  <label for="circus-turma-timer" style="font-weight: bold;">Circus Turma:</label>
                  <p class="description">${g.Zd}</p>

                  
                  <input type="number" id="circus-turma-timer" class="timer-input" style="width: 60px;" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).CircusTurma||10}">
                </div>
                <div class="timer-item">
                  <label for="training-timer" style="font-weight: bold;">${g.pe}</label>
                  <p class="description">${g.qe}</p>

                  
                  <input type="number" id="training-timer" class="timer-input" style="width: 60px;" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).Training||2}">
                </div>
                <div class="timer-item">
                  <label for="reset-expired-timer" style="font-weight: bold;">${g.de}</label>
                  <p class="description">${g.ee}</p>

                  
                  <input type="number" id="reset-expired-timer" class="timer-input" style="width: 60px;" min="3" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).ResetExpired||10}">
                </div>
                <div class="timer-item">
                <label for="store-forge-timer" style="font-weight: bold;">${g.ne}</label>
                <p class="description">${g.oe}</p>

                
                <input type="number" id="store-forge-timer" class="timer-input" style="width: 60px;" min="5" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).StoreForge||10}">
              </div>
                <div class="timer-item">
                <label for="reset-auction-timer" style="font-weight: bold;">${g.Vd}</label>
                <p class="description">${g.Wd}</p>

                
                <input type="number" id="reset-auction-timer" class="timer-input" style="width: 60px;" min="1" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).AuctionCheck||10}">
              </div> 
              <div class="timer-item">
              <label for="reset-search-timer" style="font-weight: bold;">${g.fe}</label>
              <p class="description">${g.ge}</p>

              
              <input type="number" id="reset-search-timer" class="timer-input" style="width: 60px;" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).SearchTimer||5}">
                  </div>
              <div class="timer-item">
              <label for="reset-guilddonate-timer" style="font-weight: bold;">${g.sa}</label>
              <p class="description">${g.$d}</p>

              
              <input type="number" id="reset-guilddonate-timer" class="timer-input" style="width: 60px;" placeholder="Min" value="${JSON.parse(localStorage.getItem("Timers")).GuildDonate||5}">
                  </div>
                </div>
              </div>
            </div>

                  <div class="popup-box" id="other_settings">
                    <div class="settings_tab_title">${g.Uf}</div>

                    <span class="span-new">${g.Me}:</span>
                    <span class="span-new">${g.Dc}</span>
                  
                    <div class="setting-row">
                    <label for="doKasa">${g.B}</label>
                      <label class="toggle-switch">
                      <input type="checkbox" id="doKasa">
                      <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="AuctionItemLevel2">${g.Wc}</label>
                        <div class="switch-field2">
                          <input type="number" id="minimumGoldAmount" placeholder="Amount" value="${localStorage.getItem("minimumGoldAmount")||0}">         
                        </div>
                    </div>

                    <div class="setting-row">
                    <label for="filterGM">${g.kc}</label>
                    <select id="filterGM">
                    <option value="" disabled>${g.Cd}</option>
                    <option value="pd">${g.Xc}</option>
                    <option value="p">${g.Ob}</option>
  
                    </select>
                  </div>

                  <div class="setting-row">
                    <label for="guildPackHour">${g.Ka}</label>
                    <select id="guildPackHour">
                    <option value="" disabled>${g.Ka}</option>
                    <option value="1">2 hr</option>
                    <option value="2">8 hr</option>
                    <option value="3">24 hr</option>
                    </select>
                  </div>

                <div class="setting-row">
                  <label for="KasaHoldGold">${g.M}</label>
                    <div class="switch-field3">
                      <input type="number" id="KasaHoldGold" placeholder="Amount" value="${localStorage.getItem("KasaHoldGold")||0}">       
                    </div>
                </div>

                <div class="settings_tab_title">${g.Sd}</div>
                
                <div class="setting-row">
                <label for="storeGoldinAuction">${g.B}</label>
                  <label class="toggle-switch">
                  <input type="checkbox" id="storeGoldinAuction">
                  <span class="switch"></span>
                  </label>
                </div>

                <div class="setting-row">
                <label for="storeGoldinAuctionmaxGold">${g.Kc}</label>
                  <div class="switch-field3">
                    <input type="number" id="storeGoldinAuctionmaxGold" placeholder="Amount" value="${localStorage.getItem("storeGoldinAuctionmaxGold")||0}">       
                  </div>
              </div>

              <div class="setting-row">
                <label for="storeGoldinAuctionholdGold">${g.M}</label>
                  <div class="switch-field3">
                    <input type="number" id="storeGoldinAuctionholdGold" placeholder="Amount" value="${localStorage.getItem("storeGoldinAuctionholdGold")||0}">       
                  </div>
              </div>

              <div class="setting-row">
              <label for="AuctionGoldCover">${g.ra}</label>
                <label class="toggle-switch">
                <input type="checkbox" id="AuctionGoldCover">
                <span class="switch"></span>
              </label>
            </div>

                <span class="span-new">${g.Tf}</span>

                <div class="settings_tab_title">${g.ub}</div>

                <div class="setting-row">
                ${g.vb}
                    <select id="delaySelect">
                    <option value="0">0 seconds</option>
                    <option value="1">1 second</option>
                    <option value="5">1 to 5 seconds</option>
                    <option value="10">5 to 10 seconds</option>
                    <option value="15">10 to 15 seconds</option>
                    <option value="30">15 to 30 seconds</option>
                    <option value="60">30 to 60 seconds</option>
                    <option value="120">1 to 2 minutes</option>
                    <option value="150">2 to 5 minutes</option>
                    </select>
                </div>      
                  
                <div class="settings_tab_title">${g.Bf}</div>

                <div class="setting-row">
                  <label for="storeResource">${g.B}</label>
                    <label class="toggle-switch">
                    <input type="checkbox" id="storeResource">
                    <span class="switch"></span>
                    </label>
                </div>

                <div class="settings_tab_title">${g.Xb}</div>

                <div class="setting-row">
                  <label for="HighlightUnderworldItems">${g.B}</label>
                    <label class="toggle-switch">
                    <input type="checkbox" id="HighlightUnderworldItems">
                    <span class="switch"></span>
                    </label>
                </div>
                    
                <div class="settings_tab_title">${g.re}</div>
                <div class="setting-row">

                      <div class="setting-row">
                        <label for="trainEnable">${g.B}</label>
                          <label class="toggle-switch">
                          <input type="checkbox" id="trainEnable">
                          <span class="switch"></span>
                          </label>
                      </div>

                          ${g.te}
                      <div class="stat-container">


                        <div class="stat stat-header">
                            <div>Stats</div>
                            <div>Points</div>
                            <div>Priority</div>
                        </div>

                        <div class="stat">
                          <input type="checkbox" id="Strength" class="stat-checkbox" data-skill="1" data-stat-name="Strength">
                          <label for="Strength">${g.Pa}</label>
                          <input type="number" class="stat-count" id="StrengthCount" min="0" value="${localStorage.getItem("StrengthCount")||0}">
                          <div class="priority-btn" id="StrengthPriority" data-stat="Strength" data-priority="${localStorage.getItem("StrengthPriority")||1}">Set Priority</div>
                          <input type="checkbox" id="StrengthContinue" class="stat-checkbox" data-stat="Strength" data-skill="1">
                        </div>
                      
                        <div class="stat">
                          <input type="checkbox" id="Dexterity" class="stat-checkbox" data-skill="2" data-stat-name="Dexterity">
                          <label for="Dexterity">${g.da}</label>
                          <input type="number" class="stat-count" id="DexterityCount" min="0" value="${localStorage.getItem("DexterityCount")||0}">
                          <div class="priority-btn" id="DexterityPriority" data-stat="Dexterity" data-priority="${localStorage.getItem("DexterityPriority")||1}">Set Priority</div>
                          <input type="checkbox" id="DexterityContinue" class="stat-checkbox" data-stat="Dexterity" >
                        </div>
                      
                        <div class="stat">
                          <input type="checkbox" id="Agility" class="stat-checkbox" data-skill="3" data-stat-name="Agility">
                          <label for="Agility">${g.ca}</label>
                          <input type="number" class="stat-count" id="AgilityCount" min="0" value="${localStorage.getItem("AgilityCount")||0}">
                          <div class="priority-btn" id="AgilityPriority" data-stat="Agility" data-priority="${localStorage.getItem("AgilityPriority")||1}">Set Priority</div>
                          <input type="checkbox" id="AgilityContinue" class="stat-checkbox" data-stat="Agility">
                        </div>
                      
                        <div class="stat">
                          <input type="checkbox" id="Constitution" class="stat-checkbox" data-skill="4" data-stat-name="Constitution">
                          <label for="Constitution">${g.qa}</label>
                          <input type="number" class="stat-count" id="ConstitutionCount" min="0" value="${localStorage.getItem("ConstitutionCount")||0}">
                          <div class="priority-btn" id="ConstitutionPriority" data-stat="Constitution" data-priority="${localStorage.getItem("ConstitutionPriority")||1}">Set Priority</div>
                          <input type="checkbox" id="ConstitutionContinue" class="stat-checkbox" data-stat="Constitution">
                        </div>
                      
                        <div class="stat">
                          <input type="checkbox" id="Charisma" class="stat-checkbox" data-skill="5" data-stat-name="Charisma">
                          <label for="Charisma">${g.oa}</label>
                          <input type="number" class="stat-count" id="CharismaCount" min="0" value="${localStorage.getItem("CharismaCount")||0}">
                          <div class="priority-btn" id="CharismaPriority" data-stat="Charisma" data-priority="${localStorage.getItem("CharismaPriority")||1}">Set Priority</div>
                          <input type="checkbox" id="CharismaContinue" class="stat-checkbox" data-stat="Charisma">
                        </div>
                      
                        <div class="stat">
                          <input type="checkbox" id="Intelligence" class="stat-checkbox" data-skill="6" data-stat-name="Intelligence">
                          <label for="Intelligence">${g.ea}</label>
                          <input type="number" class="stat-count" id="IntelligenceCount" min="0" value="${localStorage.getItem("IntelligenceCount")||0}">
                          <div class="priority-btn" id="IntelligencePriority" data-stat="Intelligence" data-priority="${localStorage.getItem("IntelligencePriority")||1}">Set Priority</div>
                          <input type="checkbox" id="IntelligenceContinue" class="stat-checkbox" data-stat="Intelligence">
                        </div>                                                                                                                   

                        <div class="setting-row">
                            <label for="TrainingHoldGold">${g.M}</label>
                            <input type="number" id="TrainingHoldGold" min="0" value="${localStorage.getItem("TrainingHoldGold")||0}">                         
                            <span class="span-new">${g.se}</span>        
                        </div>

                      </div>  
                    </div>
                    <div class="settings_tab_title">${g.sa}</div>
                    <span class="span-new">${g.Sb}</span>
                    <div class="setting-row">
                      <label for="GuildEnable">${g.B}</label>
                      <label class="toggle-switch">
                          <input type="checkbox" id="GuildEnable">
                          <span class="switch"></span>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="GuildDonateAmount">${g.tc}</label>
                      <input type="number" id="GuildDonateAmount" min="0" value="${localStorage.getItem("GuildDonateAmount")||0}">                         
                    </div>

                    <div class="setting-row">
                      <label for="GuildDonateMore">${g.Tb}</label>
                      <input type="number" id="GuildDonateMore" min="0" value="${localStorage.getItem("GuildDonateMore")||0}">                         
                    </div>

                    <div class="setting-row">
                      <label for="GuildDonateLess">${g.Ec}</label>
                      <input type="number" id="GuildDonateLess" min="0" value="${localStorage.getItem("GuildDonateLess")||0}">                         
                    </div>

         
                </div>


            <div class="popup-box" id="Extra">
            <div class="settings_tab_title">${g.wa}</div>

              <div class="setting-row">
                
                    <span class="span-new"> News 2.9.5 Update</span>
                    <ul>
                    <ul>Bot performance and general improvements.</ul>
                    </ul>

                    <span class="span-new">1 Day Trial Key : </span>
                    <span id="kydt"></span>
                    <br>
                    <span class="span-new">${g.dc} : </span>
                    <span id="kydtexp"></span>
                </div>
            

            <div class="settings_tab_title">${g.vc}</div>
            
            <div class="setting-row">
              <button class="awesome-button" id="exportBtn">${g.ec}</button>
              <input type="file" id="importBtn" style="display: none;">
              <button class="awesome-button" id="importFileBtn">${g.wc}</button>
              <p id="importStatus"></p>
              <p>
            </div>

            <div class="settings_tab_title">${g.Gb}</div>

            <div class="setting-row">
            <span style="color: class="span-new">${g.Hb}</span>
              <br></br>
              <label for="autologinenable">${g.B}</label>
                <label class="toggle-switch">
                <input type="checkbox" id="autologinenable">
                <span class="switch"></span>
              </label>
            </div>

            <div class="settings_tab_title">${g.dd}</div>
                <div class="setting-row">
                <label for="pauseBotEnable">${g.B}</label>
                <label class="toggle-switch">
                <input type="checkbox" id="pauseBotEnable">
                <span class="switch"></span>
                </label>
            </div>
            
            <div class="setting-row">
                <label for="pauseBot">${g.ed}</label>
                <div class="switch-field3"> 
                <input type="number" id="pauseBot" placeholder="Minutes" value="${Math.round((localStorage.getItem("pauseBot.timeOut")-Date.now())/6E4)||0}">
                </div>
                </label>
            </div>
    
            <div class="settings_tab_title">${g.Nc}</div>
                <div class="setting-row">
                    <span class="span-new">${g.Oc}</span>
                    <textarea id="messageInput" rows="4" cols="50" placeholder="${g.Pc}" style="width: 350px; height: 50px;"></textarea>
                    <button class="awesome-button" id="messageButton">${g.Rc}</button>
                    <button class="awesome-button"id="showPlayersButton">${g.Sc}</button>
                    <button class="awesome-button" id="selectAllButton">${g.Qc}</button>
                    <button class="awesome-button" id="unselectAllButton">${g.Tc}</button>
                    <div id="messageStatus"></div>
                    <div id="playerList" style="display: none;"></div>
                    <div id="loadingContainer"></div>
                    <br>
                    ${g.Rb}
                </div>        
            </div>

                  <div class="popup-box" id="Market">
                  <div class="settings_tab_title">Market Buy [BETA]</div>
        
                    <span class="span-new">${g.Fc}</span>

                    <div class="setting-row">
                      <label for="enableMarketSearch">${g.Yb}
                        <label class="toggle-switch">
                        <input type="checkbox" id="enableMarketSearch">
                        <span class="switch"></span>
                      </label>
                      </label>
                    </div>

                    <div class="setting-row">
                    <label>${g.Gc}</label>
                    <span style="font-weight: normal">${g.Hc}</span>
                    <input type="text" id="MarketSearchInterval" placeholder="Market Search Interval - Minutes" value="${localStorage.getItem("MarketSearchInterval")||""}">

                    </div>



                    <div class="setting-row">
                    <div class="setting-row">
                        <label for="marketOnlyFood">${g.ad}
                        <label class="toggle-switch">
                        <input type="checkbox" id="marketOnlyFood">
                        <span class="switch"></span>
                        </label>
                        </label>
                    </div>
                      <span class="span-new">${g.bd}</span>
                      
                      <label for="MaxTotalGold">${g.Ba} : </label><input type="number" id="MarketMaxFoodPrice" placeholder="${g.Ba}" value="${localStorage.getItem("MarketMaxFoodPrice")||""}">
                    
                      <label for="MaxPerFood">${g.Aa} : </label><input type="number" id="MarketMaxPerFoodPrice" placeholder="${g.Aa}" value="${localStorage.getItem("MarketMaxPerFoodPrice")||""}">

                      <label for="MinItemLevel">${g.O} : </label><input type="number" id="MarketMinItemLevel" placeholder="${g.O}" value="${localStorage.getItem("MarketMinItemLevel")||""}">
                    

                    </div>

                    <div class="setting-row">
                    <label>${g.zc}</label>
                      <input type="text" id="itemToBuy" placeholder="${g.xc}">
                    </div>

                    <div class="setting-row">
                      <input type="number" id="maxPrice" placeholder="${g.Ic}">
                    </div>

                    <div class="setting-row">
                    
                      <label>${g.Ac}</label>
                      <select id="marketItemType">
                        <option value="WEAPON">${g.pb}</option>
                        <option value="SHIELD">${g.mb}</option>
                        <option value="CHEST">${g.bb}</option>
                        <option value="HELMET">${g.hb}</option>
                        <option value="GLOVES">${g.gb}</option>
                        <option value="SHOES">${g.cb}</option>
                        <option value="RINGS">${g.kb}</option>
                        <option value="AMULETS">${g.ab}</option>
                        <option value="USABLES">${g.eb}</option></option>
                        <option value="BOOSTS">${g.Ze}</option></option>
                        <option value="UPGRADES">${g.ob}</option></option>
                        <option value="RECIPES">${g.jb}</option></option>
                        <option value="MERCENARY">${g.ib}</option></option>
                        <option value="FORGINGGOODS">${g.fb}</option></option>
                        <option value="btools">${g.nb}</option></option>
                        <option value="SCROLLS">${g.lb}</option></option>
                      </select>

                      <label>${g.yc}</label>
                      <select id="rarity">
                        <option value="White">${g.qb}</option>
                        <option value="Green">${g.G}</option>
                        <option value="Blue">${g.F}</option>
                        <option value="Purple">${g.H}</option>
                        <option value="Orange">${g.Z}</option>
                        <option value="Red">${g.ja}</option>
                      </select>

                      <label>${g.Nb}</label>
                      <select id="itemsoulbound">
                        <option value="BuySoulbound">${g.Ee}</option>
                        <option value="DontBuySoulbound">${g.Zc}</option>
                      </select>
                    </div>

                    <div class="setting-row">
                      <button class="awesome-button" id="addItemBtn">${g.N}</button>
                    </div>

                    <div class="setting-row">
                      <label for="itemList">${g.Cc}</label>
                      <select id="itemList" size="10"></select>
                      <button class="awesome-button" id="removeItemBtn">${g.sd}</button>
                    </div>

                    <div class="setting-row">
                      <label for="usePacks">${g.Bc}
                      <label class="toggle-switch">
                        <input type="checkbox" id="usePacks">
                        <span class="switch"></span>
                        </label>
                      </label>
                    </div>

                    <div class="setting-row">
                      <label for="MarketboughtItems">${g.Mb}</label>
                      <select id="MarketboughtItems" size="5"></select>
                      <button class="awesome-button" id="MarketremoveItemBtn">${g.Qb}</button>
                    </div>

                    <div class="setting-row">
                    <label for="MarketHoldGold">${g.M}</label>
                    <input type="number" id="MarketHoldGold" min="0" value="${localStorage.getItem("MarketHoldGold")||0}">
                    </div>
                  
                    </div>   
                  </div>
                </div>
              </div>
            </div>

              `;document.getElementById("header_game").insertBefore(G,document.getElementById("header_game").children[0]);G=document.createElement("div");H=document.getElementById("wrapper_game").clientHeight;G.setAttribute("id","overlayBack");G.setAttribute("style",`height: ${H}px; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 198;`);G.addEventListener("click",Wb);document.getElementsByTagName("body")[0].appendChild(G);(function(){var C=localStorage.getItem("lastActiveTab");C?(C=
document.querySelector(`.popup-tab[data-target="${C}"]`))&&b(C):(C=document.querySelector(".popup-tab"))&&b(C)})();G=localStorage.getItem("license_remaining");null!==G&&(G=(new Date(G)).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),document.getElementById("kydtexp").textContent=G,G=localStorage.getItem("trlky_lcr"),null!==G&&(document.getElementById("kydt").textContent=G));(function(){const C=document.getElementById("expeditionLocation"),W=document.getElementById("dungeonLocation");
var Q=document.querySelectorAll("#submenu2 a");const ba=[];for(let ja=1;ja<Q.length;ja++)Q[ja].classList.contains("glow")||ba.push(Q[ja]);ba.forEach(ja=>{const ra=document.createElement("option");ra.innerText=ja.innerText;ra.value=(new URLSearchParams(ja.href)).get("loc");C.appendChild(ra);W.appendChild(ra.cloneNode(!0))});if(Q=localStorage.getItem("expeditionLocation"))C.value=Q;if(Q=localStorage.getItem("dungeonLocation"))W.value=Q})();document.querySelectorAll(".popup-tab").forEach(C=>{C.addEventListener("click",
()=>{b(C);localStorage.setItem("lastActiveTab",C.dataset.target)})});const U=document.querySelectorAll(".popup-tab"),P=document.querySelectorAll(".popup-box"),va=document.querySelector(`#${document.querySelector(".popup-tab.active").dataset.target}`);va.classList.add("active");P.forEach(C=>{C!==va&&(C.style.display="none")});U.forEach(C=>{C.addEventListener("click",()=>{U.forEach(W=>W.classList.remove("active"));C.classList.add("active");P.forEach(W=>{W.style.display="none"});document.querySelector(`#${C.dataset.target}`).style.display=
"block"})});$("#languageGB").click(function(){c("EN")});$("#languagePL").click(function(){c("PL")});$("#languageES").click(function(){c("ES")});$("#languageTR").click(function(){c("TR")});$("#languageFR").click(function(){c("FR")});$("#languageHG").click(function(){c("HG")});$("#languageBR").click(function(){c("BR")});$("#do_expedition_true").click(function(){d(!0)});$("#do_expedition_false").click(function(){d(!1)});$("#set_monster_id_0").click(function(){e("0")});$("#set_monster_id_1").click(function(){e("1")});
$("#set_monster_id_2").click(function(){e("2")});$("#set_monster_id_3").click(function(){e("3")});$("#do_dungeon_true").click(function(){h(!0)});$("#do_dungeon_false").click(function(){h(!1)});(G=localStorage.getItem("dungeonDifficulty"))&&m(G);$("#set_dungeon_difficulty_normal").click(function(){k("normal")});$("#set_dungeon_difficulty_advanced").click(function(){k("advanced")});$("#do_arena_true").click(function(){n(!0)});$("#do_arena_false").click(function(){n(!1)});$("#do_circus_true").click(function(){l(!0)});
$("#do_circus_false").click(function(){l(!1)});$("#do_quests_true").click(function(){q(!0)});$("#do_quests_false").click(function(){q(!1)});$("#do_combat_quests").click(function(){t("combat")});$("#do_arena_quests").click(function(){t("arena")});$("#do_circus_quests").click(function(){t("circus")});$("#do_expedition_quests").click(function(){t("expedition")});$("#do_dungeon_quests").click(function(){t("dungeon")});$("#do_items_quests").click(function(){t("items")});$("#do_event_expedition_true").click(function(){r(!0)});
$("#do_event_expedition_false").click(function(){r(!1)});$(document).ready(function(){function C(x){var E=x.split(". "),S="<ol>";E.forEach(function(N,ia){""!==N.trim()&&(ia!==E.length-1||N.endsWith(".")||(N+="."),S+="<li>"+N+"</li>")});return S+="</ol>"}function W(x){const E={"guild-market-timer":"GuildMarket","smelting-timer":"Smelting","smelting-timer-nogold":"SmeltingNoGold","smelting-timer-noitem":"SmeltingNoItem","repair-timer":"Repair","auction-hold-timer":"AuctionHoldGold","arena-timer":"Arena",
"circus-turma-timer":"CircusTurma","training-timer":"Training","reset-expired-timer":"ResetExpired","store-forge-timer":"StoreForge","reset-auction-timer":"AuctionCheck","reset-search-timer":"SearchTimer","reset-guilddonate-timer":"GuildDonate"};return E[x]?E[x]:x.replace(/-([a-z])/g,function(S){return S[1].toUpperCase()}).replace("-timer","")}function Q(){var x="Strength Dexterity Agility Constitution Charisma Intelligence".split(" ");const E=[];for(const S of x){x=document.getElementById(`${S}Count`);
document.getElementById(`${S}Priority`);x=x?x.value:0;let N=eb[S];null===N&&(N="None");E.push({stat:S,count:x,priority:N,qh:document.getElementById(`${S}`).checked})}localStorage.setItem("statSettings",JSON.stringify(E))}function ba(x,E){JSON.parse(localStorage.getItem(E)||"[]").forEach(S=>ja(S,x,E))}function ja(x,E,S){const N=document.createElement("div");N.className="keyword-item";var ia=document.createElement("span");ia.textContent=x;N.appendChild(ia);ia=document.createElement("span");ia.className=
"remove-keyword";ia.textContent="X";ia.addEventListener("click",function(){N.remove();let na=JSON.parse(localStorage.getItem(S)||"[]");const oa=na.indexOf(x);-1<oa&&(na.splice(oa,1),localStorage.setItem(S,JSON.stringify(na)))});N.appendChild(ia);E.appendChild(N)}function ra(x,E){const S=JSON.parse(localStorage.getItem(E)||"[]");S.push(x);localStorage.setItem(E,JSON.stringify(S))}function ka(x,E,S){const N=document.createElement("li");N.textContent=x;N.style.padding="10px";N.style.border="1px solid #ccc";
N.style.borderColor="#cea429";N.style.borderRadius="5px";N.style.marginBottom="5px";N.style.display="flex";N.style.justifyContent="space-between";const ia=document.createElement("button");ia.textContent="X";ia.style.textAlign="center";ia.addEventListener("click",()=>{N.remove();const na=(JSON.parse(localStorage.getItem(S))||[]).filter(oa=>!(oa[0]===x[0]&&oa[1]===x[1]));localStorage.setItem(S,JSON.stringify(na))});N.appendChild(ia);document.getElementById(E).appendChild(N)}function sb(){Sa=Sa.map(x=>
{x.Qg=!1;x.$g=null;return x})}function bb(){document.getElementById("startSearchButton").innerText="Start Search";ac=!1}function L(){const x=document.getElementById("clothCount");var E=parseInt(x.value,10);isNaN(E)&&(E=0);--E;0>=E&&(E=0);return x.value=E}function T(){const x=document.getElementById("itemsList");x.innerHTML="";Sa.forEach((E,S)=>{const N=document.createElement("div");N.style.display="flex";N.style.justifyContent="space-between";N.style.alignItems="center";N.style.marginBottom="5px";
const ia=document.createElement("span");ia.style.flex="1";ia.innerText=`${E.name} (${E.qualityName}) Item Level : (${E.Bh}`;E=document.createElement("button");E.innerText="X";E.onclick=()=>{Sa.splice(S,1);T();ha()};N.appendChild(ia);N.appendChild(E);x.appendChild(N)})}function ha(){localStorage.setItem("itemsToSearch",JSON.stringify(Sa))}function ta(x,E){const S=document.getElementById("foundItemsContainer");S.style.display="flex";S.style.justifyContent="center";S.style.alignItems="center";S.style.flexDirection=
"column";const N=document.createElement("div");N.style.width="80%";N.style.marginTop="20px";N.style.padding="20px";N.style.borderRadius="10px";N.style.boxShadow="0px 8px 15px rgba(0, 0, 0, 0.1)";N.style.display="flex";N.style.flexDirection="column";N.style.justifyContent="center";N.style.alignItems="center";N.style.transition="all 0.3s ease-in-out";const ia=document.createElement("span"),na=document.createElement("span");switch(Number(x.$g.getAttribute("data-quality"))){case 0:na.style.color="green";
break;case 1:na.style.color="blue";break;case 2:na.style.color="purple";break;case 3:na.style.color="orange";break;case 4:na.style.color="red";break;default:na.style.color="#333"}na.innerText=x.name;na.style.fontWeight="bold";ia.appendChild(na);ia.style.fontSize="18px";ia.style.marginBottom="15px";const oa=document.createElement("div");oa.style.marginTop="10px";oa.style.padding="15px";oa.style.borderRadius="10px";oa.style.display="flex";oa.style.justifyContent="center";oa.style.alignItems="center";
oa.style.transition="transform 0.3s ease-in-out";oa.onmouseover=()=>{oa.style.transform="scale(1.3)"};oa.onmouseout=()=>{oa.style.transform="scale(1)"};x=x.$g.cloneNode(!0);x.style.position="static";x.style.transform="none";x.style.margin="0";oa.appendChild(x);x=document.createElement("a");x.href=E;x.style.textDecoration="none";x.style.cursor="pointer";x.onmouseover=()=>{ia.style.textDecoration="underline"};x.onmouseout=()=>{ia.style.textDecoration="none"};x.appendChild(ia);x.appendChild(oa);N.appendChild(x);
S.appendChild(N);bc.style.display="block"}async function la(){yb=!1;if(!ac)return!1;var x=await Ie();let E=!1;var S=Sa.filter(N=>!N.Qg);for(let N of Sa)for(const ia of x){S=ia.querySelectorAll("#shop .ui-draggable");for(const na of S){S=JSON.parse(na.getAttribute("data-tooltip").replace(/&quot;/g,'"'))[0][0][0].split(" ")[0];const oa=na.getAttribute("data-quality"),qg=na.getAttribute("data-level");if(Number(qg)>=Number(N.Bh)&&S.toLowerCase().includes(N.name.toLowerCase())&&(oa>=N.quality||!oa&&"0"==
N.quality)){N.$g=na.cloneNode(!0);ta(N,ia.wi||ia.querySelector("a.shopLink").href);E=N.Qg=!0;break}}if(N.Qg)break}x=L();mb();if(0>=x)return bb(),!1;S=Sa.filter(N=>!N.Qg);if(0===S.length||E&&!yb)return bb(),!0;await Ma();return la()}async function Ma(){var x=new URL(window.location.href);const E=x.origin;x=x.searchParams.get("sh")||"";await fetch(`${E}/game/index.php?mod=inventory&sub=2&subsub=0&sh=${x}`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({bestechen:"New goods"})})}
function mb(){var x=parseInt(document.getElementById("clothCount").getAttribute("data-total"),10);const E=parseInt(document.getElementById("clothCount").value,10);x=(x-E)/x*100;document.getElementById("progressBarInner").style.width=`${isNaN(x)?100:x}%`}function Yb(){const x=[...zc].filter(E=>E.checked).map(E=>E.value);localStorage.setItem("equipmentSelectionSmelt",JSON.stringify(x))}function rg(){const x=[...Ac].filter(E=>E.checked).map(E=>E.value);localStorage.setItem("equipmentSelection",JSON.stringify(x))}
function Je(){document.getElementById("mercenarySearchOptions").style.display=cc.checked?"block":"none"}function Bc(){const x=document.getElementById("resetExpiredItems").checked,E=document.getElementById("resetDays").value,S=Array.from(document.querySelectorAll('#itemsToReset input[type="checkbox"]:checked')).map(N=>N.value);localStorage.setItem("resetExpiredItems",x);localStorage.setItem("resetDays",E);localStorage.setItem("itemsToReset",JSON.stringify(S))}function Cc(){localStorage.setItem("marketItems",
JSON.stringify(fb));Dc.innerHTML="";Ke.innerHTML="";for(var x of zb){var E=document.createElement("option");E.textContent=x;Ke.appendChild(E)}for(x=0;x<fb.length;x++)E=document.createElement("option"),E.value=x,E.text=fb[x].Ah+" (Rarity: "+fb[x].Tg+", Max price: "+fb[x].dh+" "+fb[x].Wg+")",Dc.appendChild(E)}function Le(){const x=Ab.checked;sg.style.display=x?"block":"none";tg.style.display=x?"block":"none"}function Bb(x){const E=document.getElementById(x);E.checked="true"===localStorage.getItem(x);
E.addEventListener("change",()=>{localStorage.setItem(x,E.checked)})}const ug=document.getElementById("doExpedition"),vg=document.getElementById("doDungeon"),wg=document.getElementById("doArena"),xg=document.getElementById("doCircus"),yg=document.getElementById("doQuests"),zg=document.getElementById("doEventExpedition"),Ag=document.getElementById("activateAutoBid"),Bg=document.getElementById("doKasa"),dc=document.querySelector("#healPercentage"),Ec=document.querySelector("#HealClothToggle"),Fc=document.querySelector("#HealRubyToggle"),
Gc=document.querySelector("#storeResource"),Hc=document.querySelector("#HighlightUnderworldItems");dc.value=localStorage.getItem("healPercentage")||25;Ec.checked="true"===localStorage.getItem("HealClothToggle")||!1;Fc.checked="true"===localStorage.getItem("HealRubyToggle")||!1;Gc.checked="true"===localStorage.getItem("storeResource")||!1;Hc.checked="true"===localStorage.getItem("HighlightUnderworldItems")||!1;const Me=document.getElementById("minimumGoldAmount");Me.addEventListener("change",()=>{localStorage.setItem("minimumGoldAmount",
Me.value)});var Ic=document.getElementById("tabA"),Jc=document.getElementById("tabB"),Ne=document.getElementById("contentA"),Oe=document.getElementById("contentB"),Kc=document.getElementById("tabACircus"),Lc=document.getElementById("tabBCircus"),Pe=document.getElementById("contentACircus"),Qe=document.getElementById("contentBCircus");Ic.addEventListener("click",function(){Ne.style.display="block";Oe.style.display="none";Ic.classList.add("active");Jc.classList.remove("active")});Jc.addEventListener("click",
function(){Oe.style.display="block";Ne.style.display="none";Jc.classList.add("active");Ic.classList.remove("active")});Kc.addEventListener("click",function(){Pe.style.display="block";Qe.style.display="none";Kc.classList.add("active");Lc.classList.remove("active")});Lc.addEventListener("click",function(){Qe.style.display="block";Pe.style.display="none";Lc.classList.add("active");Kc.classList.remove("active")});const Cg=C(g.Wa),Dg=C(g.Ga);document.querySelector(".instructions .span-new").innerHTML=
Cg;document.querySelector(".instructionsReset .span-new").innerHTML=Dg;const Mc=document.getElementById("announcement"),Nc=localStorage.getItem("latestAnnouncement");Nc&&""!==Nc?(Mc.style.display="block",Mc.innerHTML=Nc):Mc.style.display="none";document.querySelectorAll(".timer-input").forEach(x=>{x.addEventListener("change",function(){var E=parseInt(this.min,10);let S=parseInt(this.value,10);S<E&&(this.value=S=E);E=JSON.parse(localStorage.getItem("Timers"))||{};const N=W(this.id);E[N]=S;localStorage.setItem("Timers",
JSON.stringify(E))})});const eb={Pa:null,da:null,ca:null,qa:null,oa:null,ea:null};(function(){var x=JSON.parse(localStorage.getItem("statSettings"))||[];for(const {stat:E,count:S,priority:N,qh:ia}of x)document.getElementById(`${E}Count`)&&(document.getElementById(`${E}Count`).value=S),document.getElementById(`${E}Priority`)&&(x=N||"None",document.getElementById(`${E}Priority`).dataset.priority=x,document.getElementById(`${E}Priority`).textContent=`Priority: ${x}`),document.getElementById(`${E}`)&&
(document.getElementById(`${E}`).checked=ia||!1);x=JSON.parse(localStorage.getItem("statSettings"))||[];for(const {stat:E,priority:S}of x)eb[E]="None"===S?null:S})();const Re=document.querySelectorAll(".priority-btn");Re.forEach(x=>{x.addEventListener("click",function(E){const S=E.target.getAttribute("data-stat");let N=(eb[S]||0)+1;6<N&&(N=1);for(const [ia,na]of Object.entries(eb))if(na===N){eb[ia]=null;const oa=document.getElementById(`${ia}Priority`);oa.innerText="Set Priority";oa.setAttribute("data-priority",
"None")}eb[S]=N;E.target.innerText=`Priority: ${N}`;E.target.setAttribute("data-priority",N);Re.forEach(ia=>{const na=ia.getAttribute("data-stat");ia.innerText=null!==eb[na]?`Priority: ${eb[na]}`:"Set Priority"});Q()})});Array.from(document.getElementsByClassName("stat-count")).forEach(x=>{x.addEventListener("change",()=>{Q()})});document.getElementById("clear_next_event_expedition_time").addEventListener("click",function(){localStorage.setItem("eventPoints_",16);alert("Done!")});let Ta=localStorage.getItem("workbenchItem");
Ta=Ta?JSON.parse(Ta):{};Ta.selectedItem&&Ta.selectedItem.item?document.getElementById("currentWorkbenchItem").textContent=Ta.selectedItem.item.name:document.getElementById("currentWorkbenchItem").textContent="No item";document.getElementById("clear_repair").addEventListener("click",function(){Ta.selectedItem&&(Ta.selectedItem={},Object.assign(Ta.selectedItem,{selectedItem:!1}),localStorage.removeItem("workbenchItem"),localStorage.removeItem("activeItems"),document.getElementById("currentWorkbenchItem").textContent=
"No item")});document.getElementById("ClearAttackList").addEventListener("click",function(){localStorage.setItem("autoAttackList",JSON.stringify([]));localStorage.setItem("autoAttackServerList",JSON.stringify([]));localStorage.setItem("playerTimeouts",JSON.stringify([]));window.location.reload()});document.getElementById("ClearAvoidList").addEventListener("click",function(){localStorage.setItem("avoidAttackList",JSON.stringify([]));window.location.reload()});document.getElementById("ClearCircusAttackList").addEventListener("click",
function(){localStorage.setItem("autoAttackCircusList",JSON.stringify([]));localStorage.setItem("autoAttackCircusServerList",JSON.stringify([]));localStorage.setItem("circusPlayerTimeouts",JSON.stringify([]));window.location.reload()});document.getElementById("ClearCircusAvoidList").addEventListener("click",function(){localStorage.setItem("avoidAttackCircusList",JSON.stringify([]));window.location.reload()});let Oc=document.getElementById("skipTimeQuests");Oc.checked="true"===localStorage.getItem("skipTimeQuests");
Oc.addEventListener("change",()=>{localStorage.setItem("skipTimeQuests",Oc.checked)});let Pc=document.getElementById("skipTimeCircusQuests");Pc.checked="true"===localStorage.getItem("skipTimeCircusQuests");Pc.addEventListener("change",()=>{localStorage.setItem("skipTimeCircusQuests",Pc.checked)});let Qc=document.getElementById("skipTimeOtherQuests");Qc.checked="true"===localStorage.getItem("skipTimeOtherQuests");Qc.addEventListener("change",()=>{localStorage.setItem("skipTimeOtherQuests",Qc.checked)});
let Rc=document.getElementById("acceptnotfilter");Rc.checked="true"===localStorage.getItem("acceptnotfilter");Rc.addEventListener("change",()=>{localStorage.setItem("acceptnotfilter",Rc.checked)});const Se=document.getElementById("keywordInput"),Eg=document.getElementById("addKeywordBtn"),Te=document.getElementById("keywordList");ba(Te,"questKeywords");Eg.addEventListener("click",function(){const x=Se.value.trim();""!==x&&(ja(x,Te,"questKeywords"),ra(x,"questKeywords"),Se.value="")});const Ue=document.getElementById("keywordAcceptInput"),
Fg=document.getElementById("addKeywordAcceptBtn"),Ve=document.getElementById("keywordAcceptList");ba(Ve,"acceptQuestKeywords");Fg.addEventListener("click",function(){const x=Ue.value.trim();""!==x&&(ja(x,Ve,"acceptQuestKeywords"),ra(x,"acceptQuestKeywords"),Ue.value="")});let Sc=document.getElementById("renewEvent");Sc.checked="true"===localStorage.getItem("renewEvent");Sc.addEventListener("change",()=>{localStorage.setItem("renewEvent",Sc.checked)});let Tc=document.getElementById("throwDice");Tc.checked=
"true"===localStorage.getItem("throwDice");Tc.addEventListener("change",()=>{localStorage.setItem("throwDice",Tc.checked)});let Uc=document.getElementById("useCostume");Uc.checked="true"===localStorage.getItem("useCostume");Uc.addEventListener("change",()=>{localStorage.setItem("useCostume",Uc.checked)});let Cb=document.getElementById("wearUnderworld"),We=document.getElementById("costumeUnderworldWrapper");Cb.checked="true"===localStorage.getItem("wearUnderworld");We.style.display=Cb.checked?"block":
"none";Cb.addEventListener("change",()=>{localStorage.setItem("wearUnderworld",Cb.checked);We.style.display=Cb.checked?"block":"none"});document.getElementById("costumeUnderworld").addEventListener("change",function(){localStorage.setItem("costumeUnderworld",this.value)});const Gg=document.getElementById("costumeUnderworld"),Xe=localStorage.getItem("costumeUnderworld");null!==Xe&&(Gg.value=Xe);const Hg=document.getElementById("costumeBasic"),Ye=localStorage.getItem("costumeBasic");document.getElementById("costumeBasic").addEventListener("change",
function(){localStorage.setItem("costumeBasic",this.value)});null!==Ye&&(Hg.value=Ye);document.getElementById("costumeDungeon").addEventListener("change",function(){localStorage.setItem("costumeDungeon",this.value)});const Ig=document.getElementById("costumeDungeon"),Ze=localStorage.getItem("costumeDungeon");null!==Ze&&(Ig.value=Ze);const Jg=document.getElementById("search_input"),Kg=document.getElementById("search_reset"),Lg=document.getElementById("search_button");let ec=JSON.parse(localStorage.getItem("searchTerms")||
"[]");ec.forEach(x=>{ka(x,"search_list","searchTerms")});Lg.addEventListener("click",function(){const x=Jg.value.trim();""===x||ec.includes(x)||(ec.push(x),localStorage.setItem("searchTerms",JSON.stringify(ec)),ka(x,"search_list","searchTerms"))});const Vc=document.querySelector(".equipment-search-selection");Vc.addEventListener("change",()=>{const x=Array.from(Vc.querySelectorAll(".equipment-search-option:checked")).map(E=>E.value);localStorage.setItem("SearchTypes",JSON.stringify(x))});JSON.parse(localStorage.getItem("SearchTypes")||
"[]").forEach(x=>{if(x=Vc.querySelector(`.equipment-search-option[value="${x}"]`))x.checked=!0});let Sa=JSON.parse(localStorage.getItem("itemsToSearch"))||[];document.getElementById("addItemButton").addEventListener("click",function(){const x=document.getElementById("newItem").value,E=document.getElementById("itemQuality").value,S=document.getElementById("newItemLevel").value;Sa.push({name:x,quality:E,Bh:S,qualityName:Mg[E]});T();ha()});document.getElementById("startSearchButton").addEventListener("click",
async function(){ac=!0;yb=!1;bc.style.display="none";document.getElementById("clothCount").setAttribute("data-total",document.getElementById("clothCount").value);document.getElementById("startSearchButton").innerText="Searching...";await la()});document.getElementById("stopSearchButton").addEventListener("click",bb);const bc=document.getElementById("skipSearchButton");bc.addEventListener("click",async function(){const x=document.getElementById("foundItemsContainer");for(;x.firstChild;)x.removeChild(x.firstChild);
sb();ac=yb=!0;bc.style.display="none";await Ma();await la();yb=!1});let ac=!0,yb=!1;const Mg={0:"Green",1:"Blue",2:"Purple",3:"Orange",4:"Red"};T();const zc=document.querySelectorAll(".equipment-option-smelt");zc.forEach(x=>{x.addEventListener("change",Yb)});(JSON.parse(localStorage.getItem("equipmentSelectionSmelt"))||[]).forEach(x=>{const E=[...zc].find(S=>S.value===x);E&&(E.checked=!0)});const Ac=document.querySelectorAll(".equipment-option");Ac.forEach(x=>{x.addEventListener("change",rg)});(JSON.parse(localStorage.getItem("equipmentSelection"))||
[]).forEach(x=>{const E=[...Ac].find(S=>S.value===x);E&&(E.checked=!0)});Kg.addEventListener("click",function(){localStorage.setItem("AuctionSearch.timeOut",0);localStorage.setItem("ShopSearch.timeOut",0);location.reload()});let Wc=document.getElementById("trainEnable");Wc.checked="true"===localStorage.getItem("trainEnable");Wc.addEventListener("change",()=>{localStorage.setItem("trainEnable",Wc.checked)});let Xc=document.getElementById("dungeonAB");Xc.checked="true"===localStorage.getItem("dungeonAB");
Xc.addEventListener("change",()=>{localStorage.setItem("dungeonAB",Xc.checked)});let Yc=document.getElementById("dungeonFocusQuest");Yc.checked="true"===localStorage.getItem("dungeonFocusQuest");Yc.addEventListener("change",()=>{localStorage.setItem("dungeonFocusQuest",Yc.checked)});(function(){const x=document.getElementById("autologinenable"),E="true"===localStorage.getItem("AutoLogin");x.checked=E;Ub(E);x.addEventListener("change",function(){const S=this.checked;localStorage.setItem("AutoLogin",
S);Ub(S)})})();let Zc=document.getElementById("arenaAttackGM");Zc.checked="true"===localStorage.getItem("arenaAttackGM");Zc.addEventListener("change",()=>{localStorage.setItem("arenaAttackGM",Zc.checked)});let $c=document.getElementById("circusAttackGM");$c.checked="true"===localStorage.getItem("circusAttackGM");$c.addEventListener("change",()=>{localStorage.setItem("circusAttackGM",$c.checked)});let ad=document.getElementById("auctionmercenaryenable");ad.checked="true"===localStorage.getItem("auctionmercenaryenable");
ad.addEventListener("change",()=>{localStorage.setItem("auctionmercenaryenable",ad.checked)});let bd=document.getElementById("auctiongladiatorenable");bd.checked="true"===localStorage.getItem("auctiongladiatorenable");bd.addEventListener("change",()=>{localStorage.setItem("auctiongladiatorenable",bd.checked)});let cd=document.getElementById("bidFood");cd.checked="true"===localStorage.getItem("bidFood");cd.addEventListener("change",()=>{localStorage.setItem("bidFood",cd.checked)});let dd=document.getElementById("ignorePS");
dd.checked="true"===localStorage.getItem("ignorePS");dd.addEventListener("change",()=>{localStorage.setItem("ignorePS",dd.checked)});let ed=document.getElementById("smeltIgnorePS");ed.checked="true"===localStorage.getItem("smeltIgnorePS");ed.addEventListener("change",()=>{localStorage.setItem("smeltIgnorePS",ed.checked)});let fd=document.getElementById("auctionminlevel");fd.value=localStorage.getItem("auctionminlevel")||"";fd.addEventListener("input",()=>{localStorage.setItem("auctionminlevel",fd.value)});
let gd=document.getElementById("AuctionCover");gd.checked="true"===localStorage.getItem("AuctionCover");gd.addEventListener("change",()=>{localStorage.setItem("AuctionCover",gd.checked)});let hd=document.getElementById("AuctionGoldCover");hd.checked="true"===localStorage.getItem("AuctionGoldCover");hd.addEventListener("change",()=>{localStorage.setItem("AuctionGoldCover",hd.checked)});let jd=document.getElementById("maximumBid");jd.value=localStorage.getItem("maximumBid")||"";jd.addEventListener("input",
()=>{localStorage.setItem("maximumBid",jd.value)});let kd=document.getElementById("activateAuction2");kd.checked="true"===localStorage.getItem("activateAuction2");kd.addEventListener("change",()=>{localStorage.setItem("activateAuction2",kd.checked)});let ld=document.getElementById("AuctionItemLevel2");ld.value=localStorage.getItem("AuctionItemLevel2")||"";ld.addEventListener("input",()=>{localStorage.setItem("AuctionItemLevel2",ld.value)});let cc=document.getElementById("enableMercenarySearch"),md=
document.getElementById("minDexterity"),nd=document.getElementById("minAgility"),od=document.getElementById("minIntelligence");cc.checked="true"===localStorage.getItem("enableMercenarySearch");md.value=localStorage.getItem("minDexterity")||0;nd.value=localStorage.getItem("minAgility")||0;od.value=localStorage.getItem("minIntelligence")||0;Je();cc.addEventListener("change",()=>{localStorage.setItem("enableMercenarySearch",cc.checked);Je()});md.addEventListener("input",()=>{localStorage.setItem("minDexterity",
md.value)});nd.addEventListener("input",()=>{localStorage.setItem("minAgility",nd.value)});od.addEventListener("input",()=>{localStorage.setItem("minIntelligence",od.value)});const pd=document.getElementById("SearchQuality"),$e=localStorage.getItem("SearchQuality");$e&&(pd.value=$e);pd.addEventListener("change",()=>{localStorage.setItem("SearchQuality",pd.value)});const qd=document.getElementById("HealPickBag"),af=localStorage.getItem("HealPickBag");af&&(qd.value=af);qd.addEventListener("change",
()=>{localStorage.setItem("HealPickBag",qd.value)});const rd=document.getElementById("FoodAmount"),bf=localStorage.getItem("FoodAmount");bf&&(rd.value=bf);rd.addEventListener("change",()=>{localStorage.setItem("FoodAmount",rd.value)});const sd=document.getElementById("smeltTab"),cf=localStorage.getItem("smeltTab");cf&&(sd.value=cf);sd.addEventListener("change",()=>{localStorage.setItem("smeltTab",sd.value)});const td=document.getElementById("repairMaxQuality");let fc=localStorage.getItem("repairMaxQuality");
fc||(fc="1",localStorage.setItem("repairMaxQuality",fc));td.value=fc;td.addEventListener("change",()=>{localStorage.setItem("repairMaxQuality",td.value)});var gc=document.getElementById("repairPercentage");(function(){var x=localStorage.getItem("repairPercentage");if(null!==x)for(var E=0;E<gc.options.length;E++)if(gc.options[E].text.replace("%","")===x){gc.selectedIndex=E;break}})();gc.addEventListener("change",function(){var x=this.options[this.selectedIndex].text.replace("%","");localStorage.setItem("repairPercentage",
x)});const ud=document.getElementById("bidStatus"),df=localStorage.getItem("bidStatus");df&&(ud.value=df);ud.addEventListener("change",()=>{localStorage.setItem("bidStatus",ud.value)});document.getElementById("resetExpiredItems").addEventListener("change",Bc);document.getElementById("resetDays").addEventListener("change",Bc);document.getElementById("itemsToReset").addEventListener("change",Bc);(function(){const x="true"===localStorage.getItem("resetExpiredItems"),E=localStorage.getItem("resetDays"),
S=JSON.parse(localStorage.getItem("itemsToReset")||"[]");document.getElementById("resetExpiredItems").checked=x;document.getElementById("resetDays").value=E;S.forEach(N=>{if(N=document.getElementById(N))N.checked=!0})})();const vd=document.getElementById("guildPackHour"),ef=localStorage.getItem("guildPackHour");ef&&(vd.value=ef);vd.addEventListener("change",()=>{localStorage.setItem("guildPackHour",vd.value)});const wd=document.getElementById("filterGM"),ff=localStorage.getItem("filterGM");ff&&(wd.value=
ff);wd.addEventListener("change",()=>{localStorage.setItem("filterGM",wd.value)});const nb=document.getElementById("delaySelect"),gf=localStorage.getItem("DELAY");if(gf)for(let x=0;x<nb.options.length;x++)if(nb.options[x].text===gf){nb.value=nb.options[x].value;break}nb.addEventListener("change",()=>{localStorage.setItem("DELAY",nb.options[nb.selectedIndex].text)});const xd=document.getElementById("questSpeed"),hf=localStorage.getItem("questSpeed");hf&&(xd.value=hf);xd.addEventListener("change",()=>
{localStorage.setItem("questSpeed",xd.value)});let jf=document.getElementById("itemToBuy"),kf=document.getElementById("rarity"),lf=document.getElementById("marketItemType"),mf=document.getElementById("itemsoulbound"),nf=document.getElementById("maxPrice"),Ng=document.getElementById("addItemBtn"),Og=document.getElementById("removeItemBtn"),Pg=document.getElementById("MarketremoveItemBtn"),Dc=document.getElementById("itemList"),Ke=document.getElementById("MarketboughtItems"),zb=localStorage.getItem("MarketboughtItems");
zb?zb=JSON.parse(zb):zb=[];const of=document.getElementById("MarketSearchInterval");of.addEventListener("change",()=>{localStorage.setItem("MarketSearchInterval",of.value)});document.getElementById("MarketSearchInterval").addEventListener("input",function(){3>parseInt(this.value)&&(this.value=3)});const pf=document.getElementById("MarketMaxPerFoodPrice");pf.addEventListener("change",()=>{localStorage.setItem("MarketMaxPerFoodPrice",pf.value)});const qf=document.getElementById("MarketMaxFoodPrice");
qf.addEventListener("change",()=>{localStorage.setItem("MarketMaxFoodPrice",qf.value)});const rf=document.getElementById("MarketMinItemLevel");rf.addEventListener("change",()=>{localStorage.setItem("MarketMinItemLevel",rf.value)});let yd=document.getElementById("marketOnlyFood");yd.checked="true"===localStorage.getItem("marketOnlyFood");yd.addEventListener("change",()=>{localStorage.setItem("marketOnlyFood",yd.checked)});let fb=JSON.parse(localStorage.getItem("marketItems"))||[];Ng.onclick=function(){fb.push({Ah:jf.value||
1,Tg:kf.value||4,dh:nf.value||4,itemType:lf.value||4,Wg:mf.value||2});jf.value="";kf.value="White";nf.value="";lf.value="WEAPONS";mf.value="DontBuySoulbound";Cc()};Og.onclick=function(){fb.splice(Dc.value,1);Cc()};Pg.onclick=function(){document.getElementById("MarketboughtItems").innerHTML="";localStorage.setItem("MarketboughtItems",JSON.stringify([]))};Cc();let zd=document.getElementById("enableMarketSearch");zd.checked="true"===localStorage.getItem("enableMarketSearch");zd.addEventListener("change",
()=>{localStorage.setItem("enableMarketSearch",zd.checked)});let Ad=document.getElementById("usePacks");Ad.checked="true"===localStorage.getItem("usePacks");Ad.addEventListener("change",()=>{localStorage.setItem("usePacks",Ad.checked)});const Bd=document.getElementById("scoreRange"),sf=localStorage.getItem("scoreRange");sf&&(Bd.value=sf);Bd.addEventListener("change",()=>{localStorage.setItem("scoreRange",Bd.value)});const Cd=document.getElementById("scoreRangeCircus"),tf=localStorage.getItem("scoreRangeCircus");
tf&&(Cd.value=tf);Cd.addEventListener("change",()=>{localStorage.setItem("scoreRangeCircus",Cd.value)});let Dd=document.getElementById("scoreboardattackenable");Dd.checked="true"===localStorage.getItem("scoreboardattackenable");Dd.addEventListener("change",()=>{localStorage.setItem("scoreboardattackenable",Dd.checked)});let Ed=document.getElementById("scoreboardcircusenable");Ed.checked="true"===localStorage.getItem("scoreboardcircusenable");Ed.addEventListener("change",()=>{localStorage.setItem("scoreboardcircusenable",
Ed.checked)});let Fd=document.getElementById("leagueattackenable");Fd.checked="true"===localStorage.getItem("leagueattackenable");Fd.addEventListener("change",()=>{localStorage.setItem("leagueattackenable",Fd.checked)});let Db=document.getElementById("leaguerandom");Db.checked="true"===localStorage.getItem("leaguerandom");Db.addEventListener("change",()=>{localStorage.setItem("leaguerandom",Db.checked);Db.checked&&(Eb.checked=!1,localStorage.setItem("leaguelowtohigh",!1))});let Eb=document.getElementById("leaguelowtohigh");
Eb.checked="true"===localStorage.getItem("leaguelowtohigh");Eb.addEventListener("change",()=>{localStorage.setItem("leaguelowtohigh",Eb.checked);Eb.checked&&(Db.checked=!1,localStorage.setItem("leaguerandom",!1))});let Gd=document.getElementById("leaguecircusattackenable");Gd.checked="true"===localStorage.getItem("leaguecircusattackenable");Gd.addEventListener("change",()=>{localStorage.setItem("leaguecircusattackenable",Gd.checked)});let Fb=document.getElementById("leaguecircusrandom");Fb.checked=
"true"===localStorage.getItem("leaguecircusrandom");Fb.addEventListener("change",()=>{localStorage.setItem("leaguecircusrandom",Fb.checked);Fb.checked&&(Gb.checked=!1,localStorage.setItem("leaguecircuslowtohigh",!1))});let Gb=document.getElementById("leaguecircuslowtohigh");Gb.checked="true"===localStorage.getItem("leaguecircuslowtohigh");Gb.addEventListener("change",()=>{localStorage.setItem("leaguecircuslowtohigh",Gb.checked);Gb.checked&&(Fb.checked=!1,localStorage.setItem("leaguecircusrandom",
!1))});let Hd=document.getElementById("autoAddArena");Hd.checked="true"===localStorage.getItem("autoAddArena");Hd.addEventListener("change",()=>{localStorage.setItem("autoAddArena",Hd.checked)});let Id=document.getElementById("autoAvoidArena");Id.checked="true"===localStorage.getItem("autoAvoidArena");Id.addEventListener("change",()=>{localStorage.setItem("autoAvoidArena",Id.checked)});const uf=document.getElementById("autoAddArenaAmount");uf.addEventListener("change",()=>{localStorage.setItem("autoAddArenaAmount",
uf.value)});let Jd=document.getElementById("autoAddCircus");Jd.checked="true"===localStorage.getItem("autoAddCircus");Jd.addEventListener("change",()=>{localStorage.setItem("autoAddCircus",Jd.checked)});let Kd=document.getElementById("autoAvoidCircus");Kd.checked="true"===localStorage.getItem("autoAvoidCircus");Kd.addEventListener("change",()=>{localStorage.setItem("autoAvoidCircus",Kd.checked)});const vf=document.getElementById("autoAddCircusAmount");vf.addEventListener("change",()=>{localStorage.setItem("autoAddCircusAmount",
vf.value)});let Ld=document.getElementById("UnderWorldUseRuby");Ld.checked="true"===localStorage.getItem("UnderWorldUseRuby");Ld.addEventListener("change",()=>{localStorage.setItem("UnderWorldUseRuby",Ld.checked)});let Md=document.getElementById("UnderworldUseMobi");Md.checked="true"===localStorage.getItem("UnderworldUseMobi");Md.addEventListener("change",()=>{localStorage.setItem("UnderworldUseMobi",Md.checked)});let Nd=document.getElementById("exitUnderworld");Nd.checked="true"===localStorage.getItem("exitUnderworld");
Nd.addEventListener("change",()=>{localStorage.setItem("exitUnderworld",Nd.checked)});let hc=document.getElementById("autoEnterHell");hc.checked="true"===localStorage.getItem("autoEnterHell");hc.checked||localStorage.setItem("farmEnable","false");hc.addEventListener("change",()=>{localStorage.setItem("autoEnterHell",hc.checked)});let Od=document.getElementById("pauseBotEnable");Od.checked="true"===localStorage.getItem("pauseBotEnable");Od.addEventListener("change",()=>{localStorage.setItem("pauseBotEnable",
Od.checked)});const wf=document.getElementById("pauseBot");wf.addEventListener("change",()=>{Z("pauseBot",wf.value)});let Pd=document.getElementById("storeGoldinAuction");Pd.checked="true"===localStorage.getItem("storeGoldinAuction");Pd.addEventListener("change",()=>{localStorage.setItem("storeGoldinAuction",Pd.checked)});const xf=document.getElementById("storeGoldinAuctionmaxGold");xf.addEventListener("change",()=>{localStorage.setItem("storeGoldinAuctionmaxGold",xf.value)});const yf=document.getElementById("storeGoldinAuctionholdGold");
yf.addEventListener("change",()=>{localStorage.setItem("storeGoldinAuctionholdGold",yf.value)});const zf=document.getElementById("TrainingHoldGold");zf.addEventListener("change",()=>{localStorage.setItem("TrainingHoldGold",zf.value)});const Af=document.getElementById("MarketHoldGold");Af.addEventListener("change",()=>{localStorage.setItem("MarketHoldGold",Af.value)});const Bf=document.getElementById("KasaHoldGold");Bf.addEventListener("change",()=>{localStorage.setItem("KasaHoldGold",Bf.value)});
let Qd=document.getElementById("GuildEnable");Qd.checked="true"===localStorage.getItem("GuildEnable");Qd.addEventListener("change",()=>{localStorage.setItem("GuildEnable",Qd.checked)});const Cf=document.getElementById("GuildDonateAmount");Cf.addEventListener("change",()=>{localStorage.setItem("GuildDonateAmount",Cf.value)});const Df=document.getElementById("GuildDonateMore");Df.addEventListener("change",()=>{localStorage.setItem("GuildDonateMore",Df.value)});const Ef=document.getElementById("GuildDonateLess");
Ef.addEventListener("change",()=>{localStorage.setItem("GuildDonateLess",Ef.value)});document.getElementById("hellDifficulty").addEventListener("change",function(){localStorage.setItem("hellDifficulty",this.value)});const Qg=document.getElementById("hellDifficulty"),Ff=localStorage.getItem("hellDifficulty");null!==Ff&&(Qg.value=Ff);let Rd=document.getElementById("useVillaMedici");Rd.checked="true"===localStorage.getItem("useVillaMedici");Rd.addEventListener("change",()=>{localStorage.setItem("useVillaMedici",
Rd.checked)});let Sd=document.getElementById("useHealingPotion");Sd.checked="true"===localStorage.getItem("useHealingPotion");Sd.addEventListener("change",()=>{localStorage.setItem("useHealingPotion",Sd.checked)});const Td=document.getElementById("repairMercenary");Td.checked="true"===localStorage.getItem("repairMercenary");Td.addEventListener("change",()=>{localStorage.setItem("repairMercenary",Td.checked)});const Ud=document.getElementById("repairGladiator");Ud.checked="true"===localStorage.getItem("repairGladiator");
Ud.addEventListener("change",()=>{localStorage.setItem("repairGladiator",Ud.checked)});let Vd=document.getElementById("activateRepair");Vd.checked="true"===localStorage.getItem("activateRepair");Vd.addEventListener("change",()=>{localStorage.setItem("activateRepair",Vd.checked)});const Rg=document.querySelectorAll(".inventory-item"),ic=JSON.parse(localStorage.getItem("activeItems"))||{};Rg.forEach(x=>{ic[x.id]&&x.classList.add("active");x.addEventListener("click",function(E){E.preventDefault();this.classList.contains("active")?
(this.classList.remove("active"),ic[this.id]=!1):(this.classList.add("active"),ic[this.id]=!0);localStorage.setItem("activeItems",JSON.stringify(ic))})});const Gf=document.getElementById("expeditionLocation");Gf.addEventListener("change",()=>{localStorage.setItem("expeditionLocation",Gf.value)});const Hf=document.getElementById("dungeonLocation");Hf.addEventListener("change",()=>{localStorage.setItem("dungeonLocation",Hf.value)});const jc=document.getElementById("autoCollectBonuses");jc.checked="true"===
localStorage.getItem("autoCollectBonuses");document.getElementById("enemySelection").style.display=jc.checked?"none":"block";jc.addEventListener("change",()=>{localStorage.setItem("autoCollectBonuses",jc.checked)});const Wd=document.getElementById("skipBossToggle");Wd.checked="true"===localStorage.getItem("skipBoss");Wd.addEventListener("change",()=>{localStorage.setItem("skipBoss",Wd.checked)});const Xd=document.getElementById("resetIfLoseToggle");Xd.checked="true"===localStorage.getItem("resetIfLose");
Xd.addEventListener("change",()=>{localStorage.setItem("resetIfLose",Xd.checked)});const Yd=document.getElementById("activateSmelt");Yd.checked="true"===localStorage.getItem("EnableSmelt");Yd.addEventListener("change",()=>{localStorage.setItem("EnableSmelt",Yd.checked)});const Ab=document.getElementById("farmEnable"),sg=document.getElementById("farmLocation").closest(".setting-row"),tg=document.getElementById("farmEnemy").closest(".setting-row"),Sg="true"===localStorage.getItem("farmEnable"),If=localStorage.getItem("farmLocation"),
Jf=localStorage.getItem("farmEnemy");Ab.checked=Sg;If&&(document.getElementById("farmLocation").value=If);Jf&&(document.getElementById("farmEnemy").value=Jf);Le();Ab.addEventListener("change",function(){localStorage.setItem("farmEnable",Ab.checked);Ab.checked&&localStorage.setItem("autoEnterHell","true");Le()});document.getElementById("farmLocation").addEventListener("change",function(){localStorage.setItem("farmLocation",this.value)});document.getElementById("farmEnemy").addEventListener("change",
function(){localStorage.setItem("farmEnemy",this.value)});const Zd=document.getElementById("doHeal");Zd.checked="true"===localStorage.getItem("HealEnabled");Zd.addEventListener("change",()=>{localStorage.setItem("HealEnabled",Zd.checked)});const $d=document.getElementById("healShopToggle");$d.checked="true"===localStorage.getItem("HealShop");$d.addEventListener("change",()=>{localStorage.setItem("HealShop",$d.checked)});const ae=document.getElementById("healfrompackage");ae.checked="true"===localStorage.getItem("HealPackage");
ae.addEventListener("change",()=>{localStorage.setItem("HealPackage",ae.checked)});const be=document.getElementById("healcervisia");be.checked="true"===localStorage.getItem("HealCervisia");be.addEventListener("change",()=>{localStorage.setItem("HealCervisia",be.checked)});const ce=document.getElementById("OilEnable");ce.checked="true"===localStorage.getItem("OilEnable");ce.addEventListener("change",()=>{localStorage.setItem("OilEnable",ce.checked)});Bb("smeltRed");Bb("smeltOrange");Bb("smeltPurple");
Bb("smeltBlue");Bb("smeltGreen");const Hb=document.getElementById("smeltAnything"),Ib=document.getElementById("smelteverything2");Ib.checked="true"===localStorage.getItem("smelteverything2");Ib.addEventListener("change",()=>{localStorage.setItem("smelteverything2",Ib.checked);Ib.checked&&(Hb.checked=!1,localStorage.setItem("smeltAnything",!1))});Hb.checked="true"===localStorage.getItem("smeltAnything");Hb.addEventListener("change",()=>{localStorage.setItem("smeltAnything",Hb.checked);Hb.checked&&
(Ib.checked=!1,localStorage.setItem("smelteverything2",!1))});document.getElementById("enemySelect").addEventListener("change",function(){localStorage.setItem("selectedEnemy",this.value)});const Tg=document.getElementById("enemySelect"),Kf=localStorage.getItem("selectedEnemy");null!==Kf&&(Tg.value=Kf);document.getElementById("autoCollectBonuses").addEventListener("change",function(){document.getElementById("enemySelection").style.display=this.checked?"none":"block"});ug.addEventListener("change",
function(){this.checked?(d(!0),Ga=!0):(d(!1),Ga=!1);localStorage.setItem("doExpedition",Ga);B()});vg.addEventListener("change",function(){this.checked?(h(!0),Ea=!0):(h(!1),Ea=!1);localStorage.setItem("doDungeon",Ea);B()});wg.addEventListener("change",function(){this.checked?(n(!0),Fa=!0):(n(!1),Fa=!1);localStorage.setItem("doArena",Fa);B()});document.getElementById("addAutoAttack").addEventListener("click",()=>{const x=document.getElementById("autoAttackInput").value.trim();x&&v(x,"autoAttackList",
"autoAttackList")});document.getElementById("addAvoidAttack").addEventListener("click",()=>{const x=document.getElementById("avoidAttackInput").value.trim();x&&v(x,"avoidAttackList","avoidAttackList")});document.getElementById("addAutoCircusAttack").addEventListener("click",()=>{const x=document.getElementById("autoAttackCircusInput").value.trim();x&&v(x,"autoAttackCircusList","autoAttackCircusList")});document.getElementById("addAvoidCircusAttack").addEventListener("click",()=>{const x=document.getElementById("avoidAttackCircusInput").value.trim();
x&&v(x,"avoidAttackCircusList","avoidAttackCircusList")});w();xg.addEventListener("change",function(){this.checked?(l(!0),Ba=!0):(l(!1),Ba=!1);localStorage.setItem("doCircus",Ba);B()});yg.addEventListener("change",function(){this.checked?(q(!0),Na=!0):(q(!1),Na=!1);localStorage.setItem("doQuests",Na);B()});Bg.addEventListener("change",function(){this.checked?(db=!0,localStorage.setItem("doKasa",!0),db=!0):(db=!1,localStorage.setItem("doKasa",!1),db=!1);localStorage.setItem("doKasa",db);B()});Ag.addEventListener("change",
function(){this.checked?(Ra=!0,localStorage.setItem("AutoAuction",!0),Ra=!0):(Ra=!1,localStorage.setItem("AutoAuction",!1),Ra=!1);localStorage.setItem("AutoAuction",Ra);B()});zg.addEventListener("change",function(){this.checked?(r(!0),Ca=!0):(r(!1),Ca=!1);localStorage.setItem("doEventExpedition",Ca);B()});dc.addEventListener("input",()=>{let x=parseInt(dc.value);1>x?x=1:99<x&&(x=99);dc.value=x;localStorage.setItem("healPercentage",x)});hellEnterHP.addEventListener("input",()=>{localStorage.setItem("hellEnterHP",
hellEnterHP.value)});Ec.addEventListener("change",()=>{localStorage.setItem("HealClothToggle",Ec.checked)});Fc.addEventListener("change",()=>{localStorage.setItem("HealRubyToggle",Fc.checked)});Gc.addEventListener("change",()=>{localStorage.setItem("storeResource",Gc.checked)});Hc.addEventListener("change",()=>{localStorage.setItem("HighlightUnderworldItems",Hc.checked)});const de=document.querySelectorAll(".stat-checkbox"),Ug=localStorage.getItem("selectedStat");for(const x of de)x.checked=x.id===
Ug;for(const x of de)x.addEventListener("change",()=>{if(x.checked){for(const E of de)E!==x&&(E.checked=!1);localStorage.setItem("selectedStat",x.id);localStorage.setItem("statID",x.getAttribute("data-skill"))}else localStorage.removeItem("selectedStat")})});$("#set_event_monster_id_0").click(function(){z("0")});$("#set_event_monster_id_1").click(function(){z("1")});$("#set_event_monster_id_2").click(function(){z("2")});$("#set_event_monster_id_3").click(function(){z("3")});B()}async function Vg(){if("true"===
localStorage.getItem("storeResource")){var b=new URL(window.location.href),c=b.origin;b=b.searchParams.get("sh")||"";const d=Date.now();c=`${c}/game/ajax.php?mod=forge&submod=storageIn`;const e=new FormData;e.append("inventory","1");e.append("packages","1");e.append("sell","1");e.append("a",d);e.append("sh",b);try{(await fetch(c,{method:"POST",body:e})).ok?y("Forge Resources stored to horreum successfully."):window.location.reload()}catch(h){window.location.reload()}b=JSON.parse(localStorage.getItem("Timers"));
Z("storeForgeResources",b.StoreForge||60)}}async function Wg(){var b=new URL(window.location.href),c=b.origin,d=b.searchParams.get("sh")||"";let e=JSON.parse(localStorage.getItem("statSettings"))||[];b=JSON.parse(localStorage.getItem("Timers"));const h=e.every(r=>1>parseInt(r.count));e.every(r=>"None"===r.priority);localStorage.getItem("selectedStat");const k={Strength:1,Dexterity:2,Agility:3,Constitution:4,Charisma:5,Intelligence:6};e.sort((r,u)=>"None"===r.priority?1:"None"===u.priority?-1:parseInt(r.priority)-
parseInt(u.priority));for(const {stat:r,count:u,priority:v}of e){if(1>u||"None"===v)continue;const w=k[r];var m=await (await fetch(`${c}/game/index.php?mod=training&sh=${d}`)).text();m=(new DOMParser).parseFromString(m,"text/html").querySelectorAll("#training_box .training_button");var n=void 0;0==m.length&&(Z("Training",b.Training||2),location.reload());for(var l of m)if(m=l.getAttribute("href").match(/skillToTrain=(\d+)/)[1],Number(m)===w&&(m=l.closest(".training_link").querySelector(".training_costs"))){n=
parseInt(m.textContent.trim().replace(".",""));break}m=parseInt(localStorage.getItem("TrainingHoldGold"))||0;if(V.gold>=n+m){fetch(`${c}/game/index.php?mod=training&submod=train&skillToTrain=${w}&sh=${d}`);for(var q of e)if(q.stat===r){--q.count;0>q.count&&(q.count=0);break}localStorage.setItem("statSettings",JSON.stringify(e));y(`Trained ${r} for ${n} gold`);Z("Training",b.Training||2);location.reload();return}}if(h&&(n=new URL(window.location.href),c=n.origin,n=n.searchParams.get("sh")||"",l=localStorage.getItem("selectedStat"),
q=localStorage.getItem("statID"),l)){d=await (await fetch(`${c}/game/index.php?mod=training&sh=${n}`)).text();d=(new DOMParser).parseFromString(d,"text/html").querySelectorAll("#training_box .training_button");let r;for(var t of d)if(t.getAttribute("href").match(/skillToTrain=(\d+)/)[1]===q&&(d=t.closest(".training_link").querySelector(".training_costs"))){r=parseInt(d.textContent.trim().replace(".",""));break}t=parseInt(localStorage.getItem("TrainingHoldGold"))||0;V.gold>=r+t&&(await fetch(`${c}/game/index.php?mod=training&submod=train&skillToTrain=${q}&sh=${n}`),
y(`Trained ${l} for ${r} gold`),Z("Training",b.Training||2),location.reload())}}function Xg(){const b=JSON.parse(localStorage.getItem("statSettings"));for(let c=0;c<b.length;c++)if("0"!==b[c].count||b[c].qh)return!0;return!1}function Yg(){var b=new URL(window.location.href),c=localStorage.getItem("scoreboardattackenable"),d=localStorage.getItem("scoreboardcircusenable"),e=document.querySelector('input[type="submit"][value="Fermer"][id="linkcancelnotification"]'),h=document.querySelector('input[type="submit"][value="Cancel"][id="linkcancelnotification"]');
window.location.href.includes("/index.php?mod=reports")&&(e&&e.click(),h&&h.click());if(b.href.includes("submod=showCombatReport")&&b.href.includes("&t=1"))(c=document.getElementById("reportHeader"))&&(c.classList.contains("reportWin")||"true"!==sessionStorage.getItem("autoGoActive")?localStorage.setItem("loose","false"):localStorage.setItem("loose","true"));else if(b.href.includes("submod=showCombatReport")){let m=document.querySelector("p > a + img");h=document.querySelector("#defenderAvatar11 .playername_achievement");
null===h&&(h=document.querySelector("#defenderAvatar11 .playername.ellipsis "));(e=document.getElementById("reportHeader"))&&!e.classList.contains("reportWin")&&(localStorage.setItem("nextQuestTime.timeOut",0),localStorage.setItem("nextQuestTime",0));e=0;if(h&&(h=h.innerText.trim(),!h.includes("#"))){try{var k=m.previousSibling.nodeValue.trim();k=k.split(" ").pop();k=k.replace(".","");k=k.replace(",",".");e=parseFloat(k)}catch(n){}b.href.includes("&t=2")?(d=document.getElementById("reportHeader").classList.contains("reportWin"),
b=JSON.parse(localStorage.getItem("tempOpponentDetails")),k=De.split("-")[0].slice(1),"true"!==localStorage.getItem("autoAvoidArena")||d||gb("avoidAttackList",h),"true"===localStorage.getItem("autoAddArena")&&Number(e)>=Number(localStorage.getItem("autoAddArenaAmount"))&&b&&b.serverId&&(k===b.serverId?(gb("autoAttackList",b.playerName),localStorage.removeItem("tempOpponentDetails")):"true"===c&&h!=b.playerName?gb("autoAttackList",h):k!==b.serverId&&gb("autoAttackServerList",b))):b.href.includes("&t=3")&&
(c=document.getElementById("reportHeader").classList.contains("reportWin"),b=JSON.parse(localStorage.getItem("tempOpponentDetails")),k=De.split("-")[0].slice(1),"true"!==localStorage.getItem("autoAvoidCircus")||c||gb("avoidAttackCircusList",h),"true"===localStorage.getItem("autoAddCircus")&&e>=Number(localStorage.getItem("autoAddCircusAmount"))&&b&&b.serverId&&(k===b.serverId?(gb("autoAttackCircusList",b.playerName),localStorage.removeItem("tempOpponentDetails")):"true"===d&&h!=b.playerName?gb("autoAttackCircusList",
h):k!==b.serverId&&gb("autoAttackCircusServerList",b)))}}}function gb(b,c){let d=JSON.parse(localStorage.getItem(b))||[];if("object"===typeof c&&null!==c){let e=c.playerName;d.some(h=>h.playerName===e&&h.serverId===c.serverId)||d.push(c)}else"string"===typeof c&&(d.includes(c)||d.push(c));localStorage.setItem(b,JSON.stringify(d))}async function Lf(b){var c=new URL(window.location.href),d=c.origin,e=c.searchParams;c=localStorage.getItem("AuctionItemLevel2")||"";const h=e.get("itemType")||"",k=localStorage.getItem("SearchQuality")||
"";e=e.get("sh")||"";d=new URL(`${d}/game/index.php?mod=auction&qry=&itemLevel=${c}&itemType=${h}&itemQuality=${k}&sh=${e}`);d.searchParams.set("mod","auction");d.searchParams.set("itemLevel",c);d.searchParams.set("itemType",h);d.searchParams.set("itemQuality",k);d.searchParams.set("sh",e);b&&d.searchParams.set("ttype",b);b=await (await fetch(d.href)).text();return(new DOMParser).parseFromString(b,"text/html")}async function Ie(){var b=new URL(window.location.href),c=b.origin;b=b.searchParams.get("sh")||
"";c=[new URL(`${c}/game/index.php?mod=inventory&sub=1&subsub=0&sh=${b}`),new URL(`${c}/game/index.php?mod=inventory&sub=1&subsub=1&sh=${b}`),new URL(`${c}/game/index.php?mod=inventory&sub=2&subsub=0&sh=${b}`),new URL(`${c}/game/index.php?mod=inventory&sub=2&subsub=1&sh=${b}`),new URL(`${c}/game/index.php?mod=inventory&sub=3&subsub=0&sh=${b}`),new URL(`${c}/game/index.php?mod=inventory&sub=3&subsub=1&sh=${b}`),new URL(`${c}/game/index.php?mod=inventory&sub=4&subsub=0&sh=${b}`),new URL(`${c}/game/index.php?mod=inventory&sub=4&subsub=1&sh=${b}`),
new URL(`${c}/game/index.php?mod=inventory&sub=5&subsub=0&sh=${b}`),new URL(`${c}/game/index.php?mod=inventory&sub=5&subsub=1&sh=${b}`)];const d=async e=>{var h=await (await fetch(e.href)).text();h=(new DOMParser).parseFromString(h,"text/html");h.wi=e.href;return h};return await Promise.all(c.map(e=>d(e)))}function ee(b){return JSON.parse(b.replace(/&quot;/g,'"'))[0][0][0]}function Ua(){(function(b){const c=setInterval(()=>{const d=document.getElementById("mainmenu");d&&(clearInterval(c),b(d))},500)})(b=>
{if(!document.querySelector(".customButtonm")){var c=document.createElement("button");c.className="customButtonm";c.innerHTML='\n            <style>\n            .customButtonm {\n                vertical-align: middle;\n                width: 179px;\n                height: 50px;\n                background-image: linear-gradient(135deg, #f29b20 0%, #b18026 100%);\n                border: 2px solid #000;\n                color: white;\n                text-align: center;\n                text-decoration: none;\n                border-radius: 5px;\n                display: inline-block;\n                font-size: 16px;\n                margin: 4px auto;\n                cursor: pointer;\n                box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -1px 1px rgba(0, 0, 0, 0.3);\n                padding: 18px 34px;\n                transition-duration: 0.4s;\n            }\n        \n            .customButtonm span {\n                top: 50%;\n                position: relative;\n                transform: translateY(-50%);\n                display: block;\n                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n            }\n            </style>\n\n            <span class="span-new">License expired or Server Error. Check Discord</span>\n\n        ';
b.insertBefore(c,b.children[0]);bg(45E3)}});return!1}async function Zg(b,c,d){function e(h){const k=[];for(let m=0;m<h.length;m+=2)k.push(parseInt(h.substr(m,2),16));return new Uint8Array(k)}try{if(!d)return!1;const [h,k]=d.split(":"),m=e(h),n=e(k);if(b!==await Ia())return!1;const l=await window.crypto.subtle.importKey(String.fromCharCode(114,97,119),e("46d9ef519c1474cf8699ba24ab2a726a"),{name:String.fromCharCode(65,69,83)+"-CBC"},!1,[String.fromCharCode(100,101,99,114,121,112,116)]),q=await window.crypto.subtle.decrypt({name:String.fromCharCode(65,
69,83)+"-CBC",iv:m},l,n),t=(new TextDecoder).decode(new Uint8Array(q)),r=new Date(t);r.setHours(0,0,0,0);if(!0!==c)return!1;const u=new Date,v=new Date(u.setMonth(u.getMonth()+13));return r>v||t<u?!1:!0}catch{throw Ua(),Error("supportDev");}}function kc(b){return 36E5*Number(b.split(":")[0])+6E4*Number(b.split(":")[1])+1E3*Number(b.split(":")[2])}function $g(){function b(){hb?alert("A repair process is already running."):(jQuery(".gladbot-worbench-button").addClass("disabled"),d.v(),d.Ug=[],d.queue=
0,jQuery(document.body).addClass("workbench-cursor"),jQuery(document.body).on("contextmenu",function(e){e.preventDefault();jQuery(document.body).removeClass("workbench-cursor");jQuery(document.body).off("contextmenu")}),jQuery("#inv .ui-draggable, #char .ui-draggable").mouseup(e=>{let h=e.target;e=h.className.match(/item-i-(\d+)-\d+/)[1];var k=document.querySelector(".charmercsel.active").getAttribute("onclick").toString().match(/doll=(\d+)/);let m=d.freeSlots.shift()["forge_slots.slot"],n=k[1];k=
{item:{type:e,name:kb(h),quality:Pa(h),slot:m,container:h.getAttribute("data-container-number"),doll:n},spot:{bag:h.getAttribute("data-container-number"),x:h.getAttribute("data-position-x"),y:h.getAttribute("data-position-y")}};localStorage.setItem("workbench_itemList1",JSON.stringify(k));jQuery(h).parents("#char").length?setTimeout(()=>{hb?alert("A repair process is already running."):(d.Mh(h),d.Sg(h,0,n),hb=!0)},1E3):(d.queue++,d.fh(h),d.Nh(e))}))}function c(e,h,k){h=jQuery("<button>").html(h).addClass(k);
jQuery(e).append(h);return h}const d={async start(){let {itemList1:e,itemList2:h,Ih:k,Jh:m}=pa,n=pa.selectedItem;n?this.v(()=>{switch(n.status){case "toWorkbench":d.ng(n.iid);break;case "toFillGoods":d.Ya(n.slot);break;case "toPackage":d.Mg(n.slot);break;case "toBag":d.We();break;case "toInv":d.Ig()}}):k&&0<e.length?"mod=overview&doll=1"!=ue?cg("mod=overview&doll=1"):this.v(()=>{0<d.tb&&this.Lg(pa.itemList1)}):m&&0<h.length&&("mod=overview&doll=2"!=ue?cg("mod=overview&doll=2"):this.v(()=>{0<d.tb&&
this.Lg(pa.itemList2)}))},v(e=!1){jQuery.post(D({}),{mod:"forge",submod:"getWorkbenchPreview",mode:"workbench",a:(new Date).getTime(),sh:O("sh")},h=>{d.slots=JSON.parse(h).slots;d.tb=0;d.freeSlots=[];for(let k of d.slots)"closed"==k["forge_slots.state"]&&(d.tb++,d.freeSlots.push(k));e&&e()})},Lg(e){let h=e.shift();Rb((k,m)=>{jQuery.post(D({mod:"inventory",submod:"move",from:h.container,fromX:1,fromY:1,to:m,toX:k.x+1,toY:k.y+1,amount:1,doll:h.doll}),{a:(new Date).getTime(),sh:O("sh")},n=>{let l={item:h,
iid:JSON.parse(n).to.data.itemId,status:"toWorkbench",spot:k,bag:m};localStorage.setItem("workbench_selectedItem",JSON.stringify(l));this.ng(JSON.parse(n).to.data.itemId)})})},async Sg(e,h=0,k){var m=[512,513,514,515];if(h>=m.length)console.log("No empty spot found in any bag.");else{m=m[h];var n=document.getElementById("inv");if(n=se(n))try{const q=await jQuery.post(D({mod:"inventory",submod:"move",from:e.getAttribute("data-container-number"),fromX:1,fromY:1,to:m,toX:n.x+1,toY:n.y+1,amount:1,doll:k}),
{a:(new Date).getTime(),sh:O("sh")}),t=JSON.parse(q);if(t.error)this.Sg(e,h+1,k);else{var l={item:e,iid:t.to.data.itemId,status:"toWorkbench",spot:n,bag:m};localStorage.setItem("workbench_selectedItem",JSON.stringify(l));localStorage.setItem("workbench_itemBag",JSON.stringify(l.bag));this.ng(t.to.data.itemId)}}catch(q){}else this.Sg(e,h+1)}},async ng(e){Mf();y("Item moved to workbench.");let h=5;for(let k of d.slots){"closed"==k["forge_slots.state"]&&(h=k["forge_slots.slot"]);break}jQuery.post(D({}),
{mod:"forge",submod:"getWorkbenchPreview",mode:"workbench",slot:h,iid:e,amount:1,a:(new Date).getTime(),sh:O("sh")},k=>{eg().gold>JSON.parse(k).slots[h].formula.rent[2]&&jQuery.post(D({}),{mod:"forge",submod:"rent",mode:"workbench",slot:h,rent:2,item:e,a:(new Date).getTime(),sh:O("sh")},()=>{localStorage.setItem("workbench_selectedItem",JSON.stringify({slot:h,status:"toFillGoods"}));d.Ya(h)})})},Ya(e,h=-1,k=!0){y("Picking up material",h);jQuery.post(D({}),{mod:"forge",submod:"storageToWarehouse",
mode:"workbench",slot:e,quality:h,a:(new Date).getTime(),sh:O("sh")},()=>{h<Number(localStorage.getItem("repairMaxQuality"))?d.Ya(e,++h,k):jQuery.post(D({}),{mod:"forge",submod:"start",mode:"workbench",slot:e,a:(new Date).getTime(),sh:O("sh")},()=>{k?(localStorage.setItem("workbench_selectedItem",JSON.stringify({status:"toPackage"})),d.v(()=>{d.Mg(e)})):(d.queue--,0==d.queue&&window.location.reload())})})},Mg(e){let h=1E3*d.slots[e].formula.duration||1E4;y("Waiting for repairing:",h);this.v(()=>{setTimeout(()=>
{jQuery.post(D({}),{mod:"forge",submod:"lootbox",mode:"workbench",slot:e,a:(new Date).getTime(),sh:O("sh")},k=>{if("document.location.href=document.location.href;"==k)return window.location.reload();localStorage.setItem("workbench_selectedItem",JSON.stringify({status:"toBag"}));d.We()})},h)})},async We(e=1){var h=JSON.parse(localStorage.getItem("workbench_itemList1"));const k=localStorage.getItem("workbench_itemBag");let {item:m,spot:n}=h;h=!1;var l=new URL(window.location.href),q=l.origin;l=l.searchParams.get("sh")||
"";q=new URL(`${q}/game/index.php?mod=packages&qry=&f=${m.type}&page=${e}&sh=${l}`);q.searchParams.set("mod","packages");q.searchParams.set("f",m.type);q.searchParams.set("page",e);q.searchParams.set("sh",l);q=await (await fetch(q.href)).text();q=(new DOMParser).parseFromString(q,"text/html");var t=q.querySelector(".ui-draggable");l=ib(t).split("-")[0];Pa(t);t=kb(t);m.name==t&&m.type==l&&(h=!0,jQuery.post(D({mod:"inventory",submod:"move",from:q.querySelector("[data-container-number]").getAttribute("data-container-number"),
fromX:1,fromY:1,to:k,toX:n.x,toY:n.y,amount:1}),{a:(new Date).getTime(),sh:O("sh")},()=>{localStorage.setItem("workbench_selectedItem",JSON.stringify({status:"toInv"}));d.Ig()}));h||this.We(++e)},Ig(){JSON.parse(localStorage.getItem("workbench_selectedItem"));let e=JSON.parse(localStorage.getItem("workbench_itemList1"));const h=localStorage.getItem("workbench_itemBag");let {item:k,spot:m}=e;jQuery.post(D({mod:"inventory",submod:"move",from:h,fromX:m.x,fromY:m.y,to:k.container,toX:1,toY:1,amount:1,
doll:k.doll}),{a:(new Date).getTime(),sh:O("sh")},()=>{localStorage.setItem("workbench_selectedItem",JSON.stringify({status:"toInv"}));y("Item successfully repaired and equipped.");hb=!1;window.location.reload()})},Ch(e){e=jQuery(e);e=jQuery("<div>").addClass("gbot-overlay").width(e.width()).height(e.height()).offset(e.offset()).append(jQuery('<div class="gbot-spinner"></div>'));jQuery(document.body).append(e)},Xg(e,h,k){h=jQuery("<button>").html(h).addClass(k);jQuery(e).append(h);return h},Fj(){hb?
alert("A repair process is already running."):(jQuery(".gladbot-worbench-button").addClass("disabled"),d.Ug=[],d.queue=0,jQuery(document.body).addClass("workbench-cursor"),jQuery(document.body).on("contextmenu",function(e){e.preventDefault();jQuery(document.body).removeClass("workbench-cursor");jQuery(document.body).off("contextmenu")}),d.queue<d.tb&&jQuery("#inv .ui-draggable, #char .ui-draggable").mouseup(e=>{let h=e.target;e=h.className.match(/item-i-(\d+)-\d+/)[1];var k=d.freeSlots.shift()["forge_slots.slot"];
k={item:{type:e,name:kb(h),quality:Pa(h),slot:k,container:h.getAttribute("data-container-number")},spot:{bag:h.getAttribute("data-container-number"),x:h.getAttribute("data-position-x"),y:h.getAttribute("data-position-y")}};localStorage.setItem("workbench_itemList1",JSON.stringify(k));jQuery(h).parents("#char").length?setTimeout(()=>{hb?alert("A repair process is already running."):(d.Mh(h),this.Sg(h),hb=!0)},1E3):(d.queue++,d.fh(h),d.Nh(e))}))},Gj(){let e=0;for(let h of d.slots)"finished-succeeded"==
h["forge_slots.state"]&&(e++,jQuery.post(D({}),{mod:"forge",submod:"lootbox",mode:"workbench",slot:h["forge_slots.slot"],a:(new Date).getTime(),sh:O("sh")},k=>{e--;if("document.location.href=document.location.href;"==k||0==e)return window.location.reload()}))},fh(e){vb(e)&&(d.Ch(e),d.Ug.push(e))},Mh(e){vb(e)&&d.Ch(e)},Nh(e,h,k){let m=d.freeSlots.shift()["forge_slots.slot"],n=d.Ug.shift(),l=null!==h?h:n.getAttribute("data-item-id"),q=null!==k?k:{bag:n.getAttribute("data-container-number"),x:n.getAttribute("data-position-x"),
y:n.getAttribute("data-position-y")};jQuery.post(D({}),{mod:"forge",submod:"getWorkbenchPreview",mode:"workbench",slot:m,iid:l,amount:1,a:(new Date).getTime(),sh:O("sh")},t=>{let r=JSON.parse(t).slots[m].formula.xj;eg().gold>JSON.parse(t).slots[m].formula.rent[2]&&jQuery.post(D({}),{mod:"forge",submod:"rent",mode:"workbench",slot:m,rent:2,item:l,a:(new Date).getTime(),sh:O("sh")},()=>{"full"==e?d.Ya(m,q,!0):"partial"==e&&d.ki(m,q,r)})})},ki(e,h,k){let m=[];for(let n in k)0<k[n].amount&&m.push(n-18E3);
d.Dh(m,(n,l)=>{d.Eh(h,n,l,q=>{jQuery.post(D({}),{mod:"forge",submod:"toWarehouse",mode:"workbench",slot:e,iid:q,amount:1,a:(new Date).getTime(),sh:O("sh")},()=>{jQuery.post(D({}),{mod:"forge",submod:"start",mode:"workbench",slot:e,a:(new Date).getTime(),sh:O("sh")},()=>{d.queue--;0==d.queue&&window.location.reload()})})})})},Dh(e,h=!1,k=0,m=-1){if(k==e.length)if(1>m)k=0,m++;else return;jQuery.post(D({mod:"forge",submod:"storageOut"}),{type:e[k],quality:m,amount:1,a:(new Date).getTime(),sh:O("sh")}).done(()=>
h&&h(e[k],m)).fail(()=>d.Dh(e,h,++k,m))},Eh(e,h,k,m=!1,n=1){let l=!1;jQuery.get(za({mod:"packages",f:18,fq:k,qry:"",page:1,sh:O("sh")}),q=>{for(let r of jQuery(q).find(".packageItem")){var t=r.querySelector(".ui-draggable");q=ib(t).split("-")[1];t=Pa(t);h==q&&k==t&&(l=!0,jQuery.post(D({mod:"inventory",submod:"move",from:r.querySelector("[data-container-number]").getAttribute("data-container-number"),fromX:1,fromY:1,to:e.bag,toX:e.x,toY:e.y,amount:1}),{a:(new Date).getTime(),sh:O("sh")},u=>{m&&m(JSON.parse(u).to.data.itemId)}))}l||
d.Eh(e,h,k,m,++n)})}};jQuery("#inv").after('\n              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">\n    \n                <fieldset id="gladbot-workbench" style="\n                  padding: 10px;\n                  margin: 10px 20px;\n                  text-align: center;\n                  display: flex;\n                  flex-direction: row;\n                  flex-wrap: wrap;\n                  align-items: center;\n                  justify-content: space-around;\n                  border: 2px solid darkred;\n                  border-radius: 8px;\n                  width: 235px;">\n                  <legend style="\n                    padding: 0 10px;\n                    color: darkred;\n                    font-weight: bold;">Gladbot Workbench Area</legend>\n                    <span class="span-new">Make sure last workbench slot is available, and make sure there\'s 3x3 space available. Repair only works for the equipments on the character. If you dont see the inventory, install Crazy-Addon.</span>\n                </fieldset>');
c("#gladbot-workbench",'<i class="fa fa-wrench"></i>',"gladbot-button gladbot-worbench-button-full gladbot-stylish-button").attr("title","Click on this Icon and then click on items to repair. You can only repair one item at a time.").mouseup(e=>{b(e,"full")});c("#gladbot-workbench",'<i class="fa fa-undo"></i>',"gladbot-button gladbot-worbench-button-reset gladbot-stylish-button").attr("title","If an item is stuck and not repairing, click this button to reset.").mouseup(()=>{hb=!1})}async function Nf(){const b=
za({mod:"packages",submod:"sort",page:"1",sh:O("sh")});return await jQuery.post(b,{packageSorting:"del_asc"})}async function ah(){const b=za({mod:"packages",page:"1",sh:O("sh")});return await jQuery.post(b,{packageExpiry:"date"})}async function bh(){const b=za({mod:"packages",submod:"sort",page:"1",sh:O("sh")});return await jQuery.post(b,{packageSorting:"del_desc"})}async function Mf(){const b=za({mod:"packages",submod:"sort",page:"1",sh:O("sh")});return await jQuery.post(b,{packageSorting:"in_desc"})}
async function ch(){await Nf();return(await Promise.all([1,2,3,4,5,6,7,8,9,10,11].map(b=>jQuery.get(za({mod:"packages",f:"0",fq:"-1",qry:"",page:b.toString(),sh:O("sh")}))))).flat()}async function dh(b,c){if("mod=guildMarket"!=ue)cg("mod=guildMarket");else{y("Checking for expiring items.");var d={WEAPONS:"2",SHIELD:"4",CHEST:"8",HELMET:"1",GLOVES:"256",SHOES:"512",RINGS:"48",AMULETS:"1024",USABLES:"4096",UPGRADES:"4096",RECIPES:"8192",MERCENARY:"16384",SCROLLS:"64",REINFORCEMENTS:"4096"};await Nf();
await ah();var e=(await ch()).map(l=>jQuery(l).find(".packageItem").toArray()).flat();b=24*b;var h=!1;for(const l of e){e=l.querySelector('span[data-ticker-type="date"]');if(!e)continue;e=e.getAttribute("data-ticker-time-left");if(!e)continue;e=e/1E3/60/60;var k=l.querySelector("div[data-content-type]");const q=k?k.getAttribute("data-content-type"):null;if(e<=b&&c.some(t=>d[t]===q)){e=(h=l.querySelector("div[data-container-number]"))?h.getAttribute("data-container-number"):null;h=l.querySelector("div[data-tooltip]").getAttribute("data-tooltip");
k=ee(h);h=!0;await eh(l,e,k);e=O("sh");e=`${window.location.origin}/game/index.php?mod=guildMarket&fl=0&fq=-1&f=0&qry=&seller=&s=p&p=1&&sh=${e}`;k=await (await fetch(e)).text();k=(new DOMParser).parseFromString(k,"text/html").querySelectorAll("#market_table tr");var m=document.querySelector('input[type="submit"][name="anbieten"][value="Offer"]');if(m&&m.disabled)e=JSON.parse(localStorage.getItem("Timers")),Z("resetExpired",e.ResetExpired||10),y("Make sure you have sell rights in guild market!");else for(m=
1;m<k.length;m++){var n=k[m];let t=n.querySelectorAll("td")[2],r=n.querySelector('input[name="cancel"]');n=(n=n.querySelector("div[data-item-id]"))?n.getAttribute("data-item-id"):null;r&&Number(t.textContent.replace(/\./g,""))===Number(Of)&&(await fetch(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({buyid:n,qry:"",seller:"",f:0,fl:0,fq:-1,s:"",p:1,cancel:"Cancel"})}),y("Item successfully reset."))}}}if(!h||h)c=JSON.parse(localStorage.getItem("Timers")),
Z("resetExpired",c.ResetExpired||10),window.location.reload()}}async function eh(b,c){let {spot:d,bag:e}=await rc(2,3);try{const h=await jQuery.post(D({mod:"inventory",submod:"move",from:c,fromX:1,fromY:1,to:e,toX:d.x+1,toY:d.y+1,amount:1}),{a:(new Date).getTime(),sh:O("sh")});if(h){const k=Math.floor(91*Math.random())+10;Of=k;const m=JSON.parse(h).to.data.itemId;await fh(c,k,m)}else reject(Error("Response is falsy"))}catch(h){y("No Empty Space or Gold to Reset. Will try again later."),b=JSON.parse(localStorage.getItem("Timers")),
Z("resetExpired",b.ResetExpired||10),window.location.reload()}}async function fh(b,c,d){await jQuery.post(za({mod:"guildMarket",sh:O("sh")}),{sellid:d,preis:c,dauer:1,sell_mode:0,anbieten:"Offer"})}function fe(){const b=localStorage.getItem("healPercentage")||25;var c=(new Date).getTime();if(ca>new Date)throw Ua(),Error("SupportDevs");if(aa==qa&&J(K())-Qa){const e=[];if(!0===Ga&&aa==qa){var d=kc(document.getElementById("cooldown_bar_text_expedition").innerText);e.push({name:"expedition",time:d,index:0})}!0===
Ea&&aa==qa&&(d=kc(document.getElementById("cooldown_bar_text_dungeon").innerText),e.push({name:"dungeon",time:d,index:1}));!0===Fa&&(d=kc(document.getElementById("cooldown_bar_text_arena").innerText),e.push({name:"arena",time:d,index:2}));!0===Ba&&(d=kc(document.getElementById("cooldown_bar_text_ct").innerText),e.push({name:"circusTurma",time:d,index:3}));!0===Ca&&(c=localStorage.getItem("eventPoints.timeOut")-c,e.push({name:"eventExpedition",time:c,index:4}));"true"===sessionStorage.getItem("autoGoActive")&&
!1===Ba&&!1===Fa&&!1===Ga&&!1===Ea&&"true"===localStorage.getItem("activateAuction2")&&bg(2E4);const h=function(r){let u=0;for(;u<r.length&&!r[u];)u++;if(u===r.length)return null;let v=r[u].time;for(let w=u+1;w<r.length;w++)r[w]&&r[w].time<v&&(v=r[w].time,u=w);return r[u]}(e);function k(r){if(1E3>r)return"0:00:00";r=Math.round(r/1E3);let u=r%60;10>u&&(u="0"+u);r=(r-u)/60;let v=r%60;10>v&&(v="0"+v);return(r-v)/60+":"+v+":"+u}let m=document.getElementById("nextActionWindow");const n=(JSON.parse(localStorage.getItem("underworld"))||
{}).isUnderworld;m||(m=document.createElement("div"),m.setAttribute("id","nextActionWindow"),m.setAttribute("style","\n                display: block;\n                align-items: center;\n                justify-content: center;\n                position: absolute;\n                top: -3px;\n                left: 50%;\n                transform: translateX(-50%);\n                height: 50px;\n                width: 190px;\n                color: black;\n                background: rgba(196, 172, 112, 0.9);\n                box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1); /* Softer shadow for a more subtle effect */\n                border-radius: 10px;\n                font-size: 16px;\n                font-family: 'Open Sans', sans-serif;\n                letter-spacing: 0.5px;\n                border: 1px solid black;\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Smoother transition effect */\n                z-index: 1999;\n                \n                  "),
h&&h.time&&!String(h.time).includes("NaN")?m.innerHTML=`
                              <span class="span-new" style="color: black;">${g.$a}: </span>
                              <span class="span-new">${g[h.name]}</span></br>
                              <span class="span-new" style="color: black;">${g.Za}: </span>
                              <span class="span-new">${k(h.time)}</span>`:m.innerHTML='\n                              <span class="span-new">Please select an action. [Exp|Dungeon|Arena|Circus]</span></br>',document.getElementById("header_game").insertBefore(m,document.getElementById("header_game").children[0]));function l(r){if(!0===n){if(!0===(JSON.parse(localStorage.getItem("underworld"))||{}).isUnderworld)switch(r){case "expedition":return"cooldown_bar_expedition";case "circusTurma":if(Ba)return"cooldown_bar_ct";
default:return null}}else switch(r){case "expedition":if(Ga)return"cooldown_bar_expedition";break;case "dungeon":if(Ea)return"cooldown_bar_dungeon";break;case "arena":if(Fa)return"cooldown_bar_arena";break;case "circusTurma":if(Ba)return"cooldown_bar_ct";break;case "eventExpedition":if(Ca)return null;break;default:return null}}function q(r){if("eventExpedition"!==r){if("circusTurma"===r&&(r="ct"),r=document.getElementById("cooldown_bar_"+r))return!r.querySelector(".cooldown_bar_text").classList.contains("ticker")}else if(Ca)return Array.from(document.getElementsByClassName("cooldown_bar_link")).some(u=>
(u=u.closest(".cooldown_bar"))?!u.querySelector(".cooldown_bar_text").classList.contains("ticker"):!1);return!1}function t(r){try{if("eventExpedition"===r&&Ae("eventPoints")&&1==Ca&&("true"===localStorage.getItem("HealEnabled")?V.u>Number(b):1))try{const u=document.getElementById("submenu2").getElementsByClassName("menuitem glow")[0];if(u)return u.click(),!0;window.location.reload();console.log("Event expedition link not found.")}catch(u){return console.error("Error performing eventExpedition action:",
u),!1}else{const u=l(r);if(u&&("true"===localStorage.getItem("HealEnabled")?V.u>=Number(b):1)){const v=document.getElementById(u);if(v){const w=v.querySelector(".cooldown_bar_link");if(w&&q(r))return w.click(),!0}}}}catch(u){return window.location.reload(),!1}}if("true"===sessionStorage.getItem("autoGoActive")){const r=["expedition","dungeon","arena","circusTurma","eventExpedition"];let u=0;function v(){let B=Date.now();if(400>B-u)requestAnimationFrame(v);else{var G=!1;for(const H of r)if(q(H)&&("true"===
localStorage.getItem("HealEnabled")?V.u>Number(b):1)&&(G=t(H))){u=B;return}G||requestAnimationFrame(v)}}v();setInterval(()=>{if(h)if(h.time-=1E3,0>=h.time||q(h.name))t(h.name);else if(h&&(w!==h.name||z!==h.time)){var B=!h||isNaN(h.time)||String(h.time).includes("NaN")?'<span class="span-new">No Action Selected / Hicbir Ayar Secilmedi</span></br>':`
                            <span class="span-new" style="color: black;">${g.$a}: </span>
                            <span class="span-new">${g[h.name]}</span></br>
                            <span class="span-new" style="color: black;">${g.Za}: </span>
                            <span class="span-new">${k(h.time)}</span>`;m.innerHTML=B;w=h.name;z=h.time}},1E3);let w=null,z=-1}}}(function(){document.addEventListener("touchend",function(b){b=b.target;var c=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});b.dispatchEvent(c)});document.addEventListener("touchstart",function(b){b=b.target;var c=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});b.dispatchEvent(c)});try{chrome&&chrome.runtime&&chrome.runtime.sendMessage&&"true"===
sessionStorage.getItem("autoGoActive")&&(chrome.runtime.sendMessage({Fh:!0,Yg:"https://raw.githubusercontent.com/fociisoftware/glbt/main/aud.mp3"}),chrome.runtime.sendMessage({keepAlive:!0},()=>{}));let b=localStorage.getItem("activeItems");null!==b&&b!==JSON.stringify([])||localStorage.setItem("activeItems",JSON.stringify({}));chrome.runtime.onMessage.addListener(c=>{c.Fh&&c.Yg&&"true"===sessionStorage.getItem("autoGoActive")&&(c=new Audio(c.Yg),c.loop=!0,c.volume=0,c.play().catch(()=>{}))})}catch{console.log("Could not play the audio")}"true"===
sessionStorage.getItem("autoGoActive")&&setTimeout(function(){window.location.reload()},35E4)})();const gh={start(){function b(){try{chrome.runtime.sendMessage({queryButtonClickedState:!0},l=>{if(l.state)console.log("Button click already registered. Not clicking again.");else{if(window.location.href.includes("/accounts")&&(l=document.querySelector("#serverlist-header #backbutton")))return console.log("On accounts page, clicking back button..."),l.click(),setTimeout(b,500);if(document.querySelector("#joinGame .button-default")&&
document.getElementById("joinGame")&&(l=document.querySelectorAll("#joinGame button"))&&"false"!==localStorage.getItem("autologin")){console.log("Attempting to click the join button...");chrome.runtime.sendMessage({Yh:!0});let q=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});l[1]?.dispatchEvent(q);chrome.runtime.sendMessage({Yh:!0})}}})}catch{console.log("Message failed")}}function c(){var l=document.cookie.split("; ").find(q=>q.startsWith("glautologin="));l=l?l.split("=")[1]:null;
window.location.href.includes("forum.gladiatus")||"true"!=l||setTimeout(b,3E3)}window.location.href.includes("game/index.php")||c();const d=document.querySelectorAll("h1"),e=document.querySelectorAll("h2"),h=document.getElementById("main-frame-error"),k=document.querySelectorAll(".error-code"),m=document.querySelector('h1[jstcache="0"]');if(0<k.length)try{chrome&&chrome.runtime&&chrome.runtime.sendMessage&&"true"===sessionStorage.getItem("autoGoActive")&&chrome.runtime.sendMessage({keepAlive:!0},
()=>{}),window.location.reload()}catch{console.log("Message error")}let n=!1;for(const l of d)if(l.textContent.includes("503")||l.textContent.includes("500")){n=!0;window.location.reload();break}for(const l of e)if(l.textContent.includes("503")||l.textContent.includes("500")){n=!0;window.location.reload();break}h&&(n=!0);m&&(n=!0);for(const l of k)if(l.textContent.includes("500")){n=!0;window.location.reload();break}n&&setTimeout(()=>{location.reload()},3E3)}};window.location.href.includes("index.php?mod=overview&submod=achievements")||
window.location.href.includes("index.php?mod=overview&submod=stats")||gh.start();const Pf=localStorage.getItem("underworld"),Jb=Pf?JSON.parse(Pf):null,Qf=document.querySelector('input[name="cancelTravel"]');try{document.querySelector("#header_LoginBonus")&&!Qf&&Jb&&!window.location.href.includes("/index.php?mod=hermit")&&!1===Jb.isUnderworld&&document.querySelector("#linkLoginBonus").click()}catch{}let Rf=document.getElementById("wrapper_game"),lc=Rf&&"underworld"===Rf.className;if(lc){const b=JSON.parse(localStorage.getItem("underworld")||
"{}");b.isUnderworld=!0;localStorage.setItem("underworld",JSON.stringify(b))}else{const b=JSON.parse(localStorage.getItem("underworld")||"{}");b.isUnderworld=!1;localStorage.setItem("underworld",JSON.stringify(b))}try{if((window.location.href.includes("/index.php?mod=hermit&submod=travel")||Qf||window.location.href.includes("/index.php?mod=hermit&submod=enterUnderworld"))&&"true"===sessionStorage.getItem("autoGoActive")&&"true"===localStorage.getItem("autoEnterHell")){const b=document.querySelector('span[data-ticker-type="countdown"]');
if(b){const c=parseInt(b.getAttribute("data-ticker-time-left"),10);await new Promise(d=>setTimeout(d,c+1E4||31E4))}else await new Promise(c=>setTimeout(c,45E3))}}catch(b){}(function(){const b=document.querySelector('input[type="submit"][value="Fermer"][id="linkcancelnotification"]'),c=document.querySelector('input[type="submit"][value="Cancel"][id="linkcancelnotification"]'),d=document.querySelector('span[data-ticker-type="countdown"]');if(window.location.href.includes("/index.php?mod=reports")&&
!d||window.location.href.includes("/index.php?mod=quests")&&!d)null!==document.getElementById("blackoutDialognotification")&&"none"!==window.getComputedStyle(document.getElementById("blackoutDialognotification")).display&&setTimeout(function(){document.getElementById("blackoutDialognotification").getElementsByTagName("input")[1].click()},500),b&&b.click(),c&&c.click()})();let ge=!0;const Va=new URL(window.location.href);let Qa,Sf=document.createElement("style");Sf.innerHTML="\n    #logMenu {\n      resize: vertical;\n      overflow: auto;\n      max-height: 500px;\n    }\n  ";
document.head.appendChild(Sf);let we=null,xe=0;window.location.href.includes("mod=auction")&&A();localStorage.getItem("playerId")&&J(K());(function(){var b=document.createElement("button");b.className="menuitem breathing-light";b.innerHTML="GladBOT License";b.setAttribute("id","lico");b.addEventListener("click",qb);var c=document.getElementById("mainmenu");c&&c.children[0]&&c.insertBefore(b,c.children[0]);b=document.createElement("style");b.innerHTML="\n        @keyframes breathing-light {\n            0%, 100% {\n                box-shadow: 0 0 11px 5px rgba(255, 255, 0, 0.7);\n            }\n            50% {\n                box-shadow: 0 0 11px 10px rgba(255, 255, 0, 0.5);\n            }\n        }\n\n        .breathing-light {\n            animation: breathing-light 2s ease-in-out infinite;\n        }\n    ";
document.head.appendChild(b)})();if(window.location.href.includes("/index.php?mod=player&p")||window.location.href.includes("/index.php?mod=player&doll")){var he=document.querySelector(".playername.ellipsis")||document.querySelector(".playername_achievement.ellipsis"),ob=he.textContent.trim();if(2<ob.length){var ie=document.getElementById("char");function b(d,e,h,k){if(null!==document.getElementById("container_start")){var m=window.location.href.split("p=")[1].split("&")[0],n=window.location.href.match(/s(\d+)-\w\w/),
l=window.location.href.match(/s\d+-(\w\w)/);e={playerName:e,aType:k,opponentId:m,serverId:n?n[1]:null,country:l?l[1]:null};h=2===k?"arenacrosslist":"circuscrosslist";var q=2===k?"removeArenaList":"removeCircusList";n=JSON.parse(rb(h)||"[]");var t=JSON.parse(rb(q)||"[]");l=n.findIndex(u=>u.opponentId===m);var r=t.findIndex(u=>u.opponentId===m);-1!==l?(n.splice(l,1),-1===r&&(t.push(e),lb(q,JSON.stringify(t),7)),d.classList.remove("added"),d.setAttribute("data-tooltip","Add to "+(2===k?"Arena":"Circus"))):
(n.push(e),-1!==r&&(t.splice(r,1),lb(q,JSON.stringify(t),7)),d.classList.add("added"),d.setAttribute("data-tooltip","Remove from "+(2===k?"Arena":"Circus")));lb(h,JSON.stringify(n),7)}else n=JSON.parse(localStorage.getItem(h))||[],l=n.indexOf(e),-1!==l?(n.splice(l,1),d.classList.remove("added"),d.setAttribute("data-tooltip","Add to "+("autoAttackList"===h?"Arena":"Circus"))):(n.push(e),d.classList.add("added"),d.setAttribute("data-tooltip","Remove from "+("autoAttackList"===h?"Arena":"Circus"))),
localStorage.setItem(h,JSON.stringify(n))}function c(d,e,h,k,m){var n=document.createElement("a");n.className="gladbot-button gladbot-"+d;n.textContent=e;n.setAttribute("data-tooltip",h);ie.appendChild(n);(JSON.parse(localStorage.getItem(k))||[]).includes(ob)&&(n.classList.add("added"),n.setAttribute("data-tooltip","Remove from "+("autoAttackList"===k?"Arena":"Circus")));n.addEventListener("click",function(){b(n,ob,k,m)})}c("arena","A","GladB: Add to Arena List","autoAttackList",2);c("circus","C",
"GladB: Add to Circus List","autoAttackCircusList",3)}}const hh=localStorage.getItem("Username"),qa=localStorage.getItem("pid");let ih=localStorage.getItem("tkz_lcr");const jh=localStorage.getItem("tkn"),Vb=await async function(b,c,d,e){e=I(e,3);const h={action:"vx",data:{token:b,refreshToken:c,playerId:d,hj:e}};try{const k=await Promise.race([new Promise((m,n)=>{chrome.runtime.sendMessage(h,l=>{chrome.runtime.ri||!l?n(chrome.runtime.ri||"No response"):m(l)})}),new Promise(m=>setTimeout(()=>m("timeout"),
1E4))]);if("timeout"===k)await new Promise(m=>setTimeout(m,5E3)),window.location.reload();else if(k.success||k.s){const m=k.data||k.d;if(m.valid)return Qa=!0,aa=m.playerId,ea=m.supportDevs,"true"!==localStorage.getItem("nana_lcn")&&localStorage.setItem("nana_lcn","true"),m.announcement&&0<=m.announcement.length&&localStorage.getItem("latestAnnouncement")!==m.announcement&&localStorage.setItem("latestAnnouncement",m.announcement),await R(m.supportDevs).then(n=>{ca=n}),!0;if(m.expired&&(sessionStorage.setItem("autoGoActive",
!1),m.newToken))return m.newToken&&(localStorage.setItem("token",m.newToken+1),localStorage.setItem("nana_lcn","false"),aa=await Ia()+"l",Ua()),!1}else new Promise(m=>setTimeout(()=>m("timeout"),2E4))}catch(k){return Ua(),!1}}(ih,jh,qa,hh);"true"===localStorage.getItem("AutoLogin")?Ub(!0):Ub(!1);if(window.location.href.includes("/index.php?mod=overview")){const b=[3,4,5,2,9,10,6,7,11],c=[1,2,4,8,48,256,512,1024];sc();const d=document.getElementById("char");if(d){const e=document.createElement("button"),
h=document.createElement("span");e.textContent="\u21d3";e.className="put-down awesome-button";e.style="padding: 2.5px 5px; position: absolute; top: 235px; left: 170px; font-size: 12px; cursor: pointer;";e.classList.add("tooltip");e.appendChild(h);e.onclick=async function(){let n=Array.from(document.querySelectorAll("#char .ui-droppable")).filter(l=>b.includes(parseInt(l.dataset.containerNumber)||"0"));for(let l=0;l<n.length;l++)await new Promise(q=>setTimeout(q,100)),Aa(n[l],"inv");await new Promise(l=>
setTimeout(l,500))};d.appendChild(e);const k=document.createElement("button"),m=document.createElement("span");k.textContent="\u21d1";k.className="put-up awesome-button";k.style="padding: 2.5px 5px; position: absolute; top: 235px; left: 192px; font-size: 12px; cursor: pointer;";k.classList.add("tooltip");k.appendChild(m);k.onclick=async function(){let n=Array.from(document.querySelectorAll("#inv .ui-draggable")).filter(l=>c.includes(parseInt(l.dataset.contentType)));for(let l=0;l<n.length;l++)await new Promise(q=>
setTimeout(q,100)),Aa(n[l],"char");await new Promise(l=>setTimeout(l,500))};d.appendChild(k)}}let uc=await Ia(),hb=!1,ua="true"===sessionStorage.getItem("autoGoActive")?!0:!1,V;try{V={level:parseInt(document.getElementById("header_values_level").innerText),u:parseInt($("#header_values_hp_percent")[0].innerText),gold:Number($("#sstat_gold_val")[0].innerHTML.replace(/\./g,""))}}catch{}if(ye()){var pb=document.createElement("button");pb.setAttribute("id","autoGoButton");pb.className="customButton";0==
ua?(localStorage.setItem("Start",!1),pb.innerHTML='\n                <span style="\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  width: 100%;\n                  height: 100%;\n                ">\n                  &#9658;\n                </span>',pb.addEventListener("click",wc)):(localStorage.setItem("Start",!0),pb.innerHTML='\n                <span style="\n                  display: flex;\n                  justify-content: center;\n                  align-items: center;\n                  width: 100%;\n                  height: 100%;\n                ">\n                  &#9724;\n                </span>',
pb.addEventListener("click",xc));var mc=document.createElement("button");mc.className="customButton2";mc.innerHTML='<span style="position: relative; top: -12px;">&#9881;</span>';mc.addEventListener("click",Xb);var Kb=document.getElementById("mainmenu");Kb&&(Kb.insertBefore(mc,Kb.children[0]),Kb.insertBefore(pb,Kb.children[1]))}else return Ua(),!1;(function(){try{if("mod=arena&submod=serverArena&aType=2"==ue||"mod=arena&submod=serverArena&aType=3"==ue){let m=JSON.parse(localStorage.getItem("autoAttackList"))||
[],n=JSON.parse(localStorage.getItem("autoAttackServerList"))||[],l=JSON.parse(localStorage.getItem("autoAttackCircusList"))||[],q=JSON.parse(localStorage.getItem("autoAttackCircusServerList"))||[],t=[...m,...n,...l,...q].map(r=>r.playerName);Array.from(document.querySelectorAll("#own2 tr")).forEach(r=>{(r=r.querySelector("a"))&&t.includes(r.innerText)&&(r.style.color="orange",r.style.fontWeight="bold",r.style.textShadow="1px 1px 2px #000000")})}var b=JSON.parse(rb("arenacrosslist")||"[]"),c=JSON.parse(rb("circuscrosslist")||
"[]"),d=JSON.parse(rb("removeArenaList")||"[]"),e=JSON.parse(rb("removeCircusList")||"[]"),h=JSON.parse(localStorage.getItem("autoAttackServerList")||"[]"),k=JSON.parse(localStorage.getItem("autoAttackCircusServerList")||"[]");0<b.length&&(b.forEach(m=>{h.some(n=>n.opponentId===m.opponentId)||h.push(m)}),localStorage.setItem("autoAttackServerList",JSON.stringify(h)),lb("arenacrosslist",JSON.stringify([]),7));0<c.length&&(c.forEach(m=>{k.some(n=>n.opponentId===m.opponentId)||k.push(m)}),localStorage.setItem("autoAttackCircusServerList",
JSON.stringify(k)),lb("circuscrosslist",JSON.stringify([]),7));if(0<d.length||0<e.length)h=h.filter(m=>!d.some(n=>n.opponentId===m.opponentId)),k=k.filter(m=>!e.some(n=>n.opponentId===m.opponentId)),localStorage.setItem("autoAttackServerList",JSON.stringify(h)),localStorage.setItem("autoAttackCircusServerList",JSON.stringify(k)),lb("removeArenaList",JSON.stringify([]),7),lb("removeCircusList",JSON.stringify([]),7)}catch{console.log("Something is wrong with HandlePlayers")}})();"mod=overview"==ue&&
og();if("mod=location"!==ue&&"mod=arena"!==ue&&0==localStorage.getItem("eventPoints_")){const b=document.getElementById("ServerQuestTime");if(b){const c=b.querySelector("span");c&&localStorage.setItem("eventPoints_",c.textContent)}}let Na=!0;localStorage.getItem("doQuests")&&(Na="true"===localStorage.getItem("doQuests")?!0:!1);let cb={combat:!0,arena:!0,circus:!0,expedition:!0,dungeon:!0,items:!0};localStorage.getItem("questTypes")&&(cb=JSON.parse(localStorage.getItem("questTypes")));let Lb=0;localStorage.getItem("nextQuestTime")&&
(Lb=Number(localStorage.getItem("nextQuestTime")));let Ga=!0;localStorage.getItem("doExpedition")&&J(K())-Qa&&(Ga="true"===localStorage.getItem("doExpedition")?!0:!1);let yc=0;localStorage.getItem("monsterId")&&(yc=Number(localStorage.getItem("monsterId")));let Ea=!0;localStorage.getItem("doDungeon")&&(Ea="true"===localStorage.getItem("doDungeon")?!0:!1);10>V.level&&(Ea=!1);const Tf=document.getElementById("cooldown_bar_dungeon");120<=V.level&&Tf&&"none"===Tf.style.display&&localStorage.setItem("doDungeon",
"false");let xb="advanced"===localStorage.getItem("dungeonDifficulty")?"advanced":"normal",Fa=!0;localStorage.getItem("doArena")&&(Fa="true"===localStorage.getItem("doArena")?!0:!1);2>V.level&&(Fa=!1);let Ge="min";localStorage.getItem("arenaOpponentLevel")&&(Ge=localStorage.getItem("arenaOpponentLevel"));let Ba=!0;localStorage.getItem("doCircus")&&(Ba="true"===localStorage.getItem("doCircus")?!0:!1);10>V.level&&(Ba=!1);let He="min";localStorage.getItem("circusOpponentLevel")&&(He=localStorage.getItem("circusOpponentLevel"));
let Ca=!0;localStorage.getItem("doEventExpedition")&&(Ca="true"===localStorage.getItem("doEventExpedition")?!0:!1);try{document.getElementById("submenu2").getElementsByClassName("menuitem glow")[0]||(Ca=!1)}catch{}let $b=0;localStorage.getItem("eventMonsterId")&&($b=Number(localStorage.getItem("eventMonsterId")));let Ra=!1;localStorage.getItem("AutoAuction")&&(Ra="true"===localStorage.getItem("AutoAuction")?!0:!1);localStorage.getItem("DoOther")&&localStorage.getItem("DoOther");let db=!1;localStorage.getItem("doKasa")&&
(db="true"===localStorage.getItem("doKasa")?!0:!1);let g;switch(localStorage.getItem("settings.language")){case "EN":g={...hg};break;case "PL":g={...ig};break;case "ES":g={...jg};break;case "TR":g={...kg};break;case "FR":g={...lg};break;case "HG":g={...mg};break;case "BR":g={...ng};break;default:g={...hg}}if(ca<new Date)throw sessionStorage.setItem("autoGoActive",!1),Ua(),Error("LE");const Wa=document.createElement("div");Wa.style.position="fixed";Wa.style.right="10px";Wa.style.top="50px";Wa.style.zIndex=
"99999";document.body.appendChild(Wa);const sa=document.createElement("div");sa.id="logMenu";sa.style.width="190px";sa.style.height="210px";sa.style.overflowY="hidden";sa.style.backgroundColor="rgba(221, 213, 180, 0.8)";sa.style.border="1px solid #c4ac70";sa.style.boxShadow="0px 0px 15px 2px rgba(0, 0, 0, 0.3)";sa.style.borderRadius="10px";sa.style.fontFamily="Arial, sans-serif";sa.style.color="#333";Wa.appendChild(sa);const Xa=document.createElement("h2");Xa.textContent="Log Menu";Xa.style.backgroundColor=
"rgba(196, 172, 112, 0.8)";Xa.style.color="#333";Xa.style.margin="0";Xa.style.padding="10px 20px";Xa.style.borderTopLeftRadius="10px";Xa.style.borderTopRightRadius="10px";sa.appendChild(Xa);const tb=document.createElement("div");tb.id="logEntriesContainer";tb.style.overflowY="scroll";tb.style.height="calc(100% - 60px)";tb.style.padding="10px 20px";sa.appendChild(tb);const Ja=document.createElement("div");Ja.style.display="flex";Ja.style.justifyContent="space-between";Ja.style.marginTop="10px";Ja.style.top=
"calc(300px + 10px)";Ja.style.width="155px";Ja.style.padding="0 10px";Ja.style.zIndex="99999";Ja.style.left="0";Wa.appendChild(Ja);const Mb=document.createElement("button");Mb.id="clearLogsButton";Mb.textContent="Clear Logs";vc(Mb,"rgba(221, 213, 180, 0.8)");Ja.appendChild(Mb);Mb.addEventListener("click",function(){const b=document.querySelector("#logMenu");if(b){for(;b.firstChild;)b.removeChild(b.firstChild);localStorage.removeItem("savedLogs")}});const Nb=document.createElement("button");Nb.id=
"resetBOT";Nb.textContent="Reset Bot";vc(Nb,"rgba(221, 213, 180, 0.8)");Ja.appendChild(Nb);Nb.addEventListener("click",function(){const b=["tkz_lcr","Username"];let c=[];for(let d=0;d<localStorage.length;d++){const e=localStorage.key(d);e&&!b.includes(e)&&c.push(e)}for(const d of c)localStorage.removeItem(d);window.location.reload()});const nc=document.createElement("button");nc.textContent="Sort Logs";vc(nc,"rgba(221, 213, 180, 0.8)");Ja.appendChild(nc);nc.addEventListener("click",function(){let b=
localStorage.getItem("savedLogs");if(b){b=JSON.parse(b);b.sort((d,e)=>{d=d.split(" ")[0];e=e.split(" ")[0];return ge?d.localeCompare(e):e.localeCompare(d)});ge=!ge;for(var c=document.querySelector("#logMenu");c.firstChild;)c.removeChild(c.firstChild);for(let d of b){const e=document.createElement("p");e.style.margin="0";e.style.padding="0";e.style.fontSize="12px";e.textContent=d;c.appendChild(e)}localStorage.setItem("savedLogs",JSON.stringify(b))}});sa.style.transition="height 0.1s ease";const Uf=
localStorage.getItem("logMenuVisible");let je;null===Uf?(je="210px",localStorage.setItem("logMenuVisible","true")):je="true"===Uf?localStorage.getItem("logMenuHeight")||"210px":"38px";sa.style.height=je;Xa.addEventListener("click",function(){if("38px"!==sa.style.height)sa.style.height="38px",localStorage.setItem("logMenuVisible","false");else{const b=localStorage.getItem("logMenuHeight")||"210px";sa.style.height=b;localStorage.setItem("logMenuVisible","true")}});sa.addEventListener("resize",ze);"38px"!==
sa.style.height&&ze();if("true"===localStorage.getItem("activateAuction2")){function b(l){l.style.position="flex";l.style.width="150px";l.style.marginLeft="8px";l.style.marginTop="10px";l.style.height="16px";l.style.backgroundColor="rgba(221, 213, 180, 0.8)";l.style.border="1px solid #c4ac70";l.style.boxShadow="0px 0px 15px 2px rgba(0, 0, 0, 0.3)";l.style.padding="10px";l.style.borderRadius="10px";l.style.fontFamily="Arial, sans-serif";l.style.color="#333";l.style.textAlign="center";l.style.zIndex=
"1000"}const c=document.createElement("div");c.id="auctionMPopup";b(c,"calc(55px + 200px + 100px + 10px + 10px + -5px)");c.addEventListener("click",async()=>{cg("mod=auction&ttype=3")});const d=document.createElement("div");d.id="auctionPopup";b(d,"calc(100px + 200px + 100px + 10px)");d.addEventListener("click",async()=>{cg("mod=auction")});function e(l,q){return`${q}: ${[g.Ra,g.za,g.Ca,g.Na,g.Sa][l]||"Unknown"}`}const h=document.createElement("h3"),k=document.createElement("h3");Wa.appendChild(d);
Wa.appendChild(c);const m=localStorage.getItem("auctionStatus"),n=localStorage.getItem("auctionMStatus");null!==m?(h.textContent=e(parseInt(m),"Gladiator"),d.appendChild(h),d.style.display="block"):d.style.display="none";null!==n?(k.textContent=e(parseInt(n),"Mercenary"),c.appendChild(k),c.style.display="block"):c.style.display="none"}let oc=localStorage.getItem("savedLogs");oc&&(oc=JSON.parse(oc),oc.forEach(b=>{const c=document.createElement("p");c.style.margin="0";c.style.padding="0";c.style.fontSize=
"12px";c.textContent=b;tb.appendChild(c)}));const Y={async start(){return new Promise(()=>{Y.Pe=eg().gold;Y.form=document.querySelectorAll("#auction_table form");Y.m=[];const b=localStorage.getItem("auctiongladiatorenable"),c=localStorage.getItem("auctionmercenaryenable"),d=localStorage.getItem("bidFood"),e=localStorage.getItem("bidStatus"),h=localStorage.getItem("auctionStatus"),k=localStorage.getItem("auctionMStatus"),m=localStorage.getItem("auctionminlevel")||0;let n="true"===localStorage.getItem("enableMercenarySearch");
const l=async()=>{const q=JSON.parse(localStorage.getItem("Timers"));var t=JSON.parse(localStorage.getItem("auctionPrefixes"))||[];let r=JSON.parse(localStorage.getItem("auctionSuffixes"))||[],u;const v=(new URL(window.location.href)).origin;try{1===t.length?u=Pb(t[0]):1===r.length&&(u=Pb(r[0]))}catch(w){u=""}(1==t.length||1==r.length)&&"true"==b&&Number(h)>=Number(e)&&"false"==d&&Ae("auction")?ue!=`mod=auction&qry=${encodeURIComponent(u)}&itemType=0&itemLevel=${m}`?(t=`${v}/game/index.php?mod=auction&qry=${u}&itemType=0&itemLevel=${m}&sh=${O("sh")}`,
window.location=t):await Y.ha(()=>{0<Y.m.length?(y("Bidding to items. Please wait."),Y.C(2,Y.m.length)):(Z("auction",q.AuctionCheck||10),window.location.reload())}):n&&Number(h)>=Number(e)&&"true"==d&&Ae("auction")?ue!=`mod=auction&itemType=0&itemLevel=${m}`?(t=`${v}/game/index.php?mod=auction&itemType=0&itemLevel=${m}&sh=${O("sh")}`,window.location=t):await Y.ha(()=>{0<Y.m.length?(y("Bidding to items. Please wait."),Y.C(2,Y.m.length)):(Z("auction",q.AuctionCheck||10),window.location.reload())}):
(1==t.length||1==r.length)&&"true"==c&&Number(k)>=Number(e)&&"false"==d&&Ae("auctionM")?ue!=`mod=auction&qry=${encodeURIComponent(u)}&itemType=0&ttype=3&itemLevel=${m}`?(t=`${v}/game/index.php?mod=auction&qry=${u}&itemType=0&ttype=3&itemLevel=${m}&sh=${O("sh")}`,window.location=t):await Y.ha(()=>{0<Y.m.length?(y("Bidding to items. Please wait."),Y.C(2,Y.m.length)):(Z("auctionM",q.AuctionCheck||10),window.location.reload())}):("true"===b||"true"===d)&&!n&&Number(h)>=Number(e)&&Ae("auction")?"true"===
d&&1>t.length&&1>r.length?ue!=`mod=auction&itemType=7&itemLevel=${m}`?(t=`${v}/game/index.php?mod=auction&itemType=7&itemLevel=${m}&sh=${O("sh")}`,window.location=t):await Y.ha(()=>{0<Y.m.length?(y("Bidding to items. Please wait."),Y.C(2,Y.m.length)):(Z("auction",q.AuctionCheck||10),window.location.reload())}):("true"===b||"true"===d)&&!n&&Number(h)>=Number(e)&&Ae("auction")&&("true"===d&&"false"===b&&(0<t.length||0<r.length)?ue!=`mod=auction&itemType=7&itemLevel=${m}`?(t=`${v}/game/index.php?mod=auction&itemType=7&itemLevel=${m}&sh=${O("sh")}`,
window.location=t):await Y.ha(()=>{0<Y.m.length?(y("Bidding to items. Please wait."),Y.C(2,Y.m.length)):(Z("auction",q.AuctionCheck||10),window.location.reload())}):"true"===d&&(0<t.length||0<r.length)?ue!=`mod=auction&itemType=0&itemLevel=${m}`?(t=`${v}/game/index.php?mod=auction&itemType=0&itemLevel=${m}&sh=${O("sh")}`,window.location=t):await Y.ha(()=>{0<Y.m.length?(y("Bidding to items. Please wait."),Y.C(2,Y.m.length)):(Z("auction",q.AuctionCheck||10),window.location.reload())}):ue!=`mod=auction&itemType=0&itemLevel=${m}`&&
0<t.length||ue!=`mod=auction&itemType=0&itemLevel=${m}`&&0<r.length?(t=`${v}/game/index.php?mod=auction&itemType=0&itemLevel=${m}&sh=${O("sh")}`,window.location=t):await Y.ha(()=>{0<Y.m.length?(y("Bidding to items. Please wait."),Y.C(2,Y.m.length)):(Z("auction",q.AuctionCheck||10),window.location.reload())})):"true"==c&&k>=e&&(0<t.length||0<r.length)&&Ae("auctionM")?ue!=`mod=auction&itemType=0&ttype=3&itemLevel=${m}`&&0<t.length||ue!=`mod=auction&itemType=0&ttype=3&itemLevel=${m}`&&0<r.length?(t=
`${v}/game/index.php?mod=auction&itemType=0&ttype=3&itemLevel=${m}&sh=${O("sh")}`,window.location=t):await Y.ha(()=>{0<Y.m.length?(y("Bidding to items. Please wait."),Y.C(3,Y.m.length)):(Z("auctionM",q.AuctionCheck||10),window.location.reload())}):n?ue!=`mod=auction&itemType=15&itemLevel=${m}`?(t=`${v}/game/index.php?mod=auction&itemType=15&itemLevel=${m}&sh=${O("sh")}`,window.location=t):await Y.ha(()=>{0<Y.m.length?(y("Bidding to items. Please wait."),Y.C(2,Y.m.length)):(Z("auction",q.AuctionCheck||
10),window.location.reload())}):setTimeout(l,3E3)};l()})},$h(b){const c="true"===localStorage.getItem("AuctionCover");b=b.querySelector("span");if(!b||!b.getAttribute("style"))return!0;b=b.getAttribute("style");return c&&b.includes("green")?!1:!c&&b.includes("green")?!0:b.includes("blue")?!1:!0},async ha(b=!1){for(let d=0,e=this.form;d<e.length;d++){var c=e[d].querySelector(".auction_bid_div");let h=e[d].querySelector(".ui-draggable"),k=c.querySelector("input").value;c=this.$h(c);let m=kb(h),n=$a(h),
l=JSON.parse(localStorage.getItem("equipmentSelection")||"[]"),q=localStorage.getItem("maximumBid"),t=localStorage.getItem("bidFood"),r=parseInt(ib(h).split("-")[0]),u=15==r?parseInt(h.getAttribute("data-tooltip").split(",")[7].match(/\d+/)[0]):0,v=15==r?parseInt(h.getAttribute("data-tooltip").split(",")[9].match(/\d+/)[0]):0,w=15==r?parseInt(h.getAttribute("data-tooltip").split(",")[15].match(/\d+/)[0]):0,z=!1,B="true"===localStorage.getItem("enableMercenarySearch"),G=parseInt(localStorage.getItem("minDexterity"),
10)||0,H=parseInt(localStorage.getItem("minAgility"),10)||0,U=parseInt(localStorage.getItem("minIntelligence"),10)||0,P=!1,va=!1,C,W,Q;Q=localStorage.getItem("ignorePS")||"false";C=JSON.parse(localStorage.getItem("auctionPrefixes")||"[]");W=JSON.parse(localStorage.getItem("auctionSuffixes")||"[]");C.some(ba=>m.toLowerCase().includes(ba.toLowerCase())?P=!0:!1);W.some(ba=>m.toLowerCase().includes(ba.toLowerCase())?va=!0:!1);if("true"===Q)if(P||va)z=!0;else if(P&&va||P&&0===W.length||va&&0===C.length)z=
!0;"string"===typeof n&&(n=[n]);z=z&&0===l.length||z&&l.includes("9999")||z&&l.some(ba=>n.includes(ba))?!0:!1;7==r&&k>V.gold&&(Z("auction",1),Z("auctionM",1),Z("AuctionEmpty",1),Z(""));"false"===t&&7==r&&(z=!1);c&&B&&15==r&&(G&&u>=G||H&&v>=H||U&&w>=U)||c&&Number(k)<Number(q)&&z||c&&"true"===t&&7==r&&Number(k)<Number(q)?this.m.push([{itemLevel:ab(h),itemName:m,basis:ib(h),quality:Pa(h),price:k},k,e[d].getAttribute("action"),{auctionid:e[d].querySelector("input[name=auctionid]").value,qry:e[d].querySelector("input[name=qry]").value,
itemType:e[d].querySelector("input[name=itemType]").value,itemLevel:e[d].querySelector("input[name=itemLevel]").value,itemQuality:e[d].querySelector("input[name=itemQuality]").value,buyouthd:e[d].querySelector("input[name=buyouthd]").value,bid_amount:k,bid:e[d].querySelector("input[name=bid]").value}]):Number(k)>Number(V.gold)&&(Z("auction",5),Z("auctionM",5))}b?b():window.location.reload()},C(b,c,d=0){var e=localStorage.getItem("auctionStatus");const h=localStorage.getItem("auctionMStatus");let k=
Y.m.pop();["0","1","2","3"].includes(e)&&Z("auction",5);["0","1","2","3"].includes(h)&&Z("auctionM",5);k[0].price>V.gold&&Z("AuctionEmpty",1);k[1]<Y.Pe?(Y.Pe-=k[1],jQuery.ajax({type:"POST",url:k[2],data:k[3]}),e=JSON.parse(localStorage.getItem("bidList"))||[],e.push(k[0].itemName),localStorage.setItem("bidList",JSON.stringify(e)),0<Y.m.length?setTimeout(()=>{Y.C(b,--c,++d)},250):window.location.reload()):0<Y.m.length?Y.C(b,--c,++d):(2==b?Z("auction",60):Z("auctionM",60),window.location.reload())}},
da={bag:null,o:null,zj:null,Bi:localStorage.getItem("smeltIgnorePS"),async start(){var b="513";b=(b=localStorage.getItem("smeltTab"))?(513+parseInt(b)).toString():"513";b=document.querySelector(`[data-bag-number="${b}"]`);if("mod=forge&submod=smeltery"!=ue)cg("mod=forge&submod=smeltery");else if(b.classList.contains("current")&&Be()){this.slots=await this.v();const c=this.slots.filter(k=>"closed"===k["forge_slots.state"]);this.gh(this.slots);await this.Zg(this.slots);function d(k){const m=new Set;
return k.filter(n=>{n=n.id;if(m.has(n))return!1;m.add(n);return!0})}const e=JSON.parse(localStorage.getItem("Timers")),h="true"===localStorage.getItem("smelteverything2");b="true"===localStorage.getItem("smeltAnything")&&"true"===localStorage.getItem("smelteverything2")?d([...this.uh(),...this.vh()]):"true"===localStorage.getItem("smeltAnything")?this.uh():"true"===localStorage.getItem("smelteverything2")?this.vh():this.mi();0<b.length?(await Promise.all(b.map(({id:k,slot:m})=>da.zi(m,k))),window.location.reload()):
1>b.length&&1==h?(Z("smelt",e.SmeltingNoItem||10),window.location.reload()):0<c.length?await this.pickItems():0<c.length&&"true"===localStorage.getItem("smelteverything2")?da.move():(Z("smelt",e.SmeltingNoItem||10),window.location.reload())}else b.click(),Be(()=>this.start())},yi(b,c){b=JSON.parse(localStorage.getItem("smeltedItems"))||[];b.push(c);localStorage.setItem("smeltedItems",JSON.stringify(b))},mi(){const b=this.slots.filter(e=>"closed"===e["forge_slots.state"]).map(e=>e["forge_slots.slot"]);
var c=Array.from(document.querySelectorAll("#inv .ui-draggable")).filter(e=>vb(e));let d=[];for(let e of c)da.Kg(e)&&(c=b.shift(),void 0!==c&&d.push({id:e.getAttribute("data-item-id"),slot:c}));return d},uh(){const b=[2,4,8,1,256,512,48,1024],c=this.slots.filter(d=>"closed"===d["forge_slots.state"]).map(d=>d["forge_slots.slot"]);return Array.from(document.querySelectorAll("#inv .ui-draggable")).filter(d=>{if(!vb(d)||!da.Kg(d))return!1;d=d.getAttribute("data-content-type");return b.includes(Number(d))}).map(d=>
({id:d.getAttribute("data-item-id"),slot:c.shift()})).filter(({slot:d})=>void 0!==d)},vh(){const b=[2,4,8,1,256,512,48,1024],c=this.slots.filter(d=>"closed"===d["forge_slots.state"]).map(d=>d["forge_slots.slot"]);return Array.from(document.querySelectorAll("#inv .ui-draggable")).filter(d=>{if(!vb(d))return!1;d=d.getAttribute("data-content-type");return b.includes(Number(d))}).map(d=>({id:d.getAttribute("data-item-id"),slot:c.shift()})).filter(({slot:d})=>void 0!==d)},async zi(b,c){try{const d=await jQuery.post(D({}),
{mod:"forge",submod:"getSmeltingPreview",mode:"smelting",slot:b,iid:c,amount:1,a:(new Date).getTime(),sh:O("sh")}),e=JSON.parse(d).slots[b].formula.rent[2],h=kb(document.querySelector(`[data-item-id='${c}']`));if(e<eg().gold)jQuery.post(D({mod:"forge",submod:"rent",mode:"smelting",slot:b,rent:2,item:c,a:(new Date).getTime(),sh:O("sh")})),this.yi(c,h),y("Auto Smelted Item",h),await new Promise(k=>setTimeout(k,500)),location.reload();else{const k=JSON.parse(localStorage.getItem("Timers"));Z("smelt",
k.Smelting||10);window.location.reload()}}catch(d){location.reload()}},async Ai(b,c){var d=await jQuery.post(D({}),{mod:"forge",submod:"getSmeltingPreview",mode:"smelting",slot:b,iid:c,amount:1,a:(new Date).getTime(),sh:O("sh")});d=JSON.parse(d).slots[b].formula.rent[2];d<eg().gold?jQuery.post(D({mod:"forge",submod:"rent",mode:"smelting",slot:b,rent:2,item:c,a:(new Date).getTime(),sh:O("sh")})).done(function(){var e=JSON.parse(localStorage.getItem("smeltery_itemList1"));({item:e}=e);y("Smelting Item:"+
e.name);window.location.reload()}).fail(function(){y("Problem with smelting, maybe there is not enough space.");window.location.reload()}):(y("Not enough gold to smelt. Required Gold:"+d),b=JSON.parse(localStorage.getItem("Timers")),Z("smelt",b.SmeltingNoGold||5),window.location.reload())},init:function(){jQuery("#inv").after('\n                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">\n\n                        <fieldset id="gladbot-workbench" style="\n                        padding: 10px;\n                        margin: 10px 20px;\n                        text-align: center;\n                        display: flex;\n                        flex-direction: row;\n                        flex-wrap: wrap;\n                        align-items: center;\n                        justify-content: space-around;\n                        border: 2px solid darkred;\n                        border-radius: 8px;\n                        width: 235px;">\n                        <legend style="\n                            padding: 0 10px;\n                            color: darkred;\n                            font-weight: bold;">Gladbot Smeltery Area</legend>\n                        </fieldset>');
da.Xg("#gladbot-workbench",'<i class="fa fa-fire"></i>',"gladbot-button gladbot-smelter-button-smelt gladbot-stylish-button").mouseup(b=>{da.mh(b)});da.Xg("#gladbot-workbench","RESET","gladbot-button gladbot-smelter-button-reset gladbot-stylish-button").mouseup(()=>{localStorage.setItem("activateSmeltMode",!1)});jQuery("#gladbot-workbench").append('<p style="font-size: 0.8em; color: darkred;">Right click to reset smelt mode.</p>')},mh:async function(){jQuery(document.body).addClass("fire-smelt-cursor");
jQuery(document.body).on("contextmenu",function(b){b.preventDefault();jQuery(document.body).removeClass("fire-smelt-cursor");jQuery(document.body).off("contextmenu");localStorage.setItem("activateSmeltMode",!1)});this.slots=await this.v();localStorage.setItem("activateSmeltMode",!0);jQuery("#inv .ui-draggable, #char .ui-draggable").off("mouseup.smelt").on("mouseup.smelt",async b=>{var c=b.target,d=c.className.match(/item-i-(\d+)-\d+/)[1];(b=this.slots.filter(e=>"closed"===e["forge_slots.state"])[0])?
(d={item:{type:d,name:kb(c),quality:Pa(c),slot:b,container:c.getAttribute("data-container-number")},spot:{bag:c.getAttribute("data-container-number"),x:c.getAttribute("data-position-x"),y:c.getAttribute("data-position-y")}},localStorage.setItem("smeltery_itemList1",JSON.stringify(d)),jQuery(c).parents("#char").length?setTimeout(()=>{},1E3):(this.slots=await this.v(),await this.Zg(this.slots),this.slots.filter(e=>"closed"===e["forge_slots.state"]).map(e=>e["forge_slots.slot"]),c=c.getAttribute("data-item-id"),
d&&await da.Ai(b["forge_slots.slot"],c))):console.log("No free slot available")})},async v(){try{const b=await jQuery.post(D({}),{mod:"forge",submod:"getSmeltingPreview",mode:"smelting",a:(new Date).getTime(),sh:O("sh")});return JSON.parse(b).slots}catch(b){console.log(b)}},async gh(b){if("undefined"!==typeof b){let d=[];for(var c=0;c<b.length;c++)"undefined"!==typeof b[c]["forge_slots.uend"]&&d.push([1E3*b[c]["forge_slots.uend"],b[c].item.name]);localStorage.setItem("smelt.timer",JSON.stringify(d))}},
async Zg(b){Array.isArray(b)&&(b=b.filter(c=>"finished-succeeded"===c.state).map(c=>c["forge_slots.slot"]),0<b.length&&(await Promise.all(b.map(c=>da.xi(c))),await this.v()))},async xi(b){return jQuery.post("ajax.php",{mod:"forge",submod:"storeSmelted",mode:"smelting",slot:b,a:(new Date).getTime(),sh:O("sh")})},ph(){var b=localStorage.getItem("smelt.timer");if(!b)return!0;b=JSON.parse(b).sort((c,d)=>c[0]-d[0]);return 6>b.length||b[0][0]+6E4<(new Date).getTime()},async pickItems(){da.bag=document.getElementById("inv");
da.o=[];var b="true"===localStorage.getItem("smeltRed");var c="true"===localStorage.getItem("smeltOrange"),d="true"===localStorage.getItem("smeltPurple"),e="true"===localStorage.getItem("smeltBlue");const h="true"===localStorage.getItem("smeltGreen");b=c||d||e||b||h?h?"0":e?"1":d?"2":c?"3":b?"4":"0":"0";c="true"===localStorage.getItem("smeltAnything");d=JSON.parse(localStorage.getItem("prefixes"))||[];e=JSON.parse(localStorage.getItem("suffixes"))||[];d=d.concat(e);if(c){var k=await jQuery.get(za({mod:"packages",
f:"0",fq:b,qry:"",page:0,sh:O("sh")}));k=(k=await jQuery(k).find(".paging_right_full")[1])?k.href.match(/\d+$/)[0]:1;k=parseInt(k);try{var m=5>k?1:Math.ceil(.1*k);y("Looking for items to smelt");a:for(b=0;b<k;b+=m){c=[];for(d=b;d<b+m&&d<k;d++)if(await da.li(d+1),1<=da.o.length&&c.push(...da.o),3<=c.length){y(`Found ${c.length} items to smelt.`);break a}if(1<c.length){y(`Found ${c.length} items to smelt.`);break}}if(0<da.o.length)await da.move();else{var n=JSON.parse(localStorage.getItem("Timers"));
Z("smelt",n.SmeltingNoItem||15);window.location.reload()}}catch(l){m=JSON.parse(localStorage.getItem("Timers")),Z("smelt",m.Smelting||10),window.location.reload()}}else{y("SMELT: Looking for items to smelt.");for(k of d)if(m=await jQuery.get(za({mod:"packages",f:"0",fq:b,qry:Qb(k),page:0,sh:O("sh")})),m=jQuery(m).find(".packageItem"),0<m.length)for(n=0;n<m.length;n++)c=m[n].querySelector("input").value,d=m[n].querySelector(".ui-draggable"),da.Kg(d)&&da.o.push({item:d,id:c});0<da.o.length?await da.move():
(m=JSON.parse(localStorage.getItem("Timers")),Z("smelt",m.SmeltingNoItem||15),window.location.reload())}},async li(b){try{const d="true"===localStorage.getItem("smeltRed"),e="true"===localStorage.getItem("smeltOrange"),h="true"===localStorage.getItem("smeltPurple"),k="true"===localStorage.getItem("smeltBlue"),m="true"===localStorage.getItem("smeltGreen"),n=await jQuery.get(za({mod:"packages",f:"0",fq:m||e||h||k||d?m?"0":k?"1":h?"2":e?"3":d?"4":"0":"0",qry:"",page:b,sh:O("sh")}));var c=jQuery(n).find(".packageItem");
if(0<c.length)for(b=0;b<c.length;b++){const l=c[b].querySelector("input").value,q=c[b].querySelector(".ui-draggable");da.Kg(q)&&da.o.push({item:q,id:l})}return!0}catch(d){return!1}},async mj(){let b="0";const c="true"===localStorage.getItem("smeltRed"),d="true"===localStorage.getItem("smeltOrange"),e="true"===localStorage.getItem("smeltPurple"),h="true"===localStorage.getItem("smeltBlue"),k="true"===localStorage.getItem("smeltGreen");b=!k||d||e||h||c?k?"0":h?"1":e?"2":d?"3":c?"4":"0":"0";return new Promise(m=>
{jQuery.get(za({mod:"packages",f:"0",fq:b,qry:"",page:1,sh:O("sh")}),n=>{n=jQuery(n).find(".packageItem");var l=!1;if(0<n.length)for(let q=0;q<n.length;q++)if(da.Kg(n[q].querySelector(".ui-draggable"))){l=!0;m(!0);break}l||m(!1)})})},Kg(b){const c=kb(b),d=vb(b),e="true"===localStorage.getItem("smeltAnything"),h=JSON.parse(localStorage.getItem("equipmentSelectionSmelt")||"[]"),k="true"===localStorage.getItem("smeltOrange"),m="true"===localStorage.getItem("smeltBlue"),n="true"===localStorage.getItem("smeltPurple"),
l="true"===localStorage.getItem("smeltGreen"),q="true"===localStorage.getItem("smeltRed");let t=$a(b);b=parseInt(Pa(b));let r=!1,u=!0,v=!1,w=!1,z=!1,B=JSON.parse(localStorage.getItem("prefixes"))||[],G=JSON.parse(localStorage.getItem("suffixes"))||[],H=JSON.parse(localStorage.getItem("Ignoredprefixes"))||[],U=JSON.parse(localStorage.getItem("Ignoredsuffixes"))||[];z=q&&4===b?!0:k&&3===b?!0:l&&0===b?!0:m&&1===b?!0:n&&2===b?!0:!1;e||(B.forEach(P=>{c.toLowerCase().includes(P.toLowerCase())&&(v=!0)}),
G.forEach(P=>{c.toLowerCase().includes(P.toLowerCase())&&(w=!0)}),r=v&&w||v&&0===G.length||w&&0===B.length);if("true"==da.Bi){if(v||w)r=!0}else if(v&&w||v&&0===G.length||w&&0===B.length)r=!0;"string"===typeof t&&(t=[t]);u=0===h.length||h.includes("9999")||h.some(P=>t.includes(P))?!1:!0;r&&H.forEach(P=>{c.toLowerCase().includes(P.toLowerCase())&&(u=!0)});r&&U.forEach(P=>{c.toLowerCase().includes(P.toLowerCase())&&(u=!0)});return d&&!u&&z&&(r||e)},Xg:function(b,c,d){c=jQuery("<button>").html(c).addClass(d);
jQuery(b).append(c);return c},async move(){var b="513";b=(b=localStorage.getItem("smeltTab"))?(513+parseInt(b)).toString():"513";try{let e=da.o.pop();var c=Sb(da.bag);let h=Tb(5,8,c),k=parseInt(e.item.getAttribute("data-measurement-x")),m=parseInt(e.item.getAttribute("data-measurement-y")),n=Zb(m,k,h);c=b;if(n){await jQuery.post(D({mod:"inventory",submod:"move",from:"-"+e.id,fromX:"1",fromY:"1",to:c,toX:n.x+1,toY:n.y+1,amount:"1"}),{a:(new Date).getTime(),sh:O("sh")});var d=jQuery(e.item).css({left:32*
n.x,top:32*n.y});da.bag.appendChild(d[0]);0<da.o.length?(localStorage.setItem("smeltCheck.timeOut",0),await new Promise(l=>setTimeout(l,500)),await this.move()):window.location.reload()}else 0<da.o.length?(localStorage.setItem("smeltCheck.timeOut",0),await new Promise(l=>setTimeout(l,500)),await this.move()):window.location.reload()}catch(e){console.error("Error in smelt.move:",e),window.location.reload()}}};window.location.href.includes("/index.php?mod=forge&submod=smeltery")&&(da.init(),da.slots=
await da.v(),await da.gh(da.slots),"true"==localStorage.getItem("activateSmeltMode")&&da.mh());try{window.location.href.includes("/index.php?mod=location&submod=serverQuest")&&localStorage.setItem("eventPoints_",parseInt(document.querySelectorAll(".section-header p")[1].innerText.match(/\d+/g)[0]))}catch{localStorage.setItem("doEventExpedition",!1);cg("mod=overview");return}try{if(window.location.href.includes("/index.php?mod=work")){let b=document.querySelector('span[data-ticker-type="countdown"]');
if(b){let c=b.innerText.split(":"),d=6E4*(60*parseInt(c[0])+parseInt(c[1]));await new Promise(e=>setTimeout(e,d))}}}catch{cg("mod=overview");return}const kh={async start(){const b=await Promise.all([new Promise(c=>{jQuery.get(za({mod:"overview",doll:"1",sh:O("sh")}),d=>{d=jQuery(d).find(".avatar")[0].classList.contains("avatar_costume_part");c(!d)})}),new Promise(c=>{jQuery.get(za({mod:"overview",doll:"2",sh:O("sh")}),d=>{d=jQuery(d).find(".avatar")[0].classList.contains("avatar_costume_part");c(!d)})})]);
b[0]&&Z("CheckDolls",1);b[1]&&Z("CheckDolls",1)}},ke={async check(b=!1){return new Promise(async c=>{await new Promise(d=>{jQuery.get(za({mod:"overview",doll:"1",sh:O("sh")}),e=>{localStorage.setItem("arenaCostumeEquiped",jQuery(e).find(".avatar")[0].classList.contains("avatar_costume_part"));d()})});b&&await b();c()})},async start(){if("mod=costumes"!=ue)cg("mod=costumes");else{let d=localStorage.getItem("costumeUnderworld");const e="true"===localStorage.getItem("wearUnderworld");var b=!1;let h=
document.querySelectorAll(".costumes_box"),k=!1,m;b=["9","10","11"];for(var c of b)try{const n=h[Number(c)-1].querySelector(".costumes_button_single").getAttribute("onclick");if(n&&!n.includes("dropCostume")){k=!0;break}}catch(n){}0<h.length&&(c=localStorage.getItem("costumeUnderworld"),null!==c&&(c=Number(c)-1,0<=c&&c<h.length&&(c=h[c].querySelector(".costumes_button_single")||h[c].querySelector(".costumes_button_active_single"))&&(m=c.getAttribute("onclick"))));["9","10","11"].includes(d)&&m&&m.includes("dropCostume")?
(b=!0,Z("CheckDolls",30)):b=!1;b?(Z("CheckDolls",60),window.location.reload()):await this.check(async()=>{let n=[];if(e){let l=0;["9","10","11"].forEach((q,t,r)=>{try{const u=h[Number(q)-1].querySelector(".costumes_button_single").getAttribute("onclick");u&&!u.includes("dropCostume")&&(k=!0,("9"==q&&2>=Number(eg().Hg)||"10"==q&&2>=Number(eg().fi)||"11"==q)&&n.push({doll:1,setId:Number(q)+2}))}catch(u){l++}t===r.length-1&&l===r.length&&y("Checking costume availability.")})}try{if(!k){const l=h[Number(localStorage.getItem("costumeBasic")-
1)].querySelector("#costumes_button_left input"),q=l.getAttribute("onclick");l.classList.contains("disabled")||q.includes("dropCostume")||n.push({doll:1,setId:localStorage.getItem("costumeBasic")});if(8>=Number(localStorage.getItem("costumeDungeon"))){const t=h[Number(localStorage.getItem("costumeDungeon")-1)].querySelector("#costumes_button_right input"),r=t.getAttribute("onclick");t.classList.contains("disabled")||r.includes("dropCostume")||n.push({doll:2,setId:localStorage.getItem("costumeDungeon")})}}if(0<
n.length){let {doll:l,setId:q}={...n.pop()};(await fetch(za({mod:"costumes",submod:"changeCostume",doll:l,setId:q,sh:O("sh")}))).ok&&0<n.length&&9>Number(q)&&await ke.rh(n);Z("CheckDolls",60)}else Z("CheckDolls",30);window.location.reload()}catch{Z("CheckDolls",30),window.location.reload(),y("Problem occurred while wearing a costume.")}})}},async rh(b,c=!1){let {doll:d,setId:e}={...b.pop()};await new Promise(h=>{jQuery.get(za({mod:"costumes",submod:"changeCostume",doll:d,setId:e,sh:O("sh")}),()=>
{0<b.length?ke.rh(b,c):(Z("CheckDolls",30),h())})})}};ca<new Date&&aa!=qa&&Ua();if("true"===localStorage.getItem("GuildEnable")&&Ae("GuildDonate")){const b=parseInt(localStorage.getItem("GuildDonateMore")||0,10),c=parseInt(localStorage.getItem("GuildDonateLess")||0,10),d=parseInt(localStorage.getItem("GuildDonateAmount")||0,10);if(V.gold>=b&&V.gold<=c){await jQuery.post(za({mod:"guildBankingHouse",submod:"donate",sh:O("sh")}),{donation:d,doDonation:"Donate"});y(`Donated ${d}.`);const e=JSON.parse(localStorage.getItem("Timers"));
Z("GuildDonate",e.GuildDonate||5)}}"true"===localStorage.getItem("throwDice")&&Ae("throwDice")&&"true"==sessionStorage.getItem("autoGoActive")&&(jQuery.post(window.location.protocol+"//"+window.location.host+"/game/ajax/craps.php",{type:"1",a:(new Date).getTime(),sh:O("sh")}),y("Threw the Dice!"),Z("throwDice",10));if(window.location.href.includes("index.php?mod=location&loc=")){let b=0,c=!1;const d=()=>{fetch(window.location.href).then(l=>l.text()).then(l=>{l=(new DOMParser).parseFromString(l,"text/html");
if(l=Array.from(l.querySelectorAll("img[data-tooltip]")).find(q=>{const t=q.getAttribute("data-tooltip").toLowerCase();return["owned","sahip","propri","posiad","posees"].some(r=>t.includes(r))}))l=(l=l.getAttribute("data-tooltip").match(/(Owned|Sahip[^:]*|Propri[^:]*|Posiad[^:]*|Posees[^:]*): (\d+)/i))?parseInt(l[2]):100,document.getElementById("hourglassesLeft").textContent=l,localStorage.setItem("hourglassesLeft",l)}).catch(()=>{y("No hourglass left")})},e=(l,q,t,r,u,v)=>{function w(P){return new Promise((va,
C)=>{fetch(`${B}/game/index.php?mod=premium&submod=inventory&sh=${G}`).then(W=>W.text()).then(W=>{if(W=(new DOMParser).parseFromString(W,"text/html").querySelector(`div.premiumfeature_picture > img[src*="${P}"] + .premiumfeature_tokencount`))return W.textContent.trim();throw Error("Token value not found!");}).then(W=>fetch(`${B}/game/index.php?mod=premium&submod=inventoryActivate&feature=${"5fd403b4efa8ea7bc3ca5a852bfce9"===P?18:5}&token=${W}&sh=${G}`)).then(()=>{va()}).catch(W=>{C(W)})})}if(!c||
b>=v)k();else{var z=new URL(window.location.href),B=z.origin,G=z.searchParams.get("sh")||"",H=document.getElementById("useLifePotion").checked;r=document.getElementById("useMobilizationExp2").checked;var U=parseInt(document.getElementById("healPercentage2").value);z=new URLSearchParams({mod:"location",submod:"attack",location:l,stage:q,premium:t?1:0,a:Date.now(),sh:G});fetch(`${B}/game/ajax.php?${z.toString()}`).then(P=>P.text()).then(()=>{(H||r)&&fetch(window.location.href).then(P=>P.text()).then(async P=>
{P=(new DOMParser).parseFromString(P,"text/html");if(H){const va=parseInt(P.getElementById("header_values_hp_percent").textContent);if(Number(va)<Number(U))return await w("5fd403b4efa8ea7bc3ca5a852bfce9")}if(r&&(P=P.getElementById("expeditionpoints_value_point").innerText,0===Number(parseInt(P.replace("%","")))))return await w("c9ce614bbc67a9e85aa0ee87cf2bb7")}).then(async()=>{b++;b>=Number(v)?(k(),window.location.reload()):(document.getElementById("attacksPerformed").textContent=b,localStorage.setItem("attackCount",
b),await d(),setTimeout(async()=>{await e(l,q,t,r,u,v)},1E3*u))}).catch(()=>{})})}},h=async()=>{c=!0;document.getElementById("startExpedition").style.display="none";document.getElementById("stopExpedition").style.display="block";const l=(new URLSearchParams(window.location.search)).get("loc"),q=document.getElementById("monsterSelection").value,t=document.getElementById("useHourglass").checked,r=document.getElementById("attackInterval").value,u=document.getElementById("numberOfAttacks").value;await e(l,
q,t,useMobilizationExp2,r,u)},k=()=>{c=!1;document.getElementById("startExpedition").style.display="block";document.getElementById("stopExpedition").style.display="none"},m=()=>{var l=document.createElement("div");l.innerHTML=`
    <div class="expedition-settings">
      <h2 class="section-header">Expedition Settings (Click to minimize)</h2>
      <div class="expedition-settings-content">
        <div>
            <label>Select Monster: </label>
            <select id="monsterSelection">
            <option value="1">Monster 1</option>
            <option value="2">Monster 2</option>
            <option value="3">Monster 3</option>
            <option value="4">Monster 4</option>
            </select>
            <br>
            <label>Use Hourglass/Ruby?: </label>
            <input type="checkbox" id="useHourglass">
            <br>
            <label>Use Mobilization?: </label>
            <input type="checkbox" id="useMobilizationExp2">
            <br>
            <label>Use LifePotion: </label>
            <input type="checkbox" id="useLifePotion">
            <br>
            <label>Heal Percentage (%): </label>
            <input type="number" id="healPercentage2" value="25" min="1" max="99">
            <br>
            <label>Number of Attacks: </label>
            <input type="number" id="numberOfAttacks" value="${document.getElementById("expeditionpoints_value_point").textContent||"0"}" min="1" max="36">
            <br>
            <label>Attack Interval (seconds): </label>
            <input type="number" id="attackInterval" value="5" min="1" max="60">
            <br>
            <button id="startExpedition" class="expedition-button">Start Expedition</button>
            <button id="resetAttacks" class="expedition-button reset-button">Reset Attacks</button>
            <button id="stopExpedition" class="expedition-button" style="display: none;">Stop Expedition</button>
            <div id="attackLog"></div>
        </div>
      </div>
    </div>
  `;var q=document.querySelector(".section-header");q.parentNode.insertBefore(l,q);l.querySelector(".section-header").addEventListener("click",()=>{const t=document.querySelector(".expedition-settings-content"),r="none"===t.style.display;t.style.display=r?"block":"none";localStorage.setItem("expeditionSettingsHidden",r?"false":"true")});l=l.querySelector(".expedition-settings-content");q="true"===localStorage.getItem("expeditionSettingsHidden");l.style.display=q?"none":"block";document.getElementById("resetAttacks").addEventListener("click",
()=>{b=0;localStorage.removeItem("attackCount");document.getElementById("attacksPerformed").textContent=b});document.getElementById("startExpedition").addEventListener("click",h);document.getElementById("stopExpedition").addEventListener("click",k);b=parseInt(localStorage.getItem("attackCount")||"0");document.getElementById("attackLog").innerHTML=`
  Attacks performed: <span id="attacksPerformed">${b}</span><br>
  Hourglasses left: <span id="hourglassesLeft">${localStorage.getItem("hourglassesLeft")||"0"}</span><br>
  <span class="span-new">Note: It uses lifepotions to heal, not food.</span><br>
  <span class="span-new">Note: If attacks stop prematurely, try 'Reset Attacks'.</span>

`};if(window.location.href.includes("index.php?mod=location&loc=")&&!window.location.href.includes("location&loc=nile_bank")&&!window.location.href.includes("index.php?mod=location&loc=false")&&!window.location.href.includes("location&loc=desert")){const l=document.querySelector("#wrapper_game.underworld");(JSON.parse(localStorage.getItem("underworld"))||{}).isUnderworld||l||m()}const n=document.createElement("style");n.innerHTML="\n  .expedition-settings {\n    border: 2px solid #4CAF50;\n    padding: 10px;\n    margin: 10px 0;\n    background-color: #d3c195;\n    border-radius: 5px;\n  }\n  .expedition-button {\n    border: none;\n    padding: 10px 20px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 10px;\n    background-color: #a09270;\n    cursor: pointer;\n    border-radius: 5px;\n  }\n\n  .reset-button {\n    background-color: #f44336; /* Red color */\n  }\n\n  .expedition-button:disabled {\n    background-color: #ccc;\n    cursor: not-allowed;\n  }\n";
document.head.appendChild(n)}if(window.location.href.includes("/index.php?mod=inventory&sub")&&document.querySelector('td[valign="top"]')){let b=!0;(function(){let l=`
                        <section class="merchant-settings" style="display: block;">
                        <div class="actions">
                            <button class="awesome-button" type="button">${g.qf}</button><button class="awesome-button" type="button">${g.rf}</button>
                            <button class="awesome-button" type="button">Buy All</button><button class="awesome-button" type="button">Buy 10</button>
                        </div>
                        <ul>
                            <li><input type="checkbox" id="chkWeapons"><label for="chkWeapons">${g.T}</label></li>
                            <li><input type="checkbox" id="chkShields"><label for="chkShields">${g.R}</label></li>
                            <li><input type="checkbox" id="chkChestArmour"><label for="chkChestArmour">${g.J}</label></li>
                            <li><input type="checkbox" id="chkHelmets"><label for="chkHelmets">${g.L}</label></li>
                            <li><input type="checkbox" id="chkGloves"><label for="chkGloves">${g.K}</label></li>
                            <li><input type="checkbox" id="chkShoes"><label for="chkShoes">${g.S}</label></li>
                            <li><input type="checkbox" id="chkRings"><label for="chkRings">${g.P}</label></li>
                            <li><input type="checkbox" id="chkAmulets"><label for="chkAmulets">${g.I}</label></li>
                            <li><input type="checkbox" id="chkUsable"><label for="chkUsable">${g.xe}</label></li>
                            <li><input type="checkbox" id="chkUpgrades"><label for="chkUpgrades">${g.we}</label></li>
                            <li><input type="checkbox" id="chkRecipes"><label for="chkRecipes">${g.pd}</label></li>
                            <li><input type="checkbox" id="chkMercenary"><label for="chkMercenary">${g.Mc}</label></li>
                            <li><input type="checkbox" id="chkScroll"><label for="chkScroll">Scroll</label></li>
                            <li><input type="checkbox" id="chkReinforcements"><label for="chkReinforcements">${g.rd}</label></li>
                        </ul>
                        </section>
                        `;document.getElementById("inv").insertAdjacentHTML("afterend",l)})();async function c(){if(b){var l=Array.from(document.querySelectorAll("#inv .ui-draggable")).filter(q=>{q=q.getAttribute("data-content-type");if(document.getElementById("chkWeapons").checked&&"2"==q||document.getElementById("chkShields").checked&&"4"==q||document.getElementById("chkChestArmour").checked&&"8"==q||document.getElementById("chkHelmets").checked&&"1"==q||document.getElementById("chkGloves").checked&&
"256"==q||document.getElementById("chkShoes").checked&&"512"==q||document.getElementById("chkRings").checked&&"48"==q||document.getElementById("chkAmulets").checked&&"1024"==q||document.getElementById("chkUsable").checked&&"4096"==q||document.getElementById("chkUpgrades").checked&&"4096"==q||document.getElementById("chkRecipes").checked&&"8192"==q||document.getElementById("chkMercenary").checked&&"16384"==q||document.getElementById("chkScroll").checked&&"64"==q||document.getElementById("chkReinforcements").checked&&
"4096"==q)return!0;if(b)return!1});for(let q=0;q<l.length&&b;q++)await new Promise(t=>setTimeout(t,200)),Aa(l[q],"shop")}}async function d(){if(b){var l=document.querySelectorAll("#inv .ui-draggable");for(let q=0;q<l.length;q++)await new Promise(t=>setTimeout(t,200)),Aa(l[q],"shop")}}async function e(){if(b){var l=document.querySelectorAll("#shop .ui-draggable");for(let q=0;q<l.length;q++)await new Promise(t=>setTimeout(t,200)),Aa(l[q],"inv")}}async function h(){if(b){var l=document.querySelectorAll("#shop .ui-draggable");
for(let q=0;10>q;q++)await new Promise(t=>setTimeout(t,200)),Aa(l[q],"inv")}}let k=document.querySelector(".actions .awesome-button:nth-child(2)"),m=document.querySelector(".actions .awesome-button:nth-child(3)"),n=document.querySelector(".actions .awesome-button:nth-child(4");document.querySelector(".actions .awesome-button:nth-child(1)").addEventListener("click",async()=>{b=!0;await new Promise(l=>setTimeout(l,500));d()});k.addEventListener("click",async()=>{b=!0;await new Promise(l=>setTimeout(l,
500));c()});m.addEventListener("click",async()=>{await new Promise(l=>setTimeout(l,500));e()});n.addEventListener("click",async()=>{await new Promise(l=>setTimeout(l,500));h()})}if(window.location.href.includes("/index.php?mod=player&p")||window.location.href.includes("/index.php?mod=player&doll"))if(he=document.querySelector(".playername.ellipsis")||document.querySelector(".playername_achievement.ellipsis"),ob=he.textContent.trim(),2<ob.length){ie=document.getElementById("char");function b(c,d,e,
h){var k=document.createElement("a");k.className="gladbot-button gladbot-"+c;k.textContent=d;k.setAttribute("data-tooltip",e);ie.appendChild(k);(JSON.parse(localStorage.getItem(h))||[]).includes(ob)&&(k.classList.add("added"),k.setAttribute("data-tooltip","Remove from "+("autoAttackList"===h?"Arena":"Circus")));k.addEventListener("click",function(){var m=ob,n=JSON.parse(localStorage.getItem(h))||[],l=n.indexOf(m);-1!==l?(n.splice(l,1),k.classList.remove("added"),k.setAttribute("data-tooltip","Add to "+
("autoAttackList"===h?"Arena":"Circus"))):(n.push(m),k.classList.add("added"),k.setAttribute("data-tooltip","Remove from "+("autoAttackList"===h?"Arena":"Circus")));localStorage.setItem(h,JSON.stringify(n))})}b("arena","A","GladB: Add to Arena List","autoAttackList");b("circus","C","GladB: Add to Circus List","autoAttackCircusList")}"true"==localStorage.getItem("pauseBotEnable")&&Ae("pauseBot")&&(sessionStorage.setItem("autoGoActive","false"),localStorage.setItem("pauseBotEnable","false"),alert("Bot has been paused!"),
window.location.reload());1==ua&&Ae("storeForgeResources")&&Vg();!0===ua&&Ae("Training")&&"true"==localStorage.getItem("trainEnable")&&Xg()&&Wg();"true"===sessionStorage.getItem("autoGoActive")&&Va.href.includes("submod=showCombatReport")&&Yg();if("true"===localStorage.getItem("HighlightUnderworldItems")){var lh=[171,43,80,168,167,159,166,176,164,157,181,173,156,162,182,175,183,180,178,177,158,179,174,172,155,169,161,163,165],mh=[247,270,202,243,242,279,254,274,256,245,250,268,244,281,257,258,284,
275,269,283,282,272,194,259,261,241,166,266,246,248,277,263,278,276,289,262,280,286,267,271,252,255,288,260,264,265];function b(d){d.querySelectorAll("div[data-basis]").forEach(e=>{var h=e.getAttribute("data-basis"),k=e.getAttribute("data-hash");e.getAttribute("data-level");var m;if(m=null!=h)h=parseInt(h.split("-")[0]),[1,2,3,4,5,6,8,9,20].includes(h)?(k=k.split("-"),h=parseInt(k[6],36),m=-1<lh.indexOf(parseInt(k[5],36))||-1<mh.indexOf(h)):m=!1;m&&(e.style.boxShadow="0 0 0.1px 2px red")})}b(document);
const c=new MutationObserver(d=>{d.forEach(e=>{e.addedNodes&&e.addedNodes.forEach(h=>{1===h.nodeType&&b(h)})});c.disconnect()});c.observe(document.body,{childList:!0,subtree:!0});document.querySelectorAll(".awesome-tabs").forEach(d=>{d.addEventListener("click",()=>{setTimeout(()=>{b(document)},500)})})}if("true"==localStorage.getItem("AutoAuction")){const b=JSON.parse(localStorage.getItem("searchTerms")||"[]"),c=JSON.parse(localStorage.getItem("SearchTypes")||"[]"),d=JSON.parse(localStorage.getItem("Timers")),
e=new DOMParser;function h(l,q,t){let r=[],u=[];Array.from(l).forEach(v=>{const w=v.getAttribute("data-tooltip");var z=v.getAttribute("data-content-type");const B=v.getAttribute("data-quality"),G=q.some(H=>ee(w).toLowerCase().includes(H.toLowerCase()));z=t.includes("9999")||t.includes(z);"2"==B||"3"==B?u.push(v):G&&z&&r.push(v)});return{Ci:r,Ei:u}}if(Ae("ShopSearch")){const l=await Ie();let q=[],t=[];for(const v of l){const w=h(v.querySelectorAll("#shop .ui-draggable"),b,c);q=q.concat(w.Ci);t=t.concat(w.Ei)}const r=
q.map(v=>v.outerHTML);localStorage.setItem("MatchingShopItems",JSON.stringify(r));const u=t.map(v=>v.outerHTML);localStorage.setItem("UniqueShopResults",JSON.stringify(u));Z("ShopSearch",d.SearchTimer||5)}if(Ae("AuctionSearch")){const l=await Lf(),q=await Lf(3),t=v=>Array.from(v.querySelectorAll('#auction_table [class^="item-i-"]')).filter(w=>{const z=w.getAttribute("data-tooltip");var B=w.getAttribute("data-content-type");w=b.some(G=>ee(z).toLowerCase().includes(G.toLowerCase()));B=c.includes("9999")||
c.includes(B);return w&&B}),r=t(l);localStorage.setItem("MatchingAuctionItems",JSON.stringify(r.map(v=>v.outerHTML)));const u=t(q);localStorage.setItem("MatchingMercAuctionItems",JSON.stringify(u.map(v=>v.outerHTML)));Z("AuctionSearch",d.SearchTimer||5)}function k(l,q){const t=document.createElement("div");if(l){const u=document.createElement("h2");u.textContent=l;u.style.cssText="\n                        background-color: rgba(196, 172, 112, 0.8);\n                        color: rgb(51, 51, 51);\n                        margin: 0;\n                        padding: 10px 10px;\n                        border-top-left-radius: 10px;\n                        border-top-right-radius: 10px;\n                    ";
t.appendChild(u)}const r=document.createElement("div");r.style.display="grid";r.style.gridTemplateColumns="repeat(auto-fill, 50px)";r.style.oj="2px";r.style.padding="1px";r.style.overflow="hidden";l=localStorage.getItem(q);(JSON.parse(l)||[]).forEach(u=>{const v=e.parseFromString(u,"text/html").body.firstChild.cloneNode(!0);v.style.left="";v.style.top="";v.style.position="static";u=v.getAttribute("data-tooltip");var w=JSON.parse(u.replace(/&quot;/g,'"'));u=w[0][0][1].split(";")[0];const z=encodeURIComponent(w[0][0][0].split(" ")[0]);
w=new URL(window.location.href);const B=w.origin,G=w.searchParams.get("sh")||"",H=document.createElement("div");H.classList.add("auction_item_div");H.appendChild(v);H.style.display="flex";H.style.justifyContent="center";H.style.alignItems="center";H.style.transform="scale(0.6)";H.style.transition="transform 0.5s";H.style.border="2px solid "+u;"UniqueShopResults"==q?H.style.marginTop="-15px":(H.style.margin="-15px",H.style.marginBottom="-15px");H.addEventListener("mouseover",function(){H.style.transform=
"scale(0.7)"});H.addEventListener("mouseout",function(){H.style.transform="scale(0.6)"});H.addEventListener("click",()=>{var U=v.getAttribute("data-hash");localStorage.setItem("highlightedItemHash",U);U=`${B}/game/index.php?mod=auction&qry=${z}&itemLevel=1&itemType=0&itemQuality=-1&sh=${G}`;"MatchingMercAuctionItems"===q&&(U+="&ttype=3");"MatchingMercAuctionItems"===q&&(U+="&ttype=3");"MatchingShopItems"!==q&&"UniqueShopResults"!==q&&(location.href=U)});r.appendChild(H)});t.appendChild(r);return t}
function m(){const l=document.createElement("div");l.style.cssText="\n              width: 20px;\n              height: 20px;\n              background: linear-gradient(145deg, #f3f4f6, #d1d2d4);\n              cursor: se-resize;\n              position: fixed;\n              right: 5px;\n              bottom: 5px;\n              border-radius: 50%;\n              box-shadow: inset 3px 3px 5px #aaa, inset -3px -3px 5px #fff;\n          ";return l}function n(l,q="search_results"){$(l).draggable({stop:function(w,
z){localStorage.setItem(`${q}_top`,z.position.top);localStorage.setItem(`${q}_left`,z.position.left)}}).resizable({stop:function(w,z){localStorage.setItem(`${q}_width`,z.size.width);localStorage.setItem(`${q}_height`,z.size.height)}});let t=localStorage.getItem(`${q}_top`),r=localStorage.getItem(`${q}_left`),u=localStorage.getItem(`${q}_width`),v=localStorage.getItem(`${q}_height`);t&&r&&(l.style.top=t+"px",l.style.left=r+"px");u&&v&&(l.style.width=u+"px",l.style.height=v+"px")}(function(){var l=
document.querySelector("#search_results");l&&l.remove();(l=document.querySelector("#unique_shop_results"))&&l.remove();l=document.createElement("div");l.setAttribute("id","search_results");l.style.cssText="\n            position: fixed;\n            left: 0;\n            top: 150px;\n            width: 175px;\n            height: 70%;\n            overflow-y: auto;\n            overflow-x: clip; \n            cursor: grab;\n            z-index: 500;\n            border-radius: 8px;\n            box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.3);\n            padding: 15px;\n            font-family: 'Arial', sans-serif;\n            background: rgba(221, 213, 180, 0.8); \n            background-size: cover;\n        ";
var q=m();l.appendChild(q);n(l);q=k("Auction Items:","MatchingAuctionItems");const t=k("Mercenary Items:","MatchingMercAuctionItems"),r=k("Shop Items:","MatchingShopItems");l.appendChild(q);l.appendChild(t);l.appendChild(r);document.body.appendChild(l);l=document.createElement("div");l.setAttribute("id","unique_shop_results");l.style.cssText="\n                position: fixed; /* Use fixed or absolute positioning */\n                top: 36px; /* Y coordinate */\n                left: 4px;\n                width: 190px;\n                height: 110px;\n                overflow-y: hidden;\n                overflow-x: hidden;\n                cursor: grab;\n                background-color: rgba(221, 213, 180, 0.8);\n                border: 1px solid rgb(196, 172, 112);\n                box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px 2px;\n                border-radius: 10px;\n                font-family: Arial, sans-serif;\n                color: rgb(51, 51, 51);\n                transition: height 0.1s ease;\n                z-index: 500;\n            ";
q=document.createElement("h2");q.textContent="Unique Shop Items";q.style.cssText="\n                    background-color: rgba(196, 172, 112, 0.8);\n                    color: rgb(51, 51, 51);\n                    margin: 0;\n                    padding: 10px 10px;\n                    border-top-left-radius: 10px;\n                    border-top-right-radius: 10px;\n                ";l.appendChild(q);q=m();l.appendChild(q);n(l,"unique_shop_results");q=k("","UniqueShopResults");l.appendChild(q);document.body.appendChild(l)})()}if(document.hidden)try{chrome.runtime.sendMessage({Fh:!0,
Yg:"https://raw.githubusercontent.com/fociisoftware/glbt/main/aud.mp3"})}catch(b){console.log("Couldnt play the audio")}const le=(new Date).getTime(),nh=function(b,c){b=Math.ceil(b);c=Math.floor(c);return Math.floor(Math.random()*(c-b+1))+b}(500,1E3);if(!qa!==uc){null!==document.getElementById("blackoutDialogLoginBonus")&&Jb&&!1===Jb.isUnderworld&&setTimeout(function(){document.getElementById("blackoutDialogLoginBonus").getElementsByTagName("input")[0].click()},nh);"true"===localStorage.getItem("activateAuction2")&&
te();var me={nh(b){let c=localStorage.getItem("MarketboughtItems");c?c=JSON.parse(c):c=[];c.push(b);localStorage.setItem("MarketboughtItems",JSON.stringify(c))},Lj(){var b=localStorage.getItem("boughtItems");b?b=JSON.parse(b):b=[];let c=document.getElementById("boughtItems");for(;c.firstChild;)c.removeChild(c.firstChild);for(let d of b)b=document.createElement("option"),b.textContent=d,c.appendChild(b)},async ai(){var b=new URL(window.location.href),c=b.origin;const d=b.searchParams.get("sh")||"";
b=parseInt(localStorage.getItem("MarketHoldGold"))||0;let e=localStorage.getItem("marketItems");e=e?JSON.parse(e):[];const h={Ui:"1",Qi:"2",Ii:"3",Li:"4",Ki:"5",Ri:"8",Oi:"6",Gi:"9",Ti:"7",Hi:"11",Si:"12",Ni:"13",Mi:"15",Ji:"18",aj:"19",Pi:"20"},k={Vh:"-1",Rh:"0",Ph:"1",Th:"2",Sh:"3",Uh:"4"};y("Checking marketplace for items...");const m={};if("true"===localStorage.getItem("marketOnlyFood"))c=await this.th(c,d,"-1"),await this.Hh([],7,1,c,b);else{for(var n of e){const l=`${h[n.itemType]||"0"}-${k[n.Tg]||
"0"}`;m[l]||(m[l]=[]);m[l].push(n)}n=e.map(l=>k[l.Tg]||"0");n=Math.min(...n);c=await this.th(c,d,n);for(const [l,q]of Object.entries(m)){const [t,r]=l.split("-");await this.Hh(q,t,r,c,b)}}},async th(b,c,d){const e="true"===localStorage.getItem("marketOnlyFood");let h=`${b}/game/index.php?mod=market&sh=${c}&qry=&seller=&fl=0&f=0&fq=${d}`;e&&(h=`${b}/game/index.php?mod=market&sh=${c}&qry=&seller=&fl=0&f=7&fq=${d}`);c=await fetch(h).then(B=>B.text());b=new DOMParser;d=b.parseFromString(c,"text/html").querySelector(".standalone");
c=1;d&&(c=parseInt(d.textContent.split("/")[1]));d=[];const k=e?parseInt(localStorage.getItem("MarketMaxFoodPrice")):null,m=e?parseInt(localStorage.getItem("MarketMaxPerFoodPrice")):null,n=e?parseInt(localStorage.getItem("MarketMinItemLevel")):null;let l=0;for(let B=1;B<=c;B++){var q=`${h}&p=${B}`;await new Promise(G=>setTimeout(G,250));q=await (await fetch(q)).text();await new Promise(G=>setTimeout(G,250));q=b.parseFromString(q,"text/html").querySelectorAll("#market_item_table tr");for(let G of q){var t=
G.querySelectorAll("td");if(t&&0<t.length&&(q=t[0].querySelector("div"))){var r=$a(q),u=Pa(q),v=kb(q),w=ab(q);let H=q.getAttribute("data-item-id"),U=q.getAttribute("data-soulbound-to");t=parseInt(t[2].innerText.replace(/\./g,""));var z=parseInt(q.getAttribute("data-amount"))||1;z=t/z;if(e&&"64"===r&&t<=m&&(!U||null===U)&&Number(w)>=n){if(l+t>k)break;l+=t;d.push({pi:u,itemName:v,xh:H,zh:U,yh:t,Gh:z,page:B})}else e||(r=Pa(q),u=kb(q),v=q.getAttribute("data-item-id"),w=q.getAttribute("data-soulbound-to"),
q=parseInt(q.getAttribute("data-amount"))||1,d.push({pi:r,itemName:u,xh:v,zh:w,yh:t,Gh:t/q,page:B}))}}if(e&&l>=k)break}return d},async Hh(b,c,d,e,h){for(const k of e){const m=k.itemName;e=k.xh;const n=k.zh,l=k.yh,q=k.Gh,t=k.page,r={Vh:"-1",Rh:"0",Ph:"1",Th:"2",Sh:"3",Uh:"4"},u=localStorage.getItem("usePacks")||"false";"true"===localStorage.getItem("marketOnlyFood")?V.gold>=l+h&&(!n||null===n)&&await jQuery.get(za({}),{mod:"market",buyid:e,sh:O("sh"),qry:"",seller:"",f:c,fl:12,fq:d,s:"",p:t,buy:"Buy"}).then(v=>
{v=(new DOMParser).parseFromString(v,"text/html").getElementById("sstat_gold_val").innerText;v=parseInt(v.replace(/\./g,""));if(document.getElementById("sstat_gold_val").innerText=v)V.gold=v;me.nh(m);y(`Bought ${m} for ${l} gold`)}):b.some(v=>{const w=r[v.Tg]||"0";return m.trim().toLowerCase().includes(v.Ah.trim().toLowerCase())&&d==w&&V.gold>=l+h&&(!n||null===n||"BuySoulbound"===v.Wg&&n||"DontBuySoulbound"===v.Wg&&!n)&&(Number(v.dh)>=l||"true"==u&&Number(v.dh)>=q&&V.gold>=l)})&&await jQuery.get(za({}),
{mod:"market",buyid:e,sh:O("sh"),qry:"",seller:"",f:c,fl:12,fq:d,s:"",p:t,buy:"Buy"}).then(v=>{v=(new DOMParser).parseFromString(v,"text/html").getElementById("sstat_gold_val").innerText;v=parseInt(v.replace(/\./g,""));if(document.getElementById("sstat_gold_val").innerText=v)V.gold=v;me.nh(m);y(`Bought ${m} for ${l} gold`)})}}},Vf=localStorage.getItem("MarketlastRan"),Wf=Date.now(),oh=localStorage.getItem("MarketSearchInterval")||5;if(!Vf||Wf-Vf>=6E4*oh)localStorage.setItem("MarketlastRan",Wf.toString()),
"true"==localStorage.getItem("enableMarketSearch")&&aa==qa&&"true"==sessionStorage.getItem("autoGoActive")&&await me.ai();(window.location.href.includes("/index.php?mod=forge&submod=workbench")||window.location.href.includes("/index.php?mod=forge&doll=1&submod=workbench")||window.location.href.includes("index.php?mod=forge&doll=2&submod=workbench")||window.location.href.includes("index.php?mod=forge&doll=3&submod=workbench")||window.location.href.includes("index.php?mod=forge&doll=4&submod=workbench")||
window.location.href.includes("index.php?mod=forge&doll=5&submod=workbench")||window.location.href.includes("index.php?mod=forge&doll=6&submod=workbench"))&&$g();var Xf={async start(){function b(n){try{let l=JSON.parse(n);return Array.isArray(l)&&l.every(q=>void 0===q)?[]:l}catch(l){return[]}}let {Ih:c,Jh:d}=pa;var e=localStorage.getItem("workbenchItem");e=e?JSON.parse(e):{};e.selectedItem=e.selectedItem||{};let h=function(n){return n&&0===Object.keys(n).length&&n.constructor===Object}(e.selectedItem)?
!1:e.selectedItem;var k=localStorage.getItem("itemList1"),m=localStorage.getItem("itemList2");k=k?b(k):[];m=m?b(m):[];if(h)switch(await this.v(),h.status){case "toWorkbench":await this.ng(h.iid);break;case "toFillGoods":await this.Ya(h.slot);break;case "toPackage":await this.Mg(h.slot);break;case "toBag":await this.We();break;case "toInv":await this.Ig()}else c&&0<k.length?"mod=overview&doll=1"!=ue?cg("mod=overview&doll=1"):(await this.v(),0<e.tb?await this.Lg(pa.itemList1):(e=JSON.parse(localStorage.getItem("Timers")),
Z("repair",e.Repair||10),window.location.reload())):d&&0<m.length&&("mod=overview&doll=2"!=ue?cg("mod=overview&doll=2"):(await this.v(),0<e.tb?await this.Lg(pa.itemList2):(e=JSON.parse(localStorage.getItem("Timers")),Z("repair",e.Repair||10),window.location.reload())))},v:async function(){try{let b=await jQuery.post(D({}),{mod:"forge",submod:"getWorkbenchPreview",mode:"workbench",a:(new Date).getTime(),sh:O("sh")}),c=localStorage.getItem("workbenchItem");c=c?JSON.parse(c):{};c.slots=JSON.parse(b).slots;
c.tb=0;c.freeSlots=[];for(let d of c.slots)"closed"===d["forge_slots.state"]&&(c.tb++,c.freeSlots.push(d));localStorage.setItem("workbenchItem",JSON.stringify(c))}catch(b){throw console.error("Error in getSlots:",b),b;}},async Lg(b){b=b.shift();y("Repair has started for ."+b.name);y("Repair: Moving the item from inventory to bag");let {spot:c,bag:d}=await rc(2,3);const e=await jQuery.post(D({}),{mod:"inventory",submod:"move",from:b.container,fromX:1,fromY:1,to:d,toX:c.x+1,toY:c.y+1,amount:1,doll:b.doll,
a:(new Date).getTime(),sh:O("sh")});let h=localStorage.getItem("workbenchItem");h=h?JSON.parse(h):{};h.selectedItem=h.selectedItem||{};Object.assign(h.selectedItem,{item:b,iid:JSON.parse(e).to.data.itemId,status:"toWorkbench",spot:c,bag:d});localStorage.setItem("workbenchItem",JSON.stringify(h));await this.ng(JSON.parse(e).to.data.itemId)},async ng(b){Mf();let c=localStorage.getItem("workbenchItem");c=c?JSON.parse(c):{};let d=0;for(let e of c.slots||[])if("closed"===e["forge_slots.state"]){d=e["forge_slots.slot"];
break}1E4<=eg().gold&&(await jQuery.post(D({}),{mod:"forge",submod:"rent",mode:"workbench",slot:d,rent:2,item:b,a:(new Date).getTime(),sh:O("sh")}),b=(b=localStorage.getItem("workbenchItem"))?JSON.parse(b):{},b.selectedItem=b.selectedItem||{},Object.assign(b.selectedItem,{slot:d,status:"toFillGoods"}),localStorage.setItem("workbenchItem",JSON.stringify(b)),await this.Ya(d))},async Ya(b,c=-1,d=!0){let e=localStorage.getItem("workbenchItem");e=e?JSON.parse(e):{};await jQuery.post(D({}),{mod:"forge",
submod:"storageToWarehouse",mode:"workbench",slot:b,quality:c,a:(new Date).getTime(),sh:O("sh")});c<Number(localStorage.getItem("repairMaxQuality"))?await this.Ya(b,++c,d):(await jQuery.post(D({}),{mod:"forge",submod:"start",mode:"workbench",slot:b,a:(new Date).getTime(),sh:O("sh")}),d?(c=(c=localStorage.getItem("workbenchItem"))?JSON.parse(c):{},c.selectedItem=c.selectedItem||{},Object.assign(c.selectedItem,{status:"toPackage"}),localStorage.setItem("workbenchItem",JSON.stringify(c)),await this.v(),
await this.Mg(b)):(e.queue--,0==e.queue&&window.location.reload()))},async Mg(b){y("Repair: Moving the item from workbench to package.");let c=localStorage.getItem("workbenchItem");c=c?JSON.parse(c):{};let d=1E3*c.slots[b].formula.duration||1E4;await this.v();await new Promise(e=>setTimeout(e,d));"document.location.href=document.location.href;"==await jQuery.post(D({}),{mod:"forge",submod:"lootbox",mode:"workbench",slot:b,a:(new Date).getTime(),sh:O("sh")})?window.location.reload():(b=(b=localStorage.getItem("workbenchItem"))?
JSON.parse(b):{},b.selectedItem=b.selectedItem||{},Object.assign(b.selectedItem,{status:"toBag"}),localStorage.setItem("workbenchItem",JSON.stringify(b)),await this.We())},async We(b=1){y("Repair: Waiting for repairing.");var c=localStorage.getItem("workbenchItem");c=c?JSON.parse(c):{};let {item:d,bag:e,spot:h}=c.selectedItem||{};c=!1;var k=await jQuery.get(za({}),{mod:"packages",f:d.type,fq:d.quality,qry:"",page:b,sh:O("sh")});k=jQuery(k).find(".packageItem").toArray();for(var m of k){var n=m.querySelector(".ui-draggable");
k=ib(n).split("-")[0];var l=Pa(n);n=kb(n);d.name==n&&d.quality==l&&d.type==k&&(c=!0,await jQuery.post(D({}),{mod:"inventory",submod:"move",from:m.querySelector("[data-container-number]").getAttribute("data-container-number"),fromX:1,fromY:1,to:e,toX:h.x+1,toY:h.y+1,amount:1,a:(new Date).getTime(),sh:O("sh")}),k=(k=localStorage.getItem("workbenchItem"))?JSON.parse(k):{},k.selectedItem=k.selectedItem||{},Object.assign(k.selectedItem,{status:"toInv"}),localStorage.setItem("workbenchItem",JSON.stringify(k)),
await this.Ig())}5<b&&(localStorage.removeItem("workbench_selectedItem"),localStorage.removeItem("workbenchItem"),m=JSON.parse(localStorage.getItem("Timers")),Z("repair",m.Repair||10),window.location.reload());c||await this.We(++b)},async Ig(){var b=localStorage.getItem("workbenchItem");b=b?JSON.parse(b):{};let {item:c,bag:d,spot:e}=b.selectedItem||{};var h=await jQuery.post(D({}),{mod:"inventory",submod:"move",from:d,fromX:e.x+1,fromY:e.y+1,to:c.container,toX:1,toY:1,amount:1,doll:c.doll,a:(new Date).getTime(),
sh:O("sh")});b.selectedItem=b.selectedItem||{};delete b.selectedItem;localStorage.setItem("workbenchItem",JSON.stringify(b));b=JSON.parse(h).to.data.tooltip.pop().pop()[0].match(/\d+/g);.5>b[0]/b[1]&&(h=c.container,b=JSON.parse(localStorage.getItem("activeItems")),h={2:"helmet",11:"necklace",3:"weapon",5:"armor",4:"shield",9:"gloves",10:"shoes",6:"rings1",7:"rings2"}[h],b[h]&&(b[h]=!1,localStorage.setItem("activeItems",JSON.stringify(b))),y("Could not find enough materials. Disabling the repair slot "+
h));y("Repair finished");window.location.reload()},fh(b){if(vb(b)){var c=jQuery(b);c=jQuery("<div>").addClass("gbot-overlay").width(c.width()).height(c.height()).offset(c.offset()).append(jQuery('<div class="gbot-spinner"></div>'));jQuery(document.body).append(c);Xf.Ug.push(b)}}},M={Gg:!1,ah:!0,spot:1,bag:512,start(){this.pack=function(b,c,d){if(!d)return d;var e=0,h=b+c.slice([d.split("^")[1]]);for(b=0;b<h.length;b++)c=h.charCodeAt(b),e=(e<<5)-e+c,e|=0;return d.split("^")[0]==e};this.storage=JSON.parse(localStorage.getItem("packages"))||
{packages:{}};this.createFunctions();this.getState()},createFunctions(){document.getElementById("ConfirmGetGold").addEventListener("click",async function(){async function c(q,t){t=await jQuery.post(D({mod:"inventory",submod:"move",from:q[0].closest("[data-container-number]").getAttribute("data-container-number"),fromX:1,fromY:1,to:512,toX:21+t,toY:21,amount:1}),{a:(new Date).getTime(),sh:h});q[0].closest(".packageItem").remove();q=JSON.parse(t).header.gold.text||"0";q=parseInt(q.replace(/[^0-9]/g,
""),10);n+=q-m;m=q;document.getElementById("goldMovedIndicator").textContent=`Gold moved: ${n.toLocaleString()}`}async function d(){var q=await jQuery.get(za({mod:"packages",f:"14",fq:-1,qry:"",page:k,sh:h}));let t=jQuery(q).find(".ui-draggable").filter((r,u)=>(r=parseInt(jQuery(u).attr("data-price-gold")))&&r<=l-m).get();for(let [r,u]of t.entries())if(await c(jQuery(u),r),m>=l){document.getElementById("goldMovedIndicator").textContent+=" - Completed";return}k++;q=(q=jQuery(q).find(".paging_right_full")[0])?
parseInt(q.href.match(/\d+$/)[0]):1;k<q?await d():document.getElementById("goldMovedIndicator").textContent=`Not enough gold found. Only ${n.toLocaleString()} moved.`}let e=parseInt(document.getElementById("getGold").value.replace(/[^0-9]/g,""),10);if(isNaN(e)||0>=e)alert("Please enter a valid amount greater than 0.");else{var h=O("sh"),k=0,m=0,n=0;m=parseInt(document.getElementById("sstat_gold_val").textContent.replace(/[^0-9]/g,""),10);var l=m+e;document.getElementById("goldMovedIndicator").textContent=
"Starting...";await d()}});let b=!1;document.querySelector("h2").addEventListener("click",()=>{jQuery(".custom_packages").toggle();b=!b;localStorage.setItem("packages_hidden",b)});jQuery(".custom_packages").mouseup(async c=>{var d=c.target;c=d.getAttribute("data-button");if(!d.getAttribute("disabled")){switch(c){case "pickAll":confirm("Pick all?")&&this.pickItems(!0);break;case "pickAllSelected":-1<wa.type.indexOf(14)&&confirm("Pick gold");this.pickItems(!1);break;case "sellThisPage":this.Di();break;
case "SARTH":this.sarth();break;case "SASTM":this.sastm();break;case "stop":this.stop=!0;break;case "switch":d=document.querySelector('input[data-name="useSmeltFilter"]');let e=document.querySelector('input[data-name="UCOTH"]');d.addEventListener("change",function(){localStorage.setItem("useTriggerSmeltFilter",this.checked)});e.addEventListener("change",function(){localStorage.setItem("useTriggerCloths",this.checked)});localStorage.setItem("useTriggerSmeltFilter",d.checked);localStorage.setItem("useTriggerCloths",
e.checked);break;default:return}"stop"!=c&&"switch"!=c&&(this.stop=!1,jQuery("[pakageCmd]").attr("disabled",""))}});document.querySelector(".custom_packages").addEventListener("input",c=>{let d=c.target;c=d.getAttribute("data-button");let e=d.getAttribute("data-name"),h=[],k=Array.from(document.querySelectorAll(`[data-name=${e}]`));switch(c){case "packageAll":k.forEach(m=>{m.checked=d.checked});break;case "package":k[k.length-1].checked=!1;break;default:return}k.forEach(m=>{m.checked&&h.push(parseInt(m.value))});
localStorage.setItem("packages",JSON.stringify({...JSON.parse(localStorage.getItem("packages")||"{}"),[e]:h}))})},enableButtons(){jQuery("[pakageCmd]").removeAttr("disabled")},getState(){let b=JSON.parse(localStorage.getItem("packages"))||{};var c=document.querySelector('input[data-name="useSmeltFilter"]'),d=document.querySelector('input[data-name="UCOTH"]'),e="true"===localStorage.getItem("useTriggerSmeltFilter"),h="true"===localStorage.getItem("useTriggerCloths");c.checked=e;d.checked=h;c=document.querySelectorAll(".custom_packages [data-button=package]");
for(d=0;d<c.length;d++)e=c[d].getAttribute("data-name"),b[e]&&(-1<b[e].indexOf(parseInt(c[d].value))?c[d].setAttribute("checked",!0):c[d].removeAttribute("checked"));c=document.querySelectorAll(".custom_packages [data-button=switch]");for(d=0;d<c.length;d++)e=c[d].getAttribute("data-name-ek"),h=c[d].getAttribute("data-name"),b[e]&&b[e][h]?c[d].setAttribute("checked",!0):c[d].removeAttribute("checked")},pickItems(b){wa=JSON.parse(localStorage.getItem("packages"));this.arr=Array.from(document.querySelectorAll("#packages .ui-draggable")).filter(d=>
{let e=parseInt(ib(d).split("-")[0]),h=14==e?!0:!1;return-1<wa.type.indexOf(e)&&-1<wa.quality.indexOf(parseInt(Pa(d)))&&!b||b&&!h}).sort((d,e)=>jb(e)-jb(d));const c=this.arr.filter(d=>14==parseInt(ib(d).split("-")[0])&&1E6>=parseInt(d.getAttribute("data-price-gold")));this.arr=this.arr.filter(d=>14!=parseInt(ib(d).split("-")[0]));Promise.all(c.map(this.moveGold)).then(()=>{M.move()})},async moveGold(b,c){c=await jQuery.post(D({mod:"inventory",submod:"move",from:b.closest("[data-container-number]").getAttribute("data-container-number"),
fromX:1,fromY:1,to:512,toX:21+c,toY:21,amount:1}),{a:(new Date).getTime(),sh:O("sh")});b.closest(".packageItem").remove();document.getElementById("sstat_gold_val").innerText=JSON.parse(c).header.gold.text||0},move(){var b=document.getElementById("inv");b=Sb(b);b=Math.min(40-wb(b),this.arr.length);let c=this.arr.shift();0<b&&!M.stop?(Aa(c,"inv"),setTimeout(()=>{M.move()},300)):setTimeout(M.enableButtons,500)},sarth:function(){jQuery.post(D({mod:"forge",submod:"storageIn"}),{rj:0,packages:1,hh:1,a:(new Date).getTime()+
"",sh:O("sh")},()=>{window.location.reload(!0)})},async sastm(){M.stop?window.location.reload():(this.Ng={},this.pack&&await this.bh(this.jh))},async Di(){M.stop?window.location.reload():(M.Gg=!0,this.Ng={},this.pack&&await this.bh(this.jh))},async jh(b){M.stop?window.location.reload():(M.Ng=b,await qc(M.Qh))},async Qh(b,c){if(!M.stop){M.Xh=Object.assign(b,{b:c});b=JSON.parse(localStorage.getItem("packages"))||{};document.querySelectorAll("#inventory_nav a")[c-512].click();M.inv=document.getElementById("inv");
var d=(new URL(window.location.href)).searchParams,e=d.get("f")||"",h=d.get("fq")||"";c=d.getAll("page");await new Promise(k=>setTimeout(k,100));b={mod:"packages",f:"0",fq:b.quality[0],qry:"",page:0,sh:O("sh")};!0===M.Gg&&(b.f=e,b.fq=h,b.page=c[c.length-1],d=d.get("qry"))&&(b.qry=d);await new Promise(k=>setTimeout(k,100));b=await jQuery.get(za(b));b=await jQuery(b).find(".paging_right_full")[0]?jQuery(b).find(".paging_right_full")[0].href.match(/\d+$/)[0]:1;M.o=[];M.X=[];await new Promise(k=>setTimeout(k,
150));d=0;(e=window.location.href.match(/page=(\d+)(?!.*page=)/))&&e[1]&&(d=parseInt(e[1],10));b=M.Gg?[d]:[...Array(parseInt(b)).keys()].map(k=>k+1);M.Gg&&(await M.oi(c[c.length-1]),0<M.o.length&&await M.lh(),M.o=[]);if(!M.Gg)for(c=b.length,d=c-1;0<=d;d--)e=b[d],document.getElementById("currentPageIndicator").innerText=e,h=d/c*100,document.getElementById("progressBar").style.width=`${h}%`,await M.ni(e),0<M.o.length&&await M.Og(),M.o=[];0===M.X.length&&window.location.reload()}window.location.reload()},
async ni(b){const c=JSON.parse(localStorage.getItem("packages"))||{};b=await jQuery.get(za({mod:"packages",f:"0",fq:c.quality[0],qry:"",page:b,sh:O("sh")}));b=jQuery(b).find(".packageItem");var d="true"===localStorage.getItem("useTriggerSmeltFilter"),e=JSON.parse(localStorage.getItem("prefixes"))||[],h=JSON.parse(localStorage.getItem("suffixes"))||[];if(0<b.length)for(let n=0;n<b.length;n++){let l=b[n],q=l.querySelector("input").value,t=l.querySelector(".ui-draggable"),r=parseInt(ib(t).split("-")[0]),
u=14==r?!0:!1,v=jb(t),w=kb(t),z=Za(t);var k=d&&e.some(B=>w.includes(B)),m=d&&h.some(B=>w.includes(B));if(M.stop){window.location.reload();break}-1<c.type.indexOf(r)&&-1<c.quality.indexOf(parseInt(Pa(t)))&&!u&&!k&&!m&&M.o.push({p:l,Ue:t,s:v,id:q,q:z})}},async oi(b){if(M.stop)window.location.reload();else{var c=JSON.parse(localStorage.getItem("packages"))||{},d=(new URL(window.location.href)).searchParams;var e=(e=d.get("qry"))?e:"";b={mod:"packages",f:d.get("f")||c.type,fq:d.get("fq")||c.quality[0],
qry:e,page:b,sh:O("sh")};await new Promise(h=>setTimeout(h,200));await jQuery.get(za(b),h=>{h=jQuery(h).find(".packageItem");if(0<h.length)for(let k=0;k<h.length;k++){let m=h[k],n=m.querySelector("input").value,l=m.querySelector(".ui-draggable");ib(l).split("-");let q=jb(l);kb(l);let t=Za(l);M.o.push({p:m,Ue:l,s:q,id:n,q:t})}})}},async Og(){if(!M.stop)for(var b="true"===localStorage.getItem("useTriggerCloths");0<M.o.length;){if(M.ah){var c=await rc(2,3);M.spot=c.spot;M.bag=c.bag;M.ah=!1}c=M.o.shift();
var d=M.kh(c.Ue);if(d){var e=await jQuery.post(D({mod:"inventory",submod:"move",from:"-"+c.id,fromX:"1",fromY:"1",to:M.bag,toX:M.spot.x+1,toY:M.spot.y+1,amount:c.q}),{a:(new Date).getTime(),sh:O("sh")});if(e)if(e.includes("Not possible")||e.includes("error"))M.ah=!0;else if(e=jQuery(c.Ue).css({left:32*M.spot.x,top:32*M.spot.y}),M.inv.appendChild(e[0]),d=await jQuery.post(D({mod:"inventory",submod:"move",from:M.bag,fromX:M.spot.x+1,fromY:M.spot.y+1,to:d.Lh,toX:d.spot.x+1,toY:d.spot.y+1,amount:c.q,
doll:"1"}),{a:(new Date).getTime(),sh:O("sh")})){jQuery(c.Ue).remove();let h;try{h=JSON.parse(d).header.gold.text}catch{M.o.shift();continue}document.getElementById("sstat_gold_val").innerText=h||"";0<M.o.length&&(M.X.push(c),await this.Og())}}else 0<M.o.length?(M.X.push(c),await this.Og()):b&&0<M.X.length?"true"===localStorage.getItem("useTriggerCloths")&&0<M.X.length?(M.o=M.X,M.X=[],c=await jQuery.get(za({mod:"inventory",sub:"1",subsub:"2",sh:O("sh")})),c=jQuery(c),c.find("#content form img")[0].src.includes("91e0372cccc24f52758be611a10a3b.png")?
(c=c.find("#content form input")[0],await jQuery.post(za({mod:"inventory",sub:"1",subsub:"2",sh:O("sh")}),{[c.name]:c.value}),await M.bh(async h=>{M.Ng=h;M.o=[...M.X];M.X=[];await M.Og()})):window.location.reload()):window.location.reload():window.location.reload()}},lh(){return new Promise(b=>{if(M.stop||0===M.o.length)b();else{localStorage.getItem("useCloths");var c=M.o.shift(),d=M.Xh,e=M.kh(c.Ue);e?jQuery.post(D({mod:"inventory",submod:"move",from:"-"+c.id,fromX:"1",fromY:"1",to:d.b,toX:d.x+1,
toY:d.y+1,amount:c.q}),{a:(new Date).getTime(),sh:O("sh")},()=>{var h=jQuery(c.Ue).css({left:32*d.x,top:32*d.y});M.inv.appendChild(h[0]);jQuery.post(D({mod:"inventory",submod:"move",from:d.b,fromX:d.x+1,fromY:d.y+1,to:e.Lh,toX:e.spot.x+1,toY:e.spot.y+1,amount:c.q,doll:"1"}),{a:(new Date).getTime(),sh:O("sh")},()=>{jQuery(c.Ue).remove();0<M.o.length?(M.X.push(c),M.lh()):(window.location.reload(),b())})}):(window.location.reload(),b())}})},kh(b){var c=parseInt(b.getAttribute("data-measurement-x"));
b=parseInt(b.getAttribute("data-measurement-y"));for(var d in M.Ng){var e=M.Ng[d];if(!(isNaN(parseInt(d))||1>e.ih)){var h=Zb(b,c,e.grid);if(h)return e.ih-=c*b,e.items.push({y:h.y,x:h.x,fg:b,w:c}),e.grid=Tb(8,6,e.items),{spot:h,Lh:d}}}},async bh(b){var c=[],d={},e;for(e of[{sub:1,subsub:2},{sub:2,subsub:2},{sub:3,subsub:1},{sub:3,subsub:2},{sub:4,subsub:0},{sub:4,subsub:1},{sub:4,subsub:2},{sub:5,subsub:0},{sub:5,subsub:1},{sub:5,subsub:2},{sub:6,subsub:0},{sub:6,subsub:1},{sub:6,subsub:2}])c.push(za(Object.assign({mod:"inventory",
sh:O("sh")},e)));await Promise.all(c.map(h=>jQuery.get(h,k=>{var m=jQuery(k).find("#shop")[0];k=m.getAttribute("data-container-number");m=Sb(m);d[k]={ih:48-wb(m),grid:Tb(8,6,m),items:m}}))).then(()=>b(d))}};if(window.location.href.includes("/index.php?mod=guild")){const b=document.querySelectorAll("form");for(const c of b){const d=c.getAttribute("action");d&&d.includes("submod=create")&&localStorage.setItem("resetExpiredItems","false")}}if(window.location.href.includes("/index.php?mod=packages&")){let b=
jQuery(".section-header").first();b&&(b.before(`
<h2 class="section-header" style="cursor: pointer" id="hidePackges">
${g.lf}
</h2>

<section class="custom_packages" style="display: block; box-shadow: 0px 0px 10px rgba(0,0,0,0.15);">
<div style="text-align: center">
    <button class="awesome-button" packageCmd data-button="pickAll">
    ${g.cf}
    </button>
    <button class="awesome-button" packageCmd data-button="pickAllSelected">
    ${g.ef}
    </button>
    <button class="awesome-button" pakageCmd data-button="sellThisPage">
    ${g.hf}
    </button>
    <button
    class="awesome-button" data-button="SASTM" pakageCmd data-name="SASTM"
>
${g.ff}
</button>
    <button class="awesome-button" data-button="stop">${g.kf}</button>
    <button class="awesome-button" packageCmd data-button="SARTH">
    ${g.jf}
    </button>
</div>

<style>

    .awesome-button:hover {
        background-color: #444;
        color: #fff; 
    }

    .progress-container {
      width: 100%;
      height: 20px;
      background-color: #f3f3f3;
      position: relative;
      border-radius: 15px;
      margin: 10px 0;
    }
  
    .progress-bar {
      width: 0;
      height: 100%;
      background-color: #4caf50;
      position: absolute;
      border-radius: 15px;
      transition: width 0.4s ease-in-out;
    }
  
    .page-indicator {
      text-align: center;
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      font-size: 12px;
    }

</style>

    <fieldset style="box-shadow: 0px 0px 10px rgba(0,0,0,0.15);">
        <legend>${g.gf}</legend>
        <table style="width: 100%; text-align: center">
            <tbody>
                <tr>
                    <td>
                    </td>
                    <div class="progress-container">
                    <div class="progress-bar" id="progressBar"></div>
                    <div class="page-indicator">${g.bf} <span id="currentPageIndicator">0</span></div>
                  </div>
                    <td>
                        <input
                            type="checkbox"
                            data-button="switch"
                            data-name-ek="packages"
                            data-name="UCOTH"
                            style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                        /><span class="span-new">${g.nf}</span>
                        <br>
                        <input
                        type="checkbox"
                        data-button="switch"
                        data-name-ek="packages"
                        data-name="useSmeltFilter"
                        style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                       /><span class="span-new">${g.Ub}</span>
                        <div class="setting-row">
                        <label for="getGold">Get Gold</label>
                        <div class="switch-field3">
                          
                          <input type="number" id="getGold" min="1000" max="200000000" placeholder="Amount">
                          <button id="ConfirmGetGold" class="awesome-button">OK</button>
                          <span class="span-new" id="goldMovedIndicator">${g.mc}: 0</span>
                        </div>
                      </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </fieldset>
    <fieldset>
        <legend>${g.Y}</legend>
        <table style="width: 100%">
        <tbody>
        <tr>
            <td style="width: 25%">
                <input type="checkbox" 
                data-button="package"
                data-name="type"
                style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                value="1"/><label title="Wepons">${g.pb}</label>
            </td>
            <td style="width: 25%">
                <input type="checkbox" 
                data-button="package"
                data-name="type"
                style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                value="2"/><label title="Shields">${g.mb}</label>
            </td>
            <td style="width: 25%">
                <input type="checkbox" 
                data-button="package"
                data-name="type"
                style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                value="3"/><label title="Armour">${g.bb}</label>
            </td>
            <td style="width: 25%">
                <input type="checkbox" 
                data-button="package"
                data-name="type"
                style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                value="4"/><label title="Helmets">${g.hb}</label>
            </td>
        </tr>
        <tr>
            <td style="width: 25%">
                <input type="checkbox" 
                data-button="package"
                data-name="type"
                style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                value="5"/><label title="Gloves">${g.gb}</label>
            </td>
            <td style="width: 25%">
                <input type="checkbox" 
                data-button="package"
                data-name="type"
                style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                value="8"/><label title="Boots">${g.cb}</label>
            </td>
            <td style="width: 25%">
                <input type="checkbox" 
                data-button="package"
                data-name="type"
                style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                value="6"/><label title="Rings">${g.kb}</label>
            </td>
            <td style="width: 25%">
                <input type="checkbox" 
                data-button="package"
                data-name="type"
                style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                value="9"/><label title="Amulets">${g.ab}</label>
            </td>
        </tr>
            <tr>
                <td style="width: 25%">
                    <input type="checkbox" 
                    data-button="package"
                    data-name="type"
                    style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                    value="7"/><label title="Usables(Food)">${g.eb}</label>
                </td>
                <td style="width: 25%">
                    <input type="checkbox" 
                    data-button="package"
                    data-name="type"
                    style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                    value="12"/><label title="Upgrades">${g.ob}</label>
                </td>
                <td style="width: 25%">
                    <input type="checkbox" 
                    data-button="package"
                    data-name="type"
                    style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                    value="13"/><label title="Recipes">${g.jb}</label>
                </td>
                <td style="width: 25%">
                    <input type="checkbox" 
                    data-button="package"
                    data-name="type"
                    style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                    value="15"/><label title="Mercenary">${g.ib}</label>
                </td>
            </tr>
            <tr>
                <td style="width: 25%">
                    <input type="checkbox" 
                    data-button="package"
                    data-name="type"
                    style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                    value="19"/><label title="Forging btools">${g.nb}</label>
                </td>
                <td style="width: 25%">
                    <input type="checkbox" 
                    data-button="package"
                    data-name="type"
                    style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                    value="20"/><label title="Scroll">${g.lb}</label>
                </td>
                <td style="width: 25%">
                    <input type="checkbox" 
                    data-button="package"
                    data-name="type"
                    style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                    value="11"/><label title="Reinforcements">${g.df}</label>
                </td>
                <td style="width: 25%">
                    <input type="checkbox" 
                    data-button="package"
                    data-name="type"
                    style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                    value="21"/><label title="Event Items">${g.$e}</label>
                </td>
            </tr>
            <tr>
                <td style="width: 25%">
                    <input 
                    type="checkbox"
                    data-button="package"
                    data-name="type"
                    style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                    value="18"/><label title="Forging Goods">${g.fb}</label>
                </td>
                <td style="width: 25%">
                    <input 
                    type="checkbox"
                    data-button="package"
                    data-name="type"
                    style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                    value="14"/><label title="Gold">${g.af}</label>
                </td>
                <td style="width: 25%">
                    <input 
                    type="checkbox"
                    data-button="packageAll"
                    data-name="type"
                    style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                    value="99"/><label>${g.D}</label>
                </td>
            </tr>
        </tbody>
        </table>
    </fieldset>
    <fieldset>
        <legend>Quality</legend>
        <table style="width: 100% box-shadow: 0px 5px 10px rgba(0,0,0,0.15);">
            <tbody>
                <tr>
                    <td style="width: 14.28%">
                        <input 
                        type="checkbox"
                        data-button="package"
                        data-name="quality"
                        value="-1"
                        style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                        type="checkbox"/><label title="White">${g.qb}</label>
                    </td>
                    <td style="width: 14.28%">
                        <input 
                        type="checkbox"
                        data-button="package"
                        data-name="quality"
                        value="0"
                        style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                        type="checkbox"/><label title="Green">${g.G}</label>
                    </td>
                    <td style="width: 14.28%">
                        <input 
                        type="checkbox"
                        data-button="package"
                        data-name="quality"
                        value="1"
                        style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                        type="checkbox"/><label title="Blue">${g.F}</label>
                    </td>
                    <td style="width: 14.28%">
                        <input 
                        type="checkbox"
                        data-button="package"
                        data-name="quality"
                        value="2"
                        style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                        type="checkbox"/><label title="Purple">${g.H}</label>
                    </td>
                    <td style="width: 14.28%">
                    <input
                      type="checkbox"
                      data-button="package"
                      data-name="quality"
                      value="3"
                      style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                      type="checkbox"/><label title="Orange">${g.Z}</label>
                    </td>
                    <td style="width: 14.28%">
                    <input
                      type="checkbox"
                      data-button="package"
                      data-name="quality"
                      value="4"
                      style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                      type="checkbox"/><label title="Red">${g.ja}</label>
                    </td>
                    <td style="width: 14.28%">
                    <input
                      type="checkbox"
                      data-button="packageAll"
                      data-name="quality"
                      value="99"
                      style="box-shadow: 0px 5px 10px rgba(0,0,0,0.15);"
                      type="checkbox"/><label title="All">${g.D}</label>
                  </td>
                </tr>
                <!-- Additional tr elements for Quality -->
            </tbody>
        </table>
    </fieldset>
</section>
`),$(".custom-button:contains('sell all selected to merchants')").click(async function(){await M.sastm()}));M.start()}if(window.location.href.includes("mod=auction")){const b=JSON.parse(localStorage.getItem("Timers"));localStorage.getItem("auctionPrefixes")||localStorage.setItem("auctionPrefixes",JSON.stringify([]));localStorage.getItem("prefixes")||localStorage.setItem("prefixes",JSON.stringify([]));localStorage.getItem("searchTerms")||localStorage.setItem("searchTerms",JSON.stringify([]));const c=
document.getElementById("auction_table");let d;c&&(d=c.querySelectorAll(".auction_item_div"));const e=localStorage.getItem("highlightedItemHash");if(e){const h=document.querySelector(`form:has(div[data-hash="${e}"])`);h&&(h.style.outline="3px solid red",h.style.outlineOffset="4px",h.style.boxShadow="0 0 10px rgba(0, 0, 0, 0.5)",h.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}));localStorage.removeItem("highlightedItemHash")}if(!c&&window.location.href.includes("ttype=3")&&"true"==
sessionStorage.getItem("autoGoActive")){Z("AuctionMEmpty",1);Z("auctionM",b.AuctionCheck||5);y("Could not find the item in auction, will check again in 1 minutes.");cg("mod=overview");return}if(!c&&window.location.href.includes("mod=auction")&&!window.location.href.includes("ttype=3")&&"true"==sessionStorage.getItem("autoGoActive")){Z("AuctionEmpty",1);Z("auction",b.AuctionCheck||5);y("Could not find the item in auction, will check again in 1 minutes.");cg("mod=overview");return}if(!d||0===d.length)return;
"false"!=sessionStorage.getItem("autoGoActive")&&sessionStorage.getItem("autoGoActive")||d.forEach(h=>{h.style.position="relative";h.style.height="106px";const k=document.createElement("span");k.className="auction-icon";k.innerHTML="\ud83d\udd28";k.title=`${g.Ua}`;k.style.cursor="pointer";k.style.fontSize="16px";k.style.marginTop="88px";k.style.marginRight="-25px";k.style.right="-25px";k.style.display="inline-block";const m=document.createElement("span");m.className="smelt-icon";m.innerHTML="\ud83d\udd25";
m.style.cursor="pointer";m.title=`${g.sb}`;m.style.fontSize="16px";m.style.marginTop="88px";m.style.display="inline-block";let n=JSON.parse(localStorage.getItem("auctionPrefixes"))||[],l=JSON.parse(localStorage.getItem("prefixes"))||[],q=JSON.parse(localStorage.getItem("auctionSuffixes"))||[],t=JSON.parse(localStorage.getItem("suffixes"))||[];var r=h.querySelector("[data-tooltip]");if(r=r?r.getAttribute("data-tooltip"):null){try{var u=JSON.parse(r.replace(/&quot;/g,'"'))}catch(w){return}u=u&&0<u.length&&
u[0]?u[0][0]:null;r=Qb(u[0]);var v=Pb(u[0]);u&&(n.includes(r)&&q.includes(v)&&(k.innerHTML="\u2705"),l.includes(r)&&t.includes(v)&&(m.innerHTML="\u2705"),k.addEventListener("click",()=>{var w=h.parentNode;w=w?w.getAttribute("data-item_name"):null;let z=Qb(w[0]),B=Pb(w[0]);z=2>z.length?Qb(w):Qb(w[0]);B=2>B.length?Pb(w):Pb(w[0]);let G=JSON.parse(localStorage.getItem("searchTerms"));n.includes(z)||(n.push(z),localStorage.setItem("auctionPrefixes",JSON.stringify(n)));q.includes(B)||(q.push(B),localStorage.setItem("auctionSuffixes",
JSON.stringify(q)));G.includes(w)||(G.push(w),localStorage.setItem("searchTerms",JSON.stringify(G)));k.innerHTML="\u2705";setTimeout(()=>{k.innerHTML="\ud83d\udd28"},1E3)}),m.addEventListener("click",()=>{var w=h.parentNode;w=w?w.getAttribute("data-item_name"):null;let z=Qb(w[0]),B=Pb(w[0]);z=2>z.length?Qb(w):Qb(w[0]);B=2>B.length?Pb(w):Pb(w[0]);w&&(l.includes(z)||(l.push(z),localStorage.setItem("prefixes",JSON.stringify(l))),t.includes(B)||(t.push(B),localStorage.setItem("suffixes",JSON.stringify(t))),
m.innerHTML="\u2705",setTimeout(()=>{m.innerHTML="\ud83d\udd25"},1E3))}),h.appendChild(m),h.appendChild(k))}})}if(window.location.href.includes("mod=packages")){await new Promise(d=>setTimeout(d,1E3));localStorage.getItem("auctionPrefixes")||localStorage.setItem("auctionPrefixes",JSON.stringify([]));localStorage.getItem("prefixes")||localStorage.setItem("prefixes",JSON.stringify([]));localStorage.getItem("searchTerms")||localStorage.setItem("searchTerms",JSON.stringify([]));const b=document.getElementById("packages");
if(!b)return;const c=b.querySelectorAll(".packageItem");if(!c||0===c.length)return;c.forEach(d=>{const e=document.createElement("span");e.className="auction-icon";e.innerHTML="\ud83d\udd28";e.title=`${g.Ua}`;e.style.cursor="pointer";e.style.fontSize="16px";e.style.top="70px";e.style.position="absolute";e.style.right="1px";const h=document.createElement("span");h.className="smelt-icon";h.innerHTML="\ud83d\udd25";h.title=`${g.sb}`;h.style.cursor="pointer";h.style.fontSize="16px";h.style.top="70px";
h.style.position="absolute";h.style.right="40px";const k=document.createElement("span");k.className="smelt2-icon";k.innerHTML="\ud83d\udd6f\ufe0f";k.style.cursor="pointer";k.title="\ud83d\udd6f\ufe0f: Adds the full item name to the smelting list.";k.style.fontSize="16px";k.style.top="70px";k.style.position="absolute";k.style.right="20px";var m=JSON.parse(localStorage.getItem("auctionPrefixes"))||[];let n=JSON.parse(localStorage.getItem("prefixes"))||[],l=JSON.parse(localStorage.getItem("auctionSuffixes"))||
[],q=JSON.parse(localStorage.getItem("suffixes"))||[];var t=d.querySelector("[data-tooltip]");if(t=t?t.getAttribute("data-tooltip"):null){try{var r=JSON.parse(t.replace(/&quot;/g,'"'))}catch(w){return}r=r&&0<r.length&&r[0]?r[0][0]:null;t=r[0];var u=Qb(r[0]),v=Pb(r[0]);r&&(m.includes(u)&&l.includes(v)&&(e.innerHTML="\u2705"),n.includes(u)&&q.includes(v)&&(h.innerHTML="\u2705"),n.includes(t)&&(k.innerHTML="\u2705"),e.addEventListener("click",()=>{var w=d.querySelector("[data-tooltip]");if(w=w?w.getAttribute("data-tooltip"):
null){try{var z=JSON.parse(w.replace(/&quot;/g,'"'))}catch(P){return}z=z&&0<z.length&&z[0]?z[0][0]:null;w=Qb(z[0]);var B=Pb(z[0]);if(z){var G=JSON.parse(localStorage.getItem("auctionPrefixes"))||[],H=JSON.parse(localStorage.getItem("auctionSuffixes"))||[],U=JSON.parse(localStorage.getItem("searchTerms"))||[];G.includes(w)||(G.push(w),localStorage.setItem("auctionPrefixes",JSON.stringify(G)));H.includes(B)||(H.push(B),localStorage.setItem("auctionSuffixes",JSON.stringify(H)));U.includes(z)||(U.push(z[0]),
localStorage.setItem("searchTerms",JSON.stringify(U)));e.innerHTML="\u2705";setTimeout(()=>{e.innerHTML="\ud83d\udd28"},1E3)}}}),h.addEventListener("click",()=>{var w=d.querySelector("[data-tooltip]");if(w=w?w.getAttribute("data-tooltip"):null){try{var z=JSON.parse(w.replace(/&quot;/g,'"'))}catch(H){return}var B=z&&0<z.length&&z[0]?z[0][0]:null;z=Qb(B[0]);w=Pb(B[0]);if(B){B=JSON.parse(localStorage.getItem("prefixes"))||[];var G=JSON.parse(localStorage.getItem("suffixes"))||[];B.includes(z)||(B.push(z),
localStorage.setItem("prefixes",JSON.stringify(B)));G.includes(w)||(G.push(w),localStorage.setItem("suffixes",JSON.stringify(G)));h.innerHTML="\u2705";setTimeout(()=>{h.innerHTML="\ud83d\udd25"},1E3)}}}),k.addEventListener("click",()=>{var w=d.querySelector("[data-tooltip]");if(w=w?w.getAttribute("data-tooltip"):null){try{var z=JSON.parse(w.replace(/&quot;/g,'"'))}catch(B){return}if(z=z&&0<z.length&&z[0]?z[0][0][0]:null)w=JSON.parse(localStorage.getItem("prefixes"))||[],w.push(z),localStorage.setItem("prefixes",
JSON.stringify(w)),k.innerHTML="\u2705",setTimeout(()=>{k.innerHTML="\ud83d\udd6f\ufe0f"},1E3)}}),m=d.querySelector('[data-no-combine="true"]'))&&(m.appendChild(e),m.appendChild(h),m.appendChild(k))}})}var Ya={A:{async start(){const b=JSON.parse(localStorage.getItem("Timers"));"auction"!=O("mod")?cg("mod=auction&itemType=9"):(Ya.A.m=[],Ya.A.Pe=Math.floor(eg().gold-Number(localStorage.getItem("storeGoldinAuctionholdGold"))),Ya.A.form=document.querySelectorAll("#auction_table form"),Ya.A.Pe&&await this.list(async()=>
{if(0<this.m.length&&Ya.A.Pe)await this.buy();else switch(ue){case "mod=auction&itemType=9":cg("mod=auction&itemType=9&ttype=3");break;case "mod=auction&itemType=9&ttype=3":cg("mod=auction&itemType=6");break;case "mod=auction&itemType=6":cg("mod=auction&itemType=6&ttype=3");break;case "mod=auction&itemType=6&ttype=3":Z("enableHideGold",b.AuctionHoldGold||5);window.location.reload();break;default:cg("mod=auction&itemType=9")}}))},async list(b=!1){y("Looking for items to buy to hide gold in Auction.");
var c=this.Pe;const d="true"===localStorage.getItem("AuctionGoldCover");let e=[];for(let m=0;m<this.form.length;m++){var h=this.form[m].querySelector(".auction_bid_div"),k=h?h.querySelector("span"):null;k&&k.getAttribute("style");k=this.form[m].querySelector(".ui-draggable");h=h?h.querySelector("input").value:0;k=k?ub(k):0;Number(h)<=k&&Number(h)<=c&&e.push({ia:this.form[m],price:parseInt(h,10),value:k})}e.sort((m,n)=>n.price-m.price);for(let m of e){if(c=(c=(c=m.ia.querySelector(".auction_bid_div"))?
c.querySelector("div > a"):null)?c.querySelector("span"):null){c=c.getAttribute("style");if(d&&c&&c.includes("green"))continue;if(!d&&c&&c.includes("green"))return!0;if(c&&c.includes("blue"))continue}Ya.A.m.push([m.ia.getAttribute("action"),{auctionid:m.ia.querySelector("input[name=auctionid]").value,qry:m.ia.querySelector("input[name=qry]").value,itemType:m.ia.querySelector("input[name=itemType]").value,itemLevel:m.ia.querySelector("input[name=itemLevel]").value,itemQuality:m.ia.querySelector("input[name=itemQuality]").value,
buyouthd:m.ia.querySelector("input[name=buyouthd]").value,bid_amount:m.price,bid:m.ia.querySelector("input[name=bid]").value}])}b&&await b()},async buy(){let b=Ya.A.m.pop();await jQuery.ajax({type:"POST",url:b[0],data:b[1]});0<Ya.A.m.length?await this.buy():bg(1500)}}},Yf=localStorage.getItem("OillastRan"),Zf=Date.now(),Oa={Jg:"minerva diana vulcanus mars apollo merkur".split(" "),ci:[20,60,150,0],oh:[],async start(){"mod=gods"!=ue?cg("mod=gods"):Oa.eh(0)},bi(){let b=(new Date).getTime(),c=ya.Oh?
ya.Oh:[1];if(5>c.length)return!0;for(let d=0;d<c.length;d++){if(c[d]&&c[d]<b||!c[d]&&(0==ya[Oa.Jg[d]]&&!ya.wh||1==ya[Oa.Jg[d]]||2==ya[Oa.Jg[d]]))return!0;!c[d]&&ya.wh&&Ob.isUnderworld()}return!1},async ji(){var b=Va.origin;const c=Va.searchParams.get("sh")||"";b=await fetch(`${b}/game/index.php?mod=gods&sh=${c}`);return(new DOMParser).parseFromString(await b.text(),"text/html")},async eh(b,c){if(c){var d=JSON.parse(localStorage.getItem("gods")),e=this.Jg[b],h=c.getElementById(e);h&&(c=parseInt(h.querySelector(".god_points").innerText.match(/\d+/)[0]),
h=h.querySelector(".god_cooldown span")?parseInt(h.querySelector(".god_cooldown span").getAttribute("data-ticker-time-left")):0,d=d[e],e=this.ci[d],c>=e&&0==h&&0<e&&0<=d&&(Oa.oh.push(!1),jQuery.get(za({mod:"gods",submod:"activateBlessing",god:b+1,rank:d+1,sh:O("sh")}),()=>{Oa.oh.push(!1);5>b&&Oa.eh(++b)})))}},async bj(){var b=Va.origin,c=Va.searchParams.get("sh")||"";b=await fetch(`${b}/game/index.php?mod=gods&sh=${c}`);c=new DOMParser;await new Promise(d=>setTimeout(d,800));b=c.parseFromString(await b.text(),
"text/html");c=JSON.parse(localStorage.getItem("gods"));for(let d in c)if((c=b.getElementById(d))&&0===(c.querySelector(".god_cooldown span")?parseInt(c.querySelector(".god_cooldown span").getAttribute("data-ticker-time-left")):0))return!0;return!1}},Of,ph={async start(){const b=localStorage.getItem("healPercentage")||25;var c=JSON.parse(localStorage.getItem("underworld")).isUnderworld;const d=localStorage.getItem("HealEnabled"),e=localStorage.getItem("useVillaMedici"),h=localStorage.getItem("useHealingPotion");
if("true"==d&&V.u<=Number(b)&&J(K())-Qa||"true"==e&&aa==qa&&V.u<=b&&1==c||"true"==h&&V.u<=b&&1==c){c=document.createElement("div");c.setAttribute("id","lowHealth");c.setAttribute("style","\n                display: block;\n                position: absolute;\n                top: 140px;\n                left: 50%;\n                transform: translateX(-30%);\n                width: 115px;\n                color: rgba(234, 20, 20, 0.9);\n                background-color: rgba(0, 0, 0, 0.8);\n                font-size: 20px;\n                border-radius: 5px;\n                border-left: 10px solid rgba(234, 20, 20, 0.9);\n                border-right: 10px solid rgba(234, 20, 20, 0.9);\n                will-change: transform, opacity;\n                z-index: 999;\n            ");
c.innerHTML='<span class="span-new">Low Health!</span>';document.getElementById("header_game").insertBefore(c,document.getElementById("header_game").children[0]);async function k(){if("inventoryPage"!==document.body.id)cg("mod=inventory&sub=3&subsub=1");else{await new Promise(H=>setTimeout(H,500));var r=Array.from(document.querySelectorAll("#shop .ui-draggable"));const v=V.gold,w=Va.searchParams.get("doll")||"";let z=!1,B=0;for(const H of r){if(B>=Number(localStorage.getItem("FoodAmount")))break;
r=parseInt(H.getAttribute("data-price-gold"),10);var u=H.getAttribute("data-basis");u=u&&"7"===u.split("-")[0];if(v>=r&&u){z=!0;r=Array.from(document.querySelectorAll('#inventory_nav a.awesome-tabs[data-available="true"]'));localStorage.removeItem("healingStateX");for(const U of r)if(await new Promise(P=>setTimeout(P,370)),U.click(),r=document.getElementById("inv"),re(r,H)){Aa(H,"inv");B++;await new Promise(P=>setTimeout(P,370));if(B>=Number(localStorage.getItem("FoodAmount"))&&(await new Promise(P=>
setTimeout(P,370)),"1"!==w)){cg("mod=overview&doll=1");return}break}}}z||(!z&&"true"===localStorage.getItem("HealClothToggle")||!z&&"true"===localStorage.getItem("HealClothToggle")&&"true"===localStorage.getItem("HealRubyToggle")?await G():(y("Not enough gold/or no item to buy. Waiting for 30sec to refresh."),localStorage.removeItem("healingStateX"),await new Promise(H=>setTimeout(H,3E4)),window.location.reload()));async function G(){if("true"===localStorage.getItem("HealClothToggle")||"true"===localStorage.getItem("HealRubyToggle")){if(document.querySelector('img[src*="91e0372cccc24f52758be611a10a3b"]')){var H=
jQuery('form[action*="index.php?mod=inventory&sub=3&subsub=1"]'),U=H.attr("action");H=H.find('input[name="bestechen"]')[0];var P=O("sh");await jQuery.post(`${U}?mod=inventory&sub=3&subsub=1&sh=${P}`,{bestechen:H.value})?y("Store has been refreshed."):y("Error while processing request.")}else 0<eg().Kh&&"true"===localStorage.getItem("HealRubyToggle")&&!document.querySelector('img[src*="91e0372cccc24f52758be611a10a3b"]')?(H=jQuery('form[action*="index.php?mod=inventory&sub=3&subsub=1"]'),U=H.attr("action"),
H=H.find('input[name="bestechen"]')[0],P=O("sh"),await jQuery.post(`${U}?mod=inventory&sub=3&subsub=1&sh=${P}`,{bestechen:H.value})?y("Store has been refreshed."):y("Error while processing request.")):(y("No Ruby or Cloth, disabling the options."),localStorage.setItem("HealClothToggle","false"),localStorage.setItem("HealRubyToggle","false"));window.location.reload()}else localStorage.removeItem("healingStateX"),setTimeout(()=>{window.location.reload()},6E4)}return!1}}async function m(){if("guild"==
O("mod"))localStorage.setItem("useVillaMedici","false"),cg("mod=overview");else if("guild_medic"!=O("mod"))cg("mod=guild_medic");else{var r=Array.from(document.querySelectorAll("#content a")).filter(({href:u})=>u.includes("mod=guild_medic"));0<r.length?window.location.href=r[0].href:(r=Math.min(...Array.from(document.querySelectorAll("span[data-ticker-time-left]")).map(u=>parseInt(u.getAttribute("data-ticker-time-left")))),isFinite(r)&&Z("VillaMedici",Math.ceil(r/6E4)),y("Nothing to do so I am going to pray!"),
cg("mod=underworld&submod=prayStart"))}}async function n(){let r=!1;if("mod=premium&submod=inventory"!=ue)cg("mod=premium&submod=inventory");else{await new Promise(u=>setTimeout(u,500));for(let u=0,v=document.querySelectorAll(".contentboard_paper_repeat");u<v.length;u++)if(v[u].querySelector("img").src&&v[u].querySelector("img").src.includes("5fd403b4efa8ea7bc3ca5a852bfce9")||v[u].querySelector("img").src&&v[u].querySelector("img").src.includes("token/18")||v[u].querySelector("img").src.includes("5fd403b4efa8ea7bc3ca5a852bfce9")){r=
!0;v[u].querySelector("input").click();bg(1E3);return}r||(localStorage.setItem("useHealingPotion","false"),bg(1E3))}}function l(){return new Promise(async r=>{try{await bh();let u=document.getElementById("inv"),v=0,w;const z=localStorage.getItem("HealPickBag");z&&(w=511+Number(z)||512);const B=Array.from(document.querySelectorAll(`#inventory_nav a.awesome-tabs[data-bag-number="${w}"]`));0<B.length&&B[0].click();jQuery.get(za({mod:"packages",f:"7",fq:"-1",qry:"",page:"1",sh:O("sh")})).done(G=>{G=jQuery(G).find(".packageItem");
if(0===G.length)return y("No healing item found in packages."),r(!1);let H=[];for(let C=0;C<G.length;C++){const W=G[C],Q=parseInt(W.querySelector("[data-content-type]").getAttribute("data-basis").split("-")[1]);0>[30,35].indexOf(Q)&&H.push(W)}if(0===H.length)return y("No suitable items found."),localStorage.setItem("healingStateX","true"),r(!1);G=document.getElementById("inv");const U=[5,8],P=Sb(G),va=C=>{if(v>=Number(localStorage.getItem("FoodAmount")))return y("Foods has been picked. Ending process."),
r(!0);if(C>=H.length){if(0<v)return y("At least one food has been picked. Ending process."),r(!0);y("No suitable space found in bag to pick food.");return r(!1)}var W=H[C],Q=W.querySelector("[data-content-type]");W=W.querySelector("input").getAttribute("value");const ba=parseInt(Q.getAttribute("data-measurement-x")),ja=parseInt(Q.getAttribute("data-measurement-y")),ra=parseInt(Q.getAttribute("data-amount"));var ka=Tb(U[0],U[1],P);if(ka=Zb(ja,ba,ka))P.push({x:ka.x,y:ka.y,fg:ja,w:ba}),jQuery.post(D({mod:"inventory",
submod:"move",from:"-"+W,fromX:1,fromY:1,to:w,toX:ka.x+1,toY:ka.y+1,amount:ra}),{a:(new Date).getTime(),sh:O("sh")}),v++,Q=jQuery(Q).css({left:32*ka.x,top:32*ka.y}),u.appendChild(Q[0]),setTimeout(()=>{va(++C);y("Getting food from packages.")},500);else return y("No suitable space found in bag to pick food."),r(!1)};va(0)}).fail(()=>{y("Error retrieving packages.");return r(!1)})}catch{return r(!1)}})}async function q(){var r=JSON.parse(localStorage.getItem("underworld")).isUnderworld;const u="true"===
localStorage.getItem("HealShop"),v="true"===localStorage.getItem("healingStateX"),w="true"===localStorage.getItem("HealPackage");v&&u?await k()?await q():(localStorage.removeItem("healingStateX"),await t()):!0===r||"true"===h&&!0===r?"true"===localStorage.getItem("useVillaMedici")&&Ae("VillaMedici")?m():"true"===localStorage.getItem("useHealingPotion")?await n():"mod=underworld&submod=pray"!=ue&&("true"===localStorage.getItem("HealEnabled")?V.u<=Number(b):1)?(y("Nothing to do. So I am going to pray!"),
cg("mod=underworld&submod=prayStart")):"mod=underworld&submod=pray"==ue&&("true"===localStorage.getItem("HealEnabled")?V.u<=Number(b):1)?(await new Promise(z=>setTimeout(z,6E4)),y("Im going to refresh in 60 seconds to check for my health and villa medici."),window.location.reload()):(y("Waiting for Villa Medici, refreshing in 60 seconds."),bg(6E4)):0==r&&("1"!==((new URL(window.location.href)).searchParams.get("doll")||"")?"mod=overview&doll=1"!=ue&&cg("mod=overview&doll=1"):!await t()&&V.u<=Number(b)&&
(w?(r=await l(),!r&&u?(localStorage.setItem("healingStateX","true"),k()):r&&window.location.reload()):u?(localStorage.setItem("healingStateX","true"),k()):(y("No more heal items. Waiting 30 seconds"),await new Promise(z=>setTimeout(z,3E4)),window.location.reload())))}async function t(){return new Promise(async r=>{let u=!1;if("mod=overview&doll=1"!=ue)cg("mod=overview&doll=1");else{const H="true"===localStorage.getItem("HealPackage"),U="true"===localStorage.getItem("HealShop");var v=Array.from(document.querySelectorAll("#inventory_nav a.awesome-tabs")),
w=v.findIndex(P=>P.classList.contains("current"));v=v.slice(w).concat(v.slice(0,w));for(w=0;w<v.length;w++){var z=v[w];if("false"!==z.getAttribute("data-available")&&(await new Promise(P=>setTimeout(P,150)),z.click(),z.classList.contains("current"))){z=document.querySelectorAll("#inv .ui-draggable");z=Array.from(z).filter(Q=>{const ba=Q.getAttribute("data-basis"),ja=localStorage.getItem("HealCervisia");return"true"===Q.getAttribute("data-soulbound-to")?!1:"true"===ja&&"7-35"===ba?!0:ba&&"7"===ba.split("-")[0]&&
"7-35"!==ba});function P(Q,ba,ja){let ra=null,ka=0,sb=Infinity;const bb=localStorage.getItem("playerId")||0;for(const L of Q){if((Q=L.getAttribute("data-soulbound-to"))&&Q!==bb)continue;Q=(Q=L.getAttribute("data-tooltip").match(/Heals ([\d,\.]+) of life/))?parseInt(Q[1].replace(/\./g,""),10):0;const T=ja-(ba+Q);0<=T&&T<sb?(ra=L,sb=T):0>T&&Q>ka&&(ka=Q,ra=L)}return ra}const {di:va,ti:C}=function(){var Q=document.querySelector("#header_values_hp_bar");const ba=parseInt(Q.getAttribute("data-value"),10);
Q=parseInt(Q.getAttribute("data-max-value"),10);return{di:ba,ti:Q}}();var B=new URL(window.location.href),G=B.origin;const W=B.searchParams.get("sh");B=!1;if("true"==localStorage.getItem("autoEnterHell")){G=await (await fetch(`${G}/game/index.php?mod=hermit&sh=${W}`)).text();G=(new DOMParser).parseFromString(G,"text/html");G=Array.from(G.querySelectorAll('div[style="margin:20px"]'));for(let Q of G)if(Q.querySelector('a[href^="index.php?mod=hermit&submod=underworld&sh="]')){B=!0;break}}if(B){B=0;G=
localStorage.getItem("playerId");for(const Q of z)if(z=Q.getAttribute("data-soulbound-to"),(!z||z===G)&&"true"===localStorage.getItem("autoEnterHell"))if(Q){if(await new Promise(ba=>setTimeout(ba,250)),await Aa(Q,"avatar"),await new Promise(ba=>setTimeout(ba,450)),y("HP Recovered."),B++,2<=B){window.location.reload();return}}else{z=!1;H&&(z=await l());if(!z&&U)return localStorage.setItem("healingStateX","true"),k(),!0;window.location.reload()}}else for(const Q of z){u=!0;if(B=P(z,va,C)){await new Promise(ba=>
setTimeout(ba,250));await Aa(B,"avatar");await new Promise(ba=>setTimeout(ba,450));y("HP Recovered.");window.location.reload();return}B=!1;H&&(B=await l());if(!B&&U){localStorage.setItem("healingStateX","true");k();return}window.location.reload()}}}r(u)}})}await q()}}},Ob={isUnderworld(){if("underworld"==document.getElementById("wrapper_game").className){var b=JSON.parse(localStorage.getItem("underworld")||"{}");b.isUnderworld=!0;localStorage.setItem("underworld",JSON.stringify(b))}else b=JSON.parse(localStorage.getItem("underworld")||
"{}"),b.isUnderworld=!1,localStorage.setItem("underworld",JSON.stringify(b));return(b=document.querySelector("#submenu2 a"))&&b.href.match(/mod=.*&sh/)&&"mod=underworld&submod=leave"===b.href.match(/mod=.*&sh/)[0].slice(0,-3)?!0:!1},cooldown(){var b=(new Date).getTime();let c=JSON.parse(localStorage.getItem("underworld"))||{};c.cooldown=b;localStorage.setItem("underworld",JSON.stringify(c));let d=document.getElementById("submenu2");d&&d.innerHTML.includes("index.php?mod=underworld")?c.isUnderworld=
!0:c.isUnderworld=!1;if(fa.cooldown&&fa.cooldown>b)return!1;if(b=document.querySelectorAll(".buff-clickable"))for(let e of b)if(e.getAttribute("data-link")=="index.php?mod=location&sh="+O("sh"))return!1;return!0},async start(){this.location=Array.from(document.querySelectorAll("#submenu2 a")).pop().href;var b="true"===localStorage.getItem("farmEnable");const c=localStorage.getItem("farmLocation")||1,d=localStorage.getItem("farmEnemy")||1;V.u>Number(localStorage.getItem("healPercentage"))&&await jQuery.get(za({mod:"underworld",
submod:"prayEnd",sh:O("sh")}));if("true"==localStorage.getItem("exitUnderworld")&&0==Number(eg().Hg))b=JSON.parse(localStorage.getItem("underworld")),b.isUnderworld=!1,localStorage.setItem("underworld",JSON.stringify(b)),await jQuery.get(za({mod:"underworld",submod:"exit",sh:O("sh")})),y("Left underworld."),location.reload();else{if(0==Number(eg().Hg)&&"true"==localStorage.getItem("UnderworldUseMobi")){if("mod=premium&submod=inventory"!==ue){cg("mod=premium&submod=inventory");return}const e=document.querySelectorAll(".contentboard_paper_repeat");
for(let h=0;h<e.length;){e[h].querySelector("img").src&&(e[h].querySelector("img").src.includes("c9ce614bbc67a9e85aa0ee87cf2bb7")||e[h].querySelector("img").src.includes("c9ce614bbc67a9e85aa0ee87cf2bb7"))?e[h].querySelector("input").click():localStorage.setItem("UnderworldUseMobi","false");bg(500);return}}if(b&&("true"===localStorage.getItem("HealEnabled")?V.u>Number(localStorage.getItem("healPercentage")):1))ue!=`mod=location&loc=${c}`?cg(`mod=location&loc=${c}`):(document.getElementsByClassName("expedition_button")[parseInt(d)].click(),
bg(5E3));else if(window.location.href!=this.location&&("true"===localStorage.getItem("HealEnabled")?V.u>Number(localStorage.getItem("healPercentage")):1))window.location.href=this.location;else{await jQuery.get(za({mod:"underworld",submod:"prayEnd",sh:O("sh")}));let e=0;Array.from(document.querySelectorAll(".expedition_box")).forEach(h=>{h.querySelector(".expedition_picture img")&&h.querySelector("img").src.includes("904194973d21066c96cb414d04d676")&&e++});document.querySelector("#content .icon_expeditionpoints")&&
0<Number(eg().Hg)&&("true"===localStorage.getItem("HealEnabled")?V.u>Number(localStorage.getItem("healPercentage")):1)||"true"==localStorage.getItem("UnderWorldUseRuby")&&"0"==eg().Hg&&("true"===localStorage.getItem("HealEnabled")?V.u>Number(localStorage.getItem("healPercentage")):1)?document.querySelectorAll(".expedition_button")[Math.floor(3-e)].click():(y("Im going to refresh in 60 seconds to check for my health."),await new Promise(h=>setTimeout(h,6E4)),bg())}}},async hi(){let b=["difficulty_normal",
"difficulty_medium","difficulty_hard"];if("mod=hermit&submod=underworld"!=ue)cg("mod=hermit&submod=underworld");else{const c=localStorage.getItem("hellDifficulty");document.getElementsByName(b[c])[0].click()}}};null===localStorage.getItem("DELAY")&&localStorage.setItem("DELAY","0 seconds");var pc=localStorage.getItem("DELAY");if(pc.includes("to")){const b=pc.split(" "),c=parseInt(b[0],10);var ne=Math.floor(Math.random()*(parseInt(b[2],10)-c+1))+c}else ne=parseInt(pc.split(" ")[0],10);pc.includes("minute")&&
(ne*=60);var $f=1E3*ne;0<$f&&await new Promise(b=>setTimeout(b,$f));var qh=localStorage.getItem("costumeUnderworld"),rh=["9","10","11"];if(ua&&3<localStorage.getItem("activeItems").length&&"true"===localStorage.getItem("activateRepair")&&Ae("repair")&&!window.location.href.includes("/index.php?mod=hermit&submod=underworld")&&aa==qa&&1E4<eg().gold&&("true"===localStorage.getItem("HealEnabled")?V.u>Number(localStorage.getItem("healPercentage")):1)){const b="true"===localStorage.getItem("repairGladiator"),
c="true"===localStorage.getItem("repairMercenary");let d,e;async function h(u,v,w){const z=localStorage.getItem("repairPercentage"),B=null!==z?parseInt(z,10)/100:.1;u=await (await fetch(`${u}/game/index.php?mod=overview&doll=${v}&sh=${w}`)).text();u=(new DOMParser).parseFromString(u,"text/html").getElementById("char").querySelectorAll("div[data-tooltip]");w=(w=localStorage.getItem("workbenchItem"))?JSON.parse(w):{};w.selectedItem=w.selectedItem||{};let G=[];u.forEach(H=>{if(H.classList.contains("ui-draggable")){kb(H);
let U=H.getAttribute("data-container-number"),P=JSON.parse(H.getAttribute("data-tooltip")).pop().pop()[0].match(/\d+/g);null!=P&&P[0]/P[1]<B&&G.push({type:ib(H).split("-")[0],quality:Pa(H),name:kb(H),doll:v,container:U})}});return G}const k=Va.origin,m=Va.searchParams.get("sh")||"";let n=localStorage.getItem("workbenchItem");n=n?JSON.parse(n):{};b&&(d=await h(k,1,m),localStorage.setItem("itemList1",JSON.stringify(d)),pa.itemList1=d);c&&(e=await h(k,2,m),localStorage.setItem("itemList2",JSON.stringify(e)),
pa.itemList2=e);const l=JSON.parse(localStorage.getItem("Timers"));n.selectedItem||(b&&c?0===d.length&&0===e.length&&Z("repair",l.Repair||10):b?0===d.length&&Z("repair",l.Repair||10):c?0===e.length&&Z("repair",l.Repair||10):Z("repair",l.Repair||10));const q={helmet:"2",necklace:"11",weapon:"3",armor:"5",shield:"4",gloves:"9",shoes:"10",rings1:"6",rings2:"7"},t=JSON.parse(localStorage.getItem("activeItems"));function r(u){return Array.isArray(u)&&0!==u.length?u.filter(v=>{const w=Object.keys(q).find(z=>
q[z]===v.container);return w?t[w.toLowerCase()]:!0}):u}d=r(d);e=r(e);localStorage.setItem("itemList1",JSON.stringify(d));localStorage.setItem("itemList2",JSON.stringify(e));pa.itemList1=d;pa.itemList2=e;if(n.selectedItem&&!0===n.selectedItem.enable){let u=d.findIndex(v=>v.name===n.selectedItem.item.name);-1!==u&&d.splice(u,1);u=e.findIndex(v=>v.name===n.selectedItem.item.name);-1!==u&&e.splice(u,1);localStorage.setItem("itemList1",JSON.stringify(d));localStorage.setItem("itemList2",JSON.stringify(e))}if(("true"===
localStorage.getItem("repairGladiator")&&0<d.length||"true"===localStorage.getItem("repairMercenary")&&0<e.length)&&1E4<=eg().gold||n.selectedItem)await Xf.start();else{const u=JSON.parse(localStorage.getItem("Timers"));Z("repair",u.Repair||10);window.location.reload()}}else if(0==await Zg(qa,Vb,ea))Ua();else if(("true"===localStorage.getItem("activateAuction2")||"true"===localStorage.getItem("bidFood"))&&"true"===localStorage.getItem("activateAuction2")&&ua&&9<V.level&&(("true"===localStorage.getItem("auctiongladiatorenable")&&
(0<JSON.parse(localStorage.getItem("auctionSuffixes")).length||0<JSON.parse(localStorage.getItem("auctionPrefixes")).length)||"true"===localStorage.getItem("bidFood"))&&localStorage.getItem("auctionStatus")>=localStorage.getItem("bidStatus")&&Ae("auction")||"true"===localStorage.getItem("auctionmercenaryenable")&&(0<JSON.parse(localStorage.getItem("auctionSuffixes")).length||0<JSON.parse(localStorage.getItem("auctionPrefixes")).length)&&localStorage.getItem("auctionMStatus")>=localStorage.getItem("bidStatus")&&
Ae("auctionM")))await Y.start();else if(ua&&5<V.level&&"true"==localStorage.getItem("storeGoldinAuction")&&Number(eg().gold)>Math.floor(Number(localStorage.getItem("storeGoldinAuctionmaxGold")))&&Ae("enableHideGold"))await Ya.A.start();else if(ua&&"true"===localStorage.getItem("resetExpiredItems")&&5E3<=V.gold&&Ae("resetExpired")){const b=JSON.parse(localStorage.getItem("itemsToReset")||"[]");0<b.length&&await dh(localStorage.getItem("resetDays"),b)}else if(ua&&("true"===localStorage.getItem("HealEnabled")?
V.u>Number(localStorage.getItem("healPercentage")):1)&&J(K())-Qa&&fg()&&aa==qa&&"true"===localStorage.getItem("doKasa")&&Ae("gold")&&eg().gold>Math.floor(localStorage.getItem("KasaHoldGold")))await pg();else if(ua&&"true"===localStorage.getItem("autoEnterHell")&&"true"==sessionStorage.getItem("autoGoActive")&&100<=V.level&&8E3<=V.gold&&V.u>Number(localStorage.getItem("hellEnterHP"))&&Ob.cooldown())Ob.hi();else if(ua&&"true"===localStorage.getItem("EnableSmelt")&&da.ph()&&7E3<V.gold&&Ae("smelt"))Ae("smeltCheck")&&
(da.slots=await da.v(),await da.Zg(da.slots),await da.gh(da.slots),"true"===localStorage.getItem("EnableSmelt")&&7E3<V.gold&da.ph()&&Ae("smelt")&&await da.start());else if(1==ua&&"true"===localStorage.getItem("OilEnable")&&Oa.bi()&&(!Yf||36E5<=Zf-Yf)){y("Checking God Oils.");localStorage.setItem("OillastRan",Zf.toString());const b=await Oa.ji();for(let c=0;c<Oa.Jg.length;c++)await Oa.eh(c,b);y("God Oils Collected");fe()}else if(ua&&V.u<=localStorage.getItem("healPercentage")&&"true"===localStorage.getItem("HealEnabled"))await ph.start();
else if(ua&&"true"===localStorage.getItem("autoEnterHell")&&"true"==localStorage.getItem("autoEnterHell")&&Ob.isUnderworld()&&eg().ii&&aa==qa)await Ob.start();else if(ua&&"true"==localStorage.getItem("useCostume")&&(!window.location.href.includes("/index.php?mod=hermit")&&Ae("CheckDolls")&&rh.some(b=>qh.includes(b))||!window.location.href.includes("/index.php?mod=hermit")&&Ae("CheckDolls")))await ke.start();else if(ua&&(!0===Na&&F()&&aa==qa||!0===Na&&("true"===localStorage.getItem("HealEnabled")?
V.u>Number(localStorage.getItem("healPercentage")):1)&&Lb<le&&aa==qa)){localStorage.setItem("nextQuestTime.timeOut",0);localStorage.setItem("nextQuestTime",0);async function b(){var d=Va.origin,e=$("#content .contentboard_slot a.quest_slot_button_accept"),h="true"===localStorage.getItem("skipTimeQuests");const k="true"===localStorage.getItem("skipTimeCircusQuests"),m="true"===localStorage.getItem("skipTimeOtherQuests"),n="true"===localStorage.getItem("acceptnotfilter"),l=JSON.parse(localStorage.getItem("questKeywords")||
"[]"),q=JSON.parse(localStorage.getItem("acceptQuestKeywords")||"[]");var t=$("#content .contentboard_slot_inactive").toArray();if(e.length){function r(u){return u.includes("8aada67d4c5601e009b9d2a88f478c")?"combat":u.includes("00f1a594723515a77dcd6d66c918fb")?"arena":u.includes("586768e942030301c484347698bc5e")?"circus":u.includes("4e41ab43222200aa024ee177efef8f")?"expedition":u.includes("dc366909fdfe69897d583583f6e446")?"dungeon":u.includes("5a358e0a030d8551a5a65d284c8730")?"items":null}e=!1;for(const u of t){let v=
u.getElementsByClassName("quest_slot_title")[0].innerText;t=r(u.getElementsByClassName("quest_slot_icon")[0].style.backgroundImage);if(!(h&&0<u.getElementsByClassName("quest_slot_time").length&&"arena"==t||k&&0<u.getElementsByClassName("quest_slot_time").length&&"circus"==t||m&&0<u.getElementsByClassName("quest_slot_time").length&&"circus"!==t&&"arena"!==t||l.some(w=>v.includes(w)))){if(q.some(w=>v.includes(w))){h=u.getElementsByClassName("quest_slot_button_accept")[0].getAttribute("href");await jQuery.get(h).done();
e=!0;break}!e&&cb[t]&&n||e||!cb[t]||n||(t=u.getElementsByClassName("quest_slot_button_accept")[0].getAttribute("href"),await jQuery.get(t).done(),e=!0)}}e||(d=`${d}/game/index.php?mod=quests&submod=resetQuests&sh=${O("sh")}`,await jQuery.get(d).done());window.location.reload()}c()}async function c(){var d=$("#quest_header_cooldown");let e;switch(localStorage.getItem("questSpeed")){case "0":e=15E4;break;case "1":e=2E5;break;case "2":e=25E4;break;case "3":e=3E5;break;case "4":e=4E5;break;default:e=
3E5}d.length?(d=Number($("#quest_header_cooldown b span").attr("data-ticker-time-left")),Lb=le+d):Lb=le+e;localStorage.setItem("nextQuestTime",Lb);window.location.reload()}await async function(){if("mod=quests"!=ue)cg("mod=quests");else{let d=[];const e=[],h=[];document.querySelectorAll("a.quest_slot_button_finish").forEach(n=>{n.href&&d.push(n.href)});document.querySelectorAll(".quest_slot_button_restart").forEach(n=>{n.href&&e.push(n.href)});document.querySelectorAll(".quest_slot_button_accept").forEach(n=>
{n.href&&h.push(n.href)});async function k(n){try{n<d.length&&(await jQuery.get(d[n]),await k(n+1))}catch(l){}}async function m(n){try{n<e.length&&(await jQuery.get(e[n]),await m(n+1))}catch(l){console.error("Error in completeQuestsForLink:",l)}}await async function(){0<d.length&&await k(0);0<e.length&&await m(0);0<h.length&&await b();await c()}()}}()}else if(ua&&ye()&&!0===Ga&&!lc&&aa==qa&&0==Jb.isUnderworld&&ca>=new Date&&("true"===localStorage.getItem("HealEnabled")?V.u>Number(localStorage.getItem("healPercentage")):
1)&&J(K())-Qa&&!0===document.getElementById("cooldown_bar_fill_expedition").classList.contains("cooldown_bar_fill_ready"))(function(){function b(){const h=document.getElementById("errorText");"false"===localStorage.getItem("HealEnabled")?(xa(),bg(1E4)):h&&""!==h.innerText.trim()&&location.reload()}var c=localStorage.getItem("expeditionLocation");if(ue!=`mod=location&loc=${c}`)cg(`mod=location&loc=${c}`);else if("true"===localStorage.getItem("nana_lcn")&&Vb){var d="true"===localStorage.getItem("autoCollectBonuses"),
e=localStorage.getItem("selectedEnemy")||0;c=document.getElementsByClassName("expedition_button");try{if(d)for(d=0;d<c.length;d++){const h=c[d].closest(".expedition_box").querySelectorAll(".expedition_bonus.active").length;if(4<=document.querySelectorAll(".expedition_button.disabled").length){window.location.reload();break}4>h?(c[d].click(),fe()):3===d&&c[d].click()}else c[parseInt(e)].click(),4<=document.querySelectorAll(".expedition_button.disabled").length?window.location.reload():setTimeout(b,
800)}catch{window.location.reload()}}})();else if(ua&&!0===Ea&&!lc&&aa==qa&&9<V.level&&J(K())-Qa&&("true"===localStorage.getItem("HealEnabled")?V.u>Number(localStorage.getItem("healPercentage")):1)&&eg().gi&&!0===document.getElementById("cooldown_bar_fill_dungeon").classList.contains("cooldown_bar_fill_ready"))await async function(){if("true"===localStorage.getItem("nana_lcn")&&Vb){var b=localStorage.getItem("dungeonLocation")||"1",c="true"===localStorage.getItem("skipBoss"),d="true"===localStorage.getItem("resetIfLose"),
e="true"===localStorage.getItem("loose"),h="true"===localStorage.getItem("dungeonFocusQuest"),k="chefe \u0161\u00e9f chef chef juht boss Boss jefe jefe jefe patron capo vad\u012bt\u0101js vadovas f\u0151n\u00f6k patron Patron \u0428\u0435\u0444 baas sjef szef chefe \u0219ef \u0161\u00e9f \u0161ef pomo chef patron \u0645\u062f\u064a\u0631 \u03b1\u03c6\u03b5\u03bd\u03c4\u03b9\u03ba\u03cc \u0448\u0435\u0444 \u0431\u043e\u0441\u0441 \u8001\u677f".split(" ");if(ue!=`mod=dungeon&loc=${b}`)cg(`mod=dungeon&loc=${b}`);
else{b=!document.getElementById("content").getElementsByTagName("area")[0];const l=document.getElementById("content").getElementsByClassName("button1");if(2<=l.length){c=l[0].getAttribute("name");d=l[1].getAttribute("name");try{if(b){const q=(new URLSearchParams(window.location.search)).get("loc");"normal"===xb&&"dif1"===c?(jQuery.post(za({mod:"dungeon",loc:q,sh:O("sh")}),{dif1:xb}),l[0].click(),window.location.reload()):"dif2"===d?(jQuery.post(za({mod:"dungeon",loc:q,sh:O("sh")}),{dif2:xb}),l[1].click(),
window.location.reload()):(xa(),setTimeout(()=>{bg()},1E4))}}catch(q){location.reload()}}else if(b)window.location.reload();else try{const q=document.querySelector("#content .map_label"),t=q&&q.textContent.toLowerCase(),r=Array.from(document.querySelectorAll("#content .map_label")).find(u=>k.some(v=>v===u.textContent));if(d&&e)localStorage.setItem("loose","false"),document.querySelectorAll("#content .button1")[0].click();else if(c&&t&&r)document.querySelectorAll("#content .button1")[0].click();else if(t&&
r&&"true"===localStorage.getItem("dungeonAB"))r.click();else if(h){var m=0,n=null;document.querySelectorAll('[onclick*="startFight"]').forEach(function(u){var v=u.getAttribute("onclick").match(/startFight\('(\d+)',/);v&&v[1]&&(v=parseInt(v[1],10),v>m&&(m=v,n=u))});n?n.click():window.location.reload()}else document.querySelector("#content area").click()}catch{window.location.reload()}}}}();else if(ua&&!0===Fa&&!lc&&aa==qa&&J(K())-Qa&&qa===uc&&ca>=new Date&&("true"===localStorage.getItem("HealEnabled")?
V.u>Number(localStorage.getItem("healPercentage")):1)&&!0===document.getElementById("cooldown_bar_fill_arena").classList.contains("cooldown_bar_fill_ready")){async function b(){var h=new URL(window.location.href),k=h.origin;h=h.searchParams.get("sh")||"";var m=localStorage.getItem("scoreRange"),n=[];k=await (await fetch(`${k}/game/index.php?mod=highscore&sh=${h}&a=${m}`)).text();k=(new DOMParser).parseFromString(k,"text/html");k=Array.from(k.querySelectorAll(".section-like.narrow tr.alt span[data-tooltip] div a")).filter(l=>
(l=l.parentNode.querySelector('span[style="color:green;font-weight:bold;"]'))?!("green"===l.style.color||"blue"===l.style.color):null===l);n=[...n,...k];if(0===n.length)return console.log("No players available to attack"),!1;k=JSON.parse(localStorage.getItem("avoidAttackList"))||[];m=function(l){for(var q=l.length,t,r;0!==q;)r=Math.floor(Math.random()*q),--q,t=l[q],l[q]=l[r],l[r]=t;return l}(n);n=0;for(let l of m)if(m=l.textContent.toLowerCase(),!k.map(q=>q.toLowerCase()).includes(m)){m=await c(l.textContent,
h);if(m.includes("index.php?mod=reports")){h=(new URLSearchParams(m)).get("reportId");y("Successfully attacked player in ARENA: "+l.textContent);cg(`mod=reports&submod=showCombatReport&t=2&reportId=${h}`);await new Promise(q=>setTimeout(q,500));return}n++;if(3<=n)break}return!1}async function c(h,k){try{const m=(new URL(window.location.href)).origin;return await (await fetch(`${m}/game/ajax/doArenaFight.php?dname=${h}&a=${(new Date).getTime()}&sh=${k}`,{method:"POST"})).text()}catch{bg(1E3)}}async function d(h){var k=
h.opponentId;const m=h.serverId;h=h.country;var n=(new URL(window.location.href)).origin;n=new URL(`${n}/game/ajax.php`);k={mod:"arena",submod:"doCombat",aType:2,opponentId:k,serverId:m,country:h.toString(),a:(new Date).getTime(),sh:O("sh")};n.search=(new URLSearchParams(k)).toString();return await (await fetch(n,{method:"GET",credentials:"include",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"})})).text()}async function e(){function h(u){const v=null!==u.querySelector("span[style*='color:green;']");
return Array.from(u.querySelectorAll("a, span")).find(w=>"green"===w.style.color||"bold"===w.style.fontWeight)||v}var k=new URL(window.location.href);const m=k.origin;var n=await (await fetch(`${m}/game/index.php?mod=arena&sh=${O("sh")}`)).text();n=(new DOMParser).parseFromString(n,"text/html");var l=Array.from(n.querySelectorAll('table[width="80%"] tbody tr')).filter(u=>u.querySelector(".attack"));if(l.length&&1!==l.length){var q=null;n=JSON.parse(localStorage.getItem("avoidAttackList"))||[];if("true"===
localStorage.getItem("leaguerandom")){l=l.sort(()=>Math.random()-.5);for(var t of l){var r=t.querySelector("a");r=r?r.innerText:null;if(!h(t)&&!n.includes(r)){q=t;break}}}else if("true"===localStorage.getItem("leaguelowtohigh")){l=l.sort((u,v)=>parseInt(u.querySelector("th")?u.querySelector("th").textContent:"0")-parseInt(v.querySelector("th")?v.querySelector("th").textContent:"0"));t=null;q=-1;for(r of l)l=(l=r.querySelector("a"))?l.innerText:null,h(r)||n.includes(l)||(l=parseInt(r?.querySelector("th")?.textContent),
l>q&&(q=l,t=r));q=t}if(null===q)localStorage.setItem("leaguelowtohigh","false"),localStorage.setItem("leaguerandom","false"),localStorage.setItem("leagueattackenable","false"),bg(500);else if(q)if(n=q.querySelector(".attack").getAttribute("onclick").match(/\d+/)[0],r=(new Date).getTime(),k=k.searchParams.get("sh")||"",await new Promise(u=>setTimeout(u,1E3)),k=await (await fetch(`${m}/game/ajax/doArenaFight.php?did=${n}&a=${r}&sh=${k}`)).text(),(n=k.match(/document\.location\.href\s*=\s*'([^']+)'/))&&
n[1])window.location=`${m}/game/${n[1]}`;else{k.includes("5")&&("true"===localStorage.getItem("leaguelowtohigh")?(localStorage.setItem("leaguelowtohigh","false"),localStorage.setItem("leaguerandom","true")):"true"===localStorage.getItem("leaguerandom")&&(localStorage.setItem("leaguerandom","false"),localStorage.setItem("leaguelowtohigh","false"),localStorage.setItem("leagueattackenable","false")),location.reload());if(k.includes("errorRow"))return!1;window.location.reload()}}else localStorage.setItem("leagueattackenable",
"false"),location.reload()}await async function(){function h(v){const w=Date.now(),z=u.findIndex(B=>B.playerName===v);-1<z?u[z].timeout=w:u.push({playerName:v,timeout:w});localStorage.setItem("playerTimeouts",JSON.stringify(u))}function k(v,w){const z=Date.now();if(Array.isArray(u)){const B=u.find(G=>G.playerName===v);return!B||z-B.timeout>w}return!u[v]||z-u[v]>w}function m(v){for(var w=v.length-1;0<w;w--){const z=Math.floor(Math.random()*(w+1));[v[w],v[z]]=[v[z],v[w]]}2<v.length&&(w=v.splice(0,2),
v.push(...w));return v}async function n(v,w,z){try{const B=w.match(/\d+/)[0],G=w.match(/\w+/g)[2],H=(new URLSearchParams(w)).get("p");localStorage.setItem("tempOpponentDetails",JSON.stringify({playerName:z,aType:v,opponentId:H,serverId:B,country:G}));const U=await jQuery.get(D({mod:"arena",submod:"confirmDoCombat",aType:v,opponentId:H,serverId:B,country:G,a:(new Date).getTime(),sh:O("sh")})),P=(new URLSearchParams(U)).get("reportId");P||window.location.reload();cg(`mod=reports&submod=showCombatReport&t=${v}&reportId=${P}`)}catch(B){document.getElementById("content").querySelector("form > input").click()}}
"true"===localStorage.getItem("leagueattackenable")&&await e();"true"===localStorage.getItem("scoreboardattackenable")&&await b();var l=(new URL(window.location.href)).searchParams.get("sh")||"",q=JSON.parse(localStorage.getItem("autoAttackList"))||[];let t=JSON.parse(localStorage.getItem("autoAttackServerList"))||[];const r=JSON.parse(localStorage.getItem("avoidAttackList"))||[];let u=JSON.parse(localStorage.getItem("playerTimeouts"))||[];if(Ae("arena")&&0<q.length||Ae("arena")&&0<t.length)try{m(q);
localStorage.setItem("autoAttackList",JSON.stringify(q));m(t);localStorage.setItem("autoAttackServerList",JSON.stringify(t));let v=0,w=0,z=0;for(;2>v&&(w<q.length||z<t.length);){let B,G,H;(H=w<q.length&&z<t.length?.5>Math.random():z<t.length)?(G=t[z],B=G.playerName,z++):(B=q[w],w++);if(!r.includes(B)&&k(B,6E4*(10+Math.floor(36*Math.random())))){let U;U=H?await d(G):await c(B,l);if(U.includes("index.php?mod=reports")&&!U.includes("errorRow")){h(B);y("Successfully attacked player in ARENA: "+B);window.location.reload();
break}}v++}if(2===v){const B=JSON.parse(localStorage.getItem("Timers"));Z("arena",B.Arena||5);window.location.reload()}}catch(v){window.location.reload()}if("mod=arena&submod=serverArena&aType=2"!=ue)cg("mod=arena&submod=serverArena&aType=2");else try{let v=[...q,...t].map(z=>z.playerName);const w=Array.from(document.querySelectorAll("#own2 tr"));l=null;q=Infinity;for(let z of w){const B=z.querySelector("a"),G=z.querySelector("td:nth-child(2)");if(B&&G){const H=B.innerText,U=parseInt(G.textContent.trim(),
10),P=r.includes(H),va=null!==B.querySelector("span[style*='color:green;']"),C="green"===B.style.color,W="true"===localStorage.getItem("circusAttackGM")||"true"===localStorage.getItem("arenaAttackGM");if(!P&&(W||!va&&!C)){if(v.includes(H)){y("Successfully attacked player in ARENA: "+H);l=B;break}!l&&U<q&&(q=U,l=B)}}}if(l)await n(2,l.href,l.outerText);else{const z=document.querySelector('form[name="filterForm"] input[type="submit"]');z&&z.click()}}catch{window.location.reload()}}()}else if(ua&&!0===
Ba&&9<V.level&&aa==qa&&J(K())-Qa&&("true"===localStorage.getItem("HealEnabled")?V.u>Number(localStorage.getItem("healPercentage")):1)&&!0===document.getElementById("cooldown_bar_fill_ct").classList.contains("cooldown_bar_fill_ready")){async function b(){var h=new URL(window.location.href),k=h.origin;h=h.searchParams.get("sh")||"";var m=localStorage.getItem("scoreRangeCircus"),n=[];k=await (await fetch(`${k}/game/index.php?mod=highscore&sh=${h}&a=${m}`)).text();k=(new DOMParser).parseFromString(k,
"text/html");k=Array.from(k.querySelectorAll(".section-like.narrow tr.alt span[data-tooltip] div a")).filter(l=>(l=l.parentNode.querySelector('span[style="color:green;font-weight:bold;"]'))?!("green"===l.style.color||"blue"===l.style.color):null===l);n=[...n,...k];if(0===n.length)return console.log("No players available to attack"),!1;k=JSON.parse(localStorage.getItem("avoidAttackCircusList"))||[];m=function(l){for(var q=l.length,t,r;0!==q;)r=Math.floor(Math.random()*q),--q,t=l[q],l[q]=l[r],l[r]=
t;return l}(n);n=0;for(let l of m)if(m=l.textContent.toLowerCase(),!k.map(q=>q.toLowerCase()).includes(m)){m=await c(l.textContent,h);if(m.includes("index.php?mod=reports")){h=(new URLSearchParams(m)).get("reportId");y("Successfully attacked player in CIRCUS: "+l.textContent);cg(`mod=reports&submod=showCombatReport&t=3&reportId=${h}`);await new Promise(q=>setTimeout(q,500));return}n++;if(3<=n)break}return!1}async function c(h,k){try{const m=(new URL(window.location.href)).origin;return await (await fetch(`${m}/game/ajax/doGroupFight.php?dname=${h}&a=${Date.now()}&sh=${k}`,
{method:"POST"})).text()}catch{bg(1E3)}}async function d(h){var k=h.opponentId;const m=h.serverId;h=h.country;var n=(new URL(window.location.href)).origin;n=new URL(`${n}/game/ajax.php`);k={mod:"arena",submod:"doCombat",aType:3,opponentId:k,serverId:m,country:h.toString(),a:(new Date).getTime(),sh:O("sh")};n.search=(new URLSearchParams(k)).toString();return await (await fetch(n,{method:"GET",credentials:"include",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"})})).text()}
async function e(){function h(u){const v=null!==u.querySelector("span[style*='color:green;']");return Array.from(u.querySelectorAll("a, span")).find(w=>"green"===w.style.color||"bold"===w.style.fontWeight)||v}var k=new URL(window.location.href);const m=k.origin;var n=await (await fetch(`${m}/game/index.php?mod=arena&submod=grouparena&sh=&sh=${O("sh")}`)).text();n=(new DOMParser).parseFromString(n,"text/html");var l=Array.from(n.querySelectorAll('table[width="80%"] tbody tr')).filter(u=>u.querySelector(".attack"));
if(l.length&&1!==l.length){var q=null;n=JSON.parse(localStorage.getItem("avoidAttackCircusList"))||[];if("true"===localStorage.getItem("leaguecircusrandom")){l=l.sort(()=>Math.random()-.5);for(var t of l){var r=t.querySelector("a");r=r?r.innerText:null;if(!h(t)&&!n.includes(r)){q=t;break}}}else if("true"===localStorage.getItem("leaguecircuslowtohigh")){l=l.sort((u,v)=>parseInt(u.querySelector("th")?u.querySelector("th").textContent:"0")-parseInt(v.querySelector("th")?v.querySelector("th").textContent:
"0"));t=null;q=-1;for(r of l)l=(l=r.querySelector("a"))?l.innerText:null,h(r)||n.includes(l)||(l=parseInt(r?.querySelector("th")?.textContent),l>q&&(q=l,t=r));q=t}if(null===q)localStorage.setItem("leaguecircuslowtohigh","false"),localStorage.setItem("leaguecircusrandom","false"),localStorage.setItem("leaguecircusattackenable","false"),bg(500);else if(q)if(n=q.querySelector(".attack").getAttribute("onclick").match(/\d+/)[0],r=(new Date).getTime(),k=k.searchParams.get("sh")||"",await new Promise(u=>
setTimeout(u,1E3)),k=await (await fetch(`${m}/game/ajax/doGroupFight.php?did=${n}&a=${r}&sh=${k}`)).text(),(n=k.match(/document\.location\.href\s*=\s*'([^']+)'/))&&n[1])window.location=`${m}/game/${n[1]}`;else{k.includes("5")&&("true"===localStorage.getItem("leaguecircuslowtohigh")?(localStorage.setItem("leaguecircuslowtohigh","false"),localStorage.setItem("leaguecircusrandom","true")):"true"===localStorage.getItem("leaguecircusrandom")&&(localStorage.setItem("leaguecircusrandom","false"),localStorage.setItem("leaguecircuslowtohigh",
"false"),localStorage.setItem("leaguecircusattackenable","false")),location.reload());if(k.includes("errorRow"))return!1;window.location.reload()}}else localStorage.setItem("leaguecircusattackenable","false"),location.reload()}await async function(){function h(v){const w=Date.now(),z=u.findIndex(B=>B.playerName===v);-1<z?u[z].timeout=w:u.push({playerName:v,timeout:w});localStorage.setItem("playerTimeouts",JSON.stringify(u))}function k(v,w){const z=Date.now();if(Array.isArray(u)){const B=u.find(G=>
G.playerName===v);return!B||z-B.timeout>w}return!u[v]||z-u[v]>w}function m(v){for(var w=v.length-1;0<w;w--){const z=Math.floor(Math.random()*(w+1));[v[w],v[z]]=[v[z],v[w]]}2<v.length&&(w=v.splice(0,2),v.push(...w));return v}async function n(v,w,z){try{const B=w.match(/\d+/)[0],G=w.match(/\w+/g)[2],H=(new URLSearchParams(w)).get("p");localStorage.setItem("tempOpponentDetails",JSON.stringify({playerName:z,aType:v,opponentId:H,serverId:B,country:G}));const U=await jQuery.get(D({mod:"arena",submod:"confirmDoCombat",
aType:v,opponentId:H,serverId:B,country:G,a:(new Date).getTime(),sh:O("sh")})),P=(new URLSearchParams(U)).get("reportId");P||window.location.reload();cg(`mod=reports&submod=showCombatReport&t=${v}&reportId=${P}`)}catch(B){document.getElementById("content").querySelector("form > input").click(),bg(1E3)}}"true"===localStorage.getItem("leaguecircusattackenable")&&await e();"true"===localStorage.getItem("scoreboardcircusenable")&&await b();var l=(new URL(window.location.href)).searchParams.get("sh")||
"",q=JSON.parse(localStorage.getItem("autoAttackCircusList"))||[];let t=JSON.parse(localStorage.getItem("autoAttackCircusServerList"))||[];const r=JSON.parse(localStorage.getItem("avoidAttackCircusList"))||[];let u=JSON.parse(localStorage.getItem("playerTimeouts"))||[];if(Ae("circus")&&0<q.length||Ae("circus")&&0<t.length)try{m(q);localStorage.setItem("autoAttackCircusList",JSON.stringify(q));m(t);localStorage.setItem("autoAttackCircusServerList",JSON.stringify(t));let v=0,w=0,z=0;for(;2>v&&(w<q.length||
z<t.length);){let B,G,H;(H=w<q.length&&z<t.length?.5>Math.random():z<t.length)?(G=t[z],B=G.playerName,z++):(B=q[w],w++);if(!r.includes(B)&&k(B,6E4*(10+Math.floor(36*Math.random())))){let U;U=H?await d(G):await c(B,l);if(U.includes("index.php?mod=reports")&&!U.includes("errorRow")){h(B);y("Successfully attacked player in CIRCUS: "+B);window.location.reload();break}}v++}if(2===v){const B=JSON.parse(localStorage.getItem("Timers"));Z("circus",B.CircusTurma||5);window.location.reload()}}catch(v){window.location.reload()}if("mod=arena&submod=serverArena&aType=3"!=
ue)cg("mod=arena&submod=serverArena&aType=3");else try{if(document.querySelector(".messages .message.fail"))localStorage.setItem("doCircus",!1),window.location.reload();else{let v=[...q,...t].map(z=>z.playerName);const w=Array.from(document.querySelectorAll("#own3 tr"));l=null;q=Infinity;for(let z of w){const B=z.querySelector("a"),G=z.querySelector("td:nth-child(2)");if(B&&G){const H=B.innerText,U=parseInt(G.textContent.trim(),10),P=r.includes(H),va=null!==B.querySelector("span[style*='color:green;']"),
C="green"===B.style.color,W="true"===localStorage.getItem("circusAttackGM")||"true"===localStorage.getItem("arenaAttackGM");if(!P&&(W||!va&&!C)){if(v.includes(H)){y("Successfully attacked player in CIRCUS: "+H);l=B;break}!l&&U<q&&(q=U,l=B)}}}if(l)await n(3,l.href,l.outerText);else{const z=document.querySelector('form[name="filterForm"] input[type="submit"]');z&&z.click()}}}catch{window.location.reload()}}()}else ua&&!0===Ca&&Ae("eventPoints")&&("true"===localStorage.getItem("HealEnabled")?V.u>Number(localStorage.getItem("healPercentage")):
1)?await async function(){var b=jQuery("#submenu2 a").filter(".glow")?jQuery("#submenu2 a").filter(".glow")[0].href.match(/mod=.*&sh/)[0].slice(0,-3):null;if(ue!=b)cg(b);else{var c=document.querySelector("#content .ticker"),d=parseInt(document.querySelectorAll(".section-header p")[1].innerText.match(/\d+/g)[0]);b=$b;localStorage.setItem("eventPoints_",d);if(c){b=document.querySelector('[data-ticker-type="countdown"]').textContent.trim().split(" ").pop();let [e,h,k]=b.split(":").map(Number);(b=(new Date).getTime()+
1E3*(3600*e+60*h+k)+1)?localStorage.setItem("eventPoints.timeOut",b):Z("eventPoints",5);setTimeout(cg,1E3,"mod=overview")}else!c&&0<d?(3==b&&1==d&&(b=2),setTimeout(dg,1E3,document.querySelectorAll(".expedition_button")[b])):!d&&"true"===localStorage.getItem("renewEvent")&&0<eg().Kh?(d=new URL(window.location.href),c=d.origin,d=d.searchParams.get("loc"),"streets_of_rome"!=d?(b=new URLSearchParams({mod:"location",loc:d,reset:"true",sh:O("sh")}),fetch(`${c}/game/index.php?${b.toString()}`).then(()=>
{window.location.reload()}).then(()=>{window.location.reload()}).catch(()=>{window.location.reload()})):setTimeout(dg,1E3,document.querySelectorAll(".expedition_button")[b])):0==d&&"false"===localStorage.getItem("renewEvent")?(Z("eventPoints",5),location.reload()):0==d&&setTimeout(cg,5E3,"mod=overview")}}():ua&&("true"==localStorage.getItem("useCostume")&&Ae("CheckDolls")&&await kh.start(),fe());ca<new Date&&aa!=qa&&Ua()}})();const hg={ic:"Hell Farm [Manual, Beta]",jc:"Be aware: Turn on this feature after unlocking the creature you want to attack, it will not automatically attack to unlock the monster.",hc:"Farm Location",fc:"Farm Enemy",Gb:"Auto Login",Hb:"You need to allow pop-ups from the lobby screen for GameForge. See documentation on how to do it.",dd:"Pause Bot",ed:"Pause Bot in (Minutes)",dc:"Expiration Date",ad:"Only buy food?",bd:"If you enable this, it will ignore your selections and buy food automatically without entering anything.",
Ba:"Max total gold to spend",Aa:"Max gold per food to spend",$c:"Bot will check oils every 60 minutes",ke:"Sets a timer to check smelting times.",he:"Sets a timer to check smelting after you dont have gold.",je:"Sets a timer to check smelting if you dont have available item.",ce:"Sets a timer for repair to check your items.",be:"Sets a timer to check guild market hold gold.",Yd:"Sets a timer for auction hold gold option.",Ud:"Sets a timer to check the arena pvp list to attack.",Zd:"Sets a timer to check the circus pvp list to attack.",
qe:"Sets a timer for training to train your stats.",ee:"Sets a timer to reset expired items.",oe:"Sets a timer to store forge materials to horreum.",Wd:"Sets a timer to check gladiatos & mercenary auction.",ge:"Sets a timer to search for items in auction&shop.",$d:"Sets the timer of sending donation to the guild.",mc:"Gold Moved",Ub:"Don't sell smelt list items",Dd:"Shop Automation",Fd:"Item Search Settings",Ed:"Use this tool to search for items. Simply add the items to the list, specify the cloth amount, and start the search.",
Gd:"Cloths to use:",Hd:"How many cloths to use?",Ma:"Enter Item Name",La:"Enter Item Level",Jd:"Item Quality",Id:"Item Name Here",Kd:"Start Searching",Ld:"Skip and Continue",Md:"Stop Searching",kc:"Sort Guild Market by",Xc:"Most Expensive",Ob:"Cheapest",Cd:"Select an option",Xb:"Highlight Underworld Items",lc:"Focus on the quest?",Dg:"Use ruby if there isnt cloth?",na:"To add cross server players, you need to open their profile and use the A & C buttons. Note : Avoid attacking the same people always to prevent getting reported. Being reported increases the chances of getting banned.",
tf:"Smelt Green?",jd:"Do not accept random quests if entered any filters?",Ve:"Max Material Quality to use",Ne:"Enable Mercenary Search",kg:"Click \u2018Sell All Selected\u2019 to sell all items. Make sure to have 2x3 empty space in your first (1) bag and select quality. To mass collect Gold, use `USE GOLD` panel below or filter gold and use the `Pick Selected or Pick All`",sb:"\ud83d\udd25 : Adds item to smelting list.",Ua:"\ud83d\udd28 : Adds item to auction list.",nf:"Refresh shop automatically with cloth when its full.",
bf:"Page:",kf:"Stop",hf:"Sell This Page",ef:"Pick Selected",cf:"Pick All",lf:"Auto Package Settings",jf:"Send Resources",ff:"Sell All Selected",Y:"Item Type",pb:"Weapons",mb:"Shields",bb:"Armour",hb:"Helmets",gb:"Gloves",cb:"Boots",kb:"Rings",ab:"Amulets",eb:"Usables (Foods)",ob:"Upgrades",Ze:"Boosts",jb:"Recipes",ib:"Mercenary",nb:"Forging Tools",lb:"Scrolls",df:"Reinforcements",$e:"Event Items",fb:"Forging Goods",af:"Gold",D:"All",rg:"Quality",qb:"White",G:"Green",F:"Blue",H:"Purple",Z:"Orange",
ja:"Red",gf:"Sell All Options",uf:"Ignore Prefix/Suffix Combination?",Qe:"How many food to buy/pick?",Ie:"Normal",He:"Middle",Ge:"Hard",Xa:"Standard",sg:"Repair Stuck Fix",Nf:"Hell mode will automatically disable Dungeon/Arena/Circus, and enable all of them after underworld. Disable Enter Hell if you want to disable Dungeon/Circus/Arena. If you entered hell manually, you need to enable Hell Mode.",te:"Set how many times you want to train the stats and their priorities. The bot wont train unless you set a priority. If there is no more stat left but priority is set, it will continue with checked stat.",
bg:"Quest",xg:"Smelt",zg:"Smelt Settings",xf:"Smelted Items",Af:"Add Prefix or Suffix, once it finds it in the packages it will smelt automatically. If you only want to look for all the items listed without checking their combination, enable Ignore combination option.",yg:"Smelting Item:",Wa:"Click on the item you want to repair and choose the highest quality materials to use. You need to have at least 10,000 gold for the repair to start. Ensure you have a 3x3 space available in your first inventory bag and make sure a food item or any small item is not in the first inventory space otherwise, it might get stuck!. The bot will start the repair once the item has the condition you have chosen. Repair now should be able to continue from where it was left off. Items that have a Hint tooltip might cause a problem.",
Xf:"Apply only to Mercenary",Zf:"Auction will only bid when market is close to the end.",Fe:"Smelting will prioritize starting from the first item to search. You can drag and drop to change priority. Smelt will start when you have over 7k gold. ",Te:"Heal",tg:"Not enough gold to smelt. Required Gold:",wg:"Skipping bid: Guild member has already bid for item ",vg:"Skipping bid: Already bid for item ",advanced:"Advanced",arena:"Arena",W:"Auto Attack",Ta:"Avoid Attack",U:"Add Player",V:"Add Player Name (Same Server)",
gg:"Stop Bot if run out of food?",circusTurma:"Circus Turma",Je:"Difficulty",dungeon:"Dungeon",Ke:"Dungeon Settings",eventExpedition:"Event Expedition",expedition:"Expedition",Oe:"Expedition Settings",pf:"Select Monster",ig:"Highest",hg:"Put your heal stuff in first page of your inventory",Za:"In",Uf:"Store Gold in Guild Market",Sd:"Store Gold in Auction",Ad:"Use Clothes to renew Shop?",Sf:"Select Items to Reset",vd:"Reset Expired Items",Ga:"Note: By enabling this option, the bot will sell upcoming expired items from Packages to Guild Market then cancels to reset expiration time. Guild is required. Make sure you have empty 3x3 space in your bags. It checks last 7 pages per cycle. This might slow down the bot while it is checking for the pages to reset. If it doesnt work, set display expiry date as Date in game settings.",
fd:"Pause bot randomly to work as [Testing Phase]:",M:"Hold Gold: Bot will keep this gold in the bag:",Kc:"Max Gold: Bot will spend when the gold is greater than",Tf:"Bot will bid on useless rings, necklaces",ub:"Add Random Delay",vb:"You can add a delay to bot here.",Fa:"Repair",sf:"Smelt Blue?",wf:"Smelt Purple?",vf:"Smelt Orange?",yf:"Smelt Everything Only From Inventory?",zf:"`Smelt Tab` works only for `Smelt Everything Only From Inventory` option. Rest of the options will use selected smelt tab. This will ignore color and ignore list items. Tab 1 is reserved for repair.",
Oa:"Smelt",Ab:"Auto Search",Yc:"Auto Auction",Bb:"Excess use of Auction might result in ban. If you enabled auction on Crazy-Addon please disable before using this. Note that, if you put only one item to PREFIX section, bot will try to filter by the items name for faster bidding. Although you need to disable bidding food for this.",zd:"Search in Gladiators Auction",Bd:"Search in Mercenary Auction",Jb:"Bid Food?",Lc:"Maximum Bid",Kb:"Bid if the status is less than",Lb:"Bidded Items",If:"Auction Language",
Jf:"Please set the language according to your ingame language, otherwise auction wont work.",yb:"You can add items to look for items in market and auction. It will also show purple items in the market once you add an item into the list.",Gf:"Use auction with caution!",Hf:"Auto bid makes too many requests to the server causing white page error and can cause a ban if you use it often!!",td:"Renew Event Points with Ruby?",Zb:"Enable Auto Oil",Kf:"Auto Get Holy Oils",Pf:"Quest Check Speed",ma:"Attack Guild Members? :",
ka:'Auto add people to the "Attack" list when X GOLD is stolen:',la:'Automatically add people to the "Avoid Attack" list when you lose to them:',Ja:"Scoreboard Attacks",Ra:"Very Long",za:"Long",Ca:"Middle",Na:"Short",Sa:"Very Short",$b:"Enter Underworld if HP >",od:"Quest Check Speed",hd:'Default is "3x". If bot causes problems with quests, change quest speed according to your server speed.',nc:"Heal Pick Bag",ac:'If you are renewing points manually, you need to click the button above "Refresh Event Expedition if stuck!',
Mf:"You must enable at least one of the following: expedition, dungeon, arena, or circus to start the Event Expedition.",qd:"Refresh Event Expedition if stuck!",ra:"Cover Allies` Bids?",Rd:"Leave all settings disabled if you wish to smelt using packages that contain the items in the list. However, you still need to choose colors.",Lf:"Character(Off) / Mercenary(On)",Rf:"Repair Both?",Vf:"Timers",Timers:"Enter the number of minutes for each timer below or leave it default. Be aware! If you enter very low numbers, bot might get stuck in loop!",
nd:"Quest Filter Ignore",md:"Enter keywords to filter out quests you do not want to take",va:"Enter Keyword",N:"Add",sd:"Remove",Qb:"Clear",kd:"Quest Filter Accept",ld:"Enter keywords to choose which quests to take. Using this will ignore Quest Types",fa:"Skip Time Quests?",Qf:"Quests",Db:"Auto Costume",ye:"Use Costume?",Ib:"Basic Battle",Vb:"Dungeon Battle & Event",Pb:"Choose underworld costume",De:"Wear Underworld costume when available?",Eb:'Make sure to select "Wear Underworld costume when available?" and "Choose underworld costume" if you dont want bot the override your underworld costume. Bot will only wear Dis Pater Normal and Medium if your expedition/dungeon points are 0.',
pc:"Hell Heal Settings",xb:"Attack Boss When Available?",ya:"League attack will disable itself after 5 unsuccessful attack.",sc:"Holy Oils",Uc:"Item Name",O:"Min. Item Level",Vc:"Min. Item Quality",wb:"Apply/Reset Timer",uc:"Ignore Prefix/Suffix Combination",Ee:"Yes",Zc:"No",aa:"Add Prefix",ba:"Add Suffix",pa:"Clear History",Od:"Ignore List",gd:"Prefix",Td:"Suffix",xd:"Reset Expiring Items",Pd:"Smelt Randomly from packages?",Qd:"Smelt Tab",wa:"Extras",zb:"Auction",Jc:"Market",Qa:"Timers",me:"Smelting",
le:"Smelting if not enough gold",ie:"Smelt if no item",ga:"Repair",ae:"Guild Market Hold Gold",Xd:"Auction Hold Gold",pe:"Training",de:"Reset Expired",ne:"Store Forge",Vd:"Auction Check",fe:"Search",B:"Enable",Wc:"Minimum Gold",Ka:"Select Hour",sa:"Donate Gold to Guild",Sb:"Donates every 5 minutes. You can change the interval from timers tab",tc:"How much to donate?",Tb:"Donate when you have more than >",Ec:"Less than <",ud:"Reset Expired and Other settings",wd:"Reset in:",Of:"Hold Ctrl (Cmd on Mac) to select multiple items",
vc:"Import/Export Settings",ec:"Export Settings",wc:"Import Settings",Nc:"Message All Players",Oc:"[Requires Ultra Premium Key, message on Discord to get the key.]",Pc:"Enter message to send",Rb:"For custom scripts contact us on Discord",Rc:"Send",Sc:"Show Players",Qc:"SelectAll",Tc:"UnselectAll",Dc:"Make sure your inventory has enough space. Cooldown is 2 minutes.",ua:"Enable Scoreboard Attack:",Ha:"Select Range to Attack",Ia:"Bot will randomly attack from the scoreboard list.",xa:"League Attack",
ta:"Enable League Attack:",Da:"Randomly Attack",Ea:"Attack lowest to highest",Ff:"Bot will avoid attacking guild members by default.",cc:"Expedition Location:",Cb:"Auto Collect Bonuses:",Nd:"Skip Boss",Wb:"Dungeon Location:",yd:"Reset if lose?",qc:"Hell Settings",rc:"This mode will finish underworld start to the end. Please configure your heal percentage settings from heal tab, and make sure heal tab is activated. Enabling hell mode will consider hell heal percentage as your main heal percentage, therefore bot might eat more food while hell is activated. If entering underworld logs you out, go to extras and enable auto-login checkbox.",
oc:"Hell Difficulty:",Fb:"Auto Enter Hell / Hell Mode:",ze:"Use Mobilization if points = 0",Ce:"Use rubies?",bc:"Exit underworld if no points?",ue:"The bot will try to use Villa Medici first and disable itself if there is no available Villa Medici; if thats the case, it will use a healing potion. Dont forget to enable Heal toggle.",ve:"Auto enter hell will disable dungeon/arena/circus upon entering hell.",Wf:"Hell Heal Settings",Be:"Use Villa Medici?",Ae:"Use Healing Potion?",Fc:"INFO: The bot will search for market items every selected minutes, which may pause attacking during the search.",
Yb:"Enable Market Search:",Gc:"Market Search Interval in Minutes:",Hc:"Suggested 10 minutes.",zc:"Item Settings:",xc:"Item Name Includes",Ic:"Max Price",Ac:"Item Type",yc:"Item Rarity",Nb:"Buy Soulbound?",Cc:"Items to Buy",Bc:"Buy packs if any of them match the maximum price entered?",Mb:"Bought Items:",Re:"Heal Percentage",Df:"Buy Food from Shop?",Ef:"Use Heal from Package?",Cf:"Use Cervisia?",lg:"Last Used",location:"Location",Pa:"Strength",da:"Dexterity",ca:"Agility",qa:"Constitution",oa:"Charisma",
ea:"Intelligence",re:"Train Settings",se:"Select the attributes you want to train. It will train once you have enough gold.",$a:"Next action",Xe:"No",Ye:"Normal",pg:"Opponent",qg:"Opponent Level",mf:"Quests",random:"Random",ug:"Settings",Ag:"Soon...",type:"Click on icons to activate quest types. Select first 3 if you want to focus on Circus & Arena",Fg:"Yes",A:"Search",rb:"Add item",Bf:"Store Forge Resources automatically",Bg:"Submit",jg:"Interval : ",cg:"Enable Auto Bid",dg:"Cover Allies` Bids",
Cg:"Tutorial",Va:"More users will slow down the bot.",Yf:"Begin by adding an items full name to the list. Once added, the tool will display search results on the left. This also aids in auto-auction searches. With auto-bid enabled, the tool will periodically search based on your set interval. If the item is found and you have sufficient funds, it will bid automatically. Note: To search for unique items in shops, you must add at least one item to the search list..",eg:"The creature number can be selected from the buttons above. Number 1 represents the leftmost creature. Make sure you select the correct location otherwise bot might pause.",
Le:"Choose the difficulty of the dungeon from the options above. Ensure you select the correct location, as otherwise, the bot might pause.",Se:"Heal Settings",Me:"Store excess gold in Guild by buying guild market items. -> Min. Gold. Leave some empty space in first inventory.",mg:"Move All",og:"Move Selected",$f:"Auto Heal",ag:"Auto Heal Percentage",Eg:"Ruby",cd:"General Settings",qf:"Sell All",rf:"Sell Selected",T:"Weapons",R:"Shields",J:"Chest Armour",L:"Helmets",K:"Gloves",S:"Shoes",P:"Rings",
I:"Amulets",xe:"Usable",we:"Upgrades",pd:"Recipes",Mc:"Mercenary Scroll",rd:"Reinforcements"},kg={ic:"Hell Farmla [Manuel, BETA]",jc:"Bu ozelligi saldirmak istediginiz yaratigi actiktan sonra acin, otomatik olarak yaratigi acana kadar saldirmayacaktir. Dikkat edin.",hc:"Farm Lokasyonu",fc:"Farm Dusmani",Gb:"Otomatik Giri\u015f",Hb:"GameForge lobisinden a\u00e7\u0131l\u0131r pencere izinlerini vermeniz gerekmektedir. Nas\u0131l yap\u0131laca\u011f\u0131na dair dok\u00fcmantasyona bak\u0131n.",dd:"Bot'u Durdur",
ed:"Bot'u ka\u00e7 dakika bitince durdurmak istersiniz? (Dakika)",dc:"Son Kullanma Tarihi",ad:"Sadece yemek sat\u0131n al?",bd:"Bunu etkinle\u015ftirirseniz, se\u00e7imlerinizi g\u00f6rmezden gelir ve herhangi bir \u015fey girmeden otomatik olarak yemek sat\u0131n al\u0131r.",Ba:"Harcamak i\u00e7in maksimum toplam alt\u0131n",Aa:"Harcamak i\u00e7in maksimum alt\u0131n miktar\u0131",$c:"Bot, ya\u011flar\u0131 her 60 dakikada bir kontrol edecek",ke:"Eritme s\u00fcrelerini kontrol etmek i\u00e7in bir zamanlay\u0131c\u0131 ayarlar.",
he:"Alt\u0131n\u0131n\u0131z olmad\u0131\u011f\u0131nda erimeyi kontrol etmek i\u00e7in bir zamanlay\u0131c\u0131 ayarlar.",je:"Kullan\u0131labilir e\u015fyan\u0131z olmad\u0131\u011f\u0131nda erimeyi kontrol etmek i\u00e7in bir zamanlay\u0131c\u0131 ayarlar.",ce:"E\u015fyalar\u0131n\u0131z\u0131 kontrol etmek i\u00e7in bir tamir zamanlay\u0131c\u0131 ayarlar.",be:"Ittifak pazar\u0131ndaki alt\u0131n\u0131 kontrol etmek i\u00e7in bir zamanlay\u0131c\u0131 ayarlar.",Yd:"M\u00fczayede tutma alt\u0131n\u0131 se\u00e7ene\u011fi i\u00e7in bir zamanlay\u0131c\u0131 ayarlar.",
Ud:"Arenadaki PvP listesini kontrol etmek i\u00e7in bir zamanlay\u0131c\u0131 ayarlar.",Zd:"Sirk PvP listesini kontrol etmek i\u00e7in bir zamanlay\u0131c\u0131 ayarlar.",qe:"\u0130statistiklerinizi e\u011fitmek i\u00e7in bir e\u011fitim zamanlay\u0131c\u0131 ayarlar.",ee:"S\u00fcresi dolmu\u015f e\u015fyalar\u0131 s\u0131f\u0131rlamak i\u00e7in bir zamanlay\u0131c\u0131 ayarlar.",oe:"D\u00f6vme malzemelerini horreum'a koymak i\u00e7in bir zamanlay\u0131c\u0131 ayarlar.",Wd:"Gladyat\u00f6rler ve paral\u0131 askerler m\u00fczayede kontrol\u00fc i\u00e7in bir zamanlay\u0131c\u0131 ayarlar.",
ge:"M\u00fczayede ve market i\u00e7in e\u015fya aramak i\u00e7in bir zamanlay\u0131c\u0131 ayarlar.",$d:"Ittifaga ba\u011f\u0131\u015f g\u00f6nderme zamanlay\u0131c\u0131s\u0131n\u0131 ayarlar.",mc:"Alt\u0131n Ta\u015f\u0131nd\u0131",Ub:"Eritme listesi e\u015fyalar\u0131n\u0131 satma",Dd:"Market Otomasyonu",Fd:"E\u015fya Arama Ayarlar\u0131",Ed:"Bu arac\u0131 e\u015fya aramak i\u00e7in kullan\u0131n. Sadece e\u015fyalar\u0131 listeye ekleyin, kuma\u015f miktar\u0131n\u0131 belirtin ve aramay\u0131 ba\u015flat\u0131n.",
Gd:"Kullan\u0131lacak Kuma\u015flar:",Hd:"Ka\u00e7 kuma\u015f kullan\u0131lacak?",Ma:"E\u015fya Ad\u0131n\u0131 Girin",La:"E\u015fya Seviyesini Girin",Jd:"E\u015fya Kalitesi",Id:"E\u015fya Ad\u0131 Buraya",Kd:"Aramaya Ba\u015fla",Ld:"Atla ve Devam Et",Md:"Aramay\u0131 Durdur",kc:"Ittifak Pazar\u0131ndaki Itemlari S\u0131rala",Xc:"En Pahal\u0131",Ob:"En Ucuz",Cd:"Bir se\u00e7enek se\u00e7in",Xb:"Yeralt\u0131 D\u00fcnyas\u0131 Itemlarini Goster",lc:"G\u00f6reve odaklan\u0131ls\u0131n m\u0131?",Dg:"Elbise yoksa yakut kullan?",
na:"Diger serverlarda sald\u0131rmak icin, oyuncunun sayfasini acin ve A & C butonlariyla ekleyin. Not: Rapor edilmemek i\u00e7in ayn\u0131 ki\u015filere sald\u0131rmaktan ka\u00e7\u0131n\u0131n. Rapor edilmek, banlanma \u015fans\u0131n\u0131z\u0131 art\u0131r\u0131r.",tf:"Yesil Eritilsin mi?",jd:"Herhangi bir filtre girildiyse rastgele g\u00f6revleri kabul etme?",Ve:"Maksimum materyal kalitesi?",Ne:"Mersaneri Ara?",kg:"T\u00fcm Se\u00e7ilenleri Sat\u2019\u0131 t\u0131klay\u0131n ve t\u00fcm e\u015fyalar\u0131 sat\u0131n. \u0130lk (1) \u00e7antan\u0131zda 2x3 bo\u015f alan oldu\u011fundan emin olun ve kalite secmeyi unutmayin. Alt\u0131n toplamak i\u00e7in, alt\u0131n\u0131 filtreleyin ve `Se\u00e7ilenleri Al veya T\u00fcm\u00fcn\u00fc Al`\u0131 kullan\u0131n",
sb:"\ud83d\udd25 : E\u015fyay\u0131 eritme listesine ekler.",Ua:"\ud83d\udd28 : E\u015fyay\u0131 a\u00e7\u0131k art\u0131rma listesine ekler.",nf:"D\u00fckkan dolu oldu\u011funda d\u00fckkan\u0131 kuma\u015fla yenileyin (Yeniden sat\u0131n alman\u0131z gerekecek)",bf:"Sayfa:",kf:"Durdur",hf:"Bu Sayfay\u0131 Sat",ef:"Se\u00e7ilenleri Al",cf:"T\u00fcm\u00fcn\u00fc Al",lf:"Paket Ayarlar\u0131",jf:"Kaynaklar\u0131 G\u00f6nder",ff:"T\u00fcm Se\u00e7ilenleri Sat",Y:"E\u015fya T\u00fcr\u00fc",pb:"Silahlar",
mb:"Kalkanlar",bb:"Z\u0131rhlar",hb:"Kasklar",gb:"Eldivenler",cb:"Ayakkabilar",kb:"Y\u00fcz\u00fckler",ab:"Nazarliklar",eb:"Malzemeler (Yiyecekler)",ob:"G\u00fc\u00e7lendirmeler",Ze:"Yukseltmeler",jb:"Receteler",ib:"Mersaneri Askerler",nb:"Demirhane Mallari",lb:"Persomenler",df:"Takviyeler",$e:"Etkinlik E\u015fyalar\u0131",fb:"D\u00f6vme Malzemeleri",af:"Alt\u0131n",D:"Hepsi",rg:"Kalite",qb:"Beyaz",G:"Ye\u015fil",F:"Mavi",H:"Mor",Z:"Turuncu",ja:"K\u0131rm\u0131z\u0131",gf:"T\u00fcm Sat\u0131\u015f Se\u00e7enekleri",
uf:"\u00d6nek/Sonek Kombinasyonunu Yoksay?",Qe:"Ka\u00e7 yiyecek sat\u0131n almak/al\u0131nmal\u0131?",Ie:"Normal",He:"Orta",Ge:"Zor",Xa:"Standart",sg:"S\u0131k\u0131\u015fma Onar\u0131m\u0131",Nf:"Dungeon/Circus/Arena\u2019y\u0131 devre d\u0131\u015f\u0131 b\u0131rakmak istiyorsan\u0131z Cehenneme Giri\u015fi Devre D\u0131\u015f\u0131 B\u0131rakin. Cehenneme manuel olarak girdiyseniz, Cehennem Modu\u2019nu etkinle\u015ftirmeniz gerekecektir.",te:"Egitimleri ka\u00e7 kez e\u011fitmek istedi\u011finizi ve onlar\u0131n \u00f6nceliklerini belirleyin. Bot, bir \u00f6ncelik belirlemedik\u00e7e e\u011fitim yapmayacakt\u0131r. E\u011fer \u00f6ncelik belirlenmi\u015fse ancak ba\u015fka bir egitim kalmam\u0131\u015fsa, secilen egitim devam edecektir.",
bg:"Gorev",xg:"Erit",zg:"Eritme Ayarlar\u0131",xf:"Eritilen Nesneler",Af:"\u00d6nek veya Sonek Ekle, paketlerde bulunursa otomatik olarak eritilecektir.:",yg:"Eritilen Nesne:",Wa:"Onarmak istedi\u011finiz nesneyi t\u0131klay\u0131n. Onar\u0131ma ba\u015flamak i\u00e7in en az 10,000 alt\u0131n\u0131z\u0131n olmas\u0131 gerekmektedir. Yeni repair sistemi refresh atilsa bile kaldigi yerden devam edecektir. Sorun cikarsa clear a basip workbench itemini temizleyebilirsiniz. Ayr\u0131ca envanterinizde yer a\u00e7mayi unutmayin. Bot, kondisyon seciminize gore aktif olacaktir.",
Xf:"Sadece S\u00f6zle\u015fmeliye Uygula",Zf:"M\u00fczayede yaln\u0131zca piyasa sona yakla\u015ft\u0131\u011f\u0131nda teklif verecektir.",Fe:"Envanterde bos yer acmayi ve en az 7K alt\u0131n\u0131n\u0131z\u0131n oldu\u011fundan emin olun. Bot 1. koydugunuz prefixden baslayip sona dogru bakacaktir, bu siralamayi uzerine gelip tasiyarak degistirebilirsiniz. Bot, sectiginiz sekmeye gore itemlari tasiyacak ve eritecektir. Eritme i\u015flemi her ayarlanan zamana gore kontrol edilir. Bu ayari Zamanlayici sekmesinden degistirebilirsiniz. Eger kombinasyon olarak bakmak istemiyorsaniz, onek sonek kombinasyonunu yoksay`i aktiflestirin.",
Te:"\u0130yile\u015ftir",tg:"Eritmek i\u00e7in yeterli alt\u0131n yok. Gerekli Alt\u0131n:",wg:"Teklifi Atla: ittifak \u00fcyesi zaten nesne i\u00e7in teklif verdi ",vg:"Teklifi Atla: Zaten nesne i\u00e7in teklif verildi ",advanced:"Geli\u015fmi\u015f",arena:"Arena",W:"Otomatik sald\u0131r\u0131 listesi",Ta:"Bu listedekilere sald\u0131rma",U:"Oyuncu Ekle",V:"Oyuncu Ad\u0131 Gir (Ayni Server)",gg:"Yiyecek t\u00fckenirse Botu Durdur?",circusTurma:"Sirkin Turma",Je:"Zorluk",dungeon:"Zindan",Ke:"Zindan Ayarlar\u0131",
eventExpedition:"Etkinlik Seferi",expedition:"Sefer",Oe:"Sefer Ayarlar\u0131",pf:"Yarat\u0131k Se\u00e7",ig:"En Y\u00fcksek",hg:"\u0130yile\u015ftirme e\u015fyalar\u0131n\u0131z\u0131 envanterinizin ilk sayfas\u0131na koyun",Za:"\u0130\u00e7inde",Pb:"Yeralti kostumu secin",De:"Yeralti kostumu hazir oldugunda giy?",Uf:"Alt\u0131n\u0131 Depola",Sd:"Alt\u0131n\u0131 M\u00fczayedede Depola?",Ad:"D\u00fckk\u00e2n\u0131 yenilemek i\u00e7in \u0130\u015f K\u0131yafetleri kullan\u0131ls\u0131n m\u0131?",Sf:"S\u0131f\u0131rlanacak Nesneleri Se\u00e7in",
vd:"S\u00fcresi Dolan Nesneleri S\u0131f\u0131rla",Ga:"Not: Bu se\u00e7ene\u011fi etkinle\u015ftirirseniz, bot paketlerden gelecek s\u00fcresi dolan nesneleri ittifak marketine satar ve s\u00fcrelerini s\u0131f\u0131rlar. Ittifak gereklidir. \u00c7antalar\u0131n\u0131zda bo\u015f 3x3 alan\u0131n\u0131z oldu\u011fundan emin olun, ozellikle birinci canta. Her basladiginda son 7 sayfaya bakar. Eger calismazsa oyun ayarlarindan sure bitimini tarih olarak ayarlayin.",fd:"Bota Rastgele Ara Vermesini Sa\u011fla [Test A\u015famas\u0131]:",
M:"Alt\u0131n\u0131 Tut: Bot bu alt\u0131n\u0131 \u00e7antada saklayacak:",Kc:"Maksimum Alt\u0131n",Tf:"Anlams\u0131z y\u00fcz\u00fckler, kolyeler i\u00e7in teklif verilecek",ub:"Rastgele Gecikme Ekle",vb:"Bot i\u00e7in rastgele gecikme ekleyebilirsiniz.",Fa:"Onar\u0131m",sf:"Mavi Eritilsin mi?",wf:"Mor Eritilsin mi?",vf:"Turuncu Eritilsin mi?",yf:"Sadece envantere koyulanlari mi eritsin?",zf:"Bu renk se\u00e7imlerini yok sayacakt\u0131r",aa:"\u00d6nek Ekle",ba:"Sonek Ekle",Oa:"Erit",Ab:"Otomatik Arama",
Yc:"Otomatik M\u00fczayede",Bb:"Bu ozelligi fazla kullanmak banlanmaniza sebep olabilir. Eger Crazy Addon`da muzayedeyi zamanlarini gosteren ozelligi aktif ettiyseniz bu ozelligi kullanmadan once onu iptal edin, yoksa yavaslama olacaktir.",zd:"Gladyat\u00f6rler M\u00fczayedesinde Ara",Bd:"Mersaneriler M\u00fczayedesinde Ara",Jb:"Yiyecek \u0130\u00e7in Teklif Verilsin mi?",Lc:"Maksimum Teklif",Kb:"Durum daha azsa teklif ver",Lb:"Teklif Edilen Nesneler",If:"M\u00fczayede Dili",Jf:"L\u00fctfen dil ayarlarini oyunun diline gore tekrar ayarlay\u0131n.. Hepsi do\u011fru oldu\u011fundan emin olun, aksi takdirde teklif vermeyebilir.",
yb:"Piyasada aranacak nesneleri ekleyebilirsiniz. Bir nesneyi listede ekledi\u011finizde, nesneyi arayacak ve sonu\u00e7lar\u0131 sol tarafta g\u00f6sterecektir. Otomatik m\u00fczayedeyi aramak i\u00e7in de arayacakt\u0131r. Otomatik teklifi etkinle\u015ftirirseniz, belirledi\u011finiz aral\u0131klarla nesneyi arayacak ve yeterli paran\u0131z varsa otomatik olarak teklif verecektir. *Not*: Tekil nesneleri d\u00fckkanlarda aramak i\u00e7in, en az\u0131ndan bir rastgele \u00f6\u011feyi arama listesine eklemeniz gerekmektedir.",
Gf:"M\u00fczayedeyi dikkatli kullan\u0131n!",Hf:"Otomatik teklif, sunucuya \u00e7ok fazla istek g\u00f6nderir ve s\u00fcrekli kullan\u0131rsan\u0131z yasa\u011fa neden olabilir!",td:"Etkinlik Puanlar\u0131n\u0131 Yakut ile Yenile?",Zb:"Otomatik Ya\u011f Topla",Kf:"Kutsal Ya\u011flar\u0131 Otomatik Al",Pf:"G\u00f6rev Kontrol H\u0131z\u0131",ma:"Ittifak \u00dcyelerine Sald\u0131r\u0131ls\u0131n m\u0131? :",ka:"Oto Sald\u0131r\u0131 listesine cal\u0131nan Alt\u0131n X ALTINI a\u015ft\u0131\u011f\u0131nda > eklensin mi? ",
la:"Yenildi\u011finizde otomatik olarak eklensin mi?:",Ja:"Skor Tablosu Sald\u0131r\u0131lar\u0131",Ra:"\u00c7ok Uzun",za:"Uzun",Ca:"Orta",Na:"K\u0131sa",Sa:"\u00c7ok K\u0131sa",$b:"HP > ise Yeralt\u0131 D\u00fcnyas\u0131'na Gir",od:"G\u00f6rev Kontrol H\u0131z\u0131",hd:'Varsay\u0131lan olarak "3x" ayarl\u0131d\u0131r. Bot g\u00f6revlerle sorun \u00e7\u0131kar\u0131yorsa, g\u00f6rev h\u0131z\u0131n\u0131 sunucu h\u0131z\u0131n\u0131za g\u00f6re ayarlay\u0131n.',nc:"\u0130yile\u015ftirme \u00c7anta Se\u00e7imi",
ac:'Puanlar\u0131 manuel olarak yeniliyorsan\u0131z, s\u0131k\u0131\u015f\u0131rsa "Yeniden Etkinlik Seferi Yenile" d\u00fc\u011fmesine t\u0131klaman\u0131z gerekmektedir!',Mf:"Etkinlik Seferi'ni ba\u015flatmak i\u00e7in en az birini etkinle\u015ftirmeniz gerekmektedir: sefer, zindan, arena veya sirk.",qd:"E\u011fer s\u0131k\u0131\u015f\u0131rsa Etkinlik Seferi'ni Yenile!",ra:"\u0130ttifak \u00fcyesi teklif verdiyse atlas\u0131n m\u0131?",Rd:"E\u011fer paketlerde bulunan \u00f6\u011feleri kullanarak eritmek istiyorsan\u0131z, t\u00fcm ayarlar\u0131 devre d\u0131\u015f\u0131 b\u0131rak\u0131n. Ancak hala renkleri se\u00e7ebilirsiniz.",
Lf:"Karakter(Kapal\u0131) / S\u00f6zle\u015fmeli(A\u00e7\u0131k)",Rf:"Ana/Sirk her iki karakteri de tamir etsin mi?",Vf:"Zamanlar",Timers:"Her zamanlay\u0131c\u0131 i\u00e7in a\u015fa\u011f\u0131daki dakika cinsinden say\u0131lar\u0131 girin veya varsay\u0131lan b\u0131rak\u0131n. Dikkat edin! eger cok kisa sureler girerseniz baz\u0131 ozellikler botu donguye sokayabilir.",ua:"Skor Tablosu Sald\u0131r\u0131s\u0131n\u0131 Etkinle\u015ftir:",Ha:"Sald\u0131r\u0131 Aral\u0131\u011f\u0131n\u0131 Se\u00e7",
Ia:"Bot, skor tablosu listesinden rastgele sald\u0131r\u0131 yapacakt\u0131r.",xa:"Lig Sald\u0131r\u0131s\u0131",ta:"Lig Sald\u0131r\u0131s\u0131n\u0131 Etkinle\u015ftir:",Da:"Rastgele Sald\u0131r",Ea:"En d\u00fc\u015f\u00fckten en y\u00fckse\u011fe sald\u0131r",Ff:"Bot, varsay\u0131lan olarak ittifak \u00fcyelerine sald\u0131rmaktan ka\u00e7\u0131nacakt\u0131r.",cc:"Sefer Yeri:",Cb:"Bonuslar\u0131 Otomatik Al:",Nd:"Boss`a sald\u0131rma",Wb:"Zindan Yeri:",yd:"Kaybederseniz S\u0131f\u0131rlans\u0131n m\u0131?",
qc:"Cehennem Ayarlar\u0131",rc:"Bu mod birden sona kadar saldirarak cehennemi bitirir. \u0130yile\u015ftirme y\u00fczde ayarlar\u0131n\u0131z\u0131 iyile\u015ftirme sekmesinden yap\u0131land\u0131r\u0131n ve iyile\u015ftirme sekmesini etkinle\u015ftirdi\u011finizden emin olun. Cehennem modu aktif oldugunda bot cehennem iyilestirme oranina gore karakterinize yemek yedirecektir. Cehenneme giri\u015f sizi oturumdan \u00e7\u0131kar\u0131yorsa, extralar tabini ziyaret edin ve otomatik giri\u015f kutusunu i\u015faretleyin.",
oc:"Cehennem Zorlu\u011fu",Fb:"Otomatik Cehennem Giri\u015fi / Cehennem Modu:",ze:"Puan = 0 ise Mobilizasyon Kullan?",Ce:"Yakut Kullan?",bc:"Puan Yoksa Cehennemden \u00c7\u0131k\u0131ls\u0131n m\u0131?",ue:"Bot, \u00f6nce villa mediciyi kullanmaya \u00e7al\u0131\u015facakt\u0131r, e\u011fer yoksa iyile\u015ftirme iksiri kullanacakt\u0131r. \u0130yile\u015ftirme anahtar\u0131n\u0131 etkinle\u015ftirdi\u011finizden emin olmay\u0131 unutmay\u0131n.",ve:"Otomatik cehennem giri\u015fi, cehenneme girdi\u011finizde zindan/arena/sirk otomatik olarak devre d\u0131\u015f\u0131 b\u0131rakacakt\u0131r.",
Wf:"Cehennem \u0130yile\u015ftirme Ayarlar\u0131",Be:"Villa Medici Kullan?",Ae:"\u0130yile\u015ftirme \u0130ksiri Kullan?",Fc:"Bu ozellik genel marketten esya almaya yarar. Satin alma suresi biraz surebilir.",Yb:"Pazar Aramas\u0131n\u0131 Etkinle\u015ftir:",Gc:"Dakika cinsinden Pazar Arama Aral\u0131\u011f\u0131:",Hc:"\u00d6nerilen 10 dakika.",zc:"Nesne Ayarlar\u0131:",xc:"Nesne Ad\u0131 \u0130\u00e7erir",Ic:"Maksimum Fiyat",Ac:"Nesne T\u00fcr\u00fc",yc:"Nesne Nadirli\u011fi",Nb:"Ruh Ba\u011fl\u0131 Al\u0131ns\u0131n m\u0131?",
Cc:"Al\u0131nacak Nesneler",Bc:"Herhangi biri maksimum fiyat\u0131 a\u015f\u0131yorsa \u00f6\u011feleri almay\u0131 deneyin.:",Mb:"Sat\u0131n Al\u0131nan Nesneler:",Re:"\u0130yile\u015ftirme Y\u00fczdesi",Df:"D\u00fckkandan Yiyecek Sat\u0131n Al\u0131ns\u0131n m\u0131?",Ef:"Paketten \u0130yile\u015ftirme Kullan\u0131ls\u0131n m\u0131?",Cf:"Cervisia Kullan\u0131ls\u0131n m\u0131?",lg:"Son Kullan\u0131ld\u0131",location:"Konum",Pa:"G\u00fc\u00e7",da:"Beceri",ca:"\u00c7eviklik",qa:"Dayaniklilik",oa:"Karizma",
ea:"Zeka",re:"E\u011fitim Ayarlar\u0131",se:"E\u011fitim yapmak istedi\u011finiz nitelikleri se\u00e7in. Yeterli alt\u0131n\u0131z oldu\u011funda e\u011fitim yapacakt\u0131r.",$a:"Sonraki ad\u0131m",Xe:"Hay\u0131r",Ye:"Normal",pg:"Rakip",qg:"Rakip Seviyesi",mf:"G\u00f6revler",random:"Rastgele",ug:"Ayarlar",Ag:"Yak\u0131nda...",type:"G\u00f6rev t\u00fcrlerini etkinle\u015ftirmek i\u00e7in simgeleri t\u0131klay\u0131n.",Fg:"Evet",A:"Arama",rb:"\u00d6\u011feleri ekle",Bf:"Demircilik Kaynaklar\u0131n\u0131 Otomatik Olarak Sakla",
Bg:"G\u00f6nder",jg:"Aral\u0131k : ",cg:"Otomatik Teklif Etkinle\u015ftir",dg:"Bir ittifak \u00fcyesi zaten teklif verdiyse teklif vermeyin",Cg:"\u00d6\u011fretici",Va:"Arena'da en d\u00fc\u015f\u00fck veya en y\u00fcksek seviyeli rakiple y\u00fczle\u015fmek isteyip istemedi\u011finizi yukar\u0131daki d\u00fc\u011fmelerden se\u00e7in. Daha fazla kullan\u0131c\u0131, botun h\u0131z\u0131n\u0131 yava\u015flatabilir.",Yf:"Ba\u015flamak i\u00e7in bir \u00f6\u011feyi listeyle ekleyin (\u00f6r. `Lucius`). Ekledikten sonra, arama sonu\u00e7lar\u0131n\u0131 sol tarafta g\u00f6r\u00fcnt\u00fclemek i\u00e7in arama sonu\u00e7lar\u0131n\u0131 g\u00f6sterir. Ayn\u0131 zamanda otomatik m\u00fczayede ama\u00e7lar\u0131 i\u00e7in de arar. Otomatik teklifi etkinle\u015ftirirseniz, belirli aral\u0131klarla \u00f6\u011feyi arar ve yeterli paran\u0131z varsa otomatik olarak teklif verecektir. *Not*: D\u00fckkanlarda benzersiz \u00f6\u011feleri aramak i\u00e7in, en az bir rastgele \u00f6\u011feyi arama listesine eklemeniz gerekmektedir.",
eg:"Yarat\u0131k numaras\u0131n\u0131 yukar\u0131daki d\u00fc\u011fmelerden se\u00e7ebilirsiniz. Numara 1, en soldaki yarat\u0131\u011f\u0131 temsil eder. Do\u011fru konumu se\u00e7ti\u011finizden emin olun; aksi takdirde bot durabilir.",Le:"Zindan\u0131n zorlu\u011funu yukar\u0131dakilerden se\u00e7in. Do\u011fru konumu se\u00e7ti\u011finizden emin olun; aksi takdirde bot durabilir.",Se:"\u0130yile\u015ftirme Ayarlar\u0131",Me:"Ittifak Piyasas\u0131ndan al\u0131\u015fveri\u015f yaparak fazla alt\u0131n\u0131 depola -> Min. Alt\u0131n. 1. Envanterde bos yer birakmaya calisin.",
mg:"T\u00fcm\u00fcn\u00fc Ta\u015f\u0131",og:"Se\u00e7ilenleri Ta\u015f\u0131",$f:"Otomatik \u0130yile\u015ftirme",ag:"Otomatik \u0130yile\u015ftirme Y\u00fczdesi",Eg:"Yakut",cd:"Genel Ayarlar",qf:"Hepsini Sat",rf:"Se\u00e7ilenleri Sat",T:"Silahlar",R:"Kalkanlar",J:"G\u00f6\u011f\u00fcs Z\u0131rhlar\u0131",L:"Kasklar",K:"Eldivenler",S:"Ayakkab\u0131lar",P:"Y\u00fcz\u00fckler",I:"Kolyeler",xe:"Kullan\u0131labilir",we:"G\u00fc\u00e7lendirmeler",pd:"Re\u00e7eteler",Mc:"S\u00f6zle\u015fmeli Scrollar",
rd:"Takviyeler",nd:"G\u00f6rev Filtre \u0130gnore",md:"Almak istemedi\u011finiz g\u00f6revleri filtrelemek i\u00e7in anahtar kelimeleri girin",va:"Anahtar Kelime Girin",N:"Ekle",sd:"Kald\u0131r",Qb:"Temizle",kd:"G\u00f6rev Filtre Kabul",ld:"Almak istedi\u011finiz g\u00f6revleri se\u00e7mek i\u00e7in anahtar kelimeleri girin.",fa:"Zamanl\u0131 G\u00f6revleri Atla?",Qf:"G\u00f6revler",Db:"Oto Kost\u00fcm",ye:"Kost\u00fcm Kullan?",Ib:"Ana Sava\u015f",Vb:"Dungeon Sava\u015f ve Etkinlik",Eb:"Bot yaln\u0131zca ke\u015fif/zindan puanlar\u0131n\u0131z 0 ise Dis Pater Normal ve Medium giyecektir.",
pc:"Cehennem \u0130yile\u015ftirme Ayarlar\u0131",xb:"Boss Mevcut Oldu\u011funda Sald\u0131r?",ya:"5 ba\u015far\u0131s\u0131z sald\u0131r\u0131dan sonra Lig sald\u0131r\u0131s\u0131n\u0131 devre d\u0131\u015f\u0131 b\u0131rakacakt\u0131r.",sc:"Kutsal Ya\u011flar",Uc:"\u00dcr\u00fcn Ad\u0131",O:"Min. Item Seviyesi",Vc:"Min. \u00dcr\u00fcn Kalitesi",wb:"Zamanlay\u0131c\u0131y\u0131 Uygula/S\u0131f\u0131rla",uc:"\u00d6nek/Soneki Yok Say",Ee:"Evet",Zc:"Hay\u0131r",pa:"Ge\u00e7mi\u015fi Temizle",Od:"Yok Sayma Listesi",
gd:"\u00d6nek",Td:"Sonek",xd:"S\u00fcresi Dolan \u00dcr\u00fcnleri S\u0131f\u0131rla",Pd:"Paketlerden Rasgele Eritme?",Qd:"Eritme Sekmesi",wa:"Ekstralar",zb:"M\u00fczayede",Jc:"Pazar",Qa:"Zamanlar",me:"Eritme",le:"Alt\u0131n Yoksa Eritme",ie:"\u00dcr\u00fcn Yoksa Eritme",ga:"Tamir",ae:"Ittifak Pazar\u0131 Alt\u0131n Tutma",Xd:"M\u00fczayede Alt\u0131n Tutma",pe:"E\u011fitim",de:"S\u00fcresi Dolanlar\u0131 S\u0131f\u0131rla",ne:"Hammadde Depola",Vd:"M\u00fczayede Kontrol",fe:"Arama",B:"Etkinle\u015ftir",
Wc:"Min. Alt\u0131n",Ka:"Saat Se\u00e7in",sa:"Ittifaga Alt\u0131n Ba\u011f\u0131\u015fla",Sb:"Her 5 dakikada bir ba\u011f\u0131\u015f yapacakt\u0131r. Zamanlay\u0131c\u0131lar sekmesinden aral\u0131\u011f\u0131 de\u011fi\u015ftirebilirsiniz",tc:"Ne kadar ba\u011f\u0131\u015f yap\u0131lmal\u0131?",Tb:"Ne zaman ba\u011f\u0131\u015f yap\u0131lmal\u0131 >",Ec:"Daha az <",ud:"S\u00fcresi Dolanlar\u0131 S\u0131f\u0131rla ve Di\u011fer Ayarlar\u0131",wd:"S\u0131f\u0131rla in:",Of:"Birden fazla \u00f6\u011feyi se\u00e7mek i\u00e7in Ctrl (Mac'de Cmd) tu\u015funu bas\u0131l\u0131 tutun",
vc:"Ayarlar\u0131 Kaydet / Yukle",ec:"Ayarlar\u0131 Indir",wc:"Ayarlar\u0131 Yukle",Nc:"T\u00fcm Oyunculara Mesaj G\u00f6nder",Oc:"[Ultra Premium Anahtar\u0131 gerektirir, anahtar i\u00e7in Discord \u00fczerinden ileti\u015fime ge\u00e7in.]",Pc:"G\u00f6nderilecek mesaj\u0131 girin",Rb:"\u00d6zel scriptler i\u00e7in Discord \u00fczerinden bize ula\u015f\u0131n",Rc:"G\u00f6nder",Sc:"Oyuncular\u0131 G\u00f6ster",Qc:"T\u00fcm\u00fcn\u00fc Se\u00e7",Tc:"T\u00fcm Se\u00e7imleri Kald\u0131r",Dc:"Envanterinizin yeterli alan\u0131 oldu\u011fundan emin olun. Geri say\u0131m 2 dakikad\u0131r."},
ng={ic:"Hell Farm [Manual, Beta]",jc:"Esteja ciente: ative este recurso ap\u00f3s desbloquear a criatura que deseja atacar, ela n\u00e3o atacar\u00e1 automaticamente para desbloquear o monstro.",hc:"Farm Location",fc:"Farm Enemy",Gb:"Login Autom\u00e1tico",Hb:"Voc\u00ea precisa permitir pop-ups da tela do lobby do GameForge. Veja a documenta\u00e7\u00e3o sobre como fazer isso.",dd:"Pausar Bot",ed:"Pausar Bot em (Minutos)",dc:"Data de Expira\u00e7\u00e3o",ad:"Comprar apenas comida?",bd:"Se voc\u00ea habilitar isso, o bot ignorar\u00e1 suas sele\u00e7\u00f5es e comprar\u00e1 comida automaticamente sem inserir nada.",
Ba:"M\u00e1ximo de ouro total para gastar",Aa:"M\u00e1ximo de ouro por comida para gastar",$c:"O bot verificar\u00e1 \u00f3leos a cada 60 minutos",ke:"Define um temporizador para verificar os tempos de fus\u00e3o.",he:"Define um temporizador para verificar a fus\u00e3o quando n\u00e3o tiver ouro.",je:"Define um temporizador para verificar a fus\u00e3o quando n\u00e3o tiver o item dispon\u00edvel.",ce:"Define um temporizador para reparar e verificar seus itens.",be:"Define um temporizador para verificar o ouro mantido no mercado da guilda.",
Yd:"Define um temporizador para a op\u00e7\u00e3o de reten\u00e7\u00e3o de ouro em leil\u00e3o.",Ud:"Define um temporizador para verificar a lista de PvP na arena para atacar.",Zd:"Define um temporizador para verificar a lista de PvP no circo para atacar.",qe:"Define um temporizador para treinar suas estat\u00edsticas.",ee:"Define um temporizador para redefinir itens expirados.",oe:"Define um temporizador para armazenar materiais de forja no horreum.",Wd:"Define um temporizador para verificar o leil\u00e3o de gladiadores e mercen\u00e1rios.",
ge:"Define um temporizador para buscar itens em leil\u00e3o e loja.",$d:"Define o temporizador para enviar doa\u00e7\u00f5es \u00e0 guilda.",mc:"Ouro Movido",Ub:"N\u00e3o vender itens da lista de fus\u00e3o",Dd:"Automa\u00e7\u00e3o da Loja",Fd:"Configura\u00e7\u00f5es de Busca de Item",Ed:"Use esta ferramenta para buscar itens. Basta adicionar os itens \u00e0 lista, especificar a quantidade de pano e iniciar a busca.",Gd:"Panos a Usar:",Hd:"Quantos panos usar?",Ma:"Digite o Nome do Item",La:"Digite o N\u00edvel do Item",
Jd:"Qualidade do Item",Id:"Nome do Item Aqui",Kd:"Iniciar Busca",Ld:"Pular e Continuar",Md:"Parar Busca",kc:"Ordenar Mercado da Guilda por",Xc:"Mais Caro",Ob:"Mais Barato",Cd:"Selecionar uma op\u00e7\u00e3o",Xb:"Destacar itens do submundo",lc:"Foco na miss\u00e3o?",Dg:"Usar Ruby se n\u00e3o houver pano?",na:"Evite atacar as mesmas pessoas para n\u00e3o ser reportado. Ser reportado aumenta as chances de ser banido.",tf:"Queimar verde?",jd:"N\u00e3o aceitar miss\u00f5es aleat\u00f3rias se algum filtro for inserido?",
Ve:"Qualidade m\u00e1xima do material a ser usado",Ne:"Ativar a busca mercen\u00e1ria",kg:"Clique em `Vender Todos Selecionados` para vender todos os itens. Certifique-se de ter um espa\u00e7o vazio de 2x3 em sua primeira (1) bolsa. Para coletar ouro em massa, filtre ouro e use `Selecionar Todos ou Selecionar`",sb:"\ud83d\udd25 : Adiciona item \u00e0 lista de fundi\u00e7\u00e3o.",Ua:"\ud83d\udd28 : Adiciona item \u00e0 lista de leil\u00e3o.",nf:"Atualize a loja com pano quando estiver cheia (Voc\u00ea precisa vender novamente depois)",
bf:"P\u00e1gina:",kf:"Parar",hf:"Vender Esta P\u00e1gina",ef:"Selecionar Selecionados",cf:"Selecionar Tudo",lf:"Configura\u00e7\u00f5es de Empacotamento Autom\u00e1tico",jf:"Enviar Recursos",ff:"Vender Todos Selecionados",Y:"Tipo de Item",pb:"Armas",mb:"Escudos",bb:"Armaduras",hb:"Capacetes",gb:"Luvas",cb:"Botas",kb:"An\u00e9is",ab:"Amuletos",eb:"Utiliz\u00e1veis (Alimentos)",ob:"Melhorias",Ze:"Potencializadores",jb:"Receitas",ib:"Mercen\u00e1rios",nb:"Ferramentas de Forja",lb:"Pergaminhos",df:"Refor\u00e7os",
$e:"Itens de Evento",fb:"Materiais de Forja",af:"Ouro",D:"Todos",rg:"Qualidade",qb:"Branco",G:"Verde",F:"Azul",H:"Roxo",Z:"Laranja",ja:"Vermelho",gf:"Op\u00e7\u00f5es de Venda",uf:"Ignorar Combina\u00e7\u00e3o de Prefixo/Sufixo?",Qe:"Quantos alimentos comprar/pegar?",Ie:"Normal",He:"Intermedi\u00e1rio",Ge:"Dif\u00edcil",Xa:"Padr\u00e3o",sg:"Reparar Corre\u00e7\u00e3o de Travamento",Nf:"Desative a entrada no Inferno se voc\u00ea quiser desabilitar a Dungeon/Circo/Arena. Se voc\u00ea entrar no Inferno manualmente, ser\u00e1 necess\u00e1rio ativar o Modo Inferno.",
Pb:"Escolher traje do submundo",De:"Vestir traje do submundo quando dispon\u00edvel?",te:"Define quantas vezes quer treinar as estat\u00edsticas e suas prioridades. O bot n\u00e3o treinar\u00e1 a menos que defina uma prioridade. Se n\u00e3o houver mais estat\u00edsticas ele continuar\u00e1 com as estat\u00edsticas Defenidas.",bg:"Aventura",xg:"Derreter",zg:"Defini\u00e7\u00f5es de Derreter",xf:"Itens Derretidos",Af:"Adicione um Prefixo ou Sufixo, uma vez encontrado nos pacotes Ser\u00e1 Derretido automaticamente.:",
yg:"Derreter Item:",Wa:"Clique no item que voc\u00ea deseja consertar. Isto utilizar\u00e1 apenas materiais Padr\u00e3o, Verde e Azul. Voc\u00ea precisa ter pelo menos 10.000 ouro para iniciar o reparo. Abra espa\u00e7o 3x3 em sua PRIMEIRA Bolsa do invent\u00e1rio. Caso contr\u00e1rio, ele poder\u00e1 ficar preso! O bot iniciar\u00e1 o reparo assim que o item tiver durabilidade de %0.",Xf:"Aplicar apenas no Mercenario.",Zf:"O leil\u00e3o s\u00f3 dar\u00e1  o lance quando o mercado estiver no Fim..",
Fe:"Certifique-se de que a SEGUNDA PAGINA DO INVENT\u00c1RIO est\u00e1 vazia e tem 10K de ouro. O bot encontrar\u00e1 e colocar\u00e1 o item na segunda pagina e na pr\u00f3xima vez, a p\u00e1gina, atualiza-se Derrentendo o item. A fundi\u00e7\u00e3o acontecer\u00e1 novamente a cada 5-10 minutos. ",Te:"Cura",tg:"Sem ouro suficiente para fundir. Ouro necess\u00e1rio!:",wg:"Skipping bid: Membro da galian\u00e7a j\u00e1 deu lance no item ",vg:"Skipping bid: J\u00e1 licitei o item ",advanced:"Avan\u00e7ado",
arena:"Arena",W:"Ataque autom\u00e1tico",Ta:"Evitar Atacar",U:"Adicionar Jogador",V:"Adicionar Nome do Jogador (Same Server)",gg:"Parar o Bot se ficar sem comida?",circusTurma:"Circus Turma",Je:"Dificuldade",dungeon:"Masmorra",Ke:"Configura\u00e7\u00e1o da Masmorra",eventExpedition:"Expedi\u00e7\u00e3o de evento",expedition:"Expedi\u00e7\u00f5es",Oe:"Configura\u00e7\u00e1o de Expedi\u00e7\u00f5es",pf:"Selecionar Monstro",ig:"Maior",hg:"Coloque as curas na primeira p\u00e1gina do invent\u00e1rio",
Za:"No",Uf:"Guardar Ouro",Sd:"Guardar ouro no Leil\u00e3o?",Ka:"Selecionar Horas",Ad:"Utilizar Roupas para Renovar Iventario?",Sf:"Selecione itens para serem redefinidos",vd:"Redefinir itens expirados\t",Ga:"Nota: Ao ativar esta op\u00e7\u00e3o, o bot vender\u00e1 os  itens expirados nos Pacotes para o Mercado da Guilda e cancelar\u00e1 para redefinir o tempo de expira\u00e7\u00e3o. Guilda \u00e9 necess\u00e1ria. Certifique-se que tem espa\u00e7o 3x3 vazio no iventario. Nota: Tamb\u00e9m ir\u00e1 coletar as Moedas de Ouro se elas estiverem prestes a expirar!!!",
fd:"Parar o Bot Aleatoriamente para trabalhar como [Fase de Teste]:",M:"Ficar com o Ouro: Bot vai guardar esse ouro na bolsa:",Kc:"maximo de Ouro: O bot gastar\u00e1 o ouro quando for Superior a",Tf:"Bot far\u00e1 ofertas em an\u00e9is e colares in\u00fateis",ub:"Adicionar atraso aleat\u00f3rio",vb:"Podes adicionar um atraso para o bot aqui.",Fa:"Reparar",sf:"Derreter apenas Azul?",wf:"Derreter apenas Roxo?",vf:"Derreter apenas Laranja?",yf:"Derreter tudo no ivent\u00e1rio?",zf:"Isto ir\u00e1 ignorar a cor e os itens da lista. A pagina 1 est\u00e1 reservada a repara\u00e7\u00e3o..",
Oa:"Derreter",Ab:"Pesquisa autom\u00e1tica",Yc:"Leil\u00e3o Autom\u00e1tico",Bb:"O uso excessivo do Leil\u00e3o pode resultar em banimento. Esse recurso tamb\u00e9m pode desacelerar o bot, pois ele verifica os leil\u00f5es a cada atualiza\u00e7\u00e3o. As licita\u00e7\u00f5es s\u00e3o feitas a cada 5 minutos, a menos que o leil\u00e3o esteja no estado \u201cmuito curto\u201d. Observe que, se voc\u00ea colocar apenas um item na se\u00e7\u00e3o PREFIX, o bot tentar\u00e1 filtrar pelo nome dos itens para licitar mais rapidamente. Embora voc\u00ea precise desativar a licita\u00e7\u00e3o de alimentos para isso.",
zd:"Pesquisar no leil\u00e3o dos gladiadores",Bd:"Pesquisar no leil\u00e3o dos mercen\u00e1rios",Jb:"Licitar Comida?",Lc:"Lance m\u00e1ximo",Kb:"Licitar se o Tempo for inferior a",Lb:"Itens licitados",If:"Linguagem do Leil\u00e3o",Jf:"De acordo com a atualiza\u00e7\u00e3o 2.5.6, defina o idioma novamente.",yb:"Poder\u00e1 adicionar itens para procurar no mercado e no leil\u00e3o. Tamb\u00e9m mostrar\u00e1 itens roxos no mercado assim que voc\u00ea adicionar um item \u00e0 lista.",Gf:"Utilize o leil\u00e3o com cuidado!",
Hf:"O lance autom\u00e1tico faz muitas solicita\u00e7\u00f5es ao servidor, causando erro de p\u00e1gina em branco e pode causar banimento se for utilizado com frequ\u00eancia!!",td:"Renovar pontos de evento com Rubis?",Zb:"Ativar \u00f3leo autom\u00e1tico",Kf:"Obter os \u00f3leos sagrados automaticamente",Pf:"Velocidade de verifica\u00e7\u00e3o das miss\u00f5es",ma:"Atacar membros da alian\u00e7a? :",ka:'Adicionar Jogador automaticamente \u00e0 lista de "Ataque" quando X OURO for roubado:',la:'Adicione Jogadores automaticamente \u00e0 lista "Evitar Ataque" quando perder:',
Ja:"Placar De Ataques",Ra:"Muito Longo",za:"Longo",Ca:"M\u00e9dio",Na:"Curto",Sa:"Bastante Curto",ua:"Aceitar Ataques ao Placar:",Ha:"Selecionar Posi\u00e7\u00e3o do ataque",Ia:"O bot ira atacar aleatoriamente jogadores no placar.",xa:"Ataque da Liga",ta:"Ativar ataque da liga:",Da:"Ataque aleat\u00f3rio",Ea:"Atacar do Menor para o maior",Ff:"Bot N\u00e3o atacara menbros da alian\u00e7a.",cc:"Local da Expedi\u00e7\u00e3o:",Cb:"Coletar Bonus automaticamente:",Nd:"Ignorar Chefe",Wb:"Local da Masmorra:",
yd:"Recome\u00e7ar se perder?",qc:"Defeni\u00e7\u00f5es do Inferno",rc:" A Personagem entrar\u00e1 no submundo apenas quando o HP for> 90%. Por favor, defina as configura\u00e7\u00f5es de porcentagem de cura na Aba de cura e certifique-se de que a Aba de cura est\u00e1 ativada. Se ao entrar no submundo fizer logout, v\u00e1 para o lobby e ative a caixa de sele\u00e7\u00e3o de login autom\u00e1tico.",oc:"Dificuldade Do inferno:",Fb:"Entrar automaticamente no inferno / Inferno Mode",ze:"Utilizar Mobiliza\u00e7\u00e3o se pontos = 0",
Ce:"Usar Rubies?",bc:"Deixar Inferno se nao tiver pontos?",ue:"O bot tentar\u00e1 usar a Villa Medici primeiro, se voc\u00ea n\u00e3o tiver, ele usar\u00e1 a po\u00e7\u00e3o de cura. N\u00e3o se esque\u00e7a de ativar o bot\u00e3o de Cura!.",ve:"Entrar automaticamente no Inferno ira desabilitar masmorras/arena/Circus.",Wf:"Defeni\u00e7oes de cura no Inferno",Be:"Usar Villa Medici?",Ae:"Usar Po\u00e7\u00e3o de Vida?",Fc:"INFO: O bot ir\u00e1 procurar itens no mercado a cada minuto selecionado, o que pode parar o ataque durante a busca.",
Yb:"Ativar pesquisa de mercado:",Gc:"Intervalo de pesquisa no mercado:",Hc:"Sugest\u00e3o 10 minutos.",zc:"Defini\u00e7\u00f5es de itens:",xc:"Nome do item inclui",Ic:"Pre\u00e7o Maximo",Ac:"Estilo do Item",yc:"Raridade do Item",Nb:"Comprar Soulbound?",Cc:"Itens para comprar",Bc:"Tentar comprar itens com pacotes se algum deles corresponde ao pre\u00e7o m\u00e1ximo Defenido.:",Mb:"Itens Comprados:",Re:"Percentagem de Cura",Df:"Comprar comida da Loja?",Ef:"Usar cura dos pacotes?",Cf:"Usar Cervisia?",
lg:"Usado por \u00faltimo",location:"Localiza\u00e7\u00e3o",Pa:"For\u00e7a",da:"Destreza",ca:"Agilidade",qa:"Constitui\u00e7\u00e3o",oa:"Carisma",ea:"Inteligencia",re:"Defini\u00e7\u00f5es de Treino",se:"Selecione os atributos que deseja treinar. ir\u00e1 treinar assim que houver ouro suficiente.",$a:"Proxima A\u00e7\u00e3o",Xe:"N\u00e3o",Ye:"Normal",pg:"Oponente",qg:"Nivel do Oponente",mf:"Miss\u00f5es",random:"aleat\u00f3rio",ug:"Defini\u00e7\u00f5es",Ag:"Brevemente...",type:"Clique nos \u00edcones para ativar os tipos de miss\u00f5es. Selecione os 3 primeiros se quiser se concentrar em Circus & Arena",
Fg:"Sim",A:"Procura",rb:"Adicionar item [NOME COMPLETO]",Bf:"Guardar recursos da Forja automaticamente",Bg:"Enviar",jg:"Intervalo : ",cg:"Ativar lance autom\u00e1tico",dg:"Cobrir aliados",Cg:"Tutorial",Va:"MMais jogadores ir\u00e3o por o bot mais lento.",Yf:"Comece adicionando o nome completo dos itens \u00e0 lista. Uma vez adicionado, a ferramenta exibir\u00e1 os resultados da pesquisa \u00e0 esquerda. Isso tamb\u00e9m auxilia nas pesquisas de leil\u00e3o autom\u00e1tico. Com o lance autom\u00e1tico ativado, a ferramenta far\u00e1 pesquisas peri\u00f3dicas com base no intervalo definido. Se o item for encontrado e voc\u00ea tiver fundos suficientes, ele far\u00e1 um lance automaticamente. Nota: Para pesquisar itens exclusivos em lojas, voc\u00ea deve adicionar pelo menos um item \u00e0 lista de pesquisa...",
eg:"O n\u00famero da criatura pode ser escolhido nos bot\u00f5es acima. O n\u00famero 1 representa a criatura \u00e0 esquerda. Certifique-se de selecionar o local correto, caso contr\u00e1rio o bot poder\u00e1 fazer uma pausa.",Le:"Escolha a dificuldade da masmorra nas op\u00e7\u00f5es acima. Certifique-se de selecionar o local correto, caso contr\u00e1rio, o bot poder\u00e1 fazer uma pausa.",Se:"Defini\u00e7\u00f5es de cura",Me:"Armazene o excesso de ouro na Guilda comprando itens do mercado da Guilda. -> Min. Gold",
mg:"Mover tudo",og:"Mover o Selecionado",$f:"Curar autom\u00e1ticamente",ag:"Percentagem da cura",Eg:"Rubi",cd:"Defini\u00e7\u00f5es Gerais",qf:"Vender tudo",rf:"Vender Selecionados",T:"Armas",R:"Escudos",J:"Armaduras",L:"Capacetes",K:"Luvas",S:"Sapatos",P:"Aneis",I:"Amuletos",xe:"Usaveis",we:"Atualiza\u00e7\u00f5es",pd:"Receitas",Mc:"Mercen\u00e1rios",rd:"Refor\u00e7os",$b:"Entrar no Submundo se HP >",od:"Velocidade de Verifica\u00e7\u00e3o de Miss\u00e3o",hd:'O padr\u00e3o \u00e9 "3x". Se o bot causar problemas com miss\u00f5es, altere a velocidade da miss\u00e3o de acordo com a velocidade do seu servidor.',
nc:"Saco de Cura",ac:'Se voc\u00ea est\u00e1 renovando pontos manualmente, voc\u00ea precisa clicar no bot\u00e3o acima "Atualizar Expedi\u00e7\u00e3o de Evento se estiver preso!',Mf:"Voc\u00ea deve ativar pelo menos uma das seguintes op\u00e7\u00f5es: expedi\u00e7\u00e3o, masmorra, arena ou circo para iniciar a Expedi\u00e7\u00e3o de Evento.",qd:"Atualizar Expedi\u00e7\u00e3o de Evento se estiver preso!",ra:"Cobrir Aliados?",Rd:"Deixe todas as configura\u00e7\u00f5es desativadas se desejar fundir usando pacotes que cont\u00eam os itens da lista. No entanto, voc\u00ea ainda pode escolher cores.",
Lf:"Personagem(Desligado) / Mercen\u00e1rio(Ligado)",Rf:"Reparar Ambos?",Vf:"Cron\u00f4metros",Timers:"Insira o n\u00famero de minutos para cada cron\u00f4metro abaixo ou deixe-o padr\u00e3o.",nd:"Ignorar Filtro de Miss\u00e3o",md:"Digite palavras-chave para filtrar miss\u00f5es que voc\u00ea n\u00e3o deseja aceitar",va:"Inserir Palavra-chave",N:"Adicionar",sd:"Remover",Qb:"Limpar",kd:"Aceitar Filtro de Miss\u00e3o",ld:"Digite palavras-chave para escolher quais miss\u00f5es aceitar. Usar isso ignorar\u00e1 os tipos de miss\u00e3o",
fa:"Pular Miss\u00f5es de Tempo?",Qf:"Miss\u00f5es",Db:"Auto Traje",ye:"Usar Traje?",Ib:"Batalha B\u00e1sica",Vb:"Batalha em Masmorra",Eb:"O bot s\u00f3 usar\u00e1 Dis Pater Normal e M\u00e9dio se seus pontos de expedi\u00e7\u00e3o/masmorra forem 0.",pc:"Configura\u00e7\u00f5es de Cura no Inferno",xb:"Atacar Chefe Quando Dispon\u00edvel?",ya:"O ataque \u00e0 Liga ser\u00e1 desativado ap\u00f3s 5 ataques malsucedidos.",sc:"\u00d3leos Sagrados",Uc:"Nome do Item",O:"N\u00edvel M\u00edn. do Item",Vc:"Qualidade M\u00edn. do Item",
wb:"Aplicar/Reiniciar Temporizador",uc:"Ignorar Combina\u00e7\u00e3o de Prefixo/Sufixo",Ee:"Sim",Zc:"N\u00e3o",aa:"Adicionar Prefixo",ba:"Adicionar Sufixo",pa:"Limpar Hist\u00f3rico",Od:"Lista de Ignora\u00e7\u00e3o de Fundi\u00e7\u00e3o",gd:"Prefixo",Td:"Sufixo",xd:"Redefinir Itens Expirados",Pd:"Fundir Aleatoriamente de Pacotes?",Qd:"Guia de Fundi\u00e7\u00e3o",wa:"Extras",zb:"Leil\u00e3o",Jc:"Mercado",Qa:"Temporizadores",me:"Fundi\u00e7\u00e3o",le:"Fundi\u00e7\u00e3o se n\u00e3o houver ouro suficiente",
ie:"Fundir se n\u00e3o houver item",ga:"Reparo",ae:"Manter Ouro no Mercado da Guilda",Xd:"Manter Ouro no Leil\u00e3o",pe:"Treinamento",de:"Redefinir Expirados",ne:"Loja de Forja",Vd:"Verifica\u00e7\u00e3o de Leil\u00e3o",fe:"Pesquisa",B:"Habilitar",Wc:"Ouro M\u00ednimo",sa:"Doar Ouro para a Guilda",Sb:"Isso doar\u00e1 a cada 5 minutos. Voc\u00ea pode alterar o intervalo na guia de temporizadores",tc:"Quanto deseja doar?",Tb:"Doar quando tiver mais que >",Ec:"Menos que <",ud:"Redefinir Expirados e Outras Configura\u00e7\u00f5es",
wd:"Redefinir em:",Of:"Mantenha Ctrl (Cmd no Mac) pressionado para selecionar v\u00e1rios itens",vc:"Importar/Exportar Configura\u00e7\u00f5es",ec:"Exportar Configura\u00e7\u00f5es",wc:"Importar Configura\u00e7\u00f5es",Nc:"Mensagem para Todos os Jogadores",Oc:"[Requer Chave Ultra Premium, mensagem no Discord para obter a chave.]",Pc:"Digite a mensagem a ser enviada",Rb:"Para scripts personalizados, entre em contato conosco no Discord",Rc:"Enviar",Sc:"Mostrar Jogadores",Qc:"Selecionar Todos",Tc:"Desmarcar Todos",
Dc:"Certifique-se de que seu invent\u00e1rio tenha espa\u00e7o suficiente. O tempo de recarga \u00e9 de 2 minutos."},ig={ic:"Hell Farm [Manual, Beta]",hc:"Farm Location",jc:"Uwaga: w\u0142\u0105cz t\u0119 funkcj\u0119 po odblokowaniu stworzenia, kt\u00f3re chcesz zaatakowa\u0107, nie b\u0119dzie ono automatycznie atakowa\u0107, aby odblokowa\u0107 potwora.",fc:"Farm Enemy",Gb:"Automatyczne Logowanie",Hb:"Musisz zezwoli\u0107 na wyskakuj\u0105ce okienka z ekranu lobby GameForge. Zobacz dokumentacj\u0119, jak to zrobi\u0107.",
dd:"Wstrzymaj Bota",ed:"Wstrzymaj Bota na (Minuty)",dc:"Data Wyga\u015bni\u0119cia",ad:"Tylko kupowa\u0107 jedzenie?",bd:"Je\u015bli to w\u0142\u0105czysz, zignoruje twoje wybory i b\u0119dzie automatycznie kupowa\u0107 jedzenie, nie wprowadzaj\u0105c niczego.",Ba:"Maksymalna \u0142\u0105czna ilo\u015b\u0107 z\u0142ota do wydania",Aa:"Maksymalna ilo\u015b\u0107 z\u0142ota na jedzenie do wydania",$c:"Bot b\u0119dzie sprawdza\u0107 oleje co 60 minut",ke:"Ustawia timer do sprawdzania czas\u00f3w topienia.",
he:"Ustawia timer do sprawdzania topienia, gdy nie masz z\u0142ota.",je:"Ustawia timer do sprawdzania topienia, gdy nie masz dost\u0119pnego przedmiotu.",ce:"Ustawia timer do naprawy i sprawdzania twoich przedmiot\u00f3w.",be:"Ustawia timer do sprawdzania ilo\u015bci z\u0142ota w gildijnym rynku.",Yd:"Ustawia timer dla opcji zatrzymania z\u0142ota na aukcji.",Ud:"Ustawia timer do sprawdzania listy PvP na arenie do ataku.",Zd:"Ustawia timer do sprawdzania listy PvP w cyrku do ataku.",qe:"Ustawia timer treningowy do trenowania statystyk.",
ee:"Ustawia timer do resetowania wygas\u0142ych przedmiot\u00f3w.",oe:"Ustawia timer do przechowywania materia\u0142\u00f3w do kucia w horreum.",Wd:"Ustawia timer do sprawdzania aukcji gladiator\u00f3w i najemnik\u00f3w.",ge:"Ustawia timer do wyszukiwania przedmiot\u00f3w na aukcji i w sklepie.",$d:"Ustawia timer do wysy\u0142ania darowizn do gildii.",mc:"Z\u0142oto Przeniesione",Ub:"Nie sprzedawaj przedmiot\u00f3w z listy topienia",Dd:"Automatyzacja Sklepu",Fd:"Ustawienia Wyszukiwania Przedmiotu",
Ed:"U\u017cyj tego narz\u0119dzia do wyszukiwania przedmiot\u00f3w. Po prostu dodaj przedmioty do listy, okre\u015bl ilo\u015b\u0107 tkaniny i rozpocznij wyszukiwanie.",Gd:"Ilo\u015b\u0107 Tkaniny do U\u017cycia:",Hd:"Ile tkaniny u\u017cy\u0107?",Ma:"Wprowad\u017a Nazw\u0119 Przedmiotu",La:"Wprowad\u017a Poziom Przedmiotu",Jd:"Jako\u015b\u0107 Przedmiotu",Id:"Wprowad\u017a Nazw\u0119 Przedmiotu Tutaj",Kd:"Rozpocznij Wyszukiwanie",Ld:"Pomi\u0144 i Kontynuuj",Md:"Zatrzymaj Wyszukiwanie",kc:"Sortuj Rynek Gildii wed\u0142ug",
Xc:"Najdro\u017csze",Ob:"Najta\u0144sze",Cd:"Wybierz Opcj\u0119",Xb:"Pod\u015bwietl przedmioty z Podziemia",lc:"Skoncentruj si\u0119 na zadaniu?",Dg:"U\u017cyj rubinu, je\u015bli nie ma tkaniny?",na:"Unikaj atakowania tych samych os\u00f3b, aby unikn\u0105\u0107 zg\u0142osze\u0144. Zg\u0142oszenia zwi\u0119kszaj\u0105 szans\u0119 na zablokowanie konta.",tf:"Roztopi\u0107 zielone?",jd:"Nie akceptuj losowych zada\u0144, je\u015bli wprowadzono jakiekolwiek filtry?",Ve:"Maksymalna jako\u015b\u0107 materia\u0142u do u\u017cycia",
Ne:"W\u0142\u0105czy\u0107 wyszukiwanie najemnik\u00f3w",kg:"Kliknij \u201eSprzedaj Wszystkie Wybrane\u201d, aby sprzeda\u0107 wszystkie przedmioty. Upewnij si\u0119, \u017ce masz 2x3 puste miejsce w swojej pierwszej (1) torbie. Aby zbiera\u0107 z\u0142oto masowo, u\u017cyj filtra na z\u0142oto i opcji \u201eWybierz Wybrane lub Wybierz Wszystkie\u201d.",sb:"\ud83d\udd25 : Dodaje przedmiot do listy przetapiania.",Ua:"\ud83d\udd28 : Dodaje przedmiot do listy aukcyjnej.",nf:"Od\u015bwie\u017c sklep tkanin\u0105, gdy jest pe\u0142ny (musisz ponownie sprzeda\u0107 po tym)",
bf:"Strona:",kf:"Zatrzymaj",hf:"Sprzedaj T\u0119 Stron\u0119",ef:"Wybierz Wybrane",cf:"Wybierz Wszystko",lf:"Ustawienia Automatycznego Pakowania",jf:"Wy\u015blij Zasoby",ff:"Sprzedaj Wszystkie Wybrane",Y:"Rodzaj Przedmiotu",pb:"Bronie",mb:"Tarcze",bb:"Zbroje",hb:"He\u0142my",gb:"R\u0119kawice",cb:"Buty",kb:"Pier\u015bcienie",ab:"Amulety",eb:"U\u017cytkowe (\u017bywno\u015b\u0107)",ob:"Ulepszenia",Ze:"Wzmacniacze",jb:"Receptury",ib:"Najemnicy",nb:"Narz\u0119dzia Kowalskie",lb:"Zwoje",df:"Wzmocnienia",
$e:"Przedmioty Eventowe",fb:"Materia\u0142y Kowalskie",af:"Z\u0142oto",D:"Wszystko",rg:"Jako\u015b\u0107",qb:"Bia\u0142y",G:"Zielony",F:"Niebieski",H:"Fioletowy",Z:"Pomara\u0144czowy",ja:"Czerwony",gf:"Opcje Sprzeda\u017cy",uf:"Ignorowa\u0107 Kombinacje Przedrostk\u00f3w/Sufiks\u00f3w?",Qe:"Ile jedzenia kupi\u0107/wybiera\u0107?",Ie:"Normalny",He:"\u015aredni",Ge:"Trudny",Xa:"Standardowy",sg:"Naprawa Utkni\u0119\u0107",Nf:"Wy\u0142\u0105cz Wej\u015bcie do Piek\u0142a, je\u015bli chcesz wy\u0142\u0105czy\u0107 Lochy/Cyrk/Aren\u0119. Je\u015bli wszed\u0142e\u015b do Piek\u0142a r\u0119cznie, musisz w\u0142\u0105czy\u0107 Tryb Piek\u0142a.",
te:"Okre\u015bl, ile razy chcesz przeprowadzi\u0107 szkolenia dla statystyk oraz ich priorytety. Bot nie b\u0119dzie przeprowadza\u0142 szkole\u0144, dop\u00f3ki nie zostanie ustalony priorytet. Je\u015bli priorytet zosta\u0142 ustawiony, ale nie ma ju\u017c wi\u0119cej statystyk do szkolenia, bot kontynuowa\u0107 b\u0119dzie z priorytetowym szkoleniem.",bg:"Quest",Pb:"Wybierz kostium z Za\u015bwiat\u00f3w",De:"Nosi\u0107 kostium z Za\u015bwiat\u00f3w, gdy jest dost\u0119pny?",xg:"Przetapianie",zg:"Ustawienia Topienia",
xf:"Topione Przedmioty",Af:"Dodaj Prefiks lub Sufiks, gdy bot znajdzie go w paczkach, automatycznie przeprowadzi przetapianie.:",yg:"Topiony Przedmiot:",Wa:"Kliknij na przedmiot, kt\u00f3ry chcesz naprawi\u0107. Ten system naprawi twoje dwie postacie, g\u0142\u00f3wn\u0105 oraz pierwsz\u0105 posta\u0107 cyrku. Musisz mie\u0107 co najmniej 10000 z\u0142ota, aby naprawa mog\u0142a si\u0119 rozpocz\u0105\u0107. Je\u015bli utkn\u0105\u0142 na jednym przedmiocie, oznacza to, \u017ce nie masz materia\u0142u do naprawy. Spr\u00f3buj r\u00f3wnie\u017c zrobi\u0107 troch\u0119 miejsca w swoim inwentarzu. Bot rozpocznie napraw\u0119, gdy trwa\u0142o\u015b\u0107 przedmiotu wynosi 0%.",
Xf:"Zastosuj tylko do Najemnik\u00f3w",Zf:"Licytacja b\u0119dzie licytowa\u0107 tylko wtedy, gdy rynek zbli\u017cy si\u0119 do ko\u0144ca.",Fe:"Upewnij si\u0119, \u017ce DRUGA KARTA INWENTARZA jest pusta i masz 10 000 z\u0142ota. Bot znajdzie i umie\u015bci przedmiot na drugiej karcie, a nast\u0119pnie, gdy strona zostanie od\u015bwie\u017cona, przeprowadzi przetapianie przedmiotu. przetapianie b\u0119dzie ponownie sprawdzane co 5-10 minut.",Te:"Leczenie",tg:"Za ma\u0142o z\u0142ota na przetapianie. Wymagane Z\u0142oto:",
wg:"Pomijanie licytacji: Cz\u0142onek gildii ju\u017c licytowa\u0142 przedmiot ",vg:"Pomijanie licytacji: Ju\u017c licytowa\u0142e\u015b przedmiot ",advanced:"Zaawansowane",arena:"Arena",W:"Auto Atak",Ta:"Unikaj Ataku",U:"Dodaj Gracza",V:"Wpisz Nazw\u0119 Gracza (Same Server)",gg:"Zatrzymaj Bota, je\u015bli brakuje jedzenia?",circusTurma:"Cyrk Turma",Je:"Trudno\u015b\u0107",dungeon:"Loch",Ke:"Ustawienia Lochu",eventExpedition:"Ekspedycja Wydarzenia",expedition:"Wyprawa",Oe:"Ustawienia Wyprawy",pf:"Wybierz Potwora",
ig:"Najwy\u017cszy",hg:"Umie\u015b\u0107 swoje przedmioty uzdrawiaj\u0105ce na pierwszej stronie swojego inwentarza",Za:"W",Uf:"Przechowuj Z\u0142oto",Sd:"Przechowuj Z\u0142oto w Licytacji?",Ka:"Wybierz Godzin\u0119",Ad:"U\u017cyj Roboczych Ubran, aby odnowi\u0107 Sklep?",Sf:"Wybierz Przedmioty do Zresetowania",vd:"Zresetuj Wygas\u0142e Przedmioty",Ga:"Uwaga: W\u0142\u0105czaj\u0105c t\u0119 opcj\u0119, bot b\u0119dzie sprzedawa\u0142 nadchodz\u0105ce wygas\u0142e przedmioty z Paczek na Rynek Gildii, a nast\u0119pnie anuluje, aby zresetowa\u0107 czas wyga\u015bni\u0119cia. Wymagana jest gildia. Upewnij si\u0119, \u017ce masz puste miejsce 3x3 w swoich torbach.",
fd:"Losowe Zatrzymywanie Bota [Faza Testowa]:",M:"Zachowaj Z\u0142oto: Bot b\u0119dzie trzyma\u0142 to z\u0142oto w torbie:",Kc:"Max Gold: Bot b\u0119dzie wydawa\u0142, gdy z\u0142oto b\u0119dzie wi\u0119ksze ni\u017c",Tf:"Bot b\u0119dzie licytowa\u0107 niepotrzebne pier\u015bcienie, naszyjniki",ub:"Dodaj Losowe Op\u00f3\u017anienie",vb:"Mo\u017cesz tutaj doda\u0107 op\u00f3\u017anienie do bota.",Fa:"Naprawa",sf:"Top Tylko Niebieskie?",wf:"Top Tylko Fioletowe?",vf:"Top Tylko Pomara\u0144czowe?",yf:"Top Wszystko na 2. karcie?",
zf:"To zignoruje wyb\u00f3r kolor\u00f3w",pa:"Wyczy\u015b\u0107 Histori\u0119",Oa:"Przetapianie",Ab:"Search",Yc:"Auto Licytacja",Bb:"Nadmierne korzystanie z aukcji mo\u017ce skutkowa\u0107 banem. Zaleca si\u0119 wy\u0142\u0105czenie innych funkcji okre\u015blania stawek, aby unikn\u0105\u0107 potencjalnych konflikt\u00f3w. Ta funkcja spowolni bota.",zd:"Szukaj w Licytacji Gladiator\u00f3w",Bd:"Szukaj w Licytacji Najemnik\u00f3w",Jb:"Licytuj Po\u017cywienie?",Lc:"Maksymalna Licytacja",Kb:"Licytuj, je\u015bli status jest mniejszy ni\u017c",
Lb:"Wystawione Przedmioty",If:"J\u0119zyk Licytacji",Jf:"Zgodnie z aktualizacj\u0105 2.9.4, prosz\u0119 ponownie ustawi\u0107 j\u0119zyk lub ZRESETOWA\u0106 BOTA. Upewnij si\u0119, \u017ce wszystko jest poprawne, w przeciwnym razie bot nie b\u0119dzie licytowa\u0107.",yb:"Mo\u017cesz doda\u0107 przedmioty do wyszukiwania na rynku i w licytacji. Poka\u017ce tak\u017ce fioletowe przedmioty na rynku, gdy dodasz przedmiot do listy. Je\u015bli chcesz w\u0142\u0105czy\u0107 auto licytacj\u0119, u\u017cyj opcji poni\u017cej",
Gf:"U\u017cywaj licytacji z rozwag\u0105!",Hf:"Automatyczna licytacja generuje zbyt wiele \u017c\u0105da\u0144 do serwera i mo\u017ce spowodowa\u0107 ban, je\u015bli u\u017cywasz jej ca\u0142y czas!",td:"Odnowi\u0107 Punkty Wydarzenia Rubinem?",Zb:"W\u0142\u0105cz Auto Olej",Kf:"Auto Pobieraj \u015awi\u0119te Oleje",Pf:"Szybko\u015b\u0107 Sprawdzania Zada\u0144",ma:"Atakowa\u0107 Cz\u0142onk\u00f3w Gildii? :",ka:'Automatycznie dodawaj osoby do listy "Atak", gdy wi\u0119cej ni\u017c X z\u0142ota zostanie skradzione.:',
la:'Automatycznie dodawaj osoby do listy "Unikaj Atak", gdy przegrasz z nimi.:',Ja:"Ataki na Tablicy Wynik\u00f3w",Ra:"Bardzo D\u0142ugo",za:"D\u0142ugo",Ca:"\u015arednio",Na:"Kr\u00f3tko",Sa:"Bardzo Kr\u00f3tko",$b:"Wejd\u017a do Podziemia je\u015bli HP >",od:"Szybko\u015b\u0107 Sprawdzania Zada\u0144",hd:'Domy\u015blnie to "3x". Je\u015bli bot sprawia problemy z zadaniami, zmie\u0144 szybko\u015b\u0107 zada\u0144 zgodnie ze szybko\u015bci\u0105 serwera.',nc:"Wyb\u00f3r Worka z Lecznicami",ac:'Je\u015bli r\u0119cznie odnawiasz punkty, musisz klikn\u0105\u0107 przycisk powy\u017cej: "Od\u015bwie\u017c Ekspedycj\u0119 Eventow\u0105, je\u015bli utkn\u0119\u0142o!"',
Mf:"Musisz w\u0142\u0105czy\u0107 co najmniej jedn\u0105 z opcji: ekspedycja, loch, arena lub cyrk, aby rozpocz\u0105\u0107 Ekspedycj\u0119 Eventow\u0105.",qd:"Od\u015bwie\u017c Ekspedycj\u0119 Eventow\u0105, je\u015bli utkn\u0119\u0142o!",ra:"Nie przebijaj gildii?",Rd:"Pozostaw wszystkie ustawienia wy\u0142\u0105czone, je\u015bli chcesz przetapia\u0107 za pomoc\u0105 paczek zawieraj\u0105cych przedmioty z listy. Jednak nadal mo\u017cesz wybiera\u0107 kolory.",Lf:"Posta\u0107(Wy\u0142\u0105czona) / Najemnik(W\u0142\u0105czony)",
Rf:"Naprawi\u0107 Obie?",Vf:"Timery",Timers:"Wprowad\u017a liczb\u0119 minut dla ka\u017cdego timera poni\u017cej lub pozostaw domy\u015blnie.",nd:"Ignoruj Filtr Zada\u0144",md:"Wprowad\u017a s\u0142owa kluczowe, aby odfiltrowa\u0107 zadania, kt\u00f3rych nie chcesz przyj\u0105\u0107",va:"Wprowad\u017a S\u0142owo Kluczowe",N:"Dodaj",sd:"Usu\u0144",Qb:"Wyczy\u015b\u0107",kd:"Akceptuj Filtr Zada\u0144",ld:"Wprowad\u017a s\u0142owa kluczowe, aby wybra\u0107 zadania do przyj\u0119cia. U\u017cycie tego spowoduje ignorowanie rodzaj\u00f3w zada\u0144",
fa:"Pomi\u0144 Zadania Czasowe?",Qf:"Zadania",Db:"Automatyczny Kostium",ye:"U\u017cywa\u0107 Kostiumu?",Ib:"Podstawowa Bitwa",Vb:"Bitwa w Lochach",Eb:"Bot b\u0119dzie nosi\u0142 Dis Pater Normal i Medium tylko wtedy, gdy Twoje punkty ekspedycji/podziemi wynosz\u0105 0.",pc:"Ustawienia Piekielnego Leczenia",xb:"Atakuj Bossa, Gdy Dost\u0119pny?",ya:"Atak na Lig\u0119 zostanie wy\u0142\u0105czony po 5 nieudanych atakach.",sc:"\u015awi\u0119te Oleje",Uc:"Nazwa Przedmiotu",O:"Minimalny Poziom Przedmiotu",
Vc:"Minimalna Jako\u015b\u0107 Przedmiotu",wb:"Zastosuj/Resetuj Licznik",uc:"Ignoruj Prefiks/Sufiks",Ee:"Tak",Zc:"Nie",aa:"Dodaj Prefiks",ba:"Dodaj Sufiks",Od:"Lista Ignorowanych Przedmiot\u00f3w do Topienia",gd:"Prefiks",Td:"Sufiks",xd:"Resetuj Wygas\u0142e Przedmioty",Pd:"Losowe Topienie z Paczek?",Qd:"Karta Topienia",wa:"Dodatki",zb:"Aukcja",Jc:"Rynek",Qa:"Zegary",me:"Topienie",le:"Topienie, je\u015bli brakuje z\u0142ota",ie:"Topienie, je\u015bli brakuje przedmiotu",ga:"Naprawa",ae:"Przechowuj Z\u0142oto na Rynku Gildii",
Xd:"Przechowuj Z\u0142oto na Aukcji",pe:"Trening",de:"Resetuj Wygas\u0142e",ne:"Przechowuj W Ku\u017ani",Vd:"Sprawd\u017a Aukcj\u0119",fe:"Szukaj",B:"W\u0142\u0105cz",Wc:"Minimalne Z\u0142oto",sa:"Wp\u0142acaj Z\u0142oto do Gildii",Sb:"B\u0119dzie wp\u0142aca\u0107 co 5 minut. Mo\u017cesz zmieni\u0107 interwa\u0142 w zak\u0142adce zegar\u00f3w",tc:"Ile chcesz wp\u0142aci\u0107?",Tb:"Wp\u0142aca\u0107, gdy masz wi\u0119cej ni\u017c >",Ec:"Mniej ni\u017c <",ud:"Resetuj Wygas\u0142e i Inne Ustawienia",
wd:"Reset za:",Of:"Naci\u015bnij Ctrl (Cmd na Macu), aby zaznaczy\u0107 wiele przedmiot\u00f3w",vc:"Importuj/Eksportuj Ustawienia",ec:"Eksportuj Ustawienia",wc:"Importuj Ustawienia",Nc:"Wiadomo\u015b\u0107 do Wszystkich Graczy",Oc:"[Wymaga Klucza Ultra Premium, wiadomo\u015b\u0107 na Discordzie, aby go otrzyma\u0107.]",Pc:"Wprowad\u017a wiadomo\u015b\u0107 do wys\u0142ania",Rb:"Aby uzyska\u0107 niestandardowe skrypty, skontaktuj si\u0119 z nami na Discordzie",Rc:"Wy\u015blij",Sc:"Poka\u017c Graczy",
Qc:"Zaznacz Wszystkie",Tc:"Odznacz Wszystkie",Dc:"Upewnij si\u0119, \u017ce tw\u00f3j inwentarz ma wystarczaj\u0105co du\u017co miejsca. Czas odnowienia wynosi 2 minuty.",ua:"W\u0142\u0105cz Atak na Tablicy Wynik\u00f3w:",Ha:"Wybierz Zakres Ataku",Ia:"Bot losowo atakuje z listy tablicy wynik\u00f3w.",xa:"Atak Ligi",ta:"W\u0142\u0105cz Atak Ligi:",Da:"Losowo Atakuj",Ea:"Atakuj od najs\u0142abszego do najsilniejszego",Ff:"Domy\u015blnie bot unika atakowania cz\u0142onk\u00f3w gildii.",cc:"Lokalizacja Wyprawy:",
Cb:"Auto Zbieraj Bonusy:",Nd:"Pomi\u0144 Bossa",Wb:"Lokalizacja Lochu:",yd:"Zresetowa\u0107, je\u015bli przegrasz?",qc:"Ustawienia Piek\u0142a",rc:"Skonfiguruj ustawienia procentu leczenia w zak\u0142adce leczenia i upewnij si\u0119, \u017ce zak\u0142adka leczenia jest aktywowana. Je\u015bli wej\u015bcie do podziemi wyrzuca ci\u0119 z gry, przejd\u017a do lobby i zaznacz pole wyboru automatycznego logowania.",oc:"Trudno\u015b\u0107 Piek\u0142a",Fb:"Auto Wej\u015bcie do Piek\u0142a: / Piek\u0142a Mode",
ze:"U\u017cyj Mobilizacji, je\u015bli punkty = 0",Ce:"U\u017cyj rubin\u00f3w?",bc:"Wyj\u015b\u0107 z podziemi, je\u015bli nie ma punkt\u00f3w?",ue:"Bot b\u0119dzie pr\u00f3bowa\u0142 u\u017cy\u0107 willi medici najpierw, je\u015bli jej nie masz, u\u017cyje mikstury uzdrawiania. Nie zapomnij w\u0142\u0105czy\u0107 prze\u0142\u0105cznika uzdrawiania.",ve:"Automatyczne wej\u015bcie do piek\u0142a wy\u0142\u0105czy loch/aren\u0119/cyrk po wej\u015bciu do piek\u0142a.",Wf:"Ustawienia Leczenia Piek\u0142a",
Be:"U\u017cyj Willi Medici?",Ae:"U\u017cyj Mikstury Uzdrawiania?",Fc:"INFORMACJA: Bot b\u0119dzie wyszukiwa\u0142 przedmioty na rynku co wybran\u0105 liczb\u0119 minut, co mo\u017ce spowodowa\u0107 zatrzymanie atakowania podczas wyszukiwania.",Yb:"W\u0142\u0105cz Wyszukiwanie na Rynku:",Gc:"Interwa\u0142 Wyszukiwania na Rynku w Minutach:",Hc:"Sugerowane 10 minut.",zc:"Ustawienia Przedmiotu:",xc:"Nazwa Przedmiotu Zawiera",Ic:"Maksymalna Cena",Ac:"Rodzaj Przedmiotu",yc:"Rzadko\u015b\u0107 Przedmiotu",
Nb:"Kup Przedmiot Uwi\u0105zany?",Cc:"Przedmioty do Kupienia",Bc:"Pr\u00f3buj kupowa\u0107 przedmioty z paczek, je\u015bli kt\u00f3rykolwiek z nich pasuje do maksymalnej ceny wprowadzonej.:",Mb:"Zakupione Przedmioty:",Re:"Procent Leczenia",Df:"Kupuj Jedzenie ze Sklepu?",Ef:"U\u017cyj Leczenia z Paczki?",Cf:"U\u017cyj Cervisia?",lg:"Ostatnio U\u017cyty",location:"Lokalizacja",Pa:"Si\u0142a",da:"W\u0142adanie broni\u0105",ca:"Zr\u0119czno\u015b\u0107",qa:"Budowa fizyczna",oa:"Charyzma",ea:"Inteligencja",
re:"Ustawienia Treningu",se:"Wybierz atrybuty, kt\u00f3re chcesz trenowa\u0107. Bot przeprowadzi trening, gdy b\u0119dziesz mia\u0142 wystarczaj\u0105co du\u017co z\u0142ota.",$a:"Nast\u0119pna akcja",Xe:"Nie",Ye:"Normalnie",pg:"Przeciwnik",qg:"Poziom Przeciwnika",mf:"Zadania",random:"Losowo",ug:"Ustawienia",Ag:"Wkr\u00f3tce...",type:"Kliknij na ikony, aby aktywowa\u0107 rodzaje zada\u0144.",Fg:"Tak",A:"Licytacja/Szukaj",rb:"Dodaj przedmioty",Bf:"Automatycznie Przechowuj Zasoby W\u0142asne",Bg:"Zatwierd\u017a",
jg:"Interwa\u0142 : ",cg:"W\u0142\u0105cz Automatyczn\u0105 Licytacj\u0119",dg:"Nie licytuj, je\u015bli cz\u0142onek gildii ju\u017c licytowa\u0142",Cg:"Samouczek",Va:"Wybierz przyciski powy\u017cej, aby wybra\u0107, czy chcesz stawi\u0107 czo\u0142a najni\u017cszemu przeciwnikowi na arenie, czy przeciwnikowi najwy\u017cszego poziomu. Wi\u0119cej u\u017cytkownik\u00f3w spowolni dzia\u0142anie bota.",Yf:'Aby rozpocz\u0105\u0107, dodaj przedmiot do listy (np. "Lucius"). Po dodaniu narz\u0119dzie b\u0119dzie szuka\u0107 przedmiotu i wy\u015bwietla\u0107 wyniki wyszukiwania po lewej stronie ekranu. B\u0119dzie r\u00f3wnie\u017c szuka\u0107 przedmiotu w celu automatycznej licytacji. Je\u015bli w\u0142\u0105czysz automatyczn\u0105 licytacj\u0119, narz\u0119dzie b\u0119dzie regularnie szuka\u0107 przedmiotu w okre\u015blonych odst\u0119pach czasu, zgodnie z liczb\u0105 wpisan\u0105 w polu interwa\u0142u. Je\u015bli narz\u0119dzie znajdzie przedmiot i b\u0119dziesz mie\u0107 wystarczaj\u0105co du\u017co pieni\u0119dzy, automatycznie z\u0142o\u017cy za ciebie licytacj\u0119. *Uwaga* aby szuka\u0107 unikalnych przedmiot\u00f3w w sklepach, musisz doda\u0107 przynajmniej 1 losowy przedmiot do listy wyszukiwania.',
eg:"Numer potwora mo\u017cna wybra\u0107 z przycisk\u00f3w powy\u017cej. Numer 1 reprezentuje potwora najbardziej na lewo. Upewnij si\u0119, \u017ce wybierasz w\u0142a\u015bciw\u0105 lokalizacj\u0119, inaczej bot mo\u017ce si\u0119 zatrzyma\u0107.",Le:"Wybierz trudno\u015b\u0107 lochu z powy\u017cszych opcji. Upewnij si\u0119, \u017ce wybierasz w\u0142a\u015bciw\u0105 lokalizacj\u0119, inaczej bot mo\u017ce si\u0119 zatrzyma\u0107.",Se:"Ustawienia Leczenia",Me:"Przechowuj nadmiar z\u0142ota w Gildii, kupuj\u0105c przedmioty z rynku gildii. -> Min. Z\u0142oto",
mg:"Przenie\u015b Wszystko",og:"Przenie\u015b Wybrane",$f:"Auto Uzdrawianie",ag:"Procent Auto Uzdrawiania",Eg:"Ruby",cd:"Og\u00f3lne Ustawienia",qf:"Sprzedaj Wszystko",rf:"Sprzedaj Wybrane",T:"Bronie",R:"Tarcze",J:"Zbroje Piersiowe",L:"He\u0142my",K:"R\u0119kawice",S:"Buty",P:"Pier\u015bcienie",I:"Amulety",xe:"U\u017cywalne",we:"Ulepszenia",pd:"Receptury",Mc:"Zwoje Najemnik\u00f3w",rd:"Wzmocnienia"},jg={ic:"Hell Farm [Manual, Beta]",hc:"Farm Location",jc:"Tenga en cuenta: active esta funci\u00f3n despu\u00e9s de desbloquear la criatura que desea atacar, no atacar\u00e1 autom\u00e1ticamente para desbloquear el monstruo.",
fc:"Farm Enemy",Gb:"Inicio Autom\u00e1tico",Hb:"Necesitas permitir las ventanas emergentes desde la pantalla del lobby de GameForge. Consulta la documentaci\u00f3n sobre c\u00f3mo hacerlo.",dd:"Pausar Bot",ed:"Pausar Bot en (Minutos)",dc:"Fecha de Expiraci\u00f3n",ad:"\u00bfComprar solo comida?",bd:"Si activas esto, el bot ignorar\u00e1 tus selecciones y comprar\u00e1 comida autom\u00e1ticamente sin ingresar nada.",Ba:"M\u00e1ximo de oro total para gastar",Aa:"M\u00e1ximo de oro por comida para gastar",
$c:"El bot verificar\u00e1 los aceites cada 60 minutos",ke:"Establece un temporizador para verificar los tiempos de fundici\u00f3n.",he:"Establece un temporizador para verificar la fundici\u00f3n cuando no tengas oro.",je:"Establece un temporizador para verificar la fundici\u00f3n si no tienes el art\u00edculo disponible.",ce:"Establece un temporizador para reparar y verificar tus objetos.",be:"Establece un temporizador para verificar el oro en el mercado de la hermandad.",Yd:"Establece un temporizador para la opci\u00f3n de retenci\u00f3n de oro en la subasta.",
Ud:"Establece un temporizador para verificar la lista de PVP en la arena para atacar.",Zd:"Establece un temporizador para verificar la lista de PVP en el circo para atacar.",qe:"Establece un temporizador para entrenar tus estad\u00edsticas.",ee:"Establece un temporizador para reiniciar los objetos caducados.",oe:"Establece un temporizador para almacenar los materiales de forja en el horreo.",Wd:"Establece un temporizador para verificar la subasta de gladiadores y mercenarios.",ge:"Establece un temporizador para buscar objetos en la subasta y la tienda.",
$d:"Establece el temporizador para enviar donaciones a la hermandad.",mc:"Oro Movido",Ub:"No vender objetos de la lista de fundici\u00f3n",Dd:"Automatizaci\u00f3n de la Tienda",Fd:"Configuraci\u00f3n de B\u00fasqueda de Objetos",Ed:"Utiliza esta herramienta para buscar objetos. Simplemente agrega los objetos a la lista, especifica la cantidad de tela y comienza la b\u00fasqueda.",Gd:"Telas a Usar:",Hd:"\u00bfCu\u00e1ntas telas usar?",Ma:"Ingresa el Nombre del Objeto",La:"Ingresa el Nivel del Objeto",
Jd:"Calidad del Objeto",Id:"Nombre del Objeto Aqu\u00ed",Kd:"Comenzar B\u00fasqueda",Ld:"Saltar y Continuar",Md:"Detener B\u00fasqueda",kc:"Ordenar el Mercado de la Hermandad por",Xc:"M\u00e1s Caros",Ob:"M\u00e1s Baratos",Cd:"Selecciona una Opci\u00f3n",Xb:"Pod\u015bwietl przedmioty z Podziemia",lc:"\u00bfCentrarse en la b\u00fasqueda",Dg:"\u00bfUsar Ruby si no hay tela",na:"Evita atacar a las mismas personas para no ser reportado. Ser reportado aumenta las posibilidades de ser baneado.",tf:"\u00bfDerretir verde?",
jd:"\u00bfNo aceptar misiones aleatorias si se han introducido filtros?",Ve:"Calidad m\u00e1xima del material a utilizar",Ne:"Habilitar la b\u00fasqueda de mercenarios",kg:"Haz clic en `Vender Todo Seleccionado` para vender todos los elementos. Aseg\u00farate de tener espacio vac\u00edo de 2x3 en tu primera (1) bolsa. Para recoger oro en masa, filtra el oro y usa `Seleccionar Seleccionados o Seleccionar Todo`.",sb:"\ud83d\udd25 : A\u00f1ade elemento a la lista de fundici\u00f3n.",Ua:"\ud83d\udd28 : A\u00f1ade elemento a la lista de subastas.",
nf:"Actualiza la tienda con tela cuando est\u00e9 llena (Deber\u00e1s vender de nuevo despu\u00e9s)",bf:"P\u00e1gina:",kf:"Detener",hf:"Vender Esta P\u00e1gina",ef:"Seleccionar Seleccionados",cf:"Seleccionar Todo",lf:"Configuraci\u00f3n de Empaquetado Autom\u00e1tico",jf:"Enviar Recursos",ff:"Vender Todo Seleccionado",Y:"Tipo de Objeto",pb:"Armas",mb:"Escudos",bb:"Armaduras",hb:"Cascos",gb:"Guantes",cb:"Botas",kb:"Anillos",ab:"Amuletos",eb:"Utilizables (Comida)",ob:"Mejoras",Ze:"Potenciadores",jb:"Recetas",
ib:"Mercenarios",nb:"Herramientas de Forja",lb:"Pergaminos",df:"Refuerzos",$e:"Objetos de Evento",fb:"Materiales de Forja",af:"Oro",D:"Todo",rg:"Calidad",qb:"Blanco",G:"Verde",F:"Azul",H:"Morado",Z:"Naranja",ja:"Rojo",gf:"Opciones de Venta",uf:"\u00bfIgnorar Combinaci\u00f3n de Prefijo/Sufijo?",Qe:"\u00bfCu\u00e1nta comida comprar/recoger?",Ie:"Normal",He:"Intermedio",Ge:"Dif\u00edcil",Xa:"Est\u00e1ndar",sg:"Reparar Correcci\u00f3n de Atascos",Nf:"Desactiva la entrada al Infierno si deseas desactivar la Mazmorra/Circo/Arena. Si entraste al Infierno manualmente, deber\u00e1s activar el Modo Infierno.",
Pb:"Wybierz kostium z Za\u015bwiat\u00f3w",De:"Nosi\u0107 kostium z Za\u015bwiat\u00f3w, gdy jest dost\u0119pny?",te:"Indica cu\u00e1ntas veces deseas entrenar las estad\u00edsticas y establece sus prioridades. El bot no entrenar\u00e1 a menos que se establezca una prioridad. Si hay una prioridad configurada pero no quedan m\u00e1s estad\u00edsticas por entrenar, el bot continuar\u00e1 con la estad\u00edstica seleccionada.",bg:"Quest",xg:"Fundir",zg:"Configuraci\u00f3n de Fundici\u00f3n",xf:"Objetos Fundidos",
Af:"Agrega Prefijos o Sufijos, una vez que los encuentre en los paquetes, se fundir\u00e1n autom\u00e1ticamente:",yg:"Objeto en Fundici\u00f3n:",Wa:"Haz clic en el objeto que deseas reparar. Este sistema reparar\u00e1 a tus dos personajes, el principal y el primer personaje de circo. Debes tener al menos 10000 de oro para que comience la reparaci\u00f3n. Si se queda atascado en un objeto, significa que no tienes material para arreglarlo. Tambi\u00e9n trata de hacer espacio en tu inventario. El bot iniciar\u00e1 la reparaci\u00f3n una vez que el objeto tenga un %0 de durabilidad.",
Xf:"Aplicar solo a Mercenarios",Zf:"La subasta solo pujar\u00e1 cuando el mercado est\u00e9 cerca del final.",Fe:"Aseg\u00farate de que la SEGUNDA PESTA\u00d1A DEL INVENTARIO est\u00e9 vac\u00eda y tenga 10K de oro. El bot encontrar\u00e1 y colocar\u00e1 el objeto en la segunda pesta\u00f1a y luego, la pr\u00f3xima vez que se actualice la p\u00e1gina, fundir\u00e1 el objeto. La fundici\u00f3n se revisar\u00e1 cada 5-10 minutos.",Te:"Curar",tg:"No hay suficiente oro para fundir. Oro requerido:",wg:"Saltando puja: El miembro del gremio ya ha pujado por el objeto ",
vg:"Saltando puja: Ya has pujado por el objeto ",advanced:"Avanzado",arena:"Arena",W:"Auto Ataque",Ta:"Evitar Ataque",U:"Agregar Jugador",V:"Agregar Nombre de Jugador (Same Server)",gg:"\u00bfDetener el bot si se queda sin comida?",circusTurma:"Circo Turma",Je:"Dificultad",dungeon:"Mazmorra",Ke:"Configuraci\u00f3n de Mazmorra",eventExpedition:"Expedici\u00f3n de Evento",expedition:"Expedici\u00f3n",Oe:"Configuraci\u00f3n de Expedici\u00f3n",pf:"Seleccionar Monstruo",ig:"M\u00e1s Alto",hg:"Coloca tus objetos de curaci\u00f3n en la primera p\u00e1gina de tu inventario",
Za:"En",Uf:"Almacenar Oro",Sd:"\u00bfAlmacenar Oro en Subasta?",Ad:"\u00bfUsar Ropa de Trabajo para renovar la Tienda?",Sf:"Seleccionar Objetos para Reiniciar",vd:"Reiniciar Objetos Expirados",Ga:"Nota: Al habilitar esta opci\u00f3n, el bot vender\u00e1 los objetos pr\u00f3ximos a expirar de los Paquetes al Mercado del Gremio y luego los cancelar\u00e1 para reiniciar el tiempo de vencimiento. Se requiere el Gremio. Aseg\u00farate de tener un espacio vac\u00edo de 3x3 en tus bolsas.",fd:"Pausar el bot aleatoriamente para funcionar como [Fase de Pruebas]:",
M:"Mantener Oro: El bot mantendr\u00e1 este oro en la bolsa:",Kc:"Oro M\u00e1ximo: El bot gastar\u00e1 cuando el oro sea mayor que",Tf:"El bot pujar\u00e1 en anillos y collares in\u00fatiles",ub:"Agregar Retraso Aleatorio",vb:"Puedes agregar un retraso al bot aqu\u00ed.",Fa:"Reparar",sf:"\u00bfFundir solo Azules?",wf:"\u00bfFundir solo P\u00farpuras?",vf:"\u00bfFundir solo Naranjas?",yf:"\u00bfFundir Todo en la 2da pesta\u00f1a?",zf:"Esto ignorar\u00e1 las selecciones de colores",pa:"Limpiar Historial",
Oa:"Fundir",Ab:"Search",Yc:"Subasta Autom\u00e1tica",Bb:"El uso excesivo de la Subasta podr\u00eda resultar en una prohibici\u00f3n. Se recomienda desactivar otras funciones de oferta para evitar posibles conflictos. Esta caracter\u00edstica ralentizar\u00e1 el bot.",zd:"Buscar en la Subasta de Gladiadores",Bd:"Buscar en la Subasta de Mercenarios",Jb:"\u00bfPujar por Comida?",Lc:"Puja M\u00e1xima",Kb:"Pujar si el estado es menor que",Lb:"Objetos Pujados",If:"Idioma de Subasta",Jf:"Seg\u00fan la actualizaci\u00f3n 2.9.4, establece el idioma nuevamente o REINICIA EL BOT. Aseg\u00farate de que todos sean correctos, de lo contrario, no pujar\u00e1.",
yb:"Puedes agregar objetos para buscar en el mercado y en la subasta. Tambi\u00e9n mostrar\u00e1 objetos p\u00farpuras en el mercado una vez que agregues un objeto a la lista. Si deseas habilitar la puja autom\u00e1tica, usa las opciones a continuaci\u00f3n",Gf:"\u00a1Usa la subasta con precauci\u00f3n!",Hf:"La puja autom\u00e1tica realiza demasiadas solicitudes al servidor y puede causar una prohibici\u00f3n si se usa todo el tiempo.",td:"\u00bfRenovar Puntos de Evento con Rub\u00edes?",Zb:"\u00bfHabilitar Aceite Autom\u00e1tico?",
Kf:"\u00bfObtener Aceites Sagrados Autom\u00e1ticamente?",Pf:"Velocidad de Verificaci\u00f3n de Misiones",ma:"\u00bfAtacar a Miembros del Gremio? :",ka:'Agregar autom\u00e1ticamente a las personas a la lista de "Ataque" cuando se roban m\u00e1s de X ORO.:',la:'Agregar autom\u00e1ticamente a las personas a la lista de "Evitar Ataque" cuando pierdas contra ellas.:',Ja:"Ataques en el Marcador",Ra:"Muy Largo",za:"Largo",Ca:"Medio",Na:"Corto",Sa:"Muy Corto",$b:"Entrar al Inframundo si HP >",od:"Velocidad de Verificaci\u00f3n de Misiones",
hd:'El valor predeterminado es "3x". Si el bot causa problemas con las misiones, cambia la velocidad de las misiones seg\u00fan la velocidad de tu servidor.',nc:"Selecci\u00f3n de Bolsa de Curaci\u00f3n",ac:'Si est\u00e1s renovando puntos manualmente, debes hacer clic en el bot\u00f3n de arriba "Actualizar expedici\u00f3n de evento si est\u00e1 atascada".',Mf:"Debes habilitar al menos una de las siguientes opciones: expedici\u00f3n, mazmorra, arena o circo para comenzar la Expedici\u00f3n de Evento.",
qd:"\u00a1Actualiza la Expedici\u00f3n de Evento si est\u00e1 atascada!",ra:"\u00bfCubrir a los Aliados?",Rd:"Deja todas las configuraciones desactivadas si deseas fundir usando paquetes que contienen los elementos de la lista. Sin embargo, a\u00fan puedes elegir colores.",Lf:"Personaje(Desactivado) / Mercenario(Activado)",Rf:"\u00bfReparar Ambos?",Vf:"Temporizadores",Timers:"Ingresa el n\u00famero de minutos para cada temporizador a continuaci\u00f3n o d\u00e9jalo en su valor predeterminado.",nd:"Ignorar Filtro de Misiones",
md:"Ingresa palabras clave para filtrar las misiones que no deseas tomar",va:"Ingresar Palabra Clave",N:"Agregar",sd:"Eliminar",Qb:"Limpiar",kd:"Aceptar Filtro de Misiones",ld:"Ingresa palabras clave para seleccionar qu\u00e9 misiones tomar. Usar esto ignorar\u00e1 los tipos de misiones",fa:"\u00bfSaltar Misiones Temporales?",Qf:"Misiones",Db:"Auto Traje",ye:"\u00bfUsar Traje?",Ib:"Batalla B\u00e1sica",Vb:"Batalla en Mazmorra",Eb:"Bot solo usar\u00e1 Dis Pater Normal y Medium si tus puntos de expedici\u00f3n/mazmorra son 0.",
pc:"Configuraci\u00f3n de Sanaci\u00f3n Infernal",xb:"\u00bfAtacar al Jefe cuando est\u00e9 disponible?",ya:"La opci\u00f3n de ataque a la Liga se desactivar\u00e1 despu\u00e9s de 5 intentos fallidos.",sc:"Aceites Sagrados",Uc:"Nombre del Objeto",O:"Nivel M\u00ednimo del Objeto",Vc:"Calidad M\u00ednima del Objeto",wb:"Aplicar/Restablecer Temporizador",uc:"Ignorar Combinaci\u00f3n de Prefijo/Sufijo",Ee:"S\u00ed",Zc:"No",aa:"Agregar Prefijo",ba:"Agregar Sufijo",Od:"Lista de Objetos a Ignorar al Fundir",
gd:"Prefijo",Td:"Sufijo",xd:"Restablecer Objetos Expirados",Pd:"\u00bfFundir al Azar desde los Paquetes?",Qd:"Pesta\u00f1a de Fundici\u00f3n",wa:"Extras",zb:"Subasta",Jc:"Mercado",Qa:"Temporizadores",me:"Fundici\u00f3n",le:"Fundici\u00f3n si no hay suficiente oro",ie:"Fundir si no hay objeto",ga:"Reparaci\u00f3n",ae:"Mantener Oro en el Mercado de Gremio",Xd:"Mantener Oro en la Subasta",pe:"Entrenamiento",de:"Restablecer Expirados",ne:"Almacenar en la Forja",Vd:"Comprobar Subasta",fe:"Buscar",B:"Habilitar",
Wc:"Oro M\u00ednimo",Ka:"Seleccionar Hora",sa:"Donar Oro al Gremio",Sb:"Donar\u00e1 cada 5 minutos. Puedes cambiar el intervalo desde la pesta\u00f1a de temporizadores",tc:"\u00bfCu\u00e1nto deseas donar?",Tb:"Donar cuando tengas m\u00e1s de >",Ec:"Menos de <",ud:"Restablecer Objetos Expirados y Otras Configuraciones",wd:"Restablecer en:",Of:"Mant\u00e9n presionada la tecla Ctrl (Cmd en Mac) para seleccionar varios objetos",vc:"Importar/Exportar Configuraciones",ec:"Exportar Configuraciones",wc:"Importar Configuraciones",
Nc:"Mensaje a Todos los Jugadores",Oc:"[Requiere Clave Ultra Premium, mensaje en Discord para obtenerla.]",Pc:"Ingresar mensaje para enviar",Rb:"Para scripts personalizados, cont\u00e1ctanos en Discord",Rc:"Enviar",Sc:"Mostrar Jugadores",Qc:"Seleccionar Todos",Tc:"Deseleccionar Todos",Dc:"Aseg\u00farate de que tu inventario tenga suficiente espacio. El tiempo de reutilizaci\u00f3n es de 2 minutos.",ua:"Habilitar Ataque en el Marcador:",Ha:"Seleccionar Rango para Atacar",Ia:"El bot atacar\u00e1 aleatoriamente desde la lista del marcador.",
xa:"Ataque de Liga",ta:"Habilitar Ataque de Liga:",Da:"Ataque Aleatorio",Ea:"Atacar desde el m\u00e1s bajo al m\u00e1s alto",Ff:"El bot evitar\u00e1 atacar a los miembros del gremio por defecto.",cc:"Ubicaci\u00f3n de Expedici\u00f3n:",Cb:"\u00bfRecoger Bonos Autom\u00e1ticamente?",Nd:"\u00bfSaltar al Jefe?",Wb:"Ubicaci\u00f3n de Mazmorra:",yd:"\u00bfReiniciar si pierdes?",qc:"Configuraci\u00f3n de Inframundo",rc:"Configura tus ajustes de porcentaje de curaci\u00f3n desde la pesta\u00f1a de curaci\u00f3n y aseg\u00farate de que est\u00e9 activada. Si ingresar al inframundo te desconecta, ve al lobby y activa la casilla de inicio de sesi\u00f3n autom\u00e1tico.",
oc:"Dificultad del Inframundo",Fb:"Entrar Autom\u00e1ticamente al Inframundo: / Inframundo Mode",ze:"\u00bfUsar Movilizaci\u00f3n si los puntos = 0",Ce:"\u00bfUsar Rub\u00edes?",bc:"\u00bfSalir del inframundo si no hay puntos?",ue:"El bot intentar\u00e1 usar villa medici primero, si no la tienes, usar\u00e1 poci\u00f3n de curaci\u00f3n. No olvides activar el interruptor de Curar.",ve:"El ingreso autom\u00e1tico al inframundo deshabilitar\u00e1 la mazmorra/arena/circo al ingresar al inframundo.",Wf:"Ajustes de Curaci\u00f3n del Inframundo",
Be:"\u00bfUsar Villa Medici?",Ae:"\u00bfUsar Poci\u00f3n de Curaci\u00f3n?",Fc:"INFO: El bot buscar\u00e1 objetos en el mercado cada ciertos minutos, lo que puede detener los ataques durante la b\u00fasqueda.",Yb:"Habilitar B\u00fasqueda en el Mercado:",Gc:"Intervalo de B\u00fasqueda en el Mercado en Minutos:",Hc:"Se sugieren 10 minutos.",zc:"Ajustes de Objetos:",xc:"Nombre del Objeto Incluye",Ic:"Precio M\u00e1ximo",Ac:"Tipo de Objeto",yc:"Rareza del Objeto",Nb:"\u00bfComprar con V\u00ednculo Espiritual?",
Cc:"Objetos para Comprar",Bc:"Intentar comprar objetos con paquetes si alguno coincide con el precio m\u00e1ximo ingresado:",Mb:"Objetos Comprados:",Re:"Porcentaje de Curaci\u00f3n",Df:"\u00bfComprar Comida en la Tienda?",Ef:"\u00bfUsar Curaci\u00f3n de Paquete?",Cf:"\u00bfUsar Cervisia?",lg:"\u00daltima Vez Usado",location:"Ubicaci\u00f3n",Pa:"Fuerza",da:"Destreza",ca:"Agilidad",qa:"Constituci\u00f3n",oa:"Carisma",ea:"Inteligencia",re:"Ajustes de Entrenamiento",se:"Selecciona los atributos que deseas entrenar. Se entrenar\u00e1 una vez que tengas suficiente oro.",
$a:"Siguiente acci\u00f3n",Xe:"No",Ye:"Normal",pg:"Oponente",qg:"Nivel del Oponente",mf:"Misiones",random:"Aleatorio",ug:"Ajustes",Ag:"Pronto...",type:"Haz clic en los \u00edconos para activar los tipos de misiones.",Fg:"S\u00ed",A:"Subasta/B\u00fasqueda",rb:"Agregar objetos",Bf:"Almacenar Recursos Forjados autom\u00e1ticamente",Bg:"Enviar",jg:"Intervalo : ",cg:"Habilitar Puja Autom\u00e1tica",dg:"No pujar si el miembro del gremio ya ha pujado",Cg:"Tutorial",Va:"Selecciona entre los botones de arriba si deseas enfrentar al oponente de nivel m\u00e1s bajo en la arena o al oponente de nivel m\u00e1s alto. M\u00e1s usuarios ralentizar\u00e1n el bot.",
Yf:"Para empezar, agrega un objeto a la lista (p. ej., `Lucius`). Una vez agregado, la herramienta buscar\u00e1 el objeto y mostrar\u00e1 los resultados de la b\u00fasqueda en el lado izquierdo de la pantalla. Tambi\u00e9n se buscar\u00e1 para fines de subasta autom\u00e1tica. Si habilitas la puja autom\u00e1tica, la herramienta buscar\u00e1 el objeto a intervalos regulares seg\u00fan el n\u00famero que ingreses en el cuadro de intervalo. Si la herramienta encuentra el objeto y tienes suficiente dinero, pujar\u00e1 autom\u00e1ticamente por ti. *Nota* para buscar objetos \u00fanicos en las tiendas, debes agregar al menos 1 objeto aleatorio en la lista de b\u00fasqueda.",
eg:"El n\u00famero de criatura se puede seleccionar desde los botones de arriba. El n\u00famero 1 representa la criatura m\u00e1s a la izquierda. Aseg\u00farate de seleccionar la ubicaci\u00f3n correcta, de lo contrario, el bot podr\u00eda detenerse.",Le:"Selecciona la dificultad de la mazmorra de arriba. Aseg\u00farate de seleccionar la ubicaci\u00f3n correcta, de lo contrario, el bot podr\u00eda detenerse.",Se:"Ajustes de Curaci\u00f3n",Me:"Almacena el oro excedente en el Gremio comprando objetos del mercado del gremio. -> M\u00edn. Oro",
mg:"Mover Todo",og:"Mover Seleccionados",$f:"Curaci\u00f3n Autom\u00e1tica",ag:"Porcentaje de Curaci\u00f3n Autom\u00e1tica",Eg:"Ruby",cd:"Ajustes Generales",qf:"Vender Todo",rf:"Vender Seleccionados",T:"Armas",R:"Escudos",J:"Armadura de Pecho",L:"Cascos",K:"Guantes",S:"Zapatos",P:"Anillos",I:"Amuletos",xe:"Usables",we:"Mejoras",pd:"Recetas",Mc:"Pergamino de Mercenario",rd:"Refuerzos"},lg={ic:"Hell Farm [Manual, Beta]",hc:"Farm Location",jc:"Attention\u00a0: activez cette fonctionnalit\u00e9 apr\u00e8s avoir d\u00e9verrouill\u00e9 la cr\u00e9ature que vous souhaitez attaquer, elle n'attaquera pas automatiquement pour d\u00e9bloquer le monstre.",
fc:"Farm Enemy",Gb:"Connexion Automatique",Hb:"Vous devez autoriser les pop-ups depuis l'\u00e9cran du lobby de GameForge. Consultez la documentation pour savoir comment faire.",dd:"Mettre le Bot en Pause",ed:"Mettre le Bot en pause (Minutes)",dc:"Date d'Expiration",ad:"Acheter uniquement de la nourriture ?",bd:"Si vous activez cette option, le bot ignorera vos s\u00e9lections et ach\u00e8tera automatiquement de la nourriture sans rien saisir.",Ba:"Montant total maximal d'or \u00e0 d\u00e9penser",
Aa:"Montant maximal d'or par aliment \u00e0 d\u00e9penser",$c:"Le bot v\u00e9rifiera les huiles toutes les 60 minutes",ke:"D\u00e9finit une minuterie pour v\u00e9rifier les temps de fusion.",he:"D\u00e9finit une minuterie pour v\u00e9rifier la fusion lorsque vous n'avez pas d'or.",je:"D\u00e9finit une minuterie pour v\u00e9rifier la fusion si vous n'avez pas l'objet disponible.",ce:"D\u00e9finit une minuterie pour r\u00e9parer et v\u00e9rifier vos objets.",be:"D\u00e9finit une minuterie pour v\u00e9rifier l'or retenu sur le march\u00e9 de la guilde.",
Yd:"D\u00e9finit une minuterie pour l'option de retenue d'or aux ench\u00e8res.",Ud:"D\u00e9finit une minuterie pour v\u00e9rifier la liste PvP dans l'ar\u00e8ne pour attaquer.",Zd:"D\u00e9finit une minuterie pour v\u00e9rifier la liste PvP dans le cirque pour attaquer.",qe:"D\u00e9finit une minuterie pour entra\u00eener vos statistiques.",ee:"D\u00e9finit une minuterie pour r\u00e9initialiser les objets expir\u00e9s.",oe:"D\u00e9finit une minuterie pour stocker les mat\u00e9riaux de forge dans l'horreum.",
Wd:"D\u00e9finit une minuterie pour v\u00e9rifier les ench\u00e8res des gladiateurs et des mercenaires.",ge:"D\u00e9finit une minuterie pour rechercher des objets aux ench\u00e8res et en boutique.",$d:"D\u00e9finit la minuterie d'envoi de dons \u00e0 la guilde.",mc:"Or D\u00e9plac\u00e9",Ub:"Ne pas vendre les objets de la liste de fusion",Dd:"Automatisation de la Boutique",Fd:"Param\u00e8tres de Recherche d'Objets",Ed:"Utilisez cet outil pour rechercher des objets. Ajoutez simplement les objets \u00e0 la liste, sp\u00e9cifiez la quantit\u00e9 de tissu et lancez la recherche.",
Gd:"Tissus \u00e0 Utiliser :",Hd:"Combien de tissus utiliser ?",Ma:"Entrez le Nom de l'Objet",La:"Entrez le Niveau de l'Objet",Jd:"Qualit\u00e9 de l'Objet",Id:"Nom de l'Objet Ici",Kd:"Commencer la Recherche",Ld:"Sauter et Continuer",Md:"Arr\u00eater la Recherche",kc:"Trier le March\u00e9 de la Guilde par",Xc:"Le Plus Cher",Ob:"Le Moins Cher",Cd:"S\u00e9lectionnez une Option",Xb:"Mettre en surbrillance les objets du monde souterrain",lc:"Concentrez-vous sur la qu\u00eate\u00a0?",Dg:"Utiliser Ruby s'il n'y a pas de tissu ?",
na:"\u00c9vitez d'attaquer les m\u00eames personnes pour ne pas \u00eatre signal\u00e9. \u00catre signal\u00e9 augmente les chances d'\u00eatre banni.",tf:"Fondre Green ?",jd:"Ne pas accepter les qu\u00eates al\u00e9atoires si des filtres sont entr\u00e9s ?",Ve:"Qualit\u00e9 maximale des mat\u00e9riaux \u00e0 utiliser",Ne:"Activer la recherche de mercenaires",kg:"Cliquez sur `Vendre Tout S\u00e9lectionn\u00e9` pour vendre tous les objets. Assurez-vous d`avoir de l`espace vide de 2x3 dans votre premi\u00e8re (1) sac. Pour collecter de l`or en masse, filtrez l`or et utilisez `S\u00e9lectionner S\u00e9lectionn\u00e9s ou Tout S\u00e9lectionner`.",
sb:"\ud83d\udd25 : Ajoute l`objet \u00e0 la liste de fusion.",Ua:"\ud83d\udd28 : Ajoute l`objet \u00e0 la liste des ench\u00e8res.",nf:"Actualisez la boutique avec du tissu lorsqu`elle est pleine (Vous devrez vendre \u00e0 nouveau apr\u00e8s)",bf:"Page:",kf:"Arr\u00eater",hf:"Vendre Cette Page",ef:"S\u00e9lectionner S\u00e9lectionn\u00e9s",cf:"Tout S\u00e9lectionner",lf:"Param\u00e8tres d`Emballage Automatique",jf:"Envoyer les Ressources",ff:"Vendre Tout S\u00e9lectionn\u00e9",Y:"Type d`Objet",pb:"Armes",
mb:"Boucliers",bb:"Armures",hb:"Casques",gb:"Gants",cb:"Bottes",kb:"Anneaux",ab:"Amulettes",eb:"Utilisables (Nourriture)",ob:"Am\u00e9liorations",Ze:"Boosts",jb:"Recettes",ib:"Mercenaires",nb:"Outils de Forge",lb:"Parchemins",df:"Renforcements",$e:"Objets d`\u00c9v\u00e9nement",fb:"Mat\u00e9riaux de Forge",af:"Or",D:"Tout",rg:"Qualit\u00e9",qb:"Blanc",G:"Vert",F:"Bleu",H:"Violet",Z:"Orange",ja:"Rouge",gf:"Options de Vente",uf:"Ignorer la Combinaison Pr\u00e9fixe/Suffixe ?",Qe:"Combien de nourriture acheter/cueillir ?",
Ie:"Normal",He:"Interm\u00e9diaire",Ge:"Difficile",Xa:"Standard",sg:"R\u00e9paration Correction d`Enlisement",Nf:"D\u00e9sactivez l`Entr\u00e9e en Enfer si vous souhaitez d\u00e9sactiver le Donjon/Cirque/Arenas. Si vous \u00eates entr\u00e9 en Enfer manuellement, vous devrez activer le Mode Enfer.",Pb:"Choisir le costume des Enfers",De:"Porter le costume des Enfers quand il est disponible ?",te:"Tutoriel dentra\u00eenement : Indiquez combien de fois vous souhaitez entra\u00eener les statistiques et d\u00e9finissez leurs priorit\u00e9s. Le bot nentra\u00eenera pas sans quune priorit\u00e9 soit d\u00e9finie. Si une priorit\u00e9 est configur\u00e9e mais quil ne reste plus de statistiques \u00e0 entra\u00eener, le bot continuera avec la statistique s\u00e9lectionn\u00e9e.",
bg:"Quest",Sd:"Conserver l'Or aux Ench\u00e8res ?",fd:"Mettre en Pause le Bot Al\u00e9atoirement pour travailler comme [Phase de Test] :",vd:"R\u00e9initialiser les Objets Expir\u00e9s",Ga:"Remarque : En activant cette option, le bot vendra les objets expir\u00e9s \u00e0 venir des paquets sur le march\u00e9 de la guilde, puis annulera pour r\u00e9initialiser le temps d'expiration. La guilde est requise. Assurez-vous d'avoir un espace vide de 3x3 dans vos sacs.",M:"Conserver l'Or : Le bot conservera cet or dans le sac :",
Kc:"Or Maximum : Le bot d\u00e9pensera lorsque l'or sera sup\u00e9rieur \u00e0",xg:"Fonderie",zg:"Fonderie Param\u00e8tres",xf:"Fonderie Liste",Af:"Ajouter un pr\u00e9fixe ou un suffixe, une fois qu`il l`aura trouv\u00e9 dans les paquets, il le fondera automatiquement:",yg:"Fusion d'item:",Wa:"Cliquez sur l`\u00e9l\u00e9ment que vous souhaitez r\u00e9parer. Essayez de faire de la place dans votre inventaire",Xf:"S`applique-t-il uniquement aux mercenaires ?",Zf:"L'ench\u00e8re ach\u00e8te que lorsque le march\u00e9 est proche de la fin.",
Fe:"Assurez-vous que le SECOND ONGLET D'INVENTAIRE est vide. Le bot trouvera et mettra l'objet dans le deuxi\u00e8me onglet puis la prochaine fois que la page est actualis\u00e9e, il fondra l'objet.",Te:"Gu\u00e9risseur",tg:"Pas assez d'or pour fondre. Or requis:",wg:"Ench\u00e8re ignor\u00e9e: un membre de la guilde a d\u00e9j\u00e0 mis\u00e9 pour l'objet ",vg:"Ench\u00e8re ignor\u00e9e: Vous avez d\u00e9j\u00e0 mis\u00e9 pour cet objet ",advanced:"Avanc\u00e9e",arena:"Ar\u00e8ne",W:"Attaque automatique",
Ta:"Eviter l'attaque",U:"Ajouter un joueur",V:"Entrez le nom du joueur (Same Server)",gg:"Arr\u00eater le bot en cas de manque de nourriture?",circusTurma:"Circus Turma",Je:"Difficult\u00e9",dungeon:"Donjon",Ke:"Param\u00e8tres du donjon",eventExpedition:"Event Exp\u00e9dition",expedition:"Expedition",Oe:"Param\u00e8tres d'expedition",pf:"S\u00e9lectionner un monstre",ig:"Plus haut",hg:"Mettez vos objets de soin dans la premi\u00e8re page de votre inventaire",Za:"Dans",Ad:"Utiliser les v\u00eatements de travail pour renouveler la boutique?",
Re:"Pourcentage de gu\u00e9rison",Df:"Acheter de la nourriture dans la boutique?",Ef:"Utiliser la gu\u00e9rison \u00e0 partir du paquet?",Cf:"Utiliser Cervisia?",lg:"Dernier utilis\u00e9",location:"Emplacement",Pa:"Force",da:"Adresse",ca:"Agilit\u00e9",qa:"Constitution",oa:"Charisme",ea:"Intelligence",re:"Param\u00e8tres d'entrainement",se:"S\u00e9lectionnez les states que vous souhaitez entra\u00eener. L'entra\u00eenement commencera une fois que vous aurez assez d'or.",$a:"Action suivante",Xe:"Non",
Ye:"Normal",pg:"Adversaire",qg:"Niveau de l'adversaire",mf:"Qu\u00eates",random:"Al\u00e9atoire",ug:"Param\u00e8tres",Ag:"Bient\u00f4t...",type:"Cliquez sur les ic\u00f4nes pour activer les types de qu\u00eate.",Fg:"Oui",A:"Ench\u00e8re",rb:"Ajouter des objets",Bf:"Stocker automatiquement les ressources de la forge",Bg:"Soumettre",jg:"Intervalle : ",cg:"Activer l'ench\u00e8re automatique",dg:"Ne pas ench\u00e9rir si un membre de la guilde a d\u00e9j\u00e0 ench\u00e9ri",Cg:"Tutoriel",Va:"S\u00e9lectionnez \u00e0 partir des boutons ci-dessus pour choisir si vous souhaitez affronter l'adversaire le plus faible de l'ar\u00e8ne ou l'adversaire de niveau le plus \u00e9lev\u00e9.",
Yf:"Pour commencer, ajoutez un article \u00e0 la liste (par exemple, `Lucius`). Une fois ajout\u00e9, l'outil recherchera l'article et affichera les r\u00e9sultats de la recherche sur le c\u00f4t\u00e9 gauche de l'\u00e9cran. Il sera \u00e9galement recherch\u00e9 \u00e0 des fins d'ench\u00e8re automatique. Si vous activez l'ench\u00e8re automatique, l'outil recherchera l'article \u00e0 des intervalles r\u00e9guliers en fonction du nombre que vous mettez dans la case d'intervalle. Si l'outil trouve l'article et que vous avez assez d'argent, il ench\u00e9rira automatiquement pour vous. *Note* pour rechercher des articles uniques dans les boutiques, vous devez ajouter au moins 1 article al\u00e9atoire \u00e0 la liste de recherche.",
eg:"Le num\u00e9ro de la cr\u00e9ature peut \u00eatre s\u00e9lectionn\u00e9 \u00e0 partir des boutons ci-dessus. Le num\u00e9ro 1 repr\u00e9sente la cr\u00e9ature la plus \u00e0 gauche. Assurez-vous de s\u00e9lectionner le bon emplacement, sinon le bot pourrait se mettre en pause.",Le:"S\u00e9lectionnez la difficult\u00e9 du donjon depuis le dessus. Assurez-vous de s\u00e9lectionner le bon emplacement, sinon le bot pourrait se mettre en pause.",Se:"Param\u00e8tres de gu\u00e9rison",Me:"Stocker l'or exc\u00e9dentaire dans la guilde en achetant des objets du march\u00e9 de la guilde. -> Or Min.",
mg:"D\u00e9placer tout",og:"D\u00e9placer les s\u00e9lectionn\u00e9s",$f:"Auto gu\u00e9rison",ag:"Pourcentage de gu\u00e9rison automatique",Eg:"Ruby",cd:"Param\u00e8tres g\u00e9n\u00e9raux",qf:"Tout vendre",rf:"Vendre s\u00e9lectionn\u00e9s",T:"Armes",R:"Boucliers",J:"Armure de poitrine",L:"Casques",K:"Gants",S:"Chaussures",P:"Anneaux",I:"Amulettes",xe:"Utilisable",we:"Am\u00e9liorations",pd:"Nourriture",Mc:"Parchemin de mercenaire",rd:"Renforts",ub:"Ajouter un D\u00e9lai Al\u00e9atoire",vb:"Vous pouvez ajouter un d\u00e9lai al\u00e9atoire au bot ici.",
Fa:"R\u00e9parer",sf:"Fonder uniquement les Bleus?",wf:"Fonder uniquement les Violets?",vf:"Fonder uniquement les Oranges?",yf:"Tout Fondre dans le 2e Onglet?",zf:"Cela ignorera les s\u00e9lections de couleur",pa:"Effacer l'Historique",Oa:"Fondre",Ab:"Search",Yc:"Ench\u00e8re Automatique",Bb:"Une utilisation excessive des ench\u00e8res peut entra\u00eener un bannissement. Il est recommand\u00e9 de d\u00e9sactiver les autres fonctionnalit\u00e9s d ench\u00e8res pour \u00e9viter les conflits potentiels. Cette fonctionnalit\u00e9 ralentira le bot..",
zd:"Rechercher dans l'Ench\u00e8re des Gladiateurs",Bd:"Rechercher dans l'Ench\u00e8re des Mercenaires",Jb:"Miser de la Nourriture?",Lc:"Mise Maximale",Kb:"Miser si le statut est inf\u00e9rieur \u00e0",Lb:"Objets Mis\u00e9s",If:"Langue de l'Ench\u00e8re",Jf:"\u00c0 partir de la mise \u00e0 jour 2.9.4, veuillez r\u00e9initialiser la langue ou R\u00c9INITIALISER LE BOT. Assurez-vous que toutes les informations sont correctes, sinon les ench\u00e8res ne fonctionneront pas.",yb:"Vous pouvez ajouter des objets pour les rechercher dans le march\u00e9 et les ench\u00e8res. Il montrera \u00e9galement les objets violets dans le march\u00e9 une fois que vous aurez ajout\u00e9 un objet \u00e0 la liste. Si vous souhaitez activer les ench\u00e8res automatiques, utilisez les options ci-dessous.",
Gf:"Utilisez les ench\u00e8res avec prudence!",Hf:"Les ench\u00e8res automatiques font trop de requ\u00eates au serveur et peuvent entra\u00eener un bannissement si elles sont utilis\u00e9es en permanence!",td:"Renouveler les Points d'\u00c9v\u00e9nement avec des Rubis?",Zb:"Activer l'Huile Automatique",Kf:"R\u00e9cup\u00e9rer Automatiquement les Huiles Sacr\u00e9es",Pf:"Vitesse de V\u00e9rification des Qu\u00eates",ma:"Attaquer les Membres du Gremio ? :",ka:'Ajouter automatiquement les personnes \u00e0 la liste "Attaque" lorsque plus de X OR est vol\u00e9.:',
la:'Ajouter automatiquement les personnes \u00e0 la liste "\u00c9viter l\'Attaque" lorsque vous perdez contre elles.:',Ja:"Attaques au Tableau des Scores",Ra:"Tr\u00e8s Long",za:"Long",Ca:"Moyen",Na:"Court",Sa:"Tr\u00e8s Court",$b:"Entrer dans le Monde Souterrain si HP >",od:"Vitesse de V\u00e9rification des Qu\u00eates",hd:'Par d\u00e9faut, c\'est "3x". Si le bot pose des probl\u00e8mes avec les qu\u00eates, changez la vitesse des qu\u00eates en fonction de la vitesse de votre serveur.',nc:"S\u00e9lection du Sac de Soins",
ac:"Si vous renouvelez manuellement les points, vous devez cliquer sur le bouton ci-dessus \"Actualiser l'exp\u00e9dition d'\u00e9v\u00e9nement si bloqu\u00e9e !",Mf:"Vous devez activer au moins l'une des options suivantes : exp\u00e9dition, donjon, ar\u00e8ne ou cirque pour commencer l'exp\u00e9dition d'\u00e9v\u00e9nement.",qd:"Actualisez l'exp\u00e9dition d'\u00e9v\u00e9nement en cas de blocage !",ra:"Prot\u00e9ger les Alli\u00e9s ?",Rd:"Laissez tous les param\u00e8tres d\u00e9sactiv\u00e9s si vous souhaitez fondre en utilisant les paquets contenant les objets de la liste. Cependant, vous pouvez toujours choisir les couleurs.",
Lf:"Personnage(D\u00e9sactiv\u00e9) / Mercenaire(Activ\u00e9)",Rf:"R\u00e9parer les Deux ?",Vf:"Minuteries",Timers:"Entrez le nombre de minutes pour chaque minuteur ci-dessous ou laissez-le par d\u00e9faut.",ua:"Activer l'Attaque au Tableau des Scores:",Ha:"S\u00e9lectionner la Fourchette pour Attaquer",Ia:"Le bot attaquera al\u00e9atoirement depuis la liste du tableau des scores.",xa:"Attaque de Ligue",ta:"Activer l'Attaque de Ligue:",Da:"Attaquer Al\u00e9atoirement",Ea:"Attaquer du plus bas au plus haut",
Ff:"Le bot \u00e9vitera par d\u00e9faut d'attaquer les membres du gremio.",cc:"Lieu d'Exp\u00e9dition:",Cb:"Collecter Automatiquement les Bonus:",Nd:"Passer le Boss",Wb:"Lieu de Donjon:",yd:"R\u00e9initialiser en cas de perte?",qc:"Param\u00e8tres de l'Enfer",rc:"Configurez vos param\u00e8tres de pourcentage de gu\u00e9rison depuis l'onglet Gu\u00e9rison, et assurez-vous que l'interrupteur Gu\u00e9rison est activ\u00e9. Si l'entr\u00e9e dans le monde souterrain vous d\u00e9connecte, allez au lobby et activez la case \u00e0 cocher Connexion Automatique.",
oc:"Difficult\u00e9 de l'Enfer",Fb:"Entrer Automatiquement dans l'Enfer: / Enfer Mode",ze:"Utiliser Mobilisation si les points = 0",Ce:"Utiliser les Rubis?",bc:"Sortir du monde souterrain s'il n'y a plus de points?",ue:"Le bot essaiera d'abord d'utiliser Villa Medici, si vous ne l'avez pas, il utilisera la potion de gu\u00e9rison. N'oubliez pas d'activer l'interrupteur de Gu\u00e9rison.",ve:"L'entr\u00e9e automatique dans le monde souterrain d\u00e9sactivera le donjon/l'ar\u00e8ne/le cirque lors de l'entr\u00e9e dans le monde souterrain.",
Wf:"Param\u00e8tres de Gu\u00e9rison du Monde Souterrain",Be:"Utiliser Villa Medici?",Ae:"Utiliser la Potion de Gu\u00e9rison?",Fc:"INFO: Le bot recherchera les objets sur le march\u00e9 toutes les minutes s\u00e9lectionn\u00e9es, ce qui peut interrompre les attaques pendant la recherche.",Yb:"Activer la Recherche sur le March\u00e9:",Gc:"Intervalle de Recherche sur le March\u00e9 en Minutes:",Hc:"Sugg\u00e9r\u00e9: 10 minutes.",zc:"Param\u00e8tres de l'Objet:",xc:"Le Nom de l'Objet Inclut",Ic:"Prix Max",
Ac:"Type d'Objet",yc:"Raret\u00e9 de l'Objet",Nb:"Acheter avec Lien d'\u00c2me?",Cc:"Objets \u00e0 Acheter",Bc:"Tentative d'achat d'objets avec des packs si l'un d'eux correspond au prix maximum indiqu\u00e9.:",Mb:"Objets Achet\u00e9s:",nd:"Ignorer le Filtre de Qu\u00eates",md:"Saisissez des mots-cl\u00e9s pour filtrer les qu\u00eates que vous ne souhaitez pas accepter",va:"Saisir un Mot-cl\u00e9",N:"Ajouter",sd:"Supprimer",Qb:"Effacer",kd:"Accepter le Filtre de Qu\u00eates",ld:"Saisissez des mots-cl\u00e9s pour choisir les qu\u00eates \u00e0 accepter. Cela ignorera les types de qu\u00eates",
fa:"Ignorer les Qu\u00eates Temporelles ?",Qf:"Qu\u00eates",Db:"Costume Automatique",ye:"Utiliser le Costume ?",Ib:"Combat de Base",Vb:"Combat en Donjon",Eb:"Le bot ne portera Dis Pater Normal et Medium que si vos points d'exp\u00e9dition/donjon sont de 0.",pc:"Param\u00e8tres de Gu\u00e9rison en Enfer",xb:"Attaquer le Boss quand disponible ?",ya:"L'attaque en Ligue se d\u00e9sactivera apr\u00e8s 5 attaques infructueuses.",sc:"Huiles Sacr\u00e9es",Uc:"Nom de l'Objet",O:"Niveau Minimum de l'Objet",
Vc:"Qualit\u00e9 Minimum de l'Objet",wb:"Appliquer/R\u00e9initialiser la Minuterie",uc:"Ignorer la Combinaison de Pr\u00e9fixe/Suffixe",Ee:"Oui",Zc:"Non",aa:"Ajouter un Pr\u00e9fixe",ba:"Ajouter un Suffixe",Od:"Liste des Objets \u00e0 Ignorer pour la Fusion",gd:"Pr\u00e9fixe",Td:"Suffixe",xd:"R\u00e9initialiser les Objets Expir\u00e9s",Pd:"Fusionner au Hasard depuis les Paquets ?",Qd:"Onglet Fusion",wa:"Extras",zb:"Ench\u00e8res",Jc:"March\u00e9",Qa:"Minuteries",me:"Fusion",le:"Fusionner s'il n'y a pas assez d'or",
ie:"Fusionner s'il n'y a pas d'objet",ga:"R\u00e9paration",ae:"Garder de l'Or sur le March\u00e9 de Guilde",Xd:"Garder de l'Or aux Ench\u00e8res",pe:"Entra\u00eenement",de:"R\u00e9initialiser les Expir\u00e9s",ne:"Stockage \u00e0 la Forge",Vd:"V\u00e9rification des Ench\u00e8res",fe:"Recherche",B:"Activer",Wc:"Or Minimum",Ka:"S\u00e9lectionner une Heure",sa:"Donner de l'Or \u00e0 la Guilde",Sb:"Il donnera toutes les 5 minutes. Vous pouvez changer l'intervalle depuis l'onglet des minuteries",tc:"Combien souhaitez-vous donner ?",
Tb:"Donner lorsque vous avez plus de >",Ec:"Moins de <",ud:"R\u00e9initialiser les Objets Expir\u00e9s et les Autres Param\u00e8tres",wd:"R\u00e9initialiser dans :",Of:"Maintenez Ctrl (Cmd sur Mac) enfonc\u00e9 pour s\u00e9lectionner plusieurs objets",vc:"Import/Export des Param\u00e8tres",ec:"Exporter les Param\u00e8tres",wc:"Importer les Param\u00e8tres",Nc:"Message \u00e0 Tous les Joueurs",Oc:"[N\u00e9cessite une Cl\u00e9 Ultra Premium, message sur Discord pour l'obtenir.]",Pc:"Saisir le message \u00e0 envoyer",
Rb:"Pour des scripts personnalis\u00e9s, contactez-nous sur Discord",Rc:"Envoyer",Sc:"Afficher les Joueurs",Qc:"Tout S\u00e9lectionner",Tc:"Tout D\u00e9s\u00e9lectionner",Dc:"Assurez-vous que votre inventaire ait suffisamment d'espace. Le temps de recharge est de 2 minutes."},mg={ic:"Hell Farm [Manual, Beta]",hc:"Farm Location",jc:"Figyelem: Kapcsolja be ezt a funkci\u00f3t a t\u00e1madni k\u00edv\u00e1nt l\u00e9ny felold\u00e1sa ut\u00e1n, nem fog automatikusan t\u00e1madni, hogy feloldja a sz\u00f6rnyet.",
fc:"Farm Enemy",Gb:"Automatikus Bejelentkez\u00e9s",Hb:"Enged\u00e9lyezned kell a felugr\u00f3 ablakokat a GameForge el\u0151csarnok k\u00e9perny\u0151j\u00e9r\u0151l. N\u00e9zd meg a dokument\u00e1ci\u00f3t, hogy hogyan tedd meg.",dd:"Bot Sz\u00fcneteltet\u00e9se",ed:"Bot sz\u00fcneteltet\u00e9se ennyi id\u0151re: (Perc)",dc:"Lej\u00e1rati D\u00e1tum",ad:"Csak \u00e9telt v\u00e1s\u00e1rolj?",bd:"Ha ezt enged\u00e9lyezed, a bot figyelmen k\u00edv\u00fcl hagyja a kiv\u00e1laszt\u00e1saidat, \u00e9s automatikusan v\u00e1s\u00e1rol \u00e9telt an\u00e9lk\u00fcl, hogy b\u00e1rmit be\u00edrn\u00e1l.",
Ba:"Maxim\u00e1lis \u00f6sszes arany kiad\u00e1s",Aa:"Maxim\u00e1lis arany \u00e9telenk\u00e9nti kiad\u00e1s",$c:"A bot 60 percenk\u00e9nt ellen\u0151rzi az olajokat",ke:"Be\u00e1ll\u00edt egy id\u0151z\u00edt\u0151t a olvaszt\u00e1si id\u0151k ellen\u0151rz\u00e9s\u00e9hez.",he:"Be\u00e1ll\u00edt egy id\u0151z\u00edt\u0151t az olvaszt\u00e1s ellen\u0151rz\u00e9s\u00e9hez, ha nincs aranyad.",je:"Be\u00e1ll\u00edt egy id\u0151z\u00edt\u0151t az olvaszt\u00e1s ellen\u0151rz\u00e9s\u00e9hez, ha nincs el\u00e9rhet\u0151 t\u00e1rgyad.",
ce:"Be\u00e1ll\u00edt egy id\u0151z\u00edt\u0151t a t\u00e1rgyak jav\u00edt\u00e1s\u00e1hoz \u00e9s ellen\u0151rz\u00e9s\u00e9hez.",be:"Be\u00e1ll\u00edt egy id\u0151z\u00edt\u0151t a guild piac\u00e1nak arany\u00e1nak ellen\u0151rz\u00e9s\u00e9hez.",Yd:"Be\u00e1ll\u00edt egy id\u0151z\u00edt\u0151t az aukci\u00f3 arany tart\u00e1si lehet\u0151s\u00e9g\u00e9hez.",Ud:"Be\u00e1ll\u00edt egy id\u0151z\u00edt\u0151t az ar\u00e9na PvP lista ellen\u0151rz\u00e9s\u00e9hez t\u00e1mad\u00e1s c\u00e9lj\u00e1b\u00f3l.",
Zd:"Be\u00e1ll\u00edt egy id\u0151z\u00edt\u0151t a cirkusz PvP lista ellen\u0151rz\u00e9s\u00e9hez t\u00e1mad\u00e1s c\u00e9lj\u00e1b\u00f3l.",qe:"Be\u00e1ll\u00edt egy id\u0151z\u00edt\u0151t a statisztik\u00e1k tr\u00e9ningez\u00e9s\u00e9hez.",ee:"Be\u00e1ll\u00edt egy id\u0151z\u00edt\u0151t a lej\u00e1rt t\u00e1rgyak vissza\u00e1ll\u00edt\u00e1s\u00e1hoz.",oe:"Be\u00e1ll\u00edt egy id\u0151z\u00edt\u0151t a kov\u00e1csol\u00f3 anyagok t\u00e1rol\u00e1s\u00e1hoz a horreum-ban.",Wd:"Be\u00e1ll\u00edt egy id\u0151z\u00edt\u0151t a gladi\u00e1torok \u00e9s zsoldosok aukci\u00f3j\u00e1nak ellen\u0151rz\u00e9s\u00e9hez.",
ge:"Be\u00e1ll\u00edt egy id\u0151z\u00edt\u0151t t\u00e1rgyak keres\u00e9s\u00e9hez az aukci\u00f3ban \u00e9s a boltban.",$d:"Be\u00e1ll\u00edtja a guild adom\u00e1ny k\u00fcld\u00e9s\u00e9nek id\u0151z\u00edt\u0151j\u00e9t.",mc:"Arany Mozgatva",Ub:"Ne adj el olvaszt\u00e1si list\u00e1n szerepl\u0151 t\u00e1rgyakat",Dd:"Bolt Automatiz\u00e1l\u00e1s",Fd:"T\u00e1rgy Keres\u00e9s Be\u00e1ll\u00edt\u00e1sok",Ed:"Haszn\u00e1lja ezt az eszk\u00f6zt t\u00e1rgyak keres\u00e9s\u00e9hez. Egyszer\u0171en adjon hozz\u00e1 t\u00e1rgyakat a list\u00e1hoz, hat\u00e1rozza meg a ruha mennyis\u00e9g\u00e9t, majd ind\u00edtsa el a keres\u00e9st.",
Gd:"Haszn\u00e1lni k\u00edv\u00e1nt Ruha:",Hd:"H\u00e1ny ruh\u00e1t haszn\u00e1ljon?",Ma:"Adja meg a T\u00e1rgy Nev\u00e9t",La:"Adja meg a T\u00e1rgy Szintj\u00e9t",Jd:"T\u00e1rgy Min\u0151s\u00e9ge",Id:"T\u00e1rgy Neve Itt",Kd:"Keres\u00e9s Ind\u00edt\u00e1sa",Ld:"\u00c1tugr\u00e1s \u00e9s Folytat\u00e1s",Md:"Keres\u00e9s Le\u00e1ll\u00edt\u00e1sa",kc:"Guild Piac Rendez\u00e9se",Xc:"Legdr\u00e1g\u00e1bb",Ob:"Legolcs\u00f3bb",Cd:"V\u00e1lasszon egy lehet\u0151s\u00e9get",Xb:"Mettre en surbrillance les objets du monde souterrain",
lc:"F\u00f3kuszban a k\u00fcldet\u00e9sre?",Oj:"Haszn\u00e1ljon rubint, ha nincs ruha?",na:"Ker\u00fclje azonos szem\u00e9lyek megt\u00e1mad\u00e1s\u00e1t, hogy elker\u00fclje a jelent\u00e9st\u00e9tel\u00e9t. A jelent\u00e9s megn\u00f6veli a kitilt\u00e1s es\u00e9ly\u00e9t.",tf:"Olvad a z\u00f6ld?",jd:"Ne fogadja el a v\u00e9letlenszer\u0171 k\u00fcldet\u00e9seket, ha b\u00e1rmilyen sz\u0171r\u0151t megadott?",Ve:"Maxim\u00e1lis haszn\u00e1lhat\u00f3 anyagmin\u0151s\u00e9g",Ne:"Enged\u00e9lyezze a zsoldos keres\u00e9st",
kg:'Kattints a "Minden Kiv\u00e1lasztott Elad\u00e1sa" gombra az \u00f6sszes t\u00e9tel elad\u00e1s\u00e1hoz. Gy\u0151z\u0151dj meg r\u00f3la, hogy az els\u0151 (1) t\u00e1sk\u00e1dban van el\u00e9g 2x3 \u00fcres hely. Az arany t\u00f6meges gy\u0171jt\u00e9s\u00e9hez sz\u0171rd ki az aranyat, \u00e9s haszn\u00e1ld a "Kiv\u00e1lasztott vagy Mindet Kiv\u00e1laszt" lehet\u0151s\u00e9get.',sb:"\ud83d\udd25 : Hozz\u00e1adja az elemet a koh\u00e1szati list\u00e1hoz.",Ua:"\ud83d\udd28 : Hozz\u00e1adja az elemet az \u00e1rver\u00e9si list\u00e1hoz.",
nf:"Friss\u00edtsd a boltot anyaggal, amikor tele van (ut\u00e1na \u00fajra el kell adnod)",bf:"Oldal:",kf:"Meg\u00e1ll\u00edt",hf:"Elad\u00e1s Ezen az Oldalon",ef:"Kiv\u00e1lasztott Kiv\u00e1laszt\u00e1sa",cf:"Mindent Kiv\u00e1laszt",lf:"Automatikus Csomagol\u00e1si Be\u00e1ll\u00edt\u00e1sok",jf:"Er\u0151forr\u00e1sok K\u00fcld\u00e9se",ff:"Minden Kiv\u00e1lasztott Elad\u00e1sa",Y:"T\u00e9tel T\u00edpusa",pb:"Fegyverek",mb:"Pajzsok",bb:"P\u00e1nc\u00e9lok",hb:"Sisakok",gb:"Keszty\u0171k",cb:"Csizm\u00e1k",
kb:"Gy\u0171r\u0171k",ab:"Amulettek",eb:"Haszn\u00e1lati T\u00e1rgyak (\u00c9telek)",ob:"Fejleszt\u00e9sek",Ze:"Er\u0151s\u00edt\u00e9sek",jb:"Receptek",ib:"Zsoldosok",nb:"Kov\u00e1csol\u00f3 Eszk\u00f6z\u00f6k",lb:"Pergamenek",df:"Er\u0151s\u00edt\u00e9sek",$e:"Esem\u00e9ny T\u00e1rgyak",fb:"Kov\u00e1csol\u00e1shoz Val\u00f3 T\u00e1rgyak",af:"Arany",D:"Minden",rg:"Min\u0151s\u00e9g",qb:"Feh\u00e9r",G:"Z\u00f6ld",F:"K\u00e9k",H:"Lila",Z:"Narancss\u00e1rga",ja:"Piros",gf:"Az \u00d6sszes Elad\u00e1si Be\u00e1ll\u00edt\u00e1s",
uf:"Elhanyagolja a El\u0151tag / Ut\u00f3tag Kombin\u00e1ci\u00f3t?",Qe:"H\u00e1ny \u00e9telt vegy\u00e9l/fogj fel?",Ie:"Norm\u00e1l",He:"K\u00f6zepes",Ge:"Neh\u00e9z",Xa:"Alap",sg:"Ragadt Megjav\u00edt\u00e1s",Nf:"Kapcsold ki a Pokol Bel\u00e9p\u00e9s\u00e9t, ha letiltan\u00e1d a Dungeon/Circus/Arena-t. Ha k\u00e9zzel l\u00e9pt\u00e9l be a Pokolba, akkor enged\u00e9lyezned kell a Pokol M\u00f3dot.",Pb:"V\u00e1lassz alvil\u00e1gi jelmezt",De:"Viselj alvil\u00e1gi jelmezt, ha el\u00e9rhet\u0151?",
te:"K\u00e9pz\u00e9si \u00fatmutat\u00f3: Hat\u00e1rozza meg, h\u00e1nyszor szeretn\u00e9 edzeni a statisztik\u00e1kat, \u00e9s \u00e1ll\u00edtsa be priorit\u00e1saikat. A bot nem fog edzeni, hacsak nincs be\u00e1ll\u00edtva egy priorit\u00e1s. Ha van be\u00e1ll\u00edtott priorit\u00e1s, de nincs t\u00f6bb k\u00e9pzend\u0151 statisztika, a bot a kiv\u00e1lasztott statisztik\u00e1val folytatja.",bg:"Quest",xg:"Olvaszt\u00e1s",zg:"Olvaszt\u00e1s Be\u00e1ll\u00edt\u00e1sok",xf:"Olvasztott T\u00e1rgyak",
Af:"Adj hozz\u00e1 el\u0151tagot vagy ut\u00f3tagot, amint megtal\u00e1lja a csomagokban, aut\u00f3matikusan olvasztani fogja.:",yg:"Olvasztand\u00f3 T\u00e1rgy:",Wa:"Kattints a t\u00e1rgyra, amelyet meg akarsz jav\u00edtani. Ez a rendszer megjav\u00edtja a k\u00e9t f\u0151 karaktered t\u00e1rgyait ( AR\u00c9NA/CT). Legal\u00e1bb 10000 aranyra van sz\u00fcks\u00e9g a jav\u00edt\u00e1s elind\u00edt\u00e1s\u00e1hoz. Ha egy t\u00e1rgy beragad, az azt jelenti, hogy nincs anyagod a jav\u00edt\u00e1shoz. Pr\u00f3b\u00e1lj szabad helyet k\u00e9sz\u00edteni a t\u00e1sk\u00e1dban. A bot akkor kezdi meg a jav\u00edt\u00e1st, amikor a t\u00e9tel tart\u00f3ss\u00e1ga %0.",
Xf:"Csak Zsoldosra alkalmaz",Zf:"Aukci\u00f3 csak akkor licit\u00e1l, ha a lej\u00e1rati id\u0151 k\u00f6zel van a v\u00e9g\u00e9hez.",Fe:"Gy\u0151z\u0151dj meg arr\u00f3l, hogy a 2. lelt\u00e1r f\u00fcl \u00fcres \u00e9s rendelkezik 10K arannyal. A bot megtal\u00e1lja \u00e9s a m\u00e1sodik f\u00fclre helyezi a t\u00e1rgyat, majd legk\u00f6zelebb az oldal friss\u00edt\u00e9se ut\u00e1n olvasztja a t\u00e1rgyat. Az olvaszt\u00e1st minden 5-10 percen bel\u00fcl \u00fajraellen\u0151rzi.",Te:"Gy\u00f3gy\u00edt\u00e1s",
tg:"Nincs el\u00e9g arany az olvaszt\u00e1shoz. Sz\u00fcks\u00e9ges Arany:",wg:"Licit kihagy\u00e1sa: Egyes\u00fclet tag m\u00e1r licit\u00e1lt a t\u00e1rgyra ",vg:"Licit kihagy\u00e1sa: M\u00e1r licit\u00e1lt a t\u00e1rgyra ",advanced:"Halad\u00f3",arena:"Ar\u00e9na",W:"Aut\u00f3matikus T\u00e1mad\u00e1s",Ta:"T\u00e1mad\u00e1s Elker\u00fcl\u00e9se",U:"J\u00e1t\u00e9kos Hozz\u00e1ad\u00e1sa",V:"Add hozz\u00e1 a j\u00e1t\u00e9kos nev\u00e9t (Same Server)",gg:"Meg\u00e1ll\u00edtja a bot, ha elfogyott az \u00e9tel?",
circusTurma:"Circus Turma",Je:"Neh\u00e9zs\u00e9g",dungeon:"Kazamata",Ke:"Kazamata Be\u00e1ll\u00edt\u00e1sok",eventExpedition:"Esem\u00e9ny Exped\u00edci\u00f3",expedition:"Exped\u00edci\u00f3",Oe:"Exped\u00edci\u00f3 Be\u00e1ll\u00edt\u00e1sok",pf:"V\u00e1lassz Sz\u00f6rnyet",ig:"Legmagasabb",hg:"Tedd be a gy\u00f3gy\u00edt\u00f3 t\u00e1rgyaid az els\u0151 oldalra a lelt\u00e1rodon bel\u00fcl",Za:"Bent",Uf:"Arany T\u00e1rol\u00e1sa",Sd:"Arany T\u00e1rol\u00e1sa az Aukci\u00f3ban?",Ad:"Haszn\u00e1ld a Munk\u00e1sruh\u00e1t a Bolt Felt\u00f6lt\u00e9s\u00e9hez?",
Sf:"V\u00e1lassz T\u00e9teleket a Vissza\u00e1ll\u00edt\u00e1shoz",vd:"Lej\u00e1rt T\u00e9telek Vissza\u00e1ll\u00edt\u00e1sa",Ga:"Megjegyz\u00e9s: Az opci\u00f3 enged\u00e9lyez\u00e9s\u00e9vel a bot eladja a k\u00f6zelg\u0151 lej\u00e1rat\u00fa t\u00e1rgyakat a Csomagokb\u00f3l az Egyes\u00fcleti Piacon majd megszak\u00edtja a lej\u00e1rati id\u0151 vissza\u00e1ll\u00edt\u00e1s\u00e1t. Egyes\u00fclet sz\u00fcks\u00e9ges. Gy\u0151z\u0151dj meg r\u00f3la, hogy a t\u00e1sk\u00e1dban van \u00fcres 3x3-as hely.",
fd:"Bot v\u00e9letlenszer\u0171 sz\u00fcneteltet\u00e9se m\u0171k\u00f6d\u00e9si [Teszt F\u00e1zis]:",M:"Arany T\u00e1rol\u00e1sa: A bot megtartja ezt az aranyat a karakteren:",Kc:"Max Arany: A bot elk\u00f6lti, ha az arany nagyobb, mint",Tf:"A bot licit\u00e1l haszontalan gy\u0171r\u0171kre, amulettekre",ub:"V\u00e9letlenszer\u0171 k\u00e9sleltet\u00e9s hozz\u00e1ad\u00e1sa",vb:"Itt adhatsz hozz\u00e1 k\u00e9sleltet\u00e9st a bothoz.",Fa:"Jav\u00edt\u00e1s",sf:"Csak K\u00e9k t\u00e1rgy Olvaszt\u00e1s?",
wf:"Csak Lila t\u00e1rgy Olvaszt\u00e1s?",vf:"Csak Narancss\u00e1rga t\u00e1rgy Olvaszt\u00e1s?",yf:"Mindent Olvassz be a 2. f\u00fclben?",zf:"Ez figyelmen k\u00edv\u00fcl hagyja a sz\u00ednv\u00e1laszt\u00e1sokat",pa:"El\u0151zm\u00e9nyek T\u00f6rl\u00e9se",Oa:"Olvaszt\u00e1s",Ab:"Search",Yc:"Aut\u00f3matikus Aukci\u00f3",Bb:"Az aukci\u00f3 t\u00falzott haszn\u00e1lata kitilt\u00e1st vonhat maga ut\u00e1n. Az esetleges \u00fctk\u00f6z\u00e9sek elker\u00fcl\u00e9se \u00e9rdek\u00e9ben aj\u00e1nlatos letiltani az egy\u00e9b aj\u00e1nlatt\u00e9teli funkci\u00f3kat. Ez a funkci\u00f3 lelass\u00edtja a botot.",
zd:"Keres\u00e9s a Gladi\u00e1torok Aukci\u00f3j\u00e1ban",Bd:"Keres\u00e9s a Zsoldosok Aukci\u00f3j\u00e1ban",Jb:"Licit\u00e1l\u00e1s \u00c9telekre?",Lc:"Maxim\u00e1lis Licit",Kb:"Licit\u00e1l\u00e1s, ha az \u00e1llapot kevesebb, mint",Lb:"Licit\u00e1lt T\u00e1rgyak",If:"Aukci\u00f3 Nyelve",Jf:"2.9.4-es friss\u00edt\u00e9ssel kapcsolatban k\u00e9rlek \u00e1ll\u00edtsd be \u00fajra a nyelvet, vagy ALAP\u00c9RTELMEZET BE\u00c1LL\u00cdT\u00c1SOK. Gy\u0151z\u0151dj meg r\u00f3la, hogy minden helyesen van be\u00e1ll\u00edtva, k\u00fcl\u00f6nben a licit\u00e1l\u00e1s nem m\u0171k\u00f6dik.",
yb:"Hozz\u00e1adhatsz t\u00e9teleket a piac keres\u00e9s\u00e9hez \u00e9s az aukci\u00f3hoz. Amikor egy t\u00e9telt hozz\u00e1ad a list\u00e1hoz, a piac lila t\u00e9teleket is megjelen\u00edti. Ha enged\u00e9lyezed az aut\u00f3matikus licit\u00e1l\u00e1st, az al\u00e1bbi opci\u00f3kat haszn\u00e1lhatod",Gf:"\u00d3vatosan haszn\u00e1ld az aukci\u00f3t!",Hf:"Az aut\u00f3matikus licit\u00e1l\u00e1s t\u00fal sok k\u00e9r\u00e9st k\u00fcldhet a szerverre, \u00e9s kitilthatj\u00e1k, ha folyamatosan haszn\u00e1lod!",
td:"\u00dajra Aktiv\u00e1lja az Esem\u00e9nypontokat Rubinokkal?",Zb:"Aut\u00f3matikus Olaj Enged\u00e9lyez\u00e9se",Kf:"Aut\u00f3matikus Szent Olajok Beszerz\u00e9se",Pf:"K\u00fcldet\u00e9s ellen\u0151rz\u00e9si Sebess\u00e9g",ma:"T\u00e1madj Egyes\u00fcleti Tagokat? :",ka:'Aut\u00f3matikusan hozz\u00e1adja az embereket az "T\u00e1mad\u00e1s" list\u00e1hoz, amikor t\u00f6bb, mint X ARANYAT rabolsz.:',la:'Aut\u00f3matikusan hozz\u00e1adja az embereket az "Elker\u00fclend\u0151 T\u00e1mad\u00e1s" list\u00e1hoz, ha vesz\u00edtesz ellen\u00fck.:',
Ja:"T\u00e1mad\u00e1sok Statisztik\u00e1i",Ra:"Nagyon Hossz\u00fa",za:"Hossz\u00fa",Ca:"K\u00f6zepes",Na:"R\u00f6vid",Sa:"Nagyon R\u00f6vid",$b:"Bel\u00e9p\u00e9s az Alvil\u00e1gba, ha az \u00c9P >",od:"K\u00fcldet\u00e9s Ellen\u0151rz\u00e9si Sebess\u00e9g",hd:'Az alap\u00e9rtelmezett "3x". Ha a bot probl\u00e9m\u00e1kat okoz a k\u00fcldet\u00e9sekkel, \u00e1ll\u00edtsd \u00e1t a k\u00fcldet\u00e9s sebess\u00e9g\u00e9t a szerver sebess\u00e9g\u00e9nek megfelel\u0151en.',nc:"Gy\u00f3gy\u00edt\u00f3 Kiv\u00e1laszt\u00f3 T\u00e1ska",
ac:'Ha manu\u00e1lisan friss\u00edted a pontokat, akkor kattints a fent l\u00e9v\u0151 gombra: "Esem\u00e9ny K\u00fcldet\u00e9s Friss\u00edt\u00e9se, ha beragadt!"',Mf:"Legal\u00e1bb az egyiket enged\u00e9lyezned kell a k\u00f6vetkez\u0151k k\u00f6z\u00fcl: exped\u00edci\u00f3, dungeont, ar\u00e9n\u00e1t vagy cirkuszt, hogy elind\u00edtsd az Esem\u00e9ny Exped\u00edci\u00f3t.",qd:"Esem\u00e9ny K\u00fcldet\u00e9s Friss\u00edt\u00e9se, ha beragadt!",ra:"Fedezze a T\u00e1rsakat?",Rd:"Hagyd minden be\u00e1ll\u00edt\u00e1st letiltva, ha a csomagokban szerepl\u0151 elemekkel szeretn\u00e9l olvasztani. Azonban m\u00e9g mindig v\u00e1laszthatsz sz\u00edneket.",
Lf:"Karakter(Ki) / Zsoldos(Be)",Rf:"Mindkett\u0151t Jav\u00edtani?",Vf:"Id\u0151z\u00edt\u0151k",Timers:"\u00cdrd be az egyes id\u0151z\u00edt\u0151kh\u00f6z a percek sz\u00e1m\u00e1t lent vagy hagyd az alap\u00e9rtelmezetten.",ua:"T\u00e1mad\u00e1s Statisztik\u00e1i Enged\u00e9lyez\u00e9se:",Ha:"V\u00e1lassz tartom\u00e1nyt a t\u00e1mad\u00e1shoz",Ia:"A bot v\u00e9letlenszer\u0171en t\u00e1mad a t\u00e1bl\u00e1zatban szerepl\u0151 j\u00e1t\u00e9kosok k\u00f6z\u00fcl.",xa:"Ligat\u00e1mad\u00e1sok",
ta:"Ligat\u00e1mad\u00e1s Enged\u00e9lyez\u00e9se:",Da:"V\u00e9letlenszer\u0171 T\u00e1mad\u00e1s",Ea:"T\u00e1mad\u00e1s alacsonyt\u00f3l a magas szint\u0171 j\u00e1t\u00e9kosokig",Ff:"A bot alap\u00e9rtelmezetten elker\u00fcli az Egyes\u00fcleti tagok t\u00e1mad\u00e1s\u00e1t.",cc:"Exped\u00edci\u00f3 Helysz\u00edne:",Cb:"Aut\u00f3matikus B\u00f3nuszok Begy\u0171jt\u00e9se:",Nd:"Boss Kihagy\u00e1sa",Wb:"Kazamata Helysz\u00edne:",yd:"Kazamata \u00fajrakezd\u00e9se veres\u00e9g eset\u00e9n?",qc:"Alvil\u00e1g Be\u00e1ll\u00edt\u00e1sok",
rc:"K\u00e9rlek konfigur\u00e1ld a gy\u00f3gy\u00edt\u00e1s sz\u00e1zal\u00e9kos be\u00e1ll\u00edt\u00e1sait a gy\u00f3gy\u00edt\u00e1s f\u00fcl\u00f6n, \u00e9s gy\u0151z\u0151dj meg r\u00f3la, hogy a gy\u00f3gy\u00edt\u00e1s f\u00fcl be van kapcsolva. Ha az alvil\u00e1g bel\u00e9p\u00e9se kijelentkeztet, l\u00e9pj a lobbyba, \u00e9s kapcsold be az aut\u00f3mata bejelentkez\u00e9s jel\u00f6l\u0151n\u00e9gyzetet.",oc:"Alvil\u00e1g Neh\u00e9zs\u00e9g",Fb:"Aut\u00f3matikus Alvil\u00e1g Bel\u00e9p\u00e9s: / Alvil\u00e1g Mode",
ze:"Mobiliz\u00e1ci\u00f3 haszn\u00e1lata, ha pontok = 0",Ce:"Rubinok haszn\u00e1lata?",bc:"Kil\u00e9p\u00e9s az alvil\u00e1gb\u00f3l, ha nincsenek pontok?",ue:"A bot megpr\u00f3b\u00e1lja el\u0151sz\u00f6r a Villa Medici-t haszn\u00e1lni, ha nincs, akkor gy\u00f3gy\u00edt\u00f3 italt haszn\u00e1l. Ne felejtsd el bekapcsolni a Gy\u00f3gy\u00edt\u00e1s kapcsol\u00f3t.",ve:"Az aut\u00f3matikus alvil\u00e1g bel\u00e9p\u00e9s letiltja a kazamata/ar\u00e9na/circus be\u00e1ll\u00edt\u00e1sokat az alvil\u00e1g bel\u00e9p\u00e9sekor.",
Wf:"Alvil\u00e1g Gy\u00f3gy\u00edt\u00e1si Be\u00e1ll\u00edt\u00e1sok",Be:"Villa Medici Haszn\u00e1lata?",Ae:"Gy\u00f3gy\u00edt\u00f3 Ital Haszn\u00e1lata?",Fc:"INF\u00d3: A bot minden kiv\u00e1lasztott percben keresni fog piaci t\u00e9teleket, ami meg\u00e1ll\u00edthatja a t\u00e1mad\u00e1st a keres\u00e9s alatt.",Yb:"Piaci Keres\u00e9s Enged\u00e9lyez\u00e9se:",Gc:"Piaci Keres\u00e9s Id\u0151k\u00f6z Percekben:",Hc:"Javasolt 10 perc.",zc:"T\u00e9tel Be\u00e1ll\u00edt\u00e1sok:",xc:"T\u00e9tel N\u00e9v Tartalmazza",
Ic:"Max \u00c1r",Ac:"T\u00e9tel T\u00edpus",yc:"T\u00e9tel Ritkas\u00e1g",Nb:"L\u00e9lekhez k\u00f6t\u00f6ttet v\u00e1s\u00e1roljon?",Cc:"V\u00e1s\u00e1roland\u00f3 T\u00e9telek",Bc:"Megpr\u00f3b\u00e1lja megvenni a t\u00e1sk\u00e1ban l\u00e9v\u0151 legnagyobb \u00e1ron tal\u00e1lhat\u00f3 t\u00e9telt, ha b\u00e1rmelyik megegyezik a maxim\u00e1lis \u00e1r be\u00e1ll\u00edt\u00e1ssal.:",Mb:"Megv\u00e1s\u00e1rolt T\u00e9telek:",Re:"Gy\u00f3gy\u00edt\u00e1s Sz\u00e1zal\u00e9k",Df:"\u00c9tel V\u00e1s\u00e1rl\u00e1sa a Boltb\u00f3l?",
Ef:"Gy\u00f3gy\u00edt\u00f3 eszk\u00f6z haszn\u00e1lata a Csomagb\u00f3l?",Cf:"Cervisia Haszn\u00e1lata?",lg:"Utols\u00f3 Haszn\u00e1lat",location:"Helysz\u00edn",Pa:"Er\u0151",da:"\u00dcgyess\u00e9g",ca:"F\u00fcrges\u00e9g",qa:"Alkat",oa:"Karizma",ea:"Intelligencia",re:"Gyakorl\u00e1s Be\u00e1ll\u00edt\u00e1sok",se:"V\u00e1laszd ki az attrib\u00fatumokat, amiket szeretn\u00e9l edzeni. Akkor fogja elkezdeni az edz\u00e9st, ha van el\u00e9g aranyad.",$a:"K\u00f6vetkez\u0151 l\u00e9p\u00e9s",Xe:"Nem",
Ye:"Norm\u00e1l",pg:"Ellens\u00e9g",qg:"Ellens\u00e9g Szintje",mf:"K\u00e9rd\u00e9sek",random:"V\u00e9letlenszer\u0171",ug:"Be\u00e1ll\u00edt\u00e1sok",Ag:"Hamarosan...",type:"Kattints az ikonokra a k\u00e9rd\u00e9s t\u00edpus\u00e1nak kiv\u00e1laszt\u00e1s\u00e1hoz.",Fg:"Igen",A:"Aukci\u00f3/Keres\u00e9s",rb:"T\u00e9telek Hozz\u00e1ad\u00e1sa",Bf:"Fejleszt\u0151t\u00e1rgyak Aut\u00f3matikus T\u00e1rol\u00e1sa",Bg:"Elk\u00fcld\u00e9s",jg:"Id\u0151k\u00f6z : ",cg:"Aut\u00f3matikus Licit Enged\u00e9lyez\u00e9se",
dg:"Ne licit\u00e1ljon, ha az Egyes\u00fcleti tag m\u00e1r licit\u00e1lt",Cg:"\u00datmutat\u00f3",Va:"V\u00e1lassz a fenti gombok k\u00f6z\u00fcl, hogy akarod-e az ar\u00e9n\u00e1ban a legkisebb vagy a legmagasabb szint\u0171 ellenfelet. T\u00f6bb felhaszn\u00e1l\u00f3 lass\u00edthatja a bot m\u0171k\u00f6d\u00e9s\u00e9t.",Yf:"Kezdetnek adj hozz\u00e1 egy t\u00e9telt a list\u00e1hoz (pl. `Lucius`). Miut\u00e1n hozz\u00e1adtad, a bot keresni fogja a t\u00e1rgyakat \u00e9s megjelen\u00edti a keres\u00e9si eredm\u00e9nyeket a k\u00e9perny\u0151 bal oldal\u00e1n. Az aut\u00f3matikus aukci\u00f3 c\u00e9lj\u00e1b\u00f3l is keressen r\u00e1 a t\u00e1rgyra. Ha enged\u00e9lyezed az aut\u00f3matikus licit\u00e1l\u00e1st, a bot rendszeres id\u0151k\u00f6z\u00f6nk\u00e9nt keresni fogja a t\u00e9teleket a megadott id\u0151szak alapj\u00e1n. Ha a bot megtal\u00e1lja a t\u00e1rgyat \u00e9s van el\u00e9g p\u00e9nzed, aut\u00f3matikusan licit\u00e1l majd helyetted. *Megjegyz\u00e9s*: egyedi t\u00e1rgyak keres\u00e9s\u00e9hez a boltban legal\u00e1bb 1 v\u00e9letlenszer\u0171 t\u00e1rgyat hozz\u00e1 kell adnod a keres\u00e9si list\u00e1hoz.",
eg:"A sz\u00f6rny sz\u00e1m\u00e1t a fenti gombok k\u00f6z\u00fcl v\u00e1laszthatod ki. A 1 a legbaloldali sz\u00f6rnyet k\u00e9pviseli. Gy\u0151z\u0151dj meg r\u00f3la, hogy megfelel\u0151 helyet v\u00e1lasztasz, k\u00fcl\u00f6nben a bot sz\u00fcnetelhet.",Le:"V\u00e1lassz nehezs\u00e9get a kazamat\u00e1hoz a fentiek k\u00f6z\u00fcl. Gy\u0151z\u0151dj meg r\u00f3la, hogy megfelel\u0151 helyet v\u00e1lasztasz, k\u00fcl\u00f6nben a bot sz\u00fcnetelhet.",Se:"Gy\u00f3gy\u00edt\u00e1s Be\u00e1ll\u00edt\u00e1sok",
Me:"Felesleges arany t\u00e1rol\u00e1sa az egyes\u00fcletben az egyes\u00fcleti piacon t\u00e1rgyak v\u00e1s\u00e1rl\u00e1s\u00e1val. -> Min. Arany",mg:"Mindent Mozgat",og:"Kijel\u00f6ltek Mozgat\u00e1sa",$f:"Aut\u00f3matikus Gy\u00f3gy\u00edt\u00e1s",ag:"Aut\u00f3matikus Gy\u00f3gy\u00edt\u00e1s Sz\u00e1zal\u00e9k",Eg:"Rubin",cd:"\u00c1ltal\u00e1nos Be\u00e1ll\u00edt\u00e1sok",qf:"Mindent Elad",rf:"Kijel\u00f6ltek Elad\u00e1sa",T:"Fegyverek",R:"Pajzsok",J:"Mellv\u00e9rtek",L:"Sisakok",K:"Keszty\u0171k",
S:"Cip\u0151k",P:"Gy\u0171r\u0171k",I:"Amulettek",xe:"\u00c9telek",we:"Fejleszt\u00e9sek",pd:"Receptek",Mc:"Tekercsek",rd:"Er\u0151s\u00edt\u00e9sek",nd:"K\u00fcldet\u00e9s Sz\u0171r\u0151 Figyelmen K\u00edv\u00fcl Hagy\u00e1sa",md:"\u00cdrja be a sz\u0171rend\u0151 kulcsszavakat, hogy kisz\u0171rje azokat a k\u00fcldet\u00e9seket, amelyeket nem szeretne v\u00e1llalni",va:"Adjon meg kulcssz\u00f3t",N:"Hozz\u00e1ad\u00e1s",sd:"Elt\u00e1vol\u00edt\u00e1s",Qb:"T\u00f6rl\u00e9s",kd:"K\u00fcldet\u00e9s Sz\u0171r\u0151 Elfogad\u00e1sa",
ld:"\u00cdrja be a kulcsszavakat, hogy kiv\u00e1lassza, melyik k\u00fcldet\u00e9seket szeretn\u00e9 v\u00e1llalni. Ez figyelmen k\u00edv\u00fcl hagyja a k\u00fcldet\u00e9st\u00edpusokat",fa:"Id\u0151 Sz\u0171r\u00e9s\u0171 K\u00fcldet\u00e9sek Kihagy\u00e1sa?",Qf:"K\u00fcldet\u00e9sek",Db:"Automatikus Kost\u00fcm",ye:"Kost\u00fcm Haszn\u00e1lata?",Ib:"Alap Harc",Vb:"Dungeoni Harc",Eb:"A Bot csak akkor viseli a Dis Pater Normal \u00e9s Medium form\u00e1tumot, ha az exped\u00edci\u00f3/kazamata pontja 0.",
pc:"Pokoli Gy\u00f3gy\u00edt\u00e1s Be\u00e1ll\u00edt\u00e1sai",xb:"T\u00e1mad\u00e1s a F\u0151ellens\u00e9g el\u00e9rhet\u0151v\u00e9 v\u00e1l\u00e1sakor?",ya:"Az Ligat\u00e1mad\u00e1s \u00f6nmag\u00e1t letiltja 5 sikertelen t\u00e1mad\u00e1s ut\u00e1n.",sc:"Szent Olajok",Uc:"T\u00e1rgy Neve",O:"Minim\u00e1lis T\u00e1rgyszint",Vc:"Minim\u00e1lis T\u00e1rgymin\u0151s\u00e9g",wb:"Alkalmaz/T\u00f6r\u00f6l Minut\u00e9ri\u00e1t",uc:"El\u0151tag/Ut\u00f3tag Kombin\u00e1ci\u00f3 Figyelmen K\u00edv\u00fcl Hagy\u00e1sa",
Ee:"Igen",Zc:"Nem",aa:"El\u0151tag Hozz\u00e1ad\u00e1sa",ba:"Ut\u00f3tag Hozz\u00e1ad\u00e1sa",Od:"Olvasd el a List\u00e1t",gd:"El\u0151tag",Td:"Ut\u00f3tag",xd:"Lej\u00e1r\u00f3 T\u00e1rgyak Vissza\u00e1ll\u00edt\u00e1sa",Pd:"V\u00e9letlenszer\u0171 Olvasd el a Csomagokat?",Qd:"Olvasd el a Lapon",wa:"Extr\u00e1k",zb:"\u00c1rver\u00e9s",Jc:"Piac",Qa:"Id\u0151z\u00edt\u0151k",me:"Olvasd el a Minut\u00e9ri\u00e1t",le:"Olvasd el, ha nincs el\u00e9g arany",ie:"Olvasd el, ha nincs t\u00e1rgy",ga:"Jav\u00edt\u00e1s",
ae:"Gilda Piac Aranytartalma",Xd:"\u00c1rver\u00e9s Aranytartalma",pe:"Edz\u00e9s",de:"Lej\u00e1rtak Vissza\u00e1ll\u00edt\u00e1sa",ne:"\u00dczletek a Kov\u00e1cshoz",Vd:"\u00c1rver\u00e9s Ellen\u0151rz\u00e9se",fe:"Keres\u00e9s",B:"Enged\u00e9lyez\u00e9s",Wc:"Minim\u00e1lis Arany",Ka:"\u00d3ra Kiv\u00e1laszt\u00e1sa",sa:"Arany Adom\u00e1nyoz\u00e1sa a Gildinek",Sb:"Minden 5 percenk\u00e9nt adom\u00e1nyoz. Az id\u0151z\u00edt\u0151k lapr\u00f3l m\u00f3dos\u00edthatja az id\u0151k\u00f6zt",tc:"Mennyit szeretne adom\u00e1nyozni?",
Tb:"Adom\u00e1nyozni, amikor t\u00f6bb van, mint >",Ec:"Kevesebb, mint <",ud:"Lej\u00e1rtak Vissza\u00e1ll\u00edt\u00e1sa \u00e9s Egy\u00e9b Be\u00e1ll\u00edt\u00e1sok",wd:"Vissza\u00e1ll\u00edt\u00e1s ideje:",Of:"Tartsa lenyomva a Ctrl (Cmd a Mac-en) billenty\u0171t a t\u00f6bb t\u00e1rgy kiv\u00e1laszt\u00e1s\u00e1hoz",vc:"Be-/Kiv\u00e1laszt\u00e1s Be\u00e1ll\u00edt\u00e1sok",ec:"Be\u00e1ll\u00edt\u00e1sok Export\u00e1l\u00e1sa",wc:"Be\u00e1ll\u00edt\u00e1sok Import\u00e1l\u00e1sa",Nc:"\u00dczenet Minden J\u00e1t\u00e9kosnak",
Oc:"[Ultra Pr\u00e9mium Kulcs sz\u00fcks\u00e9ges, \u00fczenet a Discordon az kulcs megszerz\u00e9s\u00e9hez.]",Pc:"Adja meg az elk\u00fcldend\u0151 \u00fczenetet",Rb:"Egyedi szkriptek\u00e9rt vegye fel a kapcsolatot vel\u00fcnk a Discordon",Rc:"K\u00fcld\u00e9s",Sc:"J\u00e1t\u00e9kosok Megjelen\u00edt\u00e9se",Qc:"Mindet Kiv\u00e1laszt",Tc:"\u00d6sszes Kiv\u00e1laszt\u00e1s Visszavon\u00e1sa",Dc:"Gy\u0151z\u0151dj\u00f6n meg r\u00f3la, hogy van el\u00e9g hely a t\u00e1sk\u00e1j\u00e1ban. A leh\u0171l\u00e9si id\u0151 2 perc."};if("true"!==localStorage.getItem("isInitialized")){const A={Timers:JSON.stringify({Smelting:10,SmeltingNoGold:5,SmeltingNoItem:15,Repair:10,GuildMarket:2,AuctionHoldGold:15,Arena:10,CircusTurma:10,Training:2,ResetExpired:30,StoreForge:30,AuctionCheck:10,GuildDonate:15}),packagesPurchased:"[]",questKeywords:"[]",activeItems:'{"gloves":false,"shoes":false,"rings1":false,"rings2":false,"shield":false,"armor":false,"weapon":false,"helmet":false,"necklace":false}',auctionPrefixes:"[]",auctionSuffixes:"[]",
prefixes:"[]",suffixes:"[]",statSettings:JSON.stringify([{stat:"Strength",count:"0",priority:null,continueTraining:!1},{stat:"Dexterity",count:"0",priority:null,continueTraining:!1},{stat:"Agility",count:"0",priority:null,continueTraining:!1},{stat:"Constitution",count:"0",priority:null,continueTraining:!1},{stat:"Charisma",count:"0",priority:null,continueTraining:!1},{stat:"Intelligence",count:"0",priority:null,continueTraining:!1}]),farmEnable:"false",farmEnemy:"1",farmLocation:"1",HealPickBag:"1",
AutoBidInterval:"5",AuctionItemLevel2:"0",HealShop:"false",noItemsLastCheck:"false",dungeonFocusQuest:"false",smeltBlue:"false",smeltGreen:"false",smeltOrange:"false",smeltRed:"false",repairPercentage:"10",HealRubyToggle:"false",dungeonLocation:"0",costumeBasic:"1",costumeDungeon:"2",smeltAnything:"false",skipTimeQuests:"false",skipTimeCircusQuests:"false",costumeUnderworld:"9",wearUnderworld:"false",hellDifficulty:"1",repairMaxQuality:"1",FoodAmount:"3",smeltIgnorePS:"false",EnableSmelt:"false",
filterGM:"p","AuctionEmpty.timeOut":"0","CheckDolls.timeOut":"0","AuctionMEmpty.timeOut":"0",expeditionLocation:"0",doQuests:"false",unique_shop_results_height:"124",unique_shop_results_width:"184",unique_shop_results_top:"452",unique_shop_results_left:"368",search_results_top:"112",search_results_width:"179",search_results_height:"284",search_results_left:"410",itemBought:"false",itemMovedToInventory:"false",AucTab:"true",patmp:"false",arenaPlayer:"true",repairInitiated:"true",doKasa:"false",packages:JSON.stringify({quality:[],
type:[1,2,3,4,5,8,6,9,7,12,13,15,19,20,11,21,18,14,99]}),delaySelect:"0",autoAttackList:"[]",avoidAttackList:"[]",autoAttackCircusList:"[]",avoidAttackCircusList:"[]",autoAttackServerList:"[]",removeCircusList:"[]",removeArenaList:"[]",arenacrosslist:"[]",circuscrosslist:"[]",autoAttackCircusServerList:"[]",doArena:"false",doCircus:"false","gladBotChecks.timeOut":"0","repair.timeOut":"0","storeForgeResources.timeOut":"0",HealCervisia:"false",dungeonAB:"false",bidStatus:"4",doDungeon:"false",doExpedition:"false",
arenaAttackGM:"false",circusAttackGM:"false",AutoAuction:"false",auctionminlevel:"0",storeGoldinAuctionmaxGold:"0",storeGoldinAuction:"false",autoAddArenaAmount:"0",autoAddCircusAmount:"0",eventPoints_:"16",storeGoldinAuctionholdGold:"0",TrainingHoldGold:"0",MarketHoldGold:"0",KasaHoldGold:"0",HealPackage:"false",smeltPurple:"false",guildPackHour:"3",smeltEverything2:"false",questSpeed:"2","enableHideGold.timeOut":"0",bidFood:"false",auctionmercenaryenable:"false",auctiongladiatorenable:"false",maximumBid:"100000",
activateAuction2:"false",scoreboardattackenable:"false",scoreRange:"5",auctionlanguagesettings:JSON.stringify(["Very long","Long","Middle","Short","Very short"]),scoreboardcircusenable:"false",healPercentage:"25",hellEnterHP:"75",questTypes:JSON.stringify({combat:!0,arena:!0,circus:!0,expedition:!1,dungeon:!1,items:!1}),scoreRangeCircus:"5",underworld:JSON.stringify({cooldown:"",wins:0,isUnderworld:!1}),enableMarketSearch:"false",smeltTab:"1",UnderWorldUseRuby:"false",renewEvent:"false","arena.timeOut":"0",
"circus.timeOut":"0",AuctionCover:"false",AuctionGoldCover:"false",UnderworldUseMobi:"false",MarketSearchInterval:"5",useVillaMedici:"false",autoEnterHell:"false",useHealingPotion:"false",repairMercenary:"false",repairALL:"false",AutoBidButton:"false",healstopbot:"false",HealEnabled:"false",minimumGoldAmount:"100000",doEventExpedition:"false",GuildMemberBid:"false",autoCollectBonuses:"false",exitUnderworld:"false",workbench_selectedItem:JSON.stringify({})};Object.keys(A).forEach(F=>{null===localStorage.getItem(F)&&
localStorage.setItem(F,A[F])});["license_playerId","eventPoints","playerTimeouts"].forEach(F=>{null!==localStorage.getItem(F)&&localStorage.removeItem(F)});localStorage.setItem("isInitialized","true")};
