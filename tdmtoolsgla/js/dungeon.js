(function () {
    'use strict';

    function isDungeonEnabled() {
        return localStorage.getItem('doDungeon') === null ?
            true :
            localStorage.getItem('doDungeon') === 'true';
    }

    function getDungeonDifficulty() {
        return localStorage.getItem('dungeonDifficulty') === 'advanced' ? 'advanced' : 'normal';
    }

    function shouldFightBoss() {
        return localStorage.getItem('dungeonFightBoss') === 'true';
    }

    function isDungeonCooldownReady() {
        const cooldown = document.getElementById('cooldown_bar_fill_dungeon');
        return cooldown && cooldown.classList.contains('cooldown_bar_fill_ready');
    }

    function hasBoss(content) {
        return Array.from(content.querySelectorAll('.map_label')).some(function (monster) {
            return monster.textContent.trim() === 'Boss';
        });
    }

    function goDungeon(clickDelay) {
        if (!isDungeonEnabled() || !isDungeonCooldownReady()) {
            return false;
        }

        setTimeout(function () {
            const inDungeonPage = document.body.id === 'dungeonPage';

            if (!inDungeonPage) {
                document.getElementsByClassName('cooldown_bar_link')[1]?.click();
                return;
            }

            const dungeonContent = document.getElementById('content');
            const dungeonAreas = dungeonContent.getElementsByTagName('area');
            const inSelectDifficultyPage = !dungeonAreas[0];

            if (inSelectDifficultyPage) {
                const buttons = dungeonContent.getElementsByClassName('button1');
                if (getDungeonDifficulty() === 'advanced') {
                    buttons[1]?.click();
                } else {
                    buttons[0]?.click();
                }
                return;
            }

            const dungeonCancel = dungeonContent.querySelector('form .button1[type="submit"]');
            if (hasBoss(dungeonContent) && !shouldFightBoss() && dungeonCancel) {
                console.log('Have Boss. Skip dungeon boss.');
                dungeonCancel.click();
                return;
            }

            dungeonAreas[0].click();
        }, clickDelay || 0);

        return true;
    }

    window.tdmDungeon = {
        go: goDungeon,
        isReady: function () {
            return isDungeonEnabled() && isDungeonCooldownReady();
        },
    };
})();
