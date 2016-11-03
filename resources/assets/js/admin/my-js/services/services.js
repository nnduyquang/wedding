/**
 * Created by nnduy on 03/11/2016.
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

    $("#checkAll").change(function () {
        $("input:checkbox").prop('checked', $(this).prop("checked"));
    });


////////////////////CẬP NHẬT SERVICE////////////////////////
    $('button#openUpdateModalService').click(function(){
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
        if(response){
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
        // alert(response);
        // //alert('File uploaded triggered');
    });
});
