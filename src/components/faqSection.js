import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 px-10 max-sm:px-5">
      <div className="">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-[700px] mx-auto">
            Find answers to common questions about our app.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How do I download the app?",
                answer:
                  "Our app is available on iOS and Android. You can download it from the App Store or Google Play Store by searching for 'AppName'.",
              },
              {
                question: "Is my data secure?",
                answer:
                  "Yes, we take security seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices to protect your information.",
              },
              {
                question: "Can I use the app on multiple devices?",
                answer:
                  "Yes, depending on your plan. The Basic plan allows up to 3 devices, while the Pro and Enterprise plans offer unlimited devices with seamless syncing.",
              },
              {
                question: "How do I cancel my subscription?",
                answer:
                  "You can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your plan until the end of your billing period.",
              },
              {
                question: "Do you offer a free trial?",
                answer:
                  "Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "We offer different levels of support based on your plan. Basic includes email support, Pro includes priority support, and Enterprise includes 24/7 dedicated support.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
