import{j as e}from"./index-90c7a613.js";import{T as d}from"./index-f17b1ab9.js";import{s as r}from"./styles-1b0f9c50.js";import{p,a as h}from"./index-274ec97a.js";import{S as f,t as j,f as i}from"./SectionWrapper-c184d919.js";import{m as l}from"./motion-6990b298.js";const u=""+new URL("github-d37182f2.png",import.meta.url).href,w=({index:t,name:s,description:o,tags:n,image:c,link:x,source_code_link:m})=>e.jsx(l.div,{variants:i("down","spring",t*.5,.75),children:e.jsxs(d,{options:{max:45,scale:1,speed:200},className:"bg-tertiary p-5 rounded-2xl 2xl:w-[550px] xl:w-[550px] lg:w-[440px] md:w-[310px] w-full",children:[e.jsxs("div",{className:"relative w-full h-[230px] cursor-pointer opacity-80 hover:opacity-100",onClick:()=>window.open(x,"_blank"),children:[e.jsx("img",{src:c,alt:s,className:"w-full h-full object-cover rounded-2xl"}),e.jsx("div",{className:"absolute  inset-0 flex justify-end m-2 card-img_hover",children:e.jsx("div",{onClick:()=>window.open(m,"_blank"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center",children:e.jsx("img",{src:u,alt:"github link",className:"w-3/4 h-3/4 object-contain"})})})]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h3",{className:"text-white font-bold text-[24px] sm:visible hidden",children:s}),e.jsx("p",{className:"mt-2 text-fourth text-[16px]",children:o})]}),e.jsx("div",{className:"mt-4 flex flex-wrap gap-4",children:n.map(a=>e.jsxs("p",{className:`text-[14px] ${a.color}`,children:["#",a.name]},a.name))})]})}),v=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l.div,{variants:j(),children:[e.jsx("p",{className:r.sectionSubText,children:"My Portfolio"}),e.jsx("h2",{className:r.sectionHeadText,children:"Projects"})]}),e.jsx("div",{className:"w-full flex",children:e.jsx(l.p,{variants:i("","",.1,1),className:"mt-3 text-fourth text-[17px] max-w-3xl leading-[30px]",children:p})}),e.jsx("div",{className:"mt-20 flex flex-wrap gap-4",children:h.map((t,s)=>e.jsx(w,{index:s,...t},`project.${s}`))})]}),T=f(v,"portfolio");export{T as default};
