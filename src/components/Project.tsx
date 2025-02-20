const Projects = () => {
  return (
    <div id="projects" className="bg-slate-950 text-slate-300 h-auto p-20">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Let's view my projects
      </h2>

      <div className="space-y-4">
        {/* Baris pertama (3 card) */}
        <div className="grid grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="group relative block">
            <div className="relative h-[200px] sm:h-[200px] max-w-xs mx-auto">
              <img
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 rounded-lg"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-end pl-8 mb-0">
              <h3 className="text-lg font-medium text-white">
                Skinny Jeans Blue
              </h3>
              <p className="mt-1 text-xs text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos sequi dicta impedit aperiam ipsum!
              </p>
              <a
                href="#"
                className="mt-2 inline-block bg-black px-4 py-2 text-xs font-medium tracking-wide text-white"
              >
                Click here
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative block">
            <div className="relative h-[200px] sm:h-[200px] max-w-xs mx-auto">
              <img
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 rounded-lg"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-end pl-8 mb-0">
              <h3 className="text-lg font-medium text-white">
                Skinny Jeans Blue
              </h3>
              <p className="mt-1 text-xs text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos sequi dicta impedit aperiam ipsum!
              </p>
              <a
                href="#"
                className="mt-2 inline-block bg-black px-4 py-2 text-xs font-medium tracking-wide text-white"
              >
                Click here
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative block">
            <div className="relative h-[200px] sm:h-[200px] max-w-xs mx-auto">
              <img
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 rounded-lg"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-end pl-8 mb-0">
              <h3 className="text-lg font-medium text-white">
                Skinny Jeans Blue
              </h3>
              <p className="mt-1 text-xs text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos sequi dicta impedit aperiam ipsum!
              </p>
              <a
                href="#"
                className="mt-2 inline-block bg-black px-4 py-2 text-xs font-medium tracking-wide text-white"
              >
                Click here
              </a>
            </div>
          </div>
        </div>

        {/* Baris kedua (2 card) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Card 4 */}
          <div className="group relative block">
            <div className="relative h-[200px] sm:h-[250px] max-w-xs mx-auto">
              <img
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 rounded-lg"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-end pl-32">
              <h3 className="text-lg font-medium text-white">
                Skinny Jeans Blue
              </h3>
              <p className="mt-1 text-xs text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Dignissimos sequi dicta impedit aperiam ipsum!
              </p>
              <a
                href="#"
                className="mt-2 inline-block bg-black px-4 py-2 text-xs font-medium tracking-wide text-white"
              >
                Click here
              </a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="group relative block">
            <div className="relative h-[200px] sm:h-[250px] max-w-xs mx-auto">
              <img
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 rounded-lg"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-end pl-32">
              <h3 className="text-lg font-medium text-white">
                Skinny Jeans Blue
              </h3>
              <p className="mt-1 text-xs text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Dignissimos sequi dicta impedit aperiam ipsum!
              </p>
              <a
                href="#"
                className="mt-2 inline-block bg-black px-4 py-2 text-xs font-medium tracking-wide text-white"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
