import { useState } from 'react';

const nowPlayingMovies = [
  {
    type: "Bilim Kurgu, Aksiyon, Macera",
    director: "Shane Black",
    summary: "Eski bir Özel Kuvvetler askeri olan Quinn McKenna Meksika'da paralı bir görevde bulunduğu sırada bir uzaylıyla karşılaşır.",
    name: "Predator",
    image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop"
  },
  {
    type: "Gizem, Korku",
    director: "Trey Edward Shults",
    summary: "Paul vahşi doğanın ortasındaki kulübesinde, eşi ve oğluyla birlikte kendine göre bir düzen sağlamayı başarmış bir adamdır.",
    name: "Gece Gelen",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop"
  },
  {
    type: "Gerilim, Gizem, Suç",
    director: "Paul Feig",
    summary: "Küçük bir kasabada yaşayan ev kadını Stephanie Ward'un hayatı, en yakın arkadaşı Emily Nelson'ın kaybolmasıyla alt üst olur.",
    name: "Küçük Bir Rica",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop"
  },
  {
    type: "Aksiyon, Bilim Kurgu",
    director: "Christopher Nolan",
    summary: "Bir grup astronot insanlığın geleceğini kurtarmak için yıldızlararası bir yolculuğa çıkar.",
    name: "Interstellar",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop"
  },
  {
    type: "Dram, Romantik",
    director: "Damien Chazelle",
    summary: "Los Angeles'ta yaşayan iki genç sanatçının aşk hikayesi ve hayallerinin peşinden koşarken yaşadıkları fedakarlıklar.",
    name: "La La Land",
    image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&h=600&fit=crop"
  },
  {
    type: "Aksiyon, Macera, Komedi",
    director: "Taika Waititi",
    summary: "Thor, Asgard'ı kurtarmak için zamana karşı yarışırken kendini gizemli bir gezegende gladyatör dövüşlerinin içinde bulur.",
    name: "Thor: Ragnarok",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop"
  }
];

const comingSoonMovies = [
  {
    type: "Aksiyon, Macera, Fantastik",
    director: "James Cameron",
    summary: "Avatar serisinin devam filminde Jake Sully ve Neytiri'nin ailesi Pandora'nın okyanuslarında yeni maceralara atılıyor.",
    name: "Avatar 3",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=600&fit=crop"
  },
  {
    type: "Aksiyon, Bilim Kurgu",
    director: "Denis Villeneuve",
    summary: "Dune evreninin ikinci bölümünde Paul Atreides, Fremen halkıyla birlikte imparatorluğa karşı savaşa hazırlanır.",
    name: "Dune: Part Three",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop"
  },
  {
    type: "Aksiyon, Macera",
    director: "Chad Stahelski",
    summary: "John Wick, yeraltı dünyasının en güçlü isimlerine karşı son savaşını vermek için hazırlanıyor.",
    name: "John Wick: Chapter 5",
    image: "https://images.unsplash.com/photo-1574267432644-f73a6e8fb3b5?w=400&h=600&fit=crop"
  },
  {
    type: "Animasyon, Komedi, Macera",
    director: "Chris Renaud",
    summary: "Gru ve Minions'lar yeni bir maceraya atılıyor. Bu kez Gru hem ailesini hem de dünyayı kurtarmak zorunda kalacak.",
    name: "Despicable Me 5",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop"
  },
  {
    type: "Korku, Gerilim",
    director: "Michael Chaves",
    summary: "Ed ve Lorraine Warren'ın yeni bir doğaüstü olaya müdahale etmesini konu alan film.",
    name: "The Conjuring 4",
    image: "https://images.unsplash.com/photo-1603373814110-a67a9e26a355?w=400&h=600&fit=crop"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('playing');

  const movies = activeTab === 'playing' ? nowPlayingMovies : comingSoonMovies;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">🎬 Cinema Hub</h1>
          <p className="text-gray-600 text-lg">Discover the latest movies</p>
        </div>

        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setActiveTab('playing')}
            className={`px-8 py-3 rounded-lg transition-all ${
              activeTab === 'playing'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Now Playing
          </button>
          <button
            onClick={() => setActiveTab('coming')}
            className={`px-8 py-3 rounded-lg transition-all ${
              activeTab === 'coming'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Coming Soon
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl mb-2">{movie.name}</h3>
                <p className="text-sm text-gray-600 mb-2">🎭 {movie.type}</p>
                <p className="text-sm text-gray-700 mb-3">Director: {movie.director}</p>
                <p className="text-gray-600 text-sm">{movie.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="mb-2">🔌 API Integration</h3>
          <p className="text-sm mb-2">Replace mock data with API calls to:</p>
          <p className="text-sm">• https://api.collectapi.com/watching/moviesPlaying</p>
          <p className="text-sm">• https://api.collectapi.com/watching/moviesComing</p>
          <p className="text-sm mt-2">Add header: authorization: apikey YOUR_TOKEN</p>
        </div>
      </div>
    </div>
  );
}