document.addEventListener('DOMContentLoaded', () => {
    const entityStyles = `
        .entity-container {
            position: fixed;
            inset: 0;
            z-index: 9995;
            pointer-events: none;
            overflow: hidden;
            opacity: 0;
            transition: opacity 1.4s ease;
        }

        body.is-idle .entity-container { opacity: 1; }

        .entity-observation {
            position: fixed;
            left: 50%;
            bottom: 28px;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            width: min(88vw, 360px);
            opacity: 0;
            transform: translate(-50%, 18px) scale(.96);
            transition: opacity 1.2s ease, transform 1.2s cubic-bezier(.2, .8, .2, 1);
        }

        body.is-idle .entity-observation {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
        }

        .entity-eye {
            position: relative;
            width: 78px;
            height: 42px;
            overflow: hidden;
            filter: drop-shadow(0 0 10px rgba(110, 13, 22, .7));
            animation: eye-float 4.6s ease-in-out infinite alternate;
        }

        .entity-eye::before {
            content: '';
            position: absolute;
            inset: 5px 0 3px;
            border: 2px solid rgba(105, 24, 30, .72);
            border-radius: 100% 0 100% 0;
            background: radial-gradient(ellipse at center, #65151b 0 10%, #170508 27%, #030304 65%);
            transform: rotate(45deg) scale(.72, 1.16);
            box-shadow: inset 0 0 10px #000, 0 0 7px rgba(151, 26, 34, .4);
        }

        .entity-eye::after {
            content: '';
            position: absolute;
            left: 37px;
            top: 15px;
            width: 7px;
            height: 15px;
            border-radius: 50%;
            background: #e34a4e;
            box-shadow: 0 0 5px #ff3038, 0 0 14px rgba(214, 31, 42, .8);
            animation: eye-blink 6.5s ease-in-out infinite;
        }

        .entity-message {
            padding: 9px 15px 8px;
            border: 1px solid rgba(116, 28, 35, .62);
            border-radius: 3px;
            color: rgba(235, 218, 218, .9);
            background: linear-gradient(90deg, rgba(7, 4, 6, .72), rgba(34, 7, 11, .86), rgba(7, 4, 6, .72));
            box-shadow: 0 0 18px rgba(84, 8, 16, .22), inset 0 0 15px rgba(110, 14, 25, .12);
            font: 600 10px/1.2 Arial, sans-serif;
            letter-spacing: .16em;
            text-align: center;
            text-transform: uppercase;
            white-space: nowrap;
        }

        @keyframes eye-float {
            from { transform: translateY(2px); }
            to { transform: translateY(-3px); }
        }

        @keyframes eye-blink {
            0%, 43%, 48%, 100% { transform: scaleY(1); opacity: 1; }
            45%, 47% { transform: scaleY(.08); opacity: .3; }
        }

        .entity-corner {
            position: absolute;
            width: min(34vw, 430px);
            height: min(34vw, 430px);
            opacity: .88;
            transform-origin: center;
            transition:
                transform 2.5s cubic-bezier(.2, .8, .2, 1),
                opacity 1.5s ease;
        }

        .entity-corner svg {
            width: 100%;
            height: 100%;
            overflow: visible;
        }

        .entity-tl { top: -40px; left: -35px; transform: translate(-20px, -20px); }
        .entity-tr { top: -40px; right: -35px; transform: scaleX(-1) translate(-20px, -20px); }
        .entity-bl { bottom: -40px; left: -35px; transform: scaleY(-1) translate(-20px, -20px); }
        .entity-br { bottom: -40px; right: -35px; transform: scale(-1) translate(-20px, -20px); }

        body.is-idle .entity-tl { transform: translate(0, 0); animation: corner-breathe 8s ease-in-out infinite alternate; }
        body.is-idle .entity-tr { transform: scaleX(-1) translate(0, 0); animation: corner-breathe-r 7.2s ease-in-out infinite alternate; }
        body.is-idle .entity-bl { transform: scaleY(-1) translate(0, 0); animation: corner-breathe 8.8s ease-in-out infinite alternate-reverse; }
        body.is-idle .entity-br { transform: scale(-1) translate(0, 0); animation: corner-breathe-r 7.7s ease-in-out infinite alternate-reverse; }

        .entity-mist {
            opacity: .42;
            animation: mist-pulse 6s ease-in-out infinite alternate;
        }

        .entity-shadow {
            fill: none;
            stroke: #020203;
            stroke-linecap: round;
            stroke-linejoin: round;
            filter: url(#soft-blur);
        }

        .entity-finger {
            fill: none;
            stroke: url(#black-fiber);
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .entity-edge {
            fill: none;
            stroke: #120607;
            stroke-linecap: round;
            stroke-linejoin: round;
            opacity: .95;
        }

        .entity-vein {
            fill: none;
            stroke: url(#red-vein);
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 7 13;
            animation: vein-flow 4.8s linear infinite, vein-breathe 2.9s ease-in-out infinite;
        }

        .entity-vein:nth-of-type(2) { animation-delay: -1.4s, -.8s; animation-duration: 5.7s, 3.7s; }
        .entity-vein:nth-of-type(3) { animation-delay: -2.6s, -1.7s; animation-duration: 4.2s, 3.2s; }

        .entity-hook {
            fill: #030304;
            stroke: #471113;
            stroke-width: 1.2;
            opacity: .92;
            transform-box: fill-box;
            transform-origin: center;
            animation: hook-twitch 5.8s ease-in-out infinite alternate;
        }

        .entity-hook:nth-of-type(2) { animation-delay: -2.3s; }
        .entity-hook:nth-of-type(3) { animation-delay: -4s; }

        @keyframes corner-breathe {
            from { opacity: .72; filter: brightness(.8); }
            to { opacity: .98; filter: brightness(1.15); }
        }
        @keyframes corner-breathe-r {
            from { opacity: .78; filter: brightness(.85); }
            to { opacity: .95; filter: brightness(1.12); }
        }
        @keyframes mist-pulse {
            from { opacity: .2; transform: scale(.96); }
            to { opacity: .55; transform: scale(1.06); }
        }
        @keyframes vein-flow {
            to { stroke-dashoffset: -40; }
        }
        @keyframes vein-breathe {
            0%, 100% { opacity: .18; stroke-width: 2; }
            48% { opacity: .72; stroke-width: 3.3; }
            62% { opacity: .35; stroke-width: 2.4; }
        }
        @keyframes hook-twitch {
            0%, 72% { transform: rotate(0deg) translate(0, 0); }
            84% { transform: rotate(-3deg) translate(-2px, 1px); }
            100% { transform: rotate(2deg) translate(1px, -1px); }
        }

        @media (max-width: 700px) {
            .entity-corner { width: 48vw; height: 48vw; opacity: .72; }
        }

        @media (prefers-reduced-motion: reduce) {
            .entity-container, .entity-corner, .entity-mist, .entity-vein, .entity-hook, .entity-eye, .entity-eye::after {
                animation: none !important;
                transition: none !important;
            }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = entityStyles;
    document.head.appendChild(styleSheet);

    const entitySVG = `
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
                <radialGradient id="mist-glow" cx="20%" cy="20%" r="80%">
                    <stop offset="0" stop-color="#4d171b" stop-opacity=".28"/>
                    <stop offset=".42" stop-color="#17090d" stop-opacity=".12"/>
                    <stop offset="1" stop-color="#000" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="black-fiber" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#020203"/>
                    <stop offset=".38" stop-color="#1b1014"/>
                    <stop offset=".56" stop-color="#080709"/>
                    <stop offset="1" stop-color="#000001"/>
                </linearGradient>
                <linearGradient id="red-vein" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#28070a" stop-opacity=".1"/>
                    <stop offset=".45" stop-color="#b3292d" stop-opacity=".8"/>
                    <stop offset=".7" stop-color="#4d0d12" stop-opacity=".5"/>
                    <stop offset="1" stop-color="#120205" stop-opacity=".1"/>
                </linearGradient>
                <filter id="soft-blur" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="7"/>
                </filter>
                <filter id="mist-blur" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="18"/>
                </filter>
            </defs>

            <ellipse class="entity-mist" cx="66" cy="64" rx="130" ry="120" fill="url(#mist-glow)" filter="url(#mist-blur)"/>

            <!-- sombras largas: quase desaparecem no fundo preto -->
            <g class="entity-shadow" stroke-width="22" opacity=".78">
                <path d="M-14 8 C35 35 73 58 105 93 C130 120 149 137 180 150"/>
                <path d="M12 -15 C38 45 51 91 56 130 C60 166 79 193 113 227"/>
                <path d="M-18 92 C32 101 75 107 108 124 C143 141 167 171 200 207"/>
            </g>

            <!-- fibras principais -->
            <g class="entity-finger" stroke-width="12">
                <path d="M-14 8 C35 35 73 58 105 93 C130 120 149 137 180 150"/>
                <path d="M12 -15 C38 45 51 91 56 130 C60 166 79 193 113 227"/>
                <path d="M-18 92 C32 101 75 107 108 124 C143 141 167 171 200 207"/>
            </g>

            <!-- bordas finas que dão a sensação de garras sobre a moldura -->
            <g class="entity-edge" stroke-width="3">
                <path d="M-14 8 C35 35 73 58 105 93 C130 120 149 137 180 150"/>
                <path d="M12 -15 C38 45 51 91 56 130 C60 166 79 193 113 227"/>
                <path d="M-18 92 C32 101 75 107 108 124 C143 141 167 171 200 207"/>
                <path d="M4 28 C48 54 85 86 113 119"/>
            </g>

            <!-- veios internos pulsando como se a presença estivesse viva -->
            <g stroke-width="2.6">
                <path class="entity-vein" d="M-8 10 C37 38 70 62 101 96 C126 122 145 139 178 150"/>
                <path class="entity-vein" d="M14 -10 C40 48 52 90 58 128 C63 164 82 191 110 224"/>
                <path class="entity-vein" d="M-12 94 C34 103 73 109 106 126 C139 143 165 173 198 205"/>
            </g>

            <!-- pontas em gancho da Entidade -->
            <g>
                <path class="entity-hook" d="M177 150 C194 158 205 168 211 181 C214 189 211 195 205 198 C210 188 203 177 190 172 C184 169 179 162 177 150Z"/>
                <path class="entity-hook" d="M112 225 C125 237 130 248 128 259 C126 267 120 270 115 266 C121 260 119 248 111 239 C107 234 108 229 112 225Z"/>
                <path class="entity-hook" d="M198 205 C215 214 225 224 227 236 C228 244 224 249 218 248 C222 239 216 230 204 224 C198 220 196 213 198 205Z"/>
            </g>

            <!-- partículas da névoa -->
            <g fill="#742226" opacity=".35">
                <circle cx="74" cy="73" r="1.8"/><circle cx="125" cy="115" r="1.2"/><circle cx="46" cy="142" r="1.5"/>
                <circle cx="155" cy="170" r="1.1"/><circle cx="91" cy="190" r="1.4"/>
            </g>
        </svg>
    `;

    const corners = ['entity-tl', 'entity-tr', 'entity-bl', 'entity-br'];
    const container = document.createElement('div');
        container.className = 'entity-container';
        container.setAttribute('aria-hidden', 'true');
        container.innerHTML = corners
            .map(corner => `<div class="entity-corner ${corner}">${entitySVG}</div>`)
            .join('') + `
                <div class="entity-observation">
                    <div class="entity-eye" aria-hidden="true"></div>
                    <div class="entity-message">A Entidade observa você parado</div>
                </div>
            `;
    document.body.appendChild(container);

    let idleTimer;
    const idleWaitTime = 60000;

    function wakeUp() {
        document.body.classList.remove('is-idle');
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            document.body.classList.add('is-idle');
        }, idleWaitTime);
    }

    ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll']
        .forEach(eventName => document.addEventListener(eventName, wakeUp, { passive: true }));

    wakeUp();
});
