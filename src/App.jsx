import React, { useState, useEffect } from 'react';
import logoCio from './assets/logo-cio.png';
import {
  Play,
  X,
  Volume2,
  Info,
  ArrowRight,
  Heart,
  Globe,
  ChevronLeft,
  MessageCircle,
  QrCode,
  Activity,
  CheckCircle2
} from 'lucide-react';

const VIDEO_DATA = [
  {
    id: "uvGZKDIQFwM",
    title: "Le succès et la félicité ... dans la prière",
    description: "Découvrez comment la prière est la clé du succès et de la félicité véritable.",
    category: "Prière",
    isShort: false
  },
  {
    id: "VSGr54V8zNk",
    title: "Lumière du Cœur",
    description: "Un court instant de spiritualité pour illuminer votre journée.",
    category: "Sagesse",
    isShort: true
  },
  {
    id: "-qjukEBSSu8",
    title: "Miracles Scientifiques",
    description: "Le Coran comme source de tranquillité dans un monde mouvementé.",
    category: "Paix",
    isShort: true
  },
  {
    id: "234zwAUdp4U",
    title: "L'Éveil Spirituel",
    description: "Une invitation à écouter avec le cœur et à ressentir la profondeur des mots.",
    category: "Spiritualité",
    isShort: true
  },
  {
    id: "JlPIopewp1E",
    title: "Le Mieux Répondant...pour celui qui l'invoque",
    description: "Allah est le Mieux Répondant à l'invocation de celui qui L'appelle avec sincérité.",
    category: "Invocation",
    isShort: true
  },
  {
    id: "qG6nEgkXi0Q",
    title: "Le jour et la nuit: des bénédictions divines",
    description: "Réflexion sur l'alternance du jour et de la nuit comme signes et bénédictions du Créateur.",
    category: "Réflexion",
    isShort: false
  },
  {
    id: "N9gwaQ6vc2g",
    title: "Jesus et Mary dans l'islam",
    description: "Une récitation apaisante qui invite à la réflexion sur la création et la paix intérieure.",
    category: "Méditation",
    isShort: false
  },
  {
    id: "WGO7EeJReH0",
    title: "L'Espoir Infini",
    description: "Découvrez des versets rappelant la miséricorde et le soutien constant du Créateur.",
    category: "Espoir",
    isShort: false
  }
];

