import React from 'react';

class CartItem extends React.Component {

    render(){
        // object destructing
        const {price,title,qty} = this.props.product;
        return(
            <div className = 'cart-item'>
                <div className='left-block'>
                    <img style={styles.images} src = '../images/mobilePhone.jpg'/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize : 25}}>{title}</div>
                    <div style={{color : '#777'}}>Rs {price}</div>
                    <div style={{color : '#777'}}>Qty : {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img alt = "increase" className='action-icons' onClick = { () =>this.props.onIncreaseQuantity(this.props.product)} src = "https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                        <img alt = "decrease" className='action-icons' onClick={ () =>this.props.onDecreaseQuantity(this.props.product)} src = "https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt = "delete" className='action-icons'   onClick={ () =>this.props.onDeleteProduct(this.props.product.id)} src = "https://cdn-icons-png.flaticon.com/512/565/565491.png" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    images : {
        height : 125,
        width : 110,
        borderRadius : 4
        
    }
}
export default CartItem;