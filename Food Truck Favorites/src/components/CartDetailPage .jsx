import React from 'react';
import { useLocation, Link, Form } from 'react-router-dom';
// import { loadStripe} from '@stripe/stripe-js';

function CartDetailPage() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  
  const totalPrice = cartItems.reduce((total, item) => total + item.count * item.price, 0);
  
  const makepayment = async () => {
    const stripe = await loadStripe("pk_test_51P1t5f2NWBC2qFBwhOzgV31gcI9cf8x6qc1kETzGSlDmIiSIK8QC5JQ4RfaIvCPzphjXeX1IrvObZs4ZfgZ0omT300uVsU5LdJ")
    const apiURL = "http://localhost:5173/"; // 确定您后端的API URL
    const body = {
      items: cartItems.map(item => ({  // 修改这里从`cart`到`cartItems`
        id: item.stripePriceId, // 确保你有stripePriceId这个属性在你的item里
        quantity: item.count,
      }))
    }   
    const headers = {
      'content-Type':'application/json'
    }   
    const response = await fetch(`${apiURL}/create-checkout-session`,{
      method:"post",
      headers:headers,
      body:JSON.stringify(body)
    })
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
   
    // const handlePurchase = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/checkout', { // Your API endpoint
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ cartItems }), // Send cart items to your API
  //     });
  //     if (response.ok) {
  //       const session = await response.json();
  //       window.location.href = session.url;
  //     } else {
  //       // Handle any non-200 responses here
  //       console.error(`HTTP error: ${response.status}`);
  //       // Potentially alert the user with a message
  //     }
  //   } catch (error) {
  //     console.error('Error during purchase:', error);
  //     // Handle any errors that occur during the process
  //   }
  // };
  }

  return (
    <div style={{ padding: '30px', textAlign: 'center', marginTop: '10vh' }}> {/* Center content and move upwards */}
      <h1 style={{ color: 'white' }}>Shopping Cart Details</h1>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p style={{ color: 'white' }}>
            {item.name} - ${item.price.toFixed(2)} x {item.count} = ${(item.count * item.price).toFixed(2)}
          </p>
        </div>
      ))}
      <p style={{ color: 'white', margin: '20px 0' }}>Total: ${totalPrice.toFixed(2)}</p>
      <button style={{ padding: '10px 20px', fontSize: '16px' }}>Checkout</button> {/* Purchase button */}
      <div style={{ marginTop: '20px' }}>
        <Link to="/" style={{ color: 'white' }}>Back</Link>
      </div>
    </div>
  );
}

export default CartDetailPage;
