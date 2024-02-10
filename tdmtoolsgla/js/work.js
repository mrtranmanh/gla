//Work
const workBlacksmith = document.querySelector('#job_row_7');
const workTime = document.querySelector('#workTime');
const workDoWork = document.querySelector('#doWork');
const enableWork = 0;
const shouldEnableWork = enableWork === 1 ? true : false;

if (shouldEnableWork) {
    console.log('Work co hoat dong');

    if (workBlacksmith) {
        workBlacksmith.click();        
    }

    if (workTime) {
        workTime.value = '1';
    }

    if (workDoWork && workTime.value == '1') {
        workDoWork.click();
    }
} else {
    console.log('Work khong hoat dong');
}