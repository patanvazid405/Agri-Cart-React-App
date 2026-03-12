function QuantityControl({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="quantity-control">
      <button aria-label="Decrease quantity" onClick={onDecrease} type="button">
        -
      </button>
      <span>{quantity}</span>
      <button aria-label="Increase quantity" onClick={onIncrease} type="button">
        +
      </button>
    </div>
  )
}

export default QuantityControl
