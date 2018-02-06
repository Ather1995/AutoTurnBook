(function(window){var svgSprite='<svg><symbol id="icon-bofang" viewBox="0 0 1024 1024"><path d="M500.864 952.64c-239.648 0-434.656-194.976-434.656-434.624 0-239.68 195.008-434.624 434.656-434.624 239.68 0 434.656 194.944 434.656 434.624 0 239.68-195.008 434.624-434.656 434.624m0-933.28C225.92 19.36 2.24 243.104 2.24 518.016 2.24 792.96 225.92 1016.64 500.864 1016.64s498.656-223.68 498.656-498.624c0-274.912-223.68-498.624-498.656-498.624"  ></path><path d="M404.864 326.016a32 32 0 0 0-32 32v320a32 32 0 0 0 64 0v-320a32 32 0 0 0-32-32M596.864 326.016a32 32 0 0 0-32 32v320a32 32 0 0 0 64 0v-320a32 32 0 0 0-32-32"  ></path></symbol><symbol id="icon-kuaitui" viewBox="0 0 1024 1024"><path d="M509.696 944.832c-239.68 0-434.656-194.976-434.656-434.656 0-239.648 195.008-434.624 434.656-434.624S944.32 270.528 944.32 510.176c0 239.68-194.976 434.656-434.624 434.656m0-933.28C234.752 11.552 11.04 235.264 11.04 510.176c0 274.976 223.68 498.656 498.656 498.656 274.944 0 498.624-223.68 498.624-498.656 0-274.88-223.68-498.624-498.624-498.624"  ></path><path d="M542.688 467.392l158.976-68.544v222.72L542.72 552.96v-85.6z m-64-62.688v210.976l-189.024-105.504 189.024-105.472z m254.976-86.496a31.904 31.904 0 0 0-12.64 2.624l-178.336 76.864v-47.52a32 32 0 0 0-32-31.968 30.72 30.72 0 0 0-15.36 4.48l-0.224-0.448-286.72 160 0.256 0.448a31.52 31.52 0 0 0-16.64 27.52c0 11.968 6.88 22.016 16.64 27.52l-0.224 0.384 286.688 160 0.224-0.384a31.04 31.04 0 0 0 15.36 4.48 32 32 0 0 0 32-32v-47.52l178.336 76.896a32 32 0 0 0 44.64-29.344V350.144a32 32 0 0 0-32-31.968z"  ></path></symbol><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M500.864 83.392c239.68 0 434.656 194.976 434.656 434.624 0 239.648-195.008 434.656-434.656 434.656S66.24 757.664 66.24 518.016 261.216 83.392 500.864 83.392m0 933.28c274.944 0 498.656-223.712 498.656-498.656S775.84 19.392 500.864 19.392C225.92 19.392 2.24 243.072 2.24 518.016S225.92 1016.672 500.864 1016.672"  ></path><path d="M436.864 412.512l189.024 105.504-189.024 105.504v-211.008z m-32 297.504a31.04 31.04 0 0 0 15.36-4.48l0.224 0.416 286.72-160-0.256-0.416a31.584 31.584 0 0 0 16.64-27.52 31.552 31.552 0 0 0-16.64-27.52l0.224-0.416-286.688-160-0.224 0.416a30.72 30.72 0 0 0-15.36-4.48 32 32 0 0 0-32 32v320a32 32 0 0 0 32 32z"  ></path></symbol><symbol id="icon-kuaijin" viewBox="0 0 1024 1024"><path d="M510.432 944.832c-239.648 0-434.624-194.976-434.624-434.656 0-239.648 194.976-434.624 434.624-434.624 239.68 0 434.656 194.976 434.656 434.624 0 239.68-195.008 434.656-434.656 434.656m0-933.28C235.52 11.552 11.84 235.264 11.84 510.176c0 274.976 223.68 498.656 498.624 498.656s498.656-223.68 498.656-498.656c0-274.88-223.68-498.624-498.656-498.624"  ></path><path d="M318.432 621.536v-222.688l159.04 68.544v85.6l-159.04 68.544z m412.032-111.328L541.44 615.68v-210.976l189.024 105.504z m81.28-27.968l-286.688-160-0.256 0.448a31.04 31.04 0 0 0-15.36-4.48 31.968 31.968 0 0 0-31.968 32v47.488l-178.368-76.896v0.064a32 32 0 0 0-44.64 29.344v320a32 32 0 0 0 44.64 29.344v0.032l178.336-76.896v47.52h0.032a32 32 0 0 0 32 32 31.296 31.296 0 0 0 15.36-4.48l0.224 0.416 286.656-160-0.224-0.416a31.616 31.616 0 0 0 16.64-27.52 31.584 31.584 0 0 0-16.64-27.52l0.224-0.448z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)