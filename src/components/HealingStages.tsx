
import { Clock, Flower2, Sparkles, Heart } from "lucide-react";

const HealingStages = () => {
  const stages = [
    {
      phase: "Days 1-3",
      title: "Initial Response",
      description: "Your body immediately springs into action, sending healing cells to the area. Swelling and tenderness are normal signs that healing has begun.",
      icon: <Heart className="text-red-400" size={32} />,
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      phase: "Days 4-14",
      title: "Active Repair",
      description: "New tissue begins to form as your body rebuilds. You might notice the area looking different - this is progress happening!",
      icon: <Sparkles className="text-yellow-500" size={32} />,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      phase: "Days 15+",
      title: "Strengthening",
      description: "Your body fine-tunes the new tissue, making it stronger and more resilient. The healing continues even when you can't see it.",
      icon: <Flower2 className="text-green-500" size={32} />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Clock className="text-green-600 mx-auto mb-4" size={48} />
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Your Healing Journey
          </h2>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Every stage is important and beautiful in its own way
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <div 
              key={index}
              className={`${stage.bgColor} ${stage.borderColor} border-2 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <div className="flex justify-center mb-4">
                {stage.icon}
              </div>
              <div className="bg-white/60 rounded-full px-4 py-2 mb-4 inline-block">
                <span className="text-sm font-semibold text-gray-700">{stage.phase}</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">{stage.title}</h3>
              <p className="text-green-700 leading-relaxed">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealingStages;
