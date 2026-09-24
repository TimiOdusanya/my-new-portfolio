"use client";

import { SignalThread } from "@/components/experience/chrome/SignalThread";
import { CapabilityStrip } from "@/components/experience/home/CapabilityStrip";
import { CareerSpine } from "@/components/experience/home/CareerSpine";
import { ClimbSystem } from "@/components/experience/home/ClimbSystem";
import { ContactClose } from "@/components/experience/home/ContactClose";
import { HeroStage } from "@/components/experience/home/HeroStage";
import { LoubbyScale } from "@/components/experience/home/LoubbyScale";
import { ProofField } from "@/components/experience/home/ProofField";
import { VoyageChapter } from "@/components/experience/home/VoyageChapter";
import { WorkGate } from "@/components/experience/home/WorkGate";

export function HomeExperience() {
  return (
    <div className="relative">
      <SignalThread />
      <HeroStage />
      <CapabilityStrip />
      <WorkGate />
      <LoubbyScale />
      <ClimbSystem />
      <VoyageChapter />
      <CareerSpine />
      <ProofField />
      <ContactClose />
    </div>
  );
}
