(function () {
    'use strict';

    /*****************
    *     Global     *
    *****************/

    const assetsUrl = 'https://raw.githubusercontent.com/ebodziony/gladiatus-script/master/assets';

    let autoGoActive = sessionStorage.getItem('autoGoActive') === "true" ? true : false;

    const currentDate = $("#server-time").html().split(',')[0];

    const player = {
        level: Number($("#header_values_level").first().html()),
        hp: Number($("#header_values_hp_percent").first().html().replace(/[^0-9]/gi, '')),
        gold: Number($("#sstat_gold_val").first().html().replace(/\./g, '')),
    };

    /*****************
    *     Config     *
    *****************/

    // Mode

    let safeMode = false;
    let nextEncounterTime = Number(localStorage.getItem('nextEncounter'));

    // Quests

    let doQuests = true;
    if (localStorage.getItem('doQuests')) {
        doQuests = localStorage.getItem('doQuests') === "true" ? true : false;
    }
    let questTypes = {
        combat: true,
        arena: true,
        circus: true,
        expedition: true,
        dungeon: true,
        items: true
    };
    if (localStorage.getItem('questTypes')) {
        questTypes = JSON.parse(localStorage.getItem('questTypes'));
    }
    let nextQuestTime = 0;
    if (localStorage.getItem('nextQuestTime')) {
        nextQuestTime = Number(localStorage.getItem('nextQuestTime'));
    }

    // Expedition

    let doExpedition = true;
    if (localStorage.getItem('doExpedition')) {
        doExpedition = localStorage.getItem('doExpedition') === "true" ? true : false;
    };
    let monsterId = 0;
    if (localStorage.getItem('monsterId')) {
        monsterId = Number(localStorage.getItem('monsterId'));
    };

    // Dungeon

    let doDungeon = true;
    if (localStorage.getItem('doDungeon')) {
        doDungeon = localStorage.getItem('doDungeon') === "true" ? true : false;
    };
    if (player.level < 10) {
        doDungeon = false;
    };
    let dungeonDifficulty = localStorage.getItem('dungeonDifficulty') === 'advanced' ? 'advanced' : 'normal';
    let dungeonFightBoss = false;
    if (localStorage.getItem('dungeonFightBoss')) {
        dungeonFightBoss = localStorage.getItem('dungeonFightBoss') === "true" ? true : false;
    };

    // Arena

    let doArena = true;
    if (localStorage.getItem('doArena')) {
        doArena = localStorage.getItem('doArena') === "true" ? true : false;
    };
    if (player.level < 2) {
        doArena = false;
    };
    let arenaOpponentLevel = "min"
    if (localStorage.getItem('arenaOpponentLevel')) {
        arenaOpponentLevel = localStorage.getItem('arenaOpponentLevel');
    };

    // Circus

    let doCircus = true;
    if (localStorage.getItem('doCircus')) {
        doCircus = localStorage.getItem('doCircus') === "true" ? true : false;
    };
    if (player.level < 10) {
        doCircus = false;
    };
    let circusOpponentLevel = "min"
    if (localStorage.getItem('circusOpponentLevel')) {
        circusOpponentLevel = localStorage.getItem('circusOpponentLevel');
    };

    // Event Expedition

    let doEventExpedition = true;
    if (localStorage.getItem('doEventExpedition')) {
        doEventExpedition = localStorage.getItem('doEventExpedition') === "true" ? true : false;
    };

    const submenu2 = document.getElementById("submenu2");
    if (!submenu2 || !submenu2.getElementsByClassName("menuitem glow")[0]) {
        doEventExpedition = false;
    }

    let eventMonsterId = 0;
    if (localStorage.getItem('eventMonsterId')) {
        eventMonsterId = Number(localStorage.getItem('eventMonsterId'));
    };

    let nextEventExpeditionTime = 0;
    if (localStorage.getItem('nextEventExpeditionTime')) {
        nextEventExpeditionTime = Number(localStorage.getItem('nextEventExpeditionTime'));
    };

    let eventPoints = 16;
    if (localStorage.getItem('eventPoints')) {
        const savedEventPoints = JSON.parse(localStorage.getItem('eventPoints'));

        if (savedEventPoints.date === currentDate) {
            eventPoints = savedEventPoints.count;
        };
    };

    // Heal

    let healEnabled = true;
    if (localStorage.getItem('healEnabled')) {
        healEnabled = localStorage.getItem('healEnabled') === "true" ? true : false;
    };

    let healMarketBuyEnabled = true;
    if (localStorage.getItem('tdmHealMarketBuyEnabled')) {
        healMarketBuyEnabled = localStorage.getItem('tdmHealMarketBuyEnabled') === "true" ? true : false;
    };

    let healMarketBuyIntervalMinutes = 10;
    if (localStorage.getItem('tdmHealMarketScanIntervalMinutes')) {
        const savedHealMarketBuyIntervalMinutes = Number(localStorage.getItem('tdmHealMarketScanIntervalMinutes'));
        if (!Number.isNaN(savedHealMarketBuyIntervalMinutes)) {
            healMarketBuyIntervalMinutes = Math.max(1, savedHealMarketBuyIntervalMinutes);
        }
    };

    let healMarketFoodPriceMultiplier = 1.2;
    if (localStorage.getItem('tdmHealMarketFoodPriceMultiplier')) {
        const savedHealMarketFoodPriceMultiplier = Number(localStorage.getItem('tdmHealMarketFoodPriceMultiplier'));
        if (!Number.isNaN(savedHealMarketFoodPriceMultiplier)) {
            healMarketFoodPriceMultiplier = Math.max(0.1, savedHealMarketFoodPriceMultiplier);
        }
    };

    let healUnderHP = 40;
    if (localStorage.getItem('healUnderHP')) {
        const savedHealUnderHP = Number(localStorage.getItem('healUnderHP'));
        if (!Number.isNaN(savedHealUnderHP)) {
            healUnderHP = Math.min(100, Math.max(1, savedHealUnderHP));
        }
    };

    let healTabs = [5, 4, 1];
    if (localStorage.getItem('healTabs')) {
        try {
            const savedHealTabs = JSON.parse(localStorage.getItem('healTabs'));
            if (Array.isArray(savedHealTabs)) {
                healTabs = savedHealTabs
                    .map(function (tab) { return Number(tab); })
                    .filter(function (tab, index, tabs) {
                        return tab >= 1 && tab <= 5 && tabs.indexOf(tab) === index;
                    });
            }
        } catch (error) {
            healTabs = [5, 4, 1];
        }
    };

    // Auction

    let auctionEnabled = true;
    if (localStorage.getItem('auctionEnabled')) {
        auctionEnabled = localStorage.getItem('auctionEnabled') === "true" ? true : false;
    };
    let auctionMinGold = parseGoldValue(localStorage.getItem('tdmAuctionMinGold'));

    // Guild Market

    let guildMarketAutoBuyEnabled = true;
    if (localStorage.getItem('tdmGuildMarketAutoBuyEnabled')) {
        guildMarketAutoBuyEnabled = localStorage.getItem('tdmGuildMarketAutoBuyEnabled') === "true" ? true : false;
    };
    let guildMarketAutoBuyMinGold = parseGoldValue(localStorage.getItem('tdmGuildMarketAutoBuyMinGold')) || 100000;
    let guildMarketAutoBuyMaxPrice = parseGoldValue(localStorage.getItem('tdmGuildMarketAutoBuyMaxPrice')) || 100000;

    const auctionStatusOptions = [
        { key: 'very short', label: 'Very short' },
        { key: 'short', label: 'Short' },
        { key: 'middle', label: 'Middle' },
        { key: 'long', label: 'Long' },
        { key: 'very long', label: 'Very long' }
    ];
    const defaultAuctionBuyStatuses = ['short', 'very short'];
    let auctionBuyStatuses = defaultAuctionBuyStatuses.slice();
    if (localStorage.getItem('tdmAuctionBuyStatuses')) {
        try {
            const savedAuctionBuyStatuses = JSON.parse(localStorage.getItem('tdmAuctionBuyStatuses'));
            if (Array.isArray(savedAuctionBuyStatuses)) {
                auctionBuyStatuses = savedAuctionBuyStatuses
                    .map(function (status) { return String(status).trim().toLowerCase(); })
                    .filter(function (status, index, statuses) {
                        if (statuses.indexOf(status) !== index) {
                            return false;
                        }

                        return auctionStatusOptions.some(function (option) { return option.key === status; });
                    });
            }
        } catch (error) {
            auctionBuyStatuses = defaultAuctionBuyStatuses.slice();
        }
    };

    // GCA UI features

    const shortcutOptions = [
        { key: 'overview', label: 'Overview' },
        { key: 'packages', label: 'Packages' },
        { key: 'auction', label: 'Auction' },
        { key: 'market', label: 'Market' },
        { key: 'guildMarket', label: 'Guild Market' },
        { key: 'training', label: 'Training' },
        { key: 'forge', label: 'Forge' },
        { key: 'smeltery', label: 'Smeltery' },
        { key: 'workbench', label: 'Workbench' },
        { key: 'guildBankingHouse', label: 'Guild Bank' },
        { key: 'messages', label: 'Messages' },
        { key: 'arena', label: 'Arena' },
        { key: 'dungeon', label: 'Dungeon' },
        { key: 'quests', label: 'Quests' }
    ];
    const defaultShortcutButtons = ['overview', 'packages', 'auction', 'market', 'guildMarket', 'training', 'forge', 'smeltery', 'guildBankingHouse', 'messages'];

    let shortcutsBarEnabled = true;
    if (localStorage.getItem('tdmShortcutsBarEnabled')) {
        shortcutsBarEnabled = localStorage.getItem('tdmShortcutsBarEnabled') === "true" ? true : false;
    };

    let auctionStatusBarEnabled = true;
    if (localStorage.getItem('tdmAuctionStatusBarEnabled')) {
        auctionStatusBarEnabled = localStorage.getItem('tdmAuctionStatusBarEnabled') === "true" ? true : false;
    };

    let shortcutButtons = defaultShortcutButtons.slice();
    if (localStorage.getItem('tdmShortcutButtons')) {
        try {
            const savedShortcutButtons = JSON.parse(localStorage.getItem('tdmShortcutButtons'));
            if (Array.isArray(savedShortcutButtons)) {
                shortcutButtons = savedShortcutButtons.filter(function (shortcut, index, shortcuts) {
                    if (shortcuts.indexOf(shortcut) !== index) {
                        return false;
                    }
                    return shortcutOptions.some(function (option) { return option.key === shortcut; });
                });
                localStorage.setItem('tdmShortcutButtons', JSON.stringify(shortcutButtons));
            }
        } catch (error) {
            shortcutButtons = defaultShortcutButtons.slice();
        }
    };

    // Smelter

    let smelterEnabled = true;
    if (localStorage.getItem('smelterEnabled')) {
        smelterEnabled = localStorage.getItem('smelterEnabled') === "true" ? true : false;
    };

    /*****************
    *  Translations  *
    *****************/

    const contentEN = {
        advanced: 'Advanced',
        arena: 'Arena',
        auction: 'Auction',
        circusTurma: 'Circus Turma',
        difficulty: 'Difficulty',
        dungeon: 'Dungeon',
        fightBoss: 'Fight Boss',
        eventExpedition: 'Event Expedition',
        expedition: 'Expedition',
        heal: 'Auto Heal',
        healMarketBuy: 'Auto buy market food',
        healMarketBuyInterval: 'Market scan interval (minutes)',
        healMarketBuyPriceMultiplier: 'Max price multiplier',
        healHp: 'Use food under HP',
        healTabs: 'Inventory Tabs',
        highest: 'Highest',
        in: 'In',
        lastUsed: "Last Used",
        location: 'Location',
        lowest: 'Lowest',
        nextAction: 'Next action',
        no: 'No',
        normal: 'Normal',
        opponent: 'Opponent',
        opponentLevel: 'Opponent Level',
        quests: 'Quests',
        random: 'Random',
        settings: 'Settings',
        smelter: 'Smelter',
        shortcuts: 'Shortcuts',
        shortcutsBar: 'Shortcuts Bar',
        auctionStatusBar: 'Auction Status Bar',
        auctionBuyStatuses: 'Buy statuses',
        auctionMinGold: 'Minimum gold',
        guildMarket: 'Guild Market',
        guildMarketAutoBuy: 'Auto buy and relist',
        guildMarketMinGold: 'Minimum gold to start',
        guildMarketMaxPrice: 'Maximum item price',
        gcaUi: 'GCA UI',
        soon: 'Soon...',
        type: 'Type',
        yes: 'Yes'
    }

    const contentPL = {
        advanced: 'Zaawansowane',
        arena: 'Arena',
        auction: 'Aukcja',
        circusTurma: 'Circus Turma',
        difficulty: 'Trudność',
        dungeon: 'Lochy',
        fightBoss: 'Bij Bossa',
        eventExpedition: 'Wyprawa Eventowa',
        expedition: 'Wyprawa',
        heal: 'Auto Heal',
        healMarketBuy: 'Auto kupowanie jedzenia',
        healMarketBuyInterval: 'Interwał marketu (minuty)',
        healMarketBuyPriceMultiplier: 'Mnożnik maks. ceny',
        healHp: 'Użyj jedzenia poniżej HP',
        healTabs: 'Zakładki Ekwipunku',
        highest: 'Najwyższy',
        in: 'Za',
        lastUsed: "Ostatnio Używana",
        location: 'Lokacja',
        lowest: 'Najniższy',
        nextAction: 'Następna akcja',
        no: 'Nie',
        normal: 'Normalne',
        opponent: 'Przeciwnik',
        opponentLevel: 'Poziom Przeciwnika',
        quests: 'Zadania',
        random: 'Losowy',
        settings: 'Ustawienia',
        smelter: 'Smelter',
        shortcuts: 'Shortcuts',
        shortcutsBar: 'Shortcuts Bar',
        auctionStatusBar: 'Auction Status Bar',
        auctionBuyStatuses: 'Buy statuses',
        auctionMinGold: 'Minimum gold',
        guildMarket: 'Guild Market',
        guildMarketAutoBuy: 'Auto buy and relist',
        guildMarketMinGold: 'Minimum gold to start',
        guildMarketMaxPrice: 'Maximum item price',
        gcaUi: 'GCA UI',
        soon: 'Wkrótce...',
        type: 'Rodzaj',
        yes: 'Tak'
    }

    const contentES = {
        advanced: 'Avanzado',
        arena: 'Arena',
        auction: 'Subasta',
        circusTurma: 'Circus Turma',
        difficulty: 'Dificultad',
        dungeon: 'Mazmorra',
        fightBoss: 'Atacar jefe',
        eventExpedition: 'Expedición de Evento',
        expedition: 'Expedición',
        heal: 'Auto Heal',
        healMarketBuy: 'Auto comprar comida',
        healMarketBuyInterval: 'Intervalo de mercado (minutos)',
        healMarketBuyPriceMultiplier: 'Multiplicador de precio máximo',
        healHp: 'Usar comida bajo HP',
        healTabs: 'Pestañas de Inventario',
        highest: 'Más alto',
        in: 'En',
        lastUsed: "Último visitado",
        location: 'Localización',
        lowest: 'Más bajo',
        nextAction: 'Próxima Acción',
        no: 'No',
        normal: 'Normal',
        opponent: 'Oponente',
        opponentLevel: 'Nivel de oponente',
        quests: 'Misiones',
        random: 'Aleatorio',
        settings: 'Configuración',
        smelter: 'Smelter',
        shortcuts: 'Shortcuts',
        shortcutsBar: 'Shortcuts Bar',
        auctionStatusBar: 'Auction Status Bar',
        auctionBuyStatuses: 'Buy statuses',
        auctionMinGold: 'Minimum gold',
        guildMarket: 'Guild Market',
        guildMarketAutoBuy: 'Auto buy and relist',
        guildMarketMinGold: 'Minimum gold to start',
        guildMarketMaxPrice: 'Maximum item price',
        gcaUi: 'GCA UI',
        soon: 'Próximamente...',
        type: 'Tipo',
        yes: 'Si'
    }

    let content;

    const language = localStorage.getItem('settings.language')

    switch (language) {
        case 'EN':
            content = { ...contentEN }
            break;
        case 'PL':
            content = { ...contentPL }
            break;
        case 'ES':
            content = { ...contentES }
            break;
        default:
            content = { ...contentEN }
    }

    /****************
    *   Interface   *
    ****************/

    // Set Auto Go Active
    function setAutoGoActive() {
        sessionStorage.setItem('autoGoActive', true);
        document.getElementById("autoGoButton").innerHTML = 'STOP'
        document.getElementById("autoGoButton").removeEventListener("click", setAutoGoActive);
        document.getElementById("autoGoButton").addEventListener("click", setAutoGoInactive);
        autoGo();
    };

    // Set Auto Go Inactive
    function setAutoGoInactive() {
        sessionStorage.setItem('autoGoActive', false);
        document.getElementById("autoGoButton").innerHTML = 'Auto GO'
        document.getElementById("autoGoButton").addEventListener("click", setAutoGoActive);
        document.getElementById("autoGoButton").removeEventListener("click", setAutoGoInactive);

        clearTimeout(setTimeout);

        if (document.getElementById("nextActionWindow")) {
            document.getElementById("nextActionWindow").remove();
        };

        if (document.getElementById("lowHealth")) {
            document.getElementById("lowHealth").remove();
        };
    };

    // Open Settings
    function openSettings(scrollTop = 0) {

        function closeSettings() {
            document.getElementById("settingsWindow").remove();
            document.getElementById("overlayBack").remove();
        };

        var settingsWindow = document.createElement("div");
        settingsWindow.setAttribute("id", "settingsWindow")
        settingsWindow.innerHTML = `
                <span id="settingsLanguage">
                    <img id="languageEN" src="${assetsUrl}/GB.png">
                    <img id="languagePL" src="${assetsUrl}/PL.png">
                    <img id="languageES" src="${assetsUrl}/ES.png">
                </span>
                <span id="settingsHeader">${content.settings}</span>
                <div id="settingsContent" style=" row-gap: 30px; ">
                    <div
                        id="expedition_settings"
                        class="settings_box"
                    >
                        <div class="settingsHeaderBig">${content.expedition}</div>
                        <div class="settingsSubcontent">
                            <div id="do_expedition_true" class="settingsButton">${content.yes}</div>
                            <div id="do_expedition_false" class="settingsButton">${content.no}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.opponent}</div>
                        <div class="settingsSubcontent">
                            <div id="set_monster_id_0" class="settingsButton">1</div>
                            <div id="set_monster_id_1" class="settingsButton">2</div>
                            <div id="set_monster_id_2" class="settingsButton">3</div>
                            <div id="set_monster_id_3" class="settingsButton">Boss</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.location}</div>
                        <div class="settingsSubcontent">
                            <div id="set_expedition_location" class="settingsButton">${content.lastUsed}</div>
                        </div>
                    </div>

                    <div
                        id="dungeon_settings"
                        class="settings_box"
                    >
                        <div class="settingsHeaderBig">${content.dungeon}</div>
                        <div class="settingsSubcontent">
                            <div id="do_dungeon_true" class="settingsButton">${content.yes}</div>
                            <div id="do_dungeon_false" class="settingsButton">${content.no}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.difficulty}</div>
                        <div class="settingsSubcontent">
                            <div id="set_dungeon_difficulty_normal" class="settingsButton">${content.normal}</div>
                            <div id="set_dungeon_difficulty_advanced" class="settingsButton">${content.advanced}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.fightBoss}</div>
                        <div class="settingsSubcontent">
                            <div id="set_dungeon_fight_boss_true" class="settingsButton">${content.yes}</div>
                            <div id="set_dungeon_fight_boss_false" class="settingsButton">${content.no}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.location}</div>
                        <div class="settingsSubcontent">
                            <div id="set_dungeon_location" class="settingsButton">${content.lastUsed}</div>
                        </div>
                    </div>

                    <div
                        id="arena_settings"
                        class="settings_box"
                    >
                        <div class="settingsHeaderBig">${content.arena}</div>
                        <div class="settingsSubcontent">
                            <div id="do_arena_true" class="settingsButton">${content.yes}</div>
                            <div id="do_arena_false" class="settingsButton">${content.no}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.opponentLevel}</div>
                        <div class="settingsSubcontent">
                            <div id="set_arena_opponent_level_min" class="settingsButton">${content.lowest}</div>
                            <div id="set_arena_opponent_level_max" class="settingsButton">${content.highest}</div>
                            <div id="set_arena_opponent_level_random" class="settingsButton">${content.random}</div>
                        </div>
                    </div>

                    <div
                        id="circus_settings"
                        class="settings_box"
                    >
                        <div class="settingsHeaderBig">${content.circusTurma}</div>
                        <div class="settingsSubcontent">
                            <div id="do_circus_true" class="settingsButton">${content.yes}</div>
                            <div id="do_circus_false" class="settingsButton">${content.no}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.opponentLevel}</div>
                        <div class="settingsSubcontent">
                            <div id="set_circus_opponent_level_min" class="settingsButton">${content.lowest}</div>
                            <div id="set_circus_opponent_level_max" class="settingsButton">${content.highest}</div>
                            <div id="set_circus_opponent_level_random" class="settingsButton">${content.random}</div>
                        </div>
                    </div>

                    <div
                        id="quests_settings"
                        class="settings_box"
                    >
                        <div class="settingsHeaderBig">${content.quests}</div>
                        <div class="settingsSubcontent">
                            <div id="do_quests_true" class="settingsButton">${content.yes}</div>
                            <div id="do_quests_false" class="settingsButton">${content.no}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.type}</div>
                        <div class="settingsSubcontent">
                            <div id="do_combat_quests" class="settingsButton quest-type combat"></div>
                            <div id="do_arena_quests" class="settingsButton quest-type arena"></div>
                            <div id="do_circus_quests" class="settingsButton quest-type circus"></div>
                            <div id="do_expedition_quests" class="settingsButton quest-type expedition"></div>
                            <div id="do_dungeon_quests" class="settingsButton quest-type dungeon"></div>
                            <div id="do_items_quests" class="settingsButton quest-type items"></div>
                        </div>
                    </div>

                    <div
                        id="event_expedition_settings"
                        class="settings_box"
                    >
                        <div class="settingsHeaderBig">${content.eventExpedition}</div>
                        <div class="settingsSubcontent">
                            <div id="do_event_expedition_true" class="settingsButton">${content.yes}</div>
                            <div id="do_event_expedition_false" class="settingsButton">${content.no}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.opponent}</div>
                        <div class="settingsSubcontent">
                            <div id="set_event_monster_id_0" class="settingsButton">1</div>
                            <div id="set_event_monster_id_1" class="settingsButton">2</div>
                            <div id="set_event_monster_id_2" class="settingsButton">3</div>
                            <div id="set_event_monster_id_3" class="settingsButton">Boss</div>
                        </div>
                    </div>

                    <div
                        id="heal_settings"
                        class="settings_box"
                    >
                        <div class="settingsHeaderBig">${content.heal}</div>
                        <div class="settingsSubcontent">
                            <div id="do_heal_true" class="settingsButton">${content.yes}</div>
                            <div id="do_heal_false" class="settingsButton">${content.no}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.healMarketBuy}</div>
                        <div class="settingsSubcontent">
                            <div id="do_heal_market_buy_true" class="settingsButton">${content.yes}</div>
                            <div id="do_heal_market_buy_false" class="settingsButton">${content.no}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.healMarketBuyInterval}</div>
                        <div class="settingsSubcontent">
                            <input id="set_heal_market_buy_interval" class="settingsInput" type="number" min="1" value="${healMarketBuyIntervalMinutes}">
                        </div>
                        <div class="settingsHeaderSmall">${content.healMarketBuyPriceMultiplier}</div>
                        <div class="settingsSubcontent">
                            <input id="set_heal_market_buy_price_multiplier" class="settingsInput" type="number" min="0.1" step="0.1" value="${healMarketFoodPriceMultiplier}">
                        </div>
                        <div class="settingsHeaderSmall">${content.healHp}</div>
                        <div class="settingsSubcontent">
                            <input id="set_heal_under_hp" class="settingsInput" type="number" min="1" max="100" value="${healUnderHP}">
                        </div>
                        <div class="settingsHeaderSmall">${content.healTabs}</div>
                        <div class="settingsSubcontent">
                            <div id="set_heal_tab_1" class="settingsButton">1</div>
                            <div id="set_heal_tab_2" class="settingsButton">2</div>
                            <div id="set_heal_tab_3" class="settingsButton">3</div>
                            <div id="set_heal_tab_4" class="settingsButton">4</div>
                            <div id="set_heal_tab_5" class="settingsButton">5</div>
                        </div>
                    </div>

                    <div
                        id="auction_settings"
                        class="settings_box"
                    >
                        <div class="settingsHeaderBig">${content.auction}</div>
                        <div class="settingsSubcontent">
                            <div id="do_auction_true" class="settingsButton">${content.yes}</div>
                            <div id="do_auction_false" class="settingsButton">${content.no}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.auctionMinGold}</div>
                        <div class="settingsSubcontent">
                            <input id="set_auction_min_gold" class="settingsInput" type="text" placeholder="10k" value="${auctionMinGold > 0 ? formatGoldValue(auctionMinGold) : ''}">
                        </div>
                        <div class="settingsHeaderSmall">${content.auctionStatusBar}</div>
                        <div class="settingsSubcontent">
                            <div id="do_auction_status_bar_true" class="settingsButton">${content.yes}</div>
                            <div id="do_auction_status_bar_false" class="settingsButton">${content.no}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.auctionBuyStatuses}</div>
                        <div class="settingsSubcontent auction-status-settings-list">
                            ${auctionStatusOptions.map(function (option) {
                                return `<div id="set_auction_buy_status_${option.key.replace(/\s/g, '_')}" class="settingsButton auction-status-setting-button">${option.label}</div>`;
                            }).join('')}
                        </div>
                    </div>

                    <div
                        id="guild_market_settings"
                        class="settings_box"
                    >
                        <div class="settingsHeaderBig">${content.guildMarket}</div>
                        <div class="settingsHeaderSmall">${content.guildMarketAutoBuy}</div>
                        <div class="settingsSubcontent">
                            <div id="do_guild_market_auto_buy_true" class="settingsButton">${content.yes}</div>
                            <div id="do_guild_market_auto_buy_false" class="settingsButton">${content.no}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.guildMarketMinGold}</div>
                        <div class="settingsSubcontent">
                            <input id="set_guild_market_auto_buy_min_gold" class="settingsInput" type="text" placeholder="100k" value="${formatGoldValue(guildMarketAutoBuyMinGold)}">
                        </div>
                        <div class="settingsHeaderSmall">${content.guildMarketMaxPrice}</div>
                        <div class="settingsSubcontent">
                            <input id="set_guild_market_auto_buy_max_price" class="settingsInput" type="text" placeholder="100k" value="${formatGoldValue(guildMarketAutoBuyMaxPrice)}">
                        </div>
                    </div>

                    <div
                        id="gca_ui_settings"
                        class="settings_box"
                    >
                        <div class="settingsHeaderBig">${content.gcaUi}</div>
                        <div class="settingsHeaderSmall">${content.shortcutsBar}</div>
                        <div class="settingsSubcontent">
                            <div id="do_shortcuts_bar_true" class="settingsButton">${content.yes}</div>
                            <div id="do_shortcuts_bar_false" class="settingsButton">${content.no}</div>
                        </div>
                        <div class="settingsHeaderSmall">${content.shortcuts}</div>
                        <div class="settingsSubcontent shortcut-settings-list">
                            ${shortcutOptions.map(function (option) {
                                return `<div id="set_shortcut_${option.key}" class="settingsButton shortcut-setting-button">${option.label}</div>`;
                            }).join('')}
                        </div>
                    </div>

                    <div
                        id="smelter_settings"
                        class="settings_box"
                        style=" opacity: 0.5; "
                    >
                        <div class="settingsHeaderBig">${content.smelter}</div>
                        <div class="settingsSubcontent">
                            <div id="do_smelter_true" class="settingsButton">${content.yes}</div>
                            <div id="do_smelter_false" class="settingsButton">${content.no}</div>
                        </div>
                    </div>
                </div>`;
        document.getElementById("header_game").insertBefore(settingsWindow, document.getElementById("header_game").children[0]);

        var overlayBack = document.createElement("div");
        const wrapperHeight = document.getElementById("wrapper_game").clientHeight;
        overlayBack.setAttribute("id", "overlayBack");
        overlayBack.setAttribute("style", `height: ${wrapperHeight}px;`);
        overlayBack.addEventListener("click", closeSettings);
        document.getElementsByTagName("body")[0].appendChild(overlayBack);

        // Set Language

        function setLanguage(language) {
            localStorage.setItem('settings.language', language)

            switch (language) {
                case 'EN':
                    content = { ...contentEN }
                    break;
                case 'PL':
                    content = { ...contentPL }
                    break;
                case 'ES':
                    content = { ...contentES }
                    break;
                default:
                    content = { ...contentEN }
            };

            reloadSettings();
        };

        $("#languageEN").click(function () { setLanguage('EN') });
        $("#languagePL").click(function () { setLanguage('PL') });
        $("#languageES").click(function () { setLanguage('ES') });

        // Change Settings

        function setDoExpedition(bool) {
            doExpedition = bool;
            localStorage.setItem('doExpedition', bool);
            reloadSettings();
        };

        $("#do_expedition_true").click(function () { setDoExpedition(true) });
        $("#do_expedition_false").click(function () { setDoExpedition(false) });

        function setMonster(id) {
            monsterId = id;
            localStorage.setItem('monsterId', id);
            reloadSettings();
        };

        $("#set_monster_id_0").click(function () { setMonster('0') });
        $("#set_monster_id_1").click(function () { setMonster('1') });
        $("#set_monster_id_2").click(function () { setMonster('2') });
        $("#set_monster_id_3").click(function () { setMonster('3') });

        function setDoDungeon(bool) {
            doDungeon = bool;
            localStorage.setItem('doDungeon', bool);
            reloadSettings();
        };

        $("#do_dungeon_true").click(function () { setDoDungeon(true) });
        $("#do_dungeon_false").click(function () { setDoDungeon(false) });

        function setDungeonDifficulty(difficulty) {
            dungeonDifficulty = difficulty;
            localStorage.setItem('dungeonDifficulty', difficulty);
            reloadSettings();
        };

        $("#set_dungeon_difficulty_normal").click(function () { setDungeonDifficulty("normal") });
        $("#set_dungeon_difficulty_advanced").click(function () { setDungeonDifficulty("advanced") });

        function setDungeonFightBoss(bool) {
            dungeonFightBoss = bool;
            localStorage.setItem('dungeonFightBoss', bool);
            reloadSettings();
        };

        $("#set_dungeon_fight_boss_true").click(function () { setDungeonFightBoss(true) });
        $("#set_dungeon_fight_boss_false").click(function () { setDungeonFightBoss(false) });

        function setDoArena(bool) {
            doArena = bool;
            localStorage.setItem('doArena', bool);
            reloadSettings();
        };

        $("#do_arena_true").click(function () { setDoArena(true) });
        $("#do_arena_false").click(function () { setDoArena(false) });

        function setArenaOpponentLevel(level) {
            arenaOpponentLevel = level;
            localStorage.setItem('arenaOpponentLevel', level);
            reloadSettings();
        };

        $("#set_arena_opponent_level_min").click(function () { setArenaOpponentLevel('min') });
        $("#set_arena_opponent_level_max").click(function () { setArenaOpponentLevel('max') });
        $("#set_arena_opponent_level_random").click(function () { setArenaOpponentLevel('random') });

        function setDoCircus(bool) {
            doCircus = bool;
            localStorage.setItem('doCircus', bool);
            reloadSettings();
        };

        $("#do_circus_true").click(function () { setDoCircus(true) });
        $("#do_circus_false").click(function () { setDoCircus(false) });

        function setCircusOpponentLevel(level) {
            circusOpponentLevel = level;
            localStorage.setItem('circusOpponentLevel', level);
            reloadSettings();
        };

        $("#set_circus_opponent_level_min").click(function () { setCircusOpponentLevel('min') });
        $("#set_circus_opponent_level_max").click(function () { setCircusOpponentLevel('max') });
        $("#set_circus_opponent_level_random").click(function () { setCircusOpponentLevel('random') });

        function setDoQuests(bool) {
            doQuests = bool;
            localStorage.setItem('doQuests', bool);
            reloadSettings();
        };

        $("#do_quests_true").click(function () { setDoQuests(true) });
        $("#do_quests_false").click(function () { setDoQuests(false) });

        function setQuestTypes(type) {
            questTypes[type] = !questTypes[type];
            localStorage.setItem('questTypes', JSON.stringify(questTypes));
            reloadSettings();
        };

        $("#do_combat_quests").click(function () { setQuestTypes('combat') });
        $("#do_arena_quests").click(function () { setQuestTypes('arena') });
        $("#do_circus_quests").click(function () { setQuestTypes('circus') });
        $("#do_expedition_quests").click(function () { setQuestTypes('expedition') });
        $("#do_dungeon_quests").click(function () { setQuestTypes('dungeon') });
        $("#do_items_quests").click(function () { setQuestTypes('items') });

        function setDoEventExpedition(bool) {
            doEventExpedition = bool;
            localStorage.setItem('doEventExpedition', bool);
            reloadSettings();
        };

        $("#do_event_expedition_true").click(function () { setDoEventExpedition(true) });
        $("#do_event_expedition_false").click(function () { setDoEventExpedition(false) });

        function setEventMonster(id) {
            eventMonsterId = id;
            localStorage.setItem('eventMonsterId', id);
            reloadSettings();
        };

        $("#set_event_monster_id_0").click(function () { setEventMonster('0') });
        $("#set_event_monster_id_1").click(function () { setEventMonster('1') });
        $("#set_event_monster_id_2").click(function () { setEventMonster('2') });
        $("#set_event_monster_id_3").click(function () { setEventMonster('3') });

        function setHealEnabled(bool) {
            healEnabled = bool;
            localStorage.setItem('healEnabled', bool);
            reloadSettings();
        };

        $("#do_heal_true").click(function () { setHealEnabled(true) });
        $("#do_heal_false").click(function () { setHealEnabled(false) });

        function setHealMarketBuyEnabled(bool) {
            healMarketBuyEnabled = bool;
            localStorage.setItem('tdmHealMarketBuyEnabled', bool);
            reloadSettings();
        };

        $("#do_heal_market_buy_true").click(function () { setHealMarketBuyEnabled(true) });
        $("#do_heal_market_buy_false").click(function () { setHealMarketBuyEnabled(false) });

        function setHealMarketBuyIntervalMinutes(value) {
            const nextValue = Math.max(1, Number(value) || 10);
            healMarketBuyIntervalMinutes = nextValue;
            localStorage.setItem('tdmHealMarketScanIntervalMinutes', nextValue);
            reloadSettings();
        };

        $("#set_heal_market_buy_interval").change(function () { setHealMarketBuyIntervalMinutes(this.value) });

        function setHealMarketFoodPriceMultiplier(value) {
            const nextValue = Math.max(0.1, Number(value) || 1.2);
            healMarketFoodPriceMultiplier = nextValue;
            localStorage.setItem('tdmHealMarketFoodPriceMultiplier', nextValue);
            reloadSettings();
        };

        $("#set_heal_market_buy_price_multiplier").change(function () { setHealMarketFoodPriceMultiplier(this.value) });

        function setHealUnderHP(value) {
            const nextValue = Math.min(100, Math.max(1, Number(value) || 40));
            healUnderHP = nextValue;
            localStorage.setItem('healUnderHP', nextValue);
            reloadSettings();
        };

        $("#set_heal_under_hp").change(function () { setHealUnderHP(this.value) });

        function setHealTab(tab) {
            if (healTabs.includes(tab)) {
                healTabs = healTabs.filter(function (savedTab) {
                    return savedTab !== tab;
                });
            } else {
                healTabs.push(tab);
            }

            localStorage.setItem('healTabs', JSON.stringify(healTabs));
            reloadSettings();
        };

        $("#set_heal_tab_1").click(function () { setHealTab(1) });
        $("#set_heal_tab_2").click(function () { setHealTab(2) });
        $("#set_heal_tab_3").click(function () { setHealTab(3) });
        $("#set_heal_tab_4").click(function () { setHealTab(4) });
        $("#set_heal_tab_5").click(function () { setHealTab(5) });

        function setAuctionEnabled(bool) {
            auctionEnabled = bool;
            localStorage.setItem('auctionEnabled', bool);
            reloadSettings();
        };

        $("#do_auction_true").click(function () { setAuctionEnabled(true) });
        $("#do_auction_false").click(function () { setAuctionEnabled(false) });

        function setAuctionMinGold(value) {
            auctionMinGold = parseGoldValue(value);

            if (auctionMinGold > 0) {
                localStorage.setItem('tdmAuctionMinGold', String(auctionMinGold));
            } else {
                localStorage.removeItem('tdmAuctionMinGold');
            }

            reloadSettings();
        };

        $("#set_auction_min_gold").change(function () { setAuctionMinGold(this.value) });

        function setAuctionBuyStatus(status) {
            if (auctionBuyStatuses.includes(status)) {
                auctionBuyStatuses = auctionBuyStatuses.filter(function (savedStatus) {
                    return savedStatus !== status;
                });
            } else {
                auctionBuyStatuses.push(status);
            }

            localStorage.setItem('tdmAuctionBuyStatuses', JSON.stringify(auctionBuyStatuses));
            reloadSettings();
        };

        auctionStatusOptions.forEach(function (option) {
            $(`#set_auction_buy_status_${option.key.replace(/\s/g, '_')}`).click(function () { setAuctionBuyStatus(option.key) });
        });

        function setGuildMarketAutoBuyEnabled(bool) {
            guildMarketAutoBuyEnabled = bool;
            localStorage.setItem('tdmGuildMarketAutoBuyEnabled', bool);
            reloadSettings();
        };

        $("#do_guild_market_auto_buy_true").click(function () { setGuildMarketAutoBuyEnabled(true) });
        $("#do_guild_market_auto_buy_false").click(function () { setGuildMarketAutoBuyEnabled(false) });

        function setGuildMarketAutoBuyMinGold(value) {
            guildMarketAutoBuyMinGold = parseGoldValue(value) || 100000;
            localStorage.setItem('tdmGuildMarketAutoBuyMinGold', String(guildMarketAutoBuyMinGold));
            reloadSettings();
        };

        $("#set_guild_market_auto_buy_min_gold").change(function () { setGuildMarketAutoBuyMinGold(this.value) });

        function setGuildMarketAutoBuyMaxPrice(value) {
            guildMarketAutoBuyMaxPrice = parseGoldValue(value) || 100000;
            localStorage.setItem('tdmGuildMarketAutoBuyMaxPrice', String(guildMarketAutoBuyMaxPrice));
            reloadSettings();
        };

        $("#set_guild_market_auto_buy_max_price").change(function () { setGuildMarketAutoBuyMaxPrice(this.value) });

        function notifyGcaFeaturesChanged() {
            window.dispatchEvent(new CustomEvent('tdmGcaFeaturesChanged'));
        };

        function setShortcutsBarEnabled(bool) {
            shortcutsBarEnabled = bool;
            localStorage.setItem('tdmShortcutsBarEnabled', bool);
            notifyGcaFeaturesChanged();
            reloadSettings();
        };

        $("#do_shortcuts_bar_true").click(function () { setShortcutsBarEnabled(true) });
        $("#do_shortcuts_bar_false").click(function () { setShortcutsBarEnabled(false) });

        function setAuctionStatusBarEnabled(bool) {
            auctionStatusBarEnabled = bool;
            localStorage.setItem('tdmAuctionStatusBarEnabled', bool);
            notifyGcaFeaturesChanged();
            reloadSettings();
        };

        $("#do_auction_status_bar_true").click(function () { setAuctionStatusBarEnabled(true) });
        $("#do_auction_status_bar_false").click(function () { setAuctionStatusBarEnabled(false) });

        function setShortcutButton(shortcut) {
            if (shortcutButtons.includes(shortcut)) {
                shortcutButtons = shortcutButtons.filter(function (savedShortcut) {
                    return savedShortcut !== shortcut;
                });
            } else {
                shortcutButtons.push(shortcut);
            }

            localStorage.setItem('tdmShortcutButtons', JSON.stringify(shortcutButtons));
            notifyGcaFeaturesChanged();
            reloadSettings();
        };

        shortcutOptions.forEach(function (option) {
            $(`#set_shortcut_${option.key}`).click(function () { setShortcutButton(option.key) });
        });

        function setSmelterEnabled(bool) {
            smelterEnabled = bool;
            localStorage.setItem('smelterEnabled', bool);
            reloadSettings();
        };

        $("#do_smelter_true").click(function () { setSmelterEnabled(true) });
        $("#do_smelter_false").click(function () { setSmelterEnabled(false) });

        function reloadSettings() {
            const settingsContent = document.getElementById("settingsContent");
            const currentScrollTop = settingsContent ? settingsContent.scrollTop : 0;
            closeSettings();
            openSettings(currentScrollTop);
        }

        function setActiveButtons() {
            $('#expedition_settings').addClass(doExpedition ? 'active' : 'inactive');
            $(`#do_expedition_${doExpedition}`).addClass('active');
            $(`#set_monster_id_${monsterId}`).addClass('active');

            $('#dungeon_settings').addClass(doDungeon ? 'active' : 'inactive');
            $(`#do_dungeon_${doDungeon}`).addClass('active');
            $(`#set_dungeon_difficulty_${dungeonDifficulty}`).addClass('active');
            $(`#set_dungeon_fight_boss_${dungeonFightBoss}`).addClass('active');

            $('#arena_settings').addClass(doArena ? 'active' : 'inactive');
            $(`#do_arena_${doArena}`).addClass('active');
            $(`#set_arena_opponent_level_${arenaOpponentLevel}`).addClass('active');

            $('#circus_settings').addClass(doCircus ? 'active' : 'inactive');
            $(`#do_circus_${doCircus}`).addClass('active');
            $(`#set_circus_opponent_level_${circusOpponentLevel}`).addClass('active');

            $('#quests_settings').addClass(doQuests ? 'active' : 'inactive');
            $(`#do_quests_${doQuests}`).addClass('active');

            for (const type in questTypes) {
                if (questTypes[type]) {
                    $(`#do_${type}_quests`).addClass('active');
                }
            }

            $('#event_expedition_settings').addClass(doEventExpedition ? 'active' : 'inactive');
            $(`#do_event_expedition_${doEventExpedition}`).addClass('active');
            $(`#set_event_monster_id_${eventMonsterId}`).addClass('active');

            $('#heal_settings').addClass((healEnabled || healMarketBuyEnabled) ? 'active' : 'inactive');
            $(`#do_heal_${healEnabled}`).addClass('active');
            $(`#do_heal_market_buy_${healMarketBuyEnabled}`).addClass('active');
            healTabs.forEach(function (tab) {
                $(`#set_heal_tab_${tab}`).addClass('active');
            });

            $('#auction_settings').addClass((auctionEnabled || auctionStatusBarEnabled) ? 'active' : 'inactive');
            $(`#do_auction_${auctionEnabled}`).addClass('active');
            $(`#do_auction_status_bar_${auctionStatusBarEnabled}`).addClass('active');
            auctionBuyStatuses.forEach(function (status) {
                $(`#set_auction_buy_status_${status.replace(/\s/g, '_')}`).addClass('active');
            });

            $('#guild_market_settings').addClass(guildMarketAutoBuyEnabled ? 'active' : 'inactive');
            $(`#do_guild_market_auto_buy_${guildMarketAutoBuyEnabled}`).addClass('active');

            $('#gca_ui_settings').addClass(shortcutsBarEnabled ? 'active' : 'inactive');
            $(`#do_shortcuts_bar_${shortcutsBarEnabled}`).addClass('active');
            shortcutButtons.forEach(function (shortcut) {
                $(`#set_shortcut_${shortcut}`).addClass('active');
            });

            $('#smelter_settings').addClass(smelterEnabled ? 'active' : 'inactive');
            $(`#do_smelter_${smelterEnabled}`).addClass('active');
        };

        setActiveButtons();

        if (scrollTop > 0) {
            requestAnimationFrame(function () {
                const settingsContent = document.getElementById("settingsContent");

                if (settingsContent) {
                    settingsContent.scrollTop = scrollTop;
                }
            });
        }
    };

    // Auto GO button

    var autoGoButton = document.createElement("button");
    autoGoButton.setAttribute("id", "autoGoButton")
    autoGoButton.className = 'menuitem';

    if (autoGoActive == false) {
        autoGoButton.innerHTML = 'Auto GO';
        autoGoButton.addEventListener("click", setAutoGoActive);
    } else {
        autoGoButton.innerHTML = 'STOP';
        autoGoButton.addEventListener("click", setAutoGoInactive);
    };

    document.getElementById("mainmenu").insertBefore(autoGoButton, document.getElementById("mainmenu").children[0]);

    // Settings button

    var settingsButton = document.createElement("button");
    settingsButton.className = 'menuitem';
    settingsButton.innerHTML = `<img src="${assetsUrl}/cog.svg" title="Ustawienia" height="20" width="20" style="filter: invert(83%) sepia(52%) saturate(503%) hue-rotate(85deg) brightness(103%) contrast(101%); z-index: 999;">`;
    settingsButton.setAttribute("style", "display: flex; justify-content: center; align-items: center; height: 27px; width: 27px; cursor: pointer; border: none; color: #5dce5d; padding: 0; background-image: url('https://i.imgur.com/jf7BXTX.png')");
    settingsButton.addEventListener("click", openSettings);
    document.getElementById("mainmenu").insertBefore(settingsButton, document.getElementById("mainmenu").children[1]);

    /****************
    *    Helpers    *
    ****************/

    function parseGoldValue(value) {
        if (value === null || value === undefined) {
            return 0;
        }

        const normalizedValue = String(value).trim().toLowerCase();
        if (!normalizedValue) {
            return 0;
        }

        const multiplier = normalizedValue.endsWith('k') ? 1000 :
            normalizedValue.endsWith('m') ? 1000000 : 1;
        const numericValue = Number(normalizedValue
            .replace(/[km]$/i, '')
            .replace(/[^\d]/g, ''));

        return Number.isFinite(numericValue) ? numericValue * multiplier : 0;
    }

    function formatGoldValue(value) {
        return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function getSmallestIntIndex(values) {
        let index = 0;
        let minValue = values[0];

        for (let i = 1; i < values.length; i++) {
            if (values[i] < minValue) {
                minValue = values[i];
                index = i;
            }
        };
        return index;
    };

    function getLargestIntIndex(values) {
        let index = 0;
        let maxValue = values[0];

        for (let i = 1; i < values.length; i++) {
            if (values[i] > maxValue) {
                maxValue = values[i];
                index = i;
            }
        };
        return index;
    };

    function getRandomIntIndex(values) {
        const index = Math.floor(Math.random() * values.length);

        return index;
    };

    function convertTimeToMs(t) {
        const ms = Number(t.split(':')[0]) * 60 * 60 * 1000 + Number(t.split(':')[1]) * 60 * 1000 + Number(t.split(':')[2]) * 1000;

        return ms;
    };

    function readQuestCooldownTime() {
        const ticker = document.querySelector("#quest_header_cooldown span.ticker");
        if (!ticker) {
            return null;
        }

        const tickerText = ticker.textContent.trim();
        let cooldown = tickerText ? convertTimeToMs(tickerText) : 0;

        if (!Number.isFinite(cooldown) || cooldown <= 0) {
            cooldown = Number(ticker.getAttribute('data-ticker-time-left'));
        }

        return Number.isFinite(cooldown) && cooldown > 0 ? cooldown : null;
    }

    function goToQuestsPage() {
        const questLink = document.querySelector('a[href*="mod=quests"]');
        if (questLink) {
            questLink.click();
            return;
        }

        const url = new URL('/game/index.php', window.location.origin);
        url.searchParams.set('mod', 'quests');

        const hash = getSecureHash();
        if (hash) {
            url.searchParams.set('sh', hash);
        }

        window.location.href = url.toString();
    }

    function getSecureHash() {
        const queryHash = new URLSearchParams(window.location.search).get('sh');
        if (queryHash) {
            return queryHash;
        }

        if (typeof secureHash !== 'undefined' && secureHash) {
            return secureHash;
        }

        const hashInput = document.querySelector('input[name="sh"], input[name="secureHash"]');
        return hashInput ? hashInput.value : '';
    }

    function buildGuildMarketUrl() {
        const url = new URL('/game/index.php', window.location.origin);
        url.searchParams.set('mod', 'guildMarket');

        const hash = getSecureHash();
        if (hash) {
            url.searchParams.set('sh', hash);
        }

        return url.toString();
    }

    function shouldPauseForGuildMarket() {
        if (!guildMarketAutoBuyEnabled || player.gold < guildMarketAutoBuyMinGold) {
            return false;
        }

        const currentMod = new URL(window.location.href).searchParams.get('mod');
        if (currentMod === 'guildMarket') {
            console.log('TDM Guild Market: pause Auto Go tren guildMarket de mua/ban.');
            return true;
        }

        window.location.href = buildGuildMarketUrl();
        return true;
    }

    /****************
    *    Auto Go    *
    ****************/

    function autoGo() {

        // Variables

        const currentTime = new Date().getTime();
        const clickDelay = getRandomInt(900, 2400);

        if (shouldPauseForGuildMarket()) {
            return;
        }

        // Claim Daily Reward

        if (document.getElementById("blackoutDialogLoginBonus") !== null) {
            setTimeout(function () {
                document.getElementById("blackoutDialogLoginBonus").getElementsByTagName("input")[0].click();
            }, clickDelay);
        };

        // Close Notifications

        const dialog = document.getElementById("blackoutDialognotification");

        if (
            dialog &&
            dialog.offsetParent !== null
        ) {
            setTimeout(function () {
                dialog.getElementsByTagName("input")[0]?.click();
            }, clickDelay);
        }

        /***************
        *   Use Food   *
        ***************/

        if (player.hp < 10) {
            console.log("Low health");

            var lowHealthAlert = document.createElement("div");

            function showLowHealthAlert() {
                lowHealthAlert.setAttribute("id", "lowHealth")
                lowHealthAlert.setAttribute("style", `
                    display: block;
                    position: absolute;
                    top: 120px;
                    left: 506px;
                    width: 365px;
                    padding: 20px 0;
                    color: #ea1414;
                    background-color: #000000db;
                    font-size: 20px;
                    border-radius: 25px;
                    border-left: 10px solid #ea1414;
                    border-right: 10px solid #ea1414;
                    z-index: 999;
                `);
                lowHealthAlert.innerHTML = '<span>Low Health!</span>';
                document.getElementById("header_game").insertBefore(lowHealthAlert, document.getElementById("header_game").children[0]);
            };
            showLowHealthAlert();

            // @TODO
        }

        /****************
        * Handle Quests *
        ****************/

        else if (doQuests === true && nextQuestTime < currentTime) {
            function setNextQuestTime(delayMs) {
                nextQuestTime = Date.now() + delayMs;
                localStorage.setItem('nextQuestTime', nextQuestTime);
            }

            function continueAfterQuestAction() {
                setNextQuestTime(10 * 1000);
                setTimeout(function () {
                    autoGo();
                }, getRandomInt(1600, 2600));
            }

            function completeQuests() {
                const inPanteonPage = $("body").first().attr("id") === "questsPage";

                if (!inPanteonPage) {
                    goToQuestsPage();
                } else {
                    const completedQuests = $("#content .contentboard_slot a.quest_slot_button_finish");

                    if (completedQuests.length) {
                        completedQuests[0].click();
                        continueAfterQuestAction();
                    } else {
                        repeatQuests();
                    }
                }
            };

            function repeatQuests() {
                const failedQuests = $("#content .contentboard_slot a.quest_slot_button_restart");

                if (failedQuests.length) {
                    failedQuests[0].click();
                    continueAfterQuestAction();
                } else {
                    takeQuest();
                }
            }

            // Start Fix custom
            function rerollQuests() {
                const rerollButton = document.querySelector('#quest_footer_reroll input');
                if (!rerollButton) {
                    checkNextQuestTime();
                    return;
                }

                const onclick = rerollButton.getAttribute('onclick') || '';
                const urlMatch = onclick.match(/document\.location\.href\s*=\s*['"]([^'"]+)['"]/);
                if (urlMatch) {
                    window.location.href = urlMatch[1].replace(/&amp;/g, '&');
                    return;
                }

                rerollButton.click();
                continueAfterQuestAction();
            }

            function takeQuest() {
                const canTakeQuest = $("#content .contentboard_slot a.quest_slot_button_accept");

                if (canTakeQuest.length) {
                    const liveQuestCooldown = readQuestCooldownTime();
                    if (liveQuestCooldown) {
                        setNextQuestTime(liveQuestCooldown + 1500);
                        return;
                    }

                    function getIconName(url, title = "", timeDiv = null) {
                        const normalizedTitle = String(title || '').trim();

                        if (/\bsuccession\b/i.test(normalizedTitle)) {
                            return { type: null, reason: 'succession' };
                        }

                        if (timeDiv) {
                            return { type: null, reason: 'time limit' };
                        }

                        if (url.includes('icon_combat_')) {
                            return { type: 'combat' };
                        }

                        if (url.includes('icon_arena_')) {
                            return { type: 'arena' };
                        }

                        if (url.includes('icon_grouparena_')) {
                            return { type: 'circus' };
                        }

                        if (url.includes('icon_expedition_')) {
                            return { type: 'expedition' };
                        }

                        if (url.includes('icon_dungeon_')) {
                            return { type: 'dungeon' };
                        }

                        if (url.includes('icon_items_')) {
                            return { type: 'items' };
                        }

                        return { type: null, reason: 'unknown icon' };
                    }

                    const availableQuests = $("#content .contentboard_slot_inactive");

                    for (const quest of availableQuests) {
                        const iconDiv = quest.getElementsByClassName("quest_slot_icon")[0];
                        const titleDiv = quest.getElementsByClassName("quest_slot_title")[0];
                        const timeDiv = quest.getElementsByClassName("quest_slot_time")[0];

                        const questType = getIconName(
                            iconDiv?.style.backgroundImage || '',
                            titleDiv?.innerText || '',
                            timeDiv
                        );

                        if (!questType.type) {
                            console.log(`TDM quest skip (${questType.reason}): ${titleDiv?.innerText || ''}`);
                            continue;
                        }

                        if (questTypes[questType.type]) {
                            const acceptButton = quest.getElementsByClassName("quest_slot_button_accept")[0];
                            if (acceptButton) {
                                acceptButton.click();
                                continueAfterQuestAction();
                            } else {
                                checkNextQuestTime();
                            }
                            return;
                        }

                        console.log(`TDM quest skip (${questType.type} disabled): ${titleDiv?.innerText || ''}`);
                    }

                    console.log('TDM quest: khong co quest phu hop voi settings, reroll.');
                    rerollQuests();
                    return;
                }

                rerollQuests();
            }
            // End fix custom

            // function checkNextQuestTime() {
            //     const span = document.querySelector("#quest_header_cooldown span.ticker");

            //     let nextQuestIn;

            //     if (span) {
            //         const text = span.textContent.trim(); // Ví dụ: "0:04:39"

            //         const parts = text.split(':').map(Number);
            //         if (parts.length === 3) {
            //             const [h, m, s] = parts;
            //             nextQuestIn = ((h * 60 + m) * 60 + s) * 1000;
            //         } else if (parts.length === 2) {
            //             const [m, s] = parts;
            //             nextQuestIn = (m * 60 + s) * 1000;
            //         } else {
            //             nextQuestIn = 1 * 60 * 1000; // fallback nếu không đúng định dạng
            //         }

            //     } else {
            //         nextQuestIn = 1 * 60 * 1000; // fallback nếu không tìm thấy span
            //     }

            //     const nextQuestTime = Date.now() + nextQuestIn;
            //     localStorage.setItem('nextQuestTime', nextQuestTime);

            //     autoGo(); // tiếp tục logic tự động
            // }

            function checkNextQuestTime() {
                setNextQuestTime((readQuestCooldownTime() || 60 * 1000) + 1500);
            }

            setTimeout(function () {
                completeQuests();
            }, clickDelay);
        }

        /****************
        * Go Expedition *
        ****************/

        else if (doExpedition === true && document.getElementById("cooldown_bar_fill_expedition").classList.contains("cooldown_bar_fill_ready") === true) {
            function goExpedition() {
                const inExpeditionPage = document.body.id === "locationPage"; // không cần jQuery nếu bạn muốn nhẹ

                const content = document.getElementById("content");
                const imgs = content?.getElementsByTagName('img');
                const secondImg = imgs?.[1];
                const src = secondImg?.getAttribute('src');
                const inEventExpeditionPage = src === 'img/ui/expedition_points2.png';

                if (!inExpeditionPage || inEventExpeditionPage) {
                    document.getElementsByClassName("cooldown_bar_link")?.[0]?.click();
                } else {
                    document.getElementsByClassName("expedition_button")?.[monsterId]?.click();
                }
            }

            setTimeout(function () {
                goExpedition();
            }, clickDelay);

        }

        /**************
        * Go Dungeon  *
        **************/

        else if (window.tdmDungeon?.isReady()) {
            window.tdmDungeon.go(clickDelay);
        }

        /************************
        * Go Arena Provinciarum *
        ************************/

        else if (doArena === true && document.getElementById("cooldown_bar_fill_arena").classList.contains("cooldown_bar_fill_ready") === true) {
            function goArena() {
                const inArenaPage = document.getElementsByTagName("body")[0].id === "arenaPage";

                if (!inArenaPage && player.level < 10) {
                    document.getElementsByClassName("cooldown_bar_link")[1].click();
                } else if (!inArenaPage) {
                    document.getElementsByClassName("cooldown_bar_link")[2].click();
                } else {
                    const inArenaProvPage = document.getElementById("mainnav")?.getElementsByTagName("td")[1]?.firstElementChild?.classList.contains("awesome-tabs") && document.getElementById("mainnav")?.getElementsByTagName("td")[1]?.firstElementChild?.classList.contains("current");

                    if (!inArenaProvPage) {
                        document.getElementById("mainnav").getElementsByTagName("td")[1].firstElementChild.click();
                    } else {
                        const levels = new Array();
                        levels[0] = Number(document.getElementById("own2").getElementsByTagName("td")[1].firstChild.nodeValue)
                        levels[1] = Number(document.getElementById("own2").getElementsByTagName("td")[5].firstChild.nodeValue)
                        levels[2] = Number(document.getElementById("own2").getElementsByTagName("td")[9].firstChild.nodeValue)
                        levels[3] = Number(document.getElementById("own2").getElementsByTagName("td")[13].firstChild.nodeValue)
                        levels[4] = Number(document.getElementById("own2").getElementsByTagName("td")[17].firstChild.nodeValue)

                        let opponentIndex;

                        if (arenaOpponentLevel === "min") {
                            opponentIndex = getSmallestIntIndex(levels)
                        } else if (arenaOpponentLevel === "max") {
                            opponentIndex = getLargestIntIndex(levels)
                        } else {
                            opponentIndex = getRandomIntIndex(levels)
                        }

                        document.getElementsByClassName("attack")[opponentIndex].click();
                    }
                }
            };

            setTimeout(function () {
                goArena();
            }, clickDelay + 600);

        }

        /*************************
        * Go Circus Provinciarum *
        *************************/

        else if (doCircus === true && document.getElementById("cooldown_bar_fill_ct").classList.contains("cooldown_bar_fill_ready") === true) {
            function goCircus() {
                const inArenaPage = document.getElementsByTagName("body")[0].id === "arenaPage";

                if (!inArenaPage) {
                    document.getElementsByClassName("cooldown_bar_link")[3].click();
                } else {
                    const inCircusProvPage = document.getElementById("mainnav")?.getElementsByTagName("td")[3]?.firstElementChild?.classList.contains("awesome-tabs") && document.getElementById("mainnav")?.getElementsByTagName("td")[3]?.firstElementChild?.classList.contains("current");

                    if (!inCircusProvPage) {
                        document.getElementById("mainnav").getElementsByTagName("td")[3].firstElementChild.click();
                    } else {
                        const levels = new Array();
                        levels[0] = Number(document.getElementById("own3").getElementsByTagName("td")[1].firstChild.nodeValue)
                        levels[1] = Number(document.getElementById("own3").getElementsByTagName("td")[5].firstChild.nodeValue)
                        levels[2] = Number(document.getElementById("own3").getElementsByTagName("td")[9].firstChild.nodeValue)
                        levels[3] = Number(document.getElementById("own3").getElementsByTagName("td")[13].firstChild.nodeValue)
                        levels[4] = Number(document.getElementById("own3").getElementsByTagName("td")[17].firstChild.nodeValue)

                        let opponentIndex;

                        if (circusOpponentLevel === "min") {
                            opponentIndex = getSmallestIntIndex(levels)
                        } else if (circusOpponentLevel === "max") {
                            opponentIndex = getLargestIntIndex(levels)
                        } else {
                            opponentIndex = getRandomIntIndex(levels)
                        }

                        document.getElementsByClassName("attack")[opponentIndex].click();
                    };
                };
            };

            setTimeout(function () {
                goCircus();
            }, clickDelay + 600);

        }

        /************************
        *  Go Event Expedition  *
        ************************/

        else if (doEventExpedition === true && nextEventExpeditionTime < currentTime && eventPoints > 0) {
            function goEventExpedition() {
                const inEventExpeditionPage = document.getElementById("submenu2").getElementsByClassName("menuitem active glow")[0];

                if (!inEventExpeditionPage) {
                    document.getElementById("submenu2").getElementsByClassName("menuitem glow")[0].click();
                } else {
                    eventPoints = document.getElementById("content").getElementsByClassName("section-header")[0].getElementsByTagName("p")[1].firstChild.nodeValue.replace(/[^0-9]/gi, '')
                    localStorage.setItem('eventPoints', JSON.stringify({ count: eventPoints, date: currentDate }));

                    const isTimer = $('#content .ticker').first()

                    if (isTimer.length) {
                        nextEventExpeditionTime = currentTime + Number($('#content .ticker').first().attr('data-ticker-time-left'));
                        localStorage.setItem('nextEventExpeditionTime', nextEventExpeditionTime);

                        location.reload();
                    } else if (eventPoints == 0) {
                        location.reload();
                    } else if (eventPoints == 1 && eventMonsterId == 3) {
                        localStorage.setItem('eventPoints', JSON.stringify({ count: 0, date: currentDate }));

                        document.getElementsByClassName("expedition_button")[2].click();
                    } else {
                        if (eventMonsterId == 3) {
                            localStorage.setItem('eventPoints', JSON.stringify({ count: eventPoints - 2, date: currentDate }));
                        } else {
                            localStorage.setItem('eventPoints', JSON.stringify({ count: eventPoints - 1, date: currentDate }));
                        }

                        nextEventExpeditionTime = currentTime + 303000;
                        localStorage.setItem('nextEventExpeditionTime', nextEventExpeditionTime);

                        document.getElementsByClassName("expedition_button")[eventMonsterId].click();
                    }
                }
            };

            setTimeout(function () {
                goEventExpedition();
            }, clickDelay);

        }

        /***********************
        * Wait for Next Action *
        ***********************/

        else {

            /******************
            *    Fast Mode    *
            ******************/

            if (safeMode === false) {
                const actions = [];
                const liveQuestCooldown = readQuestCooldownTime();
                if (liveQuestCooldown) {
                    nextQuestTime = currentTime + liveQuestCooldown;
                    localStorage.setItem('nextQuestTime', nextQuestTime);
                }

                if (doExpedition === true) {
                    const timeTo = convertTimeToMs(document.getElementById("cooldown_bar_text_expedition").innerText);

                    actions.push({
                        name: 'expedition',
                        time: timeTo,
                        index: 0
                    });
                };

                if (doDungeon === true) {
                    const timeTo = convertTimeToMs(document.getElementById("cooldown_bar_text_dungeon").innerText);

                    actions.push({
                        name: 'dungeon',
                        time: timeTo,
                        index: 1
                    });
                };

                if (doArena === true) {
                    const timeTo = convertTimeToMs(document.getElementById("cooldown_bar_text_arena").innerText);

                    actions.push({
                        name: 'arena',
                        time: timeTo,
                        index: 2,
                    });
                };

                if (doCircus === true) {
                    const timeTo = convertTimeToMs(document.getElementById("cooldown_bar_text_ct").innerText);

                    actions.push({
                        name: 'circusTurma',
                        time: timeTo,
                        index: 3,
                    });
                };

                if (doEventExpedition === true && eventPoints > 0) {
                    const timeTo = localStorage.getItem('nextEventExpeditionTime') - currentTime;

                    actions.push({
                        name: 'eventExpedition',
                        time: timeTo,
                        index: 4,
                    });
                };

                if (doQuests === true && nextQuestTime > currentTime) {
                    actions.push({
                        name: 'quests',
                        time: nextQuestTime - currentTime,
                        index: 5,
                    });
                };

                function getNextAction(actions) {
                    if (!actions.length) {
                        return null;
                    }

                    let index = 0;
                    let minValue = actions[0].time;

                    for (let i = 1; i < actions.length; i++) {
                        if (actions[i].time < minValue) {
                            minValue = actions[i].time;
                            index = i;
                        }
                    };
                    return actions[index]
                };

                const nextAction = getNextAction(actions);

                if (!nextAction) {
                    return;
                }

                function formatTime(timeInMs) {
                    if (timeInMs < 1000) {
                        return "0:00:00"
                    };

                    let timeInSecs = timeInMs / 1000;
                    timeInSecs = Math.round(timeInSecs);
                    let secs = timeInSecs % 60;
                    if (secs < 10) {
                        secs = "0" + secs;
                    };
                    timeInSecs = (timeInSecs - secs) / 60;
                    let mins = timeInSecs % 60;
                    if (mins < 10) {
                        mins = "0" + mins;
                    };
                    let hrs = (timeInSecs - mins) / 60;

                    return hrs + ':' + mins + ':' + secs;
                };

                var nextActionWindow = document.createElement("div");

                function showNextActionWindow() {
                    nextActionWindow.setAttribute("id", "nextActionWindow")
                    nextActionWindow.setAttribute("style", `
                        display: block;
                        position: absolute;
                        top: 120px;
                        left: 506px;
                        height: 72px;
                        width: 365px;
                        padding-top: 13px;
                        color: #58ffbb;
                        background-color: #000000db;
                        font-size: 20px;
                        border-radius: 20px;
                        border-left: 10px solid #58ffbb;
                        border-right: 10px solid #58ffbb;
                        z-index: 999;
                    `);
                    nextActionWindow.innerHTML = `
                        <span style="color: #fff;">${content.nextAction}: </span>
                        <span>${content[nextAction.name]}</span></br>
                        <span style="color: #fff;">${content.in}: </span>
                        <span>${formatTime(nextAction.time)}</span>`;
                    document.getElementById("header_game").insertBefore(nextActionWindow, document.getElementById("header_game").children[0]);
                };
                showNextActionWindow();

                let nextActionCounter;

                nextActionCounter = setInterval(function () {
                    nextAction.time = nextAction.time - 1000;

                    nextActionWindow.innerHTML = `
                        <span style="color: #fff;">${content.nextAction}: </span>
                        <span>${content[nextAction.name]}</span></br>
                        <span style="color: #fff;">${content.in}: </span>
                        <span>${formatTime(nextAction.time)}</span>`;

                    if (nextAction.time <= 0) {
                        clearInterval(nextActionCounter);

                        if (nextAction.index === 4) {
                            document.getElementById("submenu2").getElementsByClassName("menuitem glow")[0].click();
                        }
                        else if (nextAction.index === 5) {
                            goToQuestsPage();
                        }
                        else {
                            setTimeout(function () {
                                document.getElementsByClassName("cooldown_bar_link")[nextAction.index].click();
                            }, clickDelay);
                        };
                    };
                }, 1000);
            }

            /******************
            *    Safe Mode    *
            ******************/

            else {
                //TODO
                console.log("No safe mode yet")
            };
        };
    };

    if (autoGoActive) {
        window.onload = autoGo();
    };

})();
