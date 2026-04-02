(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ga="175",ih=0,fc=1,rh=2,zl=1,sh=2,Qn=3,Si=0,dn=1,ti=2,xi=0,mr=1,pc=2,mc=3,_c=4,oh=5,Bi=100,ah=101,ch=102,lh=103,dh=104,hh=200,uh=201,fh=202,ph=203,Yo=204,Ko=205,mh=206,_h=207,gh=208,vh=209,xh=210,yh=211,Sh=212,Eh=213,Mh=214,$o=0,jo=1,Zo=2,xr=3,Qo=4,Jo=5,ea=6,ta=7,Va=0,bh=1,Th=2,yi=0,Ah=1,Rh=2,wh=3,Ch=4,Ih=5,Oh=6,Dh=7,Hl=300,yr=301,Sr=302,na=303,ia=304,Ys=306,ra=1e3,Gi=1001,sa=1002,kn=1003,Lh=1004,is=1005,zn=1006,to=1007,Vi=1008,ai=1009,Gl=1010,Vl=1011,Gr=1012,Wa=1013,Wi=1014,ii=1015,Yr=1016,Xa=1017,qa=1018,Vr=1020,Wl=35902,Xl=1021,ql=1022,Nn=1023,Yl=1024,Kl=1025,Wr=1026,Xr=1027,$l=1028,Ya=1029,jl=1030,Ka=1031,$a=1033,Ds=33776,Ls=33777,Ps=33778,Ns=33779,oa=35840,aa=35841,ca=35842,la=35843,da=36196,ha=37492,ua=37496,fa=37808,pa=37809,ma=37810,_a=37811,ga=37812,va=37813,xa=37814,ya=37815,Sa=37816,Ea=37817,Ma=37818,ba=37819,Ta=37820,Aa=37821,ks=36492,Ra=36494,wa=36495,Zl=36283,Ca=36284,Ia=36285,Oa=36286,Ph=3200,Nh=3201,Ql=0,kh=1,vi="",An="srgb",Er="srgb-linear",Gs="linear",Ct="srgb",Yi=7680,gc=519,Uh=512,Fh=513,Bh=514,Jl=515,zh=516,Hh=517,Gh=518,Vh=519,vc=35044,xc="300 es",ri=2e3,Vs=2001;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],no=Math.PI/180,Da=180/Math.PI;function Kr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Wh(i,e){return(i%e+e)%e}function io(i,e,t){return(1-t)*i+t*e}function Ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,r,s,o,a,c,l){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],_=n[8],x=r[0],p=r[3],d=r[6],T=r[1],b=r[4],E=r[7],D=r[2],R=r[5],C=r[8];return s[0]=o*x+a*T+c*D,s[3]=o*p+a*b+c*R,s[6]=o*d+a*E+c*C,s[1]=l*x+h*T+u*D,s[4]=l*p+h*b+u*R,s[7]=l*d+h*E+u*C,s[2]=f*x+m*T+_*D,s[5]=f*p+m*b+_*R,s[8]=f*d+m*E+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*s,m=l*s-o*c,_=t*u+n*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(r*l-h*n)*x,e[2]=(a*n-r*o)*x,e[3]=f*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ro.makeScale(e,t)),this}rotate(e){return this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ro=new nt;function ed(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xh(){const i=Ws("canvas");return i.style.display="block",i}const yc={};function Us(i){i in yc||(yc[i]=!0,console.warn(i))}function qh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Yh(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Sc=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $h(){const i={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ct&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vi?Gs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Er]:{primaries:e,whitePoint:n,transfer:Gs,toXYZ:Sc,fromXYZ:Ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Sc,fromXYZ:Ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const St=$h();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ki;class jh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=Ws("canvas")),Ki.width=e.width,Ki.height=e.height;const r=Ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=si(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zh=0;class ja{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Kr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(so(r[o].image)):s.push(so(r[o]))}else s=so(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qh=0;class hn extends br{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=Gi,r=Gi,s=zn,o=Vi,a=Nn,c=ai,l=hn.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Kr(),this.name="",this.source=new ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Hl;hn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],_=c[9],x=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,E=(m+1)/2,D=(d+1)/2,R=(h+f)/4,C=(u+x)/4,L=(_+p)/4;return b>E&&b>D?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=R/n,s=C/n):E>D?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=R/r,s=L/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=C/s,r=L/s),this.set(n,r,s,t),this}let T=Math.sqrt((p-_)*(p-_)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(u-x)/T,this.z=(f-h)/T,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jh extends br{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new hn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ja(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Jh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class td extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eu extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(u!==x||c!==f||l!==m||h!==_){let p=1-a;const d=c*f+l*m+h*_+u*x,T=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const D=Math.sqrt(b),R=Math.atan2(D,d*T);p=Math.sin(p*R)/D,a=Math.sin(a*R)/D}const E=a*T;if(c=c*p+f*E,l=l*p+m*E,h=h*p+_*E,u=u*p+x*E,p===1-a){const D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+h*u+c*m-l*f,e[t+1]=c*_+h*f+l*u-a*m,e[t+2]=l*_+h*m+a*f-c*u,e[t+3]=h*_-a*u-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),f=c(n/2),m=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*m*_,this._y=l*m*u-f*h*_,this._z=l*h*_+f*m*u,this._w=l*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+l*m*_,this._y=l*m*u-f*h*_,this._z=l*h*_-f*m*u,this._w=l*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-l*m*_,this._y=l*m*u+f*h*_,this._z=l*h*_+f*m*u,this._w=l*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-l*m*_,this._y=l*m*u+f*h*_,this._z=l*h*_-f*m*u,this._w=l*h*u+f*m*_;break;case"YZX":this._x=f*h*u+l*m*_,this._y=l*m*u+f*h*_,this._z=l*h*_-f*m*u,this._w=l*h*u-f*m*_;break;case"XZY":this._x=f*h*u-l*m*_,this._y=l*m*u-f*h*_,this._z=l*h*_+f*m*u,this._w=l*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new V,Mc=new $r;class jr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rs.copy(n.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),ss.subVectors(this.max,Or),$i.subVectors(e.a,Or),ji.subVectors(e.b,Or),Zi.subVectors(e.c,Or),di.subVectors(ji,$i),hi.subVectors(Zi,ji),wi.subVectors($i,Zi);let t=[0,-di.z,di.y,0,-hi.z,hi.y,0,-wi.z,wi.y,di.z,0,-di.x,hi.z,0,-hi.x,wi.z,0,-wi.x,-di.y,di.x,0,-hi.y,hi.x,0,-wi.y,wi.x,0];return!ao(t,$i,ji,Zi,ss)||(t=[1,0,0,0,1,0,0,0,1],!ao(t,$i,ji,Zi,ss))?!1:(os.crossVectors(di,hi),t=[os.x,os.y,os.z],ao(t,$i,ji,Zi,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new V,new V,new V,new V,new V,new V,new V,new V],wn=new V,rs=new jr,$i=new V,ji=new V,Zi=new V,di=new V,hi=new V,wi=new V,Or=new V,ss=new V,os=new V,Ci=new V;function ao(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ci.fromArray(i,s);const a=r.x*Math.abs(Ci.x)+r.y*Math.abs(Ci.y)+r.z*Math.abs(Ci.z),c=e.dot(Ci),l=t.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const tu=new jr,Dr=new V,co=new V;class Za{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);const t=Dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Dr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(co)),this.expandByPoint(Dr.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new V,lo=new V,as=new V,ui=new V,ho=new V,cs=new V,uo=new V;class nu{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){lo.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(lo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(as),a=ui.dot(this.direction),c=-ui.dot(as),l=ui.lengthSq(),h=Math.abs(1-o*o);let u,f,m,_;if(h>0)if(u=o*c-a,f=o*a-c,_=s*h,u>=0)if(f>=-_)if(f<=_){const x=1/h;u*=x,f*=x,m=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(lo).addScaledVector(as,f),m}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,r,s){ho.subVectors(t,e),cs.subVectors(n,e),uo.crossVectors(ho,cs);let o=this.direction.dot(uo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,e);const c=a*this.direction.dot(cs.crossVectors(ui,cs));if(c<0)return null;const l=a*this.direction.dot(ho.cross(ui));if(l<0||c+l>o)return null;const h=-a*ui.dot(uo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,r,s,o,a,c,l,h,u,f,m,_,x,p){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,u,f,m,_,x,p)}set(e,t,n,r,s,o,a,c,l,h,u,f,m,_,x,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=_,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*u,_=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+_*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,m=c*u,_=l*h,x=l*u;t[0]=f+x*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,m=c*u,_=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,m=o*u,_=a*h,x=a*u;t[0]=c*h,t[4]=_*l-m,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,_=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=_*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+_,t[10]=f-x*u}else if(e.order==="XZY"){const f=o*c,m=o*l,_=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iu,e,ru)}lookAt(e,t,n){const r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),fi.crossVectors(n,fn),fi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),fi.crossVectors(n,fn)),fi.normalize(),ls.crossVectors(fn,fi),r[0]=fi.x,r[4]=ls.x,r[8]=fn.x,r[1]=fi.y,r[5]=ls.y,r[9]=fn.y,r[2]=fi.z,r[6]=ls.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],_=n[2],x=n[6],p=n[10],d=n[14],T=n[3],b=n[7],E=n[11],D=n[15],R=r[0],C=r[4],L=r[8],M=r[12],S=r[1],O=r[5],W=r[9],H=r[13],j=r[2],re=r[6],Z=r[10],se=r[14],q=r[3],ge=r[7],Ae=r[11],Ce=r[15];return s[0]=o*R+a*S+c*j+l*q,s[4]=o*C+a*O+c*re+l*ge,s[8]=o*L+a*W+c*Z+l*Ae,s[12]=o*M+a*H+c*se+l*Ce,s[1]=h*R+u*S+f*j+m*q,s[5]=h*C+u*O+f*re+m*ge,s[9]=h*L+u*W+f*Z+m*Ae,s[13]=h*M+u*H+f*se+m*Ce,s[2]=_*R+x*S+p*j+d*q,s[6]=_*C+x*O+p*re+d*ge,s[10]=_*L+x*W+p*Z+d*Ae,s[14]=_*M+x*H+p*se+d*Ce,s[3]=T*R+b*S+E*j+D*q,s[7]=T*C+b*O+E*re+D*ge,s[11]=T*L+b*W+E*Z+D*Ae,s[15]=T*M+b*H+E*se+D*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],m=e[14],_=e[3],x=e[7],p=e[11],d=e[15];return _*(+s*c*u-r*l*u-s*a*f+n*l*f+r*a*m-n*c*m)+x*(+t*c*m-t*l*f+s*o*f-r*o*m+r*l*h-s*c*h)+p*(+t*l*u-t*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+d*(-r*a*h-t*c*u+t*a*f+r*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],m=e[11],_=e[12],x=e[13],p=e[14],d=e[15],T=u*p*l-x*f*l+x*c*m-a*p*m-u*c*d+a*f*d,b=_*f*l-h*p*l-_*c*m+o*p*m+h*c*d-o*f*d,E=h*x*l-_*u*l+_*a*m-o*x*m-h*a*d+o*u*d,D=_*u*c-h*x*c-_*a*f+o*x*f+h*a*p-o*u*p,R=t*T+n*b+r*E+s*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=T*C,e[1]=(x*f*s-u*p*s-x*r*m+n*p*m+u*r*d-n*f*d)*C,e[2]=(a*p*s-x*c*s+x*r*l-n*p*l-a*r*d+n*c*d)*C,e[3]=(u*c*s-a*f*s-u*r*l+n*f*l+a*r*m-n*c*m)*C,e[4]=b*C,e[5]=(h*p*s-_*f*s+_*r*m-t*p*m-h*r*d+t*f*d)*C,e[6]=(_*c*s-o*p*s-_*r*l+t*p*l+o*r*d-t*c*d)*C,e[7]=(o*f*s-h*c*s+h*r*l-t*f*l-o*r*m+t*c*m)*C,e[8]=E*C,e[9]=(_*u*s-h*x*s-_*n*m+t*x*m+h*n*d-t*u*d)*C,e[10]=(o*x*s-_*a*s+_*n*l-t*x*l-o*n*d+t*a*d)*C,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*m-t*a*m)*C,e[12]=D*C,e[13]=(h*x*r-_*u*r+_*n*f-t*x*f-h*n*p+t*u*p)*C,e[14]=(_*a*r-o*x*r-_*n*c+t*x*c+o*n*p-t*a*p)*C,e[15]=(o*u*r-h*a*r+h*n*c-t*u*c-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,f=s*l,m=s*h,_=s*u,x=o*h,p=o*u,d=a*u,T=c*l,b=c*h,E=c*u,D=n.x,R=n.y,C=n.z;return r[0]=(1-(x+d))*D,r[1]=(m+E)*D,r[2]=(_-b)*D,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(f+d))*R,r[6]=(p+T)*R,r[7]=0,r[8]=(_+b)*C,r[9]=(p-T)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const o=Qi.set(r[4],r[5],r[6]).length(),a=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const l=1/s,h=1/o,u=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,t.setFromRotationMatrix(Cn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=ri){const c=this.elements,l=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r);let m,_;if(a===ri)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Vs)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ri){const c=this.elements,l=1/(t-e),h=1/(n-r),u=1/(o-s),f=(t+e)*l,m=(n+r)*h;let _,x;if(a===ri)_=(o+s)*u,x=-2*u;else if(a===Vs)_=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new V,Cn=new Pt,iu=new V(0,0,0),ru=new V(1,1,1),fi=new V,ls=new V,fn=new V,bc=new Pt,Tc=new $r;class Vn{constructor(e=0,t=0,n=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let su=0;const Ac=new V,Ji=new $r,Kn=new Pt,ds=new V,Lr=new V,ou=new V,au=new $r,Rc=new V(1,0,0),wc=new V(0,1,0),Cc=new V(0,0,1),Ic={type:"added"},cu={type:"removed"},er={type:"childadded",child:null},fo={type:"childremoved",child:null};class jt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new V,t=new Vn,n=new $r,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new nt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Rc,e)}rotateY(e){return this.rotateOnAxis(wc,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Ac.copy(e).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rc,e)}translateY(e){return this.translateOnAxis(wc,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ds.copy(e):ds.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Lr,ds,this.up):Kn.lookAt(ds,Lr,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(Kn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ic),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cu),fo.child=e,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ic),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,ou),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}jt.DEFAULT_UP=new V(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new V,$n=new V,po=new V,jn=new V,tr=new V,nr=new V,Oc=new V,mo=new V,_o=new V,go=new V,vo=new Lt,xo=new Lt,yo=new Lt;class Pn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){In.subVectors(r,t),$n.subVectors(n,t),po.subVectors(e,t);const o=In.dot(In),a=In.dot($n),c=In.dot(po),l=$n.dot($n),h=$n.dot(po),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(l*c-a*h)*f,_=(o*h-a*c)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(a,jn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return vo.setScalar(0),xo.setScalar(0),yo.setScalar(0),vo.fromBufferAttribute(e,t),xo.fromBufferAttribute(e,n),yo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(vo,s.x),o.addScaledVector(xo,s.y),o.addScaledVector(yo,s.z),o}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),$n.subVectors(e,t),In.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),In.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,n),nr.subVectors(s,n),mo.subVectors(e,n);const c=tr.dot(mo),l=nr.dot(mo);if(c<=0&&l<=0)return t.copy(n);_o.subVectors(e,r);const h=tr.dot(_o),u=nr.dot(_o);if(h>=0&&u<=h)return t.copy(r);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(tr,o);go.subVectors(e,s);const m=tr.dot(go),_=nr.dot(go);if(_>=0&&m<=_)return t.copy(s);const x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(nr,a);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return Oc.subVectors(s,r),a=(u-h)/(u-h+(m-_)),t.copy(r).addScaledVector(Oc,a);const d=1/(p+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},hs={h:0,s:0,l:0};function So(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=Wh(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=So(o,s,e+1/3),this.g=So(o,s,e),this.b=So(o,s,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=An){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const n=id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return St.fromWorkingColorSpace($t.copy(this),e),Math.round(ut($t.r*255,0,255))*65536+Math.round(ut($t.g*255,0,255))*256+Math.round(ut($t.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace($t.copy(this),t);const n=$t.r,r=$t.g,s=$t.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=An){St.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,r=$t.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(hs);const n=io(pi.h,hs.h,t),r=io(pi.s,hs.s,t),s=io(pi.l,hs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Et;Et.NAMES=id;let lu=0;class Zr extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=mr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=Ko,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rd extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new V,us=new bt;let du=0;class Gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:du++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)us.fromBufferAttribute(this,t),us.applyMatrix3(e),this.setXY(t,us.x,us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vc&&(e.usage=this.usage),e}}class sd extends Gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class od extends Gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class oi extends Gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hu=0;const Sn=new Pt,Eo=new jt,ir=new V,pn=new jr,Pr=new jr,qt=new V;class Mi extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ed(e)?od:sd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Eo.lookAt(e),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oi(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(pn.min,Pr.min),pn.expandByPoint(qt),qt.addVectors(pn.max,Pr.max),pn.expandByPoint(qt)):(pn.expandByPoint(Pr.min),pn.expandByPoint(Pr.max))}pn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(qt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)qt.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(e,l),qt.add(ir)),r=Math.max(r,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new V,c[L]=new V;const l=new V,h=new V,u=new V,f=new bt,m=new bt,_=new bt,x=new V,p=new V;function d(L,M,S){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,M),_.fromBufferAttribute(s,S),h.sub(l),u.sub(l),m.sub(f),_.sub(f);const O=1/(m.x*_.y-_.x*m.y);isFinite(O)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(O),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(O),a[L].add(x),a[M].add(x),a[S].add(x),c[L].add(p),c[M].add(p),c[S].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,M=T.length;L<M;++L){const S=T[L],O=S.start,W=S.count;for(let H=O,j=O+W;H<j;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new V,E=new V,D=new V,R=new V;function C(L){D.fromBufferAttribute(r,L),R.copy(D);const M=a[L];b.copy(M),b.sub(D.multiplyScalar(D.dot(M))).normalize(),E.crossVectors(R,M);const O=E.dot(c[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,O)}for(let L=0,M=T.length;L<M;++L){const S=T[L],O=S.start,W=S.count;for(let H=O,j=O+W;H<j;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new V,s=new V,o=new V,a=new V,c=new V,l=new V,h=new V,u=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let m=0,_=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*h;for(let d=0;d<h;d++)f[_++]=l[m++]}return new Gn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dc=new Pt,Ii=new nu,fs=new Za,Lc=new V,ps=new V,ms=new V,_s=new V,Mo=new V,gs=new V,Pc=new V,vs=new V;class yn extends jt{constructor(e=new Mi,t=new rd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){gs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Mo.fromBufferAttribute(u,e),o?gs.addScaledVector(Mo,h):gs.addScaledVector(Mo.sub(t),h))}t.add(gs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(fs.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(fs,Lc)===null||Ii.origin.distanceToSquared(Lc)>(e.far-e.near)**2))&&(Dc.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(Dc),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],d=o[p.materialIndex],T=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,D=b;E<D;E+=3){const R=a.getX(E),C=a.getX(E+1),L=a.getX(E+2);r=xs(this,d,e,n,l,h,u,R,C,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,d=x;p<d;p+=3){const T=a.getX(p),b=a.getX(p+1),E=a.getX(p+2);r=xs(this,o,e,n,l,h,u,T,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const p=f[_],d=o[p.materialIndex],T=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,D=b;E<D;E+=3){const R=E,C=E+1,L=E+2;r=xs(this,d,e,n,l,h,u,R,C,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=_,d=x;p<d;p+=3){const T=p,b=p+1,E=p+2;r=xs(this,o,e,n,l,h,u,T,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function uu(i,e,t,n,r,s,o,a){let c;if(e.side===dn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Si,a),c===null)return null;vs.copy(a),vs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(vs);return l<t.near||l>t.far?null:{distance:l,point:vs.clone(),object:i}}function xs(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,ps),i.getVertexPosition(c,ms),i.getVertexPosition(l,_s);const h=uu(i,e,t,n,ps,ms,_s,Pc);if(h){const u=new V;Pn.getBarycoord(Pc,ps,ms,_s,u),r&&(h.uv=Pn.getInterpolatedAttribute(r,a,c,l,u,new bt)),s&&(h.uv1=Pn.getInterpolatedAttribute(s,a,c,l,u,new bt)),o&&(h.normal=Pn.getInterpolatedAttribute(o,a,c,l,u,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new V,materialIndex:0};Pn.getNormal(ps,ms,_s,f.normal),h.face=f,h.barycoord=u}return h}class bi extends Mi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new oi(l,3)),this.setAttribute("normal",new oi(h,3)),this.setAttribute("uv",new oi(u,2));function _(x,p,d,T,b,E,D,R,C,L,M){const S=E/C,O=D/L,W=E/2,H=D/2,j=R/2,re=C+1,Z=L+1;let se=0,q=0;const ge=new V;for(let Ae=0;Ae<Z;Ae++){const Ce=Ae*O-H;for(let Ze=0;Ze<re;Ze++){const Xe=Ze*S-W;ge[x]=Xe*T,ge[p]=Ce*b,ge[d]=j,l.push(ge.x,ge.y,ge.z),ge[x]=0,ge[p]=0,ge[d]=R>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(Ze/C),u.push(1-Ae/L),se+=1}}for(let Ae=0;Ae<L;Ae++)for(let Ce=0;Ce<C;Ce++){const Ze=f+Ce+re*Ae,Xe=f+Ce+re*(Ae+1),Q=f+(Ce+1)+re*(Ae+1),ce=f+(Ce+1)+re*Ae;c.push(Ze,Xe,ce),c.push(Xe,Q,ce),q+=6}a.addGroup(m,q,M),m+=q,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=Mr(i[t]);for(const r in n)e[r]=n[r]}return e}function fu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ad(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const pu={clone:Mr,merge:Jt};var mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=fu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cd extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new V,Nc=new bt,kc=new bt;class Rn extends cd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Nc,kc),t.subVectors(kc,Nc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class gu extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(rr,sr,e,t);r.layers=this.layers,this.add(r);const s=new Rn(rr,sr,e,t);s.layers=this.layers,this.add(s);const o=new Rn(rr,sr,e,t);o.layers=this.layers,this.add(o);const a=new Rn(rr,sr,e,t);a.layers=this.layers,this.add(a);const c=new Rn(rr,sr,e,t);c.layers=this.layers,this.add(c);const l=new Rn(rr,sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ld extends hn{constructor(e=[],t=yr,n,r,s,o,a,c,l,h){super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vu extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ld(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bi(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:xi});s.uniforms.tEquirect.value=t;const o=new yn(r,s),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=zn),new gu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class fr extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xu={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),d=this._getHandJoint(l,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xu)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Qa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=t,this.far=n}clone(){return new Qa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yu extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const To=new V,Su=new V,Eu=new nt;class ki{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=To.subVectors(n,t).cross(Su.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(To),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Eu.getNormalMatrix(e),r=this.coplanarPoint(To).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new Za,ys=new V;class Ja{constructor(e=new ki,t=new ki,n=new ki,r=new ki,s=new ki,o=new ki){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],f=r[7],m=r[8],_=r[9],x=r[10],p=r[11],d=r[12],T=r[13],b=r[14],E=r[15];if(n[0].setComponents(c-s,f-l,p-m,E-d).normalize(),n[1].setComponents(c+s,f+l,p+m,E+d).normalize(),n[2].setComponents(c+o,f+h,p+_,E+T).normalize(),n[3].setComponents(c-o,f-h,p-_,E-T).normalize(),n[4].setComponents(c-a,f-u,p-x,E-b).normalize(),t===ri)n[5].setComponents(c+a,f+u,p+x,E+b).normalize();else if(t===Vs)n[5].setComponents(a,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ys.x=r.normal.x>0?e.max.x:e.min.x,ys.y=r.normal.y>0?e.max.y:e.min.y,ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dd extends hn{constructor(e,t,n=Wi,r,s,o,a=kn,c=kn,l,h=Wr){if(h!==Wr&&h!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ja(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ks extends Mi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=e/a,f=t/c,m=[],_=[],x=[],p=[];for(let d=0;d<h;d++){const T=d*f-o;for(let b=0;b<l;b++){const E=b*u-s;_.push(E,-T,0),x.push(0,0,1),p.push(b/a),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let T=0;T<a;T++){const b=T+l*d,E=T+l*(d+1),D=T+1+l*(d+1),R=T+1+l*d;m.push(b,E,R),m.push(E,D,R)}this.setIndex(m),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(x,3)),this.setAttribute("uv",new oi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.widthSegments,e.heightSegments)}}class $s extends Zr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mu extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bu extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hd extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ao=new Pt,Uc=new V,Fc=new V;class Tu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Uc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),Ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ud extends cd{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Au extends Tu{constructor(){super(new ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ru extends hd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Au}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wu extends hd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cu extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Bc(i,e,t,n){const r=Iu(n);switch(t){case Xl:return i*e;case Yl:return i*e;case Kl:return i*e*2;case $l:return i*e/r.components*r.byteLength;case Ya:return i*e/r.components*r.byteLength;case jl:return i*e*2/r.components*r.byteLength;case Ka:return i*e*2/r.components*r.byteLength;case ql:return i*e*3/r.components*r.byteLength;case Nn:return i*e*4/r.components*r.byteLength;case $a:return i*e*4/r.components*r.byteLength;case Ds:case Ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:case la:return Math.max(i,16)*Math.max(e,8)/4;case oa:case ca:return Math.max(i,8)*Math.max(e,8)/2;case da:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ks:case Ra:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zl:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ia:case Oa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iu(i){switch(i){case ai:case Gl:return{byteLength:1,components:1};case Gr:case Vl:case Yr:return{byteLength:2,components:1};case Xa:case qa:return{byteLength:2,components:4};case Wi:case Wa:case ii:return{byteLength:4,components:1};case Wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ga);function fd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ou(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<u.length;m++){const _=u[f],x=u[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,u[f]=x)}u.length=f+1;for(let m=0,_=u.length;m<_;m++){const x=u[m];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lu=`#ifdef USE_ALPHAHASH
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
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zu=`#ifdef USE_BATCHING
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
#endif`,Hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
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
#endif`,qu=`#ifdef USE_BUMPMAP
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tf=`#define PI 3.141592653589793
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
} // validated`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yf=`#ifdef USE_GRADIENTMAP
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
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,If=`PhysicalMaterial material;
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
}`,Df=`
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gf=`#if defined( USE_POINTS_UV )
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
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qf=`#if defined( USE_MORPHCOLORS )
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
#endif`,Kf=`#ifdef USE_MORPHTARGETS
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
#endif`,$f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
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
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gp=`float getShadowMask() {
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
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,Ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const Dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
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
}`,Bp=`#if DEPTH_PACKING == 3200
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
}`,zp=`#define DISTANCE
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
}`,Hp=`#define DISTANCE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`uniform float scale;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,qp=`#include <common>
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
}`,Kp=`#define LAMBERT
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
}`,$p=`#define LAMBERT
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
}`,jp=`#define MATCAP
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
}`,Zp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,Jp=`#define NORMAL
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
}`,em=`#define PHONG
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
}`,tm=`#define PHONG
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
}`,nm=`#define STANDARD
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
}`,im=`#define STANDARD
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
}`,rm=`#define TOON
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
}`,sm=`#define TOON
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
}`,om=`uniform float size;
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
}`,am=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,lm=`uniform vec3 color;
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
}`,dm=`uniform float rotation;
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
}`,hm=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Du,alphahash_pars_fragment:Lu,alphamap_fragment:Pu,alphamap_pars_fragment:Nu,alphatest_fragment:ku,alphatest_pars_fragment:Uu,aomap_fragment:Fu,aomap_pars_fragment:Bu,batching_pars_vertex:zu,batching_vertex:Hu,begin_vertex:Gu,beginnormal_vertex:Vu,bsdfs:Wu,iridescence_fragment:Xu,bumpmap_pars_fragment:qu,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:$u,clipping_planes_vertex:ju,color_fragment:Zu,color_pars_fragment:Qu,color_pars_vertex:Ju,color_vertex:ef,common:tf,cube_uv_reflection_fragment:nf,defaultnormal_vertex:rf,displacementmap_pars_vertex:sf,displacementmap_vertex:of,emissivemap_fragment:af,emissivemap_pars_fragment:cf,colorspace_fragment:lf,colorspace_pars_fragment:df,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:ff,envmap_pars_vertex:pf,envmap_physical_pars_fragment:Tf,envmap_vertex:mf,fog_vertex:_f,fog_pars_vertex:gf,fog_fragment:vf,fog_pars_fragment:xf,gradientmap_pars_fragment:yf,lightmap_pars_fragment:Sf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:Mf,lights_pars_begin:bf,lights_toon_fragment:Af,lights_toon_pars_fragment:Rf,lights_phong_fragment:wf,lights_phong_pars_fragment:Cf,lights_physical_fragment:If,lights_physical_pars_fragment:Of,lights_fragment_begin:Df,lights_fragment_maps:Lf,lights_fragment_end:Pf,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Ff,map_fragment:Bf,map_pars_fragment:zf,map_particle_fragment:Hf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:Xf,morphcolor_vertex:qf,morphnormal_vertex:Yf,morphtarget_pars_vertex:Kf,morphtarget_vertex:$f,normal_fragment_begin:jf,normal_fragment_maps:Zf,normal_pars_fragment:Qf,normal_pars_vertex:Jf,normal_vertex:ep,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:rp,iridescence_pars_fragment:sp,opaque_fragment:op,packing:ap,premultiplied_alpha_fragment:cp,project_vertex:lp,dithering_fragment:dp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:_p,shadowmask_pars_fragment:gp,skinbase_vertex:vp,skinning_pars_vertex:xp,skinning_vertex:yp,skinnormal_vertex:Sp,specularmap_fragment:Ep,specularmap_pars_fragment:Mp,tonemapping_fragment:bp,tonemapping_pars_fragment:Tp,transmission_fragment:Ap,transmission_pars_fragment:Rp,uv_pars_fragment:wp,uv_pars_vertex:Cp,uv_vertex:Ip,worldpos_vertex:Op,background_vert:Dp,background_frag:Lp,backgroundCube_vert:Pp,backgroundCube_frag:Np,cube_vert:kp,cube_frag:Up,depth_vert:Fp,depth_frag:Bp,distanceRGBA_vert:zp,distanceRGBA_frag:Hp,equirect_vert:Gp,equirect_frag:Vp,linedashed_vert:Wp,linedashed_frag:Xp,meshbasic_vert:qp,meshbasic_frag:Yp,meshlambert_vert:Kp,meshlambert_frag:$p,meshmatcap_vert:jp,meshmatcap_frag:Zp,meshnormal_vert:Qp,meshnormal_frag:Jp,meshphong_vert:em,meshphong_frag:tm,meshphysical_vert:nm,meshphysical_frag:im,meshtoon_vert:rm,meshtoon_frag:sm,points_vert:om,points_frag:am,shadow_vert:cm,shadow_frag:lm,sprite_vert:dm,sprite_frag:hm},xe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Bn={basic:{uniforms:Jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Et(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Jt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Jt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Et(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Jt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Jt([xe.points,xe.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Jt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Jt([xe.common,xe.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Jt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Jt([xe.sprite,xe.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Jt([xe.common,xe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Jt([xe.lights,xe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Bn.physical={uniforms:Jt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ss={r:0,b:0,g:0},Di=new Vn,um=new Pt;function fm(i,e,t,n,r,s,o){const a=new Et(0);let c=s===!0?0:1,l,h,u=null,f=0,m=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function x(b){let E=!1;const D=_(b);D===null?d(a,c):D&&D.isColor&&(d(D,1),E=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,E){const D=_(E);D&&(D.isCubeTexture||D.mapping===Ys)?(h===void 0&&(h=new yn(new bi(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Mr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Di.copy(E.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(Di)),h.material.toneMapped=St.getTransfer(D.colorSpace)!==Ct,(u!==D||f!==D.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=D,f=D.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new yn(new Ks(2,2),new Ei({name:"BackgroundMaterial",uniforms:Mr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=St.getTransfer(D.colorSpace)!==Ct,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(u!==D||f!==D.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=D,f=D.version,m=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function d(b,E){b.getRGB(Ss,ad(i)),n.buffers.color.setClear(Ss.r,Ss.g,Ss.b,E,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),c=E,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,d(a,c)},render:x,addToRenderList:p,dispose:T}}function pm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(S,O,W,H,j){let re=!1;const Z=u(H,W,O);s!==Z&&(s=Z,l(s.object)),re=m(S,H,W,j),re&&_(S,H,W,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,E(S,O,W,H),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,O,W){const H=W.wireframe===!0;let j=n[S.id];j===void 0&&(j={},n[S.id]=j);let re=j[O.id];re===void 0&&(re={},j[O.id]=re);let Z=re[H];return Z===void 0&&(Z=f(c()),re[H]=Z),Z}function f(S){const O=[],W=[],H=[];for(let j=0;j<t;j++)O[j]=0,W[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:H,object:S,attributes:{},index:null}}function m(S,O,W,H){const j=s.attributes,re=O.attributes;let Z=0;const se=W.getAttributes();for(const q in se)if(se[q].location>=0){const Ae=j[q];let Ce=re[q];if(Ce===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Ce=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Ce=S.instanceColor)),Ae===void 0||Ae.attribute!==Ce||Ce&&Ae.data!==Ce.data)return!0;Z++}return s.attributesNum!==Z||s.index!==H}function _(S,O,W,H){const j={},re=O.attributes;let Z=0;const se=W.getAttributes();for(const q in se)if(se[q].location>=0){let Ae=re[q];Ae===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Ae=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Ae=S.instanceColor));const Ce={};Ce.attribute=Ae,Ae&&Ae.data&&(Ce.data=Ae.data),j[q]=Ce,Z++}s.attributes=j,s.attributesNum=Z,s.index=H}function x(){const S=s.newAttributes;for(let O=0,W=S.length;O<W;O++)S[O]=0}function p(S){d(S,0)}function d(S,O){const W=s.newAttributes,H=s.enabledAttributes,j=s.attributeDivisors;W[S]=1,H[S]===0&&(i.enableVertexAttribArray(S),H[S]=1),j[S]!==O&&(i.vertexAttribDivisor(S,O),j[S]=O)}function T(){const S=s.newAttributes,O=s.enabledAttributes;for(let W=0,H=O.length;W<H;W++)O[W]!==S[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function b(S,O,W,H,j,re,Z){Z===!0?i.vertexAttribIPointer(S,O,W,j,re):i.vertexAttribPointer(S,O,W,H,j,re)}function E(S,O,W,H){x();const j=H.attributes,re=W.getAttributes(),Z=O.defaultAttributeValues;for(const se in re){const q=re[se];if(q.location>=0){let ge=j[se];if(ge===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),ge!==void 0){const Ae=ge.normalized,Ce=ge.itemSize,Ze=e.get(ge);if(Ze===void 0)continue;const Xe=Ze.buffer,Q=Ze.type,ce=Ze.bytesPerElement,Ie=Q===i.INT||Q===i.UNSIGNED_INT||ge.gpuType===Wa;if(ge.isInterleavedBufferAttribute){const pe=ge.data,Ge=pe.stride,mt=ge.offset;if(pe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<q.locationSize;Ve++)d(q.location+Ve,pe.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ve=0;Ve<q.locationSize;Ve++)p(q.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ve=0;Ve<q.locationSize;Ve++)b(q.location+Ve,Ce/q.locationSize,Q,Ae,Ge*ce,(mt+Ce/q.locationSize*Ve)*ce,Ie)}else{if(ge.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)d(q.location+pe,ge.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let pe=0;pe<q.locationSize;pe++)p(q.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let pe=0;pe<q.locationSize;pe++)b(q.location+pe,Ce/q.locationSize,Q,Ae,Ce*ce,Ce/q.locationSize*pe*ce,Ie)}}else if(Z!==void 0){const Ae=Z[se];if(Ae!==void 0)switch(Ae.length){case 2:i.vertexAttrib2fv(q.location,Ae);break;case 3:i.vertexAttrib3fv(q.location,Ae);break;case 4:i.vertexAttrib4fv(q.location,Ae);break;default:i.vertexAttrib1fv(q.location,Ae)}}}}T()}function D(){L();for(const S in n){const O=n[S];for(const W in O){const H=O[W];for(const j in H)h(H[j].object),delete H[j];delete O[W]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const O=n[S.id];for(const W in O){const H=O[W];for(const j in H)h(H[j].object),delete H[j];delete O[W]}delete n[S.id]}function C(S){for(const O in n){const W=n[O];if(W[S.id]===void 0)continue;const H=W[S.id];for(const j in H)h(H[j].object),delete H[j];delete W[S.id]}}function L(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:T}}function mm(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];t.update(m,n,1)}function c(l,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x]*f[x];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function _m(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ai&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ii&&!L)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:D,maxSamples:R}}function gm(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ki,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||_===null||_.length===0||s&&!p)s?h(null):l();else{const T=s?0:n,b=T*4;let E=d.clippingState||null;c.value=E,E=h(_,f,b,m);for(let D=0;D!==b;++D)E[D]=t[D];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,_){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=c.value,_!==!0||p===null){const d=m+x*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,E=m;b!==x;++b,E+=4)o.copy(u[b]).applyMatrix4(T,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function vm(i){let e=new WeakMap;function t(o,a){return a===na?o.mapping=yr:a===ia&&(o.mapping=Sr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===na||a===ia)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new vu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const pr=4,zc=[.125,.215,.35,.446,.526,.582],zi=20,Ro=new ud,Hc=new Et;let wo=null,Co=0,Io=0,Oo=!1;const Ui=(1+Math.sqrt(5))/2,or=1/Ui,Gc=[new V(-Ui,or,0),new V(Ui,or,0),new V(-or,0,Ui),new V(or,0,Ui),new V(0,Ui,-or),new V(0,Ui,or),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],xm=new V;class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=xm}=s;wo=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,Co,Io),this._renderer.xr.enabled=Oo,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Yr,format:Nn,colorSpace:Er,depthBuffer:!1},r=Wc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ym(s)),this._blurMaterial=Sm(s,e,t)}return r}_compileMaterial(e){const t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,n,r,s){const c=new Rn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(Hc),u.toneMapping=yi,u.autoClear=!1;const _=new rd({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new yn(new bi,_);let p=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,p=!0):(_.color.copy(Hc),p=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):b===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));const E=this._cubeSize;Es(r,b*E,T>2?E:0,E,E),u.setRenderTarget(r),p&&u.render(x,c),u.render(e,c)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=m,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===yr||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Es(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ro)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Gc[(r-s-1)%Gc.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new yn(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zi-1),x=s/_,p=isFinite(s)?1+Math.floor(h*x):zi;p>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);const d=[];let T=0;for(let C=0;C<zi;++C){const L=C/x,M=Math.exp(-L*L/2);d.push(M),C===0?T+=M:C<p&&(T+=2*M)}for(let C=0;C<d.length;C++)d[C]=d[C]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;const E=this._sizeLods[r],D=3*E*(r>b-pr?r-b+pr:0),R=4*(this._cubeSize-E);Es(t,D,R,3*E,2*E),c.setRenderTarget(t),c.render(u,Ro)}}function ym(i){const e=[],t=[],n=[];let r=i;const s=i-pr+1+zc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-pr?c=zc[o-i+pr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,x=3,p=2,d=1,T=new Float32Array(x*_*m),b=new Float32Array(p*_*m),E=new Float32Array(d*_*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,L=R>2?0:-1,M=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];T.set(M,x*_*R),b.set(f,p*_*R);const S=[R,R,R,R,R,R];E.set(S,d*_*R)}const D=new Mi;D.setAttribute("position",new Gn(T,x)),D.setAttribute("uv",new Gn(b,p)),D.setAttribute("faceIndex",new Gn(E,d)),e.push(D),r>pr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wc(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Sm(i,e,t){const n=new Float32Array(zi),r=new V(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ec(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Xc(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function qc(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ec(){return`

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
	`}function Em(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===na||c===ia,h=c===yr||c===Sr;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Vc(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new Vc(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Mm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bm(i,e,t,n){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function l(u){const f=[],m=u.index,_=u.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let b=0,E=T.length;b<E;b+=3){const D=T[b+0],R=T[b+1],C=T[b+2];f.push(D,R,R,C,C,D)}}else if(_!==void 0){const T=_.array;x=_.version;for(let b=0,E=T.length/3-1;b<E;b+=3){const D=b+0,R=b+1,C=b+2;f.push(D,R,R,C,C,D)}}else return;const p=new(ed(f)?od:sd)(f,1);p.version=x;const d=s.get(u);d&&e.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Tm(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,s,f*o),t.update(m,n,1)}function l(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,f*o,_),t.update(m,n,_))}function h(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,n,1)}function u(f,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)l(f[d]/o,m[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,x,0,_);let d=0;for(let T=0;T<_;T++)d+=m[T]*x[T];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Am(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Rm(i,e,t){const n=new WeakMap,r=new Lt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let b=0;m===!0&&(b=1),_===!0&&(b=2),x===!0&&(b=3);let E=a.attributes.position.count*b,D=1;E>e.maxTextureSize&&(D=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*D*4*u),C=new td(R,E,D,u);C.type=ii,C.needsUpdate=!0;const L=b*4;for(let S=0;S<u;S++){const O=p[S],W=d[S],H=T[S],j=E*D*4*S;for(let re=0;re<O.count;re++){const Z=re*L;m===!0&&(r.fromBufferAttribute(O,re),R[j+Z+0]=r.x,R[j+Z+1]=r.y,R[j+Z+2]=r.z,R[j+Z+3]=0),_===!0&&(r.fromBufferAttribute(W,re),R[j+Z+4]=r.x,R[j+Z+5]=r.y,R[j+Z+6]=r.z,R[j+Z+7]=0),x===!0&&(r.fromBufferAttribute(H,re),R[j+Z+8]=r.x,R[j+Z+9]=r.y,R[j+Z+10]=r.z,R[j+Z+11]=H.itemSize===4?r.w:1)}}f={count:u,texture:C,size:new bt(E,D)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function wm(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const pd=new hn,Yc=new dd(1,1),md=new td,_d=new eu,gd=new ld,Kc=[],$c=[],jc=new Float32Array(16),Zc=new Float32Array(9),Qc=new Float32Array(4);function Tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Kc[r];if(s===void 0&&(s=new Float32Array(r),Kc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function js(i,e){let t=$c[e];t===void 0&&(t=new Int32Array(e),$c[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function Lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Qc.set(n),i.uniformMatrix2fv(this.addr,!1,Qc),Wt(t,n)}}function Pm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Zc.set(n),i.uniformMatrix3fv(this.addr,!1,Zc),Wt(t,n)}}function Nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;jc.set(n),i.uniformMatrix4fv(this.addr,!1,jc),Wt(t,n)}}function km(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function Wm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Yc.compareFunction=Jl,s=Yc):s=pd,t.setTexture2D(e||s,r)}function Xm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||_d,r)}function qm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||gd,r)}function Ym(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||md,r)}function Km(i){switch(i){case 5126:return Cm;case 35664:return Im;case 35665:return Om;case 35666:return Dm;case 35674:return Lm;case 35675:return Pm;case 35676:return Nm;case 5124:case 35670:return km;case 35667:case 35671:return Um;case 35668:case 35672:return Fm;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return Hm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}function $m(i,e){i.uniform1fv(this.addr,e)}function jm(i,e){const t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Zm(i,e){const t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function Qm(i,e){const t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function Jm(i,e){const t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function e_(i,e){const t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function t_(i,e){const t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function n_(i,e){i.uniform1iv(this.addr,e)}function i_(i,e){i.uniform2iv(this.addr,e)}function r_(i,e){i.uniform3iv(this.addr,e)}function s_(i,e){i.uniform4iv(this.addr,e)}function o_(i,e){i.uniform1uiv(this.addr,e)}function a_(i,e){i.uniform2uiv(this.addr,e)}function c_(i,e){i.uniform3uiv(this.addr,e)}function l_(i,e){i.uniform4uiv(this.addr,e)}function d_(i,e,t){const n=this.cache,r=e.length,s=js(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||pd,s[o])}function h_(i,e,t){const n=this.cache,r=e.length,s=js(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||_d,s[o])}function u_(i,e,t){const n=this.cache,r=e.length,s=js(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||gd,s[o])}function f_(i,e,t){const n=this.cache,r=e.length,s=js(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||md,s[o])}function p_(i){switch(i){case 5126:return $m;case 35664:return jm;case 35665:return Zm;case 35666:return Qm;case 35674:return Jm;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return r_;case 35669:case 35673:return s_;case 5125:return o_;case 36294:return a_;case 36295:return c_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return f_}}class m_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Km(t.type)}}class __{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p_(t.type)}}class g_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Do=/(\w+)(\])?(\[|\.)?/g;function Jc(i,e){i.seq.push(e),i.map[e.id]=e}function v_(i,e,t){const n=i.name,r=n.length;for(Do.lastIndex=0;;){const s=Do.exec(n),o=Do.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Jc(t,l===void 0?new m_(a,i,e):new __(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new g_(a),Jc(t,u)),t=u}}}class Fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);v_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function el(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const x_=37297;let y_=0;function S_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const tl=new nt;function E_(i){St._getMatrix(tl,St.workingColorSpace,i);const e=`mat3( ${tl.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(i)){case Gs:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+S_(i.getShaderSource(e),o)}else return r}function M_(i,e){const t=E_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function b_(i,e){let t;switch(e){case Ah:t="Linear";break;case Rh:t="Reinhard";break;case wh:t="Cineon";break;case Ch:t="ACESFilmic";break;case Oh:t="AgX";break;case Dh:t="Neutral";break;case Ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ms=new V;function T_(){St.getLuminanceCoefficients(Ms);const i=Ms.x.toFixed(4),e=Ms.y.toFixed(4),t=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function R_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Hr(i){return i!==""}function il(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(C_,O_)}const I_=new Map;function O_(i,e){let t=it[e];if(t===void 0){const n=I_.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return La(t)}const D_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(i){return i.replace(D_,L_)}function L_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ol(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function P_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function N_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case Sr:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Sr&&(e="ENVMAP_MODE_REFRACTION"),e}function U_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Va:e="ENVMAP_BLENDING_MULTIPLY";break;case bh:e="ENVMAP_BLENDING_MIX";break;case Th:e="ENVMAP_BLENDING_ADD";break}return e}function F_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function B_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=P_(t),l=N_(t),h=k_(t),u=U_(t),f=F_(t),m=A_(t),_=R_(s),x=r.createProgram();let p,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hr).join(`
`),d.length>0&&(d+=`
`)):(p=[ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),d=[ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?it.tonemapping_pars_fragment:"",t.toneMapping!==yi?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,M_("linearToOutputTexel",t.outputColorSpace),T_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),o=La(o),o=il(o,t),o=rl(o,t),a=La(a),a=il(a,t),a=rl(a,t),o=sl(o),a=sl(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=T+p+o,E=T+d+a,D=el(r,r.VERTEX_SHADER,b),R=el(r,r.FRAGMENT_SHADER,E);r.attachShader(x,D),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(O){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(D).trim(),j=r.getShaderInfoLog(R).trim();let re=!0,Z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,D,R);else{const se=nl(r,D,"vertex"),q=nl(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+W+`
`+se+`
`+q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||j==="")&&(Z=!1);Z&&(O.diagnostics={runnable:re,programLog:W,vertexShader:{log:H,prefix:p},fragmentShader:{log:j,prefix:d}})}r.deleteShader(D),r.deleteShader(R),L=new Fs(r,x),M=w_(r,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,x_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=R,this}let z_=0;class H_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new G_(e),t.set(e,n)),n}}class G_{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}}function V_(i,e,t,n,r,s,o){const a=new nd,c=new H_,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,S,O,W,H){const j=W.fog,re=H.geometry,Z=M.isMeshStandardMaterial?W.environment:null,se=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),q=se&&se.mapping===Ys?se.image.height:null,ge=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Ae=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ce=Ae!==void 0?Ae.length:0;let Ze=0;re.morphAttributes.position!==void 0&&(Ze=1),re.morphAttributes.normal!==void 0&&(Ze=2),re.morphAttributes.color!==void 0&&(Ze=3);let Xe,Q,ce,Ie;if(ge){const tt=Bn[ge];Xe=tt.vertexShader,Q=tt.fragmentShader}else Xe=M.vertexShader,Q=M.fragmentShader,c.update(M),ce=c.getVertexShaderID(M),Ie=c.getFragmentShaderID(M);const pe=i.getRenderTarget(),Ge=i.state.buffers.depth.getReversed(),mt=H.isInstancedMesh===!0,Ve=H.isBatchedMesh===!0,Rt=!!M.map,It=!!M.matcap,st=!!se,I=!!M.aoMap,rn=!!M.lightMap,lt=!!M.bumpMap,Qe=!!M.normalMap,Oe=!!M.displacementMap,Je=!!M.emissiveMap,De=!!M.metalnessMap,A=!!M.roughnessMap,v=M.anisotropy>0,F=M.clearcoat>0,ee=M.dispersion>0,ie=M.iridescence>0,$=M.sheen>0,ye=M.transmission>0,Ee=v&&!!M.anisotropyMap,Re=F&&!!M.clearcoatMap,at=F&&!!M.clearcoatNormalMap,J=F&&!!M.clearcoatRoughnessMap,fe=ie&&!!M.iridescenceMap,Fe=ie&&!!M.iridescenceThicknessMap,Ye=$&&!!M.sheenColorMap,_e=$&&!!M.sheenRoughnessMap,et=!!M.specularMap,je=!!M.specularColorMap,Tt=!!M.specularIntensityMap,P=ye&&!!M.transmissionMap,Se=ye&&!!M.thicknessMap,Y=!!M.gradientMap,te=!!M.alphaMap,Me=M.alphaTest>0,ve=!!M.alphaHash,Be=!!M.extensions;let ct=yi;M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ct=i.toneMapping);const Ht={shaderID:ge,shaderType:M.type,shaderName:M.name,vertexShader:Xe,fragmentShader:Q,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:Ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ve,batchingColor:Ve&&H._colorsTexture!==null,instancing:mt,instancingColor:mt&&H.instanceColor!==null,instancingMorph:mt&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Er,alphaToCoverage:!!M.alphaToCoverage,map:Rt,matcap:It,envMap:st,envMapMode:st&&se.mapping,envMapCubeUVHeight:q,aoMap:I,lightMap:rn,bumpMap:lt,normalMap:Qe,displacementMap:f&&Oe,emissiveMap:Je,normalMapObjectSpace:Qe&&M.normalMapType===kh,normalMapTangentSpace:Qe&&M.normalMapType===Ql,metalnessMap:De,roughnessMap:A,anisotropy:v,anisotropyMap:Ee,clearcoat:F,clearcoatMap:Re,clearcoatNormalMap:at,clearcoatRoughnessMap:J,dispersion:ee,iridescence:ie,iridescenceMap:fe,iridescenceThicknessMap:Fe,sheen:$,sheenColorMap:Ye,sheenRoughnessMap:_e,specularMap:et,specularColorMap:je,specularIntensityMap:Tt,transmission:ye,transmissionMap:P,thicknessMap:Se,gradientMap:Y,opaque:M.transparent===!1&&M.blending===mr&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:Me,alphaHash:ve,combine:M.combine,mapUv:Rt&&x(M.map.channel),aoMapUv:I&&x(M.aoMap.channel),lightMapUv:rn&&x(M.lightMap.channel),bumpMapUv:lt&&x(M.bumpMap.channel),normalMapUv:Qe&&x(M.normalMap.channel),displacementMapUv:Oe&&x(M.displacementMap.channel),emissiveMapUv:Je&&x(M.emissiveMap.channel),metalnessMapUv:De&&x(M.metalnessMap.channel),roughnessMapUv:A&&x(M.roughnessMap.channel),anisotropyMapUv:Ee&&x(M.anisotropyMap.channel),clearcoatMapUv:Re&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:at&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(M.sheenRoughnessMap.channel),specularMapUv:et&&x(M.specularMap.channel),specularColorMapUv:je&&x(M.specularColorMap.channel),specularIntensityMapUv:Tt&&x(M.specularIntensityMap.channel),transmissionMapUv:P&&x(M.transmissionMap.channel),thicknessMapUv:Se&&x(M.thicknessMap.channel),alphaMapUv:te&&x(M.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Qe||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!re.attributes.uv&&(Rt||te),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ge,skinning:H.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:Rt&&M.map.isVideoTexture===!0&&St.getTransfer(M.map.colorSpace)===Ct,decodeVideoTextureEmissive:Je&&M.emissiveMap.isVideoTexture===!0&&St.getTransfer(M.emissiveMap.colorSpace)===Ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ti,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&M.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)S.push(O),S.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(T(S,M),b(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function b(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function E(M){const S=_[M.type];let O;if(S){const W=Bn[S];O=pu.clone(W.uniforms)}else O=M.uniforms;return O}function D(M,S){let O;for(let W=0,H=h.length;W<H;W++){const j=h[W];if(j.cacheKey===S){O=j,++O.usedTimes;break}}return O===void 0&&(O=new B_(i,S,M,s),h.push(O)),O}function R(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function C(M){c.remove(M)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:D,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:L}}function W_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function X_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function al(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,f,m,_,x,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:x,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=x,d.group=p),e++,d}function a(u,f,m,_,x,p){const d=o(u,f,m,_,x,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function c(u,f,m,_,x,p){const d=o(u,f,m,_,x,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||X_),n.length>1&&n.sort(f||al),r.length>1&&r.sort(f||al)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function q_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new cl,i.set(n,[o])):r>=s.length?(o=new cl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Y_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Et};break;case"SpotLight":t={position:new V,direction:new V,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function K_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $_=0;function j_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Z_(i){const e=new Y_,t=K_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);const r=new V,s=new Pt,o=new Pt;function a(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,_=0,x=0,p=0,d=0,T=0,b=0,E=0,D=0,R=0,C=0;l.sort(j_);for(let M=0,S=l.length;M<S;M++){const O=l[M],W=O.color,H=O.intensity,j=O.distance,re=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=W.r*H,u+=W.g*H,f+=W.b*H;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(O.sh.coefficients[Z],H);C++}else if(O.isDirectionalLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const se=O.shadow,q=t.get(O);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=O.shadow.matrix,T++}n.directional[m]=Z,m++}else if(O.isSpotLight){const Z=e.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(W).multiplyScalar(H),Z.distance=j,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,n.spot[x]=Z;const se=O.shadow;if(O.map&&(n.spotLightMap[D]=O.map,D++,se.updateMatrices(O),O.castShadow&&R++),n.spotLightMatrix[x]=se.matrix,O.castShadow){const q=t.get(O);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=re,E++}x++}else if(O.isRectAreaLight){const Z=e.get(O);Z.color.copy(W).multiplyScalar(H),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),n.rectArea[p]=Z,p++}else if(O.isPointLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){const se=O.shadow,q=t.get(O);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,q.shadowCameraNear=se.camera.near,q.shadowCameraFar=se.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=re,n.pointShadowMatrix[_]=O.shadow.matrix,b++}n.point[_]=Z,_++}else if(O.isHemisphereLight){const Z=e.get(O);Z.skyColor.copy(O.color).multiplyScalar(H),Z.groundColor.copy(O.groundColor).multiplyScalar(H),n.hemi[d]=Z,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==T||L.numPointShadows!==b||L.numSpotShadows!==E||L.numSpotMaps!==D||L.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+D-R,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,L.directionalLength=m,L.pointLength=_,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=T,L.numPointShadows=b,L.numSpotShadows=E,L.numSpotMaps=D,L.numLightProbes=C,n.version=$_++)}function c(l,h){let u=0,f=0,m=0,_=0,x=0;const p=h.matrixWorldInverse;for(let d=0,T=l.length;d<T;d++){const b=l[d];if(b.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),u++}else if(b.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function ll(i){const e=new Z_(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Q_(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ll(i),e.set(r,[a])):s>=o.length?(a=new ll(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
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
}`;function t0(i,e,t){let n=new Ja;const r=new bt,s=new bt,o=new Lt,a=new Mu({depthPacking:Nh}),c=new bu,l={},h=t.maxTextureSize,u={[Si]:dn,[dn]:Si,[ti]:ti},f=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:J_,fragmentShader:e0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Mi;_.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new yn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let d=this.type;this.render=function(R,C,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),W=i.state;W.setBlending(xi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=d!==Qn&&this.type===Qn,j=d===Qn&&this.type!==Qn;for(let re=0,Z=R.length;re<Z;re++){const se=R[re],q=se.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ge=q.getFrameExtents();if(r.multiply(ge),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ge.x),r.x=s.x*ge.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ge.y),r.y=s.y*ge.y,q.mapSize.y=s.y)),q.map===null||H===!0||j===!0){const Ce=this.type!==Qn?{minFilter:kn,magFilter:kn}:{};q.map!==null&&q.map.dispose(),q.map=new Xi(r.x,r.y,Ce),q.map.texture.name=se.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const Ae=q.getViewportCount();for(let Ce=0;Ce<Ae;Ce++){const Ze=q.getViewport(Ce);o.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),W.viewport(o),q.updateMatrices(se,Ce),n=q.getFrustum(),E(C,L,q.camera,se,this.type)}q.isPointLightShadow!==!0&&this.type===Qn&&T(q,L),q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,S,O)};function T(R,C){const L=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xi(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,L,f,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,L,m,x,null)}function b(R,C,L,M){let S=null;const O=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)S=O;else if(S=L.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=S.uuid,H=C.uuid;let j=l[W];j===void 0&&(j={},l[W]=j);let re=j[H];re===void 0&&(re=S.clone(),j[H]=re,C.addEventListener("dispose",D)),S=re}if(S.visible=C.visible,S.wireframe=C.wireframe,M===Qn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=i.properties.get(S);W.light=L}return S}function E(R,C,L,M,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Qn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const H=e.update(R),j=R.material;if(Array.isArray(j)){const re=H.groups;for(let Z=0,se=re.length;Z<se;Z++){const q=re[Z],ge=j[q.materialIndex];if(ge&&ge.visible){const Ae=b(R,ge,M,S);R.onBeforeShadow(i,R,C,L,H,Ae,q),i.renderBufferDirect(L,null,H,Ae,R,q),R.onAfterShadow(i,R,C,L,H,Ae,q)}}}else if(j.visible){const re=b(R,j,M,S);R.onBeforeShadow(i,R,C,L,H,re,null),i.renderBufferDirect(L,null,H,re,R,null),R.onAfterShadow(i,R,C,L,H,re,null)}}const W=R.children;for(let H=0,j=W.length;H<j;H++)E(W[H],C,L,M,S)}function D(R){R.target.removeEventListener("dispose",D);for(const L in l){const M=l[L],S=R.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const n0={[$o]:jo,[Zo]:ea,[Qo]:ta,[xr]:Jo,[jo]:$o,[ea]:Zo,[ta]:Qo,[Jo]:xr};function i0(i,e){function t(){let P=!1;const Se=new Lt;let Y=null;const te=new Lt(0,0,0,0);return{setMask:function(Me){Y!==Me&&!P&&(i.colorMask(Me,Me,Me,Me),Y=Me)},setLocked:function(Me){P=Me},setClear:function(Me,ve,Be,ct,Ht){Ht===!0&&(Me*=ct,ve*=ct,Be*=ct),Se.set(Me,ve,Be,ct),te.equals(Se)===!1&&(i.clearColor(Me,ve,Be,ct),te.copy(Se))},reset:function(){P=!1,Y=null,te.set(-1,0,0,0)}}}function n(){let P=!1,Se=!1,Y=null,te=null,Me=null;return{setReversed:function(ve){if(Se!==ve){const Be=e.get("EXT_clip_control");ve?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Se=ve;const ct=Me;Me=null,this.setClear(ct)}},getReversed:function(){return Se},setTest:function(ve){ve?pe(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(ve){Y!==ve&&!P&&(i.depthMask(ve),Y=ve)},setFunc:function(ve){if(Se&&(ve=n0[ve]),te!==ve){switch(ve){case $o:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case Zo:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case Qo:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=ve}},setLocked:function(ve){P=ve},setClear:function(ve){Me!==ve&&(Se&&(ve=1-ve),i.clearDepth(ve),Me=ve)},reset:function(){P=!1,Y=null,te=null,Me=null,Se=!1}}}function r(){let P=!1,Se=null,Y=null,te=null,Me=null,ve=null,Be=null,ct=null,Ht=null;return{setTest:function(tt){P||(tt?pe(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(tt){Se!==tt&&!P&&(i.stencilMask(tt),Se=tt)},setFunc:function(tt,sn,un){(Y!==tt||te!==sn||Me!==un)&&(i.stencilFunc(tt,sn,un),Y=tt,te=sn,Me=un)},setOp:function(tt,sn,un){(ve!==tt||Be!==sn||ct!==un)&&(i.stencilOp(tt,sn,un),ve=tt,Be=sn,ct=un)},setLocked:function(tt){P=tt},setClear:function(tt){Ht!==tt&&(i.clearStencil(tt),Ht=tt)},reset:function(){P=!1,Se=null,Y=null,te=null,Me=null,ve=null,Be=null,ct=null,Ht=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,m=[],_=null,x=!1,p=null,d=null,T=null,b=null,E=null,D=null,R=null,C=new Et(0,0,0),L=0,M=!1,S=null,O=null,W=null,H=null,j=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,se=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=se>=1):q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=se>=2);let ge=null,Ae={};const Ce=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),Xe=new Lt().fromArray(Ce),Q=new Lt().fromArray(Ze);function ce(P,Se,Y,te){const Me=new Uint8Array(4),ve=i.createTexture();i.bindTexture(P,ve),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<Y;Be++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Se+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ve}const Ie={};Ie[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(xr),lt(!1),Qe(fc),pe(i.CULL_FACE),I(xi);function pe(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Ge(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function mt(P,Se){return u[P]!==Se?(i.bindFramebuffer(P,Se),u[P]=Se,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Se),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ve(P,Se){let Y=m,te=!1;if(P){Y=f.get(Se),Y===void 0&&(Y=[],f.set(Se,Y));const Me=P.textures;if(Y.length!==Me.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Be=Me.length;ve<Be;ve++)Y[ve]=i.COLOR_ATTACHMENT0+ve;Y.length=Me.length,te=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,te=!0);te&&i.drawBuffers(Y)}function Rt(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const It={[Bi]:i.FUNC_ADD,[ah]:i.FUNC_SUBTRACT,[ch]:i.FUNC_REVERSE_SUBTRACT};It[lh]=i.MIN,It[dh]=i.MAX;const st={[hh]:i.ZERO,[uh]:i.ONE,[fh]:i.SRC_COLOR,[Yo]:i.SRC_ALPHA,[xh]:i.SRC_ALPHA_SATURATE,[gh]:i.DST_COLOR,[mh]:i.DST_ALPHA,[ph]:i.ONE_MINUS_SRC_COLOR,[Ko]:i.ONE_MINUS_SRC_ALPHA,[vh]:i.ONE_MINUS_DST_COLOR,[_h]:i.ONE_MINUS_DST_ALPHA,[yh]:i.CONSTANT_COLOR,[Sh]:i.ONE_MINUS_CONSTANT_COLOR,[Eh]:i.CONSTANT_ALPHA,[Mh]:i.ONE_MINUS_CONSTANT_ALPHA};function I(P,Se,Y,te,Me,ve,Be,ct,Ht,tt){if(P===xi){x===!0&&(Ge(i.BLEND),x=!1);return}if(x===!1&&(pe(i.BLEND),x=!0),P!==oh){if(P!==p||tt!==M){if((d!==Bi||E!==Bi)&&(i.blendEquation(i.FUNC_ADD),d=Bi,E=Bi),tt)switch(P){case mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,b=null,D=null,R=null,C.set(0,0,0),L=0,p=P,M=tt}return}Me=Me||Se,ve=ve||Y,Be=Be||te,(Se!==d||Me!==E)&&(i.blendEquationSeparate(It[Se],It[Me]),d=Se,E=Me),(Y!==T||te!==b||ve!==D||Be!==R)&&(i.blendFuncSeparate(st[Y],st[te],st[ve],st[Be]),T=Y,b=te,D=ve,R=Be),(ct.equals(C)===!1||Ht!==L)&&(i.blendColor(ct.r,ct.g,ct.b,Ht),C.copy(ct),L=Ht),p=P,M=!1}function rn(P,Se){P.side===ti?Ge(i.CULL_FACE):pe(i.CULL_FACE);let Y=P.side===dn;Se&&(Y=!Y),lt(Y),P.blending===mr&&P.transparent===!1?I(xi):I(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);const te=P.stencilWrite;a.setTest(te),te&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Je(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(P){S!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),S=P)}function Qe(P){P!==ih?(pe(i.CULL_FACE),P!==O&&(P===fc?i.cullFace(i.BACK):P===rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),O=P}function Oe(P){P!==W&&(Z&&i.lineWidth(P),W=P)}function Je(P,Se,Y){P?(pe(i.POLYGON_OFFSET_FILL),(H!==Se||j!==Y)&&(i.polygonOffset(Se,Y),H=Se,j=Y)):Ge(i.POLYGON_OFFSET_FILL)}function De(P){P?pe(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function A(P){P===void 0&&(P=i.TEXTURE0+re-1),ge!==P&&(i.activeTexture(P),ge=P)}function v(P,Se,Y){Y===void 0&&(ge===null?Y=i.TEXTURE0+re-1:Y=ge);let te=Ae[Y];te===void 0&&(te={type:void 0,texture:void 0},Ae[Y]=te),(te.type!==P||te.texture!==Se)&&(ge!==Y&&(i.activeTexture(Y),ge=Y),i.bindTexture(P,Se||Ie[P]),te.type=P,te.texture=Se)}function F(){const P=Ae[ge];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(P){Xe.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Xe.copy(P))}function _e(P){Q.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Q.copy(P))}function et(P,Se){let Y=l.get(Se);Y===void 0&&(Y=new WeakMap,l.set(Se,Y));let te=Y.get(P);te===void 0&&(te=i.getUniformBlockIndex(Se,P.name),Y.set(P,te))}function je(P,Se){const te=l.get(Se).get(P);c.get(Se)!==te&&(i.uniformBlockBinding(Se,te,P.__bindingPointIndex),c.set(Se,te))}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ge=null,Ae={},u={},f=new WeakMap,m=[],_=null,x=!1,p=null,d=null,T=null,b=null,E=null,D=null,R=null,C=new Et(0,0,0),L=0,M=!1,S=null,O=null,W=null,H=null,j=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Ge,bindFramebuffer:mt,drawBuffers:Ve,useProgram:Rt,setBlending:I,setMaterial:rn,setFlipSided:lt,setCullFace:Qe,setLineWidth:Oe,setPolygonOffset:Je,setScissorTest:De,activeTexture:A,bindTexture:v,unbindTexture:F,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:fe,texImage3D:Fe,updateUBOMapping:et,uniformBlockBinding:je,texStorage2D:at,texStorage3D:J,texSubImage2D:$,texSubImage3D:ye,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Re,scissor:Ye,viewport:_e,reset:Tt}}function r0(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new bt,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,v){return m?new OffscreenCanvas(A,v):Ws("canvas")}function x(A,v,F){let ee=1;const ie=De(A);if((ie.width>F||ie.height>F)&&(ee=F/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(ee*ie.width),ye=Math.floor(ee*ie.height);u===void 0&&(u=_($,ye));const Ee=v?_($,ye):u;return Ee.width=$,Ee.height=ye,Ee.getContext("2d").drawImage(A,0,0,$,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+$+"x"+ye+")."),Ee}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function p(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,v,F,ee,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=v;if(v===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),v===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),v===i.RGBA){const ye=ie?Gs:St.getTransfer(ee);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=ye===Ct?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function E(A,v){let F;return A?v===null||v===Wi||v===Vr?F=i.DEPTH24_STENCIL8:v===ii?F=i.DEPTH32F_STENCIL8:v===Gr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wi||v===Vr?F=i.DEPTH_COMPONENT24:v===ii?F=i.DEPTH_COMPONENT32F:v===Gr&&(F=i.DEPTH_COMPONENT16),F}function D(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==kn&&A.minFilter!==zn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function R(A){const v=A.target;v.removeEventListener("dispose",R),L(v),v.isVideoTexture&&h.delete(v)}function C(A){const v=A.target;v.removeEventListener("dispose",C),S(v)}function L(A){const v=n.get(A);if(v.__webglInit===void 0)return;const F=A.source,ee=f.get(F);if(ee){const ie=ee[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(A),Object.keys(ee).length===0&&f.delete(F)}n.remove(A)}function M(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const F=A.source,ee=f.get(F);delete ee[v.__cacheKey],o.memory.textures--}function S(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(v.__webglFramebuffer[ee]))for(let ie=0;ie<v.__webglFramebuffer[ee].length;ie++)i.deleteFramebuffer(v.__webglFramebuffer[ee][ie]);else i.deleteFramebuffer(v.__webglFramebuffer[ee]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ee])}else{if(Array.isArray(v.__webglFramebuffer))for(let ee=0;ee<v.__webglFramebuffer.length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[ee]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ee=0;ee<v.__webglColorRenderbuffer.length;ee++)v.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ee]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=A.textures;for(let ee=0,ie=F.length;ee<ie;ee++){const $=n.get(F[ee]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(F[ee])}n.remove(A)}let O=0;function W(){O=0}function H(){const A=O;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),O+=1,A}function j(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function re(A,v){const F=n.get(A);if(A.isVideoTexture&&Oe(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(F,A,v);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function Z(A,v){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Q(F,A,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function se(A,v){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Q(F,A,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function q(A,v){const F=n.get(A);if(A.version>0&&F.__version!==A.version){ce(F,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const ge={[ra]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},Ae={[kn]:i.NEAREST,[Lh]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},Ce={[Uh]:i.NEVER,[Vh]:i.ALWAYS,[Fh]:i.LESS,[Jl]:i.LEQUAL,[Bh]:i.EQUAL,[Gh]:i.GEQUAL,[zh]:i.GREATER,[Hh]:i.NOTEQUAL};function Ze(A,v){if(v.type===ii&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===zn||v.magFilter===to||v.magFilter===is||v.magFilter===Vi||v.minFilter===zn||v.minFilter===to||v.minFilter===is||v.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ge[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ge[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ge[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ae[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ae[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===kn||v.minFilter!==is&&v.minFilter!==Vi||v.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Xe(A,v){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",R));const ee=v.source;let ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));const $=j(v);if($!==A.__cacheKey){ie[$]===void 0&&(ie[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ie[$].usedTimes++;const ye=ie[A.__cacheKey];ye!==void 0&&(ie[A.__cacheKey].usedTimes--,ye.usedTimes===0&&M(v)),A.__cacheKey=$,A.__webglTexture=ie[$].texture}return F}function Q(A,v,F){let ee=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=i.TEXTURE_3D);const ie=Xe(A,v),$=v.source;t.bindTexture(ee,A.__webglTexture,i.TEXTURE0+F);const ye=n.get($);if($.version!==ye.__version||ie===!0){t.activeTexture(i.TEXTURE0+F);const Ee=St.getPrimaries(St.workingColorSpace),Re=v.colorSpace===vi?null:St.getPrimaries(v.colorSpace),at=v.colorSpace===vi||Ee===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let J=x(v.image,!1,r.maxTextureSize);J=Je(v,J);const fe=s.convert(v.format,v.colorSpace),Fe=s.convert(v.type);let Ye=b(v.internalFormat,fe,Fe,v.colorSpace,v.isVideoTexture);Ze(ee,v);let _e;const et=v.mipmaps,je=v.isVideoTexture!==!0,Tt=ye.__version===void 0||ie===!0,P=$.dataReady,Se=D(v,J);if(v.isDepthTexture)Ye=E(v.format===Xr,v.type),Tt&&(je?t.texStorage2D(i.TEXTURE_2D,1,Ye,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Ye,J.width,J.height,0,fe,Fe,null));else if(v.isDataTexture)if(et.length>0){je&&Tt&&t.texStorage2D(i.TEXTURE_2D,Se,Ye,et[0].width,et[0].height);for(let Y=0,te=et.length;Y<te;Y++)_e=et[Y],je?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,_e.width,_e.height,fe,Fe,_e.data):t.texImage2D(i.TEXTURE_2D,Y,Ye,_e.width,_e.height,0,fe,Fe,_e.data);v.generateMipmaps=!1}else je?(Tt&&t.texStorage2D(i.TEXTURE_2D,Se,Ye,J.width,J.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,fe,Fe,J.data)):t.texImage2D(i.TEXTURE_2D,0,Ye,J.width,J.height,0,fe,Fe,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){je&&Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ye,et[0].width,et[0].height,J.depth);for(let Y=0,te=et.length;Y<te;Y++)if(_e=et[Y],v.format!==Nn)if(fe!==null)if(je){if(P)if(v.layerUpdates.size>0){const Me=Bc(_e.width,_e.height,v.format,v.type);for(const ve of v.layerUpdates){const Be=_e.data.subarray(ve*Me/_e.data.BYTES_PER_ELEMENT,(ve+1)*Me/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ve,_e.width,_e.height,1,fe,Be)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,J.depth,fe,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ye,_e.width,_e.height,J.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,J.depth,fe,Fe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ye,_e.width,_e.height,J.depth,0,fe,Fe,_e.data)}else{je&&Tt&&t.texStorage2D(i.TEXTURE_2D,Se,Ye,et[0].width,et[0].height);for(let Y=0,te=et.length;Y<te;Y++)_e=et[Y],v.format!==Nn?fe!==null?je?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,_e.width,_e.height,fe,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Ye,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,_e.width,_e.height,fe,Fe,_e.data):t.texImage2D(i.TEXTURE_2D,Y,Ye,_e.width,_e.height,0,fe,Fe,_e.data)}else if(v.isDataArrayTexture)if(je){if(Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ye,J.width,J.height,J.depth),P)if(v.layerUpdates.size>0){const Y=Bc(J.width,J.height,v.format,v.type);for(const te of v.layerUpdates){const Me=J.data.subarray(te*Y/J.data.BYTES_PER_ELEMENT,(te+1)*Y/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,J.width,J.height,1,fe,Fe,Me)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,fe,Fe,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,J.width,J.height,J.depth,0,fe,Fe,J.data);else if(v.isData3DTexture)je?(Tt&&t.texStorage3D(i.TEXTURE_3D,Se,Ye,J.width,J.height,J.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,fe,Fe,J.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,J.width,J.height,J.depth,0,fe,Fe,J.data);else if(v.isFramebufferTexture){if(Tt)if(je)t.texStorage2D(i.TEXTURE_2D,Se,Ye,J.width,J.height);else{let Y=J.width,te=J.height;for(let Me=0;Me<Se;Me++)t.texImage2D(i.TEXTURE_2D,Me,Ye,Y,te,0,fe,Fe,null),Y>>=1,te>>=1}}else if(et.length>0){if(je&&Tt){const Y=De(et[0]);t.texStorage2D(i.TEXTURE_2D,Se,Ye,Y.width,Y.height)}for(let Y=0,te=et.length;Y<te;Y++)_e=et[Y],je?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,fe,Fe,_e):t.texImage2D(i.TEXTURE_2D,Y,Ye,fe,Fe,_e);v.generateMipmaps=!1}else if(je){if(Tt){const Y=De(J);t.texStorage2D(i.TEXTURE_2D,Se,Ye,Y.width,Y.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Fe,J)}else t.texImage2D(i.TEXTURE_2D,0,Ye,fe,Fe,J);p(v)&&d(ee),ye.__version=$.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ce(A,v,F){if(v.image.length!==6)return;const ee=Xe(A,v),ie=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const $=n.get(ie);if(ie.version!==$.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);const ye=St.getPrimaries(St.workingColorSpace),Ee=v.colorSpace===vi?null:St.getPrimaries(v.colorSpace),Re=v.colorSpace===vi||ye===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const at=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let te=0;te<6;te++)!at&&!J?fe[te]=x(v.image[te],!0,r.maxCubemapSize):fe[te]=J?v.image[te].image:v.image[te],fe[te]=Je(v,fe[te]);const Fe=fe[0],Ye=s.convert(v.format,v.colorSpace),_e=s.convert(v.type),et=b(v.internalFormat,Ye,_e,v.colorSpace),je=v.isVideoTexture!==!0,Tt=$.__version===void 0||ee===!0,P=ie.dataReady;let Se=D(v,Fe);Ze(i.TEXTURE_CUBE_MAP,v);let Y;if(at){je&&Tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,et,Fe.width,Fe.height);for(let te=0;te<6;te++){Y=fe[te].mipmaps;for(let Me=0;Me<Y.length;Me++){const ve=Y[Me];v.format!==Nn?Ye!==null?je?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ve.width,ve.height,Ye,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,et,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ve.width,ve.height,Ye,_e,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,et,ve.width,ve.height,0,Ye,_e,ve.data)}}}else{if(Y=v.mipmaps,je&&Tt){Y.length>0&&Se++;const te=De(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,et,te.width,te.height)}for(let te=0;te<6;te++)if(J){je?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,fe[te].width,fe[te].height,Ye,_e,fe[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,fe[te].width,fe[te].height,0,Ye,_e,fe[te].data);for(let Me=0;Me<Y.length;Me++){const Be=Y[Me].image[te].image;je?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,Be.width,Be.height,Ye,_e,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,et,Be.width,Be.height,0,Ye,_e,Be.data)}}else{je?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ye,_e,fe[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,Ye,_e,fe[te]);for(let Me=0;Me<Y.length;Me++){const ve=Y[Me];je?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,Ye,_e,ve.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,et,Ye,_e,ve.image[te])}}}p(v)&&d(i.TEXTURE_CUBE_MAP),$.__version=ie.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Ie(A,v,F,ee,ie,$){const ye=s.convert(F.format,F.colorSpace),Ee=s.convert(F.type),Re=b(F.internalFormat,ye,Ee,F.colorSpace),at=n.get(v),J=n.get(F);if(J.__renderTarget=v,!at.__hasExternalTextures){const fe=Math.max(1,v.width>>$),Fe=Math.max(1,v.height>>$);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,$,Re,fe,Fe,v.depth,0,ye,Ee,null):t.texImage2D(ie,$,Re,fe,Fe,0,ye,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Qe(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,ie,J.__webglTexture,0,lt(v)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,ie,J.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(A,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const ee=v.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,$=E(v.stencilBuffer,ie),ye=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=lt(v);Qe(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,$,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,A)}else{const ee=v.textures;for(let ie=0;ie<ee.length;ie++){const $=ee[ie],ye=s.convert($.format,$.colorSpace),Ee=s.convert($.type),Re=b($.internalFormat,ye,Ee,$.colorSpace),at=lt(v);F&&Qe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Re,v.width,v.height):Qe(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Re,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Re,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(v.depthTexture);ee.__renderTarget=v,(!ee.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),re(v.depthTexture,0);const ie=ee.__webglTexture,$=lt(v);if(v.depthTexture.format===Wr)Qe(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(v.depthTexture.format===Xr)Qe(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function mt(A){const v=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const ee=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ee){const ie=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),v.__depthDisposeCallback=ie}v.__boundDepthTexture=ee}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ge(v.__webglFramebuffer,A)}else if(F){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]===void 0)v.__webglDepthbuffer[ee]=i.createRenderbuffer(),pe(v.__webglDepthbuffer[ee],A,!1);else{const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),pe(v.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(A,v,F){const ee=n.get(A);v!==void 0&&Ie(ee.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&mt(A)}function Rt(A){const v=A.texture,F=n.get(A),ee=n.get(v);A.addEventListener("dispose",C);const ie=A.textures,$=A.isWebGLCubeRenderTarget===!0,ye=ie.length>1;if(ye||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=v.version,o.memory.textures++),$){F.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[Ee]=[];for(let Re=0;Re<v.mipmaps.length;Re++)F.__webglFramebuffer[Ee][Re]=i.createFramebuffer()}else F.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let Ee=0;Ee<v.mipmaps.length;Ee++)F.__webglFramebuffer[Ee]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ye)for(let Ee=0,Re=ie.length;Ee<Re;Ee++){const at=n.get(ie[Ee]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Qe(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ie.length;Ee++){const Re=ie[Ee];F.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Ee]);const at=s.convert(Re.format,Re.colorSpace),J=s.convert(Re.type),fe=b(Re.internalFormat,at,J,Re.colorSpace,A.isXRRenderTarget===!0),Fe=lt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,fe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,F.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,v);for(let Ee=0;Ee<6;Ee++)if(v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)Ie(F.__webglFramebuffer[Ee][Re],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Re);else Ie(F.__webglFramebuffer[Ee],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);p(v)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let Ee=0,Re=ie.length;Ee<Re;Ee++){const at=ie[Ee],J=n.get(at);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),Ze(i.TEXTURE_2D,at),Ie(F.__webglFramebuffer,A,at,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),p(at)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ee.__webglTexture),Ze(Ee,v),v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)Ie(F.__webglFramebuffer[Re],A,v,i.COLOR_ATTACHMENT0,Ee,Re);else Ie(F.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,Ee,0);p(v)&&d(Ee),t.unbindTexture()}A.depthBuffer&&mt(A)}function It(A){const v=A.textures;for(let F=0,ee=v.length;F<ee;F++){const ie=v[F];if(p(ie)){const $=T(A),ye=n.get(ie).__webglTexture;t.bindTexture($,ye),d($),t.unbindTexture()}}}const st=[],I=[];function rn(A){if(A.samples>0){if(Qe(A)===!1){const v=A.textures,F=A.width,ee=A.height;let ie=i.COLOR_BUFFER_BIT;const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(A),Ee=v.length>1;if(Ee)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),Ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Re]);const at=n.get(v[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,F,ee,0,0,F,ee,ie,i.NEAREST),c===!0&&(st.length=0,I.length=0,st.push(i.COLOR_ATTACHMENT0+Re),A.depthBuffer&&A.resolveDepthBuffer===!1&&(st.push($),I.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Re]);const at=n.get(v[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,at,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function lt(A){return Math.min(r.maxSamples,A.samples)}function Qe(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Oe(A){const v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Je(A,v){const F=A.colorSpace,ee=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Er&&F!==vi&&(St.getTransfer(F)===Ct?(ee!==Nn||ie!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function De(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=se,this.setTextureCube=q,this.rebindTextures=Ve,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Qe}function s0(i,e){function t(n,r=vi){let s;const o=St.getTransfer(r);if(n===ai)return i.UNSIGNED_BYTE;if(n===Xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gl)return i.BYTE;if(n===Vl)return i.SHORT;if(n===Gr)return i.UNSIGNED_SHORT;if(n===Wa)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===Yr)return i.HALF_FLOAT;if(n===Xl)return i.ALPHA;if(n===ql)return i.RGB;if(n===Nn)return i.RGBA;if(n===Yl)return i.LUMINANCE;if(n===Kl)return i.LUMINANCE_ALPHA;if(n===Wr)return i.DEPTH_COMPONENT;if(n===Xr)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===Ya)return i.RED_INTEGER;if(n===jl)return i.RG;if(n===Ka)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===Ds||n===Ls||n===Ps||n===Ns)if(o===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ds)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ds)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ns)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oa||n===aa||n===ca||n===la)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===oa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===aa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ca)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===da||n===ha||n===ua)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===da||n===ha)return o===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ua)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fa||n===pa||n===ma||n===_a||n===ga||n===va||n===xa||n===ya||n===Sa||n===Ea||n===Ma||n===ba||n===Ta||n===Aa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fa)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pa)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ma)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_a)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ga)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===va)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xa)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ya)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ba)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ta)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Aa)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ks||n===Ra||n===wa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ks)return o===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ra)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Ca||n===Ia||n===Oa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ks)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ia)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const o0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a0=`
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

}`;class c0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new hn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ei({vertexShader:o0,fragmentShader:a0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new Ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l0 extends br{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,_=null;const x=new c0,p=t.getContextAttributes();let d=null,T=null;const b=[],E=[],D=new bt;let R=null;const C=new Rn;C.viewport=new Lt;const L=new Rn;L.viewport=new Lt;const M=[C,L],S=new Cu;let O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=b[Q];return ce===void 0&&(ce=new bo,b[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=b[Q];return ce===void 0&&(ce=new bo,b[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=b[Q];return ce===void 0&&(ce=new bo,b[Q]=ce),ce.getHandSpace()};function H(Q){const ce=E.indexOf(Q.inputSource);if(ce===-1)return;const Ie=b[ce];Ie!==void 0&&(Ie.update(Q.inputSource,Q.frame,l||o),Ie.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",re);for(let Q=0;Q<b.length;Q++){const ce=E[Q];ce!==null&&(E[Q]=null,b[Q].disconnect(ce))}O=null,W=null,x.reset(),e.setRenderTarget(d),m=null,f=null,u=null,r=null,T=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",re),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,pe=null,Ge=null;p.depth&&(Ge=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=p.stencil?Xr:Wr,pe=p.stencil?Vr:Wi);const mt={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(mt),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Xi(f.textureWidth,f.textureHeight,{format:Nn,type:ai,depthTexture:new dd(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Xi(m.framebufferWidth,m.framebufferHeight,{format:Nn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function re(Q){for(let ce=0;ce<Q.removed.length;ce++){const Ie=Q.removed[ce],pe=E.indexOf(Ie);pe>=0&&(E[pe]=null,b[pe].disconnect(Ie))}for(let ce=0;ce<Q.added.length;ce++){const Ie=Q.added[ce];let pe=E.indexOf(Ie);if(pe===-1){for(let mt=0;mt<b.length;mt++)if(mt>=E.length){E.push(Ie),pe=mt;break}else if(E[mt]===null){E[mt]=Ie,pe=mt;break}if(pe===-1)break}const Ge=b[pe];Ge&&Ge.connect(Ie)}}const Z=new V,se=new V;function q(Q,ce,Ie){Z.setFromMatrixPosition(ce.matrixWorld),se.setFromMatrixPosition(Ie.matrixWorld);const pe=Z.distanceTo(se),Ge=ce.projectionMatrix.elements,mt=Ie.projectionMatrix.elements,Ve=Ge[14]/(Ge[10]-1),Rt=Ge[14]/(Ge[10]+1),It=(Ge[9]+1)/Ge[5],st=(Ge[9]-1)/Ge[5],I=(Ge[8]-1)/Ge[0],rn=(mt[8]+1)/mt[0],lt=Ve*I,Qe=Ve*rn,Oe=pe/(-I+rn),Je=Oe*-I;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Je),Q.translateZ(Oe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ge[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const De=Ve+Oe,A=Rt+Oe,v=lt-Je,F=Qe+(pe-Je),ee=It*Rt/A*De,ie=st*Rt/A*De;Q.projectionMatrix.makePerspective(v,F,ee,ie,De,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ge(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ce=Q.near,Ie=Q.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(Ie=x.depthFar)),S.near=L.near=C.near=ce,S.far=L.far=C.far=Ie,(O!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),O=S.near,W=S.far),C.layers.mask=Q.layers.mask|2,L.layers.mask=Q.layers.mask|4,S.layers.mask=C.layers.mask|L.layers.mask;const pe=Q.parent,Ge=S.cameras;ge(S,pe);for(let mt=0;mt<Ge.length;mt++)ge(Ge[mt],pe);Ge.length===2?q(S,C,L):S.projectionMatrix.copy(C.projectionMatrix),Ae(Q,S,pe)};function Ae(Q,ce,Ie){Ie===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(Ie.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Da*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Ce=null;function Ze(Q,ce){if(h=ce.getViewerPose(l||o),_=ce,h!==null){const Ie=h.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let pe=!1;Ie.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let Ve=0;Ve<Ie.length;Ve++){const Rt=Ie[Ve];let It=null;if(m!==null)It=m.getViewport(Rt);else{const I=u.getViewSubImage(f,Rt);It=I.viewport,Ve===0&&(e.setRenderTargetTextures(T,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(T))}let st=M[Ve];st===void 0&&(st=new Rn,st.layers.enable(Ve),st.viewport=new Lt,M[Ve]=st),st.matrix.fromArray(Rt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Rt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(It.x,It.y,It.width,It.height),Ve===0&&(S.matrix.copy(st.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(st)}const Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const Ve=u.getDepthInformation(Ie[0]);Ve&&Ve.isValid&&Ve.texture&&x.init(e,Ve,r.renderState)}}for(let Ie=0;Ie<b.length;Ie++){const pe=E[Ie],Ge=b[Ie];pe!==null&&Ge!==void 0&&Ge.update(pe,ce,l||o)}Ce&&Ce(Q,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),_=null}const Xe=new fd;Xe.setAnimationLoop(Ze),this.setAnimationLoop=function(Q){Ce=Q},this.dispose=function(){}}}const Li=new Vn,d0=new Pt;function h0(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,ad(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,T,b,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),x(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?c(p,d,T,b):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===dn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===dn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const T=e.get(d),b=T.envMap,E=T.envMapRotation;b&&(p.envMap.value=b,Li.copy(E),Li.x*=-1,Li.y*=-1,Li.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),p.envMapRotation.value.setFromMatrix4(d0.makeRotationFromEuler(Li)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,T,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*T,p.scale.value=b*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,T){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const T=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function u0(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){const E=b.program;n.uniformBlockBinding(T,E)}function l(T,b){let E=r[T.id];E===void 0&&(_(T),E=h(T),r[T.id]=E,T.addEventListener("dispose",p));const D=b.program;n.updateUBOMapping(T,D);const R=e.render.frame;s[T.id]!==R&&(f(T),s[T.id]=R)}function h(T){const b=u();T.__bindingPointIndex=b;const E=i.createBuffer(),D=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,D,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const b=r[T.id],E=T.uniforms,D=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,C=E.length;R<C;R++){const L=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,S=L.length;M<S;M++){const O=L[M];if(m(O,R,M,D)===!0){const W=O.__offset,H=Array.isArray(O.value)?O.value:[O.value];let j=0;for(let re=0;re<H.length;re++){const Z=H[re],se=x(Z);typeof Z=="number"||typeof Z=="boolean"?(O.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,W+j,O.__data)):Z.isMatrix3?(O.__data[0]=Z.elements[0],O.__data[1]=Z.elements[1],O.__data[2]=Z.elements[2],O.__data[3]=0,O.__data[4]=Z.elements[3],O.__data[5]=Z.elements[4],O.__data[6]=Z.elements[5],O.__data[7]=0,O.__data[8]=Z.elements[6],O.__data[9]=Z.elements[7],O.__data[10]=Z.elements[8],O.__data[11]=0):(Z.toArray(O.__data,j),j+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,b,E,D){const R=T.value,C=b+"_"+E;if(D[C]===void 0)return typeof R=="number"||typeof R=="boolean"?D[C]=R:D[C]=R.clone(),!0;{const L=D[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return D[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function _(T){const b=T.uniforms;let E=0;const D=16;for(let C=0,L=b.length;C<L;C++){const M=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,O=M.length;S<O;S++){const W=M[S],H=Array.isArray(W.value)?W.value:[W.value];for(let j=0,re=H.length;j<re;j++){const Z=H[j],se=x(Z),q=E%D,ge=q%se.boundary,Ae=q+ge;E+=ge,Ae!==0&&D-Ae<se.storage&&(E+=D-Ae),W.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=se.storage}}}const R=E%D;return R>0&&(E+=D-R),T.__size=E,T.__cache={},this}function x(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function p(T){const b=T.target;b.removeEventListener("dispose",p);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class f0{constructor(e={}){const{canvas:t=Xh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),x=new Int32Array(4);let p=null,d=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let D=!1;this._outputColorSpace=An;let R=0,C=0,L=null,M=-1,S=null;const O=new Lt,W=new Lt;let H=null;const j=new Et(0);let re=0,Z=t.width,se=t.height,q=1,ge=null,Ae=null;const Ce=new Lt(0,0,Z,se),Ze=new Lt(0,0,Z,se);let Xe=!1;const Q=new Ja;let ce=!1,Ie=!1;const pe=new Pt,Ge=new Pt,mt=new V,Ve=new Lt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function st(){return L===null?q:1}let I=n;function rn(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ga}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ve,!1),I===null){const N="webgl2";if(I=rn(N,y),I===null)throw rn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let lt,Qe,Oe,Je,De,A,v,F,ee,ie,$,ye,Ee,Re,at,J,fe,Fe,Ye,_e,et,je,Tt,P;function Se(){lt=new Mm(I),lt.init(),je=new s0(I,lt),Qe=new _m(I,lt,e,je),Oe=new i0(I,lt),Qe.reverseDepthBuffer&&f&&Oe.buffers.depth.setReversed(!0),Je=new Am(I),De=new W_,A=new r0(I,lt,Oe,De,Qe,je,Je),v=new vm(E),F=new Em(E),ee=new Ou(I),Tt=new pm(I,ee),ie=new bm(I,ee,Je,Tt),$=new wm(I,ie,ee,Je),Ye=new Rm(I,Qe,A),J=new gm(De),ye=new V_(E,v,F,lt,Qe,Tt,J),Ee=new h0(E,De),Re=new q_,at=new Q_(lt),Fe=new fm(E,v,F,Oe,$,m,c),fe=new t0(E,$,Qe),P=new u0(I,Je,Qe,Oe),_e=new mm(I,lt,Je),et=new Tm(I,lt,Je),Je.programs=ye.programs,E.capabilities=Qe,E.extensions=lt,E.properties=De,E.renderLists=Re,E.shadowMap=fe,E.state=Oe,E.info=Je}Se();const Y=new l0(E,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=lt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=lt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(Z,se,!1))},this.getSize=function(y){return y.set(Z,se)},this.setSize=function(y,N,z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,se=N,t.width=Math.floor(y*q),t.height=Math.floor(N*q),z===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(Z*q,se*q).floor()},this.setDrawingBufferSize=function(y,N,z){Z=y,se=N,q=z,t.width=Math.floor(y*z),t.height=Math.floor(N*z),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(O)},this.getViewport=function(y){return y.copy(Ce)},this.setViewport=function(y,N,z,G){y.isVector4?Ce.set(y.x,y.y,y.z,y.w):Ce.set(y,N,z,G),Oe.viewport(O.copy(Ce).multiplyScalar(q).round())},this.getScissor=function(y){return y.copy(Ze)},this.setScissor=function(y,N,z,G){y.isVector4?Ze.set(y.x,y.y,y.z,y.w):Ze.set(y,N,z,G),Oe.scissor(W.copy(Ze).multiplyScalar(q).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(y){Oe.setScissorTest(Xe=y)},this.setOpaqueSort=function(y){ge=y},this.setTransparentSort=function(y){Ae=y},this.getClearColor=function(y){return y.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,z=!0){let G=0;if(y){let k=!1;if(L!==null){const oe=L.texture.format;k=oe===$a||oe===Ka||oe===Ya}if(k){const oe=L.texture.type,me=oe===ai||oe===Wi||oe===Gr||oe===Vr||oe===Xa||oe===qa,Te=Fe.getClearColor(),we=Fe.getClearAlpha(),We=Te.r,He=Te.g,ke=Te.b;me?(_[0]=We,_[1]=He,_[2]=ke,_[3]=we,I.clearBufferuiv(I.COLOR,0,_)):(x[0]=We,x[1]=He,x[2]=ke,x[3]=we,I.clearBufferiv(I.COLOR,0,x))}else G|=I.COLOR_BUFFER_BIT}N&&(G|=I.DEPTH_BUFFER_BIT),z&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Fe.dispose(),Re.dispose(),at.dispose(),De.dispose(),v.dispose(),F.dispose(),$.dispose(),Tt.dispose(),P.dispose(),ye.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Xt),Y.removeEventListener("sessionend",Qr),Wn.stop()};function te(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const y=Je.autoReset,N=fe.enabled,z=fe.autoUpdate,G=fe.needsUpdate,k=fe.type;Se(),Je.autoReset=y,fe.enabled=N,fe.autoUpdate=z,fe.needsUpdate=G,fe.type=k}function ve(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Be(y){const N=y.target;N.removeEventListener("dispose",Be),ct(N)}function ct(y){Ht(y),De.remove(y)}function Ht(y){const N=De.get(y).programs;N!==void 0&&(N.forEach(function(z){ye.releaseProgram(z)}),y.isShaderMaterial&&ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,z,G,k,oe){N===null&&(N=Rt);const me=k.isMesh&&k.matrixWorld.determinant()<0,Te=ts(y,N,z,G,k);Oe.setMaterial(G,me);let we=z.index,We=1;if(G.wireframe===!0){if(we=ie.getWireframeAttribute(z),we===void 0)return;We=2}const He=z.drawRange,ke=z.attributes.position;let dt=He.start*We,_t=(He.start+He.count)*We;oe!==null&&(dt=Math.max(dt,oe.start*We),_t=Math.min(_t,(oe.start+oe.count)*We)),we!==null?(dt=Math.max(dt,0),_t=Math.min(_t,we.count)):ke!=null&&(dt=Math.max(dt,0),_t=Math.min(_t,ke.count));const Dt=_t-dt;if(Dt<0||Dt===1/0)return;Tt.setup(k,G,Te,z,we);let ht,ft=_e;if(we!==null&&(ht=ee.get(we),ft=et,ft.setIndex(ht)),k.isMesh)G.wireframe===!0?(Oe.setLineWidth(G.wireframeLinewidth*st()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(k.isLine){let Ue=G.linewidth;Ue===void 0&&(Ue=1),Oe.setLineWidth(Ue*st()),k.isLineSegments?ft.setMode(I.LINES):k.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else k.isPoints?ft.setMode(I.POINTS):k.isSprite&&ft.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ue=k._multiDrawStarts,Ut=k._multiDrawCounts,gt=k._multiDrawCount,U=we?ee.get(we).bytesPerElement:1,le=De.get(G).currentProgram.getUniforms();for(let de=0;de<gt;de++)le.setValue(I,"_gl_DrawID",de),ft.render(Ue[de]/U,Ut[de])}else if(k.isInstancedMesh)ft.renderInstances(dt,Dt,k.count);else if(z.isInstancedBufferGeometry){const Ue=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ut=Math.min(z.instanceCount,Ue);ft.renderInstances(dt,Dt,Ut)}else ft.render(dt,Dt)};function tt(y,N,z){y.transparent===!0&&y.side===ti&&y.forceSinglePass===!1?(y.side=dn,y.needsUpdate=!0,li(y,N,z),y.side=Si,y.needsUpdate=!0,li(y,N,z),y.side=ti):li(y,N,z)}this.compile=function(y,N,z=null){z===null&&(z=y),d=at.get(z),d.init(N),b.push(d),z.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),y!==z&&y.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const G=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const oe=k.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const Te=oe[me];tt(Te,z,k),G.add(Te)}else tt(oe,z,k),G.add(oe)}),d=b.pop(),G},this.compileAsync=function(y,N,z=null){const G=this.compile(y,N,z);return new Promise(k=>{function oe(){if(G.forEach(function(me){De.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){k(y);return}setTimeout(oe,10)}lt.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let sn=null;function un(y){sn&&sn(y)}function Xt(){Wn.stop()}function Qr(){Wn.start()}const Wn=new fd;Wn.setAnimationLoop(un),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(y){sn=y,Y.setAnimationLoop(y),y===null?Wn.stop():Wn.start()},Y.addEventListener("sessionstart",Xt),Y.addEventListener("sessionend",Qr),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,N,L),d=at.get(y,b.length),d.init(N),b.push(d),Ge.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(Ge),Ie=this.localClippingEnabled,ce=J.init(this.clippingPlanes,Ie),p=Re.get(y,T.length),p.init(),T.push(p),Y.enabled===!0&&Y.isPresenting===!0){const oe=E.xr.getDepthSensingMesh();oe!==null&&ze(oe,N,-1/0,E.sortObjects)}ze(y,N,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(ge,Ae),It=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,It&&Fe.addToRenderList(p,y),this.info.render.frame++,ce===!0&&J.beginShadows();const z=d.state.shadowsArray;fe.render(z,y,N),ce===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=p.opaque,k=p.transmissive;if(d.setupLights(),N.isArrayCamera){const oe=N.cameras;if(k.length>0)for(let me=0,Te=oe.length;me<Te;me++){const we=oe[me];es(G,k,y,we)}It&&Fe.render(y);for(let me=0,Te=oe.length;me<Te;me++){const we=oe[me];Jr(p,y,we,we.viewport)}}else k.length>0&&es(G,k,y,N),It&&Fe.render(y),Jr(p,y,N);L!==null&&C===0&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(E,y,N),Tt.resetDefaultState(),M=-1,S=null,b.pop(),b.length>0?(d=b[b.length-1],ce===!0&&J.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function ze(y,N,z,G){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Q.intersectsSprite(y)){G&&Ve.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ge);const me=$.update(y),Te=y.material;Te.visible&&p.push(y,me,Te,z,Ve.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Q.intersectsObject(y))){const me=$.update(y),Te=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ve.copy(y.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ve.copy(me.boundingSphere.center)),Ve.applyMatrix4(y.matrixWorld).applyMatrix4(Ge)),Array.isArray(Te)){const we=me.groups;for(let We=0,He=we.length;We<He;We++){const ke=we[We],dt=Te[ke.materialIndex];dt&&dt.visible&&p.push(y,me,dt,z,Ve.z,ke)}}else Te.visible&&p.push(y,me,Te,z,Ve.z,null)}}const oe=y.children;for(let me=0,Te=oe.length;me<Te;me++)ze(oe[me],N,z,G)}function Jr(y,N,z,G){const k=y.opaque,oe=y.transmissive,me=y.transparent;d.setupLightsView(z),ce===!0&&J.setGlobalState(E.clippingPlanes,z),G&&Oe.viewport(O.copy(G)),k.length>0&&ci(k,N,z),oe.length>0&&ci(oe,N,z),me.length>0&&ci(me,N,z),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function es(y,N,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new Xi(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Yr:ai,minFilter:Vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const oe=d.state.transmissionRenderTarget[G.id],me=G.viewport||O;oe.setSize(me.z*E.transmissionResolutionScale,me.w*E.transmissionResolutionScale);const Te=E.getRenderTarget();E.setRenderTarget(oe),E.getClearColor(j),re=E.getClearAlpha(),re<1&&E.setClearColor(16777215,.5),E.clear(),It&&Fe.render(z);const we=E.toneMapping;E.toneMapping=yi;const We=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),ce===!0&&J.setGlobalState(E.clippingPlanes,G),ci(y,z,G),A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe),lt.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ke=0,dt=N.length;ke<dt;ke++){const _t=N[ke],Dt=_t.object,ht=_t.geometry,ft=_t.material,Ue=_t.group;if(ft.side===ti&&Dt.layers.test(G.layers)){const Ut=ft.side;ft.side=dn,ft.needsUpdate=!0,Ar(Dt,z,G,ht,ft,Ue),ft.side=Ut,ft.needsUpdate=!0,He=!0}}He===!0&&(A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe))}E.setRenderTarget(Te),E.setClearColor(j,re),We!==void 0&&(G.viewport=We),E.toneMapping=we}function ci(y,N,z){const G=N.isScene===!0?N.overrideMaterial:null;for(let k=0,oe=y.length;k<oe;k++){const me=y[k],Te=me.object,we=me.geometry,We=me.group;let He=me.material;He.allowOverride===!0&&G!==null&&(He=G),Te.layers.test(z.layers)&&Ar(Te,N,z,we,He,We)}}function Ar(y,N,z,G,k,oe){y.onBeforeRender(E,N,z,G,k,oe),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(E,N,z,G,y,oe),k.transparent===!0&&k.side===ti&&k.forceSinglePass===!1?(k.side=dn,k.needsUpdate=!0,E.renderBufferDirect(z,N,G,k,y,oe),k.side=Si,k.needsUpdate=!0,E.renderBufferDirect(z,N,G,k,y,oe),k.side=ti):E.renderBufferDirect(z,N,G,k,y,oe),y.onAfterRender(E,N,z,G,k,oe)}function li(y,N,z){N.isScene!==!0&&(N=Rt);const G=De.get(y),k=d.state.lights,oe=d.state.shadowsArray,me=k.state.version,Te=ye.getParameters(y,k.state,oe,N,z),we=ye.getProgramCacheKey(Te);let We=G.programs;G.environment=y.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(y.isMeshStandardMaterial?F:v).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,We===void 0&&(y.addEventListener("dispose",Be),We=new Map,G.programs=We);let He=We.get(we);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===me)return Ti(y,Te),He}else Te.uniforms=ye.getUniforms(y),y.onBeforeCompile(Te,E),He=ye.acquireProgram(Te,we),We.set(we,He),G.uniforms=Te.uniforms;const ke=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ke.clippingPlanes=J.uniform),Ti(y,Te),G.needsLights=ns(y),G.lightsStateVersion=me,G.needsLights&&(ke.ambientLightColor.value=k.state.ambient,ke.lightProbe.value=k.state.probe,ke.directionalLights.value=k.state.directional,ke.directionalLightShadows.value=k.state.directionalShadow,ke.spotLights.value=k.state.spot,ke.spotLightShadows.value=k.state.spotShadow,ke.rectAreaLights.value=k.state.rectArea,ke.ltc_1.value=k.state.rectAreaLTC1,ke.ltc_2.value=k.state.rectAreaLTC2,ke.pointLights.value=k.state.point,ke.pointLightShadows.value=k.state.pointShadow,ke.hemisphereLights.value=k.state.hemi,ke.directionalShadowMap.value=k.state.directionalShadowMap,ke.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ke.spotShadowMap.value=k.state.spotShadowMap,ke.spotLightMatrix.value=k.state.spotLightMatrix,ke.spotLightMap.value=k.state.spotLightMap,ke.pointShadowMap.value=k.state.pointShadowMap,ke.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function Rr(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Fs.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Ti(y,N){const z=De.get(y);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function ts(y,N,z,G,k){N.isScene!==!0&&(N=Rt),A.resetTextureUnits();const oe=N.fog,me=G.isMeshStandardMaterial?N.environment:null,Te=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Er,we=(G.isMeshStandardMaterial?F:v).get(G.envMap||me),We=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,He=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ke=!!z.morphAttributes.position,dt=!!z.morphAttributes.normal,_t=!!z.morphAttributes.color;let Dt=yi;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Dt=E.toneMapping);const ht=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ft=ht!==void 0?ht.length:0,Ue=De.get(G),Ut=d.state.lights;if(ce===!0&&(Ie===!0||y!==S)){const wt=y===S&&G.id===M;J.setState(G,y,wt)}let gt=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Ut.state.version||Ue.outputColorSpace!==Te||k.isBatchedMesh&&Ue.batching===!1||!k.isBatchedMesh&&Ue.batching===!0||k.isBatchedMesh&&Ue.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ue.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ue.instancing===!1||!k.isInstancedMesh&&Ue.instancing===!0||k.isSkinnedMesh&&Ue.skinning===!1||!k.isSkinnedMesh&&Ue.skinning===!0||k.isInstancedMesh&&Ue.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ue.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ue.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ue.instancingMorph===!1&&k.morphTexture!==null||Ue.envMap!==we||G.fog===!0&&Ue.fog!==oe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==J.numPlanes||Ue.numIntersection!==J.numIntersection)||Ue.vertexAlphas!==We||Ue.vertexTangents!==He||Ue.morphTargets!==ke||Ue.morphNormals!==dt||Ue.morphColors!==_t||Ue.toneMapping!==Dt||Ue.morphTargetsCount!==ft)&&(gt=!0):(gt=!0,Ue.__version=G.version);let U=Ue.currentProgram;gt===!0&&(U=li(G,N,k));let le=!1,de=!1,Pe=!1;const Le=U.getUniforms(),Ke=Ue.uniforms;if(Oe.useProgram(U.program)&&(le=!0,de=!0,Pe=!0),G.id!==M&&(M=G.id,de=!0),le||S!==y){Oe.buffers.depth.getReversed()?(pe.copy(y.projectionMatrix),Yh(pe),Kh(pe),Le.setValue(I,"projectionMatrix",pe)):Le.setValue(I,"projectionMatrix",y.projectionMatrix),Le.setValue(I,"viewMatrix",y.matrixWorldInverse);const Ot=Le.map.cameraPosition;Ot!==void 0&&Ot.setValue(I,mt.setFromMatrixPosition(y.matrixWorld)),Qe.logarithmicDepthBuffer&&Le.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Le.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,de=!0,Pe=!0)}if(k.isSkinnedMesh){Le.setOptional(I,k,"bindMatrix"),Le.setOptional(I,k,"bindMatrixInverse");const wt=k.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),Le.setValue(I,"boneTexture",wt.boneTexture,A))}k.isBatchedMesh&&(Le.setOptional(I,k,"batchingTexture"),Le.setValue(I,"batchingTexture",k._matricesTexture,A),Le.setOptional(I,k,"batchingIdTexture"),Le.setValue(I,"batchingIdTexture",k._indirectTexture,A),Le.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&Le.setValue(I,"batchingColorTexture",k._colorsTexture,A));const Mt=z.morphAttributes;if((Mt.position!==void 0||Mt.normal!==void 0||Mt.color!==void 0)&&Ye.update(k,z,U),(de||Ue.receiveShadow!==k.receiveShadow)&&(Ue.receiveShadow=k.receiveShadow,Le.setValue(I,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ke.envMap.value=we,Ke.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Ke.envMapIntensity.value=N.environmentIntensity),de&&(Le.setValue(I,"toneMappingExposure",E.toneMappingExposure),Ue.needsLights&&wr(Ke,Pe),oe&&G.fog===!0&&Ee.refreshFogUniforms(Ke,oe),Ee.refreshMaterialUniforms(Ke,G,q,se,d.state.transmissionRenderTarget[y.id]),Fs.upload(I,Rr(Ue),Ke,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fs.upload(I,Rr(Ue),Ke,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Le.setValue(I,"center",k.center),Le.setValue(I,"modelViewMatrix",k.modelViewMatrix),Le.setValue(I,"normalMatrix",k.normalMatrix),Le.setValue(I,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const wt=G.uniformsGroups;for(let Ot=0,Ai=wt.length;Ot<Ai;Ot++){const Zt=wt[Ot];P.update(Zt,U),P.bind(Zt,U)}}return U}function wr(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function ns(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,N,z){const G=De.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),De.get(y.texture).__webglTexture=N,De.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const z=De.get(y);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const Zs=I.createFramebuffer();this.setRenderTarget=function(y,N=0,z=0){L=y,R=N,C=z;let G=!0,k=null,oe=!1,me=!1;if(y){const we=De.get(y);if(we.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(we.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(we.__hasExternalTextures)A.rebindTextures(y,De.get(y.texture).__webglTexture,De.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ke=y.depthTexture;if(we.__boundDepthTexture!==ke){if(ke!==null&&De.has(ke)&&(y.width!==ke.image.width||y.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const We=y.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(me=!0);const He=De.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(He[N])?k=He[N][z]:k=He[N],oe=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?k=De.get(y).__webglMultisampledFramebuffer:Array.isArray(He)?k=He[z]:k=He,O.copy(y.viewport),W.copy(y.scissor),H=y.scissorTest}else O.copy(Ce).multiplyScalar(q).floor(),W.copy(Ze).multiplyScalar(q).floor(),H=Xe;if(z!==0&&(k=Zs),Oe.bindFramebuffer(I.FRAMEBUFFER,k)&&G&&Oe.drawBuffers(y,k),Oe.viewport(O),Oe.scissor(W),Oe.setScissorTest(H),oe){const we=De.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,z)}else if(me){const we=De.get(y.texture),We=N;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.__webglTexture,z,We)}else if(y!==null&&z!==0){const we=De.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,we.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(y,N,z,G,k,oe,me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=De.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(Te=Te[me]),Te){Oe.bindFramebuffer(I.FRAMEBUFFER,Te);try{const we=y.texture,We=we.format,He=we.type;if(!Qe.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-G&&z>=0&&z<=y.height-k&&I.readPixels(N,z,G,k,je.convert(We),je.convert(He),oe)}finally{const we=L!==null?De.get(L).__webglFramebuffer:null;Oe.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,N,z,G,k,oe,me){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=De.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(Te=Te[me]),Te)if(N>=0&&N<=y.width-G&&z>=0&&z<=y.height-k){Oe.bindFramebuffer(I.FRAMEBUFFER,Te);const we=y.texture,We=we.format,He=we.type;if(!Qe.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ke),I.bufferData(I.PIXEL_PACK_BUFFER,oe.byteLength,I.STREAM_READ),I.readPixels(N,z,G,k,je.convert(We),je.convert(He),0);const dt=L!==null?De.get(L).__webglFramebuffer:null;Oe.bindFramebuffer(I.FRAMEBUFFER,dt);const _t=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await qh(I,_t,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ke),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,oe),I.deleteBuffer(ke),I.deleteSync(_t),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,z=0){const G=Math.pow(2,-z),k=Math.floor(y.image.width*G),oe=Math.floor(y.image.height*G),me=N!==null?N.x:0,Te=N!==null?N.y:0;A.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,me,Te,k,oe),Oe.unbindTexture()};const Qs=I.createFramebuffer(),Js=I.createFramebuffer();this.copyTextureToTexture=function(y,N,z=null,G=null,k=0,oe=null){oe===null&&(k!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=k,k=0):oe=0);let me,Te,we,We,He,ke,dt,_t,Dt;const ht=y.isCompressedTexture?y.mipmaps[oe]:y.image;if(z!==null)me=z.max.x-z.min.x,Te=z.max.y-z.min.y,we=z.isBox3?z.max.z-z.min.z:1,We=z.min.x,He=z.min.y,ke=z.isBox3?z.min.z:0;else{const Mt=Math.pow(2,-k);me=Math.floor(ht.width*Mt),Te=Math.floor(ht.height*Mt),y.isDataArrayTexture?we=ht.depth:y.isData3DTexture?we=Math.floor(ht.depth*Mt):we=1,We=0,He=0,ke=0}G!==null?(dt=G.x,_t=G.y,Dt=G.z):(dt=0,_t=0,Dt=0);const ft=je.convert(N.format),Ue=je.convert(N.type);let Ut;N.isData3DTexture?(A.setTexture3D(N,0),Ut=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Ut=I.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Ut=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const gt=I.getParameter(I.UNPACK_ROW_LENGTH),U=I.getParameter(I.UNPACK_IMAGE_HEIGHT),le=I.getParameter(I.UNPACK_SKIP_PIXELS),de=I.getParameter(I.UNPACK_SKIP_ROWS),Pe=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,We),I.pixelStorei(I.UNPACK_SKIP_ROWS,He),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);const Le=y.isDataArrayTexture||y.isData3DTexture,Ke=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const Mt=De.get(y),wt=De.get(N),Ot=De.get(Mt.__renderTarget),Ai=De.get(wt.__renderTarget);Oe.bindFramebuffer(I.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Oe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Zt=0;Zt<we;Zt++)Le&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.get(y).__webglTexture,k,ke+Zt),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.get(N).__webglTexture,oe,Dt+Zt)),I.blitFramebuffer(We,He,me,Te,dt,_t,me,Te,I.DEPTH_BUFFER_BIT,I.NEAREST);Oe.bindFramebuffer(I.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||De.has(y)){const Mt=De.get(y),wt=De.get(N);Oe.bindFramebuffer(I.READ_FRAMEBUFFER,Qs),Oe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Js);for(let Ot=0;Ot<we;Ot++)Le?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.__webglTexture,k,ke+Ot):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mt.__webglTexture,k),Ke?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.__webglTexture,oe,Dt+Ot):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wt.__webglTexture,oe),k!==0?I.blitFramebuffer(We,He,me,Te,dt,_t,me,Te,I.COLOR_BUFFER_BIT,I.NEAREST):Ke?I.copyTexSubImage3D(Ut,oe,dt,_t,Dt+Ot,We,He,me,Te):I.copyTexSubImage2D(Ut,oe,dt,_t,We,He,me,Te);Oe.bindFramebuffer(I.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ke?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(Ut,oe,dt,_t,Dt,me,Te,we,ft,Ue,ht.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Ut,oe,dt,_t,Dt,me,Te,we,ft,ht.data):I.texSubImage3D(Ut,oe,dt,_t,Dt,me,Te,we,ft,Ue,ht):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,oe,dt,_t,me,Te,ft,Ue,ht.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,oe,dt,_t,ht.width,ht.height,ft,ht.data):I.texSubImage2D(I.TEXTURE_2D,oe,dt,_t,me,Te,ft,Ue,ht);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,U),I.pixelStorei(I.UNPACK_SKIP_PIXELS,le),I.pixelStorei(I.UNPACK_SKIP_ROWS,de),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pe),oe===0&&N.generateMipmaps&&I.generateMipmap(Ut),Oe.unbindTexture()},this.copyTextureToTexture3D=function(y,N,z=null,G=null,k=0){return Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,z,G,k)},this.initRenderTarget=function(y){De.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),Oe.unbindTexture()},this.resetState=function(){R=0,C=0,L=null,Oe.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}const X=Object.freeze({DIRT:"dirt",STONE:"stone",WOOD:"wood",SAND:"sand",COBBLESTONE:"cobblestone",PLANKS:"planks",CLAY:"clay",GRAVEL:"gravel",GLASS:"glass",IRON_ORE:"iron_ore",COPPER_ORE:"copper_ore",IRON_INGOT:"iron_ingot",COPPER_INGOT:"copper_ingot",STICK:"stick",FIBER:"fiber",LEATHER:"leather",ROPE:"rope",COAL:"coal",RAW_MEAT:"raw_meat",COOKED_MEAT:"cooked_meat",RAW_BERRIES:"raw_berries",RAW_MUSHROOM:"raw_mushroom",RAW_FISH:"raw_fish",COOKED_FISH:"cooked_fish",STONE_PICKAXE:"stone_pickaxe",STONE_AXE:"stone_axe",IRON_PICKAXE:"iron_pickaxe",IRON_AXE:"iron_axe",LEATHER_ARMOR:"leather_armor",BANDAGE:"bandage",IRON_SWORD:"iron_sword",IRON_HAMMER:"iron_hammer",COPPER_PICKAXE:"copper_pickaxe",STEW:"stew",TRAIL_RATIONS:"trail_rations",HERB_SALAD:"herb_salad",TORCH:"torch",BEDROLL:"bedroll",MAP:"map",LORE_FRAGMENT:"lore_fragment",RELIC_SHARD:"relic_shard",WORKBENCH:"workbench",CAMPFIRE:"campfire",FORGE:"forge",KITCHEN:"kitchen",LOOM:"loom",THATCH:"thatch",STONE_BRICK:"stone_brick",DARK_STONE:"dark_stone",OAK_PLANKS:"oak_planks",BIRCH_WOOD:"birch_wood",SLATE:"slate",MARBLE:"marble",CHEST:"chest"}),g=Object.freeze({AIR:0,DIRT:1,STONE:2,GRASS:3,WOOD:4,LEAVES:5,SAND:6,WATER:7,CLAY:8,GRAVEL:9,COBBLESTONE:10,PLANKS:11,IRON_ORE:12,COPPER_ORE:13,COAL_ORE:14,GLASS:15,CAMPFIRE:16,WORKBENCH:17,FORGE:18,KITCHEN:19,LOOM:20,RUNE_TABLE:21,TORCH:22,THATCH:23,STONE_BRICK:24,IRON_BLOCK:25,COPPER_BLOCK:26,SNOW:27,ICE:28,MOSSY_STONE:29,CORRUPTED_STONE:30,DARK_STONE:31,OAK_PLANKS:32,BIRCH_WOOD:33,REED:34,MUD:35,SLATE:36,MARBLE:37,OBSIDIAN:38,CRYSTAL:39,TALL_GRASS:40,CHEST:41,BED:42,DOOR:43,DOOR_OPEN:44}),p0=new Set([g.AIR,g.WATER,g.TORCH,g.TALL_GRASS,g.LEAVES,g.BED,g.DOOR_OPEN]);function nn(i){return!p0.has(i)}const m0=new Set([g.AIR,g.WATER]);function _0(i){return!m0.has(i)}const g0={[g.DIRT]:[{type:X.DIRT,count:1}],[g.STONE]:[{type:X.STONE,count:1}],[g.GRASS]:[{type:X.DIRT,count:1},{type:X.FIBER,count:1}],[g.WOOD]:[{type:X.WOOD,count:1}],[g.LEAVES]:[{type:X.STICK,count:1}],[g.SAND]:[{type:X.SAND,count:1}],[g.CLAY]:[{type:X.CLAY,count:1}],[g.GRAVEL]:[{type:X.GRAVEL,count:1}],[g.COBBLESTONE]:[{type:X.COBBLESTONE,count:1}],[g.PLANKS]:[{type:X.PLANKS,count:1}],[g.IRON_ORE]:[{type:X.IRON_ORE,count:1}],[g.COPPER_ORE]:[{type:X.COPPER_ORE,count:1}],[g.COAL_ORE]:[{type:X.COAL,count:1}],[g.GLASS]:[{type:X.GLASS,count:1}],[g.TORCH]:[{type:X.TORCH,count:1}],[g.THATCH]:[{type:X.FIBER,count:2}],[g.SNOW]:[{type:X.DIRT,count:1}],[g.DARK_STONE]:[{type:X.DARK_STONE,count:1}],[g.OAK_PLANKS]:[{type:X.OAK_PLANKS,count:1}],[g.BIRCH_WOOD]:[{type:X.BIRCH_WOOD,count:1}],[g.SLATE]:[{type:X.SLATE,count:1}],[g.MARBLE]:[{type:X.MARBLE,count:1}],[g.TALL_GRASS]:[{type:X.FIBER,count:1}],[g.WORKBENCH]:[{type:X.WORKBENCH,count:1}],[g.CAMPFIRE]:[{type:X.CAMPFIRE,count:1}],[g.FORGE]:[{type:X.FORGE,count:1}],[g.KITCHEN]:[{type:X.KITCHEN,count:1}],[g.LOOM]:[{type:X.LOOM,count:1}],[g.CHEST]:[{type:X.CHEST,count:1}]};function v0(i){return g0[i]||[]}const x0=Object.freeze({[g.DIRT]:"hand",[g.GRASS]:"hand",[g.LEAVES]:"hand",[g.TALL_GRASS]:"hand",[g.SAND]:"hand",[g.CLAY]:"hand",[g.GRAVEL]:"hand",[g.SNOW]:"hand",[g.MUD]:"hand",[g.THATCH]:"hand",[g.REED]:"hand",[g.WOOD]:"hand",[g.BIRCH_WOOD]:"hand",[g.PLANKS]:"hand",[g.OAK_PLANKS]:"hand",[g.STONE]:"pickaxe",[g.IRON_ORE]:"pickaxe",[g.COPPER_ORE]:"pickaxe",[g.COAL_ORE]:"pickaxe",[g.COBBLESTONE]:"pickaxe",[g.STONE_BRICK]:"pickaxe",[g.SLATE]:"pickaxe",[g.MARBLE]:"pickaxe",[g.DARK_STONE]:"pickaxe",[g.MOSSY_STONE]:"pickaxe",[g.CORRUPTED_STONE]:"pickaxe",[g.OBSIDIAN]:"pickaxe",[g.CRYSTAL]:"pickaxe",[g.ICE]:"pickaxe",[g.IRON_BLOCK]:"pickaxe",[g.COPPER_BLOCK]:"pickaxe",[g.GLASS]:"hand",[g.CAMPFIRE]:"hand",[g.WORKBENCH]:"hand",[g.FORGE]:"pickaxe",[g.KITCHEN]:"hand",[g.LOOM]:"hand",[g.RUNE_TABLE]:"pickaxe",[g.TORCH]:"hand",[g.CHEST]:"hand",[g.BED]:"hand",[g.DOOR]:"hand",[g.DOOR_OPEN]:"hand"});function y0(i,e){const t=x0[i]||"hand";return t==="hand"?!0:e==null?!1:e===t}const Pa=Object.freeze({[X.DIRT]:g.DIRT,[X.STONE]:g.STONE,[X.WOOD]:g.WOOD,[X.SAND]:g.SAND,[X.COBBLESTONE]:g.COBBLESTONE,[X.PLANKS]:g.PLANKS,[X.CLAY]:g.CLAY,[X.GRAVEL]:g.GRAVEL,[X.GLASS]:g.GLASS,[X.TORCH]:g.TORCH,[X.THATCH]:g.THATCH,[X.STONE_BRICK]:g.STONE_BRICK,[X.DARK_STONE]:g.DARK_STONE,[X.OAK_PLANKS]:g.OAK_PLANKS,[X.BIRCH_WOOD]:g.BIRCH_WOOD,[X.SLATE]:g.SLATE,[X.MARBLE]:g.MARBLE,[X.WORKBENCH]:g.WORKBENCH,[X.CAMPFIRE]:g.CAMPFIRE,[X.FORGE]:g.FORGE,[X.KITCHEN]:g.KITCHEN,[X.LOOM]:g.LOOM,[X.CHEST]:g.CHEST}),qe=16;class Na{constructor(){this.blocks=new Uint8Array(qe*qe*qe)}_index(e,t,n){return e+t*qe+n*qe*qe}_inBounds(e,t,n){return e>=0&&e<qe&&t>=0&&t<qe&&n>=0&&n<qe}getBlock(e,t,n){return this._inBounds(e,t,n)?this.blocks[this._index(e,t,n)]:g.AIR}setBlock(e,t,n,r){this._inBounds(e,t,n)&&(this.blocks[this._index(e,t,n)]=r)}}class vd{constructor(){this.chunks=new Map}_chunkKey(e,t,n){return`${e},${t},${n}`}_worldToChunk(e,t,n){const r=Math.floor(e/qe),s=Math.floor(t/qe),o=Math.floor(n/qe),a=(e%qe+qe)%qe,c=(t%qe+qe)%qe,l=(n%qe+qe)%qe;return{cx:r,cy:s,cz:o,lx:a,ly:c,lz:l}}getChunk(e,t,n){return this.chunks.get(this._chunkKey(e,t,n))||null}_getOrCreateChunk(e,t,n){const r=this._chunkKey(e,t,n);let s=this.chunks.get(r);return s||(s=new Na,this.chunks.set(r,s)),s}getBlock(e,t,n){if(t<0)return g.STONE;const{cx:r,cy:s,cz:o,lx:a,ly:c,lz:l}=this._worldToChunk(e,t,n),h=this.getChunk(r,s,o);return h?h.getBlock(a,c,l):g.AIR}isChunkLoaded(e,t,n){const{cx:r,cy:s,cz:o}=this._worldToChunk(e,t,n);return this.chunks.has(this._chunkKey(r,s,o))}setBlock(e,t,n,r){const{cx:s,cy:o,cz:a,lx:c,ly:l,lz:h}=this._worldToChunk(e,t,n);this._getOrCreateChunk(s,o,a).setBlock(c,l,h,r)}restoreFrom(e){this.chunks.clear();for(const[t,n]of e.chunks){const r=new Na;r.blocks.set(n.blocks),this.chunks.set(t,r)}}}const Jn=new Uint8Array(512);(function(){const e=new Uint8Array(256);for(let n=0;n<256;n++)e[n]=n;let t=12345;for(let n=255;n>0;n--){t=t*1103515245+12345&2147483647;const r=t%(n+1);[e[n],e[r]]=[e[r],e[n]]}for(let n=0;n<512;n++)Jn[n]=e[n&255]})();const S0=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];function dl(i){return i*i*i*(i*(i*6-15)+10)}function Lo(i,e,t){return i+t*(e-i)}function bs(i,e,t){const n=S0[i&7];return n[0]*e+n[1]*t}function ka(i,e){const t=Math.floor(i)&255,n=Math.floor(e)&255,r=i-Math.floor(i),s=e-Math.floor(e),o=dl(r),a=dl(s),c=Jn[Jn[t]+n],l=Jn[Jn[t]+n+1],h=Jn[Jn[t+1]+n],u=Jn[Jn[t+1]+n+1],f=Lo(bs(c,r,s),bs(h,r-1,s),o),m=Lo(bs(l,r,s-1),bs(u,r-1,s-1),o);return Lo(f,m,a)}const pt=Object.freeze({SHIRE:"shire",FOREST:"forest",MOUNTAIN:"mountain",MIRKWOOD:"mirkwood",PLAINS:"plains"});class Nr{constructor({type:e,name:t,surfaceBlock:n,treeDensity:r,minHeight:s,maxHeight:o}){this.type=e,this.name=t,this.surfaceBlock=n,this.treeDensity=r,this.minHeight=s,this.maxHeight=o}}const hl={[pt.SHIRE]:new Nr({type:pt.SHIRE,name:"The Shire",surfaceBlock:g.GRASS,treeDensity:.02,minHeight:29,maxHeight:34}),[pt.FOREST]:new Nr({type:pt.FOREST,name:"Forest",surfaceBlock:g.GRASS,treeDensity:.08,minHeight:30,maxHeight:40}),[pt.MOUNTAIN]:new Nr({type:pt.MOUNTAIN,name:"Misty Mountains",surfaceBlock:g.STONE,treeDensity:.005,minHeight:35,maxHeight:85}),[pt.MIRKWOOD]:new Nr({type:pt.MIRKWOOD,name:"Mirkwood",surfaceBlock:g.MUD,treeDensity:.2,minHeight:23,maxHeight:35}),[pt.PLAINS]:new Nr({type:pt.PLAINS,name:"Plains",surfaceBlock:g.GRASS,treeDensity:.003,minHeight:29,maxHeight:33})};function E0(i){return hl[i]||hl[pt.PLAINS]}const M0=[{id:"anduin",name:"River Anduin",width:8,current:{x:0,z:1.5},points:[{x:960,z:-300},{x:990,z:-150},{x:1005,z:0},{x:1020,z:120},{x:1035,z:180},{x:1050,z:240},{x:1065,z:360},{x:1080,z:450}]},{id:"shire_brook",name:"The Water (Shire Brook)",width:3,current:{x:.6,z:0},points:[{x:-120,z:15},{x:180,z:15}]},{id:"forest_river",name:"Forest River",width:5,current:{x:-1,z:0},points:[{x:1380,z:60},{x:1320,z:75},{x:1260,z:90},{x:1200,z:105},{x:1140,z:120},{x:1080,z:150}]}];function b0(i,e,t,n,r,s){const o=r-t,a=s-n,c=o*o+a*a;if(c===0)return Math.sqrt((i-t)**2+(e-n)**2);let l=((i-t)*o+(e-n)*a)/c;l=Math.max(0,Math.min(1,l));const h=t+l*o,u=n+l*a;return Math.sqrt((i-h)**2+(e-u)**2)}function T0(i,e,t){let n=1/0;for(let r=0;r<t.points.length-1;r++){const s=t.points[r],o=t.points[r+1],a=b0(i,e,s.x,s.z,o.x,o.z);a<n&&(n=a)}return n}function xd(i,e){for(const t of M0)if(T0(i,e,t)<=t.width/2)return t;return null}function A0(i,e){const t=xd(i,e);return t?{...t.current}:null}const R0=32,w0=26,Bs=-300,C0=1680,zs=-360,I0=450,Ts=.02,ul=42,O0=[{x:0,z:0,biome:pt.SHIRE,radius:210},{x:240,z:60,biome:pt.PLAINS,radius:120},{x:420,z:120,biome:pt.FOREST,radius:120},{x:600,z:90,biome:pt.FOREST,radius:120},{x:810,z:150,biome:pt.MOUNTAIN,radius:180},{x:1020,z:180,biome:pt.PLAINS,radius:135},{x:1200,z:120,biome:pt.MIRKWOOD,radius:180},{x:1260,z:270,biome:pt.MIRKWOOD,radius:105},{x:1410,z:90,biome:pt.PLAINS,radius:90},{x:1560,z:60,biome:pt.MOUNTAIN,radius:120}];function Xs(i,e){let t=pt.PLAINS,n=1/0;for(const r of O0){const s=i-r.x,o=e-r.z,c=Math.sqrt(s*s+o*o)/r.radius;c<n&&(n=c,t=r.biome)}return E0(t)}function zt(i,e){const t=Xs(i,e),n=ka(i*Ts+ul*.1,e*Ts),r=ka(i*Ts*2+ul*.1+100,e*Ts*2+100)*.5,o=((n+r)/1.5+1)/2;return Math.floor(t.minHeight+o*(t.maxHeight-t.minHeight))}g.COAL_ORE,g.COPPER_ORE,g.IRON_ORE;pt.FOREST+"",pt.MIRKWOOD+"",pt.SHIRE+"",pt.PLAINS+"";const D0=-20,L0=.6,P0=1.8,fl=0;function N0(i,e){i.velocity.y+=D0*e}function k0(i,e,t,n,r,s){const o=r/2,a=[],c=Math.floor(e-o),l=Math.floor(e+o-.001),h=Math.floor(n-o),u=Math.floor(n+o-.001),f=Math.floor(t),m=Math.floor(t+s-.001);for(let _=c;_<=l;_++)for(let x=h;x<=u;x++)for(let p=f;p<=m;p++)nn(i.getBlock(_,p,x))&&a.push({bx:_,by:p,bz:x});return a}function U0(i,e,t){const n=i.position,r=i.physicalWidth||L0,s=i.physicalHeight||P0,o=r/2,a=k0(e,n.x,n.y,n.z,r,s);for(const{bx:l,bz:h}of a){const u=n.x-o,f=n.x+o,m=n.z-o,_=n.z+o,x=f-l,p=l+1-u,d=_-h,T=h+1-m,b=Math.min(x,p),E=Math.min(d,T);b<E?x<p?n.x=l-o-.001:n.x=l+1+o+.001:d<T?n.z=h-o-.001:n.z=h+1+o+.001}const c=n.y+i.velocity.y*t;if(i.velocity.y<=0){const l=Math.floor(n.y)-1,h=Math.floor(c)-1;for(let u=l;u>=h;u--){const f=Math.floor(n.x-o),m=Math.floor(n.x+o-.001),_=Math.floor(n.z-o),x=Math.floor(n.z+o-.001);for(let p=f;p<=m;p++)for(let d=_;d<=x;d++)if(nn(e.getBlock(p,u,d))){n.y=u+1,i.velocity.y=0,i.onGround=!0;return}}}else{const l=Math.floor(c+s),h=Math.floor(n.x-o),u=Math.floor(n.x+o-.001),f=Math.floor(n.z-o),m=Math.floor(n.z+o-.001);for(let _=h;_<=u;_++)for(let x=f;x<=m;x++)if(nn(e.getBlock(_,l,x))){i.velocity.y=0;return}}n.y=c,i.onGround=!1,n.y<fl&&(n.y=fl,i.velocity.y=0,i.onGround=!0)}const Po=[{dir:[0,1,0],verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{dir:[0,-1,0],verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{dir:[1,0,0],verts:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{dir:[-1,0,0],verts:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]]},{dir:[0,0,1],verts:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]]},{dir:[0,0,-1],verts:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}],cn={[g.GRASS]:[.32,.6,.24],[g.DIRT]:[.45,.33,.2],[g.STONE]:[.5,.5,.52],[g.WOOD]:[.4,.24,.12],[g.LEAVES]:[.18,.48,.13],[g.WATER]:[.15,.35,.65],[g.SAND]:[.82,.72,.45],[g.CLAY]:[.58,.42,.32],[g.GRAVEL]:[.52,.5,.48],[g.COBBLESTONE]:[.42,.42,.44],[g.PLANKS]:[.58,.4,.2],[g.IRON_ORE]:[.48,.45,.42],[g.COPPER_ORE]:[.5,.38,.28],[g.COAL_ORE]:[.22,.22,.24],[g.GLASS]:[.72,.82,.88],[g.CAMPFIRE]:[.45,.22,.08],[g.WORKBENCH]:[.52,.36,.18],[g.FORGE]:[.3,.3,.32],[g.KITCHEN]:[.48,.33,.18],[g.LOOM]:[.62,.52,.38],[g.RUNE_TABLE]:[.25,.2,.45],[g.TORCH]:[.92,.72,.18],[g.THATCH]:[.68,.6,.32],[g.STONE_BRICK]:[.48,.48,.46],[g.IRON_BLOCK]:[.68,.68,.72],[g.COPPER_BLOCK]:[.7,.42,.18],[g.SNOW]:[.93,.95,.98],[g.ICE]:[.65,.82,.92],[g.MOSSY_STONE]:[.35,.45,.32],[g.CORRUPTED_STONE]:[.28,.18,.32],[g.DARK_STONE]:[.18,.15,.2],[g.OAK_PLANKS]:[.52,.36,.16],[g.BIRCH_WOOD]:[.78,.73,.62],[g.REED]:[.42,.58,.28],[g.MUD]:[.32,.25,.15],[g.SLATE]:[.35,.36,.4],[g.MARBLE]:[.88,.86,.82],[g.OBSIDIAN]:[.08,.06,.12],[g.CRYSTAL]:[.68,.78,.92],[g.TALL_GRASS]:[.28,.56,.2],[g.CHEST]:[.55,.38,.18],[g.BED]:[.6,.15,.12],[g.DOOR]:[.42,.28,.14],[g.DOOR_OPEN]:[.42,.28,.14]},Ua=[1,0,1];function Zn(i,e,t,n){let r=i*374761+e*668265+t*1274613+n*982451|0;return r=(r>>16^r)*73244475|0,r=(r>>16^r)*73244475|0,r=r>>16^r,((r&65535)/65535-.5)*.24}function F0(i,e,t,n,r,s){const[o,a,c]=r.dir;let l,h;a!==0?(l=[1,0,0],h=[0,0,1]):o!==0?(l=[0,1,0],h=[0,0,1]):(l=[1,0,0],h=[0,1,0]);const u=r.verts[s],f=u[0]*l[0]+u[1]*l[1]+u[2]*l[2]>.5?1:-1,m=u[0]*h[0]+u[1]*h[1]+u[2]*h[2]>.5?1:-1,_=nn(i.getBlock(e+o+l[0]*f,t+a+l[1]*f,n+c+l[2]*f))?1:0,x=nn(i.getBlock(e+o+h[0]*m,t+a+h[1]*m,n+c+h[2]*m))?1:0,p=nn(i.getBlock(e+o+l[0]*f+h[0]*m,t+a+l[1]*f+h[1]*m,n+c+l[2]*f+h[2]*m))?1:0;return 1-(_&&x?3:_+x+p)*.15}const B0=[{verts:[[.5,0,.45],[.78,.28,.44],[.78,.28,.56],[.5,0,.55]]},{verts:[[.54,0,.48],[.69,.28,.71],[.59,.28,.77],[.46,0,.53]]},{verts:[[.54,0,.53],[.41,.28,.77],[.31,.28,.71],[.46,0,.48]]},{verts:[[.5,0,.55],[.22,.28,.56],[.22,.28,.44],[.5,0,.45]]},{verts:[[.46,0,.53],[.31,.28,.29],[.41,.28,.23],[.54,0,.48]]},{verts:[[.46,0,.48],[.59,.28,.23],[.69,.28,.29],[.54,0,.53]]}],z0=[.45,.33,.2],H0=[.62,.5,.34],G0=[.35,.22,.12],V0=[.58,.58,.56],W0=[.65,.55,.3],X0=[.38,.32,.22],q0=[.85,.88,.92],Y0=[.5,.5,.48];function K0(i){return i!==g.AIR}function $0(i,e){const t=e[1]===1,n=e[1]===-1;switch(i){case g.GRASS:return t?cn[g.GRASS]:z0;case g.WOOD:return t?H0:n?G0:cn[g.WOOD];case g.BIRCH_WOOD:return t?[.85,.8,.7]:cn[g.BIRCH_WOOD];case g.STONE:return t?V0:cn[g.STONE];case g.COBBLESTONE:return t?Y0:cn[g.COBBLESTONE];case g.SAND:return n?W0:cn[g.SAND];case g.MUD:return t?X0:cn[g.MUD];case g.SNOW:return t?cn[g.SNOW]:q0;case g.DIRT:return t?[.52,.4,.26]:cn[g.DIRT];case g.IRON_ORE:return t?[.5,.48,.42]:cn[g.IRON_ORE];case g.COPPER_ORE:return t?[.5,.4,.28]:cn[g.COPPER_ORE];default:return cn[i]||Ua}}function j0(i,e,t,n,r){const s=[],o=[],a=[];for(let c=0;c<qe;c++)for(let l=0;l<qe;l++)for(let h=0;h<qe;h++){const u=i.getBlock(c,l,h);if(!K0(u))continue;const f=e*qe+c,m=t*qe+l,_=n*qe+h;if(u===g.TALL_GRASS){const x=cn[u]||Ua;for(const p of B0){const d=s.length/3;for(const T of p.verts){const b=f+T[0],E=m+T[1],D=_+T[2];s.push(b,E,D);const R=.4+2*T[1];o.push((x[0]+Zn(b,E,D,0))*R,(x[1]+Zn(b,E,D,1))*R,(x[2]+Zn(b,E,D,2))*R)}a.push(d,d+1,d+2,d,d+2,d+3),a.push(d+2,d+1,d,d+3,d+2,d)}continue}if(u===g.WATER){if(r.getBlock(f,m+1,_)===g.WATER)continue;const p=cn[g.WATER]||Ua;for(const d of Po){const T=f+d.dir[0],b=m+d.dir[1],E=_+d.dir[2];if(r.getBlock(T,b,E)!==g.AIR||d.dir[1]===-1)continue;const R=s.length/3;for(const C of d.verts){const L=f+C[0],M=m+C[1]-(d.dir[1]===1?.15:0),S=_+C[2];s.push(L,M,S),o.push(p[0]+Zn(L,M,S,0)*.3,p[1]+Zn(L,M,S,1)*.3,p[2]+Zn(L,M,S,2)*.3)}a.push(R,R+1,R+2,R,R+2,R+3)}continue}for(let x=0;x<Po.length;x++){const p=Po[x],d=f+p.dir[0],T=m+p.dir[1],b=_+p.dir[2];if(nn(r.getBlock(d,T,b)))continue;const E=s.length/3,D=$0(u,p.dir),R=p.dir[1]===1?1:p.dir[1]===-1?.55:p.dir[0]===1?.82:p.dir[0]===-1?.68:p.dir[2]===1?.78:.65,C=u===g.GRASS&&p.dir[1]===1?2.5:1;for(let L=0;L<p.verts.length;L++){const M=p.verts[L],S=f+M[0],O=m+M[1],W=_+M[2];s.push(S,O,W);const H=F0(r,f,m,_,p,L),j=R*H;o.push((D[0]+Zn(S,O,W,0)*C)*j,(D[1]+Zn(S,O,W,1)*C)*j,(D[2]+Zn(S,O,W,2)*C)*j)}a.push(E,E+1,E+2,E,E+2,E+3)}}return s.length===0?null:{positions:new Float32Array(s),colors:new Float32Array(o),indices:a,vertexCount:s.length/3}}function Z0(i,e,t,n,r){const s=j0(i,e,t,n,r);if(!s)return null;const o=new Mi;o.setAttribute("position",new oi(s.positions,3)),o.setAttribute("color",new oi(s.colors,3)),o.setIndex(s.indices),o.computeVertexNormals();const a=new $s({vertexColors:!0});return new yn(o,a)}class Q0{constructor(e,t){this.scene=e,this.world=t,this.meshes=new Map,this.dirty=new Set,this._attempted=new Set}invalidateChunks(e){for(const t of e){if(this.meshes.has(t)){const n=this.meshes.get(t);this.scene.remove(n),n.geometry.dispose(),this.meshes.delete(t)}this._attempted.delete(t)}}markDirty(e,t,n){const r=Math.floor(e/qe),s=Math.floor(t/qe),o=Math.floor(n/qe),a=`${r},${s},${o}`;this.dirty.add(a),this._attempted.delete(a);const c=(e%qe+qe)%qe,l=(t%qe+qe)%qe,h=(n%qe+qe)%qe;c===0&&(this.dirty.add(`${r-1},${s},${o}`),this._attempted.delete(`${r-1},${s},${o}`)),c===qe-1&&(this.dirty.add(`${r+1},${s},${o}`),this._attempted.delete(`${r+1},${s},${o}`)),l===0&&(this.dirty.add(`${r},${s-1},${o}`),this._attempted.delete(`${r},${s-1},${o}`)),l===qe-1&&(this.dirty.add(`${r},${s+1},${o}`),this._attempted.delete(`${r},${s+1},${o}`)),h===0&&(this.dirty.add(`${r},${s},${o-1}`),this._attempted.delete(`${r},${s},${o-1}`)),h===qe-1&&(this.dirty.add(`${r},${s},${o+1}`),this._attempted.delete(`${r},${s},${o+1}`))}update(e,t,n=4){const r=Math.floor(e/qe),s=Math.floor(t/qe),o=new Set;for(const a of this.dirty)if(this.meshes.has(a)){const c=this.meshes.get(a);this.scene.remove(c),c.geometry.dispose(),this.meshes.delete(a)}this.dirty.clear();for(let a=-n;a<=n;a++)for(let c=-n;c<=n;c++){const l=r+a,h=s+c;for(let u=0;u<5;u++){const f=`${l},${u},${h}`,m=this.world.chunks.get(f);if(m&&(o.add(f),!this.meshes.has(f)&&!this._attempted.has(f))){this._attempted.add(f);const _=Z0(m,l,u,h,this.world);_&&(this.scene.add(_),this.meshes.set(f,_))}}}for(const[a,c]of this.meshes)o.has(a)||(this.scene.remove(c),c.geometry.dispose(),this.meshes.delete(a),this._attempted.delete(a))}}class J0{constructor(e){this.keys={},this._justPressed={},this.mouseDx=0,this.mouseDy=0,this.locked=!1,this.leftClick=!1,this.rightClick=!1,this.scrollDelta=0,this.menuOpen=!1,this.onPointerUnlock=null,document.addEventListener("keydown",t=>{t.code==="Tab"&&t.preventDefault(),this.keys[t.code]||(this._justPressed[t.code]=!0),this.keys[t.code]=!0}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),e.addEventListener("click",()=>{this.locked||e.requestPointerLock()}),document.addEventListener("mousedown",t=>{this.locked&&(t.button===0&&(this.leftClick=!0,this.keys.mouseLeft=!0),t.button===2&&(this.rightClick=!0))}),document.addEventListener("mouseup",t=>{t.button===0&&(this.keys.mouseLeft=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{const t=this.locked;this.locked=document.pointerLockElement===e,t&&!this.locked&&this.onPointerUnlock&&this.onPointerUnlock()}),document.addEventListener("mousemove",t=>{this.locked&&(this.mouseDx+=t.movementX,this.mouseDy+=t.movementY)}),document.addEventListener("wheel",t=>{this.locked&&(this.scrollDelta+=Math.sign(t.deltaY))})}getMovementInput(){return{forward:!!this.keys.KeyW,back:!!this.keys.KeyS,left:!!this.keys.KeyA,right:!!this.keys.KeyD}}getJump(){return!!this.keys.Space}consumeMouse(){const e=this.mouseDx,t=this.mouseDy;return this.mouseDx=0,this.mouseDy=0,{dx:e,dy:t}}consumeLeftClick(){const e=this.leftClick;return this.leftClick=!1,e}consumeRightClick(){const e=this.rightClick;return this.rightClick=!1,e}consumeKeyPress(e){const t=!!this._justPressed[e];return this._justPressed[e]=!1,t}consumeScroll(){const e=this.scrollDelta;return this.scrollDelta=0,e}}const mn=Object.freeze({RAW:"raw",COOKED:"cooked",MEAL:"meal",PRESERVED:"preserved",RESTORATIVE:"restorative"}),Pi=Object.freeze({STAMINA_REGEN:"stamina_regen",COLD_RESISTANCE:"cold_resistance",FOCUS_REGEN:"focus_regen",CORRUPTION_RESISTANCE:"corruption_resistance",HEALTH_REGEN:"health_regen"});class _n{constructor({id:e,name:t,category:n,hungerRestore:r,effects:s=[]}){this.id=e,this.name=t,this.category=n,this.hungerRestore=r,this.effects=s}}const yd={raw_berries:new _n({id:"raw_berries",name:"Raw Berries",category:mn.RAW,hungerRestore:8}),raw_meat:new _n({id:"raw_meat",name:"Raw Meat",category:mn.RAW,hungerRestore:5}),raw_mushroom:new _n({id:"raw_mushroom",name:"Raw Mushroom",category:mn.RAW,hungerRestore:6}),cooked_meat:new _n({id:"cooked_meat",name:"Cooked Meat",category:mn.COOKED,hungerRestore:25,effects:[{type:Pi.STAMINA_REGEN,duration:60,strength:2}]}),cooked_fish:new _n({id:"cooked_fish",name:"Cooked Fish",category:mn.COOKED,hungerRestore:20,effects:[{type:Pi.HEALTH_REGEN,duration:30,strength:1}]}),hearth_stew:new _n({id:"hearth_stew",name:"Hearth Stew",category:mn.MEAL,hungerRestore:40,effects:[{type:Pi.STAMINA_REGEN,duration:120,strength:3},{type:Pi.COLD_RESISTANCE,duration:120,strength:1}]}),lembas:new _n({id:"lembas",name:"Lembas Bread",category:mn.PRESERVED,hungerRestore:50}),athelas_tea:new _n({id:"athelas_tea",name:"Athelas Tea",category:mn.RESTORATIVE,hungerRestore:10,effects:[{type:Pi.HEALTH_REGEN,duration:60,strength:3},{type:Pi.CORRUPTION_RESISTANCE,duration:60,strength:2}]}),trail_rations:new _n({id:"trail_rations",name:"Trail Rations",category:mn.PRESERVED,hungerRestore:20}),herb_salad:new _n({id:"herb_salad",name:"Herb Salad",category:mn.MEAL,hungerRestore:30,effects:[{type:Pi.FOCUS_REGEN,duration:90,strength:2}]}),bread:new _n({id:"bread",name:"Bread",category:mn.COOKED,hungerRestore:20}),berries:new _n({id:"berries",name:"Berries",category:mn.RAW,hungerRestore:8}),mushroom:new _n({id:"mushroom",name:"Mushroom",category:mn.RAW,hungerRestore:6})};function eg(i){return yd[i]}function tg(i,e,t,n,r,s){const o=Pa[s];return o===void 0||nn(i.getBlock(t,n,r))||!e.remove(s,1)?!1:(i.setBlock(t,n,r,o),!0)}function pl(i,e,t,n){let r=Math.floor(e.x),s=Math.floor(e.y),o=Math.floor(e.z);const a=t.x>=0?1:-1,c=t.y>=0?1:-1,l=t.z>=0?1:-1,h=t.x!==0?Math.abs(1/t.x):1/0,u=t.y!==0?Math.abs(1/t.y):1/0,f=t.z!==0?Math.abs(1/t.z):1/0;let m=t.x!==0?(t.x>0?r+1-e.x:e.x-r)*h:1/0,_=t.y!==0?(t.y>0?s+1-e.y:e.y-s)*u:1/0,x=t.z!==0?(t.z>0?o+1-e.z:e.z-o)*f:1/0,p=0,d={x:0,y:0,z:0};for(;p<n;){if(_0(i.getBlock(r,s,o)))return{blockPos:{x:r,y:s,z:o},normal:d,t:p};m<_&&m<x?(p=m,r+=a,m+=h,d={x:-a,y:0,z:0}):_<x?(p=_,s+=c,_+=u,d={x:0,y:-c,z:0}):(p=x,o+=l,x+=f,d={x:0,y:0,z:-l})}return null}function xn(i,e){const t=i.x-e.x,n=i.y-e.y,r=i.z-e.z;return Math.sqrt(t*t+n*n+r*r)}function As(i,e){return i.x*e.x+i.y*e.y+i.z*e.z}function _i(i){const e=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z);return e===0?{x:0,y:0,z:0}:{x:i.x/e,y:i.y/e,z:i.z/e}}const ae=Object.freeze({WOLF:"wolf",GOBLIN:"goblin",SPIDER:"spider",TROLL:"troll",WIGHT:"wight",GUARDIAN:"guardian",CONSTRUCT:"construct",ORC:"orc",GIANT_SPIDER:"giant_spider",SHADOW:"shadow",BARROW_WIGHT:"barrow_wight",GOBLIN_ARCHER:"goblin_archer",CORRUPTED_BEAR:"corrupted_bear",DARK_CONSTRUCT:"dark_construct",WRAITH:"wraith"}),Ni=Object.freeze({IDLE:"idle",CHASE:"chase",ATTACK:"attack",DEAD:"dead"}),ng={[ae.WOLF]:{health:30,speed:4,aggroRange:12,damage:8,attackRange:1.5},[ae.GOBLIN]:{health:25,speed:3,aggroRange:10,damage:6,attackRange:1.5},[ae.SPIDER]:{health:20,speed:5,aggroRange:8,damage:10,attackRange:1.2},[ae.TROLL]:{health:100,speed:2,aggroRange:15,damage:25,attackRange:2.5},[ae.WIGHT]:{health:50,speed:3.5,aggroRange:14,damage:15,attackRange:1.5},[ae.GUARDIAN]:{health:150,speed:1.5,aggroRange:18,damage:30,attackRange:2},[ae.CONSTRUCT]:{health:80,speed:2.5,aggroRange:12,damage:20,attackRange:2},[ae.ORC]:{health:50,speed:3,aggroRange:12,damage:12,attackRange:1.5},[ae.GIANT_SPIDER]:{health:45,speed:4.5,aggroRange:10,damage:15,attackRange:1.5},[ae.SHADOW]:{health:20,speed:6,aggroRange:16,damage:18,attackRange:1.2},[ae.BARROW_WIGHT]:{health:80,speed:3,aggroRange:16,damage:22,attackRange:1.8},[ae.GOBLIN_ARCHER]:{health:20,speed:2.5,aggroRange:18,damage:8,attackRange:8},[ae.CORRUPTED_BEAR]:{health:120,speed:3,aggroRange:14,damage:20,attackRange:2},[ae.DARK_CONSTRUCT]:{health:130,speed:2,aggroRange:14,damage:28,attackRange:2.2},[ae.WRAITH]:{health:70,speed:4,aggroRange:20,damage:30,attackRange:1.8}},ig={[ae.WOLF]:[{type:"leather",count:1},{type:"raw_meat",count:1}],[ae.GOBLIN]:[{type:"stick",count:2},{type:"iron_ore",count:1}],[ae.SPIDER]:[{type:"fiber",count:2},{type:"rope",count:1}],[ae.TROLL]:[{type:"stone",count:3},{type:"leather",count:2}],[ae.WIGHT]:[{type:"relic_shard",count:1},{type:"lore_fragment",count:1}],[ae.GUARDIAN]:[{type:"relic_shard",count:2},{type:"iron_ore",count:3}],[ae.CONSTRUCT]:[{type:"iron_ore",count:2},{type:"copper_ore",count:2}],[ae.ORC]:[{type:"iron_ore",count:1},{type:"leather",count:1}],[ae.GIANT_SPIDER]:[{type:"fiber",count:3},{type:"rope",count:2}],[ae.SHADOW]:[{type:"relic_shard",count:1}],[ae.BARROW_WIGHT]:[{type:"relic_shard",count:2},{type:"lore_fragment",count:2}],[ae.GOBLIN_ARCHER]:[{type:"stick",count:3},{type:"fiber",count:1}],[ae.CORRUPTED_BEAR]:[{type:"leather",count:3},{type:"raw_meat",count:2}],[ae.DARK_CONSTRUCT]:[{type:"iron_ore",count:3},{type:"relic_shard",count:1}],[ae.WRAITH]:[{type:"relic_shard",count:3},{type:"lore_fragment",count:2}]};function rg(i){return ig[i]||[]}class sg{constructor(e,t){const n=ng[t];this.position={...e},this.type=t,this.health=n.health,this.maxHealth=n.health,this.speed=n.speed,this.aggroRange=n.aggroRange,this.damage=n.damage,this.attackRange=n.attackRange,this.state=Ni.IDLE,this.attackCooldown=0}updateAI(e,t,n,r){if(this.isDead()){this.state=Ni.DEAD;return}const s=xn(this.position,e);if(s>this.aggroRange*1.5?this.state=Ni.IDLE:s<=this.aggroRange&&(this.state=Ni.CHASE),this.state===Ni.CHASE){const o=e.x-this.position.x,a=e.z-this.position.z,c=Math.sqrt(o*o+a*a);if(c>.1){const l=o/c*this.speed*t,h=a/c*this.speed*t;if(r){const u=this.position.x+l;this._collidesWithBlock(u,this.position.z,r)||(this.position.x=u);const f=this.position.z+h;this._collidesWithBlock(this.position.x,f,r)||(this.position.z=f)}else this.position.x+=l,this.position.z+=h}}n&&(this.position.y=n(Math.floor(this.position.x),Math.floor(this.position.z))+1),this.attackCooldown=Math.max(0,this.attackCooldown-t)}_collidesWithBlock(e,t,n){const r=Math.floor(e),s=Math.floor(this.position.y),o=Math.floor(t);return nn(n.getBlock(r,s,o))||nn(n.getBlock(r,s+1,o))}canAttack(e){return this.state===Ni.CHASE&&xn(this.position,e)<=this.attackRange&&this.attackCooldown<=0}performAttack(){return this.attackCooldown=1,this.damage}takeDamage(e){this.health=Math.max(0,this.health-e),this.health<=0&&(this.state=Ni.DEAD)}isDead(){return this.health<=0}}const Hn=Object.freeze({dawn:240,day:2400,dusk:240,night:2400}),gr=Hn.dawn+Hn.day+Hn.dusk+Hn.night,yt=Object.freeze({DAWN:"dawn",DAY:"day",DUSK:"dusk",NIGHT:"night"}),og=Hn.dawn/gr,ag=(Hn.dawn+Hn.day)/gr,cg=(Hn.dawn+Hn.day+Hn.dusk)/gr;class lg{constructor(){this.time=0,this.day=1}tick(e){for(this.time+=e;this.time>=gr;)this.time-=gr,this.day++}getNormalizedTime(){return this.time/gr}getPhase(){const e=this.getNormalizedTime();return e<og?yt.DAWN:e<ag?yt.DAY:e<cg?yt.DUSK:yt.NIGHT}}const Sd=Object.freeze({man:{id:"man",name:"Man",classIds:["ranger","soldier","scholar"],statModifiers:{health:100,stamina:110,focus:50,corruptionResistance:50,perception:50,craft:50}},elf:{id:"elf",name:"Elf",classIds:["archer","warden","gatherer"],statModifiers:{health:90,stamina:100,focus:80,corruptionResistance:50,perception:70,craft:50}},dwarf:{id:"dwarf",name:"Dwarf",classIds:["miner","blacksmith","delver"],statModifiers:{health:120,stamina:100,focus:35,corruptionResistance:70,perception:40,craft:80}},hobbit:{id:"hobbit",name:"Hobbit",classIds:["burglar","cook","forager"],statModifiers:{health:80,stamina:100,focus:55,corruptionResistance:75,perception:60,craft:55}}});function dg(i){return Sd[i]||null}const tc=Object.freeze({ranger:{id:"ranger",name:"Ranger",raceId:"man",starterItems:[{type:"short_bow",count:1},{type:"knife",count:1},{type:"raw_meat",count:2}],passive:"Tracking: see beast footprints",activeAbility:"Focused Shot"},soldier:{id:"soldier",name:"Soldier",raceId:"man",starterItems:[{type:"spear",count:1},{type:"shield",count:1},{type:"raw_meat",count:2}],passive:"Improved block stability",activeAbility:"Shield Bash"},scholar:{id:"scholar",name:"Scholar",raceId:"man",starterItems:[{type:"knife",count:1},{type:"lantern",count:1},{type:"raw_meat",count:2}],passive:"Identify ruins and relics faster",activeAbility:"Sense Ward"},archer:{id:"archer",name:"Archer",raceId:"elf",starterItems:[{type:"refined_bow",count:1},{type:"knife",count:1},{type:"stick",count:10}],passive:"Reduced bow sway",activeAbility:"Keen Eye"},warden:{id:"warden",name:"Warden",raceId:"elf",starterItems:[{type:"spear",count:1},{type:"ward_token",count:1},{type:"raw_meat",count:2}],passive:"Stronger resistance near allied beacons",activeAbility:"Light Ward"},gatherer:{id:"gatherer",name:"Gatherer",raceId:"elf",starterItems:[{type:"knife",count:1},{type:"fiber",count:5},{type:"raw_meat",count:3}],passive:"Better yield from plants and herbs",activeAbility:"Nature Sense"},miner:{id:"miner",name:"Miner",raceId:"dwarf",starterItems:[{type:"pickaxe",count:1},{type:"stick",count:5},{type:"stone",count:5}],passive:"Faster ore and stone extraction",activeAbility:"Delver's Strike"},blacksmith:{id:"blacksmith",name:"Blacksmith",raceId:"dwarf",starterItems:[{type:"hammer",count:1},{type:"stone",count:10},{type:"raw_meat",count:2}],passive:"Gear wears slower",activeAbility:"Field Repair"},delver:{id:"delver",name:"Delver",raceId:"dwarf",starterItems:[{type:"axe",count:1},{type:"lantern",count:1},{type:"raw_meat",count:2}],passive:"Reduced underground detection and fall damage",activeAbility:"Stone Sense"},burglar:{id:"burglar",name:"Burglar",raceId:"hobbit",starterItems:[{type:"knife",count:1},{type:"sling",count:1},{type:"cooked_meat",count:3}],passive:"Reduced enemy detection while crouched",activeAbility:"Slip Away"},cook:{id:"cook",name:"Cook",raceId:"hobbit",starterItems:[{type:"knife",count:1},{type:"fiber",count:5},{type:"cooked_meat",count:5}],passive:"Meals give longer buffs",activeAbility:"Hearth Meal"},forager:{id:"forager",name:"Forager",raceId:"hobbit",starterItems:[{type:"stick",count:3},{type:"knife",count:1},{type:"cooked_meat",count:3}],passive:"Improved berry, mushroom, and root yields",activeAbility:"Wild Sense"}});function hg(i){return tc[i]||null}class Ed{constructor(e){this.size=e,this._slots=new Array(e).fill(null)}getSlot(e){return this._slots[e]||null}_findSlot(e){for(let t=0;t<this.size;t++)if(this._slots[t]&&this._slots[t].type===e)return t;return-1}_findEmpty(){for(let e=0;e<this.size;e++)if(!this._slots[e])return e;return-1}addItem(e,t){const n=this._findSlot(e);if(n>=0)return this._slots[n].count+=t,!0;const r=this._findEmpty();return r<0?!1:(this._slots[r]={type:e,count:t},!0)}removeItem(e,t){const n=this._findSlot(e);return n<0||this._slots[n].count<t?!1:(this._slots[n].count-=t,this._slots[n].count<=0&&(this._slots[n]=null),!0)}moveSlot(e,t){const n=this._slots[t];this._slots[t]=this._slots[e],this._slots[e]=n}count(e){let t=0;for(const n of this._slots)n&&n.type===e&&(t+=n.count);return t}getItems(){return this._slots.filter(e=>e!==null).map(e=>({...e}))}add(e,t){return this.addItem(e,t)}remove(e,t){return this.removeItem(e,t)}}const ug=.1,fg=.5,pg=5,mg=10,_g=.3,gg=1,vg=.5,xg=.5,yg=.3,Sg=.6,Eg=-15,Mg=60,bg={[pt.SHIRE]:0,[pt.FOREST]:-.2,[pt.MOUNTAIN]:-1,[pt.MIRKWOOD]:-.3,[pt.PLAINS]:.1};class Md{constructor(){this.health=100,this.maxHealth=100,this.stamina=100,this.maxStamina=100,this.hunger=100,this.maxHunger=100,this.focus=50,this.maxFocus=100,this.temperature=0,this.coldResistance=0,this.corruption=0,this._inCorruptedZone=!1,this._injuries=[]}setBiomeTemperature(e){this.temperature=bg[e]??0}setCorruptionZone(e){this._inCorruptedZone=e}applyInjury(e,t,n){this._injuries=this._injuries.filter(r=>r.type!==e),this._injuries.push({type:e,remaining:t,strength:n})}hasInjury(e){return this._injuries.some(t=>t.type===e)}getFractureSpeedMultiplier(){return this.hasInjury("fracture")?Sg:1}checkFallFracture(e){e<=Eg&&this.applyInjury("fracture",Mg,1)}tick(e){if(this.hunger=Math.max(0,this.hunger-ug*e),this.hunger<=0&&(this.health=Math.max(0,this.health-fg*e)),this.temperature<0){const t=Math.min(0,this.temperature+this.coldResistance);t<0&&(this.health=Math.max(0,this.health-_g*Math.abs(t)*e))}this._inCorruptedZone&&(this.corruption=Math.min(100,this.corruption+gg*e)),this.corruption>50&&(this.focus=Math.max(0,this.focus-vg*(this.corruption/100)*e));for(const t of this._injuries)t.remaining-=e,t.type==="bleeding"?this.health=Math.max(0,this.health-xg*t.strength*e):t.type==="poison"&&(this.health=Math.max(0,this.health-yg*t.strength*e));this._injuries=this._injuries.filter(t=>t.remaining>0),this.stamina=Math.min(this.maxStamina,this.stamina+pg*e)}applySprint(e){this.stamina=Math.max(0,this.stamina-mg*e)}eat(e){this.hunger=Math.min(this.maxHunger,this.hunger+e)}takeDamage(e){this.health=Math.max(0,this.health-e)}isDead(){return this.health<=0}}const Tg=5,Ag=.5;class bd{constructor({x:e,y:t,z:n},{moveSpeed:r=Tg,physicalHeight:s=1.8,physicalWidth:o=.6,eyeHeight:a=1.6}={}){this.position={x:e,y:t,z:n},this.velocity={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.moveSpeed=r,this.onGround=!1,this.crouching=!1,this.cameraMode="first_person",this.physicalHeight=s,this.physicalWidth=o,this.eyeHeight=a}toggleCamera(){this.cameraMode=this.cameraMode==="first_person"?"third_person_behind":"first_person"}setCrouch(e){this.crouching=e}applyMovementInput(e,t){let n=0,r=0;if(e.forward&&(r-=1),e.back&&(r+=1),e.left&&(n-=1),e.right&&(n+=1),n===0&&r===0)return;const s=Math.sqrt(n*n+r*r);n/=s,r/=s;const o=Math.cos(this.yaw),a=Math.sin(this.yaw),c=n*o-r*a,l=n*a+r*o,h=this.crouching?this.moveSpeed*Ag:this.moveSpeed;this.position.x+=c*h*t,this.position.z+=l*h*t}}function Rg(i,e){return i==="elf"&&(e===pt.FOREST||e===pt.MIRKWOOD)?1.2:1}function wg(i){return i==="dwarf"?.85:1}function Cg(i){return i==="hobbit"?3:0}const ml={man:{height:1.8,width:.6,eyeHeight:1.6},elf:{height:1.9,width:.6,eyeHeight:1.7},dwarf:{height:1.4,width:.65,eyeHeight:1.2},hobbit:{height:1.1,width:.5,eyeHeight:.95}};function Ig(i){return ml[i]||ml.man}const Og={starter_watchpost:"Watch-Post",roadside_hall:"Ranger Hall",mountain_workshop:"Mountain Workshop",forest_beacon:"Forest Beacon",ward_bastion:"Ward Bastion"};function Dg(i){const e=Og[i]||i;return{fastTravel:!0,merchant:{id:`${i}_merchant`,name:`${e} Merchant`,position:null,factionId:null,dialogue:{default:`Welcome to the restored ${e}. What would you like to trade?`}},message:"Site Restored! Benefits: fast travel, merchant, safe bed, storage.",roofBlock:g.OAK_PLANKS}}function Lg(i,e){return e?Math.ceil(i*1.5):i}function Pg(i){return .2}const No=Object.freeze({STORY:"story",STANDARD:"standard",HARSH:"harsh"}),Ng={[No.STORY]:1.25,[No.STANDARD]:1,[No.HARSH]:.8};function kg({raceId:i,classId:e,difficulty:t,worldName:n,characterName:r}){return{raceId:i,classId:e,difficulty:t,worldName:n||"",characterName:r||""}}function Ug(i){const e=dg(i.raceId),t=hg(i.classId),n=new Ed(36);for(const c of t.starterItems)n.add(c.type,c.count);const r=Ng[i.difficulty]||1,s=new Md;s.maxHealth=Math.round(e.statModifiers.health*r),s.health=s.maxHealth,s.maxStamina=e.statModifiers.stamina,s.stamina=s.maxStamina,s.focus=e.statModifiers.focus,s.maxFocus=e.statModifiers.focus;const o=Ig(i.raceId);return{player:new bd({x:.5,y:R0+2,z:.5},{physicalHeight:o.height,physicalWidth:o.width,eyeHeight:o.eyeHeight}),inventory:n,survivalStats:s,race:e,cls:t}}const ko=3,Uo=.7,Fg=.5,_l=1.2;class Bg{constructor(){this.attackCooldown=0,this._guarding=!1}setGuard(e){this._guarding=e}playerAttack(e,t,n,r){const s=_i(t);let o=!1;for(const a of n){if(a.isDead()||xn(e,a.position)>ko)continue;const l=_i({x:a.position.x-e.x,y:a.position.y-e.y,z:a.position.z-e.z});if(As(s,l)>=Uo){a.takeDamage(r),o=!0;break}}return o&&(this.attackCooldown=Fg),o}heavyAttack(e,t,n,r){const s=_i(t);let o=!1;for(const a of n){if(a.isDead()||xn(e,a.position)>ko)continue;const l=_i({x:a.position.x-e.x,y:a.position.y-e.y,z:a.position.z-e.z});if(As(s,l)>=Uo){a.takeDamage(r*2),o=!0;break}}return o&&(this.attackCooldown=_l),o}playerAttackWithWeapon(e,t,n,r,s){const o=r*(s.damageModifier||1);return this.playerAttack(e,t,n,o)}heavyAttackWithWeapon(e,t,n,r,s){const o=_i(t);let a=!1;const c=r*2*(s.damageModifier||1);for(const l of n){if(l.isDead()||xn(e,l.position)>ko)continue;const u=_i({x:l.position.x-e.x,y:l.position.y-e.y,z:l.position.z-e.z});if(As(o,u)>=Uo){l.takeDamage(c),a=!0;break}}return a&&(this.attackCooldown=_l),a}parry(e,t,n){return xn(t,e.position)>e.attackRange?!1:(e.takeDamage(e.damage),!0)}rangedAttack(e,t,n,r,s){const o=_i(t),a=.95;for(const c of n){if(c.isDead()||xn(e,c.position)>s)continue;const h=_i({x:c.position.x-e.x,y:c.position.y-e.y,z:c.position.z-e.z});if(As(o,h)>=a)return c.takeDamage(r),!0}return!1}processEnemyAttacks(e,t,n){for(const r of e)if(!r.isDead()&&r.canAttack(t)){let s=r.performAttack();this._guarding&&(s*=.5),n.takeDamage(s)}}}const gl=8,vl=15,zg=35,xl=[ae.WOLF,ae.GOBLIN,ae.SPIDER,ae.TROLL,ae.WIGHT,ae.ORC,ae.GIANT_SPIDER,ae.SHADOW,ae.BARROW_WIGHT,ae.GOBLIN_ARCHER,ae.CORRUPTED_BEAR,ae.DARK_CONSTRUCT,ae.WRAITH];class Hg{constructor(e){this.rng=e}trySpawn({phase:e,playerPos:t,existingCount:n,surfaceY:r,getHeight:s}){if(e!==yt.NIGHT&&e!==yt.DUSK)return[];if(n>=gl)return[];const o=Math.floor(this.rng()*3)+1,a=[];for(let c=0;c<o&&n+a.length<gl;c++){const l=this.rng()*Math.PI*2,h=vl+this.rng()*(zg-vl),u=t.x+Math.cos(l)*h,f=t.z+Math.sin(l)*h,m=Math.floor(this.rng()*xl.length),_=xl[m],x=s?s(u,f)+1:r;a.push(new sg({x:u,y:x,z:f},_))}return a}}const Gg={[ae.WOLF]:6974058,[ae.GOBLIN]:4880954,[ae.SPIDER]:2759178,[ae.TROLL]:8022618,[ae.WIGHT]:6702250,[ae.GUARDIAN]:12290116,[ae.CONSTRUCT]:5592490,[ae.ORC]:5925434,[ae.GIANT_SPIDER]:1706496,[ae.SHADOW]:657946,[ae.BARROW_WIGHT]:5583786,[ae.GOBLIN_ARCHER]:3824170,[ae.CORRUPTED_BEAR]:9065762,[ae.DARK_CONSTRUCT]:2763349,[ae.WRAITH]:1704004};ae.WOLF+"",ae.GOBLIN+"",ae.SPIDER+"",ae.TROLL+"",ae.WIGHT+"",ae.GUARDIAN+"",ae.CONSTRUCT+"",ae.ORC+"",ae.GIANT_SPIDER+"",ae.SHADOW+"",ae.BARROW_WIGHT+"",ae.GOBLIN_ARCHER+"",ae.CORRUPTED_BEAR+"",ae.DARK_CONSTRUCT+"",ae.WRAITH+"";ae.WOLF,ae.SPIDER,ae.GIANT_SPIDER,ae.CORRUPTED_BEAR;function ne(i,e){const t=Math.min(255,(i>>16&255)*e)|0,n=Math.min(255,(i>>8&255)*e)|0,r=Math.min(255,(i&255)*e)|0;return t<<16|n<<8|r}function B(i,e,t,n,r,s,o,a){const c={name:i,w:e,h:t,d:n,offsetY:r,color:s};return o&&(c.offsetX=o),a&&(c.offsetZ=a),c}function Vg(i){return[B("body",.4,.32,.7,.48,i),B("chest",.44,.28,.2,.5,ne(i,1.05),0,-.22),B("head",.3,.26,.28,.58,ne(i,1.08),0,-.48),B("snout",.16,.12,.2,.5,ne(i,.88),0,-.68),B("nose",.06,.06,.04,.52,1052174,0,-.78),B("ear",.07,.14,.06,.74,ne(i,.8),-.1,-.42),B("ear",.07,.14,.06,.74,ne(i,.8),.1,-.42),B("tail",.08,.1,.3,.6,ne(i,.9),0,.48),B("tail_tip",.06,.08,.14,.68,ne(i,.85),0,.62),B("leg",.09,.32,.09,.16,ne(i,.82),-.14,-.22),B("leg",.09,.32,.09,.16,ne(i,.82),.14,-.22),B("leg",.1,.32,.1,.16,ne(i,.82),-.14,.22),B("leg",.1,.32,.1,.16,ne(i,.82),.14,.22),B("paw",.11,.06,.12,.03,ne(i,.7),-.14,-.22),B("paw",.11,.06,.12,.03,ne(i,.7),.14,-.22),B("paw",.11,.06,.12,.03,ne(i,.7),-.14,.22),B("paw",.11,.06,.12,.03,ne(i,.7),.14,.22)]}function yl(i,e){const t=[B("cephalothorax",.4*e,.22*e,.32*e,.3*e,ne(i,1.1),0,-.12*e),B("abdomen",.5*e,.3*e,.48*e,.35*e,i,0,.28*e),B("stripe",.12*e,.12*e,.4*e,.42*e,ne(i,.6),0,.28*e),B("eye",.05*e,.04*e,.04*e,.38*e,10029064,-.06*e,-.28*e),B("eye",.05*e,.04*e,.04*e,.38*e,10029064,.06*e,-.28*e),B("fang",.05*e,.1*e,.12*e,.22*e,ne(i,.7),-.08*e,-.32*e),B("fang",.05*e,.1*e,.12*e,.22*e,ne(i,.7),.08*e,-.32*e)],n=[-.2,-.06,.08,.22],r=[.32,.38,.38,.32],s=[.28,.3,.3,.26];for(let o=0;o<4;o++)for(const a of[-1,1])t.push(B("leg",.04*e,s[o]*e,.04*e,s[o]*.5*e,ne(i,.75),a*r[o]*e,n[o]*e)),t.push(B("foot",.06*e,.04*e,.06*e,.02*e,ne(i,.6),a*(r[o]+.02)*e,n[o]*e));return t}function Wg(i){return[B("body",.9,.58,1.2,.72,i),B("hump",.65,.2,.45,1.08,ne(i,1.06),0,-.15),B("head",.45,.38,.42,.92,ne(i,1.08),0,-.7),B("snout",.22,.16,.22,.82,ne(i,.9),0,-.98),B("nose",.08,.06,.04,.85,919560,0,-1.08),B("ear",.1,.1,.08,1.14,ne(i,.85),-.16,-.64),B("ear",.1,.1,.08,1.14,ne(i,.85),.16,-.64),B("leg",.18,.44,.18,.22,ne(i,.82),-.28,-.35),B("leg",.18,.44,.18,.22,ne(i,.82),.28,-.35),B("leg",.2,.44,.2,.22,ne(i,.82),-.3,.35),B("leg",.2,.44,.2,.22,ne(i,.82),.3,.35),B("claw",.2,.06,.1,.03,ne(i,.6),-.28,-.48),B("claw",.2,.06,.1,.03,ne(i,.6),.28,-.48),B("tail",.1,.1,.12,.88,ne(i,.9),0,.62)]}function Fo(i,e){const t=[B("leg",.14,.28,.14,.14,ne(i,.75),-.1),B("leg",.14,.28,.14,.14,ne(i,.75),.1),B("foot",.18,.06,.2,.03,ne(i,.6),-.1,-.04),B("foot",.18,.06,.2,.03,ne(i,.6),.1,-.04),B("body",.42,.42,.3,.48,i,0,.02),B("loincloth",.3,.08,.2,.3,5916720,0,-.02),B("head",.32,.28,.28,.82,ne(i,1.1),0,-.02),B("ear",.14,.08,.06,.86,ne(i,.85),-.22),B("ear",.14,.08,.06,.86,ne(i,.85),.22),B("eye",.05,.04,.04,.86,10062874,-.08,-.14),B("eye",.05,.04,.04,.86,10062874,.08,-.14),B("nose",.06,.08,.08,.78,ne(i,.9),0,-.16),B("arm",.1,.42,.1,.48,ne(i,.88),-.28),B("arm",.1,.42,.1,.48,ne(i,.88),.28)];return e?(t.push(B("bow",.04,.45,.04,.5,6702880,-.35)),t.push(B("quiver",.1,.3,.06,.65,5848862,.08,.16))):t.push(B("sword",.04,.35,.04,.48,6709328,.32)),t}function Xg(i){return[B("boot",.24,.12,.3,.06,3354142,-.14,.02),B("boot",.24,.12,.3,.06,3354142,.14,.02),B("leg",.2,.38,.2,.3,ne(i,.75),-.14),B("leg",.2,.38,.2,.3,ne(i,.75),.14),B("body",.55,.58,.38,.72,i),B("armor",.4,.3,.06,.78,4998712,0,-.16),B("pauldron",.18,.14,.22,1.02,4998712,-.34),B("pauldron",.18,.14,.22,1.02,4998712,.34),B("spike",.06,.1,.06,1.14,5919296,-.34),B("spike",.06,.1,.06,1.14,5919296,.34),B("head",.35,.3,.32,1.18,ne(i,1.05)),B("jaw",.28,.1,.12,1,ne(i,.9),0,-.14),B("tusk",.04,.08,.04,1.02,14340786,-.1,-.18),B("tusk",.04,.08,.04,1.02,14340786,.1,-.18),B("arm",.16,.52,.16,.7,ne(i,.88),-.38),B("arm",.16,.52,.16,.7,ne(i,.88),.38),B("axe_handle",.04,.65,.04,.65,5917748,.5),B("axe_head",.18,.14,.04,1.02,7368812,.5,-.06)]}function qg(i){return[B("foot",.36,.14,.42,.07,ne(i,.7),-.22,.04),B("foot",.36,.14,.42,.07,ne(i,.7),.22,.04),B("leg",.28,.58,.32,.42,ne(i,.82),-.22),B("leg",.28,.58,.32,.42,ne(i,.82),.22),B("body",.9,1.05,.72,1.2,i),B("belly",.7,.5,.2,1,ne(i,1.05),0,-.2),B("shoulders",1.1,.22,.78,1.82,ne(i,.92),0,.04),B("head",.42,.32,.38,2.08,ne(i,1.1),0,-.04),B("brow",.38,.06,.08,2.18,ne(i,.85),0,-.18),B("jaw",.34,.1,.14,1.88,ne(i,.9),0,-.14),B("arm",.22,1.1,.22,1.1,ne(i,.88),-.62),B("arm",.22,1.1,.22,1.1,ne(i,.88),.62),B("fist",.28,.24,.22,.42,ne(i,.78),-.62),B("fist",.28,.24,.22,.42,ne(i,.78),.62),B("club",.12,.85,.12,.8,5916720,.72),B("club_head",.2,.25,.2,1.3,4996648,.72)]}function Fa(i,e){return[B("skirt",.5*e,.56*e,.4*e,.28*e,ne(i,.75)),B("hem",.56*e,.1*e,.44*e,.05*e,ne(i,.65)),B("body",.42*e,.65*e,.32*e,.75*e,ne(i,.85)),B("cloak",.48*e,.9*e,.06*e,.6*e,ne(i,.7),0,.08*e),B("hood",.38*e,.32*e,.34*e,1.25*e,ne(i,.72),0,.02*e),B("face",.2*e,.15*e,.06*e,1.2*e,ne(i,.3),0,-.12*e),B("eye",.04*e,.03*e,.03*e,1.22*e,8427980,-.05*e,-.16*e),B("eye",.04*e,.03*e,.03*e,1.22*e,8427980,.05*e,-.16*e),B("arm",.1*e,.55*e,.1*e,.7*e,ne(i,.9),-.3*e),B("arm",.1*e,.55*e,.1*e,.7*e,ne(i,.9),.3*e),B("hand",.08*e,.1*e,.04*e,.35*e,10918284,-.3*e),B("hand",.08*e,.1*e,.04*e,.35*e,10918284,.3*e)]}function Yg(i){const e=Fa(i,1.15);return e.push(B("crown",.36,.06,.36,1.62,4208688)),e.push(B("crown_spike",.04,.1,.04,1.7,4208688,-.12)),e.push(B("crown_spike",.04,.1,.04,1.7,4208688,.12)),e.push(B("crown_spike",.04,.1,.04,1.7,4208688,0,-.12)),e.push(B("blade",.04,.6,.04,.5,5921388,.38)),e.push(B("guard",.1,.04,.04,.82,5000280,.38)),e}function Kg(i){return[B("foot",.4,.16,.46,.08,ne(i,.7),-.25,.02),B("foot",.4,.16,.46,.08,ne(i,.7),.25,.02),B("leg",.32,.7,.32,.5,ne(i,.82),-.25),B("leg",.32,.7,.32,.5,ne(i,.82),.25),B("body",1,1.3,.8,1.35,i),B("emblem",.3,.3,.06,1.5,ne(i,1.2),0,-.38),B("shoulders",1.25,.22,.9,2.1,ne(i,.88)),B("head",.48,.42,.44,2.48,ne(i,1.1)),B("visor",.4,.12,.08,2.42,ne(i,.6),0,-.22),B("crest",.06,.16,.3,2.78,ne(i,1.15)),B("arm",.26,1.1,.26,1.35,ne(i,.88),-.68),B("arm",.26,1.1,.26,1.35,ne(i,.88),.68),B("fist",.3,.26,.24,.68,ne(i,.75),-.68),B("fist",.3,.26,.24,.68,ne(i,.75),.68),B("shield",.06,.7,.5,1.4,ne(i,.8),-.88),B("boss",.06,.15,.15,1.4,ne(i,1.3),-.92)]}function Sl(i,e){return[B("foot",.28*e,.12*e,.32*e,.06*e,ne(i,.7),-.18*e,.02),B("foot",.28*e,.12*e,.32*e,.06*e,ne(i,.7),.18*e,.02),B("leg",.22*e,.52*e,.24*e,.38*e,ne(i,.82),-.18*e),B("leg",.22*e,.52*e,.24*e,.38*e,ne(i,.82),.18*e),B("body",.7*e,.8*e,.6*e,.95*e,i),B("plate",.5*e,.4*e,.06*e,1.05*e,ne(i,1.15),0,-.28*e),B("core",.12*e,.12*e,.04*e,1*e,8427993,0,-.32*e),B("head",.36*e,.3*e,.32*e,1.52*e,ne(i,1.05)),B("visor",.3*e,.08*e,.06*e,1.48*e,5003392,0,-.15*e),B("arm",.18*e,.7*e,.18*e,.9*e,ne(i,.88),-.44*e),B("arm",.18*e,.7*e,.18*e,.9*e,ne(i,.88),.44*e),B("gauntlet",.22*e,.2*e,.2*e,.45*e,ne(i,.75),-.44*e),B("gauntlet",.22*e,.2*e,.2*e,.45*e,ne(i,.75),.44*e)]}function $g(i){return[B("base",.4,.4,.35,.2,i),B("mid",.35,.35,.3,.5,ne(i,1.1)),B("upper",.28,.28,.25,.75,ne(i,1.2)),B("head",.22,.2,.22,.98,ne(i,1.3)),B("eye",.04,.03,.03,1,3352652,-.05,-.1),B("eye",.04,.03,.03,1,3352652,.05,-.1),B("wisp",.06,.3,.04,.6,ne(i,.8),-.25),B("wisp",.06,.3,.04,.6,ne(i,.8),.25),B("wisp",.04,.25,.06,.5,ne(i,.8),0,-.2),B("wisp",.04,.2,.06,.5,ne(i,.8),0,.2)]}function jg(i){const e=Gg[i]||16711680;switch(i){case ae.WOLF:return{parts:Vg(e)};case ae.SPIDER:return{parts:yl(e,1)};case ae.GIANT_SPIDER:return{parts:yl(e,1.4)};case ae.CORRUPTED_BEAR:return{parts:Wg(e)};case ae.GOBLIN:return{parts:Fo(e,!1)};case ae.GOBLIN_ARCHER:return{parts:Fo(e,!0)};case ae.ORC:return{parts:Xg(e)};case ae.TROLL:return{parts:qg(e)};case ae.WIGHT:return{parts:Fa(e,1)};case ae.BARROW_WIGHT:return{parts:Fa(e,1.15)};case ae.WRAITH:return{parts:Yg(e)};case ae.GUARDIAN:return{parts:Kg(e)};case ae.CONSTRUCT:return{parts:Sl(e,1)};case ae.DARK_CONSTRUCT:return{parts:Sl(e,1.2)};case ae.SHADOW:return{parts:$g(e)};default:return{parts:Fo(e,!1)}}}function Zg(i){const e=jg(i),t=new fr;for(const n of e.parts){const r=new bi(n.w,n.h,n.d),s=new $s({color:n.color}),o=new yn(r,s);o.position.y=n.offsetY,n.offsetX&&(o.position.x=n.offsetX),n.offsetZ&&(o.position.z=n.offsetZ),o.userData.partName=n.name,t.add(o)}return t}class Qg{constructor(e){this.scene=e,this.meshMap=new Map}sync(e,t){const n=new Set;for(const r of e){if(n.add(r),r.isDead()){this.meshMap.has(r)&&(this.scene.remove(this.meshMap.get(r)),this.meshMap.delete(r));continue}let s=this.meshMap.get(r);if(s||(s=Zg(r.type),this.scene.add(s),this.meshMap.set(r,s)),s.position.set(r.position.x,r.position.y,r.position.z),t){const o=t.position.x-r.position.x,a=t.position.z-r.position.z;s.rotation.y=Math.atan2(o,a)}}for(const[r,s]of this.meshMap)n.has(r)||(this.scene.remove(s),this.meshMap.delete(r))}}const Jg={road_wardens:{body:9136404,hat:2775594,skin:13213818},rivendell_keepers:{body:13944224,hat:4482747,skin:15259840},dwarven_crafters:{body:8017203,hat:10044450,skin:13213818},woodland_guardians:{body:3828282,hat:2771498,skin:12628112},beorning_wardens:{body:9071162,hat:5917226,skin:13213818}};function On(i,e){const t=Math.min(255,(i>>16&255)*e)|0,n=Math.min(255,(i>>8&255)*e)|0,r=Math.min(255,(i&255)*e)|0;return t<<16|n<<8|r}function ev(i={}){const e=i.bodyColor||13215820,t=i.hatColor||3368618,n=i.skinColor||13213818,r=i.factionId||"",s=3813408,o=2234384,c=[{name:"boot",w:.24,h:.14,d:.3,offsetY:.07,offsetX:-.13,offsetZ:.02,color:o},{name:"boot",w:.24,h:.14,d:.3,offsetY:.07,offsetX:.13,offsetZ:.02,color:o},{name:"leg",w:.2,h:.48,d:.2,offsetY:.38,offsetX:-.13,color:s},{name:"leg",w:.2,h:.48,d:.2,offsetY:.38,offsetX:.13,color:s},{name:"belt",w:.54,h:.08,d:.35,offsetY:.59,color:4864544},{name:"body",w:.5,h:.62,d:.32,offsetY:.93,color:e},{name:"shoulders",w:.62,h:.1,d:.36,offsetY:1.28,color:On(e,.82)},{name:"arm",w:.16,h:.58,d:.16,offsetY:.92,offsetX:-.36,color:On(e,.93)},{name:"arm",w:.16,h:.58,d:.16,offsetY:.92,offsetX:.36,color:On(e,.93)},{name:"hand",w:.12,h:.12,d:.12,offsetY:.53,offsetX:-.36,color:On(n,.92)},{name:"hand",w:.12,h:.12,d:.12,offsetY:.53,offsetX:.36,color:On(n,.92)},{name:"neck",w:.16,h:.08,d:.16,offsetY:1.37,color:On(n,.9)},{name:"head",w:.4,h:.4,d:.4,offsetY:1.61,color:n},{name:"nose",w:.08,h:.08,d:.1,offsetY:1.56,offsetZ:-.22,color:On(n,1.05)}];return r!=="rivendell_keepers"&&(c.push({name:"hat_brim",w:.52,h:.04,d:.52,offsetY:1.83,color:t}),c.push({name:"hat_top",w:.42,h:.16,d:.42,offsetY:1.95,color:t})),r==="road_wardens"?(c.push({name:"cloak",w:.46,h:.85,d:.06,offsetY:.85,offsetZ:.2,color:On(e,.6)}),c.push({name:"sword",w:.04,h:.52,d:.04,offsetY:.38,offsetX:-.4,color:8947864}),c.push({name:"guard",w:.12,h:.04,d:.04,offsetY:.67,offsetX:-.4,color:6708800}),c.push({name:"pommel",w:.06,h:.06,d:.06,offsetY:.14,offsetX:-.4,color:6708800})):r==="rivendell_keepers"?(c.push({name:"circlet",w:.44,h:.04,d:.44,offsetY:1.83,color:12625484}),c.push({name:"gem",w:.06,h:.06,d:.06,offsetY:1.86,offsetZ:-.2,color:4217024}),c.push({name:"robe",w:.48,h:.32,d:.3,offsetY:.32,color:e}),c.push({name:"hem",w:.5,h:.04,d:.32,offsetY:.13,color:On(e,.85)}),c.push({name:"sash",w:.04,h:.4,d:.04,offsetY:.7,offsetX:.08,offsetZ:-.14,color:10059840})):r==="dwarven_crafters"?(c.push({name:"beard",w:.24,h:.3,d:.18,offsetY:1.25,offsetZ:-.12,color:7030819}),c.push({name:"noseguard",w:.06,h:.14,d:.06,offsetY:1.86,offsetZ:-.2,color:On(t,.75)}),c.push({name:"pick_handle",w:.04,h:.6,d:.04,offsetY:1.15,offsetX:.1,offsetZ:.22,color:7564128}),c.push({name:"pick_head",w:.22,h:.08,d:.06,offsetY:1.5,offsetX:.1,offsetZ:.22,color:8421516}),c.push({name:"stocky",w:.54,h:.55,d:.36,offsetY:.93,color:On(e,.95)})):r==="woodland_guardians"?(c.push({name:"cloak",w:.44,h:.8,d:.06,offsetY:.9,offsetZ:.18,color:3365160}),c.push({name:"hood",w:.44,h:.26,d:.3,offsetY:1.72,offsetZ:.06,color:3365160}),c.push({name:"quiver",w:.12,h:.42,d:.08,offsetY:1.12,offsetX:.14,offsetZ:.2,color:5848862}),c.push({name:"arrow",w:.02,h:.16,d:.02,offsetY:1.4,offsetX:.14,offsetZ:.2,color:9207884}),c.push({name:"bow",w:.04,h:.6,d:.04,offsetY:.95,offsetX:-.48,color:6702878})):r==="beorning_wardens"&&(c.push({name:"mantle",w:.64,h:.16,d:.42,offsetY:1.22,color:8742456}),c.push({name:"fur_stripe",w:.5,h:.08,d:.08,offsetY:1.22,offsetZ:-.14,color:10125388}),c.push({name:"axe_handle",w:.04,h:.58,d:.04,offsetY:.68,offsetX:.44,color:6311480}),c.push({name:"axe_head",w:.18,h:.14,d:.04,offsetY:1.02,offsetX:.44,offsetZ:-.07,color:8421510}),c.push({name:"axe_head2",w:.18,h:.14,d:.04,offsetY:1.02,offsetX:.44,offsetZ:.07,color:8421510}),c.push({name:"fur_boot",w:.26,h:.06,d:.28,offsetY:.16,offsetX:-.13,color:8742456}),c.push({name:"fur_boot",w:.26,h:.06,d:.28,offsetY:.16,offsetX:.13,color:8742456})),{parts:c}}function tv(i){const e=Jg[i.factionId]||{},t=ev({bodyColor:e.body,hatColor:e.hat,skinColor:e.skin,factionId:i.factionId}),n=new fr;for(const r of t.parts){const s=new bi(r.w,r.h,r.d),o=new $s({color:r.color}),a=new yn(s,o);a.position.y=r.offsetY,r.offsetX&&(a.position.x=r.offsetX),r.offsetZ&&(a.position.z=r.offsetZ),a.userData.partName=r.name,n.add(a)}return n}class nv{constructor(e){this.scene=e,this.meshMap=new Map}sync(e,t){const n=new Set;for(const r of e){n.add(r.id);let s=this.meshMap.get(r.id);if(s||(s=tv(r),this.scene.add(s),this.meshMap.set(r.id,s)),s.position.set(r.position.x,r.position.y,r.position.z),t){const o=t.position.x-r.position.x,a=t.position.z-r.position.z;s.rotation.y=Math.atan2(o,a)}}for(const[r,s]of this.meshMap)n.has(r)||(this.scene.remove(s),this.meshMap.delete(r))}}const Gt=Object.freeze({CLEAR:"clear",CLOUDY:"cloudy",RAIN:"rain",STORM:"storm",SNOW:"snow",FOG:"fog"}),El=[Gt.CLEAR,Gt.CLOUDY,Gt.RAIN,Gt.STORM,Gt.SNOW,Gt.FOG],iv={[Gt.CLEAR]:0,[Gt.CLOUDY]:-.1,[Gt.RAIN]:-.3,[Gt.STORM]:-.5,[Gt.SNOW]:-.8,[Gt.FOG]:-.1},rv={[Gt.CLEAR]:1,[Gt.CLOUDY]:.9,[Gt.RAIN]:.7,[Gt.STORM]:.4,[Gt.SNOW]:.6,[Gt.FOG]:.3};class sv{constructor(){this._rng=42,this.current=Gt.CLEAR,this.elapsed=0,this.duration=this._rollDuration()}_nextRandom(){return this._rng=this._rng*1103515245+12345&2147483647,this._rng/2147483647}_rollDuration(){return 60+Math.floor(this._nextRandom()*120)}tick(e){this.elapsed+=e,this.elapsed>=this.duration&&(this.elapsed-=this.duration,this.current=El[Math.floor(this._nextRandom()*El.length)],this.duration=this._rollDuration())}getTemperatureModifier(){return iv[this.current]||0}getVisibilityModifier(){return rv[this.current]||1}}class ov{constructor({width:e,height:t,cellSize:n}){this.width=e,this.height=t,this.cellSize=n,this._cols=Math.ceil(e/n),this._rows=Math.ceil(t/n),this._revealed=new Uint8Array(this._cols*this._rows),this._landmarks=[]}_cellIndex(e,t){const n=Math.floor(e/this.cellSize),r=Math.floor(t/this.cellSize);return n<0||n>=this._cols||r<0||r>=this._rows?-1:r*this._cols+n}isRevealed(e,t){const n=this._cellIndex(e,t);return n<0?!1:this._revealed[n]===1}reveal(e,t,n){const r=Math.max(0,Math.floor((e-n)/this.cellSize)),s=Math.min(this._cols-1,Math.floor((e+n)/this.cellSize)),o=Math.max(0,Math.floor((t-n)/this.cellSize)),a=Math.min(this._rows-1,Math.floor((t+n)/this.cellSize));for(let c=o;c<=a;c++)for(let l=r;l<=s;l++){const h=(l+.5)*this.cellSize,u=(c+.5)*this.cellSize,f=h-e,m=u-t;f*f+m*m<=n*n&&(this._revealed[c*this._cols+l]=1)}}getRevealedPercentage(){let e=0;const t=this._revealed.length;for(let n=0;n<t;n++)this._revealed[n]===1&&e++;return e/t*100}addLandmark(e){this._landmarks.push(e)}getLandmarks(){return this._landmarks}serialize(){return{revealed:Array.from(this._revealed),landmarks:this._landmarks.map(e=>({...e}))}}deserialize(e){for(let t=0;t<e.revealed.length&&t<this._revealed.length;t++)this._revealed[t]=e.revealed[t];this._landmarks=e.landmarks.map(t=>({...t}))}}const av=100,cv=1.5;function kr(i){let e=0;for(let t=1;t<i;t++)e+=Math.floor(av*Math.pow(cv,t-1));return e}class lv{constructor(){this.level=1,this.experience=0,this.skillPoints=0}addExperience(e,t){for(this.experience+=e;this.experience>=kr(this.level+1);)this.level++,this.skillPoints++}getExpForNextLevel(){return kr(this.level+1)-kr(this.level)}getExpProgress(){const e=kr(this.level),n=kr(this.level+1)-e;return n<=0?0:(this.experience-e)/n}spendSkillPoint(){return this.skillPoints<=0?!1:(this.skillPoints--,!0)}}const tn=Object.freeze({MAIN_HAND:"main_hand",OFF_HAND:"off_hand",HEAD:"head",CHEST:"chest",LEGS:"legs",FEET:"feet",ACCESSORY:"accessory"}),dv=Object.values(tn);class hv{constructor(){this._slots=new Map;for(const e of dv)this._slots.set(e,null)}get(e){return this._slots.get(e)||null}equip(e){const t=this._slots.get(e.slot)||null;return this._slots.set(e.slot,e),t}unequip(e){const t=this._slots.get(e)||null;return this._slots.set(e,null),t}getTotalArmor(){let e=0;for(const t of this._slots.values())t&&t.armor&&(e+=t.armor);return e}getEquippedItems(){const e=[];for(const t of this._slots.values())t&&e.push(t);return e}}class uv{constructor(e){this.size=e,this._slots=new Array(e).fill(null),this.selectedSlot=0}getSlot(e){return this._slots[e]||null}setSlot(e,t){this._slots[e]=t}clearSlot(e){this._slots[e]=null}selectSlot(e){this.selectedSlot=(e%this.size+this.size)%this.size}getSelectedItem(){return this._slots[this.selectedSlot]||null}scrollNext(){this.selectedSlot=(this.selectedSlot+1)%this.size}scrollPrev(){this.selectedSlot=(this.selectedSlot-1+this.size)%this.size}}const Ml=100,fv=75,Bo=50,pv=2;class mv{constructor(){this.level=0}addFear(e){this.level=Math.min(Ml,this.level+e)}reduceFear(e){this.level=Math.max(0,this.level-e)}tick(e){this.level=Math.max(0,this.level-pv*e)}getMovementPenalty(){return this.level<Bo?0:(this.level-Bo)/(Ml-Bo)*.4}isTerrified(){return this.level>=fv}}yt.DAWN+"",yt.DAY+"",yt.DUSK+"",yt.NIGHT+"";yt.DAWN+"",yt.DAY+"",yt.DUSK+"",yt.NIGHT+"";yt.DAWN+"",yt.DAY+"",yt.DUSK+"",yt.NIGHT+"";const _v={man_ranger:[{type:"short_bow",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"bedroll",count:1},{type:"trail_rations",count:3}],man_soldier:[{type:"iron_sword",count:1},{type:"shield",count:1},{type:"stone_pickaxe",count:1},{type:"leather_armor",count:1},{type:"bread",count:2}],man_scholar:[{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"lantern",count:1},{type:"relic_shard",count:1},{type:"lore_fragment",count:2}],elf_archer:[{type:"refined_bow",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"arrow",count:20},{type:"lembas",count:2}],elf_warden:[{type:"spear",count:1},{type:"stone_pickaxe",count:1},{type:"ward_token",count:1},{type:"cloak",count:1},{type:"lembas",count:1}],elf_gatherer:[{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"herb_pouch",count:1},{type:"sling",count:1},{type:"berries",count:5}],dwarf_miner:[{type:"pickaxe",count:1},{type:"hammer",count:1},{type:"torch",count:3},{type:"rope",count:1}],dwarf_blacksmith:[{type:"hammer",count:1},{type:"stone_pickaxe",count:1},{type:"iron_ore",count:5},{type:"repair_kit",count:1},{type:"bread",count:2}],dwarf_delver:[{type:"axe",count:1},{type:"stone_pickaxe",count:1},{type:"lantern",count:1},{type:"rope",count:2},{type:"trail_rations",count:2}],hobbit_burglar:[{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"sling",count:1},{type:"lock_tools",count:1},{type:"mushroom",count:5}],hobbit_cook:[{type:"pan",count:1},{type:"stone_pickaxe",count:1},{type:"firestarter",count:1},{type:"raw_meat",count:3},{type:"berries",count:5}],hobbit_forager:[{type:"walking_stick",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"satchel",count:1},{type:"mushroom",count:3},{type:"berries",count:3}]};function gv(i){return _v[i]||[]}function Td(i){Object.freeze(i);for(const e of Object.values(i))e&&typeof e=="object"&&Td(e);return i}const vr=Td({PHYSICS:{GRAVITY:-20,JUMP_VELOCITY:8,PLAYER_WIDTH:.6,PLAYER_HEIGHT:1.8,VOID_FLOOR_Y:0},CAMERA:{FOV:75,NEAR:.1,FAR:80,MOUSE_SENSITIVITY:.002,MAX_PITCH:Math.PI/2-.01,THIRD_PERSON_DISTANCE:5,THIRD_PERSON_EYE_HEIGHT:2,FIRST_PERSON_EYE_HEIGHT:1.6},WORLD:{BOUNDARY_EXTENT:1680,WATER_LEVEL:26,SURFACE_Y:32},CHUNKS:{LOAD_DISTANCE:5,UNLOAD_DISTANCE:8,MAX_PER_FRAME:8,RENDER_DISTANCE:4,SIZE:16},COMBAT:{MELEE_RANGE:3,MELEE_CONE:.7,RANGED_CONE:.95,FIST_DAMAGE:2,NORMAL_COOLDOWN:.5,HEAVY_COOLDOWN:1.2,XP_PER_KILL:25,FACTION_REP_PER_KILL:10},SURVIVAL:{GAME_TIME_SCALE:4,SPRINT_MULTIPLIER:1.6,WATER_SLOWDOWN:.5,HUNGER_DRAIN_RATE:.1},FOG:{WIDTH:2100,HEIGHT:900,CELL_SIZE:10,BASE_FAR:56,BASE_NEAR_RATIO:.5,MIN_NEAR:1,REVEAL_RADIUS:20},SPAWNING:{MAX_ENEMIES:8,MIN_SPAWN_DIST:15,MAX_SPAWN_DIST:35,SPAWN_INTERVAL:10},CORRUPTION:{CENTER_X:1260,CENTER_Z:270,RADIUS:300,FOG_THRESHOLD:.1},RESTORATION:{INTERACT_RANGE:8,HINT_RANGE:10,XP_REWARD:100,FACTION_REP_REWARD:50},NPC:{INTERACT_RANGE:5},MAP:{CANVAS_WIDTH:460,CANVAS_HEIGHT:320,WORLD_MIN_X:-300,WORLD_MAX_X:1680,WORLD_MIN_Z:-360,WORLD_MAX_Z:450},COLORS:{SKY_DAY:8900331,SKY_DAWN:16757606,SKY_DUSK:16742212,SKY_NIGHT:657962,AMBIENT_LIGHT:16777215,DIR_LIGHT:16774368},LIGHTING:{AMBIENT:{dawn:.5,day:.6,dusk:.35,night:.1},DIRECTIONAL:{dawn:.6,day:.8,dusk:.4,night:.05}},QUESTS:{AUTO_ACTIVATE_SIDE_COUNT:3,XP_FIRST_NIGHT:50,XP_EXPLORATION:30,XP_DISCOVERY:20,XP_RESTORATION:100},CREATIVE:{FLY_SPEED:15},DIALOGUE:{DISPLAY_DURATION:5,SHORT_DURATION:3,SAVE_FEEDBACK_DURATION:2}});function bl(i){const e=vr.FOG.BASE_FAR*i;return{near:Math.max(vr.FOG.MIN_NEAR,e*vr.FOG.BASE_NEAR_RATIO),far:e}}function vv(i,e){const t=e-1;i.x=Math.max(-t,Math.min(t,i.x)),i.z=Math.max(-t,Math.min(t,i.z)),i.y=Math.max(0,i.y)}class vt{constructor(e,t,n,r=null){this.name=e,this.inputs=t,this.outputs=n,this.station=r}canCraft(e){return this.inputs.every(({type:t,count:n})=>e.count(t)>=n)}}class xv{constructor(e){this.recipes=e}getAvailableRecipes(e,t=null){return this.recipes.filter(n=>n.station&&n.station!==t?!1:n.canCraft(e))}craft(e,t,n=null){const r=this.recipes.find(s=>s.name===e);if(!r||r.station&&r.station!==n||!r.canCraft(t))return!1;for(const{type:s,count:o}of r.inputs)t.remove(s,o);for(const{type:s,count:o}of r.outputs)t.add(s,o);return!0}}class yv{constructor(e){this._system=e,this.isOpen=!1,this.selectedIndex=0,this._station=null}toggle(){this.isOpen=!this.isOpen,this.isOpen&&(this.selectedIndex=0)}setStation(e){this._station=e}getAllRecipes(){return this._system.recipes.filter(e=>e.station===this._station)}getAvailableRecipes(e){return this._system.getAvailableRecipes(e,this._station)}craftSelected(e){const t=this.getAllRecipes();if(this.selectedIndex>=t.length)return!1;const n=t[this.selectedIndex];return this._system.craft(n.name,e,this._station)}selectNext(){this.selectedIndex++}selectPrev(){this.selectedIndex=Math.max(0,this.selectedIndex-1)}}const Sv=[new vt("Sticks from Wood",[{type:X.WOOD,count:1}],[{type:X.STICK,count:4}]),new vt("Rope from Fiber",[{type:X.FIBER,count:3}],[{type:X.ROPE,count:1}]),new vt("Torch",[{type:X.STICK,count:1},{type:X.COAL,count:1}],[{type:X.TORCH,count:2}]),new vt("Planks",[{type:X.WOOD,count:2}],[{type:X.PLANKS,count:4}]),new vt("Workbench",[{type:X.PLANKS,count:4},{type:X.STICK,count:4}],[{type:X.WORKBENCH,count:1}]),new vt("Campfire",[{type:X.STONE,count:5},{type:X.STICK,count:3}],[{type:X.CAMPFIRE,count:1}]),new vt("Stone Pickaxe",[{type:X.STICK,count:2},{type:X.STONE,count:3}],[{type:X.STONE_PICKAXE,count:1}],"workbench"),new vt("Stone Axe",[{type:X.STICK,count:2},{type:X.STONE,count:2}],[{type:X.STONE_AXE,count:1}],"workbench"),new vt("Bedroll",[{type:X.FIBER,count:6},{type:X.LEATHER,count:2}],[{type:X.BEDROLL,count:1}],"workbench"),new vt("Cobblestone",[{type:X.STONE,count:4}],[{type:X.COBBLESTONE,count:4}],"workbench"),new vt("Glass from Sand",[{type:X.SAND,count:4}],[{type:X.GLASS,count:2}],"workbench"),new vt("Iron Pickaxe",[{type:X.STICK,count:2},{type:X.IRON_INGOT,count:3}],[{type:X.IRON_PICKAXE,count:1}],"workbench"),new vt("Iron Axe",[{type:X.STICK,count:2},{type:X.IRON_INGOT,count:2}],[{type:X.IRON_AXE,count:1}],"workbench"),new vt("Forge",[{type:X.STONE,count:8},{type:X.IRON_ORE,count:3}],[{type:X.FORGE,count:1}],"workbench"),new vt("Kitchen",[{type:X.PLANKS,count:6},{type:X.STONE,count:4}],[{type:X.KITCHEN,count:1}],"workbench"),new vt("Loom",[{type:X.PLANKS,count:4},{type:X.FIBER,count:6}],[{type:X.LOOM,count:1}],"workbench"),new vt("Smelt Iron Ore",[{type:X.IRON_ORE,count:2},{type:X.COAL,count:1}],[{type:X.IRON_INGOT,count:1}],"forge"),new vt("Smelt Copper Ore",[{type:X.COPPER_ORE,count:2},{type:X.COAL,count:1}],[{type:X.COPPER_INGOT,count:1}],"forge"),new vt("Cook Meat",[{type:X.RAW_MEAT,count:1}],[{type:X.COOKED_MEAT,count:1}],"campfire"),new vt("Cook Fish",[{type:X.RAW_FISH,count:1}],[{type:X.COOKED_FISH,count:1}],"campfire"),new vt("Hearth Stew",[{type:X.COOKED_MEAT,count:2},{type:X.RAW_MUSHROOM,count:1}],[{type:X.STEW,count:2}],"kitchen"),new vt("Trail Rations",[{type:X.COOKED_MEAT,count:1},{type:X.RAW_BERRIES,count:2}],[{type:X.TRAIL_RATIONS,count:3}],"kitchen"),new vt("Herb Salad",[{type:X.RAW_BERRIES,count:2},{type:X.RAW_MUSHROOM,count:2}],[{type:X.HERB_SALAD,count:2}],"kitchen"),new vt("Thatch Block",[{type:X.FIBER,count:4}],[{type:X.THATCH,count:4}],"workbench"),new vt("Stone Brick",[{type:X.STONE,count:4}],[{type:X.STONE_BRICK,count:4}],"workbench"),new vt("Rope from Fiber (Loom)",[{type:X.FIBER,count:2}],[{type:X.ROPE,count:2}],"loom"),new vt("Bandage",[{type:X.FIBER,count:3}],[{type:X.BANDAGE,count:2}],"loom"),new vt("Leather Armor",[{type:X.LEATHER,count:5},{type:X.ROPE,count:2}],[{type:X.LEATHER_ARMOR,count:1}],"loom"),new vt("Oak Planks",[{type:X.WOOD,count:2}],[{type:X.OAK_PLANKS,count:4}],"workbench"),new vt("Copper Pickaxe",[{type:X.STICK,count:2},{type:X.COPPER_INGOT,count:3}],[{type:X.COPPER_PICKAXE,count:1}],"workbench"),new vt("Iron Sword",[{type:X.IRON_INGOT,count:2},{type:X.STICK,count:1}],[{type:X.IRON_SWORD,count:1}],"forge"),new vt("Iron Hammer",[{type:X.IRON_INGOT,count:3},{type:X.STICK,count:2}],[{type:X.IRON_HAMMER,count:1}],"forge")];class Ev{constructor({type:e,duration:t,strength:n}){this.type=e,this.remaining=t,this.strength=n}tick(e){this.remaining-=e}isExpired(){return this.remaining<=0}}class Mv{constructor(){this._effects=[]}apply({type:e,duration:t,strength:n}){this._effects=this._effects.filter(r=>r.type!==e),this._effects.push(new Ev({type:e,duration:t,strength:n}))}tick(e){for(const t of this._effects)t.tick(e);this._effects=this._effects.filter(t=>!t.isExpired())}getActive(){return this._effects}getStrength(e){return this._effects.filter(t=>t.type===e).reduce((t,n)=>t+n.strength,0)}has(e){return this._effects.some(t=>t.type===e)}}const en=Object.freeze({LOCKED:"locked",AVAILABLE:"available",ACTIVE:"active",COMPLETED:"completed"});class Tl{constructor({id:e,description:t,target:n}){this.id=e,this.description=t,this.target=n,this.progress=0}advance(e){this.progress=Math.min(this.progress+e,this.target)}isComplete(){return this.progress>=this.target}}class ei{constructor({id:e,chapter:t,name:n,description:r,objectives:s,requires:o=[]}){this.id=e,this.chapter=t,this.name=n,this.description=r,this.requires=o,this.objectives=s.map(a=>a instanceof Tl?a:new Tl(a))}advanceObjective(e,t){const n=this.objectives.find(r=>r.id===e);n&&n.advance(t)}isComplete(){return this.objectives.every(e=>e.isComplete())}}class bv{constructor(e){this.quests=e,this._status=new Map;for(const t of e){const n=t.requires.length>0;this._status.set(t.id,n?en.LOCKED:en.AVAILABLE)}}getQuest(e){return this.quests.find(t=>t.id===e)}getStatus(e){return this._status.get(e)||en.LOCKED}activate(e){return this.getStatus(e)!==en.AVAILABLE?!1:(this._status.set(e,en.ACTIVE),!0)}advanceObjective(e,t,n){if(this.getStatus(e)!==en.ACTIVE)return;const r=this.getQuest(e);r&&(r.advanceObjective(t,n),r.isComplete()&&(this._status.set(e,en.COMPLETED),this._unlockDependents(e)))}_unlockDependents(e){for(const t of this.quests){if(this._status.get(t.id)!==en.LOCKED)continue;t.requires.every(r=>this._status.get(r)===en.COMPLETED)&&this._status.set(t.id,en.AVAILABLE)}}getActiveQuests(){return this.quests.filter(e=>this._status.get(e.id)===en.ACTIVE)}serialize(){const e={};for(const[n,r]of this._status)e[n]=r;const t={};for(const n of this.quests)t[n.id]=n.objectives.map(r=>({id:r.id,progress:r.progress}));return{statuses:e,objectives:t}}deserialize(e){for(const[t,n]of Object.entries(e.statuses))this._status.set(t,n);for(const[t,n]of Object.entries(e.objectives)){const r=this.getQuest(t);if(r)for(const s of n){const o=r.objectives.find(a=>a.id===s.id);o&&(o.progress=s.progress)}}}}const Tv=[new ei({id:"ch1_embers",chapter:1,name:"Embers in the Wild",description:"Survive the first days, reach the ruined outpost, and activate the first ward fragment.",objectives:[{id:"ch1_survive",description:"Survive the first night",target:1},{id:"ch1_reach_outpost",description:"Reach the ruined outpost",target:1},{id:"ch1_activate_ward",description:"Activate the ward fragment",target:1}]}),new ei({id:"ch2_roads",chapter:2,name:"Broken Roads",description:"Restore a frontier settlement, meet the first lore NPC, and discover signs of spreading corruption.",requires:["ch1_embers"],objectives:[{id:"ch2_restore",description:"Restore the frontier settlement",target:1},{id:"ch2_meet_npc",description:"Meet the lore NPC",target:1},{id:"ch2_corruption",description:"Investigate corruption signs",target:3}]}),new ei({id:"ch3_records",chapter:3,name:"The Hidden Records",description:"Travel to the Rivendell region, learn of the ward network, and obtain the first true relic.",requires:["ch2_roads"],objectives:[{id:"ch3_reach_rivendell",description:"Reach the Rivendell region",target:1},{id:"ch3_learn_wards",description:"Learn about the ward network",target:1},{id:"ch3_obtain_relic",description:"Obtain the first true relic",target:1}]}),new ei({id:"ch4_mountains",chapter:4,name:"Beneath the Mountains",description:"Enter the Misty Mountains delves, stabilize a dwarven mechanism, and fight underground threats.",requires:["ch3_records"],objectives:[{id:"ch4_enter_delve",description:"Enter the Misty Mountains delve",target:1},{id:"ch4_stabilize",description:"Stabilize the dwarven mechanism",target:1},{id:"ch4_defeat_boss",description:"Defeat the corrupted guardian",target:1}]}),new ei({id:"ch5_darkwood",chapter:5,name:"The Dark Wood Stirs",description:"Travel through Mirkwood, deal with spiders and ward failures, and restore a forest beacon.",requires:["ch4_mountains"],objectives:[{id:"ch5_enter_mirkwood",description:"Enter Mirkwood",target:1},{id:"ch5_clear_spiders",description:"Clear spider nests",target:3},{id:"ch5_restore_beacon",description:"Restore the forest beacon",target:1}]}),new ei({id:"ch6_forge",chapter:6,name:"The Sleeping Forge",description:"Reach the dwarven craft center near Erebor, unlock final crafting, and learn the source location.",requires:["ch5_darkwood"],objectives:[{id:"ch6_reach_forge",description:"Reach the ancient forge",target:1},{id:"ch6_unlock_crafting",description:"Unlock final crafting tier",target:1},{id:"ch6_discover_source",description:"Discover the awakening source location",target:1}]}),new ei({id:"ch7_shadow",chapter:7,name:"The Rekindled Shadow",description:"Assault the corrupted stronghold, disable its link to the ancient network, and face the dark champion.",requires:["ch6_forge"],objectives:[{id:"ch7_assault",description:"Assault the corrupted stronghold",target:1},{id:"ch7_disable_link",description:"Disable the network link",target:1},{id:"ch7_defeat_champion",description:"Defeat the dark champion",target:1}]}),new ei({id:"ch8_after",chapter:8,name:"After the Night",description:"The world recovers. Settlements improve, and exploration continues in peace.",requires:["ch7_shadow"],objectives:[{id:"ch8_celebrate",description:"Return to a restored settlement",target:1},{id:"ch8_explore",description:"Explore the renewed world",target:1}]})];class Av{constructor(){this._questTarget=null}getDirectionTo(e,t){const n=t.x-e.x,r=t.z-e.z;return Math.atan2(n,-r)}getDistance(e,t){const n=t.x-e.x,r=(t.y||0)-(e.y||0),s=t.z-e.z;return Math.sqrt(n*n+r*r+s*s)}getCardinal(e){let t=(e%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return t<Math.PI/4||t>=Math.PI*7/4?"N":t<Math.PI*3/4?"E":t<Math.PI*5/4?"S":"W"}setQuestTarget(e){this._questTarget={...e}}clearQuestTarget(){this._questTarget=null}getQuestDirection(e){return this._questTarget?{angle:this.getDirectionTo(e,this._questTarget),distance:this.getDistance(e,this._questTarget)}:null}}function Rv(i={}){const{survivalStats:e,questSystem:t,compass:n,playerYaw:r=0,playerPos:s,fearSystem:o,experienceSystem:a,statusEffects:c}=i,l={};if(e&&(l.health=Math.ceil(e.health),l.maxHealth=e.maxHealth,l.stamina=Math.ceil(e.stamina),l.hunger=Math.ceil(e.hunger),l.focus=Math.ceil(e.focus),l.tempLabel=e.temperature<-.5?"Cold":e.temperature>.5?"Hot":"Mild"),t){const h=t.getActiveQuests();l.activeQuestName=h.length>0?h[0].name:null}else l.activeQuestName=null;return n&&(l.compassCardinal=n.getCardinal(r)),o?l.fearLevel=Math.round(o.level):l.fearLevel=0,s&&(l.playerX=Math.round(s.x),l.playerZ=Math.round(s.z)),a?l.level=a.level:l.level=1,c?l.statusEffects=c.getActive().map(h=>({type:h.type,remaining:h.remaining,strength:h.strength})):l.statusEffects=[],l}const wv=Object.values(yd).sort((i,e)=>e.hungerRestore-i.hungerRestore).map(i=>i.id);function Cv(i,e,t){for(const n of wv)if(i.count(n)>0){const r=eg(n);if(e.eat(r.hungerRestore),i.remove(n,1),t&&r.effects)for(const s of r.effects)t.apply(s);return!0}return!1}class Al{constructor({id:e,name:t,description:n,cost:r,requires:s=[]}){this.id=e,this.name=t,this.description=n,this.cost=r,this.requires=s}}class ar{constructor({id:e,name:t,nodes:n}){this.id=e,this.name=t,this.nodes=n.map(r=>r instanceof Al?r:new Al(r)),this._nodeMap=new Map(this.nodes.map(r=>[r.id,r]))}getNode(e){return this._nodeMap.get(e)}}class Iv{constructor(e){this.trees=e,this.skillPoints=0,this._unlocked=new Set,this._allNodes=new Map;for(const t of e)for(const n of t.nodes)this._allNodes.set(n.id,n)}addPoints(e){this.skillPoints+=e}isUnlocked(e){return this._unlocked.has(e)}unlock(e){if(this._unlocked.has(e))return!1;const t=this._allNodes.get(e);if(!t||this.skillPoints<t.cost)return!1;for(const n of t.requires)if(!this._unlocked.has(n))return!1;return this.skillPoints-=t.cost,this._unlocked.add(e),!0}getAvailable(){const e=[];for(const[t,n]of this._allNodes){if(this._unlocked.has(t)||this.skillPoints<n.cost)continue;n.requires.every(s=>this._unlocked.has(s))&&e.push(n)}return e}grantStartingUnlock(e){return this._unlocked.has(e)||!this._allNodes.get(e)?!1:(this._unlocked.add(e),!0)}getUnlocked(){return[...this._unlocked]}serialize(){return{skillPoints:this.skillPoints,unlocked:[...this._unlocked]}}deserialize(e){this.skillPoints=e.skillPoints,this._unlocked=new Set(e.unlocked)}}class Ov{constructor(e){this._system=e,this.isOpen=!1,this.currentTreeIndex=0,this.selectedNodeIndex=0}toggle(){this.isOpen=!this.isOpen,this.isOpen&&(this.currentTreeIndex=0,this.selectedNodeIndex=0)}getCurrentTree(){return this._system.trees[this.currentTreeIndex]}nextTree(){this.currentTreeIndex=(this.currentTreeIndex+1)%this._system.trees.length,this.selectedNodeIndex=0}prevTree(){this.currentTreeIndex=(this.currentTreeIndex-1+this._system.trees.length)%this._system.trees.length,this.selectedNodeIndex=0}getNodes(){return this.getCurrentTree().nodes.map(t=>({id:t.id,name:t.name,description:t.description,cost:t.cost,requires:t.requires,unlocked:this._system.isUnlocked(t.id),available:!this._system.isUnlocked(t.id)&&this._system.skillPoints>=t.cost&&t.requires.every(n=>this._system.isUnlocked(n))}))}unlockSelected(){const e=this.getNodes();return this.selectedNodeIndex>=e.length?!1:this._system.unlock(e[this.selectedNodeIndex].id)}getSkillPoints(){return this._system.skillPoints}}const Rl=[new ar({id:"survival",name:"Survival",nodes:[{id:"surv_hardy",name:"Hardy",description:"Slower hunger drain",cost:1},{id:"surv_warmth",name:"Warmth",description:"Better camp warmth bonus",cost:1},{id:"surv_iron_stomach",name:"Iron Stomach",description:"Raw food is safer to eat",cost:2,requires:["surv_hardy"]},{id:"surv_bandages",name:"Better Bandages",description:"Bandages heal more",cost:2,requires:["surv_hardy"]},{id:"surv_rest",name:"Deep Rest",description:"Sleep restores more stamina",cost:2,requires:["surv_warmth"]},{id:"surv_forager",name:"Keen Forager",description:"Find more berries and herbs",cost:1},{id:"surv_endurance",name:"Endurance",description:"Slower stamina drain while sprinting",cost:3,requires:["surv_iron_stomach"]},{id:"surv_corruption_resist",name:"Corruption Resist",description:"Reduced corruption buildup",cost:3,requires:["surv_bandages"]},{id:"surv_shelter_master",name:"Shelter Master",description:"Shelters provide better quality",cost:2,requires:["surv_rest"]},{id:"surv_second_wind",name:"Second Wind",description:"Recover stamina faster when low",cost:3,requires:["surv_endurance"]}]}),new ar({id:"combat",name:"Combat",nodes:[{id:"cmb_parry",name:"Parry",description:"Timed parry window for melee",cost:1},{id:"cmb_heavy_blow",name:"Heavy Blow",description:"Stronger heavy attacks",cost:1},{id:"cmb_quick_draw",name:"Quick Draw",description:"Faster bow draw speed",cost:1},{id:"cmb_shield_wall",name:"Shield Wall",description:"Reduced damage when blocking",cost:2,requires:["cmb_parry"]},{id:"cmb_precise_strike",name:"Precise Strike",description:"Critical hit chance on weak spots",cost:2,requires:["cmb_heavy_blow"]},{id:"cmb_ranged_stability",name:"Ranged Stability",description:"Less bow sway",cost:2,requires:["cmb_quick_draw"]},{id:"cmb_counter",name:"Counter",description:"Damage on successful parry",cost:3,requires:["cmb_shield_wall"]},{id:"cmb_cleave",name:"Cleave",description:"Hit multiple enemies with heavy attacks",cost:3,requires:["cmb_precise_strike"]},{id:"cmb_steady_aim",name:"Steady Aim",description:"Headshot bonus damage",cost:3,requires:["cmb_ranged_stability"]},{id:"cmb_berserker",name:"Berserker",description:"Damage bonus when health is low",cost:3,requires:["cmb_cleave"]}]}),new ar({id:"craft",name:"Craft",nodes:[{id:"crf_repair",name:"Field Repair",description:"Better repair efficiency",cost:1},{id:"crf_yield",name:"Material Yield",description:"Higher material yield from mining",cost:1},{id:"crf_recipes",name:"Advanced Recipes",description:"Unlock intermediate recipes",cost:2,requires:["crf_repair"]},{id:"crf_tool_mastery",name:"Tool Mastery",description:"Tools last longer",cost:2,requires:["crf_repair"]},{id:"crf_smelt",name:"Efficient Smelting",description:"Less fuel per smelt",cost:2,requires:["crf_yield"]},{id:"crf_forge_master",name:"Forge Master",description:"Unlock high-tier metalworking",cost:3,requires:["crf_recipes"]},{id:"crf_architect",name:"Architect",description:"Restoration costs reduced",cost:2,requires:["crf_yield"]},{id:"crf_rune_craft",name:"Rune Craft",description:"Craft rune items at rune table",cost:3,requires:["crf_forge_master"]},{id:"crf_master_smith",name:"Master Smith",description:"Best-tier weapons and armor",cost:3,requires:["crf_forge_master"]}]}),new ar({id:"exploration",name:"Exploration",nodes:[{id:"exp_map_reveal",name:"Pathfinder",description:"Faster map reveal radius",cost:1},{id:"exp_climb",name:"Sure-Footed",description:"Safer climbing, reduced fall damage",cost:1},{id:"exp_treasure",name:"Treasure Sense",description:"Detect hidden caches nearby",cost:2,requires:["exp_map_reveal"]},{id:"exp_scout",name:"Scout",description:"See enemies from further away",cost:2,requires:["exp_map_reveal"]},{id:"exp_mountaineer",name:"Mountaineer",description:"Better movement in mountains",cost:2,requires:["exp_climb"]},{id:"exp_lore_reader",name:"Lore Reader",description:"Identify ruins and relics faster",cost:2,requires:["exp_treasure"]},{id:"exp_night_eye",name:"Night Eye",description:"Better vision in darkness",cost:2,requires:["exp_scout"]},{id:"exp_swift_travel",name:"Swift Travel",description:"Move faster on roads",cost:3,requires:["exp_mountaineer"]}]}),new ar({id:"fellowship",name:"Fellowship",nodes:[{id:"fel_reputation",name:"Good Reputation",description:"Faster reputation gain",cost:1},{id:"fel_trader",name:"Shrewd Trader",description:"Better prices from merchants",cost:1},{id:"fel_diplomat",name:"Diplomat",description:"Faction hostility decays faster",cost:2,requires:["fel_reputation"]},{id:"fel_mentor",name:"Mentor",description:"Gain bonus XP from quest NPCs",cost:2,requires:["fel_reputation"]},{id:"fel_cheaper_restore",name:"Community Builder",description:"Cheaper restoration costs",cost:2,requires:["fel_trader"]},{id:"fel_trust",name:"Deep Trust",description:"Unlock unique faction quests",cost:3,requires:["fel_diplomat"]},{id:"fel_inspire",name:"Inspire",description:"Nearby allies fight better",cost:3,requires:["fel_mentor"]},{id:"fel_peace",name:"Peacekeeper",description:"Some enemies can be calmed",cost:3,requires:["fel_trust"]}]}),new ar({id:"attunement",name:"Attunement",nodes:[{id:"att_focus",name:"Focus Pool",description:"Increased max focus",cost:1},{id:"att_heal",name:"Healing Touch",description:"Stronger healing abilities",cost:1},{id:"att_ward",name:"Ward Strength",description:"Wards last longer",cost:2,requires:["att_focus"]},{id:"att_relic_sense",name:"Relic Sense",description:"Detect nearby relics",cost:2,requires:["att_focus"]},{id:"att_nature",name:"Nature Bond",description:"Nature magic costs less focus",cost:2,requires:["att_heal"]},{id:"att_stabilize",name:"Stabilize Relic",description:"Better relic stabilization",cost:3,requires:["att_relic_sense"]},{id:"att_purify",name:"Purify",description:"Remove corruption from blocks",cost:3,requires:["att_ward"]},{id:"att_calm_fear",name:"Calm Fear",description:"Reduce terror/corruption buildup",cost:2,requires:["att_nature"]},{id:"att_deep_attune",name:"Deep Attunement",description:"Relic abilities gain power",cost:3,requires:["att_stabilize"]}]})];class gn{constructor({id:e,name:t,position:n,factionId:r,dialogueId:s,dialogue:o={},trades:a=[]}){this.id=e,this.name=t,this.position={...n},this.spawnPosition={...n},this.factionId=r,this.dialogueId=s,this.dialogue=o,this.trades=a,this._wanderTimer=0,this._wanderDirX=0,this._wanderDirZ=0,this._wanderSpeed=1.2,this._wanderRadius=6}_collidesWithWorld(e,t,n){if(!n)return!1;const r=Math.floor(e),s=Math.floor(this.position.y),o=Math.floor(t);return nn(n.getBlock(r,s,o))||nn(n.getBlock(r,s+1,o))}updateAI(e,t,n,r=Math.random){if(this._wanderTimer-=e,this._wanderTimer<=0)if(r()<.4)this._wanderDirX=0,this._wanderDirZ=0,this._wanderTimer=2+r()*3;else{const s=r()*Math.PI*2;this._wanderDirX=Math.cos(s),this._wanderDirZ=Math.sin(s),this._wanderTimer=1+r()*2}if(this._wanderDirX!==0||this._wanderDirZ!==0){const s=this.position.x+this._wanderDirX*this._wanderSpeed*e,o=this.position.z+this._wanderDirZ*this._wanderSpeed*e,a=s-this.spawnPosition.x,c=o-this.spawnPosition.z;if(a*a+c*c>this._wanderRadius*this._wanderRadius){const l=Math.sqrt(a*a+c*c);this._wanderDirX=-a/l,this._wanderDirZ=-c/l}else this._collidesWithWorld(s,this.position.z,n)?this._wanderDirX=-this._wanderDirX:this.position.x=s,this._collidesWithWorld(this.position.x,o,n)?this._wanderDirZ=-this._wanderDirZ:this.position.z=o}t&&(this.position.y=t(Math.floor(this.position.x),Math.floor(this.position.z))+1)}hasTrades(){return this.trades.length>0}getDialogue(e){if(!this.dialogueId)return this.dialogue.default||"";const t=e.getStatus(this.dialogueId);return t===en.COMPLETED&&this.dialogue.completed?this.dialogue.completed:t===en.ACTIVE&&this.dialogue.active?this.dialogue.active:t===en.AVAILABLE&&this.dialogue.available?this.dialogue.available:this.dialogue.default||""}}class Dv{constructor(){this._npcs=new Map}addNPC(e){this._npcs.set(e.id,e)}getNPC(e){return this._npcs.get(e)}getAllNPCs(){return Array.from(this._npcs.values())}findNearby(e,t){const n=[];for(const r of this._npcs.values())xn(e,r.position)<=t&&n.push(r);return n}getByFaction(e){const t=[];for(const n of this._npcs.values())n.factionId===e&&t.push(n);return t}}const zo=[new gn({id:"ranger_hal",name:"Hal the Ranger",position:{x:30,y:33,z:24},factionId:"road_wardens",dialogueId:"ch1_embers",dialogue:{available:"The wild is dangerous. Ruins stir with old power.",active:"Have you found the ward fragment yet?",completed:"Well done. The ward glows again.",default:"Stay safe out there."},trades:[{give:{type:"leather",count:3},receive:{type:"iron_sword",count:1}},{give:{type:"iron_ore",count:2},receive:{type:"stone_pickaxe",count:1}}]}),new gn({id:"shire_farmer",name:"Hamfast the Farmer",position:{x:-45,y:33,z:36},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Fine day for gardening. The taters are coming along nicely."},trades:[{give:{type:"fiber",count:5},receive:{type:"raw_berries",count:3}},{give:{type:"wood",count:5},receive:{type:"raw_meat",count:2}}]}),new gn({id:"shire_merchant",name:"Rosie the Merchant",position:{x:60,y:33,z:-15},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Looking to trade? I have fine Shire goods."},trades:[{give:{type:"stone",count:10},receive:{type:"torch",count:5}},{give:{type:"leather",count:5},receive:{type:"bedroll",count:1}},{give:{type:"iron_ore",count:3},receive:{type:"stone_pickaxe",count:1}}]}),new gn({id:"elara_lorekeeper",name:"Elara the Lorekeeper",position:{x:600,y:33,z:105},factionId:"rivendell_keepers",dialogueId:"ch3_records",dialogue:{available:"The old records speak of a ward network...",active:"Search the archives. The truth is there.",completed:"You have found what was hidden.",default:"The lore is fading, but not yet lost."},trades:[{give:{type:"lore_fragment",count:2},receive:{type:"relic_shard",count:1}}]}),new gn({id:"rivendell_healer",name:"Celebrin the Healer",position:{x:630,y:33,z:75},factionId:"rivendell_keepers",dialogueId:null,dialogue:{default:"The valley still holds its peace. Let me tend your wounds."},trades:[{give:{type:"fiber",count:3},receive:{type:"bandage",count:2}},{give:{type:"raw_berries",count:5},receive:{type:"herb_salad",count:2}}]}),new gn({id:"thorin_smith",name:"Thorin the Smith",position:{x:825,y:45,z:165},factionId:"dwarven_crafters",dialogueId:"ch4_mountains",dialogue:{available:"The old forge can be rekindled, with the right materials.",active:"Have you stabilized the mechanism?",completed:"Aye, the forge rings true once more.",default:"Need something forged?"},trades:[{give:{type:"iron_ore",count:5},receive:{type:"iron_sword",count:1}},{give:{type:"iron_ore",count:3},receive:{type:"iron_pickaxe",count:1}},{give:{type:"copper_ore",count:5},receive:{type:"copper_pickaxe",count:1}}]}),new gn({id:"mountain_trader",name:"Dwalin the Trader",position:{x:780,y:45,z:135},factionId:"dwarven_crafters",dialogueId:null,dialogue:{default:"Mountain stone is the finest. Care to trade?"},trades:[{give:{type:"stone",count:10},receive:{type:"iron_ore",count:2}},{give:{type:"wood",count:15},receive:{type:"iron_ore",count:3}}]}),new gn({id:"galawen_warden",name:"Galawen the Warden",position:{x:1185,y:33,z:120},factionId:"woodland_guardians",dialogueId:"ch5_darkwood",dialogue:{available:"The forest beacon must be restored before the dark wood consumes all.",active:"The spiders grow bolder. Clear their nests.",completed:"Light returns to Mirkwood. Thank you.",default:"Walk carefully beneath these boughs."},trades:[{give:{type:"fiber",count:10},receive:{type:"rope",count:3}},{give:{type:"relic_shard",count:2},receive:{type:"leather_armor",count:1}}]}),new gn({id:"beorn_jr",name:"Grimbeorn the Younger",position:{x:1020,y:33,z:195},factionId:"beorning_wardens",dialogueId:null,dialogue:{default:"The wild things grow restless. Something stirs in the deep places."},trades:[{give:{type:"raw_meat",count:3},receive:{type:"leather",count:2}},{give:{type:"leather",count:5},receive:{type:"leather_armor",count:1}}]}),new gn({id:"old_tom",name:"Old Tom the Innkeeper",position:{x:255,y:33,z:66},factionId:"road_wardens",dialogueId:"ch2_roads",dialogue:{available:"The road needs mending. Fewer travelers come each season.",active:"Any luck restoring the hall?",completed:"The hall stands once more! Travelers will come again.",default:"Rest a while. The road will still be there tomorrow."},trades:[{give:{type:"iron_ore",count:1},receive:{type:"cooked_meat",count:2}},{give:{type:"wood",count:5},receive:{type:"torch",count:3}}]}),new gn({id:"bree_blacksmith",name:"Barliman the Blacksmith",position:{x:225,y:33,z:45},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Looking for a blade? I forge fine ones, if the price is right."},trades:[{give:{type:"iron_ore",count:4},receive:{type:"iron_sword",count:1}},{give:{type:"stone",count:8},receive:{type:"stone_pickaxe",count:1}}]}),new gn({id:"sage_miriel",name:"Miriel the Sage",position:{x:1500,y:40,z:84},factionId:"rivendell_keepers",dialogueId:"ch7_shadow",dialogue:{available:"The awakening reaches its peak. The bastion must hold.",active:"Press on. The dark champion awaits.",completed:"It is done. The shadow recedes.",default:"The age turns. What comes next is yours to shape."},trades:[{give:{type:"relic_shard",count:5},receive:{type:"lore_fragment",count:3}}]})];function Ho(i,e,t){const n=i.findNearby(e,t);if(n.length===0)return null;let r=null,s=1/0;for(const o of n){const a=xn(e,o.position);a<s&&(r=o,s=a)}return r}function Rs(i,e,t){return xn(i,e)<=t}class Lv{constructor(e,t){this._fog=e,this._landmarks=t,this.isOpen=!1}toggle(){this.isOpen=!this.isOpen}getVisibleLandmarks(){return this._landmarks}getExploredPercentage(){return this._fog.getRevealedPercentage()}isRevealed(e,t){return this._fog.isRevealed(e,t)}getMapData(e){return{playerPos:{...e},landmarks:this._landmarks.map(t=>({id:t.id,name:t.name,x:t.position.x,z:t.position.z,region:t.region})),explored:this.getExploredPercentage()}}}const Un=Object.freeze({SHIRE:"shire",BREE:"bree",TROLLSHAWS:"trollshaws",RIVENDELL:"rivendell",MISTY_MOUNTAINS:"misty_mountains",ANDUIN_VALE:"anduin_vale",MIRKWOOD:"mirkwood",LONG_LAKE:"long_lake",EREBOR:"erebor",DOL_GULDUR:"dol_guldur"});class Fn{constructor({id:e,name:t,position:n,radius:r,region:s,description:o=""}){this.id=e,this.name=t,this.position={...n},this.radius=r,this.region=s,this.description=o}contains(e){return xn(this.position,e)<=this.radius}}const Ur=[new Fn({id:"shire",name:"The Shire",position:{x:0,y:33,z:0},radius:180,region:Un.SHIRE,description:"Green rolling hills and cozy burrows."}),new Fn({id:"bree",name:"Bree",position:{x:240,y:33,z:60},radius:75,region:Un.BREE,description:"A crossroads town where many travelers meet."}),new Fn({id:"trollshaws",name:"Trollshaws",position:{x:420,y:33,z:120},radius:105,region:Un.TROLLSHAWS,description:"Rocky woodland where trolls once roamed."}),new Fn({id:"rivendell",name:"Rivendell",position:{x:600,y:33,z:90},radius:90,region:Un.RIVENDELL,description:"The last homely house east of the sea."}),new Fn({id:"misty_mountains",name:"Misty Mountains",position:{x:810,y:50,z:150},radius:150,region:Un.MISTY_MOUNTAINS,description:"Towering peaks hiding goblin tunnels and ancient delves."}),new Fn({id:"anduin_vale",name:"Anduin Vale",position:{x:1020,y:33,z:180},radius:120,region:Un.ANDUIN_VALE,description:"Fertile valley of the Great River, home to Beornings."}),new Fn({id:"mirkwood",name:"Mirkwood",position:{x:1200,y:33,z:120},radius:165,region:Un.MIRKWOOD,description:"A dark and tangled forest crawling with spiders."}),new Fn({id:"long_lake",name:"Long Lake",position:{x:1410,y:33,z:90},radius:75,region:Un.LONG_LAKE,description:"Lake-town and its surroundings on the water."}),new Fn({id:"erebor",name:"Erebor",position:{x:1560,y:45,z:60},radius:105,region:Un.EREBOR,description:"The Lonely Mountain, ancient dwarven stronghold."}),new Fn({id:"dol_guldur",name:"Dol Guldur",position:{x:1260,y:33,z:270},radius:90,region:Un.DOL_GULDUR,description:"A corrupted ruin of dark power in southern Mirkwood."})];function Pv(i,e,t,n={}){const r={};for(const[c,l]of i.chunks){let h=!1;for(let u=0;u<l.blocks.length;u++)if(l.blocks[u]!==0){h=!0;break}h&&(r[c]=Array.from(l.blocks))}const s=[],o=t.size||36;for(let c=0;c<o;c++)s.push(t.getSlot?t.getSlot(c):null);const a={version:2,player:{position:{...e.position},velocity:{...e.velocity},yaw:e.yaw,pitch:e.pitch,onGround:e.onGround},inventory:s,inventorySize:o,chunks:r};if(n.survivalStats){const c=n.survivalStats;a.survivalStats={health:c.health,maxHealth:c.maxHealth,stamina:c.stamina,hunger:c.hunger,focus:c.focus,corruption:c.corruption,temperature:c.temperature}}return n.quests&&(a.quests=n.quests.serialize()),n.factions&&(a.factions=n.factions.serialize()),n.fastTravel&&(a.fastTravel=n.fastTravel.serialize()),n.fogOfWar&&(a.fogOfWar=n.fogOfWar.serialize()),n.loreJournal&&(a.loreJournal=n.loreJournal.serialize()),n.skillTree&&(a.skillTree=n.skillTree.serialize()),JSON.stringify(a)}function Nv(i){const e=JSON.parse(i),t=new vd;for(const[a,c]of Object.entries(e.chunks))t._getOrCreateChunk(...a.split(",").map(Number)).blocks.set(c);const n=new bd(e.player.position);n.velocity=e.player.velocity,n.yaw=e.player.yaw,n.pitch=e.player.pitch,n.onGround=e.player.onGround;const r=e.inventorySize||36,s=new Ed(r);if(Array.isArray(e.inventory))for(const a of e.inventory)a&&a.type&&a.count>0&&s.addItem(a.type,a.count);const o={world:t,player:n,inventory:s};if(e.survivalStats){const a=new Md;Object.assign(a,e.survivalStats),o.survivalStats=a}return e.quests&&(o.questData=e.quests),e.factions&&(o.factionData=e.factions),e.fastTravel&&(o.fastTravelData=e.fastTravel),e.fogOfWar&&(o.fogOfWarData=e.fogOfWar),e.loreJournal&&(o.loreJournalData=e.loreJournal),e.skillTree&&(o.skillTreeData=e.skillTree),o}async function kv(i){const t=new Blob([i]).stream().pipeThrough(new CompressionStream("gzip"));return new Response(t).blob()}async function Uv(i){const e=i.stream().pipeThrough(new DecompressionStream("gzip"));return new Response(e).text()}async function Fv(i,e="ruinwake-save.json.gz"){const t=await kv(i),n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=e,r.click(),URL.revokeObjectURL(n)}function Bv(){return new Promise((i,e)=>{const t=document.createElement("input");t.type="file",t.accept=".json.gz,.gz",t.onchange=async()=>{if(!t.files||t.files.length===0){e(new Error("No file selected"));return}const n=t.files[0],r=await Uv(n);i(r)},t.click()})}class Fr{constructor({id:e,name:t,description:n,position:r,requirements:s}){this.id=e,this.name=t,this.description=n,this.position=r||{x:0,y:0,z:0},this.requirements=s,this.restored=!1}canRestore(e){for(const t of this.requirements)if(e.count(t.type)<t.count)return!1;return!0}restore(e){if(this.restored||!this.canRestore(e))return!1;for(const t of this.requirements)e.remove(t.type,t.count);return this.restored=!0,!0}}const Br=[new Fr({id:"starter_watchpost",name:"Ruined Watch-Post",description:"A crumbling frontier watch-post. Restoring it unlocks the first safe base.",position:{x:90,y:33,z:90},requirements:[{type:"wood",count:15},{type:"stone",count:10}]}),new Fr({id:"roadside_hall",name:"Roadside Ranger Hall",description:"An abandoned ranger outpost along the East Road. Improves travel and trade.",position:{x:270,y:33,z:75},requirements:[{type:"wood",count:20},{type:"stone",count:15},{type:"iron_ore",count:5}]}),new Fr({id:"mountain_workshop",name:"Dwarven Mountain Workshop",description:"A sealed dwarven annex in the Misty Mountains. Unlocks high-tier smithing.",position:{x:810,y:45,z:165},requirements:[{type:"stone",count:30},{type:"iron_ore",count:15},{type:"copper_ore",count:10}]}),new Fr({id:"forest_beacon",name:"Mirkwood Forest Beacon",description:"An ancient grove beacon overrun by corruption. Stabilizes the Mirkwood region.",position:{x:1200,y:33,z:135},requirements:[{type:"wood",count:25},{type:"relic_shard",count:5},{type:"fiber",count:15}]}),new Fr({id:"ward_bastion",name:"Ward Bastion of the Last Age",description:"The final ward structure tied to the main quest. Its restoration turns the tide.",position:{x:1500,y:40,z:90},requirements:[{type:"stone",count:40},{type:"iron_ore",count:20},{type:"relic_shard",count:10},{type:"lore_fragment",count:5}]})],wl={small:{radius:3,height:4,wallBlock:g.COBBLESTONE},medium:{radius:5,height:5,wallBlock:g.STONE_BRICK},large:{radius:7,height:6,wallBlock:g.STONE_BRICK}};function zv(i,e,t="small"){const n=wl[t]||wl.small,{radius:r,height:s,wallBlock:o}=n,a=Math.floor(e.x),c=Math.floor(e.y),l=Math.floor(e.z);for(let u=-r;u<=r;u++)for(let f=-r;f<=r;f++)i.setBlock(a+u,c-1,l+f,g.COBBLESTONE);for(let u=0;u<s;u++)for(let f=-r;f<=r;f++)for(let m=-r;m<=r;m++)(Math.abs(f)===r||Math.abs(m)===r)&&(f===r&&Math.abs(m)<=1&&u<3||(u<s-1||(f+m)%3!==0)&&i.setBlock(a+f,c+u,l+m,o));const h=[[-r,-r],[-r,r],[r,-r],[r,r]];for(const[u,f]of h)for(let m=0;m<s;m++)i.setBlock(a+u,c+m,l+f,g.STONE);for(let u=-r;u<=r;u++)for(let f=-r;f<=r;f++)(Math.abs(u)>=r-1||Math.abs(f)>=r-1)&&i.setBlock(a+u,c+s,l+f,o)}function Ad(i,e,t={}){const n=t.wallBlock||g.OAK_PLANKS,r=t.roofBlock||g.PLANKS,s=t.floorBlock||g.COBBLESTONE,o=t.radius||4,a=t.height||4,c=t.bed!==!1,l=t.chest||!1,h=Math.floor(e.x),u=Math.floor(e.y),f=Math.floor(e.z),m=o+2;for(let d=-(o+1);d<=o+1;d++)for(let T=-(o+1);T<=o+1;T++)for(let b=0;b<=a+m;b++)i.setBlock(h+d,u+b,f+T,g.AIR);for(let d=-(o+1);d<=o+1;d++)for(let T=-(o+1);T<=o+1;T++)i.setBlock(h+d,u-1,f+T,g.COBBLESTONE);for(let d=-o;d<=o;d++)for(let T=-o;T<=o;T++)i.setBlock(h+d,u-1,f+T,s);for(let d=0;d<a;d++)for(let T=-o;T<=o;T++)for(let b=-o;b<=o;b++)if(Math.abs(T)===o||Math.abs(b)===o){if(T===o&&b===0&&d<2){i.setBlock(h+T,u+d,f+b,g.DOOR);continue}if(d===2&&g.GLASS&&!(Math.abs(T)===o&&Math.abs(b)===o)){if(Math.abs(T)===o&&b!==0&&Math.abs(b)<o&&b%3===0){i.setBlock(h+T,u+d,f+b,g.GLASS);continue}if(Math.abs(b)===o&&T!==0&&Math.abs(T)<o&&T%3===0){i.setBlock(h+T,u+d,f+b,g.GLASS);continue}}i.setBlock(h+T,u+d,f+b,n)}for(let d=0;d<=o;d++){const T=o-d;if(T<0)break;for(let b=-T;b<=T;b++)i.setBlock(h+b,u+a+d,f-o,n),i.setBlock(h+b,u+a+d,f+o,n)}for(let d=0;d<=o+1;d++){const T=o+1-d;if(T<0)break;for(let b=-(o+1);b<=o+1;b++)i.setBlock(h-T,u+a+d,f+b,r),T>0&&i.setBlock(h+T,u+a+d,f+b,r)}const _=h+o-1,x=f+o-1,p=u+a+o+1;for(let d=u+a;d<=p+2;d++)i.setBlock(_,d,x,g.COBBLESTONE);i.setBlock(h,u+2,f-o+1,g.TORCH),c&&i.setBlock(h-o+1,u,f-o+1,g.BED),l&&i.setBlock(h-o+1,u,f+o-1,g.CHEST)}function Hv(i,e,t={}){const n=t.radius||3,r=3,s=t.floorBlock||g.COBBLESTONE,o=t.bed!==!1,a=t.chest||!1,c=Math.floor(e.x),l=Math.floor(e.y),h=Math.floor(e.z);for(let u=-(n+1);u<=n+1;u++)for(let f=-(n+1);f<=n+1;f++){const m=Math.sqrt(u*u+f*f);if(m>n+1.5)continue;const _=Math.max(1,Math.floor(r+1-m*.5));for(let p=r;p<=r+_;p++)i.getBlock(c+u,l+p,h+f)===g.AIR&&i.setBlock(c+u,l+p,h+f,g.DIRT);const x=l+r+_;i.getBlock(c+u,x+1,h+f)===g.AIR&&i.setBlock(c+u,x,h+f,g.GRASS)}for(let u=-n;u<=n;u++)for(let f=-n;f<=n;f++)i.setBlock(c+u,l-1,h+f,s);for(let u=-n;u<=n;u++)for(let f=-n;f<=n;f++)if(!(Math.sqrt(u*u+f*f)>n+.5))for(let _=0;_<r;_++)i.setBlock(c+u,l+_,h+f,g.AIR);for(let u=-n;u<=n;u++)for(let f=-n;f<=n;f++){const m=Math.sqrt(u*u+f*f);if(!(m<n-.5||m>n+.5))for(let _=0;_<r;_++)i.setBlock(c+u,l+_,h+f,g.OAK_PLANKS)}for(let u=-n;u<=n;u++)for(let f=-n;f<=n;f++)Math.sqrt(u*u+f*f)>n+.5||i.setBlock(c+u,l+r,h+f,g.OAK_PLANKS);for(let u=0;u<=1;u++)i.setBlock(c+n,l+u,h,g.DOOR);for(let u=0;u<=1;u++)i.setBlock(c+n+1,l+u,h,g.AIR);i.setBlock(c,l+2,h-n+2,g.TORCH),o&&i.setBlock(c-n+2,l,h-n+2,g.BED),a&&i.setBlock(c-n+2,l,h+n-2,g.CHEST)}function Gv(i,e,t="small"){const n={small:{radius:4,height:4,wallBlock:g.STONE_BRICK,roofBlock:g.OAK_PLANKS},medium:{radius:6,height:5,wallBlock:g.STONE_BRICK,roofBlock:g.OAK_PLANKS},large:{radius:8,height:6,wallBlock:g.STONE_BRICK,roofBlock:g.PLANKS}},r=n[t]||n.small;Ad(i,e,{wallBlock:r.wallBlock,roofBlock:r.roofBlock,floorBlock:g.STONE_BRICK,radius:r.radius,height:r.height,bed:!0,chest:!0});const s=Math.floor(e.x),o=Math.floor(e.y),a=Math.floor(e.z);i.setBlock(s+r.radius-1,o+2,a,g.TORCH),i.setBlock(s-r.radius+1,o+2,a,g.TORCH),i.setBlock(s,o+2,a+r.radius-1,g.TORCH),i.setBlock(s+r.radius-2,o,a-r.radius+1,g.WORKBENCH)}const ws=Object.freeze({WARD_LIGHT:"ward_light",HEAL_WOUND:"heal_wound",SENSE_CORRUPTION:"sense_corruption",ROOT_SNARE:"root_snare",STONE_WARD:"stone_ward",RUNE_MEND:"rune_mend",CALM_FEAR:"calm_fear"}),Vv=15;class Wv{constructor({id:e,name:t,ability:n,focusCost:r,description:s=""}){this.id=e,this.name=t,this.ability=n,this.focusCost=r,this.description=s,this.cooldown=0}canUse(e){return e>=this.focusCost&&this.cooldown<=0}}class Xv{constructor(){this._equipped=null}equipRelic(e){this._equipped=e}getEquippedRelic(){return this._equipped}useRelic(e){if(!this._equipped||!this._equipped.canUse(e))return!1;const t={ability:this._equipped.ability,focusCost:this._equipped.focusCost};return this._equipped.cooldown=Vv,t}tick(e){this._equipped&&this._equipped.cooldown>0&&(this._equipped.cooldown=Math.max(0,this._equipped.cooldown-e))}}const Ln=Object.freeze({NONE:"none",MINIMAL:"minimal",BASIC:"basic",GOOD:"good",EXCELLENT:"excellent"}),Cl={[Ln.NONE]:{warmth:0,safety:0,recoveryMod:1},[Ln.MINIMAL]:{warmth:.2,safety:.2,recoveryMod:1.2},[Ln.BASIC]:{warmth:.4,safety:.4,recoveryMod:1.5},[Ln.GOOD]:{warmth:.7,safety:.7,recoveryMod:1.8},[Ln.EXCELLENT]:{warmth:1,safety:1,recoveryMod:2}},qv=3,Yv=8;class Kv{evaluate(e,t){const n=Math.floor(t.x),r=Math.floor(t.y),s=Math.floor(t.z);let o=!1;for(let h=1;h<=Yv;h++)if(nn(e.getBlock(n,r+h,s))){o=!0;break}if(!o)return{quality:Ln.NONE,...Cl[Ln.NONE]};let a=0;const c=[[1,0],[-1,0],[0,1],[0,-1]];for(const[h,u]of c){let f=!1;for(let m=1;m<=qv;m++)if(nn(e.getBlock(n+h*m,r,s+u*m))||nn(e.getBlock(n+h*m,r+1,s+u*m))){f=!0;break}f&&a++}let l;return a>=4?l=Ln.EXCELLENT:a>=3?l=Ln.GOOD:a>=2?l=Ln.BASIC:l=Ln.MINIMAL,{quality:l,...Cl[l]}}}const Il=Object.freeze({HISTORY:"history",INSCRIPTION:"inscription",SONG:"song",MAP_NOTE:"map_note",RELIC_VISION:"relic_vision"});class Rd{constructor({id:e,title:t,text:n,category:r}){this.id=e,this.title=t,this.text=n,this.category=r}}class $v{constructor(){this._entries=new Map}addEntry(e){return this._entries.has(e.id)?!1:(this._entries.set(e.id,e),!0)}hasEntry(e){return this._entries.has(e)}getEntries(){return Array.from(this._entries.values())}getByCategory(e){return this.getEntries().filter(t=>t.category===e)}serialize(){return this.getEntries().map(e=>({id:e.id,title:e.title,text:e.text,category:e.category}))}deserialize(e){for(const t of e)this.addEntry(new Rd(t))}}class jv{constructor(){this._waypoints=new Map}unlockWaypoint(e){this._waypoints.has(e.id)||this._waypoints.set(e.id,{...e})}isUnlocked(e){return this._waypoints.has(e)}getWaypoints(){return Array.from(this._waypoints.values())}travel(e){const t=this._waypoints.get(e);return t?{...t.position}:null}serialize(){return this.getWaypoints()}deserialize(e){for(const t of e)this.unlockWaypoint(t)}}const En=Object.freeze({CACHE:"cache",RUIN:"ruin",RELIC_FRAGMENT:"relic_fragment",ROADSTONE:"roadstone",RECIPE_TABLET:"recipe_tablet",LORE_BOOK:"lore_book",INSCRIPTION:"inscription"});class Mn{constructor({id:e,type:t,position:n,reward:r=[]}){this.id=e,this.type=t,this.position={...n},this.reward=r,this.discovered=!1}discover(){return this.discovered?!1:(this.discovered=!0,!0)}}class Zv{constructor(e){this._items=e}get(e){return this._items.find(t=>t.id===e)}findNearby(e,t){return this._items.filter(n=>!n.discovered&&xn(e,n.position)<=t)}getDiscoveredCount(){return this._items.filter(e=>e.discovered).length}getTotalCount(){return this._items.length}}const Qv=[new Mn({id:"cache_shire_01",type:En.CACHE,position:{x:45,y:33,z:30},reward:[{type:"bread",count:3}]}),new Mn({id:"cache_bree_01",type:En.CACHE,position:{x:255,y:33,z:54},reward:[{type:"iron_ore",count:5}]}),new Mn({id:"cache_mountain_01",type:En.CACHE,position:{x:780,y:40,z:135},reward:[{type:"copper_ore",count:8}]}),new Mn({id:"lore_shire_01",type:En.LORE_BOOK,position:{x:30,y:33,z:15},reward:[{type:"lore_fragment",count:1}]}),new Mn({id:"lore_rivendell_01",type:En.LORE_BOOK,position:{x:615,y:33,z:90},reward:[{type:"lore_fragment",count:2}]}),new Mn({id:"relic_trollshaws_01",type:En.RELIC_FRAGMENT,position:{x:435,y:33,z:114},reward:[{type:"relic_shard",count:1}]}),new Mn({id:"relic_mirkwood_01",type:En.RELIC_FRAGMENT,position:{x:1230,y:33,z:135},reward:[{type:"relic_shard",count:2}]}),new Mn({id:"roadstone_east_01",type:En.ROADSTONE,position:{x:180,y:33,z:45},reward:[{type:"stone",count:3}]}),new Mn({id:"roadstone_east_02",type:En.ROADSTONE,position:{x:360,y:33,z:75},reward:[{type:"stone",count:3}]}),new Mn({id:"inscription_dwarven_01",type:En.INSCRIPTION,position:{x:840,y:42,z:150},reward:[{type:"lore_fragment",count:1}]}),new Mn({id:"recipe_forge_01",type:En.RECIPE_TABLET,position:{x:810,y:44,z:156},reward:[{type:"lore_fragment",count:1}]}),new Mn({id:"cache_erebor_01",type:En.CACHE,position:{x:1545,y:40,z:60},reward:[{type:"iron_ore",count:10}]})];function Jv(i,e){return i*(100/(100+e))}const zr=Object.freeze({NONE:"none",POOR:"poor",DECENT:"decent",GOOD:"good",EXCELLENT:"excellent"});zr.NONE+"",zr.POOR+"",zr.DECENT+"",zr.GOOD+"",zr.EXCELLENT+"";const vn=Object.freeze({HOSTILE:"hostile",UNFRIENDLY:"unfriendly",NEUTRAL:"neutral",FRIENDLY:"friendly",HONORED:"honored",EXALTED:"exalted"}),ex=[{min:-1/0,max:-50,tier:vn.HOSTILE},{min:-50,max:0,tier:vn.UNFRIENDLY},{min:0,max:25,tier:vn.NEUTRAL},{min:25,max:100,tier:vn.FRIENDLY},{min:100,max:250,tier:vn.HONORED},{min:250,max:1/0,tier:vn.EXALTED}],tx={[vn.HOSTILE]:1.5,[vn.UNFRIENDLY]:1.2,[vn.NEUTRAL]:1,[vn.FRIENDLY]:.9,[vn.HONORED]:.8,[vn.EXALTED]:.7};class cr{constructor({id:e,name:t,description:n}){this.id=e,this.name=t,this.description=n}}class nx{constructor(e){this.factions=e,this._reputation=new Map;for(const t of e)this._reputation.set(t.id,0)}getReputation(e){return this._reputation.get(e)||0}addReputation(e,t){const n=this._reputation.get(e)||0;this._reputation.set(e,n+t)}getTier(e){const t=this.getReputation(e);for(const n of ex)if(t>=n.min&&t<n.max)return n.tier;return vn.NEUTRAL}applyRaceModifiers(e,t){for(const[n,r]of Object.entries(t))this.addReputation(n,r)}getPriceModifier(e){return tx[this.getTier(e)]||1}getAllFactions(){return this.factions}serialize(){const e={};for(const[t,n]of this._reputation)e[t]=n;return{reputation:e}}deserialize(e){for(const[t,n]of Object.entries(e.reputation))this._reputation.set(t,n)}}const ix=[new cr({id:"road_wardens",name:"Road Wardens",description:"Frontier men who guard the old roads and trade routes between settlements."}),new cr({id:"rivendell_keepers",name:"Rivendell Keepers",description:"Remnant lorekeepers preserving ancient Elven knowledge in the hidden valley."}),new cr({id:"dwarven_crafters",name:"Dwarven Crafters",description:"Skilled dwarven smiths and miners maintaining craft enclaves near the old holds."}),new cr({id:"woodland_guardians",name:"Woodland Guardians",description:"Surviving elves and wardens who protect the forests from corruption and darkness."}),new cr({id:"beorning_wardens",name:"Beorning Wardens",description:"Wild wardens of the Anduin vale who guard the passes and shelter travelers."}),new cr({id:"goblin_horde",name:"Goblin Horde",description:"Hostile goblin and orc bands infesting the mountains and old ruins."})],wd=[{id:"ruin_clearing",name:"Clear the Old Watchtower",description:"A ruined watchtower on the east road is infested with goblins. Clear them out to make the road safer.",objectives:[{id:"clear_goblins",description:"Defeat goblins at the watchtower",target:5}]},{id:"herb_hunt",name:"Athelas for the Healer",description:"A healer in the frontier settlement needs rare athelas herbs from the forest edge.",objectives:[{id:"gather_herbs",description:"Gather athelas plants",target:3}]},{id:"beast_hunt",name:"Wolf Pack Menace",description:"A pack of wolves has been attacking travelers near the old bridge. Thin their numbers.",objectives:[{id:"kill_wolves",description:"Defeat wolves near the bridge",target:4}]},{id:"crafting_commission",name:"Tools for the Settlement",description:"The frontier settlement needs stone tools. Craft and deliver pickaxes and axes.",objectives:[{id:"deliver_pickaxes",description:"Deliver stone pickaxes",target:2},{id:"deliver_axes",description:"Deliver stone axes",target:2}]},{id:"ore_prospecting",name:"Iron for the Forge",description:"The dwarven smiths need iron ore to repair their forge. Mine ore from the mountains.",objectives:[{id:"mine_iron",description:"Mine iron ore",target:10}]},{id:"ruin_clearing_2",name:"The Haunted Barrow",description:"An ancient barrow mound has awakened wights. Cleanse the site before corruption spreads.",objectives:[{id:"defeat_wights",description:"Defeat wights in the barrow",target:3}]},{id:"beast_hunt_spider",name:"Spider Nest in Mirkwood",description:"Giant spiders have woven webs across a forest path. Destroy them and clear the way.",objectives:[{id:"kill_spiders",description:"Defeat spiders",target:6}]},{id:"herb_hunt_mushroom",name:"Mushroom Gathering",description:"A cook needs rare mushrooms that grow near the river stones.",objectives:[{id:"gather_mushrooms",description:"Gather mushrooms",target:5}]},{id:"lore_fragments",name:"Lost Pages of the Archive",description:"Scattered lore fragments from an ancient library have been found in ruins across the region.",objectives:[{id:"collect_fragments",description:"Collect lore fragments",target:4}]},{id:"road_repair",name:"Mend the East Road",description:"Sections of the old east road have crumbled. Place stone blocks to repair the path.",objectives:[{id:"place_stones",description:"Place cobblestone on the road",target:20}]},{id:"troll_bounty",name:"The Bridge Troll",description:"A troll has claimed the old stone bridge. Defeat it to restore safe passage.",objectives:[{id:"defeat_troll",description:"Defeat the bridge troll",target:1}]},{id:"crafting_commission_armor",name:"Armor for the Wardens",description:"The road wardens need leather armor. Craft and deliver sets to their outpost.",objectives:[{id:"deliver_armor",description:"Deliver leather armor",target:3}]},{id:"herb_gathering_mirkwood",name:"Herbs of Mirkwood",description:"The Woodland Guardians need medicinal herbs that grow deep within the shadowed paths of Mirkwood.",factionId:"woodland_guardians",reward:{xp:120,items:[{id:"elven_salve",quantity:2}]},objectives:[{id:"gather_mirkwood_herbs",description:"Gather rare herbs in Mirkwood",target:8}]},{id:"goblin_camp_clear",name:"Goblin Camp Assault",description:"A goblin encampment has been established near the trade road. Destroy it before their numbers grow.",factionId:"road_wardens",reward:{xp:200,items:[{id:"iron_sword",quantity:1}]},objectives:[{id:"defeat_camp_goblins",description:"Defeat goblins in the camp",target:8},{id:"destroy_camp_tents",description:"Destroy goblin tents",target:3}]},{id:"dwarven_relic_hunt",name:"Relics of the Dwarven Halls",description:"Ancient relics from a collapsed dwarven hall are scattered across the mountain foothills. Recover them.",factionId:"dwarven_crafters",reward:{xp:180,items:[{id:"dwarven_ring",quantity:1}]},objectives:[{id:"recover_relics",description:"Recover dwarven relics",target:5}]},{id:"road_repair_bree",name:"Mend the Bree Road",description:"The road leading into Bree has deteriorated badly. Place stone and gravel to restore safe passage.",factionId:"road_wardens",reward:{xp:100,items:[{id:"stone_block",quantity:10}]},objectives:[{id:"place_gravel",description:"Place gravel on the road",target:15},{id:"place_cobblestone",description:"Place cobblestone markers",target:6}]},{id:"spider_nest_clear",name:"Purge the Spider Nest",description:"A massive spider nest threatens the southern forest paths. Burn the webs and slay the brood mother.",factionId:"woodland_guardians",reward:{xp:250,items:[{id:"spider_silk",quantity:5}]},objectives:[{id:"burn_webs",description:"Burn spider webs",target:6},{id:"defeat_brood_mother",description:"Defeat the brood mother",target:1}]},{id:"wolf_den_clear",name:"Clear the Wolf Den",description:"Wargs have established a den in the Anduin valley caves. The Beorning Wardens need help driving them out.",factionId:"beorning_wardens",reward:{xp:180,items:[{id:"wolf_pelt",quantity:3}]},objectives:[{id:"defeat_wargs",description:"Defeat wargs in the den",target:6}]},{id:"beacon_light_chain",name:"Light the Beacon Chain",description:"The old warning beacons along the road have gone dark. Climb to each summit and relight the fires.",factionId:"road_wardens",reward:{xp:160,items:[{id:"torch",quantity:5}]},objectives:[{id:"light_beacons",description:"Light beacon fires",target:4}]},{id:"lore_collection_rivendell",name:"Lost Lore of Rivendell",description:"Scattered scrolls of ancient Elven knowledge have been found in ruins. Return them to the Keepers.",factionId:"rivendell_keepers",reward:{xp:150,items:[{id:"lore_scroll",quantity:1}]},objectives:[{id:"collect_scrolls",description:"Collect Elven lore scrolls",target:6}]},{id:"smith_commission_iron",name:"Iron Commission for the Smiths",description:"The dwarven smiths need iron tools and fittings crafted to exact specifications.",factionId:"dwarven_crafters",reward:{xp:140,items:[{id:"dwarven_ingot",quantity:2}]},objectives:[{id:"craft_iron_tools",description:"Craft iron tools",target:4},{id:"deliver_fittings",description:"Deliver iron fittings",target:3}]},{id:"cook_feast_hobbit",name:"Feast Preparations",description:"A grand feast is being planned at the frontier settlement. Gather ingredients and prepare the dishes.",factionId:"road_wardens",reward:{xp:100,items:[{id:"feast_plate",quantity:1}]},objectives:[{id:"gather_ingredients",description:"Gather feast ingredients",target:10},{id:"prepare_dishes",description:"Prepare feast dishes",target:4}]},{id:"scout_mountain_pass",name:"Scout the Mountain Pass",description:"The Beorning Wardens need a scout to traverse the high mountain pass and report on enemy movements.",factionId:"beorning_wardens",reward:{xp:200,items:[{id:"climbing_rope",quantity:2}]},objectives:[{id:"reach_summit",description:"Reach the mountain summit",target:1},{id:"mark_enemy_camps",description:"Mark enemy encampments on the map",target:3}]},{id:"map_fragment_hunt",name:"The Cartographer's Request",description:"An Elven cartographer needs old map fragments to reconstruct a complete chart of the northern wilds.",factionId:"rivendell_keepers",reward:{xp:130,items:[{id:"region_map",quantity:1}]},objectives:[{id:"find_map_fragments",description:"Find map fragments in ruins",target:5}]},{id:"ruin_survey_trollshaws",name:"Survey the Trollshaws Ruins",description:"Ancient structures in the Trollshaws may hold clues about the old kingdom. Survey and document them.",factionId:"rivendell_keepers",reward:{xp:170,items:[{id:"survey_notes",quantity:1}]},objectives:[{id:"survey_ruins",description:"Survey ruin sites in the Trollshaws",target:4}]},{id:"mushroom_foraging",name:"Foraging in the Shire Woods",description:"Rare glowing mushrooms grow in the damp hollows of the Shire woods. The Guardians use them for remedies.",factionId:"woodland_guardians",reward:{xp:90,items:[{id:"glowing_mushroom",quantity:5}]},objectives:[{id:"forage_mushrooms",description:"Forage rare mushrooms",target:8}]},{id:"guard_duty_outpost",name:"Guard Duty at the Outpost",description:"The road wardens are short-staffed. Stand guard at the frontier outpost through the night and repel attackers.",factionId:"road_wardens",reward:{xp:220,items:[{id:"warden_badge",quantity:1}]},objectives:[{id:"survive_night",description:"Survive the night at the outpost",target:1},{id:"repel_attackers",description:"Repel attacking enemies",target:5}]}],lr=Object.freeze({HAND:"hand",CAMPFIRE:"campfire",WORKBENCH:"workbench",FORGE:"forge",LOOM:"loom",KITCHEN:"kitchen",RUNE_TABLE:"rune_table"}),Tn=Object.freeze({STONE:"stone",OIL_FLASK:"oil_flask",SMOKE_BOMB:"smoke_bomb",BAIT:"bait"});class Cs{constructor({type:e,damage:t,range:n,effect:r}){this.type=e,this.damage=t,this.range=n,this.effect=r}}const rx=2;function sx(){return new nx(ix)}function ox(i){return i.map(e=>new ei({id:e.id,chapter:0,name:e.name,description:e.description,objectives:e.objectives,requires:[]}))}function ax(){const i=ox(wd);return new bv([...Tv,...i])}function cx(i,e){const t=e.getTotalArmor();return Jv(i,t)}function lx(i){const e=i.get("main_hand");return e&&e.weapon?e.weapon.damage:rx}const dx={[g.WORKBENCH]:lr.WORKBENCH,[g.FORGE]:lr.FORGE,[g.CAMPFIRE]:lr.CAMPFIRE,[g.KITCHEN]:lr.KITCHEN,[g.LOOM]:lr.LOOM,[g.RUNE_TABLE]:lr.RUNE_TABLE};function hx(i,e){const t=Math.floor(e.x),n=Math.floor(e.y),r=Math.floor(e.z),s=3;for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++)for(let c=-s;c<=s;c++){const l=i.getBlock(t+o,n+a,r+c),h=dx[l];if(h)return h}return null}function ux(i,e){return e?i.aggroRange*.5:i.aggroRange}Tn.STONE+"",new Cs({type:Tn.STONE,damage:5,range:12,effect:null}),Tn.OIL_FLASK+"",new Cs({type:Tn.OIL_FLASK,damage:15,range:10,effect:"fire"}),Tn.SMOKE_BOMB+"",new Cs({type:Tn.SMOKE_BOMB,damage:0,range:8,effect:"smoke"}),Tn.BAIT+"",new Cs({type:Tn.BAIT,damage:0,range:10,effect:"lure"});Tn.STONE,Tn.OIL_FLASK,Tn.SMOKE_BOMB,Tn.BAIT;const fx=5,px=8;class mx{constructor(e){this.base=e,this._modifiers=new Map}addModifier(e,t){this._modifiers.set(e,t)}removeModifier(e){this._modifiers.delete(e)}getEffective(e=!1,t=!1){let n=this.base;for(const r of this._modifiers.values())n+=r;return e&&(n+=fx),t&&(n-=px),Math.max(0,n)}isHiddenFrom(e,t,n=!1,r=!1){const s=this.getEffective(n,r),o=Math.min(t/5,1);return s*o>e}}const _x={wood:"🪵",stone:"🪨",fiber:"🌱",stick:"📏",clay:"🧱",iron_ore:"⛏",copper_ore:"⛏",coal:"⚫",leather:"🧴",rope:"🨢",relic_shard:"✨",lore_fragment:"📜",sand:"🏖",flint:"💎",pickaxe:"⛏",axe:"🪓",hammer:"🔨",iron_pickaxe:"⛏",copper_pickaxe:"⛏",stone_pickaxe:"⛏",stone_axe:"🪓",iron_axe:"🪓",lantern:"🏮",torch:"🔥",dagger:"🗡",iron_sword:"⚔",iron_hammer:"🔨",spear:"🔱",short_bow:"🏹",refined_bow:"🏹",sling:"💫",arrow:"➡",leather_armor:"🛡",iron_helm:"🪖",iron_chest:"🛡",shield:"🛡",cloak:"🧥",bread:"🍞",raw_meat:"🍖",cooked_meat:"🍗",berries:"🫐",mushroom:"🍄",lembas:"🍞",stew:"🍲",trail_rations:"🥪",fish:"🐟",apple:"🍎",honey:"🍯",ward_light_stone:"🌟",healing_crystal:"💎",ward_token:"🌟",bandage:"🩹",bedroll:"🛏",herb_pouch:"🌿",firestarter:"🔥",lore_scroll:"📜",map_fragment:"🗺",song_fragment:"🎶",dirt:"🟫",cobblestone:"⬜",planks:"🟨",oak_planks:"🟧",glass:"🔵",dark_stone:"⬛",marble:"⚪",thatch:"🟡",stone_brick:"🔲",chest:"🗄",workbench:"🛠",campfire:"🔥",forge:"⚒",kitchen:"🍳",loom:"🧵",gravel:"▫",raw_berries:"🫐",raw_mushroom:"🍄",herb_salad:"🥗",iron_ingot:"💠",copper_ingot:"🟠",raw_fish:"🐟",cooked_fish:"🐟",slate:"◽",birch_wood:"🪵"},gx="📦";function Go(i){return _x[i]||gx}function Cd(i,e){return i.dialogueId?e.getStatus(i.dialogueId)===en.AVAILABLE:!1}function vx(i,e){return Cd(i,e)?e.activate(i.dialogueId):!1}const xx=[{questId:"ch2_roads",objectiveId:"ch2_restore",position:{x:270,y:33,z:75},radius:15,type:"restore_site"},{questId:"ch2_roads",objectiveId:"ch2_meet_npc",position:{x:240,y:33,z:66},radius:10,type:"npc_proximity"},{questId:"ch2_roads",objectiveId:"ch2_corruption",position:{x:300,y:33,z:90},radius:20,type:"explore_area"},{questId:"ch3_records",objectiveId:"ch3_reach_rivendell",position:{x:600,y:33,z:90},radius:25,type:"reach_location"},{questId:"ch3_records",objectiveId:"ch3_learn_wards",position:{x:600,y:33,z:105},radius:10,type:"npc_proximity"},{questId:"ch3_records",objectiveId:"ch3_obtain_relic",position:{x:615,y:33,z:90},radius:8,type:"discoverable"},{questId:"ch4_mountains",objectiveId:"ch4_enter_delve",position:{x:810,y:50,z:150},radius:30,type:"reach_location"},{questId:"ch4_mountains",objectiveId:"ch4_stabilize",position:{x:810,y:45,z:165},radius:12,type:"restore_site"},{questId:"ch4_mountains",objectiveId:"ch4_defeat_boss",position:{x:795,y:50,z:135},radius:15,type:"kill_enemies"},{questId:"ch5_darkwood",objectiveId:"ch5_enter_mirkwood",position:{x:1200,y:33,z:120},radius:30,type:"reach_location"},{questId:"ch5_darkwood",objectiveId:"ch5_clear_spiders",position:{x:1200,y:33,z:135},radius:20,type:"kill_enemies"},{questId:"ch5_darkwood",objectiveId:"ch5_restore_beacon",position:{x:1200,y:33,z:135},radius:12,type:"restore_site"},{questId:"ch6_forge",objectiveId:"ch6_reach_forge",position:{x:1560,y:45,z:60},radius:25,type:"reach_location"},{questId:"ch6_forge",objectiveId:"ch6_unlock_crafting",position:{x:1560,y:45,z:60},radius:12,type:"craft_at_station"},{questId:"ch6_forge",objectiveId:"ch6_discover_source",position:{x:1545,y:45,z:75},radius:10,type:"discoverable"},{questId:"ch7_shadow",objectiveId:"ch7_assault",position:{x:1260,y:33,z:270},radius:25,type:"reach_location"},{questId:"ch7_shadow",objectiveId:"ch7_disable_link",position:{x:1260,y:33,z:270},radius:12,type:"restore_site"},{questId:"ch7_shadow",objectiveId:"ch7_defeat_champion",position:{x:1275,y:33,z:285},radius:15,type:"kill_enemies"},{questId:"ch8_after",objectiveId:"ch8_celebrate",position:{x:90,y:33,z:90},radius:15,type:"reach_location"},{questId:"ch8_after",objectiveId:"ch8_explore",position:{x:0,y:33,z:0},radius:50,type:"explore_area"}];class yx{constructor(){this._triggers=xx.map(e=>({...e})),this._fired=new Set}getTriggers(){return this._triggers}checkTriggers(e){const t=[];for(const n of this._triggers){const r=`${n.questId}:${n.objectiveId}`;this._fired.has(r)||xn(e,n.position)<=n.radius&&(t.push({questId:n.questId,objectiveId:n.objectiveId,type:n.type}),(n.type==="reach_location"||n.type==="explore_area")&&this._fired.add(r))}return t}}const ni=Object.freeze({FRESH:"fresh",AGING:"aging",STALE:"stale",SPOILED:"spoiled"}),Sx={[ni.FRESH]:1,[ni.AGING]:.75,[ni.STALE]:.4,[ni.SPOILED]:.1};class Ex{constructor(){this._items=new Map}addItem(e,t){this._items.set(e,{maxTime:t,remaining:t})}removeItem(e){this._items.delete(e)}tick(e){for(const[,t]of this._items)t.remaining=Math.max(0,t.remaining-e)}getTimeRemaining(e){const t=this._items.get(e);return t?t.remaining:1/0}getBand(e){const t=this._items.get(e);if(!t)return ni.FRESH;const n=t.remaining/t.maxTime;return n>.5?ni.FRESH:n>.25?ni.AGING:n>0?ni.STALE:ni.SPOILED}getEffectivenessMultiplier(e){return Sx[this.getBand(e)]||1}}const Is=Object.freeze({ELF:"elf",DWARF:"dwarf",HOBBIT:"hobbit",MAN:"man"}),Mx={[Is.ELF]:{beauty:3,light:2},[Is.DWARF]:{durability:3,temperature:2},[Is.HOBBIT]:{comfort:3,food:2},[Is.MAN]:{storage:3,defense:2}};function bx(i){return Mx[i]||{}}function Ol(i,e,t){return Math.max(e,Math.min(t,i))}const Tx=.5,Ax=3,Rx=60,wx=110;class Cx{constructor(){this.sensitivity=1,this.fov=75,this.tutorialEnabled=!0,this.isOpen=!1}setSensitivity(e){this.sensitivity=Ol(e,Tx,Ax)}setFov(e){this.fov=Ol(e,Rx,wx)}toggleTutorial(){this.tutorialEnabled=!this.tutorialEnabled}getMouseSensitivity(e){return e*this.sensitivity}toggleOpen(){this.isOpen=!this.isOpen}}class Ix{constructor(){this._menuOpen=!1}setMenuOpen(e){this._menuOpen=e}isPaused(){return this._menuOpen}getEffectiveDt(e){return this._menuOpen?0:e}}class Ox{constructor(e){this._tabs=[...e],this.isOpen=!1,this.activeTab=null}get tabs(){return this._tabs}open(e){this.isOpen=!0,this.activeTab=e&&this._tabs.includes(e)?e:this._tabs[0]}close(){this.isOpen=!1,this.activeTab=null}toggle(){this.isOpen?this.close():this.open()}switchTab(e){this._tabs.includes(e)&&(this.activeTab=e)}nextTab(){const e=this._tabs.indexOf(this.activeTab);this.activeTab=this._tabs[(e+1)%this._tabs.length]}prevTab(){const e=this._tabs.indexOf(this.activeTab);this.activeTab=this._tabs[(e-1+this._tabs.length)%this._tabs.length]}}const Dl=["inventory","crafting","skills","quests","map","settings","help"];function Dx(){return[{title:"Movement",items:[{key:"WASD",desc:"Move"},{key:"Mouse",desc:"Look"},{key:"Space",desc:"Jump"},{key:"Shift",desc:"Sprint"},{key:"C",desc:"Crouch"}]},{title:"Actions",items:[{key:"LClick",desc:"Mine / Attack"},{key:"RClick",desc:"Place block"},{key:"F",desc:"Eat food"},{key:"R",desc:"Restore site"},{key:"T",desc:"Talk to NPC"},{key:"G",desc:"Guard (hold)"}]},{title:"Menus",items:[{key:"ESC",desc:"Menu (pauses game)"},{key:"Tab",desc:"Switch menu tab"},{key:"M",desc:"Toggle minimap"},{key:"V",desc:"Camera toggle"},{key:"1-8 / Scroll",desc:"Hotbar slot"},{key:"F5 / F9",desc:"Save / Load"},{key:"F4",desc:"Creative mode"}]}]}function Lx(){const i=Dx();let e='<table style="text-align:left;font-size:13px;line-height:1.6;width:100%;border-collapse:collapse">';for(const t of i){e+=`<tr><td colspan="2" style="color:#c9a84c;padding:8px 0 2px;font-weight:bold">${t.title}</td></tr>`;for(const n of t.items)e+=`<tr><td style="color:#aed581;width:100px;padding:2px 8px">${n.key}</td><td>${n.desc}</td></tr>`}return e+="</table>",e}class Px{constructor(){this.visible=!1}toggle(){this.visible=!this.visible}shouldRender(e){return this.visible&&!e}}const he=Object.freeze({RESOURCE:"resource",TOOL:"tool",WEAPON:"weapon",ARMOR:"armor",FOOD:"food",RELIC:"relic",CONSUMABLE:"consumable",LORE:"lore"});function ue(i,e,t,n={}){return{id:i,name:e,category:t,...n}}ue("wood","Wood",he.RESOURCE),ue("stone","Stone",he.RESOURCE),ue("fiber","Plant Fiber",he.RESOURCE),ue("stick","Stick",he.RESOURCE),ue("clay","Clay",he.RESOURCE),ue("iron_ore","Iron Ore",he.RESOURCE),ue("copper_ore","Copper Ore",he.RESOURCE),ue("coal","Coal",he.RESOURCE),ue("leather","Leather",he.RESOURCE),ue("rope","Rope",he.RESOURCE),ue("relic_shard","Relic Shard",he.RESOURCE),ue("lore_fragment","Lore Fragment",he.RESOURCE),ue("dark_stone","Dark Stone",he.RESOURCE),ue("oak_planks","Oak Planks",he.RESOURCE),ue("birch_wood","Birch Wood",he.RESOURCE),ue("slate","Slate",he.RESOURCE),ue("marble","Marble",he.RESOURCE),ue("obsidian","Obsidian",he.RESOURCE),ue("crystal","Crystal",he.RESOURCE),ue("sand","Sand",he.RESOURCE),ue("flint","Flint",he.RESOURCE),ue("feather","Feather",he.RESOURCE),ue("bone","Bone",he.RESOURCE),ue("silver_ore","Silver Ore",he.RESOURCE),ue("mithril_shard","Mithril Shard",he.RESOURCE),ue("pickaxe","Pickaxe",he.TOOL,{durability:100,miningSpeed:2}),ue("axe","Axe",he.TOOL,{durability:80,miningSpeed:1.5}),ue("hammer","Hammer",he.TOOL,{durability:120}),ue("copper_pickaxe","Copper Pickaxe",he.TOOL,{durability:150,miningSpeed:2.5}),ue("iron_pickaxe","Iron Pickaxe",he.TOOL,{durability:250,miningSpeed:3.5}),ue("lantern","Lantern",he.TOOL),ue("torch","Torch",he.TOOL),ue("repair_kit","Repair Kit",he.TOOL),ue("dagger","Dagger",he.WEAPON,{damage:4}),ue("iron_sword","Iron Sword",he.WEAPON,{damage:10}),ue("iron_hammer","Iron Hammer",he.WEAPON,{damage:12}),ue("spear","Spear",he.WEAPON,{damage:8}),ue("short_bow","Short Bow",he.WEAPON,{damage:6,ranged:!0}),ue("refined_bow","Refined Bow",he.WEAPON,{damage:9,ranged:!0}),ue("sling","Sling",he.WEAPON,{damage:3,ranged:!0}),ue("copper_sword","Copper Sword",he.WEAPON,{damage:7}),ue("stone_axe","Stone Axe",he.WEAPON,{damage:5}),ue("walking_stick","Walking Stick",he.WEAPON,{damage:2}),ue("arrow","Arrow",he.WEAPON,{stackable:!0}),ue("silver_blade","Silver Blade",he.WEAPON,{damage:14}),ue("leather_armor","Leather Armor",he.ARMOR,{armor:5}),ue("iron_helm","Iron Helm",he.ARMOR,{armor:3}),ue("iron_chest","Iron Chestplate",he.ARMOR,{armor:8}),ue("iron_legs","Iron Leggings",he.ARMOR,{armor:5}),ue("iron_boots","Iron Boots",he.ARMOR,{armor:2}),ue("cloak","Cloak",he.ARMOR,{armor:1}),ue("shield","Shield",he.ARMOR,{armor:4}),ue("dwarven_plate","Dwarven Plate",he.ARMOR,{armor:12}),ue("bread","Bread",he.FOOD,{hunger:15}),ue("raw_meat","Raw Meat",he.FOOD,{hunger:5}),ue("cooked_meat","Cooked Meat",he.FOOD,{hunger:20}),ue("berries","Berries",he.FOOD,{hunger:5}),ue("mushroom","Mushroom",he.FOOD,{hunger:8}),ue("lembas","Lembas Bread",he.FOOD,{hunger:30}),ue("stew","Hearty Stew",he.FOOD,{hunger:25,buff:"stamina_regen"}),ue("trail_rations","Trail Rations",he.FOOD,{hunger:12}),ue("dried_meat","Dried Meat",he.FOOD,{hunger:10,preserved:!0}),ue("honey","Honey",he.FOOD,{hunger:8,buff:"health_regen"}),ue("fish","Fish",he.FOOD,{hunger:12}),ue("apple","Apple",he.FOOD,{hunger:7}),ue("ward_light_stone","Ward Light Stone",he.RELIC),ue("healing_crystal","Healing Crystal",he.RELIC),ue("corruption_lens","Corruption Lens",he.RELIC),ue("root_charm","Root Charm",he.RELIC),ue("stone_ward_rune","Stone Ward Rune",he.RELIC),ue("ward_token","Ward Token",he.RELIC),ue("bandage","Bandage",he.CONSUMABLE),ue("antidote","Antidote",he.CONSUMABLE),ue("firestarter","Firestarter",he.CONSUMABLE),ue("bedroll","Bedroll",he.CONSUMABLE),ue("pan","Cooking Pan",he.CONSUMABLE),ue("herb_pouch","Herb Pouch",he.CONSUMABLE),ue("satchel","Satchel",he.CONSUMABLE),ue("lock_tools","Lock Tools",he.CONSUMABLE),ue("lore_scroll","Ancient Scroll",he.LORE),ue("map_fragment","Map Fragment",he.LORE),ue("song_fragment","Song Fragment",he.LORE),ue("rune_tablet","Rune Tablet",he.LORE),ue("inscription_rubbing","Inscription Rubbing",he.LORE);tn.MAIN_HAND,tn.HEAD,tn.CHEST,tn.LEGS,tn.FEET,tn.OFF_HAND,tn.ACCESSORY;tn.MAIN_HAND+"",tn.HEAD+"",tn.CHEST+"",tn.LEGS+"",tn.FEET+"",tn.OFF_HAND+"",tn.ACCESSORY+"";class Nx{isDead(e){return e.health<=0}respawn(e,t,n){e.health=e.maxHealth*.5,e.hunger=Math.max(e.hunger,50),e.stamina=100,t.position.x=n.x,t.position.y=n.y,t.position.z=n.z}}class kx{constructor(){this.enabled=!1,this.flySpeed=vr.CREATIVE.FLY_SPEED}toggle(){this.enabled=!this.enabled}isInvincible(){return this.enabled}canFly(){return this.enabled}noHunger(){return this.enabled}}class Ux{constructor(){this._message="",this._choices=[],this._active=!1,this._state="inactive",this.selectedIndex=0,this._response=null}getState(){return this._state}isActive(){return this._active}getMessage(){return this._response||this._message}getChoices(){return this._state==="choices"?this._choices:[]}startDialogue(e,t=[]){this._message=e,this._choices=t,this._active=!0,this._state="choices",this._response=null,this.selectedIndex=0}selectChoice(e){if(this._state!=="choices"||e<0||e>=this._choices.length)return null;const t=this._choices[e];return t.response===null?(this._active=!1,this._state="inactive",null):(this._response=t.response,this._state="response",t.response)}acknowledge(){this._state==="response"&&(this._response=null,this._state="choices",this.selectedIndex=0)}selectNext(){this._state==="choices"&&this._choices.length>0&&(this.selectedIndex=Math.min(this.selectedIndex+1,this._choices.length-1))}selectPrev(){this._state==="choices"&&(this.selectedIndex=Math.max(0,this.selectedIndex-1))}dismiss(){this._active=!1,this._state="inactive",this._message="",this._choices=[],this._response=null}}const Hs=Object.freeze({STORY:"story",STANDARD:"standard",HARSH:"harsh"}),Ll={[Hs.STORY]:{hungerDrainMultiplier:.5,enemyDamageMultiplier:.6,corruptionMultiplier:.5,resourceMultiplier:1.5},[Hs.STANDARD]:{hungerDrainMultiplier:1,enemyDamageMultiplier:1,corruptionMultiplier:1,resourceMultiplier:1},[Hs.HARSH]:{hungerDrainMultiplier:1.5,enemyDamageMultiplier:1.4,corruptionMultiplier:1.5,resourceMultiplier:.7}};function Fx(i){return Ll[i]||Ll[Hs.STANDARD]}function Bx(i,e){return i*(e.hungerDrainMultiplier??1)}function zx(i,e){return i*(e.enemyDamageMultiplier??1)}const Hx={man:{road_wardens:15},elf:{rivendell_keepers:20,woodland_guardians:15},dwarf:{dwarven_crafters:25},hobbit:{road_wardens:15,beorning_wardens:10}};function Gx(i){return Hx[i]||{}}const Vx={man_ranger:["surv_forager"],man_soldier:["cmb_parry"],man_scholar:["att_focus","exp_map_reveal"],elf_archer:["cmb_quick_draw"],elf_warden:["att_ward","cmb_parry"],elf_gatherer:["surv_forager","crf_yield"],dwarf_miner:["crf_yield"],dwarf_blacksmith:["crf_repair","cmb_heavy_blow"],dwarf_delver:["exp_climb","exp_map_reveal"],hobbit_burglar:["surv_hardy"],hobbit_cook:["surv_hardy","fel_trader"],hobbit_forager:["surv_forager","surv_hardy"]};function Wx(i,e){const t=`${i}_${e}`;return Vx[t]||[]}function Pl(i,e){if(!e||e.length===0)return[];const t=new Set(e),n=i.getTriggers(),r=[];for(const s of n)t.has(s.questId)&&r.push({questId:s.questId,objectiveId:s.objectiveId,x:s.position.x,z:s.position.z,label:s.objectiveId.replace(/_/g," ")});return r}const Vo={zone:{r:.35,g:.55,b:.17}};function Xx(i){const e=Math.min(1,i);return{r:.53*(1-e)+Vo.zone.r*e,g:.81*(1-e)+Vo.zone.g*e,b:.92*(1-e)+Vo.zone.b*e}}const qx={[g.DIRT]:.4,[g.GRASS]:.4,[g.SAND]:.4,[g.CLAY]:.5,[g.GRAVEL]:.4,[g.TALL_GRASS]:.1,[g.LEAVES]:.2,[g.MUD]:.4,[g.SNOW]:.3,[g.THATCH]:.3,[g.REED]:.1,[g.WOOD]:.8,[g.BIRCH_WOOD]:.8,[g.PLANKS]:.6,[g.OAK_PLANKS]:.6,[g.STONE]:1.5,[g.COBBLESTONE]:1.2,[g.STONE_BRICK]:1.3,[g.IRON_ORE]:2,[g.COPPER_ORE]:1.8,[g.COAL_ORE]:1.5,[g.GLASS]:.3,[g.TORCH]:.1,[g.CAMPFIRE]:.5,[g.WORKBENCH]:.8,[g.FORGE]:2,[g.KITCHEN]:.6,[g.LOOM]:.5,[g.RUNE_TABLE]:1.5},Yx=1;class Kx{constructor(){this._x=0,this._y=0,this._z=0,this._blockType=0,this._progress=0,this._breakTime=0,this._active=!1}isBreaking(){return this._active}getProgress(){return this._progress}getPosition(){return{x:this._x,y:this._y,z:this._z}}startBreak(e,t,n,r){this._active&&this._x===e&&this._y===t&&this._z===n||(this._x=e,this._y=t,this._z=n,this._blockType=r,this._breakTime=qx[r]||Yx,this._progress=0,this._active=!0)}tick(e){return this._active?(this._progress+=e/this._breakTime,this._progress>=1?(this._active=!1,this._progress=0,!0):!1):!1}cancel(){this._active=!1,this._progress=0}}function $x(i){return i===g.DOOR||i===g.DOOR_OPEN}function Nl(i,e,t,n){const r=i.getBlock(e,t,n);return r===g.DOOR?(i.setBlock(e,t,n,g.DOOR_OPEN),i.getBlock(e,t+1,n)===g.DOOR&&i.setBlock(e,t+1,n,g.DOOR_OPEN),i.getBlock(e,t-1,n)===g.DOOR&&i.setBlock(e,t-1,n,g.DOOR_OPEN),!0):r===g.DOOR_OPEN?(i.setBlock(e,t,n,g.DOOR),i.getBlock(e,t+1,n)===g.DOOR_OPEN&&i.setBlock(e,t+1,n,g.DOOR),i.getBlock(e,t-1,n)===g.DOOR_OPEN&&i.setBlock(e,t-1,n,g.DOOR),!0):!1}class jx{constructor(){this._chests=new Map}_key(e,t,n){return`${e},${t},${n}`}_getOrCreate(e,t,n){const r=this._key(e,t,n);return this._chests.has(r)||this._chests.set(r,[]),this._chests.get(r)}addItem(e,t,n,r,s){const o=this._getOrCreate(e,t,n),a=o.find(c=>c.type===r);a?a.count+=s:o.push({type:r,count:s})}getItems(e,t,n){const r=this._key(e,t,n);return this._chests.get(r)||[]}takeItem(e,t,n,r){const s=this._key(e,t,n),o=this._chests.get(s);if(!o)return null;const a=o.findIndex(l=>l.type===r);return a===-1?null:o.splice(a,1)[0]}}const At=g.OAK_PLANKS,bn=g.PLANKS,xt=g.COBBLESTONE,ot=g.STONE_BRICK,ln=g.MARBLE,dr=g.BIRCH_WOOD,gi=g.SLATE,Os=g.THATCH,Ba=g.IRON_BLOCK,Fi=g.STONE,Wo=g.LEAVES,Xo=[{name:"Bag End",region:"shire",x:-15,z:-24,hobbitHole:!0,floorBlock:xt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"wood",count:10},{type:"torch",count:5},{type:"raw_berries",count:3}]},{name:"Ranger Hal's Lodge",region:"shire",x:12,z:18,wallBlock:At,roofBlock:bn,floorBlock:xt,radius:4,height:4,bed:!0,chest:!0,npcId:"ranger_hal",chestItems:[{type:"leather",count:2},{type:"iron_ore",count:2}]},{name:"Hamfast's Farmhouse",region:"shire",x:-63,z:30,wallBlock:At,roofBlock:Os,floorBlock:xt,radius:4,height:3,bed:!0,chest:!0,npcId:"shire_farmer",chestItems:[{type:"fiber",count:5},{type:"wood",count:3}]},{name:"Rosie's Shop",region:"shire",x:42,z:-21,wallBlock:At,roofBlock:bn,floorBlock:xt,radius:4,height:4,bed:!0,chest:!0,npcId:"shire_merchant",chestItems:[{type:"stone",count:5},{type:"leather",count:3},{type:"torch",count:3}]},{name:"Green Dragon Inn",region:"shire",x:75,z:45,wallBlock:At,roofBlock:bn,floorBlock:xt,radius:5,height:5,bed:!0,chest:!0,chestItems:[{type:"cooked_meat",count:3},{type:"torch",count:4}]},{name:"Hobbit Hole – Cottons",region:"shire",x:-90,z:-45,hobbitHole:!0,floorBlock:xt,radius:3,height:3,bed:!0,chest:!1},{name:"Hobbit Hole – Bracegirdle",region:"shire",x:-30,z:75,hobbitHole:!0,floorBlock:xt,radius:3,height:3,bed:!0,chest:!1},{name:"Hobbit Hole – Proudfoot",region:"shire",x:105,z:-45,hobbitHole:!0,floorBlock:xt,radius:3,height:3,bed:!0,chest:!1},{name:"The Prancing Pony",region:"bree",x:237,z:60,wallBlock:xt,roofBlock:bn,floorBlock:ot,radius:6,height:5,bed:!0,chest:!0,npcId:"old_tom",chestItems:[{type:"iron_ore",count:2},{type:"wood",count:5},{type:"cooked_meat",count:2}]},{name:"Bree Blacksmith",region:"bree",x:198,z:30,wallBlock:xt,roofBlock:gi,floorBlock:ot,radius:4,height:4,bed:!0,chest:!0,npcId:"bree_blacksmith",chestItems:[{type:"iron_ore",count:4},{type:"stone",count:5}]},{name:"Bree House – South",region:"bree",x:270,z:36,wallBlock:xt,roofBlock:bn,floorBlock:xt,radius:3,height:3,bed:!0,chest:!1},{name:"Bree House – North",region:"bree",x:216,z:102,wallBlock:xt,roofBlock:bn,floorBlock:xt,radius:3,height:3,bed:!0,chest:!1},{name:"Bree Gatehouse",region:"bree",x:195,z:60,wallBlock:ot,roofBlock:gi,floorBlock:ot,radius:3,height:5,bed:!1,chest:!1},{name:"Bree Storehouse",region:"bree",x:276,z:78,wallBlock:xt,roofBlock:bn,floorBlock:xt,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"wood",count:10},{type:"stone",count:8},{type:"fiber",count:6}]},{name:"Ranger Outpost",region:"trollshaws",x:390,z:105,wallBlock:xt,roofBlock:bn,floorBlock:xt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:5},{type:"bandage",count:2}]},{name:"Hermit Cabin",region:"trollshaws",x:450,z:135,wallBlock:At,roofBlock:Os,floorBlock:xt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:6},{type:"raw_berries",count:4}]},{name:"House of Elrond",region:"rivendell",x:582,z:99,wallBlock:ln,roofBlock:dr,floorBlock:ln,radius:6,height:5,bed:!0,chest:!0,npcId:"elara_lorekeeper",chestItems:[{type:"lore_fragment",count:2},{type:"relic_shard",count:1}]},{name:"Celebrin's Healing Hall",region:"rivendell",x:624,z:54,wallBlock:ln,roofBlock:dr,floorBlock:ln,radius:4,height:4,bed:!0,chest:!0,npcId:"rivendell_healer",chestItems:[{type:"fiber",count:4},{type:"raw_berries",count:5},{type:"bandage",count:3}]},{name:"Rivendell Library",region:"rivendell",x:630,z:114,wallBlock:ln,roofBlock:dr,floorBlock:ot,radius:5,height:5,bed:!1,chest:!0,chestItems:[{type:"lore_fragment",count:3}]},{name:"Rivendell Guest House",region:"rivendell",x:570,z:66,wallBlock:ln,roofBlock:dr,floorBlock:ln,radius:3,height:4,bed:!0,chest:!1},{name:"Rivendell Watchtower",region:"rivendell",x:660,z:90,wallBlock:ln,roofBlock:ot,floorBlock:ln,radius:3,height:6,bed:!1,chest:!1},{name:"Thorin's Forge",region:"misty_mountains",x:807,z:159,wallBlock:ot,roofBlock:gi,floorBlock:ot,radius:5,height:4,bed:!0,chest:!0,npcId:"thorin_smith",chestItems:[{type:"iron_ore",count:5},{type:"copper_ore",count:3}]},{name:"Dwalin's Trading Post",region:"misty_mountains",x:762,z:129,wallBlock:ot,roofBlock:gi,floorBlock:ot,radius:4,height:4,bed:!0,chest:!0,npcId:"mountain_trader",chestItems:[{type:"stone",count:8},{type:"wood",count:6}]},{name:"Mountain Shelter",region:"misty_mountains",x:840,z:180,wallBlock:Fi,roofBlock:gi,floorBlock:ot,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:8},{type:"bandage",count:2}]},{name:"Dwarven Mining Camp",region:"misty_mountains",x:774,z:195,wallBlock:ot,roofBlock:gi,floorBlock:xt,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:3},{type:"coal",count:5},{type:"stone",count:10}]},{name:"Beorn's Hall",region:"anduin_vale",x:1002,z:189,wallBlock:At,roofBlock:Os,floorBlock:xt,radius:6,height:5,bed:!0,chest:!0,npcId:"beorn_jr",chestItems:[{type:"raw_meat",count:5},{type:"leather",count:3}]},{name:"Vale Farmstead",region:"anduin_vale",x:1050,z:165,wallBlock:At,roofBlock:Os,floorBlock:xt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:8},{type:"raw_berries",count:4}]},{name:"Carrock Watchtower",region:"anduin_vale",x:1035,z:216,wallBlock:ot,roofBlock:gi,floorBlock:ot,radius:3,height:6,bed:!1,chest:!1},{name:"Elvenking Gate Post",region:"mirkwood",x:1167,z:114,wallBlock:dr,roofBlock:Wo,floorBlock:xt,radius:5,height:5,bed:!0,chest:!0,npcId:"galawen_warden",chestItems:[{type:"fiber",count:8},{type:"relic_shard",count:1},{type:"rope",count:2}]},{name:"Mirkwood Ranger Camp",region:"mirkwood",x:1215,z:144,wallBlock:dr,roofBlock:Wo,floorBlock:xt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:6},{type:"bandage",count:3}]},{name:"Forest Watch Platform",region:"mirkwood",x:1245,z:96,wallBlock:At,roofBlock:Wo,floorBlock:At,radius:3,height:6,bed:!1,chest:!1},{name:"Dark Outpost",region:"dol_guldur",x:1254,z:255,wallBlock:g.DARK_STONE,roofBlock:g.OBSIDIAN,floorBlock:g.CORRUPTED_STONE,radius:4,height:4,bed:!1,chest:!0,chestItems:[{type:"dark_stone",count:5},{type:"relic_shard",count:2}]},{name:"Lake-town Hall",region:"long_lake",x:1395,z:84,wallBlock:At,roofBlock:bn,floorBlock:xt,radius:5,height:4,bed:!0,chest:!0,chestItems:[{type:"wood",count:10},{type:"iron_ore",count:3}]},{name:"Fisherman's Hut",region:"long_lake",x:1434,z:66,wallBlock:At,roofBlock:bn,floorBlock:At,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:4},{type:"raw_meat",count:3}]},{name:"Dock Warehouse",region:"long_lake",x:1434,z:114,wallBlock:At,roofBlock:bn,floorBlock:xt,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"rope",count:3},{type:"wood",count:8},{type:"iron_ore",count:2}]},{name:"Front Gate Guardhouse",region:"erebor",x:1542,z:54,wallBlock:ot,roofBlock:Ba,floorBlock:ot,radius:4,height:5,bed:!0,chest:!0,chestItems:[{type:"iron_ore",count:5},{type:"torch",count:6}]},{name:"Miriel's Observatory",region:"erebor",x:1482,z:78,wallBlock:ot,roofBlock:gi,floorBlock:ln,radius:5,height:5,bed:!0,chest:!0,npcId:"sage_miriel",chestItems:[{type:"relic_shard",count:3},{type:"lore_fragment",count:2}]},{name:"Dale Marketplace",region:"erebor",x:1575,z:84,wallBlock:ot,roofBlock:bn,floorBlock:ot,radius:5,height:4,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:4},{type:"leather",count:3},{type:"stone",count:6}]},{name:"Erebor Great Forge",region:"erebor",x:1590,z:42,wallBlock:ot,roofBlock:Ba,floorBlock:ot,radius:5,height:5,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:8},{type:"copper_ore",count:5},{type:"coal",count:10}]}],Zx=[{type:"line",x1:-105,z1:-60,x2:-105,z2:90,block:At,dy:1,name:"Shire west fence"},{type:"line",x1:-105,z1:-60,x2:120,z2:-60,block:At,dy:1,name:"Shire south fence"},{type:"line",x1:120,z1:-60,x2:120,z2:90,block:At,dy:1,name:"Shire east fence"},{type:"line",x1:-105,z1:90,x2:120,z2:90,block:At,dy:1,name:"Shire north fence"},{type:"line",x1:-90,z1:0,x2:120,z2:0,block:xt,dy:0,surface:!0,name:"Shire main road"},{type:"line",x1:0,z1:-54,x2:0,z2:84,block:xt,dy:0,surface:!0,name:"Shire cross road"},{type:"well",x:15,z:0,name:"Shire well"},{type:"line",x1:180,z1:24,x2:180,z2:105,block:ot,dy:1,name:"Bree west wall"},{type:"line",x1:180,z1:24,x2:180,z2:105,block:ot,dy:2,name:"Bree west wall top"},{type:"line",x1:285,z1:24,x2:285,z2:105,block:ot,dy:1,name:"Bree east wall"},{type:"line",x1:285,z1:24,x2:285,z2:105,block:ot,dy:2,name:"Bree east wall top"},{type:"line",x1:180,z1:60,x2:285,z2:60,block:xt,dy:0,surface:!0,name:"Bree main street"},{type:"well",x:240,z:60,name:"Bree well"},{type:"blocks",x:435,z:126,name:"Stone Trolls",blocks:[{dx:0,dz:0,dy:1,block:Fi},{dx:0,dz:0,dy:2,block:Fi},{dx:0,dz:0,dy:3,block:g.MOSSY_STONE},{dx:3,dz:1,dy:1,block:Fi},{dx:3,dz:1,dy:2,block:Fi},{dx:3,dz:1,dy:3,block:g.MOSSY_STONE},{dx:1,dz:3,dy:1,block:Fi},{dx:1,dz:3,dy:2,block:Fi},{dx:1,dz:3,dy:3,block:g.MOSSY_STONE}]},{type:"line",x1:555,z1:84,x2:585,z2:84,block:ln,dy:1,name:"Rivendell bridge"},{type:"line",x1:555,z1:84,x2:585,z2:84,block:ln,dy:0,surface:!0,name:"Rivendell bridge deck"},{type:"line",x1:570,z1:75,x2:645,z2:75,block:ln,dy:0,surface:!0,name:"Rivendell garden path"},{type:"line",x1:600,z1:60,x2:600,z2:120,block:ln,dy:0,surface:!0,name:"Rivendell main path"},{type:"blocks",x:795,z:144,name:"Mountain trail markers",blocks:[{dx:0,dz:0,dy:1,block:ot},{dx:0,dz:0,dy:2,block:g.TORCH},{dx:15,dz:5,dy:1,block:ot},{dx:15,dz:5,dy:2,block:g.TORCH},{dx:30,dz:10,dy:1,block:ot},{dx:30,dz:10,dy:2,block:g.TORCH}]},{type:"line",x1:1035,z1:150,x2:1080,z2:150,block:At,dy:1,name:"Vale south fence"},{type:"line",x1:1035,z1:150,x2:1035,z2:180,block:At,dy:1,name:"Vale west fence"},{type:"line",x1:1080,z1:150,x2:1080,z2:180,block:At,dy:1,name:"Vale east fence"},{type:"line",x1:1035,z1:180,x2:1080,z2:180,block:At,dy:1,name:"Vale north fence"},{type:"blocks",x:1155,z:120,name:"Mirkwood path torches",blocks:[{dx:0,dz:0,dy:1,block:At},{dx:0,dz:0,dy:2,block:g.TORCH},{dx:8,dz:2,dy:1,block:At},{dx:8,dz:2,dy:2,block:g.TORCH},{dx:16,dz:4,dy:1,block:At},{dx:16,dz:4,dy:2,block:g.TORCH},{dx:24,dz:0,dy:1,block:At},{dx:24,dz:0,dy:2,block:g.TORCH},{dx:32,dz:-2,dy:1,block:At},{dx:32,dz:-2,dy:2,block:g.TORCH}]},{type:"blocks",x:1260,z:270,name:"Dol Guldur corrupted stones",blocks:[{dx:-5,dz:0,dy:1,block:g.CORRUPTED_STONE},{dx:5,dz:0,dy:1,block:g.CORRUPTED_STONE},{dx:0,dz:-5,dy:1,block:g.CORRUPTED_STONE},{dx:0,dz:5,dy:1,block:g.CORRUPTED_STONE},{dx:-4,dz:-3,dy:1,block:g.DARK_STONE},{dx:4,dz:-3,dy:1,block:g.DARK_STONE},{dx:-4,dz:3,dy:1,block:g.DARK_STONE},{dx:4,dz:3,dy:1,block:g.DARK_STONE}]},{type:"blocks",x:1416,z:60,name:"Lake-town dock",blocks:(()=>{const i=[];for(let e=0;e<8;e++)for(let t=0;t<3;t++)i.push({dx:e,dz:t,dy:0,block:At,surface:!0});return i.push({dx:0,dz:1,dy:-1,block:At}),i.push({dx:7,dz:1,dy:-1,block:At}),i})()},{type:"blocks",x:1554,z:45,name:"Erebor front gate",blocks:[{dx:0,dz:0,dy:1,block:ot},{dx:0,dz:0,dy:2,block:ot},{dx:0,dz:0,dy:3,block:ot},{dx:0,dz:0,dy:4,block:ot},{dx:0,dz:4,dy:1,block:ot},{dx:0,dz:4,dy:2,block:ot},{dx:0,dz:4,dy:3,block:ot},{dx:0,dz:4,dy:4,block:ot},{dx:0,dz:1,dy:4,block:ot},{dx:0,dz:2,dy:4,block:Ba},{dx:0,dz:3,dy:4,block:ot},{dx:1,dz:0,dy:3,block:g.TORCH},{dx:1,dz:4,dy:3,block:g.TORCH}]},{type:"line",x1:120,z1:0,x2:180,z2:24,block:xt,dy:0,surface:!0,name:"East Road – Shire to Bree"},{type:"line",x1:285,z1:60,x2:390,z2:105,block:xt,dy:0,surface:!0,name:"East Road – Bree to Trollshaws"},{type:"line",x1:465,z1:126,x2:555,z2:96,block:xt,dy:0,surface:!0,name:"East Road – Trollshaws to Rivendell"}],Qx=[{name:"Party Tree",x:0,z:36,type:"large"},{name:"Old Willow",x:-120,z:15,type:"large"},{name:"Rivendell Cedar",x:624,z:105,type:"large"},{name:"Beorn Oak",x:1014,z:210,type:"large"},{name:"Mirkwood Ancient",x:1185,z:105,type:"large"}],qo=[{x:0,z:-9,block:g.WORKBENCH,dy:1,name:"Shire workbench"},{x:6,z:-9,block:g.CAMPFIRE,dy:1,name:"Shire campfire"},{x:225,z:54,block:g.FORGE,dy:1,name:"Bree forge"},{x:249,z:54,block:g.KITCHEN,dy:1,name:"Bree kitchen"},{x:615,z:90,block:g.LOOM,dy:1,name:"Rivendell loom"},{x:594,z:90,block:g.RUNE_TABLE,dy:1,name:"Rivendell rune table"},{x:825,z:165,block:g.FORGE,dy:1,name:"Mountain forge"},{x:804,z:174,block:g.WORKBENCH,dy:1,name:"Mountain workbench"},{x:1020,z:174,block:g.KITCHEN,dy:1,name:"Vale kitchen"},{x:1026,z:174,block:g.CAMPFIRE,dy:1,name:"Vale campfire"},{x:1176,z:126,block:g.WORKBENCH,dy:1,name:"Mirkwood workbench"},{x:1182,z:126,block:g.LOOM,dy:1,name:"Mirkwood loom"},{x:1584,z:48,block:g.FORGE,dy:1,name:"Erebor forge"},{x:1578,z:48,block:g.WORKBENCH,dy:1,name:"Erebor workbench"}];function Jx(i){return i<=26?[40,80,160]:i<=32?[80,150,60]:i<=40?[130,170,70]:i<=55?[160,150,120]:[220,220,230]}class ey{constructor(e,t){this._getHeight=e,this._getBiome=t}worldToGrid(e,t,n){return{col:Math.floor((e-Bs)/n),row:Math.floor((t-zs)/n)}}gridToWorld(e,t,n){return{x:Bs+e*n+n/2,z:zs+t*n+n/2}}_gridDimensions(e){const t=Math.ceil((C0-Bs)/e),n=Math.ceil((I0-zs)/e);return{width:t,height:n}}getTerrainHeightGrid(e){const{width:t,height:n}=this._gridDimensions(e),r=new Int32Array(t*n);for(let s=0;s<n;s++)for(let o=0;o<t;o++){const{x:a,z:c}=this.gridToWorld(o,s,e);r[s*t+o]=this._getHeight(a,c)}return{width:t,height:n,data:r}}getBiomeGrid(e){const{width:t,height:n}=this._gridDimensions(e),r=new Array(t*n);for(let s=0;s<n;s++)for(let o=0;o<t;o++){const{x:a,z:c}=this.gridToWorld(o,s,e);r[s*t+o]=this._getBiome(a,c).type}return{width:t,height:n,data:r}}getPopulationGrid(e,t,n){const{width:r,height:s}=this._gridDimensions(n),o=new Int32Array(r*s);for(const a of e){const{col:c,row:l}=this.worldToGrid(a.x,a.z,n);c>=0&&c<r&&l>=0&&l<s&&(o[l*r+c]+=1)}for(const a of t){const{col:c,row:l}=this.worldToGrid(a.position.x,a.position.z,n);c>=0&&c<r&&l>=0&&l<s&&(o[l*r+c]+=1)}return{width:r,height:s,data:o}}getSlopeGrid(e){const t=this.getTerrainHeightGrid(e),{width:n,height:r,data:s}=t,o=new Float32Array(n*r);for(let a=0;a<r;a++)for(let c=0;c<n;c++){const l=a*n+c,h=s[l];let u=0;for(const[f,m]of[[-1,0],[1,0],[0,-1],[0,1]]){const _=a+f,x=c+m;_>=0&&_<r&&x>=0&&x<n&&(u=Math.max(u,Math.abs(s[_*n+x]-h)))}o[l]=u/e}return{width:n,height:r,data:o}}getTerrainColorMap(e){const t=this.getTerrainHeightGrid(e),{width:n,height:r,data:s}=t,o=new Uint8Array(n*r*3);for(let a=0;a<s.length;a++){const[c,l,h]=Jx(s[a]);o[a*3]=c,o[a*3+1]=l,o[a*3+2]=h}return{width:n,height:r,data:o}}getBuildingFootprints(e,t){return e.map(n=>{const{col:r,row:s}=this.worldToGrid(n.x,n.z,t);return{col:r,row:s,radius:Math.ceil(n.radius/t),name:n.name,region:n.region,hasNPC:!!n.npcId}})}getStationMarkers(e,t){return e.map(n=>{const{col:r,row:s}=this.worldToGrid(n.x,n.z,t);return{col:r,row:s,name:n.name,block:n.block}})}}const ty=2,ny={shire:[100,200,70,40],plains:[180,200,80,30],forest:[30,130,40,40],mirkwood:[20,60,20,50],mountain:[160,160,170,30]},ur=Object.freeze({OVERVIEW:"overview",DETAIL:"detail"});class kl{constructor(e,t){this._layers=e,this._canvas=t,this._ctx=t.getContext("2d"),this._zoom=ur.OVERVIEW,this._visitedMarkers=[],this._overviewImage=null,this._overviewBiome=null}get zoom(){return this._zoom}toggleZoom(){this._zoom=this._zoom===ur.OVERVIEW?ur.DETAIL:ur.OVERVIEW}setZoom(e){this._zoom=e}addVisitedMarker(e,t,n){this._visitedMarkers.some(s=>Math.abs(s.x-e)<10&&Math.abs(s.z-t)<10)||this._visitedMarkers.push({x:e,z:t,label:n})}draw(e){const{playerPos:t,fogOfWar:n,buildings:r,npcs:s,stations:o,landmarks:a,questMarkers:c}=e,l=this._ctx,h=this._canvas.width,u=this._canvas.height;l.clearRect(0,0,h,u),this._zoom===ur.OVERVIEW?this._drawOverview(l,h,u,e):this._drawDetail(l,h,u,e)}_drawOverview(e,t,n,r){const s=ty,{playerPos:o,fogOfWar:a,buildings:c,landmarks:l,questMarkers:h,mini:u}=r;this._overviewImage||(this._overviewImage=this._layers.getTerrainColorMap(s),this._overviewBiome=this._layers.getBiomeGrid(s));const f=this._overviewImage,m=this._overviewBiome,_=e.createImageData(f.width,f.height);for(let R=0;R<f.width*f.height;R++){let C=f.data[R*3],L=f.data[R*3+1],M=f.data[R*3+2];const S=m.data[R],O=ny[S];if(O){const W=O[3]/100;C=Math.round(C*(1-W)+O[0]*W),L=Math.round(L*(1-W)+O[1]*W),M=Math.round(M*(1-W)+O[2]*W)}if(a){const{x:W,z:H}=this._layers.gridToWorld(R%f.width,Math.floor(R/f.width),s);a.isRevealed(W,H)||(C=Math.round(C*.2),L=Math.round(L*.2),M=Math.round(M*.2))}_.data[R*4]=C,_.data[R*4+1]=L,_.data[R*4+2]=M,_.data[R*4+3]=255}const x=document.createElement("canvas");x.width=f.width,x.height=f.height,x.getContext("2d").putImageData(_,0,0),e.imageSmoothingEnabled=!1,e.drawImage(x,0,0,t,n);const p=t/f.width,d=n/f.height,T=R=>(R-Bs)/s*p,b=R=>(R-zs)/s*d;if(c){e.fillStyle="rgba(139, 90, 43, 0.6)";for(const R of c){const C=T(R.x),L=b(R.z),M=R.radius/s*p;e.fillRect(C-M,L-M,M*2,M*2)}}if(l)for(const R of l){const C=T(R.position.x),L=b(R.position.z);e.fillStyle="#c9a84c",e.beginPath(),e.moveTo(C,L-5),e.lineTo(C+4,L),e.lineTo(C,L+5),e.lineTo(C-4,L),e.closePath(),e.fill(),u||(e.font="10px monospace",e.textAlign="center",e.fillStyle="#c9a84c",e.fillText(R.name,C,L-8))}if(h){e.fillStyle="#e53935";for(const R of h){const C=T(R.x),L=b(R.z);e.beginPath(),e.arc(C,L,4,0,Math.PI*2),e.fill()}}e.fillStyle="rgba(100, 200, 255, 0.7)";for(const R of this._visitedMarkers){const C=T(R.x),L=b(R.z);e.beginPath(),e.arc(C,L,3,0,Math.PI*2),e.fill()}const E=T(o.x),D=b(o.z);e.fillStyle="#4caf50",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.arc(E,D,5,0,Math.PI*2),e.fill(),e.stroke(),u||(this._drawLegend(e,t,n),e.fillStyle="#888",e.font="11px monospace",e.textAlign="right",e.fillText("Z: Toggle zoom | M: Close",t-8,n-6))}_drawDetail(e,t,n,r){const{playerPos:s,fogOfWar:o,buildings:a,npcs:c,stations:l,questMarkers:h}=r,u=Math.floor(t/2),f=Math.floor(n/2),m=Math.floor(s.x)-u,_=Math.floor(s.z)-f,x=e.createImageData(t,n);for(let E=0;E<n;E++)for(let D=0;D<t;D++){const R=m+D,C=_+E,L=this._layers._getHeight(R,C);let[M,S,O]=iy(L);o&&!o.isRevealed(R,C)&&(M=Math.round(M*.15),S=Math.round(S*.15),O=Math.round(O*.15));const W=(E*t+D)*4;x.data[W]=M,x.data[W+1]=S,x.data[W+2]=O,x.data[W+3]=255}e.putImageData(x,0,0);const p=E=>E-m,d=E=>E-_;if(a){e.strokeStyle="rgba(139, 90, 43, 0.8)",e.lineWidth=1;for(const E of a){const D=p(E.x),R=d(E.z);D+E.radius<0||D-E.radius>t||R+E.radius<0||R-E.radius>n||e.strokeRect(D-E.radius,R-E.radius,E.radius*2,E.radius*2)}}if(c){e.fillStyle="#ffeb3b";for(const E of c){const D=p(E.position.x),R=d(E.position.z);D<0||D>t||R<0||R>n||(e.beginPath(),e.arc(D,R,3,0,Math.PI*2),e.fill())}}if(l){e.fillStyle="#ff9800";for(const E of l){const D=p(E.x),R=d(E.z);D<0||D>t||R<0||R>n||e.fillRect(D-2,R-2,4,4)}}if(h){e.fillStyle="#e53935";for(const E of h){const D=p(E.x),R=d(E.z);D<0||D>t||R<0||R>n||(e.beginPath(),e.arc(D,R,4,0,Math.PI*2),e.fill())}}e.fillStyle="rgba(100, 200, 255, 0.7)";for(const E of this._visitedMarkers){const D=p(E.x),R=d(E.z);D<0||D>t||R<0||R>n||(e.beginPath(),e.arc(D,R,3,0,Math.PI*2),e.fill())}e.strokeStyle="#4caf50",e.lineWidth=2;const T=u,b=f;e.beginPath(),e.arc(T,b,5,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(T-8,b),e.lineTo(T+8,b),e.moveTo(T,b-8),e.lineTo(T,b+8),e.stroke(),e.fillStyle="#aaa",e.font="11px monospace",e.textAlign="left",e.fillText(`x:${Math.floor(s.x)} z:${Math.floor(s.z)} y:${Math.floor(s.y)}`,8,n-6),e.textAlign="right",e.fillText("Z: Toggle zoom | M: Close",t-8,n-6)}_drawLegend(e,t,n){const r=[["Water",[40,80,160]],["Lowland",[80,150,60]],["Highland",[160,150,120]],["Snow",[220,220,230]]],s=8;let o=n-56;e.font="9px monospace",e.textAlign="left";for(const[a,[c,l,h]]of r)e.fillStyle=`rgb(${c},${l},${h})`,e.fillRect(s,o,10,10),e.fillStyle="#aaa",e.fillText(a,s+14,o+9),o+=12}}function iy(i){return i<=26?[40,80,160]:i<=32?[80,150,60]:i<=40?[130,170,70]:i<=55?[160,150,120]:[220,220,230]}const $e=16,Ul=3,Id=42,ry=[{type:g.COAL_ORE,threshold:.7,maxY:28},{type:g.COPPER_ORE,threshold:.75,maxY:24},{type:g.IRON_ORE,threshold:.8,maxY:20}];function sy(i,e,t){for(const n of ry){if(e>n.maxY)continue;if(ka(i*.1+e*.3+Id*.1+n.type*100,t*.1+e*.3)>n.threshold)return n.type}return null}function oy(i,e){let t=i*374761+e*668265+Id*982451|0;return t=(t>>16^t)*73244475|0,t=(t>>16^t)*73244475|0,(t>>16^t)&2147483647}function Fl(i,e){return oy(i,e)/2147483647}const ay={shire:.1,forest:.3,mirkwood:.2,plains:.05};function za(i,e,t){return i+e*$e+t*$e*$e}function Ha(i,e,t){return`${i},${e},${t}`}function hr(i,e,t,n,r){const s=Math.floor(e/$e),o=Math.floor(t/$e),a=Math.floor(n/$e),c=(e%$e+$e)%$e,l=(t%$e+$e)%$e,h=(n%$e+$e)%$e,u=Ha(s,o,a);i[u]||(i[u]=new Uint8Array($e*$e*$e)),i[u][za(c,l,h)]=r}function cy(i,e){const t={},n=i*$e,r=e*$e;for(let s=0;s<$e;s++)for(let o=0;o<$e;o++){const a=n+s,c=r+o,l=Xs(a,c),h=zt(a,c);xd(a,c),hr(t,a,h,c,l.surfaceBlock);for(let f=1;f<=Ul;f++)hr(t,a,h-f,c,g.DIRT);for(let f=0;f<h-Ul;f++){const m=sy(a,f,c);hr(t,a,f,c,m||g.STONE)}for(let f=w0;f>=0;f--){const m=Math.floor(f/$e),_=(f%$e+$e)%$e,x=Ha(Math.floor(a/$e),m,Math.floor(c/$e)),p=t[x],d=(a%$e+$e)%$e,T=(c%$e+$e)%$e,b=za(d,_,T);if(p&&p[b]===g.AIR)p[b]=g.WATER;else if(!p||p[b]!==g.AIR)break}if(Fl(a,c)<l.treeDensity){for(let _=1;_<=4;_++)hr(t,a,h+_,c,g.WOOD);const m=h+4;for(let _=-2;_<=2;_++)for(let x=-2;x<=2;x++)for(let p=0;p<=2;p++)_===0&&x===0&&p===0||Math.abs(_)+Math.abs(x)+p<=3&&hr(t,a+_,m+p,c+x,g.LEAVES)}else{const f=ay[l.type]||0,m=Fl(a,c);if(f>0&&m<f){const _=Math.floor((h+1)/$e),x=((h+1)%$e+$e)%$e,p=Ha(Math.floor(a/$e),_,Math.floor(c/$e)),d=t[p],T=(a%$e+$e)%$e,b=(c%$e+$e)%$e,E=za(T,x,b);(!d||d[E]===g.AIR)&&hr(t,a,h+1,c,g.TALL_GRASS)}}}return{blocks:t}}class ly{constructor(e,t={}){if(this._world=e,this._loadDistance=t.loadDistance||6,this._unloadDistance=t.unloadDistance||this._loadDistance+3,this._maxPerFrame=t.maxChunksPerFrame||4,this._cache=new Map,this._modified=new Map,this._meshDirtyChunks=new Set,this._generated=new Set,this._pending=new Set,this._lastPcx=null,this._lastPcz=null,this._worker=null,this._onProgress=t.onProgress||null,this._totalRequested=0,this._totalCompleted=0,typeof Worker<"u"&&t.useWorker!==!1)try{this._worker=new Worker(new URL(""+new URL("chunkWorker-sAbATZuB.js",import.meta.url).href,import.meta.url),{type:"module"}),this._worker.onmessage=n=>this._onWorkerMessage(n)}catch{this._worker=null}}_cacheAndLoadColumn(e,t,n){const r=`${e},${t}`;this._cache.set(r,n.blocks),this._loadColumnFromCache(e,t),this._generated.add(r)}_loadColumnFromCache(e,t){const n=`${e},${t}`,r=this._cache.get(n);if(r)for(const[s,o]of Object.entries(r)){const a=o instanceof ArrayBuffer?new Uint8Array(o):o,[c,l,h]=s.split(",").map(Number),u=`${c},${l},${h}`,f=this._modified.get(u);let m=this._world.chunks.get(u);if(m||(m=new Na,this._world.chunks.set(u,m)),f)m.blocks.set(f);else for(let _=0;_<a.length;_++)a[_]!==0&&(m.blocks[_]=a[_]);this._meshDirtyChunks.add(u)}}consumeMeshDirtyChunks(){const e=new Set(this._meshDirtyChunks);return this._meshDirtyChunks.clear(),e}_unloadColumn(e,t){const n=`${e},${t}`,r=this._cache.get(n);if(r)for(const s of Object.keys(r)){const o=this._world.chunks.get(s);o&&(this._modified.set(s,new Uint8Array(o.blocks)),this._world.chunks.delete(s))}}_generateColumnSync(e,t){const n=`${e},${t}`;if(this._generated.has(n))return;const r=cy(e,t);this._cacheAndLoadColumn(e,t,r),this._totalCompleted++,this._onProgress&&this._onProgress(this._totalCompleted,this._totalRequested)}_requestColumnAsync(e,t){const n=`${e},${t}`;this._generated.has(n)||this._pending.has(n)||(this._pending.add(n),this._totalRequested++,this._worker.postMessage({type:"generate",cx:e,cz:t,id:n}))}_onWorkerMessage(e){const{type:t,cx:n,cz:r,blocks:s,id:o}=e.data;t==="generated"&&(this._pending.delete(o),this._cacheAndLoadColumn(n,r,{blocks:s}),this._totalCompleted++,this._onProgress&&this._onProgress(this._totalCompleted,this._totalRequested))}getProgress(){return this._totalRequested===0?1:this._totalCompleted/this._totalRequested}isLoading(){return this._pending.size>0}generateInitialChunks(e,t){const n=Math.floor(e/qe),r=Math.floor(t/qe),s=[];for(let o=-this._loadDistance;o<=this._loadDistance;o++)for(let a=-this._loadDistance;a<=this._loadDistance;a++)s.push({cx:n+o,cz:r+a});if(this._totalRequested=s.length,this._totalCompleted=0,this._worker)for(const{cx:o,cz:a}of s)this._requestColumnAsync(o,a);else for(const{cx:o,cz:a}of s)this._generateColumnSync(o,a);this._lastPcx=n,this._lastPcz=r}update(e,t){const n=Math.floor(e/qe),r=Math.floor(t/qe);if(n===this._lastPcx&&r===this._lastPcz)return;this._lastPcx=n,this._lastPcz=r;let s=0;for(let o=0;o<=this._loadDistance&&s<this._maxPerFrame;o++)for(let a=-o;a<=o&&s<this._maxPerFrame;a++)for(let c=-o;c<=o&&s<this._maxPerFrame;c++){if(Math.abs(a)!==o&&Math.abs(c)!==o)continue;const l=n+a,h=r+c,u=`${l},${h}`;if(this._generated.has(u)||this._pending.has(u)){this._cache.has(u)&&!this._isColumnLoaded(l,h)&&this._loadColumnFromCache(l,h);continue}this._worker?this._requestColumnAsync(l,h):this._generateColumnSync(l,h),s++}for(const o of this._generated){const[a,c]=o.split(",").map(Number);(Math.abs(a-n)>this._unloadDistance||Math.abs(c-r)>this._unloadDistance)&&this._unloadColumn(a,c)}}_isColumnLoaded(e,t){return this._world.chunks.has(`${e},1,${t}`)}}function dy(i,e){const t=Math.floor(e.x),n=Math.floor(e.y),r=Math.floor(e.z);return i.getBlock(t,n,r)===g.WATER}function hy(i){return i?vr.SURVIVAL.WATER_SLOWDOWN:1}const Bl=4;function uy(i){return i<=0?1:i>=Bl?0:Math.max(0,1-i/Bl)}const fy={ranger_hal:{about:"I patrol the borders of the Shire. Wolves have been bolder lately, and I've seen strange lights in the old ruins to the east. Something is stirring.",need:"There's a ruined watch-post at the edge of the wilds. If someone could restore it, we'd have a proper outpost again. You'd need wood and stone.",extra:{text:"Any survival tips?",response:"Build a shelter before nightfall — four walls and a roof. Punch grass for fiber, break dirt for materials. Stay close to camp at night."}},old_tom:{about:"Bree used to be a bustling crossroads. Now half the buildings stand empty. The East Road has fallen into disrepair and fewer travelers come each season.",need:"The old ranger hall just east of here needs restoring. It would bring trade back to this area. You'll need wood, stone, and some iron ore.",extra:{text:"What happened here?",response:"Ancient things are waking up. The wards that kept the dark things at bay — they're failing one by one. That's why the road wardens need help."}},elara_lorekeeper:{about:"Rivendell endures, though diminished. I study the old records — maps of a ward network that once protected these lands. The Elven-craft that built them is nearly forgotten.",need:"I need someone to search the archives here for records of the ward network. The knowledge is scattered, but vital if we're to understand what's awakening.",extra:{text:"Tell me about the relics",response:"The relics are fragments of ancient technology — Elven, Dwarven, Numenorean. They can heal, ward, reveal. But near corruption, they become unstable. Use them wisely."}},thorin_smith:{about:"This was a great dwarven workshop once. The forge has gone cold, the bellows rotted. But the stone is strong and the veins of ore still run deep in these mountains.",need:"Help me rebuild this workshop. I need stone, iron ore, and copper ore. With a working forge, I can craft the tools we need to push into the deeper delves.",extra:{text:"What lurks in the mountains?",response:"Goblins mostly, and worse things deeper down. There's a corrupted guardian blocking the lower passages. It was once a protector, now twisted by dark power."}},galawen_warden:{about:"Mirkwood grows darker. The ancient beacon that held corruption at bay has gone out. Without it, the spiders multiply and the forest sickens.",need:"The forest beacon must be restored. I need someone brave enough to gather wood, fiber, and relic shards to reignite it. The spiders guard the approach.",extra:{text:"Is the corruption spreading?",response:"Yes. From the south — from Dol Guldur. An old evil stirs there. The beacon, once lit, will slow its advance through the forest."}},beorn_jr:{about:"I am Grimbeorn, son of Beorn. I guard the passage between the mountains and the forest. The wild creatures grow restless — something dark disturbs them.",need:"I ask nothing for myself. But the land needs wardens. If you can clear the threats that trouble the vale, the Beornings will remember it.",extra:{text:"What is the Anduin Vale like?",response:"Rich land, good water, tall grass. Bears, eagles, and honest folk. But the shadow from Mirkwood creeps closer each season. We hold the line as we can."}},sage_miriel:{about:"I have watched ages pass. What stirs now in Dol Guldur is not the old Dark Lord — but an echo, a shadow left in the machinery of the ancient ward network.",need:"The ward bastion is the key. Restore it, and the network can be turned against the shadow. But it requires great resources and courage to reach.",extra:{text:"Can the shadow be defeated?",response:"Not destroyed — contained. The ward network was built for this. Restore the bastions, stabilize the relics, and the shadow sleeps again. That is our best hope."}}};function py(i,e){const t=fy[i];if(!t)return[{text:"Tell me about this place",response:`${e}: I don't have much to say, traveler. Safe journeys.`},{text:"Farewell",response:null}];const n=[];return n.push({text:"Tell me about this place",response:`${e}: ${t.about}`}),n.push({text:"What do you need?",response:`${e}: ${t.need}`}),t.extra&&n.push({text:t.extra.text,response:`${e}: ${t.extra.response}`}),n.push({text:"Farewell",response:null}),n}const Dn={mainQuests:8,sitesRestored:5,discoverables:12,npcsMet:7,landmarks:10,enemyTypes:15,sideQuests:10,nightsSurvived:10,relicUsed:1,shelterBuilt:1,stationsCrafted:6};Object.keys(Dn).length;class my{constructor(){this._completedQuests=new Set,this._restoredSites=new Set,this._discovered=new Set,this._npcs=new Set,this._landmarks=new Set,this._enemyTypes=new Set,this._sideQuests=new Set,this._stations=new Set,this.nightsSurvived=0,this._relicUsed=!1,this._shelterBuilt=!1}completeQuest(e){this._completedQuests.add(e)}restoreSite(e){this._restoredSites.add(e)}discover(e){this._discovered.add(e)}talkToNPC(e){this._npcs.add(e)}visitLandmark(e){this._landmarks.add(e)}killEnemy(e){this._enemyTypes.add(e)}completeSideQuest(e){this._sideQuests.add(e)}surviveNight(){this.nightsSurvived++}useRelic(){this._relicUsed=!0}buildShelter(){this._shelterBuilt=!0}craftAtStation(e){this._stations.add(e)}get questsCompleted(){return this._completedQuests.size}get sitesRestored(){return this._restoredSites.size}get discoverablesFound(){return this._discovered.size}get npcsMet(){return this._npcs.size}get landmarksVisited(){return this._landmarks.size}get enemyTypesKilled(){return this._enemyTypes.size}get sideQuestsCompleted(){return this._sideQuests.size}getBreakdown(){return[{label:"Main Quests",current:this._completedQuests.size,total:Dn.mainQuests},{label:"Sites Restored",current:this._restoredSites.size,total:Dn.sitesRestored},{label:"Discoverables",current:this._discovered.size,total:Dn.discoverables},{label:"NPCs Met",current:this._npcs.size,total:Dn.npcsMet},{label:"Landmarks Visited",current:this._landmarks.size,total:Dn.landmarks},{label:"Enemy Types Killed",current:this._enemyTypes.size,total:Dn.enemyTypes},{label:"Side Quests",current:this._sideQuests.size,total:Dn.sideQuests},{label:"Nights Survived",current:Math.min(this.nightsSurvived,Dn.nightsSurvived),total:Dn.nightsSurvived},{label:"Relic Used",current:this._relicUsed?1:0,total:1},{label:"Shelter Built",current:this._shelterBuilt?1:0,total:1},{label:"Crafting Stations",current:this._stations.size,total:Dn.stationsCrafted},{label:"Skill Points Spent",current:0,total:0},{label:"Faction Rep",current:0,total:0}]}getPercentage(){const t=this.getBreakdown().filter(r=>r.total>0);let n=0;for(const r of t)n+=Math.min(1,r.current/r.total);return Math.round(n/t.length*100)}}const Hi=[{id:"fresh",name:"Fresh Start",description:"Brand new game, no progress",percent:0,applyState:i=>{}},{id:"ch1_done",name:"Chapter 1 Complete",description:"Survived first night, restored watch-post, ward activated",percent:12,applyState:i=>{const{questSystem:e,inventory:t,survivalStats:n,experienceSystem:r,player:s,progress:o,factionSystem:a,getHeightAt:c}=i;e.activate("ch1_embers"),e.advanceObjective("ch1_embers","ch1_survive",1),e.advanceObjective("ch1_embers","ch1_reach_outpost",1),e.advanceObjective("ch1_embers","ch1_activate_ward",1),t.add("wood",30),t.add("stone",25),t.add("fiber",20),t.add("stick",16),t.add("coal",5),t.add("iron_ore",3),t.add("cooked_meat",5),r.addExperience(150),o.completeQuest("ch1_embers"),o.restoreSite("starter_watchpost"),o.surviveNight(),s.position.x=70,s.position.z=15,s.position.y=c(70,15)+2}},{id:"ch2_done",name:"Chapter 2 Complete",description:"Restored ranger hall, met lore NPC, investigated corruption",percent:25,applyState:i=>{Hi[1].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,factionSystem:o,getHeightAt:a}=i;e.activate("ch2_roads"),e.advanceObjective("ch2_roads","ch2_restore",1),e.advanceObjective("ch2_roads","ch2_meet_npc",1),e.advanceObjective("ch2_roads","ch2_corruption",3),t.add("iron_ore",10),t.add("copper_ore",5),t.add("leather",5),t.add("rope",3),n.addExperience(200),s.completeQuest("ch2_roads"),s.restoreSite("roadside_hall"),s.talkToNPC("old_tom");for(let c=0;c<3;c++)s.surviveNight();r.position.x=180,r.position.z=30,r.position.y=a(180,30)+2}},{id:"ch4_done",name:"Chapter 4 Complete",description:"Reached Rivendell, explored mountains, stabilized dwarven forge",percent:50,applyState:i=>{Hi[2].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o}=i;e.activate("ch3_records"),e.advanceObjective("ch3_records","ch3_reach_rivendell",1),e.advanceObjective("ch3_records","ch3_learn_wards",1),e.advanceObjective("ch3_records","ch3_obtain_relic",1),e.activate("ch4_mountains"),e.advanceObjective("ch4_mountains","ch4_enter_delve",1),e.advanceObjective("ch4_mountains","ch4_stabilize",1),e.advanceObjective("ch4_mountains","ch4_defeat_boss",1),t.add("relic_shard",8),t.add("lore_fragment",5),t.add("iron_ore",20),n.addExperience(400),s.completeQuest("ch3_records"),s.completeQuest("ch4_mountains"),s.restoreSite("mountain_workshop"),s.talkToNPC("elara_lorekeeper"),s.talkToNPC("thorin_smith");for(let a=0;a<3;a++)s.surviveNight();r.position.x=380,r.position.z=40,r.position.y=o(380,40)+2}},{id:"ch6_done",name:"Chapter 6 Complete",description:"Cleared Mirkwood, restored beacon, reached Erebor forge",percent:75,applyState:i=>{Hi[3].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o}=i;e.activate("ch5_darkwood"),e.advanceObjective("ch5_darkwood","ch5_enter_mirkwood",1),e.advanceObjective("ch5_darkwood","ch5_clear_spiders",3),e.advanceObjective("ch5_darkwood","ch5_restore_beacon",1),e.activate("ch6_forge"),e.advanceObjective("ch6_forge","ch6_reach_forge",1),e.advanceObjective("ch6_forge","ch6_unlock_crafting",1),e.advanceObjective("ch6_forge","ch6_discover_source",1),t.add("relic_shard",15),t.add("lore_fragment",10),t.add("iron_ore",30),n.addExperience(500),s.completeQuest("ch5_darkwood"),s.completeQuest("ch6_forge"),s.restoreSite("forest_beacon"),s.talkToNPC("galawen_warden"),s.talkToNPC("ranger_hal");for(let a=0;a<2;a++)s.surviveNight();r.position.x=420,r.position.z=80,r.position.y=o(420,80)+2}},{id:"ch7_done",name:"Chapter 7 Complete (Pre-Epilogue)",description:"Defeated the dark champion at Dol Guldur, ready for epilogue",percent:90,applyState:i=>{Hi[4].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o}=i;e.activate("ch7_shadow"),e.advanceObjective("ch7_shadow","ch7_assault",1),e.advanceObjective("ch7_shadow","ch7_disable_link",1),e.advanceObjective("ch7_shadow","ch7_defeat_champion",1),n.addExperience(500),s.completeQuest("ch7_shadow"),s.restoreSite("ward_bastion"),s.talkToNPC("sage_miriel"),s.useRelic(),r.position.x=30,r.position.z=30,r.position.y=o(30,30)+2}},{id:"full_100",name:"100% Complete",description:"Everything done — all quests, sites, discoverables, enemies, etc.",percent:100,applyState:i=>{Hi[5].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o}=i;e.activate("ch8_after"),e.advanceObjective("ch8_after","ch8_celebrate",1),e.advanceObjective("ch8_after","ch8_explore",1),s.completeQuest("ch8_after");const a=["cache_shire_01","cache_bree_01","cache_mountain_01","cache_erebor_01","lore_shire_01","lore_rivendell_01","relic_trollshaws_01","relic_mirkwood_01","roadstone_east_01","roadstone_east_02","inscription_dwarven_01","recipe_forge_01"];for(const h of a)s.discover(h);const c=["shire","bree","trollshaws","rivendell","misty_mountains","anduin_vale","mirkwood","long_lake","erebor","dol_guldur"];for(const h of c)s.visitLandmark(h);const l=["wolf","goblin","spider","troll","wight","guardian","construct","orc","giant_spider","shadow","barrow_wight","goblin_archer","corrupted_bear","dark_construct","wraith"];for(const h of l)s.killEnemy(h);for(const h of["ranger_hal","old_tom","elara_lorekeeper","thorin_smith","galawen_warden","beorn_jr","sage_miriel"])s.talkToNPC(h);for(let h=0;h<10;h++)s.completeSideQuest(`sq${h}`);for(;s.nightsSurvived<10;)s.surviveNight();s.buildShelter();for(const h of["hand","workbench","forge","campfire","kitchen","loom"])s.craftAtStation(h);t.add("iron_ore",50),t.add("relic_shard",20),t.add("lore_fragment",15),t.add("lembas",20),n.addExperience(1e3),r.position.x=0,r.position.z=0,r.position.y=o(0,0)+2}}],nc=document.getElementById("race-select"),qr=document.getElementById("class-select"),_y=document.getElementById("race-info"),gy=document.getElementById("class-info");function Od(){const i=Sd[nc.value];qr.innerHTML="";for(const t of i.classIds){const n=tc[t],r=document.createElement("option");r.value=t,r.textContent=n.name,qr.appendChild(r)}const e=i.statModifiers;_y.textContent=`HP:${e.health} STA:${e.stamina} FOC:${e.focus} COR:${e.corruptionResistance}`,Dd()}function Dd(){const i=tc[qr.value];i&&(gy.textContent=`${i.passive} | ${i.activeAbility}`)}nc.addEventListener("change",Od);qr.addEventListener("change",Dd);Od();let qs=null;document.getElementById("start-btn").addEventListener("click",()=>{const i=kg({raceId:nc.value,classId:qr.value,difficulty:document.getElementById("difficulty-select").value,worldName:document.getElementById("world-name").value,characterName:document.getElementById("character-name").value});document.getElementById("new-game").style.display="none",vy(i,qs),qs=null});document.getElementById("jump-btn").addEventListener("click",()=>{const i=document.getElementById("jump-menu");i.style.display=i.style.display==="none"?"block":"none";const e=document.getElementById("jump-list");e.innerHTML=Hi.map(t=>`
    <div style="padding:5px 8px;margin:2px 0;border-radius:4px;cursor:pointer;font-size:12px;color:#aed581;border:1px solid #333;background:${qs===t.id?"#3a5a2f":"transparent"}"
         data-jump="${t.id}">
      <b>${t.name}</b> (${t.percent}%)<br>
      <span style="color:#888">${t.description}</span>
    </div>
  `).join(""),e.querySelectorAll("[data-jump]").forEach(t=>{t.addEventListener("click",()=>{qs=t.getAttribute("data-jump"),e.querySelectorAll("[data-jump]").forEach(n=>n.style.background="transparent"),t.style.background="#3a5a2f"})})});function vy(i,e){const t=vr,n=new Cx,r=new Ix,s=new Ox(Dl),o=new Px,a=new vd,c=document.getElementById("loading-screen"),l=document.getElementById("loading-fill"),h=document.getElementById("loading-pct"),u=document.getElementById("loading-flavor"),f=["The old roads remember those who walked them...","Ancient ward-stones hum with forgotten power...","Mirkwood's shadows deepen with each passing age...","The Lonely Mountain watches over the eastern lands...","In the Shire, the hedgerows grow thick and green...","Rivendell endures, though diminished and quiet...","The Great River Anduin flows ever southward...","Old ruins hold secrets that time cannot erase..."];c.style.display="flex",u.textContent=f[Math.floor(Math.random()*f.length)];const m=(U,le)=>{const de=Math.round(U/le*100);l.style.width=`${de}%`,h.textContent=`${de}% — ${U}/${le} chunks`,U%Math.max(1,Math.floor(le/4))===0&&(u.textContent=f[Math.floor(Math.random()*f.length)])},_=new ly(a,{loadDistance:6,maxChunksPerFrame:t.CHUNKS.MAX_PER_FRAME,useWorker:!0,onProgress:m});_.generateInitialChunks(0,0);const x=!_.isLoading(),p={starter_watchpost:"small",roadside_hall:"medium",mountain_workshop:"medium",forest_beacon:"small",ward_bastion:"large"};for(const U of Br){const le=zt(U.position.x,U.position.z);zv(a,{x:U.position.x,y:le+1,z:U.position.z},p[U.id]||"small")}const{player:d,inventory:T,survivalStats:b,race:E,cls:D}=Ug(i),R=`${i.raceId}_${i.classId}`,C=Fx(i.difficulty),L=zt(0,0);d.position.y=L+2;const M=new lg,S=new Bg,O=new sv,W=new ov({width:t.FOG.WIDTH,height:t.FOG.HEIGHT,cellSize:t.FOG.CELL_SIZE}),H=new lv,j=new hv,re=new Iv(Rl),Z=Wx(i.raceId,i.classId);for(const U of Z)re.grantStartingUnlock(U);const se=new Ov(re),q=new uv(8),ge=new mv,Ae=new xv(Sv),Ce=new yv(Ae),Ze=new Mv,Xe=ax(),Q=new Av,ce=sx(),Ie=Gx(i.raceId);ce.applyRaceModifiers(i.raceId,Ie);const pe=new Dv,Ge=new Lv(W,Ur),mt=new mx(E.statModifiers.perception||50),Ve=Cg(i.raceId);Ve>0&&mt.addModifier("race_stealth",Ve);const Rt=new Xv;(R==="man_scholar"||R==="elf_warden")&&Rt.equipRelic(new Wv({id:"ward_light",name:"Ward Light Stone",ability:ws.WARD_LIGHT,focusCost:10}));const It=new Kv,st=new $v,I=new jv,rn=new Zv(Qv),lt=new Ex,Qe=new Kx,Oe=new jx;let Je=null;const De=document.getElementById("chest-panel"),A=document.getElementById("chest-items");function v(U,le,de){Je={x:U,y:le,z:de},ee()}function F(){Je=null,De.style.display="none"}function ee(){if(!Je){De.style.display="none";return}De.style.display="block";const U=Oe.getItems(Je.x,Je.y,Je.z);if(U.length===0){A.innerHTML='<div style="color:#888">Empty</div>';return}A.innerHTML=U.map((le,de)=>`<div data-chest-idx="${de}" style="padding:4px 8px;cursor:pointer;border-radius:4px;color:#aed581;border:1px solid #333;margin:2px 0">${Go(le.type)} ${le.type.replace(/_/g," ")} x${le.count}</div>`).join(""),A.onclick=le=>{const de=le.target.closest("[data-chest-idx]");if(!de||!Je)return;const Pe=parseInt(de.getAttribute("data-chest-idx")),Le=Oe.getItems(Je.x,Je.y,Je.z);if(Pe>=0&&Pe<Le.length){const Ke=Oe.takeItem(Je.x,Je.y,Je.z,Le[Pe].type);Ke&&(T.add(Ke.type,Ke.count),J=`Took ${Ke.count} ${Ke.type.replace(/_/g," ")}`,fe=1.5,ee())}}}const ie=new Nx,$=new kx,ye=new Ux,Ee={x:0,y:zt(0,0)+2,z:0};T.add("map_fragment",1);const Re={man:"man",elf:"elf",dwarf:"dwarf",hobbit:"hobbit"}[i.raceId]||"man",at=new Map(zo.map(U=>[U.id,U]));for(const U of Xo){const le=zt(U.x,U.z);if(U.hobbitHole?Hv(a,{x:U.x,y:le+1,z:U.z},{floorBlock:U.floorBlock,radius:U.radius,bed:U.bed,chest:U.chest}):Ad(a,{x:U.x,y:le+1,z:U.z},{wallBlock:U.wallBlock,roofBlock:U.roofBlock,floorBlock:U.floorBlock,radius:U.radius,height:U.height,bed:U.bed,chest:U.chest}),U.chest&&U.chestItems){const de=U.x-U.radius+1,Pe=le+1,Le=U.z+U.radius-1;for(const Ke of U.chestItems)Oe.addItem(de,Pe,Le,Ke.type,Ke.count)}if(U.npcId){const de=at.get(U.npcId);de&&(de.position.x=U.x+U.radius+1,de.position.y=le+2,de.position.z=U.z,de.spawnPosition={...de.position},pe.addNPC(de),at.delete(U.npcId))}}for(const[,U]of at){const le=zt(Math.floor(U.position.x),Math.floor(U.position.z));U.position.y=le+2,U.spawnPosition={...U.position},pe.addNPC(U)}for(const U of Zx)if(U.type==="line"){const le=U.x2-U.x1,de=U.z2-U.z1,Pe=Math.max(Math.abs(le),Math.abs(de));for(let Le=0;Le<=Pe;Le++){const Ke=Pe===0?0:Le/Pe,Mt=Math.round(U.x1+le*Ke),wt=Math.round(U.z1+de*Ke),Ot=zt(Mt,wt);U.surface?a.setBlock(Mt,Ot,wt,U.block):a.setBlock(Mt,Ot+U.dy,wt,U.block)}}else if(U.type==="well"){const le=zt(U.x,U.z);for(let de=-1;de<=1;de++)for(let Pe=-1;Pe<=1;Pe++)de===0&&Pe===0?a.setBlock(U.x,le+1,U.z,g.WATER):a.setBlock(U.x+de,le+1,U.z+Pe,g.COBBLESTONE)}else if(U.type==="blocks"){const le=zt(U.x,U.z);for(const de of U.blocks){const Pe=U.x+de.dx,Le=U.z+de.dz,Ke=de.surface?zt(Pe,Le):le;a.setBlock(Pe,Ke+de.dy,Le,de.block)}}for(const U of Qx){const le=zt(U.x,U.z),de=U.type==="large"?6:4,Pe=U.type==="large"?3:2;for(let Ke=1;Ke<=de;Ke++)a.setBlock(U.x,le+Ke,U.z,g.WOOD);const Le=le+de;for(let Ke=-Pe;Ke<=Pe;Ke++)for(let Mt=-Pe;Mt<=Pe;Mt++)for(let wt=0;wt<=2;wt++){if(Ke===0&&Mt===0&&wt===0)continue;Math.sqrt(Ke*Ke+Mt*Mt)+wt*.7<=Pe+.6&&a.setBlock(U.x+Ke,Le+wt,U.z+Mt,g.LEAVES)}}for(const U of qo){const le=zt(U.x,U.z);a.setBlock(U.x,le+U.dy,U.z,U.block)}let J="",fe=0,Fe=-1;const Ye=gv(R);for(const U of Ye)T.add(U.type,U.count);const _e=[],et=[];let je=[];const Tt=2,P=120;function Se(U,le,de){et.push({position:{x:U.x+(Math.random()-.5)*.5,y:U.y+.5,z:U.z+(Math.random()-.5)*.5},type:le,count:de,lifetime:P,bobPhase:Math.random()*Math.PI*2})}let Y=42;const te=()=>(Y=Y*1103515245+12345&2147483647,Y/2147483647),Me=new Hg(te);let ve=0;const Be=new f0({antialias:!0});Be.setSize(window.innerWidth,window.innerHeight),Be.setClearColor(t.COLORS.SKY_DAY),document.body.appendChild(Be.domElement);const ct=new yu,Ht=bl(1);ct.fog=new Qa(t.COLORS.SKY_DAY,Ht.near,Ht.far);const tt=new Rn(t.CAMERA.FOV,window.innerWidth/window.innerHeight,t.CAMERA.NEAR,t.CAMERA.FAR),sn=new wu(t.COLORS.AMBIENT_LIGHT,t.LIGHTING.AMBIENT.day);ct.add(sn);const un=new Ru(t.COLORS.DIR_LIGHT,t.LIGHTING.DIRECTIONAL.day);un.position.set(50,100,30),ct.add(un);const Xt=new Q0(ct,a);x&&(Xt.update(0,0,t.CHUNKS.RENDER_DISTANCE),c.style.display="none");const Qr=new Qg(ct),Wn=new nv(ct),ze=new J0(Be.domElement),Jr=document.getElementById("hud"),es=document.getElementById("crosshair");es.style.display="block",document.getElementById("health-bar-wrap").style.display="block",document.getElementById("hotbar-bar").style.display="flex";function ci(U){const le=Math.cos(U.pitch);return{x:-Math.sin(-U.yaw)*le,y:Math.sin(U.pitch),z:-Math.cos(-U.yaw)*le}}function Ar(U){const le={[yt.DAWN]:t.COLORS.SKY_DAWN,[yt.DAY]:t.COLORS.SKY_DAY,[yt.DUSK]:t.COLORS.SKY_DUSK,[yt.NIGHT]:t.COLORS.SKY_NIGHT},de={[yt.DAWN]:.5,[yt.DAY]:.6,[yt.DUSK]:.35,[yt.NIGHT]:.1},Pe={[yt.DAWN]:.6,[yt.DAY]:.8,[yt.DUSK]:.4,[yt.NIGHT]:.05},Le=le[U]||t.COLORS.SKY_DAY;Be.setClearColor(Le),ct.fog.color.set(Le),sn.intensity=de[U]||.6,un.intensity=Pe[U]||.8}const li=document.getElementById("unified-menu"),Rr=li.querySelectorAll(".menu-tab");function Ti(){s.isOpen?(li.classList.add("open"),Rr.forEach(U=>{U.classList.toggle("active",U.dataset.tab===s.activeTab)}),Dl.forEach(U=>{const le=document.getElementById(`tab-content-${U}`);le&&le.classList.toggle("active",U===s.activeTab)})):li.classList.remove("open")}const ts=document.getElementById("help-content");ts&&(ts.innerHTML=Lx()),Rr.forEach(U=>{U.addEventListener("click",()=>{s.switchTab(U.dataset.tab),Ti()})});let wr=!1;ze.onPointerUnlock=()=>{if(wr){wr=!1;return}s.isOpen||(s.open(),Ti())};const ns=document.getElementById("minimap-container"),Zs=document.getElementById("minimap-canvas"),Qs=document.getElementById("map-canvas-2d"),Js=document.getElementById("map-explored"),y=new ey((U,le)=>zt(U,le),(U,le)=>Xs(U,le)),N=new kl(y,Qs),z=new kl(y,Zs);z.setZoom(ur.OVERVIEW);function G(U){const le=Xe.getActiveQuests().map(Pe=>Pe.id),de=Pl(Dt,le);N.draw({playerPos:U,fogOfWar:W,buildings:Xo,npcs:pe.getAllNPCs(),stations:qo,landmarks:Ur,questMarkers:de}),Js.textContent=Math.round(Ge.getExploredPercentage())}const k=document.getElementById("skill-tree-nav"),oe=document.getElementById("skill-tree-nodes");function me(){const U=se.getCurrentTree();k.textContent=`${U.name} (${se.getSkillPoints()} pts) — ← ${se.currentTreeIndex+1}/${Rl.length} →`;const le=se.getNodes();oe.innerHTML=le.map((de,Pe)=>{const Le=Pe===se.selectedNodeIndex?" selected":"",Ke=de.unlocked?" unlocked":de.available?" available":" locked",Mt=de.requires.length?` (needs: ${de.requires.join(", ")})`:"";return`<div class="node${Le}${Ke}">${de.unlocked?"✓":de.available?"○":"·"} ${de.name} [${de.cost}] — ${de.description}${Mt}</div>`}).join("")}function Te(){for(;H.skillPoints>0;)H.spendSkillPoint(),re.addPoints(1)}const we=document.getElementById("crafting-list"),We=document.getElementById("quest-list");function He(){const U=Ce.getAllRecipes();Ce.selectedIndex>=U.length&&(Ce.selectedIndex=Math.max(0,U.length-1));const le=Ce.getAvailableRecipes(T),de=new Set(le.map(Le=>Le.name));we.innerHTML=U.map((Le,Ke)=>{const Mt=Ke===Ce.selectedIndex?" selected":"",wt=de.has(Le.name)?" available":" unavailable",Ot=Le.inputs.map(Zt=>`${Zt.count} ${Zt.type}`).join(", "),Ai=Le.outputs.map(Zt=>`${Zt.count} ${Zt.type}`).join(", ");return`<div class="recipe${Mt}${wt}" data-idx="${Ke}">${Le.name}: ${Ot} → ${Ai}</div>`}).join("");const Pe=we.querySelector(".recipe.selected");Pe&&Pe.scrollIntoView({block:"nearest"})}function ke(){const U=Xe.getActiveQuests();if(U.length===0){const le=Xe.quests.filter(de=>Xe.getStatus(de.id)==="available");if(le.length===0){We.innerHTML='<div style="color:#888">No active quests. Explore the world!</div>';return}We.innerHTML=le.map(de=>`
        <div class="quest"><span class="quest-name">${de.name}</span> (available)<br>
        <span style="color:#888">${de.description}</span></div>
      `).join("");return}We.innerHTML=U.map(le=>{const de=le.objectives.map(Pe=>`<div class="objective${Pe.isComplete()?" complete":""}">• ${Pe.description} (${Pe.progress}/${Pe.target})</div>`).join("");return`<div class="quest"><span class="quest-name">${le.name}</span><br>${de}</div>`}).join("")}Xe.activate("ch1_embers");const dt=t.QUESTS.AUTO_ACTIVATE_SIDE_COUNT;let _t=0;for(const U of wd){if(_t>=dt)break;Xe.activate(U.id)&&_t++}const Dt=new yx,ht=new my;if(e){const U=Hi.find(le=>le.id===e);U&&U.applyState({questSystem:Xe,inventory:T,survivalStats:b,experienceSystem:H,player:d,progress:ht,factionSystem:ce,getHeightAt:zt})}function ft(){if(!s.isOpen||s.activeTab!=="quests")return;const U=ht.getPercentage();document.getElementById("progress-fill").style.width=`${U}%`,document.getElementById("progress-pct").textContent=`${U}% Complete`;const le=ht.getBreakdown().filter(de=>de.total>0);document.getElementById("progress-list").innerHTML=le.map(de=>{const Pe=de.current>=de.total;return`<div style="color:${Pe?"#6a6":"#aaa"}">${Pe?"✓":"○"} ${de.label}: ${de.current}/${de.total}</div>`}).join("")}let Ue=performance.now(),Ut=!1;function gt(U){requestAnimationFrame(gt);const le=Math.min((U-Ue)/1e3,.1);Ue=U;const de=le*t.SURVIVAL.GAME_TIME_SCALE,Pe=r.getEffectiveDt(de);if(M.tick(Pe),ie.isDead(b)&&!$.enabled){document.getElementById("death-screen").style.display="flex",ze.consumeKeyPress("Enter")&&(ie.respawn(b,d,Ee),document.getElementById("death-screen").style.display="none"),Ar(M.getPhase()),Be.render(ct,tt);return}ze.consumeKeyPress("F4")&&($.toggle(),J=$.enabled?"Creative Mode ON — fly with Space/Shift, invincible":"Creative Mode OFF",fe=t.DIALOGUE.SHORT_DURATION);const Le=Xs(d.position.x,d.position.z);b.setBiomeTemperature(Le.type),O.tick(Pe),$.noHunger()||b.tick(Bx(Pe,C)),W.reveal(d.position.x,d.position.z,t.FOG.REVEAL_RADIUS);for(const w of Ur){const K=d.position.x-w.position.x,be=d.position.z-w.position.z;Math.sqrt(K*K+be*be)<w.radius*.5&&N.addVisitedMarker(w.position.x,w.position.z,w.name)}ze.consumeKeyPress("Escape")&&(Je?F():(s.toggle(),Ti(),s.isOpen||Be.domElement.requestPointerLock())),s.isOpen&&ze.consumeKeyPress("Tab")&&(s.nextTab(),Ti()),!s.isOpen&&ze.consumeKeyPress("KeyM")&&o.toggle();const Ke=s.isOpen||!!Je;ze.menuOpen=Ke,r.setMenuOpen(Ke),Ke&&document.pointerLockElement&&(wr=!0,document.exitPointerLock());for(const w of Ur)Rs(d.position,w.position,w.radius)&&ht.visitLandmark(w.id);if(ze.locked){const w=ze.consumeMouse(),K=n.getMouseSensitivity(t.CAMERA.MOUSE_SENSITIVITY);d.yaw+=w.dx*K,d.pitch-=w.dy*K,d.pitch=Math.max(-t.CAMERA.MAX_PITCH,Math.min(t.CAMERA.MAX_PITCH,d.pitch))}ze.consumeKeyPress("KeyV")&&d.toggleCamera(),d.setCrouch(!!ze.keys.KeyC),S.setGuard(!!ze.keys.KeyG);for(let w=0;w<8;w++)ze.consumeKeyPress(`Digit${w+1}`)&&q.selectSlot(w);const Mt=ze.consumeScroll();Mt>0?q.scrollNext():Mt<0&&q.scrollPrev();const Ot=T.getItems().filter(w=>Pa[w.type]!==void 0);for(let w=0;w<Math.min(Ot.length,8);w++)q.setSlot(w,{type:Ot[w].type,count:Ot[w].count});for(let w=Ot.length;w<8;w++)q.clearSlot(w);if(Te(),ge.tick(Pe),Ze.tick(Pe),s.isOpen){const w=s.activeTab,K=hx(a,d.position);if(Ce.setStation(K),w==="inventory"){const be=document.getElementById("inventory-grid");let Ne="";const rt=T.size||36;for(let Nt=0;Nt<rt;Nt++){const kt=T.getSlot?T.getSlot(Nt):null,Qt=kt?Go(kt.type):"",qi=kt?kt.type.replace(/_/g," "):"",Cr=kt?kt.count:"";Ne+=`<div data-inv-slot="${Nt}" style="width:56px;height:56px;background:rgba(30,30,40,0.8);border:2px solid #444;border-radius:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;${Fe===Nt?"border-color:#c9a84c;background:rgba(60,60,20,0.5)":""}">
            <div style="font-size:20px;line-height:1">${Qt}</div>
            <div style="font-size:8px;color:#aaa;overflow:hidden;max-width:52px;text-align:center;white-space:nowrap">${qi}</div>
            <div style="font-size:9px;color:#888">${Cr}</div>
          </div>`}be.innerHTML=Ne,be.onclick=Nt=>{const kt=Nt.target.closest("[data-inv-slot]");if(!kt)return;const Qt=parseInt(kt.getAttribute("data-inv-slot"));Fe===-1?Fe=Qt:(T.moveSlot&&T.moveSlot(Fe,Qt),Fe=-1)};const Yt=ce.getAllFactions().map(Nt=>{const kt=ce.getReputation(Nt.id),Qt=ce.getTier(Nt.id);return`<div><span style="color:#c9a84c">${Nt.name}</span> <span style="color:#888">${Qt} (${kt})</span></div>`}).join("");document.getElementById("inventory-extra").innerHTML='<div style="border-top:1px solid #444;padding-top:6px;color:#aaa;font-size:11px;margin-top:4px">Factions</div>'+Yt}if(w==="crafting"&&(He(),ze.consumeKeyPress("ArrowDown")&&(Ce.selectNext(),He()),ze.consumeKeyPress("ArrowUp")&&(Ce.selectPrev(),He()),ze.consumeKeyPress("Enter")&&Ce.craftSelected(T)&&He()),w==="skills"&&(me(),ze.consumeKeyPress("ArrowRight")&&(se.nextTree(),me()),ze.consumeKeyPress("ArrowLeft")&&(se.prevTree(),me()),ze.consumeKeyPress("ArrowDown")&&(se.selectedNodeIndex++,me()),ze.consumeKeyPress("ArrowUp")&&(se.selectedNodeIndex=Math.max(0,se.selectedNodeIndex-1),me()),ze.consumeKeyPress("Enter")&&(se.unlockSelected(),me())),w==="quests"&&(ke(),ft()),w==="map"&&(G(d.position),ze.consumeKeyPress("KeyZ")&&N.toggleZoom()),w==="settings"){const be=document.getElementById("settings-content");be.innerHTML=`
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
        `,document.getElementById("sens-slider").addEventListener("input",Ne=>{n.setSensitivity(parseFloat(Ne.target.value)),document.getElementById("sens-val").textContent=n.sensitivity.toFixed(1)+"x"}),document.getElementById("fov-slider").addEventListener("input",Ne=>{n.setFov(parseInt(Ne.target.value)),document.getElementById("fov-val").textContent=n.fov,tt.fov=n.fov,tt.updateProjectionMatrix()}),document.getElementById("tutorial-toggle").addEventListener("change",()=>{n.toggleTutorial()})}}const Ai=s.isOpen&&s.activeTab==="map";if(o.shouldRender(Ai)){ns.style.display="block";const w=Xe.getActiveQuests().map(be=>be.id),K=Pl(Dt,w);z.draw({playerPos:d.position,fogOfWar:W,buildings:Xo,npcs:pe.getAllNPCs(),stations:qo,landmarks:Ur,questMarkers:K,mini:!0})}else ns.style.display="none";if(ze.consumeKeyPress("KeyT")&&!ye.isActive()){const w=Ho(pe,d.position,t.NPC.INTERACT_RANGE);if(w){const K=w.getDialogue(Xe),be=[];if(Cd(w,Xe)&&be.push({text:"Accept quest",response:null,action:"accept_quest",npcId:w.id}),w.trades&&w.trades.length>0)for(const Ne of w.trades){const rt=T.count(Ne.give.type)>=Ne.give.count,Yt=`Trade ${Ne.give.count} ${Ne.give.type.replace(/_/g," ")} → ${Ne.receive.count} ${Ne.receive.type.replace(/_/g," ")}${rt?"":" (need more)"}`;be.push({text:Yt,response:rt?`Traded! Received ${Ne.receive.count} ${Ne.receive.type.replace(/_/g," ")}.`:"You don't have enough to trade.",action:rt?"trade":null,trade:Ne})}be.push(...py(w.id,w.name)),ye.startDialogue(`${w.name}: ${K}`,be),ht.talkToNPC(w.id),Xe.advanceObjective("ch2_roads","ch2_meet_npc",1)}}if(ye.isActive()){const w=document.getElementById("dialogue-panel");w.style.display="block";const K=ye.getState();document.getElementById("dialogue-message").innerHTML=ye.getMessage();const be=ye.getChoices();if(K==="choices"){if(document.getElementById("dialogue-choices").innerHTML=be.map((Ne,rt)=>`<div style="${rt===ye.selectedIndex?"color:#c9a84c;":"color:#888;"}cursor:pointer;padding:3px 0">${rt===ye.selectedIndex?"▸ ":"  "}${Ne.text}</div>`).join(""),ze.consumeKeyPress("ArrowDown")&&ye.selectNext(),ze.consumeKeyPress("ArrowUp")&&ye.selectPrev(),ze.consumeKeyPress("Enter")){const Ne=be[ye.selectedIndex];if(Ne&&Ne.action==="accept_quest"){const rt=Ho(pe,d.position,t.NPC.INTERACT_RANGE);rt&&vx(rt,Xe),ye.dismiss(),J="Quest accepted!",fe=t.DIALOGUE.SHORT_DURATION}else if(Ne&&Ne.action==="trade"&&Ne.trade){const rt=Ne.trade;T.remove(rt.give.type,rt.give.count)&&(T.add(rt.receive.type,rt.receive.count),ye.dismiss(),J=`Traded! Received ${rt.receive.count} ${rt.receive.type.replace(/_/g," ")}`,fe=t.DIALOGUE.SHORT_DURATION)}else ye.selectChoice(ye.selectedIndex)}}else K==="response"&&(document.getElementById("dialogue-choices").innerHTML='<div style="color:#666;padding:6px 0;font-style:italic">Press Enter to continue...</div>',ze.consumeKeyPress("Enter")&&ye.acknowledge());(ze.consumeKeyPress("Escape")||ze.consumeKeyPress("KeyT"))&&ye.dismiss()}else document.getElementById("dialogue-panel").style.display="none";if(fe>0&&(fe-=le,fe<=0&&(J="")),ze.consumeKeyPress("F5"))try{const w=Pv(a,d,T,{survivalStats:b,quests:Xe,factions:ce,fastTravel:I,fogOfWar:W,loreJournal:st,skillTree:re});Fv(w).then(()=>{J="Game saved!",fe=t.DIALOGUE.SAVE_FEEDBACK_DURATION}).catch(()=>{J="Save failed!",fe=t.DIALOGUE.SAVE_FEEDBACK_DURATION})}catch{J="Save failed!",fe=t.DIALOGUE.SAVE_FEEDBACK_DURATION}if(ze.consumeKeyPress("F9")&&Bv().then(w=>{const K=Nv(w);a.restoreFrom(K.world),Object.assign(d.position,K.player.position),d.velocity=K.player.velocity,d.yaw=K.player.yaw,d.pitch=K.player.pitch,d.onGround=K.player.onGround;for(const be of T.getItems())T.remove(be.type,be.count);for(const be of K.inventory.getItems())T.add(be.type,be.count);K.survivalStats&&Object.assign(b,K.survivalStats),K.questData&&Xe.deserialize(K.questData),K.factionData&&ce.deserialize(K.factionData),K.fastTravelData&&I.deserialize(K.fastTravelData),K.fogOfWarData&&W.deserialize(K.fogOfWarData),K.loreJournalData&&st.deserialize(K.loreJournalData),K.skillTreeData&&re.deserialize(K.skillTreeData);for(const be of Xt.meshes.keys())Xt.dirty.add(be);J="Game loaded!",fe=t.DIALOGUE.SAVE_FEEDBACK_DURATION}).catch(()=>{J="Load failed!",fe=t.DIALOGUE.SAVE_FEEDBACK_DURATION}),ze.consumeKeyPress("KeyF")&&Cv(T,b,Ze),ze.consumeKeyPress("KeyX")){const w=Le.type===pt.MIRKWOOD,K=Rt.useRelic(b.focus);if(K){ht.useRelic();const be=Lg(K.focusCost,w);if(b.focus=Math.max(0,b.focus-be),K.ability===ws.HEAL_WOUND?(b.health=Math.min(b.maxHealth,b.health+20),J="Healing light surrounds you..."):K.ability===ws.WARD_LIGHT?(ge.reduceFear(30),J="A warm light pushes back the darkness."):K.ability===ws.CALM_FEAR?(ge.reduceFear(50),J="A calm washes over you."):J=`Used: ${Rt.getEquippedRelic().name}`,w){J="The corruption resists your power... "+J;const Ne=Pg();if(Math.random()<Ne){const rt=Me.spawn(d.position,Le.type);rt&&_e.push(rt)}}fe=t.DIALOGUE.SHORT_DURATION}else Rt.getEquippedRelic()&&(J=Rt.getEquippedRelic().cooldown>0?"Relic on cooldown":"Not enough focus",fe=t.DIALOGUE.SAVE_FEEDBACK_DURATION)}Rt.tick(Pe);const Zt=rn.findNearby(d.position,5);for(const w of Zt)if(w.discover()){for(const K of w.reward)T.add(K.type,K.count);H.addExperience(t.QUESTS.XP_DISCOVERY,"exploration"),(w.type==="lore_book"||w.type==="inscription")&&st.addEntry(new Rd({id:w.id,title:w.id.replace(/_/g," "),text:`Found near ${Math.floor(w.position.x)}, ${Math.floor(w.position.z)}`,category:w.type==="lore_book"?Il.HISTORY:Il.INSCRIPTION})),ht.discover(w.id),J=`Discovered: ${w.type.replace(/_/g," ")}!`,fe=t.DIALOGUE.SHORT_DURATION}for(const w of Br)w.restored&&!I.isUnlocked(w.id)&&I.unlockWaypoint({id:w.id,name:w.name,position:{...w.position}});const Ld=It.evaluate(a,d.position),Pd=bx(Re);Ld.warmth+(Pd.temperature||0)*.1,lt.tick(Pe);const Xn=ze.getMovementInput();if($.canFly()){const w=ci(d),K=$.flySpeed*le;Xn.forward&&(d.position.x+=w.x*K,d.position.y+=w.y*K,d.position.z+=w.z*K),Xn.back&&(d.position.x-=w.x*K,d.position.y-=w.y*K,d.position.z-=w.z*K),Xn.left&&(d.position.x+=w.z*K,d.position.z-=w.x*K),Xn.right&&(d.position.x-=w.z*K,d.position.z+=w.x*K),ze.getJump()&&(d.position.y+=K),ze.keys.ShiftLeft&&(d.position.y-=K),d.velocity.y=0}else{const w=Rg(i.raceId,Le.type),K=b.getFractureSpeedMultiplier(),be=dy(a,d.position),Ne=hy(be),rt=Math.floor(d.position.x),Yt=Math.floor(d.position.z),Nt=zt(rt,Yt);let kt=1;if(Xn.forward||Xn.right){const on=Math.cos(d.yaw),Ri=Math.sin(d.yaw),Jd=Math.floor(d.position.x+Ri*2),eh=Math.floor(d.position.z+on*2),th=zt(Jd,eh),nh=Math.abs(th-Nt);kt=uy(nh)}if(ze.keys.ShiftLeft&&Xn.forward&&!d.crouching&&b.stamina>0){const on=d.moveSpeed,Ri=wg(i.raceId);d.moveSpeed*=t.SURVIVAL.SPRINT_MULTIPLIER*Ri*w*K*Ne*kt,d.applyMovementInput(Xn,le),d.moveSpeed=on,b.applySprint(Pe)}else{const on=d.moveSpeed;d.moveSpeed*=w*K*Ne*kt,d.applyMovementInput(Xn,le),d.moveSpeed=on}if(be){const on=A0(d.position.x,d.position.z);on&&(d.position.x+=on.x*le,d.position.z+=on.z*le)}ze.getJump()&&d.onGround&&(d.velocity.y=t.PHYSICS.JUMP_VELOCITY,d.onGround=!1);const qi=d.velocity.y,Cr=d.onGround;N0(d,le),U0(d,a,le),!Cr&&d.onGround&&qi<0&&b.checkFallFracture(qi)}vv(d.position,t.WORLD.BOUNDARY_EXTENT);const eo=ci(d),ic={x:d.position.x,y:d.position.y+(d.eyeHeight||t.CAMERA.FIRST_PERSON_EYE_HEIGHT),z:d.position.z};if(ze.locked&&ze.consumeRightClick()){const w=pl(a,ic,eo,6);if(w){const K=a.getBlock(w.blockPos.x,w.blockPos.y,w.blockPos.z);if(K===g.DOOR||K===g.DOOR_OPEN)Nl(a,w.blockPos.x,w.blockPos.y,w.blockPos.z)&&(Xt.markDirty(w.blockPos.x,w.blockPos.y,w.blockPos.z),Xt.markDirty(w.blockPos.x,w.blockPos.y+1,w.blockPos.z),Xt.markDirty(w.blockPos.x,w.blockPos.y-1,w.blockPos.z));else if(K===g.CHEST)v(w.blockPos.x,w.blockPos.y,w.blockPos.z);else{const be=q.getSelectedItem(),Ne=be?be.type:null;if(Ne&&Pa[Ne]!==void 0){const rt=w.blockPos.x+w.normal.x,Yt=w.blockPos.y+w.normal.y,Nt=w.blockPos.z+w.normal.z;tg(a,T,rt,Yt,Nt,Ne)&&Xt.markDirty(rt,Yt,Nt)}}}}if(ve+=Pe,ve>=10){ve=0;const w=_e.filter(be=>!be.isDead()).length,K=Me.trySpawn({phase:M.getPhase(),playerPos:d.position,existingCount:w,getHeight:(be,Ne)=>zt(be,Ne)});_e.push(...K)}const Nd=(w,K)=>zt(w,K);for(const w of _e)if(!w.isDead()){const K=w.aggroRange;w.aggroRange=ux(w,d.crouching),w.updateAI(d.position,le,Nd,a),w.aggroRange=K}if(M.getPhase()===yt.NIGHT&&ge.addFear(Pe*.5),!$.isInvincible()){for(const w of _e)if(!w.isDead()&&w.canAttack(d.position)){let K=w.performAttack();K=zx(K,C),S._guarding&&(K*=.5),K=cx(K,j),b.takeDamage(K)}}if(ze.locked&&ze.keys.mouseLeft){const w=pl(a,ic,eo,6);if(w){const{x:K,y:be,z:Ne}=w.blockPos,rt=a.getBlock(K,be,Ne);if($x(rt))ze.consumeLeftClick()&&Nl(a,K,be,Ne)&&(Xt.markDirty(K,be,Ne),Xt.markDirty(K,be+1,Ne),Xt.markDirty(K,be-1,Ne));else if(Qe.startBreak(K,be,Ne,rt),Qe.tick(le)){const Yt=j.get("main_hand");let Nt=Yt&&Yt.toolType||null;if(!Nt){const kt=["iron_pickaxe","copper_pickaxe","stone_pickaxe","pickaxe"];for(const Qt of kt)if(T.count(Qt)>0){Nt="pickaxe";break}}if(y0(rt,Nt)){const kt=v0(rt);a.setBlock(K,be,Ne,0);for(const Qt of kt)Se({x:K,y:be,z:Ne},Qt.type,Qt.count);Xt.markDirty(K,be,Ne)}}}else if(Qe.cancel(),ze.consumeLeftClick()){let K=lx(j);if(K<=2){const be=[{type:"iron_sword",damage:12},{type:"iron_hammer",damage:14},{type:"dagger",damage:6},{type:"spear",damage:10},{type:"axe",damage:8},{type:"stone_axe",damage:6},{type:"hammer",damage:10}];for(const Ne of be)if(T.count(Ne.type)>0){K=Ne.damage;break}K<=2&&(K=5)}S.playerAttack(d.position,eo,_e,K)}}else Qe.cancel(),ze.consumeLeftClick();for(let w=_e.length-1;w>=0;w--)if(_e[w].isDead()){const K=rg(_e[w].type);for(const be of K)Se(_e[w].position,be.type,be.count);H.addExperience(t.COMBAT.XP_PER_KILL,"combat"),ce.addReputation("road_wardens",t.COMBAT.FACTION_REP_PER_KILL),ht.killEnemy(_e[w].type),_e.splice(w,1)}!Ut&&M.day>=2&&(Ut=!0,Xe.advanceObjective("ch1_embers","ch1_survive",1),H.addExperience(t.QUESTS.XP_FIRST_NIGHT,"quest"),ht.surviveNight()),M.getPhase()===yt.DAWN&&M.day>ht.nightsSurvived+1&&ht.surviveNight();const rc=Br.find(w=>w.id==="starter_watchpost");rc&&Rs(d.position,rc.position,t.RESTORATION.HINT_RANGE)&&Xe.advanceObjective("ch1_embers","ch1_reach_outpost",1);const kd=Dt.checkTriggers(d.position);for(const w of kd)Xe.activate(w.questId),(w.type==="reach_location"||w.type==="explore_area")&&(Xe.advanceObjective(w.questId,w.objectiveId,1),H.addExperience(t.QUESTS.XP_EXPLORATION,"exploration"));if(ze.consumeKeyPress("KeyR")){for(const w of Br)if(!w.restored&&Rs(d.position,w.position,t.RESTORATION.INTERACT_RANGE)){if(w.restore(T)){const K=Dg(w.id);J=K.message,fe=t.DIALOGUE.DISPLAY_DURATION,H.addExperience(t.QUESTS.XP_RESTORATION,"restoration"),ht.restoreSite(w.id);const Ne={starter_watchpost:"road_wardens",roadside_hall:"road_wardens",mountain_workshop:"dwarven_crafters",forest_beacon:"woodland_guardians",ward_bastion:"rivendell_keepers"}[w.id];Ne&&ce.addReputation(Ne,50);const rt=K.merchant;rt.position={...w.position};const Yt=new gn(rt);pe.addNPC(Yt);const kt={starter_watchpost:"small",roadside_hall:"medium",mountain_workshop:"medium",forest_beacon:"small",ward_bastion:"large"}[w.id]||"small",Qt=zt(Math.floor(w.position.x),Math.floor(w.position.z));Gv(a,{x:w.position.x,y:Qt+1,z:w.position.z},kt);const qi=Math.floor(w.position.x),Cr=Math.floor(w.position.z);for(let on=-10;on<=10;on+=8)for(let Ri=-10;Ri<=10;Ri+=8)Xt.markDirty(qi+on,Qt+1,Cr+Ri);w.id==="starter_watchpost"&&Xe.advanceObjective("ch1_embers","ch1_activate_ward",1)}else J=`Need materials to restore ${w.name}`,fe=t.DIALOGUE.SHORT_DURATION;break}}const Ud=(w,K)=>zt(w,K);for(const w of zo)w.updateAI(le,Ud,a);for(let w=et.length-1;w>=0;w--){const K=et[w];if(K.lifetime-=le,K.bobPhase+=le*3,K.lifetime<=0){et.splice(w,1);continue}const be=d.position.x-K.position.x,Ne=d.position.y-K.position.y,rt=d.position.z-K.position.z;be*be+Ne*Ne+rt*rt<=Tt*Tt&&(T.add(K.type,K.count),J=`Picked up ${K.count} ${K.type.replace(/_/g," ")}`,fe=1.5,et.splice(w,1))}for(const w of je)ct.remove(w),w.geometry.dispose();je=[];const Fd=new bi(.3,.3,.3);for(const w of et){const K=new $s({color:13215820}),be=new yn(Fd,K);be.position.set(w.position.x,w.position.y+Math.sin(w.bobPhase)*.15,w.position.z),be.rotation.y=w.bobPhase*.5,ct.add(be),je.push(be)}Qr.sync(_e),Wn.sync(zo),Ar(M.getPhase());const Bd=O.getVisibilityModifier(),sc=bl(Bd);ct.fog.near=sc.near,ct.fog.far=sc.far;const zd=Math.sqrt((d.position.x-t.CORRUPTION.CENTER_X)**2+(d.position.z-t.CORRUPTION.CENTER_Z)**2),oc=Math.max(0,1-zd/t.CORRUPTION.RADIUS);if(oc>t.CORRUPTION.FOG_THRESHOLD){const w=Xx(oc);ct.fog.color.setRGB(w.r,w.g,w.b)}if(tt.rotation.order="YXZ",tt.rotation.y=-d.yaw,tt.rotation.x=d.pitch,d.cameraMode==="third_person_behind"){const w=t.CAMERA.THIRD_PERSON_DISTANCE,K=t.CAMERA.THIRD_PERSON_EYE_HEIGHT,be=ci(d);tt.position.set(d.position.x-be.x*w,d.position.y+K-be.y*w,d.position.z-be.z*w)}else tt.position.set(d.position.x,d.position.y+(d.eyeHeight||t.CAMERA.FIRST_PERSON_EYE_HEIGHT),d.position.z);_.update(d.position.x,d.position.z),c.style.display!=="none"&&!_.isLoading()&&(_.consumeMeshDirtyChunks(),Xt.update(d.position.x,d.position.z,t.CHUNKS.RENDER_DISTANCE),c.style.display="none");const ac=_.consumeMeshDirtyChunks();ac.size>0&&Xt.invalidateChunks(ac),c.style.display==="none"&&Xt.update(d.position.x,d.position.z,t.CHUNKS.RENDER_DISTANCE),Be.render(ct,tt);const Hd=M.getPhase(),Ft=Rv({survivalStats:b,questSystem:Xe,compass:Q,playerYaw:d.yaw,playerPos:d.position,fearSystem:ge,experienceSystem:H,statusEffects:Ze}),Gd=T.getItems().slice(0,8).map(w=>`${w.type}:${w.count}`).join(" "),cc=_e.length,Vd=d.crouching?" [Crouching]":"",Wd=S._guarding?" [Guard]":"",Xd=O.current,qd=Math.round(W.getRevealedPercentage()),Yd=Ft.activeQuestName?` | Quest: ${Ft.activeQuestName}`:"",Kd=Ft.compassCardinal?` ${Ft.compassCardinal}`:"",lc=Ft.fearLevel,$d=document.getElementById("hotbar-bar");let dc="";for(let w=0;w<8;w++){const K=q.getSlot(w),be=w===q.selectedSlot?" selected":"",Ne=K?Go(K.type):"",rt=K?K.type.replace(/_/g," "):"",Yt=K?K.count:"";dc+=`<div class="slot${be}"><span class="num">${w+1}</span><div style="font-size:18px">${Ne}</div><span class="item-name">${rt}</span><span class="item-count">${Yt}</span></div>`}$d.innerHTML=dc;const hc=Ho(pe,d.position,t.NPC.INTERACT_RANGE),jd=hc?`<div style="color:#c9a84c;margin-top:4px">[T] Talk to ${hc.name}</div>`:"",Zd=J?`<div style="color:#eee;background:rgba(0,0,0,0.6);padding:6px 10px;margin-top:6px;border-radius:4px;max-width:400px">${J}</div>`:"";let uc="";for(const w of Br)if(!w.restored&&Rs(d.position,w.position,t.RESTORATION.HINT_RANGE)){const K=w.requirements.map(be=>`${be.count} ${be.type.replace(/_/g," ")}`).join(", ");uc=`<div style="color:#aed581;margin-top:4px">[R] Restore ${w.name} (needs: ${K})</div>`;break}const Qd=Ft.statusEffects.length>0?`<div style="margin-top:2px;font-size:11px;color:#aed581">${Ft.statusEffects.map(w=>`${w.type.replace(/_/g," ")} ${Math.ceil(w.remaining)}s`).join(" | ")}</div>`:"";Jr.innerHTML=`
      <div>${i.characterName?i.characterName+" — ":""}${E.name} ${D.name} Lv${Ft.level} | Day ${M.day} — ${Hd} | ${Le.name} | ${Xd}${Kd}${Vd}${Wd}${$.enabled?" [CREATIVE]":""}</div>
      <div>HP: ${Ft.health}/${Ft.maxHealth} | STA: ${Ft.stamina} | HUN: ${Ft.hunger} | FOC: ${Ft.focus} | ${Ft.tempLabel}${lc>0?` | Fear: ${lc}`:""}${Yd}</div>
      <div style="margin-top:2px;font-size:11px;color:#888">Pos: ${Ft.playerX}, ${Ft.playerZ} | ${Gd||"empty"}${cc?` | Enemies: ${cc}`:""} | Map: ${qd}%</div>
      ${Qd}
      ${jd}${uc}${Zd}
    `,document.getElementById("health-bar-fill").style.width=`${Ft.health/Ft.maxHealth*100}%`,document.getElementById("stamina-bar-fill").style.width=`${Ft.stamina}%`,document.getElementById("hunger-bar-fill").style.width=`${Ft.hunger}%`,Qe.isBreaking()?(document.getElementById("break-bar").style.display="block",document.getElementById("break-fill").style.width=`${Math.round(Qe.getProgress()*100)}%`):document.getElementById("break-bar").style.display="none"}window.addEventListener("resize",()=>{Be.setSize(window.innerWidth,window.innerHeight),tt.aspect=window.innerWidth/window.innerHeight,tt.updateProjectionMatrix()}),requestAnimationFrame(gt)}
