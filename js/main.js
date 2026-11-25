
// 2. HIGH-RESOLUTION OFFICIAL CERTIFICATE SVG DATA-URL GENERATOR
    // Ensures every single certificate displays a crisp, realistic Indonesian Piagam Penghargaan
    // even when local JPG scans in assets/ are unavailable.
    window.generateCertificateVisualDataUrl = function(cert) {
      const accentColors = {
        nasional: { border: "#d97706", bgTop: "#fffbeb", badge: "#b45309", seal: "#f59e0b" },
        provinsi: { border: "#7c3aed", bgTop: "#f5f3ff", badge: "#6d28d9", seal: "#8b5cf6" },
        kabupaten: { border: "#0284c7", bgTop: "#f0f9ff", badge: "#0369a1", seal: "#0ea5e9" },
        sekolah: { border: "#1d4ed8", bgTop: "#eff6ff", badge: "#1e40af", seal: "#3b82f6" }
      };
      const theme = accentColors[cert.level] || accentColors.sekolah;
      const safeTitle = (cert.title || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      const safeOrg = (cert.organizer || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      const safeNo = (cert.nomorSurat || "Arsip Resmi Terverifikasi").replace(/&/g, "&amp;");
      const safeDesc = (cert.description || "").substring(0, 95) + ((cert.description || "").length > 95 ? "..." : "");

      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="720" viewBox="0 0 1000 720">
        <defs>
          <linearGradient id="certBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${theme.bgTop}"/>
            <stop offset="50%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#fefce8"/>
          </linearGradient>
        </defs>
        <!-- Paper Background -->
        <rect width="1000" height="720" rx="16" fill="url(#certBg)"/>
        <!-- Outer Ornate Frame -->
        <rect x="24" y="24" width="952" height="672" rx="10" fill="none" stroke="${theme.border}" stroke-width="5"/>
        <rect x="36" y="36" width="928" height="648" rx="6" fill="none" stroke="${theme.border}" stroke-width="1.5" stroke-dasharray="8 4"/>
        <!-- Corner Ornaments -->
        <circle cx="52" cy="52" r="8" fill="${theme.seal}"/>
        <circle cx="948" cy="52" r="8" fill="${theme.seal}"/>
        <circle cx="52" cy="668" r="8" fill="${theme.seal}"/>
        <circle cx="948" cy="668" r="8" fill="${theme.seal}"/>

        <!-- Institution Header -->
        <text x="500" y="95" text-anchor="middle" font-family="Georgia, serif" font-size="18" font-weight="bold" fill="#334155" letter-spacing="2">${safeOrg.toUpperCase()}</text>
        <line x1="220" y1="112" x2="780" y2="112" stroke="${theme.border}" stroke-width="1.5" opacity="0.4"/>

        <!-- Main Certificate Heading -->
        <text x="500" y="168" text-anchor="middle" font-family="Georgia, serif" font-size="38" font-weight="bold" fill="${theme.badge}" letter-spacing="4">PIAGAM PENGHARGAAN</text>
        <rect x="340" y="185" width="320" height="28" rx="14" fill="${theme.border}" opacity="0.12"/>
        <text x="500" y="204" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="${theme.badge}">${safeNo}</text>

        <!-- Recipient Section -->
        <text x="500" y="255" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#64748b" letter-spacing="1.5">DIBERIKAN DENGAN BANGGA KEPADA:</text>
        <text x="500" y="312" text-anchor="middle" font-family="Georgia, serif" font-size="40" font-weight="bold" fill="#0f172a" letter-spacing="1">NAILY ROSYADA DAROJAT</text>
        <line x1="250" y1="328" x2="750" y2="328" stroke="${theme.seal}" stroke-width="2.5"/>

        <!-- Achievement Title -->
        <text x="500" y="372" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#475569">Atas prestasi dan pencapaian unggul sebagai:</text>
        <text x="500" y="418" text-anchor="middle" font-family="sans-serif" font-size="23" font-weight="bold" fill="${theme.badge}">${safeTitle}</text>
        <text x="500" y="458" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#475569">${safeDesc}</text>

        <!-- Gold / Official Seal Badge -->
        <circle cx="500" cy="555" r="46" fill="${theme.seal}" opacity="0.18"/>
        <circle cx="500" cy="555" r="36" fill="${theme.seal}"/>
        <text x="500" y="551" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">TERVERIFIKASI</text>
        <text x="500" y="567" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">${cert.year}</text>

        <!-- Left & Right Signatures -->
        <text x="210" y="545" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">Tingkat Kompetisi</text>
        <text x="210" y="568" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="${theme.badge}">${cert.levelBadge}</text>
        <line x1="130" y1="585" x2="290" y2="585" stroke="#94a3b8" stroke-width="1"/>

        <text x="790" y="545" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">Disahkan Pada</text>
        <text x="790" y="568" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">Tahun ${cert.year}</text>
        <line x1="710" y1="585" x2="870" y2="585" stroke="#94a3b8" stroke-width="1"/>
        <text x="790" y="605" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">Dokumen Resmi Sesuai CV</text>
      </svg>`;
      return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
    };

    // ══════════════════════════════════════════════════════════════════════
    // 3. DATASET RESMI FISIKA UNDIP 2026 (SESUAI CV & PERMINTAAN TERBARU)
    // ══════════════════════════════════════════════════════════════════════
    const INITIAL_DATA = {
      profile: {
        fullName: "Naily Rosyada Darojat",
        shortName: "Naily",
        titles: [
          "Mahasiswa S1 Fisika — Universitas Diponegoro 2026",
          "Minat: ONMIPA-PT, LKTI, Artikel Ilmiah, Essay & PKM",
          "Keahlian DOCX (KTI, Artikel, Essay) & Olah Data SPSS",
          "Lulusan Siswa Terbaik 1 SMAN 1 Gringsing (Nilai 93,73)",
          "Ketua Majelis Perwakilan Kelas (MPK) 2024–2025",
          "Public Speaker, MC & Juara 3 Mendongeng Jawa Provinsi"
        ],
        bio: "Mahasiswa S1 Fisika Universitas Diponegoro (Undip) angkatan 2026 & Lulusan Siswa Terbaik 1 SMA Negeri 1 Gringsing (Nilai Akhir 93,73). Memiliki minat tinggi pada kompetisi <strong>ONMIPA-PT, Lomba Karya Tulis Ilmiah (LKTI), Penulisan Artikel Ilmiah, Essay Akademik, dan Program Kreativitas Mahasiswa (PKM)</strong>, didukung penguasaan Microsoft Word (DOCX), Olah Data SPSS, kepemimpinan Ketua MPK, serta Public Speaking.",
        email: "darojatdorojat@gmail.com",
        phone: "087791166318",
        location: "Batang, Jawa Tengah, Indonesia",
        campus: "Universitas Diponegoro (Undip)",
        major: "Fisika (S1)",
        academicScore: "93,73 (Lulusan Terbaik 1)",
        photoUrl: "assets/photo-naily.jpg",
        socials: {
          email: "mailto:darojatdorojat@gmail.com",
          instagram: "https://instagram.com/nai.r.d",
          instagramHandle: "@nai.r.d",
          linkedin: "https://linkedin.com/in/nailyrosyadadarojat",
          linkedinHandle: "@nailyrosyadadarojat"
        }
      },

      timeline: [
        {
          id: "edu-undip",
          year: "2026 – Sekarang",
          category: "education",
          role: "Mahasiswa S1 Fisika",
          institution: "Universitas Diponegoro (Undip)",
          shortDesc: "Menempuh studi sarjana di Program Studi Fisika, Fakultas Sains dan Matematika Universitas Diponegoro.",
          details: [
            "Fokus studi: Fisika Dasar & Teoretis, Mekanika, Elektromagnetika, Termodinamika, serta Olah Data & Analisis Statistik Penelitian.",
            "Mempersiapkan diri aktif dalam ajang Olimpiade Nasional Matematika dan Ilmu Pengetahuan Alam Perguruan Tinggi (ONMIPA-PT).",
            "Aktif menyusun Karya Tulis Ilmiah (KTI), Artikel Ilmiah, Essay Akademik, serta proposal Program Kreativitas Mahasiswa (PKM)."
          ]
        },
        {
          id: "edu-sman1",
          year: "2023 – 2026",
          category: "education",
          role: "Jurusan IPA — Lulusan Siswa Terbaik 1",
          institution: "SMA Negeri 1 Gringsing",
          shortDesc: "Nilai Akhir: 93,73. Peraih peringkat 1 besar di kelas selama 6 semester berturut-turut & Lulusan siswa terbaik 1 di sekolah.",
          details: [
            "Nilai Akhir: 93,73 (Lulusan siswa terbaik 1 di sekolah sesuai SK Kepala SMA Negeri 1 Gringsing No: 400.3.10.3/105/2026).",
            "Peraih peringkat 1 besar di kelas selama 6 semester berturut-turut tanpa terputus.",
            "Mewakili sekolah dalam ajang Olimpiade Sains Nasional (OSN) tingkat Kabupaten serta Lomba Cepat Tepat OPI IPB tingkat Nasional."
          ]
        },
        {
          id: "org-mpk-ketua",
          year: "2024 – 2025",
          category: "organization",
          role: "Ketua — Majelis Perwakilan Kelas (MPK)",
          institution: "SMA Negeri 1 Gringsing",
          shortDesc: "Memimpin Organisasi dalam mengawasi kinerja OSIS serta menampung dan menyalurkan aspirasi siswa.",
          details: [
            "Memimpin Organisasi dalam mengawasi kinerja OSIS secara objektif, transparan, dan bertanggung jawab.",
            "Menampung dan menyalurkan aspirasi siswa untuk kemajuan program sekolah.",
            "Memimpin sidang pleno evaluasi program kerja serta suksesi kepemimpinan kesiswaan."
          ]
        },
        {
          id: "org-mpk-wakil",
          year: "2023 – 2024",
          category: "organization",
          role: "Wakil Ketua — Majelis Perwakilan Kelas (MPK)",
          institution: "SMA Negeri 1 Gringsing",
          shortDesc: "Mendampingi Ketua MPK dalam memimpin organisasi dan mengambil alih kepemimpinan jika ketua berhalangan hadir.",
          details: [
            "Mendampingi Ketua MPK dalam memimpin organisasi dan koordinasi antar-komisi.",
            "Mengambil alih kepemimpinan jika ketua berhalangan hadir dalam agenda rapat maupun kegiatan resmi sekolah."
          ]
        },
        {
          id: "org-pmr-2024",
          year: "2024 – 2025",
          category: "organization",
          role: "Sekbid Kesehatan — Palang Merah Remaja (PMR)",
          institution: "SMA Negeri 1 Gringsing",
          shortDesc: "Penyediaan Pertolongan Pertama (PP) dan Pengelola Unit Kesehatan Sekolah (UKS).",
          details: [
            "Penyediaan Pertolongan Pertama (PP) pada kegiatan upacara dan aktivitas kesiswaan di sekolah.",
            "Pengelola Unit Kesehatan Sekolah (UKS), memastikan kesiapan fasilitas kesehatan dan obat-obatan."
          ]
        },
        {
          id: "org-pmr-2023",
          year: "2023 – 2024",
          category: "organization",
          role: "Sekbid Kesehatan — Palang Merah Remaja (PMR)",
          institution: "SMA Negeri 1 Gringsing",
          shortDesc: "Penyediaan Pertolongan Pertama (PP) dan Pengelola Unit Kesehatan Sekolah (UKS).",
          details: [
            "Penyediaan Pertolongan Pertama (PP) bagi warga sekolah yang membutuhkan penanganan medis dasar.",
            "Pengelola Unit Kesehatan Sekolah (UKS) secara terjadwal dan terorganisir."
          ]
        }
      ],

      certificates: [
        {
          id: "cert-lulusan-terbaik",
          title: "Sertifikat Lulusan Terbaik SMA Negeri 1 Gringsing – Tingkat Sekolah",
          organizer: "SMA Negeri 1 Gringsing (Kepala Sekolah Ari Diah Pramesti, S.Pd., M.Si.)",
          year: "2026",
          nomorSurat: "No: 400.3.10.3/105/2026",
          level: "sekolah",
          levelBadge: "Tingkat Sekolah",
          badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
          description: "Piagam penghargaan resmi sebagai Lulusan Siswa Terbaik 1 Tahun Ajaran 2025/2026 dengan Nilai Akhir 93,73 dan Peringkat 1 kelas selama 6 semester berturut-turut.",
          image: "assets/cert-lulusan-terbaik.jpg"
        },
        {
          id: "cert-ipb-nasional",
          title: "Juara Harapan 3 Lomba Cepat Tepat OPI Fakultas Pertanian IPB – Tingkat Nasional",
          organizer: "Fakultas Pertanian Institut Pertanian Bogor (IPB University)",
          year: "2025",
          nomorSurat: "No. 0362/OPI-I/X/2025",
          level: "nasional",
          levelBadge: "Tingkat Nasional",
          badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
          description: "Sertifikat Penghargaan Lomba Cepat Tepat Tingkat Nasional Olimpiade Pertanian Indonesia (OPI) 2025 yang diselenggarakan oleh Fakultas Pertanian IPB University.",
          image: "assets/cert-ipb-nasional.jpg"
        },
        {
          id: "cert-osn-puspresnas",
          title: "Peringkat 7 Olimpiade Sains Nasional (OSN) Cabang Fisika – Tingkat Kabupaten",
          organizer: "Puspresnas / Balai Pengembangan Talenta Indonesia (BPTI)",
          year: "2025",
          nomorSurat: "Penghargaan Khusus Cabang Fisika Kab/Kota 2025",
          level: "kabupaten",
          levelBadge: "Tingkat Kabupaten",
          badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
          description: "Peringkat 7 Olimpiade Sains Nasional (OSN) Cabang Fisika Tingkat Kabupaten/Kota Tahun 2025 terverifikasi Puspresnas.",
          image: "assets/cert-osn-puspresnas.jpg"
        },
        {
          id: "cert-dongeng-jawa",
          title: "Juara 3 Lomba Mendongeng Berbahasa Jawa – Tingkat Provinsi",
          organizer: "Pemerintah Provinsi Jawa Tengah — Cabang Dinas Pendidikan Wilayah XIII",
          year: "2025",
          nomorSurat: "No: 400.3.7.4/12280/XI/2025",
          level: "provinsi",
          levelBadge: "Tingkat Provinsi",
          badgeColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
          description: "Piagam Penghargaan Juara 3 Lomba Mendongeng Berbahasa Jawa Jenjang SMA/SMK Tingkat Provinsi Jawa Tengah Cabang Dinas Wilayah XIII.",
          image: "assets/cert-dongeng-jawa.jpg"
        },
        {
          id: "cert-storytelling-islami",
          title: "Juara 1 Lomba Story Telling Islami – Tingkat Sekolah",
          organizer: "SMA Negeri 1 Gringsing",
          year: "2025",
          nomorSurat: "No: 027/LSTI/III/2025",
          level: "sekolah",
          levelBadge: "Tingkat Sekolah",
          badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
          description: "Piagam Penghargaan Juara 1 Lomba Story Telling Islami dalam rangka Ramadhan Kareem SMA Negeri 1 Gringsing Tahun 2025.",
          image: "assets/cert-storytelling-islami.jpg"
        },
        {
          id: "cert-osn-2024",
          title: "Peringkat 7 Olimpiade Sains Nasional (OSN) – Tingkat Kabupaten (2024)",
          organizer: "Puspresnas / Balai Pengembangan Talenta Indonesia (BPTI)",
          year: "2024",
          nomorSurat: "Penghargaan OSN Tingkat Kabupaten Tahun 2024",
          level: "kabupaten",
          levelBadge: "Tingkat Kabupaten",
          badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
          description: "Sertifikat Peringkat 7 Olimpiade Sains Nasional (OSN) Tingkat Kabupaten Tahun 2024 sesuai data arsip CV resmi.",
          image: "assets/cert-osn-puspresnas.jpg"
        }
      ],

      documents: [
        {
          id: "doc-cv-pdf",
          name: "Curriculum_Vitae_Naily_Rosyada_Darojat.pdf",
          category: "cv",
          categoryName: "CV Resmi",
          type: "PDF",
          size: "248 KB",
          date: "2026",
          isPrimaryCV: true,
          description: "Dokumen Curriculum Vitae resmi lengkap Naily Rosyada Darojat (Pendidikan S1 Fisika Undip & SMAN 1 Gringsing, 6 Prestasi Utama, Organisasi MPK & PMR, Keahlian DOCX/KTI/SPSS)."
        }
      ],

      messages: [
        {
          id: "msg-sample-1",
          name: "Tim Akademik & Riset Mahasiswa Undip",
          email: "fisika@fsm.undip.ac.id",
          subject: "Kolaborasi Tim PKM & Persiapan ONMIPA Fisika 2026",
          message: "Selamat datang di Departemen Fisika Fakultas Sains dan Matematika Universitas Diponegoro. Mari bergabung dalam pembinaan ONMIPA-PT dan tim penulisan PKM/LKTI.",
          timestamp: "31 Okt 2026, 10:15",
          read: false
        }
      ]
    };

    // ══════════════════════════════════════════════════════════════════════
    // 4. STATE PERSISTENCE
    // ══════════════════════════════════════════════════════════════════════
    const STORAGE_KEY = "NAILY_PORTFOLIO_STATE_V10_LOGO";

    function loadAppState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          return {
            profile: { ...INITIAL_DATA.profile, ...(parsed.profile || {}) },
            timeline: parsed.timeline || INITIAL_DATA.timeline,
            certificates: parsed.certificates || INITIAL_DATA.certificates,
            documents: parsed.documents || INITIAL_DATA.documents,
            messages: parsed.messages || INITIAL_DATA.messages
          };
        }
      } catch (err) {
        console.warn("Using default initial state:", err);
      }
      return JSON.parse(JSON.stringify(INITIAL_DATA));
    }

    let appState = loadAppState();

    function saveAppState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
      } catch (e) {
        console.error("Failed to save state", e);
      }
    }

    // ══════════════════════════════════════════════════════════════════════
    // 5. TOAST NOTIFICATION HELPER
    // ══════════════════════════════════════════════════════════════════════
    function showToast(message, type = "success") {
      const container = document.getElementById("toast-container");
      if (!container) return;

      const toast = document.createElement("div");
      toast.className = `p-4 rounded-2xl glass-card border flex items-center gap-3 text-xs sm:text-sm font-semibold shadow-2xl transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-auto ${
        type === "success" 
          ? "border-emerald-500/40 text-emerald-300 bg-emerald-950/90" 
          : type === "error" 
          ? "border-rose-500/40 text-rose-300 bg-rose-950/90" 
          : "border-blue-500/40 text-cyan-300 bg-navy-900/95"
      }`;

      const iconName = type === "success" ? "check-circle" : type === "error" ? "alert-circle" : "info";
      toast.innerHTML = `
        <i data-lucide="${iconName}" class="w-5 h-5 flex-shrink-0"></i>
        <span>${message}</span>
      `;

      container.appendChild(toast);
      if (window.lucide) lucide.createIcons();

      requestAnimationFrame(() => {
        toast.classList.remove("translate-y-4", "opacity-0");
      });

      setTimeout(() => {
        toast.classList.add("translate-y-4", "opacity-0");
        setTimeout(() => toast.remove(), 300);
      }, 3800);
    }

    // ══════════════════════════════════════════════════════════════════════
    // 6. ANIMATED PARTICLES & QUANTUM CANVAS BACKGROUND
    // ══════════════════════════════════════════════════════════════════════
    function initParticlesCanvas() {
      const canvas = document.getElementById("particles-canvas");
      if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { if(canvas) canvas.hidden=true; return; }
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      let width=0,height=0,frame=0,particles=[];
      const mobile=window.innerWidth<768;
      const particleCount=mobile?12:28;
      const dpr=Math.min(window.devicePixelRatio||1,1.25);
      function resize(){
        width=window.innerWidth;height=window.innerHeight;
        canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
        canvas.style.width=width+"px";canvas.style.height=height+"px";
        ctx.setTransform(dpr,0,0,dpr,0,0);
      }
      resize();
      window.addEventListener("resize",resize,{passive:true});
      class Particle{
        constructor(){this.x=Math.random()*width;this.y=Math.random()*height;this.vx=(Math.random()-.5)*.35;this.vy=(Math.random()-.5)*.35;this.radius=Math.random()*1.4+.6;}
        update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>width)this.vx*=-1;if(this.y<0||this.y>height)this.vy*=-1;}
        draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);ctx.fillStyle="rgba(0,229,255,.34)";ctx.fill();}
      }
      for(let i=0;i<particleCount;i++)particles.push(new Particle());
      let paused=document.hidden;
      function animate(){
        if(paused)return;
        ctx.clearRect(0,0,width,height);
        for(let i=0;i<particles.length;i++){
          const p=particles[i];p.update();p.draw();
          for(let k=i+1;k<particles.length;k++){
            const q=particles[k],dx=p.x-q.x,dy=p.y-q.y,distSq=dx*dx+dy*dy;
            if(distSq<10000){const dist=Math.sqrt(distSq);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle="rgba(0,229,255,"+(0.10*(1-dist/100))+")";ctx.lineWidth=.55;ctx.stroke();}
          }
        }
        frame=requestAnimationFrame(animate);
      }
      function visibility(){paused=document.hidden;if(!paused){cancelAnimationFrame(frame);frame=requestAnimationFrame(animate);}else cancelAnimationFrame(frame);}
      document.addEventListener("visibilitychange",visibility);
      frame=requestAnimationFrame(animate);
    }

    // ══════════════════════════════════════════════════════════════════════
    // 7. TYPEWRITER EFFECT IN HERO
    // ══════════════════════════════════════════════════════════════════════
    function initTypewriter() {
      const el = document.getElementById("typewriter-text");
      if (!el) return;

      const titles = appState.profile.titles || INITIAL_DATA.profile.titles;
      let titleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let currentDelay = 90;

      function type() {
        const current = titles[titleIndex % titles.length];

        if (isDeleting) {
          el.textContent = current.substring(0, charIndex - 1);
          charIndex--;
          currentDelay = 35;
        } else {
          el.textContent = current.substring(0, charIndex + 1);
          charIndex++;
          currentDelay = 75;
        }

        if (!isDeleting && charIndex === current.length) {
          isDeleting = true;
          currentDelay = 2200;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          titleIndex++;
          currentDelay = 350;
        }

        setTimeout(type, currentDelay);
      }

      type();
    }

    // ══════════════════════════════════════════════════════════════════════
    // 8. RENDER HERO & PROFILE (WITH OFFICIAL BRAND LOGOS FOR IG & LINKEDIN)
    // ══════════════════════════════════════════════════════════════════════
    window.getBrandLogoSVG = function(brand, sizeClass = "w-5 h-5") {
      if (brand === "instagram") {
        return `<svg class="${sizeClass} flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="igBrandGrad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#feda75"/>
              <stop offset="25%" stop-color="#fa7e1e"/>
              <stop offset="50%" stop-color="#d62976"/>
              <stop offset="75%" stop-color="#962fbf"/>
              <stop offset="100%" stop-color="#4f5bd5"/>
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#igBrandGrad)"/>
          <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="4" stroke="#ffffff" stroke-width="1.8" fill="none"/>
          <circle cx="12" cy="12" r="3.2" stroke="#ffffff" stroke-width="1.8" fill="none"/>
          <circle cx="16.2" cy="7.8" r="1.15" fill="#ffffff"/>
        </svg>`;
      }
      if (brand === "linkedin") {
        return `<svg class="${sizeClass} flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2"/>
          <path d="M7.5 10.2V17.2M7.5 6.9V7.05M11.4 17.2V13.1C11.4 11.4 12.5 10.2 14.2 10.2C15.8 10.2 16.7 11.3 16.7 13.1V17.2M11.4 10.2V17.2" stroke="#ffffff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
      }
      return `<svg class="${sizeClass} flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="3.5" fill="#0284c7"/>
        <path d="M3.5 6.8L12 13L20.5 6.8" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    };

    function renderProfile() {
      const p = appState.profile;

      const nameEl = document.getElementById("hero-name-display");
      if (nameEl) nameEl.textContent = p.fullName.toUpperCase();

      const bioEl = document.getElementById("hero-bio-display");
      if (bioEl) bioEl.innerHTML = p.bio;

      const imgEl = document.getElementById("profile-img-element");
      if (imgEl && p.photoUrl) {
        imgEl.src = p.photoUrl;
      }

      const container = document.getElementById("hero-social-links");
      if (container) {
        const s = p.socials;
        container.innerHTML = `
          <a href="${s.instagram}" target="_blank" title="Instagram Resmi @nai.r.d" class="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-pink-600/20 border border-white/10 hover:border-pink-400/50 text-slate-200 hover:text-white transition-all hover:scale-105 flex items-center gap-2 text-xs font-mono shadow-md">
            ${window.getBrandLogoSVG("instagram", "w-5 h-5")}
            <span class="font-semibold">@nai.r.d</span>
          </a>
          <a href="${s.linkedin}" target="_blank" title="LinkedIn Resmi @nailyrosyadadarojat" class="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-400/50 text-slate-200 hover:text-white transition-all hover:scale-105 flex items-center gap-2 text-xs font-mono shadow-md">
            ${window.getBrandLogoSVG("linkedin", "w-5 h-5")}
            <span class="font-semibold">@nailyrosyadadarojat</span>
          </a>
          <a href="${s.email}" title="Kirim Email" class="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-400/50 text-slate-200 hover:text-white transition-all hover:scale-105 flex items-center gap-2 text-xs font-mono shadow-md">
            ${window.getBrandLogoSVG("email", "w-5 h-5")}
            <span class="font-semibold">darojatdorojat@gmail.com</span>
          </a>
        `;
      }
    }

    // ══════════════════════════════════════════════════════════════════════
    // 9. RENDER TIMELINE (PENDIDIKAN & ORGANISASI SESUAI CV)
    // ══════════════════════════════════════════════════════════════════════
    let currentTimelineCategory = "all";

    function renderTimeline() {
      const container = document.getElementById("timeline-list");
      if (!container) return;

      const items = appState.timeline.filter(item => {
        if (currentTimelineCategory === "all") return true;
        return item.category === currentTimelineCategory;
      });

      container.innerHTML = "";

      items.forEach((item, index) => {
        const isLeft = index % 2 === 0;
        const card = document.createElement("div");
        card.className = "relative flex flex-col sm:flex-row items-center w-full group";

        let iconName = "users";
        let iconColor = "text-purple-400 bg-purple-500/20 border-purple-400/40";
        let catLabel = "Pengalaman Organisasi";

        if (item.category === "education") {
          iconName = "graduation-cap";
          iconColor = "text-accent-cyan bg-cyan-500/20 border-cyan-400/40";
          catLabel = "Latar Belakang Pendidikan";
        }

        const detailsListHtml = (item.details || []).map(d => `
          <li class="flex items-start gap-2 text-xs text-slate-300/90">
            <span class="text-accent-cyan mt-0.5">•</span>
            <span>${d}</span>
          </li>
        `).join("");

        card.innerHTML = `
          <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full ${iconColor} border flex items-center justify-center z-10 shadow-lg group-hover:scale-125 transition-transform bg-navy-950">
            <i data-lucide="${iconName}" class="w-4 h-4"></i>
          </div>

          <div class="w-full sm:w-1/2 ${isLeft ? 'sm:pr-10' : 'sm:pl-10 sm:ml-auto'} pl-12 sm:pl-0 mt-4 sm:mt-0">
            <div class="p-6 rounded-3xl glass-card border border-white/10 hover:border-accent-cyan/40 transition-all hover:scale-[1.01] cursor-pointer shadow-xl text-left" onclick="openTimelineDetail('${item.id}')">
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="text-xs font-mono font-bold text-accent-cyan px-3 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/25">${item.year}</span>
                <span class="text-[11px] font-mono text-slate-400 uppercase tracking-wider">${catLabel}</span>
              </div>
              <h4 class="text-base sm:text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">${item.role}</h4>
              <p class="text-xs sm:text-sm text-blue-300 font-semibold mb-2">${item.institution}</p>
              <p class="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">${item.shortDesc}</p>
              
              <ul class="space-y-1.5 border-t border-white/10 pt-3">
                ${detailsListHtml}
              </ul>

              <div class="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs text-accent-cyan font-semibold">
                <span>Klik untuk detail penuh</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </div>
            </div>
          </div>
        `;

        container.appendChild(card);
      });

      if (window.lucide) lucide.createIcons();
    }

    // ══════════════════════════════════════════════════════════════════════
    // 13. SOCIAL MEDIA INTEGRATION (WITH LARGE COLORFUL IG & LINKEDIN LOGOS)
    // ══════════════════════════════════════════════════════════════════════
    function renderSocialConnect() {
      const container = document.getElementById("social-grid-cards");
      if (!container) return;

      const s = appState.profile.socials;

      const socialItems = [
        {
          name: "Instagram Resmi",
          handle: "@nai.r.d",
          url: s.instagram,
          brand: "instagram",
          badgeText: "Follow Instagram",
          color: "hover:border-pink-500/60 hover:shadow-pink-500/15"
        },
        {
          name: "LinkedIn Akademik",
          handle: "@nailyrosyadadarojat",
          url: s.linkedin,
          brand: "linkedin",
          badgeText: "Connect LinkedIn",
          color: "hover:border-blue-500/60 hover:shadow-blue-500/15"
        },
        {
          name: "Email Langsung",
          handle: "darojatdorojat@gmail.com",
          url: s.email,
          brand: "email",
          badgeText: "Kirim Email",
          color: "hover:border-sky-500/60 hover:shadow-sky-500/15"
        }
      ];

      container.innerHTML = "";

      socialItems.forEach(item => {
        const card = document.createElement("a");
        card.href = item.url;
        card.target = "_blank";\n        card.rel = "noopener noreferrer";
        card.className = `p-6 rounded-3xl glass-card border border-white/10 ${item.color} flex flex-col items-center text-center space-y-4 group transition-all hover:scale-105 active:scale-95 shadow-xl`;

        card.innerHTML = `
          <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
            ${window.getBrandLogoSVG(item.brand, "w-10 h-10")}
          </div>
          <div>
            <h5 class="text-base font-bold text-white group-hover:text-accent-cyan transition-colors">${item.name}</h5>
            <p class="text-xs text-slate-300 font-mono mt-1 font-semibold">${item.handle}</p>
          </div>
          <span class="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300 group-hover:text-white group-hover:border-accent-cyan/40 flex items-center gap-1">
            <span>${item.badgeText}</span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-accent-cyan"></i>
          </span>
        `;

        container.appendChild(card);
      });

      if (window.lucide) lucide.createIcons();
    }

    window.openTimelineDetail = function(id) {
      const item = appState.timeline.find(t => t.id === id);
      if (!item) return;

      const modal = document.getElementById("detail-modal");
      const title = document.getElementById("detail-modal-title");
      const meta = document.getElementById("detail-modal-meta");
      const body = document.getElementById("detail-modal-body");

      title.textContent = `${item.role} — ${item.institution}`;
      meta.textContent = `Periode: ${item.year}`;

      let bulletPoints = (item.details || []).map(d => `
        <li class="flex items-start gap-2.5">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-accent-cyan mt-1 flex-shrink-0"></i>
          <span>${d}</span>
        </li>
      `).join("");

      body.innerHTML = `
        <div class="space-y-4">
          <div class="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p class="text-xs font-mono uppercase text-slate-400 mb-1">Ringkasan Peran:</p>
            <p class="text-sm text-white font-medium">${item.shortDesc}</p>
          </div>

          <div class="space-y-2">
            <p class="text-xs font-mono uppercase text-accent-cyan font-bold">Rincian Sesuai CV Resmi:</p>
            <ul class="space-y-2.5 text-slate-300 text-xs sm:text-sm">
              ${bulletPoints}
            </ul>
          </div>

          <div class="p-3 rounded-xl bg-blue-500/10 border border-blue-400/20 text-xs text-blue-300 flex items-center gap-2">
            <i data-lucide="shield-check" class="w-4 h-4 flex-shrink-0"></i>
            <span>Data terverifikasi dan sesuai dengan dokumen Curriculum Vitae Naily Rosyada Darojat.</span>
          </div>
        </div>
      `;

      modal.classList.remove("hidden");
      modal.classList.add("flex");
      if (window.lucide) lucide.createIcons();
    };

    // ══════════════════════════════════════════════════════════════════════
    // 10. RENDER SKILLS PROGRESS BARS
    // ══════════════════════════════════════════════════════════════════════
    function initSkills() {
      const skillElements = document.querySelectorAll(".skill-item");
      skillElements.forEach(el => {
        const name = el.getAttribute("data-name");
        const percent = el.getAttribute("data-percent");

        el.innerHTML = `
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="font-medium text-slate-200">${name}</span>
            <span class="font-mono text-accent-cyan font-bold">${percent}%</span>
          </div>
          <div class="w-full h-2 rounded-full bg-navy-950 border border-white/5 overflow-hidden">
            <div class="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-1000 ease-out" style="width: 0%" data-target-width="${percent}%"></div>
          </div>
        `;
      });

      setTimeout(() => {
        document.querySelectorAll("[data-target-width]").forEach(bar => {
          bar.style.width = bar.getAttribute("data-target-width");
        });
      }, 250);
    }

    // ══════════════════════════════════════════════════════════════════════
    // 11. RENDER CERTIFICATES (GUARANTEED VISIBLE HIGH-RES PIAGAM IMAGES)
    // ══════════════════════════════════════════════════════════════════════
    let currentCertCategory = "all";
    let currentZoomLevel = 1;
    let activeCertModalItem = null;

    function renderCertificates() {
      const grid = document.getElementById("certificates-grid");
      if (!grid) return;

      const items = appState.certificates.filter(c => {
        if (currentCertCategory === "all") return true;
        return c.level === currentCertCategory;
      });

      grid.innerHTML = "";

      items.forEach(cert => {
        const card = document.createElement("div");
        card.className = "glass-card rounded-3xl border border-white/10 overflow-hidden p-5 flex flex-col justify-between hover:border-amber-400/50 transition-all hover:-translate-y-1 shadow-xl group";

        // Generate guaranteed high-resolution SVG certificate data URL
        const fallbackSvgUrl = window.generateCertificateVisualDataUrl(cert);
        const primaryImgSrc = cert.image ? cert.image : fallbackSvgUrl;

        card.innerHTML = `
          <div class="space-y-4">
            <div onclick="openCertificateModal('${cert.id}')" class="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-lg relative group-hover:scale-[1.02] transition-transform bg-navy-950 flex items-center justify-center cursor-pointer">
              <img src="${primaryImgSrc}" 
                   alt="${cert.title}" 
                   onerror="this.onerror=null; this.src='${fallbackSvgUrl}';"
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent flex items-end justify-between p-3">
                <span class="text-[10px] font-mono text-amber-300 font-bold bg-navy-950/90 px-2.5 py-1 rounded-lg border border-amber-400/30 flex items-center gap-1">
                  <i data-lucide="check-circle-2" class="w-3 h-3 text-emerald-400"></i> Piagam Terverifikasi
                </span>
                <span class="p-1.5 rounded-lg bg-navy-950/80 text-white border border-white/15">
                  <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
                </span>
              </div>
            </div>

            <div class="space-y-1.5">
              <div class="flex items-center justify-between gap-2">
                <span class="px-2.5 py-0.5 rounded-md ${cert.badgeColor} border text-[10px] font-mono font-bold">${cert.levelBadge}</span>
                <span class="text-xs font-mono font-bold text-amber-300">${cert.year}</span>
              </div>
              <h4 onclick="openCertificateModal('${cert.id}')" class="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-2">${cert.title}</h4>
              <p class="text-[11px] text-blue-300 font-medium line-clamp-1">${cert.organizer}</p>
              <p class="text-xs text-slate-400 line-clamp-2">${cert.description}</p>
            </div>
          </div>

          <div class="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2">
            <button onclick="openCertificateModal('${cert.id}')" class="flex-1 py-2.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/30 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all">
              <i data-lucide="zoom-in" class="w-3.5 h-3.5"></i>
              <span>Lihat Piagam Penuh</span>
            </button>
            <button onclick="downloadCertificateDirect('${cert.id}')" title="Unduh Sertifikat" class="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all">
              <i data-lucide="download" class="w-4 h-4"></i>
            </button>
          </div>
        `;

        grid.appendChild(card);
      });

      if (window.lucide) lucide.createIcons();
    }

    window.openCertificateModal = function(id) {
      const cert = appState.certificates.find(c => c.id === id);
      if (!cert) return;

      activeCertModalItem = cert;
      currentZoomLevel = 1;

      const modal = document.getElementById("cert-modal");
      const title = document.getElementById("cert-modal-title");
      const meta = document.getElementById("cert-modal-meta");
      const canvasWrap = document.getElementById("cert-modal-canvas-wrapper");

      title.textContent = cert.title;
      meta.textContent = `${cert.organizer} • Tahun ${cert.year} • ${cert.levelBadge}`;

      canvasWrap.style.transform = `scale(${currentZoomLevel})`;

      const fallbackSvgUrl = window.generateCertificateVisualDataUrl(cert);
      const primaryImgSrc = cert.image ? cert.image : fallbackSvgUrl;

      canvasWrap.innerHTML = `
        <div class="max-w-3xl w-full rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-2xl bg-navy-900 flex flex-col items-center">
          <img src="${primaryImgSrc}" 
               alt="${cert.title}" 
               onerror="this.onerror=null; this.src='${fallbackSvgUrl}';"
               class="w-full h-auto max-h-[66vh] object-contain bg-white" />
          <div class="w-full p-4 bg-navy-900 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300">
            <div>
              <p class="font-bold text-white">${cert.title}</p>
              <p class="text-slate-400">${cert.organizer} (${cert.nomorSurat || 'Terverifikasi'})</p>
            </div>
            <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono text-[11px] self-start sm:self-center">
              ✓ Dokumen Sesuai CV Resmi
            </span>
          </div>
        </div>
      `;

      modal.classList.remove("hidden");
      modal.classList.add("flex");
      if (window.lucide) lucide.createIcons();
    };

    window.downloadCertificateDirect = function(id) {
      const cert = appState.certificates.find(c => c.id === id);
      if (!cert) return;

      const svgDataUrl = window.generateCertificateVisualDataUrl(cert);
      const a = document.createElement("a");
      a.href = svgDataUrl;
      a.download = `Piagam_${cert.title.replace(/[^a-zA-Z0-9]+/g, "_")}_Naily_Rosyada.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      showToast(`Piagam "${cert.title}" berhasil diunduh!`, "success");
    };

    // ══════════════════════════════════════════════════════════════════════
    // 12. MY DOCUMENTS (FILE EXPLORER) & INTERACTIVE 2-PAGE CV READER
    // ══════════════════════════════════════════════════════════════════════
    let currentDocFilter = "all";
    let documentSearchQuery = "";
    let isDocGridView = true;
    let activePDFDoc = null;
    let currentPDFPage = 1;

    function renderDocuments() {
      const container = document.getElementById("documents-container");
      const counter = document.getElementById("doc-counter");
      if (!container) return;

      const docs = appState.documents.filter(doc => {
        if (currentDocFilter === "cv" && doc.category !== "cv") return false;
        if (currentDocFilter === "academic" && doc.category !== "academic") return false;
        if (currentDocFilter === "organization" && doc.category !== "organization") return false;

        if (documentSearchQuery) {
          const q = documentSearchQuery.toLowerCase();
          return doc.name.toLowerCase().includes(q) || doc.description.toLowerCase().includes(q);
        }
        return true;
      });

      if (counter) counter.textContent = `${docs.length} Berkas`;

      container.innerHTML = "";

      if (docs.length === 0) {
        container.className = "w-full text-center py-12";
        container.innerHTML = `
          <div class="text-slate-400 space-y-2">
            <i data-lucide="file-question" class="w-12 h-12 mx-auto text-slate-500"></i>
            <p class="text-sm">Tidak ada berkas yang cocok dengan pencarian "${documentSearchQuery}".</p>
          </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
      }

      if (isDocGridView) {
        container.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";
        docs.forEach(doc => {
          const card = document.createElement("div");
          card.className = "doc-item-grid group";
          const badgeColors = doc.type === "DOCX" ? "bg-indigo-500/20 text-indigo-300 border-indigo-400/30" : "bg-blue-500/20 text-accent-cyan border-blue-500/30";
          card.innerHTML = `
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="w-11 h-10 rounded-xl ${badgeColors} flex items-center justify-center font-bold text-xs border">
                  ${doc.type}
                </div>
                <span class="text-[10px] font-mono text-slate-400">${doc.size} • ${doc.date}</span>
              </div>

              <div>
                <h5 class="text-xs sm:text-sm font-bold text-white group-hover:text-accent-cyan transition-colors line-clamp-1" title="${doc.name}">${doc.name}</h5>
                <p class="text-[11px] text-slate-400 mt-1 line-clamp-2">${doc.description}</p>
              </div>
            </div>

            <div class="pt-3 mt-3 border-t border-white/10 flex items-center justify-between gap-2">
              <button onclick="openPDFViewer('${doc.id}')" class="flex-1 py-2 px-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 text-accent-cyan font-bold text-xs flex items-center justify-center gap-1.5 transition-all">
                <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                <span>Buka Dokumen</span>
              </button>
              <button onclick="downloadDocumentDirect('${doc.id}')" title="Unduh Berkas" class="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all">
                <i data-lucide="download" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          `;
          container.appendChild(card);
        });
      } else {
        container.className = "space-y-2";
        docs.forEach(doc => {
          const item = document.createElement("div");
          item.className = "doc-item-list";
          item.innerHTML = `
            <div class="flex items-center gap-3">
              <div class="w-10 h-9 rounded-lg bg-blue-500/20 text-accent-cyan flex items-center justify-center font-bold text-xs">
                ${doc.type}
              </div>
              <div>
                <h5 class="text-xs sm:text-sm font-bold text-white hover:text-accent-cyan cursor-pointer transition-colors" onclick="openPDFViewer('${doc.id}')">${doc.name}</h5>
                <p class="text-[11px] text-slate-400">${doc.categoryName} • ${doc.size} • ${doc.date}</p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="openPDFViewer('${doc.id}')" class="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-accent-cyan text-xs font-semibold flex items-center gap-1">
                <i data-lucide="eye" class="w-3.5 h-3.5"></i> Preview
              </button>
              <button onclick="downloadDocumentDirect('${doc.id}')" class="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white">
                <i data-lucide="download" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          `;
          container.appendChild(item);
        });
      }

      if (window.lucide) lucide.createIcons();
    }

    window.openPDFViewer = function(id) {
      const doc = appState.documents.find(d => d.id === id);
      if (!doc) return;

      activePDFDoc = doc;
      currentPDFPage = 1;

      const modal = document.getElementById("pdf-viewer-modal");
      const title = document.getElementById("pdf-modal-title");
      const sizeMeta = document.getElementById("pdf-modal-size");
      const indicator = document.getElementById("pdf-page-indicator");

      title.textContent = doc.name;
      sizeMeta.textContent = `${doc.size} • Format ${doc.type} Terverifikasi • ${doc.date}`;
      indicator.textContent = `Hal ${currentPDFPage} / 2`;

      renderPDFPageContent();

      modal.classList.remove("hidden");
      modal.classList.add("flex");
      if (window.lucide) lucide.createIcons();
    };

    function renderPDFPageContent() {
      const paper = document.getElementById("pdf-paper-document");
      if (!paper || !activePDFDoc) return;

      if (activePDFDoc.isPrimaryCV || activePDFDoc.category === "cv") {
        if (currentPDFPage === 1) {
          paper.innerHTML = `
            <div class="space-y-6 font-sans">
              <!-- CV Header (Exact as file) -->
              <div class="border-b-2 border-slate-900 pb-4 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-950 uppercase tracking-tight">NAILY ROSYADA DAROJAT</h1>
                  <p class="text-xs sm:text-sm font-semibold text-slate-700 mt-1">087791166318 | darojatdorojat@gmail.com | Batang, Jawa Tengah</p>
                </div>
                <span class="px-3 py-1 rounded-lg bg-slate-900 text-white font-mono text-xs font-bold self-center sm:self-start">Fisika Undip 2026</span>
              </div>

              <!-- Latar Belakang Pendidikan -->
              <div class="space-y-2">
                <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 bg-slate-100 p-2 rounded">Latar Belakang Pendidikan</h3>
                <div class="space-y-3 pt-1 text-xs sm:text-sm text-slate-800">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-bold text-slate-950">SMA Negeri 1 Gringsing</h4>
                      <p class="font-semibold text-slate-700">Jurusan IPA</p>
                      <ul class="list-disc list-inside space-y-0.5 mt-1 text-slate-700">
                        <li>Nilai Akhir : <strong>93,73</strong></li>
                        <li>Peraih peringkat 1 besar di kelas selama 6 semester berturut-turut</li>
                        <li>Lulusan siswa terbaik 1 di sekolah</li>
                      </ul>
                    </div>
                    <span class="font-mono font-bold text-slate-700">2023 – 2026</span>
                  </div>

                  <div class="flex justify-between items-start pt-2 border-t border-slate-200">
                    <div>
                      <h4 class="font-bold text-slate-950">Nama Kampus : Universitas Diponegoro</h4>
                      <p class="text-slate-700 font-semibold">Jurusan / Program Studi : Fisika (S1)</p>
                      <p class="text-slate-600 text-xs mt-0.5">Minat Kompetisi: ONMIPA-PT, Lomba Karya Tulis Ilmiah (LKTI), Artikel Ilmiah, Essay & PKM</p>
                    </div>
                    <span class="font-mono font-bold text-slate-700">2026</span>
                  </div>
                </div>
              </div>

              <!-- Prestasi Akademik dan Non-Akademik -->
              <div class="space-y-2">
                <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 bg-slate-100 p-2 rounded">Prestasi Akademik dan Non-Akademik</h3>
                <ul class="text-xs sm:text-sm text-slate-800 space-y-1.5 pt-1">
                  <li>● <strong>[2026]</strong> Lulusan Terbaik SMA Negeri 1 Gringsing – Tingkat Sekolah</li>
                  <li>● <strong>[2025]</strong> Peringkat 7 Olimpiade Sains Nasional (OSN) Cabang Fisika – Tingkat Kabupaten</li>
                  <li>● <strong>[2025]</strong> Juara Harapan 3 Lomba Cepat Tepat OPI Fakultas Pertanian IPB – Tingkat Nasional</li>
                  <li>● <strong>[2025]</strong> Juara 3 Lomba Mendongeng Berbahasa Jawa – Tingkat Provinsi</li>
                  <li>● <strong>[2025]</strong> Juara 1 Lomba Story Telling Islami – Tingkat Sekolah</li>
                  <li>● <strong>[2024]</strong> Peringkat 7 Olimpiade Sains Nasional (OSN) Cabang Ekonomi – Tingkat Kabupaten</li>
                </ul>
              </div>

              <!-- Footer Hal 1 -->
              <div class="pt-6 border-t border-slate-300 flex justify-between items-center text-[11px] text-slate-500 font-mono">
                <span>Curriculum Vitae Resmi — Naily Rosyada Darojat</span>
                <button onclick="document.getElementById('pdf-next-page').click()" class="text-blue-700 font-bold hover:underline">Lanjut ke Halaman 2 →</button>
              </div>
            </div>
          `;
        } else {
          paper.innerHTML = `
            <div class="space-y-5 font-sans">
              <div class="border-b border-slate-300 pb-2 flex justify-between items-center">
                <h2 class="text-sm sm:text-base font-bold text-slate-900 uppercase">Curriculum Vitae (Lanjutan — Halaman 2)</h2>
                <button onclick="document.getElementById('pdf-prev-page').click()" class="text-xs font-mono text-blue-700 font-bold hover:underline">← Kembali Hal 1</button>
              </div>

              <!-- Pengalaman Organisasi -->
              <div class="space-y-2">
                <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 bg-slate-100 p-2 rounded">Pengalaman Organisasi</h3>
                <div class="space-y-3 pt-1 text-xs text-slate-800">
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-bold text-slate-950">Majelis Perwakilan Kelas (MPK)</h4>
                      <p class="font-semibold text-slate-700">Wakil Ketua</p>
                      <ul class="list-disc list-inside space-y-0.5 mt-1 text-slate-700">
                        <li>Mendampingi Ketua MPK dalam memimpin organisasi</li>
                        <li>Mengambil alih kepemimpinan jika ketua berhalangan hadir</li>
                      </ul>
                    </div>
                    <span class="font-mono font-bold text-slate-700">2023 – 2024</span>
                  </div>

                  <div class="flex justify-between items-start pt-2 border-t border-slate-200">
                    <div>
                      <h4 class="font-bold text-slate-950">Majelis Perwakilan Kelas (MPK)</h4>
                      <p class="font-semibold text-slate-700">Ketua</p>
                      <ul class="list-disc list-inside space-y-0.5 mt-1 text-slate-700">
                        <li>Memimpin Organisasi dalam mengawasi kinerja OSIS</li>
                        <li>Menampung dan menyalurkan aspirasi siswa</li>
                      </ul>
                    </div>
                    <span class="font-mono font-bold text-slate-700">2024 – 2025</span>
                  </div>

                  <div class="flex justify-between items-start pt-2 border-t border-slate-200">
                    <div>
                      <h4 class="font-bold text-slate-950">Palang Merah Remaja (PMR)</h4>
                      <p class="font-semibold text-slate-700">Sekbid Kesehatan</p>
                      <ul class="list-disc list-inside space-y-0.5 mt-1 text-slate-700">
                        <li>Penyediaan Pertolongan Pertama (PP)</li>
                        <li>Pengelola Unit Kesehatan Sekolah (UKS)</li>
                      </ul>
                    </div>
                    <span class="font-mono font-bold text-slate-700">2023 – 2024 & 2024 – 2025</span>
                  </div>
                </div>
              </div>

              <!-- Keterampilan dan Sertifikasi -->
              <div class="space-y-2">
                <h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 bg-slate-100 p-2 rounded">Keterampilan, Kepenulisan Ilmiah & Sertifikasi</h3>
                <div class="text-xs text-slate-800 space-y-1.5 pt-1">
                  <p>● <strong>Bahasa :</strong> Bahasa Indonesia (lisan & tulisan), Bahasa Jawa (lisan & tulisan), Bahasa Inggris (lisan & tulisan)</p>
                  <p>● <strong>Keterampilan Komputer, DOCX & Statistik :</strong> Microsoft Office (khususnya Microsoft Word / DOCX tingkat lanjut untuk pembuatan Karya Tulis Ilmiah / KTI, Artikel Ilmiah, Essay Akademik, dan Proposal PKM) serta <strong>Olah Data SPSS</strong>.</p>
                  <p>● <strong>Keterampilan Lain :</strong> Hard Skill (Public Speaking, Master Of Ceremony (MC), Story Telling Islami, Dakwah, Puisi, Announcement Voice), Soft Skill (Kepemimpinan, Komunikasi, Kerja sama tim, Manajemen waktu, Tanggung jawab, Adaptabilitas, Problem solving)</p>
                  <div class="pt-1">
                    <p class="font-bold text-slate-900">● Sertifikasi Resmi :</p>
                    <ul class="list-disc list-inside pl-2 space-y-0.5 text-slate-700 mt-0.5">
                      <li>[2026] Sertifikat Lulusan Terbaik SMA Negeri 1 Gringsing – Tingkat Sekolah</li>
                      <li>[2025] Sertifikat Peringkat 7 Olimpiade Sains Nasional (OSN) Cabang Fisika – Tingkat Kabupaten</li>
                      <li>[2025] Sertifikat Juara Harapan 3 Lomba Cepat Tepat OPI Fakultas Pertanian IPB – Tingkat Nasional</li>
                      <li>[2025] Sertifikat Juara 3 Lomba Mendongeng Berbahasa Jawa – Tingkat Provinsi</li>
                      <li>[2025] Sertifikat Juara 1 Lomba Story Telling Islami – Tingkat Sekolah</li>
                      <li>[2024] Sertifikat Peringkat 7 Olimpiade Sains Nasional (OSN) Cabang Ekonomi – Tingkat Kabupaten</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Footer Hal 2 -->
              <div class="pt-4 border-t border-slate-300 flex justify-between text-[11px] text-slate-500 font-mono">
                <span>Curriculum Vitae Resmi — Naily Rosyada Darojat</span>
                <span>Halaman 2 dari 2</span>
              </div>
            </div>
          `;
        }
      } else {
        paper.innerHTML = `
          <div class="space-y-6">
            <div class="border-b-2 border-slate-900 pb-4 text-center">
              <h2 class="text-xl sm:text-2xl font-bold uppercase text-slate-950">${activePDFDoc.name}</h2>
              <p class="text-xs text-slate-600 font-mono mt-1">${activePDFDoc.categoryName} • Arsip Resmi Terverifikasi</p>
            </div>

            <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-3">
              <p class="font-bold text-slate-900">Deskripsi Dokumen:</p>
              <p class="leading-relaxed">${activePDFDoc.description}</p>
              <div class="pt-2">
                <span class="inline-block px-3 py-1 rounded bg-blue-100 text-blue-900 text-xs font-mono font-bold">
                  Ukuran: ${activePDFDoc.size} • Format: ${activePDFDoc.type} • Status: Asli Terverifikasi
                </span>
              </div>
            </div>

            <div class="p-8 border-2 border-dashed border-slate-300 rounded-2xl text-center space-y-3">
              <i data-lucide="file-check-2" class="w-12 h-12 text-emerald-600 mx-auto"></i>
              <h4 class="font-bold text-slate-900 text-base">Salinan Digital Resmi Naily Rosyada Darojat</h4>
              <p class="text-xs text-slate-600 max-w-md mx-auto">
                Dokumen ini diarsipkan secara digital untuk keperluan verifikasi akademik, pendaftaran ONMIPA-PT, LKTI, PKM, dan validasi portofolio.
              </p>
              <button onclick="downloadDocumentDirect('${activePDFDoc.id}')" class="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs inline-flex items-center gap-2">
                <i data-lucide="download" class="w-4 h-4"></i> Unduh Berkas Sekarang (${activePDFDoc.size})
              </button>
            </div>
          </div>
        `;
      }

      if (window.lucide) lucide.createIcons();
    }

    window.downloadDocumentDirect = function(id) {
      const doc = appState.documents.find(d => d.id === id);
      if (!doc) return;

      const content = `========================================================================
CURRICULUM VITAE RESMI — NAILY ROSYADA DAROJAT
087791166318 | darojatdorojat@gmail.com | Batang, Jawa Tengah
Instagram: @nai.r.d | LinkedIn: @nailyrosyadadarojat
========================================================================

LATAR BELAKANG PENDIDIKAN
1. Universitas Diponegoro (2026 – Sekarang)
   Jurusan / Program Studi : S1 Fisika
   Fokus & Minat Kompetisi : ONMIPA-PT, Lomba Karya Tulis Ilmiah (LKTI), Artikel Ilmiah, Essay, dan PKM

2. SMA Negeri 1 Gringsing (2023 – 2026)
   Jurusan IPA
   - Nilai Akhir : 93,73
   - Peraih peringkat 1 besar di kelas selama 6 semester berturut-turut
   - Lulusan siswa terbaik 1 di sekolah

PRESTASI AKADEMIK DAN NON-AKADEMIK
- [2026] Lulusan Terbaik SMA Negeri 1 Gringsing – Tingkat Sekolah
- [2025] Peringkat 7 Olimpiade Sains Nasional (OSN) Cabang Fisika – Tingkat Kabupaten
- [2025] Juara Harapan 3 Lomba Cepat Tepat OPI Fakultas Pertanian IPB – Tingkat Nasional
- [2025] Juara 3 Lomba Mendongeng Berbahasa Jawa – Tingkat Provinsi
- [2025] Juara 1 Lomba Story Telling Islami – Tingkat Sekolah
- [2024] Peringkat 7 Olimpiade Sains Nasional (OSN) Cabang Ekonomi – Tingkat Kabupaten

PENGALAMAN ORGANISASI
1. Majelis Perwakilan Kelas (MPK) — Wakil Ketua (2023 – 2024)
   - Mendampingi Ketua MPK dalam memimpin organisasi
   - Mengambil alih kepemimpinan jika ketua berhalangan hadir

2. Majelis Perwakilan Kelas (MPK) — Ketua (2024 – 2025)
   - Memimpin Organisasi dalam mengawasi kinerja OSIS
   - Menampung dan menyalurkan aspirasi siswa

3. Palang Merah Remaja (PMR) — Sekbid Kesehatan (2023 – 2024 & 2024 – 2025)
   - Penyediaan Pertolongan Pertama (PP)
   - Pengelola Unit Kesehatan Sekolah (UKS)

KETERAMPILAN DAN SERTIFIKASI
- Bahasa : Bahasa Indonesia (lisan & tulisan), Bahasa Jawa (lisan & tulisan), Bahasa Inggris (lisan & tulisan)
- Keterampilan Komputer, DOCX & Statistik : Microsoft Office, keahlian khusus Microsoft Word (DOCX) dalam menyusun Karya Tulis Ilmiah (KTI), Artikel Ilmiah, Essay Akademik, dan Proposal PKM, serta Olah Data SPSS.
- Hard Skill : Penulisan KTI/Artikel/Essay, Olah Data SPSS, Public Speaking, Master Of Ceremony (MC), Story Telling Islami, Dakwah, Puisi, Announcement Voice
- Soft Skill : Kepemimpinan, Komunikasi, Kerja sama tim, Manajemen waktu, Tanggung jawab, Adaptabilitas, Problem solving
========================================================================`;

      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = doc.name.replace(/\.(pdf|docx|jpg)$/i, "") + ".txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showToast(`Dokumen "${doc.name}" berhasil diunduh!`, "success");
    };

    // ══════════════════════════════════════════════════════════════════════
    // 14. CONTACT FORM SUBMISSION
    // ══════════════════════════════════════════════════════════════════════
    function initContactForm() {
      const form = document.getElementById("contact-form");
      if (!form) return;

      form.addEventListener("submit", e => {
        e.preventDefault();

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const subject = document.getElementById("contact-subject").value;
        const message = document.getElementById("contact-message").value.trim();

        if (!name || !email || !message) {
          showToast("Mohon lengkapi semua kolom formulir!", "error");
          return;
        }

        const newMessage = {
          id: "msg-" + Date.now(),
          name,
          email,
          subject,
          message,
          timestamp: new Date().toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" }),
          read: false
        };

        appState.messages.unshift(newMessage);
        saveAppState();

        form.reset();
        showToast("Pesan Anda berhasil dikirim dan tersimpan di Inbox Naily!", "success");

        updateAdminStats();
      });
    }

    // ══════════════════════════════════════════════════════════════════════
    // 15. ADMIN DASHBOARD & LIVE CMS (NO NATIVE ALERT / CONFIRM / PROMPT)
    // ══════════════════════════════════════════════════════════════════════
    let isAdminLoggedIn = false;

    function initAdminPortal() {
      const adminModal = document.getElementById("admin-modal");
      const loginForm = document.getElementById("admin-login-form");
      const loginView = document.getElementById("admin-login-view");
      const dashboardView = document.getElementById("admin-dashboard-view");
      const logoutBtn = document.getElementById("admin-logout-btn");
      const resetBtn = document.getElementById("admin-reset-btn");

      const openModal = () => {
        adminModal.classList.remove("hidden");
        adminModal.classList.add("flex");
        if (isAdminLoggedIn) {
          loginView.classList.add("hidden");
          dashboardView.classList.remove("hidden");
          renderAdminDashboard();
        } else {
          loginView.classList.remove("hidden");
          dashboardView.classList.add("hidden");
        }
      };

      document.getElementById("admin-modal-btn")?.addEventListener("click", openModal);
      document.getElementById("footer-admin-btn")?.addEventListener("click", openModal);

      document.getElementById("admin-modal-close")?.addEventListener("click", () => {
        adminModal.classList.add("hidden");
        adminModal.classList.remove("flex");
      });

      loginForm?.addEventListener("submit", e => {
        e.preventDefault();
        const pin = document.getElementById("admin-pin-input").value.trim();
        if (pin === "311808") {
          isAdminLoggedIn = true;
          loginView.classList.add("hidden");
          dashboardView.classList.remove("hidden");
          showToast("Selamat datang di Admin Management Portal!", "success");
          renderAdminDashboard();
        } else {
          showToast("Kode PIN Admin tidak sesuai!", "error");
        }
      });

      logoutBtn?.addEventListener("click", () => {
        isAdminLoggedIn = false;
        loginView.classList.remove("hidden");
        dashboardView.classList.add("hidden");
        showToast("Anda telah keluar dari mode Admin.", "info");
      });

      resetBtn?.addEventListener("click", () => {
        appState = JSON.parse(JSON.stringify(INITIAL_DATA));
        saveAppState();
        renderAll();
        renderAdminDashboard();
        showToast("Data portofolio telah dikembalikan ke data resmi CV Naily!", "success");
      });

      document.querySelectorAll(".admin-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

          const tabId = btn.getAttribute("data-tab");
          document.querySelectorAll(".admin-tab-pane").forEach(pane => pane.classList.add("hidden"));
          document.getElementById(`tab-${tabId}`)?.classList.remove("hidden");
        });
      });

      document.getElementById("admin-profile-form")?.addEventListener("submit", e => {
        e.preventDefault();
        appState.profile.fullName = document.getElementById("edit-name").value;
        appState.profile.campus = document.getElementById("edit-status").value;
        appState.profile.email = document.getElementById("edit-email").value;
        appState.profile.socials.instagram = "https://instagram.com/" + document.getElementById("edit-ig").value.replace('@', '');
        appState.profile.socials.instagramHandle = document.getElementById("edit-ig").value;
        appState.profile.socials.linkedin = "https://linkedin.com/in/" + document.getElementById("edit-linkedin").value.replace('@', '');
        appState.profile.socials.linkedinHandle = document.getElementById("edit-linkedin").value;
        appState.profile.photoUrl = document.getElementById("edit-photo").value;
        appState.profile.bio = document.getElementById("edit-bio").value;

        saveAppState();
        renderProfile();
        showToast("Profil berhasil diperbarui secara langsung!", "success");
      });

      // Inline Certificate Form Handler
      document.getElementById("admin-inline-cert-form")?.addEventListener("submit", e => {
        e.preventDefault();
        const title = document.getElementById("new-cert-title").value.trim();
        const organizer = document.getElementById("new-cert-org").value.trim();
        const level = document.getElementById("new-cert-level").value;
        if (!title || !organizer) return;

        const newCert = {
          id: "cert-" + Date.now(),
          title,
          organizer,
          year: "2026",
          nomorSurat: "Piagam Resmi Terverifikasi",
          level,
          levelBadge: `Tingkat ${level.charAt(0).toUpperCase() + level.slice(1)}`,
          badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
          description: `Piagam penghargaan resmi atas prestasi sebagai ${title} yang diselenggarakan oleh ${organizer}.`,
          image: null,
          fileFormat: "Piagam Digital",
          fileSize: "120 KB"
        };

        appState.certificates.unshift(newCert);
        saveAppState();
        renderCertificates();
        renderAdminCertificatesList();
        updateAdminStats();
        e.target.reset();
        showToast("Sertifikat baru berhasil ditambahkan!", "success");
      });

      // Inline Document Form Handler
      document.getElementById("admin-inline-doc-form")?.addEventListener("submit", e => {
        e.preventDefault();
        const name = document.getElementById("new-doc-name").value.trim();
        const desc = document.getElementById("new-doc-desc").value.trim();
        if (!name || !desc) return;

        const ext = name.split(".").pop().toUpperCase();
        const type = ["PDF", "DOCX", "JPG"].includes(ext) ? ext : "DOCX";

        const newDoc = {
          id: "doc-" + Date.now(),
          name,
          category: "cv",
          categoryName: "Karya Ilmiah / Dokumen",
          type,
          size: "280 KB",
          date: "2026",
          description: desc
        };

        appState.documents.unshift(newDoc);
        saveAppState();
        renderDocuments();
        renderAdminDocumentsList();
        updateAdminStats();
        e.target.reset();
        showToast("Berkas dokumen baru berhasil ditambahkan!", "success");
      });
    }

    function updateAdminStats() {
      const msgEl = document.getElementById("stat-messages");
      const certEl = document.getElementById("stat-certs");
      const docEl = document.getElementById("stat-docs");
      const badgeEl = document.getElementById("admin-inbox-badge");

      if (msgEl) msgEl.textContent = appState.messages.length;
      if (certEl) certEl.textContent = appState.certificates.length;
      if (docEl) docEl.textContent = appState.documents.length;
      if (badgeEl) badgeEl.textContent = appState.messages.filter(m => !m.read).length;
    }

    function renderAdminDashboard() {
      updateAdminStats();

      const p = appState.profile;
      const editName = document.getElementById("edit-name");
      if (editName) {
        editName.value = p.fullName;
        document.getElementById("edit-status").value = p.campus;
        document.getElementById("edit-email").value = p.email;
        document.getElementById("edit-ig").value = p.socials.instagramHandle || "@nai.r.d";
        document.getElementById("edit-linkedin").value = p.socials.linkedinHandle || "@nailyrosyadadarojat";
        document.getElementById("edit-photo").value = p.photoUrl;
        document.getElementById("edit-bio").value = p.bio;
      }

      renderAdminMessagesList();
      renderAdminCertificatesList();
      renderAdminDocumentsList();
    }

    function renderAdminMessagesList() {
      const container = document.getElementById("admin-messages-list");
      if (!container) return;

      if (appState.messages.length === 0) {
        container.innerHTML = `<p class="text-xs text-slate-400 py-6 text-center">Belum ada pesan kontak masuk.</p>`;
        return;
      }

      container.innerHTML = "";
      appState.messages.forEach(msg => {
        const card = document.createElement("div");
        card.className = "p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs";
        card.innerHTML = `
          <div class="flex items-center justify-between">
            <span class="font-bold text-white text-sm">${msg.name}</span>
            <span class="text-[10px] font-mono text-slate-400">${msg.timestamp}</span>
          </div>
          <p class="text-accent-cyan font-semibold">Subjek: ${msg.subject}</p>
          <p class="text-slate-300 leading-relaxed">${msg.message}</p>
          <div class="pt-2 flex items-center justify-between border-t border-white/5">
            <span class="text-slate-400 font-mono">${msg.email}</span>
            <div class="flex items-center gap-3">
              <a href="mailto:${msg.email}?subject=Balasan: ${encodeURIComponent(msg.subject)}" class="text-blue-400 hover:underline font-semibold">Balas Email</a>
              <button onclick="deleteAdminMessage('${msg.id}')" class="text-rose-400 hover:underline font-semibold">Hapus</button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }

    window.deleteAdminMessage = function(id) {
      appState.messages = appState.messages.filter(m => m.id !== id);
      saveAppState();
      renderAdminMessagesList();
      updateAdminStats();
      showToast("Pesan telah dihapus dari inbox.", "info");
    };

    function renderAdminCertificatesList() {
      const container = document.getElementById("admin-cert-items");
      if (!container) return;

      container.innerHTML = "";
      appState.certificates.forEach(c => {
        const item = document.createElement("div");
        item.className = "p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs";
        item.innerHTML = `
          <div>
            <h5 class="font-bold text-white">${c.title}</h5>
            <p class="text-slate-400">${c.organizer} • ${c.year} • ${c.levelBadge}</p>
          </div>
          <button onclick="deleteAdminCert('${c.id}')" class="text-rose-400 hover:underline font-semibold ml-3">Hapus</button>
        `;
        container.appendChild(item);
      });
    }

    window.deleteAdminCert = function(id) {
      appState.certificates = appState.certificates.filter(c => c.id !== id);
      saveAppState();
      renderCertificates();
      renderAdminCertificatesList();
      updateAdminStats();
      showToast("Sertifikat berhasil dihapus.", "info");
    };

    function renderAdminDocumentsList() {
      const container = document.getElementById("admin-doc-items");
      if (!container) return;

      container.innerHTML = "";
      appState.documents.forEach(d => {
        const item = document.createElement("div");
        item.className = "p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs";
        item.innerHTML = `
          <div>
            <h5 class="font-bold text-white">${d.name}</h5>
            <p class="text-slate-400">${d.categoryName} • ${d.size}</p>
          </div>
          <button onclick="deleteAdminDoc('${d.id}')" class="text-rose-400 hover:underline font-semibold ml-3">Hapus</button>
        `;
        container.appendChild(item);
      });
    }

    window.deleteAdminDoc = function(id) {
      appState.documents = appState.documents.filter(d => d.id !== id);
      saveAppState();
      renderDocuments();
      renderAdminDocumentsList();
      updateAdminStats();
      showToast("Dokumen berhasil dihapus.", "info");
    };

    // ══════════════════════════════════════════════════════════════════════
    // 16. THEME TOGGLE (DARK / LIGHT MODE)
    // ══════════════════════════════════════════════════════════════════════
    function initThemeToggle() {
      const toggleBtn = document.getElementById("theme-toggle");
      if (!toggleBtn) return;

      const savedTheme = localStorage.getItem("NAILY_PORTFOLIO_THEME") || "dark";
      if (savedTheme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }

      toggleBtn.addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("NAILY_PORTFOLIO_THEME", isDark ? "dark" : "light");
        showToast(`Mode ${isDark ? "Gelap (Dark Mode)" : "Terang (Light Mode)"} diaktifkan`, "info");
      });
    }

    // ══════════════════════════════════════════════════════════════════════
    // 17. NAVIGATION & MODALS EVENT BINDINGS
    // ══════════════════════════════════════════════════════════════════════
    function initEventListeners() {
      const mobileBtn = document.getElementById("mobile-menu-btn");
      const mobileDrawer = document.getElementById("mobile-drawer");
      const hamburgerIcon = document.getElementById("hamburger-icon");
      const closeIcon = document.getElementById("close-icon");

      mobileBtn?.addEventListener("click", () => {
        const isHidden = mobileDrawer.classList.toggle("hidden");
        hamburgerIcon.classList.toggle("hidden", !isHidden);
        closeIcon.classList.toggle("hidden", isHidden);
      });

      document.querySelectorAll(".mobile-nav-link").forEach(link => {
        link.addEventListener("click", () => {
          mobileDrawer.classList.add("hidden");
          hamburgerIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");
        });
      });

      document.querySelectorAll(".timeline-filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".timeline-filter-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          currentTimelineCategory = btn.getAttribute("data-category");
          renderTimeline();
        });
      });

      document.querySelectorAll(".cert-filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".cert-filter-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          currentCertCategory = btn.getAttribute("data-category");
          renderCertificates();
        });
      });

      document.getElementById("cert-modal-close")?.addEventListener("click", () => {
        document.getElementById("cert-modal").classList.add("hidden");
        document.getElementById("cert-modal").classList.remove("flex");
      });
      document.getElementById("cert-zoom-in")?.addEventListener("click", () => {
        currentZoomLevel = Math.min(1.5, currentZoomLevel + 0.15);
        document.getElementById("cert-modal-canvas-wrapper").style.transform = `scale(${currentZoomLevel})`;
      });
      document.getElementById("cert-zoom-out")?.addEventListener("click", () => {
        currentZoomLevel = Math.max(0.7, currentZoomLevel - 0.15);
        document.getElementById("cert-modal-canvas-wrapper").style.transform = `scale(${currentZoomLevel})`;
      });
      document.getElementById("cert-modal-download-btn")?.addEventListener("click", () => {
        if (activeCertModalItem) {
          window.downloadCertificateDirect(activeCertModalItem.id);
        }
      });

      document.getElementById("pdf-modal-close")?.addEventListener("click", () => {
        document.getElementById("pdf-viewer-modal").classList.add("hidden");
        document.getElementById("pdf-viewer-modal").classList.remove("flex");
      });
      document.getElementById("pdf-prev-page")?.addEventListener("click", () => {
        if (currentPDFPage > 1) {
          currentPDFPage--;
          document.getElementById("pdf-page-indicator").textContent = `Hal ${currentPDFPage} / 2`;
          renderPDFPageContent();
        }
      });
      document.getElementById("pdf-next-page")?.addEventListener("click", () => {
        if (currentPDFPage < 2) {
          currentPDFPage++;
          document.getElementById("pdf-page-indicator").textContent = `Hal ${currentPDFPage} / 2`;
          renderPDFPageContent();
        }
      });
      document.getElementById("pdf-download-action-btn")?.addEventListener("click", () => {
        if (activePDFDoc) {
          window.downloadDocumentDirect(activePDFDoc.id);
        }
      });

      document.getElementById("detail-modal-close")?.addEventListener("click", () => {
        document.getElementById("detail-modal").classList.add("hidden");
        document.getElementById("detail-modal").classList.remove("flex");
      });
      document.getElementById("detail-modal-ok-btn")?.addEventListener("click", () => {
        document.getElementById("detail-modal").classList.add("hidden");
        document.getElementById("detail-modal").classList.remove("flex");
      });

      document.getElementById("quick-cv-btn")?.addEventListener("click", () => {
        const primaryCV = appState.documents.find(d => d.isPrimaryCV) || appState.documents[0];
        if (primaryCV) {
          window.openPDFViewer(primaryCV.id);
        }
      });

      window.addEventListener("scroll", () => {
        const nav = document.getElementById("main-nav");
        if (!nav) return;
        if (window.scrollY > 40) {
          nav.classList.add("py-2");
          nav.classList.remove("py-4");
        } else {
          nav.classList.add("py-4");
          nav.classList.remove("py-2");
        }
      });
    }

    // ══════════════════════════════════════════════════════════════════════
    // 18. MASTER RENDER & INIT
    // ══════════════════════════════════════════════════════════════════════
    function renderAll() {
      renderProfile();
      renderTimeline();
      initSkills();
      renderCertificates();
      renderSocialConnect();
    }

    document.addEventListener("DOMContentLoaded", () => {
      initParticlesCanvas();
      initTypewriter();
      renderAll();
      initContactForm();
      initAdminPortal();
      initThemeToggle();
      initEventListeners();

      if (window.lucide) {
        lucide.createIcons();
      }
    });
  