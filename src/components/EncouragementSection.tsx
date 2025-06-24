
import { Heart, Sparkles, Flower } from "lucide-react";

const EncouragementSection = () => {
  const encouragements = [
    "Your body knows exactly how to heal itself",
    "Every day brings you closer to complete recovery",
    "You are stronger than you know",
    "Healing is happening, even when you can't see it",
    "Your patience with yourself is a form of self-love",
    "Trust in your body's incredible ability to restore itself"
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-green-100 via-yellow-100 to-green-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center mb-8">
          <Flower className="text-green-500 mr-3" size={40} />
          <Heart className="text-yellow-500 animate-pulse" size={48} />
          <Flower className="text-green-500 ml-3" size={40} />
        </div>
        
        <h2 className="text-4xl font-bold text-green-800 mb-8">
          Gentle Reminders for Your Journey
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {encouragements.map((message, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-green-200 group hover:border-yellow-300"
            >
              <div className="flex items-center justify-center mb-3">
                <Sparkles className="text-yellow-500 group-hover:animate-spin" size={20} />
              </div>
              <p className="text-green-800 font-medium text-lg italic">"{message}"</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Remember</h3>
          <p className="text-xl leading-relaxed">
            Healing is not linear, and that's perfectly okay. Some days will feel better than others, 
            and both are part of your beautiful journey back to wellness. You've got this! 🌸
          </p>
        </div>
      </div>
    </section>
  );
};

export default EncouragementSection;
