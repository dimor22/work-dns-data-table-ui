$('.record-edit-btn').click(function () {
    $('.record-container').show();
    var recordContainer = $(this).parent().parent().find('.record-container');
    if (recordContainer.is(":visible")) {
        recordContainer.hide();
    } else {
        recordContainer.show();
    }
});