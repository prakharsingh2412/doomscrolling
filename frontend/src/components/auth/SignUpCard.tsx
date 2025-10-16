import { useState } from "react";

interface SignUpCardProps {
  onClose: () => void;
  onSwitch: () => void;
  onSuccess: () => void;
}

const SignUpCard = ({ onClose, onSwitch ,onSuccess }: SignUpCardProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up:", { username, email, password });
    onSuccess();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[999] bg-black/60 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-purple-500/30 rounded-2xl shadow-2xl w-[90%] max-w-md p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Create Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-slate-300 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-slate-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-slate-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Switch to Sign In */}
        <p className="text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <button
            onClick={onSwitch}
            className="text-purple-400 hover:text-blue-400 transition-colors"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpCard;