// File ini adalah tempat Anda mengisi semua data portofolio.
// Silakan ubah teks di dalam tanda kutip ("...") atau tanda kutip terbalik (`...`) dengan data Anda sendiri.

export const portfolioData = {
  // 1. Profil Utama
  hero: {
    name: "Kusdinar",
    role: "Lulusan S1 Teknik Elektro | IoT & Hardware Enthusiast",
    bio: "Lulusan S1 Teknik Elektro dengan fokus pembelajaran pada perancangan alat, Internet of Things (IoT), dan electronic assembly. Memiliki pengalaman praktis dalam merancang dan memprogram sistem elektronika. Terampil dalam teknik soldering komponen, pendataan teknis elektronika, serta troubleshooting perangkat keras dan lunak. Saya adalah individu yang adaptif terhadap teknologi baru dan siap berkontribusi secara proaktif.",
    // Masukkan link foto profil Anda
    profileImage: "/images/profil.jpeg",
  },

  // 2. Kontak & Tautan
  contact: {
    email: "kdinar111@gmail.com",
    phone: "wa.me/+6289655690085",
    linkedin: "https://linkedin.com/in/kusdinar",
    github: "https://github.com/Xisdev",
  },

  // 3. Keahlian (Skills)
  skills: {
    hardware: [
      "Component Assembly",
      "Soldering",
      "Integrasi Sensor & Aktuator",
      "Electronic Assembly",
      "Troubleshooting Hardware"
      "Electrician"
    ],
    software: [
      "Internet of Things (IoT)",
      "Computer Vision",
      "YOLO"
      "Python"
    ]
  },

  // 4. Pengalaman Kerja / Organisasi
  experiences: [
    {
      id: 1,
      title: "Anggota Tim Riset Citra & Deteksi Objek (Computer Vision)",
      company: "Universitas Garut",
      period: "2023 - 2024",
      description: "Terlibat dalam riset dan pengembangan model deteksi objek menggunakan algoritma seperti YOLO dengan mengolah custom datasets. Mengaplikasikan eksperimen pengujian deteksi objek secara langsung, termasuk implementasi pemantauan menggunakan telemetri drone untuk melacak subjek manusia,deteksi kendaran,dan lain lain.",
      images: [
        "/images/riset2.jpeg",
        "/images/riset3.jpeg"
      ]
    },

    {
      id: 3,
      title: "Tim Pemrograman & Elektronika",
      company: "Program PKM",
      period: "2025",
      description: "Berperan langsung dalam perancangan alat, perakitan perangkat keras (hardware assembly), dan pemrograman sistem IoT. Berhasil mengimplementasikan solusi teknologi yang aplikatif untuk memecahkan permasalahan nyata di masyarakat sasaran.",
      image: "/images/pkm.jpeg"
    },
    {
      id: 4,
      title: "Instruktur / Tim Pengajar Pelatihan Robotika",
      company: "Universitas Garut",
      period: "2025-2026",
      description: "Bertanggung jawab merancang dan menyampaikan materi teknis terkait dasar-dasar perakitan komponen elektronika dan pemrograman mikrokontroler. Mendampingi peserta secara intensif untuk memastikan keberhasilan praktik perakitan perangkat keras.",
      image: "/images/robotik1.jpeg"
    },
    {
      id: 5,
      title: "Tim MycoSmart (Top 165 Innovillage 2024)",
      company: "Inovillage Telkom University",
      period: "2025",
      description: "Pemanfaatan IoT dalam Sistem Monitoring Suhu dan Kelembaban serta Penyiraman Otomatis Guna Produktivitas Budidaya Jamur Tiram Di Desa Sukasenang Kecamatan Banyuresmi Kabupaten Garut Jawa Barat sebagai divisi software.",
      image: "/images/mycosmart.jpeg"
    },
    {
      id: 6,
      title: "Peserta Magang PKL (Praktik Kerja Lapangan)",
      company: "PT. Rekayasa & Integrasi Sistem Elektronika (RISE)",
      period: "2025",
      description: "Berperan aktif di bidang soldering dan perakitan komponen elektronika (assembly). Melakukan pendataan, penyolderan presisi, dan integrasi sistem perangkat keras.",
      image: "/images/rise.jpg"
    }
  ],

  // 5. Proyek
  projects: [],

  // 6. Pendidikan
  education: [
    {
      id: 1,
      degree: "S1 Teknik Elektro",
      university: "Universitas Garut",
      year: "2022 - 2026",
      details: "IPK: 3.37. Jati, Tarogong Kaler, Kabupaten Garut, Jawa Barat."
    }
  ],

  // 7. Organisasi
  organizations: [
    {
      id: 1,
      title: "Pengurus Himpunan Mahasiswa Teknik Elektro (2 Periode)",
      company: "Universitas Garut",
      period: "2023 - 2025",
      description: "Aktif mengelola dan mengeksekusi berbagai program kerja himpunan mahasiswa di tingkat Fakultas Teknik selama dua periode kepengurusan. Mengembangkan kemampuan manajerial, kepemimpinan, serta kolaborasi antar tim dalam menjalankan kegiatan operasional organisasi."
    },
    {
      id: 2,
      title: "Divisi Ristek UNECRED",
      company: "Universitas Garut",
      period: "2025",
      description: "Berperan aktif dalam Unit Electrical Creativity Development (UNECRED) dibidang elektronika sebagai divisi riset dan teknologi."
    }
  ],

  // 8. Sertifikasi
  certifications: [
    "Personil K3 - Lembaga Sertifikasi Profesi Universitas Garut (Juni 2026)",
    "TOEFL (Skor: 553) - Pusat Bahasa Fakultas Ilmu Budaya Universitas Padjadjaran (Des 2024 - Des 2027)"
  ]
};
