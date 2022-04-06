import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            qty : 1,
            img : ''
        }
    }

increaseQuantity = () =>{
   // this.state.qty += 1;
    // console.log('this', this.state);
    // setState form 1
    // this.setState({
    //   qty: this.state.qty + 1
    // });

    // setState form 2 - if prevState required use this
    this.setState((prevState) => {
        return {
          qty: prevState.qty + 1
        }
    });
}

decreaseQuantity = () =>{
    if(this.state.qty > 0){
        this.setState({
            qty : this.state.qty - 1
        })
    }
}
    render(){
        // object destructing
        const {price,title,qty} = this.state;
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
                        <img alt = "increase" className='action-icons' onClick = {this.increaseQuantity} src = "https://cdn-icons.flaticon.com/png/512/1008/premium/1008978.png?token=exp=1649248621~hmac=89b6e59cf6c0397a14c629d681bf9a91" />
                        <img alt = "decrease" className='action-icons' onClick={this.decreaseQuantity} src = "https://cdn-icons.flaticon.com/png/512/2920/premium/2920674.png?token=exp=1649248749~hmac=3ce9c394e80ccc130de6a4dea6e5dc65" />
                        <img alt = "delete" className='action-icons' src = "https://cdn-icons-png.flaticon.com/512/565/565491.png" />

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