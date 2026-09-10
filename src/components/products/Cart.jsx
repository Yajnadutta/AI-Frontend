// import React, { useMemo, useState } from "react";
// import Header from "../Header";
// import Footer from "../Footer";
// import { Link } from "react-router-dom";
// import { useCart } from "../../components/context/CartContext";

// import "../../styling/Home.css";
// import "../../styling/products.css";

// const Cart = () => {
//   const {
//     items,
//     increaseQty,
//     decreaseQty,
//     removeFromCart,
//     clearCart,
//   } = useCart();

//   const [isGenerating, setIsGenerating] = useState(false);

//   // Customer form
//   const [showCustomerForm, setShowCustomerForm] = useState(false);

//   const [customer, setCustomer] = useState({
//     fullName: "",
//     mobile: "",
//     email: "",
//     place: "",
//   });

//   // -----------------------------------------
//   // CALCULATE TOTAL
//   // -----------------------------------------

//   const subtotal = useMemo(() => {
//     return items.reduce((total, item) => {
//       const price = Number(item.price) || 0;
//       const qty = Number(item.qty) || 0;

//       return total + price * qty;
//     }, 0);
//   }, [items]);

//   const deliveryCharge = subtotal > 0 ? 0 : 0;

//   const total = subtotal + deliveryCharge;

//   // -----------------------------------------
//   // CUSTOMER INPUT
//   // -----------------------------------------

//   const handleCustomerChange = (e) => {
//     const { name, value } = e.target;

//     setCustomer((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // -----------------------------------------
//   // OPEN CUSTOMER FORM
//   // -----------------------------------------

//   const handleProceedClick = () => {
//     if (!items.length) {
//       return;
//     }

//     setShowCustomerForm(true);
//   };

//   // -----------------------------------------
//   // GENERATE BILL IMAGE
//   // -----------------------------------------

//   const generateBillImage = async () => {
//     const canvas = document.createElement("canvas");

//     const ctx = canvas.getContext("2d");

//     const width = 1000;

//     const customerHeight = 180;
//     const headerHeight = 150;
//     const rowHeight = 75;
//     const summaryHeight = 220;
//     const footerHeight = 100;

//     const height =
//       headerHeight +
//       customerHeight +
//       items.length * rowHeight +
//       summaryHeight +
//       footerHeight;

//     canvas.width = width;
//     canvas.height = height;

//     // -----------------------------------------
//     // BACKGROUND
//     // -----------------------------------------

//     ctx.fillStyle = "#f5f8f5";
//     ctx.fillRect(0, 0, width, height);

//     // -----------------------------------------
//     // WHITE BILL
//     // -----------------------------------------

//     ctx.fillStyle = "#ffffff";

//     ctx.fillRect(
//       40,
//       30,
//       width - 80,
//       height - 60
//     );

//     // -----------------------------------------
//     // HEADER
//     // -----------------------------------------

//     ctx.fillStyle = "#08752f";

//     ctx.fillRect(
//       40,
//       30,
//       width - 80,
//       headerHeight
//     );

//     ctx.fillStyle = "#ffffff";

//     ctx.font = "bold 42px Arial";

//     ctx.fillText(
//       "ORYA",
//       70,
//       80
//     );

//     ctx.font = "20px Arial";

//     ctx.fillText(
//       "Bio-Solutions",
//       70,
//       115
//     );

//     ctx.font = "bold 28px Arial";

//     ctx.fillText(
//       "ORDER BILL",
//       730,
//       85
//     );

//     ctx.font = "16px Arial";

//     ctx.fillText(
//       `Date: ${new Date().toLocaleDateString("en-IN")}`,
//       730,
//       115
//     );

//     // -----------------------------------------
//     // CUSTOMER DETAILS
//     // -----------------------------------------

//     let y = 215;

//     ctx.fillStyle = "#08752f";

//     ctx.font = "bold 21px Arial";

//     ctx.fillText(
//       "CUSTOMER DETAILS",
//       70,
//       y
//     );

//     y += 40;

//     ctx.fillStyle = "#333333";

//     ctx.font = "17px Arial";

//     ctx.fillText(
//       `Name: ${customer.fullName}`,
//       70,
//       y
//     );

//     ctx.fillText(
//       `Mobile: ${customer.mobile}`,
//       400,
//       y
//     );

//     y += 32;

//     ctx.fillText(
//       `Email: ${customer.email}`,
//       70,
//       y
//     );

//     ctx.fillText(
//       `Place: ${customer.place}`,
//       400,
//       y
//     );

//     // -----------------------------------------
//     // DIVIDER
//     // -----------------------------------------

//     y += 45;

//     ctx.strokeStyle = "#dddddd";

//     ctx.lineWidth = 1;

//     ctx.beginPath();

//     ctx.moveTo(70, y);

//     ctx.lineTo(930, y);

//     ctx.stroke();

//     // -----------------------------------------
//     // PRODUCT HEADER
//     // -----------------------------------------

//     y += 45;

//     ctx.fillStyle = "#333333";

//     ctx.font = "bold 17px Arial";

//     ctx.fillText("Product", 70, y);

//     ctx.fillText("Qty", 570, y);

//     ctx.fillText("Price", 670, y);

//     ctx.fillText("Amount", 800, y);

//     // -----------------------------------------
//     // PRODUCTS
//     // -----------------------------------------

//     y += 45;

//     items.forEach((item) => {
//       const qty = Number(item.qty) || 0;
//       const price = Number(item.price) || 0;

