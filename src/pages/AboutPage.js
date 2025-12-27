import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import EnquiryButton from '../components/EnquiryButton';
import './AboutPage.css';
import { getImageUrl } from '../config/images';

// Data for "What We Offer"
const offerings = [
    {
        title: "Play Areas for All Ages",
        desc: "Spanning over a large area, our indoor play zones are designed with different age groups in mind. From soft play areas for toddlers to more adventurous setups for older kids, Neeno Land has something for everyone."
    },
    {
        title: "Tailored Party Packages",
        desc: "No two events are the same, and that's why we offer customized party packages to fit your unique needs. Whether you're hosting a small, intimate gathering or a grand celebration, we'll work with you every step of the way to bring your vision to life."
    },
    {
        title: "Fun & Interactive Activities",
        desc: "Our play zones are equipped with engaging activities that encourage physical activity, creativity, and social interaction. From interactive games to arts and crafts, kids will never run out of things to do."
    },
    {
        title: "Fully Equipped Event Spaces",
        desc: "Our versatile event rooms are designed to accommodate both kids' and adult parties. We provide everything from catering and decor to entertainment and party favors, so you can focus on enjoying the day."
    }
];

// Data for "Why Neeno Land?"
const whyChooseUs = [
    {
        title: "Safety and Security",
        desc: "We take the safety of our guests very seriously. All our play areas are regularly cleaned and maintained, and we have professional staff to ensure a safe and secure environment for your little ones."
    },
    {
        title: "Expert Event Planning",
        desc: "Planning an event can be stressful, but with Neeno Land, you can leave the hard work to us. Our team of experienced event planners will guide you through every detail, from choosing the right party package to coordinating activities, ensuring your event is seamless and stress-free."
    },
    {
        title: "Unforgettable Experiences",
        desc: "Every visit to Neeno Land is more than just a playtime – it's an experience. From the moment you step through our doors, you'll feel the energy, excitement, and warmth of a space designed to bring joy to everyone."
    }
];

const AboutPage = () => {
    // Scroll to top and page SEO on mount
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'About Us | Neeno Land - Our Story & Vision | Kids Party Venue';
        document.querySelector('meta[name="description"]')?.setAttribute('content',
            'Learn about Neeno Land - the ultimate family entertainment destination in Indirapuram, Ghaziabad. Our story, vision, and what makes us the best kids party venue.');
    }, []);

    return (
        <div className="about-page">
            <Navbar />

            {/* HERO SECTION */}
            <div className="about-hero">
                <div className="about-hero-content">
                    <h1>ABOUT <span className="highlight-text">US</span></h1>
                    <p>The Magic Behind Neeno Land</p>
                </div>
                <div className="hero-overlay-gradient"></div>
            </div>

            {/* OUR STORY SECTION */}
            <section className="section-block story-section">
                <div className="container">
                    <h2 className="block-title">Our <span className="highlight-text">Story</span></h2>
                    <div className="story-content">
                        <div className="story-image-wrapper glass-panel">
                            {/* Using the generated image path here, assuming it's moved to public or similar. 
                  For now using the relative path if I move it, or an absolute path if testing.
                  I will use a placeholder or the generated file URI if I can copy it to public.
                  I'll use a placeholder variable for now and assume I copy the file later or use the data URI.
               */}
                            <img src={getImageUrl("neenoland_story_neon_sign.png")} alt="Happy Birthday Neon Sign" className="story-img" />
                        </div>
                        <div className="story-text glass-panel">
                            <p>
                                At Neeno Land, we understand that family time is precious, and we believe in making those moments unforgettable. Our journey began with the simple idea of creating a space where kids could play and learn, while parents could relax and enjoy themselves.
                            </p>
                            <p>
                                Over time, we've grown into a multi-faceted event venue offering personalized party experiences and unique play areas designed for children of all ages.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR VISION SECTION */}
            <section className="section-block vision-section">
                <div className="container">
                    <h2 className="block-title">Our <span className="highlight-text">Vision</span></h2>
                    <div className="vision-card glass-panel">
                        <p>
                            We aspire to be the go-to destination for families looking to celebrate life's special moments in a safe, fun, and inspiring environment. Our goal is to provide a space where kids can explore their creativity, improve their social skills, and enjoy themselves, while parents can unwind and create lasting memories.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHAT WE OFFER SECTION */}
            <section className="section-block offerings-section">
                <div className="container">
                    <h2 className="block-title">What We <span className="highlight-text">Offer</span></h2>
                    <div className="offerings-grid">
                        {offerings.map((item, idx) => (
                            <div key={idx} className="offering-card glass-panel">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY NEENO LAND SECTION */}
            <section className="section-block why-section">
                <div className="container">
                    <h2 className="block-title">Why Neeno <span className="highlight-text">Land?</span></h2>
                    <div className="why-grid">
                        {whyChooseUs.map((item, idx) => (
                            <div key={idx} className="why-card glass-panel">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <WhatsAppButton />
            <EnquiryButton />
            <Footer />
        </div>
    );
};

export default AboutPage;
