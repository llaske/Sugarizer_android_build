/*! Sugarizer 2019-01-12 */
enyo.kind({name:"onyx.PickerButton",kind:"onyx.Button",handlers:{onChange:"change"},change:function(a,b){this.setContent(b.content)}});