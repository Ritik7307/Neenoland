import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './PackagesPage.css';

const PackagesPage = () => {
  const handleBookNow = (packageType) => {
    const message = encodeURIComponent(`Hello! I would like to book ${packageType} package.`);
    const phoneNumber = '+919876543210';
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="packages-page">
      <Navbar />
      
      {/* Party Booking Includes */}
      <section className="includes-section">
        <div className="container">
          <h2 className="section-title">Book Your Party With Us</h2>
          <div className="party-pricing">
            <div className="pricing-card">
              <div className="pricing-badge">Popular</div>
              <h2>₹ 15,999</h2>
              <p>For 3 Hours</p>
              <div className="pricing-feature">Perfect for small gatherings</div>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">Best Value</div>
              <h2>₹ 19,999</h2>
              <p>For 4 Hours</p>
              <div className="pricing-feature">Ideal for grand celebrations</div>
            </div>
          </div>
          <h2 className="section-title" style={{marginTop: '60px'}}>Party Booking Charges Includes</h2>
          <div className="includes-grid">
            <div className="include-item"> Unlimited Access For Playzone Games</div>
            <div className="include-item"> Unlimited Access For Arcade Games</div>
            <div className="include-item"> Cake Cutting Ceremony On Stage</div>
            <div className="include-item"> Personalized Sitting Space In Cafe</div>
            <div className="include-item"> Multicolor Balloon's Decoration</div>
            <div className="include-item"> Dance/Fun/Party Music</div>
          </div>
        </div>
      </section>

      {/* Food Packages */}
      <section className="food-packages-section">
        <div className="container">
          <h2 className="section-title">Unlimited Food Packages</h2>
          <div className="food-packages-grid">
            {/* Fun Package */}
            <div className="food-package-card fun-package">
              <div className="package-header">
                <h3>Fun Package</h3>
              </div>
              <div className="package-content">
                <div className="package-item">
                  <span className="item-label">Starter:</span>
                  <span className="item-value">Choice of any 3</span>
                </div>
                <div className="package-item">
                  <span className="item-label">Main Course:</span>
                  <span className="item-value">Choice of any 3</span>
                </div>
                <div className="package-item">
                  <span className="item-label">Beverages:</span>
                  <span className="item-value">Choice of any 1</span>
                </div>
                <div className="package-item">
                  <span className="item-label">Desserts:</span>
                  <span className="item-value">Choice of any 1</span>
                </div>
                <div className="package-pricing">
                  <div className="price-tag veg">Veg ₹ 799/-</div>
                  <div className="price-tag non-veg">Non-Veg ₹ 899/-</div>
                </div>
                <button className="book-btn" onClick={() => handleBookNow('Fun Package')}>
                  Book Now
                </button>
              </div>
            </div>

            {/* Ball & Bounce Package */}
            <div className="food-package-card bounce-package">
              <div className="package-header">
                <h3>Ball & Bounce Package</h3>
              </div>
              <div className="package-content">
                <div className="package-item">
                  <span className="item-label">Starter:</span>
                  <span className="item-value">Choice of any 4</span>
                </div>
                <div className="package-item">
                  <span className="item-label">Main Course:</span>
                  <span className="item-value">Choice of any 4</span>
                </div>
                <div className="package-item">
                  <span className="item-label">Beverages:</span>
                  <span className="item-value">Choice of any 2</span>
                </div>
                <div className="package-item">
                  <span className="item-label">Desserts:</span>
                  <span className="item-value">Choice of any 2</span>
                </div>
                <div className="package-pricing">
                  <div className="price-tag veg">Veg ₹ 999/-</div>
                  <div className="price-tag non-veg">Non-Veg ₹ 1,099/-</div>
                </div>
                <button className="book-btn" onClick={() => handleBookNow('Ball & Bounce Package')}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="terms-section">
        <div className="container">
          <h2 className="section-title">Terms and Conditions</h2>
          <div className="terms-content">
            <div className="terms-item">
             
              <p>Additional GST Applicable On Final Billing</p>
            </div>
            <div className="terms-item">
              
              <p>Minimum guarantee required to avail the package is 30 Pax.</p>
            </div>
            <div className="terms-item">
              
              <p>Minimum Guarantee of kids and adults shall be charged separately in case pax turned up less than minimum guarantee. If count goes over and above to minimum guarantee, actual number shall be charged.</p>
            </div>
            <div className="terms-item">
             
              <p>Any changes in minimum guarantee or food menu has to be informed 3 days prior to the event.</p>
            </div>
            <div className="terms-item">
            
              <p>Outside Food & Beverages Will not be permitted.</p>
            </div>
            <div className="terms-item">
            
              <p>Kindly submit the menu prior (3 DAYS) of your Party.</p>
            </div>
            <div className="terms-item">
              
              <p>Food preparation and sitting arrangements shall be provided only for 10% extra to the minimum guarantee given.</p>
            </div>
            <div className="terms-item">

              <p>There will be provision of 4 complimentary kids upto 4 years only in an event, over and above 4 of upto 4 years kids charges will be applicable as per pre decided package.</p>
            </div>
            <div className="terms-item">
              
              <p>There is no provision of food packaging of leftover food.</p>
            </div>
            <div className="terms-item">
              
              <p>If maid / driver / photographer or others else apart from guests are having the same food the same charges shall be applicable as per pre decided package.</p>
            </div>
            <div className="terms-item">
            
              <p>Event timings will be fixed as per your package timing 15 minutes plus minus</p>
            </div>
            <div className="terms-item">
            
              <p>Extra hour will be charged with additional ₹5000</p>
            </div>
            <div className="terms-item">
             
              <p>Only the cafe area will be reserved at the time of party. Playzone will remain open for regular guests.</p>
            </div>
            <div className="terms-item">
             
              <p>No other offers can be clubbed with party packages. Any additions besides the package will be charged on actual.</p>
            </div>
            <div className="terms-item">
              <p>We take all possible measures for the security and safety of every child, but in case of any untoward incident, we will not be responsible in any way.</p>
            </div>
            <div className="terms-item">
              
              <p>Socks are mandatory for kids in the play area</p>
            </div>
            <div className="terms-item">
              
              <p>Foods are not allowed in the play area</p>
            </div>
            <div className="terms-item">
          
              <p>50% advance is payable at the time of confirmation and balance is payable at the end of the event by credit/ Debit card or cash</p>
            </div>
            <div className="terms-item">
             
              <p>In-case of cancellation 50% cancellation charges will be applicable of total billing amount & Advance money is not refundable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <div className="container">
          <h2 className="section-title">Our Menu</h2>
          <div className="menu-content">
            <div className="menu-category">
              <h3>Starters</h3>
              <div className="menu-items">
                <div className="menu-item">Masala French Fries</div>
                <div className="menu-item">Potato Wedges</div>
                <div className="menu-item">Potato Smiles</div>
                <div className="menu-item">Veggie Nuggets</div>
                <div className="menu-item">Honey Chilli Potato</div>
                <div className="menu-item">Coleslaw Sandwich</div>
                <div className="menu-item">Dim Sim Steamed</div>
                <div className="menu-item">Dim Sim Fried</div>
                <div className="menu-item">Hara Bhara Kabab</div>
                <div className="menu-item">Nachos</div>
                <div className="menu-item">Popcorns</div>
                <div className="menu-item">Wafers</div>
                <div className="menu-item">Spring Rolls</div>
                <div className="menu-item">Veg Salt & Pepper</div>
                <div className="menu-item">Assorted Pakora</div>
                <div className="menu-item">Masala Corn</div>
                <div className="menu-item">White Chana Chaat</div>
                <div className="menu-item">Black Chana Chaat</div>
                <div className="menu-item">Fried Chaap Masala</div>
                <div className="menu-item">Dahi Ke Sholay</div>
                <div className="menu-item">Dry Veg Manchurian</div>
                <div className="menu-item">Dry Chilli Paneer</div>
                <div className="menu-item">Masala Peanut</div>
                <div className="menu-item">Aloo Chat</div>
                <div className="menu-item">Stone Oven Pizza</div>
              </div>
            </div>
            <div className="menu-category">
              <h3>Veg Main Course</h3>
              <div className="menu-items">
                <div className="menu-item">White Sauce Pasta</div>
                <div className="menu-item">Red Sauce Pasta</div>
                <div className="menu-item">Mix Sauce Pasta</div>
                <div className="menu-item">Burgers</div>
                <div className="menu-item">Vegetable Bhaji</div>
                <div className="menu-item">Boiled Matar Masala</div>
                <div className="menu-item">Paneer Bhurji</div>
                <div className="menu-item">Veg Manchurian gravy</div>
                <div className="menu-item">Chilly Paneer gravy</div>
                <div className="menu-item">Matar Paneer</div>
                <div className="menu-item">Paneer Makhni</div>
                <div className="menu-item">Kadhai Paneer</div>
                <div className="menu-item">Shahi Paneer</div>
                <div className="menu-item">Mix Veg</div>
                <div className="menu-item">Palak Paneer</div>
                <div className="menu-item">Jeera Aloo</div>
                <div className="menu-item">Dal Makhni</div>
                <div className="menu-item">Dal Tadka</div>
              </div>
            </div>
            <div className="menu-category">
              <h3>Beverages</h3>
              <div className="menu-items">
                <div className="menu-item">Hot n Sour</div>
                <div className="menu-item">Soft Drinks</div>
                <div className="menu-item">Masala Lemonade</div>
                <div className="menu-item">Ice-Tea</div>
                <div className="menu-item">Coffee</div>
                <div className="menu-item">Cold Coffee</div>
              </div>
            </div>
            <div className="menu-category">
              <h3>Desserts</h3>
              <div className="menu-items">
                <div className="menu-item">Chocolate Brownie</div>
                <div className="menu-item">Brownie Sundae</div>
                <div className="menu-item">Moong Dal Halwa</div>
                <div className="menu-item">Cold Kheer</div>
                <div className="menu-item">Gajar Ka Halwa</div>
                <div className="menu-item">Ice cream</div>
                <div className="menu-item">Gulab Jamun</div>
                <div className="menu-item">Shahi Tukda</div>
                <div className="menu-item">Rasogolla</div>
              </div>
            </div>
            <div className="menu-category complimentary">
              <h3>Complimentary Add On Items</h3>
              <div className="complimentary-section">
                <div className="complimentary-group">
                  <h4>Choice Of Any One Rice Item:</h4>
                  <div className="menu-items">
                    <div className="menu-item">Plain Rice</div>
                    <div className="menu-item">Jeera Rice</div>
                    <div className="menu-item">Matar Pulao</div>
                    <div className="menu-item">Veg Pulao</div>
                  </div>
                </div>
                <div className="complimentary-group">
                  <h4>Choice Of Any Two Breads:</h4>
                  <div className="menu-items">
                    <div className="menu-item">Missi Roti</div>
                    <div className="menu-item">Tawa Roti</div>
                    <div className="menu-item">Butter Naan</div>
                    <div className="menu-item">Pav bread</div>
                    <div className="menu-item">Kulcha bread</div>
                    <div className="menu-item">Bhature</div>
                    <div className="menu-item">Tawa Lachha Paratha</div>
                    <div className="menu-item">Puri</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="menu-note">* Menu can be customized on request</p>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default PackagesPage;

