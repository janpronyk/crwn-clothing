import React from 'react';
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import { withRouter } from 'react-router-dom'

import { clearCart } from '../../redux/cart/cart.actions'

const StripeCheckoutButton = ({ price, history, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51ICi09JJHGMus10oIeKBiTZNwbWVH5nbhGsR46hYHUc5iFE60MPxYCxsKxQPZN5hEvUpGjBdnvP2Mp2VPR8UJoap00rvLmrHwB';

  const onToken = token => {
    alert('Payment successful')
    console.log('history', history)
    history.push('/')
    clearCart()
  };

  return (
    <StripeCheckout
      amount={priceForStripe}
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      panelLabel='Pay Now'
      token={onToken}
      allowRememberMe={false}
      email="spikedev@test.com"
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: _ => dispatch(clearCart())
})

export default withRouter(connect(null, mapDispatchToProps)(StripeCheckoutButton))
