import React from 'react';
import { UpsellHeader } from './components/UpsellHeader';
import { PatternBreak } from './components/PatternBreak';
import { ProductPresentation } from './components/ProductPresentation';
import { ValueStack } from './components/ValueStack';
import { VideoSection } from './components/VideoSection';
import { ScarcitySection } from './components/ScarcitySection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { CallToAction } from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen">
      <UpsellHeader />
      <PatternBreak />
      <ProductPresentation />
      <ValueStack />
      <VideoSection />
      <ScarcitySection />
      <GuaranteeSection />
      <CallToAction />
    </div>
  );
}

export default App;