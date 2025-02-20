import { IoStar } from "react-icons/io5";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex h-screen flex-col items-center justify-start bg-gradient-to-r from-blue-950 to-purple-950 pt-16"
    >
      <div className="mb-6 animate-bounce text-4xl font-extrabold text-white shadow-lg drop-shadow-lg">
        Voices of Trust
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="max-w-md rounded-xl bg-gray-400 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900">Agus</h3>
          <p className="text-sm text-gray-500">Software Engineer</p>
          <p className="flex">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </p>
          <p className="motion-preset-slide-right mt-4 text-gray-700 motion-duration-2000">
            "Fisik bisa dirubah, materi bisa dicari, Auqi web Developer ga
            datang 2x. jhek menyala wii bang Auqi nih boss, tamplik dong!!!"
          </p>
        </div>

        <div className="max-w-md rounded-xl bg-gray-400 p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900">Hansen</h3>
          <p className="text-sm text-gray-500">Product Designer</p>
          <p className="flex">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </p>

          <p className="motion-preset-wobble mt-4 text-gray-700 motion-duration-2000">
            "Walaweee, Auqi Lanciaoo!"
          </p>
        </div>
      </div>
      <div className="mt-9 max-w-md rounded-xl bg-gray-400 p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900">Kak Gem</h3>
        <p className="text-sm text-gray-500">Product Designer</p>
        <p className="flex">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </p>

        <p className="mt-4 text-gray-700">
          "Singkat saja, jika kalian bicara tentang Fullstack Developer. cukup
          cari Auqi. FAHAM!!! 🖐️🖐️🖐️ "
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
