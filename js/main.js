var wrapperIdName = 'records2';

$('#'+ wrapperIdName + ' .record-edit-btn').click(function () {

    $('#'+ wrapperIdName + ' .record-edit-btn').show();

    $(this).hide();

    $('#'+ wrapperIdName + ' .record-remove-btn').hide();

    $(this).siblings('.record-remove-btn').show();

    $('#'+ wrapperIdName + ' .record-add-btn').show();

});

$('#'+ wrapperIdName + ' .record-btn-close').click(function () {
    var panelId = $(this).closest('.record-details').attr('id');

    $(this).closest('.record-details').siblings('.record-edit-section').find('.record-edit-btn').show();

    $(this).closest('.record-details').siblings('.record-edit-section').find('.record-remove-btn').hide();

    $('#'+ panelId).collapse('hide');

});

$('#'+ wrapperIdName + ' .record-add-btn').click(function () {

    $(this).hide();

    $('#'+ wrapperIdName + ' .record-edit-btn').show();

    $('#'+ wrapperIdName + ' .record-remove-btn').hide();

});

$('#'+ wrapperIdName + ' .new-record-cancel').click(function () {
    var panelId = $(this).closest('.record-details').attr('id');

    $('.record-add-btn').show();

    $('#'+ panelId).collapse('hide');
})