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
    <section id="faq" className="py-5 px-10 max-sm:px-5">
      <div className="">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">
            FAQ
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
        </h2> {/*
          <p className="mt-4 text-muted-foreground text-lg max-w-[700px] mx-auto">
            Find answers to common questions about our app.
            </p> */}
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "Android is warning harm file?",
                answer:
                  "Its default from Android. So No worries U can download and install Securely",
              },
              {
                question: "Is my data secure?",
                answer:
                  "Yes, we take security seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices to protect your information.",
              },
              {
                question: "Can I use same logins on multiple devices ?",
                answer:
                "Yes! Go with it and enjoy"
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
