import React from 'react'

const CartForm = () => {
  return (
    <section>
        <form action="">
            <label htmlFor="name">name</label>
            <input type="text" name="name" />
            <label htmlFor="phone">phone</label>
            <input type="text" name="phone" />
            <label htmlFor="email">email</label>
            <input type="text" name="email" />
        </form>
    </section>
  )
}

export default CartForm