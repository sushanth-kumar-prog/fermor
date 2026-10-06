import React, { useState, useCallback, useEffect } from "react";
import Navbar from "@/components/fermor/Navbar";
import Hero from "@/components/fermor/Hero";
import TrustStrip from "@/components/fermor/TrustStrip";
import CalculatorCards from "@/components/fermor/CalculatorCards";
import EmiCalculator from "@/components/fermor/EmiCalculator";
import ProductExplainer from "@/components/fermor/ProductExplainer";
import AskFermor from "@/components/fermor/AskFermor";
import Audience from "@/components/fermor/Audience";
import Learning from "@/components/fermor/Learning";
import FinalCta from "@/components/fermor/FinalCta";
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

  // Learning teasers dispatch a custom event with an answer id.
  useEffect(() => {
    function onOpenAnswer(e) {
      const id = e.detail;
      const found = ASK_FERMOR.find((a) => a.id === id);
      if (found) {
        setExternalTopic(found.topic);
        setExternalAnswerId(id);
      }
    }
    window.addEventListener("fermor:open-answer", onOpenAnswer);
    return () => window.removeEventListener("fermor:open-answer", onOpenAnswer);
  }, []);

  return (
    <div className="fermor-page min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <CalculatorCards onSelectAskFermor={handleSelectAskFermor} />
        <EmiCalculator />
        <ProductExplainer />
        <AskFermor
          externalTopic={externalTopic}
          externalAnswerId={externalAnswerId}
          onConsumeExternalTopic={consumeExternalTopic}
        />
        <Audience />
        <Learning />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}