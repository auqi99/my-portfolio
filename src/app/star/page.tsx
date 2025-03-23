import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steps for creating  this project",
  description: "Project Steps Page",
};

const Star = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-6 text-white">
      <div className="w-full max-w-3xl rounded-2xl bg-black p-8 shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-white">
          E-commerce Platform for XYZ Retail
        </h2>
        <p className="mb-6 text-gray-400">
          Technologies: React, Node.js, MongoDB, AWS
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Situation</h3>
            <p className="text-gray-300">
              XYZ Retail wanted to expand into e-commerce to reach a wider
              audience and streamline sales processes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Task</h3>
            <p className="text-gray-300">
              I was responsible for developing a scalable platform with seamless
              inventory and payment integration.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Action</h3>
            <p className="text-gray-300">
              Built a responsive UI with React, created RESTful APIs using
              Node.js and MongoDB, and optimized performance with AWS and CI/CD
              pipelines.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Result</h3>
            <p className="text-gray-300">
              Completed on time, leading to a 35% sales increase in 3 months.
              User feedback praised speed and ease of use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Star;
