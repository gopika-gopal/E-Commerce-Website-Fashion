import{r as s,a as u}from"./index-DhpCziyn.js";var d={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const i=()=>{const[o,r]=s.useState([]),[c,a]=s.useState(!1);s.useEffect(()=>{l()},[]);const l=async()=>{var e;try{a(!0);const t=await u.get(`${d.VITE_SERVER}/api/v1/product/all`);r((e=t==null?void 0:t.data)==null?void 0:e.products),a(!1)}catch(t){console.log(t)}};return{isloading:c,allProducts:o}};export{i as u};
