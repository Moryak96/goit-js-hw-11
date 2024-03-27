import{S as f,i as a}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function p(s){const t="https://pixabay.com/api/",o=new URLSearchParams({key:"43094029-935243e587570d50c5a59b02c",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${t}?${o}`;return fetch(i).then(e=>e.json())}const m=s=>s.map(t=>`<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
      <ul class="gallery-image-info">
        <li>
          <h3>Likes</h3>
          <p>${t.likes}</p>
        </li>
        <li>
          <h3>Views</h3>
          <p>${t.views}</p>
        </li>
        <li>
          <h3>Comments</h3>
          <p>${t.comments}</p>
        </li>
        <li>
          <h3>Downloads</h3>
          <p>${t.downloads}</p>
        </li>
      </ul>
    </a>
    </li>`).join(""),l=document.querySelector(".search-form"),c=document.querySelector(".gallery"),h=document.querySelector(".loader"),u=new f(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",d);function d(s){s.preventDefault();const t=l.elements.query.value.trim();if(!t)return a.error({title:"Error",message:"Please fill in the search field!",position:"topRight"});y(),c.innerHTML="",p(t).then(o=>{const i=m(o.hits);c.innerHTML=i,u.on("show.simplelightbox",function(){}),u.refresh(),o.hits.length===0&&a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(o=>{a.error({title:"Error",message:"Sorry, there was an error processing your request. Please try again later!",position:"topRight"})}).finally(()=>{l.reset(),g()})}function y(){h.classList.remove("hidden")}function g(){h.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