//       const itemTotal = qty * price;

//       ctx.fillStyle = "#333333";

//       ctx.font = "16px Arial";

//       ctx.fillText(
//         item.name.substring(0, 50),
//         70,
//         y
//       );

//       ctx.fillText(
//         String(qty),
//         580,
//         y
//       );

//       ctx.fillText(
//         `₹${price.toFixed(2)}`,
//         670,
//         y
//       );

//       ctx.fillText(
//         `₹${itemTotal.toFixed(2)}`,
//         800,
//         y
//       );

//       ctx.strokeStyle = "#eeeeee";

//       ctx.beginPath();

//       ctx.moveTo(70, y + 22);

//       ctx.lineTo(930, y + 22);

//       ctx.stroke();

//       y += rowHeight;
//     });

//     // -----------------------------------------
//     // SUMMARY
//     // -----------------------------------------

//     y += 20;

//     ctx.fillStyle = "#333333";

//     ctx.font = "17px Arial";

//     ctx.fillText(
//       "Subtotal",
//       650,
//       y
//     );

//     ctx.fillText(
//       `₹${subtotal.toFixed(2)}`,
//       800,
//       y
//     );

//     y += 42;

//     ctx.fillText(
//       "Delivery",
//       650,
//       y
//     );

//     ctx.fillText(
//       deliveryCharge === 0
//         ? "FREE"
//         : `₹${deliveryCharge.toFixed(2)}`,
//       800,
//       y
//     );

//     y += 45;

//     ctx.strokeStyle = "#08752f";

//     ctx.lineWidth = 2;

//     ctx.beginPath();

//     ctx.moveTo(620, y);

//     ctx.lineTo(930, y);

//     ctx.stroke();

//     y += 45;

//     ctx.fillStyle = "#08752f";

//     ctx.font = "bold 25px Arial";

//     ctx.fillText(
//       "TOTAL",
//       650,
//       y
//     );

//     ctx.fillText(
//       `₹${total.toFixed(2)}`,
//       800,
//       y
//     );

//     // -----------------------------------------
//     // FOOTER
//     // -----------------------------------------

//     ctx.fillStyle = "#777777";

//     ctx.font = "14px Arial";

//     ctx.fillText(
//       "Thank you for choosing ORYA sustainable products.",
//       70,
//       height - 75
//     );

//     ctx.fillText(
//       "This is a computer-generated order bill.",
//       70,
//       height - 50
//     );

//     return canvas;
//   };

//   // -----------------------------------------
//   // DOWNLOAD BILL
//   // -----------------------------------------

//   const downloadBill = async () => {
//     if (!customer.fullName) {
//       setShowCustomerForm(true);
//       return;
//     }

//     const canvas = await generateBillImage();

//     const image = canvas.toDataURL("image/png");

//     const link = document.createElement("a");

//     link.href = image;

//     link.download = `ORYA-Order-${Date.now()}.png`;

//     link.click();
//   };

//   // -----------------------------------------
//   // SHARE / WHATSAPP
//   // -----------------------------------------

//   const proceedToOrder = async (e) => {
//     e.preventDefault();

//     if (!customer.fullName.trim()) {
//       alert("Please enter your full name.");
//       return;
//     }

//     if (!customer.mobile.trim()) {
//       alert("Please enter your mobile number.");
//       return;
//     }

//     if (!/^[0-9]{10}$/.test(customer.mobile.trim())) {
//       alert("Please enter a valid 10 digit mobile number.");
//       return;
//     }

//     if (!customer.email.trim()) {
//       alert("Please enter your email address.");
//       return;
//     }

//     if (!customer.place.trim()) {
//       alert("Please enter your place.");
//       return;
//     }

//     try {
//       setIsGenerating(true);

//       const canvas = await generateBillImage();

//       const imageData =
//         canvas.toDataURL("image/png");

//       // -----------------------------------------
//       // ORDER MESSAGE
//       // -----------------------------------------

//       const orderLines = items
//         .map((item) => {
//           const qty = Number(item.qty) || 0;

//           const price = Number(item.price) || 0;

//           const itemTotal = qty * price;

//           return (
//             `• ${item.name}\n` +
//             `  Quantity: ${qty}\n` +
//             `  Price: ₹${price.toFixed(2)}\n` +
//             `  Amount: ₹${itemTotal.toFixed(2)}`
//           );
//         })
//         .join("\n\n");

//       const message = `
// Hello ORYA,

// I would like to place an order.

// CUSTOMER DETAILS
// -------------------------
// Name: ${customer.fullName}
// Mobile: ${customer.mobile}
// Email: ${customer.email}
// Place: ${customer.place}

// ORDER DETAILS
// -------------------------
// ${orderLines}

// -------------------------
// Subtotal: ₹${subtotal.toFixed(2)}
// Delivery: ${
//         deliveryCharge === 0
//           ? "FREE"
//           : `₹${deliveryCharge.toFixed(2)}`
//       }
// Total: ₹${total.toFixed(2)}
// -------------------------

// Please confirm my order.

// Thank you.
//       `.trim();

//       // -----------------------------------------
//       // CONVERT CANVAS TO FILE
//       // -----------------------------------------

//       const blob = await new Promise((resolve) =>
//         canvas.toBlob(resolve, "image/png")
//       );

//       const file = new File(
//         [blob],
//         `ORYA-Order-${Date.now()}.png`,
//         {
//           type: "image/png",
//         }
//       );

//       // -----------------------------------------
//       // MOBILE SHARE
//       // -----------------------------------------

