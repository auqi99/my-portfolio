const Project = () => {
  const projectCards = [
    {
      title: "Situation",
      content:
        "Saya mengembangkan Event Management Dashboard, sebuah platform berbasis web untuk membantu event organizer dalam mengelola tiket, transaksi, dan daftar peserta secara efisien. Proyek ini dibuat karena banyak penyelenggara acara kesulitan melacak penjualan tiket dan data peserta dalam satu sistem terintegrasi.",
    },
    {
      title: "Task",
      content:
        "Membangun sistem yang memungkinkan event organizer membuat, mengedit, dan mengelola event dengan mudah.\nMenampilkan statistik penjualan tiket secara real-time.\nMengelola daftar peserta dan verifikasi pembayaran.\nMendesain UI/UX yang clean dan responsif agar mudah digunakan oleh pengguna.",
    },
    {
      title: "Action",
      content:
        "Frontend: Menggunakan React.js dan Tailwind CSS untuk membangun UI yang responsif.\nBackend: Menggunakan Next.js (API Routes) dan Prisma ORM untuk mengelola data di database PostgreSQL.\nAuthentication: Menggunakan NextAuth.js untuk sistem login event organizer.\nState Management: Menggunakan Zustand untuk state global agar performa lebih ringan dibanding Redux.\nData Visualization: Menggunakan Recharts.js untuk menampilkan laporan penjualan tiket.\nDeployment: Menggunakan Vercel untuk hosting frontend dan backend.",
    },
    {
      title: "Result",
      content:
        "Mempercepat pengelolaan event → Event organizer dapat membuat dan mengelola acara dalam hitungan menit.\n\nMeningkatkan efisiensi tracking transaksi → Dengan dashboard statistik, organizer dapat melihat jumlah tiket terjual, total pendapatan, dan daftar peserta secara real-time.\n\nMeningkatkan pengalaman pengguna → UI yang clean dan responsif membuat pengguna merasa nyaman saat mengelola event.\n\nSukses diterapkan pada event lokal → Digunakan dalam 3 event lokal, dengan lebih dari 500 tiket terjual dalam uji coba awal.",
    },
  ];

  return (
    <section
      id="projects"
      className="container m-auto w-full bg-slate-900 py-24 text-white"
    >
      <p className="text-center font-semibold">Let's view what I got</p>

      <div className="mt-10 flex flex-col items-center gap-11">
        <div className="group relative h-64 w-64 overflow-hidden rounded-lg bg-gray-800 shadow-lg">
          <div className="relative h-40">
            <img
              src="https://images.unsplash.com/photo-1593795899768-947c4929449d?auto=format&fit=crop&w=500&q=80"
              alt="Project 1"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?auto=format&fit=crop&w=500&q=80"
              alt="Project 1"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
          <div className="p-3">
            <h3 className="text-sm font-semibold text-white">Project One</h3>
            <p className="mt-1 text-xs text-gray-400">
              A brief description of the project goes here.
            </p>
            <a
              href="#"
              className="mt-2 inline-block rounded-md bg-blue-500 px-3 py-1 text-xs font-medium text-white transition hover:bg-blue-600"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="grid w-full max-w-4xl grid-cols-1 place-items-center gap-11 px-4 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
          {projectCards.map((card, index) => (
            <div
              key={index}
              className={`flex h-72 w-full flex-col items-center justify-center rounded-lg bg-gray-300 p-4 text-center shadow-md sm:w-72 ${
                index === 3 ? "sm:col-span-2 md:col-span-full" : ""
              }`}
            >
              <h3 className="text-sm font-bold text-gray-900">{card.title}</h3>
              <p className="mt-2 whitespace-pre-line text-xs text-gray-700">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
