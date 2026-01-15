document.addEventListener('DOMContentLoaded', () => {
    const vipUsers = [
    { name: "Daubfy", startDate: "2026-09-10" },
    { name: "Eilia", startDate: "2026-09-03" },
    { name: "Erbin Imbachi", startDate: "2026-01-17" },
    { name: "fpp003", startDate: "2025-12-31" },
    { name: "Gabi Stoler", startDate: "2025-12-27" },
    { name: "OrionAltair765", startDate: "2025-12-13" },
    { name: "Edgar Gamlemshaug", startDate: "2025-12-18" },
    { name: "JGril0", startDate: "2025-12-17" },
    { name: "Javier", startDate: "2025-12-17" },
    { name: "Andvii", startDate: "2025-12-13" },
    { name: "kyruf", startDate: "2025-12-06" },
    { name: "jaydenmerr", startDate: "2025-12-04" },
    { name: "Dgm683", startDate: "2025-12-01" },
    { name: "mrdkly", startDate: "2025-11-30" },
    { name: "Marketing Empresarial", startDate: "2025-11-30" },
    { name: "Lwin Myohtwe", startDate: "2025-11-28" },
    { name: "iPhone15Prohype", startDate: "2025-11-16" },
    { name: "Ben", startDate: "2025-11-15" },
    { name: "Niggasuran", startDate: "2025-11-09" },
    { name: "Farai Mashonganyika", startDate: "2025-10-16" },
    { name: "Mudriy Stalin", startDate: "2025-10-21" },
    { name: "Ouros", startDate: "2025-10-20" },
    { name: "Luis M", startDate: "2025-10-17" },
    { name: "Ram Prakash Naik", startDate: "2025-10-17" },
]

    const container = document.getElementById('vip-members-list');

    const getEndDate = (startDateString) => {
        const startDate = new Date(startDateString);
        startDate.setMonth(startDate.getMonth() + 3);
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
            userName.textContent = user.name;

            const timerDisplay = document.createElement('p');
            timerDisplay.id = `timer-${index}`;
            timerDisplay.style.fontSize = '1.5rem';
            timerDisplay.style.fontWeight = '600';
            timerDisplay.style.color = 'var(--primary-color)';

            userCard.appendChild(userName);
            userCard.appendChild(timerDisplay);
            container.appendChild(userCard);

            startCountdown(user, index);
        });
    };

    const startCountdown = (user, index) => {
        const endDate = getEndDate(user.startDate);
        const timerElement = document.getElementById(`timer-${index}`);

        const updateTimer = () => {
            const now = new Date();
            const timeRemaining = endDate - now;

            if (timeRemaining <= 0) {
                timerElement.textContent = "Subscription Expired";
                timerElement.style.color = "#777777";
                clearInterval(interval);
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
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
            copyToClipboard(binanceId, 'Binance ID copied to clipboard');
        });
    }

    if (mercadopagoBtn) {
        mercadopagoBtn.addEventListener('click', () => {
            copyToClipboard(mercadopagoCvu, 'MercadoPago CVU copied to clipboard');
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
