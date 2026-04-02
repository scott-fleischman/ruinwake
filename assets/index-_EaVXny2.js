(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Va="175",rh=0,pc=1,sh=2,zl=1,oh=2,Jn=3,Si=0,hn=1,ni=2,yi=0,gr=1,mc=2,_c=3,gc=4,ah=5,Hi=100,ch=101,lh=102,dh=103,hh=104,uh=200,fh=201,ph=202,mh=203,Ko=204,$o=205,_h=206,gh=207,vh=208,xh=209,yh=210,Eh=211,Sh=212,Mh=213,Th=214,jo=0,Zo=1,Qo=2,Er=3,Jo=4,ea=5,ta=6,na=7,Wa=0,bh=1,Ah=2,Ei=0,Rh=1,wh=2,Ch=3,Ih=4,Oh=5,Dh=6,Lh=7,Hl=300,Sr=301,Mr=302,ia=303,ra=304,Ks=306,sa=1e3,Wi=1001,oa=1002,Un=1003,Ph=1004,ss=1005,Hn=1006,no=1007,Xi=1008,ci=1009,Gl=1010,Vl=1011,Wr=1012,Xa=1013,qi=1014,ri=1015,$r=1016,qa=1017,Ya=1018,Xr=1020,Wl=35902,Xl=1021,ql=1022,kn=1023,Yl=1024,Kl=1025,qr=1026,Yr=1027,$l=1028,Ka=1029,jl=1030,$a=1031,ja=1033,Ls=33776,Ps=33777,Ns=33778,ks=33779,aa=35840,ca=35841,la=35842,da=35843,ha=36196,ua=37492,fa=37496,pa=37808,ma=37809,_a=37810,ga=37811,va=37812,xa=37813,ya=37814,Ea=37815,Sa=37816,Ma=37817,Ta=37818,ba=37819,Aa=37820,Ra=37821,Us=36492,wa=36494,Ca=36495,Zl=36283,Ia=36284,Oa=36285,Da=36286,Nh=3200,kh=3201,Ql=0,Uh=1,xi="",Rn="srgb",Tr="srgb-linear",Vs="linear",Ct="srgb",$i=7680,vc=519,Fh=512,Bh=513,zh=514,Jl=515,Hh=516,Gh=517,Vh=518,Wh=519,xc=35044,yc="300 es",si=2e3,Ws=2001;class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],io=Math.PI/180,La=180/Math.PI;function jr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Xh(i,e){return(i%e+e)%e}function ro(i,e,t){return(1-t)*i+t*e}function Dr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,r,s,o,a,c,d){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,d)}set(e,t,n,r,s,o,a,c,d){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],d=n[1],h=n[4],f=n[7],u=n[2],p=n[5],_=n[8],x=r[0],m=r[3],l=r[6],b=r[1],T=r[4],S=r[7],D=r[2],R=r[5],C=r[8];return s[0]=o*x+a*b+c*D,s[3]=o*m+a*T+c*R,s[6]=o*l+a*S+c*C,s[1]=d*x+h*b+f*D,s[4]=d*m+h*T+f*R,s[7]=d*l+h*S+f*C,s[2]=u*x+p*b+_*D,s[5]=u*m+p*T+_*R,s[8]=u*l+p*S+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],d=e[7],h=e[8];return t*o*h-t*a*d-n*s*h+n*a*c+r*s*d-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],d=e[7],h=e[8],f=h*o-a*d,u=a*c-h*s,p=d*s-o*c,_=t*f+n*u+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*d-h*n)*x,e[2]=(a*n-r*o)*x,e[3]=u*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(n*c-d*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),d=Math.sin(s);return this.set(n*c,n*d,-n*(c*o+d*a)+o+e,-r*d,r*c,-r*(-d*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const so=new nt;function ed(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qh(){const i=Xs("canvas");return i.style.display="block",i}const Ec={};function Fs(i){i in Ec||(Ec[i]=!0,console.warn(i))}function Yh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Kh(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $h(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Sc=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jh(){const i={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ct&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xi?Vs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Tr]:{primaries:e,whitePoint:n,transfer:Vs,toXYZ:Sc,fromXYZ:Mc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Sc,fromXYZ:Mc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),i}const St=jh();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class Zh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ji===void 0&&(ji=Xs("canvas")),ji.width=e.width,ji.height=e.height;const r=ji.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ji}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=oi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qh=0;class Za{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(oo(r[o].image)):s.push(oo(r[o]))}else s=oo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jh=0;class un extends Ar{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=Wi,r=Wi,s=Hn,o=Xi,a=kn,c=ci,d=un.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=jr(),this.name="",this.source=new Za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=d,this.format=a,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sa:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sa:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Hl;un.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,d=c[0],h=c[4],f=c[8],u=c[1],p=c[5],_=c[9],x=c[2],m=c[6],l=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(d+p+l-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(d+1)/2,S=(p+1)/2,D=(l+1)/2,R=(h+u)/4,C=(f+x)/4,L=(_+m)/4;return T>S&&T>D?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=R/n,s=C/n):S>D?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=R/r,s=L/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=C/s,r=L/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-x)/b,this.z=(u-h)/b,this.w=Math.acos((d+p+l-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eu extends Ar{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new un(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Za(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends eu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class td extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tu extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],d=n[r+1],h=n[r+2],f=n[r+3];const u=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=d,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f!==x||c!==u||d!==p||h!==_){let m=1-a;const l=c*u+d*p+h*_+f*x,b=l>=0?1:-1,T=1-l*l;if(T>Number.EPSILON){const D=Math.sqrt(T),R=Math.atan2(D,l*b);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}const S=a*b;if(c=c*m+u*S,d=d*m+p*S,h=h*m+_*S,f=f*m+x*S,m===1-a){const D=1/Math.sqrt(c*c+d*d+h*h+f*f);c*=D,d*=D,h*=D,f*=D}}e[t]=c,e[t+1]=d,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],d=n[r+2],h=n[r+3],f=s[o],u=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+h*f+c*p-d*u,e[t+1]=c*_+h*u+d*f-a*p,e[t+2]=d*_+h*p+a*u-c*f,e[t+3]=h*_-a*f-c*u-d*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,d=a(n/2),h=a(r/2),f=a(s/2),u=c(n/2),p=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=u*h*f+d*p*_,this._y=d*p*f-u*h*_,this._z=d*h*_+u*p*f,this._w=d*h*f-u*p*_;break;case"YXZ":this._x=u*h*f+d*p*_,this._y=d*p*f-u*h*_,this._z=d*h*_-u*p*f,this._w=d*h*f+u*p*_;break;case"ZXY":this._x=u*h*f-d*p*_,this._y=d*p*f+u*h*_,this._z=d*h*_+u*p*f,this._w=d*h*f-u*p*_;break;case"ZYX":this._x=u*h*f-d*p*_,this._y=d*p*f+u*h*_,this._z=d*h*_-u*p*f,this._w=d*h*f+u*p*_;break;case"YZX":this._x=u*h*f+d*p*_,this._y=d*p*f+u*h*_,this._z=d*h*_-u*p*f,this._w=d*h*f-u*p*_;break;case"XZY":this._x=u*h*f-d*p*_,this._y=d*p*f-u*h*_,this._z=d*h*_+u*p*f,this._w=d*h*f+u*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],d=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-d)*p,this._z=(o-r)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+d)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-d)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+d)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,d=t._z,h=t._w;return this._x=n*h+o*a+r*d-s*c,this._y=r*h+o*c+s*a-n*d,this._z=s*h+o*d+n*c-r*a,this._w=o*h-n*a-r*c-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const d=Math.sqrt(c),h=Math.atan2(d,a),f=Math.sin((1-t)*h)/d,u=Math.sin(t*h)/d;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,d=2*(o*r-a*n),h=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+c*d+o*f-a*h,this.y=n+c*h+a*d-s*f,this.z=r+c*f+s*h-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new V,Tc=new Zr;class Qr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(e.matrixWorld),this.union(os)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),as.subVectors(this.max,Lr),Zi.subVectors(e.a,Lr),Qi.subVectors(e.b,Lr),Ji.subVectors(e.c,Lr),hi.subVectors(Qi,Zi),ui.subVectors(Ji,Qi),Ci.subVectors(Zi,Ji);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ci.z,Ci.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ci.z,0,-Ci.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ci.y,Ci.x,0];return!co(t,Zi,Qi,Ji,as)||(t=[1,0,0,0,1,0,0,0,1],!co(t,Zi,Qi,Ji,as))?!1:(cs.crossVectors(hi,ui),t=[cs.x,cs.y,cs.z],co(t,Zi,Qi,Ji,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new V,new V,new V,new V,new V,new V,new V,new V],Cn=new V,os=new Qr,Zi=new V,Qi=new V,Ji=new V,hi=new V,ui=new V,Ci=new V,Lr=new V,as=new V,cs=new V,Ii=new V;function co(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ii.fromArray(i,s);const a=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),c=e.dot(Ii),d=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>a)return!1}return!0}const nu=new Qr,Pr=new V,lo=new V;class Qa{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);const t=Pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Pr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(lo)),this.expandByPoint(Pr.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new V,ho=new V,ls=new V,fi=new V,uo=new V,ds=new V,fo=new V;class iu{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ho.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(ho);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ls),a=fi.dot(this.direction),c=-fi.dot(ls),d=fi.lengthSq(),h=Math.abs(1-o*o);let f,u,p,_;if(h>0)if(f=o*c-a,u=o*a-c,_=s*h,f>=0)if(u>=-_)if(u<=_){const x=1/h;f*=x,u*=x,p=f*(f+o*u+2*a)+u*(o*f+u+2*c)+d}else u=s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+d;else u=-s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+d;else u<=-_?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+d):u<=_?(f=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+d):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+d);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ho).addScaledVector(ls,u),p}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),r=Kn.dot(Kn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const d=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return d>=0?(n=(e.min.x-u.x)*d,r=(e.max.x-u.x)*d):(n=(e.max.x-u.x)*d,r=(e.min.x-u.x)*d),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,r,s){uo.subVectors(t,e),ds.subVectors(n,e),fo.crossVectors(uo,ds);let o=this.direction.dot(fo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const c=a*this.direction.dot(ds.crossVectors(fi,ds));if(c<0)return null;const d=a*this.direction.dot(uo.cross(fi));if(d<0||c+d>o)return null;const h=-a*fi.dot(fo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,r,s,o,a,c,d,h,f,u,p,_,x,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,d,h,f,u,p,_,x,m)}set(e,t,n,r,s,o,a,c,d,h,f,u,p,_,x,m){const l=this.elements;return l[0]=e,l[4]=t,l[8]=n,l[12]=r,l[1]=s,l[5]=o,l[9]=a,l[13]=c,l[2]=d,l[6]=h,l[10]=f,l[14]=u,l[3]=p,l[7]=_,l[11]=x,l[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/er.setFromMatrixColumn(e,0).length(),s=1/er.setFromMatrixColumn(e,1).length(),o=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),d=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*h,p=o*f,_=a*h,x=a*f;t[0]=c*h,t[4]=-c*f,t[8]=d,t[1]=p+_*d,t[5]=u-x*d,t[9]=-a*c,t[2]=x-u*d,t[6]=_+p*d,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,p=c*f,_=d*h,x=d*f;t[0]=u+x*a,t[4]=_*a-p,t[8]=o*d,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=x+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,p=c*f,_=d*h,x=d*f;t[0]=u-x*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*d,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,p=o*f,_=a*h,x=a*f;t[0]=c*h,t[4]=_*d-p,t[8]=u*d+x,t[1]=c*f,t[5]=x*d+u,t[9]=p*d-_,t[2]=-d,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,p=o*d,_=a*c,x=a*d;t[0]=c*h,t[4]=x-u*f,t[8]=_*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-d*h,t[6]=p*f+_,t[10]=u-x*f}else if(e.order==="XZY"){const u=o*c,p=o*d,_=a*c,x=a*d;t[0]=c*h,t[4]=-f,t[8]=d*h,t[1]=u*f+x,t[5]=o*h,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ru,e,su)}lookAt(e,t,n){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),pi.crossVectors(n,pn),pi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),pi.crossVectors(n,pn)),pi.normalize(),hs.crossVectors(pn,pi),r[0]=pi.x,r[4]=hs.x,r[8]=pn.x,r[1]=pi.y,r[5]=hs.y,r[9]=pn.y,r[2]=pi.z,r[6]=hs.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],d=n[12],h=n[1],f=n[5],u=n[9],p=n[13],_=n[2],x=n[6],m=n[10],l=n[14],b=n[3],T=n[7],S=n[11],D=n[15],R=r[0],C=r[4],L=r[8],M=r[12],E=r[1],O=r[5],W=r[9],H=r[13],j=r[2],re=r[6],Z=r[10],se=r[14],q=r[3],ge=r[7],Ae=r[11],Ce=r[15];return s[0]=o*R+a*E+c*j+d*q,s[4]=o*C+a*O+c*re+d*ge,s[8]=o*L+a*W+c*Z+d*Ae,s[12]=o*M+a*H+c*se+d*Ce,s[1]=h*R+f*E+u*j+p*q,s[5]=h*C+f*O+u*re+p*ge,s[9]=h*L+f*W+u*Z+p*Ae,s[13]=h*M+f*H+u*se+p*Ce,s[2]=_*R+x*E+m*j+l*q,s[6]=_*C+x*O+m*re+l*ge,s[10]=_*L+x*W+m*Z+l*Ae,s[14]=_*M+x*H+m*se+l*Ce,s[3]=b*R+T*E+S*j+D*q,s[7]=b*C+T*O+S*re+D*ge,s[11]=b*L+T*W+S*Z+D*Ae,s[15]=b*M+T*H+S*se+D*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],d=e[13],h=e[2],f=e[6],u=e[10],p=e[14],_=e[3],x=e[7],m=e[11],l=e[15];return _*(+s*c*f-r*d*f-s*a*u+n*d*u+r*a*p-n*c*p)+x*(+t*c*p-t*d*u+s*o*u-r*o*p+r*d*h-s*c*h)+m*(+t*d*f-t*a*p-s*o*f+n*o*p+s*a*h-n*d*h)+l*(-r*a*h-t*c*f+t*a*u+r*o*f-n*o*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],d=e[7],h=e[8],f=e[9],u=e[10],p=e[11],_=e[12],x=e[13],m=e[14],l=e[15],b=f*m*d-x*u*d+x*c*p-a*m*p-f*c*l+a*u*l,T=_*u*d-h*m*d-_*c*p+o*m*p+h*c*l-o*u*l,S=h*x*d-_*f*d+_*a*p-o*x*p-h*a*l+o*f*l,D=_*f*c-h*x*c-_*a*u+o*x*u+h*a*m-o*f*m,R=t*b+n*T+r*S+s*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=b*C,e[1]=(x*u*s-f*m*s-x*r*p+n*m*p+f*r*l-n*u*l)*C,e[2]=(a*m*s-x*c*s+x*r*d-n*m*d-a*r*l+n*c*l)*C,e[3]=(f*c*s-a*u*s-f*r*d+n*u*d+a*r*p-n*c*p)*C,e[4]=T*C,e[5]=(h*m*s-_*u*s+_*r*p-t*m*p-h*r*l+t*u*l)*C,e[6]=(_*c*s-o*m*s-_*r*d+t*m*d+o*r*l-t*c*l)*C,e[7]=(o*u*s-h*c*s+h*r*d-t*u*d-o*r*p+t*c*p)*C,e[8]=S*C,e[9]=(_*f*s-h*x*s-_*n*p+t*x*p+h*n*l-t*f*l)*C,e[10]=(o*x*s-_*a*s+_*n*d-t*x*d-o*n*l+t*a*l)*C,e[11]=(h*a*s-o*f*s-h*n*d+t*f*d+o*n*p-t*a*p)*C,e[12]=D*C,e[13]=(h*x*r-_*f*r+_*n*u-t*x*u-h*n*m+t*f*m)*C,e[14]=(_*a*r-o*x*r-_*n*c+t*x*c+o*n*m-t*a*m)*C,e[15]=(o*f*r-h*a*r+h*n*c-t*f*c-o*n*u+t*a*u)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,d=s*o,h=s*a;return this.set(d*o+n,d*a-r*c,d*c+r*a,0,d*a+r*c,h*a+n,h*c-r*o,0,d*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,d=s+s,h=o+o,f=a+a,u=s*d,p=s*h,_=s*f,x=o*h,m=o*f,l=a*f,b=c*d,T=c*h,S=c*f,D=n.x,R=n.y,C=n.z;return r[0]=(1-(x+l))*D,r[1]=(p+S)*D,r[2]=(_-T)*D,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(u+l))*R,r[6]=(m+b)*R,r[7]=0,r[8]=(_+T)*C,r[9]=(m-b)*C,r[10]=(1-(u+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=er.set(r[0],r[1],r[2]).length();const o=er.set(r[4],r[5],r[6]).length(),a=er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const d=1/s,h=1/o,f=1/a;return In.elements[0]*=d,In.elements[1]*=d,In.elements[2]*=d,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,t.setFromRotationMatrix(In),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=si){const c=this.elements,d=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),u=(n+r)/(n-r);let p,_;if(a===si)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ws)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=si){const c=this.elements,d=1/(t-e),h=1/(n-r),f=1/(o-s),u=(t+e)*d,p=(n+r)*h;let _,x;if(a===si)_=(o+s)*f,x=-2*f;else if(a===Ws)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const er=new V,In=new Pt,ru=new V(0,0,0),su=new V(1,1,1),pi=new V,hs=new V,pn=new V,bc=new Pt,Ac=new Zr;class Wn{constructor(e=0,t=0,n=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],d=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ou=0;const Rc=new V,tr=new Zr,$n=new Pt,us=new V,Nr=new V,au=new V,cu=new Zr,wc=new V(1,0,0),Cc=new V(0,1,0),Ic=new V(0,0,1),Oc={type:"added"},lu={type:"removed"},nr={type:"childadded",child:null},po={type:"childremoved",child:null};class Zt extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new V,t=new Wn,n=new Zr,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new nt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(wc,e)}rotateY(e){return this.rotateOnAxis(Cc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return Rc.copy(e).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wc,e)}translateY(e){return this.translateOnAxis(Cc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?us.copy(e):us.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Nr,us,this.up):$n.lookAt(us,Nr,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),tr.setFromRotationMatrix($n),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oc),nr.child=e,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lu),po.child=e,this.dispatchEvent(po),po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oc),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const f=c[d];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,d=this.material.length;c<d;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),d=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const d in a){const h=a[d];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new V(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new V,jn=new V,mo=new V,Zn=new V,ir=new V,rr=new V,Dc=new V,_o=new V,go=new V,vo=new V,xo=new Lt,yo=new Lt,Eo=new Lt;class Nn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),On.subVectors(e,t),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){On.subVectors(r,t),jn.subVectors(n,t),mo.subVectors(e,t);const o=On.dot(On),a=On.dot(jn),c=On.dot(mo),d=jn.dot(jn),h=jn.dot(mo),f=o*d-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(d*c-a*h)*u,_=(o*h-a*c)*u;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return xo.setScalar(0),yo.setScalar(0),Eo.setScalar(0),xo.fromBufferAttribute(e,t),yo.fromBufferAttribute(e,n),Eo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xo,s.x),o.addScaledVector(yo,s.y),o.addScaledVector(Eo,s.z),o}static isFrontFacing(e,t,n,r){return On.subVectors(n,t),jn.subVectors(e,t),On.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),On.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Nn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ir.subVectors(r,n),rr.subVectors(s,n),_o.subVectors(e,n);const c=ir.dot(_o),d=rr.dot(_o);if(c<=0&&d<=0)return t.copy(n);go.subVectors(e,r);const h=ir.dot(go),f=rr.dot(go);if(h>=0&&f<=h)return t.copy(r);const u=c*f-h*d;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ir,o);vo.subVectors(e,s);const p=ir.dot(vo),_=rr.dot(vo);if(_>=0&&p<=_)return t.copy(s);const x=p*d-c*_;if(x<=0&&d>=0&&_<=0)return a=d/(d-_),t.copy(n).addScaledVector(rr,a);const m=h*_-p*f;if(m<=0&&f-h>=0&&p-_>=0)return Dc.subVectors(s,r),a=(f-h)/(f-h+(p-_)),t.copy(r).addScaledVector(Dc,a);const l=1/(m+x+u);return o=x*l,a=u*l,t.copy(n).addScaledVector(ir,o).addScaledVector(rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},fs={h:0,s:0,l:0};function So(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=Xh(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=So(o,s,e+1/3),this.g=So(o,s,e),this.b=So(o,s,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const n=id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return St.fromWorkingColorSpace(jt.copy(this),e),Math.round(ut(jt.r*255,0,255))*65536+Math.round(ut(jt.g*255,0,255))*256+Math.round(ut(jt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(jt.copy(this),t);const n=jt.r,r=jt.g,s=jt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,d;const h=(a+o)/2;if(a===o)c=0,d=0;else{const f=o-a;switch(d=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=d,e.l=h,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Rn){St.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,r=jt.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(fs);const n=ro(mi.h,fs.h,t),r=ro(mi.s,fs.s,t),s=ro(mi.l,fs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Mt;Mt.NAMES=id;let du=0;class Jr extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=gr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=$o,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==$o&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rd extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new V,ps=new bt;let hu=0;class Vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xc,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),e}}class sd extends Vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class od extends Vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ai extends Vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uu=0;const Mn=new Pt,Mo=new Zt,sr=new V,mn=new Qr,kr=new Qr,Yt=new V;class Ti extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ed(e)?od:sd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ai(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(mn.min,kr.min),mn.expandByPoint(Yt),Yt.addVectors(mn.max,kr.max),mn.expandByPoint(Yt)):(mn.expandByPoint(kr.min),mn.expandByPoint(kr.max))}mn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let d=0,h=a.count;d<h;d++)Yt.fromBufferAttribute(a,d),c&&(sr.fromBufferAttribute(e,d),Yt.add(sr)),r=Math.max(r,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new V,c[L]=new V;const d=new V,h=new V,f=new V,u=new bt,p=new bt,_=new bt,x=new V,m=new V;function l(L,M,E){d.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,E),u.fromBufferAttribute(s,L),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,E),h.sub(d),f.sub(d),p.sub(u),_.sub(u);const O=1/(p.x*_.y-_.x*p.y);isFinite(O)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(O),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(O),a[L].add(x),a[M].add(x),a[E].add(x),c[L].add(m),c[M].add(m),c[E].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,M=b.length;L<M;++L){const E=b[L],O=E.start,W=E.count;for(let H=O,j=O+W;H<j;H+=3)l(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new V,S=new V,D=new V,R=new V;function C(L){D.fromBufferAttribute(r,L),R.copy(D);const M=a[L];T.copy(M),T.sub(D.multiplyScalar(D.dot(M))).normalize(),S.crossVectors(R,M);const O=S.dot(c[L])<0?-1:1;o.setXYZW(L,T.x,T.y,T.z,O)}for(let L=0,M=b.length;L<M;++L){const E=b[L],O=E.start,W=E.count;for(let H=O,j=O+W;H<j;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new V,s=new V,o=new V,a=new V,c=new V,d=new V,h=new V,f=new V;if(e)for(let u=0,p=e.count;u<p;u+=3){const _=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,m),a.add(h),c.add(h),d.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){const d=a.array,h=a.itemSize,f=a.normalized,u=new d.constructor(c.length*h);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let l=0;l<h;l++)u[_++]=d[p++]}return new Vn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ti,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],d=e(c,n);t.setAttribute(a,d)}const s=this.morphAttributes;for(const a in s){const c=[],d=s[a];for(let h=0,f=d.length;h<f;h++){const u=d[h],p=e(u,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const d=o[a];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const d=n[c];e.data.attributes[c]=d.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let f=0,u=d.length;f<u;f++){const p=d[f];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const d in r){const h=r[d];this.setAttribute(d,h.clone(t))}const s=e.morphAttributes;for(const d in s){const h=[],f=s[d];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,h=o.length;d<h;d++){const f=o[d];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new Pt,Oi=new iu,ms=new Qa,Pc=new V,_s=new V,gs=new V,vs=new V,To=new V,xs=new V,Nc=new V,ys=new V;class Sn extends Zt{constructor(e=new Ti,t=new rd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){xs.set(0,0,0);for(let c=0,d=s.length;c<d;c++){const h=a[c],f=s[c];h!==0&&(To.fromBufferAttribute(f,e),o?xs.addScaledVector(To,h):xs.addScaledVector(To.sub(t),h))}t.add(xs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!(ms.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(ms,Pc)===null||Oi.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Lc.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(Lc),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,d=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=u.length;_<x;_++){const m=u[_],l=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,D=T;S<D;S+=3){const R=a.getX(S),C=a.getX(S+1),L=a.getX(S+2);r=Es(this,l,e,n,d,h,f,R,C,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,l=x;m<l;m+=3){const b=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);r=Es(this,o,e,n,d,h,f,b,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=u.length;_<x;_++){const m=u[_],l=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,D=T;S<D;S+=3){const R=S,C=S+1,L=S+2;r=Es(this,l,e,n,d,h,f,R,C,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,l=x;m<l;m+=3){const b=m,T=m+1,S=m+2;r=Es(this,o,e,n,d,h,f,b,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function fu(i,e,t,n,r,s,o,a){let c;if(e.side===hn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Si,a),c===null)return null;ys.copy(a),ys.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(ys);return d<t.near||d>t.far?null:{distance:d,point:ys.clone(),object:i}}function Es(i,e,t,n,r,s,o,a,c,d){i.getVertexPosition(a,_s),i.getVertexPosition(c,gs),i.getVertexPosition(d,vs);const h=fu(i,e,t,n,_s,gs,vs,Nc);if(h){const f=new V;Nn.getBarycoord(Nc,_s,gs,vs,f),r&&(h.uv=Nn.getInterpolatedAttribute(r,a,c,d,f,new bt)),s&&(h.uv1=Nn.getInterpolatedAttribute(s,a,c,d,f,new bt)),o&&(h.normal=Nn.getInterpolatedAttribute(o,a,c,d,f,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:d,normal:new V,materialIndex:0};Nn.getNormal(_s,gs,vs,u.normal),h.face=u,h.barycoord=f}return h}class bi extends Ti{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],d=[],h=[],f=[];let u=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ai(d,3)),this.setAttribute("normal",new ai(h,3)),this.setAttribute("uv",new ai(f,2));function _(x,m,l,b,T,S,D,R,C,L,M){const E=S/C,O=D/L,W=S/2,H=D/2,j=R/2,re=C+1,Z=L+1;let se=0,q=0;const ge=new V;for(let Ae=0;Ae<Z;Ae++){const Ce=Ae*O-H;for(let Ze=0;Ze<re;Ze++){const Xe=Ze*E-W;ge[x]=Xe*b,ge[m]=Ce*T,ge[l]=j,d.push(ge.x,ge.y,ge.z),ge[x]=0,ge[m]=0,ge[l]=R>0?1:-1,h.push(ge.x,ge.y,ge.z),f.push(Ze/C),f.push(1-Ae/L),se+=1}}for(let Ae=0;Ae<L;Ae++)for(let Ce=0;Ce<C;Ce++){const Ze=u+Ce+re*Ae,Xe=u+Ce+re*(Ae+1),Q=u+(Ce+1)+re*(Ae+1),ce=u+(Ce+1)+re*Ae;c.push(Ze,Xe,ce),c.push(Xe,Q,ce),q+=6}a.addGroup(p,q,M),p+=q,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function br(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=br(i[t]);for(const r in n)e[r]=n[r]}return e}function pu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ad(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const mu={clone:br,merge:en};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=pu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cd extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new V,kc=new bt,Uc=new bt;class wn extends cd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,kc,Uc),t.subVectors(Uc,kc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,d=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/d,r*=o.width/c,n*=o.height/d}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const or=-90,ar=1;class vu extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(or,ar,e,t);r.layers=this.layers,this.add(r);const s=new wn(or,ar,e,t);s.layers=this.layers,this.add(s);const o=new wn(or,ar,e,t);o.layers=this.layers,this.add(o);const a=new wn(or,ar,e,t);a.layers=this.layers,this.add(a);const c=new wn(or,ar,e,t);c.layers=this.layers,this.add(c);const d=new wn(or,ar,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const d of t)this.remove(d);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,d,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ld extends un{constructor(e=[],t=Sr,n,r,s,o,a,c,d,h){super(e,t,n,r,s,o,a,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xu extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ld(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new bi(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:yi});s.uniforms.tEquirect.value=t;const o=new Sn(r,s),a=t.minFilter;return t.minFilter===Xi&&(t.minFilter=Hn),new vu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class mr extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yu={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),l=this._getHandJoint(d,x);m!==null&&(l.matrix.fromArray(m.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=m.radius),l.visible=m!==null}const h=d.joints["index-finger-tip"],f=d.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,_=.005;d.inputState.pinching&&u>p+_?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&u<=p-_&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yu)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ja{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(e),this.near=t,this.far=n}clone(){return new Ja(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Eu extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ao=new V,Su=new V,Mu=new nt;class Fi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ao.subVectors(n,t).cross(Su.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ao),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mu.getNormalMatrix(e),r=this.coplanarPoint(Ao).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Qa,Ss=new V;class ec{constructor(e=new Fi,t=new Fi,n=new Fi,r=new Fi,s=new Fi,o=new Fi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],d=r[4],h=r[5],f=r[6],u=r[7],p=r[8],_=r[9],x=r[10],m=r[11],l=r[12],b=r[13],T=r[14],S=r[15];if(n[0].setComponents(c-s,u-d,m-p,S-l).normalize(),n[1].setComponents(c+s,u+d,m+p,S+l).normalize(),n[2].setComponents(c+o,u+h,m+_,S+b).normalize(),n[3].setComponents(c-o,u-h,m-_,S-b).normalize(),n[4].setComponents(c-a,u-f,m-x,S-T).normalize(),t===si)n[5].setComponents(c+a,u+f,m+x,S+T).normalize();else if(t===Ws)n[5].setComponents(a,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ss.x=r.normal.x>0?e.max.x:e.min.x,Ss.y=r.normal.y>0?e.max.y:e.min.y,Ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dd extends un{constructor(e,t,n=qi,r,s,o,a=Un,c=Un,d,h=qr){if(h!==qr&&h!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,h,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Za(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $s extends Ti{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),d=a+1,h=c+1,f=e/a,u=t/c,p=[],_=[],x=[],m=[];for(let l=0;l<h;l++){const b=l*u-o;for(let T=0;T<d;T++){const S=T*f-s;_.push(S,-b,0),x.push(0,0,1),m.push(T/a),m.push(1-l/c)}}for(let l=0;l<c;l++)for(let b=0;b<a;b++){const T=b+d*l,S=b+d*(l+1),D=b+1+d*(l+1),R=b+1+d*l;p.push(T,S,R),p.push(S,D,R)}this.setIndex(p),this.setAttribute("position",new ai(_,3)),this.setAttribute("normal",new ai(x,3)),this.setAttribute("uv",new ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}class js extends Jr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tu extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bu extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hd extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ro=new Pt,Fc=new V,Bc=new V;class Au{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),Ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ud extends cd{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,o=s+d*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ru extends Au{constructor(){super(new ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wu extends hd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new Ru}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cu extends hd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Iu extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function zc(i,e,t,n){const r=Ou(n);switch(t){case Xl:return i*e;case Yl:return i*e;case Kl:return i*e*2;case $l:return i*e/r.components*r.byteLength;case Ka:return i*e/r.components*r.byteLength;case jl:return i*e*2/r.components*r.byteLength;case $a:return i*e*2/r.components*r.byteLength;case ql:return i*e*3/r.components*r.byteLength;case kn:return i*e*4/r.components*r.byteLength;case ja:return i*e*4/r.components*r.byteLength;case Ls:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ns:case ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ca:case da:return Math.max(i,16)*Math.max(e,8)/4;case aa:case la:return Math.max(i,8)*Math.max(e,8)/2;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Us:case wa:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zl:case Ia:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oa:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ou(i){switch(i){case ci:case Gl:return{byteLength:1,components:1};case Wr:case Vl:case $r:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case qi:case Xa:case ri:return{byteLength:4,components:1};case Wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);function fd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Du(i){const e=new WeakMap;function t(a,c){const d=a.array,h=a.usage,f=d.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,d,h),a.onUploadCallback();let p;if(d instanceof Float32Array)p=i.FLOAT;else if(d instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)p=i.SHORT;else if(d instanceof Uint32Array)p=i.UNSIGNED_INT;else if(d instanceof Int32Array)p=i.INT;else if(d instanceof Int8Array)p=i.BYTE;else if(d instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,d){const h=c.array,f=c.updateRanges;if(i.bindBuffer(d,a),f.length===0)i.bufferSubData(d,0,h);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){const _=f[u],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];i.bufferSubData(d,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const d=e.get(a);if(d===void 0)e.set(a,t(a,c));else if(d.version<a.version){if(d.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,a,c),d.version=a.version}}return{get:r,remove:s,update:o}}var Lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ku=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,df="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ef=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Af=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Df=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,em=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:Lu,alphahash_pars_fragment:Pu,alphamap_fragment:Nu,alphamap_pars_fragment:ku,alphatest_fragment:Uu,alphatest_pars_fragment:Fu,aomap_fragment:Bu,aomap_pars_fragment:zu,batching_pars_vertex:Hu,batching_vertex:Gu,begin_vertex:Vu,beginnormal_vertex:Wu,bsdfs:Xu,iridescence_fragment:qu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:Ku,clipping_planes_pars_fragment:$u,clipping_planes_pars_vertex:ju,clipping_planes_vertex:Zu,color_fragment:Qu,color_pars_fragment:Ju,color_pars_vertex:ef,color_vertex:tf,common:nf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:sf,displacementmap_pars_vertex:of,displacementmap_vertex:af,emissivemap_fragment:cf,emissivemap_pars_fragment:lf,colorspace_fragment:df,colorspace_pars_fragment:hf,envmap_fragment:uf,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Af,envmap_vertex:_f,fog_vertex:gf,fog_pars_vertex:vf,fog_fragment:xf,fog_pars_fragment:yf,gradientmap_pars_fragment:Ef,lightmap_pars_fragment:Sf,lights_lambert_fragment:Mf,lights_lambert_pars_fragment:Tf,lights_pars_begin:bf,lights_toon_fragment:Rf,lights_toon_pars_fragment:wf,lights_phong_fragment:Cf,lights_phong_pars_fragment:If,lights_physical_fragment:Of,lights_physical_pars_fragment:Df,lights_fragment_begin:Lf,lights_fragment_maps:Pf,lights_fragment_end:Nf,logdepthbuf_fragment:kf,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Bf,map_fragment:zf,map_pars_fragment:Hf,map_particle_fragment:Gf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:Yf,morphnormal_vertex:Kf,morphtarget_pars_vertex:$f,morphtarget_vertex:jf,normal_fragment_begin:Zf,normal_fragment_maps:Qf,normal_pars_fragment:Jf,normal_pars_vertex:ep,normal_vertex:tp,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:sp,iridescence_pars_fragment:op,opaque_fragment:ap,packing:cp,premultiplied_alpha_fragment:lp,project_vertex:dp,dithering_fragment:hp,dithering_pars_fragment:up,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:_p,shadowmap_vertex:gp,shadowmask_pars_fragment:vp,skinbase_vertex:xp,skinning_pars_vertex:yp,skinning_vertex:Ep,skinnormal_vertex:Sp,specularmap_fragment:Mp,specularmap_pars_fragment:Tp,tonemapping_fragment:bp,tonemapping_pars_fragment:Ap,transmission_fragment:Rp,transmission_pars_fragment:wp,uv_pars_fragment:Cp,uv_pars_vertex:Ip,uv_vertex:Op,worldpos_vertex:Dp,background_vert:Lp,background_frag:Pp,backgroundCube_vert:Np,backgroundCube_frag:kp,cube_vert:Up,cube_frag:Fp,depth_vert:Bp,depth_frag:zp,distanceRGBA_vert:Hp,distanceRGBA_frag:Gp,equirect_vert:Vp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:Yp,meshbasic_frag:Kp,meshlambert_vert:$p,meshlambert_frag:jp,meshmatcap_vert:Zp,meshmatcap_frag:Qp,meshnormal_vert:Jp,meshnormal_frag:em,meshphong_vert:tm,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:rm,meshtoon_vert:sm,meshtoon_frag:om,points_vert:am,points_frag:cm,shadow_vert:lm,shadow_frag:dm,sprite_vert:hm,sprite_frag:um},xe={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},zn={basic:{uniforms:en([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:en([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Mt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:en([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:en([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:en([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Mt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:en([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:en([xe.points,xe.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:en([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:en([xe.common,xe.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:en([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:en([xe.sprite,xe.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:en([xe.common,xe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:en([xe.lights,xe.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};zn.physical={uniforms:en([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ms={r:0,b:0,g:0},Li=new Wn,fm=new Pt;function pm(i,e,t,n,r,s,o){const a=new Mt(0);let c=s===!0?0:1,d,h,f=null,u=0,p=null;function _(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function x(T){let S=!1;const D=_(T);D===null?l(a,c):D&&D.isColor&&(l(D,1),S=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,S){const D=_(S);D&&(D.isCubeTexture||D.mapping===Ks)?(h===void 0&&(h=new Sn(new bi(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:br(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Li.copy(S.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fm.makeRotationFromEuler(Li)),h.material.toneMapped=St.getTransfer(D.colorSpace)!==Ct,(f!==D||u!==D.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=D,u=D.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(d===void 0&&(d=new Sn(new $s(2,2),new Mi({name:"BackgroundMaterial",uniforms:br(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=D,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.toneMapped=St.getTransfer(D.colorSpace)!==Ct,D.matrixAutoUpdate===!0&&D.updateMatrix(),d.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||u!==D.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,f=D,u=D.version,p=i.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null))}function l(T,S){T.getRGB(Ms,ad(i)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,S,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),c=S,l(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,l(a,c)},render:x,addToRenderList:m,dispose:b}}function mm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,o=!1;function a(E,O,W,H,j){let re=!1;const Z=f(H,W,O);s!==Z&&(s=Z,d(s.object)),re=p(E,H,W,j),re&&_(E,H,W,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,S(E,O,W,H),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function d(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function f(E,O,W){const H=W.wireframe===!0;let j=n[E.id];j===void 0&&(j={},n[E.id]=j);let re=j[O.id];re===void 0&&(re={},j[O.id]=re);let Z=re[H];return Z===void 0&&(Z=u(c()),re[H]=Z),Z}function u(E){const O=[],W=[],H=[];for(let j=0;j<t;j++)O[j]=0,W[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:H,object:E,attributes:{},index:null}}function p(E,O,W,H){const j=s.attributes,re=O.attributes;let Z=0;const se=W.getAttributes();for(const q in se)if(se[q].location>=0){const Ae=j[q];let Ce=re[q];if(Ce===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(Ce=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(Ce=E.instanceColor)),Ae===void 0||Ae.attribute!==Ce||Ce&&Ae.data!==Ce.data)return!0;Z++}return s.attributesNum!==Z||s.index!==H}function _(E,O,W,H){const j={},re=O.attributes;let Z=0;const se=W.getAttributes();for(const q in se)if(se[q].location>=0){let Ae=re[q];Ae===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(Ae=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(Ae=E.instanceColor));const Ce={};Ce.attribute=Ae,Ae&&Ae.data&&(Ce.data=Ae.data),j[q]=Ce,Z++}s.attributes=j,s.attributesNum=Z,s.index=H}function x(){const E=s.newAttributes;for(let O=0,W=E.length;O<W;O++)E[O]=0}function m(E){l(E,0)}function l(E,O){const W=s.newAttributes,H=s.enabledAttributes,j=s.attributeDivisors;W[E]=1,H[E]===0&&(i.enableVertexAttribArray(E),H[E]=1),j[E]!==O&&(i.vertexAttribDivisor(E,O),j[E]=O)}function b(){const E=s.newAttributes,O=s.enabledAttributes;for(let W=0,H=O.length;W<H;W++)O[W]!==E[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function T(E,O,W,H,j,re,Z){Z===!0?i.vertexAttribIPointer(E,O,W,j,re):i.vertexAttribPointer(E,O,W,H,j,re)}function S(E,O,W,H){x();const j=H.attributes,re=W.getAttributes(),Z=O.defaultAttributeValues;for(const se in re){const q=re[se];if(q.location>=0){let ge=j[se];if(ge===void 0&&(se==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),se==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor)),ge!==void 0){const Ae=ge.normalized,Ce=ge.itemSize,Ze=e.get(ge);if(Ze===void 0)continue;const Xe=Ze.buffer,Q=Ze.type,ce=Ze.bytesPerElement,Ie=Q===i.INT||Q===i.UNSIGNED_INT||ge.gpuType===Xa;if(ge.isInterleavedBufferAttribute){const pe=ge.data,Ge=pe.stride,mt=ge.offset;if(pe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<q.locationSize;Ve++)l(q.location+Ve,pe.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ve=0;Ve<q.locationSize;Ve++)m(q.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ve=0;Ve<q.locationSize;Ve++)T(q.location+Ve,Ce/q.locationSize,Q,Ae,Ge*ce,(mt+Ce/q.locationSize*Ve)*ce,Ie)}else{if(ge.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)l(q.location+pe,ge.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let pe=0;pe<q.locationSize;pe++)m(q.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let pe=0;pe<q.locationSize;pe++)T(q.location+pe,Ce/q.locationSize,Q,Ae,Ce*ce,Ce/q.locationSize*pe*ce,Ie)}}else if(Z!==void 0){const Ae=Z[se];if(Ae!==void 0)switch(Ae.length){case 2:i.vertexAttrib2fv(q.location,Ae);break;case 3:i.vertexAttrib3fv(q.location,Ae);break;case 4:i.vertexAttrib4fv(q.location,Ae);break;default:i.vertexAttrib1fv(q.location,Ae)}}}}b()}function D(){L();for(const E in n){const O=n[E];for(const W in O){const H=O[W];for(const j in H)h(H[j].object),delete H[j];delete O[W]}delete n[E]}}function R(E){if(n[E.id]===void 0)return;const O=n[E.id];for(const W in O){const H=O[W];for(const j in H)h(H[j].object),delete H[j];delete O[W]}delete n[E.id]}function C(E){for(const O in n){const W=n[O];if(W[E.id]===void 0)continue;const H=W[E.id];for(const j in H)h(H[j].object),delete H[j];delete W[E.id]}}function L(){M(),o=!0,s!==r&&(s=r,d(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function _m(i,e,t){let n;function r(d){n=d}function s(d,h){i.drawArrays(n,d,h),t.update(h,n,1)}function o(d,h,f){f!==0&&(i.drawArraysInstanced(n,d,h,f),t.update(h,n,f))}function a(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];t.update(p,n,1)}function c(d,h,f,u){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d.length;_++)o(d[_],h[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(n,d,0,h,0,u,0,f);let _=0;for(let x=0;x<f;x++)_+=h[x]*u[x];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function gm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==kn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===$r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ci&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ri&&!L)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const h=c(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),l=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:d,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:l,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:D,maxSamples:R}}function vm(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Fi,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||r;return r=u,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,l=i.get(f);if(!r||_===null||_.length===0||s&&!m)s?h(null):d();else{const b=s?0:n,T=b*4;let S=l.clippingState||null;c.value=S,S=h(_,u,T,p);for(let D=0;D!==T;++D)S[D]=t[D];l.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const l=p+x*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<l)&&(m=new Float32Array(l));for(let T=0,S=p;T!==x;++T,S+=4)o.copy(f[T]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function xm(i){let e=new WeakMap;function t(o,a){return a===ia?o.mapping=Sr:a===ra&&(o.mapping=Mr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ia||a===ra)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const d=new xu(c.height);return d.fromEquirectangularTexture(i,o),e.set(o,d),o.addEventListener("dispose",r),t(d.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const _r=4,Hc=[.125,.215,.35,.446,.526,.582],Gi=20,wo=new ud,Gc=new Mt;let Co=null,Io=0,Oo=0,Do=!1;const Bi=(1+Math.sqrt(5))/2,cr=1/Bi,Vc=[new V(-Bi,cr,0),new V(Bi,cr,0),new V(-cr,0,Bi),new V(cr,0,Bi),new V(0,Bi,-cr),new V(0,Bi,cr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],ym=new V;class Wc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=ym}=s;Co=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Co,Io,Oo),this._renderer.xr.enabled=Do,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:$r,format:kn,colorSpace:Tr,depthBuffer:!1},r=Xc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Em(s)),this._blurMaterial=Sm(s,e,t)}return r}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,wo)}_sceneToCubeUV(e,t,n,r,s){const c=new wn(90,1,t,n),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(Gc),f.toneMapping=Ei,f.autoClear=!1;const _=new rd({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),x=new Sn(new bi,_);let m=!1;const l=e.background;l?l.isColor&&(_.color.copy(l),e.background=null,m=!0):(_.color.copy(Gc),m=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(c.up.set(0,d[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[b],s.y,s.z)):T===1?(c.up.set(0,0,d[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[b],s.z)):(c.up.set(0,d[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[b]));const S=this._cubeSize;Ts(r,T*S,b>2?S:0,S,S),f.setRenderTarget(r),m&&f.render(x,c),f.render(e,c)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=p,f.autoClear=u,e.background=l}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Sr||e.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ts(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,wo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vc[(r-s-1)%Vc.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Sn(this._lodPlanes[r],d),u=d.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Gi-1),x=s/_,m=isFinite(s)?1+Math.floor(h*x):Gi;m>Gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const l=[];let b=0;for(let C=0;C<Gi;++C){const L=C/x,M=Math.exp(-L*L/2);l.push(M),C===0?b+=M:C<m&&(b+=2*M)}for(let C=0;C<l.length;C++)l[C]=l[C]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=l,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:T}=this;u.dTheta.value=_,u.mipInt.value=T-n;const S=this._sizeLods[r],D=3*S*(r>T-_r?r-T+_r:0),R=4*(this._cubeSize-S);Ts(t,D,R,3*S,2*S),c.setRenderTarget(t),c.render(f,wo)}}function Em(i){const e=[],t=[],n=[];let r=i;const s=i-_r+1+Hc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-_r?c=Hc[o-i+_r-1]:o===0&&(c=0),n.push(c);const d=1/(a-2),h=-d,f=1+d,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,x=3,m=2,l=1,b=new Float32Array(x*_*p),T=new Float32Array(m*_*p),S=new Float32Array(l*_*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,L=R>2?0:-1,M=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];b.set(M,x*_*R),T.set(u,m*_*R);const E=[R,R,R,R,R,R];S.set(E,l*_*R)}const D=new Ti;D.setAttribute("position",new Vn(b,x)),D.setAttribute("uv",new Vn(T,m)),D.setAttribute("faceIndex",new Vn(S,l)),e.push(D),r>_r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xc(i,e,t){const n=new Yi(i,e,t);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Sm(i,e,t){const n=new Float32Array(Gi),r=new V(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function qc(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Yc(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,d=c===ia||c===ra,h=c===Sr||c===Mr;if(d||h){let f=e.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Wc(i)),f=d?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return d&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Wc(i)),f=d?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const d=6;for(let h=0;h<d;h++)a[h]!==void 0&&c++;return c===d}function s(a){const c=a.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Tm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bm(i,e,t,n){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const p in u)e.update(u[p],i.ARRAY_BUFFER)}function d(f){const u=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let T=0,S=b.length;T<S;T+=3){const D=b[T+0],R=b[T+1],C=b[T+2];u.push(D,R,R,C,C,D)}}else if(_!==void 0){const b=_.array;x=_.version;for(let T=0,S=b.length/3-1;T<S;T+=3){const D=T+0,R=T+1,C=T+2;u.push(D,R,R,C,C,D)}}else return;const m=new(ed(u)?od:sd)(u,1);m.version=x;const l=s.get(f);l&&e.remove(l),s.set(f,m)}function h(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&d(f)}else d(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Am(i,e,t){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,p){i.drawElements(n,p,s,u*o),t.update(p,n,1)}function d(u,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,u*o,_),t.update(p,n,_))}function h(u,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,_);let m=0;for(let l=0;l<_;l++)m+=p[l];t.update(m,n,1)}function f(u,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let l=0;l<u.length;l++)d(u[l]/o,p[l],x[l]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,x,0,_);let l=0;for(let b=0;b<_;b++)l+=p[b]*x[b];t.update(l,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Rm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wm(i,e,t){const n=new WeakMap,r=new Lt;function s(o,a,c){const d=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],l=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let T=0;p===!0&&(T=1),_===!0&&(T=2),x===!0&&(T=3);let S=a.attributes.position.count*T,D=1;S>e.maxTextureSize&&(D=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*D*4*f),C=new td(R,S,D,f);C.type=ri,C.needsUpdate=!0;const L=T*4;for(let E=0;E<f;E++){const O=m[E],W=l[E],H=b[E],j=S*D*4*E;for(let re=0;re<O.count;re++){const Z=re*L;p===!0&&(r.fromBufferAttribute(O,re),R[j+Z+0]=r.x,R[j+Z+1]=r.y,R[j+Z+2]=r.z,R[j+Z+3]=0),_===!0&&(r.fromBufferAttribute(W,re),R[j+Z+4]=r.x,R[j+Z+5]=r.y,R[j+Z+6]=r.z,R[j+Z+7]=0),x===!0&&(r.fromBufferAttribute(H,re),R[j+Z+8]=r.x,R[j+Z+9]=r.y,R[j+Z+10]=r.z,R[j+Z+11]=H.itemSize===4?r.w:1)}}u={count:f,texture:C,size:new bt(S,D)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<d.length;x++)p+=d[x];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",d)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Cm(i,e,t,n){let r=new WeakMap;function s(c){const d=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return f}function o(){r=new WeakMap}function a(c){const d=c.target;d.removeEventListener("dispose",a),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const pd=new un,Kc=new dd(1,1),md=new td,_d=new tu,gd=new ld,$c=[],jc=[],Zc=new Float32Array(16),Qc=new Float32Array(9),Jc=new Float32Array(4);function Rr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=$c[r];if(s===void 0&&(s=new Float32Array(r),$c[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zs(i,e){let t=jc[e];t===void 0&&(t=new Int32Array(e),jc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Pm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Jc.set(n),i.uniformMatrix2fv(this.addr,!1,Jc),Xt(t,n)}}function Nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Qc.set(n),i.uniformMatrix3fv(this.addr,!1,Qc),Xt(t,n)}}function km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Zc.set(n),i.uniformMatrix4fv(this.addr,!1,Zc),Xt(t,n)}}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function Xm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Kc.compareFunction=Jl,s=Kc):s=pd,t.setTexture2D(e||s,r)}function qm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||_d,r)}function Ym(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||gd,r)}function Km(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||md,r)}function $m(i){switch(i){case 5126:return Im;case 35664:return Om;case 35665:return Dm;case 35666:return Lm;case 35674:return Pm;case 35675:return Nm;case 35676:return km;case 5124:case 35670:return Um;case 35667:case 35671:return Fm;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return Hm;case 36294:return Gm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return Km}}function jm(i,e){i.uniform1fv(this.addr,e)}function Zm(i,e){const t=Rr(e,this.size,2);i.uniform2fv(this.addr,t)}function Qm(i,e){const t=Rr(e,this.size,3);i.uniform3fv(this.addr,t)}function Jm(i,e){const t=Rr(e,this.size,4);i.uniform4fv(this.addr,t)}function e_(i,e){const t=Rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function t_(i,e){const t=Rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function n_(i,e){const t=Rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function i_(i,e){i.uniform1iv(this.addr,e)}function r_(i,e){i.uniform2iv(this.addr,e)}function s_(i,e){i.uniform3iv(this.addr,e)}function o_(i,e){i.uniform4iv(this.addr,e)}function a_(i,e){i.uniform1uiv(this.addr,e)}function c_(i,e){i.uniform2uiv(this.addr,e)}function l_(i,e){i.uniform3uiv(this.addr,e)}function d_(i,e){i.uniform4uiv(this.addr,e)}function h_(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||pd,s[o])}function u_(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||_d,s[o])}function f_(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||gd,s[o])}function p_(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||md,s[o])}function m_(i){switch(i){case 5126:return jm;case 35664:return Zm;case 35665:return Qm;case 35666:return Jm;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return r_;case 35668:case 35672:return s_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return c_;case 36295:return l_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}class __{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$m(t.type)}}class g_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m_(t.type)}}class v_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function el(i,e){i.seq.push(e),i.map[e.id]=e}function x_(i,e,t){const n=i.name,r=n.length;for(Lo.lastIndex=0;;){const s=Lo.exec(n),o=Lo.lastIndex;let a=s[1];const c=s[2]==="]",d=s[3];if(c&&(a=a|0),d===void 0||d==="["&&o+2===r){el(t,d===void 0?new __(a,i,e):new g_(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new v_(a),el(t,f)),t=f}}}class Bs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);x_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function tl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const y_=37297;let E_=0;function S_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const nl=new nt;function M_(i){St._getMatrix(nl,St.workingColorSpace,i);const e=`mat3( ${nl.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(i)){case Vs:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function il(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+S_(i.getShaderSource(e),o)}else return r}function T_(i,e){const t=M_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function b_(i,e){let t;switch(e){case Rh:t="Linear";break;case wh:t="Reinhard";break;case Ch:t="Cineon";break;case Ih:t="ACESFilmic";break;case Dh:t="AgX";break;case Lh:t="Neutral";break;case Oh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bs=new V;function A_(){St.getLuminanceCoefficients(bs);const i=bs.x.toFixed(4),e=bs.y.toFixed(4),t=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function w_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function C_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Vr(i){return i!==""}function rl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(i){return i.replace(I_,D_)}const O_=new Map;function D_(i,e){let t=it[e];if(t===void 0){const n=O_.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pa(t)}const L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(i){return i.replace(L_,P_)}function P_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function al(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function N_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function k_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Sr:case Mr:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Mr&&(e="ENVMAP_MODE_REFRACTION"),e}function F_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wa:e="ENVMAP_BLENDING_MULTIPLY";break;case bh:e="ENVMAP_BLENDING_MIX";break;case Ah:e="ENVMAP_BLENDING_ADD";break}return e}function B_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function z_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=N_(t),d=k_(t),h=U_(t),f=F_(t),u=B_(t),p=R_(t),_=w_(s),x=r.createProgram();let m,l,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vr).join(`
`),m.length>0&&(m+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vr).join(`
`),l.length>0&&(l+=`
`)):(m=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),l=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?it.tonemapping_pars_fragment:"",t.toneMapping!==Ei?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,T_("linearToOutputTexel",t.outputColorSpace),A_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),o=Pa(o),o=rl(o,t),o=sl(o,t),a=Pa(a),a=rl(a,t),a=sl(a,t),o=ol(o),a=ol(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,l=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const T=b+m+o,S=b+l+a,D=tl(r,r.VERTEX_SHADER,T),R=tl(r,r.FRAGMENT_SHADER,S);r.attachShader(x,D),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(O){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(D).trim(),j=r.getShaderInfoLog(R).trim();let re=!0,Z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,D,R);else{const se=il(r,D,"vertex"),q=il(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+W+`
`+se+`
`+q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||j==="")&&(Z=!1);Z&&(O.diagnostics={runnable:re,programLog:W,vertexShader:{log:H,prefix:m},fragmentShader:{log:j,prefix:l}})}r.deleteShader(D),r.deleteShader(R),L=new Bs(r,x),M=C_(r,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,y_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=R,this}let H_=0;class G_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new V_(e),t.set(e,n)),n}}class V_{constructor(e){this.id=H_++,this.code=e,this.usedTimes=0}}function W_(i,e,t,n,r,s,o){const a=new nd,c=new G_,d=new Set,h=[],f=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return d.add(M),M===0?"uv":`uv${M}`}function m(M,E,O,W,H){const j=W.fog,re=H.geometry,Z=M.isMeshStandardMaterial?W.environment:null,se=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),q=se&&se.mapping===Ks?se.image.height:null,ge=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Ae=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ce=Ae!==void 0?Ae.length:0;let Ze=0;re.morphAttributes.position!==void 0&&(Ze=1),re.morphAttributes.normal!==void 0&&(Ze=2),re.morphAttributes.color!==void 0&&(Ze=3);let Xe,Q,ce,Ie;if(ge){const tt=zn[ge];Xe=tt.vertexShader,Q=tt.fragmentShader}else Xe=M.vertexShader,Q=M.fragmentShader,c.update(M),ce=c.getVertexShaderID(M),Ie=c.getFragmentShaderID(M);const pe=i.getRenderTarget(),Ge=i.state.buffers.depth.getReversed(),mt=H.isInstancedMesh===!0,Ve=H.isBatchedMesh===!0,Rt=!!M.map,It=!!M.matcap,st=!!se,I=!!M.aoMap,sn=!!M.lightMap,lt=!!M.bumpMap,Qe=!!M.normalMap,Oe=!!M.displacementMap,Je=!!M.emissiveMap,De=!!M.metalnessMap,A=!!M.roughnessMap,g=M.anisotropy>0,F=M.clearcoat>0,ee=M.dispersion>0,ie=M.iridescence>0,$=M.sheen>0,ye=M.transmission>0,Se=g&&!!M.anisotropyMap,Re=F&&!!M.clearcoatMap,at=F&&!!M.clearcoatNormalMap,J=F&&!!M.clearcoatRoughnessMap,fe=ie&&!!M.iridescenceMap,Fe=ie&&!!M.iridescenceThicknessMap,Ye=$&&!!M.sheenColorMap,_e=$&&!!M.sheenRoughnessMap,et=!!M.specularMap,je=!!M.specularColorMap,At=!!M.specularIntensityMap,P=ye&&!!M.transmissionMap,Ee=ye&&!!M.thicknessMap,Y=!!M.gradientMap,te=!!M.alphaMap,Me=M.alphaTest>0,ve=!!M.alphaHash,Be=!!M.extensions;let ct=Ei;M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ct=i.toneMapping);const Gt={shaderID:ge,shaderType:M.type,shaderName:M.name,vertexShader:Xe,fragmentShader:Q,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:Ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&H._colorsTexture!==null,instancing:mt,instancingColor:mt&&H.instanceColor!==null,instancingMorph:mt&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Tr,alphaToCoverage:!!M.alphaToCoverage,map:Rt,matcap:It,envMap:st,envMapMode:st&&se.mapping,envMapCubeUVHeight:q,aoMap:I,lightMap:sn,bumpMap:lt,normalMap:Qe,displacementMap:u&&Oe,emissiveMap:Je,normalMapObjectSpace:Qe&&M.normalMapType===Uh,normalMapTangentSpace:Qe&&M.normalMapType===Ql,metalnessMap:De,roughnessMap:A,anisotropy:g,anisotropyMap:Se,clearcoat:F,clearcoatMap:Re,clearcoatNormalMap:at,clearcoatRoughnessMap:J,dispersion:ee,iridescence:ie,iridescenceMap:fe,iridescenceThicknessMap:Fe,sheen:$,sheenColorMap:Ye,sheenRoughnessMap:_e,specularMap:et,specularColorMap:je,specularIntensityMap:At,transmission:ye,transmissionMap:P,thicknessMap:Ee,gradientMap:Y,opaque:M.transparent===!1&&M.blending===gr&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:Me,alphaHash:ve,combine:M.combine,mapUv:Rt&&x(M.map.channel),aoMapUv:I&&x(M.aoMap.channel),lightMapUv:sn&&x(M.lightMap.channel),bumpMapUv:lt&&x(M.bumpMap.channel),normalMapUv:Qe&&x(M.normalMap.channel),displacementMapUv:Oe&&x(M.displacementMap.channel),emissiveMapUv:Je&&x(M.emissiveMap.channel),metalnessMapUv:De&&x(M.metalnessMap.channel),roughnessMapUv:A&&x(M.roughnessMap.channel),anisotropyMapUv:Se&&x(M.anisotropyMap.channel),clearcoatMapUv:Re&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:at&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(M.sheenRoughnessMap.channel),specularMapUv:et&&x(M.specularMap.channel),specularColorMapUv:je&&x(M.specularColorMap.channel),specularIntensityMapUv:At&&x(M.specularIntensityMap.channel),transmissionMapUv:P&&x(M.transmissionMap.channel),thicknessMapUv:Ee&&x(M.thicknessMap.channel),alphaMapUv:te&&x(M.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Qe||g),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!re.attributes.uv&&(Rt||te),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ge,skinning:H.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:Rt&&M.map.isVideoTexture===!0&&St.getTransfer(M.map.colorSpace)===Ct,decodeVideoTextureEmissive:Je&&M.emissiveMap.isVideoTexture===!0&&St.getTransfer(M.emissiveMap.colorSpace)===Ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ni,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&M.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Gt.vertexUv1s=d.has(1),Gt.vertexUv2s=d.has(2),Gt.vertexUv3s=d.has(3),d.clear(),Gt}function l(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)E.push(O),E.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(b(E,M),T(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function b(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function T(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const E=_[M.type];let O;if(E){const W=zn[E];O=mu.clone(W.uniforms)}else O=M.uniforms;return O}function D(M,E){let O;for(let W=0,H=h.length;W<H;W++){const j=h[W];if(j.cacheKey===E){O=j,++O.usedTimes;break}}return O===void 0&&(O=new z_(i,E,M,s),h.push(O)),O}function R(M){if(--M.usedTimes===0){const E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function C(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:l,getUniforms:S,acquireProgram:D,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:L}}function X_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ll(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,u,p,_,x,m){let l=i[e];return l===void 0?(l={id:f.id,object:f,geometry:u,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},i[e]=l):(l.id=f.id,l.object=f,l.geometry=u,l.material=p,l.groupOrder=_,l.renderOrder=f.renderOrder,l.z=x,l.group=m),e++,l}function a(f,u,p,_,x,m){const l=o(f,u,p,_,x,m);p.transmission>0?n.push(l):p.transparent===!0?r.push(l):t.push(l)}function c(f,u,p,_,x,m){const l=o(f,u,p,_,x,m);p.transmission>0?n.unshift(l):p.transparent===!0?r.unshift(l):t.unshift(l)}function d(f,u){t.length>1&&t.sort(f||q_),n.length>1&&n.sort(u||cl),r.length>1&&r.sort(u||cl)}function h(){for(let f=e,u=i.length;f<u;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:d}}function Y_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ll,i.set(n,[o])):r>=s.length?(o=new ll,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function K_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Mt};break;case"SpotLight":t={position:new V,direction:new V,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function $_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let j_=0;function Z_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Q_(i){const e=new K_,t=$_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new V);const r=new V,s=new Pt,o=new Pt;function a(d){let h=0,f=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,x=0,m=0,l=0,b=0,T=0,S=0,D=0,R=0,C=0;d.sort(Z_);for(let M=0,E=d.length;M<E;M++){const O=d[M],W=O.color,H=O.intensity,j=O.distance,re=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=W.r*H,f+=W.g*H,u+=W.b*H;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(O.sh.coefficients[Z],H);C++}else if(O.isDirectionalLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const se=O.shadow,q=t.get(O);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=O.shadow.matrix,b++}n.directional[p]=Z,p++}else if(O.isSpotLight){const Z=e.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(W).multiplyScalar(H),Z.distance=j,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,n.spot[x]=Z;const se=O.shadow;if(O.map&&(n.spotLightMap[D]=O.map,D++,se.updateMatrices(O),O.castShadow&&R++),n.spotLightMatrix[x]=se.matrix,O.castShadow){const q=t.get(O);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=re,S++}x++}else if(O.isRectAreaLight){const Z=e.get(O);Z.color.copy(W).multiplyScalar(H),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),n.rectArea[m]=Z,m++}else if(O.isPointLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){const se=O.shadow,q=t.get(O);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,q.shadowCameraNear=se.camera.near,q.shadowCameraFar=se.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=re,n.pointShadowMatrix[_]=O.shadow.matrix,T++}n.point[_]=Z,_++}else if(O.isHemisphereLight){const Z=e.get(O);Z.skyColor.copy(O.color).multiplyScalar(H),Z.groundColor.copy(O.groundColor).multiplyScalar(H),n.hemi[l]=Z,l++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==l||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==S||L.numSpotMaps!==D||L.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=l,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+D-R,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,L.directionalLength=p,L.pointLength=_,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=l,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=S,L.numSpotMaps=D,L.numLightProbes=C,n.version=j_++)}function c(d,h){let f=0,u=0,p=0,_=0,x=0;const m=h.matrixWorldInverse;for(let l=0,b=d.length;l<b;l++){const T=d[l];if(T.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(T.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),u++}else if(T.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function dl(i){const e=new Q_(i),t=[],n=[];function r(h){d.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function J_(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new dl(i),e.set(r,[a])):s>=o.length?(a=new dl(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n0(i,e,t){let n=new ec;const r=new bt,s=new bt,o=new Lt,a=new Tu({depthPacking:kh}),c=new bu,d={},h=t.maxTextureSize,f={[Si]:hn,[hn]:Si,[ni]:ni},u=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:e0,fragmentShader:t0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ti;_.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Sn(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let l=this.type;this.render=function(R,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),E=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),W=i.state;W.setBlending(yi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=l!==Jn&&this.type===Jn,j=l===Jn&&this.type!==Jn;for(let re=0,Z=R.length;re<Z;re++){const se=R[re],q=se.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ge=q.getFrameExtents();if(r.multiply(ge),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ge.x),r.x=s.x*ge.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ge.y),r.y=s.y*ge.y,q.mapSize.y=s.y)),q.map===null||H===!0||j===!0){const Ce=this.type!==Jn?{minFilter:Un,magFilter:Un}:{};q.map!==null&&q.map.dispose(),q.map=new Yi(r.x,r.y,Ce),q.map.texture.name=se.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const Ae=q.getViewportCount();for(let Ce=0;Ce<Ae;Ce++){const Ze=q.getViewport(Ce);o.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),W.viewport(o),q.updateMatrices(se,Ce),n=q.getFrustum(),S(C,L,q.camera,se,this.type)}q.isPointLightShadow!==!0&&this.type===Jn&&b(q,L),q.needsUpdate=!1}l=this.type,m.needsUpdate=!1,i.setRenderTarget(M,E,O)};function b(R,C){const L=e.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yi(r.x,r.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,L,u,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,L,p,x,null)}function T(R,C,L,M){let E=null;const O=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)E=O;else if(E=L.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=E.uuid,H=C.uuid;let j=d[W];j===void 0&&(j={},d[W]=j);let re=j[H];re===void 0&&(re=E.clone(),j[H]=re,C.addEventListener("dispose",D)),E=re}if(E.visible=C.visible,E.wireframe=C.wireframe,M===Jn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:f[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=i.properties.get(E);W.light=L}return E}function S(R,C,L,M,E){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Jn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const H=e.update(R),j=R.material;if(Array.isArray(j)){const re=H.groups;for(let Z=0,se=re.length;Z<se;Z++){const q=re[Z],ge=j[q.materialIndex];if(ge&&ge.visible){const Ae=T(R,ge,M,E);R.onBeforeShadow(i,R,C,L,H,Ae,q),i.renderBufferDirect(L,null,H,Ae,R,q),R.onAfterShadow(i,R,C,L,H,Ae,q)}}}else if(j.visible){const re=T(R,j,M,E);R.onBeforeShadow(i,R,C,L,H,re,null),i.renderBufferDirect(L,null,H,re,R,null),R.onAfterShadow(i,R,C,L,H,re,null)}}const W=R.children;for(let H=0,j=W.length;H<j;H++)S(W[H],C,L,M,E)}function D(R){R.target.removeEventListener("dispose",D);for(const L in d){const M=d[L],E=R.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const i0={[jo]:Zo,[Qo]:ta,[Jo]:na,[Er]:ea,[Zo]:jo,[ta]:Qo,[na]:Jo,[ea]:Er};function r0(i,e){function t(){let P=!1;const Ee=new Lt;let Y=null;const te=new Lt(0,0,0,0);return{setMask:function(Me){Y!==Me&&!P&&(i.colorMask(Me,Me,Me,Me),Y=Me)},setLocked:function(Me){P=Me},setClear:function(Me,ve,Be,ct,Gt){Gt===!0&&(Me*=ct,ve*=ct,Be*=ct),Ee.set(Me,ve,Be,ct),te.equals(Ee)===!1&&(i.clearColor(Me,ve,Be,ct),te.copy(Ee))},reset:function(){P=!1,Y=null,te.set(-1,0,0,0)}}}function n(){let P=!1,Ee=!1,Y=null,te=null,Me=null;return{setReversed:function(ve){if(Ee!==ve){const Be=e.get("EXT_clip_control");ve?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Ee=ve;const ct=Me;Me=null,this.setClear(ct)}},getReversed:function(){return Ee},setTest:function(ve){ve?pe(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(ve){Y!==ve&&!P&&(i.depthMask(ve),Y=ve)},setFunc:function(ve){if(Ee&&(ve=i0[ve]),te!==ve){switch(ve){case jo:i.depthFunc(i.NEVER);break;case Zo:i.depthFunc(i.ALWAYS);break;case Qo:i.depthFunc(i.LESS);break;case Er:i.depthFunc(i.LEQUAL);break;case Jo:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=ve}},setLocked:function(ve){P=ve},setClear:function(ve){Me!==ve&&(Ee&&(ve=1-ve),i.clearDepth(ve),Me=ve)},reset:function(){P=!1,Y=null,te=null,Me=null,Ee=!1}}}function r(){let P=!1,Ee=null,Y=null,te=null,Me=null,ve=null,Be=null,ct=null,Gt=null;return{setTest:function(tt){P||(tt?pe(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(tt){Ee!==tt&&!P&&(i.stencilMask(tt),Ee=tt)},setFunc:function(tt,on,fn){(Y!==tt||te!==on||Me!==fn)&&(i.stencilFunc(tt,on,fn),Y=tt,te=on,Me=fn)},setOp:function(tt,on,fn){(ve!==tt||Be!==on||ct!==fn)&&(i.stencilOp(tt,on,fn),ve=tt,Be=on,ct=fn)},setLocked:function(tt){P=tt},setClear:function(tt){Gt!==tt&&(i.clearStencil(tt),Gt=tt)},reset:function(){P=!1,Ee=null,Y=null,te=null,Me=null,ve=null,Be=null,ct=null,Gt=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,d=new WeakMap;let h={},f={},u=new WeakMap,p=[],_=null,x=!1,m=null,l=null,b=null,T=null,S=null,D=null,R=null,C=new Mt(0,0,0),L=0,M=!1,E=null,O=null,W=null,H=null,j=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,se=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=se>=1):q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=se>=2);let ge=null,Ae={};const Ce=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),Xe=new Lt().fromArray(Ce),Q=new Lt().fromArray(Ze);function ce(P,Ee,Y,te){const Me=new Uint8Array(4),ve=i.createTexture();i.bindTexture(P,ve),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<Y;Be++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Ee+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ve}const Ie={};Ie[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(Er),lt(!1),Qe(pc),pe(i.CULL_FACE),I(yi);function pe(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Ge(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function mt(P,Ee){return f[P]!==Ee?(i.bindFramebuffer(P,Ee),f[P]=Ee,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ee),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Ve(P,Ee){let Y=p,te=!1;if(P){Y=u.get(Ee),Y===void 0&&(Y=[],u.set(Ee,Y));const Me=P.textures;if(Y.length!==Me.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Be=Me.length;ve<Be;ve++)Y[ve]=i.COLOR_ATTACHMENT0+ve;Y.length=Me.length,te=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,te=!0);te&&i.drawBuffers(Y)}function Rt(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const It={[Hi]:i.FUNC_ADD,[ch]:i.FUNC_SUBTRACT,[lh]:i.FUNC_REVERSE_SUBTRACT};It[dh]=i.MIN,It[hh]=i.MAX;const st={[uh]:i.ZERO,[fh]:i.ONE,[ph]:i.SRC_COLOR,[Ko]:i.SRC_ALPHA,[yh]:i.SRC_ALPHA_SATURATE,[vh]:i.DST_COLOR,[_h]:i.DST_ALPHA,[mh]:i.ONE_MINUS_SRC_COLOR,[$o]:i.ONE_MINUS_SRC_ALPHA,[xh]:i.ONE_MINUS_DST_COLOR,[gh]:i.ONE_MINUS_DST_ALPHA,[Eh]:i.CONSTANT_COLOR,[Sh]:i.ONE_MINUS_CONSTANT_COLOR,[Mh]:i.CONSTANT_ALPHA,[Th]:i.ONE_MINUS_CONSTANT_ALPHA};function I(P,Ee,Y,te,Me,ve,Be,ct,Gt,tt){if(P===yi){x===!0&&(Ge(i.BLEND),x=!1);return}if(x===!1&&(pe(i.BLEND),x=!0),P!==ah){if(P!==m||tt!==M){if((l!==Hi||S!==Hi)&&(i.blendEquation(i.FUNC_ADD),l=Hi,S=Hi),tt)switch(P){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,T=null,D=null,R=null,C.set(0,0,0),L=0,m=P,M=tt}return}Me=Me||Ee,ve=ve||Y,Be=Be||te,(Ee!==l||Me!==S)&&(i.blendEquationSeparate(It[Ee],It[Me]),l=Ee,S=Me),(Y!==b||te!==T||ve!==D||Be!==R)&&(i.blendFuncSeparate(st[Y],st[te],st[ve],st[Be]),b=Y,T=te,D=ve,R=Be),(ct.equals(C)===!1||Gt!==L)&&(i.blendColor(ct.r,ct.g,ct.b,Gt),C.copy(ct),L=Gt),m=P,M=!1}function sn(P,Ee){P.side===ni?Ge(i.CULL_FACE):pe(i.CULL_FACE);let Y=P.side===hn;Ee&&(Y=!Y),lt(Y),P.blending===gr&&P.transparent===!1?I(yi):I(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);const te=P.stencilWrite;a.setTest(te),te&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Je(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(P){E!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),E=P)}function Qe(P){P!==rh?(pe(i.CULL_FACE),P!==O&&(P===pc?i.cullFace(i.BACK):P===sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),O=P}function Oe(P){P!==W&&(Z&&i.lineWidth(P),W=P)}function Je(P,Ee,Y){P?(pe(i.POLYGON_OFFSET_FILL),(H!==Ee||j!==Y)&&(i.polygonOffset(Ee,Y),H=Ee,j=Y)):Ge(i.POLYGON_OFFSET_FILL)}function De(P){P?pe(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function A(P){P===void 0&&(P=i.TEXTURE0+re-1),ge!==P&&(i.activeTexture(P),ge=P)}function g(P,Ee,Y){Y===void 0&&(ge===null?Y=i.TEXTURE0+re-1:Y=ge);let te=Ae[Y];te===void 0&&(te={type:void 0,texture:void 0},Ae[Y]=te),(te.type!==P||te.texture!==Ee)&&(ge!==Y&&(i.activeTexture(Y),ge=Y),i.bindTexture(P,Ee||Ie[P]),te.type=P,te.texture=Ee)}function F(){const P=Ae[ge];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(P){Xe.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Xe.copy(P))}function _e(P){Q.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Q.copy(P))}function et(P,Ee){let Y=d.get(Ee);Y===void 0&&(Y=new WeakMap,d.set(Ee,Y));let te=Y.get(P);te===void 0&&(te=i.getUniformBlockIndex(Ee,P.name),Y.set(P,te))}function je(P,Ee){const te=d.get(Ee).get(P);c.get(Ee)!==te&&(i.uniformBlockBinding(Ee,te,P.__bindingPointIndex),c.set(Ee,te))}function At(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ge=null,Ae={},f={},u=new WeakMap,p=[],_=null,x=!1,m=null,l=null,b=null,T=null,S=null,D=null,R=null,C=new Mt(0,0,0),L=0,M=!1,E=null,O=null,W=null,H=null,j=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Ge,bindFramebuffer:mt,drawBuffers:Ve,useProgram:Rt,setBlending:I,setMaterial:sn,setFlipSided:lt,setCullFace:Qe,setLineWidth:Oe,setPolygonOffset:Je,setScissorTest:De,activeTexture:A,bindTexture:g,unbindTexture:F,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:fe,texImage3D:Fe,updateUBOMapping:et,uniformBlockBinding:je,texStorage2D:at,texStorage3D:J,texSubImage2D:$,texSubImage3D:ye,compressedTexSubImage2D:Se,compressedTexSubImage3D:Re,scissor:Ye,viewport:_e,reset:At}}function s0(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new bt,h=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,g){return p?new OffscreenCanvas(A,g):Xs("canvas")}function x(A,g,F){let ee=1;const ie=De(A);if((ie.width>F||ie.height>F)&&(ee=F/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(ee*ie.width),ye=Math.floor(ee*ie.height);f===void 0&&(f=_($,ye));const Se=g?_($,ye):f;return Se.width=$,Se.height=ye,Se.getContext("2d").drawImage(A,0,0,$,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+$+"x"+ye+")."),Se}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function m(A){return A.generateMipmaps}function l(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,g,F,ee,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=g;if(g===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),g===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),g===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),g===i.RGBA){const ye=ie?Vs:St.getTransfer(ee);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=ye===Ct?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(A,g){let F;return A?g===null||g===qi||g===Xr?F=i.DEPTH24_STENCIL8:g===ri?F=i.DEPTH32F_STENCIL8:g===Wr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===qi||g===Xr?F=i.DEPTH_COMPONENT24:g===ri?F=i.DEPTH_COMPONENT32F:g===Wr&&(F=i.DEPTH_COMPONENT16),F}function D(A,g){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Un&&A.minFilter!==Hn?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function R(A){const g=A.target;g.removeEventListener("dispose",R),L(g),g.isVideoTexture&&h.delete(g)}function C(A){const g=A.target;g.removeEventListener("dispose",C),E(g)}function L(A){const g=n.get(A);if(g.__webglInit===void 0)return;const F=A.source,ee=u.get(F);if(ee){const ie=ee[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(A),Object.keys(ee).length===0&&u.delete(F)}n.remove(A)}function M(A){const g=n.get(A);i.deleteTexture(g.__webglTexture);const F=A.source,ee=u.get(F);delete ee[g.__cacheKey],o.memory.textures--}function E(A){const g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(g.__webglFramebuffer[ee]))for(let ie=0;ie<g.__webglFramebuffer[ee].length;ie++)i.deleteFramebuffer(g.__webglFramebuffer[ee][ie]);else i.deleteFramebuffer(g.__webglFramebuffer[ee]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[ee])}else{if(Array.isArray(g.__webglFramebuffer))for(let ee=0;ee<g.__webglFramebuffer.length;ee++)i.deleteFramebuffer(g.__webglFramebuffer[ee]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let ee=0;ee<g.__webglColorRenderbuffer.length;ee++)g.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[ee]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=A.textures;for(let ee=0,ie=F.length;ee<ie;ee++){const $=n.get(F[ee]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(F[ee])}n.remove(A)}let O=0;function W(){O=0}function H(){const A=O;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),O+=1,A}function j(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function re(A,g){const F=n.get(A);if(A.isVideoTexture&&Oe(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(F,A,g);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function Z(A,g){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Q(F,A,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function se(A,g){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Q(F,A,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function q(A,g){const F=n.get(A);if(A.version>0&&F.__version!==A.version){ce(F,A,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}const ge={[sa]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},Ae={[Un]:i.NEAREST,[Ph]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},Ce={[Fh]:i.NEVER,[Wh]:i.ALWAYS,[Bh]:i.LESS,[Jl]:i.LEQUAL,[zh]:i.EQUAL,[Vh]:i.GEQUAL,[Hh]:i.GREATER,[Gh]:i.NOTEQUAL};function Ze(A,g){if(g.type===ri&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Hn||g.magFilter===no||g.magFilter===ss||g.magFilter===Xi||g.minFilter===Hn||g.minFilter===no||g.minFilter===ss||g.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ge[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ge[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ge[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ae[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ae[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Un||g.minFilter!==ss&&g.minFilter!==Xi||g.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Xe(A,g){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",R));const ee=g.source;let ie=u.get(ee);ie===void 0&&(ie={},u.set(ee,ie));const $=j(g);if($!==A.__cacheKey){ie[$]===void 0&&(ie[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ie[$].usedTimes++;const ye=ie[A.__cacheKey];ye!==void 0&&(ie[A.__cacheKey].usedTimes--,ye.usedTimes===0&&M(g)),A.__cacheKey=$,A.__webglTexture=ie[$].texture}return F}function Q(A,g,F){let ee=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ee=i.TEXTURE_3D);const ie=Xe(A,g),$=g.source;t.bindTexture(ee,A.__webglTexture,i.TEXTURE0+F);const ye=n.get($);if($.version!==ye.__version||ie===!0){t.activeTexture(i.TEXTURE0+F);const Se=St.getPrimaries(St.workingColorSpace),Re=g.colorSpace===xi?null:St.getPrimaries(g.colorSpace),at=g.colorSpace===xi||Se===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let J=x(g.image,!1,r.maxTextureSize);J=Je(g,J);const fe=s.convert(g.format,g.colorSpace),Fe=s.convert(g.type);let Ye=T(g.internalFormat,fe,Fe,g.colorSpace,g.isVideoTexture);Ze(ee,g);let _e;const et=g.mipmaps,je=g.isVideoTexture!==!0,At=ye.__version===void 0||ie===!0,P=$.dataReady,Ee=D(g,J);if(g.isDepthTexture)Ye=S(g.format===Yr,g.type),At&&(je?t.texStorage2D(i.TEXTURE_2D,1,Ye,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Ye,J.width,J.height,0,fe,Fe,null));else if(g.isDataTexture)if(et.length>0){je&&At&&t.texStorage2D(i.TEXTURE_2D,Ee,Ye,et[0].width,et[0].height);for(let Y=0,te=et.length;Y<te;Y++)_e=et[Y],je?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,_e.width,_e.height,fe,Fe,_e.data):t.texImage2D(i.TEXTURE_2D,Y,Ye,_e.width,_e.height,0,fe,Fe,_e.data);g.generateMipmaps=!1}else je?(At&&t.texStorage2D(i.TEXTURE_2D,Ee,Ye,J.width,J.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,fe,Fe,J.data)):t.texImage2D(i.TEXTURE_2D,0,Ye,J.width,J.height,0,fe,Fe,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){je&&At&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ye,et[0].width,et[0].height,J.depth);for(let Y=0,te=et.length;Y<te;Y++)if(_e=et[Y],g.format!==kn)if(fe!==null)if(je){if(P)if(g.layerUpdates.size>0){const Me=zc(_e.width,_e.height,g.format,g.type);for(const ve of g.layerUpdates){const Be=_e.data.subarray(ve*Me/_e.data.BYTES_PER_ELEMENT,(ve+1)*Me/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ve,_e.width,_e.height,1,fe,Be)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,J.depth,fe,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ye,_e.width,_e.height,J.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,J.depth,fe,Fe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ye,_e.width,_e.height,J.depth,0,fe,Fe,_e.data)}else{je&&At&&t.texStorage2D(i.TEXTURE_2D,Ee,Ye,et[0].width,et[0].height);for(let Y=0,te=et.length;Y<te;Y++)_e=et[Y],g.format!==kn?fe!==null?je?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,_e.width,_e.height,fe,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Ye,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,_e.width,_e.height,fe,Fe,_e.data):t.texImage2D(i.TEXTURE_2D,Y,Ye,_e.width,_e.height,0,fe,Fe,_e.data)}else if(g.isDataArrayTexture)if(je){if(At&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ye,J.width,J.height,J.depth),P)if(g.layerUpdates.size>0){const Y=zc(J.width,J.height,g.format,g.type);for(const te of g.layerUpdates){const Me=J.data.subarray(te*Y/J.data.BYTES_PER_ELEMENT,(te+1)*Y/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,J.width,J.height,1,fe,Fe,Me)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,fe,Fe,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,J.width,J.height,J.depth,0,fe,Fe,J.data);else if(g.isData3DTexture)je?(At&&t.texStorage3D(i.TEXTURE_3D,Ee,Ye,J.width,J.height,J.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,fe,Fe,J.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,J.width,J.height,J.depth,0,fe,Fe,J.data);else if(g.isFramebufferTexture){if(At)if(je)t.texStorage2D(i.TEXTURE_2D,Ee,Ye,J.width,J.height);else{let Y=J.width,te=J.height;for(let Me=0;Me<Ee;Me++)t.texImage2D(i.TEXTURE_2D,Me,Ye,Y,te,0,fe,Fe,null),Y>>=1,te>>=1}}else if(et.length>0){if(je&&At){const Y=De(et[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Ye,Y.width,Y.height)}for(let Y=0,te=et.length;Y<te;Y++)_e=et[Y],je?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,fe,Fe,_e):t.texImage2D(i.TEXTURE_2D,Y,Ye,fe,Fe,_e);g.generateMipmaps=!1}else if(je){if(At){const Y=De(J);t.texStorage2D(i.TEXTURE_2D,Ee,Ye,Y.width,Y.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Fe,J)}else t.texImage2D(i.TEXTURE_2D,0,Ye,fe,Fe,J);m(g)&&l(ee),ye.__version=$.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function ce(A,g,F){if(g.image.length!==6)return;const ee=Xe(A,g),ie=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const $=n.get(ie);if(ie.version!==$.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);const ye=St.getPrimaries(St.workingColorSpace),Se=g.colorSpace===xi?null:St.getPrimaries(g.colorSpace),Re=g.colorSpace===xi||ye===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const at=g.isCompressedTexture||g.image[0].isCompressedTexture,J=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let te=0;te<6;te++)!at&&!J?fe[te]=x(g.image[te],!0,r.maxCubemapSize):fe[te]=J?g.image[te].image:g.image[te],fe[te]=Je(g,fe[te]);const Fe=fe[0],Ye=s.convert(g.format,g.colorSpace),_e=s.convert(g.type),et=T(g.internalFormat,Ye,_e,g.colorSpace),je=g.isVideoTexture!==!0,At=$.__version===void 0||ee===!0,P=ie.dataReady;let Ee=D(g,Fe);Ze(i.TEXTURE_CUBE_MAP,g);let Y;if(at){je&&At&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,et,Fe.width,Fe.height);for(let te=0;te<6;te++){Y=fe[te].mipmaps;for(let Me=0;Me<Y.length;Me++){const ve=Y[Me];g.format!==kn?Ye!==null?je?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ve.width,ve.height,Ye,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,et,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ve.width,ve.height,Ye,_e,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,et,ve.width,ve.height,0,Ye,_e,ve.data)}}}else{if(Y=g.mipmaps,je&&At){Y.length>0&&Ee++;const te=De(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,et,te.width,te.height)}for(let te=0;te<6;te++)if(J){je?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,fe[te].width,fe[te].height,Ye,_e,fe[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,fe[te].width,fe[te].height,0,Ye,_e,fe[te].data);for(let Me=0;Me<Y.length;Me++){const Be=Y[Me].image[te].image;je?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,Be.width,Be.height,Ye,_e,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,et,Be.width,Be.height,0,Ye,_e,Be.data)}}else{je?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ye,_e,fe[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,Ye,_e,fe[te]);for(let Me=0;Me<Y.length;Me++){const ve=Y[Me];je?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,Ye,_e,ve.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,et,Ye,_e,ve.image[te])}}}m(g)&&l(i.TEXTURE_CUBE_MAP),$.__version=ie.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Ie(A,g,F,ee,ie,$){const ye=s.convert(F.format,F.colorSpace),Se=s.convert(F.type),Re=T(F.internalFormat,ye,Se,F.colorSpace),at=n.get(g),J=n.get(F);if(J.__renderTarget=g,!at.__hasExternalTextures){const fe=Math.max(1,g.width>>$),Fe=Math.max(1,g.height>>$);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,$,Re,fe,Fe,g.depth,0,ye,Se,null):t.texImage2D(ie,$,Re,fe,Fe,0,ye,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Qe(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,ie,J.__webglTexture,0,lt(g)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,ie,J.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(A,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){const ee=g.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,$=S(g.stencilBuffer,ie),ye=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=lt(g);Qe(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,$,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,$,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,$,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,A)}else{const ee=g.textures;for(let ie=0;ie<ee.length;ie++){const $=ee[ie],ye=s.convert($.format,$.colorSpace),Se=s.convert($.type),Re=T($.internalFormat,ye,Se,$.colorSpace),at=lt(g);F&&Qe(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Re,g.width,g.height):Qe(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Re,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Re,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(A,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(g.depthTexture);ee.__renderTarget=g,(!ee.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),re(g.depthTexture,0);const ie=ee.__webglTexture,$=lt(g);if(g.depthTexture.format===qr)Qe(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(g.depthTexture.format===Yr)Qe(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function mt(A){const g=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const ee=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),ee){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=ee}if(A.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ge(g.__webglFramebuffer,A)}else if(F){g.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[ee]),g.__webglDepthbuffer[ee]===void 0)g.__webglDepthbuffer[ee]=i.createRenderbuffer(),pe(g.__webglDepthbuffer[ee],A,!1);else{const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),pe(g.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(A,g,F){const ee=n.get(A);g!==void 0&&Ie(ee.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&mt(A)}function Rt(A){const g=A.texture,F=n.get(A),ee=n.get(g);A.addEventListener("dispose",C);const ie=A.textures,$=A.isWebGLCubeRenderTarget===!0,ye=ie.length>1;if(ye||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=g.version,o.memory.textures++),$){F.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[Se]=[];for(let Re=0;Re<g.mipmaps.length;Re++)F.__webglFramebuffer[Se][Re]=i.createFramebuffer()}else F.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let Se=0;Se<g.mipmaps.length;Se++)F.__webglFramebuffer[Se]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ye)for(let Se=0,Re=ie.length;Se<Re;Se++){const at=n.get(ie[Se]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Qe(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Se=0;Se<ie.length;Se++){const Re=ie[Se];F.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Se]);const at=s.convert(Re.format,Re.colorSpace),J=s.convert(Re.type),fe=T(Re.internalFormat,at,J,Re.colorSpace,A.isXRRenderTarget===!0),Fe=lt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,fe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,F.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,g);for(let Se=0;Se<6;Se++)if(g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)Ie(F.__webglFramebuffer[Se][Re],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Re);else Ie(F.__webglFramebuffer[Se],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);m(g)&&l(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let Se=0,Re=ie.length;Se<Re;Se++){const at=ie[Se],J=n.get(at);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),Ze(i.TEXTURE_2D,at),Ie(F.__webglFramebuffer,A,at,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,0),m(at)&&l(i.TEXTURE_2D)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Se=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,ee.__webglTexture),Ze(Se,g),g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)Ie(F.__webglFramebuffer[Re],A,g,i.COLOR_ATTACHMENT0,Se,Re);else Ie(F.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,Se,0);m(g)&&l(Se),t.unbindTexture()}A.depthBuffer&&mt(A)}function It(A){const g=A.textures;for(let F=0,ee=g.length;F<ee;F++){const ie=g[F];if(m(ie)){const $=b(A),ye=n.get(ie).__webglTexture;t.bindTexture($,ye),l($),t.unbindTexture()}}}const st=[],I=[];function sn(A){if(A.samples>0){if(Qe(A)===!1){const g=A.textures,F=A.width,ee=A.height;let ie=i.COLOR_BUFFER_BIT;const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(A),Se=g.length>1;if(Se)for(let Re=0;Re<g.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Re=0;Re<g.length;Re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Re]);const at=n.get(g[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,F,ee,0,0,F,ee,ie,i.NEAREST),c===!0&&(st.length=0,I.length=0,st.push(i.COLOR_ATTACHMENT0+Re),A.depthBuffer&&A.resolveDepthBuffer===!1&&(st.push($),I.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Re=0;Re<g.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Re]);const at=n.get(g[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,at,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function lt(A){return Math.min(r.maxSamples,A.samples)}function Qe(A){const g=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Oe(A){const g=o.render.frame;h.get(A)!==g&&(h.set(A,g),A.update())}function Je(A,g){const F=A.colorSpace,ee=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Tr&&F!==xi&&(St.getTransfer(F)===Ct?(ee!==kn||ie!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function De(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(d.width=A.naturalWidth||A.width,d.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(d.width=A.displayWidth,d.height=A.displayHeight):(d.width=A.width,d.height=A.height),d}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=se,this.setTextureCube=q,this.rebindTextures=Ve,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Qe}function o0(i,e){function t(n,r=xi){let s;const o=St.getTransfer(r);if(n===ci)return i.UNSIGNED_BYTE;if(n===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gl)return i.BYTE;if(n===Vl)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===$r)return i.HALF_FLOAT;if(n===Xl)return i.ALPHA;if(n===ql)return i.RGB;if(n===kn)return i.RGBA;if(n===Yl)return i.LUMINANCE;if(n===Kl)return i.LUMINANCE_ALPHA;if(n===qr)return i.DEPTH_COMPONENT;if(n===Yr)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===Ka)return i.RED_INTEGER;if(n===jl)return i.RG;if(n===$a)return i.RG_INTEGER;if(n===ja)return i.RGBA_INTEGER;if(n===Ls||n===Ps||n===Ns||n===ks)if(o===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ls)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ls)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===ca||n===la||n===da)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===aa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ca)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===la)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===da)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ha||n===ua||n===fa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ha||n===ua)return o===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fa)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pa||n===ma||n===_a||n===ga||n===va||n===xa||n===ya||n===Ea||n===Sa||n===Ma||n===Ta||n===ba||n===Aa||n===Ra)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pa)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ma)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ga)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===va)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xa)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ya)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ea)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ma)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ba)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Aa)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ra)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Us||n===wa||n===Ca)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Us)return o===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ca)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Ia||n===Oa||n===Da)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Us)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ia)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Da)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const a0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mi({vertexShader:a0,fragmentShader:c0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d0 extends Ar{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,d=null,h=null,f=null,u=null,p=null,_=null;const x=new l0,m=t.getContextAttributes();let l=null,b=null;const T=[],S=[],D=new bt;let R=null;const C=new wn;C.viewport=new Lt;const L=new wn;L.viewport=new Lt;const M=[C,L],E=new Iu;let O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=T[Q];return ce===void 0&&(ce=new bo,T[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=T[Q];return ce===void 0&&(ce=new bo,T[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=T[Q];return ce===void 0&&(ce=new bo,T[Q]=ce),ce.getHandSpace()};function H(Q){const ce=S.indexOf(Q.inputSource);if(ce===-1)return;const Ie=T[ce];Ie!==void 0&&(Ie.update(Q.inputSource,Q.frame,d||o),Ie.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",re);for(let Q=0;Q<T.length;Q++){const ce=S[Q];ce!==null&&(S[Q]=null,T[Q].disconnect(ce))}O=null,W=null,x.reset(),e.setRenderTarget(l),p=null,u=null,f=null,r=null,b=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(l=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,pe=null,Ge=null;m.depth&&(Ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=m.stencil?Yr:qr,pe=m.stencil?Xr:qi);const mt={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:s};f=new XRWebGLBinding(r,t),u=f.createProjectionLayer(mt),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Yi(u.textureWidth,u.textureHeight,{format:kn,type:ci,depthTexture:new dd(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const Ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Yi(p.framebufferWidth,p.framebufferHeight,{format:kn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),d=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function re(Q){for(let ce=0;ce<Q.removed.length;ce++){const Ie=Q.removed[ce],pe=S.indexOf(Ie);pe>=0&&(S[pe]=null,T[pe].disconnect(Ie))}for(let ce=0;ce<Q.added.length;ce++){const Ie=Q.added[ce];let pe=S.indexOf(Ie);if(pe===-1){for(let mt=0;mt<T.length;mt++)if(mt>=S.length){S.push(Ie),pe=mt;break}else if(S[mt]===null){S[mt]=Ie,pe=mt;break}if(pe===-1)break}const Ge=T[pe];Ge&&Ge.connect(Ie)}}const Z=new V,se=new V;function q(Q,ce,Ie){Z.setFromMatrixPosition(ce.matrixWorld),se.setFromMatrixPosition(Ie.matrixWorld);const pe=Z.distanceTo(se),Ge=ce.projectionMatrix.elements,mt=Ie.projectionMatrix.elements,Ve=Ge[14]/(Ge[10]-1),Rt=Ge[14]/(Ge[10]+1),It=(Ge[9]+1)/Ge[5],st=(Ge[9]-1)/Ge[5],I=(Ge[8]-1)/Ge[0],sn=(mt[8]+1)/mt[0],lt=Ve*I,Qe=Ve*sn,Oe=pe/(-I+sn),Je=Oe*-I;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Je),Q.translateZ(Oe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ge[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const De=Ve+Oe,A=Rt+Oe,g=lt-Je,F=Qe+(pe-Je),ee=It*Rt/A*De,ie=st*Rt/A*De;Q.projectionMatrix.makePerspective(g,F,ee,ie,De,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ge(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ce=Q.near,Ie=Q.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(Ie=x.depthFar)),E.near=L.near=C.near=ce,E.far=L.far=C.far=Ie,(O!==E.near||W!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),O=E.near,W=E.far),C.layers.mask=Q.layers.mask|2,L.layers.mask=Q.layers.mask|4,E.layers.mask=C.layers.mask|L.layers.mask;const pe=Q.parent,Ge=E.cameras;ge(E,pe);for(let mt=0;mt<Ge.length;mt++)ge(Ge[mt],pe);Ge.length===2?q(E,C,L):E.projectionMatrix.copy(C.projectionMatrix),Ae(Q,E,pe)};function Ae(Q,ce,Ie){Ie===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(Ie.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=La*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(Q){c=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let Ce=null;function Ze(Q,ce){if(h=ce.getViewerPose(d||o),_=ce,h!==null){const Ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let pe=!1;Ie.length!==E.cameras.length&&(E.cameras.length=0,pe=!0);for(let Ve=0;Ve<Ie.length;Ve++){const Rt=Ie[Ve];let It=null;if(p!==null)It=p.getViewport(Rt);else{const I=f.getViewSubImage(u,Rt);It=I.viewport,Ve===0&&(e.setRenderTargetTextures(b,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(b))}let st=M[Ve];st===void 0&&(st=new wn,st.layers.enable(Ve),st.viewport=new Lt,M[Ve]=st),st.matrix.fromArray(Rt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Rt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(It.x,It.y,It.width,It.height),Ve===0&&(E.matrix.copy(st.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),pe===!0&&E.cameras.push(st)}const Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Ve=f.getDepthInformation(Ie[0]);Ve&&Ve.isValid&&Ve.texture&&x.init(e,Ve,r.renderState)}}for(let Ie=0;Ie<T.length;Ie++){const pe=S[Ie],Ge=T[Ie];pe!==null&&Ge!==void 0&&Ge.update(pe,ce,d||o)}Ce&&Ce(Q,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),_=null}const Xe=new fd;Xe.setAnimationLoop(Ze),this.setAnimationLoop=function(Q){Ce=Q},this.dispose=function(){}}}const Pi=new Wn,h0=new Pt;function u0(i,e){function t(m,l){m.matrixAutoUpdate===!0&&m.updateMatrix(),l.value.copy(m.matrix)}function n(m,l){l.color.getRGB(m.fogColor.value,ad(i)),l.isFog?(m.fogNear.value=l.near,m.fogFar.value=l.far):l.isFogExp2&&(m.fogDensity.value=l.density)}function r(m,l,b,T,S){l.isMeshBasicMaterial||l.isMeshLambertMaterial?s(m,l):l.isMeshToonMaterial?(s(m,l),f(m,l)):l.isMeshPhongMaterial?(s(m,l),h(m,l)):l.isMeshStandardMaterial?(s(m,l),u(m,l),l.isMeshPhysicalMaterial&&p(m,l,S)):l.isMeshMatcapMaterial?(s(m,l),_(m,l)):l.isMeshDepthMaterial?s(m,l):l.isMeshDistanceMaterial?(s(m,l),x(m,l)):l.isMeshNormalMaterial?s(m,l):l.isLineBasicMaterial?(o(m,l),l.isLineDashedMaterial&&a(m,l)):l.isPointsMaterial?c(m,l,b,T):l.isSpriteMaterial?d(m,l):l.isShadowMaterial?(m.color.value.copy(l.color),m.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function s(m,l){m.opacity.value=l.opacity,l.color&&m.diffuse.value.copy(l.color),l.emissive&&m.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(m.map.value=l.map,t(l.map,m.mapTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,t(l.alphaMap,m.alphaMapTransform)),l.bumpMap&&(m.bumpMap.value=l.bumpMap,t(l.bumpMap,m.bumpMapTransform),m.bumpScale.value=l.bumpScale,l.side===hn&&(m.bumpScale.value*=-1)),l.normalMap&&(m.normalMap.value=l.normalMap,t(l.normalMap,m.normalMapTransform),m.normalScale.value.copy(l.normalScale),l.side===hn&&m.normalScale.value.negate()),l.displacementMap&&(m.displacementMap.value=l.displacementMap,t(l.displacementMap,m.displacementMapTransform),m.displacementScale.value=l.displacementScale,m.displacementBias.value=l.displacementBias),l.emissiveMap&&(m.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,m.emissiveMapTransform)),l.specularMap&&(m.specularMap.value=l.specularMap,t(l.specularMap,m.specularMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest);const b=e.get(l),T=b.envMap,S=b.envMapRotation;T&&(m.envMap.value=T,Pi.copy(S),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(h0.makeRotationFromEuler(Pi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=l.reflectivity,m.ior.value=l.ior,m.refractionRatio.value=l.refractionRatio),l.lightMap&&(m.lightMap.value=l.lightMap,m.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,m.lightMapTransform)),l.aoMap&&(m.aoMap.value=l.aoMap,m.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,m.aoMapTransform))}function o(m,l){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,l.map&&(m.map.value=l.map,t(l.map,m.mapTransform))}function a(m,l){m.dashSize.value=l.dashSize,m.totalSize.value=l.dashSize+l.gapSize,m.scale.value=l.scale}function c(m,l,b,T){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,m.size.value=l.size*b,m.scale.value=T*.5,l.map&&(m.map.value=l.map,t(l.map,m.uvTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,t(l.alphaMap,m.alphaMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest)}function d(m,l){m.diffuse.value.copy(l.color),m.opacity.value=l.opacity,m.rotation.value=l.rotation,l.map&&(m.map.value=l.map,t(l.map,m.mapTransform)),l.alphaMap&&(m.alphaMap.value=l.alphaMap,t(l.alphaMap,m.alphaMapTransform)),l.alphaTest>0&&(m.alphaTest.value=l.alphaTest)}function h(m,l){m.specular.value.copy(l.specular),m.shininess.value=Math.max(l.shininess,1e-4)}function f(m,l){l.gradientMap&&(m.gradientMap.value=l.gradientMap)}function u(m,l){m.metalness.value=l.metalness,l.metalnessMap&&(m.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,m.metalnessMapTransform)),m.roughness.value=l.roughness,l.roughnessMap&&(m.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,m.roughnessMapTransform)),l.envMap&&(m.envMapIntensity.value=l.envMapIntensity)}function p(m,l,b){m.ior.value=l.ior,l.sheen>0&&(m.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),m.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(m.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,m.sheenColorMapTransform)),l.sheenRoughnessMap&&(m.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,m.sheenRoughnessMapTransform))),l.clearcoat>0&&(m.clearcoat.value=l.clearcoat,m.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(m.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,m.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(m.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===hn&&m.clearcoatNormalScale.value.negate())),l.dispersion>0&&(m.dispersion.value=l.dispersion),l.iridescence>0&&(m.iridescence.value=l.iridescence,m.iridescenceIOR.value=l.iridescenceIOR,m.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(m.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,m.iridescenceMapTransform)),l.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),l.transmission>0&&(m.transmission.value=l.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),l.transmissionMap&&(m.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,m.transmissionMapTransform)),m.thickness.value=l.thickness,l.thicknessMap&&(m.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=l.attenuationDistance,m.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(m.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(m.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=l.specularIntensity,m.specularColor.value.copy(l.specularColor),l.specularColorMap&&(m.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,m.specularColorMapTransform)),l.specularIntensityMap&&(m.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,l){l.matcap&&(m.matcap.value=l.matcap)}function x(m,l){const b=e.get(l).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function f0(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const S=T.program;n.uniformBlockBinding(b,S)}function d(b,T){let S=r[b.id];S===void 0&&(_(b),S=h(b),r[b.id]=S,b.addEventListener("dispose",m));const D=T.program;n.updateUBOMapping(b,D);const R=e.render.frame;s[b.id]!==R&&(u(b),s[b.id]=R)}function h(b){const T=f();b.__bindingPointIndex=T;const S=i.createBuffer(),D=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,D,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const T=r[b.id],S=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,C=S.length;R<C;R++){const L=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,E=L.length;M<E;M++){const O=L[M];if(p(O,R,M,D)===!0){const W=O.__offset,H=Array.isArray(O.value)?O.value:[O.value];let j=0;for(let re=0;re<H.length;re++){const Z=H[re],se=x(Z);typeof Z=="number"||typeof Z=="boolean"?(O.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,W+j,O.__data)):Z.isMatrix3?(O.__data[0]=Z.elements[0],O.__data[1]=Z.elements[1],O.__data[2]=Z.elements[2],O.__data[3]=0,O.__data[4]=Z.elements[3],O.__data[5]=Z.elements[4],O.__data[6]=Z.elements[5],O.__data[7]=0,O.__data[8]=Z.elements[6],O.__data[9]=Z.elements[7],O.__data[10]=Z.elements[8],O.__data[11]=0):(Z.toArray(O.__data,j),j+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,T,S,D){const R=b.value,C=T+"_"+S;if(D[C]===void 0)return typeof R=="number"||typeof R=="boolean"?D[C]=R:D[C]=R.clone(),!0;{const L=D[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return D[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function _(b){const T=b.uniforms;let S=0;const D=16;for(let C=0,L=T.length;C<L;C++){const M=Array.isArray(T[C])?T[C]:[T[C]];for(let E=0,O=M.length;E<O;E++){const W=M[E],H=Array.isArray(W.value)?W.value:[W.value];for(let j=0,re=H.length;j<re;j++){const Z=H[j],se=x(Z),q=S%D,ge=q%se.boundary,Ae=q+ge;S+=ge,Ae!==0&&D-Ae<se.storage&&(S+=D-Ae),W.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=se.storage}}}const R=S%D;return R>0&&(S+=D-R),b.__size=S,b.__cache={},this}function x(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function l(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:d,dispose:l}}class p0{constructor(e={}){const{canvas:t=qh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,l=null;const b=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let D=!1;this._outputColorSpace=Rn;let R=0,C=0,L=null,M=-1,E=null;const O=new Lt,W=new Lt;let H=null;const j=new Mt(0);let re=0,Z=t.width,se=t.height,q=1,ge=null,Ae=null;const Ce=new Lt(0,0,Z,se),Ze=new Lt(0,0,Z,se);let Xe=!1;const Q=new ec;let ce=!1,Ie=!1;const pe=new Pt,Ge=new Pt,mt=new V,Ve=new Lt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function st(){return L===null?q:1}let I=n;function sn(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Va}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ve,!1),I===null){const N="webgl2";if(I=sn(N,y),I===null)throw sn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let lt,Qe,Oe,Je,De,A,g,F,ee,ie,$,ye,Se,Re,at,J,fe,Fe,Ye,_e,et,je,At,P;function Ee(){lt=new Tm(I),lt.init(),je=new o0(I,lt),Qe=new gm(I,lt,e,je),Oe=new r0(I,lt),Qe.reverseDepthBuffer&&u&&Oe.buffers.depth.setReversed(!0),Je=new Rm(I),De=new X_,A=new s0(I,lt,Oe,De,Qe,je,Je),g=new xm(S),F=new Mm(S),ee=new Du(I),At=new mm(I,ee),ie=new bm(I,ee,Je,At),$=new Cm(I,ie,ee,Je),Ye=new wm(I,Qe,A),J=new vm(De),ye=new W_(S,g,F,lt,Qe,At,J),Se=new u0(S,De),Re=new Y_,at=new J_(lt),Fe=new pm(S,g,F,Oe,$,p,c),fe=new n0(S,$,Qe),P=new f0(I,Je,Qe,Oe),_e=new _m(I,lt,Je),et=new Am(I,lt,Je),Je.programs=ye.programs,S.capabilities=Qe,S.extensions=lt,S.properties=De,S.renderLists=Re,S.shadowMap=fe,S.state=Oe,S.info=Je}Ee();const Y=new d0(S,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=lt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=lt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(Z,se,!1))},this.getSize=function(y){return y.set(Z,se)},this.setSize=function(y,N,z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,se=N,t.width=Math.floor(y*q),t.height=Math.floor(N*q),z===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(Z*q,se*q).floor()},this.setDrawingBufferSize=function(y,N,z){Z=y,se=N,q=z,t.width=Math.floor(y*z),t.height=Math.floor(N*z),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(O)},this.getViewport=function(y){return y.copy(Ce)},this.setViewport=function(y,N,z,G){y.isVector4?Ce.set(y.x,y.y,y.z,y.w):Ce.set(y,N,z,G),Oe.viewport(O.copy(Ce).multiplyScalar(q).round())},this.getScissor=function(y){return y.copy(Ze)},this.setScissor=function(y,N,z,G){y.isVector4?Ze.set(y.x,y.y,y.z,y.w):Ze.set(y,N,z,G),Oe.scissor(W.copy(Ze).multiplyScalar(q).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(y){Oe.setScissorTest(Xe=y)},this.setOpaqueSort=function(y){ge=y},this.setTransparentSort=function(y){Ae=y},this.getClearColor=function(y){return y.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,z=!0){let G=0;if(y){let k=!1;if(L!==null){const oe=L.texture.format;k=oe===ja||oe===$a||oe===Ka}if(k){const oe=L.texture.type,me=oe===ci||oe===qi||oe===Wr||oe===Xr||oe===qa||oe===Ya,be=Fe.getClearColor(),we=Fe.getClearAlpha(),We=be.r,He=be.g,ke=be.b;me?(_[0]=We,_[1]=He,_[2]=ke,_[3]=we,I.clearBufferuiv(I.COLOR,0,_)):(x[0]=We,x[1]=He,x[2]=ke,x[3]=we,I.clearBufferiv(I.COLOR,0,x))}else G|=I.COLOR_BUFFER_BIT}N&&(G|=I.DEPTH_BUFFER_BIT),z&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Fe.dispose(),Re.dispose(),at.dispose(),De.dispose(),g.dispose(),F.dispose(),$.dispose(),At.dispose(),P.dispose(),ye.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",qt),Y.removeEventListener("sessionend",es),Xn.stop()};function te(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const y=Je.autoReset,N=fe.enabled,z=fe.autoUpdate,G=fe.needsUpdate,k=fe.type;Ee(),Je.autoReset=y,fe.enabled=N,fe.autoUpdate=z,fe.needsUpdate=G,fe.type=k}function ve(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Be(y){const N=y.target;N.removeEventListener("dispose",Be),ct(N)}function ct(y){Gt(y),De.remove(y)}function Gt(y){const N=De.get(y).programs;N!==void 0&&(N.forEach(function(z){ye.releaseProgram(z)}),y.isShaderMaterial&&ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,z,G,k,oe){N===null&&(N=Rt);const me=k.isMesh&&k.matrixWorld.determinant()<0,be=is(y,N,z,G,k);Oe.setMaterial(G,me);let we=z.index,We=1;if(G.wireframe===!0){if(we=ie.getWireframeAttribute(z),we===void 0)return;We=2}const He=z.drawRange,ke=z.attributes.position;let dt=He.start*We,_t=(He.start+He.count)*We;oe!==null&&(dt=Math.max(dt,oe.start*We),_t=Math.min(_t,(oe.start+oe.count)*We)),we!==null?(dt=Math.max(dt,0),_t=Math.min(_t,we.count)):ke!=null&&(dt=Math.max(dt,0),_t=Math.min(_t,ke.count));const Dt=_t-dt;if(Dt<0||Dt===1/0)return;At.setup(k,G,be,z,we);let ht,ft=_e;if(we!==null&&(ht=ee.get(we),ft=et,ft.setIndex(ht)),k.isMesh)G.wireframe===!0?(Oe.setLineWidth(G.wireframeLinewidth*st()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(k.isLine){let Ue=G.linewidth;Ue===void 0&&(Ue=1),Oe.setLineWidth(Ue*st()),k.isLineSegments?ft.setMode(I.LINES):k.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else k.isPoints?ft.setMode(I.POINTS):k.isSprite&&ft.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ue=k._multiDrawStarts,Ut=k._multiDrawCounts,gt=k._multiDrawCount,U=we?ee.get(we).bytesPerElement:1,de=De.get(G).currentProgram.getUniforms();for(let le=0;le<gt;le++)de.setValue(I,"_gl_DrawID",le),ft.render(Ue[le]/U,Ut[le])}else if(k.isInstancedMesh)ft.renderInstances(dt,Dt,k.count);else if(z.isInstancedBufferGeometry){const Ue=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ut=Math.min(z.instanceCount,Ue);ft.renderInstances(dt,Dt,Ut)}else ft.render(dt,Dt)};function tt(y,N,z){y.transparent===!0&&y.side===ni&&y.forceSinglePass===!1?(y.side=hn,y.needsUpdate=!0,di(y,N,z),y.side=Si,y.needsUpdate=!0,di(y,N,z),y.side=ni):di(y,N,z)}this.compile=function(y,N,z=null){z===null&&(z=y),l=at.get(z),l.init(N),T.push(l),z.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(l.pushLight(k),k.castShadow&&l.pushShadow(k))}),y!==z&&y.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(l.pushLight(k),k.castShadow&&l.pushShadow(k))}),l.setupLights();const G=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const oe=k.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const be=oe[me];tt(be,z,k),G.add(be)}else tt(oe,z,k),G.add(oe)}),l=T.pop(),G},this.compileAsync=function(y,N,z=null){const G=this.compile(y,N,z);return new Promise(k=>{function oe(){if(G.forEach(function(me){De.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){k(y);return}setTimeout(oe,10)}lt.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let on=null;function fn(y){on&&on(y)}function qt(){Xn.stop()}function es(){Xn.start()}const Xn=new fd;Xn.setAnimationLoop(fn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(y){on=y,Y.setAnimationLoop(y),y===null?Xn.stop():Xn.start()},Y.addEventListener("sessionstart",qt),Y.addEventListener("sessionend",es),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,N,L),l=at.get(y,T.length),l.init(N),T.push(l),Ge.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(Ge),Ie=this.localClippingEnabled,ce=J.init(this.clippingPlanes,Ie),m=Re.get(y,b.length),m.init(),b.push(m),Y.enabled===!0&&Y.isPresenting===!0){const oe=S.xr.getDepthSensingMesh();oe!==null&&ze(oe,N,-1/0,S.sortObjects)}ze(y,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ge,Ae),It=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,It&&Fe.addToRenderList(m,y),this.info.render.frame++,ce===!0&&J.beginShadows();const z=l.state.shadowsArray;fe.render(z,y,N),ce===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,k=m.transmissive;if(l.setupLights(),N.isArrayCamera){const oe=N.cameras;if(k.length>0)for(let me=0,be=oe.length;me<be;me++){const we=oe[me];ns(G,k,y,we)}It&&Fe.render(y);for(let me=0,be=oe.length;me<be;me++){const we=oe[me];ts(m,y,we,we.viewport)}}else k.length>0&&ns(G,k,y,N),It&&Fe.render(y),ts(m,y,N);L!==null&&C===0&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(S,y,N),At.resetDefaultState(),M=-1,E=null,T.pop(),T.length>0?(l=T[T.length-1],ce===!0&&J.setGlobalState(S.clippingPlanes,l.state.camera)):l=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ze(y,N,z,G){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)l.pushLight(y),y.castShadow&&l.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Q.intersectsSprite(y)){G&&Ve.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ge);const me=$.update(y),be=y.material;be.visible&&m.push(y,me,be,z,Ve.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Q.intersectsObject(y))){const me=$.update(y),be=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ve.copy(y.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ve.copy(me.boundingSphere.center)),Ve.applyMatrix4(y.matrixWorld).applyMatrix4(Ge)),Array.isArray(be)){const we=me.groups;for(let We=0,He=we.length;We<He;We++){const ke=we[We],dt=be[ke.materialIndex];dt&&dt.visible&&m.push(y,me,dt,z,Ve.z,ke)}}else be.visible&&m.push(y,me,be,z,Ve.z,null)}}const oe=y.children;for(let me=0,be=oe.length;me<be;me++)ze(oe[me],N,z,G)}function ts(y,N,z,G){const k=y.opaque,oe=y.transmissive,me=y.transparent;l.setupLightsView(z),ce===!0&&J.setGlobalState(S.clippingPlanes,z),G&&Oe.viewport(O.copy(G)),k.length>0&&li(k,N,z),oe.length>0&&li(oe,N,z),me.length>0&&li(me,N,z),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function ns(y,N,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[G.id]===void 0&&(l.state.transmissionRenderTarget[G.id]=new Yi(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?$r:ci,minFilter:Xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const oe=l.state.transmissionRenderTarget[G.id],me=G.viewport||O;oe.setSize(me.z*S.transmissionResolutionScale,me.w*S.transmissionResolutionScale);const be=S.getRenderTarget();S.setRenderTarget(oe),S.getClearColor(j),re=S.getClearAlpha(),re<1&&S.setClearColor(16777215,.5),S.clear(),It&&Fe.render(z);const we=S.toneMapping;S.toneMapping=Ei;const We=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),l.setupLightsView(G),ce===!0&&J.setGlobalState(S.clippingPlanes,G),li(y,z,G),A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe),lt.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ke=0,dt=N.length;ke<dt;ke++){const _t=N[ke],Dt=_t.object,ht=_t.geometry,ft=_t.material,Ue=_t.group;if(ft.side===ni&&Dt.layers.test(G.layers)){const Ut=ft.side;ft.side=hn,ft.needsUpdate=!0,wr(Dt,z,G,ht,ft,Ue),ft.side=Ut,ft.needsUpdate=!0,He=!0}}He===!0&&(A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe))}S.setRenderTarget(be),S.setClearColor(j,re),We!==void 0&&(G.viewport=We),S.toneMapping=we}function li(y,N,z){const G=N.isScene===!0?N.overrideMaterial:null;for(let k=0,oe=y.length;k<oe;k++){const me=y[k],be=me.object,we=me.geometry,We=me.group;let He=me.material;He.allowOverride===!0&&G!==null&&(He=G),be.layers.test(z.layers)&&wr(be,N,z,we,He,We)}}function wr(y,N,z,G,k,oe){y.onBeforeRender(S,N,z,G,k,oe),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(S,N,z,G,y,oe),k.transparent===!0&&k.side===ni&&k.forceSinglePass===!1?(k.side=hn,k.needsUpdate=!0,S.renderBufferDirect(z,N,G,k,y,oe),k.side=Si,k.needsUpdate=!0,S.renderBufferDirect(z,N,G,k,y,oe),k.side=ni):S.renderBufferDirect(z,N,G,k,y,oe),y.onAfterRender(S,N,z,G,k,oe)}function di(y,N,z){N.isScene!==!0&&(N=Rt);const G=De.get(y),k=l.state.lights,oe=l.state.shadowsArray,me=k.state.version,be=ye.getParameters(y,k.state,oe,N,z),we=ye.getProgramCacheKey(be);let We=G.programs;G.environment=y.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(y.isMeshStandardMaterial?F:g).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,We===void 0&&(y.addEventListener("dispose",Be),We=new Map,G.programs=We);let He=We.get(we);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===me)return Ai(y,be),He}else be.uniforms=ye.getUniforms(y),y.onBeforeCompile(be,S),He=ye.acquireProgram(be,we),We.set(we,He),G.uniforms=be.uniforms;const ke=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ke.clippingPlanes=J.uniform),Ai(y,be),G.needsLights=rs(y),G.lightsStateVersion=me,G.needsLights&&(ke.ambientLightColor.value=k.state.ambient,ke.lightProbe.value=k.state.probe,ke.directionalLights.value=k.state.directional,ke.directionalLightShadows.value=k.state.directionalShadow,ke.spotLights.value=k.state.spot,ke.spotLightShadows.value=k.state.spotShadow,ke.rectAreaLights.value=k.state.rectArea,ke.ltc_1.value=k.state.rectAreaLTC1,ke.ltc_2.value=k.state.rectAreaLTC2,ke.pointLights.value=k.state.point,ke.pointLightShadows.value=k.state.pointShadow,ke.hemisphereLights.value=k.state.hemi,ke.directionalShadowMap.value=k.state.directionalShadowMap,ke.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ke.spotShadowMap.value=k.state.spotShadowMap,ke.spotLightMatrix.value=k.state.spotLightMatrix,ke.spotLightMap.value=k.state.spotLightMap,ke.pointShadowMap.value=k.state.pointShadowMap,ke.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function Cr(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Bs.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Ai(y,N){const z=De.get(y);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function is(y,N,z,G,k){N.isScene!==!0&&(N=Rt),A.resetTextureUnits();const oe=N.fog,me=G.isMeshStandardMaterial?N.environment:null,be=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Tr,we=(G.isMeshStandardMaterial?F:g).get(G.envMap||me),We=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,He=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ke=!!z.morphAttributes.position,dt=!!z.morphAttributes.normal,_t=!!z.morphAttributes.color;let Dt=Ei;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Dt=S.toneMapping);const ht=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ft=ht!==void 0?ht.length:0,Ue=De.get(G),Ut=l.state.lights;if(ce===!0&&(Ie===!0||y!==E)){const wt=y===E&&G.id===M;J.setState(G,y,wt)}let gt=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Ut.state.version||Ue.outputColorSpace!==be||k.isBatchedMesh&&Ue.batching===!1||!k.isBatchedMesh&&Ue.batching===!0||k.isBatchedMesh&&Ue.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ue.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ue.instancing===!1||!k.isInstancedMesh&&Ue.instancing===!0||k.isSkinnedMesh&&Ue.skinning===!1||!k.isSkinnedMesh&&Ue.skinning===!0||k.isInstancedMesh&&Ue.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ue.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ue.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ue.instancingMorph===!1&&k.morphTexture!==null||Ue.envMap!==we||G.fog===!0&&Ue.fog!==oe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==J.numPlanes||Ue.numIntersection!==J.numIntersection)||Ue.vertexAlphas!==We||Ue.vertexTangents!==He||Ue.morphTargets!==ke||Ue.morphNormals!==dt||Ue.morphColors!==_t||Ue.toneMapping!==Dt||Ue.morphTargetsCount!==ft)&&(gt=!0):(gt=!0,Ue.__version=G.version);let U=Ue.currentProgram;gt===!0&&(U=di(G,N,k));let de=!1,le=!1,Pe=!1;const Le=U.getUniforms(),Ke=Ue.uniforms;if(Oe.useProgram(U.program)&&(de=!0,le=!0,Pe=!0),G.id!==M&&(M=G.id,le=!0),de||E!==y){Oe.buffers.depth.getReversed()?(pe.copy(y.projectionMatrix),Kh(pe),$h(pe),Le.setValue(I,"projectionMatrix",pe)):Le.setValue(I,"projectionMatrix",y.projectionMatrix),Le.setValue(I,"viewMatrix",y.matrixWorldInverse);const Ot=Le.map.cameraPosition;Ot!==void 0&&Ot.setValue(I,mt.setFromMatrixPosition(y.matrixWorld)),Qe.logarithmicDepthBuffer&&Le.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Le.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,le=!0,Pe=!0)}if(k.isSkinnedMesh){Le.setOptional(I,k,"bindMatrix"),Le.setOptional(I,k,"bindMatrixInverse");const wt=k.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),Le.setValue(I,"boneTexture",wt.boneTexture,A))}k.isBatchedMesh&&(Le.setOptional(I,k,"batchingTexture"),Le.setValue(I,"batchingTexture",k._matricesTexture,A),Le.setOptional(I,k,"batchingIdTexture"),Le.setValue(I,"batchingIdTexture",k._indirectTexture,A),Le.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&Le.setValue(I,"batchingColorTexture",k._colorsTexture,A));const Tt=z.morphAttributes;if((Tt.position!==void 0||Tt.normal!==void 0||Tt.color!==void 0)&&Ye.update(k,z,U),(le||Ue.receiveShadow!==k.receiveShadow)&&(Ue.receiveShadow=k.receiveShadow,Le.setValue(I,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ke.envMap.value=we,Ke.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Ke.envMapIntensity.value=N.environmentIntensity),le&&(Le.setValue(I,"toneMappingExposure",S.toneMappingExposure),Ue.needsLights&&Ir(Ke,Pe),oe&&G.fog===!0&&Se.refreshFogUniforms(Ke,oe),Se.refreshMaterialUniforms(Ke,G,q,se,l.state.transmissionRenderTarget[y.id]),Bs.upload(I,Cr(Ue),Ke,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Bs.upload(I,Cr(Ue),Ke,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Le.setValue(I,"center",k.center),Le.setValue(I,"modelViewMatrix",k.modelViewMatrix),Le.setValue(I,"normalMatrix",k.normalMatrix),Le.setValue(I,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const wt=G.uniformsGroups;for(let Ot=0,Ri=wt.length;Ot<Ri;Ot++){const Qt=wt[Ot];P.update(Qt,U),P.bind(Qt,U)}}return U}function Ir(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function rs(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,N,z){const G=De.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),De.get(y.texture).__webglTexture=N,De.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const z=De.get(y);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const Qs=I.createFramebuffer();this.setRenderTarget=function(y,N=0,z=0){L=y,R=N,C=z;let G=!0,k=null,oe=!1,me=!1;if(y){const we=De.get(y);if(we.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(we.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(we.__hasExternalTextures)A.rebindTextures(y,De.get(y.texture).__webglTexture,De.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ke=y.depthTexture;if(we.__boundDepthTexture!==ke){if(ke!==null&&De.has(ke)&&(y.width!==ke.image.width||y.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const We=y.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(me=!0);const He=De.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(He[N])?k=He[N][z]:k=He[N],oe=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?k=De.get(y).__webglMultisampledFramebuffer:Array.isArray(He)?k=He[z]:k=He,O.copy(y.viewport),W.copy(y.scissor),H=y.scissorTest}else O.copy(Ce).multiplyScalar(q).floor(),W.copy(Ze).multiplyScalar(q).floor(),H=Xe;if(z!==0&&(k=Qs),Oe.bindFramebuffer(I.FRAMEBUFFER,k)&&G&&Oe.drawBuffers(y,k),Oe.viewport(O),Oe.scissor(W),Oe.setScissorTest(H),oe){const we=De.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,z)}else if(me){const we=De.get(y.texture),We=N;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.__webglTexture,z,We)}else if(y!==null&&z!==0){const we=De.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,we.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(y,N,z,G,k,oe,me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=De.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){Oe.bindFramebuffer(I.FRAMEBUFFER,be);try{const we=y.texture,We=we.format,He=we.type;if(!Qe.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-G&&z>=0&&z<=y.height-k&&I.readPixels(N,z,G,k,je.convert(We),je.convert(He),oe)}finally{const we=L!==null?De.get(L).__webglFramebuffer:null;Oe.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,N,z,G,k,oe,me){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=De.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be)if(N>=0&&N<=y.width-G&&z>=0&&z<=y.height-k){Oe.bindFramebuffer(I.FRAMEBUFFER,be);const we=y.texture,We=we.format,He=we.type;if(!Qe.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ke),I.bufferData(I.PIXEL_PACK_BUFFER,oe.byteLength,I.STREAM_READ),I.readPixels(N,z,G,k,je.convert(We),je.convert(He),0);const dt=L!==null?De.get(L).__webglFramebuffer:null;Oe.bindFramebuffer(I.FRAMEBUFFER,dt);const _t=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Yh(I,_t,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ke),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,oe),I.deleteBuffer(ke),I.deleteSync(_t),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,z=0){const G=Math.pow(2,-z),k=Math.floor(y.image.width*G),oe=Math.floor(y.image.height*G),me=N!==null?N.x:0,be=N!==null?N.y:0;A.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,me,be,k,oe),Oe.unbindTexture()};const Js=I.createFramebuffer(),eo=I.createFramebuffer();this.copyTextureToTexture=function(y,N,z=null,G=null,k=0,oe=null){oe===null&&(k!==0?(Fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=k,k=0):oe=0);let me,be,we,We,He,ke,dt,_t,Dt;const ht=y.isCompressedTexture?y.mipmaps[oe]:y.image;if(z!==null)me=z.max.x-z.min.x,be=z.max.y-z.min.y,we=z.isBox3?z.max.z-z.min.z:1,We=z.min.x,He=z.min.y,ke=z.isBox3?z.min.z:0;else{const Tt=Math.pow(2,-k);me=Math.floor(ht.width*Tt),be=Math.floor(ht.height*Tt),y.isDataArrayTexture?we=ht.depth:y.isData3DTexture?we=Math.floor(ht.depth*Tt):we=1,We=0,He=0,ke=0}G!==null?(dt=G.x,_t=G.y,Dt=G.z):(dt=0,_t=0,Dt=0);const ft=je.convert(N.format),Ue=je.convert(N.type);let Ut;N.isData3DTexture?(A.setTexture3D(N,0),Ut=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Ut=I.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Ut=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const gt=I.getParameter(I.UNPACK_ROW_LENGTH),U=I.getParameter(I.UNPACK_IMAGE_HEIGHT),de=I.getParameter(I.UNPACK_SKIP_PIXELS),le=I.getParameter(I.UNPACK_SKIP_ROWS),Pe=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,We),I.pixelStorei(I.UNPACK_SKIP_ROWS,He),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);const Le=y.isDataArrayTexture||y.isData3DTexture,Ke=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const Tt=De.get(y),wt=De.get(N),Ot=De.get(Tt.__renderTarget),Ri=De.get(wt.__renderTarget);Oe.bindFramebuffer(I.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Oe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Qt=0;Qt<we;Qt++)Le&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.get(y).__webglTexture,k,ke+Qt),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.get(N).__webglTexture,oe,Dt+Qt)),I.blitFramebuffer(We,He,me,be,dt,_t,me,be,I.DEPTH_BUFFER_BIT,I.NEAREST);Oe.bindFramebuffer(I.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||De.has(y)){const Tt=De.get(y),wt=De.get(N);Oe.bindFramebuffer(I.READ_FRAMEBUFFER,Js),Oe.bindFramebuffer(I.DRAW_FRAMEBUFFER,eo);for(let Ot=0;Ot<we;Ot++)Le?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.__webglTexture,k,ke+Ot):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tt.__webglTexture,k),Ke?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.__webglTexture,oe,Dt+Ot):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wt.__webglTexture,oe),k!==0?I.blitFramebuffer(We,He,me,be,dt,_t,me,be,I.COLOR_BUFFER_BIT,I.NEAREST):Ke?I.copyTexSubImage3D(Ut,oe,dt,_t,Dt+Ot,We,He,me,be):I.copyTexSubImage2D(Ut,oe,dt,_t,We,He,me,be);Oe.bindFramebuffer(I.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ke?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(Ut,oe,dt,_t,Dt,me,be,we,ft,Ue,ht.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Ut,oe,dt,_t,Dt,me,be,we,ft,ht.data):I.texSubImage3D(Ut,oe,dt,_t,Dt,me,be,we,ft,Ue,ht):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,oe,dt,_t,me,be,ft,Ue,ht.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,oe,dt,_t,ht.width,ht.height,ft,ht.data):I.texSubImage2D(I.TEXTURE_2D,oe,dt,_t,me,be,ft,Ue,ht);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,U),I.pixelStorei(I.UNPACK_SKIP_PIXELS,de),I.pixelStorei(I.UNPACK_SKIP_ROWS,le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pe),oe===0&&N.generateMipmaps&&I.generateMipmap(Ut),Oe.unbindTexture()},this.copyTextureToTexture3D=function(y,N,z=null,G=null,k=0){return Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,z,G,k)},this.initRenderTarget=function(y){De.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),Oe.unbindTexture()},this.resetState=function(){R=0,C=0,L=null,Oe.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}const X=Object.freeze({DIRT:"dirt",STONE:"stone",WOOD:"wood",SAND:"sand",COBBLESTONE:"cobblestone",PLANKS:"planks",CLAY:"clay",GRAVEL:"gravel",GLASS:"glass",IRON_ORE:"iron_ore",COPPER_ORE:"copper_ore",IRON_INGOT:"iron_ingot",COPPER_INGOT:"copper_ingot",STICK:"stick",FIBER:"fiber",LEATHER:"leather",ROPE:"rope",COAL:"coal",RAW_MEAT:"raw_meat",COOKED_MEAT:"cooked_meat",RAW_BERRIES:"raw_berries",RAW_MUSHROOM:"raw_mushroom",RAW_FISH:"raw_fish",COOKED_FISH:"cooked_fish",STONE_PICKAXE:"stone_pickaxe",STONE_AXE:"stone_axe",IRON_PICKAXE:"iron_pickaxe",IRON_AXE:"iron_axe",LEATHER_ARMOR:"leather_armor",BANDAGE:"bandage",IRON_SWORD:"iron_sword",IRON_HAMMER:"iron_hammer",COPPER_PICKAXE:"copper_pickaxe",STEW:"stew",TRAIL_RATIONS:"trail_rations",HERB_SALAD:"herb_salad",TORCH:"torch",BEDROLL:"bedroll",MAP:"map",LORE_FRAGMENT:"lore_fragment",RELIC_SHARD:"relic_shard",WORKBENCH:"workbench",CAMPFIRE:"campfire",FORGE:"forge",KITCHEN:"kitchen",LOOM:"loom",THATCH:"thatch",STONE_BRICK:"stone_brick",DARK_STONE:"dark_stone",OAK_PLANKS:"oak_planks",BIRCH_WOOD:"birch_wood",SLATE:"slate",MARBLE:"marble",CHEST:"chest"}),v=Object.freeze({AIR:0,DIRT:1,STONE:2,GRASS:3,WOOD:4,LEAVES:5,SAND:6,WATER:7,CLAY:8,GRAVEL:9,COBBLESTONE:10,PLANKS:11,IRON_ORE:12,COPPER_ORE:13,COAL_ORE:14,GLASS:15,CAMPFIRE:16,WORKBENCH:17,FORGE:18,KITCHEN:19,LOOM:20,RUNE_TABLE:21,TORCH:22,THATCH:23,STONE_BRICK:24,IRON_BLOCK:25,COPPER_BLOCK:26,SNOW:27,ICE:28,MOSSY_STONE:29,CORRUPTED_STONE:30,DARK_STONE:31,OAK_PLANKS:32,BIRCH_WOOD:33,REED:34,MUD:35,SLATE:36,MARBLE:37,OBSIDIAN:38,CRYSTAL:39,TALL_GRASS:40,CHEST:41,BED:42,DOOR:43,DOOR_OPEN:44}),m0=new Set([v.AIR,v.WATER,v.TORCH,v.TALL_GRASS,v.LEAVES,v.BED,v.DOOR_OPEN]);function rn(i){return!m0.has(i)}const _0=new Set([v.AIR,v.WATER]);function g0(i){return!_0.has(i)}const v0={[v.DIRT]:[{type:X.DIRT,count:1}],[v.STONE]:[{type:X.STONE,count:1}],[v.GRASS]:[{type:X.DIRT,count:1},{type:X.FIBER,count:1}],[v.WOOD]:[{type:X.WOOD,count:1}],[v.LEAVES]:[{type:X.STICK,count:1}],[v.SAND]:[{type:X.SAND,count:1}],[v.CLAY]:[{type:X.CLAY,count:1}],[v.GRAVEL]:[{type:X.GRAVEL,count:1}],[v.COBBLESTONE]:[{type:X.COBBLESTONE,count:1}],[v.PLANKS]:[{type:X.PLANKS,count:1}],[v.IRON_ORE]:[{type:X.IRON_ORE,count:1}],[v.COPPER_ORE]:[{type:X.COPPER_ORE,count:1}],[v.COAL_ORE]:[{type:X.COAL,count:1}],[v.GLASS]:[{type:X.GLASS,count:1}],[v.TORCH]:[{type:X.TORCH,count:1}],[v.THATCH]:[{type:X.FIBER,count:2}],[v.SNOW]:[{type:X.DIRT,count:1}],[v.DARK_STONE]:[{type:X.DARK_STONE,count:1}],[v.OAK_PLANKS]:[{type:X.OAK_PLANKS,count:1}],[v.BIRCH_WOOD]:[{type:X.BIRCH_WOOD,count:1}],[v.SLATE]:[{type:X.SLATE,count:1}],[v.MARBLE]:[{type:X.MARBLE,count:1}],[v.TALL_GRASS]:[{type:X.FIBER,count:1}],[v.WORKBENCH]:[{type:X.WORKBENCH,count:1}],[v.CAMPFIRE]:[{type:X.CAMPFIRE,count:1}],[v.FORGE]:[{type:X.FORGE,count:1}],[v.KITCHEN]:[{type:X.KITCHEN,count:1}],[v.LOOM]:[{type:X.LOOM,count:1}],[v.CHEST]:[{type:X.CHEST,count:1}]};function x0(i){return v0[i]||[]}const y0=Object.freeze({[v.DIRT]:"hand",[v.GRASS]:"hand",[v.LEAVES]:"hand",[v.TALL_GRASS]:"hand",[v.SAND]:"hand",[v.CLAY]:"hand",[v.GRAVEL]:"hand",[v.SNOW]:"hand",[v.MUD]:"hand",[v.THATCH]:"hand",[v.REED]:"hand",[v.WOOD]:"hand",[v.BIRCH_WOOD]:"hand",[v.PLANKS]:"hand",[v.OAK_PLANKS]:"hand",[v.STONE]:"pickaxe",[v.IRON_ORE]:"pickaxe",[v.COPPER_ORE]:"pickaxe",[v.COAL_ORE]:"pickaxe",[v.COBBLESTONE]:"pickaxe",[v.STONE_BRICK]:"pickaxe",[v.SLATE]:"pickaxe",[v.MARBLE]:"pickaxe",[v.DARK_STONE]:"pickaxe",[v.MOSSY_STONE]:"pickaxe",[v.CORRUPTED_STONE]:"pickaxe",[v.OBSIDIAN]:"pickaxe",[v.CRYSTAL]:"pickaxe",[v.ICE]:"pickaxe",[v.IRON_BLOCK]:"pickaxe",[v.COPPER_BLOCK]:"pickaxe",[v.GLASS]:"hand",[v.CAMPFIRE]:"hand",[v.WORKBENCH]:"hand",[v.FORGE]:"pickaxe",[v.KITCHEN]:"hand",[v.LOOM]:"hand",[v.RUNE_TABLE]:"pickaxe",[v.TORCH]:"hand",[v.CHEST]:"hand",[v.BED]:"hand",[v.DOOR]:"hand",[v.DOOR_OPEN]:"hand"});function E0(i,e){const t=y0[i]||"hand";return t==="hand"?!0:e==null?!1:e===t}const Na=Object.freeze({[X.DIRT]:v.DIRT,[X.STONE]:v.STONE,[X.WOOD]:v.WOOD,[X.SAND]:v.SAND,[X.COBBLESTONE]:v.COBBLESTONE,[X.PLANKS]:v.PLANKS,[X.CLAY]:v.CLAY,[X.GRAVEL]:v.GRAVEL,[X.GLASS]:v.GLASS,[X.TORCH]:v.TORCH,[X.THATCH]:v.THATCH,[X.STONE_BRICK]:v.STONE_BRICK,[X.DARK_STONE]:v.DARK_STONE,[X.OAK_PLANKS]:v.OAK_PLANKS,[X.BIRCH_WOOD]:v.BIRCH_WOOD,[X.SLATE]:v.SLATE,[X.MARBLE]:v.MARBLE,[X.WORKBENCH]:v.WORKBENCH,[X.CAMPFIRE]:v.CAMPFIRE,[X.FORGE]:v.FORGE,[X.KITCHEN]:v.KITCHEN,[X.LOOM]:v.LOOM,[X.CHEST]:v.CHEST}),qe=16;class ka{constructor(){this.blocks=new Uint8Array(qe*qe*qe)}_index(e,t,n){return e+t*qe+n*qe*qe}_inBounds(e,t,n){return e>=0&&e<qe&&t>=0&&t<qe&&n>=0&&n<qe}getBlock(e,t,n){return this._inBounds(e,t,n)?this.blocks[this._index(e,t,n)]:v.AIR}setBlock(e,t,n,r){this._inBounds(e,t,n)&&(this.blocks[this._index(e,t,n)]=r)}}class vd{constructor(){this.chunks=new Map}_chunkKey(e,t,n){return`${e},${t},${n}`}_worldToChunk(e,t,n){const r=Math.floor(e/qe),s=Math.floor(t/qe),o=Math.floor(n/qe),a=(e%qe+qe)%qe,c=(t%qe+qe)%qe,d=(n%qe+qe)%qe;return{cx:r,cy:s,cz:o,lx:a,ly:c,lz:d}}getChunk(e,t,n){return this.chunks.get(this._chunkKey(e,t,n))||null}_getOrCreateChunk(e,t,n){const r=this._chunkKey(e,t,n);let s=this.chunks.get(r);return s||(s=new ka,this.chunks.set(r,s)),s}getBlock(e,t,n){if(t<0)return v.STONE;const{cx:r,cy:s,cz:o,lx:a,ly:c,lz:d}=this._worldToChunk(e,t,n),h=this.getChunk(r,s,o);return h?h.getBlock(a,c,d):v.AIR}isChunkLoaded(e,t,n){const{cx:r,cy:s,cz:o}=this._worldToChunk(e,t,n);return this.chunks.has(this._chunkKey(r,s,o))}setBlock(e,t,n,r){const{cx:s,cy:o,cz:a,lx:c,ly:d,lz:h}=this._worldToChunk(e,t,n);this._getOrCreateChunk(s,o,a).setBlock(c,d,h,r)}restoreFrom(e){this.chunks.clear();for(const[t,n]of e.chunks){const r=new ka;r.blocks.set(n.blocks),this.chunks.set(t,r)}}}const ei=new Uint8Array(512);(function(){const e=new Uint8Array(256);for(let n=0;n<256;n++)e[n]=n;let t=12345;for(let n=255;n>0;n--){t=t*1103515245+12345&2147483647;const r=t%(n+1);[e[n],e[r]]=[e[r],e[n]]}for(let n=0;n<512;n++)ei[n]=e[n&255]})();const S0=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];function hl(i){return i*i*i*(i*(i*6-15)+10)}function Po(i,e,t){return i+t*(e-i)}function As(i,e,t){const n=S0[i&7];return n[0]*e+n[1]*t}function Ua(i,e){const t=Math.floor(i)&255,n=Math.floor(e)&255,r=i-Math.floor(i),s=e-Math.floor(e),o=hl(r),a=hl(s),c=ei[ei[t]+n],d=ei[ei[t]+n+1],h=ei[ei[t+1]+n],f=ei[ei[t+1]+n+1],u=Po(As(c,r,s),As(h,r-1,s),o),p=Po(As(d,r,s-1),As(f,r-1,s-1),o);return Po(u,p,a)}const pt=Object.freeze({SHIRE:"shire",FOREST:"forest",MOUNTAIN:"mountain",MIRKWOOD:"mirkwood",PLAINS:"plains"});class Ur{constructor({type:e,name:t,surfaceBlock:n,treeDensity:r,minHeight:s,maxHeight:o}){this.type=e,this.name=t,this.surfaceBlock=n,this.treeDensity=r,this.minHeight=s,this.maxHeight=o}}const ul={[pt.SHIRE]:new Ur({type:pt.SHIRE,name:"The Shire",surfaceBlock:v.GRASS,treeDensity:.02,minHeight:29,maxHeight:34}),[pt.FOREST]:new Ur({type:pt.FOREST,name:"Forest",surfaceBlock:v.GRASS,treeDensity:.08,minHeight:30,maxHeight:40}),[pt.MOUNTAIN]:new Ur({type:pt.MOUNTAIN,name:"Misty Mountains",surfaceBlock:v.STONE,treeDensity:.005,minHeight:35,maxHeight:85}),[pt.MIRKWOOD]:new Ur({type:pt.MIRKWOOD,name:"Mirkwood",surfaceBlock:v.MUD,treeDensity:.2,minHeight:23,maxHeight:35}),[pt.PLAINS]:new Ur({type:pt.PLAINS,name:"Plains",surfaceBlock:v.GRASS,treeDensity:.003,minHeight:29,maxHeight:33})};function M0(i){return ul[i]||ul[pt.PLAINS]}const T0=[{id:"anduin",name:"River Anduin",width:8,current:{x:0,z:1.5},points:[{x:320,z:-100},{x:330,z:-50},{x:335,z:0},{x:340,z:40},{x:345,z:60},{x:350,z:80},{x:355,z:120},{x:360,z:150}]},{id:"shire_brook",name:"The Water (Shire Brook)",width:3,current:{x:.6,z:0},points:[{x:-40,z:5},{x:60,z:5}]},{id:"forest_river",name:"Forest River",width:5,current:{x:-1,z:0},points:[{x:460,z:20},{x:440,z:25},{x:420,z:30},{x:400,z:35},{x:380,z:40},{x:360,z:50}]}];function b0(i,e,t,n,r,s){const o=r-t,a=s-n,c=o*o+a*a;if(c===0)return Math.sqrt((i-t)**2+(e-n)**2);let d=((i-t)*o+(e-n)*a)/c;d=Math.max(0,Math.min(1,d));const h=t+d*o,f=n+d*a;return Math.sqrt((i-h)**2+(e-f)**2)}function A0(i,e,t){let n=1/0;for(let r=0;r<t.points.length-1;r++){const s=t.points[r],o=t.points[r+1],a=b0(i,e,s.x,s.z,o.x,o.z);a<n&&(n=a)}return n}function xd(i,e){for(const t of T0)if(A0(i,e,t)<=t.width/2)return t;return null}function R0(i,e){const t=xd(i,e);return t?{...t.current}:null}const w0=32,C0=26,zs=-100,I0=560,Hs=-120,O0=150,Rs=.02,fl=42,D0=[{x:0,z:0,biome:pt.SHIRE,radius:70},{x:80,z:20,biome:pt.PLAINS,radius:40},{x:140,z:40,biome:pt.FOREST,radius:40},{x:200,z:30,biome:pt.FOREST,radius:40},{x:270,z:50,biome:pt.MOUNTAIN,radius:60},{x:340,z:60,biome:pt.PLAINS,radius:45},{x:400,z:40,biome:pt.MIRKWOOD,radius:60},{x:420,z:90,biome:pt.MIRKWOOD,radius:35},{x:470,z:30,biome:pt.PLAINS,radius:30},{x:520,z:20,biome:pt.MOUNTAIN,radius:40}];function qs(i,e){let t=pt.PLAINS,n=1/0;for(const r of D0){const s=i-r.x,o=e-r.z,c=Math.sqrt(s*s+o*o)/r.radius;c<n&&(n=c,t=r.biome)}return M0(t)}function zt(i,e){const t=qs(i,e),n=Ua(i*Rs+fl*.1,e*Rs),r=Ua(i*Rs*2+fl*.1+100,e*Rs*2+100)*.5,o=((n+r)/1.5+1)/2;return Math.floor(t.minHeight+o*(t.maxHeight-t.minHeight))}v.COAL_ORE,v.COPPER_ORE,v.IRON_ORE;pt.FOREST+"",pt.MIRKWOOD+"",pt.SHIRE+"",pt.PLAINS+"";const L0=-20,P0=.6,yd=1.8,Ht=P0/2,pl=0;function N0(i,e){i.velocity.y+=L0*e}function k0(i,e,t,n){const r=[],s=Math.floor(e-Ht),o=Math.floor(e+Ht-.001),a=Math.floor(n-Ht),c=Math.floor(n+Ht-.001),d=Math.floor(t),h=Math.floor(t+yd-.001);for(let f=s;f<=o;f++)for(let u=a;u<=c;u++)for(let p=d;p<=h;p++)rn(i.getBlock(f,p,u))&&r.push({bx:f,by:p,bz:u});return r}function U0(i,e,t){const n=i.position,r=k0(e,n.x,n.y,n.z);for(const{bx:o,bz:a}of r){const c=n.x-Ht,d=n.x+Ht,h=n.z-Ht,f=n.z+Ht,u=d-o,p=o+1-c,_=f-a,x=a+1-h,m=Math.min(u,p),l=Math.min(_,x);m<l?u<p?n.x=o-Ht-.001:n.x=o+1+Ht+.001:_<x?n.z=a-Ht-.001:n.z=a+1+Ht+.001}const s=n.y+i.velocity.y*t;if(i.velocity.y<=0){const o=Math.floor(n.y)-1,a=Math.floor(s)-1;for(let c=o;c>=a;c--){const d=Math.floor(n.x-Ht),h=Math.floor(n.x+Ht-.001),f=Math.floor(n.z-Ht),u=Math.floor(n.z+Ht-.001);for(let p=d;p<=h;p++)for(let _=f;_<=u;_++)if(rn(e.getBlock(p,c,_))){n.y=c+1,i.velocity.y=0,i.onGround=!0;return}}}else{const o=Math.floor(s+yd),a=Math.floor(n.x-Ht),c=Math.floor(n.x+Ht-.001),d=Math.floor(n.z-Ht),h=Math.floor(n.z+Ht-.001);for(let f=a;f<=c;f++)for(let u=d;u<=h;u++)if(rn(e.getBlock(f,o,u))){i.velocity.y=0;return}}n.y=s,i.onGround=!1,n.y<pl&&(n.y=pl,i.velocity.y=0,i.onGround=!0)}const No=[{dir:[0,1,0],verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{dir:[0,-1,0],verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{dir:[1,0,0],verts:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{dir:[-1,0,0],verts:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]]},{dir:[0,0,1],verts:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]]},{dir:[0,0,-1],verts:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}],ln={[v.GRASS]:[.32,.6,.24],[v.DIRT]:[.45,.33,.2],[v.STONE]:[.5,.5,.52],[v.WOOD]:[.4,.24,.12],[v.LEAVES]:[.18,.48,.13],[v.WATER]:[.15,.35,.65],[v.SAND]:[.82,.72,.45],[v.CLAY]:[.58,.42,.32],[v.GRAVEL]:[.52,.5,.48],[v.COBBLESTONE]:[.42,.42,.44],[v.PLANKS]:[.58,.4,.2],[v.IRON_ORE]:[.48,.45,.42],[v.COPPER_ORE]:[.5,.38,.28],[v.COAL_ORE]:[.22,.22,.24],[v.GLASS]:[.72,.82,.88],[v.CAMPFIRE]:[.45,.22,.08],[v.WORKBENCH]:[.52,.36,.18],[v.FORGE]:[.3,.3,.32],[v.KITCHEN]:[.48,.33,.18],[v.LOOM]:[.62,.52,.38],[v.RUNE_TABLE]:[.25,.2,.45],[v.TORCH]:[.92,.72,.18],[v.THATCH]:[.68,.6,.32],[v.STONE_BRICK]:[.48,.48,.46],[v.IRON_BLOCK]:[.68,.68,.72],[v.COPPER_BLOCK]:[.7,.42,.18],[v.SNOW]:[.93,.95,.98],[v.ICE]:[.65,.82,.92],[v.MOSSY_STONE]:[.35,.45,.32],[v.CORRUPTED_STONE]:[.28,.18,.32],[v.DARK_STONE]:[.18,.15,.2],[v.OAK_PLANKS]:[.52,.36,.16],[v.BIRCH_WOOD]:[.78,.73,.62],[v.REED]:[.42,.58,.28],[v.MUD]:[.32,.25,.15],[v.SLATE]:[.35,.36,.4],[v.MARBLE]:[.88,.86,.82],[v.OBSIDIAN]:[.08,.06,.12],[v.CRYSTAL]:[.68,.78,.92],[v.TALL_GRASS]:[.28,.56,.2],[v.CHEST]:[.55,.38,.18],[v.BED]:[.6,.15,.12],[v.DOOR]:[.42,.28,.14],[v.DOOR_OPEN]:[.42,.28,.14]},Fa=[1,0,1];function Qn(i,e,t,n){let r=i*374761+e*668265+t*1274613+n*982451|0;return r=(r>>16^r)*73244475|0,r=(r>>16^r)*73244475|0,r=r>>16^r,((r&65535)/65535-.5)*.24}function F0(i,e,t,n,r,s){const[o,a,c]=r.dir;let d,h;a!==0?(d=[1,0,0],h=[0,0,1]):o!==0?(d=[0,1,0],h=[0,0,1]):(d=[1,0,0],h=[0,1,0]);const f=r.verts[s],u=f[0]*d[0]+f[1]*d[1]+f[2]*d[2]>.5?1:-1,p=f[0]*h[0]+f[1]*h[1]+f[2]*h[2]>.5?1:-1,_=rn(i.getBlock(e+o+d[0]*u,t+a+d[1]*u,n+c+d[2]*u))?1:0,x=rn(i.getBlock(e+o+h[0]*p,t+a+h[1]*p,n+c+h[2]*p))?1:0,m=rn(i.getBlock(e+o+d[0]*u+h[0]*p,t+a+d[1]*u+h[1]*p,n+c+d[2]*u+h[2]*p))?1:0;return 1-(_&&x?3:_+x+m)*.15}const B0=[{verts:[[.5,0,.45],[.78,.28,.44],[.78,.28,.56],[.5,0,.55]]},{verts:[[.54,0,.48],[.69,.28,.71],[.59,.28,.77],[.46,0,.53]]},{verts:[[.54,0,.53],[.41,.28,.77],[.31,.28,.71],[.46,0,.48]]},{verts:[[.5,0,.55],[.22,.28,.56],[.22,.28,.44],[.5,0,.45]]},{verts:[[.46,0,.53],[.31,.28,.29],[.41,.28,.23],[.54,0,.48]]},{verts:[[.46,0,.48],[.59,.28,.23],[.69,.28,.29],[.54,0,.53]]}],z0=[.45,.33,.2],H0=[.62,.5,.34],G0=[.35,.22,.12],V0=[.58,.58,.56],W0=[.65,.55,.3],X0=[.38,.32,.22],q0=[.85,.88,.92],Y0=[.5,.5,.48];function K0(i){return i!==v.AIR}function $0(i,e){const t=e[1]===1,n=e[1]===-1;switch(i){case v.GRASS:return t?ln[v.GRASS]:z0;case v.WOOD:return t?H0:n?G0:ln[v.WOOD];case v.BIRCH_WOOD:return t?[.85,.8,.7]:ln[v.BIRCH_WOOD];case v.STONE:return t?V0:ln[v.STONE];case v.COBBLESTONE:return t?Y0:ln[v.COBBLESTONE];case v.SAND:return n?W0:ln[v.SAND];case v.MUD:return t?X0:ln[v.MUD];case v.SNOW:return t?ln[v.SNOW]:q0;case v.DIRT:return t?[.52,.4,.26]:ln[v.DIRT];case v.IRON_ORE:return t?[.5,.48,.42]:ln[v.IRON_ORE];case v.COPPER_ORE:return t?[.5,.4,.28]:ln[v.COPPER_ORE];default:return ln[i]||Fa}}function j0(i,e,t,n,r){const s=[],o=[],a=[];for(let c=0;c<qe;c++)for(let d=0;d<qe;d++)for(let h=0;h<qe;h++){const f=i.getBlock(c,d,h);if(!K0(f))continue;const u=e*qe+c,p=t*qe+d,_=n*qe+h;if(f===v.TALL_GRASS){const x=ln[f]||Fa;for(const m of B0){const l=s.length/3;for(const b of m.verts){const T=u+b[0],S=p+b[1],D=_+b[2];s.push(T,S,D);const R=.4+2*b[1];o.push((x[0]+Qn(T,S,D,0))*R,(x[1]+Qn(T,S,D,1))*R,(x[2]+Qn(T,S,D,2))*R)}a.push(l,l+1,l+2,l,l+2,l+3),a.push(l+2,l+1,l,l+3,l+2,l)}continue}if(f===v.WATER){if(r.getBlock(u,p+1,_)===v.WATER)continue;const m=ln[v.WATER]||Fa;for(const l of No){const b=u+l.dir[0],T=p+l.dir[1],S=_+l.dir[2];if(r.getBlock(b,T,S)!==v.AIR||l.dir[1]===-1)continue;const R=s.length/3;for(const C of l.verts){const L=u+C[0],M=p+C[1]-(l.dir[1]===1?.15:0),E=_+C[2];s.push(L,M,E),o.push(m[0]+Qn(L,M,E,0)*.3,m[1]+Qn(L,M,E,1)*.3,m[2]+Qn(L,M,E,2)*.3)}a.push(R,R+1,R+2,R,R+2,R+3)}continue}for(let x=0;x<No.length;x++){const m=No[x],l=u+m.dir[0],b=p+m.dir[1],T=_+m.dir[2];if(rn(r.getBlock(l,b,T)))continue;const S=s.length/3,D=$0(f,m.dir),R=m.dir[1]===1?1:m.dir[1]===-1?.55:m.dir[0]===1?.82:m.dir[0]===-1?.68:m.dir[2]===1?.78:.65,C=f===v.GRASS&&m.dir[1]===1?2.5:1;for(let L=0;L<m.verts.length;L++){const M=m.verts[L],E=u+M[0],O=p+M[1],W=_+M[2];s.push(E,O,W);const H=F0(r,u,p,_,m,L),j=R*H;o.push((D[0]+Qn(E,O,W,0)*C)*j,(D[1]+Qn(E,O,W,1)*C)*j,(D[2]+Qn(E,O,W,2)*C)*j)}a.push(S,S+1,S+2,S,S+2,S+3)}}return s.length===0?null:{positions:new Float32Array(s),colors:new Float32Array(o),indices:a,vertexCount:s.length/3}}function Z0(i,e,t,n,r){const s=j0(i,e,t,n,r);if(!s)return null;const o=new Ti;o.setAttribute("position",new ai(s.positions,3)),o.setAttribute("color",new ai(s.colors,3)),o.setIndex(s.indices),o.computeVertexNormals();const a=new js({vertexColors:!0});return new Sn(o,a)}class Q0{constructor(e,t){this.scene=e,this.world=t,this.meshes=new Map,this.dirty=new Set,this._attempted=new Set}invalidateChunks(e){for(const t of e){if(this.meshes.has(t)){const n=this.meshes.get(t);this.scene.remove(n),n.geometry.dispose(),this.meshes.delete(t)}this._attempted.delete(t)}}markDirty(e,t,n){const r=Math.floor(e/qe),s=Math.floor(t/qe),o=Math.floor(n/qe),a=`${r},${s},${o}`;this.dirty.add(a),this._attempted.delete(a);const c=(e%qe+qe)%qe,d=(t%qe+qe)%qe,h=(n%qe+qe)%qe;c===0&&(this.dirty.add(`${r-1},${s},${o}`),this._attempted.delete(`${r-1},${s},${o}`)),c===qe-1&&(this.dirty.add(`${r+1},${s},${o}`),this._attempted.delete(`${r+1},${s},${o}`)),d===0&&(this.dirty.add(`${r},${s-1},${o}`),this._attempted.delete(`${r},${s-1},${o}`)),d===qe-1&&(this.dirty.add(`${r},${s+1},${o}`),this._attempted.delete(`${r},${s+1},${o}`)),h===0&&(this.dirty.add(`${r},${s},${o-1}`),this._attempted.delete(`${r},${s},${o-1}`)),h===qe-1&&(this.dirty.add(`${r},${s},${o+1}`),this._attempted.delete(`${r},${s},${o+1}`))}update(e,t,n=4){const r=Math.floor(e/qe),s=Math.floor(t/qe),o=new Set;for(const a of this.dirty)if(this.meshes.has(a)){const c=this.meshes.get(a);this.scene.remove(c),c.geometry.dispose(),this.meshes.delete(a)}this.dirty.clear();for(let a=-n;a<=n;a++)for(let c=-n;c<=n;c++){const d=r+a,h=s+c;for(let f=0;f<5;f++){const u=`${d},${f},${h}`,p=this.world.chunks.get(u);if(p&&(o.add(u),!this.meshes.has(u)&&!this._attempted.has(u))){this._attempted.add(u);const _=Z0(p,d,f,h,this.world);_&&(this.scene.add(_),this.meshes.set(u,_))}}}for(const[a,c]of this.meshes)o.has(a)||(this.scene.remove(c),c.geometry.dispose(),this.meshes.delete(a),this._attempted.delete(a))}}class J0{constructor(e){this.keys={},this._justPressed={},this.mouseDx=0,this.mouseDy=0,this.locked=!1,this.leftClick=!1,this.rightClick=!1,this.scrollDelta=0,this.menuOpen=!1,this.onPointerUnlock=null,document.addEventListener("keydown",t=>{t.code==="Tab"&&t.preventDefault(),this.keys[t.code]||(this._justPressed[t.code]=!0),this.keys[t.code]=!0}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),e.addEventListener("click",()=>{this.locked||e.requestPointerLock()}),document.addEventListener("mousedown",t=>{this.locked&&(t.button===0&&(this.leftClick=!0,this.keys.mouseLeft=!0),t.button===2&&(this.rightClick=!0))}),document.addEventListener("mouseup",t=>{t.button===0&&(this.keys.mouseLeft=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{const t=this.locked;this.locked=document.pointerLockElement===e,t&&!this.locked&&this.onPointerUnlock&&this.onPointerUnlock()}),document.addEventListener("mousemove",t=>{this.locked&&(this.mouseDx+=t.movementX,this.mouseDy+=t.movementY)}),document.addEventListener("wheel",t=>{this.locked&&(this.scrollDelta+=Math.sign(t.deltaY))})}getMovementInput(){return{forward:!!this.keys.KeyW,back:!!this.keys.KeyS,left:!!this.keys.KeyA,right:!!this.keys.KeyD}}getJump(){return!!this.keys.Space}consumeMouse(){const e=this.mouseDx,t=this.mouseDy;return this.mouseDx=0,this.mouseDy=0,{dx:e,dy:t}}consumeLeftClick(){const e=this.leftClick;return this.leftClick=!1,e}consumeRightClick(){const e=this.rightClick;return this.rightClick=!1,e}consumeKeyPress(e){const t=!!this._justPressed[e];return this._justPressed[e]=!1,t}consumeScroll(){const e=this.scrollDelta;return this.scrollDelta=0,e}}const _n=Object.freeze({RAW:"raw",COOKED:"cooked",MEAL:"meal",PRESERVED:"preserved",RESTORATIVE:"restorative"}),Ni=Object.freeze({STAMINA_REGEN:"stamina_regen",COLD_RESISTANCE:"cold_resistance",FOCUS_REGEN:"focus_regen",CORRUPTION_RESISTANCE:"corruption_resistance",HEALTH_REGEN:"health_regen"});class gn{constructor({id:e,name:t,category:n,hungerRestore:r,effects:s=[]}){this.id=e,this.name=t,this.category=n,this.hungerRestore=r,this.effects=s}}const Ed={raw_berries:new gn({id:"raw_berries",name:"Raw Berries",category:_n.RAW,hungerRestore:8}),raw_meat:new gn({id:"raw_meat",name:"Raw Meat",category:_n.RAW,hungerRestore:5}),raw_mushroom:new gn({id:"raw_mushroom",name:"Raw Mushroom",category:_n.RAW,hungerRestore:6}),cooked_meat:new gn({id:"cooked_meat",name:"Cooked Meat",category:_n.COOKED,hungerRestore:25,effects:[{type:Ni.STAMINA_REGEN,duration:60,strength:2}]}),cooked_fish:new gn({id:"cooked_fish",name:"Cooked Fish",category:_n.COOKED,hungerRestore:20,effects:[{type:Ni.HEALTH_REGEN,duration:30,strength:1}]}),hearth_stew:new gn({id:"hearth_stew",name:"Hearth Stew",category:_n.MEAL,hungerRestore:40,effects:[{type:Ni.STAMINA_REGEN,duration:120,strength:3},{type:Ni.COLD_RESISTANCE,duration:120,strength:1}]}),lembas:new gn({id:"lembas",name:"Lembas Bread",category:_n.PRESERVED,hungerRestore:50}),athelas_tea:new gn({id:"athelas_tea",name:"Athelas Tea",category:_n.RESTORATIVE,hungerRestore:10,effects:[{type:Ni.HEALTH_REGEN,duration:60,strength:3},{type:Ni.CORRUPTION_RESISTANCE,duration:60,strength:2}]}),trail_rations:new gn({id:"trail_rations",name:"Trail Rations",category:_n.PRESERVED,hungerRestore:20}),herb_salad:new gn({id:"herb_salad",name:"Herb Salad",category:_n.MEAL,hungerRestore:30,effects:[{type:Ni.FOCUS_REGEN,duration:90,strength:2}]}),bread:new gn({id:"bread",name:"Bread",category:_n.COOKED,hungerRestore:20}),berries:new gn({id:"berries",name:"Berries",category:_n.RAW,hungerRestore:8}),mushroom:new gn({id:"mushroom",name:"Mushroom",category:_n.RAW,hungerRestore:6})};function eg(i){return Ed[i]}function tg(i,e,t,n,r,s){const o=Na[s];return o===void 0||rn(i.getBlock(t,n,r))||!e.remove(s,1)?!1:(i.setBlock(t,n,r,o),!0)}function ml(i,e,t,n){let r=Math.floor(e.x),s=Math.floor(e.y),o=Math.floor(e.z);const a=t.x>=0?1:-1,c=t.y>=0?1:-1,d=t.z>=0?1:-1,h=t.x!==0?Math.abs(1/t.x):1/0,f=t.y!==0?Math.abs(1/t.y):1/0,u=t.z!==0?Math.abs(1/t.z):1/0;let p=t.x!==0?(t.x>0?r+1-e.x:e.x-r)*h:1/0,_=t.y!==0?(t.y>0?s+1-e.y:e.y-s)*f:1/0,x=t.z!==0?(t.z>0?o+1-e.z:e.z-o)*u:1/0,m=0,l={x:0,y:0,z:0};for(;m<n;){if(g0(i.getBlock(r,s,o)))return{blockPos:{x:r,y:s,z:o},normal:l,t:m};p<_&&p<x?(m=p,r+=a,p+=h,l={x:-a,y:0,z:0}):_<x?(m=_,s+=c,_+=f,l={x:0,y:-c,z:0}):(m=x,o+=d,x+=u,l={x:0,y:0,z:-d})}return null}function En(i,e){const t=i.x-e.x,n=i.y-e.y,r=i.z-e.z;return Math.sqrt(t*t+n*n+r*r)}function ws(i,e){return i.x*e.x+i.y*e.y+i.z*e.z}function gi(i){const e=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z);return e===0?{x:0,y:0,z:0}:{x:i.x/e,y:i.y/e,z:i.z/e}}const ae=Object.freeze({WOLF:"wolf",GOBLIN:"goblin",SPIDER:"spider",TROLL:"troll",WIGHT:"wight",GUARDIAN:"guardian",CONSTRUCT:"construct",ORC:"orc",GIANT_SPIDER:"giant_spider",SHADOW:"shadow",BARROW_WIGHT:"barrow_wight",GOBLIN_ARCHER:"goblin_archer",CORRUPTED_BEAR:"corrupted_bear",DARK_CONSTRUCT:"dark_construct",WRAITH:"wraith"}),ki=Object.freeze({IDLE:"idle",CHASE:"chase",ATTACK:"attack",DEAD:"dead"}),ng={[ae.WOLF]:{health:30,speed:4,aggroRange:12,damage:8,attackRange:1.5},[ae.GOBLIN]:{health:25,speed:3,aggroRange:10,damage:6,attackRange:1.5},[ae.SPIDER]:{health:20,speed:5,aggroRange:8,damage:10,attackRange:1.2},[ae.TROLL]:{health:100,speed:2,aggroRange:15,damage:25,attackRange:2.5},[ae.WIGHT]:{health:50,speed:3.5,aggroRange:14,damage:15,attackRange:1.5},[ae.GUARDIAN]:{health:150,speed:1.5,aggroRange:18,damage:30,attackRange:2},[ae.CONSTRUCT]:{health:80,speed:2.5,aggroRange:12,damage:20,attackRange:2},[ae.ORC]:{health:50,speed:3,aggroRange:12,damage:12,attackRange:1.5},[ae.GIANT_SPIDER]:{health:45,speed:4.5,aggroRange:10,damage:15,attackRange:1.5},[ae.SHADOW]:{health:20,speed:6,aggroRange:16,damage:18,attackRange:1.2},[ae.BARROW_WIGHT]:{health:80,speed:3,aggroRange:16,damage:22,attackRange:1.8},[ae.GOBLIN_ARCHER]:{health:20,speed:2.5,aggroRange:18,damage:8,attackRange:8},[ae.CORRUPTED_BEAR]:{health:120,speed:3,aggroRange:14,damage:20,attackRange:2},[ae.DARK_CONSTRUCT]:{health:130,speed:2,aggroRange:14,damage:28,attackRange:2.2},[ae.WRAITH]:{health:70,speed:4,aggroRange:20,damage:30,attackRange:1.8}},ig={[ae.WOLF]:[{type:"leather",count:1},{type:"raw_meat",count:1}],[ae.GOBLIN]:[{type:"stick",count:2},{type:"iron_ore",count:1}],[ae.SPIDER]:[{type:"fiber",count:2},{type:"rope",count:1}],[ae.TROLL]:[{type:"stone",count:3},{type:"leather",count:2}],[ae.WIGHT]:[{type:"relic_shard",count:1},{type:"lore_fragment",count:1}],[ae.GUARDIAN]:[{type:"relic_shard",count:2},{type:"iron_ore",count:3}],[ae.CONSTRUCT]:[{type:"iron_ore",count:2},{type:"copper_ore",count:2}],[ae.ORC]:[{type:"iron_ore",count:1},{type:"leather",count:1}],[ae.GIANT_SPIDER]:[{type:"fiber",count:3},{type:"rope",count:2}],[ae.SHADOW]:[{type:"relic_shard",count:1}],[ae.BARROW_WIGHT]:[{type:"relic_shard",count:2},{type:"lore_fragment",count:2}],[ae.GOBLIN_ARCHER]:[{type:"stick",count:3},{type:"fiber",count:1}],[ae.CORRUPTED_BEAR]:[{type:"leather",count:3},{type:"raw_meat",count:2}],[ae.DARK_CONSTRUCT]:[{type:"iron_ore",count:3},{type:"relic_shard",count:1}],[ae.WRAITH]:[{type:"relic_shard",count:3},{type:"lore_fragment",count:2}]};function rg(i){return ig[i]||[]}class sg{constructor(e,t){const n=ng[t];this.position={...e},this.type=t,this.health=n.health,this.maxHealth=n.health,this.speed=n.speed,this.aggroRange=n.aggroRange,this.damage=n.damage,this.attackRange=n.attackRange,this.state=ki.IDLE,this.attackCooldown=0}updateAI(e,t,n,r){if(this.isDead()){this.state=ki.DEAD;return}const s=En(this.position,e);if(s>this.aggroRange*1.5?this.state=ki.IDLE:s<=this.aggroRange&&(this.state=ki.CHASE),this.state===ki.CHASE){const o=e.x-this.position.x,a=e.z-this.position.z,c=Math.sqrt(o*o+a*a);if(c>.1){const d=o/c*this.speed*t,h=a/c*this.speed*t;if(r){const f=this.position.x+d;this._collidesWithBlock(f,this.position.z,r)||(this.position.x=f);const u=this.position.z+h;this._collidesWithBlock(this.position.x,u,r)||(this.position.z=u)}else this.position.x+=d,this.position.z+=h}}n&&(this.position.y=n(Math.floor(this.position.x),Math.floor(this.position.z))+1),this.attackCooldown=Math.max(0,this.attackCooldown-t)}_collidesWithBlock(e,t,n){const r=Math.floor(e),s=Math.floor(this.position.y),o=Math.floor(t);return rn(n.getBlock(r,s,o))||rn(n.getBlock(r,s+1,o))}canAttack(e){return this.state===ki.CHASE&&En(this.position,e)<=this.attackRange&&this.attackCooldown<=0}performAttack(){return this.attackCooldown=1,this.damage}takeDamage(e){this.health=Math.max(0,this.health-e),this.health<=0&&(this.state=ki.DEAD)}isDead(){return this.health<=0}}const Gn=Object.freeze({dawn:240,day:2400,dusk:240,night:2400}),xr=Gn.dawn+Gn.day+Gn.dusk+Gn.night,Et=Object.freeze({DAWN:"dawn",DAY:"day",DUSK:"dusk",NIGHT:"night"}),og=Gn.dawn/xr,ag=(Gn.dawn+Gn.day)/xr,cg=(Gn.dawn+Gn.day+Gn.dusk)/xr;class lg{constructor(){this.time=0,this.day=1}tick(e){for(this.time+=e;this.time>=xr;)this.time-=xr,this.day++}getNormalizedTime(){return this.time/xr}getPhase(){const e=this.getNormalizedTime();return e<og?Et.DAWN:e<ag?Et.DAY:e<cg?Et.DUSK:Et.NIGHT}}const Sd=Object.freeze({man:{id:"man",name:"Man",classIds:["ranger","soldier","scholar"],statModifiers:{health:100,stamina:110,focus:50,corruptionResistance:50,perception:50,craft:50}},elf:{id:"elf",name:"Elf",classIds:["archer","warden","gatherer"],statModifiers:{health:90,stamina:100,focus:80,corruptionResistance:50,perception:70,craft:50}},dwarf:{id:"dwarf",name:"Dwarf",classIds:["miner","blacksmith","delver"],statModifiers:{health:120,stamina:100,focus:35,corruptionResistance:70,perception:40,craft:80}},hobbit:{id:"hobbit",name:"Hobbit",classIds:["burglar","cook","forager"],statModifiers:{health:80,stamina:100,focus:55,corruptionResistance:75,perception:60,craft:55}}});function dg(i){return Sd[i]||null}const nc=Object.freeze({ranger:{id:"ranger",name:"Ranger",raceId:"man",starterItems:[{type:"short_bow",count:1},{type:"knife",count:1},{type:"raw_meat",count:2}],passive:"Tracking: see beast footprints",activeAbility:"Focused Shot"},soldier:{id:"soldier",name:"Soldier",raceId:"man",starterItems:[{type:"spear",count:1},{type:"shield",count:1},{type:"raw_meat",count:2}],passive:"Improved block stability",activeAbility:"Shield Bash"},scholar:{id:"scholar",name:"Scholar",raceId:"man",starterItems:[{type:"knife",count:1},{type:"lantern",count:1},{type:"raw_meat",count:2}],passive:"Identify ruins and relics faster",activeAbility:"Sense Ward"},archer:{id:"archer",name:"Archer",raceId:"elf",starterItems:[{type:"refined_bow",count:1},{type:"knife",count:1},{type:"stick",count:10}],passive:"Reduced bow sway",activeAbility:"Keen Eye"},warden:{id:"warden",name:"Warden",raceId:"elf",starterItems:[{type:"spear",count:1},{type:"ward_token",count:1},{type:"raw_meat",count:2}],passive:"Stronger resistance near allied beacons",activeAbility:"Light Ward"},gatherer:{id:"gatherer",name:"Gatherer",raceId:"elf",starterItems:[{type:"knife",count:1},{type:"fiber",count:5},{type:"raw_meat",count:3}],passive:"Better yield from plants and herbs",activeAbility:"Nature Sense"},miner:{id:"miner",name:"Miner",raceId:"dwarf",starterItems:[{type:"pickaxe",count:1},{type:"stick",count:5},{type:"stone",count:5}],passive:"Faster ore and stone extraction",activeAbility:"Delver's Strike"},blacksmith:{id:"blacksmith",name:"Blacksmith",raceId:"dwarf",starterItems:[{type:"hammer",count:1},{type:"stone",count:10},{type:"raw_meat",count:2}],passive:"Gear wears slower",activeAbility:"Field Repair"},delver:{id:"delver",name:"Delver",raceId:"dwarf",starterItems:[{type:"axe",count:1},{type:"lantern",count:1},{type:"raw_meat",count:2}],passive:"Reduced underground detection and fall damage",activeAbility:"Stone Sense"},burglar:{id:"burglar",name:"Burglar",raceId:"hobbit",starterItems:[{type:"knife",count:1},{type:"sling",count:1},{type:"cooked_meat",count:3}],passive:"Reduced enemy detection while crouched",activeAbility:"Slip Away"},cook:{id:"cook",name:"Cook",raceId:"hobbit",starterItems:[{type:"knife",count:1},{type:"fiber",count:5},{type:"cooked_meat",count:5}],passive:"Meals give longer buffs",activeAbility:"Hearth Meal"},forager:{id:"forager",name:"Forager",raceId:"hobbit",starterItems:[{type:"stick",count:3},{type:"knife",count:1},{type:"cooked_meat",count:3}],passive:"Improved berry, mushroom, and root yields",activeAbility:"Wild Sense"}});function hg(i){return nc[i]||null}class Md{constructor(e){this.size=e,this._slots=new Array(e).fill(null)}getSlot(e){return this._slots[e]||null}_findSlot(e){for(let t=0;t<this.size;t++)if(this._slots[t]&&this._slots[t].type===e)return t;return-1}_findEmpty(){for(let e=0;e<this.size;e++)if(!this._slots[e])return e;return-1}addItem(e,t){const n=this._findSlot(e);if(n>=0)return this._slots[n].count+=t,!0;const r=this._findEmpty();return r<0?!1:(this._slots[r]={type:e,count:t},!0)}removeItem(e,t){const n=this._findSlot(e);return n<0||this._slots[n].count<t?!1:(this._slots[n].count-=t,this._slots[n].count<=0&&(this._slots[n]=null),!0)}moveSlot(e,t){const n=this._slots[t];this._slots[t]=this._slots[e],this._slots[e]=n}count(e){let t=0;for(const n of this._slots)n&&n.type===e&&(t+=n.count);return t}getItems(){return this._slots.filter(e=>e!==null).map(e=>({...e}))}add(e,t){return this.addItem(e,t)}remove(e,t){return this.removeItem(e,t)}}const ug=.1,fg=.5,pg=5,mg=10,_g=.3,gg=1,vg=.5,xg=.5,yg=.3,Eg=.6,Sg=-15,Mg=60,Tg={[pt.SHIRE]:0,[pt.FOREST]:-.2,[pt.MOUNTAIN]:-1,[pt.MIRKWOOD]:-.3,[pt.PLAINS]:.1};class Td{constructor(){this.health=100,this.maxHealth=100,this.stamina=100,this.maxStamina=100,this.hunger=100,this.maxHunger=100,this.focus=50,this.maxFocus=100,this.temperature=0,this.coldResistance=0,this.corruption=0,this._inCorruptedZone=!1,this._injuries=[]}setBiomeTemperature(e){this.temperature=Tg[e]??0}setCorruptionZone(e){this._inCorruptedZone=e}applyInjury(e,t,n){this._injuries=this._injuries.filter(r=>r.type!==e),this._injuries.push({type:e,remaining:t,strength:n})}hasInjury(e){return this._injuries.some(t=>t.type===e)}getFractureSpeedMultiplier(){return this.hasInjury("fracture")?Eg:1}checkFallFracture(e){e<=Sg&&this.applyInjury("fracture",Mg,1)}tick(e){if(this.hunger=Math.max(0,this.hunger-ug*e),this.hunger<=0&&(this.health=Math.max(0,this.health-fg*e)),this.temperature<0){const t=Math.min(0,this.temperature+this.coldResistance);t<0&&(this.health=Math.max(0,this.health-_g*Math.abs(t)*e))}this._inCorruptedZone&&(this.corruption=Math.min(100,this.corruption+gg*e)),this.corruption>50&&(this.focus=Math.max(0,this.focus-vg*(this.corruption/100)*e));for(const t of this._injuries)t.remaining-=e,t.type==="bleeding"?this.health=Math.max(0,this.health-xg*t.strength*e):t.type==="poison"&&(this.health=Math.max(0,this.health-yg*t.strength*e));this._injuries=this._injuries.filter(t=>t.remaining>0),this.stamina=Math.min(this.maxStamina,this.stamina+pg*e)}applySprint(e){this.stamina=Math.max(0,this.stamina-mg*e)}eat(e){this.hunger=Math.min(this.maxHunger,this.hunger+e)}takeDamage(e){this.health=Math.max(0,this.health-e)}isDead(){return this.health<=0}}const bg=5,Ag=.5;class bd{constructor({x:e,y:t,z:n},{moveSpeed:r=bg}={}){this.position={x:e,y:t,z:n},this.velocity={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.moveSpeed=r,this.onGround=!1,this.crouching=!1,this.cameraMode="first_person"}toggleCamera(){this.cameraMode=this.cameraMode==="first_person"?"third_person_behind":"first_person"}setCrouch(e){this.crouching=e}applyMovementInput(e,t){let n=0,r=0;if(e.forward&&(r-=1),e.back&&(r+=1),e.left&&(n-=1),e.right&&(n+=1),n===0&&r===0)return;const s=Math.sqrt(n*n+r*r);n/=s,r/=s;const o=Math.cos(this.yaw),a=Math.sin(this.yaw),c=n*o-r*a,d=n*a+r*o,h=this.crouching?this.moveSpeed*Ag:this.moveSpeed;this.position.x+=c*h*t,this.position.z+=d*h*t}}const ko=Object.freeze({STORY:"story",STANDARD:"standard",HARSH:"harsh"}),Rg={[ko.STORY]:1.25,[ko.STANDARD]:1,[ko.HARSH]:.8};function wg({raceId:i,classId:e,difficulty:t,worldName:n,characterName:r}){return{raceId:i,classId:e,difficulty:t,worldName:n||"",characterName:r||""}}function Cg(i){const e=dg(i.raceId),t=hg(i.classId),n=new Md(36);for(const a of t.starterItems)n.add(a.type,a.count);const r=Rg[i.difficulty]||1,s=new Td;return s.maxHealth=Math.round(e.statModifiers.health*r),s.health=s.maxHealth,s.maxStamina=e.statModifiers.stamina,s.stamina=s.maxStamina,s.focus=e.statModifiers.focus,s.maxFocus=e.statModifiers.focus,{player:new bd({x:.5,y:w0+2,z:.5}),inventory:n,survivalStats:s,race:e,cls:t}}const Uo=3,Fo=.7,Ig=.5,_l=1.2;class Og{constructor(){this.attackCooldown=0,this._guarding=!1}setGuard(e){this._guarding=e}playerAttack(e,t,n,r){const s=gi(t);let o=!1;for(const a of n){if(a.isDead()||En(e,a.position)>Uo)continue;const d=gi({x:a.position.x-e.x,y:a.position.y-e.y,z:a.position.z-e.z});if(ws(s,d)>=Fo){a.takeDamage(r),o=!0;break}}return o&&(this.attackCooldown=Ig),o}heavyAttack(e,t,n,r){const s=gi(t);let o=!1;for(const a of n){if(a.isDead()||En(e,a.position)>Uo)continue;const d=gi({x:a.position.x-e.x,y:a.position.y-e.y,z:a.position.z-e.z});if(ws(s,d)>=Fo){a.takeDamage(r*2),o=!0;break}}return o&&(this.attackCooldown=_l),o}playerAttackWithWeapon(e,t,n,r,s){const o=r*(s.damageModifier||1);return this.playerAttack(e,t,n,o)}heavyAttackWithWeapon(e,t,n,r,s){const o=gi(t);let a=!1;const c=r*2*(s.damageModifier||1);for(const d of n){if(d.isDead()||En(e,d.position)>Uo)continue;const f=gi({x:d.position.x-e.x,y:d.position.y-e.y,z:d.position.z-e.z});if(ws(o,f)>=Fo){d.takeDamage(c),a=!0;break}}return a&&(this.attackCooldown=_l),a}parry(e,t,n){return En(t,e.position)>e.attackRange?!1:(e.takeDamage(e.damage),!0)}rangedAttack(e,t,n,r,s){const o=gi(t),a=.95;for(const c of n){if(c.isDead()||En(e,c.position)>s)continue;const h=gi({x:c.position.x-e.x,y:c.position.y-e.y,z:c.position.z-e.z});if(ws(o,h)>=a)return c.takeDamage(r),!0}return!1}processEnemyAttacks(e,t,n){for(const r of e)if(!r.isDead()&&r.canAttack(t)){let s=r.performAttack();this._guarding&&(s*=.5),n.takeDamage(s)}}}const gl=8,vl=15,Dg=35,xl=[ae.WOLF,ae.GOBLIN,ae.SPIDER,ae.TROLL,ae.WIGHT,ae.ORC,ae.GIANT_SPIDER,ae.SHADOW,ae.BARROW_WIGHT,ae.GOBLIN_ARCHER,ae.CORRUPTED_BEAR,ae.DARK_CONSTRUCT,ae.WRAITH];class Lg{constructor(e){this.rng=e}trySpawn({phase:e,playerPos:t,existingCount:n,surfaceY:r,getHeight:s}){if(e!==Et.NIGHT&&e!==Et.DUSK)return[];if(n>=gl)return[];const o=Math.floor(this.rng()*3)+1,a=[];for(let c=0;c<o&&n+a.length<gl;c++){const d=this.rng()*Math.PI*2,h=vl+this.rng()*(Dg-vl),f=t.x+Math.cos(d)*h,u=t.z+Math.sin(d)*h,p=Math.floor(this.rng()*xl.length),_=xl[p],x=s?s(f,u)+1:r;a.push(new sg({x:f,y:x,z:u},_))}return a}}const Pg={[ae.WOLF]:6974058,[ae.GOBLIN]:4880954,[ae.SPIDER]:2759178,[ae.TROLL]:8022618,[ae.WIGHT]:6702250,[ae.GUARDIAN]:12290116,[ae.CONSTRUCT]:5592490,[ae.ORC]:5925434,[ae.GIANT_SPIDER]:1706496,[ae.SHADOW]:657946,[ae.BARROW_WIGHT]:5583786,[ae.GOBLIN_ARCHER]:3824170,[ae.CORRUPTED_BEAR]:9065762,[ae.DARK_CONSTRUCT]:2763349,[ae.WRAITH]:1704004};ae.WOLF+"",ae.GOBLIN+"",ae.SPIDER+"",ae.TROLL+"",ae.WIGHT+"",ae.GUARDIAN+"",ae.CONSTRUCT+"",ae.ORC+"",ae.GIANT_SPIDER+"",ae.SHADOW+"",ae.BARROW_WIGHT+"",ae.GOBLIN_ARCHER+"",ae.CORRUPTED_BEAR+"",ae.DARK_CONSTRUCT+"",ae.WRAITH+"";ae.WOLF,ae.SPIDER,ae.GIANT_SPIDER,ae.CORRUPTED_BEAR;function ne(i,e){const t=Math.min(255,(i>>16&255)*e)|0,n=Math.min(255,(i>>8&255)*e)|0,r=Math.min(255,(i&255)*e)|0;return t<<16|n<<8|r}function B(i,e,t,n,r,s,o,a){const c={name:i,w:e,h:t,d:n,offsetY:r,color:s};return o&&(c.offsetX=o),a&&(c.offsetZ=a),c}function Ng(i){return[B("body",.4,.32,.7,.48,i),B("chest",.44,.28,.2,.5,ne(i,1.05),0,-.22),B("head",.3,.26,.28,.58,ne(i,1.08),0,-.48),B("snout",.16,.12,.2,.5,ne(i,.88),0,-.68),B("nose",.06,.06,.04,.52,1052174,0,-.78),B("ear",.07,.14,.06,.74,ne(i,.8),-.1,-.42),B("ear",.07,.14,.06,.74,ne(i,.8),.1,-.42),B("tail",.08,.1,.3,.6,ne(i,.9),0,.48),B("tail_tip",.06,.08,.14,.68,ne(i,.85),0,.62),B("leg",.09,.32,.09,.16,ne(i,.82),-.14,-.22),B("leg",.09,.32,.09,.16,ne(i,.82),.14,-.22),B("leg",.1,.32,.1,.16,ne(i,.82),-.14,.22),B("leg",.1,.32,.1,.16,ne(i,.82),.14,.22),B("paw",.11,.06,.12,.03,ne(i,.7),-.14,-.22),B("paw",.11,.06,.12,.03,ne(i,.7),.14,-.22),B("paw",.11,.06,.12,.03,ne(i,.7),-.14,.22),B("paw",.11,.06,.12,.03,ne(i,.7),.14,.22)]}function yl(i,e){const t=[B("cephalothorax",.4*e,.22*e,.32*e,.3*e,ne(i,1.1),0,-.12*e),B("abdomen",.5*e,.3*e,.48*e,.35*e,i,0,.28*e),B("stripe",.12*e,.12*e,.4*e,.42*e,ne(i,.6),0,.28*e),B("eye",.05*e,.04*e,.04*e,.38*e,10029064,-.06*e,-.28*e),B("eye",.05*e,.04*e,.04*e,.38*e,10029064,.06*e,-.28*e),B("fang",.05*e,.1*e,.12*e,.22*e,ne(i,.7),-.08*e,-.32*e),B("fang",.05*e,.1*e,.12*e,.22*e,ne(i,.7),.08*e,-.32*e)],n=[-.2,-.06,.08,.22],r=[.32,.38,.38,.32],s=[.28,.3,.3,.26];for(let o=0;o<4;o++)for(const a of[-1,1])t.push(B("leg",.04*e,s[o]*e,.04*e,s[o]*.5*e,ne(i,.75),a*r[o]*e,n[o]*e)),t.push(B("foot",.06*e,.04*e,.06*e,.02*e,ne(i,.6),a*(r[o]+.02)*e,n[o]*e));return t}function kg(i){return[B("body",.9,.58,1.2,.72,i),B("hump",.65,.2,.45,1.08,ne(i,1.06),0,-.15),B("head",.45,.38,.42,.92,ne(i,1.08),0,-.7),B("snout",.22,.16,.22,.82,ne(i,.9),0,-.98),B("nose",.08,.06,.04,.85,919560,0,-1.08),B("ear",.1,.1,.08,1.14,ne(i,.85),-.16,-.64),B("ear",.1,.1,.08,1.14,ne(i,.85),.16,-.64),B("leg",.18,.44,.18,.22,ne(i,.82),-.28,-.35),B("leg",.18,.44,.18,.22,ne(i,.82),.28,-.35),B("leg",.2,.44,.2,.22,ne(i,.82),-.3,.35),B("leg",.2,.44,.2,.22,ne(i,.82),.3,.35),B("claw",.2,.06,.1,.03,ne(i,.6),-.28,-.48),B("claw",.2,.06,.1,.03,ne(i,.6),.28,-.48),B("tail",.1,.1,.12,.88,ne(i,.9),0,.62)]}function Bo(i,e){const t=[B("leg",.14,.28,.14,.14,ne(i,.75),-.1),B("leg",.14,.28,.14,.14,ne(i,.75),.1),B("foot",.18,.06,.2,.03,ne(i,.6),-.1,-.04),B("foot",.18,.06,.2,.03,ne(i,.6),.1,-.04),B("body",.42,.42,.3,.48,i,0,.02),B("loincloth",.3,.08,.2,.3,5916720,0,-.02),B("head",.32,.28,.28,.82,ne(i,1.1),0,-.02),B("ear",.14,.08,.06,.86,ne(i,.85),-.22),B("ear",.14,.08,.06,.86,ne(i,.85),.22),B("eye",.05,.04,.04,.86,10062874,-.08,-.14),B("eye",.05,.04,.04,.86,10062874,.08,-.14),B("nose",.06,.08,.08,.78,ne(i,.9),0,-.16),B("arm",.1,.42,.1,.48,ne(i,.88),-.28),B("arm",.1,.42,.1,.48,ne(i,.88),.28)];return e?(t.push(B("bow",.04,.45,.04,.5,6702880,-.35)),t.push(B("quiver",.1,.3,.06,.65,5848862,.08,.16))):t.push(B("sword",.04,.35,.04,.48,6709328,.32)),t}function Ug(i){return[B("boot",.24,.12,.3,.06,3354142,-.14,.02),B("boot",.24,.12,.3,.06,3354142,.14,.02),B("leg",.2,.38,.2,.3,ne(i,.75),-.14),B("leg",.2,.38,.2,.3,ne(i,.75),.14),B("body",.55,.58,.38,.72,i),B("armor",.4,.3,.06,.78,4998712,0,-.16),B("pauldron",.18,.14,.22,1.02,4998712,-.34),B("pauldron",.18,.14,.22,1.02,4998712,.34),B("spike",.06,.1,.06,1.14,5919296,-.34),B("spike",.06,.1,.06,1.14,5919296,.34),B("head",.35,.3,.32,1.18,ne(i,1.05)),B("jaw",.28,.1,.12,1,ne(i,.9),0,-.14),B("tusk",.04,.08,.04,1.02,14340786,-.1,-.18),B("tusk",.04,.08,.04,1.02,14340786,.1,-.18),B("arm",.16,.52,.16,.7,ne(i,.88),-.38),B("arm",.16,.52,.16,.7,ne(i,.88),.38),B("axe_handle",.04,.65,.04,.65,5917748,.5),B("axe_head",.18,.14,.04,1.02,7368812,.5,-.06)]}function Fg(i){return[B("foot",.36,.14,.42,.07,ne(i,.7),-.22,.04),B("foot",.36,.14,.42,.07,ne(i,.7),.22,.04),B("leg",.28,.58,.32,.42,ne(i,.82),-.22),B("leg",.28,.58,.32,.42,ne(i,.82),.22),B("body",.9,1.05,.72,1.2,i),B("belly",.7,.5,.2,1,ne(i,1.05),0,-.2),B("shoulders",1.1,.22,.78,1.82,ne(i,.92),0,.04),B("head",.42,.32,.38,2.08,ne(i,1.1),0,-.04),B("brow",.38,.06,.08,2.18,ne(i,.85),0,-.18),B("jaw",.34,.1,.14,1.88,ne(i,.9),0,-.14),B("arm",.22,1.1,.22,1.1,ne(i,.88),-.62),B("arm",.22,1.1,.22,1.1,ne(i,.88),.62),B("fist",.28,.24,.22,.42,ne(i,.78),-.62),B("fist",.28,.24,.22,.42,ne(i,.78),.62),B("club",.12,.85,.12,.8,5916720,.72),B("club_head",.2,.25,.2,1.3,4996648,.72)]}function Ba(i,e){return[B("skirt",.5*e,.56*e,.4*e,.28*e,ne(i,.75)),B("hem",.56*e,.1*e,.44*e,.05*e,ne(i,.65)),B("body",.42*e,.65*e,.32*e,.75*e,ne(i,.85)),B("cloak",.48*e,.9*e,.06*e,.6*e,ne(i,.7),0,.08*e),B("hood",.38*e,.32*e,.34*e,1.25*e,ne(i,.72),0,.02*e),B("face",.2*e,.15*e,.06*e,1.2*e,ne(i,.3),0,-.12*e),B("eye",.04*e,.03*e,.03*e,1.22*e,8427980,-.05*e,-.16*e),B("eye",.04*e,.03*e,.03*e,1.22*e,8427980,.05*e,-.16*e),B("arm",.1*e,.55*e,.1*e,.7*e,ne(i,.9),-.3*e),B("arm",.1*e,.55*e,.1*e,.7*e,ne(i,.9),.3*e),B("hand",.08*e,.1*e,.04*e,.35*e,10918284,-.3*e),B("hand",.08*e,.1*e,.04*e,.35*e,10918284,.3*e)]}function Bg(i){const e=Ba(i,1.15);return e.push(B("crown",.36,.06,.36,1.62,4208688)),e.push(B("crown_spike",.04,.1,.04,1.7,4208688,-.12)),e.push(B("crown_spike",.04,.1,.04,1.7,4208688,.12)),e.push(B("crown_spike",.04,.1,.04,1.7,4208688,0,-.12)),e.push(B("blade",.04,.6,.04,.5,5921388,.38)),e.push(B("guard",.1,.04,.04,.82,5000280,.38)),e}function zg(i){return[B("foot",.4,.16,.46,.08,ne(i,.7),-.25,.02),B("foot",.4,.16,.46,.08,ne(i,.7),.25,.02),B("leg",.32,.7,.32,.5,ne(i,.82),-.25),B("leg",.32,.7,.32,.5,ne(i,.82),.25),B("body",1,1.3,.8,1.35,i),B("emblem",.3,.3,.06,1.5,ne(i,1.2),0,-.38),B("shoulders",1.25,.22,.9,2.1,ne(i,.88)),B("head",.48,.42,.44,2.48,ne(i,1.1)),B("visor",.4,.12,.08,2.42,ne(i,.6),0,-.22),B("crest",.06,.16,.3,2.78,ne(i,1.15)),B("arm",.26,1.1,.26,1.35,ne(i,.88),-.68),B("arm",.26,1.1,.26,1.35,ne(i,.88),.68),B("fist",.3,.26,.24,.68,ne(i,.75),-.68),B("fist",.3,.26,.24,.68,ne(i,.75),.68),B("shield",.06,.7,.5,1.4,ne(i,.8),-.88),B("boss",.06,.15,.15,1.4,ne(i,1.3),-.92)]}function El(i,e){return[B("foot",.28*e,.12*e,.32*e,.06*e,ne(i,.7),-.18*e,.02),B("foot",.28*e,.12*e,.32*e,.06*e,ne(i,.7),.18*e,.02),B("leg",.22*e,.52*e,.24*e,.38*e,ne(i,.82),-.18*e),B("leg",.22*e,.52*e,.24*e,.38*e,ne(i,.82),.18*e),B("body",.7*e,.8*e,.6*e,.95*e,i),B("plate",.5*e,.4*e,.06*e,1.05*e,ne(i,1.15),0,-.28*e),B("core",.12*e,.12*e,.04*e,1*e,8427993,0,-.32*e),B("head",.36*e,.3*e,.32*e,1.52*e,ne(i,1.05)),B("visor",.3*e,.08*e,.06*e,1.48*e,5003392,0,-.15*e),B("arm",.18*e,.7*e,.18*e,.9*e,ne(i,.88),-.44*e),B("arm",.18*e,.7*e,.18*e,.9*e,ne(i,.88),.44*e),B("gauntlet",.22*e,.2*e,.2*e,.45*e,ne(i,.75),-.44*e),B("gauntlet",.22*e,.2*e,.2*e,.45*e,ne(i,.75),.44*e)]}function Hg(i){return[B("base",.4,.4,.35,.2,i),B("mid",.35,.35,.3,.5,ne(i,1.1)),B("upper",.28,.28,.25,.75,ne(i,1.2)),B("head",.22,.2,.22,.98,ne(i,1.3)),B("eye",.04,.03,.03,1,3352652,-.05,-.1),B("eye",.04,.03,.03,1,3352652,.05,-.1),B("wisp",.06,.3,.04,.6,ne(i,.8),-.25),B("wisp",.06,.3,.04,.6,ne(i,.8),.25),B("wisp",.04,.25,.06,.5,ne(i,.8),0,-.2),B("wisp",.04,.2,.06,.5,ne(i,.8),0,.2)]}function Gg(i){const e=Pg[i]||16711680;switch(i){case ae.WOLF:return{parts:Ng(e)};case ae.SPIDER:return{parts:yl(e,1)};case ae.GIANT_SPIDER:return{parts:yl(e,1.4)};case ae.CORRUPTED_BEAR:return{parts:kg(e)};case ae.GOBLIN:return{parts:Bo(e,!1)};case ae.GOBLIN_ARCHER:return{parts:Bo(e,!0)};case ae.ORC:return{parts:Ug(e)};case ae.TROLL:return{parts:Fg(e)};case ae.WIGHT:return{parts:Ba(e,1)};case ae.BARROW_WIGHT:return{parts:Ba(e,1.15)};case ae.WRAITH:return{parts:Bg(e)};case ae.GUARDIAN:return{parts:zg(e)};case ae.CONSTRUCT:return{parts:El(e,1)};case ae.DARK_CONSTRUCT:return{parts:El(e,1.2)};case ae.SHADOW:return{parts:Hg(e)};default:return{parts:Bo(e,!1)}}}function Vg(i){const e=Gg(i),t=new mr;for(const n of e.parts){const r=new bi(n.w,n.h,n.d),s=new js({color:n.color}),o=new Sn(r,s);o.position.y=n.offsetY,n.offsetX&&(o.position.x=n.offsetX),n.offsetZ&&(o.position.z=n.offsetZ),o.userData.partName=n.name,t.add(o)}return t}class Wg{constructor(e){this.scene=e,this.meshMap=new Map}sync(e,t){const n=new Set;for(const r of e){if(n.add(r),r.isDead()){this.meshMap.has(r)&&(this.scene.remove(this.meshMap.get(r)),this.meshMap.delete(r));continue}let s=this.meshMap.get(r);if(s||(s=Vg(r.type),this.scene.add(s),this.meshMap.set(r,s)),s.position.set(r.position.x,r.position.y,r.position.z),t){const o=t.position.x-r.position.x,a=t.position.z-r.position.z;s.rotation.y=Math.atan2(o,a)}}for(const[r,s]of this.meshMap)n.has(r)||(this.scene.remove(s),this.meshMap.delete(r))}}const Xg={road_wardens:{body:9136404,hat:2775594,skin:13213818},rivendell_keepers:{body:13944224,hat:4482747,skin:15259840},dwarven_crafters:{body:8017203,hat:10044450,skin:13213818},woodland_guardians:{body:3828282,hat:2771498,skin:12628112},beorning_wardens:{body:9071162,hat:5917226,skin:13213818}};function Dn(i,e){const t=Math.min(255,(i>>16&255)*e)|0,n=Math.min(255,(i>>8&255)*e)|0,r=Math.min(255,(i&255)*e)|0;return t<<16|n<<8|r}function qg(i={}){const e=i.bodyColor||13215820,t=i.hatColor||3368618,n=i.skinColor||13213818,r=i.factionId||"",s=3813408,o=2234384,c=[{name:"boot",w:.24,h:.14,d:.3,offsetY:.07,offsetX:-.13,offsetZ:.02,color:o},{name:"boot",w:.24,h:.14,d:.3,offsetY:.07,offsetX:.13,offsetZ:.02,color:o},{name:"leg",w:.2,h:.48,d:.2,offsetY:.38,offsetX:-.13,color:s},{name:"leg",w:.2,h:.48,d:.2,offsetY:.38,offsetX:.13,color:s},{name:"belt",w:.54,h:.08,d:.35,offsetY:.59,color:4864544},{name:"body",w:.5,h:.62,d:.32,offsetY:.93,color:e},{name:"shoulders",w:.62,h:.1,d:.36,offsetY:1.28,color:Dn(e,.82)},{name:"arm",w:.16,h:.58,d:.16,offsetY:.92,offsetX:-.36,color:Dn(e,.93)},{name:"arm",w:.16,h:.58,d:.16,offsetY:.92,offsetX:.36,color:Dn(e,.93)},{name:"hand",w:.12,h:.12,d:.12,offsetY:.53,offsetX:-.36,color:Dn(n,.92)},{name:"hand",w:.12,h:.12,d:.12,offsetY:.53,offsetX:.36,color:Dn(n,.92)},{name:"neck",w:.16,h:.08,d:.16,offsetY:1.37,color:Dn(n,.9)},{name:"head",w:.4,h:.4,d:.4,offsetY:1.61,color:n},{name:"nose",w:.08,h:.08,d:.1,offsetY:1.56,offsetZ:-.22,color:Dn(n,1.05)}];return r!=="rivendell_keepers"&&(c.push({name:"hat_brim",w:.52,h:.04,d:.52,offsetY:1.83,color:t}),c.push({name:"hat_top",w:.42,h:.16,d:.42,offsetY:1.95,color:t})),r==="road_wardens"?(c.push({name:"cloak",w:.46,h:.85,d:.06,offsetY:.85,offsetZ:.2,color:Dn(e,.6)}),c.push({name:"sword",w:.04,h:.52,d:.04,offsetY:.38,offsetX:-.4,color:8947864}),c.push({name:"guard",w:.12,h:.04,d:.04,offsetY:.67,offsetX:-.4,color:6708800}),c.push({name:"pommel",w:.06,h:.06,d:.06,offsetY:.14,offsetX:-.4,color:6708800})):r==="rivendell_keepers"?(c.push({name:"circlet",w:.44,h:.04,d:.44,offsetY:1.83,color:12625484}),c.push({name:"gem",w:.06,h:.06,d:.06,offsetY:1.86,offsetZ:-.2,color:4217024}),c.push({name:"robe",w:.48,h:.32,d:.3,offsetY:.32,color:e}),c.push({name:"hem",w:.5,h:.04,d:.32,offsetY:.13,color:Dn(e,.85)}),c.push({name:"sash",w:.04,h:.4,d:.04,offsetY:.7,offsetX:.08,offsetZ:-.14,color:10059840})):r==="dwarven_crafters"?(c.push({name:"beard",w:.24,h:.3,d:.18,offsetY:1.25,offsetZ:-.12,color:7030819}),c.push({name:"noseguard",w:.06,h:.14,d:.06,offsetY:1.86,offsetZ:-.2,color:Dn(t,.75)}),c.push({name:"pick_handle",w:.04,h:.6,d:.04,offsetY:1.15,offsetX:.1,offsetZ:.22,color:7564128}),c.push({name:"pick_head",w:.22,h:.08,d:.06,offsetY:1.5,offsetX:.1,offsetZ:.22,color:8421516}),c.push({name:"stocky",w:.54,h:.55,d:.36,offsetY:.93,color:Dn(e,.95)})):r==="woodland_guardians"?(c.push({name:"cloak",w:.44,h:.8,d:.06,offsetY:.9,offsetZ:.18,color:3365160}),c.push({name:"hood",w:.44,h:.26,d:.3,offsetY:1.72,offsetZ:.06,color:3365160}),c.push({name:"quiver",w:.12,h:.42,d:.08,offsetY:1.12,offsetX:.14,offsetZ:.2,color:5848862}),c.push({name:"arrow",w:.02,h:.16,d:.02,offsetY:1.4,offsetX:.14,offsetZ:.2,color:9207884}),c.push({name:"bow",w:.04,h:.6,d:.04,offsetY:.95,offsetX:-.48,color:6702878})):r==="beorning_wardens"&&(c.push({name:"mantle",w:.64,h:.16,d:.42,offsetY:1.22,color:8742456}),c.push({name:"fur_stripe",w:.5,h:.08,d:.08,offsetY:1.22,offsetZ:-.14,color:10125388}),c.push({name:"axe_handle",w:.04,h:.58,d:.04,offsetY:.68,offsetX:.44,color:6311480}),c.push({name:"axe_head",w:.18,h:.14,d:.04,offsetY:1.02,offsetX:.44,offsetZ:-.07,color:8421510}),c.push({name:"axe_head2",w:.18,h:.14,d:.04,offsetY:1.02,offsetX:.44,offsetZ:.07,color:8421510}),c.push({name:"fur_boot",w:.26,h:.06,d:.28,offsetY:.16,offsetX:-.13,color:8742456}),c.push({name:"fur_boot",w:.26,h:.06,d:.28,offsetY:.16,offsetX:.13,color:8742456})),{parts:c}}function Yg(i){const e=Xg[i.factionId]||{},t=qg({bodyColor:e.body,hatColor:e.hat,skinColor:e.skin,factionId:i.factionId}),n=new mr;for(const r of t.parts){const s=new bi(r.w,r.h,r.d),o=new js({color:r.color}),a=new Sn(s,o);a.position.y=r.offsetY,r.offsetX&&(a.position.x=r.offsetX),r.offsetZ&&(a.position.z=r.offsetZ),a.userData.partName=r.name,n.add(a)}return n}class Kg{constructor(e){this.scene=e,this.meshMap=new Map}sync(e,t){const n=new Set;for(const r of e){n.add(r.id);let s=this.meshMap.get(r.id);if(s||(s=Yg(r),this.scene.add(s),this.meshMap.set(r.id,s)),s.position.set(r.position.x,r.position.y,r.position.z),t){const o=t.position.x-r.position.x,a=t.position.z-r.position.z;s.rotation.y=Math.atan2(o,a)}}for(const[r,s]of this.meshMap)n.has(r)||(this.scene.remove(s),this.meshMap.delete(r))}}const Vt=Object.freeze({CLEAR:"clear",CLOUDY:"cloudy",RAIN:"rain",STORM:"storm",SNOW:"snow",FOG:"fog"}),Sl=[Vt.CLEAR,Vt.CLOUDY,Vt.RAIN,Vt.STORM,Vt.SNOW,Vt.FOG],$g={[Vt.CLEAR]:0,[Vt.CLOUDY]:-.1,[Vt.RAIN]:-.3,[Vt.STORM]:-.5,[Vt.SNOW]:-.8,[Vt.FOG]:-.1},jg={[Vt.CLEAR]:1,[Vt.CLOUDY]:.9,[Vt.RAIN]:.7,[Vt.STORM]:.4,[Vt.SNOW]:.6,[Vt.FOG]:.3};class Zg{constructor(){this._rng=42,this.current=Vt.CLEAR,this.elapsed=0,this.duration=this._rollDuration()}_nextRandom(){return this._rng=this._rng*1103515245+12345&2147483647,this._rng/2147483647}_rollDuration(){return 60+Math.floor(this._nextRandom()*120)}tick(e){this.elapsed+=e,this.elapsed>=this.duration&&(this.elapsed-=this.duration,this.current=Sl[Math.floor(this._nextRandom()*Sl.length)],this.duration=this._rollDuration())}getTemperatureModifier(){return $g[this.current]||0}getVisibilityModifier(){return jg[this.current]||1}}class Qg{constructor({width:e,height:t,cellSize:n}){this.width=e,this.height=t,this.cellSize=n,this._cols=Math.ceil(e/n),this._rows=Math.ceil(t/n),this._revealed=new Uint8Array(this._cols*this._rows),this._landmarks=[]}_cellIndex(e,t){const n=Math.floor(e/this.cellSize),r=Math.floor(t/this.cellSize);return n<0||n>=this._cols||r<0||r>=this._rows?-1:r*this._cols+n}isRevealed(e,t){const n=this._cellIndex(e,t);return n<0?!1:this._revealed[n]===1}reveal(e,t,n){const r=Math.max(0,Math.floor((e-n)/this.cellSize)),s=Math.min(this._cols-1,Math.floor((e+n)/this.cellSize)),o=Math.max(0,Math.floor((t-n)/this.cellSize)),a=Math.min(this._rows-1,Math.floor((t+n)/this.cellSize));for(let c=o;c<=a;c++)for(let d=r;d<=s;d++){const h=(d+.5)*this.cellSize,f=(c+.5)*this.cellSize,u=h-e,p=f-t;u*u+p*p<=n*n&&(this._revealed[c*this._cols+d]=1)}}getRevealedPercentage(){let e=0;const t=this._revealed.length;for(let n=0;n<t;n++)this._revealed[n]===1&&e++;return e/t*100}addLandmark(e){this._landmarks.push(e)}getLandmarks(){return this._landmarks}serialize(){return{revealed:Array.from(this._revealed),landmarks:this._landmarks.map(e=>({...e}))}}deserialize(e){for(let t=0;t<e.revealed.length&&t<this._revealed.length;t++)this._revealed[t]=e.revealed[t];this._landmarks=e.landmarks.map(t=>({...t}))}}const Jg=100,ev=1.5;function Fr(i){let e=0;for(let t=1;t<i;t++)e+=Math.floor(Jg*Math.pow(ev,t-1));return e}class tv{constructor(){this.level=1,this.experience=0,this.skillPoints=0}addExperience(e,t){for(this.experience+=e;this.experience>=Fr(this.level+1);)this.level++,this.skillPoints++}getExpForNextLevel(){return Fr(this.level+1)-Fr(this.level)}getExpProgress(){const e=Fr(this.level),n=Fr(this.level+1)-e;return n<=0?0:(this.experience-e)/n}spendSkillPoint(){return this.skillPoints<=0?!1:(this.skillPoints--,!0)}}const nn=Object.freeze({MAIN_HAND:"main_hand",OFF_HAND:"off_hand",HEAD:"head",CHEST:"chest",LEGS:"legs",FEET:"feet",ACCESSORY:"accessory"}),nv=Object.values(nn);class iv{constructor(){this._slots=new Map;for(const e of nv)this._slots.set(e,null)}get(e){return this._slots.get(e)||null}equip(e){const t=this._slots.get(e.slot)||null;return this._slots.set(e.slot,e),t}unequip(e){const t=this._slots.get(e)||null;return this._slots.set(e,null),t}getTotalArmor(){let e=0;for(const t of this._slots.values())t&&t.armor&&(e+=t.armor);return e}getEquippedItems(){const e=[];for(const t of this._slots.values())t&&e.push(t);return e}}class rv{constructor(e){this.size=e,this._slots=new Array(e).fill(null),this.selectedSlot=0}getSlot(e){return this._slots[e]||null}setSlot(e,t){this._slots[e]=t}clearSlot(e){this._slots[e]=null}selectSlot(e){this.selectedSlot=(e%this.size+this.size)%this.size}getSelectedItem(){return this._slots[this.selectedSlot]||null}scrollNext(){this.selectedSlot=(this.selectedSlot+1)%this.size}scrollPrev(){this.selectedSlot=(this.selectedSlot-1+this.size)%this.size}}const Ml=100,sv=75,zo=50,ov=2;class av{constructor(){this.level=0}addFear(e){this.level=Math.min(Ml,this.level+e)}reduceFear(e){this.level=Math.max(0,this.level-e)}tick(e){this.level=Math.max(0,this.level-ov*e)}getMovementPenalty(){return this.level<zo?0:(this.level-zo)/(Ml-zo)*.4}isTerrified(){return this.level>=sv}}Et.DAWN+"",Et.DAY+"",Et.DUSK+"",Et.NIGHT+"";Et.DAWN+"",Et.DAY+"",Et.DUSK+"",Et.NIGHT+"";Et.DAWN+"",Et.DAY+"",Et.DUSK+"",Et.NIGHT+"";const cv={man_ranger:[{type:"short_bow",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"bedroll",count:1},{type:"trail_rations",count:3}],man_soldier:[{type:"iron_sword",count:1},{type:"shield",count:1},{type:"stone_pickaxe",count:1},{type:"leather_armor",count:1},{type:"bread",count:2}],man_scholar:[{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"lantern",count:1},{type:"relic_shard",count:1},{type:"lore_fragment",count:2}],elf_archer:[{type:"refined_bow",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"arrow",count:20},{type:"lembas",count:2}],elf_warden:[{type:"spear",count:1},{type:"stone_pickaxe",count:1},{type:"ward_token",count:1},{type:"cloak",count:1},{type:"lembas",count:1}],elf_gatherer:[{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"herb_pouch",count:1},{type:"sling",count:1},{type:"berries",count:5}],dwarf_miner:[{type:"pickaxe",count:1},{type:"hammer",count:1},{type:"torch",count:3},{type:"rope",count:1}],dwarf_blacksmith:[{type:"hammer",count:1},{type:"stone_pickaxe",count:1},{type:"iron_ore",count:5},{type:"repair_kit",count:1},{type:"bread",count:2}],dwarf_delver:[{type:"axe",count:1},{type:"stone_pickaxe",count:1},{type:"lantern",count:1},{type:"rope",count:2},{type:"trail_rations",count:2}],hobbit_burglar:[{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"sling",count:1},{type:"lock_tools",count:1},{type:"mushroom",count:5}],hobbit_cook:[{type:"pan",count:1},{type:"stone_pickaxe",count:1},{type:"firestarter",count:1},{type:"raw_meat",count:3},{type:"berries",count:5}],hobbit_forager:[{type:"walking_stick",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"satchel",count:1},{type:"mushroom",count:3},{type:"berries",count:3}]};function lv(i){return cv[i]||[]}function Ad(i){Object.freeze(i);for(const e of Object.values(i))e&&typeof e=="object"&&Ad(e);return i}const yr=Ad({PHYSICS:{GRAVITY:-20,JUMP_VELOCITY:8,PLAYER_WIDTH:.6,PLAYER_HEIGHT:1.8,VOID_FLOOR_Y:0},CAMERA:{FOV:75,NEAR:.1,FAR:80,MOUSE_SENSITIVITY:.002,MAX_PITCH:Math.PI/2-.01,THIRD_PERSON_DISTANCE:5,THIRD_PERSON_EYE_HEIGHT:2,FIRST_PERSON_EYE_HEIGHT:1.6},WORLD:{BOUNDARY_EXTENT:560,WATER_LEVEL:26,SURFACE_Y:32},CHUNKS:{LOAD_DISTANCE:5,UNLOAD_DISTANCE:8,MAX_PER_FRAME:8,RENDER_DISTANCE:4,SIZE:16},COMBAT:{MELEE_RANGE:3,MELEE_CONE:.7,RANGED_CONE:.95,FIST_DAMAGE:2,NORMAL_COOLDOWN:.5,HEAVY_COOLDOWN:1.2,XP_PER_KILL:25,FACTION_REP_PER_KILL:10},SURVIVAL:{GAME_TIME_SCALE:4,SPRINT_MULTIPLIER:1.6,WATER_SLOWDOWN:.5,HUNGER_DRAIN_RATE:.1},FOG:{WIDTH:700,HEIGHT:300,CELL_SIZE:10,BASE_FAR:56,BASE_NEAR_RATIO:.5,MIN_NEAR:1,REVEAL_RADIUS:20},SPAWNING:{MAX_ENEMIES:8,MIN_SPAWN_DIST:15,MAX_SPAWN_DIST:35,SPAWN_INTERVAL:10},CORRUPTION:{CENTER_X:420,CENTER_Z:90,RADIUS:100,FOG_THRESHOLD:.1},RESTORATION:{INTERACT_RANGE:8,HINT_RANGE:10,XP_REWARD:100,FACTION_REP_REWARD:50},NPC:{INTERACT_RANGE:5},MAP:{CANVAS_WIDTH:460,CANVAS_HEIGHT:320,WORLD_MIN_X:-100,WORLD_MAX_X:560,WORLD_MIN_Z:-120,WORLD_MAX_Z:150},COLORS:{SKY_DAY:8900331,SKY_DAWN:16757606,SKY_DUSK:16742212,SKY_NIGHT:657962,AMBIENT_LIGHT:16777215,DIR_LIGHT:16774368},LIGHTING:{AMBIENT:{dawn:.5,day:.6,dusk:.35,night:.1},DIRECTIONAL:{dawn:.6,day:.8,dusk:.4,night:.05}},QUESTS:{AUTO_ACTIVATE_SIDE_COUNT:3,XP_FIRST_NIGHT:50,XP_EXPLORATION:30,XP_DISCOVERY:20,XP_RESTORATION:100},CREATIVE:{FLY_SPEED:15},DIALOGUE:{DISPLAY_DURATION:5,SHORT_DURATION:3,SAVE_FEEDBACK_DURATION:2}});function Tl(i){const e=yr.FOG.BASE_FAR*i;return{near:Math.max(yr.FOG.MIN_NEAR,e*yr.FOG.BASE_NEAR_RATIO),far:e}}function dv(i,e){const t=e-1;i.x=Math.max(-t,Math.min(t,i.x)),i.z=Math.max(-t,Math.min(t,i.z)),i.y=Math.max(0,i.y)}class xt{constructor(e,t,n,r=null){this.name=e,this.inputs=t,this.outputs=n,this.station=r}canCraft(e){return this.inputs.every(({type:t,count:n})=>e.count(t)>=n)}}class hv{constructor(e){this.recipes=e}getAvailableRecipes(e,t=null){return this.recipes.filter(n=>n.station&&n.station!==t?!1:n.canCraft(e))}craft(e,t,n=null){const r=this.recipes.find(s=>s.name===e);if(!r||r.station&&r.station!==n||!r.canCraft(t))return!1;for(const{type:s,count:o}of r.inputs)t.remove(s,o);for(const{type:s,count:o}of r.outputs)t.add(s,o);return!0}}class uv{constructor(e){this._system=e,this.isOpen=!1,this.selectedIndex=0,this._station=null}toggle(){this.isOpen=!this.isOpen,this.isOpen&&(this.selectedIndex=0)}setStation(e){this._station=e}getAllRecipes(){return this._system.recipes.filter(e=>e.station===this._station)}getAvailableRecipes(e){return this._system.getAvailableRecipes(e,this._station)}craftSelected(e){const t=this.getAllRecipes();if(this.selectedIndex>=t.length)return!1;const n=t[this.selectedIndex];return this._system.craft(n.name,e,this._station)}selectNext(){this.selectedIndex++}selectPrev(){this.selectedIndex=Math.max(0,this.selectedIndex-1)}}const fv=[new xt("Sticks from Wood",[{type:X.WOOD,count:1}],[{type:X.STICK,count:4}]),new xt("Rope from Fiber",[{type:X.FIBER,count:3}],[{type:X.ROPE,count:1}]),new xt("Torch",[{type:X.STICK,count:1},{type:X.COAL,count:1}],[{type:X.TORCH,count:2}]),new xt("Planks",[{type:X.WOOD,count:2}],[{type:X.PLANKS,count:4}]),new xt("Workbench",[{type:X.PLANKS,count:4},{type:X.STICK,count:4}],[{type:X.WORKBENCH,count:1}]),new xt("Campfire",[{type:X.STONE,count:5},{type:X.STICK,count:3}],[{type:X.CAMPFIRE,count:1}]),new xt("Stone Pickaxe",[{type:X.STICK,count:2},{type:X.STONE,count:3}],[{type:X.STONE_PICKAXE,count:1}],"workbench"),new xt("Stone Axe",[{type:X.STICK,count:2},{type:X.STONE,count:2}],[{type:X.STONE_AXE,count:1}],"workbench"),new xt("Bedroll",[{type:X.FIBER,count:6},{type:X.LEATHER,count:2}],[{type:X.BEDROLL,count:1}],"workbench"),new xt("Cobblestone",[{type:X.STONE,count:4}],[{type:X.COBBLESTONE,count:4}],"workbench"),new xt("Glass from Sand",[{type:X.SAND,count:4}],[{type:X.GLASS,count:2}],"workbench"),new xt("Iron Pickaxe",[{type:X.STICK,count:2},{type:X.IRON_INGOT,count:3}],[{type:X.IRON_PICKAXE,count:1}],"workbench"),new xt("Iron Axe",[{type:X.STICK,count:2},{type:X.IRON_INGOT,count:2}],[{type:X.IRON_AXE,count:1}],"workbench"),new xt("Forge",[{type:X.STONE,count:8},{type:X.IRON_ORE,count:3}],[{type:X.FORGE,count:1}],"workbench"),new xt("Kitchen",[{type:X.PLANKS,count:6},{type:X.STONE,count:4}],[{type:X.KITCHEN,count:1}],"workbench"),new xt("Loom",[{type:X.PLANKS,count:4},{type:X.FIBER,count:6}],[{type:X.LOOM,count:1}],"workbench"),new xt("Smelt Iron Ore",[{type:X.IRON_ORE,count:2},{type:X.COAL,count:1}],[{type:X.IRON_INGOT,count:1}],"forge"),new xt("Smelt Copper Ore",[{type:X.COPPER_ORE,count:2},{type:X.COAL,count:1}],[{type:X.COPPER_INGOT,count:1}],"forge"),new xt("Cook Meat",[{type:X.RAW_MEAT,count:1}],[{type:X.COOKED_MEAT,count:1}],"campfire"),new xt("Cook Fish",[{type:X.RAW_FISH,count:1}],[{type:X.COOKED_FISH,count:1}],"campfire"),new xt("Hearth Stew",[{type:X.COOKED_MEAT,count:2},{type:X.RAW_MUSHROOM,count:1}],[{type:X.STEW,count:2}],"kitchen"),new xt("Trail Rations",[{type:X.COOKED_MEAT,count:1},{type:X.RAW_BERRIES,count:2}],[{type:X.TRAIL_RATIONS,count:3}],"kitchen"),new xt("Herb Salad",[{type:X.RAW_BERRIES,count:2},{type:X.RAW_MUSHROOM,count:2}],[{type:X.HERB_SALAD,count:2}],"kitchen"),new xt("Thatch Block",[{type:X.FIBER,count:4}],[{type:X.THATCH,count:4}],"workbench"),new xt("Stone Brick",[{type:X.STONE,count:4}],[{type:X.STONE_BRICK,count:4}],"workbench"),new xt("Rope from Fiber (Loom)",[{type:X.FIBER,count:2}],[{type:X.ROPE,count:2}],"loom"),new xt("Bandage",[{type:X.FIBER,count:3}],[{type:X.BANDAGE,count:2}],"loom"),new xt("Leather Armor",[{type:X.LEATHER,count:5},{type:X.ROPE,count:2}],[{type:X.LEATHER_ARMOR,count:1}],"loom"),new xt("Oak Planks",[{type:X.WOOD,count:2}],[{type:X.OAK_PLANKS,count:4}],"workbench"),new xt("Copper Pickaxe",[{type:X.STICK,count:2},{type:X.COPPER_INGOT,count:3}],[{type:X.COPPER_PICKAXE,count:1}],"workbench"),new xt("Iron Sword",[{type:X.IRON_INGOT,count:2},{type:X.STICK,count:1}],[{type:X.IRON_SWORD,count:1}],"forge"),new xt("Iron Hammer",[{type:X.IRON_INGOT,count:3},{type:X.STICK,count:2}],[{type:X.IRON_HAMMER,count:1}],"forge")];class pv{constructor({type:e,duration:t,strength:n}){this.type=e,this.remaining=t,this.strength=n}tick(e){this.remaining-=e}isExpired(){return this.remaining<=0}}class mv{constructor(){this._effects=[]}apply({type:e,duration:t,strength:n}){this._effects=this._effects.filter(r=>r.type!==e),this._effects.push(new pv({type:e,duration:t,strength:n}))}tick(e){for(const t of this._effects)t.tick(e);this._effects=this._effects.filter(t=>!t.isExpired())}getActive(){return this._effects}getStrength(e){return this._effects.filter(t=>t.type===e).reduce((t,n)=>t+n.strength,0)}has(e){return this._effects.some(t=>t.type===e)}}const tn=Object.freeze({LOCKED:"locked",AVAILABLE:"available",ACTIVE:"active",COMPLETED:"completed"});class bl{constructor({id:e,description:t,target:n}){this.id=e,this.description=t,this.target=n,this.progress=0}advance(e){this.progress=Math.min(this.progress+e,this.target)}isComplete(){return this.progress>=this.target}}class ti{constructor({id:e,chapter:t,name:n,description:r,objectives:s,requires:o=[]}){this.id=e,this.chapter=t,this.name=n,this.description=r,this.requires=o,this.objectives=s.map(a=>a instanceof bl?a:new bl(a))}advanceObjective(e,t){const n=this.objectives.find(r=>r.id===e);n&&n.advance(t)}isComplete(){return this.objectives.every(e=>e.isComplete())}}class _v{constructor(e){this.quests=e,this._status=new Map;for(const t of e){const n=t.requires.length>0;this._status.set(t.id,n?tn.LOCKED:tn.AVAILABLE)}}getQuest(e){return this.quests.find(t=>t.id===e)}getStatus(e){return this._status.get(e)||tn.LOCKED}activate(e){return this.getStatus(e)!==tn.AVAILABLE?!1:(this._status.set(e,tn.ACTIVE),!0)}advanceObjective(e,t,n){if(this.getStatus(e)!==tn.ACTIVE)return;const r=this.getQuest(e);r&&(r.advanceObjective(t,n),r.isComplete()&&(this._status.set(e,tn.COMPLETED),this._unlockDependents(e)))}_unlockDependents(e){for(const t of this.quests){if(this._status.get(t.id)!==tn.LOCKED)continue;t.requires.every(r=>this._status.get(r)===tn.COMPLETED)&&this._status.set(t.id,tn.AVAILABLE)}}getActiveQuests(){return this.quests.filter(e=>this._status.get(e.id)===tn.ACTIVE)}serialize(){const e={};for(const[n,r]of this._status)e[n]=r;const t={};for(const n of this.quests)t[n.id]=n.objectives.map(r=>({id:r.id,progress:r.progress}));return{statuses:e,objectives:t}}deserialize(e){for(const[t,n]of Object.entries(e.statuses))this._status.set(t,n);for(const[t,n]of Object.entries(e.objectives)){const r=this.getQuest(t);if(r)for(const s of n){const o=r.objectives.find(a=>a.id===s.id);o&&(o.progress=s.progress)}}}}const gv=[new ti({id:"ch1_embers",chapter:1,name:"Embers in the Wild",description:"Survive the first days, reach the ruined outpost, and activate the first ward fragment.",objectives:[{id:"ch1_survive",description:"Survive the first night",target:1},{id:"ch1_reach_outpost",description:"Reach the ruined outpost",target:1},{id:"ch1_activate_ward",description:"Activate the ward fragment",target:1}]}),new ti({id:"ch2_roads",chapter:2,name:"Broken Roads",description:"Restore a frontier settlement, meet the first lore NPC, and discover signs of spreading corruption.",requires:["ch1_embers"],objectives:[{id:"ch2_restore",description:"Restore the frontier settlement",target:1},{id:"ch2_meet_npc",description:"Meet the lore NPC",target:1},{id:"ch2_corruption",description:"Investigate corruption signs",target:3}]}),new ti({id:"ch3_records",chapter:3,name:"The Hidden Records",description:"Travel to the Rivendell region, learn of the ward network, and obtain the first true relic.",requires:["ch2_roads"],objectives:[{id:"ch3_reach_rivendell",description:"Reach the Rivendell region",target:1},{id:"ch3_learn_wards",description:"Learn about the ward network",target:1},{id:"ch3_obtain_relic",description:"Obtain the first true relic",target:1}]}),new ti({id:"ch4_mountains",chapter:4,name:"Beneath the Mountains",description:"Enter the Misty Mountains delves, stabilize a dwarven mechanism, and fight underground threats.",requires:["ch3_records"],objectives:[{id:"ch4_enter_delve",description:"Enter the Misty Mountains delve",target:1},{id:"ch4_stabilize",description:"Stabilize the dwarven mechanism",target:1},{id:"ch4_defeat_boss",description:"Defeat the corrupted guardian",target:1}]}),new ti({id:"ch5_darkwood",chapter:5,name:"The Dark Wood Stirs",description:"Travel through Mirkwood, deal with spiders and ward failures, and restore a forest beacon.",requires:["ch4_mountains"],objectives:[{id:"ch5_enter_mirkwood",description:"Enter Mirkwood",target:1},{id:"ch5_clear_spiders",description:"Clear spider nests",target:3},{id:"ch5_restore_beacon",description:"Restore the forest beacon",target:1}]}),new ti({id:"ch6_forge",chapter:6,name:"The Sleeping Forge",description:"Reach the dwarven craft center near Erebor, unlock final crafting, and learn the source location.",requires:["ch5_darkwood"],objectives:[{id:"ch6_reach_forge",description:"Reach the ancient forge",target:1},{id:"ch6_unlock_crafting",description:"Unlock final crafting tier",target:1},{id:"ch6_discover_source",description:"Discover the awakening source location",target:1}]}),new ti({id:"ch7_shadow",chapter:7,name:"The Rekindled Shadow",description:"Assault the corrupted stronghold, disable its link to the ancient network, and face the dark champion.",requires:["ch6_forge"],objectives:[{id:"ch7_assault",description:"Assault the corrupted stronghold",target:1},{id:"ch7_disable_link",description:"Disable the network link",target:1},{id:"ch7_defeat_champion",description:"Defeat the dark champion",target:1}]}),new ti({id:"ch8_after",chapter:8,name:"After the Night",description:"The world recovers. Settlements improve, and exploration continues in peace.",requires:["ch7_shadow"],objectives:[{id:"ch8_celebrate",description:"Return to a restored settlement",target:1},{id:"ch8_explore",description:"Explore the renewed world",target:1}]})];class vv{constructor(){this._questTarget=null}getDirectionTo(e,t){const n=t.x-e.x,r=t.z-e.z;return Math.atan2(n,-r)}getDistance(e,t){const n=t.x-e.x,r=(t.y||0)-(e.y||0),s=t.z-e.z;return Math.sqrt(n*n+r*r+s*s)}getCardinal(e){let t=(e%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return t<Math.PI/4||t>=Math.PI*7/4?"N":t<Math.PI*3/4?"E":t<Math.PI*5/4?"S":"W"}setQuestTarget(e){this._questTarget={...e}}clearQuestTarget(){this._questTarget=null}getQuestDirection(e){return this._questTarget?{angle:this.getDirectionTo(e,this._questTarget),distance:this.getDistance(e,this._questTarget)}:null}}function xv(i={}){const{survivalStats:e,questSystem:t,compass:n,playerYaw:r=0,playerPos:s,fearSystem:o,experienceSystem:a,statusEffects:c}=i,d={};if(e&&(d.health=Math.ceil(e.health),d.maxHealth=e.maxHealth,d.stamina=Math.ceil(e.stamina),d.hunger=Math.ceil(e.hunger),d.focus=Math.ceil(e.focus),d.tempLabel=e.temperature<-.5?"Cold":e.temperature>.5?"Hot":"Mild"),t){const h=t.getActiveQuests();d.activeQuestName=h.length>0?h[0].name:null}else d.activeQuestName=null;return n&&(d.compassCardinal=n.getCardinal(r)),o?d.fearLevel=Math.round(o.level):d.fearLevel=0,s&&(d.playerX=Math.round(s.x),d.playerZ=Math.round(s.z)),a?d.level=a.level:d.level=1,c?d.statusEffects=c.getActive().map(h=>({type:h.type,remaining:h.remaining,strength:h.strength})):d.statusEffects=[],d}const yv=Object.values(Ed).sort((i,e)=>e.hungerRestore-i.hungerRestore).map(i=>i.id);function Ev(i,e,t){for(const n of yv)if(i.count(n)>0){const r=eg(n);if(e.eat(r.hungerRestore),i.remove(n,1),t&&r.effects)for(const s of r.effects)t.apply(s);return!0}return!1}class Al{constructor({id:e,name:t,description:n,cost:r,requires:s=[]}){this.id=e,this.name=t,this.description=n,this.cost=r,this.requires=s}}class lr{constructor({id:e,name:t,nodes:n}){this.id=e,this.name=t,this.nodes=n.map(r=>r instanceof Al?r:new Al(r)),this._nodeMap=new Map(this.nodes.map(r=>[r.id,r]))}getNode(e){return this._nodeMap.get(e)}}class Sv{constructor(e){this.trees=e,this.skillPoints=0,this._unlocked=new Set,this._allNodes=new Map;for(const t of e)for(const n of t.nodes)this._allNodes.set(n.id,n)}addPoints(e){this.skillPoints+=e}isUnlocked(e){return this._unlocked.has(e)}unlock(e){if(this._unlocked.has(e))return!1;const t=this._allNodes.get(e);if(!t||this.skillPoints<t.cost)return!1;for(const n of t.requires)if(!this._unlocked.has(n))return!1;return this.skillPoints-=t.cost,this._unlocked.add(e),!0}getAvailable(){const e=[];for(const[t,n]of this._allNodes){if(this._unlocked.has(t)||this.skillPoints<n.cost)continue;n.requires.every(s=>this._unlocked.has(s))&&e.push(n)}return e}grantStartingUnlock(e){return this._unlocked.has(e)||!this._allNodes.get(e)?!1:(this._unlocked.add(e),!0)}getUnlocked(){return[...this._unlocked]}serialize(){return{skillPoints:this.skillPoints,unlocked:[...this._unlocked]}}deserialize(e){this.skillPoints=e.skillPoints,this._unlocked=new Set(e.unlocked)}}class Mv{constructor(e){this._system=e,this.isOpen=!1,this.currentTreeIndex=0,this.selectedNodeIndex=0}toggle(){this.isOpen=!this.isOpen,this.isOpen&&(this.currentTreeIndex=0,this.selectedNodeIndex=0)}getCurrentTree(){return this._system.trees[this.currentTreeIndex]}nextTree(){this.currentTreeIndex=(this.currentTreeIndex+1)%this._system.trees.length,this.selectedNodeIndex=0}prevTree(){this.currentTreeIndex=(this.currentTreeIndex-1+this._system.trees.length)%this._system.trees.length,this.selectedNodeIndex=0}getNodes(){return this.getCurrentTree().nodes.map(t=>({id:t.id,name:t.name,description:t.description,cost:t.cost,requires:t.requires,unlocked:this._system.isUnlocked(t.id),available:!this._system.isUnlocked(t.id)&&this._system.skillPoints>=t.cost&&t.requires.every(n=>this._system.isUnlocked(n))}))}unlockSelected(){const e=this.getNodes();return this.selectedNodeIndex>=e.length?!1:this._system.unlock(e[this.selectedNodeIndex].id)}getSkillPoints(){return this._system.skillPoints}}const Rl=[new lr({id:"survival",name:"Survival",nodes:[{id:"surv_hardy",name:"Hardy",description:"Slower hunger drain",cost:1},{id:"surv_warmth",name:"Warmth",description:"Better camp warmth bonus",cost:1},{id:"surv_iron_stomach",name:"Iron Stomach",description:"Raw food is safer to eat",cost:2,requires:["surv_hardy"]},{id:"surv_bandages",name:"Better Bandages",description:"Bandages heal more",cost:2,requires:["surv_hardy"]},{id:"surv_rest",name:"Deep Rest",description:"Sleep restores more stamina",cost:2,requires:["surv_warmth"]},{id:"surv_forager",name:"Keen Forager",description:"Find more berries and herbs",cost:1},{id:"surv_endurance",name:"Endurance",description:"Slower stamina drain while sprinting",cost:3,requires:["surv_iron_stomach"]},{id:"surv_corruption_resist",name:"Corruption Resist",description:"Reduced corruption buildup",cost:3,requires:["surv_bandages"]},{id:"surv_shelter_master",name:"Shelter Master",description:"Shelters provide better quality",cost:2,requires:["surv_rest"]},{id:"surv_second_wind",name:"Second Wind",description:"Recover stamina faster when low",cost:3,requires:["surv_endurance"]}]}),new lr({id:"combat",name:"Combat",nodes:[{id:"cmb_parry",name:"Parry",description:"Timed parry window for melee",cost:1},{id:"cmb_heavy_blow",name:"Heavy Blow",description:"Stronger heavy attacks",cost:1},{id:"cmb_quick_draw",name:"Quick Draw",description:"Faster bow draw speed",cost:1},{id:"cmb_shield_wall",name:"Shield Wall",description:"Reduced damage when blocking",cost:2,requires:["cmb_parry"]},{id:"cmb_precise_strike",name:"Precise Strike",description:"Critical hit chance on weak spots",cost:2,requires:["cmb_heavy_blow"]},{id:"cmb_ranged_stability",name:"Ranged Stability",description:"Less bow sway",cost:2,requires:["cmb_quick_draw"]},{id:"cmb_counter",name:"Counter",description:"Damage on successful parry",cost:3,requires:["cmb_shield_wall"]},{id:"cmb_cleave",name:"Cleave",description:"Hit multiple enemies with heavy attacks",cost:3,requires:["cmb_precise_strike"]},{id:"cmb_steady_aim",name:"Steady Aim",description:"Headshot bonus damage",cost:3,requires:["cmb_ranged_stability"]},{id:"cmb_berserker",name:"Berserker",description:"Damage bonus when health is low",cost:3,requires:["cmb_cleave"]}]}),new lr({id:"craft",name:"Craft",nodes:[{id:"crf_repair",name:"Field Repair",description:"Better repair efficiency",cost:1},{id:"crf_yield",name:"Material Yield",description:"Higher material yield from mining",cost:1},{id:"crf_recipes",name:"Advanced Recipes",description:"Unlock intermediate recipes",cost:2,requires:["crf_repair"]},{id:"crf_tool_mastery",name:"Tool Mastery",description:"Tools last longer",cost:2,requires:["crf_repair"]},{id:"crf_smelt",name:"Efficient Smelting",description:"Less fuel per smelt",cost:2,requires:["crf_yield"]},{id:"crf_forge_master",name:"Forge Master",description:"Unlock high-tier metalworking",cost:3,requires:["crf_recipes"]},{id:"crf_architect",name:"Architect",description:"Restoration costs reduced",cost:2,requires:["crf_yield"]},{id:"crf_rune_craft",name:"Rune Craft",description:"Craft rune items at rune table",cost:3,requires:["crf_forge_master"]},{id:"crf_master_smith",name:"Master Smith",description:"Best-tier weapons and armor",cost:3,requires:["crf_forge_master"]}]}),new lr({id:"exploration",name:"Exploration",nodes:[{id:"exp_map_reveal",name:"Pathfinder",description:"Faster map reveal radius",cost:1},{id:"exp_climb",name:"Sure-Footed",description:"Safer climbing, reduced fall damage",cost:1},{id:"exp_treasure",name:"Treasure Sense",description:"Detect hidden caches nearby",cost:2,requires:["exp_map_reveal"]},{id:"exp_scout",name:"Scout",description:"See enemies from further away",cost:2,requires:["exp_map_reveal"]},{id:"exp_mountaineer",name:"Mountaineer",description:"Better movement in mountains",cost:2,requires:["exp_climb"]},{id:"exp_lore_reader",name:"Lore Reader",description:"Identify ruins and relics faster",cost:2,requires:["exp_treasure"]},{id:"exp_night_eye",name:"Night Eye",description:"Better vision in darkness",cost:2,requires:["exp_scout"]},{id:"exp_swift_travel",name:"Swift Travel",description:"Move faster on roads",cost:3,requires:["exp_mountaineer"]}]}),new lr({id:"fellowship",name:"Fellowship",nodes:[{id:"fel_reputation",name:"Good Reputation",description:"Faster reputation gain",cost:1},{id:"fel_trader",name:"Shrewd Trader",description:"Better prices from merchants",cost:1},{id:"fel_diplomat",name:"Diplomat",description:"Faction hostility decays faster",cost:2,requires:["fel_reputation"]},{id:"fel_mentor",name:"Mentor",description:"Gain bonus XP from quest NPCs",cost:2,requires:["fel_reputation"]},{id:"fel_cheaper_restore",name:"Community Builder",description:"Cheaper restoration costs",cost:2,requires:["fel_trader"]},{id:"fel_trust",name:"Deep Trust",description:"Unlock unique faction quests",cost:3,requires:["fel_diplomat"]},{id:"fel_inspire",name:"Inspire",description:"Nearby allies fight better",cost:3,requires:["fel_mentor"]},{id:"fel_peace",name:"Peacekeeper",description:"Some enemies can be calmed",cost:3,requires:["fel_trust"]}]}),new lr({id:"attunement",name:"Attunement",nodes:[{id:"att_focus",name:"Focus Pool",description:"Increased max focus",cost:1},{id:"att_heal",name:"Healing Touch",description:"Stronger healing abilities",cost:1},{id:"att_ward",name:"Ward Strength",description:"Wards last longer",cost:2,requires:["att_focus"]},{id:"att_relic_sense",name:"Relic Sense",description:"Detect nearby relics",cost:2,requires:["att_focus"]},{id:"att_nature",name:"Nature Bond",description:"Nature magic costs less focus",cost:2,requires:["att_heal"]},{id:"att_stabilize",name:"Stabilize Relic",description:"Better relic stabilization",cost:3,requires:["att_relic_sense"]},{id:"att_purify",name:"Purify",description:"Remove corruption from blocks",cost:3,requires:["att_ward"]},{id:"att_calm_fear",name:"Calm Fear",description:"Reduce terror/corruption buildup",cost:2,requires:["att_nature"]},{id:"att_deep_attune",name:"Deep Attunement",description:"Relic abilities gain power",cost:3,requires:["att_stabilize"]}]})];class xn{constructor({id:e,name:t,position:n,factionId:r,dialogueId:s,dialogue:o={},trades:a=[]}){this.id=e,this.name=t,this.position={...n},this.spawnPosition={...n},this.factionId=r,this.dialogueId=s,this.dialogue=o,this.trades=a,this._wanderTimer=0,this._wanderDirX=0,this._wanderDirZ=0,this._wanderSpeed=1.2,this._wanderRadius=6}_collidesWithWorld(e,t,n){if(!n)return!1;const r=Math.floor(e),s=Math.floor(this.position.y),o=Math.floor(t);return rn(n.getBlock(r,s,o))||rn(n.getBlock(r,s+1,o))}updateAI(e,t,n,r=Math.random){if(this._wanderTimer-=e,this._wanderTimer<=0)if(r()<.4)this._wanderDirX=0,this._wanderDirZ=0,this._wanderTimer=2+r()*3;else{const s=r()*Math.PI*2;this._wanderDirX=Math.cos(s),this._wanderDirZ=Math.sin(s),this._wanderTimer=1+r()*2}if(this._wanderDirX!==0||this._wanderDirZ!==0){const s=this.position.x+this._wanderDirX*this._wanderSpeed*e,o=this.position.z+this._wanderDirZ*this._wanderSpeed*e,a=s-this.spawnPosition.x,c=o-this.spawnPosition.z;if(a*a+c*c>this._wanderRadius*this._wanderRadius){const d=Math.sqrt(a*a+c*c);this._wanderDirX=-a/d,this._wanderDirZ=-c/d}else this._collidesWithWorld(s,this.position.z,n)?this._wanderDirX=-this._wanderDirX:this.position.x=s,this._collidesWithWorld(this.position.x,o,n)?this._wanderDirZ=-this._wanderDirZ:this.position.z=o}t&&(this.position.y=t(Math.floor(this.position.x),Math.floor(this.position.z))+1)}hasTrades(){return this.trades.length>0}getDialogue(e){if(!this.dialogueId)return this.dialogue.default||"";const t=e.getStatus(this.dialogueId);return t===tn.COMPLETED&&this.dialogue.completed?this.dialogue.completed:t===tn.ACTIVE&&this.dialogue.active?this.dialogue.active:t===tn.AVAILABLE&&this.dialogue.available?this.dialogue.available:this.dialogue.default||""}}class Tv{constructor(){this._npcs=new Map}addNPC(e){this._npcs.set(e.id,e)}getNPC(e){return this._npcs.get(e)}getAllNPCs(){return Array.from(this._npcs.values())}findNearby(e,t){const n=[];for(const r of this._npcs.values())En(e,r.position)<=t&&n.push(r);return n}getByFaction(e){const t=[];for(const n of this._npcs.values())n.factionId===e&&t.push(n);return t}}const Ho=[new xn({id:"ranger_hal",name:"Hal the Ranger",position:{x:10,y:33,z:8},factionId:"road_wardens",dialogueId:"ch1_embers",dialogue:{available:"The wild is dangerous. Ruins stir with old power.",active:"Have you found the ward fragment yet?",completed:"Well done. The ward glows again.",default:"Stay safe out there."},trades:[{give:{type:"leather",count:3},receive:{type:"iron_sword",count:1}},{give:{type:"iron_ore",count:2},receive:{type:"stone_pickaxe",count:1}}]}),new xn({id:"shire_farmer",name:"Hamfast the Farmer",position:{x:-15,y:33,z:12},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Fine day for gardening. The taters are coming along nicely."},trades:[{give:{type:"fiber",count:5},receive:{type:"raw_berries",count:3}},{give:{type:"wood",count:5},receive:{type:"raw_meat",count:2}}]}),new xn({id:"shire_merchant",name:"Rosie the Merchant",position:{x:20,y:33,z:-5},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Looking to trade? I have fine Shire goods."},trades:[{give:{type:"stone",count:10},receive:{type:"torch",count:5}},{give:{type:"leather",count:5},receive:{type:"bedroll",count:1}},{give:{type:"iron_ore",count:3},receive:{type:"stone_pickaxe",count:1}}]}),new xn({id:"elara_lorekeeper",name:"Elara the Lorekeeper",position:{x:200,y:33,z:35},factionId:"rivendell_keepers",dialogueId:"ch3_records",dialogue:{available:"The old records speak of a ward network...",active:"Search the archives. The truth is there.",completed:"You have found what was hidden.",default:"The lore is fading, but not yet lost."},trades:[{give:{type:"lore_fragment",count:2},receive:{type:"relic_shard",count:1}}]}),new xn({id:"rivendell_healer",name:"Celebrin the Healer",position:{x:210,y:33,z:25},factionId:"rivendell_keepers",dialogueId:null,dialogue:{default:"The valley still holds its peace. Let me tend your wounds."},trades:[{give:{type:"fiber",count:3},receive:{type:"bandage",count:2}},{give:{type:"raw_berries",count:5},receive:{type:"herb_salad",count:2}}]}),new xn({id:"thorin_smith",name:"Thorin the Smith",position:{x:275,y:45,z:55},factionId:"dwarven_crafters",dialogueId:"ch4_mountains",dialogue:{available:"The old forge can be rekindled, with the right materials.",active:"Have you stabilized the mechanism?",completed:"Aye, the forge rings true once more.",default:"Need something forged?"},trades:[{give:{type:"iron_ore",count:5},receive:{type:"iron_sword",count:1}},{give:{type:"iron_ore",count:3},receive:{type:"iron_pickaxe",count:1}},{give:{type:"copper_ore",count:5},receive:{type:"copper_pickaxe",count:1}}]}),new xn({id:"mountain_trader",name:"Dwalin the Trader",position:{x:260,y:45,z:45},factionId:"dwarven_crafters",dialogueId:null,dialogue:{default:"Mountain stone is the finest. Care to trade?"},trades:[{give:{type:"stone",count:10},receive:{type:"iron_ore",count:2}},{give:{type:"wood",count:15},receive:{type:"iron_ore",count:3}}]}),new xn({id:"galawen_warden",name:"Galawen the Warden",position:{x:395,y:33,z:40},factionId:"woodland_guardians",dialogueId:"ch5_darkwood",dialogue:{available:"The forest beacon must be restored before the dark wood consumes all.",active:"The spiders grow bolder. Clear their nests.",completed:"Light returns to Mirkwood. Thank you.",default:"Walk carefully beneath these boughs."},trades:[{give:{type:"fiber",count:10},receive:{type:"rope",count:3}},{give:{type:"relic_shard",count:2},receive:{type:"leather_armor",count:1}}]}),new xn({id:"beorn_jr",name:"Grimbeorn the Younger",position:{x:340,y:33,z:65},factionId:"beorning_wardens",dialogueId:null,dialogue:{default:"The wild things grow restless. Something stirs in the deep places."},trades:[{give:{type:"raw_meat",count:3},receive:{type:"leather",count:2}},{give:{type:"leather",count:5},receive:{type:"leather_armor",count:1}}]}),new xn({id:"old_tom",name:"Old Tom the Innkeeper",position:{x:85,y:33,z:22},factionId:"road_wardens",dialogueId:"ch2_roads",dialogue:{available:"The road needs mending. Fewer travelers come each season.",active:"Any luck restoring the hall?",completed:"The hall stands once more! Travelers will come again.",default:"Rest a while. The road will still be there tomorrow."},trades:[{give:{type:"iron_ore",count:1},receive:{type:"cooked_meat",count:2}},{give:{type:"wood",count:5},receive:{type:"torch",count:3}}]}),new xn({id:"bree_blacksmith",name:"Barliman the Blacksmith",position:{x:75,y:33,z:15},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Looking for a blade? I forge fine ones, if the price is right."},trades:[{give:{type:"iron_ore",count:4},receive:{type:"iron_sword",count:1}},{give:{type:"stone",count:8},receive:{type:"stone_pickaxe",count:1}}]}),new xn({id:"sage_miriel",name:"Miriel the Sage",position:{x:500,y:40,z:28},factionId:"rivendell_keepers",dialogueId:"ch7_shadow",dialogue:{available:"The awakening reaches its peak. The bastion must hold.",active:"Press on. The dark champion awaits.",completed:"It is done. The shadow recedes.",default:"The age turns. What comes next is yours to shape."},trades:[{give:{type:"relic_shard",count:5},receive:{type:"lore_fragment",count:3}}]})];function Go(i,e,t){const n=i.findNearby(e,t);if(n.length===0)return null;let r=null,s=1/0;for(const o of n){const a=En(e,o.position);a<s&&(r=o,s=a)}return r}function Cs(i,e,t){return En(i,e)<=t}class bv{constructor(e,t){this._fog=e,this._landmarks=t,this.isOpen=!1}toggle(){this.isOpen=!this.isOpen}getVisibleLandmarks(){return this._landmarks}getExploredPercentage(){return this._fog.getRevealedPercentage()}isRevealed(e,t){return this._fog.isRevealed(e,t)}getMapData(e){return{playerPos:{...e},landmarks:this._landmarks.map(t=>({id:t.id,name:t.name,x:t.position.x,z:t.position.z,region:t.region})),explored:this.getExploredPercentage()}}}const Fn=Object.freeze({SHIRE:"shire",BREE:"bree",TROLLSHAWS:"trollshaws",RIVENDELL:"rivendell",MISTY_MOUNTAINS:"misty_mountains",ANDUIN_VALE:"anduin_vale",MIRKWOOD:"mirkwood",LONG_LAKE:"long_lake",EREBOR:"erebor",DOL_GULDUR:"dol_guldur"});class Bn{constructor({id:e,name:t,position:n,radius:r,region:s,description:o=""}){this.id=e,this.name=t,this.position={...n},this.radius=r,this.region=s,this.description=o}contains(e){return En(this.position,e)<=this.radius}}const Br=[new Bn({id:"shire",name:"The Shire",position:{x:0,y:33,z:0},radius:60,region:Fn.SHIRE,description:"Green rolling hills and cozy burrows."}),new Bn({id:"bree",name:"Bree",position:{x:80,y:33,z:20},radius:25,region:Fn.BREE,description:"A crossroads town where many travelers meet."}),new Bn({id:"trollshaws",name:"Trollshaws",position:{x:140,y:33,z:40},radius:35,region:Fn.TROLLSHAWS,description:"Rocky woodland where trolls once roamed."}),new Bn({id:"rivendell",name:"Rivendell",position:{x:200,y:33,z:30},radius:30,region:Fn.RIVENDELL,description:"The last homely house east of the sea."}),new Bn({id:"misty_mountains",name:"Misty Mountains",position:{x:270,y:50,z:50},radius:50,region:Fn.MISTY_MOUNTAINS,description:"Towering peaks hiding goblin tunnels and ancient delves."}),new Bn({id:"anduin_vale",name:"Anduin Vale",position:{x:340,y:33,z:60},radius:40,region:Fn.ANDUIN_VALE,description:"Fertile valley of the Great River, home to Beornings."}),new Bn({id:"mirkwood",name:"Mirkwood",position:{x:400,y:33,z:40},radius:55,region:Fn.MIRKWOOD,description:"A dark and tangled forest crawling with spiders."}),new Bn({id:"long_lake",name:"Long Lake",position:{x:470,y:33,z:30},radius:25,region:Fn.LONG_LAKE,description:"Lake-town and its surroundings on the water."}),new Bn({id:"erebor",name:"Erebor",position:{x:520,y:45,z:20},radius:35,region:Fn.EREBOR,description:"The Lonely Mountain, ancient dwarven stronghold."}),new Bn({id:"dol_guldur",name:"Dol Guldur",position:{x:420,y:33,z:90},radius:30,region:Fn.DOL_GULDUR,description:"A corrupted ruin of dark power in southern Mirkwood."})];function Av(i,e,t,n={}){const r={};for(const[c,d]of i.chunks){let h=!1;for(let f=0;f<d.blocks.length;f++)if(d.blocks[f]!==0){h=!0;break}h&&(r[c]=Array.from(d.blocks))}const s=[],o=t.size||36;for(let c=0;c<o;c++)s.push(t.getSlot?t.getSlot(c):null);const a={version:2,player:{position:{...e.position},velocity:{...e.velocity},yaw:e.yaw,pitch:e.pitch,onGround:e.onGround},inventory:s,inventorySize:o,chunks:r};if(n.survivalStats){const c=n.survivalStats;a.survivalStats={health:c.health,maxHealth:c.maxHealth,stamina:c.stamina,hunger:c.hunger,focus:c.focus,corruption:c.corruption,temperature:c.temperature}}return n.quests&&(a.quests=n.quests.serialize()),n.factions&&(a.factions=n.factions.serialize()),n.fastTravel&&(a.fastTravel=n.fastTravel.serialize()),n.fogOfWar&&(a.fogOfWar=n.fogOfWar.serialize()),n.loreJournal&&(a.loreJournal=n.loreJournal.serialize()),n.skillTree&&(a.skillTree=n.skillTree.serialize()),JSON.stringify(a)}function Rv(i){const e=JSON.parse(i),t=new vd;for(const[a,c]of Object.entries(e.chunks))t._getOrCreateChunk(...a.split(",").map(Number)).blocks.set(c);const n=new bd(e.player.position);n.velocity=e.player.velocity,n.yaw=e.player.yaw,n.pitch=e.player.pitch,n.onGround=e.player.onGround;const r=e.inventorySize||36,s=new Md(r);if(Array.isArray(e.inventory))for(const a of e.inventory)a&&a.type&&a.count>0&&s.addItem(a.type,a.count);const o={world:t,player:n,inventory:s};if(e.survivalStats){const a=new Td;Object.assign(a,e.survivalStats),o.survivalStats=a}return e.quests&&(o.questData=e.quests),e.factions&&(o.factionData=e.factions),e.fastTravel&&(o.fastTravelData=e.fastTravel),e.fogOfWar&&(o.fogOfWarData=e.fogOfWar),e.loreJournal&&(o.loreJournalData=e.loreJournal),e.skillTree&&(o.skillTreeData=e.skillTree),o}async function wv(i){const t=new Blob([i]).stream().pipeThrough(new CompressionStream("gzip"));return new Response(t).blob()}async function Cv(i){const e=i.stream().pipeThrough(new DecompressionStream("gzip"));return new Response(e).text()}async function Iv(i,e="ruinwake-save.json.gz"){const t=await wv(i),n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=e,r.click(),URL.revokeObjectURL(n)}function Ov(){return new Promise((i,e)=>{const t=document.createElement("input");t.type="file",t.accept=".json.gz,.gz",t.onchange=async()=>{if(!t.files||t.files.length===0){e(new Error("No file selected"));return}const n=t.files[0],r=await Cv(n);i(r)},t.click()})}class zr{constructor({id:e,name:t,description:n,position:r,requirements:s}){this.id=e,this.name=t,this.description=n,this.position=r||{x:0,y:0,z:0},this.requirements=s,this.restored=!1}canRestore(e){for(const t of this.requirements)if(e.count(t.type)<t.count)return!1;return!0}restore(e){if(this.restored||!this.canRestore(e))return!1;for(const t of this.requirements)e.remove(t.type,t.count);return this.restored=!0,!0}}const Hr=[new zr({id:"starter_watchpost",name:"Ruined Watch-Post",description:"A crumbling frontier watch-post. Restoring it unlocks the first safe base.",position:{x:30,y:33,z:30},requirements:[{type:"wood",count:15},{type:"stone",count:10}]}),new zr({id:"roadside_hall",name:"Roadside Ranger Hall",description:"An abandoned ranger outpost along the East Road. Improves travel and trade.",position:{x:90,y:33,z:25},requirements:[{type:"wood",count:20},{type:"stone",count:15},{type:"iron_ore",count:5}]}),new zr({id:"mountain_workshop",name:"Dwarven Mountain Workshop",description:"A sealed dwarven annex in the Misty Mountains. Unlocks high-tier smithing.",position:{x:270,y:45,z:55},requirements:[{type:"stone",count:30},{type:"iron_ore",count:15},{type:"copper_ore",count:10}]}),new zr({id:"forest_beacon",name:"Mirkwood Forest Beacon",description:"An ancient grove beacon overrun by corruption. Stabilizes the Mirkwood region.",position:{x:400,y:33,z:45},requirements:[{type:"wood",count:25},{type:"relic_shard",count:5},{type:"fiber",count:15}]}),new zr({id:"ward_bastion",name:"Ward Bastion of the Last Age",description:"The final ward structure tied to the main quest. Its restoration turns the tide.",position:{x:500,y:40,z:30},requirements:[{type:"stone",count:40},{type:"iron_ore",count:20},{type:"relic_shard",count:10},{type:"lore_fragment",count:5}]})],wl={small:{radius:3,height:4,wallBlock:v.COBBLESTONE},medium:{radius:5,height:5,wallBlock:v.STONE_BRICK},large:{radius:7,height:6,wallBlock:v.STONE_BRICK}};function Dv(i,e,t="small"){const n=wl[t]||wl.small,{radius:r,height:s,wallBlock:o}=n,a=Math.floor(e.x),c=Math.floor(e.y),d=Math.floor(e.z);for(let f=-r;f<=r;f++)for(let u=-r;u<=r;u++)i.setBlock(a+f,c-1,d+u,v.COBBLESTONE);for(let f=0;f<s;f++)for(let u=-r;u<=r;u++)for(let p=-r;p<=r;p++)(Math.abs(u)===r||Math.abs(p)===r)&&(u===r&&Math.abs(p)<=1&&f<3||(f<s-1||(u+p)%3!==0)&&i.setBlock(a+u,c+f,d+p,o));const h=[[-r,-r],[-r,r],[r,-r],[r,r]];for(const[f,u]of h)for(let p=0;p<s;p++)i.setBlock(a+f,c+p,d+u,v.STONE);for(let f=-r;f<=r;f++)for(let u=-r;u<=r;u++)(Math.abs(f)>=r-1||Math.abs(u)>=r-1)&&i.setBlock(a+f,c+s,d+u,o)}function Rd(i,e,t={}){const n=t.wallBlock||v.OAK_PLANKS,r=t.roofBlock||v.PLANKS,s=t.floorBlock||v.COBBLESTONE,o=t.radius||4,a=t.height||4,c=t.bed!==!1,d=t.chest||!1,h=Math.floor(e.x),f=Math.floor(e.y),u=Math.floor(e.z),p=o+2;for(let l=-(o+1);l<=o+1;l++)for(let b=-(o+1);b<=o+1;b++)for(let T=0;T<=a+p;T++)i.setBlock(h+l,f+T,u+b,v.AIR);for(let l=-(o+1);l<=o+1;l++)for(let b=-(o+1);b<=o+1;b++)i.setBlock(h+l,f-1,u+b,v.COBBLESTONE);for(let l=-o;l<=o;l++)for(let b=-o;b<=o;b++)i.setBlock(h+l,f-1,u+b,s);for(let l=0;l<a;l++)for(let b=-o;b<=o;b++)for(let T=-o;T<=o;T++)if(Math.abs(b)===o||Math.abs(T)===o){if(b===o&&T===0&&l<2){i.setBlock(h+b,f+l,u+T,v.DOOR);continue}if(l===2&&v.GLASS&&!(Math.abs(b)===o&&Math.abs(T)===o)){if(Math.abs(b)===o&&T!==0&&Math.abs(T)<o&&T%3===0){i.setBlock(h+b,f+l,u+T,v.GLASS);continue}if(Math.abs(T)===o&&b!==0&&Math.abs(b)<o&&b%3===0){i.setBlock(h+b,f+l,u+T,v.GLASS);continue}}i.setBlock(h+b,f+l,u+T,n)}for(let l=0;l<=o;l++){const b=o-l;if(b<0)break;for(let T=-b;T<=b;T++)i.setBlock(h+T,f+a+l,u-o,n),i.setBlock(h+T,f+a+l,u+o,n)}for(let l=0;l<=o+1;l++){const b=o+1-l;if(b<0)break;for(let T=-(o+1);T<=o+1;T++)i.setBlock(h-b,f+a+l,u+T,r),b>0&&i.setBlock(h+b,f+a+l,u+T,r)}const _=h+o-1,x=u+o-1,m=f+a+o+1;for(let l=a;l<=m+1;l++)i.setBlock(_,f+l,x,v.COBBLESTONE);i.setBlock(_,m+2,x,v.COBBLESTONE),i.setBlock(h,f+2,u-o+1,v.TORCH),c&&i.setBlock(h-o+1,f,u-o+1,v.BED),d&&i.setBlock(h-o+1,f,u+o-1,v.CHEST)}function Lv(i,e,t="small"){const n={small:{radius:4,height:4,wallBlock:v.STONE_BRICK,roofBlock:v.OAK_PLANKS},medium:{radius:6,height:5,wallBlock:v.STONE_BRICK,roofBlock:v.OAK_PLANKS},large:{radius:8,height:6,wallBlock:v.STONE_BRICK,roofBlock:v.PLANKS}},r=n[t]||n.small;Rd(i,e,{wallBlock:r.wallBlock,roofBlock:r.roofBlock,floorBlock:v.STONE_BRICK,radius:r.radius,height:r.height,bed:!0,chest:!0});const s=Math.floor(e.x),o=Math.floor(e.y),a=Math.floor(e.z);i.setBlock(s+r.radius-1,o+2,a,v.TORCH),i.setBlock(s-r.radius+1,o+2,a,v.TORCH),i.setBlock(s,o+2,a+r.radius-1,v.TORCH),i.setBlock(s+r.radius-2,o,a-r.radius+1,v.WORKBENCH)}const Is=Object.freeze({WARD_LIGHT:"ward_light",HEAL_WOUND:"heal_wound",SENSE_CORRUPTION:"sense_corruption",ROOT_SNARE:"root_snare",STONE_WARD:"stone_ward",RUNE_MEND:"rune_mend",CALM_FEAR:"calm_fear"}),Pv=15;class Nv{constructor({id:e,name:t,ability:n,focusCost:r,description:s=""}){this.id=e,this.name=t,this.ability=n,this.focusCost=r,this.description=s,this.cooldown=0}canUse(e){return e>=this.focusCost&&this.cooldown<=0}}class kv{constructor(){this._equipped=null}equipRelic(e){this._equipped=e}getEquippedRelic(){return this._equipped}useRelic(e){if(!this._equipped||!this._equipped.canUse(e))return!1;const t={ability:this._equipped.ability,focusCost:this._equipped.focusCost};return this._equipped.cooldown=Pv,t}tick(e){this._equipped&&this._equipped.cooldown>0&&(this._equipped.cooldown=Math.max(0,this._equipped.cooldown-e))}}const Pn=Object.freeze({NONE:"none",MINIMAL:"minimal",BASIC:"basic",GOOD:"good",EXCELLENT:"excellent"}),Cl={[Pn.NONE]:{warmth:0,safety:0,recoveryMod:1},[Pn.MINIMAL]:{warmth:.2,safety:.2,recoveryMod:1.2},[Pn.BASIC]:{warmth:.4,safety:.4,recoveryMod:1.5},[Pn.GOOD]:{warmth:.7,safety:.7,recoveryMod:1.8},[Pn.EXCELLENT]:{warmth:1,safety:1,recoveryMod:2}},Uv=3,Fv=8;class Bv{evaluate(e,t){const n=Math.floor(t.x),r=Math.floor(t.y),s=Math.floor(t.z);let o=!1;for(let h=1;h<=Fv;h++)if(rn(e.getBlock(n,r+h,s))){o=!0;break}if(!o)return{quality:Pn.NONE,...Cl[Pn.NONE]};let a=0;const c=[[1,0],[-1,0],[0,1],[0,-1]];for(const[h,f]of c){let u=!1;for(let p=1;p<=Uv;p++)if(rn(e.getBlock(n+h*p,r,s+f*p))||rn(e.getBlock(n+h*p,r+1,s+f*p))){u=!0;break}u&&a++}let d;return a>=4?d=Pn.EXCELLENT:a>=3?d=Pn.GOOD:a>=2?d=Pn.BASIC:d=Pn.MINIMAL,{quality:d,...Cl[d]}}}const Il=Object.freeze({HISTORY:"history",INSCRIPTION:"inscription",SONG:"song",MAP_NOTE:"map_note",RELIC_VISION:"relic_vision"});class wd{constructor({id:e,title:t,text:n,category:r}){this.id=e,this.title=t,this.text=n,this.category=r}}class zv{constructor(){this._entries=new Map}addEntry(e){return this._entries.has(e.id)?!1:(this._entries.set(e.id,e),!0)}hasEntry(e){return this._entries.has(e)}getEntries(){return Array.from(this._entries.values())}getByCategory(e){return this.getEntries().filter(t=>t.category===e)}serialize(){return this.getEntries().map(e=>({id:e.id,title:e.title,text:e.text,category:e.category}))}deserialize(e){for(const t of e)this.addEntry(new wd(t))}}class Hv{constructor(){this._waypoints=new Map}unlockWaypoint(e){this._waypoints.has(e.id)||this._waypoints.set(e.id,{...e})}isUnlocked(e){return this._waypoints.has(e)}getWaypoints(){return Array.from(this._waypoints.values())}travel(e){const t=this._waypoints.get(e);return t?{...t.position}:null}serialize(){return this.getWaypoints()}deserialize(e){for(const t of e)this.unlockWaypoint(t)}}const Tn=Object.freeze({CACHE:"cache",RUIN:"ruin",RELIC_FRAGMENT:"relic_fragment",ROADSTONE:"roadstone",RECIPE_TABLET:"recipe_tablet",LORE_BOOK:"lore_book",INSCRIPTION:"inscription"});class bn{constructor({id:e,type:t,position:n,reward:r=[]}){this.id=e,this.type=t,this.position={...n},this.reward=r,this.discovered=!1}discover(){return this.discovered?!1:(this.discovered=!0,!0)}}class Gv{constructor(e){this._items=e}get(e){return this._items.find(t=>t.id===e)}findNearby(e,t){return this._items.filter(n=>!n.discovered&&En(e,n.position)<=t)}getDiscoveredCount(){return this._items.filter(e=>e.discovered).length}getTotalCount(){return this._items.length}}const Vv=[new bn({id:"cache_shire_01",type:Tn.CACHE,position:{x:15,y:33,z:10},reward:[{type:"bread",count:3}]}),new bn({id:"cache_bree_01",type:Tn.CACHE,position:{x:85,y:33,z:18},reward:[{type:"iron_ore",count:5}]}),new bn({id:"cache_mountain_01",type:Tn.CACHE,position:{x:260,y:40,z:45},reward:[{type:"copper_ore",count:8}]}),new bn({id:"lore_shire_01",type:Tn.LORE_BOOK,position:{x:10,y:33,z:5},reward:[{type:"lore_fragment",count:1}]}),new bn({id:"lore_rivendell_01",type:Tn.LORE_BOOK,position:{x:205,y:33,z:30},reward:[{type:"lore_fragment",count:2}]}),new bn({id:"relic_trollshaws_01",type:Tn.RELIC_FRAGMENT,position:{x:145,y:33,z:38},reward:[{type:"relic_shard",count:1}]}),new bn({id:"relic_mirkwood_01",type:Tn.RELIC_FRAGMENT,position:{x:410,y:33,z:45},reward:[{type:"relic_shard",count:2}]}),new bn({id:"roadstone_east_01",type:Tn.ROADSTONE,position:{x:60,y:33,z:15},reward:[{type:"stone",count:3}]}),new bn({id:"roadstone_east_02",type:Tn.ROADSTONE,position:{x:120,y:33,z:25},reward:[{type:"stone",count:3}]}),new bn({id:"inscription_dwarven_01",type:Tn.INSCRIPTION,position:{x:280,y:42,z:50},reward:[{type:"lore_fragment",count:1}]}),new bn({id:"recipe_forge_01",type:Tn.RECIPE_TABLET,position:{x:270,y:44,z:52},reward:[{type:"lore_fragment",count:1}]}),new bn({id:"cache_erebor_01",type:Tn.CACHE,position:{x:515,y:40,z:20},reward:[{type:"iron_ore",count:10}]})];function Wv(i,e){return i*(100/(100+e))}const Gr=Object.freeze({NONE:"none",POOR:"poor",DECENT:"decent",GOOD:"good",EXCELLENT:"excellent"});Gr.NONE+"",Gr.POOR+"",Gr.DECENT+"",Gr.GOOD+"",Gr.EXCELLENT+"";const yn=Object.freeze({HOSTILE:"hostile",UNFRIENDLY:"unfriendly",NEUTRAL:"neutral",FRIENDLY:"friendly",HONORED:"honored",EXALTED:"exalted"}),Xv=[{min:-1/0,max:-50,tier:yn.HOSTILE},{min:-50,max:0,tier:yn.UNFRIENDLY},{min:0,max:25,tier:yn.NEUTRAL},{min:25,max:100,tier:yn.FRIENDLY},{min:100,max:250,tier:yn.HONORED},{min:250,max:1/0,tier:yn.EXALTED}],qv={[yn.HOSTILE]:1.5,[yn.UNFRIENDLY]:1.2,[yn.NEUTRAL]:1,[yn.FRIENDLY]:.9,[yn.HONORED]:.8,[yn.EXALTED]:.7};class dr{constructor({id:e,name:t,description:n}){this.id=e,this.name=t,this.description=n}}class Yv{constructor(e){this.factions=e,this._reputation=new Map;for(const t of e)this._reputation.set(t.id,0)}getReputation(e){return this._reputation.get(e)||0}addReputation(e,t){const n=this._reputation.get(e)||0;this._reputation.set(e,n+t)}getTier(e){const t=this.getReputation(e);for(const n of Xv)if(t>=n.min&&t<n.max)return n.tier;return yn.NEUTRAL}applyRaceModifiers(e,t){for(const[n,r]of Object.entries(t))this.addReputation(n,r)}getPriceModifier(e){return qv[this.getTier(e)]||1}getAllFactions(){return this.factions}serialize(){const e={};for(const[t,n]of this._reputation)e[t]=n;return{reputation:e}}deserialize(e){for(const[t,n]of Object.entries(e.reputation))this._reputation.set(t,n)}}const Kv=[new dr({id:"road_wardens",name:"Road Wardens",description:"Frontier men who guard the old roads and trade routes between settlements."}),new dr({id:"rivendell_keepers",name:"Rivendell Keepers",description:"Remnant lorekeepers preserving ancient Elven knowledge in the hidden valley."}),new dr({id:"dwarven_crafters",name:"Dwarven Crafters",description:"Skilled dwarven smiths and miners maintaining craft enclaves near the old holds."}),new dr({id:"woodland_guardians",name:"Woodland Guardians",description:"Surviving elves and wardens who protect the forests from corruption and darkness."}),new dr({id:"beorning_wardens",name:"Beorning Wardens",description:"Wild wardens of the Anduin vale who guard the passes and shelter travelers."}),new dr({id:"goblin_horde",name:"Goblin Horde",description:"Hostile goblin and orc bands infesting the mountains and old ruins."})],Cd=[{id:"ruin_clearing",name:"Clear the Old Watchtower",description:"A ruined watchtower on the east road is infested with goblins. Clear them out to make the road safer.",objectives:[{id:"clear_goblins",description:"Defeat goblins at the watchtower",target:5}]},{id:"herb_hunt",name:"Athelas for the Healer",description:"A healer in the frontier settlement needs rare athelas herbs from the forest edge.",objectives:[{id:"gather_herbs",description:"Gather athelas plants",target:3}]},{id:"beast_hunt",name:"Wolf Pack Menace",description:"A pack of wolves has been attacking travelers near the old bridge. Thin their numbers.",objectives:[{id:"kill_wolves",description:"Defeat wolves near the bridge",target:4}]},{id:"crafting_commission",name:"Tools for the Settlement",description:"The frontier settlement needs stone tools. Craft and deliver pickaxes and axes.",objectives:[{id:"deliver_pickaxes",description:"Deliver stone pickaxes",target:2},{id:"deliver_axes",description:"Deliver stone axes",target:2}]},{id:"ore_prospecting",name:"Iron for the Forge",description:"The dwarven smiths need iron ore to repair their forge. Mine ore from the mountains.",objectives:[{id:"mine_iron",description:"Mine iron ore",target:10}]},{id:"ruin_clearing_2",name:"The Haunted Barrow",description:"An ancient barrow mound has awakened wights. Cleanse the site before corruption spreads.",objectives:[{id:"defeat_wights",description:"Defeat wights in the barrow",target:3}]},{id:"beast_hunt_spider",name:"Spider Nest in Mirkwood",description:"Giant spiders have woven webs across a forest path. Destroy them and clear the way.",objectives:[{id:"kill_spiders",description:"Defeat spiders",target:6}]},{id:"herb_hunt_mushroom",name:"Mushroom Gathering",description:"A cook needs rare mushrooms that grow near the river stones.",objectives:[{id:"gather_mushrooms",description:"Gather mushrooms",target:5}]},{id:"lore_fragments",name:"Lost Pages of the Archive",description:"Scattered lore fragments from an ancient library have been found in ruins across the region.",objectives:[{id:"collect_fragments",description:"Collect lore fragments",target:4}]},{id:"road_repair",name:"Mend the East Road",description:"Sections of the old east road have crumbled. Place stone blocks to repair the path.",objectives:[{id:"place_stones",description:"Place cobblestone on the road",target:20}]},{id:"troll_bounty",name:"The Bridge Troll",description:"A troll has claimed the old stone bridge. Defeat it to restore safe passage.",objectives:[{id:"defeat_troll",description:"Defeat the bridge troll",target:1}]},{id:"crafting_commission_armor",name:"Armor for the Wardens",description:"The road wardens need leather armor. Craft and deliver sets to their outpost.",objectives:[{id:"deliver_armor",description:"Deliver leather armor",target:3}]},{id:"herb_gathering_mirkwood",name:"Herbs of Mirkwood",description:"The Woodland Guardians need medicinal herbs that grow deep within the shadowed paths of Mirkwood.",factionId:"woodland_guardians",reward:{xp:120,items:[{id:"elven_salve",quantity:2}]},objectives:[{id:"gather_mirkwood_herbs",description:"Gather rare herbs in Mirkwood",target:8}]},{id:"goblin_camp_clear",name:"Goblin Camp Assault",description:"A goblin encampment has been established near the trade road. Destroy it before their numbers grow.",factionId:"road_wardens",reward:{xp:200,items:[{id:"iron_sword",quantity:1}]},objectives:[{id:"defeat_camp_goblins",description:"Defeat goblins in the camp",target:8},{id:"destroy_camp_tents",description:"Destroy goblin tents",target:3}]},{id:"dwarven_relic_hunt",name:"Relics of the Dwarven Halls",description:"Ancient relics from a collapsed dwarven hall are scattered across the mountain foothills. Recover them.",factionId:"dwarven_crafters",reward:{xp:180,items:[{id:"dwarven_ring",quantity:1}]},objectives:[{id:"recover_relics",description:"Recover dwarven relics",target:5}]},{id:"road_repair_bree",name:"Mend the Bree Road",description:"The road leading into Bree has deteriorated badly. Place stone and gravel to restore safe passage.",factionId:"road_wardens",reward:{xp:100,items:[{id:"stone_block",quantity:10}]},objectives:[{id:"place_gravel",description:"Place gravel on the road",target:15},{id:"place_cobblestone",description:"Place cobblestone markers",target:6}]},{id:"spider_nest_clear",name:"Purge the Spider Nest",description:"A massive spider nest threatens the southern forest paths. Burn the webs and slay the brood mother.",factionId:"woodland_guardians",reward:{xp:250,items:[{id:"spider_silk",quantity:5}]},objectives:[{id:"burn_webs",description:"Burn spider webs",target:6},{id:"defeat_brood_mother",description:"Defeat the brood mother",target:1}]},{id:"wolf_den_clear",name:"Clear the Wolf Den",description:"Wargs have established a den in the Anduin valley caves. The Beorning Wardens need help driving them out.",factionId:"beorning_wardens",reward:{xp:180,items:[{id:"wolf_pelt",quantity:3}]},objectives:[{id:"defeat_wargs",description:"Defeat wargs in the den",target:6}]},{id:"beacon_light_chain",name:"Light the Beacon Chain",description:"The old warning beacons along the road have gone dark. Climb to each summit and relight the fires.",factionId:"road_wardens",reward:{xp:160,items:[{id:"torch",quantity:5}]},objectives:[{id:"light_beacons",description:"Light beacon fires",target:4}]},{id:"lore_collection_rivendell",name:"Lost Lore of Rivendell",description:"Scattered scrolls of ancient Elven knowledge have been found in ruins. Return them to the Keepers.",factionId:"rivendell_keepers",reward:{xp:150,items:[{id:"lore_scroll",quantity:1}]},objectives:[{id:"collect_scrolls",description:"Collect Elven lore scrolls",target:6}]},{id:"smith_commission_iron",name:"Iron Commission for the Smiths",description:"The dwarven smiths need iron tools and fittings crafted to exact specifications.",factionId:"dwarven_crafters",reward:{xp:140,items:[{id:"dwarven_ingot",quantity:2}]},objectives:[{id:"craft_iron_tools",description:"Craft iron tools",target:4},{id:"deliver_fittings",description:"Deliver iron fittings",target:3}]},{id:"cook_feast_hobbit",name:"Feast Preparations",description:"A grand feast is being planned at the frontier settlement. Gather ingredients and prepare the dishes.",factionId:"road_wardens",reward:{xp:100,items:[{id:"feast_plate",quantity:1}]},objectives:[{id:"gather_ingredients",description:"Gather feast ingredients",target:10},{id:"prepare_dishes",description:"Prepare feast dishes",target:4}]},{id:"scout_mountain_pass",name:"Scout the Mountain Pass",description:"The Beorning Wardens need a scout to traverse the high mountain pass and report on enemy movements.",factionId:"beorning_wardens",reward:{xp:200,items:[{id:"climbing_rope",quantity:2}]},objectives:[{id:"reach_summit",description:"Reach the mountain summit",target:1},{id:"mark_enemy_camps",description:"Mark enemy encampments on the map",target:3}]},{id:"map_fragment_hunt",name:"The Cartographer's Request",description:"An Elven cartographer needs old map fragments to reconstruct a complete chart of the northern wilds.",factionId:"rivendell_keepers",reward:{xp:130,items:[{id:"region_map",quantity:1}]},objectives:[{id:"find_map_fragments",description:"Find map fragments in ruins",target:5}]},{id:"ruin_survey_trollshaws",name:"Survey the Trollshaws Ruins",description:"Ancient structures in the Trollshaws may hold clues about the old kingdom. Survey and document them.",factionId:"rivendell_keepers",reward:{xp:170,items:[{id:"survey_notes",quantity:1}]},objectives:[{id:"survey_ruins",description:"Survey ruin sites in the Trollshaws",target:4}]},{id:"mushroom_foraging",name:"Foraging in the Shire Woods",description:"Rare glowing mushrooms grow in the damp hollows of the Shire woods. The Guardians use them for remedies.",factionId:"woodland_guardians",reward:{xp:90,items:[{id:"glowing_mushroom",quantity:5}]},objectives:[{id:"forage_mushrooms",description:"Forage rare mushrooms",target:8}]},{id:"guard_duty_outpost",name:"Guard Duty at the Outpost",description:"The road wardens are short-staffed. Stand guard at the frontier outpost through the night and repel attackers.",factionId:"road_wardens",reward:{xp:220,items:[{id:"warden_badge",quantity:1}]},objectives:[{id:"survive_night",description:"Survive the night at the outpost",target:1},{id:"repel_attackers",description:"Repel attacking enemies",target:5}]}],hr=Object.freeze({HAND:"hand",CAMPFIRE:"campfire",WORKBENCH:"workbench",FORGE:"forge",LOOM:"loom",KITCHEN:"kitchen",RUNE_TABLE:"rune_table"}),An=Object.freeze({STONE:"stone",OIL_FLASK:"oil_flask",SMOKE_BOMB:"smoke_bomb",BAIT:"bait"});class Os{constructor({type:e,damage:t,range:n,effect:r}){this.type=e,this.damage=t,this.range=n,this.effect=r}}const $v=2;function jv(){return new Yv(Kv)}function Zv(i){return i.map(e=>new ti({id:e.id,chapter:0,name:e.name,description:e.description,objectives:e.objectives,requires:[]}))}function Qv(){const i=Zv(Cd);return new _v([...gv,...i])}function Jv(i,e){const t=e.getTotalArmor();return Wv(i,t)}function ex(i){const e=i.get("main_hand");return e&&e.weapon?e.weapon.damage:$v}const tx={[v.WORKBENCH]:hr.WORKBENCH,[v.FORGE]:hr.FORGE,[v.CAMPFIRE]:hr.CAMPFIRE,[v.KITCHEN]:hr.KITCHEN,[v.LOOM]:hr.LOOM,[v.RUNE_TABLE]:hr.RUNE_TABLE};function nx(i,e){const t=Math.floor(e.x),n=Math.floor(e.y),r=Math.floor(e.z),s=3;for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++)for(let c=-s;c<=s;c++){const d=i.getBlock(t+o,n+a,r+c),h=tx[d];if(h)return h}return null}function ix(i,e){return e?i.aggroRange*.5:i.aggroRange}An.STONE+"",new Os({type:An.STONE,damage:5,range:12,effect:null}),An.OIL_FLASK+"",new Os({type:An.OIL_FLASK,damage:15,range:10,effect:"fire"}),An.SMOKE_BOMB+"",new Os({type:An.SMOKE_BOMB,damage:0,range:8,effect:"smoke"}),An.BAIT+"",new Os({type:An.BAIT,damage:0,range:10,effect:"lure"});An.STONE,An.OIL_FLASK,An.SMOKE_BOMB,An.BAIT;const rx=5,sx=8;class ox{constructor(e){this.base=e,this._modifiers=new Map}addModifier(e,t){this._modifiers.set(e,t)}removeModifier(e){this._modifiers.delete(e)}getEffective(e=!1,t=!1){let n=this.base;for(const r of this._modifiers.values())n+=r;return e&&(n+=rx),t&&(n-=sx),Math.max(0,n)}isHiddenFrom(e,t,n=!1,r=!1){const s=this.getEffective(n,r),o=Math.min(t/5,1);return s*o>e}}const ax={wood:"🪵",stone:"🪨",fiber:"🌱",stick:"📏",clay:"🧱",iron_ore:"⛏",copper_ore:"⛏",coal:"⚫",leather:"🧴",rope:"🨢",relic_shard:"✨",lore_fragment:"📜",sand:"🏖",flint:"💎",pickaxe:"⛏",axe:"🪓",hammer:"🔨",iron_pickaxe:"⛏",copper_pickaxe:"⛏",stone_pickaxe:"⛏",stone_axe:"🪓",iron_axe:"🪓",lantern:"🏮",torch:"🔥",dagger:"🗡",iron_sword:"⚔",iron_hammer:"🔨",spear:"🔱",short_bow:"🏹",refined_bow:"🏹",sling:"💫",arrow:"➡",leather_armor:"🛡",iron_helm:"🪖",iron_chest:"🛡",shield:"🛡",cloak:"🧥",bread:"🍞",raw_meat:"🍖",cooked_meat:"🍗",berries:"🫐",mushroom:"🍄",lembas:"🍞",stew:"🍲",trail_rations:"🥪",fish:"🐟",apple:"🍎",honey:"🍯",ward_light_stone:"🌟",healing_crystal:"💎",ward_token:"🌟",bandage:"🩹",bedroll:"🛏",herb_pouch:"🌿",firestarter:"🔥",lore_scroll:"📜",map_fragment:"🗺",song_fragment:"🎶",dirt:"🟫",cobblestone:"⬜",planks:"🟨",oak_planks:"🟧",glass:"🔵",dark_stone:"⬛",marble:"⚪",thatch:"🟡",stone_brick:"🔲",chest:"🗄",workbench:"🛠",campfire:"🔥",forge:"⚒",kitchen:"🍳",loom:"🧵",gravel:"▫",raw_berries:"🫐",raw_mushroom:"🍄",herb_salad:"🥗",iron_ingot:"💠",copper_ingot:"🟠",raw_fish:"🐟",cooked_fish:"🐟",slate:"◽",birch_wood:"🪵"},cx="📦";function Vo(i){return ax[i]||cx}function Id(i,e){return i.dialogueId?e.getStatus(i.dialogueId)===tn.AVAILABLE:!1}function lx(i,e){return Id(i,e)?e.activate(i.dialogueId):!1}const dx=[{questId:"ch2_roads",objectiveId:"ch2_restore",position:{x:90,y:33,z:25},radius:15,type:"restore_site"},{questId:"ch2_roads",objectiveId:"ch2_meet_npc",position:{x:80,y:33,z:22},radius:10,type:"npc_proximity"},{questId:"ch2_roads",objectiveId:"ch2_corruption",position:{x:100,y:33,z:30},radius:20,type:"explore_area"},{questId:"ch3_records",objectiveId:"ch3_reach_rivendell",position:{x:200,y:33,z:30},radius:25,type:"reach_location"},{questId:"ch3_records",objectiveId:"ch3_learn_wards",position:{x:200,y:33,z:35},radius:10,type:"npc_proximity"},{questId:"ch3_records",objectiveId:"ch3_obtain_relic",position:{x:205,y:33,z:30},radius:8,type:"discoverable"},{questId:"ch4_mountains",objectiveId:"ch4_enter_delve",position:{x:270,y:50,z:50},radius:30,type:"reach_location"},{questId:"ch4_mountains",objectiveId:"ch4_stabilize",position:{x:270,y:45,z:55},radius:12,type:"restore_site"},{questId:"ch4_mountains",objectiveId:"ch4_defeat_boss",position:{x:265,y:50,z:45},radius:15,type:"kill_enemies"},{questId:"ch5_darkwood",objectiveId:"ch5_enter_mirkwood",position:{x:400,y:33,z:40},radius:30,type:"reach_location"},{questId:"ch5_darkwood",objectiveId:"ch5_clear_spiders",position:{x:400,y:33,z:45},radius:20,type:"kill_enemies"},{questId:"ch5_darkwood",objectiveId:"ch5_restore_beacon",position:{x:400,y:33,z:45},radius:12,type:"restore_site"},{questId:"ch6_forge",objectiveId:"ch6_reach_forge",position:{x:520,y:45,z:20},radius:25,type:"reach_location"},{questId:"ch6_forge",objectiveId:"ch6_unlock_crafting",position:{x:520,y:45,z:20},radius:12,type:"craft_at_station"},{questId:"ch6_forge",objectiveId:"ch6_discover_source",position:{x:515,y:45,z:25},radius:10,type:"discoverable"},{questId:"ch7_shadow",objectiveId:"ch7_assault",position:{x:420,y:33,z:90},radius:25,type:"reach_location"},{questId:"ch7_shadow",objectiveId:"ch7_disable_link",position:{x:420,y:33,z:90},radius:12,type:"restore_site"},{questId:"ch7_shadow",objectiveId:"ch7_defeat_champion",position:{x:425,y:33,z:95},radius:15,type:"kill_enemies"},{questId:"ch8_after",objectiveId:"ch8_celebrate",position:{x:30,y:33,z:30},radius:15,type:"reach_location"},{questId:"ch8_after",objectiveId:"ch8_explore",position:{x:0,y:33,z:0},radius:50,type:"explore_area"}];class hx{constructor(){this._triggers=dx.map(e=>({...e})),this._fired=new Set}getTriggers(){return this._triggers}checkTriggers(e){const t=[];for(const n of this._triggers){const r=`${n.questId}:${n.objectiveId}`;this._fired.has(r)||En(e,n.position)<=n.radius&&(t.push({questId:n.questId,objectiveId:n.objectiveId,type:n.type}),(n.type==="reach_location"||n.type==="explore_area")&&this._fired.add(r))}return t}}const ii=Object.freeze({FRESH:"fresh",AGING:"aging",STALE:"stale",SPOILED:"spoiled"}),ux={[ii.FRESH]:1,[ii.AGING]:.75,[ii.STALE]:.4,[ii.SPOILED]:.1};class fx{constructor(){this._items=new Map}addItem(e,t){this._items.set(e,{maxTime:t,remaining:t})}removeItem(e){this._items.delete(e)}tick(e){for(const[,t]of this._items)t.remaining=Math.max(0,t.remaining-e)}getTimeRemaining(e){const t=this._items.get(e);return t?t.remaining:1/0}getBand(e){const t=this._items.get(e);if(!t)return ii.FRESH;const n=t.remaining/t.maxTime;return n>.5?ii.FRESH:n>.25?ii.AGING:n>0?ii.STALE:ii.SPOILED}getEffectivenessMultiplier(e){return ux[this.getBand(e)]||1}}const Ds=Object.freeze({ELF:"elf",DWARF:"dwarf",HOBBIT:"hobbit",MAN:"man"}),px={[Ds.ELF]:{beauty:3,light:2},[Ds.DWARF]:{durability:3,temperature:2},[Ds.HOBBIT]:{comfort:3,food:2},[Ds.MAN]:{storage:3,defense:2}};function mx(i){return px[i]||{}}function _x(i,e){return i==="elf"&&(e===pt.FOREST||e===pt.MIRKWOOD)?1.2:1}function gx(i){return i==="dwarf"?.85:1}function vx(i){return i==="hobbit"?3:0}const xx={starter_watchpost:"Watch-Post",roadside_hall:"Ranger Hall",mountain_workshop:"Mountain Workshop",forest_beacon:"Forest Beacon",ward_bastion:"Ward Bastion"};function yx(i){const e=xx[i]||i;return{fastTravel:!0,merchant:{id:`${i}_merchant`,name:`${e} Merchant`,position:null,factionId:null,dialogue:{default:`Welcome to the restored ${e}. What would you like to trade?`}},message:"Site Restored! Benefits: fast travel, merchant, safe bed, storage.",roofBlock:v.OAK_PLANKS}}function Ex(i,e){return e?Math.ceil(i*1.5):i}function Sx(i){return .2}function Ol(i,e,t){return Math.max(e,Math.min(t,i))}const Mx=.5,Tx=3,bx=60,Ax=110;class Rx{constructor(){this.sensitivity=1,this.fov=75,this.tutorialEnabled=!0,this.isOpen=!1}setSensitivity(e){this.sensitivity=Ol(e,Mx,Tx)}setFov(e){this.fov=Ol(e,bx,Ax)}toggleTutorial(){this.tutorialEnabled=!this.tutorialEnabled}getMouseSensitivity(e){return e*this.sensitivity}toggleOpen(){this.isOpen=!this.isOpen}}class wx{constructor(){this._menuOpen=!1}setMenuOpen(e){this._menuOpen=e}isPaused(){return this._menuOpen}getEffectiveDt(e){return this._menuOpen?0:e}}class Cx{constructor(e){this._tabs=[...e],this.isOpen=!1,this.activeTab=null}get tabs(){return this._tabs}open(e){this.isOpen=!0,this.activeTab=e&&this._tabs.includes(e)?e:this._tabs[0]}close(){this.isOpen=!1,this.activeTab=null}toggle(){this.isOpen?this.close():this.open()}switchTab(e){this._tabs.includes(e)&&(this.activeTab=e)}nextTab(){const e=this._tabs.indexOf(this.activeTab);this.activeTab=this._tabs[(e+1)%this._tabs.length]}prevTab(){const e=this._tabs.indexOf(this.activeTab);this.activeTab=this._tabs[(e-1+this._tabs.length)%this._tabs.length]}}const Dl=["inventory","crafting","skills","quests","map","settings","help"];function Ix(){return[{title:"Movement",items:[{key:"WASD",desc:"Move"},{key:"Mouse",desc:"Look"},{key:"Space",desc:"Jump"},{key:"Shift",desc:"Sprint"},{key:"C",desc:"Crouch"}]},{title:"Actions",items:[{key:"LClick",desc:"Mine / Attack"},{key:"RClick",desc:"Place block"},{key:"F",desc:"Eat food"},{key:"R",desc:"Restore site"},{key:"T",desc:"Talk to NPC"},{key:"G",desc:"Guard (hold)"}]},{title:"Menus",items:[{key:"ESC",desc:"Menu (pauses game)"},{key:"Tab",desc:"Switch menu tab"},{key:"M",desc:"Toggle minimap"},{key:"V",desc:"Camera toggle"},{key:"1-8 / Scroll",desc:"Hotbar slot"},{key:"F5 / F9",desc:"Save / Load"},{key:"F4",desc:"Creative mode"}]}]}function Ox(){const i=Ix();let e='<table style="text-align:left;font-size:13px;line-height:1.6;width:100%;border-collapse:collapse">';for(const t of i){e+=`<tr><td colspan="2" style="color:#c9a84c;padding:8px 0 2px;font-weight:bold">${t.title}</td></tr>`;for(const n of t.items)e+=`<tr><td style="color:#aed581;width:100px;padding:2px 8px">${n.key}</td><td>${n.desc}</td></tr>`}return e+="</table>",e}class Dx{constructor(){this.visible=!1}toggle(){this.visible=!this.visible}shouldRender(e){return this.visible&&!e}}const he=Object.freeze({RESOURCE:"resource",TOOL:"tool",WEAPON:"weapon",ARMOR:"armor",FOOD:"food",RELIC:"relic",CONSUMABLE:"consumable",LORE:"lore"});function ue(i,e,t,n={}){return{id:i,name:e,category:t,...n}}ue("wood","Wood",he.RESOURCE),ue("stone","Stone",he.RESOURCE),ue("fiber","Plant Fiber",he.RESOURCE),ue("stick","Stick",he.RESOURCE),ue("clay","Clay",he.RESOURCE),ue("iron_ore","Iron Ore",he.RESOURCE),ue("copper_ore","Copper Ore",he.RESOURCE),ue("coal","Coal",he.RESOURCE),ue("leather","Leather",he.RESOURCE),ue("rope","Rope",he.RESOURCE),ue("relic_shard","Relic Shard",he.RESOURCE),ue("lore_fragment","Lore Fragment",he.RESOURCE),ue("dark_stone","Dark Stone",he.RESOURCE),ue("oak_planks","Oak Planks",he.RESOURCE),ue("birch_wood","Birch Wood",he.RESOURCE),ue("slate","Slate",he.RESOURCE),ue("marble","Marble",he.RESOURCE),ue("obsidian","Obsidian",he.RESOURCE),ue("crystal","Crystal",he.RESOURCE),ue("sand","Sand",he.RESOURCE),ue("flint","Flint",he.RESOURCE),ue("feather","Feather",he.RESOURCE),ue("bone","Bone",he.RESOURCE),ue("silver_ore","Silver Ore",he.RESOURCE),ue("mithril_shard","Mithril Shard",he.RESOURCE),ue("pickaxe","Pickaxe",he.TOOL,{durability:100,miningSpeed:2}),ue("axe","Axe",he.TOOL,{durability:80,miningSpeed:1.5}),ue("hammer","Hammer",he.TOOL,{durability:120}),ue("copper_pickaxe","Copper Pickaxe",he.TOOL,{durability:150,miningSpeed:2.5}),ue("iron_pickaxe","Iron Pickaxe",he.TOOL,{durability:250,miningSpeed:3.5}),ue("lantern","Lantern",he.TOOL),ue("torch","Torch",he.TOOL),ue("repair_kit","Repair Kit",he.TOOL),ue("dagger","Dagger",he.WEAPON,{damage:4}),ue("iron_sword","Iron Sword",he.WEAPON,{damage:10}),ue("iron_hammer","Iron Hammer",he.WEAPON,{damage:12}),ue("spear","Spear",he.WEAPON,{damage:8}),ue("short_bow","Short Bow",he.WEAPON,{damage:6,ranged:!0}),ue("refined_bow","Refined Bow",he.WEAPON,{damage:9,ranged:!0}),ue("sling","Sling",he.WEAPON,{damage:3,ranged:!0}),ue("copper_sword","Copper Sword",he.WEAPON,{damage:7}),ue("stone_axe","Stone Axe",he.WEAPON,{damage:5}),ue("walking_stick","Walking Stick",he.WEAPON,{damage:2}),ue("arrow","Arrow",he.WEAPON,{stackable:!0}),ue("silver_blade","Silver Blade",he.WEAPON,{damage:14}),ue("leather_armor","Leather Armor",he.ARMOR,{armor:5}),ue("iron_helm","Iron Helm",he.ARMOR,{armor:3}),ue("iron_chest","Iron Chestplate",he.ARMOR,{armor:8}),ue("iron_legs","Iron Leggings",he.ARMOR,{armor:5}),ue("iron_boots","Iron Boots",he.ARMOR,{armor:2}),ue("cloak","Cloak",he.ARMOR,{armor:1}),ue("shield","Shield",he.ARMOR,{armor:4}),ue("dwarven_plate","Dwarven Plate",he.ARMOR,{armor:12}),ue("bread","Bread",he.FOOD,{hunger:15}),ue("raw_meat","Raw Meat",he.FOOD,{hunger:5}),ue("cooked_meat","Cooked Meat",he.FOOD,{hunger:20}),ue("berries","Berries",he.FOOD,{hunger:5}),ue("mushroom","Mushroom",he.FOOD,{hunger:8}),ue("lembas","Lembas Bread",he.FOOD,{hunger:30}),ue("stew","Hearty Stew",he.FOOD,{hunger:25,buff:"stamina_regen"}),ue("trail_rations","Trail Rations",he.FOOD,{hunger:12}),ue("dried_meat","Dried Meat",he.FOOD,{hunger:10,preserved:!0}),ue("honey","Honey",he.FOOD,{hunger:8,buff:"health_regen"}),ue("fish","Fish",he.FOOD,{hunger:12}),ue("apple","Apple",he.FOOD,{hunger:7}),ue("ward_light_stone","Ward Light Stone",he.RELIC),ue("healing_crystal","Healing Crystal",he.RELIC),ue("corruption_lens","Corruption Lens",he.RELIC),ue("root_charm","Root Charm",he.RELIC),ue("stone_ward_rune","Stone Ward Rune",he.RELIC),ue("ward_token","Ward Token",he.RELIC),ue("bandage","Bandage",he.CONSUMABLE),ue("antidote","Antidote",he.CONSUMABLE),ue("firestarter","Firestarter",he.CONSUMABLE),ue("bedroll","Bedroll",he.CONSUMABLE),ue("pan","Cooking Pan",he.CONSUMABLE),ue("herb_pouch","Herb Pouch",he.CONSUMABLE),ue("satchel","Satchel",he.CONSUMABLE),ue("lock_tools","Lock Tools",he.CONSUMABLE),ue("lore_scroll","Ancient Scroll",he.LORE),ue("map_fragment","Map Fragment",he.LORE),ue("song_fragment","Song Fragment",he.LORE),ue("rune_tablet","Rune Tablet",he.LORE),ue("inscription_rubbing","Inscription Rubbing",he.LORE);nn.MAIN_HAND,nn.HEAD,nn.CHEST,nn.LEGS,nn.FEET,nn.OFF_HAND,nn.ACCESSORY;nn.MAIN_HAND+"",nn.HEAD+"",nn.CHEST+"",nn.LEGS+"",nn.FEET+"",nn.OFF_HAND+"",nn.ACCESSORY+"";class Lx{isDead(e){return e.health<=0}respawn(e,t,n){e.health=e.maxHealth*.5,e.hunger=Math.max(e.hunger,50),e.stamina=100,t.position.x=n.x,t.position.y=n.y,t.position.z=n.z}}class Px{constructor(){this.enabled=!1,this.flySpeed=yr.CREATIVE.FLY_SPEED}toggle(){this.enabled=!this.enabled}isInvincible(){return this.enabled}canFly(){return this.enabled}noHunger(){return this.enabled}}class Nx{constructor(){this._message="",this._choices=[],this._active=!1,this._state="inactive",this.selectedIndex=0,this._response=null}getState(){return this._state}isActive(){return this._active}getMessage(){return this._response||this._message}getChoices(){return this._state==="choices"?this._choices:[]}startDialogue(e,t=[]){this._message=e,this._choices=t,this._active=!0,this._state="choices",this._response=null,this.selectedIndex=0}selectChoice(e){if(this._state!=="choices"||e<0||e>=this._choices.length)return null;const t=this._choices[e];return t.response===null?(this._active=!1,this._state="inactive",null):(this._response=t.response,this._state="response",t.response)}acknowledge(){this._state==="response"&&(this._response=null,this._state="choices",this.selectedIndex=0)}selectNext(){this._state==="choices"&&this._choices.length>0&&(this.selectedIndex=Math.min(this.selectedIndex+1,this._choices.length-1))}selectPrev(){this._state==="choices"&&(this.selectedIndex=Math.max(0,this.selectedIndex-1))}dismiss(){this._active=!1,this._state="inactive",this._message="",this._choices=[],this._response=null}}const Gs=Object.freeze({STORY:"story",STANDARD:"standard",HARSH:"harsh"}),Ll={[Gs.STORY]:{hungerDrainMultiplier:.5,enemyDamageMultiplier:.6,corruptionMultiplier:.5,resourceMultiplier:1.5},[Gs.STANDARD]:{hungerDrainMultiplier:1,enemyDamageMultiplier:1,corruptionMultiplier:1,resourceMultiplier:1},[Gs.HARSH]:{hungerDrainMultiplier:1.5,enemyDamageMultiplier:1.4,corruptionMultiplier:1.5,resourceMultiplier:.7}};function kx(i){return Ll[i]||Ll[Gs.STANDARD]}function Ux(i,e){return i*(e.hungerDrainMultiplier??1)}function Fx(i,e){return i*(e.enemyDamageMultiplier??1)}const Bx={man:{road_wardens:15},elf:{rivendell_keepers:20,woodland_guardians:15},dwarf:{dwarven_crafters:25},hobbit:{road_wardens:15,beorning_wardens:10}};function zx(i){return Bx[i]||{}}const Hx={man_ranger:["surv_forager"],man_soldier:["cmb_parry"],man_scholar:["att_focus","exp_map_reveal"],elf_archer:["cmb_quick_draw"],elf_warden:["att_ward","cmb_parry"],elf_gatherer:["surv_forager","crf_yield"],dwarf_miner:["crf_yield"],dwarf_blacksmith:["crf_repair","cmb_heavy_blow"],dwarf_delver:["exp_climb","exp_map_reveal"],hobbit_burglar:["surv_hardy"],hobbit_cook:["surv_hardy","fel_trader"],hobbit_forager:["surv_forager","surv_hardy"]};function Gx(i,e){const t=`${i}_${e}`;return Hx[t]||[]}function Pl(i,e){if(!e||e.length===0)return[];const t=new Set(e),n=i.getTriggers(),r=[];for(const s of n)t.has(s.questId)&&r.push({questId:s.questId,objectiveId:s.objectiveId,x:s.position.x,z:s.position.z,label:s.objectiveId.replace(/_/g," ")});return r}const Wo={zone:{r:.35,g:.55,b:.17}};function Vx(i){const e=Math.min(1,i);return{r:.53*(1-e)+Wo.zone.r*e,g:.81*(1-e)+Wo.zone.g*e,b:.92*(1-e)+Wo.zone.b*e}}const Wx={[v.DIRT]:.4,[v.GRASS]:.4,[v.SAND]:.4,[v.CLAY]:.5,[v.GRAVEL]:.4,[v.TALL_GRASS]:.1,[v.LEAVES]:.2,[v.MUD]:.4,[v.SNOW]:.3,[v.THATCH]:.3,[v.REED]:.1,[v.WOOD]:.8,[v.BIRCH_WOOD]:.8,[v.PLANKS]:.6,[v.OAK_PLANKS]:.6,[v.STONE]:1.5,[v.COBBLESTONE]:1.2,[v.STONE_BRICK]:1.3,[v.IRON_ORE]:2,[v.COPPER_ORE]:1.8,[v.COAL_ORE]:1.5,[v.GLASS]:.3,[v.TORCH]:.1,[v.CAMPFIRE]:.5,[v.WORKBENCH]:.8,[v.FORGE]:2,[v.KITCHEN]:.6,[v.LOOM]:.5,[v.RUNE_TABLE]:1.5},Xx=1;class qx{constructor(){this._x=0,this._y=0,this._z=0,this._blockType=0,this._progress=0,this._breakTime=0,this._active=!1}isBreaking(){return this._active}getProgress(){return this._progress}getPosition(){return{x:this._x,y:this._y,z:this._z}}startBreak(e,t,n,r){this._active&&this._x===e&&this._y===t&&this._z===n||(this._x=e,this._y=t,this._z=n,this._blockType=r,this._breakTime=Wx[r]||Xx,this._progress=0,this._active=!0)}tick(e){return this._active?(this._progress+=e/this._breakTime,this._progress>=1?(this._active=!1,this._progress=0,!0):!1):!1}cancel(){this._active=!1,this._progress=0}}function Yx(i){return i===v.DOOR||i===v.DOOR_OPEN}function Nl(i,e,t,n){const r=i.getBlock(e,t,n);return r===v.DOOR?(i.setBlock(e,t,n,v.DOOR_OPEN),i.getBlock(e,t+1,n)===v.DOOR&&i.setBlock(e,t+1,n,v.DOOR_OPEN),i.getBlock(e,t-1,n)===v.DOOR&&i.setBlock(e,t-1,n,v.DOOR_OPEN),!0):r===v.DOOR_OPEN?(i.setBlock(e,t,n,v.DOOR),i.getBlock(e,t+1,n)===v.DOOR_OPEN&&i.setBlock(e,t+1,n,v.DOOR),i.getBlock(e,t-1,n)===v.DOOR_OPEN&&i.setBlock(e,t-1,n,v.DOOR),!0):!1}class Kx{constructor(){this._chests=new Map}_key(e,t,n){return`${e},${t},${n}`}_getOrCreate(e,t,n){const r=this._key(e,t,n);return this._chests.has(r)||this._chests.set(r,[]),this._chests.get(r)}addItem(e,t,n,r,s){const o=this._getOrCreate(e,t,n),a=o.find(c=>c.type===r);a?a.count+=s:o.push({type:r,count:s})}getItems(e,t,n){const r=this._key(e,t,n);return this._chests.get(r)||[]}takeItem(e,t,n,r){const s=this._key(e,t,n),o=this._chests.get(s);if(!o)return null;const a=o.findIndex(d=>d.type===r);return a===-1?null:o.splice(a,1)[0]}}const vt=v.OAK_PLANKS,vn=v.PLANKS,yt=v.COBBLESTONE,ot=v.STONE_BRICK,dn=v.MARBLE,ur=v.BIRCH_WOOD,vi=v.SLATE,Ui=v.THATCH,za=v.IRON_BLOCK,zi=v.STONE,Xo=v.LEAVES,qo=[{name:"Bag End",region:"shire",x:-5,z:-8,wallBlock:vt,roofBlock:vn,floorBlock:yt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"wood",count:10},{type:"torch",count:5},{type:"raw_berries",count:3}]},{name:"Ranger Hal's Lodge",region:"shire",x:4,z:6,wallBlock:vt,roofBlock:vn,floorBlock:yt,radius:4,height:4,bed:!0,chest:!0,npcId:"ranger_hal",chestItems:[{type:"leather",count:2},{type:"iron_ore",count:2}]},{name:"Hamfast's Farmhouse",region:"shire",x:-21,z:10,wallBlock:vt,roofBlock:Ui,floorBlock:yt,radius:4,height:3,bed:!0,chest:!0,npcId:"shire_farmer",chestItems:[{type:"fiber",count:5},{type:"wood",count:3}]},{name:"Rosie's Shop",region:"shire",x:14,z:-7,wallBlock:vt,roofBlock:vn,floorBlock:yt,radius:4,height:4,bed:!0,chest:!0,npcId:"shire_merchant",chestItems:[{type:"stone",count:5},{type:"leather",count:3},{type:"torch",count:3}]},{name:"Green Dragon Inn",region:"shire",x:25,z:15,wallBlock:vt,roofBlock:vn,floorBlock:yt,radius:5,height:5,bed:!0,chest:!0,chestItems:[{type:"cooked_meat",count:3},{type:"torch",count:4}]},{name:"Hobbit Hole – Cottons",region:"shire",x:-30,z:-15,wallBlock:vt,roofBlock:Ui,floorBlock:yt,radius:3,height:3,bed:!0,chest:!1},{name:"Hobbit Hole – Bracegirdle",region:"shire",x:-10,z:25,wallBlock:vt,roofBlock:Ui,floorBlock:yt,radius:3,height:3,bed:!0,chest:!1},{name:"Hobbit Hole – Proudfoot",region:"shire",x:35,z:-15,wallBlock:vt,roofBlock:Ui,floorBlock:yt,radius:3,height:3,bed:!0,chest:!1},{name:"The Prancing Pony",region:"bree",x:79,z:20,wallBlock:yt,roofBlock:vn,floorBlock:ot,radius:6,height:5,bed:!0,chest:!0,npcId:"old_tom",chestItems:[{type:"iron_ore",count:2},{type:"wood",count:5},{type:"cooked_meat",count:2}]},{name:"Bree Blacksmith",region:"bree",x:66,z:10,wallBlock:yt,roofBlock:vi,floorBlock:ot,radius:4,height:4,bed:!0,chest:!0,npcId:"bree_blacksmith",chestItems:[{type:"iron_ore",count:4},{type:"stone",count:5}]},{name:"Bree House – South",region:"bree",x:90,z:12,wallBlock:yt,roofBlock:vn,floorBlock:yt,radius:3,height:3,bed:!0,chest:!1},{name:"Bree House – North",region:"bree",x:72,z:34,wallBlock:yt,roofBlock:vn,floorBlock:yt,radius:3,height:3,bed:!0,chest:!1},{name:"Bree Gatehouse",region:"bree",x:65,z:20,wallBlock:ot,roofBlock:vi,floorBlock:ot,radius:3,height:5,bed:!1,chest:!1},{name:"Bree Storehouse",region:"bree",x:92,z:26,wallBlock:yt,roofBlock:vn,floorBlock:yt,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"wood",count:10},{type:"stone",count:8},{type:"fiber",count:6}]},{name:"Ranger Outpost",region:"trollshaws",x:130,z:35,wallBlock:yt,roofBlock:vn,floorBlock:yt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:5},{type:"bandage",count:2}]},{name:"Hermit Cabin",region:"trollshaws",x:150,z:45,wallBlock:vt,roofBlock:Ui,floorBlock:yt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:6},{type:"raw_berries",count:4}]},{name:"House of Elrond",region:"rivendell",x:194,z:33,wallBlock:dn,roofBlock:ur,floorBlock:dn,radius:6,height:5,bed:!0,chest:!0,npcId:"elara_lorekeeper",chestItems:[{type:"lore_fragment",count:2},{type:"relic_shard",count:1}]},{name:"Celebrin's Healing Hall",region:"rivendell",x:208,z:18,wallBlock:dn,roofBlock:ur,floorBlock:dn,radius:4,height:4,bed:!0,chest:!0,npcId:"rivendell_healer",chestItems:[{type:"fiber",count:4},{type:"raw_berries",count:5},{type:"bandage",count:3}]},{name:"Rivendell Library",region:"rivendell",x:210,z:38,wallBlock:dn,roofBlock:ur,floorBlock:ot,radius:5,height:5,bed:!1,chest:!0,chestItems:[{type:"lore_fragment",count:3}]},{name:"Rivendell Guest House",region:"rivendell",x:190,z:22,wallBlock:dn,roofBlock:ur,floorBlock:dn,radius:3,height:4,bed:!0,chest:!1},{name:"Rivendell Watchtower",region:"rivendell",x:220,z:30,wallBlock:dn,roofBlock:ot,floorBlock:dn,radius:3,height:6,bed:!1,chest:!1},{name:"Thorin's Forge",region:"misty_mountains",x:269,z:53,wallBlock:ot,roofBlock:vi,floorBlock:ot,radius:5,height:4,bed:!0,chest:!0,npcId:"thorin_smith",chestItems:[{type:"iron_ore",count:5},{type:"copper_ore",count:3}]},{name:"Dwalin's Trading Post",region:"misty_mountains",x:254,z:43,wallBlock:ot,roofBlock:vi,floorBlock:ot,radius:4,height:4,bed:!0,chest:!0,npcId:"mountain_trader",chestItems:[{type:"stone",count:8},{type:"wood",count:6}]},{name:"Mountain Shelter",region:"misty_mountains",x:280,z:60,wallBlock:zi,roofBlock:vi,floorBlock:ot,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:8},{type:"bandage",count:2}]},{name:"Dwarven Mining Camp",region:"misty_mountains",x:258,z:65,wallBlock:ot,roofBlock:vi,floorBlock:yt,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:3},{type:"coal",count:5},{type:"stone",count:10}]},{name:"Beorn's Hall",region:"anduin_vale",x:334,z:63,wallBlock:vt,roofBlock:Ui,floorBlock:yt,radius:6,height:5,bed:!0,chest:!0,npcId:"beorn_jr",chestItems:[{type:"raw_meat",count:5},{type:"leather",count:3}]},{name:"Vale Farmstead",region:"anduin_vale",x:350,z:55,wallBlock:vt,roofBlock:Ui,floorBlock:yt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:8},{type:"raw_berries",count:4}]},{name:"Carrock Watchtower",region:"anduin_vale",x:345,z:72,wallBlock:ot,roofBlock:vi,floorBlock:ot,radius:3,height:6,bed:!1,chest:!1},{name:"Elvenking Gate Post",region:"mirkwood",x:389,z:38,wallBlock:ur,roofBlock:Xo,floorBlock:yt,radius:5,height:5,bed:!0,chest:!0,npcId:"galawen_warden",chestItems:[{type:"fiber",count:8},{type:"relic_shard",count:1},{type:"rope",count:2}]},{name:"Mirkwood Ranger Camp",region:"mirkwood",x:405,z:48,wallBlock:ur,roofBlock:Xo,floorBlock:yt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:6},{type:"bandage",count:3}]},{name:"Forest Watch Platform",region:"mirkwood",x:415,z:32,wallBlock:vt,roofBlock:Xo,floorBlock:vt,radius:3,height:6,bed:!1,chest:!1},{name:"Dark Outpost",region:"dol_guldur",x:418,z:85,wallBlock:v.DARK_STONE,roofBlock:v.OBSIDIAN,floorBlock:v.CORRUPTED_STONE,radius:4,height:4,bed:!1,chest:!0,chestItems:[{type:"dark_stone",count:5},{type:"relic_shard",count:2}]},{name:"Lake-town Hall",region:"long_lake",x:465,z:28,wallBlock:vt,roofBlock:vn,floorBlock:yt,radius:5,height:4,bed:!0,chest:!0,chestItems:[{type:"wood",count:10},{type:"iron_ore",count:3}]},{name:"Fisherman's Hut",region:"long_lake",x:478,z:22,wallBlock:vt,roofBlock:vn,floorBlock:vt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:4},{type:"raw_meat",count:3}]},{name:"Dock Warehouse",region:"long_lake",x:478,z:38,wallBlock:vt,roofBlock:vn,floorBlock:yt,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"rope",count:3},{type:"wood",count:8},{type:"iron_ore",count:2}]},{name:"Front Gate Guardhouse",region:"erebor",x:514,z:18,wallBlock:ot,roofBlock:za,floorBlock:ot,radius:4,height:5,bed:!0,chest:!0,chestItems:[{type:"iron_ore",count:5},{type:"torch",count:6}]},{name:"Miriel's Observatory",region:"erebor",x:494,z:26,wallBlock:ot,roofBlock:vi,floorBlock:dn,radius:5,height:5,bed:!0,chest:!0,npcId:"sage_miriel",chestItems:[{type:"relic_shard",count:3},{type:"lore_fragment",count:2}]},{name:"Dale Marketplace",region:"erebor",x:525,z:28,wallBlock:ot,roofBlock:vn,floorBlock:ot,radius:5,height:4,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:4},{type:"leather",count:3},{type:"stone",count:6}]},{name:"Erebor Great Forge",region:"erebor",x:530,z:14,wallBlock:ot,roofBlock:za,floorBlock:ot,radius:5,height:5,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:8},{type:"copper_ore",count:5},{type:"coal",count:10}]}],$x=[{type:"line",x1:-35,z1:-20,x2:-35,z2:30,block:vt,dy:1,name:"Shire west fence"},{type:"line",x1:-35,z1:-20,x2:40,z2:-20,block:vt,dy:1,name:"Shire south fence"},{type:"line",x1:40,z1:-20,x2:40,z2:30,block:vt,dy:1,name:"Shire east fence"},{type:"line",x1:-35,z1:30,x2:40,z2:30,block:vt,dy:1,name:"Shire north fence"},{type:"line",x1:-30,z1:0,x2:40,z2:0,block:yt,dy:0,surface:!0,name:"Shire main road"},{type:"line",x1:0,z1:-18,x2:0,z2:28,block:yt,dy:0,surface:!0,name:"Shire cross road"},{type:"well",x:5,z:0,name:"Shire well"},{type:"line",x1:60,z1:8,x2:60,z2:35,block:ot,dy:1,name:"Bree west wall"},{type:"line",x1:60,z1:8,x2:60,z2:35,block:ot,dy:2,name:"Bree west wall top"},{type:"line",x1:95,z1:8,x2:95,z2:35,block:ot,dy:1,name:"Bree east wall"},{type:"line",x1:95,z1:8,x2:95,z2:35,block:ot,dy:2,name:"Bree east wall top"},{type:"line",x1:60,z1:20,x2:95,z2:20,block:yt,dy:0,surface:!0,name:"Bree main street"},{type:"well",x:80,z:20,name:"Bree well"},{type:"blocks",x:145,z:42,name:"Stone Trolls",blocks:[{dx:0,dz:0,dy:1,block:zi},{dx:0,dz:0,dy:2,block:zi},{dx:0,dz:0,dy:3,block:v.MOSSY_STONE},{dx:3,dz:1,dy:1,block:zi},{dx:3,dz:1,dy:2,block:zi},{dx:3,dz:1,dy:3,block:v.MOSSY_STONE},{dx:1,dz:3,dy:1,block:zi},{dx:1,dz:3,dy:2,block:zi},{dx:1,dz:3,dy:3,block:v.MOSSY_STONE}]},{type:"line",x1:185,z1:28,x2:195,z2:28,block:dn,dy:1,name:"Rivendell bridge"},{type:"line",x1:185,z1:28,x2:195,z2:28,block:dn,dy:0,surface:!0,name:"Rivendell bridge deck"},{type:"line",x1:190,z1:25,x2:215,z2:25,block:dn,dy:0,surface:!0,name:"Rivendell garden path"},{type:"line",x1:200,z1:20,x2:200,z2:40,block:dn,dy:0,surface:!0,name:"Rivendell main path"},{type:"blocks",x:265,z:48,name:"Mountain trail markers",blocks:[{dx:0,dz:0,dy:1,block:ot},{dx:0,dz:0,dy:2,block:v.TORCH},{dx:15,dz:5,dy:1,block:ot},{dx:15,dz:5,dy:2,block:v.TORCH},{dx:30,dz:10,dy:1,block:ot},{dx:30,dz:10,dy:2,block:v.TORCH}]},{type:"line",x1:345,z1:50,x2:360,z2:50,block:vt,dy:1,name:"Vale south fence"},{type:"line",x1:345,z1:50,x2:345,z2:60,block:vt,dy:1,name:"Vale west fence"},{type:"line",x1:360,z1:50,x2:360,z2:60,block:vt,dy:1,name:"Vale east fence"},{type:"line",x1:345,z1:60,x2:360,z2:60,block:vt,dy:1,name:"Vale north fence"},{type:"blocks",x:385,z:40,name:"Mirkwood path torches",blocks:[{dx:0,dz:0,dy:1,block:vt},{dx:0,dz:0,dy:2,block:v.TORCH},{dx:8,dz:2,dy:1,block:vt},{dx:8,dz:2,dy:2,block:v.TORCH},{dx:16,dz:4,dy:1,block:vt},{dx:16,dz:4,dy:2,block:v.TORCH},{dx:24,dz:0,dy:1,block:vt},{dx:24,dz:0,dy:2,block:v.TORCH},{dx:32,dz:-2,dy:1,block:vt},{dx:32,dz:-2,dy:2,block:v.TORCH}]},{type:"blocks",x:420,z:90,name:"Dol Guldur corrupted stones",blocks:[{dx:-5,dz:0,dy:1,block:v.CORRUPTED_STONE},{dx:5,dz:0,dy:1,block:v.CORRUPTED_STONE},{dx:0,dz:-5,dy:1,block:v.CORRUPTED_STONE},{dx:0,dz:5,dy:1,block:v.CORRUPTED_STONE},{dx:-4,dz:-3,dy:1,block:v.DARK_STONE},{dx:4,dz:-3,dy:1,block:v.DARK_STONE},{dx:-4,dz:3,dy:1,block:v.DARK_STONE},{dx:4,dz:3,dy:1,block:v.DARK_STONE}]},{type:"blocks",x:472,z:20,name:"Lake-town dock",blocks:(()=>{const i=[];for(let e=0;e<8;e++)for(let t=0;t<3;t++)i.push({dx:e,dz:t,dy:0,block:vt,surface:!0});return i.push({dx:0,dz:1,dy:-1,block:vt}),i.push({dx:7,dz:1,dy:-1,block:vt}),i})()},{type:"blocks",x:518,z:15,name:"Erebor front gate",blocks:[{dx:0,dz:0,dy:1,block:ot},{dx:0,dz:0,dy:2,block:ot},{dx:0,dz:0,dy:3,block:ot},{dx:0,dz:0,dy:4,block:ot},{dx:0,dz:4,dy:1,block:ot},{dx:0,dz:4,dy:2,block:ot},{dx:0,dz:4,dy:3,block:ot},{dx:0,dz:4,dy:4,block:ot},{dx:0,dz:1,dy:4,block:ot},{dx:0,dz:2,dy:4,block:za},{dx:0,dz:3,dy:4,block:ot},{dx:1,dz:0,dy:3,block:v.TORCH},{dx:1,dz:4,dy:3,block:v.TORCH}]},{type:"line",x1:40,z1:0,x2:60,z2:8,block:yt,dy:0,surface:!0,name:"East Road – Shire to Bree"},{type:"line",x1:95,z1:20,x2:130,z2:35,block:yt,dy:0,surface:!0,name:"East Road – Bree to Trollshaws"},{type:"line",x1:155,z1:42,x2:185,z2:32,block:yt,dy:0,surface:!0,name:"East Road – Trollshaws to Rivendell"}],jx=[{name:"Party Tree",x:0,z:12,type:"large"},{name:"Old Willow",x:-40,z:5,type:"large"},{name:"Rivendell Cedar",x:208,z:35,type:"large"},{name:"Beorn Oak",x:338,z:70,type:"large"},{name:"Mirkwood Ancient",x:395,z:35,type:"large"}],Yo=[{x:0,z:-3,block:v.WORKBENCH,dy:1,name:"Shire workbench"},{x:2,z:-3,block:v.CAMPFIRE,dy:1,name:"Shire campfire"},{x:75,z:18,block:v.FORGE,dy:1,name:"Bree forge"},{x:83,z:18,block:v.KITCHEN,dy:1,name:"Bree kitchen"},{x:205,z:30,block:v.LOOM,dy:1,name:"Rivendell loom"},{x:198,z:30,block:v.RUNE_TABLE,dy:1,name:"Rivendell rune table"},{x:275,z:55,block:v.FORGE,dy:1,name:"Mountain forge"},{x:268,z:58,block:v.WORKBENCH,dy:1,name:"Mountain workbench"},{x:340,z:58,block:v.KITCHEN,dy:1,name:"Vale kitchen"},{x:342,z:58,block:v.CAMPFIRE,dy:1,name:"Vale campfire"},{x:392,z:42,block:v.WORKBENCH,dy:1,name:"Mirkwood workbench"},{x:394,z:42,block:v.LOOM,dy:1,name:"Mirkwood loom"},{x:528,z:16,block:v.FORGE,dy:1,name:"Erebor forge"},{x:526,z:16,block:v.WORKBENCH,dy:1,name:"Erebor workbench"}];function Zx(i){return i<=26?[40,80,160]:i<=32?[80,150,60]:i<=40?[130,170,70]:i<=55?[160,150,120]:[220,220,230]}class Qx{constructor(e,t){this._getHeight=e,this._getBiome=t}worldToGrid(e,t,n){return{col:Math.floor((e-zs)/n),row:Math.floor((t-Hs)/n)}}gridToWorld(e,t,n){return{x:zs+e*n+n/2,z:Hs+t*n+n/2}}_gridDimensions(e){const t=Math.ceil((I0-zs)/e),n=Math.ceil((O0-Hs)/e);return{width:t,height:n}}getTerrainHeightGrid(e){const{width:t,height:n}=this._gridDimensions(e),r=new Int32Array(t*n);for(let s=0;s<n;s++)for(let o=0;o<t;o++){const{x:a,z:c}=this.gridToWorld(o,s,e);r[s*t+o]=this._getHeight(a,c)}return{width:t,height:n,data:r}}getBiomeGrid(e){const{width:t,height:n}=this._gridDimensions(e),r=new Array(t*n);for(let s=0;s<n;s++)for(let o=0;o<t;o++){const{x:a,z:c}=this.gridToWorld(o,s,e);r[s*t+o]=this._getBiome(a,c).type}return{width:t,height:n,data:r}}getPopulationGrid(e,t,n){const{width:r,height:s}=this._gridDimensions(n),o=new Int32Array(r*s);for(const a of e){const{col:c,row:d}=this.worldToGrid(a.x,a.z,n);c>=0&&c<r&&d>=0&&d<s&&(o[d*r+c]+=1)}for(const a of t){const{col:c,row:d}=this.worldToGrid(a.position.x,a.position.z,n);c>=0&&c<r&&d>=0&&d<s&&(o[d*r+c]+=1)}return{width:r,height:s,data:o}}getSlopeGrid(e){const t=this.getTerrainHeightGrid(e),{width:n,height:r,data:s}=t,o=new Float32Array(n*r);for(let a=0;a<r;a++)for(let c=0;c<n;c++){const d=a*n+c,h=s[d];let f=0;for(const[u,p]of[[-1,0],[1,0],[0,-1],[0,1]]){const _=a+u,x=c+p;_>=0&&_<r&&x>=0&&x<n&&(f=Math.max(f,Math.abs(s[_*n+x]-h)))}o[d]=f/e}return{width:n,height:r,data:o}}getTerrainColorMap(e){const t=this.getTerrainHeightGrid(e),{width:n,height:r,data:s}=t,o=new Uint8Array(n*r*3);for(let a=0;a<s.length;a++){const[c,d,h]=Zx(s[a]);o[a*3]=c,o[a*3+1]=d,o[a*3+2]=h}return{width:n,height:r,data:o}}getBuildingFootprints(e,t){return e.map(n=>{const{col:r,row:s}=this.worldToGrid(n.x,n.z,t);return{col:r,row:s,radius:Math.ceil(n.radius/t),name:n.name,region:n.region,hasNPC:!!n.npcId}})}getStationMarkers(e,t){return e.map(n=>{const{col:r,row:s}=this.worldToGrid(n.x,n.z,t);return{col:r,row:s,name:n.name,block:n.block}})}}const Jx=2,ey={shire:[100,200,70,40],plains:[180,200,80,30],forest:[30,130,40,40],mirkwood:[20,60,20,50],mountain:[160,160,170,30]},pr=Object.freeze({OVERVIEW:"overview",DETAIL:"detail"});class kl{constructor(e,t){this._layers=e,this._canvas=t,this._ctx=t.getContext("2d"),this._zoom=pr.OVERVIEW,this._visitedMarkers=[],this._overviewImage=null,this._overviewBiome=null}get zoom(){return this._zoom}toggleZoom(){this._zoom=this._zoom===pr.OVERVIEW?pr.DETAIL:pr.OVERVIEW}setZoom(e){this._zoom=e}addVisitedMarker(e,t,n){this._visitedMarkers.some(s=>Math.abs(s.x-e)<10&&Math.abs(s.z-t)<10)||this._visitedMarkers.push({x:e,z:t,label:n})}draw(e){const{playerPos:t,fogOfWar:n,buildings:r,npcs:s,stations:o,landmarks:a,questMarkers:c}=e,d=this._ctx,h=this._canvas.width,f=this._canvas.height;d.clearRect(0,0,h,f),this._zoom===pr.OVERVIEW?this._drawOverview(d,h,f,e):this._drawDetail(d,h,f,e)}_drawOverview(e,t,n,r){const s=Jx,{playerPos:o,fogOfWar:a,buildings:c,landmarks:d,questMarkers:h,mini:f}=r;this._overviewImage||(this._overviewImage=this._layers.getTerrainColorMap(s),this._overviewBiome=this._layers.getBiomeGrid(s));const u=this._overviewImage,p=this._overviewBiome,_=e.createImageData(u.width,u.height);for(let R=0;R<u.width*u.height;R++){let C=u.data[R*3],L=u.data[R*3+1],M=u.data[R*3+2];const E=p.data[R],O=ey[E];if(O){const W=O[3]/100;C=Math.round(C*(1-W)+O[0]*W),L=Math.round(L*(1-W)+O[1]*W),M=Math.round(M*(1-W)+O[2]*W)}if(a){const{x:W,z:H}=this._layers.gridToWorld(R%u.width,Math.floor(R/u.width),s);a.isRevealed(W,H)||(C=Math.round(C*.2),L=Math.round(L*.2),M=Math.round(M*.2))}_.data[R*4]=C,_.data[R*4+1]=L,_.data[R*4+2]=M,_.data[R*4+3]=255}const x=document.createElement("canvas");x.width=u.width,x.height=u.height,x.getContext("2d").putImageData(_,0,0),e.imageSmoothingEnabled=!1,e.drawImage(x,0,0,t,n);const m=t/u.width,l=n/u.height,b=R=>(R-zs)/s*m,T=R=>(R-Hs)/s*l;if(c){e.fillStyle="rgba(139, 90, 43, 0.6)";for(const R of c){const C=b(R.x),L=T(R.z),M=R.radius/s*m;e.fillRect(C-M,L-M,M*2,M*2)}}if(d)for(const R of d){const C=b(R.position.x),L=T(R.position.z);e.fillStyle="#c9a84c",e.beginPath(),e.moveTo(C,L-5),e.lineTo(C+4,L),e.lineTo(C,L+5),e.lineTo(C-4,L),e.closePath(),e.fill(),f||(e.font="10px monospace",e.textAlign="center",e.fillStyle="#c9a84c",e.fillText(R.name,C,L-8))}if(h){e.fillStyle="#e53935";for(const R of h){const C=b(R.x),L=T(R.z);e.beginPath(),e.arc(C,L,4,0,Math.PI*2),e.fill()}}e.fillStyle="rgba(100, 200, 255, 0.7)";for(const R of this._visitedMarkers){const C=b(R.x),L=T(R.z);e.beginPath(),e.arc(C,L,3,0,Math.PI*2),e.fill()}const S=b(o.x),D=T(o.z);e.fillStyle="#4caf50",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.arc(S,D,5,0,Math.PI*2),e.fill(),e.stroke(),f||(this._drawLegend(e,t,n),e.fillStyle="#888",e.font="11px monospace",e.textAlign="right",e.fillText("Z: Toggle zoom | M: Close",t-8,n-6))}_drawDetail(e,t,n,r){const{playerPos:s,fogOfWar:o,buildings:a,npcs:c,stations:d,questMarkers:h}=r,f=Math.floor(t/2),u=Math.floor(n/2),p=Math.floor(s.x)-f,_=Math.floor(s.z)-u,x=e.createImageData(t,n);for(let S=0;S<n;S++)for(let D=0;D<t;D++){const R=p+D,C=_+S,L=this._layers._getHeight(R,C);let[M,E,O]=ty(L);o&&!o.isRevealed(R,C)&&(M=Math.round(M*.15),E=Math.round(E*.15),O=Math.round(O*.15));const W=(S*t+D)*4;x.data[W]=M,x.data[W+1]=E,x.data[W+2]=O,x.data[W+3]=255}e.putImageData(x,0,0);const m=S=>S-p,l=S=>S-_;if(a){e.strokeStyle="rgba(139, 90, 43, 0.8)",e.lineWidth=1;for(const S of a){const D=m(S.x),R=l(S.z);D+S.radius<0||D-S.radius>t||R+S.radius<0||R-S.radius>n||e.strokeRect(D-S.radius,R-S.radius,S.radius*2,S.radius*2)}}if(c){e.fillStyle="#ffeb3b";for(const S of c){const D=m(S.position.x),R=l(S.position.z);D<0||D>t||R<0||R>n||(e.beginPath(),e.arc(D,R,3,0,Math.PI*2),e.fill())}}if(d){e.fillStyle="#ff9800";for(const S of d){const D=m(S.x),R=l(S.z);D<0||D>t||R<0||R>n||e.fillRect(D-2,R-2,4,4)}}if(h){e.fillStyle="#e53935";for(const S of h){const D=m(S.x),R=l(S.z);D<0||D>t||R<0||R>n||(e.beginPath(),e.arc(D,R,4,0,Math.PI*2),e.fill())}}e.fillStyle="rgba(100, 200, 255, 0.7)";for(const S of this._visitedMarkers){const D=m(S.x),R=l(S.z);D<0||D>t||R<0||R>n||(e.beginPath(),e.arc(D,R,3,0,Math.PI*2),e.fill())}e.strokeStyle="#4caf50",e.lineWidth=2;const b=f,T=u;e.beginPath(),e.arc(b,T,5,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(b-8,T),e.lineTo(b+8,T),e.moveTo(b,T-8),e.lineTo(b,T+8),e.stroke(),e.fillStyle="#aaa",e.font="11px monospace",e.textAlign="left",e.fillText(`x:${Math.floor(s.x)} z:${Math.floor(s.z)} y:${Math.floor(s.y)}`,8,n-6),e.textAlign="right",e.fillText("Z: Toggle zoom | M: Close",t-8,n-6)}_drawLegend(e,t,n){const r=[["Water",[40,80,160]],["Lowland",[80,150,60]],["Highland",[160,150,120]],["Snow",[220,220,230]]],s=8;let o=n-56;e.font="9px monospace",e.textAlign="left";for(const[a,[c,d,h]]of r)e.fillStyle=`rgb(${c},${d},${h})`,e.fillRect(s,o,10,10),e.fillStyle="#aaa",e.fillText(a,s+14,o+9),o+=12}}function ty(i){return i<=26?[40,80,160]:i<=32?[80,150,60]:i<=40?[130,170,70]:i<=55?[160,150,120]:[220,220,230]}const $e=16,Ul=3,Od=42,ny=[{type:v.COAL_ORE,threshold:.7,maxY:28},{type:v.COPPER_ORE,threshold:.75,maxY:24},{type:v.IRON_ORE,threshold:.8,maxY:20}];function iy(i,e,t){for(const n of ny){if(e>n.maxY)continue;if(Ua(i*.1+e*.3+Od*.1+n.type*100,t*.1+e*.3)>n.threshold)return n.type}return null}function ry(i,e){let t=i*374761+e*668265+Od*982451|0;return t=(t>>16^t)*73244475|0,t=(t>>16^t)*73244475|0,(t>>16^t)&2147483647}function Fl(i,e){return ry(i,e)/2147483647}const sy={shire:.1,forest:.3,mirkwood:.2,plains:.05};function Ha(i,e,t){return i+e*$e+t*$e*$e}function Ga(i,e,t){return`${i},${e},${t}`}function fr(i,e,t,n,r){const s=Math.floor(e/$e),o=Math.floor(t/$e),a=Math.floor(n/$e),c=(e%$e+$e)%$e,d=(t%$e+$e)%$e,h=(n%$e+$e)%$e,f=Ga(s,o,a);i[f]||(i[f]=new Uint8Array($e*$e*$e)),i[f][Ha(c,d,h)]=r}function oy(i,e){const t={},n=i*$e,r=e*$e;for(let s=0;s<$e;s++)for(let o=0;o<$e;o++){const a=n+s,c=r+o,d=qs(a,c),h=zt(a,c);xd(a,c),fr(t,a,h,c,d.surfaceBlock);for(let u=1;u<=Ul;u++)fr(t,a,h-u,c,v.DIRT);for(let u=0;u<h-Ul;u++){const p=iy(a,u,c);fr(t,a,u,c,p||v.STONE)}for(let u=C0;u>=0;u--){const p=Math.floor(u/$e),_=(u%$e+$e)%$e,x=Ga(Math.floor(a/$e),p,Math.floor(c/$e)),m=t[x],l=(a%$e+$e)%$e,b=(c%$e+$e)%$e,T=Ha(l,_,b);if(m&&m[T]===v.AIR)m[T]=v.WATER;else if(!m||m[T]!==v.AIR)break}if(Fl(a,c)<d.treeDensity){for(let _=1;_<=4;_++)fr(t,a,h+_,c,v.WOOD);const p=h+4;for(let _=-2;_<=2;_++)for(let x=-2;x<=2;x++)for(let m=0;m<=2;m++)_===0&&x===0&&m===0||Math.abs(_)+Math.abs(x)+m<=3&&fr(t,a+_,p+m,c+x,v.LEAVES)}else{const u=sy[d.type]||0,p=Fl(a,c);if(u>0&&p<u){const _=Math.floor((h+1)/$e),x=((h+1)%$e+$e)%$e,m=Ga(Math.floor(a/$e),_,Math.floor(c/$e)),l=t[m],b=(a%$e+$e)%$e,T=(c%$e+$e)%$e,S=Ha(b,x,T);(!l||l[S]===v.AIR)&&fr(t,a,h+1,c,v.TALL_GRASS)}}}return{blocks:t}}class ay{constructor(e,t={}){if(this._world=e,this._loadDistance=t.loadDistance||6,this._unloadDistance=t.unloadDistance||this._loadDistance+3,this._maxPerFrame=t.maxChunksPerFrame||4,this._cache=new Map,this._modified=new Map,this._meshDirtyChunks=new Set,this._generated=new Set,this._pending=new Set,this._lastPcx=null,this._lastPcz=null,this._worker=null,this._onProgress=t.onProgress||null,this._totalRequested=0,this._totalCompleted=0,typeof Worker<"u"&&t.useWorker!==!1)try{this._worker=new Worker(new URL(""+new URL("chunkWorker-B6MUAcIL.js",import.meta.url).href,import.meta.url),{type:"module"}),this._worker.onmessage=n=>this._onWorkerMessage(n)}catch{this._worker=null}}_cacheAndLoadColumn(e,t,n){const r=`${e},${t}`;this._cache.set(r,n.blocks),this._loadColumnFromCache(e,t),this._generated.add(r)}_loadColumnFromCache(e,t){const n=`${e},${t}`,r=this._cache.get(n);if(r)for(const[s,o]of Object.entries(r)){const a=o instanceof ArrayBuffer?new Uint8Array(o):o,[c,d,h]=s.split(",").map(Number),f=`${c},${d},${h}`,u=this._modified.get(f);let p=this._world.chunks.get(f);if(p||(p=new ka,this._world.chunks.set(f,p)),u)p.blocks.set(u);else for(let _=0;_<a.length;_++)a[_]!==0&&(p.blocks[_]=a[_]);this._meshDirtyChunks.add(f)}}consumeMeshDirtyChunks(){const e=new Set(this._meshDirtyChunks);return this._meshDirtyChunks.clear(),e}_unloadColumn(e,t){const n=`${e},${t}`,r=this._cache.get(n);if(r)for(const s of Object.keys(r)){const o=this._world.chunks.get(s);o&&(this._modified.set(s,new Uint8Array(o.blocks)),this._world.chunks.delete(s))}}_generateColumnSync(e,t){const n=`${e},${t}`;if(this._generated.has(n))return;const r=oy(e,t);this._cacheAndLoadColumn(e,t,r),this._totalCompleted++,this._onProgress&&this._onProgress(this._totalCompleted,this._totalRequested)}_requestColumnAsync(e,t){const n=`${e},${t}`;this._generated.has(n)||this._pending.has(n)||(this._pending.add(n),this._totalRequested++,this._worker.postMessage({type:"generate",cx:e,cz:t,id:n}))}_onWorkerMessage(e){const{type:t,cx:n,cz:r,blocks:s,id:o}=e.data;t==="generated"&&(this._pending.delete(o),this._cacheAndLoadColumn(n,r,{blocks:s}),this._totalCompleted++,this._onProgress&&this._onProgress(this._totalCompleted,this._totalRequested))}getProgress(){return this._totalRequested===0?1:this._totalCompleted/this._totalRequested}isLoading(){return this._pending.size>0}generateInitialChunks(e,t){const n=Math.floor(e/qe),r=Math.floor(t/qe),s=[];for(let o=-this._loadDistance;o<=this._loadDistance;o++)for(let a=-this._loadDistance;a<=this._loadDistance;a++)s.push({cx:n+o,cz:r+a});if(this._totalRequested=s.length,this._totalCompleted=0,this._worker)for(const{cx:o,cz:a}of s)this._requestColumnAsync(o,a);else for(const{cx:o,cz:a}of s)this._generateColumnSync(o,a);this._lastPcx=n,this._lastPcz=r}update(e,t){const n=Math.floor(e/qe),r=Math.floor(t/qe);if(n===this._lastPcx&&r===this._lastPcz)return;this._lastPcx=n,this._lastPcz=r;let s=0;for(let o=0;o<=this._loadDistance&&s<this._maxPerFrame;o++)for(let a=-o;a<=o&&s<this._maxPerFrame;a++)for(let c=-o;c<=o&&s<this._maxPerFrame;c++){if(Math.abs(a)!==o&&Math.abs(c)!==o)continue;const d=n+a,h=r+c,f=`${d},${h}`;if(this._generated.has(f)||this._pending.has(f)){this._cache.has(f)&&!this._isColumnLoaded(d,h)&&this._loadColumnFromCache(d,h);continue}this._worker?this._requestColumnAsync(d,h):this._generateColumnSync(d,h),s++}for(const o of this._generated){const[a,c]=o.split(",").map(Number);(Math.abs(a-n)>this._unloadDistance||Math.abs(c-r)>this._unloadDistance)&&this._unloadColumn(a,c)}}_isColumnLoaded(e,t){return this._world.chunks.has(`${e},1,${t}`)}}function cy(i,e){const t=Math.floor(e.x),n=Math.floor(e.y),r=Math.floor(e.z);return i.getBlock(t,n,r)===v.WATER}function ly(i){return i?yr.SURVIVAL.WATER_SLOWDOWN:1}const Bl=4;function dy(i){return i<=0?1:i>=Bl?0:Math.max(0,1-i/Bl)}const hy={ranger_hal:{about:"I patrol the borders of the Shire. Wolves have been bolder lately, and I've seen strange lights in the old ruins to the east. Something is stirring.",need:"There's a ruined watch-post at the edge of the wilds. If someone could restore it, we'd have a proper outpost again. You'd need wood and stone.",extra:{text:"Any survival tips?",response:"Build a shelter before nightfall — four walls and a roof. Punch grass for fiber, break dirt for materials. Stay close to camp at night."}},old_tom:{about:"Bree used to be a bustling crossroads. Now half the buildings stand empty. The East Road has fallen into disrepair and fewer travelers come each season.",need:"The old ranger hall just east of here needs restoring. It would bring trade back to this area. You'll need wood, stone, and some iron ore.",extra:{text:"What happened here?",response:"Ancient things are waking up. The wards that kept the dark things at bay — they're failing one by one. That's why the road wardens need help."}},elara_lorekeeper:{about:"Rivendell endures, though diminished. I study the old records — maps of a ward network that once protected these lands. The Elven-craft that built them is nearly forgotten.",need:"I need someone to search the archives here for records of the ward network. The knowledge is scattered, but vital if we're to understand what's awakening.",extra:{text:"Tell me about the relics",response:"The relics are fragments of ancient technology — Elven, Dwarven, Numenorean. They can heal, ward, reveal. But near corruption, they become unstable. Use them wisely."}},thorin_smith:{about:"This was a great dwarven workshop once. The forge has gone cold, the bellows rotted. But the stone is strong and the veins of ore still run deep in these mountains.",need:"Help me rebuild this workshop. I need stone, iron ore, and copper ore. With a working forge, I can craft the tools we need to push into the deeper delves.",extra:{text:"What lurks in the mountains?",response:"Goblins mostly, and worse things deeper down. There's a corrupted guardian blocking the lower passages. It was once a protector, now twisted by dark power."}},galawen_warden:{about:"Mirkwood grows darker. The ancient beacon that held corruption at bay has gone out. Without it, the spiders multiply and the forest sickens.",need:"The forest beacon must be restored. I need someone brave enough to gather wood, fiber, and relic shards to reignite it. The spiders guard the approach.",extra:{text:"Is the corruption spreading?",response:"Yes. From the south — from Dol Guldur. An old evil stirs there. The beacon, once lit, will slow its advance through the forest."}},beorn_jr:{about:"I am Grimbeorn, son of Beorn. I guard the passage between the mountains and the forest. The wild creatures grow restless — something dark disturbs them.",need:"I ask nothing for myself. But the land needs wardens. If you can clear the threats that trouble the vale, the Beornings will remember it.",extra:{text:"What is the Anduin Vale like?",response:"Rich land, good water, tall grass. Bears, eagles, and honest folk. But the shadow from Mirkwood creeps closer each season. We hold the line as we can."}},sage_miriel:{about:"I have watched ages pass. What stirs now in Dol Guldur is not the old Dark Lord — but an echo, a shadow left in the machinery of the ancient ward network.",need:"The ward bastion is the key. Restore it, and the network can be turned against the shadow. But it requires great resources and courage to reach.",extra:{text:"Can the shadow be defeated?",response:"Not destroyed — contained. The ward network was built for this. Restore the bastions, stabilize the relics, and the shadow sleeps again. That is our best hope."}}};function uy(i,e){const t=hy[i];if(!t)return[{text:"Tell me about this place",response:`${e}: I don't have much to say, traveler. Safe journeys.`},{text:"Farewell",response:null}];const n=[];return n.push({text:"Tell me about this place",response:`${e}: ${t.about}`}),n.push({text:"What do you need?",response:`${e}: ${t.need}`}),t.extra&&n.push({text:t.extra.text,response:`${e}: ${t.extra.response}`}),n.push({text:"Farewell",response:null}),n}const Ln={mainQuests:8,sitesRestored:5,discoverables:12,npcsMet:7,landmarks:10,enemyTypes:15,sideQuests:10,nightsSurvived:10,relicUsed:1,shelterBuilt:1,stationsCrafted:6};Object.keys(Ln).length;class fy{constructor(){this._completedQuests=new Set,this._restoredSites=new Set,this._discovered=new Set,this._npcs=new Set,this._landmarks=new Set,this._enemyTypes=new Set,this._sideQuests=new Set,this._stations=new Set,this.nightsSurvived=0,this._relicUsed=!1,this._shelterBuilt=!1}completeQuest(e){this._completedQuests.add(e)}restoreSite(e){this._restoredSites.add(e)}discover(e){this._discovered.add(e)}talkToNPC(e){this._npcs.add(e)}visitLandmark(e){this._landmarks.add(e)}killEnemy(e){this._enemyTypes.add(e)}completeSideQuest(e){this._sideQuests.add(e)}surviveNight(){this.nightsSurvived++}useRelic(){this._relicUsed=!0}buildShelter(){this._shelterBuilt=!0}craftAtStation(e){this._stations.add(e)}get questsCompleted(){return this._completedQuests.size}get sitesRestored(){return this._restoredSites.size}get discoverablesFound(){return this._discovered.size}get npcsMet(){return this._npcs.size}get landmarksVisited(){return this._landmarks.size}get enemyTypesKilled(){return this._enemyTypes.size}get sideQuestsCompleted(){return this._sideQuests.size}getBreakdown(){return[{label:"Main Quests",current:this._completedQuests.size,total:Ln.mainQuests},{label:"Sites Restored",current:this._restoredSites.size,total:Ln.sitesRestored},{label:"Discoverables",current:this._discovered.size,total:Ln.discoverables},{label:"NPCs Met",current:this._npcs.size,total:Ln.npcsMet},{label:"Landmarks Visited",current:this._landmarks.size,total:Ln.landmarks},{label:"Enemy Types Killed",current:this._enemyTypes.size,total:Ln.enemyTypes},{label:"Side Quests",current:this._sideQuests.size,total:Ln.sideQuests},{label:"Nights Survived",current:Math.min(this.nightsSurvived,Ln.nightsSurvived),total:Ln.nightsSurvived},{label:"Relic Used",current:this._relicUsed?1:0,total:1},{label:"Shelter Built",current:this._shelterBuilt?1:0,total:1},{label:"Crafting Stations",current:this._stations.size,total:Ln.stationsCrafted},{label:"Skill Points Spent",current:0,total:0},{label:"Faction Rep",current:0,total:0}]}getPercentage(){const t=this.getBreakdown().filter(r=>r.total>0);let n=0;for(const r of t)n+=Math.min(1,r.current/r.total);return Math.round(n/t.length*100)}}const Vi=[{id:"fresh",name:"Fresh Start",description:"Brand new game, no progress",percent:0,applyState:i=>{}},{id:"ch1_done",name:"Chapter 1 Complete",description:"Survived first night, restored watch-post, ward activated",percent:12,applyState:i=>{const{questSystem:e,inventory:t,survivalStats:n,experienceSystem:r,player:s,progress:o,factionSystem:a,getHeightAt:c}=i;e.activate("ch1_embers"),e.advanceObjective("ch1_embers","ch1_survive",1),e.advanceObjective("ch1_embers","ch1_reach_outpost",1),e.advanceObjective("ch1_embers","ch1_activate_ward",1),t.add("wood",30),t.add("stone",25),t.add("fiber",20),t.add("stick",16),t.add("coal",5),t.add("iron_ore",3),t.add("cooked_meat",5),r.addExperience(150),o.completeQuest("ch1_embers"),o.restoreSite("starter_watchpost"),o.surviveNight(),s.position.x=70,s.position.z=15,s.position.y=c(70,15)+2}},{id:"ch2_done",name:"Chapter 2 Complete",description:"Restored ranger hall, met lore NPC, investigated corruption",percent:25,applyState:i=>{Vi[1].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,factionSystem:o,getHeightAt:a}=i;e.activate("ch2_roads"),e.advanceObjective("ch2_roads","ch2_restore",1),e.advanceObjective("ch2_roads","ch2_meet_npc",1),e.advanceObjective("ch2_roads","ch2_corruption",3),t.add("iron_ore",10),t.add("copper_ore",5),t.add("leather",5),t.add("rope",3),n.addExperience(200),s.completeQuest("ch2_roads"),s.restoreSite("roadside_hall"),s.talkToNPC("old_tom");for(let c=0;c<3;c++)s.surviveNight();r.position.x=180,r.position.z=30,r.position.y=a(180,30)+2}},{id:"ch4_done",name:"Chapter 4 Complete",description:"Reached Rivendell, explored mountains, stabilized dwarven forge",percent:50,applyState:i=>{Vi[2].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o}=i;e.activate("ch3_records"),e.advanceObjective("ch3_records","ch3_reach_rivendell",1),e.advanceObjective("ch3_records","ch3_learn_wards",1),e.advanceObjective("ch3_records","ch3_obtain_relic",1),e.activate("ch4_mountains"),e.advanceObjective("ch4_mountains","ch4_enter_delve",1),e.advanceObjective("ch4_mountains","ch4_stabilize",1),e.advanceObjective("ch4_mountains","ch4_defeat_boss",1),t.add("relic_shard",8),t.add("lore_fragment",5),t.add("iron_ore",20),n.addExperience(400),s.completeQuest("ch3_records"),s.completeQuest("ch4_mountains"),s.restoreSite("mountain_workshop"),s.talkToNPC("elara_lorekeeper"),s.talkToNPC("thorin_smith");for(let a=0;a<3;a++)s.surviveNight();r.position.x=380,r.position.z=40,r.position.y=o(380,40)+2}},{id:"ch6_done",name:"Chapter 6 Complete",description:"Cleared Mirkwood, restored beacon, reached Erebor forge",percent:75,applyState:i=>{Vi[3].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o}=i;e.activate("ch5_darkwood"),e.advanceObjective("ch5_darkwood","ch5_enter_mirkwood",1),e.advanceObjective("ch5_darkwood","ch5_clear_spiders",3),e.advanceObjective("ch5_darkwood","ch5_restore_beacon",1),e.activate("ch6_forge"),e.advanceObjective("ch6_forge","ch6_reach_forge",1),e.advanceObjective("ch6_forge","ch6_unlock_crafting",1),e.advanceObjective("ch6_forge","ch6_discover_source",1),t.add("relic_shard",15),t.add("lore_fragment",10),t.add("iron_ore",30),n.addExperience(500),s.completeQuest("ch5_darkwood"),s.completeQuest("ch6_forge"),s.restoreSite("forest_beacon"),s.talkToNPC("galawen_warden"),s.talkToNPC("ranger_hal");for(let a=0;a<2;a++)s.surviveNight();r.position.x=420,r.position.z=80,r.position.y=o(420,80)+2}},{id:"ch7_done",name:"Chapter 7 Complete (Pre-Epilogue)",description:"Defeated the dark champion at Dol Guldur, ready for epilogue",percent:90,applyState:i=>{Vi[4].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o}=i;e.activate("ch7_shadow"),e.advanceObjective("ch7_shadow","ch7_assault",1),e.advanceObjective("ch7_shadow","ch7_disable_link",1),e.advanceObjective("ch7_shadow","ch7_defeat_champion",1),n.addExperience(500),s.completeQuest("ch7_shadow"),s.restoreSite("ward_bastion"),s.talkToNPC("sage_miriel"),s.useRelic(),r.position.x=30,r.position.z=30,r.position.y=o(30,30)+2}},{id:"full_100",name:"100% Complete",description:"Everything done — all quests, sites, discoverables, enemies, etc.",percent:100,applyState:i=>{Vi[5].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o}=i;e.activate("ch8_after"),e.advanceObjective("ch8_after","ch8_celebrate",1),e.advanceObjective("ch8_after","ch8_explore",1),s.completeQuest("ch8_after");const a=["cache_shire_01","cache_bree_01","cache_mountain_01","cache_erebor_01","lore_shire_01","lore_rivendell_01","relic_trollshaws_01","relic_mirkwood_01","roadstone_east_01","roadstone_east_02","inscription_dwarven_01","recipe_forge_01"];for(const h of a)s.discover(h);const c=["shire","bree","trollshaws","rivendell","misty_mountains","anduin_vale","mirkwood","long_lake","erebor","dol_guldur"];for(const h of c)s.visitLandmark(h);const d=["wolf","goblin","spider","troll","wight","guardian","construct","orc","giant_spider","shadow","barrow_wight","goblin_archer","corrupted_bear","dark_construct","wraith"];for(const h of d)s.killEnemy(h);for(const h of["ranger_hal","old_tom","elara_lorekeeper","thorin_smith","galawen_warden","beorn_jr","sage_miriel"])s.talkToNPC(h);for(let h=0;h<10;h++)s.completeSideQuest(`sq${h}`);for(;s.nightsSurvived<10;)s.surviveNight();s.buildShelter();for(const h of["hand","workbench","forge","campfire","kitchen","loom"])s.craftAtStation(h);t.add("iron_ore",50),t.add("relic_shard",20),t.add("lore_fragment",15),t.add("lembas",20),n.addExperience(1e3),r.position.x=0,r.position.z=0,r.position.y=o(0,0)+2}}],ic=document.getElementById("race-select"),Kr=document.getElementById("class-select"),py=document.getElementById("race-info"),my=document.getElementById("class-info");function Dd(){const i=Sd[ic.value];Kr.innerHTML="";for(const t of i.classIds){const n=nc[t],r=document.createElement("option");r.value=t,r.textContent=n.name,Kr.appendChild(r)}const e=i.statModifiers;py.textContent=`HP:${e.health} STA:${e.stamina} FOC:${e.focus} COR:${e.corruptionResistance}`,Ld()}function Ld(){const i=nc[Kr.value];i&&(my.textContent=`${i.passive} | ${i.activeAbility}`)}ic.addEventListener("change",Dd);Kr.addEventListener("change",Ld);Dd();let Ys=null;document.getElementById("start-btn").addEventListener("click",()=>{const i=wg({raceId:ic.value,classId:Kr.value,difficulty:document.getElementById("difficulty-select").value,worldName:document.getElementById("world-name").value,characterName:document.getElementById("character-name").value});document.getElementById("new-game").style.display="none",_y(i,Ys),Ys=null});document.getElementById("jump-btn").addEventListener("click",()=>{const i=document.getElementById("jump-menu");i.style.display=i.style.display==="none"?"block":"none";const e=document.getElementById("jump-list");e.innerHTML=Vi.map(t=>`
    <div style="padding:5px 8px;margin:2px 0;border-radius:4px;cursor:pointer;font-size:12px;color:#aed581;border:1px solid #333;background:${Ys===t.id?"#3a5a2f":"transparent"}"
         data-jump="${t.id}">
      <b>${t.name}</b> (${t.percent}%)<br>
      <span style="color:#888">${t.description}</span>
    </div>
  `).join(""),e.querySelectorAll("[data-jump]").forEach(t=>{t.addEventListener("click",()=>{Ys=t.getAttribute("data-jump"),e.querySelectorAll("[data-jump]").forEach(n=>n.style.background="transparent"),t.style.background="#3a5a2f"})})});function _y(i,e){const t=yr,n=new Rx,r=new wx,s=new Cx(Dl),o=new Dx,a=new vd,c=document.getElementById("loading-screen"),d=document.getElementById("loading-fill"),h=document.getElementById("loading-pct"),f=document.getElementById("loading-flavor"),u=["The old roads remember those who walked them...","Ancient ward-stones hum with forgotten power...","Mirkwood's shadows deepen with each passing age...","The Lonely Mountain watches over the eastern lands...","In the Shire, the hedgerows grow thick and green...","Rivendell endures, though diminished and quiet...","The Great River Anduin flows ever southward...","Old ruins hold secrets that time cannot erase..."];c.style.display="flex",f.textContent=u[Math.floor(Math.random()*u.length)];const p=(U,de)=>{const le=Math.round(U/de*100);d.style.width=`${le}%`,h.textContent=`${le}% — ${U}/${de} chunks`,U%Math.max(1,Math.floor(de/4))===0&&(f.textContent=u[Math.floor(Math.random()*u.length)])},_=new ay(a,{loadDistance:6,maxChunksPerFrame:t.CHUNKS.MAX_PER_FRAME,useWorker:!0,onProgress:p});_.generateInitialChunks(0,0);const x=!_.isLoading(),m={starter_watchpost:"small",roadside_hall:"medium",mountain_workshop:"medium",forest_beacon:"small",ward_bastion:"large"};for(const U of Hr){const de=zt(U.position.x,U.position.z);Dv(a,{x:U.position.x,y:de+1,z:U.position.z},m[U.id]||"small")}const{player:l,inventory:b,survivalStats:T,race:S,cls:D}=Cg(i),R=`${i.raceId}_${i.classId}`,C=kx(i.difficulty),L=zt(0,0);l.position.y=L+2;const M=new lg,E=new Og,O=new Zg,W=new Qg({width:t.FOG.WIDTH,height:t.FOG.HEIGHT,cellSize:t.FOG.CELL_SIZE}),H=new tv,j=new iv,re=new Sv(Rl),Z=Gx(i.raceId,i.classId);for(const U of Z)re.grantStartingUnlock(U);const se=new Mv(re),q=new rv(8),ge=new av,Ae=new hv(fv),Ce=new uv(Ae),Ze=new mv,Xe=Qv(),Q=new vv,ce=jv(),Ie=zx(i.raceId);ce.applyRaceModifiers(i.raceId,Ie);const pe=new Tv,Ge=new bv(W,Br),mt=new ox(S.statModifiers.perception||50),Ve=vx(i.raceId);Ve>0&&mt.addModifier("race_stealth",Ve);const Rt=new kv;(R==="man_scholar"||R==="elf_warden")&&Rt.equipRelic(new Nv({id:"ward_light",name:"Ward Light Stone",ability:Is.WARD_LIGHT,focusCost:10}));const It=new Bv,st=new zv,I=new Hv,sn=new Gv(Vv),lt=new fx,Qe=new qx,Oe=new Kx;let Je=null;const De=document.getElementById("chest-panel"),A=document.getElementById("chest-items");function g(U,de,le){Je={x:U,y:de,z:le},ee()}function F(){Je=null,De.style.display="none"}function ee(){if(!Je){De.style.display="none";return}De.style.display="block";const U=Oe.getItems(Je.x,Je.y,Je.z);if(U.length===0){A.innerHTML='<div style="color:#888">Empty</div>';return}A.innerHTML=U.map((de,le)=>`<div data-chest-idx="${le}" style="padding:4px 8px;cursor:pointer;border-radius:4px;color:#aed581;border:1px solid #333;margin:2px 0">${Vo(de.type)} ${de.type.replace(/_/g," ")} x${de.count}</div>`).join(""),A.onclick=de=>{const le=de.target.closest("[data-chest-idx]");if(!le||!Je)return;const Pe=parseInt(le.getAttribute("data-chest-idx")),Le=Oe.getItems(Je.x,Je.y,Je.z);if(Pe>=0&&Pe<Le.length){const Ke=Oe.takeItem(Je.x,Je.y,Je.z,Le[Pe].type);Ke&&(b.add(Ke.type,Ke.count),J=`Took ${Ke.count} ${Ke.type.replace(/_/g," ")}`,fe=1.5,ee())}}}const ie=new Lx,$=new Px,ye=new Nx,Se={x:0,y:zt(0,0)+2,z:0};b.add("map_fragment",1);const Re={man:"man",elf:"elf",dwarf:"dwarf",hobbit:"hobbit"}[i.raceId]||"man",at=new Map(Ho.map(U=>[U.id,U]));for(const U of qo){const de=zt(U.x,U.z);if(Rd(a,{x:U.x,y:de+1,z:U.z},{wallBlock:U.wallBlock,roofBlock:U.roofBlock,floorBlock:U.floorBlock,radius:U.radius,height:U.height,bed:U.bed,chest:U.chest}),U.chest&&U.chestItems){const le=U.x-U.radius+1,Pe=de+1,Le=U.z+U.radius-1;for(const Ke of U.chestItems)Oe.addItem(le,Pe,Le,Ke.type,Ke.count)}if(U.npcId){const le=at.get(U.npcId);le&&(le.position.x=U.x+U.radius+1,le.position.y=de+2,le.position.z=U.z,le.spawnPosition={...le.position},pe.addNPC(le),at.delete(U.npcId))}}for(const[,U]of at){const de=zt(Math.floor(U.position.x),Math.floor(U.position.z));U.position.y=de+2,U.spawnPosition={...U.position},pe.addNPC(U)}for(const U of $x)if(U.type==="line"){const de=U.x2-U.x1,le=U.z2-U.z1,Pe=Math.max(Math.abs(de),Math.abs(le));for(let Le=0;Le<=Pe;Le++){const Ke=Pe===0?0:Le/Pe,Tt=Math.round(U.x1+de*Ke),wt=Math.round(U.z1+le*Ke),Ot=zt(Tt,wt);U.surface?a.setBlock(Tt,Ot,wt,U.block):a.setBlock(Tt,Ot+U.dy,wt,U.block)}}else if(U.type==="well"){const de=zt(U.x,U.z);for(let le=-1;le<=1;le++)for(let Pe=-1;Pe<=1;Pe++)le===0&&Pe===0?a.setBlock(U.x,de+1,U.z,v.WATER):a.setBlock(U.x+le,de+1,U.z+Pe,v.COBBLESTONE)}else if(U.type==="blocks"){const de=zt(U.x,U.z);for(const le of U.blocks){const Pe=U.x+le.dx,Le=U.z+le.dz,Ke=le.surface?zt(Pe,Le):de;a.setBlock(Pe,Ke+le.dy,Le,le.block)}}for(const U of jx){const de=zt(U.x,U.z),le=U.type==="large"?6:4,Pe=U.type==="large"?3:2;for(let Ke=1;Ke<=le;Ke++)a.setBlock(U.x,de+Ke,U.z,v.WOOD);const Le=de+le;for(let Ke=-Pe;Ke<=Pe;Ke++)for(let Tt=-Pe;Tt<=Pe;Tt++)for(let wt=0;wt<=2;wt++){if(Ke===0&&Tt===0&&wt===0)continue;Math.sqrt(Ke*Ke+Tt*Tt)+wt*.7<=Pe+.6&&a.setBlock(U.x+Ke,Le+wt,U.z+Tt,v.LEAVES)}}for(const U of Yo){const de=zt(U.x,U.z);a.setBlock(U.x,de+U.dy,U.z,U.block)}let J="",fe=0,Fe=-1;const Ye=lv(R);for(const U of Ye)b.add(U.type,U.count);const _e=[],et=[];let je=[];const At=2,P=120;function Ee(U,de,le){et.push({position:{x:U.x+(Math.random()-.5)*.5,y:U.y+.5,z:U.z+(Math.random()-.5)*.5},type:de,count:le,lifetime:P,bobPhase:Math.random()*Math.PI*2})}let Y=42;const te=()=>(Y=Y*1103515245+12345&2147483647,Y/2147483647),Me=new Lg(te);let ve=0;const Be=new p0({antialias:!0});Be.setSize(window.innerWidth,window.innerHeight),Be.setClearColor(t.COLORS.SKY_DAY),document.body.appendChild(Be.domElement);const ct=new Eu,Gt=Tl(1);ct.fog=new Ja(t.COLORS.SKY_DAY,Gt.near,Gt.far);const tt=new wn(t.CAMERA.FOV,window.innerWidth/window.innerHeight,t.CAMERA.NEAR,t.CAMERA.FAR),on=new Cu(t.COLORS.AMBIENT_LIGHT,t.LIGHTING.AMBIENT.day);ct.add(on);const fn=new wu(t.COLORS.DIR_LIGHT,t.LIGHTING.DIRECTIONAL.day);fn.position.set(50,100,30),ct.add(fn);const qt=new Q0(ct,a);x&&(qt.update(0,0,t.CHUNKS.RENDER_DISTANCE),c.style.display="none");const es=new Wg(ct),Xn=new Kg(ct),ze=new J0(Be.domElement),ts=document.getElementById("hud"),ns=document.getElementById("crosshair");ns.style.display="block",document.getElementById("health-bar-wrap").style.display="block",document.getElementById("hotbar-bar").style.display="flex";function li(U){const de=Math.cos(U.pitch);return{x:-Math.sin(-U.yaw)*de,y:Math.sin(U.pitch),z:-Math.cos(-U.yaw)*de}}function wr(U){const de={[Et.DAWN]:t.COLORS.SKY_DAWN,[Et.DAY]:t.COLORS.SKY_DAY,[Et.DUSK]:t.COLORS.SKY_DUSK,[Et.NIGHT]:t.COLORS.SKY_NIGHT},le={[Et.DAWN]:.5,[Et.DAY]:.6,[Et.DUSK]:.35,[Et.NIGHT]:.1},Pe={[Et.DAWN]:.6,[Et.DAY]:.8,[Et.DUSK]:.4,[Et.NIGHT]:.05},Le=de[U]||t.COLORS.SKY_DAY;Be.setClearColor(Le),ct.fog.color.set(Le),on.intensity=le[U]||.6,fn.intensity=Pe[U]||.8}const di=document.getElementById("unified-menu"),Cr=di.querySelectorAll(".menu-tab");function Ai(){s.isOpen?(di.classList.add("open"),Cr.forEach(U=>{U.classList.toggle("active",U.dataset.tab===s.activeTab)}),Dl.forEach(U=>{const de=document.getElementById(`tab-content-${U}`);de&&de.classList.toggle("active",U===s.activeTab)})):di.classList.remove("open")}const is=document.getElementById("help-content");is&&(is.innerHTML=Ox()),Cr.forEach(U=>{U.addEventListener("click",()=>{s.switchTab(U.dataset.tab),Ai()})});let Ir=!1;ze.onPointerUnlock=()=>{if(Ir){Ir=!1;return}s.isOpen||(s.open(),Ai())};const rs=document.getElementById("minimap-container"),Qs=document.getElementById("minimap-canvas"),Js=document.getElementById("map-canvas-2d"),eo=document.getElementById("map-explored"),y=new Qx((U,de)=>zt(U,de),(U,de)=>qs(U,de)),N=new kl(y,Js),z=new kl(y,Qs);z.setZoom(pr.OVERVIEW);function G(U){const de=Xe.getActiveQuests().map(Pe=>Pe.id),le=Pl(Dt,de);N.draw({playerPos:U,fogOfWar:W,buildings:qo,npcs:pe.getAllNPCs(),stations:Yo,landmarks:Br,questMarkers:le}),eo.textContent=Math.round(Ge.getExploredPercentage())}const k=document.getElementById("skill-tree-nav"),oe=document.getElementById("skill-tree-nodes");function me(){const U=se.getCurrentTree();k.textContent=`${U.name} (${se.getSkillPoints()} pts) — ← ${se.currentTreeIndex+1}/${Rl.length} →`;const de=se.getNodes();oe.innerHTML=de.map((le,Pe)=>{const Le=Pe===se.selectedNodeIndex?" selected":"",Ke=le.unlocked?" unlocked":le.available?" available":" locked",Tt=le.requires.length?` (needs: ${le.requires.join(", ")})`:"";return`<div class="node${Le}${Ke}">${le.unlocked?"✓":le.available?"○":"·"} ${le.name} [${le.cost}] — ${le.description}${Tt}</div>`}).join("")}function be(){for(;H.skillPoints>0;)H.spendSkillPoint(),re.addPoints(1)}const we=document.getElementById("crafting-list"),We=document.getElementById("quest-list");function He(){const U=Ce.getAllRecipes();Ce.selectedIndex>=U.length&&(Ce.selectedIndex=Math.max(0,U.length-1));const de=Ce.getAvailableRecipes(b),le=new Set(de.map(Le=>Le.name));we.innerHTML=U.map((Le,Ke)=>{const Tt=Ke===Ce.selectedIndex?" selected":"",wt=le.has(Le.name)?" available":" unavailable",Ot=Le.inputs.map(Qt=>`${Qt.count} ${Qt.type}`).join(", "),Ri=Le.outputs.map(Qt=>`${Qt.count} ${Qt.type}`).join(", ");return`<div class="recipe${Tt}${wt}" data-idx="${Ke}">${Le.name}: ${Ot} → ${Ri}</div>`}).join("");const Pe=we.querySelector(".recipe.selected");Pe&&Pe.scrollIntoView({block:"nearest"})}function ke(){const U=Xe.getActiveQuests();if(U.length===0){const de=Xe.quests.filter(le=>Xe.getStatus(le.id)==="available");if(de.length===0){We.innerHTML='<div style="color:#888">No active quests. Explore the world!</div>';return}We.innerHTML=de.map(le=>`
        <div class="quest"><span class="quest-name">${le.name}</span> (available)<br>
        <span style="color:#888">${le.description}</span></div>
      `).join("");return}We.innerHTML=U.map(de=>{const le=de.objectives.map(Pe=>`<div class="objective${Pe.isComplete()?" complete":""}">• ${Pe.description} (${Pe.progress}/${Pe.target})</div>`).join("");return`<div class="quest"><span class="quest-name">${de.name}</span><br>${le}</div>`}).join("")}Xe.activate("ch1_embers");const dt=t.QUESTS.AUTO_ACTIVATE_SIDE_COUNT;let _t=0;for(const U of Cd){if(_t>=dt)break;Xe.activate(U.id)&&_t++}const Dt=new hx,ht=new fy;if(e){const U=Vi.find(de=>de.id===e);U&&U.applyState({questSystem:Xe,inventory:b,survivalStats:T,experienceSystem:H,player:l,progress:ht,factionSystem:ce,getHeightAt:zt})}function ft(){if(!s.isOpen||s.activeTab!=="quests")return;const U=ht.getPercentage();document.getElementById("progress-fill").style.width=`${U}%`,document.getElementById("progress-pct").textContent=`${U}% Complete`;const de=ht.getBreakdown().filter(le=>le.total>0);document.getElementById("progress-list").innerHTML=de.map(le=>{const Pe=le.current>=le.total;return`<div style="color:${Pe?"#6a6":"#aaa"}">${Pe?"✓":"○"} ${le.label}: ${le.current}/${le.total}</div>`}).join("")}let Ue=performance.now(),Ut=!1;function gt(U){requestAnimationFrame(gt);const de=Math.min((U-Ue)/1e3,.1);Ue=U;const le=de*t.SURVIVAL.GAME_TIME_SCALE,Pe=r.getEffectiveDt(le);if(M.tick(Pe),ie.isDead(T)&&!$.enabled){document.getElementById("death-screen").style.display="flex",ze.consumeKeyPress("Enter")&&(ie.respawn(T,l,Se),document.getElementById("death-screen").style.display="none"),wr(M.getPhase()),Be.render(ct,tt);return}ze.consumeKeyPress("F4")&&($.toggle(),J=$.enabled?"Creative Mode ON — fly with Space/Shift, invincible":"Creative Mode OFF",fe=t.DIALOGUE.SHORT_DURATION);const Le=qs(l.position.x,l.position.z);T.setBiomeTemperature(Le.type),O.tick(Pe),$.noHunger()||T.tick(Ux(Pe,C)),W.reveal(l.position.x,l.position.z,t.FOG.REVEAL_RADIUS);for(const w of Br){const K=l.position.x-w.position.x,Te=l.position.z-w.position.z;Math.sqrt(K*K+Te*Te)<w.radius*.5&&N.addVisitedMarker(w.position.x,w.position.z,w.name)}ze.consumeKeyPress("Escape")&&(Je?F():(s.toggle(),Ai(),s.isOpen||Be.domElement.requestPointerLock())),s.isOpen&&ze.consumeKeyPress("Tab")&&(s.nextTab(),Ai()),!s.isOpen&&ze.consumeKeyPress("KeyM")&&o.toggle();const Ke=s.isOpen||!!Je;ze.menuOpen=Ke,r.setMenuOpen(Ke),Ke&&document.pointerLockElement&&(Ir=!0,document.exitPointerLock());for(const w of Br)Cs(l.position,w.position,w.radius)&&ht.visitLandmark(w.id);if(ze.locked){const w=ze.consumeMouse(),K=n.getMouseSensitivity(t.CAMERA.MOUSE_SENSITIVITY);l.yaw+=w.dx*K,l.pitch-=w.dy*K,l.pitch=Math.max(-t.CAMERA.MAX_PITCH,Math.min(t.CAMERA.MAX_PITCH,l.pitch))}ze.consumeKeyPress("KeyV")&&l.toggleCamera(),l.setCrouch(!!ze.keys.KeyC),E.setGuard(!!ze.keys.KeyG);for(let w=0;w<8;w++)ze.consumeKeyPress(`Digit${w+1}`)&&q.selectSlot(w);const Tt=ze.consumeScroll();Tt>0?q.scrollNext():Tt<0&&q.scrollPrev();const Ot=b.getItems().filter(w=>Na[w.type]!==void 0);for(let w=0;w<Math.min(Ot.length,8);w++)q.setSlot(w,{type:Ot[w].type,count:Ot[w].count});for(let w=Ot.length;w<8;w++)q.clearSlot(w);if(be(),ge.tick(Pe),Ze.tick(Pe),s.isOpen){const w=s.activeTab,K=nx(a,l.position);if(Ce.setStation(K),w==="inventory"){const Te=document.getElementById("inventory-grid");let Ne="";const rt=b.size||36;for(let Nt=0;Nt<rt;Nt++){const kt=b.getSlot?b.getSlot(Nt):null,Jt=kt?Vo(kt.type):"",Ki=kt?kt.type.replace(/_/g," "):"",Or=kt?kt.count:"";Ne+=`<div data-inv-slot="${Nt}" style="width:56px;height:56px;background:rgba(30,30,40,0.8);border:2px solid #444;border-radius:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;${Fe===Nt?"border-color:#c9a84c;background:rgba(60,60,20,0.5)":""}">
            <div style="font-size:20px;line-height:1">${Jt}</div>
            <div style="font-size:8px;color:#aaa;overflow:hidden;max-width:52px;text-align:center;white-space:nowrap">${Ki}</div>
            <div style="font-size:9px;color:#888">${Or}</div>
          </div>`}Te.innerHTML=Ne,Te.onclick=Nt=>{const kt=Nt.target.closest("[data-inv-slot]");if(!kt)return;const Jt=parseInt(kt.getAttribute("data-inv-slot"));Fe===-1?Fe=Jt:(b.moveSlot&&b.moveSlot(Fe,Jt),Fe=-1)};const Kt=ce.getAllFactions().map(Nt=>{const kt=ce.getReputation(Nt.id),Jt=ce.getTier(Nt.id);return`<div><span style="color:#c9a84c">${Nt.name}</span> <span style="color:#888">${Jt} (${kt})</span></div>`}).join("");document.getElementById("inventory-extra").innerHTML='<div style="border-top:1px solid #444;padding-top:6px;color:#aaa;font-size:11px;margin-top:4px">Factions</div>'+Kt}if(w==="crafting"&&(He(),ze.consumeKeyPress("ArrowDown")&&(Ce.selectNext(),He()),ze.consumeKeyPress("ArrowUp")&&(Ce.selectPrev(),He()),ze.consumeKeyPress("Enter")&&Ce.craftSelected(b)&&He()),w==="skills"&&(me(),ze.consumeKeyPress("ArrowRight")&&(se.nextTree(),me()),ze.consumeKeyPress("ArrowLeft")&&(se.prevTree(),me()),ze.consumeKeyPress("ArrowDown")&&(se.selectedNodeIndex++,me()),ze.consumeKeyPress("ArrowUp")&&(se.selectedNodeIndex=Math.max(0,se.selectedNodeIndex-1),me()),ze.consumeKeyPress("Enter")&&(se.unlockSelected(),me())),w==="quests"&&(ke(),ft()),w==="map"&&(G(l.position),ze.consumeKeyPress("KeyZ")&&N.toggleZoom()),w==="settings"){const Te=document.getElementById("settings-content");Te.innerHTML=`
          <div style="margin:8px 0">
            <label style="color:#aaa">Camera Sensitivity: <span id="sens-val">${n.sensitivity.toFixed(1)}x</span></label><br>
            <input type="range" id="sens-slider" min="0.5" max="3.0" step="0.1" value="${n.sensitivity}" style="width:100%;margin-top:4px;accent-color:#c9a84c">
          </div>
          <div style="margin:12px 0">
            <label style="color:#aaa">FOV: <span id="fov-val">${n.fov}</span></label><br>
            <input type="range" id="fov-slider" min="60" max="110" step="1" value="${n.fov}" style="width:100%;margin-top:4px;accent-color:#c9a84c">
          </div>
          <div style="margin:12px 0">
            <label style="color:#aaa"><input type="checkbox" id="tutorial-toggle" ${n.tutorialEnabled?"checked":""}> Tutorial reminders</label>
          </div>
        `,document.getElementById("sens-slider").addEventListener("input",Ne=>{n.setSensitivity(parseFloat(Ne.target.value)),document.getElementById("sens-val").textContent=n.sensitivity.toFixed(1)+"x"}),document.getElementById("fov-slider").addEventListener("input",Ne=>{n.setFov(parseInt(Ne.target.value)),document.getElementById("fov-val").textContent=n.fov,tt.fov=n.fov,tt.updateProjectionMatrix()}),document.getElementById("tutorial-toggle").addEventListener("change",()=>{n.toggleTutorial()})}}const Ri=s.isOpen&&s.activeTab==="map";if(o.shouldRender(Ri)){rs.style.display="block";const w=Xe.getActiveQuests().map(Te=>Te.id),K=Pl(Dt,w);z.draw({playerPos:l.position,fogOfWar:W,buildings:qo,npcs:pe.getAllNPCs(),stations:Yo,landmarks:Br,questMarkers:K,mini:!0})}else rs.style.display="none";if(ze.consumeKeyPress("KeyT")&&!ye.isActive()){const w=Go(pe,l.position,t.NPC.INTERACT_RANGE);if(w){const K=w.getDialogue(Xe),Te=[];if(Id(w,Xe)&&Te.push({text:"Accept quest",response:null,action:"accept_quest",npcId:w.id}),w.trades&&w.trades.length>0)for(const Ne of w.trades){const rt=b.count(Ne.give.type)>=Ne.give.count,Kt=`Trade ${Ne.give.count} ${Ne.give.type.replace(/_/g," ")} → ${Ne.receive.count} ${Ne.receive.type.replace(/_/g," ")}${rt?"":" (need more)"}`;Te.push({text:Kt,response:rt?`Traded! Received ${Ne.receive.count} ${Ne.receive.type.replace(/_/g," ")}.`:"You don't have enough to trade.",action:rt?"trade":null,trade:Ne})}Te.push(...uy(w.id,w.name)),ye.startDialogue(`${w.name}: ${K}`,Te),ht.talkToNPC(w.id),Xe.advanceObjective("ch2_roads","ch2_meet_npc",1)}}if(ye.isActive()){const w=document.getElementById("dialogue-panel");w.style.display="block";const K=ye.getState();document.getElementById("dialogue-message").innerHTML=ye.getMessage();const Te=ye.getChoices();if(K==="choices"){if(document.getElementById("dialogue-choices").innerHTML=Te.map((Ne,rt)=>`<div style="${rt===ye.selectedIndex?"color:#c9a84c;":"color:#888;"}cursor:pointer;padding:3px 0">${rt===ye.selectedIndex?"▸ ":"  "}${Ne.text}</div>`).join(""),ze.consumeKeyPress("ArrowDown")&&ye.selectNext(),ze.consumeKeyPress("ArrowUp")&&ye.selectPrev(),ze.consumeKeyPress("Enter")){const Ne=Te[ye.selectedIndex];if(Ne&&Ne.action==="accept_quest"){const rt=Go(pe,l.position,t.NPC.INTERACT_RANGE);rt&&lx(rt,Xe),ye.dismiss(),J="Quest accepted!",fe=t.DIALOGUE.SHORT_DURATION}else if(Ne&&Ne.action==="trade"&&Ne.trade){const rt=Ne.trade;b.remove(rt.give.type,rt.give.count)&&(b.add(rt.receive.type,rt.receive.count),ye.dismiss(),J=`Traded! Received ${rt.receive.count} ${rt.receive.type.replace(/_/g," ")}`,fe=t.DIALOGUE.SHORT_DURATION)}else ye.selectChoice(ye.selectedIndex)}}else K==="response"&&(document.getElementById("dialogue-choices").innerHTML='<div style="color:#666;padding:6px 0;font-style:italic">Press Enter to continue...</div>',ze.consumeKeyPress("Enter")&&ye.acknowledge());(ze.consumeKeyPress("Escape")||ze.consumeKeyPress("KeyT"))&&ye.dismiss()}else document.getElementById("dialogue-panel").style.display="none";if(fe>0&&(fe-=de,fe<=0&&(J="")),ze.consumeKeyPress("F5"))try{const w=Av(a,l,b,{survivalStats:T,quests:Xe,factions:ce,fastTravel:I,fogOfWar:W,loreJournal:st,skillTree:re});Iv(w).then(()=>{J="Game saved!",fe=t.DIALOGUE.SAVE_FEEDBACK_DURATION}).catch(()=>{J="Save failed!",fe=t.DIALOGUE.SAVE_FEEDBACK_DURATION})}catch{J="Save failed!",fe=t.DIALOGUE.SAVE_FEEDBACK_DURATION}if(ze.consumeKeyPress("F9")&&Ov().then(w=>{const K=Rv(w);a.restoreFrom(K.world),Object.assign(l.position,K.player.position),l.velocity=K.player.velocity,l.yaw=K.player.yaw,l.pitch=K.player.pitch,l.onGround=K.player.onGround;for(const Te of b.getItems())b.remove(Te.type,Te.count);for(const Te of K.inventory.getItems())b.add(Te.type,Te.count);K.survivalStats&&Object.assign(T,K.survivalStats),K.questData&&Xe.deserialize(K.questData),K.factionData&&ce.deserialize(K.factionData),K.fastTravelData&&I.deserialize(K.fastTravelData),K.fogOfWarData&&W.deserialize(K.fogOfWarData),K.loreJournalData&&st.deserialize(K.loreJournalData),K.skillTreeData&&re.deserialize(K.skillTreeData);for(const Te of qt.meshes.keys())qt.dirty.add(Te);J="Game loaded!",fe=t.DIALOGUE.SAVE_FEEDBACK_DURATION}).catch(()=>{J="Load failed!",fe=t.DIALOGUE.SAVE_FEEDBACK_DURATION}),ze.consumeKeyPress("KeyF")&&Ev(b,T,Ze),ze.consumeKeyPress("KeyX")){const w=Le.type===pt.MIRKWOOD,K=Rt.useRelic(T.focus);if(K){ht.useRelic();const Te=Ex(K.focusCost,w);if(T.focus=Math.max(0,T.focus-Te),K.ability===Is.HEAL_WOUND?(T.health=Math.min(T.maxHealth,T.health+20),J="Healing light surrounds you..."):K.ability===Is.WARD_LIGHT?(ge.reduceFear(30),J="A warm light pushes back the darkness."):K.ability===Is.CALM_FEAR?(ge.reduceFear(50),J="A calm washes over you."):J=`Used: ${Rt.getEquippedRelic().name}`,w){J="The corruption resists your power... "+J;const Ne=Sx();if(Math.random()<Ne){const rt=Me.spawn(l.position,Le.type);rt&&_e.push(rt)}}fe=t.DIALOGUE.SHORT_DURATION}else Rt.getEquippedRelic()&&(J=Rt.getEquippedRelic().cooldown>0?"Relic on cooldown":"Not enough focus",fe=t.DIALOGUE.SAVE_FEEDBACK_DURATION)}Rt.tick(Pe);const Qt=sn.findNearby(l.position,5);for(const w of Qt)if(w.discover()){for(const K of w.reward)b.add(K.type,K.count);H.addExperience(t.QUESTS.XP_DISCOVERY,"exploration"),(w.type==="lore_book"||w.type==="inscription")&&st.addEntry(new wd({id:w.id,title:w.id.replace(/_/g," "),text:`Found near ${Math.floor(w.position.x)}, ${Math.floor(w.position.z)}`,category:w.type==="lore_book"?Il.HISTORY:Il.INSCRIPTION})),ht.discover(w.id),J=`Discovered: ${w.type.replace(/_/g," ")}!`,fe=t.DIALOGUE.SHORT_DURATION}for(const w of Hr)w.restored&&!I.isUnlocked(w.id)&&I.unlockWaypoint({id:w.id,name:w.name,position:{...w.position}});const Pd=It.evaluate(a,l.position),Nd=mx(Re);Pd.warmth+(Nd.temperature||0)*.1,lt.tick(Pe);const qn=ze.getMovementInput();if($.canFly()){const w=li(l),K=$.flySpeed*de;qn.forward&&(l.position.x+=w.x*K,l.position.y+=w.y*K,l.position.z+=w.z*K),qn.back&&(l.position.x-=w.x*K,l.position.y-=w.y*K,l.position.z-=w.z*K),qn.left&&(l.position.x+=w.z*K,l.position.z-=w.x*K),qn.right&&(l.position.x-=w.z*K,l.position.z+=w.x*K),ze.getJump()&&(l.position.y+=K),ze.keys.ShiftLeft&&(l.position.y-=K),l.velocity.y=0}else{const w=_x(i.raceId,Le.type),K=T.getFractureSpeedMultiplier(),Te=cy(a,l.position),Ne=ly(Te),rt=Math.floor(l.position.x),Kt=Math.floor(l.position.z),Nt=zt(rt,Kt);let kt=1;if(qn.forward||qn.right){const an=Math.cos(l.yaw),wi=Math.sin(l.yaw),eh=Math.floor(l.position.x+wi*2),th=Math.floor(l.position.z+an*2),nh=zt(eh,th),ih=Math.abs(nh-Nt);kt=dy(ih)}if(ze.keys.ShiftLeft&&qn.forward&&!l.crouching&&T.stamina>0){const an=l.moveSpeed,wi=gx(i.raceId);l.moveSpeed*=t.SURVIVAL.SPRINT_MULTIPLIER*wi*w*K*Ne*kt,l.applyMovementInput(qn,de),l.moveSpeed=an,T.applySprint(Pe)}else{const an=l.moveSpeed;l.moveSpeed*=w*K*Ne*kt,l.applyMovementInput(qn,de),l.moveSpeed=an}if(Te){const an=R0(l.position.x,l.position.z);an&&(l.position.x+=an.x*de,l.position.z+=an.z*de)}ze.getJump()&&l.onGround&&(l.velocity.y=t.PHYSICS.JUMP_VELOCITY,l.onGround=!1);const Ki=l.velocity.y,Or=l.onGround;N0(l,de),U0(l,a,de),!Or&&l.onGround&&Ki<0&&T.checkFallFracture(Ki)}dv(l.position,t.WORLD.BOUNDARY_EXTENT);const to=li(l),rc={x:l.position.x,y:l.position.y+t.CAMERA.FIRST_PERSON_EYE_HEIGHT,z:l.position.z};if(ze.locked&&ze.consumeRightClick()){const w=ml(a,rc,to,6);if(w){const K=a.getBlock(w.blockPos.x,w.blockPos.y,w.blockPos.z);if(K===v.DOOR||K===v.DOOR_OPEN)Nl(a,w.blockPos.x,w.blockPos.y,w.blockPos.z)&&(qt.markDirty(w.blockPos.x,w.blockPos.y,w.blockPos.z),qt.markDirty(w.blockPos.x,w.blockPos.y+1,w.blockPos.z),qt.markDirty(w.blockPos.x,w.blockPos.y-1,w.blockPos.z));else if(K===v.CHEST)g(w.blockPos.x,w.blockPos.y,w.blockPos.z);else{const Te=q.getSelectedItem(),Ne=Te?Te.type:null;if(Ne&&Na[Ne]!==void 0){const rt=w.blockPos.x+w.normal.x,Kt=w.blockPos.y+w.normal.y,Nt=w.blockPos.z+w.normal.z;tg(a,b,rt,Kt,Nt,Ne)&&qt.markDirty(rt,Kt,Nt)}}}}if(ve+=Pe,ve>=10){ve=0;const w=_e.filter(Te=>!Te.isDead()).length,K=Me.trySpawn({phase:M.getPhase(),playerPos:l.position,existingCount:w,getHeight:(Te,Ne)=>zt(Te,Ne)});_e.push(...K)}const kd=(w,K)=>zt(w,K);for(const w of _e)if(!w.isDead()){const K=w.aggroRange;w.aggroRange=ix(w,l.crouching),w.updateAI(l.position,de,kd,a),w.aggroRange=K}if(M.getPhase()===Et.NIGHT&&ge.addFear(Pe*.5),!$.isInvincible()){for(const w of _e)if(!w.isDead()&&w.canAttack(l.position)){let K=w.performAttack();K=Fx(K,C),E._guarding&&(K*=.5),K=Jv(K,j),T.takeDamage(K)}}if(ze.locked&&ze.keys.mouseLeft){const w=ml(a,rc,to,6);if(w){const{x:K,y:Te,z:Ne}=w.blockPos,rt=a.getBlock(K,Te,Ne);if(Yx(rt))ze.consumeLeftClick()&&Nl(a,K,Te,Ne)&&(qt.markDirty(K,Te,Ne),qt.markDirty(K,Te+1,Ne),qt.markDirty(K,Te-1,Ne));else if(Qe.startBreak(K,Te,Ne,rt),Qe.tick(de)){const Kt=j.get("main_hand");let Nt=Kt&&Kt.toolType||null;if(!Nt){const kt=["iron_pickaxe","copper_pickaxe","stone_pickaxe","pickaxe"];for(const Jt of kt)if(b.count(Jt)>0){Nt="pickaxe";break}}if(E0(rt,Nt)){const kt=x0(rt);a.setBlock(K,Te,Ne,0);for(const Jt of kt)Ee({x:K,y:Te,z:Ne},Jt.type,Jt.count);qt.markDirty(K,Te,Ne)}}}else if(Qe.cancel(),ze.consumeLeftClick()){let K=ex(j);if(K<=2){const Te=[{type:"iron_sword",damage:12},{type:"iron_hammer",damage:14},{type:"dagger",damage:6},{type:"spear",damage:10},{type:"axe",damage:8},{type:"stone_axe",damage:6},{type:"hammer",damage:10}];for(const Ne of Te)if(b.count(Ne.type)>0){K=Ne.damage;break}K<=2&&(K=5)}E.playerAttack(l.position,to,_e,K)}}else Qe.cancel(),ze.consumeLeftClick();for(let w=_e.length-1;w>=0;w--)if(_e[w].isDead()){const K=rg(_e[w].type);for(const Te of K)Ee(_e[w].position,Te.type,Te.count);H.addExperience(t.COMBAT.XP_PER_KILL,"combat"),ce.addReputation("road_wardens",t.COMBAT.FACTION_REP_PER_KILL),ht.killEnemy(_e[w].type),_e.splice(w,1)}!Ut&&M.day>=2&&(Ut=!0,Xe.advanceObjective("ch1_embers","ch1_survive",1),H.addExperience(t.QUESTS.XP_FIRST_NIGHT,"quest"),ht.surviveNight()),M.getPhase()===Et.DAWN&&M.day>ht.nightsSurvived+1&&ht.surviveNight();const sc=Hr.find(w=>w.id==="starter_watchpost");sc&&Cs(l.position,sc.position,t.RESTORATION.HINT_RANGE)&&Xe.advanceObjective("ch1_embers","ch1_reach_outpost",1);const Ud=Dt.checkTriggers(l.position);for(const w of Ud)Xe.activate(w.questId),(w.type==="reach_location"||w.type==="explore_area")&&(Xe.advanceObjective(w.questId,w.objectiveId,1),H.addExperience(t.QUESTS.XP_EXPLORATION,"exploration"));if(ze.consumeKeyPress("KeyR")){for(const w of Hr)if(!w.restored&&Cs(l.position,w.position,t.RESTORATION.INTERACT_RANGE)){if(w.restore(b)){const K=yx(w.id);J=K.message,fe=t.DIALOGUE.DISPLAY_DURATION,H.addExperience(t.QUESTS.XP_RESTORATION,"restoration"),ht.restoreSite(w.id);const Ne={starter_watchpost:"road_wardens",roadside_hall:"road_wardens",mountain_workshop:"dwarven_crafters",forest_beacon:"woodland_guardians",ward_bastion:"rivendell_keepers"}[w.id];Ne&&ce.addReputation(Ne,50);const rt=K.merchant;rt.position={...w.position};const Kt=new xn(rt);pe.addNPC(Kt);const kt={starter_watchpost:"small",roadside_hall:"medium",mountain_workshop:"medium",forest_beacon:"small",ward_bastion:"large"}[w.id]||"small",Jt=zt(Math.floor(w.position.x),Math.floor(w.position.z));Lv(a,{x:w.position.x,y:Jt+1,z:w.position.z},kt);const Ki=Math.floor(w.position.x),Or=Math.floor(w.position.z);for(let an=-10;an<=10;an+=8)for(let wi=-10;wi<=10;wi+=8)qt.markDirty(Ki+an,Jt+1,Or+wi);w.id==="starter_watchpost"&&Xe.advanceObjective("ch1_embers","ch1_activate_ward",1)}else J=`Need materials to restore ${w.name}`,fe=t.DIALOGUE.SHORT_DURATION;break}}const Fd=(w,K)=>zt(w,K);for(const w of Ho)w.updateAI(de,Fd,a);for(let w=et.length-1;w>=0;w--){const K=et[w];if(K.lifetime-=de,K.bobPhase+=de*3,K.lifetime<=0){et.splice(w,1);continue}const Te=l.position.x-K.position.x,Ne=l.position.y-K.position.y,rt=l.position.z-K.position.z;Te*Te+Ne*Ne+rt*rt<=At*At&&(b.add(K.type,K.count),J=`Picked up ${K.count} ${K.type.replace(/_/g," ")}`,fe=1.5,et.splice(w,1))}for(const w of je)ct.remove(w),w.geometry.dispose();je=[];const Bd=new bi(.3,.3,.3);for(const w of et){const K=new js({color:13215820}),Te=new Sn(Bd,K);Te.position.set(w.position.x,w.position.y+Math.sin(w.bobPhase)*.15,w.position.z),Te.rotation.y=w.bobPhase*.5,ct.add(Te),je.push(Te)}es.sync(_e),Xn.sync(Ho),wr(M.getPhase());const zd=O.getVisibilityModifier(),oc=Tl(zd);ct.fog.near=oc.near,ct.fog.far=oc.far;const Hd=Math.sqrt((l.position.x-t.CORRUPTION.CENTER_X)**2+(l.position.z-t.CORRUPTION.CENTER_Z)**2),ac=Math.max(0,1-Hd/t.CORRUPTION.RADIUS);if(ac>t.CORRUPTION.FOG_THRESHOLD){const w=Vx(ac);ct.fog.color.setRGB(w.r,w.g,w.b)}if(tt.rotation.order="YXZ",tt.rotation.y=-l.yaw,tt.rotation.x=l.pitch,l.cameraMode==="third_person_behind"){const w=t.CAMERA.THIRD_PERSON_DISTANCE,K=t.CAMERA.THIRD_PERSON_EYE_HEIGHT,Te=li(l);tt.position.set(l.position.x-Te.x*w,l.position.y+K-Te.y*w,l.position.z-Te.z*w)}else tt.position.set(l.position.x,l.position.y+t.CAMERA.FIRST_PERSON_EYE_HEIGHT,l.position.z);_.update(l.position.x,l.position.z),c.style.display!=="none"&&!_.isLoading()&&(_.consumeMeshDirtyChunks(),qt.update(l.position.x,l.position.z,t.CHUNKS.RENDER_DISTANCE),c.style.display="none");const cc=_.consumeMeshDirtyChunks();cc.size>0&&qt.invalidateChunks(cc),c.style.display==="none"&&qt.update(l.position.x,l.position.z,t.CHUNKS.RENDER_DISTANCE),Be.render(ct,tt);const Gd=M.getPhase(),Ft=xv({survivalStats:T,questSystem:Xe,compass:Q,playerYaw:l.yaw,playerPos:l.position,fearSystem:ge,experienceSystem:H,statusEffects:Ze}),Vd=b.getItems().slice(0,8).map(w=>`${w.type}:${w.count}`).join(" "),lc=_e.length,Wd=l.crouching?" [Crouching]":"",Xd=E._guarding?" [Guard]":"",qd=O.current,Yd=Math.round(W.getRevealedPercentage()),Kd=Ft.activeQuestName?` | Quest: ${Ft.activeQuestName}`:"",$d=Ft.compassCardinal?` ${Ft.compassCardinal}`:"",dc=Ft.fearLevel,jd=document.getElementById("hotbar-bar");let hc="";for(let w=0;w<8;w++){const K=q.getSlot(w),Te=w===q.selectedSlot?" selected":"",Ne=K?Vo(K.type):"",rt=K?K.type.replace(/_/g," "):"",Kt=K?K.count:"";hc+=`<div class="slot${Te}"><span class="num">${w+1}</span><div style="font-size:18px">${Ne}</div><span class="item-name">${rt}</span><span class="item-count">${Kt}</span></div>`}jd.innerHTML=hc;const uc=Go(pe,l.position,t.NPC.INTERACT_RANGE),Zd=uc?`<div style="color:#c9a84c;margin-top:4px">[T] Talk to ${uc.name}</div>`:"",Qd=J?`<div style="color:#eee;background:rgba(0,0,0,0.6);padding:6px 10px;margin-top:6px;border-radius:4px;max-width:400px">${J}</div>`:"";let fc="";for(const w of Hr)if(!w.restored&&Cs(l.position,w.position,t.RESTORATION.HINT_RANGE)){const K=w.requirements.map(Te=>`${Te.count} ${Te.type.replace(/_/g," ")}`).join(", ");fc=`<div style="color:#aed581;margin-top:4px">[R] Restore ${w.name} (needs: ${K})</div>`;break}const Jd=Ft.statusEffects.length>0?`<div style="margin-top:2px;font-size:11px;color:#aed581">${Ft.statusEffects.map(w=>`${w.type.replace(/_/g," ")} ${Math.ceil(w.remaining)}s`).join(" | ")}</div>`:"";ts.innerHTML=`
      <div>${i.characterName?i.characterName+" — ":""}${S.name} ${D.name} Lv${Ft.level} | Day ${M.day} — ${Gd} | ${Le.name} | ${qd}${$d}${Wd}${Xd}${$.enabled?" [CREATIVE]":""}</div>
      <div>HP: ${Ft.health}/${Ft.maxHealth} | STA: ${Ft.stamina} | HUN: ${Ft.hunger} | FOC: ${Ft.focus} | ${Ft.tempLabel}${dc>0?` | Fear: ${dc}`:""}${Kd}</div>
      <div style="margin-top:2px;font-size:11px;color:#888">Pos: ${Ft.playerX}, ${Ft.playerZ} | ${Vd||"empty"}${lc?` | Enemies: ${lc}`:""} | Map: ${Yd}%</div>
      ${Jd}
      ${Zd}${fc}${Qd}
    `,document.getElementById("health-bar-fill").style.width=`${Ft.health/Ft.maxHealth*100}%`,document.getElementById("stamina-bar-fill").style.width=`${Ft.stamina}%`,document.getElementById("hunger-bar-fill").style.width=`${Ft.hunger}%`,Qe.isBreaking()?(document.getElementById("break-bar").style.display="block",document.getElementById("break-fill").style.width=`${Math.round(Qe.getProgress()*100)}%`):document.getElementById("break-bar").style.display="none"}window.addEventListener("resize",()=>{Be.setSize(window.innerWidth,window.innerHeight),tt.aspect=window.innerWidth/window.innerHeight,tt.updateProjectionMatrix()}),requestAnimationFrame(gt)}
