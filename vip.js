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
    if (!container) return;

    // ---- Helpers ----
    const getEndDate = (user) => {
        const d = new Date(user.startDate);
        d.setMonth(d.getMonth() + (user.plan || 3));
        return d;
    };

    const getInitials = (name) => {
        const clean = name.replace(/\(.*?\)/g, '').trim();
        const parts = clean.split(/\s+/);
        if (parts.length === 1) return clean.slice(0, 2).toUpperCase();
        return (parts[0][0] + parts[1][0]).toUpperCase();
    };

    const formatCountdown = (ms) => {
        if (ms <= 0) return null;
        const days    = Math.floor(ms / 86400000);
        const hours   = Math.floor((ms % 86400000) / 3600000);
        const minutes = Math.floor((ms % 3600000) / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const h = String(hours).padStart(2, '0');
        const m = String(minutes).padStart(2, '0');
        const s = String(seconds).padStart(2, '0');
        return `${days}d ${h}h ${m}m ${s}s`;
    };

    // ---- Render all cards ----
    const timers = []; // { timerEl, endDate }

    vipUsers.forEach((user, index) => {
        const endDate   = getEndDate(user);
        const isVipPlus = user.plan === 12;
        const isExpired = endDate <= new Date();

        const card = document.createElement('div');
        card.className = `vip-card${isVipPlus ? ' vip-plus' : ''}${isExpired ? ' is-expired' : ''}`;
        card.style.animationDelay = `${(index % 6) * 60}ms`;

        // Avatar
        const avatar = document.createElement('div');
        avatar.className = 'vip-avatar';
        avatar.textContent = getInitials(user.name);

        // Info
        const info = document.createElement('div');
        info.className = 'vip-card-info';

        // Name row
        const nameEl = document.createElement('div');
        nameEl.className = 'vip-card-name';
        nameEl.textContent = user.name;
        if (isVipPlus) {
            const badge = document.createElement('span');
            badge.className = 'vip-badge';
            badge.textContent = 'VIP+';
            nameEl.appendChild(badge);
        }

        // Timer
        const timerEl = document.createElement('span');
        timerEl.className = 'vip-timer';
        timerEl.id = `timer-${index}`;

        if (isExpired) {
            timerEl.textContent = 'Expired';
            timerEl.classList.add('expired');
        } else {
            const ms = endDate - new Date();
            timerEl.textContent = formatCountdown(ms) || 'Expired';
            timers.push({ timerEl, endDate, index });
        }

        info.appendChild(nameEl);
        info.appendChild(timerEl);
        card.appendChild(avatar);
        card.appendChild(info);
        container.appendChild(card);
    });

    // ---- Live countdown tick ----
    const tick = () => {
        const now = new Date();
        timers.forEach(({ timerEl, endDate }) => {
            if (timerEl.classList.contains('expired')) return;
            const ms = endDate - now;
            if (ms <= 0) {
                timerEl.textContent = 'Expired';
                timerEl.classList.add('expired');
                // mark parent card
                timerEl.closest('.vip-card')?.classList.add('is-expired');
            } else {
                timerEl.textContent = formatCountdown(ms);
            }
        });
    };

    setInterval(tick, 1000);

    // ---- Payment buttons ----
    const binanceBtn      = document.getElementById('binance-btn');
    const mercadopagoBtn  = document.getElementById('mercadopago-btn');
    const popupContainer  = document.getElementById('popup-container');
    const popupMessage    = document.getElementById('popup-message');

    const binanceId       = '872571792';
    const mercadopagoCvu  = '0000003100092907465723';

    const showPopup = (message) => {
        if (!popupContainer || !popupMessage) return;
        popupMessage.textContent = message;
        popupContainer.style.display = 'flex';
        setTimeout(() => { popupContainer.style.display = 'none'; }, 2400);
    };

    const copyToClipboard = (text, message) => {
        if (!navigator.clipboard) { alert('Clipboard not available.'); return; }
        navigator.clipboard.writeText(text)
            .then(() => showPopup(message))
            .catch(() => alert('Failed to copy.'));
    };

    if (binanceBtn)     binanceBtn.addEventListener('click', () => copyToClipboard(binanceId, '✓ Binance ID copied!'));
    if (mercadopagoBtn) mercadopagoBtn.addEventListener('click', () => copyToClipboard(mercadopagoCvu, '✓ CVU MercadoPago copied!'));
    if (popupContainer) {
        popupContainer.addEventListener('click', (e) => {
            if (e.target === popupContainer) popupContainer.style.display = 'none';
        });
    }
});
