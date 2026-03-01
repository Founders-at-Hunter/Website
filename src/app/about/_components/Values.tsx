import { GoPeople } from "react-icons/go";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaHandshakeSolid } from "react-icons/lia";
import { MdLightbulbOutline } from "react-icons/md";

export default function Values() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4">
      <header className="mb-6">
        <h6 className="bg-[#FFC72A]/7.5 text-[#FFC72A] brightness-95 outline-1 -outline-offset-1 outline-[#FFC72A]/15  w-fit rounded-full px-4 py-1.5 font-normal md:text-sm text-xs md:mb-4 mb-3 tracking-wide shadow-xs shadow-[#FFC72A]/40">
          Our values
        </h6>
        <h1 className="md:text-3xl text-2xl font-medium text-neutral-700 mb-2">
          What matters to us
        </h1>
        <h3 className="text-neutral-700 md:text-lg text-base">
          Learn about what we as a club value the most.
        </h3>
      </header>
      <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-stretch">
        <div className="rounded-2xl overflow-hidden relative md:p-8 p-6 bg-neutral-100 hover:scale-103 transition-all duration-300 ease-in-out space-y-2.5">
          <div className="bg-white text-red-400 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-3">
            <GoPeople />
          </div>
          {/* <GoPeople className="md:text-7xl text-6xl text-red-400 p-4 rounded-2xl bg-white block" /> */}
          <h5 className="font-medium md:text-2xl text-xl mb-2 text-neutral-700">
            Collaboration
          </h5>
          <p className="text-neutral-500 font-light md:text-base text-sm">
            We believe the best projects happen when diverse talents collide.
            Connect with students across majors to find your cofounder,
            marketing pro, or design partner. At Founders, collaboration is more
            than networking; it is about building something together that none
            of us could ever create alone.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden relative md:p-8 p-6 bg-neutral-100 hover:scale-103 transition-all duration-300 ease-in-out space-y-2.5">
          <div className="bg-white text-amber-400 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-3">
            <LiaHandshakeSolid />
          </div>
          <h5 className="font-medium md:text-2xl text-xl mb-2 text-neutral-700">
            Equity
          </h5>
          <p className="text-neutral-500 font-light md:text-base text-sm">
            Everyone deserves a seat at the table. We make entrepreneurship
            accessible to all Hunter students, regardless of background. Whether
            you are a first-time builder or a seasoned hacker, Founders provides
            the resources, mentorship, and community support to help you succeed
            on your own terms.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden relative md:p-8 p-6 bg-neutral-100 hover:scale-103 transition-all duration-300 ease-in-out space-y-2.5">
          <div className="bg-white text-emerald-400 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-3">
            <IoShieldCheckmarkOutline />
          </div>
          <h5 className="font-medium md:text-2xl text-xl mb-2 text-neutral-700">
            Integrity
          </h5>
          <p className="text-neutral-500 font-light md:text-base text-sm">
            We build with honesty and transparency at our core. From the
            products we create to the relationships we foster, integrity guides
            every decision. We support each other with genuine feedback,
            celebrate wins, and believe that the best startups are built on deep
            trust and ethical innovation.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden relative md:p-8 p-6 bg-neutral-100 hover:scale-103 transition-all duration-300 ease-in-out space-y-2.5">
          <div className="bg-white text-sky-400 w-fit md:text-4xl text-3xl p-3 font-black rounded-lg mb-3">
            <MdLightbulbOutline />
          </div>
          <h5 className="font-medium md:text-2xl text-xl mb-2 text-neutral-700">
            Innovation
          </h5>
          <p className="text-neutral-500 font-light md:text-base text-sm">
            We embrace experimentation and creative problem solving. From
            launching new products to exploring new paths, innovation is about
            challenging the status quo. At Founders, we encourage bold ideas,
            celebrate failures as learning opportunities, and push each other to
            think beyond old boundaries.
          </p>
        </div>
      </section>
    </div>
  );
}
