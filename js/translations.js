const translations = {
    tr: {
        // Nav
        navAbout: "Hakkımda",
        navEducation: "Eğitim",
        navExperience: "Deneyim",
        navProjects: "Projeler",
        navContact: "İletişim",
        langToggle: "EN",

        // Hero
        heroGreeting: "Merhaba, Ben",
        heroName: "Canberk Sezgin",
        heroTitle: "Bilgisayar Mühendisi",
        heroSubtitle: "Yazılım Geliştirme • Yapay Zeka • Full Stack",
        heroCTA: "Benimle İletişime Geçin",
        heroCV: "CV İndir",

        // About
        aboutTitle: "Hakkımda",
        aboutText: "Erciyes Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim. Mobil uygulamalardan yapay sinir ağlarına kadar geniş bir yelpazede sonuç odaklı yazılım çözümleri geliştiriyorum. 200+ işletme tarafından aktif olarak kullanılan yazılımlar deploy ettim, Fermilab / ENRG Lab'da yüksek enerji fiziği alanında federal destekli AI/ML araştırmaları yürütüyorum ve kurumsal firmalar için yazılım çözümleri sunuyorum. Python, Flutter/Dart ve TypeScript dillerinde uzmanım.",
        skillsTitle: "Teknik Yetenekler",
        skillLanguages: "Programlama Dilleri",
        skillLanguagesVal: "Python, Dart, TypeScript, JavaScript, Java, C#, C, SQL",
        skillFrameworks: "Framework'ler",
        skillFrameworksVal: "Flutter, FastAPI, Flask, Next.js, PyTorch, TensorFlow, Django, Spring, ASP.NET Core",
        skillMlAi: "ML / AI",
        skillMlAiVal: "LSTM, FinBERT, VGG19, Grad-CAM, XGBoost, LightGBM, Scikit-learn, OpenCV, MediaPipe, Groq Cloud (Llama 3), Gemini API",
        skillCloud: "Cloud & DevOps",
        skillCloudVal: "REST API, WebSocket, Cloudflare, Linux",
        skillTools: "Araçlar",
        skillToolsVal: "Git, MySQL, SQLite, PostgreSQL, Arduino, Geant4, Cisco Packet Tracer, SolarWinds",

        // Education
        educationTitle: "Eğitim",
        eduSchool: "Erciyes Üniversitesi",
        eduDegree: "Bilgisayar Mühendisliği Lisans",
        eduDate: "Ekim 2022 - Haziran 2026",
        eduDesc: "2022-2023 dönemini birincilikle tamamlayarak üstün başarı bursu almaya hak kazandım. (3.72 GPA). TÜBİTAK STAR, TÜBİTAK 2209 ve ERÜ BAP burslarına hak kazandım.",

        // Experience
        experienceTitle: "Deneyim",

        exp1Title: "Yazılım Mühendisi (Staj ×2)",
        exp1Company: "BILSOFT YAZILIM BİLGİSAYAR TİC. LTD. ŞTİ.",
        exp1Date: "Tem 2024 – Ağu 2024 & Oca 2026 – Şub 2026",
        exp1Bullets: [
            "200+ ticari müşteri tarafından aktif olarak kullanılan kurumsal muhasebe yazılımlarını geliştirdim ve bakımını yaptım.",
            "BilsoftSmartAjanda'yı tasarladım ve geliştirdim: BILSOFT ekosistemine entegre, 200+ işletme tarafından kullanılan AI destekli çapraz platform verimlilik paketi.",
            "Groq Cloud API (Llama 3) ile doğal dil görev yönetimi entegre ettim; SyncFusion Flutter Calendar ile senkronize Günlük/Haftalık/Aylık takvim motoru oluşturdum.",
            "Singleton ve Repository tasarım kalıplarını, JWT tabanlı kimlik doğrulama ve güvenli oturum yönetimini uyguladım."
        ],

        exp2Title: "Lisansüstü Araştırmacı ve Yazılım Mühendisi",
        exp2Company: "Fermilab / ENRG Lab",
        exp2Date: "Şubat 2024 – Devam Ediyor",
        exp2Bullets: [
            "Fermilab'da yüksek enerji fiziği alanında uygulamalı AI/ML araştırmaları yürütüyorum; nötrino fiziğinde ML tabanlı parçacık algılama ve sınıflandırma üzerine çalışıyorum.",
            "WbLS dedektöründe Cherenkov ve sintilasyon fotonlarını ayırmak için 20+ ML sınıflandırma modeli (XGBoost, LightGBM, Random Forest, ensemble) eğittim; %95+ doğruluk elde ettim.",
            "Geant4 Monte Carlo simülasyonu ile özel nötrino dedektörü tasarladım; foton varış zamanı, enerji ve PMT koordinat özelliklerini ML pipeline girişi olarak mühendislik ettim.",
            "TÜBİTAK 1001 ve BAP projelerine katkı sağladım; araştırma arXiv'de yayımlandı (arXiv:2406.09191)."
        ],

        exp3Title: "Sözleşmeli Yazılım Mühendisi",
        exp3Company: "Kuantum Teknolojileri",
        exp3Date: "Temmuz 2024 – Devam Ediyor",
        exp3Bullets: [
            "Silicon Valley'de sunulan TÜBİTAK destekli Ar-Ge projesinde önemli kilometre taşlarına katkı sağladım.",
            "Flutter ve Dart kullanarak Düzce Üniversitesi için mobil uygulama geliştirdim; backend API entegrasyonu ile performansı artırdım."
        ],

        exp4Title: "Ağ Stajyeri",
        exp4Company: "Posco Assan TST",
        exp4Date: "Ağustos 2025 – Eylül 2025",
        exp4Bullets: [
            "Cisco Catalyst 2960S/3560/çok katmanlı anahtarları yapılandırdım; SolarWinds TFTP ve XMODEM ile Cisco IOS yükselttim.",
            "VLAN, Port Güvenliği (sticky MAC), SSH v2, Inter-VLAN yönlendirme, Spanning Tree (PVST+) ve Port-Channel (LACP) uyguladım.",
            "Cisco Packet Tracer ile EIGRP ve DHCP kullanarak çok siteli WAN topolojisi (Kocaeli–İstanbul–Kore) tasarladım; NAT, ACL ve CEF uyguladım."
        ],

        exp5Title: "Yazılım Mühendisi",
        exp5Company: "CAL TÜBİTAK, Düzce Büyükşehir Belediyesi",
        exp5Date: "Nisan 2019 - Ekim 2020",
        exp5Bullets: [
            "Python kullanarak bitkilerin en verimli optimal koşullarda büyüme oranını grafiklendiren uygulamada önemli rol aldım.",
            "TÜBİTAK tarafından Düzce bölgesinde birincilik elde ettim."
        ],

        // Projects
        projectsTitle: "Projeler",

        proj1Title: "Borsa Dashboard",
        proj1Desc: "3 farklı AI/ML pipeline'ı (LSTM, FinBERT, Gemini 2.5-Flash) entegre eden 5 katmanlı modüler finansal dashboard. <3s gecikmeyle gerçek zamanlı BIST, GOLD ve USD ticker güncellemeleri sunan WebSocket streaming altyapısı. 250+ tarihsel veri noktası işleyen kısa vadeli fiyat tahmin motoru (TensorFlow/Keras LSTM) ile ~%82 yönsel doğruluk elde edildi.",
        proj1Tech: "Flutter, Dart, Python, FastAPI, TensorFlow, FinBERT, Gemini API, yfinance, SQLite, WebSocket",

        proj2Title: "EXYS – Araç Ekspertiz & Muayene Yönetim Sistemi",
        proj2Desc: "3+ oto ekspertiz firmasında üretim ortamında aktif olarak deploy edilen çoklu kiracı araç muayene ve değerleme sistemi. Flask/REST API backend altyapısı ile ayda 500+ detaylı dinamik PDF muayene raporu 2 saniyenin altında üretiliyor.",
        proj2Tech: "Flask, REST API, HTML/CSS, SVG, SQLite/PostgreSQL",

        proj3Title: "BilsoftSmartAjanda – AI Destekli Verimlilik Paketi",
        proj3Desc: "200+ işletmelik kurumsal ekosisteme entegre AI destekli Akıllı Ajanda modülü. Groq Cloud API (Llama 3) ile doğal dil görev yönetimi, gerçek zamanlı veri tutarlılığıyla senkronize takvim motoru. Singleton ve Repository tasarım kalıpları, JWT tabanlı kimlik doğrulama, XP/Rütbe algoritmalı oyunlaştırma motoru.",
        proj3Tech: "Flutter, Dart, Groq Cloud API (Llama 3), REST API, MySQL, JWT",

        proj4Title: "CosmeticAPP – AI Güzellik & AR Stil Danışmanı",
        proj4Desc: "Google Gemini 1.5/2.5 Flash ile cilt alt tonu tespiti, 12 mevsim renk analizi ve yüz şekli sınıflandırması yapan multimodal AI güzellik danışmanlık uygulaması. MediaPipe FaceLandmarker ile 468 yüz landmark noktası kullanarak milimetrik gerçek zamanlı gözlük AR overlay. MediaPipe ImageSegmenter ile %95 piksel düzeyinde doğrulukla saç renklendirme. Tüm AR hesaplamaları WebAssembly (WASM) ile gerçekleştirildi.",
        proj4Tech: "Next.js 15, React, TypeScript, Tailwind CSS, Gemini API, MediaPipe, WASM",

        proj5Title: "Gerçek vs. Sahte Görüntü Sınıflandırma (Açıklanabilir AI)",
        proj5Desc: "PyTorch ve VGG19 Transfer Learning ile gerçek ve AI tarafından üretilmiş görüntüleri sınıflandıran derin öğrenme pipeline'ı; 10.000+ görüntüde ~%93 test doğruluğu. Veri artırma (RandomResizedCrop, ColorJitter) ve hiperparametre optimizasyonu uygulandı. Grad-CAM ısı haritası görselleştirmesi ile Açıklanabilir AI (XAI) entegrasyonu.",
        proj5Tech: "Python, PyTorch, VGG19, OpenCV, Scikit-learn, Grad-CAM, Matplotlib",

        // Contact
        contactTitle: "İletişim",
        contactSubtitle: "",
        contactEmail: "E-posta",
        contactLinkedIn: "LinkedIn",
        contactLinkedInText: "LinkedIn Profilim",
        contactGitHub: "GitHub",
        contactGitHubText: "GitHub Profilim",

        // Footer
        footerText: "© 2026 Canberk Sezgin. Tüm hakları saklıdır."
    },

    en: {
        // Nav
        navAbout: "About",
        navEducation: "Education",
        navExperience: "Experience",
        navProjects: "Projects",
        navContact: "Contact",
        langToggle: "TR",

        // Hero
        heroGreeting: "Hi, I'm",
        heroName: "Canberk Sezgin",
        heroTitle: "Computer Engineer",
        heroSubtitle: "Software Development • AI • Full Stack",
        heroCTA: "Get In Touch",
        heroCV: "Download CV",

        // About
        aboutTitle: "About Me",
        aboutText: "I am a results-driven Computer Engineering senior at Erciyes University, building production-grade software from mobile apps to neural networks. My proven experience includes deploying software actively used by 200+ businesses, conducting federally-funded AI/ML research in high-energy physics at Fermilab / ENRG Lab, and delivering enterprise software for established corporations. Fluent in Python, Flutter/Dart, and TypeScript.",
        skillsTitle: "Technical Skills",
        skillLanguages: "Languages",
        skillLanguagesVal: "Python, Dart, TypeScript, JavaScript, Java, C#, C, SQL",
        skillFrameworks: "Frameworks",
        skillFrameworksVal: "Flutter, FastAPI, Flask, Next.js, PyTorch, TensorFlow, Django, Spring, ASP.NET Core",
        skillMlAi: "ML / AI",
        skillMlAiVal: "LSTM, FinBERT, VGG19, Grad-CAM, XGBoost, LightGBM, Scikit-learn, OpenCV, MediaPipe, Groq Cloud (Llama 3), Gemini API",
        skillCloud: "Cloud & DevOps",
        skillCloudVal: "REST API, WebSocket, Cloudflare, Linux",
        skillTools: "Tools",
        skillToolsVal: "Git, MySQL, SQLite, PostgreSQL, Arduino, Geant4, Cisco Packet Tracer, SolarWinds",

        // Education
        educationTitle: "Education",
        eduSchool: "Erciyes University",
        eduDegree: "Bachelor of Computer Engineering",
        eduDate: "Oct 2022 - June 2026",
        eduDesc: "Graduated as the valedictorian of the 2022–2023 academic year and awarded an outstanding achievement scholarship (3.72 GPA). Awarded TÜBİTAK STAR, TÜBİTAK 2209, and ERÜ BAP fellowships.",

        // Experience
        experienceTitle: "Experience",

        exp1Title: "Software Engineer (Internship ×2)",
        exp1Company: "BILSOFT Software Computer Trade Ltd.",
        exp1Date: "Jul 2024 – Aug 2024 & Jan 2026 – Feb 2026",
        exp1Bullets: [
            "Developed and maintained enterprise accounting software actively used by 200+ commercial clients.",
            "Designed and built BilsoftSmartAjanda, a cross-platform AI-powered productivity suite integrated into BILSOFT's ecosystem and actively used by 200+ businesses.",
            "Integrated Groq Cloud API (Llama 3) for natural language task management; built a synchronized Daily/Weekly/Monthly calendar engine with SyncFusion Flutter Calendar.",
            "Implemented Singleton and Repository design patterns, JWT-based authentication and secure session persistence."
        ],

        exp2Title: "Undergraduate Researcher & Software Engineer",
        exp2Company: "Fermilab / ENRG Lab",
        exp2Date: "Feb 2024 – Present",
        exp2Bullets: [
            "Conducting applied AI/ML research at a U.S. national laboratory in high-energy physics, focusing on ML-driven particle detection and classification within neutrino physics.",
            "Trained and benchmarked 20+ ML classification models (XGBoost, LightGBM, Random Forest, ensemble); achieved 95%+ accuracy, ~6% improvement over classical methods.",
            "Performed Geant4 Monte Carlo simulation of a custom neutrino detector; engineered photon arrival time, energy, and PMT coordinate features for ML pipeline input.",
            "Contributed to TÜBİTAK 1001 and BAP projects; research published on arXiv (arXiv:2406.09191)."
        ],

        exp3Title: "Contract Software Engineer",
        exp3Company: "Kuantum Teknolojileri",
        exp3Date: "Jul 2024 – Present",
        exp3Bullets: [
            "Contributed to key milestones in a TÜBİTAK-funded R&D project pitched in Silicon Valley.",
            "Developed a mobile application for Düzce University using Flutter and Dart; integrated backend API support."
        ],

        exp4Title: "Network Intern",
        exp4Company: "Posco Assan TST",
        exp4Date: "Aug 2025 – Sep 2025",
        exp4Bullets: [
            "Configured and troubleshot Cisco Catalyst 2960S/3560/multilayer switches; upgraded Cisco IOS using SolarWinds TFTP and XMODEM.",
            "Implemented VLANs, Port Security (sticky MAC), SSH v2, Inter-VLAN routing, Spanning Tree (PVST+), and Port-Channel (LACP).",
            "Designed a multi-site WAN topology (Kocaeli–Istanbul–Korea) using Cisco Packet Tracer with EIGRP, DHCP, NAT, ACL, and CEF."
        ],

        exp5Title: "Software Engineer",
        exp5Company: "CAL TÜBİTAK, Düzce Metropolitan Municipality",
        exp5Date: "Apr 2019 - Oct 2020",
        exp5Bullets: [
            "Developed a Python-based application graphing optimal plant growth conditions; placed 1st in the Düzce region (TÜBİTAK)."
        ],

        // Projects
        projectsTitle: "Projects",

        proj1Title: "Borsa Dashboard",
        proj1Desc: "A 5-layer modular financial dashboard integrating 3 distinct AI/ML pipelines (LSTM, FinBERT, Gemini 2.5-Flash). High-frequency WebSocket streaming pipeline achieving <3s latency for real-time BIST, GOLD, and USD ticker updates. Short-Term Price Forecasting Engine (TensorFlow/Keras LSTM) processing 250+ historical data points per ticker, achieving ~82% directional accuracy.",
        proj1Tech: "Flutter, Dart, Python, FastAPI, TensorFlow, FinBERT, Gemini API, yfinance, SQLite, WebSocket",

        proj2Title: "EXYS – Vehicle Expertise & Inspection Management System",
        proj2Desc: "A multi-tenant vehicle inspection and appraisal system actively deployed in production across 3+ auto expertise companies. Flask/REST API backend infrastructure generating 500+ detailed dynamic PDF inspection reports per month in under 2 seconds each.",
        proj2Tech: "Flask, REST API, HTML/CSS, SVG, SQLite/PostgreSQL",

        proj3Title: "BilsoftSmartAjanda – AI-Powered Productivity Suite",
        proj3Desc: "An AI-powered Smart Agenda module integrated into a 200+ business enterprise ecosystem. Groq Cloud API (Llama 3) for natural language task management with synchronized calendar engine. Singleton and Repository design patterns, JWT authentication, and a custom gamification engine with XP/Rank algorithm.",
        proj3Tech: "Flutter, Dart, Groq Cloud API (Llama 3), REST API, MySQL, JWT",

        proj4Title: "CosmeticAPP – AI Beauty & AR Styling Advisor",
        proj4Desc: "A multimodal AI beauty consultancy application using Google Gemini 1.5/2.5 Flash for skin undertone detection, 12-season color analysis, and face shape classification. Millimetric real-time glasses AR overlay using MediaPipe FaceLandmarker with 468 facial landmark points. AI-based image segmentation achieving 95% pixel-level accuracy for hair recolor. All AR computations via WebAssembly (WASM).",
        proj4Tech: "Next.js 15, React, TypeScript, Tailwind CSS, Gemini API, MediaPipe, WASM",

        proj5Title: "Real vs. Fake Image Classification (Explainable AI)",
        proj5Desc: "Deep learning pipeline using PyTorch and VGG19 Transfer Learning to classify real vs. AI-generated images; achieved ~93% test accuracy on 10,000+ images. Applied data augmentation and hyperparameter optimization. Integrated Grad-CAM heatmap visualization for Explainable AI (XAI).",
        proj5Tech: "Python, PyTorch, VGG19, OpenCV, Scikit-learn, Grad-CAM, Matplotlib",

        // Contact
        contactTitle: "Contact",
        contactSubtitle: "",
        contactEmail: "Email",
        contactLinkedIn: "LinkedIn",
        contactLinkedInText: "My LinkedIn Profile",
        contactGitHub: "GitHub",
        contactGitHubText: "My GitHub Profile",

        // Footer
        footerText: "© 2026 Canberk Sezgin. All rights reserved."
    }
};
