import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 px-10 bg-violet-600 text-white">
      <div className="">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ready to Transform Your Experience?
            </h2>
            <p className="text-violet-100 text-lg max-w-[500px]">
              Join thousands of satisfied users and download our app today.
              Start your 14-day free trial now.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-violet-600 cursor-pointer hover:bg-violet-100"
            >
              <Download className="mr-2 h-4 w-4" /> Download Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white cursor-pointer hover:bg-violet-700"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
