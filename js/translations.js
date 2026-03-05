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
        aboutText: "Erciyes Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim. Yazılım geliştirme, yapay zeka ve tam yığın (full-stack) geliştirme alanlarında çalışıyorum. Django ve ASP.NET Core ile full-stack web uygulamaları, Flutter ile cross-platform mobil uygulamalar, PyTorch ve TensorFlow ile derin öğrenme modelleri geliştirdim. TÜBİTAK projeleri, Fermilab araştırmaları ve kurumsal yazılım stajlarıyla backend mimarisi, REST API entegrasyonu ve veritabanı yönetimi konularında deneyim kazandım.",
        skillsTitle: "Teknik Yetenekler",
        skillLanguages: "Programlama Dilleri",
        skillLanguagesVal: "C#, C, Python, Java, Dart, JavaScript",
        skillFrameworks: "Framework'ler",
        skillFrameworksVal: "Flask, Spring, ASP.NET Core, Flutter",
        skillTechnologies: "Teknolojiler",
        skillTechnologiesVal: "Unity, Git, Cloudflare, Arduino",

        // Education
        educationTitle: "Eğitim",
        eduSchool: "Erciyes Üniversitesi",
        eduDegree: "Bilgisayar Mühendisliği Lisans",
        eduDate: "Ekim 2022 - Haziran 2026",
        eduDesc: "2022-2023 dönemini birincilikle tamamlayarak üstün başarı bursu almaya hak kazandım. (3.72 GPA)",

        // Experience
        experienceTitle: "Deneyim",

        exp1Title: "Yazılım Geliştirme Stajyeri",
        exp1Company: "BILSOFT YAZILIM BİLGİSAYAR TİC. LTD. ŞTİ.",
        exp1Date: "18.01.2026 – 13.02.2026",
        exp1Bullets: [
            "Flutter kullanarak çapraz platform Ajanda Modülü tasarladım ve geliştirdim.",
            "Güvenli kullanıcı kimlik doğrulaması (Vergi No, Kullanıcı Adı, Şifre) uyguladım ve RESTful API'ler ile oturum yönetimi sağladım.",
            "Etkinlik hatırlatıcıları, push bildirimler ve kapsamlı not alma sistemi gibi çekirdek verimlilik özelliklerini geliştirdim.",
            "MySQL (SQLyog) kullanarak arka uç veri operasyonlarını ve veritabanı yapılarını yönettim."
        ],

        exp2Title: "Yazılım Geliştirme Stajyeri",
        exp2Company: "BILSOFT YAZILIM BİLGİSAYAR TİC. LTD. ŞTİ.",
        exp2Date: "22.07.2024 - 28.08.2024",
        exp2Bullets: [
            "Müşteriler tarafından kullanılan muhasebe yazılımlarını geliştirdim ve bakımını yaptım.",
            "Program performansını optimize etme ve hata düzeltme süreçlerine katkıda bulundum.",
            "Yazılımın kararlılığını ve verimliliğini sağlamak için geliştirme ekibiyle iş birliği yaptım."
        ],

        exp3Title: "Lisansüstü Araştırmacı ve Yazılım Mühendisi",
        exp3Company: "Fermilab",
        exp3Date: "Şubat 2024 – Devam Ediyor",
        exp3Bullets: [
            "Yapay Zeka, Makine Öğrenimi, Derin Öğrenme ve Veri Bilimi üzerine çalışmalar yürütmekteyim."
        ],

        exp4Title: "Sözleşmeli Yazılım Mühendisi",
        exp4Company: "Kuantum Teknolojileri",
        exp4Date: "11.07.2024 – Devam Ediyor",
        exp4Bullets: [
            "Silicon Valley'de sunulan devam eden bir TÜBİTAK projesinde önemli kilometre taşlarına katkı sağladım.",
            "Çeşitli teknik görevlerde Arduino kullanarak Ar-Ge çalışmalarına yardımcı oldum.",
            "Flutter ve Dart kullanarak Düzce Üniversitesi için bir mobil uygulama geliştirmede kilit rol oynadım.",
            "Uygulamanın işlevselliğini ve performansını artırmak için backend API desteği entegre ettim."
        ],

        exp5Title: "Ağ Stajyeri",
        exp5Company: "Posco Assan TST",
        exp5Date: "04.08.2025 - 29.08.2025",
        exp5Bullets: [
            "Kurumsal ağ altyapısında Cisco Catalyst 2960S / 3560 / çok katmanlı anahtarları yapılandırdım ve sorun giderdim.",
            "ROMMON kurtarma ve fabrika sıfırlaması sonrası SolarWinds TFTP ve XMODEM kullanarak Cisco IOS yükselttim.",
            "Güvenli ağ segmentasyonu ve uzaktan erişim için VLAN'lar, Port Güvenliği (sticky MAC) ve SSH (v2) uyguladım.",
            "Cisco Packet Tracer ile EIGRP ve DHCP yapılandırmalarını kullanarak çok siteli WAN topolojisi tasarladım."
        ],

        exp6Title: "Yazılım Mühendisi",
        exp6Company: "CAL TÜBİTAK, Düzce Büyükşehir Belediyesi",
        exp6Date: "Nisan 2019 - Ekim 2020",
        exp6Bullets: [
            "Python kullanarak bitkilerin en verimli optimal koşullarda büyüme oranını grafiklendiren uygulamada önemli rol aldım.",
            "TÜBİTAK tarafından Düzce bölgesinde birincilik elde ettim."
        ],

        // Projects
        projectsTitle: "Projeler",

        proj1Title: "Exys – Oto Ekspertiz Yönetim Sistemi",
        proj1Desc: "Birden fazla araç muayene şirketi tarafından kullanılan tam yığın oto ekspertiz yönetim sistemi. Django ve REST API mimarisi ile backend servisleri, duyarlı HTML/CSS/JS arayüzleri ve dinamik veri görselleştirme geliştirdim.",
        proj1Tech: "Django, Python, HTML, JavaScript, Bootstrap, SQLite/PostgreSQL",

        proj2Title: "MoodFood",
        proj2Desc: "Yapay zeka ile menüleri analiz ederek kullanıcının ruh haline göre yemek öneren bir mobil uygulama. GPT-3 (ollama3) ve TensorFlow ile eğitilmiş bir yapay zeka sohbet botu oluşturdum.",
        proj2Tech: "Python, Dart, Flutter, MATLAB",

        proj3Title: "QR Code Menü & Stok Takip Sistemi",
        proj3Desc: "Restoran için QR kod ile menü görüntüleme, sipariş ve ödeme işlemleri, haftalık satış takibi ve envanter yönetimi. Güvenlik duvarı entegrasyonlu yönetici paneli tasarladım.",
        proj3Tech: "C#, MySQL, ASP.NET Core, HTML, CSS",

        proj4Title: "Spor Salonu Yönetim Sistemi",
        proj4Desc: "Spor salonlarındaki üyelerin üyelik tarihlerini, antrenmanlarını, BKI'lerini ve satın alımlarını kontrol eden bir program. Yönetici paneli tasarlayıp programladım.",
        proj4Tech: "C#, Python",

        proj5Title: "Gerçek vs. Sahte Görüntü Sınıflandırma (Açıklanabilir AI)",
        proj5Desc: "PyTorch ve Transfer Learning (VGG19) kullanarak gerçek ve yapay zeka tarafından üretilmiş görüntüleri sınıflandıran derin öğrenme hattı. Grad-CAM ile model dikkat ısı haritaları görselleştirmesi sağladım.",
        proj5Tech: "Python, PyTorch, OpenCV, Scikit-learn, Matplotlib",

        // Contact
        contactTitle: "İletişim",
        contactSubtitle: "",
        contactEmail: "E-posta",
        contactLinkedIn: "LinkedIn",
        contactLinkedInText: "LinkedIn Profilim",

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
        aboutText: "I am a senior Computer Engineering student at Erciyes University, working in software development, artificial intelligence, and full-stack development. I have built full-stack web applications with Django and ASP.NET Core, cross-platform mobile apps with Flutter, and deep learning models using PyTorch and TensorFlow. Through TÜBİTAK projects, Fermilab research, and enterprise software internships, I have gained hands-on experience in backend architecture, REST API integration, and database management.",
        skillsTitle: "Technical Skills",
        skillLanguages: "Languages",
        skillLanguagesVal: "C#, C, Python, Java, Dart, JavaScript",
        skillFrameworks: "Frameworks",
        skillFrameworksVal: "Flask, Spring, ASP.NET Core, Flutter",
        skillTechnologies: "Technologies",
        skillTechnologiesVal: "Unity, Git, Cloudflare, Arduino",

        // Education
        educationTitle: "Education",
        eduSchool: "Erciyes University",
        eduDegree: "Bachelor of Computer Engineering",
        eduDate: "Oct 2022 - June 2026",
        eduDesc: "Completed the 2022-2023 academic year as valedictorian and was awarded an outstanding achievement scholarship. (3.72 GPA)",

        // Experience
        experienceTitle: "Experience",

        exp1Title: "Software Development Intern",
        exp1Company: "BILSOFT SOFTWARE COMPUTER TRADE LTD.",
        exp1Date: "Jan 18, 2026 – Feb 13, 2026",
        exp1Bullets: [
            "Designed and developed a cross-platform Agenda Module using Flutter, ensuring full mobile compatibility.",
            "Implemented secure user authentication (Tax ID, Username, Password) and managed session states using RESTful APIs.",
            "Built core productivity features including event reminders, push notifications, and a comprehensive note-taking system.",
            "Managed backend data operations and database structures using MySQL (SQLyog)."
        ],

        exp2Title: "Software Development Intern",
        exp2Company: "BILSOFT SOFTWARE COMPUTER TRADE LTD.",
        exp2Date: "Jul 22, 2024 - Aug 28, 2024",
        exp2Bullets: [
            "Developed and maintained accounting software used by clients.",
            "Contributed to optimizing program performance and fixing bugs.",
            "Collaborated with the development team to ensure the stability and efficiency of the software."
        ],

        exp3Title: "Undergraduate Researcher & Software Engineer",
        exp3Company: "Fermilab",
        exp3Date: "Feb 2024 – Present",
        exp3Bullets: [
            "Studying Artificial Intelligence, Machine Learning, Deep Learning, and Data Science."
        ],

        exp4Title: "Contract Software Engineer",
        exp4Company: "Kuantum Teknolojileri",
        exp4Date: "Jul 11, 2024 – Present",
        exp4Bullets: [
            "Contributed significantly to key milestones in an ongoing TÜBİTAK project presented in Silicon Valley.",
            "Assisted in R&D, utilizing Arduino for various technical tasks.",
            "Played a key role in developing a mobile application for Düzce University using Flutter and Dart.",
            "Integrated backend API support to enhance the functionality and performance of the application."
        ],

        exp5Title: "Network Intern",
        exp5Company: "Posco Assan TST",
        exp5Date: "Aug 4, 2025 - Aug 29, 2025",
        exp5Bullets: [
            "Configured and troubleshot Cisco Catalyst 2960S / 3560 / multilayer switches within enterprise network infrastructure.",
            "Upgraded Cisco IOS using SolarWinds TFTP and XMODEM after performing ROMMON recovery and factory reset.",
            "Implemented VLANs, Port Security (sticky MAC), and SSH (v2) for secure network segmentation and remote access.",
            "Designed a multi-site WAN topology (Kocaeli–Istanbul–Korea) using Cisco Packet Tracer with EIGRP and DHCP."
        ],

        exp6Title: "Software Engineer",
        exp6Company: "CAL TÜBİTAK, Düzce Metropolitan Municipality",
        exp6Date: "Apr 2019 - Oct 2020",
        exp6Bullets: [
            "Took an important role in the application that graphs the growth rate in optimal conditions for plants using Python.",
            "Placed first in the Düzce region by TÜBİTAK."
        ],

        // Projects
        projectsTitle: "Projects",

        proj1Title: "Exys – Auto Expertise Management System",
        proj1Desc: "A full-stack auto expertise management system used by multiple car inspection companies. Built backend services using Django and REST API architecture, designed responsive interfaces, and integrated dynamic data visualization.",
        proj1Tech: "Django, Python, HTML, JavaScript, Bootstrap, SQLite/PostgreSQL",

        proj2Title: "MoodFood",
        proj2Desc: "A mobile application that suggests meals based on the user's mood by analyzing menus with AI. Created an AI chatbot using GPT-3 (ollama3) technology and trained it using TensorFlow and Python.",
        proj2Tech: "Python, Dart, Flutter, MATLAB",

        proj3Title: "QR Code Menu & Stock Tracking System",
        proj3Desc: "Software for a restaurant using QR codes for menu display, order placement, and payment processing. Implemented stock tracking and designed an admin panel with integrated firewall for security.",
        proj3Tech: "C#, MySQL, ASP.NET Core, HTML, CSS",

        proj4Title: "Gym Management System",
        proj4Desc: "A program that controls membership dates, training, BMI, and purchases of gym members. Designed and programmed the admin panel.",
        proj4Tech: "C#, Python",

        proj5Title: "Real vs. Fake Image Classification (Explainable AI)",
        proj5Desc: "Deep learning pipeline using PyTorch and Transfer Learning (VGG19) to classify real vs. AI-generated images. Integrated Grad-CAM to visualize model attention heatmaps for interpretability.",
        proj5Tech: "Python, PyTorch, OpenCV, Scikit-learn, Matplotlib",

        // Contact
        contactTitle: "Contact",
        contactSubtitle: "",
        contactEmail: "Email",
        contactLinkedIn: "LinkedIn",
        contactLinkedInText: "My LinkedIn Profile",

        // Footer
        footerText: "© 2026 Canberk Sezgin. All rights reserved."
    }
};
