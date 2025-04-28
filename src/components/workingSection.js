import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

const WorkingSection = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-b from-white to-violet-50"
    >
      <div className="px-10 max-sm:px-5">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple to Use, Powerful Results
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-[700px] mx-auto">
            Our app is designed to be intuitive and easy to use, while providing
            powerful features.
          </p>
        </div>
        <Tabs defaultValue="mobile" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#F4F4F5] h-12">
            <TabsTrigger
              value="mobile"
              className="data-[state=active]:bg-white cursor-pointer"
            >
              Mobile App
            </TabsTrigger>
            <TabsTrigger
              value="desktop"
              className="data-[state=active]:bg-white cursor-pointer"
            >
              Desktop
            </TabsTrigger>
            <TabsTrigger
              value="web"
              className="data-[state=active]:bg-white cursor-pointer"
            >
              Web Version
            </TabsTrigger>
          </TabsList>
          {["mobile", "desktop", "web"].map((platform) => (
            <TabsContent key={platform} value={platform} className="mt-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-8">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex gap-4">
                        <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600 font-bold">
                          {step}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">
                            {platform === "mobile"
                              ? `Mobile Step ${step}`
                              : platform === "desktop"
                              ? `Desktop Step ${step}`
                              : `Web Step ${step}`}
                          </h3>
                          <p className="text-muted-foreground">
                            {`Simple description of how to use the ${platform} version of the app. This step explains a key feature.`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative rounded-xl border bg-background p-2 shadow-xl">
                    <Image
                      src={
                        platform === "mobile"
                          ? "/app-screen.png"
                          : "/desktop.png"
                      }
                      width={400}
                      height={300}
                      alt={`${platform} screenshot`}
                      className="rounded-lg w-full"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default WorkingSection;
