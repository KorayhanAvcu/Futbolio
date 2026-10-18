
(function () {
    'use strict';

    const TEAMS = {
        inter: { name: 'Inter', code: 'INT', a: '#0A4FA8', b: '#101418', ink: '#fff', stadium: 'San Siro' },
        milan: { name: 'Milan', code: 'MIL', a: '#C8141E', b: '#111111', ink: '#fff', stadium: 'San Siro' },
        juventus: { name: 'Juventus', code: 'JUV', a: '#16181D', b: '#E8E8E8', ink: '#fff', stadium: 'Allianz Stadium' },
        napoli: { name: 'Napoli', code: 'NAP', a: '#1E9BD7', b: '#0C3C78', ink: '#fff', stadium: 'Stadio Diego Armando Maradona' },
        roma: { name: 'Roma', code: 'ROM', a: '#8E1F2F', b: '#F0B323', ink: '#fff', stadium: 'Stadio Olimpico' },
        lazio: { name: 'Lazio', code: 'LAZ', a: '#8FD3F4', b: '#FFFFFF', ink: '#0B2A4A', stadium: 'Stadio Olimpico' },
        atalanta: { name: 'Atalanta', code: 'ATA', a: '#1E6FB8', b: '#111111', ink: '#fff', stadium: 'Gewiss Stadium' },
        fiorentina: { name: 'Fiorentina', code: 'FIO', a: '#5B2A86', b: '#FFFFFF', ink: '#fff', stadium: 'Stadio Artemio Franchi' },
        bologna: { name: 'Bologna', code: 'BOL', a: '#1A2F5A', b: '#A21C26', ink: '#fff', stadium: "Stadio Renato Dall'Ara" },
        torino: { name: 'Torino', code: 'TOR', a: '#7E1B1B', b: '#E9D9B0', ink: '#fff', stadium: 'Stadio Olimpico Grande Torino' },
        como: { name: 'Como', code: 'COM', a: '#0B3E91', b: '#FFFFFF', ink: '#fff', stadium: 'Stadio Giuseppe Sinigaglia' },
        parma: { name: 'Parma', code: 'PAR', a: '#FFD200', b: '#1D3E8A', ink: '#10224A', stadium: 'Stadio Ennio Tardini' },
        udinese: { name: 'Udinese', code: 'UDI', a: '#26282C', b: '#FFFFFF', ink: '#fff', stadium: 'Bluenergy Stadium' },
        genoa: { name: 'Genoa', code: 'GEN', a: '#A2172E', b: '#002B5C', ink: '#fff', stadium: 'Stadio Luigi Ferraris' },
        sassuolo: { name: 'Sassuolo', code: 'SAS', a: '#00A651', b: '#111111', ink: '#fff', stadium: 'Mapei Stadium' },
        cagliari: { name: 'Cagliari', code: 'CAG', a: '#A5162B', b: '#0E2A56', ink: '#fff', stadium: 'Unipol Domus' },
        lecce: { name: 'Lecce', code: 'LEC', a: '#F6D000', b: '#D21F26', ink: '#3A1206', stadium: 'Stadio Via del Mare' },
        monza: { name: 'Monza', code: 'MON', a: '#D2122E', b: '#FFFFFF', ink: '#fff', stadium: 'U-Power Stadium' },
        frosinone: { name: 'Frosinone', code: 'FRO', a: '#1C4E9A', b: '#FFD200', ink: '#fff', stadium: 'Stadio Benito Stirpe' },
        venezia: { name: 'Venezia', code: 'VEN', a: '#141414', b: '#F06A1A', ink: '#fff', stadium: 'Stadio Pier Luigi Penzo' }
    };

    const WEEKS = {
        11: { start: '2026-10-31', end: '2026-11-02', featuredId: 131 },
        12: { start: '2026-11-07', end: '2026-11-09', featuredId: 145 },
        13: { start: '2026-11-14', end: '2026-11-16', featuredId: 151 }
    };

    const m = (id, kickoff, home, away, status, hs = null, as = null, extra = {}) => ({
        id,
        kickoff,
        home,
        away,
        status,
        score: hs === null ? null : { home: hs, away: as },
        ...extra
    });

    const fixtures = {
        11: [
            m(131, '2026-10-31T18:00', 'roma', 'inter', 'Finished', 1, 2),
            m(132, '2026-10-31T15:00', 'lazio', 'torino', 'Finished', 1, 1),
            m(133, '2026-10-31T20:45', 'napoli', 'atalanta', 'Finished', 2, 0),
            m(134, '2026-11-01T12:30', 'fiorentina', 'juventus', 'Finished', 0, 2),
            m(135, '2026-11-01T15:00', 'bologna', 'milan', 'Finished', 1, 3),
            m(136, '2026-11-01T15:00', 'genoa', 'como', 'Finished', 0, 1),
            m(137, '2026-11-01T18:00', 'parma', 'udinese', 'Finished', 2, 2),
            m(138, '2026-11-01T20:45', 'cagliari', 'lecce', 'Finished', 1, 0),
            m(139, '2026-11-02T18:30', 'monza', 'frosinone', 'Finished', 1, 1),
            m(140, '2026-11-02T20:45', 'venezia', 'sassuolo', 'Finished', 1, 2)
        ],
        12: [
            m(141, '2026-11-07T15:00', 'atalanta', 'lazio', 'Finished', 3, 1),
            m(142, '2026-11-07T18:00', 'juventus', 'napoli', 'Finished', 1, 1),
            m(145, '2026-11-07T20:45', 'milan', 'roma', 'Finished', 2, 1),
            m(143, '2026-11-08T12:30', 'inter', 'fiorentina', 'Finished', 2, 1),
            m(144, '2026-11-08T15:00', 'torino', 'bologna', 'Live', 1, 0, { minute: 67 }),
            m(146, '2026-11-08T15:00', 'como', 'parma', 'Live', 2, 0, { minute: 64 }),
            m(147, '2026-11-08T20:45', 'udinese', 'genoa', 'NotStarted'),
            m(148, '2026-11-09T18:30', 'sassuolo', 'cagliari', 'NotStarted'),
            m(149, '2026-11-09T20:45', 'lecce', 'monza', 'Postponed', null, null, { note: 'Yoğun yağış, yeni tarih bekleniyor' }),
            m(150, '2026-11-09T20:45', 'frosinone', 'venezia', 'NotStarted')
        ],
        13: [
            m(151, '2026-11-14T20:45', 'inter', 'juventus', 'NotStarted'),
            m(152, '2026-11-14T18:00', 'napoli', 'milan', 'NotStarted'),
            m(153, '2026-11-14T15:00', 'roma', 'como', 'NotStarted'),
            m(154, '2026-11-15T12:30', 'lazio', 'bologna', 'NotStarted'),
            m(155, '2026-11-15T15:00', 'fiorentina', 'atalanta', 'NotStarted'),
            m(156, '2026-11-15T15:00', 'genoa', 'torino', 'NotStarted'),
            m(157, '2026-11-15T18:00', 'cagliari', 'udinese', 'NotStarted'),
            m(158, '2026-11-15T20:45', 'parma', 'lecce', 'NotStarted'),
            m(159, '2026-11-16T18:30', 'venezia', 'monza', 'NotStarted'),
            m(160, '2026-11-16T20:45', 'sassuolo', 'frosinone', 'NotStarted')
        ]
    };

    /* Demo veri servisi. Gerçek API bağlantısı daha sonra burada yapılabilir. */
    const FixtureService = {
        getWeek(week) {
            return Promise.resolve(
                fixtures[week] ? structuredCloneSafe(fixtures[week]) : []
            );
        }
    };

    function structuredCloneSafe(value) {
        return JSON.parse(JSON.stringify(value));
    }

    const STATUS_LABEL = {
        NotStarted: 'Başlamadı',
        Live: 'Canlı',
        Finished: 'Maç bitti',
        Postponed: 'Ertelendi'
    };

    const toDate = value =>
        new Date(value.length === 10 ? value + 'T00:00' : value);

    const fmtDay = new Intl.DateTimeFormat('tr-TR', {
        day: 'numeric',
        month: 'long',
        weekday: 'long'
    });

    const fmtDayMonth = new Intl.DateTimeFormat('tr-TR', {
        day: 'numeric',
        month: 'long'
    });

    const fmtWeekday = new Intl.DateTimeFormat('tr-TR', {
        weekday: 'long'
    });

    const fmtTime = new Intl.DateTimeFormat('tr-TR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const dayKey = iso => iso.slice(0, 10);

    const esc = value =>
        String(value).replace(/[&<>"']/g, char => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[char]);

    function weekRange(week) {
        const current = WEEKS[week];
        const start = toDate(current.start);
        const end = toDate(current.end);

        return `${fmtDayMonth.format(start)} – ${fmtDayMonth.format(end)} ${end.getFullYear()}`;
    }

    function crest(teamId, mod = '') {
        const team = TEAMS[teamId];

        return `<span class="team-crest ${mod}"
      style="--crest-a:${team.a};--crest-b:${team.b};--crest-ink:${team.ink}"
      aria-hidden="true">${team.code}</span>`;
    }

    const hasScore = fixture =>
        fixture.score !== null &&
        (fixture.status === 'Finished' || fixture.status === 'Live');

    const detailUrl = fixture => `/Match/Detail/${fixture.id}`;

    const chevron = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2.4" stroke-linecap="round"
      stroke-linejoin="round" aria-hidden="true">
      <path d="M9 6l6 6-6 6"/>
    </svg>`;

    function statusBadge(fixture) {
        const label = fixture.status === 'Live'
            ? `Canlı ${fixture.minute}'`
            : STATUS_LABEL[fixture.status];

        return `<span class="status status--${fixture.status}">${label}</span>`;
    }

    /* Haftalık istatistikler */
    function computeSummary(list) {
        const played = list.filter(hasScore);
        const finished = list.filter(f => f.status === 'Finished');

        const goals = played.reduce(
            (sum, fixture) => sum + fixture.score.home + fixture.score.away,
            0
        );

        return {
            total: list.length,
            finished: finished.length,
            live: list.filter(f => f.status === 'Live').length,
            notStarted: list.filter(f => f.status === 'NotStarted').length,
            postponed: list.filter(f => f.status === 'Postponed').length,
            goals,
            avgGoals: played.length ? goals / played.length : 0,
            draws: finished.filter(f => f.score.home === f.score.away).length,
            homeWins: finished.filter(f => f.score.home > f.score.away).length,
            awayWins: finished.filter(f => f.score.home < f.score.away).length
        };
    }

    /* Maç kartı */
    function fixtureCard(fixture) {
        const home = TEAMS[fixture.home];
        const away = TEAMS[fixture.away];

        let homeCls = '';
        let awayCls = '';

        if (
            fixture.status === 'Finished' &&
            fixture.score &&
            fixture.score.home !== fixture.score.away
        ) {
            const homeWon = fixture.score.home > fixture.score.away;
            homeCls = homeWon ? 'is-winner' : 'is-loser';
            awayCls = homeWon ? 'is-loser' : 'is-winner';
        }

        const score = hasScore(fixture)
            ? `<div class="fx-score"
          aria-label="Skor ${fixture.score.home}-${fixture.score.away}">
          <span>${fixture.score.home}</span>
          <span class="fx-score__sep" aria-hidden="true"></span>
          <span>${fixture.score.away}</span>
        </div>`
            : `<div class="fx-score fx-score--empty" aria-label="Skor yok">-</div>`;

        let action = `<span>${esc(home.stadium)}</span>`;

        if (fixture.status === 'Finished') {
            action = `<a class="fx-link" href="${detailUrl(fixture)}">Maç detayı${chevron}</a>`;
        }

        if (fixture.status === 'Live') {
            action = `<a class="fx-link" href="${detailUrl(fixture)}">Canlı takip${chevron}</a>`;
        }

        if (fixture.status === 'Postponed') {
            action = `<span>${esc(fixture.note || 'Yeni tarih bekleniyor')}</span>`;
        }

        const linked =
            fixture.status === 'Finished' || fixture.status === 'Live';

        return `
      <li>
        <article
          class="fixture-card fixture-card--${fixture.status}${linked ? ' is-linked' : ''}"
          data-match-id="${fixture.id}"
          data-match-status="${fixture.status}">

          <div class="fx-meta">
            <time class="fx-time" datetime="${fixture.kickoff}">
              ${fmtTime.format(toDate(fixture.kickoff))}
            </time>
            ${statusBadge(fixture)}
          </div>

          <div class="fx-team fx-team--home ${homeCls}">
            <span class="fx-name">${esc(home.name)}</span>
            ${crest(fixture.home)}
          </div>

          ${score}

          <div class="fx-team fx-team--away ${awayCls}">
            ${crest(fixture.away)}
            <span class="fx-name">${esc(away.name)}</span>
          </div>

          <div class="fx-action">${action}</div>
        </article>
      </li>`;
    }

    /* Maçları günlere göre grupla */
    function renderFixtures(list) {
        const groups = new Map();

        list.slice()
            .sort((a, b) =>
                a.kickoff.localeCompare(b.kickoff) || a.id - b.id
            )
            .forEach(fixture => {
                const key = dayKey(fixture.kickoff);

                if (!groups.has(key)) {
                    groups.set(key, []);
                }

                groups.get(key).push(fixture);
            });

        if (!list.length) {
            els.list.innerHTML =
                '<p class="page-note">Bu hafta için henüz fikstür yayımlanmadı.</p>';
            return;
        }

        els.list.innerHTML = Array.from(groups.entries())
            .map(([key, items]) => `
        <section class="day-group" aria-label="${fmtDay.format(toDate(key))}">
          <div class="day-head">
            <h3 class="day-head__date">${fmtDay.format(toDate(key))}</h3>
            <span class="day-head__count">${items.length} maç</span>
          </div>
          <ul class="day-list">${items.map(fixtureCard).join('')}</ul>
        </section>`)
            .join('');
    }

    /* Hafta seçiciyi oluştur */
    function renderWeekSelector() {
        const current = Number(els.page.dataset.currentWeek);

        els.weekList.innerHTML = Object.keys(WEEKS)
            .map(week => `
        <li>
          <button type="button"
            class="week-btn"
            data-week="${week}"
            aria-pressed="false">

            <span class="week-btn__top">
              <span class="week-btn__title">${week}. Hafta</span>

              ${Number(week) === current
                    ? '<span class="week-tag week-tag--current">Güncel</span>'
                    : ''}

              <span class="week-tag week-tag--active">Aktif hafta</span>
            </span>

            <span class="week-btn__range">${weekRange(week)}</span>
          </button>
        </li>`)
            .join('');
    }

    function syncWeekSelector(week) {
        els.weekList.querySelectorAll('[data-week]').forEach(button => {
            button.setAttribute(
                'aria-pressed',
                String(Number(button.dataset.week) === week)
            );
        });

        const keys = Object.keys(WEEKS).map(Number);

        els.prev.disabled = week <= Math.min(...keys);
        els.next.disabled = week >= Math.max(...keys);
    }

    /* Aktif hafta bilgisi */
    function renderWeekInfo(week, list, summary) {
        const ordered = list.slice().sort((a, b) =>
            a.kickoff.localeCompare(b.kickoff) || a.id - b.id
        );

        const doneText = summary.finished === summary.total
            ? 'Hafta tamamlandı'
            : `${summary.finished} / ${summary.total} maç tamamlandı`;

        els.info.innerHTML = `
      <div>
        <h2 class="week-info__title">${week}. Hafta</h2>
        <p class="week-info__range">${weekRange(week)}</p>
      </div>

      <ul class="week-facts">
        <li><strong>${summary.total}</strong>maç</li>
        <li><strong>20</strong>takım</li>
        <li><strong>${summary.goals}</strong>gol</li>
        ${summary.live ? `<li><strong>${summary.live}</strong>canlı</li>` : ''}
      </ul>

      <div class="week-progress">
        <div class="week-progress__head">
          <span>Hafta ilerlemesi</span>
          <strong>${doneText}</strong>
        </div>

        <div class="week-progress__bar" aria-hidden="true">
          ${ordered.map(fixture => `
            <span class="seg seg--${fixture.status}"
              title="${TEAMS[fixture.home].name} - ${TEAMS[fixture.away].name}: ${STATUS_LABEL[fixture.status]}">
            </span>`).join('')}
        </div>

        <div class="week-progress__legend" aria-hidden="true">
          <span><i style="background:rgba(31,201,138,.6)"></i>Bitti</span>
          <span><i style="background:var(--green)"></i>Canlı</span>
          <span><i></i>Başlamadı</span>
          <span><i style="background:var(--amber)"></i>Ertelendi</span>
        </div>
      </div>`;
    }

    /* Haftalık özet */
    function renderSummary(week, summary) {
        const decided = summary.homeWins + summary.draws + summary.awayWins;
        const average = summary.avgGoals.toFixed(2).replace('.', ',');

        els.summary.innerHTML = `
      <div class="panel__head">
        <h2 class="panel__title" id="summary-title">${week}. Hafta özeti</h2>
      </div>

      <dl class="summary-list">
        <div><dt>Maç</dt><dd>${summary.total}</dd></div>
        <div><dt>Tamamlanan</dt><dd>${summary.finished}</dd></div>
        <div><dt>Gol</dt><dd>${summary.goals}</dd></div>
        <div><dt>Maç başına gol</dt><dd>${average}</dd></div>
        <div><dt>Beraberlik</dt><dd>${summary.draws}</dd></div>
        <div><dt>Ev sahibi galibiyeti</dt><dd>${summary.homeWins}</dd></div>
        <div><dt>Deplasman galibiyeti</dt><dd>${summary.awayWins}</dd></div>
      </dl>

      <div class="result-split">
        <span class="result-split__title">Sonuç dağılımı</span>

        ${decided ? `
          <div class="result-split__bar" aria-hidden="true">
            <span class="r-home" style="flex:${summary.homeWins}"></span>
            <span class="r-draw" style="flex:${summary.draws}"></span>
            <span class="r-away" style="flex:${summary.awayWins}"></span>
          </div>

          <div class="result-split__legend">
            <span><i style="background:var(--blue)"></i>Ev ${summary.homeWins}</span>
            <span><i style="background:var(--dim)"></i>Beraberlik ${summary.draws}</span>
            <span><i style="background:var(--ice)"></i>Deplasman ${summary.awayWins}</span>
          </div>
        ` : `
          <div class="result-split__legend">
            <span>Henüz tamamlanan maç yok</span>
          </div>
        `}
      </div>

      <p class="summary-note">
        Gol sayısına canlı maçlar dahildir, sonuçlar yalnızca biten maçlardan hesaplanır.
      </p>`;
    }

    /* Haftanın öne çıkan maçı */
    function renderFeatured(week, list) {
        const fixture =
            list.find(item => item.id === WEEKS[week].featuredId) || list[0];

        if (!fixture) {
            els.featured.innerHTML = '';
            return;
        }

        const home = TEAMS[fixture.home];
        const away = TEAMS[fixture.away];
        const date = toDate(fixture.kickoff);

        const center = hasScore(fixture)
            ? `<span class="featured__score">${fixture.score.home}-${fixture.score.away}</span>`
            : '<span class="featured__score featured__score--vs">vs</span>';

        const link =
            fixture.status === 'Finished' || fixture.status === 'Live'
                ? `<a class="fx-link" href="${detailUrl(fixture)}">Maç detayı${chevron}</a>`
                : '';

        els.featured.innerHTML = `
      <div class="panel__head">
        <h2 class="panel__title" id="featured-title">Haftanın öne çıkan maçı</h2>
      </div>

      <div class="featured__body">
        <div class="featured__teams">
          <div class="featured__team">
            ${crest(fixture.home, 'team-crest--lg')}
            <span>${esc(home.name)}</span>
          </div>

          ${center}

          <div class="featured__team">
            ${crest(fixture.away, 'team-crest--lg')}
            <span>${esc(away.name)}</span>
          </div>
        </div>

        <ul class="featured__info">
          <li>${esc(home.stadium)}</li>
          <li>
            <span>${fmtWeekday.format(date)}, ${fmtDayMonth.format(date)}</span>
            ${fmtTime.format(date)}
          </li>
        </ul>

        <div class="featured__foot">
          ${statusBadge(fixture)}
          ${link}
        </div>
      </div>`;
    }

    /* HTML elemanları */
    const els = {
        page: document.querySelector('[data-fixtures-page]'),
        weekList: document.querySelector('[data-week-list]'),
        prev: document.querySelector('[data-week-step="-1"]'),
        next: document.querySelector('[data-week-step="1"]'),
        info: document.querySelector('[data-week-info]'),
        list: document.querySelector('[data-fixtures-list]'),
        summary: document.querySelector('[data-weekly-summary]'),
        featured: document.querySelector('[data-featured-match]')
    };

    /* Script diğer sayfalarda yüklense bile hata oluşmasını önle */
    if (!els.page || !els.weekList || !els.prev || !els.next ||
        !els.info || !els.list || !els.summary || !els.featured) {
        return;
    }

    let activeWeek = null;
    let requestId = 0;

    async function loadWeek(week) {
        if (!WEEKS[week] || week === activeWeek) {
            return;
        }

        activeWeek = week;
        syncWeekSelector(week);
        els.list.classList.add('is-loading');

        const myRequest = ++requestId;

        try {
            const list = await FixtureService.getWeek(week);

            if (myRequest !== requestId) {
                return;
            }

            const summary = computeSummary(list);

            renderWeekInfo(week, list, summary);
            renderFixtures(list);
            renderSummary(week, summary);
            renderFeatured(week, list);

            try {
                history.replaceState(null, '', `?hafta=${week}`);
            } catch {
                // Tarayıcı geçmişi güncellenemiyorsa sayfa yine çalışabilir.
            }
        } catch (error) {
            console.error('Fikstür yüklenemedi:', error);
            els.list.innerHTML =
                '<p class="page-note">Fikstür yüklenirken bir hata oluştu.</p>';
        } finally {
            if (myRequest === requestId) {
                els.list.classList.remove('is-loading');
            }
        }
    }

    /* Hafta düğmeleri */
    els.weekList.addEventListener('click', event => {
        const button = event.target.closest('[data-week]');

        if (button) {
            loadWeek(Number(button.dataset.week));
        }
    });

    /* Klavye ile hafta değiştirme */
    els.weekList.addEventListener('keydown', event => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
            return;
        }

        const step = event.key === 'ArrowLeft' ? -1 : 1;
        const target = activeWeek + step;

        if (!WEEKS[target]) {
            return;
        }

        loadWeek(target);

        els.weekList
            .querySelector(`[data-week="${target}"]`)
            ?.focus();
    });

    /* Önceki ve sonraki hafta */
    [els.prev, els.next].forEach(button => {
        button.addEventListener('click', () => {
            loadWeek(activeWeek + Number(button.dataset.weekStep));
        });
    });

    /* Kartın boş alanına tıklayınca maç detayını aç */
    els.list.addEventListener('click', event => {
        if (event.target.closest('a')) {
            return;
        }

        const card = event.target.closest('.fixture-card.is-linked');
        const link = card?.querySelector('.fx-link');

        if (link) {
            link.click();
        }
    });

    /* Başlangıç: URL'deki haftayı veya varsayılan haftayı aç */
    renderWeekSelector();

    const fromUrl = Number(
        new URLSearchParams(location.search).get('hafta')
    );

    loadWeek(
        WEEKS[fromUrl]
            ? fromUrl
            : Number(els.page.dataset.currentWeek)
    );
})();
