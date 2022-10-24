class cartItems {
  constructor(
    id,
    name,
    description,
    price,
    discount,
    discountedPrice,
    quantity
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.discountedPrice = discountedPrice;
    this.quantity = quantity;
  }
}

export default cartItems;
