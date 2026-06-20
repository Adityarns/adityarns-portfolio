import { Translation, Project, BlogPost } from './types';

export const translations: Record<'en' | 'id', Translation> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
      analytics: 'Telemetry',
    },
    hero: {
      welcome: 'BACKEND ENGINEER PORTFOLIO',
      sub: 'I build scalable server-side systems and robust database architectures using Node.js, Express.js, and PostgreSQL.',
      cta: 'About Me',
      terminalLabel: 'SYSTEM_CONSOLE://GUEST-ACCESS',
      terminalPrompt: 'Guest login successful. Visual system initialized.',
    },
    about: {
      title: 'PROFILE',
      subtitle: 'A student developer striving for clean, efficient architectures.',
      p1: "I'm an undergraduate Informatics student with a passion for backend development. Driven by a deep curiosity and a passion for clean code, I specialize in building scalable server-side logic and robust database architectures using Node.js, Express.js, and PostgreSQL.",
      p2: 'I focus on building reliable server components, API systems, secure integrations, and high-performance databases, while maintaining visual clarity and simplicity in interface designs.',
      techStack: 'TECHNICAL CAPABILITIES',
      experience: 'EDUCATIONS & EXPERIENCE',
      years: 'years',
      cvBtn: 'Download Resume.pdf',
    },
    projects: {
      title: 'PROJECT',
      subtitle: 'A exhibition of hyper-optimized interactive systems.',
      all: 'ALL METRIC INDEX',
      viewCode: 'SOURCE_CODE',
      viewLive: 'LAUNCH_MODULE',
      highlights: 'Core Sub-sections',
    },
    blog: {
      title: 'THE CORE LOG',
      subtitle: 'A minimalist registry of concepts, designs, and algorithmic thoughts.',
      readMore: 'EXECUTE_DEV_READ',
      searchPlaceholder: 'Search database logs...',
      emptySearch: 'No logs match your filter query.',
      backBtn: 'RETURN_TO_ARCHIVE',
    },
    contact: {
      title: 'SECURE COMMUNICATIONS',
      subtitle: 'Initialize a secure handshake to transmit messages.',
      name: 'IDENTIFIER (NAME)',
      email: 'COMMUNICATION_ADDRESS (EMAIL)',
      message: 'MESSAGE_PAYLOAD (BODY)',
      send: 'TRANSMIT_PAYLOAD',
      sending: 'TRANSMITING...',
      success: 'PAYLOAD TRANSMITTED SUCCESSFULLY. STACK RESPONSE DEPLOYED.',
      error: 'TRANSMISSION ERRED. SECURE CONNECTION TIMED OUT.',
      placeholderName: 'e.g. John Doe',
      placeholderEmail: 'e.g. core@network.net',
      placeholderMessage: 'Compose encrypted message payload here...',
    },
    analytics: {
      title: 'SYSTEM TELEMETRY',
      subtitle: 'Real-time analytics monitor tracking active visitor interaction metrics.',
      realTime: 'LIVE FLUID DYNAMICS',
      activeUsers: 'ACTIVE VISUALIZERS',
      uniqueVisitors: 'HANDSHAKES',
      bounceRate: 'SIGNAL REFLECTS',
      avgTime: 'SESSION DURATION',
      pageViews: 'TARGET ENGAGEMENTS',
      origins: 'GEOGRAPHICAL ORGIN PATTERNS',
      trackingId: 'TELEMETRY CONTAINER ID',
      trackingActive: 'REAL-TIME TRACKING IS STANDBY',
      terminalLogs: 'REAL-TIME STREAM_LOG_FEED',
    },
    notifications: {
      title: 'BROADCAST NODE',
      subtitle: 'Subscribe to direct system alerts for instant updates on visual releases.',
      allow: 'ALLOW PUSH RECEPTORS',
      allowed: 'RECEPTOR ONLINE',
      notAllowed: 'RECEPTOR MUTED',
      triggerBtn: 'EMIT SIMULATED UPDATE',
      latestTitle: 'HISTORIC RECEPTOR ARCHIVE',
      emptyList: 'No alert payloads currently buffered.',
      statusActive: 'NODE SYSTEM STATUS: HOSTED_SUCCESSFULLY',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      projects: 'Proyek',
      blog: 'Blog',
      contact: 'Kontak',
      analytics: 'Telemetri',
    },
    hero: {
      welcome: 'PORTOFOLIO BACKEND ENGINEER',
      sub: 'Saya membangun sistem server-side yang scalable dan arsitektur database yang tangguh menggunakan Node.js, Express.js, dan PostgreSQL.',
      cta: 'Tentang Saya',
      terminalLabel: 'KONSOL_SISTEM://AKSES-TAMU',
      terminalPrompt: 'Login tamu berhasil. Sistem visual diinisialisasi.',
    },
    about: {
      title: 'PROFIL',
      subtitle: 'Mahasiswa pengembang yang mengupayakan arsitektur bersih dan efisien.',
      p1: 'Saya adalah mahasiswa S1 Teknik Informatika yang memiliki ketertarikan tinggi dalam pengembangan backend. Didorong oleh rasa ingin tahu yang mendalam dan kecintaan pada kode yang bersih, saya berspesialisasi dalam membangun logika server-side yang scalable dan arsitektur database yang tangguh menggunakan Node.js, Express.js, dan PostgreSQL.',
      p2: 'Saya berfokus pada pembangunan komponen server yang andal, sistem API, integrasi yang aman, dan database berkinerja tinggi, sembari mempertahankan kesederhanaan dan kejelasan visual pada desain antarmuka.',
      techStack: 'KAPABILITAS TEKNIS',
      experience: 'PENDIDIKAN & PENGALAMAN',
      years: 'tahun',
      cvBtn: 'Unduh Resume.pdf',
    },
    projects: {
      title: 'PROJECT',
      subtitle: 'Pameran sistem interaktif yang dioptimalkan secara mendalam.',
      all: 'INDEKS METRIK SEMUA',
      viewCode: 'SINTAKS_SUMBER',
      viewLive: 'LUNCURKAN_MODUL',
      highlights: 'Sub-Bagian Utama',
    },
    blog: {
      title: 'CATATAN INTI',
      subtitle: 'Log minimalis berisi konsep, filosofi desain, dan pemikiran algoritmik.',
      readMore: 'BACA_LOG_PENGEMBANGAN',
      searchPlaceholder: 'Cari dalam database log...',
      emptySearch: 'Tidak ada log yang cocok dengan filter pencarian.',
      backBtn: 'KEMBALI_KE_ARSIP',
    },
    contact: {
      title: 'KOMUNIKASI AMAN',
      subtitle: 'Inisialisasi jabat tangan aman untuk mengirimkan transmisi pesan.',
      name: 'IDENTITAS (NAMA)',
      email: 'ALAMAT_KOMUNIKASI (EMAIL)',
      message: 'TRANSMISI_PESAN (KONTEN)',
      send: 'KIRIMKAN_TRANSMISI',
      sending: 'MENGIRIMKAN...',
      success: 'TRANSMISI BERHASIL DIKIRIM. RESPON DEPLOYED.',
      error: 'TRANSMISI GAGAL. KONEKSI AMAN TIMED OUT.',
      placeholderName: 'misal. John Doe',
      placeholderEmail: 'misal. core@network.net',
      placeholderMessage: 'Tulis pesan terenkripsi di sini...',
    },
    analytics: {
      title: 'TELEMETRI SISTEM',
      subtitle: 'Monitor analitik waktu nyata yang melacak aktivitas aktivitas pengunjung secara langsung.',
      realTime: 'DINAMIKA FLUIDA LANGSUNG',
      activeUsers: 'VISUALISATOR AKTIF',
      uniqueVisitors: 'JABAT_TANGAN',
      bounceRate: 'PANTULAN_SINYAL',
      avgTime: 'DURASI_SESI',
      pageViews: 'SASARAN_KETERLIBATAN',
      origins: 'POLA GEOGRAFIS ASAL',
      trackingId: 'ID KONTAINER TELEMETRI',
      trackingActive: 'PELACAKAN WAKTU NYATA SEDANG AKTIF',
      terminalLogs: 'STREAM_CATATAN_LANGSUNG',
    },
    notifications: {
      title: 'NOTIFIKASI SYNDICATED',
      subtitle: 'Berlangganan pemberitahuan sistem langsung untuk terus memantau pembaruan proyek.',
      allow: 'AKTIFKAN RESPONS PUSH',
      allowed: 'RESEPTOR AKTIF',
      notAllowed: 'RESEPTOR DIHENINGKAN',
      triggerBtn: 'PANCARKAN SIMULASI UPDATE',
      latestTitle: 'ARSIP HISTORIS REASONING',
      emptyList: 'Belum ada notifikasi sistem yang masuk.',
      statusActive: 'STATUS SISTEM: BERHASIL_DEPLOID',
    },
  },
};

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: {
      en: 'HYPER-DRIVE INTERACTIVE CANVAS',
      id: 'KANVAS INTERAKTIF HYPER-DRIVE',
    },
    description: {
      en: 'A high-speed mathematical rendering canvas displaying multi-dimensional vector fields using raw canvas API and customized spring physics interpolation.',
      id: 'Kanvas rendering matematis berkecepatan tinggi yang menampilkan medan vektor multi-dimensi menggunakan API kanvas murni dan interpolasi fisika pegas kustom.',
    },
    tags: ['React', 'HTML5 Canvas', 'Spring Physics', 'Vector Mathematics'],
    category: 'web',
    githubUrl: 'https://github.com/example/hyper-canvas',
    liveUrl: 'https://example.com/canvas',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
    keyHighlights: {
      en: [
        'Render overhead of less than 1.4ms per frame.',
        'Supports interactive vortex triggers and custom gravity points.',
        'Adaptive rendering adjusts automatically to current CPU loads.'
      ],
      id: [
        'Beban render kurang dari 1.4 md per frame.',
        'Mendukung titik gaya tarik interaktif kustom.',
        'Rendering adaptif otomatis menyesuaikan dengan beban CPU.'
      ]
    }
  },
  {
    id: 'proj-2',
    title: {
      en: 'MONO-COSMIC NEURAL MONITOR',
      id: 'MONITOR SARAF MONO-KOSMIK',
    },
    description: {
      en: 'An algorithmic UI interface visualizing neural net weights, decision path matrices, and training telemetry. Built in monochromatic structural grid arrays.',
      id: 'Antarmuka visualisasi bobot jaringan saraf, matriks alur keputusan, dan statistik pemrosesan model AI. Dirancang dalam layout grid struktural minimalis.',
    },
    tags: ['Next.js', 'D3.js', 'Neural Networks', 'Tailwind CSS'],
    category: 'ai',
    githubUrl: 'https://github.com/example/neural-monitor',
    liveUrl: 'https://example.com/neural',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800',
    keyHighlights: {
      en: [
        'Real-time weight matrix rendering with interactive node inspect panels.',
        'High-density data plots capable of tracking 10,000 active weights.',
        'Responsive layout scaling down cleanly to low-resolution tablet frames.'
      ],
      id: [
        'Tampilan matriks saraf langsung dengan panel inspeksi interaktif.',
        'Plot data tingkat tinggi yang mampu melacak hingga 10,000 bobot.',
        'Skalabilitas letak letak dinamis yang disesuaikan untuk monitor tablet.'
      ]
    }
  },
  {
    id: 'proj-3',
    title: {
      en: 'STRATA GEOFENCE TRANSCIEVER',
      id: 'TRANSMITTER GEOFENCE STRATA',
    },
    description: {
      en: 'Responsive spatial tracking module optimizing low-power signal handshakes for localized peer-to-peer visual mapping routers.',
      id: 'Modul pelacakan spasial responsif yang mengoptimalkan daya rendah untuk jangkauan router sistem pemetaan visual peer-to-peer lokal.',
    },
    tags: ['React Native', 'Geofencing', 'Rust Core', 'WebAssembly'],
    category: 'mobile',
    githubUrl: 'https://github.com/example/geofence-transceiver',
    imageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800',
    keyHighlights: {
      en: [
        'Compiled via Rust targets directly for sub-millisecond edge calculation.',
        'Stores offline geographic breadcrumb matrices on safe secure hardware.',
        'Reduced power profile consumption footprint by up to 43%.'
      ],
      id: [
        'Kompilasi dengan target Rust untuk kalkulasi sub-milidetik offline.',
        'Menyimpan enkripsi data jejak geolokal pada partisi aman.',
        'Menghemat konsumsi daya baterai perangkat seluler hingga 43%.'
      ]
    }
  },
  {
    id: 'proj-4',
    title: {
      en: 'FRACTAL SOUND SYNTHESIZER',
      id: 'SINTESIS SUARA FRAKTAL',
    },
    description: {
      en: 'Web Audio API synthesizer mapping mathematical Julia and Mandelbrot coordinates directly onto interactive modular frequency modulators.',
      id: 'Sintesis audio Web Audio API yang memetakan koordinat matematika Julia dan Mandelbrot ke modulator frekuensi modular.',
    },
    tags: ['HTML5 Audio', 'TypeScript', 'Complex Equations', 'Motion'],
    category: 'hardware',
    githubUrl: 'https://github.com/example/fractal-synth',
    liveUrl: 'https://example.com/synth',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800',
    keyHighlights: {
      en: [
        'Synthesizes dynamic sine-wave frequencies entirely native to the browser.',
        'Visualizes harmonic sound waves with highly detailed SVG osciloscopes.',
        'Keyboard and touch macro pads map coordinates to spatial sound paths.'
      ],
      id: [
        'Sintesis suara gelombang sinus secara murni dari browser.',
        'Visualisasi harmonika osiloskop SVG beresolusi tajam.',
        'Dukungan makro keyboard dan kontrol gestur sentuh interaktif.'
      ]
    }
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: {
      en: 'The Hegemony of Void: Philosophy of Mono-Design',
      id: 'Dominasi Ruang Kosong: Filosofi Mono-Desain',
    },
    excerpt: {
      en: 'Exploring why the omission of chromatic spectrum colors builds extreme depth of concentration, framing user focus strictly inside raw structured geometry.',
      id: 'Menyelidiki mengapa meniadakan spektrum warna justru menghadirkan kedalaman fokus murni bagi pengguna di dalam tatanan geometri struktural.',
    },
    content: {
      en: `### Introduction to Mono-Design

In a digital landscape overly saturated with bright gradients, vivid popups, and high-intensity visual noise, the deliberate decision to strip away color is a rebellious architectural act. Black, white, and a meticulously calibrated gray index are not choices of "absence." Instead, they constitute the ultimate design discipline.

When color is eliminated:
1. **Structural Integrity Rules:** Shadows, negative space, and borders become main actors. There is nowhere to hide bad layout or misaligned lines behind a vibrant gradient.
2. **Typography Speaks Clearest:** The weight, kerning, and tracking of letters dictate hierarchy directly. A bold sans-serif display heading takes its rightful, unmediated place as a bold statement of purpose.
3. **Information Density Multiplies:** Users consume data faster because their eyes are not continuously computing color harmony or interpreting semantic hints like "orange means warning." High contrast ensures absolute scan speed.

### Spatial Rhythm and Interactive Grids

To replace the missing chromatic context, a monochrome interface utilizes spatial grid structures and interactive motion feedback.

\`\`\`css
/* Example of a high-contrast futuristic layout border design */
.futuristic-border {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: radial-gradient(circle, #0c0c0c 0%, #000000 100%);
  transition: border-color 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.futuristic-border:hover {
  border-color: #ffffff;
}
\`\`\`

By mapping visual feedback to microscopic shifts in contrast (e.g., from deep charcoal darks to blinding solid brights), the interface establishes a feeling of reactive structural physics. Motion is no longer decorative; it becomes the direct responsive extension of the user's focus.`,
      id: `### Pengantar Filosofi Desain Monokrom

Dalam dunia digital yang dipenuhi oleh gradasi warna neon, popup interaktif yang mencolok, dan kebisingan visual konstan, keputusan untuk meniadakan warna adalah sebuah tindakan artistik yang menantang batas biasa. Palet warna hitam, putih, dan abu-abu bukanlah bentuk "kekosongan". Sebaliknya, ini adalah ekspresi tertinggi disiplin desain.

Saat warna dihilangkan:
1. **Integritas Geometri Berkuasa:** Bayangan, ruang negatif, dan porsi tata letak menjadi peran utama. Tidak ada ruang untuk menyembunyikan tata letak yang buruk di belakang warna gradien yang berkilau.
2. **Tipografi Bersuara Paling Jernih:** Ketebalan, kerapatan huruf, dan struktur font mendikte hierarki informasi secara langsung. Sebuah heading sans-serif tebal berdiri tegak sebagai elemen visual bermakna tinggi.
3. **Kepadatan Informasi Berlipat Ganda:** Pengguna memproses informasi lebih cepat karena indra mereka tidak harus menerjemahkan makna psikologis warna berulang kali. Kontras yang tegas menjamin kejelasan tingkat pertama.

### Ritme Spasial dan Grid Interaktif

Sebagai pengganti konteks emosi warna, antarmuka monokrom memanfaatkan kepekaan letak grid spasial dan animasi tanggap gerakan.

\`\`\`css
/* Contoh styling bingkai futuristik dengan kontras dinamis */
.futuristic-border {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: radial-gradient(circle, #0c0c0c 0%, #000000 100%);
  transition: border-color 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.futuristic-border:hover {
  border-color: #ffffff;
}
\`\`\`

Dengan memetakan feedback visual pada pergeseran kontras mikro (misal dari abu-abu gelap ke putih pekat), antarmuka menciptakan sensasi sistem yang hidup merespon interaksi pengguna secara presisi.`,
    },
    date: 'June 18, 2026',
    readTime: '4 min read',
    tags: ['Design Theory', 'Minimalism', 'Front-End Architecture'],
    author: 'MONO_CORE',
  },
  {
    id: 'post-2',
    title: {
      en: 'Low-Latency Vector Animation via Math interpolators',
      id: 'Animasi Vektor Latensi Rendah dengan Interpolasi Matematis',
    },
    excerpt: {
      en: 'Diving deep into Canvas mathematics, rendering high-density particle structures on user hover triggers while bypassing expensive DOM repaint limits.',
      id: 'Bedah mendalam kalkulasi matematika Canvas, menghasilkan struktur partikel dinamis tinggi pada aksi pengguna dengan menghindari rerender DOM yang berat.',
    },
    content: {
      en: `### The Problem with DOM Animation

Modern web layouts require dynamic sensory feedback. However, attempting to render 500 individual responsive nodes (like decorative light paths or particle systems) as separate HTML elements inside the Document Object Model (DOM) is an architectural trap:
- Each layout calculation forces a reflow.
- Mobile processors throttle under heavy SVG tree structures.
- Frame rates drop from standard 60fps to sluggish 15fps.

### The Solution: Direct Mathematical Canvas Interpolation

By creating a structured canvas and managing positions using mathematical vectors and spring physics in raw JavaScript/TypeScript, we completely bypass the DOM's layout engine.

Here is a simplified architectural overview of our vector system:

\`\`\`typescript
interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
}

// Particle update loop targeting high-frequency mouse actions
function updatePoint(point: Point, mouseX: number, mouseY: number) {
  const dx = mouseX - point.x;
  const dy = mouseY - point.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  if (distance < 120) {
    const force = (120 - distance) / 120;
    point.vx -= (dx / distance) * force * 1.5;
    point.vy -= (dy / distance) * force * 1.5;
  }
  
  // Spring tension return to origin
  const homeDx = point.originalX - point.x;
  const homeDy = point.originalY - point.y;
  point.vx += homeDx * 0.05;
  point.vy += homeDy * 0.05;
  
  // Friction dampening
  point.vx *= 0.88;
  point.vy *= 0.88;
  
  point.x += point.vx;
  point.y += point.vy;
}
\`\`\`

By pairing this calculation stream to a standard \`requestAnimationFrame\` loop, the application manages multi-layered geometric systems smoothly at exactly 60Hz or 120Hz, even on mid-range Android or iOS mobile browsers. It creates a futuristic responsive aura around client interactions without roasting the user's hardware.`,
      id: `### Tantangan Animasi Berbasis DOM

Desain interaktif modern membutuhkan feedback responsif tingkat tinggi. Namun, jika Anda mencoba memetakan 500 titik partikel dekoratif sebagai elemen HTML murni di dalam Document Object Model (DOM), sistem Anda akan dengan cepat mengalami overload:
- Setiap pembaruan tata letak memaksa browser melakukan render ulang (reflow & repaint).
- Perangkat seluler mengalami pelambatan parah akibat pohon elemen SVG yang besar.
- Frame rate menurun drastis dari 60fps ke tingkat yang sangat patah-patah.

### Solusi: Interpolasi Matematis Langsung di Canvas

Dengan menyematkan elemen HTML5 Canvas tunggal dan mengatur koordinat partikel secara dinamis menggunakan kalkulasi vektor dan gaya pegas, kita membebaskan mesin browser dari beban berat render DOM.

Berikut struktur inti dari algoritma vektor dinamis kita:

\`\`\`typescript
interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
}

// Pembaruan koordinat terhadap posisi kursor mouse
function updatePoint(point: Point, mouseX: number, mouseY: number) {
  const dx = mouseX - point.x;
  const dy = mouseY - point.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  if (distance < 120) {
    const force = (120 - distance) / 120;
    point.vx -= (dx / distance) * force * 1.5;
    point.vy -= (dy / distance) * force * 1.5;
  }
  
  // Gaya pegas mengembalikan partikel ke formasi awal
  const homeDx = point.originalX - point.x;
  const homeDy = point.originalY - point.y;
  point.vx += homeDx * 0.05;
  point.vy += homeDy * 0.05;
  
  // Redaman gesekan (damping)
  point.vx *= 0.88;
  point.vy *= 0.88;
  
  point.x += point.vx;
  point.y += point.vy;
}
\`\`\`

Dengan menyatukan rantai perhitungan ini di dalam loop \`requestAnimationFrame\`, browser mampu menangani ribuan partikel koordinat pada kecepatan 60Hz hingga 120Hz secara mulus tanpa membebani daya baterai berlebih.`,
    },
    date: 'May 30, 2026',
    readTime: '5 min read',
    tags: ['Canvas API', 'Mathematics', 'WebGL Prep'],
    author: 'VECTOR_CORE',
  }
];

export const mockVisitorCountries = [
  { country: 'United States', flag: '🇺🇸', count: 1422, ratio: 42 },
  { country: 'Indonesia', flag: '🇮🇩', count: 984, ratio: 29 },
  { country: 'Germany', flag: '🇩🇪', count: 476, ratio: 14 },
  { country: 'Japan', flag: '🇯🇵', count: 305, ratio: 9 },
  { country: 'United Kingdom', flag: '🇬🇧', count: 201, ratio: 6 }
];
