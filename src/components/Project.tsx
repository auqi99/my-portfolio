import CardProject from "./CardProject";

const data = [
  {
    thumbnail: "/rocket.svg",
    title: "Project 1",
    description: "Dummy Data...",
  },
  {
    thumbnail: "/virtual.svg",
    title: "Project 2",
    description: "Dummy Data...",
  },
  {
    thumbnail: "/collab.svg",
    title: "Project 3",
    description: "Dummy Data...",
  },
];

const Project = () => {
  return (
    <section
      id="project"
      className="bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <p className="py-24 text-center text-2xl font-semibold md:py-20">
        Let's view what I got
      </p>

      <div className="motion-preset-slide-down motion-duration-3000 container mx-auto grid grid-cols-1 md:grid-cols-3">
        {data.map((project, index) => {
          return (
            <CardProject
              key={index}
              thumbnail={project.thumbnail}
              title={project.title}
              description={project.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
