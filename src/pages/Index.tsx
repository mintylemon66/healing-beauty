
import HeroSection from "@/components/HeroSection";
import HealingStages from "@/components/HealingStages";
import HealingTips from "@/components/HealingTips";
import EncouragementSection from "@/components/EncouragementSection";
import { Flower } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HealingStages />
      <HealingTips />
      <EncouragementSection />
      
      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <Flower className="text-yellow-300 mr-2" size={32} />
            <h3 className="text-2xl font-bold">Your Healing Journey</h3>
            <Flower className="text-yellow-300 ml-2" size={32} />
          </div>
          <p className="text-green-100 mb-6 text-lg">
            Every step forward, no matter how small, is progress worth celebrating.
          </p>
          <div className="border-t border-green-600 pt-6">
            <p className="text-green-300">
              Always consult with your healthcare provider for personalized medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
