  import React, { useContext } from 'react'
import styles from "./cart.module.css"
import { AppContext } from '../../App'

const Cart = ({setShowCart,showCart}) => {
    const{cart,setCart}=useContext(AppContext);
    // console.log(cart)

     const removeHandlar=(id)=>{
        const sort =cart.filter(item=>item.id !== id)
        // console.log(sort)
        setCart(sort)
     }
       
     
  return (
    <div className={styles.cart_panal}>
        <div className={styles.opac_layer}></div>
        <div className={styles.cart_contain}> 
            <div className={styles.cart_header}>
                <span className={styles.heading}>Shopping Cart</span>
                <span className={styles.close_btn} onClick={()=>setShowCart(!showCart)}>❌</span>
            </div>
                { (cart.length === 0)?  <div className={styles.cart_empty}>Your cart is empty.</div>:""}
                <div className={styles.card_contain}>
                {
                cart.map((prod)=>(<>
                    <div className={styles.card_item}>
                        <img src={prod.images[0]} alt={prod.title} />
                        <div className={styles.info}>
                        <p>{prod.title}</p>
                        <h4>Price:- ${prod.price}</h4>
                        </div>
                        
                        <button className={styles.remove}onClick={()=>removeHandlar(prod.id)} > Remove</button>
                        
                    </div>
                    <hr />
                    </>
                ))
            }
                </div>
            
                 { (cart.length === 0)?  <div className={styles.cart_empty}>Your cart is empty.</div>:""}
                <div className={styles.card_contain}>
                {
                cart.map((prod)=>(<>
                    <div className={styles.card_item}>
                        <img src={prod.images[0]} alt={prod.title} />
                        <div className={styles.info}>
                        <p>{prod.title}</p>
                        <h4>Price:- ${prod.price}</h4>
                        </div>
                        
                        <button className={styles.remove}onClick={()=>removeHandlar(prod.id)} > Remove</button>
                        
                    </div>
                    <hr />
                    </>
                ))
            }
                </div>

                { (cart.length !== 0)?  <div className={styles.total}>
            
            <h2>TOTAL :- ${cart.reduce((acc,item)=>{return acc + item.price},0)}</h2>
            <button onClick={()=>alert("Ready to Shipping ")}>Procid</button>

        </div>:""}

        </div>

    </div>
  )
}

export default Cart
