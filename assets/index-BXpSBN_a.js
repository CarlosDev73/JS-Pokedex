(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const P="https://CarlosDev73.github.io/JS-Pokedex/assets/pokemonIntro-DaD8_Lgf.mp3",M="https://CarlosDev73.github.io/JS-Pokedex/assets/errorScren3-SdTF40kY.png",T=document.querySelector(".black-button"),c=document.querySelector(".id-input"),g=document.querySelector(".pokemon-picture"),d=document.getElementById("name"),u=document.getElementById("height"),y=document.getElementById("weight"),w=document.getElementById("type-1"),E=document.getElementById("type-2");let a=0;const _=document.querySelector(".directional-right"),O=document.querySelector(".directional-left"),x=document.querySelector(".directional-up"),D=document.querySelector(".directional-down"),$=document.getElementById("playButton"),F=document.getElementById("pauseButton");let v=new Audio(P);v.volume=.55;const p=document.querySelector(".pname"),f=document.querySelector(".pheight"),k=document.querySelector(".pweight"),H=document.getElementById("hp"),I=document.getElementById("speed"),C=document.getElementById("attack"),B=document.getElementById("defense"),S=document.getElementById("spattack"),q=document.getElementById("spdefense"),h=document.querySelector(".rowdata1"),b=document.querySelector(".rowdata2"),L=document.querySelector(".rowdata3"),N=document.getElementById("white-button2"),A=document.getElementById("white-button1");let i=!0;const J=()=>{d.innerHTML="",u.innerHTML="",y.innerHTML="",w.innerHTML="",E.innerHTML="",H.innerHTML="",C.innerHTML="",B.innerHTML="",S.innerHTML="",q.innerHTML="",I.innerHTML=""},l=t=>{J(),fetch(`https://pokeapi.co/api/v2/pokemon/${t}`).then(e=>e.ok?e.json():e.json().then(o=>{throw new Error(o.message)})).then(e=>{g.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`,d.innerHTML=e.name,u.innerHTML=`${e.height/10} m`,y.innerHTML=`${e.weight/10} kg`,w.innerHTML=e.types[0].type.name;let o=e.types[0].type.name;K(o),E.innerHTML=e.types[1]?e.types[1].type.name:"___",a=e.id,H.innerHTML=e.stats[0].base_stat,C.innerHTML=e.stats[1].base_stat,B.innerHTML=e.stats[2].base_stat,S.innerHTML=e.stats[3].base_stat,q.innerHTML=e.stats[4].base_stat,I.innerHTML=e.stats[5].base_stat}).catch(e=>{if(t===""){const s=document.body;return d.innerHTML="insert a name or id",u.innerHTML="?",y.innerHTML="?",s.style.backgroundColor="var(--white)",g.src=M,0}const o=document.body;d.innerHTML=`${c.value} not found`,u.innerHTML="?",y.innerHTML="?",o.style.backgroundColor="var(--white)",g.src=M})};c.addEventListener("keydown",t=>{t.key==="Enter"&&T.click()});T.addEventListener("click",()=>l(c.value));const K=t=>{const e=document.body;return t==="grass"?e.style.backgroundColor="var(--type-grass)":t==="fire"?e.style.backgroundColor="var(--type-fire)":t==="water"?e.style.backgroundColor="var(--type-water)":t==="bug"?e.style.backgroundColor="var(--type-bug)":t==="normal"?e.style.backgroundColor="var(--type-normal)":t==="poison"?e.style.backgroundColor="var(--type-poison)":t==="electric"?e.style.backgroundColor="var(--type-electric)":t==="ground"?e.style.backgroundColor="var(--type-ground)":t==="fairy"?e.style.backgroundColor="var(--type-fairy)":t==="fighting"?e.style.backgroundColor="var(--type-fighting)":t==="psychic"?e.style.backgroundColor="var(--type-psychic)":t==="rock"?e.style.backgroundColor="var(--type-rock)":t==="ghost"?e.style.backgroundColor="var(--type-ghost)":t==="ice"?e.style.backgroundColor="var(--type-ice)":t==="dragon"?e.style.backgroundColor="var(--type-dragon)":t==="dark"?e.style.backgroundColor="var(--type-dark)":t==="steel"?e.style.backgroundColor="var(--type-steel)":t==="flying"?e.style.backgroundColor="var(--type-flying)":e.style.backgroundColor="var(--white)"};_.addEventListener("click",()=>{let t=a+1;if(t>1025)return 0;c.value=t,l(t)});x.addEventListener("click",()=>{let t=a+1;if(t>1025)return 0;c.value=t,l(t)});O.addEventListener("click",()=>{let t=a-1;if(t<1)return 0;c.value=t,l(t)});D.addEventListener("click",()=>{let t=a-1;if(t<1)return 0;c.value=t,l(t)});const U=()=>{i?(p.style.display="none",f.style.display="none",k.style.display="none",h.style.display="inline",b.style.display="inline",L.style.display="inline"):(p.style.display="inline",h.style.display="none",f.style.display="inline",b.style.display="none",k.style.display="inline",L.style.display="none"),i=!i},Y=()=>{if(i)return 0;i||(p.style.display="inline",h.style.display="none",f.style.display="inline",b.style.display="none",k.style.display="inline",L.style.display="none"),i=!i};N.addEventListener("click",()=>U());A.addEventListener("click",()=>Y());$.addEventListener("click",()=>v.play());F.addEventListener("click",()=>v.pause());