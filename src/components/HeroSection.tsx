
import { Flower, Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-16 px-6 overflow-hidden">
      {/* Decorative flowers */}
      <div className="absolute top-10 left-10 text-green-300 opacity-60">
        <Flower size={40} />
      </div>
      <div className="absolute top-20 right-16 text-yellow-300 opacity-50">
        <Flower size={32} />
      </div>
      <div className="absolute bottom-10 left-20 text-green-200 opacity-40">
        <Flower size={28} />
      </div>
      <div className="absolute bottom-16 right-10 text-yellow-200 opacity-60">
        <Flower size={36} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Heart className="text-green-500 animate-pulse" size={60} />
            <Sparkles className="absolute -top-2 -right-2 text-yellow-400 animate-bounce" size={24} />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6 leading-tight">
          Your Body is
          <span className="text-yellow-600 block">Healing Beautifully</span>
        </h1>
        
        <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Every moment, your amazing body is working hard to heal and restore itself. 
          Like flowers blooming in spring, your recovery is a natural and beautiful process.
        </p>
        
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-200">
          <Flower className="text-green-500 mr-2" size={20} />
          <span className="text-green-800 font-medium">Trust the process • You're getting stronger</span>
          <Flower className="text-yellow-500 ml-2" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
