import React, { useEffect, useState } from 'react'
import styles from "./productsAll.module.css";
import Product from './Product';

const ProductsAll = ({allCat}) => {
  const[item,setItem]=useState([]);
   // categories setup
   const[clothes,setClothes]=useState([]);
  const [electronics,setElectronics]=useState([]);
  const [furniture,setFurniture]=useState([]);
  const[shoes,setShoes]=useState([]);
  const[miscellaneous,setMiscellaneous]=useState([]);

// console.log(clothes)
  useEffect(()=>{
    const apiFetch = async()=>{
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      
      setItem(data.slice(0,12))   // for all

      setClothes(data.slice(0,10)) 
      setElectronics(data.slice(10,15))
      setFurniture(data.slice(15,22))
      setShoes(data.slice(22,29))
      setMiscellaneous(data.slice(29,31))
    }
    apiFetch();
  },[])

  const getCategoryProducts = () => {
    switch (allCat) {
      case 'clothes':
        return clothes;
      case 'electronics':
        return electronics;
      case 'furniture':
        return furniture;
      case 'shoes':
        return shoes;
      case 'miscellaneous':
        return miscellaneous;
      default:
        return item; 
    }
  };

  

  return (<>
    <div className={styles.products_container}> 
        <div className={styles.sec_heading}>
         {allCat?allCat : "All products"}
        </div>
        <div className={styles.products}>
          {
            getCategoryProducts()?.map((prod)=>(
              <Product key={prod.id} prod={prod} />
            ))
          }
          
        </div>
    </div>
    </>
  )
}

export default ProductsAll