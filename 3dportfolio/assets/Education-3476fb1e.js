import{j as t}from"./index-90c7a613.js";import{d as a}from"./style.min-bcb5ebca.js";import{s as e}from"./styles-1b0f9c50.js";import{b as i}from"./index-274ec97a.js";import{S as n,t as c}from"./SectionWrapper-c184d919.js";import{m as r}from"./motion-6990b298.js";import"./index-2f733489.js";const l=({experience:s})=>t.jsx(a.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #232631"},date:s.date,iconStyle:{background:s.iconBg},icon:t.jsx("div",{className:"flex justify-center items-center w-full h-full",children:t.jsx("img",{src:s.icon,alt:s.company_name,className:"w-[60%] h-[60%] object-contain"})}),children:t.jsxs("div",{className:"text-white text-[24px] font-bold",children:[t.jsx("h3",{children:s.title}),t.jsx("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:s.company_name})]})}),d=()=>t.jsxs(t.Fragment,{children:[t.jsxs(r.div,{variants:c(),children:[t.jsx("p",{className:e.sectionSubText,children:"My academic journey"}),t.jsx("h2",{className:e.sectionHeadText,children:"Education background"})]}),t.jsx("div",{className:"mt-w0 flex flex-col",children:t.jsx(a.VerticalTimeline,{children:i.map((s,o)=>t.jsx(l,{experience:s},o))})})]}),y=n(d,"education");export{y as default};
