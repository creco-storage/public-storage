(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{1818:(e,t,a)=>{Promise.resolve().then(a.bind(a,3586))},3586:(e,t,a)=>{"use strict";a.d(t,{ScheduleCalendar:()=>i});var r=a(5843),n=a(6856),l=a(2370),s=a.n(l),d=a(1029);function i(){let e=function(){let[e,t]=(0,n.useState)();return(0,n.useEffect)(()=>{(async()=>{let e=await fetch("/api/blog-creco-dev/calendar/?calendarId=creaticoding@gmail.com");t((await e.json()).calendarEvents)})()},[]),e}(),t=new Date;return(0,r.jsxs)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[(0,r.jsx)("h1",{children:"CreatiCoding's Schedules"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:"커피챗 장소"}),(0,r.jsxs)("p",{children:["1. 강남역 카페"," ",(0,r.jsx)(d.default,{href:"https://kko.to/i2m6H7gAQ3",target:"_blank",children:"커피빈 강남역12번출구점"})]}),(0,r.jsxs)("p",{children:["2. 역삼역 카페"," ",(0,r.jsx)(d.default,{href:"https://kko.to/ryFyBT1HWz",target:"_blank",children:"투썸플레이스 역삼성홍타워점"})]}),(0,r.jsx)("p",{children:"커피챗은 보통 1시간부터 최대 2시간 정도로 진행하고 있습니다."}),(0,r.jsxs)("h2",{children:[t.getFullYear(),"년 ",t.getMonth()+1,"월"," ",null==e?"(로딩 중...)":"ㅤ"]}),(0,r.jsx)(o,{schedules:e})]})]})}let c=["일","월","화","수","목","금","토"],o=e=>{let{schedules:t}=e,a=new Date,{calendarDays:l,firstDayOfWeek:d,daysInCurrentMonth:i,getEventsForDate:o}=function(e){let{schedules:t,startDate:a=new Date,maxLength:r=49}=e,l=new Date(a.getFullYear(),a.getMonth()+1,0).getDate(),s=new Date(a.getFullYear(),a.getMonth(),1).getDay(),d=function(e){let t=e.getDay(),a=new Date(e);return a.setDate(e.getDate()-t),a}(a);d.setHours(0,0,0,0);let i=(0,n.useMemo)(()=>Array.from({length:r},(e,t)=>{let a=new Date(d);return a.setDate(a.getDate()+t),a}),[d]),c=(0,n.useMemo)(()=>{let e=new Date(d);return e.setDate(e.getDate()+r-1),null==t?void 0:t.filter(t=>{let a=new Date(t.startDate);return a>=d&&a<=e})},[t,d]);return{calendarDays:i,firstDayOfWeek:s,daysInCurrentMonth:l,getEventsForDate:e=>null==c?void 0:c.filter(t=>{let a=new Date(t.startDate);return a.getFullYear()===e.getFullYear()&&a.getMonth()===e.getMonth()&&a.getDate()===e.getDate()})}}({schedules:null!=t?t:void 0,startDate:a});return(0,r.jsxs)("div",{className:s().calendar,children:[(0,r.jsx)("div",{className:s().calendar__header,children:c.map((e,t)=>(0,r.jsx)("div",{className:s().calendar__header_cell,children:e},t))}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:s().calendar__body,children:l.map((e,t)=>{let n=t<d,l=t>=d+i;return(0,r.jsx)("div",{className:[n||l?s().current__another__month:s().current__month,a.getMonth()===e.getMonth()&&a.getDate()===e.getDate()?s().today:""].filter(e=>""!==e).join(" "),children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{style:{color:"var(--color-primary)"},children:[e.getMonth()+1,"/",e.getDate()]}),(0,r.jsx)("div",{style:{position:"relative"},children:(0,r.jsx)(h,{events:o(e)})})]})},t)})})]})},h=e=>{let{events:t}=e,a=e=>{let[t,a]=e.startTime.split(":").map(Number),r=Math.max(0,(60*t+a-540)*400/900),n=Math.min(400-r,400*e.minutes/900-10);return{top:r,height:r+n>385?400-r:n}};return(0,r.jsx)(r.Fragment,{children:(null!=t?t:[]).map((e,t)=>{let{top:n,height:l}=a(e);return(0,r.jsx)("div",{title:"".concat(e.name," ").concat(e.startTime," - ").concat(e.endTime),style:{top:"".concat(n,"px"),height:"".concat(l,"px"),position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:"calc(100% - 18px)",backgroundColor:e.name.toLowerCase().startsWith("free")?"rgba(0, 255, 0, 0.3)":e.name.startsWith("커피챗")?"rgba(255, 255, 0, 0.3)":"rgba(0, 0, 0, 0.1)",fontWeight:e.name.toLowerCase().startsWith("free")?"bold":"unset",padding:"0px 8px",borderRadius:"16px",minHeight:"15px",border:e.name.toLowerCase().startsWith("free")?"1px solid rgba(20, 55, 20, 0.7)":e.name.startsWith("커피챗")?"1px solid rgba(155, 155, 10, 0.7)":"unset"},children:l>30?(0,r.jsxs)("div",{style:{fontSize:"14px",textAlign:"center"},children:[e.name,(0,r.jsx)("br",{}),e.startTime," - ",e.endTime]}):(0,r.jsxs)("p",{style:{fontSize:"14px"},children:["".concat(e.name," "),(0,r.jsxs)("span",{style:{fontSize:"12px"},children:[e.startTime," - ",e.endTime]})]})},t)})})}},2370:e=>{e.exports={calendar:"ScheduleCalendar_calendar__1RFRH",calendar__header:"ScheduleCalendar_calendar__header__ZnCeJ",calendar__header_cell:"ScheduleCalendar_calendar__header_cell__S7Ji0",calendar__body:"ScheduleCalendar_calendar__body__8yu2r",current__another__month:"ScheduleCalendar_current__another__month__o_wYa",current__month:"ScheduleCalendar_current__month__V49mI",today:"ScheduleCalendar_today__KF4iX"}}},e=>{var t=t=>e(e.s=t);e.O(0,[690,29,921,869,744],()=>t(1818)),_N_E=e.O()}]);