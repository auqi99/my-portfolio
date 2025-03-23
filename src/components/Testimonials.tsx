import { FaStar } from "react-icons/fa6";
import ThreeDCardDemo from "./3d-card";

const data = [
  {
    name: "Hansen",
    title: "FrontEnd Developer",
    description: "Lanciaoo a",
    thumbnail: "/hansen.jpeg",
    icon: (
      <div className="flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
    ),
  },
  {
    name: "Kak Gem",
    title: "Designer",
    description: "Faham!!",
    thumbnail: "/gem.jpeg",
    icon: (
      <div className="flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
    ),
  },
  {
    name: "Agus",
    title: "UI/UX Designer",
    description: "jhek menyala wii",
    thumbnail: "/bagus.jpeg",
    icon: (
      <div className="flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
    ),
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-r from-black via-gray-900 to-black py-12 text-white"
    >
      <div className="container mx-auto py-8 text-center">
        <p className="text-2xl font-semibold"> Voices of Trust</p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {data.map((testimonials, index) => {
            return (
              <ThreeDCardDemo
                key={index}
                name={testimonials.name}
                title={testimonials.title}
                description={testimonials.description}
                thumbnail={testimonials.thumbnail}
                icon={testimonials.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