//       if (
//         navigator.share &&
//         navigator.canShare &&
//         navigator.canShare({
//           files: [file],
//         })
//       ) {
//         await navigator.share({
//           title: "ORYA Order Bill",
//           text: message,
//           files: [file],
//         });
//       } else {
//         // -----------------------------------------
//         // DESKTOP FALLBACK
//         // -----------------------------------------

//         const link =
//           document.createElement("a");

//         link.href = imageData;

//         link.download =
//           `ORYA-Order-${Date.now()}.png`;

//         link.click();

//         // Open WhatsApp with order information
//         const whatsappUrl =
//           `https://wa.me/?text=${encodeURIComponent(
//             message
//           )}`;

//         window.open(
//           whatsappUrl,
//           "_blank"
//         );

//         alert(
//           "Bill downloaded. WhatsApp will open with your order details. Please attach the downloaded bill image."
//         );
//       }

//       // Close form
//       setShowCustomerForm(false);

//     } catch (error) {
//       console.error(
//         "Order generation failed:",
//         error
//       );

//       if (
//         error.name !== "AbortError"
//       ) {
//         alert(
//           "Unable to generate order. Please try again."
//         );
//       }
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   // -----------------------------------------
//   // UI
//   // -----------------------------------------

//   return (
//     <div className="home">

//       <Header />

//       <main className="orya-cart-page">

//         <div className="orya-cart-container">

//           {/* PAGE HEADING */}

//           <div className="orya-cart-heading">

//             <div>

//               <span className="orya-cart-eyebrow">
//                 YOUR SHOPPING CART
//               </span>

//               <h1>Your Cart</h1>

//               <p>
//                 Review your sustainable products
//                 before placing your order.
//               </p>

//             </div>

//             {items.length > 0 && (
//               <Link
//                 to="/products"
//                 className="orya-cart-continue"
//               >
//                 ← Continue Shopping
//               </Link>
//             )}

//           </div>

//           {/* EMPTY CART */}

//           {items.length === 0 ? (

//             <div className="orya-empty-cart">

//               <div className="orya-empty-cart-icon">

//                 <svg
//                   viewBox="0 0 24 24"
//                   width="55"
//                   height="55"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 >
//                   <circle
//                     cx="9"
//                     cy="21"
//                     r="1.5"
//                   />

//                   <circle
//                     cx="19"
//                     cy="21"
//                     r="1.5"
//                   />

//                   <path d="M2 3h2l2.5 12.5a2 2 0 0 0 2 1.5h8.8a2 2 0 0 0 2-1.5L21 7H6" />
//                 </svg>

//               </div>

//               <h2>
//                 Your cart is empty
//               </h2>

//               <p>
//                 Looks like you haven't added
//                 any sustainable products yet.
//               </p>

//               <Link
//                 to="/products"
//                 className="orya-btn orya-btn--primary"
//               >
//                 Browse Products
//               </Link>

//             </div>

//           ) : (

//             <div className="orya-cart-layout">

//               {/* CART ITEMS */}

//               <section className="orya-cart-items">

//                 <div className="orya-cart-items-header">

//                   <h2>
//                     Cart Items
//                     <span>
//                       {items.length}
//                     </span>
//                   </h2>

//                   <button
//                     type="button"
//                     className="orya-clear-cart"
//                     onClick={clearCart}
//                   >
//                     Clear Cart
//                   </button>

//                 </div>

//                 {items.map((item) => {

//                   const quantity =
//                     Number(item.qty) || 1;

//                   const price =
//                     Number(item.price) || 0;

//                   const itemTotal =
//                     price * quantity;

//                   return (
//                     <article
//                       className="orya-cart-item"
//                       key={item.id}
//                     >

//                       {/* ICON */}

//                       <div className="orya-cart-product-icon">

//                         <svg
//                           viewBox="0 0 48 48"
//                           fill="none"
//                         >
//                           <rect
//                             x="8"
//                             y="20"
//                             width="32"
//                             height="18"
//                             rx="3"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                           />

//                           <path
//                             d="M8 20L24 10L40 20"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                           />
//                         </svg>

//                       </div>

//                       {/* PRODUCT */}

//                       <div className="orya-cart-product-info">

//                         <h3>
//                           {item.name}
//                         </h3>

//                         <p>
//                           ₹{price.toFixed(2)}

//                           <span>
//                             {" "}
//                             / {item.unit}
//                           </span>
//                         </p>

//                       </div>

//                       {/* QUANTITY */}

//                       <div className="orya-cart-quantity">

//                         <button
//                           type="button"
//                           onClick={() =>
//                             decreaseQty(item.id)
//                           }
//                         >
//                           −
//                         </button>

//                         <span>
//                           {quantity}
//                         </span>

//                         <button
//                           type="button"
//                           onClick={() =>
//                             increaseQty(item.id)
//                           }
//                         >
//                           +
//                         </button>

//                       </div>

//                       {/* AMOUNT */}

//                       <div className="orya-cart-item-total">

//                         <span>
//                           Amount
//                         </span>

//                         <strong>
//                           ₹{itemTotal.toFixed(2)}
//                         </strong>

//                       </div>

//                       {/* REMOVE */}

//                       <button
//                         type="button"
//                         className="orya-remove-item"
//                         onClick={() =>
//                           removeFromCart(item.id)
//                         }
//                         aria-label={`Remove ${item.name}`}
//                       >
//                         <svg
//                           viewBox="0 0 24 24"
//                           width="19"
//                           height="19"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                         >
//                           <path d="M3 6h18" />
//                           <path d="M8 6V4h8v2" />
//                           <path d="M19 6l-1 15H6L5 6" />
//                         </svg>
//                       </button>

