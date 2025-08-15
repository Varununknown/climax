import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

const WorkingSection = () => {
  return (
    <section
      id="how-it-works"
      className="py-5 bg-gradient-to-b from-white to-violet-50"
    >
      <div className="px-10 max-sm:px-5">
        <div className="text-center mb-1">
          <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">
            Across Platforms
          </Badge>
        </div>  {/*
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple to Use, Powerful Results
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-[700px] mx-auto">
            Our app is designed to be intuitive and easy to use, while providing
            powerful features.
          </p> */}
        <Tabs defaultValue="mobile" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#F4F4F5] h-12">
            <TabsTrigger
              value="mobile"
              className="data-[state=active]:bg-white cursor-pointer"
            >
              Mobile App
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
                    {[1].map((step) => (
                      <div key={step} className="flex gap-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">
                            Android Users:
                          </h3>
                          <p className="text-muted-foreground">
                          Click Download Anyway - Since displaying "harm file" is default on Android  so just install.`
                          </p>
                          <br></br>
                          <h3 className="text-xl font-bold mb-2">
                            IOS Users:
                          </h3>
                          <p className="text-muted-foreground">
                            Since ios blocks all downloads from unknown source like browser or websites other than Appstore, we kindly request to use oue WEB Version.
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
                          ? "/img2.jpg"
                          : "/img4.jpg"
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
