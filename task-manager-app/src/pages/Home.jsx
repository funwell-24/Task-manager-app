import React from 'react';
import { Link } from 'react-router-dom';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="space-y-12 px-4">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto pt-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Task Manager Pro
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Organize your life, boost your productivity, and achieve more every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tasks">
              <Button variant="primary" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                🚀 Get Started
              </Button>
            </Link>
            <Link to="/api-demo">
              <Button variant="secondary" className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
                🔌 API Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-8 hover:scale-105 transition-transform duration-300 border-2 border-blue-200">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📝</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Smart Tasks
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Create, organize, and track tasks with intelligent filtering and sorting capabilities.
            </p>
          </Card>

          <Card className="text-center p-8 hover:scale-105 transition-transform duration-300 border-2 border-green-200">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🌙</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Dark Mode
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Beautiful dark and light themes that adapt to your preference and environment.
            </p>
          </Card>

          <Card className="text-center p-8 hover:scale-105 transition-transform duration-300 border-2 border-purple-200">
            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Responsive
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Flawless experience on all devices - desktop, tablet, and mobile.
            </p>
          </Card>
        </div>

        {/* Task Manager Section */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your Productivity Hub
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Start organizing your tasks below. Everything syncs automatically and works offline.
            </p>
          </div>
          <TaskManager />
        </div>
      </div>
    </div>
  );
};

export default Home;