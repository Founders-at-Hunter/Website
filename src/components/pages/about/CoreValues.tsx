import Heading from "@/components/ui/Heading";
import React from "react";
import { LuHandshake } from "react-icons/lu";
import { IconType } from "react-icons/lib";
import { BsSoundwave } from "react-icons/bs";
import { BiDoorOpen } from "react-icons/bi";
import { AiOutlineSafety } from "react-icons/ai";

const coreValues = [
  {
    value: "Collaboration",
    description:
      "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi  Neque porro quisquam est, qui dolorem ipsum",
    icon: LuHandshake,
  },
  {
    value: "Integrity",
    description:
      "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi  Neque porro quisquam est, qui dolorem ipsum",
    icon: AiOutlineSafety,
  },
  {
    value: "Transparency",
    description:
      "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi  Neque porro quisquam est, qui dolorem ipsum",
    icon: BiDoorOpen,
  },
  {
    value: "Communication",
    description:
      "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi  Neque porro quisquam est, qui dolorem ipsum",
    icon: BsSoundwave,
  },
];

export default function CoreValues() {
  return (
    <section className="flex flex-col gap-2 p-4">
      <Heading
        headerCN="mb-1"
        title="Our core values"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <div className="flex flex-wrap gap-6 justify-center">
        {coreValues.map((coreValue, index) => (
          <CoreValueCard
            key={index}
            Icon={coreValue.icon}
            value={coreValue.value}
            description={coreValue.description}
          />
        ))}
      </div>
    </section>
  );
}

function CoreValueCard({
  Icon,
  value,
  description,
}: {
  Icon: IconType;
  value: string;
  description: string;
}) {
  return (
    <div className="w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] flex flex-col gap-2 items-center justify-center py-12 px-8 bg-white outline outline-main -outline-offset-1 rounded-xl hover:drop-shadow-2xl hover:drop-shadow-black/5 transition-all duration-300">
      <div className="p-4 rounded-2xl bg-main/25 w-fit m-auto">
        <Icon className="text-white text-5xl" />
      </div>
      <h4 className="text-center">{value}</h4>
      <p className="text-sm text-black/60 text-center">{description}</p>
    </div>
  );
}
