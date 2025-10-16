import React, { useState } from 'react';
import { Sun, Moon, Monitor, Globe, Clock, BarChart3, RefreshCw, ChevronRight } from 'lucide-react';

export default function SettingsPage() {
  const [themeMode, setThemeMode] = useState('auto');
  const [language, setLanguage] = useState('en');
  const [timezone, setTimezone] = useState('auto');
  const [defaultView, setDefaultView] = useState('daily');
  const [syncFrequency, setSyncFrequency] = useState('realtime');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900/50 backdrop-blur-sm border-r border-slate-700/50 p-6">
        <h1 className="text-2xl font-bold text-blue-400 mb-8">Doom Scroller</h1>
        <nav className="space-y-2">
          <a href="#" className="block px-4 py-2 text-slate-300 hover:bg-slate-800/50 rounded-lg transition">
            Dashboard
          </a>
          <a href="#" className="block px-4 py-2 text-slate-300 hover:bg-slate-800/50 rounded-lg transition">
            Insights
          </a>
          <a href="#" className="block px-4 py-2 text-slate-300 hover:bg-slate-800/50 rounded-lg transition">
            Goals
          </a>
          <a href="#" className="block px-4 py-2 text-slate-300 hover:bg-slate-800/50 rounded-lg transition">
            Rewards
          </a>
          <a href="#" className="block px-4 py-3 bg-blue-600 text-white rounded-lg font-medium">
            Settings
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-100 mb-8">Settings</h2>

          {/* Appearance Section */}
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 mb-6 overflow-hidden">
            <div className="p-6 border-b border-slate-700/50">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Appearance</h3>
              
              {/* Theme Mode */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-3">Theme Mode</label>
                <div className="space-y-3">
                  <label className="flex items-center p-4 bg-slate-700/30 rounded-lg cursor-pointer hover:bg-slate-700/50 transition">
                    <input
                      type="radio"
                      name="theme"
                      value="light"
                      checked={themeMode === 'light'}
                      onChange={(e) => setThemeMode(e.target.value)}
                      className="w-5 h-5 text-blue-600"
                    />
                    <Sun className="w-5 h-5 ml-3 mr-2 text-yellow-400" />
                    <span className="text-slate-200 flex-1">Light Mode</span>
                  </label>
                  
                  <label className="flex items-center p-4 bg-slate-700/30 rounded-lg cursor-pointer hover:bg-slate-700/50 transition">
                    <input
                      type="radio"
                      name="theme"
                      value="dark"
                      checked={themeMode === 'dark'}
                      onChange={(e) => setThemeMode(e.target.value)}
                      className="w-5 h-5 text-blue-600"
                    />
                    <Moon className="w-5 h-5 ml-3 mr-2 text-blue-400" />
                    <span className="text-slate-200 flex-1">Dark Mode</span>
                  </label>
                  
                  <label className="flex items-center p-4 bg-slate-700/30 rounded-lg cursor-pointer hover:bg-slate-700/50 transition">
                    <input
                      type="radio"
                      name="theme"
                      value="auto"
                      checked={themeMode === 'auto'}
                      onChange={(e) => setThemeMode(e.target.value)}
                      className="w-5 h-5 text-blue-600"
                    />
                    <Monitor className="w-5 h-5 ml-3 mr-2 text-purple-400" />
                    <span className="text-slate-200 flex-1">Auto (based on system)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Personalization Section */}
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 mb-6 overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Personalization</h3>
              
              {/* Language Preference */}
              <div className="mb-6 pb-6 border-b border-slate-700/50">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <div className="text-slate-200 font-medium">Language Preference</div>
                      <div className="text-sm text-slate-400">Choose your preferred language</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="bg-slate-700/50 text-slate-200 px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                      <option value="hi">हिन्दी</option>
                      <option value="zh">中文</option>
                    </select>
                  </div>
                </label>
              </div>

              {/* Timezone / Region */}
              <div className="mb-6 pb-6 border-b border-slate-700/50">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <div className="text-slate-200 font-medium">Timezone / Region</div>
                      <div className="text-sm text-slate-400">For daily usage reports</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="bg-slate-700/50 text-slate-200 px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="auto">Auto-detect</option>
                      <option value="utc">UTC</option>
                      <option value="ist">IST (India)</option>
                      <option value="pst">PST (US West)</option>
                      <option value="est">EST (US East)</option>
                      <option value="gmt">GMT (London)</option>
                      <option value="cet">CET (Europe)</option>
                      <option value="jst">JST (Japan)</option>
                    </select>
                  </div>
                </label>
              </div>

              {/* Default Dashboard View */}
              <div className="mb-6 pb-6 border-b border-slate-700/50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <BarChart3 className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                    <div>
                      <div className="text-slate-200 font-medium mb-3">Default Dashboard View</div>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="view"
                            value="daily"
                            checked={defaultView === 'daily'}
                            onChange={(e) => setDefaultView(e.target.value)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="ml-3 text-slate-300">Daily</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="view"
                            value="weekly"
                            checked={defaultView === 'weekly'}
                            onChange={(e) => setDefaultView(e.target.value)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="ml-3 text-slate-300">Weekly</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="view"
                            value="monthly"
                            checked={defaultView === 'monthly'}
                            onChange={(e) => setDefaultView(e.target.value)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="ml-3 text-slate-300">Monthly</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Sync Frequency */}
              <div>
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center">
                    <RefreshCw className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <div className="text-slate-200 font-medium">Data Sync Frequency</div>
                      <div className="text-sm text-slate-400">How often screen-time stats refresh</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <select
                      value={syncFrequency}
                      onChange={(e) => setSyncFrequency(e.target.value)}
                      className="bg-slate-700/50 text-slate-200 px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="realtime">Real-time</option>
                      <option value="5min">Every 5 minutes</option>
                      <option value="15min">Every 15 minutes</option>
                      <option value="30min">Every 30 minutes</option>
                      <option value="1hour">Every hour</option>
                      <option value="manual">Manual only</option>
                    </select>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Additional Settings */}
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
            <button className="w-full p-5 flex items-center justify-between hover:bg-slate-700/30 transition">
              <span className="text-slate-200 font-medium">Profile name and icon</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
            <div className="border-t border-slate-700/50"></div>
            <button className="w-full p-5 flex items-center justify-between hover:bg-slate-700/30 transition">
              <span className="text-slate-200 font-medium">Privacy & Security</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}