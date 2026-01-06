import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";

import "swiper/css";
import "./Banner.css";

function Banner() {
  return (
    <>
      {/* =======================
          HERO BANNER SLIDER
      ======================= */}
      <div className="main-banner">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          speed={1200}
          className="banner-swiper"
        >
          <SwiperSlide>
            <div className="banner-slide item-1"></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="banner-slide item-2"></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="banner-slide item-3"></div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* =======================
          WHY US SECTION
      ======================= */}
      <section className="why-us">
        <h2>India’s Trusted Movers & Packers</h2>
        <p className="section-desc">
          Professional relocation services for homes, offices, vehicles, and storage.
        </p>

        <div className="why-grid">
          <div className="why-card">
            <h3>House Shifting</h3>
            <p>Safe packing and damage-free household shifting.</p>
            <NavLink to="/service/moving" className="btn">Explore</NavLink>
          </div>

          <div className="why-card">
            <h3>Packing Services</h3>
            <p>Premium materials & trained manpower.</p>
            <NavLink to="/service/packing" className="btn">View</NavLink>
          </div>

          <div className="why-card">
            <h3>Storage Solutions</h3>
            <p>Short & long-term secure warehousing.</p>
            <NavLink to="/service/storage" className="btn">Check</NavLink>
          </div>
        </div>
      </section>

      {/* =======================
          PROCESS SECTION
      ======================= */}
      <section className="process">
        <h2>How It Works</h2>

        <div className="process-steps">
          <div className="step">📞 Book Service</div>
          <div className="step">📦 Packing</div>
          <div className="step">🚚 Moving</div>
          <div className="step">🏠 Delivery</div>
        </div>

        <NavLink to="/register" className="cta-btn">
          Get Started
        </NavLink>
      </section>
    </>
  );
}

export default Banner;
