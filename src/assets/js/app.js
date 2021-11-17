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