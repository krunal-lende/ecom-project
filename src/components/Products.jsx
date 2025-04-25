import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from "./products.module.css"
import { AppContext } from '../App'

const Products = () => {
  const {cart,setCart}=useContext(AppContext);
  const navigation=useNavigate(); 
  const location =useLocation();
  const{ID}=location.state || {};

  const [prod,setProd]=useState(null);
  // console.log("===>",ID)
  useEffect(()=>{
    const apiFetch= async()=>{
      const req = await fetch(`https://api.escuelajs.co/api/v1/products/${ID}`);
      const res = await req.json();
      // console.log(res)
      setProd(res)
    }
    apiFetch();
  },[ID])
  
  const cancleHandlar=()=>{
    navigation("/")
  }
  const addCartHandlar=(prod)=>{
    setCart([...cart,prod])
// console.log(prod)
   navigation("/")
   alert("Your product is add on Cart")
  }
  
  if (!prod) return <div className={styles.product_page}>Loading...</div>;

  return (
    <div className={styles.product_page}>
      <div className={styles.product_image}>
        <img src={prod.images[0]} alt={prod.title} />  
      </div>
      <div className={styles.product_details}>
        <h1>{prod.title}</h1>
        <p>{prod.description}</p>
        <h3>${prod.price}</h3>
        <div className={styles.btns}>
        <button className={styles.add_to_cart} onClick={()=>addCartHandlar(prod)} >Add to Cart</button>
        <button className={styles.cancle} onClick={cancleHandlar}> Cancel</button>
        </div>
        
      </div>

    </div>
  )
}

export default Products