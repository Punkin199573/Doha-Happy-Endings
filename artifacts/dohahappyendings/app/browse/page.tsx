"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, Filter, Star, MapPin, Crown, Heart, Shield, Lock } from "lucide-react";

const mockProfiles = [
  {
    id: 1, name: "Aria", age: 24, location: "The Pearl", rating: 4.9, reviews: 48, verified: true,
    services: ["GFE", "Companionship", "Dinner Dates"], rate: "700 QAR/hr",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=650&fit=crop&q=85",
    premium: false,
  },
  {
    id: 2, name: "Luna", age: 26, location: "West Bay", rating: 5.0, reviews: 62, verified: true,
    services: ["Massage", "Couple Experiences", "Outcall"], rate: "850 QAR/hr",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=650&fit=crop&q=85",
    premium: true,
  },
  {
    id: 3, name: "Sofia", age: 22, location: "Lusail", rating: 4.8, reviews: 31, verified: true,
    services: ["Travel Companion", "GFE", "Private Dance"], rate: "600 QAR/hr",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=650&fit=crop&q=85",
    premium: false,
  },
  {
    id: 4, name: "Zara", age: 28, location: "The Pearl", rating: 4.9, reviews: 77, verified: true,
    services: ["Overnight", "Dinner Dates", "Roleplay"], rate: "900 QAR/hr",
    img: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=500&h=650&fit=crop&q=85",
    premium: true,
  },
  {
    id: 5, name: "Nina", age: 25, location: "Msheireb", rating: 4.7, reviews: 23, verified: false,
    services: ["Massage", "Companionship", "Virtual"], rate: "500 QAR/hr",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=650&fit=crop&q=85",
    premium: false,
  },
  {
    id: 6, name: "Riya", age: 23, location: "West Bay", rating: 5.0, reviews: 89, verified: true,
    services: ["GFE", "Outcall", "Overnight"], rate: "1000 QAR/hr",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=650&fit=crop&q=85",
    premium: true,
  },
];

const locations = ["All Locations", "The Pearl", "West Bay", "Lusail", "Msheireb"];
const serviceFilters = ["All Services", "GFE", "Massage", "Companionship", "Dinner Dates", "Overnight"];

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [service, setService] = useState("All Services");
  const [showFilters, setShowFilters] = useState(false);
  const [liked, setLiked] = useState<number[]>([]);

  const filtered = mockProfiles.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchLoc = location === "All Locations" || p.location === location;
    const matchSvc = service === "All Services" || p.services.includes(service);
    return matchSearch && matchLoc && matchSvc;
  });

  function toggleLike(id: number) {
    setLiked((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10">
          <p className="font-body text-gold-500 text-xs uppercase tracking-[0.3em] font-medium mb-2">Explore</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-silver-100 mb-2 italic">
            Discover <span className="text-gold-gradient">Pleasure</span>
          </h1>
          <p className="font-body text-silver-500 text-lg">Verified pleasure givers across Doha, curated for you</p>
        </motion.div>

        {/* Search & filters */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="liquid-glass rounded-2xl p-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-600" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name..."
                className="w-full bg-white/[0.03] border border-white/8 rounded-xl pl-11 pr-4 py-3 font-body text-silver-200 placeholder-silver-700 focus:outline-none focus:border-gold-500/40 transition-colors text-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border font-body text-sm font-medium transition-colors ${
                showFilters ? "bg-gold-500/15 border-gold-500/40 text-gold-300" : "bg-white/[0.03] border-white/8 text-silver-400 hover:border-white/15"
              }`}
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[{ label: "Location", val: location, set: setLocation, opts: locations }, { label: "Service", val: service, set: setService, opts: serviceFilters }].map((f) => (
                  <div key={f.label}>
                    <label className="font-body text-xs text-silver-500 uppercase tracking-widest mb-2 block">{f.label}</label>
                    <select value={f.val} onChange={(e) => f.set(e.target.value)} className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-2.5 font-body text-silver-200 focus:outline-none focus:border-gold-500/40 text-sm">
                      {f.opts.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <p className="font-body text-silver-600 text-sm mb-6">{filtered.length} profiles found</p>

        {/* Profile grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((profile, i) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={profile.img}
                  alt={profile.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080208] via-[#080208]/20 to-transparent" />

                {/* Premium lock overlay */}
                {profile.premium && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#080208]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Lock className="w-8 h-8 text-gold-400 mb-2 drop-shadow-[0_0_8px_rgba(201,72,106,0.8)]" />
                    <span className="font-body text-xs text-gold-300 tracking-widest uppercase">Premium Content</span>
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {profile.verified && (
                    <div className="flex items-center gap-1 bg-gold-500/20 backdrop-blur-sm border border-gold-500/40 text-gold-300 text-xs font-body font-medium px-2.5 py-1 rounded-full">
                      <Shield className="w-3 h-3" /> Verified
                    </div>
                  )}
                  {profile.premium && (
                    <div className="flex items-center gap-1 bg-rose-gold/20 backdrop-blur-sm border border-rose-gold/40 text-[#E8A882] text-xs font-body font-medium px-2.5 py-1 rounded-full">
                      <Crown className="w-3 h-3" /> Premium
                    </div>
                  )}
                </div>

                {/* Like button */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleLike(profile.id); }}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-colors"
                >
                  <Heart className={`w-4 h-4 transition-colors ${liked.includes(profile.id) ? "fill-gold-500 text-gold-500" : "text-silver-400"}`} />
                </button>

                {/* Bottom name info over photo */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white italic">{profile.name}, {profile.age}</h3>
                      <div className="flex items-center gap-1 text-silver-400 text-xs mt-0.5 font-body">
                        <MapPin className="w-3 h-3" /> {profile.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end mb-1">
                        <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                        <span className="font-body text-xs text-silver-300">{profile.rating} ({profile.reviews})</span>
                      </div>
                      <p className="font-body text-gold-400 font-semibold text-sm">{profile.rate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-4">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {profile.services.slice(0, 3).map((s) => (
                    <span key={s} className="font-body text-xs text-silver-500 bg-white/[0.04] border border-white/8 px-2.5 py-1 rounded-full">{s}</span>
                  ))}
                </div>
                <button className="w-full glass border-gold-glow text-gold-400 font-body font-medium text-sm py-2.5 rounded-xl hover:bg-gold-500/10 transition-colors">
                  {profile.premium ? "🔒 Unlock Profile" : "View Profile"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Crown className="w-12 h-12 mx-auto mb-4 text-gold-500/30" />
            <p className="font-display text-xl text-silver-500 italic">No profiles match your filters</p>
            <p className="font-body text-sm text-silver-700 mt-2">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
