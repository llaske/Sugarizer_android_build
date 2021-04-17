/*!
 * jQuery Cookie Plugin v1.2
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,o,t){var n=/\+/g;function raw(e){return e}function decoded(e){return decodeURIComponent(e.replace(n," "))}e.cookie=function(t,n,r){if(void 0!==n&&!/Object/.test(Object.prototype.toString.call(n))){if(r=e.extend({},e.cookie.defaults,r),null===n&&(r.expires=-1),"number"==typeof r.expires){var i=r.expires,c=r.expires=new Date;c.setDate(c.getDate()+i)}return n=String(n),o.cookie=[encodeURIComponent(t),"=",r.raw?n:encodeURIComponent(n),r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}for(var u,a=(r=n||e.cookie.defaults||{}).raw?raw:decoded,d=o.cookie.split("; "),p=0;u=d[p]&&d[p].split("=");p++)if(a(u.shift())===t)return a(u.join("="));return null},e.cookie.defaults={},e.removeCookie=function(o,t){return null!==e.cookie(o,t)&&(e.cookie(o,null,t),!0)}}(jQuery,document);