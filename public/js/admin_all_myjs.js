var token = $('meta[name="csrf-token"]').attr('content');

function getBaseURL() {
    var url = location.href;  // entire url including querystring - also: window.location.href;
    var baseURL = url.substring(0, url.indexOf('/', 14));
    if (baseURL.indexOf('http://localhost') != -1) {
        // Base Url for localhost
        var url = location.href;  // window.location.href;
        var pathname = location.pathname;  // window.location.pathname;
        var index1 = url.indexOf(pathname);
        var index2 = url.indexOf("/", index1 + 1);
        var baseLocalUrl = url.substr(0, index2);
        return baseLocalUrl + "/";
    }
    else {
        // Root Url for domain name
        return baseURL + "/";
    }

}
function showError(idForm,idError,returnError){
    $('#'+idForm+' .notics#'+idError+' p').html('');
    $('#'+idForm+' .notics#'+idError+' p').html(returnError);
    $('#'+idForm+' #'+idError).fadeIn().delay(3000).fadeOut();
}
/**
 * Created by nnduy on 03/11/2016.
 */
// $(document).ready(function () {
//     var token = $('meta[name="csrf-token"]').attr('content');
//     function getBaseURL() {
//         var url = location.href;  // entire url including querystring - also: window.location.href;
//         var baseURL = url.substring(0, url.indexOf('/', 14));
//         if (baseURL.indexOf('http://localhost') != -1) {
//             // Base Url for localhost
//             var url = location.href;  // window.location.href;
//             var pathname = location.pathname;  // window.location.pathname;
//             var index1 = url.indexOf(pathname);
//             var index2 = url.indexOf("/", index1 + 1);
//             var baseLocalUrl = url.substr(0, index2);
//             return baseLocalUrl + "/";
//         }
//         else {
//             // Root Url for domain name
//             return baseURL + "/";
//         }
//
//     }


    $("#checkAll").change(function () {
        $("input:checkbox").prop('checked', $(this).prop("checked"));
    });

    function loadImageChoose(){
        $.ajax({
            type: "POST",
            url: 'services',
            data: {'_token': token, 'data': 'getimage'},
            success: function (data) {
                var html;
                var APP_URL =getBaseURL();
                html += " <option data-img-src='" + APP_URL + data[0] + "' data-img-alt='Page'" + 1 + " value='" + 1 + "'>  Page 1  </option>"
                var count = 1;
                for (i = 1; i < data.length - 1; i++) {
                    count += i;
                    html += " <option data-img-src='" + APP_URL + data[i] + "' data-img-alt='Page'" + count + " value='" + count + "'>  Page " + count + "  </option>"
                }
                html += " <option data-img-src='" + APP_URL + data[data.length - 1] + "' data-img-alt='Page'" + data.length + " value='" + data.length + "'>  Page " + data.length + "  </option>"
                $('#container-image .image-picker').html(html);
                $("select").imagepicker({
                    clicked: function () {
                        $("input[name='txticon']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL, "").replace(/^.*(\\|\/|\:)/, ''));
                        $("input[name='srcIcon']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL, ""));
                        $("input[name='fileName']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL, "").replace(/^.*(\\|\/|\:)/, ''));
                    }
                });

            }
        });
    }


////////////////////CẬP NHẬT SERVICE////////////////////////
    $('button#openUpdateModalService').click(function(){
        loadImageChoose();
        $.ajax({
            type: "POST",
            url: 'services',
            dataType:'json',
            data:{
                '_token': token,
                'data': 'getDetailService',
                'id':$(this).data('id')
            },
            success:function(data){
                if(data.success){
                    $("#submit-confirm-update input[name='txtsevice']").val(data.data.name);
                    $("#submit-confirm-update input[name='srcIcon']").val(data.data.icon);
                    $("#submit-confirm-update input[name='txticon']").val(data.data.icon.replace(/^.*(\\|\/|\:)/, ''));
                    $("#submit-confirm-update input[name='txtorder']").val(data.data.order);
                    $("#submit-confirm-update input[name='idService']").val(data.data.id_service);
                }
            },
            error:function(data){
                alert('error');
            }
        });
        $('#submit-confirm-update').modal();
    });

    $('button#updateService').click(function(){
        var txtservice=$("#submit-confirm-update input[name='txtsevice']").val();
        var srcIcon=$("#submit-confirm-update input[name='srcIcon']").val();
        var txtorder=$("#submit-confirm-update input[name='txtorder']").val();
        var id=$("#submit-confirm-update input[name='idService']").val();
        $.ajax({
            type: "POST",
            url: 'services',
            dataType:'json',
            data: {
                '_token': token,
                'data': 'updateService',
                'txtsevice':txtservice,
                'srcIcon':srcIcon,
                'txtorder':txtorder,
                'id':id
            },
            success: function (data){
                if(!data.success){
                    $('#submit-confirm-update .notics#errtxtService p').html('');
                    $('#submit-confirm-update .notics#errsrcIcon p').html('');
                    $('#submit-confirm-update .notics#errtxtService p').html(data.errors.txtsevice);
                    $('#submit-confirm-update .notics#errsrcIcon p').html(data.errors.srcIcon);
                    $('#submit-confirm-update .notics#errtxtorder p').html(data.errors.txtorder);
                    $('#submit-confirm-update #errtxtService').fadeIn().delay(3000).fadeOut();
                    $('#submit-confirm-update #errsrcIcon').fadeIn().delay(3000).fadeOut();
                    $('#submit-confirm-update #errtxtorder').fadeIn().delay(3000).fadeOut();
                }else{
                    location.reload();
                }
            },
            error:function(data){
                alert('zo error');
            }
        });
    });

    ////////////////////THÊM MỚI SERVICE////////////////////////
    $('button#openInsertModalService').click(function(){
        loadImageChoose();
        $("#submit-confirm-insert input[name='txticon']").val("");
        $("#submit-confirm-insert input[name='srcIcon']").val("");
        $("#submit-confirm-insert input[name='fileName']").val("");
        $("#submit-confirm-insert input[name='txtsevice']").val("");
        $("#submit-confirm-insert input[name='txtorder']").val("");
        $('#submit-confirm-insert').modal();
    });

    $('button#insertService').click(function(){
        var txtservice=$("#submit-confirm-insert input[name='txtsevice']").val();
        var srcIcon=$("#submit-confirm-insert input[name='srcIcon']").val();
        var txtorder=$("#submit-confirm-insert input[name='txtorder']").val();
        $.ajax({
            type: "POST",
            url: 'services',
            dataType:'json',
            data: {
                '_token': token,
                'data': 'insertService',
                'txtsevice':txtservice,
                'srcIcon':srcIcon,
                'txtorder':txtorder
            },
            success: function (data){
                if(!data.success){
                    $('#submit-confirm-insert .notics#errtxtService p').html('');
                    $('#submit-confirm-insert .notics#errsrcIcon p').html('');
                    $('#submit-confirm-insert .notics#errtxtService p').html(data.errors.txtsevice);
                    $('#submit-confirm-insert .notics#errsrcIcon p').html(data.errors.srcIcon);
                    $('#submit-confirm-insert .notics#errtxtorder p').html(data.errors.txtorder);
                    $('#submit-confirm-insert #errtxtService').fadeIn().delay(3000).fadeOut();
                    $('#submit-confirm-insert #errsrcIcon').fadeIn().delay(3000).fadeOut();
                    $('#submit-confirm-insert #errtxtorder').fadeIn().delay(3000).fadeOut();
                }else{
                    location.reload();
                }
            },
            error:function(data){
                alert('zo error');
            }
        });
    });
    ////////////////////XÓA SERVICE////////////////////////

    $('button#deleteService').click(function(){
        //input name="checkbox[]"
        var checkedValues = $('input:checkbox:checked').map(function() {
            return this.value;
        }).toArray();
        $.ajax({
            type: "POST",
            url: 'services',
            dataType:'json',
            data: {
                '_token': token,
                'data': 'deleteService',
                'checkboxlist':checkedValues
            },
            success: function(data){
                if(data.success){
                    location.reload();
                }
            },
            error: function(data){
                alert('zo error');
            }
        });
    });

    ////////////////////UPLOAD ICON////////////////////////
    $("#openIconModalService").click(function(){
        $("#submit-confirm-icon").modal();
    });
    $("#input-file").fileinput({
        allowedFileExtensions : ['jpeg','jpg','png'],
        uploadAsync: true,
        showUploadedThumbs:false,
        uploadUrl: getBaseURL()+"/sml_admin/services",
        uploadExtraData: {
            '_token': token,
            data:"uploadImage",
        }
    });
    $("#input-file").on('fileuploaded', function(event, data, previewId, index) {
        var form = data.form, files = data.files, extra = data.extra,
            response = data.response.success, reader = data.reader;
    });
// });

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
    $.each($("#formInsertPlan input[name='locations']").files, function (i, locaiton) {
        data.append(locations, locaiton);
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
                alert('zo data success');
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

$(".viewDetailPlan").click(function(){
    var id_album=$(this).data('id');
    window.location="plans/update/"+id_album;
});


/**
 * Created by nnduy on 04/11/2016.
 */
// $(document).ready(function () {
//     var token = $('meta[name="csrf-token"]').attr('content');
//
//     function getBaseURL() {
//         var url = location.href;  // entire url including querystring - also: window.location.href;
//         var baseURL = url.substring(0, url.indexOf('/', 14));
//         if (baseURL.indexOf('http://localhost') != -1) {
//             // Base Url for localhost
//             var url = location.href;  // window.location.href;
//             var pathname = location.pathname;  // window.location.pathname;
//             var index1 = url.indexOf(pathname);
//             var index2 = url.indexOf("/", index1 + 1);
//             var baseLocalUrl = url.substr(0, index2);
//             return baseLocalUrl + "/";
//         }
//         else {
//             // Root Url for domain name
//             return baseURL + "/";
//         }
//
//     }
    $('#openModalCreateAlbum').click(function () {
        $('#submit-confirm-create-album').modal();
    });
    $('#formsummit').submit(function(e){
        e.preventDefault();
        var albumname = $("#submit-confirm-create-album input[name='albumname']").val();
        var data = new FormData($(this).get(0));
        var uploadfile=[];
        $.each($("#submit-confirm-create-album input[name='uploadfile']").files, function(i, file) {
            data.append(uploadfile, file);
        });
        data.append('data','uploadImage');
        data.append('albumname',albumname);
        data.append('type','create');
        $.ajax({
            type: "POST",
            url: getBaseURL() + "sml_admin/albums",
            dataType: 'json',
            processData: false,
            contentType: false,
            data:data,
            success: function (data) {
                if (data.success) {
                    location.reload();
                }else{
                    $('#submit-confirm-create-album .notics#errtxtnamealbum p').html('');
                    $('#submit-confirm-create-album .notics#errtxtnamealbum p').html(data.errors.albumname);
                    $('#submit-confirm-create-album .notics#errtxtchooseimage p').html('');
                    $('#submit-confirm-create-album .notics#errtxtchooseimage p').html(data.errors.uploadfile);
                    $('#submit-confirm-create-album #errtxtnamealbum').fadeIn().delay(3000).fadeOut();
                    $('#submit-confirm-create-album #errtxtchooseimage').fadeIn().delay(3000).fadeOut();
                }
            },
            error: function (data) {
                alert('zo error');
            }
        });
    });
    $(".viewDetailAlbum").click(function(){
        var id_folder=$(this).data('id');
        window.location="albummanagers/view/"+id_folder;
    });
    $('.deleteImageInfolder').click(function(){
        var data=[];
        var info={
            name:$(this).data('name'),
            folder:$(this).data('folder')
        };
        data.push(info);
        $.ajax({
            type: "POST",
            url: getBaseURL() + "sml_admin/albums",
            dataType: 'json',
            data:{
                '_token': token,
                'data': 'deleteImageInFolder',
                'info':data
            },
            success: function(data){
                if(data.success){
                    location.reload();
                }else{
                    alert('zo success error')
                }
            },
            error: function (data) {
                alert('zo error');
            }
        });
    });
    $('#insertImageToAlbum').click(function(){
        var namefolder=$(this).data('name');
        $('.modal-body input[name="albumname"]').val(namefolder);
        $('#submit-confirm-insert-image-to-album').modal();
    });
    $('#forminsertimagetoalbumsummit').submit(function(e){
        e.preventDefault();
        var albumname = $("#submit-confirm-insert-image-to-album input[name='albumname']").val();
        var data = new FormData($(this).get(0));
        var uploadfile=[];
        $.each($("#submit-confirm-insert-image-to-album input[name='uploadfile']").files, function(i, file) {
            data.append(uploadfile, file);
        });
        data.append('data','uploadImage');
        data.append('albumname',albumname);
        data.append('type','insert');
        $.ajax({
            type: "POST",
            url: getBaseURL() + "sml_admin/albums",
            dataType: 'json',
            processData: false,
            contentType: false,
            data:data,
            success: function (data) {
                if (data.success) {
                    location.reload();
                    //alert('zo success');
                }else{
                    $('#submit-confirm-insert-image-to-album .notics#errtxtnamealbum p').html('');
                    $('#submit-confirm-insert-image-to-album .notics#errtxtnamealbum p').html(data.errors.albumname);
                    $('#submit-confirm-insert-image-to-album .notics#errtxtchooseimage p').html('');
                    $('#submit-confirm-insert-image-to-album .notics#errtxtchooseimage p').html(data.errors.uploadfile);
                    $('#submit-confirm-insert-image-to-album #errtxtnamealbum').fadeIn().delay(3000).fadeOut();
                    $('#submit-confirm-insert-image-to-album #errtxtchooseimage').fadeIn().delay(3000).fadeOut();
                }
            },
            error: function (data) {
                $('#submit-confirm-insert-image-to-album .notics#errtxtchooseimage p').html("Dung Lượng Hình Không Lớn Hơn 2MB");
                $('#submit-confirm-insert-image-to-album #errtxtchooseimage').fadeIn().delay(3000).fadeOut();
            }
        });
    });

// });
