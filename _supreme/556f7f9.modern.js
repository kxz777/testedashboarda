(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{207:function(t,e,n){var r=n(27),o=n(143);t.exports=r?o:function(t){return Set.prototype.values.call(t)}},212:function(t,e,n){"use strict";n(8),n(10),n(213),n(215),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230);var r=Object.freeze(["Rythm","Music","Rhythm","Discord","Bot","Music Bot","Discord Bot","Largest","Largest Bot","Top.gg","Autoplay","Always online","Radio"]);e.a=(meta,t)=>{var e=meta.title||"Supreme Inc",n=meta.desc||"Music is meant to be enjoyed with others. Here at Rythm, we're making it possible to share and enjoy music with others around the world.",o=[...new Set((meta.keywords||[]).concat(r))].join(", "),c="https://supremebot.pages.dev"+t.$route.path;return{title:e,meta:[{hid:"title",name:"title",content:e},{hid:"description",name:"description",content:n},{hid:"keywords",name:"keywords",content:o},{hid:"twitter:title",name:"twitter:title",content:e},{hid:"twitter:description",name:"twitter:description",content:n},{hid:"twitter:url",name:"twitter:url",content:c},{hid:"og:title",prefix:"og: http://ogp.me/ns#",property:"og:title",content:e},{hid:"og:description",prefix:"og: http://ogp.me/ns#",property:"og:description",content:n},{hid:"og:url",prefix:"og: http://ogp.me/ns#",property:"og:url",content:c},{hid:"canonical",rel:"canonical",href:c}]}}},213:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(214);r({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return c.apply(this,arguments)}})},214:function(t,e,n){"use strict";var r=n(7),o=n(35);t.exports=function(){for(var t=r(this),e=o(t.add),n=0,c=arguments.length;n<c;n++)e.call(t,arguments[n]);return t}},215:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(216);r({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},216:function(t,e,n){"use strict";var r=n(7),o=n(35);t.exports=function(){for(var t,e=r(this),n=o(e.delete),c=!0,f=0,l=arguments.length;f<l;f++)t=n.call(e,arguments[f]),c=c&&t;return!!c}},217:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(28),f=n(7),l=n(35),d=n(87),h=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{difference:function(t){var e=f(this),n=new(d(e,c("Set")))(e),r=l(n.delete);return h(t,(function(t){r.call(n,t)})),n}})},218:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(7),f=n(42),l=n(207),d=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{every:function(t){var e=c(this),n=l(e),r=f(t,arguments.length>1?arguments[1]:void 0,3);return!d(n,(function(t,n){if(!r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},219:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(28),f=n(7),l=n(35),d=n(42),h=n(87),v=n(207),x=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{filter:function(t){var e=f(this),n=v(e),r=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(h(e,c("Set"))),w=l(o.add);return x(n,(function(t){r(t,t,e)&&w.call(o,t)}),{IS_ITERATOR:!0}),o}})},220:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(7),f=n(42),l=n(207),d=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{find:function(t){var e=c(this),n=l(e),r=f(t,arguments.length>1?arguments[1]:void 0,3);return d(n,(function(t,n){if(r(t,t,e))return n(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},221:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(28),f=n(7),l=n(35),d=n(87),h=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(t){var e=f(this),n=new(d(e,c("Set"))),r=l(e.has),o=l(n.add);return h(t,(function(t){r.call(e,t)&&o.call(n,t)})),n}})},222:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(7),f=n(35),l=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(t){var e=c(this),n=f(e.has);return!l(t,(function(t,r){if(!0===n.call(e,t))return r()}),{INTERRUPTED:!0}).stopped}})},223:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(28),f=n(7),l=n(35),d=n(143),h=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(t){var e=d(this),n=f(t),r=n.has;return"function"!=typeof r&&(n=new(c("Set"))(t),r=l(n.has)),!h(e,(function(t,e){if(!1===r.call(n,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},224:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(7),f=n(35),l=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(t){var e=c(this),n=f(e.has);return!l(t,(function(t,r){if(!1===n.call(e,t))return r()}),{INTERRUPTED:!0}).stopped}})},225:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(7),f=n(207),l=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{join:function(t){var e=c(this),n=f(e),r=void 0===t?",":String(t),o=[];return l(n,o.push,{that:o,IS_ITERATOR:!0}),o.join(r)}})},226:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(28),f=n(7),l=n(35),d=n(42),h=n(87),v=n(207),x=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{map:function(t){var e=f(this),n=v(e),r=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(h(e,c("Set"))),w=l(o.add);return x(n,(function(t){w.call(o,r(t,t,e))}),{IS_ITERATOR:!0}),o}})},227:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(7),f=n(35),l=n(207),d=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(t){var e=c(this),n=l(e),r=arguments.length<2,o=r?void 0:arguments[1];if(f(t),d(n,(function(n){r?(r=!1,o=n):o=t(o,n,n,e)}),{IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty set with no initial value");return o}})},228:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(7),f=n(42),l=n(207),d=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{some:function(t){var e=c(this),n=l(e),r=f(t,arguments.length>1?arguments[1]:void 0,3);return d(n,(function(t,n){if(r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},229:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(28),f=n(7),l=n(35),d=n(87),h=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(t){var e=f(this),n=new(d(e,c("Set")))(e),r=l(n.delete),o=l(n.add);return h(t,(function(t){r.call(n,t)||o.call(n,t)})),n}})},230:function(t,e,n){"use strict";var r=n(13),o=n(27),c=n(28),f=n(7),l=n(35),d=n(87),h=n(142);r({target:"Set",proto:!0,real:!0,forced:o},{union:function(t){var e=f(this),n=new(d(e,c("Set")))(e);return h(t,l(n.add),{that:n}),n}})},233:function(t,e,n){var content=n(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("6fa32b72",content,!0,{sourceMap:!1})},243:function(t,e,n){"use strict";n(233)},244:function(t,e,n){var r=n(17)(!1);r.push([t.i,".container[data-v-34f035ca]{justify-content:center;height:100%;flex-direction:column;flex:1 1 auto;grid-gap:50px;gap:50px;padding:0 32px;z-index:99}.beta-signup[data-v-34f035ca],.container[data-v-34f035ca]{display:flex;align-items:center}.beta-signup[data-v-34f035ca]{color:#fff;cursor:not-allowed;background:#373d81;box-shadow:0 4px 50px rgba(88,101,242,.1);border:none;border-radius:4px;font-size:16px;font-weight:700;padding:20px 57px}.soon-tag[data-v-34f035ca]{text-transform:uppercase;font-size:13px;padding:4px 8px;border-radius:100px;background-color:#fff;color:#5865f2;margin-right:12px}.text-container[data-v-34f035ca]{max-width:524px;display:flex;flex-direction:column;grid-gap:20px;gap:20px}.subtitle[data-v-34f035ca],.title[data-v-34f035ca]{text-align:center}.title[data-v-34f035ca]{color:#fff;font-size:42px;font-weight:800}.subtitle[data-v-34f035ca]{color:hsla(0,0%,100%,.7);font-size:18px;font-weight:400}.ribbon[data-v-34f035ca]{position:absolute;bottom:0;background:#5865f2;height:10px;width:100%}@media only screen and (max-width:720px){.title[data-v-34f035ca]{font-size:32px}.subtitle[data-v-34f035ca]{font-size:14px}.beta-signup[data-v-34f035ca]{padding:14px 32px;font-size:13px}.soon-tag[data-v-34f035ca]{font-size:10px}}",""]),t.exports=r},252:function(t,e,n){"use strict";n.r(e);var meta=n(212),r={head(){return Object(meta.a)({},this)},mounted(){this.$confetti.start({particles:[{type:"rect"}],defaultSize:7,defaultDropRate:2,particlesPerFrame:.05,windSpeedMax:0})}},o=(n(243),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"text-container"},[n("h1",{staticClass:"title"},[t._v("\n      Music is meant to be enjoyed with others.\n    ")]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("\n      Music has always been a shared experience. Rythm will be the service that will bring that experience online.\n    ")]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("\n      It’s almost time to find out what we’ve been working on. 👀\n    ")])]),t._v(" "),n("button",{staticClass:"beta-signup",attrs:{"aria-disabled":"true"}},[n("span",{staticClass:"soon-tag"},[t._v("coming soon")]),t._v("\n    Sign up for our beta\n  ")]),t._v(" "),n("div",{staticClass:"ribbon"})])}],!1,null,"34f035ca",null);e.default=component.exports}}]);