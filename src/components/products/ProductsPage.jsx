import React, { useState, useMemo } from "react";
import "../../styling/Home.css";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useCart } from "../../components/context/CartContext";
import "../../styling/products.css";
 

const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "packaging", label: "Sustainable Packaging" },
  { id: "food", label: "Natural & Traditional Food" },
  { id: "hydration", label: "Sustainable Hydration" },
  { id: "special", label: "Special Collection" },
  { id: "agri", label: "Agri-Waste Products" },
];
 
const PRODUCTS = [
  {
    id: "bagasse-container",
    name: "Bagasse Food Container",
    desc: "Sturdy, biodegradable and compostable food containers. Perfect for restaurants, cafés and takeaways.",
    price: 120,
    unit: "pack",
    category: "packaging",
    tone: "clay",
    icon: "container",
  },
  {
    id: "bamboo-cutlery",
    name: "Bamboo Cutlery Set",
    desc: "Natural bamboo cutlery — strong, reusable and eco-friendly. Ideal for home, cafés and events.",
    price: 80,
    unit: "pack",
    category: "packaging",
    tone: "sand",
    icon: "cutlery",
  },
  {
    id: "banana-plates",
    name: "Banana Fibre Plates",
    desc: "Strong, lightweight and sustainable plates made from banana fibre.",
    price: 150,
    unit: "pack",
    category: "agri",
    tone: "olive",
    icon: "plate",
  },
  {
    id: "coconut-bowls",
    name: "Coconut Bowl Set",
    desc: "Natural coconut shell bowls — stylish, durable and eco-friendly.",
    price: 250,
    unit: "set",
    category: "hydration",
    tone: "walnut",
    icon: "bowl",
  },
  {
    id: "kraft-bag",
    name: "Kraft Paper Carry Bag",
    desc: "Recyclable kraft paper bags with reinforced handles, built for daily grocery and retail use.",
    price: 60,
    unit: "pack of 25",
    category: "packaging",
    tone: "sand",
    icon: "bag",
  },
  {
    id: "jute-pouch",
    name: "Jute Mesh Produce Bag",
    desc: "Breathable jute mesh bags that keep fruit and vegetables fresher, longer — reusable season after season.",
    price: 95,
    unit: "pack of 5",
    category: "special",
    tone: "olive",
    icon: "mesh",
  },
];
 
const ICONS = {
  container: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="8" y="20" width="32" height="18" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M8 20 L24 10 L40 20" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <line x1="24" y1="24" x2="24" y2="34" stroke="currentColor" strokeWidth="2" strokeDasharray="2 3" />
    </svg>
  ),
  cutlery: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M15 8 v14 a4 4 0 0 0 8 0 V8 M19 8 v34" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M31 8 v12 c0 3 3 4 3 4 v18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  plate: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  bowl: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M8 22 h32 a16 10 0 0 1 -32 0 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <line x1="18" y1="30" x2="18" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="30" x2="30" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  bag: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M12 16 h24 l2 24 h-28 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M18 16 v-3 a6 6 0 0 1 12 0 v3" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  ),
  mesh: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M14 12 h20 l3 26 h-26 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M18 16 l3 20 M24 16 v20 M30 16 l-3 20 M15 22 h18 M16 30 h16" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
};


function ProductCard({ product }) {
  const [qty, setQty] = useState(1);
  const [saved, setSaved] = useState(false);
  const { addToCart, isInCart } = useCart();

  const inCart = isInCart(product.id);

  const handleAddToCart = () => {
    addToCart(
      { id: product.id, name: product.name, price: product.price, unit: product.unit },
      qty
    );
  };

  return (
    <article className="orya-card" data-tone={product.tone}>
      {/* ...media block unchanged... */}

      <div className="orya-card__body">
        <h3 className="orya-card__name">{product.name}</h3>
        <p className="orya-card__desc">{product.desc}</p>
        <p className="orya-card__price">
          ₹{product.price} <span>/ {product.unit}</span>
        </p>

        {/* <div className="orya-card__stepper" role="group" aria-label={`Quantity for ${product.name}`}>
          <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
            −
          </button>
          <span>{qty}</span>
          <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
            +
          </button>
        </div> */}

        <div className="orya-card__actions">
          {inCart ? (
            <Link to="/cart" className="orya-btn orya-btn--whatsapp">
              Go to Cart
            </Link>
          ) : (
            <>
              <button type="button" className="orya-btn orya-btn--ghost" onClick={handleAddToCart}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="9" cy="21" r="1.4" />
                  <circle cx="18" cy="21" r="1.4" />
                  <path d="M2 3h2l2.6 12.6a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6" />
                </svg>
                Add to Cart
              </button>
              {/* <a
                className="orya-btn orya-btn--whatsapp"
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Hi ORYA, I'd like to order ${qty} x ${product.name} (${product.unit}).`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Order on WhatsApp
              </a> */}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
 

const ProductPage = () => {
const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
 
  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesQuery = p.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="home">

        {/* ================= HEADER ================= */}

    <Header />

   <div className="orya-root">
     
 
      <div className="orya-search">
        <div className="orya-search__field">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.6" y2="16.6" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
          />
          {query && (
            <button type="button" className="orya-search__clear" onClick={() => setQuery("")} aria-label="Clear search">
              ×
            </button>
          )}
        </div>
      </div>
 
      <div className="orya-chips" role="tablist" aria-label="Product categories">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={activeCategory === c.id}
            className={`orya-chip${activeCategory === c.id ? " is-active" : ""}`}
            onClick={() => setActiveCategory(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
 
      <div className="orya-section-head">
        <div>
          <h2>Sustainable Packaging</h2>
          <p>Eco-friendly packaging solutions for a cleaner, greener tomorrow.</p>
        </div>
        <span className="orya-result-count">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>
      </div>
 
      {filtered.length > 0 ? (
        <div className="orya-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="orya-empty">No products match your search. Try a different term or category.</div>
      )}
    </div>



        {/* ================= FOOTER ================= */}

            <Footer />
    </div>
  );
};

export default ProductPage;