// ================================================================
//  VIP MEMBERS — Google Sheets data source
//
//  HOW TO SET UP (one-time):
//  1. Create a Google Sheet with these exact columns in row 1:
//       name | startDate | plan
//     Example row: Javier | 2026-02-05 | 12
//     'plan' is the number of months (3 = quarterly, 12 = annual)
//     For lifetime VIP++, use: lifetime
//
//  2. Share the sheet: Share → Anyone with the link → Viewer
//
//  3. Copy the Sheet ID from the URL:
//     https://docs.google.com/spreadsheets/d/ → THIS PART ← /edit
//     Paste it below in SHEET_ID.
//
//  TO ADD A NEW USER:
//  Just add a row in the sheet from phone or desktop. Done.
//
//  PLAN VALUES:
//    1        → Monthly (1 month)
//    3        → Quarterly (3 months)
//    12       → Annual (12 months)
//    lifetime → VIP++ Lifetime (never expires)
// ================================================================

const SHEET_ID   = '1rT9UkRKbfwNj0UwLKf3W4mvacj-Bbp5BqIqaQrSruZ8';
const SHEET_NAME = 'Sheet1';
const SHEET_URL  = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&sheet=${SHEET_NAME}`;

document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('vip-members-list');

    // ---- CSV parser (handles quoted fields / commas in names) ----
    const parseCSVLine = (line) => {
        const result = [];
        let current = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
            const ch = line[i];
            if (ch === '"') {
                inQuotes = !inQuotes;
            } else if (ch === ',' && !inQuotes) {
                result.push(current.trim());
                current = '';
            } else {
                current += ch;
            }
        }
        result.push(current.trim());
        return result;
    };

    const parseCSV = (text) => {
        const lines = text.trim().split('\n');
        if (lines.length < 2) return [];
        return lines.slice(1)
            .map(line => {
                const cols = parseCSVLine(line);
                const name = cols[0] || '';
                const startDate = cols[1] || '';
                const planRaw = (cols[2] || '').trim().toLowerCase();
                // Support 'lifetime' keyword
                const isLifetime = planRaw === 'lifetime' || planRaw === '0';
                const plan = isLifetime ? 'lifetime' : (parseInt(planRaw) || 3);
                if (!name || !startDate) return null;
                return { name, startDate, plan, isLifetime };
            })
            .filter(Boolean);
    };

    // ---- Helpers ----
    const getEndDate = (user) => {
        if (user.isLifetime) return null; // null = never expires
        const d = new Date(user.startDate);
        d.setMonth(d.getMonth() + (user.plan || 3));
        return d;
    };

    const isExpiredUser = (user) => {
        if (user.isLifetime) return false; // lifetime never expires
        const endDate = getEndDate(user);
        return endDate <= new Date();
    };

    const getInitials = (name) => {
        const clean = name.replace(/\(.*?\)/g, '').trim();
        const parts  = clean.split(/\s+/);
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

    // ---- Actualiza el contador de VIP Members en index.html ----
    const updateIndexCounter = (activeCount) => {
        const vipLabel = document.querySelector('.stat-label[data-translate="stat_vip"]');
        const statEl = vipLabel
            ? vipLabel.closest('.stat-item')?.querySelector('.stat-number')
            : document.querySelector('.stat-number[data-count]');
        if (!statEl) return;

        statEl.setAttribute('data-count', activeCount);

        if (!statEl._statObserved) return;

        if (statEl._statRaf) {
            cancelAnimationFrame(statEl._statRaf);
            statEl._statRaf = null;
        }

        const from = parseInt(statEl.textContent, 10) || 0;
        const to = activeCount;
        if (from === to) return;

        const suffix = statEl._statSuffix || '';
        const durationMs = 900;
        const startTime = performance.now();

        const tick = (now) => {
            const p = Math.min((now - startTime) / durationMs, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            statEl.textContent = Math.round(from + (to - from) * ease) + suffix;
            if (p < 1) {
                statEl._statRaf = requestAnimationFrame(tick);
            } else {
                statEl.textContent = to + suffix;
                statEl._statRaf = null;
            }
        };
        statEl._statRaf = requestAnimationFrame(tick);
    };

    // ---- Render all cards ----
    const renderCards = (vipUsers) => {
        const timers = [];

        const activeCount = vipUsers.filter(u => !isExpiredUser(u)).length;

        const heroBadge = document.querySelector('[data-translate="vip_hero_badge"]');
        if (heroBadge) heroBadge.textContent = `${activeCount} Active Members Worldwide`;

        updateIndexCounter(activeCount);

        if (!container) return;

        container.innerHTML = '';

        vipUsers.forEach((user, index) => {
            const endDate   = getEndDate(user);
            const isVipPlus = user.plan === 12;
            const isLifetime = user.isLifetime;
            const isExpired = isExpiredUser(user);

            const card = document.createElement('div');
            // lifetime gets its own special class
            card.className = `vip-card${isLifetime ? ' vip-lifetime' : (isVipPlus ? ' vip-plus' : '')}${isExpired ? ' is-expired' : ''}`;
            card.style.animationDelay = `${(index % 6) * 60}ms`;

            const avatar = document.createElement('div');
            avatar.className = 'vip-avatar';
            avatar.textContent = getInitials(user.name);

            const info = document.createElement('div');
            info.className = 'vip-card-info';

            const nameEl = document.createElement('div');
            nameEl.className = 'vip-card-name';
            nameEl.textContent = user.name;

            if (isLifetime) {
                const badge = document.createElement('span');
                badge.className = 'vip-badge vip-badge-lifetime';
                badge.textContent = 'VIP++';
                nameEl.appendChild(badge);
            } else if (isVipPlus) {
                const badge = document.createElement('span');
                badge.className = 'vip-badge';
                badge.textContent = 'VIP+';
                nameEl.appendChild(badge);
            }

            const timerEl = document.createElement('span');
            timerEl.className = 'vip-timer';

            if (isLifetime) {
                timerEl.textContent = '∞ Lifetime';
                timerEl.classList.add('lifetime');
            } else if (isExpired) {
                timerEl.textContent = 'Expired';
                timerEl.classList.add('expired');
            } else {
                const ms = endDate - new Date();
                timerEl.textContent = formatCountdown(ms) || 'Expired';
                timers.push({ timerEl, endDate });
            }

            info.appendChild(nameEl);
            info.appendChild(timerEl);
            card.appendChild(avatar);
            card.appendChild(info);
            container.appendChild(card);
        });

        // Live countdown tick
        const tick = () => {
            const now = new Date();
            timers.forEach(({ timerEl, endDate }) => {
                if (timerEl.classList.contains('expired') || timerEl.classList.contains('lifetime')) return;
                const ms = endDate - now;
                if (ms <= 0) {
                    timerEl.textContent = 'Expired';
                    timerEl.classList.add('expired');
                    timerEl.closest('.vip-card')?.classList.add('is-expired');
                } else {
                    timerEl.textContent = formatCountdown(ms);
                }
            });
        };
        setInterval(tick, 1000);
    };

    // ---- Loading / error states ----
    const showLoading = () => {
        if (!container) return;
        container.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
                <p style="font-size:1.1rem;">Loading members…</p>
            </div>`;
    };

    const showError = () => {
        if (!container) return;
        container.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
                <p>⚠️ Could not load the members list. Check the sheet is shared publicly.</p>
            </div>`;
    };

    // ---- Fetch desde Google Sheets y renderizar ----
    const loadMembers = async () => {
        showLoading();
        try {
            const res = await fetch(SHEET_URL);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const csv  = await res.text();
            const users = parseCSV(csv);
            if (users.length === 0) throw new Error('Empty sheet or wrong format');
            renderCards(users);
        } catch (err) {
            console.error('VIP sheet fetch error:', err);
            showError();
        }
    };

    loadMembers();

    // ---- Payment buttons ----
    const binanceBtn      = document.getElementById('binance-btn');
    const mercadopagoBtn  = document.getElementById('mercadopago-btn');
    const usdtBtn         = document.getElementById('usdt-btn');
    const popupContainer  = document.getElementById('popup-container');
    const popupMessage    = document.getElementById('popup-message');

    const binanceId       = '872571792';
    const mercadopagoCvu  = '0000003100092907465723';
    const usdtAddress     = '0x933f399f8b144a14e5a2fdaa9463cc3202f0d47a';

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

    if (binanceBtn)     binanceBtn.addEventListener('click', () => copyToClipboard(binanceId,       '✓ Binance ID copied!'));
    if (mercadopagoBtn) mercadopagoBtn.addEventListener('click', () => copyToClipboard(mercadopagoCvu, '✓ CVU MercadoPago copied!'));
    if (usdtBtn)        usdtBtn.addEventListener('click', () => copyToClipboard(usdtAddress, '✓ USDT BEP20 address copied!'));
    if (popupContainer) {
        popupContainer.addEventListener('click', (e) => {
            if (e.target === popupContainer) popupContainer.style.display = 'none';
        });
    }
});
