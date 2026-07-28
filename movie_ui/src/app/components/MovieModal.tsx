import React from 'react';
import { X, Calendar, Tv } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';



interface Movie {
  id: string;
  title: string;
  image: string;
  description: string;
  theatricalDate: string;
  streamingDate: string;
  platform: string;
}

export const MovieModal: React.FC<{
  movie: Movie;
  onClose: () => void;
}> = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-zinc-900 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-zinc-800"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-zinc-950/50 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Poster */}
        <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
          <ImageWithFallback
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <h1 className="text-red-500 text-8xl">
  TEST
</h1>
        <div className="flex-1 p-6 md:p-10 overflow-y-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
            {movie.title}
          </h2>

          <p className="text-zinc-400 text-sm mb-6 leading-relaxed italic border-l-2 border-red-500 pl-4">
            {movie.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-8 text-zinc-400 text-sm">
            <div className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-zinc-700">
              <Calendar size={16} className="text-red-400" />
              <span>{movie.theatricalDate} (Theatrical)</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-emerald-500/30">
              <Tv size={16} className="text-emerald-400" />
              <span className="text-emerald-100 font-bold">
                EST. {movie.streamingDate} ({movie.platform})
              </span>
            </div>
          </div>

          <div className="space-y-8">
            {/* Synopsis */}
            <section className="bg-red-600/5 border border-red-500/10 p-6 rounded-3xl">
              <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">
                Synopsis
              </h3>

              <p className="text-zinc-300 leading-relaxed text-base">
                {movie.description}
              </p>
            </section>

            {/* Streaming Projection */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Tv size={20} className="text-zinc-400" />
                <h3 className="text-white font-bold uppercase tracking-wider text-sm">
                  Streaming Projection
                </h3>
              </div>

              <div className="p-6 bg-gradient-to-br from-red-900/40 to-emerald-900/40 rounded-3xl border border-white/5 relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
                    Based on studio distribution windows,
                    <span className="text-white font-bold">
                      {' '}
                      {movie.title}
                    </span>
                    {' '}is expected to debut on
                    <span className="text-emerald-400 font-bold">
                      {' '}
                      {movie.platform}
                    </span>
                    {' '}around
                    <span className="text-white underline decoration-emerald-500/50">
                      {' '}
                      {movie.streamingDate}
                    </span>.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-zinc-950/50 p-3 rounded-xl border border-zinc-800">
                      <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">
                        Rent HD
                      </p>
                      <p className="text-white font-bold">
                        $19.99
                        <span className="text-xs font-normal text-zinc-400">
                          {' '}
                          (Flat Rate)
                        </span>
                      </p>
                    </div>

                    <div className="flex-1 bg-zinc-950/50 p-3 rounded-xl border border-zinc-800">
                      <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">
                        Buy 4K
                      </p>
                      <p className="text-white font-bold">
                        $29.99
                        <span className="text-xs font-normal text-zinc-400">
                          {' '}
                          (Flat Rate)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
              </div>
            </section>
          </div>

          <button className="w-full mt-10 bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-600/20 transition-all active:scale-95">
            Notify Me When Tickets Drop
          </button>
        </div>
      </motion.div>
    </div>
  );
};