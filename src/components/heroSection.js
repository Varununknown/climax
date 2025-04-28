import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-50 to-white py-20 md:py-10 px-5">
      <div className=" relative z-10">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col items-center text-center gap-8">
            <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-100 px-3 py-1 text-sm">
              New Version 2.0 Available
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The Smart App for <span className="text-violet-600">Modern</span>{" "}
              Life
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-[600px] mx-auto lg:mx-0">
              Simplify your daily routine with our intuitive app. Designed to
              boost productivity and enhance your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white cursor-pointer"
              >
                <Download className="mr-2 h-4 w-4" /> Download Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={"hover:bg-gray-100 cursor-pointer"}
              >
                Learn More <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-violet-200 flex items-center justify-center text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium text-neutral-800">4.9/5</span> from
                over 1,000+ reviews
              </div>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 ">
            <div className="relative z-10  ">
              <Image
                src="/app-screen.png"
                width={400}
                height={700}
                alt="App screenshot"
                className=""
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-[350px] w-[350px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-violet-500 to-fuchsia-500 opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-20 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
