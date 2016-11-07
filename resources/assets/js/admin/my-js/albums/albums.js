/**
 * Created by nnduy on 04/11/2016.
 */
$(document).ready(function () {
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

});
