(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Wa="175",rh=0,_c=1,sh=2,Gl=1,oh=2,Kn=3,gi=0,en=1,jn=2,mi=0,pr=1,gc=2,vc=3,xc=4,ah=5,Pi=100,ch=101,lh=102,dh=103,hh=104,uh=200,fh=201,ph=202,mh=203,Xo=204,qo=205,_h=206,gh=207,vh=208,xh=209,yh=210,Sh=211,Eh=212,Mh=213,bh=214,Ko=0,Yo=1,$o=2,gr=3,jo=4,Zo=5,Qo=6,Jo=7,Xa=0,Th=1,Ah=2,_i=0,Rh=1,wh=2,Ch=3,Ih=4,Dh=5,Oh=6,Lh=7,Vl=300,vr=301,xr=302,ea=303,ta=304,Ys=306,na=1e3,Ui=1001,ia=1002,In=1003,Ph=1004,ss=1005,kn=1006,to=1007,Bi=1008,ni=1009,Wl=1010,Xl=1011,Xr=1012,qa=1013,zi=1014,Qn=1015,jr=1016,Ka=1017,Ya=1018,qr=1020,ql=35902,Kl=1021,Yl=1022,Cn=1023,$l=1024,jl=1025,Kr=1026,Yr=1027,Zl=1028,$a=1029,Ql=1030,ja=1031,Za=1033,Os=33776,Ls=33777,Ps=33778,Ns=33779,ra=35840,sa=35841,oa=35842,aa=35843,ca=36196,la=37492,da=37496,ha=37808,ua=37809,fa=37810,pa=37811,ma=37812,_a=37813,ga=37814,va=37815,xa=37816,ya=37817,Sa=37818,Ea=37819,Ma=37820,ba=37821,ks=36492,Ta=36494,Aa=36495,Jl=36283,Ra=36284,wa=36285,Ca=36286,Nh=3200,kh=3201,ed=0,Uh=1,fi="",vn="srgb",yr="srgb-linear",Vs="linear",vt="srgb",qi=7680,yc=519,Bh=512,Fh=513,zh=514,td=515,Hh=516,Gh=517,Vh=518,Wh=519,Sc=35044,Ec="300 es",Jn=2e3,Ws=2001;class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],no=Math.PI/180,Ia=180/Math.PI;function Zr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Xh(i,e){return(i%e+e)%e}function io(i,e,t){return(1-t)*i+t*e}function Dr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,r,s,o,a,c,d){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,d)}set(e,t,n,r,s,o,a,c,d){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],d=n[1],h=n[4],u=n[7],p=n[2],l=n[5],_=n[8],g=r[0],m=r[3],f=r[6],T=r[1],M=r[4],E=r[7],O=r[2],R=r[5],w=r[8];return s[0]=o*g+a*T+c*O,s[3]=o*m+a*M+c*R,s[6]=o*f+a*E+c*w,s[1]=d*g+h*T+u*O,s[4]=d*m+h*M+u*R,s[7]=d*f+h*E+u*w,s[2]=p*g+l*T+_*O,s[5]=p*m+l*M+_*R,s[8]=p*f+l*E+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],d=e[7],h=e[8];return t*o*h-t*a*d-n*s*h+n*a*c+r*s*d-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],d=e[7],h=e[8],u=h*o-a*d,p=a*c-h*s,l=d*s-o*c,_=t*u+n*p+r*l;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(r*d-h*n)*g,e[2]=(a*n-r*o)*g,e[3]=p*g,e[4]=(h*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=l*g,e[7]=(n*c-d*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),d=Math.sin(s);return this.set(n*c,n*d,-n*(c*o+d*a)+o+e,-r*d,r*c,-r*(-d*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ro.makeScale(e,t)),this}rotate(e){return this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ro=new Ke;function nd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qh(){const i=Xs("canvas");return i.style.display="block",i}const Mc={};function Us(i){i in Mc||(Mc[i]=!0,console.warn(i))}function Kh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Yh(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $h(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bc=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jh(){const i={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(r.r=mr(r.r),r.g=mr(r.g),r.b=mr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?Vs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yr]:{primaries:e,whitePoint:n,transfer:Vs,toXYZ:bc,fromXYZ:Tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:bc,fromXYZ:Tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),i}const ht=jh();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ki;class Zh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=Xs("canvas")),Ki.width=e.width,Ki.height=e.height;const r=Ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qh=0;class Qa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Zr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(so(r[o].image)):s.push(so(r[o]))}else s=so(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jh=0;class tn extends Mr{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=Ui,r=Ui,s=kn,o=Bi,a=Cn,c=ni,d=tn.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Zr(),this.name="",this.source=new Qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=d,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Vl;tn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,d=c[0],h=c[4],u=c[8],p=c[1],l=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(d+l+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(d+1)/2,E=(l+1)/2,O=(f+1)/2,R=(h+p)/4,w=(u+g)/4,P=(_+m)/4;return M>E&&M>O?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=R/n,s=w/n):E>O?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=R/r,s=P/r):O<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),n=w/s,r=P/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(u-g)/T,this.z=(p-h)/T,this.w=Math.acos((d+l+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eu extends Mr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Qa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends eu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class id extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tu extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],d=n[r+1],h=n[r+2],u=n[r+3];const p=s[o+0],l=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=d,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=l,e[t+2]=_,e[t+3]=g;return}if(u!==g||c!==p||d!==l||h!==_){let m=1-a;const f=c*p+d*l+h*_+u*g,T=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const O=Math.sqrt(M),R=Math.atan2(O,f*T);m=Math.sin(m*R)/O,a=Math.sin(a*R)/O}const E=a*T;if(c=c*m+p*E,d=d*m+l*E,h=h*m+_*E,u=u*m+g*E,m===1-a){const O=1/Math.sqrt(c*c+d*d+h*h+u*u);c*=O,d*=O,h*=O,u*=O}}e[t]=c,e[t+1]=d,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],d=n[r+2],h=n[r+3],u=s[o],p=s[o+1],l=s[o+2],_=s[o+3];return e[t]=a*_+h*u+c*l-d*p,e[t+1]=c*_+h*p+d*u-a*l,e[t+2]=d*_+h*l+a*p-c*u,e[t+3]=h*_-a*u-c*p-d*l,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,d=a(n/2),h=a(r/2),u=a(s/2),p=c(n/2),l=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=p*h*u+d*l*_,this._y=d*l*u-p*h*_,this._z=d*h*_+p*l*u,this._w=d*h*u-p*l*_;break;case"YXZ":this._x=p*h*u+d*l*_,this._y=d*l*u-p*h*_,this._z=d*h*_-p*l*u,this._w=d*h*u+p*l*_;break;case"ZXY":this._x=p*h*u-d*l*_,this._y=d*l*u+p*h*_,this._z=d*h*_+p*l*u,this._w=d*h*u-p*l*_;break;case"ZYX":this._x=p*h*u-d*l*_,this._y=d*l*u+p*h*_,this._z=d*h*_-p*l*u,this._w=d*h*u+p*l*_;break;case"YZX":this._x=p*h*u+d*l*_,this._y=d*l*u+p*h*_,this._z=d*h*_-p*l*u,this._w=d*h*u-p*l*_;break;case"XZY":this._x=p*h*u-d*l*_,this._y=d*l*u-p*h*_,this._z=d*h*_+p*l*u,this._w=d*h*u+p*l*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],d=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){const l=.5/Math.sqrt(p+1);this._w=.25/l,this._x=(h-c)*l,this._y=(s-d)*l,this._z=(o-r)*l}else if(n>a&&n>u){const l=2*Math.sqrt(1+n-a-u);this._w=(h-c)/l,this._x=.25*l,this._y=(r+o)/l,this._z=(s+d)/l}else if(a>u){const l=2*Math.sqrt(1+a-n-u);this._w=(s-d)/l,this._x=(r+o)/l,this._y=.25*l,this._z=(c+h)/l}else{const l=2*Math.sqrt(1+u-n-a);this._w=(o-r)/l,this._x=(s+d)/l,this._y=(c+h)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,d=t._z,h=t._w;return this._x=n*h+o*a+r*d-s*c,this._y=r*h+o*c+s*a-n*d,this._z=s*h+o*d+n*c-r*a,this._w=o*h-n*a-r*c-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const l=1-t;return this._w=l*o+t*this._w,this._x=l*n+t*this._x,this._y=l*r+t*this._y,this._z=l*s+t*this._z,this.normalize(),this}const d=Math.sqrt(c),h=Math.atan2(d,a),u=Math.sin((1-t)*h)/d,p=Math.sin(t*h)/d;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=r*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,d=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+c*d+o*u-a*h,this.y=n+c*h+a*d-s*u,this.z=r+c*u+s*h-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new W,Ac=new Qr;class Jr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(s,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(e.matrixWorld),this.union(os)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),as.subVectors(this.max,Or),Yi.subVectors(e.a,Or),$i.subVectors(e.b,Or),ji.subVectors(e.c,Or),oi.subVectors($i,Yi),ai.subVectors(ji,$i),Mi.subVectors(Yi,ji);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Mi.z,Mi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Mi.z,0,-Mi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Mi.y,Mi.x,0];return!ao(t,Yi,$i,ji,as)||(t=[1,0,0,0,1,0,0,0,1],!ao(t,Yi,$i,ji,as))?!1:(cs.crossVectors(oi,ai),t=[cs.x,cs.y,cs.z],ao(t,Yi,$i,ji,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new W,new W,new W,new W,new W,new W,new W,new W],En=new W,os=new Jr,Yi=new W,$i=new W,ji=new W,oi=new W,ai=new W,Mi=new W,Or=new W,as=new W,cs=new W,bi=new W;function ao(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){bi.fromArray(i,s);const a=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),c=e.dot(bi),d=t.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>a)return!1}return!0}const nu=new Jr,Lr=new W,co=new W;class Ja{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Lr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(co)),this.expandByPoint(Lr.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new W,lo=new W,ls=new W,ci=new W,ho=new W,ds=new W,uo=new W;class iu{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){lo.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(lo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ls),a=ci.dot(this.direction),c=-ci.dot(ls),d=ci.lengthSq(),h=Math.abs(1-o*o);let u,p,l,_;if(h>0)if(u=o*c-a,p=o*a-c,_=s*h,u>=0)if(p>=-_)if(p<=_){const g=1/h;u*=g,p*=g,l=u*(u+o*p+2*a)+p*(o*u+p+2*c)+d}else p=s,u=Math.max(0,-(o*p+a)),l=-u*u+p*(p+2*c)+d;else p=-s,u=Math.max(0,-(o*p+a)),l=-u*u+p*(p+2*c)+d;else p<=-_?(u=Math.max(0,-(-o*s+a)),p=u>0?-s:Math.min(Math.max(-s,-c),s),l=-u*u+p*(p+2*c)+d):p<=_?(u=0,p=Math.min(Math.max(-s,-c),s),l=p*(p+2*c)+d):(u=Math.max(0,-(o*s+a)),p=u>0?s:Math.min(Math.max(-s,-c),s),l=-u*u+p*(p+2*c)+d);else p=o>0?-s:s,u=Math.max(0,-(o*p+a)),l=-u*u+p*(p+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(lo).addScaledVector(ls,p),l}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),r=Gn.dot(Gn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const d=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return d>=0?(n=(e.min.x-p.x)*d,r=(e.max.x-p.x)*d):(n=(e.max.x-p.x)*d,r=(e.min.x-p.x)*d),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,r,s){ho.subVectors(t,e),ds.subVectors(n,e),uo.crossVectors(ho,ds);let o=this.direction.dot(uo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);const c=a*this.direction.dot(ds.crossVectors(ci,ds));if(c<0)return null;const d=a*this.direction.dot(ho.cross(ci));if(d<0||c+d>o)return null;const h=-a*ci.dot(uo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,n,r,s,o,a,c,d,h,u,p,l,_,g,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,d,h,u,p,l,_,g,m)}set(e,t,n,r,s,o,a,c,d,h,u,p,l,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=d,f[6]=h,f[10]=u,f[14]=p,f[3]=l,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),d=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const p=o*h,l=o*u,_=a*h,g=a*u;t[0]=c*h,t[4]=-c*u,t[8]=d,t[1]=l+_*d,t[5]=p-g*d,t[9]=-a*c,t[2]=g-p*d,t[6]=_+l*d,t[10]=o*c}else if(e.order==="YXZ"){const p=c*h,l=c*u,_=d*h,g=d*u;t[0]=p+g*a,t[4]=_*a-l,t[8]=o*d,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=l*a-_,t[6]=g+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*h,l=c*u,_=d*h,g=d*u;t[0]=p-g*a,t[4]=-o*u,t[8]=_+l*a,t[1]=l+_*a,t[5]=o*h,t[9]=g-p*a,t[2]=-o*d,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*h,l=o*u,_=a*h,g=a*u;t[0]=c*h,t[4]=_*d-l,t[8]=p*d+g,t[1]=c*u,t[5]=g*d+p,t[9]=l*d-_,t[2]=-d,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,l=o*d,_=a*c,g=a*d;t[0]=c*h,t[4]=g-p*u,t[8]=_*u+l,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-d*h,t[6]=l*u+_,t[10]=p-g*u}else if(e.order==="XZY"){const p=o*c,l=o*d,_=a*c,g=a*d;t[0]=c*h,t[4]=-u,t[8]=d*h,t[1]=p*u+g,t[5]=o*h,t[9]=l*u-_,t[2]=_*u-l,t[6]=a*h,t[10]=g*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ru,e,su)}lookAt(e,t,n){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),li.crossVectors(n,on),li.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),li.crossVectors(n,on)),li.normalize(),hs.crossVectors(on,li),r[0]=li.x,r[4]=hs.x,r[8]=on.x,r[1]=li.y,r[5]=hs.y,r[9]=on.y,r[2]=li.z,r[6]=hs.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],d=n[12],h=n[1],u=n[5],p=n[9],l=n[13],_=n[2],g=n[6],m=n[10],f=n[14],T=n[3],M=n[7],E=n[11],O=n[15],R=r[0],w=r[4],P=r[8],b=r[12],y=r[1],I=r[5],X=r[9],F=r[13],j=r[2],te=r[6],Z=r[10],ce=r[14],q=r[3],he=r[7],Te=r[11],De=r[15];return s[0]=o*R+a*y+c*j+d*q,s[4]=o*w+a*I+c*te+d*he,s[8]=o*P+a*X+c*Z+d*Te,s[12]=o*b+a*F+c*ce+d*De,s[1]=h*R+u*y+p*j+l*q,s[5]=h*w+u*I+p*te+l*he,s[9]=h*P+u*X+p*Z+l*Te,s[13]=h*b+u*F+p*ce+l*De,s[2]=_*R+g*y+m*j+f*q,s[6]=_*w+g*I+m*te+f*he,s[10]=_*P+g*X+m*Z+f*Te,s[14]=_*b+g*F+m*ce+f*De,s[3]=T*R+M*y+E*j+O*q,s[7]=T*w+M*I+E*te+O*he,s[11]=T*P+M*X+E*Z+O*Te,s[15]=T*b+M*F+E*ce+O*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],d=e[13],h=e[2],u=e[6],p=e[10],l=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*c*u-r*d*u-s*a*p+n*d*p+r*a*l-n*c*l)+g*(+t*c*l-t*d*p+s*o*p-r*o*l+r*d*h-s*c*h)+m*(+t*d*u-t*a*l-s*o*u+n*o*l+s*a*h-n*d*h)+f*(-r*a*h-t*c*u+t*a*p+r*o*u-n*o*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],d=e[7],h=e[8],u=e[9],p=e[10],l=e[11],_=e[12],g=e[13],m=e[14],f=e[15],T=u*m*d-g*p*d+g*c*l-a*m*l-u*c*f+a*p*f,M=_*p*d-h*m*d-_*c*l+o*m*l+h*c*f-o*p*f,E=h*g*d-_*u*d+_*a*l-o*g*l-h*a*f+o*u*f,O=_*u*c-h*g*c-_*a*p+o*g*p+h*a*m-o*u*m,R=t*T+n*M+r*E+s*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=T*w,e[1]=(g*p*s-u*m*s-g*r*l+n*m*l+u*r*f-n*p*f)*w,e[2]=(a*m*s-g*c*s+g*r*d-n*m*d-a*r*f+n*c*f)*w,e[3]=(u*c*s-a*p*s-u*r*d+n*p*d+a*r*l-n*c*l)*w,e[4]=M*w,e[5]=(h*m*s-_*p*s+_*r*l-t*m*l-h*r*f+t*p*f)*w,e[6]=(_*c*s-o*m*s-_*r*d+t*m*d+o*r*f-t*c*f)*w,e[7]=(o*p*s-h*c*s+h*r*d-t*p*d-o*r*l+t*c*l)*w,e[8]=E*w,e[9]=(_*u*s-h*g*s-_*n*l+t*g*l+h*n*f-t*u*f)*w,e[10]=(o*g*s-_*a*s+_*n*d-t*g*d-o*n*f+t*a*f)*w,e[11]=(h*a*s-o*u*s-h*n*d+t*u*d+o*n*l-t*a*l)*w,e[12]=O*w,e[13]=(h*g*r-_*u*r+_*n*p-t*g*p-h*n*m+t*u*m)*w,e[14]=(_*a*r-o*g*r-_*n*c+t*g*c+o*n*m-t*a*m)*w,e[15]=(o*u*r-h*a*r+h*n*c-t*u*c-o*n*p+t*a*p)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,d=s*o,h=s*a;return this.set(d*o+n,d*a-r*c,d*c+r*a,0,d*a+r*c,h*a+n,h*c-r*o,0,d*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,d=s+s,h=o+o,u=a+a,p=s*d,l=s*h,_=s*u,g=o*h,m=o*u,f=a*u,T=c*d,M=c*h,E=c*u,O=n.x,R=n.y,w=n.z;return r[0]=(1-(g+f))*O,r[1]=(l+E)*O,r[2]=(_-M)*O,r[3]=0,r[4]=(l-E)*R,r[5]=(1-(p+f))*R,r[6]=(m+T)*R,r[7]=0,r[8]=(_+M)*w,r[9]=(m-T)*w,r[10]=(1-(p+g))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const o=Zi.set(r[4],r[5],r[6]).length(),a=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const d=1/s,h=1/o,u=1/a;return Mn.elements[0]*=d,Mn.elements[1]*=d,Mn.elements[2]*=d,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Jn){const c=this.elements,d=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),p=(n+r)/(n-r);let l,_;if(a===Jn)l=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ws)l=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=l,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Jn){const c=this.elements,d=1/(t-e),h=1/(n-r),u=1/(o-s),p=(t+e)*d,l=(n+r)*h;let _,g;if(a===Jn)_=(o+s)*u,g=-2*u;else if(a===Ws)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-l,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zi=new W,Mn=new Tt,ru=new W(0,0,0),su=new W(1,1,1),li=new W,hs=new W,on=new W,Rc=new Tt,wc=new Qr;class Fn{constructor(e=0,t=0,n=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],d=r[5],h=r[9],u=r[2],p=r[6],l=r[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,l),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,l),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,l),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,l),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,l));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,l),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ou=0;const Cc=new W,Qi=new Qr,Vn=new Tt,us=new W,Pr=new W,au=new W,cu=new Qr,Ic=new W(1,0,0),Dc=new W(0,1,0),Oc=new W(0,0,1),Lc={type:"added"},lu={type:"removed"},Ji={type:"childadded",child:null},fo={type:"childremoved",child:null};class Gt extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new W,t=new Fn,n=new Qr,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ke}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Oc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?us.copy(e):us.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Pr,us,this.up):Vn.lookAt(us,Pr,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lu),fo.child=e,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const u=c[d];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,d=this.material.length;c<d;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),d=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),l=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),l.length>0&&(n.animations=l),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const d in a){const h=a[d];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new W(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new W,Wn=new W,po=new W,Xn=new W,er=new W,tr=new W,Pc=new W,mo=new W,_o=new W,go=new W,vo=new bt,xo=new bt,yo=new bt;class wn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){bn.subVectors(r,t),Wn.subVectors(n,t),po.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Wn),c=bn.dot(po),d=Wn.dot(Wn),h=Wn.dot(po),u=o*d-a*a;if(u===0)return s.set(0,0,0),null;const p=1/u,l=(d*c-a*h)*p,_=(o*h-a*c)*p;return s.set(1-l-_,_,l)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return vo.setScalar(0),xo.setScalar(0),yo.setScalar(0),vo.fromBufferAttribute(e,t),xo.fromBufferAttribute(e,n),yo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(vo,s.x),o.addScaledVector(xo,s.y),o.addScaledVector(yo,s.z),o}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),Wn.subVectors(e,t),bn.cross(Wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),bn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;er.subVectors(r,n),tr.subVectors(s,n),mo.subVectors(e,n);const c=er.dot(mo),d=tr.dot(mo);if(c<=0&&d<=0)return t.copy(n);_o.subVectors(e,r);const h=er.dot(_o),u=tr.dot(_o);if(h>=0&&u<=h)return t.copy(r);const p=c*u-h*d;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(er,o);go.subVectors(e,s);const l=er.dot(go),_=tr.dot(go);if(_>=0&&l<=_)return t.copy(s);const g=l*d-c*_;if(g<=0&&d>=0&&_<=0)return a=d/(d-_),t.copy(n).addScaledVector(tr,a);const m=h*_-l*u;if(m<=0&&u-h>=0&&l-_>=0)return Pc.subVectors(s,r),a=(u-h)/(u-h+(l-_)),t.copy(r).addScaledVector(Pc,a);const f=1/(m+g+p);return o=g*f,a=p*f,t.copy(n).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},fs={h:0,s:0,l:0};function So(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=Xh(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=So(o,s,e+1/3),this.g=So(o,s,e),this.b=So(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const n=sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return ht.fromWorkingColorSpace(Ht.copy(this),e),Math.round(st(Ht.r*255,0,255))*65536+Math.round(st(Ht.g*255,0,255))*256+Math.round(st(Ht.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,d;const h=(a+o)/2;if(a===o)c=0,d=0;else{const u=o-a;switch(d=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=d,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=vn){ht.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,r=Ht.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(fs);const n=io(di.h,fs.h,t),r=io(di.s,fs.s,t),s=io(di.l,fs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new ut;ut.NAMES=sd;let du=0;class es extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=pr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class od extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new W,ps=new pt;let hu=0;class Bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sc&&(e.usage=this.usage),e}}class ad extends Bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cd extends Bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ti extends Bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uu=0;const fn=new Tt,Eo=new Gt,nr=new W,an=new Jr,Nr=new Jr,Ut=new W;class xi extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nd(e)?cd:ad)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Eo.lookAt(e),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ti(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(an.min,Nr.min),an.expandByPoint(Ut),Ut.addVectors(an.max,Nr.max),an.expandByPoint(Ut)):(an.expandByPoint(Nr.min),an.expandByPoint(Nr.max))}an.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let d=0,h=a.count;d<h;d++)Ut.fromBufferAttribute(a,d),c&&(nr.fromBufferAttribute(e,d),Ut.add(nr)),r=Math.max(r,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new W,c[P]=new W;const d=new W,h=new W,u=new W,p=new pt,l=new pt,_=new pt,g=new W,m=new W;function f(P,b,y){d.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),p.fromBufferAttribute(s,P),l.fromBufferAttribute(s,b),_.fromBufferAttribute(s,y),h.sub(d),u.sub(d),l.sub(p),_.sub(p);const I=1/(l.x*_.y-_.x*l.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-l.y).multiplyScalar(I),m.copy(u).multiplyScalar(l.x).addScaledVector(h,-_.x).multiplyScalar(I),a[P].add(g),a[b].add(g),a[y].add(g),c[P].add(m),c[b].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,b=T.length;P<b;++P){const y=T[P],I=y.start,X=y.count;for(let F=I,j=I+X;F<j;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new W,E=new W,O=new W,R=new W;function w(P){O.fromBufferAttribute(r,P),R.copy(O);const b=a[P];M.copy(b),M.sub(O.multiplyScalar(O.dot(b))).normalize(),E.crossVectors(R,b);const I=E.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,I)}for(let P=0,b=T.length;P<b;++P){const y=T[P],I=y.start,X=y.count;for(let F=I,j=I+X;F<j;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,l=n.count;p<l;p++)n.setXYZ(p,0,0,0);const r=new W,s=new W,o=new W,a=new W,c=new W,d=new W,h=new W,u=new W;if(e)for(let p=0,l=e.count;p<l;p+=3){const _=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,m),a.add(h),c.add(h),d.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let p=0,l=t.count;p<l;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,c){const d=a.array,h=a.itemSize,u=a.normalized,p=new d.constructor(c.length*h);let l=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?l=c[g]*a.data.stride+a.offset:l=c[g]*h;for(let f=0;f<h;f++)p[_++]=d[l++]}return new Bn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],d=e(c,n);t.setAttribute(a,d)}const s=this.morphAttributes;for(const a in s){const c=[],d=s[a];for(let h=0,u=d.length;h<u;h++){const p=d[h],l=e(p,n);c.push(l)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const d=o[a];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const d=n[c];e.data.attributes[c]=d.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let u=0,p=d.length;u<p;u++){const l=d[u];h.push(l.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const d in r){const h=r[d];this.setAttribute(d,h.clone(t))}const s=e.morphAttributes;for(const d in s){const h=[],u=s[d];for(let p=0,l=u.length;p<l;p++)h.push(u[p].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,h=o.length;d<h;d++){const u=o[d];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new Tt,Ti=new iu,ms=new Ja,kc=new W,_s=new W,gs=new W,vs=new W,Mo=new W,xs=new W,Uc=new W,ys=new W;class un extends Gt{constructor(e=new xi,t=new od){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){xs.set(0,0,0);for(let c=0,d=s.length;c<d;c++){const h=a[c],u=s[c];h!==0&&(Mo.fromBufferAttribute(u,e),o?xs.addScaledVector(Mo,h):xs.addScaledVector(Mo.sub(t),h))}t.add(xs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(ms.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(ms,kc)===null||Ti.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Nc.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,d=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,l=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const m=p[_],f=o[m.materialIndex],T=Math.max(m.start,l.start),M=Math.min(a.count,Math.min(m.start+m.count,l.start+l.count));for(let E=T,O=M;E<O;E+=3){const R=a.getX(E),w=a.getX(E+1),P=a.getX(E+2);r=Ss(this,f,e,n,d,h,u,R,w,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,l.start),g=Math.min(a.count,l.start+l.count);for(let m=_,f=g;m<f;m+=3){const T=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);r=Ss(this,o,e,n,d,h,u,T,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const m=p[_],f=o[m.materialIndex],T=Math.max(m.start,l.start),M=Math.min(c.count,Math.min(m.start+m.count,l.start+l.count));for(let E=T,O=M;E<O;E+=3){const R=E,w=E+1,P=E+2;r=Ss(this,f,e,n,d,h,u,R,w,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,l.start),g=Math.min(c.count,l.start+l.count);for(let m=_,f=g;m<f;m+=3){const T=m,M=m+1,E=m+2;r=Ss(this,o,e,n,d,h,u,T,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function fu(i,e,t,n,r,s,o,a){let c;if(e.side===en?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===gi,a),c===null)return null;ys.copy(a),ys.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(ys);return d<t.near||d>t.far?null:{distance:d,point:ys.clone(),object:i}}function Ss(i,e,t,n,r,s,o,a,c,d){i.getVertexPosition(a,_s),i.getVertexPosition(c,gs),i.getVertexPosition(d,vs);const h=fu(i,e,t,n,_s,gs,vs,Uc);if(h){const u=new W;wn.getBarycoord(Uc,_s,gs,vs,u),r&&(h.uv=wn.getInterpolatedAttribute(r,a,c,d,u,new pt)),s&&(h.uv1=wn.getInterpolatedAttribute(s,a,c,d,u,new pt)),o&&(h.normal=wn.getInterpolatedAttribute(o,a,c,d,u,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:d,normal:new W,materialIndex:0};wn.getNormal(_s,gs,vs,p.normal),h.face=p,h.barycoord=u}return h}class yi extends xi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],d=[],h=[],u=[];let p=0,l=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ti(d,3)),this.setAttribute("normal",new ti(h,3)),this.setAttribute("uv",new ti(u,2));function _(g,m,f,T,M,E,O,R,w,P,b){const y=E/w,I=O/P,X=E/2,F=O/2,j=R/2,te=w+1,Z=P+1;let ce=0,q=0;const he=new W;for(let Te=0;Te<Z;Te++){const De=Te*I-F;for(let We=0;We<te;We++){const ct=We*y-X;he[g]=ct*T,he[m]=De*M,he[f]=j,d.push(he.x,he.y,he.z),he[g]=0,he[m]=0,he[f]=R>0?1:-1,h.push(he.x,he.y,he.z),u.push(We/w),u.push(1-Te/P),ce+=1}}for(let Te=0;Te<P;Te++)for(let De=0;De<w;De++){const We=p+De+te*Te,ct=p+De+te*(Te+1),Q=p+(De+1)+te*(Te+1),me=p+(De+1)+te*Te;c.push(We,ct,me),c.push(ct,Q,me),q+=6}a.addGroup(l,q,b),l+=q,p+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=Sr(i[t]);for(const r in n)e[r]=n[r]}return e}function pu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ld(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const mu={clone:Sr,merge:Xt};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=pu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dd extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new W,Bc=new pt,Fc=new pt;class xn extends dd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Bc,Fc),t.subVectors(Fc,Bc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,d=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/d,r*=o.width/c,n*=o.height/d}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class vu extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(ir,rr,e,t);r.layers=this.layers,this.add(r);const s=new xn(ir,rr,e,t);s.layers=this.layers,this.add(s);const o=new xn(ir,rr,e,t);o.layers=this.layers,this.add(o);const a=new xn(ir,rr,e,t);a.layers=this.layers,this.add(a);const c=new xn(ir,rr,e,t);c.layers=this.layers,this.add(c);const d=new xn(ir,rr,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const d of t)this.remove(d);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,d,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),l=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,p,l),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class hd extends tn{constructor(e=[],t=vr,n,r,s,o,a,c,d,h){super(e,t,n,r,s,o,a,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xu extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new hd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yi(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:mi});s.uniforms.tEquirect.value=t;const o=new un(r,s),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=kn),new vu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class ur extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yu={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(d,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=d.joints["index-finger-tip"],u=d.joints["thumb-tip"],p=h.position.distanceTo(u.position),l=.02,_=.005;d.inputState.pinching&&p>l+_?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=l-_&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yu)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ec{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ut(e),this.near=t,this.far=n}clone(){return new ec(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Su extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const To=new W,Eu=new W,Mu=new Ke;class Di{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=To.subVectors(n,t).cross(Eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(To),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mu.getNormalMatrix(e),r=this.coplanarPoint(To).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Ja,Es=new W;class tc{constructor(e=new Di,t=new Di,n=new Di,r=new Di,s=new Di,o=new Di){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],d=r[4],h=r[5],u=r[6],p=r[7],l=r[8],_=r[9],g=r[10],m=r[11],f=r[12],T=r[13],M=r[14],E=r[15];if(n[0].setComponents(c-s,p-d,m-l,E-f).normalize(),n[1].setComponents(c+s,p+d,m+l,E+f).normalize(),n[2].setComponents(c+o,p+h,m+_,E+T).normalize(),n[3].setComponents(c-o,p-h,m-_,E-T).normalize(),n[4].setComponents(c-a,p-u,m-g,E-M).normalize(),t===Jn)n[5].setComponents(c+a,p+u,m+g,E+M).normalize();else if(t===Ws)n[5].setComponents(a,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Es.x=r.normal.x>0?e.max.x:e.min.x,Es.y=r.normal.y>0?e.max.y:e.min.y,Es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ud extends tn{constructor(e,t,n=zi,r,s,o,a=In,c=In,d,h=Kr){if(h!==Kr&&h!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,h,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $s extends xi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),d=a+1,h=c+1,u=e/a,p=t/c,l=[],_=[],g=[],m=[];for(let f=0;f<h;f++){const T=f*p-o;for(let M=0;M<d;M++){const E=M*u-s;_.push(E,-T,0),g.push(0,0,1),m.push(M/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const M=T+d*f,E=T+d*(f+1),O=T+1+d*(f+1),R=T+1+d*f;l.push(M,E,R),l.push(E,O,R)}this.setIndex(l),this.setAttribute("position",new ti(_,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}class js extends es{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bu extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tu extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fd extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ao=new Tt,zc=new W,Hc=new W;class Au{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tc,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(zc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),Ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pd extends dd{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,o=s+d*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ru extends Au{constructor(){super(new pd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wu extends fd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Ru}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cu extends fd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Iu extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Gc(i,e,t,n){const r=Du(n);switch(t){case Kl:return i*e;case $l:return i*e;case jl:return i*e*2;case Zl:return i*e/r.components*r.byteLength;case $a:return i*e/r.components*r.byteLength;case Ql:return i*e*2/r.components*r.byteLength;case ja:return i*e*2/r.components*r.byteLength;case Yl:return i*e*3/r.components*r.byteLength;case Cn:return i*e*4/r.components*r.byteLength;case Za:return i*e*4/r.components*r.byteLength;case Os:case Ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:case aa:return Math.max(i,16)*Math.max(e,8)/4;case ra:case oa:return Math.max(i,8)*Math.max(e,8)/2;case ca:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ks:case Ta:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jl:case Ra:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wa:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Du(i){switch(i){case ni:case Wl:return{byteLength:1,components:1};case Xr:case Xl:case jr:return{byteLength:2,components:1};case Ka:case Ya:return{byteLength:2,components:4};case zi:case qa:case Qn:return{byteLength:4,components:1};case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);function md(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ou(i){const e=new WeakMap;function t(a,c){const d=a.array,h=a.usage,u=d.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,d,h),a.onUploadCallback();let l;if(d instanceof Float32Array)l=i.FLOAT;else if(d instanceof Uint16Array)a.isFloat16BufferAttribute?l=i.HALF_FLOAT:l=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)l=i.SHORT;else if(d instanceof Uint32Array)l=i.UNSIGNED_INT;else if(d instanceof Int32Array)l=i.INT;else if(d instanceof Int8Array)l=i.BYTE;else if(d instanceof Uint8Array)l=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)l=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:l,bytesPerElement:d.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,d){const h=c.array,u=c.updateRanges;if(i.bindBuffer(d,a),u.length===0)i.bufferSubData(d,0,h);else{u.sort((l,_)=>l.start-_.start);let p=0;for(let l=1;l<u.length;l++){const _=u[p],g=u[l];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,u[p]=g)}u.length=p+1;for(let l=0,_=u.length;l<_;l++){const g=u[l];i.bufferSubData(d,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const d=e.get(a);if(d===void 0)e.set(a,t(a,c));else if(d.version<a.version){if(d.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,a,c),d.version=a.version}}return{get:r,remove:s,update:o}}var Lu=`#ifdef USE_ALPHAHASH
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
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fu=`#ifdef USE_AOMAP
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
#endif`,Ku=`#ifdef USE_BUMPMAP
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
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,Ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tf=`uniform bool receiveShadow;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
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
#endif`,Of=`struct PhysicalMaterial {
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
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
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
#endif`,Kf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
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
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,Bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
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
}`,Kp=`#include <common>
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
}`,Yp=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Lu,alphahash_pars_fragment:Pu,alphamap_fragment:Nu,alphamap_pars_fragment:ku,alphatest_fragment:Uu,alphatest_pars_fragment:Bu,aomap_fragment:Fu,aomap_pars_fragment:zu,batching_pars_vertex:Hu,batching_vertex:Gu,begin_vertex:Vu,beginnormal_vertex:Wu,bsdfs:Xu,iridescence_fragment:qu,bumpmap_pars_fragment:Ku,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:$u,clipping_planes_pars_vertex:ju,clipping_planes_vertex:Zu,color_fragment:Qu,color_pars_fragment:Ju,color_pars_vertex:ef,color_vertex:tf,common:nf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:sf,displacementmap_pars_vertex:of,displacementmap_vertex:af,emissivemap_fragment:cf,emissivemap_pars_fragment:lf,colorspace_fragment:df,colorspace_pars_fragment:hf,envmap_fragment:uf,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Af,envmap_vertex:_f,fog_vertex:gf,fog_pars_vertex:vf,fog_fragment:xf,fog_pars_fragment:yf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:Ef,lights_lambert_fragment:Mf,lights_lambert_pars_fragment:bf,lights_pars_begin:Tf,lights_toon_fragment:Rf,lights_toon_pars_fragment:wf,lights_phong_fragment:Cf,lights_phong_pars_fragment:If,lights_physical_fragment:Df,lights_physical_pars_fragment:Of,lights_fragment_begin:Lf,lights_fragment_maps:Pf,lights_fragment_end:Nf,logdepthbuf_fragment:kf,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Bf,logdepthbuf_vertex:Ff,map_fragment:zf,map_pars_fragment:Hf,map_particle_fragment:Gf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:Kf,morphnormal_vertex:Yf,morphtarget_pars_vertex:$f,morphtarget_vertex:jf,normal_fragment_begin:Zf,normal_fragment_maps:Qf,normal_pars_fragment:Jf,normal_pars_vertex:ep,normal_vertex:tp,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:sp,iridescence_pars_fragment:op,opaque_fragment:ap,packing:cp,premultiplied_alpha_fragment:lp,project_vertex:dp,dithering_fragment:hp,dithering_pars_fragment:up,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:_p,shadowmap_vertex:gp,shadowmask_pars_fragment:vp,skinbase_vertex:xp,skinning_pars_vertex:yp,skinning_vertex:Sp,skinnormal_vertex:Ep,specularmap_fragment:Mp,specularmap_pars_fragment:bp,tonemapping_fragment:Tp,tonemapping_pars_fragment:Ap,transmission_fragment:Rp,transmission_pars_fragment:wp,uv_pars_fragment:Cp,uv_pars_vertex:Ip,uv_vertex:Dp,worldpos_vertex:Op,background_vert:Lp,background_frag:Pp,backgroundCube_vert:Np,backgroundCube_frag:kp,cube_vert:Up,cube_frag:Bp,depth_vert:Fp,depth_frag:zp,distanceRGBA_vert:Hp,distanceRGBA_frag:Gp,equirect_vert:Vp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:Kp,meshbasic_frag:Yp,meshlambert_vert:$p,meshlambert_frag:jp,meshmatcap_vert:Zp,meshmatcap_frag:Qp,meshnormal_vert:Jp,meshnormal_frag:em,meshphong_vert:tm,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:rm,meshtoon_vert:sm,meshtoon_frag:om,points_vert:am,points_frag:cm,shadow_vert:lm,shadow_frag:dm,sprite_vert:hm,sprite_frag:um},ye={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Nn={basic:{uniforms:Xt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Xt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ut(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Xt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Xt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Xt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ut(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Xt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Xt([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Xt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Xt([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Xt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Xt([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Xt([ye.common,ye.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Xt([ye.lights,ye.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Nn.physical={uniforms:Xt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ms={r:0,b:0,g:0},Ri=new Fn,fm=new Tt;function pm(i,e,t,n,r,s,o){const a=new ut(0);let c=s===!0?0:1,d,h,u=null,p=0,l=null;function _(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?t:e).get(E)),E}function g(M){let E=!1;const O=_(M);O===null?f(a,c):O&&O.isColor&&(f(O,1),E=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,E){const O=_(E);O&&(O.isCubeTexture||O.mapping===Ys)?(h===void 0&&(h=new un(new yi(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Sr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ri.copy(E.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=O,h.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fm.makeRotationFromEuler(Ri)),h.material.toneMapped=ht.getTransfer(O.colorSpace)!==vt,(u!==O||p!==O.version||l!==i.toneMapping)&&(h.material.needsUpdate=!0,u=O,p=O.version,l=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new un(new $s(2,2),new vi({name:"BackgroundMaterial",uniforms:Sr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.toneMapped=ht.getTransfer(O.colorSpace)!==vt,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(u!==O||p!==O.version||l!==i.toneMapping)&&(d.material.needsUpdate=!0,u=O,p=O.version,l=i.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null))}function f(M,E){M.getRGB(Ms,ld(i)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,E,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),c=E,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:g,addToRenderList:m,dispose:T}}function mm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function a(y,I,X,F,j){let te=!1;const Z=u(F,X,I);s!==Z&&(s=Z,d(s.object)),te=l(y,F,X,j),te&&_(y,F,X,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,E(y,I,X,F),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function d(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,I,X){const F=X.wireframe===!0;let j=n[y.id];j===void 0&&(j={},n[y.id]=j);let te=j[I.id];te===void 0&&(te={},j[I.id]=te);let Z=te[F];return Z===void 0&&(Z=p(c()),te[F]=Z),Z}function p(y){const I=[],X=[],F=[];for(let j=0;j<t;j++)I[j]=0,X[j]=0,F[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:X,attributeDivisors:F,object:y,attributes:{},index:null}}function l(y,I,X,F){const j=s.attributes,te=I.attributes;let Z=0;const ce=X.getAttributes();for(const q in ce)if(ce[q].location>=0){const Te=j[q];let De=te[q];if(De===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(De=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(De=y.instanceColor)),Te===void 0||Te.attribute!==De||De&&Te.data!==De.data)return!0;Z++}return s.attributesNum!==Z||s.index!==F}function _(y,I,X,F){const j={},te=I.attributes;let Z=0;const ce=X.getAttributes();for(const q in ce)if(ce[q].location>=0){let Te=te[q];Te===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Te=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Te=y.instanceColor));const De={};De.attribute=Te,Te&&Te.data&&(De.data=Te.data),j[q]=De,Z++}s.attributes=j,s.attributesNum=Z,s.index=F}function g(){const y=s.newAttributes;for(let I=0,X=y.length;I<X;I++)y[I]=0}function m(y){f(y,0)}function f(y,I){const X=s.newAttributes,F=s.enabledAttributes,j=s.attributeDivisors;X[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),j[y]!==I&&(i.vertexAttribDivisor(y,I),j[y]=I)}function T(){const y=s.newAttributes,I=s.enabledAttributes;for(let X=0,F=I.length;X<F;X++)I[X]!==y[X]&&(i.disableVertexAttribArray(X),I[X]=0)}function M(y,I,X,F,j,te,Z){Z===!0?i.vertexAttribIPointer(y,I,X,j,te):i.vertexAttribPointer(y,I,X,F,j,te)}function E(y,I,X,F){g();const j=F.attributes,te=X.getAttributes(),Z=I.defaultAttributeValues;for(const ce in te){const q=te[ce];if(q.location>=0){let he=j[ce];if(he===void 0&&(ce==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),ce==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),he!==void 0){const Te=he.normalized,De=he.itemSize,We=e.get(he);if(We===void 0)continue;const ct=We.buffer,Q=We.type,me=We.bytesPerElement,we=Q===i.INT||Q===i.UNSIGNED_INT||he.gpuType===qa;if(he.isInterleavedBufferAttribute){const ge=he.data,Ge=ge.stride,tt=he.offset;if(ge.isInstancedInterleavedBuffer){for(let Fe=0;Fe<q.locationSize;Fe++)f(q.location+Fe,ge.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Fe=0;Fe<q.locationSize;Fe++)m(q.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Fe=0;Fe<q.locationSize;Fe++)M(q.location+Fe,De/q.locationSize,Q,Te,Ge*me,(tt+De/q.locationSize*Fe)*me,we)}else{if(he.isInstancedBufferAttribute){for(let ge=0;ge<q.locationSize;ge++)f(q.location+ge,he.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ge=0;ge<q.locationSize;ge++)m(q.location+ge);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let ge=0;ge<q.locationSize;ge++)M(q.location+ge,De/q.locationSize,Q,Te,De*me,De/q.locationSize*ge*me,we)}}else if(Z!==void 0){const Te=Z[ce];if(Te!==void 0)switch(Te.length){case 2:i.vertexAttrib2fv(q.location,Te);break;case 3:i.vertexAttrib3fv(q.location,Te);break;case 4:i.vertexAttrib4fv(q.location,Te);break;default:i.vertexAttrib1fv(q.location,Te)}}}}T()}function O(){P();for(const y in n){const I=n[y];for(const X in I){const F=I[X];for(const j in F)h(F[j].object),delete F[j];delete I[X]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const I=n[y.id];for(const X in I){const F=I[X];for(const j in F)h(F[j].object),delete F[j];delete I[X]}delete n[y.id]}function w(y){for(const I in n){const X=n[I];if(X[y.id]===void 0)continue;const F=X[y.id];for(const j in F)h(F[j].object),delete F[j];delete X[y.id]}}function P(){b(),o=!0,s!==r&&(s=r,d(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function _m(i,e,t){let n;function r(d){n=d}function s(d,h){i.drawArrays(n,d,h),t.update(h,n,1)}function o(d,h,u){u!==0&&(i.drawArraysInstanced(n,d,h,u),t.update(h,n,u))}function a(d,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,u);let l=0;for(let _=0;_<u;_++)l+=h[_];t.update(l,n,1)}function c(d,h,u,p){if(u===0)return;const l=e.get("WEBGL_multi_draw");if(l===null)for(let _=0;_<d.length;_++)o(d[_],h[_],p[_]);else{l.multiDrawArraysInstancedWEBGL(n,d,0,h,0,p,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*p[g];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function gm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Cn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ni&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Qn&&!P)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const h=c(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const u=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:d,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:l,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:O,maxSamples:R}}function vm(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Di,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const l=u.length!==0||p||n!==0||r;return r=p,n=u.length,l},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,l){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!r||_===null||_.length===0||s&&!m)s?h(null):d();else{const T=s?0:n,M=T*4;let E=f.clippingState||null;c.value=E,E=h(_,p,M,l);for(let O=0;O!==M;++O)E[O]=t[O];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,l,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const f=l+g*4,T=p.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,E=l;M!==g;++M,E+=4)o.copy(u[M]).applyMatrix4(T,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function xm(i){let e=new WeakMap;function t(o,a){return a===ea?o.mapping=vr:a===ta&&(o.mapping=xr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ea||a===ta)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const d=new xu(c.height);return d.fromEquirectangularTexture(i,o),e.set(o,d),o.addEventListener("dispose",r),t(d.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const fr=4,Vc=[.125,.215,.35,.446,.526,.582],Ni=20,Ro=new pd,Wc=new ut;let wo=null,Co=0,Io=0,Do=!1;const Oi=(1+Math.sqrt(5))/2,sr=1/Oi,Xc=[new W(-Oi,sr,0),new W(Oi,sr,0),new W(-sr,0,Oi),new W(sr,0,Oi),new W(0,Oi,-sr),new W(0,Oi,sr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],ym=new W;class qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=ym}=s;wo=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,Co,Io),this._renderer.xr.enabled=Do,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vr||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:jr,format:Cn,colorSpace:yr,depthBuffer:!1},r=Kc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sm(s)),this._blurMaterial=Em(s,e,t)}return r}_compileMaterial(e){const t=new un(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,n,r,s){const c=new xn(90,1,t,n),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,l=u.toneMapping;u.getClearColor(Wc),u.toneMapping=_i,u.autoClear=!1;const _=new od({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new un(new yi,_);let m=!1;const f=e.background;f?f.isColor&&(_.color.copy(f),e.background=null,m=!0):(_.color.copy(Wc),m=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(c.up.set(0,d[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):M===1?(c.up.set(0,0,d[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,d[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));const E=this._cubeSize;bs(r,M*E,T>2?E:0,E,E),u.setRenderTarget(r),m&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=l,u.autoClear=p,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===vr||e.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;bs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ro)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xc[(r-s-1)%Xc.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new un(this._lodPlanes[r],d),p=d.uniforms,l=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*l):2*Math.PI/(2*Ni-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Ni;m>Ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const f=[];let T=0;for(let w=0;w<Ni;++w){const P=w/g,b=Math.exp(-P*P/2);f.push(b),w===0?T+=b:w<m&&(T+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:M}=this;p.dTheta.value=_,p.mipInt.value=M-n;const E=this._sizeLods[r],O=3*E*(r>M-fr?r-M+fr:0),R=4*(this._cubeSize-E);bs(t,O,R,3*E,2*E),c.setRenderTarget(t),c.render(u,Ro)}}function Sm(i){const e=[],t=[],n=[];let r=i;const s=i-fr+1+Vc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-fr?c=Vc[o-i+fr-1]:o===0&&(c=0),n.push(c);const d=1/(a-2),h=-d,u=1+d,p=[h,h,u,h,u,u,h,h,u,u,h,u],l=6,_=6,g=3,m=2,f=1,T=new Float32Array(g*_*l),M=new Float32Array(m*_*l),E=new Float32Array(f*_*l);for(let R=0;R<l;R++){const w=R%3*2/3-1,P=R>2?0:-1,b=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];T.set(b,g*_*R),M.set(p,m*_*R);const y=[R,R,R,R,R,R];E.set(y,f*_*R)}const O=new xi;O.setAttribute("position",new Bn(T,g)),O.setAttribute("uv",new Bn(M,m)),O.setAttribute("faceIndex",new Bn(E,f)),e.push(O),r>fr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kc(i,e,t){const n=new Hi(i,e,t);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Em(i,e,t){const n=new Float32Array(Ni),r=new W(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Yc(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function $c(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function Mm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,d=c===ea||c===ta,h=c===vr||c===xr;if(d||h){let u=e.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new qc(i)),u=d?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const l=a.image;return d&&l&&l.height>0||h&&l&&r(l)?(t===null&&(t=new qc(i)),u=d?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const d=6;for(let h=0;h<d;h++)a[h]!==void 0&&c++;return c===d}function s(a){const c=a.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Tm(i,e,t,n){const r={},s=new WeakMap;function o(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);p.removeEventListener("dispose",o),delete r[p.id];const l=s.get(p);l&&(e.remove(l),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(u){const p=u.attributes;for(const l in p)e.update(p[l],i.ARRAY_BUFFER)}function d(u){const p=[],l=u.index,_=u.attributes.position;let g=0;if(l!==null){const T=l.array;g=l.version;for(let M=0,E=T.length;M<E;M+=3){const O=T[M+0],R=T[M+1],w=T[M+2];p.push(O,R,R,w,w,O)}}else if(_!==void 0){const T=_.array;g=_.version;for(let M=0,E=T.length/3-1;M<E;M+=3){const O=M+0,R=M+1,w=M+2;p.push(O,R,R,w,w,O)}}else return;const m=new(nd(p)?cd:ad)(p,1);m.version=g;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const p=s.get(u);if(p){const l=u.index;l!==null&&p.version<l.version&&d(u)}else d(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Am(i,e,t){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,l){i.drawElements(n,l,s,p*o),t.update(l,n,1)}function d(p,l,_){_!==0&&(i.drawElementsInstanced(n,l,s,p*o,_),t.update(l,n,_))}function h(p,l,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,s,p,0,_);let m=0;for(let f=0;f<_;f++)m+=l[f];t.update(m,n,1)}function u(p,l,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)d(p[f]/o,l[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,l,0,s,p,0,g,0,_);let f=0;for(let T=0;T<_;T++)f+=l[T]*g[T];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Rm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wm(i,e,t){const n=new WeakMap,r=new bt;function s(o,a,c){const d=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==u){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();const l=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;l===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let E=a.attributes.position.count*M,O=1;E>e.maxTextureSize&&(O=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*O*4*u),w=new id(R,E,O,u);w.type=Qn,w.needsUpdate=!0;const P=M*4;for(let y=0;y<u;y++){const I=m[y],X=f[y],F=T[y],j=E*O*4*y;for(let te=0;te<I.count;te++){const Z=te*P;l===!0&&(r.fromBufferAttribute(I,te),R[j+Z+0]=r.x,R[j+Z+1]=r.y,R[j+Z+2]=r.z,R[j+Z+3]=0),_===!0&&(r.fromBufferAttribute(X,te),R[j+Z+4]=r.x,R[j+Z+5]=r.y,R[j+Z+6]=r.z,R[j+Z+7]=0),g===!0&&(r.fromBufferAttribute(F,te),R[j+Z+8]=r.x,R[j+Z+9]=r.y,R[j+Z+10]=r.z,R[j+Z+11]=F.itemSize===4?r.w:1)}}p={count:u,texture:w,size:new pt(E,O)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let l=0;for(let g=0;g<d.length;g++)l+=d[g];const _=a.morphTargetsRelative?1:1-l;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",d)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Cm(i,e,t,n){let r=new WeakMap;function s(c){const d=n.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return u}function o(){r=new WeakMap}function a(c){const d=c.target;d.removeEventListener("dispose",a),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const _d=new tn,jc=new ud(1,1),gd=new id,vd=new tu,xd=new hd,Zc=[],Qc=[],Jc=new Float32Array(16),el=new Float32Array(9),tl=new Float32Array(4);function br(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Zc[r];if(s===void 0&&(s=new Float32Array(r),Zc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zs(i,e){let t=Qc[e];t===void 0&&(t=new Int32Array(e),Qc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function Pm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,n))return;tl.set(n),i.uniformMatrix2fv(this.addr,!1,tl),Pt(t,n)}}function Nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,n))return;el.set(n),i.uniformMatrix3fv(this.addr,!1,el),Pt(t,n)}}function km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,n))return;Jc.set(n),i.uniformMatrix4fv(this.addr,!1,Jc),Pt(t,n)}}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function Hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function Xm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(jc.compareFunction=td,s=jc):s=_d,t.setTexture2D(e||s,r)}function qm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vd,r)}function Km(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||xd,r)}function Ym(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||gd,r)}function $m(i){switch(i){case 5126:return Im;case 35664:return Dm;case 35665:return Om;case 35666:return Lm;case 35674:return Pm;case 35675:return Nm;case 35676:return km;case 5124:case 35670:return Um;case 35667:case 35671:return Bm;case 35668:case 35672:return Fm;case 35669:case 35673:return zm;case 5125:return Hm;case 36294:return Gm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Ym}}function jm(i,e){i.uniform1fv(this.addr,e)}function Zm(i,e){const t=br(e,this.size,2);i.uniform2fv(this.addr,t)}function Qm(i,e){const t=br(e,this.size,3);i.uniform3fv(this.addr,t)}function Jm(i,e){const t=br(e,this.size,4);i.uniform4fv(this.addr,t)}function e_(i,e){const t=br(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function t_(i,e){const t=br(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function n_(i,e){const t=br(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function i_(i,e){i.uniform1iv(this.addr,e)}function r_(i,e){i.uniform2iv(this.addr,e)}function s_(i,e){i.uniform3iv(this.addr,e)}function o_(i,e){i.uniform4iv(this.addr,e)}function a_(i,e){i.uniform1uiv(this.addr,e)}function c_(i,e){i.uniform2uiv(this.addr,e)}function l_(i,e){i.uniform3uiv(this.addr,e)}function d_(i,e){i.uniform4uiv(this.addr,e)}function h_(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||_d,s[o])}function u_(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vd,s[o])}function f_(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||xd,s[o])}function p_(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||gd,s[o])}function m_(i){switch(i){case 5126:return jm;case 35664:return Zm;case 35665:return Qm;case 35666:return Jm;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return r_;case 35668:case 35672:return s_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return c_;case 36295:return l_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}class __{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$m(t.type)}}class g_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m_(t.type)}}class v_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function nl(i,e){i.seq.push(e),i.map[e.id]=e}function x_(i,e,t){const n=i.name,r=n.length;for(Oo.lastIndex=0;;){const s=Oo.exec(n),o=Oo.lastIndex;let a=s[1];const c=s[2]==="]",d=s[3];if(c&&(a=a|0),d===void 0||d==="["&&o+2===r){nl(t,d===void 0?new __(a,i,e):new g_(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new v_(a),nl(t,u)),t=u}}}class Bs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);x_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function il(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const y_=37297;let S_=0;function E_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const rl=new Ke;function M_(i){ht._getMatrix(rl,ht.workingColorSpace,i);const e=`mat3( ${rl.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Vs:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+E_(i.getShaderSource(e),o)}else return r}function b_(i,e){const t=M_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function T_(i,e){let t;switch(e){case Rh:t="Linear";break;case wh:t="Reinhard";break;case Ch:t="Cineon";break;case Ih:t="ACESFilmic";break;case Oh:t="AgX";break;case Lh:t="Neutral";break;case Dh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ts=new W;function A_(){ht.getLuminanceCoefficients(Ts);const i=Ts.x.toFixed(4),e=Ts.y.toFixed(4),t=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function w_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function C_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function zr(i){return i!==""}function ol(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function al(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(I_,O_)}const D_=new Map;function O_(i,e){let t=$e[e];if(t===void 0){const n=D_.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}const L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(i){return i.replace(L_,P_)}function P_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ll(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function N_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function k_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vr:case xr:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===xr&&(e="ENVMAP_MODE_REFRACTION"),e}function B_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xa:e="ENVMAP_BLENDING_MULTIPLY";break;case Th:e="ENVMAP_BLENDING_MIX";break;case Ah:e="ENVMAP_BLENDING_ADD";break}return e}function F_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function z_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=N_(t),d=k_(t),h=U_(t),u=B_(t),p=F_(t),l=R_(t),_=w_(s),g=r.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zr).join(`
`),f.length>0&&(f+=`
`)):(m=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),f=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?$e.tonemapping_pars_fragment:"",t.toneMapping!==_i?T_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,b_("linearToOutputTexel",t.outputColorSpace),A_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),o=Da(o),o=ol(o,t),o=al(o,t),a=Da(a),a=ol(a,t),a=al(a,t),o=cl(o),a=cl(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=T+m+o,E=T+f+a,O=il(r,r.VERTEX_SHADER,M),R=il(r,r.FRAGMENT_SHADER,E);r.attachShader(g,O),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(I){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(g).trim(),F=r.getShaderInfoLog(O).trim(),j=r.getShaderInfoLog(R).trim();let te=!0,Z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,O,R);else{const ce=sl(r,O,"vertex"),q=sl(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+ce+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(F===""||j==="")&&(Z=!1);Z&&(I.diagnostics={runnable:te,programLog:X,vertexShader:{log:F,prefix:m},fragmentShader:{log:j,prefix:f}})}r.deleteShader(O),r.deleteShader(R),P=new Bs(r,g),b=C_(r,g)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,y_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=O,this.fragmentShader=R,this}let H_=0;class G_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new V_(e),t.set(e,n)),n}}class V_{constructor(e){this.id=H_++,this.code=e,this.usedTimes=0}}function W_(i,e,t,n,r,s,o){const a=new rd,c=new G_,d=new Set,h=[],u=r.logarithmicDepthBuffer,p=r.vertexTextures;let l=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return d.add(b),b===0?"uv":`uv${b}`}function m(b,y,I,X,F){const j=X.fog,te=F.geometry,Z=b.isMeshStandardMaterial?X.environment:null,ce=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),q=ce&&ce.mapping===Ys?ce.image.height:null,he=_[b.type];b.precision!==null&&(l=r.getMaxPrecision(b.precision),l!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",l,"instead."));const Te=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,De=Te!==void 0?Te.length:0;let We=0;te.morphAttributes.position!==void 0&&(We=1),te.morphAttributes.normal!==void 0&&(We=2),te.morphAttributes.color!==void 0&&(We=3);let ct,Q,me,we;if(he){const ve=Nn[he];ct=ve.vertexShader,Q=ve.fragmentShader}else ct=b.vertexShader,Q=b.fragmentShader,c.update(b),me=c.getVertexShaderID(b),we=c.getFragmentShaderID(b);const ge=i.getRenderTarget(),Ge=i.state.buffers.depth.getReversed(),tt=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,yt=!!b.map,ot=!!b.matcap,ze=!!ce,D=!!b.aoMap,Bt=!!b.lightMap,je=!!b.bumpMap,Ye=!!b.normalMap,Ae=!!b.displacementMap,ft=!!b.emissiveMap,Oe=!!b.metalnessMap,A=!!b.roughnessMap,x=b.anisotropy>0,N=b.clearcoat>0,Y=b.dispersion>0,ie=b.iridescence>0,ee=b.sheen>0,B=b.transmission>0,ne=x&&!!b.anisotropyMap,de=N&&!!b.clearcoatMap,Pe=N&&!!b.clearcoatNormalMap,ae=N&&!!b.clearcoatRoughnessMap,_e=ie&&!!b.iridescenceMap,Le=ie&&!!b.iridescenceThicknessMap,Ne=ee&&!!b.sheenColorMap,Me=ee&&!!b.sheenRoughnessMap,et=!!b.specularMap,qe=!!b.specularColorMap,mt=!!b.specularIntensityMap,L=B&&!!b.transmissionMap,pe=B&&!!b.thicknessMap,K=!!b.gradientMap,J=!!b.alphaMap,Ee=b.alphaTest>0,xe=!!b.alphaHash,Ue=!!b.extensions;let St=_i;b.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(St=i.toneMapping);const Nt={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:ct,fragmentShader:Q,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:l,batching:Fe,batchingColor:Fe&&F._colorsTexture!==null,instancing:tt,instancingColor:tt&&F.instanceColor!==null,instancingMorph:tt&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:yr,alphaToCoverage:!!b.alphaToCoverage,map:yt,matcap:ot,envMap:ze,envMapMode:ze&&ce.mapping,envMapCubeUVHeight:q,aoMap:D,lightMap:Bt,bumpMap:je,normalMap:Ye,displacementMap:p&&Ae,emissiveMap:ft,normalMapObjectSpace:Ye&&b.normalMapType===Uh,normalMapTangentSpace:Ye&&b.normalMapType===ed,metalnessMap:Oe,roughnessMap:A,anisotropy:x,anisotropyMap:ne,clearcoat:N,clearcoatMap:de,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ae,dispersion:Y,iridescence:ie,iridescenceMap:_e,iridescenceThicknessMap:Le,sheen:ee,sheenColorMap:Ne,sheenRoughnessMap:Me,specularMap:et,specularColorMap:qe,specularIntensityMap:mt,transmission:B,transmissionMap:L,thicknessMap:pe,gradientMap:K,opaque:b.transparent===!1&&b.blending===pr&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:Ee,alphaHash:xe,combine:b.combine,mapUv:yt&&g(b.map.channel),aoMapUv:D&&g(b.aoMap.channel),lightMapUv:Bt&&g(b.lightMap.channel),bumpMapUv:je&&g(b.bumpMap.channel),normalMapUv:Ye&&g(b.normalMap.channel),displacementMapUv:Ae&&g(b.displacementMap.channel),emissiveMapUv:ft&&g(b.emissiveMap.channel),metalnessMapUv:Oe&&g(b.metalnessMap.channel),roughnessMapUv:A&&g(b.roughnessMap.channel),anisotropyMapUv:ne&&g(b.anisotropyMap.channel),clearcoatMapUv:de&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(b.sheenRoughnessMap.channel),specularMapUv:et&&g(b.specularMap.channel),specularColorMapUv:qe&&g(b.specularColorMap.channel),specularIntensityMapUv:mt&&g(b.specularIntensityMap.channel),transmissionMapUv:L&&g(b.transmissionMap.channel),thicknessMapUv:pe&&g(b.thicknessMap.channel),alphaMapUv:J&&g(b.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ye||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!te.attributes.uv&&(yt||J),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ge,skinning:F.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:We,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:yt&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===vt,decodeVideoTextureEmissive:ft&&b.emissiveMap.isVideoTexture===!0&&ht.getTransfer(b.emissiveMap.colorSpace)===vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===jn,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ue&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&b.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Nt.vertexUv1s=d.has(1),Nt.vertexUv2s=d.has(2),Nt.vertexUv3s=d.has(3),d.clear(),Nt}function f(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)y.push(I),y.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(T(y,b),M(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function T(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function E(b){const y=_[b.type];let I;if(y){const X=Nn[y];I=mu.clone(X.uniforms)}else I=b.uniforms;return I}function O(b,y){let I;for(let X=0,F=h.length;X<F;X++){const j=h[X];if(j.cacheKey===y){I=j,++I.usedTimes;break}}return I===void 0&&(I=new z_(i,y,b,s),h.push(I)),I}function R(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function w(b){c.remove(b)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:O,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:P}}function X_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,p,l,_,g,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:l,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=l,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function a(u,p,l,_,g,m){const f=o(u,p,l,_,g,m);l.transmission>0?n.push(f):l.transparent===!0?r.push(f):t.push(f)}function c(u,p,l,_,g,m){const f=o(u,p,l,_,g,m);l.transmission>0?n.unshift(f):l.transparent===!0?r.unshift(f):t.unshift(f)}function d(u,p){t.length>1&&t.sort(u||q_),n.length>1&&n.sort(p||dl),r.length>1&&r.sort(p||dl)}function h(){for(let u=e,p=i.length;u<p;u++){const l=i[u];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:d}}function K_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new hl,i.set(n,[o])):r>=s.length?(o=new hl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Y_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ut};break;case"SpotLight":t={position:new W,direction:new W,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function $_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let j_=0;function Z_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Q_(i){const e=new Y_,t=$_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new W);const r=new W,s=new Tt,o=new Tt;function a(d){let h=0,u=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let l=0,_=0,g=0,m=0,f=0,T=0,M=0,E=0,O=0,R=0,w=0;d.sort(Z_);for(let b=0,y=d.length;b<y;b++){const I=d[b],X=I.color,F=I.intensity,j=I.distance,te=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=X.r*F,u+=X.g*F,p+=X.b*F;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],F);w++}else if(I.isDirectionalLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ce=I.shadow,q=t.get(I);q.shadowIntensity=ce.intensity,q.shadowBias=ce.bias,q.shadowNormalBias=ce.normalBias,q.shadowRadius=ce.radius,q.shadowMapSize=ce.mapSize,n.directionalShadow[l]=q,n.directionalShadowMap[l]=te,n.directionalShadowMatrix[l]=I.shadow.matrix,T++}n.directional[l]=Z,l++}else if(I.isSpotLight){const Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(X).multiplyScalar(F),Z.distance=j,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[g]=Z;const ce=I.shadow;if(I.map&&(n.spotLightMap[O]=I.map,O++,ce.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[g]=ce.matrix,I.castShadow){const q=t.get(I);q.shadowIntensity=ce.intensity,q.shadowBias=ce.bias,q.shadowNormalBias=ce.normalBias,q.shadowRadius=ce.radius,q.shadowMapSize=ce.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=te,E++}g++}else if(I.isRectAreaLight){const Z=e.get(I);Z.color.copy(X).multiplyScalar(F),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Z,m++}else if(I.isPointLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const ce=I.shadow,q=t.get(I);q.shadowIntensity=ce.intensity,q.shadowBias=ce.bias,q.shadowNormalBias=ce.normalBias,q.shadowRadius=ce.radius,q.shadowMapSize=ce.mapSize,q.shadowCameraNear=ce.camera.near,q.shadowCameraFar=ce.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=te,n.pointShadowMatrix[_]=I.shadow.matrix,M++}n.point[_]=Z,_++}else if(I.isHemisphereLight){const Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(F),Z.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[f]=Z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==l||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==T||P.numPointShadows!==M||P.numSpotShadows!==E||P.numSpotMaps!==O||P.numLightProbes!==w)&&(n.directional.length=l,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+O-R,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,P.directionalLength=l,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=T,P.numPointShadows=M,P.numSpotShadows=E,P.numSpotMaps=O,P.numLightProbes=w,n.version=j_++)}function c(d,h){let u=0,p=0,l=0,_=0,g=0;const m=h.matrixWorldInverse;for(let f=0,T=d.length;f<T;f++){const M=d[f];if(M.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),u++}else if(M.isSpotLight){const E=n.spot[l];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),l++}else if(M.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function ul(i){const e=new Q_(i),t=[],n=[];function r(h){d.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function J_(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ul(i),e.set(r,[a])):s>=o.length?(a=new ul(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const e0=`void main() {
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
}`;function n0(i,e,t){let n=new tc;const r=new pt,s=new pt,o=new bt,a=new bu({depthPacking:kh}),c=new Tu,d={},h=t.maxTextureSize,u={[gi]:en,[en]:gi,[jn]:jn},p=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:e0,fragmentShader:t0}),l=p.clone();l.defines.HORIZONTAL_PASS=1;const _=new xi;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new un(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let f=this.type;this.render=function(R,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),X=i.state;X.setBlending(mi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const F=f!==Kn&&this.type===Kn,j=f===Kn&&this.type!==Kn;for(let te=0,Z=R.length;te<Z;te++){const ce=R[te],q=ce.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const he=q.getFrameExtents();if(r.multiply(he),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/he.x),r.x=s.x*he.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/he.y),r.y=s.y*he.y,q.mapSize.y=s.y)),q.map===null||F===!0||j===!0){const De=this.type!==Kn?{minFilter:In,magFilter:In}:{};q.map!==null&&q.map.dispose(),q.map=new Hi(r.x,r.y,De),q.map.texture.name=ce.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const Te=q.getViewportCount();for(let De=0;De<Te;De++){const We=q.getViewport(De);o.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),X.viewport(o),q.updateMatrices(ce,De),n=q.getFrustum(),E(w,P,q.camera,ce,this.type)}q.isPointLightShadow!==!0&&this.type===Kn&&T(q,P),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,I)};function T(R,w){const P=e.update(g);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,l.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,l.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Hi(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,P,p,g,null),l.uniforms.shadow_pass.value=R.mapPass.texture,l.uniforms.resolution.value=R.mapSize,l.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,P,l,g,null)}function M(R,w,P,b){let y=null;const I=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)y=I;else if(y=P.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const X=y.uuid,F=w.uuid;let j=d[X];j===void 0&&(j={},d[X]=j);let te=j[F];te===void 0&&(te=y.clone(),j[F]=te,w.addEventListener("dispose",O)),y=te}if(y.visible=w.visible,y.wireframe=w.wireframe,b===Kn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=i.properties.get(y);X.light=P}return y}function E(R,w,P,b,y){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Kn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const F=e.update(R),j=R.material;if(Array.isArray(j)){const te=F.groups;for(let Z=0,ce=te.length;Z<ce;Z++){const q=te[Z],he=j[q.materialIndex];if(he&&he.visible){const Te=M(R,he,b,y);R.onBeforeShadow(i,R,w,P,F,Te,q),i.renderBufferDirect(P,null,F,Te,R,q),R.onAfterShadow(i,R,w,P,F,Te,q)}}}else if(j.visible){const te=M(R,j,b,y);R.onBeforeShadow(i,R,w,P,F,te,null),i.renderBufferDirect(P,null,F,te,R,null),R.onAfterShadow(i,R,w,P,F,te,null)}}const X=R.children;for(let F=0,j=X.length;F<j;F++)E(X[F],w,P,b,y)}function O(R){R.target.removeEventListener("dispose",O);for(const P in d){const b=d[P],y=R.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const i0={[Ko]:Yo,[$o]:Qo,[jo]:Jo,[gr]:Zo,[Yo]:Ko,[Qo]:$o,[Jo]:jo,[Zo]:gr};function r0(i,e){function t(){let L=!1;const pe=new bt;let K=null;const J=new bt(0,0,0,0);return{setMask:function(Ee){K!==Ee&&!L&&(i.colorMask(Ee,Ee,Ee,Ee),K=Ee)},setLocked:function(Ee){L=Ee},setClear:function(Ee,xe,Ue,St,Nt){Nt===!0&&(Ee*=St,xe*=St,Ue*=St),pe.set(Ee,xe,Ue,St),J.equals(pe)===!1&&(i.clearColor(Ee,xe,Ue,St),J.copy(pe))},reset:function(){L=!1,K=null,J.set(-1,0,0,0)}}}function n(){let L=!1,pe=!1,K=null,J=null,Ee=null;return{setReversed:function(xe){if(pe!==xe){const Ue=e.get("EXT_clip_control");xe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),pe=xe;const St=Ee;Ee=null,this.setClear(St)}},getReversed:function(){return pe},setTest:function(xe){xe?ge(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(xe){K!==xe&&!L&&(i.depthMask(xe),K=xe)},setFunc:function(xe){if(pe&&(xe=i0[xe]),J!==xe){switch(xe){case Ko:i.depthFunc(i.NEVER);break;case Yo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case jo:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case Qo:i.depthFunc(i.GREATER);break;case Jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=xe}},setLocked:function(xe){L=xe},setClear:function(xe){Ee!==xe&&(pe&&(xe=1-xe),i.clearDepth(xe),Ee=xe)},reset:function(){L=!1,K=null,J=null,Ee=null,pe=!1}}}function r(){let L=!1,pe=null,K=null,J=null,Ee=null,xe=null,Ue=null,St=null,Nt=null;return{setTest:function(ve){L||(ve?ge(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(ve){pe!==ve&&!L&&(i.stencilMask(ve),pe=ve)},setFunc:function(ve,nn,yn){(K!==ve||J!==nn||Ee!==yn)&&(i.stencilFunc(ve,nn,yn),K=ve,J=nn,Ee=yn)},setOp:function(ve,nn,yn){(xe!==ve||Ue!==nn||St!==yn)&&(i.stencilOp(ve,nn,yn),xe=ve,Ue=nn,St=yn)},setLocked:function(ve){L=ve},setClear:function(ve){Nt!==ve&&(i.clearStencil(ve),Nt=ve)},reset:function(){L=!1,pe=null,K=null,J=null,Ee=null,xe=null,Ue=null,St=null,Nt=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,d=new WeakMap;let h={},u={},p=new WeakMap,l=[],_=null,g=!1,m=null,f=null,T=null,M=null,E=null,O=null,R=null,w=new ut(0,0,0),P=0,b=!1,y=null,I=null,X=null,F=null,j=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ce=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=ce>=1):q.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=ce>=2);let he=null,Te={};const De=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),ct=new bt().fromArray(De),Q=new bt().fromArray(We);function me(L,pe,K,J){const Ee=new Uint8Array(4),xe=i.createTexture();i.bindTexture(L,xe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<K;Ue++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(pe+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return xe}const we={};we[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(i.DEPTH_TEST),o.setFunc(gr),je(!1),Ye(_c),ge(i.CULL_FACE),D(mi);function ge(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ge(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function tt(L,pe){return u[L]!==pe?(i.bindFramebuffer(L,pe),u[L]=pe,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Fe(L,pe){let K=l,J=!1;if(L){K=p.get(pe),K===void 0&&(K=[],p.set(pe,K));const Ee=L.textures;if(K.length!==Ee.length||K[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Ue=Ee.length;xe<Ue;xe++)K[xe]=i.COLOR_ATTACHMENT0+xe;K.length=Ee.length,J=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,J=!0);J&&i.drawBuffers(K)}function yt(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const ot={[Pi]:i.FUNC_ADD,[ch]:i.FUNC_SUBTRACT,[lh]:i.FUNC_REVERSE_SUBTRACT};ot[dh]=i.MIN,ot[hh]=i.MAX;const ze={[uh]:i.ZERO,[fh]:i.ONE,[ph]:i.SRC_COLOR,[Xo]:i.SRC_ALPHA,[yh]:i.SRC_ALPHA_SATURATE,[vh]:i.DST_COLOR,[_h]:i.DST_ALPHA,[mh]:i.ONE_MINUS_SRC_COLOR,[qo]:i.ONE_MINUS_SRC_ALPHA,[xh]:i.ONE_MINUS_DST_COLOR,[gh]:i.ONE_MINUS_DST_ALPHA,[Sh]:i.CONSTANT_COLOR,[Eh]:i.ONE_MINUS_CONSTANT_COLOR,[Mh]:i.CONSTANT_ALPHA,[bh]:i.ONE_MINUS_CONSTANT_ALPHA};function D(L,pe,K,J,Ee,xe,Ue,St,Nt,ve){if(L===mi){g===!0&&(Ge(i.BLEND),g=!1);return}if(g===!1&&(ge(i.BLEND),g=!0),L!==ah){if(L!==m||ve!==b){if((f!==Pi||E!==Pi)&&(i.blendEquation(i.FUNC_ADD),f=Pi,E=Pi),ve)switch(L){case pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFunc(i.ONE,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,M=null,O=null,R=null,w.set(0,0,0),P=0,m=L,b=ve}return}Ee=Ee||pe,xe=xe||K,Ue=Ue||J,(pe!==f||Ee!==E)&&(i.blendEquationSeparate(ot[pe],ot[Ee]),f=pe,E=Ee),(K!==T||J!==M||xe!==O||Ue!==R)&&(i.blendFuncSeparate(ze[K],ze[J],ze[xe],ze[Ue]),T=K,M=J,O=xe,R=Ue),(St.equals(w)===!1||Nt!==P)&&(i.blendColor(St.r,St.g,St.b,Nt),w.copy(St),P=Nt),m=L,b=!1}function Bt(L,pe){L.side===jn?Ge(i.CULL_FACE):ge(i.CULL_FACE);let K=L.side===en;pe&&(K=!K),je(K),L.blending===pr&&L.transparent===!1?D(mi):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const J=L.stencilWrite;a.setTest(J),J&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ft(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function Ye(L){L!==rh?(ge(i.CULL_FACE),L!==I&&(L===_c?i.cullFace(i.BACK):L===sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),I=L}function Ae(L){L!==X&&(Z&&i.lineWidth(L),X=L)}function ft(L,pe,K){L?(ge(i.POLYGON_OFFSET_FILL),(F!==pe||j!==K)&&(i.polygonOffset(pe,K),F=pe,j=K)):Ge(i.POLYGON_OFFSET_FILL)}function Oe(L){L?ge(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+te-1),he!==L&&(i.activeTexture(L),he=L)}function x(L,pe,K){K===void 0&&(he===null?K=i.TEXTURE0+te-1:K=he);let J=Te[K];J===void 0&&(J={type:void 0,texture:void 0},Te[K]=J),(J.type!==L||J.texture!==pe)&&(he!==K&&(i.activeTexture(K),he=K),i.bindTexture(L,pe||we[L]),J.type=L,J.texture=pe)}function N(){const L=Te[he];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(L){ct.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ct.copy(L))}function Me(L){Q.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function et(L,pe){let K=d.get(pe);K===void 0&&(K=new WeakMap,d.set(pe,K));let J=K.get(L);J===void 0&&(J=i.getUniformBlockIndex(pe,L.name),K.set(L,J))}function qe(L,pe){const J=d.get(pe).get(L);c.get(pe)!==J&&(i.uniformBlockBinding(pe,J,L.__bindingPointIndex),c.set(pe,J))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},he=null,Te={},u={},p=new WeakMap,l=[],_=null,g=!1,m=null,f=null,T=null,M=null,E=null,O=null,R=null,w=new ut(0,0,0),P=0,b=!1,y=null,I=null,X=null,F=null,j=null,ct.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ge,disable:Ge,bindFramebuffer:tt,drawBuffers:Fe,useProgram:yt,setBlending:D,setMaterial:Bt,setFlipSided:je,setCullFace:Ye,setLineWidth:Ae,setPolygonOffset:ft,setScissorTest:Oe,activeTexture:A,bindTexture:x,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:ie,texImage2D:_e,texImage3D:Le,updateUBOMapping:et,uniformBlockBinding:qe,texStorage2D:Pe,texStorage3D:ae,texSubImage2D:ee,texSubImage3D:B,compressedTexSubImage2D:ne,compressedTexSubImage3D:de,scissor:Ne,viewport:Me,reset:mt}}function s0(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new pt,h=new WeakMap;let u;const p=new WeakMap;let l=!1;try{l=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return l?new OffscreenCanvas(A,x):Xs("canvas")}function g(A,x,N){let Y=1;const ie=Oe(A);if((ie.width>N||ie.height>N)&&(Y=N/Math.max(ie.width,ie.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ee=Math.floor(Y*ie.width),B=Math.floor(Y*ie.height);u===void 0&&(u=_(ee,B));const ne=x?_(ee,B):u;return ne.width=ee,ne.height=B,ne.getContext("2d").drawImage(A,0,0,ee,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+B+")."),ne}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,x,N,Y,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=x;if(x===i.RED&&(N===i.FLOAT&&(ee=i.R32F),N===i.HALF_FLOAT&&(ee=i.R16F),N===i.UNSIGNED_BYTE&&(ee=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.R8UI),N===i.UNSIGNED_SHORT&&(ee=i.R16UI),N===i.UNSIGNED_INT&&(ee=i.R32UI),N===i.BYTE&&(ee=i.R8I),N===i.SHORT&&(ee=i.R16I),N===i.INT&&(ee=i.R32I)),x===i.RG&&(N===i.FLOAT&&(ee=i.RG32F),N===i.HALF_FLOAT&&(ee=i.RG16F),N===i.UNSIGNED_BYTE&&(ee=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.RG8UI),N===i.UNSIGNED_SHORT&&(ee=i.RG16UI),N===i.UNSIGNED_INT&&(ee=i.RG32UI),N===i.BYTE&&(ee=i.RG8I),N===i.SHORT&&(ee=i.RG16I),N===i.INT&&(ee=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),N===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),N===i.UNSIGNED_INT&&(ee=i.RGB32UI),N===i.BYTE&&(ee=i.RGB8I),N===i.SHORT&&(ee=i.RGB16I),N===i.INT&&(ee=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),N===i.UNSIGNED_INT&&(ee=i.RGBA32UI),N===i.BYTE&&(ee=i.RGBA8I),N===i.SHORT&&(ee=i.RGBA16I),N===i.INT&&(ee=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),x===i.RGBA){const B=ie?Vs:ht.getTransfer(Y);N===i.FLOAT&&(ee=i.RGBA32F),N===i.HALF_FLOAT&&(ee=i.RGBA16F),N===i.UNSIGNED_BYTE&&(ee=B===vt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(A,x){let N;return A?x===null||x===zi||x===qr?N=i.DEPTH24_STENCIL8:x===Qn?N=i.DEPTH32F_STENCIL8:x===Xr&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zi||x===qr?N=i.DEPTH_COMPONENT24:x===Qn?N=i.DEPTH_COMPONENT32F:x===Xr&&(N=i.DEPTH_COMPONENT16),N}function O(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==In&&A.minFilter!==kn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),P(x),x.isVideoTexture&&h.delete(x)}function w(A){const x=A.target;x.removeEventListener("dispose",w),y(x)}function P(A){const x=n.get(A);if(x.__webglInit===void 0)return;const N=A.source,Y=p.get(N);if(Y){const ie=Y[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(A),Object.keys(Y).length===0&&p.delete(N)}n.remove(A)}function b(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const N=A.source,Y=p.get(N);delete Y[x.__cacheKey],o.memory.textures--}function y(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let ie=0;ie<x.__webglFramebuffer[Y].length;ie++)i.deleteFramebuffer(x.__webglFramebuffer[Y][ie]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=A.textures;for(let Y=0,ie=N.length;Y<ie;Y++){const ee=n.get(N[Y]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(N[Y])}n.remove(A)}let I=0;function X(){I=0}function F(){const A=I;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function j(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function te(A,x){const N=n.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(N,A,x);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function Z(A,x){const N=n.get(A);if(A.version>0&&N.__version!==A.version){Q(N,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function ce(A,x){const N=n.get(A);if(A.version>0&&N.__version!==A.version){Q(N,A,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function q(A,x){const N=n.get(A);if(A.version>0&&N.__version!==A.version){me(N,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const he={[na]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},Te={[In]:i.NEAREST,[Ph]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},De={[Bh]:i.NEVER,[Wh]:i.ALWAYS,[Fh]:i.LESS,[td]:i.LEQUAL,[zh]:i.EQUAL,[Vh]:i.GEQUAL,[Hh]:i.GREATER,[Gh]:i.NOTEQUAL};function We(A,x){if(x.type===Qn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===kn||x.magFilter===to||x.magFilter===ss||x.magFilter===Bi||x.minFilter===kn||x.minFilter===to||x.minFilter===ss||x.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,he[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,he[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,he[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Te[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Te[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,De[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===In||x.minFilter!==ss&&x.minFilter!==Bi||x.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ct(A,x){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const Y=x.source;let ie=p.get(Y);ie===void 0&&(ie={},p.set(Y,ie));const ee=j(x);if(ee!==A.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ie[ee].usedTimes++;const B=ie[A.__cacheKey];B!==void 0&&(ie[A.__cacheKey].usedTimes--,B.usedTimes===0&&b(x)),A.__cacheKey=ee,A.__webglTexture=ie[ee].texture}return N}function Q(A,x,N){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);const ie=ct(A,x),ee=x.source;t.bindTexture(Y,A.__webglTexture,i.TEXTURE0+N);const B=n.get(ee);if(ee.version!==B.__version||ie===!0){t.activeTexture(i.TEXTURE0+N);const ne=ht.getPrimaries(ht.workingColorSpace),de=x.colorSpace===fi?null:ht.getPrimaries(x.colorSpace),Pe=x.colorSpace===fi||ne===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ae=g(x.image,!1,r.maxTextureSize);ae=ft(x,ae);const _e=s.convert(x.format,x.colorSpace),Le=s.convert(x.type);let Ne=M(x.internalFormat,_e,Le,x.colorSpace,x.isVideoTexture);We(Y,x);let Me;const et=x.mipmaps,qe=x.isVideoTexture!==!0,mt=B.__version===void 0||ie===!0,L=ee.dataReady,pe=O(x,ae);if(x.isDepthTexture)Ne=E(x.format===Yr,x.type),mt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ne,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Ne,ae.width,ae.height,0,_e,Le,null));else if(x.isDataTexture)if(et.length>0){qe&&mt&&t.texStorage2D(i.TEXTURE_2D,pe,Ne,et[0].width,et[0].height);for(let K=0,J=et.length;K<J;K++)Me=et[K],qe?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,_e,Le,Me.data):t.texImage2D(i.TEXTURE_2D,K,Ne,Me.width,Me.height,0,_e,Le,Me.data);x.generateMipmaps=!1}else qe?(mt&&t.texStorage2D(i.TEXTURE_2D,pe,Ne,ae.width,ae.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,_e,Le,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,ae.width,ae.height,0,_e,Le,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qe&&mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ne,et[0].width,et[0].height,ae.depth);for(let K=0,J=et.length;K<J;K++)if(Me=et[K],x.format!==Cn)if(_e!==null)if(qe){if(L)if(x.layerUpdates.size>0){const Ee=Gc(Me.width,Me.height,x.format,x.type);for(const xe of x.layerUpdates){const Ue=Me.data.subarray(xe*Ee/Me.data.BYTES_PER_ELEMENT,(xe+1)*Ee/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,xe,Me.width,Me.height,1,_e,Ue)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ae.depth,_e,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ne,Me.width,Me.height,ae.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ae.depth,_e,Le,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,Ne,Me.width,Me.height,ae.depth,0,_e,Le,Me.data)}else{qe&&mt&&t.texStorage2D(i.TEXTURE_2D,pe,Ne,et[0].width,et[0].height);for(let K=0,J=et.length;K<J;K++)Me=et[K],x.format!==Cn?_e!==null?qe?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,_e,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,K,Ne,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,_e,Le,Me.data):t.texImage2D(i.TEXTURE_2D,K,Ne,Me.width,Me.height,0,_e,Le,Me.data)}else if(x.isDataArrayTexture)if(qe){if(mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ne,ae.width,ae.height,ae.depth),L)if(x.layerUpdates.size>0){const K=Gc(ae.width,ae.height,x.format,x.type);for(const J of x.layerUpdates){const Ee=ae.data.subarray(J*K/ae.data.BYTES_PER_ELEMENT,(J+1)*K/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ae.width,ae.height,1,_e,Le,Ee)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,Le,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,ae.width,ae.height,ae.depth,0,_e,Le,ae.data);else if(x.isData3DTexture)qe?(mt&&t.texStorage3D(i.TEXTURE_3D,pe,Ne,ae.width,ae.height,ae.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,Le,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,ae.width,ae.height,ae.depth,0,_e,Le,ae.data);else if(x.isFramebufferTexture){if(mt)if(qe)t.texStorage2D(i.TEXTURE_2D,pe,Ne,ae.width,ae.height);else{let K=ae.width,J=ae.height;for(let Ee=0;Ee<pe;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ne,K,J,0,_e,Le,null),K>>=1,J>>=1}}else if(et.length>0){if(qe&&mt){const K=Oe(et[0]);t.texStorage2D(i.TEXTURE_2D,pe,Ne,K.width,K.height)}for(let K=0,J=et.length;K<J;K++)Me=et[K],qe?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,_e,Le,Me):t.texImage2D(i.TEXTURE_2D,K,Ne,_e,Le,Me);x.generateMipmaps=!1}else if(qe){if(mt){const K=Oe(ae);t.texStorage2D(i.TEXTURE_2D,pe,Ne,K.width,K.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Le,ae)}else t.texImage2D(i.TEXTURE_2D,0,Ne,_e,Le,ae);m(x)&&f(Y),B.__version=ee.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function me(A,x,N){if(x.image.length!==6)return;const Y=ct(A,x),ie=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+N);const ee=n.get(ie);if(ie.version!==ee.__version||Y===!0){t.activeTexture(i.TEXTURE0+N);const B=ht.getPrimaries(ht.workingColorSpace),ne=x.colorSpace===fi?null:ht.getPrimaries(x.colorSpace),de=x.colorSpace===fi||B===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Pe=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!Pe&&!ae?_e[J]=g(x.image[J],!0,r.maxCubemapSize):_e[J]=ae?x.image[J].image:x.image[J],_e[J]=ft(x,_e[J]);const Le=_e[0],Ne=s.convert(x.format,x.colorSpace),Me=s.convert(x.type),et=M(x.internalFormat,Ne,Me,x.colorSpace),qe=x.isVideoTexture!==!0,mt=ee.__version===void 0||Y===!0,L=ie.dataReady;let pe=O(x,Le);We(i.TEXTURE_CUBE_MAP,x);let K;if(Pe){qe&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,et,Le.width,Le.height);for(let J=0;J<6;J++){K=_e[J].mipmaps;for(let Ee=0;Ee<K.length;Ee++){const xe=K[Ee];x.format!==Cn?Ne!==null?qe?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,xe.width,xe.height,Ne,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,et,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,xe.width,xe.height,Ne,Me,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,et,xe.width,xe.height,0,Ne,Me,xe.data)}}}else{if(K=x.mipmaps,qe&&mt){K.length>0&&pe++;const J=Oe(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,et,J.width,J.height)}for(let J=0;J<6;J++)if(ae){qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,Ne,Me,_e[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,et,_e[J].width,_e[J].height,0,Ne,Me,_e[J].data);for(let Ee=0;Ee<K.length;Ee++){const Ue=K[Ee].image[J].image;qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,Ue.width,Ue.height,Ne,Me,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,et,Ue.width,Ue.height,0,Ne,Me,Ue.data)}}else{qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,Me,_e[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,et,Ne,Me,_e[J]);for(let Ee=0;Ee<K.length;Ee++){const xe=K[Ee];qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,Ne,Me,xe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,et,Ne,Me,xe.image[J])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),ee.__version=ie.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function we(A,x,N,Y,ie,ee){const B=s.convert(N.format,N.colorSpace),ne=s.convert(N.type),de=M(N.internalFormat,B,ne,N.colorSpace),Pe=n.get(x),ae=n.get(N);if(ae.__renderTarget=x,!Pe.__hasExternalTextures){const _e=Math.max(1,x.width>>ee),Le=Math.max(1,x.height>>ee);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,ee,de,_e,Le,x.depth,0,B,ne,null):t.texImage2D(ie,ee,de,_e,Le,0,B,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ye(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,ie,ae.__webglTexture,0,je(x)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,ie,ae.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(A,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const Y=x.depthTexture,ie=Y&&Y.isDepthTexture?Y.type:null,ee=E(x.stencilBuffer,ie),B=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=je(x);Ye(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,ee,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,ee,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ee,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,A)}else{const Y=x.textures;for(let ie=0;ie<Y.length;ie++){const ee=Y[ie],B=s.convert(ee.format,ee.colorSpace),ne=s.convert(ee.type),de=M(ee.internalFormat,B,ne,ee.colorSpace),Pe=je(x);N&&Ye(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,de,x.width,x.height):Ye(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,de,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),te(x.depthTexture,0);const ie=Y.__webglTexture,ee=je(x);if(x.depthTexture.format===Kr)Ye(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(x.depthTexture.format===Yr)Ye(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function tt(A){const x=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const ie=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",ie)};Y.addEventListener("dispose",ie),x.__depthDisposeCallback=ie}x.__boundDepthTexture=Y}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ge(x.__webglFramebuffer,A)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),ge(x.__webglDepthbuffer[Y],A,!1);else{const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ge(x.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(A,x,N){const Y=n.get(A);x!==void 0&&we(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&tt(A)}function yt(A){const x=A.texture,N=n.get(A),Y=n.get(x);A.addEventListener("dispose",w);const ie=A.textures,ee=A.isWebGLCubeRenderTarget===!0,B=ie.length>1;if(B||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,o.memory.textures++),ee){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let de=0;de<x.mipmaps.length;de++)N.__webglFramebuffer[ne][de]=i.createFramebuffer()}else N.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)N.__webglFramebuffer[ne]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(B)for(let ne=0,de=ie.length;ne<de;ne++){const Pe=n.get(ie[ne]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ye(A)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<ie.length;ne++){const de=ie[ne];N.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);const Pe=s.convert(de.format,de.colorSpace),ae=s.convert(de.type),_e=M(de.internalFormat,Pe,ae,de.colorSpace,A.isXRRenderTarget===!0),Le=je(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,_e,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),We(i.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)we(N.__webglFramebuffer[ne][de],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de);else we(N.__webglFramebuffer[ne],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(B){for(let ne=0,de=ie.length;ne<de;ne++){const Pe=ie[ne],ae=n.get(Pe);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),We(i.TEXTURE_2D,Pe),we(N.__webglFramebuffer,A,Pe,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,0),m(Pe)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,Y.__webglTexture),We(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)we(N.__webglFramebuffer[de],A,x,i.COLOR_ATTACHMENT0,ne,de);else we(N.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ne,0);m(x)&&f(ne),t.unbindTexture()}A.depthBuffer&&tt(A)}function ot(A){const x=A.textures;for(let N=0,Y=x.length;N<Y;N++){const ie=x[N];if(m(ie)){const ee=T(A),B=n.get(ie).__webglTexture;t.bindTexture(ee,B),f(ee),t.unbindTexture()}}}const ze=[],D=[];function Bt(A){if(A.samples>0){if(Ye(A)===!1){const x=A.textures,N=A.width,Y=A.height;let ie=i.COLOR_BUFFER_BIT;const ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=n.get(A),ne=x.length>1;if(ne)for(let de=0;de<x.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let de=0;de<x.length;de++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const Pe=n.get(x[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,ie,i.NEAREST),c===!0&&(ze.length=0,D.length=0,ze.push(i.COLOR_ATTACHMENT0+de),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ze.push(ee),D.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let de=0;de<x.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const Pe=n.get(x[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function je(A){return Math.min(r.maxSamples,A.samples)}function Ye(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ae(A){const x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function ft(A,x){const N=A.colorSpace,Y=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==yr&&N!==fi&&(ht.getTransfer(N)===vt?(Y!==Cn||ie!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function Oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(d.width=A.naturalWidth||A.width,d.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(d.width=A.displayWidth,d.height=A.displayHeight):(d.width=A.width,d.height=A.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=X,this.setTexture2D=te,this.setTexture2DArray=Z,this.setTexture3D=ce,this.setTextureCube=q,this.rebindTextures=Fe,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ye}function o0(i,e){function t(n,r=fi){let s;const o=ht.getTransfer(r);if(n===ni)return i.UNSIGNED_BYTE;if(n===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wl)return i.BYTE;if(n===Xl)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===jr)return i.HALF_FLOAT;if(n===Kl)return i.ALPHA;if(n===Yl)return i.RGB;if(n===Cn)return i.RGBA;if(n===$l)return i.LUMINANCE;if(n===jl)return i.LUMINANCE_ALPHA;if(n===Kr)return i.DEPTH_COMPONENT;if(n===Yr)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===$a)return i.RED_INTEGER;if(n===Ql)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===Za)return i.RGBA_INTEGER;if(n===Os||n===Ls||n===Ps||n===Ns)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Os)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Os)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ns)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ra||n===sa||n===oa||n===aa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===la||n===da)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ca||n===la)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===da)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===fa||n===pa||n===ma||n===_a||n===ga||n===va||n===xa||n===ya||n===Sa||n===Ea||n===Ma||n===ba)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ha)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fa)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_a)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===va)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sa)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ks||n===Ta||n===Aa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ks)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Aa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jl||n===Ra||n===wa||n===Ca)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ks)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const a0=`
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

}`;class l0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vi({vertexShader:a0,fragmentShader:c0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d0 extends Mr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,d=null,h=null,u=null,p=null,l=null,_=null;const g=new l0,m=t.getContextAttributes();let f=null,T=null;const M=[],E=[],O=new pt;let R=null;const w=new xn;w.viewport=new bt;const P=new xn;P.viewport=new bt;const b=[w,P],y=new Iu;let I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=M[Q];return me===void 0&&(me=new bo,M[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=M[Q];return me===void 0&&(me=new bo,M[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=M[Q];return me===void 0&&(me=new bo,M[Q]=me),me.getHandSpace()};function F(Q){const me=E.indexOf(Q.inputSource);if(me===-1)return;const we=M[me];we!==void 0&&(we.update(Q.inputSource,Q.frame,d||o),we.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",te);for(let Q=0;Q<M.length;Q++){const me=E[Q];me!==null&&(E[Q]=null,M[Q].disconnect(me))}I=null,X=null,g.reset(),e.setRenderTarget(f),l=null,p=null,u=null,r=null,T=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return p!==null?p:l},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",j),r.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(O),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,ge=null,Ge=null;m.depth&&(Ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=m.stencil?Yr:Kr,ge=m.stencil?qr:zi);const tt={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:s};u=new XRWebGLBinding(r,t),p=u.createProjectionLayer(tt),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new Hi(p.textureWidth,p.textureHeight,{format:Cn,type:ni,depthTexture:new ud(p.textureWidth,p.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const we={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};l=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:l}),e.setPixelRatio(1),e.setSize(l.framebufferWidth,l.framebufferHeight,!1),T=new Hi(l.framebufferWidth,l.framebufferHeight,{format:Cn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),d=null,o=await r.requestReferenceSpace(a),ct.setContext(r),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(Q){for(let me=0;me<Q.removed.length;me++){const we=Q.removed[me],ge=E.indexOf(we);ge>=0&&(E[ge]=null,M[ge].disconnect(we))}for(let me=0;me<Q.added.length;me++){const we=Q.added[me];let ge=E.indexOf(we);if(ge===-1){for(let tt=0;tt<M.length;tt++)if(tt>=E.length){E.push(we),ge=tt;break}else if(E[tt]===null){E[tt]=we,ge=tt;break}if(ge===-1)break}const Ge=M[ge];Ge&&Ge.connect(we)}}const Z=new W,ce=new W;function q(Q,me,we){Z.setFromMatrixPosition(me.matrixWorld),ce.setFromMatrixPosition(we.matrixWorld);const ge=Z.distanceTo(ce),Ge=me.projectionMatrix.elements,tt=we.projectionMatrix.elements,Fe=Ge[14]/(Ge[10]-1),yt=Ge[14]/(Ge[10]+1),ot=(Ge[9]+1)/Ge[5],ze=(Ge[9]-1)/Ge[5],D=(Ge[8]-1)/Ge[0],Bt=(tt[8]+1)/tt[0],je=Fe*D,Ye=Fe*Bt,Ae=ge/(-D+Bt),ft=Ae*-D;if(me.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ft),Q.translateZ(Ae),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ge[10]===-1)Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Oe=Fe+Ae,A=yt+Ae,x=je-ft,N=Ye+(ge-ft),Y=ot*yt/A*Oe,ie=ze*yt/A*Oe;Q.projectionMatrix.makePerspective(x,N,Y,ie,Oe,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let me=Q.near,we=Q.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(we=g.depthFar)),y.near=P.near=w.near=me,y.far=P.far=w.far=we,(I!==y.near||X!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,X=y.far),w.layers.mask=Q.layers.mask|2,P.layers.mask=Q.layers.mask|4,y.layers.mask=w.layers.mask|P.layers.mask;const ge=Q.parent,Ge=y.cameras;he(y,ge);for(let tt=0;tt<Ge.length;tt++)he(Ge[tt],ge);Ge.length===2?q(y,w,P):y.projectionMatrix.copy(w.projectionMatrix),Te(Q,y,ge)};function Te(Q,me,we){we===null?Q.matrix.copy(me.matrixWorld):(Q.matrix.copy(we.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ia*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&l===null))return c},this.setFoveation=function(Q){c=Q,p!==null&&(p.fixedFoveation=Q),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let De=null;function We(Q,me){if(h=me.getViewerPose(d||o),_=me,h!==null){const we=h.views;l!==null&&(e.setRenderTargetFramebuffer(T,l.framebuffer),e.setRenderTarget(T));let ge=!1;we.length!==y.cameras.length&&(y.cameras.length=0,ge=!0);for(let Fe=0;Fe<we.length;Fe++){const yt=we[Fe];let ot=null;if(l!==null)ot=l.getViewport(yt);else{const D=u.getViewSubImage(p,yt);ot=D.viewport,Fe===0&&(e.setRenderTargetTextures(T,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(T))}let ze=b[Fe];ze===void 0&&(ze=new xn,ze.layers.enable(Fe),ze.viewport=new bt,b[Fe]=ze),ze.matrix.fromArray(yt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(yt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(ot.x,ot.y,ot.width,ot.height),Fe===0&&(y.matrix.copy(ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ge===!0&&y.cameras.push(ze)}const Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const Fe=u.getDepthInformation(we[0]);Fe&&Fe.isValid&&Fe.texture&&g.init(e,Fe,r.renderState)}}for(let we=0;we<M.length;we++){const ge=E[we],Ge=M[we];ge!==null&&Ge!==void 0&&Ge.update(ge,me,d||o)}De&&De(Q,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),_=null}const ct=new md;ct.setAnimationLoop(We),this.setAnimationLoop=function(Q){De=Q},this.dispose=function(){}}}const wi=new Fn,h0=new Tt;function u0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ld(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,T,M,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&l(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,M):f.isSpriteMaterial?d(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===en&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===en&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),M=T.envMap,E=T.envMapRotation;M&&(m.envMap.value=M,wi.copy(E),wi.x*=-1,wi.y*=-1,wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(h0.makeRotationFromEuler(wi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function l(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===en&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function f0(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,M){const E=M.program;n.uniformBlockBinding(T,E)}function d(T,M){let E=r[T.id];E===void 0&&(_(T),E=h(T),r[T.id]=E,T.addEventListener("dispose",m));const O=M.program;n.updateUBOMapping(T,O);const R=e.render.frame;s[T.id]!==R&&(p(T),s[T.id]=R)}function h(T){const M=u();T.__bindingPointIndex=M;const E=i.createBuffer(),O=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,O,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const M=r[T.id],E=T.uniforms,O=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,w=E.length;R<w;R++){const P=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,y=P.length;b<y;b++){const I=P[b];if(l(I,R,b,O)===!0){const X=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let j=0;for(let te=0;te<F.length;te++){const Z=F[te],ce=g(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,X+j,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):(Z.toArray(I.__data,j),j+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function l(T,M,E,O){const R=T.value,w=M+"_"+E;if(O[w]===void 0)return typeof R=="number"||typeof R=="boolean"?O[w]=R:O[w]=R.clone(),!0;{const P=O[w];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return O[w]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(T){const M=T.uniforms;let E=0;const O=16;for(let w=0,P=M.length;w<P;w++){const b=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,I=b.length;y<I;y++){const X=b[y],F=Array.isArray(X.value)?X.value:[X.value];for(let j=0,te=F.length;j<te;j++){const Z=F[j],ce=g(Z),q=E%O,he=q%ce.boundary,Te=q+he;E+=he,Te!==0&&O-Te<ce.storage&&(E+=O-Te),X.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=ce.storage}}}const R=E%O;return R>0&&(E+=O-R),T.__size=E,T.__cache={},this}function g(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:d,dispose:f}}class p0{constructor(e={}){const{canvas:t=qh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let l;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");l=n.getContextAttributes().alpha}else l=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const T=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let O=!1;this._outputColorSpace=vn;let R=0,w=0,P=null,b=-1,y=null;const I=new bt,X=new bt;let F=null;const j=new ut(0);let te=0,Z=t.width,ce=t.height,q=1,he=null,Te=null;const De=new bt(0,0,Z,ce),We=new bt(0,0,Z,ce);let ct=!1;const Q=new tc;let me=!1,we=!1;const ge=new Tt,Ge=new Tt,tt=new W,Fe=new bt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function ze(){return P===null?q:1}let D=n;function Bt(S,k){return t.getContext(S,k)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wa}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",xe,!1),D===null){const k="webgl2";if(D=Bt(k,S),D===null)throw Bt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let je,Ye,Ae,ft,Oe,A,x,N,Y,ie,ee,B,ne,de,Pe,ae,_e,Le,Ne,Me,et,qe,mt,L;function pe(){je=new bm(D),je.init(),qe=new o0(D,je),Ye=new gm(D,je,e,qe),Ae=new r0(D,je),Ye.reverseDepthBuffer&&p&&Ae.buffers.depth.setReversed(!0),ft=new Rm(D),Oe=new X_,A=new s0(D,je,Ae,Oe,Ye,qe,ft),x=new xm(E),N=new Mm(E),Y=new Ou(D),mt=new mm(D,Y),ie=new Tm(D,Y,ft,mt),ee=new Cm(D,ie,Y,ft),Ne=new wm(D,Ye,A),ae=new vm(Oe),B=new W_(E,x,N,je,Ye,mt,ae),ne=new u0(E,Oe),de=new K_,Pe=new J_(je),Le=new pm(E,x,N,Ae,ee,l,c),_e=new n0(E,ee,Ye),L=new f0(D,ft,Ye,Ae),Me=new _m(D,je,ft),et=new Am(D,je,ft),ft.programs=B.programs,E.capabilities=Ye,E.extensions=je,E.properties=Oe,E.renderLists=de,E.shadowMap=_e,E.state=Ae,E.info=ft}pe();const K=new d0(E,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(Z,ce,!1))},this.getSize=function(S){return S.set(Z,ce)},this.setSize=function(S,k,G=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,ce=k,t.width=Math.floor(S*q),t.height=Math.floor(k*q),G===!0&&(t.style.width=S+"px",t.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(Z*q,ce*q).floor()},this.setDrawingBufferSize=function(S,k,G){Z=S,ce=k,q=G,t.width=Math.floor(S*G),t.height=Math.floor(k*G),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(De)},this.setViewport=function(S,k,G,V){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,k,G,V),Ae.viewport(I.copy(De).multiplyScalar(q).round())},this.getScissor=function(S){return S.copy(We)},this.setScissor=function(S,k,G,V){S.isVector4?We.set(S.x,S.y,S.z,S.w):We.set(S,k,G,V),Ae.scissor(X.copy(We).multiplyScalar(q).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(S){Ae.setScissorTest(ct=S)},this.setOpaqueSort=function(S){he=S},this.setTransparentSort=function(S){Te=S},this.getClearColor=function(S){return S.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,G=!0){let V=0;if(S){let U=!1;if(P!==null){const ue=P.texture.format;U=ue===Za||ue===ja||ue===$a}if(U){const ue=P.texture.type,Se=ue===ni||ue===zi||ue===Xr||ue===qr||ue===Ka||ue===Ya,Re=Le.getClearColor(),Ce=Le.getClearAlpha(),oe=Re.r,re=Re.g,le=Re.b;Se?(_[0]=oe,_[1]=re,_[2]=le,_[3]=Ce,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=oe,g[1]=re,g[2]=le,g[3]=Ce,D.clearBufferiv(D.COLOR,0,g))}else V|=D.COLOR_BUFFER_BIT}k&&(V|=D.DEPTH_BUFFER_BIT),G&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Le.dispose(),de.dispose(),Pe.dispose(),Oe.dispose(),x.dispose(),N.dispose(),ee.dispose(),mt.dispose(),L.dispose(),B.dispose(),K.dispose(),K.removeEventListener("sessionstart",Gi),K.removeEventListener("sessionend",Tr),Sn.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const S=ft.autoReset,k=_e.enabled,G=_e.autoUpdate,V=_e.needsUpdate,U=_e.type;pe(),ft.autoReset=S,_e.enabled=k,_e.autoUpdate=G,_e.needsUpdate=V,_e.type=U}function xe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ue(S){const k=S.target;k.removeEventListener("dispose",Ue),St(k)}function St(S){Nt(S),Oe.remove(S)}function Nt(S){const k=Oe.get(S).programs;k!==void 0&&(k.forEach(function(G){B.releaseProgram(G)}),S.isShaderMaterial&&B.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,G,V,U,ue){k===null&&(k=yt);const Se=U.isMesh&&U.matrixWorld.determinant()<0,Re=is(S,k,G,V,U);Ae.setMaterial(V,Se);let Ce=G.index,oe=1;if(V.wireframe===!0){if(Ce=ie.getWireframeAttribute(G),Ce===void 0)return;oe=2}const re=G.drawRange,le=G.attributes.position;let Ie=re.start*oe,He=(re.start+re.count)*oe;ue!==null&&(Ie=Math.max(Ie,ue.start*oe),He=Math.min(He,(ue.start+ue.count)*oe)),Ce!==null?(Ie=Math.max(Ie,0),He=Math.min(He,Ce.count)):le!=null&&(Ie=Math.max(Ie,0),He=Math.min(He,le.count));const nt=He-Ie;if(nt<0||nt===1/0)return;mt.setup(U,V,Re,G,Ce);let _t,it=Me;if(Ce!==null&&(_t=Y.get(Ce),it=et,it.setIndex(_t)),U.isMesh)V.wireframe===!0?(Ae.setLineWidth(V.wireframeLinewidth*ze()),it.setMode(D.LINES)):it.setMode(D.TRIANGLES);else if(U.isLine){let ke=V.linewidth;ke===void 0&&(ke=1),Ae.setLineWidth(ke*ze()),U.isLineSegments?it.setMode(D.LINES):U.isLineLoop?it.setMode(D.LINE_LOOP):it.setMode(D.LINE_STRIP)}else U.isPoints?it.setMode(D.POINTS):U.isSprite&&it.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ke=U._multiDrawStarts,At=U._multiDrawCounts,Ze=U._multiDrawCount,rn=Ce?Y.get(Ce).bytesPerElement:1,ri=Oe.get(V).currentProgram.getUniforms();for(let Et=0;Et<Ze;Et++)ri.setValue(D,"_gl_DrawID",Et),it.render(ke[Et]/rn,At[Et])}else if(U.isInstancedMesh)it.renderInstances(Ie,nt,U.count);else if(G.isInstancedBufferGeometry){const ke=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,At=Math.min(G.instanceCount,ke);it.renderInstances(Ie,nt,At)}else it.render(Ie,nt)};function ve(S,k,G){S.transparent===!0&&S.side===jn&&S.forceSinglePass===!1?(S.side=en,S.needsUpdate=!0,Wi(S,k,G),S.side=gi,S.needsUpdate=!0,Wi(S,k,G),S.side=jn):Wi(S,k,G)}this.compile=function(S,k,G=null){G===null&&(G=S),f=Pe.get(G),f.init(k),M.push(f),G.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),S!==G&&S.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const V=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ue=U.material;if(ue)if(Array.isArray(ue))for(let Se=0;Se<ue.length;Se++){const Re=ue[Se];ve(Re,G,U),V.add(Re)}else ve(ue,G,U),V.add(ue)}),f=M.pop(),V},this.compileAsync=function(S,k,G=null){const V=this.compile(S,k,G);return new Promise(U=>{function ue(){if(V.forEach(function(Se){Oe.get(Se).currentProgram.isReady()&&V.delete(Se)}),V.size===0){U(S);return}setTimeout(ue,10)}je.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let nn=null;function yn(S){nn&&nn(S)}function Gi(){Sn.stop()}function Tr(){Sn.start()}const Sn=new md;Sn.setAnimationLoop(yn),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(S){nn=S,K.setAnimationLoop(S),S===null?Sn.stop():Sn.start()},K.addEventListener("sessionstart",Gi),K.addEventListener("sessionend",Tr),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,k,P),f=Pe.get(S,M.length),f.init(k),M.push(f),Ge.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix(Ge),we=this.localClippingEnabled,me=ae.init(this.clippingPlanes,we),m=de.get(S,T.length),m.init(),T.push(m),K.enabled===!0&&K.isPresenting===!0){const ue=E.xr.getDepthSensingMesh();ue!==null&&Vi(ue,k,-1/0,E.sortObjects)}Vi(S,k,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(he,Te),ot=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ot&&Le.addToRenderList(m,S),this.info.render.frame++,me===!0&&ae.beginShadows();const G=f.state.shadowsArray;_e.render(G,S,k),me===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,U=m.transmissive;if(f.setupLights(),k.isArrayCamera){const ue=k.cameras;if(U.length>0)for(let Se=0,Re=ue.length;Se<Re;Se++){const Ce=ue[Se];Ar(V,U,S,Ce)}ot&&Le.render(S);for(let Se=0,Re=ue.length;Se<Re;Se++){const Ce=ue[Se];Si(m,S,Ce,Ce.viewport)}}else U.length>0&&Ar(V,U,S,k),ot&&Le.render(S),Si(m,S,k);P!==null&&w===0&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(E,S,k),mt.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(f=M[M.length-1],me===!0&&ae.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Vi(S,k,G,V){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Q.intersectsSprite(S)){V&&Fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ge);const Se=ee.update(S),Re=S.material;Re.visible&&m.push(S,Se,Re,G,Fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Q.intersectsObject(S))){const Se=ee.update(S),Re=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Fe.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Fe.copy(Se.boundingSphere.center)),Fe.applyMatrix4(S.matrixWorld).applyMatrix4(Ge)),Array.isArray(Re)){const Ce=Se.groups;for(let oe=0,re=Ce.length;oe<re;oe++){const le=Ce[oe],Ie=Re[le.materialIndex];Ie&&Ie.visible&&m.push(S,Se,Ie,G,Fe.z,le)}}else Re.visible&&m.push(S,Se,Re,G,Fe.z,null)}}const ue=S.children;for(let Se=0,Re=ue.length;Se<Re;Se++)Vi(ue[Se],k,G,V)}function Si(S,k,G,V){const U=S.opaque,ue=S.transmissive,Se=S.transparent;f.setupLightsView(G),me===!0&&ae.setGlobalState(E.clippingPlanes,G),V&&Ae.viewport(I.copy(V)),U.length>0&&ii(U,k,G),ue.length>0&&ii(ue,k,G),Se.length>0&&ii(Se,k,G),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Ar(S,k,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Hi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?jr:ni,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const ue=f.state.transmissionRenderTarget[V.id],Se=V.viewport||I;ue.setSize(Se.z*E.transmissionResolutionScale,Se.w*E.transmissionResolutionScale);const Re=E.getRenderTarget();E.setRenderTarget(ue),E.getClearColor(j),te=E.getClearAlpha(),te<1&&E.setClearColor(16777215,.5),E.clear(),ot&&Le.render(G);const Ce=E.toneMapping;E.toneMapping=_i;const oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),me===!0&&ae.setGlobalState(E.clippingPlanes,V),ii(S,G,V),A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue),je.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let le=0,Ie=k.length;le<Ie;le++){const He=k[le],nt=He.object,_t=He.geometry,it=He.material,ke=He.group;if(it.side===jn&&nt.layers.test(V.layers)){const At=it.side;it.side=en,it.needsUpdate=!0,Rr(nt,G,V,_t,it,ke),it.side=At,it.needsUpdate=!0,re=!0}}re===!0&&(A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue))}E.setRenderTarget(Re),E.setClearColor(j,te),oe!==void 0&&(V.viewport=oe),E.toneMapping=Ce}function ii(S,k,G){const V=k.isScene===!0?k.overrideMaterial:null;for(let U=0,ue=S.length;U<ue;U++){const Se=S[U],Re=Se.object,Ce=Se.geometry,oe=Se.group;let re=Se.material;re.allowOverride===!0&&V!==null&&(re=V),Re.layers.test(G.layers)&&Rr(Re,k,G,Ce,re,oe)}}function Rr(S,k,G,V,U,ue){S.onBeforeRender(E,k,G,V,U,ue),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(E,k,G,V,S,ue),U.transparent===!0&&U.side===jn&&U.forceSinglePass===!1?(U.side=en,U.needsUpdate=!0,E.renderBufferDirect(G,k,V,U,S,ue),U.side=gi,U.needsUpdate=!0,E.renderBufferDirect(G,k,V,U,S,ue),U.side=jn):E.renderBufferDirect(G,k,V,U,S,ue),S.onAfterRender(E,k,G,V,U,ue)}function Wi(S,k,G){k.isScene!==!0&&(k=yt);const V=Oe.get(S),U=f.state.lights,ue=f.state.shadowsArray,Se=U.state.version,Re=B.getParameters(S,U.state,ue,k,G),Ce=B.getProgramCacheKey(Re);let oe=V.programs;V.environment=S.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(S.isMeshStandardMaterial?N:x).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,oe===void 0&&(S.addEventListener("dispose",Ue),oe=new Map,V.programs=oe);let re=oe.get(Ce);if(re!==void 0){if(V.currentProgram===re&&V.lightsStateVersion===Se)return ns(S,Re),re}else Re.uniforms=B.getUniforms(S),S.onBeforeCompile(Re,E),re=B.acquireProgram(Re,Ce),oe.set(Ce,re),V.uniforms=Re.uniforms;const le=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(le.clippingPlanes=ae.uniform),ns(S,Re),V.needsLights=rs(S),V.lightsStateVersion=Se,V.needsLights&&(le.ambientLightColor.value=U.state.ambient,le.lightProbe.value=U.state.probe,le.directionalLights.value=U.state.directional,le.directionalLightShadows.value=U.state.directionalShadow,le.spotLights.value=U.state.spot,le.spotLightShadows.value=U.state.spotShadow,le.rectAreaLights.value=U.state.rectArea,le.ltc_1.value=U.state.rectAreaLTC1,le.ltc_2.value=U.state.rectAreaLTC2,le.pointLights.value=U.state.point,le.pointLightShadows.value=U.state.pointShadow,le.hemisphereLights.value=U.state.hemi,le.directionalShadowMap.value=U.state.directionalShadowMap,le.directionalShadowMatrix.value=U.state.directionalShadowMatrix,le.spotShadowMap.value=U.state.spotShadowMap,le.spotLightMatrix.value=U.state.spotLightMatrix,le.spotLightMap.value=U.state.spotLightMap,le.pointShadowMap.value=U.state.pointShadowMap,le.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=re,V.uniformsList=null,re}function ts(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=Bs.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function ns(S,k){const G=Oe.get(S);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function is(S,k,G,V,U){k.isScene!==!0&&(k=yt),A.resetTextureUnits();const ue=k.fog,Se=V.isMeshStandardMaterial?k.environment:null,Re=P===null?E.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:yr,Ce=(V.isMeshStandardMaterial?N:x).get(V.envMap||Se),oe=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,re=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),le=!!G.morphAttributes.position,Ie=!!G.morphAttributes.normal,He=!!G.morphAttributes.color;let nt=_i;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(nt=E.toneMapping);const _t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=_t!==void 0?_t.length:0,ke=Oe.get(V),At=f.state.lights;if(me===!0&&(we===!0||S!==y)){const kt=S===y&&V.id===b;ae.setState(V,S,kt)}let Ze=!1;V.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==At.state.version||ke.outputColorSpace!==Re||U.isBatchedMesh&&ke.batching===!1||!U.isBatchedMesh&&ke.batching===!0||U.isBatchedMesh&&ke.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ke.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ke.instancing===!1||!U.isInstancedMesh&&ke.instancing===!0||U.isSkinnedMesh&&ke.skinning===!1||!U.isSkinnedMesh&&ke.skinning===!0||U.isInstancedMesh&&ke.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ke.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ke.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ke.instancingMorph===!1&&U.morphTexture!==null||ke.envMap!==Ce||V.fog===!0&&ke.fog!==ue||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ae.numPlanes||ke.numIntersection!==ae.numIntersection)||ke.vertexAlphas!==oe||ke.vertexTangents!==re||ke.morphTargets!==le||ke.morphNormals!==Ie||ke.morphColors!==He||ke.toneMapping!==nt||ke.morphTargetsCount!==it)&&(Ze=!0):(Ze=!0,ke.__version=V.version);let rn=ke.currentProgram;Ze===!0&&(rn=Wi(V,k,U));let ri=!1,Et=!1,Dn=!1;const xt=rn.getUniforms(),Yt=ke.uniforms;if(Ae.useProgram(rn.program)&&(ri=!0,Et=!0,Dn=!0),V.id!==b&&(b=V.id,Et=!0),ri||y!==S){Ae.buffers.depth.getReversed()?(ge.copy(S.projectionMatrix),Yh(ge),$h(ge),xt.setValue(D,"projectionMatrix",ge)):xt.setValue(D,"projectionMatrix",S.projectionMatrix),xt.setValue(D,"viewMatrix",S.matrixWorldInverse);const Ft=xt.map.cameraPosition;Ft!==void 0&&Ft.setValue(D,tt.setFromMatrixPosition(S.matrixWorld)),Ye.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Et=!0,Dn=!0)}if(U.isSkinnedMesh){xt.setOptional(D,U,"bindMatrix"),xt.setOptional(D,U,"bindMatrixInverse");const kt=U.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),xt.setValue(D,"boneTexture",kt.boneTexture,A))}U.isBatchedMesh&&(xt.setOptional(D,U,"batchingTexture"),xt.setValue(D,"batchingTexture",U._matricesTexture,A),xt.setOptional(D,U,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",U._indirectTexture,A),xt.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",U._colorsTexture,A));const sn=G.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Ne.update(U,G,rn),(Et||ke.receiveShadow!==U.receiveShadow)&&(ke.receiveShadow=U.receiveShadow,xt.setValue(D,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Yt.envMap.value=Ce,Yt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(Yt.envMapIntensity.value=k.environmentIntensity),Et&&(xt.setValue(D,"toneMappingExposure",E.toneMappingExposure),ke.needsLights&&wr(Yt,Dn),ue&&V.fog===!0&&ne.refreshFogUniforms(Yt,ue),ne.refreshMaterialUniforms(Yt,V,q,ce,f.state.transmissionRenderTarget[S.id]),Bs.upload(D,ts(ke),Yt,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Bs.upload(D,ts(ke),Yt,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xt.setValue(D,"center",U.center),xt.setValue(D,"modelViewMatrix",U.modelViewMatrix),xt.setValue(D,"normalMatrix",U.normalMatrix),xt.setValue(D,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const kt=V.uniformsGroups;for(let Ft=0,Cr=kt.length;Ft<Cr;Ft++){const zn=kt[Ft];L.update(zn,rn),L.bind(zn,rn)}}return rn}function wr(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function rs(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,k,G){const V=Oe.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Oe.get(S.texture).__webglTexture=k,Oe.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){const G=Oe.get(S);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0};const Qs=D.createFramebuffer();this.setRenderTarget=function(S,k=0,G=0){P=S,R=k,w=G;let V=!0,U=null,ue=!1,Se=!1;if(S){const Ce=Oe.get(S);if(Ce.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(Ce.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Ce.__hasExternalTextures)A.rebindTextures(S,Oe.get(S.texture).__webglTexture,Oe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const le=S.depthTexture;if(Ce.__boundDepthTexture!==le){if(le!==null&&Oe.has(le)&&(S.width!==le.image.width||S.height!==le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const oe=S.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Se=!0);const re=Oe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(re[k])?U=re[k][G]:U=re[k],ue=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?U=Oe.get(S).__webglMultisampledFramebuffer:Array.isArray(re)?U=re[G]:U=re,I.copy(S.viewport),X.copy(S.scissor),F=S.scissorTest}else I.copy(De).multiplyScalar(q).floor(),X.copy(We).multiplyScalar(q).floor(),F=ct;if(G!==0&&(U=Qs),Ae.bindFramebuffer(D.FRAMEBUFFER,U)&&V&&Ae.drawBuffers(S,U),Ae.viewport(I),Ae.scissor(X),Ae.setScissorTest(F),ue){const Ce=Oe.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,G)}else if(Se){const Ce=Oe.get(S.texture),oe=k;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.__webglTexture,G,oe)}else if(S!==null&&G!==0){const Ce=Oe.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ce.__webglTexture,G)}b=-1},this.readRenderTargetPixels=function(S,k,G,V,U,ue,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){Ae.bindFramebuffer(D.FRAMEBUFFER,Re);try{const Ce=S.texture,oe=Ce.format,re=Ce.type;if(!Ye.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-V&&G>=0&&G<=S.height-U&&D.readPixels(k,G,V,U,qe.convert(oe),qe.convert(re),ue)}finally{const Ce=P!==null?Oe.get(P).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,k,G,V,U,ue,Se){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re)if(k>=0&&k<=S.width-V&&G>=0&&G<=S.height-U){Ae.bindFramebuffer(D.FRAMEBUFFER,Re);const Ce=S.texture,oe=Ce.format,re=Ce.type;if(!Ye.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,le),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(k,G,V,U,qe.convert(oe),qe.convert(re),0);const Ie=P!==null?Oe.get(P).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,Ie);const He=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Kh(D,He,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,le),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.deleteBuffer(le),D.deleteSync(He),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,G=0){const V=Math.pow(2,-G),U=Math.floor(S.image.width*V),ue=Math.floor(S.image.height*V),Se=k!==null?k.x:0,Re=k!==null?k.y:0;A.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,Se,Re,U,ue),Ae.unbindTexture()};const Js=D.createFramebuffer(),eo=D.createFramebuffer();this.copyTextureToTexture=function(S,k,G=null,V=null,U=0,ue=null){ue===null&&(U!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=U,U=0):ue=0);let Se,Re,Ce,oe,re,le,Ie,He,nt;const _t=S.isCompressedTexture?S.mipmaps[ue]:S.image;if(G!==null)Se=G.max.x-G.min.x,Re=G.max.y-G.min.y,Ce=G.isBox3?G.max.z-G.min.z:1,oe=G.min.x,re=G.min.y,le=G.isBox3?G.min.z:0;else{const sn=Math.pow(2,-U);Se=Math.floor(_t.width*sn),Re=Math.floor(_t.height*sn),S.isDataArrayTexture?Ce=_t.depth:S.isData3DTexture?Ce=Math.floor(_t.depth*sn):Ce=1,oe=0,re=0,le=0}V!==null?(Ie=V.x,He=V.y,nt=V.z):(Ie=0,He=0,nt=0);const it=qe.convert(k.format),ke=qe.convert(k.type);let At;k.isData3DTexture?(A.setTexture3D(k,0),At=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),At=D.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),At=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Ze=D.getParameter(D.UNPACK_ROW_LENGTH),rn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ri=D.getParameter(D.UNPACK_SKIP_PIXELS),Et=D.getParameter(D.UNPACK_SKIP_ROWS),Dn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,re),D.pixelStorei(D.UNPACK_SKIP_IMAGES,le);const xt=S.isDataArrayTexture||S.isData3DTexture,Yt=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){const sn=Oe.get(S),kt=Oe.get(k),Ft=Oe.get(sn.__renderTarget),Cr=Oe.get(kt.__renderTarget);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let zn=0;zn<Ce;zn++)xt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Oe.get(S).__webglTexture,U,le+zn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Oe.get(k).__webglTexture,ue,nt+zn)),D.blitFramebuffer(oe,re,Se,Re,Ie,He,Se,Re,D.DEPTH_BUFFER_BIT,D.NEAREST);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(U!==0||S.isRenderTargetTexture||Oe.has(S)){const sn=Oe.get(S),kt=Oe.get(k);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,Js),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,eo);for(let Ft=0;Ft<Ce;Ft++)xt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,sn.__webglTexture,U,le+Ft):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,sn.__webglTexture,U),Yt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kt.__webglTexture,ue,nt+Ft):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kt.__webglTexture,ue),U!==0?D.blitFramebuffer(oe,re,Se,Re,Ie,He,Se,Re,D.COLOR_BUFFER_BIT,D.NEAREST):Yt?D.copyTexSubImage3D(At,ue,Ie,He,nt+Ft,oe,re,Se,Re):D.copyTexSubImage2D(At,ue,Ie,He,oe,re,Se,Re);Ae.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Yt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(At,ue,Ie,He,nt,Se,Re,Ce,it,ke,_t.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(At,ue,Ie,He,nt,Se,Re,Ce,it,_t.data):D.texSubImage3D(At,ue,Ie,He,nt,Se,Re,Ce,it,ke,_t):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,Ie,He,Se,Re,it,ke,_t.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,Ie,He,_t.width,_t.height,it,_t.data):D.texSubImage2D(D.TEXTURE_2D,ue,Ie,He,Se,Re,it,ke,_t);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ze),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ri),D.pixelStorei(D.UNPACK_SKIP_ROWS,Et),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Dn),ue===0&&k.generateMipmaps&&D.generateMipmap(At),Ae.unbindTexture()},this.copyTextureToTexture3D=function(S,k,G=null,V=null,U=0){return Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,G,V,U)},this.initRenderTarget=function(S){Oe.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Ae.unbindTexture()},this.resetState=function(){R=0,w=0,P=null,Ae.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const z=Object.freeze({DIRT:"dirt",STONE:"stone",WOOD:"wood",SAND:"sand",COBBLESTONE:"cobblestone",PLANKS:"planks",CLAY:"clay",GRAVEL:"gravel",GLASS:"glass",IRON_ORE:"iron_ore",COPPER_ORE:"copper_ore",IRON_INGOT:"iron_ingot",COPPER_INGOT:"copper_ingot",STICK:"stick",FIBER:"fiber",LEATHER:"leather",ROPE:"rope",COAL:"coal",RAW_MEAT:"raw_meat",COOKED_MEAT:"cooked_meat",RAW_BERRIES:"raw_berries",RAW_MUSHROOM:"raw_mushroom",RAW_FISH:"raw_fish",COOKED_FISH:"cooked_fish",STONE_PICKAXE:"stone_pickaxe",STONE_AXE:"stone_axe",IRON_PICKAXE:"iron_pickaxe",IRON_AXE:"iron_axe",LEATHER_ARMOR:"leather_armor",BANDAGE:"bandage",IRON_SWORD:"iron_sword",IRON_HAMMER:"iron_hammer",COPPER_PICKAXE:"copper_pickaxe",STEW:"stew",TRAIL_RATIONS:"trail_rations",HERB_SALAD:"herb_salad",TORCH:"torch",BEDROLL:"bedroll",MAP:"map",LORE_FRAGMENT:"lore_fragment",RELIC_SHARD:"relic_shard",WORKBENCH:"workbench",CAMPFIRE:"campfire",FORGE:"forge",KITCHEN:"kitchen",LOOM:"loom",THATCH:"thatch",STONE_BRICK:"stone_brick",DARK_STONE:"dark_stone",OAK_PLANKS:"oak_planks",BIRCH_WOOD:"birch_wood",SLATE:"slate",MARBLE:"marble",CHEST:"chest",WARD_STONE:"ward_stone",ELVISH_LAMP:"elvish_lamp",RUNIC_BLADE:"runic_blade",OIL_FLASK:"oil_flask",SMOKE_BOMB:"smoke_bomb",BAIT:"bait",COPPER_SWORD:"copper_sword",WOODEN_SHIELD:"wooden_shield",IRON_SHIELD:"iron_shield",BOW:"bow",ARROW:"arrow",IRON_ARMOR:"iron_armor",CHAIN_MAIL:"chain_mail",IRON_HELMET:"iron_helmet",LEATHER_BOOTS:"leather_boots",BREAD:"bread",HONEY:"honey",APPLE:"apple",DRIED_MEAT:"dried_meat",LEMBAS:"lembas",REPAIR_KIT:"repair_kit",LANTERN:"lantern",MAP_FRAGMENT:"map_fragment",FISHING_ROD:"fishing_rod",GOLD_ORE:"gold_ore",GOLD_INGOT:"gold_ingot",RUNE_TABLE:"rune_table"}),v=Object.freeze({AIR:0,DIRT:1,STONE:2,GRASS:3,WOOD:4,LEAVES:5,SAND:6,WATER:7,CLAY:8,GRAVEL:9,COBBLESTONE:10,PLANKS:11,IRON_ORE:12,COPPER_ORE:13,COAL_ORE:14,GLASS:15,CAMPFIRE:16,WORKBENCH:17,FORGE:18,KITCHEN:19,LOOM:20,RUNE_TABLE:21,TORCH:22,THATCH:23,STONE_BRICK:24,IRON_BLOCK:25,COPPER_BLOCK:26,SNOW:27,ICE:28,MOSSY_STONE:29,CORRUPTED_STONE:30,DARK_STONE:31,OAK_PLANKS:32,BIRCH_WOOD:33,REED:34,MUD:35,SLATE:36,MARBLE:37,OBSIDIAN:38,CRYSTAL:39,TALL_GRASS:40,CHEST:41,BED:42,DOOR:43,DOOR_OPEN:44}),m0=new Set([v.AIR,v.WATER,v.TORCH,v.TALL_GRASS,v.LEAVES,v.BED,v.DOOR_OPEN]);function Kt(i){return!m0.has(i)}const _0=new Set([v.AIR,v.WATER]);function yd(i){return!_0.has(i)}const g0={[v.DIRT]:[{type:z.DIRT,count:1}],[v.STONE]:[{type:z.STONE,count:1}],[v.GRASS]:[{type:z.DIRT,count:1},{type:z.FIBER,count:1}],[v.WOOD]:[{type:z.WOOD,count:1}],[v.LEAVES]:[{type:z.STICK,count:1}],[v.SAND]:[{type:z.SAND,count:1}],[v.CLAY]:[{type:z.CLAY,count:1}],[v.GRAVEL]:[{type:z.GRAVEL,count:1}],[v.COBBLESTONE]:[{type:z.COBBLESTONE,count:1}],[v.PLANKS]:[{type:z.PLANKS,count:1}],[v.IRON_ORE]:[{type:z.IRON_ORE,count:1}],[v.COPPER_ORE]:[{type:z.COPPER_ORE,count:1}],[v.COAL_ORE]:[{type:z.COAL,count:1}],[v.GLASS]:[{type:z.GLASS,count:1}],[v.TORCH]:[{type:z.TORCH,count:1}],[v.THATCH]:[{type:z.FIBER,count:2}],[v.SNOW]:[{type:z.DIRT,count:1}],[v.DARK_STONE]:[{type:z.DARK_STONE,count:1}],[v.OAK_PLANKS]:[{type:z.OAK_PLANKS,count:1}],[v.BIRCH_WOOD]:[{type:z.BIRCH_WOOD,count:1}],[v.SLATE]:[{type:z.SLATE,count:1}],[v.MARBLE]:[{type:z.MARBLE,count:1}],[v.TALL_GRASS]:[{type:z.FIBER,count:1}],[v.WORKBENCH]:[{type:z.WORKBENCH,count:1}],[v.CAMPFIRE]:[{type:z.CAMPFIRE,count:1}],[v.FORGE]:[{type:z.FORGE,count:1}],[v.KITCHEN]:[{type:z.KITCHEN,count:1}],[v.LOOM]:[{type:z.LOOM,count:1}],[v.CHEST]:[{type:z.CHEST,count:1}]};function v0(i){return g0[i]||[]}const x0=Object.freeze({[v.DIRT]:"hand",[v.GRASS]:"hand",[v.LEAVES]:"hand",[v.TALL_GRASS]:"hand",[v.SAND]:"hand",[v.CLAY]:"hand",[v.GRAVEL]:"hand",[v.SNOW]:"hand",[v.MUD]:"hand",[v.THATCH]:"hand",[v.REED]:"hand",[v.WOOD]:"hand",[v.BIRCH_WOOD]:"hand",[v.PLANKS]:"hand",[v.OAK_PLANKS]:"hand",[v.STONE]:"pickaxe",[v.IRON_ORE]:"pickaxe",[v.COPPER_ORE]:"pickaxe",[v.COAL_ORE]:"pickaxe",[v.COBBLESTONE]:"pickaxe",[v.STONE_BRICK]:"pickaxe",[v.SLATE]:"pickaxe",[v.MARBLE]:"pickaxe",[v.DARK_STONE]:"pickaxe",[v.MOSSY_STONE]:"pickaxe",[v.CORRUPTED_STONE]:"pickaxe",[v.OBSIDIAN]:"pickaxe",[v.CRYSTAL]:"pickaxe",[v.ICE]:"pickaxe",[v.IRON_BLOCK]:"pickaxe",[v.COPPER_BLOCK]:"pickaxe",[v.GLASS]:"hand",[v.CAMPFIRE]:"hand",[v.WORKBENCH]:"hand",[v.FORGE]:"pickaxe",[v.KITCHEN]:"hand",[v.LOOM]:"hand",[v.RUNE_TABLE]:"pickaxe",[v.TORCH]:"hand",[v.CHEST]:"hand",[v.BED]:"hand",[v.DOOR]:"hand",[v.DOOR_OPEN]:"hand"});function y0(i,e){const t=x0[i]||"hand";return t==="hand"?!0:e==null?!1:e===t}const Oa=Object.freeze({[z.DIRT]:v.DIRT,[z.STONE]:v.STONE,[z.WOOD]:v.WOOD,[z.SAND]:v.SAND,[z.COBBLESTONE]:v.COBBLESTONE,[z.PLANKS]:v.PLANKS,[z.CLAY]:v.CLAY,[z.GRAVEL]:v.GRAVEL,[z.GLASS]:v.GLASS,[z.TORCH]:v.TORCH,[z.THATCH]:v.THATCH,[z.STONE_BRICK]:v.STONE_BRICK,[z.DARK_STONE]:v.DARK_STONE,[z.OAK_PLANKS]:v.OAK_PLANKS,[z.BIRCH_WOOD]:v.BIRCH_WOOD,[z.SLATE]:v.SLATE,[z.MARBLE]:v.MARBLE,[z.WORKBENCH]:v.WORKBENCH,[z.CAMPFIRE]:v.CAMPFIRE,[z.FORGE]:v.FORGE,[z.KITCHEN]:v.KITCHEN,[z.LOOM]:v.LOOM,[z.CHEST]:v.CHEST}),Yn=new Uint8Array(512);(function(){const e=new Uint8Array(256);for(let n=0;n<256;n++)e[n]=n;let t=12345;for(let n=255;n>0;n--){t=t*1103515245+12345&2147483647;const r=t%(n+1);[e[n],e[r]]=[e[r],e[n]]}for(let n=0;n<512;n++)Yn[n]=e[n&255]})();const S0=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];function fl(i){return i*i*i*(i*(i*6-15)+10)}function Lo(i,e,t){return i+t*(e-i)}function As(i,e,t){const n=S0[i&7];return n[0]*e+n[1]*t}function La(i,e){const t=Math.floor(i)&255,n=Math.floor(e)&255,r=i-Math.floor(i),s=e-Math.floor(e),o=fl(r),a=fl(s),c=Yn[Yn[t]+n],d=Yn[Yn[t]+n+1],h=Yn[Yn[t+1]+n],u=Yn[Yn[t+1]+n+1],p=Lo(As(c,r,s),As(h,r-1,s),o),l=Lo(As(d,r,s-1),As(u,r-1,s-1),o);return Lo(p,l,a)}const at=Object.freeze({SHIRE:"shire",FOREST:"forest",MOUNTAIN:"mountain",MIRKWOOD:"mirkwood",PLAINS:"plains"});class kr{constructor({type:e,name:t,surfaceBlock:n,treeDensity:r,minHeight:s,maxHeight:o}){this.type=e,this.name=t,this.surfaceBlock=n,this.treeDensity=r,this.minHeight=s,this.maxHeight=o}}const pl={[at.SHIRE]:new kr({type:at.SHIRE,name:"The Shire",surfaceBlock:v.GRASS,treeDensity:.02,minHeight:29,maxHeight:34}),[at.FOREST]:new kr({type:at.FOREST,name:"Forest",surfaceBlock:v.GRASS,treeDensity:.08,minHeight:30,maxHeight:40}),[at.MOUNTAIN]:new kr({type:at.MOUNTAIN,name:"Misty Mountains",surfaceBlock:v.STONE,treeDensity:.005,minHeight:35,maxHeight:85}),[at.MIRKWOOD]:new kr({type:at.MIRKWOOD,name:"Mirkwood",surfaceBlock:v.MUD,treeDensity:.2,minHeight:23,maxHeight:35}),[at.PLAINS]:new kr({type:at.PLAINS,name:"Plains",surfaceBlock:v.GRASS,treeDensity:.003,minHeight:29,maxHeight:33})};function E0(i){return pl[i]||pl[at.PLAINS]}const M0=[{id:"anduin",name:"River Anduin",width:8,current:{x:0,z:1.5},points:[{x:960,z:-300},{x:990,z:-150},{x:1005,z:0},{x:1020,z:120},{x:1035,z:180},{x:1050,z:240},{x:1065,z:360},{x:1080,z:450}]},{id:"shire_brook",name:"The Water (Shire Brook)",width:3,current:{x:.6,z:0},points:[{x:-120,z:15},{x:180,z:15}]},{id:"forest_river",name:"Forest River",width:5,current:{x:-1,z:0},points:[{x:1380,z:60},{x:1320,z:75},{x:1260,z:90},{x:1200,z:105},{x:1140,z:120},{x:1080,z:150}]}];function b0(i,e,t,n,r,s){const o=r-t,a=s-n,c=o*o+a*a;if(c===0)return Math.sqrt((i-t)**2+(e-n)**2);let d=((i-t)*o+(e-n)*a)/c;d=Math.max(0,Math.min(1,d));const h=t+d*o,u=n+d*a;return Math.sqrt((i-h)**2+(e-u)**2)}function T0(i,e,t){let n=1/0;for(let r=0;r<t.points.length-1;r++){const s=t.points[r],o=t.points[r+1],a=b0(i,e,s.x,s.z,o.x,o.z);a<n&&(n=a)}return n}function Sd(i,e){for(const t of M0)if(T0(i,e,t)<=t.width/2)return t;return null}function A0(i,e){const t=Sd(i,e);return t?{...t.current}:null}function Pa(i){let e=i;return()=>(e=e*1103515245+12345&2147483647,e/2147483647)}const R0=32,w0=26,Fs=-300,C0=1680,zs=-360,I0=450,Rs=.02,ml=42,D0=[{x:0,z:0,biome:at.SHIRE,radius:210},{x:240,z:60,biome:at.PLAINS,radius:120},{x:420,z:120,biome:at.FOREST,radius:120},{x:600,z:90,biome:at.FOREST,radius:120},{x:810,z:150,biome:at.MOUNTAIN,radius:180},{x:1020,z:180,biome:at.PLAINS,radius:135},{x:1200,z:120,biome:at.MIRKWOOD,radius:180},{x:1260,z:270,biome:at.MIRKWOOD,radius:105},{x:1410,z:90,biome:at.PLAINS,radius:90},{x:1560,z:60,biome:at.MOUNTAIN,radius:120}];function qs(i,e){let t=at.PLAINS,n=1/0;for(const r of D0){const s=i-r.x,o=e-r.z,c=Math.sqrt(s*s+o*o)/r.radius;c<n&&(n=c,t=r.biome)}return E0(t)}function Dt(i,e){const t=qs(i,e),n=La(i*Rs+ml*.1,e*Rs),r=La(i*Rs*2+ml*.1+100,e*Rs*2+100)*.5,o=((n+r)/1.5+1)/2;return Math.floor(t.minHeight+o*(t.maxHeight-t.minHeight))}v.COAL_ORE,v.COPPER_ORE,v.IRON_ORE;at.FOREST+"",at.MIRKWOOD+"",at.SHIRE+"",at.PLAINS+"";const O0=-20,L0=.6,P0=1.8,_l=0;function N0(i,e){i.velocity.y+=O0*e}function k0(i,e,t,n,r,s){const o=r/2,a=[],c=Math.floor(e-o),d=Math.floor(e+o-.001),h=Math.floor(n-o),u=Math.floor(n+o-.001),p=Math.floor(t),l=Math.floor(t+s-.001);for(let _=c;_<=d;_++)for(let g=h;g<=u;g++)for(let m=p;m<=l;m++)Kt(i.getBlock(_,m,g))&&a.push({bx:_,by:m,bz:g});return a}function U0(i,e,t){const n=i.position,r=i.physicalWidth||L0,s=i.physicalHeight||P0,o=r/2,a=k0(e,n.x,n.y,n.z,r,s);for(const{bx:d,bz:h}of a){const u=n.x-o,p=n.x+o,l=n.z-o,_=n.z+o,g=p-d,m=d+1-u,f=_-h,T=h+1-l,M=Math.min(g,m),E=Math.min(f,T);M<E?g<m?n.x=d-o-.001:n.x=d+1+o+.001:f<T?n.z=h-o-.001:n.z=h+1+o+.001}const c=n.y+i.velocity.y*t;if(i.velocity.y<=0){const d=Math.floor(n.y)-1,h=Math.floor(c)-1;for(let u=d;u>=h;u--){const p=Math.floor(n.x-o),l=Math.floor(n.x+o-.001),_=Math.floor(n.z-o),g=Math.floor(n.z+o-.001);for(let m=p;m<=l;m++)for(let f=_;f<=g;f++)if(Kt(e.getBlock(m,u,f))){n.y=u+1,i.velocity.y=0,i.onGround=!0;return}}}else{const d=Math.floor(c+s),h=Math.floor(n.x-o),u=Math.floor(n.x+o-.001),p=Math.floor(n.z-o),l=Math.floor(n.z+o-.001);for(let _=h;_<=u;_++)for(let g=p;g<=l;g++)if(Kt(e.getBlock(_,d,g))){i.velocity.y=0;return}}n.y=c,i.onGround=!1,n.y<_l&&(n.y=_l,i.velocity.y=0,i.onGround=!0)}const Ve=16;class Na{constructor(){this.blocks=new Uint8Array(Ve*Ve*Ve)}_index(e,t,n){return e+t*Ve+n*Ve*Ve}_inBounds(e,t,n){return e>=0&&e<Ve&&t>=0&&t<Ve&&n>=0&&n<Ve}getBlock(e,t,n){return this._inBounds(e,t,n)?this.blocks[this._index(e,t,n)]:v.AIR}setBlock(e,t,n,r){this._inBounds(e,t,n)&&(this.blocks[this._index(e,t,n)]=r)}}const Po=[{dir:[0,1,0],verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{dir:[0,-1,0],verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{dir:[1,0,0],verts:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{dir:[-1,0,0],verts:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]]},{dir:[0,0,1],verts:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]]},{dir:[0,0,-1],verts:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}],Zt={[v.GRASS]:[.32,.6,.24],[v.DIRT]:[.45,.33,.2],[v.STONE]:[.5,.5,.52],[v.WOOD]:[.4,.24,.12],[v.LEAVES]:[.18,.48,.13],[v.WATER]:[.15,.35,.65],[v.SAND]:[.82,.72,.45],[v.CLAY]:[.58,.42,.32],[v.GRAVEL]:[.52,.5,.48],[v.COBBLESTONE]:[.42,.42,.44],[v.PLANKS]:[.58,.4,.2],[v.IRON_ORE]:[.48,.45,.42],[v.COPPER_ORE]:[.5,.38,.28],[v.COAL_ORE]:[.22,.22,.24],[v.GLASS]:[.72,.82,.88],[v.CAMPFIRE]:[.45,.22,.08],[v.WORKBENCH]:[.52,.36,.18],[v.FORGE]:[.3,.3,.32],[v.KITCHEN]:[.48,.33,.18],[v.LOOM]:[.62,.52,.38],[v.RUNE_TABLE]:[.25,.2,.45],[v.TORCH]:[.92,.72,.18],[v.THATCH]:[.68,.6,.32],[v.STONE_BRICK]:[.48,.48,.46],[v.IRON_BLOCK]:[.68,.68,.72],[v.COPPER_BLOCK]:[.7,.42,.18],[v.SNOW]:[.93,.95,.98],[v.ICE]:[.65,.82,.92],[v.MOSSY_STONE]:[.35,.45,.32],[v.CORRUPTED_STONE]:[.28,.18,.32],[v.DARK_STONE]:[.18,.15,.2],[v.OAK_PLANKS]:[.52,.36,.16],[v.BIRCH_WOOD]:[.78,.73,.62],[v.REED]:[.42,.58,.28],[v.MUD]:[.32,.25,.15],[v.SLATE]:[.35,.36,.4],[v.MARBLE]:[.88,.86,.82],[v.OBSIDIAN]:[.08,.06,.12],[v.CRYSTAL]:[.68,.78,.92],[v.TALL_GRASS]:[.28,.56,.2],[v.CHEST]:[.55,.38,.18],[v.BED]:[.6,.15,.12],[v.DOOR]:[.42,.28,.14],[v.DOOR_OPEN]:[.42,.28,.14]},ka=[1,0,1];function qn(i,e,t,n){let r=i*374761+e*668265+t*1274613+n*982451|0;return r=(r>>16^r)*73244475|0,r=(r>>16^r)*73244475|0,r=r>>16^r,((r&65535)/65535-.5)*.24}function B0(i,e,t,n,r,s){const[o,a,c]=r.dir;let d,h;a!==0?(d=[1,0,0],h=[0,0,1]):o!==0?(d=[0,1,0],h=[0,0,1]):(d=[1,0,0],h=[0,1,0]);const u=r.verts[s],p=u[0]*d[0]+u[1]*d[1]+u[2]*d[2]>.5?1:-1,l=u[0]*h[0]+u[1]*h[1]+u[2]*h[2]>.5?1:-1,_=Kt(i.getBlock(e+o+d[0]*p,t+a+d[1]*p,n+c+d[2]*p))?1:0,g=Kt(i.getBlock(e+o+h[0]*l,t+a+h[1]*l,n+c+h[2]*l))?1:0,m=Kt(i.getBlock(e+o+d[0]*p+h[0]*l,t+a+d[1]*p+h[1]*l,n+c+d[2]*p+h[2]*l))?1:0;return 1-(_&&g?3:_+g+m)*.15}const F0=[{verts:[[.5,0,.45],[.78,.28,.44],[.78,.28,.56],[.5,0,.55]]},{verts:[[.54,0,.48],[.69,.28,.71],[.59,.28,.77],[.46,0,.53]]},{verts:[[.54,0,.53],[.41,.28,.77],[.31,.28,.71],[.46,0,.48]]},{verts:[[.5,0,.55],[.22,.28,.56],[.22,.28,.44],[.5,0,.45]]},{verts:[[.46,0,.53],[.31,.28,.29],[.41,.28,.23],[.54,0,.48]]},{verts:[[.46,0,.48],[.59,.28,.23],[.69,.28,.29],[.54,0,.53]]}],z0=[.45,.33,.2],H0=[.62,.5,.34],G0=[.35,.22,.12],V0=[.58,.58,.56],W0=[.65,.55,.3],X0=[.38,.32,.22],q0=[.85,.88,.92],K0=[.5,.5,.48];function Y0(i){return i!==v.AIR&&i!==v.DOOR_OPEN}function $0(i,e){const t=e[1]===1,n=e[1]===-1;switch(i){case v.GRASS:return t?Zt[v.GRASS]:z0;case v.WOOD:return t?H0:n?G0:Zt[v.WOOD];case v.BIRCH_WOOD:return t?[.85,.8,.7]:Zt[v.BIRCH_WOOD];case v.STONE:return t?V0:Zt[v.STONE];case v.COBBLESTONE:return t?K0:Zt[v.COBBLESTONE];case v.SAND:return n?W0:Zt[v.SAND];case v.MUD:return t?X0:Zt[v.MUD];case v.SNOW:return t?Zt[v.SNOW]:q0;case v.DIRT:return t?[.52,.4,.26]:Zt[v.DIRT];case v.IRON_ORE:return t?[.5,.48,.42]:Zt[v.IRON_ORE];case v.COPPER_ORE:return t?[.5,.4,.28]:Zt[v.COPPER_ORE];default:return Zt[i]||ka}}function j0(i,e,t,n,r){const s=[],o=[],a=[];for(let c=0;c<Ve;c++)for(let d=0;d<Ve;d++)for(let h=0;h<Ve;h++){const u=i.getBlock(c,d,h);if(!Y0(u))continue;const p=e*Ve+c,l=t*Ve+d,_=n*Ve+h;if(u===v.TALL_GRASS){const g=Zt[u]||ka;for(const m of F0){const f=s.length/3;for(const T of m.verts){const M=p+T[0],E=l+T[1],O=_+T[2];s.push(M,E,O);const R=.4+2*T[1];o.push((g[0]+qn(M,E,O,0))*R,(g[1]+qn(M,E,O,1))*R,(g[2]+qn(M,E,O,2))*R)}a.push(f,f+1,f+2,f,f+2,f+3),a.push(f+2,f+1,f,f+3,f+2,f)}continue}if(u===v.WATER){if(r.getBlock(p,l+1,_)===v.WATER)continue;const m=Zt[v.WATER]||ka;for(const f of Po){const T=p+f.dir[0],M=l+f.dir[1],E=_+f.dir[2];if(r.getBlock(T,M,E)!==v.AIR||f.dir[1]===-1)continue;const R=s.length/3;for(const w of f.verts){const P=p+w[0],b=l+w[1]-(f.dir[1]===1?.15:0),y=_+w[2];s.push(P,b,y),o.push(m[0]+qn(P,b,y,0)*.3,m[1]+qn(P,b,y,1)*.3,m[2]+qn(P,b,y,2)*.3)}a.push(R,R+1,R+2,R,R+2,R+3)}continue}for(let g=0;g<Po.length;g++){const m=Po[g],f=p+m.dir[0],T=l+m.dir[1],M=_+m.dir[2];if(Kt(r.getBlock(f,T,M)))continue;const E=s.length/3,O=$0(u,m.dir),R=m.dir[1]===1?1:m.dir[1]===-1?.55:m.dir[0]===1?.82:m.dir[0]===-1?.68:m.dir[2]===1?.78:.65,w=u===v.GRASS&&m.dir[1]===1?2.5:1;for(let P=0;P<m.verts.length;P++){const b=m.verts[P],y=p+b[0],I=l+b[1],X=_+b[2];s.push(y,I,X);const F=B0(r,p,l,_,m,P),j=R*F;o.push((O[0]+qn(y,I,X,0)*w)*j,(O[1]+qn(y,I,X,1)*w)*j,(O[2]+qn(y,I,X,2)*w)*j)}a.push(E,E+1,E+2,E,E+2,E+3)}}return s.length===0?null:{positions:new Float32Array(s),colors:new Float32Array(o),indices:a,vertexCount:s.length/3}}function Z0(i,e,t,n,r){const s=j0(i,e,t,n,r);if(!s)return null;const o=new xi;o.setAttribute("position",new ti(s.positions,3)),o.setAttribute("color",new ti(s.colors,3)),o.setIndex(s.indices),o.computeVertexNormals();const a=new js({vertexColors:!0});return new un(o,a)}class Q0{constructor(e,t){this.scene=e,this.world=t,this.meshes=new Map,this.dirty=new Set,this._attempted=new Set}invalidateChunks(e){for(const t of e){if(this.meshes.has(t)){const n=this.meshes.get(t);this.scene.remove(n),n.geometry.dispose(),this.meshes.delete(t)}this._attempted.delete(t)}}markDirty(e,t,n){const r=Math.floor(e/Ve),s=Math.floor(t/Ve),o=Math.floor(n/Ve),a=`${r},${s},${o}`;this.dirty.add(a),this._attempted.delete(a);const c=(e%Ve+Ve)%Ve,d=(t%Ve+Ve)%Ve,h=(n%Ve+Ve)%Ve;c===0&&(this.dirty.add(`${r-1},${s},${o}`),this._attempted.delete(`${r-1},${s},${o}`)),c===Ve-1&&(this.dirty.add(`${r+1},${s},${o}`),this._attempted.delete(`${r+1},${s},${o}`)),d===0&&(this.dirty.add(`${r},${s-1},${o}`),this._attempted.delete(`${r},${s-1},${o}`)),d===Ve-1&&(this.dirty.add(`${r},${s+1},${o}`),this._attempted.delete(`${r},${s+1},${o}`)),h===0&&(this.dirty.add(`${r},${s},${o-1}`),this._attempted.delete(`${r},${s},${o-1}`)),h===Ve-1&&(this.dirty.add(`${r},${s},${o+1}`),this._attempted.delete(`${r},${s},${o+1}`))}update(e,t,n=4){const r=Math.floor(e/Ve),s=Math.floor(t/Ve),o=new Set;for(const a of this.dirty)if(this.meshes.has(a)){const c=this.meshes.get(a);this.scene.remove(c),c.geometry.dispose(),this.meshes.delete(a)}this.dirty.clear();for(let a=-n;a<=n;a++)for(let c=-n;c<=n;c++){const d=r+a,h=s+c;for(let u=0;u<5;u++){const p=`${d},${u},${h}`,l=this.world.chunks.get(p);if(l&&(o.add(p),!this.meshes.has(p)&&!this._attempted.has(p))){this._attempted.add(p);const _=Z0(l,d,u,h,this.world);_&&(this.scene.add(_),this.meshes.set(p,_))}}}for(const[a,c]of this.meshes)o.has(a)||(this.scene.remove(c),c.geometry.dispose(),this.meshes.delete(a),this._attempted.delete(a))}}const J0={forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",jump:"Space"};class eg{constructor(e){this.keys={},this._justPressed={},this.mouseDx=0,this.mouseDy=0,this.locked=!1,this.leftClick=!1,this.rightClick=!1,this.scrollDelta=0,this.menuOpen=!1,this.onPointerUnlock=null,this._bindings=e||J0}keyDown(e){this.keys[e]||(this._justPressed[e]=!0),this.keys[e]=!0}keyUp(e){this.keys[e]=!1}mouseMove(e,t){this.locked&&(this.mouseDx+=e,this.mouseDy+=t)}mouseButtonDown(e){this.locked&&(e===0&&(this.leftClick=!0,this.keys.mouseLeft=!0),e===2&&(this.rightClick=!0))}mouseButtonUp(e){e===0&&(this.keys.mouseLeft=!1)}wheel(e){this.locked&&(this.scrollDelta+=Math.sign(e))}setLocked(e){const t=this.locked;this.locked=e,t&&!e&&this.onPointerUnlock&&this.onPointerUnlock()}getMovementInput(){const e=this._bindings;return{forward:!!this.keys[e.forward],back:!!this.keys[e.back],left:!!this.keys[e.left],right:!!this.keys[e.right]}}getJump(){return!!this.keys[this._bindings.jump]}consumeMouse(){const e=this.mouseDx,t=this.mouseDy;return this.mouseDx=0,this.mouseDy=0,{dx:e,dy:t}}consumeLeftClick(){const e=this.leftClick;return this.leftClick=!1,e}consumeRightClick(){const e=this.rightClick;return this.rightClick=!1,e}consumeKeyPress(e){const t=!!this._justPressed[e];return this._justPressed[e]=!1,t}consumeScroll(){const e=this.scrollDelta;return this.scrollDelta=0,e}}class tg{constructor(e){this._state=new eg,document.addEventListener("keydown",t=>{t.code==="Tab"&&t.preventDefault(),this._state.keyDown(t.code)}),document.addEventListener("keyup",t=>{this._state.keyUp(t.code)}),e.addEventListener("click",()=>{this._state.locked||e.requestPointerLock()}),document.addEventListener("mousedown",t=>{this._state.mouseButtonDown(t.button)}),document.addEventListener("mouseup",t=>{this._state.mouseButtonUp(t.button)}),e.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{this._state.setLocked(document.pointerLockElement===e)}),document.addEventListener("mousemove",t=>{this._state.mouseMove(t.movementX,t.movementY)}),document.addEventListener("wheel",t=>{this._state.wheel(t.deltaY)})}get keys(){return this._state.keys}get locked(){return this._state.locked}get menuOpen(){return this._state.menuOpen}set menuOpen(e){this._state.menuOpen=e}get onPointerUnlock(){return this._state.onPointerUnlock}set onPointerUnlock(e){this._state.onPointerUnlock=e}getMovementInput(){return this._state.getMovementInput()}getJump(){return this._state.getJump()}consumeMouse(){return this._state.consumeMouse()}consumeLeftClick(){return this._state.consumeLeftClick()}consumeRightClick(){return this._state.consumeRightClick()}consumeKeyPress(e){return this._state.consumeKeyPress(e)}consumeScroll(){return this._state.consumeScroll()}}const cn=Object.freeze({RAW:"raw",COOKED:"cooked",MEAL:"meal",PRESERVED:"preserved",RESTORATIVE:"restorative"}),Ci=Object.freeze({STAMINA_REGEN:"stamina_regen",COLD_RESISTANCE:"cold_resistance",FOCUS_REGEN:"focus_regen",CORRUPTION_RESISTANCE:"corruption_resistance",HEALTH_REGEN:"health_regen"});class ln{constructor({id:e,name:t,category:n,hungerRestore:r,effects:s=[]}){this.id=e,this.name=t,this.category=n,this.hungerRestore=r,this.effects=s}}const Ed={raw_berries:new ln({id:"raw_berries",name:"Raw Berries",category:cn.RAW,hungerRestore:8}),raw_meat:new ln({id:"raw_meat",name:"Raw Meat",category:cn.RAW,hungerRestore:5}),raw_mushroom:new ln({id:"raw_mushroom",name:"Raw Mushroom",category:cn.RAW,hungerRestore:6}),cooked_meat:new ln({id:"cooked_meat",name:"Cooked Meat",category:cn.COOKED,hungerRestore:25,effects:[{type:Ci.STAMINA_REGEN,duration:60,strength:2}]}),cooked_fish:new ln({id:"cooked_fish",name:"Cooked Fish",category:cn.COOKED,hungerRestore:20,effects:[{type:Ci.HEALTH_REGEN,duration:30,strength:1}]}),hearth_stew:new ln({id:"hearth_stew",name:"Hearth Stew",category:cn.MEAL,hungerRestore:40,effects:[{type:Ci.STAMINA_REGEN,duration:120,strength:3},{type:Ci.COLD_RESISTANCE,duration:120,strength:1}]}),lembas:new ln({id:"lembas",name:"Lembas Bread",category:cn.PRESERVED,hungerRestore:50}),athelas_tea:new ln({id:"athelas_tea",name:"Athelas Tea",category:cn.RESTORATIVE,hungerRestore:10,effects:[{type:Ci.HEALTH_REGEN,duration:60,strength:3},{type:Ci.CORRUPTION_RESISTANCE,duration:60,strength:2}]}),trail_rations:new ln({id:"trail_rations",name:"Trail Rations",category:cn.PRESERVED,hungerRestore:20}),herb_salad:new ln({id:"herb_salad",name:"Herb Salad",category:cn.MEAL,hungerRestore:30,effects:[{type:Ci.FOCUS_REGEN,duration:90,strength:2}]}),bread:new ln({id:"bread",name:"Bread",category:cn.COOKED,hungerRestore:20}),berries:new ln({id:"berries",name:"Berries",category:cn.RAW,hungerRestore:8}),mushroom:new ln({id:"mushroom",name:"Mushroom",category:cn.RAW,hungerRestore:6})};function ng(i){return Ed[i]}function ig(i,e,t,n,r){const s=i.getBlock(e,t,n);return!yd(s)||!y0(s,r||null)?null:(i.setBlock(e,t,n,v.AIR),{drops:v0(s)})}function rg(i,e,t,n,r,s){const o=Oa[s];return o===void 0||Kt(i.getBlock(t,n,r))||!e.remove(s,1)?!1:(i.setBlock(t,n,r,o),!0)}function gl(i,e,t,n){let r=Math.floor(e.x),s=Math.floor(e.y),o=Math.floor(e.z);const a=t.x>=0?1:-1,c=t.y>=0?1:-1,d=t.z>=0?1:-1,h=t.x!==0?Math.abs(1/t.x):1/0,u=t.y!==0?Math.abs(1/t.y):1/0,p=t.z!==0?Math.abs(1/t.z):1/0;let l=t.x!==0?(t.x>0?r+1-e.x:e.x-r)*h:1/0,_=t.y!==0?(t.y>0?s+1-e.y:e.y-s)*u:1/0,g=t.z!==0?(t.z>0?o+1-e.z:e.z-o)*p:1/0,m=0,f={x:0,y:0,z:0};for(;m<n;){if(yd(i.getBlock(r,s,o)))return{blockPos:{x:r,y:s,z:o},normal:f,t:m};l<_&&l<g?(m=l,r+=a,l+=h,f={x:-a,y:0,z:0}):_<g?(m=_,s+=c,_+=u,f={x:0,y:-c,z:0}):(m=g,o+=d,g+=p,f={x:0,y:0,z:-d})}return null}function Jt(i,e){const t=i.x-e.x,n=i.y-e.y,r=i.z-e.z;return Math.sqrt(t*t+n*n+r*r)}function Hr(i,e){return i.x*e.x+i.y*e.y+i.z*e.z}function Pn(i){const e=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z);return e===0?{x:0,y:0,z:0}:{x:i.x/e,y:i.y/e,z:i.z/e}}const fe=Object.freeze({WOLF:"wolf",GOBLIN:"goblin",SPIDER:"spider",TROLL:"troll",WIGHT:"wight",GUARDIAN:"guardian",CONSTRUCT:"construct",ORC:"orc",GIANT_SPIDER:"giant_spider",SHADOW:"shadow",BARROW_WIGHT:"barrow_wight",GOBLIN_ARCHER:"goblin_archer",CORRUPTED_BEAR:"corrupted_bear",DARK_CONSTRUCT:"dark_construct",WRAITH:"wraith"}),Ii=Object.freeze({IDLE:"idle",CHASE:"chase",ATTACK:"attack",DEAD:"dead"}),sg={[fe.WOLF]:{health:30,speed:4,aggroRange:12,damage:8,attackRange:1.5},[fe.GOBLIN]:{health:25,speed:3,aggroRange:10,damage:6,attackRange:1.5},[fe.SPIDER]:{health:20,speed:5,aggroRange:8,damage:10,attackRange:1.2},[fe.TROLL]:{health:100,speed:2,aggroRange:15,damage:25,attackRange:2.5},[fe.WIGHT]:{health:50,speed:3.5,aggroRange:14,damage:15,attackRange:1.5},[fe.GUARDIAN]:{health:150,speed:1.5,aggroRange:18,damage:30,attackRange:2},[fe.CONSTRUCT]:{health:80,speed:2.5,aggroRange:12,damage:20,attackRange:2},[fe.ORC]:{health:50,speed:3,aggroRange:12,damage:12,attackRange:1.5},[fe.GIANT_SPIDER]:{health:45,speed:4.5,aggroRange:10,damage:15,attackRange:1.5},[fe.SHADOW]:{health:20,speed:6,aggroRange:16,damage:18,attackRange:1.2},[fe.BARROW_WIGHT]:{health:80,speed:3,aggroRange:16,damage:22,attackRange:1.8},[fe.GOBLIN_ARCHER]:{health:20,speed:2.5,aggroRange:18,damage:8,attackRange:8},[fe.CORRUPTED_BEAR]:{health:120,speed:3,aggroRange:14,damage:20,attackRange:2},[fe.DARK_CONSTRUCT]:{health:130,speed:2,aggroRange:14,damage:28,attackRange:2.2},[fe.WRAITH]:{health:70,speed:4,aggroRange:20,damage:30,attackRange:1.8}},og={[fe.WOLF]:[{type:"leather",count:1},{type:"raw_meat",count:1}],[fe.GOBLIN]:[{type:"stick",count:2},{type:"iron_ore",count:1}],[fe.SPIDER]:[{type:"fiber",count:2},{type:"rope",count:1}],[fe.TROLL]:[{type:"stone",count:3},{type:"leather",count:2}],[fe.WIGHT]:[{type:"relic_shard",count:1},{type:"lore_fragment",count:1}],[fe.GUARDIAN]:[{type:"relic_shard",count:2},{type:"iron_ore",count:3}],[fe.CONSTRUCT]:[{type:"iron_ore",count:2},{type:"copper_ore",count:2}],[fe.ORC]:[{type:"iron_ore",count:1},{type:"leather",count:1}],[fe.GIANT_SPIDER]:[{type:"fiber",count:3},{type:"rope",count:2}],[fe.SHADOW]:[{type:"relic_shard",count:1}],[fe.BARROW_WIGHT]:[{type:"relic_shard",count:2},{type:"lore_fragment",count:2}],[fe.GOBLIN_ARCHER]:[{type:"stick",count:3},{type:"fiber",count:1}],[fe.CORRUPTED_BEAR]:[{type:"leather",count:3},{type:"raw_meat",count:2}],[fe.DARK_CONSTRUCT]:[{type:"iron_ore",count:3},{type:"relic_shard",count:1}],[fe.WRAITH]:[{type:"relic_shard",count:3},{type:"lore_fragment",count:2}]};function ag(i){return og[i]||[]}class cg{constructor(e,t){const n=sg[t];this.position={...e},this.type=t,this.health=n.health,this.maxHealth=n.health,this.speed=n.speed,this.aggroRange=n.aggroRange,this.damage=n.damage,this.attackRange=n.attackRange,this.state=Ii.IDLE,this.attackCooldown=0}updateAI(e,t,n,r){if(this.isDead()){this.state=Ii.DEAD;return}const s=Jt(this.position,e);if(s>this.aggroRange*1.5?this.state=Ii.IDLE:s<=this.aggroRange&&(this.state=Ii.CHASE),this.state===Ii.CHASE){const o=e.x-this.position.x,a=e.z-this.position.z,c=Math.sqrt(o*o+a*a);if(c>.1){const d=o/c*this.speed*t,h=a/c*this.speed*t;if(r){const u=this.position.x+d;this._collidesWithBlock(u,this.position.z,r)||(this.position.x=u);const p=this.position.z+h;this._collidesWithBlock(this.position.x,p,r)||(this.position.z=p)}else this.position.x+=d,this.position.z+=h}}n&&(this.position.y=n(Math.floor(this.position.x),Math.floor(this.position.z))+1),this.attackCooldown=Math.max(0,this.attackCooldown-t)}_collidesWithBlock(e,t,n){const r=Math.floor(e),s=Math.floor(this.position.y),o=Math.floor(t);return Kt(n.getBlock(r,s,o))||Kt(n.getBlock(r,s+1,o))}canAttack(e){return this.state===Ii.CHASE&&Jt(this.position,e)<=this.attackRange&&this.attackCooldown<=0}performAttack(){return this.attackCooldown=1,this.damage}takeDamage(e){this.health=Math.max(0,this.health-e),this.health<=0&&(this.state=Ii.DEAD)}isDead(){return this.health<=0}}const Un=Object.freeze({dawn:240,day:2400,dusk:240,night:2400}),_r=Un.dawn+Un.day+Un.dusk+Un.night,dt=Object.freeze({DAWN:"dawn",DAY:"day",DUSK:"dusk",NIGHT:"night"}),lg=Un.dawn/_r,dg=(Un.dawn+Un.day)/_r,hg=(Un.dawn+Un.day+Un.dusk)/_r;class ug{constructor(){this.time=0,this.day=1}tick(e){for(this.time+=e;this.time>=_r;)this.time-=_r,this.day++}getNormalizedTime(){return this.time/_r}getPhase(){const e=this.getNormalizedTime();return e<lg?dt.DAWN:e<dg?dt.DAY:e<hg?dt.DUSK:dt.NIGHT}}const Md=Object.freeze({man:{id:"man",name:"Man",classIds:["ranger","soldier","scholar"],statModifiers:{health:100,stamina:110,focus:50,corruptionResistance:50,perception:50,craft:50}},elf:{id:"elf",name:"Elf",classIds:["archer","warden","gatherer"],statModifiers:{health:90,stamina:100,focus:80,corruptionResistance:50,perception:70,craft:50}},dwarf:{id:"dwarf",name:"Dwarf",classIds:["miner","blacksmith","delver"],statModifiers:{health:120,stamina:100,focus:35,corruptionResistance:70,perception:40,craft:80}},hobbit:{id:"hobbit",name:"Hobbit",classIds:["burglar","cook","forager"],statModifiers:{health:80,stamina:100,focus:55,corruptionResistance:75,perception:60,craft:55}}});function fg(i){return Md[i]||null}const ic=Object.freeze({ranger:{id:"ranger",name:"Ranger",raceId:"man",passive:"Tracking: see beast footprints",activeAbility:"Focused Shot"},soldier:{id:"soldier",name:"Soldier",raceId:"man",passive:"Improved block stability",activeAbility:"Shield Bash"},scholar:{id:"scholar",name:"Scholar",raceId:"man",passive:"Identify ruins and relics faster",activeAbility:"Sense Ward"},archer:{id:"archer",name:"Archer",raceId:"elf",passive:"Reduced bow sway",activeAbility:"Keen Eye"},warden:{id:"warden",name:"Warden",raceId:"elf",passive:"Stronger resistance near allied beacons",activeAbility:"Light Ward"},gatherer:{id:"gatherer",name:"Gatherer",raceId:"elf",passive:"Better yield from plants and herbs",activeAbility:"Nature Sense"},miner:{id:"miner",name:"Miner",raceId:"dwarf",passive:"Faster ore and stone extraction",activeAbility:"Delver's Strike"},blacksmith:{id:"blacksmith",name:"Blacksmith",raceId:"dwarf",passive:"Gear wears slower",activeAbility:"Field Repair"},delver:{id:"delver",name:"Delver",raceId:"dwarf",passive:"Reduced underground detection and fall damage",activeAbility:"Stone Sense"},burglar:{id:"burglar",name:"Burglar",raceId:"hobbit",passive:"Reduced enemy detection while crouched",activeAbility:"Slip Away"},cook:{id:"cook",name:"Cook",raceId:"hobbit",passive:"Meals give longer buffs",activeAbility:"Hearth Meal"},forager:{id:"forager",name:"Forager",raceId:"hobbit",passive:"Improved berry, mushroom, and root yields",activeAbility:"Wild Sense"}});function pg(i){return ic[i]||null}class bd{constructor(e){this.size=e,this._slots=new Array(e).fill(null)}getSlot(e){return this._slots[e]||null}_findSlot(e){for(let t=0;t<this.size;t++)if(this._slots[t]&&this._slots[t].type===e)return t;return-1}_findEmpty(){for(let e=0;e<this.size;e++)if(!this._slots[e])return e;return-1}addItem(e,t){const n=this._findSlot(e);if(n>=0)return this._slots[n].count+=t,!0;const r=this._findEmpty();return r<0?!1:(this._slots[r]={type:e,count:t},!0)}removeItem(e,t){const n=this._findSlot(e);return n<0||this._slots[n].count<t?!1:(this._slots[n].count-=t,this._slots[n].count<=0&&(this._slots[n]=null),!0)}moveSlot(e,t){const n=this._slots[t];this._slots[t]=this._slots[e],this._slots[e]=n}count(e){let t=0;for(const n of this._slots)n&&n.type===e&&(t+=n.count);return t}getItems(){return this._slots.filter(e=>e!==null).map(e=>({...e}))}add(e,t){return this.addItem(e,t)}remove(e,t){return this.removeItem(e,t)}}const mg=.1,_g=.5,gg=5,vg=10,xg=.3,yg=1,Sg=.5,Eg=.5,Mg=.3,bg=.6,Tg=-15,Ag=60,Rg={[at.SHIRE]:0,[at.FOREST]:-.2,[at.MOUNTAIN]:-1,[at.MIRKWOOD]:-.3,[at.PLAINS]:.1};class Td{constructor(){this.health=100,this.maxHealth=100,this.stamina=100,this.maxStamina=100,this.hunger=100,this.maxHunger=100,this.focus=50,this.maxFocus=100,this.temperature=0,this.coldResistance=0,this.corruption=0,this._inCorruptedZone=!1,this._injuries=[]}setBiomeTemperature(e){this.temperature=Rg[e]??0}setCorruptionZone(e){this._inCorruptedZone=e}applyInjury(e,t,n){this._injuries=this._injuries.filter(r=>r.type!==e),this._injuries.push({type:e,remaining:t,strength:n})}hasInjury(e){return this._injuries.some(t=>t.type===e)}getFractureSpeedMultiplier(){return this.hasInjury("fracture")?bg:1}checkFallFracture(e){e<=Tg&&this.applyInjury("fracture",Ag,1)}tick(e){if(this.hunger=Math.max(0,this.hunger-mg*e),this.hunger<=0&&(this.health=Math.max(0,this.health-_g*e)),this.temperature<0){const t=Math.min(0,this.temperature+this.coldResistance);t<0&&(this.health=Math.max(0,this.health-xg*Math.abs(t)*e))}this._inCorruptedZone&&(this.corruption=Math.min(100,this.corruption+yg*e)),this.corruption>50&&(this.focus=Math.max(0,this.focus-Sg*(this.corruption/100)*e));for(const t of this._injuries)t.remaining-=e,t.type==="bleeding"?this.health=Math.max(0,this.health-Eg*t.strength*e):t.type==="poison"&&(this.health=Math.max(0,this.health-Mg*t.strength*e));this._injuries=this._injuries.filter(t=>t.remaining>0),this.stamina=Math.min(this.maxStamina,this.stamina+gg*e)}applySprint(e){this.stamina=Math.max(0,this.stamina-vg*e)}eat(e){this.hunger=Math.min(this.maxHunger,this.hunger+e)}takeDamage(e){this.health=Math.max(0,this.health-e)}isDead(){return this.health<=0}}const wg=5,Cg=.5;class Ad{constructor({x:e,y:t,z:n},{moveSpeed:r=wg,physicalHeight:s=1.8,physicalWidth:o=.6,eyeHeight:a=1.6}={}){this.position={x:e,y:t,z:n},this.velocity={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.moveSpeed=r,this.onGround=!1,this.crouching=!1,this.cameraMode="first_person",this.physicalHeight=s,this.physicalWidth=o,this.eyeHeight=a}toggleCamera(){this.cameraMode=this.cameraMode==="first_person"?"third_person_behind":"first_person"}setCrouch(e){this.crouching=e}applyMovementInput(e,t){let n=0,r=0;if(e.forward&&(r-=1),e.back&&(r+=1),e.left&&(n-=1),e.right&&(n+=1),n===0&&r===0)return;const s=Math.sqrt(n*n+r*r);n/=s,r/=s;const o=Math.cos(this.yaw),a=Math.sin(this.yaw),c=n*o-r*a,d=n*a+r*o,h=this.crouching?this.moveSpeed*Cg:this.moveSpeed;this.position.x+=c*h*t,this.position.z+=d*h*t}}function Ig(i,e){return i==="elf"&&(e===at.FOREST||e===at.MIRKWOOD)?1.2:1}function Dg(i){return i==="dwarf"?.85:1}function Og(i){return i==="hobbit"?3:0}const vl={man:{height:1.8,width:.6,eyeHeight:1.6},elf:{height:1.9,width:.6,eyeHeight:1.7},dwarf:{height:1.4,width:.65,eyeHeight:1.2},hobbit:{height:1.1,width:.5,eyeHeight:.95}};function Lg(i){return vl[i]||vl.man}const Pg={starter_watchpost:"Watch-Post",roadside_hall:"Ranger Hall",mountain_workshop:"Mountain Workshop",forest_beacon:"Forest Beacon",ward_bastion:"Ward Bastion"};function Ng(i){const e=Pg[i]||i;return{fastTravel:!0,merchant:{id:`${i}_merchant`,name:`${e} Merchant`,position:null,factionId:null,dialogue:{default:`Welcome to the restored ${e}. What would you like to trade?`}},message:"Site Restored! Benefits: fast travel, merchant, safe bed, storage.",roofBlock:v.OAK_PLANKS}}function kg(i,e){return e?Math.ceil(i*1.5):i}function Ug(i){return .2}const No=Object.freeze({STORY:"story",STANDARD:"standard",HARSH:"harsh"}),Bg={[No.STORY]:1.25,[No.STANDARD]:1,[No.HARSH]:.8};function Fg({raceId:i,classId:e,difficulty:t,worldName:n,characterName:r,tutorial:s}){return{raceId:i,classId:e,difficulty:t,worldName:n||"",characterName:r||"",tutorial:s!==!1}}function zg(i){const e=fg(i.raceId),t=pg(i.classId),n=new bd(36),r=Bg[i.difficulty]||1,s=new Td;s.maxHealth=Math.round(e.statModifiers.health*r),s.health=s.maxHealth,s.maxStamina=e.statModifiers.stamina,s.stamina=s.maxStamina,s.focus=e.statModifiers.focus,s.maxFocus=e.statModifiers.focus;const o=Lg(i.raceId);return{player:new Ad({x:.5,y:R0+2,z:.5},{physicalHeight:o.height,physicalWidth:o.width,eyeHeight:o.eyeHeight}),inventory:n,survivalStats:s,race:e,cls:t}}class Rd{constructor(){this.chunks=new Map}_chunkKey(e,t,n){return`${e},${t},${n}`}_worldToChunk(e,t,n){const r=Math.floor(e/Ve),s=Math.floor(t/Ve),o=Math.floor(n/Ve),a=(e%Ve+Ve)%Ve,c=(t%Ve+Ve)%Ve,d=(n%Ve+Ve)%Ve;return{cx:r,cy:s,cz:o,lx:a,ly:c,lz:d}}getChunk(e,t,n){return this.chunks.get(this._chunkKey(e,t,n))||null}_getOrCreateChunk(e,t,n){const r=this._chunkKey(e,t,n);let s=this.chunks.get(r);return s||(s=new Na,this.chunks.set(r,s)),s}getBlock(e,t,n){if(t<0)return v.STONE;const{cx:r,cy:s,cz:o,lx:a,ly:c,lz:d}=this._worldToChunk(e,t,n),h=this.getChunk(r,s,o);return h?h.getBlock(a,c,d):v.AIR}isChunkLoaded(e,t,n){const{cx:r,cy:s,cz:o}=this._worldToChunk(e,t,n);return this.chunks.has(this._chunkKey(r,s,o))}setBlock(e,t,n,r){const{cx:s,cy:o,cz:a,lx:c,ly:d,lz:h}=this._worldToChunk(e,t,n);this._getOrCreateChunk(s,o,a).setBlock(c,d,h,r)}restoreFrom(e){this.chunks.clear();for(const[t,n]of e.chunks){const r=new Na;r.blocks.set(n.blocks),this.chunks.set(t,r)}}}const ko=3,Uo=.7,Hg=.5,xl=1.2;class Gg{constructor(){this.attackCooldown=0,this._guarding=!1}setGuard(e){this._guarding=e}playerAttack(e,t,n,r){const s=Pn(t);let o=!1;for(const a of n){if(a.isDead()||Jt(e,a.position)>ko)continue;const d=Pn({x:a.position.x-e.x,y:a.position.y-e.y,z:a.position.z-e.z});if(Hr(s,d)>=Uo){a.takeDamage(r),o=!0;break}}return o&&(this.attackCooldown=Hg),o}heavyAttack(e,t,n,r){const s=Pn(t);let o=!1;for(const a of n){if(a.isDead()||Jt(e,a.position)>ko)continue;const d=Pn({x:a.position.x-e.x,y:a.position.y-e.y,z:a.position.z-e.z});if(Hr(s,d)>=Uo){a.takeDamage(r*2),o=!0;break}}return o&&(this.attackCooldown=xl),o}playerAttackWithWeapon(e,t,n,r,s){const o=r*(s.damageModifier||1);return this.playerAttack(e,t,n,o)}heavyAttackWithWeapon(e,t,n,r,s){const o=Pn(t);let a=!1;const c=r*2*(s.damageModifier||1);for(const d of n){if(d.isDead()||Jt(e,d.position)>ko)continue;const u=Pn({x:d.position.x-e.x,y:d.position.y-e.y,z:d.position.z-e.z});if(Hr(o,u)>=Uo){d.takeDamage(c),a=!0;break}}return a&&(this.attackCooldown=xl),a}parry(e,t,n){return Jt(t,e.position)>e.attackRange?!1:(e.takeDamage(e.damage),!0)}rangedAttack(e,t,n,r,s){const o=Pn(t),a=.95;for(const c of n){if(c.isDead()||Jt(e,c.position)>s)continue;const h=Pn({x:c.position.x-e.x,y:c.position.y-e.y,z:c.position.z-e.z});if(Hr(o,h)>=a)return c.takeDamage(r),!0}return!1}processEnemyAttacks(e,t,n){for(const r of e)if(!r.isDead()&&r.canAttack(t)){let s=r.performAttack();this._guarding&&(s*=.5),n.takeDamage(s)}}}const yl=8,Sl=15,Vg=35,El=[fe.WOLF,fe.GOBLIN,fe.SPIDER,fe.TROLL,fe.WIGHT,fe.ORC,fe.GIANT_SPIDER,fe.SHADOW,fe.BARROW_WIGHT,fe.GOBLIN_ARCHER,fe.CORRUPTED_BEAR,fe.DARK_CONSTRUCT,fe.WRAITH];class Wg{constructor(e){this.rng=e}trySpawn({phase:e,playerPos:t,existingCount:n,surfaceY:r,getHeight:s}){if(e!==dt.NIGHT&&e!==dt.DUSK)return[];if(n>=yl)return[];const o=Math.floor(this.rng()*3)+1,a=[];for(let c=0;c<o&&n+a.length<yl;c++){const d=this.rng()*Math.PI*2,h=Sl+this.rng()*(Vg-Sl),u=t.x+Math.cos(d)*h,p=t.z+Math.sin(d)*h,l=Math.floor(this.rng()*El.length),_=El[l],g=s?s(u,p)+1:r;a.push(new cg({x:u,y:g,z:p},_))}return a}}const Ot=Object.freeze({CLEAR:"clear",CLOUDY:"cloudy",RAIN:"rain",STORM:"storm",SNOW:"snow",FOG:"fog"}),Ml=[Ot.CLEAR,Ot.CLOUDY,Ot.RAIN,Ot.STORM,Ot.SNOW,Ot.FOG],Xg={[Ot.CLEAR]:0,[Ot.CLOUDY]:-.1,[Ot.RAIN]:-.3,[Ot.STORM]:-.5,[Ot.SNOW]:-.8,[Ot.FOG]:-.1},qg={[Ot.CLEAR]:1,[Ot.CLOUDY]:.9,[Ot.RAIN]:.7,[Ot.STORM]:.4,[Ot.SNOW]:.6,[Ot.FOG]:.3};class Kg{constructor(){this._rng=42,this.current=Ot.CLEAR,this.elapsed=0,this.duration=this._rollDuration()}_nextRandom(){return this._rng=this._rng*1103515245+12345&2147483647,this._rng/2147483647}_rollDuration(){return 60+Math.floor(this._nextRandom()*120)}tick(e){this.elapsed+=e,this.elapsed>=this.duration&&(this.elapsed-=this.duration,this.current=Ml[Math.floor(this._nextRandom()*Ml.length)],this.duration=this._rollDuration())}getTemperatureModifier(){return Xg[this.current]||0}getVisibilityModifier(){return qg[this.current]||1}}class Yg{constructor({width:e,height:t,cellSize:n}){this.width=e,this.height=t,this.cellSize=n,this._cols=Math.ceil(e/n),this._rows=Math.ceil(t/n),this._revealed=new Uint8Array(this._cols*this._rows),this._landmarks=[]}_cellIndex(e,t){const n=Math.floor(e/this.cellSize),r=Math.floor(t/this.cellSize);return n<0||n>=this._cols||r<0||r>=this._rows?-1:r*this._cols+n}isRevealed(e,t){const n=this._cellIndex(e,t);return n<0?!1:this._revealed[n]===1}reveal(e,t,n){const r=Math.max(0,Math.floor((e-n)/this.cellSize)),s=Math.min(this._cols-1,Math.floor((e+n)/this.cellSize)),o=Math.max(0,Math.floor((t-n)/this.cellSize)),a=Math.min(this._rows-1,Math.floor((t+n)/this.cellSize));for(let c=o;c<=a;c++)for(let d=r;d<=s;d++){const h=(d+.5)*this.cellSize,u=(c+.5)*this.cellSize,p=h-e,l=u-t;p*p+l*l<=n*n&&(this._revealed[c*this._cols+d]=1)}}getRevealedPercentage(){let e=0;const t=this._revealed.length;for(let n=0;n<t;n++)this._revealed[n]===1&&e++;return e/t*100}addLandmark(e){this._landmarks.push(e)}getLandmarks(){return this._landmarks}serialize(){return{revealed:Array.from(this._revealed),landmarks:this._landmarks.map(e=>({...e}))}}deserialize(e){for(let t=0;t<e.revealed.length&&t<this._revealed.length;t++)this._revealed[t]=e.revealed[t];this._landmarks=e.landmarks.map(t=>({...t}))}}const $g=100,jg=1.5;function Ur(i){let e=0;for(let t=1;t<i;t++)e+=Math.floor($g*Math.pow(jg,t-1));return e}class Zg{constructor(){this.level=1,this.experience=0,this.skillPoints=0}addExperience(e,t){for(this.experience+=e;this.experience>=Ur(this.level+1);)this.level++,this.skillPoints++}getExpForNextLevel(){return Ur(this.level+1)-Ur(this.level)}getExpProgress(){const e=Ur(this.level),n=Ur(this.level+1)-e;return n<=0?0:(this.experience-e)/n}spendSkillPoint(){return this.skillPoints<=0?!1:(this.skillPoints--,!0)}}const Qg=Object.freeze({MAIN_HAND:"main_hand",OFF_HAND:"off_hand",HEAD:"head",CHEST:"chest",LEGS:"legs",FEET:"feet",ACCESSORY:"accessory"}),Jg=Object.values(Qg);class ev{constructor(){this._slots=new Map;for(const e of Jg)this._slots.set(e,null)}get(e){return this._slots.get(e)||null}equip(e){const t=this._slots.get(e.slot)||null;return this._slots.set(e.slot,e),t}unequip(e){const t=this._slots.get(e)||null;return this._slots.set(e,null),t}getTotalArmor(){let e=0;for(const t of this._slots.values())t&&t.armor&&(e+=t.armor);return e}getEquippedItems(){const e=[];for(const t of this._slots.values())t&&e.push(t);return e}}class tv{constructor(e){this.size=e,this._slots=new Array(e).fill(null),this.selectedSlot=0}getSlot(e){return this._slots[e]||null}setSlot(e,t){this._slots[e]=t}clearSlot(e){this._slots[e]=null}selectSlot(e){this.selectedSlot=(e%this.size+this.size)%this.size}getSelectedItem(){return this._slots[this.selectedSlot]||null}scrollNext(){this.selectedSlot=(this.selectedSlot+1)%this.size}scrollPrev(){this.selectedSlot=(this.selectedSlot-1+this.size)%this.size}}const bl=100,nv=75,Bo=50,iv=2;class rv{constructor(){this.level=0}addFear(e){this.level=Math.min(bl,this.level+e)}reduceFear(e){this.level=Math.max(0,this.level-e)}tick(e){this.level=Math.max(0,this.level-iv*e)}getMovementPenalty(){return this.level<Bo?0:(this.level-Bo)/(bl-Bo)*.4}isTerrified(){return this.level>=nv}}const sv={[dt.DAWN]:1.2,[dt.DAY]:1,[dt.DUSK]:1.8,[dt.NIGHT]:3},ov={[dt.DAWN]:1,[dt.DAY]:1,[dt.DUSK]:1.3,[dt.NIGHT]:2},av={[dt.DAWN]:1,[dt.DAY]:1,[dt.DUSK]:1.1,[dt.NIGHT]:1.5};class cv{getSpawnRateMultiplier(e,t=0){return(sv[e]||1)*(1-t*.8)}getCorruptionMultiplier(e){return ov[e]||1}getEnemyDamageMultiplier(e){return av[e]||1}}const lv={man_ranger:[{type:"short_bow",count:1},{type:"knife",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"bedroll",count:1},{type:"raw_meat",count:2},{type:"trail_rations",count:3}],man_soldier:[{type:"spear",count:1},{type:"iron_sword",count:1},{type:"shield",count:1},{type:"stone_pickaxe",count:1},{type:"leather_armor",count:1},{type:"raw_meat",count:2},{type:"bread",count:2}],man_scholar:[{type:"knife",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"lantern",count:1},{type:"relic_shard",count:1},{type:"raw_meat",count:2},{type:"lore_fragment",count:2}],elf_archer:[{type:"refined_bow",count:1},{type:"knife",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"arrow",count:20},{type:"stick",count:10},{type:"lembas",count:2}],elf_warden:[{type:"spear",count:1},{type:"stone_pickaxe",count:1},{type:"ward_token",count:1},{type:"cloak",count:1},{type:"raw_meat",count:2},{type:"lembas",count:1}],elf_gatherer:[{type:"knife",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"herb_pouch",count:1},{type:"sling",count:1},{type:"fiber",count:5},{type:"raw_meat",count:3},{type:"berries",count:5}],dwarf_miner:[{type:"pickaxe",count:1},{type:"hammer",count:1},{type:"torch",count:3},{type:"rope",count:1},{type:"stick",count:5},{type:"stone",count:5}],dwarf_blacksmith:[{type:"hammer",count:1},{type:"stone_pickaxe",count:1},{type:"iron_ore",count:5},{type:"repair_kit",count:1},{type:"stone",count:10},{type:"raw_meat",count:2},{type:"bread",count:2}],dwarf_delver:[{type:"axe",count:1},{type:"stone_pickaxe",count:1},{type:"lantern",count:1},{type:"rope",count:2},{type:"raw_meat",count:2},{type:"trail_rations",count:2}],hobbit_burglar:[{type:"knife",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"sling",count:1},{type:"lock_tools",count:1},{type:"cooked_meat",count:3},{type:"mushroom",count:5}],hobbit_cook:[{type:"knife",count:1},{type:"pan",count:1},{type:"stone_pickaxe",count:1},{type:"firestarter",count:1},{type:"fiber",count:5},{type:"raw_meat",count:3},{type:"cooked_meat",count:5},{type:"berries",count:5}],hobbit_forager:[{type:"knife",count:1},{type:"walking_stick",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"satchel",count:1},{type:"stick",count:3},{type:"cooked_meat",count:3},{type:"mushroom",count:3},{type:"berries",count:3}]};function dv(i){return lv[i]||[]}function hv(i,e){const t=e-1;i.x=Math.max(-t,Math.min(t,i.x)),i.z=Math.max(-t,Math.min(t,i.z)),i.y=Math.max(0,i.y)}class rt{constructor(e,t,n,r=null){this.name=e,this.inputs=t,this.outputs=n,this.station=r}canCraft(e){return this.inputs.every(({type:t,count:n})=>e.count(t)>=n)}}class uv{constructor(e){this.recipes=e}getAvailableRecipes(e,t=null){return this.recipes.filter(n=>n.station&&n.station!==t?!1:n.canCraft(e))}craft(e,t,n=null){const r=this.recipes.find(s=>s.name===e);if(!r||r.station&&r.station!==n||!r.canCraft(t))return!1;for(const{type:s,count:o}of r.inputs)t.remove(s,o);for(const{type:s,count:o}of r.outputs)t.add(s,o);return!0}}class fv{constructor(e){this._system=e,this.isOpen=!1,this.selectedIndex=0,this._station=null}toggle(){this.isOpen=!this.isOpen,this.isOpen&&(this.selectedIndex=0)}setStation(e){this._station=e}getAllRecipes(){return this._system.recipes.filter(e=>e.station===this._station)}getAvailableRecipes(e){return this._system.getAvailableRecipes(e,this._station)}craftSelected(e){const t=this.getAllRecipes();if(this.selectedIndex>=t.length)return!1;const n=t[this.selectedIndex];return this._system.craft(n.name,e,this._station)}selectNext(){this.selectedIndex++}selectPrev(){this.selectedIndex=Math.max(0,this.selectedIndex-1)}}const pv=[new rt("Sticks from Wood",[{type:z.WOOD,count:1}],[{type:z.STICK,count:4}]),new rt("Rope from Fiber",[{type:z.FIBER,count:3}],[{type:z.ROPE,count:1}]),new rt("Torch",[{type:z.STICK,count:1},{type:z.COAL,count:1}],[{type:z.TORCH,count:2}]),new rt("Planks",[{type:z.WOOD,count:2}],[{type:z.PLANKS,count:4}]),new rt("Workbench",[{type:z.PLANKS,count:4},{type:z.STICK,count:4}],[{type:z.WORKBENCH,count:1}]),new rt("Campfire",[{type:z.STONE,count:5},{type:z.STICK,count:3}],[{type:z.CAMPFIRE,count:1}]),new rt("Stone Pickaxe",[{type:z.STICK,count:2},{type:z.STONE,count:3}],[{type:z.STONE_PICKAXE,count:1}],"workbench"),new rt("Stone Axe",[{type:z.STICK,count:2},{type:z.STONE,count:2}],[{type:z.STONE_AXE,count:1}],"workbench"),new rt("Bedroll",[{type:z.FIBER,count:6},{type:z.LEATHER,count:2}],[{type:z.BEDROLL,count:1}],"workbench"),new rt("Cobblestone",[{type:z.STONE,count:4}],[{type:z.COBBLESTONE,count:4}],"workbench"),new rt("Glass from Sand",[{type:z.SAND,count:4}],[{type:z.GLASS,count:2}],"workbench"),new rt("Iron Pickaxe",[{type:z.STICK,count:2},{type:z.IRON_INGOT,count:3}],[{type:z.IRON_PICKAXE,count:1}],"workbench"),new rt("Iron Axe",[{type:z.STICK,count:2},{type:z.IRON_INGOT,count:2}],[{type:z.IRON_AXE,count:1}],"workbench"),new rt("Forge",[{type:z.STONE,count:8},{type:z.IRON_ORE,count:3}],[{type:z.FORGE,count:1}],"workbench"),new rt("Kitchen",[{type:z.PLANKS,count:6},{type:z.STONE,count:4}],[{type:z.KITCHEN,count:1}],"workbench"),new rt("Loom",[{type:z.PLANKS,count:4},{type:z.FIBER,count:6}],[{type:z.LOOM,count:1}],"workbench"),new rt("Smelt Iron Ore",[{type:z.IRON_ORE,count:2},{type:z.COAL,count:1}],[{type:z.IRON_INGOT,count:1}],"forge"),new rt("Smelt Copper Ore",[{type:z.COPPER_ORE,count:2},{type:z.COAL,count:1}],[{type:z.COPPER_INGOT,count:1}],"forge"),new rt("Cook Meat",[{type:z.RAW_MEAT,count:1}],[{type:z.COOKED_MEAT,count:1}],"campfire"),new rt("Cook Fish",[{type:z.RAW_FISH,count:1}],[{type:z.COOKED_FISH,count:1}],"campfire"),new rt("Hearth Stew",[{type:z.COOKED_MEAT,count:2},{type:z.RAW_MUSHROOM,count:1}],[{type:z.STEW,count:2}],"kitchen"),new rt("Trail Rations",[{type:z.COOKED_MEAT,count:1},{type:z.RAW_BERRIES,count:2}],[{type:z.TRAIL_RATIONS,count:3}],"kitchen"),new rt("Herb Salad",[{type:z.RAW_BERRIES,count:2},{type:z.RAW_MUSHROOM,count:2}],[{type:z.HERB_SALAD,count:2}],"kitchen"),new rt("Thatch Block",[{type:z.FIBER,count:4}],[{type:z.THATCH,count:4}],"workbench"),new rt("Stone Brick",[{type:z.STONE,count:4}],[{type:z.STONE_BRICK,count:4}],"workbench"),new rt("Rope from Fiber (Loom)",[{type:z.FIBER,count:2}],[{type:z.ROPE,count:2}],"loom"),new rt("Bandage",[{type:z.FIBER,count:3}],[{type:z.BANDAGE,count:2}],"loom"),new rt("Leather Armor",[{type:z.LEATHER,count:5},{type:z.ROPE,count:2}],[{type:z.LEATHER_ARMOR,count:1}],"loom"),new rt("Oak Planks",[{type:z.WOOD,count:2}],[{type:z.OAK_PLANKS,count:4}],"workbench"),new rt("Copper Pickaxe",[{type:z.STICK,count:2},{type:z.COPPER_INGOT,count:3}],[{type:z.COPPER_PICKAXE,count:1}],"workbench"),new rt("Iron Sword",[{type:z.IRON_INGOT,count:2},{type:z.STICK,count:1}],[{type:z.IRON_SWORD,count:1}],"forge"),new rt("Iron Hammer",[{type:z.IRON_INGOT,count:3},{type:z.STICK,count:2}],[{type:z.IRON_HAMMER,count:1}],"forge"),new rt("Ward Stone",[{type:z.RELIC_SHARD,count:2},{type:z.STONE,count:4}],[{type:z.WARD_STONE,count:1}],"rune_table"),new rt("Elvish Lamp",[{type:z.RELIC_SHARD,count:1},{type:z.GLASS,count:2},{type:z.COPPER_INGOT,count:1}],[{type:z.ELVISH_LAMP,count:1}],"rune_table"),new rt("Runic Blade",[{type:z.RELIC_SHARD,count:3},{type:z.IRON_SWORD,count:1},{type:z.LORE_FRAGMENT,count:1}],[{type:z.RUNIC_BLADE,count:1}],"rune_table")];class mv{constructor({type:e,duration:t,strength:n}){this.type=e,this.remaining=t,this.strength=n}tick(e){this.remaining-=e}isExpired(){return this.remaining<=0}}class _v{constructor(){this._effects=[]}apply({type:e,duration:t,strength:n}){this._effects=this._effects.filter(r=>r.type!==e),this._effects.push(new mv({type:e,duration:t,strength:n}))}tick(e){for(const t of this._effects)t.tick(e);this._effects=this._effects.filter(t=>!t.isExpired())}getActive(){return this._effects}getStrength(e){return this._effects.filter(t=>t.type===e).reduce((t,n)=>t+n.strength,0)}has(e){return this._effects.some(t=>t.type===e)}}class gv{constructor(){this._questTarget=null}getDirectionTo(e,t){const n=t.x-e.x,r=t.z-e.z;return Math.atan2(n,-r)}getDistance(e,t){const n=t.x-e.x,r=(t.y||0)-(e.y||0),s=t.z-e.z;return Math.sqrt(n*n+r*r+s*s)}getCardinal(e){let t=(e%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return t<Math.PI/4||t>=Math.PI*7/4?"N":t<Math.PI*3/4?"E":t<Math.PI*5/4?"S":"W"}setQuestTarget(e){this._questTarget={...e}}clearQuestTarget(){this._questTarget=null}getQuestDirection(e){return this._questTarget?{angle:this.getDirectionTo(e,this._questTarget),distance:this.getDistance(e,this._questTarget)}:null}}class Tl{constructor({id:e,name:t,description:n,cost:r,requires:s=[]}){this.id=e,this.name=t,this.description=n,this.cost=r,this.requires=s}}class or{constructor({id:e,name:t,nodes:n}){this.id=e,this.name=t,this.nodes=n.map(r=>r instanceof Tl?r:new Tl(r)),this._nodeMap=new Map(this.nodes.map(r=>[r.id,r]))}getNode(e){return this._nodeMap.get(e)}}class vv{constructor(e){this.trees=e,this.skillPoints=0,this._unlocked=new Set,this._allNodes=new Map;for(const t of e)for(const n of t.nodes)this._allNodes.set(n.id,n)}addPoints(e){this.skillPoints+=e}isUnlocked(e){return this._unlocked.has(e)}unlock(e){if(this._unlocked.has(e))return!1;const t=this._allNodes.get(e);if(!t||this.skillPoints<t.cost)return!1;for(const n of t.requires)if(!this._unlocked.has(n))return!1;return this.skillPoints-=t.cost,this._unlocked.add(e),!0}getAvailable(){const e=[];for(const[t,n]of this._allNodes){if(this._unlocked.has(t)||this.skillPoints<n.cost)continue;n.requires.every(s=>this._unlocked.has(s))&&e.push(n)}return e}grantStartingUnlock(e){return this._unlocked.has(e)||!this._allNodes.get(e)?!1:(this._unlocked.add(e),!0)}getUnlocked(){return[...this._unlocked]}serialize(){return{skillPoints:this.skillPoints,unlocked:[...this._unlocked]}}deserialize(e){this.skillPoints=e.skillPoints,this._unlocked=new Set(e.unlocked)}}class xv{constructor(e){this._system=e,this.isOpen=!1,this.currentTreeIndex=0,this.selectedNodeIndex=0}toggle(){this.isOpen=!this.isOpen,this.isOpen&&(this.currentTreeIndex=0,this.selectedNodeIndex=0)}getCurrentTree(){return this._system.trees[this.currentTreeIndex]}nextTree(){this.currentTreeIndex=(this.currentTreeIndex+1)%this._system.trees.length,this.selectedNodeIndex=0}prevTree(){this.currentTreeIndex=(this.currentTreeIndex-1+this._system.trees.length)%this._system.trees.length,this.selectedNodeIndex=0}getNodes(){return this.getCurrentTree().nodes.map(t=>({id:t.id,name:t.name,description:t.description,cost:t.cost,requires:t.requires,unlocked:this._system.isUnlocked(t.id),available:!this._system.isUnlocked(t.id)&&this._system.skillPoints>=t.cost&&t.requires.every(n=>this._system.isUnlocked(n))}))}unlockSelected(){const e=this.getNodes();return this.selectedNodeIndex>=e.length?!1:this._system.unlock(e[this.selectedNodeIndex].id)}getSkillPoints(){return this._system.skillPoints}}const wd=[new or({id:"survival",name:"Survival",nodes:[{id:"surv_hardy",name:"Hardy",description:"Slower hunger drain",cost:1},{id:"surv_warmth",name:"Warmth",description:"Better camp warmth bonus",cost:1},{id:"surv_iron_stomach",name:"Iron Stomach",description:"Raw food is safer to eat",cost:2,requires:["surv_hardy"]},{id:"surv_bandages",name:"Better Bandages",description:"Bandages heal more",cost:2,requires:["surv_hardy"]},{id:"surv_rest",name:"Deep Rest",description:"Sleep restores more stamina",cost:2,requires:["surv_warmth"]},{id:"surv_forager",name:"Keen Forager",description:"Find more berries and herbs",cost:1},{id:"surv_endurance",name:"Endurance",description:"Slower stamina drain while sprinting",cost:3,requires:["surv_iron_stomach"]},{id:"surv_corruption_resist",name:"Corruption Resist",description:"Reduced corruption buildup",cost:3,requires:["surv_bandages"]},{id:"surv_shelter_master",name:"Shelter Master",description:"Shelters provide better quality",cost:2,requires:["surv_rest"]},{id:"surv_second_wind",name:"Second Wind",description:"Recover stamina faster when low",cost:3,requires:["surv_endurance"]}]}),new or({id:"combat",name:"Combat",nodes:[{id:"cmb_parry",name:"Parry",description:"Timed parry window for melee",cost:1},{id:"cmb_heavy_blow",name:"Heavy Blow",description:"Stronger heavy attacks",cost:1},{id:"cmb_quick_draw",name:"Quick Draw",description:"Faster bow draw speed",cost:1},{id:"cmb_shield_wall",name:"Shield Wall",description:"Reduced damage when blocking",cost:2,requires:["cmb_parry"]},{id:"cmb_precise_strike",name:"Precise Strike",description:"Critical hit chance on weak spots",cost:2,requires:["cmb_heavy_blow"]},{id:"cmb_ranged_stability",name:"Ranged Stability",description:"Less bow sway",cost:2,requires:["cmb_quick_draw"]},{id:"cmb_counter",name:"Counter",description:"Damage on successful parry",cost:3,requires:["cmb_shield_wall"]},{id:"cmb_cleave",name:"Cleave",description:"Hit multiple enemies with heavy attacks",cost:3,requires:["cmb_precise_strike"]},{id:"cmb_steady_aim",name:"Steady Aim",description:"Headshot bonus damage",cost:3,requires:["cmb_ranged_stability"]},{id:"cmb_berserker",name:"Berserker",description:"Damage bonus when health is low",cost:3,requires:["cmb_cleave"]}]}),new or({id:"craft",name:"Craft",nodes:[{id:"crf_repair",name:"Field Repair",description:"Better repair efficiency",cost:1},{id:"crf_yield",name:"Material Yield",description:"Higher material yield from mining",cost:1},{id:"crf_recipes",name:"Advanced Recipes",description:"Unlock intermediate recipes",cost:2,requires:["crf_repair"]},{id:"crf_tool_mastery",name:"Tool Mastery",description:"Tools last longer",cost:2,requires:["crf_repair"]},{id:"crf_smelt",name:"Efficient Smelting",description:"Less fuel per smelt",cost:2,requires:["crf_yield"]},{id:"crf_forge_master",name:"Forge Master",description:"Unlock high-tier metalworking",cost:3,requires:["crf_recipes"]},{id:"crf_architect",name:"Architect",description:"Restoration costs reduced",cost:2,requires:["crf_yield"]},{id:"crf_rune_craft",name:"Rune Craft",description:"Craft rune items at rune table",cost:3,requires:["crf_forge_master"]},{id:"crf_master_smith",name:"Master Smith",description:"Best-tier weapons and armor",cost:3,requires:["crf_forge_master"]}]}),new or({id:"exploration",name:"Exploration",nodes:[{id:"exp_map_reveal",name:"Pathfinder",description:"Faster map reveal radius",cost:1},{id:"exp_climb",name:"Sure-Footed",description:"Safer climbing, reduced fall damage",cost:1},{id:"exp_treasure",name:"Treasure Sense",description:"Detect hidden caches nearby",cost:2,requires:["exp_map_reveal"]},{id:"exp_scout",name:"Scout",description:"See enemies from further away",cost:2,requires:["exp_map_reveal"]},{id:"exp_mountaineer",name:"Mountaineer",description:"Better movement in mountains",cost:2,requires:["exp_climb"]},{id:"exp_lore_reader",name:"Lore Reader",description:"Identify ruins and relics faster",cost:2,requires:["exp_treasure"]},{id:"exp_night_eye",name:"Night Eye",description:"Better vision in darkness",cost:2,requires:["exp_scout"]},{id:"exp_swift_travel",name:"Swift Travel",description:"Move faster on roads",cost:3,requires:["exp_mountaineer"]}]}),new or({id:"fellowship",name:"Fellowship",nodes:[{id:"fel_reputation",name:"Good Reputation",description:"Faster reputation gain",cost:1},{id:"fel_trader",name:"Shrewd Trader",description:"Better prices from merchants",cost:1},{id:"fel_diplomat",name:"Diplomat",description:"Faction hostility decays faster",cost:2,requires:["fel_reputation"]},{id:"fel_mentor",name:"Mentor",description:"Gain bonus XP from quest NPCs",cost:2,requires:["fel_reputation"]},{id:"fel_cheaper_restore",name:"Community Builder",description:"Cheaper restoration costs",cost:2,requires:["fel_trader"]},{id:"fel_trust",name:"Deep Trust",description:"Unlock unique faction quests",cost:3,requires:["fel_diplomat"]},{id:"fel_inspire",name:"Inspire",description:"Nearby allies fight better",cost:3,requires:["fel_mentor"]},{id:"fel_peace",name:"Peacekeeper",description:"Some enemies can be calmed",cost:3,requires:["fel_trust"]}]}),new or({id:"attunement",name:"Attunement",nodes:[{id:"att_focus",name:"Focus Pool",description:"Increased max focus",cost:1},{id:"att_heal",name:"Healing Touch",description:"Stronger healing abilities",cost:1},{id:"att_ward",name:"Ward Strength",description:"Wards last longer",cost:2,requires:["att_focus"]},{id:"att_relic_sense",name:"Relic Sense",description:"Detect nearby relics",cost:2,requires:["att_focus"]},{id:"att_nature",name:"Nature Bond",description:"Nature magic costs less focus",cost:2,requires:["att_heal"]},{id:"att_stabilize",name:"Stabilize Relic",description:"Better relic stabilization",cost:3,requires:["att_relic_sense"]},{id:"att_purify",name:"Purify",description:"Remove corruption from blocks",cost:3,requires:["att_ward"]},{id:"att_calm_fear",name:"Calm Fear",description:"Reduce terror/corruption buildup",cost:2,requires:["att_nature"]},{id:"att_deep_attune",name:"Deep Attunement",description:"Relic abilities gain power",cost:3,requires:["att_stabilize"]}]})],qt=Object.freeze({LOCKED:"locked",AVAILABLE:"available",ACTIVE:"active",COMPLETED:"completed"});class Al{constructor({id:e,description:t,target:n}){this.id=e,this.description=t,this.target=n,this.progress=0}advance(e){this.progress=Math.min(this.progress+e,this.target)}isComplete(){return this.progress>=this.target}}class $n{constructor({id:e,chapter:t,name:n,description:r,objectives:s,requires:o=[]}){this.id=e,this.chapter=t,this.name=n,this.description=r,this.requires=o,this.objectives=s.map(a=>a instanceof Al?a:new Al(a))}advanceObjective(e,t){const n=this.objectives.find(r=>r.id===e);n&&n.advance(t)}isComplete(){return this.objectives.every(e=>e.isComplete())}}class yv{constructor(e){this.quests=e,this._status=new Map;for(const t of e){const n=t.requires.length>0;this._status.set(t.id,n?qt.LOCKED:qt.AVAILABLE)}}getQuest(e){return this.quests.find(t=>t.id===e)}getStatus(e){return this._status.get(e)||qt.LOCKED}activate(e){return this.getStatus(e)!==qt.AVAILABLE?!1:(this._status.set(e,qt.ACTIVE),!0)}advanceObjective(e,t,n){if(this.getStatus(e)!==qt.ACTIVE)return;const r=this.getQuest(e);r&&(r.advanceObjective(t,n),r.isComplete()&&(this._status.set(e,qt.COMPLETED),this._unlockDependents(e)))}_unlockDependents(e){for(const t of this.quests){if(this._status.get(t.id)!==qt.LOCKED)continue;t.requires.every(r=>this._status.get(r)===qt.COMPLETED)&&this._status.set(t.id,qt.AVAILABLE)}}getActiveQuests(){return this.quests.filter(e=>this._status.get(e.id)===qt.ACTIVE)}serialize(){const e={};for(const[n,r]of this._status)e[n]=r;const t={};for(const n of this.quests)t[n.id]=n.objectives.map(r=>({id:r.id,progress:r.progress}));return{statuses:e,objectives:t}}deserialize(e){for(const[t,n]of Object.entries(e.statuses))this._status.set(t,n);for(const[t,n]of Object.entries(e.objectives)){const r=this.getQuest(t);if(r)for(const s of n){const o=r.objectives.find(a=>a.id===s.id);o&&(o.progress=s.progress)}}}}class dn{constructor({id:e,name:t,position:n,factionId:r,dialogueId:s,dialogue:o={},trades:a=[]}){this.id=e,this.name=t,this.position={...n},this.spawnPosition={...n},this.factionId=r,this.dialogueId=s,this.dialogue=o,this.trades=a,this._wanderTimer=0,this._wanderDirX=0,this._wanderDirZ=0,this._wanderSpeed=1.2,this._wanderRadius=6}_collidesWithWorld(e,t,n){if(!n)return!1;const r=Math.floor(e),s=Math.floor(this.position.y),o=Math.floor(t);return Kt(n.getBlock(r,s,o))||Kt(n.getBlock(r,s+1,o))}updateAI(e,t,n,r=Math.random){if(this._wanderTimer-=e,this._wanderTimer<=0)if(r()<.4)this._wanderDirX=0,this._wanderDirZ=0,this._wanderTimer=2+r()*3;else{const s=r()*Math.PI*2;this._wanderDirX=Math.cos(s),this._wanderDirZ=Math.sin(s),this._wanderTimer=1+r()*2}if(this._wanderDirX!==0||this._wanderDirZ!==0){const s=this.position.x+this._wanderDirX*this._wanderSpeed*e,o=this.position.z+this._wanderDirZ*this._wanderSpeed*e,a=s-this.spawnPosition.x,c=o-this.spawnPosition.z;if(a*a+c*c>this._wanderRadius*this._wanderRadius){const d=Math.sqrt(a*a+c*c);this._wanderDirX=-a/d,this._wanderDirZ=-c/d}else this._collidesWithWorld(s,this.position.z,n)?this._wanderDirX=-this._wanderDirX:this.position.x=s,this._collidesWithWorld(this.position.x,o,n)?this._wanderDirZ=-this._wanderDirZ:this.position.z=o}t&&(this.position.y=t(Math.floor(this.position.x),Math.floor(this.position.z))+1)}hasTrades(){return this.trades.length>0}getDialogue(e){if(!this.dialogueId)return this.dialogue.default||"";const t=e.getStatus(this.dialogueId);return t===qt.COMPLETED&&this.dialogue.completed?this.dialogue.completed:t===qt.ACTIVE&&this.dialogue.active?this.dialogue.active:t===qt.AVAILABLE&&this.dialogue.available?this.dialogue.available:this.dialogue.default||""}}class Sv{constructor(){this._npcs=new Map}addNPC(e){this._npcs.set(e.id,e)}getNPC(e){return this._npcs.get(e)}getAllNPCs(){return Array.from(this._npcs.values())}findNearby(e,t){const n=[];for(const r of this._npcs.values())Jt(e,r.position)<=t&&n.push(r);return n}getByFaction(e){const t=[];for(const n of this._npcs.values())n.factionId===e&&t.push(n);return t}}const Ua=[new dn({id:"ranger_hal",name:"Hal the Ranger",position:{x:30,y:33,z:24},factionId:"road_wardens",dialogueId:"ch1_embers",dialogue:{available:"The wild is dangerous. Ruins stir with old power.",active:"Have you found the ward fragment yet?",completed:"Well done. The ward glows again.",default:"Stay safe out there."},trades:[{give:{type:"leather",count:3},receive:{type:"iron_sword",count:1}},{give:{type:"iron_ore",count:2},receive:{type:"stone_pickaxe",count:1}}]}),new dn({id:"shire_farmer",name:"Hamfast the Farmer",position:{x:-45,y:33,z:36},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Fine day for gardening. The taters are coming along nicely."},trades:[{give:{type:"fiber",count:5},receive:{type:"raw_berries",count:3}},{give:{type:"wood",count:5},receive:{type:"raw_meat",count:2}}]}),new dn({id:"shire_merchant",name:"Rosie the Merchant",position:{x:60,y:33,z:-15},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Looking to trade? I have fine Shire goods."},trades:[{give:{type:"stone",count:10},receive:{type:"torch",count:5}},{give:{type:"leather",count:5},receive:{type:"bedroll",count:1}},{give:{type:"iron_ore",count:3},receive:{type:"stone_pickaxe",count:1}}]}),new dn({id:"elara_lorekeeper",name:"Elara the Lorekeeper",position:{x:600,y:33,z:105},factionId:"rivendell_keepers",dialogueId:"ch3_records",dialogue:{available:"The old records speak of a ward network...",active:"Search the archives. The truth is there.",completed:"You have found what was hidden.",default:"The lore is fading, but not yet lost."},trades:[{give:{type:"lore_fragment",count:2},receive:{type:"relic_shard",count:1}}]}),new dn({id:"rivendell_healer",name:"Celebrin the Healer",position:{x:630,y:33,z:75},factionId:"rivendell_keepers",dialogueId:null,dialogue:{default:"The valley still holds its peace. Let me tend your wounds."},trades:[{give:{type:"fiber",count:3},receive:{type:"bandage",count:2}},{give:{type:"raw_berries",count:5},receive:{type:"herb_salad",count:2}}]}),new dn({id:"thorin_smith",name:"Thorin the Smith",position:{x:825,y:45,z:165},factionId:"dwarven_crafters",dialogueId:"ch4_mountains",dialogue:{available:"The old forge can be rekindled, with the right materials.",active:"Have you stabilized the mechanism?",completed:"Aye, the forge rings true once more.",default:"Need something forged?"},trades:[{give:{type:"iron_ore",count:5},receive:{type:"iron_sword",count:1}},{give:{type:"iron_ore",count:3},receive:{type:"iron_pickaxe",count:1}},{give:{type:"copper_ore",count:5},receive:{type:"copper_pickaxe",count:1}}]}),new dn({id:"mountain_trader",name:"Dwalin the Trader",position:{x:780,y:45,z:135},factionId:"dwarven_crafters",dialogueId:null,dialogue:{default:"Mountain stone is the finest. Care to trade?"},trades:[{give:{type:"stone",count:10},receive:{type:"iron_ore",count:2}},{give:{type:"wood",count:15},receive:{type:"iron_ore",count:3}}]}),new dn({id:"galawen_warden",name:"Galawen the Warden",position:{x:1185,y:33,z:120},factionId:"woodland_guardians",dialogueId:"ch5_darkwood",dialogue:{available:"The forest beacon must be restored before the dark wood consumes all.",active:"The spiders grow bolder. Clear their nests.",completed:"Light returns to Mirkwood. Thank you.",default:"Walk carefully beneath these boughs."},trades:[{give:{type:"fiber",count:10},receive:{type:"rope",count:3}},{give:{type:"relic_shard",count:2},receive:{type:"leather_armor",count:1}}]}),new dn({id:"beorn_jr",name:"Grimbeorn the Younger",position:{x:1020,y:33,z:195},factionId:"beorning_wardens",dialogueId:null,dialogue:{default:"The wild things grow restless. Something stirs in the deep places."},trades:[{give:{type:"raw_meat",count:3},receive:{type:"leather",count:2}},{give:{type:"leather",count:5},receive:{type:"leather_armor",count:1}}]}),new dn({id:"old_tom",name:"Old Tom the Innkeeper",position:{x:255,y:33,z:66},factionId:"road_wardens",dialogueId:"ch2_roads",dialogue:{available:"The road needs mending. Fewer travelers come each season.",active:"Any luck restoring the hall?",completed:"The hall stands once more! Travelers will come again.",default:"Rest a while. The road will still be there tomorrow."},trades:[{give:{type:"iron_ore",count:1},receive:{type:"cooked_meat",count:2}},{give:{type:"wood",count:5},receive:{type:"torch",count:3}}]}),new dn({id:"bree_blacksmith",name:"Barliman the Blacksmith",position:{x:225,y:33,z:45},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Looking for a blade? I forge fine ones, if the price is right."},trades:[{give:{type:"iron_ore",count:4},receive:{type:"iron_sword",count:1}},{give:{type:"stone",count:8},receive:{type:"stone_pickaxe",count:1}}]}),new dn({id:"sage_miriel",name:"Miriel the Sage",position:{x:1500,y:40,z:84},factionId:"rivendell_keepers",dialogueId:"ch7_shadow",dialogue:{available:"The awakening reaches its peak. The bastion must hold.",active:"Press on. The dark champion awaits.",completed:"It is done. The shadow recedes.",default:"The age turns. What comes next is yours to shape."},trades:[{give:{type:"relic_shard",count:5},receive:{type:"lore_fragment",count:3}}]})];class Ev{constructor(e,t){this._fog=e,this._landmarks=t,this.isOpen=!1}toggle(){this.isOpen=!this.isOpen}getVisibleLandmarks(){return this._landmarks}getExploredPercentage(){return this._fog.getRevealedPercentage()}isRevealed(e,t){return this._fog.isRevealed(e,t)}getMapData(e){return{playerPos:{...e},landmarks:this._landmarks.map(t=>({id:t.id,name:t.name,x:t.position.x,z:t.position.z,region:t.region})),explored:this.getExploredPercentage()}}}const On=Object.freeze({SHIRE:"shire",BREE:"bree",TROLLSHAWS:"trollshaws",RIVENDELL:"rivendell",MISTY_MOUNTAINS:"misty_mountains",ANDUIN_VALE:"anduin_vale",MIRKWOOD:"mirkwood",LONG_LAKE:"long_lake",EREBOR:"erebor",DOL_GULDUR:"dol_guldur"});class Ln{constructor({id:e,name:t,position:n,radius:r,region:s,description:o=""}){this.id=e,this.name=t,this.position={...n},this.radius=r,this.region=s,this.description=o}contains(e){return Jt(this.position,e)<=this.radius}}const Gr=[new Ln({id:"shire",name:"The Shire",position:{x:0,y:33,z:0},radius:180,region:On.SHIRE,description:"Green rolling hills and cozy burrows."}),new Ln({id:"bree",name:"Bree",position:{x:240,y:33,z:60},radius:75,region:On.BREE,description:"A crossroads town where many travelers meet."}),new Ln({id:"trollshaws",name:"Trollshaws",position:{x:420,y:33,z:120},radius:105,region:On.TROLLSHAWS,description:"Rocky woodland where trolls once roamed."}),new Ln({id:"rivendell",name:"Rivendell",position:{x:600,y:33,z:90},radius:90,region:On.RIVENDELL,description:"The last homely house east of the sea."}),new Ln({id:"misty_mountains",name:"Misty Mountains",position:{x:810,y:50,z:150},radius:150,region:On.MISTY_MOUNTAINS,description:"Towering peaks hiding goblin tunnels and ancient delves."}),new Ln({id:"anduin_vale",name:"Anduin Vale",position:{x:1020,y:33,z:180},radius:120,region:On.ANDUIN_VALE,description:"Fertile valley of the Great River, home to Beornings."}),new Ln({id:"mirkwood",name:"Mirkwood",position:{x:1200,y:33,z:120},radius:165,region:On.MIRKWOOD,description:"A dark and tangled forest crawling with spiders."}),new Ln({id:"long_lake",name:"Long Lake",position:{x:1410,y:33,z:90},radius:75,region:On.LONG_LAKE,description:"Lake-town and its surroundings on the water."}),new Ln({id:"erebor",name:"Erebor",position:{x:1560,y:45,z:60},radius:105,region:On.EREBOR,description:"The Lonely Mountain, ancient dwarven stronghold."}),new Ln({id:"dol_guldur",name:"Dol Guldur",position:{x:1260,y:33,z:270},radius:90,region:On.DOL_GULDUR,description:"A corrupted ruin of dark power in southern Mirkwood."})];class Br{constructor({id:e,name:t,description:n,position:r,requirements:s}){this.id=e,this.name=t,this.description=n,this.position=r||{x:0,y:0,z:0},this.requirements=s,this.restored=!1}canRestore(e){for(const t of this.requirements)if(e.count(t.type)<t.count)return!1;return!0}restore(e){if(this.restored||!this.canRestore(e))return!1;for(const t of this.requirements)e.remove(t.type,t.count);return this.restored=!0,!0}}const Vr=[new Br({id:"starter_watchpost",name:"Ruined Watch-Post",description:"A crumbling frontier watch-post. Restoring it unlocks the first safe base.",position:{x:90,y:33,z:90},requirements:[{type:"wood",count:15},{type:"stone",count:10}]}),new Br({id:"roadside_hall",name:"Roadside Ranger Hall",description:"An abandoned ranger outpost along the East Road. Improves travel and trade.",position:{x:270,y:33,z:75},requirements:[{type:"wood",count:20},{type:"stone",count:15},{type:"iron_ore",count:5}]}),new Br({id:"mountain_workshop",name:"Dwarven Mountain Workshop",description:"A sealed dwarven annex in the Misty Mountains. Unlocks high-tier smithing.",position:{x:810,y:45,z:165},requirements:[{type:"stone",count:30},{type:"iron_ore",count:15},{type:"copper_ore",count:10}]}),new Br({id:"forest_beacon",name:"Mirkwood Forest Beacon",description:"An ancient grove beacon overrun by corruption. Stabilizes the Mirkwood region.",position:{x:1200,y:33,z:135},requirements:[{type:"wood",count:25},{type:"relic_shard",count:5},{type:"fiber",count:15}]}),new Br({id:"ward_bastion",name:"Ward Bastion of the Last Age",description:"The final ward structure tied to the main quest. Its restoration turns the tide.",position:{x:1500,y:40,z:90},requirements:[{type:"stone",count:40},{type:"iron_ore",count:20},{type:"relic_shard",count:10},{type:"lore_fragment",count:5}]})],Rl={small:{radius:3,height:4,wallBlock:v.COBBLESTONE},medium:{radius:5,height:5,wallBlock:v.STONE_BRICK},large:{radius:7,height:6,wallBlock:v.STONE_BRICK}};function Mv(i,e,t="small"){const n=Rl[t]||Rl.small,{radius:r,height:s,wallBlock:o}=n,a=Math.floor(e.x),c=Math.floor(e.y),d=Math.floor(e.z);for(let u=-r;u<=r;u++)for(let p=-r;p<=r;p++)i.setBlock(a+u,c-1,d+p,v.COBBLESTONE);for(let u=0;u<s;u++)for(let p=-r;p<=r;p++)for(let l=-r;l<=r;l++)(Math.abs(p)===r||Math.abs(l)===r)&&(p===r&&Math.abs(l)<=1&&u<3||(u<s-1||(p+l)%3!==0)&&i.setBlock(a+p,c+u,d+l,o));const h=[[-r,-r],[-r,r],[r,-r],[r,r]];for(const[u,p]of h)for(let l=0;l<s;l++)i.setBlock(a+u,c+l,d+p,v.STONE);for(let u=-r;u<=r;u++)for(let p=-r;p<=r;p++)(Math.abs(u)>=r-1||Math.abs(p)>=r-1)&&i.setBlock(a+u,c+s,d+p,o)}function Cd(i,e,t={}){const n=t.wallBlock||v.OAK_PLANKS,r=t.roofBlock||v.PLANKS,s=t.floorBlock||v.COBBLESTONE,o=t.radius||4,a=t.height||4,c=t.bed!==!1,d=t.chest||!1,h=Math.floor(e.x),u=Math.floor(e.y),p=Math.floor(e.z),l=o+2;for(let f=-(o+1);f<=o+1;f++)for(let T=-(o+1);T<=o+1;T++)for(let M=0;M<=a+l;M++)i.setBlock(h+f,u+M,p+T,v.AIR);for(let f=-(o+1);f<=o+1;f++)for(let T=-(o+1);T<=o+1;T++){for(let M=u-1;M>=u-8&&i.getBlock(h+f,M,p+T)===v.AIR;M--)i.setBlock(h+f,M,p+T,v.COBBLESTONE);i.setBlock(h+f,u-1,p+T,v.COBBLESTONE)}for(let f=-o;f<=o;f++)for(let T=-o;T<=o;T++)i.setBlock(h+f,u-1,p+T,s);for(let f=0;f<a;f++)for(let T=-o;T<=o;T++)for(let M=-o;M<=o;M++)if(Math.abs(T)===o||Math.abs(M)===o){if(T===o&&M===0&&f<2){i.setBlock(h+T,u+f,p+M,v.DOOR);continue}if(f===2&&!(Math.abs(T)===o&&Math.abs(M)===o)){if(Math.abs(T)===o&&M!==0&&Math.abs(M)<o&&M%2===0){i.setBlock(h+T,u+f,p+M,v.GLASS);continue}if(Math.abs(M)===o&&T!==0&&Math.abs(T)<o&&T%2===0){i.setBlock(h+T,u+f,p+M,v.GLASS);continue}}i.setBlock(h+T,u+f,p+M,n)}for(let f=0;f<=o;f++){const T=o-f;if(T<0)break;for(let M=-T;M<=T;M++)i.setBlock(h+M,u+a+f,p-o,n),i.setBlock(h+M,u+a+f,p+o,n)}for(let f=0;f<=o+1;f++){const T=o+1-f;if(T<0)break;for(let M=-(o+1);M<=o+1;M++)i.setBlock(h-T,u+a+f,p+M,r),T>0&&i.setBlock(h+T,u+a+f,p+M,r)}const _=h+o-1,g=p+o-1,m=u+a+o+1;for(let f=u+a;f<=m+2;f++)i.setBlock(_,f,g,v.COBBLESTONE);i.setBlock(h,u+2,p-o+1,v.TORCH),c&&i.setBlock(h-o+1,u,p-o+1,v.BED),d&&i.setBlock(h-o+1,u,p+o-1,v.CHEST)}function bv(i,e,t={}){const n=t.radius||3,r=3,s=t.floorBlock||v.COBBLESTONE,o=t.bed!==!1,a=t.chest||!1,c=Math.floor(e.x),d=Math.floor(e.y),h=Math.floor(e.z);for(let _=-(n+1);_<=n+1;_++)for(let g=-(n+1);g<=n+1;g++){const m=Math.sqrt(_*_+g*g);if(m>n+1.5)continue;const f=Math.max(1,Math.floor(r+1-m*.5));for(let M=r;M<=r+f;M++)i.getBlock(c+_,d+M,h+g)===v.AIR&&i.setBlock(c+_,d+M,h+g,v.DIRT);const T=d+r+f;i.getBlock(c+_,T+1,h+g)===v.AIR&&i.setBlock(c+_,T,h+g,v.GRASS)}for(let _=-n;_<=n;_++)for(let g=-n;g<=n;g++)i.setBlock(c+_,d-1,h+g,s);for(let _=-n;_<=n;_++)for(let g=-n;g<=n;g++)if(!(Math.sqrt(_*_+g*g)>n+.5))for(let f=0;f<r;f++)i.setBlock(c+_,d+f,h+g,v.AIR);for(let _=-n;_<=n;_++)for(let g=-n;g<=n;g++){const m=Math.sqrt(_*_+g*g);if(!(m<n-.5||m>n+.5))for(let f=0;f<r;f++)i.setBlock(c+_,d+f,h+g,v.OAK_PLANKS)}for(let _=-n;_<=n;_++)for(let g=-n;g<=n;g++)Math.sqrt(_*_+g*g)>n+.5||i.setBlock(c+_,d+r,h+g,v.OAK_PLANKS);for(let _=0;_<=1;_++)i.setBlock(c+n,d+_,h,v.DOOR);for(let _=0;_<=1;_++)i.setBlock(c+n+1,d+_,h,v.AIR);i.setBlock(c+n,d+2,h-2,v.GLASS),i.setBlock(c+n,d+2,h+2,v.GLASS),i.setBlock(c+n+1,d+2,h-2,v.AIR),i.setBlock(c+n+1,d+2,h+2,v.AIR);const u=c-1,p=h-1,l=d+r+Math.max(1,Math.floor(r+1));for(let _=d+r;_<=l+1;_++)i.setBlock(u,_,p,v.COBBLESTONE);i.setBlock(c,d+2,h-n+2,v.TORCH),o&&i.setBlock(c-n+2,d,h-n+2,v.BED),a&&i.setBlock(c-n+2,d,h+n-2,v.CHEST)}function Tv(i,e,t="small"){const n={small:{radius:4,height:4,wallBlock:v.STONE_BRICK,roofBlock:v.OAK_PLANKS},medium:{radius:6,height:5,wallBlock:v.STONE_BRICK,roofBlock:v.OAK_PLANKS},large:{radius:8,height:6,wallBlock:v.STONE_BRICK,roofBlock:v.PLANKS}},r=n[t]||n.small;Cd(i,e,{wallBlock:r.wallBlock,roofBlock:r.roofBlock,floorBlock:v.STONE_BRICK,radius:r.radius,height:r.height,bed:!0,chest:!0});const s=Math.floor(e.x),o=Math.floor(e.y),a=Math.floor(e.z);i.setBlock(s+r.radius-1,o+2,a,v.TORCH),i.setBlock(s-r.radius+1,o+2,a,v.TORCH),i.setBlock(s,o+2,a+r.radius-1,v.TORCH),i.setBlock(s+r.radius-2,o,a-r.radius+1,v.WORKBENCH)}function Av(i,e,t,n={}){const r=Math.floor(e.x),s=Math.floor(e.y),o=Math.floor(e.z),a=s-1,c=t.mound;for(let l=-(c.radiusX+1);l<=c.radiusX+1;l++)for(let _=-(c.radiusZ+1);_<=c.radiusZ+1;_++){const g=(l-c.centerDx)/c.radiusX,m=_/c.radiusZ,f=g*g+m*m;if(f>1)continue;const T=Math.max(0,Math.round(c.maxHeight*(1-f)));if(T===0)continue;for(let E=1;E<=T;E++){const O=r+l,R=a+E,w=o+_;i.getBlock(O,R,w)===v.AIR&&i.setBlock(O,R,w,v.DIRT)}const M=a+T;i.getBlock(r+l,M+1,o+_)===v.AIR&&i.setBlock(r+l,M,o+_,v.GRASS)}for(const l of t.rooms)if(l.shape==="circle"){for(let _=-l.radius;_<=l.radius;_++)for(let g=-l.radius;g<=l.radius;g++)if(!(Math.sqrt(_*_+g*g)>l.radius+.5))for(let m=0;m<l.height;m++)i.setBlock(r+l.cx+_,s+m,o+l.cz+g,v.AIR)}else for(let _=l.x0;_<=l.x1;_++)for(let g=l.z0;g<=l.z1;g++)for(let m=0;m<l.height;m++)i.setBlock(r+_,s+m,o+g,v.AIR);for(const l of t.rooms)if(l.shape==="circle")for(let _=-l.radius;_<=l.radius;_++)for(let g=-l.radius;g<=l.radius;g++)Math.sqrt(_*_+g*g)>l.radius+.5||i.setBlock(r+l.cx+_,s-1,o+l.cz+g,t.floorBlock);else for(let _=l.x0;_<=l.x1;_++)for(let g=l.z0;g<=l.z1;g++)i.setBlock(r+_,s-1,o+g,t.floorBlock);for(const l of t.rooms)if(l.shape==="circle")for(let _=-l.radius;_<=l.radius;_++)for(let g=-l.radius;g<=l.radius;g++){const m=Math.sqrt(_*_+g*g);if(m<l.radius-.5||m>l.radius+.8)continue;let f=!1;for(const T of t.rooms){if(T===l||T.shape!=="rect")continue;const M=l.cx+_,E=l.cz+g;if(M>=T.x0&&M<=T.x1&&E>=T.z0&&E<=T.z1){f=!0;break}}if(!f)for(let T=0;T<l.height;T++)i.setBlock(r+l.cx+_,s+T,o+l.cz+g,t.wallBlock)}for(const l of t.rooms){const _=l.height||t.ceilingHeight;if(l.shape==="circle")for(let g=-l.radius;g<=l.radius;g++)for(let m=-l.radius;m<=l.radius;m++)Math.sqrt(g*g+m*m)>l.radius+.5||i.setBlock(r+l.cx+g,s+_,o+l.cz+m,t.ceilingBlock);else for(let g=l.x0;g<=l.x1;g++)for(let m=l.z0;m<=l.z1;m++)i.setBlock(r+g,s+_,o+m,t.ceilingBlock)}i.setBlock(r,s,o+t.door.dz,v.DOOR),i.setBlock(r,s+1,o+t.door.dz,v.DOOR);for(const l of t.frame)i.setBlock(r+l.dx,s+l.dy,o+l.dz,l.block);for(const l of t.windows)i.setBlock(r+l.dx,s+l.dy,o+l.dz,v.GLASS);const d=Math.max(...t.frame.map(l=>Math.abs(l.dz)),1),h=Math.max(...t.frame.map(l=>l.dy),2);for(let l=0;l<=h;l++)for(let _=-d;_<=d;_++)i.setBlock(r+1,s+l,o+_,v.AIR);const u=t.chimney;for(let l=u.minDy;l<=u.maxDy;l++)i.setBlock(r+u.dx,s+l,o+u.dz,v.COBBLESTONE),u.width>=2&&i.setBlock(r+u.dx,s+l,o+u.dz+1,v.COBBLESTONE),u.width>=3&&i.setBlock(r+u.dx+1,s+l,o+u.dz,v.COBBLESTONE);for(const l of t.furnishings)i.setBlock(r+l.dx,s+l.dy,o+l.dz,l.block);for(const l of t.outdoorTorches)i.setBlock(r+l.dx,s+l.dy,o+l.dz,v.TORCH);const p=t.garden;for(let l=1;l<=p.pathLength;l++){const _=Math.floor(p.pathWidth/2);for(let g=-_;g<=_;g++)i.setBlock(r+l,a,o+g,v.COBBLESTONE)}if(p.bedWidth>0){const l=Math.floor(p.pathWidth/2);for(let _=2;_<=p.pathLength;_++)for(let g=1;g<=p.bedWidth;g++){const m=l+g,f=-(l+g);i.setBlock(r+_,a,o+m,v.DIRT),i.setBlock(r+_,a+1,o+m,v.TALL_GRASS),i.setBlock(r+_,a,o+f,v.DIRT),i.setBlock(r+_,a+1,o+f,v.TALL_GRASS)}}if(p.fenceOffset>0){const l=r+p.pathLength+1,_=Math.floor(p.pathWidth/2)+p.bedWidth+1;for(let g=-_;g<=_;g+=2)i.setBlock(l,a+1,o+g,v.WOOD)}}v.AIR;v.DIRT;v.GRASS;const Id=v.COBBLESTONE,Er=v.OAK_PLANKS,Mt=v.STONE_BRICK;v.GLASS;v.DOOR;const pi=v.TORCH,rc=v.CAMPFIRE,sc=v.BED,Wr=v.CHEST;v.WOOD;v.TALL_GRASS;const Rv=v.WORKBENCH,wl={name:"base",mound:{centerDx:-5,radiusX:7,radiusZ:6,maxHeight:6},rooms:[{cx:-5,cz:0,radius:3,height:3,shape:"circle"},{x0:-2,x1:0,z0:-1,z1:1,height:3,shape:"rect"}],floorBlock:Id,wallBlock:Er,ceilingBlock:Er,ceilingHeight:3,door:{dz:0},frame:[...[-1,0,1,2].flatMap(i=>[{dx:0,dy:i,dz:-1,block:Mt},{dx:0,dy:i,dz:1,block:Mt},{dx:0,dy:i,dz:-2,block:Mt},{dx:0,dy:i,dz:2,block:Mt}]),{dx:0,dy:2,dz:0,block:Mt},{dx:0,dy:3,dz:-1,block:Mt},{dx:0,dy:3,dz:0,block:Mt},{dx:0,dy:3,dz:1,block:Mt}],windows:[{dx:0,dy:1,dz:-2},{dx:0,dy:2,dz:-2},{dx:0,dy:1,dz:2},{dx:0,dy:2,dz:2}],chimney:{dx:-7,dz:0,width:2,minDy:3,maxDy:8},furnishings:[{dx:-7,dy:0,dz:0,block:rc},{dx:-7,dy:0,dz:2,block:sc},{dx:-7,dy:0,dz:-2,block:Wr},{dx:-5,dy:2,dz:-3,block:pi},{dx:-5,dy:2,dz:3,block:pi},{dx:-1,dy:2,dz:0,block:pi}],outdoorTorches:[{dx:1,dy:2,dz:-2},{dx:1,dy:2,dz:2}],garden:{pathLength:6,pathWidth:3,bedWidth:2,fenceOffset:6}},wv={name:"bagend",mound:{centerDx:-6,radiusX:9,radiusZ:8,maxHeight:7},rooms:[{cx:-6,cz:0,radius:4,height:4,shape:"circle"},{x0:-2,x1:0,z0:-1,z1:1,height:3,shape:"rect"},{x0:-8,x1:-5,z0:-8,z1:-5,height:3,shape:"rect"}],floorBlock:Mt,wallBlock:Er,ceilingBlock:Er,ceilingHeight:4,door:{dz:0},frame:[...[-1,0,1,2,3].flatMap(i=>[{dx:0,dy:i,dz:-2,block:Mt},{dx:0,dy:i,dz:2,block:Mt},{dx:0,dy:i,dz:-3,block:Mt},{dx:0,dy:i,dz:3,block:Mt}]),...[0,1,2].flatMap(i=>[{dx:0,dy:i,dz:-1,block:Mt},{dx:0,dy:i,dz:1,block:Mt}]),{dx:0,dy:2,dz:0,block:Mt},{dx:0,dy:3,dz:-1,block:Mt},{dx:0,dy:3,dz:0,block:Mt},{dx:0,dy:3,dz:1,block:Mt},...[-3,-2,-1,0,1,2,3].map(i=>({dx:0,dy:4,dz:i,block:Mt}))],windows:[{dx:0,dy:1,dz:-2},{dx:0,dy:2,dz:-2},{dx:0,dy:1,dz:-3},{dx:0,dy:2,dz:-3},{dx:0,dy:1,dz:2},{dx:0,dy:2,dz:2},{dx:0,dy:1,dz:3},{dx:0,dy:2,dz:3}],chimney:{dx:-9,dz:0,width:3,minDy:4,maxDy:10},furnishings:[{dx:-9,dy:0,dz:0,block:rc},{dx:-9,dy:0,dz:3,block:sc},{dx:-3,dy:0,dz:-3,block:Wr},{dx:-7,dy:0,dz:-7,block:Wr},{dx:-5,dy:0,dz:-7,block:Wr},{dx:-6,dy:3,dz:-4,block:pi},{dx:-6,dy:3,dz:4,block:pi},{dx:-1,dy:2,dz:0,block:pi},{dx:-6,dy:2,dz:-7,block:pi},{dx:-3,dy:0,dz:3,block:Rv}],outdoorTorches:[{dx:1,dy:2,dz:-3},{dx:1,dy:2,dz:3}],garden:{pathLength:6,pathWidth:3,bedWidth:3,fenceOffset:6}},Cv={name:"cozy",mound:{centerDx:-4,radiusX:5,radiusZ:5,maxHeight:4},rooms:[{cx:-4,cz:0,radius:2,height:3,shape:"circle"},{x0:-2,x1:0,z0:0,z1:0,height:3,shape:"rect"}],floorBlock:Id,wallBlock:Er,ceilingBlock:Er,ceilingHeight:3,door:{dz:0},frame:[...[0,1,2].flatMap(i=>[{dx:0,dy:i,dz:-1,block:Mt},{dx:0,dy:i,dz:1,block:Mt}]),{dx:0,dy:2,dz:0,block:Mt}],windows:[{dx:0,dy:1,dz:-1},{dx:0,dy:1,dz:1}],chimney:{dx:-5,dz:0,width:1,minDy:3,maxDy:6},furnishings:[{dx:-5,dy:0,dz:0,block:rc},{dx:-5,dy:0,dz:1,block:sc},{dx:-5,dy:0,dz:-1,block:Wr},{dx:-4,dy:2,dz:-2,block:pi}],outdoorTorches:[],garden:{pathLength:3,pathWidth:1,bedWidth:2,fenceOffset:0}},Hs=Object.freeze({WARD_LIGHT:"ward_light",HEAL_WOUND:"heal_wound",SENSE_CORRUPTION:"sense_corruption",ROOT_SNARE:"root_snare",STONE_WARD:"stone_ward",RUNE_MEND:"rune_mend",CALM_FEAR:"calm_fear"}),Iv=15;class Dv{constructor({id:e,name:t,ability:n,focusCost:r,description:s=""}){this.id=e,this.name=t,this.ability=n,this.focusCost=r,this.description=s,this.cooldown=0}canUse(e){return e>=this.focusCost&&this.cooldown<=0}}class Ov{constructor(){this._equipped=null}equipRelic(e){this._equipped=e}getEquippedRelic(){return this._equipped}useRelic(e){if(!this._equipped||!this._equipped.canUse(e))return!1;const t={ability:this._equipped.ability,focusCost:this._equipped.focusCost};return this._equipped.cooldown=Iv,t}tick(e){this._equipped&&this._equipped.cooldown>0&&(this._equipped.cooldown=Math.max(0,this._equipped.cooldown-e))}}const Rn=Object.freeze({NONE:"none",MINIMAL:"minimal",BASIC:"basic",GOOD:"good",EXCELLENT:"excellent"}),Cl={[Rn.NONE]:{warmth:0,safety:0,recoveryMod:1},[Rn.MINIMAL]:{warmth:.2,safety:.2,recoveryMod:1.2},[Rn.BASIC]:{warmth:.4,safety:.4,recoveryMod:1.5},[Rn.GOOD]:{warmth:.7,safety:.7,recoveryMod:1.8},[Rn.EXCELLENT]:{warmth:1,safety:1,recoveryMod:2}},Lv=3,Pv=8;class Nv{evaluate(e,t){const n=Math.floor(t.x),r=Math.floor(t.y),s=Math.floor(t.z);let o=!1;for(let h=1;h<=Pv;h++)if(Kt(e.getBlock(n,r+h,s))){o=!0;break}if(!o)return{quality:Rn.NONE,...Cl[Rn.NONE]};let a=0;const c=[[1,0],[-1,0],[0,1],[0,-1]];for(const[h,u]of c){let p=!1;for(let l=1;l<=Lv;l++)if(Kt(e.getBlock(n+h*l,r,s+u*l))||Kt(e.getBlock(n+h*l,r+1,s+u*l))){p=!0;break}p&&a++}let d;return a>=4?d=Rn.EXCELLENT:a>=3?d=Rn.GOOD:a>=2?d=Rn.BASIC:d=Rn.MINIMAL,{quality:d,...Cl[d]}}}const Il=Object.freeze({HISTORY:"history",INSCRIPTION:"inscription",SONG:"song",MAP_NOTE:"map_note",RELIC_VISION:"relic_vision"});class Dd{constructor({id:e,title:t,text:n,category:r}){this.id=e,this.title=t,this.text=n,this.category=r}}class kv{constructor(){this._entries=new Map}addEntry(e){return this._entries.has(e.id)?!1:(this._entries.set(e.id,e),!0)}hasEntry(e){return this._entries.has(e)}getEntries(){return Array.from(this._entries.values())}getByCategory(e){return this.getEntries().filter(t=>t.category===e)}serialize(){return this.getEntries().map(e=>({id:e.id,title:e.title,text:e.text,category:e.category}))}deserialize(e){for(const t of e)this.addEntry(new Dd(t))}}class Uv{constructor(){this._waypoints=new Map}unlockWaypoint(e){this._waypoints.has(e.id)||this._waypoints.set(e.id,{...e})}isUnlocked(e){return this._waypoints.has(e)}getWaypoints(){return Array.from(this._waypoints.values())}travel(e){const t=this._waypoints.get(e);return t?{...t.position}:null}serialize(){return this.getWaypoints()}deserialize(e){for(const t of e)this.unlockWaypoint(t)}}const pn=Object.freeze({CACHE:"cache",RUIN:"ruin",RELIC_FRAGMENT:"relic_fragment",ROADSTONE:"roadstone",RECIPE_TABLET:"recipe_tablet",LORE_BOOK:"lore_book",INSCRIPTION:"inscription"});class mn{constructor({id:e,type:t,position:n,reward:r=[]}){this.id=e,this.type=t,this.position={...n},this.reward=r,this.discovered=!1}discover(){return this.discovered?!1:(this.discovered=!0,!0)}}class Bv{constructor(e){this._items=e}get(e){return this._items.find(t=>t.id===e)}findNearby(e,t){return this._items.filter(n=>!n.discovered&&Jt(e,n.position)<=t)}getDiscoveredCount(){return this._items.filter(e=>e.discovered).length}getTotalCount(){return this._items.length}}const Fv=[new mn({id:"cache_shire_01",type:pn.CACHE,position:{x:45,y:33,z:30},reward:[{type:"bread",count:3}]}),new mn({id:"cache_bree_01",type:pn.CACHE,position:{x:255,y:33,z:54},reward:[{type:"iron_ore",count:5}]}),new mn({id:"cache_mountain_01",type:pn.CACHE,position:{x:780,y:40,z:135},reward:[{type:"copper_ore",count:8}]}),new mn({id:"lore_shire_01",type:pn.LORE_BOOK,position:{x:30,y:33,z:15},reward:[{type:"lore_fragment",count:1}]}),new mn({id:"lore_rivendell_01",type:pn.LORE_BOOK,position:{x:615,y:33,z:90},reward:[{type:"lore_fragment",count:2}]}),new mn({id:"relic_trollshaws_01",type:pn.RELIC_FRAGMENT,position:{x:435,y:33,z:114},reward:[{type:"relic_shard",count:1}]}),new mn({id:"relic_mirkwood_01",type:pn.RELIC_FRAGMENT,position:{x:1230,y:33,z:135},reward:[{type:"relic_shard",count:2}]}),new mn({id:"roadstone_east_01",type:pn.ROADSTONE,position:{x:180,y:33,z:45},reward:[{type:"stone",count:3}]}),new mn({id:"roadstone_east_02",type:pn.ROADSTONE,position:{x:360,y:33,z:75},reward:[{type:"stone",count:3}]}),new mn({id:"inscription_dwarven_01",type:pn.INSCRIPTION,position:{x:840,y:42,z:150},reward:[{type:"lore_fragment",count:1}]}),new mn({id:"recipe_forge_01",type:pn.RECIPE_TABLET,position:{x:810,y:44,z:156},reward:[{type:"lore_fragment",count:1}]}),new mn({id:"cache_erebor_01",type:pn.CACHE,position:{x:1545,y:40,z:60},reward:[{type:"iron_ore",count:10}]})],Fr=Object.freeze({NONE:"none",POOR:"poor",DECENT:"decent",GOOD:"good",EXCELLENT:"excellent"}),zv={[Fr.NONE]:.05,[Fr.POOR]:.2,[Fr.DECENT]:.5,[Fr.GOOD]:.8,[Fr.EXCELLENT]:1};class Hv{rest(e,t,n){const r=zv[t]||0,s=n*2*r,o=n*5*r,a=n*1*r;e.health=Math.min(e.maxHealth,e.health+s),e.stamina=Math.min(100,e.stamina+o),e.corruption=Math.max(0,e.corruption-a)}}const Gv=5,Vv=8;class Wv{constructor(e){this.base=e,this._modifiers=new Map}addModifier(e,t){this._modifiers.set(e,t)}removeModifier(e){this._modifiers.delete(e)}getEffective(e=!1,t=!1){let n=this.base;for(const r of this._modifiers.values())n+=r;return e&&(n+=Gv),t&&(n-=Vv),Math.max(0,n)}isHiddenFrom(e,t,n=!1,r=!1){const s=this.getEffective(n,r),o=Math.min(t/5,1);return s*o>e}}const Od=[{id:"ruin_clearing",name:"Clear the Old Watchtower",description:"A ruined watchtower on the east road is infested with goblins. Clear them out to make the road safer.",objectives:[{id:"clear_goblins",description:"Defeat goblins at the watchtower",target:5}]},{id:"herb_hunt",name:"Athelas for the Healer",description:"A healer in the frontier settlement needs rare athelas herbs from the forest edge.",objectives:[{id:"gather_herbs",description:"Gather athelas plants",target:3}]},{id:"beast_hunt",name:"Wolf Pack Menace",description:"A pack of wolves has been attacking travelers near the old bridge. Thin their numbers.",objectives:[{id:"kill_wolves",description:"Defeat wolves near the bridge",target:4}]},{id:"crafting_commission",name:"Tools for the Settlement",description:"The frontier settlement needs stone tools. Craft and deliver pickaxes and axes.",objectives:[{id:"deliver_pickaxes",description:"Deliver stone pickaxes",target:2},{id:"deliver_axes",description:"Deliver stone axes",target:2}]},{id:"ore_prospecting",name:"Iron for the Forge",description:"The dwarven smiths need iron ore to repair their forge. Mine ore from the mountains.",objectives:[{id:"mine_iron",description:"Mine iron ore",target:10}]},{id:"ruin_clearing_2",name:"The Haunted Barrow",description:"An ancient barrow mound has awakened wights. Cleanse the site before corruption spreads.",objectives:[{id:"defeat_wights",description:"Defeat wights in the barrow",target:3}]},{id:"beast_hunt_spider",name:"Spider Nest in Mirkwood",description:"Giant spiders have woven webs across a forest path. Destroy them and clear the way.",objectives:[{id:"kill_spiders",description:"Defeat spiders",target:6}]},{id:"herb_hunt_mushroom",name:"Mushroom Gathering",description:"A cook needs rare mushrooms that grow near the river stones.",objectives:[{id:"gather_mushrooms",description:"Gather mushrooms",target:5}]},{id:"lore_fragments",name:"Lost Pages of the Archive",description:"Scattered lore fragments from an ancient library have been found in ruins across the region.",objectives:[{id:"collect_fragments",description:"Collect lore fragments",target:4}]},{id:"road_repair",name:"Mend the East Road",description:"Sections of the old east road have crumbled. Place stone blocks to repair the path.",objectives:[{id:"place_stones",description:"Place cobblestone on the road",target:20}]},{id:"troll_bounty",name:"The Bridge Troll",description:"A troll has claimed the old stone bridge. Defeat it to restore safe passage.",objectives:[{id:"defeat_troll",description:"Defeat the bridge troll",target:1}]},{id:"crafting_commission_armor",name:"Armor for the Wardens",description:"The road wardens need leather armor. Craft and deliver sets to their outpost.",objectives:[{id:"deliver_armor",description:"Deliver leather armor",target:3}]},{id:"herb_gathering_mirkwood",name:"Herbs of Mirkwood",description:"The Woodland Guardians need medicinal herbs that grow deep within the shadowed paths of Mirkwood.",factionId:"woodland_guardians",reward:{xp:120,items:[{id:"elven_salve",quantity:2}]},objectives:[{id:"gather_mirkwood_herbs",description:"Gather rare herbs in Mirkwood",target:8}]},{id:"goblin_camp_clear",name:"Goblin Camp Assault",description:"A goblin encampment has been established near the trade road. Destroy it before their numbers grow.",factionId:"road_wardens",reward:{xp:200,items:[{id:"iron_sword",quantity:1}]},objectives:[{id:"defeat_camp_goblins",description:"Defeat goblins in the camp",target:8},{id:"destroy_camp_tents",description:"Destroy goblin tents",target:3}]},{id:"dwarven_relic_hunt",name:"Relics of the Dwarven Halls",description:"Ancient relics from a collapsed dwarven hall are scattered across the mountain foothills. Recover them.",factionId:"dwarven_crafters",reward:{xp:180,items:[{id:"dwarven_ring",quantity:1}]},objectives:[{id:"recover_relics",description:"Recover dwarven relics",target:5}]},{id:"road_repair_bree",name:"Mend the Bree Road",description:"The road leading into Bree has deteriorated badly. Place stone and gravel to restore safe passage.",factionId:"road_wardens",reward:{xp:100,items:[{id:"stone_block",quantity:10}]},objectives:[{id:"place_gravel",description:"Place gravel on the road",target:15},{id:"place_cobblestone",description:"Place cobblestone markers",target:6}]},{id:"spider_nest_clear",name:"Purge the Spider Nest",description:"A massive spider nest threatens the southern forest paths. Burn the webs and slay the brood mother.",factionId:"woodland_guardians",reward:{xp:250,items:[{id:"spider_silk",quantity:5}]},objectives:[{id:"burn_webs",description:"Burn spider webs",target:6},{id:"defeat_brood_mother",description:"Defeat the brood mother",target:1}]},{id:"wolf_den_clear",name:"Clear the Wolf Den",description:"Wargs have established a den in the Anduin valley caves. The Beorning Wardens need help driving them out.",factionId:"beorning_wardens",reward:{xp:180,items:[{id:"wolf_pelt",quantity:3}]},objectives:[{id:"defeat_wargs",description:"Defeat wargs in the den",target:6}]},{id:"beacon_light_chain",name:"Light the Beacon Chain",description:"The old warning beacons along the road have gone dark. Climb to each summit and relight the fires.",factionId:"road_wardens",reward:{xp:160,items:[{id:"torch",quantity:5}]},objectives:[{id:"light_beacons",description:"Light beacon fires",target:4}]},{id:"lore_collection_rivendell",name:"Lost Lore of Rivendell",description:"Scattered scrolls of ancient Elven knowledge have been found in ruins. Return them to the Keepers.",factionId:"rivendell_keepers",reward:{xp:150,items:[{id:"lore_scroll",quantity:1}]},objectives:[{id:"collect_scrolls",description:"Collect Elven lore scrolls",target:6}]},{id:"smith_commission_iron",name:"Iron Commission for the Smiths",description:"The dwarven smiths need iron tools and fittings crafted to exact specifications.",factionId:"dwarven_crafters",reward:{xp:140,items:[{id:"dwarven_ingot",quantity:2}]},objectives:[{id:"craft_iron_tools",description:"Craft iron tools",target:4},{id:"deliver_fittings",description:"Deliver iron fittings",target:3}]},{id:"cook_feast_hobbit",name:"Feast Preparations",description:"A grand feast is being planned at the frontier settlement. Gather ingredients and prepare the dishes.",factionId:"road_wardens",reward:{xp:100,items:[{id:"feast_plate",quantity:1}]},objectives:[{id:"gather_ingredients",description:"Gather feast ingredients",target:10},{id:"prepare_dishes",description:"Prepare feast dishes",target:4}]},{id:"scout_mountain_pass",name:"Scout the Mountain Pass",description:"The Beorning Wardens need a scout to traverse the high mountain pass and report on enemy movements.",factionId:"beorning_wardens",reward:{xp:200,items:[{id:"climbing_rope",quantity:2}]},objectives:[{id:"reach_summit",description:"Reach the mountain summit",target:1},{id:"mark_enemy_camps",description:"Mark enemy encampments on the map",target:3}]},{id:"map_fragment_hunt",name:"The Cartographer's Request",description:"An Elven cartographer needs old map fragments to reconstruct a complete chart of the northern wilds.",factionId:"rivendell_keepers",reward:{xp:130,items:[{id:"region_map",quantity:1}]},objectives:[{id:"find_map_fragments",description:"Find map fragments in ruins",target:5}]},{id:"ruin_survey_trollshaws",name:"Survey the Trollshaws Ruins",description:"Ancient structures in the Trollshaws may hold clues about the old kingdom. Survey and document them.",factionId:"rivendell_keepers",reward:{xp:170,items:[{id:"survey_notes",quantity:1}]},objectives:[{id:"survey_ruins",description:"Survey ruin sites in the Trollshaws",target:4}]},{id:"mushroom_foraging",name:"Foraging in the Shire Woods",description:"Rare glowing mushrooms grow in the damp hollows of the Shire woods. The Guardians use them for remedies.",factionId:"woodland_guardians",reward:{xp:90,items:[{id:"glowing_mushroom",quantity:5}]},objectives:[{id:"forage_mushrooms",description:"Forage rare mushrooms",target:8}]},{id:"guard_duty_outpost",name:"Guard Duty at the Outpost",description:"The road wardens are short-staffed. Stand guard at the frontier outpost through the night and repel attackers.",factionId:"road_wardens",reward:{xp:220,items:[{id:"warden_badge",quantity:1}]},objectives:[{id:"survive_night",description:"Survive the night at the outpost",target:1},{id:"repel_attackers",description:"Repel attacking enemies",target:5}]}],Zn=Object.freeze({FRESH:"fresh",AGING:"aging",STALE:"stale",SPOILED:"spoiled"}),Xv={[Zn.FRESH]:1,[Zn.AGING]:.75,[Zn.STALE]:.4,[Zn.SPOILED]:.1};class qv{constructor(){this._items=new Map}addItem(e,t){this._items.set(e,{maxTime:t,remaining:t})}removeItem(e){this._items.delete(e)}tick(e){for(const[,t]of this._items)t.remaining=Math.max(0,t.remaining-e)}getTimeRemaining(e){const t=this._items.get(e);return t?t.remaining:1/0}getBand(e){const t=this._items.get(e);if(!t)return Zn.FRESH;const n=t.remaining/t.maxTime;return n>.5?Zn.FRESH:n>.25?Zn.AGING:n>0?Zn.STALE:Zn.SPOILED}getEffectivenessMultiplier(e){return Xv[this.getBand(e)]||1}}const Kv={[v.DIRT]:.4,[v.GRASS]:.4,[v.SAND]:.4,[v.CLAY]:.5,[v.GRAVEL]:.4,[v.TALL_GRASS]:.1,[v.LEAVES]:.2,[v.MUD]:.4,[v.SNOW]:.3,[v.THATCH]:.3,[v.REED]:.1,[v.WOOD]:.8,[v.BIRCH_WOOD]:.8,[v.PLANKS]:.6,[v.OAK_PLANKS]:.6,[v.STONE]:1.5,[v.COBBLESTONE]:1.2,[v.STONE_BRICK]:1.3,[v.IRON_ORE]:2,[v.COPPER_ORE]:1.8,[v.COAL_ORE]:1.5,[v.GLASS]:.3,[v.TORCH]:.1,[v.CAMPFIRE]:.5,[v.WORKBENCH]:.8,[v.FORGE]:2,[v.KITCHEN]:.6,[v.LOOM]:.5,[v.RUNE_TABLE]:1.5},Yv=1;class $v{constructor(){this._x=0,this._y=0,this._z=0,this._blockType=0,this._progress=0,this._breakTime=0,this._active=!1}isBreaking(){return this._active}getProgress(){return this._progress}getPosition(){return{x:this._x,y:this._y,z:this._z}}startBreak(e,t,n,r){this._active&&this._x===e&&this._y===t&&this._z===n||(this._x=e,this._y=t,this._z=n,this._blockType=r,this._breakTime=Kv[r]||Yv,this._progress=0,this._active=!0)}tick(e){return this._active?(this._progress+=e/this._breakTime,this._progress>=1?(this._active=!1,this._progress=0,!0):!1):!1}cancel(){this._active=!1,this._progress=0}}class jv{isDead(e){return e.health<=0}respawn(e,t,n){e.health=e.maxHealth*.5,e.hunger=Math.max(e.hunger,50),e.stamina=100,t.position.x=n.x,t.position.y=n.y,t.position.z=n.z}}function Ld(i){Object.freeze(i);for(const e of Object.values(i))e&&typeof e=="object"&&Ld(e);return i}const Fi=Ld({PHYSICS:{GRAVITY:-20,JUMP_VELOCITY:8,PLAYER_WIDTH:.6,PLAYER_HEIGHT:1.8,VOID_FLOOR_Y:0},CAMERA:{FOV:75,NEAR:.1,FAR:80,MOUSE_SENSITIVITY:.002,MAX_PITCH:Math.PI/2-.01,THIRD_PERSON_DISTANCE:5,THIRD_PERSON_EYE_HEIGHT:2,FIRST_PERSON_EYE_HEIGHT:1.6},WORLD:{BOUNDARY_EXTENT:1680,WATER_LEVEL:26,SURFACE_Y:32},CHUNKS:{LOAD_DISTANCE:5,UNLOAD_DISTANCE:8,MAX_PER_FRAME:8,RENDER_DISTANCE:4,SIZE:16},COMBAT:{MELEE_RANGE:3,MELEE_CONE:.7,RANGED_CONE:.95,FIST_DAMAGE:2,NORMAL_COOLDOWN:.5,HEAVY_COOLDOWN:1.2,XP_PER_KILL:25,FACTION_REP_PER_KILL:10},SURVIVAL:{GAME_TIME_SCALE:4,SPRINT_MULTIPLIER:1.6,WATER_SLOWDOWN:.5,HUNGER_DRAIN_RATE:.1},FOG:{WIDTH:2100,HEIGHT:900,CELL_SIZE:10,BASE_FAR:56,BASE_NEAR_RATIO:.5,MIN_NEAR:1,REVEAL_RADIUS:20},SPAWNING:{MAX_ENEMIES:8,MIN_SPAWN_DIST:15,MAX_SPAWN_DIST:35,SPAWN_INTERVAL:10},CORRUPTION:{CENTER_X:1260,CENTER_Z:270,RADIUS:300,FOG_THRESHOLD:.1},RESTORATION:{INTERACT_RANGE:8,HINT_RANGE:10,XP_REWARD:100,FACTION_REP_REWARD:50},NPC:{INTERACT_RANGE:5},MAP:{CANVAS_WIDTH:460,CANVAS_HEIGHT:320,WORLD_MIN_X:-300,WORLD_MAX_X:1680,WORLD_MIN_Z:-360,WORLD_MAX_Z:450},COLORS:{SKY_DAY:8900331,SKY_DAWN:16757606,SKY_DUSK:16742212,SKY_NIGHT:657962,AMBIENT_LIGHT:16777215,DIR_LIGHT:16774368},LIGHTING:{AMBIENT:{dawn:.5,day:.6,dusk:.35,night:.1},DIRECTIONAL:{dawn:.6,day:.8,dusk:.4,night:.05}},QUESTS:{AUTO_ACTIVATE_SIDE_COUNT:3,XP_FIRST_NIGHT:50,XP_EXPLORATION:30,XP_DISCOVERY:20,XP_RESTORATION:100},CREATIVE:{FLY_SPEED:15},DIALOGUE:{DISPLAY_DURATION:5,SHORT_DURATION:3,SAVE_FEEDBACK_DURATION:2}});class Zv{constructor(){this.enabled=!1,this.flySpeed=Fi.CREATIVE.FLY_SPEED}toggle(){this.enabled=!this.enabled}isInvincible(){return this.enabled}canFly(){return this.enabled}noHunger(){return this.enabled}}class Qv{constructor(){this._message="",this._choices=[],this._active=!1,this._state="inactive",this.selectedIndex=0,this._response=null}getState(){return this._state}isActive(){return this._active}getMessage(){return this._response||this._message}getChoices(){return this._state==="choices"?this._choices:[]}startDialogue(e,t=[]){this._message=e,this._choices=t,this._active=!0,this._state="choices",this._response=null,this.selectedIndex=0}selectChoice(e){if(this._state!=="choices"||e<0||e>=this._choices.length)return null;const t=this._choices[e];return t.response===null?(this._active=!1,this._state="inactive",null):(this._response=t.response,this._state="response",t.response)}acknowledge(){this._state==="response"&&(this._response=null,this._state="choices",this.selectedIndex=0)}selectNext(){this._state==="choices"&&this._choices.length>0&&(this.selectedIndex=Math.min(this.selectedIndex+1,this._choices.length-1))}selectPrev(){this._state==="choices"&&(this.selectedIndex=Math.max(0,this.selectedIndex-1))}dismiss(){this._active=!1,this._state="inactive",this._message="",this._choices=[],this._response=null}}const Xe=16,Dl=3,Pd=42,Jv=[{type:v.COAL_ORE,threshold:.7,maxY:28},{type:v.COPPER_ORE,threshold:.75,maxY:24},{type:v.IRON_ORE,threshold:.8,maxY:20}];function ex(i,e,t){for(const n of Jv){if(e>n.maxY)continue;if(La(i*.1+e*.3+Pd*.1+n.type*100,t*.1+e*.3)>n.threshold)return n.type}return null}function tx(i,e){let t=i*374761+e*668265+Pd*982451|0;return t=(t>>16^t)*73244475|0,t=(t>>16^t)*73244475|0,(t>>16^t)&2147483647}function Ol(i,e){return tx(i,e)/2147483647}const nx={shire:.1,forest:.3,mirkwood:.2,plains:.05};function Ba(i,e,t){return i+e*Xe+t*Xe*Xe}function Fa(i,e,t){return`${i},${e},${t}`}function ar(i,e,t,n,r){const s=Math.floor(e/Xe),o=Math.floor(t/Xe),a=Math.floor(n/Xe),c=(e%Xe+Xe)%Xe,d=(t%Xe+Xe)%Xe,h=(n%Xe+Xe)%Xe,u=Fa(s,o,a);i[u]||(i[u]=new Uint8Array(Xe*Xe*Xe)),i[u][Ba(c,d,h)]=r}function ix(i,e){const t={},n=i*Xe,r=e*Xe;for(let s=0;s<Xe;s++)for(let o=0;o<Xe;o++){const a=n+s,c=r+o,d=qs(a,c),h=Dt(a,c);Sd(a,c),ar(t,a,h,c,d.surfaceBlock);for(let p=1;p<=Dl;p++)ar(t,a,h-p,c,v.DIRT);for(let p=0;p<h-Dl;p++){const l=ex(a,p,c);ar(t,a,p,c,l||v.STONE)}for(let p=w0;p>=0;p--){const l=Math.floor(p/Xe),_=(p%Xe+Xe)%Xe,g=Fa(Math.floor(a/Xe),l,Math.floor(c/Xe)),m=t[g],f=(a%Xe+Xe)%Xe,T=(c%Xe+Xe)%Xe,M=Ba(f,_,T);if(m&&m[M]===v.AIR)m[M]=v.WATER;else if(!m||m[M]!==v.AIR)break}if(Ol(a,c)<d.treeDensity){for(let _=1;_<=4;_++)ar(t,a,h+_,c,v.WOOD);const l=h+4;for(let _=-2;_<=2;_++)for(let g=-2;g<=2;g++)for(let m=0;m<=2;m++)_===0&&g===0&&m===0||Math.abs(_)+Math.abs(g)+m<=3&&ar(t,a+_,l+m,c+g,v.LEAVES)}else{const p=nx[d.type]||0,l=Ol(a,c);if(p>0&&l<p){const _=Math.floor((h+1)/Xe),g=((h+1)%Xe+Xe)%Xe,m=Fa(Math.floor(a/Xe),_,Math.floor(c/Xe)),f=t[m],T=(a%Xe+Xe)%Xe,M=(c%Xe+Xe)%Xe,E=Ba(T,g,M);(!f||f[E]===v.AIR)&&ar(t,a,h+1,c,v.TALL_GRASS)}}}return{blocks:t}}class rx{constructor(e,t={}){if(this._world=e,this._loadDistance=t.loadDistance||6,this._unloadDistance=t.unloadDistance||this._loadDistance+3,this._maxPerFrame=t.maxChunksPerFrame||4,this._cache=new Map,this._modified=new Map,this._meshDirtyChunks=new Set,this._generated=new Set,this._pending=new Set,this._lastPcx=null,this._lastPcz=null,this._worker=null,this._onProgress=t.onProgress||null,this._totalRequested=0,this._totalCompleted=0,typeof Worker<"u"&&t.useWorker!==!1)try{this._worker=new Worker(new URL(""+new URL("chunkWorker-C_guXore.js",import.meta.url).href,import.meta.url),{type:"module"}),this._worker.onmessage=n=>this._onWorkerMessage(n)}catch{this._worker=null}}_cacheAndLoadColumn(e,t,n){const r=`${e},${t}`;this._cache.set(r,n.blocks),this._loadColumnFromCache(e,t),this._generated.add(r)}_loadColumnFromCache(e,t){const n=`${e},${t}`,r=this._cache.get(n);if(r)for(const[s,o]of Object.entries(r)){const a=o instanceof ArrayBuffer?new Uint8Array(o):o,[c,d,h]=s.split(",").map(Number),u=`${c},${d},${h}`,p=this._modified.get(u);let l=this._world.chunks.get(u);if(l||(l=new Na,this._world.chunks.set(u,l)),p)l.blocks.set(p);else for(let _=0;_<a.length;_++)a[_]!==0&&(l.blocks[_]=a[_]);this._meshDirtyChunks.add(u)}}consumeMeshDirtyChunks(){const e=new Set(this._meshDirtyChunks);return this._meshDirtyChunks.clear(),e}_unloadColumn(e,t){const n=`${e},${t}`,r=this._cache.get(n);if(r)for(const s of Object.keys(r)){const o=this._world.chunks.get(s);o&&(this._modified.set(s,new Uint8Array(o.blocks)),this._world.chunks.delete(s))}}_generateColumnSync(e,t){const n=`${e},${t}`;if(this._generated.has(n))return;const r=ix(e,t);this._cacheAndLoadColumn(e,t,r),this._totalCompleted++,this._onProgress&&this._onProgress(this._totalCompleted,this._totalRequested)}_requestColumnAsync(e,t){const n=`${e},${t}`;this._generated.has(n)||this._pending.has(n)||(this._pending.add(n),this._totalRequested++,this._worker.postMessage({type:"generate",cx:e,cz:t,id:n}))}_onWorkerMessage(e){const{type:t,cx:n,cz:r,blocks:s,id:o}=e.data;t==="generated"&&(this._pending.delete(o),this._cacheAndLoadColumn(n,r,{blocks:s}),this._totalCompleted++,this._onProgress&&this._onProgress(this._totalCompleted,this._totalRequested))}getProgress(){return this._totalRequested===0?1:this._totalCompleted/this._totalRequested}isLoading(){return this._pending.size>0}generateInitialChunks(e,t){const n=Math.floor(e/Ve),r=Math.floor(t/Ve),s=[];for(let o=-this._loadDistance;o<=this._loadDistance;o++)for(let a=-this._loadDistance;a<=this._loadDistance;a++)s.push({cx:n+o,cz:r+a});if(this._totalRequested=s.length,this._totalCompleted=0,this._worker)for(const{cx:o,cz:a}of s)this._requestColumnAsync(o,a);else for(const{cx:o,cz:a}of s)this._generateColumnSync(o,a);this._lastPcx=n,this._lastPcz=r}update(e,t){const n=Math.floor(e/Ve),r=Math.floor(t/Ve);if(n===this._lastPcx&&r===this._lastPcz)return;this._lastPcx=n,this._lastPcz=r;let s=0;for(let o=0;o<=this._loadDistance&&s<this._maxPerFrame;o++)for(let a=-o;a<=o&&s<this._maxPerFrame;a++)for(let c=-o;c<=o&&s<this._maxPerFrame;c++){if(Math.abs(a)!==o&&Math.abs(c)!==o)continue;const d=n+a,h=r+c,u=`${d},${h}`;if(this._generated.has(u)||this._pending.has(u)){this._cache.has(u)&&!this._isColumnLoaded(d,h)&&this._loadColumnFromCache(d,h);continue}this._worker?this._requestColumnAsync(d,h):this._generateColumnSync(d,h),s++}for(const o of this._generated){const[a,c]=o.split(",").map(Number);(Math.abs(a-n)>this._unloadDistance||Math.abs(c-r)>this._unloadDistance)&&this._unloadColumn(a,c)}}_isColumnLoaded(e,t){return this._world.chunks.has(`${e},1,${t}`)}}const An={mainQuests:8,sitesRestored:5,discoverables:12,npcsMet:7,landmarks:10,enemyTypes:15,sideQuests:10,nightsSurvived:10,relicUsed:1,shelterBuilt:1,stationsCrafted:6};Object.keys(An).length;class sx{constructor(){this._completedQuests=new Set,this._restoredSites=new Set,this._discovered=new Set,this._npcs=new Set,this._landmarks=new Set,this._enemyTypes=new Set,this._sideQuests=new Set,this._stations=new Set,this.nightsSurvived=0,this._relicUsed=!1,this._shelterBuilt=!1}completeQuest(e){this._completedQuests.add(e)}restoreSite(e){this._restoredSites.add(e)}discover(e){this._discovered.add(e)}talkToNPC(e){this._npcs.add(e)}visitLandmark(e){this._landmarks.add(e)}killEnemy(e){this._enemyTypes.add(e)}completeSideQuest(e){this._sideQuests.add(e)}surviveNight(){this.nightsSurvived++}useRelic(){this._relicUsed=!0}buildShelter(){this._shelterBuilt=!0}craftAtStation(e){this._stations.add(e)}get questsCompleted(){return this._completedQuests.size}get sitesRestored(){return this._restoredSites.size}get discoverablesFound(){return this._discovered.size}get npcsMet(){return this._npcs.size}get landmarksVisited(){return this._landmarks.size}get enemyTypesKilled(){return this._enemyTypes.size}get sideQuestsCompleted(){return this._sideQuests.size}getBreakdown(){return[{label:"Main Quests",current:this._completedQuests.size,total:An.mainQuests},{label:"Sites Restored",current:this._restoredSites.size,total:An.sitesRestored},{label:"Discoverables",current:this._discovered.size,total:An.discoverables},{label:"NPCs Met",current:this._npcs.size,total:An.npcsMet},{label:"Landmarks Visited",current:this._landmarks.size,total:An.landmarks},{label:"Enemy Types Killed",current:this._enemyTypes.size,total:An.enemyTypes},{label:"Side Quests",current:this._sideQuests.size,total:An.sideQuests},{label:"Nights Survived",current:Math.min(this.nightsSurvived,An.nightsSurvived),total:An.nightsSurvived},{label:"Relic Used",current:this._relicUsed?1:0,total:1},{label:"Shelter Built",current:this._shelterBuilt?1:0,total:1},{label:"Crafting Stations",current:this._stations.size,total:An.stationsCrafted},{label:"Skill Points Spent",current:0,total:0},{label:"Faction Rep",current:0,total:0}]}getPercentage(){const t=this.getBreakdown().filter(r=>r.total>0);let n=0;for(const r of t)n+=Math.min(1,r.current/r.total);return Math.round(n/t.length*100)}}const ki=[{id:"fresh",name:"Fresh Start",description:"Brand new game, no progress",percent:0,applyState:i=>{}},{id:"ch1_done",name:"Chapter 1 Complete",description:"Survived first night, restored watch-post, ward activated",percent:12,applyState:i=>{const{questSystem:e,inventory:t,survivalStats:n,experienceSystem:r,player:s,progress:o,factionSystem:a,getHeightAt:c}=i;e.activate("ch1_embers"),e.advanceObjective("ch1_embers","ch1_survive",1),e.advanceObjective("ch1_embers","ch1_reach_outpost",1),e.advanceObjective("ch1_embers","ch1_activate_ward",1),t.add("wood",30),t.add("stone",25),t.add("fiber",20),t.add("stick",16),t.add("coal",5),t.add("iron_ore",3),t.add("cooked_meat",5),r.addExperience(150),o.completeQuest("ch1_embers"),o.restoreSite("starter_watchpost"),o.surviveNight(),s.position.x=70,s.position.z=15,s.position.y=c(70,15)+2}},{id:"ch2_done",name:"Chapter 2 Complete",description:"Restored ranger hall, met lore NPC, investigated corruption",percent:25,applyState:i=>{ki[1].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,factionSystem:o,getHeightAt:a}=i;e.activate("ch2_roads"),e.advanceObjective("ch2_roads","ch2_restore",1),e.advanceObjective("ch2_roads","ch2_meet_npc",1),e.advanceObjective("ch2_roads","ch2_corruption",3),t.add("iron_ore",10),t.add("copper_ore",5),t.add("leather",5),t.add("rope",3),n.addExperience(200),s.completeQuest("ch2_roads"),s.restoreSite("roadside_hall"),s.talkToNPC("old_tom");for(let c=0;c<3;c++)s.surviveNight();r.position.x=180,r.position.z=30,r.position.y=a(180,30)+2}},{id:"ch4_done",name:"Chapter 4 Complete",description:"Reached Rivendell, explored mountains, stabilized dwarven forge",percent:50,applyState:i=>{ki[2].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o}=i;e.activate("ch3_records"),e.advanceObjective("ch3_records","ch3_reach_rivendell",1),e.advanceObjective("ch3_records","ch3_learn_wards",1),e.advanceObjective("ch3_records","ch3_obtain_relic",1),e.activate("ch4_mountains"),e.advanceObjective("ch4_mountains","ch4_enter_delve",1),e.advanceObjective("ch4_mountains","ch4_stabilize",1),e.advanceObjective("ch4_mountains","ch4_defeat_boss",1),t.add("relic_shard",8),t.add("lore_fragment",5),t.add("iron_ore",20),n.addExperience(400),s.completeQuest("ch3_records"),s.completeQuest("ch4_mountains"),s.restoreSite("mountain_workshop"),s.talkToNPC("elara_lorekeeper"),s.talkToNPC("thorin_smith");for(let a=0;a<3;a++)s.surviveNight();r.position.x=380,r.position.z=40,r.position.y=o(380,40)+2}},{id:"ch6_done",name:"Chapter 6 Complete",description:"Cleared Mirkwood, restored beacon, reached Erebor forge",percent:75,applyState:i=>{ki[3].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o}=i;e.activate("ch5_darkwood"),e.advanceObjective("ch5_darkwood","ch5_enter_mirkwood",1),e.advanceObjective("ch5_darkwood","ch5_clear_spiders",3),e.advanceObjective("ch5_darkwood","ch5_restore_beacon",1),e.activate("ch6_forge"),e.advanceObjective("ch6_forge","ch6_reach_forge",1),e.advanceObjective("ch6_forge","ch6_unlock_crafting",1),e.advanceObjective("ch6_forge","ch6_discover_source",1),t.add("relic_shard",15),t.add("lore_fragment",10),t.add("iron_ore",30),n.addExperience(500),s.completeQuest("ch5_darkwood"),s.completeQuest("ch6_forge"),s.restoreSite("forest_beacon"),s.talkToNPC("galawen_warden"),s.talkToNPC("ranger_hal");for(let a=0;a<2;a++)s.surviveNight();r.position.x=420,r.position.z=80,r.position.y=o(420,80)+2}},{id:"ch7_done",name:"Chapter 7 Complete (Pre-Epilogue)",description:"Defeated the dark champion at Dol Guldur, ready for epilogue",percent:90,applyState:i=>{ki[4].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o}=i;e.activate("ch7_shadow"),e.advanceObjective("ch7_shadow","ch7_assault",1),e.advanceObjective("ch7_shadow","ch7_disable_link",1),e.advanceObjective("ch7_shadow","ch7_defeat_champion",1),n.addExperience(500),s.completeQuest("ch7_shadow"),s.restoreSite("ward_bastion"),s.talkToNPC("sage_miriel"),s.useRelic(),r.position.x=30,r.position.z=30,r.position.y=o(30,30)+2}},{id:"full_100",name:"100% Complete",description:"Everything done — all quests, sites, discoverables, enemies, etc.",percent:100,applyState:i=>{ki[5].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o}=i;e.activate("ch8_after"),e.advanceObjective("ch8_after","ch8_celebrate",1),e.advanceObjective("ch8_after","ch8_explore",1),s.completeQuest("ch8_after");const a=["cache_shire_01","cache_bree_01","cache_mountain_01","cache_erebor_01","lore_shire_01","lore_rivendell_01","relic_trollshaws_01","relic_mirkwood_01","roadstone_east_01","roadstone_east_02","inscription_dwarven_01","recipe_forge_01"];for(const h of a)s.discover(h);const c=["shire","bree","trollshaws","rivendell","misty_mountains","anduin_vale","mirkwood","long_lake","erebor","dol_guldur"];for(const h of c)s.visitLandmark(h);const d=["wolf","goblin","spider","troll","wight","guardian","construct","orc","giant_spider","shadow","barrow_wight","goblin_archer","corrupted_bear","dark_construct","wraith"];for(const h of d)s.killEnemy(h);for(const h of["ranger_hal","old_tom","elara_lorekeeper","thorin_smith","galawen_warden","beorn_jr","sage_miriel"])s.talkToNPC(h);for(let h=0;h<10;h++)s.completeSideQuest(`sq${h}`);for(;s.nightsSurvived<10;)s.surviveNight();s.buildShelter();for(const h of["hand","workbench","forge","campfire","kitchen","loom"])s.craftAtStation(h);t.add("iron_ore",50),t.add("relic_shard",20),t.add("lore_fragment",15),t.add("lembas",20),n.addExperience(1e3),r.position.x=0,r.position.z=0,r.position.y=o(0,0)+2}}],ox=[{questId:"ch2_roads",objectiveId:"ch2_restore",position:{x:270,y:33,z:75},radius:15,type:"restore_site"},{questId:"ch2_roads",objectiveId:"ch2_meet_npc",position:{x:240,y:33,z:66},radius:10,type:"npc_proximity"},{questId:"ch2_roads",objectiveId:"ch2_corruption",position:{x:300,y:33,z:90},radius:20,type:"explore_area"},{questId:"ch3_records",objectiveId:"ch3_reach_rivendell",position:{x:600,y:33,z:90},radius:25,type:"reach_location"},{questId:"ch3_records",objectiveId:"ch3_learn_wards",position:{x:600,y:33,z:105},radius:10,type:"npc_proximity"},{questId:"ch3_records",objectiveId:"ch3_obtain_relic",position:{x:615,y:33,z:90},radius:8,type:"discoverable"},{questId:"ch4_mountains",objectiveId:"ch4_enter_delve",position:{x:810,y:50,z:150},radius:30,type:"reach_location"},{questId:"ch4_mountains",objectiveId:"ch4_stabilize",position:{x:810,y:45,z:165},radius:12,type:"restore_site"},{questId:"ch4_mountains",objectiveId:"ch4_defeat_boss",position:{x:795,y:50,z:135},radius:15,type:"kill_enemies"},{questId:"ch5_darkwood",objectiveId:"ch5_enter_mirkwood",position:{x:1200,y:33,z:120},radius:30,type:"reach_location"},{questId:"ch5_darkwood",objectiveId:"ch5_clear_spiders",position:{x:1200,y:33,z:135},radius:20,type:"kill_enemies"},{questId:"ch5_darkwood",objectiveId:"ch5_restore_beacon",position:{x:1200,y:33,z:135},radius:12,type:"restore_site"},{questId:"ch6_forge",objectiveId:"ch6_reach_forge",position:{x:1560,y:45,z:60},radius:25,type:"reach_location"},{questId:"ch6_forge",objectiveId:"ch6_unlock_crafting",position:{x:1560,y:45,z:60},radius:12,type:"craft_at_station"},{questId:"ch6_forge",objectiveId:"ch6_discover_source",position:{x:1545,y:45,z:75},radius:10,type:"discoverable"},{questId:"ch7_shadow",objectiveId:"ch7_assault",position:{x:1260,y:33,z:270},radius:25,type:"reach_location"},{questId:"ch7_shadow",objectiveId:"ch7_disable_link",position:{x:1260,y:33,z:270},radius:12,type:"restore_site"},{questId:"ch7_shadow",objectiveId:"ch7_defeat_champion",position:{x:1275,y:33,z:285},radius:15,type:"kill_enemies"},{questId:"ch8_after",objectiveId:"ch8_celebrate",position:{x:90,y:33,z:90},radius:15,type:"reach_location"},{questId:"ch8_after",objectiveId:"ch8_explore",position:{x:0,y:33,z:0},radius:50,type:"explore_area"}];class ax{constructor(){this._triggers=ox.map(e=>({...e})),this._fired=new Set}getTriggers(){return this._triggers}checkTriggers(e){const t=[];for(const n of this._triggers){const r=`${n.questId}:${n.objectiveId}`;this._fired.has(r)||Jt(e,n.position)<=n.radius&&(t.push({questId:n.questId,objectiveId:n.objectiveId,type:n.type}),(n.type==="reach_location"||n.type==="explore_area")&&this._fired.add(r))}return t}}function Ll(i,e,t){return Math.max(e,Math.min(t,i))}const cx=.5,lx=3,dx=60,hx=110,Fo=Object.freeze({forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",jump:"Space",sprint:"ShiftLeft",crouch:"KeyC",interact:"KeyT",eat:"KeyF",throwItem:"KeyH",crafting:"KeyE",inventory:"KeyI",questLog:"KeyQ",skillTree:"Tab",map:"KeyM",mapZoom:"KeyZ",restore:"KeyR",relic:"KeyX",guard:"KeyG",camera:"KeyV",settings:"KeyP"});class ux{constructor(){this.sensitivity=1,this.fov=75,this.tutorialEnabled=!0,this.reducedMotion=!1,this.isOpen=!1,this.keyBindings={...Fo}}setSensitivity(e){this.sensitivity=Ll(e,cx,lx)}setFov(e){this.fov=Ll(e,dx,hx)}toggleTutorial(){this.tutorialEnabled=!this.tutorialEnabled}getMouseSensitivity(e){return e*this.sensitivity}toggleReducedMotion(){this.reducedMotion=!this.reducedMotion}setKeyBinding(e,t){return e in Fo?(this.keyBindings[e]=t,!0):!1}resetKeyBindings(){this.keyBindings={...Fo}}toggleOpen(){this.isOpen=!this.isOpen}}class fx{constructor(){this._menuOpen=!1}setMenuOpen(e){this._menuOpen=e}isPaused(){return this._menuOpen}getEffectiveDt(e){return this._menuOpen?0:e}}class px{constructor(e){this._tabs=[...e],this.isOpen=!1,this.activeTab=null}get tabs(){return this._tabs}open(e){this.isOpen=!0,this.activeTab=e&&this._tabs.includes(e)?e:this._tabs[0]}close(){this.isOpen=!1,this.activeTab=null}toggle(){this.isOpen?this.close():this.open()}switchTab(e){this._tabs.includes(e)&&(this.activeTab=e)}nextTab(){const e=this._tabs.indexOf(this.activeTab);this.activeTab=this._tabs[(e+1)%this._tabs.length]}prevTab(){const e=this._tabs.indexOf(this.activeTab);this.activeTab=this._tabs[(e-1+this._tabs.length)%this._tabs.length]}}const Nd=["inventory","crafting","skills","quests","map","settings","help"];class mx{constructor(){this.visible=!1}toggle(){this.visible=!this.visible}shouldRender(e){return this.visible&&!e}}const Gs=Object.freeze({STORY:"story",STANDARD:"standard",HARSH:"harsh"}),Pl={[Gs.STORY]:{hungerDrainMultiplier:.5,enemyDamageMultiplier:.6,corruptionMultiplier:.5,resourceMultiplier:1.5},[Gs.STANDARD]:{hungerDrainMultiplier:1,enemyDamageMultiplier:1,corruptionMultiplier:1,resourceMultiplier:1},[Gs.HARSH]:{hungerDrainMultiplier:1.5,enemyDamageMultiplier:1.4,corruptionMultiplier:1.5,resourceMultiplier:.7}};function _x(i){return Pl[i]||Pl[Gs.STANDARD]}const gx={man:{road_wardens:15},elf:{rivendell_keepers:20,woodland_guardians:15},dwarf:{dwarven_crafters:25},hobbit:{road_wardens:15,beorning_wardens:10}};function vx(i){return gx[i]||{}}const xx={man_ranger:["surv_forager"],man_soldier:["cmb_parry"],man_scholar:["att_focus","exp_map_reveal"],elf_archer:["cmb_quick_draw"],elf_warden:["att_ward","cmb_parry"],elf_gatherer:["surv_forager","crf_yield"],dwarf_miner:["crf_yield"],dwarf_blacksmith:["crf_repair","cmb_heavy_blow"],dwarf_delver:["exp_climb","exp_map_reveal"],hobbit_burglar:["surv_hardy"],hobbit_cook:["surv_hardy","fel_trader"],hobbit_forager:["surv_forager","surv_hardy"]};function yx(i,e){const t=`${i}_${e}`;return xx[t]||[]}const Sx={man_ranger:{type:"tracking",value:1.5,description:"Easier tracking of beasts"},man_soldier:{type:"block_stability",value:1.3,description:"Improved block stability"},man_scholar:{type:"relic_identify",value:2,description:"Identifies relics faster"},elf_archer:{type:"ranged_accuracy",value:1.3,description:"Reduced bow sway"},elf_warden:{type:"beacon_resistance",value:1.5,description:"Stronger near allied beacons"},elf_gatherer:{type:"plant_yield",value:1.5,description:"Better yield from plants"},dwarf_miner:{type:"mining_speed",value:1.4,description:"Faster ore/stone extraction"},dwarf_blacksmith:{type:"tool_durability",value:1.3,description:"Gear wears slower"},dwarf_delver:{type:"underground_stealth",value:1.5,description:"Reduced detection underground"},hobbit_burglar:{type:"crouch_stealth",value:1.5,description:"Less detection while crouched"},hobbit_cook:{type:"meal_duration",value:1.5,description:"Meals give longer buffs"},hobbit_forager:{type:"forage_yield",value:1.4,description:"Better berry/mushroom yields"}};function Ex(i){return Sx[i]||null}const ws=Object.freeze({ELF:"elf",DWARF:"dwarf",HOBBIT:"hobbit",MAN:"man"}),Mx={[ws.ELF]:{beauty:3,light:2},[ws.DWARF]:{durability:3,temperature:2},[ws.HOBBIT]:{comfort:3,food:2},[ws.MAN]:{storage:3,defense:2}};function bx(i){return Mx[i]||{}}const hn=Object.freeze({HOSTILE:"hostile",UNFRIENDLY:"unfriendly",NEUTRAL:"neutral",FRIENDLY:"friendly",HONORED:"honored",EXALTED:"exalted"}),Tx=[{min:-1/0,max:-50,tier:hn.HOSTILE},{min:-50,max:0,tier:hn.UNFRIENDLY},{min:0,max:25,tier:hn.NEUTRAL},{min:25,max:100,tier:hn.FRIENDLY},{min:100,max:250,tier:hn.HONORED},{min:250,max:1/0,tier:hn.EXALTED}],Ax={[hn.HOSTILE]:1.5,[hn.UNFRIENDLY]:1.2,[hn.NEUTRAL]:1,[hn.FRIENDLY]:.9,[hn.HONORED]:.8,[hn.EXALTED]:.7};class cr{constructor({id:e,name:t,description:n}){this.id=e,this.name=t,this.description=n}}class Rx{constructor(e){this.factions=e,this._reputation=new Map;for(const t of e)this._reputation.set(t.id,0)}getReputation(e){return this._reputation.get(e)||0}addReputation(e,t){const n=this._reputation.get(e)||0;this._reputation.set(e,n+t)}getTier(e){const t=this.getReputation(e);for(const n of Tx)if(t>=n.min&&t<n.max)return n.tier;return hn.NEUTRAL}applyRaceModifiers(e,t){for(const[n,r]of Object.entries(t))this.addReputation(n,r)}getPriceModifier(e){return Ax[this.getTier(e)]||1}getAllFactions(){return this.factions}serialize(){const e={};for(const[t,n]of this._reputation)e[t]=n;return{reputation:e}}deserialize(e){for(const[t,n]of Object.entries(e.reputation))this._reputation.set(t,n)}}const wx=[new cr({id:"road_wardens",name:"Road Wardens",description:"Frontier men who guard the old roads and trade routes between settlements."}),new cr({id:"rivendell_keepers",name:"Rivendell Keepers",description:"Remnant lorekeepers preserving ancient Elven knowledge in the hidden valley."}),new cr({id:"dwarven_crafters",name:"Dwarven Crafters",description:"Skilled dwarven smiths and miners maintaining craft enclaves near the old holds."}),new cr({id:"woodland_guardians",name:"Woodland Guardians",description:"Surviving elves and wardens who protect the forests from corruption and darkness."}),new cr({id:"beorning_wardens",name:"Beorning Wardens",description:"Wild wardens of the Anduin vale who guard the passes and shelter travelers."}),new cr({id:"goblin_horde",name:"Goblin Horde",description:"Hostile goblin and orc bands infesting the mountains and old ruins."})],Cx=[new $n({id:"ch1_embers",chapter:1,name:"Embers in the Wild",description:"Survive the first days, reach the ruined outpost, and activate the first ward fragment.",objectives:[{id:"ch1_survive",description:"Survive the first night",target:1},{id:"ch1_reach_outpost",description:"Reach the ruined outpost",target:1},{id:"ch1_activate_ward",description:"Activate the ward fragment",target:1}]}),new $n({id:"ch2_roads",chapter:2,name:"Broken Roads",description:"Restore a frontier settlement, meet the first lore NPC, and discover signs of spreading corruption.",requires:["ch1_embers"],objectives:[{id:"ch2_restore",description:"Restore the frontier settlement",target:1},{id:"ch2_meet_npc",description:"Meet the lore NPC",target:1},{id:"ch2_corruption",description:"Investigate corruption signs",target:3}]}),new $n({id:"ch3_records",chapter:3,name:"The Hidden Records",description:"Travel to the Rivendell region, learn of the ward network, and obtain the first true relic.",requires:["ch2_roads"],objectives:[{id:"ch3_reach_rivendell",description:"Reach the Rivendell region",target:1},{id:"ch3_learn_wards",description:"Learn about the ward network",target:1},{id:"ch3_obtain_relic",description:"Obtain the first true relic",target:1}]}),new $n({id:"ch4_mountains",chapter:4,name:"Beneath the Mountains",description:"Enter the Misty Mountains delves, stabilize a dwarven mechanism, and fight underground threats.",requires:["ch3_records"],objectives:[{id:"ch4_enter_delve",description:"Enter the Misty Mountains delve",target:1},{id:"ch4_stabilize",description:"Stabilize the dwarven mechanism",target:1},{id:"ch4_defeat_boss",description:"Defeat the corrupted guardian",target:1}]}),new $n({id:"ch5_darkwood",chapter:5,name:"The Dark Wood Stirs",description:"Travel through Mirkwood, deal with spiders and ward failures, and restore a forest beacon.",requires:["ch4_mountains"],objectives:[{id:"ch5_enter_mirkwood",description:"Enter Mirkwood",target:1},{id:"ch5_clear_spiders",description:"Clear spider nests",target:3},{id:"ch5_restore_beacon",description:"Restore the forest beacon",target:1}]}),new $n({id:"ch6_forge",chapter:6,name:"The Sleeping Forge",description:"Reach the dwarven craft center near Erebor, unlock final crafting, and learn the source location.",requires:["ch5_darkwood"],objectives:[{id:"ch6_reach_forge",description:"Reach the ancient forge",target:1},{id:"ch6_unlock_crafting",description:"Unlock final crafting tier",target:1},{id:"ch6_discover_source",description:"Discover the awakening source location",target:1}]}),new $n({id:"ch7_shadow",chapter:7,name:"The Rekindled Shadow",description:"Assault the corrupted stronghold, disable its link to the ancient network, and face the dark champion.",requires:["ch6_forge"],objectives:[{id:"ch7_assault",description:"Assault the corrupted stronghold",target:1},{id:"ch7_disable_link",description:"Disable the network link",target:1},{id:"ch7_defeat_champion",description:"Defeat the dark champion",target:1}]}),new $n({id:"ch8_after",chapter:8,name:"After the Night",description:"The world recovers. Settlements improve, and exploration continues in peace.",requires:["ch7_shadow"],objectives:[{id:"ch8_celebrate",description:"Return to a restored settlement",target:1},{id:"ch8_explore",description:"Explore the renewed world",target:1}]})];function Ix(i,e){return i*(100/(100+e))}const lr=Object.freeze({HAND:"hand",CAMPFIRE:"campfire",WORKBENCH:"workbench",FORGE:"forge",LOOM:"loom",KITCHEN:"kitchen",RUNE_TABLE:"rune_table"}),gn=Object.freeze({STONE:"stone",OIL_FLASK:"oil_flask",SMOKE_BOMB:"smoke_bomb",BAIT:"bait"}),Dx=.85;class Cs{constructor({type:e,damage:t,range:n,effect:r}){this.type=e,this.damage=t,this.range=n,this.effect=r}}function Ox(i,e,t,n){const r=Pn(t);for(const s of n){if(s.isDead()||Jt(e,s.position)>i.range)continue;const a=Pn({x:s.position.x-e.x,y:s.position.y-e.y,z:s.position.z-e.z});if(Hr(r,a)>=Dx)return s.takeDamage(i.damage),!0}return!1}const Lx=2;function Px(){return new Rx(wx)}function Nx(i){return i.map(e=>new $n({id:e.id,chapter:0,name:e.name,description:e.description,objectives:e.objectives,requires:[]}))}function kx(){const i=Nx(Od);return new yv([...Cx,...i])}function Ux(i,e){const t=e.getTotalArmor();return Ix(i,t)}function Bx(i){const e=i.get("main_hand");return e&&e.weapon?e.weapon.damage:Lx}const Fx={[v.WORKBENCH]:lr.WORKBENCH,[v.FORGE]:lr.FORGE,[v.CAMPFIRE]:lr.CAMPFIRE,[v.KITCHEN]:lr.KITCHEN,[v.LOOM]:lr.LOOM,[v.RUNE_TABLE]:lr.RUNE_TABLE};function zx(i,e){const t=Math.floor(e.x),n=Math.floor(e.y),r=Math.floor(e.z),s=3;for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++)for(let c=-s;c<=s;c++){const d=i.getBlock(t+o,n+a,r+c),h=Fx[d];if(h)return h}return null}function Hx(i,e){return e?i.aggroRange*.5:i.aggroRange}const Gx={[gn.STONE]:new Cs({type:gn.STONE,damage:5,range:12,effect:null}),[gn.OIL_FLASK]:new Cs({type:gn.OIL_FLASK,damage:15,range:10,effect:"fire"}),[gn.SMOKE_BOMB]:new Cs({type:gn.SMOKE_BOMB,damage:0,range:8,effect:"smoke"}),[gn.BAIT]:new Cs({type:gn.BAIT,damage:0,range:10,effect:"lure"})},Vx=[gn.STONE,gn.OIL_FLASK,gn.SMOKE_BOMB,gn.BAIT];function Wx(i,e,t,n){let r=null;for(const o of Vx)if(i.count(o)>0){r=o;break}if(!r)return!1;i.remove(r,1);const s=Gx[r];return Ox(s,e,t,n)}function Xx(i,e,t,n,r){const s=r?r.type:null,o=ig(i,e,t,n,s);return o?r?(r.use(),{mined:!0,broken:r.isBroken(),drops:o.drops}):{mined:!0,broken:!1,drops:o.drops}:{mined:!1,broken:!1,drops:[]}}function qx(i){return i?`${i.type} ${i.durability}/${i.maxDurability}`:""}const gt=v.OAK_PLANKS,_n=v.PLANKS,lt=v.COBBLESTONE,Qe=v.STONE_BRICK,Qt=v.MARBLE,dr=v.BIRCH_WOOD,ui=v.SLATE,Is=v.THATCH,za=v.IRON_BLOCK,Li=v.STONE,zo=v.LEAVES,Ha=[{name:"Bag End",region:"shire",x:-15,z:-24,hobbitHole:!0,hobbitHoleVariant:"bagend",floorBlock:lt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"wood",count:10},{type:"torch",count:5},{type:"raw_berries",count:3}]},{name:"Ranger Hal's Lodge",region:"shire",x:12,z:18,wallBlock:gt,roofBlock:_n,floorBlock:lt,radius:4,height:4,bed:!0,chest:!0,npcId:"ranger_hal",chestItems:[{type:"leather",count:2},{type:"iron_ore",count:2}]},{name:"Hamfast's Farmhouse",region:"shire",x:-63,z:30,wallBlock:gt,roofBlock:Is,floorBlock:lt,radius:4,height:3,bed:!0,chest:!0,npcId:"shire_farmer",chestItems:[{type:"fiber",count:5},{type:"wood",count:3}]},{name:"Rosie's Shop",region:"shire",x:42,z:-21,wallBlock:gt,roofBlock:_n,floorBlock:lt,radius:4,height:4,bed:!0,chest:!0,npcId:"shire_merchant",chestItems:[{type:"stone",count:5},{type:"leather",count:3},{type:"torch",count:3}]},{name:"Green Dragon Inn",region:"shire",x:75,z:45,wallBlock:gt,roofBlock:_n,floorBlock:lt,radius:5,height:5,bed:!0,chest:!0,chestItems:[{type:"cooked_meat",count:3},{type:"torch",count:4}]},{name:"Hobbit Hole – Cottons",region:"shire",x:-90,z:-45,hobbitHole:!0,hobbitHoleVariant:"base",floorBlock:lt,radius:3,height:3,bed:!0,chest:!1},{name:"Hobbit Hole – Bracegirdle",region:"shire",x:-30,z:75,hobbitHole:!0,hobbitHoleVariant:"cozy",floorBlock:lt,radius:3,height:3,bed:!0,chest:!1},{name:"Hobbit Hole – Proudfoot",region:"shire",x:105,z:-45,hobbitHole:!0,hobbitHoleVariant:"base",floorBlock:lt,radius:3,height:3,bed:!0,chest:!1},{name:"The Prancing Pony",region:"bree",x:237,z:60,wallBlock:lt,roofBlock:_n,floorBlock:Qe,radius:6,height:5,bed:!0,chest:!0,npcId:"old_tom",chestItems:[{type:"iron_ore",count:2},{type:"wood",count:5},{type:"cooked_meat",count:2}]},{name:"Bree Blacksmith",region:"bree",x:198,z:30,wallBlock:lt,roofBlock:ui,floorBlock:Qe,radius:4,height:4,bed:!0,chest:!0,npcId:"bree_blacksmith",chestItems:[{type:"iron_ore",count:4},{type:"stone",count:5}]},{name:"Bree House – South",region:"bree",x:270,z:36,wallBlock:lt,roofBlock:_n,floorBlock:lt,radius:3,height:3,bed:!0,chest:!1},{name:"Bree House – North",region:"bree",x:216,z:102,wallBlock:lt,roofBlock:_n,floorBlock:lt,radius:3,height:3,bed:!0,chest:!1},{name:"Bree Gatehouse",region:"bree",x:195,z:60,wallBlock:Qe,roofBlock:ui,floorBlock:Qe,radius:3,height:5,bed:!1,chest:!1},{name:"Bree Storehouse",region:"bree",x:276,z:78,wallBlock:lt,roofBlock:_n,floorBlock:lt,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"wood",count:10},{type:"stone",count:8},{type:"fiber",count:6}]},{name:"Ranger Outpost",region:"trollshaws",x:390,z:105,wallBlock:lt,roofBlock:_n,floorBlock:lt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:5},{type:"bandage",count:2}]},{name:"Hermit Cabin",region:"trollshaws",x:450,z:135,wallBlock:gt,roofBlock:Is,floorBlock:lt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:6},{type:"raw_berries",count:4}]},{name:"House of Elrond",region:"rivendell",x:582,z:99,wallBlock:Qt,roofBlock:dr,floorBlock:Qt,radius:6,height:5,bed:!0,chest:!0,npcId:"elara_lorekeeper",chestItems:[{type:"lore_fragment",count:2},{type:"relic_shard",count:1}]},{name:"Celebrin's Healing Hall",region:"rivendell",x:624,z:54,wallBlock:Qt,roofBlock:dr,floorBlock:Qt,radius:4,height:4,bed:!0,chest:!0,npcId:"rivendell_healer",chestItems:[{type:"fiber",count:4},{type:"raw_berries",count:5},{type:"bandage",count:3}]},{name:"Rivendell Library",region:"rivendell",x:630,z:114,wallBlock:Qt,roofBlock:dr,floorBlock:Qe,radius:5,height:5,bed:!1,chest:!0,chestItems:[{type:"lore_fragment",count:3}]},{name:"Rivendell Guest House",region:"rivendell",x:570,z:66,wallBlock:Qt,roofBlock:dr,floorBlock:Qt,radius:3,height:4,bed:!0,chest:!1},{name:"Rivendell Watchtower",region:"rivendell",x:660,z:90,wallBlock:Qt,roofBlock:Qe,floorBlock:Qt,radius:3,height:6,bed:!1,chest:!1},{name:"Thorin's Forge",region:"misty_mountains",x:807,z:159,wallBlock:Qe,roofBlock:ui,floorBlock:Qe,radius:5,height:4,bed:!0,chest:!0,npcId:"thorin_smith",chestItems:[{type:"iron_ore",count:5},{type:"copper_ore",count:3}]},{name:"Dwalin's Trading Post",region:"misty_mountains",x:762,z:129,wallBlock:Qe,roofBlock:ui,floorBlock:Qe,radius:4,height:4,bed:!0,chest:!0,npcId:"mountain_trader",chestItems:[{type:"stone",count:8},{type:"wood",count:6}]},{name:"Mountain Shelter",region:"misty_mountains",x:840,z:180,wallBlock:Li,roofBlock:ui,floorBlock:Qe,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:8},{type:"bandage",count:2}]},{name:"Dwarven Mining Camp",region:"misty_mountains",x:774,z:195,wallBlock:Qe,roofBlock:ui,floorBlock:lt,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:3},{type:"coal",count:5},{type:"stone",count:10}]},{name:"Beorn's Hall",region:"anduin_vale",x:1002,z:189,wallBlock:gt,roofBlock:Is,floorBlock:lt,radius:6,height:5,bed:!0,chest:!0,npcId:"beorn_jr",chestItems:[{type:"raw_meat",count:5},{type:"leather",count:3}]},{name:"Vale Farmstead",region:"anduin_vale",x:1050,z:165,wallBlock:gt,roofBlock:Is,floorBlock:lt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:8},{type:"raw_berries",count:4}]},{name:"Carrock Watchtower",region:"anduin_vale",x:1035,z:216,wallBlock:Qe,roofBlock:ui,floorBlock:Qe,radius:3,height:6,bed:!1,chest:!1},{name:"Elvenking Gate Post",region:"mirkwood",x:1167,z:114,wallBlock:dr,roofBlock:zo,floorBlock:lt,radius:5,height:5,bed:!0,chest:!0,npcId:"galawen_warden",chestItems:[{type:"fiber",count:8},{type:"relic_shard",count:1},{type:"rope",count:2}]},{name:"Mirkwood Ranger Camp",region:"mirkwood",x:1215,z:144,wallBlock:dr,roofBlock:zo,floorBlock:lt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:6},{type:"bandage",count:3}]},{name:"Forest Watch Platform",region:"mirkwood",x:1245,z:96,wallBlock:gt,roofBlock:zo,floorBlock:gt,radius:3,height:6,bed:!1,chest:!1},{name:"Dark Outpost",region:"dol_guldur",x:1254,z:255,wallBlock:v.DARK_STONE,roofBlock:v.OBSIDIAN,floorBlock:v.CORRUPTED_STONE,radius:4,height:4,bed:!1,chest:!0,chestItems:[{type:"dark_stone",count:5},{type:"relic_shard",count:2}]},{name:"Lake-town Hall",region:"long_lake",x:1395,z:84,wallBlock:gt,roofBlock:_n,floorBlock:lt,radius:5,height:4,bed:!0,chest:!0,chestItems:[{type:"wood",count:10},{type:"iron_ore",count:3}]},{name:"Fisherman's Hut",region:"long_lake",x:1434,z:66,wallBlock:gt,roofBlock:_n,floorBlock:gt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:4},{type:"raw_meat",count:3}]},{name:"Dock Warehouse",region:"long_lake",x:1434,z:114,wallBlock:gt,roofBlock:_n,floorBlock:lt,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"rope",count:3},{type:"wood",count:8},{type:"iron_ore",count:2}]},{name:"Front Gate Guardhouse",region:"erebor",x:1542,z:54,wallBlock:Qe,roofBlock:za,floorBlock:Qe,radius:4,height:5,bed:!0,chest:!0,chestItems:[{type:"iron_ore",count:5},{type:"torch",count:6}]},{name:"Miriel's Observatory",region:"erebor",x:1482,z:78,wallBlock:Qe,roofBlock:ui,floorBlock:Qt,radius:5,height:5,bed:!0,chest:!0,npcId:"sage_miriel",chestItems:[{type:"relic_shard",count:3},{type:"lore_fragment",count:2}]},{name:"Dale Marketplace",region:"erebor",x:1575,z:84,wallBlock:Qe,roofBlock:_n,floorBlock:Qe,radius:5,height:4,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:4},{type:"leather",count:3},{type:"stone",count:6}]},{name:"Erebor Great Forge",region:"erebor",x:1590,z:42,wallBlock:Qe,roofBlock:za,floorBlock:Qe,radius:5,height:5,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:8},{type:"copper_ore",count:5},{type:"coal",count:10}]}],Kx=[{type:"line",x1:-105,z1:-60,x2:-105,z2:90,block:gt,dy:1,name:"Shire west fence"},{type:"line",x1:-105,z1:-60,x2:120,z2:-60,block:gt,dy:1,name:"Shire south fence"},{type:"line",x1:120,z1:-60,x2:120,z2:90,block:gt,dy:1,name:"Shire east fence"},{type:"line",x1:-105,z1:90,x2:120,z2:90,block:gt,dy:1,name:"Shire north fence"},{type:"line",x1:-90,z1:0,x2:120,z2:0,block:lt,dy:0,surface:!0,name:"Shire main road"},{type:"line",x1:0,z1:-54,x2:0,z2:84,block:lt,dy:0,surface:!0,name:"Shire cross road"},{type:"well",x:15,z:0,name:"Shire well"},{type:"line",x1:180,z1:24,x2:180,z2:105,block:Qe,dy:1,name:"Bree west wall"},{type:"line",x1:180,z1:24,x2:180,z2:105,block:Qe,dy:2,name:"Bree west wall top"},{type:"line",x1:285,z1:24,x2:285,z2:105,block:Qe,dy:1,name:"Bree east wall"},{type:"line",x1:285,z1:24,x2:285,z2:105,block:Qe,dy:2,name:"Bree east wall top"},{type:"line",x1:180,z1:60,x2:285,z2:60,block:lt,dy:0,surface:!0,name:"Bree main street"},{type:"well",x:240,z:60,name:"Bree well"},{type:"blocks",x:435,z:126,name:"Stone Trolls",blocks:[{dx:0,dz:0,dy:1,block:Li},{dx:0,dz:0,dy:2,block:Li},{dx:0,dz:0,dy:3,block:v.MOSSY_STONE},{dx:3,dz:1,dy:1,block:Li},{dx:3,dz:1,dy:2,block:Li},{dx:3,dz:1,dy:3,block:v.MOSSY_STONE},{dx:1,dz:3,dy:1,block:Li},{dx:1,dz:3,dy:2,block:Li},{dx:1,dz:3,dy:3,block:v.MOSSY_STONE}]},{type:"line",x1:555,z1:84,x2:585,z2:84,block:Qt,dy:1,name:"Rivendell bridge"},{type:"line",x1:555,z1:84,x2:585,z2:84,block:Qt,dy:0,surface:!0,name:"Rivendell bridge deck"},{type:"line",x1:570,z1:75,x2:645,z2:75,block:Qt,dy:0,surface:!0,name:"Rivendell garden path"},{type:"line",x1:600,z1:60,x2:600,z2:120,block:Qt,dy:0,surface:!0,name:"Rivendell main path"},{type:"blocks",x:795,z:144,name:"Mountain trail markers",blocks:[{dx:0,dz:0,dy:1,block:Qe},{dx:0,dz:0,dy:2,block:v.TORCH},{dx:15,dz:5,dy:1,block:Qe},{dx:15,dz:5,dy:2,block:v.TORCH},{dx:30,dz:10,dy:1,block:Qe},{dx:30,dz:10,dy:2,block:v.TORCH}]},{type:"line",x1:1035,z1:150,x2:1080,z2:150,block:gt,dy:1,name:"Vale south fence"},{type:"line",x1:1035,z1:150,x2:1035,z2:180,block:gt,dy:1,name:"Vale west fence"},{type:"line",x1:1080,z1:150,x2:1080,z2:180,block:gt,dy:1,name:"Vale east fence"},{type:"line",x1:1035,z1:180,x2:1080,z2:180,block:gt,dy:1,name:"Vale north fence"},{type:"blocks",x:1155,z:120,name:"Mirkwood path torches",blocks:[{dx:0,dz:0,dy:1,block:gt},{dx:0,dz:0,dy:2,block:v.TORCH},{dx:8,dz:2,dy:1,block:gt},{dx:8,dz:2,dy:2,block:v.TORCH},{dx:16,dz:4,dy:1,block:gt},{dx:16,dz:4,dy:2,block:v.TORCH},{dx:24,dz:0,dy:1,block:gt},{dx:24,dz:0,dy:2,block:v.TORCH},{dx:32,dz:-2,dy:1,block:gt},{dx:32,dz:-2,dy:2,block:v.TORCH}]},{type:"blocks",x:1260,z:270,name:"Dol Guldur corrupted stones",blocks:[{dx:-5,dz:0,dy:1,block:v.CORRUPTED_STONE},{dx:5,dz:0,dy:1,block:v.CORRUPTED_STONE},{dx:0,dz:-5,dy:1,block:v.CORRUPTED_STONE},{dx:0,dz:5,dy:1,block:v.CORRUPTED_STONE},{dx:-4,dz:-3,dy:1,block:v.DARK_STONE},{dx:4,dz:-3,dy:1,block:v.DARK_STONE},{dx:-4,dz:3,dy:1,block:v.DARK_STONE},{dx:4,dz:3,dy:1,block:v.DARK_STONE}]},{type:"blocks",x:1416,z:60,name:"Lake-town dock",blocks:(()=>{const i=[];for(let e=0;e<8;e++)for(let t=0;t<3;t++)i.push({dx:e,dz:t,dy:0,block:gt,surface:!0});return i.push({dx:0,dz:1,dy:-1,block:gt}),i.push({dx:7,dz:1,dy:-1,block:gt}),i})()},{type:"blocks",x:1554,z:45,name:"Erebor front gate",blocks:[{dx:0,dz:0,dy:1,block:Qe},{dx:0,dz:0,dy:2,block:Qe},{dx:0,dz:0,dy:3,block:Qe},{dx:0,dz:0,dy:4,block:Qe},{dx:0,dz:4,dy:1,block:Qe},{dx:0,dz:4,dy:2,block:Qe},{dx:0,dz:4,dy:3,block:Qe},{dx:0,dz:4,dy:4,block:Qe},{dx:0,dz:1,dy:4,block:Qe},{dx:0,dz:2,dy:4,block:za},{dx:0,dz:3,dy:4,block:Qe},{dx:1,dz:0,dy:3,block:v.TORCH},{dx:1,dz:4,dy:3,block:v.TORCH}]},{type:"line",x1:120,z1:0,x2:180,z2:24,block:lt,dy:0,surface:!0,name:"East Road – Shire to Bree"},{type:"line",x1:285,z1:60,x2:390,z2:105,block:lt,dy:0,surface:!0,name:"East Road – Bree to Trollshaws"},{type:"line",x1:465,z1:126,x2:555,z2:96,block:lt,dy:0,surface:!0,name:"East Road – Trollshaws to Rivendell"}],Yx=[{name:"Party Tree",x:0,z:36,type:"large"},{name:"Old Willow",x:-120,z:15,type:"large"},{name:"Rivendell Cedar",x:624,z:105,type:"large"},{name:"Beorn Oak",x:1014,z:210,type:"large"},{name:"Mirkwood Ancient",x:1185,z:105,type:"large"}],Ga=[{x:0,z:-9,block:v.WORKBENCH,dy:1,name:"Shire workbench"},{x:6,z:-9,block:v.CAMPFIRE,dy:1,name:"Shire campfire"},{x:225,z:54,block:v.FORGE,dy:1,name:"Bree forge"},{x:249,z:54,block:v.KITCHEN,dy:1,name:"Bree kitchen"},{x:615,z:90,block:v.LOOM,dy:1,name:"Rivendell loom"},{x:594,z:90,block:v.RUNE_TABLE,dy:1,name:"Rivendell rune table"},{x:825,z:165,block:v.FORGE,dy:1,name:"Mountain forge"},{x:804,z:174,block:v.WORKBENCH,dy:1,name:"Mountain workbench"},{x:1020,z:174,block:v.KITCHEN,dy:1,name:"Vale kitchen"},{x:1026,z:174,block:v.CAMPFIRE,dy:1,name:"Vale campfire"},{x:1176,z:126,block:v.WORKBENCH,dy:1,name:"Mirkwood workbench"},{x:1182,z:126,block:v.LOOM,dy:1,name:"Mirkwood loom"},{x:1584,z:48,block:v.FORGE,dy:1,name:"Erebor forge"},{x:1578,z:48,block:v.WORKBENCH,dy:1,name:"Erebor workbench"}];class $x{constructor(){this._chests=new Map}_key(e,t,n){return`${e},${t},${n}`}_getOrCreate(e,t,n){const r=this._key(e,t,n);return this._chests.has(r)||this._chests.set(r,[]),this._chests.get(r)}addItem(e,t,n,r,s){const o=this._getOrCreate(e,t,n),a=o.find(c=>c.type===r);a?a.count+=s:o.push({type:r,count:s})}getItems(e,t,n){const r=this._key(e,t,n);return this._chests.get(r)||[]}takeItem(e,t,n,r){const s=this._key(e,t,n),o=this._chests.get(s);if(!o)return null;const a=o.findIndex(d=>d.type===r);return a===-1?null:o.splice(a,1)[0]}}function jx(i,e={}){const t=Fi,n=`${i.raceId}_${i.classId}`,r=new Rd,s=new rx(r,{loadDistance:t.CHUNKS.LOAD_DISTANCE,maxChunksPerFrame:t.CHUNKS.MAX_PER_FRAME,useWorker:e.useWorker??!1,onProgress:e.onProgress});s.generateInitialChunks(0,0);const o={starter_watchpost:"small",roadside_hall:"medium",mountain_workshop:"medium",forest_beacon:"small",ward_bastion:"large"};for(const B of Vr){const ne=Dt(B.position.x,B.position.z);Mv(r,{x:B.position.x,y:ne+1,z:B.position.z},o[B.id]||"small")}const{player:a,inventory:c,survivalStats:d,race:h,cls:u}=zg(i),p=Dt(0,0);a.position.y=p+2;const l=_x(i.difficulty),_=new ug,g=new Gg,m=new Kg,f=new Yg({width:t.FOG.WIDTH,height:t.FOG.HEIGHT,cellSize:t.FOG.CELL_SIZE}),T=new Zg,M=new ev,E=new vv(wd),O=yx(i.raceId,i.classId);for(const B of O)E.grantStartingUnlock(B);const R=new xv(E),w=new tv(8),P=new rv,b=new cv,y=new ux;y.tutorialEnabled=i.tutorial!==!1;const I=new fx,X=new px(Nd),F=new mx,j=new uv(pv),te=new fv(j),Z=new _v,ce=kx();ce.activate("ch1_embers");const q=t.QUESTS.AUTO_ACTIVATE_SIDE_COUNT;let he=0;for(const B of Od){if(he>=q)break;ce.activate(B.id)&&he++}const Te=Px(),De=vx(i.raceId);Te.applyRaceModifiers(i.raceId,De);const We=new gv,ct=new Sv,Q=new Ev(f,Gr),me=new Wv(h.statModifiers.perception||50),we=Og(i.raceId);we>0&&me.addModifier("race_stealth",we);const ge=new Ov;(n==="man_scholar"||n==="elf_warden")&&ge.equipRelic(new Dv({id:"ward_light",name:"Ward Light Stone",ability:Hs.WARD_LIGHT,focusCost:10}));const Ge=new Nv,tt=new kv,Fe=new Uv,yt=new Bv(Fv),ot=new Hv,ze=new qv,D=new $v,Bt=new jv,je=new Zv,Ye=new Qv,Ae={x:0,y:p+2,z:0},ft=Ex(n),Oe={man:"man",elf:"elf",dwarf:"dwarf",hobbit:"hobbit"}[i.raceId]||"man",A=new $x,x=new Map(Ua.map(B=>[B.id,B]));for(const B of Ha){const ne=Dt(B.x,B.z);if(B.hobbitHole&&B.hobbitHoleVariant){const Pe={base:wl,bagend:wv,cozy:Cv}[B.hobbitHoleVariant]||wl;Av(r,{x:B.x,y:ne+1,z:B.z},Pe)}else B.hobbitHole?bv(r,{x:B.x,y:ne+1,z:B.z},{floorBlock:B.floorBlock,radius:B.radius,bed:B.bed,chest:B.chest}):Cd(r,{x:B.x,y:ne+1,z:B.z},{wallBlock:B.wallBlock,roofBlock:B.roofBlock,floorBlock:B.floorBlock,radius:B.radius,height:B.height,bed:B.bed,chest:B.chest});if(B.chest&&B.chestItems){const de=B.x-B.radius+1,Pe=ne+1,ae=B.z+B.radius-1;for(const _e of B.chestItems)A.addItem(de,Pe,ae,_e.type,_e.count)}if(B.npcId){const de=x.get(B.npcId);de&&(de.position.x=B.x+B.radius+1,de.position.y=ne+2,de.position.z=B.z,de.spawnPosition={...de.position},ct.addNPC(de),x.delete(B.npcId))}}for(const[,B]of x){const ne=Dt(Math.floor(B.position.x),Math.floor(B.position.z));B.position.y=ne+2,B.spawnPosition={...B.position},ct.addNPC(B)}for(const B of Kx)if(B.type==="line"){const ne=B.x2-B.x1,de=B.z2-B.z1,Pe=Math.max(Math.abs(ne),Math.abs(de));for(let ae=0;ae<=Pe;ae++){const _e=Pe===0?0:ae/Pe,Le=Math.round(B.x1+ne*_e),Ne=Math.round(B.z1+de*_e),Me=Dt(Le,Ne);B.surface?r.setBlock(Le,Me,Ne,B.block):r.setBlock(Le,Me+B.dy,Ne,B.block)}}else if(B.type==="well"){const ne=Dt(B.x,B.z);for(let de=-1;de<=1;de++)for(let Pe=-1;Pe<=1;Pe++)de===0&&Pe===0?r.setBlock(B.x,ne+1,B.z,v.WATER):r.setBlock(B.x+de,ne+1,B.z+Pe,v.COBBLESTONE)}else if(B.type==="blocks"){const ne=Dt(B.x,B.z);for(const de of B.blocks){const Pe=B.x+de.dx,ae=B.z+de.dz,_e=de.surface?Dt(Pe,ae):ne;r.setBlock(Pe,_e+de.dy,ae,de.block)}}for(const B of Yx){const ne=Dt(B.x,B.z),de=B.type==="large"?6:4,Pe=B.type==="large"?3:2;for(let _e=1;_e<=de;_e++)r.setBlock(B.x,ne+_e,B.z,v.WOOD);const ae=ne+de;for(let _e=-Pe;_e<=Pe;_e++)for(let Le=-Pe;Le<=Pe;Le++)for(let Ne=0;Ne<=2;Ne++){if(_e===0&&Le===0&&Ne===0)continue;Math.sqrt(_e*_e+Le*Le)+Ne*.7<=Pe+.6&&r.setBlock(B.x+_e,ae+Ne,B.z+Le,v.LEAVES)}}for(const B of Ga){const ne=Dt(B.x,B.z);r.setBlock(B.x,ne+B.dy,B.z,B.block)}const N=dv(n);for(const B of N)c.add(B.type,B.count);c.add("map_fragment",1);const Y=new Wg(Pa(42)),ie=new ax,ee=new sx;return{config:i,fullClassId:n,world:r,chunkMgr:s,player:a,inventory:c,survivalStats:d,race:h,cls:u,difficultyMods:l,gameClock:_,combatSystem:g,weatherSystem:m,fogOfWar:f,experienceSystem:T,equipment:M,skillTreeSystem:E,skillTreeUI:R,hotbar:w,fearSystem:P,nightDanger:b,settings:y,gamePause:I,unifiedMenu:X,minimapState:F,craftingSystem:j,craftingUI:te,statusEffects:Z,questSystem:ce,compass:We,factionSystem:Te,npcSystem:ct,mapScreen:Q,stealthSystem:me,relicSystem:ge,shelterSystem:Ge,loreJournal:tt,fastTravel:Fe,discoverySystem:yt,restSystem:ot,freshnessTracker:ze,blockBreaker:D,deathSystem:Bt,creativeMode:je,dialogueManager:Ye,spawnPos:Ae,classPassive:ft,racialStyle:Oe,spawner:Y,enemies:[],spawnTimer:0,questTriggers:ie,progress:ee,chestStorage:A,droppedItems:[],dialogueMessage:"",dialogueTimer:0,invSelectedSlot:-1,survivedFirstNight:!1,isDead:!1}}const Zx={[fe.WOLF]:6974058,[fe.GOBLIN]:4880954,[fe.SPIDER]:2759178,[fe.TROLL]:8022618,[fe.WIGHT]:6702250,[fe.GUARDIAN]:12290116,[fe.CONSTRUCT]:5592490,[fe.ORC]:5925434,[fe.GIANT_SPIDER]:1706496,[fe.SHADOW]:657946,[fe.BARROW_WIGHT]:5583786,[fe.GOBLIN_ARCHER]:3824170,[fe.CORRUPTED_BEAR]:9065762,[fe.DARK_CONSTRUCT]:2763349,[fe.WRAITH]:1704004};fe.WOLF+"",fe.GOBLIN+"",fe.SPIDER+"",fe.TROLL+"",fe.WIGHT+"",fe.GUARDIAN+"",fe.CONSTRUCT+"",fe.ORC+"",fe.GIANT_SPIDER+"",fe.SHADOW+"",fe.BARROW_WIGHT+"",fe.GOBLIN_ARCHER+"",fe.CORRUPTED_BEAR+"",fe.DARK_CONSTRUCT+"",fe.WRAITH+"";fe.WOLF,fe.SPIDER,fe.GIANT_SPIDER,fe.CORRUPTED_BEAR;function se(i,e){const t=Math.min(255,(i>>16&255)*e)|0,n=Math.min(255,(i>>8&255)*e)|0,r=Math.min(255,(i&255)*e)|0;return t<<16|n<<8|r}function H(i,e,t,n,r,s,o,a){const c={name:i,w:e,h:t,d:n,offsetY:r,color:s};return o&&(c.offsetX=o),a&&(c.offsetZ=a),c}function Qx(i){return[H("body",.4,.32,.7,.48,i),H("chest",.44,.28,.2,.5,se(i,1.05),0,-.22),H("head",.3,.26,.28,.58,se(i,1.08),0,-.48),H("snout",.16,.12,.2,.5,se(i,.88),0,-.68),H("nose",.06,.06,.04,.52,1052174,0,-.78),H("ear",.07,.14,.06,.74,se(i,.8),-.1,-.42),H("ear",.07,.14,.06,.74,se(i,.8),.1,-.42),H("tail",.08,.1,.3,.6,se(i,.9),0,.48),H("tail_tip",.06,.08,.14,.68,se(i,.85),0,.62),H("leg",.09,.32,.09,.16,se(i,.82),-.14,-.22),H("leg",.09,.32,.09,.16,se(i,.82),.14,-.22),H("leg",.1,.32,.1,.16,se(i,.82),-.14,.22),H("leg",.1,.32,.1,.16,se(i,.82),.14,.22),H("paw",.11,.06,.12,.03,se(i,.7),-.14,-.22),H("paw",.11,.06,.12,.03,se(i,.7),.14,-.22),H("paw",.11,.06,.12,.03,se(i,.7),-.14,.22),H("paw",.11,.06,.12,.03,se(i,.7),.14,.22)]}function Nl(i,e){const t=[H("cephalothorax",.4*e,.22*e,.32*e,.3*e,se(i,1.1),0,-.12*e),H("abdomen",.5*e,.3*e,.48*e,.35*e,i,0,.28*e),H("stripe",.12*e,.12*e,.4*e,.42*e,se(i,.6),0,.28*e),H("eye",.05*e,.04*e,.04*e,.38*e,10029064,-.06*e,-.28*e),H("eye",.05*e,.04*e,.04*e,.38*e,10029064,.06*e,-.28*e),H("fang",.05*e,.1*e,.12*e,.22*e,se(i,.7),-.08*e,-.32*e),H("fang",.05*e,.1*e,.12*e,.22*e,se(i,.7),.08*e,-.32*e)],n=[-.2,-.06,.08,.22],r=[.32,.38,.38,.32],s=[.28,.3,.3,.26];for(let o=0;o<4;o++)for(const a of[-1,1])t.push(H("leg",.04*e,s[o]*e,.04*e,s[o]*.5*e,se(i,.75),a*r[o]*e,n[o]*e)),t.push(H("foot",.06*e,.04*e,.06*e,.02*e,se(i,.6),a*(r[o]+.02)*e,n[o]*e));return t}function Jx(i){return[H("body",.9,.58,1.2,.72,i),H("hump",.65,.2,.45,1.08,se(i,1.06),0,-.15),H("head",.45,.38,.42,.92,se(i,1.08),0,-.7),H("snout",.22,.16,.22,.82,se(i,.9),0,-.98),H("nose",.08,.06,.04,.85,919560,0,-1.08),H("ear",.1,.1,.08,1.14,se(i,.85),-.16,-.64),H("ear",.1,.1,.08,1.14,se(i,.85),.16,-.64),H("leg",.18,.44,.18,.22,se(i,.82),-.28,-.35),H("leg",.18,.44,.18,.22,se(i,.82),.28,-.35),H("leg",.2,.44,.2,.22,se(i,.82),-.3,.35),H("leg",.2,.44,.2,.22,se(i,.82),.3,.35),H("claw",.2,.06,.1,.03,se(i,.6),-.28,-.48),H("claw",.2,.06,.1,.03,se(i,.6),.28,-.48),H("tail",.1,.1,.12,.88,se(i,.9),0,.62)]}function Ho(i,e){const t=[H("leg",.14,.28,.14,.14,se(i,.75),-.1),H("leg",.14,.28,.14,.14,se(i,.75),.1),H("foot",.18,.06,.2,.03,se(i,.6),-.1,-.04),H("foot",.18,.06,.2,.03,se(i,.6),.1,-.04),H("body",.42,.42,.3,.48,i,0,.02),H("loincloth",.3,.08,.2,.3,5916720,0,-.02),H("head",.32,.28,.28,.82,se(i,1.1),0,-.02),H("ear",.14,.08,.06,.86,se(i,.85),-.22),H("ear",.14,.08,.06,.86,se(i,.85),.22),H("eye",.05,.04,.04,.86,10062874,-.08,-.14),H("eye",.05,.04,.04,.86,10062874,.08,-.14),H("nose",.06,.08,.08,.78,se(i,.9),0,-.16),H("arm",.1,.42,.1,.48,se(i,.88),-.28),H("arm",.1,.42,.1,.48,se(i,.88),.28)];return e?(t.push(H("bow",.04,.45,.04,.5,6702880,-.35)),t.push(H("quiver",.1,.3,.06,.65,5848862,.08,.16))):t.push(H("sword",.04,.35,.04,.48,6709328,.32)),t}function ey(i){return[H("boot",.24,.12,.3,.06,3354142,-.14,.02),H("boot",.24,.12,.3,.06,3354142,.14,.02),H("leg",.2,.38,.2,.3,se(i,.75),-.14),H("leg",.2,.38,.2,.3,se(i,.75),.14),H("body",.55,.58,.38,.72,i),H("armor",.4,.3,.06,.78,4998712,0,-.16),H("pauldron",.18,.14,.22,1.02,4998712,-.34),H("pauldron",.18,.14,.22,1.02,4998712,.34),H("spike",.06,.1,.06,1.14,5919296,-.34),H("spike",.06,.1,.06,1.14,5919296,.34),H("head",.35,.3,.32,1.18,se(i,1.05)),H("jaw",.28,.1,.12,1,se(i,.9),0,-.14),H("tusk",.04,.08,.04,1.02,14340786,-.1,-.18),H("tusk",.04,.08,.04,1.02,14340786,.1,-.18),H("arm",.16,.52,.16,.7,se(i,.88),-.38),H("arm",.16,.52,.16,.7,se(i,.88),.38),H("axe_handle",.04,.65,.04,.65,5917748,.5),H("axe_head",.18,.14,.04,1.02,7368812,.5,-.06)]}function ty(i){return[H("foot",.36,.14,.42,.07,se(i,.7),-.22,.04),H("foot",.36,.14,.42,.07,se(i,.7),.22,.04),H("leg",.28,.58,.32,.42,se(i,.82),-.22),H("leg",.28,.58,.32,.42,se(i,.82),.22),H("body",.9,1.05,.72,1.2,i),H("belly",.7,.5,.2,1,se(i,1.05),0,-.2),H("shoulders",1.1,.22,.78,1.82,se(i,.92),0,.04),H("head",.42,.32,.38,2.08,se(i,1.1),0,-.04),H("brow",.38,.06,.08,2.18,se(i,.85),0,-.18),H("jaw",.34,.1,.14,1.88,se(i,.9),0,-.14),H("arm",.22,1.1,.22,1.1,se(i,.88),-.62),H("arm",.22,1.1,.22,1.1,se(i,.88),.62),H("fist",.28,.24,.22,.42,se(i,.78),-.62),H("fist",.28,.24,.22,.42,se(i,.78),.62),H("club",.12,.85,.12,.8,5916720,.72),H("club_head",.2,.25,.2,1.3,4996648,.72)]}function Va(i,e){return[H("skirt",.5*e,.56*e,.4*e,.28*e,se(i,.75)),H("hem",.56*e,.1*e,.44*e,.05*e,se(i,.65)),H("body",.42*e,.65*e,.32*e,.75*e,se(i,.85)),H("cloak",.48*e,.9*e,.06*e,.6*e,se(i,.7),0,.08*e),H("hood",.38*e,.32*e,.34*e,1.25*e,se(i,.72),0,.02*e),H("face",.2*e,.15*e,.06*e,1.2*e,se(i,.3),0,-.12*e),H("eye",.04*e,.03*e,.03*e,1.22*e,8427980,-.05*e,-.16*e),H("eye",.04*e,.03*e,.03*e,1.22*e,8427980,.05*e,-.16*e),H("arm",.1*e,.55*e,.1*e,.7*e,se(i,.9),-.3*e),H("arm",.1*e,.55*e,.1*e,.7*e,se(i,.9),.3*e),H("hand",.08*e,.1*e,.04*e,.35*e,10918284,-.3*e),H("hand",.08*e,.1*e,.04*e,.35*e,10918284,.3*e)]}function ny(i){const e=Va(i,1.15);return e.push(H("crown",.36,.06,.36,1.62,4208688)),e.push(H("crown_spike",.04,.1,.04,1.7,4208688,-.12)),e.push(H("crown_spike",.04,.1,.04,1.7,4208688,.12)),e.push(H("crown_spike",.04,.1,.04,1.7,4208688,0,-.12)),e.push(H("blade",.04,.6,.04,.5,5921388,.38)),e.push(H("guard",.1,.04,.04,.82,5000280,.38)),e}function iy(i){return[H("foot",.4,.16,.46,.08,se(i,.7),-.25,.02),H("foot",.4,.16,.46,.08,se(i,.7),.25,.02),H("leg",.32,.7,.32,.5,se(i,.82),-.25),H("leg",.32,.7,.32,.5,se(i,.82),.25),H("body",1,1.3,.8,1.35,i),H("emblem",.3,.3,.06,1.5,se(i,1.2),0,-.38),H("shoulders",1.25,.22,.9,2.1,se(i,.88)),H("head",.48,.42,.44,2.48,se(i,1.1)),H("visor",.4,.12,.08,2.42,se(i,.6),0,-.22),H("crest",.06,.16,.3,2.78,se(i,1.15)),H("arm",.26,1.1,.26,1.35,se(i,.88),-.68),H("arm",.26,1.1,.26,1.35,se(i,.88),.68),H("fist",.3,.26,.24,.68,se(i,.75),-.68),H("fist",.3,.26,.24,.68,se(i,.75),.68),H("shield",.06,.7,.5,1.4,se(i,.8),-.88),H("boss",.06,.15,.15,1.4,se(i,1.3),-.92)]}function kl(i,e){return[H("foot",.28*e,.12*e,.32*e,.06*e,se(i,.7),-.18*e,.02),H("foot",.28*e,.12*e,.32*e,.06*e,se(i,.7),.18*e,.02),H("leg",.22*e,.52*e,.24*e,.38*e,se(i,.82),-.18*e),H("leg",.22*e,.52*e,.24*e,.38*e,se(i,.82),.18*e),H("body",.7*e,.8*e,.6*e,.95*e,i),H("plate",.5*e,.4*e,.06*e,1.05*e,se(i,1.15),0,-.28*e),H("core",.12*e,.12*e,.04*e,1*e,8427993,0,-.32*e),H("head",.36*e,.3*e,.32*e,1.52*e,se(i,1.05)),H("visor",.3*e,.08*e,.06*e,1.48*e,5003392,0,-.15*e),H("arm",.18*e,.7*e,.18*e,.9*e,se(i,.88),-.44*e),H("arm",.18*e,.7*e,.18*e,.9*e,se(i,.88),.44*e),H("gauntlet",.22*e,.2*e,.2*e,.45*e,se(i,.75),-.44*e),H("gauntlet",.22*e,.2*e,.2*e,.45*e,se(i,.75),.44*e)]}function ry(i){return[H("base",.4,.4,.35,.2,i),H("mid",.35,.35,.3,.5,se(i,1.1)),H("upper",.28,.28,.25,.75,se(i,1.2)),H("head",.22,.2,.22,.98,se(i,1.3)),H("eye",.04,.03,.03,1,3352652,-.05,-.1),H("eye",.04,.03,.03,1,3352652,.05,-.1),H("wisp",.06,.3,.04,.6,se(i,.8),-.25),H("wisp",.06,.3,.04,.6,se(i,.8),.25),H("wisp",.04,.25,.06,.5,se(i,.8),0,-.2),H("wisp",.04,.2,.06,.5,se(i,.8),0,.2)]}function sy(i){const e=Zx[i]||16711680;switch(i){case fe.WOLF:return{parts:Qx(e)};case fe.SPIDER:return{parts:Nl(e,1)};case fe.GIANT_SPIDER:return{parts:Nl(e,1.4)};case fe.CORRUPTED_BEAR:return{parts:Jx(e)};case fe.GOBLIN:return{parts:Ho(e,!1)};case fe.GOBLIN_ARCHER:return{parts:Ho(e,!0)};case fe.ORC:return{parts:ey(e)};case fe.TROLL:return{parts:ty(e)};case fe.WIGHT:return{parts:Va(e,1)};case fe.BARROW_WIGHT:return{parts:Va(e,1.15)};case fe.WRAITH:return{parts:ny(e)};case fe.GUARDIAN:return{parts:iy(e)};case fe.CONSTRUCT:return{parts:kl(e,1)};case fe.DARK_CONSTRUCT:return{parts:kl(e,1.2)};case fe.SHADOW:return{parts:ry(e)};default:return{parts:Ho(e,!1)}}}function oy(i){const e=sy(i),t=new ur;for(const n of e.parts){const r=new yi(n.w,n.h,n.d),s=new js({color:n.color}),o=new un(r,s);o.position.y=n.offsetY,n.offsetX&&(o.position.x=n.offsetX),n.offsetZ&&(o.position.z=n.offsetZ),o.userData.partName=n.name,t.add(o)}return t}class ay{constructor(e){this.scene=e,this.meshMap=new Map}sync(e,t){const n=new Set;for(const r of e){if(n.add(r),r.isDead()){this.meshMap.has(r)&&(this.scene.remove(this.meshMap.get(r)),this.meshMap.delete(r));continue}let s=this.meshMap.get(r);if(s||(s=oy(r.type),this.scene.add(s),this.meshMap.set(r,s)),s.position.set(r.position.x,r.position.y,r.position.z),t){const o=t.position.x-r.position.x,a=t.position.z-r.position.z;s.rotation.y=Math.atan2(o,a)}}for(const[r,s]of this.meshMap)n.has(r)||(this.scene.remove(s),this.meshMap.delete(r))}}const cy={road_wardens:{body:9136404,hat:2775594,skin:13213818},rivendell_keepers:{body:13944224,hat:4482747,skin:15259840},dwarven_crafters:{body:8017203,hat:10044450,skin:13213818},woodland_guardians:{body:3828282,hat:2771498,skin:12628112},beorning_wardens:{body:9071162,hat:5917226,skin:13213818}};function Tn(i,e){const t=Math.min(255,(i>>16&255)*e)|0,n=Math.min(255,(i>>8&255)*e)|0,r=Math.min(255,(i&255)*e)|0;return t<<16|n<<8|r}function ly(i={}){const e=i.bodyColor||13215820,t=i.hatColor||3368618,n=i.skinColor||13213818,r=i.factionId||"",s=3813408,o=2234384,c=[{name:"boot",w:.24,h:.14,d:.3,offsetY:.07,offsetX:-.13,offsetZ:.02,color:o},{name:"boot",w:.24,h:.14,d:.3,offsetY:.07,offsetX:.13,offsetZ:.02,color:o},{name:"leg",w:.2,h:.48,d:.2,offsetY:.38,offsetX:-.13,color:s},{name:"leg",w:.2,h:.48,d:.2,offsetY:.38,offsetX:.13,color:s},{name:"belt",w:.54,h:.08,d:.35,offsetY:.59,color:4864544},{name:"body",w:.5,h:.62,d:.32,offsetY:.93,color:e},{name:"shoulders",w:.62,h:.1,d:.36,offsetY:1.28,color:Tn(e,.82)},{name:"arm",w:.16,h:.58,d:.16,offsetY:.92,offsetX:-.36,color:Tn(e,.93)},{name:"arm",w:.16,h:.58,d:.16,offsetY:.92,offsetX:.36,color:Tn(e,.93)},{name:"hand",w:.12,h:.12,d:.12,offsetY:.53,offsetX:-.36,color:Tn(n,.92)},{name:"hand",w:.12,h:.12,d:.12,offsetY:.53,offsetX:.36,color:Tn(n,.92)},{name:"neck",w:.16,h:.08,d:.16,offsetY:1.37,color:Tn(n,.9)},{name:"head",w:.4,h:.4,d:.4,offsetY:1.61,color:n},{name:"nose",w:.08,h:.08,d:.1,offsetY:1.56,offsetZ:-.22,color:Tn(n,1.05)}];return r!=="rivendell_keepers"&&(c.push({name:"hat_brim",w:.52,h:.04,d:.52,offsetY:1.83,color:t}),c.push({name:"hat_top",w:.42,h:.16,d:.42,offsetY:1.95,color:t})),r==="road_wardens"?(c.push({name:"cloak",w:.46,h:.85,d:.06,offsetY:.85,offsetZ:.2,color:Tn(e,.6)}),c.push({name:"sword",w:.04,h:.52,d:.04,offsetY:.38,offsetX:-.4,color:8947864}),c.push({name:"guard",w:.12,h:.04,d:.04,offsetY:.67,offsetX:-.4,color:6708800}),c.push({name:"pommel",w:.06,h:.06,d:.06,offsetY:.14,offsetX:-.4,color:6708800})):r==="rivendell_keepers"?(c.push({name:"circlet",w:.44,h:.04,d:.44,offsetY:1.83,color:12625484}),c.push({name:"gem",w:.06,h:.06,d:.06,offsetY:1.86,offsetZ:-.2,color:4217024}),c.push({name:"robe",w:.48,h:.32,d:.3,offsetY:.32,color:e}),c.push({name:"hem",w:.5,h:.04,d:.32,offsetY:.13,color:Tn(e,.85)}),c.push({name:"sash",w:.04,h:.4,d:.04,offsetY:.7,offsetX:.08,offsetZ:-.14,color:10059840})):r==="dwarven_crafters"?(c.push({name:"beard",w:.24,h:.3,d:.18,offsetY:1.25,offsetZ:-.12,color:7030819}),c.push({name:"noseguard",w:.06,h:.14,d:.06,offsetY:1.86,offsetZ:-.2,color:Tn(t,.75)}),c.push({name:"pick_handle",w:.04,h:.6,d:.04,offsetY:1.15,offsetX:.1,offsetZ:.22,color:7564128}),c.push({name:"pick_head",w:.22,h:.08,d:.06,offsetY:1.5,offsetX:.1,offsetZ:.22,color:8421516}),c.push({name:"stocky",w:.54,h:.55,d:.36,offsetY:.93,color:Tn(e,.95)})):r==="woodland_guardians"?(c.push({name:"cloak",w:.44,h:.8,d:.06,offsetY:.9,offsetZ:.18,color:3365160}),c.push({name:"hood",w:.44,h:.26,d:.3,offsetY:1.72,offsetZ:.06,color:3365160}),c.push({name:"quiver",w:.12,h:.42,d:.08,offsetY:1.12,offsetX:.14,offsetZ:.2,color:5848862}),c.push({name:"arrow",w:.02,h:.16,d:.02,offsetY:1.4,offsetX:.14,offsetZ:.2,color:9207884}),c.push({name:"bow",w:.04,h:.6,d:.04,offsetY:.95,offsetX:-.48,color:6702878})):r==="beorning_wardens"&&(c.push({name:"mantle",w:.64,h:.16,d:.42,offsetY:1.22,color:8742456}),c.push({name:"fur_stripe",w:.5,h:.08,d:.08,offsetY:1.22,offsetZ:-.14,color:10125388}),c.push({name:"axe_handle",w:.04,h:.58,d:.04,offsetY:.68,offsetX:.44,color:6311480}),c.push({name:"axe_head",w:.18,h:.14,d:.04,offsetY:1.02,offsetX:.44,offsetZ:-.07,color:8421510}),c.push({name:"axe_head2",w:.18,h:.14,d:.04,offsetY:1.02,offsetX:.44,offsetZ:.07,color:8421510}),c.push({name:"fur_boot",w:.26,h:.06,d:.28,offsetY:.16,offsetX:-.13,color:8742456}),c.push({name:"fur_boot",w:.26,h:.06,d:.28,offsetY:.16,offsetX:.13,color:8742456})),{parts:c}}function dy(i){const e=cy[i.factionId]||{},t=ly({bodyColor:e.body,hatColor:e.hat,skinColor:e.skin,factionId:i.factionId}),n=new ur;for(const r of t.parts){const s=new yi(r.w,r.h,r.d),o=new js({color:r.color}),a=new un(s,o);a.position.y=r.offsetY,r.offsetX&&(a.position.x=r.offsetX),r.offsetZ&&(a.position.z=r.offsetZ),a.userData.partName=r.name,n.add(a)}return n}class hy{constructor(e){this.scene=e,this.meshMap=new Map}sync(e,t){const n=new Set;for(const r of e){n.add(r.id);let s=this.meshMap.get(r.id);if(s||(s=dy(r),this.scene.add(s),this.meshMap.set(r.id,s)),s.position.set(r.position.x,r.position.y,r.position.z),t){const o=t.position.x-r.position.x,a=t.position.z-r.position.z;s.rotation.y=Math.atan2(o,a)}}for(const[r,s]of this.meshMap)n.has(r)||(this.scene.remove(s),this.meshMap.delete(r))}}function Ul(i){const e=Fi.FOG.BASE_FAR*i;return{near:Math.max(Fi.FOG.MIN_NEAR,e*Fi.FOG.BASE_NEAR_RATIO),far:e}}function uy(i={}){const{survivalStats:e,questSystem:t,compass:n,playerYaw:r=0,playerPos:s,fearSystem:o,experienceSystem:a,statusEffects:c}=i,d={};if(e&&(d.health=Math.ceil(e.health),d.maxHealth=e.maxHealth,d.stamina=Math.ceil(e.stamina),d.hunger=Math.ceil(e.hunger),d.focus=Math.ceil(e.focus),d.tempLabel=e.temperature<-.5?"Cold":e.temperature>.5?"Hot":"Mild"),t){const h=t.getActiveQuests();d.activeQuestName=h.length>0?h[0].name:null}else d.activeQuestName=null;return n&&(d.compassCardinal=n.getCardinal(r)),o?d.fearLevel=Math.round(o.level):d.fearLevel=0,s&&(d.playerX=Math.round(s.x),d.playerZ=Math.round(s.z)),a?d.level=a.level:d.level=1,c?d.statusEffects=c.getActive().map(h=>({type:h.type,remaining:h.remaining,strength:h.strength})):d.statusEffects=[],d}const fy=Object.values(Ed).sort((i,e)=>e.hungerRestore-i.hungerRestore).map(i=>i.id);function py(i,e,t){for(const n of fy)if(i.count(n)>0){const r=ng(n);if(e.eat(r.hungerRestore),i.remove(n,1),t&&r.effects)for(const s of r.effects)t.apply(s);return!0}return!1}function Go(i,e,t){const n=i.findNearby(e,t);if(n.length===0)return null;let r=null,s=1/0;for(const o of n){const a=Jt(e,o.position);a<s&&(r=o,s=a)}return r}function Ds(i,e,t){return Jt(i,e)<=t}function my(i,e,t,n={}){const r={};for(const[c,d]of i.chunks){let h=!1;for(let u=0;u<d.blocks.length;u++)if(d.blocks[u]!==0){h=!0;break}h&&(r[c]=Array.from(d.blocks))}const s=[],o=t.size||36;for(let c=0;c<o;c++)s.push(t.getSlot?t.getSlot(c):null);const a={version:2,player:{position:{...e.position},velocity:{...e.velocity},yaw:e.yaw,pitch:e.pitch,onGround:e.onGround},inventory:s,inventorySize:o,chunks:r};if(n.survivalStats){const c=n.survivalStats;a.survivalStats={health:c.health,maxHealth:c.maxHealth,stamina:c.stamina,hunger:c.hunger,focus:c.focus,corruption:c.corruption,temperature:c.temperature}}return n.quests&&(a.quests=n.quests.serialize()),n.factions&&(a.factions=n.factions.serialize()),n.fastTravel&&(a.fastTravel=n.fastTravel.serialize()),n.fogOfWar&&(a.fogOfWar=n.fogOfWar.serialize()),n.loreJournal&&(a.loreJournal=n.loreJournal.serialize()),n.skillTree&&(a.skillTree=n.skillTree.serialize()),JSON.stringify(a)}function _y(i){const e=JSON.parse(i),t=new Rd;for(const[a,c]of Object.entries(e.chunks))t._getOrCreateChunk(...a.split(",").map(Number)).blocks.set(c);const n=new Ad(e.player.position);n.velocity=e.player.velocity,n.yaw=e.player.yaw,n.pitch=e.player.pitch,n.onGround=e.player.onGround;const r=e.inventorySize||36,s=new bd(r);if(Array.isArray(e.inventory))for(const a of e.inventory)a&&a.type&&a.count>0&&s.addItem(a.type,a.count);const o={world:t,player:n,inventory:s};if(e.survivalStats){const a=new Td;Object.assign(a,e.survivalStats),o.survivalStats=a}return e.quests&&(o.questData=e.quests),e.factions&&(o.factionData=e.factions),e.fastTravel&&(o.fastTravelData=e.fastTravel),e.fogOfWar&&(o.fogOfWarData=e.fogOfWar),e.loreJournal&&(o.loreJournalData=e.loreJournal),e.skillTree&&(o.skillTreeData=e.skillTree),o}async function gy(i){const t=new Blob([i]).stream().pipeThrough(new CompressionStream("gzip"));return new Response(t).blob()}async function vy(i){const e=i.stream().pipeThrough(new DecompressionStream("gzip"));return new Response(e).text()}async function xy(i,e="ruinwake-save.json.gz"){const t=await gy(i),n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=e,r.click(),URL.revokeObjectURL(n)}function yy(){return new Promise((i,e)=>{const t=document.createElement("input");t.type="file",t.accept=".json.gz,.gz",t.onchange=async()=>{if(!t.files||t.files.length===0){e(new Error("No file selected"));return}const n=t.files[0],r=await vy(n);i(r)},t.click()})}const Sy={wood:"🪵",stone:"🪨",fiber:"🌱",stick:"📏",clay:"🧱",iron_ore:"⛏",copper_ore:"⛏",coal:"⚫",leather:"🧴",rope:"🨢",relic_shard:"✨",lore_fragment:"📜",sand:"🏖",flint:"💎",pickaxe:"⛏",axe:"🪓",hammer:"🔨",iron_pickaxe:"⛏",copper_pickaxe:"⛏",stone_pickaxe:"⛏",stone_axe:"🪓",iron_axe:"🪓",lantern:"🏮",torch:"🔥",dagger:"🗡",iron_sword:"⚔",iron_hammer:"🔨",spear:"🔱",short_bow:"🏹",refined_bow:"🏹",sling:"💫",arrow:"➡",leather_armor:"🛡",iron_helm:"🪖",iron_chest:"🛡",shield:"🛡",cloak:"🧥",bread:"🍞",raw_meat:"🍖",cooked_meat:"🍗",berries:"🫐",mushroom:"🍄",lembas:"🍞",stew:"🍲",trail_rations:"🥪",fish:"🐟",apple:"🍎",honey:"🍯",ward_light_stone:"🌟",healing_crystal:"💎",ward_token:"🌟",bandage:"🩹",bedroll:"🛏",herb_pouch:"🌿",firestarter:"🔥",lore_scroll:"📜",map_fragment:"🗺",song_fragment:"🎶",dirt:"🟫",cobblestone:"⬜",planks:"🟨",oak_planks:"🟧",glass:"🔵",dark_stone:"⬛",marble:"⚪",thatch:"🟡",stone_brick:"🔲",chest:"🗄",workbench:"🛠",campfire:"🔥",forge:"⚒",kitchen:"🍳",loom:"🧵",gravel:"▫",raw_berries:"🫐",raw_mushroom:"🍄",herb_salad:"🥗",iron_ingot:"💠",copper_ingot:"🟠",raw_fish:"🐟",cooked_fish:"🐟",slate:"◽",birch_wood:"🪵"},Ey="📦";function Vo(i){return Sy[i]||Ey}function kd(i,e){return i.dialogueId?e.getStatus(i.dialogueId)===qt.AVAILABLE:!1}function My(i,e){return kd(i,e)?e.activate(i.dialogueId):!1}function by(){return[{title:"Movement",items:[{key:"WASD",desc:"Move"},{key:"Mouse",desc:"Look"},{key:"Space",desc:"Jump"},{key:"Shift",desc:"Sprint"},{key:"C",desc:"Crouch"}]},{title:"Actions",items:[{key:"LClick",desc:"Mine / Attack"},{key:"RClick",desc:"Place block"},{key:"F",desc:"Eat food"},{key:"R",desc:"Restore site"},{key:"T",desc:"Talk to NPC"},{key:"G",desc:"Guard (hold)"}]},{title:"Menus",items:[{key:"ESC",desc:"Menu (pauses game)"},{key:"Tab",desc:"Switch menu tab"},{key:"M",desc:"Toggle minimap"},{key:"V",desc:"Camera toggle"},{key:"1-8 / Scroll",desc:"Hotbar slot"},{key:"F5 / F9",desc:"Save / Load"},{key:"F4",desc:"Creative mode"}]}]}function Ty(){const i=by();let e='<table style="text-align:left;font-size:13px;line-height:1.6;width:100%;border-collapse:collapse">';for(const t of i){e+=`<tr><td colspan="2" style="color:#c9a84c;padding:8px 0 2px;font-weight:bold">${t.title}</td></tr>`;for(const n of t.items)e+=`<tr><td style="color:#aed581;width:100px;padding:2px 8px">${n.key}</td><td>${n.desc}</td></tr>`}return e+="</table>",e}function Ay(i,e){return i*(e.hungerDrainMultiplier??1)}function Ry(i,e){return i*(e.enemyDamageMultiplier??1)}function Bl(i,e){if(!e||e.length===0)return[];const t=new Set(e),n=i.getTriggers(),r=[];for(const s of n)t.has(s.questId)&&r.push({questId:s.questId,objectiveId:s.objectiveId,x:s.position.x,z:s.position.z,label:s.objectiveId.replace(/_/g," ")});return r}const Wo={zone:{r:.35,g:.55,b:.17}};function wy(i){const e=Math.min(1,i);return{r:.53*(1-e)+Wo.zone.r*e,g:.81*(1-e)+Wo.zone.g*e,b:.92*(1-e)+Wo.zone.b*e}}function Cy(i){return i===v.DOOR||i===v.DOOR_OPEN}function Fl(i,e,t,n){const r=i.getBlock(e,t,n);return r===v.DOOR?(i.setBlock(e,t,n,v.DOOR_OPEN),i.getBlock(e,t+1,n)===v.DOOR&&i.setBlock(e,t+1,n,v.DOOR_OPEN),i.getBlock(e,t-1,n)===v.DOOR&&i.setBlock(e,t-1,n,v.DOOR_OPEN),!0):r===v.DOOR_OPEN?(i.setBlock(e,t,n,v.DOOR),i.getBlock(e,t+1,n)===v.DOOR_OPEN&&i.setBlock(e,t+1,n,v.DOOR),i.getBlock(e,t-1,n)===v.DOOR_OPEN&&i.setBlock(e,t-1,n,v.DOOR),!0):!1}function Iy(i){return i<=26?[40,80,160]:i<=32?[80,150,60]:i<=40?[130,170,70]:i<=55?[160,150,120]:[220,220,230]}class Dy{constructor(e,t){this._getHeight=e,this._getBiome=t}worldToGrid(e,t,n){return{col:Math.floor((e-Fs)/n),row:Math.floor((t-zs)/n)}}gridToWorld(e,t,n){return{x:Fs+e*n+n/2,z:zs+t*n+n/2}}_gridDimensions(e){const t=Math.ceil((C0-Fs)/e),n=Math.ceil((I0-zs)/e);return{width:t,height:n}}getTerrainHeightGrid(e){const{width:t,height:n}=this._gridDimensions(e),r=new Int32Array(t*n);for(let s=0;s<n;s++)for(let o=0;o<t;o++){const{x:a,z:c}=this.gridToWorld(o,s,e);r[s*t+o]=this._getHeight(a,c)}return{width:t,height:n,data:r}}getBiomeGrid(e){const{width:t,height:n}=this._gridDimensions(e),r=new Array(t*n);for(let s=0;s<n;s++)for(let o=0;o<t;o++){const{x:a,z:c}=this.gridToWorld(o,s,e);r[s*t+o]=this._getBiome(a,c).type}return{width:t,height:n,data:r}}getPopulationGrid(e,t,n){const{width:r,height:s}=this._gridDimensions(n),o=new Int32Array(r*s);for(const a of e){const{col:c,row:d}=this.worldToGrid(a.x,a.z,n);c>=0&&c<r&&d>=0&&d<s&&(o[d*r+c]+=1)}for(const a of t){const{col:c,row:d}=this.worldToGrid(a.position.x,a.position.z,n);c>=0&&c<r&&d>=0&&d<s&&(o[d*r+c]+=1)}return{width:r,height:s,data:o}}getSlopeGrid(e){const t=this.getTerrainHeightGrid(e),{width:n,height:r,data:s}=t,o=new Float32Array(n*r);for(let a=0;a<r;a++)for(let c=0;c<n;c++){const d=a*n+c,h=s[d];let u=0;for(const[p,l]of[[-1,0],[1,0],[0,-1],[0,1]]){const _=a+p,g=c+l;_>=0&&_<r&&g>=0&&g<n&&(u=Math.max(u,Math.abs(s[_*n+g]-h)))}o[d]=u/e}return{width:n,height:r,data:o}}getTerrainColorMap(e){const t=this.getTerrainHeightGrid(e),{width:n,height:r,data:s}=t,o=new Uint8Array(n*r*3);for(let a=0;a<s.length;a++){const[c,d,h]=Iy(s[a]);o[a*3]=c,o[a*3+1]=d,o[a*3+2]=h}return{width:n,height:r,data:o}}getBuildingFootprints(e,t){return e.map(n=>{const{col:r,row:s}=this.worldToGrid(n.x,n.z,t);return{col:r,row:s,radius:Math.ceil(n.radius/t),name:n.name,region:n.region,hasNPC:!!n.npcId}})}getStationMarkers(e,t){return e.map(n=>{const{col:r,row:s}=this.worldToGrid(n.x,n.z,t);return{col:r,row:s,name:n.name,block:n.block}})}}const Oy=2,Ly={shire:[100,200,70,40],plains:[180,200,80,30],forest:[30,130,40,40],mirkwood:[20,60,20,50],mountain:[160,160,170,30]},hr=Object.freeze({OVERVIEW:"overview",DETAIL:"detail"});class zl{constructor(e,t){this._layers=e,this._canvas=t,this._ctx=t.getContext("2d"),this._zoom=hr.OVERVIEW,this._visitedMarkers=[],this._overviewImage=null,this._overviewBiome=null}get zoom(){return this._zoom}toggleZoom(){this._zoom=this._zoom===hr.OVERVIEW?hr.DETAIL:hr.OVERVIEW}setZoom(e){this._zoom=e}addVisitedMarker(e,t,n){this._visitedMarkers.some(s=>Math.abs(s.x-e)<10&&Math.abs(s.z-t)<10)||this._visitedMarkers.push({x:e,z:t,label:n})}draw(e){const{playerPos:t,fogOfWar:n,buildings:r,npcs:s,stations:o,landmarks:a,questMarkers:c}=e,d=this._ctx,h=this._canvas.width,u=this._canvas.height;d.clearRect(0,0,h,u),this._zoom===hr.OVERVIEW?this._drawOverview(d,h,u,e):this._drawDetail(d,h,u,e)}_drawOverview(e,t,n,r){const s=Oy,{playerPos:o,fogOfWar:a,buildings:c,landmarks:d,questMarkers:h,mini:u}=r;this._overviewImage||(this._overviewImage=this._layers.getTerrainColorMap(s),this._overviewBiome=this._layers.getBiomeGrid(s));const p=this._overviewImage,l=this._overviewBiome,_=e.createImageData(p.width,p.height);for(let R=0;R<p.width*p.height;R++){let w=p.data[R*3],P=p.data[R*3+1],b=p.data[R*3+2];const y=l.data[R],I=Ly[y];if(I){const X=I[3]/100;w=Math.round(w*(1-X)+I[0]*X),P=Math.round(P*(1-X)+I[1]*X),b=Math.round(b*(1-X)+I[2]*X)}if(a){const{x:X,z:F}=this._layers.gridToWorld(R%p.width,Math.floor(R/p.width),s);a.isRevealed(X,F)||(w=Math.round(w*.2),P=Math.round(P*.2),b=Math.round(b*.2))}_.data[R*4]=w,_.data[R*4+1]=P,_.data[R*4+2]=b,_.data[R*4+3]=255}const g=document.createElement("canvas");g.width=p.width,g.height=p.height,g.getContext("2d").putImageData(_,0,0),e.imageSmoothingEnabled=!1,e.drawImage(g,0,0,t,n);const m=t/p.width,f=n/p.height,T=R=>(R-Fs)/s*m,M=R=>(R-zs)/s*f;if(c){e.fillStyle="rgba(139, 90, 43, 0.6)";for(const R of c){const w=T(R.x),P=M(R.z),b=R.radius/s*m;e.fillRect(w-b,P-b,b*2,b*2)}}if(d)for(const R of d){const w=T(R.position.x),P=M(R.position.z);e.fillStyle="#c9a84c",e.beginPath(),e.moveTo(w,P-5),e.lineTo(w+4,P),e.lineTo(w,P+5),e.lineTo(w-4,P),e.closePath(),e.fill(),u||(e.font="10px monospace",e.textAlign="center",e.fillStyle="#c9a84c",e.fillText(R.name,w,P-8))}if(h){e.fillStyle="#e53935";for(const R of h){const w=T(R.x),P=M(R.z);e.beginPath(),e.arc(w,P,4,0,Math.PI*2),e.fill()}}e.fillStyle="rgba(100, 200, 255, 0.7)";for(const R of this._visitedMarkers){const w=T(R.x),P=M(R.z);e.beginPath(),e.arc(w,P,3,0,Math.PI*2),e.fill()}const E=T(o.x),O=M(o.z);e.fillStyle="#4caf50",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.arc(E,O,5,0,Math.PI*2),e.fill(),e.stroke(),u||(this._drawLegend(e,t,n),e.fillStyle="#888",e.font="11px monospace",e.textAlign="right",e.fillText("Z: Toggle zoom | M: Close",t-8,n-6))}_drawDetail(e,t,n,r){const{playerPos:s,fogOfWar:o,buildings:a,npcs:c,stations:d,questMarkers:h}=r,u=Math.floor(t/2),p=Math.floor(n/2),l=Math.floor(s.x)-u,_=Math.floor(s.z)-p,g=e.createImageData(t,n);for(let E=0;E<n;E++)for(let O=0;O<t;O++){const R=l+O,w=_+E,P=this._layers._getHeight(R,w);let[b,y,I]=Py(P);o&&!o.isRevealed(R,w)&&(b=Math.round(b*.15),y=Math.round(y*.15),I=Math.round(I*.15));const X=(E*t+O)*4;g.data[X]=b,g.data[X+1]=y,g.data[X+2]=I,g.data[X+3]=255}e.putImageData(g,0,0);const m=E=>E-l,f=E=>E-_;if(a){e.strokeStyle="rgba(139, 90, 43, 0.8)",e.lineWidth=1;for(const E of a){const O=m(E.x),R=f(E.z);O+E.radius<0||O-E.radius>t||R+E.radius<0||R-E.radius>n||e.strokeRect(O-E.radius,R-E.radius,E.radius*2,E.radius*2)}}if(c){e.fillStyle="#ffeb3b";for(const E of c){const O=m(E.position.x),R=f(E.position.z);O<0||O>t||R<0||R>n||(e.beginPath(),e.arc(O,R,3,0,Math.PI*2),e.fill())}}if(d){e.fillStyle="#ff9800";for(const E of d){const O=m(E.x),R=f(E.z);O<0||O>t||R<0||R>n||e.fillRect(O-2,R-2,4,4)}}if(h){e.fillStyle="#e53935";for(const E of h){const O=m(E.x),R=f(E.z);O<0||O>t||R<0||R>n||(e.beginPath(),e.arc(O,R,4,0,Math.PI*2),e.fill())}}e.fillStyle="rgba(100, 200, 255, 0.7)";for(const E of this._visitedMarkers){const O=m(E.x),R=f(E.z);O<0||O>t||R<0||R>n||(e.beginPath(),e.arc(O,R,3,0,Math.PI*2),e.fill())}e.strokeStyle="#4caf50",e.lineWidth=2;const T=u,M=p;e.beginPath(),e.arc(T,M,5,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(T-8,M),e.lineTo(T+8,M),e.moveTo(T,M-8),e.lineTo(T,M+8),e.stroke(),e.fillStyle="#aaa",e.font="11px monospace",e.textAlign="left",e.fillText(`x:${Math.floor(s.x)} z:${Math.floor(s.z)} y:${Math.floor(s.y)}`,8,n-6),e.textAlign="right",e.fillText("Z: Toggle zoom | M: Close",t-8,n-6)}_drawLegend(e,t,n){const r=[["Water",[40,80,160]],["Lowland",[80,150,60]],["Highland",[160,150,120]],["Snow",[220,220,230]]],s=8;let o=n-56;e.font="9px monospace",e.textAlign="left";for(const[a,[c,d,h]]of r)e.fillStyle=`rgb(${c},${d},${h})`,e.fillRect(s,o,10,10),e.fillStyle="#aaa",e.fillText(a,s+14,o+9),o+=12}}function Py(i){return i<=26?[40,80,160]:i<=32?[80,150,60]:i<=40?[130,170,70]:i<=55?[160,150,120]:[220,220,230]}function Ny(i,e){const t=Math.floor(e.x),n=Math.floor(e.y),r=Math.floor(e.z);return i.getBlock(t,n,r)===v.WATER}function ky(i){return i?Fi.SURVIVAL.WATER_SLOWDOWN:1}const Hl=4;function Uy(i){return i<=0?1:i>=Hl?0:Math.max(0,1-i/Hl)}const By={ranger_hal:{about:"I patrol the borders of the Shire. Wolves have been bolder lately, and I've seen strange lights in the old ruins to the east. Something is stirring.",need:"There's a ruined watch-post at the edge of the wilds. If someone could restore it, we'd have a proper outpost again. You'd need wood and stone.",extra:{text:"Any survival tips?",response:"Build a shelter before nightfall — four walls and a roof. Punch grass for fiber, break dirt for materials. Stay close to camp at night."}},old_tom:{about:"Bree used to be a bustling crossroads. Now half the buildings stand empty. The East Road has fallen into disrepair and fewer travelers come each season.",need:"The old ranger hall just east of here needs restoring. It would bring trade back to this area. You'll need wood, stone, and some iron ore.",extra:{text:"What happened here?",response:"Ancient things are waking up. The wards that kept the dark things at bay — they're failing one by one. That's why the road wardens need help."}},elara_lorekeeper:{about:"Rivendell endures, though diminished. I study the old records — maps of a ward network that once protected these lands. The Elven-craft that built them is nearly forgotten.",need:"I need someone to search the archives here for records of the ward network. The knowledge is scattered, but vital if we're to understand what's awakening.",extra:{text:"Tell me about the relics",response:"The relics are fragments of ancient technology — Elven, Dwarven, Numenorean. They can heal, ward, reveal. But near corruption, they become unstable. Use them wisely."}},thorin_smith:{about:"This was a great dwarven workshop once. The forge has gone cold, the bellows rotted. But the stone is strong and the veins of ore still run deep in these mountains.",need:"Help me rebuild this workshop. I need stone, iron ore, and copper ore. With a working forge, I can craft the tools we need to push into the deeper delves.",extra:{text:"What lurks in the mountains?",response:"Goblins mostly, and worse things deeper down. There's a corrupted guardian blocking the lower passages. It was once a protector, now twisted by dark power."}},galawen_warden:{about:"Mirkwood grows darker. The ancient beacon that held corruption at bay has gone out. Without it, the spiders multiply and the forest sickens.",need:"The forest beacon must be restored. I need someone brave enough to gather wood, fiber, and relic shards to reignite it. The spiders guard the approach.",extra:{text:"Is the corruption spreading?",response:"Yes. From the south — from Dol Guldur. An old evil stirs there. The beacon, once lit, will slow its advance through the forest."}},beorn_jr:{about:"I am Grimbeorn, son of Beorn. I guard the passage between the mountains and the forest. The wild creatures grow restless — something dark disturbs them.",need:"I ask nothing for myself. But the land needs wardens. If you can clear the threats that trouble the vale, the Beornings will remember it.",extra:{text:"What is the Anduin Vale like?",response:"Rich land, good water, tall grass. Bears, eagles, and honest folk. But the shadow from Mirkwood creeps closer each season. We hold the line as we can."}},sage_miriel:{about:"I have watched ages pass. What stirs now in Dol Guldur is not the old Dark Lord — but an echo, a shadow left in the machinery of the ancient ward network.",need:"The ward bastion is the key. Restore it, and the network can be turned against the shadow. But it requires great resources and courage to reach.",extra:{text:"Can the shadow be defeated?",response:"Not destroyed — contained. The ward network was built for this. Restore the bastions, stabilize the relics, and the shadow sleeps again. That is our best hope."}}};function Fy(i,e){const t=By[i];if(!t)return[{text:"Tell me about this place",response:`${e}: I don't have much to say, traveler. Safe journeys.`},{text:"Farewell",response:null}];const n=[];return n.push({text:"Tell me about this place",response:`${e}: ${t.about}`}),n.push({text:"What do you need?",response:`${e}: ${t.need}`}),t.extra&&n.push({text:t.extra.text,response:`${e}: ${t.extra.response}`}),n.push({text:"Farewell",response:null}),n}const oc=document.getElementById("race-select"),$r=document.getElementById("class-select"),zy=document.getElementById("race-info"),Hy=document.getElementById("class-info");function Ud(){const i=Md[oc.value];$r.innerHTML="";for(const t of i.classIds){const n=ic[t],r=document.createElement("option");r.value=t,r.textContent=n.name,$r.appendChild(r)}const e=i.statModifiers;zy.textContent=`HP:${e.health} STA:${e.stamina} FOC:${e.focus} COR:${e.corruptionResistance}`,Bd()}function Bd(){const i=ic[$r.value];i&&(Hy.textContent=`${i.passive} | ${i.activeAbility}`)}oc.addEventListener("change",Ud);$r.addEventListener("change",Bd);Ud();let Ks=null;document.getElementById("start-btn").addEventListener("click",()=>{const i=Fg({raceId:oc.value,classId:$r.value,difficulty:document.getElementById("difficulty-select").value,worldName:document.getElementById("world-name").value,characterName:document.getElementById("character-name").value,tutorial:document.getElementById("tutorial-check").checked});document.getElementById("new-game").style.display="none",Gy(i,Ks),Ks=null});document.getElementById("jump-btn").addEventListener("click",()=>{const i=document.getElementById("jump-menu");i.style.display=i.style.display==="none"?"block":"none";const e=document.getElementById("jump-list");e.innerHTML=ki.map(t=>`
    <div style="padding:5px 8px;margin:2px 0;border-radius:4px;cursor:pointer;font-size:12px;color:#aed581;border:1px solid #333;background:${Ks===t.id?"#3a5a2f":"transparent"}"
         data-jump="${t.id}">
      <b>${t.name}</b> (${t.percent}%)<br>
      <span style="color:#888">${t.description}</span>
    </div>
  `).join(""),e.querySelectorAll("[data-jump]").forEach(t=>{t.addEventListener("click",()=>{Ks=t.getAttribute("data-jump"),e.querySelectorAll("[data-jump]").forEach(n=>n.style.background="transparent"),t.style.background="#3a5a2f"})})});function Gy(i,e){const t=Fi,n=document.getElementById("loading-screen"),r=document.getElementById("loading-fill"),s=document.getElementById("loading-pct"),o=document.getElementById("loading-flavor"),a=["The old roads remember those who walked them...","Ancient ward-stones hum with forgotten power...","Mirkwood's shadows deepen with each passing age...","The Lonely Mountain watches over the eastern lands...","In the Shire, the hedgerows grow thick and green...","Rivendell endures, though diminished and quiet...","The Great River Anduin flows ever southward...","Old ruins hold secrets that time cannot erase..."];n.style.display="flex";const c=Pa(7);o.textContent=a[Math.floor(c()*a.length)];const h=jx(i,{useWorker:!0,onProgress:(oe,re)=>{const le=Math.round(oe/re*100);r.style.width=`${le}%`,s.textContent=`${le}% — ${oe}/${re} chunks`,oe%Math.max(1,Math.floor(re/4))===0&&(o.textContent=a[Math.floor(c()*a.length)])}}),{world:u,chunkMgr:p,player:l,inventory:_,survivalStats:g,race:m,cls:f,difficultyMods:T,gameClock:M,combatSystem:E,weatherSystem:O,fogOfWar:R,experienceSystem:w,equipment:P,skillTreeSystem:b,skillTreeUI:y,hotbar:I,fearSystem:X,settings:F,gamePause:j,unifiedMenu:te,minimapState:Z,craftingUI:ce,statusEffects:q,questSystem:he,compass:Te,factionSystem:De,npcSystem:We,mapScreen:ct,relicSystem:Q,shelterSystem:me,loreJournal:we,fastTravel:ge,discoverySystem:Ge,freshnessTracker:tt,blockBreaker:Fe,deathSystem:yt,creativeMode:ot,dialogueManager:ze,spawnPos:D,racialStyle:Bt,spawner:je,questTriggers:Ye,progress:Ae,chestStorage:ft,droppedItems:Oe}=h;let{enemies:A,spawnTimer:x,dialogueMessage:N,dialogueTimer:Y,invSelectedSlot:ie,survivedFirstNight:ee}=h;const B=!p.isLoading();let ne=null;const de=document.getElementById("chest-panel"),Pe=document.getElementById("chest-items");function ae(oe,re,le){ne={x:oe,y:re,z:le},Le()}function _e(){ne=null,de.style.display="none"}function Le(){if(!ne){de.style.display="none";return}de.style.display="block";const oe=ft.getItems(ne.x,ne.y,ne.z);if(oe.length===0){Pe.innerHTML='<div style="color:#888">Empty</div>';return}Pe.innerHTML=oe.map((re,le)=>`<div data-chest-idx="${le}" style="padding:4px 8px;cursor:pointer;border-radius:4px;color:#aed581;border:1px solid #333;margin:2px 0">${Vo(re.type)} ${re.type.replace(/_/g," ")} x${re.count}</div>`).join(""),Pe.onclick=re=>{const le=re.target.closest("[data-chest-idx]");if(!le||!ne)return;const Ie=parseInt(le.getAttribute("data-chest-idx")),He=ft.getItems(ne.x,ne.y,ne.z);if(Ie>=0&&Ie<He.length){const nt=ft.takeItem(ne.x,ne.y,ne.z,He[Ie].type);nt&&(_.add(nt.type,nt.count),N=`Took ${nt.count} ${nt.type.replace(/_/g," ")}`,Y=1.5,Le())}}}let Ne=[];const Me=2,et=120,qe=Pa(42);function mt(oe,re,le){Oe.push({position:{x:oe.x+(qe()-.5)*.5,y:oe.y+.5,z:oe.z+(qe()-.5)*.5},type:re,count:le,lifetime:et,bobPhase:qe()*Math.PI*2})}const L=new p0({antialias:!0});L.setSize(window.innerWidth,window.innerHeight),L.setClearColor(t.COLORS.SKY_DAY),document.body.appendChild(L.domElement);const pe=new Su,K=Ul(1);pe.fog=new ec(t.COLORS.SKY_DAY,K.near,K.far);const J=new xn(t.CAMERA.FOV,window.innerWidth/window.innerHeight,t.CAMERA.NEAR,t.CAMERA.FAR),Ee=new Cu(t.COLORS.AMBIENT_LIGHT,t.LIGHTING.AMBIENT.day);pe.add(Ee);const xe=new wu(t.COLORS.DIR_LIGHT,t.LIGHTING.DIRECTIONAL.day);xe.position.set(50,100,30),pe.add(xe);const Ue=new Q0(pe,u);B&&(Ue.update(0,0,t.CHUNKS.RENDER_DISTANCE),n.style.display="none");const St=new ay(pe),Nt=new hy(pe),ve=new tg(L.domElement),nn=document.getElementById("hud"),yn=document.getElementById("crosshair");yn.style.display="block",document.getElementById("health-bar-wrap").style.display="block",document.getElementById("hotbar-bar").style.display="flex";function Gi(oe){const re=Math.cos(oe.pitch);return{x:-Math.sin(-oe.yaw)*re,y:Math.sin(oe.pitch),z:-Math.cos(-oe.yaw)*re}}function Tr(oe){const re={[dt.DAWN]:t.COLORS.SKY_DAWN,[dt.DAY]:t.COLORS.SKY_DAY,[dt.DUSK]:t.COLORS.SKY_DUSK,[dt.NIGHT]:t.COLORS.SKY_NIGHT},le={[dt.DAWN]:.5,[dt.DAY]:.6,[dt.DUSK]:.35,[dt.NIGHT]:.1},Ie={[dt.DAWN]:.6,[dt.DAY]:.8,[dt.DUSK]:.4,[dt.NIGHT]:.05},He=re[oe]||t.COLORS.SKY_DAY;L.setClearColor(He),pe.fog.color.set(He),Ee.intensity=le[oe]||.6,xe.intensity=Ie[oe]||.8}const Sn=document.getElementById("unified-menu"),Vi=Sn.querySelectorAll(".menu-tab");function Si(){te.isOpen?(Sn.classList.add("open"),Vi.forEach(oe=>{oe.classList.toggle("active",oe.dataset.tab===te.activeTab)}),Nd.forEach(oe=>{const re=document.getElementById(`tab-content-${oe}`);re&&re.classList.toggle("active",oe===te.activeTab)})):Sn.classList.remove("open")}const Ar=document.getElementById("help-content");Ar&&(Ar.innerHTML=Ty()),Vi.forEach(oe=>{oe.addEventListener("click",()=>{te.switchTab(oe.dataset.tab),Si()})});let ii=!1;ve.onPointerUnlock=()=>{if(ii){ii=!1;return}te.isOpen||(te.open(),Si())};const Rr=document.getElementById("minimap-container"),Wi=document.getElementById("minimap-canvas"),ts=document.getElementById("map-canvas-2d"),ns=document.getElementById("map-explored"),is=new Dy((oe,re)=>Dt(oe,re),(oe,re)=>qs(oe,re)),wr=new zl(is,ts),rs=new zl(is,Wi);rs.setZoom(hr.OVERVIEW);function Qs(oe){const re=he.getActiveQuests().map(Ie=>Ie.id),le=Bl(Ye,re);wr.draw({playerPos:oe,fogOfWar:R,buildings:Ha,npcs:We.getAllNPCs(),stations:Ga,landmarks:Gr,questMarkers:le}),ns.textContent=Math.round(ct.getExploredPercentage())}const Js=document.getElementById("skill-tree-nav"),eo=document.getElementById("skill-tree-nodes");function S(){const oe=y.getCurrentTree();Js.textContent=`${oe.name} (${y.getSkillPoints()} pts) — ← ${y.currentTreeIndex+1}/${wd.length} →`;const re=y.getNodes();eo.innerHTML=re.map((le,Ie)=>{const He=Ie===y.selectedNodeIndex?" selected":"",nt=le.unlocked?" unlocked":le.available?" available":" locked",_t=le.requires.length?` (needs: ${le.requires.join(", ")})`:"";return`<div class="node${He}${nt}">${le.unlocked?"✓":le.available?"○":"·"} ${le.name} [${le.cost}] — ${le.description}${_t}</div>`}).join("")}function k(){for(;w.skillPoints>0;)w.spendSkillPoint(),b.addPoints(1)}const G=document.getElementById("crafting-list"),V=document.getElementById("quest-list");function U(){const oe=ce.getAllRecipes();ce.selectedIndex>=oe.length&&(ce.selectedIndex=Math.max(0,oe.length-1));const re=ce.getAvailableRecipes(_),le=new Set(re.map(He=>He.name));G.innerHTML=oe.map((He,nt)=>{const _t=nt===ce.selectedIndex?" selected":"",it=le.has(He.name)?" available":" unavailable",ke=He.inputs.map(Ze=>`${Ze.count} ${Ze.type}`).join(", "),At=He.outputs.map(Ze=>`${Ze.count} ${Ze.type}`).join(", ");return`<div class="recipe${_t}${it}" data-idx="${nt}">${He.name}: ${ke} → ${At}</div>`}).join("");const Ie=G.querySelector(".recipe.selected");Ie&&Ie.scrollIntoView({block:"nearest"})}function ue(){const oe=he.getActiveQuests();if(oe.length===0){const re=he.quests.filter(le=>he.getStatus(le.id)==="available");if(re.length===0){V.innerHTML='<div style="color:#888">No active quests. Explore the world!</div>';return}V.innerHTML=re.map(le=>`
        <div class="quest"><span class="quest-name">${le.name}</span> (available)<br>
        <span style="color:#888">${le.description}</span></div>
      `).join("");return}V.innerHTML=oe.map(re=>{const le=re.objectives.map(Ie=>`<div class="objective${Ie.isComplete()?" complete":""}">• ${Ie.description} (${Ie.progress}/${Ie.target})</div>`).join("");return`<div class="quest"><span class="quest-name">${re.name}</span><br>${le}</div>`}).join("")}if(e){const oe=ki.find(re=>re.id===e);oe&&oe.applyState({questSystem:he,inventory:_,survivalStats:g,experienceSystem:w,player:l,progress:Ae,factionSystem:De,getHeightAt:Dt})}function Se(){if(!te.isOpen||te.activeTab!=="quests")return;const oe=Ae.getPercentage();document.getElementById("progress-fill").style.width=`${oe}%`,document.getElementById("progress-pct").textContent=`${oe}% Complete`;const re=Ae.getBreakdown().filter(le=>le.total>0);document.getElementById("progress-list").innerHTML=re.map(le=>{const Ie=le.current>=le.total;return`<div style="color:${Ie?"#6a6":"#aaa"}">${Ie?"✓":"○"} ${le.label}: ${le.current}/${le.total}</div>`}).join("")}let Re=performance.now();function Ce(oe){requestAnimationFrame(Ce);const re=Math.min((oe-Re)/1e3,.1);Re=oe;const le=re*t.SURVIVAL.GAME_TIME_SCALE,Ie=j.getEffectiveDt(le);if(M.tick(Ie),yt.isDead(g)&&!ot.enabled){document.getElementById("death-screen").style.display="flex",ve.consumeKeyPress("Enter")&&(yt.respawn(g,l,D),document.getElementById("death-screen").style.display="none"),Tr(M.getPhase()),L.render(pe,J);return}ve.consumeKeyPress("F4")&&(ot.toggle(),N=ot.enabled?"Creative Mode ON — fly with Space/Shift, invincible":"Creative Mode OFF",Y=t.DIALOGUE.SHORT_DURATION);const He=qs(l.position.x,l.position.z);g.setBiomeTemperature(He.type),O.tick(Ie),ot.noHunger()||g.tick(Ay(Ie,T)),R.reveal(l.position.x,l.position.z,t.FOG.REVEAL_RADIUS);for(const C of Gr){const $=l.position.x-C.position.x,be=l.position.z-C.position.z;Math.sqrt($*$+be*be)<C.radius*.5&&wr.addVisitedMarker(C.position.x,C.position.z,C.name)}ve.consumeKeyPress("Escape")&&(ne?_e():(te.toggle(),Si(),te.isOpen||L.domElement.requestPointerLock())),te.isOpen&&ve.consumeKeyPress("Tab")&&(te.nextTab(),Si()),!te.isOpen&&ve.consumeKeyPress("KeyM")&&Z.toggle();const nt=te.isOpen||!!ne;ve.menuOpen=nt,j.setMenuOpen(nt),nt&&document.pointerLockElement&&(ii=!0,document.exitPointerLock());for(const C of Gr)Ds(l.position,C.position,C.radius)&&Ae.visitLandmark(C.id);if(ve.locked){const C=ve.consumeMouse(),$=F.getMouseSensitivity(t.CAMERA.MOUSE_SENSITIVITY);l.yaw+=C.dx*$,l.pitch-=C.dy*$,l.pitch=Math.max(-t.CAMERA.MAX_PITCH,Math.min(t.CAMERA.MAX_PITCH,l.pitch))}ve.consumeKeyPress("KeyV")&&l.toggleCamera(),l.setCrouch(!!ve.keys.KeyC),E.setGuard(!!ve.keys.KeyG);for(let C=0;C<8;C++)ve.consumeKeyPress(`Digit${C+1}`)&&I.selectSlot(C);const _t=ve.consumeScroll();_t>0?I.scrollNext():_t<0&&I.scrollPrev();const ke=_.getItems().filter(C=>Oa[C.type]!==void 0);for(let C=0;C<Math.min(ke.length,8);C++)I.setSlot(C,{type:ke[C].type,count:ke[C].count});for(let C=ke.length;C<8;C++)I.clearSlot(C);if(k(),X.tick(Ie),q.tick(Ie),te.isOpen){const C=te.activeTab,$=zx(u,l.position);if(ce.setStation($),C==="inventory"){const be=document.getElementById("inventory-grid");let Be="";const Je=_.size||36;for(let Rt=0;Rt<Je;Rt++){const Ct=_.getSlot?_.getSlot(Rt):null,Wt=Ct?Vo(Ct.type):"",si=Ct?Ct.type.replace(/_/g," "):"",Ir=Ct?Ct.count:"";Be+=`<div data-inv-slot="${Rt}" style="width:56px;height:56px;background:rgba(30,30,40,0.8);border:2px solid #444;border-radius:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;${ie===Rt?"border-color:#c9a84c;background:rgba(60,60,20,0.5)":""}">
            <div style="font-size:20px;line-height:1">${Wt}</div>
            <div style="font-size:8px;color:#aaa;overflow:hidden;max-width:52px;text-align:center;white-space:nowrap">${si}</div>
            <div style="font-size:9px;color:#888">${Ir}</div>
          </div>`}be.innerHTML=Be,be.onclick=Rt=>{const Ct=Rt.target.closest("[data-inv-slot]");if(!Ct)return;const Wt=parseInt(Ct.getAttribute("data-inv-slot"));ie===-1?ie=Wt:(_.moveSlot&&_.moveSlot(ie,Wt),ie=-1)};const Vt=De.getAllFactions().map(Rt=>{const Ct=De.getReputation(Rt.id),Wt=De.getTier(Rt.id);return`<div><span style="color:#c9a84c">${Rt.name}</span> <span style="color:#888">${Wt} (${Ct})</span></div>`}).join("");document.getElementById("inventory-extra").innerHTML='<div style="border-top:1px solid #444;padding-top:6px;color:#aaa;font-size:11px;margin-top:4px">Factions</div>'+Vt}if(C==="crafting"&&(U(),ve.consumeKeyPress("ArrowDown")&&(ce.selectNext(),U()),ve.consumeKeyPress("ArrowUp")&&(ce.selectPrev(),U()),ve.consumeKeyPress("Enter")&&ce.craftSelected(_)&&U()),C==="skills"&&(S(),ve.consumeKeyPress("ArrowRight")&&(y.nextTree(),S()),ve.consumeKeyPress("ArrowLeft")&&(y.prevTree(),S()),ve.consumeKeyPress("ArrowDown")&&(y.selectedNodeIndex++,S()),ve.consumeKeyPress("ArrowUp")&&(y.selectedNodeIndex=Math.max(0,y.selectedNodeIndex-1),S()),ve.consumeKeyPress("Enter")&&(y.unlockSelected(),S())),C==="quests"&&(ue(),Se()),C==="map"&&(Qs(l.position),ve.consumeKeyPress("KeyZ")&&wr.toggleZoom()),C==="settings"){const be=document.getElementById("settings-content");be.innerHTML=`
          <div style="margin:8px 0">
            <label style="color:#aaa">Camera Sensitivity: <span id="sens-val">${F.sensitivity.toFixed(1)}x</span></label><br>
            <input type="range" id="sens-slider" min="0.5" max="3.0" step="0.1" value="${F.sensitivity}" style="width:100%;margin-top:4px;accent-color:#c9a84c">
          </div>
          <div style="margin:12px 0">
            <label style="color:#aaa">FOV: <span id="fov-val">${F.fov}</span></label><br>
            <input type="range" id="fov-slider" min="60" max="110" step="1" value="${F.fov}" style="width:100%;margin-top:4px;accent-color:#c9a84c">
          </div>
          <div style="margin:12px 0">
            <label style="color:#aaa"><input type="checkbox" id="tutorial-toggle" ${F.tutorialEnabled?"checked":""}> Tutorial reminders</label>
          </div>
        `,document.getElementById("sens-slider").addEventListener("input",Be=>{F.setSensitivity(parseFloat(Be.target.value)),document.getElementById("sens-val").textContent=F.sensitivity.toFixed(1)+"x"}),document.getElementById("fov-slider").addEventListener("input",Be=>{F.setFov(parseInt(Be.target.value)),document.getElementById("fov-val").textContent=F.fov,J.fov=F.fov,J.updateProjectionMatrix()}),document.getElementById("tutorial-toggle").addEventListener("change",()=>{F.toggleTutorial()})}}const At=te.isOpen&&te.activeTab==="map";if(Z.shouldRender(At)){Rr.style.display="block";const C=he.getActiveQuests().map(be=>be.id),$=Bl(Ye,C);rs.draw({playerPos:l.position,fogOfWar:R,buildings:Ha,npcs:We.getAllNPCs(),stations:Ga,landmarks:Gr,questMarkers:$,mini:!0})}else Rr.style.display="none";if(ve.consumeKeyPress("KeyT")&&!ze.isActive()){const C=Go(We,l.position,t.NPC.INTERACT_RANGE);if(C){const $=C.getDialogue(he),be=[];if(kd(C,he)&&be.push({text:"Accept quest",response:null,action:"accept_quest",npcId:C.id}),C.trades&&C.trades.length>0)for(const Be of C.trades){const Je=_.count(Be.give.type)>=Be.give.count,Vt=`Trade ${Be.give.count} ${Be.give.type.replace(/_/g," ")} → ${Be.receive.count} ${Be.receive.type.replace(/_/g," ")}${Je?"":" (need more)"}`;be.push({text:Vt,response:Je?`Traded! Received ${Be.receive.count} ${Be.receive.type.replace(/_/g," ")}.`:"You don't have enough to trade.",action:Je?"trade":null,trade:Be})}be.push(...Fy(C.id,C.name)),ze.startDialogue(`${C.name}: ${$}`,be),Ae.talkToNPC(C.id),he.advanceObjective("ch2_roads","ch2_meet_npc",1)}}if(ze.isActive()){const C=document.getElementById("dialogue-panel");C.style.display="block";const $=ze.getState();document.getElementById("dialogue-message").innerHTML=ze.getMessage();const be=ze.getChoices();if($==="choices"){if(document.getElementById("dialogue-choices").innerHTML=be.map((Be,Je)=>`<div style="${Je===ze.selectedIndex?"color:#c9a84c;":"color:#888;"}cursor:pointer;padding:3px 0">${Je===ze.selectedIndex?"▸ ":"  "}${Be.text}</div>`).join(""),ve.consumeKeyPress("ArrowDown")&&ze.selectNext(),ve.consumeKeyPress("ArrowUp")&&ze.selectPrev(),ve.consumeKeyPress("Enter")){const Be=be[ze.selectedIndex];if(Be&&Be.action==="accept_quest"){const Je=Go(We,l.position,t.NPC.INTERACT_RANGE);Je&&My(Je,he),ze.dismiss(),N="Quest accepted!",Y=t.DIALOGUE.SHORT_DURATION}else if(Be&&Be.action==="trade"&&Be.trade){const Je=Be.trade;_.remove(Je.give.type,Je.give.count)&&(_.add(Je.receive.type,Je.receive.count),ze.dismiss(),N=`Traded! Received ${Je.receive.count} ${Je.receive.type.replace(/_/g," ")}`,Y=t.DIALOGUE.SHORT_DURATION)}else ze.selectChoice(ze.selectedIndex)}}else $==="response"&&(document.getElementById("dialogue-choices").innerHTML='<div style="color:#666;padding:6px 0;font-style:italic">Press Enter to continue...</div>',ve.consumeKeyPress("Enter")&&ze.acknowledge());(ve.consumeKeyPress("Escape")||ve.consumeKeyPress("KeyT"))&&ze.dismiss()}else document.getElementById("dialogue-panel").style.display="none";if(Y>0&&(Y-=re,Y<=0&&(N="")),ve.consumeKeyPress("F5"))try{const C=my(u,l,_,{survivalStats:g,quests:he,factions:De,fastTravel:ge,fogOfWar:R,loreJournal:we,skillTree:b});xy(C).then(()=>{N="Game saved!",Y=t.DIALOGUE.SAVE_FEEDBACK_DURATION}).catch(()=>{N="Save failed!",Y=t.DIALOGUE.SAVE_FEEDBACK_DURATION})}catch{N="Save failed!",Y=t.DIALOGUE.SAVE_FEEDBACK_DURATION}if(ve.consumeKeyPress("F9")&&yy().then(C=>{const $=_y(C);u.restoreFrom($.world),Object.assign(l.position,$.player.position),l.velocity=$.player.velocity,l.yaw=$.player.yaw,l.pitch=$.player.pitch,l.onGround=$.player.onGround;for(const be of _.getItems())_.remove(be.type,be.count);for(const be of $.inventory.getItems())_.add(be.type,be.count);$.survivalStats&&Object.assign(g,$.survivalStats),$.questData&&he.deserialize($.questData),$.factionData&&De.deserialize($.factionData),$.fastTravelData&&ge.deserialize($.fastTravelData),$.fogOfWarData&&R.deserialize($.fogOfWarData),$.loreJournalData&&we.deserialize($.loreJournalData),$.skillTreeData&&b.deserialize($.skillTreeData);for(const be of Ue.meshes.keys())Ue.dirty.add(be);N="Game loaded!",Y=t.DIALOGUE.SAVE_FEEDBACK_DURATION}).catch(()=>{N="Load failed!",Y=t.DIALOGUE.SAVE_FEEDBACK_DURATION}),ve.consumeKeyPress("KeyF")&&py(_,g,q),ve.consumeKeyPress("KeyH")&&Wx(_,l.position,Dn,A)&&(N="Thrown!",Y=1.5),ve.consumeKeyPress("KeyX")){const C=He.type===at.MIRKWOOD,$=Q.useRelic(g.focus);if($){Ae.useRelic();const be=kg($.focusCost,C);if(g.focus=Math.max(0,g.focus-be),$.ability===Hs.HEAL_WOUND?(g.health=Math.min(g.maxHealth,g.health+20),N="Healing light surrounds you..."):$.ability===Hs.WARD_LIGHT?(X.reduceFear(30),N="A warm light pushes back the darkness."):$.ability===Hs.CALM_FEAR?(X.reduceFear(50),N="A calm washes over you."):N=`Used: ${Q.getEquippedRelic().name}`,C){N="The corruption resists your power... "+N;const Be=Ug();if(qe()<Be){const Je=je.spawn(l.position,He.type);Je&&A.push(Je)}}Y=t.DIALOGUE.SHORT_DURATION}else Q.getEquippedRelic()&&(N=Q.getEquippedRelic().cooldown>0?"Relic on cooldown":"Not enough focus",Y=t.DIALOGUE.SAVE_FEEDBACK_DURATION)}Q.tick(Ie);const Ze=Ge.findNearby(l.position,5);for(const C of Ze)if(C.discover()){for(const $ of C.reward)_.add($.type,$.count);w.addExperience(t.QUESTS.XP_DISCOVERY,"exploration"),(C.type==="lore_book"||C.type==="inscription")&&we.addEntry(new Dd({id:C.id,title:C.id.replace(/_/g," "),text:`Found near ${Math.floor(C.position.x)}, ${Math.floor(C.position.z)}`,category:C.type==="lore_book"?Il.HISTORY:Il.INSCRIPTION})),Ae.discover(C.id),N=`Discovered: ${C.type.replace(/_/g," ")}!`,Y=t.DIALOGUE.SHORT_DURATION}for(const C of Vr)C.restored&&!ge.isUnlocked(C.id)&&ge.unlockWaypoint({id:C.id,name:C.name,position:{...C.position}});const rn=me.evaluate(u,l.position),ri=bx(Bt);rn.warmth+(ri.temperature||0)*.1,tt.tick(Ie);const Et=ve.getMovementInput();if(ot.canFly()){const C=Gi(l),$=ot.flySpeed*re;Et.forward&&(l.position.x+=C.x*$,l.position.y+=C.y*$,l.position.z+=C.z*$),Et.back&&(l.position.x-=C.x*$,l.position.y-=C.y*$,l.position.z-=C.z*$),Et.left&&(l.position.x+=C.z*$,l.position.z-=C.x*$),Et.right&&(l.position.x-=C.z*$,l.position.z+=C.x*$),ve.getJump()&&(l.position.y+=$),ve.keys.ShiftLeft&&(l.position.y-=$),l.velocity.y=0}else{const C=Ig(i.raceId,He.type),$=g.getFractureSpeedMultiplier(),be=Ny(u,l.position),Be=ky(be),Je=Math.floor(l.position.x),Vt=Math.floor(l.position.z),Rt=Dt(Je,Vt);let Ct=1;if(Et.forward||Et.right){const $t=Math.cos(l.yaw),Ei=Math.sin(l.yaw),eh=Math.floor(l.position.x+Ei*2),th=Math.floor(l.position.z+$t*2),nh=Dt(eh,th),ih=Math.abs(nh-Rt);Ct=Uy(ih)}if(ve.keys.ShiftLeft&&Et.forward&&!l.crouching&&g.stamina>0){const $t=l.moveSpeed,Ei=Dg(i.raceId);l.moveSpeed*=t.SURVIVAL.SPRINT_MULTIPLIER*Ei*C*$*Be*Ct,l.applyMovementInput(Et,re),l.moveSpeed=$t,g.applySprint(Ie)}else{const $t=l.moveSpeed;l.moveSpeed*=C*$*Be*Ct,l.applyMovementInput(Et,re),l.moveSpeed=$t}if(be){const $t=A0(l.position.x,l.position.z);$t&&(l.position.x+=$t.x*re,l.position.z+=$t.z*re)}ve.getJump()&&l.onGround&&(l.velocity.y=t.PHYSICS.JUMP_VELOCITY,l.onGround=!1);const si=l.velocity.y,Ir=l.onGround;N0(l,re),U0(l,u,re),!Ir&&l.onGround&&si<0&&g.checkFallFracture(si)}hv(l.position,t.WORLD.BOUNDARY_EXTENT);const Dn=Gi(l),xt={x:l.position.x,y:l.position.y+(l.eyeHeight||t.CAMERA.FIRST_PERSON_EYE_HEIGHT),z:l.position.z};if(ve.locked&&ve.consumeRightClick()){const C=gl(u,xt,Dn,6);if(C){const $=u.getBlock(C.blockPos.x,C.blockPos.y,C.blockPos.z);if($===v.DOOR||$===v.DOOR_OPEN)Fl(u,C.blockPos.x,C.blockPos.y,C.blockPos.z)&&(Ue.markDirty(C.blockPos.x,C.blockPos.y,C.blockPos.z),Ue.markDirty(C.blockPos.x,C.blockPos.y+1,C.blockPos.z),Ue.markDirty(C.blockPos.x,C.blockPos.y-1,C.blockPos.z));else if($===v.CHEST)ae(C.blockPos.x,C.blockPos.y,C.blockPos.z);else{const be=I.getSelectedItem(),Be=be?be.type:null;if(Be&&Oa[Be]!==void 0){const Je=C.blockPos.x+C.normal.x,Vt=C.blockPos.y+C.normal.y,Rt=C.blockPos.z+C.normal.z;rg(u,_,Je,Vt,Rt,Be)&&Ue.markDirty(Je,Vt,Rt)}}}}if(x+=Ie,x>=10){x=0;const C=A.filter(be=>!be.isDead()).length,$=je.trySpawn({phase:M.getPhase(),playerPos:l.position,existingCount:C,getHeight:(be,Be)=>Dt(be,Be)});A.push(...$)}const Yt=(C,$)=>Dt(C,$);for(const C of A)if(!C.isDead()){const $=C.aggroRange;C.aggroRange=Hx(C,l.crouching),C.updateAI(l.position,re,Yt,u),C.aggroRange=$}if(M.getPhase()===dt.NIGHT&&X.addFear(Ie*.5),!ot.isInvincible()){for(const C of A)if(!C.isDead()&&C.canAttack(l.position)){let $=C.performAttack();$=Ry($,T),E._guarding&&($*=.5),$=Ux($,P),g.takeDamage($)}}if(ve.locked&&ve.keys.mouseLeft){const C=gl(u,xt,Dn,6);if(C){const{x:$,y:be,z:Be}=C.blockPos,Je=u.getBlock($,be,Be);if(Cy(Je))ve.consumeLeftClick()&&Fl(u,$,be,Be)&&(Ue.markDirty($,be,Be),Ue.markDirty($,be+1,Be),Ue.markDirty($,be-1,Be));else if(Fe.startBreak($,be,Be,Je),Fe.tick(re)){let Rt=P.get("main_hand")||null;if(!Rt){const Wt=["iron_pickaxe","copper_pickaxe","stone_pickaxe","pickaxe"];for(const si of Wt)if(_.count(si)>0){Rt={type:"pickaxe",use(){},isBroken(){return!1}};break}}const Ct=Xx(u,$,be,Be,Rt);if(Ct.mined){for(const Wt of Ct.drops)mt({x:$,y:be,z:Be},Wt.type,Wt.count);Ue.markDirty($,be,Be)}}}else if(Fe.cancel(),ve.consumeLeftClick()){let $=Bx(P);if($<=2){const be=[{type:"iron_sword",damage:12},{type:"iron_hammer",damage:14},{type:"dagger",damage:6},{type:"spear",damage:10},{type:"axe",damage:8},{type:"stone_axe",damage:6},{type:"hammer",damage:10}];for(const Be of be)if(_.count(Be.type)>0){$=Be.damage;break}$<=2&&($=5)}E.playerAttack(l.position,Dn,A,$)}}else Fe.cancel(),ve.consumeLeftClick();for(let C=A.length-1;C>=0;C--)if(A[C].isDead()){const $=ag(A[C].type);for(const be of $)mt(A[C].position,be.type,be.count);w.addExperience(t.COMBAT.XP_PER_KILL,"combat"),De.addReputation("road_wardens",t.COMBAT.FACTION_REP_PER_KILL),Ae.killEnemy(A[C].type),A.splice(C,1)}!ee&&M.day>=2&&(ee=!0,he.advanceObjective("ch1_embers","ch1_survive",1),w.addExperience(t.QUESTS.XP_FIRST_NIGHT,"quest"),Ae.surviveNight()),M.getPhase()===dt.DAWN&&M.day>Ae.nightsSurvived+1&&Ae.surviveNight();const kt=Vr.find(C=>C.id==="starter_watchpost");kt&&Ds(l.position,kt.position,t.RESTORATION.HINT_RANGE)&&he.advanceObjective("ch1_embers","ch1_reach_outpost",1);const Ft=Ye.checkTriggers(l.position);for(const C of Ft)he.activate(C.questId),(C.type==="reach_location"||C.type==="explore_area")&&(he.advanceObjective(C.questId,C.objectiveId,1),w.addExperience(t.QUESTS.XP_EXPLORATION,"exploration"));if(ve.consumeKeyPress("KeyR")){for(const C of Vr)if(!C.restored&&Ds(l.position,C.position,t.RESTORATION.INTERACT_RANGE)){if(C.restore(_)){const $=Ng(C.id);N=$.message,Y=t.DIALOGUE.DISPLAY_DURATION,w.addExperience(t.QUESTS.XP_RESTORATION,"restoration"),Ae.restoreSite(C.id);const Be={starter_watchpost:"road_wardens",roadside_hall:"road_wardens",mountain_workshop:"dwarven_crafters",forest_beacon:"woodland_guardians",ward_bastion:"rivendell_keepers"}[C.id];Be&&De.addReputation(Be,50);const Je=$.merchant;Je.position={...C.position};const Vt=new dn(Je);We.addNPC(Vt);const Ct={starter_watchpost:"small",roadside_hall:"medium",mountain_workshop:"medium",forest_beacon:"small",ward_bastion:"large"}[C.id]||"small",Wt=Dt(Math.floor(C.position.x),Math.floor(C.position.z));Tv(u,{x:C.position.x,y:Wt+1,z:C.position.z},Ct);const si=Math.floor(C.position.x),Ir=Math.floor(C.position.z);for(let $t=-10;$t<=10;$t+=8)for(let Ei=-10;Ei<=10;Ei+=8)Ue.markDirty(si+$t,Wt+1,Ir+Ei);C.id==="starter_watchpost"&&he.advanceObjective("ch1_embers","ch1_activate_ward",1)}else N=`Need materials to restore ${C.name}`,Y=t.DIALOGUE.SHORT_DURATION;break}}const Cr=(C,$)=>Dt(C,$);for(const C of Ua)C.updateAI(re,Cr,u);for(let C=Oe.length-1;C>=0;C--){const $=Oe[C];if($.lifetime-=re,$.bobPhase+=re*3,$.lifetime<=0){Oe.splice(C,1);continue}const be=l.position.x-$.position.x,Be=l.position.y-$.position.y,Je=l.position.z-$.position.z;be*be+Be*Be+Je*Je<=Me*Me&&(_.add($.type,$.count),N=`Picked up ${$.count} ${$.type.replace(/_/g," ")}`,Y=1.5,Oe.splice(C,1))}for(const C of Ne)pe.remove(C),C.geometry.dispose();Ne=[];const zn=new yi(.3,.3,.3);for(const C of Oe){const $=new js({color:13215820}),be=new un(zn,$);be.position.set(C.position.x,C.position.y+Math.sin(C.bobPhase)*.15,C.position.z),be.rotation.y=C.bobPhase*.5,pe.add(be),Ne.push(be)}St.sync(A),Nt.sync(Ua),Tr(M.getPhase());const Fd=O.getVisibilityModifier(),ac=Ul(Fd);pe.fog.near=ac.near,pe.fog.far=ac.far;const zd=Math.sqrt((l.position.x-t.CORRUPTION.CENTER_X)**2+(l.position.z-t.CORRUPTION.CENTER_Z)**2),cc=Math.max(0,1-zd/t.CORRUPTION.RADIUS);if(cc>t.CORRUPTION.FOG_THRESHOLD){const C=wy(cc);pe.fog.color.setRGB(C.r,C.g,C.b)}if(J.rotation.order="YXZ",J.rotation.y=-l.yaw,J.rotation.x=l.pitch,l.cameraMode==="third_person_behind"){const C=t.CAMERA.THIRD_PERSON_DISTANCE,$=t.CAMERA.THIRD_PERSON_EYE_HEIGHT,be=Gi(l);J.position.set(l.position.x-be.x*C,l.position.y+$-be.y*C,l.position.z-be.z*C)}else J.position.set(l.position.x,l.position.y+(l.eyeHeight||t.CAMERA.FIRST_PERSON_EYE_HEIGHT),l.position.z);p.update(l.position.x,l.position.z),n.style.display!=="none"&&!p.isLoading()&&(p.consumeMeshDirtyChunks(),Ue.update(l.position.x,l.position.z,t.CHUNKS.RENDER_DISTANCE),n.style.display="none");const lc=p.consumeMeshDirtyChunks();lc.size>0&&Ue.invalidateChunks(lc),n.style.display==="none"&&Ue.update(l.position.x,l.position.z,t.CHUNKS.RENDER_DISTANCE),L.render(pe,J);const Hd=M.getPhase(),wt=uy({survivalStats:g,questSystem:he,compass:Te,playerYaw:l.yaw,playerPos:l.position,fearSystem:X,experienceSystem:w,statusEffects:q}),Gd=_.getItems().slice(0,8).map(C=>`${C.type}:${C.count}`).join(" "),dc=A.length,Vd=l.crouching?" [Crouching]":"",Wd=E._guarding?" [Guard]":"",Xd=O.current,qd=Math.round(R.getRevealedPercentage()),Kd=wt.activeQuestName?` | Quest: ${wt.activeQuestName}`:"",Yd=wt.compassCardinal?` ${wt.compassCardinal}`:"",hc=wt.fearLevel,uc=document.getElementById("hotbar-bar");let fc="";for(let C=0;C<8;C++){const $=I.getSlot(C),be=C===I.selectedSlot?" selected":"",Be=$?Vo($.type):"",Je=$?$.type.replace(/_/g," "):"",Vt=$?$.count:"";fc+=`<div class="slot${be}"><span class="num">${C+1}</span><div style="font-size:18px">${Be}</div><span class="item-name">${Je}</span><span class="item-count">${Vt}</span></div>`}uc.innerHTML=fc;const $d=P.get("main_hand"),jd=qx($d);let Xi=document.getElementById("tool-durability");Xi||(Xi=document.createElement("div"),Xi.id="tool-durability",Xi.style.cssText="color:#aaa;font-size:11px;text-align:center;margin-top:2px;font-family:monospace",uc.parentNode.appendChild(Xi)),Xi.textContent=jd;const pc=Go(We,l.position,t.NPC.INTERACT_RANGE),Zd=pc?`<div style="color:#c9a84c;margin-top:4px">[T] Talk to ${pc.name}</div>`:"",Qd=N?`<div style="color:#eee;background:rgba(0,0,0,0.6);padding:6px 10px;margin-top:6px;border-radius:4px;max-width:400px">${N}</div>`:"";let mc="";for(const C of Vr)if(!C.restored&&Ds(l.position,C.position,t.RESTORATION.HINT_RANGE)){const $=C.requirements.map(be=>`${be.count} ${be.type.replace(/_/g," ")}`).join(", ");mc=`<div style="color:#aed581;margin-top:4px">[R] Restore ${C.name} (needs: ${$})</div>`;break}const Jd=wt.statusEffects.length>0?`<div style="margin-top:2px;font-size:11px;color:#aed581">${wt.statusEffects.map(C=>`${C.type.replace(/_/g," ")} ${Math.ceil(C.remaining)}s`).join(" | ")}</div>`:"";nn.innerHTML=`
      <div>${i.characterName?i.characterName+" — ":""}${m.name} ${f.name} Lv${wt.level} | Day ${M.day} — ${Hd} | ${He.name} | ${Xd}${Yd}${Vd}${Wd}${ot.enabled?" [CREATIVE]":""}</div>
      <div>HP: ${wt.health}/${wt.maxHealth} | STA: ${wt.stamina} | HUN: ${wt.hunger} | FOC: ${wt.focus} | ${wt.tempLabel}${hc>0?` | Fear: ${hc}`:""}${Kd}</div>
      <div style="margin-top:2px;font-size:11px;color:#888">Pos: ${wt.playerX}, ${wt.playerZ} | ${Gd||"empty"}${dc?` | Enemies: ${dc}`:""} | Map: ${qd}%</div>
      ${Jd}
      ${Zd}${mc}${Qd}
    `,document.getElementById("health-bar-fill").style.width=`${wt.health/wt.maxHealth*100}%`,document.getElementById("stamina-bar-fill").style.width=`${wt.stamina}%`,document.getElementById("hunger-bar-fill").style.width=`${wt.hunger}%`,Fe.isBreaking()?(document.getElementById("break-bar").style.display="block",document.getElementById("break-fill").style.width=`${Math.round(Fe.getProgress()*100)}%`):document.getElementById("break-bar").style.display="none"}window.addEventListener("resize",()=>{L.setSize(window.innerWidth,window.innerHeight),J.aspect=window.innerWidth/window.innerHeight,J.updateProjectionMatrix()}),requestAnimationFrame(Ce)}
