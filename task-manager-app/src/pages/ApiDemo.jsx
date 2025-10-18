import React from 'react';
import { Link } from 'react-router-dom';
import ApiIntegration from '../components/ApiIntegration';
import Card from '../components/Card';
import Button from '../components/Button';

const ApiDemo = () => {
  return (
    <div className="space-y-12 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center pt-8">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-3xl p-8 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            API Integration Demo
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
            Real-time data fetching with advanced features like search, pagination, and error handling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="primary" className="px-8 py-4 text-lg bg-white text-green-600 hover:bg-gray-100 font-semibold">
                ← Back to Tasks
              </Button>
            </Link>
            <a 
              href="https://jsonplaceholder.typicode.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold">
                📚 API Docs
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* API Information Cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-8 border-2 border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🚀 Features Demonstrated
          </h2>
          <div className="space-y-4">
            {[
              'Real-time data fetching with useEffect',
              'Loading states and error handling',
              'Advanced search functionality',
              'Infinite scrolling pagination',
              'Responsive grid layout',
              'Network error simulation'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 border-2 border-green-200">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🔧 API Endpoints
          </h2>
          <div className="space-y-4">
            {[
              'GET /posts - Fetch blog posts',
              'Pagination with _page and _limit',
              'Client-side search filtering',
              'Error state simulation',
              'Real-time data updates',
              'Optimized performance'
            ].map((endpoint, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">⚡</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-lg">{endpoint}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* API Integration Component */}
      <div className="mb-8">
        <ApiIntegration />
      </div>
    </div>
  );
};

export default ApiDemo;