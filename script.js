document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            features_link: "Features",
            devices_link: "Supported Devices",
            main_title: "Elite UI",
            subtitle: "The definitive experience, built upon One UI 7.",
            download_button: "View Devices",
            telegram_button: "Telegram",
            donations_button: "Donations",
            features_title: "Features",
            feature1_title: "Minimalist Design",
            feature1_desc: "A clean and refined interface that enhances the best of One UI, removing clutter to focus on what's important.",
            feature2_title: "Fluid Performance",
            feature2_desc: "Heavily optimized for speed and responsiveness. Experience smooth animations and instant app launches.",
            feature3_title: "Enhanced Battery Life",
            feature3_desc: "With our custom optimizations, your device lasts longer, letting you do more throughout your day.",
            feature4_title: "Advanced Customization",
            feature4_desc: "Personalize your experience with unique settings and options not found in the stock firmware.",
            feature5_title: "OOS Based",
            feature5_desc: "Based on open-source projects like Un1ca and ExtremeROM.",
            feature6_title: "Optimization",
            feature6_desc: "Make your phone feel like a true high-end device again, destroying planned obsolescence.",
            screenshots_title: "Screenshots",
            devices_title: "Supported Devices",
            credits: "Credits to Tizziano Provenzano 'Elite'",
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
        },
        es: {
            features_link: "Características",
            devices_link: "Dispositivos Soportados",
            main_title: "Elite UI",
            subtitle: "La experiencia definitiva, construida sobre One UI 7.",
            download_button: "Ver Dispositivos",
            telegram_button: "Telegram",
            donations_button: "Donaciones",
            features_title: "Características",
            feature1_title: "Diseño Minimalista",
            feature1_desc: "Una interfaz limpia y refinada que mejora lo mejor de One UI, eliminando lo innecesario para enfocarse en lo importante.",
            feature2_title: "Rendimiento Fluido",
            feature2_desc: "Altamente optimizado para velocidad y respuesta. Experimenta animaciones suaves e inicios de apps instantáneos.",
            feature3_title: "Batería Mejorada",
            feature3_desc: "Con nuestras optimizaciones personalizadas, tu dispositivo dura más, permitiéndote hacer más durante tu día.",
            feature4_title: "Personalización Avanzada",
            feature4_desc: "Personaliza tu experiencia con ajustes y opciones únicas que no se encuentran en el firmware de fábrica.",
            feature5_title: "Basado en OOS",
            feature5_desc: "Basado en proyectos de código abierto como Un1ca y ExtremeROM.",
            feature6_title: "Optimización",
            feature6_desc: "Haz que tu teléfono se sienta como un verdadero gama alta otra vez, destruyendo la obsolescencia programada.",
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
        }
    };

    const translateButton = document.getElementById('translate-button');
    let currentLanguage = 'en';

    const setLanguage = (lang) => {
        document.documentElement.lang = lang; 
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        translateButton.textContent = translations[lang].translate_button_text;
    };

    translateButton.addEventListener('click', () => {
        currentLanguage = (currentLanguage === 'en') ? 'es' : 'en';
        setLanguage(currentLanguage);
    });

    setLanguage(currentLanguage);

    // Sistema del menú hamburguesa
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('open');
            mobileMenu.classList.toggle('active');
            window.scrollTo(0, 0);
        });

        document.querySelectorAll('#mobile-menu a, #mobile-menu button').forEach(item => {
            item.addEventListener('click', () => {
                hamburgerBtn.classList.remove('open');
                mobileMenu.classList.remove('active');
            });
        });
    }
});
