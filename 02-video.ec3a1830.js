!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n);var o=n("1WSnx"),i=document.querySelector("iframe"),l=new Vimeo.Player(i);l.on("timeupdate",(0,o.throttle)((function(){a()}),1e3));var a=function(){l.getCurrentTime().then((function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e))}))};l.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")))}();
//# sourceMappingURL=02-video.ec3a1830.js.map
