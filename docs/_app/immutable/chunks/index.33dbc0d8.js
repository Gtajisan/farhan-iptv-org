function S(){}const ht=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function V(){return Object.create(null)}function C(t){t.forEach(Z)}function K(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function Gt(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function pt(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t){let e;return tt(t,n=>e=n)(),e}function Jt(t,e,n){t.$$.on_destroy.push(tt(e,n))}function Kt(t,e,n,i){if(t){const s=et(t,e,n,i);return t[0](s)}}function et(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Ut(t,e,n,i,s,l){if(s){const r=et(e,n,i,l);t.p(r,s)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Yt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Zt(t){return t??""}const nt=typeof window<"u";let yt=nt?()=>window.performance.now():()=>Date.now(),Q=nt?t=>requestAnimationFrame(t):S;const A=new Set;function it(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&Q(it)}function gt(t){let e;return A.size===0&&Q(it),{promise:new Promise(n=>{A.add(e={c:t,f:n})}),abort(){A.delete(e)}}}let F=!1;function $t(){F=!0}function wt(){F=!1}function bt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:bt(1,s,h=>e[n[h]].claim_order,u))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(r[c],f)}}function vt(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=ot("style");return kt(st(t),e),e.sheet}function kt(t,e){return vt(t.head||t,e),e.sheet}function Nt(t,e){if(F){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function te(t,e,n){F&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function U(t){return document.createTextNode(t)}function ne(){return U(" ")}function ie(){return U("")}function se(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function re(t){return function(e){return e.preventDefault(),t.call(this,e)}}function oe(t){return function(e){e.target===this&&t.call(this,e)}}function St(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ce(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:St(t,i,e[i])}function Ct(t){return Array.from(t.childNodes)}function Dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,s=!1){Dt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function lt(t,e,n,i){return ct(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function le(t,e,n){return lt(t,e,n,ot)}function ue(t,e,n){return lt(t,e,n,At)}function Mt(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>U(e),!0)}function ae(t){return Mt(t," ")}function fe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _e(t,e){t.value=e??""}function de(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function he(t,e,n){t.classList[n?"add":"remove"](e)}function ut(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function me(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function pe(t,e){return new t(e)}const z=new Map;let B=0;function Tt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:Et(e),rules:{}};return z.set(t,n),n}function X(t,e,n,i,s,l,r,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);u+=y*100+`%{${r(g,1-g)}}
`}const f=u+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Tt(f)}_${o}`,h=st(t),{stylesheet:a,rules:d}=z.get(h)||jt(h,t);d[_]||(d[_]=!0,a.insertRule(`@keyframes ${_} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,B+=1,_}function Ot(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),B-=s,B||Pt())}function Pt(){Q(()=>{B||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&rt(e)}),z.clear())})}let O;function j(t){O=t}function D(){if(!O)throw new Error("Function called outside component initialization");return O}function ye(t){D().$$.on_mount.push(t)}function ge(t){D().$$.after_update.push(t)}function $e(t){D().$$.on_destroy.push(t)}function we(){const t=D();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=ut(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function be(t,e){return D().$$.context.set(t,e),e}function xe(t){return D().$$.context.get(t)}function ve(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const N=[],Y=[],q=[],I=[],at=Promise.resolve();let J=!1;function ft(){J||(J=!0,at.then(_t))}function Ee(){return ft(),at}function H(t){q.push(t)}function ke(t){I.push(t)}const W=new Set;let k=0;function _t(){if(k!==0)return;const t=O;do{try{for(;k<N.length;){const e=N[k];k++,j(e),Rt(e.$$)}}catch(e){throw N.length=0,k=0,e}for(j(null),N.length=0,k=0;Y.length;)Y.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];W.has(n)||(W.add(n),n())}q.length=0}while(N.length);for(;I.length;)I.pop()();J=!1,W.clear(),j(t)}function Rt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let T;function qt(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function G(t,e,n){t.dispatchEvent(ut(`${e?"intro":"outro"}${n}`))}const L=new Set;let b;function Ne(){b={r:0,c:[],p:b}}function Ae(){b.r||C(b.c),b=b.p}function dt(t,e){t&&t.i&&(L.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),b.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const zt={duration:0};function Se(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,u=null;function f(){u&&Ot(t,u)}function _(a,d){const p=a.b-r;return d*=Math.abs(p),{a:r,b:a.b,d:p,duration:d,start:a.start,end:a.start+d,group:a.group}}function h(a){const{delay:d=0,duration:p=300,easing:y=ht,tick:g=S,css:x}=l||zt,E={start:yt()+d,b:a};a||(E.group=b,b.r+=1),o||c?c=E:(x&&(f(),u=X(t,r,a,p,d,y,x)),a&&g(0,1),o=_(E,p),H(()=>G(t,a,"start")),gt(v=>{if(c&&v>c.start&&(o=_(c,p),c=null,G(t,o.b,"start"),x&&(f(),u=X(t,r,o.b,o.duration,0,y,l.css))),o){if(v>=o.end)g(r=o.b,1-r),G(t,o.b,"end"),c||(o.b?f():--o.group.r||C(o.group.c)),o=null;else if(v>=o.start){const M=v-o.start;r=o.a+o.d*y(M/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(a){K(l)?qt().then(()=>{l=l(s),h(a)}):h(a)},end(){f(),o=c=null}}}const Ce=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function De(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function Me(t,e,n,i,s,l,r,o,c,u,f,_){let h=t.length,a=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const y=[],g=new Map,x=new Map;for(d=a;d--;){const m=_(s,l,d),$=n(m);let w=r.get($);w?i&&w.p(m,e):(w=u($,m),w.c()),g.set($,y[d]=w),$ in p&&x.set($,Math.abs(d-p[$]))}const E=new Set,v=new Set;function M(m){dt(m,1),m.m(o,f),r.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=y[a-1],$=t[h-1],w=m.key,P=$.key;m===$?(f=m.first,h--,a--):g.has(P)?!r.has(w)||E.has(w)?M(m):v.has(P)?h--:x.get(w)>x.get(P)?(v.add(w),M(m)):(E.add(P),h--):(c($,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,r)}for(;a;)M(y[a-1]);return y}function Te(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function je(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Oe(t){t&&t.c()}function Pe(t,e){t&&t.l(e)}function Bt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||H(()=>{const r=t.$$.on_mount.map(Z).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...r):C(r),t.$$.on_mount=[]}),l.forEach(H)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(N.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Re(t,e,n,i,s,l,r,o=[-1]){const c=O;j(t);const u=t.$$={fragment:null,ctx:[],props:l,update:S,not_equal:s,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:V(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(_,h,...a)=>{const d=a.length?a[0]:h;return u.ctx&&s(u.ctx[_],u.ctx[_]=d)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](d),f&&Ft(t,_)),h}):[],u.update(),f=!0,C(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){$t();const _=Ct(e.target);u.fragment&&u.fragment.l(_),_.forEach(rt)}else u.fragment&&u.fragment.c();e.intro&&dt(t.$$.fragment),Bt(t,e.target,e.anchor,e.customElement),wt(),_t()}j(c)}class qe{$destroy(){Ht(this,1),this.$destroy=S}$on(e,n){if(!K(n))return S;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{he as $,Bt as A,Ht as B,Kt as C,me as D,Nt as E,Ut as F,Vt as G,Qt as H,S as I,Jt as J,mt as K,ce as L,se as M,Te as N,Yt as O,Xt as P,ve as Q,ht as R,qe as S,At as T,ue as U,H as V,Se as W,we as X,$e as Y,Ce as Z,Zt as _,ne as a,K as a0,C as a1,be as a2,oe as a3,ee as a4,xe as a5,re as a6,Gt as a7,Me as a8,De as a9,je as aa,ke as ab,_e as ac,It as ad,te as b,ae as c,Lt as d,ie as e,Ae as f,dt as g,rt as h,Re as i,ge as j,ot as k,le as l,Ct as m,St as n,ye as o,de as p,U as q,Mt as r,Wt as s,Ee as t,fe as u,Ne as v,Y as w,pe as x,Oe as y,Pe as z};
