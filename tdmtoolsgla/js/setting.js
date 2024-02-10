//Setting
function settingTDMToolsGla() {

const mainMenuContainer = document.querySelector('#mainmenu');
const newElement = document.createElement('div');
newElementContent = `<div class='menuitem'>Start</div><div class='menuitem'>Setting</div>`
newElement.innerHTML = newElementContent;

// Lấy phần tử đầu tiên trong #mainmenu (nếu có)
const firstChild = mainMenuContainer.firstElementChild;
if (firstChild) {
    mainMenuContainer.insertBefore(newElement, firstChild);
} else {
    mainMenuContainer.appendChild(newElement);
}

}
settingTDMToolsGla();