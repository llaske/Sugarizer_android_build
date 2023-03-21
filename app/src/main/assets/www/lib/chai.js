(function(){function require(e){var t=require.modules[e];if(!t)throw new Error('failed to require "'+e+'"');return"exports"in t||"function"!=typeof t.definition||(t.client=t.component=!0,t.definition.call(this,t.exports={},t),delete t.definition),t.exports}require.loader="component",require.helper={},require.helper.semVerSort=function(e,t){for(var r=e.version.split("."),i=t.version.split("."),n=0;n<r.length;++n){var s=parseInt(r[n],10),o=parseInt(i[n],10);if(s!==o)return s>o?1:-1;var a=r[n].substr((""+s).length),c=i[n].substr((""+o).length);if(""===a&&""!==c)return 1;if(""!==a&&""===c)return-1;if(""!==a&&""!==c)return a>c?1:-1}return 0},require.latest=function(e,t){function showError(e){throw new Error('failed to find latest module of "'+e+'"')}var r=/(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;/(.*)~(.*)/.test(e)||showError(e);for(var i=Object.keys(require.modules),n=[],s=[],o=0;o<i.length;o++){var a=i[o];if(new RegExp(e+"@").test(a)){var c=a.substr(e.length+1);null!=r.exec(a)?n.push({version:c,name:a}):s.push({version:c,name:a})}}if(0===n.concat(s).length&&showError(e),n.length>0){var u=n.sort(require.helper.semVerSort).pop().name;return!0===t?u:require(u)}u=s.sort((function(e,t){return e.name>t.name}))[0].name;return!0===t?u:require(u)},require.modules={},require.register=function(e,t){require.modules[e]={definition:t}},require.define=function(e,t){require.modules[e]={exports:t}},require.register("chaijs~assertion-error@1.0.0",(function(e,t){
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function exclude(){var e=[].slice.call(arguments);function excludeProps(t,r){Object.keys(r).forEach((function(i){~e.indexOf(i)||(t[i]=r[i])}))}return function extendExclude(){for(var e=[].slice.call(arguments),t=0,r={};t<e.length;t++)excludeProps(r,e[t]);return r}}function AssertionError(e,t,r){var i=exclude("name","message","stack","constructor","toJSON")(t||{});for(var n in this.message=e||"Unspecified AssertionError",this.showDiff=!1,i)this[n]=i[n];(r=r||arguments.callee)&&Error.captureStackTrace&&Error.captureStackTrace(this,r)}
/*!
 * Inherit from Error.prototype
 */
/*!
 * Primary Exports
 */
t.exports=AssertionError,AssertionError.prototype=Object.create(Error.prototype),
/*!
 * Statically set name
 */
AssertionError.prototype.name="AssertionError",
/*!
 * Ensure correct constructor
 */
AssertionError.prototype.constructor=AssertionError,AssertionError.prototype.toJSON=function(e){var t=exclude("constructor","toJSON","stack")({name:this.name},this);return!1!==e&&this.stack&&(t.stack=this.stack),t}})),require.register("chaijs~type-detect@0.1.1",(function(e,t){
/*!
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Primary Exports
 */
e=t.exports=getType;
/*!
 * Detectable javascript natives
 */var r={"[object Array]":"array","[object RegExp]":"regexp","[object Function]":"function","[object Arguments]":"arguments","[object Date]":"date"};function getType(e){var t=Object.prototype.toString.call(e);return r[t]?r[t]:null===e?"null":void 0===e?"undefined":e===Object(e)?"object":typeof e}function Library(){this.tests={}}e.Library=Library,Library.prototype.of=getType,Library.prototype.define=function(e,t){return 1===arguments.length?this.tests[e]:(this.tests[e]=t,this)},Library.prototype.test=function(e,t){if(t===getType(e))return!0;var r=this.tests[t];if(r&&"regexp"===getType(r))return r.test(e);if(r&&"function"===getType(r))return r(e);throw new ReferenceError('Type test "'+t+'" not defined or invalid.')}})),require.register("chaijs~deep-eql@0.1.3",(function(e,t){
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var r,i=require("chaijs~type-detect@0.1.1");
/*!
 * Buffer.isBuffer browser shim
 */try{r=require("buffer").Buffer}catch(e){(r={}).isBuffer=function(){return!1}}
/*!
 * Primary Export
 */function deepEqual(e,t,n){return!!sameValue(e,t)||("date"===i(e)?
/*!
 * Compare two Date objects by asserting that
 * the time values are equal using `saveValue`.
 *
 * @param {Date} a
 * @param {Date} b
 * @return {Boolean} result
 */
function dateEqual(e,t){return"date"===i(t)&&sameValue(e.getTime(),t.getTime())}
/*!
 * Compare two regular expressions by converting them
 * to string and checking for `sameValue`.
 *
 * @param {RegExp} a
 * @param {RegExp} b
 * @return {Boolean} result
 */(e,t):"regexp"===i(e)?function regexpEqual(e,t){return"regexp"===i(t)&&sameValue(e.toString(),t.toString())}
/*!
 * Assert deep equality of two `arguments` objects.
 * Unfortunately, these must be sliced to arrays
 * prior to test to ensure no bad behavior.
 *
 * @param {Arguments} a
 * @param {Arguments} b
 * @param {Array} memoize (optional)
 * @return {Boolean} result
 */(e,t):r.isBuffer(e)?
/*!
 * Extension to `iterableEqual` specifically
 * for Node.js Buffers.
 *
 * @param {Buffer} a
 * @param {Mixed} b
 * @return {Boolean} result
 */
function bufferEqual(e,t){return!!r.isBuffer(t)&&iterableEqual(e,t)}
/*!
 * Block for `objectEqual` ensuring non-existing
 * values don't get in.
 *
 * @param {Mixed} object
 * @return {Boolean} result
 */(e,t):"arguments"===i(e)?function argumentsEqual(e,t,r){return"arguments"===i(t)&&(e=[].slice.call(e),t=[].slice.call(t),deepEqual(e,t,r))}
/*!
 * Get enumerable properties of a given object.
 *
 * @param {Object} a
 * @return {Array} property names
 */(e,t,n):!!
/*!
 * Compare the types of two given objects and
 * return if they are equal. Note that an Array
 * has a type of `array` (not `object`) and arguments
 * have a type of `arguments` (not `array`/`object`).
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */
function typeEqual(e,t){return i(e)===i(t)}(e,t)&&("object"!==i(e)&&"object"!==i(t)&&"array"!==i(e)&&"array"!==i(t)?sameValue(e,t):
/*!
 * Recursively check the equality of two objects.
 * Once basic sameness has been established it will
 * defer to `deepEqual` for each enumerable key
 * in the object.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */
function objectEqual(e,t,r){if(!isValue(e)||!isValue(t))return!1;if(e.prototype!==t.prototype)return!1;var i,n;if(r){for(i=0;i<r.length;i++)if(r[i][0]===e&&r[i][1]===t||r[i][0]===t&&r[i][1]===e)return!0}else r=[];try{var s=enumerable(e),o=enumerable(t)}catch(e){return!1}if(s.sort(),o.sort(),!iterableEqual(s,o))return!1;for(r.push([e,t]),i=s.length-1;i>=0;i--)if(!deepEqual(e[n=s[i]],t[n],r))return!1;return!0}(e,t,n)))}
/*!
 * Strict (egal) equality test. Ensures that NaN always
 * equals NaN and `-0` does not equal `+0`.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} equal match
 */function sameValue(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function enumerable(e){var t=[];for(var r in e)t.push(r);return t}
/*!
 * Simple equality for flat iterable objects
 * such as Arrays or Node.js buffers.
 *
 * @param {Iterable} a
 * @param {Iterable} b
 * @return {Boolean} result
 */function iterableEqual(e,t){if(e.length!==t.length)return!1;for(var r=0,i=!0;r<e.length;r++)if(e[r]!==t[r]){i=!1;break}return i}function isValue(e){return null!=e}t.exports=deepEqual})),require.register("chai",(function(e,t){t.exports=require("chai/lib/chai.js")})),require.register("chai/lib/chai.js",(function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=[];
/*!
 * Chai version
 */(e=t.exports={}).version="2.1.0",
/*!
 * Assertion Error
 */
e.AssertionError=require("chaijs~assertion-error@1.0.0");
/*!
 * Utils for plugins (not exported)
 */
var i=require("chai/lib/chai/utils/index.js");e.use=function(e){return~r.indexOf(e)||(e(this,i),r.push(e)),this},
/*!
 * Utility Functions
 */
e.util=i;
/*!
 * Configuration
 */
var n=require("chai/lib/chai/config.js");e.config=n;
/*!
 * Primary `Assertion` prototype
 */
var s=require("chai/lib/chai/assertion.js");e.use(s);
/*!
 * Core Assertions
 */
var o=require("chai/lib/chai/core/assertions.js");e.use(o);
/*!
 * Expect interface
 */
var a=require("chai/lib/chai/interface/expect.js");e.use(a);
/*!
 * Should interface
 */
var c=require("chai/lib/chai/interface/should.js");e.use(c);
/*!
 * Assert interface
 */
var u=require("chai/lib/chai/interface/assert.js");e.use(u)})),require.register("chai/lib/chai/assertion.js",(function(e,t){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=require("chai/lib/chai/config.js");t.exports=function(e,t){
/*!
   * Module dependencies.
   */
var i=e.AssertionError,n=t.flag;
/*!
   * Module export.
   */
/*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * @api private
   */
function Assertion(e,t,r){n(this,"ssfi",r||arguments.callee),n(this,"object",e),n(this,"message",t)}e.Assertion=Assertion,Object.defineProperty(Assertion,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),r.includeStack},set:function(e){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),r.includeStack=e}}),Object.defineProperty(Assertion,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),r.showDiff},set:function(e){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),r.showDiff=e}}),Assertion.addProperty=function(e,r){t.addProperty(this.prototype,e,r)},Assertion.addMethod=function(e,r){t.addMethod(this.prototype,e,r)},Assertion.addChainableMethod=function(e,r,i){t.addChainableMethod(this.prototype,e,r,i)},Assertion.overwriteProperty=function(e,r){t.overwriteProperty(this.prototype,e,r)},Assertion.overwriteMethod=function(e,r){t.overwriteMethod(this.prototype,e,r)},Assertion.overwriteChainableMethod=function(e,r,i){t.overwriteChainableMethod(this.prototype,e,r,i)},
/*!
   * ### .assert(expression, message, negateMessage, expected, actual)
   *
   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
   *
   * @name assert
   * @param {Philosophical} expression to be tested
   * @param {String or Function} message or function that returns message to display if fails
   * @param {String or Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
   * @param {Mixed} expected value (remember to check for negation)
   * @param {Mixed} actual (optional) will default to `this.obj`
   * @api private
   */
