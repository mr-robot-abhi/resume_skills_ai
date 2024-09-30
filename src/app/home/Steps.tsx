const STEPS = [
  { title: "Upload a resume pdf", text: "or create a professional or political resume from scratch. Preview design, edit and download the new resume." },
  { title: "Choose your skills based on the job role and industry", text: "Select the level of Expertise." },
  { title: "Participate in our Skills Assessment", text: "Obtain results to see where you stand." },
];

export const Steps = () => {
  return (
    <section className="mx-auto mt-8 rounded-2xl bg-sky-50 bg-dot px-8 pb-12 pt-10 lg:mt-2">
      <h1 className="text-center text-3xl font-bold">Our 3 Main Functionalities:</h1>
      
      {/* Grid layout for equal spacing */}
      <div className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-12">
        {STEPS.map(({ title, text }, idx) => (
          <div className="relative self-start pl-14" key={idx}>
            <dt className="text-lg font-bold">
              <div className="bg-primary absolute left-0 top-1 flex h-10 w-10 select-none items-center justify-center rounded-full p-[3.5px] opacity-80">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  <div className="text-primary -mt-0.5 text-2xl">
                    {idx + 1}
                  </div>
                </div>
              </div>
              {title}
            </dt>
            <dd className="mt-2 text-gray-700">{text}</dd>
          </div>
        ))}
      </div>
    </section>
  );
};
