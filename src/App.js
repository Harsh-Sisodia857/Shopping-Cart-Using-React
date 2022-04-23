import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar'

class App extends React.Component {
  constructor(){
    super();
    // React components has a built-in state object.The state object is where you store property values that belongs to the component.When the state object changes, the component re-renders.


    this.state = {
       products : [
         {
          price : 99,
          title : 'Watch',
          qty : 1,
          img : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
          id : 1
         },
         {
          price : 999,
          title : 'Mobile Phone',
          qty : 10,
          img : 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=367&q=80',
          id : 2
         },
         {
          price : 99999,
          title : 'Laptop',
          qty : 1,
          img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
          id : 3
         }
       ] 
    }
}
handleIncreaseQuantity = (product) =>{
const { products } = this.state;
  const index = products.indexOf(product);
  products[index].qty += 1;

  this.setState({
    products
  })
}

handleDecreaseQuantity = (product) =>{
const {products} = this.state;
const index = products.indexOf(product);
if(products[index].qty > 0){
  products[index].qty -= 1;
}

this.setState({
  products : products
})
}

getCartCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product)=>{
    count += product.qty;
  })
  return count;
}

handleDeleteProduct = (id) =>{
const {products} = this.state;
const item = products.filter((items) => items.id !== id);
this.setState({
  products : item
})
}

getTotalPrice = () =>{
  const {products} = this.state;
  let price = 0;
  products.map((product)=>{
    price = price + product.qty * product.price;
  })
  return price;
}

render(){
  const {products} = this.state;
  return (
    <div className="App">
      <Navbar count = {this.getCartCount()} />
      <Cart 
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity} onDecreaseQuantity = {this.handleDecreaseQuantity} onDeleteProduct = {this.handleDeleteProduct}/>
      <div style={{fontSize : 20, padding : 10}}>TOTAL PRICE : {this.getTotalPrice()}</div>
    </div>
  );
}
}
export default App;