//                     </article>
//                   );
//                 })}

//                 {/* DOWNLOAD */}

//                 <button
//                   type="button"
//                   className="orya-download-bill"
//                   onClick={downloadBill}
//                 >
//                   ↓ Download Bill
//                 </button>

//               </section>

//               {/* SUMMARY */}

//               <aside className="orya-order-summary">

//                 <div className="orya-summary-top">

//                   <span>
//                     ORDER SUMMARY
//                   </span>

//                   <div className="orya-summary-icon">
//                     🛒
//                   </div>

//                 </div>

//                 <div className="orya-summary-row">

//                   <span>
//                     Products ({items.length})
//                   </span>

//                   <strong>
//                     ₹{subtotal.toFixed(2)}
//                   </strong>

//                 </div>

//                 <div className="orya-summary-row">

//                   <span>
//                     Delivery
//                   </span>

//                   <strong className="orya-free">
//                     FREE
//                   </strong>

//                 </div>

//                 <div className="orya-summary-divider" />

//                 <div className="orya-summary-total">

//                   <span>
//                     Total
//                   </span>

//                   <strong>
//                     ₹{total.toFixed(2)}
//                   </strong>

//                 </div>

//                 {/* PROCEED */}

//                 <button
//                   type="button"
//                   className="orya-proceed-btn"
//                   onClick={handleProceedClick}
//                 >
//                   Proceed to Order
//                   <span>→</span>
//                 </button>

//                 <div className="orya-whatsapp-note">

//                   <span>💬</span>

//                   Enter your details and your
//                   bill will be generated and
//                   shared through WhatsApp.

//                 </div>

//               </aside>

//             </div>
//           )}

//         </div>

//       </main>

//       <Footer />


//       {/* =====================================================
//           CUSTOMER DETAILS MODAL
//       ===================================================== */}

//       {showCustomerForm && (

//         <div
//           className="orya-customer-overlay"
//           onClick={() =>
//             !isGenerating &&
//             setShowCustomerForm(false)
//           }
//         >

//           <div
//             className="orya-customer-modal"
//             onClick={(e) =>
//               e.stopPropagation()
//             }
//           >

//             <button
//               type="button"
//               className="orya-customer-close"
//               onClick={() =>
//                 setShowCustomerForm(false)
//               }
//               disabled={isGenerating}
//             >
//               ×
//             </button>

//             <div className="orya-customer-header">

//               <div className="orya-customer-icon">
//                 👤
//               </div>

//               <div>
//                 <h2>
//                   Customer Details
//                 </h2>

//                 <p>
//                   Please enter your details
//                   before placing your order.
//                 </p>
//               </div>

//             </div>

//             <form
//               onSubmit={proceedToOrder}
//               className="orya-customer-form"
//             >

//               {/* FULL NAME */}

//               <div className="orya-form-group">

//                 <label>
//                   Full Name
//                   <span>*</span>
//                 </label>

//                 <input
//                   type="text"
//                   name="fullName"
//                   value={customer.fullName}
//                   onChange={handleCustomerChange}
//                   placeholder="Enter your full name"
//                   required
//                 />

//               </div>

//               {/* MOBILE */}

//               <div className="orya-form-group">

//                 <label>
//                   Mobile Number
//                   <span>*</span>
//                 </label>

//                 <input
//                   type="tel"
//                   name="mobile"
//                   value={customer.mobile}
//                   onChange={(e) => {

//                     const value =
//                       e.target.value
//                         .replace(/\D/g, "")
//                         .slice(0, 10);

//                     setCustomer((prev) => ({
//                       ...prev,
//                       mobile: value,
//                     }));

//                   }}
//                   placeholder="Enter 10 digit mobile number"
//                   maxLength="10"
//                   required
//                 />

//               </div>

//               {/* EMAIL */}

//               <div className="orya-form-group">

//                 <label>
//                   Email ID
//                   <span>*</span>
//                 </label>

//                 <input
//                   type="email"
//                   name="email"
//                   value={customer.email}
//                   onChange={handleCustomerChange}
//                   placeholder="Enter your email address"
//                   required
//                 />

//               </div>

//               {/* PLACE */}

//               <div className="orya-form-group">

//                 <label>
//                   Place
//                   <span>*</span>
//                 </label>

//                 <input
//                   type="text"
//                   name="place"
//                   value={customer.place}
//                   onChange={handleCustomerChange}
//                   placeholder="Enter your city / place"
//                   required
//                 />

//               </div>

//               {/* ORDER PREVIEW */}

//               <div className="orya-customer-order-preview">

//                 <div>
//                   <span>
//                     Products
//                   </span>

//                   <strong>
//                     {items.length}
//                   </strong>
//                 </div>

//                 <div>
//                   <span>
//                     Order Total
//                   </span>

//                   <strong>
//                     ₹{total.toFixed(2)}
//                   </strong>
//                 </div>

//               </div>

//               {/* SUBMIT */}

//               <button
//                 type="submit"
//                 className="orya-confirm-order-btn"
//                 disabled={isGenerating}
//               >

//                 {isGenerating
//                   ? "Generating Bill..."
//                   : "Generate Bill & Order"}

//                 {!isGenerating && (
//                   <span>
//                     →
//                   </span>
//                 )}

//               </button>

