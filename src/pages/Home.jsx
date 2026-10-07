import React, { useState, useCallback, useEffect } from "react";
import Navbar from "@/components/fermor/Navbar";
import Hero from "@/components/fermor/Hero";
import Stats from "@/components/fermor/Stats";
import CalculatorCards from "@/components/fermor/CalculatorCards";
import DarkCta from "@/components/fermor/DarkCta";
import Integrations from "@/components/fermor/Integrations";
import FeatureCarousel from "@/components/fermor/FeatureCarousel";
import ProductExplainer from "@/components/fermor/ProductExplainer";
import Audience from "@/components/fermor/Audience";
import AskFermor from "@/components/fermor/AskFermor";
import Footer from "@/components/fermor/Footer";
import StickyMobileCta from "@/components/fermor/StickyMobileCta";
import { ASK_FERMOR } from "@/lib/fermor/askFermorContent";

export default function Home() {
  const [externalTopic, setExternalTopic] = useState(null);
  const [externalAnswerId, setExternalAnswerId] = useState(null);

  const handleSelectAskFermor = useCallback((topic) => {
    setExternalTopic(topic);
  }, []);

  const consumeExternalTopic = useCallback(() => {
    setExternalTopic(null);
    setExternalAnswerId(null);
  }, []);

  // The reads section dispatches a custom event carrying an answer id.
  useEffect(() => {
    function onOpenAnswer(e) {
      const found = ASK_FERMOR.find((a) => a.id === e.detail);
      if (found) {
        setExternalTopic(found.topic);
        setExternalAnswerId(found.id);
      }
    }
    window.addEventListener("fermor:open-answer", onOpenAnswer);
    return () => window.removeEventListener("fermor:open-answer", onOpenAnswer);
  }, []);

  return (
    <div className="fm-shell min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <CalculatorCards onSelectAskFermor={handleSelectAskFermor} />
        <DarkCta />
        <Integrations />
        <FeatureCarousel />
        <ProductExplainer />
        <Audience />
        <AskFermor
          externalTopic={externalTopic}
          externalAnswerId={externalAnswerId}
          onConsumeExternalTopic={consumeExternalTopic}
        />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}