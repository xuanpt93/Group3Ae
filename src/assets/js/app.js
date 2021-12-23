var f1 = $('#main-conten');
var f2 = $('#main-conten1');
var f3 = $('#main-conten2');
$('#a-li').click(function() {
    f1.show();
    f2.hide();
    f3.hide();
})
$('#a-li1').click(function() {
    f1.hide();
    f2.show();
    f3.hide();
})
$('#a-li2').click(function() {
    f1.hide();
    f2.hide();
    f3.show();
})
$('#txtTimer').datepicker({
    showButtonPanel: true,
    dateFormat: 'dd/mm/yy'
});
$('#txtTimer1').datepicker({
    showButtonPanel: true,
    dateFormat: 'dd/mm/yy'
});

// Nút Search header
// const searchInputDropdown = document.getElementById('search-input-dropdown');
// const dropdownOptions = document.querySelectorAll('.input-group-dropdown-item');

// searchInputDropdown.addEventListener('input', () => {
//     const filter = searchInputDropdown.value.toLowerCase();
//     showOptions();
//     const valueExist = !!filter.length;

//     if (valueExist) {
//         dropdownOptions.forEach((el) => {
//             const elText = el.textContent.trim().toLowerCase();
//             const isIncluded = elText.includes(filter);
//             if (!isIncluded) {
//                 el.style.display = 'none';
//             }
//         });
//     }
// });

// const showOptions = () => {
//     dropdownOptions.forEach((el) => {
//         el.style.display = 'flex';
//     })
// }