//               <p className="orya-form-note">
//                 Your details and order information
//                 will be included in the bill and
//                 WhatsApp message.
//               </p>

//             </form>

//           </div>

//         </div>

//       )}

//     </div>
//   );
// };

// export default Cart;




import React, { useMemo, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useCart } from "../../components/context/CartContext";

import "../../styling/Home.css";
import "../../styling/products.css";

// =====================================================
// ORYA WHATSAPP NUMBER
// =====================================================

const WHATSAPP_URL = "https://wa.me/917809903359";

const Cart = () => {
  const {
    items,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useCart();

  const [isGenerating, setIsGenerating] = useState(false);

  // =====================================================
  // CUSTOMER FORM
  // =====================================================

  const [showCustomerForm, setShowCustomerForm] =
    useState(false);

  const [customer, setCustomer] = useState({
    fullName: "",
    mobile: "",
    email: "",
    place: "",
  });

  // =====================================================
  // CALCULATE TOTAL
  // =====================================================

  const subtotal = useMemo(() => {
    return items.reduce((total, item) => {
      const price = Number(item.price) || 0;
      const qty = Number(item.qty) || 0;

      return total + price * qty;
    }, 0);
  }, [items]);

  const deliveryCharge = subtotal > 0 ? 0 : 0;

  const total = subtotal + deliveryCharge;

  // =====================================================
  // CUSTOMER INPUT
  // =====================================================

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;

    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // OPEN CUSTOMER FORM
  // =====================================================

  const handleProceedClick = () => {
    if (!items.length) {
      return;
    }

    setShowCustomerForm(true);
  };

  // =====================================================
  // GENERATE BILL IMAGE
  // =====================================================

  const generateBillImage = async () => {
    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d");

    const width = 1000;

    const customerHeight = 180;
    const headerHeight = 150;
    const rowHeight = 75;
    const summaryHeight = 220;
    const footerHeight = 100;

    const height =
      headerHeight +
      customerHeight +
      items.length * rowHeight +
      summaryHeight +
      footerHeight;

    canvas.width = width;
    canvas.height = height;

    // =====================================================
    // BACKGROUND
    // =====================================================

    ctx.fillStyle = "#f5f8f5";

    ctx.fillRect(
      0,
      0,
      width,
      height
    );

    // =====================================================
    // WHITE BILL
    // =====================================================

    ctx.fillStyle = "#ffffff";

    ctx.fillRect(
      40,
      30,
      width - 80,
      height - 60
    );

    // =====================================================
    // HEADER
    // =====================================================

    ctx.fillStyle = "#08752f";

    ctx.fillRect(
      40,
      30,
      width - 80,
      headerHeight
    );

    ctx.fillStyle = "#ffffff";

    ctx.font = "bold 42px Arial";

    ctx.fillText(
      "ORYA",
      70,
      80
    );

    ctx.font = "20px Arial";

    ctx.fillText(
      "Bio-Solutions",
      70,
      115
    );

    ctx.font = "bold 28px Arial";

    ctx.fillText(
      "ORDER BILL",
      730,
      85
    );

    ctx.font = "16px Arial";

    ctx.fillText(
      `Date: ${new Date().toLocaleDateString(
        "en-IN"
      )}`,
      730,
      115
    );

    // =====================================================
    // CUSTOMER DETAILS
    // =====================================================

    let y = 215;

    ctx.fillStyle = "#08752f";

    ctx.font = "bold 21px Arial";

    ctx.fillText(
      "CUSTOMER DETAILS",
      70,
      y
    );

    y += 40;

    ctx.fillStyle = "#333333";

    ctx.font = "17px Arial";

    ctx.fillText(
      `Name: ${customer.fullName}`,
      70,
      y
    );

    ctx.fillText(
      `Mobile: ${customer.mobile}`,
      400,
      y
    );

    y += 32;

    ctx.fillText(
      `Email: ${customer.email}`,
      70,
      y
    );

    ctx.fillText(
      `Place: ${customer.place}`,
      400,
      y
    );

    // =====================================================
    // DIVIDER
    // =====================================================

    y += 45;

    ctx.strokeStyle = "#dddddd";

    ctx.lineWidth = 1;

    ctx.beginPath();

    ctx.moveTo(
      70,
      y
    );

    ctx.lineTo(
      930,
      y
    );

    ctx.stroke();

    // =====================================================
    // PRODUCT HEADER
    // =====================================================

    y += 45;

    ctx.fillStyle = "#333333";

    ctx.font = "bold 17px Arial";

    ctx.fillText(
      "Product",
      70,
      y
    );

    ctx.fillText(
      "Qty",
      570,
      y
    );

    ctx.fillText(
      "Price",
      670,
      y
    );

    ctx.fillText(
      "Amount",
      800,
      y
    );

    // =====================================================
    // PRODUCTS
    // =====================================================

    y += 45;

    items.forEach((item) => {
      const qty =
        Number(item.qty) || 0;

      const price =
        Number(item.price) || 0;

      const itemTotal =
        qty * price;

      ctx.fillStyle = "#333333";

      ctx.font = "16px Arial";

      ctx.fillText(
        item.name.substring(
          0,
          50
        ),
        70,
        y
      );

      ctx.fillText(
        String(qty),
        580,
        y
      );

      ctx.fillText(
        `₹${price.toFixed(2)}`,
        670,
        y
      );

      ctx.fillText(
        `₹${itemTotal.toFixed(2)}`,
        800,
        y
      );

      ctx.strokeStyle = "#eeeeee";

      ctx.lineWidth = 1;

      ctx.beginPath();

      ctx.moveTo(
        70,
        y + 22
      );

      ctx.lineTo(
        930,
        y + 22
      );

      ctx.stroke();

      y += rowHeight;
    });

    // =====================================================
    // SUMMARY
    // =====================================================

    y += 20;

    ctx.fillStyle = "#333333";

    ctx.font = "17px Arial";

    ctx.fillText(
      "Subtotal",
      650,
      y
    );

    ctx.fillText(
      `₹${subtotal.toFixed(2)}`,
      800,
      y
    );

    y += 42;

    ctx.fillText(
      "Delivery",
      650,
      y
    );

    ctx.fillText(
      deliveryCharge === 0
        ? "FREE"
        : `₹${deliveryCharge.toFixed(2)}`,
      800,
      y
    );

    y += 45;

    ctx.strokeStyle = "#08752f";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(
      620,
      y
    );

    ctx.lineTo(
      930,
      y
    );

    ctx.stroke();

    y += 45;

    ctx.fillStyle = "#08752f";

    ctx.font = "bold 25px Arial";

    ctx.fillText(
      "TOTAL",
      650,
      y
    );

    ctx.fillText(
      `₹${total.toFixed(2)}`,
      800,
      y
    );

    // =====================================================
    // FOOTER
    // =====================================================

    ctx.fillStyle = "#777777";

    ctx.font = "14px Arial";

    ctx.fillText(
      "Thank you for choosing ORYA sustainable products.",
      70,
      height - 75
    );

    ctx.fillText(
      "This is a computer-generated order bill.",
      70,
      height - 50
    );

    return canvas;
  };

  // =====================================================
  // DOWNLOAD BILL
  // =====================================================

  const downloadBill = async () => {
    if (!customer.fullName.trim()) {
      setShowCustomerForm(true);
      return;
    }

    try {
      const canvas =
        await generateBillImage();

      const image =
        canvas.toDataURL(
          "image/png"
        );

      const link =
        document.createElement("a");

      link.href = image;

      link.download =
        `ORYA-Order-${Date.now()}.png`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

    } catch (error) {
      console.error(
        "Bill download failed:",
        error
      );

      alert(
        "Unable to download bill."
      );
    }
  };

  // =====================================================
  // CREATE WHATSAPP MESSAGE
  // =====================================================

  const createWhatsAppMessage = () => {
    const orderLines = items
      .map((item) => {
        const qty =
          Number(item.qty) || 0;

        const price =
          Number(item.price) || 0;

        const itemTotal =
          qty * price;

        return (
          `• ${item.name}\n` +
          `  Quantity: ${qty}\n` +
          `  Price: ₹${price.toFixed(2)}\n` +
          `  Amount: ₹${itemTotal.toFixed(2)}`
        );
      })
      .join("\n\n");

    return `
Hello ORYA,

I would like to place an order.

CUSTOMER DETAILS
-------------------------
Name: ${customer.fullName}
Mobile: ${customer.mobile}
Email: ${customer.email}
Place: ${customer.place}

ORDER DETAILS
-------------------------
${orderLines}

-------------------------
Subtotal: ₹${subtotal.toFixed(2)}
Delivery: ${
      deliveryCharge === 0
        ? "FREE"
        : `₹${deliveryCharge.toFixed(2)}`
    }
Total: ₹${total.toFixed(2)}
-------------------------

I have attached the ORYA order bill image.

Please confirm my order.

Thank you.
    `.trim();
  };

  // =====================================================
  // PROCEED TO ORDER
  // =====================================================

  const proceedToOrder = async (e) => {
    e.preventDefault();

    // =====================================================
    // VALIDATION
    // =====================================================

    if (!customer.fullName.trim()) {
      alert(
        "Please enter your full name."
      );
      return;
    }

    if (!customer.mobile.trim()) {
      alert(
        "Please enter your mobile number."
      );
      return;
    }

    if (
      !/^[0-9]{10}$/.test(
        customer.mobile.trim()
      )
    ) {
      alert(
        "Please enter a valid 10 digit mobile number."
      );
      return;
    }

    if (!customer.email.trim()) {
      alert(
        "Please enter your email address."
      );
      return;
    }

    if (!customer.place.trim()) {
      alert(
        "Please enter your place."
      );
      return;
    }

    try {
      setIsGenerating(true);

      // =====================================================
      // GENERATE BILL
      // =====================================================

      const canvas =
        await generateBillImage();

      // =====================================================
      // CREATE IMAGE DATA
      // =====================================================

      const imageData =
        canvas.toDataURL(
          "image/png"
        );

      // =====================================================
      // CREATE WHATSAPP MESSAGE
      // =====================================================

      const message =
        createWhatsAppMessage();

      // =====================================================
      // CREATE BILL FILE
      // =====================================================

      const blob =
        await new Promise(
          (resolve) => {
            canvas.toBlob(
              resolve,
              "image/png"
            );
          }
        );

      if (!blob) {
        throw new Error(
          "Unable to create bill image."
        );
      }

      const file = new File(
        [blob],
        `ORYA-Order-${Date.now()}.png`,
        {
          type: "image/png",
        }
      );

      // =====================================================
      // MOBILE SHARE
      // =====================================================
      //
      // On supported mobile devices, share:
      // 1. Bill image
      // 2. WhatsApp message
      //
      // The user can select WhatsApp from
      // the native share menu.
      //
      // =====================================================

      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({
          files: [file],
        })
      ) {
        try {

          await navigator.share({
            title:
              "ORYA Order Bill",

            text:
              message,

            files: [file],
          });

          setShowCustomerForm(false);
          alert(
            "Bill shared successfully! Please make sure to select 'ORYA Bio-Solutions' (+91 78099 03359) as the recipient in WhatsApp to complete your order."
          );

        } catch (shareError) {

          if (
            shareError.name ===
            "AbortError"
          ) {
            console.log(
              "User cancelled sharing."
            );
          } else {
            throw shareError;
          }
        }

        return;
      }

      // =====================================================
      // DESKTOP
      // =====================================================
      //
      // Browser cannot attach a local image directly
      // to a wa.me URL.
      //
      // Therefore:
      //
      // 1. Download bill image
      // 2. Open YOUR WhatsApp number
      // 3. Pre-fill the complete order message
      // 4. User attaches downloaded image
      //
      // =====================================================

      const link =
        document.createElement("a");

      link.href =
        imageData;

      link.download =
        `ORYA-Order-${Date.now()}.png`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      // =====================================================
      // OPEN YOUR SPECIFIC WHATSAPP NUMBER
      // =====================================================

      const whatsappUrl =
        `${WHATSAPP_URL}?text=${encodeURIComponent(
          message
        )}`;

    //   window.open(
    //     whatsappUrl,
    //     "_blank"
    //   );
        const whatsappLink = document.createElement("a");
        whatsappLink.href = whatsappUrl;
        whatsappLink.target = "_blank";
        whatsappLink.rel = "noopener noreferrer";
        document.body.appendChild(whatsappLink);
        whatsappLink.click();
        document.body.removeChild(whatsappLink);
      // =====================================================
      // USER MESSAGE
      // =====================================================

      alert(
        "Your bill has been downloaded. WhatsApp has been opened with the order details. Please attach the downloaded bill image and send it."
      );

      setShowCustomerForm(false);

    } catch (error) {

      console.error(
        "Order generation failed:",
        error
      );

      if (
        error.name !==
        "AbortError"
      ) {
        alert(
          "Unable to generate order. Please try again."
        );
      }

    } finally {

      setIsGenerating(false);

    }
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="home">

      <Header />

      <main className="orya-cart-page">

        <div className="orya-cart-container">

          {/* =================================================
              PAGE HEADING
          ================================================= */}

          <div className="orya-cart-heading">

            <div>

              <span className="orya-cart-eyebrow">
                YOUR SHOPPING CART
              </span>

              <h1>
                Your Cart
              </h1>

              <p>
                Review your sustainable
                products before placing
                your order.
              </p>

            </div>

            {items.length > 0 && (

              <Link
                to="/products"
                className="orya-cart-continue"
              >
                ← Continue Shopping
              </Link>

            )}

          </div>

          {/* =================================================
              EMPTY CART
          ================================================= */}

          {items.length === 0 ? (

            <div className="orya-empty-cart">

              <div className="orya-empty-cart-icon">

                <svg
                  viewBox="0 0 24 24"
                  width="55"
                  height="55"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >

                  <circle
                    cx="9"
                    cy="21"
                    r="1.5"
                  />

                  <circle
                    cx="19"
                    cy="21"
                    r="1.5"
                  />

                  <path d="M2 3h2l2.5 12.5a2 2 0 0 0 2 1.5h8.8a2 2 0 0 0 2-1.5L21 7H6" />

                </svg>

              </div>

              <h2>
                Your cart is empty
              </h2>

              <p>
                Looks like you haven't
                added any sustainable
                products yet.
              </p>

              <Link
                to="/products"
                className="orya-btn orya-btn--primary"
              >
                Browse Products
              </Link>

            </div>

          ) : (

            <div className="orya-cart-layout">

              {/* =================================================
                  CART ITEMS
              ================================================= */}

              <section className="orya-cart-items">

                <div className="orya-cart-items-header">

                  <h2>

                    Cart Items

                    <span>
                      {items.length}
                    </span>

                  </h2>

                  <button
                    type="button"
                    className="orya-clear-cart"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>

                </div>

                {items.map((item) => {

                  const quantity =
                    Number(item.qty) || 1;

                  const price =
                    Number(item.price) || 0;

                  const itemTotal =
                    price * quantity;

                  return (

                    <article
                      className="orya-cart-item"
                      key={item.id}
                    >

                      {/* PRODUCT ICON */}

                      <div className="orya-cart-product-icon">

                        <svg
                          viewBox="0 0 48 48"
                          fill="none"
                        >

                          <rect
                            x="8"
                            y="20"
                            width="32"
                            height="18"
                            rx="3"
                            stroke="currentColor"
                            strokeWidth="2"
                          />

                          <path
                            d="M8 20L24 10L40 20"
                            stroke="currentColor"
                            strokeWidth="2"
                          />

                        </svg>

                      </div>

                      {/* PRODUCT */}

                      <div className="orya-cart-product-info">

                        <h3>
                          {item.name}
                        </h3>

                        <p>

                          ₹
                          {price.toFixed(2)}

                          <span>
                            {" "}
                            / {item.unit}
                          </span>

                        </p>

                      </div>

                      {/* QUANTITY */}

                      <div className="orya-cart-quantity">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQty(
                              item.id
                            )
                          }
                        >
                          −
                        </button>

                        <span>
                          {quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQty(
                              item.id
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                      {/* AMOUNT */}

                      <div className="orya-cart-item-total">

                        <span>
                          Amount
                        </span>

                        <strong>

                          ₹
                          {itemTotal.toFixed(
                            2
                          )}

                        </strong>

                      </div>

                      {/* REMOVE */}

                      <button
                        type="button"
                        className="orya-remove-item"
                        onClick={() =>
                          removeFromCart(
                            item.id
                          )
                        }
                        aria-label={`Remove ${item.name}`}
                      >

                        <svg
                          viewBox="0 0 24 24"
                          width="19"
                          height="19"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >

                          <path d="M3 6h18" />

                          <path d="M8 6V4h8v2" />

                          <path d="M19 6l-1 15H6L5 6" />

                        </svg>

                      </button>

                    </article>

                  );

                })}

                {/* DOWNLOAD BILL */}

                <button
                  type="button"
                  className="orya-download-bill"
                  onClick={downloadBill}
                >
                  ↓ Download Bill
                </button>

              </section>

              {/* =================================================
                  ORDER SUMMARY
              ================================================= */}

              <aside className="orya-order-summary">

                <div className="orya-summary-top">

                  <span>
                    ORDER SUMMARY
                  </span>

                  <div className="orya-summary-icon">
                    🛒
                  </div>

                </div>

                <div className="orya-summary-row">

                  <span>
                    Products ({items.length})
                  </span>

                  <strong>
                    ₹
                    {subtotal.toFixed(2)}
                  </strong>

                </div>

                <div className="orya-summary-row">

                  <span>
                    Delivery
                  </span>

                  <strong className="orya-free">
                    FREE
                  </strong>

                </div>

                <div className="orya-summary-divider" />

                <div className="orya-summary-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    ₹
                    {total.toFixed(2)}
                  </strong>

                </div>

                {/* PROCEED */}

                <button
                  type="button"
                  className="orya-proceed-btn"
                  onClick={
                    handleProceedClick
                  }
                >

                  Proceed to Order

                  <span>
                    →
                  </span>

                </button>

                <div className="orya-whatsapp-note">

                  <span>
                    💬
                  </span>

                  Enter your details and
                  your bill will be generated
                  and shared through WhatsApp.

                </div>

              </aside>

            </div>

          )}

        </div>

      </main>

      <Footer />

      {/* =====================================================
          CUSTOMER DETAILS MODAL
      ===================================================== */}

      {showCustomerForm && (

        <div
          className="orya-customer-overlay"
          onClick={() =>
            !isGenerating &&
            setShowCustomerForm(false)
          }
        >

          <div
            className="orya-customer-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              type="button"
              className="orya-customer-close"
              onClick={() =>
                setShowCustomerForm(false)
              }
              disabled={isGenerating}
            >
              ×
            </button>

            {/* HEADER */}

            <div className="orya-customer-header">

              <div className="orya-customer-icon">
                👤
              </div>

              <div>

                <h2>
                  Customer Details
                </h2>

                <p>
                  Please enter your details
                  before placing your order.
                </p>

              </div>

            </div>

            {/* FORM */}

            <form
              onSubmit={proceedToOrder}
              className="orya-customer-form"
            >

              {/* FULL NAME */}

              <div className="orya-form-group">

                <label>

                  Full Name

                  <span>
                    *
                  </span>

                </label>

                <input
                  type="text"
                  name="fullName"
                  value={
                    customer.fullName
                  }
                  onChange={
                    handleCustomerChange
                  }
                  placeholder="Enter your full name"
                  required
                />

              </div>

              {/* MOBILE */}

              <div className="orya-form-group">

                <label>

                  Mobile Number

                  <span>
                    *
                  </span>

                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={
                    customer.mobile
                  }
                  onChange={(e) => {

                    const value =
                      e.target.value
                        .replace(
                          /\D/g,
                          ""
                        )
                        .slice(
                          0,
                          10
                        );

                    setCustomer(
                      (prev) => ({
                        ...prev,
                        mobile: value,
                      })
                    );

                  }}
                  placeholder="Enter 10 digit mobile number"
                  maxLength="10"
                  required
                />

              </div>

              {/* EMAIL */}

              <div className="orya-form-group">

                <label>

                  Email ID

                  <span>
                    *
                  </span>

                </label>

                <input
                  type="email"
                  name="email"
                  value={
                    customer.email
                  }
                  onChange={
                    handleCustomerChange
                  }
                  placeholder="Enter your email address"
                  required
                />

              </div>

              {/* PLACE */}

              <div className="orya-form-group">

                <label>

                  Place

                  <span>
                    *
                  </span>

                </label>

                <input
                  type="text"
                  name="place"
                  value={
                    customer.place
                  }
                  onChange={
                    handleCustomerChange
                  }
                  placeholder="Enter your city / place"
                  required
                />

              </div>

              {/* ORDER PREVIEW */}

              <div className="orya-customer-order-preview">

                <div>

                  <span>
                    Products
                  </span>

                  <strong>
                    {items.length}
                  </strong>

                </div>

                <div>

                  <span>
                    Order Total
                  </span>

                  <strong>
                    ₹
                    {total.toFixed(2)}
                  </strong>

                </div>

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="orya-confirm-order-btn"
                disabled={isGenerating}
              >

                {isGenerating
                  ? "Generating Bill..."
                  : "Generate Bill & Order"}

                {!isGenerating && (

                  <span>
                    →
                  </span>

                )}

              </button>

              <p className="orya-form-note">

                Your customer details and order
                information will be included
                in the bill and WhatsApp message.

              </p>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default Cart;

