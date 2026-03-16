import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, CheckCircle, AlertCircle, Loader2, Save } from 'lucide-react';

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleUpdateName = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });
    try {
      await updateProfile({ name });
      setMessage({ type: 'success', text: 'Name updated successfully!' });
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.message || 'Failed to update name.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return setMessage({ type: 'error', text: 'Passwords do not match' });
    }
    
    setLoading(true);
    setMessage({ type: '', text: '' });
    try {
      await updateProfile({ currentPassword, password: newPassword });
      setMessage({ type: 'success', text: 'Password changed successfully!' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.message || 'Failed to change password.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-dark-bg py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">User Settings</h1>
          <p className="text-gray-400">Manage your account information and security</p>
        </div>

        {message.text && (
          <div className={`mb-8 p-4 rounded-xl border flex items-center space-x-3 animate-in fade-in slide-in-from-top-4 ${
            message.type === 'success' 
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
              : 'bg-red-500/10 border-red-500/20 text-red-400'
          }`}>
            {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <span className="font-medium text-sm">{message.text}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Info */}
          <div className="bg-dark-card/50 backdrop-blur-md border border-dark-border/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-neon-cyan/10 rounded-lg">
                <User className="w-6 h-6 text-neon-cyan" />
              </div>
              <h2 className="text-xl font-bold text-white">General Information</h2>
            </div>
            
            <form onSubmit={handleUpdateName} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email (Read-only)</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  <input
                    type="email"
                    disabled
                    value={user?.email || ''}
                    className="w-full bg-dark-bg/30 border border-dark-border/30 rounded-xl py-3 pl-12 pr-4 text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Display Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-neon-cyan transition-colors" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-dark-bg/50 border border-dark-border/50 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/10 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || name === user?.name}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Save className="w-5 h-5" /> <span>Update Profile</span></>}
              </button>
            </form>
          </div>

          {/* Security */}
          <div className="bg-dark-card/50 backdrop-blur-md border border-dark-border/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-neon-purple/10 rounded-lg">
                <Lock className="w-6 h-6 text-neon-purple" />
              </div>
              <h2 className="text-xl font-bold text-white">Security & Password</h2>
            </div>
            
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Current Password</label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full bg-dark-bg/50 border border-dark-border/50 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/10 transition-all"
                  placeholder="Required to change password"
                />
              </div>

              <div className="space-y-2 pt-2 border-t border-dark-border/30">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">New Password</label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-dark-bg/50 border border-dark-border/50 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/10 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Confirm New Password</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-dark-bg/50 border border-dark-border/50 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/10 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !newPassword}
                className="w-full mt-2 flex items-center justify-center space-x-2 py-3 rounded-xl bg-neon-purple/10 text-neon-purple border border-neon-purple/30 hover:bg-neon-purple/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Update Password</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
