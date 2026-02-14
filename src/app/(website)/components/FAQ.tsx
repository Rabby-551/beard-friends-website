"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
   const faqs = [
    {
      id: "item-1",
      question: "What is behind the BEARDFRIENDS community?",
      answer:
        "Some time ago, we came up with the idea of creating a bearded community and organising monthly online beard competitions. We at BEARDFRIENDS have been loyal beard wearers and beard lovers for many years and would like to continue to strengthen this trend. Now we want to combine everything to do with beards and beard care in one app and offer useful features and functions to our community.",
    },
    {
      id: "item-2",
      question: "What is a beard competition?",
      answer:
        "A beard competition is a contest in which beard wearers present and have their beards judged. Participants compete in different categories to show off their beard style, grooming and creativity. The best participants are honoured and can win prizes.",
    },
    {
      id: "item-3",
      question: "What are digital stamp cards?",
      answer:
        "Digital stamp cards are a way to collect rewards for your barbershop visits while doing something good for the environment. Every time you visit your favourite barber, they will give you a digital stamp. When you have collected enough stamps, you can look forward to a free haircut, for example. All barbershops and hairdressing salons define the promotions themselves and can therefore vary greatly.",
    },
    {
      id: "item-4",
      question: "What does Beardcoin mean?",
      answer:
        "A Beardcoin is a digital stamp. We call it that because we think it's cool. So it has nothing to do with cryptocurrency and is intended to be used as a gag within our bearded community.",
    },
    {
      id: "item-5",
      question: "What is a free stamp?",
      answer:
        "You will receive a free stamp, we call it Beardcoin, from our community as a thank you for your registration. You can assign your first Beardcoin to any barbershop of your choice. This will open your first digital stamp card and you can start collecting stamps.",
    },
    {
      id: "item-6",
      question: "Can I transfer my stamp card or my collected stamps to another person?",
      answer:
        "No, stamp cards and the stamps collected on them are generally transferable and can only be redeemed by the original holder. They are intended to reward the loyalty and active participation of each individual participant. The stamps collected cannot be exchanged for money or other valuables.",
    },
    {
      id: "item-7",
      question: "How can I follow this community on Facebook or Instagram?",
      answer:
         "To follow our community on Facebook, visit our Facebook page at BEARDFRIENDS.COM and click on \"Like\" or \"Follow\". On Instagram you can find us at @BEARDFRIENDS_official. Press \"Follow\" to stay up to date. This is a great way for you to support our community. That makes us stronger! Thank you!",
    },
    {
      id: "item-8",
      question: "Can I delete my account?",
      answer:
        "Yes, you can delete your account at any time in your personal profile. Please note that all your data will be permanently deleted! If you take part in our beard competition, all previous votes will be lost. If you already have one or more stamp cards with stamps on them, these will also be deleted. There is no entitlement to the recovery of deleted data from our community.",
    },
  ];

  return (
    <div className="bg-[#1a1a1a] py-16 md:px-4">
      <div className="container mx-auto ">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          FAQs
        </h2>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-[#2a2a2a] border-none rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-[#333333] transition-colors text-left">
                <span className="font-medium text-base">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-base  text-gray-300 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;