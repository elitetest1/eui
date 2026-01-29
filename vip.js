document.addEventListener('DOMContentLoaded', () => {
    const vipUsers = [
        { name: "Andrey Nikolaevich", startDate: "2028-01-01", plan: 12 },
        { name: "Javier", startDate: "2026-02-05", plan: 12 },
        { name: "Ludmila", startDate: "2026-01-26", plan: 3 },
        { name: "XKaczorr (Kaczorek)", startDate: "2026-01-25", plan: 3 },
        { name: "Aniiii", startDate: "2026-01-25", plan: 12 },
        { name: "Rodrigo Castro", startDate: "2026-01-24", plan: 12 },
        { name: "Dan_Bo", startDate: "2026-01-24", plan: 12 },
        { name: "JDGM", startDate: "2026-01-23", plan: 3 },
        { name: "akorifuchsia (Akori)", startDate: "2026-01-23", plan: 12 },
        { name: "noamtu123 (Noam Turkel)", startDate: "2026-01-21", plan: 12 },
        { name: "lucasfl285 (Lucas)", startDate: "2026-01-21", plan: 12 },
        { name: "Arafx", startDate: "2026-01-21", plan: 12 },
        { name: "MR.Rahul", startDate: "2026-01-20", plan: 3 },
        { name: "MatamBrazo", startDate: "2026-01-20", plan: 3 },
        { name: "Ouros", startDate: "2026-01-20", plan: 12 },
        { name: "Wojciech G.", startDate: "2026-01-20", plan: 12 },
        { name: "parra_esteb_n (:/)", startDate: "2026-01-18", plan: 12 },
        { name: "Xuntitan", startDate: "2026-01-17", plan: 3 },
        { name: "Farai Mashonganyika", startDate: "2026-01-15", plan: 12 },
        { name: "Eilia", startDate: "2026-01-01", plan: 12 },
        { name: "Daubfy", startDate: "2026-01-01", plan: 12 },
        { name: "fpp003 (Franco)", startDate: "2025-12-31", plan: 12 },
        { name: "Gabistoler", startDate: "2025-12-27", plan: 3 },
        { name: "OrionAltair765 (Marcelo Oliveira)", startDate: "2025-12-25", plan: 3 },
        { name: "Edgar gamlemshaug", startDate: "2025-12-18", plan: 3 },
        { name: "Joao Gabriel", startDate: "2025-12-17", plan: 3 },
        { name: "Andvii", startDate: "2025-12-13", plan: 3 },
        { name: "kyruf", startDate: "2025-12-06", plan: 3 },
        { name: "jaydenmerr (Jayden Mert)", startDate: "2025-12-04", plan: 3 },
        { name: "dgm636 (D G)", startDate: "2025-12-01", plan: 3 },
        { name: "Marketing Empresarial", startDate: "2025-11-30", plan: 3 },
        { name: "mrdkly", startDate: "2025-11-30", plan: 3 },
        { name: "Lwin Myohtwe", startDate: "2025-11-28", plan: 3 },
        { name: "iPhone15 Prohype", startDate: "2025-11-16", plan: 3 },
        { name: "NiggesGopi", startDate: "2025-11-08", plan: 3 },
        { name: "Ram Prakash Naik", startDate: "2025-10-17", plan: 3 }
    ];

    const container = document.getElementById('vip-members-list');

    const getEndDate = (user) => {
        const startDate = new Date(user.startDate);
        const monthsToAdd = user.plan ? user.plan : 3;
        startDate.setMonth(startDate.getMonth() + monthsToAdd);
        return startDate;
    };

    const displayVipMembers = () => {
        if (!container) return;
        
        container.innerHTML = '';

        vipUsers.forEach((user, index) => {
            const userCard = document.createElement('div');
            userCard.className = 'device-card';

            const userName = document.createElement('p');
            userName.className = 'device-name';
            
            if (user.plan === 12) {
                userName.innerHTML = `${user.name} <span class="vip-badge">VIP+</span>`;
            } else {
                userName.textContent = user.name;
            }

            const timerDisplay = document.createElement('p');
            timerDisplay.id = `timer-${index}`;
            timerDisplay.className = 'vip-timer';

            userCard.appendChild(userName);
            userCard.appendChild(timerDisplay);
            container.appendChild(userCard);

            startCountdown(user, index);
        });
    };

    const startCountdown = (user, index) => {
        const endDate = getEndDate(user);
        const timerElement = document.getElementById(`timer-${index}`);

        const updateTimer = () => {
            const now = new Date();
            const timeRemaining = endDate - now;

            if (timeRemaining <= 0) {
                timerElement.textContent = "Subscription Expired";
                timerElement.classList.add('expired');
                clearInterval(interval);
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            const h = hours.toString().padStart(2, '0');
            const m = minutes.toString().padStart(2, '0');
            const s = seconds.toString().padStart(2, '0');

            timerElement.textContent = `${days}d ${h}h ${m}m ${s}s`;
        };
        
        const interval = setInterval(updateTimer, 1000);
        updateTimer();
    };

    displayVipMembers();

    const binanceBtn = document.getElementById('binance-btn');
    const mercadopagoBtn = document.getElementById('mercadopago-btn');
    const popupContainer = document.getElementById('popup-container');
    const popupMessage = document.getElementById('popup-message');

    const binanceId = '872571792';
    const mercadopagoCvu = '0000003100092907465723';

    const showPopup = (message) => {
        popupMessage.textContent = message;
        popupContainer.style.display = 'flex';
        
        setTimeout(() => {
            popupContainer.style.display = 'none';
        }, 2000);
    };
    
    const copyToClipboard = (text, message) => {
        if (!navigator.clipboard) {
            alert("Clipboard functionality not available.");
            return;
        }
        navigator.clipboard.writeText(text).then(() => {
            showPopup(message);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert("Failed to copy text.");
        });
    };

    if (binanceBtn) {
        binanceBtn.addEventListener('click', () => {
            copyToClipboard(binanceId, 'Binance ID copied!');
        });
    }

    if (mercadopagoBtn) {
        mercadopagoBtn.addEventListener('click', () => {
            copyToClipboard(mercadopagoCvu, 'CVU MercadoPago copied!');
        });
    }

    if (popupContainer) {
        popupContainer.addEventListener('click', (event) => {
            if (event.target === popupContainer) {
                popupContainer.style.display = 'none';
            }
        });
    }
});