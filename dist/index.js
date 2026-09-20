"use strict";var y=function(v,a){return function(){try{return a||v((a={exports:{}}).exports,a),a.exports}catch(u){throw (a=0, u)}};};var z=y(function($,C){
var D=require('@stdlib/strided-base-reinterpret-complex128/dist'),_=require('@stdlib/complex-float64-real/dist'),A=require('@stdlib/complex-float64-imag/dist'),f=require('@stdlib/math-base-special-pow/dist'),F=require('@stdlib/math-base-special-ln/dist'),l=require('@stdlib/math-base-special-sincos/dist').assign,e=[0,0];function G(v,a,u,m,o,s,g,B){var q,c,R,d,I,w,r,t,n,E,O,x,i,p;if(v<=0)return s;if(q=_(u),c=A(u),R=_(m),d=A(m),n=F(a),t=D(s,0),x=g*2,i=B*2,v===1)return o?(r=f(a,R),l(d*n,e,1,0),t[i]=r*e[1],t[i+1]=r*e[0]):(r=f(a,q),l(c*n,e,1,0),t[i]=r*e[1],t[i+1]=r*e[0]),s;for(r=f(a,q),l(c*n,e,1,0),t[i]=r*e[1],t[i+1]=r*e[0],i+=x,o&&(v-=1),E=(R-q)/v,O=(d-c)/v,p=1;p<v;p++)I=q+E*p,w=c+O*p,r=f(a,I),l(w*n,e,1,0),t[i]=r*e[1],t[i+1]=r*e[0],i+=x;return o&&(r=f(a,R),l(d*n,e,1,0),t[i]=r*e[1],t[i+1]=r*e[0]),s}C.exports=G
});var P=y(function(X,K){
var H=require('@stdlib/strided-base-stride2offset/dist'),J=z();function L(v,a,u,m,o,s,g){return J(v,a,u,m,o,s,g,H(v,g))}K.exports=L
});var h=y(function(b,W){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=P(),Q=z();M(S,"ndarray",Q);W.exports=S
});var T=require("path").join,U=require('@stdlib/utils-try-require/dist'),V=require('@stdlib/assert-is-error/dist'),Y=h(),j,k=U(T(__dirname,"./native.js"));V(k)?j=Y:j=k;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
