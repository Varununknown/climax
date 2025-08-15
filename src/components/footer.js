import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Smartphone } from "lucide-react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const socials = [
  { name: "Twitter", icon: Twitter, href: "https://www.instagram.com/climax.ott?igsh=d3ExeThiZDJweXBh" },
  { name: "Facebook", icon: Facebook, href: "https://www.instagram.com/climax.ott?igsh=d3ExeThiZDJweXBh" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/climax.ott?igsh=d3ExeThiZDJweXBh" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.instagram.com/climax.ott?igsh=d3ExeThiZDJweXBh" },
];
const Footer = () => {
  return (
    <footer className="border-t py-5 md:py-10 px-10">
      <div className="">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="h-6 w-6 text-violet-600" />
              <span className="text-xl font-bold text-neutral-600">
                Cli<span className="text-violet-600">max</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
               Simplify your OTT routine with our intuitive app.
            </p>
            <div className="flex gap-4">
              {socials.map(({ name, icon: Icon, href }) => (
                <Link key={name} href={href} aria-label={name}>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-muted-foreground hover:bg-violet-600 hover:text-white transition cursor-pointer"
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Location: </h3>
             <p>Bengaluru, IN</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact: </h3>
            <p>Connect through instagram</p>
          </div>
        
        </div>
        <div className="mt-6 pt-2 border-t text-center text-muted-foreground text-sm">
          <h1 className=" font-bold" href="https://varununknown.github.io/ubity" >Built with Ubity</h1>
          <p>&copy; {new Date().getFullYear()} Climax. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
