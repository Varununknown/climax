import React from "react";
import { Card, CardContent } from "./ui/card";
import { Smartphone } from "lucide-react";
import { Download } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Star } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";

const FeatureSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="px-10 max-sm:px-5">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Everything You Need in One App
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-[700px] mx-auto">
            Our app combines powerful features with an intuitive interface to
            provide the best user experience.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Smart Automation",
              description:
                "Automate repetitive tasks and save time with intelligent workflows.",
              icon: <CheckCircle2 className="h-10 w-10 text-violet-600" />,
            },
            {
              title: "Real-time Sync",
              description:
                "Keep your data synchronized across all your devices in real-time.",
              icon: <Smartphone className="h-10 w-10 text-violet-600" />,
            },
            {
              title: "AI-Powered Insights",
              description:
                "Get personalized recommendations based on your usage patterns.",
              icon: <Star className="h-10 w-10 text-violet-600" />,
            },
            {
              title: "Secure Messaging",
              description:
                "End-to-end encrypted messaging for your privacy and security.",
              icon: <MessageSquare className="h-10 w-10 text-violet-600" />,
            },
            {
              title: "Cloud Storage",
              description:
                "Store and access your files from anywhere with secure cloud storage.",
              icon: <Download className="h-10 w-10 text-violet-600" />,
            },
            {
              title: "Customizable Interface",
              description:
                "Personalize your experience with themes and custom layouts.",
              icon: <Smartphone className="h-10 w-10 text-violet-600" />,
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="border cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-violet-100 p-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
