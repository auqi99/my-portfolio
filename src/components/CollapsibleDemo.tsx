"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">STAR method for my project</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm"></div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Situation <br /> Saya mengembangkan Event Management Dashboard, sebuah
          platform berbasis web untuk membantu event organizer dalam mengelola
          tiket, transaksi, dan daftar peserta secara efisien. Proyek ini dibuat
          karena banyak penyelenggara acara kesulitan melacak penjualan tiket
          dan data peserta dalam satu sistem terintegrasi.
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Task <br />
          Membangun sistem yang memungkinkan event organizer membuat, mengedit,
          dan mengelola event dengan mudah. <br />
          Menampilkan statistik penjualan tiket secara real-time. <br />
          Mengelola daftar peserta dan verifikasi pembayaran. <br />
          Mendesain UI/UX yang clean dan responsif agar mudah digunakan oleh
          pengguna.
        </div>
      </CollapsibleContent>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Action <br />
          Frontend: Menggunakan React.js dan Tailwind CSS untuk membangun UI
          yang responsif. <br />
          Backend: Menggunakan Next.js (API Routes) dan Prisma ORM untuk
          mengelola data di database PostgreSQL.
          <br /> Authentication: Menggunakan NextAuth.js untuk sistem login
          event organizer.
          <br /> State Management: Menggunakan Zustand untuk state global agar
          performa lebih ringan dibanding Redux.
          <br /> Data Visualization: Menggunakan Recharts.js untuk menampilkan
          laporan penjualan tiket. <br />
          Deployment: Menggunakan Vercel untuk hosting frontend dan backend.
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Result <br />
          Mempercepat pengelolaan event → Event organizer dapat membuat dan
          mengelola acara dalam hitungan menit.
          <br />
          Meningkatkan efisiensi tracking transaksi → Dengan dashboard
          statistik, organizer dapat melihat jumlah tiket terjual, total
          pendapatan, dan daftar peserta secara real-time.
          <br />
          Meningkatkan pengalaman pengguna → UI yang clean dan responsif membuat
          pengguna merasa nyaman saat mengelola event.
          <br />
          Sukses diterapkan pada event lokal → Digunakan dalam 3 event lokal,
          dengan lebih dari 500 tiket terjual dalam uji coba awal.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