Assertion.prototype.assert=function(e,s,o,a,c,u){var h=t.test(this,arguments);if(!0!==u&&(u=!1),!0!==r.showDiff&&(u=!1),!h){s=t.getMessage(this,arguments);var l=t.getActual(this,arguments);throw new i(s,{actual:l,expected:a,showDiff:u},r.includeStack?this.assert:n(this,"ssfi"))}},
/*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
Object.defineProperty(Assertion.prototype,"_obj",{get:function(){return n(this,"object")},set:function(e){n(this,"object",e)}})}})),require.register("chai/lib/chai/config.js",(function(e,t){t.exports={includeStack:!1,showDiff:!0,truncateThreshold:40}})),require.register("chai/lib/chai/core/assertions.js",(function(e,t){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t){var r=e.Assertion,i=(Object.prototype.toString,t.flag);function an(e,r){r&&i(this,"message",r),e=e.toLowerCase();var n=i(this,"object"),s=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an ":"a ";this.assert(e===t.type(n),"expected #{this} to be "+s+e,"expected #{this} not to be "+s+e)}function includeChainingBehavior(){i(this,"contains",!0)}function include(e,n){n&&i(this,"message",n);var s=i(this,"object"),o=!1;if("array"===t.type(s)&&"object"===t.type(e)){for(var a in s)if(t.eql(s[a],e)){o=!0;break}}else if("object"===t.type(e)){if(!i(this,"negate")){for(var c in e)new r(s).property(c,e[c]);return}var u={};for(var c in e)u[c]=s[c];o=t.eql(u,e)}else o=s&&~s.indexOf(e);this.assert(o,"expected #{this} to include "+t.inspect(e),"expected #{this} to not include "+t.inspect(e))}function checkArguments(){var e=i(this,"object"),t=Object.prototype.toString.call(e);this.assert("[object Arguments]"===t,"expected #{this} to be arguments but got "+t,"expected #{this} to not be arguments")}function assertEqual(e,t){t&&i(this,"message",t);var r=i(this,"object");if(i(this,"deep"))return this.eql(e);this.assert(e===r,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",e,this._obj,!0)}function assertEql(e,r){r&&i(this,"message",r),this.assert(t.eql(e,i(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",e,this._obj,!0)}function assertAbove(e,t){t&&i(this,"message",t);var n=i(this,"object");if(i(this,"doLength")){new r(n,t).to.have.property("length");var s=n.length;this.assert(s>e,"expected #{this} to have a length above #{exp} but got #{act}","expected #{this} to not have a length above #{exp}",e,s)}else this.assert(n>e,"expected #{this} to be above "+e,"expected #{this} to be at most "+e)}function assertLeast(e,t){t&&i(this,"message",t);var n=i(this,"object");if(i(this,"doLength")){new r(n,t).to.have.property("length");var s=n.length;this.assert(s>=e,"expected #{this} to have a length at least #{exp} but got #{act}","expected #{this} to have a length below #{exp}",e,s)}else this.assert(n>=e,"expected #{this} to be at least "+e,"expected #{this} to be below "+e)}function assertBelow(e,t){t&&i(this,"message",t);var n=i(this,"object");if(i(this,"doLength")){new r(n,t).to.have.property("length");var s=n.length;this.assert(s<e,"expected #{this} to have a length below #{exp} but got #{act}","expected #{this} to not have a length below #{exp}",e,s)}else this.assert(n<e,"expected #{this} to be below "+e,"expected #{this} to be at least "+e)}function assertMost(e,t){t&&i(this,"message",t);var n=i(this,"object");if(i(this,"doLength")){new r(n,t).to.have.property("length");var s=n.length;this.assert(s<=e,"expected #{this} to have a length at most #{exp} but got #{act}","expected #{this} to have a length above #{exp}",e,s)}else this.assert(n<=e,"expected #{this} to be at most "+e,"expected #{this} to be above "+e)}function assertInstanceOf(e,r){r&&i(this,"message",r);var n=t.getName(e);this.assert(i(this,"object")instanceof e,"expected #{this} to be an instance of "+n,"expected #{this} to not be an instance of "+n)}function assertOwnProperty(e,r){r&&i(this,"message",r);var n=i(this,"object");this.assert(n.hasOwnProperty(e),"expected #{this} to have own property "+t.inspect(e),"expected #{this} to not have own property "+t.inspect(e))}function assertLength(e,t){t&&i(this,"message",t);var n=i(this,"object");new r(n,t).to.have.property("length");var s=n.length;this.assert(s==e,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",e,s)}function assertKeys(e){var r,n=i(this,"object"),s=!0,o="keys must be given single argument of Array|Object|String, or multiple String arguments";switch(t.type(e)){case"array":if(arguments.length>1)throw new Error(o);break;case"object":if(arguments.length>1)throw new Error(o);e=Object.keys(e);break;default:e=Array.prototype.slice.call(arguments)}if(!e.length)throw new Error("keys required");var a=Object.keys(n),c=e,u=e.length,h=i(this,"any"),l=i(this,"all");(h||l||(l=!0),h)&&(s=c.filter((function(e){return~a.indexOf(e)})).length>0);if(l&&(s=e.every((function(e){return~a.indexOf(e)})),i(this,"negate")||i(this,"contains")||(s=s&&e.length==a.length)),u>1){var f=(e=e.map((function(e){return t.inspect(e)}))).pop();l&&(r=e.join(", ")+", and "+f),h&&(r=e.join(", ")+", or "+f)}else r=t.inspect(e[0]);r=(u>1?"keys ":"key ")+r,r=(i(this,"contains")?"contain ":"have ")+r,this.assert(s,"expected #{this} to "+r,"expected #{this} to not "+r,c.slice(0).sort(),a.sort(),!0)}function assertThrows(e,n,s){s&&i(this,"message",s);var o=i(this,"object");new r(o,s).is.a("function");var a=!1,c=null,u=null,h=null;0===arguments.length?(n=null,e=null):e&&(e instanceof RegExp||"string"==typeof e)?(n=e,e=null):e&&e instanceof Error?(c=e,e=null,n=null):"function"==typeof e?"Error"===(u=e.prototype.name||e.name)&&e!==Error&&(u=(new e).name):e=null;try{o()}catch(r){if(c)return this.assert(r===c,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}",c instanceof Error?c.toString():c,r instanceof Error?r.toString():r),i(this,"object",r),this;if(e&&(this.assert(r instanceof e,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp} but #{act} was thrown",u,r instanceof Error?r.toString():r),!n))return i(this,"object",r),this;var l="object"===t.type(r)&&"message"in r?r.message:""+r;if(null!=l&&n&&n instanceof RegExp)return this.assert(n.exec(l),"expected #{this} to throw error matching #{exp} but got #{act}","expected #{this} to throw error not matching #{exp}",n,l),i(this,"object",r),this;if(null!=l&&n&&"string"==typeof n)return this.assert(~l.indexOf(n),"expected #{this} to throw error including #{exp} but got #{act}","expected #{this} to throw error not including #{act}",n,l),i(this,"object",r),this;a=!0,h=r}var f="",p=null!==u?u:c?"#{exp}":"an error";a&&(f=" but #{act} was thrown"),this.assert(!0===a,"expected #{this} to throw "+p+f,"expected #{this} to not throw "+p+f,c instanceof Error?c.toString():c,h instanceof Error?h.toString():h),i(this,"object",h)}function isSubsetOf(e,t,r){return e.every((function(e){return r?t.some((function(t){return r(e,t)})):-1!==t.indexOf(e)}))}function assertChanges(e,t,n){n&&i(this,"message",n);var s=i(this,"object");new r(e,n).to.have.property(t),new r(s).is.a("function");var o=e[t];s(),this.assert(o!==e[t],"expected ."+t+" to change","expected ."+t+" to not change")}function assertIncreases(e,t,n){n&&i(this,"message",n);var s=i(this,"object");new r(e,n).to.have.property(t),new r(s).is.a("function");var o=e[t];s(),this.assert(e[t]-o>0,"expected ."+t+" to increase","expected ."+t+" to not increase")}function assertDecreases(e,t,n){n&&i(this,"message",n);var s=i(this,"object");new r(e,n).to.have.property(t),new r(s).is.a("function");var o=e[t];s(),this.assert(e[t]-o<0,"expected ."+t+" to decrease","expected ."+t+" to not decrease")}["to","be","been","is","and","has","have","with","that","which","at","of","same"].forEach((function(e){r.addProperty(e,(function(){return this}))})),r.addProperty("not",(function(){i(this,"negate",!0)})),r.addProperty("deep",(function(){i(this,"deep",!0)})),r.addProperty("any",(function(){i(this,"any",!0),i(this,"all",!1)})),r.addProperty("all",(function(){i(this,"all",!0),i(this,"any",!1)})),r.addChainableMethod("an",an),r.addChainableMethod("a",an),r.addChainableMethod("include",include,includeChainingBehavior),r.addChainableMethod("contain",include,includeChainingBehavior),r.addChainableMethod("contains",include,includeChainingBehavior),r.addChainableMethod("includes",include,includeChainingBehavior),r.addProperty("ok",(function(){this.assert(i(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")})),r.addProperty("true",(function(){this.assert(!0===i(this,"object"),"expected #{this} to be true","expected #{this} to be false",!this.negate)})),r.addProperty("false",(function(){this.assert(!1===i(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!this.negate)})),r.addProperty("null",(function(){this.assert(null===i(this,"object"),"expected #{this} to be null","expected #{this} not to be null")})),r.addProperty("undefined",(function(){this.assert(void 0===i(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")})),r.addProperty("exist",(function(){this.assert(null!=i(this,"object"),"expected #{this} to exist","expected #{this} to not exist")})),r.addProperty("empty",(function(){var e=i(this,"object"),t=e;Array.isArray(e)||"string"==typeof object?t=e.length:"object"==typeof e&&(t=Object.keys(e).length),this.assert(!t,"expected #{this} to be empty","expected #{this} not to be empty")})),r.addProperty("arguments",checkArguments),r.addProperty("Arguments",checkArguments),r.addMethod("equal",assertEqual),r.addMethod("equals",assertEqual),r.addMethod("eq",assertEqual),r.addMethod("eql",assertEql),r.addMethod("eqls",assertEql),r.addMethod("above",assertAbove),r.addMethod("gt",assertAbove),r.addMethod("greaterThan",assertAbove),r.addMethod("least",assertLeast),r.addMethod("gte",assertLeast),r.addMethod("below",assertBelow),r.addMethod("lt",assertBelow),r.addMethod("lessThan",assertBelow),r.addMethod("most",assertMost),r.addMethod("lte",assertMost),r.addMethod("within",(function(e,t,n){n&&i(this,"message",n);var s=i(this,"object"),o=e+".."+t;if(i(this,"doLength")){new r(s,n).to.have.property("length");var a=s.length;this.assert(a>=e&&a<=t,"expected #{this} to have a length within "+o,"expected #{this} to not have a length within "+o)}else this.assert(s>=e&&s<=t,"expected #{this} to be within "+o,"expected #{this} to not be within "+o)})),r.addMethod("instanceof",assertInstanceOf),r.addMethod("instanceOf",assertInstanceOf),r.addMethod("property",(function(e,r,n){n&&i(this,"message",n);var s=!!i(this,"deep"),o=s?"deep property ":"property ",a=i(this,"negate"),c=i(this,"object"),u=s?t.getPathInfo(e,c):null,h=s?u.exists:t.hasProperty(e,c),l=s?u.value:c[e];if(a&&void 0!==r){if(void 0===l)throw n=null!=n?n+": ":"",new Error(n+t.inspect(c)+" has no "+o+t.inspect(e))}else this.assert(h,"expected #{this} to have a "+o+t.inspect(e),"expected #{this} to not have "+o+t.inspect(e));void 0!==r&&this.assert(r===l,"expected #{this} to have a "+o+t.inspect(e)+" of #{exp}, but got #{act}","expected #{this} to not have a "+o+t.inspect(e)+" of #{act}",r,l),i(this,"object",l)})),r.addMethod("ownProperty",assertOwnProperty),r.addMethod("haveOwnProperty",assertOwnProperty),r.addChainableMethod("length",assertLength,(function assertLengthChain(){i(this,"doLength",!0)})),r.addMethod("lengthOf",assertLength),r.addMethod("match",(function(e,t){t&&i(this,"message",t);var r=i(this,"object");this.assert(e.exec(r),"expected #{this} to match "+e,"expected #{this} not to match "+e)})),r.addMethod("string",(function(e,n){n&&i(this,"message",n);var s=i(this,"object");new r(s,n).is.a("string"),this.assert(~s.indexOf(e),"expected #{this} to contain "+t.inspect(e),"expected #{this} to not contain "+t.inspect(e))})),r.addMethod("keys",assertKeys),r.addMethod("key",assertKeys),r.addMethod("throw",assertThrows),r.addMethod("throws",assertThrows),r.addMethod("Throw",assertThrows),r.addMethod("respondTo",(function(e,r){r&&i(this,"message",r);var n=i(this,"object"),s=i(this,"itself"),o="function"!==t.type(n)||s?n[e]:n.prototype[e];this.assert("function"==typeof o,"expected #{this} to respond to "+t.inspect(e),"expected #{this} to not respond to "+t.inspect(e))})),r.addProperty("itself",(function(){i(this,"itself",!0)})),r.addMethod("satisfy",(function(e,r){r&&i(this,"message",r);var n=e(i(this,"object"));this.assert(n,"expected #{this} to satisfy "+t.objDisplay(e),"expected #{this} to not satisfy"+t.objDisplay(e),!this.negate,n)})),r.addMethod("closeTo",(function(e,n,s){s&&i(this,"message",s);var o=i(this,"object");if(new r(o,s).is.a("number"),"number"!==t.type(e)||"number"!==t.type(n))throw new Error("the arguments to closeTo must be numbers");this.assert(Math.abs(o-e)<=n,"expected #{this} to be close to "+e+" +/- "+n,"expected #{this} not to be close to "+e+" +/- "+n)})),r.addMethod("members",(function(e,n){n&&i(this,"message",n);var s=i(this,"object");new r(s).to.be.an("array"),new r(e).to.be.an("array");var o=i(this,"deep")?t.eql:void 0;if(i(this,"contains"))return this.assert(isSubsetOf(e,s,o),"expected #{this} to be a superset of #{act}","expected #{this} to not be a superset of #{act}",s,e);this.assert(isSubsetOf(s,e,o)&&isSubsetOf(e,s,o),"expected #{this} to have the same members as #{act}","expected #{this} to not have the same members as #{act}",s,e)})),r.addChainableMethod("change",assertChanges),r.addChainableMethod("changes",assertChanges),r.addChainableMethod("increase",assertIncreases),r.addChainableMethod("increases",assertIncreases),r.addChainableMethod("decrease",assertDecreases),r.addChainableMethod("decreases",assertDecreases)}})),require.register("chai/lib/chai/interface/assert.js",(function(exports,module){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
module.exports=function(chai,util){
/*!
   * Chai dependencies.
   */
