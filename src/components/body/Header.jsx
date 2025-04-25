import React, { useContext, useState } from 'react'
import styles from "./header.module.css"
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import Cart from './Cart'
const Header = () => {
  const navigate=useNavigate()
  const {length}=useContext(AppContext);
  const[heart,setHeart]=useState("🤍")
  const[search,setSearch]=useState(false)
  const [showCart,setShowCart]=useState(true)
  return (
    <div>
      <header className={styles.main_header}>
        <div className= {styles.header_content }>
          <ul className={styles.left }>
            <li onClick={()=>navigate("/")}>Home</li>
            <li>About</li> 
            <li>Categories</li>            
          </ul>
          <div className={styles.center }>
                <h2>E-Com</h2>
          </div>
          <div className={styles.right }>
          {search ==false? 
           ( <h2 onClick={()=>!setSearch(true)}>🔍</h2> ) : 
           (<div className={styles.search}> <input type='text' />
           <h2 className={styles.search_icon} onClick={()=>!setSearch(false)}>🔍</h2> </div>) }
            
            <h2 onClick={()=>!setHeart(heart=="🤍"?"💗":"🤍")}>{heart}</h2>
           <div className={styles.card_icon}> 
           <h2 onClick={()=>setShowCart(!showCart)} >🛒 <span>{length}</span></h2>
            </div> 
            
            
          </div>
        </div>
        
      </header>
      {!showCart && <Cart showCart={showCart} setShowCart={setShowCart}/>}
    </div>
  )
}

export default Header