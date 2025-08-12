document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            features_link: "Features",
            devices_link: "Supported Devices",
            main_title: "Elite UI",
            subtitle: "The definitive experience, built upon One UI 7.",
            download_button: "View Devices",
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
            devices_title: "Supported Devices",
            credits: "Credits to Tizziano Provenzano 'Elite'",
            translate_button_text: "Español"
        },
        es: {
            features_link: "Características",
            devices_link: "Dispositivos Soportados",
            main_title: "Elite UI",
            subtitle: "La experiencia definitiva, construida sobre One UI 7.",
            download_button: "Ver Dispositivos",
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
            devices_title: "Dispositivos Soportados",
            credits: "Créditos a Tizziano Provenzano 'Elite'",
            translate_button_text: "English"
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

    // NUEVO: Sistema del menú hamburguesa (versión simplificada)
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            // Alternar clases
            hamburgerBtn.classList.toggle('open');
            mobileMenu.classList.toggle('active');
            
            // Desplazamiento suave para cerrar el teclado en móviles
            window.scrollTo(0, 0);
        });

        // Cerrar menú al hacer clic en enlaces
        document.querySelectorAll('#mobile-menu a, #mobile-menu button').forEach(item => {
            item.addEventListener('click', () => {
                hamburgerBtn.classList.remove('open');
                mobileMenu.classList.remove('active');
            });
        });
    }
});
