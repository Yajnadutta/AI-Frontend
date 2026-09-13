import React, { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../../styling/Home.css";
import Header from "../Header";
import Footer from "../Footer";
import { useCart } from "../../components/context/CartContext";
import "../../styling/products.css";
import juteBagImage from "../../assets/jute_bag.png";
import biodegradable_bag from "../../assets/biodegradable_bag.jpg";
import paper_bag from "../../assets/paper_bag.jpg";
import cloth_bag from "../../assets/cloth_bag.jpg";

import leafIcon from "../../assets/leaf.png";
import grainIcon from "../../assets/grain.png";
import bottleIcon from "../../assets/bottle.png";
import starIcon from "../../assets/star.png";
import recycleIcon from "../../assets/recycle.png";
/* ================= TOP-LEVEL CATEGORY TABS ================= */

const CATEGORY_TABS = [
  { id: "packaging", label: "Sustainable Packaging", icon: "leaf" },
  { id: "food", label: "Natural & Traditional Food", icon: "grain" },
  { id: "hydration", label: "Sustainable Hydration", icon: "bottle" },
  { id: "agri", label: "Agri-Waste Products", icon: "recycle" },
    { id: "special", label: "Special Collection", icon: "star" },
  // { id: "custom", label: "Custom Packaging Solutions", icon: "box" },
];

const TAB_ICON_IMAGES = {
  leaf: leafIcon,
  grain: grainIcon,
  bottle: bottleIcon,
  star: starIcon,
  recycle: recycleIcon,
};
/* ================= SUB-CATEGORIES ================= */

const SUBCATEGORIES = {
  packaging: [
    { name: "Bags & Carry Solutions", items: ["Jute Bags", "Paper Bags", "Kraft Paper Bags", "Biodegradable Bags"] },
    { name: "Bagasse Tableware & Food Service", items: ["Plates", "Bowls", "Trays", "Food Containers", "Meal Boxes", "Cups", "Spoon & Fork"] },
    { name: "Areca Tableware", items: ["Plates", "Bowls", "Trays", "Platters"] },
    { name: "Food & Takeaway Packaging", items: ["Paper Ziplock Pouches", "Paper Window Ziplock Pouches", "Food Wrapping Paper", "Butter Paper", "Cake Boxes", "Pizza Boxes", "Burger Boxes"] },
    { name: "Retail & Shipping Packaging", items: ["Honeycomb Paper Wrap", "Paper Bubble Wrap", "Paper Tape"] },
    { name: "Gift & Premium Packaging", items: ["Premium Gift Bags", "Hamper Boxes", "Corporate Gift Packaging"] },
  ],
  hydration: [
    { name: "Sustainable Drinkware", items: ["Bamboo Bottles", "Paper Bottles", "Plant-Based Bottles", "Bamboo Cups", "Bamboo Travel Mugs"] },
    { name: "Sustainable Straws", items: ["Coconut Straws", "Bamboo Straws", "Paper Straws", "Other Natural Straws"] },
  ],
  agri: [
    { name: "Banana Fibre", items: ["Banana Fibre Plates", "Banana Fibre Trays"] },
    { name: "Coconut Waste Products", items: ["Coconut Bowl", "Coconut Coir Scrubber", "Coconut Spoon", "Coconut Candle"] },
  ],
  food: [],
  special: [],
  custom: [],
};

/* ================= PRODUCTS ================= */

const PRODUCTS = [
  { id: "jute-bag", name: "Jute Bag", desc: "Strong, reusable and 100% natural jute bags.", price: 40, unit: "pc", category: "packaging", sub: "Bags & Carry Solutions", cta: "cart", icon: "bag",image: juteBagImage },
  { id: "biodegradable-carry-bag", name: "Biodegradable Carry Bag", desc: "Compostable, eco-friendly and safe for the planet.", price: 12, unit: "pc", category: "packaging", sub: "Bags & Carry Solutions", cta: "cart", icon: "bag" ,image: biodegradable_bag},
  { id: "paper-bag", name: "Paper Bag", desc: "Recyclable and sturdy paper bags for everyday use.", price: 15, unit: "pc", category: "packaging", sub: "Bags & Carry Solutions", cta: "cart", icon: "bag" ,image: paper_bag},
  { id: "clothes-bag", name: "Clothes Bag", desc: "Reusable cotton / canvas bags for clothing and more.", price: 60, unit: "pc", category: "packaging", sub: "Bags & Carry Solutions", cta: "cart", icon: "bag",image: cloth_bag },
  { id: "printed-jute-bag", name: "Printed Jute Bag", desc: "Custom printed jute bags for your brand.", price: 50, unit: "pc", category: "packaging", sub: "Bags & Carry Solutions", cta: "enquire", icon: "bag",image: juteBagImage },
  { id: "coloured-biodegradable-bag", name: "Coloured Biodegradable Bag", desc: "Stylish, strong and eco-friendly.", price: 15, unit: "pc", category: "packaging", sub: "Bags & Carry Solutions", cta: "enquire", icon: "bag",image: juteBagImage },
  { id: "kraft-paper-bag", name: "Kraft Paper Bag", desc: "Premium quality kraft bags for retail & gifting.", price: 18, unit: "pc", category: "packaging", sub: "Bags & Carry Solutions", cta: "enquire", icon: "bag",image: juteBagImage },
  { id: "drawstring-bag", name: "Drawstring Bag", desc: "Eco-friendly fabric bags with drawstring closure.", price: 45, unit: "pc", category: "packaging", sub: "Bags & Carry Solutions", cta: "enquire", icon: "bag",image: juteBagImage },

  { id: "bagasse-plate", name: "Bagasse Plate", desc: "Compostable plates made from sugarcane fibre.", price: 8, unit: "pc", category: "packaging", sub: "Bagasse Tableware & Food Service", cta: "cart", icon: "plate" ,image: juteBagImage},
  { id: "bagasse-bowl", name: "Bagasse Bowl", desc: "Sturdy, leak-resistant compostable bowls.", price: 6, unit: "pc", category: "packaging", sub: "Bagasse Tableware & Food Service", cta: "cart", icon: "bowl" ,image: juteBagImage},
  { id: "bagasse-container", name: "Bagasse Food Container", desc: "Sturdy, biodegradable and compostable food containers.", price: 12, unit: "pc", category: "packaging", sub: "Bagasse Tableware & Food Service", cta: "cart", icon: "container" ,image: juteBagImage},
  { id: "bagasse-cup", name: "Bagasse Cup", desc: "Compostable cups for hot and cold beverages.", price: 5, unit: "pc", category: "packaging", sub: "Bagasse Tableware & Food Service", cta: "enquire", icon: "bowl" ,image: juteBagImage},

  { id: "bamboo-bottle", name: "Bamboo Bottle", desc: "Natural bamboo-wrapped bottles, reusable and stylish.", price: 350, unit: "pc", category: "hydration", sub: "Sustainable Drinkware", cta: "cart", icon: "bowl" ,image: juteBagImage},
  { id: "bamboo-cup", name: "Bamboo Cup", desc: "Lightweight, durable bamboo cups.", price: 150, unit: "pc", category: "hydration", sub: "Sustainable Drinkware", cta: "cart", icon: "bowl" ,image: juteBagImage},
  { id: "coconut-bowl", name: "Coconut Bowl", desc: "Natural coconut shell bowls — stylish and durable.", price: 250, unit: "pc", category: "agri", sub: "Coconut Waste Products", cta: "cart", icon: "bowl" ,image: juteBagImage},
  { id: "coconut-scrubber", name: "Coconut Coir Scrubber", desc: "Biodegradable kitchen scrubber from coconut coir.", price: 30, unit: "pc", category: "agri", sub: "Coconut Waste Products", cta: "enquire", icon: "bowl" ,image: juteBagImage},
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
};

/* ================= PRODUCT CARD ================= */

function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false);
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, unit: product.unit }, 1);
  };

  return (
    
    <div className="orya-card">

  {/* Heart at top of entire card */}
  <button
    type="button"
    className={`orya-card__wish${wishlisted ? " is-active" : ""}`}
    aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
    onClick={() => setWishlisted((w) => !w)}
  >
    <svg
      viewBox="0 0 24 24"
      fill={wishlisted ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 20s-7-4.4-9.5-8.6C.7 8 2 4.5 5.4 3.6 7.6 3 9.9 3.9 12 6.5 14.1 3.9 16.4 3 18.6 3.6 22 4.5 23.3 8 21.5 11.4 19 15.6 12 20 12 20Z" />
    </svg>
  </button>

  {/* Product image */}
  <div className="orya-card__media">
    <img
      src={product.image}
      alt={product.name}
      className="orya-card__image"
    />
  </div>

  {/* Product information */}
  <div className="orya-card__body">
    <h3 className="orya-card__name">
      {product.name}
    </h3>

    <p className="orya-card__desc">
      {product.desc}
    </p>

    <p className="orya-card__price">
      ₹ {product.price} / {product.unit} onwards
    </p>

<div className="orya-card__actions">
  {inCart ? (
    <Link to="/cart" className=" orya-btn--cart">
      <span>Go to Cart</span>
      <span className="orya-cart-arrow">→</span>
    </Link>
  ) : product.cta === "cart" ? (
    <button
      type="button"
      className="orya-btn orya-btn--solid"
      onClick={handleAddToCart}
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="9" cy="21" r="1.4" />
        <circle cx="18" cy="21" r="1.4" />
        <path d="M2 3h2l2.6 12.6a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6" />
      </svg>
      Add to Cart
    </button>
  ) : (
    <a
      className="orya-btn orya-btn--outline"
      href={`https://wa.me/?text=${encodeURIComponent(
        `Hi ORYA, I'd like to enquire about ${product.name}.`
      )}`}
      target="_blank"
      rel="noreferrer"
    >
      Enquire Now
    </a>
  )}
</div>


  </div>

</div>
  );
}

/* ================= PAGE ================= */

const ProductPage = () => {
 const [activeTab, setActiveTab] = useState("packaging");
  const [activeSub, setActiveSub] = useState(null);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState(() => new Set([0]));
  const [searchParams] = useSearchParams();
   useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    const isValidTab = CATEGORY_TABS.some((t) => t.id === tabFromUrl);
    if (isValidTab) {
      setActiveTab(tabFromUrl);
      setActiveSub(null);
      setOpenGroups(new Set([0])); // reset sidebar accordion for the new tab
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [searchParams]);
  const subGroups = SUBCATEGORIES[activeTab] || [];

  const toggleGroup = (idx) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const handleTabClick = (id) => {
    setActiveTab(id);
    setActiveSub(null);
    setSidebarOpen(false);
  };

  const handleSubClick = (name) => {
    setActiveSub((cur) => (cur === name ? null : name));
    setSidebarOpen(false);
  };

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => p.category === activeTab);
    if (activeSub) list = list.filter((p) => p.sub === activeSub);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    if (sortBy === "price-low") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeTab, activeSub, query, sortBy]);

  const activeTabLabel = CATEGORY_TABS.find((t) => t.id === activeTab)?.label || "";

  return (
    <div className="home">
      <Header />

      <div className="orya-root">
        {/* ================= TOP CATEGORY TABS ================= */}
        {/* <div className="orya-tabs" role="tablist" aria-label="Product categories">
          {CATEGORY_TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTab === t.id}
              className={`orya-tab${activeTab === t.id ? " is-active" : ""}`}
              onClick={() => handleTabClick(t.id)}
            >
              <span className="orya-tab__icon">{TAB_ICONS[t.icon]}</span>
              <span className="orya-tab__label">{t.label}</span>
            </button>
          ))}
        </div> */}
<div className="orya-tabs" role="tablist" aria-label="Product categories">
  {CATEGORY_TABS.map((t) => (
    <button
      key={t.id}
      role="tab"
      aria-selected={activeTab === t.id}
      className={`orya-tab${activeTab === t.id ? " is-active" : ""}`}
      onClick={() => handleTabClick(t.id)}
    >
      <span
        className="orya-tab__icon"
        style={{
          WebkitMaskImage: `url(${TAB_ICON_IMAGES[t.icon]})`,
          maskImage: `url(${TAB_ICON_IMAGES[t.icon]})`,
        }}
      />
      <span className="orya-tab__label">{t.label}</span>
    </button>
  ))}
</div>
        <div className="orya-layout">
          {/* ================= MOBILE SUBCATEGORY TOGGLE ================= */}
          {subGroups.length > 0 && (
            <button
              type="button"
              className="orya-subtoggle"
              onClick={() => setSidebarOpen((s) => !s)}
              aria-expanded={sidebarOpen}
            >
              <span>🍃 Sub Categories</span>
              <span className={`orya-subtoggle__chev${sidebarOpen ? " is-open" : ""}`}>⌄</span>
            </button>
          )}

          {/* ================= SIDEBAR ================= */}
          {subGroups.length > 0 && (
            <aside className={`orya-sidebar${sidebarOpen ? " is-open" : ""}`}>
              <h4 className="orya-sidebar__title">🍃 Sub Categories</h4>
              {subGroups.map((group, idx) => (
                <div className="orya-sidebar__group" key={group.name}>
                  <button
                    type="button"
                    className="orya-sidebar__group-title"
                    onClick={() => toggleGroup(idx)}
                    aria-expanded={openGroups.has(idx)}
                  >
                    {group.name}
                    <span className={`orya-sidebar__chev${openGroups.has(idx) ? " is-open" : ""}`}>⌄</span>
                  </button>
                  {openGroups.has(idx) && (
                    <ul className="orya-sidebar__items">
                      {group.items.map((item) => (
                        <li key={item}>
                          <button
                            type="button"
                            className={`orya-sidebar__item${activeSub === item ? " is-active" : ""}`}
                            onClick={() => handleSubClick(item)}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </aside>
          )}

          {/* ================= MAIN CONTENT ================= */}
          <div className="orya-main">
            <div className="orya-section-head">
              <div>
                <h2>
                  <span className="orya-leaf">🍃</span> {activeSub || activeTabLabel}
                </h2>
                <p>Durable · Biodegradable · Sustainable</p>
              </div>

              <div className="orya-controls">
               <div className="orya-search">
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.6" y2="16.6" />
  </svg>

  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder={`Search in ${activeTabLabel.split(" ")[0]} products...`}
    aria-label="Search products"
  />

  {query && (
    <button
      type="button"
      className="orya-search__clear"
      onClick={() => setQuery("")}
      aria-label="Clear search"
    >
      ×
    </button>
  )}
</div>

                <select
                  className="orya-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort products"
                >
                  <option value="popularity">Sort by: Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A–Z</option>
                </select>
              </div>
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;