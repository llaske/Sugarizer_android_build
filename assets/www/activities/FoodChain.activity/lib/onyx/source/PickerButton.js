/*! Sugarizer 2020-03-14 */
enyo.kind({name:"onyx.PickerButton",kind:"onyx.Button",handlers:{onChange:"change"},change:function(a,b){this.setContent(b.content)}});