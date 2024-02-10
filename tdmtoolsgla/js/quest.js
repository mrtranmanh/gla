const enableQuest = 0;
const shouldEnableQuest = enableQuest === 1 ? true : false;

if (shouldEnableQuest && window.location.href.includes("mod=quest")) {
    console.log('Quest co hoat dong');
    setInterval(function () {
        location.reload();
    }, 1 * 60 * 1000);
        
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

} else {
    console.log('Quest 0 hoat dong'); 
}


// Lặp qua từng phần tử trong NodeList
// itemsQuest.forEach(item => {
//     const questSlotIcon = item.querySelector('.quest_slot_icon');

//     // Kiểm tra xem questSlotIcon có tồn tại
//     //if (acceptedQuest.innerHTML != 'Accepted quests: 5 / 5') {
//     if (questSlotIcon) {
//         const questSlotIconStyleValue = questSlotIcon.getAttribute('style');

//         // Kiểm tra xem questSlotIconStyleValue có tồn tại và chứa giá trị
//         if (questSlotIconStyleValue) {
//             const backgroundImageQuestSlotIcon = questSlotIconStyleValue.match(/url\(['"]?(.*?)['"]?\)/)[1];

//             const dataQuest = {
//                 itemsType: {
//                     area: '//gf2.geo.gfsrv.net/cdn1b/00f1a594723515a77dcd6d66c918fb.jpg',
//                     circusTurma: '//gf2.geo.gfsrv.net/cdn45/c901c26d04e70cc3ecfb37b9632590.jpg',
//                     defeat: '//gf3.geo.gfsrv.net/cdne3/cd7b70728e81ac4995e6a3e668a46e.jpg',
//                     monsterEx: '//gf1.geo.gfsrv.net/cdnfb/4e41ab43222200aa024ee177efef8f.jpg',
//                     monsterDung: '//gf3.geo.gfsrv.net/cdnb5/dc366909fdfe69897d583583f6e446.jpg',
//                     work: '//gf3.geo.gfsrv.net/cdnb4/a8b91ecab5813f97708e0e86f35e06.jpg',
//                     find: '//gf1.geo.gfsrv.net/cdnff/92c80be0d47423719891d1c70c7200.jpg'
//                 },
//                 questSlotButton: {
//                     accept: item.querySelector('.quest_slot_button.quest_slot_button_accept'),
//                     cancel: item.querySelector('.quest_slot_button.quest_slot_button_cancel'),
//                     reload: item.querySelector('.quest_slot_button.quest_slot_button_reload'),
//                     finish: item.querySelector('.quest_slot_button.quest_slot_button_finish')
//                 }
//             };
   
//             if (dataQuest.questSlotButton.accept) {
//                 console.log('Co nut bam');
//                 if (backgroundImageQuestSlotIcon = dataQuest.itemsType.circusTurma) {
//                     dataQuest.questSlotButton.accept.click();
//                     console.log('Da click');
//                 } else if (backgroundImageQuestSlotIcon = dataQuest.itemsType.defeat) {
//                     dataQuest.questSlotButton.accept.click();
//                     console.log('Da click');
//                 } else if (backgroundImageQuestSlotIcon = dataQuest.itemsType.find) {
//                     dataQuest.questSlotButton.accept.click();
//                     console.log('Da click');
//                 } else {
//                     console.log('0 Co q de click');
//                 }
//             } else {
//                 console.log('0 Co nut bam');
//             }
//         }
//     }

//     // } else {
//     //     console.log('Full Q')
//     // }
// });