const LogoCIO = ({ className = "h-12 w-auto" }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src={logoCio}
      alt="Logo Centre Islamique de l'Outaouais"
      className="h-full object-contain drop-shadow-sm"
    />
  </div>
);

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg',
    outline: 'border-2 border-emerald-700 text-emerald-800 hover:bg-emerald-50',
    ghost: 'text-emerald-700 hover:bg-emerald-50'
  };

  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const VideoCard = ({ video, onSelect }) => {
  const thumbUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <div
      onClick={() => onSelect(video)}
      className="group relative bg-white rounded-3xl overflow-hidden border border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={thumbUrl}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full text-emerald-800 shadow-xl">
            <Play fill="currentColor" size={32} />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
            {video.category}
          </span>
          {video.isShort && <span className="text-[10px] font-bold text-amber-600">FORMAT COURT</span>}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
          {video.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
};

export default function App() {
  const [step, setStep] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleStart = () => setStep('library');
  const handleBack = () => {
    if (step === 'player') setStep('library');
    else setStep('home');
  };

  const selectVideo = (video) => {
    setSelectedVideo(video);
    setStep('player');
  };

  if (step === 'home') {
    return (
      <div className={`min-h-screen flex flex-col bg-slate-50 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-emerald-950/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover scale-105"
            alt="Ambiance spirituelle"
          />
        </div>

        <header className="relative z-20 p-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <LogoCIO className="h-16 md:h-20" />
            <div className="h-10 w-px bg-white/20 hidden sm:block"></div>
            <span className="text-white font-medium tracking-widest text-xs hidden sm:block uppercase">
              Journée Portes Ouvertes <br />
              <span className="opacity-60 text-[10px]">Gatineau, 2026</span>
            </span>
          </div>
          <div className="flex gap-4">
            <button className="text-white/80 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/10">
              <Globe size={20} />
            </button>
            <button className="text-white/80 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/10">
              <QrCode size={20} />
            </button>
          </div>
        </header>

        <main className="relative z-20 flex-grow flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
          <div>
            <span className="inline-block py-1 px-4 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-100 rounded-full text-xs font-bold tracking-[0.2em] mb-6 uppercase">
              Stand d'écoute du Coran
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
              Découvrez la Beauté <br />
              <span className="text-emerald-400 font-serif italic">du Coran</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-50/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Plongez dans une expérience immersive unique. Laissez-vous porter par la mélodie des versets et découvrez un message de paix et de sagesse.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleStart} className="text-lg px-10 py-5">
                Commencer l'écoute <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white/70 text-sm">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-white/5 rounded-full border border-white/10"><Volume2 size={24} /></div>
              <span className="font-medium">Écoute au casque</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-white/5 rounded-full border border-white/10"><MessageCircle size={24} /></div>
              <span className="font-medium">Échanges & Questions</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-white/5 rounded-full border border-white/10"><Heart size={24} /></div>
              <span className="font-medium">Sérénité Partagée</span>
            </div>
          </div>
        </main>

        <footer className="relative z-20 p-8 text-center text-white/40 text-[10px] uppercase tracking-widest">
          © 2026 Centre Islamique de l'Outaouais
        </footer>
      </div>
    );
  }

  if (step === 'library') {
    return (
      <div className="min-h-screen bg-slate-50">
        <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-30 border-b border-emerald-100 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button onClick={handleBack} className="flex items-center gap-2 text-emerald-800 font-bold hover:text-emerald-600 transition-colors group">
              <div className="p-2 bg-emerald-50 rounded-full group-hover:bg-emerald-100 transition-colors">
                <ChevronLeft size={20} />
              </div>
              <span className="hidden sm:inline">Retour</span>
            </button>

            <LogoCIO className="h-10 md:h-12" />

            <div className="flex items-center gap-2 text-emerald-700">
              <Activity size={20} />
              <h2 className="font-bold text-slate-800 text-xs md:text-sm uppercase tracking-wider hidden sm:block">Bibliothèque</h2>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto p-8 pt-12">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Choisissez un Instant de Paix</h2>
            <p className="text-slate-500 leading-relaxed">
              Sélectionnez une thématique qui résonne avec vous aujourd'hui. Chaque vidéo a été choisie pour sa beauté et sa clarté.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEO_DATA.map((video) => (
              <VideoCard key={video.id} video={video} onSelect={selectVideo} />
            ))}
          </div>

          <div className="mt-20 bg-emerald-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/30 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="bg-amber-400 text-emerald-950 px-4 py-1 rounded-full text-xs font-black w-fit mb-6 uppercase tracking-widest mx-auto md:mx-0">Le Concept</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Comment ça fonctionne ?</h3>
                <ul className="space-y-4 inline-block text-left">
                  {[
                    "Mettez le casque pour une immersion totale",
                    "Choisissez une vidéo parmi notre sélection",
                    "Laissez-vous apaiser par la récitation",
                    "Discutez de vos ressentis avec notre équipe"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-emerald-500/20 p-1 rounded-full text-emerald-400">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-emerald-50/80">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white p-6 rounded-3xl shadow-inner flex flex-col items-center">
                  <div className="mb-4">
                    <img
                       src={logoCio}
                       className="h-10 grayscale opacity-40"
                       alt="CIO Logo"
                    />
                  </div>
                  <div className="bg-slate-50 rounded-2xl w-40 h-40 flex items-center justify-center border-2 border-dashed border-slate-200">
                    <QrCode size={80} className="text-emerald-800/20" />
                  </div>
                  <p className="text-emerald-950 text-center font-bold text-[10px] mt-4 uppercase tracking-wider">
                    Scannez pour emporter <br /> l'expérience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (step === 'player' && selectedVideo) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <header className="p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent absolute top-0 w-full z-50">
          <button
            onClick={handleBack}
            className="text-white/60 hover:text-white flex items-center gap-2 font-medium transition-colors bg-white/5 px-4 py-2 rounded-full"
          >
            <X size={20} /> Fermer
          </button>
          <div className="text-center">
            <LogoCIO className="h-8 md:h-10 mx-auto brightness-200" />
          </div>
          <button className="text-white/60 hover:text-white transition-colors bg-white/5 p-2 rounded-full">
            <Info size={20} />
          </button>
        </header>

        <div className="flex-grow flex items-center justify-center p-4">
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0&modestbranding=1`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <footer className="p-8 bg-emerald-950 text-white border-t border-emerald-900/50">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-[10px] mb-2">Message important</h4>
              <p className="text-lg md:text-xl font-medium leading-relaxed italic">
                "Après l'écoute, n'hésitez pas à poser vos questions à notre équipe. Nous sommes là pour échanger."
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <div className="flex items-center gap-2 bg-emerald-900/50 px-6 py-3 rounded-full border border-emerald-800">
                <Heart className="text-rose-400 fill-rose-400" size={20} />
                <span className="font-bold text-sm tracking-wide">Partagez la Paix</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return null;
}
