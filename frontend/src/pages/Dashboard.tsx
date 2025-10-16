import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function DoomScrollerDashboardFull() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'];
  const sessionData = [
    { name: 'YouTube Shorts', value: 40 },
    { name: 'Instagram Reels', value: 30 },
    { name: 'TikTok', value: 20 },
    { name: 'Twitter', value: 10 }
  ];
  const moodData = [
    { day: 'Mon', mood: 4 },
    { day: 'Tue', mood: 3 },
    { day: 'Wed', mood: 5 },
    { day: 'Thu', mood: 4 },
    { day: 'Fri', mood: 2 },
    { day: 'Sat', mood: 5 },
    { day: 'Sun', mood: 3 }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'insights', label: 'Insights' },
    { id: 'goals', label: 'Goals' },
    { id: 'rewards', label: 'Rewards' },
    { id: 'settings', label: 'Settings' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            {/* Screen Time Overview */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">Screen Time Overview</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-5xl font-bold text-blue-400">2h 45m</div>
                  <div className="text-slate-400 mt-2">Today’s Screen Time</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-green-400">80%</div>
                  <div className="text-slate-400 mt-2">Goal Achieved</div>
                </div>
              </div>
            </div>

            {/* Session Breakdown */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Session Breakdown by Platform</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={sessionData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                    {sessionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Mood Tracker */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Mood & Activity Tracker</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" stroke="#94a3b8" />
                  <YAxis domain={[0, 5]} stroke="#94a3b8" />
                  <Tooltip />
                  <Bar dataKey="mood" fill="#8B5CF6" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        );

      case 'insights':
        return (
          <div className="space-y-6">
            {[ 'Your night-time scrolling increased by 25% this week.', 'Most of your usage happens between 10 PM – 1 AM.', 'Peak productivity time detected: 10 AM – 12 PM.' ].map((msg, i) => (
              <div key={i} className="bg-gradient-to-r from-blue-950 to-purple-950 p-6 rounded-2xl border border-white/10">
                <p className="text-slate-300">{msg}</p>
              </div>
            ))}
          </div>
        );

      case 'goals':
        return (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Weekly Goal Tracker</h2>
            <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
              <div className="bg-green-500 h-full w-3/4 transition-all duration-500"></div>
            </div>
            <p className="text-slate-400 mt-3">🔥 5-day streak under limit</p>
            <button className="mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition">Set New Goal</button>
          </div>
        );

      case 'rewards':
        return (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Progress & Rewards</h2>
            <div className="flex justify-center gap-8 text-4xl">
              <span>🥉</span><span>🥈</span><span>🥇</span>
            </div>
            <p className="text-slate-400 mt-4">You’ve saved <span className="text-green-400 font-semibold">1 hour</span> this week!</p>
          </div>
        );

      case 'settings':
        return (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Settings</h2>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">Enable Dark Mode</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen flex bg-slate-950 text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900/80 border-r border-white/10 p-6 flex flex-col space-y-6">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Doom Scroller</h1>
        <nav className="flex flex-col space-y-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-left px-4 py-2 rounded-lg transition ${activeTab === tab.id ? 'bg-blue-600' : 'hover:bg-white/10'}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-10">{renderContent()}</div>
      </main>
    </div>
  );
}
