import{T,H as g}from"./components.c16f33ca.js";import{_ as w}from"./LocLink.vue.f2f812aa.js";import{h as C,W as L,X as x,o as n,v as s,R as r,q as i,V as y,U as l,u as m,S as t,Y as p,Z as k}from"./entry.3187befc.js";import{q as v}from"./query.d7142edc.js";import{l as V}from"./html.94918048.js";import"./nuxt-link.a4db91c3.js";import"./index.5afe666e.js";import"./utils.108ab02b.js";import"./preview.d81fb5d3.js";const q={class:"text-xl font-bold"},z={class:"font-thin"},U=C({__name:"index",async setup(B){let o,c;const{locale:_}=L(),u=([o,c]=x(()=>v("blog").where({locale:_.value.toLowerCase()}).find()),o=await o,c(),o);function d(e){return e.replace(_.value.toLowerCase(),"")}return(e,H)=>{const f=T,b=g,h=w;return n(),s(p,null,[r(b,null,{default:i(()=>[r(f,null,{default:i(()=>[y(l(("localizedTitle"in e?e.localizedTitle:m(V))("blog.title")),1)]),_:1})]),_:1}),t("div",null,[t("h1",null,l(e.$t("blog.title")),1),t("ul",null,[(n(!0),s(p,null,k(m(u),a=>(n(),s("li",{key:a._path,class:"mb-3 border-b border-b-white/10 pb-3 last:border-b-0"},[r(h,{to:d(a._path),class:"items-baseline gap-1"},{default:i(()=>[t("h3",q,l(a.title),1),t("p",z,l(a.description),1)]),_:2},1032,["to"])]))),128))])])],64)}}});export{U as default};
