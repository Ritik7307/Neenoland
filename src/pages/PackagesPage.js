import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import EnquiryButton from '../components/EnquiryButton';
import './PackagesPage.css';
import { getImageUrl } from '../config/images';

const WHATSAPP_PHONE = '+919266420361';
const CONTACT_EMAIL = 'neenoland4u@gmail.com';
const VENUE_ADDRESS_LINE =
  '887, 2nd Floor, Niti Khand-1, Indirapuram, Ghaziabad, Uttar Pradesh, India';

const PackagesPage = () => {
  useEffect(() => {
    document.title =
      'Neeno Land – Party & Play | Packages & Pricing | Indirapuram, Ghaziabad';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Neeno Land — A Place to Party and Play. Birthday parties, kitty parties, corporate events, venue pricing, food packages, add-ons & menu. Book in Indirapuram, Ghaziabad.'
    );
  }, []);

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedInclusion, setSelectedInclusion] = useState(null);

  const handleBookNow = (packageType) => {
    const message = encodeURIComponent(`Hello! I would like to book: ${packageType}.`);
    window.open(`https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'auto';
  };

  const openInclusionModal = (inclusion) => {
    setSelectedInclusion(inclusion);
    document.body.style.overflow = 'hidden';
  };

  const closeInclusionModal = () => {
    setSelectedInclusion(null);
    document.body.style.overflow = 'unset';
  };

  const venuePricingTiers = [
    { guests: 15, price: '₹16,999', label: 'Intimate gatherings' },
    { guests: 20, price: '₹19,999', label: 'Most booked', featured: true },
    { guests: 25, price: '₹24,999', label: 'Larger celebrations' }
  ];

  const highlightFoodPackages = [
    {
      id: 'hf-gold',
      title: 'Gold Package',
      badge: '🥇',
      price: '₹1,199',
      priceNote: 'Veg · per person',
      tag: 'Buffet-style picks',
      color: '#ca8a04',
      highlightBullets: [
        '4 Starters',
        '3 Main Course',
        '2 Breads',
        '1 Raita',
        '1 Rice',
        '2 Desserts',
        '2 Beverages',
        'Salad'
      ]
    },
    {
      id: 'hf-platinum',
      title: 'Platinum Package',
      badge: '🥈',
      price: '₹1,399',
      priceNote: 'Veg · per person',
      tag: 'Premium spread',
      color: '#64748b',
      featured: true,
      highlightBullets: [
        '5 Starters',
        '4 Main Course',
        '3 Beverages (Hot/Cold)',
        'Rice + Noodles',
        '2 Desserts',
        '2 Breads',
        '1 Salad',
        '1 Raita'
      ]
    },
    {
      id: 'hf-economy',
      title: 'Economy Package',
      badge: '💰',
      price: '',
      priceNote: 'Flexible menu · ask for quote',
      tag: 'Easy favourites',
      color: '#22c55e',
      highlightBullets: [
        'Meals: Pasta, Pizza, Noodles, Pav Bhaji, Burger, Sandwich, and more',
        'Beverages: Soft Drinks, Mojito, Lemonade, and more',
        'Desserts: Ice Cream, Gulab Jamun, Brownie'
      ]
    }
  ];

  const inclusionStripItems = [
    {
      icon: '🛝',
      title: 'Soft Play Area',
      desc: 'Slides, ball pools and soft play — safe, active fun.',
      tag: 'Play'
    },
    {
      icon: '🕹️',
      title: 'Arcade Area',
      desc: 'Arcade games for older kids and friendly competition.',
      tag: 'Games'
    },
    {
      icon: '☕',
      title: 'Café Area',
      desc: 'Comfortable seating for guests while kids play.',
      tag: 'Comfort'
    },
    {
      icon: '🎈',
      title: 'Decoration',
      desc: 'Balloons and festive touches for your celebration.',
      tag: 'Ambience'
    },
    {
      icon: '🎉',
      title: 'Birthday Props & Cap',
      desc: 'Props and caps for memorable birthday photos.',
      tag: 'Party'
    },
    {
      icon: '🪧',
      title: 'Welcome Board',
      desc: 'Personalised welcome for your guests.',
      tag: 'Welcome'
    }
  ];

  const extraTimeAddon = {
    name: 'Extra 30 mins',
    price: '₹3,000',
    blurb: 'Extend your slot so guests leave on a high — no rushed goodbyes.'
  };

  const upgradeAddons = [
    { name: 'Magic Show', price: '₹3,500' },
    { name: 'Game Anchor', price: '₹3,500' },
    { name: 'Puppet Show', price: '₹4,000' },
    { name: 'Live Music', price: '₹10,000+' },
    { name: 'Mascot', price: '₹5,000+' },
    { name: 'Face Painting', price: '₹2,500' },
    { name: 'Photographer', price: '₹5,000' },
    { name: 'Premium Decoration', price: '₹5,000+' }
  ];

  const menuHighlights = {
    'Veg Starters': [
      'Honey Chilli Potato',
      'Spring Rolls',
      'Hara Bhara Kabab',
      'Nachos',
      'Stone Oven Pizza'
    ],
    'Main Course': [
      'Paneer Makhni',
      'Dal Makhni',
      'Mix Veg',
      'White Sauce Pasta',
      'Jeera Aloo'
    ],
    Beverages: ['Masala Lemonade', 'Ice Tea', 'Soft Drinks', 'Cold Coffee'],
    Desserts: ['Gulab Jamun', 'Chocolate Brownie', 'Ice Cream', 'Moong Dal Halwa']
  };

  const termsBookingEssentials = [
    '25% advance required (non-refundable)',
    'Minimum 15 guests',
    'GST extra',
    'Starters served for 90 minutes',
    'Socks mandatory for kids',
    'Extra hour: ₹5,000',
    'No leftover food packing',
    'Changes must be informed 3 days prior'
  ];

  const partyPackages = [
    {
      id: 1,
      title: 'Silver Celebration',
      price: '₹ 16,999',
      duration: '3 Hours',
      tag: 'Popular',
      desc: 'Perfect for intimate gatherings and small birthday parties.',
      inclusions: [
        'Unlimited Access For Playzone Games',
        'Cake Cutting Ceremony On Stage',
        'Personalized Sitting Space In Cafe',
        'Multicolor Balloon Decoration',
        'Dance/Fun/Party Music'
      ],
      color: 'var(--secondary-color)'
    },
    {
      id: 2,
      title: 'Gold Gala',
      price: '₹ 19,999',
      duration: '4 Hours',
      tag: 'Best Value',
      desc: 'Ideal for grand celebrations with extended fun time.',
      inclusions: [
        'Unlimited Access For Playzone Games',
        'Cake Cutting Ceremony On Stage',
        'Personalized Sitting Space In Cafe',
        'Premium Balloon Decoration',
        'Dance/Fun/Party Music',
        'Welcome Drink for Kids'
      ],
      color: 'var(--primary-color)',
      featured: true
    }
  ];

  const foodPackages = [
    {
      id: 'f1',
      title: 'Fun Package',
      type: 'Food Package',
      vegPrice: '₹ 799',
      nonVegPrice: '₹ 899',
      items: [
        { label: 'Starter', value: 'Choice of any 3' },
        { label: 'Main Course', value: 'Choice of any 3' },
        { label: 'Beverages', value: 'Choice of any 1' },
        { label: 'Desserts', value: 'Choice of any 1' }
      ],
      color: '#ff9800'
    },
    {
      id: 'f2',
      title: 'Ball & Bounce Package',
      type: 'Food Package',
      vegPrice: '₹ 999',
      nonVegPrice: '₹ 1,099',
      items: [
        { label: 'Starter', value: 'Choice of any 4' },
        { label: 'Main Course', value: 'Choice of any 4' },
        { label: 'Beverages', value: 'Choice of any 2' },
        { label: 'Desserts', value: 'Choice of any 2' }
      ],
      color: '#2196f3'
    },
    {
      id: 'f3',
      title: 'Rockstar Package',
      type: 'Food Package',
      vegPrice: '₹ 1199',
      nonVegPrice: '₹ 1299',
      items: [
        { label: 'Starter', value: 'Choice of any 5' },
        { label: 'Main Course', value: 'Choice of any 5' },
        { label: 'Beverages', value: 'Choice of any 4' },
        { label: 'Desserts', value: 'Choice of any 2' }
      ],
      color: '#ff9800'
    }
  ];

  const menuData = {
    Starters: [
      'Masala French Fries',
      'Potato Wedges',
      'Potato Smiles',
      'Veggie Nuggets',
      'Honey Chilli Potato',
      'Coleslaw Sandwich',
      'Dim Sim Steamed',
      'Dim Sim Fried',
      'Hara Bhara Kabab',
      'Nachos',
      'Popcorns',
      'Wafers',
      'Spring Rolls',
      'Veg Salt & Pepper',
      'Assorted Pakora',
      'Masala Corn',
      'White Chana Chaat',
      'Black Chana Chaat',
      'Fried Chaap Masala',
      'Dahi Ke Sholay',
      'Dry Veg Manchurian',
      'Dry Chilli Paneer',
      'Masala Peanut',
      'Aloo Chat',
      'Stone Oven Pizza'
    ],
    'Veg Main Course': [
      'White Sauce Pasta',
      'Red Sauce Pasta',
      'Mix Sauce Pasta',
      'Burgers',
      'Vegetable Bhaji',
      'Boiled Matar Masala',
      'Paneer Bhurji',
      'Veg Manchurian gravy',
      'Chilly Paneer gravy',
      'Matar Paneer',
      'Paneer Makhni',
      'Kadhai Paneer',
      'Shahi Paneer',
      'Mix Veg',
      'Palak Paneer',
      'Jeera Aloo',
      'Dal Makhni',
      'Dal Tadka'
    ],
    Beverages: ['Hot n Sour', 'Soft Drinks', 'Masala Lemonade', 'Ice-Tea', 'Coffee', 'Cold Coffee'],
    Desserts: [
      'Chocolate Brownie',
      'Brownie Sundae',
      'Moong Dal Halwa',
      'Cold Kheer',
      'Gajar Ka Halwa',
      'Ice cream',
      'Gulab Jamun',
      'Shahi Tukda',
      'Rasogolla'
    ],
    'Complimentary Add On Items': [
      'Choice Of Any One Rice Item: (Plain Rice, Jeera Rice, Matar Pulao, Veg Pulao)',
      'Choice Of Any Two Breads: (Missi Roti, Tawa Roti, Butter Naan, Pav bread, Kulcha bread, Bhature, Tawa Lachha Paratha, Puri)'
    ]
  };

  const additionalPolicies = [
    'Additional GST Applicable On Final Billing',
    'Minimum guarantee required to avail the package is 30 Pax.',
    'Minimum Guarantee of kids and adults shall be charged separately in case pax turned up less than minimum guarantee. If count goes over and above to minimum guarantee, actual number shall be charged.',
    'Any changes in minimum guarantee or food menu has to be informed 3 days prior to the event.',
    'Outside Food & Beverages Will not be permitted.',
    'Kindly submit the menu prior (3 DAYS) of your Party.',
    'Food preparation and sitting arrangements shall be provided only for 10% extra to the minimum guarantee given.',
    'There will be provision of 4 complimentary kids upto 4 years only in an event, over and above 4 of upto 4 years kids charges will be applicable as per pre decided package.',
    'There is no provision of food packaging of leftover food.',
    'If maid / driver / photographer or others else apart from guests are having the same food the same charges shall be applicable as per pre decided package.',
    'Event timings will be fixed as per your package timing 15 minutes plus minus',
    'Extra hour will be charged with additional ₹5000',
    'Only the cafe area will be reserved at the time of party. Playzone will remain open for regular guests.',
    'No other offers can be clubbed with party packages. Any additions besides the package will be charged on actual.',
    'We take all possible measures for the security and safety of every child, but in case of any untoward incident, we will not be responsible in any way.',
    'Socks are mandatory for kids in the play area',
    'Foods are not allowed in the play area',
    '50% advance is payable at the time of confirmation and balance is payable at the end of the event by credit/ Debit card or cash',
    'In-case of cancellation 50% cancellation charges will be applicable of total billing amount & Advance money is not refundable.',
    '* Menu can be customized on request'
  ];

  const partyInclusions = [
    {
      id: 1,
      title: 'Unlimited Access For Playzone Games',
      images: [
        getImageUrl('1G4A2552.jpg'),
        getImageUrl('1G4A2676.jpg'),
        getImageUrl('1G4A2495.jpg'),
        getImageUrl('neenoland_playzone.jpg'),
        getImageUrl('playzone.jpeg'),
        getImageUrl('playzone 1.jpeg'),
        getImageUrl('playzone 22.jpeg'),
        getImageUrl('playzone 3.jpeg'),
        getImageUrl('playzone 4.jpeg'),
        getImageUrl('soft balls.jpeg'),
        getImageUrl('playssone.jpeg'),
        getImageUrl('plazone.jpeg')
      ],
      desc: 'Let the kids go wild! Unlimited access to all arcade games, soft play areas, and adventure zones for the entire duration of the party.'
    },
    {
      id: 2,
      title: 'Cake Cutting Ceremony On Stage',
      images: [
        getImageUrl('neenoland_cake.jpg'),
        getImageUrl('happy birthday.jpeg'),
        getImageUrl('1G4A2808.jpg'),
        getImageUrl('stage.jpeg')
      ],
      desc: 'Make your child the star of the show with a grand cake cutting ceremony on our spotlight stage, complete with music and cheers!'
    },
    {
      id: 3,
      title: 'Personalized Sitting Space In Cafe',
      images: [
        getImageUrl('sitting.avif'),
        getImageUrl('moeralpgh0zlrnq80dke.jpg'),
        getImageUrl('1G4A2796.jpg'),
        getImageUrl('eating.jpeg')
      ],
      desc: 'Enjoy reserved, comfortable seating for your adult guests in our themed cafe area, ensuring everyone can relax and socialize.'
    },
    {
      id: 4,
      title: "Multicolor Balloon's Decoration",
      images: [
        getImageUrl('decoration.jpeg'),
        getImageUrl('g3gictoxytip6nyyhipz.jpg'),
        getImageUrl('1G4A2508.jpg')
      ],
      desc: 'We set the mood with vibrant balloon decorations that match your party theme, adding a splash of color and joy to the venue.'
    },
    {
      id: 5,
      title: 'Dance/Fun/Party Music',
      images: [getImageUrl('stage.jpeg'), getImageUrl('play.avif'), getImageUrl('1G4A2867.jpg')],
      desc: "Keep the energy high with our curated party playlists! From kids' favorites to groovy beats, the music never stops."
    }
  ];

  const menuIcons = {
    Starters: '🍟',
    'Veg Main Course': '🥘',
    Beverages: '🍹',
    Desserts: '🍰',
    'Complimentary Add On Items': '✨'
  };

  const highlightIcons = {
    'Veg Starters': '🥗',
    'Main Course': '🍛',
    Beverages: '🥤',
    Desserts: '🍮'
  };

  return (
    <div className="packages-page page-content-spacer">
      <Navbar />

      {/* 1. Hero */}
      <section className="packages-hero pk-hero-v2">
        <div className="container pk-hero-inner">
          <p className="pk-eyebrow">Neeno Land — A Place to Party and Play</p>
          <h1 className="page-title pk-hero-title">
            You Dream, We Theme <span className="pk-hero-sparkle">!</span>
          </h1>
          <p className="pk-hero-subtitle">Celebrate unforgettable moments at Neeno Land</p>
          <p className="pk-hero-desc">
            Birthdays, kitty parties, family get-togethers, team outings and corporate celebrations -
            all in one vibrant indoor venue where kids play freely and grown-ups relax in style.
          </p>
          <div className="pk-hero-cta-row">
            <button type="button" className="pk-btn-primary" onClick={() => handleBookNow('Party booking — Book Now')}>
              Book Now
            </button>
            <Link to="/contact#enquiry" className="pk-btn-ghost">
              Enquiry form
            </Link>
          </div>
        </div>
      </section>

      {/* 2. About */}
      <section className="section-block pk-about-section">
        <div className="container">
          <h2 className="block-title">
            Welcome to <span className="highlight-text">Neeno Land</span>
          </h2>
          <div className="pk-about-card glass-panel">
            <p className="pk-about-lead">
              Neeno Land is Indirapuram&apos;s lively party-and-play destination - designed for smiles,
              stress-free hosting, and memories that linger long after the cake is cut.
            </p>
            <p className="pk-about-body">
              Combine themed celebrations with soft play, arcade energy, and café comfort so every guest  
              from toddlers to grandparents - feels looked after. Tell us your vision; we&apos;ll help you
              shape the flow, decor touches, and food so you can enjoy the moment.
            </p>
          </div>
        </div>
      </section>

      {/* Venue pricing */}
      <section className="section-block pk-pricing-section">
        <div className="container">
          <h2 className="block-title">
            Venue <span className="highlight-text">Pricing</span>
          </h2>
          <p className="pk-section-lead">
            Pick a guest band that fits your crowd — transparent slabs so you can plan quickly.
          </p>
          <div className="pk-pricing-grid">
            {venuePricingTiers.map((tier) => (
              <div
                key={tier.guests}
                className={`pk-price-card glass-panel ${tier.featured ? 'pk-price-card-featured' : ''}`}
              >
                {tier.featured && <span className="pk-price-badge">Popular</span>}
                <div className="pk-price-amount">{tier.price}</div>
                <div className="pk-price-guests">Up to {tier.guests} guests</div>
                <p className="pk-price-label">{tier.label}</p>
                <button
                  type="button"
                  className="pk-price-enquire"
                  onClick={() =>
                    handleBookNow(`Venue package — ${tier.price} for ${tier.guests} guests`)
                  }
                >
                  Enquire on WhatsApp
                </button>
              </div>
            ))}
          </div>
          <div className="pk-pricing-footnotes glass-panel">
            <p>
              <strong>₹799</strong> per extra guest · Party duration: <strong>2 hours</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Highlight food packages */}
      <section className="section-block pk-highlight-section">
        <div className="container">
          <h2 className="block-title">
            Food <span className="highlight-text">Highlight Packages</span>
          </h2>
          <p className="pk-section-lead">
            Three curated tiers — tap a card for the full line-up. Buffet-style combinations shown below;
            detailed buffet menus further down the page.
          </p>
          <div className="packages-grid pk-highlight-grid">
            {highlightFoodPackages.map((pkg) => (
              <div
                key={pkg.id}
                role="button"
                tabIndex={0}
                className={`package-card pk-highlight-card ${pkg.featured ? 'featured' : ''}`}
                onClick={() => openModal(pkg)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(pkg);
                  }
                }}
              >
                {pkg.tag && <div className="card-badge">{pkg.tag}</div>}
                <div className="card-header pk-highlight-head" style={{ borderBottomColor: pkg.color }}>
                  <span className="pk-highlight-badge" aria-hidden>
                    {pkg.badge}
                  </span>
                  <h3>{pkg.title}</h3>
                  {pkg.price ? (
                    <div className="price">{pkg.price}</div>
                  ) : (
                    <div className="price pk-price-muted">Flexible</div>
                  )}
                  <div className="duration">{pkg.priceNote}</div>
                </div>
                <div className="card-body">
                  <ul className="pk-highlight-preview">
                    {pkg.highlightBullets.slice(0, 4).map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <button type="button" className="view-btn">
                    View full package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included — unified shell + tiles */}
      <section
        className="section-block pk-inclusions-section-v2 pk-inclusions-section--compact"
        aria-labelledby="pk-inclusions-heading"
      >
        <div className="container">
          <div className="pk-inclusions-shell glass-panel">
            <header className="pk-inclusions-shell-head">
              <p className="pk-inclusions-kicker">Party-ready venue</p>
              <h2 id="pk-inclusions-heading" className="pk-inclusions-shell-title">
                What&apos;s <span className="highlight-text">Included</span>
              </h2>
              <div className="pk-inclusions-title-accent" aria-hidden />
              <p className="pk-inclusions-lead">
                <span className="pk-inclusions-lead-meta">6 essentials · all ages · photo-ready</span>
                <br />
                See <strong>Party Booking Charges Includes</strong> below for real photos of play, cake
                stage, café and décor.
              </p>
            </header>

            <ul className="pk-inclusions-tiles">
              {inclusionStripItems.map((item, index) => (
                <li key={item.title} className={`pk-inclusion-tile pk-inclusion-tile--${index + 1}`}>
                  <div className="pk-inclusion-tile-head">
                    <div className="pk-inclusion-tile-icon" aria-hidden>
                      {item.icon}
                    </div>
                    <span className="pk-inclusion-tile-num" aria-hidden>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="pk-inclusion-tile-tag">{item.tag}</span>
                  <h3 className="pk-inclusion-tile-title">{item.title}</h3>
                  <p className="pk-inclusion-tile-desc">{item.desc}</p>
                  <div className="pk-inclusion-tile-foot">
                    <span className="pk-inclusion-tile-check" aria-hidden>
                      ✓
                    </span>
                    Included
                  </div>
                </li>
              ))}
            </ul>

            <p className="pk-inclusions-shell-foot">
              Tap the gallery under <strong>Party Booking Charges Includes</strong> for a closer look at
              each space.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy party packages */}
      <section className="section-block">
        <div className="container">
          <h2 className="block-title">
            Celebration <span className="highlight-text">Packages</span>
          </h2>
          <p className="pk-section-lead">
            Classic timed bundles — unlimited play vibes, cake ceremony, café seating and décor accents.
          </p>
          <div className="packages-grid">
            {partyPackages.map((pkg) => (
              <div
                key={pkg.id}
                role="button"
                tabIndex={0}
                className={`package-card ${pkg.featured ? 'featured' : ''}`}
                onClick={() => openModal(pkg)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(pkg);
                  }
                }}
              >
                {pkg.tag && <div className="card-badge">{pkg.tag}</div>}
                <div className="card-header" style={{ borderBottomColor: pkg.color }}>
                  <h3>{pkg.title}</h3>
                  <div className="price">{pkg.price}</div>
                  <div className="duration">{pkg.duration}</div>
                </div>
                <div className="card-body">
                  <p>{pkg.desc}</p>
                  <button type="button" className="view-btn">
                    View Details & Inclusions
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="inclusions-section">
            <h2 className="block-title">
              Party Booking <span className="highlight-text">Charges Includes</span>
            </h2>
            <p className="pk-section-lead pk-centered">
              Tap any tile for photos and a closer look at each inclusion.
            </p>
            <div className="inclusions-grid">
              {partyInclusions.map((item) => (
                <div
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  className="inclusion-card glass-panel"
                  onClick={() => openInclusionModal(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openInclusionModal(item);
                    }
                  }}
                >
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons — spotlight + bento grid */}
      <section className="section-block pk-addon-section pk-addon-section-v2">
        <div className="container">
          <h2 className="block-title">
            Add-ons & <span className="highlight-text">Upgrades</span>
          </h2>
          <p className="pk-section-lead">
            Optional extras — pick what fits your crowd. Prices are indicative; we&apos;ll confirm on
            WhatsApp.
          </p>

          <div className="pk-addon-shell glass-panel">
            <div className="pk-addon-spotlight">
              <div className="pk-addon-spotlight-icon" aria-hidden>
                ⏱️
              </div>
              <div className="pk-addon-spotlight-text">
                <span className="pk-addon-spotlight-label">Most booked</span>
                <h3 className="pk-addon-spotlight-title">{extraTimeAddon.name}</h3>
                <p className="pk-addon-spotlight-blurb">{extraTimeAddon.blurb}</p>
              </div>
              <div className="pk-addon-spotlight-price-wrap">
                <span className="pk-addon-spotlight-price">{extraTimeAddon.price}</span>
              </div>
            </div>

            <div className="pk-addon-divider" role="presentation" />

            <div className="pk-addon-bento-head">
              <h3 className="pk-addon-bento-title">More ways to level up</h3>
              <p className="pk-addon-bento-sub">Entertainment, memories, and ambience — add any combo.</p>
            </div>

            <div className="pk-addon-bento-grid">
              {upgradeAddons.map((addon) => (
                <div key={addon.name} className="pk-addon-bento-card">
                  <span className="pk-addon-bento-name">{addon.name}</span>
                  <span className="pk-addon-bento-price">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="pk-btn-primary pk-addon-cta"
            onClick={() => handleBookNow('Add-ons / upgrades — discuss options')}
          >
            Discuss add-ons on WhatsApp
          </button>
        </div>
      </section>

      {/* Arcade */}
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

      {/* Buffet food packages */}
      <section className="section-block food-block">
        <div className="container">
          <h2 className="block-title">
            Buffet <span className="highlight-text">Dining Tiers</span>
          </h2>
          <p className="pk-section-lead">
            Fun, Ball &amp; Bounce and Rockstar — veg &amp; non-veg unlimited buffet builds (tap for menu
            summary).
          </p>
          <div className="packages-grid">
            {foodPackages.map((pkg) => (
              <div
                key={pkg.id}
                role="button"
                tabIndex={0}
                className="package-card food-card"
                onClick={() => openModal(pkg)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(pkg);
                  }
                }}
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
                  <button type="button" className="view-btn">
                    View Menu
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu highlights */}
      <section className="section-block pk-menu-highlights-section">
        <div className="container">
          <h2 className="block-title">
            Menu <span className="highlight-text">Highlights</span>
          </h2>
          <p className="pk-section-lead">
            A bite-sized preview — explore the complete menu in the next section.
          </p>
          <div className="pk-menu-highlight-grid">
            {Object.entries(menuHighlights).map(([category, items]) => (
              <div key={category} className="pk-menu-highlight-card glass-panel">
                <h3 className="pk-menu-highlight-title">
                  <span className="pk-menu-highlight-icon">{highlightIcons[category]}</span>
                  {category}
                </h3>
                <ul className="pk-menu-highlight-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full menu */}
      <section className="section-block menu-section">
        <div className="container">
          <h2 className="block-title">
            Full <span className="highlight-text">Menu</span>
          </h2>
          <div className="menu-container-card glass-panel">
            {Object.entries(menuData).map(([category, items]) => (
              <div key={category} className="menu-details-group">
                <h3 className="menu-group-title">
                  {menuIcons[category] && <span>{menuIcons[category]} </span>}
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
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="section-block terms-section pk-terms-split">
        <div className="container">
          <h2 className="block-title">
            Terms &amp; <span className="highlight-text">Conditions</span>
          </h2>
          <h3 className="pk-terms-subtitle">Booking essentials</h3>
          <div className="terms-grid">
            {termsBookingEssentials.map((term, idx) => (
              <div key={`essential-${idx}`} className="term-card glass-panel">
                <p>{term}</p>
              </div>
            ))}
          </div>
          <h3 className="pk-terms-subtitle">Additional venue policies</h3>
          <p className="pk-section-lead pk-centered">
            Earlier policy copy retained for transparency — confirm final applicability when you book.
          </p>
          <div className="terms-grid">
            {additionalPolicies.map((term, idx) => (
              <div key={`policy-${idx}`} className="term-card glass-panel">
                <p>{term}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="book-party-contact" className="section-block pk-contact-section">
        <div className="container">
          <div className="pk-contact-card glass-panel">
            <h2 className="pk-contact-title">Plan your party with us</h2>
            <p className="pk-contact-intro">
              Share your date, guest count and vibe — we&apos;ll guide you through venue slabs, food and
              add-ons.
            </p>
            <div className="pk-contact-grid">
              <div className="pk-contact-item">
                <span className="pk-contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>{VENUE_ADDRESS_LINE}</p>
                </div>
              </div>
              <div className="pk-contact-item">
                <span className="pk-contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <a href={`tel:${WHATSAPP_PHONE.replace(/\s/g, '')}`}>{WHATSAPP_PHONE}</a>
                </div>
              </div>
              <div className="pk-contact-item">
                <span className="pk-contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
            </div>
            <div className="pk-contact-actions">
              <button
                type="button"
                className="pk-btn-primary"
                onClick={() => handleBookNow('Book Your Party Now')}
              >
                Book Your Party Now
              </button>
              <Link to="/contact#enquiry" className="pk-btn-ghost">
                Contact page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <EnquiryButton />
      <Footer />

      {selectedPackage && (
        <div className="modal-overlay" onClick={closeModal} role="presentation">
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()} role="dialog">
            <button type="button" className="close-modal" onClick={closeModal} aria-label="Close">
              &times;
            </button>

            <div className="modal-header">
              <h2>{selectedPackage.title}</h2>
              {selectedPackage.price !== undefined && selectedPackage.price !== '' && (
                <div className="modal-price">
                  {selectedPackage.price}{' '}
                  {selectedPackage.duration && (
                    <span className="small">/ {selectedPackage.duration}</span>
                  )}
                  {selectedPackage.priceNote && (
                    <span className="small"> · {selectedPackage.priceNote}</span>
                  )}
                </div>
              )}
              {selectedPackage.price === '' && selectedPackage.priceNote && (
                <div className="modal-price modal-price-muted">{selectedPackage.priceNote}</div>
              )}
              {selectedPackage.vegPrice && (
                <div className="modal-price">
                  Veg {selectedPackage.vegPrice}
                  <span className="small"> · Non-Veg {selectedPackage.nonVegPrice}</span>
                </div>
              )}
            </div>

            <div className="modal-body scrollable">
              {selectedPackage.highlightBullets && (
                <>
                  <h3>Package includes</h3>
                  <ul className="modal-list">
                    {selectedPackage.highlightBullets.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                  <div className="modal-note">
                    <p>
                      <strong>Note:</strong> Final menu selections and minimums confirmed at booking.
                    </p>
                  </div>
                </>
              )}

              {selectedPackage.inclusions && (
                <>
                  <h3>Package Inclusions:</h3>
                  <ul className="modal-list">
                    {selectedPackage.inclusions.map((inc, i) => (
                      <li key={i}>{inc}</li>
                    ))}
                  </ul>
                  {(selectedPackage.id === 1 || selectedPackage.id === 2) && (
                    <div className="modal-note">
                      <p>
                        <strong>Note:</strong> Minimum guarantee required is 30 Pax.
                      </p>
                    </div>
                  )}
                </>
              )}

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
              <button
                type="button"
                className="book-btn-modal"
                onClick={() => handleBookNow(selectedPackage.title)}
              >
                Book This Package via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedInclusion && (
        <div className="modal-overlay" onClick={closeInclusionModal} role="presentation">
          <div
            className="modal-content glass-panel inclusion-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
          >
            <button type="button" className="close-modal" onClick={closeInclusionModal} aria-label="Close">
              &times;
            </button>
            <div className="modal-header">
              <h2>{selectedInclusion.title}</h2>
            </div>
            <div className="modal-body">
              <div className="inclusion-gallery">
                {selectedInclusion.images.map((img, index) => (
                  <img key={index} src={img} alt="" className="inclusion-img" />
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
