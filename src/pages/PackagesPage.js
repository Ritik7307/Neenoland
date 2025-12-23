import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './PackagesPage.css';
import { getImageUrl } from '../config/images';

const PackagesPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookNow = (packageType) => {
    const message = encodeURIComponent(`Hello! I would like to book ${packageType} package.`);
    const phoneNumber = '+919876543210';
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'auto';
  };

  const [selectedInclusion, setSelectedInclusion] = useState(null);

  const openInclusionModal = (inclusion) => {
    setSelectedInclusion(inclusion);
    document.body.style.overflow = 'hidden';
  };

  const closeInclusionModal = () => {
    setSelectedInclusion(null);
    document.body.style.overflow = 'unset';
  };

  // Data for Party Packages
  const partyPackages = [
    {
      id: 1,
      title: "Silver Celebration",
      price: "₹ 15,999",
      duration: "3 Hours",
      tag: "Popular",
      desc: "Perfect for intimate gatherings and small birthday parties.",
      inclusions: [
        "Unlimited Access For Playzone Games",
        "Cake Cutting Ceremony On Stage",
        "Personalized Sitting Space In Cafe",
        "Multicolor Balloon Decoration",
        "Dance/Fun/Party Music"
      ],
      color: "var(--secondary-color)"
    },
    {
      id: 2,
      title: "Gold Gala",
      price: "₹ 19,999",
      duration: "4 Hours",
      tag: "Best Value",
      desc: "Ideal for grand celebrations with extended fun time.",
      inclusions: [
        "Unlimited Access For Playzone Games",
        "Cake Cutting Ceremony On Stage",
        "Personalized Sitting Space In Cafe",
        "Premium Balloon Decoration",
        "Dance/Fun/Party Music",
        "Welcome Drink for Kids"
      ],
      color: "var(--primary-color)",
      featured: true
    }
  ];

  // Data for Food Packages
  const foodPackages = [
    {
      id: 'f1',
      title: "Fun Package",
      type: "Food Package",
      vegPrice: "₹ 799",
      nonVegPrice: "₹ 899",
      items: [
        { label: "Starter", value: "Choice of any 3" },
        { label: "Main Course", value: "Choice of any 3" },
        { label: "Beverages", value: "Choice of any 1" },
        { label: "Desserts", value: "Choice of any 1" }
      ],
      color: "#ff9800"
    },
    {
      id: 'f2',
      title: "Ball & Bounce Package",
      type: "Food Package",
      vegPrice: "₹ 999",
      nonVegPrice: "₹ 1,099",
      items: [
        { label: "Starter", value: "Choice of any 4" },
        { label: "Main Course", value: "Choice of any 4" },
        { label: "Beverages", value: "Choice of any 2" },
        { label: "Desserts", value: "Choice of any 2" }
      ],
      color: "#2196f3"
    },
    {
      id: 'f3',
      title: "Rockstar Package",
      type: "Food Package",
      vegPrice: "₹ 1199",
      nonVegPrice: "₹ 1299",
      items: [
        { label: "Starter", value: "Choice of any 5" },
        { label: "Main Course", value: "Choice of any 5" },
        { label: "Beverages", value: "Choice of any 4" },
        { label: "Desserts", value: "Choice of any 2" }
      ],
      color: "#ff9800"
    }
  ];

  const menuData = {
    "Starters": [
      "Masala French Fries", "Potato Wedges", "Potato Smiles", "Veggie Nuggets", "Honey Chilli Potato",
      "Coleslaw Sandwich", "Dim Sim Steamed", "Dim Sim Fried", "Hara Bhara Kabab", "Nachos",
      "Popcorns", "Wafers", "Spring Rolls", "Veg Salt & Pepper", "Assorted Pakora",
      "Masala Corn", "White Chana Chaat", "Black Chana Chaat", "Fried Chaap Masala", "Dahi Ke Sholay",
      "Dry Veg Manchurian", "Dry Chilli Paneer", "Masala Peanut", "Aloo Chat", "Stone Oven Pizza"
    ],
    "Veg Main Course": [
      "White Sauce Pasta", "Red Sauce Pasta", "Mix Sauce Pasta", "Burgers", "Vegetable Bhaji",
      "Boiled Matar Masala", "Paneer Bhurji", "Veg Manchurian gravy", "Chilly Paneer gravy",
      "Matar Paneer", "Paneer Makhni", "Kadhai Paneer", "Shahi Paneer", "Mix Veg",
      "Palak Paneer", "Jeera Aloo", "Dal Makhni", "Dal Tadka"
    ],
    "Beverages": [
      "Hot n Sour", "Soft Drinks", "Masala Lemonade", "Ice-Tea", "Coffee", "Cold Coffee"
    ],
    "Desserts": [
      "Chocolate Brownie", "Brownie Sundae", "Moong Dal Halwa", "Cold Kheer", "Gajar Ka Halwa",
      "Ice cream", "Gulab Jamun", "Shahi Tukda", "Rasogolla"
    ],
    "Complimentary Add On Items": [
      "Choice Of Any One Rice Item: (Plain Rice, Jeera Rice, Matar Pulao, Veg Pulao)",
      "Choice Of Any Two Breads: (Missi Roti, Tawa Roti, Butter Naan, Pav bread, Kulcha bread, Bhature, Tawa Lachha Paratha, Puri)"
    ]
  };

  const termsAndConditions = [
    "Additional GST Applicable On Final Billing",
    "Minimum guarantee required to avail the package is 30 Pax.",
    "Minimum Guarantee of kids and adults shall be charged separately in case pax turned up less than minimum guarantee. If count goes over and above to minimum guarantee, actual number shall be charged.",
    "Any changes in minimum guarantee or food menu has to be informed 3 days prior to the event.",
    "Outside Food & Beverages Will not be permitted.",
    "Kindly submit the menu prior (3 DAYS) of your Party.",
    "Food preparation and sitting arrangements shall be provided only for 10% extra to the minimum guarantee given.",
    "There will be provision of 4 complimentary kids upto 4 years only in an event, over and above 4 of upto 4 years kids charges will be applicable as per pre decided package.",
    "There is no provision of food packaging of leftover food.",
    "If maid / driver / photographer or others else apart from guests are having the same food the same charges shall be applicable as per pre decided package.",
    "Event timings will be fixed as per your package timing 15 minutes plus minus",
    "Extra hour will be charged with additional ₹5000",
    "Only the cafe area will be reserved at the time of party. Playzone will remain open for regular guests.",
    "No other offers can be clubbed with party packages. Any additions besides the package will be charged on actual.",
    "We take all possible measures for the security and safety of every child, but in case of any untoward incident, we will not be responsible in any way.",
    "Socks are mandatory for kids in the play area",
    "Foods are not allowed in the play area",
    "50% advance is payable at the time of confirmation and balance is payable at the end of the event by credit/ Debit card or cash",
    "In-case of cancellation 50% cancellation charges will be applicable of total billing amount & Advance money is not refundable.",
    "* Menu can be customized on request"
  ];

  // Data for "Party Booking Charges Includes"
  const partyInclusions = [
    {
      id: 1,
      title: "Unlimited Access For Playzone Games",
      images: [
        getImageUrl("neenoland_playzone.png"),
        getImageUrl("1G4A2473.JPG"),
        getImageUrl("1G4A2475.JPG")
      ],
      desc: "Let the kids go wild! Unlimited access to all arcade games, soft play areas, and adventure zones for the entire duration of the party."
    },
    {
      id: 2,
      title: "Cake Cutting Ceremony On Stage",
      images: [
        getImageUrl("neenoland_cake.png"),
        getImageUrl("1G4A2477.JPG"),
        getImageUrl("1G4A2478.JPG")
      ],
      desc: "Make your child the star of the show with a grand cake cutting ceremony on our spotlight stage, complete with music and cheers!"
    },
    {
      id: 3,
      title: "Personalized Sitting Space In Cafe",
      images: [
        getImageUrl("1G4A2749.JPG"),
        getImageUrl("1G4A2750.JPG"),
        getImageUrl("1G4A2765.JPG")
      ],
      desc: "Enjoy reserved, comfortable seating for your adult guests in our themed cafe area, ensuring everyone can relax and socialize."
    },
    {
      id: 4,
      title: "Multicolor Balloon's Decoration",
      images: [
        getImageUrl("1G4A2643.JPG"),
        getImageUrl("1G4A2645.JPG"),
        getImageUrl("1G4A2674.JPG")
      ],
      desc: "We set the mood with vibrant balloon decorations that match your party theme, adding a splash of color and joy to the venue."
    },
    {
      id: 5,
      title: "Dance/Fun/Party Music",
      images: [
        getImageUrl("1G4A2867.JPG"),
        getImageUrl("1G4A2808.JPG"),
        getImageUrl("1G4A2796.JPG")
      ],
      desc: "Keep the energy high with our curated party playlists! From kids' favorites to groovy beats, the music never stops."
    }
  ];

  return (
    <div className="packages-page page-content-spacer">
      <Navbar />

      {/* Hero / Header */}
      <section className="packages-hero">
        <div className="container">
          <h1 className="page-title">CHOOSE YOUR <span className="highlight-text">FUN</span></h1>
          <p className="page-subtitle">Curated packages for every celebration</p>
        </div>
      </section>

      {/* Party Packages Block */}
      <section className="section-block">
        <div className="container">
          <h2 className="block-title">Party Packages</h2>
          <div className="packages-grid">
            {partyPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`package-card ${pkg.featured ? 'featured' : ''}`}
                onClick={() => openModal(pkg)}
              >
                {pkg.tag && <div className="card-badge">{pkg.tag}</div>}
                <div className="card-header" style={{ borderBottomColor: pkg.color }}>
                  <h3>{pkg.title}</h3>
                  <div className="price">{pkg.price}</div>
                  <div className="duration">{pkg.duration}</div>
                </div>
                <div className="card-body">
                  <p>{pkg.desc}</p>
                  <button className="view-btn">View Details & Inclusions</button>
                </div>
              </div>
            ))}
          </div>

          {/* Core Inclusions Summary (Visual Only) */}
          {/* Interactive Inclusions Grid */}
          <div className="inclusions-section">
            <h2 className="block-title">Party Booking <span className="highlight-text">Charges Includes</span></h2>
            <div className="inclusions-grid">
              {partyInclusions.map((item) => (
                <div
                  key={item.id}
                  className="inclusion-card glass-panel"
                  onClick={() => openInclusionModal(item)}
                >
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Arcade Addon */}
      <section className="section-block arcade-block">
        <div className="container">
          <div className="addon-banner">
            <div className="addon-icon">🕹️</div>
            <div className="addon-info">
              <h3>Unlimited Arcade Games</h3>
              <p>Add this to any package for the ultimate gaming experience!</p>
            </div>
            <div className="addon-tag">PAID ADD-ON</div>
          </div>
        </div>
      </section>

      {/* Food Packages Block */}
      <section className="section-block food-block">
        <div className="container">
          <h2 className="block-title">Food & Dining</h2>
          <div className="packages-grid">
            {foodPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="package-card food-card"
                onClick={() => openModal(pkg)}
              >
                <div className="card-header" style={{ background: pkg.color, color: 'white' }}>
                  <h3>{pkg.title}</h3>
                  <p>Unlimited Buffet</p>
                </div>
                <div className="card-body">
                  <div className="mini-menu-preview">
                    {pkg.items.slice(0, 2).map((item, i) => (
                      <div key={i} className="mini-item">
                        <strong>{item.label}:</strong> {item.value}
                      </div>
                    ))}
                    <div className="more-text">+ Beverages & Desserts</div>
                  </div>
                  <div className="price-row">
                    <span>Veg: {pkg.vegPrice}</span>
                    <span>Non-Veg: {pkg.nonVegPrice}</span>
                  </div>
                  <button className="view-btn">View Menu</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW MENU SECTION */}
      <section className="section-block menu-section">
        <div className="container">
          <h2 className="block-title">OUR <span className="highlight-text">MENU</span></h2>
          <div className="menu-container-card glass-panel">
            {Object.entries(menuData).map(([category, items]) => {
              // Icon mapping
              const icons = {
                "Starters": "🍟",
                "Veg Main Course": "🥘",
                "Beverages": "🍹",
                "Desserts": "🍰",
                "Complimentary Add On Items": "✨"
              };

              return (
                <div key={category} className="menu-details-group">
                  <h3 className="menu-group-title">
                    {icons[category] && <span>{icons[category]} </span>}
                    {category}
                  </h3>
                  <div className="menu-items-pill-grid">
                    {items.map((item, idx) => (
                      <div key={idx} className="menu-pill">
                        <span className="pill-dot">•</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TERMS AND CONDITIONS */}
      <section className="section-block terms-section">
        <div className="container">
          <h2 className="block-title">TERMS & <span className="highlight-text">CONDITIONS</span></h2>
          <div className="terms-grid">
            {termsAndConditions.map((term, idx) => (
              <div key={idx} className="term-card glass-panel">
                <p>{term}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />

      {/* PACKAGE DETAIL MODAL */}
      {selectedPackage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>

            <div className="modal-header">
              <h2>{selectedPackage.title}</h2>
              {selectedPackage.price && <div className="modal-price">{selectedPackage.price} <span className="small">/ {selectedPackage.duration}</span></div>}
            </div>

            <div className="modal-body scrollable">
              {/* Render content based on package type */}

              {/* Party Package Content */}
              {selectedPackage.inclusions && (
                <>
                  <h3>Package Inclusions:</h3>
                  <ul className="modal-list">
                    {selectedPackage.inclusions.map((inc, i) => (
                      <li key={i}>{inc}</li>
                    ))}
                  </ul>
                  <div className="modal-note">
                    <p><strong>Note:</strong> Minimum guarantee required is 30 Pax.</p>
                  </div>
                </>
              )}

              {/* Food Package Content */}
              {selectedPackage.items && (
                <>
                  <h3>Menu Inclusions:</h3>
                  <div className="food-details-grid">
                    {selectedPackage.items.map((item, i) => (
                      <div key={i} className="food-detail-item">
                        <strong>{item.label}</strong>
                        <span>{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pricing-split">
                    <div className="split-price veg">Veg: {selectedPackage.vegPrice}</div>
                    <div className="split-price non-veg">Non-Veg: {selectedPackage.nonVegPrice}</div>
                  </div>
                </>
              )}

            </div>

            <div className="modal-footer">
              <button className="book-btn-modal" onClick={() => handleBookNow(selectedPackage.title)}>
                Book This Package via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* INCLUSION DETAIL MODAL */}
      {selectedInclusion && (
        <div className="modal-overlay" onClick={closeInclusionModal}>
          <div className="modal-content glass-panel inclusion-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeInclusionModal}>&times;</button>
            <div className="modal-header">
              <h2>{selectedInclusion.title}</h2>
            </div>
            <div className="modal-body">
              <div className="inclusion-gallery">
                {selectedInclusion.images.map((img, index) => (
                  <img key={index} src={img} alt={`Detail ${index + 1}`} className="inclusion-img" />
                ))}
              </div>
              <p className="inclusion-desc">{selectedInclusion.desc}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PackagesPage;

