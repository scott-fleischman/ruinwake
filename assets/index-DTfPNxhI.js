(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const La="175",Bd=0,nc=1,zd=2,bl=1,Hd=2,Kn=3,mi=0,Jt=1,jn=2,fi=0,ur=1,ic=2,rc=3,sc=4,Gd=5,Li=100,Vd=101,Wd=102,Xd=103,qd=104,Kd=200,Yd=201,$d=202,jd=203,Bo=204,zo=205,Zd=206,Qd=207,Jd=208,eh=209,th=210,nh=211,ih=212,rh=213,sh=214,Ho=0,Go=1,Vo=2,_r=3,Wo=4,Xo=5,qo=6,Ko=7,Pa=0,oh=1,ah=2,pi=0,ch=1,lh=2,dh=3,hh=4,uh=5,fh=6,ph=7,Al=300,gr=301,vr=302,Yo=303,$o=304,Vs=306,jo=1e3,Ui=1001,Zo=1002,In=1003,mh=1004,Jr=1005,Un=1006,Zs=1007,ki=1008,ni=1009,Rl=1010,wl=1011,Ur=1012,Na=1013,Fi=1014,Qn=1015,Hr=1016,Ua=1017,ka=1018,kr=1020,Cl=35902,Il=1021,Ol=1022,Cn=1023,Dl=1024,Ll=1025,Fr=1026,Br=1027,Pl=1028,Fa=1029,Nl=1030,Ba=1031,za=1033,ws=33776,Cs=33777,Is=33778,Os=33779,Qo=35840,Jo=35841,ea=35842,ta=35843,na=36196,ia=37492,ra=37496,sa=37808,oa=37809,aa=37810,ca=37811,la=37812,da=37813,ha=37814,ua=37815,fa=37816,pa=37817,ma=37818,_a=37819,ga=37820,va=37821,Ds=36492,xa=36494,ya=36495,Ul=36283,Ea=36284,Sa=36285,Ma=36286,_h=3200,gh=3201,kl=0,vh=1,ui="",vn="srgb",xr="srgb-linear",Fs="linear",yt="srgb",Wi=7680,oc=519,xh=512,yh=513,Eh=514,Fl=515,Sh=516,Mh=517,Th=518,bh=519,ac=35044,cc="300 es",Jn=2e3,Bs=2001;class Er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qs=Math.PI/180,Ta=180/Math.PI;function Gr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Ah(i,e){return(i%e+e)%e}function Js(i,e,t){return(1-t)*i+t*e}function br(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,r,s,o,a,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],m=n[8],g=r[0],_=r[3],u=r[6],C=r[1],b=r[4],S=r[7],R=r[2],A=r[5],I=r[8];return s[0]=o*g+a*C+c*R,s[3]=o*_+a*b+c*A,s[6]=o*u+a*S+c*I,s[1]=l*g+h*C+d*R,s[4]=l*_+h*b+d*A,s[7]=l*u+h*S+d*I,s[2]=f*g+p*C+m*R,s[5]=f*_+p*b+m*A,s[8]=f*u+p*S+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,f=a*c-h*s,p=l*s-o*c,m=t*d+n*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=d*g,e[1]=(r*l-h*n)*g,e[2]=(a*n-r*o)*g,e[3]=f*g,e[4]=(h*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(eo.makeScale(e,t)),this}rotate(e){return this.premultiply(eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new je;function Bl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rh(){const i=zs("canvas");return i.style.display="block",i}const lc={};function Ls(i){i in lc||(lc[i]=!0,console.warn(i))}function wh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Ch(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ih(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dc=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Oh(){const i={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===yt&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(r.r=fr(r.r),r.g=fr(r.g),r.b=fr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ui?Fs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xr]:{primaries:e,whitePoint:n,transfer:Fs,toXYZ:dc,fromXYZ:hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:dc,fromXYZ:hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),i}const mt=Oh();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xi;class Dh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=zs("canvas")),Xi.width=e.width,Xi.height=e.height;const r=Xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lh=0;class Ha{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Gr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(to(r[o].image)):s.push(to(r[o]))}else s=to(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function to(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ph=0;class en extends Er{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=Ui,r=Ui,s=Un,o=ki,a=Cn,c=ni,l=en.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Gr(),this.name="",this.source=new Ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jo:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jo:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Al;en.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,n=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],m=c[9],g=c[2],_=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(m+_)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,S=(p+1)/2,R=(u+1)/2,A=(h+f)/4,I=(d+g)/4,P=(m+_)/4;return b>S&&b>R?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=A/n,s=I/n):S>R?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=A/r,s=P/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=I/s,r=P/s),this.set(n,r,s,t),this}let C=Math.sqrt((_-m)*(_-m)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(_-m)/C,this.y=(d-g)/C,this.z=(f-h)/C,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nh extends Er{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new en(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ha(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends Nh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zl extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uh extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],p=s[o+1],m=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=g;return}if(d!==g||c!==f||l!==p||h!==m){let _=1-a;const u=c*f+l*p+h*m+d*g,C=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const R=Math.sqrt(b),A=Math.atan2(R,u*C);_=Math.sin(_*A)/R,a=Math.sin(a*A)/R}const S=a*C;if(c=c*_+f*S,l=l*_+p*S,h=h*_+m*S,d=d*_+g*S,_===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+h*d+c*p-l*f,e[t+1]=c*m+h*f+l*d-a*p,e[t+2]=l*m+h*p+a*f-c*d,e[t+3]=h*m-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),d=a(s/2),f=c(n/2),p=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"YXZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"ZXY":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"ZYX":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"YZX":this._x=f*h*d+l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d-f*p*m;break;case"XZY":this._x=f*h*d-l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-s*d,this.z=r+c*d+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return no.copy(this).projectOnVector(e),this.sub(no)}reflect(e){return this.sub(no.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new V,uc=new Vr;class Wr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox)),es.applyMatrix4(e.matrixWorld),this.union(es)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),ts.subVectors(this.max,Ar),qi.subVectors(e.a,Ar),Ki.subVectors(e.b,Ar),Yi.subVectors(e.c,Ar),ri.subVectors(Ki,qi),si.subVectors(Yi,Ki),Ei.subVectors(qi,Yi);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ei.z,Ei.y,ri.z,0,-ri.x,si.z,0,-si.x,Ei.z,0,-Ei.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ei.y,Ei.x,0];return!io(t,qi,Ki,Yi,ts)||(t=[1,0,0,0,1,0,0,0,1],!io(t,qi,Ki,Yi,ts))?!1:(ns.crossVectors(ri,si),t=[ns.x,ns.y,ns.z],io(t,qi,Ki,Yi,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new V,new V,new V,new V,new V,new V,new V,new V],Mn=new V,es=new Wr,qi=new V,Ki=new V,Yi=new V,ri=new V,si=new V,Ei=new V,Ar=new V,ts=new V,ns=new V,Si=new V;function io(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Si.fromArray(i,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),c=e.dot(Si),l=t.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const kh=new Wr,Rr=new V,ro=new V;class Ga{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Rr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(ro)),this.expandByPoint(Rr.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new V,so=new V,is=new V,oi=new V,oo=new V,rs=new V,ao=new V;class Fh{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){so.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(so);const s=e.distanceTo(t)*.5,o=-this.direction.dot(is),a=oi.dot(this.direction),c=-oi.dot(is),l=oi.lengthSq(),h=Math.abs(1-o*o);let d,f,p,m;if(h>0)if(d=o*c-a,f=o*a-c,m=s*h,d>=0)if(f>=-m)if(f<=m){const g=1/h;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(so).addScaledVector(is,f),p}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),r=Gn.dot(Gn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,r,s){oo.subVectors(t,e),rs.subVectors(n,e),ao.crossVectors(oo,rs);let o=this.direction.dot(ao),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const c=a*this.direction.dot(rs.crossVectors(oi,rs));if(c<0)return null;const l=a*this.direction.dot(oo.cross(oi));if(l<0||c+l>o)return null;const h=-a*oi.dot(ao);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,n,r,s,o,a,c,l,h,d,f,p,m,g,_){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,d,f,p,m,g,_)}set(e,t,n,r,s,o,a,c,l,h,d,f,p,m,g,_){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=m,u[11]=g,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/$i.setFromMatrixColumn(e,0).length(),s=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*d,m=a*h,g=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+m*l,t[5]=f-g*l,t[9]=-a*c,t[2]=g-f*l,t[6]=m+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,p=c*d,m=l*h,g=l*d;t[0]=f+g*a,t[4]=m*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-m,t[6]=g+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,p=c*d,m=l*h,g=l*d;t[0]=f-g*a,t[4]=-o*d,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,p=o*d,m=a*h,g=a*d;t[0]=c*h,t[4]=m*l-p,t[8]=f*l+g,t[1]=c*d,t[5]=g*l+f,t[9]=p*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,m=a*c,g=a*l;t[0]=c*h,t[4]=g-f*d,t[8]=m*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*d+m,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*c,p=o*l,m=a*c,g=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+g,t[5]=o*h,t[9]=p*d-m,t[2]=m*d-p,t[6]=a*h,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bh,e,zh)}lookAt(e,t,n){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ai.crossVectors(n,sn),ai.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ai.crossVectors(n,sn)),ai.normalize(),ss.crossVectors(sn,ai),r[0]=ai.x,r[4]=ss.x,r[8]=sn.x,r[1]=ai.y,r[5]=ss.y,r[9]=sn.y,r[2]=ai.z,r[6]=ss.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],m=n[2],g=n[6],_=n[10],u=n[14],C=n[3],b=n[7],S=n[11],R=n[15],A=r[0],I=r[4],P=r[8],M=r[12],E=r[1],D=r[5],j=r[9],B=r[13],$=r[2],re=r[6],Z=r[10],te=r[14],X=r[3],ae=r[7],be=r[11],Ie=r[15];return s[0]=o*A+a*E+c*$+l*X,s[4]=o*I+a*D+c*re+l*ae,s[8]=o*P+a*j+c*Z+l*be,s[12]=o*M+a*B+c*te+l*Ie,s[1]=h*A+d*E+f*$+p*X,s[5]=h*I+d*D+f*re+p*ae,s[9]=h*P+d*j+f*Z+p*be,s[13]=h*M+d*B+f*te+p*Ie,s[2]=m*A+g*E+_*$+u*X,s[6]=m*I+g*D+_*re+u*ae,s[10]=m*P+g*j+_*Z+u*be,s[14]=m*M+g*B+_*te+u*Ie,s[3]=C*A+b*E+S*$+R*X,s[7]=C*I+b*D+S*re+R*ae,s[11]=C*P+b*j+S*Z+R*be,s[15]=C*M+b*B+S*te+R*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],p=e[14],m=e[3],g=e[7],_=e[11],u=e[15];return m*(+s*c*d-r*l*d-s*a*f+n*l*f+r*a*p-n*c*p)+g*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*h-s*c*h)+_*(+t*l*d-t*a*p-s*o*d+n*o*p+s*a*h-n*l*h)+u*(-r*a*h-t*c*d+t*a*f+r*o*d-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],p=e[11],m=e[12],g=e[13],_=e[14],u=e[15],C=d*_*l-g*f*l+g*c*p-a*_*p-d*c*u+a*f*u,b=m*f*l-h*_*l-m*c*p+o*_*p+h*c*u-o*f*u,S=h*g*l-m*d*l+m*a*p-o*g*p-h*a*u+o*d*u,R=m*d*c-h*g*c-m*a*f+o*g*f+h*a*_-o*d*_,A=t*C+n*b+r*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/A;return e[0]=C*I,e[1]=(g*f*s-d*_*s-g*r*p+n*_*p+d*r*u-n*f*u)*I,e[2]=(a*_*s-g*c*s+g*r*l-n*_*l-a*r*u+n*c*u)*I,e[3]=(d*c*s-a*f*s-d*r*l+n*f*l+a*r*p-n*c*p)*I,e[4]=b*I,e[5]=(h*_*s-m*f*s+m*r*p-t*_*p-h*r*u+t*f*u)*I,e[6]=(m*c*s-o*_*s-m*r*l+t*_*l+o*r*u-t*c*u)*I,e[7]=(o*f*s-h*c*s+h*r*l-t*f*l-o*r*p+t*c*p)*I,e[8]=S*I,e[9]=(m*d*s-h*g*s-m*n*p+t*g*p+h*n*u-t*d*u)*I,e[10]=(o*g*s-m*a*s+m*n*l-t*g*l-o*n*u+t*a*u)*I,e[11]=(h*a*s-o*d*s-h*n*l+t*d*l+o*n*p-t*a*p)*I,e[12]=R*I,e[13]=(h*g*r-m*d*r+m*n*f-t*g*f-h*n*_+t*d*_)*I,e[14]=(m*a*r-o*g*r-m*n*c+t*g*c+o*n*_-t*a*_)*I,e[15]=(o*d*r-h*a*r+h*n*c-t*d*c-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,d=a+a,f=s*l,p=s*h,m=s*d,g=o*h,_=o*d,u=a*d,C=c*l,b=c*h,S=c*d,R=n.x,A=n.y,I=n.z;return r[0]=(1-(g+u))*R,r[1]=(p+S)*R,r[2]=(m-b)*R,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+u))*A,r[6]=(_+C)*A,r[7]=0,r[8]=(m+b)*I,r[9]=(_-C)*I,r[10]=(1-(f+g))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=$i.set(r[0],r[1],r[2]).length();const o=$i.set(r[4],r[5],r[6]).length(),a=$i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);const l=1/s,h=1/o,d=1/a;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,t.setFromRotationMatrix(Tn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Jn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let p,m;if(a===Jn)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Bs)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Jn){const c=this.elements,l=1/(t-e),h=1/(n-r),d=1/(o-s),f=(t+e)*l,p=(n+r)*h;let m,g;if(a===Jn)m=(o+s)*d,g=-2*d;else if(a===Bs)m=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new V,Tn=new wt,Bh=new V(0,0,0),zh=new V(1,1,1),ai=new V,ss=new V,sn=new V,fc=new wt,pc=new Vr;class Bn{constructor(e=0,t=0,n=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pc.setFromEuler(this),this.setFromQuaternion(pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hh=0;const mc=new V,ji=new Vr,Vn=new wt,os=new V,wr=new V,Gh=new V,Vh=new Vr,_c=new V(1,0,0),gc=new V(0,1,0),vc=new V(0,0,1),xc={type:"added"},Wh={type:"removed"},Zi={type:"childadded",child:null},co={type:"childremoved",child:null};class Wt extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new V,t=new Bn,n=new Vr,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new je}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(_c,e)}rotateY(e){return this.rotateOnAxis(gc,e)}rotateZ(e){return this.rotateOnAxis(vc,e)}translateOnAxis(e,t){return mc.copy(e).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_c,e)}translateY(e){return this.translateOnAxis(gc,e)}translateZ(e){return this.translateOnAxis(vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(wr,os,this.up):Vn.lookAt(os,wr,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(Vn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wh),co.child=e,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Gh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Vh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new V(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new V,Wn=new V,lo=new V,Xn=new V,Qi=new V,Ji=new V,yc=new V,ho=new V,uo=new V,fo=new V,po=new Rt,mo=new Rt,_o=new Rt;class wn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){bn.subVectors(r,t),Wn.subVectors(n,t),lo.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Wn),c=bn.dot(lo),l=Wn.dot(Wn),h=Wn.dot(lo),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(l*c-a*h)*f,m=(o*h-a*c)*f;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return po.setScalar(0),mo.setScalar(0),_o.setScalar(0),po.fromBufferAttribute(e,t),mo.fromBufferAttribute(e,n),_o.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(po,s.x),o.addScaledVector(mo,s.y),o.addScaledVector(_o,s.z),o}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),Wn.subVectors(e,t),bn.cross(Wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),bn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Qi.subVectors(r,n),Ji.subVectors(s,n),ho.subVectors(e,n);const c=Qi.dot(ho),l=Ji.dot(ho);if(c<=0&&l<=0)return t.copy(n);uo.subVectors(e,r);const h=Qi.dot(uo),d=Ji.dot(uo);if(h>=0&&d<=h)return t.copy(r);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Qi,o);fo.subVectors(e,s);const p=Qi.dot(fo),m=Ji.dot(fo);if(m>=0&&p<=m)return t.copy(s);const g=p*l-c*m;if(g<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Ji,a);const _=h*m-p*d;if(_<=0&&d-h>=0&&p-m>=0)return yc.subVectors(s,r),a=(d-h)/(d-h+(p-m)),t.copy(r).addScaledVector(yc,a);const u=1/(_+g+f);return o=g*u,a=f*u,t.copy(n).addScaledVector(Qi,o).addScaledVector(Ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},as={h:0,s:0,l:0};function go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=mt.workingColorSpace){if(e=Ah(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=go(o,s,e+1/3),this.g=go(o,s,e),this.b=go(o,s,e-1/3)}return mt.toWorkingColorSpace(this,r),this}setStyle(e,t=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const n=Gl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return mt.fromWorkingColorSpace(Vt.copy(this),e),Math.round(st(Vt.r*255,0,255))*65536+Math.round(st(Vt.g*255,0,255))*256+Math.round(st(Vt.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=vn){mt.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,r=Vt.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(as);const n=Js(ci.h,as.h,t),r=Js(ci.s,as.s,t),s=Js(ci.l,as.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new _t;_t.NAMES=Gl;let Xh=0;class Xr extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=ur,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=zo,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bo&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vl extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new V,cs=new vt;let qh=0;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ac,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=br(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=br(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=br(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=br(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),e}}class Wl extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xl extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ti extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Kh=0;const pn=new wt,vo=new Wt,er=new V,on=new Wr,Cr=new Wr,kt=new V;class gi extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bl(e)?Xl:Wl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ti(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(on.min,Cr.min),on.expandByPoint(kt),kt.addVectors(on.max,Cr.max),on.expandByPoint(kt)):(on.expandByPoint(Cr.min),on.expandByPoint(Cr.max))}on.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)kt.fromBufferAttribute(a,l),c&&(er.fromBufferAttribute(e,l),kt.add(er)),r=Math.max(r,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new V,c[P]=new V;const l=new V,h=new V,d=new V,f=new vt,p=new vt,m=new vt,g=new V,_=new V;function u(P,M,E){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,E),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,M),m.fromBufferAttribute(s,E),h.sub(l),d.sub(l),p.sub(f),m.sub(f);const D=1/(p.x*m.y-m.x*p.y);isFinite(D)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(D),_.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(D),a[P].add(g),a[M].add(g),a[E].add(g),c[P].add(_),c[M].add(_),c[E].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let P=0,M=C.length;P<M;++P){const E=C[P],D=E.start,j=E.count;for(let B=D,$=D+j;B<$;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new V,S=new V,R=new V,A=new V;function I(P){R.fromBufferAttribute(r,P),A.copy(R);const M=a[P];b.copy(M),b.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(A,M);const D=S.dot(c[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,D)}for(let P=0,M=C.length;P<M;++P){const E=C[P],D=E.start,j=E.count;for(let B=D,$=D+j;B<$;B+=3)I(e.getX(B+0)),I(e.getX(B+1)),I(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new V,s=new V,o=new V,a=new V,c=new V,l=new V,h=new V,d=new V;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),g=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let p=0,m=0;for(let g=0,_=c.length;g<_;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let u=0;u<h;u++)f[m++]=l[p++]}return new Fn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ec=new wt,Mi=new Fh,ls=new Ga,Sc=new V,ds=new V,hs=new V,us=new V,xo=new V,fs=new V,Mc=new V,ps=new V;class fn extends Wt{constructor(e=new gi,t=new Vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(xo.fromBufferAttribute(d,e),o?fs.addScaledVector(xo,h):fs.addScaledVector(xo.sub(t),h))}t.add(fs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(ls.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(ls,Sc)===null||Mi.origin.distanceToSquared(Sc)>(e.far-e.near)**2))&&(Ec.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(Ec),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const _=f[m],u=o[_.materialIndex],C=Math.max(_.start,p.start),b=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let S=C,R=b;S<R;S+=3){const A=a.getX(S),I=a.getX(S+1),P=a.getX(S+2);r=ms(this,u,e,n,l,h,d,A,I,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let _=m,u=g;_<u;_+=3){const C=a.getX(_),b=a.getX(_+1),S=a.getX(_+2);r=ms(this,o,e,n,l,h,d,C,b,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const _=f[m],u=o[_.materialIndex],C=Math.max(_.start,p.start),b=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let S=C,R=b;S<R;S+=3){const A=S,I=S+1,P=S+2;r=ms(this,u,e,n,l,h,d,A,I,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let _=m,u=g;_<u;_+=3){const C=_,b=_+1,S=_+2;r=ms(this,o,e,n,l,h,d,C,b,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Yh(i,e,t,n,r,s,o,a){let c;if(e.side===Jt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===mi,a),c===null)return null;ps.copy(a),ps.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ps);return l<t.near||l>t.far?null:{distance:l,point:ps.clone(),object:i}}function ms(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,ds),i.getVertexPosition(c,hs),i.getVertexPosition(l,us);const h=Yh(i,e,t,n,ds,hs,us,Mc);if(h){const d=new V;wn.getBarycoord(Mc,ds,hs,us,d),r&&(h.uv=wn.getInterpolatedAttribute(r,a,c,l,d,new vt)),s&&(h.uv1=wn.getInterpolatedAttribute(s,a,c,l,d,new vt)),o&&(h.normal=wn.getInterpolatedAttribute(o,a,c,l,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new V,materialIndex:0};wn.getNormal(ds,hs,us,f.normal),h.face=f,h.barycoord=d}return h}class vi extends gi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let f=0,p=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ti(l,3)),this.setAttribute("normal",new ti(h,3)),this.setAttribute("uv",new ti(d,2));function m(g,_,u,C,b,S,R,A,I,P,M){const E=S/I,D=R/P,j=S/2,B=R/2,$=A/2,re=I+1,Z=P+1;let te=0,X=0;const ae=new V;for(let be=0;be<Z;be++){const Ie=be*D-B;for(let Qe=0;Qe<re;Qe++){const it=Qe*E-j;ae[g]=it*C,ae[_]=Ie*b,ae[u]=$,l.push(ae.x,ae.y,ae.z),ae[g]=0,ae[_]=0,ae[u]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(Qe/I),d.push(1-be/P),te+=1}}for(let be=0;be<P;be++)for(let Ie=0;Ie<I;Ie++){const Qe=f+Ie+re*be,it=f+Ie+re*(be+1),K=f+(Ie+1)+re*(be+1),fe=f+(Ie+1)+re*be;c.push(Qe,it,fe),c.push(it,K,fe),X+=6}a.addGroup(p,X,M),p+=X,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=yr(i[t]);for(const r in n)e[r]=n[r]}return e}function $h(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ql(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const jh={clone:yr,merge:Kt};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=Qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=$h(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kl extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new V,Tc=new vt,bc=new vt;class xn extends Kl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Tc,bc),t.subVectors(bc,Tc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class Jh extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(tr,nr,e,t);r.layers=this.layers,this.add(r);const s=new xn(tr,nr,e,t);s.layers=this.layers,this.add(s);const o=new xn(tr,nr,e,t);o.layers=this.layers,this.add(o);const a=new xn(tr,nr,e,t);a.layers=this.layers,this.add(a);const c=new xn(tr,nr,e,t);c.layers=this.layers,this.add(c);const l=new xn(tr,nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Yl extends en{constructor(e=[],t=gr,n,r,s,o,a,c,l,h){super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eu extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vi(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:fi});s.uniforms.tEquirect.value=t;const o=new fn(r,s),a=t.minFilter;return t.minFilter===ki&&(t.minFilter=Un),new Jh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class dr extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tu={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),u=this._getHandJoint(l,g);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tu)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Va{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _t(e),this.near=t,this.far=n}clone(){return new Va(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nu extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Eo=new V,iu=new V,ru=new je;class Ii{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Eo.subVectors(n,t).cross(iu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Eo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ru.getNormalMatrix(e),r=this.coplanarPoint(Eo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Ga,_s=new V;class Wa{constructor(e=new Ii,t=new Ii,n=new Ii,r=new Ii,s=new Ii,o=new Ii){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],d=r[6],f=r[7],p=r[8],m=r[9],g=r[10],_=r[11],u=r[12],C=r[13],b=r[14],S=r[15];if(n[0].setComponents(c-s,f-l,_-p,S-u).normalize(),n[1].setComponents(c+s,f+l,_+p,S+u).normalize(),n[2].setComponents(c+o,f+h,_+m,S+C).normalize(),n[3].setComponents(c-o,f-h,_-m,S-C).normalize(),n[4].setComponents(c-a,f-d,_-g,S-b).normalize(),t===Jn)n[5].setComponents(c+a,f+d,_+g,S+b).normalize();else if(t===Bs)n[5].setComponents(a,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(_s.x=r.normal.x>0?e.max.x:e.min.x,_s.y=r.normal.y>0?e.max.y:e.min.y,_s.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $l extends en{constructor(e,t,n=Fi,r,s,o,a=In,c=In,l,h=Fr){if(h!==Fr&&h!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ha(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ws extends gi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,d=e/a,f=t/c,p=[],m=[],g=[],_=[];for(let u=0;u<h;u++){const C=u*f-o;for(let b=0;b<l;b++){const S=b*d-s;m.push(S,-C,0),g.push(0,0,1),_.push(b/a),_.push(1-u/c)}}for(let u=0;u<c;u++)for(let C=0;C<a;C++){const b=C+l*u,S=C+l*(u+1),R=C+1+l*(u+1),A=C+1+l*u;p.push(b,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new ti(m,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xs extends Xr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class su extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ou extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jl extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const So=new wt,Ac=new V,Rc=new V;class au{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ac),Rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rc),t.updateMatrixWorld(),So.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(So)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zl extends Kl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cu extends au{constructor(){super(new Zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lu extends jl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new cu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class du extends jl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hu extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function wc(i,e,t,n){const r=uu(n);switch(t){case Il:return i*e;case Dl:return i*e;case Ll:return i*e*2;case Pl:return i*e/r.components*r.byteLength;case Fa:return i*e/r.components*r.byteLength;case Nl:return i*e*2/r.components*r.byteLength;case Ba:return i*e*2/r.components*r.byteLength;case Ol:return i*e*3/r.components*r.byteLength;case Cn:return i*e*4/r.components*r.byteLength;case za:return i*e*4/r.components*r.byteLength;case ws:case Cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Is:case Os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:case ta:return Math.max(i,16)*Math.max(e,8)/4;case Qo:case ea:return Math.max(i,8)*Math.max(e,8)/2;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ds:case xa:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ul:case Ea:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sa:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uu(i){switch(i){case ni:case Rl:return{byteLength:1,components:1};case Ur:case wl:case Hr:return{byteLength:2,components:1};case Ua:case ka:return{byteLength:2,components:4};case Fi:case Na:case Qn:return{byteLength:4,components:1};case Cl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);function Ql(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function fu(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){const m=d[f],g=d[p];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,d[f]=g)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){const g=d[p];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mu=`#ifdef USE_ALPHAHASH
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
#endif`,_u=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yu=`#ifdef USE_AOMAP
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
#endif`,Eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Su=`#ifdef USE_BATCHING
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
#endif`,Mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Au=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ru=`#ifdef USE_IRIDESCENCE
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
#endif`,wu=`#ifdef USE_BUMPMAP
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
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ku=`#define PI 3.141592653589793
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
} // validated`,Fu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bu=`vec3 transformedNormal = objectNormal;
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
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qu=`#ifdef USE_ENVMAP
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
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,$u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ju=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tf=`#ifdef USE_GRADIENTMAP
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
}`,nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,of=`uniform bool receiveShadow;
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
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uf=`PhysicalMaterial material;
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
#endif`,ff=`struct PhysicalMaterial {
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
}`,pf=`
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
#endif`,mf=`#if defined( RE_IndirectDiffuse )
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
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tf=`#if defined( USE_POINTS_UV )
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
#endif`,bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
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
#endif`,Of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
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
#endif`,Ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jf=`float getShadowMask() {
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
}`,ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`#include <common>
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
}`,Ep=`#if DEPTH_PACKING == 3200
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
}`,Sp=`#define DISTANCE
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
}`,Mp=`#define DISTANCE
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`uniform float scale;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Op=`#define LAMBERT
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
}`,Dp=`#define MATCAP
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
}`,Lp=`#define MATCAP
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
}`,Pp=`#define NORMAL
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
}`,Np=`#define NORMAL
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
}`,Up=`#define PHONG
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
}`,kp=`#define PHONG
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
}`,Fp=`#define STANDARD
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
}`,Bp=`#define STANDARD
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
}`,zp=`#define TOON
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
}`,Hp=`#define TOON
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
}`,Gp=`uniform float size;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 color;
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
}`,qp=`uniform float rotation;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:pu,alphahash_pars_fragment:mu,alphamap_fragment:_u,alphamap_pars_fragment:gu,alphatest_fragment:vu,alphatest_pars_fragment:xu,aomap_fragment:yu,aomap_pars_fragment:Eu,batching_pars_vertex:Su,batching_vertex:Mu,begin_vertex:Tu,beginnormal_vertex:bu,bsdfs:Au,iridescence_fragment:Ru,bumpmap_pars_fragment:wu,clipping_planes_fragment:Cu,clipping_planes_pars_fragment:Iu,clipping_planes_pars_vertex:Ou,clipping_planes_vertex:Du,color_fragment:Lu,color_pars_fragment:Pu,color_pars_vertex:Nu,color_vertex:Uu,common:ku,cube_uv_reflection_fragment:Fu,defaultnormal_vertex:Bu,displacementmap_pars_vertex:zu,displacementmap_vertex:Hu,emissivemap_fragment:Gu,emissivemap_pars_fragment:Vu,colorspace_fragment:Wu,colorspace_pars_fragment:Xu,envmap_fragment:qu,envmap_common_pars_fragment:Ku,envmap_pars_fragment:Yu,envmap_pars_vertex:$u,envmap_physical_pars_fragment:af,envmap_vertex:ju,fog_vertex:Zu,fog_pars_vertex:Qu,fog_fragment:Ju,fog_pars_fragment:ef,gradientmap_pars_fragment:tf,lightmap_pars_fragment:nf,lights_lambert_fragment:rf,lights_lambert_pars_fragment:sf,lights_pars_begin:of,lights_toon_fragment:cf,lights_toon_pars_fragment:lf,lights_phong_fragment:df,lights_phong_pars_fragment:hf,lights_physical_fragment:uf,lights_physical_pars_fragment:ff,lights_fragment_begin:pf,lights_fragment_maps:mf,lights_fragment_end:_f,logdepthbuf_fragment:gf,logdepthbuf_pars_fragment:vf,logdepthbuf_pars_vertex:xf,logdepthbuf_vertex:yf,map_fragment:Ef,map_pars_fragment:Sf,map_particle_fragment:Mf,map_particle_pars_fragment:Tf,metalnessmap_fragment:bf,metalnessmap_pars_fragment:Af,morphinstance_vertex:Rf,morphcolor_vertex:wf,morphnormal_vertex:Cf,morphtarget_pars_vertex:If,morphtarget_vertex:Of,normal_fragment_begin:Df,normal_fragment_maps:Lf,normal_pars_fragment:Pf,normal_pars_vertex:Nf,normal_vertex:Uf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Bf,clearcoat_pars_fragment:zf,iridescence_pars_fragment:Hf,opaque_fragment:Gf,packing:Vf,premultiplied_alpha_fragment:Wf,project_vertex:Xf,dithering_fragment:qf,dithering_pars_fragment:Kf,roughnessmap_fragment:Yf,roughnessmap_pars_fragment:$f,shadowmap_pars_fragment:jf,shadowmap_pars_vertex:Zf,shadowmap_vertex:Qf,shadowmask_pars_fragment:Jf,skinbase_vertex:ep,skinning_pars_vertex:tp,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:rp,specularmap_pars_fragment:sp,tonemapping_fragment:op,tonemapping_pars_fragment:ap,transmission_fragment:cp,transmission_pars_fragment:lp,uv_pars_fragment:dp,uv_pars_vertex:hp,uv_vertex:up,worldpos_vertex:fp,background_vert:pp,background_frag:mp,backgroundCube_vert:_p,backgroundCube_frag:gp,cube_vert:vp,cube_frag:xp,depth_vert:yp,depth_frag:Ep,distanceRGBA_vert:Sp,distanceRGBA_frag:Mp,equirect_vert:Tp,equirect_frag:bp,linedashed_vert:Ap,linedashed_frag:Rp,meshbasic_vert:wp,meshbasic_frag:Cp,meshlambert_vert:Ip,meshlambert_frag:Op,meshmatcap_vert:Dp,meshmatcap_frag:Lp,meshnormal_vert:Pp,meshnormal_frag:Np,meshphong_vert:Up,meshphong_frag:kp,meshphysical_vert:Fp,meshphysical_frag:Bp,meshtoon_vert:zp,meshtoon_frag:Hp,points_vert:Gp,points_frag:Vp,shadow_vert:Wp,shadow_frag:Xp,sprite_vert:qp,sprite_frag:Kp},ye={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Nn={basic:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Kt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Kt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Kt([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Kt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Kt([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Kt([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Kt([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Kt([ye.lights,ye.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Nn.physical={uniforms:Kt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const gs={r:0,b:0,g:0},bi=new Bn,Yp=new wt;function $p(i,e,t,n,r,s,o){const a=new _t(0);let c=s===!0?0:1,l,h,d=null,f=0,p=null;function m(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function g(b){let S=!1;const R=m(b);R===null?u(a,c):R&&R.isColor&&(u(R,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,S){const R=m(S);R&&(R.isCubeTexture||R.mapping===Vs)?(h===void 0&&(h=new fn(new vi(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:yr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),bi.copy(S.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(bi)),h.material.toneMapped=mt.getTransfer(R.colorSpace)!==yt,(d!==R||f!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=R,f=R.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new fn(new Ws(2,2),new _i({name:"BackgroundMaterial",uniforms:yr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=mt.getTransfer(R.colorSpace)!==yt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=R,f=R.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function u(b,S){b.getRGB(gs,ql(i)),n.buffers.color.setClear(gs.r,gs.g,gs.b,S,o)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,u(a,c)},render:g,addToRenderList:_,dispose:C}}function jp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(E,D,j,B,$){let re=!1;const Z=d(B,j,D);s!==Z&&(s=Z,l(s.object)),re=p(E,B,j,$),re&&m(E,B,j,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,S(E,D,j,B),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function d(E,D,j){const B=j.wireframe===!0;let $=n[E.id];$===void 0&&($={},n[E.id]=$);let re=$[D.id];re===void 0&&(re={},$[D.id]=re);let Z=re[B];return Z===void 0&&(Z=f(c()),re[B]=Z),Z}function f(E){const D=[],j=[],B=[];for(let $=0;$<t;$++)D[$]=0,j[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:j,attributeDivisors:B,object:E,attributes:{},index:null}}function p(E,D,j,B){const $=s.attributes,re=D.attributes;let Z=0;const te=j.getAttributes();for(const X in te)if(te[X].location>=0){const be=$[X];let Ie=re[X];if(Ie===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(Ie=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(Ie=E.instanceColor)),be===void 0||be.attribute!==Ie||Ie&&be.data!==Ie.data)return!0;Z++}return s.attributesNum!==Z||s.index!==B}function m(E,D,j,B){const $={},re=D.attributes;let Z=0;const te=j.getAttributes();for(const X in te)if(te[X].location>=0){let be=re[X];be===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(be=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(be=E.instanceColor));const Ie={};Ie.attribute=be,be&&be.data&&(Ie.data=be.data),$[X]=Ie,Z++}s.attributes=$,s.attributesNum=Z,s.index=B}function g(){const E=s.newAttributes;for(let D=0,j=E.length;D<j;D++)E[D]=0}function _(E){u(E,0)}function u(E,D){const j=s.newAttributes,B=s.enabledAttributes,$=s.attributeDivisors;j[E]=1,B[E]===0&&(i.enableVertexAttribArray(E),B[E]=1),$[E]!==D&&(i.vertexAttribDivisor(E,D),$[E]=D)}function C(){const E=s.newAttributes,D=s.enabledAttributes;for(let j=0,B=D.length;j<B;j++)D[j]!==E[j]&&(i.disableVertexAttribArray(j),D[j]=0)}function b(E,D,j,B,$,re,Z){Z===!0?i.vertexAttribIPointer(E,D,j,$,re):i.vertexAttribPointer(E,D,j,B,$,re)}function S(E,D,j,B){g();const $=B.attributes,re=j.getAttributes(),Z=D.defaultAttributeValues;for(const te in re){const X=re[te];if(X.location>=0){let ae=$[te];if(ae===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor)),ae!==void 0){const be=ae.normalized,Ie=ae.itemSize,Qe=e.get(ae);if(Qe===void 0)continue;const it=Qe.buffer,K=Qe.type,fe=Qe.bytesPerElement,Ce=K===i.INT||K===i.UNSIGNED_INT||ae.gpuType===Na;if(ae.isInterleavedBufferAttribute){const me=ae.data,Fe=me.stride,lt=ae.offset;if(me.isInstancedInterleavedBuffer){for(let Be=0;Be<X.locationSize;Be++)u(X.location+Be,me.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Be=0;Be<X.locationSize;Be++)_(X.location+Be);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Be=0;Be<X.locationSize;Be++)b(X.location+Be,Ie/X.locationSize,K,be,Fe*fe,(lt+Ie/X.locationSize*Be)*fe,Ce)}else{if(ae.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)u(X.location+me,ae.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let me=0;me<X.locationSize;me++)_(X.location+me);i.bindBuffer(i.ARRAY_BUFFER,it);for(let me=0;me<X.locationSize;me++)b(X.location+me,Ie/X.locationSize,K,be,Ie*fe,Ie/X.locationSize*me*fe,Ce)}}else if(Z!==void 0){const be=Z[te];if(be!==void 0)switch(be.length){case 2:i.vertexAttrib2fv(X.location,be);break;case 3:i.vertexAttrib3fv(X.location,be);break;case 4:i.vertexAttrib4fv(X.location,be);break;default:i.vertexAttrib1fv(X.location,be)}}}}C()}function R(){P();for(const E in n){const D=n[E];for(const j in D){const B=D[j];for(const $ in B)h(B[$].object),delete B[$];delete D[j]}delete n[E]}}function A(E){if(n[E.id]===void 0)return;const D=n[E.id];for(const j in D){const B=D[j];for(const $ in B)h(B[$].object),delete B[$];delete D[j]}delete n[E.id]}function I(E){for(const D in n){const j=n[D];if(j[E.id]===void 0)continue;const B=j[E.id];for(const $ in B)h(B[$].object),delete B[$];delete j[E.id]}}function P(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:_,disableUnusedAttributes:C}}function Zp(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];t.update(p,n,1)}function c(l,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g]*f[g];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Cn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const P=I===Hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ni&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Qn&&!P)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:C,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function Jp(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ii,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const m=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,u=i.get(d);if(!r||m===null||m.length===0||s&&!_)s?h(null):l();else{const C=s?0:n,b=C*4;let S=u.clippingState||null;c.value=S,S=h(m,f,b,p);for(let R=0;R!==b;++R)S[R]=t[R];u.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,m){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=c.value,m!==!0||_===null){const u=p+g*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(_===null||_.length<u)&&(_=new Float32Array(u));for(let b=0,S=p;b!==g;++b,S+=4)o.copy(d[b]).applyMatrix4(C,a),o.normal.toArray(_,S),_[S+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function em(i){let e=new WeakMap;function t(o,a){return a===Yo?o.mapping=gr:a===$o&&(o.mapping=vr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yo||a===$o)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new eu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const hr=4,Cc=[.125,.215,.35,.446,.526,.582],Pi=20,Mo=new Zl,Ic=new _t;let To=null,bo=0,Ao=0,Ro=!1;const Oi=(1+Math.sqrt(5))/2,ir=1/Oi,Oc=[new V(-Oi,ir,0),new V(Oi,ir,0),new V(-ir,0,Oi),new V(ir,0,Oi),new V(0,Oi,-ir),new V(0,Oi,ir),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],tm=new V;class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=tm}=s;To=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(To,bo,Ao),this._renderer.xr.enabled=Ro,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),To=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Hr,format:Cn,colorSpace:xr,depthBuffer:!1},r=Lc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nm(s)),this._blurMaterial=im(s,e,t)}return r}_compileMaterial(e){const t=new fn(this._lodPlanes[0],e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,n,r,s){const c=new xn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Ic),d.toneMapping=pi,d.autoClear=!1;const m=new Vl({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new fn(new vi,m);let _=!1;const u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,_=!0):(m.color.copy(Ic),_=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[C],s.y,s.z)):b===1?(c.up.set(0,0,l[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[C],s.z)):(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[C]));const S=this._cubeSize;vs(r,b*S,C>2?S:0,S,S),d.setRenderTarget(r),_&&d.render(g,c),d.render(e,c)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===gr||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;vs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Mo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Oc[(r-s-1)%Oc.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new fn(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Pi-1),g=s/m,_=isFinite(s)?1+Math.floor(h*g):Pi;_>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Pi}`);const u=[];let C=0;for(let I=0;I<Pi;++I){const P=I/g,M=Math.exp(-P*P/2);u.push(M),I===0?C+=M:I<_&&(C+=2*M)}for(let I=0;I<u.length;I++)u[I]=u[I]/C;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=m,f.mipInt.value=b-n;const S=this._sizeLods[r],R=3*S*(r>b-hr?r-b+hr:0),A=4*(this._cubeSize-S);vs(t,R,A,3*S,2*S),c.setRenderTarget(t),c.render(d,Mo)}}function nm(i){const e=[],t=[],n=[];let r=i;const s=i-hr+1+Cc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-hr?c=Cc[o-i+hr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,g=3,_=2,u=1,C=new Float32Array(g*m*p),b=new Float32Array(_*m*p),S=new Float32Array(u*m*p);for(let A=0;A<p;A++){const I=A%3*2/3-1,P=A>2?0:-1,M=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];C.set(M,g*m*A),b.set(f,_*m*A);const E=[A,A,A,A,A,A];S.set(E,u*m*A)}const R=new gi;R.setAttribute("position",new Fn(C,g)),R.setAttribute("uv",new Fn(b,_)),R.setAttribute("faceIndex",new Fn(S,u)),e.push(R),r>hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lc(i,e,t){const n=new Bi(i,e,t);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function im(i,e,t){const n=new Float32Array(Pi),r=new V(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Pc(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Nc(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Xa(){return`

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
	`}function rm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Yo||c===$o,h=c===gr||c===vr;if(l||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Dc(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Dc(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ls("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function om(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(d){const f=[],p=d.index,m=d.attributes.position;let g=0;if(p!==null){const C=p.array;g=p.version;for(let b=0,S=C.length;b<S;b+=3){const R=C[b+0],A=C[b+1],I=C[b+2];f.push(R,A,A,I,I,R)}}else if(m!==void 0){const C=m.array;g=m.version;for(let b=0,S=C.length/3-1;b<S;b+=3){const R=b+0,A=b+1,I=b+2;f.push(R,A,A,I,I,R)}}else return;const _=new(Bl(f)?Xl:Wl)(f,1);_.version=g;const u=s.get(d);u&&e.remove(u),s.set(d,_)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function am(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function l(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,s,f*o,m),t.update(p,n,m))}function h(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,m);let _=0;for(let u=0;u<m;u++)_+=p[u];t.update(_,n,1)}function d(f,p,m,g){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let u=0;u<f.length;u++)l(f[u]/o,p[u],g[u]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,g,0,m);let u=0;for(let C=0;C<m;C++)u+=p[C]*g[C];t.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function cm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function lm(i,e,t){const n=new WeakMap,r=new Rt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let b=0;p===!0&&(b=1),m===!0&&(b=2),g===!0&&(b=3);let S=a.attributes.position.count*b,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*R*4*d),I=new zl(A,S,R,d);I.type=Qn,I.needsUpdate=!0;const P=b*4;for(let E=0;E<d;E++){const D=_[E],j=u[E],B=C[E],$=S*R*4*E;for(let re=0;re<D.count;re++){const Z=re*P;p===!0&&(r.fromBufferAttribute(D,re),A[$+Z+0]=r.x,A[$+Z+1]=r.y,A[$+Z+2]=r.z,A[$+Z+3]=0),m===!0&&(r.fromBufferAttribute(j,re),A[$+Z+4]=r.x,A[$+Z+5]=r.y,A[$+Z+6]=r.z,A[$+Z+7]=0),g===!0&&(r.fromBufferAttribute(B,re),A[$+Z+8]=r.x,A[$+Z+9]=r.y,A[$+Z+10]=r.z,A[$+Z+11]=B.itemSize===4?r.w:1)}}f={count:d,texture:I,size:new vt(S,R)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function dm(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Jl=new en,Uc=new $l(1,1),ed=new zl,td=new Uh,nd=new Yl,kc=[],Fc=[],Bc=new Float32Array(16),zc=new Float32Array(9),Hc=new Float32Array(4);function Sr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=kc[r];if(s===void 0&&(s=new Float32Array(r),kc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qs(i,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function mm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Hc.set(n),i.uniformMatrix2fv(this.addr,!1,Hc),Ut(t,n)}}function _m(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;zc.set(n),i.uniformMatrix3fv(this.addr,!1,zc),Ut(t,n)}}function gm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Bc.set(n),i.uniformMatrix4fv(this.addr,!1,Bc),Ut(t,n)}}function vm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Sm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function Am(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Uc.compareFunction=Fl,s=Uc):s=Jl,t.setTexture2D(e||s,r)}function Rm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||td,r)}function wm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||nd,r)}function Cm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ed,r)}function Im(i){switch(i){case 5126:return hm;case 35664:return um;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return _m;case 35676:return gm;case 5124:case 35670:return vm;case 35667:case 35671:return xm;case 35668:case 35672:return ym;case 35669:case 35673:return Em;case 5125:return Sm;case 36294:return Mm;case 36295:return Tm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Cm}}function Om(i,e){i.uniform1fv(this.addr,e)}function Dm(i,e){const t=Sr(e,this.size,2);i.uniform2fv(this.addr,t)}function Lm(i,e){const t=Sr(e,this.size,3);i.uniform3fv(this.addr,t)}function Pm(i,e){const t=Sr(e,this.size,4);i.uniform4fv(this.addr,t)}function Nm(i,e){const t=Sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Um(i,e){const t=Sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function km(i,e){const t=Sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fm(i,e){i.uniform1iv(this.addr,e)}function Bm(i,e){i.uniform2iv(this.addr,e)}function zm(i,e){i.uniform3iv(this.addr,e)}function Hm(i,e){i.uniform4iv(this.addr,e)}function Gm(i,e){i.uniform1uiv(this.addr,e)}function Vm(i,e){i.uniform2uiv(this.addr,e)}function Wm(i,e){i.uniform3uiv(this.addr,e)}function Xm(i,e){i.uniform4uiv(this.addr,e)}function qm(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Jl,s[o])}function Km(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||td,s[o])}function Ym(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||nd,s[o])}function $m(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ed,s[o])}function jm(i){switch(i){case 5126:return Om;case 35664:return Dm;case 35665:return Lm;case 35666:return Pm;case 35674:return Nm;case 35675:return Um;case 35676:return km;case 5124:case 35670:return Fm;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return Hm;case 5125:return Gm;case 36294:return Vm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return $m}}class Zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Im(t.type)}}class Qm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jm(t.type)}}class Jm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function Gc(i,e){i.seq.push(e),i.map[e.id]=e}function e_(i,e,t){const n=i.name,r=n.length;for(wo.lastIndex=0;;){const s=wo.exec(n),o=wo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Gc(t,l===void 0?new Zm(a,i,e):new Qm(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Jm(a),Gc(t,d)),t=d}}}class Ps{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);e_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Vc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const t_=37297;let n_=0;function i_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Wc=new je;function r_(i){mt._getMatrix(Wc,mt.workingColorSpace,i);const e=`mat3( ${Wc.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case Fs:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+i_(i.getShaderSource(e),o)}else return r}function s_(i,e){const t=r_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function o_(i,e){let t;switch(e){case ch:t="Linear";break;case lh:t="Reinhard";break;case dh:t="Cineon";break;case hh:t="ACESFilmic";break;case fh:t="AgX";break;case ph:t="Neutral";break;case uh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xs=new V;function a_(){mt.getLuminanceCoefficients(xs);const i=xs.x.toFixed(4),e=xs.y.toFixed(4),t=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function l_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Nr(i){return i!==""}function qc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(i){return i.replace(h_,f_)}const u_=new Map;function f_(i,e){let t=Ze[e];if(t===void 0){const n=u_.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ba(t)}const p_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(i){return i.replace(p_,m_)}function m_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $c(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function __(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function g_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gr:case vr:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===vr&&(e="ENVMAP_MODE_REFRACTION"),e}function x_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pa:e="ENVMAP_BLENDING_MULTIPLY";break;case oh:e="ENVMAP_BLENDING_MIX";break;case ah:e="ENVMAP_BLENDING_ADD";break}return e}function y_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function E_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=__(t),l=g_(t),h=v_(t),d=x_(t),f=y_(t),p=c_(t),m=l_(s),g=r.createProgram();let _,u,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Nr).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Nr).join(`
`),u.length>0&&(u+=`
`)):(_=[$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),u=[$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==pi?o_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,s_("linearToOutputTexel",t.outputColorSpace),a_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),o=ba(o),o=qc(o,t),o=Kc(o,t),a=ba(a),a=qc(a,t),a=Kc(a,t),o=Yc(o),a=Yc(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=C+_+o,S=C+u+a,R=Vc(r,r.VERTEX_SHADER,b),A=Vc(r,r.FRAGMENT_SHADER,S);r.attachShader(g,R),r.attachShader(g,A),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function I(D){if(i.debug.checkShaderErrors){const j=r.getProgramInfoLog(g).trim(),B=r.getShaderInfoLog(R).trim(),$=r.getShaderInfoLog(A).trim();let re=!0,Z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,R,A);else{const te=Xc(r,R,"vertex"),X=Xc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+te+`
`+X)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(B===""||$==="")&&(Z=!1);Z&&(D.diagnostics={runnable:re,programLog:j,vertexShader:{log:B,prefix:_},fragmentShader:{log:$,prefix:u}})}r.deleteShader(R),r.deleteShader(A),P=new Ps(r,g),M=d_(r,g)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(g,t_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}let S_=0;class M_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new T_(e),t.set(e,n)),n}}class T_{constructor(e){this.id=S_++,this.code=e,this.usedTimes=0}}function b_(i,e,t,n,r,s,o){const a=new Hl,c=new M_,l=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function _(M,E,D,j,B){const $=j.fog,re=B.geometry,Z=M.isMeshStandardMaterial?j.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),X=te&&te.mapping===Vs?te.image.height:null,ae=m[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const be=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ie=be!==void 0?be.length:0;let Qe=0;re.morphAttributes.position!==void 0&&(Qe=1),re.morphAttributes.normal!==void 0&&(Qe=2),re.morphAttributes.color!==void 0&&(Qe=3);let it,K,fe,Ce;if(ae){const gt=Nn[ae];it=gt.vertexShader,K=gt.fragmentShader}else it=M.vertexShader,K=M.fragmentShader,c.update(M),fe=c.getVertexShaderID(M),Ce=c.getFragmentShaderID(M);const me=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),lt=B.isInstancedMesh===!0,Be=B.isBatchedMesh===!0,At=!!M.map,bt=!!M.matcap,$e=!!te,O=!!M.aoMap,Et=!!M.lightMap,tt=!!M.bumpMap,Je=!!M.normalMap,Pe=!!M.displacementMap,St=!!M.emissiveMap,Le=!!M.metalnessMap,T=!!M.roughnessMap,v=M.anisotropy>0,k=M.clearcoat>0,J=M.dispersion>0,ie=M.iridescence>0,Q=M.sheen>0,pe=M.transmission>0,le=v&&!!M.anisotropyMap,Me=k&&!!M.clearcoatMap,rt=k&&!!M.clearcoatNormalMap,ne=k&&!!M.clearcoatRoughnessMap,Te=ie&&!!M.iridescenceMap,ke=ie&&!!M.iridescenceThicknessMap,Ge=Q&&!!M.sheenColorMap,Ae=Q&&!!M.sheenRoughnessMap,nt=!!M.specularMap,Ke=!!M.specularColorMap,xt=!!M.specularIntensityMap,L=pe&&!!M.transmissionMap,ve=pe&&!!M.thicknessMap,G=!!M.gradientMap,Y=!!M.alphaMap,Se=M.alphaTest>0,ue=!!M.alphaHash,Ye=!!M.extensions;let Tt=pi;M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Tt=i.toneMapping);const ht={shaderID:ae,shaderType:M.type,shaderName:M.name,vertexShader:it,fragmentShader:K,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:Ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Be,batchingColor:Be&&B._colorsTexture!==null,instancing:lt,instancingColor:lt&&B.instanceColor!==null,instancingMorph:lt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:xr,alphaToCoverage:!!M.alphaToCoverage,map:At,matcap:bt,envMap:$e,envMapMode:$e&&te.mapping,envMapCubeUVHeight:X,aoMap:O,lightMap:Et,bumpMap:tt,normalMap:Je,displacementMap:f&&Pe,emissiveMap:St,normalMapObjectSpace:Je&&M.normalMapType===vh,normalMapTangentSpace:Je&&M.normalMapType===kl,metalnessMap:Le,roughnessMap:T,anisotropy:v,anisotropyMap:le,clearcoat:k,clearcoatMap:Me,clearcoatNormalMap:rt,clearcoatRoughnessMap:ne,dispersion:J,iridescence:ie,iridescenceMap:Te,iridescenceThicknessMap:ke,sheen:Q,sheenColorMap:Ge,sheenRoughnessMap:Ae,specularMap:nt,specularColorMap:Ke,specularIntensityMap:xt,transmission:pe,transmissionMap:L,thicknessMap:ve,gradientMap:G,opaque:M.transparent===!1&&M.blending===ur&&M.alphaToCoverage===!1,alphaMap:Y,alphaTest:Se,alphaHash:ue,combine:M.combine,mapUv:At&&g(M.map.channel),aoMapUv:O&&g(M.aoMap.channel),lightMapUv:Et&&g(M.lightMap.channel),bumpMapUv:tt&&g(M.bumpMap.channel),normalMapUv:Je&&g(M.normalMap.channel),displacementMapUv:Pe&&g(M.displacementMap.channel),emissiveMapUv:St&&g(M.emissiveMap.channel),metalnessMapUv:Le&&g(M.metalnessMap.channel),roughnessMapUv:T&&g(M.roughnessMap.channel),anisotropyMapUv:le&&g(M.anisotropyMap.channel),clearcoatMapUv:Me&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(M.sheenRoughnessMap.channel),specularMapUv:nt&&g(M.specularMap.channel),specularColorMapUv:Ke&&g(M.specularColorMap.channel),specularIntensityMapUv:xt&&g(M.specularIntensityMap.channel),transmissionMapUv:L&&g(M.transmissionMap.channel),thicknessMapUv:ve&&g(M.thicknessMap.channel),alphaMapUv:Y&&g(M.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Je||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!re.attributes.uv&&(At||Y),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Fe,skinning:B.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Qe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:At&&M.map.isVideoTexture===!0&&mt.getTransfer(M.map.colorSpace)===yt,decodeVideoTextureEmissive:St&&M.emissiveMap.isVideoTexture===!0&&mt.getTransfer(M.emissiveMap.colorSpace)===yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===jn,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ye&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&M.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function u(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)E.push(D),E.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(C(E,M),b(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function C(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function b(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const E=m[M.type];let D;if(E){const j=Nn[E];D=jh.clone(j.uniforms)}else D=M.uniforms;return D}function R(M,E){let D;for(let j=0,B=h.length;j<B;j++){const $=h[j];if($.cacheKey===E){D=$,++D.usedTimes;break}}return D===void 0&&(D=new E_(i,E,M,s),h.push(D)),D}function A(M){if(--M.usedTimes===0){const E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function I(M){c.remove(M)}function P(){c.dispose()}return{getParameters:_,getProgramCacheKey:u,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:P}}function A_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function R_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function jc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,p,m,g,_){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:m,renderOrder:d.renderOrder,z:g,group:_},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=m,u.renderOrder=d.renderOrder,u.z=g,u.group=_),e++,u}function a(d,f,p,m,g,_){const u=o(d,f,p,m,g,_);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):t.push(u)}function c(d,f,p,m,g,_){const u=o(d,f,p,m,g,_);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||R_),n.length>1&&n.sort(f||jc),r.length>1&&r.sort(f||jc)}function h(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function w_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Zc,i.set(n,[o])):r>=s.length?(o=new Zc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function C_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new _t};break;case"SpotLight":t={position:new V,direction:new V,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function I_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let O_=0;function D_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function L_(i){const e=new C_,t=I_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);const r=new V,s=new wt,o=new wt;function a(l){let h=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,m=0,g=0,_=0,u=0,C=0,b=0,S=0,R=0,A=0,I=0;l.sort(D_);for(let M=0,E=l.length;M<E;M++){const D=l[M],j=D.color,B=D.intensity,$=D.distance,re=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=j.r*B,d+=j.g*B,f+=j.b*B;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],B);I++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,X=t.get(D);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=D.shadow.matrix,C++}n.directional[p]=Z,p++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(j).multiplyScalar(B),Z.distance=$,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[g]=Z;const te=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,te.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[g]=te.matrix,D.castShadow){const X=t.get(D);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=re,S++}g++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(j).multiplyScalar(B),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[_]=Z,_++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const te=D.shadow,X=t.get(D);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,X.shadowCameraNear=te.camera.near,X.shadowCameraFar=te.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=re,n.pointShadowMatrix[m]=D.shadow.matrix,b++}n.point[m]=Z,m++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(B),Z.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[u]=Z,u++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==u||P.numDirectionalShadows!==C||P.numPointShadows!==b||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=_,n.point.length=m,n.hemi.length=u,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,P.directionalLength=p,P.pointLength=m,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=u,P.numDirectionalShadows=C,P.numPointShadows=b,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=I,n.version=O_++)}function c(l,h){let d=0,f=0,p=0,m=0,g=0;const _=h.matrixWorldInverse;for(let u=0,C=l.length;u<C;u++){const b=l[u];if(b.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),d++}else if(b.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),p++}else if(b.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(b.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),f++}else if(b.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(_),g++}}}return{setup:a,setupView:c,state:n}}function Qc(i){const e=new L_(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function P_(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Qc(i),e.set(r,[a])):s>=o.length?(a=new Qc(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const N_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U_=`uniform sampler2D shadow_pass;
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
}`;function k_(i,e,t){let n=new Wa;const r=new vt,s=new vt,o=new Rt,a=new su({depthPacking:gh}),c=new ou,l={},h=t.maxTextureSize,d={[mi]:Jt,[Jt]:mi,[jn]:jn},f=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:N_,fragmentShader:U_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new gi;m.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new fn(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let u=this.type;this.render=function(A,I,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),E=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),j=i.state;j.setBlending(fi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const B=u!==Kn&&this.type===Kn,$=u===Kn&&this.type!==Kn;for(let re=0,Z=A.length;re<Z;re++){const te=A[re],X=te.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ae=X.getFrameExtents();if(r.multiply(ae),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ae.x),r.x=s.x*ae.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ae.y),r.y=s.y*ae.y,X.mapSize.y=s.y)),X.map===null||B===!0||$===!0){const Ie=this.type!==Kn?{minFilter:In,magFilter:In}:{};X.map!==null&&X.map.dispose(),X.map=new Bi(r.x,r.y,Ie),X.map.texture.name=te.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const be=X.getViewportCount();for(let Ie=0;Ie<be;Ie++){const Qe=X.getViewport(Ie);o.set(s.x*Qe.x,s.y*Qe.y,s.x*Qe.z,s.y*Qe.w),j.viewport(o),X.updateMatrices(te,Ie),n=X.getFrustum(),S(I,P,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===Kn&&C(X,P),X.needsUpdate=!1}u=this.type,_.needsUpdate=!1,i.setRenderTarget(M,E,D)};function C(A,I){const P=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,P,f,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,P,p,g,null)}function b(A,I,P,M){let E=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)E=D;else if(E=P.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const j=E.uuid,B=I.uuid;let $=l[j];$===void 0&&($={},l[j]=$);let re=$[B];re===void 0&&(re=E.clone(),$[B]=re,I.addEventListener("dispose",R)),E=re}if(E.visible=I.visible,E.wireframe=I.wireframe,M===Kn?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:d[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const j=i.properties.get(E);j.light=P}return E}function S(A,I,P,M,E){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Kn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const B=e.update(A),$=A.material;if(Array.isArray($)){const re=B.groups;for(let Z=0,te=re.length;Z<te;Z++){const X=re[Z],ae=$[X.materialIndex];if(ae&&ae.visible){const be=b(A,ae,M,E);A.onBeforeShadow(i,A,I,P,B,be,X),i.renderBufferDirect(P,null,B,be,A,X),A.onAfterShadow(i,A,I,P,B,be,X)}}}else if($.visible){const re=b(A,$,M,E);A.onBeforeShadow(i,A,I,P,B,re,null),i.renderBufferDirect(P,null,B,re,A,null),A.onAfterShadow(i,A,I,P,B,re,null)}}const j=A.children;for(let B=0,$=j.length;B<$;B++)S(j[B],I,P,M,E)}function R(A){A.target.removeEventListener("dispose",R);for(const P in l){const M=l[P],E=A.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const F_={[Ho]:Go,[Vo]:qo,[Wo]:Ko,[_r]:Xo,[Go]:Ho,[qo]:Vo,[Ko]:Wo,[Xo]:_r};function B_(i,e){function t(){let L=!1;const ve=new Rt;let G=null;const Y=new Rt(0,0,0,0);return{setMask:function(Se){G!==Se&&!L&&(i.colorMask(Se,Se,Se,Se),G=Se)},setLocked:function(Se){L=Se},setClear:function(Se,ue,Ye,Tt,ht){ht===!0&&(Se*=Tt,ue*=Tt,Ye*=Tt),ve.set(Se,ue,Ye,Tt),Y.equals(ve)===!1&&(i.clearColor(Se,ue,Ye,Tt),Y.copy(ve))},reset:function(){L=!1,G=null,Y.set(-1,0,0,0)}}}function n(){let L=!1,ve=!1,G=null,Y=null,Se=null;return{setReversed:function(ue){if(ve!==ue){const Ye=e.get("EXT_clip_control");ue?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),ve=ue;const Tt=Se;Se=null,this.setClear(Tt)}},getReversed:function(){return ve},setTest:function(ue){ue?me(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(ue){G!==ue&&!L&&(i.depthMask(ue),G=ue)},setFunc:function(ue){if(ve&&(ue=F_[ue]),Y!==ue){switch(ue){case Ho:i.depthFunc(i.NEVER);break;case Go:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case Wo:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case qo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=ue}},setLocked:function(ue){L=ue},setClear:function(ue){Se!==ue&&(ve&&(ue=1-ue),i.clearDepth(ue),Se=ue)},reset:function(){L=!1,G=null,Y=null,Se=null,ve=!1}}}function r(){let L=!1,ve=null,G=null,Y=null,Se=null,ue=null,Ye=null,Tt=null,ht=null;return{setTest:function(gt){L||(gt?me(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(gt){ve!==gt&&!L&&(i.stencilMask(gt),ve=gt)},setFunc:function(gt,tn,Oe){(G!==gt||Y!==tn||Se!==Oe)&&(i.stencilFunc(gt,tn,Oe),G=gt,Y=tn,Se=Oe)},setOp:function(gt,tn,Oe){(ue!==gt||Ye!==tn||Tt!==Oe)&&(i.stencilOp(gt,tn,Oe),ue=gt,Ye=tn,Tt=Oe)},setLocked:function(gt){L=gt},setClear:function(gt){ht!==gt&&(i.clearStencil(gt),ht=gt)},reset:function(){L=!1,ve=null,G=null,Y=null,Se=null,ue=null,Ye=null,Tt=null,ht=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,p=[],m=null,g=!1,_=null,u=null,C=null,b=null,S=null,R=null,A=null,I=new _t(0,0,0),P=0,M=!1,E=null,D=null,j=null,B=null,$=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,te=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=te>=2);let ae=null,be={};const Ie=i.getParameter(i.SCISSOR_BOX),Qe=i.getParameter(i.VIEWPORT),it=new Rt().fromArray(Ie),K=new Rt().fromArray(Qe);function fe(L,ve,G,Y){const Se=new Uint8Array(4),ue=i.createTexture();i.bindTexture(L,ue),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<G;Ye++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(ve+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return ue}const Ce={};Ce[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(i.DEPTH_TEST),o.setFunc(_r),tt(!1),Je(nc),me(i.CULL_FACE),O(fi);function me(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Fe(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function lt(L,ve){return d[L]!==ve?(i.bindFramebuffer(L,ve),d[L]=ve,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ve),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Be(L,ve){let G=p,Y=!1;if(L){G=f.get(ve),G===void 0&&(G=[],f.set(ve,G));const Se=L.textures;if(G.length!==Se.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Ye=Se.length;ue<Ye;ue++)G[ue]=i.COLOR_ATTACHMENT0+ue;G.length=Se.length,Y=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Y=!0);Y&&i.drawBuffers(G)}function At(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const bt={[Li]:i.FUNC_ADD,[Vd]:i.FUNC_SUBTRACT,[Wd]:i.FUNC_REVERSE_SUBTRACT};bt[Xd]=i.MIN,bt[qd]=i.MAX;const $e={[Kd]:i.ZERO,[Yd]:i.ONE,[$d]:i.SRC_COLOR,[Bo]:i.SRC_ALPHA,[th]:i.SRC_ALPHA_SATURATE,[Jd]:i.DST_COLOR,[Zd]:i.DST_ALPHA,[jd]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[eh]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[nh]:i.CONSTANT_COLOR,[ih]:i.ONE_MINUS_CONSTANT_COLOR,[rh]:i.CONSTANT_ALPHA,[sh]:i.ONE_MINUS_CONSTANT_ALPHA};function O(L,ve,G,Y,Se,ue,Ye,Tt,ht,gt){if(L===fi){g===!0&&(Fe(i.BLEND),g=!1);return}if(g===!1&&(me(i.BLEND),g=!0),L!==Gd){if(L!==_||gt!==M){if((u!==Li||S!==Li)&&(i.blendEquation(i.FUNC_ADD),u=Li,S=Li),gt)switch(L){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFunc(i.ONE,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}C=null,b=null,R=null,A=null,I.set(0,0,0),P=0,_=L,M=gt}return}Se=Se||ve,ue=ue||G,Ye=Ye||Y,(ve!==u||Se!==S)&&(i.blendEquationSeparate(bt[ve],bt[Se]),u=ve,S=Se),(G!==C||Y!==b||ue!==R||Ye!==A)&&(i.blendFuncSeparate($e[G],$e[Y],$e[ue],$e[Ye]),C=G,b=Y,R=ue,A=Ye),(Tt.equals(I)===!1||ht!==P)&&(i.blendColor(Tt.r,Tt.g,Tt.b,ht),I.copy(Tt),P=ht),_=L,M=!1}function Et(L,ve){L.side===jn?Fe(i.CULL_FACE):me(i.CULL_FACE);let G=L.side===Jt;ve&&(G=!G),tt(G),L.blending===ur&&L.transparent===!1?O(fi):O(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const Y=L.stencilWrite;a.setTest(Y),Y&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),St(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(L){E!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),E=L)}function Je(L){L!==Bd?(me(i.CULL_FACE),L!==D&&(L===nc?i.cullFace(i.BACK):L===zd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),D=L}function Pe(L){L!==j&&(Z&&i.lineWidth(L),j=L)}function St(L,ve,G){L?(me(i.POLYGON_OFFSET_FILL),(B!==ve||$!==G)&&(i.polygonOffset(ve,G),B=ve,$=G)):Fe(i.POLYGON_OFFSET_FILL)}function Le(L){L?me(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+re-1),ae!==L&&(i.activeTexture(L),ae=L)}function v(L,ve,G){G===void 0&&(ae===null?G=i.TEXTURE0+re-1:G=ae);let Y=be[G];Y===void 0&&(Y={type:void 0,texture:void 0},be[G]=Y),(Y.type!==L||Y.texture!==ve)&&(ae!==G&&(i.activeTexture(G),ae=G),i.bindTexture(L,ve||Ce[L]),Y.type=L,Y.texture=ve)}function k(){const L=be[ae];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(L){it.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),it.copy(L))}function Ae(L){K.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function nt(L,ve){let G=l.get(ve);G===void 0&&(G=new WeakMap,l.set(ve,G));let Y=G.get(L);Y===void 0&&(Y=i.getUniformBlockIndex(ve,L.name),G.set(L,Y))}function Ke(L,ve){const Y=l.get(ve).get(L);c.get(ve)!==Y&&(i.uniformBlockBinding(ve,Y,L.__bindingPointIndex),c.set(ve,Y))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,be={},d={},f=new WeakMap,p=[],m=null,g=!1,_=null,u=null,C=null,b=null,S=null,R=null,A=null,I=new _t(0,0,0),P=0,M=!1,E=null,D=null,j=null,B=null,$=null,it.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:me,disable:Fe,bindFramebuffer:lt,drawBuffers:Be,useProgram:At,setBlending:O,setMaterial:Et,setFlipSided:tt,setCullFace:Je,setLineWidth:Pe,setPolygonOffset:St,setScissorTest:Le,activeTexture:T,bindTexture:v,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:ie,texImage2D:Te,texImage3D:ke,updateUBOMapping:nt,uniformBlockBinding:Ke,texStorage2D:rt,texStorage3D:ne,texSubImage2D:Q,texSubImage3D:pe,compressedTexSubImage2D:le,compressedTexSubImage3D:Me,scissor:Ge,viewport:Ae,reset:xt}}function z_(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,v){return p?new OffscreenCanvas(T,v):zs("canvas")}function g(T,v,k){let J=1;const ie=Le(T);if((ie.width>k||ie.height>k)&&(J=k/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor(J*ie.width),pe=Math.floor(J*ie.height);d===void 0&&(d=m(Q,pe));const le=v?m(Q,pe):d;return le.width=Q,le.height=pe,le.getContext("2d").drawImage(T,0,0,Q,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+pe+")."),le}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function _(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,v,k,J,ie=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=v;if(v===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),v===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RG8UI),k===i.UNSIGNED_SHORT&&(Q=i.RG16UI),k===i.UNSIGNED_INT&&(Q=i.RG32UI),k===i.BYTE&&(Q=i.RG8I),k===i.SHORT&&(Q=i.RG16I),k===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),k===i.UNSIGNED_INT&&(Q=i.RGB32UI),k===i.BYTE&&(Q=i.RGB8I),k===i.SHORT&&(Q=i.RGB16I),k===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),k===i.UNSIGNED_INT&&(Q=i.RGBA32UI),k===i.BYTE&&(Q=i.RGBA8I),k===i.SHORT&&(Q=i.RGBA16I),k===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),v===i.RGBA){const pe=ie?Fs:mt.getTransfer(J);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=pe===yt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(T,v){let k;return T?v===null||v===Fi||v===kr?k=i.DEPTH24_STENCIL8:v===Qn?k=i.DEPTH32F_STENCIL8:v===Ur&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Fi||v===kr?k=i.DEPTH_COMPONENT24:v===Qn?k=i.DEPTH_COMPONENT32F:v===Ur&&(k=i.DEPTH_COMPONENT16),k}function R(T,v){return _(T)===!0||T.isFramebufferTexture&&T.minFilter!==In&&T.minFilter!==Un?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),P(v),v.isVideoTexture&&h.delete(v)}function I(T){const v=T.target;v.removeEventListener("dispose",I),E(v)}function P(T){const v=n.get(T);if(v.__webglInit===void 0)return;const k=T.source,J=f.get(k);if(J){const ie=J[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(T),Object.keys(J).length===0&&f.delete(k)}n.remove(T)}function M(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const k=T.source,J=f.get(k);delete J[v.__cacheKey],o.memory.textures--}function E(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let ie=0;ie<v.__webglFramebuffer[J].length;ie++)i.deleteFramebuffer(v.__webglFramebuffer[J][ie]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=T.textures;for(let J=0,ie=k.length;J<ie;J++){const Q=n.get(k[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(k[J])}n.remove(T)}let D=0;function j(){D=0}function B(){const T=D;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),D+=1,T}function $(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function re(T,v){const k=n.get(T);if(T.isVideoTexture&&Pe(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,T,v);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function Z(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){K(k,T,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function te(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){K(k,T,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function X(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){fe(k,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const ae={[jo]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[Zo]:i.MIRRORED_REPEAT},be={[In]:i.NEAREST,[mh]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Zs]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},Ie={[xh]:i.NEVER,[bh]:i.ALWAYS,[yh]:i.LESS,[Fl]:i.LEQUAL,[Eh]:i.EQUAL,[Th]:i.GEQUAL,[Sh]:i.GREATER,[Mh]:i.NOTEQUAL};function Qe(T,v){if(v.type===Qn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Un||v.magFilter===Zs||v.magFilter===Jr||v.magFilter===ki||v.minFilter===Un||v.minFilter===Zs||v.minFilter===Jr||v.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ae[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ae[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ae[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,be[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,be[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===In||v.minFilter!==Jr&&v.minFilter!==ki||v.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function it(T,v){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const J=v.source;let ie=f.get(J);ie===void 0&&(ie={},f.set(J,ie));const Q=$(v);if(Q!==T.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ie[Q].usedTimes++;const pe=ie[T.__cacheKey];pe!==void 0&&(ie[T.__cacheKey].usedTimes--,pe.usedTimes===0&&M(v)),T.__cacheKey=Q,T.__webglTexture=ie[Q].texture}return k}function K(T,v,k){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);const ie=it(T,v),Q=v.source;t.bindTexture(J,T.__webglTexture,i.TEXTURE0+k);const pe=n.get(Q);if(Q.version!==pe.__version||ie===!0){t.activeTexture(i.TEXTURE0+k);const le=mt.getPrimaries(mt.workingColorSpace),Me=v.colorSpace===ui?null:mt.getPrimaries(v.colorSpace),rt=v.colorSpace===ui||le===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ne=g(v.image,!1,r.maxTextureSize);ne=St(v,ne);const Te=s.convert(v.format,v.colorSpace),ke=s.convert(v.type);let Ge=b(v.internalFormat,Te,ke,v.colorSpace,v.isVideoTexture);Qe(J,v);let Ae;const nt=v.mipmaps,Ke=v.isVideoTexture!==!0,xt=pe.__version===void 0||ie===!0,L=Q.dataReady,ve=R(v,ne);if(v.isDepthTexture)Ge=S(v.format===Br,v.type),xt&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Ge,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ge,ne.width,ne.height,0,Te,ke,null));else if(v.isDataTexture)if(nt.length>0){Ke&&xt&&t.texStorage2D(i.TEXTURE_2D,ve,Ge,nt[0].width,nt[0].height);for(let G=0,Y=nt.length;G<Y;G++)Ae=nt[G],Ke?L&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Ae.width,Ae.height,Te,ke,Ae.data):t.texImage2D(i.TEXTURE_2D,G,Ge,Ae.width,Ae.height,0,Te,ke,Ae.data);v.generateMipmaps=!1}else Ke?(xt&&t.texStorage2D(i.TEXTURE_2D,ve,Ge,ne.width,ne.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,Te,ke,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,ne.width,ne.height,0,Te,ke,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ke&&xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ge,nt[0].width,nt[0].height,ne.depth);for(let G=0,Y=nt.length;G<Y;G++)if(Ae=nt[G],v.format!==Cn)if(Te!==null)if(Ke){if(L)if(v.layerUpdates.size>0){const Se=wc(Ae.width,Ae.height,v.format,v.type);for(const ue of v.layerUpdates){const Ye=Ae.data.subarray(ue*Se/Ae.data.BYTES_PER_ELEMENT,(ue+1)*Se/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ue,Ae.width,Ae.height,1,Te,Ye)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Ae.width,Ae.height,ne.depth,Te,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Ge,Ae.width,Ae.height,ne.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Ae.width,Ae.height,ne.depth,Te,ke,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,Ge,Ae.width,Ae.height,ne.depth,0,Te,ke,Ae.data)}else{Ke&&xt&&t.texStorage2D(i.TEXTURE_2D,ve,Ge,nt[0].width,nt[0].height);for(let G=0,Y=nt.length;G<Y;G++)Ae=nt[G],v.format!==Cn?Te!==null?Ke?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,Ae.width,Ae.height,Te,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,G,Ge,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?L&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Ae.width,Ae.height,Te,ke,Ae.data):t.texImage2D(i.TEXTURE_2D,G,Ge,Ae.width,Ae.height,0,Te,ke,Ae.data)}else if(v.isDataArrayTexture)if(Ke){if(xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ge,ne.width,ne.height,ne.depth),L)if(v.layerUpdates.size>0){const G=wc(ne.width,ne.height,v.format,v.type);for(const Y of v.layerUpdates){const Se=ne.data.subarray(Y*G/ne.data.BYTES_PER_ELEMENT,(Y+1)*G/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ne.width,ne.height,1,Te,ke,Se)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Te,ke,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,ne.width,ne.height,ne.depth,0,Te,ke,ne.data);else if(v.isData3DTexture)Ke?(xt&&t.texStorage3D(i.TEXTURE_3D,ve,Ge,ne.width,ne.height,ne.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Te,ke,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,ne.width,ne.height,ne.depth,0,Te,ke,ne.data);else if(v.isFramebufferTexture){if(xt)if(Ke)t.texStorage2D(i.TEXTURE_2D,ve,Ge,ne.width,ne.height);else{let G=ne.width,Y=ne.height;for(let Se=0;Se<ve;Se++)t.texImage2D(i.TEXTURE_2D,Se,Ge,G,Y,0,Te,ke,null),G>>=1,Y>>=1}}else if(nt.length>0){if(Ke&&xt){const G=Le(nt[0]);t.texStorage2D(i.TEXTURE_2D,ve,Ge,G.width,G.height)}for(let G=0,Y=nt.length;G<Y;G++)Ae=nt[G],Ke?L&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Te,ke,Ae):t.texImage2D(i.TEXTURE_2D,G,Ge,Te,ke,Ae);v.generateMipmaps=!1}else if(Ke){if(xt){const G=Le(ne);t.texStorage2D(i.TEXTURE_2D,ve,Ge,G.width,G.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,ke,ne)}else t.texImage2D(i.TEXTURE_2D,0,Ge,Te,ke,ne);_(v)&&u(J),pe.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function fe(T,v,k){if(v.image.length!==6)return;const J=it(T,v),ie=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);const Q=n.get(ie);if(ie.version!==Q.__version||J===!0){t.activeTexture(i.TEXTURE0+k);const pe=mt.getPrimaries(mt.workingColorSpace),le=v.colorSpace===ui?null:mt.getPrimaries(v.colorSpace),Me=v.colorSpace===ui||pe===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const rt=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,Te=[];for(let Y=0;Y<6;Y++)!rt&&!ne?Te[Y]=g(v.image[Y],!0,r.maxCubemapSize):Te[Y]=ne?v.image[Y].image:v.image[Y],Te[Y]=St(v,Te[Y]);const ke=Te[0],Ge=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type),nt=b(v.internalFormat,Ge,Ae,v.colorSpace),Ke=v.isVideoTexture!==!0,xt=Q.__version===void 0||J===!0,L=ie.dataReady;let ve=R(v,ke);Qe(i.TEXTURE_CUBE_MAP,v);let G;if(rt){Ke&&xt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,nt,ke.width,ke.height);for(let Y=0;Y<6;Y++){G=Te[Y].mipmaps;for(let Se=0;Se<G.length;Se++){const ue=G[Se];v.format!==Cn?Ge!==null?Ke?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,0,0,ue.width,ue.height,Ge,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,nt,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,0,0,ue.width,ue.height,Ge,Ae,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,nt,ue.width,ue.height,0,Ge,Ae,ue.data)}}}else{if(G=v.mipmaps,Ke&&xt){G.length>0&&ve++;const Y=Le(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,nt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ne){Ke?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te[Y].width,Te[Y].height,Ge,Ae,Te[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,nt,Te[Y].width,Te[Y].height,0,Ge,Ae,Te[Y].data);for(let Se=0;Se<G.length;Se++){const Ye=G[Se].image[Y].image;Ke?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,0,0,Ye.width,Ye.height,Ge,Ae,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,nt,Ye.width,Ye.height,0,Ge,Ae,Ye.data)}}else{Ke?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ge,Ae,Te[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,nt,Ge,Ae,Te[Y]);for(let Se=0;Se<G.length;Se++){const ue=G[Se];Ke?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,0,0,Ge,Ae,ue.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,nt,Ge,Ae,ue.image[Y])}}}_(v)&&u(i.TEXTURE_CUBE_MAP),Q.__version=ie.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Ce(T,v,k,J,ie,Q){const pe=s.convert(k.format,k.colorSpace),le=s.convert(k.type),Me=b(k.internalFormat,pe,le,k.colorSpace),rt=n.get(v),ne=n.get(k);if(ne.__renderTarget=v,!rt.__hasExternalTextures){const Te=Math.max(1,v.width>>Q),ke=Math.max(1,v.height>>Q);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Q,Me,Te,ke,v.depth,0,pe,le,null):t.texImage2D(ie,Q,Me,Te,ke,0,pe,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Je(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ie,ne.__webglTexture,0,tt(v)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ie,ne.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(T,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const J=v.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Q=S(v.stencilBuffer,ie),pe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=tt(v);Je(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Q,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,T)}else{const J=v.textures;for(let ie=0;ie<J.length;ie++){const Q=J[ie],pe=s.convert(Q.format,Q.colorSpace),le=s.convert(Q.type),Me=b(Q.internalFormat,pe,le,Q.colorSpace),rt=tt(v);k&&Je(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Me,v.width,v.height):Je(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Me,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Me,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),re(v.depthTexture,0);const ie=J.__webglTexture,Q=tt(v);if(v.depthTexture.format===Fr)Je(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(v.depthTexture.format===Br)Je(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function lt(T){const v=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const ie=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),v.__depthDisposeCallback=ie}v.__boundDepthTexture=J}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Fe(v.__webglFramebuffer,T)}else if(k){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),me(v.__webglDepthbuffer[J],T,!1);else{const ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),me(v.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(T,v,k){const J=n.get(T);v!==void 0&&Ce(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&lt(T)}function At(T){const v=T.texture,k=n.get(T),J=n.get(v);T.addEventListener("dispose",I);const ie=T.textures,Q=T.isWebGLCubeRenderTarget===!0,pe=ie.length>1;if(pe||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,o.memory.textures++),Q){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let Me=0;Me<v.mipmaps.length;Me++)k.__webglFramebuffer[le][Me]=i.createFramebuffer()}else k.__webglFramebuffer[le]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)k.__webglFramebuffer[le]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(pe)for(let le=0,Me=ie.length;le<Me;le++){const rt=n.get(ie[le]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Je(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let le=0;le<ie.length;le++){const Me=ie[le];k.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[le]);const rt=s.convert(Me.format,Me.colorSpace),ne=s.convert(Me.type),Te=b(Me.internalFormat,rt,ne,Me.colorSpace,T.isXRRenderTarget===!0),ke=tt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Te,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,k.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),me(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)Ce(k.__webglFramebuffer[le][Me],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me);else Ce(k.__webglFramebuffer[le],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);_(v)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let le=0,Me=ie.length;le<Me;le++){const rt=ie[le],ne=n.get(rt);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),Qe(i.TEXTURE_2D,rt),Ce(k.__webglFramebuffer,T,rt,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),_(rt)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),Qe(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)Ce(k.__webglFramebuffer[Me],T,v,i.COLOR_ATTACHMENT0,le,Me);else Ce(k.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,le,0);_(v)&&u(le),t.unbindTexture()}T.depthBuffer&&lt(T)}function bt(T){const v=T.textures;for(let k=0,J=v.length;k<J;k++){const ie=v[k];if(_(ie)){const Q=C(T),pe=n.get(ie).__webglTexture;t.bindTexture(Q,pe),u(Q),t.unbindTexture()}}}const $e=[],O=[];function Et(T){if(T.samples>0){if(Je(T)===!1){const v=T.textures,k=T.width,J=T.height;let ie=i.COLOR_BUFFER_BIT;const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(T),le=v.length>1;if(le)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Me]);const rt=n.get(v[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,ie,i.NEAREST),c===!0&&($e.length=0,O.length=0,$e.push(i.COLOR_ATTACHMENT0+Me),T.depthBuffer&&T.resolveDepthBuffer===!1&&($e.push(Q),O.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Me]);const rt=n.get(v[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function tt(T){return Math.min(r.maxSamples,T.samples)}function Je(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pe(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function St(T,v){const k=T.colorSpace,J=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==xr&&k!==ui&&(mt.getTransfer(k)===yt?(J!==Cn||ie!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Le(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=j,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=te,this.setTextureCube=X,this.rebindTextures=Be,this.setupRenderTarget=At,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Je}function H_(i,e){function t(n,r=ui){let s;const o=mt.getTransfer(r);if(n===ni)return i.UNSIGNED_BYTE;if(n===Ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rl)return i.BYTE;if(n===wl)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===Na)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===Hr)return i.HALF_FLOAT;if(n===Il)return i.ALPHA;if(n===Ol)return i.RGB;if(n===Cn)return i.RGBA;if(n===Dl)return i.LUMINANCE;if(n===Ll)return i.LUMINANCE_ALPHA;if(n===Fr)return i.DEPTH_COMPONENT;if(n===Br)return i.DEPTH_STENCIL;if(n===Pl)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===Nl)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===za)return i.RGBA_INTEGER;if(n===ws||n===Cs||n===Is||n===Os)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ws)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ws)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===Jo||n===ea||n===ta)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===na||n===ia||n===ra)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===na||n===ia)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ra)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===oa||n===aa||n===ca||n===la||n===da||n===ha||n===ua||n===fa||n===pa||n===ma||n===_a||n===ga||n===va)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sa)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===la)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_a)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===va)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ds||n===xa||n===ya)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ds)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ul||n===Ea||n===Sa||n===Ma)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ds)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ma)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V_=`
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

}`;class W_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new en,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:G_,fragmentShader:V_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new Ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X_ extends Er{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,m=null;const g=new W_,_=t.getContextAttributes();let u=null,C=null;const b=[],S=[],R=new vt;let A=null;const I=new xn;I.viewport=new Rt;const P=new xn;P.viewport=new Rt;const M=[I,P],E=new hu;let D=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=b[K];return fe===void 0&&(fe=new yo,b[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=b[K];return fe===void 0&&(fe=new yo,b[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=b[K];return fe===void 0&&(fe=new yo,b[K]=fe),fe.getHandSpace()};function B(K){const fe=S.indexOf(K.inputSource);if(fe===-1)return;const Ce=b[fe];Ce!==void 0&&(Ce.update(K.inputSource,K.frame,l||o),Ce.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",re);for(let K=0;K<b.length;K++){const fe=S[K];fe!==null&&(S[K]=null,b[K].disconnect(fe))}D=null,j=null,g.reset(),e.setRenderTarget(u),p=null,f=null,d=null,r=null,C=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",$),r.addEventListener("inputsourceschange",re),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,me=null,Fe=null;_.depth&&(Fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=_.stencil?Br:Fr,me=_.stencil?kr:Fi);const lt={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(lt),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new Bi(f.textureWidth,f.textureHeight,{format:Cn,type:ni,depthTexture:new $l(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new Bi(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(K){for(let fe=0;fe<K.removed.length;fe++){const Ce=K.removed[fe],me=S.indexOf(Ce);me>=0&&(S[me]=null,b[me].disconnect(Ce))}for(let fe=0;fe<K.added.length;fe++){const Ce=K.added[fe];let me=S.indexOf(Ce);if(me===-1){for(let lt=0;lt<b.length;lt++)if(lt>=S.length){S.push(Ce),me=lt;break}else if(S[lt]===null){S[lt]=Ce,me=lt;break}if(me===-1)break}const Fe=b[me];Fe&&Fe.connect(Ce)}}const Z=new V,te=new V;function X(K,fe,Ce){Z.setFromMatrixPosition(fe.matrixWorld),te.setFromMatrixPosition(Ce.matrixWorld);const me=Z.distanceTo(te),Fe=fe.projectionMatrix.elements,lt=Ce.projectionMatrix.elements,Be=Fe[14]/(Fe[10]-1),At=Fe[14]/(Fe[10]+1),bt=(Fe[9]+1)/Fe[5],$e=(Fe[9]-1)/Fe[5],O=(Fe[8]-1)/Fe[0],Et=(lt[8]+1)/lt[0],tt=Be*O,Je=Be*Et,Pe=me/(-O+Et),St=Pe*-O;if(fe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(St),K.translateZ(Pe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Fe[10]===-1)K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Le=Be+Pe,T=At+Pe,v=tt-St,k=Je+(me-St),J=bt*At/T*Le,ie=$e*At/T*Le;K.projectionMatrix.makePerspective(v,k,J,ie,Le,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let fe=K.near,Ce=K.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(Ce=g.depthFar)),E.near=P.near=I.near=fe,E.far=P.far=I.far=Ce,(D!==E.near||j!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,j=E.far),I.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,E.layers.mask=I.layers.mask|P.layers.mask;const me=K.parent,Fe=E.cameras;ae(E,me);for(let lt=0;lt<Fe.length;lt++)ae(Fe[lt],me);Fe.length===2?X(E,I,P):E.projectionMatrix.copy(I.projectionMatrix),be(K,E,me)};function be(K,fe,Ce){Ce===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(Ce.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ta*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(E)};let Ie=null;function Qe(K,fe){if(h=fe.getViewerPose(l||o),m=fe,h!==null){const Ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let me=!1;Ce.length!==E.cameras.length&&(E.cameras.length=0,me=!0);for(let Be=0;Be<Ce.length;Be++){const At=Ce[Be];let bt=null;if(p!==null)bt=p.getViewport(At);else{const O=d.getViewSubImage(f,At);bt=O.viewport,Be===0&&(e.setRenderTargetTextures(C,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(C))}let $e=M[Be];$e===void 0&&($e=new xn,$e.layers.enable(Be),$e.viewport=new Rt,M[Be]=$e),$e.matrix.fromArray(At.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(At.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(bt.x,bt.y,bt.width,bt.height),Be===0&&(E.matrix.copy($e.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),me===!0&&E.cameras.push($e)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Be=d.getDepthInformation(Ce[0]);Be&&Be.isValid&&Be.texture&&g.init(e,Be,r.renderState)}}for(let Ce=0;Ce<b.length;Ce++){const me=S[Ce],Fe=b[Ce];me!==null&&Fe!==void 0&&Fe.update(me,fe,l||o)}Ie&&Ie(K,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),m=null}const it=new Ql;it.setAnimationLoop(Qe),this.setAnimationLoop=function(K){Ie=K},this.dispose=function(){}}}const Ai=new Bn,q_=new wt;function K_(i,e){function t(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function n(_,u){u.color.getRGB(_.fogColor.value,ql(i)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function r(_,u,C,b,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(_,u):u.isMeshToonMaterial?(s(_,u),d(_,u)):u.isMeshPhongMaterial?(s(_,u),h(_,u)):u.isMeshStandardMaterial?(s(_,u),f(_,u),u.isMeshPhysicalMaterial&&p(_,u,S)):u.isMeshMatcapMaterial?(s(_,u),m(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),g(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(o(_,u),u.isLineDashedMaterial&&a(_,u)):u.isPointsMaterial?c(_,u,C,b):u.isSpriteMaterial?l(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,t(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,t(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,t(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===Jt&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,t(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===Jt&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,t(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,t(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const C=e.get(u),b=C.envMap,S=C.envMapRotation;b&&(_.envMap.value=b,Ai.copy(S),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),_.envMapRotation.value.setFromMatrix4(q_.makeRotationFromEuler(Ai)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,_.aoMapTransform))}function o(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,t(u.map,_.mapTransform))}function a(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function c(_,u,C,b){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*C,_.scale.value=b*.5,u.map&&(_.map.value=u.map,t(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,t(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function l(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,t(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,t(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function h(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function d(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function f(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function p(_,u,C){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Jt&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,u){u.matcap&&(_.matcap.value=u.matcap)}function g(_,u){const C=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Y_(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,b){const S=b.program;n.uniformBlockBinding(C,S)}function l(C,b){let S=r[C.id];S===void 0&&(m(C),S=h(C),r[C.id]=S,C.addEventListener("dispose",_));const R=b.program;n.updateUBOMapping(C,R);const A=e.render.frame;s[C.id]!==A&&(f(C),s[C.id]=A)}function h(C){const b=d();C.__bindingPointIndex=b;const S=i.createBuffer(),R=C.__size,A=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const b=r[C.id],S=C.uniforms,R=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,I=S.length;A<I;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,E=P.length;M<E;M++){const D=P[M];if(p(D,A,M,R)===!0){const j=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let re=0;re<B.length;re++){const Z=B[re],te=g(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,j+$,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,$),$+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(C,b,S,R){const A=C.value,I=b+"_"+S;if(R[I]===void 0)return typeof A=="number"||typeof A=="boolean"?R[I]=A:R[I]=A.clone(),!0;{const P=R[I];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[I]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function m(C){const b=C.uniforms;let S=0;const R=16;for(let I=0,P=b.length;I<P;I++){const M=Array.isArray(b[I])?b[I]:[b[I]];for(let E=0,D=M.length;E<D;E++){const j=M[E],B=Array.isArray(j.value)?j.value:[j.value];for(let $=0,re=B.length;$<re;$++){const Z=B[$],te=g(Z),X=S%R,ae=X%te.boundary,be=X+ae;S+=ae,be!==0&&R-be<te.storage&&(S+=R-be),j.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=S,S+=te.storage}}}const A=S%R;return A>0&&(S+=R-A),C.__size=S,C.__cache={},this}function g(C){const b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),b}function _(C){const b=C.target;b.removeEventListener("dispose",_);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function u(){for(const C in r)i.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:c,update:l,dispose:u}}class $_{constructor(e={}){const{canvas:t=Rh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,u=null;const C=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=vn;let A=0,I=0,P=null,M=-1,E=null;const D=new Rt,j=new Rt;let B=null;const $=new _t(0);let re=0,Z=t.width,te=t.height,X=1,ae=null,be=null;const Ie=new Rt(0,0,Z,te),Qe=new Rt(0,0,Z,te);let it=!1;const K=new Wa;let fe=!1,Ce=!1;const me=new wt,Fe=new wt,lt=new V,Be=new Rt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function $e(){return P===null?X:1}let O=n;function Et(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${La}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ue,!1),O===null){const N="webgl2";if(O=Et(N,y),O===null)throw Et(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let tt,Je,Pe,St,Le,T,v,k,J,ie,Q,pe,le,Me,rt,ne,Te,ke,Ge,Ae,nt,Ke,xt,L;function ve(){tt=new sm(O),tt.init(),Ke=new H_(O,tt),Je=new Qp(O,tt,e,Ke),Pe=new B_(O,tt),Je.reverseDepthBuffer&&f&&Pe.buffers.depth.setReversed(!0),St=new cm(O),Le=new A_,T=new z_(O,tt,Pe,Le,Je,Ke,St),v=new em(S),k=new rm(S),J=new fu(O),xt=new jp(O,J),ie=new om(O,J,St,xt),Q=new dm(O,ie,J,St),Ge=new lm(O,Je,T),ne=new Jp(Le),pe=new b_(S,v,k,tt,Je,xt,ne),le=new K_(S,Le),Me=new w_,rt=new P_(tt),ke=new $p(S,v,k,Pe,Q,p,c),Te=new k_(S,Q,Je),L=new Y_(O,St,Je,Pe),Ae=new Zp(O,tt,St),nt=new am(O,tt,St),St.programs=pe.programs,S.capabilities=Je,S.extensions=tt,S.properties=Le,S.renderLists=Me,S.shadowMap=Te,S.state=Pe,S.info=St}ve();const G=new X_(S,O);this.xr=G,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=tt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=tt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(Z,te,!1))},this.getSize=function(y){return y.set(Z,te)},this.setSize=function(y,N,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,te=N,t.width=Math.floor(y*X),t.height=Math.floor(N*X),z===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(Z*X,te*X).floor()},this.setDrawingBufferSize=function(y,N,z){Z=y,te=N,X=z,t.width=Math.floor(y*z),t.height=Math.floor(N*z),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(Ie)},this.setViewport=function(y,N,z,H){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,N,z,H),Pe.viewport(D.copy(Ie).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(Qe)},this.setScissor=function(y,N,z,H){y.isVector4?Qe.set(y.x,y.y,y.z,y.w):Qe.set(y,N,z,H),Pe.scissor(j.copy(Qe).multiplyScalar(X).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(y){Pe.setScissorTest(it=y)},this.setOpaqueSort=function(y){ae=y},this.setTransparentSort=function(y){be=y},this.getClearColor=function(y){return y.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,z=!0){let H=0;if(y){let U=!1;if(P!==null){const oe=P.texture.format;U=oe===za||oe===Ba||oe===Fa}if(U){const oe=P.texture.type,xe=oe===ni||oe===Fi||oe===Ur||oe===kr||oe===Ua||oe===ka,_e=ke.getClearColor(),Re=ke.getClearAlpha(),Ve=_e.r,ze=_e.g,Ne=_e.b;xe?(m[0]=Ve,m[1]=ze,m[2]=Ne,m[3]=Re,O.clearBufferuiv(O.COLOR,0,m)):(g[0]=Ve,g[1]=ze,g[2]=Ne,g[3]=Re,O.clearBufferiv(O.COLOR,0,g))}else H|=O.COLOR_BUFFER_BIT}N&&(H|=O.DEPTH_BUFFER_BIT),z&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ke.dispose(),Me.dispose(),rt.dispose(),Le.dispose(),v.dispose(),k.dispose(),Q.dispose(),xt.dispose(),L.dispose(),pe.dispose(),G.dispose(),G.removeEventListener("sessionstart",qr),G.removeEventListener("sessionend",Kr),En.stop()};function Y(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=St.autoReset,N=Te.enabled,z=Te.autoUpdate,H=Te.needsUpdate,U=Te.type;ve(),St.autoReset=y,Te.enabled=N,Te.autoUpdate=z,Te.needsUpdate=H,Te.type=U}function ue(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ye(y){const N=y.target;N.removeEventListener("dispose",Ye),Tt(N)}function Tt(y){ht(y),Le.remove(y)}function ht(y){const N=Le.get(y).programs;N!==void 0&&(N.forEach(function(z){pe.releaseProgram(z)}),y.isShaderMaterial&&pe.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,z,H,U,oe){N===null&&(N=At);const xe=U.isMesh&&U.matrixWorld.determinant()<0,_e=Zr(y,N,z,H,U);Pe.setMaterial(H,xe);let Re=z.index,Ve=1;if(H.wireframe===!0){if(Re=ie.getWireframeAttribute(z),Re===void 0)return;Ve=2}const ze=z.drawRange,Ne=z.attributes.position;let F=ze.start*Ve,ee=(ze.start+ze.count)*Ve;oe!==null&&(F=Math.max(F,oe.start*Ve),ee=Math.min(ee,(oe.start+oe.count)*Ve)),Re!==null?(F=Math.max(F,0),ee=Math.min(ee,Re.count)):Ne!=null&&(F=Math.max(F,0),ee=Math.min(ee,Ne.count));const se=ee-F;if(se<0||se===1/0)return;xt.setup(U,H,_e,z,Re);let Ee,De=Ae;if(Re!==null&&(Ee=J.get(Re),De=nt,De.setIndex(Ee)),U.isMesh)H.wireframe===!0?(Pe.setLineWidth(H.wireframeLinewidth*$e()),De.setMode(O.LINES)):De.setMode(O.TRIANGLES);else if(U.isLine){let ce=H.linewidth;ce===void 0&&(ce=1),Pe.setLineWidth(ce*$e()),U.isLineSegments?De.setMode(O.LINES):U.isLineLoop?De.setMode(O.LINE_LOOP):De.setMode(O.LINE_STRIP)}else U.isPoints?De.setMode(O.POINTS):U.isSprite&&De.setMode(O.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))De.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ce=U._multiDrawStarts,ot=U._multiDrawCounts,Xe=U._multiDrawCount,Lt=Re?J.get(Re).bytesPerElement:1,On=Le.get(H).currentProgram.getUniforms();for(let Ft=0;Ft<Xe;Ft++)On.setValue(O,"_gl_DrawID",Ft),De.render(ce[Ft]/Lt,ot[Ft])}else if(U.isInstancedMesh)De.renderInstances(F,se,U.count);else if(z.isInstancedBufferGeometry){const ce=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ot=Math.min(z.instanceCount,ce);De.renderInstances(F,se,ot)}else De.render(F,se)};function gt(y,N,z){y.transparent===!0&&y.side===jn&&y.forceSinglePass===!1?(y.side=Jt,y.needsUpdate=!0,Gi(y,N,z),y.side=mi,y.needsUpdate=!0,Gi(y,N,z),y.side=jn):Gi(y,N,z)}this.compile=function(y,N,z=null){z===null&&(z=y),u=rt.get(z),u.init(N),b.push(u),z.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),y!==z&&y.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const H=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let xe=0;xe<oe.length;xe++){const _e=oe[xe];gt(_e,z,U),H.add(_e)}else gt(oe,z,U),H.add(oe)}),u=b.pop(),H},this.compileAsync=function(y,N,z=null){const H=this.compile(y,N,z);return new Promise(U=>{function oe(){if(H.forEach(function(xe){Le.get(xe).currentProgram.isReady()&&H.delete(xe)}),H.size===0){U(y);return}setTimeout(oe,10)}tt.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let tn=null;function Oe(y){tn&&tn(y)}function qr(){En.stop()}function Kr(){En.start()}const En=new Ql;En.setAnimationLoop(Oe),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(y){tn=y,G.setAnimationLoop(y),y===null?En.stop():En.start()},G.addEventListener("sessionstart",qr),G.addEventListener("sessionend",Kr),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(N),N=G.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,N,P),u=rt.get(y,b.length),u.init(N),b.push(u),Fe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(Fe),Ce=this.localClippingEnabled,fe=ne.init(this.clippingPlanes,Ce),_=Me.get(y,C.length),_.init(),C.push(_),G.enabled===!0&&G.isPresenting===!0){const oe=S.xr.getDepthSensingMesh();oe!==null&&zi(oe,N,-1/0,S.sortObjects)}zi(y,N,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(ae,be),bt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,bt&&ke.addToRenderList(_,y),this.info.render.frame++,fe===!0&&ne.beginShadows();const z=u.state.shadowsArray;Te.render(z,y,N),fe===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,U=_.transmissive;if(u.setupLights(),N.isArrayCamera){const oe=N.cameras;if(U.length>0)for(let xe=0,_e=oe.length;xe<_e;xe++){const Re=oe[xe];Yr(H,U,y,Re)}bt&&ke.render(y);for(let xe=0,_e=oe.length;xe<_e;xe++){const Re=oe[xe];Mr(_,y,Re,Re.viewport)}}else U.length>0&&Yr(H,U,y,N),bt&&ke.render(y),Mr(_,y,N);P!==null&&I===0&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(S,y,N),xt.resetDefaultState(),M=-1,E=null,b.pop(),b.length>0?(u=b[b.length-1],fe===!0&&ne.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,C.pop(),C.length>0?_=C[C.length-1]:_=null};function zi(y,N,z,H){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){H&&Be.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Fe);const xe=Q.update(y),_e=y.material;_e.visible&&_.push(y,xe,_e,z,Be.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||K.intersectsObject(y))){const xe=Q.update(y),_e=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Be.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Be.copy(xe.boundingSphere.center)),Be.applyMatrix4(y.matrixWorld).applyMatrix4(Fe)),Array.isArray(_e)){const Re=xe.groups;for(let Ve=0,ze=Re.length;Ve<ze;Ve++){const Ne=Re[Ve],F=_e[Ne.materialIndex];F&&F.visible&&_.push(y,xe,F,z,Be.z,Ne)}}else _e.visible&&_.push(y,xe,_e,z,Be.z,null)}}const oe=y.children;for(let xe=0,_e=oe.length;xe<_e;xe++)zi(oe[xe],N,z,H)}function Mr(y,N,z,H){const U=y.opaque,oe=y.transmissive,xe=y.transparent;u.setupLightsView(z),fe===!0&&ne.setGlobalState(S.clippingPlanes,z),H&&Pe.viewport(D.copy(H)),U.length>0&&Hi(U,N,z),oe.length>0&&Hi(oe,N,z),xe.length>0&&Hi(xe,N,z),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Yr(y,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Bi(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Hr:ni,minFilter:ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const oe=u.state.transmissionRenderTarget[H.id],xe=H.viewport||D;oe.setSize(xe.z*S.transmissionResolutionScale,xe.w*S.transmissionResolutionScale);const _e=S.getRenderTarget();S.setRenderTarget(oe),S.getClearColor($),re=S.getClearAlpha(),re<1&&S.setClearColor(16777215,.5),S.clear(),bt&&ke.render(z);const Re=S.toneMapping;S.toneMapping=pi;const Ve=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),fe===!0&&ne.setGlobalState(S.clippingPlanes,H),Hi(y,z,H),T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ne=0,F=N.length;Ne<F;Ne++){const ee=N[Ne],se=ee.object,Ee=ee.geometry,De=ee.material,ce=ee.group;if(De.side===jn&&se.layers.test(H.layers)){const ot=De.side;De.side=Jt,De.needsUpdate=!0,$r(se,z,H,Ee,De,ce),De.side=ot,De.needsUpdate=!0,ze=!0}}ze===!0&&(T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe))}S.setRenderTarget(_e),S.setClearColor($,re),Ve!==void 0&&(H.viewport=Ve),S.toneMapping=Re}function Hi(y,N,z){const H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,oe=y.length;U<oe;U++){const xe=y[U],_e=xe.object,Re=xe.geometry,Ve=xe.group;let ze=xe.material;ze.allowOverride===!0&&H!==null&&(ze=H),_e.layers.test(z.layers)&&$r(_e,N,z,Re,ze,Ve)}}function $r(y,N,z,H,U,oe){y.onBeforeRender(S,N,z,H,U,oe),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(S,N,z,H,y,oe),U.transparent===!0&&U.side===jn&&U.forceSinglePass===!1?(U.side=Jt,U.needsUpdate=!0,S.renderBufferDirect(z,N,H,U,y,oe),U.side=mi,U.needsUpdate=!0,S.renderBufferDirect(z,N,H,U,y,oe),U.side=jn):S.renderBufferDirect(z,N,H,U,y,oe),y.onAfterRender(S,N,z,H,U,oe)}function Gi(y,N,z){N.isScene!==!0&&(N=At);const H=Le.get(y),U=u.state.lights,oe=u.state.shadowsArray,xe=U.state.version,_e=pe.getParameters(y,U.state,oe,N,z),Re=pe.getProgramCacheKey(_e);let Ve=H.programs;H.environment=y.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(y.isMeshStandardMaterial?k:v).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ve===void 0&&(y.addEventListener("dispose",Ye),Ve=new Map,H.programs=Ve);let ze=Ve.get(Re);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===xe)return jr(y,_e),ze}else _e.uniforms=pe.getUniforms(y),y.onBeforeCompile(_e,S),ze=pe.acquireProgram(_e,Re),Ve.set(Re,ze),H.uniforms=_e.uniforms;const Ne=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ne.clippingPlanes=ne.uniform),jr(y,_e),H.needsLights=Ys(y),H.lightsStateVersion=xe,H.needsLights&&(Ne.ambientLightColor.value=U.state.ambient,Ne.lightProbe.value=U.state.probe,Ne.directionalLights.value=U.state.directional,Ne.directionalLightShadows.value=U.state.directionalShadow,Ne.spotLights.value=U.state.spot,Ne.spotLightShadows.value=U.state.spotShadow,Ne.rectAreaLights.value=U.state.rectArea,Ne.ltc_1.value=U.state.rectAreaLTC1,Ne.ltc_2.value=U.state.rectAreaLTC2,Ne.pointLights.value=U.state.point,Ne.pointLightShadows.value=U.state.pointShadow,Ne.hemisphereLights.value=U.state.hemi,Ne.directionalShadowMap.value=U.state.directionalShadowMap,Ne.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ne.spotShadowMap.value=U.state.spotShadowMap,Ne.spotLightMatrix.value=U.state.spotLightMatrix,Ne.spotLightMap.value=U.state.spotLightMap,Ne.pointShadowMap.value=U.state.pointShadowMap,Ne.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=ze,H.uniformsList=null,ze}function xi(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Ps.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function jr(y,N){const z=Le.get(y);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Zr(y,N,z,H,U){N.isScene!==!0&&(N=At),T.resetTextureUnits();const oe=N.fog,xe=H.isMeshStandardMaterial?N.environment:null,_e=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xr,Re=(H.isMeshStandardMaterial?k:v).get(H.envMap||xe),Ve=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ze=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!z.morphAttributes.position,F=!!z.morphAttributes.normal,ee=!!z.morphAttributes.color;let se=pi;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(se=S.toneMapping);const Ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,De=Ee!==void 0?Ee.length:0,ce=Le.get(H),ot=u.state.lights;if(fe===!0&&(Ce===!0||y!==E)){const Bt=y===E&&H.id===M;ne.setState(H,y,Bt)}let Xe=!1;H.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==ot.state.version||ce.outputColorSpace!==_e||U.isBatchedMesh&&ce.batching===!1||!U.isBatchedMesh&&ce.batching===!0||U.isBatchedMesh&&ce.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ce.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ce.instancing===!1||!U.isInstancedMesh&&ce.instancing===!0||U.isSkinnedMesh&&ce.skinning===!1||!U.isSkinnedMesh&&ce.skinning===!0||U.isInstancedMesh&&ce.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ce.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ce.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ce.instancingMorph===!1&&U.morphTexture!==null||ce.envMap!==Re||H.fog===!0&&ce.fog!==oe||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==ne.numPlanes||ce.numIntersection!==ne.numIntersection)||ce.vertexAlphas!==Ve||ce.vertexTangents!==ze||ce.morphTargets!==Ne||ce.morphNormals!==F||ce.morphColors!==ee||ce.toneMapping!==se||ce.morphTargetsCount!==De)&&(Xe=!0):(Xe=!0,ce.__version=H.version);let Lt=ce.currentProgram;Xe===!0&&(Lt=Gi(H,N,U));let On=!1,Ft=!1,nn=!1;const at=Lt.getUniforms(),zt=ce.uniforms;if(Pe.useProgram(Lt.program)&&(On=!0,Ft=!0,nn=!0),H.id!==M&&(M=H.id,Ft=!0),On||E!==y){Pe.buffers.depth.getReversed()?(me.copy(y.projectionMatrix),Ch(me),Ih(me),at.setValue(O,"projectionMatrix",me)):at.setValue(O,"projectionMatrix",y.projectionMatrix),at.setValue(O,"viewMatrix",y.matrixWorldInverse);const qt=at.map.cameraPosition;qt!==void 0&&qt.setValue(O,lt.setFromMatrixPosition(y.matrixWorld)),Je.logarithmicDepthBuffer&&at.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&at.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,Ft=!0,nn=!0)}if(U.isSkinnedMesh){at.setOptional(O,U,"bindMatrix"),at.setOptional(O,U,"bindMatrixInverse");const Bt=U.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),at.setValue(O,"boneTexture",Bt.boneTexture,T))}U.isBatchedMesh&&(at.setOptional(O,U,"batchingTexture"),at.setValue(O,"batchingTexture",U._matricesTexture,T),at.setOptional(O,U,"batchingIdTexture"),at.setValue(O,"batchingIdTexture",U._indirectTexture,T),at.setOptional(O,U,"batchingColorTexture"),U._colorsTexture!==null&&at.setValue(O,"batchingColorTexture",U._colorsTexture,T));const Xt=z.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&Ge.update(U,z,Lt),(Ft||ce.receiveShadow!==U.receiveShadow)&&(ce.receiveShadow=U.receiveShadow,at.setValue(O,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(zt.envMap.value=Re,zt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(zt.envMapIntensity.value=N.environmentIntensity),Ft&&(at.setValue(O,"toneMappingExposure",S.toneMappingExposure),ce.needsLights&&Ks(zt,nn),oe&&H.fog===!0&&le.refreshFogUniforms(zt,oe),le.refreshMaterialUniforms(zt,H,X,te,u.state.transmissionRenderTarget[y.id]),Ps.upload(O,xi(ce),zt,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ps.upload(O,xi(ce),zt,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&at.setValue(O,"center",U.center),at.setValue(O,"modelViewMatrix",U.modelViewMatrix),at.setValue(O,"normalMatrix",U.normalMatrix),at.setValue(O,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Bt=H.uniformsGroups;for(let qt=0,Vi=Bt.length;qt<Vi;qt++){const zn=Bt[qt];L.update(zn,Lt),L.bind(zn,Lt)}}return Lt}function Ks(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Ys(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,N,z){const H=Le.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Le.get(y.texture).__webglTexture=N,Le.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const z=Le.get(y);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const ii=O.createFramebuffer();this.setRenderTarget=function(y,N=0,z=0){P=y,A=N,I=z;let H=!0,U=null,oe=!1,xe=!1;if(y){const Re=Le.get(y);if(Re.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(O.FRAMEBUFFER,null),H=!1;else if(Re.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(Re.__hasExternalTextures)T.rebindTextures(y,Le.get(y.texture).__webglTexture,Le.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ne=y.depthTexture;if(Re.__boundDepthTexture!==Ne){if(Ne!==null&&Le.has(Ne)&&(y.width!==Ne.image.width||y.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const Ve=y.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(xe=!0);const ze=Le.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?U=ze[N][z]:U=ze[N],oe=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?U=Le.get(y).__webglMultisampledFramebuffer:Array.isArray(ze)?U=ze[z]:U=ze,D.copy(y.viewport),j.copy(y.scissor),B=y.scissorTest}else D.copy(Ie).multiplyScalar(X).floor(),j.copy(Qe).multiplyScalar(X).floor(),B=it;if(z!==0&&(U=ii),Pe.bindFramebuffer(O.FRAMEBUFFER,U)&&H&&Pe.drawBuffers(y,U),Pe.viewport(D),Pe.scissor(j),Pe.setScissorTest(B),oe){const Re=Le.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,z)}else if(xe){const Re=Le.get(y.texture),Ve=N;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,z,Ve)}else if(y!==null&&z!==0){const Re=Le.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Re.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(y,N,z,H,U,oe,xe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Le.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(_e=_e[xe]),_e){Pe.bindFramebuffer(O.FRAMEBUFFER,_e);try{const Re=y.texture,Ve=Re.format,ze=Re.type;if(!Je.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-H&&z>=0&&z<=y.height-U&&O.readPixels(N,z,H,U,Ke.convert(Ve),Ke.convert(ze),oe)}finally{const Re=P!==null?Le.get(P).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,N,z,H,U,oe,xe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Le.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(_e=_e[xe]),_e)if(N>=0&&N<=y.width-H&&z>=0&&z<=y.height-U){Pe.bindFramebuffer(O.FRAMEBUFFER,_e);const Re=y.texture,Ve=Re.format,ze=Re.type;if(!Je.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ne),O.bufferData(O.PIXEL_PACK_BUFFER,oe.byteLength,O.STREAM_READ),O.readPixels(N,z,H,U,Ke.convert(Ve),Ke.convert(ze),0);const F=P!==null?Le.get(P).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,F);const ee=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await wh(O,ee,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ne),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,oe),O.deleteBuffer(Ne),O.deleteSync(ee),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,z=0){const H=Math.pow(2,-z),U=Math.floor(y.image.width*H),oe=Math.floor(y.image.height*H),xe=N!==null?N.x:0,_e=N!==null?N.y:0;T.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,xe,_e,U,oe),Pe.unbindTexture()};const $s=O.createFramebuffer(),Qr=O.createFramebuffer();this.copyTextureToTexture=function(y,N,z=null,H=null,U=0,oe=null){oe===null&&(U!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=U,U=0):oe=0);let xe,_e,Re,Ve,ze,Ne,F,ee,se;const Ee=y.isCompressedTexture?y.mipmaps[oe]:y.image;if(z!==null)xe=z.max.x-z.min.x,_e=z.max.y-z.min.y,Re=z.isBox3?z.max.z-z.min.z:1,Ve=z.min.x,ze=z.min.y,Ne=z.isBox3?z.min.z:0;else{const Xt=Math.pow(2,-U);xe=Math.floor(Ee.width*Xt),_e=Math.floor(Ee.height*Xt),y.isDataArrayTexture?Re=Ee.depth:y.isData3DTexture?Re=Math.floor(Ee.depth*Xt):Re=1,Ve=0,ze=0,Ne=0}H!==null?(F=H.x,ee=H.y,se=H.z):(F=0,ee=0,se=0);const De=Ke.convert(N.format),ce=Ke.convert(N.type);let ot;N.isData3DTexture?(T.setTexture3D(N,0),ot=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),ot=O.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),ot=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const Xe=O.getParameter(O.UNPACK_ROW_LENGTH),Lt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),On=O.getParameter(O.UNPACK_SKIP_PIXELS),Ft=O.getParameter(O.UNPACK_SKIP_ROWS),nn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ee.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ee.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ve),O.pixelStorei(O.UNPACK_SKIP_ROWS,ze),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ne);const at=y.isDataArrayTexture||y.isData3DTexture,zt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const Xt=Le.get(y),Bt=Le.get(N),qt=Le.get(Xt.__renderTarget),Vi=Le.get(Bt.__renderTarget);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,qt.__webglFramebuffer),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let zn=0;zn<Re;zn++)at&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get(y).__webglTexture,U,Ne+zn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get(N).__webglTexture,oe,se+zn)),O.blitFramebuffer(Ve,ze,xe,_e,F,ee,xe,_e,O.DEPTH_BUFFER_BIT,O.NEAREST);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||Le.has(y)){const Xt=Le.get(y),Bt=Le.get(N);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,$s),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Qr);for(let qt=0;qt<Re;qt++)at?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.__webglTexture,U,Ne+qt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xt.__webglTexture,U),zt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.__webglTexture,oe,se+qt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Bt.__webglTexture,oe),U!==0?O.blitFramebuffer(Ve,ze,xe,_e,F,ee,xe,_e,O.COLOR_BUFFER_BIT,O.NEAREST):zt?O.copyTexSubImage3D(ot,oe,F,ee,se+qt,Ve,ze,xe,_e):O.copyTexSubImage2D(ot,oe,F,ee,Ve,ze,xe,_e);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else zt?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(ot,oe,F,ee,se,xe,_e,Re,De,ce,Ee.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(ot,oe,F,ee,se,xe,_e,Re,De,Ee.data):O.texSubImage3D(ot,oe,F,ee,se,xe,_e,Re,De,ce,Ee):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,oe,F,ee,xe,_e,De,ce,Ee.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,oe,F,ee,Ee.width,Ee.height,De,Ee.data):O.texSubImage2D(O.TEXTURE_2D,oe,F,ee,xe,_e,De,ce,Ee);O.pixelStorei(O.UNPACK_ROW_LENGTH,Xe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Lt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,On),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ft),O.pixelStorei(O.UNPACK_SKIP_IMAGES,nn),oe===0&&N.generateMipmaps&&O.generateMipmap(ot),Pe.unbindTexture()},this.copyTextureToTexture3D=function(y,N,z=null,H=null,U=0){return Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,z,H,U)},this.initRenderTarget=function(y){Le.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),Pe.unbindTexture()},this.resetState=function(){A=0,I=0,P=null,Pe.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const W=Object.freeze({DIRT:"dirt",STONE:"stone",WOOD:"wood",SAND:"sand",COBBLESTONE:"cobblestone",PLANKS:"planks",CLAY:"clay",GRAVEL:"gravel",GLASS:"glass",IRON_ORE:"iron_ore",COPPER_ORE:"copper_ore",IRON_INGOT:"iron_ingot",COPPER_INGOT:"copper_ingot",STICK:"stick",FIBER:"fiber",LEATHER:"leather",ROPE:"rope",COAL:"coal",RAW_MEAT:"raw_meat",COOKED_MEAT:"cooked_meat",RAW_BERRIES:"raw_berries",RAW_MUSHROOM:"raw_mushroom",RAW_FISH:"raw_fish",COOKED_FISH:"cooked_fish",STONE_PICKAXE:"stone_pickaxe",STONE_AXE:"stone_axe",IRON_PICKAXE:"iron_pickaxe",IRON_AXE:"iron_axe",LEATHER_ARMOR:"leather_armor",BANDAGE:"bandage",IRON_SWORD:"iron_sword",IRON_HAMMER:"iron_hammer",COPPER_PICKAXE:"copper_pickaxe",STEW:"stew",TRAIL_RATIONS:"trail_rations",HERB_SALAD:"herb_salad",TORCH:"torch",BEDROLL:"bedroll",MAP:"map",LORE_FRAGMENT:"lore_fragment",RELIC_SHARD:"relic_shard",WORKBENCH:"workbench",CAMPFIRE:"campfire",FORGE:"forge",KITCHEN:"kitchen",LOOM:"loom",THATCH:"thatch",STONE_BRICK:"stone_brick",DARK_STONE:"dark_stone",OAK_PLANKS:"oak_planks",BIRCH_WOOD:"birch_wood",SLATE:"slate",MARBLE:"marble",CHEST:"chest"}),x=Object.freeze({AIR:0,DIRT:1,STONE:2,GRASS:3,WOOD:4,LEAVES:5,SAND:6,WATER:7,CLAY:8,GRAVEL:9,COBBLESTONE:10,PLANKS:11,IRON_ORE:12,COPPER_ORE:13,COAL_ORE:14,GLASS:15,CAMPFIRE:16,WORKBENCH:17,FORGE:18,KITCHEN:19,LOOM:20,RUNE_TABLE:21,TORCH:22,THATCH:23,STONE_BRICK:24,IRON_BLOCK:25,COPPER_BLOCK:26,SNOW:27,ICE:28,MOSSY_STONE:29,CORRUPTED_STONE:30,DARK_STONE:31,OAK_PLANKS:32,BIRCH_WOOD:33,REED:34,MUD:35,SLATE:36,MARBLE:37,OBSIDIAN:38,CRYSTAL:39,TALL_GRASS:40,CHEST:41,BED:42,DOOR:43,DOOR_OPEN:44}),j_=new Set([x.AIR,x.WATER,x.TORCH,x.TALL_GRASS,x.LEAVES,x.BED,x.DOOR_OPEN]);function yn(i){return!j_.has(i)}const Z_=new Set([x.AIR,x.WATER]);function Q_(i){return!Z_.has(i)}const J_={[x.DIRT]:[{type:W.DIRT,count:1}],[x.STONE]:[{type:W.STONE,count:1}],[x.GRASS]:[{type:W.DIRT,count:1},{type:W.FIBER,count:1}],[x.WOOD]:[{type:W.WOOD,count:1}],[x.LEAVES]:[{type:W.STICK,count:1}],[x.SAND]:[{type:W.SAND,count:1}],[x.CLAY]:[{type:W.CLAY,count:1}],[x.GRAVEL]:[{type:W.GRAVEL,count:1}],[x.COBBLESTONE]:[{type:W.COBBLESTONE,count:1}],[x.PLANKS]:[{type:W.PLANKS,count:1}],[x.IRON_ORE]:[{type:W.IRON_ORE,count:1}],[x.COPPER_ORE]:[{type:W.COPPER_ORE,count:1}],[x.COAL_ORE]:[{type:W.COAL,count:1}],[x.GLASS]:[{type:W.GLASS,count:1}],[x.TORCH]:[{type:W.TORCH,count:1}],[x.THATCH]:[{type:W.FIBER,count:2}],[x.SNOW]:[{type:W.DIRT,count:1}],[x.DARK_STONE]:[{type:W.DARK_STONE,count:1}],[x.OAK_PLANKS]:[{type:W.OAK_PLANKS,count:1}],[x.BIRCH_WOOD]:[{type:W.BIRCH_WOOD,count:1}],[x.SLATE]:[{type:W.SLATE,count:1}],[x.MARBLE]:[{type:W.MARBLE,count:1}],[x.TALL_GRASS]:[{type:W.FIBER,count:1}],[x.WORKBENCH]:[{type:W.WORKBENCH,count:1}],[x.CAMPFIRE]:[{type:W.CAMPFIRE,count:1}],[x.FORGE]:[{type:W.FORGE,count:1}],[x.KITCHEN]:[{type:W.KITCHEN,count:1}],[x.LOOM]:[{type:W.LOOM,count:1}],[x.CHEST]:[{type:W.CHEST,count:1}]};function eg(i){return J_[i]||[]}const tg=Object.freeze({[x.DIRT]:"hand",[x.GRASS]:"hand",[x.LEAVES]:"hand",[x.TALL_GRASS]:"hand",[x.SAND]:"hand",[x.CLAY]:"hand",[x.GRAVEL]:"hand",[x.SNOW]:"hand",[x.MUD]:"hand",[x.THATCH]:"hand",[x.REED]:"hand",[x.WOOD]:"hand",[x.BIRCH_WOOD]:"hand",[x.PLANKS]:"hand",[x.OAK_PLANKS]:"hand",[x.STONE]:"pickaxe",[x.IRON_ORE]:"pickaxe",[x.COPPER_ORE]:"pickaxe",[x.COAL_ORE]:"pickaxe",[x.COBBLESTONE]:"pickaxe",[x.STONE_BRICK]:"pickaxe",[x.SLATE]:"pickaxe",[x.MARBLE]:"pickaxe",[x.DARK_STONE]:"pickaxe",[x.MOSSY_STONE]:"pickaxe",[x.CORRUPTED_STONE]:"pickaxe",[x.OBSIDIAN]:"pickaxe",[x.CRYSTAL]:"pickaxe",[x.ICE]:"pickaxe",[x.IRON_BLOCK]:"pickaxe",[x.COPPER_BLOCK]:"pickaxe",[x.GLASS]:"hand",[x.CAMPFIRE]:"hand",[x.WORKBENCH]:"hand",[x.FORGE]:"pickaxe",[x.KITCHEN]:"hand",[x.LOOM]:"hand",[x.RUNE_TABLE]:"pickaxe",[x.TORCH]:"hand",[x.CHEST]:"hand",[x.BED]:"hand",[x.DOOR]:"hand",[x.DOOR_OPEN]:"hand"});function ng(i,e){const t=tg[i]||"hand";return t==="hand"?!0:e==null?!1:e===t}const Aa=Object.freeze({[W.DIRT]:x.DIRT,[W.STONE]:x.STONE,[W.WOOD]:x.WOOD,[W.SAND]:x.SAND,[W.COBBLESTONE]:x.COBBLESTONE,[W.PLANKS]:x.PLANKS,[W.CLAY]:x.CLAY,[W.GRAVEL]:x.GRAVEL,[W.GLASS]:x.GLASS,[W.TORCH]:x.TORCH,[W.THATCH]:x.THATCH,[W.STONE_BRICK]:x.STONE_BRICK,[W.DARK_STONE]:x.DARK_STONE,[W.OAK_PLANKS]:x.OAK_PLANKS,[W.BIRCH_WOOD]:x.BIRCH_WOOD,[W.SLATE]:x.SLATE,[W.MARBLE]:x.MARBLE,[W.WORKBENCH]:x.WORKBENCH,[W.CAMPFIRE]:x.CAMPFIRE,[W.FORGE]:x.FORGE,[W.KITCHEN]:x.KITCHEN,[W.LOOM]:x.LOOM,[W.CHEST]:x.CHEST}),We=16;class id{constructor(){this.blocks=new Uint8Array(We*We*We)}_index(e,t,n){return e+t*We+n*We*We}_inBounds(e,t,n){return e>=0&&e<We&&t>=0&&t<We&&n>=0&&n<We}getBlock(e,t,n){return this._inBounds(e,t,n)?this.blocks[this._index(e,t,n)]:x.AIR}setBlock(e,t,n,r){this._inBounds(e,t,n)&&(this.blocks[this._index(e,t,n)]=r)}}class rd{constructor(){this.chunks=new Map}_chunkKey(e,t,n){return`${e},${t},${n}`}_worldToChunk(e,t,n){const r=Math.floor(e/We),s=Math.floor(t/We),o=Math.floor(n/We),a=(e%We+We)%We,c=(t%We+We)%We,l=(n%We+We)%We;return{cx:r,cy:s,cz:o,lx:a,ly:c,lz:l}}getChunk(e,t,n){return this.chunks.get(this._chunkKey(e,t,n))||null}_getOrCreateChunk(e,t,n){const r=this._chunkKey(e,t,n);let s=this.chunks.get(r);return s||(s=new id,this.chunks.set(r,s)),s}getBlock(e,t,n){if(t<0)return x.STONE;const{cx:r,cy:s,cz:o,lx:a,ly:c,lz:l}=this._worldToChunk(e,t,n),h=this.getChunk(r,s,o);return h?h.getBlock(a,c,l):x.AIR}isChunkLoaded(e,t,n){const{cx:r,cy:s,cz:o}=this._worldToChunk(e,t,n);return this.chunks.has(this._chunkKey(r,s,o))}setBlock(e,t,n,r){const{cx:s,cy:o,cz:a,lx:c,ly:l,lz:h}=this._worldToChunk(e,t,n);this._getOrCreateChunk(s,o,a).setBlock(c,l,h,r)}}const Yn=new Uint8Array(512);(function(){const e=new Uint8Array(256);for(let n=0;n<256;n++)e[n]=n;let t=12345;for(let n=255;n>0;n--){t=t*1103515245+12345&2147483647;const r=t%(n+1);[e[n],e[r]]=[e[r],e[n]]}for(let n=0;n<512;n++)Yn[n]=e[n&255]})();const ig=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];function Jc(i){return i*i*i*(i*(i*6-15)+10)}function Co(i,e,t){return i+t*(e-i)}function ys(i,e,t){const n=ig[i&7];return n[0]*e+n[1]*t}function Ra(i,e){const t=Math.floor(i)&255,n=Math.floor(e)&255,r=i-Math.floor(i),s=e-Math.floor(e),o=Jc(r),a=Jc(s),c=Yn[Yn[t]+n],l=Yn[Yn[t]+n+1],h=Yn[Yn[t+1]+n],d=Yn[Yn[t+1]+n+1],f=Co(ys(c,r,s),ys(h,r-1,s),o),p=Co(ys(l,r,s-1),ys(d,r-1,s-1),o);return Co(f,p,a)}const ct=Object.freeze({SHIRE:"shire",FOREST:"forest",MOUNTAIN:"mountain",MIRKWOOD:"mirkwood",PLAINS:"plains"});class Ir{constructor({type:e,name:t,surfaceBlock:n,treeDensity:r,minHeight:s,maxHeight:o}){this.type=e,this.name=t,this.surfaceBlock=n,this.treeDensity=r,this.minHeight=s,this.maxHeight=o}}const el={[ct.SHIRE]:new Ir({type:ct.SHIRE,name:"The Shire",surfaceBlock:x.GRASS,treeDensity:.02,minHeight:29,maxHeight:34}),[ct.FOREST]:new Ir({type:ct.FOREST,name:"Forest",surfaceBlock:x.GRASS,treeDensity:.08,minHeight:30,maxHeight:40}),[ct.MOUNTAIN]:new Ir({type:ct.MOUNTAIN,name:"Misty Mountains",surfaceBlock:x.STONE,treeDensity:.005,minHeight:35,maxHeight:85}),[ct.MIRKWOOD]:new Ir({type:ct.MIRKWOOD,name:"Mirkwood",surfaceBlock:x.MUD,treeDensity:.2,minHeight:23,maxHeight:35}),[ct.PLAINS]:new Ir({type:ct.PLAINS,name:"Plains",surfaceBlock:x.GRASS,treeDensity:.003,minHeight:29,maxHeight:33})};function rg(i){return el[i]||el[ct.PLAINS]}const sg=[{id:"anduin",name:"River Anduin",width:8,current:{x:0,z:1.5},points:[{x:320,z:-100},{x:330,z:-50},{x:335,z:0},{x:340,z:40},{x:345,z:60},{x:350,z:80},{x:355,z:120},{x:360,z:150}]},{id:"shire_brook",name:"The Water (Shire Brook)",width:3,current:{x:.6,z:0},points:[{x:-40,z:5},{x:60,z:5}]},{id:"forest_river",name:"Forest River",width:5,current:{x:-1,z:0},points:[{x:460,z:20},{x:440,z:25},{x:420,z:30},{x:400,z:35},{x:380,z:40},{x:360,z:50}]}];function og(i,e,t,n,r,s){const o=r-t,a=s-n,c=o*o+a*a;if(c===0)return Math.sqrt((i-t)**2+(e-n)**2);let l=((i-t)*o+(e-n)*a)/c;l=Math.max(0,Math.min(1,l));const h=t+l*o,d=n+l*a;return Math.sqrt((i-h)**2+(e-d)**2)}function ag(i,e,t){let n=1/0;for(let r=0;r<t.points.length-1;r++){const s=t.points[r],o=t.points[r+1],a=og(i,e,s.x,s.z,o.x,o.z);a<n&&(n=a)}return n}function sd(i,e){for(const t of sg)if(ag(i,e,t)<=t.width/2)return t;return null}function cg(i,e){const t=sd(i,e);return t?{...t.current}:null}const lg=32,dg=26,Ns=-100,hg=560,Us=-120,ug=150,Es=.02,fg=[{x:0,z:0,biome:ct.SHIRE,radius:70},{x:80,z:20,biome:ct.PLAINS,radius:40},{x:140,z:40,biome:ct.FOREST,radius:40},{x:200,z:30,biome:ct.FOREST,radius:40},{x:270,z:50,biome:ct.MOUNTAIN,radius:60},{x:340,z:60,biome:ct.PLAINS,radius:45},{x:400,z:40,biome:ct.MIRKWOOD,radius:60},{x:420,z:90,biome:ct.MIRKWOOD,radius:35},{x:470,z:30,biome:ct.PLAINS,radius:30},{x:520,z:20,biome:ct.MOUNTAIN,radius:40}];function Hs(i,e,t){let n=ct.PLAINS,r=1/0;for(const s of fg){const o=i-s.x,a=e-s.z,l=Math.sqrt(o*o+a*a)/s.radius;l<r&&(r=l,n=s.biome)}return rg(n)}function Ot(i,e,t){const n=Hs(i,e),r=Ra(i*Es+t*.1,e*Es),s=Ra(i*Es*2+t*.1+100,e*Es*2+100)*.5,a=((r+s)/1.5+1)/2;return Math.floor(n.minHeight+a*(n.maxHeight-n.minHeight))}x.COAL_ORE,x.COPPER_ORE,x.IRON_ORE;ct.FOREST+"",ct.MIRKWOOD+"",ct.SHIRE+"",ct.PLAINS+"";const pg=-20,mg=.6,od=1.8,Dt=mg/2,tl=0;function _g(i,e){i.velocity.y+=pg*e}function gg(i,e,t,n){const r=[],s=Math.floor(e-Dt),o=Math.floor(e+Dt-.001),a=Math.floor(n-Dt),c=Math.floor(n+Dt-.001),l=Math.floor(t),h=Math.floor(t+od-.001);for(let d=s;d<=o;d++)for(let f=a;f<=c;f++)for(let p=l;p<=h;p++)yn(i.getBlock(d,p,f))&&r.push({bx:d,by:p,bz:f});return r}function vg(i,e,t){const n=i.position,r=gg(e,n.x,n.y,n.z);for(const{bx:o,bz:a}of r){const c=n.x-Dt,l=n.x+Dt,h=n.z-Dt,d=n.z+Dt,f=l-o,p=o+1-c,m=d-a,g=a+1-h,_=Math.min(f,p),u=Math.min(m,g);_<u?f<p?n.x=o-Dt-.001:n.x=o+1+Dt+.001:m<g?n.z=a-Dt-.001:n.z=a+1+Dt+.001}const s=n.y+i.velocity.y*t;if(i.velocity.y<=0){const o=Math.floor(n.y)-1,a=Math.floor(s)-1;for(let c=o;c>=a;c--){const l=Math.floor(n.x-Dt),h=Math.floor(n.x+Dt-.001),d=Math.floor(n.z-Dt),f=Math.floor(n.z+Dt-.001);for(let p=l;p<=h;p++)for(let m=d;m<=f;m++)if(yn(e.getBlock(p,c,m))){n.y=c+1,i.velocity.y=0,i.onGround=!0;return}}}else{const o=Math.floor(s+od),a=Math.floor(n.x-Dt),c=Math.floor(n.x+Dt-.001),l=Math.floor(n.z-Dt),h=Math.floor(n.z+Dt-.001);for(let d=a;d<=c;d++)for(let f=l;f<=h;f++)if(yn(e.getBlock(d,o,f))){i.velocity.y=0;return}}n.y=s,i.onGround=!1,n.y<tl&&(n.y=tl,i.velocity.y=0,i.onGround=!0)}const nl=[{dir:[0,1,0],verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{dir:[0,-1,0],verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{dir:[1,0,0],verts:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{dir:[-1,0,0],verts:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]]},{dir:[0,0,1],verts:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]]},{dir:[0,0,-1],verts:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}],Zt={[x.GRASS]:[.32,.6,.24],[x.DIRT]:[.45,.33,.2],[x.STONE]:[.5,.5,.52],[x.WOOD]:[.4,.24,.12],[x.LEAVES]:[.18,.48,.13],[x.WATER]:[.15,.35,.65],[x.SAND]:[.82,.72,.45],[x.CLAY]:[.58,.42,.32],[x.GRAVEL]:[.52,.5,.48],[x.COBBLESTONE]:[.42,.42,.44],[x.PLANKS]:[.58,.4,.2],[x.IRON_ORE]:[.48,.45,.42],[x.COPPER_ORE]:[.5,.38,.28],[x.COAL_ORE]:[.22,.22,.24],[x.GLASS]:[.72,.82,.88],[x.CAMPFIRE]:[.45,.22,.08],[x.WORKBENCH]:[.52,.36,.18],[x.FORGE]:[.3,.3,.32],[x.KITCHEN]:[.48,.33,.18],[x.LOOM]:[.62,.52,.38],[x.RUNE_TABLE]:[.25,.2,.45],[x.TORCH]:[.92,.72,.18],[x.THATCH]:[.68,.6,.32],[x.STONE_BRICK]:[.48,.48,.46],[x.IRON_BLOCK]:[.68,.68,.72],[x.COPPER_BLOCK]:[.7,.42,.18],[x.SNOW]:[.93,.95,.98],[x.ICE]:[.65,.82,.92],[x.MOSSY_STONE]:[.35,.45,.32],[x.CORRUPTED_STONE]:[.28,.18,.32],[x.DARK_STONE]:[.18,.15,.2],[x.OAK_PLANKS]:[.52,.36,.16],[x.BIRCH_WOOD]:[.78,.73,.62],[x.REED]:[.42,.58,.28],[x.MUD]:[.32,.25,.15],[x.SLATE]:[.35,.36,.4],[x.MARBLE]:[.88,.86,.82],[x.OBSIDIAN]:[.08,.06,.12],[x.CRYSTAL]:[.68,.78,.92],[x.TALL_GRASS]:[.28,.56,.2],[x.CHEST]:[.55,.38,.18],[x.BED]:[.6,.15,.12],[x.DOOR]:[.42,.28,.14],[x.DOOR_OPEN]:[.42,.28,.14]},wa=[1,0,1];function qn(i,e,t,n){let r=i*374761+e*668265+t*1274613+n*982451|0;return r=(r>>16^r)*73244475|0,r=(r>>16^r)*73244475|0,r=r>>16^r,((r&65535)/65535-.5)*.16}const xg=[{verts:[[.5,0,.45],[.78,.28,.44],[.78,.28,.56],[.5,0,.55]]},{verts:[[.54,0,.48],[.69,.28,.71],[.59,.28,.77],[.46,0,.53]]},{verts:[[.54,0,.53],[.41,.28,.77],[.31,.28,.71],[.46,0,.48]]},{verts:[[.5,0,.55],[.22,.28,.56],[.22,.28,.44],[.5,0,.45]]},{verts:[[.46,0,.53],[.31,.28,.29],[.41,.28,.23],[.54,0,.48]]},{verts:[[.46,0,.48],[.59,.28,.23],[.69,.28,.29],[.54,0,.53]]}],yg=[.45,.33,.2],Eg=[.62,.5,.34],Sg=[.35,.22,.12],Mg=[.58,.58,.56],Tg=[.65,.55,.3],bg=[.38,.32,.22],Ag=[.85,.88,.92],Rg=[.5,.5,.48];function wg(i){return i!==x.AIR}function Cg(i,e){const t=e[1]===1,n=e[1]===-1;switch(i){case x.GRASS:return t?Zt[x.GRASS]:yg;case x.WOOD:return t?Eg:n?Sg:Zt[x.WOOD];case x.BIRCH_WOOD:return t?[.85,.8,.7]:Zt[x.BIRCH_WOOD];case x.STONE:return t?Mg:Zt[x.STONE];case x.COBBLESTONE:return t?Rg:Zt[x.COBBLESTONE];case x.SAND:return n?Tg:Zt[x.SAND];case x.MUD:return t?bg:Zt[x.MUD];case x.SNOW:return t?Zt[x.SNOW]:Ag;case x.DIRT:return t?[.52,.4,.26]:Zt[x.DIRT];case x.IRON_ORE:return t?[.5,.48,.42]:Zt[x.IRON_ORE];case x.COPPER_ORE:return t?[.5,.4,.28]:Zt[x.COPPER_ORE];default:return Zt[i]||wa}}function Ig(i,e,t,n,r){const s=[],o=[],a=[];for(let c=0;c<We;c++)for(let l=0;l<We;l++)for(let h=0;h<We;h++){const d=i.getBlock(c,l,h);if(!wg(d))continue;const f=e*We+c,p=t*We+l,m=n*We+h;if(d===x.TALL_GRASS){const g=Zt[d]||wa;for(const _ of xg){const u=s.length/3;for(const C of _.verts){const b=f+C[0],S=p+C[1],R=m+C[2];s.push(b,S,R);const A=.4+2*C[1];o.push((g[0]+qn(b,S,R,0))*A,(g[1]+qn(b,S,R,1))*A,(g[2]+qn(b,S,R,2))*A)}a.push(u,u+1,u+2,u,u+2,u+3),a.push(u+2,u+1,u,u+3,u+2,u)}continue}if(d===x.WATER){if(r.getBlock(f,p+1,m)===x.WATER)continue;const _=Zt[x.WATER]||wa;for(const u of nl){const C=f+u.dir[0],b=p+u.dir[1],S=m+u.dir[2];if(r.getBlock(C,b,S)!==x.AIR||u.dir[1]===-1)continue;const A=s.length/3;for(const I of u.verts){const P=f+I[0],M=p+I[1]-(u.dir[1]===1?.15:0),E=m+I[2];s.push(P,M,E),o.push(_[0]+qn(P,M,E,0)*.3,_[1]+qn(P,M,E,1)*.3,_[2]+qn(P,M,E,2)*.3)}a.push(A,A+1,A+2,A,A+2,A+3)}continue}for(const g of nl){const _=f+g.dir[0],u=p+g.dir[1],C=m+g.dir[2];if(yn(r.getBlock(_,u,C)))continue;const b=s.length/3,S=Cg(d,g.dir),R=g.dir[1]===1?1:g.dir[1]===-1?.65:g.dir[0]!==0?.8:.75,A=d===x.GRASS&&g.dir[1]===1?2.2:1;for(const I of g.verts){const P=f+I[0],M=p+I[1],E=m+I[2];s.push(P,M,E),o.push((S[0]+qn(P,M,E,0)*A)*R,(S[1]+qn(P,M,E,1)*A)*R,(S[2]+qn(P,M,E,2)*A)*R)}a.push(b,b+1,b+2,b,b+2,b+3)}}return s.length===0?null:{positions:new Float32Array(s),colors:new Float32Array(o),indices:a,vertexCount:s.length/3}}function Og(i,e,t,n,r){const s=Ig(i,e,t,n,r);if(!s)return null;const o=new gi;o.setAttribute("position",new ti(s.positions,3)),o.setAttribute("color",new ti(s.colors,3)),o.setIndex(s.indices),o.computeVertexNormals();const a=new Xs({vertexColors:!0});return new fn(o,a)}class Dg{constructor(e,t){this.scene=e,this.world=t,this.meshes=new Map,this.dirty=new Set,this._attempted=new Set}invalidateChunks(e){for(const t of e){if(this.meshes.has(t)){const n=this.meshes.get(t);this.scene.remove(n),n.geometry.dispose(),this.meshes.delete(t)}this._attempted.delete(t)}}markDirty(e,t,n){const r=Math.floor(e/We),s=Math.floor(t/We),o=Math.floor(n/We),a=`${r},${s},${o}`;this.dirty.add(a),this._attempted.delete(a);const c=(e%We+We)%We,l=(t%We+We)%We,h=(n%We+We)%We;c===0&&(this.dirty.add(`${r-1},${s},${o}`),this._attempted.delete(`${r-1},${s},${o}`)),c===We-1&&(this.dirty.add(`${r+1},${s},${o}`),this._attempted.delete(`${r+1},${s},${o}`)),l===0&&(this.dirty.add(`${r},${s-1},${o}`),this._attempted.delete(`${r},${s-1},${o}`)),l===We-1&&(this.dirty.add(`${r},${s+1},${o}`),this._attempted.delete(`${r},${s+1},${o}`)),h===0&&(this.dirty.add(`${r},${s},${o-1}`),this._attempted.delete(`${r},${s},${o-1}`)),h===We-1&&(this.dirty.add(`${r},${s},${o+1}`),this._attempted.delete(`${r},${s},${o+1}`))}update(e,t,n=4){const r=Math.floor(e/We),s=Math.floor(t/We),o=new Set;for(const a of this.dirty)if(this.meshes.has(a)){const c=this.meshes.get(a);this.scene.remove(c),c.geometry.dispose(),this.meshes.delete(a)}this.dirty.clear();for(let a=-n;a<=n;a++)for(let c=-n;c<=n;c++){const l=r+a,h=s+c;for(let d=0;d<5;d++){const f=`${l},${d},${h}`,p=this.world.chunks.get(f);if(p&&(o.add(f),!this.meshes.has(f)&&!this._attempted.has(f))){this._attempted.add(f);const m=Og(p,l,d,h,this.world);m&&(this.scene.add(m),this.meshes.set(f,m))}}}for(const[a,c]of this.meshes)o.has(a)||(this.scene.remove(c),c.geometry.dispose(),this.meshes.delete(a),this._attempted.delete(a))}}class Lg{constructor(e){this.keys={},this._justPressed={},this.mouseDx=0,this.mouseDy=0,this.locked=!1,this.leftClick=!1,this.rightClick=!1,this.scrollDelta=0,this.menuOpen=!1,document.addEventListener("keydown",t=>{t.code==="Tab"&&t.preventDefault(),this.keys[t.code]||(this._justPressed[t.code]=!0),this.keys[t.code]=!0}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),e.addEventListener("click",()=>{this.locked||e.requestPointerLock()}),document.addEventListener("mousedown",t=>{this.locked&&(t.button===0&&(this.leftClick=!0,this.keys.mouseLeft=!0),t.button===2&&(this.rightClick=!0))}),document.addEventListener("mouseup",t=>{t.button===0&&(this.keys.mouseLeft=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===e,!this.locked&&!this.menuOpen?document.getElementById("instructions").style.display="block":this.locked&&(document.getElementById("instructions").style.display="none")}),document.addEventListener("mousemove",t=>{this.locked&&(this.mouseDx+=t.movementX,this.mouseDy+=t.movementY)}),document.addEventListener("wheel",t=>{this.locked&&(this.scrollDelta+=Math.sign(t.deltaY))})}getMovementInput(){return{forward:!!this.keys.KeyW,back:!!this.keys.KeyS,left:!!this.keys.KeyA,right:!!this.keys.KeyD}}getJump(){return!!this.keys.Space}consumeMouse(){const e=this.mouseDx,t=this.mouseDy;return this.mouseDx=0,this.mouseDy=0,{dx:e,dy:t}}consumeLeftClick(){const e=this.leftClick;return this.leftClick=!1,e}consumeRightClick(){const e=this.rightClick;return this.rightClick=!1,e}consumeKeyPress(e){const t=!!this._justPressed[e];return this._justPressed[e]=!1,t}consumeScroll(){const e=this.scrollDelta;return this.scrollDelta=0,e}}const an=Object.freeze({RAW:"raw",COOKED:"cooked",MEAL:"meal",PRESERVED:"preserved",RESTORATIVE:"restorative"}),Ri=Object.freeze({STAMINA_REGEN:"stamina_regen",COLD_RESISTANCE:"cold_resistance",FOCUS_REGEN:"focus_regen",CORRUPTION_RESISTANCE:"corruption_resistance",HEALTH_REGEN:"health_regen"});class cn{constructor({id:e,name:t,category:n,hungerRestore:r,effects:s=[]}){this.id=e,this.name=t,this.category=n,this.hungerRestore=r,this.effects=s}}const ad={raw_berries:new cn({id:"raw_berries",name:"Raw Berries",category:an.RAW,hungerRestore:8}),raw_meat:new cn({id:"raw_meat",name:"Raw Meat",category:an.RAW,hungerRestore:5}),raw_mushroom:new cn({id:"raw_mushroom",name:"Raw Mushroom",category:an.RAW,hungerRestore:6}),cooked_meat:new cn({id:"cooked_meat",name:"Cooked Meat",category:an.COOKED,hungerRestore:25,effects:[{type:Ri.STAMINA_REGEN,duration:60,strength:2}]}),cooked_fish:new cn({id:"cooked_fish",name:"Cooked Fish",category:an.COOKED,hungerRestore:20,effects:[{type:Ri.HEALTH_REGEN,duration:30,strength:1}]}),hearth_stew:new cn({id:"hearth_stew",name:"Hearth Stew",category:an.MEAL,hungerRestore:40,effects:[{type:Ri.STAMINA_REGEN,duration:120,strength:3},{type:Ri.COLD_RESISTANCE,duration:120,strength:1}]}),lembas:new cn({id:"lembas",name:"Lembas Bread",category:an.PRESERVED,hungerRestore:50}),athelas_tea:new cn({id:"athelas_tea",name:"Athelas Tea",category:an.RESTORATIVE,hungerRestore:10,effects:[{type:Ri.HEALTH_REGEN,duration:60,strength:3},{type:Ri.CORRUPTION_RESISTANCE,duration:60,strength:2}]}),trail_rations:new cn({id:"trail_rations",name:"Trail Rations",category:an.PRESERVED,hungerRestore:20}),herb_salad:new cn({id:"herb_salad",name:"Herb Salad",category:an.MEAL,hungerRestore:30,effects:[{type:Ri.FOCUS_REGEN,duration:90,strength:2}]}),bread:new cn({id:"bread",name:"Bread",category:an.COOKED,hungerRestore:20}),berries:new cn({id:"berries",name:"Berries",category:an.RAW,hungerRestore:8}),mushroom:new cn({id:"mushroom",name:"Mushroom",category:an.RAW,hungerRestore:6})};function Pg(i){return ad[i]}function Ng(i,e,t,n,r,s){const o=Aa[s];return o===void 0||yn(i.getBlock(t,n,r))||!e.remove(s,1)?!1:(i.setBlock(t,n,r,o),!0)}function il(i,e,t,n){let r=Math.floor(e.x),s=Math.floor(e.y),o=Math.floor(e.z);const a=t.x>=0?1:-1,c=t.y>=0?1:-1,l=t.z>=0?1:-1,h=t.x!==0?Math.abs(1/t.x):1/0,d=t.y!==0?Math.abs(1/t.y):1/0,f=t.z!==0?Math.abs(1/t.z):1/0;let p=t.x!==0?(t.x>0?r+1-e.x:e.x-r)*h:1/0,m=t.y!==0?(t.y>0?s+1-e.y:e.y-s)*d:1/0,g=t.z!==0?(t.z>0?o+1-e.z:e.z-o)*f:1/0,_=0,u={x:0,y:0,z:0};for(;_<n;){if(Q_(i.getBlock(r,s,o)))return{blockPos:{x:r,y:s,z:o},normal:u,t:_};p<m&&p<g?(_=p,r+=a,p+=h,u={x:-a,y:0,z:0}):m<g?(_=m,s+=c,m+=d,u={x:0,y:-c,z:0}):(_=g,o+=l,g+=f,u={x:0,y:0,z:-l})}return null}function un(i,e){const t=i.x-e.x,n=i.y-e.y,r=i.z-e.z;return Math.sqrt(t*t+n*n+r*r)}function Ss(i,e){return i.x*e.x+i.y*e.y+i.z*e.z}function di(i){const e=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z);return e===0?{x:0,y:0,z:0}:{x:i.x/e,y:i.y/e,z:i.z/e}}const ge=Object.freeze({WOLF:"wolf",GOBLIN:"goblin",SPIDER:"spider",TROLL:"troll",WIGHT:"wight",GUARDIAN:"guardian",CONSTRUCT:"construct",ORC:"orc",GIANT_SPIDER:"giant_spider",SHADOW:"shadow",BARROW_WIGHT:"barrow_wight",GOBLIN_ARCHER:"goblin_archer",CORRUPTED_BEAR:"corrupted_bear",DARK_CONSTRUCT:"dark_construct",WRAITH:"wraith"}),wi=Object.freeze({IDLE:"idle",CHASE:"chase",ATTACK:"attack",DEAD:"dead"}),Ug={[ge.WOLF]:{health:30,speed:4,aggroRange:12,damage:8,attackRange:1.5},[ge.GOBLIN]:{health:25,speed:3,aggroRange:10,damage:6,attackRange:1.5},[ge.SPIDER]:{health:20,speed:5,aggroRange:8,damage:10,attackRange:1.2},[ge.TROLL]:{health:100,speed:2,aggroRange:15,damage:25,attackRange:2.5},[ge.WIGHT]:{health:50,speed:3.5,aggroRange:14,damage:15,attackRange:1.5},[ge.GUARDIAN]:{health:150,speed:1.5,aggroRange:18,damage:30,attackRange:2},[ge.CONSTRUCT]:{health:80,speed:2.5,aggroRange:12,damage:20,attackRange:2},[ge.ORC]:{health:50,speed:3,aggroRange:12,damage:12,attackRange:1.5},[ge.GIANT_SPIDER]:{health:45,speed:4.5,aggroRange:10,damage:15,attackRange:1.5},[ge.SHADOW]:{health:20,speed:6,aggroRange:16,damage:18,attackRange:1.2},[ge.BARROW_WIGHT]:{health:80,speed:3,aggroRange:16,damage:22,attackRange:1.8},[ge.GOBLIN_ARCHER]:{health:20,speed:2.5,aggroRange:18,damage:8,attackRange:8},[ge.CORRUPTED_BEAR]:{health:120,speed:3,aggroRange:14,damage:20,attackRange:2},[ge.DARK_CONSTRUCT]:{health:130,speed:2,aggroRange:14,damage:28,attackRange:2.2},[ge.WRAITH]:{health:70,speed:4,aggroRange:20,damage:30,attackRange:1.8}},kg={[ge.WOLF]:[{type:"leather",count:1},{type:"raw_meat",count:1}],[ge.GOBLIN]:[{type:"stick",count:2},{type:"iron_ore",count:1}],[ge.SPIDER]:[{type:"fiber",count:2},{type:"rope",count:1}],[ge.TROLL]:[{type:"stone",count:3},{type:"leather",count:2}],[ge.WIGHT]:[{type:"relic_shard",count:1},{type:"lore_fragment",count:1}],[ge.GUARDIAN]:[{type:"relic_shard",count:2},{type:"iron_ore",count:3}],[ge.CONSTRUCT]:[{type:"iron_ore",count:2},{type:"copper_ore",count:2}],[ge.ORC]:[{type:"iron_ore",count:1},{type:"leather",count:1}],[ge.GIANT_SPIDER]:[{type:"fiber",count:3},{type:"rope",count:2}],[ge.SHADOW]:[{type:"relic_shard",count:1}],[ge.BARROW_WIGHT]:[{type:"relic_shard",count:2},{type:"lore_fragment",count:2}],[ge.GOBLIN_ARCHER]:[{type:"stick",count:3},{type:"fiber",count:1}],[ge.CORRUPTED_BEAR]:[{type:"leather",count:3},{type:"raw_meat",count:2}],[ge.DARK_CONSTRUCT]:[{type:"iron_ore",count:3},{type:"relic_shard",count:1}],[ge.WRAITH]:[{type:"relic_shard",count:3},{type:"lore_fragment",count:2}]};function Fg(i){return kg[i]||[]}class Bg{constructor(e,t){const n=Ug[t];this.position={...e},this.type=t,this.health=n.health,this.maxHealth=n.health,this.speed=n.speed,this.aggroRange=n.aggroRange,this.damage=n.damage,this.attackRange=n.attackRange,this.state=wi.IDLE,this.attackCooldown=0}updateAI(e,t,n,r){if(this.isDead()){this.state=wi.DEAD;return}const s=un(this.position,e);if(s>this.aggroRange*1.5?this.state=wi.IDLE:s<=this.aggroRange&&(this.state=wi.CHASE),this.state===wi.CHASE){const o=e.x-this.position.x,a=e.z-this.position.z,c=Math.sqrt(o*o+a*a);if(c>.1){const l=o/c*this.speed*t,h=a/c*this.speed*t;if(r){const d=this.position.x+l;this._collidesWithBlock(d,this.position.z,r)||(this.position.x=d);const f=this.position.z+h;this._collidesWithBlock(this.position.x,f,r)||(this.position.z=f)}else this.position.x+=l,this.position.z+=h}}n&&(this.position.y=n(Math.floor(this.position.x),Math.floor(this.position.z))+1),this.attackCooldown=Math.max(0,this.attackCooldown-t)}_collidesWithBlock(e,t,n){const r=Math.floor(e),s=Math.floor(this.position.y),o=Math.floor(t);return yn(n.getBlock(r,s,o))||yn(n.getBlock(r,s+1,o))}canAttack(e){return this.state===wi.CHASE&&un(this.position,e)<=this.attackRange&&this.attackCooldown<=0}performAttack(){return this.attackCooldown=1,this.damage}takeDamage(e){this.health=Math.max(0,this.health-e),this.health<=0&&(this.state=wi.DEAD)}isDead(){return this.health<=0}}const kn=Object.freeze({dawn:240,day:2400,dusk:240,night:2400}),pr=kn.dawn+kn.day+kn.dusk+kn.night,pt=Object.freeze({DAWN:"dawn",DAY:"day",DUSK:"dusk",NIGHT:"night"}),zg=kn.dawn/pr,Hg=(kn.dawn+kn.day)/pr,Gg=(kn.dawn+kn.day+kn.dusk)/pr;class Vg{constructor(){this.time=0,this.day=1}tick(e){for(this.time+=e;this.time>=pr;)this.time-=pr,this.day++}getNormalizedTime(){return this.time/pr}getPhase(){const e=this.getNormalizedTime();return e<zg?pt.DAWN:e<Hg?pt.DAY:e<Gg?pt.DUSK:pt.NIGHT}}const cd=Object.freeze({man:{id:"man",name:"Man",classIds:["ranger","soldier","scholar"],statModifiers:{health:100,stamina:110,focus:50,corruptionResistance:50,perception:50,craft:50}},elf:{id:"elf",name:"Elf",classIds:["archer","warden","gatherer"],statModifiers:{health:90,stamina:100,focus:80,corruptionResistance:50,perception:70,craft:50}},dwarf:{id:"dwarf",name:"Dwarf",classIds:["miner","blacksmith","delver"],statModifiers:{health:120,stamina:100,focus:35,corruptionResistance:70,perception:40,craft:80}},hobbit:{id:"hobbit",name:"Hobbit",classIds:["burglar","cook","forager"],statModifiers:{health:80,stamina:100,focus:55,corruptionResistance:75,perception:60,craft:55}}});function Wg(i){return cd[i]||null}const qa=Object.freeze({ranger:{id:"ranger",name:"Ranger",raceId:"man",starterItems:[{type:"short_bow",count:1},{type:"knife",count:1},{type:"raw_meat",count:2}],passive:"Tracking: see beast footprints",activeAbility:"Focused Shot"},soldier:{id:"soldier",name:"Soldier",raceId:"man",starterItems:[{type:"spear",count:1},{type:"shield",count:1},{type:"raw_meat",count:2}],passive:"Improved block stability",activeAbility:"Shield Bash"},scholar:{id:"scholar",name:"Scholar",raceId:"man",starterItems:[{type:"knife",count:1},{type:"lantern",count:1},{type:"raw_meat",count:2}],passive:"Identify ruins and relics faster",activeAbility:"Sense Ward"},archer:{id:"archer",name:"Archer",raceId:"elf",starterItems:[{type:"refined_bow",count:1},{type:"knife",count:1},{type:"stick",count:10}],passive:"Reduced bow sway",activeAbility:"Keen Eye"},warden:{id:"warden",name:"Warden",raceId:"elf",starterItems:[{type:"spear",count:1},{type:"ward_token",count:1},{type:"raw_meat",count:2}],passive:"Stronger resistance near allied beacons",activeAbility:"Light Ward"},gatherer:{id:"gatherer",name:"Gatherer",raceId:"elf",starterItems:[{type:"knife",count:1},{type:"fiber",count:5},{type:"raw_meat",count:3}],passive:"Better yield from plants and herbs",activeAbility:"Nature Sense"},miner:{id:"miner",name:"Miner",raceId:"dwarf",starterItems:[{type:"pickaxe",count:1},{type:"stick",count:5},{type:"stone",count:5}],passive:"Faster ore and stone extraction",activeAbility:"Delver's Strike"},blacksmith:{id:"blacksmith",name:"Blacksmith",raceId:"dwarf",starterItems:[{type:"hammer",count:1},{type:"stone",count:10},{type:"raw_meat",count:2}],passive:"Gear wears slower",activeAbility:"Field Repair"},delver:{id:"delver",name:"Delver",raceId:"dwarf",starterItems:[{type:"axe",count:1},{type:"lantern",count:1},{type:"raw_meat",count:2}],passive:"Reduced underground detection and fall damage",activeAbility:"Stone Sense"},burglar:{id:"burglar",name:"Burglar",raceId:"hobbit",starterItems:[{type:"knife",count:1},{type:"sling",count:1},{type:"cooked_meat",count:3}],passive:"Reduced enemy detection while crouched",activeAbility:"Slip Away"},cook:{id:"cook",name:"Cook",raceId:"hobbit",starterItems:[{type:"knife",count:1},{type:"fiber",count:5},{type:"cooked_meat",count:5}],passive:"Meals give longer buffs",activeAbility:"Hearth Meal"},forager:{id:"forager",name:"Forager",raceId:"hobbit",starterItems:[{type:"stick",count:3},{type:"knife",count:1},{type:"cooked_meat",count:3}],passive:"Improved berry, mushroom, and root yields",activeAbility:"Wild Sense"}});function Xg(i){return qa[i]||null}class ld{constructor(e){this.size=e,this._slots=new Array(e).fill(null)}getSlot(e){return this._slots[e]||null}_findSlot(e){for(let t=0;t<this.size;t++)if(this._slots[t]&&this._slots[t].type===e)return t;return-1}_findEmpty(){for(let e=0;e<this.size;e++)if(!this._slots[e])return e;return-1}addItem(e,t){const n=this._findSlot(e);if(n>=0)return this._slots[n].count+=t,!0;const r=this._findEmpty();return r<0?!1:(this._slots[r]={type:e,count:t},!0)}removeItem(e,t){const n=this._findSlot(e);return n<0||this._slots[n].count<t?!1:(this._slots[n].count-=t,this._slots[n].count<=0&&(this._slots[n]=null),!0)}moveSlot(e,t){const n=this._slots[t];this._slots[t]=this._slots[e],this._slots[e]=n}count(e){let t=0;for(const n of this._slots)n&&n.type===e&&(t+=n.count);return t}getItems(){return this._slots.filter(e=>e!==null).map(e=>({...e}))}add(e,t){return this.addItem(e,t)}remove(e,t){return this.removeItem(e,t)}}const qg=.1,Kg=.5,Yg=5,$g=10,jg=.3,Zg=1,Qg=.5,Jg=.5,e0=.3,t0=.6,n0=-15,i0=60,r0={[ct.SHIRE]:0,[ct.FOREST]:-.2,[ct.MOUNTAIN]:-1,[ct.MIRKWOOD]:-.3,[ct.PLAINS]:.1};class dd{constructor(){this.health=100,this.maxHealth=100,this.stamina=100,this.maxStamina=100,this.hunger=100,this.maxHunger=100,this.focus=50,this.maxFocus=100,this.temperature=0,this.coldResistance=0,this.corruption=0,this._inCorruptedZone=!1,this._injuries=[]}setBiomeTemperature(e){this.temperature=r0[e]??0}setCorruptionZone(e){this._inCorruptedZone=e}applyInjury(e,t,n){this._injuries=this._injuries.filter(r=>r.type!==e),this._injuries.push({type:e,remaining:t,strength:n})}hasInjury(e){return this._injuries.some(t=>t.type===e)}getFractureSpeedMultiplier(){return this.hasInjury("fracture")?t0:1}checkFallFracture(e){e<=n0&&this.applyInjury("fracture",i0,1)}tick(e){if(this.hunger=Math.max(0,this.hunger-qg*e),this.hunger<=0&&(this.health=Math.max(0,this.health-Kg*e)),this.temperature<0){const t=Math.min(0,this.temperature+this.coldResistance);t<0&&(this.health=Math.max(0,this.health-jg*Math.abs(t)*e))}this._inCorruptedZone&&(this.corruption=Math.min(100,this.corruption+Zg*e)),this.corruption>50&&(this.focus=Math.max(0,this.focus-Qg*(this.corruption/100)*e));for(const t of this._injuries)t.remaining-=e,t.type==="bleeding"?this.health=Math.max(0,this.health-Jg*t.strength*e):t.type==="poison"&&(this.health=Math.max(0,this.health-e0*t.strength*e));this._injuries=this._injuries.filter(t=>t.remaining>0),this.stamina=Math.min(this.maxStamina,this.stamina+Yg*e)}applySprint(e){this.stamina=Math.max(0,this.stamina-$g*e)}eat(e){this.hunger=Math.min(this.maxHunger,this.hunger+e)}takeDamage(e){this.health=Math.max(0,this.health-e)}isDead(){return this.health<=0}}const s0=5,o0=.5;class hd{constructor({x:e,y:t,z:n},{moveSpeed:r=s0}={}){this.position={x:e,y:t,z:n},this.velocity={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.moveSpeed=r,this.onGround=!1,this.crouching=!1,this.cameraMode="first_person"}toggleCamera(){this.cameraMode=this.cameraMode==="first_person"?"third_person_behind":"first_person"}setCrouch(e){this.crouching=e}applyMovementInput(e,t){let n=0,r=0;if(e.forward&&(r-=1),e.back&&(r+=1),e.left&&(n-=1),e.right&&(n+=1),n===0&&r===0)return;const s=Math.sqrt(n*n+r*r);n/=s,r/=s;const o=Math.cos(this.yaw),a=Math.sin(this.yaw),c=n*o-r*a,l=n*a+r*o,h=this.crouching?this.moveSpeed*o0:this.moveSpeed;this.position.x+=c*h*t,this.position.z+=l*h*t}}const Io=Object.freeze({STORY:"story",STANDARD:"standard",HARSH:"harsh"}),a0={[Io.STORY]:1.25,[Io.STANDARD]:1,[Io.HARSH]:.8};function c0({raceId:i,classId:e,difficulty:t,seed:n,worldName:r,characterName:s}){return{raceId:i,classId:e,difficulty:t,seed:n,worldName:r||"",characterName:s||""}}function l0(i){const e=Wg(i.raceId),t=Xg(i.classId),n=new ld(36);for(const a of t.starterItems)n.add(a.type,a.count);const r=a0[i.difficulty]||1,s=new dd;return s.maxHealth=Math.round(e.statModifiers.health*r),s.health=s.maxHealth,s.maxStamina=e.statModifiers.stamina,s.stamina=s.maxStamina,s.focus=e.statModifiers.focus,s.maxFocus=e.statModifiers.focus,{player:new hd({x:.5,y:lg+2,z:.5}),inventory:n,survivalStats:s,race:e,cls:t}}const Oo=3,Do=.7,d0=.5,rl=1.2;class h0{constructor(){this.attackCooldown=0,this._guarding=!1}setGuard(e){this._guarding=e}playerAttack(e,t,n,r){const s=di(t);let o=!1;for(const a of n){if(a.isDead()||un(e,a.position)>Oo)continue;const l=di({x:a.position.x-e.x,y:a.position.y-e.y,z:a.position.z-e.z});if(Ss(s,l)>=Do){a.takeDamage(r),o=!0;break}}return o&&(this.attackCooldown=d0),o}heavyAttack(e,t,n,r){const s=di(t);let o=!1;for(const a of n){if(a.isDead()||un(e,a.position)>Oo)continue;const l=di({x:a.position.x-e.x,y:a.position.y-e.y,z:a.position.z-e.z});if(Ss(s,l)>=Do){a.takeDamage(r*2),o=!0;break}}return o&&(this.attackCooldown=rl),o}playerAttackWithWeapon(e,t,n,r,s){const o=r*(s.damageModifier||1);return this.playerAttack(e,t,n,o)}heavyAttackWithWeapon(e,t,n,r,s){const o=di(t);let a=!1;const c=r*2*(s.damageModifier||1);for(const l of n){if(l.isDead()||un(e,l.position)>Oo)continue;const d=di({x:l.position.x-e.x,y:l.position.y-e.y,z:l.position.z-e.z});if(Ss(o,d)>=Do){l.takeDamage(c),a=!0;break}}return a&&(this.attackCooldown=rl),a}parry(e,t,n){return un(t,e.position)>e.attackRange?!1:(e.takeDamage(e.damage),!0)}rangedAttack(e,t,n,r,s){const o=di(t),a=.95;for(const c of n){if(c.isDead()||un(e,c.position)>s)continue;const h=di({x:c.position.x-e.x,y:c.position.y-e.y,z:c.position.z-e.z});if(Ss(o,h)>=a)return c.takeDamage(r),!0}return!1}processEnemyAttacks(e,t,n){for(const r of e)if(!r.isDead()&&r.canAttack(t)){let s=r.performAttack();this._guarding&&(s*=.5),n.takeDamage(s)}}}const sl=8,ol=15,u0=35,al=[ge.WOLF,ge.GOBLIN,ge.SPIDER,ge.TROLL,ge.WIGHT,ge.ORC,ge.GIANT_SPIDER,ge.SHADOW,ge.BARROW_WIGHT,ge.GOBLIN_ARCHER,ge.CORRUPTED_BEAR,ge.DARK_CONSTRUCT,ge.WRAITH];class f0{constructor(e){this.rng=e}trySpawn({phase:e,playerPos:t,existingCount:n,surfaceY:r,getHeight:s}){if(e!==pt.NIGHT&&e!==pt.DUSK)return[];if(n>=sl)return[];const o=Math.floor(this.rng()*3)+1,a=[];for(let c=0;c<o&&n+a.length<sl;c++){const l=this.rng()*Math.PI*2,h=ol+this.rng()*(u0-ol),d=t.x+Math.cos(l)*h,f=t.z+Math.sin(l)*h,p=Math.floor(this.rng()*al.length),m=al[p],g=s?s(d,f)+1:r;a.push(new Bg({x:d,y:g,z:f},m))}return a}}const p0={[ge.WOLF]:6974058,[ge.GOBLIN]:4880954,[ge.SPIDER]:2759178,[ge.TROLL]:8022618,[ge.WIGHT]:6702250,[ge.GUARDIAN]:12290116,[ge.CONSTRUCT]:5592490,[ge.ORC]:5925434,[ge.GIANT_SPIDER]:1706496,[ge.SHADOW]:657946,[ge.BARROW_WIGHT]:5583786,[ge.GOBLIN_ARCHER]:3824170,[ge.CORRUPTED_BEAR]:9065762,[ge.DARK_CONSTRUCT]:2763349,[ge.WRAITH]:1704004},Ca={[ge.WOLF]:{w:.8,h:.7,d:1.2},[ge.GOBLIN]:{w:.6,h:1.2,d:.6},[ge.SPIDER]:{w:1,h:.4,d:1},[ge.TROLL]:{w:1.2,h:2.5,d:1.2},[ge.WIGHT]:{w:.6,h:1.8,d:.6},[ge.GUARDIAN]:{w:1.4,h:3,d:1.4},[ge.CONSTRUCT]:{w:1,h:2,d:1},[ge.ORC]:{w:.8,h:1.6,d:.8},[ge.GIANT_SPIDER]:{w:1.4,h:.6,d:1.4},[ge.SHADOW]:{w:.5,h:1.4,d:.5},[ge.BARROW_WIGHT]:{w:.7,h:2,d:.7},[ge.GOBLIN_ARCHER]:{w:.6,h:1.2,d:.6},[ge.CORRUPTED_BEAR]:{w:1.4,h:1.2,d:1.8},[ge.DARK_CONSTRUCT]:{w:1.2,h:2.4,d:1.2},[ge.WRAITH]:{w:.6,h:2,d:.6}},m0=new Set([ge.WOLF,ge.SPIDER,ge.GIANT_SPIDER,ge.CORRUPTED_BEAR]);function _0(i){const e=Ca[i]||{w:.6,h:1,d:.6};if(m0.has(i)){const o=e.h*.4,a=e.w*.15,c=e.h*.6;return{parts:[{name:"body",w:e.w,h:c,d:e.d,offsetY:o+c/2},{name:"leg",w:a,h:o,d:a,offsetY:o/2},{name:"leg",w:a,h:o,d:a,offsetY:o/2},{name:"leg",w:a,h:o,d:a,offsetY:o/2},{name:"leg",w:a,h:o,d:a,offsetY:o/2}]}}const t=e.h*.6,n=e.w*.5,r=e.w*.2,s=t*.7;return{parts:[{name:"body",w:e.w,h:t,d:e.d,offsetY:t/2},{name:"head",w:n,h:n,d:n,offsetY:t+n/2},{name:"arm",w:r,h:s,d:r,offsetY:t*.6},{name:"arm",w:r,h:s,d:r,offsetY:t*.6}]}}function g0(i){const e=_0(i),t=p0[i]||16711680,n=new dr;for(const r of e.parts){const s=new vi(r.w,r.h,r.d),o=new Xs({color:t}),a=new fn(s,o);if(a.position.y=r.offsetY,r.name==="arm"){const c=Ca[i]||{w:.6},l=n.children.filter(h=>h.userData.partName==="arm").length===0?-1:1;a.position.x=l*(c.w/2+r.w/2)}if(r.name==="leg"){const c=Ca[i]||{w:.6,d:.6},l=n.children.filter(f=>f.userData.partName==="leg").length,h=l%2===0?-1:1,d=l<2?-1:1;a.position.x=h*(c.w/2-r.w/2),a.position.z=d*(c.d/2-r.w/2)}a.userData.partName=r.name,n.add(a)}return n}class v0{constructor(e){this.scene=e,this.meshMap=new Map}sync(e,t){const n=new Set;for(const r of e){if(n.add(r),r.isDead()){this.meshMap.has(r)&&(this.scene.remove(this.meshMap.get(r)),this.meshMap.delete(r));continue}let s=this.meshMap.get(r);if(s||(s=g0(r.type),this.scene.add(s),this.meshMap.set(r,s)),s.position.set(r.position.x,r.position.y,r.position.z),t){const o=t.position.x-r.position.x,a=t.position.z-r.position.z;s.rotation.y=Math.atan2(o,a)}}for(const[r,s]of this.meshMap)n.has(r)||(this.scene.remove(s),this.meshMap.delete(r))}}const x0={road_wardens:{body:9136404,hat:2775594,skin:13213818},rivendell_keepers:{body:13944224,hat:4482747,skin:15259840},dwarven_crafters:{body:8017203,hat:10044450,skin:13213818},woodland_guardians:{body:3828282,hat:2771498,skin:12628112},beorning_wardens:{body:9071162,hat:5917226,skin:13213818}};function y0(i={}){const e=i.bodyColor||13215820,t=i.hatColor||3368618,n=i.skinColor||13213818;return{parts:[{name:"body",w:.6,h:1,d:.4,offsetY:.5,color:e},{name:"head",w:.35,h:.35,d:.35,offsetY:1.28,color:n},{name:"hat",w:.42,h:.12,d:.42,offsetY:1.52,color:t},{name:"arm",w:.15,h:.8,d:.15,offsetY:.6,color:e,offsetX:-.38},{name:"arm",w:.15,h:.8,d:.15,offsetY:.6,color:e,offsetX:.38},{name:"leg",w:.18,h:.6,d:.18,offsetY:-.1,color:3813408,offsetX:-.12},{name:"leg",w:.18,h:.6,d:.18,offsetY:-.1,color:3813408,offsetX:.12}]}}function E0(i){const e=x0[i.factionId]||{},t=y0({bodyColor:e.body,hatColor:e.hat,skinColor:e.skin}),n=new dr;for(const r of t.parts){const s=new vi(r.w,r.h,r.d),o=new Xs({color:r.color}),a=new fn(s,o);a.position.y=r.offsetY,r.offsetX&&(a.position.x=r.offsetX),a.userData.partName=r.name,n.add(a)}return n}class S0{constructor(e){this.scene=e,this.meshMap=new Map}sync(e,t){const n=new Set;for(const r of e){n.add(r.id);let s=this.meshMap.get(r.id);if(s||(s=E0(r),this.scene.add(s),this.meshMap.set(r.id,s)),s.position.set(r.position.x,r.position.y,r.position.z),t){const o=t.position.x-r.position.x,a=t.position.z-r.position.z;s.rotation.y=Math.atan2(o,a)}}for(const[r,s]of this.meshMap)n.has(r)||(this.scene.remove(s),this.meshMap.delete(r))}}const Pt=Object.freeze({CLEAR:"clear",CLOUDY:"cloudy",RAIN:"rain",STORM:"storm",SNOW:"snow",FOG:"fog"}),cl=[Pt.CLEAR,Pt.CLOUDY,Pt.RAIN,Pt.STORM,Pt.SNOW,Pt.FOG],M0={[Pt.CLEAR]:0,[Pt.CLOUDY]:-.1,[Pt.RAIN]:-.3,[Pt.STORM]:-.5,[Pt.SNOW]:-.8,[Pt.FOG]:-.1},T0={[Pt.CLEAR]:1,[Pt.CLOUDY]:.9,[Pt.RAIN]:.7,[Pt.STORM]:.4,[Pt.SNOW]:.6,[Pt.FOG]:.3};class b0{constructor(e){this._seed=e,this._rng=e,this.current=Pt.CLEAR,this.elapsed=0,this.duration=this._rollDuration()}_nextRandom(){return this._rng=this._rng*1103515245+12345&2147483647,this._rng/2147483647}_rollDuration(){return 60+Math.floor(this._nextRandom()*120)}tick(e){this.elapsed+=e,this.elapsed>=this.duration&&(this.elapsed-=this.duration,this.current=cl[Math.floor(this._nextRandom()*cl.length)],this.duration=this._rollDuration())}getTemperatureModifier(){return M0[this.current]||0}getVisibilityModifier(){return T0[this.current]||1}}class A0{constructor({width:e,height:t,cellSize:n}){this.width=e,this.height=t,this.cellSize=n,this._cols=Math.ceil(e/n),this._rows=Math.ceil(t/n),this._revealed=new Uint8Array(this._cols*this._rows),this._landmarks=[]}_cellIndex(e,t){const n=Math.floor(e/this.cellSize),r=Math.floor(t/this.cellSize);return n<0||n>=this._cols||r<0||r>=this._rows?-1:r*this._cols+n}isRevealed(e,t){const n=this._cellIndex(e,t);return n<0?!1:this._revealed[n]===1}reveal(e,t,n){const r=Math.max(0,Math.floor((e-n)/this.cellSize)),s=Math.min(this._cols-1,Math.floor((e+n)/this.cellSize)),o=Math.max(0,Math.floor((t-n)/this.cellSize)),a=Math.min(this._rows-1,Math.floor((t+n)/this.cellSize));for(let c=o;c<=a;c++)for(let l=r;l<=s;l++){const h=(l+.5)*this.cellSize,d=(c+.5)*this.cellSize,f=h-e,p=d-t;f*f+p*p<=n*n&&(this._revealed[c*this._cols+l]=1)}}getRevealedPercentage(){let e=0;const t=this._revealed.length;for(let n=0;n<t;n++)this._revealed[n]===1&&e++;return e/t*100}addLandmark(e){this._landmarks.push(e)}getLandmarks(){return this._landmarks}serialize(){return{revealed:Array.from(this._revealed),landmarks:this._landmarks.map(e=>({...e}))}}deserialize(e){for(let t=0;t<e.revealed.length&&t<this._revealed.length;t++)this._revealed[t]=e.revealed[t];this._landmarks=e.landmarks.map(t=>({...t}))}}const R0=100,w0=1.5;function Or(i){let e=0;for(let t=1;t<i;t++)e+=Math.floor(R0*Math.pow(w0,t-1));return e}class C0{constructor(){this.level=1,this.experience=0,this.skillPoints=0}addExperience(e,t){for(this.experience+=e;this.experience>=Or(this.level+1);)this.level++,this.skillPoints++}getExpForNextLevel(){return Or(this.level+1)-Or(this.level)}getExpProgress(){const e=Or(this.level),n=Or(this.level+1)-e;return n<=0?0:(this.experience-e)/n}spendSkillPoint(){return this.skillPoints<=0?!1:(this.skillPoints--,!0)}}const $t=Object.freeze({MAIN_HAND:"main_hand",OFF_HAND:"off_hand",HEAD:"head",CHEST:"chest",LEGS:"legs",FEET:"feet",ACCESSORY:"accessory"}),I0=Object.values($t);class O0{constructor(){this._slots=new Map;for(const e of I0)this._slots.set(e,null)}get(e){return this._slots.get(e)||null}equip(e){const t=this._slots.get(e.slot)||null;return this._slots.set(e.slot,e),t}unequip(e){const t=this._slots.get(e)||null;return this._slots.set(e,null),t}getTotalArmor(){let e=0;for(const t of this._slots.values())t&&t.armor&&(e+=t.armor);return e}getEquippedItems(){const e=[];for(const t of this._slots.values())t&&e.push(t);return e}}class D0{constructor(e){this.size=e,this._slots=new Array(e).fill(null),this.selectedSlot=0}getSlot(e){return this._slots[e]||null}setSlot(e,t){this._slots[e]=t}clearSlot(e){this._slots[e]=null}selectSlot(e){this.selectedSlot=(e%this.size+this.size)%this.size}getSelectedItem(){return this._slots[this.selectedSlot]||null}scrollNext(){this.selectedSlot=(this.selectedSlot+1)%this.size}scrollPrev(){this.selectedSlot=(this.selectedSlot-1+this.size)%this.size}}const ll=100,L0=75,Lo=50,P0=2;class N0{constructor(){this.level=0}addFear(e){this.level=Math.min(ll,this.level+e)}reduceFear(e){this.level=Math.max(0,this.level-e)}tick(e){this.level=Math.max(0,this.level-P0*e)}getMovementPenalty(){return this.level<Lo?0:(this.level-Lo)/(ll-Lo)*.4}isTerrified(){return this.level>=L0}}pt.DAWN+"",pt.DAY+"",pt.DUSK+"",pt.NIGHT+"";pt.DAWN+"",pt.DAY+"",pt.DUSK+"",pt.NIGHT+"";pt.DAWN+"",pt.DAY+"",pt.DUSK+"",pt.NIGHT+"";const U0={man_ranger:[{type:"short_bow",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"bedroll",count:1},{type:"trail_rations",count:3}],man_soldier:[{type:"iron_sword",count:1},{type:"shield",count:1},{type:"stone_pickaxe",count:1},{type:"leather_armor",count:1},{type:"bread",count:2}],man_scholar:[{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"lantern",count:1},{type:"relic_shard",count:1},{type:"lore_fragment",count:2}],elf_archer:[{type:"refined_bow",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"arrow",count:20},{type:"lembas",count:2}],elf_warden:[{type:"spear",count:1},{type:"stone_pickaxe",count:1},{type:"ward_token",count:1},{type:"cloak",count:1},{type:"lembas",count:1}],elf_gatherer:[{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"herb_pouch",count:1},{type:"sling",count:1},{type:"berries",count:5}],dwarf_miner:[{type:"pickaxe",count:1},{type:"hammer",count:1},{type:"torch",count:3},{type:"rope",count:1}],dwarf_blacksmith:[{type:"hammer",count:1},{type:"stone_pickaxe",count:1},{type:"iron_ore",count:5},{type:"repair_kit",count:1},{type:"bread",count:2}],dwarf_delver:[{type:"axe",count:1},{type:"stone_pickaxe",count:1},{type:"lantern",count:1},{type:"rope",count:2},{type:"trail_rations",count:2}],hobbit_burglar:[{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"sling",count:1},{type:"lock_tools",count:1},{type:"mushroom",count:5}],hobbit_cook:[{type:"pan",count:1},{type:"stone_pickaxe",count:1},{type:"firestarter",count:1},{type:"raw_meat",count:3},{type:"berries",count:5}],hobbit_forager:[{type:"walking_stick",count:1},{type:"dagger",count:1},{type:"stone_pickaxe",count:1},{type:"satchel",count:1},{type:"mushroom",count:3},{type:"berries",count:3}]};function k0(i){return U0[i]||[]}function ud(i){Object.freeze(i);for(const e of Object.values(i))e&&typeof e=="object"&&ud(e);return i}const mr=ud({PHYSICS:{GRAVITY:-20,JUMP_VELOCITY:8,PLAYER_WIDTH:.6,PLAYER_HEIGHT:1.8,VOID_FLOOR_Y:0},CAMERA:{FOV:75,NEAR:.1,FAR:80,MOUSE_SENSITIVITY:.002,MAX_PITCH:Math.PI/2-.01,THIRD_PERSON_DISTANCE:5,THIRD_PERSON_EYE_HEIGHT:2,FIRST_PERSON_EYE_HEIGHT:1.6},WORLD:{BOUNDARY_EXTENT:560,WATER_LEVEL:26,SURFACE_Y:32},CHUNKS:{LOAD_DISTANCE:5,UNLOAD_DISTANCE:8,MAX_PER_FRAME:8,RENDER_DISTANCE:4,SIZE:16},COMBAT:{MELEE_RANGE:3,MELEE_CONE:.7,RANGED_CONE:.95,FIST_DAMAGE:2,NORMAL_COOLDOWN:.5,HEAVY_COOLDOWN:1.2,XP_PER_KILL:25,FACTION_REP_PER_KILL:10},SURVIVAL:{GAME_TIME_SCALE:4,SPRINT_MULTIPLIER:1.6,WATER_SLOWDOWN:.5,HUNGER_DRAIN_RATE:.1},FOG:{WIDTH:700,HEIGHT:300,CELL_SIZE:10,BASE_FAR:56,BASE_NEAR_RATIO:.5,MIN_NEAR:1,REVEAL_RADIUS:20},SPAWNING:{MAX_ENEMIES:8,MIN_SPAWN_DIST:15,MAX_SPAWN_DIST:35,SPAWN_INTERVAL:10},CORRUPTION:{CENTER_X:420,CENTER_Z:90,RADIUS:100,FOG_THRESHOLD:.1},RESTORATION:{INTERACT_RANGE:8,HINT_RANGE:10,XP_REWARD:100,FACTION_REP_REWARD:50},NPC:{INTERACT_RANGE:5},MAP:{CANVAS_WIDTH:460,CANVAS_HEIGHT:320,WORLD_MIN_X:-100,WORLD_MAX_X:560,WORLD_MIN_Z:-120,WORLD_MAX_Z:150},COLORS:{SKY_DAY:8900331,SKY_DAWN:16757606,SKY_DUSK:16742212,SKY_NIGHT:657962,AMBIENT_LIGHT:16777215,DIR_LIGHT:16774368},LIGHTING:{AMBIENT:{dawn:.5,day:.6,dusk:.35,night:.1},DIRECTIONAL:{dawn:.6,day:.8,dusk:.4,night:.05}},QUESTS:{AUTO_ACTIVATE_SIDE_COUNT:3,XP_FIRST_NIGHT:50,XP_EXPLORATION:30,XP_DISCOVERY:20,XP_RESTORATION:100},CREATIVE:{FLY_SPEED:15},DIALOGUE:{DISPLAY_DURATION:5,SHORT_DURATION:3,SAVE_FEEDBACK_DURATION:2}});function dl(i){const e=mr.FOG.BASE_FAR*i;return{near:Math.max(mr.FOG.MIN_NEAR,e*mr.FOG.BASE_NEAR_RATIO),far:e}}function F0(i,e){const t=e-1;i.x=Math.max(-t,Math.min(t,i.x)),i.z=Math.max(-t,Math.min(t,i.z)),i.y=Math.max(0,i.y)}class ut{constructor(e,t,n,r=null){this.name=e,this.inputs=t,this.outputs=n,this.station=r}canCraft(e){return this.inputs.every(({type:t,count:n})=>e.count(t)>=n)}}class B0{constructor(e){this.recipes=e}getAvailableRecipes(e,t=null){return this.recipes.filter(n=>n.station&&n.station!==t?!1:n.canCraft(e))}craft(e,t,n=null){const r=this.recipes.find(s=>s.name===e);if(!r||r.station&&r.station!==n||!r.canCraft(t))return!1;for(const{type:s,count:o}of r.inputs)t.remove(s,o);for(const{type:s,count:o}of r.outputs)t.add(s,o);return!0}}class z0{constructor(e){this._system=e,this.isOpen=!1,this.selectedIndex=0,this._station=null}toggle(){this.isOpen=!this.isOpen,this.isOpen&&(this.selectedIndex=0)}setStation(e){this._station=e}getAllRecipes(){return this._system.recipes.filter(e=>e.station===this._station)}getAvailableRecipes(e){return this._system.getAvailableRecipes(e,this._station)}craftSelected(e){const t=this.getAllRecipes();if(this.selectedIndex>=t.length)return!1;const n=t[this.selectedIndex];return this._system.craft(n.name,e,this._station)}selectNext(){this.selectedIndex++}selectPrev(){this.selectedIndex=Math.max(0,this.selectedIndex-1)}}const H0=[new ut("Sticks from Wood",[{type:W.WOOD,count:1}],[{type:W.STICK,count:4}]),new ut("Rope from Fiber",[{type:W.FIBER,count:3}],[{type:W.ROPE,count:1}]),new ut("Torch",[{type:W.STICK,count:1},{type:W.COAL,count:1}],[{type:W.TORCH,count:2}]),new ut("Planks",[{type:W.WOOD,count:2}],[{type:W.PLANKS,count:4}]),new ut("Workbench",[{type:W.PLANKS,count:4},{type:W.STICK,count:4}],[{type:W.WORKBENCH,count:1}]),new ut("Campfire",[{type:W.STONE,count:5},{type:W.STICK,count:3}],[{type:W.CAMPFIRE,count:1}]),new ut("Stone Pickaxe",[{type:W.STICK,count:2},{type:W.STONE,count:3}],[{type:W.STONE_PICKAXE,count:1}],"workbench"),new ut("Stone Axe",[{type:W.STICK,count:2},{type:W.STONE,count:2}],[{type:W.STONE_AXE,count:1}],"workbench"),new ut("Bedroll",[{type:W.FIBER,count:6},{type:W.LEATHER,count:2}],[{type:W.BEDROLL,count:1}],"workbench"),new ut("Cobblestone",[{type:W.STONE,count:4}],[{type:W.COBBLESTONE,count:4}],"workbench"),new ut("Glass from Sand",[{type:W.SAND,count:4}],[{type:W.GLASS,count:2}],"workbench"),new ut("Iron Pickaxe",[{type:W.STICK,count:2},{type:W.IRON_INGOT,count:3}],[{type:W.IRON_PICKAXE,count:1}],"workbench"),new ut("Iron Axe",[{type:W.STICK,count:2},{type:W.IRON_INGOT,count:2}],[{type:W.IRON_AXE,count:1}],"workbench"),new ut("Forge",[{type:W.STONE,count:8},{type:W.IRON_ORE,count:3}],[{type:W.FORGE,count:1}],"workbench"),new ut("Kitchen",[{type:W.PLANKS,count:6},{type:W.STONE,count:4}],[{type:W.KITCHEN,count:1}],"workbench"),new ut("Loom",[{type:W.PLANKS,count:4},{type:W.FIBER,count:6}],[{type:W.LOOM,count:1}],"workbench"),new ut("Smelt Iron Ore",[{type:W.IRON_ORE,count:2},{type:W.COAL,count:1}],[{type:W.IRON_INGOT,count:1}],"forge"),new ut("Smelt Copper Ore",[{type:W.COPPER_ORE,count:2},{type:W.COAL,count:1}],[{type:W.COPPER_INGOT,count:1}],"forge"),new ut("Cook Meat",[{type:W.RAW_MEAT,count:1}],[{type:W.COOKED_MEAT,count:1}],"campfire"),new ut("Cook Fish",[{type:W.RAW_FISH,count:1}],[{type:W.COOKED_FISH,count:1}],"campfire"),new ut("Hearth Stew",[{type:W.COOKED_MEAT,count:2},{type:W.RAW_MUSHROOM,count:1}],[{type:W.STEW,count:2}],"kitchen"),new ut("Trail Rations",[{type:W.COOKED_MEAT,count:1},{type:W.RAW_BERRIES,count:2}],[{type:W.TRAIL_RATIONS,count:3}],"kitchen"),new ut("Herb Salad",[{type:W.RAW_BERRIES,count:2},{type:W.RAW_MUSHROOM,count:2}],[{type:W.HERB_SALAD,count:2}],"kitchen"),new ut("Thatch Block",[{type:W.FIBER,count:4}],[{type:W.THATCH,count:4}],"workbench"),new ut("Stone Brick",[{type:W.STONE,count:4}],[{type:W.STONE_BRICK,count:4}],"workbench"),new ut("Rope from Fiber (Loom)",[{type:W.FIBER,count:2}],[{type:W.ROPE,count:2}],"loom"),new ut("Bandage",[{type:W.FIBER,count:3}],[{type:W.BANDAGE,count:2}],"loom"),new ut("Leather Armor",[{type:W.LEATHER,count:5},{type:W.ROPE,count:2}],[{type:W.LEATHER_ARMOR,count:1}],"loom"),new ut("Oak Planks",[{type:W.WOOD,count:2}],[{type:W.OAK_PLANKS,count:4}],"workbench"),new ut("Copper Pickaxe",[{type:W.STICK,count:2},{type:W.COPPER_INGOT,count:3}],[{type:W.COPPER_PICKAXE,count:1}],"workbench"),new ut("Iron Sword",[{type:W.IRON_INGOT,count:2},{type:W.STICK,count:1}],[{type:W.IRON_SWORD,count:1}],"forge"),new ut("Iron Hammer",[{type:W.IRON_INGOT,count:3},{type:W.STICK,count:2}],[{type:W.IRON_HAMMER,count:1}],"forge")];class G0{constructor({type:e,duration:t,strength:n}){this.type=e,this.remaining=t,this.strength=n}tick(e){this.remaining-=e}isExpired(){return this.remaining<=0}}class V0{constructor(){this._effects=[]}apply({type:e,duration:t,strength:n}){this._effects=this._effects.filter(r=>r.type!==e),this._effects.push(new G0({type:e,duration:t,strength:n}))}tick(e){for(const t of this._effects)t.tick(e);this._effects=this._effects.filter(t=>!t.isExpired())}getActive(){return this._effects}getStrength(e){return this._effects.filter(t=>t.type===e).reduce((t,n)=>t+n.strength,0)}has(e){return this._effects.some(t=>t.type===e)}}const Yt=Object.freeze({LOCKED:"locked",AVAILABLE:"available",ACTIVE:"active",COMPLETED:"completed"});class hl{constructor({id:e,description:t,target:n}){this.id=e,this.description=t,this.target=n,this.progress=0}advance(e){this.progress=Math.min(this.progress+e,this.target)}isComplete(){return this.progress>=this.target}}class $n{constructor({id:e,chapter:t,name:n,description:r,objectives:s,requires:o=[]}){this.id=e,this.chapter=t,this.name=n,this.description=r,this.requires=o,this.objectives=s.map(a=>a instanceof hl?a:new hl(a))}advanceObjective(e,t){const n=this.objectives.find(r=>r.id===e);n&&n.advance(t)}isComplete(){return this.objectives.every(e=>e.isComplete())}}class W0{constructor(e){this.quests=e,this._status=new Map;for(const t of e){const n=t.requires.length>0;this._status.set(t.id,n?Yt.LOCKED:Yt.AVAILABLE)}}getQuest(e){return this.quests.find(t=>t.id===e)}getStatus(e){return this._status.get(e)||Yt.LOCKED}activate(e){return this.getStatus(e)!==Yt.AVAILABLE?!1:(this._status.set(e,Yt.ACTIVE),!0)}advanceObjective(e,t,n){if(this.getStatus(e)!==Yt.ACTIVE)return;const r=this.getQuest(e);r&&(r.advanceObjective(t,n),r.isComplete()&&(this._status.set(e,Yt.COMPLETED),this._unlockDependents(e)))}_unlockDependents(e){for(const t of this.quests){if(this._status.get(t.id)!==Yt.LOCKED)continue;t.requires.every(r=>this._status.get(r)===Yt.COMPLETED)&&this._status.set(t.id,Yt.AVAILABLE)}}getActiveQuests(){return this.quests.filter(e=>this._status.get(e.id)===Yt.ACTIVE)}serialize(){const e={};for(const[n,r]of this._status)e[n]=r;const t={};for(const n of this.quests)t[n.id]=n.objectives.map(r=>({id:r.id,progress:r.progress}));return{statuses:e,objectives:t}}deserialize(e){for(const[t,n]of Object.entries(e.statuses))this._status.set(t,n);for(const[t,n]of Object.entries(e.objectives)){const r=this.getQuest(t);if(r)for(const s of n){const o=r.objectives.find(a=>a.id===s.id);o&&(o.progress=s.progress)}}}}const X0=[new $n({id:"ch1_embers",chapter:1,name:"Embers in the Wild",description:"Survive the first days, reach the ruined outpost, and activate the first ward fragment.",objectives:[{id:"ch1_survive",description:"Survive the first night",target:1},{id:"ch1_reach_outpost",description:"Reach the ruined outpost",target:1},{id:"ch1_activate_ward",description:"Activate the ward fragment",target:1}]}),new $n({id:"ch2_roads",chapter:2,name:"Broken Roads",description:"Restore a frontier settlement, meet the first lore NPC, and discover signs of spreading corruption.",requires:["ch1_embers"],objectives:[{id:"ch2_restore",description:"Restore the frontier settlement",target:1},{id:"ch2_meet_npc",description:"Meet the lore NPC",target:1},{id:"ch2_corruption",description:"Investigate corruption signs",target:3}]}),new $n({id:"ch3_records",chapter:3,name:"The Hidden Records",description:"Travel to the Rivendell region, learn of the ward network, and obtain the first true relic.",requires:["ch2_roads"],objectives:[{id:"ch3_reach_rivendell",description:"Reach the Rivendell region",target:1},{id:"ch3_learn_wards",description:"Learn about the ward network",target:1},{id:"ch3_obtain_relic",description:"Obtain the first true relic",target:1}]}),new $n({id:"ch4_mountains",chapter:4,name:"Beneath the Mountains",description:"Enter the Misty Mountains delves, stabilize a dwarven mechanism, and fight underground threats.",requires:["ch3_records"],objectives:[{id:"ch4_enter_delve",description:"Enter the Misty Mountains delve",target:1},{id:"ch4_stabilize",description:"Stabilize the dwarven mechanism",target:1},{id:"ch4_defeat_boss",description:"Defeat the corrupted guardian",target:1}]}),new $n({id:"ch5_darkwood",chapter:5,name:"The Dark Wood Stirs",description:"Travel through Mirkwood, deal with spiders and ward failures, and restore a forest beacon.",requires:["ch4_mountains"],objectives:[{id:"ch5_enter_mirkwood",description:"Enter Mirkwood",target:1},{id:"ch5_clear_spiders",description:"Clear spider nests",target:3},{id:"ch5_restore_beacon",description:"Restore the forest beacon",target:1}]}),new $n({id:"ch6_forge",chapter:6,name:"The Sleeping Forge",description:"Reach the dwarven craft center near Erebor, unlock final crafting, and learn the source location.",requires:["ch5_darkwood"],objectives:[{id:"ch6_reach_forge",description:"Reach the ancient forge",target:1},{id:"ch6_unlock_crafting",description:"Unlock final crafting tier",target:1},{id:"ch6_discover_source",description:"Discover the awakening source location",target:1}]}),new $n({id:"ch7_shadow",chapter:7,name:"The Rekindled Shadow",description:"Assault the corrupted stronghold, disable its link to the ancient network, and face the dark champion.",requires:["ch6_forge"],objectives:[{id:"ch7_assault",description:"Assault the corrupted stronghold",target:1},{id:"ch7_disable_link",description:"Disable the network link",target:1},{id:"ch7_defeat_champion",description:"Defeat the dark champion",target:1}]}),new $n({id:"ch8_after",chapter:8,name:"After the Night",description:"The world recovers. Settlements improve, and exploration continues in peace.",requires:["ch7_shadow"],objectives:[{id:"ch8_celebrate",description:"Return to a restored settlement",target:1},{id:"ch8_explore",description:"Explore the renewed world",target:1}]})];class q0{constructor(){this._questTarget=null}getDirectionTo(e,t){const n=t.x-e.x,r=t.z-e.z;return Math.atan2(n,-r)}getDistance(e,t){const n=t.x-e.x,r=(t.y||0)-(e.y||0),s=t.z-e.z;return Math.sqrt(n*n+r*r+s*s)}getCardinal(e){let t=(e%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return t<Math.PI/4||t>=Math.PI*7/4?"N":t<Math.PI*3/4?"E":t<Math.PI*5/4?"S":"W"}setQuestTarget(e){this._questTarget={...e}}clearQuestTarget(){this._questTarget=null}getQuestDirection(e){return this._questTarget?{angle:this.getDirectionTo(e,this._questTarget),distance:this.getDistance(e,this._questTarget)}:null}}function K0(i={}){const{survivalStats:e,questSystem:t,compass:n,playerYaw:r=0,playerPos:s,fearSystem:o,experienceSystem:a,statusEffects:c}=i,l={};if(e&&(l.health=Math.ceil(e.health),l.maxHealth=e.maxHealth,l.stamina=Math.ceil(e.stamina),l.hunger=Math.ceil(e.hunger),l.focus=Math.ceil(e.focus),l.tempLabel=e.temperature<-.5?"Cold":e.temperature>.5?"Hot":"Mild"),t){const h=t.getActiveQuests();l.activeQuestName=h.length>0?h[0].name:null}else l.activeQuestName=null;return n&&(l.compassCardinal=n.getCardinal(r)),o?l.fearLevel=Math.round(o.level):l.fearLevel=0,s&&(l.playerX=Math.round(s.x),l.playerZ=Math.round(s.z)),a?l.level=a.level:l.level=1,c?l.statusEffects=c.getActive().map(h=>({type:h.type,remaining:h.remaining,strength:h.strength})):l.statusEffects=[],l}const Y0=Object.values(ad).sort((i,e)=>e.hungerRestore-i.hungerRestore).map(i=>i.id);function $0(i,e,t){for(const n of Y0)if(i.count(n)>0){const r=Pg(n);if(e.eat(r.hungerRestore),i.remove(n,1),t&&r.effects)for(const s of r.effects)t.apply(s);return!0}return!1}class ul{constructor({id:e,name:t,description:n,cost:r,requires:s=[]}){this.id=e,this.name=t,this.description=n,this.cost=r,this.requires=s}}class rr{constructor({id:e,name:t,nodes:n}){this.id=e,this.name=t,this.nodes=n.map(r=>r instanceof ul?r:new ul(r)),this._nodeMap=new Map(this.nodes.map(r=>[r.id,r]))}getNode(e){return this._nodeMap.get(e)}}class j0{constructor(e){this.trees=e,this.skillPoints=0,this._unlocked=new Set,this._allNodes=new Map;for(const t of e)for(const n of t.nodes)this._allNodes.set(n.id,n)}addPoints(e){this.skillPoints+=e}isUnlocked(e){return this._unlocked.has(e)}unlock(e){if(this._unlocked.has(e))return!1;const t=this._allNodes.get(e);if(!t||this.skillPoints<t.cost)return!1;for(const n of t.requires)if(!this._unlocked.has(n))return!1;return this.skillPoints-=t.cost,this._unlocked.add(e),!0}getAvailable(){const e=[];for(const[t,n]of this._allNodes){if(this._unlocked.has(t)||this.skillPoints<n.cost)continue;n.requires.every(s=>this._unlocked.has(s))&&e.push(n)}return e}grantStartingUnlock(e){return this._unlocked.has(e)||!this._allNodes.get(e)?!1:(this._unlocked.add(e),!0)}getUnlocked(){return[...this._unlocked]}serialize(){return{skillPoints:this.skillPoints,unlocked:[...this._unlocked]}}deserialize(e){this.skillPoints=e.skillPoints,this._unlocked=new Set(e.unlocked)}}class Z0{constructor(e){this._system=e,this.isOpen=!1,this.currentTreeIndex=0,this.selectedNodeIndex=0}toggle(){this.isOpen=!this.isOpen,this.isOpen&&(this.currentTreeIndex=0,this.selectedNodeIndex=0)}getCurrentTree(){return this._system.trees[this.currentTreeIndex]}nextTree(){this.currentTreeIndex=(this.currentTreeIndex+1)%this._system.trees.length,this.selectedNodeIndex=0}prevTree(){this.currentTreeIndex=(this.currentTreeIndex-1+this._system.trees.length)%this._system.trees.length,this.selectedNodeIndex=0}getNodes(){return this.getCurrentTree().nodes.map(t=>({id:t.id,name:t.name,description:t.description,cost:t.cost,requires:t.requires,unlocked:this._system.isUnlocked(t.id),available:!this._system.isUnlocked(t.id)&&this._system.skillPoints>=t.cost&&t.requires.every(n=>this._system.isUnlocked(n))}))}unlockSelected(){const e=this.getNodes();return this.selectedNodeIndex>=e.length?!1:this._system.unlock(e[this.selectedNodeIndex].id)}getSkillPoints(){return this._system.skillPoints}}const fl=[new rr({id:"survival",name:"Survival",nodes:[{id:"surv_hardy",name:"Hardy",description:"Slower hunger drain",cost:1},{id:"surv_warmth",name:"Warmth",description:"Better camp warmth bonus",cost:1},{id:"surv_iron_stomach",name:"Iron Stomach",description:"Raw food is safer to eat",cost:2,requires:["surv_hardy"]},{id:"surv_bandages",name:"Better Bandages",description:"Bandages heal more",cost:2,requires:["surv_hardy"]},{id:"surv_rest",name:"Deep Rest",description:"Sleep restores more stamina",cost:2,requires:["surv_warmth"]},{id:"surv_forager",name:"Keen Forager",description:"Find more berries and herbs",cost:1},{id:"surv_endurance",name:"Endurance",description:"Slower stamina drain while sprinting",cost:3,requires:["surv_iron_stomach"]},{id:"surv_corruption_resist",name:"Corruption Resist",description:"Reduced corruption buildup",cost:3,requires:["surv_bandages"]},{id:"surv_shelter_master",name:"Shelter Master",description:"Shelters provide better quality",cost:2,requires:["surv_rest"]},{id:"surv_second_wind",name:"Second Wind",description:"Recover stamina faster when low",cost:3,requires:["surv_endurance"]}]}),new rr({id:"combat",name:"Combat",nodes:[{id:"cmb_parry",name:"Parry",description:"Timed parry window for melee",cost:1},{id:"cmb_heavy_blow",name:"Heavy Blow",description:"Stronger heavy attacks",cost:1},{id:"cmb_quick_draw",name:"Quick Draw",description:"Faster bow draw speed",cost:1},{id:"cmb_shield_wall",name:"Shield Wall",description:"Reduced damage when blocking",cost:2,requires:["cmb_parry"]},{id:"cmb_precise_strike",name:"Precise Strike",description:"Critical hit chance on weak spots",cost:2,requires:["cmb_heavy_blow"]},{id:"cmb_ranged_stability",name:"Ranged Stability",description:"Less bow sway",cost:2,requires:["cmb_quick_draw"]},{id:"cmb_counter",name:"Counter",description:"Damage on successful parry",cost:3,requires:["cmb_shield_wall"]},{id:"cmb_cleave",name:"Cleave",description:"Hit multiple enemies with heavy attacks",cost:3,requires:["cmb_precise_strike"]},{id:"cmb_steady_aim",name:"Steady Aim",description:"Headshot bonus damage",cost:3,requires:["cmb_ranged_stability"]},{id:"cmb_berserker",name:"Berserker",description:"Damage bonus when health is low",cost:3,requires:["cmb_cleave"]}]}),new rr({id:"craft",name:"Craft",nodes:[{id:"crf_repair",name:"Field Repair",description:"Better repair efficiency",cost:1},{id:"crf_yield",name:"Material Yield",description:"Higher material yield from mining",cost:1},{id:"crf_recipes",name:"Advanced Recipes",description:"Unlock intermediate recipes",cost:2,requires:["crf_repair"]},{id:"crf_tool_mastery",name:"Tool Mastery",description:"Tools last longer",cost:2,requires:["crf_repair"]},{id:"crf_smelt",name:"Efficient Smelting",description:"Less fuel per smelt",cost:2,requires:["crf_yield"]},{id:"crf_forge_master",name:"Forge Master",description:"Unlock high-tier metalworking",cost:3,requires:["crf_recipes"]},{id:"crf_architect",name:"Architect",description:"Restoration costs reduced",cost:2,requires:["crf_yield"]},{id:"crf_rune_craft",name:"Rune Craft",description:"Craft rune items at rune table",cost:3,requires:["crf_forge_master"]},{id:"crf_master_smith",name:"Master Smith",description:"Best-tier weapons and armor",cost:3,requires:["crf_forge_master"]}]}),new rr({id:"exploration",name:"Exploration",nodes:[{id:"exp_map_reveal",name:"Pathfinder",description:"Faster map reveal radius",cost:1},{id:"exp_climb",name:"Sure-Footed",description:"Safer climbing, reduced fall damage",cost:1},{id:"exp_treasure",name:"Treasure Sense",description:"Detect hidden caches nearby",cost:2,requires:["exp_map_reveal"]},{id:"exp_scout",name:"Scout",description:"See enemies from further away",cost:2,requires:["exp_map_reveal"]},{id:"exp_mountaineer",name:"Mountaineer",description:"Better movement in mountains",cost:2,requires:["exp_climb"]},{id:"exp_lore_reader",name:"Lore Reader",description:"Identify ruins and relics faster",cost:2,requires:["exp_treasure"]},{id:"exp_night_eye",name:"Night Eye",description:"Better vision in darkness",cost:2,requires:["exp_scout"]},{id:"exp_swift_travel",name:"Swift Travel",description:"Move faster on roads",cost:3,requires:["exp_mountaineer"]}]}),new rr({id:"fellowship",name:"Fellowship",nodes:[{id:"fel_reputation",name:"Good Reputation",description:"Faster reputation gain",cost:1},{id:"fel_trader",name:"Shrewd Trader",description:"Better prices from merchants",cost:1},{id:"fel_diplomat",name:"Diplomat",description:"Faction hostility decays faster",cost:2,requires:["fel_reputation"]},{id:"fel_mentor",name:"Mentor",description:"Gain bonus XP from quest NPCs",cost:2,requires:["fel_reputation"]},{id:"fel_cheaper_restore",name:"Community Builder",description:"Cheaper restoration costs",cost:2,requires:["fel_trader"]},{id:"fel_trust",name:"Deep Trust",description:"Unlock unique faction quests",cost:3,requires:["fel_diplomat"]},{id:"fel_inspire",name:"Inspire",description:"Nearby allies fight better",cost:3,requires:["fel_mentor"]},{id:"fel_peace",name:"Peacekeeper",description:"Some enemies can be calmed",cost:3,requires:["fel_trust"]}]}),new rr({id:"attunement",name:"Attunement",nodes:[{id:"att_focus",name:"Focus Pool",description:"Increased max focus",cost:1},{id:"att_heal",name:"Healing Touch",description:"Stronger healing abilities",cost:1},{id:"att_ward",name:"Ward Strength",description:"Wards last longer",cost:2,requires:["att_focus"]},{id:"att_relic_sense",name:"Relic Sense",description:"Detect nearby relics",cost:2,requires:["att_focus"]},{id:"att_nature",name:"Nature Bond",description:"Nature magic costs less focus",cost:2,requires:["att_heal"]},{id:"att_stabilize",name:"Stabilize Relic",description:"Better relic stabilization",cost:3,requires:["att_relic_sense"]},{id:"att_purify",name:"Purify",description:"Remove corruption from blocks",cost:3,requires:["att_ward"]},{id:"att_calm_fear",name:"Calm Fear",description:"Reduce terror/corruption buildup",cost:2,requires:["att_nature"]},{id:"att_deep_attune",name:"Deep Attunement",description:"Relic abilities gain power",cost:3,requires:["att_stabilize"]}]})];class dn{constructor({id:e,name:t,position:n,factionId:r,dialogueId:s,dialogue:o={},trades:a=[]}){this.id=e,this.name=t,this.position={...n},this.spawnPosition={...n},this.factionId=r,this.dialogueId=s,this.dialogue=o,this.trades=a,this._wanderTimer=0,this._wanderDirX=0,this._wanderDirZ=0,this._wanderSpeed=1.2,this._wanderRadius=6}_collidesWithWorld(e,t,n){if(!n)return!1;const r=Math.floor(e),s=Math.floor(this.position.y),o=Math.floor(t);return yn(n.getBlock(r,s,o))||yn(n.getBlock(r,s+1,o))}updateAI(e,t,n){if(this._wanderTimer-=e,this._wanderTimer<=0)if(Math.random()<.4)this._wanderDirX=0,this._wanderDirZ=0,this._wanderTimer=2+Math.random()*3;else{const r=Math.random()*Math.PI*2;this._wanderDirX=Math.cos(r),this._wanderDirZ=Math.sin(r),this._wanderTimer=1+Math.random()*2}if(this._wanderDirX!==0||this._wanderDirZ!==0){const r=this.position.x+this._wanderDirX*this._wanderSpeed*e,s=this.position.z+this._wanderDirZ*this._wanderSpeed*e,o=r-this.spawnPosition.x,a=s-this.spawnPosition.z;if(o*o+a*a>this._wanderRadius*this._wanderRadius){const c=Math.sqrt(o*o+a*a);this._wanderDirX=-o/c,this._wanderDirZ=-a/c}else this._collidesWithWorld(r,this.position.z,n)?this._wanderDirX=-this._wanderDirX:this.position.x=r,this._collidesWithWorld(this.position.x,s,n)?this._wanderDirZ=-this._wanderDirZ:this.position.z=s}t&&(this.position.y=t(Math.floor(this.position.x),Math.floor(this.position.z))+1)}hasTrades(){return this.trades.length>0}getDialogue(e){if(!this.dialogueId)return this.dialogue.default||"";const t=e.getStatus(this.dialogueId);return t===Yt.COMPLETED&&this.dialogue.completed?this.dialogue.completed:t===Yt.ACTIVE&&this.dialogue.active?this.dialogue.active:t===Yt.AVAILABLE&&this.dialogue.available?this.dialogue.available:this.dialogue.default||""}}class Q0{constructor(){this._npcs=new Map}addNPC(e){this._npcs.set(e.id,e)}getNPC(e){return this._npcs.get(e)}getAllNPCs(){return Array.from(this._npcs.values())}findNearby(e,t){const n=[];for(const r of this._npcs.values())un(e,r.position)<=t&&n.push(r);return n}getByFaction(e){const t=[];for(const n of this._npcs.values())n.factionId===e&&t.push(n);return t}}const Po=[new dn({id:"ranger_hal",name:"Hal the Ranger",position:{x:10,y:33,z:8},factionId:"road_wardens",dialogueId:"ch1_embers",dialogue:{available:"The wild is dangerous. Ruins stir with old power.",active:"Have you found the ward fragment yet?",completed:"Well done. The ward glows again.",default:"Stay safe out there."},trades:[{give:{type:"leather",count:3},receive:{type:"iron_sword",count:1}},{give:{type:"iron_ore",count:2},receive:{type:"stone_pickaxe",count:1}}]}),new dn({id:"shire_farmer",name:"Hamfast the Farmer",position:{x:-15,y:33,z:12},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Fine day for gardening. The taters are coming along nicely."},trades:[{give:{type:"fiber",count:5},receive:{type:"raw_berries",count:3}},{give:{type:"wood",count:5},receive:{type:"raw_meat",count:2}}]}),new dn({id:"shire_merchant",name:"Rosie the Merchant",position:{x:20,y:33,z:-5},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Looking to trade? I have fine Shire goods."},trades:[{give:{type:"stone",count:10},receive:{type:"torch",count:5}},{give:{type:"leather",count:5},receive:{type:"bedroll",count:1}},{give:{type:"iron_ore",count:3},receive:{type:"stone_pickaxe",count:1}}]}),new dn({id:"elara_lorekeeper",name:"Elara the Lorekeeper",position:{x:200,y:33,z:35},factionId:"rivendell_keepers",dialogueId:"ch3_records",dialogue:{available:"The old records speak of a ward network...",active:"Search the archives. The truth is there.",completed:"You have found what was hidden.",default:"The lore is fading, but not yet lost."},trades:[{give:{type:"lore_fragment",count:2},receive:{type:"relic_shard",count:1}}]}),new dn({id:"rivendell_healer",name:"Celebrin the Healer",position:{x:210,y:33,z:25},factionId:"rivendell_keepers",dialogueId:null,dialogue:{default:"The valley still holds its peace. Let me tend your wounds."},trades:[{give:{type:"fiber",count:3},receive:{type:"bandage",count:2}},{give:{type:"raw_berries",count:5},receive:{type:"herb_salad",count:2}}]}),new dn({id:"thorin_smith",name:"Thorin the Smith",position:{x:275,y:45,z:55},factionId:"dwarven_crafters",dialogueId:"ch4_mountains",dialogue:{available:"The old forge can be rekindled, with the right materials.",active:"Have you stabilized the mechanism?",completed:"Aye, the forge rings true once more.",default:"Need something forged?"},trades:[{give:{type:"iron_ore",count:5},receive:{type:"iron_sword",count:1}},{give:{type:"iron_ore",count:3},receive:{type:"iron_pickaxe",count:1}},{give:{type:"copper_ore",count:5},receive:{type:"copper_pickaxe",count:1}}]}),new dn({id:"mountain_trader",name:"Dwalin the Trader",position:{x:260,y:45,z:45},factionId:"dwarven_crafters",dialogueId:null,dialogue:{default:"Mountain stone is the finest. Care to trade?"},trades:[{give:{type:"stone",count:10},receive:{type:"iron_ore",count:2}},{give:{type:"wood",count:15},receive:{type:"iron_ore",count:3}}]}),new dn({id:"galawen_warden",name:"Galawen the Warden",position:{x:395,y:33,z:40},factionId:"woodland_guardians",dialogueId:"ch5_darkwood",dialogue:{available:"The forest beacon must be restored before the dark wood consumes all.",active:"The spiders grow bolder. Clear their nests.",completed:"Light returns to Mirkwood. Thank you.",default:"Walk carefully beneath these boughs."},trades:[{give:{type:"fiber",count:10},receive:{type:"rope",count:3}},{give:{type:"relic_shard",count:2},receive:{type:"leather_armor",count:1}}]}),new dn({id:"beorn_jr",name:"Grimbeorn the Younger",position:{x:340,y:33,z:65},factionId:"beorning_wardens",dialogueId:null,dialogue:{default:"The wild things grow restless. Something stirs in the deep places."},trades:[{give:{type:"raw_meat",count:3},receive:{type:"leather",count:2}},{give:{type:"leather",count:5},receive:{type:"leather_armor",count:1}}]}),new dn({id:"old_tom",name:"Old Tom the Innkeeper",position:{x:85,y:33,z:22},factionId:"road_wardens",dialogueId:"ch2_roads",dialogue:{available:"The road needs mending. Fewer travelers come each season.",active:"Any luck restoring the hall?",completed:"The hall stands once more! Travelers will come again.",default:"Rest a while. The road will still be there tomorrow."},trades:[{give:{type:"iron_ore",count:1},receive:{type:"cooked_meat",count:2}},{give:{type:"wood",count:5},receive:{type:"torch",count:3}}]}),new dn({id:"bree_blacksmith",name:"Barliman the Blacksmith",position:{x:75,y:33,z:15},factionId:"road_wardens",dialogueId:null,dialogue:{default:"Looking for a blade? I forge fine ones, if the price is right."},trades:[{give:{type:"iron_ore",count:4},receive:{type:"iron_sword",count:1}},{give:{type:"stone",count:8},receive:{type:"stone_pickaxe",count:1}}]}),new dn({id:"sage_miriel",name:"Miriel the Sage",position:{x:500,y:40,z:28},factionId:"rivendell_keepers",dialogueId:"ch7_shadow",dialogue:{available:"The awakening reaches its peak. The bastion must hold.",active:"Press on. The dark champion awaits.",completed:"It is done. The shadow recedes.",default:"The age turns. What comes next is yours to shape."},trades:[{give:{type:"relic_shard",count:5},receive:{type:"lore_fragment",count:3}}]})];function No(i,e,t){const n=i.findNearby(e,t);if(n.length===0)return null;let r=null,s=1/0;for(const o of n){const a=un(e,o.position);a<s&&(r=o,s=a)}return r}function Ms(i,e,t){return un(i,e)<=t}class J0{constructor(e,t){this._fog=e,this._landmarks=t,this.isOpen=!1}toggle(){this.isOpen=!this.isOpen}getVisibleLandmarks(){return this._landmarks}getExploredPercentage(){return this._fog.getRevealedPercentage()}isRevealed(e,t){return this._fog.isRevealed(e,t)}getMapData(e){return{playerPos:{...e},landmarks:this._landmarks.map(t=>({id:t.id,name:t.name,x:t.position.x,z:t.position.z,region:t.region})),explored:this.getExploredPercentage()}}}const Ln=Object.freeze({SHIRE:"shire",BREE:"bree",TROLLSHAWS:"trollshaws",RIVENDELL:"rivendell",MISTY_MOUNTAINS:"misty_mountains",ANDUIN_VALE:"anduin_vale",MIRKWOOD:"mirkwood",LONG_LAKE:"long_lake",EREBOR:"erebor",DOL_GULDUR:"dol_guldur"});class Pn{constructor({id:e,name:t,position:n,radius:r,region:s,description:o=""}){this.id=e,this.name=t,this.position={...n},this.radius=r,this.region=s,this.description=o}contains(e){return un(this.position,e)<=this.radius}}const Ts=[new Pn({id:"shire",name:"The Shire",position:{x:0,y:33,z:0},radius:60,region:Ln.SHIRE,description:"Green rolling hills and cozy burrows."}),new Pn({id:"bree",name:"Bree",position:{x:80,y:33,z:20},radius:25,region:Ln.BREE,description:"A crossroads town where many travelers meet."}),new Pn({id:"trollshaws",name:"Trollshaws",position:{x:140,y:33,z:40},radius:35,region:Ln.TROLLSHAWS,description:"Rocky woodland where trolls once roamed."}),new Pn({id:"rivendell",name:"Rivendell",position:{x:200,y:33,z:30},radius:30,region:Ln.RIVENDELL,description:"The last homely house east of the sea."}),new Pn({id:"misty_mountains",name:"Misty Mountains",position:{x:270,y:50,z:50},radius:50,region:Ln.MISTY_MOUNTAINS,description:"Towering peaks hiding goblin tunnels and ancient delves."}),new Pn({id:"anduin_vale",name:"Anduin Vale",position:{x:340,y:33,z:60},radius:40,region:Ln.ANDUIN_VALE,description:"Fertile valley of the Great River, home to Beornings."}),new Pn({id:"mirkwood",name:"Mirkwood",position:{x:400,y:33,z:40},radius:55,region:Ln.MIRKWOOD,description:"A dark and tangled forest crawling with spiders."}),new Pn({id:"long_lake",name:"Long Lake",position:{x:470,y:33,z:30},radius:25,region:Ln.LONG_LAKE,description:"Lake-town and its surroundings on the water."}),new Pn({id:"erebor",name:"Erebor",position:{x:520,y:45,z:20},radius:35,region:Ln.EREBOR,description:"The Lonely Mountain, ancient dwarven stronghold."}),new Pn({id:"dol_guldur",name:"Dol Guldur",position:{x:420,y:33,z:90},radius:30,region:Ln.DOL_GULDUR,description:"A corrupted ruin of dark power in southern Mirkwood."})];function ev(i,e,t,n={}){const r={};for(const[c,l]of i.chunks){let h=!1;for(let d=0;d<l.blocks.length;d++)if(l.blocks[d]!==0){h=!0;break}h&&(r[c]=Array.from(l.blocks))}const s=[],o=t.size||36;for(let c=0;c<o;c++)s.push(t.getSlot?t.getSlot(c):null);const a={version:2,seed:n.seed||0,player:{position:{...e.position},velocity:{...e.velocity},yaw:e.yaw,pitch:e.pitch,onGround:e.onGround},inventory:s,inventorySize:o,chunks:r};if(n.survivalStats){const c=n.survivalStats;a.survivalStats={health:c.health,maxHealth:c.maxHealth,stamina:c.stamina,hunger:c.hunger,focus:c.focus,corruption:c.corruption,temperature:c.temperature}}return n.quests&&(a.quests=n.quests.serialize()),n.factions&&(a.factions=n.factions.serialize()),JSON.stringify(a)}function tv(i){const e=JSON.parse(i),t=new rd;for(const[a,c]of Object.entries(e.chunks))t._getOrCreateChunk(...a.split(",").map(Number)).blocks.set(c);const n=new hd(e.player.position);n.velocity=e.player.velocity,n.yaw=e.player.yaw,n.pitch=e.player.pitch,n.onGround=e.player.onGround;const r=e.inventorySize||36,s=new ld(r);if(Array.isArray(e.inventory))for(const a of e.inventory)a&&a.type&&a.count>0&&s.addItem(a.type,a.count);const o={world:t,player:n,inventory:s};if(e.survivalStats){const a=new dd;Object.assign(a,e.survivalStats),o.survivalStats=a}return e.quests&&(o.questData=e.quests),e.factions&&(o.factionData=e.factions),o}class Dr{constructor({id:e,name:t,description:n,position:r,requirements:s}){this.id=e,this.name=t,this.description=n,this.position=r||{x:0,y:0,z:0},this.requirements=s,this.restored=!1}canRestore(e){for(const t of this.requirements)if(e.count(t.type)<t.count)return!1;return!0}restore(e){if(this.restored||!this.canRestore(e))return!1;for(const t of this.requirements)e.remove(t.type,t.count);return this.restored=!0,!0}}const Lr=[new Dr({id:"starter_watchpost",name:"Ruined Watch-Post",description:"A crumbling frontier watch-post. Restoring it unlocks the first safe base.",position:{x:30,y:33,z:30},requirements:[{type:"wood",count:15},{type:"stone",count:10}]}),new Dr({id:"roadside_hall",name:"Roadside Ranger Hall",description:"An abandoned ranger outpost along the East Road. Improves travel and trade.",position:{x:90,y:33,z:25},requirements:[{type:"wood",count:20},{type:"stone",count:15},{type:"iron_ore",count:5}]}),new Dr({id:"mountain_workshop",name:"Dwarven Mountain Workshop",description:"A sealed dwarven annex in the Misty Mountains. Unlocks high-tier smithing.",position:{x:270,y:45,z:55},requirements:[{type:"stone",count:30},{type:"iron_ore",count:15},{type:"copper_ore",count:10}]}),new Dr({id:"forest_beacon",name:"Mirkwood Forest Beacon",description:"An ancient grove beacon overrun by corruption. Stabilizes the Mirkwood region.",position:{x:400,y:33,z:45},requirements:[{type:"wood",count:25},{type:"relic_shard",count:5},{type:"fiber",count:15}]}),new Dr({id:"ward_bastion",name:"Ward Bastion of the Last Age",description:"The final ward structure tied to the main quest. Its restoration turns the tide.",position:{x:500,y:40,z:30},requirements:[{type:"stone",count:40},{type:"iron_ore",count:20},{type:"relic_shard",count:10},{type:"lore_fragment",count:5}]})],pl={small:{radius:3,height:4,wallBlock:x.COBBLESTONE},medium:{radius:5,height:5,wallBlock:x.STONE_BRICK},large:{radius:7,height:6,wallBlock:x.STONE_BRICK}};function nv(i,e,t="small"){const n=pl[t]||pl.small,{radius:r,height:s,wallBlock:o}=n,a=Math.floor(e.x),c=Math.floor(e.y),l=Math.floor(e.z);for(let d=-r;d<=r;d++)for(let f=-r;f<=r;f++)i.setBlock(a+d,c-1,l+f,x.COBBLESTONE);for(let d=0;d<s;d++)for(let f=-r;f<=r;f++)for(let p=-r;p<=r;p++)(Math.abs(f)===r||Math.abs(p)===r)&&(f===r&&Math.abs(p)<=1&&d<3||(d<s-1||(f+p)%3!==0)&&i.setBlock(a+f,c+d,l+p,o));const h=[[-r,-r],[-r,r],[r,-r],[r,r]];for(const[d,f]of h)for(let p=0;p<s;p++)i.setBlock(a+d,c+p,l+f,x.STONE);for(let d=-r;d<=r;d++)for(let f=-r;f<=r;f++)(Math.abs(d)>=r-1||Math.abs(f)>=r-1)&&i.setBlock(a+d,c+s,l+f,o)}function fd(i,e,t={}){const n=t.wallBlock||x.OAK_PLANKS,r=t.roofBlock||x.PLANKS,s=t.floorBlock||x.COBBLESTONE,o=t.radius||4,a=t.height||4,c=t.bed!==!1,l=t.chest||!1,h=Math.floor(e.x),d=Math.floor(e.y),f=Math.floor(e.z);for(let p=-o;p<=o;p++)for(let m=-o;m<=o;m++)for(let g=0;g<=a+1;g++)i.setBlock(h+p,d+g,f+m,x.AIR);for(let p=-o;p<=o;p++)for(let m=-o;m<=o;m++)i.setBlock(h+p,d-1,f+m,s);for(let p=0;p<a;p++)for(let m=-o;m<=o;m++)for(let g=-o;g<=o;g++)if(Math.abs(m)===o||Math.abs(g)===o){if(m===o&&g===0&&p<2){i.setBlock(h+m,d+p,f+g,x.DOOR);continue}i.setBlock(h+m,d+p,f+g,n)}for(let p=-o;p<=o;p++)for(let m=-o;m<=o;m++)i.setBlock(h+p,d+a,f+m,r);i.setBlock(h,d+2,f-o+1,x.TORCH),c&&i.setBlock(h-o+1,d,f-o+1,x.BED),l&&i.setBlock(h-o+1,d,f+o-1,x.CHEST)}function iv(i,e,t="small"){const n={small:{radius:4,height:4,wallBlock:x.STONE_BRICK,roofBlock:x.OAK_PLANKS},medium:{radius:6,height:5,wallBlock:x.STONE_BRICK,roofBlock:x.OAK_PLANKS},large:{radius:8,height:6,wallBlock:x.STONE_BRICK,roofBlock:x.PLANKS}},r=n[t]||n.small;fd(i,e,{wallBlock:r.wallBlock,roofBlock:r.roofBlock,floorBlock:x.STONE_BRICK,radius:r.radius,height:r.height,bed:!0,chest:!0});const s=Math.floor(e.x),o=Math.floor(e.y),a=Math.floor(e.z);i.setBlock(s+r.radius-1,o+2,a,x.TORCH),i.setBlock(s-r.radius+1,o+2,a,x.TORCH),i.setBlock(s,o+2,a+r.radius-1,x.TORCH),i.setBlock(s+r.radius-2,o,a-r.radius+1,x.WORKBENCH)}const bs=Object.freeze({WARD_LIGHT:"ward_light",HEAL_WOUND:"heal_wound",SENSE_CORRUPTION:"sense_corruption",ROOT_SNARE:"root_snare",STONE_WARD:"stone_ward",RUNE_MEND:"rune_mend",CALM_FEAR:"calm_fear"}),rv=15;class sv{constructor({id:e,name:t,ability:n,focusCost:r,description:s=""}){this.id=e,this.name=t,this.ability=n,this.focusCost=r,this.description=s,this.cooldown=0}canUse(e){return e>=this.focusCost&&this.cooldown<=0}}class ov{constructor(){this._equipped=null}equipRelic(e){this._equipped=e}getEquippedRelic(){return this._equipped}useRelic(e){if(!this._equipped||!this._equipped.canUse(e))return!1;const t={ability:this._equipped.ability,focusCost:this._equipped.focusCost};return this._equipped.cooldown=rv,t}tick(e){this._equipped&&this._equipped.cooldown>0&&(this._equipped.cooldown=Math.max(0,this._equipped.cooldown-e))}}const Rn=Object.freeze({NONE:"none",MINIMAL:"minimal",BASIC:"basic",GOOD:"good",EXCELLENT:"excellent"}),ml={[Rn.NONE]:{warmth:0,safety:0,recoveryMod:1},[Rn.MINIMAL]:{warmth:.2,safety:.2,recoveryMod:1.2},[Rn.BASIC]:{warmth:.4,safety:.4,recoveryMod:1.5},[Rn.GOOD]:{warmth:.7,safety:.7,recoveryMod:1.8},[Rn.EXCELLENT]:{warmth:1,safety:1,recoveryMod:2}},av=3,cv=8;class lv{evaluate(e,t){const n=Math.floor(t.x),r=Math.floor(t.y),s=Math.floor(t.z);let o=!1;for(let h=1;h<=cv;h++)if(yn(e.getBlock(n,r+h,s))){o=!0;break}if(!o)return{quality:Rn.NONE,...ml[Rn.NONE]};let a=0;const c=[[1,0],[-1,0],[0,1],[0,-1]];for(const[h,d]of c){let f=!1;for(let p=1;p<=av;p++)if(yn(e.getBlock(n+h*p,r,s+d*p))||yn(e.getBlock(n+h*p,r+1,s+d*p))){f=!0;break}f&&a++}let l;return a>=4?l=Rn.EXCELLENT:a>=3?l=Rn.GOOD:a>=2?l=Rn.BASIC:l=Rn.MINIMAL,{quality:l,...ml[l]}}}const _l=Object.freeze({HISTORY:"history",INSCRIPTION:"inscription",SONG:"song",MAP_NOTE:"map_note",RELIC_VISION:"relic_vision"});class pd{constructor({id:e,title:t,text:n,category:r}){this.id=e,this.title=t,this.text=n,this.category=r}}class dv{constructor(){this._entries=new Map}addEntry(e){return this._entries.has(e.id)?!1:(this._entries.set(e.id,e),!0)}hasEntry(e){return this._entries.has(e)}getEntries(){return Array.from(this._entries.values())}getByCategory(e){return this.getEntries().filter(t=>t.category===e)}serialize(){return this.getEntries().map(e=>({id:e.id,title:e.title,text:e.text,category:e.category}))}deserialize(e){for(const t of e)this.addEntry(new pd(t))}}class hv{constructor(){this._waypoints=new Map}unlockWaypoint(e){this._waypoints.has(e.id)||this._waypoints.set(e.id,{...e})}isUnlocked(e){return this._waypoints.has(e)}getWaypoints(){return Array.from(this._waypoints.values())}travel(e){const t=this._waypoints.get(e);return t?{...t.position}:null}serialize(){return this.getWaypoints()}deserialize(e){for(const t of e)this.unlockWaypoint(t)}}const mn=Object.freeze({CACHE:"cache",RUIN:"ruin",RELIC_FRAGMENT:"relic_fragment",ROADSTONE:"roadstone",RECIPE_TABLET:"recipe_tablet",LORE_BOOK:"lore_book",INSCRIPTION:"inscription"});class _n{constructor({id:e,type:t,position:n,reward:r=[]}){this.id=e,this.type=t,this.position={...n},this.reward=r,this.discovered=!1}discover(){return this.discovered?!1:(this.discovered=!0,!0)}}class uv{constructor(e){this._items=e}get(e){return this._items.find(t=>t.id===e)}findNearby(e,t){return this._items.filter(n=>!n.discovered&&un(e,n.position)<=t)}getDiscoveredCount(){return this._items.filter(e=>e.discovered).length}getTotalCount(){return this._items.length}}const fv=[new _n({id:"cache_shire_01",type:mn.CACHE,position:{x:15,y:33,z:10},reward:[{type:"bread",count:3}]}),new _n({id:"cache_bree_01",type:mn.CACHE,position:{x:85,y:33,z:18},reward:[{type:"iron_ore",count:5}]}),new _n({id:"cache_mountain_01",type:mn.CACHE,position:{x:260,y:40,z:45},reward:[{type:"copper_ore",count:8}]}),new _n({id:"lore_shire_01",type:mn.LORE_BOOK,position:{x:10,y:33,z:5},reward:[{type:"lore_fragment",count:1}]}),new _n({id:"lore_rivendell_01",type:mn.LORE_BOOK,position:{x:205,y:33,z:30},reward:[{type:"lore_fragment",count:2}]}),new _n({id:"relic_trollshaws_01",type:mn.RELIC_FRAGMENT,position:{x:145,y:33,z:38},reward:[{type:"relic_shard",count:1}]}),new _n({id:"relic_mirkwood_01",type:mn.RELIC_FRAGMENT,position:{x:410,y:33,z:45},reward:[{type:"relic_shard",count:2}]}),new _n({id:"roadstone_east_01",type:mn.ROADSTONE,position:{x:60,y:33,z:15},reward:[{type:"stone",count:3}]}),new _n({id:"roadstone_east_02",type:mn.ROADSTONE,position:{x:120,y:33,z:25},reward:[{type:"stone",count:3}]}),new _n({id:"inscription_dwarven_01",type:mn.INSCRIPTION,position:{x:280,y:42,z:50},reward:[{type:"lore_fragment",count:1}]}),new _n({id:"recipe_forge_01",type:mn.RECIPE_TABLET,position:{x:270,y:44,z:52},reward:[{type:"lore_fragment",count:1}]}),new _n({id:"cache_erebor_01",type:mn.CACHE,position:{x:515,y:40,z:20},reward:[{type:"iron_ore",count:10}]})];function pv(i,e){return i*(100/(100+e))}const Pr=Object.freeze({NONE:"none",POOR:"poor",DECENT:"decent",GOOD:"good",EXCELLENT:"excellent"});Pr.NONE+"",Pr.POOR+"",Pr.DECENT+"",Pr.GOOD+"",Pr.EXCELLENT+"";const hn=Object.freeze({HOSTILE:"hostile",UNFRIENDLY:"unfriendly",NEUTRAL:"neutral",FRIENDLY:"friendly",HONORED:"honored",EXALTED:"exalted"}),mv=[{min:-1/0,max:-50,tier:hn.HOSTILE},{min:-50,max:0,tier:hn.UNFRIENDLY},{min:0,max:25,tier:hn.NEUTRAL},{min:25,max:100,tier:hn.FRIENDLY},{min:100,max:250,tier:hn.HONORED},{min:250,max:1/0,tier:hn.EXALTED}],_v={[hn.HOSTILE]:1.5,[hn.UNFRIENDLY]:1.2,[hn.NEUTRAL]:1,[hn.FRIENDLY]:.9,[hn.HONORED]:.8,[hn.EXALTED]:.7};class sr{constructor({id:e,name:t,description:n}){this.id=e,this.name=t,this.description=n}}class gv{constructor(e){this.factions=e,this._reputation=new Map;for(const t of e)this._reputation.set(t.id,0)}getReputation(e){return this._reputation.get(e)||0}addReputation(e,t){const n=this._reputation.get(e)||0;this._reputation.set(e,n+t)}getTier(e){const t=this.getReputation(e);for(const n of mv)if(t>=n.min&&t<n.max)return n.tier;return hn.NEUTRAL}applyRaceModifiers(e,t){for(const[n,r]of Object.entries(t))this.addReputation(n,r)}getPriceModifier(e){return _v[this.getTier(e)]||1}getAllFactions(){return this.factions}serialize(){const e={};for(const[t,n]of this._reputation)e[t]=n;return{reputation:e}}deserialize(e){for(const[t,n]of Object.entries(e.reputation))this._reputation.set(t,n)}}const vv=[new sr({id:"road_wardens",name:"Road Wardens",description:"Frontier men who guard the old roads and trade routes between settlements."}),new sr({id:"rivendell_keepers",name:"Rivendell Keepers",description:"Remnant lorekeepers preserving ancient Elven knowledge in the hidden valley."}),new sr({id:"dwarven_crafters",name:"Dwarven Crafters",description:"Skilled dwarven smiths and miners maintaining craft enclaves near the old holds."}),new sr({id:"woodland_guardians",name:"Woodland Guardians",description:"Surviving elves and wardens who protect the forests from corruption and darkness."}),new sr({id:"beorning_wardens",name:"Beorning Wardens",description:"Wild wardens of the Anduin vale who guard the passes and shelter travelers."}),new sr({id:"goblin_horde",name:"Goblin Horde",description:"Hostile goblin and orc bands infesting the mountains and old ruins."})],md=[{id:"ruin_clearing",name:"Clear the Old Watchtower",description:"A ruined watchtower on the east road is infested with goblins. Clear them out to make the road safer.",objectives:[{id:"clear_goblins",description:"Defeat goblins at the watchtower",target:5}]},{id:"herb_hunt",name:"Athelas for the Healer",description:"A healer in the frontier settlement needs rare athelas herbs from the forest edge.",objectives:[{id:"gather_herbs",description:"Gather athelas plants",target:3}]},{id:"beast_hunt",name:"Wolf Pack Menace",description:"A pack of wolves has been attacking travelers near the old bridge. Thin their numbers.",objectives:[{id:"kill_wolves",description:"Defeat wolves near the bridge",target:4}]},{id:"crafting_commission",name:"Tools for the Settlement",description:"The frontier settlement needs stone tools. Craft and deliver pickaxes and axes.",objectives:[{id:"deliver_pickaxes",description:"Deliver stone pickaxes",target:2},{id:"deliver_axes",description:"Deliver stone axes",target:2}]},{id:"ore_prospecting",name:"Iron for the Forge",description:"The dwarven smiths need iron ore to repair their forge. Mine ore from the mountains.",objectives:[{id:"mine_iron",description:"Mine iron ore",target:10}]},{id:"ruin_clearing_2",name:"The Haunted Barrow",description:"An ancient barrow mound has awakened wights. Cleanse the site before corruption spreads.",objectives:[{id:"defeat_wights",description:"Defeat wights in the barrow",target:3}]},{id:"beast_hunt_spider",name:"Spider Nest in Mirkwood",description:"Giant spiders have woven webs across a forest path. Destroy them and clear the way.",objectives:[{id:"kill_spiders",description:"Defeat spiders",target:6}]},{id:"herb_hunt_mushroom",name:"Mushroom Gathering",description:"A cook needs rare mushrooms that grow near the river stones.",objectives:[{id:"gather_mushrooms",description:"Gather mushrooms",target:5}]},{id:"lore_fragments",name:"Lost Pages of the Archive",description:"Scattered lore fragments from an ancient library have been found in ruins across the region.",objectives:[{id:"collect_fragments",description:"Collect lore fragments",target:4}]},{id:"road_repair",name:"Mend the East Road",description:"Sections of the old east road have crumbled. Place stone blocks to repair the path.",objectives:[{id:"place_stones",description:"Place cobblestone on the road",target:20}]},{id:"troll_bounty",name:"The Bridge Troll",description:"A troll has claimed the old stone bridge. Defeat it to restore safe passage.",objectives:[{id:"defeat_troll",description:"Defeat the bridge troll",target:1}]},{id:"crafting_commission_armor",name:"Armor for the Wardens",description:"The road wardens need leather armor. Craft and deliver sets to their outpost.",objectives:[{id:"deliver_armor",description:"Deliver leather armor",target:3}]},{id:"herb_gathering_mirkwood",name:"Herbs of Mirkwood",description:"The Woodland Guardians need medicinal herbs that grow deep within the shadowed paths of Mirkwood.",factionId:"woodland_guardians",reward:{xp:120,items:[{id:"elven_salve",quantity:2}]},objectives:[{id:"gather_mirkwood_herbs",description:"Gather rare herbs in Mirkwood",target:8}]},{id:"goblin_camp_clear",name:"Goblin Camp Assault",description:"A goblin encampment has been established near the trade road. Destroy it before their numbers grow.",factionId:"road_wardens",reward:{xp:200,items:[{id:"iron_sword",quantity:1}]},objectives:[{id:"defeat_camp_goblins",description:"Defeat goblins in the camp",target:8},{id:"destroy_camp_tents",description:"Destroy goblin tents",target:3}]},{id:"dwarven_relic_hunt",name:"Relics of the Dwarven Halls",description:"Ancient relics from a collapsed dwarven hall are scattered across the mountain foothills. Recover them.",factionId:"dwarven_crafters",reward:{xp:180,items:[{id:"dwarven_ring",quantity:1}]},objectives:[{id:"recover_relics",description:"Recover dwarven relics",target:5}]},{id:"road_repair_bree",name:"Mend the Bree Road",description:"The road leading into Bree has deteriorated badly. Place stone and gravel to restore safe passage.",factionId:"road_wardens",reward:{xp:100,items:[{id:"stone_block",quantity:10}]},objectives:[{id:"place_gravel",description:"Place gravel on the road",target:15},{id:"place_cobblestone",description:"Place cobblestone markers",target:6}]},{id:"spider_nest_clear",name:"Purge the Spider Nest",description:"A massive spider nest threatens the southern forest paths. Burn the webs and slay the brood mother.",factionId:"woodland_guardians",reward:{xp:250,items:[{id:"spider_silk",quantity:5}]},objectives:[{id:"burn_webs",description:"Burn spider webs",target:6},{id:"defeat_brood_mother",description:"Defeat the brood mother",target:1}]},{id:"wolf_den_clear",name:"Clear the Wolf Den",description:"Wargs have established a den in the Anduin valley caves. The Beorning Wardens need help driving them out.",factionId:"beorning_wardens",reward:{xp:180,items:[{id:"wolf_pelt",quantity:3}]},objectives:[{id:"defeat_wargs",description:"Defeat wargs in the den",target:6}]},{id:"beacon_light_chain",name:"Light the Beacon Chain",description:"The old warning beacons along the road have gone dark. Climb to each summit and relight the fires.",factionId:"road_wardens",reward:{xp:160,items:[{id:"torch",quantity:5}]},objectives:[{id:"light_beacons",description:"Light beacon fires",target:4}]},{id:"lore_collection_rivendell",name:"Lost Lore of Rivendell",description:"Scattered scrolls of ancient Elven knowledge have been found in ruins. Return them to the Keepers.",factionId:"rivendell_keepers",reward:{xp:150,items:[{id:"lore_scroll",quantity:1}]},objectives:[{id:"collect_scrolls",description:"Collect Elven lore scrolls",target:6}]},{id:"smith_commission_iron",name:"Iron Commission for the Smiths",description:"The dwarven smiths need iron tools and fittings crafted to exact specifications.",factionId:"dwarven_crafters",reward:{xp:140,items:[{id:"dwarven_ingot",quantity:2}]},objectives:[{id:"craft_iron_tools",description:"Craft iron tools",target:4},{id:"deliver_fittings",description:"Deliver iron fittings",target:3}]},{id:"cook_feast_hobbit",name:"Feast Preparations",description:"A grand feast is being planned at the frontier settlement. Gather ingredients and prepare the dishes.",factionId:"road_wardens",reward:{xp:100,items:[{id:"feast_plate",quantity:1}]},objectives:[{id:"gather_ingredients",description:"Gather feast ingredients",target:10},{id:"prepare_dishes",description:"Prepare feast dishes",target:4}]},{id:"scout_mountain_pass",name:"Scout the Mountain Pass",description:"The Beorning Wardens need a scout to traverse the high mountain pass and report on enemy movements.",factionId:"beorning_wardens",reward:{xp:200,items:[{id:"climbing_rope",quantity:2}]},objectives:[{id:"reach_summit",description:"Reach the mountain summit",target:1},{id:"mark_enemy_camps",description:"Mark enemy encampments on the map",target:3}]},{id:"map_fragment_hunt",name:"The Cartographer's Request",description:"An Elven cartographer needs old map fragments to reconstruct a complete chart of the northern wilds.",factionId:"rivendell_keepers",reward:{xp:130,items:[{id:"region_map",quantity:1}]},objectives:[{id:"find_map_fragments",description:"Find map fragments in ruins",target:5}]},{id:"ruin_survey_trollshaws",name:"Survey the Trollshaws Ruins",description:"Ancient structures in the Trollshaws may hold clues about the old kingdom. Survey and document them.",factionId:"rivendell_keepers",reward:{xp:170,items:[{id:"survey_notes",quantity:1}]},objectives:[{id:"survey_ruins",description:"Survey ruin sites in the Trollshaws",target:4}]},{id:"mushroom_foraging",name:"Foraging in the Shire Woods",description:"Rare glowing mushrooms grow in the damp hollows of the Shire woods. The Guardians use them for remedies.",factionId:"woodland_guardians",reward:{xp:90,items:[{id:"glowing_mushroom",quantity:5}]},objectives:[{id:"forage_mushrooms",description:"Forage rare mushrooms",target:8}]},{id:"guard_duty_outpost",name:"Guard Duty at the Outpost",description:"The road wardens are short-staffed. Stand guard at the frontier outpost through the night and repel attackers.",factionId:"road_wardens",reward:{xp:220,items:[{id:"warden_badge",quantity:1}]},objectives:[{id:"survive_night",description:"Survive the night at the outpost",target:1},{id:"repel_attackers",description:"Repel attacking enemies",target:5}]}],or=Object.freeze({HAND:"hand",CAMPFIRE:"campfire",WORKBENCH:"workbench",FORGE:"forge",LOOM:"loom",KITCHEN:"kitchen",RUNE_TABLE:"rune_table"}),gn=Object.freeze({STONE:"stone",OIL_FLASK:"oil_flask",SMOKE_BOMB:"smoke_bomb",BAIT:"bait"});class As{constructor({type:e,damage:t,range:n,effect:r}){this.type=e,this.damage=t,this.range=n,this.effect=r}}const xv=2;function yv(){return new gv(vv)}function Ev(i){return i.map(e=>new $n({id:e.id,chapter:0,name:e.name,description:e.description,objectives:e.objectives,requires:[]}))}function Sv(){const i=Ev(md);return new W0([...X0,...i])}function Mv(i,e){const t=e.getTotalArmor();return pv(i,t)}function Tv(i){const e=i.get("main_hand");return e&&e.weapon?e.weapon.damage:xv}const bv={[x.WORKBENCH]:or.WORKBENCH,[x.FORGE]:or.FORGE,[x.CAMPFIRE]:or.CAMPFIRE,[x.KITCHEN]:or.KITCHEN,[x.LOOM]:or.LOOM,[x.RUNE_TABLE]:or.RUNE_TABLE};function Av(i,e){const t=Math.floor(e.x),n=Math.floor(e.y),r=Math.floor(e.z),s=3;for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++)for(let c=-s;c<=s;c++){const l=i.getBlock(t+o,n+a,r+c),h=bv[l];if(h)return h}return null}function Rv(i,e){return e?i.aggroRange*.5:i.aggroRange}gn.STONE+"",new As({type:gn.STONE,damage:5,range:12,effect:null}),gn.OIL_FLASK+"",new As({type:gn.OIL_FLASK,damage:15,range:10,effect:"fire"}),gn.SMOKE_BOMB+"",new As({type:gn.SMOKE_BOMB,damage:0,range:8,effect:"smoke"}),gn.BAIT+"",new As({type:gn.BAIT,damage:0,range:10,effect:"lure"});gn.STONE,gn.OIL_FLASK,gn.SMOKE_BOMB,gn.BAIT;const wv=5,Cv=8;class Iv{constructor(e){this.base=e,this._modifiers=new Map}addModifier(e,t){this._modifiers.set(e,t)}removeModifier(e){this._modifiers.delete(e)}getEffective(e=!1,t=!1){let n=this.base;for(const r of this._modifiers.values())n+=r;return e&&(n+=wv),t&&(n-=Cv),Math.max(0,n)}isHiddenFrom(e,t,n=!1,r=!1){const s=this.getEffective(n,r),o=Math.min(t/5,1);return s*o>e}}const Ov={wood:"🪵",stone:"🪨",fiber:"🌱",stick:"📏",clay:"🧱",iron_ore:"⛏",copper_ore:"⛏",coal:"⚫",leather:"🧴",rope:"🨢",relic_shard:"✨",lore_fragment:"📜",sand:"🏖",flint:"💎",pickaxe:"⛏",axe:"🪓",hammer:"🔨",iron_pickaxe:"⛏",copper_pickaxe:"⛏",stone_pickaxe:"⛏",stone_axe:"🪓",iron_axe:"🪓",lantern:"🏮",torch:"🔥",dagger:"🗡",iron_sword:"⚔",iron_hammer:"🔨",spear:"🔱",short_bow:"🏹",refined_bow:"🏹",sling:"💫",arrow:"➡",leather_armor:"🛡",iron_helm:"🪖",iron_chest:"🛡",shield:"🛡",cloak:"🧥",bread:"🍞",raw_meat:"🍖",cooked_meat:"🍗",berries:"🫐",mushroom:"🍄",lembas:"🍞",stew:"🍲",trail_rations:"🥪",fish:"🐟",apple:"🍎",honey:"🍯",ward_light_stone:"🌟",healing_crystal:"💎",ward_token:"🌟",bandage:"🩹",bedroll:"🛏",herb_pouch:"🌿",firestarter:"🔥",lore_scroll:"📜",map_fragment:"🗺",song_fragment:"🎶",dirt:"🟫",cobblestone:"⬜",planks:"🟨",oak_planks:"🟧",glass:"🔵",dark_stone:"⬛",marble:"⚪",thatch:"🟡",stone_brick:"🔲",chest:"🗄",workbench:"🛠",campfire:"🔥",forge:"⚒",kitchen:"🍳",loom:"🧵",gravel:"▫",raw_berries:"🫐",raw_mushroom:"🍄",herb_salad:"🥗",iron_ingot:"💠",copper_ingot:"🟠",raw_fish:"🐟",cooked_fish:"🐟",slate:"◽",birch_wood:"🪵"},Dv="📦";function Uo(i){return Ov[i]||Dv}function _d(i,e){return i.dialogueId?e.getStatus(i.dialogueId)===Yt.AVAILABLE:!1}function Lv(i,e){return _d(i,e)?e.activate(i.dialogueId):!1}const Pv=[{questId:"ch2_roads",objectiveId:"ch2_restore",position:{x:90,y:33,z:25},radius:15,type:"restore_site"},{questId:"ch2_roads",objectiveId:"ch2_meet_npc",position:{x:80,y:33,z:22},radius:10,type:"npc_proximity"},{questId:"ch2_roads",objectiveId:"ch2_corruption",position:{x:100,y:33,z:30},radius:20,type:"explore_area"},{questId:"ch3_records",objectiveId:"ch3_reach_rivendell",position:{x:200,y:33,z:30},radius:25,type:"reach_location"},{questId:"ch3_records",objectiveId:"ch3_learn_wards",position:{x:200,y:33,z:35},radius:10,type:"npc_proximity"},{questId:"ch3_records",objectiveId:"ch3_obtain_relic",position:{x:205,y:33,z:30},radius:8,type:"discoverable"},{questId:"ch4_mountains",objectiveId:"ch4_enter_delve",position:{x:270,y:50,z:50},radius:30,type:"reach_location"},{questId:"ch4_mountains",objectiveId:"ch4_stabilize",position:{x:270,y:45,z:55},radius:12,type:"restore_site"},{questId:"ch4_mountains",objectiveId:"ch4_defeat_boss",position:{x:265,y:50,z:45},radius:15,type:"kill_enemies"},{questId:"ch5_darkwood",objectiveId:"ch5_enter_mirkwood",position:{x:400,y:33,z:40},radius:30,type:"reach_location"},{questId:"ch5_darkwood",objectiveId:"ch5_clear_spiders",position:{x:400,y:33,z:45},radius:20,type:"kill_enemies"},{questId:"ch5_darkwood",objectiveId:"ch5_restore_beacon",position:{x:400,y:33,z:45},radius:12,type:"restore_site"},{questId:"ch6_forge",objectiveId:"ch6_reach_forge",position:{x:520,y:45,z:20},radius:25,type:"reach_location"},{questId:"ch6_forge",objectiveId:"ch6_unlock_crafting",position:{x:520,y:45,z:20},radius:12,type:"craft_at_station"},{questId:"ch6_forge",objectiveId:"ch6_discover_source",position:{x:515,y:45,z:25},radius:10,type:"discoverable"},{questId:"ch7_shadow",objectiveId:"ch7_assault",position:{x:420,y:33,z:90},radius:25,type:"reach_location"},{questId:"ch7_shadow",objectiveId:"ch7_disable_link",position:{x:420,y:33,z:90},radius:12,type:"restore_site"},{questId:"ch7_shadow",objectiveId:"ch7_defeat_champion",position:{x:425,y:33,z:95},radius:15,type:"kill_enemies"},{questId:"ch8_after",objectiveId:"ch8_celebrate",position:{x:30,y:33,z:30},radius:15,type:"reach_location"},{questId:"ch8_after",objectiveId:"ch8_explore",position:{x:0,y:33,z:0},radius:50,type:"explore_area"}];class Nv{constructor(){this._triggers=Pv.map(e=>({...e})),this._fired=new Set}getTriggers(){return this._triggers}checkTriggers(e){const t=[];for(const n of this._triggers){const r=`${n.questId}:${n.objectiveId}`;this._fired.has(r)||un(e,n.position)<=n.radius&&(t.push({questId:n.questId,objectiveId:n.objectiveId,type:n.type}),(n.type==="reach_location"||n.type==="explore_area")&&this._fired.add(r))}return t}}const Zn=Object.freeze({FRESH:"fresh",AGING:"aging",STALE:"stale",SPOILED:"spoiled"}),Uv={[Zn.FRESH]:1,[Zn.AGING]:.75,[Zn.STALE]:.4,[Zn.SPOILED]:.1};class kv{constructor(){this._items=new Map}addItem(e,t){this._items.set(e,{maxTime:t,remaining:t})}removeItem(e){this._items.delete(e)}tick(e){for(const[,t]of this._items)t.remaining=Math.max(0,t.remaining-e)}getTimeRemaining(e){const t=this._items.get(e);return t?t.remaining:1/0}getBand(e){const t=this._items.get(e);if(!t)return Zn.FRESH;const n=t.remaining/t.maxTime;return n>.5?Zn.FRESH:n>.25?Zn.AGING:n>0?Zn.STALE:Zn.SPOILED}getEffectivenessMultiplier(e){return Uv[this.getBand(e)]||1}}const Rs=Object.freeze({ELF:"elf",DWARF:"dwarf",HOBBIT:"hobbit",MAN:"man"}),Fv={[Rs.ELF]:{beauty:3,light:2},[Rs.DWARF]:{durability:3,temperature:2},[Rs.HOBBIT]:{comfort:3,food:2},[Rs.MAN]:{storage:3,defense:2}};function Bv(i){return Fv[i]||{}}function zv(i,e){return i==="elf"&&(e===ct.FOREST||e===ct.MIRKWOOD)?1.2:1}function Hv(i){return i==="dwarf"?.85:1}function Gv(i){return i==="hobbit"?3:0}const Vv={starter_watchpost:"Watch-Post",roadside_hall:"Ranger Hall",mountain_workshop:"Mountain Workshop",forest_beacon:"Forest Beacon",ward_bastion:"Ward Bastion"};function Wv(i){const e=Vv[i]||i;return{fastTravel:!0,merchant:{id:`${i}_merchant`,name:`${e} Merchant`,position:null,factionId:null,dialogue:{default:`Welcome to the restored ${e}. What would you like to trade?`}},message:"Site Restored! Benefits: fast travel, merchant, safe bed, storage.",roofBlock:x.OAK_PLANKS}}function Xv(i,e){return e?Math.ceil(i*1.5):i}function qv(i){return .2}function gl(i,e,t){return Math.max(e,Math.min(t,i))}const Kv=.5,Yv=3,$v=60,jv=110;class Zv{constructor(){this.sensitivity=1,this.fov=75,this.tutorialEnabled=!0,this.isOpen=!1}setSensitivity(e){this.sensitivity=gl(e,Kv,Yv)}setFov(e){this.fov=gl(e,$v,jv)}toggleTutorial(){this.tutorialEnabled=!this.tutorialEnabled}getMouseSensitivity(e){return e*this.sensitivity}toggleOpen(){this.isOpen=!this.isOpen}}const de=Object.freeze({RESOURCE:"resource",TOOL:"tool",WEAPON:"weapon",ARMOR:"armor",FOOD:"food",RELIC:"relic",CONSUMABLE:"consumable",LORE:"lore"});function he(i,e,t,n={}){return{id:i,name:e,category:t,...n}}he("wood","Wood",de.RESOURCE),he("stone","Stone",de.RESOURCE),he("fiber","Plant Fiber",de.RESOURCE),he("stick","Stick",de.RESOURCE),he("clay","Clay",de.RESOURCE),he("iron_ore","Iron Ore",de.RESOURCE),he("copper_ore","Copper Ore",de.RESOURCE),he("coal","Coal",de.RESOURCE),he("leather","Leather",de.RESOURCE),he("rope","Rope",de.RESOURCE),he("relic_shard","Relic Shard",de.RESOURCE),he("lore_fragment","Lore Fragment",de.RESOURCE),he("dark_stone","Dark Stone",de.RESOURCE),he("oak_planks","Oak Planks",de.RESOURCE),he("birch_wood","Birch Wood",de.RESOURCE),he("slate","Slate",de.RESOURCE),he("marble","Marble",de.RESOURCE),he("obsidian","Obsidian",de.RESOURCE),he("crystal","Crystal",de.RESOURCE),he("sand","Sand",de.RESOURCE),he("flint","Flint",de.RESOURCE),he("feather","Feather",de.RESOURCE),he("bone","Bone",de.RESOURCE),he("silver_ore","Silver Ore",de.RESOURCE),he("mithril_shard","Mithril Shard",de.RESOURCE),he("pickaxe","Pickaxe",de.TOOL,{durability:100,miningSpeed:2}),he("axe","Axe",de.TOOL,{durability:80,miningSpeed:1.5}),he("hammer","Hammer",de.TOOL,{durability:120}),he("copper_pickaxe","Copper Pickaxe",de.TOOL,{durability:150,miningSpeed:2.5}),he("iron_pickaxe","Iron Pickaxe",de.TOOL,{durability:250,miningSpeed:3.5}),he("lantern","Lantern",de.TOOL),he("torch","Torch",de.TOOL),he("repair_kit","Repair Kit",de.TOOL),he("dagger","Dagger",de.WEAPON,{damage:4}),he("iron_sword","Iron Sword",de.WEAPON,{damage:10}),he("iron_hammer","Iron Hammer",de.WEAPON,{damage:12}),he("spear","Spear",de.WEAPON,{damage:8}),he("short_bow","Short Bow",de.WEAPON,{damage:6,ranged:!0}),he("refined_bow","Refined Bow",de.WEAPON,{damage:9,ranged:!0}),he("sling","Sling",de.WEAPON,{damage:3,ranged:!0}),he("copper_sword","Copper Sword",de.WEAPON,{damage:7}),he("stone_axe","Stone Axe",de.WEAPON,{damage:5}),he("walking_stick","Walking Stick",de.WEAPON,{damage:2}),he("arrow","Arrow",de.WEAPON,{stackable:!0}),he("silver_blade","Silver Blade",de.WEAPON,{damage:14}),he("leather_armor","Leather Armor",de.ARMOR,{armor:5}),he("iron_helm","Iron Helm",de.ARMOR,{armor:3}),he("iron_chest","Iron Chestplate",de.ARMOR,{armor:8}),he("iron_legs","Iron Leggings",de.ARMOR,{armor:5}),he("iron_boots","Iron Boots",de.ARMOR,{armor:2}),he("cloak","Cloak",de.ARMOR,{armor:1}),he("shield","Shield",de.ARMOR,{armor:4}),he("dwarven_plate","Dwarven Plate",de.ARMOR,{armor:12}),he("bread","Bread",de.FOOD,{hunger:15}),he("raw_meat","Raw Meat",de.FOOD,{hunger:5}),he("cooked_meat","Cooked Meat",de.FOOD,{hunger:20}),he("berries","Berries",de.FOOD,{hunger:5}),he("mushroom","Mushroom",de.FOOD,{hunger:8}),he("lembas","Lembas Bread",de.FOOD,{hunger:30}),he("stew","Hearty Stew",de.FOOD,{hunger:25,buff:"stamina_regen"}),he("trail_rations","Trail Rations",de.FOOD,{hunger:12}),he("dried_meat","Dried Meat",de.FOOD,{hunger:10,preserved:!0}),he("honey","Honey",de.FOOD,{hunger:8,buff:"health_regen"}),he("fish","Fish",de.FOOD,{hunger:12}),he("apple","Apple",de.FOOD,{hunger:7}),he("ward_light_stone","Ward Light Stone",de.RELIC),he("healing_crystal","Healing Crystal",de.RELIC),he("corruption_lens","Corruption Lens",de.RELIC),he("root_charm","Root Charm",de.RELIC),he("stone_ward_rune","Stone Ward Rune",de.RELIC),he("ward_token","Ward Token",de.RELIC),he("bandage","Bandage",de.CONSUMABLE),he("antidote","Antidote",de.CONSUMABLE),he("firestarter","Firestarter",de.CONSUMABLE),he("bedroll","Bedroll",de.CONSUMABLE),he("pan","Cooking Pan",de.CONSUMABLE),he("herb_pouch","Herb Pouch",de.CONSUMABLE),he("satchel","Satchel",de.CONSUMABLE),he("lock_tools","Lock Tools",de.CONSUMABLE),he("lore_scroll","Ancient Scroll",de.LORE),he("map_fragment","Map Fragment",de.LORE),he("song_fragment","Song Fragment",de.LORE),he("rune_tablet","Rune Tablet",de.LORE),he("inscription_rubbing","Inscription Rubbing",de.LORE);$t.MAIN_HAND,$t.HEAD,$t.CHEST,$t.LEGS,$t.FEET,$t.OFF_HAND,$t.ACCESSORY;$t.MAIN_HAND+"",$t.HEAD+"",$t.CHEST+"",$t.LEGS+"",$t.FEET+"",$t.OFF_HAND+"",$t.ACCESSORY+"";class Qv{isDead(e){return e.health<=0}respawn(e,t,n){e.health=e.maxHealth*.5,e.hunger=Math.max(e.hunger,50),e.stamina=100,t.position.x=n.x,t.position.y=n.y,t.position.z=n.z}}class Jv{constructor(){this.enabled=!1,this.flySpeed=mr.CREATIVE.FLY_SPEED}toggle(){this.enabled=!this.enabled}isInvincible(){return this.enabled}canFly(){return this.enabled}noHunger(){return this.enabled}}class ex{constructor(){this._message="",this._choices=[],this._active=!1,this._state="inactive",this.selectedIndex=0,this._response=null}getState(){return this._state}isActive(){return this._active}getMessage(){return this._response||this._message}getChoices(){return this._state==="choices"?this._choices:[]}startDialogue(e,t=[]){this._message=e,this._choices=t,this._active=!0,this._state="choices",this._response=null,this.selectedIndex=0}selectChoice(e){if(this._state!=="choices"||e<0||e>=this._choices.length)return null;const t=this._choices[e];return t.response===null?(this._active=!1,this._state="inactive",null):(this._response=t.response,this._state="response",t.response)}acknowledge(){this._state==="response"&&(this._response=null,this._state="choices",this.selectedIndex=0)}selectNext(){this._state==="choices"&&this._choices.length>0&&(this.selectedIndex=Math.min(this.selectedIndex+1,this._choices.length-1))}selectPrev(){this._state==="choices"&&(this.selectedIndex=Math.max(0,this.selectedIndex-1))}dismiss(){this._active=!1,this._state="inactive",this._message="",this._choices=[],this._response=null}}const ks=Object.freeze({STORY:"story",STANDARD:"standard",HARSH:"harsh"}),vl={[ks.STORY]:{hungerDrainMultiplier:.5,enemyDamageMultiplier:.6,corruptionMultiplier:.5,resourceMultiplier:1.5},[ks.STANDARD]:{hungerDrainMultiplier:1,enemyDamageMultiplier:1,corruptionMultiplier:1,resourceMultiplier:1},[ks.HARSH]:{hungerDrainMultiplier:1.5,enemyDamageMultiplier:1.4,corruptionMultiplier:1.5,resourceMultiplier:.7}};function tx(i){return vl[i]||vl[ks.STANDARD]}function nx(i,e){return i*(e.hungerDrainMultiplier??1)}function ix(i,e){return i*(e.enemyDamageMultiplier??1)}const rx={man:{road_wardens:15},elf:{rivendell_keepers:20,woodland_guardians:15},dwarf:{dwarven_crafters:25},hobbit:{road_wardens:15,beorning_wardens:10}};function sx(i){return rx[i]||{}}const ox={man_ranger:["surv_forager"],man_soldier:["cmb_parry"],man_scholar:["att_focus","exp_map_reveal"],elf_archer:["cmb_quick_draw"],elf_warden:["att_ward","cmb_parry"],elf_gatherer:["surv_forager","crf_yield"],dwarf_miner:["crf_yield"],dwarf_blacksmith:["crf_repair","cmb_heavy_blow"],dwarf_delver:["exp_climb","exp_map_reveal"],hobbit_burglar:["surv_hardy"],hobbit_cook:["surv_hardy","fel_trader"],hobbit_forager:["surv_forager","surv_hardy"]};function ax(i,e){const t=`${i}_${e}`;return ox[t]||[]}function cx(i,e){if(!e||e.length===0)return[];const t=new Set(e),n=i.getTriggers(),r=[];for(const s of n)t.has(s.questId)&&r.push({questId:s.questId,objectiveId:s.objectiveId,x:s.position.x,z:s.position.z,label:s.objectiveId.replace(/_/g," ")});return r}const lx={man_ranger:{type:"tracking",value:1.5,description:"Easier tracking of beasts"},man_soldier:{type:"block_stability",value:1.3,description:"Improved block stability"},man_scholar:{type:"relic_identify",value:2,description:"Identifies relics faster"},elf_archer:{type:"ranged_accuracy",value:1.3,description:"Reduced bow sway"},elf_warden:{type:"beacon_resistance",value:1.5,description:"Stronger near allied beacons"},elf_gatherer:{type:"plant_yield",value:1.5,description:"Better yield from plants"},dwarf_miner:{type:"mining_speed",value:1.4,description:"Faster ore/stone extraction"},dwarf_blacksmith:{type:"tool_durability",value:1.3,description:"Gear wears slower"},dwarf_delver:{type:"underground_stealth",value:1.5,description:"Reduced detection underground"},hobbit_burglar:{type:"crouch_stealth",value:1.5,description:"Less detection while crouched"},hobbit_cook:{type:"meal_duration",value:1.5,description:"Meals give longer buffs"},hobbit_forager:{type:"forage_yield",value:1.4,description:"Better berry/mushroom yields"}};function dx(i){return lx[i]||null}const ko={zone:{r:.35,g:.55,b:.17}};function hx(i){const e=Math.min(1,i);return{r:.53*(1-e)+ko.zone.r*e,g:.81*(1-e)+ko.zone.g*e,b:.92*(1-e)+ko.zone.b*e}}const ux={[x.DIRT]:.4,[x.GRASS]:.4,[x.SAND]:.4,[x.CLAY]:.5,[x.GRAVEL]:.4,[x.TALL_GRASS]:.1,[x.LEAVES]:.2,[x.MUD]:.4,[x.SNOW]:.3,[x.THATCH]:.3,[x.REED]:.1,[x.WOOD]:.8,[x.BIRCH_WOOD]:.8,[x.PLANKS]:.6,[x.OAK_PLANKS]:.6,[x.STONE]:1.5,[x.COBBLESTONE]:1.2,[x.STONE_BRICK]:1.3,[x.IRON_ORE]:2,[x.COPPER_ORE]:1.8,[x.COAL_ORE]:1.5,[x.GLASS]:.3,[x.TORCH]:.1,[x.CAMPFIRE]:.5,[x.WORKBENCH]:.8,[x.FORGE]:2,[x.KITCHEN]:.6,[x.LOOM]:.5,[x.RUNE_TABLE]:1.5},fx=1;class px{constructor(){this._x=0,this._y=0,this._z=0,this._blockType=0,this._progress=0,this._breakTime=0,this._active=!1}isBreaking(){return this._active}getProgress(){return this._progress}getPosition(){return{x:this._x,y:this._y,z:this._z}}startBreak(e,t,n,r){this._active&&this._x===e&&this._y===t&&this._z===n||(this._x=e,this._y=t,this._z=n,this._blockType=r,this._breakTime=ux[r]||fx,this._progress=0,this._active=!0)}tick(e){return this._active?(this._progress+=e/this._breakTime,this._progress>=1?(this._active=!1,this._progress=0,!0):!1):!1}cancel(){this._active=!1,this._progress=0}}function mx(i){return i===x.DOOR||i===x.DOOR_OPEN}function xl(i,e,t,n){const r=i.getBlock(e,t,n);return r===x.DOOR?(i.setBlock(e,t,n,x.DOOR_OPEN),i.getBlock(e,t+1,n)===x.DOOR&&i.setBlock(e,t+1,n,x.DOOR_OPEN),i.getBlock(e,t-1,n)===x.DOOR&&i.setBlock(e,t-1,n,x.DOOR_OPEN),!0):r===x.DOOR_OPEN?(i.setBlock(e,t,n,x.DOOR),i.getBlock(e,t+1,n)===x.DOOR_OPEN&&i.setBlock(e,t+1,n,x.DOOR),i.getBlock(e,t-1,n)===x.DOOR_OPEN&&i.setBlock(e,t-1,n,x.DOOR),!0):!1}class _x{constructor(){this._chests=new Map}_key(e,t,n){return`${e},${t},${n}`}_getOrCreate(e,t,n){const r=this._key(e,t,n);return this._chests.has(r)||this._chests.set(r,[]),this._chests.get(r)}addItem(e,t,n,r,s){const o=this._getOrCreate(e,t,n),a=o.find(c=>c.type===r);a?a.count+=s:o.push({type:r,count:s})}getItems(e,t,n){const r=this._key(e,t,n);return this._chests.get(r)||[]}takeItem(e,t,n,r){const s=this._key(e,t,n),o=this._chests.get(s);if(!o)return null;const a=o.findIndex(l=>l.type===r);return a===-1?null:o.splice(a,1)[0]}}const dt=x.OAK_PLANKS,ln=x.PLANKS,ft=x.COBBLESTONE,et=x.STONE_BRICK,Qt=x.MARBLE,ar=x.BIRCH_WOOD,hi=x.SLATE,Ci=x.THATCH,Ia=x.IRON_BLOCK,Di=x.STONE,Fo=x.LEAVES,yl=[{name:"Bag End",region:"shire",x:-5,z:-8,wallBlock:dt,roofBlock:ln,floorBlock:ft,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"wood",count:10},{type:"torch",count:5},{type:"raw_berries",count:3}]},{name:"Ranger Hal's Lodge",region:"shire",x:4,z:6,wallBlock:dt,roofBlock:ln,floorBlock:ft,radius:4,height:4,bed:!0,chest:!0,npcId:"ranger_hal",chestItems:[{type:"leather",count:2},{type:"iron_ore",count:2}]},{name:"Hamfast's Farmhouse",region:"shire",x:-21,z:10,wallBlock:dt,roofBlock:Ci,floorBlock:ft,radius:4,height:3,bed:!0,chest:!0,npcId:"shire_farmer",chestItems:[{type:"fiber",count:5},{type:"wood",count:3}]},{name:"Rosie's Shop",region:"shire",x:14,z:-7,wallBlock:dt,roofBlock:ln,floorBlock:ft,radius:4,height:4,bed:!0,chest:!0,npcId:"shire_merchant",chestItems:[{type:"stone",count:5},{type:"leather",count:3},{type:"torch",count:3}]},{name:"Green Dragon Inn",region:"shire",x:25,z:15,wallBlock:dt,roofBlock:ln,floorBlock:ft,radius:5,height:5,bed:!0,chest:!0,chestItems:[{type:"cooked_meat",count:3},{type:"torch",count:4}]},{name:"Hobbit Hole – Cottons",region:"shire",x:-30,z:-15,wallBlock:dt,roofBlock:Ci,floorBlock:ft,radius:3,height:3,bed:!0,chest:!1},{name:"Hobbit Hole – Bracegirdle",region:"shire",x:-10,z:25,wallBlock:dt,roofBlock:Ci,floorBlock:ft,radius:3,height:3,bed:!0,chest:!1},{name:"Hobbit Hole – Proudfoot",region:"shire",x:35,z:-15,wallBlock:dt,roofBlock:Ci,floorBlock:ft,radius:3,height:3,bed:!0,chest:!1},{name:"The Prancing Pony",region:"bree",x:79,z:20,wallBlock:ft,roofBlock:ln,floorBlock:et,radius:6,height:5,bed:!0,chest:!0,npcId:"old_tom",chestItems:[{type:"iron_ore",count:2},{type:"wood",count:5},{type:"cooked_meat",count:2}]},{name:"Bree Blacksmith",region:"bree",x:66,z:10,wallBlock:ft,roofBlock:hi,floorBlock:et,radius:4,height:4,bed:!0,chest:!0,npcId:"bree_blacksmith",chestItems:[{type:"iron_ore",count:4},{type:"stone",count:5}]},{name:"Bree House – South",region:"bree",x:90,z:12,wallBlock:ft,roofBlock:ln,floorBlock:ft,radius:3,height:3,bed:!0,chest:!1},{name:"Bree House – North",region:"bree",x:72,z:34,wallBlock:ft,roofBlock:ln,floorBlock:ft,radius:3,height:3,bed:!0,chest:!1},{name:"Bree Gatehouse",region:"bree",x:65,z:20,wallBlock:et,roofBlock:hi,floorBlock:et,radius:3,height:5,bed:!1,chest:!1},{name:"Bree Storehouse",region:"bree",x:92,z:26,wallBlock:ft,roofBlock:ln,floorBlock:ft,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"wood",count:10},{type:"stone",count:8},{type:"fiber",count:6}]},{name:"Ranger Outpost",region:"trollshaws",x:130,z:35,wallBlock:ft,roofBlock:ln,floorBlock:ft,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:5},{type:"bandage",count:2}]},{name:"Hermit Cabin",region:"trollshaws",x:150,z:45,wallBlock:dt,roofBlock:Ci,floorBlock:ft,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:6},{type:"raw_berries",count:4}]},{name:"House of Elrond",region:"rivendell",x:194,z:33,wallBlock:Qt,roofBlock:ar,floorBlock:Qt,radius:6,height:5,bed:!0,chest:!0,npcId:"elara_lorekeeper",chestItems:[{type:"lore_fragment",count:2},{type:"relic_shard",count:1}]},{name:"Celebrin's Healing Hall",region:"rivendell",x:208,z:18,wallBlock:Qt,roofBlock:ar,floorBlock:Qt,radius:4,height:4,bed:!0,chest:!0,npcId:"rivendell_healer",chestItems:[{type:"fiber",count:4},{type:"raw_berries",count:5},{type:"bandage",count:3}]},{name:"Rivendell Library",region:"rivendell",x:210,z:38,wallBlock:Qt,roofBlock:ar,floorBlock:et,radius:5,height:5,bed:!1,chest:!0,chestItems:[{type:"lore_fragment",count:3}]},{name:"Rivendell Guest House",region:"rivendell",x:190,z:22,wallBlock:Qt,roofBlock:ar,floorBlock:Qt,radius:3,height:4,bed:!0,chest:!1},{name:"Rivendell Watchtower",region:"rivendell",x:220,z:30,wallBlock:Qt,roofBlock:et,floorBlock:Qt,radius:3,height:6,bed:!1,chest:!1},{name:"Thorin's Forge",region:"misty_mountains",x:269,z:53,wallBlock:et,roofBlock:hi,floorBlock:et,radius:5,height:4,bed:!0,chest:!0,npcId:"thorin_smith",chestItems:[{type:"iron_ore",count:5},{type:"copper_ore",count:3}]},{name:"Dwalin's Trading Post",region:"misty_mountains",x:254,z:43,wallBlock:et,roofBlock:hi,floorBlock:et,radius:4,height:4,bed:!0,chest:!0,npcId:"mountain_trader",chestItems:[{type:"stone",count:8},{type:"wood",count:6}]},{name:"Mountain Shelter",region:"misty_mountains",x:280,z:60,wallBlock:Di,roofBlock:hi,floorBlock:et,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:8},{type:"bandage",count:2}]},{name:"Dwarven Mining Camp",region:"misty_mountains",x:258,z:65,wallBlock:et,roofBlock:hi,floorBlock:ft,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:3},{type:"coal",count:5},{type:"stone",count:10}]},{name:"Beorn's Hall",region:"anduin_vale",x:334,z:63,wallBlock:dt,roofBlock:Ci,floorBlock:ft,radius:6,height:5,bed:!0,chest:!0,npcId:"beorn_jr",chestItems:[{type:"raw_meat",count:5},{type:"leather",count:3}]},{name:"Vale Farmstead",region:"anduin_vale",x:350,z:55,wallBlock:dt,roofBlock:Ci,floorBlock:ft,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:8},{type:"raw_berries",count:4}]},{name:"Carrock Watchtower",region:"anduin_vale",x:345,z:72,wallBlock:et,roofBlock:hi,floorBlock:et,radius:3,height:6,bed:!1,chest:!1},{name:"Elvenking Gate Post",region:"mirkwood",x:389,z:38,wallBlock:ar,roofBlock:Fo,floorBlock:ft,radius:5,height:5,bed:!0,chest:!0,npcId:"galawen_warden",chestItems:[{type:"fiber",count:8},{type:"relic_shard",count:1},{type:"rope",count:2}]},{name:"Mirkwood Ranger Camp",region:"mirkwood",x:405,z:48,wallBlock:ar,roofBlock:Fo,floorBlock:ft,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"torch",count:6},{type:"bandage",count:3}]},{name:"Forest Watch Platform",region:"mirkwood",x:415,z:32,wallBlock:dt,roofBlock:Fo,floorBlock:dt,radius:3,height:6,bed:!1,chest:!1},{name:"Dark Outpost",region:"dol_guldur",x:418,z:85,wallBlock:x.DARK_STONE,roofBlock:x.OBSIDIAN,floorBlock:x.CORRUPTED_STONE,radius:4,height:4,bed:!1,chest:!0,chestItems:[{type:"dark_stone",count:5},{type:"relic_shard",count:2}]},{name:"Lake-town Hall",region:"long_lake",x:465,z:28,wallBlock:dt,roofBlock:ln,floorBlock:ft,radius:5,height:4,bed:!0,chest:!0,chestItems:[{type:"wood",count:10},{type:"iron_ore",count:3}]},{name:"Fisherman's Hut",region:"long_lake",x:478,z:22,wallBlock:dt,roofBlock:ln,floorBlock:dt,radius:3,height:3,bed:!0,chest:!0,chestItems:[{type:"fiber",count:4},{type:"raw_meat",count:3}]},{name:"Dock Warehouse",region:"long_lake",x:478,z:38,wallBlock:dt,roofBlock:ln,floorBlock:ft,radius:4,height:3,bed:!1,chest:!0,chestItems:[{type:"rope",count:3},{type:"wood",count:8},{type:"iron_ore",count:2}]},{name:"Front Gate Guardhouse",region:"erebor",x:514,z:18,wallBlock:et,roofBlock:Ia,floorBlock:et,radius:4,height:5,bed:!0,chest:!0,chestItems:[{type:"iron_ore",count:5},{type:"torch",count:6}]},{name:"Miriel's Observatory",region:"erebor",x:494,z:26,wallBlock:et,roofBlock:hi,floorBlock:Qt,radius:5,height:5,bed:!0,chest:!0,npcId:"sage_miriel",chestItems:[{type:"relic_shard",count:3},{type:"lore_fragment",count:2}]},{name:"Dale Marketplace",region:"erebor",x:525,z:28,wallBlock:et,roofBlock:ln,floorBlock:et,radius:5,height:4,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:4},{type:"leather",count:3},{type:"stone",count:6}]},{name:"Erebor Great Forge",region:"erebor",x:530,z:14,wallBlock:et,roofBlock:Ia,floorBlock:et,radius:5,height:5,bed:!1,chest:!0,chestItems:[{type:"iron_ore",count:8},{type:"copper_ore",count:5},{type:"coal",count:10}]}],gx=[{type:"line",x1:-35,z1:-20,x2:-35,z2:30,block:dt,dy:1,name:"Shire west fence"},{type:"line",x1:-35,z1:-20,x2:40,z2:-20,block:dt,dy:1,name:"Shire south fence"},{type:"line",x1:40,z1:-20,x2:40,z2:30,block:dt,dy:1,name:"Shire east fence"},{type:"line",x1:-35,z1:30,x2:40,z2:30,block:dt,dy:1,name:"Shire north fence"},{type:"line",x1:-30,z1:0,x2:40,z2:0,block:ft,dy:0,surface:!0,name:"Shire main road"},{type:"line",x1:0,z1:-18,x2:0,z2:28,block:ft,dy:0,surface:!0,name:"Shire cross road"},{type:"well",x:5,z:0,name:"Shire well"},{type:"line",x1:60,z1:8,x2:60,z2:35,block:et,dy:1,name:"Bree west wall"},{type:"line",x1:60,z1:8,x2:60,z2:35,block:et,dy:2,name:"Bree west wall top"},{type:"line",x1:95,z1:8,x2:95,z2:35,block:et,dy:1,name:"Bree east wall"},{type:"line",x1:95,z1:8,x2:95,z2:35,block:et,dy:2,name:"Bree east wall top"},{type:"line",x1:60,z1:20,x2:95,z2:20,block:ft,dy:0,surface:!0,name:"Bree main street"},{type:"well",x:80,z:20,name:"Bree well"},{type:"blocks",x:145,z:42,name:"Stone Trolls",blocks:[{dx:0,dz:0,dy:1,block:Di},{dx:0,dz:0,dy:2,block:Di},{dx:0,dz:0,dy:3,block:x.MOSSY_STONE},{dx:3,dz:1,dy:1,block:Di},{dx:3,dz:1,dy:2,block:Di},{dx:3,dz:1,dy:3,block:x.MOSSY_STONE},{dx:1,dz:3,dy:1,block:Di},{dx:1,dz:3,dy:2,block:Di},{dx:1,dz:3,dy:3,block:x.MOSSY_STONE}]},{type:"line",x1:185,z1:28,x2:195,z2:28,block:Qt,dy:1,name:"Rivendell bridge"},{type:"line",x1:185,z1:28,x2:195,z2:28,block:Qt,dy:0,surface:!0,name:"Rivendell bridge deck"},{type:"line",x1:190,z1:25,x2:215,z2:25,block:Qt,dy:0,surface:!0,name:"Rivendell garden path"},{type:"line",x1:200,z1:20,x2:200,z2:40,block:Qt,dy:0,surface:!0,name:"Rivendell main path"},{type:"blocks",x:265,z:48,name:"Mountain trail markers",blocks:[{dx:0,dz:0,dy:1,block:et},{dx:0,dz:0,dy:2,block:x.TORCH},{dx:15,dz:5,dy:1,block:et},{dx:15,dz:5,dy:2,block:x.TORCH},{dx:30,dz:10,dy:1,block:et},{dx:30,dz:10,dy:2,block:x.TORCH}]},{type:"line",x1:345,z1:50,x2:360,z2:50,block:dt,dy:1,name:"Vale south fence"},{type:"line",x1:345,z1:50,x2:345,z2:60,block:dt,dy:1,name:"Vale west fence"},{type:"line",x1:360,z1:50,x2:360,z2:60,block:dt,dy:1,name:"Vale east fence"},{type:"line",x1:345,z1:60,x2:360,z2:60,block:dt,dy:1,name:"Vale north fence"},{type:"blocks",x:385,z:40,name:"Mirkwood path torches",blocks:[{dx:0,dz:0,dy:1,block:dt},{dx:0,dz:0,dy:2,block:x.TORCH},{dx:8,dz:2,dy:1,block:dt},{dx:8,dz:2,dy:2,block:x.TORCH},{dx:16,dz:4,dy:1,block:dt},{dx:16,dz:4,dy:2,block:x.TORCH},{dx:24,dz:0,dy:1,block:dt},{dx:24,dz:0,dy:2,block:x.TORCH},{dx:32,dz:-2,dy:1,block:dt},{dx:32,dz:-2,dy:2,block:x.TORCH}]},{type:"blocks",x:420,z:90,name:"Dol Guldur corrupted stones",blocks:[{dx:-5,dz:0,dy:1,block:x.CORRUPTED_STONE},{dx:5,dz:0,dy:1,block:x.CORRUPTED_STONE},{dx:0,dz:-5,dy:1,block:x.CORRUPTED_STONE},{dx:0,dz:5,dy:1,block:x.CORRUPTED_STONE},{dx:-4,dz:-3,dy:1,block:x.DARK_STONE},{dx:4,dz:-3,dy:1,block:x.DARK_STONE},{dx:-4,dz:3,dy:1,block:x.DARK_STONE},{dx:4,dz:3,dy:1,block:x.DARK_STONE}]},{type:"blocks",x:472,z:20,name:"Lake-town dock",blocks:(()=>{const i=[];for(let e=0;e<8;e++)for(let t=0;t<3;t++)i.push({dx:e,dz:t,dy:0,block:dt,surface:!0});return i.push({dx:0,dz:1,dy:-1,block:dt}),i.push({dx:7,dz:1,dy:-1,block:dt}),i})()},{type:"blocks",x:518,z:15,name:"Erebor front gate",blocks:[{dx:0,dz:0,dy:1,block:et},{dx:0,dz:0,dy:2,block:et},{dx:0,dz:0,dy:3,block:et},{dx:0,dz:0,dy:4,block:et},{dx:0,dz:4,dy:1,block:et},{dx:0,dz:4,dy:2,block:et},{dx:0,dz:4,dy:3,block:et},{dx:0,dz:4,dy:4,block:et},{dx:0,dz:1,dy:4,block:et},{dx:0,dz:2,dy:4,block:Ia},{dx:0,dz:3,dy:4,block:et},{dx:1,dz:0,dy:3,block:x.TORCH},{dx:1,dz:4,dy:3,block:x.TORCH}]},{type:"line",x1:40,z1:0,x2:60,z2:8,block:ft,dy:0,surface:!0,name:"East Road – Shire to Bree"},{type:"line",x1:95,z1:20,x2:130,z2:35,block:ft,dy:0,surface:!0,name:"East Road – Bree to Trollshaws"},{type:"line",x1:155,z1:42,x2:185,z2:32,block:ft,dy:0,surface:!0,name:"East Road – Trollshaws to Rivendell"}],vx=[{name:"Party Tree",x:0,z:12,type:"large"},{name:"Old Willow",x:-40,z:5,type:"large"},{name:"Rivendell Cedar",x:208,z:35,type:"large"},{name:"Beorn Oak",x:338,z:70,type:"large"},{name:"Mirkwood Ancient",x:395,z:35,type:"large"}],El=[{x:0,z:-3,block:x.WORKBENCH,dy:1,name:"Shire workbench"},{x:2,z:-3,block:x.CAMPFIRE,dy:1,name:"Shire campfire"},{x:75,z:18,block:x.FORGE,dy:1,name:"Bree forge"},{x:83,z:18,block:x.KITCHEN,dy:1,name:"Bree kitchen"},{x:205,z:30,block:x.LOOM,dy:1,name:"Rivendell loom"},{x:198,z:30,block:x.RUNE_TABLE,dy:1,name:"Rivendell rune table"},{x:275,z:55,block:x.FORGE,dy:1,name:"Mountain forge"},{x:268,z:58,block:x.WORKBENCH,dy:1,name:"Mountain workbench"},{x:340,z:58,block:x.KITCHEN,dy:1,name:"Vale kitchen"},{x:342,z:58,block:x.CAMPFIRE,dy:1,name:"Vale campfire"},{x:392,z:42,block:x.WORKBENCH,dy:1,name:"Mirkwood workbench"},{x:394,z:42,block:x.LOOM,dy:1,name:"Mirkwood loom"},{x:528,z:16,block:x.FORGE,dy:1,name:"Erebor forge"},{x:526,z:16,block:x.WORKBENCH,dy:1,name:"Erebor workbench"}];function xx(i){return i<=26?[40,80,160]:i<=32?[80,150,60]:i<=40?[130,170,70]:i<=55?[160,150,120]:[220,220,230]}class yx{constructor(e,t,n){this._getHeight=e,this._getBiome=t,this._seed=n}worldToGrid(e,t,n){return{col:Math.floor((e-Ns)/n),row:Math.floor((t-Us)/n)}}gridToWorld(e,t,n){return{x:Ns+e*n+n/2,z:Us+t*n+n/2}}_gridDimensions(e){const t=Math.ceil((hg-Ns)/e),n=Math.ceil((ug-Us)/e);return{width:t,height:n}}getTerrainHeightGrid(e){const{width:t,height:n}=this._gridDimensions(e),r=new Int32Array(t*n);for(let s=0;s<n;s++)for(let o=0;o<t;o++){const{x:a,z:c}=this.gridToWorld(o,s,e);r[s*t+o]=this._getHeight(a,c,this._seed)}return{width:t,height:n,data:r}}getBiomeGrid(e){const{width:t,height:n}=this._gridDimensions(e),r=new Array(t*n);for(let s=0;s<n;s++)for(let o=0;o<t;o++){const{x:a,z:c}=this.gridToWorld(o,s,e);r[s*t+o]=this._getBiome(a,c,this._seed).type}return{width:t,height:n,data:r}}getPopulationGrid(e,t,n){const{width:r,height:s}=this._gridDimensions(n),o=new Int32Array(r*s);for(const a of e){const{col:c,row:l}=this.worldToGrid(a.x,a.z,n);c>=0&&c<r&&l>=0&&l<s&&(o[l*r+c]+=1)}for(const a of t){const{col:c,row:l}=this.worldToGrid(a.position.x,a.position.z,n);c>=0&&c<r&&l>=0&&l<s&&(o[l*r+c]+=1)}return{width:r,height:s,data:o}}getSlopeGrid(e){const t=this.getTerrainHeightGrid(e),{width:n,height:r,data:s}=t,o=new Float32Array(n*r);for(let a=0;a<r;a++)for(let c=0;c<n;c++){const l=a*n+c,h=s[l];let d=0;for(const[f,p]of[[-1,0],[1,0],[0,-1],[0,1]]){const m=a+f,g=c+p;m>=0&&m<r&&g>=0&&g<n&&(d=Math.max(d,Math.abs(s[m*n+g]-h)))}o[l]=d/e}return{width:n,height:r,data:o}}getTerrainColorMap(e){const t=this.getTerrainHeightGrid(e),{width:n,height:r,data:s}=t,o=new Uint8Array(n*r*3);for(let a=0;a<s.length;a++){const[c,l,h]=xx(s[a]);o[a*3]=c,o[a*3+1]=l,o[a*3+2]=h}return{width:n,height:r,data:o}}getBuildingFootprints(e,t){return e.map(n=>{const{col:r,row:s}=this.worldToGrid(n.x,n.z,t);return{col:r,row:s,radius:Math.ceil(n.radius/t),name:n.name,region:n.region,hasNPC:!!n.npcId}})}getStationMarkers(e,t){return e.map(n=>{const{col:r,row:s}=this.worldToGrid(n.x,n.z,t);return{col:r,row:s,name:n.name,block:n.block}})}}const Ex=2,Sx={shire:[100,200,70,40],plains:[180,200,80,30],forest:[30,130,40,40],mirkwood:[20,60,20,50],mountain:[160,160,170,30]},lr=Object.freeze({OVERVIEW:"overview",DETAIL:"detail"});class Mx{constructor(e,t){this._layers=e,this._canvas=t,this._ctx=t.getContext("2d"),this._zoom=lr.OVERVIEW,this._visitedMarkers=[],this._overviewImage=null,this._overviewBiome=null}get zoom(){return this._zoom}toggleZoom(){this._zoom=this._zoom===lr.OVERVIEW?lr.DETAIL:lr.OVERVIEW}setZoom(e){this._zoom=e}addVisitedMarker(e,t,n){this._visitedMarkers.some(s=>Math.abs(s.x-e)<10&&Math.abs(s.z-t)<10)||this._visitedMarkers.push({x:e,z:t,label:n})}draw(e){const{playerPos:t,fogOfWar:n,buildings:r,npcs:s,stations:o,landmarks:a,questMarkers:c}=e,l=this._ctx,h=this._canvas.width,d=this._canvas.height;l.clearRect(0,0,h,d),this._zoom===lr.OVERVIEW?this._drawOverview(l,h,d,e):this._drawDetail(l,h,d,e)}_drawOverview(e,t,n,r){const s=Ex,{playerPos:o,fogOfWar:a,buildings:c,landmarks:l,questMarkers:h}=r;this._overviewImage||(this._overviewImage=this._layers.getTerrainColorMap(s),this._overviewBiome=this._layers.getBiomeGrid(s));const d=this._overviewImage,f=this._overviewBiome,p=e.createImageData(d.width,d.height);for(let R=0;R<d.width*d.height;R++){let A=d.data[R*3],I=d.data[R*3+1],P=d.data[R*3+2];const M=f.data[R],E=Sx[M];if(E){const D=E[3]/100;A=Math.round(A*(1-D)+E[0]*D),I=Math.round(I*(1-D)+E[1]*D),P=Math.round(P*(1-D)+E[2]*D)}if(a){const{x:D,z:j}=this._layers.gridToWorld(R%d.width,Math.floor(R/d.width),s);a.isRevealed(D,j)||(A=Math.round(A*.2),I=Math.round(I*.2),P=Math.round(P*.2))}p.data[R*4]=A,p.data[R*4+1]=I,p.data[R*4+2]=P,p.data[R*4+3]=255}const m=document.createElement("canvas");m.width=d.width,m.height=d.height,m.getContext("2d").putImageData(p,0,0),e.imageSmoothingEnabled=!1,e.drawImage(m,0,0,t,n);const g=t/d.width,_=n/d.height,u=R=>(R-Ns)/s*g,C=R=>(R-Us)/s*_;if(c){e.fillStyle="rgba(139, 90, 43, 0.6)";for(const R of c){const A=u(R.x),I=C(R.z),P=R.radius/s*g;e.fillRect(A-P,I-P,P*2,P*2)}}if(l){e.font="10px monospace",e.textAlign="center";for(const R of l){const A=u(R.position.x),I=C(R.position.z);e.fillStyle="#c9a84c",e.beginPath(),e.moveTo(A,I-5),e.lineTo(A+4,I),e.lineTo(A,I+5),e.lineTo(A-4,I),e.closePath(),e.fill(),e.fillStyle="#c9a84c",e.fillText(R.name,A,I-8)}}if(h){e.fillStyle="#e53935";for(const R of h){const A=u(R.x),I=C(R.z);e.beginPath(),e.arc(A,I,4,0,Math.PI*2),e.fill()}}e.fillStyle="rgba(100, 200, 255, 0.7)";for(const R of this._visitedMarkers){const A=u(R.x),I=C(R.z);e.beginPath(),e.arc(A,I,3,0,Math.PI*2),e.fill()}const b=u(o.x),S=C(o.z);e.fillStyle="#4caf50",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.arc(b,S,5,0,Math.PI*2),e.fill(),e.stroke(),this._drawLegend(e,t,n),e.fillStyle="#888",e.font="11px monospace",e.textAlign="right",e.fillText("Z: Toggle zoom | M: Close",t-8,n-6)}_drawDetail(e,t,n,r){const{playerPos:s,fogOfWar:o,buildings:a,npcs:c,stations:l,questMarkers:h}=r,d=Math.floor(t/2),f=Math.floor(n/2),p=Math.floor(s.x)-d,m=Math.floor(s.z)-f,g=e.createImageData(t,n);for(let S=0;S<n;S++)for(let R=0;R<t;R++){const A=p+R,I=m+S,P=this._layers._getHeight(A,I,this._layers._seed);let[M,E,D]=Tx(P);o&&!o.isRevealed(A,I)&&(M=Math.round(M*.15),E=Math.round(E*.15),D=Math.round(D*.15));const j=(S*t+R)*4;g.data[j]=M,g.data[j+1]=E,g.data[j+2]=D,g.data[j+3]=255}e.putImageData(g,0,0);const _=S=>S-p,u=S=>S-m;if(a){e.strokeStyle="rgba(139, 90, 43, 0.8)",e.lineWidth=1;for(const S of a){const R=_(S.x),A=u(S.z);R+S.radius<0||R-S.radius>t||A+S.radius<0||A-S.radius>n||e.strokeRect(R-S.radius,A-S.radius,S.radius*2,S.radius*2)}}if(c){e.fillStyle="#ffeb3b";for(const S of c){const R=_(S.position.x),A=u(S.position.z);R<0||R>t||A<0||A>n||(e.beginPath(),e.arc(R,A,3,0,Math.PI*2),e.fill())}}if(l){e.fillStyle="#ff9800";for(const S of l){const R=_(S.x),A=u(S.z);R<0||R>t||A<0||A>n||e.fillRect(R-2,A-2,4,4)}}if(h){e.fillStyle="#e53935";for(const S of h){const R=_(S.x),A=u(S.z);R<0||R>t||A<0||A>n||(e.beginPath(),e.arc(R,A,4,0,Math.PI*2),e.fill())}}e.fillStyle="rgba(100, 200, 255, 0.7)";for(const S of this._visitedMarkers){const R=_(S.x),A=u(S.z);R<0||R>t||A<0||A>n||(e.beginPath(),e.arc(R,A,3,0,Math.PI*2),e.fill())}e.strokeStyle="#4caf50",e.lineWidth=2;const C=d,b=f;e.beginPath(),e.arc(C,b,5,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(C-8,b),e.lineTo(C+8,b),e.moveTo(C,b-8),e.lineTo(C,b+8),e.stroke(),e.fillStyle="#aaa",e.font="11px monospace",e.textAlign="left",e.fillText(`x:${Math.floor(s.x)} z:${Math.floor(s.z)} y:${Math.floor(s.y)}`,8,n-6),e.textAlign="right",e.fillText("Z: Toggle zoom | M: Close",t-8,n-6)}_drawLegend(e,t,n){const r=[["Water",[40,80,160]],["Lowland",[80,150,60]],["Highland",[160,150,120]],["Snow",[220,220,230]]],s=8;let o=n-56;e.font="9px monospace",e.textAlign="left";for(const[a,[c,l,h]]of r)e.fillStyle=`rgb(${c},${l},${h})`,e.fillRect(s,o,10,10),e.fillStyle="#aaa",e.fillText(a,s+14,o+9),o+=12}}function Tx(i){return i<=26?[40,80,160]:i<=32?[80,150,60]:i<=40?[130,170,70]:i<=55?[160,150,120]:[220,220,230]}const qe=16,Sl=3,bx=[{type:x.COAL_ORE,threshold:.7,maxY:28},{type:x.COPPER_ORE,threshold:.75,maxY:24},{type:x.IRON_ORE,threshold:.8,maxY:20}];function Ax(i,e,t,n){for(const r of bx){if(e>r.maxY)continue;if(Ra(i*.1+e*.3+n*.1+r.type*100,t*.1+e*.3)>r.threshold)return r.type}return null}function Rx(i,e,t){let n=i*374761+e*668265+t*982451|0;return n=(n>>16^n)*73244475|0,n=(n>>16^n)*73244475|0,(n>>16^n)&2147483647}function Ml(i,e,t){return Rx(i,e,t)/2147483647}const wx={shire:.1,forest:.3,mirkwood:.2,plains:.05};function Oa(i,e,t){return i+e*qe+t*qe*qe}function Da(i,e,t){return`${i},${e},${t}`}function cr(i,e,t,n,r){const s=Math.floor(e/qe),o=Math.floor(t/qe),a=Math.floor(n/qe),c=(e%qe+qe)%qe,l=(t%qe+qe)%qe,h=(n%qe+qe)%qe,d=Da(s,o,a);i[d]||(i[d]=new Uint8Array(qe*qe*qe)),i[d][Oa(c,l,h)]=r}function Cx(i,e,t){const n={},r=i*qe,s=e*qe;for(let o=0;o<qe;o++)for(let a=0;a<qe;a++){const c=r+o,l=s+a,h=Hs(c,l),d=Ot(c,l,t);sd(c,l),cr(n,c,d,l,h.surfaceBlock);for(let p=1;p<=Sl;p++)cr(n,c,d-p,l,x.DIRT);for(let p=0;p<d-Sl;p++){const m=Ax(c,p,l,t);cr(n,c,p,l,m||x.STONE)}for(let p=dg;p>=0;p--){const m=Math.floor(p/qe),g=(p%qe+qe)%qe,_=Da(Math.floor(c/qe),m,Math.floor(l/qe)),u=n[_],C=(c%qe+qe)%qe,b=(l%qe+qe)%qe,S=Oa(C,g,b);if(u&&u[S]===x.AIR)u[S]=x.WATER;else if(!u||u[S]!==x.AIR)break}if(Ml(c,l,t)<h.treeDensity){for(let g=1;g<=4;g++)cr(n,c,d+g,l,x.WOOD);const m=d+4;for(let g=-2;g<=2;g++)for(let _=-2;_<=2;_++)for(let u=0;u<=2;u++)g===0&&_===0&&u===0||Math.abs(g)+Math.abs(_)+u<=3&&cr(n,c+g,m+u,l+_,x.LEAVES)}else{const p=wx[h.type]||0,m=Ml(c,l,t+7);if(p>0&&m<p){const g=Math.floor((d+1)/qe),_=((d+1)%qe+qe)%qe,u=Da(Math.floor(c/qe),g,Math.floor(l/qe)),C=n[u],b=(c%qe+qe)%qe,S=(l%qe+qe)%qe,R=Oa(b,_,S);(!C||C[R]===x.AIR)&&cr(n,c,d+1,l,x.TALL_GRASS)}}}return{blocks:n}}class Ix{constructor(e,t,n={}){if(this._world=e,this._seed=t,this._loadDistance=n.loadDistance||6,this._unloadDistance=n.unloadDistance||this._loadDistance+3,this._maxPerFrame=n.maxChunksPerFrame||4,this._cache=new Map,this._modified=new Map,this._meshDirtyChunks=new Set,this._generated=new Set,this._pending=new Set,this._lastPcx=null,this._lastPcz=null,this._worker=null,this._onProgress=n.onProgress||null,this._totalRequested=0,this._totalCompleted=0,typeof Worker<"u"&&n.useWorker!==!1)try{this._worker=new Worker(new URL(""+new URL("chunkWorker-BFkDpfxx.js",import.meta.url).href,import.meta.url),{type:"module"}),this._worker.onmessage=r=>this._onWorkerMessage(r)}catch{this._worker=null}}_cacheAndLoadColumn(e,t,n){const r=`${e},${t}`;this._cache.set(r,n.blocks),this._loadColumnFromCache(e,t),this._generated.add(r)}_loadColumnFromCache(e,t){const n=`${e},${t}`,r=this._cache.get(n);if(r)for(const[s,o]of Object.entries(r)){const a=o instanceof ArrayBuffer?new Uint8Array(o):o,[c,l,h]=s.split(",").map(Number),d=`${c},${l},${h}`,f=this._modified.get(d);let p=this._world.chunks.get(d);if(p||(p=new id,this._world.chunks.set(d,p)),f)p.blocks.set(f);else for(let m=0;m<a.length;m++)a[m]!==0&&(p.blocks[m]=a[m]);this._meshDirtyChunks.add(d)}}consumeMeshDirtyChunks(){const e=new Set(this._meshDirtyChunks);return this._meshDirtyChunks.clear(),e}_unloadColumn(e,t){const n=`${e},${t}`,r=this._cache.get(n);if(r)for(const s of Object.keys(r)){const o=this._world.chunks.get(s);o&&(this._modified.set(s,new Uint8Array(o.blocks)),this._world.chunks.delete(s))}}_generateColumnSync(e,t){const n=`${e},${t}`;if(this._generated.has(n))return;const r=Cx(e,t,this._seed);this._cacheAndLoadColumn(e,t,r),this._totalCompleted++,this._onProgress&&this._onProgress(this._totalCompleted,this._totalRequested)}_requestColumnAsync(e,t){const n=`${e},${t}`;this._generated.has(n)||this._pending.has(n)||(this._pending.add(n),this._totalRequested++,this._worker.postMessage({type:"generate",cx:e,cz:t,seed:this._seed,id:n}))}_onWorkerMessage(e){const{type:t,cx:n,cz:r,blocks:s,id:o}=e.data;t==="generated"&&(this._pending.delete(o),this._cacheAndLoadColumn(n,r,{blocks:s}),this._totalCompleted++,this._onProgress&&this._onProgress(this._totalCompleted,this._totalRequested))}getProgress(){return this._totalRequested===0?1:this._totalCompleted/this._totalRequested}isLoading(){return this._pending.size>0}generateInitialChunks(e,t){const n=Math.floor(e/We),r=Math.floor(t/We),s=[];for(let o=-this._loadDistance;o<=this._loadDistance;o++)for(let a=-this._loadDistance;a<=this._loadDistance;a++)s.push({cx:n+o,cz:r+a});if(this._totalRequested=s.length,this._totalCompleted=0,this._worker)for(const{cx:o,cz:a}of s)this._requestColumnAsync(o,a);else for(const{cx:o,cz:a}of s)this._generateColumnSync(o,a);this._lastPcx=n,this._lastPcz=r}update(e,t){const n=Math.floor(e/We),r=Math.floor(t/We);if(n===this._lastPcx&&r===this._lastPcz)return;this._lastPcx=n,this._lastPcz=r;let s=0;for(let o=0;o<=this._loadDistance&&s<this._maxPerFrame;o++)for(let a=-o;a<=o&&s<this._maxPerFrame;a++)for(let c=-o;c<=o&&s<this._maxPerFrame;c++){if(Math.abs(a)!==o&&Math.abs(c)!==o)continue;const l=n+a,h=r+c,d=`${l},${h}`;if(this._generated.has(d)||this._pending.has(d)){this._cache.has(d)&&!this._isColumnLoaded(l,h)&&this._loadColumnFromCache(l,h);continue}this._worker?this._requestColumnAsync(l,h):this._generateColumnSync(l,h),s++}for(const o of this._generated){const[a,c]=o.split(",").map(Number);(Math.abs(a-n)>this._unloadDistance||Math.abs(c-r)>this._unloadDistance)&&this._unloadColumn(a,c)}}_isColumnLoaded(e,t){return this._world.chunks.has(`${e},1,${t}`)}}function Ox(i,e){const t=Math.floor(e.x),n=Math.floor(e.y),r=Math.floor(e.z);return i.getBlock(t,n,r)===x.WATER}function Dx(i){return i?mr.SURVIVAL.WATER_SLOWDOWN:1}const Tl=4;function Lx(i){return i<=0?1:i>=Tl?0:Math.max(0,1-i/Tl)}const Px={ranger_hal:{about:"I patrol the borders of the Shire. Wolves have been bolder lately, and I've seen strange lights in the old ruins to the east. Something is stirring.",need:"There's a ruined watch-post at the edge of the wilds. If someone could restore it, we'd have a proper outpost again. You'd need wood and stone.",extra:{text:"Any survival tips?",response:"Build a shelter before nightfall — four walls and a roof. Punch grass for fiber, break dirt for materials. Stay close to camp at night."}},old_tom:{about:"Bree used to be a bustling crossroads. Now half the buildings stand empty. The East Road has fallen into disrepair and fewer travelers come each season.",need:"The old ranger hall just east of here needs restoring. It would bring trade back to this area. You'll need wood, stone, and some iron ore.",extra:{text:"What happened here?",response:"Ancient things are waking up. The wards that kept the dark things at bay — they're failing one by one. That's why the road wardens need help."}},elara_lorekeeper:{about:"Rivendell endures, though diminished. I study the old records — maps of a ward network that once protected these lands. The Elven-craft that built them is nearly forgotten.",need:"I need someone to search the archives here for records of the ward network. The knowledge is scattered, but vital if we're to understand what's awakening.",extra:{text:"Tell me about the relics",response:"The relics are fragments of ancient technology — Elven, Dwarven, Numenorean. They can heal, ward, reveal. But near corruption, they become unstable. Use them wisely."}},thorin_smith:{about:"This was a great dwarven workshop once. The forge has gone cold, the bellows rotted. But the stone is strong and the veins of ore still run deep in these mountains.",need:"Help me rebuild this workshop. I need stone, iron ore, and copper ore. With a working forge, I can craft the tools we need to push into the deeper delves.",extra:{text:"What lurks in the mountains?",response:"Goblins mostly, and worse things deeper down. There's a corrupted guardian blocking the lower passages. It was once a protector, now twisted by dark power."}},galawen_warden:{about:"Mirkwood grows darker. The ancient beacon that held corruption at bay has gone out. Without it, the spiders multiply and the forest sickens.",need:"The forest beacon must be restored. I need someone brave enough to gather wood, fiber, and relic shards to reignite it. The spiders guard the approach.",extra:{text:"Is the corruption spreading?",response:"Yes. From the south — from Dol Guldur. An old evil stirs there. The beacon, once lit, will slow its advance through the forest."}},beorn_jr:{about:"I am Grimbeorn, son of Beorn. I guard the passage between the mountains and the forest. The wild creatures grow restless — something dark disturbs them.",need:"I ask nothing for myself. But the land needs wardens. If you can clear the threats that trouble the vale, the Beornings will remember it.",extra:{text:"What is the Anduin Vale like?",response:"Rich land, good water, tall grass. Bears, eagles, and honest folk. But the shadow from Mirkwood creeps closer each season. We hold the line as we can."}},sage_miriel:{about:"I have watched ages pass. What stirs now in Dol Guldur is not the old Dark Lord — but an echo, a shadow left in the machinery of the ancient ward network.",need:"The ward bastion is the key. Restore it, and the network can be turned against the shadow. But it requires great resources and courage to reach.",extra:{text:"Can the shadow be defeated?",response:"Not destroyed — contained. The ward network was built for this. Restore the bastions, stabilize the relics, and the shadow sleeps again. That is our best hope."}}};function Nx(i,e){const t=Px[i];if(!t)return[{text:"Tell me about this place",response:`${e}: I don't have much to say, traveler. Safe journeys.`},{text:"Farewell",response:null}];const n=[];return n.push({text:"Tell me about this place",response:`${e}: ${t.about}`}),n.push({text:"What do you need?",response:`${e}: ${t.need}`}),t.extra&&n.push({text:t.extra.text,response:`${e}: ${t.extra.response}`}),n.push({text:"Farewell",response:null}),n}const An={mainQuests:8,sitesRestored:5,discoverables:12,npcsMet:7,landmarks:10,enemyTypes:15,sideQuests:10,nightsSurvived:10,relicUsed:1,shelterBuilt:1,stationsCrafted:6};Object.keys(An).length;class Ux{constructor(){this._completedQuests=new Set,this._restoredSites=new Set,this._discovered=new Set,this._npcs=new Set,this._landmarks=new Set,this._enemyTypes=new Set,this._sideQuests=new Set,this._stations=new Set,this.nightsSurvived=0,this._relicUsed=!1,this._shelterBuilt=!1}completeQuest(e){this._completedQuests.add(e)}restoreSite(e){this._restoredSites.add(e)}discover(e){this._discovered.add(e)}talkToNPC(e){this._npcs.add(e)}visitLandmark(e){this._landmarks.add(e)}killEnemy(e){this._enemyTypes.add(e)}completeSideQuest(e){this._sideQuests.add(e)}surviveNight(){this.nightsSurvived++}useRelic(){this._relicUsed=!0}buildShelter(){this._shelterBuilt=!0}craftAtStation(e){this._stations.add(e)}get questsCompleted(){return this._completedQuests.size}get sitesRestored(){return this._restoredSites.size}get discoverablesFound(){return this._discovered.size}get npcsMet(){return this._npcs.size}get landmarksVisited(){return this._landmarks.size}get enemyTypesKilled(){return this._enemyTypes.size}get sideQuestsCompleted(){return this._sideQuests.size}getBreakdown(){return[{label:"Main Quests",current:this._completedQuests.size,total:An.mainQuests},{label:"Sites Restored",current:this._restoredSites.size,total:An.sitesRestored},{label:"Discoverables",current:this._discovered.size,total:An.discoverables},{label:"NPCs Met",current:this._npcs.size,total:An.npcsMet},{label:"Landmarks Visited",current:this._landmarks.size,total:An.landmarks},{label:"Enemy Types Killed",current:this._enemyTypes.size,total:An.enemyTypes},{label:"Side Quests",current:this._sideQuests.size,total:An.sideQuests},{label:"Nights Survived",current:Math.min(this.nightsSurvived,An.nightsSurvived),total:An.nightsSurvived},{label:"Relic Used",current:this._relicUsed?1:0,total:1},{label:"Shelter Built",current:this._shelterBuilt?1:0,total:1},{label:"Crafting Stations",current:this._stations.size,total:An.stationsCrafted},{label:"Skill Points Spent",current:0,total:0},{label:"Faction Rep",current:0,total:0}]}getPercentage(){const t=this.getBreakdown().filter(r=>r.total>0);let n=0;for(const r of t)n+=Math.min(1,r.current/r.total);return Math.round(n/t.length*100)}}const Ni=[{id:"fresh",name:"Fresh Start",description:"Brand new game, no progress",percent:0,applyState:i=>{}},{id:"ch1_done",name:"Chapter 1 Complete",description:"Survived first night, restored watch-post, ward activated",percent:12,applyState:i=>{const{questSystem:e,inventory:t,survivalStats:n,experienceSystem:r,player:s,progress:o,factionSystem:a,getHeightAt:c,seed:l}=i;e.activate("ch1_embers"),e.advanceObjective("ch1_embers","ch1_survive",1),e.advanceObjective("ch1_embers","ch1_reach_outpost",1),e.advanceObjective("ch1_embers","ch1_activate_ward",1),t.add("wood",30),t.add("stone",25),t.add("fiber",20),t.add("stick",16),t.add("coal",5),t.add("iron_ore",3),t.add("cooked_meat",5),r.addExperience(150),o.completeQuest("ch1_embers"),o.restoreSite("starter_watchpost"),o.surviveNight(),s.position.x=70,s.position.z=15,s.position.y=c(70,15,l)+2}},{id:"ch2_done",name:"Chapter 2 Complete",description:"Restored ranger hall, met lore NPC, investigated corruption",percent:25,applyState:i=>{Ni[1].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,factionSystem:o,getHeightAt:a,seed:c}=i;e.activate("ch2_roads"),e.advanceObjective("ch2_roads","ch2_restore",1),e.advanceObjective("ch2_roads","ch2_meet_npc",1),e.advanceObjective("ch2_roads","ch2_corruption",3),t.add("iron_ore",10),t.add("copper_ore",5),t.add("leather",5),t.add("rope",3),n.addExperience(200),s.completeQuest("ch2_roads"),s.restoreSite("roadside_hall"),s.talkToNPC("old_tom");for(let l=0;l<3;l++)s.surviveNight();r.position.x=180,r.position.z=30,r.position.y=a(180,30,c)+2}},{id:"ch4_done",name:"Chapter 4 Complete",description:"Reached Rivendell, explored mountains, stabilized dwarven forge",percent:50,applyState:i=>{Ni[2].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o,seed:a}=i;e.activate("ch3_records"),e.advanceObjective("ch3_records","ch3_reach_rivendell",1),e.advanceObjective("ch3_records","ch3_learn_wards",1),e.advanceObjective("ch3_records","ch3_obtain_relic",1),e.activate("ch4_mountains"),e.advanceObjective("ch4_mountains","ch4_enter_delve",1),e.advanceObjective("ch4_mountains","ch4_stabilize",1),e.advanceObjective("ch4_mountains","ch4_defeat_boss",1),t.add("relic_shard",8),t.add("lore_fragment",5),t.add("iron_ore",20),n.addExperience(400),s.completeQuest("ch3_records"),s.completeQuest("ch4_mountains"),s.restoreSite("mountain_workshop"),s.talkToNPC("elara_lorekeeper"),s.talkToNPC("thorin_smith");for(let c=0;c<3;c++)s.surviveNight();r.position.x=380,r.position.z=40,r.position.y=o(380,40,a)+2}},{id:"ch6_done",name:"Chapter 6 Complete",description:"Cleared Mirkwood, restored beacon, reached Erebor forge",percent:75,applyState:i=>{Ni[3].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o,seed:a}=i;e.activate("ch5_darkwood"),e.advanceObjective("ch5_darkwood","ch5_enter_mirkwood",1),e.advanceObjective("ch5_darkwood","ch5_clear_spiders",3),e.advanceObjective("ch5_darkwood","ch5_restore_beacon",1),e.activate("ch6_forge"),e.advanceObjective("ch6_forge","ch6_reach_forge",1),e.advanceObjective("ch6_forge","ch6_unlock_crafting",1),e.advanceObjective("ch6_forge","ch6_discover_source",1),t.add("relic_shard",15),t.add("lore_fragment",10),t.add("iron_ore",30),n.addExperience(500),s.completeQuest("ch5_darkwood"),s.completeQuest("ch6_forge"),s.restoreSite("forest_beacon"),s.talkToNPC("galawen_warden"),s.talkToNPC("ranger_hal");for(let c=0;c<2;c++)s.surviveNight();r.position.x=420,r.position.z=80,r.position.y=o(420,80,a)+2}},{id:"ch7_done",name:"Chapter 7 Complete (Pre-Epilogue)",description:"Defeated the dark champion at Dol Guldur, ready for epilogue",percent:90,applyState:i=>{Ni[4].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o,seed:a}=i;e.activate("ch7_shadow"),e.advanceObjective("ch7_shadow","ch7_assault",1),e.advanceObjective("ch7_shadow","ch7_disable_link",1),e.advanceObjective("ch7_shadow","ch7_defeat_champion",1),n.addExperience(500),s.completeQuest("ch7_shadow"),s.restoreSite("ward_bastion"),s.talkToNPC("sage_miriel"),s.useRelic(),r.position.x=30,r.position.z=30,r.position.y=o(30,30,a)+2}},{id:"full_100",name:"100% Complete",description:"Everything done — all quests, sites, discoverables, enemies, etc.",percent:100,applyState:i=>{Ni[5].applyState(i);const{questSystem:e,inventory:t,experienceSystem:n,player:r,progress:s,getHeightAt:o,seed:a}=i;e.activate("ch8_after"),e.advanceObjective("ch8_after","ch8_celebrate",1),e.advanceObjective("ch8_after","ch8_explore",1),s.completeQuest("ch8_after");const c=["cache_shire_01","cache_bree_01","cache_mountain_01","cache_erebor_01","lore_shire_01","lore_rivendell_01","relic_trollshaws_01","relic_mirkwood_01","roadstone_east_01","roadstone_east_02","inscription_dwarven_01","recipe_forge_01"];for(const d of c)s.discover(d);const l=["shire","bree","trollshaws","rivendell","misty_mountains","anduin_vale","mirkwood","long_lake","erebor","dol_guldur"];for(const d of l)s.visitLandmark(d);const h=["wolf","goblin","spider","troll","wight","guardian","construct","orc","giant_spider","shadow","barrow_wight","goblin_archer","corrupted_bear","dark_construct","wraith"];for(const d of h)s.killEnemy(d);for(const d of["ranger_hal","old_tom","elara_lorekeeper","thorin_smith","galawen_warden","beorn_jr","sage_miriel"])s.talkToNPC(d);for(let d=0;d<10;d++)s.completeSideQuest(`sq${d}`);for(;s.nightsSurvived<10;)s.surviveNight();s.buildShelter();for(const d of["hand","workbench","forge","campfire","kitchen","loom"])s.craftAtStation(d);t.add("iron_ore",50),t.add("relic_shard",20),t.add("lore_fragment",15),t.add("lembas",20),n.addExperience(1e3),r.position.x=0,r.position.z=0,r.position.y=o(0,0,a)+2}}];function kx(i){return!!(i.inventory||i.crafting||i.questLog||i.skillTree||i.map||i.settings)}const Ka=document.getElementById("race-select"),zr=document.getElementById("class-select"),Fx=document.getElementById("race-info"),Bx=document.getElementById("class-info");function gd(){const i=cd[Ka.value];zr.innerHTML="";for(const t of i.classIds){const n=qa[t],r=document.createElement("option");r.value=t,r.textContent=n.name,zr.appendChild(r)}const e=i.statModifiers;Fx.textContent=`HP:${e.health} STA:${e.stamina} FOC:${e.focus} COR:${e.corruptionResistance}`,vd()}function vd(){const i=qa[zr.value];i&&(Bx.textContent=`${i.passive} | ${i.activeAbility}`)}Ka.addEventListener("change",gd);zr.addEventListener("change",vd);gd();let Gs=null;document.getElementById("start-btn").addEventListener("click",()=>{const i=c0({raceId:Ka.value,classId:zr.value,difficulty:document.getElementById("difficulty-select").value,seed:42,worldName:document.getElementById("world-name").value,characterName:document.getElementById("character-name").value});document.getElementById("new-game").style.display="none",zx(i,Gs),Gs=null});document.getElementById("jump-btn").addEventListener("click",()=>{const i=document.getElementById("jump-menu");i.style.display=i.style.display==="none"?"block":"none";const e=document.getElementById("jump-list");e.innerHTML=Ni.map(t=>`
    <div style="padding:5px 8px;margin:2px 0;border-radius:4px;cursor:pointer;font-size:12px;color:#aed581;border:1px solid #333;background:${Gs===t.id?"#3a5a2f":"transparent"}"
         data-jump="${t.id}">
      <b>${t.name}</b> (${t.percent}%)<br>
      <span style="color:#888">${t.description}</span>
    </div>
  `).join(""),e.querySelectorAll("[data-jump]").forEach(t=>{t.addEventListener("click",()=>{Gs=t.getAttribute("data-jump"),e.querySelectorAll("[data-jump]").forEach(n=>n.style.background="transparent"),t.style.background="#3a5a2f"})})});function zx(i,e){const t=mr,n=new Zv,r=new rd,s=document.getElementById("loading-screen"),o=document.getElementById("loading-fill"),a=document.getElementById("loading-pct"),c=document.getElementById("loading-flavor"),l=["The old roads remember those who walked them...","Ancient ward-stones hum with forgotten power...","Mirkwood's shadows deepen with each passing age...","The Lonely Mountain watches over the eastern lands...","In the Shire, the hedgerows grow thick and green...","Rivendell endures, though diminished and quiet...","The Great River Anduin flows ever southward...","Old ruins hold secrets that time cannot erase..."];s.style.display="flex",c.textContent=l[Math.floor(Math.random()*l.length)];const h=(F,ee)=>{const se=Math.round(F/ee*100);o.style.width=`${se}%`,a.textContent=`${se}% — ${F}/${ee} chunks`,F%Math.max(1,Math.floor(ee/4))===0&&(c.textContent=l[Math.floor(Math.random()*l.length)])},d=new Ix(r,i.seed,{loadDistance:6,maxChunksPerFrame:t.CHUNKS.MAX_PER_FRAME,useWorker:!0,onProgress:h});d.generateInitialChunks(0,0);const f=!d.isLoading(),p={starter_watchpost:"small",roadside_hall:"medium",mountain_workshop:"medium",forest_beacon:"small",ward_bastion:"large"};for(const F of Lr){const ee=Ot(F.position.x,F.position.z,i.seed);nv(r,{x:F.position.x,y:ee+1,z:F.position.z},p[F.id]||"small")}const{player:m,inventory:g,survivalStats:_,race:u,cls:C}=l0(i),b=tx(i.difficulty),S=Ot(0,0,i.seed);m.position.y=S+2;const R=new Vg,A=new h0,I=new b0(i.seed),P=new A0({width:t.FOG.WIDTH,height:t.FOG.HEIGHT,cellSize:t.FOG.CELL_SIZE}),M=new C0,E=new O0,D=new j0(fl),j=ax(i.raceId,i.classId);for(const F of j)D.grantStartingUnlock(F);const B=new Z0(D),$=new D0(8),re=new N0,Z=new B0(H0),te=new z0(Z),X=new V0,ae=Sv(),be=new q0,Ie=yv(),Qe=sx(i.raceId);Ie.applyRaceModifiers(i.raceId,Qe);const it=new Q0,K=new J0(P,Ts),fe=new Iv(u.statModifiers.perception||50),Ce=Gv(i.raceId);Ce>0&&fe.addModifier("race_stealth",Ce);const me=new ov;(i.classId==="man_scholar"||i.classId==="elf_warden")&&me.equipRelic(new sv({id:"ward_light",name:"Ward Light Stone",ability:bs.WARD_LIGHT,focusCost:10}));const Fe=new lv,lt=new dv,Be=new hv,At=new uv(fv),bt=new kv,$e=new px,O=new _x;let Et=null;const tt=document.getElementById("chest-panel"),Je=document.getElementById("chest-items");function Pe(F,ee,se){Et={x:F,y:ee,z:se},Le()}function St(){Et=null,tt.style.display="none"}function Le(){if(!Et){tt.style.display="none";return}tt.style.display="block";const F=O.getItems(Et.x,Et.y,Et.z);if(F.length===0){Je.innerHTML='<div style="color:#888">Empty</div>';return}Je.innerHTML=F.map((ee,se)=>`<div data-chest-idx="${se}" style="padding:4px 8px;cursor:pointer;border-radius:4px;color:#aed581;border:1px solid #333;margin:2px 0">${Uo(ee.type)} ${ee.type.replace(/_/g," ")} x${ee.count}</div>`).join(""),Je.onclick=ee=>{const se=ee.target.closest("[data-chest-idx]");if(!se||!Et)return;const Ee=parseInt(se.getAttribute("data-chest-idx")),De=O.getItems(Et.x,Et.y,Et.z);if(Ee>=0&&Ee<De.length){const ce=O.takeItem(Et.x,Et.y,Et.z,De[Ee].type);ce&&(g.add(ce.type,ce.count),pe=`Took ${ce.count} ${ce.type.replace(/_/g," ")}`,le=1.5,Le())}}}const T=new Qv,v=new Jv,k=new ex,J={x:0,y:Ot(0,0,i.seed)+2,z:0};dx(i.classId),g.add("map_fragment",1);const ie={man:"man",elf:"elf",dwarf:"dwarf",hobbit:"hobbit"}[i.raceId]||"man",Q=new Map(Po.map(F=>[F.id,F]));for(const F of yl){const ee=Ot(F.x,F.z,i.seed);if(fd(r,{x:F.x,y:ee+1,z:F.z},{wallBlock:F.wallBlock,roofBlock:F.roofBlock,floorBlock:F.floorBlock,radius:F.radius,height:F.height,bed:F.bed,chest:F.chest}),F.chest&&F.chestItems){const se=F.x-F.radius+1,Ee=ee+1,De=F.z+F.radius-1;for(const ce of F.chestItems)O.addItem(se,Ee,De,ce.type,ce.count)}if(F.npcId){const se=Q.get(F.npcId);se&&(se.position.x=F.x+F.radius+1,se.position.y=ee+2,se.position.z=F.z,se.spawnPosition={...se.position},it.addNPC(se),Q.delete(F.npcId))}}for(const[,F]of Q){const ee=Ot(Math.floor(F.position.x),Math.floor(F.position.z),i.seed);F.position.y=ee+2,F.spawnPosition={...F.position},it.addNPC(F)}for(const F of gx)if(F.type==="line"){const ee=F.x2-F.x1,se=F.z2-F.z1,Ee=Math.max(Math.abs(ee),Math.abs(se));for(let De=0;De<=Ee;De++){const ce=Ee===0?0:De/Ee,ot=Math.round(F.x1+ee*ce),Xe=Math.round(F.z1+se*ce),Lt=Ot(ot,Xe,i.seed);F.surface?r.setBlock(ot,Lt,Xe,F.block):r.setBlock(ot,Lt+F.dy,Xe,F.block)}}else if(F.type==="well"){const ee=Ot(F.x,F.z,i.seed);for(let se=-1;se<=1;se++)for(let Ee=-1;Ee<=1;Ee++)se===0&&Ee===0?r.setBlock(F.x,ee+1,F.z,x.WATER):r.setBlock(F.x+se,ee+1,F.z+Ee,x.COBBLESTONE)}else if(F.type==="blocks"){const ee=Ot(F.x,F.z,i.seed);for(const se of F.blocks){const Ee=F.x+se.dx,De=F.z+se.dz,ce=se.surface?Ot(Ee,De,i.seed):ee;r.setBlock(Ee,ce+se.dy,De,se.block)}}for(const F of vx){const ee=Ot(F.x,F.z,i.seed),se=F.type==="large"?6:4,Ee=F.type==="large"?3:2;for(let ce=1;ce<=se;ce++)r.setBlock(F.x,ee+ce,F.z,x.WOOD);const De=ee+se;for(let ce=-Ee;ce<=Ee;ce++)for(let ot=-Ee;ot<=Ee;ot++)for(let Xe=0;Xe<=2;Xe++){if(ce===0&&ot===0&&Xe===0)continue;Math.sqrt(ce*ce+ot*ot)+Xe*.7<=Ee+.6&&r.setBlock(F.x+ce,De+Xe,F.z+ot,x.LEAVES)}}for(const F of El){const ee=Ot(F.x,F.z,i.seed);r.setBlock(F.x,ee+F.dy,F.z,F.block)}let pe="",le=0,Me=-1;const rt=k0(i.classId);for(const F of rt)g.add(F.type,F.count);const ne=[],Te=[];let ke=[];const Ge=2,Ae=120;function nt(F,ee,se){Te.push({position:{x:F.x+(Math.random()-.5)*.5,y:F.y+.5,z:F.z+(Math.random()-.5)*.5},type:ee,count:se,lifetime:Ae,bobPhase:Math.random()*Math.PI*2})}let Ke=i.seed;const xt=()=>(Ke=Ke*1103515245+12345&2147483647,Ke/2147483647),L=new f0(xt);let ve=0;const G=new $_({antialias:!0});G.setSize(window.innerWidth,window.innerHeight),G.setClearColor(t.COLORS.SKY_DAY),document.body.appendChild(G.domElement);const Y=new nu,Se=dl(1);Y.fog=new Va(t.COLORS.SKY_DAY,Se.near,Se.far);const ue=new xn(t.CAMERA.FOV,window.innerWidth/window.innerHeight,t.CAMERA.NEAR,t.CAMERA.FAR),Ye=new du(t.COLORS.AMBIENT_LIGHT,t.LIGHTING.AMBIENT.day);Y.add(Ye);const Tt=new lu(t.COLORS.DIR_LIGHT,t.LIGHTING.DIRECTIONAL.day);Tt.position.set(50,100,30),Y.add(Tt);const ht=new Dg(Y,r);f&&(ht.update(0,0,t.CHUNKS.RENDER_DISTANCE),s.style.display="none");const gt=new v0(Y),tn=new S0(Y),Oe=new Lg(G.domElement),qr=document.getElementById("hud"),Kr=document.getElementById("crosshair");Kr.style.display="block",document.getElementById("health-bar-wrap").style.display="block",document.getElementById("hotbar-bar").style.display="flex";function En(F){const ee=Math.cos(F.pitch);return{x:-Math.sin(-F.yaw)*ee,y:Math.sin(F.pitch),z:-Math.cos(-F.yaw)*ee}}function zi(F){const ee={[pt.DAWN]:t.COLORS.SKY_DAWN,[pt.DAY]:t.COLORS.SKY_DAY,[pt.DUSK]:t.COLORS.SKY_DUSK,[pt.NIGHT]:t.COLORS.SKY_NIGHT},se={[pt.DAWN]:.5,[pt.DAY]:.6,[pt.DUSK]:.35,[pt.NIGHT]:.1},Ee={[pt.DAWN]:.6,[pt.DAY]:.8,[pt.DUSK]:.4,[pt.NIGHT]:.05},De=ee[F]||t.COLORS.SKY_DAY;G.setClearColor(De),Y.fog.color.set(De),Ye.intensity=se[F]||.6,Tt.intensity=Ee[F]||.8}const Mr=document.getElementById("map-panel"),Yr=document.getElementById("map-title"),Hi=document.getElementById("map-canvas-2d"),$r=document.getElementById("map-explored"),Gi=new yx((F,ee)=>Ot(F,ee,i.seed),(F,ee)=>Hs(F,ee,i.seed),i.seed),xi=new Mx(Gi,Hi);function jr(F){if(Mr.style.display=K.isOpen?"block":"none",!K.isOpen)return;const ee=ae.getActiveQuests().map(Ee=>Ee.id),se=cx(xe,ee);xi.draw({playerPos:F,fogOfWar:P,buildings:yl,npcs:it.getAllNPCs(),stations:El,landmarks:Ts,questMarkers:se}),Yr.textContent=xi.zoom===lr.OVERVIEW?"World Map [M]":"Detail Map [M]",$r.textContent=Math.round(K.getExploredPercentage())}const Zr=document.getElementById("skill-panel"),Ks=document.getElementById("skill-tree-nav"),Ys=document.getElementById("skill-tree-nodes");function ii(){if(Zr.style.display=B.isOpen?"block":"none",!B.isOpen)return;const F=B.getCurrentTree();Zr.querySelector("h2").textContent=`Skills [Tab] — ${F.name} (${B.getSkillPoints()} pts)`,Ks.textContent=`← ${B.currentTreeIndex+1}/${fl.length} →`;const ee=B.getNodes();Ys.innerHTML=ee.map((se,Ee)=>{const De=Ee===B.selectedNodeIndex?" selected":"",ce=se.unlocked?" unlocked":se.available?" available":" locked",ot=se.requires.length?` (needs: ${se.requires.join(", ")})`:"";return`<div class="node${De}${ce}">${se.unlocked?"✓":se.available?"○":"·"} ${se.name} [${se.cost}] — ${se.description}${ot}</div>`}).join("")}function $s(){for(;M.skillPoints>0;)M.spendSkillPoint(),D.addPoints(1)}const Qr=document.getElementById("crafting-panel"),y=document.getElementById("crafting-list"),N=document.getElementById("quest-list");function z(){if(Qr.style.display=te.isOpen?"block":"none",!te.isOpen)return;const F=Qr.querySelector("h2");if(F){const ce=te._station?`Station: ${te._station.charAt(0).toUpperCase()+te._station.slice(1)}`:"Hand Crafting";F.textContent=`Crafting [E] — ${ce}`}const ee=te.getAllRecipes();te.selectedIndex>=ee.length&&(te.selectedIndex=Math.max(0,ee.length-1));const se=te.getAvailableRecipes(g),Ee=new Set(se.map(ce=>ce.name));y.innerHTML=ee.map((ce,ot)=>{const Xe=ot===te.selectedIndex?" selected":"",Lt=Ee.has(ce.name)?" available":" unavailable",On=ce.inputs.map(nn=>`${nn.count} ${nn.type}`).join(", "),Ft=ce.outputs.map(nn=>`${nn.count} ${nn.type}`).join(", ");return`<div class="recipe${Xe}${Lt}" data-idx="${ot}">${ce.name}: ${On} → ${Ft}</div>`}).join("");const De=y.querySelector(".recipe.selected");De&&De.scrollIntoView({block:"nearest"})}function H(){const F=ae.getActiveQuests();if(F.length===0){const ee=ae.quests.filter(se=>ae.getStatus(se.id)==="available");if(ee.length===0){N.innerHTML='<div style="color:#888">No active quests. Explore the world!</div>';return}N.innerHTML=ee.map(se=>`
        <div class="quest"><span class="quest-name">${se.name}</span> (available)<br>
        <span style="color:#888">${se.description}</span></div>
      `).join("");return}N.innerHTML=F.map(ee=>{const se=ee.objectives.map(Ee=>`<div class="objective${Ee.isComplete()?" complete":""}">• ${Ee.description} (${Ee.progress}/${Ee.target})</div>`).join("");return`<div class="quest"><span class="quest-name">${ee.name}</span><br>${se}</div>`}).join("")}ae.activate("ch1_embers");const U=t.QUESTS.AUTO_ACTIVATE_SIDE_COUNT;let oe=0;for(const F of md){if(oe>=U)break;ae.activate(F.id)&&oe++}const xe=new Nv,_e=new Ux;if(e){const F=Ni.find(ee=>ee.id===e);F&&F.applyState({questSystem:ae,inventory:g,survivalStats:_,experienceSystem:M,player:m,progress:_e,factionSystem:Ie,getHeightAt:Ot,seed:i.seed})}function Re(){if(document.getElementById("progress-panel").style.display==="none")return;const ee=_e.getPercentage();document.getElementById("progress-fill").style.width=`${ee}%`,document.getElementById("progress-pct").textContent=`${ee}% Complete`;const se=_e.getBreakdown().filter(Ee=>Ee.total>0);document.getElementById("progress-list").innerHTML=se.map(Ee=>{const De=Ee.current>=Ee.total;return`<div style="color:${De?"#6a6":"#aaa"}">${De?"✓":"○"} ${Ee.label}: ${Ee.current}/${Ee.total}</div>`}).join("")}let Ve=performance.now(),ze=!1;function Ne(F){requestAnimationFrame(Ne);const ee=Math.min((F-Ve)/1e3,.1);Ve=F;const se=ee*t.SURVIVAL.GAME_TIME_SCALE;if(R.tick(se),T.isDead(_)&&!v.enabled){document.getElementById("death-screen").style.display="flex",Oe.consumeKeyPress("Enter")&&(T.respawn(_,m,J),document.getElementById("death-screen").style.display="none"),zi(R.getPhase()),G.render(Y,ue);return}Oe.consumeKeyPress("F4")&&(v.toggle(),pe=v.enabled?"Creative Mode ON — fly with Space/Shift, invincible":"Creative Mode OFF",le=t.DIALOGUE.SHORT_DURATION);const Ee=Hs(m.position.x,m.position.z,i.seed);_.setBiomeTemperature(Ee.type),I.tick(se),v.noHunger()||_.tick(nx(se,b)),P.reveal(m.position.x,m.position.z,t.FOG.REVEAL_RADIUS);for(const w of Ts){const q=m.position.x-w.position.x,we=m.position.z-w.position.z;Math.sqrt(q*q+we*we)<w.radius*.5&&xi.addVisitedMarker(w.position.x,w.position.z,w.name)}if(Oe.consumeKeyPress("Escape")){let w=!1;Et&&(St(),w=!0),te.isOpen&&(te.toggle(),z(),w=!0),document.getElementById("inventory-panel").style.display!=="none"&&(document.getElementById("inventory-panel").style.display="none",w=!0),K.isOpen&&(K.toggle(),w=!0),B.isOpen&&(B.toggle(),w=!0),n.isOpen&&(n.toggleOpen(),w=!0);const q=document.getElementById("quest-log");q&&q.style.display==="block"&&(q.style.display="none",w=!0),w&&G.domElement.requestPointerLock()}const De=kx({inventory:document.getElementById("inventory-panel").style.display!=="none",crafting:te.isOpen,questLog:document.getElementById("quest-log").style.display==="block",skillTree:B.isOpen,map:K.isOpen,settings:n.isOpen});Oe.menuOpen=De,De&&document.pointerLockElement&&document.exitPointerLock();for(const w of Ts)Ms(m.position,w.position,w.radius)&&_e.visitLandmark(w.id);if(Oe.locked){const w=Oe.consumeMouse(),q=n.getMouseSensitivity(t.CAMERA.MOUSE_SENSITIVITY);m.yaw+=w.dx*q,m.pitch-=w.dy*q,m.pitch=Math.max(-t.CAMERA.MAX_PITCH,Math.min(t.CAMERA.MAX_PITCH,m.pitch))}Oe.consumeKeyPress("KeyV")&&m.toggleCamera(),m.setCrouch(!!Oe.keys.KeyC),A.setGuard(!!Oe.keys.KeyG);for(let w=0;w<8;w++)Oe.consumeKeyPress(`Digit${w+1}`)&&$.selectSlot(w);const ce=Oe.consumeScroll();ce>0?$.scrollNext():ce<0&&$.scrollPrev();const Xe=g.getItems().filter(w=>Aa[w.type]!==void 0);for(let w=0;w<Math.min(Xe.length,8);w++)$.setSlot(w,{type:Xe[w].type,count:Xe[w].count});for(let w=Xe.length;w<8;w++)$.clearSlot(w);if($s(),re.tick(se),X.tick(se),Oe.consumeKeyPress("Backquote")){const w=document.getElementById("progress-panel");w.style.display=w.style.display==="none"?"block":"none"}if(Re(),Oe.consumeKeyPress("KeyM")&&(K.toggle(),K.isOpen||G.domElement.requestPointerLock()),K.isOpen&&Oe.consumeKeyPress("KeyZ")&&xi.toggleZoom(),K.isOpen?jr(m.position):Mr.style.display="none",Oe.consumeKeyPress("KeyP")){n.toggleOpen();const w=document.getElementById("settings-panel");w&&(w.style.display=n.isOpen?"block":"none",n.isOpen&&(w.innerHTML=`
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
          `,document.getElementById("sens-slider").addEventListener("input",q=>{n.setSensitivity(parseFloat(q.target.value)),document.getElementById("sens-val").textContent=n.sensitivity.toFixed(1)+"x"}),document.getElementById("fov-slider").addEventListener("input",q=>{n.setFov(parseInt(q.target.value)),document.getElementById("fov-val").textContent=n.fov,ue.fov=n.fov,ue.updateProjectionMatrix()}),document.getElementById("tutorial-toggle").addEventListener("change",()=>{n.toggleTutorial()})))}Oe.consumeKeyPress("Tab")&&(B.toggle(),ii(),B.isOpen||G.domElement.requestPointerLock()),B.isOpen&&(Oe.consumeKeyPress("ArrowRight")&&(B.nextTree(),ii()),Oe.consumeKeyPress("ArrowLeft")&&(B.prevTree(),ii()),Oe.consumeKeyPress("ArrowDown")&&(B.selectedNodeIndex++,ii()),Oe.consumeKeyPress("ArrowUp")&&(B.selectedNodeIndex=Math.max(0,B.selectedNodeIndex-1),ii()),Oe.consumeKeyPress("Enter")&&(B.unlockSelected(),ii()));const Lt=Av(r,m.position);if(te.setStation(Lt),Oe.consumeKeyPress("KeyE")&&(te.toggle(),z(),te.isOpen||G.domElement.requestPointerLock()),Oe.consumeKeyPress("KeyI")){const w=document.getElementById("inventory-panel"),q=w.style.display!=="none";w.style.display=q?"none":"block",q&&G.domElement.requestPointerLock()}if(document.getElementById("inventory-panel").style.display!=="none"){const w=document.getElementById("inventory-grid");let q="";const we=g.size||36;for(let He=0;He<we;He++){const Mt=g.getSlot?g.getSlot(He):null,Ht=Mt?Uo(Mt.type):"",Sn=Mt?Mt.type.replace(/_/g," "):"",Dn=Mt?Mt.count:"";q+=`<div data-inv-slot="${He}" style="width:56px;height:56px;background:rgba(30,30,40,0.8);border:2px solid #444;border-radius:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;${Me===He?"border-color:#c9a84c;background:rgba(60,60,20,0.5)":""}">
          <div style="font-size:20px;line-height:1">${Ht}</div>
          <div style="font-size:8px;color:#aaa;overflow:hidden;max-width:52px;text-align:center;white-space:nowrap">${Sn}</div>
          <div style="font-size:9px;color:#888">${Dn}</div>
        </div>`}w.innerHTML=q,w.onclick=He=>{const Mt=He.target.closest("[data-inv-slot]");if(!Mt)return;const Ht=parseInt(Mt.getAttribute("data-inv-slot"));Me===-1?Me=Ht:(g.moveSlot&&g.moveSlot(Me,Ht),Me=-1)};const Ue=Ie.getAllFactions().map(He=>{const Mt=Ie.getReputation(He.id),Ht=Ie.getTier(He.id);return`<div><span style="color:#c9a84c">${He.name}</span> <span style="color:#888">${Ht} (${Mt})</span></div>`}).join("");document.getElementById("inventory-extra").innerHTML='<div style="border-top:1px solid #444;padding-top:6px;color:#aaa;font-size:11px;margin-top:4px">Factions</div>'+Ue}if(Oe.consumeKeyPress("KeyQ")){const w=document.getElementById("quest-log"),q=w.style.display==="block";w.style.display=q?"none":"block",q&&G.domElement.requestPointerLock()}if(document.getElementById("quest-log").style.display==="block"&&H(),te.isOpen&&(Oe.consumeKeyPress("ArrowDown")&&(te.selectNext(),z()),Oe.consumeKeyPress("ArrowUp")&&(te.selectPrev(),z()),Oe.consumeKeyPress("Enter")&&te.craftSelected(g)&&z()),Oe.consumeKeyPress("KeyT")&&!k.isActive()){const w=No(it,m.position,t.NPC.INTERACT_RANGE);if(w){const q=w.getDialogue(ae),we=[];if(_d(w,ae)&&we.push({text:"Accept quest",response:null,action:"accept_quest",npcId:w.id}),w.trades&&w.trades.length>0)for(const Ue of w.trades){const He=g.count(Ue.give.type)>=Ue.give.count,Mt=`Trade ${Ue.give.count} ${Ue.give.type.replace(/_/g," ")} → ${Ue.receive.count} ${Ue.receive.type.replace(/_/g," ")}${He?"":" (need more)"}`;we.push({text:Mt,response:He?`Traded! Received ${Ue.receive.count} ${Ue.receive.type.replace(/_/g," ")}.`:"You don't have enough to trade.",action:He?"trade":null,trade:Ue})}we.push(...Nx(w.id,w.name)),k.startDialogue(`${w.name}: ${q}`,we),_e.talkToNPC(w.id),ae.advanceObjective("ch2_roads","ch2_meet_npc",1)}}if(k.isActive()){const w=document.getElementById("dialogue-panel");w.style.display="block";const q=k.getState();document.getElementById("dialogue-message").innerHTML=k.getMessage();const we=k.getChoices();if(q==="choices"){if(document.getElementById("dialogue-choices").innerHTML=we.map((Ue,He)=>`<div style="${He===k.selectedIndex?"color:#c9a84c;":"color:#888;"}cursor:pointer;padding:3px 0">${He===k.selectedIndex?"▸ ":"  "}${Ue.text}</div>`).join(""),Oe.consumeKeyPress("ArrowDown")&&k.selectNext(),Oe.consumeKeyPress("ArrowUp")&&k.selectPrev(),Oe.consumeKeyPress("Enter")){const Ue=we[k.selectedIndex];if(Ue&&Ue.action==="accept_quest"){const He=No(it,m.position,t.NPC.INTERACT_RANGE);He&&Lv(He,ae),k.dismiss(),pe="Quest accepted!",le=t.DIALOGUE.SHORT_DURATION}else if(Ue&&Ue.action==="trade"&&Ue.trade){const He=Ue.trade;g.remove(He.give.type,He.give.count)&&(g.add(He.receive.type,He.receive.count),k.dismiss(),pe=`Traded! Received ${He.receive.count} ${He.receive.type.replace(/_/g," ")}`,le=t.DIALOGUE.SHORT_DURATION)}else k.selectChoice(k.selectedIndex)}}else q==="response"&&(document.getElementById("dialogue-choices").innerHTML='<div style="color:#666;padding:6px 0;font-style:italic">Press Enter to continue...</div>',Oe.consumeKeyPress("Enter")&&k.acknowledge());(Oe.consumeKeyPress("Escape")||Oe.consumeKeyPress("KeyT"))&&k.dismiss()}else document.getElementById("dialogue-panel").style.display="none";if(le>0&&(le-=ee,le<=0&&(pe="")),Oe.consumeKeyPress("F5"))try{const w=ev(r,m,g,{survivalStats:_,quests:ae});localStorage.setItem("lotry_save",w),pe="Game saved!",le=t.DIALOGUE.SAVE_FEEDBACK_DURATION}catch{pe="Save failed!",le=t.DIALOGUE.SAVE_FEEDBACK_DURATION}if(Oe.consumeKeyPress("F9"))try{const w=localStorage.getItem("lotry_save");if(w){const q=tv(w);Object.assign(m.position,q.player.position),m.velocity=q.player.velocity,m.yaw=q.player.yaw,m.pitch=q.player.pitch,m.onGround=q.player.onGround;for(const we of g.getItems())g.remove(we.type,we.count);for(const we of q.inventory.getItems())g.add(we.type,we.count);q.survivalStats&&Object.assign(_,q.survivalStats),q.questData&&ae.deserialize(q.questData);for(const we of ht.meshes.keys())ht.dirty.add(we);pe="Game loaded!",le=t.DIALOGUE.SAVE_FEEDBACK_DURATION}else pe="No save found",le=t.DIALOGUE.SAVE_FEEDBACK_DURATION}catch{pe="Load failed!",le=t.DIALOGUE.SAVE_FEEDBACK_DURATION}if(Oe.consumeKeyPress("KeyF")&&$0(g,_,X),Oe.consumeKeyPress("KeyX")){const w=Ee.type===ct.MIRKWOOD,q=me.useRelic(_.focus);if(q){_e.useRelic();const we=Xv(q.focusCost,w);if(_.focus=Math.max(0,_.focus-we),q.ability===bs.HEAL_WOUND?(_.health=Math.min(_.maxHealth,_.health+20),pe="Healing light surrounds you..."):q.ability===bs.WARD_LIGHT?(re.reduceFear(30),pe="A warm light pushes back the darkness."):q.ability===bs.CALM_FEAR?(re.reduceFear(50),pe="A calm washes over you."):pe=`Used: ${me.getEquippedRelic().name}`,w){pe="The corruption resists your power... "+pe;const Ue=qv();if(Math.random()<Ue){const He=L.spawn(m.position,Ee.type);He&&ne.push(He)}}le=t.DIALOGUE.SHORT_DURATION}else me.getEquippedRelic()&&(pe=me.getEquippedRelic().cooldown>0?"Relic on cooldown":"Not enough focus",le=t.DIALOGUE.SAVE_FEEDBACK_DURATION)}me.tick(se);const On=At.findNearby(m.position,5);for(const w of On)if(w.discover()){for(const q of w.reward)g.add(q.type,q.count);M.addExperience(t.QUESTS.XP_DISCOVERY,"exploration"),(w.type==="lore_book"||w.type==="inscription")&&lt.addEntry(new pd({id:w.id,title:w.id.replace(/_/g," "),text:`Found near ${Math.floor(w.position.x)}, ${Math.floor(w.position.z)}`,category:w.type==="lore_book"?_l.HISTORY:_l.INSCRIPTION})),_e.discover(w.id),pe=`Discovered: ${w.type.replace(/_/g," ")}!`,le=t.DIALOGUE.SHORT_DURATION}for(const w of Lr)w.restored&&!Be.isUnlocked(w.id)&&Be.unlockWaypoint({id:w.id,name:w.name,position:{...w.position}});const Ft=Fe.evaluate(r,m.position),nn=Bv(ie);Ft.warmth+(nn.temperature||0)*.1,bt.tick(se);const at=Oe.getMovementInput();if(v.canFly()){const w=En(m),q=v.flySpeed*ee;at.forward&&(m.position.x+=w.x*q,m.position.y+=w.y*q,m.position.z+=w.z*q),at.back&&(m.position.x-=w.x*q,m.position.y-=w.y*q,m.position.z-=w.z*q),at.left&&(m.position.x+=w.z*q,m.position.z-=w.x*q),at.right&&(m.position.x-=w.z*q,m.position.z+=w.x*q),Oe.getJump()&&(m.position.y+=q),Oe.keys.ShiftLeft&&(m.position.y-=q),m.velocity.y=0}else{const w=zv(i.raceId,Ee.type),q=_.getFractureSpeedMultiplier(),we=Ox(r,m.position),Ue=Dx(we),He=Math.floor(m.position.x),Mt=Math.floor(m.position.z),Ht=Ot(He,Mt,i.seed);let Sn=1;if(at.forward||at.right){const rn=Math.cos(m.yaw),yi=Math.sin(m.yaw),Nd=Math.floor(m.position.x+yi*2),Ud=Math.floor(m.position.z+rn*2),kd=Ot(Nd,Ud,i.seed),Fd=Math.abs(kd-Ht);Sn=Lx(Fd)}if(Oe.keys.ShiftLeft&&at.forward&&!m.crouching&&_.stamina>0){const rn=m.moveSpeed,yi=Hv(i.raceId);m.moveSpeed*=t.SURVIVAL.SPRINT_MULTIPLIER*yi*w*q*Ue*Sn,m.applyMovementInput(at,ee),m.moveSpeed=rn,_.applySprint(se)}else{const rn=m.moveSpeed;m.moveSpeed*=w*q*Ue*Sn,m.applyMovementInput(at,ee),m.moveSpeed=rn}if(we){const rn=cg(m.position.x,m.position.z);rn&&(m.position.x+=rn.x*ee,m.position.z+=rn.z*ee)}Oe.getJump()&&m.onGround&&(m.velocity.y=t.PHYSICS.JUMP_VELOCITY,m.onGround=!1);const Tr=m.velocity.y,js=m.onGround;_g(m,ee),vg(m,r,ee),!js&&m.onGround&&Tr<0&&_.checkFallFracture(Tr)}F0(m.position,t.WORLD.BOUNDARY_EXTENT);const zt=En(m),Xt={x:m.position.x,y:m.position.y+t.CAMERA.FIRST_PERSON_EYE_HEIGHT,z:m.position.z};if(Oe.locked&&Oe.consumeRightClick()){const w=il(r,Xt,zt,6);if(w){const q=r.getBlock(w.blockPos.x,w.blockPos.y,w.blockPos.z);if(q===x.DOOR||q===x.DOOR_OPEN)xl(r,w.blockPos.x,w.blockPos.y,w.blockPos.z)&&(ht.markDirty(w.blockPos.x,w.blockPos.y,w.blockPos.z),ht.markDirty(w.blockPos.x,w.blockPos.y+1,w.blockPos.z),ht.markDirty(w.blockPos.x,w.blockPos.y-1,w.blockPos.z));else if(q===x.CHEST)Pe(w.blockPos.x,w.blockPos.y,w.blockPos.z);else{const we=$.getSelectedItem(),Ue=we?we.type:null;if(Ue&&Aa[Ue]!==void 0){const He=w.blockPos.x+w.normal.x,Mt=w.blockPos.y+w.normal.y,Ht=w.blockPos.z+w.normal.z;Ng(r,g,He,Mt,Ht,Ue)&&ht.markDirty(He,Mt,Ht)}}}}if(ve+=se,ve>=10){ve=0;const w=ne.filter(we=>!we.isDead()).length,q=L.trySpawn({phase:R.getPhase(),playerPos:m.position,existingCount:w,getHeight:(we,Ue)=>Ot(we,Ue,i.seed)});ne.push(...q)}const Bt=(w,q)=>Ot(w,q,i.seed);for(const w of ne)if(!w.isDead()){const q=w.aggroRange;w.aggroRange=Rv(w,m.crouching),w.updateAI(m.position,ee,Bt,r),w.aggroRange=q}if(R.getPhase()===pt.NIGHT&&re.addFear(se*.5),!v.isInvincible()){for(const w of ne)if(!w.isDead()&&w.canAttack(m.position)){let q=w.performAttack();q=ix(q,b),A._guarding&&(q*=.5),q=Mv(q,E),_.takeDamage(q)}}if(Oe.locked&&Oe.keys.mouseLeft){const w=il(r,Xt,zt,6);if(w){const{x:q,y:we,z:Ue}=w.blockPos,He=r.getBlock(q,we,Ue);if(mx(He))Oe.consumeLeftClick()&&xl(r,q,we,Ue)&&(ht.markDirty(q,we,Ue),ht.markDirty(q,we+1,Ue),ht.markDirty(q,we-1,Ue));else if($e.startBreak(q,we,Ue,He),$e.tick(ee)){const Mt=E.get("main_hand");let Ht=Mt&&Mt.toolType||null;if(!Ht){const Sn=["iron_pickaxe","copper_pickaxe","stone_pickaxe","pickaxe"];for(const Dn of Sn)if(g.count(Dn)>0){Ht="pickaxe";break}}if(ng(He,Ht)){const Sn=eg(He);r.setBlock(q,we,Ue,0);for(const Dn of Sn)nt({x:q,y:we,z:Ue},Dn.type,Dn.count);ht.markDirty(q,we,Ue)}}}else if($e.cancel(),Oe.consumeLeftClick()){let q=Tv(E);if(q<=2){const we=[{type:"iron_sword",damage:12},{type:"iron_hammer",damage:14},{type:"dagger",damage:6},{type:"spear",damage:10},{type:"axe",damage:8},{type:"stone_axe",damage:6},{type:"hammer",damage:10}];for(const Ue of we)if(g.count(Ue.type)>0){q=Ue.damage;break}q<=2&&(q=5)}A.playerAttack(m.position,zt,ne,q)}}else $e.cancel(),Oe.consumeLeftClick();for(let w=ne.length-1;w>=0;w--)if(ne[w].isDead()){const q=Fg(ne[w].type);for(const we of q)nt(ne[w].position,we.type,we.count);M.addExperience(t.COMBAT.XP_PER_KILL,"combat"),Ie.addReputation("road_wardens",t.COMBAT.FACTION_REP_PER_KILL),_e.killEnemy(ne[w].type),ne.splice(w,1)}!ze&&R.day>=2&&(ze=!0,ae.advanceObjective("ch1_embers","ch1_survive",1),M.addExperience(t.QUESTS.XP_FIRST_NIGHT,"quest"),_e.surviveNight()),R.getPhase()===pt.DAWN&&R.day>_e.nightsSurvived+1&&_e.surviveNight();const Vi=Lr.find(w=>w.id==="starter_watchpost");Vi&&Ms(m.position,Vi.position,t.RESTORATION.HINT_RANGE)&&ae.advanceObjective("ch1_embers","ch1_reach_outpost",1);const zn=xe.checkTriggers(m.position);for(const w of zn)ae.activate(w.questId),(w.type==="reach_location"||w.type==="explore_area")&&(ae.advanceObjective(w.questId,w.objectiveId,1),M.addExperience(t.QUESTS.XP_EXPLORATION,"exploration"));if(Oe.consumeKeyPress("KeyR")){for(const w of Lr)if(!w.restored&&Ms(m.position,w.position,t.RESTORATION.INTERACT_RANGE)){if(w.restore(g)){const q=Wv(w.id);pe=q.message,le=t.DIALOGUE.DISPLAY_DURATION,M.addExperience(t.QUESTS.XP_RESTORATION,"restoration"),_e.restoreSite(w.id);const Ue={starter_watchpost:"road_wardens",roadside_hall:"road_wardens",mountain_workshop:"dwarven_crafters",forest_beacon:"woodland_guardians",ward_bastion:"rivendell_keepers"}[w.id];Ue&&Ie.addReputation(Ue,50);const He=q.merchant;He.position={...w.position};const Mt=new dn(He);it.addNPC(Mt);const Sn={starter_watchpost:"small",roadside_hall:"medium",mountain_workshop:"medium",forest_beacon:"small",ward_bastion:"large"}[w.id]||"small",Dn=Ot(Math.floor(w.position.x),Math.floor(w.position.z),i.seed);iv(r,{x:w.position.x,y:Dn+1,z:w.position.z},Sn);const Tr=Math.floor(w.position.x),js=Math.floor(w.position.z);for(let rn=-10;rn<=10;rn+=8)for(let yi=-10;yi<=10;yi+=8)ht.markDirty(Tr+rn,Dn+1,js+yi);w.id==="starter_watchpost"&&ae.advanceObjective("ch1_embers","ch1_activate_ward",1)}else pe=`Need materials to restore ${w.name}`,le=t.DIALOGUE.SHORT_DURATION;break}}const xd=(w,q)=>Ot(w,q,i.seed);for(const w of Po)w.updateAI(ee,xd,r);for(let w=Te.length-1;w>=0;w--){const q=Te[w];if(q.lifetime-=ee,q.bobPhase+=ee*3,q.lifetime<=0){Te.splice(w,1);continue}const we=m.position.x-q.position.x,Ue=m.position.y-q.position.y,He=m.position.z-q.position.z;we*we+Ue*Ue+He*He<=Ge*Ge&&(g.add(q.type,q.count),pe=`Picked up ${q.count} ${q.type.replace(/_/g," ")}`,le=1.5,Te.splice(w,1))}for(const w of ke)Y.remove(w),w.geometry.dispose();ke=[];const yd=new vi(.3,.3,.3);for(const w of Te){const q=new Xs({color:13215820}),we=new fn(yd,q);we.position.set(w.position.x,w.position.y+Math.sin(w.bobPhase)*.15,w.position.z),we.rotation.y=w.bobPhase*.5,Y.add(we),ke.push(we)}gt.sync(ne),tn.sync(Po),zi(R.getPhase());const Ed=I.getVisibilityModifier(),Ya=dl(Ed);Y.fog.near=Ya.near,Y.fog.far=Ya.far;const Sd=Math.sqrt((m.position.x-t.CORRUPTION.CENTER_X)**2+(m.position.z-t.CORRUPTION.CENTER_Z)**2),$a=Math.max(0,1-Sd/t.CORRUPTION.RADIUS);if($a>t.CORRUPTION.FOG_THRESHOLD){const w=hx($a);Y.fog.color.setRGB(w.r,w.g,w.b)}if(ue.rotation.order="YXZ",ue.rotation.y=-m.yaw,ue.rotation.x=m.pitch,m.cameraMode==="third_person_behind"){const w=t.CAMERA.THIRD_PERSON_DISTANCE,q=t.CAMERA.THIRD_PERSON_EYE_HEIGHT,we=En(m);ue.position.set(m.position.x-we.x*w,m.position.y+q-we.y*w,m.position.z-we.z*w)}else ue.position.set(m.position.x,m.position.y+t.CAMERA.FIRST_PERSON_EYE_HEIGHT,m.position.z);d.update(m.position.x,m.position.z),s.style.display!=="none"&&!d.isLoading()&&(d.consumeMeshDirtyChunks(),ht.update(m.position.x,m.position.z,t.CHUNKS.RENDER_DISTANCE),s.style.display="none");const ja=d.consumeMeshDirtyChunks();ja.size>0&&ht.invalidateChunks(ja),s.style.display==="none"&&ht.update(m.position.x,m.position.z,t.CHUNKS.RENDER_DISTANCE),G.render(Y,ue);const Md=R.getPhase(),Ct=K0({survivalStats:_,questSystem:ae,compass:be,playerYaw:m.yaw,playerPos:m.position,fearSystem:re,experienceSystem:M,statusEffects:X}),Td=g.getItems().slice(0,8).map(w=>`${w.type}:${w.count}`).join(" "),Za=ne.length,bd=m.crouching?" [Crouching]":"",Ad=A._guarding?" [Guard]":"",Rd=I.current,wd=Math.round(P.getRevealedPercentage()),Cd=Ct.activeQuestName?` | Quest: ${Ct.activeQuestName}`:"",Id=Ct.compassCardinal?` ${Ct.compassCardinal}`:"",Qa=Ct.fearLevel,Od=document.getElementById("hotbar-bar");let Ja="";for(let w=0;w<8;w++){const q=$.getSlot(w),we=w===$.selectedSlot?" selected":"",Ue=q?Uo(q.type):"",He=q?q.type.replace(/_/g," "):"",Mt=q?q.count:"";Ja+=`<div class="slot${we}"><span class="num">${w+1}</span><div style="font-size:18px">${Ue}</div><span class="item-name">${He}</span><span class="item-count">${Mt}</span></div>`}Od.innerHTML=Ja;const ec=No(it,m.position,t.NPC.INTERACT_RANGE),Dd=ec?`<div style="color:#c9a84c;margin-top:4px">[T] Talk to ${ec.name}</div>`:"",Ld=pe?`<div style="color:#eee;background:rgba(0,0,0,0.6);padding:6px 10px;margin-top:6px;border-radius:4px;max-width:400px">${pe}</div>`:"";let tc="";for(const w of Lr)if(!w.restored&&Ms(m.position,w.position,t.RESTORATION.HINT_RANGE)){const q=w.requirements.map(we=>`${we.count} ${we.type.replace(/_/g," ")}`).join(", ");tc=`<div style="color:#aed581;margin-top:4px">[R] Restore ${w.name} (needs: ${q})</div>`;break}const Pd=Ct.statusEffects.length>0?`<div style="margin-top:2px;font-size:11px;color:#aed581">${Ct.statusEffects.map(w=>`${w.type.replace(/_/g," ")} ${Math.ceil(w.remaining)}s`).join(" | ")}</div>`:"";qr.innerHTML=`
      <div>${i.characterName?i.characterName+" — ":""}${u.name} ${C.name} Lv${Ct.level} | Day ${R.day} — ${Md} | ${Ee.name} | ${Rd}${Id}${bd}${Ad}${v.enabled?" [CREATIVE]":""}</div>
      <div>HP: ${Ct.health}/${Ct.maxHealth} | STA: ${Ct.stamina} | HUN: ${Ct.hunger} | FOC: ${Ct.focus} | ${Ct.tempLabel}${Qa>0?` | Fear: ${Qa}`:""}${Cd}</div>
      <div style="margin-top:2px;font-size:11px;color:#888">Pos: ${Ct.playerX}, ${Ct.playerZ} | ${Td||"empty"}${Za?` | Enemies: ${Za}`:""} | Map: ${wd}%</div>
      ${Pd}
      ${Dd}${tc}${Ld}
    `,document.getElementById("health-bar-fill").style.width=`${Ct.health/Ct.maxHealth*100}%`,document.getElementById("stamina-bar-fill").style.width=`${Ct.stamina}%`,document.getElementById("hunger-bar-fill").style.width=`${Ct.hunger}%`,$e.isBreaking()?(document.getElementById("break-bar").style.display="block",document.getElementById("break-fill").style.width=`${Math.round($e.getProgress()*100)}%`):document.getElementById("break-bar").style.display="none"}window.addEventListener("resize",()=>{G.setSize(window.innerWidth,window.innerHeight),ue.aspect=window.innerWidth/window.innerHeight,ue.updateProjectionMatrix()}),requestAnimationFrame(Ne)}
