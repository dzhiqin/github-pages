"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6823],{"6823":function(t,i,o){o.r(i),o.d(i,{"taro_cover_image_core":function(){return n}});var e=o(9529),n=function(){function r(t){(0,e.r)(this,t),this.onLoad=(0,e.c)(this,"load",7),this.onError=(0,e.c)(this,"error",7),this.nativeProps={}}return r.prototype.imageOnLoad=function(){var t=this.imgRef,i=t.width,o=t.height;this.onLoad.emit({"width":i,"height":o})},r.prototype.imageOnError=function(){this.onError.emit()},r.prototype.render=function(){var t=this,i=this,o=i.src,n=i.imageOnLoad,s=i.imageOnError,h=i.nativeProps;return(0,e.h)("img",Object.assign({"ref":function(i){return t.imgRef=i},"src":o,"onLoad":n.bind(this),"onError":s.bind(this)},h))},r}();n.style="taro-cover-image-core{overflow:hidden;width:320px;height:240px}"}}]);