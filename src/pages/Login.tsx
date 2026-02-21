import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, LogIn, AlertCircle, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple password for now - can be changed later
        if (password === 'honzima123') {
            sessionStorage.setItem('honzima_admin_session', 'true');
            toast.success('Successfully logged in');
            navigate('/admin');
        } else {
            setError('Invalid password. Please try again.');
            toast.error('Login failed');
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Website
                </Link>

                <div className="glass-card p-10 border-primary/20">
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20">
                            <Lock className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-3xl font-display font-bold text-foreground mb-2">Admin <span className="text-teal-500">Login</span></h1>
                        <p className="text-muted-foreground">Enter your password to access the dashboard</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter admin password"
                                className="w-full bg-secondary/30 border border-border/50 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError('');
                                }}
                                autoFocus
                            />
                            {error && (
                                <p className="text-red-500 text-xs mt-2 flex items-center gap-1.5">
                                    <AlertCircle className="w-3 h-3" />
                                    {error}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                        >
                            <LogIn className="w-5 h-5" />
                            Access Dashboard
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-border/50 text-center">
                        <p className="text-xs text-muted-foreground italic">
                            Protected Admin Access for Honzima
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
