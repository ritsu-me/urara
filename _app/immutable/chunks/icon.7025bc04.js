import{a1 as p,a2 as b}from"./index.85533aa3.js";import{w as r}from"./index.a9b6117b.js";function v(a){const e=a-1;return e*e*e+1}function R(a,{delay:e=0,duration:s=400,easing:n=b}={}){const o=+getComputedStyle(a).opacity;return{delay:e,duration:s,easing:n,css:i=>`opacity: ${i*o}`}}function S(a,{delay:e=0,duration:s=400,easing:n=v,x:o=0,y:i=0,opacity:g=0}={}){const c=getComputedStyle(a),m=+c.opacity,d=c.transform==="none"?"":c.transform,y=m*(1-g),[u,x]=p(o),[f,k]=p(i);return{delay:e,duration:s,easing:n,css:(l,h)=>`
			transform: ${d} translate(${(1-l)*u}${x}, ${(1-l)*f}${k});
			opacity: ${m-y*h}`}}const _={},$=r([]),A=r([]),C=r({}),O=[{name:"cmyk",text:"🖨 Light"},{name:"dracula",text:"🧛 Dark"},{name:"valentine",text:"🌸 Valentine"},{name:"aqua",text:"💦 Aqua"},{name:"synthwave",text:"🌃 Synthwave"},{name:"night",text:"🌃 Night"},{name:"lofi",text:"🎶 Lo-Fi"},{name:"lemonade",text:"🍋 Lemonade"},{name:"cupcake",text:"🧁 Cupcake"},{name:"garden",text:"🏡 Garden"},{name:"retro",text:"🌇 Retro"},{name:"black",text:"🖤 Black"}],U={},L={nav:[{text:"Get Started",link:"/hello-world"},{text:"Elements",link:"/hello-world/elements"}]},P={nav:[{text:"Feed",link:"/atom.xml"},{text:"Sitemap",link:"/sitemap.xml"}]},T={locales:"ja-JP",options:{year:"2-digit",weekday:"long",month:"short",day:"numeric"}},t={protocol:{}.URARA_SITE_PROTOCOL??!1?"http://":"https://",domain:{}.URARA_SITE_DOMAIN??"urara.r1tsu.com",title:"Notebook",subtitle:"Ritsu Yuzaki's blog site.",lang:"ja-JP",description:"Powered by Urara, The Svelte engine.",author:{avatar:"/assets/maskable@512.png",name:"由崎律 (Ritsu Yuzaki)",status:"🖥",bio:`限界高校生
フリーランスエンジニア`},themeColor:"#ffce53"},j={src:t.protocol+t.domain+"/favicon.png",sizes:"48x48",type:"image/png"},E={180:{src:t.protocol+t.domain+"/assets/any@180.png",sizes:"180x180",type:"image/png"},192:{src:t.protocol+t.domain+"/assets/any@192.png",sizes:"192x192",type:"image/png"},512:{src:t.protocol+t.domain+"/assets/any@512.png",sizes:"512x512",type:"image/png"}},I={192:{src:t.protocol+t.domain+"/assets/maskable@192.png",sizes:"192x192",type:"image/png"},512:{src:t.protocol+t.domain+"/assets/maskable@512.png",sizes:"512x512",type:"image/png"}};export{E as a,L as b,O as c,S as d,$ as e,j as f,A as g,U as h,R as i,T as j,P as k,I as m,_ as p,t as s,C as t};
