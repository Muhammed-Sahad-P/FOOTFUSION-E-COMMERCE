import { useContext, useEffect, useState } from "react";
import { CollectionContext } from "../../Context/CollectionContext";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const CartCard = (props) => {
  const [cart, setCart] = useState([]);

  const { removeFromCart, addToCart, cartItems } =
    useContext(CollectionContext);

  const totalPrice = Object.keys(cartItems).reduce((total, key) => {
    const { price, quantity } = cartItems[key];
    return total + price * quantity;
  }, 0);

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const userId = user.user._id;

  useEffect(() => {
    const getToCart = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/users/cart/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to add cart data");
        }
        const data = await response.json();
        setCart(data.products || []);
        console.log("Cart added:", data);
      } catch (error) {
        console.error("Error adding cart", error);
      }
    };
    getToCart(userId);
  }, [userId]);

  console.log("cart", cart);

  const handleDelete = (id) => {
    removeFromCart(id, true);
  };

  return (
    <>
      {cart.map((item) => (
        <div
          key={item.productId._id}
          className="bg-white p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={item.productId.image}
            alt={item.name}
            className="w-full h-48 object-cover mb-4 rounded-lg hover:scale-90 transition-transform duration-300"
          />
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">{item.productId.name}</h2>
            <p className="text-gray-700 text-xl font-semibold">
              ₹ {item.productId.price}
            </p>
          </div>
          <p className="text-sm text-gray-500 mb-2">{item.productId.type}</p>
          <div className="flex items-center mb-4">
            <button
              onClick={() => addToCart(item.productId._id)}
              className="bg-[#131842] text-white px-4 py-1 rounded-lg hover:bg-gray-800 mr-2"
            >
              +
            </button>
            <span className="text-xl font-semibold">{item.productId.quantity}</span>
            <button
              onClick={() => removeFromCart(item.productId._id)}
              className="bg-[#131842] text-white px-4 py-1 rounded-lg hover:bg-gray-800 ml-2"
            >
              -
            </button>
            <div className="ml-auto">
              <MdDelete
                className="text-2xl cursor-pointer"
                onClick={() => handleDelete(item.productId._id)}
              />
            </div>
          </div>
          <div className="text-center mt-2">
            <p className="text-xl font-semibold">
              Item Total: ₹ {item.productId.price * item.quantity}
            </p>
          </div>
        </div>
      ))}
      <div className="bg-white p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mt-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

          <div className="border-t border-gray-300 pt-4">
            <p className="text-sm font-semibold mb-2">
              Total Cart Price: ₹ {totalPrice.toFixed(2)}
            </p>
            <p className="text-sm font-semibold mb-2">Shipping Charge: Free</p>
            <p className="text-sm font-semibold mb-2">Discount: NA</p>
          </div>

          <div className="flex justify-between items-center mt-6">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-lg font-semibold text-red-500">
              ₹ {totalPrice.toFixed(2)}
            </p>
          </div>

          <Link
            to="/payment"
            className="block bg-[#131842] mt-6 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartCard;
