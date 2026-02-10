import React from "react";

export default function WhoWeAre() {
  return (
    <div className="md:px-8 px-6 md:py-6 py-4 grid lg:grid-cols-2 items-center gap-x-12 gap-y-4">
      <header className="space-y-2.5 mb-6">
        <h6
          className="bg-main w-fit text-white rounded-full px-4 py-1.5 font-light md:text-sm text-xs mb-1"
          style={{
            backgroundImage:
              "linear-gradient(to top, #5f259f 0%, #9258d2 100%)",
          }}
        >
          Our backstory <span className="ml-1.5">📖</span>
        </h6>
        <h1 className="md:text-3xl text-2xl font-medium mb-1">
          How the club was founded
        </h1>
        <h4 className="italic font-medium tracking-wide text-[hsl(44,100%,48%)] md:text-base text-sm">
          Founded on: 10-27-2025
        </h4>
        <p className="text-neutral-700 mb-6 md:text-base text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ad quas
          assumenda laudantium exercitationem sint nemo cumque quasi et
          doloremque asperiores quisquam repudiandae, accusantium amet ex,
          dolorem suscipit esse nulla commodi voluptatibus maiores? Unde,
          distinctio asperiores.
        </p>
        <p className="text-neutral-700 md:text-base text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam
          quibusdam laborum maxime assumenda, adipisci quasi, cum voluptates
          accusantium tempora rem labore itaque sunt est harum officia in alias
          porro. Cumque eius perspiciatis, nesciunt deleniti blanditiis at
          deserunt obcaecati? Eius vero quaerat tempore veritatis animi, earum
          ipsam commodi consequatur distinctio quam. Ratione magni voluptas
          laudantium consequatur eos excepturi omnis, blanditiis non nostrum
          eveniet ad.
        </p>
      </header>
      <aside>
        <img
          src="/team.jpg"
          alt="Our team"
          className="w-full h-full max-w-lg lg:ml-auto lg:mr-0 mx-auto saturate-0 object-cover rounded-2xl"
        />
      </aside>
    </div>
  );
}
