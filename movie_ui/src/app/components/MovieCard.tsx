import React from 'react';
import { Tv } from 'lucide-react';
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

export const MovieCard: React.FC<{
  movie: Movie;
  onClick: (m: Movie) => void;
}> = ({ movie, onClick }) => {
  return (
    <div
      className="group relative bg-zinc-900 rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02] hover:ring-2 hover:ring-red-500 shadow-xl flex flex-col h-full"
      onClick={() => onClick(movie)}
    >
      <div className="aspect-[2/3] relative">
        <ImageWithFallback
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            Coming Soon
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg mb-1 truncate">
          {movie.title}
        </h3>

        <p className="text-zinc-500 text-xs line-clamp-2 mb-3 h-8 leading-relaxed">
          {movie.description}
        </p>

        <div className="mt-auto pt-3 border-t border-zinc-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tv size={12} className="text-emerald-400" />
              <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-tighter">
                Streaming
              </span>
            </div>

            <span className="text-emerald-400 text-xs font-black">
              {movie.streamingDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};