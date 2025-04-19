document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        az: {
            "home": "Ana Səhifə",
            "about": "Haqqımızda",
            "services": "Xidmətlər",
            "products": "Məhsullar",
            "contact": "Əlaqə",
            "hero-title-1": "Eviniz üçün peşəkar",
            "hero-title-2": "təmir",
            "hero-title-3": "və",
            "hero-title-4": "təmizlik",
            "hero-title-5": "xidmətləri",
            "hero-subtitle": "T&T ilə evinizi yeniləyin, təmiz və rahat yaşayış tərzini qoruyun.",
            "our-services": "Xidmətlərimiz",
            "contact-us": "Bizimlə Əlaqə",
            "who-we-are": "Biz Kimik?",
            "about-description": "T&T olaraq 10 ildən artıq təcrübəmizlə təmir və təmizlik sahəsində peşəkar xidmətlər təqdim edirik. Müştərilərimizin tələblərinə uyğun yüksək keyfiyyətli iş görmək bizim prioritetimizdir.",
            "why-choose-us": "Niyə Bizi Seçməlisiniz?",
            "professional-team": "Peşəkar komanda",
            "quality-materials": "Keyfiyyətli materiallar",
            "affordable-prices": "Sərfəli qiymətlər",
            "guaranteed-service": "Zəmanətli xidmət",
            "customer-satisfaction": "Müştəri məmnuniyyəti",
            "renovation": "Təmir işləri",
            "renovation-desc": "Mənzil və ofis sahələrinin peşəkar təmiri, dizayn və planlaşdırma xidmətləri.",
            "cleaning": "Təmizlik",
            "cleaning-desc": "Ev, ofis və sənaye obyektlərinin cari və əsaslı təmizlik xidmətləri.",
            "furniture": "Mebel yığımı",
            "furniture-desc": "İstənilən tip mebelin peşəkar yığılması və quraşdırılması.",
            "plumbing": "Santexnika",
            "plumbing-desc": "Su və kanalizasiya sistemlərinin quraşdırılması və təmiri.",
            "cleaning-products": "Təmizlik vasitələri",
            "cleaning-products-desc": "Yüksək keyfiyyətli ekoloji təmizlik məhsulları.",
            "paint-materials": "Rəng materialları",
            "paint-materials-desc": "Müxtəlif rəng və kafel üçün keyfiyyətli materiallar.",
            "tools": "Alətlər",
            "tools-desc": "Peşəkar tikinti və təmir alətləri.",
            "plumbing-products": "Santexnika məhsulları",
            "plumbing-products-desc": "Yüksək keyfiyyətli santexnika avadanlıqları.",
            "price-from": "Qiymət: ",
            "view-details": "Ətraflı",
            "address": "Ünvan",
            "phone": "Telefon",
            "email": "E-poçt",
            "working-hours": "İş saatları",
            "working-hours-value": "Bazar ertəsi - Şənbə: 09:00 - 18:00",
            "send-message": "Bizə mesaj göndərin",
            "name-placeholder": "Adınız və Soyadınız",
            "email-placeholder": "E-poçt ünvanınız",
            "phone-placeholder": "Telefon nömrəniz",
            "message-placeholder": "Mesajınız",
            "send": "Göndər",
            "quick-links": "Sürətli keçidlər",
            "follow-us": "Bizi izləyin",
            "footer-description": "Təmir və təmizlik xidmətlərində peşəkar həllər.",
            "rights-reserved": "Bütün hüquqlar qorunur."
        },
        en: {
            "home": "Home",
            "about": "About",
            "services": "Services",
            "products": "Products",
            "contact": "Contact",
            "hero-title-1": "Professional",
            "hero-title-2": "renovation",
            "hero-title-3": "and",
            "hero-title-4": "cleaning",
            "hero-title-5": "services for your home",
            "hero-subtitle": "Renew your home with T&T, maintain a clean and comfortable lifestyle.",
            "our-services": "Our Services",
            "contact-us": "Contact Us",
            "who-we-are": "Who We Are?",
            "about-description": "At T&T, we provide professional services in renovation and cleaning with over 10 years of experience. Delivering high-quality work that meets our customers' requirements is our priority.",
            "why-choose-us": "Why Choose Us?",
            "professional-team": "Professional team",
            "quality-materials": "Quality materials",
            "affordable-prices": "Affordable prices",
            "guaranteed-service": "Guaranteed service",
            "customer-satisfaction": "Customer satisfaction",
            "renovation": "Renovation",
            "renovation-desc": "Professional renovation, design and planning services for apartments and offices.",
            "cleaning": "Cleaning",
            "cleaning-desc": "Regular and deep cleaning services for homes, offices, and industrial facilities.",
            "furniture": "Furniture Assembly",
            "furniture-desc": "Professional assembly and installation of any type of furniture.",
            "plumbing": "Plumbing",
            "plumbing-desc": "Installation and repair of water and sewage systems.",
            "cleaning-products": "Cleaning Products",
            "cleaning-products-desc": "High-quality ecological cleaning products.",
            "paint-materials": "Paint Materials",
            "paint-materials-desc": "Quality materials for various paints and tiles.",
            "tools": "Tools",
            "tools-desc": "Professional construction and repair tools.",
            "plumbing-products": "Plumbing Products",
            "plumbing-products-desc": "High-quality plumbing equipment.",
            "price-from": "Price from: ",
            "view-details": "View Details",
            "address": "Address",
            "phone": "Phone",
            "email": "Email",
            "working-hours": "Working Hours",
            "working-hours-value": "Monday - Saturday: 09:00 - 18:00",
            "send-message": "Send us a message",
            "name-placeholder": "Your Name and Surname",
            "email-placeholder": "Your Email",
            "phone-placeholder": "Your Phone Number",
            "message-placeholder": "Your Message",
            "send": "Send",
            "quick-links": "Quick Links",
            "follow-us": "Follow Us",
            "footer-description": "Professional solutions in renovation and cleaning services.",
            "rights-reserved": "All rights reserved."
        },
        ru: {
            "home": "Главная",
            "about": "О нас",
            "services": "Услуги",
            "products": "Продукты",
            "contact": "Контакты",
            "hero-title-1": "Профессиональные услуги",
            "hero-title-2": "ремонта",
            "hero-title-3": "и",
            "hero-title-4": "уборки",
            "hero-title-5": "для вашего дома",
            "hero-subtitle": "Обновите свой дом с T&T, поддерживайте чистый и комфортный образ жизни.",
            "our-services": "Наши Услуги",
            "contact-us": "Свяжитесь с Нами",
            "who-we-are": "Кто Мы?",
            "about-description": "В T&T мы предоставляем профессиональные услуги по ремонту и уборке с более чем 10-летним опытом. Наш приоритет – выполнение высококачественных работ, отвечающих требованиям наших клиентов.",
            "why-choose-us": "Почему Выбирают Нас?",
            "professional-team": "Профессиональная команда",
            "quality-materials": "Качественные материалы",
            "affordable-prices": "Доступные цены",
            "guaranteed-service": "Гарантированное обслуживание",
            "customer-satisfaction": "Удовлетворенность клиентов",
            "renovation": "Ремонт",
            "renovation-desc": "Профессиональные услуги по ремонту, дизайну и планированию для квартир и офисов.",
            "cleaning": "Уборка",
            "cleaning-desc": "Услуги регулярной и глубокой уборки домов, офисов и промышленных объектов.",
            "furniture": "Сборка мебели",
            "furniture-desc": "Профессиональная сборка и установка любых типов мебели.",
            "plumbing": "Сантехника",
            "plumbing-desc": "Установка и ремонт систем водоснабжения и канализации.",
            "cleaning-products": "Чистящие средства",
            "cleaning-products-desc": "Высококачественные экологические чистящие средства.",
            "paint-materials": "Материалы для покраски",
            "paint-materials-desc": "Качественные материалы для различных красок и плитки.",
            "tools": "Инструменты",
            "tools-desc": "Профессиональные инструменты для строительства и ремонта.",
            "plumbing-products": "Сантехнические изделия",
            "plumbing-products-desc": "Высококачественное сантехническое оборудование.",
            "price-from": "Цена от: ",
            "view-details": "Подробнее",
            "address": "Адрес",
            "phone": "Телефон",
            "email": "Эл. почта",
            "working-hours": "Рабочие часы",
            "working-hours-value": "Понедельник - Суббота: 09:00 - 18:00",
            "send-message": "Отправьте нам сообщение",
            "name-placeholder": "Ваше Имя и Фамилия",
            "email-placeholder": "Ваша Эл. почта",
            "phone-placeholder": "Ваш Номер Телефона",
            "message-placeholder": "Ваше Сообщение",
            "send": "Отправить",
            "quick-links": "Быстрые ссылки",
            "follow-us": "Следите за нами",
            "footer-description": "Профессиональные решения в услугах ремонта и уборки.",
            "rights-reserved": "Все права защищены."
        },
        tr: {
            "home": "Ana Sayfa",
            "about": "Hakkımızda",
            "services": "Hizmetler",
            "products": "Ürünler",
            "contact": "İletişim",
            "hero-title-1": "Eviniz için profesyonel",
            "hero-title-2": "tadilat",
            "hero-title-3": "ve",
            "hero-title-4": "temizlik",
            "hero-title-5": "hizmetleri",
            "hero-subtitle": "T&T ile evinizi yenileyin, temiz ve konforlu bir yaşam tarzını koruyun.",
            "our-services": "Hizmetlerimiz",
            "contact-us": "Bize Ulaşın",
            "who-we-are": "Biz Kimiz?",
            "about-description": "T&T olarak 10 yılı aşkın tecrübemizle tadilat ve temizlik alanında profesyonel hizmetler sunuyoruz. Müşterilerimizin ihtiyaçlarına uygun yüksek kaliteli iş yapmak önceliğimizdir.",
            "why-choose-us": "Neden Bizi Seçmelisiniz?",
            "professional-team": "Profesyonel ekip",
            "quality-materials": "Kaliteli malzemeler",
            "affordable-prices": "Uygun fiyatlar",
            "guaranteed-service": "Garantili hizmet",
            "customer-satisfaction": "Müşteri memnuniyeti",
            "renovation": "Tadilat İşleri",
            "renovation-desc": "Daire ve ofis alanları için profesyonel tadilat, tasarım ve planlama hizmetleri.",
            "cleaning": "Temizlik",
            "cleaning-desc": "Ev, ofis ve sanayi tesisleri için düzenli ve derinlemesine temizlik hizmetleri.",
            "furniture": "Mobilya Montajı",
            "furniture-desc": "Her türlü mobilyanın profesyonel montajı ve kurulumu.",
            "plumbing": "Sıhhi Tesisat",
            "plumbing-desc": "Su ve kanalizasyon sistemlerinin kurulumu ve onarımı.",
            "cleaning-products": "Temizlik Ürünleri",
            "cleaning-products-desc": "Yüksek kaliteli ekolojik temizlik ürünleri.",
            "paint-materials": "Boya Malzemeleri",
            "paint-materials-desc": "Çeşitli boyalar ve karolar için kaliteli malzemeler.",
            "tools": "Aletler",
            "tools-desc": "Profesyonel inşaat ve tadilat aletleri.",
            "plumbing-products": "Sıhhi Tesisat Ürünleri",
            "plumbing-products-desc": "Yüksek kaliteli sıhhi tesisat ekipmanları.",
            "price-from": "Fiyat: ",
            "view-details": "Detaylar",
            "address": "Adres",
            "phone": "Telefon",
            "email": "E-posta",
            "working-hours": "Çalışma Saatleri",
            "working-hours-value": "Pazartesi - Cumartesi: 09:00 - 18:00",
            "send-message": "Bize mesaj gönderin",
            "name-placeholder": "Adınız ve Soyadınız",
            "email-placeholder": "E-posta Adresiniz",
            "phone-placeholder": "Telefon Numaranız",
            "message-placeholder": "Mesajınız",
            "send": "Gönder",
            "quick-links": "Hızlı Bağlantılar",
            "follow-us": "Bizi Takip Edin",
            "footer-description": "Tadilat ve temizlik hizmetlerinde profesyonel çözümler.",
            "rights-reserved": "Tüm hakları saklıdır."
    }
};
  function changeLanguage(lang) {
    console.log("Dil dəyişdirilir: " + lang);
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    document.querySelectorAll('.language-selector button').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

document.querySelectorAll('.language-selector button').forEach(button => {
    button.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-link");

    if (hamburger && navList) {
        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("active");
            navList.classList.toggle("active");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navList.classList.remove("active");
            });
        });
    }
});
});
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-list');
        const navLinks = document.querySelectorAll('.nav-link');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    
        const slides = document.querySelectorAll('.slide');
        const navBtns = document.querySelectorAll('.nav-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentSlide = 0;
        let slideInterval;
        
        function preloadImages() {
            slides.forEach(slide => {
                const bgUrl = getComputedStyle(slide).backgroundImage;
                if (bgUrl && bgUrl !== 'none') {
                    const img = new Image();
                    img.src = bgUrl.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
                }
            });
        }
        function startSlideshow() {
            slideInterval = setInterval(() => {
                moveToNextSlide();
            }, 5000);
        }
        
        function stopSlideshow() {
            clearInterval(slideInterval);
        }
        
        function setActiveSlide(index) {
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            navBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            
            slides[index].classList.add('active');
            navBtns[index].classList.add('active');
            
            currentSlide = index;
        }
        
        function moveToNextSlide() {
            let nextIndex = currentSlide + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0;
            }
            setActiveSlide(nextIndex);
        }
        
        function moveToPrevSlide() {
            let prevIndex = currentSlide - 1;
            if (prevIndex < 0) {
                prevIndex = slides.length - 1;
            }
            setActiveSlide(prevIndex);
        }
        
        let touchStartX = 0;
        let touchEndX = 0;
        
        const slideshowContainer = document.querySelector('.slideshow-container');
        
        slideshowContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        slideshowContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50; 
            
            if (touchEndX < touchStartX - swipeThreshold) {
                moveToNextSlide();
                stopSlideshow();
                startSlideshow();
            }
            
            if (touchEndX > touchStartX + swipeThreshold) {
                moveToPrevSlide();
                stopSlideshow();
                startSlideshow();
            }
        }
        
        navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const slideIndex = parseInt(btn.getAttribute('data-index'));
                setActiveSlide(slideIndex);
                stopSlideshow();
                startSlideshow();
            });
        });
        
        prevBtn.addEventListener('click', () => {
            moveToPrevSlide();
            stopSlideshow();
            startSlideshow();
        });
        
        nextBtn.addEventListener('click', () => {
            moveToNextSlide();
            stopSlideshow();
            startSlideshow();
        });
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, 
                        behavior: 'smooth'
                    });

                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
        
        window.addEventListener('resize', () => {
            const activeSlide = document.querySelector('.slide.active');
            if (activeSlide) {
                activeSlide.style.display = 'none';
                setTimeout(() => {
                    activeSlide.style.display = '';
                }, 10);
            }
        });
        
        preloadImages();
        startSlideshow();

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section-title, .about-content, .services-grid, .products-grid, .contact-content, .contact-form');
            
            function checkScroll() {
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top;
                    const sectionVisible = (sectionTop < window.innerHeight - 100);
                    
                    if (sectionVisible) {
                        section.classList.add('visible');
                    }
                });
            }

            checkScroll();
            
            window.addEventListener('scroll', checkScroll);
            
            const scrollLinks = document.querySelectorAll('a[href^="#"]');
            scrollLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70, 
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });