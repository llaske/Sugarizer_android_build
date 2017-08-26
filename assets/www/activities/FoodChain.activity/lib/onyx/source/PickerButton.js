/*! Sugarizer 2017-08-25 */
enyo.kind({name:"onyx.PickerButton",kind:"onyx.Button",handlers:{onChange:"change"},change:function(a,b){this.setContent(b.content)}});