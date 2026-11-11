import { useDispatch, useSelector } from "react-redux";
import { clearItems, type CartState } from "@/store/cartSlice";

export const Cart = () => {
    const cartItems = useSelector((store: { cart: CartState }) => store.cart.cartItems);
    const dispatch = useDispatch();

    return (
        <div className="cart-page">
            <div className="cart-header">
                <h1>Cart <span>({cartItems.length})</span></h1>
            <button
                    className="cart-clear"
                    onClick={() => dispatch(clearItems())}
            >
                    Clear Cart
            </button>
            </div>
            <div className="cart-items">
            {cartItems.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div className="cart-item-info">
                            <h2>{item.title}</h2>
                            {item.brand && <p>{item.brand}</p>}
                            <p className="cart-item-price">${item.price}</p>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    );
};
