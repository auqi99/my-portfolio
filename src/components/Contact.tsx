const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-screen items-center justify-center bg-blue-950"
    >
      <div className="h-[520px] w-[500px] rounded-lg bg-black p-7 shadow-lg mt-16">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-300">
          Hi !!!
        </h1>
        <p className="mb-4 text-center text-gray-300">
          Ready to start something great? Let's make it happen!
        </p>
        <div className="space-y-4">
          <div></div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your message
            </label>
            <textarea
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              placeholder="Message"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
