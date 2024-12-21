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

if (enableTrainning == 1) {
    console.log('Trainning co hoat dong');

    if (trainingData.goldValueElement) {
        // Lấy nội dung (textContent hoặc innerText) và chuyển đổi thành số
        var goldValue = parseFloat(trainingData.goldValueElement.textContent || trainingData.goldValueElement.innerText);

        // Kiểm tra xem giá trị có là một số hợp lệ không
        if (!isNaN(goldValue)) {
            // In ra console để kiểm tra
            console.log('Giá trị vàng là:', goldValue);

            // Lấy đối tượng div có class là "training_costs"
            var trainingCostsElement_ag = trainingData.trainingCosts.agility;


            if (trainingCostsElement_ag) {
                // Lấy nội dung (textContent hoặc innerText) và chuyển đổi thành số
                var trainingCosts_ag = parseFloat(trainingCostsElement_ag.textContent || trainingCostsElement_ag.innerText);

                // Kiểm tra xem giá trị có là một số hợp lệ không
                if (!isNaN(trainingCosts_ag)) {
                    // In ra console để kiểm tra
                    console.log('Chi phí đào tạo là:', trainingCosts_ag);

                    // So sánh giá trị vàng và chi phí đào tạo
                    if (goldValue > trainingCosts_ag) {
                        // Nếu điều kiện đúng, nhấp chuột vào phần tử '#char_f2_tt + .training_link a.training_button'
                        var trainingButton = trainingData.trainingButton.agility;
                        if (trainingButton) {
                            trainingButton.click(); // Kích hoạt sự kiện nhấp chuột
                            console.log('Đã nhấp chuột vào nút đào tạo.');
                        } else {
                            console.error('Không tìm thấy phần tử ');
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