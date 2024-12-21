// Lọc ra các phần tử có thuộc tính style là opacity: 1
const filteredItems = $('#content #shop .ui-draggable.ui-droppable').filter(function() {
    const opacityStyle = $(this).css('opacity');
    return opacityStyle === '1';
  });
  
  console.log(filteredItems);

  filteredItems.each(function() {
    $(this).dblclick();
    console.log('da click');
  });

// const shop = document.querySelector('#content #shop');
// const itemShop = document.querySelectorAll('#content #shop .ui-draggable.ui-droppable');
// const inv = document.querySelector('#content #inv');
// const emptyInv = document.querySelectorAll('#content #inv .ui-droppable.grid-droparea');

// const filteredItems = Array.from(itemShop).filter(item => {
//   const opacityStyle = window.getComputedStyle(item).getPropertyValue('opacity');
//   return opacityStyle === '1';
// });

// console.log(filteredItems);



