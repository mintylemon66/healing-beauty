
import { Droplets, Moon, Apple, Flower, Sun, Shield } from "lucide-react";

const HealingTips = () => {
  const tips = [
    {
      icon: <Droplets className="text-blue-500" size={32} />,
      title: "Stay Hydrated",
      description: "Water helps transport nutrients to healing tissues. Aim for 8 glasses a day to support your recovery.",
      color: "blue"
    },
    {
      icon: <Moon className="text-purple-500" size={32} />,
      title: "Rest Well",
      description: "Your body does most of its healing during sleep. Aim for 7-9 hours of quality rest each night.",
      color: "purple"
    },
    {
      icon: <Apple className="text-red-500" size={32} />,
      title: "Nourish Your Body",
      description: "Eat colorful fruits and vegetables rich in vitamins and minerals that support healing.",
      color: "red"
    },
    {
      icon: <Sun className="text-yellow-500" size={32} />,
      title: "Gentle Movement",
      description: "Light activity improves circulation and can speed up the healing process when approved by your healthcare provider.",
      color: "yellow"
    },
    {
      icon: <Shield className="text-green-500" size={32} />,
      title: "Protect the Area",
      description: "Keep the healing area clean and protected as directed by your healthcare provider.",
      color: "green"
    },
    {
      icon: <Flower className="text-pink-500" size={32} />,
      title: "Be Patient & Kind",
      description: "Healing takes time. Be gentle with yourself and celebrate small improvements each day.",
      color: "pink"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-yellow-50 via-green-50 to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Flower className="text-green-600 mx-auto mb-4 animate-pulse" size={48} />
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Gentle Ways to Support Your Healing
          </h2>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Small, loving actions that make a big difference in your recovery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                {tip.icon}
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3 text-center">{tip.title}</h3>
              <p className="text-green-700 text-center leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealingTips;
