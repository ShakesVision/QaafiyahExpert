(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{t68Q:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),i=t("MKJQ"),r=t("jy/b"),s=t("Ip0R"),b=t("mrSG"),a=t("KX/v"),c=function(){function l(l,n,t,u){this.admob=l,this.http=n,this.router=t,this.loadingCtrl=u,this.apiKey="AIzaSyBI0QPsnXDKe0Y0J3jJZhnIEJNmGo0phZs",this.blogID="8183720278699296637",this.label="اصلاح+سخن",this.morePosts=!1,this.spin=!1,this.nextPageToken="",this.moreClickCount=0,this.quotesArray=[]}return l.prototype.ngOnInit=function(){return b.__awaiter(this,void 0,void 0,(function(){return b.__generator(this,(function(l){return this.showConfig(),this.getQuotes(),[2]}))}))},l.prototype.getQuotes=function(){var l=this;this.quotesArray=[],this.http.get("https://raw.githubusercontent.com/ShakesVision/qaafiyah-public/main/quotes.json",{responseType:"json"}).subscribe((function(n){l.quotesArray=n}))},l.prototype.getConfig=function(l){var n="https://www.googleapis.com/blogger/v3/blogs/"+this.blogID+"/posts?labels="+this.label+"&key="+this.apiKey;return this.http.get(void 0===l||""==l?n:n+="&pageToken="+l)},l.prototype.showConfig=function(){var l=this;this.reset(),this.getConfig("").subscribe((function(n){l.APIdata=n.items,l.setValuesAfterFetch(n)}))},l.prototype.nextPage=function(l){var n=this;this.morePosts&&(this.spin=!0,this.getConfig(l).subscribe((function(l){console.log(l),n.moreClickCount++,2==n.moreClickCount&&(n.interstial(),n.moreClickCount=0),l.items.forEach((function(l){n.APIdata.push(l)})),setTimeout((function(){return n.spin=!1}),1e3),n.setValuesAfterFetch(l)})))},l.prototype.setValuesAfterFetch=function(l){null!=l.nextPageToken?(this.nextPageToken=l.nextPageToken,this.morePosts=!0):l.items.length<10&&(this.morePosts=!1)},l.prototype.reset=function(){this.APIdata=[],this.nextPageToken="",this.morePosts=!1},l.prototype.presentLoading=function(l){return b.__awaiter(this,void 0,void 0,(function(){return b.__generator(this,(function(n){switch(n.label){case 0:return[4,l.present()];case 1:return[2,n.sent()]}}))}))},l.prototype.doRefresh=function(l){console.log("Begin async operation"),this.showConfig(),this.getQuotes(),setTimeout((function(){console.log("Async operation has ended"),l.target.complete()}),2e3)},l.prototype.gotoPost=function(l){return b.__awaiter(this,void 0,void 0,(function(){var n;return b.__generator(this,(function(t){switch(t.label){case 0:return[4,this.loadingCtrl.create({message:"کیا کریں گر نہ انتظار کریں..."})];case 1:return n=t.sent(),this.presentLoading(n),n.dismiss(),this.router.navigate(["/post"],{state:{post:l}}),[2]}}))}))},l.prototype.interstial=function(){this.admob.interstitial.config({autoShow:!0,id:"ca-app-pub-9293070686220717/7452632736"}),this.admob.interstitial.prepare().then((function(){})).catch((function(l){return alert(l)}))},l}(),p=t("t/Na"),h=t("ZYCi"),f=u.nb({encapsulation:0,styles:[["ion-slides[_ngcontent-%COMP%]{text-align:center;color:#f5f5f5;background:#210101;height:250px}ion-slide[_ngcontent-%COMP%]{display:block}ion-slide[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{line-height:2em;display:inline-block;width:150px;border:1px solid #ee3d50;color:#ee3d50;border-radius:5px}"]],data:{}});function g(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,6,"ion-slide",[],null,null,null,i.hb,i.z)),u.ob(1,49152,null,0,r.mb,[u.h,u.k,u.x],null,null),(l()(),u.pb(2,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.Fb(3,null,["",""])),(l()(),u.pb(4,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(5,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(6,null,["",""]))],null,(function(l,n){l(n,3,0,n.context.$implicit.title),l(n,6,0,n.context.$implicit.text)}))}function d(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,14,"ion-card",[],null,null,null,i.P,i.e)),u.ob(1,49152,null,0,r.l,[u.h,u.k,u.x],null,null),(l()(),u.pb(2,0,null,0,4,"ion-card-header",[],null,null,null,i.N,i.g)),u.ob(3,49152,null,0,r.n,[u.h,u.k,u.x],null,null),(l()(),u.pb(4,0,null,0,2,"ion-card-title",[],null,null,null,i.O,i.h)),u.ob(5,49152,null,0,r.p,[u.h,u.k,u.x],null,null),(l()(),u.Fb(6,0,[" "," "])),(l()(),u.pb(7,0,null,0,7,"ion-card-content",[],null,null,null,i.M,i.f)),u.ob(8,49152,null,0,r.m,[u.h,u.k,u.x],null,null),(l()(),u.pb(9,0,null,0,5,"div",[["style","text-align: left;"]],null,null,null,null,null)),(l()(),u.pb(10,0,null,null,4,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.gotoPost(l.context.$implicit)&&u),u}),i.K,i.c)),u.ob(11,49152,null,0,r.j,[u.h,u.k,u.x],null,null),(l()(),u.pb(12,0,null,0,1,"ion-icon",[["name","book"],["slot","start"]],null,null,null,i.U,i.m)),u.ob(13,49152,null,0,r.B,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.Fb(-1,0,[" مطالعہ کریں "]))],(function(l,n){l(n,13,0,"book")}),(function(l,n){l(n,6,0,n.context.$implicit.title)}))}function m(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,8,null,null,null,null,null,null,null)),(l()(),u.pb(1,0,null,null,3,"ion-button",[["fill","outline"],["shape","round"]],null,[[null,"click"]],(function(l,n,t){var u=!0,e=l.component;return"click"===n&&(u=!1!==e.nextPage(e.nextPageToken)&&u),u}),i.K,i.c)),u.ob(2,49152,null,0,r.j,[u.h,u.k,u.x],{fill:[0,"fill"],shape:[1,"shape"]},null),(l()(),u.pb(3,0,null,0,1,"ion-icon",[["name","arrow-down-outline"],["slot","icon-only"]],null,null,null,i.U,i.m)),u.ob(4,49152,null,0,r.B,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.pb(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.pb(6,0,null,null,2,"ion-label",[],null,null,null,i.X,i.p)),u.ob(7,49152,null,0,r.M,[u.h,u.k,u.x],null,null),(l()(),u.Fb(-1,0,["مزید"]))],(function(l,n){l(n,2,0,"outline","round"),l(n,4,0,"arrow-down-outline")}),null)}function x(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"ion-spinner",[],null,null,null,i.jb,i.B)),u.ob(1,49152,null,0,r.ob,[u.h,u.k,u.x],null,null)],null,null)}function y(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,2,"ion-label",[["id","nextPageLabel"]],null,null,null,i.X,i.p)),u.ob(1,49152,null,0,r.M,[u.h,u.k,u.x],null,null),(l()(),u.Fb(-1,0,["❃— تمت —❃"]))],null,null)}function k(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,i.T,i.l)),u.ob(1,49152,null,0,r.A,[u.h,u.k,u.x],null,null),(l()(),u.pb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,i.pb,i.H)),u.ob(3,49152,null,0,r.yb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.pb(4,0,null,0,2,"ion-title",[["class","ion-text-center"]],null,null,null,i.ob,i.G)),u.ob(5,49152,null,0,r.wb,[u.h,u.k,u.x],null,null),(l()(),u.Fb(-1,0,[" مضامین - سخن اور اصلاحِ سخن "])),(l()(),u.pb(7,0,null,null,18,"ion-content",[],null,null,null,i.R,i.j)),u.ob(8,49152,null,0,r.t,[u.h,u.k,u.x],null,null),(l()(),u.pb(9,0,null,0,3,"ion-refresher",[["pullMin","70"],["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,t){var u=!0;return"ionRefresh"===n&&(u=!1!==l.component.doRefresh(t)&&u),u}),i.bb,i.s)),u.ob(10,49152,null,0,r.Z,[u.h,u.k,u.x],{pullMin:[0,"pullMin"]},null),(l()(),u.pb(11,0,null,0,1,"ion-refresher-content",[["pullingIcon","refresh"],["pullingText","صفحہ ری فریش کرنے کے لیے کھینچیے..."],["refreshingSpinner","circles"],["refreshingText","راہِ مضمونِ تازہ بند نہیں..."]],null,null,null,i.ab,i.t)),u.ob(12,49152,null,0,r.ab,[u.h,u.k,u.x],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(l()(),u.pb(13,0,null,0,3,"ion-slides",[["pager","true"]],null,null,null,i.ib,i.A)),u.ob(14,49152,null,0,r.nb,[u.h,u.k,u.x],{pager:[0,"pager"]},null),(l()(),u.eb(16777216,null,0,1,null,g)),u.ob(16,278528,null,0,s.i,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.eb(16777216,null,0,1,null,d)),u.ob(18,278528,null,0,s.i,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.pb(19,0,null,0,6,"div",[["class","nextPage ion-text-center"]],null,null,null,null,null)),(l()(),u.eb(16777216,null,null,1,null,m)),u.ob(21,16384,null,0,s.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.eb(16777216,null,null,1,null,x)),u.ob(23,16384,null,0,s.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.eb(16777216,null,null,1,null,y)),u.ob(25,16384,null,0,s.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,10,0,"70"),l(n,12,0,"refresh","صفحہ ری فریش کرنے کے لیے کھینچیے...","circles","راہِ مضمونِ تازہ بند نہیں..."),l(n,14,0,"true"),l(n,16,0,t.quotesArray),l(n,18,0,t.APIdata),l(n,21,0,!t.spin&&t.morePosts),l(n,23,0,t.spin),l(n,25,0,!t.morePosts&&0!=t.APIdata.length)}),null)}function P(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-tab4",[],null,null,null,k,f)),u.ob(1,114688,null,0,c,[a.a,p.c,h.m,r.Cb],null,null)],(function(l,n){l(n,1,0)}),null)}var v=u.lb("app-tab4",c,P,{},{},[]),w=t("gIcY");t.d(n,"Tab4PageModuleNgFactory",(function(){return C}));var C=u.mb(e,[],(function(l){return u.xb([u.yb(512,u.j,u.X,[[8,[o.a,v]],[3,u.j],u.v]),u.yb(4608,s.l,s.k,[u.s,[2,s.u]]),u.yb(4608,r.b,r.b,[u.x,u.g]),u.yb(4608,r.Db,r.Db,[r.b,u.j,u.p]),u.yb(4608,r.Gb,r.Gb,[r.b,u.j,u.p]),u.yb(4608,w.i,w.i,[]),u.yb(1073742336,s.b,s.b,[]),u.yb(1073742336,r.Ab,r.Ab,[]),u.yb(1073742336,w.h,w.h,[]),u.yb(1073742336,w.c,w.c,[]),u.yb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),u.yb(1073742336,e,e,[]),u.yb(1024,h.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);