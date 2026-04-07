document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    //  TRANSLATIONS
    // =============================================
    const translations = {
        en: {
            features_link: "Features",
            screenshots_link: "Screenshots",
            devices_link: "Devices",
            main_title: "Elite UI",
            subtitle_phrases: [
                "The definitive experience, built upon One UI 8.5",
                "Extreme privacy. Maximum performance.",
                "Galaxy AI. Full RAW camera. Proton+ kernel.",
                "Built for enthusiasts. Refined for everyone."
            ],
            hero_badge: "One UI 8.5 — Now Available",
            stat_vip: "VIP Members",
            stat_devices: "Supported Devices",
            stat_features: "Active Features",
            stat_base: "OneUI Base",
            vip_promo_title: "Go <span class='gold'>VIP</span> — <span class='red'>Elite</span> Access",
            vip_promo_desc: "Support the project and unlock exclusive builds, priority support, and the latest updates before anyone else.",
            vip_pill_1: "🚀 Beta Builds",
            vip_pill_2: "⚡ Instant Updates",
            vip_pill_3: "💬 Priority Support",
            vip_pill_4: "🗳️ Vote on Features",
            vip_pill_5: "🏆 VIP Rank",
            vip_plans_btn: "See VIP Plans — from $5",
            join_community_btn: "Join Community",
            download_button: "View Devices",
            telegram_button: "Telegram",
            donations_button: "Donations",
            about_title: "What is Elite UI?",
            what_is_custom_rom: "A custom ROM based on One UI 8.5 is a modified version of Samsung's official software. It retains the core look and feel of One UI but adds new features, performance enhancements, and customizations that aren't available on the standard firmware.",
            what_is_elite_ui: "Elite UI is a custom firmware currently in development for Samsung Galaxy devices. It is engineered upon the latest version of Samsung's user experience and incorporates extra features and adjustments to deliver the best out-of-the-box performance and usability.",
            features_title: "Features",
            feature1_title: "S23 Series Galaxy AI",
            feature1_desc: "Integrates all Artificial Intelligence features from the S23 series, ported directly to your device.",
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
            vip_link: "VIP",
            vip_exclusive: "p3s — VIP Exclusive",
            get_vip_access: "Get VIP Access",
            // --- VIP PAGE TRANSLATIONS ---
            vip_hero_badge: "36 Active Members Worldwide",
            vip_hero_title: "Join <span class='gold'>VIP</span> Access",
            vip_hero_desc: "Support Elite UI development and get exclusive access to the latest builds, priority support, and a voice in the project's future.",
            vip_hero_btn: "⭐ See Plans from $5",
            vip_benefits_title: "What You Get",
            vip_benefit1_title: "Exclusive Beta Builds",
            vip_benefit1_desc: "Access beta builds and cutting-edge features before the public release.",
            vip_benefit2_title: "Instant Updates",
            vip_benefit2_desc: "Get the latest ROM versions the moment they drop, with no waiting.",
            vip_benefit3_title: "Priority Support",
            vip_benefit3_desc: "Direct attention from the developer. Your issues are addressed first.",
            vip_benefit4_title: "Feature Voting",
            vip_benefit4_desc: "A voice and vote in the future direction of Elite UI features.",
            vip_benefit5_title: "VIP Telegram Rank",
            vip_benefit5_desc: "Exclusive VIP rank displayed in the Elite UI Telegram group.",
            vip_benefit6_title: "Support Development",
            vip_benefit6_desc: "This is a voluntary contribution that keeps Elite UI alive and growing.",
            vip_disc1: "This is a voluntary contribution to support development. Refunds are not applicable.",
            vip_disc2: "Access is managed via a private Telegram group. You must provide your username.",
            vip_disc3: "We reserve the right to revoke access for inappropriate behavior or leaking files.",
            vip_plans_section_title: "Choose Your Plan",
            vip_plans_section_desc: "Select your preferred membership tier and elevate your Elite UI experience.",
            vip_plan1_name: "1 Month",
            vip_plan1_desc: "Perfect for trying out VIP exclusive benefits.",
            vip_plan2_badge: "🔥 Best Value",
            vip_plan2_name: "1 Year",
            vip_plan2_desc: "The ultimate Elite UI experience at the best price.",
            vip_plan3_name: "3 Months",
            vip_plan3_desc: "Great value for medium-term priority access.",
            vip_payment_title: "Choose your payment method:",
            vip_payment_note: "<strong>IMPORTANT:</strong> After payment, send proof of payment + your selected plan to <a href='https://t.me/elitegalaxy' target='_blank'>@elitegalaxy</a> on Telegram to be added to the private VIP group.",
            vip_members_title: "Active VIP Members",
            vip_members_desc: "Real-time subscription status for our amazing supporters.",
            vip_filter_all: "All Members",
            vip_filter_plus: "⭐ VIP+ (Annual)",
            vip_filter_active: "Active Only"
        },
        es: {
            features_link: "Características",
            screenshots_link: "Capturas",
            devices_link: "Dispositivos",
            main_title: "Elite UI",
            subtitle_phrases: [
                "La experiencia definitiva, construida sobre One UI 8.5",
                "Privacidad extrema. Máximo rendimiento.",
                "Galaxy AI. Cámara RAW completa. Kernel Proton+.",
                "Creado para entusiastas. Refinado para todos."
            ],
            hero_badge: "One UI 8.5 — Ya Disponible",
            stat_vip: "Miembros VIP",
            stat_devices: "Dispositivos Soportados",
            stat_features: "Funciones Activas",
            stat_base: "Base OneUI",
            vip_promo_title: "Hazte <span class='gold'>VIP</span> — Acceso <span class='red'>Elite</span>",
            vip_promo_desc: "Apoya el proyecto y desbloquea builds exclusivas, soporte prioritario y las últimas actualizaciones antes que nadie.",
            vip_pill_1: "🚀 Builds Beta",
            vip_pill_2: "⚡ Actualizaciones Rápidas",
            vip_pill_3: "💬 Soporte Prioritario",
            vip_pill_4: "🗳️ Votar Funciones",
            vip_pill_5: "🏆 Rango VIP",
            vip_plans_btn: "Ver Planes VIP — desde $5",
            join_community_btn: "Unirse a la Comunidad",
            download_button: "Ver Dispositivos",
            telegram_button: "Telegram",
            donations_button: "Donaciones",
            about_title: "¿Qué es Elite UI?",
            what_is_custom_rom: "Una ROM personalizada basada en One UI 8.5 es una versión modificada del software oficial de Samsung. Conserva el aspecto central de One UI pero añade nuevas funciones, mejoras de rendimiento y personalizaciones.",
            what_is_elite_ui: "Elite UI es un firmware personalizado en desarrollo para dispositivos Samsung Galaxy. Está diseñado sobre la última versión de la experiencia de usuario de Samsung e incorpora funciones adicionales para el mejor rendimiento.",
            features_title: "Características",
            feature1_title: "Galaxy AI de la Serie S23",
            feature1_desc: "Integra todas las funciones de IA de la serie S23, porteadas directamente a tu dispositivo.",
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
            vip_link: "VIP",
            vip_exclusive: "p3s — Exclusivo VIP",
            get_vip_access: "Obtener Acceso VIP",
            // --- VIP PAGE TRANSLATIONS ---
            vip_hero_badge: "36 Miembros Activos en el Mundo",
            vip_hero_title: "Únete al Acceso <span class='gold'>VIP</span>",
            vip_hero_desc: "Apoya el desarrollo de Elite UI y obtén acceso exclusivo a las últimas builds, soporte prioritario y voz en el futuro del proyecto.",
            vip_hero_btn: "⭐ Ver Planes desde $5",
            vip_benefits_title: "Lo que Obtienes",
            vip_benefit1_title: "Builds Beta Exclusivas",
            vip_benefit1_desc: "Accede a builds beta y funciones de vanguardia antes del lanzamiento público.",
            vip_benefit2_title: "Actualizaciones Instantáneas",
            vip_benefit2_desc: "Obtén las últimas versiones de la ROM en el momento en que salen, sin esperas.",
            vip_benefit3_title: "Soporte Prioritario",
            vip_benefit3_desc: "Atención directa del desarrollador. Tus problemas se atienden primero.",
            vip_benefit4_title: "Votación de Funciones",
            vip_benefit4_desc: "Voz y voto en la dirección futura de las funciones de Elite UI.",
            vip_benefit5_title: "Rango VIP en Telegram",
            vip_benefit5_desc: "Rango VIP exclusivo mostrado en el grupo de Telegram de Elite UI.",
            vip_benefit6_title: "Apoyo al Desarrollo",
            vip_benefit6_desc: "Esta es una contribución voluntaria que mantiene a Elite UI vivo y creciendo.",
            vip_disc1: "Esta es una contribución voluntaria para apoyar el desarrollo. No se aplican reembolsos.",
            vip_disc2: "El acceso se gestiona mediante un grupo privado de Telegram. Debes proporcionar tu usuario.",
            vip_disc3: "Nos reservamos el derecho de revocar el acceso por comportamiento inapropiado o filtración de archivos.",
            vip_plans_section_title: "Elige tu Plan",
            vip_plans_section_desc: "Selecciona tu nivel de membresía preferido y eleva tu experiencia Elite UI.",
            vip_plan1_name: "1 Mes",
            vip_plan1_desc: "Perfecto para probar los beneficios exclusivos VIP.",
            vip_plan2_badge: "🔥 Mejor Valor",
            vip_plan2_name: "1 Año",
            vip_plan2_desc: "La experiencia definitiva de Elite UI al mejor precio.",
            vip_plan3_name: "3 Meses",
            vip_plan3_desc: "Gran valor para acceso prioritario a medio plazo.",
            vip_payment_title: "Elige tu método de pago:",
            vip_payment_note: "<strong>IMPORTANTE:</strong> Después del pago, envía el comprobante + tu plan seleccionado a <a href='https://t.me/elitegalaxy' target='_blank'>@elitegalaxy</a> en Telegram para ser añadido al grupo VIP privado.",
            vip_members_title: "Miembros VIP Activos",
            vip_members_desc: "Estado de suscripción en tiempo real de nuestros increíbles seguidores.",
            vip_filter_all: "Todos los Miembros",
            vip_filter_plus: "⭐ VIP+ (Anual)",
            vip_filter_active: "Solo Activos"
        },
        hi: {
            features_link: "विशेषताएँ",
            screenshots_link: "स्क्रीनशॉट",
            devices_link: "डिवाइस",
            main_title: "Elite UI",
            subtitle_phrases: [
                "वन यूआई 8.5 पर आधारित बेहतरीन अनुभव",
                "अत्यधिक गोपनीयता। अधिकतम प्रदर्शन।",
                "गैलेक्सी एआई। पूर्ण रॉ (RAW) कैमरा। प्रोटॉन+ कर्नेल।",
                "उत्साही लोगों के लिए निर्मित। सभी के लिए परिष्कृत।"
            ],
            hero_badge: "वन यूआई 8.5 — अब उपलब्ध है",
            stat_vip: "वीआईपी सदस्य",
            stat_devices: "समर्थित डिवाइस",
            stat_features: "सक्रिय विशेषताएँ",
            stat_base: "वन यूआई बेस",
            vip_promo_title: "<span class='gold'>वीआईपी</span> बनें — <span class='red'>एलीट</span> एक्सेस",
            vip_promo_desc: "प्रोजेक्ट का समर्थन करें और विशेष बिल्ड, प्राथमिकता समर्थन, और सबसे पहले नवीनतम अपडेट अनलॉक करें।",
            vip_pill_1: "🚀 बीटा बिल्ड",
            vip_pill_2: "⚡ त्वरित अपडेट",
            vip_pill_3: "💬 प्राथमिकता समर्थन",
            vip_pill_4: "🗳️ सुविधाओं पर वोट करें",
            vip_pill_5: "🏆 वीआईपी रैंक",
            vip_plans_btn: "वीआईपी प्लान देखें — $5 से शुरू",
            join_community_btn: "समुदाय से जुड़ें",
            download_button: "डिवाइस देखें",
            telegram_button: "टेलीग्राम",
            donations_button: "दान",
            about_title: "एलीट यूआई क्या है?",
            what_is_custom_rom: "वन यूआई 8.5 पर आधारित कस्टम रोम सैमसंग के आधिकारिक सॉफ़्टवेयर का एक संशोधित संस्करण है। यह वन यूआई के मुख्य स्वरूप को बरकरार रखता है, लेकिन इसमें नई सुविधाएँ, प्रदर्शन संवर्द्धन और अनुकूलन शामिल हैं जो मानक फ़र्मवेयर पर उपलब्ध नहीं हैं।",
            what_is_elite_ui: "एलीट यूआई एक कस्टम फर्मवेयर है जो वर्तमान में सैमसंग गैलेक्सी उपकरणों के लिए विकास में है। यह सैमसंग के नवीनतम उपयोगकर्ता अनुभव पर बनाया गया है और बॉक्स के बाहर सर्वश्रेष्ठ प्रदर्शन और उपयोगिता प्रदान करने के लिए अतिरिक्त सुविधाओं और समायोजनों को शामिल करता है।",
            features_title: "विशेषताएँ",
            feature1_title: "S23 सीरीज़ गैलेक्सी एआई",
            feature1_desc: "S23 श्रृंखला से सभी कृत्रिम बुद्धिमत्ता (AI) सुविधाओं को सीधे आपके डिवाइस में एकीकृत करता है।",
            feature2_title: "प्रोटॉन+ के साथ निर्मित",
            feature2_desc: "अपस्ट्रीम, अंडरवोल्टेड और जीपीयू ओवरक्लॉक्ड कर्नेल।",
            feature3_title: "S21FE के लिए ऑडियो संवर्द्धन",
            feature3_desc: "बेहतर बेस (bass) और सामान्य स्पीकर प्रबंधन।",
            feature4_title: "अत्यधिक गोपनीयता (कोई लॉगिंग नहीं)",
            feature4_desc: "अधिकतम सुगमता और गोपनीयता के लिए ATrace, ग्राफिक्स ट्रेसिंग और सिस्टम लॉगिंग को बड़े पैमाने पर अक्षम किया गया।",
            feature5_title: "प्रो कैमरा (पूर्ण रॉ)",
            feature5_desc: "S21FE के लिए सभी लेंसों पर पूर्ण Camera2API और रॉ (RAW) समर्थन।",
            feature6_title: "वन यूआई 8.5 बेस",
            feature6_desc: "नवीनतम वन यूआई 8.5 बेस (S23FE) का आनंद लें।",
            screenshots_title: "स्क्रीनशॉट",
            devices_title: "समर्थित डिवाइस",
            credits: "श्रेय: Tizziano Provenzano 'elite', SAMSUNG, ExtremeROM, Ronoa Enzo🇦🇷, Ravindu🇱🇰, Orangecat🇹🇭, oevrik🇷🇺, ExtremeXT🇷🇴, Luminance🇻🇳, FPSensor🇦🇷, Flopster🇦🇷, Pritam🇮🇳, Matteo🇮🇹, Pablo🇦🇷, Nico Lopez🇦🇷, LZTEAMPROJECT🇧🇷",
            install_steps_title: "स्थापना के चरण",
            disclaimer_title: "अस्वीकरण (Disclaimer)",
            disclaimer_1: "आपकी वारंटी अब शून्य हो गई है।",
            disclaimer_2: "हम ईंट (bricked) हुए उपकरणों, डेड एसडी कार्ड, थर्मोन्यूक्लियर युद्ध, या अलार्म ऐप के विफल होने के कारण आपकी नौकरी जाने के लिए ज़िम्मेदार नहीं हैं।",
            disclaimer_3: "कृपया इस रोम को फ्लैश करने से पहले शोध करें यदि आपको कोई चिंता है!",
            disclaimer_4: "आप इन संशोधनों को करने का विकल्प चुन रहे हैं, और यदि आप अपने डिवाइस को खराब करने के लिए हम पर उंगली उठाते हैं, तो हम आप पर हंसेंगे। बहुत ज़ोर से!",
            bootloader_title: "बूटलोडर अनलॉक करना",
            bootloader_step1: "सेटिंग्स में डेवलपर विकल्प (Developer options) सक्षम करें।",
            bootloader_step2: "फोन को पीसी से कनेक्ट करें।",
            bootloader_step3: "वॉल्यूम अप और वॉल्यूम डाउन बटन को दबाए रखें।",
            bootloader_step4: "अब बूटलोडर अनलॉक मोड में जाने के लिए अप बटन को दबाए रखें।",
            bootloader_step5: "बूटलोडर अनलॉक करने के लिए vol + दबाएं।",
            rom_install_title: "रोम स्थापना के चरण",
            rom_install_step1: "सुनिश्चित करें कि आप नवीनतम स्टॉक फर्मवेयर पर हैं (SamFW पर जांचें)।",
            rom_install_step2: "सुनिश्चित करें कि आपका ओईएम (OEM) बूटलोडर अनलॉक है।",
            rom_install_step3: "OFOX/TWRP, VBmeta.img डाउनलोड करें।",
            rom_install_step4: "डिवाइस को डाउनलोड मोड (Download Mode) में रखें।",
            rom_install_step5: "OFOX/TWRP TAR फ़ाइल को AP में लोड करें, और Odin विकल्पों के अंतर्गत, Auto Reboot को अनटिक करें।",
            rom_install_step6: "POWER + Vol Down दबाकर जबरन रीबूट करें।",
            rom_install_step7: "OFOX/TWRP पर रहते हुए, Wipe, Advanced पर जाएं और सभी पार्टीशन वाइप करें।",
            rom_install_step8: "OFOX/TWRP को साइडलोड (Sideload) मोड में रखें।",
            rom_install_step9: "कंप्यूटर से रोम को साइडलोड करें:",
            rom_install_step10: "रीस्टार्ट करने से पहले वाइप (wipe) पर जाएं और डेटा फॉर्मेट करें।",
            rom_install_step11: "रीबूट करें और आनंद लें!",
            changelog_title: "चेंजलॉग (Changelog)",
            view_changelog_button: "पूरा चेंजलॉग देखें →",
            join_vip_button: "⭐ वीआईपी से जुड़ें",
            vip_link: "वीआईपी",
            vip_exclusive: "p3s — वीआईपी एक्सक्लूसिव",
            get_vip_access: "वीआईपी एक्सेस प्राप्त करें",
            // --- VIP PAGE TRANSLATIONS ---
            vip_hero_badge: "दुनिया भर में 36 सक्रिय सदस्य",
            vip_hero_title: "<span class='gold'>वीआईपी</span> एक्सेस से जुड़ें",
            vip_hero_desc: "एलीट यूआई विकास का समर्थन करें और नवीनतम बिल्ड, प्राथमिकता समर्थन और प्रोजेक्ट के भविष्य में एक आवाज तक विशेष पहुंच प्राप्त करें।",
            vip_hero_btn: "⭐ $5 से शुरू होने वाले प्लान देखें",
            vip_benefits_title: "आपको क्या मिलता है",
            vip_benefit1_title: "विशेष बीटा बिल्ड",
            vip_benefit1_desc: "सार्वजनिक रिलीज से पहले बीटा बिल्ड और अत्याधुनिक सुविधाओं तक पहुंचें।",
            vip_benefit2_title: "त्वरित अपडेट",
            vip_benefit2_desc: "बिना किसी प्रतीक्षा के, रिलीज़ होते ही नवीनतम रोम संस्करण प्राप्त करें।",
            vip_benefit3_title: "प्राथमिकता समर्थन",
            vip_benefit3_desc: "डेवलपर से सीधा ध्यान। आपकी समस्याओं का पहले समाधान किया जाता है।",
            vip_benefit4_title: "सुविधाओं पर मतदान",
            vip_benefit4_desc: "एलीट यूआई सुविधाओं की भविष्य की दिशा में एक आवाज और वोट।",
            vip_benefit5_title: "वीआईपी टेलीग्राम रैंक",
            vip_benefit5_desc: "एलीट यूआई टेलीग्राम समूह में विशेष वीआईपी रैंक प्रदर्शित।",
            vip_benefit6_title: "विकास का समर्थन करें",
            vip_benefit6_desc: "यह एक स्वैच्छिक योगदान है जो एलीट यूआई को जीवित और विकसित रखता है।",
            vip_disc1: "यह विकास का समर्थन करने के लिए एक स्वैच्छिक योगदान है। रिफंड लागू नहीं हैं।",
            vip_disc2: "एक्सेस एक निजी टेलीग्राम समूह के माध्यम से प्रबंधित किया जाता है। आपको अपना उपयोगकर्ता नाम प्रदान करना होगा।",
            vip_disc3: "हम अनुचित व्यवहार या फाइलों को लीक करने के लिए एक्सेस रद्द करने का अधिकार सुरक्षित रखते हैं।",
            vip_plans_section_title: "अपना प्लान चुनें",
            vip_plans_section_desc: "अपना पसंदीदा सदस्यता स्तर चुनें और अपने एलीट यूआई अनुभव को बढ़ाएं।",
            vip_plan1_name: "1 महीना",
            vip_plan1_desc: "वीआईपी विशेष लाभों को आजमाने के लिए बिल्कुल सही।",
            vip_plan2_badge: "🔥 सर्वोत्तम मूल्य",
            vip_plan2_name: "1 वर्ष",
            vip_plan2_desc: "सबसे अच्छी कीमत पर बेहतरीन एलीट यूआई अनुभव।",
            vip_plan3_name: "3 महीने",
            vip_plan3_desc: "मध्यम अवधि की प्राथमिकता पहुंच के लिए बढ़िया मूल्य।",
            vip_payment_title: "अपनी भुगतान विधि चुनें:",
            vip_payment_note: "<strong>महत्वपूर्ण:</strong> भुगतान के बाद, निजी वीआईपी समूह में जोड़े जाने के लिए टेलीग्राम पर <a href='https://t.me/elitegalaxy' target='_blank'>@elitegalaxy</a> को भुगतान का प्रमाण + अपना चयनित प्लान भेजें।",
            vip_members_title: "सक्रिय वीआईपी सदस्य",
            vip_members_desc: "हमारे अद्भुत समर्थकों के लिए वास्तविक समय सदस्यता स्थिति।",
            vip_filter_all: "सभी सदस्य",
            vip_filter_plus: "⭐ वीआईपी+ (वार्षिक)",
            vip_filter_active: "केवल सक्रिय"
        },
        pt: {
            features_link: "Recursos",
            screenshots_link: "Capturas",
            devices_link: "Dispositivos",
            main_title: "Elite UI",
            subtitle_phrases: [
                "A experiência definitiva, construída sobre a One UI 8.5",
                "Privacidade extrema. Desempenho máximo.",
                "Galaxy AI. Câmera RAW completa. Kernel Proton+.",
                "Feito para entusiastas. Refinado para todos."
            ],
            hero_badge: "One UI 8.5 — Já Disponível",
            stat_vip: "Membros VIP",
            stat_devices: "Dispositivos Suportados",
            stat_features: "Recursos Ativos",
            stat_base: "Base OneUI",
            vip_promo_title: "Seja <span class='gold'>VIP</span> — Acesso <span class='red'>Elite</span>",
            vip_promo_desc: "Apoie o projeto e desbloqueie builds exclusivas, suporte prioritário e as últimas atualizações antes de todo mundo.",
            vip_pill_1: "🚀 Builds Beta",
            vip_pill_2: "⚡ Atualizações Rápidas",
            vip_pill_3: "💬 Suporte Prioritário",
            vip_pill_4: "🗳️ Votar em Recursos",
            vip_pill_5: "🏆 Rank VIP",
            vip_plans_btn: "Ver Planos VIP — a partir de $5",
            join_community_btn: "Entrar na Comunidade",
            download_button: "Ver Dispositivos",
            telegram_button: "Telegram",
            donations_button: "Doações",
            about_title: "O que é a Elite UI?",
            what_is_custom_rom: "Uma ROM customizada baseada na One UI 8.5 é uma versão modificada do software oficial da Samsung. Ela mantém o visual principal da One UI, mas adiciona novos recursos, melhorias de desempenho e personalizações que não estão disponíveis no firmware padrão.",
            what_is_elite_ui: "A Elite UI é um firmware customizado atualmente em desenvolvimento para dispositivos Samsung Galaxy. É construído sobre a versão mais recente da experiência de usuário da Samsung e incorpora recursos extras e ajustes para entregar o melhor desempenho e usabilidade.",
            features_title: "Recursos",
            feature1_title: "Galaxy AI da Série S23",
            feature1_desc: "Integra todos os recursos de Inteligência Artificial da série S23, portados diretamente para o seu dispositivo.",
            feature2_title: "Construído com Proton+",
            feature2_desc: "Kernel atualizado, com undervolt e GPU overclocked.",
            feature3_title: "Melhorias de áudio para o S21FE",
            feature3_desc: "Graves melhores e gerenciamento geral dos alto-falantes.",
            feature4_title: "Privacidade Extrema (Sem Logs)",
            feature4_desc: "Desativação massiva de ATrace, rastreamento gráfico e logs do sistema para máxima fluidez e privacidade.",
            feature5_title: "Câmera Pro (RAW Completo)",
            feature5_desc: "Suporte completo à Camera2API e RAW em todas as lentes para o S21FE.",
            feature6_title: "Base OneUI 8.5",
            feature6_desc: "Aproveite a base OneUI 8.5 mais recente (S23FE).",
            screenshots_title: "Capturas de Tela",
            devices_title: "Dispositivos Suportados",
            credits: "Créditos a Tizziano Provenzano 'elite', SAMSUNG, ExtremeROM, Ronoa Enzo🇦🇷, Ravindu🇱🇰, Orangecat🇹🇭, oevrik🇷🇺, ExtremeXT🇷🇴, Luminance🇻🇳, FPSensor🇦🇷, Flopster🇦🇷, Pritam🇮🇳, Matteo🇮🇹, Pablo🇦🇷, Nico Lopez🇦🇷, LZTEAMPROJECT🇧🇷",
            install_steps_title: "Passos de Instalação",
            disclaimer_title: "Aviso Legal",
            disclaimer_1: "Sua garantia agora é nula.",
            disclaimer_2: "Não nos responsabilizamos por dispositivos brickados, cartões SD mortos, guerra termonuclear ou você ser demitido porque o aplicativo de alarme falhou.",
            disclaimer_3: "Por favor, pesquise antes se tiver alguma dúvida sobre como instalar esta ROM antes de flasheá-la!",
            disclaimer_4: "VOCÊ está escolhendo fazer essas modificações e, se apontar o dedo para nós por bagunçar seu dispositivo, nós vamos rir de você. MUITO!",
            bootloader_title: "Desbloqueio do Bootloader",
            bootloader_step1: "Ative as Opções de Desenvolvedor nas configurações.",
            bootloader_step2: "Conecte o telefone ao PC.",
            bootloader_step3: "Mantenha pressionados os botões de aumentar e diminuir volume.",
            bootloader_step4: "Agora mantenha pressionado o botão de aumentar volume para entrar no Modo de Desbloqueio do Bootloader.",
            bootloader_step5: "Pressione vol + para desbloquear o bootloader.",
            rom_install_title: "Passos de Instalação da ROM",
            rom_install_step1: "Certifique-se de estar no firmware de fábrica mais recente (verifique no SamFW).",
            rom_install_step2: "Certifique-se de que o seu Bootloader OEM está Desbloqueado.",
            rom_install_step3: "Baixe o OFOX/TWRP, VBmeta.img.",
            rom_install_step4: "Coloque o dispositivo no Modo Download.",
            rom_install_step5: "Carregue o arquivo TAR do OFOX/TWRP no Odin (AP) e desmarque o Auto Reboot.",
            rom_install_step6: "Force a reinicialização segurando POWER + Vol Para Baixo.",
            rom_install_step7: "Enquanto estiver no OFOX/TWRP, vá para Wipe -> Advanced e limpe todas as partições.",
            rom_install_step8: "Coloque o OFOX/TWRP no modo Sideload.",
            rom_install_step9: "Faça o sideload da ROM do computador:",
            rom_install_step10: "Antes de reiniciar, vá em wipe e formate os dados.",
            rom_install_step11: "Reinicie e aproveite!",
            changelog_title: "Registro de Alterações",
            view_changelog_button: "Ver Registro Completo →",
            join_vip_button: "⭐ Entrar no VIP",
            vip_link: "VIP",
            vip_exclusive: "p3s — Exclusivo VIP",
            get_vip_access: "Obter Acesso VIP",
            // --- VIP PAGE TRANSLATIONS ---
            vip_hero_badge: "36 Membros Ativos no Mundo",
            vip_hero_title: "Junte-se ao Acesso <span class='gold'>VIP</span>",
            vip_hero_desc: "Apoie o desenvolvimento da Elite UI e obtenha acesso exclusivo às builds mais recentes, suporte prioritário e voz no futuro do projeto.",
            vip_hero_btn: "⭐ Ver Planos a partir de $5",
            vip_benefits_title: "O que Você Ganha",
            vip_benefit1_title: "Builds Beta Exclusivas",
            vip_benefit1_desc: "Acesse builds beta e recursos de ponta antes do lançamento público.",
            vip_benefit2_title: "Atualizações Rápidas",
            vip_benefit2_desc: "Obtenha as versões mais recentes da ROM no momento em que são lançadas.",
            vip_benefit3_title: "Suporte Prioritário",
            vip_benefit3_desc: "Atenção direta do desenvolvedor. Seus problemas são resolvidos primeiro.",
            vip_benefit4_title: "Votação de Recursos",
            vip_benefit4_desc: "Voz e voto na direção futura dos recursos da Elite UI.",
            vip_benefit5_title: "Rank VIP no Telegram",
            vip_benefit5_desc: "Rank VIP exclusivo exibido no grupo do Telegram da Elite UI.",
            vip_benefit6_title: "Apoio ao Desenvolvimento",
            vip_benefit6_desc: "Esta é uma contribuição voluntária que mantém a Elite UI viva e crescendo.",
            vip_disc1: "Esta é uma contribuição voluntária para apoiar o desenvolvimento. Não há reembolsos.",
            vip_disc2: "O acesso é gerenciado via um grupo privado no Telegram. Você deve fornecer seu nome de usuário.",
            vip_disc3: "Reservamo-nos o direito de revogar o acesso por comportamento inadequado ou vazamento de arquivos.",
            vip_plans_section_title: "Escolha seu Plano",
            vip_plans_section_desc: "Selecione o seu nível de assinatura preferido e eleve sua experiência com a Elite UI.",
            vip_plan1_name: "1 Mês",
            vip_plan1_desc: "Perfeito para experimentar os benefícios exclusivos VIP.",
            vip_plan2_badge: "🔥 Melhor Valor",
            vip_plan2_name: "1 Ano",
            vip_plan2_desc: "A experiência definitiva da Elite UI com o melhor preço.",
            vip_plan3_name: "3 Meses",
            vip_plan3_desc: "Ótimo custo-benefício para acesso prioritário a médio prazo.",
            vip_payment_title: "Escolha sua forma de pagamento:",
            vip_payment_note: "<strong>IMPORTANTE:</strong> Após o pagamento, envie o comprovante + seu plano selecionado para <a href='https://t.me/elitegalaxy' target='_blank'>@elitegalaxy</a> no Telegram para ser adicionado ao grupo VIP privado.",
            vip_members_title: "Membros VIP Ativos",
            vip_members_desc: "Status de assinatura em tempo real de nossos incríveis apoiadores.",
            vip_filter_all: "Todos os Membros",
            vip_filter_plus: "⭐ VIP+ (Anual)",
            vip_filter_active: "Apenas Ativos"
        }
    };

    let currentLanguage = 'en';
    let typewriterTimeout; 

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang]?.[key]) {
                el.innerHTML = translations[lang][key]; 
            }
        });
        initTypewriter();
    };

    // =============================================
    //  CUSTOM LANGUAGE DROPDOWN LOGIC
    // =============================================
    const langMenuBtn = document.getElementById('lang-menu-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangText = document.querySelector('.current-lang');

    if (langMenuBtn && langDropdown) {
        // Toggle Dropdown
        langMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
            langMenuBtn.classList.toggle('active');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!langDropdown.contains(e.target) && e.target !== langMenuBtn) {
                langDropdown.classList.remove('show');
                langMenuBtn.classList.remove('active');
            }
        });

        // Handle language selection
        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-value');
                
                // Update active states
                langOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Update Button Text
                if(currentLangText) currentLangText.textContent = lang.toUpperCase();
                
                // Close Menu
                langDropdown.classList.remove('show');
                langMenuBtn.classList.remove('active');
                
                // Fire translation
                currentLanguage = lang;
                setLanguage(currentLanguage);
            });
        });
    }

    // =============================================
    //  TYPEWRITER ANIMATION
    // =============================================
    const initTypewriter = () => {
        const subtitleEl = document.getElementById('hero-subtitle');
        if (!subtitleEl) return;
        
        clearTimeout(typewriterTimeout); 
        
        const phrases = translations[currentLanguage].subtitle_phrases;
        let phraseIdx = 0;
        let charIdx = 0;
        let deleting = false;

        subtitleEl.innerHTML = '<span class="typed-cursor"></span>';

        const type = () => {
            const currentPhrase = phrases[phraseIdx];
            const cursor = '<span class="typed-cursor"></span>';

            if (!deleting) {
                charIdx++;
                subtitleEl.innerHTML = currentPhrase.substring(0, charIdx) + cursor;
                if (charIdx === currentPhrase.length) {
                    deleting = true;
                    typewriterTimeout = setTimeout(type, 2200);
                    return;
                }
                typewriterTimeout = setTimeout(type, 42);
            } else {
                charIdx--;
                subtitleEl.innerHTML = currentPhrase.substring(0, charIdx) + cursor;
                if (charIdx === 0) {
                    deleting = false;
                    phraseIdx = (phraseIdx + 1) % phrases.length;
                    typewriterTimeout = setTimeout(type, 400);
                    return;
                }
                typewriterTimeout = setTimeout(type, 20);
            }
        };

        typewriterTimeout = setTimeout(type, 800);
    };

    setLanguage(currentLanguage);

    // =============================================
    //  HAMBURGER MENU LOGIC
    // =============================================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('open');
            mobileMenu.classList.toggle('active');
            
            // Close language dropdown if open to prevent overlap
            if (langDropdown && langDropdown.classList.contains('show')) {
                langDropdown.classList.remove('show');
                langMenuBtn.classList.remove('active');
            }
        });

        document.querySelectorAll('#mobile-menu a').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    hamburgerBtn.classList.remove('open');
                    mobileMenu.classList.remove('active');
                }
            });
        });

        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && mobileMenu.classList.contains('active')) {
                // Ensure clicks aren't on hamburger or inside menu
                if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                    hamburgerBtn.classList.remove('open');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    }

    // =============================================
    //  SMART STICKY HEADER (SCROLL-UP REVEAL)
    // =============================================
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    if (navbar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add aesthetic background styling when scrolled
            navbar.classList.toggle('scrolled', scrollTop > 50);

            // Hide/Show logic based on scroll direction
            if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight + 20) {
                // User is scrolling down & past the header -> Hide header
                navbar.classList.add('nav-hidden');
                
                // Auto-close mobile menus if they are open while scrolling down
                if (window.innerWidth <= 768 && mobileMenu && mobileMenu.classList.contains('active')) {
                    hamburgerBtn.classList.remove('open');
                    mobileMenu.classList.remove('active');
                }
                if (langDropdown && langDropdown.classList.contains('show')) {
                    langDropdown.classList.remove('show');
                    langMenuBtn.classList.remove('active');
                }
            } else if (scrollTop < lastScrollTop) {
                // User is scrolling up -> Show header
                navbar.classList.remove('nav-hidden');
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values on mobile bounce
        }, { passive: true });
    }

    // =============================================
    //  SCROLL PROGRESS
    // =============================================
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        let isTicking = false;
        
        const updateProgress = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) : 0;
            
            progressBar.style.transform = `scaleX(${pct})`;
            isTicking = false;
        };

        window.addEventListener('scroll', () => {
            if (!isTicking) {
                window.requestAnimationFrame(updateProgress);
                isTicking = true;
            }
        }, { passive: true });
    }

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
    //  STATS COUNTER
    // =============================================
    const counters = document.querySelectorAll('.stat-number');
    
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const duration = 2100;
                    if (el.hasAttribute('data-versions')) {
                        const versions = el.getAttribute('data-versions').split(',');
                        let startTime = null;

                        const updateVersions = (timestamp) => {
                            if (!startTime) startTime = timestamp;
                            const progress = timestamp - startTime;
                            const percentage = Math.min(progress / duration, 1);
           
                            const index = Math.floor(percentage * (versions.length - 1));
                            el.textContent = versions[index];

                            if (progress < duration) {
                                requestAnimationFrame(updateVersions);
                            } else {
                                el.textContent = versions[versions.length - 1];
                            }
                        };
                        requestAnimationFrame(updateVersions);
                        counterObserver.unobserve(el);
                    }
                    else if (el.hasAttribute('data-count')) {
                        const target = parseInt(el.getAttribute('data-count'), 10);
                        const suffix = el.getAttribute('data-suffix') || '';
                        const stepTime = 16;
                        const steps = duration / stepTime;
                        const increment = target / steps;
                        let current = 0;

                        const updateNumeric = () => {
                            current = Math.min(current + increment, target);
                            el.textContent = Math.floor(current) + suffix;
                            if (current < target) {
                                requestAnimationFrame(updateNumeric);
                            } else {
                                el.textContent = target + suffix;
                            }
                        };
                        requestAnimationFrame(updateNumeric);
                        counterObserver.unobserve(el);
                    }
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => counterObserver.observe(c));
    }

    // =============================================
    //  CAROUSEL LOGIC
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
    //  VIP FILTERS
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