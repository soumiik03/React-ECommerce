import { useDispatch, useSelector } from "react-redux";
import { clearItems, type CartState } from "@/store/cartSlice";

export const Cart = () => {
    const cartItems = useSelector((store: { cart: CartState }) => store.cart.cartItems);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 className="font-bold text-2xl">Cart ({cartItems.length})</h1>
            <button
                    className="bg-black text-white p-1 rounded-md"
                    onClick={() => dispatch(clearItems())}
            >
                    Clear Cart
            </button>
            {cartItems.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="product">
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.brand}</p>
                        <p>{item.price}</p>
                    </div>
            ))}
        </div>
    );
};
