/*! Sugarizer 2017-09-04 */
enyo.kind({name:"onyx.PickerButton",kind:"onyx.Button",handlers:{onChange:"change"},change:function(a,b){this.setContent(b.content)}});