import React, { useContext } from 'react'
import styles from "./product.module.css";

import { useNavigate } from 'react-router-dom';

const Product = ({prod}) => {
   
   const navigate =useNavigate();
 
  const singalProductHandlar=(prod)=>{
    
    const ID=prod.id
    navigate(`/products/:${prod.id}`,{state:{ID}})
    // console.log(prod.id)
      }

  return (
    <div className={styles.product_card} onClick={()=>singalProductHandlar(prod)}>
      <div className={styles.product_thumbnail}>
        <img src={prod?.images[0]} alt="" />
      </div>
      <div className={styles.product_details}>
        <span className={styles.name}>{prod.title}</span>
        <span className={styles.price}>${prod.price}</span>
      </div>
    </div>
  )
}

export default Product