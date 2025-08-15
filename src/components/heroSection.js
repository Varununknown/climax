import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-50 to-white py-5 md:py-10 px-6">
      <div className=" relative z-10">
        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col items-center text-center gap-8">
            
             
            <h1 className="text-xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
             I n t r o d u c i n g  . . . &nbsp; <span className="text-violet-900"> C l i m a x</span>
            </h1> {/*
            <p className="text-muted-foreground text-lg md:text-xl max-w-[600px] mx-auto lg:mx-0">
               A Brand new OTT Platform
            </p>*/}
            <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-100 px-3 py-1 text-sm">
              New Version 2.0 Available
            </Badge>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             {/* Android Download Button */}
                <div className="flex flex-col items-center">
                  <Button
                    size="lg"
                    className="w-64 bg-gradient-to-r from-[#3DDC84] to-[#2C9B6A] hover:from-[#2C9B6A] hover:to-[#1F7A4C] text-white font-bold px-9 py-6 rounded-2xl flex items-center justify-center gap-4 shadow-2xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => {
                      // Trigger download
                      const link = document.createElement("a");
                      link.href = "/Climax.apk";
                      link.download = "climax.apk";
                      link.click();

                      // Show inline feedback
                      const messageDiv = document.getElementById("download-message");
                      if (messageDiv) {
                        messageDiv.innerText = "Download started! Check downloads if doesn't appear.";
                        setTimeout(() => {
                          messageDiv.innerText = "";
                        }, 3000);
                      }
                    }}
                  >
                    {/* Optional SVG icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-6 h-6 flex-shrink-0"
                      fill="currentColor"
                    >
                      <path d="M256 0c-48.5 0-88 39.5-88 88v80h-56c-22.1 0-40 17.9-40 40v224c0 22.1 17.9 40 40 40h56v80c0 48.5 39.5 88 88 88s88-39.5 88-88v-80h56c22.1 0 40-17.9 40-40V208c0-22.1-17.9-40-40-40h-56V88c0-48.5-39.5-88-88-88zm0 40c26.5 0 48 21.5 48 48v80H208V88c0-26.5 21.5-48 48-48zm-96 176h192v224H160V216zm96 256c-26.5 0-48-21.5-48-48v-48h96v48c0 26.5-21.5 48-48 48zm-96-288h192v-16H160v16z" />
                    </svg>
                    Download for Android
                  </Button>

                  {/* Inline message */}
                  <div id="download-message" className="mt-2 text-sm text-green-700 font-medium"></div>
                </div>



                {/* iOS Download Button */}
                <a href="https://apps.apple.com/app/your-app-id" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-64 bg-gradient-to-r from-[#1D1D1F] to-[#2C2C2E] hover:from-[#2C2C2E] hover:to-[#3A3A3C] text-white font-bold px-9 py-6 rounded-2xl flex items-center justify-center gap-4 shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-8 h-8 flex-shrink-0"
                      fill="currentColor"
                    >
                      <path d="M349.6 162.5c-9.7-11.7-23.1-18.5-37.5-18.5-15.8 0-33.4 9.2-44.2 9.2-11 0-28.3-8.9-46.7-8.7-24 0-46.2 14.1-58.4 35.7-25 43.4-6.4 107.7 17.9 143 12 17.5 26.2 37.2 45 36.4 17.3-.8 23.8-11.3 44.7-11.3 20.8 0 26.7 11.3 45 10.9 18.5-.3 30.2-17.9 41.8-35.8 13.1-20.2 18.5-39.8 18.7-40.8-.4-.2-35.7-13.6-35.9-53.8-.1-28.5 23.4-42.1 24-42.8zM303 62.3c10.3-12.5 17.3-29.9 15.4-47.3-14.9.6-33 10.1-43.5 22.6-9.6 11.4-18.1 29.8-15.9 47.5 16.9 1.3 34.2-8.5 44-22.8z"/>
                    </svg>
                    Download for iOS
                  </Button>
                </a>


              <a href="https://watchclimax.vercel.app" >
              <Button
                size="lg"
                variant="outline"
                className={"hover:bg-gray-100 cursor-pointer px-9 py-6"}
              >
                Web  <ExternalLink className="ml-2 h-4 w-4" />
              </Button> </a>
            </div>
            
          </div>
          <div className="relative mx-auto lg:mx-0 ">
            <div className="relative z-10  ">
              <Image
                src="/img3.jpg"
                width={400}
                height={700}
                alt="App screenshot"
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-[350px] w-[350px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-20 blur-3xl"></div>
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
      </div>
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-violet-500 to-fuchsia-500 opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-20 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
