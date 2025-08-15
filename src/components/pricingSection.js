import { CheckCircle2 } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-5 px-10 max-sm:px-5 bg-gradient-to-b from-violet-50 to-white"
    >
      <div className="">
        <div className="text-center mb-5">
          <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Transparent Pricing
          </h2> {/*
          <p className="mt-4 text-muted-foreground text-lg max-w-[700px] mx-auto">
            Choose the plan that works best for you. All plans include a 14-day
            free trial.
          </p> */}
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              name: "Free",
              price: "$0",
              description: "Perfect for visiters",
              features: [
                "Truely Free Contents",
                "Trailers of new releases",
                "Popular Video Songs",
                
              ],
              popular: false,
              buttonText: "Default",
            },
            {
              name: "",
              price: "Rs1 - 9",
              description: "Ideal for Regulars",
              features: [
                "Full Content Unlock",
                "Unlimited devices",
                "Unlimited Downloads",
              
              ],
              popular: true,
              buttonText: "Download APP or Use Web and sign in",
            },
            
          ].map((plan, index) => (
            <Card
              key={index}
              className={cn(
                "border-0 shadow-lg relative overflow-hidden",
                plan.popular && "border-violet-600 shadow-violet-100"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              <CardContent className="">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/content</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <Button
                  className={cn(
                    "w-full mb-6 cursor-pointer",
                    plan.popular
                      ? "bg-violet-600 hover:bg-violet-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  )}
                >
                  {plan.buttonText}
                </Button>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
