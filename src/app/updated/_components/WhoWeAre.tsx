import { Highlighter } from "@/components/ui/highlighter";
import React from "react";

export default function WhoWeAre() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4 space-y-2.5">
      <header className="space-y-2.5 mb-6">
        <h2 className="md:text-3xl text-2xl font-medium">
          <Highlighter action="underline" color="#FFC72A" iterations={3}>
            Who we are
          </Highlighter>
        </h2>
        <h3 className="text-neutral-700">
          Learn about how the club was originally founded and our journey so
          far.
        </h3>
      </header>
      <section className="space-y-4 p-6 bg-neutral-100 rounded-2xl">
        <aside className="text-lg tracking-wider leading-8 font-light md:max-w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          cumque ex officiis libero amet vel quas ut magni consequuntur omnis
          quod nobis placeat reiciendis repudiandae incidunt magnam ullam
          exercitationem corrupti doloremque suscipit perspiciatis minima, nam
          sit! Autem repellat, tempora veniam accusantium reiciendis velit quam
          nisi veritatis error necessitatibus?
        </aside>
        <aside className="text-lg tracking-wider leading-8 font-light md:max-w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, totam
          debitis deleniti, pariatur voluptatum minus suscipit omnis eaque,
          mollitia maxime tenetur officiis aperiam blanditiis ipsa ut iure
          impedit aspernatur quaerat vero eos.
        </aside>
      </section>
    </div>
  );
}
