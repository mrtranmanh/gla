//Trainning
const trainingData = {
    goldValueElement: document.getElementById('sstat_gold_val'),
    trainingCosts: {
        strength: document.querySelector('#char_f0_tt + .training_link .training_costs'),
        dexterity: document.querySelector('#char_f1_tt + .training_link .training_costs'),
        agility: document.querySelector('#char_f2_tt + .training_link .training_costs'),
        constitution: document.querySelector('#char_f3_tt + .training_link .training_costs'),
        charisma: document.querySelector('#char_f4_tt + .training_link .training_costs'),
        intelligence: document.querySelector('#char_f5_tt + .training_link .training_costs'),
    },
    trainingButton: {
        strength: document.querySelector('#char_f0_tt + .training_link a.training_button'),
        dexterity: document.querySelector('#char_f1_tt + .training_link a.training_button'),
        agility: document.querySelector('#char_f2_tt + .training_link a.training_button'),
        constitution: document.querySelector('#char_f3_tt + .training_link a.training_button'),
        charisma: document.querySelector('#char_f4_tt + .training_link a.training_button'),
        intelligence: document.querySelector('#char_f5_tt + .training_link a.training_button'),
    }
};

const enableTrainning = 0;
const autoGoActive = sessionStorage.getItem('autoGoActive') === 'true';

function parseGold(text) {
    if (!text) return 0;
    const clean = String(text).replace(/[^0-9]/g, '');
    return Number(clean) || 0;
}

if (autoGoActive && enableTrainning == 1) {
    console.log('Trainning co hoat dong');

    if (trainingData.goldValueElement) {
        // Lấy nội dung và chuyển đổi thành số sau khi bỏ dấu chấm hàng nghìn
        const goldText = trainingData.goldValueElement.textContent || trainingData.goldValueElement.innerText;
        const goldValue = parseGold(goldText);

        if (goldValue > 0) {
            console.log('Giá trị vàng là:', goldValue);

            const trainingCostsElement_ag = trainingData.trainingCosts.agility;
            if (trainingCostsElement_ag) {
                const costText = trainingCostsElement_ag.textContent || trainingCostsElement_ag.innerText;
                const trainingCosts_ag = parseGold(costText);

                if (trainingCosts_ag > 0) {
                    console.log('Chi phí đào tạo là:', trainingCosts_ag);

                    // So sánh giá trị vàng và chi phí đào tạo
                    if (goldValue > trainingCosts_ag) {
                        const trainingButton = trainingData.trainingButton.agility;
                        if (trainingButton) {
                            trainingButton.click();
                            console.log('Đã nhấp chuột vào nút đào tạo.');
                        } else {
                            console.error('Không tìm thấy nút đào tạo.');
                        }
                    } else {
                        console.log('Không đủ vàng để đào tạo.');
                    }
                }
            }
        }
    }
} else {
    console.log('Trainning khong hoat dong');
}
