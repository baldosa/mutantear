!function(){"use strict";var t=ReactDOM,c=function(t){return Object.values(t).join(" ")},n=function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"box",n="";return null==t||t.map((function(e,a){var o=e||{},r=o.hOffset,i=void 0===r?"0px":r,s=o.vOffset,l=void 0===s?"0px":s,d=o.blur,u=void 0===d?"0px":d,m=o.spreed,h=void 0===m?"0px":m,v=o.color,b=void 0===v?"#7090b0":v,f=o.isInset,g=void 0!==f&&f?"inset":"",w="".concat(i," ").concat(l," ").concat(u),p=a+1>=t.length?"":", ";n+="text"===c?"".concat(w," ").concat(b).concat(p):"".concat(w," ").concat(h," ").concat(b," ").concat(g).concat(p)})),n||"none"},e=function(t){var e=t.attributes,a=t.clientId,o=e.alignment,r=e.frameBorder,i=e.frameBRadius,s=e.frameBoxShadow,l=e.iframeStyle,d=l.width,u=l.height;return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n        .wp-block-scb-sound-cloud {\n            text-align:".concat(o,";\n        }\n        #scbSoundCloud-").concat(a," .mainWidget{\n            width:").concat(d,";\n            height:").concat(u,";\n        }\n\t\t#scbSoundCloud-").concat(a," iframe{\n            border: ").concat(c(r),";\n            border-radius: ").concat(c(i),";\n            box-shadow: ").concat(n((null==s?void 0:s.shadow)||s),";\n        }\n        ").replace(/\s+/g," ")}})},a=function(t){var c=t.attributes,n=t.isBackend,e=t.custom,a=void 0===e?{}:e,o=c.options,r=c.tracks,i=o.isAutoPlay,s=o.color,l=o.isBuying,d=o.isSharing,u=o.isDownload,m=o.isArtWork,h=o.isPlayCount,v=o.isUser,b=o.isSingleActive,f=o.isComments,g=o.isVisual,w=o.isTeaser,p=o.isHideRelated;return r.map((function(t,c){return React.createElement("div",{key:c,className:"mainWidget ".concat(n&&a.activeIndex===c?"scbNowEditing":""),onClick:function(){return n?a.setActiveIndex(c):null}},React.createElement("iframe",{key:c,id:"sc-widget",width:"100%",height:"100%",scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=".concat(t.url,"&color=%23").concat(s.replace("#","").substr(0,6),"&auto_play=").concat(i,"&buying=").concat(l,"&sharing=").concat(d,"&download=").concat(u,"&show_artwork=").concat(m,"&show_playcount=").concat(h,"&show_user=").concat(v,"&single_active=").concat(b,"&show_comments=").concat(f,"&visual=").concat(g,"&show_teaser=").concat(w,"&hide_related=").concat(p,"&start_track=").concat(t.startTrack)}))}))};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-scb-sound-cloud").forEach((function(c){var n=JSON.parse(c.dataset.attributes);(0,t.render)(React.createElement(React.Fragment,null,React.createElement(e,{attributes:n,clientId:n.cId}),React.createElement(a,{attributes:n,clientId:n.cId})),c),null==c||c.removeAttribute("data-attributes")}))}))}();
//# sourceMappingURL=script.js.map