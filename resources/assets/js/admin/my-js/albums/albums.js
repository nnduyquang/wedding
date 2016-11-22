$('#openModalCreateAlbum').click(function () {
    $('#submit-confirm-create-album').modal();
});
$('#formsummit').submit(function (e) {
    e.preventDefault();
    var albumname = $("#submit-confirm-create-album input[name='albumname']").val();
    var data = new FormData($(this).get(0));
    var uploadfile = [];
    $.each($("#submit-confirm-create-album input[name='uploadfile']").files, function (i, file) {
        data.append(uploadfile, file);
    });
    data.append('data', 'uploadImage');
    data.append('albumname', albumname);
    data.append('type', 'create');
    $.ajax({
        type: "POST",
        url: getBaseURL() + "sml_admin/albums",
        dataType: 'json',
        processData: false,
        contentType: false,
        data: data,
        success: function (data) {
            if (data.success) {
                location.reload();
            } else {
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
$(".viewDetailAlbum").click(function () {
    var id_folder = $(this).data('id');
    window.location = "albummanagers/view/" + id_folder;
});
$('.deleteImageInfolder').click(function () {
    var data = [];
    var info = {
        name: $(this).data('name'),
        folder: $(this).data('folder')
    };
    data.push(info);
    $.ajax({
        type: "POST",
        url: getBaseURL() + "sml_admin/albums",
        dataType: 'json',
        data: {
            '_token': token,
            'data': 'deleteImageInFolder',
            'info': data
        },
        success: function (data) {
            if (data.success) {
                location.reload();
            } else {
                alert('zo success error')
            }
        },
        error: function (data) {
            alert('zo error');
        }
    });
});
$('#insertImageToAlbum').click(function () {
    var namefolder = $(this).data('name');
    $('.modal-body input[name="albumname"]').val(namefolder);
    $('#submit-confirm-insert-image-to-album').modal();
});
$('#forminsertimagetoalbumsummit').submit(function (e) {
    e.preventDefault();
    var albumname = $("#submit-confirm-insert-image-to-album input[name='albumname']").val();
    var data = new FormData($(this).get(0));
    var uploadfile = [];
    $.each($("#submit-confirm-insert-image-to-album input[name='uploadfile']").files, function (i, file) {
        data.append(uploadfile, file);
    });
    data.append('data', 'uploadImage');
    data.append('albumname', albumname);
    data.append('type', 'insert');
    $.ajax({
        type: "POST",
        url: getBaseURL() + "sml_admin/albums",
        dataType: 'json',
        processData: false,
        contentType: false,
        data: data,
        success: function (data) {
            if (data.success) {
                location.reload();
                //alert('zo success');
            } else {
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

$('#updateMainImage').click(function(){
    var idFolder=$('input[name=idFolder]').val();
    var mainImage=$('input[name=mainImage]:checked').val();
    $.ajax({
        type: "POST",
        url: getBaseURL() + "sml_admin/albums",
        dataType: 'json',
        data: {
            '_token': token,
            'data': 'updateMainImage',
            'id':idFolder,
            'mainImage':mainImage
        },
        success:function(data){
            if(data.success){
                 location.reload();
            }else{
                alert(data.errors.mainImage)
            }
        },
        error:function(data){
            alert('zo error');
        }
    });
});

$('#deleteAlbumFolder').click(function(){
    var infoFolders=[];
    $('table#viewAlbumFolder input[name="checkbox"]:checked').each(function(){
        var id_folder=this.value;
        var nameFolder=$(this).data('name');
        infoFolder = {
            'id_folder': id_folder,
            'nameFolder': nameFolder
        };
        infoFolders.push(infoFolder);
    });
    $.ajax({
        type: "POST",
        url: getBaseURL() + "sml_admin/albums",
        dataType: 'json',
        data: {
            '_token': token,
            'data': 'deleteAlbumFolder',
            'infoFolders':infoFolders
        },
        success:function(data){
            if(data.success){
                location.reload();
            }else{
                alert(data.errors.mainImage)
            }
        },
        error:function(data){
            alert('zo error');
        }
    });
});
