import{r as e,a as u}from"./index-XZPy2YyL.js";var i={BASE_URL:"/E-Commerce-Website-Fashion/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const d=()=>{const[o,r]=e.useState([]),[c,s]=e.useState(!1);e.useEffect(()=>{l()},[]);const l=async()=>{var a;try{s(!0);const t=await u.get(`${i.VITE_SERVER}/api/v1/product/all`);r((a=t==null?void 0:t.data)==null?void 0:a.products),s(!1)}catch(t){console.log(t)}};return{isloading:c,allProducts:o}};export{d as u};
