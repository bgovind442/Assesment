import React, { useState } from 'react';
import { Search, Bell, Menu, User, Filter, Play, TrendingUp, Calendar, ChevronRight } from 'lucide-react';
import { MovieCard } from './components/MovieCard';
import { MovieModal } from './components/MovieModal';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';

interface Movie {
  id: string;
  title: string;
  image: string;
  description: string;
  theatricalDate: string;
  streamingDate: string;
  platform: string;
  prices: {
    theater: { name: string; price: number }[];
    digital: { name: string; price: number }[];
  };
}


export default function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = MOVIES.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
              <Play className="text-white fill-current" size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">CINE<span className="text-red-500">PRICE</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-bold text-white hover:text-red-400 transition-colors">Movies</a>
            <a href="#" className="text-sm font-bold text-zinc-500 hover:text-white transition-colors">Streaming</a>
            <a href="#" className="text-sm font-bold text-zinc-500 hover:text-white transition-colors">Compare</a>
            <a href="#" className="text-sm font-bold text-zinc-500 hover:text-white transition-colors">Alerts</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
              <input 
                type="text" 
                placeholder="Search Spring 2026 movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-900 border border-zinc-800 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all w-64"
              />
            </div>
            <button className="p-2 text-zinc-400 hover:text-white transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-zinc-950" />
            </button>
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-bold border border-white/20">
              JS
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-16 relative rounded-[40px] overflow-hidden bg-zinc-900 h-[450px] group">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1677926405168-fa86268b7295?q=80&w=1200" 
            alt="Avengers Doomsday"
            className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Global Blockbuster</span>
              <span className="text-zinc-400 text-xs flex items-center gap-1 font-bold"><TrendingUp size={14} className="text-red-500" /> Most Anticipated of 2026</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tighter">Avengers: Doomsday</h1>
            <p className="text-zinc-300 text-lg mb-8 leading-relaxed max-w-xl">
              Witness the return of Robert Downey Jr. as Victor von Doom. The multiverse hangs in the balance as Earth's mightiest heroes face their ultimate challenge.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setSelectedMovie(MOVIES[0])}
                className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-red-600/20 transition-all active:scale-95 flex items-center gap-2"
              >
                Track Release <ChevronRight size={18} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold px-8 py-4 rounded-2xl transition-all border border-white/10">
                Official Teaser
              </button>
            </div>
          </div>
        </section>

        {/* Section Title */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black text-white mb-2">Spring 2026 Lineup</h2>
            <p className="text-zinc-500 text-sm font-medium">Tracking theatrical releases from March to May 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-sm font-bold hover:bg-zinc-800 transition-colors">
              <Filter size={16} /> Filter
            </button>
            <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800">
              <button className="px-3 py-1.5 bg-zinc-800 text-white text-xs font-bold rounded-lg shadow-sm">Grid</button>
              <button className="px-3 py-1.5 text-zinc-500 text-xs font-bold rounded-lg hover:text-white transition-colors">List</button>
            </div>
          </div>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMovies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onClick={(m) => setSelectedMovie(m)} 
            />
          ))}
        </div>

        {/* Streaming Soon Section */}
        <section className="mt-24 bg-zinc-900 rounded-[40px] p-10 border border-zinc-800 overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">Smart Tracking for the 2026 Box Office</h2>
              <p className="text-zinc-400 mb-8 leading-relaxed text-lg">
                The Spring 2026 season is packed with major blockbusters. Use CinePrice to track ticket discounts, IMAX availability, and projected streaming dates for the year's biggest hits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email for alerts" 
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                />
                <button className="bg-red-600 text-white font-black px-8 py-4 rounded-2xl hover:bg-red-500 transition-all active:scale-95 shadow-lg shadow-red-600/20 whitespace-nowrap">
                  Get Alerts
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-zinc-950 p-6 rounded-3xl border border-zinc-800 shadow-2xl rotate-2 relative">
                <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">Live Updates</div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center text-red-500">
                    <TrendingUp size={20} />
                   </div>
                   <h3 className="font-bold text-white uppercase text-xs tracking-widest">Spring Trends</h3>
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between items-end border-b border-zinc-900 pb-2">
                     <span className="text-zinc-500 text-xs">Avg. Spring Ticket</span>
                     <span className="text-white font-black">$17.85</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-zinc-900 pb-2">
                     <span className="text-zinc-500 text-xs">Premium (IMAX) Demand</span>
                     <span className="text-red-400 font-black">+24%</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-zinc-900 pb-2">
                     <span className="text-zinc-500 text-xs">Avg. Digital Window</span>
                     <span className="text-emerald-400 font-black">45-60 Days</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]" />
        </section>
      </main>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Play className="text-white fill-current" size={16} />
                </div>
                <span className="text-xl font-black tracking-tighter text-white">CINE<span className="text-red-500">PRICE</span></span>
              </div>
              <p className="text-zinc-500 text-sm text-center md:text-left max-w-xs">
                Your ultimate companion for tracking 2026 theatrical releases and streaming transitions.
              </p>
            </div>
            <div className="flex gap-12 text-sm">
              <div className="flex flex-col gap-4">
                <span className="text-white font-bold">Platform</span>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">All Movies</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">Compare Prices</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">Price Alerts</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-white font-bold">Company</span>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">About Us</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">Contact</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">Privacy</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-600">© 2026 CinePrice Intelligence. All cinematic release dates are subject to studio changes.</p>
            <div className="flex gap-6">
              <div className="w-5 h-5 bg-zinc-800 rounded-full cursor-pointer hover:bg-red-600 transition-colors" />
              <div className="w-5 h-5 bg-zinc-800 rounded-full cursor-pointer hover:bg-red-600 transition-colors" />
              <div className="w-5 h-5 bg-zinc-800 rounded-full cursor-pointer hover:bg-red-600 transition-colors" />
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedMovie && (
          <MovieModal 
            movie={selectedMovie} 
            onClose={() => setSelectedMovie(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