var Assertion=chai.Assertion,flag=util.flag,assert=chai.assert=function(e,t){new Assertion(null,null,chai.assert).assert(e,t,"[ negation message unavailable ]")};
/*!
   * Module export.
   */assert.fail=function(e,t,r,i){throw r=r||"assert.fail()",new chai.AssertionError(r,{actual:e,expected:t,operator:i},assert.fail)},assert.ok=function(e,t){new Assertion(e,t).is.ok},assert.notOk=function(e,t){new Assertion(e,t).is.not.ok},assert.equal=function(e,t,r){var i=new Assertion(e,r,assert.equal);i.assert(t==flag(i,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",t,e)},assert.notEqual=function(e,t,r){var i=new Assertion(e,r,assert.notEqual);i.assert(t!=flag(i,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",t,e)},assert.strictEqual=function(e,t,r){new Assertion(e,r).to.equal(t)},assert.notStrictEqual=function(e,t,r){new Assertion(e,r).to.not.equal(t)},assert.deepEqual=function(e,t,r){new Assertion(e,r).to.eql(t)},assert.notDeepEqual=function(e,t,r){new Assertion(e,r).to.not.eql(t)},assert.isAbove=function(e,t,r){new Assertion(e,r).to.be.above(t)},assert.isBelow=function(e,t,r){new Assertion(e,r).to.be.below(t)},assert.isTrue=function(e,t){new Assertion(e,t).is.true},assert.isFalse=function(e,t){new Assertion(e,t).is.false},assert.isNull=function(e,t){new Assertion(e,t).to.equal(null)},assert.isNotNull=function(e,t){new Assertion(e,t).to.not.equal(null)},assert.isUndefined=function(e,t){new Assertion(e,t).to.equal(void 0)},assert.isDefined=function(e,t){new Assertion(e,t).to.not.equal(void 0)},assert.isFunction=function(e,t){new Assertion(e,t).to.be.a("function")},assert.isNotFunction=function(e,t){new Assertion(e,t).to.not.be.a("function")},assert.isObject=function(e,t){new Assertion(e,t).to.be.a("object")},assert.isNotObject=function(e,t){new Assertion(e,t).to.not.be.a("object")},assert.isArray=function(e,t){new Assertion(e,t).to.be.an("array")},assert.isNotArray=function(e,t){new Assertion(e,t).to.not.be.an("array")},assert.isString=function(e,t){new Assertion(e,t).to.be.a("string")},assert.isNotString=function(e,t){new Assertion(e,t).to.not.be.a("string")},assert.isNumber=function(e,t){new Assertion(e,t).to.be.a("number")},assert.isNotNumber=function(e,t){new Assertion(e,t).to.not.be.a("number")},assert.isBoolean=function(e,t){new Assertion(e,t).to.be.a("boolean")},assert.isNotBoolean=function(e,t){new Assertion(e,t).to.not.be.a("boolean")},assert.typeOf=function(e,t,r){new Assertion(e,r).to.be.a(t)},assert.notTypeOf=function(e,t,r){new Assertion(e,r).to.not.be.a(t)},assert.instanceOf=function(e,t,r){new Assertion(e,r).to.be.instanceOf(t)},assert.notInstanceOf=function(e,t,r){new Assertion(e,r).to.not.be.instanceOf(t)},assert.include=function(e,t,r){new Assertion(e,r,assert.include).include(t)},assert.notInclude=function(e,t,r){new Assertion(e,r,assert.notInclude).not.include(t)},assert.match=function(e,t,r){new Assertion(e,r).to.match(t)},assert.notMatch=function(e,t,r){new Assertion(e,r).to.not.match(t)},assert.property=function(e,t,r){new Assertion(e,r).to.have.property(t)},assert.notProperty=function(e,t,r){new Assertion(e,r).to.not.have.property(t)},assert.deepProperty=function(e,t,r){new Assertion(e,r).to.have.deep.property(t)},assert.notDeepProperty=function(e,t,r){new Assertion(e,r).to.not.have.deep.property(t)},assert.propertyVal=function(e,t,r,i){new Assertion(e,i).to.have.property(t,r)},assert.propertyNotVal=function(e,t,r,i){new Assertion(e,i).to.not.have.property(t,r)},assert.deepPropertyVal=function(e,t,r,i){new Assertion(e,i).to.have.deep.property(t,r)},assert.deepPropertyNotVal=function(e,t,r,i){new Assertion(e,i).to.not.have.deep.property(t,r)},assert.lengthOf=function(e,t,r){new Assertion(e,r).to.have.length(t)},assert.Throw=function(e,t,r,i){("string"==typeof t||t instanceof RegExp)&&(r=t,t=null);var n=new Assertion(e,i).to.Throw(t,r);return flag(n,"object")},assert.doesNotThrow=function(e,t,r){"string"==typeof t&&(r=t,t=null),new Assertion(e,r).to.not.Throw(t)},assert.operator=function(val,operator,val2,msg){if(!~["==","===",">",">=","<","<=","!=","!=="].indexOf(operator))throw new Error('Invalid operator "'+operator+'"');var test=new Assertion(eval(val+operator+val2),msg);test.assert(!0===flag(test,"object"),"expected "+util.inspect(val)+" to be "+operator+" "+util.inspect(val2),"expected "+util.inspect(val)+" to not be "+operator+" "+util.inspect(val2))},assert.closeTo=function(e,t,r,i){new Assertion(e,i).to.be.closeTo(t,r)},assert.sameMembers=function(e,t,r){new Assertion(e,r).to.have.same.members(t)},assert.sameDeepMembers=function(e,t,r){new Assertion(e,r).to.have.same.deep.members(t)},assert.includeMembers=function(e,t,r){new Assertion(e,r).to.include.members(t)},assert.changes=function(e,t,r){new Assertion(e).to.change(t,r)},assert.doesNotChange=function(e,t,r){new Assertion(e).to.not.change(t,r)},assert.increases=function(e,t,r){new Assertion(e).to.increase(t,r)},assert.doesNotIncrease=function(e,t,r){new Assertion(e).to.not.increase(t,r)},assert.decreases=function(e,t,r){new Assertion(e).to.decrease(t,r)},assert.doesNotDecrease=function(e,t,r){new Assertion(e).to.not.decrease(t,r)}
/*!
   * Undocumented / untested
   */,assert.ifError=function(e,t){new Assertion(e,t).to.not.be.ok},
/*!
   * Aliases.
   */
function alias(e,t){return assert[t]=assert[e],alias}("Throw","throw")("Throw","throws")}})),require.register("chai/lib/chai/interface/expect.js",(function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t){e.expect=function(t,r){return new e.Assertion(t,r)},e.expect.fail=function(t,r,i,n){throw i=i||"expect.fail()",new e.AssertionError(i,{actual:t,expected:r,operator:n},e.expect.fail)}}})),require.register("chai/lib/chai/interface/should.js",(function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t){var r=e.Assertion;function loadShould(){Object.defineProperty(Object.prototype,"should",{set:function shouldSetter(e){Object.defineProperty(this,"should",{value:e,enumerable:!0,configurable:!0,writable:!0})},get:function shouldGetter(){return this instanceof String||this instanceof Number?new r(this.constructor(this),null,shouldGetter):this instanceof Boolean?new r(1==this,null,shouldGetter):new r(this,null,shouldGetter)},configurable:!0});var t={fail:function(r,i,n,s){throw n=n||"should.fail()",new e.AssertionError(n,{actual:r,expected:i,operator:s},t.fail)},equal:function(e,t,i){new r(e,i).to.equal(t)},Throw:function(e,t,i,n){new r(e,n).to.Throw(t,i)},exist:function(e,t){new r(e,t).to.exist},not:{}};return t.not.equal=function(e,t,i){new r(e,i).to.not.equal(t)},t.not.Throw=function(e,t,i,n){new r(e,n).to.not.Throw(t,i)},t.not.exist=function(e,t){new r(e,t).to.not.exist},t.throw=t.Throw,t.not.throw=t.not.Throw,t}e.should=loadShould,e.Should=loadShould}})),require.register("chai/lib/chai/utils/addChainableMethod.js",(function(e,t){
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var r=require("chai/lib/chai/utils/transferFlags.js"),i=require("chai/lib/chai/utils/flag.js"),n=require("chai/lib/chai/config.js"),s="__proto__"in Object,o=/^(?:length|name|arguments|caller)$/,a=Function.prototype.call,c=Function.prototype.apply;t.exports=function(e,t,u,h){"function"!=typeof h&&(h=function(){});var l={method:u,chainingBehavior:h};e.__methods||(e.__methods={}),e.__methods[t]=l,Object.defineProperty(e,t,{get:function(){l.chainingBehavior.call(this);var t=function assert(){i(this,"ssfi")&&!1===n.includeStack&&i(this,"ssfi",assert);var e=l.method.apply(this,arguments);return void 0===e?this:e};if(s){var u=t.__proto__=Object.create(this);u.call=a,u.apply=c}else{Object.getOwnPropertyNames(e).forEach((function(r){if(!o.test(r)){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,i)}}))}return r(this,t),t},configurable:!0})}})),require.register("chai/lib/chai/utils/addMethod.js",(function(e,t){
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=require("chai/lib/chai/config.js"),i=require("chai/lib/chai/utils/flag.js");t.exports=function(e,t,n){e[t]=function(){i(this,"ssfi")&&!1===r.includeStack&&i(this,"ssfi",e[t]);var s=n.apply(this,arguments);return void 0===s?this:s}}})),require.register("chai/lib/chai/utils/addProperty.js",(function(e,t){
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t,r){Object.defineProperty(e,t,{get:function(){var e=r.call(this);return void 0===e?this:e},configurable:!0})}})),require.register("chai/lib/chai/utils/flag.js",(function(e,t){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t,r){var i=e.__flags||(e.__flags=Object.create(null));if(3!==arguments.length)return i[t];i[t]=r}})),require.register("chai/lib/chai/utils/getActual.js",(function(e,t){
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t){return t.length>4?t[4]:e._obj}})),require.register("chai/lib/chai/utils/getEnumerableProperties.js",(function(e,t){
/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function getEnumerableProperties(e){var t=[];for(var r in e)t.push(r);return t}})),require.register("chai/lib/chai/utils/getMessage.js",(function(e,t){
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var r=require("chai/lib/chai/utils/flag.js"),i=require("chai/lib/chai/utils/getActual.js"),n=(require("chai/lib/chai/utils/inspect.js"),require("chai/lib/chai/utils/objDisplay.js"));t.exports=function(e,t){var s=r(e,"negate"),o=r(e,"object"),a=t[3],c=i(e,t),u=s?t[2]:t[1],h=r(e,"message");return"function"==typeof u&&(u=u()),u=(u=u||"").replace(/#{this}/g,n(o)).replace(/#{act}/g,n(c)).replace(/#{exp}/g,n(a)),h?h+": "+u:u}})),require.register("chai/lib/chai/utils/getName.js",(function(e,t){
/*!
 * Chai - getName utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e){if(e.name)return e.name;var t=/^\s?function ([^(]*)\(/.exec(e);return t&&t[1]?t[1]:""}})),require.register("chai/lib/chai/utils/getPathValue.js",(function(e,t){
/*!
 * Chai - getPathValue utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */
var r=require("chai/lib/chai/utils/getPathInfo.js");t.exports=function(e,t){return r(e,t).value}})),require.register("chai/lib/chai/utils/getPathInfo.js",(function(e,t){
/*!
 * Chai - getPathInfo utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=require("chai/lib/chai/utils/hasProperty.js");
/*!
 * ## _getPathValue(parsed, obj)
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(parsed, obj);
 *
 * @param {Object} parsed definition from `parsePath`.
 * @param {Object} object to search against
 * @param {Number} object to search against
 * @returns {Object|Undefined} value
 * @api private
 */
function _getPathValue(e,t,r){for(var i,n=t,s=0,o=r=void 0===r?e.length:r;s<o;s++){var a=e[s];n?(void 0!==a.p?n=n[a.p]:void 0!==a.i&&(n=n[a.i]),s==o-1&&(i=n)):i=void 0}return i}t.exports=function getPathInfo(e,t){var i=
/*!
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `_getPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be as near infinitely deep and nested
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */
function parsePath(e){var t=e.replace(/\[/g,".[");return t.match(/(\\\.|[^.]+?)+/g).map((function(e){var t=/\[(\d+)\]$/.exec(e);return t?{i:parseFloat(t[1])}:{p:e}}))}(e),n=i[i.length-1],s={parent:_getPathValue(i,t,i.length-1),name:n.p||n.i,value:_getPathValue(i,t)};return s.exists=r(s.name,s.parent),s}})),require.register("chai/lib/chai/utils/hasProperty.js",(function(e,t){
/*!
 * Chai - hasProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=require("chai/lib/chai/utils/type.js"),i={number:Number,string:String};t.exports=function hasProperty(e,t){var n=r(t);return"null"!==n&&"undefined"!==n&&(i[n]&&"object"!=typeof t&&(t=new i[n](t)),e in t)}})),require.register("chai/lib/chai/utils/getProperties.js",(function(e,t){
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function getProperties(e){var t=Object.getOwnPropertyNames(subject);function addProperty(e){-1===t.indexOf(e)&&t.push(e)}for(var r=Object.getPrototypeOf(subject);null!==r;)Object.getOwnPropertyNames(r).forEach(addProperty),r=Object.getPrototypeOf(r);return t}})),require.register("chai/lib/chai/utils/index.js",(function(e,t){
/*!
 * test utility
 */
(e=t.exports={}).test=require("chai/lib/chai/utils/test.js"),
/*!
 * type utility
 */
e.type=require("chai/lib/chai/utils/type.js"),
/*!
 * message utility
 */
e.getMessage=require("chai/lib/chai/utils/getMessage.js"),
/*!
 * actual utility
 */
e.getActual=require("chai/lib/chai/utils/getActual.js"),
/*!
 * Inspect util
 */
e.inspect=require("chai/lib/chai/utils/inspect.js"),
/*!
 * Object Display util
 */
e.objDisplay=require("chai/lib/chai/utils/objDisplay.js"),
/*!
 * Flag utility
 */
e.flag=require("chai/lib/chai/utils/flag.js"),
/*!
 * Flag transferring utility
 */
e.transferFlags=require("chai/lib/chai/utils/transferFlags.js"),
/*!
 * Deep equal utility
 */
e.eql=require("chaijs~deep-eql@0.1.3"),
/*!
 * Deep path value
 */
e.getPathValue=require("chai/lib/chai/utils/getPathValue.js"),
/*!
 * Deep path info
 */
e.getPathInfo=require("chai/lib/chai/utils/getPathInfo.js"),
/*!
 * Check if a property exists
 */
e.hasProperty=require("chai/lib/chai/utils/hasProperty.js"),
/*!
 * Function name
 */
e.getName=require("chai/lib/chai/utils/getName.js"),
/*!
 * add Property
 */
e.addProperty=require("chai/lib/chai/utils/addProperty.js"),
/*!
 * add Method
 */
e.addMethod=require("chai/lib/chai/utils/addMethod.js"),
/*!
 * overwrite Property
 */
e.overwriteProperty=require("chai/lib/chai/utils/overwriteProperty.js"),
/*!
 * overwrite Method
 */
e.overwriteMethod=require("chai/lib/chai/utils/overwriteMethod.js"),
/*!
 * Add a chainable method
 */
e.addChainableMethod=require("chai/lib/chai/utils/addChainableMethod.js"),
/*!
 * Overwrite chainable method
 */
e.overwriteChainableMethod=require("chai/lib/chai/utils/overwriteChainableMethod.js")})),require.register("chai/lib/chai/utils/inspect.js",(function(e,t){var r=require("chai/lib/chai/utils/getName.js"),i=require("chai/lib/chai/utils/getProperties.js"),n=require("chai/lib/chai/utils/getEnumerableProperties.js");t.exports=function inspect(e,t,r,i){return formatValue({showHidden:t,seen:[],stylize:function(e){return e}},e,void 0===r?2:r)};var isDOMElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&1===e.nodeType&&"string"==typeof e.nodeName};function formatValue(t,s,o){if(s&&"function"==typeof s.inspect&&s.inspect!==e.inspect&&(!s.constructor||s.constructor.prototype!==s)){var a=s.inspect(o);return"string"!=typeof a&&(a=formatValue(t,a,o)),a}var c=function formatPrimitive(e,t){switch(typeof t){case"undefined":return e.stylize("undefined","undefined");case"string":var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string");case"number":return 0===t&&1/t==-1/0?e.stylize("-0","number"):e.stylize(""+t,"number");case"boolean":return e.stylize(""+t,"boolean")}if(null===t)return e.stylize("null","null")}(t,s);if(c)return c;if(isDOMElement(s)){if("outerHTML"in s)return s.outerHTML;try{if(document.xmlVersion)return(new XMLSerializer).serializeToString(s);var u=document.createElementNS("http://www.w3.org/1999/xhtml","_");return u.appendChild(s.cloneNode(!1)),html=u.innerHTML.replace("><",">"+s.innerHTML+"<"),u.innerHTML="",html}catch(e){}}var h=n(s),l=t.showHidden?i(s):h;if(0===l.length||isError(s)&&(1===l.length&&"stack"===l[0]||2===l.length&&"description"===l[0]&&"stack"===l[1])){if("function"==typeof s){var f=(p=r(s))?": "+p:"";return t.stylize("[Function"+f+"]","special")}if(isRegExp(s))return t.stylize(RegExp.prototype.toString.call(s),"regexp");if(isDate(s))return t.stylize(Date.prototype.toUTCString.call(s),"date");if(isError(s))return formatError(s)}var p,d,b="",g=!1,y=["{","}"];(function isArray(e){return Array.isArray(e)||"object"==typeof e&&"[object Array]"===objectToString(e)}(s)&&(g=!0,y=["[","]"]),"function"==typeof s)&&(b=" [Function"+(f=(p=r(s))?": "+p:"")+"]");return isRegExp(s)&&(b=" "+RegExp.prototype.toString.call(s)),isDate(s)&&(b=" "+Date.prototype.toUTCString.call(s)),isError(s)?formatError(s):0!==l.length||g&&0!=s.length?o<0?isRegExp(s)?t.stylize(RegExp.prototype.toString.call(s),"regexp"):t.stylize("[Object]","special"):(t.seen.push(s),d=g?function formatArray(e,t,r,i,n){for(var s=[],o=0,a=t.length;o<a;++o)Object.prototype.hasOwnProperty.call(t,String(o))?s.push(formatProperty(e,t,r,i,String(o),!0)):s.push("");return n.forEach((function(n){n.match(/^\d+$/)||s.push(formatProperty(e,t,r,i,n,!0))})),s}(t,s,o,h,l):l.map((function(e){return formatProperty(t,s,o,h,e,g)})),t.seen.pop(),function reduceToSingleString(e,t,r){var i=e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.length+1}),0);if(i>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(d,b,y)):y[0]+b+y[1]}function formatError(e){return"["+Error.prototype.toString.call(e)+"]"}function formatProperty(e,t,r,i,n,s){var o,a;if(t.__lookupGetter__&&(t.__lookupGetter__(n)?a=t.__lookupSetter__(n)?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):t.__lookupSetter__(n)&&(a=e.stylize("[Setter]","special"))),i.indexOf(n)<0&&(o="["+n+"]"),a||(e.seen.indexOf(t[n])<0?(a=formatValue(e,t[n],null===r?null:r-1)).indexOf("\n")>-1&&(a=s?a.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+a.split("\n").map((function(e){return"   "+e})).join("\n")):a=e.stylize("[Circular]","special")),void 0===o){if(s&&n.match(/^\d+$/))return a;(o=JSON.stringify(""+n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+a}function isRegExp(e){return"object"==typeof e&&"[object RegExp]"===objectToString(e)}function isDate(e){return"object"==typeof e&&"[object Date]"===objectToString(e)}function isError(e){return"object"==typeof e&&"[object Error]"===objectToString(e)}function objectToString(e){return Object.prototype.toString.call(e)}})),require.register("chai/lib/chai/utils/objDisplay.js",(function(e,t){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var r=require("chai/lib/chai/utils/inspect.js"),i=require("chai/lib/chai/config.js");t.exports=function(e){var t=r(e),n=Object.prototype.toString.call(e);if(i.truncateThreshold&&t.length>=i.truncateThreshold){if("[object Function]"===n)return e.name&&""!==e.name?"[Function: "+e.name+"]":"[Function]";if("[object Array]"===n)return"[ Array("+e.length+") ]";if("[object Object]"===n){var s=Object.keys(e);return"{ Object ("+(s.length>2?s.splice(0,2).join(", ")+", ...":s.join(", "))+") }"}return t}return t}})),require.register("chai/lib/chai/utils/overwriteMethod.js",(function(e,t){
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t,r){var i=e[t],_super=function(){return this};i&&"function"==typeof i&&(_super=i),e[t]=function(){var e=r(_super).apply(this,arguments);return void 0===e?this:e}}})),require.register("chai/lib/chai/utils/overwriteProperty.js",(function(e,t){
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t,r){var i=Object.getOwnPropertyDescriptor(e,t),_super=function(){};i&&"function"==typeof i.get&&(_super=i.get),Object.defineProperty(e,t,{get:function(){var e=r(_super).call(this);return void 0===e?this:e},configurable:!0})}})),require.register("chai/lib/chai/utils/overwriteChainableMethod.js",(function(e,t){
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t,r,i){var n=e.__methods[t],s=n.chainingBehavior;n.chainingBehavior=function(){var e=i(s).call(this);return void 0===e?this:e};var o=n.method;n.method=function(){var e=r(o).apply(this,arguments);return void 0===e?this:e}}})),require.register("chai/lib/chai/utils/test.js",(function(e,t){
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var r=require("chai/lib/chai/utils/flag.js");t.exports=function(e,t){var i=r(e,"negate"),n=t[0];return i?!n:n}})),require.register("chai/lib/chai/utils/transferFlags.js",(function(e,t){
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t,r){var i=e.__flags||(e.__flags=Object.create(null));for(var n in t.__flags||(t.__flags=Object.create(null)),r=3!==arguments.length||r,i)(r||"object"!==n&&"ssfi"!==n&&"message"!=n)&&(t.__flags[n]=i[n])}})),require.register("chai/lib/chai/utils/type.js",(function(e,t){
/*!
 * Chai - type utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Detectable javascript natives
 */
var r={"[object Arguments]":"arguments","[object Array]":"array","[object Date]":"date","[object Function]":"function","[object Number]":"number","[object RegExp]":"regexp","[object String]":"string"};t.exports=function(e){var t=Object.prototype.toString.call(e);return r[t]?r[t]:null===e?"null":void 0===e?"undefined":e===Object(e)?"object":typeof e}})),"object"==typeof exports?module.exports=require("chai"):"function"==typeof define&&define.amd?define("chai",[],(function(){return require("chai")})):(this||window).chai=require("chai")})();