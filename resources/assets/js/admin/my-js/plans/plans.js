$('#tags').tokenfield({
    autocomplete: {
        source: function (query, process) {
            return $.ajax({
                url: getBaseURL() + "sml_admin/plans",
                type: 'post',
                data: {
                    '_token': token,
                    'data': 'getTags',
                },
                dataType: 'json',
                success: function (data) {
                    return typeof data.options == 'undefined' ? false : process(data.options);
                }
            });
        },
        delay: 100
    },
    showAutocompleteOnFocus: true
})

$('#formInsertPlan').submit(function (e) {
    e.preventDefault();
    var nameAlbum = $('#formInsertPlan input#nameAlbum').val();
    var descriptionAlbum = $('#formInsertPlan textarea#descriptionAlbum').val();
    var idFolderAlbum = $("#formInsertPlan option:selected").val();
    var data = new FormData($(this).get(0));
    var locations = [];
    $.each($("#formInsertPlan input[name='locations']").files, function (i, location) {
        data.append(locations, location);
    });
    var accessoryMain = [];
    var infoAccessoryMain;
    $('#formInsertPlan input[data=idHiddenAccessoryMain]').each(function () {
        var id = $(this).val();
        var descriptionMain = $('#formInsertPlan input#accessory_description_' + id).val();
        infoAccessoryMain = {
            idAccessory: id,
            description: descriptionMain
        };
        accessoryMain.push(infoAccessoryMain);
    });
    var accessorySubs = [];
    $.each($("#formInsertPlan input[name='accessorySubs']").files, function (i, accessorySub) {
        data.append(accessorySubs, accessorySub);
    });
    var services = [];
    var infoService;

    $('#formInsertPlan input[name="services"]:checked').each(function () {
        var idService = this.value;
        var descriptionService = $('#formInsertPlan input#description_' + idService).val();
        infoService = {
            'idService': idService,
            'description': descriptionService
        };
        services.push(infoService);
    });
    var taglist = $('#formInsertPlan #tags').tokenfield('getTokensList', ',', false, false);
    data.append('data', 'insertPlan');
    data.append('nameAlbum', nameAlbum);
    data.append('descriptionAlbum', descriptionAlbum);
    data.append('idFolderAlbum', idFolderAlbum);
    data.append('accessoryMain', JSON.stringify(accessoryMain));
    data.append('services', JSON.stringify(services));
    data.append('taglist', taglist);
    $.ajax({
        type: "POST",
        url: getBaseURL() + "sml_admin/plans",
        dataType: 'json',
        processData: false,
        contentType: false,
        data: data,
        success: function (data) {
            if (data.success) {
                 // alert('zo data success');
                 window.location.href='../plans';
            } else {
                showError('formInsertPlan', 'errtxtnameAlbum', data.errors.nameAlbum);
                showError('formInsertPlan', 'errtxtdescriptionAlbum', data.errors.descriptionAlbum);
                showError('formInsertPlan', 'errtxtfolderChoose', data.errors.idFolderAlbum);
                showError('formInsertPlan', 'errtxtlocations', data.errors.locations);
                showError('formInsertPlan', 'errtxtAccessoryMain', data.errors.accessoryMain);
            }
        },
        error: function (data) {
            //alert('zo error');
        }
    });
});

$('#formUpdatePlan').submit(function (e) {
    e.preventDefault();
    var idAlbum=$('#formUpdatePlan input#idAlbum').val();
    var nameAlbum = $('#formUpdatePlan input#nameAlbum').val();
    var descriptionAlbum = $('#formUpdatePlan textarea#descriptionAlbum').val();
    var idFolderAlbum = $("#formUpdatePlan option:selected").val();
    var data = new FormData($(this).get(0));
    var locations = [];
    $.each($("#formUpdatePlan input[name='locations']").files, function (i, location) {
        data.append(locations, location);
    });
    var accessoryMain = [];
    var infoAccessoryMain;
    $('#formUpdatePlan input[data=idHiddenAccessoryMain]').each(function () {
        var id = $(this).val();
        var descriptionMain = $('#formUpdatePlan input#accessory_description_' + id).val();
        infoAccessoryMain = {
            idAccessory: id,
            description: descriptionMain
        };
        accessoryMain.push(infoAccessoryMain);
    });
    var accessorySubs = [];
    $.each($("#formUpdatePlan input[name='accessorySubs']").files, function (i, accessorySub) {
        data.append(accessorySubs, accessorySub);
    });
    var services = [];
    var infoService;

    $('#formUpdatePlan input[name="services"]:checked').each(function () {
        var idService = this.value;
        var descriptionService = $('#formUpdatePlan input#description_' + idService).val();
        infoService = {
            'idService': idService,
            'description': descriptionService
        };
        services.push(infoService);
    });
    var taglist = $('#formUpdatePlan #tags').tokenfield('getTokensList', ',', false, false);
    data.append('data', 'updatePlan');
    data.append('nameAlbum', nameAlbum);
    data.append('descriptionAlbum', descriptionAlbum);
    data.append('idFolderAlbum', idFolderAlbum);
    data.append('idAlbum', idAlbum);
    data.append('accessoryMain', JSON.stringify(accessoryMain));
    data.append('services', JSON.stringify(services));
    data.append('taglist', taglist);
    $.ajax({
        type: "POST",
        url: getBaseURL() + "sml_admin/plans",
        dataType: 'json',
        processData: false,
        contentType: false,
        data: data,
        success: function (data) {
            if (data.success) {
                //alert('zo data success');
                window.location.href=data.redirect;
            } else {
                showError('formUpdatePlan', 'errtxtnameAlbum', data.errors.nameAlbum);
                showError('formUpdatePlan', 'errtxtdescriptionAlbum', data.errors.descriptionAlbum);
                showError('formUpdatePlan', 'errtxtfolderChoose', data.errors.idFolderAlbum);
                showError('formUpdatePlan', 'errtxtlocations', data.errors.locations);
                showError('formUpdatePlan', 'errtxtAccessoryMain', data.errors.accessoryMain);
            }
        },
        error: function (data) {
            //alert('zo error');
        }
    });

});

$(".viewDetailPlan").click(function(){
    var id_album=$(this).data('id');
    window.location="plans/update/"+id_album;
});



