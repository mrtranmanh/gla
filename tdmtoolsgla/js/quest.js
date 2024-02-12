function quest() {
    const enableQuest = 1;

    if (enableQuest === 1) {
    
        console.log('Quest co hoat dong');
        const questTime = document.querySelector('font#QuestTime');
        const questTimeFormat = questTime.textContent.match(/\((\d{2}):(\d{2})\)/);       
        const mainMenu = {
            pantheon: document.querySelector('#mainmenu a.menuitem[title="Pantheon"]'),
        }
    
        if (!window.location.href.includes("mod=quest") && !window.location.href.includes("mod=auction") && !window.location.href.includes("mod=training")) {
            
            setInterval(function () {
                mainMenu.pantheon.click();
            }, (questTimeFormat[1] * 60 + questTimeFormat[2]) * 1000);

            console.log ('Quest moi co sau: ' + questTimeFormat[1] + ':' + questTimeFormat[2])

        } else if (window.location.href.includes("mod=quest")) {
            const finishBtn = document.querySelector('#content .contentboard_start .quest_slot_button.quest_slot_button_finish');
            if (finishBtn) {
                finishBtn.click();
            }
        
            const restartBtn = document.querySelector('#content .contentboard_start .quest_slot_button.quest_slot_button_restart');
            if (restartBtn) {
                restartBtn.click();
            }
        
            const acceptGrouparena = document.querySelector('#content .contentboard_start #qcategory_grouparena .quest_slot_button.quest_slot_button_accept');
            if (acceptGrouparena) {
                acceptGrouparena.click();
            }
        
            const acceptCombat = document.querySelector('#content .contentboard_start #qcategory_combat .quest_slot_button.quest_slot_button_accept');
            if (acceptCombat) {
                acceptCombat.click();
            }
        
            const acceptItems = document.querySelector('#content .contentboard_start #qcategory_items .quest_slot_button.quest_slot_button_accept');
            if (acceptItems) {
                acceptItems.click();
            }
        
            const newQuest = document.querySelector('#content .contentboard_start .awesome-button.big[value="New quests"]');
            const newQuestDisabled = document.querySelector('#content .contentboard_start .awesome-button.big.disabled[value="New quests"]');
        
            let acceptedQuest = document.querySelector('#content .contentboard_start #quest_header_accepted');
            if (acceptedQuest && acceptedQuest.innerHTML == 'Accepted quests: 5 / 5') {
                acceptedQuest = true;
                console.log('full Q');
            } else {
                acceptedQuest = false;
            }
            if (newQuest && !newQuestDisabled && !finishBtn && !acceptedQuest && !restartBtn && !acceptGrouparena && !acceptCombat && !acceptItems) {
                newQuest.click();
            }
        }
    
    } else {
        console.log('Quest chua duoc bat'); 
    }
}
quest();