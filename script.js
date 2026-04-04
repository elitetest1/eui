document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    //  TRANSLATIONS (unchanged)
    // =============================================
    const translations = {
        en: {
            features_link: "Features",
            screenshots_link: "Screenshots",
            devices_link: "Devices",
            main_title: "Elite UI",
            subtitle: "The definitive experience, built upon One UI 8.5",
            download_button: "View Devices",
            telegram_button: "Telegram",
            donations_button: "Donations",
            about_title: "What is Elite UI?",
            what_is_custom_rom: "A custom ROM based on One UI 8.5 is a modified version of Samsung's official software. It retains the core look and feel of One UI but adds new features, performance enhancements, and customizations that aren't available on the standard firmware.",
            what_is_elite_ui: "Elite UI is a custom firmware currently in development for Samsung Galaxy devices. It is engineered upon the latest version of Samsung's user experience and incorporates extra features and adjustments to deliver the best out-of-the-box performance and usability.",
            features_title: "Features",
            feature1_title: "S23 Series Galaxy AI",
            feature1_desc: "Integrates all Artificial Intelligence features from the S25 series, ported directly to your device.",
            feature2_title: "Built with Proton+",
            feature2_desc: "Upstreamed, undervolted and GPU Overclocked kernel (with stock voltage for GPU).",
            feature3_title: "Audio enhancements for S21FE",
            feature3_desc: "Better bass and general speaker management.",
            feature4_title: "Extreme Privacy (No Logging)",
            feature4_desc: "Massive disabling of ATrace, graphics tracing, and system logging for maximum smoothness and privacy.",
            feature5_title: "Pro Camera (Full RAW)",
            feature5_desc: "Full Camera2API and RAW support on all lenses for S21FE.",
            feature6_title: "OneUI 8.5 Base",
            feature6_desc: "Enjoy the latest OneUI 8.5 base (S23FE).",
            screenshots_title: "Screenshots",
            devices_title: "Supported Devices",
            credits: "Credits to Tizziano Provenzano 'elite', SAMSUNG, ExtremeROM, Ronoa Enzo🇦🇷, Ravindu🇱🇰, Orangecat🇹🇭, oevrik🇷🇺, ExtremeXT🇷🇴, Luminance🇻🇳, FPSensor🇦🇷, Flopster🇦🇷, Pritam🇮🇳, Matteo🇮🇹, Pablo🇦🇷, Nico Lopez🇦🇷, LZTEAMPROJECT🇧🇷",
            translate_button_text: "Español",
            install_steps_title: "Install Steps",
            disclaimer_title: "Disclaimer",
            disclaimer_1: "Your warranty is now void.",
            disclaimer_2: "We are not responsible for bricked devices, dead SD cards, thermonuclear war, or you getting fired because the alarm app failed.",
            disclaimer_3: "Please do some research if you have any concerns about flashing this ROM before flashing it!",
            disclaimer_4: "YOU are choosing to make these modifications, and if you point the finger at us for messing up your device, we will laugh at you. HARD!",
            bootloader_title: "Bootloader unlocking",
            bootloader_step1: "Enable Developer options in settings.",
            bootloader_step2: "Plug the phone to the PC.",
            bootloader_step3: "Keep pressing the button of volumen up and volumen down.",
            bootloader_step4: "Now keep pressed up button to get in Bootloader Unlock Mode.",
            bootloader_step5: "Press vol + to unlock bootloader.",
            rom_install_title: "ROM Install Steps",
            rom_install_step1: "Make sure you're on the latest Stock firmware (Check on SamFW).",
            rom_install_step2: "Make sure your OEM Bootloader is Unlocked.",
            rom_install_step3: "Download OFOX/TWRP, VBmeta.img.",
            rom_install_step4: "Put device in Download Mode.",
            rom_install_step5: "Load OFOX/TWRP TAR file in AP, and under Odin Options, untick Auto Reboot.",
            rom_install_step6: "Force reboot by holding POWER + Vol Down.",
            rom_install_step7: "While on OFOX/TWRP, go to Wipe, Advanced and wipe all partitions.",
            rom_install_step8: "Put OFOX/TWRP in Sideload mode.",
            rom_install_step9: "Sideload the ROM from the computer:",
            rom_install_step10: "Before restart go to wipe and format data.",
            rom_install_step11: "Reboot and enjoy!",
            changelog_title: "Changelog",
            view_changelog_button: "View Full Changelog →",
            join_vip_button: "⭐ Join VIP",
        },
        es: {
            features_link: "Características",
            screenshots_link: "Capturas",
            devices_link: "Dispositivos",
            main_title: "Elite UI",
            subtitle: "La experiencia definitiva, construida sobre One UI 8.5",
            download_button: "Ver Dispositivos",
            telegram_button: "Telegram",
            donations_button: "Donaciones",
            about_title: "¿Qué es Elite UI?",
            what_is_custom_rom: "Una ROM personalizada basada en One UI 8.5 es una versión modificada del software oficial de Samsung. Conserva el aspecto central de One UI pero añade nuevas funciones, mejoras de rendimiento y personalizaciones.",
            what_is_elite_ui: "Elite UI es un firmware personalizado en desarrollo para dispositivos Samsung Galaxy. Está diseñado sobre la última versión de la experiencia de usuario de Samsung e incorpora funciones adicionales para el mejor rendimiento.",
            features_title: "Características",
            feature1_title: "Galaxy AI de la Serie S23",
            feature1_desc: "Integra todas las funciones de IA de la serie S25, porteadas directamente a tu dispositivo.",
            feature2_title: "Construido con Proton+",
            feature2_desc: "Kernel actualizado, con undervolt y GPU overclockeada.",
            feature3_title: "Mejoras de audio para el S21FE",
            feature3_desc: "Mejores graves y gestión general del altavoz.",
            feature4_title: "Privacidad Extrema (Sin Registros)",
            feature4_desc: "Desactivación masiva de ATrace, trazado de gráficos y registros del sistema.",
            feature5_title: "Cámara Pro (RAW Completo)",
            feature5_desc: "Soporte completo de Camera2API y RAW en todos los lentes para S21FE.",
            feature6_title: "Base OneUI 8.5",
            feature6_desc: "Disfruta la última base OneUI 8.5 (S23FE).",
            screenshots_title: "Capturas de Pantalla",
            devices_title: "Dispositivos Soportados",
            credits: "Créditos a Tizziano Provenzano 'Elite', SAMSUNG, ExtremeROM, Ronoa Enzo🇦🇷, Ravindu🇱🇰, Orangecat🇹🇭, oevrik🇷🇺, ExtremeXT🇷🇴, Luminance🇻🇳, FPSensor🇦🇷, Flopster🇦🇷, Pritam🇮🇳, Matteo🇮🇹, Pablo🇦🇷, Nico Lopez🇦🇷, LZTEAMPROJECT🇧🇷",
            translate_button_text: "English",
            install_steps_title: "Pasos de Instalación",
            disclaimer_title: "Descargo de Responsabilidad",
            disclaimer_1: "Tu garantía queda anulada.",
            disclaimer_2: "No nos hacemos responsables por dispositivos brickeados, tarjetas SD dañadas o si te despiden porque la alarma falló.",
            disclaimer_3: "¡Por favor investiga antes de flashear esta ROM!",
            disclaimer_4: "TÚ estás eligiendo hacer estas modificaciones. Si nos culpas, nos reiremos. ¡MUY FUERTE!",
            bootloader_title: "Desbloqueo del Bootloader",
            bootloader_step1: "Habilita las Opciones de desarrollador.",
            bootloader_step2: "Conecta el teléfono al PC.",
            bootloader_step3: "Mantén presionados Vol arriba y Vol abajo.",
            bootloader_step4: "Mantén presionado Vol arriba para entrar al Modo de Desbloqueo.",
            bootloader_step5: "Presiona vol + para desbloquear el bootloader.",
            rom_install_title: "Pasos de Instalación de la ROM",
            rom_install_step1: "Asegúrate de estar en el último firmware de fábrica (SamFW).",
            rom_install_step2: "Asegúrate de que tu Bootloader OEM esté Desbloqueado.",
            rom_install_step3: "Descarga OFOX/TWRP y VBmeta.img.",
            rom_install_step4: "Pon el dispositivo en Modo Download.",
            rom_install_step5: "Carga el archivo TAR de OFOX/TWRP en Odin, desmarca Auto Reboot.",
            rom_install_step6: "Fuerza el reinicio: POWER + Vol Abajo.",
            rom_install_step7: "En OFOX/TWRP, ve a Wipe → Advanced y formatea todas las particiones.",
            rom_install_step8: "Pon OFOX/TWRP en modo Sideload.",
            rom_install_step9: "Haz sideload a la ROM:",
            rom_install_step10: "Antes de reiniciar, formatea los datos.",
            rom_install_step11: "¡Reinicia y a disfrutar!",
            changelog_title: "Lista de Cambios",
            view_changelog_button: "Ver Lista de Cambios Completa →",
            join_vip_button: "⭐ Unirse al VIP",
        }
    };

    const translateButton = document.getElementById('translate-button');
    let currentLanguage = 'en';

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang]?.[key]) {
                el.textContent = translations[lang][key];
            }
        });
        const btn = document.querySelector('.nav-menu #translate-button');
        if (btn) btn.textContent = translations[lang].translate_button_text;
    };

    document.querySelectorAll('#translate-button').forEach(btn => {
        btn.addEventListener('click', () => {
            currentLanguage = (currentLanguage === 'en') ? 'es' : 'en';
            setLanguage(currentLanguage);
        });
    });
    setLanguage(currentLanguage);

    // =============================================
    //  HAMBURGER MENU
    // =============================================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('open');
            mobileMenu.classList.toggle('active');
        });

        document.querySelectorAll('#mobile-menu a, #mobile-menu button').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    hamburgerBtn.classList.remove('open');
                    mobileMenu.classList.remove('active');
                }
            });
        });
    }

    // =============================================
    //  SCROLL PROGRESS BAR
    // =============================================
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        const updateProgress = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            progressBar.style.width = pct + '%';
        };
        window.addEventListener('scroll', updateProgress, { passive: true });
    }

    // =============================================
    //  NAVBAR SCROLL SHRINK
    // =============================================
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true });
    }

    // =============================================
    //  SCROLL REVEAL (IntersectionObserver)
    // =============================================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // =============================================
    //  TYPED TEXT EFFECT (hero subtitle)
    // =============================================
    const subtitleEl = document.getElementById('hero-subtitle');
    if (subtitleEl) {
        const phrases = [
            "The definitive experience, built upon One UI 8.5",
            "Extreme privacy. Maximum performance.",
            "Galaxy AI. Full RAW camera. Proton+ kernel.",
            "Built for enthusiasts. Refined for everyone.",
        ];
        let phraseIdx = 0;
        let charIdx = 0;
        let deleting = false;
        let pauseTimeout = null;

        // Add cursor
        subtitleEl.innerHTML = '<span class="typed-cursor"></span>';

        const type = () => {
            const currentPhrase = phrases[phraseIdx];
            const cursor = '<span class="typed-cursor"></span>';

            if (!deleting) {
                charIdx++;
                subtitleEl.innerHTML = currentPhrase.substring(0, charIdx) + cursor;
                if (charIdx === currentPhrase.length) {
                    deleting = true;
                    pauseTimeout = setTimeout(type, 2200);
                    return;
                }
                pauseTimeout = setTimeout(type, 42);
            } else {
                charIdx--;
                subtitleEl.innerHTML = currentPhrase.substring(0, charIdx) + cursor;
                if (charIdx === 0) {
                    deleting = false;
                    phraseIdx = (phraseIdx + 1) % phrases.length;
                    pauseTimeout = setTimeout(type, 400);
                    return;
                }
                pauseTimeout = setTimeout(type, 20);
            }
        };

        setTimeout(type, 800);
    }

    // =============================================
    //  ANIMATED COUNTERS (stats bar)
    // =============================================
    const counters = document.querySelectorAll('.stat-number[data-count]');
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count'), 10);
                    const suffix = el.getAttribute('data-suffix') || '';
                    const duration = 1200;
                    const stepTime = 16;
                    const steps = duration / stepTime;
                    const increment = target / steps;
                    let current = 0;

                    const update = () => {
                        current = Math.min(current + increment, target);
                        el.textContent = Math.floor(current) + suffix;
                        if (current < target) {
                            requestAnimationFrame(update);
                        } else {
                            el.textContent = target + suffix;
                        }
                    };
                    requestAnimationFrame(update);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => counterObserver.observe(c));
    }

    // =============================================
    //  CAROUSELS (unchanged from original)
    // =============================================
    function setupCarousel(carouselContainer) {
        const grid = carouselContainer.querySelector('.features-grid, .screenshots-grid, .screenshots-grid-desktop');
        const prevBtn = carouselContainer.querySelector('.prev, .features-prev, .desktop-prev');
        const nextBtn = carouselContainer.querySelector('.next, .features-next, .desktop-next');
        const items = grid ? grid.querySelectorAll('.feature-card, .screenshot-item') : [];

        if (!grid || !prevBtn || !nextBtn || items.length === 0) return;

        let currentIndex = 0;
        let itemsInView = 1;

        function updateItemsInView() {
            if (window.innerWidth > 768) {
                itemsInView = carouselContainer.matches('.carousel-container-desktop, .carousel-container-features') ? 3 : 1;
            } else {
                itemsInView = 1;
            }
        }

        function updateCarousel() {
            const totalItems = items.length;
            if (currentIndex > (totalItems - itemsInView)) currentIndex = 0;
            if (currentIndex < 0) currentIndex = totalItems - itemsInView;

            let itemWidthPercentage = 100 / itemsInView;
            if (window.innerWidth <= 768 && carouselContainer.matches('.carousel-container-features')) {
                itemWidthPercentage = 100;
            }

            grid.style.transform = `translateX(${-currentIndex * itemWidthPercentage}%)`;
        }

        nextBtn.addEventListener('click', () => { currentIndex++; updateCarousel(); });
        prevBtn.addEventListener('click', () => { currentIndex--; updateCarousel(); });
        window.addEventListener('resize', () => { updateItemsInView(); updateCarousel(); });

        updateItemsInView();
        updateCarousel();
    }

    document.querySelectorAll('.carousel-container-features, .carousel-container-desktop, .carousel-container').forEach(c => {
        if (c) setupCarousel(c);
    });

    // =============================================
    //  VIP MEMBER FILTER BUTTONS
    // =============================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');
                const cards = document.querySelectorAll('.vip-card');

                cards.forEach(card => {
                    const isVipPlus = card.classList.contains('vip-plus');
                    const isExpired = card.classList.contains('is-expired');

                    let show = false;
                    if (filter === 'all') show = true;
                    else if (filter === 'vip-plus') show = isVipPlus;
                    else if (filter === 'active') show = !isExpired;

                    card.style.display = show ? 'flex' : 'none';
                });
            });
        });
    }

});
