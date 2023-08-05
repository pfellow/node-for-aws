import{r as m,aE as z}from"./index-90c7a613.js";import{p as P}from"./index-2f733489.js";var I={},F={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var l=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var u=typeof i;if(u==="string"||u==="number")l.push(i);else if(Array.isArray(i)){if(i.length){var o=r.apply(null,i);o&&l.push(o)}}else if(u==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){l.push(i.toString());continue}for(var s in i)n.call(i,s)&&i[s]&&l.push(s)}}}return l.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(F);var q=F.exports;I.__esModule=!0;I.default=void 0;var B=x(m),h=x(P),L=x(q);function x(e){return e&&e.__esModule?e:{default:e}}const D=({animate:e=!0,className:n="",layout:r="2-columns",lineColor:l="#FFF",children:t})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",l),B.default.createElement("div",{className:(0,L.default)(n,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":r==="2-columns","vertical-timeline--one-column-left":r==="1-column"||r==="1-column-left","vertical-timeline--one-column-right":r==="1-column-right"})},t));D.propTypes={children:h.default.oneOfType([h.default.arrayOf(h.default.node),h.default.node]).isRequired,className:h.default.string,animate:h.default.bool,layout:h.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:h.default.string};var K=D;I.default=K;var E={};function M(){return M=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},M.apply(this,arguments)}function G(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,C(e,n)}function C(e,n){return C=Object.setPrototypeOf||function(l,t){return l.__proto__=t,l},C(e,n)}function H(e,n){if(e==null)return{};var r={},l=Object.keys(e),t,i;for(i=0;i<l.length;i++)t=l[i],!(n.indexOf(t)>=0)&&(r[t]=e[t]);return r}var S=new Map,O=new WeakMap,j=0,U=void 0;function J(e){U=e}function Q(e){return e?(O.has(e)||(j+=1,O.set(e,j.toString())),O.get(e)):"0"}function X(e){return Object.keys(e).sort().filter(function(n){return e[n]!==void 0}).map(function(n){return n+"_"+(n==="root"?Q(e.root):e[n])}).toString()}function Y(e){var n=X(e),r=S.get(n);if(!r){var l=new Map,t,i=new IntersectionObserver(function(u){u.forEach(function(o){var s,c=o.isIntersecting&&t.some(function(f){return o.intersectionRatio>=f});e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=c),(s=l.get(o.target))==null||s.forEach(function(f){f(c,o)})})},e);t=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:n,observer:i,elements:l},S.set(n,r)}return r}function T(e,n,r,l){if(r===void 0&&(r={}),l===void 0&&(l=U),typeof window.IntersectionObserver>"u"&&l!==void 0){var t=e.getBoundingClientRect();return n(l,{isIntersecting:l,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:t,intersectionRect:t,rootBounds:t}),function(){}}var i=Y(r),u=i.id,o=i.observer,s=i.elements,c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(n),o.observe(e),function(){c.splice(c.indexOf(n),1),c.length===0&&(s.delete(e),o.unobserve(e)),s.size===0&&(o.disconnect(),S.delete(u))}}var Z=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function A(e){return typeof e.children!="function"}var w=function(e){G(n,e);function n(l){var t;return t=e.call(this,l)||this,t.node=null,t._unobserveCb=null,t.handleNode=function(i){t.node&&(t.unobserve(),!i&&!t.props.triggerOnce&&!t.props.skip&&t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=i||null,t.observeNode()},t.handleChange=function(i,u){i&&t.props.triggerOnce&&t.unobserve(),A(t.props)||t.setState({inView:i,entry:u}),t.props.onChange&&t.props.onChange(i,u)},t.state={inView:!!l.initialInView,entry:void 0},t}var r=n.prototype;return r.componentDidUpdate=function(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var t=this.props,i=t.threshold,u=t.root,o=t.rootMargin,s=t.trackVisibility,c=t.delay,f=t.fallbackInView;this._unobserveCb=T(this.node,this.handleChange,{threshold:i,root:u,rootMargin:o,trackVisibility:s,delay:c},f)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!A(this.props)){var t=this.state,i=t.inView,u=t.entry;return this.props.children({inView:i,entry:u,ref:this.handleNode})}var o=this.props,s=o.children,c=o.as,f=H(o,Z);return m.createElement(c||"div",M({ref:this.handleNode},f),s)},n}(m.Component);w.displayName="InView";w.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function ee(e){var n=e===void 0?{}:e,r=n.threshold,l=n.delay,t=n.trackVisibility,i=n.rootMargin,u=n.root,o=n.triggerOnce,s=n.skip,c=n.initialInView,f=n.fallbackInView,p=m.useRef(),y=m.useState({inView:!!c}),b=y[0],_=y[1],N=m.useCallback(function(g){p.current!==void 0&&(p.current(),p.current=void 0),!s&&g&&(p.current=T(g,function(k,$){_({inView:k,entry:$}),$.isIntersecting&&o&&p.current&&(p.current(),p.current=void 0)},{root:u,rootMargin:i,threshold:r,trackVisibility:t,delay:l},f))},[Array.isArray(r)?r.toString():r,u,i,o,s,t,f,l]);m.useEffect(function(){!p.current&&b.entry&&!o&&!s&&_({inView:!!c})});var d=[N,b.inView,b.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}const te=Object.freeze(Object.defineProperty({__proto__:null,InView:w,default:w,defaultFallbackInView:J,observe:T,useInView:ee},Symbol.toStringTag,{value:"Module"})),ne=z(te);E.__esModule=!0;E.default=void 0;var v=R(m),a=R(P),V=R(q),re=ne;function R(e){return e&&e.__esModule?e:{default:e}}const W=({children:e="",className:n="",contentArrowStyle:r=null,contentStyle:l=null,date:t="",dateClassName:i="",icon:u=null,iconClassName:o="",iconOnClick:s=null,onTimelineElementClick:c=null,iconStyle:f=null,id:p="",position:y="",style:b=null,textClassName:_="",intersectionObserverProps:N={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:d=!1})=>v.default.createElement(re.InView,N,({inView:g,ref:k})=>v.default.createElement("div",{ref:k,id:p,className:(0,V.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":y==="left","vertical-timeline-element--right":y==="right","vertical-timeline-element--no-children":e===""}),style:b},v.default.createElement(v.default.Fragment,null,v.default.createElement("span",{style:f,onClick:s,className:(0,V.default)(o,"vertical-timeline-element-icon",{"bounce-in":g||d,"is-hidden":!(g||d)})},u),v.default.createElement("div",{style:l,onClick:c,className:(0,V.default)(_,"vertical-timeline-element-content",{"bounce-in":g||d,"is-hidden":!(g||d)})},v.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,v.default.createElement("span",{className:(0,V.default)(i,"vertical-timeline-element-date")},t)))));W.propTypes={children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),className:a.default.string,contentArrowStyle:a.default.shape({}),contentStyle:a.default.shape({}),date:a.default.node,dateClassName:a.default.string,icon:a.default.element,iconClassName:a.default.string,iconStyle:a.default.shape({}),iconOnClick:a.default.func,onTimelineElementClick:a.default.func,id:a.default.string,position:a.default.string,style:a.default.shape({}),textClassName:a.default.string,visible:a.default.bool,intersectionObserverProps:a.default.shape({root:a.default.object,rootMargin:a.default.string,threshold:a.default.number,triggerOnce:a.default.bool})};var ie=W;E.default=ie;var ae={VerticalTimeline:I.default,VerticalTimelineElement:E.default};export{ae as d};
