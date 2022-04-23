import React from 'react';

const CartItem = (props) => {
        // object destructing
        const {price,title,qty} = props.product;
       
        return(
            <div className = 'cart-item'>
                <div className='left-block'>
                    <img style={styles.images} src = {props.product.img}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize : 25}}>{title}</div>
                    <div style={{color : '#777'}}>Rs {price}</div>
                    <div style={{color : '#777'}}>Qty : {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img alt = "increase" className='action-icons' onClick = { () =>props.onIncreaseQuantity(props.product)} src = "https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                        <img alt = "decrease" className='action-icons' onClick={ () =>props.onDecreaseQuantity(props.product)} src = "https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt = "delete" className='action-icons'   onClick={ () =>props.onDeleteProduct(props.product.id)} src = "https://cdn-icons-png.flaticon.com/512/565/565491.png" />
                    </div>
                </div>
            </div>
        )
    }


const styles = {
    images : {
        height : 150,
        width : 150,
        borderRadius : 4
        
    }
}
export default CartItem;