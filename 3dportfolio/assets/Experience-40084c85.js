import{j as e}from"./index-90c7a613.js";import{d as a}from"./style.min-bcb5ebca.js";import{s as i}from"./styles-1b0f9c50.js";import{e as r}from"./index-274ec97a.js";import{S as o,t as c}from"./SectionWrapper-c184d919.js";import{m as l}from"./motion-6990b298.js";import"./index-2f733489.js";const m=({experience:t})=>e.jsxs(a.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #232631"},date:t.date,iconStyle:{background:t.iconBg},icon:e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:e.jsx("img",{src:t.icon,alt:t.company_name,className:"w-[60%] h-[60%] object-contain"})}),children:[e.jsxs("div",{className:"text-white text-[24px] font-bold",children:[e.jsx("h3",{children:t.title}),e.jsx("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:t.company_name})]}),e.jsx("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:t.points.map((s,n)=>e.jsx("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:s},`experience-point-${n}`))})]}),d=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l.div,{variants:c(),children:[e.jsx("p",{className:i.sectionSubText,children:"What I have done so far"}),e.jsx("h2",{className:i.sectionHeadText,children:"Work Experience"})]}),e.jsx("div",{className:"mt-w0 flex flex-col",children:e.jsx(a.VerticalTimeline,{children:r.map((t,s)=>e.jsx(m,{experience:t},s))})})]}),N=o(d,"work");export{N as default};
