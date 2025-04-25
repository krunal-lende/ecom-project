import React, { useEffect, useState } from 'react'
import styles from "./home.module.css"
import ProductsAll from './ProductsAll'

const Home = () => {
      const [cat,setCat]=useState() ;  
      const [allCat,setAllCat]=useState("")

  useEffect(()=>{
    async function categori() {
      const req = await fetch("https://api.escuelajs.co/api/v1/categories");
      const data= await req.json();
      // console.log(data.slice(0,5))
      setCat(data.slice(0,5))
    }
    categori() 
  },[]
  )

  const CatHandlar =(prod)=>{
   
    setAllCat(prod.slug)
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.banner}>
        <img src="https://static.vecteezy.com/system/resources/previews/006/388/792/non_2x/online-shopping-illustration-there-is-a-white-mobile-a-red-shopping-cart-and-a-shopping-bag-design-for-website-sale-banner-landing-page-mobile-app-shop-online-online-store-business-vector.jpg" alt="" />

      </div>
      <div className={styles.container}>
      <h2 className={styles.cat_name}>categories</h2>
      <div className={styles.cat}>
      
       { cat?.map((prod,id)=>(
        <div key={id} className={styles.cat_box} onClick={()=>CatHandlar(prod)}>
        <img className={styles.cat_img} src={prod.image} />
        <h3>{prod.name}</h3>
        </div>
       ))
       
       }
      </div>
      <ProductsAll allCat={allCat} />
      </div>
    </div>
  )
}

export default Home