import { Star } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 px-10 max-sm:px-5">
      <div className="">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Loved by Thousands
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-[700px] mx-auto">
            See what our users have to say about their experience with our app.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Alex Johnson",
              role: "Product Manager",
              content:
                "This app has completely transformed how I organize my day. The interface is intuitive and the features are exactly what I needed.",
              rating: 5,
            },
            {
              name: "Sarah Williams",
              role: "Freelance Designer",
              content:
                "As a designer, I appreciate the attention to detail in this app. It's not just functional, it's beautiful to use every day.",
              rating: 5,
            },
            {
              name: "Michael Chen",
              role: "Student",
              content:
                "The productivity features have helped me stay on top of my coursework. I especially love the cross-device sync.",
              rating: 4,
            },
            {
              name: "Emily Rodriguez",
              role: "Marketing Director",
              content:
                "My team has been using this app for our projects, and it's made collaboration so much easier. Highly recommend!",
              rating: 5,
            },
            {
              name: "David Kim",
              role: "Software Engineer",
              content:
                "The API integration options are impressive. I've been able to connect all my tools and streamline my workflow.",
              rating: 5,
            },
            {
              name: "Lisa Thompson",
              role: "Small Business Owner",
              content:
                "This app has helped me manage my business more efficiently. The customer support is also excellent.",
              rating: 4,
            },
          ].map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  {Array(5 - testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-muted-foreground" />
                    ))}
                </div>
                <p className="mb-4 italic">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                    <span className="text-violet-700 font-medium">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
