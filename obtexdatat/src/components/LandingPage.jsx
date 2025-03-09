import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Unlock Global Trade Insights</h1>
          <h2>Your All-in-One Import-Export Intelligence Platform</h2>
          <p>Access real-time trade data, market analytics, and business intelligence to make informed decisions in international trade.</p>
          
          <div className="cta-buttons">
            <button className="primary-btn">Start Free Trial</button>
            <button className="secondary-btn">Watch Demo</button>
          </div>
        </div>
        <div className="hero-image">
          {/* Add your dashboard screenshot here */}
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid">
        <div className="feature-card">
          <h3>Real-Time Trade Data</h3>
          <p>Access up-to-date import-export data from global customs databases</p>
        </div>
        <div className="feature-card">
          <h3>Market Analytics</h3>
          <p>Analyze market trends and trade patterns with interactive visualizations</p>
        </div>
        <div className="feature-card">
          <h3>Business Intelligence</h3>
          <p>Get actionable insights for your international trade decisions</p>
        </div>
        <div className="feature-card">
          <h3>Coming Soon: Advanced CRM</h3>
          <p>Manage your trade relationships and contacts all in one place</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h2>200+</h2>
          <p>Countries Covered</p>
        </div>
        <div className="stat-item">
          <h2>1M+</h2>
          <p>Trade Records</p>
        </div>
        <div className="stat-item">
          <h2>10K+</h2>
          <p>Data Refresh Daily</p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="coming-soon-banner">
        <div className="banner-content">
          <h2>Coming Soon: Enhanced Features</h2>
          <p>We're working on powerful new tools including:</p>
          <ul>
            <li>Advanced CRM System</li>
            <li>Direct Business Contact Features</li>
            <li>Automated Lead Generation</li>
          </ul>
          <button className="notify-btn">Get Notified</button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Transform Your Trade Business?</h2>
        <p>Start your free trial today and unlock the power of global trade data.</p>
        <button className="primary-btn">Get Started</button>
      </section>
    </div>
  );
};

export default LandingPage;