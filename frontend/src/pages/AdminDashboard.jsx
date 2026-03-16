import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Users, Trash2, Shield, ShieldCheck, Search, Loader2, AlertCircle, RefreshCw } from 'lucide-react';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [actionLoading, setActionLoading] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/users/admin/all');
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users. Ensure you have admin privileges.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;
    
    setActionLoading(userId);
    try {
      await axios.delete(`http://localhost:5000/api/users/admin/users/${userId}`);
      setUsers(users.filter(u => u._id !== userId));
    } catch (err) {
      alert('Failed to delete user.');
    } finally {
      setActionLoading(null);
    }
  };

  const handleToggleRole = async (user) => {
    const newRole = user.role === 'admin' ? 'user' : 'admin';
    setActionLoading(user._id);
    try {
      const response = await axios.patch(`http://localhost:5000/api/users/admin/users/${user._id}/role`, { role: newRole });
      setUsers(users.map(u => u._id === user._id ? { ...u, role: newRole } : u));
    } catch (err) {
      alert('Failed to update role.');
    } finally {
      setActionLoading(null);
    }
  };

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-64px)] bg-dark-bg p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
              <Users className="w-8 h-8 text-neon-cyan" />
              <span>User Management</span>
            </h1>
            <p className="text-gray-400 mt-1">Manage system access and roles</p>
          </div>

          <div className="flex items-center space-x-4">
             <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-dark-card border border-dark-border/50 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-neon-cyan/50 w-64 transition-all"
              />
            </div>
            <button 
              onClick={fetchUsers}
              className="p-2 rounded-lg bg-dark-card border border-dark-border/50 text-gray-400 hover:text-neon-cyan transition-colors"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center space-x-3 text-red-400">
            <AlertCircle className="w-5 h-5" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <div className="bg-dark-card/50 backdrop-blur-xl border border-dark-border/50 rounded-2xl overflow-hidden shadow-2xl">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-dark-bg/50 border-b border-dark-border/50">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-border/30">
              {loading ? (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center text-gray-500">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-neon-cyan" />
                    <span>Loading users...</span>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center text-gray-500">
                    No users found matching your search.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u) => (
                  <tr key={u._id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border font-bold ${
                          u.role === 'admin' ? 'bg-neon-purple/10 border-neon-purple/30 text-neon-purple' : 'bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan'
                        }`}>
                          {u.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-white font-medium">{u.name}</p>
                          <p className="text-gray-500 text-xs">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        u.role === 'admin' 
                          ? 'bg-neon-purple/10 border-neon-purple/20 text-neon-purple' 
                          : 'bg-neon-cyan/10 border-neon-cyan/20 text-neon-cyan'
                      }`}>
                        {u.role === 'admin' ? <ShieldCheck className="w-3 h-3 mr-1" /> : <Shield className="w-3 h-3 mr-1" />}
                        {u.role.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(u.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button 
                          disabled={actionLoading === u._id}
                          onClick={() => handleToggleRole(u)}
                          className="p-2 rounded-lg bg-dark-bg border border-dark-border/50 text-gray-400 hover:text-white transition-all disabled:opacity-50"
                          title={u.role === 'admin' ? "Demote to User" : "Promote to Admin"}
                        >
                          {actionLoading === u._id ? <Loader2 className="w-4 h-4 animate-spin text-neon-purple" /> : <Shield className="w-4 h-4" />}
                        </button>
                        <button 
                          disabled={actionLoading === u._id || u.role === 'admin'}
                          onClick={() => handleDeleteUser(u._id)}
                          className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                          title="Delete User"
                        >
                          {actionLoading === u._id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
