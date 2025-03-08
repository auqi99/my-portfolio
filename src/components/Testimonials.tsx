import { IoStar } from "react-icons/io5";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex min-h-screen flex-col items-center bg-gradient-to-r from-blue-950 to-purple-950 px-4 pt-16"
    >
      <h2 className="mb-6 animate-bounce text-3xl font-extrabold text-white shadow-lg drop-shadow-lg sm:text-4xl">
        Voices of Trust
      </h2>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="w-full max-w-lg rounded-xl bg-gray-300 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900">Agus</h3>
          <p className="text-sm text-gray-500">Software Engineer</p>
          <div className="flex text-yellow-500">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
          <p className="mt-4 text-gray-700">
            "Fisik bisa dirubah, materi bisa dicari, Auqi web Developer ga datang 2x. 
            Jhek menyala wii bang Auqi nih boss, tamplik dong!!!"
          </p>
        </div>

        <div className="w-full max-w-lg rounded-xl bg-gray-300 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900">Hansen</h3>
          <p className="text-sm text-gray-500">Product Designer</p>
          <div className="flex text-yellow-500">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
          <p className="mt-4 text-gray-700">"Walaweee, Auqi Lanciaoo!"</p>
        </div>

        <div className="w-full max-w-lg rounded-xl bg-gray-300 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900">Kak Gem</h3>
          <p className="text-sm text-gray-500">Product Designer</p>
          <div className="flex text-yellow-500">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
          <p className="mt-4 text-gray-700">
            "Singkat saja, jika kalian bicara tentang Fullstack Developer. cukup cari Auqi. FAHAM!!! 🖐️🖐️🖐️"
          </p>
        </div>
        
        <div className="w-full max-w-lg rounded-xl bg-gray-300 p-6 shadow-lg mb-10 sm:mb-0">
          <h3 className="text-xl font-bold text-gray-900">Lionel Messi</h3>
          <p className="text-sm text-gray-500">Product Designer</p>
          <div className="flex text-yellow-500">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
          <p className="mt-4 text-gray-700">
            "camera wowo, camera wowo!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
