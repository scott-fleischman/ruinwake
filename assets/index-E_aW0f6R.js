(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Fa="175",Xd=0,ac=1,qd=2,Ol=1,Kd=2,jn=3,vi=0,nn=1,Jn=2,_i=0,mr=1,cc=2,lc=3,dc=4,Yd=5,Ui=100,$d=101,jd=102,Zd=103,Qd=104,Jd=200,eh=201,th=202,nh=203,Wo=204,Xo=205,ih=206,rh=207,sh=208,oh=209,ah=210,ch=211,lh=212,dh=213,hh=214,qo=0,Ko=1,Yo=2,xr=3,$o=4,jo=5,Zo=6,Qo=7,Ba=0,uh=1,fh=2,gi=0,ph=1,mh=2,_h=3,gh=4,vh=5,xh=6,yh=7,Dl=300,yr=301,Er=302,Jo=303,ea=304,qs=306,ta=1e3,Bi=1001,na=1002,Ln=1003,Eh=1004,ns=1005,Bn=1006,eo=1007,zi=1008,si=1009,Ll=1010,Pl=1011,Br=1012,za=1013,Hi=1014,ti=1015,Wr=1016,Ha=1017,Ga=1018,zr=1020,Nl=35902,Ul=1021,kl=1022,Dn=1023,Fl=1024,Bl=1025,Hr=1026,Gr=1027,zl=1028,Va=1029,Hl=1030,Wa=1031,Xa=1033,Os=33776,Ds=33777,Ls=33778,Ps=33779,ia=35840,ra=35841,sa=35842,oa=35843,aa=36196,ca=37492,la=37496,da=37808,ha=37809,ua=37810,fa=37811,pa=37812,ma=37813,_a=37814,ga=37815,va=37816,xa=37817,ya=37818,Ea=37819,Sa=37820,Ma=37821,Ns=36492,ba=36494,Ta=36495,Gl=36283,Aa=36284,Ra=36285,wa=36286,Sh=3200,Mh=3201,Vl=0,bh=1,mi="",En="srgb",Sr="srgb-linear",Hs="linear",St="srgb",Ki=7680,hc=519,Th=512,Ah=513,Rh=514,Wl=515,wh=516,Ch=517,Ih=518,Oh=519,uc=35044,fc="300 es",ni=2e3,Gs=2001;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],to=Math.PI/180,Ca=180/Math.PI;function Xr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Dh(i,e){return(i%e+e)%e}function no(i,e,t){return(1-t)*i+t*e}function wr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,r,s,o,a,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],_=n[8],g=r[0],m=r[3],u=r[6],T=r[1],b=r[4],S=r[7],w=r[2],R=r[5],I=r[8];return s[0]=o*g+a*T+c*w,s[3]=o*m+a*b+c*R,s[6]=o*u+a*S+c*I,s[1]=l*g+h*T+d*w,s[4]=l*m+h*b+d*R,s[7]=l*u+h*S+d*I,s[2]=f*g+p*T+_*w,s[5]=f*m+p*b+_*R,s[8]=f*u+p*S+_*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,f=a*c-h*s,p=l*s-o*c,_=t*d+n*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*l-h*n)*g,e[2]=(a*n-r*o)*g,e[3]=f*g,e[4]=(h*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const io=new Qe;function Xl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lh(){const i=Vs("canvas");return i.style.display="block",i}const pc={};function Us(i){i in pc||(pc[i]=!0,console.warn(i))}function Ph(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Nh(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Uh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mc=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kh(){const i={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(r.r=ii(r.r),r.g=ii(r.g),r.b=ii(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mi?Hs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sr]:{primaries:e,whitePoint:n,transfer:Hs,toXYZ:mc,fromXYZ:_c,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:n,transfer:St,toXYZ:mc,fromXYZ:_c,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),i}const gt=kh();function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class Fh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=Vs("canvas")),Yi.width=e.width,Yi.height=e.height;const r=Yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ii(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bh=0;class qa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Xr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ro(r[o].image)):s.push(ro(r[o]))}else s=ro(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zh=0;class rn extends br{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=Bi,r=Bi,s=Bn,o=zi,a=Dn,c=si,l=rn.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Xr(),this.name="",this.source=new qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ta:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ta:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Dl;rn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],_=c[9],g=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,S=(p+1)/2,w=(u+1)/2,R=(h+f)/4,I=(d+g)/4,P=(_+m)/4;return b>S&&b>w?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=R/n,s=I/n):S>w?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=R/r,s=P/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=I/s,r=P/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(d-g)/T,this.z=(f-h)/T,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hh extends br{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new rn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new qa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Hh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ql extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gh extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||c!==f||l!==p||h!==_){let m=1-a;const u=c*f+l*p+h*_+d*g,T=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const w=Math.sqrt(b),R=Math.atan2(w,u*T);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}const S=a*T;if(c=c*m+f*S,l=l*m+p*S,h=h*m+_*S,d=d*m+g*S,m===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=w,l*=w,h*=w,d*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+h*d+c*p-l*f,e[t+1]=c*_+h*f+l*d-a*p,e[t+2]=l*_+h*p+a*f-c*d,e[t+3]=h*_-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),d=a(s/2),f=c(n/2),p=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=f*h*d+l*p*_,this._y=l*p*d-f*h*_,this._z=l*h*_+f*p*d,this._w=l*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+l*p*_,this._y=l*p*d-f*h*_,this._z=l*h*_-f*p*d,this._w=l*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-l*p*_,this._y=l*p*d+f*h*_,this._z=l*h*_+f*p*d,this._w=l*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-l*p*_,this._y=l*p*d+f*h*_,this._z=l*h*_-f*p*d,this._w=l*h*d+f*p*_;break;case"YZX":this._x=f*h*d+l*p*_,this._y=l*p*d+f*h*_,this._z=l*h*_-f*p*d,this._w=l*h*d-f*p*_;break;case"XZY":this._x=f*h*d-l*p*_,this._y=l*p*d-f*h*_,this._z=l*h*_+f*p*d,this._w=l*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-s*d,this.z=r+c*d+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return so.copy(this).projectOnVector(e),this.sub(so)}reflect(e){return this.sub(so.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const so=new W,gc=new qr;class Kr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),is.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox)),is.applyMatrix4(e.matrixWorld),this.union(is)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),rs.subVectors(this.max,Cr),$i.subVectors(e.a,Cr),ji.subVectors(e.b,Cr),Zi.subVectors(e.c,Cr),ai.subVectors(ji,$i),ci.subVectors(Zi,ji),bi.subVectors($i,Zi);let t=[0,-ai.z,ai.y,0,-ci.z,ci.y,0,-bi.z,bi.y,ai.z,0,-ai.x,ci.z,0,-ci.x,bi.z,0,-bi.x,-ai.y,ai.x,0,-ci.y,ci.x,0,-bi.y,bi.x,0];return!oo(t,$i,ji,Zi,rs)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,$i,ji,Zi,rs))?!1:(ss.crossVectors(ai,ci),t=[ss.x,ss.y,ss.z],oo(t,$i,ji,Zi,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new W,new W,new W,new W,new W,new W,new W,new W],Tn=new W,is=new Kr,$i=new W,ji=new W,Zi=new W,ai=new W,ci=new W,bi=new W,Cr=new W,rs=new W,ss=new W,Ti=new W;function oo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ti.fromArray(i,s);const a=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Vh=new Kr,Ir=new W,ao=new W;class Ka{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const t=Ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ir,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(ao)),this.expandByPoint(Ir.copy(e.center).sub(ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new W,co=new W,os=new W,li=new W,lo=new W,as=new W,ho=new W;class Wh{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){co.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),li.copy(this.origin).sub(co);const s=e.distanceTo(t)*.5,o=-this.direction.dot(os),a=li.dot(this.direction),c=-li.dot(os),l=li.lengthSq(),h=Math.abs(1-o*o);let d,f,p,_;if(h>0)if(d=o*c-a,f=o*a-c,_=s*h,d>=0)if(f>=-_)if(f<=_){const g=1/h;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=_?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(co).addScaledVector(os,f),p}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,r,s){lo.subVectors(t,e),as.subVectors(n,e),ho.crossVectors(lo,as);let o=this.direction.dot(ho),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const c=a*this.direction.dot(as.crossVectors(li,as));if(c<0)return null;const l=a*this.direction.dot(lo.cross(li));if(l<0||c+l>o)return null;const h=-a*li.dot(ho);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,r,s,o,a,c,l,h,d,f,p,_,g,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,d,f,p,_,g,m)}set(e,t,n,r,s,o,a,c,l,h,d,f,p,_,g,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=_,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*d,_=a*h,g=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+_*l,t[5]=f-g*l,t[9]=-a*c,t[2]=g-f*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,p=c*d,_=l*h,g=l*d;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,p=c*d,_=l*h,g=l*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,p=o*d,_=a*h,g=a*d;t[0]=c*h,t[4]=_*l-p,t[8]=f*l+g,t[1]=c*d,t[5]=g*l+f,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=g-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+g,t[5]=o*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*h,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xh,e,qh)}lookAt(e,t,n){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),di.crossVectors(n,cn),di.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),di.crossVectors(n,cn)),di.normalize(),cs.crossVectors(cn,di),r[0]=di.x,r[4]=cs.x,r[8]=cn.x,r[1]=di.y,r[5]=cs.y,r[9]=cn.y,r[2]=di.z,r[6]=cs.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],u=n[14],T=n[3],b=n[7],S=n[11],w=n[15],R=r[0],I=r[4],P=r[8],M=r[12],E=r[1],D=r[5],Y=r[9],B=r[13],$=r[2],oe=r[6],Q=r[10],ne=r[14],q=r[3],de=r[7],Re=r[11],De=r[15];return s[0]=o*R+a*E+c*$+l*q,s[4]=o*I+a*D+c*oe+l*de,s[8]=o*P+a*Y+c*Q+l*Re,s[12]=o*M+a*B+c*ne+l*De,s[1]=h*R+d*E+f*$+p*q,s[5]=h*I+d*D+f*oe+p*de,s[9]=h*P+d*Y+f*Q+p*Re,s[13]=h*M+d*B+f*ne+p*De,s[2]=_*R+g*E+m*$+u*q,s[6]=_*I+g*D+m*oe+u*de,s[10]=_*P+g*Y+m*Q+u*Re,s[14]=_*M+g*B+m*ne+u*De,s[3]=T*R+b*E+S*$+w*q,s[7]=T*I+b*D+S*oe+w*de,s[11]=T*P+b*Y+S*Q+w*Re,s[15]=T*M+b*B+S*ne+w*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],u=e[15];return _*(+s*c*d-r*l*d-s*a*f+n*l*f+r*a*p-n*c*p)+g*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*h-s*c*h)+m*(+t*l*d-t*a*p-s*o*d+n*o*p+s*a*h-n*l*h)+u*(-r*a*h-t*c*d+t*a*f+r*o*d-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],u=e[15],T=d*m*l-g*f*l+g*c*p-a*m*p-d*c*u+a*f*u,b=_*f*l-h*m*l-_*c*p+o*m*p+h*c*u-o*f*u,S=h*g*l-_*d*l+_*a*p-o*g*p-h*a*u+o*d*u,w=_*d*c-h*g*c-_*a*f+o*g*f+h*a*m-o*d*m,R=t*T+n*b+r*S+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=T*I,e[1]=(g*f*s-d*m*s-g*r*p+n*m*p+d*r*u-n*f*u)*I,e[2]=(a*m*s-g*c*s+g*r*l-n*m*l-a*r*u+n*c*u)*I,e[3]=(d*c*s-a*f*s-d*r*l+n*f*l+a*r*p-n*c*p)*I,e[4]=b*I,e[5]=(h*m*s-_*f*s+_*r*p-t*m*p-h*r*u+t*f*u)*I,e[6]=(_*c*s-o*m*s-_*r*l+t*m*l+o*r*u-t*c*u)*I,e[7]=(o*f*s-h*c*s+h*r*l-t*f*l-o*r*p+t*c*p)*I,e[8]=S*I,e[9]=(_*d*s-h*g*s-_*n*p+t*g*p+h*n*u-t*d*u)*I,e[10]=(o*g*s-_*a*s+_*n*l-t*g*l-o*n*u+t*a*u)*I,e[11]=(h*a*s-o*d*s-h*n*l+t*d*l+o*n*p-t*a*p)*I,e[12]=w*I,e[13]=(h*g*r-_*d*r+_*n*f-t*g*f-h*n*m+t*d*m)*I,e[14]=(_*a*r-o*g*r-_*n*c+t*g*c+o*n*m-t*a*m)*I,e[15]=(o*d*r-h*a*r+h*n*c-t*d*c-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,d=a+a,f=s*l,p=s*h,_=s*d,g=o*h,m=o*d,u=a*d,T=c*l,b=c*h,S=c*d,w=n.x,R=n.y,I=n.z;return r[0]=(1-(g+u))*w,r[1]=(p+S)*w,r[2]=(_-b)*w,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(f+u))*R,r[6]=(m+T)*R,r[7]=0,r[8]=(_+b)*I,r[9]=(m-T)*I,r[10]=(1-(f+g))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const o=Qi.set(r[4],r[5],r[6]).length(),a=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const l=1/s,h=1/o,d=1/a;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,t.setFromRotationMatrix(An),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=ni){const c=this.elements,l=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let p,_;if(a===ni)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Gs)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ni){const c=this.elements,l=1/(t-e),h=1/(n-r),d=1/(o-s),f=(t+e)*l,p=(n+r)*h;let _,g;if(a===ni)_=(o+s)*d,g=-2*d;else if(a===Gs)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new W,An=new It,Xh=new W(0,0,0),qh=new W(1,1,1),di=new W,cs=new W,cn=new W,vc=new It,xc=new qr;class Gn{constructor(e=0,t=0,n=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xc.setFromEuler(this),this.setFromQuaternion(xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Kl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kh=0;const yc=new W,Ji=new qr,qn=new It,ls=new W,Or=new W,Yh=new W,$h=new qr,Ec=new W(1,0,0),Sc=new W(0,1,0),Mc=new W(0,0,1),bc={type:"added"},jh={type:"removed"},er={type:"childadded",child:null},uo={type:"childremoved",child:null};class qt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new W,t=new Gn,n=new qr,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new Qe}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Ec,e)}rotateY(e){return this.rotateOnAxis(Sc,e)}rotateZ(e){return this.rotateOnAxis(Mc,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ec,e)}translateY(e){return this.translateOnAxis(Sc,e)}translateZ(e){return this.translateOnAxis(Mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ls.copy(e):ls.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Or,ls,this.up):qn.lookAt(ls,Or,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(qn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bc),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jh),uo.child=e,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bc),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,Yh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,$h,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}qt.DEFAULT_UP=new W(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new W,Kn=new W,fo=new W,Yn=new W,tr=new W,nr=new W,Tc=new W,po=new W,mo=new W,_o=new W,go=new Ct,vo=new Ct,xo=new Ct;class On{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Rn.subVectors(r,t),Kn.subVectors(n,t),fo.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(Kn),c=Rn.dot(fo),l=Kn.dot(Kn),h=Kn.dot(fo),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(l*c-a*h)*f,_=(o*h-a*c)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Yn.x),c.addScaledVector(o,Yn.y),c.addScaledVector(a,Yn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return go.setScalar(0),vo.setScalar(0),xo.setScalar(0),go.fromBufferAttribute(e,t),vo.fromBufferAttribute(e,n),xo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(go,s.x),o.addScaledVector(vo,s.y),o.addScaledVector(xo,s.z),o}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),Kn.subVectors(e,t),Rn.cross(Kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Rn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return On.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,n),nr.subVectors(s,n),po.subVectors(e,n);const c=tr.dot(po),l=nr.dot(po);if(c<=0&&l<=0)return t.copy(n);mo.subVectors(e,r);const h=tr.dot(mo),d=nr.dot(mo);if(h>=0&&d<=h)return t.copy(r);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(tr,o);_o.subVectors(e,s);const p=tr.dot(_o),_=nr.dot(_o);if(_>=0&&p<=_)return t.copy(s);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(nr,a);const m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return Tc.subVectors(s,r),a=(d-h)/(d-h+(p-_)),t.copy(r).addScaledVector(Tc,a);const u=1/(m+g+f);return o=g*u,a=f*u,t.copy(n).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},ds={h:0,s:0,l:0};function yo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class vt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=Dh(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=yo(o,s,e+1/3),this.g=yo(o,s,e),this.b=yo(o,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=En){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=Yl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return gt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(at(Xt.r*255,0,255))*65536+Math.round(at(Xt.g*255,0,255))*256+Math.round(at(Xt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=En){gt.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,r=Xt.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(ds);const n=no(hi.h,ds.h,t),r=no(hi.s,ds.s,t),s=no(hi.l,ds.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new vt;vt.NAMES=Yl;let Zh=0;class Yr extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=mr,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $l extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new W,hs=new yt;let Qh=0;class Hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uc,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uc&&(e.usage=this.usage),e}}class jl extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zl extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ri extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jh=0;const gn=new It,Eo=new qt,ir=new W,ln=new Kr,Dr=new Kr,Bt=new W;class yi extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xl(e)?Zl:jl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Eo.lookAt(e),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ri(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(ln.min,Dr.min),ln.expandByPoint(Bt),Bt.addVectors(ln.max,Dr.max),ln.expandByPoint(Bt)):(ln.expandByPoint(Dr.min),ln.expandByPoint(Dr.max))}ln.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Bt.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(e,l),Bt.add(ir)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new W,c[P]=new W;const l=new W,h=new W,d=new W,f=new yt,p=new yt,_=new yt,g=new W,m=new W;function u(P,M,E){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,E),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,E),h.sub(l),d.sub(l),p.sub(f),_.sub(f);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(D),a[P].add(g),a[M].add(g),a[E].add(g),c[P].add(m),c[M].add(m),c[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,M=T.length;P<M;++P){const E=T[P],D=E.start,Y=E.count;for(let B=D,$=D+Y;B<$;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new W,S=new W,w=new W,R=new W;function I(P){w.fromBufferAttribute(r,P),R.copy(w);const M=a[P];b.copy(M),b.sub(w.multiplyScalar(w.dot(M))).normalize(),S.crossVectors(R,M);const D=S.dot(c[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,D)}for(let P=0,M=T.length;P<M;++P){const E=T[P],D=E.start,Y=E.count;for(let B=D,$=D+Y;B<$;B+=3)I(e.getX(B+0)),I(e.getX(B+1)),I(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new W,s=new W,o=new W,a=new W,c=new W,l=new W,h=new W,d=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let u=0;u<h;u++)f[_++]=l[p++]}return new Hn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yi,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new It,Ai=new Wh,us=new Ka,Rc=new W,fs=new W,ps=new W,ms=new W,So=new W,_s=new W,wc=new W,gs=new W;class _n extends qt{constructor(e=new yi,t=new $l){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_s.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(So.fromBufferAttribute(d,e),o?_s.addScaledVector(So,h):_s.addScaledVector(So.sub(t),h))}t.add(_s)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(us.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(us,Rc)===null||Ai.origin.distanceToSquared(Rc)>(e.far-e.near)**2))&&(Ac.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],u=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,w=b;S<w;S+=3){const R=a.getX(S),I=a.getX(S+1),P=a.getX(S+2);r=vs(this,u,e,n,l,h,d,R,I,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,u=g;m<u;m+=3){const T=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);r=vs(this,o,e,n,l,h,d,T,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],u=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,w=b;S<w;S+=3){const R=S,I=S+1,P=S+2;r=vs(this,u,e,n,l,h,d,R,I,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,u=g;m<u;m+=3){const T=m,b=m+1,S=m+2;r=vs(this,o,e,n,l,h,d,T,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function eu(i,e,t,n,r,s,o,a){let c;if(e.side===nn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===vi,a),c===null)return null;gs.copy(a),gs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(gs);return l<t.near||l>t.far?null:{distance:l,point:gs.clone(),object:i}}function vs(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,fs),i.getVertexPosition(c,ps),i.getVertexPosition(l,ms);const h=eu(i,e,t,n,fs,ps,ms,wc);if(h){const d=new W;On.getBarycoord(wc,fs,ps,ms,d),r&&(h.uv=On.getInterpolatedAttribute(r,a,c,l,d,new yt)),s&&(h.uv1=On.getInterpolatedAttribute(s,a,c,l,d,new yt)),o&&(h.normal=On.getInterpolatedAttribute(o,a,c,l,d,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new W,materialIndex:0};On.getNormal(fs,ps,ms,f.normal),h.face=f,h.barycoord=d}return h}class Ei extends yi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ri(l,3)),this.setAttribute("normal",new ri(h,3)),this.setAttribute("uv",new ri(d,2));function _(g,m,u,T,b,S,w,R,I,P,M){const E=S/I,D=w/P,Y=S/2,B=w/2,$=R/2,oe=I+1,Q=P+1;let ne=0,q=0;const de=new W;for(let Re=0;Re<Q;Re++){const De=Re*D-B;for(let et=0;et<oe;et++){const st=et*E-Y;de[g]=st*T,de[m]=De*b,de[u]=$,l.push(de.x,de.y,de.z),de[g]=0,de[m]=0,de[u]=R>0?1:-1,h.push(de.x,de.y,de.z),d.push(et/I),d.push(1-Re/P),ne+=1}}for(let Re=0;Re<P;Re++)for(let De=0;De<I;De++){const et=f+De+oe*Re,st=f+De+oe*(Re+1),j=f+(De+1)+oe*(Re+1),_e=f+(De+1)+oe*Re;c.push(et,st,_e),c.push(st,j,_e),q+=6}a.addGroup(p,q,M),p+=q,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=Mr(i[t]);for(const r in n)e[r]=n[r]}return e}function tu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ql(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const nu={clone:Mr,merge:$t};var iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iu,this.fragmentShader=ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=tu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jl extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new W,Cc=new yt,Ic=new yt;class Sn extends Jl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Cc,Ic),t.subVectors(Ic,Cc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class su extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(rr,sr,e,t);r.layers=this.layers,this.add(r);const s=new Sn(rr,sr,e,t);s.layers=this.layers,this.add(s);const o=new Sn(rr,sr,e,t);o.layers=this.layers,this.add(o);const a=new Sn(rr,sr,e,t);a.layers=this.layers,this.add(a);const c=new Sn(rr,sr,e,t);c.layers=this.layers,this.add(c);const l=new Sn(rr,sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ed extends rn{constructor(e=[],t=yr,n,r,s,o,a,c,l,h){super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ou extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ed(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ei(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:_i});s.uniforms.tEquirect.value=t;const o=new _n(r,s),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=Bn),new su(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class fr extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const au={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),u=this._getHandJoint(l,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(au)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ya{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new vt(e),this.near=t,this.far=n}clone(){return new Ya(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cu extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bo=new W,lu=new W,du=new Qe;class Li{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=bo.subVectors(n,t).cross(lu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||du.getNormalMatrix(e),r=this.coplanarPoint(bo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Ka,xs=new W;class $a{constructor(e=new Li,t=new Li,n=new Li,r=new Li,s=new Li,o=new Li){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],u=r[12],T=r[13],b=r[14],S=r[15];if(n[0].setComponents(c-s,f-l,m-p,S-u).normalize(),n[1].setComponents(c+s,f+l,m+p,S+u).normalize(),n[2].setComponents(c+o,f+h,m+_,S+T).normalize(),n[3].setComponents(c-o,f-h,m-_,S-T).normalize(),n[4].setComponents(c-a,f-d,m-g,S-b).normalize(),t===ni)n[5].setComponents(c+a,f+d,m+g,S+b).normalize();else if(t===Gs)n[5].setComponents(a,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(xs.x=r.normal.x>0?e.max.x:e.min.x,xs.y=r.normal.y>0?e.max.y:e.min.y,xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class td extends rn{constructor(e,t,n=Hi,r,s,o,a=Ln,c=Ln,l,h=Hr){if(h!==Hr&&h!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ks extends yi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,d=e/a,f=t/c,p=[],_=[],g=[],m=[];for(let u=0;u<h;u++){const T=u*f-o;for(let b=0;b<l;b++){const S=b*d-s;_.push(S,-T,0),g.push(0,0,1),m.push(b/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let T=0;T<a;T++){const b=T+l*u,S=T+l*(u+1),w=T+1+l*(u+1),R=T+1+l*u;p.push(b,S,R),p.push(S,w,R)}this.setIndex(p),this.setAttribute("position",new ri(_,3)),this.setAttribute("normal",new ri(g,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ys extends Yr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hu extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uu extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nd extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const To=new It,Oc=new W,Dc=new W;class fu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oc),Dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dc),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class id extends Jl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pu extends fu{constructor(){super(new id(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mu extends nd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new pu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _u extends nd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gu extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Lc(i,e,t,n){const r=vu(n);switch(t){case Ul:return i*e;case Fl:return i*e;case Bl:return i*e*2;case zl:return i*e/r.components*r.byteLength;case Va:return i*e/r.components*r.byteLength;case Hl:return i*e*2/r.components*r.byteLength;case Wa:return i*e*2/r.components*r.byteLength;case kl:return i*e*3/r.components*r.byteLength;case Dn:return i*e*4/r.components*r.byteLength;case Xa:return i*e*4/r.components*r.byteLength;case Os:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ls:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ra:case oa:return Math.max(i,16)*Math.max(e,8)/4;case ia:case sa:return Math.max(i,8)*Math.max(e,8)/2;case aa:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ns:case ba:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gl:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ra:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vu(i){switch(i){case si:case Ll:return{byteLength:1,components:1};case Br:case Pl:case Wr:return{byteLength:2,components:1};case Ha:case Ga:return{byteLength:2,components:4};case Hi:case za:case ti:return{byteLength:4,components:1};case Nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fa);function rd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function xu(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],g=d[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const g=d[p];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eu=`#ifdef USE_ALPHAHASH
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
#endif`,Su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Au=`#ifdef USE_AOMAP
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
#endif`,Ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wu=`#ifdef USE_BATCHING
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
#endif`,Cu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Du=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lu=`#ifdef USE_IRIDESCENCE
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
#endif`,Pu=`#ifdef USE_BUMPMAP
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
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vu=`#define PI 3.141592653589793
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
} // validated`,Wu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xu=`vec3 transformedNormal = objectNormal;
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
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qu=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cf=`#ifdef USE_GRADIENTMAP
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
}`,lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uf=`uniform bool receiveShadow;
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
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vf=`PhysicalMaterial material;
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
#endif`,xf=`struct PhysicalMaterial {
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
}`,yf=`
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,If=`#if defined( USE_POINTS_UV )
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
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
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
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vf=`#ifdef USE_NORMALMAP
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
#endif`,Wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$f=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sp=`float getShadowMask() {
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
}`,op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#ifdef USE_TRANSMISSION
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ep=`uniform sampler2D t2D;
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`#include <common>
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
}`,Rp=`#if DEPTH_PACKING == 3200
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
}`,wp=`#define DISTANCE
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
}`,Cp=`#define DISTANCE
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`uniform float scale;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Np=`uniform vec3 diffuse;
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
}`,Up=`#define LAMBERT
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
}`,kp=`#define LAMBERT
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
}`,Fp=`#define MATCAP
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
}`,Bp=`#define MATCAP
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
}`,zp=`#define NORMAL
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
}`,Hp=`#define NORMAL
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
}`,Gp=`#define PHONG
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
}`,Vp=`#define PHONG
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
}`,Wp=`#define STANDARD
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
}`,Xp=`#define STANDARD
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
}`,qp=`#define TOON
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
}`,Kp=`#define TOON
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
}`,Yp=`uniform float size;
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
}`,$p=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Zp=`uniform vec3 color;
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
}`,Qp=`uniform float rotation;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:yu,alphahash_pars_fragment:Eu,alphamap_fragment:Su,alphamap_pars_fragment:Mu,alphatest_fragment:bu,alphatest_pars_fragment:Tu,aomap_fragment:Au,aomap_pars_fragment:Ru,batching_pars_vertex:wu,batching_vertex:Cu,begin_vertex:Iu,beginnormal_vertex:Ou,bsdfs:Du,iridescence_fragment:Lu,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Nu,clipping_planes_pars_fragment:Uu,clipping_planes_pars_vertex:ku,clipping_planes_vertex:Fu,color_fragment:Bu,color_pars_fragment:zu,color_pars_vertex:Hu,color_vertex:Gu,common:Vu,cube_uv_reflection_fragment:Wu,defaultnormal_vertex:Xu,displacementmap_pars_vertex:qu,displacementmap_vertex:Ku,emissivemap_fragment:Yu,emissivemap_pars_fragment:$u,colorspace_fragment:ju,colorspace_pars_fragment:Zu,envmap_fragment:Qu,envmap_common_pars_fragment:Ju,envmap_pars_fragment:ef,envmap_pars_vertex:tf,envmap_physical_pars_fragment:ff,envmap_vertex:nf,fog_vertex:rf,fog_pars_vertex:sf,fog_fragment:of,fog_pars_fragment:af,gradientmap_pars_fragment:cf,lightmap_pars_fragment:lf,lights_lambert_fragment:df,lights_lambert_pars_fragment:hf,lights_pars_begin:uf,lights_toon_fragment:pf,lights_toon_pars_fragment:mf,lights_phong_fragment:_f,lights_phong_pars_fragment:gf,lights_physical_fragment:vf,lights_physical_pars_fragment:xf,lights_fragment_begin:yf,lights_fragment_maps:Ef,lights_fragment_end:Sf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:Af,map_fragment:Rf,map_pars_fragment:wf,map_particle_fragment:Cf,map_particle_pars_fragment:If,metalnessmap_fragment:Of,metalnessmap_pars_fragment:Df,morphinstance_vertex:Lf,morphcolor_vertex:Pf,morphnormal_vertex:Nf,morphtarget_pars_vertex:Uf,morphtarget_vertex:kf,normal_fragment_begin:Ff,normal_fragment_maps:Bf,normal_pars_fragment:zf,normal_pars_vertex:Hf,normal_vertex:Gf,normalmap_pars_fragment:Vf,clearcoat_normal_fragment_begin:Wf,clearcoat_normal_fragment_maps:Xf,clearcoat_pars_fragment:qf,iridescence_pars_fragment:Kf,opaque_fragment:Yf,packing:$f,premultiplied_alpha_fragment:jf,project_vertex:Zf,dithering_fragment:Qf,dithering_pars_fragment:Jf,roughnessmap_fragment:ep,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:np,shadowmap_pars_vertex:ip,shadowmap_vertex:rp,shadowmask_pars_fragment:sp,skinbase_vertex:op,skinning_pars_vertex:ap,skinning_vertex:cp,skinnormal_vertex:lp,specularmap_fragment:dp,specularmap_pars_fragment:hp,tonemapping_fragment:up,tonemapping_pars_fragment:fp,transmission_fragment:pp,transmission_pars_fragment:mp,uv_pars_fragment:_p,uv_pars_vertex:gp,uv_vertex:vp,worldpos_vertex:xp,background_vert:yp,background_frag:Ep,backgroundCube_vert:Sp,backgroundCube_frag:Mp,cube_vert:bp,cube_frag:Tp,depth_vert:Ap,depth_frag:Rp,distanceRGBA_vert:wp,distanceRGBA_frag:Cp,equirect_vert:Ip,equirect_frag:Op,linedashed_vert:Dp,linedashed_frag:Lp,meshbasic_vert:Pp,meshbasic_frag:Np,meshlambert_vert:Up,meshlambert_frag:kp,meshmatcap_vert:Fp,meshmatcap_frag:Bp,meshnormal_vert:zp,meshnormal_frag:Hp,meshphong_vert:Gp,meshphong_frag:Vp,meshphysical_vert:Wp,meshphysical_frag:Xp,meshtoon_vert:qp,meshtoon_frag:Kp,points_vert:Yp,points_frag:$p,shadow_vert:jp,shadow_frag:Zp,sprite_vert:Qp,sprite_frag:Jp},Se={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Fn={basic:{uniforms:$t([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:$t([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new vt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:$t([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:$t([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:$t([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new vt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:$t([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:$t([Se.points,Se.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:$t([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:$t([Se.common,Se.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:$t([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:$t([Se.sprite,Se.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:$t([Se.common,Se.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:$t([Se.lights,Se.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Fn.physical={uniforms:$t([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const ys={r:0,b:0,g:0},wi=new Gn,em=new It;function tm(i,e,t,n,r,s,o){const a=new vt(0);let c=s===!0?0:1,l,h,d=null,f=0,p=null;function _(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function g(b){let S=!1;const w=_(b);w===null?u(a,c):w&&w.isColor&&(u(w,1),S=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){const w=_(S);w&&(w.isCubeTexture||w.mapping===qs)?(h===void 0&&(h=new _n(new Ei(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Mr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),wi.copy(S.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(em.makeRotationFromEuler(wi)),h.material.toneMapped=gt.getTransfer(w.colorSpace)!==St,(d!==w||f!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,f=w.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new _n(new Ks(2,2),new xi({name:"BackgroundMaterial",uniforms:Mr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=gt.getTransfer(w.colorSpace)!==St,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,f=w.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function u(b,S){b.getRGB(ys,Ql(i)),n.buffers.color.setClear(ys.r,ys.g,ys.b,S,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,u(a,c)},render:g,addToRenderList:m,dispose:T}}function nm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(E,D,Y,B,$){let oe=!1;const Q=d(B,Y,D);s!==Q&&(s=Q,l(s.object)),oe=p(E,B,Y,$),oe&&_(E,B,Y,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,S(E,D,Y,B),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function d(E,D,Y){const B=Y.wireframe===!0;let $=n[E.id];$===void 0&&($={},n[E.id]=$);let oe=$[D.id];oe===void 0&&(oe={},$[D.id]=oe);let Q=oe[B];return Q===void 0&&(Q=f(c()),oe[B]=Q),Q}function f(E){const D=[],Y=[],B=[];for(let $=0;$<t;$++)D[$]=0,Y[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Y,attributeDivisors:B,object:E,attributes:{},index:null}}function p(E,D,Y,B){const $=s.attributes,oe=D.attributes;let Q=0;const ne=Y.getAttributes();for(const q in ne)if(ne[q].location>=0){const Re=$[q];let De=oe[q];if(De===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(De=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(De=E.instanceColor)),Re===void 0||Re.attribute!==De||De&&Re.data!==De.data)return!0;Q++}return s.attributesNum!==Q||s.index!==B}function _(E,D,Y,B){const $={},oe=D.attributes;let Q=0;const ne=Y.getAttributes();for(const q in ne)if(ne[q].location>=0){let Re=oe[q];Re===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(Re=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(Re=E.instanceColor));const De={};De.attribute=Re,Re&&Re.data&&(De.data=Re.data),$[q]=De,Q++}s.attributes=$,s.attributesNum=Q,s.index=B}function g(){const E=s.newAttributes;for(let D=0,Y=E.length;D<Y;D++)E[D]=0}function m(E){u(E,0)}function u(E,D){const Y=s.newAttributes,B=s.enabledAttributes,$=s.attributeDivisors;Y[E]=1,B[E]===0&&(i.enableVertexAttribArray(E),B[E]=1),$[E]!==D&&(i.vertexAttribDivisor(E,D),$[E]=D)}function T(){const E=s.newAttributes,D=s.enabledAttributes;for(let Y=0,B=D.length;Y<B;Y++)D[Y]!==E[Y]&&(i.disableVertexAttribArray(Y),D[Y]=0)}function b(E,D,Y,B,$,oe,Q){Q===!0?i.vertexAttribIPointer(E,D,Y,$,oe):i.vertexAttribPointer(E,D,Y,B,$,oe)}function S(E,D,Y,B){g();const $=B.attributes,oe=Y.getAttributes(),Q=D.defaultAttributeValues;for(const ne in oe){const q=oe[ne];if(q.location>=0){let de=$[ne];if(de===void 0&&(ne==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),ne==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),de!==void 0){const Re=de.normalized,De=de.itemSize,et=e.get(de);if(et===void 0)continue;const st=et.buffer,j=et.type,_e=et.bytesPerElement,Oe=j===i.INT||j===i.UNSIGNED_INT||de.gpuType===za;if(de.isInterleavedBufferAttribute){const ve=de.data,ze=ve.stride,ht=de.offset;if(ve.isInstancedInterleavedBuffer){for(let He=0;He<q.locationSize;He++)u(q.location+He,ve.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let He=0;He<q.locationSize;He++)m(q.location+He);i.bindBuffer(i.ARRAY_BUFFER,st);for(let He=0;He<q.locationSize;He++)b(q.location+He,De/q.locationSize,j,Re,ze*_e,(ht+De/q.locationSize*He)*_e,Oe)}else{if(de.isInstancedBufferAttribute){for(let ve=0;ve<q.locationSize;ve++)u(q.location+ve,de.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<q.locationSize;ve++)m(q.location+ve);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ve=0;ve<q.locationSize;ve++)b(q.location+ve,De/q.locationSize,j,Re,De*_e,De/q.locationSize*ve*_e,Oe)}}else if(Q!==void 0){const Re=Q[ne];if(Re!==void 0)switch(Re.length){case 2:i.vertexAttrib2fv(q.location,Re);break;case 3:i.vertexAttrib3fv(q.location,Re);break;case 4:i.vertexAttrib4fv(q.location,Re);break;default:i.vertexAttrib1fv(q.location,Re)}}}}T()}function w(){P();for(const E in n){const D=n[E];for(const Y in D){const B=D[Y];for(const $ in B)h(B[$].object),delete B[$];delete D[Y]}delete n[E]}}function R(E){if(n[E.id]===void 0)return;const D=n[E.id];for(const Y in D){const B=D[Y];for(const $ in B)h(B[$].object),delete B[$];delete D[Y]}delete n[E.id]}function I(E){for(const D in n){const Y=n[D];if(Y[E.id]===void 0)continue;const B=Y[E.id];for(const $ in B)h(B[$].object),delete B[$];delete Y[E.id]}}function P(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function im(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];t.update(p,n,1)}function c(l,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g]*f[g];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Dn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const P=I===Wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==si&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ti&&!P)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:w,maxSamples:R}}function sm(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Li,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!r||_===null||_.length===0||s&&!m)s?h(null):l();else{const T=s?0:n,b=T*4;let S=u.clippingState||null;c.value=S,S=h(_,f,b,p);for(let w=0;w!==b;++w)S[w]=t[w];u.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const u=p+g*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<u)&&(m=new Float32Array(u));for(let b=0,S=p;b!==g;++b,S+=4)o.copy(d[b]).applyMatrix4(T,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function om(i){let e=new WeakMap;function t(o,a){return a===Jo?o.mapping=yr:a===ea&&(o.mapping=Er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jo||a===ea)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ou(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const pr=4,Pc=[.125,.215,.35,.446,.526,.582],ki=20,Ao=new id,Nc=new vt;let Ro=null,wo=0,Co=0,Io=!1;const Pi=(1+Math.sqrt(5))/2,or=1/Pi,Uc=[new W(-Pi,or,0),new W(Pi,or,0),new W(-or,0,Pi),new W(or,0,Pi),new W(0,Pi,-or),new W(0,Pi,or),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],am=new W;class kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=am}=s;Ro=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ro,wo,Co),this._renderer.xr.enabled=Io,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ro=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Wr,format:Dn,colorSpace:Sr,depthBuffer:!1},r=Fc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cm(s)),this._blurMaterial=lm(s,e,t)}return r}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,Ao)}_sceneToCubeUV(e,t,n,r,s){const c=new Sn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Nc),d.toneMapping=gi,d.autoClear=!1;const _=new $l({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new _n(new Ei,_);let m=!1;const u=e.background;u?u.isColor&&(_.color.copy(u),e.background=null,m=!0):(_.color.copy(Nc),m=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):b===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));const S=this._cubeSize;Es(r,b*S,T>2?S:0,S,S),d.setRenderTarget(r),m&&d.render(g,c),d.render(e,c)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===yr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Es(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ao)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Uc[(r-s-1)%Uc.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new _n(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ki-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):ki;m>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const u=[];let T=0;for(let I=0;I<ki;++I){const P=I/g,M=Math.exp(-P*P/2);u.push(M),I===0?T+=M:I<m&&(T+=2*M)}for(let I=0;I<u.length;I++)u[I]=u[I]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;const S=this._sizeLods[r],w=3*S*(r>b-pr?r-b+pr:0),R=4*(this._cubeSize-S);Es(t,w,R,3*S,2*S),c.setRenderTarget(t),c.render(d,Ao)}}function cm(i){const e=[],t=[],n=[];let r=i;const s=i-pr+1+Pc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-pr?c=Pc[o-i+pr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,g=3,m=2,u=1,T=new Float32Array(g*_*p),b=new Float32Array(m*_*p),S=new Float32Array(u*_*p);for(let R=0;R<p;R++){const I=R%3*2/3-1,P=R>2?0:-1,M=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];T.set(M,g*_*R),b.set(f,m*_*R);const E=[R,R,R,R,R,R];S.set(E,u*_*R)}const w=new yi;w.setAttribute("position",new Hn(T,g)),w.setAttribute("uv",new Hn(b,m)),w.setAttribute("faceIndex",new Hn(S,u)),e.push(w),r>pr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fc(i,e,t){const n=new Gi(i,e,t);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function lm(i,e,t){const n=new Float32Array(ki),r=new W(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ja(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Bc(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function zc(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function ja(){return`

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
	`}function dm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Jo||c===ea,h=c===yr||c===Er;if(l||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new kc(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new kc(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function hm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function um(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(d){const f=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const T=p.array;g=p.version;for(let b=0,S=T.length;b<S;b+=3){const w=T[b+0],R=T[b+1],I=T[b+2];f.push(w,R,R,I,I,w)}}else if(_!==void 0){const T=_.array;g=_.version;for(let b=0,S=T.length/3-1;b<S;b+=3){const w=b+0,R=b+1,I=b+2;f.push(w,R,R,I,I,w)}}else return;const m=new(Xl(f)?Zl:jl)(f,1);m.version=g;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function fm(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function l(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,f*o,_),t.update(p,n,_))}function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];t.update(m,n,1)}function d(f,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/o,p[u],g[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,g,0,_);let u=0;for(let T=0;T<_;T++)u+=p[T]*g[T];t.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function pm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function mm(i,e,t){const n=new WeakMap,r=new Ct;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let S=a.attributes.position.count*b,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*w*4*d),I=new ql(R,S,w,d);I.type=ti,I.needsUpdate=!0;const P=b*4;for(let E=0;E<d;E++){const D=m[E],Y=u[E],B=T[E],$=S*w*4*E;for(let oe=0;oe<D.count;oe++){const Q=oe*P;p===!0&&(r.fromBufferAttribute(D,oe),R[$+Q+0]=r.x,R[$+Q+1]=r.y,R[$+Q+2]=r.z,R[$+Q+3]=0),_===!0&&(r.fromBufferAttribute(Y,oe),R[$+Q+4]=r.x,R[$+Q+5]=r.y,R[$+Q+6]=r.z,R[$+Q+7]=0),g===!0&&(r.fromBufferAttribute(B,oe),R[$+Q+8]=r.x,R[$+Q+9]=r.y,R[$+Q+10]=r.z,R[$+Q+11]=B.itemSize===4?r.w:1)}}f={count:d,texture:I,size:new yt(S,w)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function _m(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const sd=new rn,Hc=new td(1,1),od=new ql,ad=new Gh,cd=new ed,Gc=[],Vc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),qc=new Float32Array(4);function Tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Gc[r];if(s===void 0&&(s=new Float32Array(r),Gc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $s(i,e){let t=Vc[e];t===void 0&&(t=new Int32Array(e),Vc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function Em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,n))return;qc.set(n),i.uniformMatrix2fv(this.addr,!1,qc),Ft(t,n)}}function Sm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,n))return;Xc.set(n),i.uniformMatrix3fv(this.addr,!1,Xc),Ft(t,n)}}function Mm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,n))return;Wc.set(n),i.uniformMatrix4fv(this.addr,!1,Wc),Ft(t,n)}}function bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function Dm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Hc.compareFunction=Wl,s=Hc):s=sd,t.setTexture2D(e||s,r)}function Lm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ad,r)}function Pm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||cd,r)}function Nm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||od,r)}function Um(i){switch(i){case 5126:return gm;case 35664:return vm;case 35665:return xm;case 35666:return ym;case 35674:return Em;case 35675:return Sm;case 35676:return Mm;case 5124:case 35670:return bm;case 35667:case 35671:return Tm;case 35668:case 35672:return Am;case 35669:case 35673:return Rm;case 5125:return wm;case 36294:return Cm;case 36295:return Im;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Nm}}function km(i,e){i.uniform1fv(this.addr,e)}function Fm(i,e){const t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Bm(i,e){const t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function zm(i,e){const t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function Hm(i,e){const t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Gm(i,e){const t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vm(i,e){const t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wm(i,e){i.uniform1iv(this.addr,e)}function Xm(i,e){i.uniform2iv(this.addr,e)}function qm(i,e){i.uniform3iv(this.addr,e)}function Km(i,e){i.uniform4iv(this.addr,e)}function Ym(i,e){i.uniform1uiv(this.addr,e)}function $m(i,e){i.uniform2uiv(this.addr,e)}function jm(i,e){i.uniform3uiv(this.addr,e)}function Zm(i,e){i.uniform4uiv(this.addr,e)}function Qm(i,e,t){const n=this.cache,r=e.length,s=$s(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||sd,s[o])}function Jm(i,e,t){const n=this.cache,r=e.length,s=$s(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ad,s[o])}function e_(i,e,t){const n=this.cache,r=e.length,s=$s(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||cd,s[o])}function t_(i,e,t){const n=this.cache,r=e.length,s=$s(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||od,s[o])}function n_(i){switch(i){case 5126:return km;case 35664:return Fm;case 35665:return Bm;case 35666:return zm;case 35674:return Hm;case 35675:return Gm;case 35676:return Vm;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return Km;case 5125:return Ym;case 36294:return $m;case 36295:return jm;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}class i_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Um(t.type)}}class r_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n_(t.type)}}class s_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function Kc(i,e){i.seq.push(e),i.map[e.id]=e}function o_(i,e,t){const n=i.name,r=n.length;for(Oo.lastIndex=0;;){const s=Oo.exec(n),o=Oo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Kc(t,l===void 0?new i_(a,i,e):new r_(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new s_(a),Kc(t,d)),t=d}}}class ks{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);o_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Yc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const a_=37297;let c_=0;function l_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const $c=new Qe;function d_(i){gt._getMatrix($c,gt.workingColorSpace,i);const e=`mat3( ${$c.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Hs:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+l_(i.getShaderSource(e),o)}else return r}function h_(i,e){const t=d_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function u_(i,e){let t;switch(e){case ph:t="Linear";break;case mh:t="Reinhard";break;case _h:t="Cineon";break;case gh:t="ACESFilmic";break;case xh:t="AgX";break;case yh:t="Neutral";break;case vh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ss=new W;function f_(){gt.getLuminanceCoefficients(Ss);const i=Ss.x.toFixed(4),e=Ss.y.toFixed(4),t=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function m_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function __(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Fr(i){return i!==""}function Zc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(g_,x_)}const v_=new Map;function x_(i,e){let t=Je[e];if(t===void 0){const n=v_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ia(t)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(i){return i.replace(y_,E_)}function E_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function el(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function S_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function M_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case Er:e="ENVMAP_TYPE_CUBE";break;case qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Er&&(e="ENVMAP_MODE_REFRACTION"),e}function T_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ba:e="ENVMAP_BLENDING_MULTIPLY";break;case uh:e="ENVMAP_BLENDING_MIX";break;case fh:e="ENVMAP_BLENDING_ADD";break}return e}function A_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function R_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=S_(t),l=M_(t),h=b_(t),d=T_(t),f=A_(t),p=p_(t),_=m_(s),g=r.createProgram();let m,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fr).join(`
`),u.length>0&&(u+=`
`)):(m=[el(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),u=[el(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Je.tonemapping_pars_fragment:"",t.toneMapping!==gi?u_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,h_("linearToOutputTexel",t.outputColorSpace),f_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),o=Ia(o),o=Zc(o,t),o=Qc(o,t),a=Ia(a),a=Zc(a,t),a=Qc(a,t),o=Jc(o),a=Jc(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=T+m+o,S=T+u+a,w=Yc(r,r.VERTEX_SHADER,b),R=Yc(r,r.FRAGMENT_SHADER,S);r.attachShader(g,w),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function I(D){if(i.debug.checkShaderErrors){const Y=r.getProgramInfoLog(g).trim(),B=r.getShaderInfoLog(w).trim(),$=r.getShaderInfoLog(R).trim();let oe=!0,Q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,w,R);else{const ne=jc(r,w,"vertex"),q=jc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+ne+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(B===""||$==="")&&(Q=!1);Q&&(D.diagnostics={runnable:oe,programLog:Y,vertexShader:{log:B,prefix:m},fragmentShader:{log:$,prefix:u}})}r.deleteShader(w),r.deleteShader(R),P=new ks(r,g),M=__(r,g)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(g,a_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}let w_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new I_(e),t.set(e,n)),n}}class I_{constructor(e){this.id=w_++,this.code=e,this.usedTimes=0}}function O_(i,e,t,n,r,s,o){const a=new Kl,c=new C_,l=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,E,D,Y,B){const $=Y.fog,oe=B.geometry,Q=M.isMeshStandardMaterial?Y.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),q=ne&&ne.mapping===qs?ne.image.height:null,de=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Re=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,De=Re!==void 0?Re.length:0;let et=0;oe.morphAttributes.position!==void 0&&(et=1),oe.morphAttributes.normal!==void 0&&(et=2),oe.morphAttributes.color!==void 0&&(et=3);let st,j,_e,Oe;if(de){const xt=Fn[de];st=xt.vertexShader,j=xt.fragmentShader}else st=M.vertexShader,j=M.fragmentShader,c.update(M),_e=c.getVertexShaderID(M),Oe=c.getFragmentShaderID(M);const ve=i.getRenderTarget(),ze=i.state.buffers.depth.getReversed(),ht=B.isInstancedMesh===!0,He=B.isBatchedMesh===!0,wt=!!M.map,Rt=!!M.matcap,Ze=!!ne,O=!!M.aoMap,Mt=!!M.lightMap,it=!!M.bumpMap,tt=!!M.normalMap,Ue=!!M.displacementMap,bt=!!M.emissiveMap,Ne=!!M.metalnessMap,A=!!M.roughnessMap,v=M.anisotropy>0,k=M.clearcoat>0,ee=M.dispersion>0,se=M.iridescence>0,J=M.sheen>0,ge=M.transmission>0,ue=v&&!!M.anisotropyMap,Te=k&&!!M.clearcoatMap,ot=k&&!!M.clearcoatNormalMap,re=k&&!!M.clearcoatRoughnessMap,Ae=se&&!!M.iridescenceMap,Be=se&&!!M.iridescenceThicknessMap,We=J&&!!M.sheenColorMap,we=J&&!!M.sheenRoughnessMap,rt=!!M.specularMap,$e=!!M.specularColorMap,Et=!!M.specularIntensityMap,L=ge&&!!M.transmissionMap,ye=ge&&!!M.thicknessMap,V=!!M.gradientMap,Z=!!M.alphaMap,be=M.alphaTest>0,me=!!M.alphaHash,je=!!M.extensions;let At=gi;M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(At=i.toneMapping);const ft={shaderID:de,shaderType:M.type,shaderName:M.name,vertexShader:st,fragmentShader:j,defines:M.defines,customVertexShaderID:_e,customFragmentShaderID:Oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:He,batchingColor:He&&B._colorsTexture!==null,instancing:ht,instancingColor:ht&&B.instanceColor!==null,instancingMorph:ht&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Sr,alphaToCoverage:!!M.alphaToCoverage,map:wt,matcap:Rt,envMap:Ze,envMapMode:Ze&&ne.mapping,envMapCubeUVHeight:q,aoMap:O,lightMap:Mt,bumpMap:it,normalMap:tt,displacementMap:f&&Ue,emissiveMap:bt,normalMapObjectSpace:tt&&M.normalMapType===bh,normalMapTangentSpace:tt&&M.normalMapType===Vl,metalnessMap:Ne,roughnessMap:A,anisotropy:v,anisotropyMap:ue,clearcoat:k,clearcoatMap:Te,clearcoatNormalMap:ot,clearcoatRoughnessMap:re,dispersion:ee,iridescence:se,iridescenceMap:Ae,iridescenceThicknessMap:Be,sheen:J,sheenColorMap:We,sheenRoughnessMap:we,specularMap:rt,specularColorMap:$e,specularIntensityMap:Et,transmission:ge,transmissionMap:L,thicknessMap:ye,gradientMap:V,opaque:M.transparent===!1&&M.blending===mr&&M.alphaToCoverage===!1,alphaMap:Z,alphaTest:be,alphaHash:me,combine:M.combine,mapUv:wt&&g(M.map.channel),aoMapUv:O&&g(M.aoMap.channel),lightMapUv:Mt&&g(M.lightMap.channel),bumpMapUv:it&&g(M.bumpMap.channel),normalMapUv:tt&&g(M.normalMap.channel),displacementMapUv:Ue&&g(M.displacementMap.channel),emissiveMapUv:bt&&g(M.emissiveMap.channel),metalnessMapUv:Ne&&g(M.metalnessMap.channel),roughnessMapUv:A&&g(M.roughnessMap.channel),anisotropyMapUv:ue&&g(M.anisotropyMap.channel),clearcoatMapUv:Te&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(M.sheenRoughnessMap.channel),specularMapUv:rt&&g(M.specularMap.channel),specularColorMapUv:$e&&g(M.specularColorMap.channel),specularIntensityMapUv:Et&&g(M.specularIntensityMap.channel),transmissionMapUv:L&&g(M.transmissionMap.channel),thicknessMapUv:ye&&g(M.thicknessMap.channel),alphaMapUv:Z&&g(M.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(tt||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!oe.attributes.uv&&(wt||Z),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ze,skinning:B.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:et,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:wt&&M.map.isVideoTexture===!0&&gt.getTransfer(M.map.colorSpace)===St,decodeVideoTextureEmissive:bt&&M.emissiveMap.isVideoTexture===!0&&gt.getTransfer(M.emissiveMap.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jn,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:je&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&M.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function u(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)E.push(D),E.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(T(E,M),b(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function T(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function b(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const E=_[M.type];let D;if(E){const Y=Fn[E];D=nu.clone(Y.uniforms)}else D=M.uniforms;return D}function w(M,E){let D;for(let Y=0,B=h.length;Y<B;Y++){const $=h[Y];if($.cacheKey===E){D=$,++D.usedTimes;break}}return D===void 0&&(D=new R_(i,E,M,s),h.push(D)),D}function R(M){if(--M.usedTimes===0){const E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function I(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:w,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:P}}function D_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function L_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,p,_,g,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=g,u.group=m),e++,u}function a(d,f,p,_,g,m){const u=o(d,f,p,_,g,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):t.push(u)}function c(d,f,p,_,g,m){const u=o(d,f,p,_,g,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||L_),n.length>1&&n.sort(f||tl),r.length>1&&r.sort(f||tl)}function h(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function P_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new nl,i.set(n,[o])):r>=s.length?(o=new nl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function N_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new vt};break;case"SpotLight":t={position:new W,direction:new W,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function U_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let k_=0;function F_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function B_(i){const e=new N_,t=U_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);const r=new W,s=new It,o=new It;function a(l){let h=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,g=0,m=0,u=0,T=0,b=0,S=0,w=0,R=0,I=0;l.sort(F_);for(let M=0,E=l.length;M<E;M++){const D=l[M],Y=D.color,B=D.intensity,$=D.distance,oe=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=Y.r*B,d+=Y.g*B,f+=Y.b*B;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(D.sh.coefficients[Q],B);I++}else if(D.isDirectionalLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=oe,n.directionalShadowMatrix[p]=D.shadow.matrix,T++}n.directional[p]=Q,p++}else if(D.isSpotLight){const Q=e.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(Y).multiplyScalar(B),Q.distance=$,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,n.spot[g]=Q;const ne=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,ne.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[g]=ne.matrix,D.castShadow){const q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=oe,S++}g++}else if(D.isRectAreaLight){const Q=e.get(D);Q.color.copy(Y).multiplyScalar(B),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Q,m++}else if(D.isPointLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const ne=D.shadow,q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,q.shadowCameraNear=ne.camera.near,q.shadowCameraFar=ne.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=oe,n.pointShadowMatrix[_]=D.shadow.matrix,b++}n.point[_]=Q,_++}else if(D.isHemisphereLight){const Q=e.get(D);Q.skyColor.copy(D.color).multiplyScalar(B),Q.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[u]=Q,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==T||P.numPointShadows!==b||P.numSpotShadows!==S||P.numSpotMaps!==w||P.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,P.directionalLength=p,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=T,P.numPointShadows=b,P.numSpotShadows=S,P.numSpotMaps=w,P.numLightProbes=I,n.version=k_++)}function c(l,h){let d=0,f=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let u=0,T=l.length;u<T;u++){const b=l[u];if(b.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(b.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function il(i){const e=new B_(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function z_(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new il(i),e.set(r,[a])):s>=o.length?(a=new il(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`;function V_(i,e,t){let n=new $a;const r=new yt,s=new yt,o=new Ct,a=new hu({depthPacking:Mh}),c=new uu,l={},h=t.maxTextureSize,d={[vi]:nn,[nn]:vi,[Jn]:Jn},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:H_,fragmentShader:G_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new yi;_.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new _n(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let u=this.type;this.render=function(R,I,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),E=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(_i),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const B=u!==jn&&this.type===jn,$=u===jn&&this.type!==jn;for(let oe=0,Q=R.length;oe<Q;oe++){const ne=R[oe],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const de=q.getFrameExtents();if(r.multiply(de),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/de.x),r.x=s.x*de.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/de.y),r.y=s.y*de.y,q.mapSize.y=s.y)),q.map===null||B===!0||$===!0){const De=this.type!==jn?{minFilter:Ln,magFilter:Ln}:{};q.map!==null&&q.map.dispose(),q.map=new Gi(r.x,r.y,De),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const Re=q.getViewportCount();for(let De=0;De<Re;De++){const et=q.getViewport(De);o.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),Y.viewport(o),q.updateMatrices(ne,De),n=q.getFrustum(),S(I,P,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===jn&&T(q,P),q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(M,E,D)};function T(R,I){const P=e.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Gi(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,P,f,g,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,P,p,g,null)}function b(R,I,P,M){let E=null;const D=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)E=D;else if(E=P.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const Y=E.uuid,B=I.uuid;let $=l[Y];$===void 0&&($={},l[Y]=$);let oe=$[B];oe===void 0&&(oe=E.clone(),$[B]=oe,I.addEventListener("dispose",w)),E=oe}if(E.visible=I.visible,E.wireframe=I.wireframe,M===jn?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:d[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=i.properties.get(E);Y.light=P}return E}function S(R,I,P,M,E){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===jn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const B=e.update(R),$=R.material;if(Array.isArray($)){const oe=B.groups;for(let Q=0,ne=oe.length;Q<ne;Q++){const q=oe[Q],de=$[q.materialIndex];if(de&&de.visible){const Re=b(R,de,M,E);R.onBeforeShadow(i,R,I,P,B,Re,q),i.renderBufferDirect(P,null,B,Re,R,q),R.onAfterShadow(i,R,I,P,B,Re,q)}}}else if($.visible){const oe=b(R,$,M,E);R.onBeforeShadow(i,R,I,P,B,oe,null),i.renderBufferDirect(P,null,B,oe,R,null),R.onAfterShadow(i,R,I,P,B,oe,null)}}const Y=R.children;for(let B=0,$=Y.length;B<$;B++)S(Y[B],I,P,M,E)}function w(R){R.target.removeEventListener("dispose",w);for(const P in l){const M=l[P],E=R.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const W_={[qo]:Ko,[Yo]:Zo,[$o]:Qo,[xr]:jo,[Ko]:qo,[Zo]:Yo,[Qo]:$o,[jo]:xr};function X_(i,e){function t(){let L=!1;const ye=new Ct;let V=null;const Z=new Ct(0,0,0,0);return{setMask:function(be){V!==be&&!L&&(i.colorMask(be,be,be,be),V=be)},setLocked:function(be){L=be},setClear:function(be,me,je,At,ft){ft===!0&&(be*=At,me*=At,je*=At),ye.set(be,me,je,At),Z.equals(ye)===!1&&(i.clearColor(be,me,je,At),Z.copy(ye))},reset:function(){L=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,ye=!1,V=null,Z=null,be=null;return{setReversed:function(me){if(ye!==me){const je=e.get("EXT_clip_control");me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),ye=me;const At=be;be=null,this.setClear(At)}},getReversed:function(){return ye},setTest:function(me){me?ve(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(me){V!==me&&!L&&(i.depthMask(me),V=me)},setFunc:function(me){if(ye&&(me=W_[me]),Z!==me){switch(me){case qo:i.depthFunc(i.NEVER);break;case Ko:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case $o:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case Zo:i.depthFunc(i.GREATER);break;case Qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=me}},setLocked:function(me){L=me},setClear:function(me){be!==me&&(ye&&(me=1-me),i.clearDepth(me),be=me)},reset:function(){L=!1,V=null,Z=null,be=null,ye=!1}}}function r(){let L=!1,ye=null,V=null,Z=null,be=null,me=null,je=null,At=null,ft=null;return{setTest:function(xt){L||(xt?ve(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(xt){ye!==xt&&!L&&(i.stencilMask(xt),ye=xt)},setFunc:function(xt,sn,Le){(V!==xt||Z!==sn||be!==Le)&&(i.stencilFunc(xt,sn,Le),V=xt,Z=sn,be=Le)},setOp:function(xt,sn,Le){(me!==xt||je!==sn||At!==Le)&&(i.stencilOp(xt,sn,Le),me=xt,je=sn,At=Le)},setLocked:function(xt){L=xt},setClear:function(xt){ft!==xt&&(i.clearStencil(xt),ft=xt)},reset:function(){L=!1,ye=null,V=null,Z=null,be=null,me=null,je=null,At=null,ft=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,u=null,T=null,b=null,S=null,w=null,R=null,I=new vt(0,0,0),P=0,M=!1,E=null,D=null,Y=null,B=null,$=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ne=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=ne>=2);let de=null,Re={};const De=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),st=new Ct().fromArray(De),j=new Ct().fromArray(et);function _e(L,ye,V,Z){const be=new Uint8Array(4),me=i.createTexture();i.bindTexture(L,me),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<V;je++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(ye+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return me}const Oe={};Oe[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(i.DEPTH_TEST),o.setFunc(xr),it(!1),tt(ac),ve(i.CULL_FACE),O(_i);function ve(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function ze(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function ht(L,ye){return d[L]!==ye?(i.bindFramebuffer(L,ye),d[L]=ye,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ye),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function He(L,ye){let V=p,Z=!1;if(L){V=f.get(ye),V===void 0&&(V=[],f.set(ye,V));const be=L.textures;if(V.length!==be.length||V[0]!==i.COLOR_ATTACHMENT0){for(let me=0,je=be.length;me<je;me++)V[me]=i.COLOR_ATTACHMENT0+me;V.length=be.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function wt(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const Rt={[Ui]:i.FUNC_ADD,[$d]:i.FUNC_SUBTRACT,[jd]:i.FUNC_REVERSE_SUBTRACT};Rt[Zd]=i.MIN,Rt[Qd]=i.MAX;const Ze={[Jd]:i.ZERO,[eh]:i.ONE,[th]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[ah]:i.SRC_ALPHA_SATURATE,[sh]:i.DST_COLOR,[ih]:i.DST_ALPHA,[nh]:i.ONE_MINUS_SRC_COLOR,[Xo]:i.ONE_MINUS_SRC_ALPHA,[oh]:i.ONE_MINUS_DST_COLOR,[rh]:i.ONE_MINUS_DST_ALPHA,[ch]:i.CONSTANT_COLOR,[lh]:i.ONE_MINUS_CONSTANT_COLOR,[dh]:i.CONSTANT_ALPHA,[hh]:i.ONE_MINUS_CONSTANT_ALPHA};function O(L,ye,V,Z,be,me,je,At,ft,xt){if(L===_i){g===!0&&(ze(i.BLEND),g=!1);return}if(g===!1&&(ve(i.BLEND),g=!0),L!==Yd){if(L!==m||xt!==M){if((u!==Ui||S!==Ui)&&(i.blendEquation(i.FUNC_ADD),u=Ui,S=Ui),xt)switch(L){case mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cc:i.blendFunc(i.ONE,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,b=null,w=null,R=null,I.set(0,0,0),P=0,m=L,M=xt}return}be=be||ye,me=me||V,je=je||Z,(ye!==u||be!==S)&&(i.blendEquationSeparate(Rt[ye],Rt[be]),u=ye,S=be),(V!==T||Z!==b||me!==w||je!==R)&&(i.blendFuncSeparate(Ze[V],Ze[Z],Ze[me],Ze[je]),T=V,b=Z,w=me,R=je),(At.equals(I)===!1||ft!==P)&&(i.blendColor(At.r,At.g,At.b,ft),I.copy(At),P=ft),m=L,M=!1}function Mt(L,ye){L.side===Jn?ze(i.CULL_FACE):ve(i.CULL_FACE);let V=L.side===nn;ye&&(V=!V),it(V),L.blending===mr&&L.transparent===!1?O(_i):O(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),bt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(L){E!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),E=L)}function tt(L){L!==Xd?(ve(i.CULL_FACE),L!==D&&(L===ac?i.cullFace(i.BACK):L===qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),D=L}function Ue(L){L!==Y&&(Q&&i.lineWidth(L),Y=L)}function bt(L,ye,V){L?(ve(i.POLYGON_OFFSET_FILL),(B!==ye||$!==V)&&(i.polygonOffset(ye,V),B=ye,$=V)):ze(i.POLYGON_OFFSET_FILL)}function Ne(L){L?ve(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+oe-1),de!==L&&(i.activeTexture(L),de=L)}function v(L,ye,V){V===void 0&&(de===null?V=i.TEXTURE0+oe-1:V=de);let Z=Re[V];Z===void 0&&(Z={type:void 0,texture:void 0},Re[V]=Z),(Z.type!==L||Z.texture!==ye)&&(de!==V&&(i.activeTexture(V),de=V),i.bindTexture(L,ye||Oe[L]),Z.type=L,Z.texture=ye)}function k(){const L=Re[de];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(L){st.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),st.copy(L))}function we(L){j.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function rt(L,ye){let V=l.get(ye);V===void 0&&(V=new WeakMap,l.set(ye,V));let Z=V.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(ye,L.name),V.set(L,Z))}function $e(L,ye){const Z=l.get(ye).get(L);c.get(ye)!==Z&&(i.uniformBlockBinding(ye,Z,L.__bindingPointIndex),c.set(ye,Z))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},de=null,Re={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,u=null,T=null,b=null,S=null,w=null,R=null,I=new vt(0,0,0),P=0,M=!1,E=null,D=null,Y=null,B=null,$=null,st.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:ze,bindFramebuffer:ht,drawBuffers:He,useProgram:wt,setBlending:O,setMaterial:Mt,setFlipSided:it,setCullFace:tt,setLineWidth:Ue,setPolygonOffset:bt,setScissorTest:Ne,activeTexture:A,bindTexture:v,unbindTexture:k,compressedTexImage2D:ee,compressedTexImage3D:se,texImage2D:Ae,texImage3D:Be,updateUBOMapping:rt,uniformBlockBinding:$e,texStorage2D:ot,texStorage3D:re,texSubImage2D:J,texSubImage3D:ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:Te,scissor:We,viewport:we,reset:Et}}function q_(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,v){return p?new OffscreenCanvas(A,v):Vs("canvas")}function g(A,v,k){let ee=1;const se=Ne(A);if((se.width>k||se.height>k)&&(ee=k/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(ee*se.width),ge=Math.floor(ee*se.height);d===void 0&&(d=_(J,ge));const ue=v?_(J,ge):d;return ue.width=J,ue.height=ge,ue.getContext("2d").drawImage(A,0,0,J,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+J+"x"+ge+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,v,k,ee,se=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=v;if(v===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),v===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),v===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),v===i.RGBA){const ge=se?Hs:gt.getTransfer(ee);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=ge===St?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(A,v){let k;return A?v===null||v===Hi||v===zr?k=i.DEPTH24_STENCIL8:v===ti?k=i.DEPTH32F_STENCIL8:v===Br&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hi||v===zr?k=i.DEPTH_COMPONENT24:v===ti?k=i.DEPTH_COMPONENT32F:v===Br&&(k=i.DEPTH_COMPONENT16),k}function w(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ln&&A.minFilter!==Bn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function R(A){const v=A.target;v.removeEventListener("dispose",R),P(v),v.isVideoTexture&&h.delete(v)}function I(A){const v=A.target;v.removeEventListener("dispose",I),E(v)}function P(A){const v=n.get(A);if(v.__webglInit===void 0)return;const k=A.source,ee=f.get(k);if(ee){const se=ee[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(A),Object.keys(ee).length===0&&f.delete(k)}n.remove(A)}function M(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const k=A.source,ee=f.get(k);delete ee[v.__cacheKey],o.memory.textures--}function E(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(v.__webglFramebuffer[ee]))for(let se=0;se<v.__webglFramebuffer[ee].length;se++)i.deleteFramebuffer(v.__webglFramebuffer[ee][se]);else i.deleteFramebuffer(v.__webglFramebuffer[ee]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ee])}else{if(Array.isArray(v.__webglFramebuffer))for(let ee=0;ee<v.__webglFramebuffer.length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[ee]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ee=0;ee<v.__webglColorRenderbuffer.length;ee++)v.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ee]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=A.textures;for(let ee=0,se=k.length;ee<se;ee++){const J=n.get(k[ee]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(k[ee])}n.remove(A)}let D=0;function Y(){D=0}function B(){const A=D;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),D+=1,A}function $(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function oe(A,v){const k=n.get(A);if(A.isVideoTexture&&Ue(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,A,v);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function Q(A,v){const k=n.get(A);if(A.version>0&&k.__version!==A.version){j(k,A,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function ne(A,v){const k=n.get(A);if(A.version>0&&k.__version!==A.version){j(k,A,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function q(A,v){const k=n.get(A);if(A.version>0&&k.__version!==A.version){_e(k,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const de={[ta]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},Re={[Ln]:i.NEAREST,[Eh]:i.NEAREST_MIPMAP_NEAREST,[ns]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},De={[Th]:i.NEVER,[Oh]:i.ALWAYS,[Ah]:i.LESS,[Wl]:i.LEQUAL,[Rh]:i.EQUAL,[Ih]:i.GEQUAL,[wh]:i.GREATER,[Ch]:i.NOTEQUAL};function et(A,v){if(v.type===ti&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Bn||v.magFilter===eo||v.magFilter===ns||v.magFilter===zi||v.minFilter===Bn||v.minFilter===eo||v.minFilter===ns||v.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,de[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,de[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,de[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Re[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Re[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,De[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ln||v.minFilter!==ns&&v.minFilter!==zi||v.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function st(A,v){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",R));const ee=v.source;let se=f.get(ee);se===void 0&&(se={},f.set(ee,se));const J=$(v);if(J!==A.__cacheKey){se[J]===void 0&&(se[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),se[J].usedTimes++;const ge=se[A.__cacheKey];ge!==void 0&&(se[A.__cacheKey].usedTimes--,ge.usedTimes===0&&M(v)),A.__cacheKey=J,A.__webglTexture=se[J].texture}return k}function j(A,v,k){let ee=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=i.TEXTURE_3D);const se=st(A,v),J=v.source;t.bindTexture(ee,A.__webglTexture,i.TEXTURE0+k);const ge=n.get(J);if(J.version!==ge.__version||se===!0){t.activeTexture(i.TEXTURE0+k);const ue=gt.getPrimaries(gt.workingColorSpace),Te=v.colorSpace===mi?null:gt.getPrimaries(v.colorSpace),ot=v.colorSpace===mi||ue===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let re=g(v.image,!1,r.maxTextureSize);re=bt(v,re);const Ae=s.convert(v.format,v.colorSpace),Be=s.convert(v.type);let We=b(v.internalFormat,Ae,Be,v.colorSpace,v.isVideoTexture);et(ee,v);let we;const rt=v.mipmaps,$e=v.isVideoTexture!==!0,Et=ge.__version===void 0||se===!0,L=J.dataReady,ye=w(v,re);if(v.isDepthTexture)We=S(v.format===Gr,v.type),Et&&($e?t.texStorage2D(i.TEXTURE_2D,1,We,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,We,re.width,re.height,0,Ae,Be,null));else if(v.isDataTexture)if(rt.length>0){$e&&Et&&t.texStorage2D(i.TEXTURE_2D,ye,We,rt[0].width,rt[0].height);for(let V=0,Z=rt.length;V<Z;V++)we=rt[V],$e?L&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,we.width,we.height,Ae,Be,we.data):t.texImage2D(i.TEXTURE_2D,V,We,we.width,we.height,0,Ae,Be,we.data);v.generateMipmaps=!1}else $e?(Et&&t.texStorage2D(i.TEXTURE_2D,ye,We,re.width,re.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,Ae,Be,re.data)):t.texImage2D(i.TEXTURE_2D,0,We,re.width,re.height,0,Ae,Be,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){$e&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,We,rt[0].width,rt[0].height,re.depth);for(let V=0,Z=rt.length;V<Z;V++)if(we=rt[V],v.format!==Dn)if(Ae!==null)if($e){if(L)if(v.layerUpdates.size>0){const be=Lc(we.width,we.height,v.format,v.type);for(const me of v.layerUpdates){const je=we.data.subarray(me*be/we.data.BYTES_PER_ELEMENT,(me+1)*be/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,me,we.width,we.height,1,Ae,je)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,we.width,we.height,re.depth,Ae,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,We,we.width,we.height,re.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,we.width,we.height,re.depth,Ae,Be,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,We,we.width,we.height,re.depth,0,Ae,Be,we.data)}else{$e&&Et&&t.texStorage2D(i.TEXTURE_2D,ye,We,rt[0].width,rt[0].height);for(let V=0,Z=rt.length;V<Z;V++)we=rt[V],v.format!==Dn?Ae!==null?$e?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(i.TEXTURE_2D,V,We,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?L&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,we.width,we.height,Ae,Be,we.data):t.texImage2D(i.TEXTURE_2D,V,We,we.width,we.height,0,Ae,Be,we.data)}else if(v.isDataArrayTexture)if($e){if(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,We,re.width,re.height,re.depth),L)if(v.layerUpdates.size>0){const V=Lc(re.width,re.height,v.format,v.type);for(const Z of v.layerUpdates){const be=re.data.subarray(Z*V/re.data.BYTES_PER_ELEMENT,(Z+1)*V/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,Ae,Be,be)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ae,Be,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,re.width,re.height,re.depth,0,Ae,Be,re.data);else if(v.isData3DTexture)$e?(Et&&t.texStorage3D(i.TEXTURE_3D,ye,We,re.width,re.height,re.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ae,Be,re.data)):t.texImage3D(i.TEXTURE_3D,0,We,re.width,re.height,re.depth,0,Ae,Be,re.data);else if(v.isFramebufferTexture){if(Et)if($e)t.texStorage2D(i.TEXTURE_2D,ye,We,re.width,re.height);else{let V=re.width,Z=re.height;for(let be=0;be<ye;be++)t.texImage2D(i.TEXTURE_2D,be,We,V,Z,0,Ae,Be,null),V>>=1,Z>>=1}}else if(rt.length>0){if($e&&Et){const V=Ne(rt[0]);t.texStorage2D(i.TEXTURE_2D,ye,We,V.width,V.height)}for(let V=0,Z=rt.length;V<Z;V++)we=rt[V],$e?L&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Ae,Be,we):t.texImage2D(i.TEXTURE_2D,V,We,Ae,Be,we);v.generateMipmaps=!1}else if($e){if(Et){const V=Ne(re);t.texStorage2D(i.TEXTURE_2D,ye,We,V.width,V.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Be,re)}else t.texImage2D(i.TEXTURE_2D,0,We,Ae,Be,re);m(v)&&u(ee),ge.__version=J.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function _e(A,v,k){if(v.image.length!==6)return;const ee=st(A,v),se=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const J=n.get(se);if(se.version!==J.__version||ee===!0){t.activeTexture(i.TEXTURE0+k);const ge=gt.getPrimaries(gt.workingColorSpace),ue=v.colorSpace===mi?null:gt.getPrimaries(v.colorSpace),Te=v.colorSpace===mi||ge===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ot=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let Z=0;Z<6;Z++)!ot&&!re?Ae[Z]=g(v.image[Z],!0,r.maxCubemapSize):Ae[Z]=re?v.image[Z].image:v.image[Z],Ae[Z]=bt(v,Ae[Z]);const Be=Ae[0],We=s.convert(v.format,v.colorSpace),we=s.convert(v.type),rt=b(v.internalFormat,We,we,v.colorSpace),$e=v.isVideoTexture!==!0,Et=J.__version===void 0||ee===!0,L=se.dataReady;let ye=w(v,Be);et(i.TEXTURE_CUBE_MAP,v);let V;if(ot){$e&&Et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,rt,Be.width,Be.height);for(let Z=0;Z<6;Z++){V=Ae[Z].mipmaps;for(let be=0;be<V.length;be++){const me=V[be];v.format!==Dn?We!==null?$e?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,me.width,me.height,We,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,rt,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,me.width,me.height,We,we,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,rt,me.width,me.height,0,We,we,me.data)}}}else{if(V=v.mipmaps,$e&&Et){V.length>0&&ye++;const Z=Ne(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,rt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){$e?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae[Z].width,Ae[Z].height,We,we,Ae[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,rt,Ae[Z].width,Ae[Z].height,0,We,we,Ae[Z].data);for(let be=0;be<V.length;be++){const je=V[be].image[Z].image;$e?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,je.width,je.height,We,we,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,rt,je.width,je.height,0,We,we,je.data)}}else{$e?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,We,we,Ae[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,rt,We,we,Ae[Z]);for(let be=0;be<V.length;be++){const me=V[be];$e?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,We,we,me.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,rt,We,we,me.image[Z])}}}m(v)&&u(i.TEXTURE_CUBE_MAP),J.__version=se.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Oe(A,v,k,ee,se,J){const ge=s.convert(k.format,k.colorSpace),ue=s.convert(k.type),Te=b(k.internalFormat,ge,ue,k.colorSpace),ot=n.get(v),re=n.get(k);if(re.__renderTarget=v,!ot.__hasExternalTextures){const Ae=Math.max(1,v.width>>J),Be=Math.max(1,v.height>>J);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,J,Te,Ae,Be,v.depth,0,ge,ue,null):t.texImage2D(se,J,Te,Ae,Be,0,ge,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),tt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,se,re.__webglTexture,0,it(v)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,se,re.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(A,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const ee=v.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,J=S(v.stencilBuffer,se),ge=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=it(v);tt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,J,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,A)}else{const ee=v.textures;for(let se=0;se<ee.length;se++){const J=ee[se],ge=s.convert(J.format,J.colorSpace),ue=s.convert(J.type),Te=b(J.internalFormat,ge,ue,J.colorSpace),ot=it(v);k&&tt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Te,v.width,v.height):tt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Te,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(v.depthTexture);ee.__renderTarget=v,(!ee.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),oe(v.depthTexture,0);const se=ee.__webglTexture,J=it(v);if(v.depthTexture.format===Hr)tt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(v.depthTexture.format===Gr)tt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ht(A){const v=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const ee=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ee){const se=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),v.__depthDisposeCallback=se}v.__boundDepthTexture=ee}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ze(v.__webglFramebuffer,A)}else if(k){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]===void 0)v.__webglDepthbuffer[ee]=i.createRenderbuffer(),ve(v.__webglDepthbuffer[ee],A,!1);else{const se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ve(v.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(A,v,k){const ee=n.get(A);v!==void 0&&Oe(ee.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ht(A)}function wt(A){const v=A.texture,k=n.get(A),ee=n.get(v);A.addEventListener("dispose",I);const se=A.textures,J=A.isWebGLCubeRenderTarget===!0,ge=se.length>1;if(ge||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=v.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let Te=0;Te<v.mipmaps.length;Te++)k.__webglFramebuffer[ue][Te]=i.createFramebuffer()}else k.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)k.__webglFramebuffer[ue]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ge)for(let ue=0,Te=se.length;ue<Te;ue++){const ot=n.get(se[ue]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&tt(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<se.length;ue++){const Te=se[ue];k.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const ot=s.convert(Te.format,Te.colorSpace),re=s.convert(Te.type),Ae=b(Te.internalFormat,ot,re,Te.colorSpace,A.isXRRenderTarget===!0),Be=it(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Ae,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),et(i.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)Oe(k.__webglFramebuffer[ue][Te],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te);else Oe(k.__webglFramebuffer[ue],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(v)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ue=0,Te=se.length;ue<Te;ue++){const ot=se[ue],re=n.get(ot);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),et(i.TEXTURE_2D,ot),Oe(k.__webglFramebuffer,A,ot,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),m(ot)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),et(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)Oe(k.__webglFramebuffer[Te],A,v,i.COLOR_ATTACHMENT0,ue,Te);else Oe(k.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,ue,0);m(v)&&u(ue),t.unbindTexture()}A.depthBuffer&&ht(A)}function Rt(A){const v=A.textures;for(let k=0,ee=v.length;k<ee;k++){const se=v[k];if(m(se)){const J=T(A),ge=n.get(se).__webglTexture;t.bindTexture(J,ge),u(J),t.unbindTexture()}}}const Ze=[],O=[];function Mt(A){if(A.samples>0){if(tt(A)===!1){const v=A.textures,k=A.width,ee=A.height;let se=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(A),ue=v.length>1;if(ue)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Te]);const ot=n.get(v[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,k,ee,0,0,k,ee,se,i.NEAREST),c===!0&&(Ze.length=0,O.length=0,Ze.push(i.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ze.push(J),O.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Te]);const ot=n.get(v[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,ot,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function it(A){return Math.min(r.maxSamples,A.samples)}function tt(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ue(A){const v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function bt(A,v){const k=A.colorSpace,ee=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Sr&&k!==mi&&(gt.getTransfer(k)===St?(ee!==Dn||se!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=Y,this.setTexture2D=oe,this.setTexture2DArray=Q,this.setTexture3D=ne,this.setTextureCube=q,this.rebindTextures=He,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=tt}function K_(i,e){function t(n,r=mi){let s;const o=gt.getTransfer(r);if(n===si)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ll)return i.BYTE;if(n===Pl)return i.SHORT;if(n===Br)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===Wr)return i.HALF_FLOAT;if(n===Ul)return i.ALPHA;if(n===kl)return i.RGB;if(n===Dn)return i.RGBA;if(n===Fl)return i.LUMINANCE;if(n===Bl)return i.LUMINANCE_ALPHA;if(n===Hr)return i.DEPTH_COMPONENT;if(n===Gr)return i.DEPTH_STENCIL;if(n===zl)return i.RED;if(n===Va)return i.RED_INTEGER;if(n===Hl)return i.RG;if(n===Wa)return i.RG_INTEGER;if(n===Xa)return i.RGBA_INTEGER;if(n===Os||n===Ds||n===Ls||n===Ps)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Os)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Os)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===ra||n===sa||n===oa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ia)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ra)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===ca||n===la)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===aa||n===ca)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===la)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===da||n===ha||n===ua||n===fa||n===pa||n===ma||n===_a||n===ga||n===va||n===xa||n===ya||n===Ea||n===Sa||n===Ma)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===da)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_a)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ma)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ns||n===ba||n===Ta)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ns)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ba)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===Aa||n===Ra||n===wa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ns)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$_=`
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

}`;class j_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xi({vertexShader:Y_,fragmentShader:$_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new Ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z_ extends br{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,_=null;const g=new j_,m=t.getContextAttributes();let u=null,T=null;const b=[],S=[],w=new yt;let R=null;const I=new Sn;I.viewport=new Ct;const P=new Sn;P.viewport=new Ct;const M=[I,P],E=new gu;let D=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let _e=b[j];return _e===void 0&&(_e=new Mo,b[j]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(j){let _e=b[j];return _e===void 0&&(_e=new Mo,b[j]=_e),_e.getGripSpace()},this.getHand=function(j){let _e=b[j];return _e===void 0&&(_e=new Mo,b[j]=_e),_e.getHandSpace()};function B(j){const _e=S.indexOf(j.inputSource);if(_e===-1)return;const Oe=b[_e];Oe!==void 0&&(Oe.update(j.inputSource,j.frame,l||o),Oe.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",oe);for(let j=0;j<b.length;j++){const _e=S[j];_e!==null&&(S[j]=null,b[j].disconnect(_e))}D=null,Y=null,g.reset(),e.setRenderTarget(u),p=null,f=null,d=null,r=null,T=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",$),r.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Oe=null,ve=null,ze=null;m.depth&&(ze=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Oe=m.stencil?Gr:Hr,ve=m.stencil?zr:Hi);const ht={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ht),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Gi(f.textureWidth,f.textureHeight,{format:Dn,type:si,depthTexture:new td(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Gi(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),st.setContext(r),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(j){for(let _e=0;_e<j.removed.length;_e++){const Oe=j.removed[_e],ve=S.indexOf(Oe);ve>=0&&(S[ve]=null,b[ve].disconnect(Oe))}for(let _e=0;_e<j.added.length;_e++){const Oe=j.added[_e];let ve=S.indexOf(Oe);if(ve===-1){for(let ht=0;ht<b.length;ht++)if(ht>=S.length){S.push(Oe),ve=ht;break}else if(S[ht]===null){S[ht]=Oe,ve=ht;break}if(ve===-1)break}const ze=b[ve];ze&&ze.connect(Oe)}}const Q=new W,ne=new W;function q(j,_e,Oe){Q.setFromMatrixPosition(_e.matrixWorld),ne.setFromMatrixPosition(Oe.matrixWorld);const ve=Q.distanceTo(ne),ze=_e.projectionMatrix.elements,ht=Oe.projectionMatrix.elements,He=ze[14]/(ze[10]-1),wt=ze[14]/(ze[10]+1),Rt=(ze[9]+1)/ze[5],Ze=(ze[9]-1)/ze[5],O=(ze[8]-1)/ze[0],Mt=(ht[8]+1)/ht[0],it=He*O,tt=He*Mt,Ue=ve/(-O+Mt),bt=Ue*-O;if(_e.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(bt),j.translateZ(Ue),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ze[10]===-1)j.projectionMatrix.copy(_e.projectionMatrix),j.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Ne=He+Ue,A=wt+Ue,v=it-bt,k=tt+(ve-bt),ee=Rt*wt/A*Ne,se=Ze*wt/A*Ne;j.projectionMatrix.makePerspective(v,k,ee,se,Ne,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function de(j,_e){_e===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(_e.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let _e=j.near,Oe=j.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(Oe=g.depthFar)),E.near=P.near=I.near=_e,E.far=P.far=I.far=Oe,(D!==E.near||Y!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,Y=E.far),I.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,E.layers.mask=I.layers.mask|P.layers.mask;const ve=j.parent,ze=E.cameras;de(E,ve);for(let ht=0;ht<ze.length;ht++)de(ze[ht],ve);ze.length===2?q(E,I,P):E.projectionMatrix.copy(I.projectionMatrix),Re(j,E,ve)};function Re(j,_e,Oe){Oe===null?j.matrix.copy(_e.matrixWorld):(j.matrix.copy(Oe.matrixWorld),j.matrix.invert(),j.matrix.multiply(_e.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(_e.projectionMatrix),j.projectionMatrixInverse.copy(_e.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ca*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(E)};let De=null;function et(j,_e){if(h=_e.getViewerPose(l||o),_=_e,h!==null){const Oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let ve=!1;Oe.length!==E.cameras.length&&(E.cameras.length=0,ve=!0);for(let He=0;He<Oe.length;He++){const wt=Oe[He];let Rt=null;if(p!==null)Rt=p.getViewport(wt);else{const O=d.getViewSubImage(f,wt);Rt=O.viewport,He===0&&(e.setRenderTargetTextures(T,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(T))}let Ze=M[He];Ze===void 0&&(Ze=new Sn,Ze.layers.enable(He),Ze.viewport=new Ct,M[He]=Ze),Ze.matrix.fromArray(wt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(wt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),He===0&&(E.matrix.copy(Ze.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ve===!0&&E.cameras.push(Ze)}const ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const He=d.getDepthInformation(Oe[0]);He&&He.isValid&&He.texture&&g.init(e,He,r.renderState)}}for(let Oe=0;Oe<b.length;Oe++){const ve=S[Oe],ze=b[Oe];ve!==null&&ze!==void 0&&ze.update(ve,_e,l||o)}De&&De(j,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),_=null}const st=new rd;st.setAnimationLoop(et),this.setAnimationLoop=function(j){De=j},this.dispose=function(){}}}const Ci=new Gn,Q_=new It;function J_(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Ql(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,T,b,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),g(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,T,b):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===nn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===nn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const T=e.get(u),b=T.envMap,S=T.envMapRotation;b&&(m.envMap.value=b,Ci.copy(S),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(Ci)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,T,b){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*T,m.scale.value=b*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,T){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===nn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const T=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function e0(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){const S=b.program;n.uniformBlockBinding(T,S)}function l(T,b){let S=r[T.id];S===void 0&&(_(T),S=h(T),r[T.id]=S,T.addEventListener("dispose",m));const w=b.program;n.updateUBOMapping(T,w);const R=e.render.frame;s[T.id]!==R&&(f(T),s[T.id]=R)}function h(T){const b=d();T.__bindingPointIndex=b;const S=i.createBuffer(),w=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const b=r[T.id],S=T.uniforms,w=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,I=S.length;R<I;R++){const P=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,E=P.length;M<E;M++){const D=P[M];if(p(D,R,M,w)===!0){const Y=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let oe=0;oe<B.length;oe++){const Q=B[oe],ne=g(Q);typeof Q=="number"||typeof Q=="boolean"?(D.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,Y+$,D.__data)):Q.isMatrix3?(D.__data[0]=Q.elements[0],D.__data[1]=Q.elements[1],D.__data[2]=Q.elements[2],D.__data[3]=0,D.__data[4]=Q.elements[3],D.__data[5]=Q.elements[4],D.__data[6]=Q.elements[5],D.__data[7]=0,D.__data[8]=Q.elements[6],D.__data[9]=Q.elements[7],D.__data[10]=Q.elements[8],D.__data[11]=0):(Q.toArray(D.__data,$),$+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,b,S,w){const R=T.value,I=b+"_"+S;if(w[I]===void 0)return typeof R=="number"||typeof R=="boolean"?w[I]=R:w[I]=R.clone(),!0;{const P=w[I];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return w[I]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(T){const b=T.uniforms;let S=0;const w=16;for(let I=0,P=b.length;I<P;I++){const M=Array.isArray(b[I])?b[I]:[b[I]];for(let E=0,D=M.length;E<D;E++){const Y=M[E],B=Array.isArray(Y.value)?Y.value:[Y.value];for(let $=0,oe=B.length;$<oe;$++){const Q=B[$],ne=g(Q),q=S%w,de=q%ne.boundary,Re=q+de;S+=de,Re!==0&&w-Re<ne.storage&&(S+=w-Re),Y.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=ne.storage}}}const R=S%w;return R>0&&(S+=w-R),T.__size=S,T.__cache={},this}function g(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function u(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:u}}class t0{constructor(e={}){const{canvas:t=Lh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,u=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let w=!1;this._outputColorSpace=En;let R=0,I=0,P=null,M=-1,E=null;const D=new Ct,Y=new Ct;let B=null;const $=new vt(0);let oe=0,Q=t.width,ne=t.height,q=1,de=null,Re=null;const De=new Ct(0,0,Q,ne),et=new Ct(0,0,Q,ne);let st=!1;const j=new $a;let _e=!1,Oe=!1;const ve=new It,ze=new It,ht=new W,He=new Ct,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Ze(){return P===null?q:1}let O=n;function Mt(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fa}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",me,!1),O===null){const N="webgl2";if(O=Mt(N,y),O===null)throw Mt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let it,tt,Ue,bt,Ne,A,v,k,ee,se,J,ge,ue,Te,ot,re,Ae,Be,We,we,rt,$e,Et,L;function ye(){it=new hm(O),it.init(),$e=new K_(O,it),tt=new rm(O,it,e,$e),Ue=new X_(O,it),tt.reverseDepthBuffer&&f&&Ue.buffers.depth.setReversed(!0),bt=new pm(O),Ne=new D_,A=new q_(O,it,Ue,Ne,tt,$e,bt),v=new om(S),k=new dm(S),ee=new xu(O),Et=new nm(O,ee),se=new um(O,ee,bt,Et),J=new _m(O,se,ee,bt),We=new mm(O,tt,A),re=new sm(Ne),ge=new O_(S,v,k,it,tt,Et,re),ue=new J_(S,Ne),Te=new P_,ot=new z_(it),Be=new tm(S,v,k,Ue,J,p,c),Ae=new V_(S,J,tt),L=new e0(O,bt,tt,Ue),we=new im(O,it,bt),rt=new fm(O,it,bt),bt.programs=ge.programs,S.capabilities=tt,S.extensions=it,S.properties=Ne,S.renderLists=Te,S.shadowMap=Ae,S.state=Ue,S.info=bt}ye();const V=new Z_(S,O);this.xr=V,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=it.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=it.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(Q,ne,!1))},this.getSize=function(y){return y.set(Q,ne)},this.setSize=function(y,N,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=y,ne=N,t.width=Math.floor(y*q),t.height=Math.floor(N*q),z===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(Q*q,ne*q).floor()},this.setDrawingBufferSize=function(y,N,z){Q=y,ne=N,q=z,t.width=Math.floor(y*z),t.height=Math.floor(N*z),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(De)},this.setViewport=function(y,N,z,G){y.isVector4?De.set(y.x,y.y,y.z,y.w):De.set(y,N,z,G),Ue.viewport(D.copy(De).multiplyScalar(q).round())},this.getScissor=function(y){return y.copy(et)},this.setScissor=function(y,N,z,G){y.isVector4?et.set(y.x,y.y,y.z,y.w):et.set(y,N,z,G),Ue.scissor(Y.copy(et).multiplyScalar(q).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(y){Ue.setScissorTest(st=y)},this.setOpaqueSort=function(y){de=y},this.setTransparentSort=function(y){Re=y},this.getClearColor=function(y){return y.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,z=!0){let G=0;if(y){let U=!1;if(P!==null){const ce=P.texture.format;U=ce===Xa||ce===Wa||ce===Va}if(U){const ce=P.texture.type,Ee=ce===si||ce===Hi||ce===Br||ce===zr||ce===Ha||ce===Ga,xe=Be.getClearColor(),Ce=Be.getClearAlpha(),Xe=xe.r,Ge=xe.g,ke=xe.b;Ee?(_[0]=Xe,_[1]=Ge,_[2]=ke,_[3]=Ce,O.clearBufferuiv(O.COLOR,0,_)):(g[0]=Xe,g[1]=Ge,g[2]=ke,g[3]=Ce,O.clearBufferiv(O.COLOR,0,g))}else G|=O.COLOR_BUFFER_BIT}N&&(G|=O.DEPTH_BUFFER_BIT),z&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Be.dispose(),Te.dispose(),ot.dispose(),Ne.dispose(),v.dispose(),k.dispose(),J.dispose(),Et.dispose(),L.dispose(),ge.dispose(),V.dispose(),V.removeEventListener("sessionstart",$r),V.removeEventListener("sessionend",jr),Mn.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const y=bt.autoReset,N=Ae.enabled,z=Ae.autoUpdate,G=Ae.needsUpdate,U=Ae.type;ye(),bt.autoReset=y,Ae.enabled=N,Ae.autoUpdate=z,Ae.needsUpdate=G,Ae.type=U}function me(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function je(y){const N=y.target;N.removeEventListener("dispose",je),At(N)}function At(y){ft(y),Ne.remove(y)}function ft(y){const N=Ne.get(y).programs;N!==void 0&&(N.forEach(function(z){ge.releaseProgram(z)}),y.isShaderMaterial&&ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,z,G,U,ce){N===null&&(N=wt);const Ee=U.isMesh&&U.matrixWorld.determinant()<0,xe=es(y,N,z,G,U);Ue.setMaterial(G,Ee);let Ce=z.index,Xe=1;if(G.wireframe===!0){if(Ce=se.getWireframeAttribute(z),Ce===void 0)return;Xe=2}const Ge=z.drawRange,ke=z.attributes.position;let F=Ge.start*Xe,te=(Ge.start+Ge.count)*Xe;ce!==null&&(F=Math.max(F,ce.start*Xe),te=Math.min(te,(ce.start+ce.count)*Xe)),Ce!==null?(F=Math.max(F,0),te=Math.min(te,Ce.count)):ke!=null&&(F=Math.max(F,0),te=Math.min(te,ke.count));const ae=te-F;if(ae<0||ae===1/0)return;Et.setup(U,G,xe,z,Ce);let Me,Pe=we;if(Ce!==null&&(Me=ee.get(Ce),Pe=rt,Pe.setIndex(Me)),U.isMesh)G.wireframe===!0?(Ue.setLineWidth(G.wireframeLinewidth*Ze()),Pe.setMode(O.LINES)):Pe.setMode(O.TRIANGLES);else if(U.isLine){let he=G.linewidth;he===void 0&&(he=1),Ue.setLineWidth(he*Ze()),U.isLineSegments?Pe.setMode(O.LINES):U.isLineLoop?Pe.setMode(O.LINE_LOOP):Pe.setMode(O.LINE_STRIP)}else U.isPoints?Pe.setMode(O.POINTS):U.isSprite&&Pe.setMode(O.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))Pe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const he=U._multiDrawStarts,ct=U._multiDrawCounts,Ke=U._multiDrawCount,Nt=Ce?ee.get(Ce).bytesPerElement:1,Pn=Ne.get(G).currentProgram.getUniforms();for(let zt=0;zt<Ke;zt++)Pn.setValue(O,"_gl_DrawID",zt),Pe.render(he[zt]/Nt,ct[zt])}else if(U.isInstancedMesh)Pe.renderInstances(F,ae,U.count);else if(z.isInstancedBufferGeometry){const he=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ct=Math.min(z.instanceCount,he);Pe.renderInstances(F,ae,ct)}else Pe.render(F,ae)};function xt(y,N,z){y.transparent===!0&&y.side===Jn&&y.forceSinglePass===!1?(y.side=nn,y.needsUpdate=!0,Xi(y,N,z),y.side=vi,y.needsUpdate=!0,Xi(y,N,z),y.side=Jn):Xi(y,N,z)}this.compile=function(y,N,z=null){z===null&&(z=y),u=ot.get(z),u.init(N),b.push(u),z.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),y!==z&&y.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const G=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ce=U.material;if(ce)if(Array.isArray(ce))for(let Ee=0;Ee<ce.length;Ee++){const xe=ce[Ee];xt(xe,z,U),G.add(xe)}else xt(ce,z,U),G.add(ce)}),u=b.pop(),G},this.compileAsync=function(y,N,z=null){const G=this.compile(y,N,z);return new Promise(U=>{function ce(){if(G.forEach(function(Ee){Ne.get(Ee).currentProgram.isReady()&&G.delete(Ee)}),G.size===0){U(y);return}setTimeout(ce,10)}it.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let sn=null;function Le(y){sn&&sn(y)}function $r(){Mn.stop()}function jr(){Mn.start()}const Mn=new rd;Mn.setAnimationLoop(Le),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(y){sn=y,V.setAnimationLoop(y),y===null?Mn.stop():Mn.start()},V.addEventListener("sessionstart",$r),V.addEventListener("sessionend",jr),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(N),N=V.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,N,P),u=ot.get(y,b.length),u.init(N),b.push(u),ze.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(ze),Oe=this.localClippingEnabled,_e=re.init(this.clippingPlanes,Oe),m=Te.get(y,T.length),m.init(),T.push(m),V.enabled===!0&&V.isPresenting===!0){const ce=S.xr.getDepthSensingMesh();ce!==null&&Vi(ce,N,-1/0,S.sortObjects)}Vi(y,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(de,Re),Rt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Rt&&Be.addToRenderList(m,y),this.info.render.frame++,_e===!0&&re.beginShadows();const z=u.state.shadowsArray;Ae.render(z,y,N),_e===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,U=m.transmissive;if(u.setupLights(),N.isArrayCamera){const ce=N.cameras;if(U.length>0)for(let Ee=0,xe=ce.length;Ee<xe;Ee++){const Ce=ce[Ee];Zr(G,U,y,Ce)}Rt&&Be.render(y);for(let Ee=0,xe=ce.length;Ee<xe;Ee++){const Ce=ce[Ee];Ar(m,y,Ce,Ce.viewport)}}else U.length>0&&Zr(G,U,y,N),Rt&&Be.render(y),Ar(m,y,N);P!==null&&I===0&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(S,y,N),Et.resetDefaultState(),M=-1,E=null,b.pop(),b.length>0?(u=b[b.length-1],_e===!0&&re.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Vi(y,N,z,G){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||j.intersectsSprite(y)){G&&He.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ze);const Ee=J.update(y),xe=y.material;xe.visible&&m.push(y,Ee,xe,z,He.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||j.intersectsObject(y))){const Ee=J.update(y),xe=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),He.copy(y.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),He.copy(Ee.boundingSphere.center)),He.applyMatrix4(y.matrixWorld).applyMatrix4(ze)),Array.isArray(xe)){const Ce=Ee.groups;for(let Xe=0,Ge=Ce.length;Xe<Ge;Xe++){const ke=Ce[Xe],F=xe[ke.materialIndex];F&&F.visible&&m.push(y,Ee,F,z,He.z,ke)}}else xe.visible&&m.push(y,Ee,xe,z,He.z,null)}}const ce=y.children;for(let Ee=0,xe=ce.length;Ee<xe;Ee++)Vi(ce[Ee],N,z,G)}function Ar(y,N,z,G){const U=y.opaque,ce=y.transmissive,Ee=y.transparent;u.setupLightsView(z),_e===!0&&re.setGlobalState(S.clippingPlanes,z),G&&Ue.viewport(D.copy(G)),U.length>0&&Wi(U,N,z),ce.length>0&&Wi(ce,N,z),Ee.length>0&&Wi(Ee,N,z),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Zr(y,N,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new Gi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Wr:si,minFilter:zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const ce=u.state.transmissionRenderTarget[G.id],Ee=G.viewport||D;ce.setSize(Ee.z*S.transmissionResolutionScale,Ee.w*S.transmissionResolutionScale);const xe=S.getRenderTarget();S.setRenderTarget(ce),S.getClearColor($),oe=S.getClearAlpha(),oe<1&&S.setClearColor(16777215,.5),S.clear(),Rt&&Be.render(z);const Ce=S.toneMapping;S.toneMapping=gi;const Xe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),_e===!0&&re.setGlobalState(S.clippingPlanes,G),Wi(y,z,G),A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let ke=0,F=N.length;ke<F;ke++){const te=N[ke],ae=te.object,Me=te.geometry,Pe=te.material,he=te.group;if(Pe.side===Jn&&ae.layers.test(G.layers)){const ct=Pe.side;Pe.side=nn,Pe.needsUpdate=!0,Qr(ae,z,G,Me,Pe,he),Pe.side=ct,Pe.needsUpdate=!0,Ge=!0}}Ge===!0&&(A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce))}S.setRenderTarget(xe),S.setClearColor($,oe),Xe!==void 0&&(G.viewport=Xe),S.toneMapping=Ce}function Wi(y,N,z){const G=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ce=y.length;U<ce;U++){const Ee=y[U],xe=Ee.object,Ce=Ee.geometry,Xe=Ee.group;let Ge=Ee.material;Ge.allowOverride===!0&&G!==null&&(Ge=G),xe.layers.test(z.layers)&&Qr(xe,N,z,Ce,Ge,Xe)}}function Qr(y,N,z,G,U,ce){y.onBeforeRender(S,N,z,G,U,ce),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(S,N,z,G,y,ce),U.transparent===!0&&U.side===Jn&&U.forceSinglePass===!1?(U.side=nn,U.needsUpdate=!0,S.renderBufferDirect(z,N,G,U,y,ce),U.side=vi,U.needsUpdate=!0,S.renderBufferDirect(z,N,G,U,y,ce),U.side=Jn):S.renderBufferDirect(z,N,G,U,y,ce),y.onAfterRender(S,N,z,G,U,ce)}function Xi(y,N,z){N.isScene!==!0&&(N=wt);const G=Ne.get(y),U=u.state.lights,ce=u.state.shadowsArray,Ee=U.state.version,xe=ge.getParameters(y,U.state,ce,N,z),Ce=ge.getProgramCacheKey(xe);let Xe=G.programs;G.environment=y.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(y.isMeshStandardMaterial?k:v).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Xe===void 0&&(y.addEventListener("dispose",je),Xe=new Map,G.programs=Xe);let Ge=Xe.get(Ce);if(Ge!==void 0){if(G.currentProgram===Ge&&G.lightsStateVersion===Ee)return Jr(y,xe),Ge}else xe.uniforms=ge.getUniforms(y),y.onBeforeCompile(xe,S),Ge=ge.acquireProgram(xe,Ce),Xe.set(Ce,Ge),G.uniforms=xe.uniforms;const ke=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ke.clippingPlanes=re.uniform),Jr(y,xe),G.needsLights=Zs(y),G.lightsStateVersion=Ee,G.needsLights&&(ke.ambientLightColor.value=U.state.ambient,ke.lightProbe.value=U.state.probe,ke.directionalLights.value=U.state.directional,ke.directionalLightShadows.value=U.state.directionalShadow,ke.spotLights.value=U.state.spot,ke.spotLightShadows.value=U.state.spotShadow,ke.rectAreaLights.value=U.state.rectArea,ke.ltc_1.value=U.state.rectAreaLTC1,ke.ltc_2.value=U.state.rectAreaLTC2,ke.pointLights.value=U.state.point,ke.pointLightShadows.value=U.state.pointShadow,ke.hemisphereLights.value=U.state.hemi,ke.directionalShadowMap.value=U.state.directionalShadowMap,ke.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ke.spotShadowMap.value=U.state.spotShadowMap,ke.spotLightMatrix.value=U.state.spotLightMatrix,ke.spotLightMap.value=U.state.spotLightMap,ke.pointShadowMap.value=U.state.pointShadowMap,ke.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Ge,G.uniformsList=null,Ge}function Si(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=ks.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Jr(y,N){const z=Ne.get(y);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function es(y,N,z,G,U){N.isScene!==!0&&(N=wt),A.resetTextureUnits();const ce=N.fog,Ee=G.isMeshStandardMaterial?N.environment:null,xe=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Sr,Ce=(G.isMeshStandardMaterial?k:v).get(G.envMap||Ee),Xe=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ge=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ke=!!z.morphAttributes.position,F=!!z.morphAttributes.normal,te=!!z.morphAttributes.color;let ae=gi;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ae=S.toneMapping);const Me=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pe=Me!==void 0?Me.length:0,he=Ne.get(G),ct=u.state.lights;if(_e===!0&&(Oe===!0||y!==E)){const Ht=y===E&&G.id===M;re.setState(G,y,Ht)}let Ke=!1;G.version===he.__version?(he.needsLights&&he.lightsStateVersion!==ct.state.version||he.outputColorSpace!==xe||U.isBatchedMesh&&he.batching===!1||!U.isBatchedMesh&&he.batching===!0||U.isBatchedMesh&&he.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&he.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&he.instancing===!1||!U.isInstancedMesh&&he.instancing===!0||U.isSkinnedMesh&&he.skinning===!1||!U.isSkinnedMesh&&he.skinning===!0||U.isInstancedMesh&&he.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&he.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&he.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&he.instancingMorph===!1&&U.morphTexture!==null||he.envMap!==Ce||G.fog===!0&&he.fog!==ce||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==re.numPlanes||he.numIntersection!==re.numIntersection)||he.vertexAlphas!==Xe||he.vertexTangents!==Ge||he.morphTargets!==ke||he.morphNormals!==F||he.morphColors!==te||he.toneMapping!==ae||he.morphTargetsCount!==Pe)&&(Ke=!0):(Ke=!0,he.__version=G.version);let Nt=he.currentProgram;Ke===!0&&(Nt=Xi(G,N,U));let Pn=!1,zt=!1,on=!1;const lt=Nt.getUniforms(),Gt=he.uniforms;if(Ue.useProgram(Nt.program)&&(Pn=!0,zt=!0,on=!0),G.id!==M&&(M=G.id,zt=!0),Pn||E!==y){Ue.buffers.depth.getReversed()?(ve.copy(y.projectionMatrix),Nh(ve),Uh(ve),lt.setValue(O,"projectionMatrix",ve)):lt.setValue(O,"projectionMatrix",y.projectionMatrix),lt.setValue(O,"viewMatrix",y.matrixWorldInverse);const Yt=lt.map.cameraPosition;Yt!==void 0&&Yt.setValue(O,ht.setFromMatrixPosition(y.matrixWorld)),tt.logarithmicDepthBuffer&&lt.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&lt.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,zt=!0,on=!0)}if(U.isSkinnedMesh){lt.setOptional(O,U,"bindMatrix"),lt.setOptional(O,U,"bindMatrixInverse");const Ht=U.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),lt.setValue(O,"boneTexture",Ht.boneTexture,A))}U.isBatchedMesh&&(lt.setOptional(O,U,"batchingTexture"),lt.setValue(O,"batchingTexture",U._matricesTexture,A),lt.setOptional(O,U,"batchingIdTexture"),lt.setValue(O,"batchingIdTexture",U._indirectTexture,A),lt.setOptional(O,U,"batchingColorTexture"),U._colorsTexture!==null&&lt.setValue(O,"batchingColorTexture",U._colorsTexture,A));const Kt=z.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&We.update(U,z,Nt),(zt||he.receiveShadow!==U.receiveShadow)&&(he.receiveShadow=U.receiveShadow,lt.setValue(O,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Gt.envMap.value=Ce,Gt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Gt.envMapIntensity.value=N.environmentIntensity),zt&&(lt.setValue(O,"toneMappingExposure",S.toneMappingExposure),he.needsLights&&js(Gt,on),ce&&G.fog===!0&&ue.refreshFogUniforms(Gt,ce),ue.refreshMaterialUniforms(Gt,G,q,ne,u.state.transmissionRenderTarget[y.id]),ks.upload(O,Si(he),Gt,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ks.upload(O,Si(he),Gt,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&lt.setValue(O,"center",U.center),lt.setValue(O,"modelViewMatrix",U.modelViewMatrix),lt.setValue(O,"normalMatrix",U.normalMatrix),lt.setValue(O,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ht=G.uniformsGroups;for(let Yt=0,qi=Ht.length;Yt<qi;Yt++){const Vn=Ht[Yt];L.update(Vn,Nt),L.bind(Vn,Nt)}}return Nt}function js(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Zs(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,N,z){const G=Ne.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ne.get(y.texture).__webglTexture=N,Ne.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const z=Ne.get(y);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const oi=O.createFramebuffer();this.setRenderTarget=function(y,N=0,z=0){P=y,R=N,I=z;let G=!0,U=null,ce=!1,Ee=!1;if(y){const Ce=Ne.get(y);if(Ce.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(O.FRAMEBUFFER,null),G=!1;else if(Ce.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(Ce.__hasExternalTextures)A.rebindTextures(y,Ne.get(y.texture).__webglTexture,Ne.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ke=y.depthTexture;if(Ce.__boundDepthTexture!==ke){if(ke!==null&&Ne.has(ke)&&(y.width!==ke.image.width||y.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const Xe=y.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ee=!0);const Ge=Ne.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ge[N])?U=Ge[N][z]:U=Ge[N],ce=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?U=Ne.get(y).__webglMultisampledFramebuffer:Array.isArray(Ge)?U=Ge[z]:U=Ge,D.copy(y.viewport),Y.copy(y.scissor),B=y.scissorTest}else D.copy(De).multiplyScalar(q).floor(),Y.copy(et).multiplyScalar(q).floor(),B=st;if(z!==0&&(U=oi),Ue.bindFramebuffer(O.FRAMEBUFFER,U)&&G&&Ue.drawBuffers(y,U),Ue.viewport(D),Ue.scissor(Y),Ue.setScissorTest(B),ce){const Ce=Ne.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ce.__webglTexture,z)}else if(Ee){const Ce=Ne.get(y.texture),Xe=N;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.__webglTexture,z,Xe)}else if(y!==null&&z!==0){const Ce=Ne.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ce.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(y,N,z,G,U,ce,Ee){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(xe=xe[Ee]),xe){Ue.bindFramebuffer(O.FRAMEBUFFER,xe);try{const Ce=y.texture,Xe=Ce.format,Ge=Ce.type;if(!tt.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-G&&z>=0&&z<=y.height-U&&O.readPixels(N,z,G,U,$e.convert(Xe),$e.convert(Ge),ce)}finally{const Ce=P!==null?Ne.get(P).__webglFramebuffer:null;Ue.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(y,N,z,G,U,ce,Ee){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(xe=xe[Ee]),xe)if(N>=0&&N<=y.width-G&&z>=0&&z<=y.height-U){Ue.bindFramebuffer(O.FRAMEBUFFER,xe);const Ce=y.texture,Xe=Ce.format,Ge=Ce.type;if(!tt.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ke),O.bufferData(O.PIXEL_PACK_BUFFER,ce.byteLength,O.STREAM_READ),O.readPixels(N,z,G,U,$e.convert(Xe),$e.convert(Ge),0);const F=P!==null?Ne.get(P).__webglFramebuffer:null;Ue.bindFramebuffer(O.FRAMEBUFFER,F);const te=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ph(O,te,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ke),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ce),O.deleteBuffer(ke),O.deleteSync(te),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,z=0){const G=Math.pow(2,-z),U=Math.floor(y.image.width*G),ce=Math.floor(y.image.height*G),Ee=N!==null?N.x:0,xe=N!==null?N.y:0;A.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,Ee,xe,U,ce),Ue.unbindTexture()};const Qs=O.createFramebuffer(),ts=O.createFramebuffer();this.copyTextureToTexture=function(y,N,z=null,G=null,U=0,ce=null){ce===null&&(U!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=U,U=0):ce=0);let Ee,xe,Ce,Xe,Ge,ke,F,te,ae;const Me=y.isCompressedTexture?y.mipmaps[ce]:y.image;if(z!==null)Ee=z.max.x-z.min.x,xe=z.max.y-z.min.y,Ce=z.isBox3?z.max.z-z.min.z:1,Xe=z.min.x,Ge=z.min.y,ke=z.isBox3?z.min.z:0;else{const Kt=Math.pow(2,-U);Ee=Math.floor(Me.width*Kt),xe=Math.floor(Me.height*Kt),y.isDataArrayTexture?Ce=Me.depth:y.isData3DTexture?Ce=Math.floor(Me.depth*Kt):Ce=1,Xe=0,Ge=0,ke=0}G!==null?(F=G.x,te=G.y,ae=G.z):(F=0,te=0,ae=0);const Pe=$e.convert(N.format),he=$e.convert(N.type);let ct;N.isData3DTexture?(A.setTexture3D(N,0),ct=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),ct=O.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),ct=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const Ke=O.getParameter(O.UNPACK_ROW_LENGTH),Nt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Pn=O.getParameter(O.UNPACK_SKIP_PIXELS),zt=O.getParameter(O.UNPACK_SKIP_ROWS),on=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Me.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Me.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Xe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ke);const lt=y.isDataArrayTexture||y.isData3DTexture,Gt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const Kt=Ne.get(y),Ht=Ne.get(N),Yt=Ne.get(Kt.__renderTarget),qi=Ne.get(Ht.__renderTarget);Ue.bindFramebuffer(O.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Vn=0;Vn<Ce;Vn++)lt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(y).__webglTexture,U,ke+Vn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(N).__webglTexture,ce,ae+Vn)),O.blitFramebuffer(Xe,Ge,Ee,xe,F,te,Ee,xe,O.DEPTH_BUFFER_BIT,O.NEAREST);Ue.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||Ne.has(y)){const Kt=Ne.get(y),Ht=Ne.get(N);Ue.bindFramebuffer(O.READ_FRAMEBUFFER,Qs),Ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,ts);for(let Yt=0;Yt<Ce;Yt++)lt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Kt.__webglTexture,U,ke+Yt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Kt.__webglTexture,U),Gt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.__webglTexture,ce,ae+Yt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ht.__webglTexture,ce),U!==0?O.blitFramebuffer(Xe,Ge,Ee,xe,F,te,Ee,xe,O.COLOR_BUFFER_BIT,O.NEAREST):Gt?O.copyTexSubImage3D(ct,ce,F,te,ae+Yt,Xe,Ge,Ee,xe):O.copyTexSubImage2D(ct,ce,F,te,Xe,Ge,Ee,xe);Ue.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Gt?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(ct,ce,F,te,ae,Ee,xe,Ce,Pe,he,Me.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(ct,ce,F,te,ae,Ee,xe,Ce,Pe,Me.data):O.texSubImage3D(ct,ce,F,te,ae,Ee,xe,Ce,Pe,he,Me):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ce,F,te,Ee,xe,Pe,he,Me.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ce,F,te,Me.width,Me.height,Pe,Me.data):O.texSubImage2D(O.TEXTURE_2D,ce,F,te,Ee,xe,Pe,he,Me);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ke),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Nt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pn),O.pixelStorei(O.UNPACK_SKIP_ROWS,zt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,on),ce===0&&N.generateMipmaps&&O.generateMipmap(ct),Ue.unbindTexture()},this.copyTextureToTexture3D=function(y,N,z=null,G=null,U=0){return Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,z,G,U)},this.initRenderTarget=function(y){Ne.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),Ue.unbindTexture()},this.resetState=function(){R=0,I=0,P=null,Ue.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}const X=Object.freeze({DIRT:"dirt",STONE:"stone",WOOD:"wood",SAND:"sand",COBBLESTONE:"cobblestone",PLANKS:"planks",CLAY:"clay",GRAVEL:"gravel",GLASS:"glass",IRON_ORE:"iron_ore",COPPER_ORE:"copper_ore",IRON_INGOT:"iron_ingot",COPPER_INGOT:"copper_ingot",STICK:"stick",FIBER:"fiber",LEATHER:"leather",ROPE:"rope",COAL:"coal",RAW_MEAT:"raw_meat",COOKED_MEAT:"cooked_meat",RAW_BERRIES:"raw_berries",RAW_MUSHROOM:"raw_mushroom",RAW_FISH:"raw_fish",COOKED_FISH:"cooked_fish",STONE_PICKAXE:"stone_pickaxe",STONE_AXE:"stone_axe",IRON_PICKAXE:"iron_pickaxe",IRON_AXE:"iron_axe",LEATHER_ARMOR:"leather_armor",BANDAGE:"bandage",IRON_SWORD:"iron_sword",IRON_HAMMER:"iron_hammer",COPPER_PICKAXE:"copper_pickaxe",STEW:"stew",TRAIL_RATIONS:"trail_rations",HERB_SALAD:"herb_salad",TORCH:"torch",BEDROLL:"bedroll",MAP:"map",LORE_FRAGMENT:"lore_fragment",RELIC_SHARD:"relic_shard",WORKBENCH:"workbench",CAMPFIRE:"campfire",FORGE:"forge",KITCHEN:"kitchen",LOOM:"loom",THATCH:"thatch",STONE_BRICK:"stone_brick",DARK_STONE:"dark_stone",OAK_PLANKS:"oak_planks",BIRCH_WOOD:"birch_wood",SLATE:"slate",MARBLE:"marble",CHEST:"chest"}),x=Object.freeze({AIR:0,DIRT:1,STONE:2,GRASS:3,WOOD:4,LEAVES:5,SAND:6,WATER:7,CLAY:8,GRAVEL:9,COBBLESTONE:10,PLANKS:11,IRON_ORE:12,COPPER_ORE:13,COAL_ORE:14,GLASS:15,CAMPFIRE:16,WORKBENCH:17,FORGE:18,KITCHEN:19,LOOM:20,RUNE_TABLE:21,TORCH:22,THATCH:23,STONE_BRICK:24,IRON_BLOCK:25,COPPER_BLOCK:26,SNOW:27,ICE:28,MOSSY_STONE:29,CORRUPTED_STONE:30,DARK_STONE:31,OAK_PLANKS:32,BIRCH_WOOD:33,REED:34,MUD:35,SLATE:36,MARBLE:37,OBSIDIAN:38,CRYSTAL:39,TALL_GRASS:40,CHEST:41,BED:42,DOOR:43,DOOR_OPEN:44}),n0=new Set([x.AIR,x.WATER,x.TORCH,x.TALL_GRASS,x.LEAVES,x.BED,x.DOOR_OPEN]);function Qt(i){return!n0.has(i)}const i0=new Set([x.AIR,x.WATER]);function r0(i){return!i0.has(i)}const s0={[x.DIRT]:[{type:X.DIRT,count:1}],[x.STONE]:[{type:X.STONE,count:1}],[x.GRASS]:[{type:X.DIRT,count:1},{type:X.FIBER,count:1}],[x.WOOD]:[{type:X.WOOD,count:1}],[x.LEAVES]:[{type:X.STICK,count:1}],[x.SAND]:[{type:X.SAND,count:1}],[x.CLAY]:[{type:X.CLAY,count:1}],[x.GRAVEL]:[{type:X.GRAVEL,count:1}],[x.COBBLESTONE]:[{type:X.COBBLESTONE,count:1}],[x.PLANKS]:[{type:X.PLANKS,count:1}],[x.IRON_ORE]:[{type:X.IRON_ORE,count:1}],[x.COPPER_ORE]:[{type:X.COPPER_ORE,count:1}],[x.COAL_ORE]:[{type:X.COAL,count:1}],[x.GLASS]:[{type:X.GLASS,count:1}],[x.TORCH]:[{type:X.TORCH,count:1}],[x.THATCH]:[{type:X.FIBER,count:2}],[x.SNOW]:[{type:X.DIRT,count:1}],[x.DARK_STONE]:[{type:X.DARK_STONE,count:1}],[x.OAK_PLANKS]:[{type:X.OAK_PLANKS,count:1}],[x.BIRCH_WOOD]:[{type:X.BIRCH_WOOD,count:1}],[x.SLATE]:[{type:X.SLATE,count:1}],[x.MARBLE]:[{type:X.MARBLE,count:1}],[x.TALL_GRASS]:[{type:X.FIBER,count:1}],[x.WORKBENCH]:[{type:X.WORKBENCH,count:1}],[x.CAMPFIRE]:[{type:X.CAMPFIRE,count:1}],[x.FORGE]:[{type:X.FORGE,count:1}],[x.KITCHEN]:[{type:X.KITCHEN,count:1}],[x.LOOM]:[{type:X.LOOM,count:1}],[x.CHEST]:[{type:X.CHEST,count:1}]};function o0(i){return s0[i]||[]}const a0=Object.freeze({[x.DIRT]:"hand",[x.GRASS]:"hand",[x.LEAVES]:"hand",[x.TALL_GRASS]:"hand",[x.SAND]:"hand",[x.CLAY]:"hand",[x.GRAVEL]:"hand",[x.SNOW]:"hand",[x.MUD]:"hand",[x.THATCH]:"hand",[x.REED]:"hand",[x.WOOD]:"hand",[x.BIRCH_WOOD]:"hand",[x.PLANKS]:"hand",[x.OAK_PLANKS]:"hand",[x.STONE]:"pickaxe",[x.IRON_ORE]:"pickaxe",[x.COPPER_ORE]:"pickaxe",[x.COAL_ORE]:"pickaxe",[x.COBBLESTONE]:"pickaxe",[x.STONE_BRICK]:"pickaxe",[x.SLATE]:"pickaxe",[x.MARBLE]:"pickaxe",[x.DARK_STONE]:"pickaxe",[x.MOSSY_STONE]:"pickaxe",[x.CORRUPTED_STONE]:"pickaxe",[x.OBSIDIAN]:"pickaxe",[x.CRYSTAL]:"pickaxe",[x.ICE]:"pickaxe",[x.IRON_BLOCK]:"pickaxe",[x.COPPER_BLOCK]:"pickaxe",[x.GLASS]:"hand",[x.CAMPFIRE]:"hand",[x.WORKBENCH]:"hand",[x.FORGE]:"pickaxe",[x.KITCHEN]:"hand",[x.LOOM]:"hand",[x.RUNE_TABLE]:"pickaxe",[x.TORCH]:"hand",[x.CHEST]:"hand",[x.BED]:"hand",[x.DOOR]:"hand",[x.DOOR_OPEN]:"hand"});function c0(i,e){const t=a0[i]||"hand";return t==="hand"?!0:e==null?!1:e===t}const Oa=Object.freeze({[X.DIRT]:x.DIRT,[X.STONE]:x.STONE,[X.WOOD]:x.WOOD,[X.SAND]:x.SAND,[X.COBBLESTONE]:x.COBBLESTONE,[X.PLANKS]:x.PLANKS,[X.CLAY]:x.CLAY,[X.GRAVEL]:x.GRAVEL,[X.GLASS]:x.GLASS,[X.TORCH]:x.TORCH,[X.THATCH]:x.THATCH,[X.STONE_BRICK]:x.STONE_BRICK,[X.DARK_STONE]:x.DARK_STONE,[X.OAK_PLANKS]:x.OAK_PLANKS,[X.BIRCH_WOOD]:x.BIRCH_WOOD,[X.SLATE]:x.SLATE,[X.MARBLE]:x.MARBLE,[X.WORKBENCH]:x.WORKBENCH,[X.CAMPFIRE]:x.CAMPFIRE,[X.FORGE]:x.FORGE,[X.KITCHEN]:x.KITCHEN,[X.LOOM]:x.LOOM,[X.CHEST]:x.CHEST}),qe=16;class ld{constructor(){this.blocks=new Uint8Array(qe*qe*qe)}_index(e,t,n){return e+t*qe+n*qe*qe}_inBounds(e,t,n){return e>=0&&e<qe&&t>=0&&t<qe&&n>=0&&n<qe}getBlock(e,t,n){return this._inBounds(e,t,n)?this.blocks[this._index(e,t,n)]:x.AIR}setBlock(e,t,n,r){this._inBounds(e,t,n)&&(this.blocks[this._index(e,t,n)]=r)}}class dd{constructor(){this.chunks=new Map}_chunkKey(e,t,n){return`${e},${t},${n}`}_worldToChunk(e,t,n){const r=Math.floor(e/qe),s=Math.floor(t/qe),o=Math.floor(n/qe),a=(e%qe+qe)%qe,c=(t%qe+qe)%qe,l=(n%qe+qe)%qe;return{cx:r,cy:s,cz:o,lx:a,ly:c,lz:l}}getChunk(e,t,n){return this.chunks.get(this._chunkKey(e,t,n))||null}_getOrCreateChunk(e,t,n){const r=this._chunkKey(e,t,n);let s=this.chunks.get(r);return s||(s=new ld,this.chunks.set(r,s)),s}getBlock(e,t,n){if(t<0)return x.STONE;const{cx:r,cy:s,cz:o,lx:a,ly:c,lz:l}=this._worldToChunk(e,t,n),h=this.getChunk(r,s,o);return h?h.getBlock(a,c,l):x.AIR}isChunkLoaded(e,t,n){const{cx:r,cy:s,cz:o}=this._worldToChunk(e,t,n);return this.chunks.has(this._chunkKey(r,s,o))}setBlock(e,t,n,r){const{cx:s,cy:o,cz:a,lx:c,ly:l,lz:h}=this._worldToChunk(e,t,n);this._getOrCreateChunk(s,o,a).setBlock(c,l,h,r)}}const Zn=new Uint8Array(512);(function(){const e=new Uint8Array(256);for(let n=0;n<256;n++)e[n]=n;let t=12345;for(let n=255;n>0;n--){t=t*1103515245+12345&2147483647;const r=t%(n+1);[e[n],e[r]]=[e[r],e[n]]}for(let n=0;n<512;n++)Zn[n]=e[n&255]})();const l0=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];function rl(i){return i*i*i*(i*(i*6-15)+10)}function Do(i,e,t){return i+t*(e-i)}function Ms(i,e,t){const n=l0[i&7];return n[0]*e+n[1]*t}function Da(i,e){const t=Math.floor(i)&255,n=Math.floor(e)&255,r=i-Math.floor(i),s=e-Math.floor(e),o=rl(r),a=rl(s),c=Zn[Zn[t]+n],l=Zn[Zn[t]+n+1],h=Zn[Zn[t+1]+n],d=Zn[Zn[t+1]+n+1],f=Do(Ms(c,r,s),Ms(h,r-1,s),o),p=Do(Ms(l,r,s-1),Ms(d,r-1,s-1),o);return Do(f,p,a)}const dt=Object.freeze({SHIRE:"shire",FOREST:"forest",MOUNTAIN:"mountain",MIRKWOOD:"mirkwood",PLAINS:"plains"});class Lr{constructor({type:e,name:t,surfaceBlock:n,treeDensity:r,minHeight:s,maxHeight:o}){this.type=e,this.name=t,this.surfaceBlock=n,this.treeDensity=r,this.minHeight=s,this.maxHeight=o}}const sl={[dt.SHIRE]:new Lr({type:dt.SHIRE,name:"The Shire",surfaceBlock:x.GRASS,treeDensity:.02,minHeight:29,maxHeight:34}),[dt.FOREST]:new Lr({type:dt.FOREST,name:"Forest",surfaceBlock:x.GRASS,treeDensity:.08,minHeight:30,maxHeight:40}),[dt.MOUNTAIN]:new Lr({type:dt.MOUNTAIN,name:"Misty Mountains",surfaceBlock:x.STONE,treeDensity:.005,minHeight:35,maxHeight:85}),[dt.MIRKWOOD]:new Lr({type:dt.MIRKWOOD,name:"Mirkwood",surfaceBlock:x.MUD,treeDensity:.2,minHeight:23,maxHeight:35}),[dt.PLAINS]:new Lr({type:dt.PLAINS,name:"Plains",surfaceBlock:x.GRASS,treeDensity:.003,minHeight:29,maxHeight:33})};function d0(i){return sl[i]||sl[dt.PLAINS]}const h0=[{id:"anduin",name:"River Anduin",width:8,current:{x:0,z:1.5},points:[{x:320,z:-100},{x:330,z:-50},{x:335,z:0},{x:340,z:40},{x:345,z:60},{x:350,z:80},{x:355,z:120},{x:360,z:150}]},{id:"shire_brook",name:"The Water (Shire Brook)",width:3,current:{x:.6,z:0},points:[{x:-40,z:5},{x:60,z:5}]},{id:"forest_river",name:"Forest River",width:5,current:{x:-1,z:0},points:[{x:460,z:20},{x:440,z:25},{x:420,z:30},{x:400,z:35},{x:380,z:40},{x:360,z:50}]}];function u0(i,e,t,n,r,s){const o=r-t,a=s-n,c=o*o+a*a;if(c===0)return Math.sqrt((i-t)**2+(e-n)**2);let l=((i-t)*o+(e-n)*a)/c;l=Math.max(0,Math.min(1,l));const h=t+l*o,d=n+l*a;return Math.sqrt((i-h)**2+(e-d)**2)}function f0(i,e,t){let n=1/0;for(let r=0;r<t.points.length-1;r++){const s=t.points[r],o=t.points[r+1],a=u0(i,e,s.x,s.z,o.x,o.z);a<n&&(n=a)}return n}function hd(i,e){for(const t of h0)if(f0(i,e,t)<=t.width/2)return t;return null}function p0(i,e){const t=hd(i,e);return t?{...t.current}:null}const m0=32,_0=26,Fs=-100,g0=560,Bs=-120,v0=150,bs=.02,x0=[{x:0,z:0,biome:dt.SHIRE,radius:70},{x:80,z:20,biome:dt.PLAINS,radius:40},{x:140,z:40,biome:dt.FOREST,radius:40},{x:200,z:30,biome:dt.FOREST,radius:40},{x:270,z:50,biome:dt.MOUNTAIN,radius:60},{x:340,z:60,biome:dt.PLAINS,radius:45},{x:400,z:40,biome:dt.MIRKWOOD,radius:60},{x:420,z:90,biome:dt.MIRKWOOD,radius:35},{x:470,z:30,biome:dt.PLAINS,radius:30},{x:520,z:20,biome:dt.MOUNTAIN,radius:40}];function Ws(i,e,t){let n=dt.PLAINS,r=1/0;for(const s of x0){const o=i-s.x,a=e-s.z,l=Math.sqrt(o*o+a*a)/s.radius;l<r&&(r=l,n=s.biome)}return d0(n)}function Lt(i,e,t){const n=Ws(i,e),r=Da(i*bs+t*.1,e*bs),s=Da(i*bs*2+t*.1+100,e*bs*2+100)*.5,a=((r+s)/1.5+1)/2;return Math.floor(n.minHeight+a*(n.maxHeight-n.minHeight))}x.COAL_ORE,x.COPPER_ORE,x.IRON_ORE;dt.FOREST+"",dt.MIRKWOOD+"",dt.SHIRE+"",dt.PLAINS+"";const y0=-20,E0=.6,ud=1.8,Pt=E0/2,ol=0;function S0(i,e){i.velocity.y+=y0*e}function M0(i,e,t,n){const r=[],s=Math.floor(e-Pt),o=Math.floor(e+Pt-.001),a=Math.floor(n-Pt),c=Math.floor(n+Pt-.001),l=Math.floor(t),h=Math.floor(t+ud-.001);for(let d=s;d<=o;d++)for(let f=a;f<=c;f++)for(let p=l;p<=h;p++)Qt(i.getBlock(d,p,f))&&r.push({bx:d,by:p,bz:f});return r}function b0(i,e,t){const n=i.position,r=M0(e,n.x,n.y,n.z);for(const{bx:o,bz:a}of r){const c=n.x-Pt,l=n.x+Pt,h=n.z-Pt,d=n.z+Pt,f=l-o,p=o+1-c,_=d-a,g=a+1-h,m=Math.min(f,p),u=Math.min(_,g);m<u?f<p?n.x=o-Pt-.001:n.x=o+1+Pt+.001:_<g?n.z=a-Pt-.001:n.z=a+1+Pt+.001}const s=n.y+i.velocity.y*t;if(i.velocity.y<=0){const o=Math.floor(n.y)-1,a=Math.floor(s)-1;for(let c=o;c>=a;c--){const l=Math.floor(n.x-Pt),h=Math.floor(n.x+Pt-.001),d=Math.floor(n.z-Pt),f=Math.floor(n.z+Pt-.001);for(let p=l;p<=h;p++)for(let _=d;_<=f;_++)if(Qt(e.getBlock(p,c,_))){n.y=c+1,i.velocity.y=0,i.onGround=!0;return}}}else{const o=Math.floor(s+ud),a=Math.floor(n.x-Pt),c=Math.floor(n.x+Pt-.001),l=Math.floor(n.z-Pt),h=Math.floor(n.z+Pt-.001);for(let d=a;d<=c;d++)for(let f=l;f<=h;f++)if(Qt(e.getBlock(d,o,f))){i.velocity.y=0;return}}n.y=s,i.onGround=!1,n.y<ol&&(n.y=ol,i.velocity.y=0,i.onGround=!0)}const Lo=[{dir:[0,1,0],verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{dir:[0,-1,0],verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{dir:[1,0,0],verts:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{dir:[-1,0,0],verts:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]]},{dir:[0,0,1],verts:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]]},{dir:[0,0,-1],verts:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}],en={[x.GRASS]:[.32,.6,.24],[x.DIRT]:[.45,.33,.2],[x.STONE]:[.5,.5,.52],[x.WOOD]:[.4,.24,.12],[x.LEAVES]:[.18,.48,.13],[x.WATER]:[.15,.35,.65],[x.SAND]:[.82,.72,.45],[x.CLAY]:[.58,.42,.32],[x.GRAVEL]:[.52,.5,.48],[x.COBBLESTONE]:[.42,.42,.44],[x.PLANKS]:[.58,.4,.2],[x.IRON_ORE]:[.48,.45,.42],[x.COPPER_ORE]:[.5,.38,.28],[x.COAL_ORE]:[.22,.22,.24],[x.GLASS]:[.72,.82,.88],[x.CAMPFIRE]:[.45,.22,.08],[x.WORKBENCH]:[.52,.36,.18],[x.FORGE]:[.3,.3,.32],[x.KITCHEN]:[.48,.33,.18],[x.LOOM]:[.62,.52,.38],[x.RUNE_TABLE]:[.25,.2,.45],[x.TORCH]:[.92,.72,.18],[x.THATCH]:[.68,.6,.32],[x.STONE_BRICK]:[.48,.48,.46],[x.IRON_BLOCK]:[.68,.68,.72],[x.COPPER_BLOCK]:[.7,.42,.18],[x.SNOW]:[.93,.95,.98],[x.ICE]:[.65,.82,.92],[x.MOSSY_STONE]:[.35,.45,.32],[x.CORRUPTED_STONE]:[.28,.18,.32],[x.DARK_STONE]:[.18,.15,.2],[x.OAK_PLANKS]:[.52,.36,.16],[x.BIRCH_WOOD]:[.78,.73,.62],[x.REED]:[.42,.58,.28],[x.MUD]:[.32,.25,.15],[x.SLATE]:[.35,.36,.4],[x.MARBLE]:[.88,.86,.82],[x.OBSIDIAN]:[.08,.06,.12],[x.CRYSTAL]:[.68,.78,.92],[x.TALL_GRASS]:[.28,.56,.2],[x.CHEST]:[.55,.38,.18],[x.BED]:[.6,.15,.12],[x.DOOR]:[.42,.28,.14],[x.DOOR_OPEN]:[.42,.28,.14]},La=[1,0,1];function $n(i,e,t,n){let r=i*374761+e*668265+t*1274613+n*982451|0;return r=(r>>16^r)*73244475|0,r=(r>>16^r)*73244475|0,r=r>>16^r,((r&65535)/65535-.5)*.24}function T0(i,e,t,n,r,s){const[o,a,c]=r.dir;let l,h;a!==0?(l=[1,0,0],h=[0,0,1]):o!==0?(l=[0,1,0],h=[0,0,1]):(l=[1,0,0],h=[0,1,0]);const d=r.verts[s],f=d[0]*l[0]+d[1]*l[1]+d[2]*l[2]>.5?1:-1,p=d[0]*h[0]+d[1]*h[1]+d[2]*h[2]>.5?1:-1,_=Qt(i.getBlock(e+o+l[0]*f,t+a+l[1]*f,n+c+l[2]*f))?1:0,g=Qt(i.getBlock(e+o+h[0]*p,t+a+h[1]*p,n+c+h[2]*p))?1:0,m=Qt(i.getBlock(e+o+l[0]*f+h[0]*p,t+a+l[1]*f+h[1]*p,n+c+l[2]*f+h[2]*p))?1:0;return 1-(_&&g?3:_+g+m)*.15}const A0=[{verts:[[.5,0,.45],[.78,.28,.44],[.78,.28,.56],[.5,0,.55]]},{verts:[[.54,0,.48],[.69,.28,.71],[.59,.28,.77],[.46,0,.53]]},{verts:[[.54,0,.53],[.41,.28,.77],[.31,.28,.71],[.46,0,.48]]},{verts:[[.5,0,.55],[.22,.28,.56],[.22,.28,.44],[.5,0,.45]]},{verts:[[.46,0,.53],[.31,.28,.29],[.41,.28,.23],[.54,0,.48]]},{verts:[[.46,0,.48],[.59,.28,.23],[.69,.28,.29],[.54,0,.53]]}],R0=[.45,.33,.2],w0=[.62,.5,.34],C0=[.35,.22,.12],I0=[.58,.58,.56],O0=[.65,.55,.3],D0=[.38,.32,.22],L0=[.85,.88,.92],P0=[.5,.5,.48];function N0(i){return i!==x.AIR}function U0(i,e){const t=e[1]===1,n=e[1]===-1;switch(i){case x.GRASS:return t?en[x.GRASS]:R0;case x.WOOD:return t?w0:n?C0:en[x.WOOD];case x.BIRCH_WOOD:return t?[.85,.8,.7]:en[x.BIRCH_WOOD];case x.STONE:return t?I0:en[x.STONE];case x.COBBLESTONE:return t?P0:en[x.COBBLESTONE];case x.SAND:return n?O0:en[x.SAND];case x.MUD:return t?D0:en[x.MUD];case x.SNOW:return t?en[x.SNOW]:L0;case x.DIRT:return t?[.52,.4,.26]:en[x.DIRT];case x.IRON_ORE:return t?[.5,.48,.42]:en[x.IRON_ORE];case x.COPPER_ORE:return t?[.5,.4,.28]:en[x.COPPER_ORE];default:return en[i]||La}}function k0(i,e,t,n,r){const s=[],o=[],a=[];for(let c=0;c<qe;c++)for(let l=0;l<qe;l++)for(let h=0;h<qe;h++){const d=i.getBlock(c,l,h);if(!N0(d))continue;const f=e*qe+c,p=t*qe+l,_=n*qe+h;if(d===x.TALL_GRASS){const g=en[d]||La;for(const m of A0){const u=s.length/3;for(const T of m.verts){const b=f+T[0],S=p+T[1],w=_+T[2];s.push(b,S,w);const R=.4+2*T[1];o.push((g[0]+$n(b,S,w,0))*R,(g[1]+$n(b,S,w,1))*R,(g[2]+$n(b,S,w,2))*R)}a.push(u,u+1,u+2,u,u+2,u+3),a.push(u+2,u+1,u,u+3,u+2,u)}continue}if(d===x.WATER){if(r.getBlock(f,p+1,_)===x.WATER)continue;const m=en[x.WATER]||La;for(const u of Lo){const T=f+u.dir[0],b=p+u.dir[1],S=_+u.dir[2];if(r.getBlock(T,b,S)!==x.AIR||u.dir[1]===-1)continue;const R=s.length/3;for(const I of u.verts){const P=f+I[0],M=p+I[1]-(u.dir[1]===1?.15:0),E=_+I[2];s.push(P,M,E),o.push(m[0]+$n(P,M,E,0)*.3,m[1]+$n(P,M,E,1)*.3,m[2]+$n(P,M,E,2)*.3)}a.push(R,R+1,R+2,R,R+2,R+3)}continue}for(let g=0;g<Lo.length;g++){const m=Lo[g],u=f+m.dir[0],T=p+m.dir[1],b=_+m.dir[2];if(Qt(r.getBlock(u,T,b)))continue;const S=s.length/3,w=U0(d,m.dir),R=m.dir[1]===1?1:m.dir[1]===-1?.55:m.dir[0]===1?.82:m.dir[0]===-1?.68:m.dir[2]===1?.78:.65,I=d===x.GRASS&&m.dir[1]===1?2.5:1;for(let P=0;P<m.verts.length;P++){const M=m.verts[P],E=f+M[0],D=p+M[1],Y=_+M[2];s.push(E,D,Y);const B=T0(r,f,p,_,m,P),$=R*B;o.push((w[0]+$n(E,D,Y,0)*I)*$,(w[1]+$n(E,D,Y,1)*I)*$,(w[2]+$n(E,D,Y,2)*I)*$)}a.push(S,S+1,S+2,S,S+2,S+3)}}return s.length===0?null:{positions:new Float32Array(s),colors:new Float32Array(o),indices:a,vertexCount:s.length/3}}function F0(i,e,t,n,r){const s=k0(i,e,t,n,r);if(!s)return null;const o=new yi;o.setAttribute("position",new ri(s.positions,3)),o.setAttribute("color",new ri(s.colors,3)),o.setIndex(s.indices),o.computeVertexNormals();const a=new Ys({vertexColors:!0});return new _n(o,a)}class B0{constructor(e,t){this.scene=e,this.world=t,this.meshes=new Map,this.dirty=new Set,this._attempted=new Set}invalidateChunks(e){for(const t of e){if(this.meshes.has(t)){const n=this.meshes.get(t);this.scene.remove(n),n.geometry.dispose(),this.meshes.delete(t)}this._attempted.delete(t)}}markDirty(e,t,n){const r=Math.floor(e/qe),s=Math.floor(t/qe),o=Math.floor(n/qe),a=`${r},${s},${o}`;this.dirty.add(a),this._attempted.delete(a);const c=(e%qe+qe)%qe,l=(t%qe+qe)%qe,h=(n%qe+qe)%qe;c===0&&(this.dirty.add(`${r-1},${s},${o}`),this._attempted.delete(`${r-1},${s},${o}`)),c===qe-1&&(this.dirty.add(`${r+1},${s},${o}`),this._attempted.delete(`${r+1},${s},${o}`)),l===0&&(this.dirty.add(`${r},${s-1},${o}`),this._attempted.delete(`${r},${s-1},${o}`)),l===qe-1&&(this.dirty.add(`${r},${s+1},${o}`),this._attempted.delete(`${r},${s+1},${o}`)),h===0&&(this.dirty.add(`${r},${s},${o-1}`),this._attempted.delete(`${r},${s},${o-1}`)),h===qe-1&&(this.dirty.add(`${r},${s},${o+1}`),this._attempted.delete(`${r},${s},${o+1}`))}update(e,t,n=4){const r=Math.floor(e/qe),s=Math.floor(t/qe),o=new Set;for(const a of this.dirty)if(this.meshes.has(a)){const c=this.meshes.get(a);this.scene.remove(c),c.geometry.dispose(),this.meshes.delete(a)}this.dirty.clear();for(let a=-n;a<=n;a++)for(let c=-n;c<=n;c++){const l=r+a,h=s+c;for(let d=0;d<5;d++){const f=`${l},${d},${h}`,p=this.world.chunks.get(f);if(p&&(o.add(f),!this.meshes.has(f)&&!this._attempted.has(f))){this._attempted.add(f);const _=F0(p,l,d,h,this.world);_&&(this.scene.add(_),this.meshes.set(f,_))}}}for(const[a,c]of this.meshes)o.has(a)||(this.scene.remove(c),c.geometry.dispose(),this.meshes.delete(a),this._attempted.delete(a))}}class z0{constructor(e){this.keys={},this._justPressed={},this.mouseDx=0,this.mouseDy=0,this.locked=!1,this.leftClick=!1,this.rightClick=!1,this.scrollDelta=0,this.menuOpen=!1,document.addEventListener("keydown",t=>{t.code==="Tab"&&t.preventDefault(),this.keys[t.code]||(this._justPressed[t.code]=!0),this.keys[t.code]=!0}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),e.addEventListener("click",()=>{this.locked||e.requestPointerLock()}),document.addEventListener("mousedown",t=>{this.locked&&(t.button===0&&(this.leftClick=!0,this.keys.mouseLeft=!0),t.button===2&&(this.rightClick=!0))}),document.addEventListener("mouseup",t=>{t.button===0&&(this.keys.mouseLeft=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===e,!this.locked&&!this.menuOpen?document.getElementById("instructions").style.display="block":this.locked&&(document.getElementById("instructions").style.display="none")}),document.addEventListener("mousemove",t=>{this.locked&&(this.mouseDx+=t.movementX,this.mouseDy+=t.movementY)}),document.addEventListener("wheel",t=>{this.locked&&(this.scrollDelta+=Math.sign(t.deltaY))})}getMovementInput(){return{forward:!!this.keys.KeyW,back:!!this.keys.KeyS,left:!!this.keys.KeyA,right:!!this.keys.KeyD}}getJump(){return!!this.keys.Space}consumeMouse(){const e=this.mouseDx,t=this.mouseDy;return this.mouseDx=0,this.mouseDy=0,{dx:e,dy:t}}consumeLeftClick(){const e=this.leftClick;return this.leftClick=!1,e}consumeRightClick(){const e=this.rightClick;return this.rightClick=!1,e}consumeKeyPress(e){const t=!!this._justPressed[e];return this._justPressed[e]=!1,t}consumeScroll(){const e=this.scrollDelta;return this.scrollDelta=0,e}}const dn=Object.freeze({RAW:"raw",COOKED:"cooked",MEAL:"meal",PRESERVED:"preserved",RESTORATIVE:"restorative"}),Ii=Object.freeze({STAMINA_REGEN:"stamina_regen",COLD_RESISTANCE:"cold_resistance",FOCUS_REGEN:"focus_regen",CORRUPTION_RESISTANCE:"corruption_resistance",HEALTH_REGEN:"health_regen"});class hn{constructor({id:e,name:t,category:n,hungerRestore:r,effects:s=[]}){this.id=e,this.name=t,this.category=n,this.hungerRestore=r,this.effects=s}}const fd={raw_berries:new hn({id:"raw_berries",name:"Raw Berries",category:dn.RAW,hungerRestore:8}),raw_meat:new hn({id:"raw_meat",name:"Raw Meat",category:dn.RAW,hungerRestore:5}),raw_mushroom:new hn({id:"raw_mushroom",name:"Raw Mushroom",category:dn.RAW,hungerRestore:6}),cooked_meat:new hn({id:"cooked_meat",name:"Cooked Meat",category:dn.COOKED,hungerRestore:25,effects:[{type:Ii.STAMINA_REGEN,duration:60,strength:2}]}),cooked_fish:new hn({id:"cooked_fish",name:"Cooked Fish",category:dn.COOKED,hungerRestore:20,effects:[{type:Ii.HEALTH_REGEN,duration:30,strength:1}]}),hearth_stew:new hn({id:"hearth_stew",name:"Hearth Stew",category:dn.MEAL,hungerRestore:40,effects:[{type:Ii.STAMINA_REGEN,duration:120,strength:3},{type:Ii.COLD_RESISTANCE,duration:120,strength:1}]}),lembas:new hn({id:"lembas",name:"Lembas Bread",category:dn.PRESERVED,hungerRestore:50}),athelas_tea:new hn({id:"athelas_tea",name:"Athelas Tea",category:dn.RESTORATIVE,hungerRestore:10,effects:[{type:Ii.HEALTH_REGEN,duration:60,strength:3},{type:Ii.CORRUPTION_RESISTANCE,duration:60,strength:2}]}),trail_rations:new hn({id:"trail_rations",name:"Trail Rations",category:dn.PRESERVED,hungerRestore:20}),herb_salad:new hn({id:"herb_salad",name:"Herb Salad",category:dn.MEAL,hungerRestore:30,effects:[{type:Ii.FOCUS_REGEN,duration:90,strength:2}]}),bread:new hn({id:"bread",name:"Bread",category:dn.COOKED,hungerRestore:20}),berries:new hn({id:"berries",name:"Berries",category:dn.RAW,hungerRestore:8}),mushroom:new hn({id:"mushroom",name:"Mushroom",category:dn.RAW,hungerRestore:6})};function H0(i){return fd[i]}function G0(i,e,t,n,r,s){const o=Oa[s];return o===void 0||Qt(i.getBlock(t,n,r))||!e.remove(s,1)?!1:(i.setBlock(t,n,r,o),!0)}function al(i,e,t,n){let r=Math.floor(e.x),s=Math.floor(e.y),o=Math.floor(e.z);const a=t.x>=0?1:-1,c=t.y>=0?1:-1,l=t.z>=0?1:-1,h=t.x!==0?Math.abs(1/t.x):1/0,d=t.y!==0?Math.abs(1/t.y):1/0,f=t.z!==0?Math.abs(1/t.z):1/0;let p=t.x!==0?(t.x>0?r+1-e.x:e.x-r)*h:1/0,_=t.y!==0?(t.y>0?s+1-e.y:e.y-s)*d:1/0,g=t.z!==0?(t.z>0?o+1-e.z:e.z-o)*f:1/0,m=0,u={x:0,y:0,z:0};for(;m<n;){if(r0(i.getBlock(r,s,o)))return{blockPos:{x:r,y:s,z:o},normal:u,t:m};p<_&&p<g?(m=p,r+=a,p+=h,u={x:-a,y:0,z:0}):_<g?(m=_,s+=c,_+=d,u={x:0,y:-c,z:0}):(m=g,o+=l,g+=f,u={x:0,y:0,z:-l})}return null}function mn(i,e){const t=i.x-e.x,n=i.y-e.y,r=i.z-e.z;return Math.sqrt(t*t+n*n+r*r)}function Ts(i,e){return i.x*e.x+i.y*e.y+i.z*e.z}function fi(i){const e=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z);return e===0?{x:0,y:0,z:0}:{x:i.x/e,y:i.y/e,z:i.z/e}}const le=Object.freeze({WOLF:"wolf",GOBLIN:"goblin",SPIDER:"spider",TROLL:"troll",WIGHT:"wight",GUARDIAN:"guardian",CONSTRUCT:"construct",ORC:"orc",GIANT_SPIDER:"giant_spider",SHADOW:"shadow",BARROW_WIGHT:"barrow_wight",GOBLIN_ARCHER:"goblin_archer",CORRUPTED_BEAR:"corrupted_bear",DARK_CONSTRUCT:"dark_construct",WRAITH:"wraith"}),Oi=Object.freeze({IDLE:"idle",CHASE:"chase",ATTACK:"attack",DEAD:"dead"}),V0={[le.WOLF]:{health:30,speed:4,aggroRange:12,damage:8,attackRange:1.5},[le.GOBLIN]:{health:25,speed:3,aggroRange:10,damage:6,attackRange:1.5},[le.SPIDER]:{health:20,speed:5,aggroRange:8,damage:10,attackRange:1.2},[le.TROLL]:{health:100,speed:2,aggroRange:15,damage:25,attackRange:2.5},[le.WIGHT]:{health:50,speed:3.5,aggroRange:14,damage:15,attackRange:1.5},[le.GUARDIAN]:{health:150,speed:1.5,aggroRange:18,damage:30,attackRange:2},[le.CONSTRUCT]:{health:80,speed:2.5,aggroRange:12,damage:20,attackRange:2},[le.ORC]:{health:50,speed:3,aggroRange:12,damage:12,attackRange:1.5},[le.GIANT_SPIDER]:{health:45,speed:4.5,aggroRange:10,damage:15,attackRange:1.5},[le.SHADOW]:{health:20,speed:6,aggroRange:16,damage:18,attackRange:1.2},[le.BARROW_WIGHT]:{health:80,speed:3,aggroRange:16,damage:22,attackRange:1.8},[le.GOBLIN_ARCHER]:{health:20,speed:2.5,aggroRange:18,damage:8,attackRange:8},[le.CORRUPTED_BEAR]:{health:120,speed:3,aggroRange:14,damage:20,attackRange:2},[le.DARK_CONSTRUCT]:{health:130,speed:2,aggroRange:14,damage:28,attackRange:2.2},[le.WRAITH]:{health:70,speed:4,aggroRange:20,damage:30,attackRange:1.8}},W0={[le.WOLF]:[{type:"leather",count:1},{type:"raw_meat",count:1}],[le.GOBLIN]:[{type:"stick",count:2},{type:"iron_ore",count:1}],[le.SPIDER]:[{type:"fiber",count:2},{type:"rope",count:1}],[le.TROLL]:[{type:"stone",count:3},{type:"leather",count:2}],[le.WIGHT]:[{type:"relic_shard",count:1},{type:"lore_fragment",count:1}],[le.GUARDIAN]:[{type:"relic_shard",count:2},{type:"iron_ore",count:3}],[le.CONSTRUCT]:[{type:"iron_ore",count:2},{type:"copper_ore",count:2}],[le.ORC]:[{type:"iron_ore",count:1},{type:"leather",count:1}],[le.GIANT_SPIDER]:[{type:"fiber",count:3},{type:"rope",count:2}],[le.SHADOW]:[{type:"relic_shard",count:1}],[le.BARROW_WIGHT]:[{type:"relic_shard",count:2},{type:"lore_fragment",count:2}],[le.GOBLIN_ARCHER]:[{type:"stick",count:3},{type:"fiber",count:1}],[le.CORRUPTED_BEAR]:[{type:"leather",count:3},{type:"raw_meat",count:2}],[le.DARK_CONSTRUCT]:[{type:"iron_ore",count:3},{type:"relic_shard",count:1}],[le.WRAITH]:[{type:"relic_shard",count:3},{type:"lore_fragment",count:2}]};function X0(i){return W0[i]||[]}class q0{constructor(e,t){const n=V0[t];this.position={...e},this.type=t,this.health=n.health,this.maxHealth=n.health,this.speed=n.speed,this.aggroRange=n.aggroRange,this.damage=n.damage,this.attackRange=n.attackRange,this.state=Oi.IDLE,this.attackCooldown=0}updateAI(e,t,n,r){if(this.isDead()){this.state=Oi.DEAD;return}const s=mn(this.position,e);if(s>this.aggroRange*1.5?this.state=Oi.IDLE:s<=this.aggroRange&&(this.state=Oi.CHASE),this.state===Oi.CHASE){const o=e.x-this.position.x,a=e.z-this.position.z,c=Math.sqrt(o*o+a*a);if(c>.1){const l=o/c*this.speed*t,h=a/c*this.speed*t;if(r){const d=this.position.x+l;this._collidesWithBlock(d,this.position.z,r)||(this.position.x=d);const f=this.position.z+h;this._collidesWithBlock(this.position.x,f,r)||(this.position.z=f)}else this.position.x+=l,this.position.z+=h}}n&&(this.position.y=n(Math.floor(this.position.x),Math.floor(this.position.z))+1),this.attackCooldown=Math.max(0,this.attackCooldown-t)}_collidesWithBlock(e,t,n){const r=Math.floor(e),s=Math.floor(this.position.y),o=Math.floor(t);return Qt(n.getBlock(r,s,o))||Qt(n.getBlock(r,s+1,o))}canAttack(e){return this.state===Oi.CHASE&&mn(this.position,e)<=this.attackRange&&this.attackCooldown<=0}performAttack(){return this.attackCooldown=1,this.damage}takeDamage(e){this.health=Math.max(0,this.health-e),this.health<=0&&(this.state=Oi.DEAD)}isDead(){return this.health<=0}}const zn=Object.freeze({dawn:240,day:2400,dusk:240,night:2400}),gr=zn.dawn+zn.day+zn.dusk+zn.night,_t=Object.freeze({DAWN:"dawn",DAY:"day",DUSK:"dusk",NIGHT:"night"}),K0=zn.dawn/gr,Y0=(zn.dawn+zn.day)/gr,$0=(zn.dawn+zn.day+zn.dusk)/gr;class j0{constructor(){this.time=0,this.day=1}tick(e){for(this.time+=e;this.time>=gr;)this.time-=gr,this.day++}getNormalizedTime(){return this.time/gr}getPhase(){const e=this.getNormalizedTime();return e<K0?_t.DAWN:e<Y0?_t.DAY:e<$0?_t.DUSK:_t.NIGHT}}const pd=Object.freeze({man:{id:"man",name:"Man",classIds:["ranger","soldier","scholar"],statModifiers:{health:100,stamina:110,focus:50,corruptionResistance:50,perception:50,craft:50}},elf:{id:"elf",name:"Elf",classIds:["archer","warden","gatherer"],statModifiers:{health:90,stamina:100,focus:80,corruptionResistance:50,perception:70,craft:50}},dwarf:{id:"dwarf",name:"Dwarf",classIds:["miner","blacksmith","delver"],statModifiers:{health:120,stamina:100,focus:35,corruptionResistance:70,perception:40,craft:80}},hobbit:{id:"hobbit",name:"Hobbit",classIds:["burglar","cook","forager"],statModifiers:{health:80,stamina:100,focus:55,corruptionResistance:75,perception:60,craft:55}}});function Z0(i){return pd[i]||null}const Za=Object.freeze({ranger:{id:"ranger",name:"Ranger",raceId:"man",starterItems:[{type:"short_bow",count:1},{type:"knife",count:1},{type:"raw_meat",count:2}],passive:"Tracking: see beast footprints",activeAbility:"Focused Shot"},soldier:{id:"soldier",name:"Soldier",raceId:"man",starterItems:[{type:"spear",count:1},{type:"shield",count:1},{type:"raw_meat",count:2}],passive:"Improved block stability",activeAbility:"Shield Bash"},scholar:{id:"scholar",name:"Scholar",raceId:"man",starterItems:[{type:"knife",count:1},{type:"lantern",count:1},{type:"raw_meat",count:2}],passive:"Identify ruins and relics faster",activeAbility:"Sense Ward"},archer:{id:"archer",name:"Archer",raceId:"elf",starterItems:[{type:"refined_bow",count:1},{type:"knife",count:1},{type:"stick",count:10}],passive:"Reduced bow sway",activeAbility:"Keen Eye"},warden:{id:"warden",name:"Warden",raceId:"elf",starterItems:[{type:"spear",count:1},{type:"ward_token",count:1},{type:"raw_meat",count:2}],passive:"Stronger resistance near allied beacons",activeAbility:"Light Ward"},gatherer:{id:"gatherer",name:"Gatherer",raceId:"elf",starterItems:[{type:"knife",count:1},{type:"fiber",count:5},{type:"raw_meat",count:3}],passive:"Better yield from plants and herbs",activeAbility:"Nature Sense"},miner:{id:"miner",name:"Miner",raceId:"dwarf",starterItems:[{type:"pickaxe",count:1},{type:"stick",count:5},{type:"stone",count:5}],passive:"Faster ore and stone extraction",activeAbility:"Delver's Strike"},blacksmith:{id:"blacksmith",name:"Blacksmith",raceId:"dwarf",starterItems:[{type:"hammer",count:1},{type:"stone",count:10},{type:"raw_meat",count:2}],passive:"Gear wears slower",activeAbility:"Field Repair"},delver:{id:"delver",name:"Delver",raceId:"dwarf",starterItems:[{type:"axe",count:1},{type:"lantern",count:1},{type:"raw_meat",count:2}],passive:"Reduced underground detection and fall damage",activeAbility:"Stone Sense"},burglar:{id:"burglar",name:"Burglar",raceId:"hobbit",starterItems:[{type:"knife",count:1},{type:"sling",count:1},{type:"cooked_meat",count:3}],passive:"Reduced enemy detection while crouched",activeAbility:"Slip Away"},cook:{id:"cook",name:"Cook",raceId:"hobbit",starterItems:[{type:"knife",count:1},{type:"fiber",count:5},{type:"cooked_meat",count:5}],passive:"Meals give longer buffs",activeAbility:"Hearth Meal"},forager:{id:"forager",name:"Forager",raceId:"hobbit",starterItems:[{type:"stick",count:3},{type:"knife",count:1},{type:"cooked_meat",count:3}],passive:"Improved berry, mushroom, and root yields",activeAbility:"Wild Sense"}});function Q0(i){return Za[i]||null}class md{constructor(e){this.size=e,this._slots=new Array(e).fill(null)}getSlot(e){return this._slots[e]||null}_findSlot(e){for(let t=0;t<this.size;t++)if(this._slots[t]&&this._slots[t].type===e)return t;return-1}_findEmpty(){for(let e=0;e<this.size;e++)if(!this._slots[e])return e;return-1}addItem(e,t){const n=this._findSlot(e);if(n>=0)return this._slots[n].count+=t,!0;const r=this._findEmpty();return r<0?!1:(this._slots[r]={type:e,count:t},!0)}removeItem(e,t){const n=this._findSlot(e);return n<0||this._slots[n].count<t?!1:(this._slots[n].count-=t,this._slots[n].count<=0&&(this._slots[n]=null),!0)}moveSlot(e,t){const n=this._slots[t];this._slots[t]=this._slots[e],this._slots[e]=n}count(e){let t=0;for(const n of this._slots)n&&n.type===e&&(t+=n.count);return t}getItems(){return this._slots.filter(e=>e!==null).map(e=>({...e}))}add(e,t){return this.addItem(e,t)}remove(e,t){return this.removeItem(e,t)}}const J0=.1,eg=.5,tg=5,ng=10,ig=.3,rg=1,sg=.5,og=.5,ag=.3,cg=.6,lg=-15,dg=60,hg={[dt.SHIRE]:0,[dt.FOREST]:-.2,[dt.MOUNTAIN]:-1,[dt.MIRKWOOD]:-.3,[dt.PLAINS]:.1};class _d{constructor(){this.health=100,this.maxHealth=100,this.stamina=100,this.maxStamina=100,this.hunger=100,this.maxHunger=100,this.focus=50,this.maxFocus=100,this.temperature=0,this.coldResistance=0,this.corruption=0,this._inCorruptedZone=!1,this._injuries=[]}setBiomeTemperature(e){this.temperature=hg[e]??0}setCorruptionZone(e){this._inCorruptedZone=e}applyInjury(e,t,n){this._injuries=this._injuries.filter(r=>r.type!==e),this._injuries.push({type:e,remaining:t,strength:n})}hasInjury(e){return this._injuries.some(t=>t.type===e)}getFractureSpeedMultiplier(){return this.hasInjury("fracture")?cg:1}checkFallFracture(e){e<=lg&&this.applyInjury("fracture",dg,1)}tick(e){if(this.hunger=Math.max(0,this.hunger-J0*e),this.hunger<=0&&(this.health=Math.max(0,this.health-eg*e)),this.temperature<0){const t=Math.min(0,this.temperature+this.coldResistance);t<0&&(this.health=Math.max(0,this.health-ig*Math.abs(t)*e))}this._inCorruptedZone&&(this.corruption=Math.min(100,this.corruption+rg*e)),this.corruption>50&&(this.focus=Math.max(0,this.focus-sg*(this.corruption/100)*e));for(const t of this._injuries)t.remaining-=e,t.type==="bleeding"?this.health=Math.max(0,this.health-og*t.strength*e):t.type==="poison"&&(this.health=Math.max(0,this.health-ag*t.strength*e));this._injuries=this._injuries.filter(t=>t.remaining>0),this.stamina=Math.min(this.maxStamina,this.stamina+tg*e)}applySprint(e){this.stamina=Math.max(0,this.stamina-ng*e)}eat(e){this.hunger=Math.min(this.maxHunger,this.hunger+e)}takeDamage(e){this.health=Math.max(0,this.health-e)}isDead(){return this.health<=0}}const ug=5,fg=.5;class gd{constructor({x:e,y:t,z:n},{moveSpeed:r=ug}={}){this.position={x:e,y:t,z:n},this.velocity={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.moveSpeed=r,this.onGround=!1,this.crouching=!1,this.cameraMode="first_person"}toggleCamera(){this.cameraMode=this.cameraMode==="first_person"?"third_person_behind":"first_person"}setCrouch(e){this.crouching=e}applyMovementInput(e,t){let n=0,r=0;if(e.forward&&(r-=1),e.back&&(r+=1),e.left&&(n-=1),e.right&&(n+=1),n===0&&r===0)return;const s=Math.sqrt(n*n+r*r);n/=s,r/=s;const o=Math.cos(this.yaw),a=Math.sin(this.yaw),c=n*o-r*a,l=n*a+r*o,h=this.crouching?this.moveSpeed*fg:this.moveSpeed;this.position.x+=c*h*t,this.position.z+=l*h*t}}const Po=Object.freeze({STORY:"story",STANDARD:"standard",HARSH:"harsh"}),pg={[Po.STORY]:1.25,[Po.STANDARD]:1,[Po.HARSH]:.8};function mg({raceId:i,classId:e,difficulty:t,seed:n,worldName:r,characterName:s}){return{raceId:i,classId:e,difficulty:t,seed:n,worldName:r||"",characterName:s||""}}function _g(i){const e=Z0(i.raceId),t=Q0(i.classId),n=new md(36);for(const a of t.starterItems)n.add(a.type,a.count);const r=pg[i.difficulty]||1,s=new _d;return s.maxHealth=Math.round(e.statModifiers.health*r),s.health=s.maxHealth,s.maxStamina=e.statModifiers.stamina,s.stamina=s.maxStamina,s.focus=e.statModifiers.focus,s.maxFocus=e.statModifiers.focus,{player:new gd({x:.5,y:m0+2,z:.5}),inventory:n,survivalStats:s,race:e,cls:t}}const No=3,Uo=.7,gg=.5,cl=1.2;class vg{constructor(){this.attackCooldown=0,this._guarding=!1}setGuard(e){this._guarding=e}playerAttack(e,t,n,r){const s=fi(t);let o=!1;for(const a of n){if(a.isDead()||mn(e,a.position)>No)continue;const l=fi({x:a.position.x-e.x,y:a.position.y-e.y,z:a.position.z-e.z});if(Ts(s,l)>=Uo){a.takeDamage(r),o=!0;break}}return o&&(this.attackCooldown=gg),o}heavyAttack(e,t,n,r){const s=fi(t);let o=!1;for(const a of n){if(a.isDead()||mn(e,a.position)>No)continue;const l=fi({x:a.position.x-e.x,y:a.position.y-e.y,z:a.position.z-e.z});if(Ts(s,l)>=Uo){a.takeDamage(r*2),o=!0;break}}return o&&(this.attackCooldown=cl),o}playerAttackWithWeapon(e,t,n,r,s){const o=r*(s.damageModifier||1);return this.playerAttack(e,t,n,o)}heavyAttackWithWeapon(e,t,n,r,s){const o=fi(t);let a=!1;const c=r*2*(s.damageModifier||1);for(const l of n){if(l.isDead()||mn(e,l.position)>No)continue;const d=fi({x:l.position.x-e.x,y:l.position.y-e.y,z:l.position.z-e.z});if(Ts(o,d)>=Uo){l.takeDamage(c),a=!0;break}}return a&&(this.attackCooldown=cl),a}parry(e,t,n){return mn(t,e.position)>e.attackRange?!1:(e.takeDamage(e.damage),!0)}rangedAttack(e,t,n,r,s){const o=fi(t),a=.95;for(const c of n){if(c.isDead()||mn(e,c.position)>s)continue;const h=fi({x:c.position.x-e.x,y:c.position.y-e.y,z:c.position.z-e.z});if(Ts(o,h)>=a)return c.takeDamage(r),!0}return!1}processEnemyAttacks(e,t,n){for(const r of e)if(!r.isDead()&&r.canAttack(t)){let s=r.performAttack();this._guarding&&(s*=.5),n.takeDamage(s)}}}const ll=8,dl=15,xg=35,hl=[le.WOLF,le.GOBLIN,le.SPIDER,le.TROLL,le.WIGHT,le.ORC,le.GIANT_SPIDER,le.SHADOW,le.BARROW_WIGHT,le.GOBLIN_ARCHER,le.CORRUPTED_BEAR,le.DARK_CONSTRUCT,le.WRAITH];class yg{constructor(e){this.rng=e}trySpawn({phase:e,playerPos:t,existingCount:n,surfaceY:r,getHeight:s}){if(e!==_t.NIGHT&&e!==_t.DUSK)return[];if(n>=ll)return[];const o=Math.floor(this.rng()*3)+1,a=[];for(let c=0;c<o&&n+a.length<ll;c++){const l=this.rng()*Math.PI*2,h=dl+this.rng()*(xg-dl),d=t.x+Math.cos(l)*h,f=t.z+Math.sin(l)*h,p=Math.floor(this.rng()*hl.length),_=hl[p],g=s?s(d,f)+1:r;a.push(new q0({x:d,y:g,z:f},_))}return a}}const Eg={[le.WOLF]:6974058,[le.GOBLIN]:4880954,[le.SPIDER]:2759178,[le.TROLL]:8022618,[le.WIGHT]:6702250,[le.GUARDIAN]:12290116,[le.CONSTRUCT]:5592490,[le.ORC]:5925434,[le.GIANT_SPIDER]:1706496,[le.SHADOW]:657946,[le.BARROW_WIGHT]:5583786,[le.GOBLIN_ARCHER]:3824170,[le.CORRUPTED_BEAR]:9065762,[le.DARK_CONSTRUCT]:2763349,[le.WRAITH]:1704004};le.WOLF+"",le.GOBLIN+"",le.SPIDER+"",le.TROLL+"",le.WIGHT+"",le.GUARDIAN+"",le.CONSTRUCT+"",le.ORC+"",le.GIANT_SPIDER+"",le.SHADOW+"",le.BARROW_WIGHT+"",le.GOBLIN_ARCHER+"",le.CORRUPTED_BEAR+"",le.DARK_CONSTRUCT+"",le.WRAITH+"";le.WOLF,le.SPIDER,le.GIANT_SPIDER,le.CORRUPTED_BEAR;function ie(i,e){const t=Math.min(255,(i>>16&255)*e)|0,n=Math.min(255,(i>>8&255)*e)|0,r=Math.min(255,(i&255)*e)|0;return t<<16|n<<8|r}function H(i,e,t,n,r,s,o,a){const c={name:i,w:e,h:t,d:n,offsetY:r,color:s};return o&&(c.offsetX=o),a&&(c.offsetZ=a),c}function Sg(i){return[H("body",.4,.32,.7,.48,i),H("chest",.44,.28,.2,.5,ie(i,1.05),0,-.22),H("head",.3,.26,.28,.58,ie(i,1.08),0,-.48),H("snout",.16,.12,.2,.5,ie(i,.88),0,-.68),H("nose",.06,.06,.04,.52,1052174,0,-.78),H("ear",.07,.14,.06,.74,ie(i,.8),-.1,-.42),H("ear",.07,.14,.06,.74,ie(i,.8),.1,-.42),H("tail",.08,.1,.3,.6,ie(i,.9),0,.48),H("tail_tip",.06,.08,.14,.68,ie(i,.85),0,.62),H("leg",.09,.32,.09,.16,ie(i,.82),-.14,-.22),H("leg",.09,.32,.09,.16,ie(i,.82),.14,-.22),H("leg",.1,.32,.1,.16,ie(i,.82),-.14,.22),H("leg",.1,.32,.1,.16,ie(i,.82),.14,.22),H("paw",.11,.06,.12,.03,ie(i,.7),-.14,-.22),H("paw",.11,.06,.12,.03,ie(i,.7),.14,-.22),H("paw",.11,.06,.12,.03,ie(i,.7),-.14,.22),H("paw",.11,.06,.12,.03,ie(i,.7),.14,.22)]}function ul(i,e){const t=[H("cephalothorax",.4*e,.22*e,.32*e,.3*e,ie(i,1.1),0,-.12*e),H("abdomen",.5*e,.3*e,.48*e,.35*e,i,0,.28*e),H("stripe",.12*e,.12*e,.4*e,.42*e,ie(i,.6),0,.28*e),H("eye",.05*e,.04*e,.04*e,.38*e,10029064,-.06*e,-.28*e),H("eye",.05*e,.04*e,.04*e,.38*e,10029064,.06*e,-.28*e),H("fang",.05*e,.1*e,.12*e,.22*e,ie(i,.7),-.08*e,-.32*e),H("fang",.05*e,.1*e,.12*e,.22*e,ie(i,.7),.08*e,-.32*e)],n=[-.2,-.06,.08,.22],r=[.32,.38,.38,.32],s=[.28,.3,.3,.26];for(let o=0;o<4;o++)for(const a of[-1,1])t.push(H("leg",.04*e,s[o]*e,.04*e,s[o]*.5*e,ie(i,.75),a*r[o]*e,n[o]*e)),t.push(H("foot",.06*e,.04*e,.06*e,.02*e,ie(i,.6),a*(r[o]+.02)*e,n[o]*e));return t}function Mg(i){return[H("body",.9,.58,1.2,.72,i),H("hump",.65,.2,.45,1.08,ie(i,1.06),0,-.15),H("head",.45,.38,.42,.92,ie(i,1.08),0,-.7),H("snout",.22,.16,.22,.82,ie(i,.9),0,-.98),H("nose",.08,.06,.04,.85,919560,0,-1.08),H("ear",.1,.1,.08,1.14,ie(i,.85),-.16,-.64),H("ear",.1,.1,.08,1.14,ie(i,.85),.16,-.64),H("leg",.18,.44,.18,.22,ie(i,.82),-.28,-.35),H("leg",.18,.44,.18,.22,ie(i,.82),.28,-.35),H("leg",.2,.44,.2,.22,ie(i,.82),-.3,.35),H("leg",.2,.44,.2,.22,ie(i,.82),.3,.35),H("claw",.2,.06,.1,.03,ie(i,.6),-.28,-.48),H("claw",.2,.06,.1,.03,ie(i,.6),.28,-.48),H("tail",.1,.1,.12,.88,ie(i,.9),0,.62)]}function ko(i,e){const t=[H("leg",.14,.28,.14,.14,ie(i,.75),-.1),H("leg",.14,.28,.14,.14,ie(i,.75),.1),H("foot",.18,.06,.2,.03,ie(i,.6),-.1,-.04),H("foot",.18,.06,.2,.03,ie(i,.6),.1,-.04),H("body",.42,.42,.3,.48,i,0,.02),H("loincloth",.3,.08,.2,.3,5916720,0,-.02),H("head",.32,.28,.28,.82,ie(i,1.1),0,-.02),H("ear",.14,.08,.06,.86,ie(i,.85),-.22),H("ear",.14,.08,.06,.86,ie(i,.85),.22),H("eye",.05,.04,.04,.86,10062874,-.08,-.14),H("eye",.05,.04,.04,.86,10062874,.08,-.14),H("nose",.06,.08,.08,.78,ie(i,.9),0,-.16),H("arm",.1,.42,.1,.48,ie(i,.88),-.28),H("arm",.1,.42,.1,.48,ie(i,.88),.28)];return e?(t.push(H("bow",.04,.45,.04,.5,6702880,-.35)),t.push(H("quiver",.1,.3,.06,.65,5848862,.08,.16))):t.push(H("sword",.04,.35,.04,.48,6709328,.32)),t}function bg(i){return[H("boot",.24,.12,.3,.06,3354142,-.14,.02),H("boot",.24,.12,.3,.06,3354142,.14,.02),H("leg",.2,.38,.2,.3,ie(i,.75),-.14),H("leg",.2,.38,.2,.3,ie(i,.75),.14),H("body",.55,.58,.38,.72,i),H("armor",.4,.3,.06,.78,4998712,0,-.16),H("pauldron",.18,.14,.22,1.02,4998712,-.34),H("pauldron",.18,.14,.22,1.02,4998712,.34),H("spike",.06,.1,.06,1.14,5919296,-.34),H("spike",.06,.1,.06,1.14,5919296,.34),H("head",.35,.3,.32,1.18,ie(i,1.05)),H("jaw",.28,.1,.12,1,ie(i,.9),0,-.14),H("tusk",.04,.08,.04,1.02,14340786,-.1,-.18),H("tusk",.04,.08,.04,1.02,14340786,.1,-.18),H("arm",.16,.52,.16,.7,ie(i,.88),-.38),H("arm",.16,.52,.16,.7,ie(i,.88),.38),H("axe_handle",.04,.65,.04,.65,5917748,.5),H("axe_head",.18,.14,.04,1.02,7368812,.5,-.06)]}function Tg(i){return[H("foot",.36,.14,.42,.07,ie(i,.7),-.22,.04),H("foot",.36,.14,.42,.07,ie(i,.7),.22,.04),H("leg",.28,.58,.32,.42,ie(i,.82),-.22),H("leg",.28,.58,.32,.42,ie(i,.82),.22),H("body",.9,1.05,.72,1.2,i),H("belly",.7,.5,.2,1,ie(i,1.05),0,-.2),H("shoulders",1.1,.22,.78,1.82,ie(i,.92),0,.04),H("head",.42,.32,.38,2.08,ie(i,1.1),0,-.04),H("brow",.38,.06,.08,2.18,ie(i,.85),0,-.18),H("jaw",.34,.1,.14,1.88,ie(i,.9),0,-.14),H("arm",.22,1.1,.22,1.1,ie(i,.88),-.62),H("arm",.22,1.1,.22,1.1,ie(i,.88),.62),H("fist",.28,.24,.22,.42,ie(i,.78),-.62),H("fist",.28,.24,.22,.42,ie(i,.78),.62),H("club",.12,.85,.12,.8,5916720,.72),H("club_head",.2,.25,.2,1.3,4996648,.72)]}function Pa(i,e){return[H("skirt",.5*e,.56*e,.4*e,.28*e,ie(i,.75)),H("hem",.56*e,.1*e,.44*e,.05*e,ie(i,.65)),H("body",.42*e,.65*e,.32*e,.75*e,ie(i,.85)),H("cloak",.48*e,.9*e,.06*e,.6*e,ie(i,.7),0,.08*e),H("hood",.38*e,.32*e,.34*e,1.25*e,ie(i,.72),0,.02*e),H("face",.2*e,.15*e,.06*e,1.2*e,ie(i,.3),0,-.12*e),H("eye",.04*e,.03*e,.03*e,1.22*e,8427980,-.05*e,-.16*e),H("eye",.04*e,.03*e,.03*e,1.22*e,8427980,.05*e,-.16*e),H("arm",.1*e,.55*e,.1*e,.7*e,ie(i,.9),-.3*e),H("arm",.1*e,.55*e,.1*e,.7*e,ie(i,.9),.3*e),H("hand",.08*e,.1*e,.04*e,.35*e,10918284,-.3*e),H("hand",.08*e,.1*e,.04*e,.35*e,10918284,.3*e)]}function Ag(i){const e=Pa(i,1.15);return e.push(H("crown",.36,.06,.36,1.62,4208688)),e.push(H("crown_spike",.04,.1,.04,1.7,4208688,-.12)),e.push(H("crown_spike",.04,.1,.04,1.7,4208688,.12)),e.push(H("crown_spike",.04,.1,.04,1.7,4208688,0,-.12)),e.push(H("blade",.04,.6,.04,.5,5921388,.38)),e.push(H("guard",.1,.04,.04,.82,5000280,.38)),e}function Rg(i){return[H("foot",.4,.16,.46,.08,ie(i,.7),-.25,.02),H("foot",.4,.16,.46,.08,ie(i,.7),.25,.02),H("leg",.32,.7,.32,.5,ie(i,.82),-.25),H("leg",.32,.7,.32,.5,ie(i,.82),.25),H("body",1,1.3,.8,1.35,i),H("emblem",.3,.3,.06,1.5,ie(i,1.2),0,-.38),H("shoulders",1.25,.22,.9,2.1,ie(i,.88)),H("head",.48,.42,.44,2.48,ie(i,1.1)),H("visor",.4,.12,.08,2.42,ie(i,.6),0,-.22),H("crest",.06,.16,.3,2.78,ie(i,1.15)),H("arm",.26,1.1,.26,1.35,ie(i,.88),-.68),H("arm",.26,1.1,.26,1.35,ie(i,.88),.68),H("fist",.3,.26,.24,.68,ie(i,.75),-.68),H("fist",.3,.26,.24,.68,ie(i,.75),.68),H("shield",.06,.7,.5,1.4,ie(i,.8),-.88),H("boss",.06,.15,.15,1.4,ie(i,1.3),-.92)]}function fl(i,e){return[H("foot",.28*e,.12*e,.32*e,.06*e,ie(i,.7),-.18*e,.02),H("foot",.28*e,.12*e,.32*e,.06*e,ie(i,.7),.18*e,.02),H("leg",.22*e,.52*e,.24*e,.38*e,ie(i,.82),-.18*e),H("leg",.22*e,.52*e,.24*e,.38*e,ie(i,.82),.18*e),H("body",.7*e,.8*e,.6*e,.95*e,i),H("plate",.5*e,.4*e,.06*e,1.05*e,ie(i,1.15),0,-.28*e),H("core",.12*e,.12*e,.04*e,1*e,8427993,0,-.32*e),H("head",.36*e,.3*e,.32*e,1.52*e,ie(i,1.05)),H("visor",.3*e,.08*e,.06*e,1.48*e,5003392,0,-.15*e),H("arm",.18*e,.7*e,.18*e,.9*e,ie(i,.88),-.44*e),H("arm",.18*e,.7*e,.18*e,.9*e,ie(i,.88),.44*e),H("gauntlet",.22*e,.2*e,.2*e,.45*e,ie(i,.75),-.44*e),H("gauntlet",.22*e,.2*e,.2*e,.45*e,ie(i,.75),.44*e)]}function wg(i){return[H("base",.4,.4,.35,.2,i),H("mid",.35,.35,.3,.5,ie(i,1.1)),H("upper",.28,.28,.25,.75,ie(i,1.2)),H("head",.22,.2,.22,.98,ie(i,1.3)),H("eye",.04,.03,.03,1,3352652,-.05,-.1),H("eye",.04,.03,.03,1,3352652,.05,-.1),H("wisp",.06,.3,.04,.6,ie(i,.8),-.25),H("wisp",.06,.3,.04,.6,ie(i,.8),.25),H("wisp",.04,.25,.06,.5,ie(i,.8),0,-.2),H("wisp",.04,.2,.06,.5,ie(i,.8),0,.2)]}function Cg(i){const e=Eg[i]||16711680;switch(i){case le.WOLF:return{parts:Sg(e)};case le.SPIDER:return{parts:ul(e,1)};case le.GIANT_SPIDER:return{parts:ul(e,1.4)};case le.CORRUPTED_BEAR:return{parts:Mg(e)};case le.GOBLIN:return{parts:ko(e,!1)};case le.GOBLIN_ARCHER:return{parts:ko(e,!0)};case le.ORC:return{parts:bg(e)};case le.TROLL:return{parts:Tg(e)};case le.WIGHT:return{parts:Pa(e,1)};case le.BARROW_WIGHT:return{parts:Pa(e,1.15)};case le.WRAITH:return{parts:Ag(e)};case le.GUARDIAN:return{parts:Rg(e)};case le.CONSTRUCT:return{parts:fl(e,1)};case le.DARK_CONSTRUCT:return{parts:fl(e,1.2)};case le.SHADOW:return{parts:wg(e)};default:return{parts:ko(e,!1)}}}function Ig(i){const e=Cg(i),t=new fr;for(const n of e.parts){const r=new Ei(n.w,n.h,n.d),s=new Ys({color:n.color}),o=new _n(r,s);o.position.y=n.offsetY,n.offsetX&&(o.position.x=n.offsetX),n.offsetZ&&(o.position.z=n.offsetZ),o.userData.partName=n.name,t.add(o)}return t}class Og{constructor(e){this.scene=e,this.meshMap=new Map}sync(e,t){const n=new Set;for(const r of e){if(n.add(r),r.isDead()){this.meshMap.has(r)&&(this.scene.remove(this.meshMap.get(r)),this.meshMap.delete(r));continue}let s=this.meshMap.get(r);if(s||(s=Ig(r.type),this.scene.add(s),this.meshMap.set(r,s)),s.position.set(r.position.x,r.position.y,r.position.z),t){const o=t.position.x-r.position.x,a=t.position.z-r.position.z;s.rotation.y=Math.atan2(o,a)}}for(const[r,s]of this.meshMap)n.has(r)||(this.scene.remove(s),this.meshMap.delete(r))}}const Dg={road_wardens:{body:9136404,hat:2775594,skin:13213818},rivendell_keepers:{body:13944224,hat:4482747,skin:15259840},dwarven_crafters:{body:8017203,hat:10044450,skin:13213818},woodland_guardians:{body:3828282,hat:2771498,skin:12628112},beorning_wardens:{body:9071162,hat:5917226,skin:13213818}};function wn(i,e){const t=Math.min(255,(i>>16&255)*e)|0,n=Math.min(255,(i>>8&255)*e)|0,r=Math.min(255,(i&255)*e)|0;return t<<16|n<<8|r}function Lg(i={}){const e=i.bodyColor||13215820,t=i.hatColor||3368618,n=i.skinColor||13213818,r=i.factionId||"",s=3813408,o=2234384,c=[{name:"boot",w:.24,h:.14,d:.3,offsetY:.07,offsetX:-.13,offsetZ:.02,color:o},{name:"boot",w:.24,h:.14,d:.3,offsetY:.07,offsetX:.13,offsetZ:.02,color:o},{name:"leg",w:.2,h:.48,d:.2,offsetY:.38,offsetX:-.13,color:s},{name:"leg",w:.2,h:.48,d:.2,offsetY:.38,offsetX:.13,color:s},{name:"belt",w:.54,h:.08,d:.35,offsetY:.59,color:4864544},{name:"body",w:.5,h:.62,d:.32,offsetY:.93,color:e},{name:"shoulders",w:.62,h:.1,d:.36,offsetY:1.28,color:wn(e,.82)},{name:"arm",w:.16,h:.58,d:.16,offsetY:.92,offsetX:-.36,color:wn(e,.93)},{name:"arm",w:.16,h:.58,d:.16,offsetY:.92,offsetX:.36,color:wn(e,.93)},{name:"hand",w:.12,h:.12,d:.12,offsetY:.53,offsetX:-.36,color:wn(n,.92)},{name:"hand",w:.12,h:.12,d:.12,offsetY:.53,offsetX:.36,color:wn(n,.92)},{name:"neck",w:.16,h:.08,d:.16,offsetY:1.37,color:wn(n,.9)},{name:"head",w:.4,h:.4,d:.4,offsetY:1.61,color:n},{name:"nose",w:.08,h:.08,d:.1,offsetY:1.56,offsetZ:-.22,color:wn(n,1.05)}];return r!=="rivendell_keepers"&&(c.push({name:"hat_brim",w:.52,h:.04,d:.52,offsetY:1.83,color:t}),c.push({name:"hat_top",w:.42,h:.16,d:.42,offsetY:1.95,color:t})),r==="road_wardens"?(c.push({name:"cloak",w:.46,h:.85,d:.06,offsetY:.85,offsetZ:.2,color:wn(e,.6)}),c.push({name:"sword",w:.04,h:.52,d:.04,offsetY:.38,offsetX:-.4,color:8947864}),c.push({name:"guard",w:.12,h:.04,d:.04,offsetY:.67,offsetX:-.4,color:6708800}),c.push({name:"pommel",w:.06,h:.06,d:.06,offsetY:.14,offsetX:-.4,color:6708800})):r==="rivendell_keepers"?(c.push({name:"circlet",w:.44,h:.04,d:.44,offsetY:1.83,color:12625484}),c.push({name:"gem",w:.06,h:.06,d:.06,offsetY:1.86,offsetZ:-.2,color:4217024}),c.push({name:"robe",w:.48,h:.32,d:.3,offsetY:.32,color:e}),c.push({name:"hem",w:.5,h:.04,d:.32,offsetY:.13,color:wn(e,.85)}),c.push({name:"sash",w:.04,h:.4,d:.04,offsetY:.7,offsetX:.08,offsetZ:-.14,color:10059840})):r==="dwarven_crafters"?(c.push({name:"beard",w:.24,h:.3,d:.18,offsetY:1.25,offsetZ:-.12,color:7030819}),c.push({name:"noseguard",w:.06,h:.14,d:.06,offsetY:1.86,offsetZ:-.2,color:wn(t,.75)}),c.push({name:"pick_handle",w:.04,h:.6,d:.04,offsetY:1.15,offsetX:.1,offsetZ:.22,color:7564128}),c.push({name:"pick_head",w:.22,h:.08,d:.06,offsetY:1.5,offsetX:.1,offsetZ:.22,color:8421516}),c.push({name:"stocky",w:.54,h:.55,d:.36,offsetY:.93,color:wn(e,.95)})):r==="woodland_guardians"?(c.push({name:"cloak",w:.44,h:.8,d:.06,offsetY:.9,offsetZ:.18,color:3365160}),c.push({name:"hood",w:.44,h:.26,d:.3,offsetY:1.72,offsetZ:.06,color:3365160}),c.push({name:"quiver",w:.12,h:.42,d:.08,offsetY:1.12,offsetX:.14,offsetZ:.2,color:5848862}),c.push({name:"arrow",w:.02,h:.16,d:.02,offsetY:1.4,offsetX:.14,offsetZ:.2,color:9207884}),c.push({name:"bow",w:.04,h:.6,d:.04,offsetY:.95,offsetX:-.48,color:6702878})):r==="beorning_wardens"&&(c.push({name:"mantle",w:.64,h:.16,d:.42,offsetY:1.22,color:8742456}),c.push({name:"fur_stripe",w:.5,h:.08,d:.08,offsetY:1.22,offsetZ:-.14,color:10125388}),c.push({name:"axe_handle",w:.04,h:.58,d:.04,offsetY:.68,offsetX:.44,color:6311480}),c.push({name:"axe_head",w:.18,h:.14,d:.04,offsetY:1.02,offsetX:.44,offsetZ:-.07,color:8421510}),c.push({name:"axe_head2",w:.18,h:.14,d:.04,offsetY:1.02,offsetX:.44,offsetZ:.07,color:8421510}),c.push({name:"fur_boot",w:.26,h:.06,d:.28,offsetY:.16,offsetX:-.13,color:8742456}),c.push({name:"fur_boot",w:.26,h:.06,d:.28,offsetY:.16,offsetX:.13,color:8742456})),{parts:c}}function Pg(i){const e=Dg[i.factionId]||{},t=Lg({bodyColor:e.body,hatColor:e.hat,skinColor:e.skin,factionId:i.factionId}),n=new fr;for(const r of t.parts){const s=new Ei(r.w,r.h,r.d),o=new Ys({color:r.color}),a=new _n(s,o);a.position.y=r.offsetY,r.offsetX&&(a.position.x=r.offsetX),r.offsetZ&&(a.position.z=r.offsetZ),a.userData.partName=r.name,n.add(a)}return n}class Ng{constructor(e){this.scene=e,this.meshMap=new Map}sync(e,t){const n=new Set;for(const r of e){n.add(r.id);let s=this.meshMap.get(r.id);if(s||(s=Pg(r),this.scene.add(s),this.meshMap.set(r.id,s)),s.position.set(r.position.x,r.position.y,r.position.z),t){const o=t.position.x-r.position.x,a=t.position.z-r.position.z;s.rotation.y=Math.atan2(o,a)}}for(const[r,s]of this.meshMap)n.has(r)||(this.scene.remove(s),this.meshMap.delete(r))}}const Ut=Object.freeze({CLEAR:"clear",CLOUDY:"cloudy",RAIN:"rain",STORM:"storm",SNOW:"snow",FOG:"fog"}),pl=[Ut.CLEAR,Ut.CLOUDY,Ut.RAIN,Ut.STORM,Ut.SNOW,Ut.FOG],Ug={[Ut.CLEAR]:0,[Ut.CLOUDY]:-.1,[Ut.RAIN]:-.3,[Ut.STORM]:-.5,[Ut.SNOW]:-.8,[Ut.FOG]:-.1},kg={[Ut.CLEAR]:1,[Ut.CLOUDY]:.9,[Ut.RAIN]:.7,[Ut.STORM]:.4,[Ut.SNOW]:.6,[Ut.FOG]:.3};class Fg{constructor(e){this._seed=e,this._rng=e,this.current=Ut.CLEAR,this.elapsed=0,this.duration=this._rollDuration()}_nextRandom(){return this._rng=this._rng*1103515245+12345&2147483647,this._rng/2147483647}_rollDuration(){return 60+Math.floor(this._nextRandom()*120)}tick(e){this.elapsed+=e,this.elapsed>=this.duration&&(this.elapsed-=this.duration,this.current=pl[Math.floor(this._nextRandom()*pl.length)],this.duration=this._rollDuration())}getTemperatureModifier(){return Ug[this.current]||0}getVisibilityModifier(){return kg[this.current]||1}}class Bg{constructor({width:e,height:t,cellSize:n}){this.width=e,this.height=t,this.cellSize=n,this._cols=Math.ceil(e/n),this._rows=Math.ceil(t/n),this._revealed=new Uint8Array(this._cols*this._rows),this._landmarks=[]}_cellIndex(e,t){const n=Math.floor(e/this.cellSize),r=Math.floor(t/this.cellSize);return n<0||n>=this._cols||r<0||r>=this._rows?-1:r*this._cols+n}isRevealed(e,t){const n=this._cellIndex(e,t);return n<0?!1:this._revealed[n]===1}reveal(e,t,n){const r=Math.max(0,Math.floor((e-n)/this.cellSize)),s=Math.min(this._cols-1,Math.floor((e+n)/this.cellSize)),o=Math.max(0,Math.floor((t-n)/this.cellSize)),a=Math.min(this._rows-1,Math.floor((t+n)/this.cellSize));for(let c=o;c<=a;c++)for(let l=r;l<=s;l++){const h=(l+.5)*this.cellSize,d=(c+.5)*this.cellSize,f=h-e,p=d-t;f*f+p*p<=n*n&&(this._revealed[c*this._cols+l]=1)}}getRevealedPercentage(){let e=0;const t=this._revealed.length;for(let n=0;n<t;n++)this._revealed[n]===1&&e++;return e/t*100}addLandmark(e){this._landmarks.push(e)}getLandmarks(){return this._landmarks}serialize(){return{revealed:Array.from(this._revealed),landmarks:this._landmarks.map(e=>({...e}))}}deserialize(e){for(let t=0;t<e.revealed.length&&t<this._revealed.length;t++)this._revealed[t]=e.revealed[t];this._landmarks=e.landmarks.map(t=>({...t}))}}const zg=100,Hg=1.5;function Pr(i){let e=0;for(let t=1;t<i;t++)e+=Math.floor(zg*Math.pow(Hg,t-1));return e}class Gg{constructor(){this.level=1,this.experience=0,this.skillPoints=0}addExperience(e,t){for(this.experience+=e;this.experience>=Pr(this.level+1);)this.level++,this.skillPoints++}getExpForNextLevel(){return Pr(this.level+1)-Pr(this.level)}getExpProgress(){const e=Pr(this.level),n=Pr(this.level+1)-e;return n<=0?0:(this.experience-e)/n}spendSkillPoint(){return this.skillPoints<=0?!1:(this.skillPoints--,!0)}}const Zt=Object.freeze({MAIN_HAND:"main_hand",OFF_HAND:"off_hand",HEAD:"head",CHEST:"chest",LEGS:"legs",FEET:"feet",ACCESSORY:"accessory"}),Vg=Object.values(Zt);class Wg{constructor(){this._slots=new Map;for(const e of Vg)this._slots.set(e,null)}get(e){return this._slots.get(e)||null}equip(e){const t=this._slots.get(e.slot)||null;return this._slots.set(e.slot,e),t}unequip(e){const t=this._slots.get(e)||null;return this._slots.set(e,null),t}getTotalArmor(){let e=0;for(const t of this._slots.values())t&&t.armor&&(e+=t.armor);return e}getEquippedItems(){const e=[];for(const t of this._slots.values())t&&e.push(t);return e}}class Xg{constructor(e){this.size=e,this._slots=new Array(e).fill(null),this.selectedSlot=0}getSlot(e){return this._slots[e]||null}setSlot(e,t){this._slots[e]=t}clearSlot(e){this._slots[e]=null}selectSlot(e){this.selectedSlot=(e%this.size+this.size)%this.size}getSelectedItem(){return this._slots[this.selectedSlot]||null}scrollNext(){this.selectedSlot=(this.selectedSlot+1)%this.size}scrollPrev(){this.selectedSlot=(this.selectedSlot-1+this.size)%this.size}}const ml=100,qg=75,Fo=50,Kg=2;class Yg{constructor(){this.level=0}addFear(e){this.level=Math.min(ml,this.level+e)}reduceFear(e){this.level=Math.max(0,this.level-e)}tick(e){this.level=Math.max(0,this.level-Kg*e)}getMovementPenalty(){return this.level<Fo?0:(this.level-Fo)/(ml-Fo)*.4}isTerrified(){return this.level>=qg}}_t.DAWN+"",_t.DAY+"",_t.DUSK+"",_t.NIGHT+"";_t.DAWN+"",_t.DAY+"",_t.DUSK+"",_t.NIGHT+"";_t.DAWN+"",_t.DAY+"",_t.DUSK+"",_t.NIGHT+"";const $g={man_ranger:[{type:"short_bow",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"bedroll",count:1},{type:"trail_rations",count:3}],man_soldier:[{type:"iron_sword",count:1},{type:"shield",count:1},{type:"stone_pickaxe",count:1},{type:"leather_armor",count:1},{type:"bread",count:2}],man_scholar:[{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"lantern",count:1},{type:"relic_shard",count:1},{type:"lore_fragment",count:2}],elf_archer:[{type:"refined_bow",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"arrow",count:20},{type:"lembas",count:2}],elf_warden:[{type:"spear",count:1},{type:"stone_pickaxe",count:1},{type:"ward_token",count:1},{type:"cloak",count:1},{type:"lembas",count:1}],elf_gatherer:[{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"herb_pouch",count:1},{type:"sling",count:1},{type:"berries",count:5}],dwarf_miner:[{type:"pickaxe",count:1},{type:"hammer",count:1},{type:"torch",count:3},{type:"rope",count:1}],dwarf_blacksmith:[{type:"hammer",count:1},{type:"stone_pickaxe",count:1},{type:"iron_ore",count:5},{type:"repair_kit",count:1},{type:"bread",count:2}],dwarf_delver:[{type:"axe",count:1},{type:"stone_pickaxe",count:1},{type:"lantern",count:1},{type:"rope",count:2},{type:"trail_rations",count:2}],hobbit_burglar:[{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"sling",count:1},{type:"lock_tools",count:1},{type:"mushroom",count:5}],hobbit_cook:[{type:"pan",count:1},{type:"stone_pickaxe",count:1},{type:"firestarter",count:1},{type:"raw_meat",count:3},{type:"berries",count:5}],hobbit_forager:[{type:"walking_stick",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"satchel",count:1},{type:"mushroom",count:3},{type:"berries",count:3}]};function jg(i){return $g[i]||[]}function vd(i){Object.freeze(i);for(const e of Object.values(i))e&&typeof e=="object"&&vd(e);return i}const vr=vd({PHYSICS:{GRAVITY:-20,JUMP_VELOCITY:8,PLAYER_WIDTH:.6,PLAYER_HEIGHT:1.8,VOID_FLOOR_Y:0},CAMERA:{FOV:75,NEAR:.1,FAR:80,MOUSE_SENSITIVITY:.002,MAX_PITCH:Math.PI/2-.01,THIRD_PERSON_DISTANCE:5,THIRD_PERSON_EYE_HEIGHT:2,FIRST_PERSON_EYE_HEIGHT:1.6},WORLD:{BOUNDARY_EXTENT:560,WATER_LEVEL:26,SURFACE_Y:32},CHUNKS:{LOAD_DISTANCE:5,UNLOAD_DISTANCE:8,MAX_PER_FRAME:8,RENDER_DISTANCE:4,SIZE:16},COMBAT:{MELEE_RANGE:3,MELEE_CONE:.7,RANGED_CONE:.95,FIST_DAMAGE:2,NORMAL_COOLDOWN:.5,HEAVY_COOLDOWN:1.2,XP_PER_KILL:25,FACTION_REP_PER_KILL:10},SURVIVAL:{GAME_TIME_SCALE:4,SPRINT_MULTIPLIER:1.6,WATER_SLOWDOWN:.5,HUNGER_DRAIN_RATE:.1},FOG:{WIDTH:700,HEIGHT:300,CELL_SIZE:10,BASE_FAR:56,BASE_NEAR_RATIO:.5,MIN_NEAR:1,REVEAL_RADIUS:20},SPAWNING:{MAX_ENEMIES:8,MIN_SPAWN_DIST:15,MAX_SPAWN_DIST:35,SPAWN_INTERVAL:10},CORRUPTION:{CENTER_X:420,CENTER_Z:90,RADIUS:100,FOG_THRESHOLD:.1},RESTORATION:{INTERACT_RANGE:8,HINT_RANGE:10,XP_REWARD:100,FACTION_REP_REWARD:50},NPC:{INTERACT_RANGE:5},MAP:{CANVAS_WIDTH:460,CANVAS_HEIGHT:320,WORLD_MIN_X:-100,WORLD_MAX_X:560,WORLD_MIN_Z:-120,WORLD_MAX_Z:150},COLORS:{SKY_DAY:8900331,SKY_DAWN:16757606,SKY_DUSK:16742212,SKY_NIGHT:657962,AMBIENT_LIGHT:16777215,DIR_LIGHT:16774368},LIGHTING:{AMBIENT:{dawn:.5,day:.6,dusk:.35,night:.1},DIRECTIONAL:{dawn:.6,day:.8,dusk:.4,night:.05}},QUESTS:{AUTO_ACTIVATE_SIDE_COUNT:3,XP_FIRST_NIGHT:50,XP_EXPLORATION:30,XP_DISCOVERY:20,XP_RESTORATION:100},CREATIVE:{FLY_SPEED:15},DIALOGUE:{DISPLAY_DURATION:5,SHORT_DURATION:3,SAVE_FEEDBACK_DURATION:2}});function _l(i){const e=vr.FOG.BASE_FAR*i;return{near:Math.max(vr.FOG.MIN_NEAR,e*vr.FOG.BASE_NEAR_RATIO),far:e}}function Zg(i,e){const t=e-1;i.x=Math.max(-t,Math.min(t,i.x)),i.z=Math.max(-t,Math.min(t,i.z)),i.y=Math.max(0,i.y)}class pt{constructor(e,t,n,r=null){this.name=e,this.inputs=t,this.outputs=n,this.station=r}canCraft(e){return this.inputs.every(({type:t,count:n})=>e.count(t)>=n)}}class Qg{constructor(e){this.recipes=e}getAvailableRecipes(e,t=null){return this.recipes.filter(n=>n.station&&n.station!==t?!1:n.canCraft(e))}craft(e,t,n=null){const r=this.recipes.find(s=>s.name===e);if(!r||r.station&&r.station!==n||!r.canCraft(t))return!1;for(const{type:s,count:o}of r.inputs)t.remove(s,o);for(const{type:s,count:o}of r.outputs)t.add(s,o);return!0}}class Jg{constructor(e){this._system=e,this.isOpen=!1,this.selectedIndex=0,this._station=null}toggle(){this.isOpen=!this.isOpen,this.isOpen&&(this.selectedIndex=0)}setStation(e){this._station=e}getAllRecipes(){return this._system.recipes.filter(e=>e.station===this._station)}getAvailableRecipes(e){return this._system.getAvailableRecipes(e,this._station)}craftSelected(e){const t=this.getAllRecipes();if(this.selectedIndex>=t.length)return!1;const n=t[this.selectedIndex];return this._system.craft(n.name,e,this._station)}selectNext(){this.selectedIndex++}selectPrev(){this.selectedIndex=Math.max(0,this.selectedIndex-1)}}const ev=[new pt("Sticks from Wood",[{type:X.WOOD,count:1}],[{type:X.STICK,count:4}]),new pt("Rope from Fiber",[{type:X.FIBER,count:3}],[{type:X.ROPE,count:1}]),new pt("Torch",[{type:X.STICK,count:1},{type:X.COAL,count:1}],[{type:X.TORCH,count:2}]),new pt("Planks",[{type:X.WOOD,count:2}],[{type:X.PLANKS,count:4}]),new pt("Workbench",[{type:X.PLANKS,count:4},{type:X.STICK,count:4}],[{type:X.WORKBENCH,count:1}]),new pt("Campfire",[{type:X.STONE,count:5},{type:X.STICK,count:3}],[{type:X.CAMPFIRE,count:1}]),new pt("Stone Pickaxe",[{type:X.STICK,count:2},{type:X.STONE,count:3}],[{type:X.STONE_PICKAXE,count:1}],"workbench"),new pt("Stone Axe",[{type:X.STICK,count:2},{type:X.STONE,count:2}],[{type:X.STONE_AXE,count:1}],"workbench"),new pt("Bedroll",[{type:X.FIBER,count:6},{type:X.LEATHER,count:2}],[{type:X.BEDROLL,count:1}],"workbench"),new pt("Cobblestone",[{type:X.STONE,count:4}],[{type:X.COBBLESTONE,count:4}],"workbench"),new pt("Glass from Sand",[{type:X.SAND,count:4}],[{type:X.GLASS,count:2}],"workbench"),new pt("Iron Pickaxe",[{type:X.STICK,count:2},{type:X.IRON_INGOT,count:3}],[{type:X.IRON_PICKAXE,count:1}],"workbench"),new pt("Iron Axe",[{type:X.STICK,count:2},{type:X.IRON_INGOT,count:2}],[{type:X.IRON_AXE,count:1}],"workbench"),new pt("Forge",[{type:X.STONE,count:8},{type:X.IRON_ORE,count:3}],[{type:X.FORGE,count:1}],"workbench"),new pt("Kitchen",[{type:X.PLANKS,count:6},{type:X.STONE,count:4}],[{type:X.KITCHEN,count:1}],"workbench"),new pt("Loom",[{type:X.PLANKS,count:4},{type:X.FIBER,count:6}],[{type:X.LOOM,count:1}],"workbench"),new pt("Smelt Iron Ore",[{type:X.IRON_ORE,count:2},{type:X.COAL,count:1}],[{type:X.IRON_INGOT,count:1}],"forge"),new pt("Smelt Copper Ore",[{type:X.COPPER_ORE,count:2},{type:X.COAL,count:1}],[{type:X.COPPER_INGOT,count:1}],"forge"),new pt("Cook Meat",[{type:X.RAW_MEAT,count:1}],[{type:X.COOKED_MEAT,count:1}],"campfire"),new pt("Cook Fish",[{type:X.RAW_FISH,count:1}],[{type:X.COOKED_FISH,count:1}],"campfire"),new pt("Hearth Stew",[{type:X.COOKED_MEAT,count:2},{type:X.RAW_MUSHROOM,count:1}],[{type:X.STEW,count:2}],"kitchen"),new pt("Trail Rations",[{type:X.COOKED_MEAT,count:1},{type:X.RAW_BERRIES,count:2}],[{type:X.TRAIL_RATIONS,count:3}],"kitchen"),new pt("Herb Salad",[{type:X.RAW_BERRIES,count:2},{type:X.RAW_MUSHROOM,count:2}],[{type:X.HERB_SALAD,count:2}],"kitchen"),new pt("Thatch Block",[{type:X.FIBER,count:4}],[{type:X.THATCH,count:4}],"workbench"),new pt("Stone Brick",[{type:X.STONE,count:4}],[{type:X.STONE_BRICK,count:4}],"workbench"),new pt("Rope from Fiber (Loom)",[{type:X.FIBER,count:2}],[{type:X.ROPE,count:2}],"loom"),new pt("Bandage",[{type:X.FIBER,count:3}],[{type:X.BANDAGE,count:2}],"loom"),new pt("Leather Armor",[{type:X.LEATHER,count:5},{type:X.ROPE,count:2}],[{type:X.LEATHER_ARMOR,count:1}],"loom"),new pt("Oak Planks",[{type:X.WOOD,count:2}],[{type:X.OAK_PLANKS,count:4}],"workbench"),new pt("Copper Pickaxe",[{type:X.STICK,count:2},{type:X.COPPER_INGOT,count:3}],[{type:X.COPPER_PICKAXE,count:1}],"workbench"),new pt("Iron Sword",[{type:X.IRON_INGOT,count:2},{type:X.STICK,count:1}],[{type:X.IRON_SWORD,count:1}],"forge"),new pt("Iron Hammer",[{type:X.IRON_INGOT,count:3},{type:X.STICK,count:2}],[{type:X.IRON_HAMMER,count:1}],"forge")];class tv{constructor({type:e,duration:t,strength:n}){this.type=e,this.remaining=t,this.strength=n}tick(e){this.remaining-=e}isExpired(){return this.remaining<=0}}class nv{constructor(){this._effects=[]}apply({type:e,duration:t,strength:n}){this._effects=this._effects.filter(r=>r.type!==e),this._effects.push(new tv({type:e,duration:t,strength:n}))}tick(e){for(const t of this._effects)t.tick(e);this._effects=this._effects.filter(t=>!t.isExpired())}getActive(){return this._effects}getStrength(e){return this._effects.filter(t=>t.type===e).reduce((t,n)=>t+n.strength,0)}has(e){return this._effects.some(t=>t.type===e)}}const jt=Object.freeze({LOCKED:"locked",AVAILABLE:"available",ACTIVE:"active",COMPLETED:"completed"});class gl{constructor({id:e,description:t,target:n}){this.id=e,this.description=t,this.target=n,this.progress=0}advance(e){this.progress=Math.min(this.progress+e,this.target)}isComplete(){return this.progress>=this.target}}class Qn{constructor({id:e,chapter:t,name:n,description:r,objectives:s,requires:o=[]}){this.id=e,this.chapter=t,this.name=n,this.description=r,this.requires=o,this.objectives=s.map(a=>a instanceof gl?a:new gl(a))}advanceObjective(e,t){const n=this.objectives.find(r=>r.id===e);n&&n.advance(t)}isComplete(){return this.objectives.every(e=>e.isComplete())}}class iv{constructor(e){this.quests=e,this._status=new Map;for(const t of e){const n=t.requires.length>0;this._status.set(t.id,n?jt.LOCKED:jt.AVAILABLE)}}getQuest(e){return this.quests.find(t=>t.id===e)}getStatus(e){return this._status.get(e)||jt.LOCKED}activate(e){return this.getStatus(e)!==jt.AVAILABLE?!1:(this._status.set(e,jt.ACTIVE),!0)}advanceObjective(e,t,n){if(this.getStatus(e)!==jt.ACTIVE)return;const r=this.getQuest(e);r&&(r.advanceObjective(t,n),r.isComplete()&&(this._status.set(e,jt.COMPLETED),this._unlockDependents(e)))}_unlockDependents(e){for(const t of this.quests){if(this._status.get(t.id)!==jt.LOCKED)continue;t.requires.every(r=>this._status.get(r)===jt.COMPLETED)&&this._status.set(t.id,jt.AVAILABLE)}}getActiveQuests(){return this.quests.filter(e=>this._status.get(e.id)===jt.ACTIVE)}serialize(){const e={};for(const[n,r]of this._status)e[n]=r;const t={};for(const n of this.quests)t[n.id]=n.objectives.map(r=>({id:r.id,progress:r.progress}));return{statuses:e,objectives:t}}deserialize(e){for(const[t,n]of Object.entries(e.statuses))this._status.set(t,n);for(const[t,n]of Object.entries(e.objectives)){const r=this.getQuest(t);if(r)for(const s of n){const o=r.objectives.find(a=>a.id===s.id);o&&(o.progress=s.progress)}}}}const rv=[new Qn({id:"ch1_embers",chapter:1,name:"Embers in the Wild",description:"Survive the first days, reach the ruined outpost, and activate the first ward fragment.",objectives:[{id:"ch1_survive",description:"Survive the first night",target:1},{id:"ch1_reach_outpost",description:"Reach the ruined outpost",target:1},{id:"ch1_activate_ward",description:"Activate the ward fragment",target:1}]}),new Qn({id:"ch2_roads",chapter:2,name:"Broken Roads",description:"Restore a frontier settlement, meet the first lore NPC, and discover signs of spreading corruption.",requires:["ch1_embers"],objectives:[{id:"ch2_restore",description:"Restore the frontier settlement",target:1},{id:"ch2_meet_npc",description:"Meet the lore NPC",target:1},{id:"ch2_corruption",description:"Investigate corruption signs",target:3}]}),new Qn({id:"ch3_records",chapter:3,name:"The Hidden Records",description:"Travel to the Rivendell region, learn of the ward network, and obtain the first true relic.",requires:["ch2_roads"],objectives:[{id:"ch3_reach_rivendell",description:"Reach the Rivendell region",target:1},{id:"ch3_learn_wards",description:"Learn about the ward network",target:1},{id:"ch3_obtain_relic",description:"Obtain the first true relic",target:1}]}),new Qn({id:"ch4_mountains",chapter:4,name:"Beneath the Mountains",description:"Enter the Misty Mountains delves, stabilize a dwarven mechanism, and fight underground threats.",requires:["ch3_records"],objectives:[{id:"ch4_enter_delve",description:"Enter the Misty Mountains delve",target:1},{id:"ch4_stabilize",description:"Stabilize the dwarven mechanism",target:1},{id:"ch4_defeat_boss",description:"Defeat the corrupted guardian",target:1}]}),new Qn({id:"ch5_darkwood",chapter:5,name:"The Dark Wood Stirs",description:"Travel through Mirkwood, deal with spiders and ward failures, and restore a forest beacon.",requires:["ch4_mountains"],objectives:[{id:"ch5_enter_mirkwood",description:"Enter Mirkwood",target:1},{id:"ch5_clear_spiders",description:"Clear spider nests",target:3},{id:"ch5_restore_beacon",description:"Restore the forest beacon",target:1}]}),new Qn({id:"ch6_forge",chapter:6,name:"The Sleeping Forge",description:"Reach the dwarven craft center near Erebor, unlock final crafting, and learn the source location.",requires:["ch5_darkwood"],objectives:[{id:"ch6_reach_forge",description:"Reach the ancient forge",target:1},{id:"ch6_unlock_crafting",description:"Unlock final crafting tier",target:1},{id:"ch6_discover_source",description:"Discover the awakening source location",target:1}]}),new Qn({id:"ch7_shadow",chapter:7,name:"The Rekindled Shadow",description:"Assault the corrupted stronghold, disable its link to the ancient network, and face the dark champion.",requires:["ch6_forge"],objectives:[{id:"ch7_assault",description:"Assault the corrupted stronghold",target:1},{id:"ch7_disable_link",description:"Disable the network link",target:1},{id:"ch7_defeat_champion",description:"Defeat the dark champion",target:1}]}),new Qn({id:"ch8_after",chapter:8,name:"After the Night",description:"The world recovers. Settlements improve, and exploration continues in peace.",requires:["ch7_shadow"],objectives:[{id:"ch8_celebrate",description:"Return to a restored settlement",target:1},{id:"ch8_explore",description:"Explore the renewed world",target:1}]})];class sv{constructor(){this._questTarget=null}getDirectionTo(e,t){const n=t.x-e.x,r=t.z-e.z;return Math.atan2(n,-r)}getDistance(e,t){const n=t.x-e.x,r=(t.y||0)-(e.y||0),s=t.z-e.z;return Math.sqrt(n*n+r*r+s*s)}getCardinal(e){let t=(e%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return t<Math.PI/4||t>=Math.PI*7/4?"N":t<Math.PI*3/4?"E":t<Math.PI*5/4?"S":"W"}setQuestTarget(e){this._questTarget={...e}}clearQuestTarget(){this._questTarget=null}getQuestDirection(e){return this._questTarget?{angle:this.getDirectionTo(e,this._questTarget),distance:this.getDistance(e,this._questTarget)}:null}}function ov(i={}){const{survivalStats:e,questSystem:t,compass:n,playerYaw:r=0,playerPos:s,fearSystem:o,experienceSystem:a,statusEffects:c}=i,l={};if(e&&(l.health=Math.ceil(e.health),l.maxHealth=e.maxHealth,l.stamina=Math.ceil(e.stamina),l.hunger=Math.ceil(e.hunger),l.focus=Math.ceil(e.focus),l.tempLabel=e.temperature<-.5?"Cold":e.temperature>.5?"Hot":"Mild"),t){const h=t.getActiveQuests();l.activeQuestName=h.length>0?h[0].name:null}else l.activeQuestName=null;return n&&(l.compassCardinal=n.getCardinal(r)),o?l.fearLevel=Math.round(o.level):l.fearLevel=0,s&&(l.playerX=Math.round(s.x),l.playerZ=Math.round(s.z)),a?l.level=a.level:l.level=1,c?l.statusEffects=c.getActive().map(h=>({type:h.type,remaining:h.remaining,strength:h.strength})):l.statusEffects=[],l}const av=Object.values(fd).sort((i,e)=>e.hungerRestore-i.hungerRestore).map(i=>i.id);function cv(i,e,t){for(const n of av)if(i.count(n)>0){const r=H0(n);if(e.eat(r.hungerRestore),i.remove(n,1),t&&r.effects)for(const s of r.effects)t.apply(s);return!0}return!1}class vl{constructor({id:e,name:t,description:n,cost:r,requires:s=[]}){this.id=e,this.name=t,this.description=n,this.cost=r,this.requires=s}}class ar{constructor({id:e,name:t,nodes:n}){this.id=e,this.name=t,this.nodes=n.map(r=>r instanceof vl?r:new vl(r)),this._nodeMap=new Map(this.nodes.map(r=>[r.id,r]))}getNode(e){return this._nodeMap.get(e)}}class lv{constructor(e){this.trees=e,this.skillPoints=0,this._unlocked=new Set,this._allNodes=new Map;for(const t of e)for(const n of t.nodes)this._allNodes.set(n.id,n)}addPoints(e){this.skillPoints+=e}isUnlocked(e){return this._unlocked.has(e)}unlock(e){if(this._unlocked.has(e))return!1;const t=this._allNodes.get(e);if(!t||this.skillPoints<t.cost)return!1;for(const n of t.requires)if(!this._unlocked.has(n))return!1;return this.skillPoints-=t.cost,this._unlocked.add(e),!0}getAvailable(){const e=[];for(const[t,n]of this._allNodes){if(this._unlocked.has(t)||this.skillPoints<n.cost)continue;n.requires.every(s=>this._unlocked.has(s))&&e.push(n)}return e}grantStartingUnlock(e){return this._unlocked.has(e)||!this._allNodes.get(e)?!1:(this._unlocked.add(e),!0)}getUnlocked(){return[...this._unlocked]}serialize(){return{skillPoints:this.skillPoints,unlocked:[...this._unlocked]}}deserialize(e){this.skillPoints=e.skillPoints,this._unlocked=new Set(e.unlocked)}}class dv{constructor(e){this._system=e,this.isOpen=!1,this.currentTreeIndex=0,this.selectedNodeIndex=0}toggle(){this.isOpen=!this.isOpen,this.isOpen&&(this.currentTreeIndex=0,this.selectedNodeIndex=0)}getCurrentTree(){return this._system.trees[this.currentTreeIndex]}nextTree(){this.currentTreeIndex=(this.currentTreeIndex+1)%this._system.trees.length,this.selectedNodeIndex=0}prevTree(){this.currentTreeIndex=(this.currentTreeIndex-1+this._system.trees.length)%this._system.trees.length,this.selectedNodeIndex=0}getNodes(){return this.getCurrentTree().nodes.map(t=>({id:t.id,name:t.name,description:t.description,cost:t.cost,requires:t.requires,unlocked:this._system.isUnlocked(t.id),available:!this._system.isUnlocked(t.id)&&this._system.skillPoints>=t.cost&&t.requires.every(n=>this._system.isUnlocked(n))}))}unlockSelected(){const e=this.getNodes();return this.selectedNodeIndex>=e.length?!1:this._system.unlock(e[this.selectedNodeIndex].id)}getSkillPoints(){return this._system.skillPoints}}const xl=[new ar({id:"survival",name:"Survival",nodes:[{id:"surv_hardy",name:"Hardy",description:"Slower hunger drain",cost:1},{id:"surv_warmth",name:"Warmth",description:"Better camp warmth bonus",cost:1},{id:"surv_iron_stomach",name:"Iron Stomach",description:"Raw food is safer to eat",cost:2,requires:["surv_hardy"]},{id:"surv_bandages",name:"Better Bandages",description:"Bandages heal more",cost:2,requires:["surv_hardy"]},{id:"surv_rest",name:"Deep Rest",description:"Sleep restores more stamina",cost:2,requires:["surv_warmth"]},{id:"surv_forager",name:"Keen Forager",description:"Find more berries and herbs",cost:1},{id:"surv_endurance",name:"Endurance",description:"Slower stamina drain while sprinting",cost:3,requires:["surv_iron_stomach"]},{id:"surv_corruption_resist",name:"Corruption Resist",description:"Reduced corruption buildup",cost:3,requires:["surv_bandages"]},{id:"surv_shelter_master",name:"Shelter Master",description:"Shelters provide better quality",cost:2,requires:["surv_rest"]},{id:"surv_second_wind",name:"Second Wind",description:"Recover stamina faster when low",cost:3,requires:["surv_endurance"]}]}),new ar({id:"combat",name:"Combat",nodes:[{id:"cmb_parry",name:"Parry",description:"Timed parry window for melee",cost:1},{id:"cmb_heavy_blow",name:"Heavy Blow",description:"Stronger heavy attacks",cost:1},{id:"cmb_quick_draw",name:"Quick Draw",description:"Faster bow draw speed",cost:1},{id:"cmb_shield_wall",name:"Shield Wall",description:"Reduced damage when blocking",cost:2,requires:["cmb_parry"]},{id:"cmb_precise_strike",name:"Precise Strike",description:"Critical hit chance on weak spots",cost:2,requires:["cmb_heavy_blow"]},{id:"cmb_ranged_stability",name:"Ranged Stability",description:"Less bow sway",cost:2,requires:["cmb_quick_draw"]},{id:"cmb_counter",name:"Counter",description:"Damage on successful parry",cost:3,requires:["cmb_shield_wall"]},{id:"cmb_cleave",name:"Cleave",description:"Hit multiple enemies with heavy attacks",cost:3,requires:["cmb_precise_strike"]},{id:"cmb_steady_aim",name:"Steady Aim",description:"Headshot bonus damage",cost:3,requires:["cmb_ranged_stability"]},{id:"cmb_berserker",name:"Berserker",description:"Damage bonus when health is low",cost:3,requires:["cmb_cleave"]}]}),new ar({id:"craft",name:"Craft",nodes:[{id:"crf_repair",name:"Field Repair",description:"Better repair efficiency",cost:1},{id:"crf_yield",name:"Material Yield",description:"Higher material yield from mining",cost:1},{id:"crf_recipes",name:"Advanced Recipes",description:"Unlock intermediate recipes",cost:2,requires:["crf_repair"]},{id:"crf_tool_mastery",name:"Tool Mastery",description:"Tools last longer",cost:2,requires:["crf_repair"]},{id:"crf_smelt",name:"Efficient Smelting",description:"Less fuel per smelt",cost:2,requires:["crf_yield"]},{id:"crf_forge_master",name:"Forge Master",description:"Unlock high-tier metalworking",cost:3,requires:["crf_recipes"]},{id:"crf_architect",name:"Architect",description:"Restoration costs reduced",cost:2,requires:["crf_yield"]},{id:"crf_rune_craft",name:"Rune Craft",description:"Craft rune items at rune table",cost:3,requires:["crf_forge_master"]},{id:"crf_master_smith",name:"Master Smith",description:"Best-tier weapons and armor",cost:3,requires:["crf_forge_master"]}]}),new ar({id:"exploration",name:"Exploration",nodes:[{id:"exp_map_reveal",name:"Pathfinder",description:"Faster map reveal radius",cost:1},{id:"exp_climb",name:"Sure-Footed",description:"Safer climbing, reduced fall damage",cost:1},{id:"exp_treasure",name:"Treasure Sense",description:"Detect hidden caches nearby",cost:2,requires:["exp_map_reveal"]},{id:"exp_scout",name:"Scout",description:"See enemies from further away",cost:2,requires:["exp_map_reveal"]},{id:"exp_mountaineer",name:"Mountaineer",description:"Better movement in mountains",cost:2,requires:["exp_climb"]},{id:"exp_lore_reader",name:"Lore Reader",description:"Identify ruins and relics faster",cost:2,requires:["exp_treasure"]},{id:"exp_night_eye",name:"Night Eye",description:"Better vision in darkness",cost:2,requires:["exp_scout"]},{id:"exp_swift_travel",name:"Swift Travel",description:"Move faster on roads",cost:3,requires:["exp_mountaineer"]}]}),new ar({id:"fellowship",name:"Fellowship",nodes:[{id:"fel_reputation",name:"Good Reputation",description:"Faster reputation gain",cost:1},{id:"fel_trader",name:"Shrewd Trader",description:"Better prices from merchants",cost:1},{id:"fel_diplomat",name:"Diplomat",description:"Faction hostility decays faster",cost:2,requires:["fel_reputation"]},{id:"fel_mentor",name:"Mentor",description:"Gain bonus XP from quest NPCs",cost:2,requires:["fel_reputation"]},{id:"fel_cheaper_restore",name:"Community Builder",description:"Cheaper restoration costs",cost:2,requires:["fel_trader"]},{id:"fel_trust",name:"Deep Trust",description:"Unlock unique faction quests",cost:3,requires:["fel_diplomat"]},{id:"fel_inspire",name:"Inspire",description:"Nearby allies fight better",cost:3,requires:["fel_mentor"]},{id:"fel_peace",name:"Peacekeeper",description:"Some enemies can be calmed",cost:3,requires:["fel_trust"]}]}),new ar({id:"attunement",name:"Attunement",nodes:[{id:"att_focus",name:"Focus Pool",description:"Increased max focus",cost:1},{id:"att_heal",name:"Healing Touch",description:"Stronger healing abilities",cost:1},{id:"att_ward",name:"Ward Strength",description:"Wards last longer",cost:2,requires:["att_focus"]},{id:"att_relic_sense",name:"Relic Sense",description:"Detect nearby relics",cost:2,requires:["att_focus"]},{id:"att_nature",name:"Nature Bond",description:"Nature magic costs less focus",cost:2,requires:["att_heal"]},{id:"att_stabilize",name:"Stabilize Relic",description:"Better relic stabilization",cost:3,requires:["att_relic_sense"]},{id:"att_purify",name:"Purify",description:"Remove corruption from blocks",cost:3,requires:["att_ward"]},{id:"att_calm_fear",name:"Calm Fear",description:"Reduce terror/corruption buildup",cost:2,requires:["att_nature"]},{id:"att_deep_attune",name:"Deep Attunement",description:"Relic abilities gain power",cost:3,requires:["att_stabilize"]}]})];class fn{constructor({id:e,name:t,position:n,factionId:r,dialogueId:s,dialogue:o={},trades:a=[]}){this.id=e,this.name=t,this.position={...n},this.spawnPosition={...n},this.factionId=r,this.dialogueId=s,this.dialogue=o,this.trades=a,this._wanderTimer=0,this._wanderDirX=0,this._wanderDirZ=0,this._wanderSpeed=1.2,this._wanderRadius=6}_collidesWithWorld(e,t,n){if(!n)return!1;const r=Math.floor(e),s=Math.floor(this.position.y),o=Math.floor(t);return Qt(n.getBlock(r,s,o))||Qt(n.getBlock(r,s+1,o))}updateAI(e,t,n){if(this._wanderTimer-=e,this._wanderTimer<=0)if(Math.random()<.4)this._wanderDirX=0,this._wanderDirZ=0,this._wanderTimer=2+Math.random()*3;else{const r=Math.random()*Math.PI*2;this._wanderDirX=Math.cos(r),this._wanderDirZ=Math.sin(r),this._wanderTimer=1+Math.random()*2}if(this._wanderDirX!==0||this._wanderDirZ!==0){const r=this.position.x+this._wanderDirX*this._wanderSpeed*e,s=this.position.z+this._wanderDirZ*this._wanderSpeed*e,o=r-this.spawnPosition.x,a=s-this.spawnPosition.z;if(o*o+a*a>this._wanderRadius*this._wanderRadius){const c=Math.sqrt(o*o+a*a);this._wanderDirX=-o/c,this._wanderDirZ=-a/c}else this._collidesWithWorld(r,this.position.z,n)?this._wanderDirX=-this._wanderDirX:this.position.x=r,this._collidesWithWorld(this.position.x,s,n)?this._wanderDirZ=-this._wanderDirZ:this.position.z=s}t&&(this.position.y=t(Math.floor(this.position.x),Math.floor(this.position.z))+1)}hasTrades(){return this.trades.length>0}getDialogue(e){if(!this.dialogueId)return this.dialogue.default||"";const t=e.getStatus(this.dialogueId);return t===jt.COMPLETED&&this.dialogue.completed?this.dialogue.completed:t===jt.ACTIVE&&this.dialogue.active?this.dialogue.active:t===jt.AVAILABLE&&this.dialogue.available?this.dialogue.available:this.dialogue.default||""}}class hv{constructor(){this._npcs=new Map}addNPC(e){this._npcs.set(e.id,e)}getNPC(e){return this._npcs.get(e)}getAllNPCs(){return Array.from(this._npcs.values())}findNearby(e,t){const n=[];for(const r of this._npcs.values())mn(e,r.position)<=t&&n.push(r);return n}getByFaction(e){const t=[];for(const n of this._npcs.values())n.factionId===e&&t.push(n);return t}}const Bo=[new fn({id:"ranger_hal",name:"Hal the Ranger",position:{x:10,y:33,z:8},factionId:"road_wardens",dialogueId:"ch1_embers",dialogue:{available:"The wild is dangerous. Ruins stir with old power.",active:"Have you found the ward fragment yet?",completed:"Well done. The ward glows again.",default:"Stay safe out there."},trades:[{give:{type:"leather",count:3},receive:{type:"iron_sword",count:1}},{give:{type:"iron_ore",count:2},receive:{type:"stone_pickaxe",count:1}}]}),new fn({id:"shire_farmer",name:"Hamfast the Farmer",position:{x:-15,y:33,z:12},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Fine day for gardening. The taters are coming along nicely."},trades:[{give:{type:"fiber",count:5},receive:{type:"raw_berries",count:3}},{give:{type:"wood",count:5},receive:{type:"raw_meat",count:2}}]}),new fn({id:"shire_merchant",name:"Rosie the Merchant",position:{x:20,y:33,z:-5},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Looking to trade? I have fine Shire goods."},trades:[{give:{type:"stone",count:10},receive:{type:"torch",count:5}},{give:{type:"leather",count:5},receive:{type:"bedroll",count:1}},{give:{type:"iron_ore",count:3},receive:{type:"stone_pickaxe",count:1}}]}),new fn({id:"elara_lorekeeper",name:"Elara the Lorekeeper",position:{x:200,y:33,z:35},factionId:"rivendell_keepers",dialogueId:"ch3_records",dialogue:{available:"The old records speak of a ward network...",active:"Search the archives. The truth is there.",completed:"You have found what was hidden.",default:"The lore is fading, but not yet lost."},trades:[{give:{type:"lore_fragment",count:2},receive:{type:"relic_shard",count:1}}]}),new fn({id:"rivendell_healer",name:"Celebrin the Healer",position:{x:210,y:33,z:25},factionId:"rivendell_keepers",dialogueId:null,dialogue:{default:"The valley still holds its peace. Let me tend your wounds."},trades:[{give:{type:"fiber",count:3},receive:{type:"bandage",count:2}},{give:{type:"raw_berries",count:5},receive:{type:"herb_salad",count:2}}]}),new fn({id:"thorin_smith",name:"Thorin the Smith",position:{x:275,y:45,z:55},factionId:"dwarven_crafters",dialogueId:"ch4_mountains",dialogue:{available:"The old forge can be rekindled, with the right materials.",active:"Have you stabilized the mechanism?",completed:"Aye, the forge rings true once more.",default:"Need something forged?"},trades:[{give:{type:"iron_ore",count:5},receive:{type:"iron_sword",count:1}},{give:{type:"iron_ore",count:3},receive:{type:"iron_pickaxe",count:1}},{give:{type:"copper_ore",count:5},receive:{type:"copper_pickaxe",count:1}}]}),new fn({id:"mountain_trader",name:"Dwalin the Trader",position:{x:260,y:45,z:45},factionId:"dwarven_crafters",dialogueId:null,dialogue:{default:"Mountain stone is the finest. Care to trade?"},trades:[{give:{type:"stone",count:10},receive:{type:"iron_ore",count:2}},{give:{type:"wood",count:15},receive:{type:"iron_ore",count:3}}]}),new fn({id:"galawen_warden",name:"Galawen the Warden",position:{x:395,y:33,z:40},factionId:"woodland_guardians",dialogueId:"ch5_darkwood",dialogue:{available:"The forest beacon must be restored before the dark wood consumes all.",active:"The spiders grow bolder. Clear their nests.",completed:"Light returns to Mirkwood. Thank you.",default:"Walk carefully beneath these boughs."},trades:[{give:{type:"fiber",count:10},receive:{type:"rope",count:3}},{give:{type:"relic_shard",count:2},receive:{type:"leather_armor",count:1}}]}),new fn({id:"beorn_jr",name:"Grimbeorn the Younger",position:{x:340,y:33,z:65},factionId:"beorning_wardens",dialogueId:null,dialogue:{default:"The wild things grow restless. Something stirs in the deep places."},trades:[{give:{type:"raw_meat",count:3},receive:{type:"leather",count:2}},{give:{type:"leather",count:5},receive:{type:"leather_armor",count:1}}]}),new fn({id:"old_tom",name:"Old Tom the Innkeeper",position:{x:85,y:33,z:22},factionId:"road_wardens",dialogueId:"ch2_roads",dialogue:{available:"The road needs mending. Fewer travelers come each season.",active:"Any luck restoring the hall?",completed:"The hall stands once more! Travelers will come again.",default:"Rest a while. The road will still be there tomorrow."},trades:[{give:{type:"iron_ore",count:1},receive:{type:"cooked_meat",count:2}},{give:{type:"wood",count:5},receive:{type:"torch",count:3}}]}),new fn({id:"bree_blacksmith",name:"Barliman the Blacksmith",position:{x:75,y:33,z:15},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Looking for a blade? I forge fine ones, if the price is right."},trades:[{give:{type:"iron_ore",count:4},receive:{type:"iron_sword",count:1}},{give:{type:"stone",count:8},receive:{type:"stone_pickaxe",count:1}}]}),new fn({id:"sage_miriel",name:"Miriel the Sage",position:{x:500,y:40,z:28},factionId:"rivendell_keepers",dialogueId:"ch7_shadow",dialogue:{available:"The awakening reaches its peak. The bastion must hold.",active:"Press on. The dark champion awaits.",completed:"It is done. The shadow recedes.",default:"The age turns. What comes next is yours to shape."},trades:[{give:{type:"relic_shard",count:5},receive:{type:"lore_fragment",count:3}}]})];function zo(i,e,t){const n=i.findNearby(e,t);if(n.length===0)return null;let r=null,s=1/0;for(const o of n){const a=mn(e,o.position);a<s&&(r=o,s=a)}return r}function As(i,e,t){return mn(i,e)<=t}class uv{constructor(e,t){this._fog=e,this._landmarks=t,this.isOpen=!1}toggle(){this.isOpen=!this.isOpen}getVisibleLandmarks(){return this._landmarks}getExploredPercentage(){return this._fog.getRevealedPercentage()}isRevealed(e,t){return this._fog.isRevealed(e,t)}getMapData(e){return{playerPos:{...e},landmarks:this._landmarks.map(t=>({id:t.id,name:t.name,x:t.position.x,z:t.position.z,region:t.region})),explored:this.getExploredPercentage()}}}const Un=Object.freeze({SHIRE:"shire",BREE:"bree",TROLLSHAWS:"trollshaws",RIVENDELL:"rivendell",MISTY_MOUNTAINS:"misty_mountains",ANDUIN_VALE:"anduin_vale",MIRKWOOD:"mirkwood",LONG_LAKE:"long_lake",EREBOR:"erebor",DOL_GULDUR:"dol_guldur"});class kn{constructor({id:e,name:t,position:n,radius:r,region:s,description:o=""}){this.id=e,this.name=t,this.position={...n},this.radius=r,this.region=s,this.description=o}contains(e){return mn(this.position,e)<=this.radius}}const Rs=[new kn({id:"shire",name:"The Shire",position:{x:0,y:33,z:0},radius:60,region:Un.SHIRE,description:"Green rolling hills and cozy burrows."}),new kn({id:"bree",name:"Bree",position:{x:80,y:33,z:20},radius:25,region:Un.BREE,description:"A crossroads town where many travelers meet."}),new kn({id:"trollshaws",name:"Trollshaws",position:{x:140,y:33,z:40},radius:35,region:Un.TROLLSHAWS,description:"Rocky woodland where trolls once roamed."}),new kn({id:"rivendell",name:"Rivendell",position:{x:200,y:33,z:30},radius:30,region:Un.RIVENDELL,description:"The last homely house east of the sea."}),new kn({id:"misty_mountains",name:"Misty Mountains",position:{x:270,y:50,z:50},radius:50,region:Un.MISTY_MOUNTAINS,description:"Towering peaks hiding goblin tunnels and ancient delves."}),new kn({id:"anduin_vale",name:"Anduin Vale",position:{x:340,y:33,z:60},radius:40,region:Un.ANDUIN_VALE,description:"Fertile valley of the Great River, home to Beornings."}),new kn({id:"mirkwood",name:"Mirkwood",position:{x:400,y:33,z:40},radius:55,region:Un.MIRKWOOD,description:"A dark and tangled forest crawling with spiders."}),new kn({id:"long_lake",name:"Long Lake",position:{x:470,y:33,z:30},radius:25,region:Un.LONG_LAKE,description:"Lake-town and its surroundings on the water."}),new kn({id:"erebor",name:"Erebor",position:{x:520,y:45,z:20},radius:35,region:Un.EREBOR,description:"The Lonely Mountain, ancient dwarven stronghold."}),new kn({id:"dol_guldur",name:"Dol Guldur",position:{x:420,y:33,z:90},radius:30,region:Un.DOL_GULDUR,description:"A corrupted ruin of dark power in southern Mirkwood."})];function fv(i,e,t,n={}){const r={};for(const[c,l]of i.chunks){let h=!1;for(let d=0;d<l.blocks.length;d++)if(l.blocks[d]!==0){h=!0;break}h&&(r[c]=Array.from(l.blocks))}const s=[],o=t.size||36;for(let c=0;c<o;c++)s.push(t.getSlot?t.getSlot(c):null);const a={version:2,seed:n.seed||0,player:{position:{...e.position},velocity:{...e.velocity},yaw:e.yaw,pitch:e.pitch,onGround:e.onGround},inventory:s,inventorySize:o,chunks:r};if(n.survivalStats){const c=n.survivalStats;a.survivalStats={health:c.health,maxHealth:c.maxHealth,stamina:c.stamina,hunger:c.hunger,focus:c.focus,corruption:c.corruption,temperature:c.temperature}}return n.quests&&(a.quests=n.quests.serialize()),n.factions&&(a.factions=n.factions.serialize()),JSON.stringify(a)}function pv(i){const e=JSON.parse(i),t=new dd;for(const[a,c]of Object.entries(e.chunks))t._getOrCreateChunk(...a.split(",").map(Number)).blocks.set(c);const n=new gd(e.player.position);n.velocity=e.player.velocity,n.yaw=e.player.yaw,n.pitch=e.player.pitch,n.onGround=e.player.onGround;const r=e.inventorySize||36,s=new md(r);if(Array.isArray(e.inventory))for(const a of e.inventory)a&&a.type&&a.count>0&&s.addItem(a.type,a.count);const o={world:t,player:n,inventory:s};if(e.survivalStats){const a=new _d;Object.assign(a,e.survivalStats),o.survivalStats=a}return e.quests&&(o.questData=e.quests),e.factions&&(o.factionData=e.factions),o}class Nr{constructor({id:e,name:t,description:n,position:r,requirements:s}){this.id=e,this.name=t,this.description=n,this.position=r||{x:0,y:0,z:0},this.requirements=s,this.restored=!1}canRestore(e){for(const t of this.requirements)if(e.count(t.type)<t.count)return!1;return!0}restore(e){if(this.restored||!this.canRestore(e))return!1;for(const t of this.requirements)e.remove(t.type,t.count);return this.restored=!0,!0}}const Ur=[new Nr({id:"starter_watchpost",name:"Ruined Watch-Post",description:"A crumbling frontier watch-post. Restoring it unlocks the first safe base.",position:{x:30,y:33,z:30},requirements:[{type:"wood",count:15},{type:"stone",count:10}]}),new Nr({id:"roadside_hall",name:"Roadside Ranger Hall",description:"An abandoned ranger outpost along the East Road. Improves travel and trade.",position:{x:90,y:33,z:25},requirements:[{type:"wood",count:20},{type:"stone",count:15},{type:"iron_ore",count:5}]}),new Nr({id:"mountain_workshop",name:"Dwarven Mountain Workshop",description:"A sealed dwarven annex in the Misty Mountains. Unlocks high-tier smithing.",position:{x:270,y:45,z:55},requirements:[{type:"stone",count:30},{type:"iron_ore",count:15},{type:"copper_ore",count:10}]}),new Nr({id:"forest_beacon",name:"Mirkwood Forest Beacon",description:"An ancient grove beacon overrun by corruption. Stabilizes the Mirkwood region.",position:{x:400,y:33,z:45},requirements:[{type:"wood",count:25},{type:"relic_shard",count:5},{type:"fiber",count:15}]}),new Nr({id:"ward_bastion",name:"Ward Bastion of the Last Age",description:"The final ward structure tied to the main quest. Its restoration turns the tide.",position:{x:500,y:40,z:30},requirements:[{type:"stone",count:40},{type:"iron_ore",count:20},{type:"relic_shard",count:10},{type:"lore_fragment",count:5}]})],yl={small:{radius:3,height:4,wallBlock:x.COBBLESTONE},medium:{radius:5,height:5,wallBlock:x.STONE_BRICK},large:{radius:7,height:6,wallBlock:x.STONE_BRICK}};function mv(i,e,t="small"){const n=yl[t]||yl.small,{radius:r,height:s,wallBlock:o}=n,a=Math.floor(e.x),c=Math.floor(e.y),l=Math.floor(e.z);for(let d=-r;d<=r;d++)for(let f=-r;f<=r;f++)i.setBlock(a+d,c-1,l+f,x.COBBLESTONE);for(let d=0;d<s;d++)for(let f=-r;f<=r;f++)for(let p=-r;p<=r;p++)(Math.abs(f)===r||Math.abs(p)===r)&&(f===r&&Math.abs(p)<=1&&d<3||(d<s-1||(f+p)%3!==0)&&i.setBlock(a+f,c+d,l+p,o));const h=[[-r,-r],[-r,r],[r,-r],[r,r]];for(const[d,f]of h)for(let p=0;p<s;p++)i.setBlock(a+d,c+p,l+f,x.STONE);for(let d=-r;d<=r;d++)for(let f=-r;f<=r;f++)(Math.abs(d)>=r-1||Math.abs(f)>=r-1)&&i.setBlock(a+d,c+s,l+f,o)}function xd(i,e,t={}){const n=t.wallBlock||x.OAK_PLANKS,r=t.roofBlock||x.PLANKS,s=t.floorBlock||x.COBBLESTONE,o=t.radius||4,a=t.height||4,c=t.bed!==!1,l=t.chest||!1,h=Math.floor(e.x),d=Math.floor(e.y),f=Math.floor(e.z),p=o+2;for(let u=-(o+1);u<=o+1;u++)for(let T=-(o+1);T<=o+1;T++)for(let b=0;b<=a+p;b++)i.setBlock(h+u,d+b,f+T,x.AIR);for(let u=-(o+1);u<=o+1;u++)for(let T=-(o+1);T<=o+1;T++)i.setBlock(h+u,d-1,f+T,x.COBBLESTONE);for(let u=-o;u<=o;u++)for(let T=-o;T<=o;T++)i.setBlock(h+u,d-1,f+T,s);for(let u=0;u<a;u++)for(let T=-o;T<=o;T++)for(let b=-o;b<=o;b++)if(Math.abs(T)===o||Math.abs(b)===o){if(T===o&&b===0&&u<2){i.setBlock(h+T,d+u,f+b,x.DOOR);continue}if(u===2&&x.GLASS&&!(Math.abs(T)===o&&Math.abs(b)===o)){if(Math.abs(T)===o&&b!==0&&Math.abs(b)<o&&b%3===0){i.setBlock(h+T,d+u,f+b,x.GLASS);continue}if(Math.abs(b)===o&&T!==0&&Math.abs(T)<o&&T%3===0){i.setBlock(h+T,d+u,f+b,x.GLASS);continue}}i.setBlock(h+T,d+u,f+b,n)}for(let u=0;u<=o;u++){const T=o-u;if(T<0)break;for(let b=-T;b<=T;b++)i.setBlock(h+b,d+a+u,f-o,n),i.setBlock(h+b,d+a+u,f+o,n)}for(let u=0;u<=o+1;u++){const T=o+1-u;if(T<0)break;for(let b=-(o+1);b<=o+1;b++)i.setBlock(h-T,d+a+u,f+b,r),T>0&&i.setBlock(h+T,d+a+u,f+b,r)}const _=h+o-1,g=f+o-1,m=d+a+o+1;for(let u=a;u<=m+1;u++)i.setBlock(_,d+u,g,x.COBBLESTONE);i.setBlock(_,m+2,g,x.COBBLESTONE),i.setBlock(h,d+2,f-o+1,x.TORCH),c&&i.setBlock(h-o+1,d,f-o+1,x.BED),l&&i.setBlock(h-o+1,d,f+o-1,x.CHEST)}function _v(i,e,t="small"){const n={small:{radius:4,height:4,wallBlock:x.STONE_BRICK,roofBlock:x.OAK_PLANKS},medium:{radius:6,height:5,wallBlock:x.STONE_BRICK,roofBlock:x.OAK_PLANKS},large:{radius:8,height:6,wallBlock:x.STONE_BRICK,roofBlock:x.PLANKS}},r=n[t]||n.small;xd(i,e,{wallBlock:r.wallBlock,roofBlock:r.roofBlock,floorBlock:x.STONE_BRICK,radius:r.radius,height:r.height,bed:!0,chest:!0});const s=Math.floor(e.x),o=Math.floor(e.y),a=Math.floor(e.z);i.setBlock(s+r.radius-1,o+2,a,x.TORCH),i.setBlock(s-r.radius+1,o+2,a,x.TORCH),i.setBlock(s,o+2,a+r.radius-1,x.TORCH),i.setBlock(s+r.radius-2,o,a-r.radius+1,x.WORKBENCH)}const ws=Object.freeze({WARD_LIGHT:"ward_light",HEAL_WOUND:"heal_wound",SENSE_CORRUPTION:"sense_corruption",ROOT_SNARE:"root_snare",STONE_WARD:"stone_ward",RUNE_MEND:"rune_mend",CALM_FEAR:"calm_fear"}),gv=15;class vv{constructor({id:e,name:t,ability:n,focusCost:r,description:s=""}){this.id=e,this.name=t,this.ability=n,this.focusCost=r,this.description=s,this.cooldown=0}canUse(e){return e>=this.focusCost&&this.cooldown<=0}}class xv{constructor(){this._equipped=null}equipRelic(e){this._equipped=e}getEquippedRelic(){return this._equipped}useRelic(e){if(!this._equipped||!this._equipped.canUse(e))return!1;const t={ability:this._equipped.ability,focusCost:this._equipped.focusCost};return this._equipped.cooldown=gv,t}tick(e){this._equipped&&this._equipped.cooldown>0&&(this._equipped.cooldown=Math.max(0,this._equipped.cooldown-e))}}const In=Object.freeze({NONE:"none",MINIMAL:"minimal",BASIC:"basic",GOOD:"good",EXCELLENT:"excellent"}),El={[In.NONE]:{warmth:0,safety:0,recoveryMod:1},[In.MINIMAL]:{warmth:.2,safety:.2,recoveryMod:1.2},[In.BASIC]:{warmth:.4,safety:.4,recoveryMod:1.5},[In.GOOD]:{warmth:.7,safety:.7,recoveryMod:1.8},[In.EXCELLENT]:{warmth:1,safety:1,recoveryMod:2}},yv=3,Ev=8;class Sv{evaluate(e,t){const n=Math.floor(t.x),r=Math.floor(t.y),s=Math.floor(t.z);let o=!1;for(let h=1;h<=Ev;h++)if(Qt(e.getBlock(n,r+h,s))){o=!0;break}if(!o)return{quality:In.NONE,...El[In.NONE]};let a=0;const c=[[1,0],[-1,0],[0,1],[0,-1]];for(const[h,d]of c){let f=!1;for(let p=1;p<=yv;p++)if(Qt(e.getBlock(n+h*p,r,s+d*p))||Qt(e.getBlock(n+h*p,r+1,s+d*p))){f=!0;break}f&&a++}let l;return a>=4?l=In.EXCELLENT:a>=3?l=In.GOOD:a>=2?l=In.BASIC:l=In.MINIMAL,{quality:l,...El[l]}}}const Sl=Object.freeze({HISTORY:"history",INSCRIPTION:"inscription",SONG:"song",MAP_NOTE:"map_note",RELIC_VISION:"relic_vision"});class yd{constructor({id:e,title:t,text:n,category:r}){this.id=e,this.title=t,this.text=n,this.category=r}}class Mv{constructor(){this._entries=new Map}addEntry(e){return this._entries.has(e.id)?!1:(this._entries.set(e.id,e),!0)}hasEntry(e){return this._entries.has(e)}getEntries(){return Array.from(this._entries.values())}getByCategory(e){return this.getEntries().filter(t=>t.category===e)}serialize(){return this.getEntries().map(e=>({id:e.id,title:e.title,text:e.text,category:e.category}))}deserialize(e){for(const t of e)this.addEntry(new yd(t))}}class bv{constructor(){this._waypoints=new Map}unlockWaypoint(e){this._waypoints.has(e.id)||this._waypoints.set(e.id,{...e})}isUnlocked(e){return this._waypoints.has(e)}getWaypoints(){return Array.from(this._waypoints.values())}travel(e){const t=this._waypoints.get(e);return t?{...t.position}:null}serialize(){return this.getWaypoints()}deserialize(e){for(const t of e)this.unlockWaypoint(t)}}const vn=Object.freeze({CACHE:"cache",RUIN:"ruin",RELIC_FRAGMENT:"relic_fragment",ROADSTONE:"roadstone",RECIPE_TABLET:"recipe_tablet",LORE_BOOK:"lore_book",INSCRIPTION:"inscription"});class xn{constructor({id:e,type:t,position:n,reward:r=[]}){this.id=e,this.type=t,this.position={...n},this.reward=r,this.discovered=!1}discover(){return this.discovered?!1:(this.discovered=!0,!0)}}class Tv{constructor(e){this._items=e}get(e){return this._items.find(t=>t.id===e)}findNearby(e,t){return this._items.filter(n=>!n.discovered&&mn(e,n.position)<=t)}getDiscoveredCount(){return this._items.filter(e=>e.discovered).length}getTotalCount(){return this._items.length}}const Av=[new xn({id:"cache_shire_01",type:vn.CACHE,position:{x:15,y:33,z:10},reward:[{type:"bread",count:3}]}),new xn({id:"cache_bree_01",type:vn.CACHE,position:{x:85,y:33,z:18},reward:[{type:"iron_ore",count:5}]}),new xn({id:"cache_mountain_01",type:vn.CACHE,position:{x:260,y:40,z:45},reward:[{type:"copper_ore",count:8}]}),new xn({id:"lore_shire_01",type:vn.LORE_BOOK,position:{x:10,y:33,z:5},reward:[{type:"lore_fragment",count:1}]}),new xn({id:"lore_rivendell_01",type:vn.LORE_BOOK,position:{x:205,y:33,z:30},reward:[{type:"lore_fragment",count:2}]}),new xn({id:"relic_trollshaws_01",type:vn.RELIC_FRAGMENT,position:{x:145,y:33,z:38},reward:[{type:"relic_shard",count:1}]}),new xn({id:"relic_mirkwood_01",type:vn.RELIC_FRAGMENT,position:{x:410,y:33,z:45},reward:[{type:"relic_shard",count:2}]}),new xn({id:"roadstone_east_01",type:vn.ROADSTONE,position:{x:60,y:33,z:15},reward:[{type:"stone",count:3}]}),new xn({id:"roadstone_east_02",type:vn.ROADSTONE,position:{x:120,y:33,z:25},reward:[{type:"stone",count:3}]}),new xn({id:"inscription_dwarven_01",type:vn.INSCRIPTION,position:{x:280,y:42,z:50},reward:[{type:"lore_fragment",count:1}]}),new xn({id:"recipe_forge_01",type:vn.RECIPE_TABLET,position:{x:270,y:44,z:52},reward:[{type:"lore_fragment",count:1}]}),new xn({id:"cache_erebor_01",type:vn.CACHE,position:{x:515,y:40,z:20},reward:[{type:"iron_ore",count:10}]})];function Rv(i,e){return i*(100/(100+e))}const kr=Object.freeze({NONE:"none",POOR:"poor",DECENT:"decent",GOOD:"good",EXCELLENT:"excellent"});kr.NONE+"",kr.POOR+"",kr.DECENT+"",kr.GOOD+"",kr.EXCELLENT+"";const pn=Object.freeze({HOSTILE:"hostile",UNFRIENDLY:"unfriendly",NEUTRAL:"neutral",FRIENDLY:"friendly",HONORED:"honored",EXALTED:"exalted"}),wv=[{min:-1/0,max:-50,tier:pn.HOSTILE},{min:-50,max:0,tier:pn.UNFRIENDLY},{min:0,max:25,tier:pn.NEUTRAL},{min:25,max:100,tier:pn.FRIENDLY},{min:100,max:250,tier:pn.HONORED},{min:250,max:1/0,tier:pn.EXALTED}],Cv={[pn.HOSTILE]:1.5,[pn.UNFRIENDLY]:1.2,[pn.NEUTRAL]:1,[pn.FRIENDLY]:.9,[pn.HONORED]:.8,[pn.EXALTED]:.7};class cr{constructor({id:e,name:t,description:n}){this.id=e,this.name=t,this.description=n}}class Iv{constructor(e){this.factions=e,this._reputation=new Map;for(const t of e)this._reputation.set(t.id,0)}getReputation(e){return this._reputation.get(e)||0}addReputation(e,t){const n=this._reputation.get(e)||0;this._reputation.set(e,n+t)}getTier(e){const t=this.getReputation(e);for(const n of wv)if(t>=n.min&&t<n.max)return n.tier;return pn.NEUTRAL}applyRaceModifiers(e,t){for(const[n,r]of Object.entries(t))this.addReputation(n,r)}getPriceModifier(e){return Cv[this.getTier(e)]||1}getAllFactions(){return this.factions}serialize(){const e={};for(const[t,n]of this._reputation)e[t]=n;return{reputation:e}}deserialize(e){for(const[t,n]of Object.entries(e.reputation))this._reputation.set(t,n)}}const Ov=[new cr({id:"road_wardens",name:"Road Wardens",description:"Frontier men who guard the old roads and trade routes between settlements."}),new cr({id:"rivendell_keepers",name:"Rivendell Keepers",description:"Remnant lorekeepers preserving ancient Elven knowledge in the hidden valley."}),new cr({id:"dwarven_crafters",name:"Dwarven Crafters",description:"Skilled dwarven smiths and miners maintaining craft enclaves near the old holds."}),new cr({id:"woodland_guardians",name:"Woodland Guardians",description:"Surviving elves and wardens who protect the forests from corruption and darkness."}),new cr({id:"beorning_wardens",name:"Beorning Wardens",description:"Wild wardens of the Anduin vale who guard the passes and shelter travelers."}),new cr({id:"goblin_horde",name:"Goblin Horde",description:"Hostile goblin and orc bands infesting the mountains and old ruins."})],Ed=[{id:"ruin_clearing",name:"Clear the Old Watchtower",description:"A ruined watchtower on the east road is infested with goblins. Clear them out to make the road safer.",objectives:[{id:"clear_goblins",description:"Defeat goblins at the watchtower",target:5}]},{id:"herb_hunt",name:"Athelas for the Healer",description:"A healer in the frontier settlement needs rare athelas herbs from the forest edge.",objectives:[{id:"gather_herbs",description:"Gather athelas plants",target:3}]},{id:"beast_hunt",name:"Wolf Pack Menace",description:"A pack of wolves has been attacking travelers near the old bridge. Thin their numbers.",objectives:[{id:"kill_wolves",description:"Defeat wolves near the bridge",target:4}]},{id:"crafting_commission",name:"Tools for the Settlement",description:"The frontier settlement needs stone tools. Craft and deliver pickaxes and axes.",objectives:[{id:"deliver_pickaxes",description:"Deliver stone pickaxes",target:2},{id:"deliver_axes",description:"Deliver stone axes",target:2}]},{id:"ore_prospecting",name:"Iron for the Forge",description:"The dwarven smiths need iron ore to repair their forge. Mine ore from the mountains.",objectives:[{id:"mine_iron",description:"Mine iron ore",target:10}]},{id:"ruin_clearing_2",name:"The Haunted Barrow",description:"An ancient barrow mound has awakened wights. Cleanse the site before corruption spreads.",objectives:[{id:"defeat_wights",description:"Defeat wights in the barrow",target:3}]},{id:"beast_hunt_spider",name:"Spider Nest in Mirkwood",description:"Giant spiders have woven webs across a forest path. Destroy them and clear the way.",objectives:[{id:"kill_spiders",description:"Defeat spiders",target:6}]},{id:"herb_hunt_mushroom",name:"Mushroom Gathering",description:"A cook needs rare mushrooms that grow near the river stones.",objectives:[{id:"gather_mushrooms",description:"Gather mushrooms",target:5}]},{id:"lore_fragments",name:"Lost Pages of the Archive",description:"Scattered lore fragments from an ancient library have been found in ruins across the region.",objectives:[{id:"collect_fragments",description:"Collect lore fragments",target:4}]},{id:"road_repair",name:"Mend the East Road",description:"Sections of the old east road have crumbled. Place stone blocks to repair the path.",objectives:[{id:"place_stones",description:"Place cobblestone on the road",target:20}]},{id:"troll_bounty",name:"The Bridge Troll",description:"A troll has claimed the old stone bridge. Defeat it to restore safe passage.",objectives:[{id:"defeat_troll",description:"Defeat the bridge troll",target:1}]},{id:"crafting_commission_armor",name:"Armor for the Wardens",description:"The road wardens need leather armor. Craft and deliver sets to their outpost.",objectives:[{id:"deliver_armor",description:"Deliver leather armor",target:3}]},{id:"herb_gathering_mirkwood",name:"Herbs of Mirkwood",description:"The Woodland Guardians need medicinal herbs that grow deep within the shadowed paths of Mirkwood.",factionId:"woodland_guardians",reward:{xp:120,items:[{id:"elven_salve",quantity:2}]},objectives:[{id:"gather_mirkwood_herbs",description:"Gather rare herbs in Mirkwood",target:8}]},{id:"goblin_camp_clear",name:"Goblin Camp Assault",description:"A goblin encampment has been established near the trade road. Destroy it before their numbers grow.",factionId:"road_wardens",reward:{xp:200,items:[{id:"iron_sword",quantity:1}]},objectives:[{id:"defeat_camp_goblins",description:"Defeat goblins in the camp",target:8},{id:"destroy_camp_tents",description:"Destroy goblin tents",target:3}]},{id:"dwarven_relic_hunt",name:"Relics of the Dwarven Halls",description:"Ancient relics from a collapsed dwarven hall are scattered across the mountain foothills. Recover them.",factionId:"dwarven_crafters",reward:{xp:180,items:[{id:"dwarven_ring",quantity:1}]},objectives:[{id:"recover_relics",description:"Recover dwarven relics",target:5}]},{id:"road_repair_bree",name:"Mend the Bree Road",description:"The road leading into Bree has deteriorated badly. Place stone and gravel to restore safe passage.",factionId:"road_wardens",reward:{xp:100,items:[{id:"stone_block",quantity:10}]},objectives:[{id:"place_gravel",description:"Place gravel on the road",target:15},{id:"place_cobblestone",description:"Place cobblestone markers",target:6}]},{id:"spider_nest_clear",name:"Purge the Spider Nest",description:"A massive spider nest threatens the southern forest paths. Burn the webs and slay the brood mother.",factionId:"woodland_guardians",reward:{xp:250,items:[{id:"spider_silk",quantity:5}]},objectives:[{id:"burn_webs",description:"Burn spider webs",target:6},{id:"defeat_brood_mother",description:"Defeat the brood mother",target:1}]},{id:"wolf_den_clear",name:"Clear the Wolf Den",description:"Wargs have established a den in the Anduin valley caves. The Beorning Wardens need help driving them out.",factionId:"beorning_wardens",reward:{xp:180,items:[{id:"wolf_pelt",quantity:3}]},objectives:[{id:"defeat_wargs",description:"Defeat wargs in the den",target:6}]},{id:"beacon_light_chain",name:"Light the Beacon Chain",description:"The old warning beacons along the road have gone dark. Climb to each summit and relight the fires.",factionId:"road_wardens",reward:{xp:160,items:[{id:"torch",quantity:5}]},objectives:[{id:"light_beacons",description:"Light beacon fires",target:4}]},{id:"lore_collection_rivendell",name:"Lost Lore of Rivendell",description:"Scattered scrolls of ancient Elven knowledge have been found in ruins. Return them to the Keepers.",factionId:"rivendell_keepers",reward:{xp:150,items:[{id:"lore_scroll",quantity:1}]},objectives:[{id:"collect_scrolls",description:"Collect Elven lore scrolls",target:6}]},{id:"smith_commission_iron",name:"Iron Commission for the Smiths",description:"The dwarven smiths need iron tools and fittings crafted to exact specifications.",factionId:"dwarven_crafters",reward:{xp:140,items:[{id:"dwarven_ingot",quantity:2}]},objectives:[{id:"craft_iron_tools",description:"Craft iron tools",target:4},{id:"deliver_fittings",description:"Deliver iron fittings",target:3}]},{id:"cook_feast_hobbit",name:"Feast Preparations",description:"A grand feast is being planned at the frontier settlement. Gather ingredients and prepare the dishes.",factionId:"road_wardens",reward:{xp:100,items:[{id:"feast_plate",quantity:1}]},objectives:[{id:"gather_ingredients",description:"Gather feast ingredients",target:10},{id:"prepare_dishes",description:"Prepare feast dishes",target:4}]},{id:"scout_mountain_pass",name:"Scout the Mountain Pass",description:"The Beorning Wardens need a scout to traverse the high mountain pass and report on enemy movements.",factionId:"beorning_wardens",reward:{xp:200,items:[{id:"climbing_rope",quantity:2}]},objectives:[{id:"reach_summit",description:"Reach the mountain summit",target:1},{id:"mark_enemy_camps",description:"Mark enemy encampments on the map",target:3}]},{id:"map_fragment_hunt",name:"The Cartographer's Request",description:"An Elven cartographer needs old map fragments to reconstruct a complete chart of the northern wilds.",factionId:"rivendell_keepers",reward:{xp:130,items:[{id:"region_map",quantity:1}]},objectives:[{id:"find_map_fragments",description:"Find map fragments in ruins",target:5}]},{id:"ruin_survey_trollshaws",name:"Survey the Trollshaws Ruins",description:"Ancient structures in the Trollshaws may hold clues about the old kingdom. Survey and document them.",factionId:"rivendell_keepers",reward:{xp:170,items:[{id:"survey_notes",quantity:1}]},objectives:[{id:"survey_ruins",description:"Survey ruin sites in the Trollshaws",target:4}]},{id:"mushroom_foraging",name:"Foraging in the Shire Woods",description:"Rare glowing mushrooms grow in the damp hollows of the Shire woods. The Guardians use them for remedies.",factionId:"woodland_guardians",reward:{xp:90,items:[{id:"glowing_mushroom",quantity:5}]},objectives:[{id:"forage_mushrooms",description:"Forage rare mushrooms",target:8}]},{id:"guard_duty_outpost",name:"Guard Duty at the Outpost",description:"The road wardens are short-staffed. Stand guard at the frontier outpost through the night and repel attackers.",factionId:"road_wardens",reward:{xp:220,items:[{id:"warden_badge",quantity:1}]},objectives:[{id:"survive_night",description:"Survive the night at the outpost",target:1},{id:"repel_attackers",description:"Repel attacking enemies",target:5}]}],lr=Object.freeze({HAND:"hand",CAMPFIRE:"campfire",WORKBENCH:"workbench",FORGE:"forge",LOOM:"loom",KITCHEN:"kitchen",RUNE_TABLE:"rune_table"}),yn=Object.freeze({STONE:"stone",OIL_FLASK:"oil_flask",SMOKE_BOMB:"smoke_bomb",BAIT:"bait"});class Cs{constructor({type:e,damage:t,range:n,effect:r}){this.type=e,this.damage=t,this.range=n,this.effect=r}}const Dv=2;function Lv(){return new Iv(Ov)}function Pv(i){return i.map(e=>new Qn({id:e.id,chapter:0,name:e.name,description:e.description,objectives:e.objectives,requires:[]}))}function Nv(){const i=Pv(Ed);return new iv([...rv,...i])}function Uv(i,e){const t=e.getTotalArmor();return Rv(i,t)}function kv(i){const e=i.get("main_hand");return e&&e.weapon?e.weapon.damage:Dv}const Fv={[x.WORKBENCH]:lr.WORKBENCH,[x.FORGE]:lr.FORGE,[x.CAMPFIRE]:lr.CAMPFIRE,[x.KITCHEN]:lr.KITCHEN,[x.LOOM]:lr.LOOM,[x.RUNE_TABLE]:lr.RUNE_TABLE};function Bv(i,e){const t=Math.floor(e.x),n=Math.floor(e.y),r=Math.floor(e.z),s=3;for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++)for(let c=-s;c<=s;c++){const l=i.getBlock(t+o,n+a,r+c),h=Fv[l];if(h)return h}return null}function zv(i,e){return e?i.aggroRange*.5:i.aggroRange}yn.STONE+"",new Cs({type:yn.STONE,damage:5,range:12,effect:null}),yn.OIL_FLASK+"",new Cs({type:yn.OIL_FLASK,damage:15,range:10,effect:"fire"}),yn.SMOKE_BOMB+"",new Cs({type:yn.SMOKE_BOMB,damage:0,range:8,effect:"smoke"}),yn.BAIT+"",new Cs({type:yn.BAIT,damage:0,range:10,effect:"lure"});yn.STONE,yn.OIL_FLASK,yn.SMOKE_BOMB,yn.BAIT;const Hv=5,Gv=8;class Vv{constructor(e){this.base=e,this._modifiers=new Map}addModifier(e,t){this._modifiers.set(e,t)}removeModifier(e){this._modifiers.delete(e)}getEffective(e=!1,t=!1){let n=this.base;for(const r of this._modifiers.values())n+=r;return e&&(n+=Hv),t&&(n-=Gv),Math.max(0,n)}isHiddenFrom(e,t,n=!1,r=!1){const s=this.getEffective(n,r),o=Math.min(t/5,1);return s*o>e}}const Wv={wood:"🪵",stone:"🪨",fiber:"🌱",stick:"📏",clay:"🧱",iron_ore:"⛏",copper_ore:"⛏",coal:"⚫",leather:"🧴",rope:"🨢",relic_shard:"✨",lore_fragment:"📜",sand:"🏖",flint:"💎",pickaxe:"⛏",axe:"🪓",hammer:"🔨",iron_pickaxe:"⛏",copper_pickaxe:"⛏",stone_pickaxe:"⛏",stone_axe:"🪓",iron_axe:"🪓",lantern:"🏮",torch:"🔥",dagger:"🗡",iron_sword:"⚔",iron_hammer:"🔨",spear:"🔱",short_bow:"🏹",refined_bow:"🏹",sling:"💫",arrow:"➡",leather_armor:"🛡",iron_helm:"🪖",iron_chest:"🛡",shield:"🛡",cloak:"🧥",bread:"🍞",raw_meat:"🍖",cooked_meat:"🍗",berries:"🫐",mushroom:"🍄",lembas:"🍞",stew:"🍲",trail_rations:"🥪",fish:"🐟",apple:"🍎",honey:"🍯",ward_light_stone:"🌟",healing_crystal:"💎",ward_token:"🌟",bandage:"🩹",bedroll:"🛏",herb_pouch:"🌿",firestarter:"🔥",lore_scroll:"📜",map_fragment:"🗺",song_fragment:"🎶",dirt:"🟫",cobblestone:"⬜",planks:"🟨",oak_planks:"🟧",glass:"🔵",dark_stone:"⬛",marble:"⚪",thatch:"🟡",stone_brick:"🔲",chest:"🗄",workbench:"🛠",campfire:"🔥",forge:"⚒",kitchen:"🍳",loom:"🧵",gravel:"▫",raw_berries:"🫐",raw_mushroom:"🍄",herb_salad:"🥗",iron_ingot:"💠",copper_ingot:"🟠",raw_fish:"🐟",cooked_fish:"🐟",slate:"◽",birch_wood:"🪵"},Xv="📦";function Ho(i){return Wv[i]||Xv}function Sd(i,e){return i.dialogueId?e.getStatus(i.dialogueId)===jt.AVAILABLE:!1}function qv(i,e){return Sd(i,e)?e.activate(i.dialogueId):!1}const Kv=[{questId:"ch2_roads",objectiveId:"ch2_restore",position:{x:90,y:33,z:25},radius:15,type:"restore_site"},{questId:"ch2_roads",objectiveId:"ch2_meet_npc",position:{x:80,y:33,z:22},radius:10,type:"npc_proximity"},{questId:"ch2_roads",objectiveId:"ch2_corruption",position:{x:100,y:33,z:30},radius:20,type:"explore_area"},{questId:"ch3_records",objectiveId:"ch3_reach_rivendell",position:{x:200,y:33,z:30},radius:25,type:"reach_location"},{questId:"ch3_records",objectiveId:"ch3_learn_wards",position:{x:200,y:33,z:35},radius:10,type:"npc_proximity"},{questId:"ch3_records",objectiveId:"ch3_obtain_relic",position:{x:205,y:33,z:30},radius:8,type:"discoverable"},{questId:"ch4_mountains",objectiveId:"ch4_enter_delve",position:{x:270,y:50,z:50},radius:30,type:"reach_location"},{questId:"ch4_mountains",objectiveId:"ch4_stabilize",position:{x:270,y:45,z:55},radius:12,type:"restore_site"},{questId:"ch4_mountains",objectiveId:"ch4_defeat_boss",position:{x:265,y:50,z:45},radius:15,type:"kill_enemies"},{questId:"ch5_darkwood",objectiveId:"ch5_enter_mirkwood",position:{x:400,y:33,z:40},radius:30,type:"reach_location"},{questId:"ch5_darkwood",objectiveId:"ch5_clear_spiders",position:{x:400,y:33,z:45},radius:20,type:"kill_enemies"},{questId:"ch5_darkwood",objectiveId:"ch5_restore_beacon",position:{x:400,y:33,z:45},radius:12,type:"restore_site"},{questId:"ch6_forge",objectiveId:"ch6_reach_forge",position:{x:520,y:45,z:20},radius:25,type:"reach_location"},{questId:"ch6_forge",objectiveId:"ch6_unlock_crafting",position:{x:520,y:45,z:20},radius:12,type:"craft_at_station"},{questId:"ch6_forge",objectiveId:"ch6_discover_source",position:{x:515,y:45,z:25},radius:10,type:"discoverable"},{questId:"ch7_shadow",objectiveId:"ch7_assault",position:{x:420,y:33,z:90},radius:25,type:"reach_location"},{questId:"ch7_shadow",objectiveId:"ch7_disable_link",position:{x:420,y:33,z:90},radius:12,type:"restore_site"},{questId:"ch7_shadow",objectiveId:"ch7_defeat_champion",position:{x:425,y:33,z:95},radius:15,type:"kill_enemies"},{questId:"ch8_after",objectiveId:"ch8_celebrate",position:{x:30,y:33,z:30},radius:15,type:"reach_location"},{questId:"ch8_after",objectiveId:"ch8_explore",position:{x:0,y:33,z:0},radius:50,type:"explore_area"}];class Yv{constructor(){this._triggers=Kv.map(e=>({...e})),this._fired=new Set}getTriggers(){return this._triggers}checkTriggers(e){const t=[];for(const n of this._triggers){const r=`${n.questId}:${n.objectiveId}`;this._fired.has(r)||mn(e,n.position)<=n.radius&&(t.push({questId:n.questId,objectiveId:n.objectiveId,type:n.type}),(n.type==="reach_location"||n.type==="explore_area")&&this._fired.add(r))}return t}}const ei=Object.freeze({FRESH:"fresh",AGING:"aging",STALE:"stale",SPOILED:"spoiled"}),$v={[ei.FRESH]:1,[ei.AGING]:.75,[ei.STALE]:.4,[ei.SPOILED]:.1};class jv{constructor(){this._items=new Map}addItem(e,t){this._items.set(e,{maxTime:t,remaining:t})}removeItem(e){this._items.delete(e)}tick(e){for(const[,t]of this._items)t.remaining=Math.max(0,t.remaining-e)}getTimeRemaining(e){const t=this._items.get(e);return t?t.remaining:1/0}getBand(e){const t=this._items.get(e);if(!t)return ei.FRESH;const n=t.remaining/t.maxTime;return n>.5?ei.FRESH:n>.25?ei.AGING:n>0?ei.STALE:ei.SPOILED}getEffectivenessMultiplier(e){return $v[this.getBand(e)]||1}}const Is=Object.freeze({ELF:"elf",DWARF:"dwarf",HOBBIT:"hobbit",MAN:"man"}),Zv={[Is.ELF]:{beauty:3,light:2},[Is.DWARF]:{durability:3,temperature:2},[Is.HOBBIT]:{comfort:3,food:2},[Is.MAN]:{storage:3,defense:2}};function Qv(i){return Zv[i]||{}}function Jv(i,e){return i==="elf"&&(e===dt.FOREST||e===dt.MIRKWOOD)?1.2:1}function ex(i){return i==="dwarf"?.85:1}function tx(i){return i==="hobbit"?3:0}const nx={starter_watchpost:"Watch-Post",roadside_hall:"Ranger Hall",mountain_workshop:"Mountain Workshop",forest_beacon:"Forest Beacon",ward_bastion:"Ward Bastion"};function ix(i){const e=nx[i]||i;return{fastTravel:!0,merchant:{id:`${i}_merchant`,name:`${e} Merchant`,position:null,factionId:null,dialogue:{default:`Welcome to the restored ${e}. What would you like to trade?`}},message:"Site Restored! Benefits: fast travel, merchant, safe bed, storage.",roofBlock:x.OAK_PLANKS}}function rx(i,e){return e?Math.ceil(i*1.5):i}function sx(i){return .2}function Ml(i,e,t){return Math.max(e,Math.min(t,i))}const ox=.5,ax=3,cx=60,lx=110;class dx{constructor(){this.sensitivity=1,this.fov=75,this.tutorialEnabled=!0,this.isOpen=!1}setSensitivity(e){this.sensitivity=Ml(e,ox,ax)}setFov(e){this.fov=Ml(e,cx,lx)}toggleTutorial(){this.tutorialEnabled=!this.tutorialEnabled}getMouseSensitivity(e){return e*this.sensitivity}toggleOpen(){this.isOpen=!this.isOpen}}const fe=Object.freeze({RESOURCE:"resource",TOOL:"tool",WEAPON:"weapon",ARMOR:"armor",FOOD:"food",RELIC:"relic",CONSUMABLE:"consumable",LORE:"lore"});function pe(i,e,t,n={}){return{id:i,name:e,category:t,...n}}pe("wood","Wood",fe.RESOURCE),pe("stone","Stone",fe.RESOURCE),pe("fiber","Plant Fiber",fe.RESOURCE),pe("stick","Stick",fe.RESOURCE),pe("clay","Clay",fe.RESOURCE),pe("iron_ore","Iron Ore",fe.RESOURCE),pe("copper_ore","Copper Ore",fe.RESOURCE),pe("coal","Coal",fe.RESOURCE),pe("leather","Leather",fe.RESOURCE),pe("rope","Rope",fe.RESOURCE),pe("relic_shard","Relic Shard",fe.RESOURCE),pe("lore_fragment","Lore Fragment",fe.RESOURCE),pe("dark_stone","Dark Stone",fe.RESOURCE),pe("oak_planks","Oak Planks",fe.RESOURCE),pe("birch_wood","Birch Wood",fe.RESOURCE),pe("slate","Slate",fe.RESOURCE),pe("marble","Marble",fe.RESOURCE),pe("obsidian","Obsidian",fe.RESOURCE),pe("crystal","Crystal",fe.RESOURCE),pe("sand","Sand",fe.RESOURCE),pe("flint","Flint",fe.RESOURCE),pe("feather","Feather",fe.RESOURCE),pe("bone","Bone",fe.RESOURCE),pe("silver_ore","Silver Ore",fe.RESOURCE),pe("mithril_shard","Mithril Shard",fe.RESOURCE),pe("pickaxe","Pickaxe",fe.TOOL,{durability:100,miningSpeed:2}),pe("axe","Axe",fe.TOOL,{durability:80,miningSpeed:1.5}),pe("hammer","Hammer",fe.TOOL,{durability:120}),pe("copper_pickaxe","Copper Pickaxe",fe.TOOL,{durability:150,miningSpeed:2.5}),pe("iron_pickaxe","Iron Pickaxe",fe.TOOL,{durability:250,miningSpeed:3.5}),pe("lantern","Lantern",fe.TOOL),pe("torch","Torch",fe.TOOL),pe("repair_kit","Repair Kit",fe.TOOL),pe("dagger","Dagger",fe.WEAPON,{damage:4}),pe("iron_sword","Iron Sword",fe.WEAPON,{damage:10}),pe("iron_hammer","Iron Hammer",fe.WEAPON,{damage:12}),pe("spear","Spear",fe.WEAPON,{damage:8}),pe("short_bow","Short Bow",fe.WEAPON,{damage:6,ranged:!0}),pe("refined_bow","Refined Bow",fe.WEAPON,{damage:9,ranged:!0}),pe("sling","Sling",fe.WEAPON,{damage:3,ranged:!0}),pe("copper_sword","Copper Sword",fe.WEAPON,{damage:7}),pe("stone_axe","Stone Axe",fe.WEAPON,{damage:5}),pe("walking_stick","Walking Stick",fe.WEAPON,{damage:2}),pe("arrow","Arrow",fe.WEAPON,{stackable:!0}),pe("silver_blade","Silver Blade",fe.WEAPON,{damage:14}),pe("leather_armor","Leather Armor",fe.ARMOR,{armor:5}),pe("iron_helm","Iron Helm",fe.ARMOR,{armor:3}),pe("iron_chest","Iron Chestplate",fe.ARMOR,{armor:8}),pe("iron_legs","Iron Leggings",fe.ARMOR,{armor:5}),pe("iron_boots","Iron Boots",fe.ARMOR,{armor:2}),pe("cloak","Cloak",fe.ARMOR,{armor:1}),pe("shield","Shield",fe.ARMOR,{armor:4}),pe("dwarven_plate","Dwarven Plate",fe.ARMOR,{armor:12}),pe("bread","Bread",fe.FOOD,{hunger:15}),pe("raw_meat","Raw Meat",fe.FOOD,{hunger:5}),pe("cooked_meat","Cooked Meat",fe.FOOD,{hunger:20}),pe("berries","Berries",fe.FOOD,{hunger:5}),pe("mushroom","Mushroom",fe.FOOD,{hunger:8}),pe("lembas","Lembas Bread",fe.FOOD,{hunger:30}),pe("stew","Hearty Stew",fe.FOOD,{hunger:25,buff:"stamina_regen"}),pe("trail_rations","Trail Rations",fe.FOOD,{hunger:12}),pe("dried_meat","Dried Meat",fe.FOOD,{hunger:10,preserved:!0}),pe("honey","Honey",fe.FOOD,{hunger:8,buff:"health_regen"}),pe("fish","Fish",fe.FOOD,{hunger:12}),pe("apple","Apple",fe.FOOD,{hunger:7}),pe("ward_light_stone","Ward Light Stone",fe.RELIC),pe("healing_crystal","Healing Crystal",fe.RELIC),pe("corruption_lens","Corruption Lens",fe.RELIC),pe("root_charm","Root Charm",fe.RELIC),pe("stone_ward_rune","Stone Ward Rune",fe.RELIC),pe("ward_token","Ward Token",fe.RELIC),pe("bandage","Bandage",fe.CONSUMABLE),pe("antidote","Antidote",fe.CONSUMABLE),pe("firestarter","Firestarter",fe.CONSUMABLE),pe("bedroll","Bedroll",fe.CONSUMABLE),pe("pan","Cooking Pan",fe.CONSUMABLE),pe("herb_pouch","Herb Pouch",fe.CONSUMABLE),pe("satchel","Satchel",fe.CONSUMABLE),pe("lock_tools","Lock Tools",fe.CONSUMABLE),pe("lore_scroll","Ancient Scroll",fe.LORE),pe("map_fragment","Map Fragment",fe.LORE),pe("song_fragment","Song Fragment",fe.LORE),pe("rune_tablet","Rune Tablet",fe.LORE),pe("inscription_rubbing","Inscription Rubbing",fe.LORE);Zt.MAIN_HAND,Zt.HEAD,Zt.CHEST,Zt.LEGS,Zt.FEET,Zt.OFF_HAND,Zt.ACCESSORY;Zt.MAIN_HAND+"",Zt.HEAD+"",Zt.CHEST+"",Zt.LEGS+"",Zt.FEET+"",Zt.OFF_HAND+"",Zt.ACCESSORY+"";class hx{isDead(e){return e.health<=0}respawn(e,t,n){e.health=e.maxHealth*.5,e.hunger=Math.max(e.hunger,50),e.stamina=100,t.position.x=n.x,t.position.y=n.y,t.position.z=n.z}}class ux{constructor(){this.enabled=!1,this.flySpeed=vr.CREATIVE.FLY_SPEED}toggle(){this.enabled=!this.enabled}isInvincible(){return this.enabled}canFly(){return this.enabled}noHunger(){return this.enabled}}class fx{constructor(){this._message="",this._choices=[],this._active=!1,this._state="inactive",this.selectedIndex=0,this._response=null}getState(){return this._state}isActive(){return this._active}getMessage(){return this._response||this._message}getChoices(){return this._state==="choices"?this._choices:[]}startDialogue(e,t=[]){this._message=e,this._choices=t,this._active=!0,this._state="choices",this._response=null,this.selectedIndex=0}selectChoice(e){if(this._state!=="choices"||e<0||e>=this._choices.length)return null;const t=this._choices[e];return t.response===null?(this._active=!1,this._state="inactive",null):(this._response=t.response,this._state="response",t.response)}acknowledge(){this._state==="response"&&(this._response=null,this._state="choices",this.selectedIndex=0)}selectNext(){this._state==="choices"&&this._choices.length>0&&(this.selectedIndex=Math.min(this.selectedIndex+1,this._choices.length-1))}selectPrev(){this._state==="choices"&&(this.selectedIndex=Math.max(0,this.selectedIndex-1))}dismiss(){this._active=!1,this._state="inactive",this._message="",this._choices=[],this._response=null}}const zs=Object.freeze({STORY:"story",STANDARD:"standard",HARSH:"harsh"}),bl={[zs.STORY]:{hungerDrainMultiplier:.5,enemyDamageMultiplier:.6,corruptionMultiplier:.5,resourceMultiplier:1.5},[zs.STANDARD]:{hungerDrainMultiplier:1,enemyDamageMultiplier:1,corruptionMultiplier:1,resourceMultiplier:1},[zs.HARSH]:{hungerDrainMultiplier:1.5,enemyDamageMultiplier:1.4,corruptionMultiplier:1.5,resourceMultiplier:.7}};function px(i){return bl[i]||bl[zs.STANDARD]}function mx(i,e){return i*(e.hungerDrainMultiplier??1)}function _x(i,e){return i*(e.enemyDamageMultiplier??1)}const gx={man:{road_wardens:15},elf:{rivendell_keepers:20,woodland_guardians:15},dwarf:{dwarven_crafters:25},hobbit:{road_wardens:15,beorning_wardens:10}};function vx(i){return gx[i]||{}}const xx={man_ranger:["surv_forager"],man_soldier:["cmb_parry"],man_scholar:["att_focus","exp_map_reveal"],elf_archer:["cmb_quick_draw"],elf_warden:["att_ward","cmb_parry"],elf_gatherer:["surv_forager","crf_yield"],dwarf_miner:["crf_yield"],dwarf_blacksmith:["crf_repair","cmb_heavy_blow"],dwarf_delver:["exp_climb","exp_map_reveal"],hobbit_burglar:["surv_hardy"],hobbit_cook:["surv_hardy","fel_trader"],hobbit_forager:["surv_forager","surv_hardy"]};function yx(i,e){const t=`${i}_${e}`;return xx[t]||[]}function Ex(i,e){if(!e||e.length===0)return[];const t=new Set(e),n=i.getTriggers(),r=[];for(const s of n)t.has(s.questId)&&r.push({questId:s.questId,objectiveId:s.objectiveId,x:s.position.x,z:s.position.z,label:s.objectiveId.replace(/_/g," ")});return r}const Sx={man_ranger:{type:"tracking",value:1.5,description:"Easier tracking of beasts"},man_soldier:{type:"block_stability",value:1.3,description:"Improved block stability"},man_scholar:{type:"relic_identify",value:2,description:"Identifies relics faster"},elf_archer:{type:"ranged_accuracy",value:1.3,description:"Reduced bow sway"},elf_warden:{type:"beacon_resistance",value:1.5,description:"Stronger near allied beacons"},elf_gatherer:{type:"plant_yield",value:1.5,description:"Better yield from plants"},dwarf_miner:{type:"mining_speed",value:1.4,description:"Faster ore/stone extraction"},dwarf_blacksmith:{type:"tool_durability",value:1.3,description:"Gear wears slower"},dwarf_delver:{type:"underground_stealth",value:1.5,description:"Reduced detection underground"},hobbit_burglar:{type:"crouch_stealth",value:1.5,description:"Less detection while crouched"},hobbit_cook:{type:"meal_duration",value:1.5,description:"Meals give longer buffs"},hobbit_forager:{type:"forage_yield",value:1.4,description:"Better berry/mushroom yields"}};function Mx(i){return Sx[i]||null}const Go={zone:{r:.35,g:.55,b:.17}};function bx(i){const e=Math.min(1,i);return{r:.53*(1-e)+Go.zone.r*e,g:.81*(1-e)+Go.zone.g*e,b:.92*(1-e)+Go.zone.b*e}}const Tx={[x.DIRT]:.4,[x.GRASS]:.4,[x.SAND]:.4,[x.CLAY]:.5,[x.GRAVEL]:.4,[x.TALL_GRASS]:.1,[x.LEAVES]:.2,[x.MUD]:.4,[x.SNOW]:.3,[x.THATCH]:.3,[x.REED]:.1,[x.WOOD]:.8,[x.BIRCH_WOOD]:.8,[x.PLANKS]:.6,[x.OAK_PLANKS]:.6,[x.STONE]:1.5,[x.COBBLESTONE]:1.2,[x.STONE_BRICK]:1.3,[x.IRON_ORE]:2,[x.COPPER_ORE]:1.8,[x.COAL_ORE]:1.5,[x.GLASS]:.3,[x.TORCH]:.1,[x.CAMPFIRE]:.5,[x.WORKBENCH]:.8,[x.FORGE]:2,[x.KITCHEN]:.6,[x.LOOM]:.5,[x.RUNE_TABLE]:1.5},Ax=1;class Rx{constructor(){this._x=0,this._y=0,this._z=0,this._blockType=0,this._progress=0,this._breakTime=0,this._active=!1}isBreaking(){return this._active}getProgress(){return this._progress}getPosition(){return{x:this._x,y:this._y,z:this._z}}startBreak(e,t,n,r){this._active&&this._x===e&&this._y===t&&this._z===n||(this._x=e,this._y=t,this._z=n,this._blockType=r,this._breakTime=Tx[r]||Ax,this._progress=0,this._active=!0)}tick(e){return this._active?(this._progress+=e/this._breakTime,this._progress>=1?(this._active=!1,this._progress=0,!0):!1):!1}cancel(){this._active=!1,this._progress=0}}function wx(i){return i===x.DOOR||i===x.DOOR_OPEN}function Tl(i,e,t,n){const r=i.getBlock(e,t,n);return r===x.DOOR?(i.setBlock(e,t,n,x.DOOR_OPEN),i.getBlock(e,t+1,n)===x.DOOR&&i.setBlock(e,t+1,n,x.DOOR_OPEN),i.getBlock(e,t-1,n)===x.DOOR&&i.setBlock(e,t-1,n,x.DOOR_OPEN),!0):r===x.DOOR_OPEN?(i.setBlock(e,t,n,x.DOOR),i.getBlock(e,t+1,n)===x.DOOR_OPEN&&i.setBlock(e,t+1,n,x.DOOR),i.getBlock(e,t-1,n)===x.DOOR_OPEN&&i.setBlock(e,t-1,n,x.DOOR),!0):!1}class Cx{constructor(){this._chests=new Map}_key(e,t,n){return`${e},${t},${n}`}_getOrCreate(e,t,n){const r=this._key(e,t,n);return this._chests.has(r)||this._chests.set(r,[]),this._chests.get(r)}addItem(e,t,n,r,s){const o=this._getOrCreate(e,t,n),a=o.find(c=>c.type===r);a?a.count+=s:o.push({type:r,count:s})}getItems(e,t,n){const r=this._key(e,t,n);return this._chests.get(r)||[]}takeItem(e,t,n,r){const s=this._key(e,t,n),o=this._chests.get(s);if(!o)return null;const a=o.findIndex(l=>l.type===r);return a===-1?null:o.splice(a,1)[0]}}const ut=x.OAK_PLANKS,un=x.PLANKS,mt=x.COBBLESTONE,nt=x.STONE_BRICK,tn=x.MARBLE,dr=x.BIRCH_WOOD,pi=x.SLATE,Di=x.THATCH,Na=x.IRON_BLOCK,Ni=x.STONE,Vo=x.LEAVES,Al=[{name:"Bag End",region:"shire",x:-5,z:-8,wallBlock:ut,roofBlock:un,floorBlock:mt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"wood",count:10},{type:"torch",count:5},{type:"raw_berries",count:3}]},{name:"Ranger Hal's Lodge",region:"shire",x:4,z:6,wallBlock:ut,roofBlock:un,floorBlock:mt,radius:4,height:4,bed:!0,chest:!0,npcId:"ranger_hal",chestItems:[{type:"leather",count:2},{type:"iron_ore",count:2}]},{name:"Hamfast's Farmhouse",region:"shire",x:-21,z:10,wallBlock:ut,roofBlock:Di,floorBlock:mt,radius:4,height:3,bed:!0,chest:!0,npcId:"shire_farmer",chestItems:[{type:"fiber",count:5},{type:"wood",count:3}]},{name:"Rosie's Shop",region:"shire",x:14,z:-7,wallBlock:ut,roofBlock:un,floorBlock:mt,radius:4,height:4,bed:!0,chest:!0,npcId:"shire_merchant",chestItems:[{type:"stone",count:5},{type:"leather",count:3},{type:"torch",count:3}]},{name:"Green Dragon Inn",region:"shire",x:25,z:15,wallBlock:ut,roofBlock:un,floorBlock:mt,radius:5,height:5,bed:!0,chest:!0,chestItems:[{type:"cooked_meat",count:3},{type:"torch",count:4}]},{name:"Hobbit Hole – Cottons",region:"shire",x:-30,z:-15,wallBlock:ut,roofBlock:Di,floorBlock:mt,radius:3,height:3,bed:!0,chest:!1},{name:"Hobbit Hole – Bracegirdle",region:"shire",x:-10,z:25,wallBlock:ut,roofBlock:Di,floorBlock:mt,radius:3,height:3,bed:!0,chest:!1},{name:"Hobbit Hole – Proudfoot",region:"shire",x:35,z:-15,wallBlock:ut,roofBlock:Di,floorBlock:mt,radius:3,height:3,bed:!0,chest:!1},{name:"The Prancing Pony",region:"bree",x:79,z:20,wallBlock:mt,roofBlock:un,floorBlock:nt,radius:6,height:5,bed:!0,chest:!0,npcId:"old_tom",chestItems:[{type:"iron_ore",count:2},{type:"wood",count:5},{type:"cooked_meat",count:2}]},{name:"Bree Blacksmith",region:"bree",x:66,z:10,wallBlock:mt,roofBlock:pi,floorBlock:nt,radius:4,height:4,bed:!0,chest:!0,npcId:"bree_blacksmith",chestItems:[{type:"iron_ore",count:4},{type:"stone",count:5}]},{name:"Bree House – South",region:"bree",x:90,z:12,wallBlock:mt,roofBlock:un,floorBlock:mt,radius:3,height:3,bed:!0,chest:!1},{name:"Bree House – North",region:"bree",x:72,z:34,wallBlock:mt,roofBlock:un,floorBlock:mt,radius:3,height:3,bed:!0,chest:!1},{name:"Bree Gatehouse",region:"bree",x:65,z:20,wallBlock:nt,roofBlock:pi,floorBlock:nt,radius:3,height:5,bed:!1,chest:!1},{name:"Bree Storehouse",region:"bree",x:92,z:26,wallBlock:mt,roofBlock:un,floorBlock:mt,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"wood",count:10},{type:"stone",count:8},{type:"fiber",count:6}]},{name:"Ranger Outpost",region:"trollshaws",x:130,z:35,wallBlock:mt,roofBlock:un,floorBlock:mt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:5},{type:"bandage",count:2}]},{name:"Hermit Cabin",region:"trollshaws",x:150,z:45,wallBlock:ut,roofBlock:Di,floorBlock:mt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:6},{type:"raw_berries",count:4}]},{name:"House of Elrond",region:"rivendell",x:194,z:33,wallBlock:tn,roofBlock:dr,floorBlock:tn,radius:6,height:5,bed:!0,chest:!0,npcId:"elara_lorekeeper",chestItems:[{type:"lore_fragment",count:2},{type:"relic_shard",count:1}]},{name:"Celebrin's Healing Hall",region:"rivendell",x:208,z:18,wallBlock:tn,roofBlock:dr,floorBlock:tn,radius:4,height:4,bed:!0,chest:!0,npcId:"rivendell_healer",chestItems:[{type:"fiber",count:4},{type:"raw_berries",count:5},{type:"bandage",count:3}]},{name:"Rivendell Library",region:"rivendell",x:210,z:38,wallBlock:tn,roofBlock:dr,floorBlock:nt,radius:5,height:5,bed:!1,chest:!0,chestItems:[{type:"lore_fragment",count:3}]},{name:"Rivendell Guest House",region:"rivendell",x:190,z:22,wallBlock:tn,roofBlock:dr,floorBlock:tn,radius:3,height:4,bed:!0,chest:!1},{name:"Rivendell Watchtower",region:"rivendell",x:220,z:30,wallBlock:tn,roofBlock:nt,floorBlock:tn,radius:3,height:6,bed:!1,chest:!1},{name:"Thorin's Forge",region:"misty_mountains",x:269,z:53,wallBlock:nt,roofBlock:pi,floorBlock:nt,radius:5,height:4,bed:!0,chest:!0,npcId:"thorin_smith",chestItems:[{type:"iron_ore",count:5},{type:"copper_ore",count:3}]},{name:"Dwalin's Trading Post",region:"misty_mountains",x:254,z:43,wallBlock:nt,roofBlock:pi,floorBlock:nt,radius:4,height:4,bed:!0,chest:!0,npcId:"mountain_trader",chestItems:[{type:"stone",count:8},{type:"wood",count:6}]},{name:"Mountain Shelter",region:"misty_mountains",x:280,z:60,wallBlock:Ni,roofBlock:pi,floorBlock:nt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:8},{type:"bandage",count:2}]},{name:"Dwarven Mining Camp",region:"misty_mountains",x:258,z:65,wallBlock:nt,roofBlock:pi,floorBlock:mt,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:3},{type:"coal",count:5},{type:"stone",count:10}]},{name:"Beorn's Hall",region:"anduin_vale",x:334,z:63,wallBlock:ut,roofBlock:Di,floorBlock:mt,radius:6,height:5,bed:!0,chest:!0,npcId:"beorn_jr",chestItems:[{type:"raw_meat",count:5},{type:"leather",count:3}]},{name:"Vale Farmstead",region:"anduin_vale",x:350,z:55,wallBlock:ut,roofBlock:Di,floorBlock:mt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:8},{type:"raw_berries",count:4}]},{name:"Carrock Watchtower",region:"anduin_vale",x:345,z:72,wallBlock:nt,roofBlock:pi,floorBlock:nt,radius:3,height:6,bed:!1,chest:!1},{name:"Elvenking Gate Post",region:"mirkwood",x:389,z:38,wallBlock:dr,roofBlock:Vo,floorBlock:mt,radius:5,height:5,bed:!0,chest:!0,npcId:"galawen_warden",chestItems:[{type:"fiber",count:8},{type:"relic_shard",count:1},{type:"rope",count:2}]},{name:"Mirkwood Ranger Camp",region:"mirkwood",x:405,z:48,wallBlock:dr,roofBlock:Vo,floorBlock:mt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:6},{type:"bandage",count:3}]},{name:"Forest Watch Platform",region:"mirkwood",x:415,z:32,wallBlock:ut,roofBlock:Vo,floorBlock:ut,radius:3,height:6,bed:!1,chest:!1},{name:"Dark Outpost",region:"dol_guldur",x:418,z:85,wallBlock:x.DARK_STONE,roofBlock:x.OBSIDIAN,floorBlock:x.CORRUPTED_STONE,radius:4,height:4,bed:!1,chest:!0,chestItems:[{type:"dark_stone",count:5},{type:"relic_shard",count:2}]},{name:"Lake-town Hall",region:"long_lake",x:465,z:28,wallBlock:ut,roofBlock:un,floorBlock:mt,radius:5,height:4,bed:!0,chest:!0,chestItems:[{type:"wood",count:10},{type:"iron_ore",count:3}]},{name:"Fisherman's Hut",region:"long_lake",x:478,z:22,wallBlock:ut,roofBlock:un,floorBlock:ut,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:4},{type:"raw_meat",count:3}]},{name:"Dock Warehouse",region:"long_lake",x:478,z:38,wallBlock:ut,roofBlock:un,floorBlock:mt,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"rope",count:3},{type:"wood",count:8},{type:"iron_ore",count:2}]},{name:"Front Gate Guardhouse",region:"erebor",x:514,z:18,wallBlock:nt,roofBlock:Na,floorBlock:nt,radius:4,height:5,bed:!0,chest:!0,chestItems:[{type:"iron_ore",count:5},{type:"torch",count:6}]},{name:"Miriel's Observatory",region:"erebor",x:494,z:26,wallBlock:nt,roofBlock:pi,floorBlock:tn,radius:5,height:5,bed:!0,chest:!0,npcId:"sage_miriel",chestItems:[{type:"relic_shard",count:3},{type:"lore_fragment",count:2}]},{name:"Dale Marketplace",region:"erebor",x:525,z:28,wallBlock:nt,roofBlock:un,floorBlock:nt,radius:5,height:4,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:4},{type:"leather",count:3},{type:"stone",count:6}]},{name:"Erebor Great Forge",region:"erebor",x:530,z:14,wallBlock:nt,roofBlock:Na,floorBlock:nt,radius:5,height:5,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:8},{type:"copper_ore",count:5},{type:"coal",count:10}]}],Ix=[{type:"line",x1:-35,z1:-20,x2:-35,z2:30,block:ut,dy:1,name:"Shire west fence"},{type:"line",x1:-35,z1:-20,x2:40,z2:-20,block:ut,dy:1,name:"Shire south fence"},{type:"line",x1:40,z1:-20,x2:40,z2:30,block:ut,dy:1,name:"Shire east fence"},{type:"line",x1:-35,z1:30,x2:40,z2:30,block:ut,dy:1,name:"Shire north fence"},{type:"line",x1:-30,z1:0,x2:40,z2:0,block:mt,dy:0,surface:!0,name:"Shire main road"},{type:"line",x1:0,z1:-18,x2:0,z2:28,block:mt,dy:0,surface:!0,name:"Shire cross road"},{type:"well",x:5,z:0,name:"Shire well"},{type:"line",x1:60,z1:8,x2:60,z2:35,block:nt,dy:1,name:"Bree west wall"},{type:"line",x1:60,z1:8,x2:60,z2:35,block:nt,dy:2,name:"Bree west wall top"},{type:"line",x1:95,z1:8,x2:95,z2:35,block:nt,dy:1,name:"Bree east wall"},{type:"line",x1:95,z1:8,x2:95,z2:35,block:nt,dy:2,name:"Bree east wall top"},{type:"line",x1:60,z1:20,x2:95,z2:20,block:mt,dy:0,surface:!0,name:"Bree main street"},{type:"well",x:80,z:20,name:"Bree well"},{type:"blocks",x:145,z:42,name:"Stone Trolls",blocks:[{dx:0,dz:0,dy:1,block:Ni},{dx:0,dz:0,dy:2,block:Ni},{dx:0,dz:0,dy:3,block:x.MOSSY_STONE},{dx:3,dz:1,dy:1,block:Ni},{dx:3,dz:1,dy:2,block:Ni},{dx:3,dz:1,dy:3,block:x.MOSSY_STONE},{dx:1,dz:3,dy:1,block:Ni},{dx:1,dz:3,dy:2,block:Ni},{dx:1,dz:3,dy:3,block:x.MOSSY_STONE}]},{type:"line",x1:185,z1:28,x2:195,z2:28,block:tn,dy:1,name:"Rivendell bridge"},{type:"line",x1:185,z1:28,x2:195,z2:28,block:tn,dy:0,surface:!0,name:"Rivendell bridge deck"},{type:"line",x1:190,z1:25,x2:215,z2:25,block:tn,dy:0,surface:!0,name:"Rivendell garden path"},{type:"line",x1:200,z1:20,x2:200,z2:40,block:tn,dy:0,surface:!0,name:"Rivendell main path"},{type:"blocks",x:265,z:48,name:"Mountain trail markers",blocks:[{dx:0,dz:0,dy:1,block:nt},{dx:0,dz:0,dy:2,block:x.TORCH},{dx:15,dz:5,dy:1,block:nt},{dx:15,dz:5,dy:2,block:x.TORCH},{dx:30,dz:10,dy:1,block:nt},{dx:30,dz:10,dy:2,block:x.TORCH}]},{type:"line",x1:345,z1:50,x2:360,z2:50,block:ut,dy:1,name:"Vale south fence"},{type:"line",x1:345,z1:50,x2:345,z2:60,block:ut,dy:1,name:"Vale west fence"},{type:"line",x1:360,z1:50,x2:360,z2:60,block:ut,dy:1,name:"Vale east fence"},{type:"line",x1:345,z1:60,x2:360,z2:60,block:ut,dy:1,name:"Vale north fence"},{type:"blocks",x:385,z:40,name:"Mirkwood path torches",blocks:[{dx:0,dz:0,dy:1,block:ut},{dx:0,dz:0,dy:2,block:x.TORCH},{dx:8,dz:2,dy:1,block:ut},{dx:8,dz:2,dy:2,block:x.TORCH},{dx:16,dz:4,dy:1,block:ut},{dx:16,dz:4,dy:2,block:x.TORCH},{dx:24,dz:0,dy:1,block:ut},{dx:24,dz:0,dy:2,block:x.TORCH},{dx:32,dz:-2,dy:1,block:ut},{dx:32,dz:-2,dy:2,block:x.TORCH}]},{type:"blocks",x:420,z:90,name:"Dol Guldur corrupted stones",blocks:[{dx:-5,dz:0,dy:1,block:x.CORRUPTED_STONE},{dx:5,dz:0,dy:1,block:x.CORRUPTED_STONE},{dx:0,dz:-5,dy:1,block:x.CORRUPTED_STONE},{dx:0,dz:5,dy:1,block:x.CORRUPTED_STONE},{dx:-4,dz:-3,dy:1,block:x.DARK_STONE},{dx:4,dz:-3,dy:1,block:x.DARK_STONE},{dx:-4,dz:3,dy:1,block:x.DARK_STONE},{dx:4,dz:3,dy:1,block:x.DARK_STONE}]},{type:"blocks",x:472,z:20,name:"Lake-town dock",blocks:(()=>{const i=[];for(let e=0;e<8;e++)for(let t=0;t<3;t++)i.push({dx:e,dz:t,dy:0,block:ut,surface:!0});return i.push({dx:0,dz:1,dy:-1,block:ut}),i.push({dx:7,dz:1,dy:-1,block:ut}),i})()},{type:"blocks",x:518,z:15,name:"Erebor front gate",blocks:[{dx:0,dz:0,dy:1,block:nt},{dx:0,dz:0,dy:2,block:nt},{dx:0,dz:0,dy:3,block:nt},{dx:0,dz:0,dy:4,block:nt},{dx:0,dz:4,dy:1,block:nt},{dx:0,dz:4,dy:2,block:nt},{dx:0,dz:4,dy:3,block:nt},{dx:0,dz:4,dy:4,block:nt},{dx:0,dz:1,dy:4,block:nt},{dx:0,dz:2,dy:4,block:Na},{dx:0,dz:3,dy:4,block:nt},{dx:1,dz:0,dy:3,block:x.TORCH},{dx:1,dz:4,dy:3,block:x.TORCH}]},{type:"line",x1:40,z1:0,x2:60,z2:8,block:mt,dy:0,surface:!0,name:"East Road – Shire to Bree"},{type:"line",x1:95,z1:20,x2:130,z2:35,block:mt,dy:0,surface:!0,name:"East Road – Bree to Trollshaws"},{type:"line",x1:155,z1:42,x2:185,z2:32,block:mt,dy:0,surface:!0,name:"East Road – Trollshaws to Rivendell"}],Ox=[{name:"Party Tree",x:0,z:12,type:"large"},{name:"Old Willow",x:-40,z:5,type:"large"},{name:"Rivendell Cedar",x:208,z:35,type:"large"},{name:"Beorn Oak",x:338,z:70,type:"large"},{name:"Mirkwood Ancient",x:395,z:35,type:"large"}],Rl=[{x:0,z:-3,block:x.WORKBENCH,dy:1,name:"Shire workbench"},{x:2,z:-3,block:x.CAMPFIRE,dy:1,name:"Shire campfire"},{x:75,z:18,block:x.FORGE,dy:1,name:"Bree forge"},{x:83,z:18,block:x.KITCHEN,dy:1,name:"Bree kitchen"},{x:205,z:30,block:x.LOOM,dy:1,name:"Rivendell loom"},{x:198,z:30,block:x.RUNE_TABLE,dy:1,name:"Rivendell rune table"},{x:275,z:55,block:x.FORGE,dy:1,name:"Mountain forge"},{x:268,z:58,block:x.WORKBENCH,dy:1,name:"Mountain workbench"},{x:340,z:58,block:x.KITCHEN,dy:1,name:"Vale kitchen"},{x:342,z:58,block:x.CAMPFIRE,dy:1,name:"Vale campfire"},{x:392,z:42,block:x.WORKBENCH,dy:1,name:"Mirkwood workbench"},{x:394,z:42,block:x.LOOM,dy:1,name:"Mirkwood loom"},{x:528,z:16,block:x.FORGE,dy:1,name:"Erebor forge"},{x:526,z:16,block:x.WORKBENCH,dy:1,name:"Erebor workbench"}];function Dx(i){return i<=26?[40,80,160]:i<=32?[80,150,60]:i<=40?[130,170,70]:i<=55?[160,150,120]:[220,220,230]}class Lx{constructor(e,t,n){this._getHeight=e,this._getBiome=t,this._seed=n}worldToGrid(e,t,n){return{col:Math.floor((e-Fs)/n),row:Math.floor((t-Bs)/n)}}gridToWorld(e,t,n){return{x:Fs+e*n+n/2,z:Bs+t*n+n/2}}_gridDimensions(e){const t=Math.ceil((g0-Fs)/e),n=Math.ceil((v0-Bs)/e);return{width:t,height:n}}getTerrainHeightGrid(e){const{width:t,height:n}=this._gridDimensions(e),r=new Int32Array(t*n);for(let s=0;s<n;s++)for(let o=0;o<t;o++){const{x:a,z:c}=this.gridToWorld(o,s,e);r[s*t+o]=this._getHeight(a,c,this._seed)}return{width:t,height:n,data:r}}getBiomeGrid(e){const{width:t,height:n}=this._gridDimensions(e),r=new Array(t*n);for(let s=0;s<n;s++)for(let o=0;o<t;o++){const{x:a,z:c}=this.gridToWorld(o,s,e);r[s*t+o]=this._getBiome(a,c,this._seed).type}return{width:t,height:n,data:r}}getPopulationGrid(e,t,n){const{width:r,height:s}=this._gridDimensions(n),o=new Int32Array(r*s);for(const a of e){const{col:c,row:l}=this.worldToGrid(a.x,a.z,n);c>=0&&c<r&&l>=0&&l<s&&(o[l*r+c]+=1)}for(const a of t){const{col:c,row:l}=this.worldToGrid(a.position.x,a.position.z,n);c>=0&&c<r&&l>=0&&l<s&&(o[l*r+c]+=1)}return{width:r,height:s,data:o}}getSlopeGrid(e){const t=this.getTerrainHeightGrid(e),{width:n,height:r,data:s}=t,o=new Float32Array(n*r);for(let a=0;a<r;a++)for(let c=0;c<n;c++){const l=a*n+c,h=s[l];let d=0;for(const[f,p]of[[-1,0],[1,0],[0,-1],[0,1]]){const _=a+f,g=c+p;_>=0&&_<r&&g>=0&&g<n&&(d=Math.max(d,Math.abs(s[_*n+g]-h)))}o[l]=d/e}return{width:n,height:r,data:o}}getTerrainColorMap(e){const t=this.getTerrainHeightGrid(e),{width:n,height:r,data:s}=t,o=new Uint8Array(n*r*3);for(let a=0;a<s.length;a++){const[c,l,h]=Dx(s[a]);o[a*3]=c,o[a*3+1]=l,o[a*3+2]=h}return{width:n,height:r,data:o}}getBuildingFootprints(e,t){return e.map(n=>{const{col:r,row:s}=this.worldToGrid(n.x,n.z,t);return{col:r,row:s,radius:Math.ceil(n.radius/t),name:n.name,region:n.region,hasNPC:!!n.npcId}})}getStationMarkers(e,t){return e.map(n=>{const{col:r,row:s}=this.worldToGrid(n.x,n.z,t);return{col:r,row:s,name:n.name,block:n.block}})}}const Px=2,Nx={shire:[100,200,70,40],plains:[180,200,80,30],forest:[30,130,40,40],mirkwood:[20,60,20,50],mountain:[160,160,170,30]},ur=Object.freeze({OVERVIEW:"overview",DETAIL:"detail"});class Ux{constructor(e,t){this._layers=e,this._canvas=t,this._ctx=t.getContext("2d"),this._zoom=ur.OVERVIEW,this._visitedMarkers=[],this._overviewImage=null,this._overviewBiome=null}get zoom(){return this._zoom}toggleZoom(){this._zoom=this._zoom===ur.OVERVIEW?ur.DETAIL:ur.OVERVIEW}setZoom(e){this._zoom=e}addVisitedMarker(e,t,n){this._visitedMarkers.some(s=>Math.abs(s.x-e)<10&&Math.abs(s.z-t)<10)||this._visitedMarkers.push({x:e,z:t,label:n})}draw(e){const{playerPos:t,fogOfWar:n,buildings:r,npcs:s,stations:o,landmarks:a,questMarkers:c}=e,l=this._ctx,h=this._canvas.width,d=this._canvas.height;l.clearRect(0,0,h,d),this._zoom===ur.OVERVIEW?this._drawOverview(l,h,d,e):this._drawDetail(l,h,d,e)}_drawOverview(e,t,n,r){const s=Px,{playerPos:o,fogOfWar:a,buildings:c,landmarks:l,questMarkers:h}=r;this._overviewImage||(this._overviewImage=this._layers.getTerrainColorMap(s),this._overviewBiome=this._layers.getBiomeGrid(s));const d=this._overviewImage,f=this._overviewBiome,p=e.createImageData(d.width,d.height);for(let w=0;w<d.width*d.height;w++){let R=d.data[w*3],I=d.data[w*3+1],P=d.data[w*3+2];const M=f.data[w],E=Nx[M];if(E){const D=E[3]/100;R=Math.round(R*(1-D)+E[0]*D),I=Math.round(I*(1-D)+E[1]*D),P=Math.round(P*(1-D)+E[2]*D)}if(a){const{x:D,z:Y}=this._layers.gridToWorld(w%d.width,Math.floor(w/d.width),s);a.isRevealed(D,Y)||(R=Math.round(R*.2),I=Math.round(I*.2),P=Math.round(P*.2))}p.data[w*4]=R,p.data[w*4+1]=I,p.data[w*4+2]=P,p.data[w*4+3]=255}const _=document.createElement("canvas");_.width=d.width,_.height=d.height,_.getContext("2d").putImageData(p,0,0),e.imageSmoothingEnabled=!1,e.drawImage(_,0,0,t,n);const g=t/d.width,m=n/d.height,u=w=>(w-Fs)/s*g,T=w=>(w-Bs)/s*m;if(c){e.fillStyle="rgba(139, 90, 43, 0.6)";for(const w of c){const R=u(w.x),I=T(w.z),P=w.radius/s*g;e.fillRect(R-P,I-P,P*2,P*2)}}if(l){e.font="10px monospace",e.textAlign="center";for(const w of l){const R=u(w.position.x),I=T(w.position.z);e.fillStyle="#c9a84c",e.beginPath(),e.moveTo(R,I-5),e.lineTo(R+4,I),e.lineTo(R,I+5),e.lineTo(R-4,I),e.closePath(),e.fill(),e.fillStyle="#c9a84c",e.fillText(w.name,R,I-8)}}if(h){e.fillStyle="#e53935";for(const w of h){const R=u(w.x),I=T(w.z);e.beginPath(),e.arc(R,I,4,0,Math.PI*2),e.fill()}}e.fillStyle="rgba(100, 200, 255, 0.7)";for(const w of this._visitedMarkers){const R=u(w.x),I=T(w.z);e.beginPath(),e.arc(R,I,3,0,Math.PI*2),e.fill()}const b=u(o.x),S=T(o.z);e.fillStyle="#4caf50",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.arc(b,S,5,0,Math.PI*2),e.fill(),e.stroke(),this._drawLegend(e,t,n),e.fillStyle="#888",e.font="11px monospace",e.textAlign="right",e.fillText("Z: Toggle zoom | M: Close",t-8,n-6)}_drawDetail(e,t,n,r){const{playerPos:s,fogOfWar:o,buildings:a,npcs:c,stations:l,questMarkers:h}=r,d=Math.floor(t/2),f=Math.floor(n/2),p=Math.floor(s.x)-d,_=Math.floor(s.z)-f,g=e.createImageData(t,n);for(let S=0;S<n;S++)for(let w=0;w<t;w++){const R=p+w,I=_+S,P=this._layers._getHeight(R,I,this._layers._seed);let[M,E,D]=kx(P);o&&!o.isRevealed(R,I)&&(M=Math.round(M*.15),E=Math.round(E*.15),D=Math.round(D*.15));const Y=(S*t+w)*4;g.data[Y]=M,g.data[Y+1]=E,g.data[Y+2]=D,g.data[Y+3]=255}e.putImageData(g,0,0);const m=S=>S-p,u=S=>S-_;if(a){e.strokeStyle="rgba(139, 90, 43, 0.8)",e.lineWidth=1;for(const S of a){const w=m(S.x),R=u(S.z);w+S.radius<0||w-S.radius>t||R+S.radius<0||R-S.radius>n||e.strokeRect(w-S.radius,R-S.radius,S.radius*2,S.radius*2)}}if(c){e.fillStyle="#ffeb3b";for(const S of c){const w=m(S.position.x),R=u(S.position.z);w<0||w>t||R<0||R>n||(e.beginPath(),e.arc(w,R,3,0,Math.PI*2),e.fill())}}if(l){e.fillStyle="#ff9800";for(const S of l){const w=m(S.x),R=u(S.z);w<0||w>t||R<0||R>n||e.fillRect(w-2,R-2,4,4)}}if(h){e.fillStyle="#e53935";for(const S of h){const w=m(S.x),R=u(S.z);w<0||w>t||R<0||R>n||(e.beginPath(),e.arc(w,R,4,0,Math.PI*2),e.fill())}}e.fillStyle="rgba(100, 200, 255, 0.7)";for(const S of this._visitedMarkers){const w=m(S.x),R=u(S.z);w<0||w>t||R<0||R>n||(e.beginPath(),e.arc(w,R,3,0,Math.PI*2),e.fill())}e.strokeStyle="#4caf50",e.lineWidth=2;const T=d,b=f;e.beginPath(),e.arc(T,b,5,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(T-8,b),e.lineTo(T+8,b),e.moveTo(T,b-8),e.lineTo(T,b+8),e.stroke(),e.fillStyle="#aaa",e.font="11px monospace",e.textAlign="left",e.fillText(`x:${Math.floor(s.x)} z:${Math.floor(s.z)} y:${Math.floor(s.y)}`,8,n-6),e.textAlign="right",e.fillText("Z: Toggle zoom | M: Close",t-8,n-6)}_drawLegend(e,t,n){const r=[["Water",[40,80,160]],["Lowland",[80,150,60]],["Highland",[160,150,120]],["Snow",[220,220,230]]],s=8;let o=n-56;e.font="9px monospace",e.textAlign="left";for(const[a,[c,l,h]]of r)e.fillStyle=`rgb(${c},${l},${h})`,e.fillRect(s,o,10,10),e.fillStyle="#aaa",e.fillText(a,s+14,o+9),o+=12}}function kx(i){return i<=26?[40,80,160]:i<=32?[80,150,60]:i<=40?[130,170,70]:i<=55?[160,150,120]:[220,220,230]}const Ye=16,wl=3,Fx=[{type:x.COAL_ORE,threshold:.7,maxY:28},{type:x.COPPER_ORE,threshold:.75,maxY:24},{type:x.IRON_ORE,threshold:.8,maxY:20}];function Bx(i,e,t,n){for(const r of Fx){if(e>r.maxY)continue;if(Da(i*.1+e*.3+n*.1+r.type*100,t*.1+e*.3)>r.threshold)return r.type}return null}function zx(i,e,t){let n=i*374761+e*668265+t*982451|0;return n=(n>>16^n)*73244475|0,n=(n>>16^n)*73244475|0,(n>>16^n)&2147483647}function Cl(i,e,t){return zx(i,e,t)/2147483647}const Hx={shire:.1,forest:.3,mirkwood:.2,plains:.05};function Ua(i,e,t){return i+e*Ye+t*Ye*Ye}function ka(i,e,t){return`${i},${e},${t}`}function hr(i,e,t,n,r){const s=Math.floor(e/Ye),o=Math.floor(t/Ye),a=Math.floor(n/Ye),c=(e%Ye+Ye)%Ye,l=(t%Ye+Ye)%Ye,h=(n%Ye+Ye)%Ye,d=ka(s,o,a);i[d]||(i[d]=new Uint8Array(Ye*Ye*Ye)),i[d][Ua(c,l,h)]=r}function Gx(i,e,t){const n={},r=i*Ye,s=e*Ye;for(let o=0;o<Ye;o++)for(let a=0;a<Ye;a++){const c=r+o,l=s+a,h=Ws(c,l),d=Lt(c,l,t);hd(c,l),hr(n,c,d,l,h.surfaceBlock);for(let p=1;p<=wl;p++)hr(n,c,d-p,l,x.DIRT);for(let p=0;p<d-wl;p++){const _=Bx(c,p,l,t);hr(n,c,p,l,_||x.STONE)}for(let p=_0;p>=0;p--){const _=Math.floor(p/Ye),g=(p%Ye+Ye)%Ye,m=ka(Math.floor(c/Ye),_,Math.floor(l/Ye)),u=n[m],T=(c%Ye+Ye)%Ye,b=(l%Ye+Ye)%Ye,S=Ua(T,g,b);if(u&&u[S]===x.AIR)u[S]=x.WATER;else if(!u||u[S]!==x.AIR)break}if(Cl(c,l,t)<h.treeDensity){for(let g=1;g<=4;g++)hr(n,c,d+g,l,x.WOOD);const _=d+4;for(let g=-2;g<=2;g++)for(let m=-2;m<=2;m++)for(let u=0;u<=2;u++)g===0&&m===0&&u===0||Math.abs(g)+Math.abs(m)+u<=3&&hr(n,c+g,_+u,l+m,x.LEAVES)}else{const p=Hx[h.type]||0,_=Cl(c,l,t+7);if(p>0&&_<p){const g=Math.floor((d+1)/Ye),m=((d+1)%Ye+Ye)%Ye,u=ka(Math.floor(c/Ye),g,Math.floor(l/Ye)),T=n[u],b=(c%Ye+Ye)%Ye,S=(l%Ye+Ye)%Ye,w=Ua(b,m,S);(!T||T[w]===x.AIR)&&hr(n,c,d+1,l,x.TALL_GRASS)}}}return{blocks:n}}class Vx{constructor(e,t,n={}){if(this._world=e,this._seed=t,this._loadDistance=n.loadDistance||6,this._unloadDistance=n.unloadDistance||this._loadDistance+3,this._maxPerFrame=n.maxChunksPerFrame||4,this._cache=new Map,this._modified=new Map,this._meshDirtyChunks=new Set,this._generated=new Set,this._pending=new Set,this._lastPcx=null,this._lastPcz=null,this._worker=null,this._onProgress=n.onProgress||null,this._totalRequested=0,this._totalCompleted=0,typeof Worker<"u"&&n.useWorker!==!1)try{this._worker=new Worker(new URL(""+new URL("chunkWorker-BFkDpfxx.js",import.meta.url).href,import.meta.url),{type:"module"}),this._worker.onmessage=r=>this._onWorkerMessage(r)}catch{this._worker=null}}_cacheAndLoadColumn(e,t,n){const r=`${e},${t}`;this._cache.set(r,n.blocks),this._loadColumnFromCache(e,t),this._generated.add(r)}_loadColumnFromCache(e,t){const n=`${e},${t}`,r=this._cache.get(n);if(r)for(const[s,o]of Object.entries(r)){const a=o instanceof ArrayBuffer?new Uint8Array(o):o,[c,l,h]=s.split(",").map(Number),d=`${c},${l},${h}`,f=this._modified.get(d);let p=this._world.chunks.get(d);if(p||(p=new ld,this._world.chunks.set(d,p)),f)p.blocks.set(f);else for(let _=0;_<a.length;_++)a[_]!==0&&(p.blocks[_]=a[_]);this._meshDirtyChunks.add(d)}}consumeMeshDirtyChunks(){const e=new Set(this._meshDirtyChunks);return this._meshDirtyChunks.clear(),e}_unloadColumn(e,t){const n=`${e},${t}`,r=this._cache.get(n);if(r)for(const s of Object.keys(r)){const o=this._world.chunks.get(s);o&&(this._modified.set(s,new Uint8Array(o.blocks)),this._world.chunks.delete(s))}}_generateColumnSync(e,t){const n=`${e},${t}`;if(this._generated.has(n))return;const r=Gx(e,t,this._seed);this._cacheAndLoadColumn(e,t,r),this._totalCompleted++,this._onProgress&&this._onProgress(this._totalCompleted,this._totalRequested)}_requestColumnAsync(e,t){const n=`${e},${t}`;this._generated.has(n)||this._pending.has(n)||(this._pending.add(n),this._totalRequested++,this._worker.postMessage({type:"generate",cx:e,cz:t,seed:this._seed,id:n}))}_onWorkerMessage(e){const{type:t,cx:n,cz:r,blocks:s,id:o}=e.data;t==="generated"&&(this._pending.delete(o),this._cacheAndLoadColumn(n,r,{blocks:s}),this._totalCompleted++,this._onProgress&&this._onProgress(this._totalCompleted,this._totalRequested))}getProgress(){return this._totalRequested===0?1:this._totalCompleted/this._totalRequested}isLoading(){return this._pending.size>0}generateInitialChunks(e,t){const n=Math.floor(e/qe),r=Math.floor(t/qe),s=[];for(let o=-this._loadDistance;o<=this._loadDistance;o++)for(let a=-this._loadDistance;a<=this._loadDistance;a++)s.push({cx:n+o,cz:r+a});if(this._totalRequested=s.length,this._totalCompleted=0,this._worker)for(const{cx:o,cz:a}of s)this._requestColumnAsync(o,a);else for(const{cx:o,cz:a}of s)this._generateColumnSync(o,a);this._lastPcx=n,this._lastPcz=r}update(e,t){const n=Math.floor(e/qe),r=Math.floor(t/qe);if(n===this._lastPcx&&r===this._lastPcz)return;this._lastPcx=n,this._lastPcz=r;let s=0;for(let o=0;o<=this._loadDistance&&s<this._maxPerFrame;o++)for(let a=-o;a<=o&&s<this._maxPerFrame;a++)for(let c=-o;c<=o&&s<this._maxPerFrame;c++){if(Math.abs(a)!==o&&Math.abs(c)!==o)continue;const l=n+a,h=r+c,d=`${l},${h}`;if(this._generated.has(d)||this._pending.has(d)){this._cache.has(d)&&!this._isColumnLoaded(l,h)&&this._loadColumnFromCache(l,h);continue}this._worker?this._requestColumnAsync(l,h):this._generateColumnSync(l,h),s++}for(const o of this._generated){const[a,c]=o.split(",").map(Number);(Math.abs(a-n)>this._unloadDistance||Math.abs(c-r)>this._unloadDistance)&&this._unloadColumn(a,c)}}_isColumnLoaded(e,t){return this._world.chunks.has(`${e},1,${t}`)}}function Wx(i,e){const t=Math.floor(e.x),n=Math.floor(e.y),r=Math.floor(e.z);return i.getBlock(t,n,r)===x.WATER}function Xx(i){return i?vr.SURVIVAL.WATER_SLOWDOWN:1}const Il=4;function qx(i){return i<=0?1:i>=Il?0:Math.max(0,1-i/Il)}const Kx={ranger_hal:{about:"I patrol the borders of the Shire. Wolves have been bolder lately, and I've seen strange lights in the old ruins to the east. Something is stirring.",need:"There's a ruined watch-post at the edge of the wilds. If someone could restore it, we'd have a proper outpost again. You'd need wood and stone.",extra:{text:"Any survival tips?",response:"Build a shelter before nightfall — four walls and a roof. Punch grass for fiber, break dirt for materials. Stay close to camp at night."}},old_tom:{about:"Bree used to be a bustling crossroads. Now half the buildings stand empty. The East Road has fallen into disrepair and fewer travelers come each season.",need:"The old ranger hall just east of here needs restoring. It would bring trade back to this area. You'll need wood, stone, and some iron ore.",extra:{text:"What happened here?",response:"Ancient things are waking up. The wards that kept the dark things at bay — they're failing one by one. That's why the road wardens need help."}},elara_lorekeeper:{about:"Rivendell endures, though diminished. I study the old records — maps of a ward network that once protected these lands. The Elven-craft that built them is nearly forgotten.",need:"I need someone to search the archives here for records of the ward network. The knowledge is scattered, but vital if we're to understand what's awakening.",extra:{text:"Tell me about the relics",response:"The relics are fragments of ancient technology — Elven, Dwarven, Numenorean. They can heal, ward, reveal. But near corruption, they become unstable. Use them wisely."}},thorin_smith:{about:"This was a great dwarven workshop once. The forge has gone cold, the bellows rotted. But the stone is strong and the veins of ore still run deep in these mountains.",need:"Help me rebuild this workshop. I need stone, iron ore, and copper ore. With a working forge, I can craft the tools we need to push into the deeper delves.",extra:{text:"What lurks in the mountains?",response:"Goblins mostly, and worse things deeper down. There's a corrupted guardian blocking the lower passages. It was once a protector, now twisted by dark power."}},galawen_warden:{about:"Mirkwood grows darker. The ancient beacon that held corruption at bay has gone out. Without it, the spiders multiply and the forest sickens.",need:"The forest beacon must be restored. I need someone brave enough to gather wood, fiber, and relic shards to reignite it. The spiders guard the approach.",extra:{text:"Is the corruption spreading?",response:"Yes. From the south — from Dol Guldur. An old evil stirs there. The beacon, once lit, will slow its advance through the forest."}},beorn_jr:{about:"I am Grimbeorn, son of Beorn. I guard the passage between the mountains and the forest. The wild creatures grow restless — something dark disturbs them.",need:"I ask nothing for myself. But the land needs wardens. If you can clear the threats that trouble the vale, the Beornings will remember it.",extra:{text:"What is the Anduin Vale like?",response:"Rich land, good water, tall grass. Bears, eagles, and honest folk. But the shadow from Mirkwood creeps closer each season. We hold the line as we can."}},sage_miriel:{about:"I have watched ages pass. What stirs now in Dol Guldur is not the old Dark Lord — but an echo, a shadow left in the machinery of the ancient ward network.",need:"The ward bastion is the key. Restore it, and the network can be turned against the shadow. But it requires great resources and courage to reach.",extra:{text:"Can the shadow be defeated?",response:"Not destroyed — contained. The ward network was built for this. Restore the bastions, stabilize the relics, and the shadow sleeps again. That is our best hope."}}};function Yx(i,e){const t=Kx[i];if(!t)return[{text:"Tell me about this place",response:`${e}: I don't have much to say, traveler. Safe journeys.`},{text:"Farewell",response:null}];const n=[];return n.push({text:"Tell me about this place",response:`${e}: ${t.about}`}),n.push({text:"What do you need?",response:`${e}: ${t.need}`}),t.extra&&n.push({text:t.extra.text,response:`${e}: ${t.extra.response}`}),n.push({text:"Farewell",response:null}),n}const Cn={mainQuests:8,sitesRestored:5,discoverables:12,npcsMet:7,landmarks:10,enemyTypes:15,sideQuests:10,nightsSurvived:10,relicUsed:1,shelterBuilt:1,stationsCrafted:6};Object.keys(Cn).length;class $x{constructor(){this._completedQuests=new Set,this._restoredSites=new Set,this._discovered=new Set,this._npcs=new Set,this._landmarks=new Set,this._enemyTypes=new Set,this._sideQuests=new Set,this._stations=new Set,this.nightsSurvived=0,this._relicUsed=!1,this._shelterBuilt=!1}completeQuest(e){this._completedQuests.add(e)}restoreSite(e){this._restoredSites.add(e)}discover(e){this._discovered.add(e)}talkToNPC(e){this._npcs.add(e)}visitLandmark(e){this._landmarks.add(e)}killEnemy(e){this._enemyTypes.add(e)}completeSideQuest(e){this._sideQuests.add(e)}surviveNight(){this.nightsSurvived++}useRelic(){this._relicUsed=!0}buildShelter(){this._shelterBuilt=!0}craftAtStation(e){this._stations.add(e)}get questsCompleted(){return this._completedQuests.size}get sitesRestored(){return this._restoredSites.size}get discoverablesFound(){return this._discovered.size}get npcsMet(){return this._npcs.size}get landmarksVisited(){return this._landmarks.size}get enemyTypesKilled(){return this._enemyTypes.size}get sideQuestsCompleted(){return this._sideQuests.size}getBreakdown(){return[{label:"Main Quests",current:this._completedQuests.size,total:Cn.mainQuests},{label:"Sites Restored",current:this._restoredSites.size,total:Cn.sitesRestored},{label:"Discoverables",current:this._discovered.size,total:Cn.discoverables},{label:"NPCs Met",current:this._npcs.size,total:Cn.npcsMet},{label:"Landmarks Visited",current:this._landmarks.size,total:Cn.landmarks},{label:"Enemy Types Killed",current:this._enemyTypes.size,total:Cn.enemyTypes},{label:"Side Quests",current:this._sideQuests.size,total:Cn.sideQuests},{label:"Nights Survived",current:Math.min(this.nightsSurvived,Cn.nightsSurvived),total:Cn.nightsSurvived},{label:"Relic Used",current:this._relicUsed?1:0,total:1},{label:"Shelter Built",current:this._shelterBuilt?1:0,total:1},{label:"Crafting Stations",current:this._stations.size,total:Cn.stationsCrafted},{label:"Skill Points Spent",current:0,total:0},{label:"Faction Rep",current:0,total:0}]}getPercentage(){const t=this.getBreakdown().filter(r=>r.total>0);let n=0;for(const r of t)n+=Math.min(1,r.current/r.total);return Math.round(n/t.length*100)}}const Fi=[{id:"fresh",name:"Fresh Start",description:"Brand new game, no progress",percent:0,applyState:i=>{}},{id:"ch1_done",name:"Chapter 1 Complete",description:"Survived first night, restored watch-post, ward activated",percent:12,applyState:i=>{const{questSystem:e,inventory:t,survivalStats:n,experienceSystem:r,player:s,progress:o,factionSystem:a,getHeightAt:c,seed:l}=i;e.activate("ch1_embers"),e.advanceObjective("ch1_embers","ch1_survive",1),e.advanceObjective("ch1_embers","ch1_reach_outpost",1),e.advanceObjective("ch1_embers","ch1_activate_ward",1),t.add("wood",30),t.add("stone",25),t.add("fiber",20),t.add("stick",16),t.add("coal",5),t.add("iron_ore",3),t.add("cooked_meat",5),r.addExperience(150),o.completeQuest("ch1_embers"),o.restoreSite("starter_watchpost"),o.surviveNight(),s.position.x=70,s.position.z=15,s.position.y=c(70,15,l)+2}},{id:"ch2_done",name:"Chapter 2 Complete",description:"Restored ranger hall, met lore NPC, investigated corruption",percent:25,applyState:i=>{Fi[1].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,factionSystem:o,getHeightAt:a,seed:c}=i;e.activate("ch2_roads"),e.advanceObjective("ch2_roads","ch2_restore",1),e.advanceObjective("ch2_roads","ch2_meet_npc",1),e.advanceObjective("ch2_roads","ch2_corruption",3),t.add("iron_ore",10),t.add("copper_ore",5),t.add("leather",5),t.add("rope",3),n.addExperience(200),s.completeQuest("ch2_roads"),s.restoreSite("roadside_hall"),s.talkToNPC("old_tom");for(let l=0;l<3;l++)s.surviveNight();r.position.x=180,r.position.z=30,r.position.y=a(180,30,c)+2}},{id:"ch4_done",name:"Chapter 4 Complete",description:"Reached Rivendell, explored mountains, stabilized dwarven forge",percent:50,applyState:i=>{Fi[2].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o,seed:a}=i;e.activate("ch3_records"),e.advanceObjective("ch3_records","ch3_reach_rivendell",1),e.advanceObjective("ch3_records","ch3_learn_wards",1),e.advanceObjective("ch3_records","ch3_obtain_relic",1),e.activate("ch4_mountains"),e.advanceObjective("ch4_mountains","ch4_enter_delve",1),e.advanceObjective("ch4_mountains","ch4_stabilize",1),e.advanceObjective("ch4_mountains","ch4_defeat_boss",1),t.add("relic_shard",8),t.add("lore_fragment",5),t.add("iron_ore",20),n.addExperience(400),s.completeQuest("ch3_records"),s.completeQuest("ch4_mountains"),s.restoreSite("mountain_workshop"),s.talkToNPC("elara_lorekeeper"),s.talkToNPC("thorin_smith");for(let c=0;c<3;c++)s.surviveNight();r.position.x=380,r.position.z=40,r.position.y=o(380,40,a)+2}},{id:"ch6_done",name:"Chapter 6 Complete",description:"Cleared Mirkwood, restored beacon, reached Erebor forge",percent:75,applyState:i=>{Fi[3].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o,seed:a}=i;e.activate("ch5_darkwood"),e.advanceObjective("ch5_darkwood","ch5_enter_mirkwood",1),e.advanceObjective("ch5_darkwood","ch5_clear_spiders",3),e.advanceObjective("ch5_darkwood","ch5_restore_beacon",1),e.activate("ch6_forge"),e.advanceObjective("ch6_forge","ch6_reach_forge",1),e.advanceObjective("ch6_forge","ch6_unlock_crafting",1),e.advanceObjective("ch6_forge","ch6_discover_source",1),t.add("relic_shard",15),t.add("lore_fragment",10),t.add("iron_ore",30),n.addExperience(500),s.completeQuest("ch5_darkwood"),s.completeQuest("ch6_forge"),s.restoreSite("forest_beacon"),s.talkToNPC("galawen_warden"),s.talkToNPC("ranger_hal");for(let c=0;c<2;c++)s.surviveNight();r.position.x=420,r.position.z=80,r.position.y=o(420,80,a)+2}},{id:"ch7_done",name:"Chapter 7 Complete (Pre-Epilogue)",description:"Defeated the dark champion at Dol Guldur, ready for epilogue",percent:90,applyState:i=>{Fi[4].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o,seed:a}=i;e.activate("ch7_shadow"),e.advanceObjective("ch7_shadow","ch7_assault",1),e.advanceObjective("ch7_shadow","ch7_disable_link",1),e.advanceObjective("ch7_shadow","ch7_defeat_champion",1),n.addExperience(500),s.completeQuest("ch7_shadow"),s.restoreSite("ward_bastion"),s.talkToNPC("sage_miriel"),s.useRelic(),r.position.x=30,r.position.z=30,r.position.y=o(30,30,a)+2}},{id:"full_100",name:"100% Complete",description:"Everything done — all quests, sites, discoverables, enemies, etc.",percent:100,applyState:i=>{Fi[5].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o,seed:a}=i;e.activate("ch8_after"),e.advanceObjective("ch8_after","ch8_celebrate",1),e.advanceObjective("ch8_after","ch8_explore",1),s.completeQuest("ch8_after");const c=["cache_shire_01","cache_bree_01","cache_mountain_01","cache_erebor_01","lore_shire_01","lore_rivendell_01","relic_trollshaws_01","relic_mirkwood_01","roadstone_east_01","roadstone_east_02","inscription_dwarven_01","recipe_forge_01"];for(const d of c)s.discover(d);const l=["shire","bree","trollshaws","rivendell","misty_mountains","anduin_vale","mirkwood","long_lake","erebor","dol_guldur"];for(const d of l)s.visitLandmark(d);const h=["wolf","goblin","spider","troll","wight","guardian","construct","orc","giant_spider","shadow","barrow_wight","goblin_archer","corrupted_bear","dark_construct","wraith"];for(const d of h)s.killEnemy(d);for(const d of["ranger_hal","old_tom","elara_lorekeeper","thorin_smith","galawen_warden","beorn_jr","sage_miriel"])s.talkToNPC(d);for(let d=0;d<10;d++)s.completeSideQuest(`sq${d}`);for(;s.nightsSurvived<10;)s.surviveNight();s.buildShelter();for(const d of["hand","workbench","forge","campfire","kitchen","loom"])s.craftAtStation(d);t.add("iron_ore",50),t.add("relic_shard",20),t.add("lore_fragment",15),t.add("lembas",20),n.addExperience(1e3),r.position.x=0,r.position.z=0,r.position.y=o(0,0,a)+2}}];function jx(i){return!!(i.inventory||i.crafting||i.questLog||i.skillTree||i.map||i.settings)}const Qa=document.getElementById("race-select"),Vr=document.getElementById("class-select"),Zx=document.getElementById("race-info"),Qx=document.getElementById("class-info");function Md(){const i=pd[Qa.value];Vr.innerHTML="";for(const t of i.classIds){const n=Za[t],r=document.createElement("option");r.value=t,r.textContent=n.name,Vr.appendChild(r)}const e=i.statModifiers;Zx.textContent=`HP:${e.health} STA:${e.stamina} FOC:${e.focus} COR:${e.corruptionResistance}`,bd()}function bd(){const i=Za[Vr.value];i&&(Qx.textContent=`${i.passive} | ${i.activeAbility}`)}Qa.addEventListener("change",Md);Vr.addEventListener("change",bd);Md();let Xs=null;document.getElementById("start-btn").addEventListener("click",()=>{const i=mg({raceId:Qa.value,classId:Vr.value,difficulty:document.getElementById("difficulty-select").value,seed:42,worldName:document.getElementById("world-name").value,characterName:document.getElementById("character-name").value});document.getElementById("new-game").style.display="none",Jx(i,Xs),Xs=null});document.getElementById("jump-btn").addEventListener("click",()=>{const i=document.getElementById("jump-menu");i.style.display=i.style.display==="none"?"block":"none";const e=document.getElementById("jump-list");e.innerHTML=Fi.map(t=>`
    <div style="padding:5px 8px;margin:2px 0;border-radius:4px;cursor:pointer;font-size:12px;color:#aed581;border:1px solid #333;background:${Xs===t.id?"#3a5a2f":"transparent"}"
         data-jump="${t.id}">
      <b>${t.name}</b> (${t.percent}%)<br>
      <span style="color:#888">${t.description}</span>
    </div>
  `).join(""),e.querySelectorAll("[data-jump]").forEach(t=>{t.addEventListener("click",()=>{Xs=t.getAttribute("data-jump"),e.querySelectorAll("[data-jump]").forEach(n=>n.style.background="transparent"),t.style.background="#3a5a2f"})})});function Jx(i,e){const t=vr,n=new dx,r=new dd,s=document.getElementById("loading-screen"),o=document.getElementById("loading-fill"),a=document.getElementById("loading-pct"),c=document.getElementById("loading-flavor"),l=["The old roads remember those who walked them...","Ancient ward-stones hum with forgotten power...","Mirkwood's shadows deepen with each passing age...","The Lonely Mountain watches over the eastern lands...","In the Shire, the hedgerows grow thick and green...","Rivendell endures, though diminished and quiet...","The Great River Anduin flows ever southward...","Old ruins hold secrets that time cannot erase..."];s.style.display="flex",c.textContent=l[Math.floor(Math.random()*l.length)];const h=(F,te)=>{const ae=Math.round(F/te*100);o.style.width=`${ae}%`,a.textContent=`${ae}% — ${F}/${te} chunks`,F%Math.max(1,Math.floor(te/4))===0&&(c.textContent=l[Math.floor(Math.random()*l.length)])},d=new Vx(r,i.seed,{loadDistance:6,maxChunksPerFrame:t.CHUNKS.MAX_PER_FRAME,useWorker:!0,onProgress:h});d.generateInitialChunks(0,0);const f=!d.isLoading(),p={starter_watchpost:"small",roadside_hall:"medium",mountain_workshop:"medium",forest_beacon:"small",ward_bastion:"large"};for(const F of Ur){const te=Lt(F.position.x,F.position.z,i.seed);mv(r,{x:F.position.x,y:te+1,z:F.position.z},p[F.id]||"small")}const{player:_,inventory:g,survivalStats:m,race:u,cls:T}=_g(i),b=px(i.difficulty),S=Lt(0,0,i.seed);_.position.y=S+2;const w=new j0,R=new vg,I=new Fg(i.seed),P=new Bg({width:t.FOG.WIDTH,height:t.FOG.HEIGHT,cellSize:t.FOG.CELL_SIZE}),M=new Gg,E=new Wg,D=new lv(xl),Y=yx(i.raceId,i.classId);for(const F of Y)D.grantStartingUnlock(F);const B=new dv(D),$=new Xg(8),oe=new Yg,Q=new Qg(ev),ne=new Jg(Q),q=new nv,de=Nv(),Re=new sv,De=Lv(),et=vx(i.raceId);De.applyRaceModifiers(i.raceId,et);const st=new hv,j=new uv(P,Rs),_e=new Vv(u.statModifiers.perception||50),Oe=tx(i.raceId);Oe>0&&_e.addModifier("race_stealth",Oe);const ve=new xv;(i.classId==="man_scholar"||i.classId==="elf_warden")&&ve.equipRelic(new vv({id:"ward_light",name:"Ward Light Stone",ability:ws.WARD_LIGHT,focusCost:10}));const ze=new Sv,ht=new Mv,He=new bv,wt=new Tv(Av),Rt=new jv,Ze=new Rx,O=new Cx;let Mt=null;const it=document.getElementById("chest-panel"),tt=document.getElementById("chest-items");function Ue(F,te,ae){Mt={x:F,y:te,z:ae},Ne()}function bt(){Mt=null,it.style.display="none"}function Ne(){if(!Mt){it.style.display="none";return}it.style.display="block";const F=O.getItems(Mt.x,Mt.y,Mt.z);if(F.length===0){tt.innerHTML='<div style="color:#888">Empty</div>';return}tt.innerHTML=F.map((te,ae)=>`<div data-chest-idx="${ae}" style="padding:4px 8px;cursor:pointer;border-radius:4px;color:#aed581;border:1px solid #333;margin:2px 0">${Ho(te.type)} ${te.type.replace(/_/g," ")} x${te.count}</div>`).join(""),tt.onclick=te=>{const ae=te.target.closest("[data-chest-idx]");if(!ae||!Mt)return;const Me=parseInt(ae.getAttribute("data-chest-idx")),Pe=O.getItems(Mt.x,Mt.y,Mt.z);if(Me>=0&&Me<Pe.length){const he=O.takeItem(Mt.x,Mt.y,Mt.z,Pe[Me].type);he&&(g.add(he.type,he.count),ge=`Took ${he.count} ${he.type.replace(/_/g," ")}`,ue=1.5,Ne())}}}const A=new hx,v=new ux,k=new fx,ee={x:0,y:Lt(0,0,i.seed)+2,z:0};Mx(i.classId),g.add("map_fragment",1);const se={man:"man",elf:"elf",dwarf:"dwarf",hobbit:"hobbit"}[i.raceId]||"man",J=new Map(Bo.map(F=>[F.id,F]));for(const F of Al){const te=Lt(F.x,F.z,i.seed);if(xd(r,{x:F.x,y:te+1,z:F.z},{wallBlock:F.wallBlock,roofBlock:F.roofBlock,floorBlock:F.floorBlock,radius:F.radius,height:F.height,bed:F.bed,chest:F.chest}),F.chest&&F.chestItems){const ae=F.x-F.radius+1,Me=te+1,Pe=F.z+F.radius-1;for(const he of F.chestItems)O.addItem(ae,Me,Pe,he.type,he.count)}if(F.npcId){const ae=J.get(F.npcId);ae&&(ae.position.x=F.x+F.radius+1,ae.position.y=te+2,ae.position.z=F.z,ae.spawnPosition={...ae.position},st.addNPC(ae),J.delete(F.npcId))}}for(const[,F]of J){const te=Lt(Math.floor(F.position.x),Math.floor(F.position.z),i.seed);F.position.y=te+2,F.spawnPosition={...F.position},st.addNPC(F)}for(const F of Ix)if(F.type==="line"){const te=F.x2-F.x1,ae=F.z2-F.z1,Me=Math.max(Math.abs(te),Math.abs(ae));for(let Pe=0;Pe<=Me;Pe++){const he=Me===0?0:Pe/Me,ct=Math.round(F.x1+te*he),Ke=Math.round(F.z1+ae*he),Nt=Lt(ct,Ke,i.seed);F.surface?r.setBlock(ct,Nt,Ke,F.block):r.setBlock(ct,Nt+F.dy,Ke,F.block)}}else if(F.type==="well"){const te=Lt(F.x,F.z,i.seed);for(let ae=-1;ae<=1;ae++)for(let Me=-1;Me<=1;Me++)ae===0&&Me===0?r.setBlock(F.x,te+1,F.z,x.WATER):r.setBlock(F.x+ae,te+1,F.z+Me,x.COBBLESTONE)}else if(F.type==="blocks"){const te=Lt(F.x,F.z,i.seed);for(const ae of F.blocks){const Me=F.x+ae.dx,Pe=F.z+ae.dz,he=ae.surface?Lt(Me,Pe,i.seed):te;r.setBlock(Me,he+ae.dy,Pe,ae.block)}}for(const F of Ox){const te=Lt(F.x,F.z,i.seed),ae=F.type==="large"?6:4,Me=F.type==="large"?3:2;for(let he=1;he<=ae;he++)r.setBlock(F.x,te+he,F.z,x.WOOD);const Pe=te+ae;for(let he=-Me;he<=Me;he++)for(let ct=-Me;ct<=Me;ct++)for(let Ke=0;Ke<=2;Ke++){if(he===0&&ct===0&&Ke===0)continue;Math.sqrt(he*he+ct*ct)+Ke*.7<=Me+.6&&r.setBlock(F.x+he,Pe+Ke,F.z+ct,x.LEAVES)}}for(const F of Rl){const te=Lt(F.x,F.z,i.seed);r.setBlock(F.x,te+F.dy,F.z,F.block)}let ge="",ue=0,Te=-1;const ot=jg(i.classId);for(const F of ot)g.add(F.type,F.count);const re=[],Ae=[];let Be=[];const We=2,we=120;function rt(F,te,ae){Ae.push({position:{x:F.x+(Math.random()-.5)*.5,y:F.y+.5,z:F.z+(Math.random()-.5)*.5},type:te,count:ae,lifetime:we,bobPhase:Math.random()*Math.PI*2})}let $e=i.seed;const Et=()=>($e=$e*1103515245+12345&2147483647,$e/2147483647),L=new yg(Et);let ye=0;const V=new t0({antialias:!0});V.setSize(window.innerWidth,window.innerHeight),V.setClearColor(t.COLORS.SKY_DAY),document.body.appendChild(V.domElement);const Z=new cu,be=_l(1);Z.fog=new Ya(t.COLORS.SKY_DAY,be.near,be.far);const me=new Sn(t.CAMERA.FOV,window.innerWidth/window.innerHeight,t.CAMERA.NEAR,t.CAMERA.FAR),je=new _u(t.COLORS.AMBIENT_LIGHT,t.LIGHTING.AMBIENT.day);Z.add(je);const At=new mu(t.COLORS.DIR_LIGHT,t.LIGHTING.DIRECTIONAL.day);At.position.set(50,100,30),Z.add(At);const ft=new B0(Z,r);f&&(ft.update(0,0,t.CHUNKS.RENDER_DISTANCE),s.style.display="none");const xt=new Og(Z),sn=new Ng(Z),Le=new z0(V.domElement),$r=document.getElementById("hud"),jr=document.getElementById("crosshair");jr.style.display="block",document.getElementById("health-bar-wrap").style.display="block",document.getElementById("hotbar-bar").style.display="flex";function Mn(F){const te=Math.cos(F.pitch);return{x:-Math.sin(-F.yaw)*te,y:Math.sin(F.pitch),z:-Math.cos(-F.yaw)*te}}function Vi(F){const te={[_t.DAWN]:t.COLORS.SKY_DAWN,[_t.DAY]:t.COLORS.SKY_DAY,[_t.DUSK]:t.COLORS.SKY_DUSK,[_t.NIGHT]:t.COLORS.SKY_NIGHT},ae={[_t.DAWN]:.5,[_t.DAY]:.6,[_t.DUSK]:.35,[_t.NIGHT]:.1},Me={[_t.DAWN]:.6,[_t.DAY]:.8,[_t.DUSK]:.4,[_t.NIGHT]:.05},Pe=te[F]||t.COLORS.SKY_DAY;V.setClearColor(Pe),Z.fog.color.set(Pe),je.intensity=ae[F]||.6,At.intensity=Me[F]||.8}const Ar=document.getElementById("map-panel"),Zr=document.getElementById("map-title"),Wi=document.getElementById("map-canvas-2d"),Qr=document.getElementById("map-explored"),Xi=new Lx((F,te)=>Lt(F,te,i.seed),(F,te)=>Ws(F,te,i.seed),i.seed),Si=new Ux(Xi,Wi);function Jr(F){if(Ar.style.display=j.isOpen?"block":"none",!j.isOpen)return;const te=de.getActiveQuests().map(Me=>Me.id),ae=Ex(Ee,te);Si.draw({playerPos:F,fogOfWar:P,buildings:Al,npcs:st.getAllNPCs(),stations:Rl,landmarks:Rs,questMarkers:ae}),Zr.textContent=Si.zoom===ur.OVERVIEW?"World Map [M]":"Detail Map [M]",Qr.textContent=Math.round(j.getExploredPercentage())}const es=document.getElementById("skill-panel"),js=document.getElementById("skill-tree-nav"),Zs=document.getElementById("skill-tree-nodes");function oi(){if(es.style.display=B.isOpen?"block":"none",!B.isOpen)return;const F=B.getCurrentTree();es.querySelector("h2").textContent=`Skills [Tab] — ${F.name} (${B.getSkillPoints()} pts)`,js.textContent=`← ${B.currentTreeIndex+1}/${xl.length} →`;const te=B.getNodes();Zs.innerHTML=te.map((ae,Me)=>{const Pe=Me===B.selectedNodeIndex?" selected":"",he=ae.unlocked?" unlocked":ae.available?" available":" locked",ct=ae.requires.length?` (needs: ${ae.requires.join(", ")})`:"";return`<div class="node${Pe}${he}">${ae.unlocked?"✓":ae.available?"○":"·"} ${ae.name} [${ae.cost}] — ${ae.description}${ct}</div>`}).join("")}function Qs(){for(;M.skillPoints>0;)M.spendSkillPoint(),D.addPoints(1)}const ts=document.getElementById("crafting-panel"),y=document.getElementById("crafting-list"),N=document.getElementById("quest-list");function z(){if(ts.style.display=ne.isOpen?"block":"none",!ne.isOpen)return;const F=ts.querySelector("h2");if(F){const he=ne._station?`Station: ${ne._station.charAt(0).toUpperCase()+ne._station.slice(1)}`:"Hand Crafting";F.textContent=`Crafting [E] — ${he}`}const te=ne.getAllRecipes();ne.selectedIndex>=te.length&&(ne.selectedIndex=Math.max(0,te.length-1));const ae=ne.getAvailableRecipes(g),Me=new Set(ae.map(he=>he.name));y.innerHTML=te.map((he,ct)=>{const Ke=ct===ne.selectedIndex?" selected":"",Nt=Me.has(he.name)?" available":" unavailable",Pn=he.inputs.map(on=>`${on.count} ${on.type}`).join(", "),zt=he.outputs.map(on=>`${on.count} ${on.type}`).join(", ");return`<div class="recipe${Ke}${Nt}" data-idx="${ct}">${he.name}: ${Pn} → ${zt}</div>`}).join("");const Pe=y.querySelector(".recipe.selected");Pe&&Pe.scrollIntoView({block:"nearest"})}function G(){const F=de.getActiveQuests();if(F.length===0){const te=de.quests.filter(ae=>de.getStatus(ae.id)==="available");if(te.length===0){N.innerHTML='<div style="color:#888">No active quests. Explore the world!</div>';return}N.innerHTML=te.map(ae=>`
        <div class="quest"><span class="quest-name">${ae.name}</span> (available)<br>
        <span style="color:#888">${ae.description}</span></div>
      `).join("");return}N.innerHTML=F.map(te=>{const ae=te.objectives.map(Me=>`<div class="objective${Me.isComplete()?" complete":""}">• ${Me.description} (${Me.progress}/${Me.target})</div>`).join("");return`<div class="quest"><span class="quest-name">${te.name}</span><br>${ae}</div>`}).join("")}de.activate("ch1_embers");const U=t.QUESTS.AUTO_ACTIVATE_SIDE_COUNT;let ce=0;for(const F of Ed){if(ce>=U)break;de.activate(F.id)&&ce++}const Ee=new Yv,xe=new $x;if(e){const F=Fi.find(te=>te.id===e);F&&F.applyState({questSystem:de,inventory:g,survivalStats:m,experienceSystem:M,player:_,progress:xe,factionSystem:De,getHeightAt:Lt,seed:i.seed})}function Ce(){if(document.getElementById("progress-panel").style.display==="none")return;const te=xe.getPercentage();document.getElementById("progress-fill").style.width=`${te}%`,document.getElementById("progress-pct").textContent=`${te}% Complete`;const ae=xe.getBreakdown().filter(Me=>Me.total>0);document.getElementById("progress-list").innerHTML=ae.map(Me=>{const Pe=Me.current>=Me.total;return`<div style="color:${Pe?"#6a6":"#aaa"}">${Pe?"✓":"○"} ${Me.label}: ${Me.current}/${Me.total}</div>`}).join("")}let Xe=performance.now(),Ge=!1;function ke(F){requestAnimationFrame(ke);const te=Math.min((F-Xe)/1e3,.1);Xe=F;const ae=te*t.SURVIVAL.GAME_TIME_SCALE;if(w.tick(ae),A.isDead(m)&&!v.enabled){document.getElementById("death-screen").style.display="flex",Le.consumeKeyPress("Enter")&&(A.respawn(m,_,ee),document.getElementById("death-screen").style.display="none"),Vi(w.getPhase()),V.render(Z,me);return}Le.consumeKeyPress("F4")&&(v.toggle(),ge=v.enabled?"Creative Mode ON — fly with Space/Shift, invincible":"Creative Mode OFF",ue=t.DIALOGUE.SHORT_DURATION);const Me=Ws(_.position.x,_.position.z,i.seed);m.setBiomeTemperature(Me.type),I.tick(ae),v.noHunger()||m.tick(mx(ae,b)),P.reveal(_.position.x,_.position.z,t.FOG.REVEAL_RADIUS);for(const C of Rs){const K=_.position.x-C.position.x,Ie=_.position.z-C.position.z;Math.sqrt(K*K+Ie*Ie)<C.radius*.5&&Si.addVisitedMarker(C.position.x,C.position.z,C.name)}if(Le.consumeKeyPress("Escape")){let C=!1;Mt&&(bt(),C=!0),ne.isOpen&&(ne.toggle(),z(),C=!0),document.getElementById("inventory-panel").style.display!=="none"&&(document.getElementById("inventory-panel").style.display="none",C=!0),j.isOpen&&(j.toggle(),C=!0),B.isOpen&&(B.toggle(),C=!0),n.isOpen&&(n.toggleOpen(),C=!0);const K=document.getElementById("quest-log");K&&K.style.display==="block"&&(K.style.display="none",C=!0),C&&V.domElement.requestPointerLock()}const Pe=jx({inventory:document.getElementById("inventory-panel").style.display!=="none",crafting:ne.isOpen,questLog:document.getElementById("quest-log").style.display==="block",skillTree:B.isOpen,map:j.isOpen,settings:n.isOpen});Le.menuOpen=Pe,Pe&&document.pointerLockElement&&document.exitPointerLock();for(const C of Rs)As(_.position,C.position,C.radius)&&xe.visitLandmark(C.id);if(Le.locked){const C=Le.consumeMouse(),K=n.getMouseSensitivity(t.CAMERA.MOUSE_SENSITIVITY);_.yaw+=C.dx*K,_.pitch-=C.dy*K,_.pitch=Math.max(-t.CAMERA.MAX_PITCH,Math.min(t.CAMERA.MAX_PITCH,_.pitch))}Le.consumeKeyPress("KeyV")&&_.toggleCamera(),_.setCrouch(!!Le.keys.KeyC),R.setGuard(!!Le.keys.KeyG);for(let C=0;C<8;C++)Le.consumeKeyPress(`Digit${C+1}`)&&$.selectSlot(C);const he=Le.consumeScroll();he>0?$.scrollNext():he<0&&$.scrollPrev();const Ke=g.getItems().filter(C=>Oa[C.type]!==void 0);for(let C=0;C<Math.min(Ke.length,8);C++)$.setSlot(C,{type:Ke[C].type,count:Ke[C].count});for(let C=Ke.length;C<8;C++)$.clearSlot(C);if(Qs(),oe.tick(ae),q.tick(ae),Le.consumeKeyPress("Backquote")){const C=document.getElementById("progress-panel");C.style.display=C.style.display==="none"?"block":"none"}if(Ce(),Le.consumeKeyPress("KeyM")&&(j.toggle(),j.isOpen||V.domElement.requestPointerLock()),j.isOpen&&Le.consumeKeyPress("KeyZ")&&Si.toggleZoom(),j.isOpen?Jr(_.position):Ar.style.display="none",Le.consumeKeyPress("KeyP")){n.toggleOpen();const C=document.getElementById("settings-panel");C&&(C.style.display=n.isOpen?"block":"none",n.isOpen&&(C.innerHTML=`
            <h2>Settings [P]</h2>
            <div style="margin:8px 0">
              <label>Camera Sensitivity: <span id="sens-val">${n.sensitivity.toFixed(1)}x</span></label><br>
              <input type="range" id="sens-slider" min="0.5" max="3.0" step="0.1" value="${n.sensitivity}" style="width:200px">
            </div>
            <div style="margin:8px 0">
              <label>FOV: <span id="fov-val">${n.fov}</span></label><br>
              <input type="range" id="fov-slider" min="60" max="110" step="1" value="${n.fov}" style="width:200px">
            </div>
            <div style="margin:8px 0">
              <label><input type="checkbox" id="tutorial-toggle" ${n.tutorialEnabled?"checked":""}> Tutorial</label>
            </div>
          `,document.getElementById("sens-slider").addEventListener("input",K=>{n.setSensitivity(parseFloat(K.target.value)),document.getElementById("sens-val").textContent=n.sensitivity.toFixed(1)+"x"}),document.getElementById("fov-slider").addEventListener("input",K=>{n.setFov(parseInt(K.target.value)),document.getElementById("fov-val").textContent=n.fov,me.fov=n.fov,me.updateProjectionMatrix()}),document.getElementById("tutorial-toggle").addEventListener("change",()=>{n.toggleTutorial()})))}Le.consumeKeyPress("Tab")&&(B.toggle(),oi(),B.isOpen||V.domElement.requestPointerLock()),B.isOpen&&(Le.consumeKeyPress("ArrowRight")&&(B.nextTree(),oi()),Le.consumeKeyPress("ArrowLeft")&&(B.prevTree(),oi()),Le.consumeKeyPress("ArrowDown")&&(B.selectedNodeIndex++,oi()),Le.consumeKeyPress("ArrowUp")&&(B.selectedNodeIndex=Math.max(0,B.selectedNodeIndex-1),oi()),Le.consumeKeyPress("Enter")&&(B.unlockSelected(),oi()));const Nt=Bv(r,_.position);if(ne.setStation(Nt),Le.consumeKeyPress("KeyE")&&(ne.toggle(),z(),ne.isOpen||V.domElement.requestPointerLock()),Le.consumeKeyPress("KeyI")){const C=document.getElementById("inventory-panel"),K=C.style.display!=="none";C.style.display=K?"none":"block",K&&V.domElement.requestPointerLock()}if(document.getElementById("inventory-panel").style.display!=="none"){const C=document.getElementById("inventory-grid");let K="";const Ie=g.size||36;for(let Ve=0;Ve<Ie;Ve++){const Tt=g.getSlot?g.getSlot(Ve):null,Vt=Tt?Ho(Tt.type):"",bn=Tt?Tt.type.replace(/_/g," "):"",Nn=Tt?Tt.count:"";K+=`<div data-inv-slot="${Ve}" style="width:56px;height:56px;background:rgba(30,30,40,0.8);border:2px solid #444;border-radius:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;${Te===Ve?"border-color:#c9a84c;background:rgba(60,60,20,0.5)":""}">
          <div style="font-size:20px;line-height:1">${Vt}</div>
          <div style="font-size:8px;color:#aaa;overflow:hidden;max-width:52px;text-align:center;white-space:nowrap">${bn}</div>
          <div style="font-size:9px;color:#888">${Nn}</div>
        </div>`}C.innerHTML=K,C.onclick=Ve=>{const Tt=Ve.target.closest("[data-inv-slot]");if(!Tt)return;const Vt=parseInt(Tt.getAttribute("data-inv-slot"));Te===-1?Te=Vt:(g.moveSlot&&g.moveSlot(Te,Vt),Te=-1)};const Fe=De.getAllFactions().map(Ve=>{const Tt=De.getReputation(Ve.id),Vt=De.getTier(Ve.id);return`<div><span style="color:#c9a84c">${Ve.name}</span> <span style="color:#888">${Vt} (${Tt})</span></div>`}).join("");document.getElementById("inventory-extra").innerHTML='<div style="border-top:1px solid #444;padding-top:6px;color:#aaa;font-size:11px;margin-top:4px">Factions</div>'+Fe}if(Le.consumeKeyPress("KeyQ")){const C=document.getElementById("quest-log"),K=C.style.display==="block";C.style.display=K?"none":"block",K&&V.domElement.requestPointerLock()}if(document.getElementById("quest-log").style.display==="block"&&G(),ne.isOpen&&(Le.consumeKeyPress("ArrowDown")&&(ne.selectNext(),z()),Le.consumeKeyPress("ArrowUp")&&(ne.selectPrev(),z()),Le.consumeKeyPress("Enter")&&ne.craftSelected(g)&&z()),Le.consumeKeyPress("KeyT")&&!k.isActive()){const C=zo(st,_.position,t.NPC.INTERACT_RANGE);if(C){const K=C.getDialogue(de),Ie=[];if(Sd(C,de)&&Ie.push({text:"Accept quest",response:null,action:"accept_quest",npcId:C.id}),C.trades&&C.trades.length>0)for(const Fe of C.trades){const Ve=g.count(Fe.give.type)>=Fe.give.count,Tt=`Trade ${Fe.give.count} ${Fe.give.type.replace(/_/g," ")} → ${Fe.receive.count} ${Fe.receive.type.replace(/_/g," ")}${Ve?"":" (need more)"}`;Ie.push({text:Tt,response:Ve?`Traded! Received ${Fe.receive.count} ${Fe.receive.type.replace(/_/g," ")}.`:"You don't have enough to trade.",action:Ve?"trade":null,trade:Fe})}Ie.push(...Yx(C.id,C.name)),k.startDialogue(`${C.name}: ${K}`,Ie),xe.talkToNPC(C.id),de.advanceObjective("ch2_roads","ch2_meet_npc",1)}}if(k.isActive()){const C=document.getElementById("dialogue-panel");C.style.display="block";const K=k.getState();document.getElementById("dialogue-message").innerHTML=k.getMessage();const Ie=k.getChoices();if(K==="choices"){if(document.getElementById("dialogue-choices").innerHTML=Ie.map((Fe,Ve)=>`<div style="${Ve===k.selectedIndex?"color:#c9a84c;":"color:#888;"}cursor:pointer;padding:3px 0">${Ve===k.selectedIndex?"▸ ":"  "}${Fe.text}</div>`).join(""),Le.consumeKeyPress("ArrowDown")&&k.selectNext(),Le.consumeKeyPress("ArrowUp")&&k.selectPrev(),Le.consumeKeyPress("Enter")){const Fe=Ie[k.selectedIndex];if(Fe&&Fe.action==="accept_quest"){const Ve=zo(st,_.position,t.NPC.INTERACT_RANGE);Ve&&qv(Ve,de),k.dismiss(),ge="Quest accepted!",ue=t.DIALOGUE.SHORT_DURATION}else if(Fe&&Fe.action==="trade"&&Fe.trade){const Ve=Fe.trade;g.remove(Ve.give.type,Ve.give.count)&&(g.add(Ve.receive.type,Ve.receive.count),k.dismiss(),ge=`Traded! Received ${Ve.receive.count} ${Ve.receive.type.replace(/_/g," ")}`,ue=t.DIALOGUE.SHORT_DURATION)}else k.selectChoice(k.selectedIndex)}}else K==="response"&&(document.getElementById("dialogue-choices").innerHTML='<div style="color:#666;padding:6px 0;font-style:italic">Press Enter to continue...</div>',Le.consumeKeyPress("Enter")&&k.acknowledge());(Le.consumeKeyPress("Escape")||Le.consumeKeyPress("KeyT"))&&k.dismiss()}else document.getElementById("dialogue-panel").style.display="none";if(ue>0&&(ue-=te,ue<=0&&(ge="")),Le.consumeKeyPress("F5"))try{const C=fv(r,_,g,{survivalStats:m,quests:de});localStorage.setItem("lotry_save",C),ge="Game saved!",ue=t.DIALOGUE.SAVE_FEEDBACK_DURATION}catch{ge="Save failed!",ue=t.DIALOGUE.SAVE_FEEDBACK_DURATION}if(Le.consumeKeyPress("F9"))try{const C=localStorage.getItem("lotry_save");if(C){const K=pv(C);Object.assign(_.position,K.player.position),_.velocity=K.player.velocity,_.yaw=K.player.yaw,_.pitch=K.player.pitch,_.onGround=K.player.onGround;for(const Ie of g.getItems())g.remove(Ie.type,Ie.count);for(const Ie of K.inventory.getItems())g.add(Ie.type,Ie.count);K.survivalStats&&Object.assign(m,K.survivalStats),K.questData&&de.deserialize(K.questData);for(const Ie of ft.meshes.keys())ft.dirty.add(Ie);ge="Game loaded!",ue=t.DIALOGUE.SAVE_FEEDBACK_DURATION}else ge="No save found",ue=t.DIALOGUE.SAVE_FEEDBACK_DURATION}catch{ge="Load failed!",ue=t.DIALOGUE.SAVE_FEEDBACK_DURATION}if(Le.consumeKeyPress("KeyF")&&cv(g,m,q),Le.consumeKeyPress("KeyX")){const C=Me.type===dt.MIRKWOOD,K=ve.useRelic(m.focus);if(K){xe.useRelic();const Ie=rx(K.focusCost,C);if(m.focus=Math.max(0,m.focus-Ie),K.ability===ws.HEAL_WOUND?(m.health=Math.min(m.maxHealth,m.health+20),ge="Healing light surrounds you..."):K.ability===ws.WARD_LIGHT?(oe.reduceFear(30),ge="A warm light pushes back the darkness."):K.ability===ws.CALM_FEAR?(oe.reduceFear(50),ge="A calm washes over you."):ge=`Used: ${ve.getEquippedRelic().name}`,C){ge="The corruption resists your power... "+ge;const Fe=sx();if(Math.random()<Fe){const Ve=L.spawn(_.position,Me.type);Ve&&re.push(Ve)}}ue=t.DIALOGUE.SHORT_DURATION}else ve.getEquippedRelic()&&(ge=ve.getEquippedRelic().cooldown>0?"Relic on cooldown":"Not enough focus",ue=t.DIALOGUE.SAVE_FEEDBACK_DURATION)}ve.tick(ae);const Pn=wt.findNearby(_.position,5);for(const C of Pn)if(C.discover()){for(const K of C.reward)g.add(K.type,K.count);M.addExperience(t.QUESTS.XP_DISCOVERY,"exploration"),(C.type==="lore_book"||C.type==="inscription")&&ht.addEntry(new yd({id:C.id,title:C.id.replace(/_/g," "),text:`Found near ${Math.floor(C.position.x)}, ${Math.floor(C.position.z)}`,category:C.type==="lore_book"?Sl.HISTORY:Sl.INSCRIPTION})),xe.discover(C.id),ge=`Discovered: ${C.type.replace(/_/g," ")}!`,ue=t.DIALOGUE.SHORT_DURATION}for(const C of Ur)C.restored&&!He.isUnlocked(C.id)&&He.unlockWaypoint({id:C.id,name:C.name,position:{...C.position}});const zt=ze.evaluate(r,_.position),on=Qv(se);zt.warmth+(on.temperature||0)*.1,Rt.tick(ae);const lt=Le.getMovementInput();if(v.canFly()){const C=Mn(_),K=v.flySpeed*te;lt.forward&&(_.position.x+=C.x*K,_.position.y+=C.y*K,_.position.z+=C.z*K),lt.back&&(_.position.x-=C.x*K,_.position.y-=C.y*K,_.position.z-=C.z*K),lt.left&&(_.position.x+=C.z*K,_.position.z-=C.x*K),lt.right&&(_.position.x-=C.z*K,_.position.z+=C.x*K),Le.getJump()&&(_.position.y+=K),Le.keys.ShiftLeft&&(_.position.y-=K),_.velocity.y=0}else{const C=Jv(i.raceId,Me.type),K=m.getFractureSpeedMultiplier(),Ie=Wx(r,_.position),Fe=Xx(Ie),Ve=Math.floor(_.position.x),Tt=Math.floor(_.position.z),Vt=Lt(Ve,Tt,i.seed);let bn=1;if(lt.forward||lt.right){const an=Math.cos(_.yaw),Mi=Math.sin(_.yaw),Hd=Math.floor(_.position.x+Mi*2),Gd=Math.floor(_.position.z+an*2),Vd=Lt(Hd,Gd,i.seed),Wd=Math.abs(Vd-Vt);bn=qx(Wd)}if(Le.keys.ShiftLeft&&lt.forward&&!_.crouching&&m.stamina>0){const an=_.moveSpeed,Mi=ex(i.raceId);_.moveSpeed*=t.SURVIVAL.SPRINT_MULTIPLIER*Mi*C*K*Fe*bn,_.applyMovementInput(lt,te),_.moveSpeed=an,m.applySprint(ae)}else{const an=_.moveSpeed;_.moveSpeed*=C*K*Fe*bn,_.applyMovementInput(lt,te),_.moveSpeed=an}if(Ie){const an=p0(_.position.x,_.position.z);an&&(_.position.x+=an.x*te,_.position.z+=an.z*te)}Le.getJump()&&_.onGround&&(_.velocity.y=t.PHYSICS.JUMP_VELOCITY,_.onGround=!1);const Rr=_.velocity.y,Js=_.onGround;S0(_,te),b0(_,r,te),!Js&&_.onGround&&Rr<0&&m.checkFallFracture(Rr)}Zg(_.position,t.WORLD.BOUNDARY_EXTENT);const Gt=Mn(_),Kt={x:_.position.x,y:_.position.y+t.CAMERA.FIRST_PERSON_EYE_HEIGHT,z:_.position.z};if(Le.locked&&Le.consumeRightClick()){const C=al(r,Kt,Gt,6);if(C){const K=r.getBlock(C.blockPos.x,C.blockPos.y,C.blockPos.z);if(K===x.DOOR||K===x.DOOR_OPEN)Tl(r,C.blockPos.x,C.blockPos.y,C.blockPos.z)&&(ft.markDirty(C.blockPos.x,C.blockPos.y,C.blockPos.z),ft.markDirty(C.blockPos.x,C.blockPos.y+1,C.blockPos.z),ft.markDirty(C.blockPos.x,C.blockPos.y-1,C.blockPos.z));else if(K===x.CHEST)Ue(C.blockPos.x,C.blockPos.y,C.blockPos.z);else{const Ie=$.getSelectedItem(),Fe=Ie?Ie.type:null;if(Fe&&Oa[Fe]!==void 0){const Ve=C.blockPos.x+C.normal.x,Tt=C.blockPos.y+C.normal.y,Vt=C.blockPos.z+C.normal.z;G0(r,g,Ve,Tt,Vt,Fe)&&ft.markDirty(Ve,Tt,Vt)}}}}if(ye+=ae,ye>=10){ye=0;const C=re.filter(Ie=>!Ie.isDead()).length,K=L.trySpawn({phase:w.getPhase(),playerPos:_.position,existingCount:C,getHeight:(Ie,Fe)=>Lt(Ie,Fe,i.seed)});re.push(...K)}const Ht=(C,K)=>Lt(C,K,i.seed);for(const C of re)if(!C.isDead()){const K=C.aggroRange;C.aggroRange=zv(C,_.crouching),C.updateAI(_.position,te,Ht,r),C.aggroRange=K}if(w.getPhase()===_t.NIGHT&&oe.addFear(ae*.5),!v.isInvincible()){for(const C of re)if(!C.isDead()&&C.canAttack(_.position)){let K=C.performAttack();K=_x(K,b),R._guarding&&(K*=.5),K=Uv(K,E),m.takeDamage(K)}}if(Le.locked&&Le.keys.mouseLeft){const C=al(r,Kt,Gt,6);if(C){const{x:K,y:Ie,z:Fe}=C.blockPos,Ve=r.getBlock(K,Ie,Fe);if(wx(Ve))Le.consumeLeftClick()&&Tl(r,K,Ie,Fe)&&(ft.markDirty(K,Ie,Fe),ft.markDirty(K,Ie+1,Fe),ft.markDirty(K,Ie-1,Fe));else if(Ze.startBreak(K,Ie,Fe,Ve),Ze.tick(te)){const Tt=E.get("main_hand");let Vt=Tt&&Tt.toolType||null;if(!Vt){const bn=["iron_pickaxe","copper_pickaxe","stone_pickaxe","pickaxe"];for(const Nn of bn)if(g.count(Nn)>0){Vt="pickaxe";break}}if(c0(Ve,Vt)){const bn=o0(Ve);r.setBlock(K,Ie,Fe,0);for(const Nn of bn)rt({x:K,y:Ie,z:Fe},Nn.type,Nn.count);ft.markDirty(K,Ie,Fe)}}}else if(Ze.cancel(),Le.consumeLeftClick()){let K=kv(E);if(K<=2){const Ie=[{type:"iron_sword",damage:12},{type:"iron_hammer",damage:14},{type:"dagger",damage:6},{type:"spear",damage:10},{type:"axe",damage:8},{type:"stone_axe",damage:6},{type:"hammer",damage:10}];for(const Fe of Ie)if(g.count(Fe.type)>0){K=Fe.damage;break}K<=2&&(K=5)}R.playerAttack(_.position,Gt,re,K)}}else Ze.cancel(),Le.consumeLeftClick();for(let C=re.length-1;C>=0;C--)if(re[C].isDead()){const K=X0(re[C].type);for(const Ie of K)rt(re[C].position,Ie.type,Ie.count);M.addExperience(t.COMBAT.XP_PER_KILL,"combat"),De.addReputation("road_wardens",t.COMBAT.FACTION_REP_PER_KILL),xe.killEnemy(re[C].type),re.splice(C,1)}!Ge&&w.day>=2&&(Ge=!0,de.advanceObjective("ch1_embers","ch1_survive",1),M.addExperience(t.QUESTS.XP_FIRST_NIGHT,"quest"),xe.surviveNight()),w.getPhase()===_t.DAWN&&w.day>xe.nightsSurvived+1&&xe.surviveNight();const qi=Ur.find(C=>C.id==="starter_watchpost");qi&&As(_.position,qi.position,t.RESTORATION.HINT_RANGE)&&de.advanceObjective("ch1_embers","ch1_reach_outpost",1);const Vn=Ee.checkTriggers(_.position);for(const C of Vn)de.activate(C.questId),(C.type==="reach_location"||C.type==="explore_area")&&(de.advanceObjective(C.questId,C.objectiveId,1),M.addExperience(t.QUESTS.XP_EXPLORATION,"exploration"));if(Le.consumeKeyPress("KeyR")){for(const C of Ur)if(!C.restored&&As(_.position,C.position,t.RESTORATION.INTERACT_RANGE)){if(C.restore(g)){const K=ix(C.id);ge=K.message,ue=t.DIALOGUE.DISPLAY_DURATION,M.addExperience(t.QUESTS.XP_RESTORATION,"restoration"),xe.restoreSite(C.id);const Fe={starter_watchpost:"road_wardens",roadside_hall:"road_wardens",mountain_workshop:"dwarven_crafters",forest_beacon:"woodland_guardians",ward_bastion:"rivendell_keepers"}[C.id];Fe&&De.addReputation(Fe,50);const Ve=K.merchant;Ve.position={...C.position};const Tt=new fn(Ve);st.addNPC(Tt);const bn={starter_watchpost:"small",roadside_hall:"medium",mountain_workshop:"medium",forest_beacon:"small",ward_bastion:"large"}[C.id]||"small",Nn=Lt(Math.floor(C.position.x),Math.floor(C.position.z),i.seed);_v(r,{x:C.position.x,y:Nn+1,z:C.position.z},bn);const Rr=Math.floor(C.position.x),Js=Math.floor(C.position.z);for(let an=-10;an<=10;an+=8)for(let Mi=-10;Mi<=10;Mi+=8)ft.markDirty(Rr+an,Nn+1,Js+Mi);C.id==="starter_watchpost"&&de.advanceObjective("ch1_embers","ch1_activate_ward",1)}else ge=`Need materials to restore ${C.name}`,ue=t.DIALOGUE.SHORT_DURATION;break}}const Td=(C,K)=>Lt(C,K,i.seed);for(const C of Bo)C.updateAI(te,Td,r);for(let C=Ae.length-1;C>=0;C--){const K=Ae[C];if(K.lifetime-=te,K.bobPhase+=te*3,K.lifetime<=0){Ae.splice(C,1);continue}const Ie=_.position.x-K.position.x,Fe=_.position.y-K.position.y,Ve=_.position.z-K.position.z;Ie*Ie+Fe*Fe+Ve*Ve<=We*We&&(g.add(K.type,K.count),ge=`Picked up ${K.count} ${K.type.replace(/_/g," ")}`,ue=1.5,Ae.splice(C,1))}for(const C of Be)Z.remove(C),C.geometry.dispose();Be=[];const Ad=new Ei(.3,.3,.3);for(const C of Ae){const K=new Ys({color:13215820}),Ie=new _n(Ad,K);Ie.position.set(C.position.x,C.position.y+Math.sin(C.bobPhase)*.15,C.position.z),Ie.rotation.y=C.bobPhase*.5,Z.add(Ie),Be.push(Ie)}xt.sync(re),sn.sync(Bo),Vi(w.getPhase());const Rd=I.getVisibilityModifier(),Ja=_l(Rd);Z.fog.near=Ja.near,Z.fog.far=Ja.far;const wd=Math.sqrt((_.position.x-t.CORRUPTION.CENTER_X)**2+(_.position.z-t.CORRUPTION.CENTER_Z)**2),ec=Math.max(0,1-wd/t.CORRUPTION.RADIUS);if(ec>t.CORRUPTION.FOG_THRESHOLD){const C=bx(ec);Z.fog.color.setRGB(C.r,C.g,C.b)}if(me.rotation.order="YXZ",me.rotation.y=-_.yaw,me.rotation.x=_.pitch,_.cameraMode==="third_person_behind"){const C=t.CAMERA.THIRD_PERSON_DISTANCE,K=t.CAMERA.THIRD_PERSON_EYE_HEIGHT,Ie=Mn(_);me.position.set(_.position.x-Ie.x*C,_.position.y+K-Ie.y*C,_.position.z-Ie.z*C)}else me.position.set(_.position.x,_.position.y+t.CAMERA.FIRST_PERSON_EYE_HEIGHT,_.position.z);d.update(_.position.x,_.position.z),s.style.display!=="none"&&!d.isLoading()&&(d.consumeMeshDirtyChunks(),ft.update(_.position.x,_.position.z,t.CHUNKS.RENDER_DISTANCE),s.style.display="none");const tc=d.consumeMeshDirtyChunks();tc.size>0&&ft.invalidateChunks(tc),s.style.display==="none"&&ft.update(_.position.x,_.position.z,t.CHUNKS.RENDER_DISTANCE),V.render(Z,me);const Cd=w.getPhase(),Ot=ov({survivalStats:m,questSystem:de,compass:Re,playerYaw:_.yaw,playerPos:_.position,fearSystem:oe,experienceSystem:M,statusEffects:q}),Id=g.getItems().slice(0,8).map(C=>`${C.type}:${C.count}`).join(" "),nc=re.length,Od=_.crouching?" [Crouching]":"",Dd=R._guarding?" [Guard]":"",Ld=I.current,Pd=Math.round(P.getRevealedPercentage()),Nd=Ot.activeQuestName?` | Quest: ${Ot.activeQuestName}`:"",Ud=Ot.compassCardinal?` ${Ot.compassCardinal}`:"",ic=Ot.fearLevel,kd=document.getElementById("hotbar-bar");let rc="";for(let C=0;C<8;C++){const K=$.getSlot(C),Ie=C===$.selectedSlot?" selected":"",Fe=K?Ho(K.type):"",Ve=K?K.type.replace(/_/g," "):"",Tt=K?K.count:"";rc+=`<div class="slot${Ie}"><span class="num">${C+1}</span><div style="font-size:18px">${Fe}</div><span class="item-name">${Ve}</span><span class="item-count">${Tt}</span></div>`}kd.innerHTML=rc;const sc=zo(st,_.position,t.NPC.INTERACT_RANGE),Fd=sc?`<div style="color:#c9a84c;margin-top:4px">[T] Talk to ${sc.name}</div>`:"",Bd=ge?`<div style="color:#eee;background:rgba(0,0,0,0.6);padding:6px 10px;margin-top:6px;border-radius:4px;max-width:400px">${ge}</div>`:"";let oc="";for(const C of Ur)if(!C.restored&&As(_.position,C.position,t.RESTORATION.HINT_RANGE)){const K=C.requirements.map(Ie=>`${Ie.count} ${Ie.type.replace(/_/g," ")}`).join(", ");oc=`<div style="color:#aed581;margin-top:4px">[R] Restore ${C.name} (needs: ${K})</div>`;break}const zd=Ot.statusEffects.length>0?`<div style="margin-top:2px;font-size:11px;color:#aed581">${Ot.statusEffects.map(C=>`${C.type.replace(/_/g," ")} ${Math.ceil(C.remaining)}s`).join(" | ")}</div>`:"";$r.innerHTML=`
      <div>${i.characterName?i.characterName+" — ":""}${u.name} ${T.name} Lv${Ot.level} | Day ${w.day} — ${Cd} | ${Me.name} | ${Ld}${Ud}${Od}${Dd}${v.enabled?" [CREATIVE]":""}</div>
      <div>HP: ${Ot.health}/${Ot.maxHealth} | STA: ${Ot.stamina} | HUN: ${Ot.hunger} | FOC: ${Ot.focus} | ${Ot.tempLabel}${ic>0?` | Fear: ${ic}`:""}${Nd}</div>
      <div style="margin-top:2px;font-size:11px;color:#888">Pos: ${Ot.playerX}, ${Ot.playerZ} | ${Id||"empty"}${nc?` | Enemies: ${nc}`:""} | Map: ${Pd}%</div>
      ${zd}
      ${Fd}${oc}${Bd}
    `,document.getElementById("health-bar-fill").style.width=`${Ot.health/Ot.maxHealth*100}%`,document.getElementById("stamina-bar-fill").style.width=`${Ot.stamina}%`,document.getElementById("hunger-bar-fill").style.width=`${Ot.hunger}%`,Ze.isBreaking()?(document.getElementById("break-bar").style.display="block",document.getElementById("break-fill").style.width=`${Math.round(Ze.getProgress()*100)}%`):document.getElementById("break-bar").style.display="none"}window.addEventListener("resize",()=>{V.setSize(window.innerWidth,window.innerHeight),me.aspect=window.innerWidth/window.innerHeight,me.updateProjectionMatrix()}),requestAnimationFrame(ke)}
