(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{5359:function(e,t,n){Promise.resolve().then(n.bind(n,3530))},3530:function(e,t,n){"use strict";n.d(t,{ScheduleCalendar:function(){return i}});var a=n(9173),r=n(8409),l=n(1107),s=n.n(l),c=n(1685);function i(){let e=function(){let[e,t]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(async()=>{let e=await fetch("/api/blog-creco-dev/calendar/?calendarId=creaticoding@gmail.com");t((await e.json()).calendarEvents)})()},[]),e}(),t=new Date;return(0,a.jsxs)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[(0,a.jsx)("h1",{children:"CreatiCoding's Schedules"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{children:"커피챗 장소"}),(0,a.jsxs)("p",{children:["1. 강남역 카페 ",(0,a.jsx)(c.default,{href:"https://kko.to/i2m6H7gAQ3",target:"_blank",children:"커피빈 강남역12번출구점"})]}),(0,a.jsxs)("p",{children:["2. 역삼역 카페 ",(0,a.jsx)(c.default,{href:"https://kko.to/ryFyBT1HWz",target:"_blank",children:"투썸플레이스 역삼성홍타워점"})]}),(0,a.jsx)("p",{children:"커피챗은 보통 1시간부터 최대 2시간 정도로 진행하고 있습니다."}),(0,a.jsxs)("h2",{children:[t.getFullYear(),"년 ",t.getMonth()+1,"월 ",null==e?"(로딩 중...)":"ㅤ"]}),(0,a.jsx)(o,{schedules:e})]})]})}let d=["일","월","화","수","목","금","토"],o=e=>{let{schedules:t}=e,n=new Date,l=(0,r.useMemo)(()=>new Date(n.getFullYear(),n.getMonth(),1),[n]).getDay(),c=(0,r.useMemo)(()=>new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),[n]),i=(0,r.useMemo)(()=>new Date(n.getFullYear(),n.getMonth(),0).getDate(),[n]),o=n.getDay()===l?35:42,u=(0,r.useMemo)(()=>Array.from({length:o},(e,t)=>t<l?i-l+t+1:t>=l+c?t-(l+c)+1:t-l+1),[l,c,i]),_=(0,r.useMemo)(()=>null==t?void 0:t.filter(e=>{let t=new Date(e.startDate);return t.getMonth()>=n.getMonth()-1&&t.getMonth()<=n.getMonth()+1}),[t,n]),m=e=>null==_?void 0:_.filter(t=>{let n=new Date(t.startDate);return n.getDate()===e.getDate()&&n.getMonth()===e.getMonth()});return(0,a.jsxs)("div",{className:s().calendar,children:[(0,a.jsx)("div",{className:s().calendar__header,children:d.map((e,t)=>(0,a.jsx)("div",{className:s().calendar__header_cell,children:e},t))}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:s().calendar__body,children:u.map((e,t)=>{let r=t<l,i=t>=l+c,d=n.getMonth()+1,o=new Date(n.getFullYear(),n.getMonth()+(r?-1:i?1:0),e);return(0,a.jsx)("div",{className:r||i?s().current__another__month:s().current__month,children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{style:{color:"var(--color-primary)"},children:[r?d-1:i?d+1:d,"/",e]}),(0,a.jsx)("div",{style:{position:"relative"},children:(0,a.jsx)(h,{events:m(o)})})]})},t)})})]})},h=e=>{let{events:t}=e,n=e=>{let[t,n]=e.startTime.split(":").map(Number),a=Math.max(0,(60*t+n-540)*400/900),r=Math.min(400-a,400*e.minutes/900-10);return{top:a,height:a+r>385?400-a:r}};return(0,a.jsx)(a.Fragment,{children:(null!=t?t:[]).map((e,t)=>{let{top:r,height:l}=n(e);return(0,a.jsx)("div",{title:"".concat(e.name," ").concat(e.startTime," - ").concat(e.endTime),style:{top:"".concat(r,"px"),height:"".concat(l,"px"),position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:"calc(100% - 18px)",backgroundColor:e.name.toLowerCase().startsWith("free")?"rgba(0, 255, 0, 0.3)":e.name.startsWith("커피챗")?"rgba(255, 255, 0, 0.3)":"rgba(0, 0, 0, 0.1)",fontWeight:e.name.toLowerCase().startsWith("free")?"bold":"unset",padding:"0px 8px",borderRadius:"16px",minHeight:"15px",border:e.name.toLowerCase().startsWith("free")?"1px solid rgba(20, 55, 20, 0.7)":e.name.startsWith("커피챗")?"1px solid rgba(155, 155, 10, 0.7)":"unset"},children:l>30?(0,a.jsxs)("div",{style:{fontSize:"14px",textAlign:"center"},children:[e.name,(0,a.jsx)("br",{}),e.startTime," - ",e.endTime]}):(0,a.jsxs)("p",{style:{fontSize:"14px"},children:["".concat(e.name," "),(0,a.jsxs)("span",{style:{fontSize:"12px"},children:[e.startTime," - ",e.endTime]})]})},t)})})}},1107:function(e){e.exports={calendar:"ScheduleCalendar_calendar__1RFRH",calendar__header:"ScheduleCalendar_calendar__header__ZnCeJ",calendar__header_cell:"ScheduleCalendar_calendar__header_cell__S7Ji0",calendar__body:"ScheduleCalendar_calendar__body__8yu2r",current__another__month:"ScheduleCalendar_current__another__month__o_wYa",current__month:"ScheduleCalendar_current__month__V49mI"}}},function(e){e.O(0,[653,685,867,638,744],function(){return e(e.s=5359)}),_N_E=e.O()}]);