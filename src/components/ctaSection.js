import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-10 px-10 bg-black text-white">
      <div className="">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ready to Transform Your Experience?
            </h2> 
           
          </div> 
          <a href="#">
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
           
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-violet-600 cursor-pointer hover:bg-violet-100"
            >
              <Download className="mr-2 h-4 w-4" /> Download Now
            </Button>
            
          </div></a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
