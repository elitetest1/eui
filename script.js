document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            features_link: "Features",
            devices_link: "Supported Devices",
            main_title: "Elite UI",
            subtitle: "The enhanced experience of One UI 8.",
            download_button: "View Devices",
            telegram_button: "Telegram",
            donations_button: "Donations",
            about_title: "What is Elite UI?",
            what_is_custom_rom: "A custom ROM based on One UI 8 is a modified version of Samsung's official software. It retains the core look and feel of One UI but adds new features, performance enhancements, and customizations that aren't available on the standard firmware. It's a way to get a fresh, optimized, and more powerful experience on your Galaxy device.",
            what_is_elite_ui: "Elite UI is a custom firmware currently in development for Samsung Galaxy devices. It is engineered upon the latest version of Samsung's user experience and incorporates extra features and adjustments to deliver the best out-of-the-box performance and usability.",
            features_title: "Features",
            feature1_title: "S25 Series Galaxy AI",
            feature1_desc: "Integrates all Artificial Intelligence features from the S25 series, ported directly to your device.",
            feature2_title: "AOSP RAM Management",
            feature2_desc: "Replaced Samsung's LMKD with AOSP's for superior performance and faster apps.",
            feature3_title: "OneUI 8.5 apps",
            feature3_desc: "Use Game Tools from OneUI 8.5 and a lot more of apps.",
            feature4_title: "Extreme Privacy (No Logging)",
            feature4_desc: "Massive disabling of ATrace, graphics tracing, and system logging for maximum smoothness and privacy.",
            feature5_title: "OOS Based",
            feature5_desc: "Based on open-source projects like Un1ca and ExtremeROM.",
            feature6_title: "Pro Camera (Full RAW)",
            feature6_desc: "Full Camera2API and RAW support on all lenses.",
            screenshots_title: "Screenshots",
            devices_title: "Supported Devices",
            credits: "Credits to Tizziano Provenzano 'Elite', SAMSUNG (all) ExtremeROM (commits) Ronoa Enzo🇦🇷 (testing and help) Ravindu🇱🇰 (tools and general help) Orangecat🇹🇭 (random build.prop tweaks shared in octuber 2024) oevrik🇷🇺 (rom design) ExtremeXT🇷🇴 (for commits) Luminance🇻🇳 (rom design) FPSensor🇦🇷 (kernel dev) Flopster🇦🇷 (kernel dev) Pritam🇮🇳 (Camera features) Matteo🇮🇹 (Tips, ideas, and general guides on various things. Thank you so much for all) Pablo🇦🇷 (emotional support) Nico Lopez 🇦🇷 (testing) LZTEAMPROJECT 🇧🇷 (rom design) DevCore🇧🇪 (for help to boot UI8 and RIL fix) ",
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
            rom_install_step2: "Make sure your OEM Bootloader is Unlocked. (Very important that you Unlock it, reboot, connect to the internet for at least a minute). While you're at it, Enable USB Debugging as well.",
            rom_install_step3: "Download OFOX/TWRP, VBmeta.img.",
            rom_install_step4: "Put device in Download Mode by making sure device is turned off, and: It's connected to the computer through USB, then Hold VOL UP + VOL DOWN to enter Download Mode and Press Vol Up to continue further.",
            rom_install_step5: "Load OFOX/TWRP TAR file in AP, and under Odin Options, untick Auto Reboot. FLASH THE FILE. DO NOT DISCONNECT THE CABLE. If the device is also asking for the vbmeta, flash it on AP before rebooting.",
            rom_install_step6: "Force reboot by holding POWER + Vol Down. The moment it reboots to a blank screen, hold Power + Vol Up to boot to Recovery (OFOX/TWRP). If shown the message to press something, press power, and quickly hold Power + Vol Up again, otherwise it wont boot to OFOX/TWRP.",
            rom_install_step7: "While on OFOX/TWRP, go to Wipe, Advanced and wipe all partitions.",
            rom_install_step8: "Put OFOX/TWRP in Sideload mode (Advance page).",
            rom_install_step9: "Sideload the ROM from the computer:",
            rom_install_step10: "Before restart go to wipe and format data.",
            rom_install_step11: "Reboot and enjoy!",
            changelog_title: "Changelog",
            view_changelog_button: "View Full Changelog",
            join_vip_button: "Join to VIP",
        },
        es: {
            features_link: "Características",
            devices_link: "Dispositivos Soportados",
            main_title: "Elite UI",
            subtitle: "La experiencia mejorada de One UI 8.",
            download_button: "Ver Dispositivos",
            telegram_button: "Telegram",
            donations_button: "Donaciones",
            about_title: "¿Qué es Elite UI?",
            what_is_custom_rom: "Una ROM personalizada basada en One UI 8 es una versión modificada del software oficial de Samsung. Conserva el aspecto y la sensación central de One UI, pero añade nuevas funciones, mejoras de rendimiento y personalizaciones que no están disponibles en el firmware estándar. Es una forma de obtener una experiencia nueva, optimizada y más potente en tu dispositivo Galaxy.",
            what_is_elite_ui: "Elite UI es un firmware personalizado actualmente en desarrollo para dispositivos Samsung Galaxy. Está diseñado sobre la última versión de la experiencia de usuario de Samsung e incorpora funciones y ajustes adicionales para ofrecer el mejor rendimiento y usabilidad desde el primer momento.",
            features_title: "Características",
            feature1_title: "Galaxy AI de la Serie S25",
            feature1_desc: "Integra todas las funciones de Inteligencia Artificial de la serie S25, porteadas directamente a tu dispositivo.",
            feature2_title: "Gestión de RAM de AOSP",
            feature2_desc: "Reemplaza el LMKD de Samsung por el de AOSP para un rendimiento superior y apps más rápidas.",
            feature3_title: "Apps de OneUI 8.5",
            feature3_desc: "Usa las Game Tools de OneUI 8.5 y muchas apps más.",
            feature4_title: "Privacidad Extrema (Sin Registros)",
            feature4_desc: "Desactivación masiva de ATrace, trazado de gráficos y registros del sistema para una máxima fluidez y privacidad.",
            feature5_title: "Basado en OSS",
            feature5_desc: "Basado en proyectos de código abierto como Un1ca y ExtremeROM.",
            feature6_title: "Cámara Pro (RAW Completo)",
            feature6_desc: "Soporte completo de Camera2API y soporte RAW en todos los lentes.",
            screenshots_title: "Capturas de Pantalla",
            devices_title: "Dispositivos Soportados",
            credits: "Créditos a Tizziano Provenzano 'Elite'",
            translate_button_text: "English",
            install_steps_title: "Pasos de Instalación",
            disclaimer_title: "Descargo de Responsabilidad",
            disclaimer_1: "Tu garantía queda anulada.",
            disclaimer_2: "No nos hacemos responsables por dispositivos brickeados, tarjetas SD dañadas, guerra termonuclear o si te despiden porque la aplicación de alarma falló.",
            disclaimer_3: "¡Por favor, investiga por tu cuenta si tienes alguna duda sobre flashear esta ROM antes de hacerlo!",
            disclaimer_4: "TÚ estás eligiendo hacer estas modificaciones, y si nos apuntas con el dedo por arruinar tu dispositivo, nos reiremos de ti. ¡MUY FUERTE!",
            bootloader_title: "Desbloqueo del Bootloader",
            bootloader_step1: "Habilita las Opciones de desarrollador en los ajustes.",
            bootloader_step2: "Conecta el teléfono al PC.",
            bootloader_step3: "Mantén presionados los botones de volumen arriba y volumen abajo.",
            bootloader_step4: "Ahora, mantén presionado el botón de volumen arriba para entrar al Modo de Desbloqueo del Bootloader.",
            bootloader_step5: "Presiona vol + para desbloquear el bootloader.",
            rom_install_title: "Pasos de Instalación de la ROM",
            rom_install_step1: "Asegúrate de estar en el último firmware de fábrica (Verifica en SamFW).",
            rom_install_step2: "Asegúrate de que tu Bootloader OEM esté Desbloqueado. (Es muy importante que lo desbloquees, reinicies y te conectes a internet por al menos un minuto). Ya que estás en eso, habilita también la Depuración USB.",
            rom_install_step3: "Descarga OFOX/TWRP y VBmeta.img.",
            rom_install_step4: "Pon el dispositivo en Modo Download, asegurándote de que esté apagado y: conectado al PC por USB, luego mantén VOL ARRIBA + VOL ABAJO para entrar al Modo Download y presiona Vol Arriba para continuar.",
            rom_install_step5: "Carga el archivo TAR de OFOX/TWRP en la casilla AP de Odin y, en las Opciones, desmarca Auto Reboot. FLASHEA EL ARCHIVO. NO DESCONECTES EL CABLE. Si el dispositivo también pide el vbmeta, flashealo en AP antes de reiniciar.",
            rom_install_step6: "Fuerza el reinicio manteniendo POWER + Vol Abajo. En el momento en que la pantalla se apague, mantén Power + Vol Arriba para iniciar en el Recovery (OFOX/TWRP). Si aparece un mensaje para presionar algo, presiona power y rápidamente mantén Power + Vol Arriba de nuevo, de lo contrario no iniciará en OFOX/TWRP.",
            rom_install_step7: "Ya en OFOX/TWRP, ve a Wipe, Advanced y formatea todas las particiones.",
            rom_install_step8: "Pon OFOX/TWRP en modo Sideload (página Advance).",
            rom_install_step9: "Haz sideload a la ROM desde el ordenador:",
            rom_install_step10: "Antes de reiniciar, ve a wipe y formatea los datos (format data).",
            rom_install_step11: "¡Reinicia y a disfrutar!",
            changelog_title: "Lista de Cambios",
            view_changelog_button: "Ver Lista de Cambios Completa",
            join_vip_button: "Unirse al VIP",
        }
    };

    const translateButton = document.getElementById('translate-button');
    let currentLanguage = 'en';

    const setLanguage = (lang) => {
        document.documentElement.lang = lang; 
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        const translateBtnInMenu = document.querySelector('.nav-menu #translate-button');
        if (translateBtnInMenu) {
            translateBtnInMenu.textContent = translations[lang].translate_button_text;
        }
    };

    document.querySelectorAll('#translate-button').forEach(button => {
        button.addEventListener('click', () => {
            currentLanguage = (currentLanguage === 'en') ? 'es' : 'en';
            setLanguage(currentLanguage);
        });
    });
    
    setLanguage(currentLanguage);

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

    // Carousel Setup Function
    function setupCarousel(carouselContainer) {
        const grid = carouselContainer.querySelector('.features-grid, .screenshots-grid, .screenshots-grid-desktop');
        const prevBtn = carouselContainer.querySelector('.prev, .features-prev, .desktop-prev');
        const nextBtn = carouselContainer.querySelector('.next, .features-next, .desktop-next');
        const items = grid ? grid.querySelectorAll('.feature-card, .screenshot-item') : [];
        
        if (!grid || !prevBtn || !nextBtn || items.length === 0) {
            return;
        }

        let currentIndex = 0;
        let itemsInView = 1;

        function updateItemsInView() {
            const screenWidth = window.innerWidth;
            if (screenWidth > 768) {
                if (carouselContainer.matches('.carousel-container-desktop, .carousel-container-features')) {
                    itemsInView = 3;
                } else {
                    itemsInView = 1;
                }
            } else {
                 itemsInView = 1;
            }
        }

        function updateCarousel() {
            const totalItems = items.length;
            
            // Logic wrap-around
            if (currentIndex > (totalItems - itemsInView)) {
                currentIndex = 0; 
            }
            if (currentIndex < 0) {
                currentIndex = totalItems - itemsInView;
            }
            
            let itemWidthPercentage = 100 / itemsInView;
            if (window.innerWidth <= 768 && carouselContainer.matches('.carousel-container-features')) {
                itemWidthPercentage = 100;
            }

            const offset = -currentIndex * itemWidthPercentage;
            grid.style.transform = `translateX(${offset}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex++;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex--;
            updateCarousel();
        });

        window.addEventListener('resize', () => {
            updateItemsInView();
            updateCarousel();
        });
        
        updateItemsInView();
    }

    document.querySelectorAll('.carousel-container-features, .carousel-container-desktop, .carousel-container').forEach(carousel => {
        if(carousel) setupCarousel(carousel);
    });
});