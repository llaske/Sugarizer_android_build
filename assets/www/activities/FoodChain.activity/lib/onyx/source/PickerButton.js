/*! Sugarizer 2018-07-01 */
enyo.kind({name:"onyx.PickerButton",kind:"onyx.Button",handlers:{onChange:"change"},change:function(a,b){this.setContent(b.content)}});