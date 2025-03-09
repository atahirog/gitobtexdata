'use client';

import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:ata@obtex.com?subject=Obtex Platform Inquiry';
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const formattedQuery = searchQuery.toLowerCase().replace(/\s+/g, '-');
      window.location.href = `/city/${formattedQuery}`;
    }
  };

  const featuredCities = [
    { name: 'New York', count: 15 },
    { name: 'Los Angeles', count: 12 },
    { name: 'Chicago', count: 8 },
    { name: 'Miami', count: 6 },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Global Trade Intelligence Platform</h1>
          <h2 className="text-2xl mb-4">Make Data-Driven Trade Decisions</h2>
          <p className="text-xl mb-8">Access comprehensive import-export data, market insights, and trade analytics to grow your international business.</p>
          
          <div className="flex gap-4 justify-center">
            <button 
              onClick={handleEmailClick} 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50"
            >
              Start Free Trial
            </button>
            <button 
              onClick={handleEmailClick}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            onClick={handleEmailClick} 
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-3">Trade Data Analytics</h3>
            <p>Access real-time import-export data from global customs databases</p>
          </div>
          <div 
            onClick={handleEmailClick}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-3">Market Insights</h3>
            <p>Discover market trends and opportunities with advanced analytics</p>
          </div>
          <div 
            onClick={handleEmailClick}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-3">Custom Reports</h3>
            <p>Generate detailed trade reports and market analysis</p>
          </div>
          <div 
            onClick={handleEmailClick}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-3">Coming Soon: CRM</h3>
            <p>Manage trade relationships and contacts in one place</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">200+</h2>
            <p className="text-gray-600">Countries Covered</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">1M+</h2>
            <p className="text-gray-600">Trade Records</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">10K+</h2>
            <p className="text-gray-600">Data Refresh Daily</p>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Enhanced Features Coming Soon</h2>
          <p className="text-xl mb-6">We're expanding our platform with:</p>
          <ul className="mb-8 text-lg space-y-3">
            <li>Advanced CRM System</li>
            <li>Direct Business Contact Features</li>
            <li>AI-Powered Trade Recommendations</li>
          </ul>
          <button 
            onClick={handleEmailClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Get Early Access
          </button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Trade Operations?</h2>
          <p className="text-xl mb-8">Join thousands of businesses making smarter trade decisions.</p>
          <button 
            onClick={handleEmailClick}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50"
          >
            Start Your Free Trial
          </button>
          <p className="mt-8 text-sm opacity-80">© 2024 Obtex. All rights reserved. | Obtex: Your Partner in Global Trade Intelligence</p>
        </div>
      </section>
    </main>
  );
}
