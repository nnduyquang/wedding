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

    // $("#input-file-album").fileinput({
    //     allowedFileExtensions: ['jpeg', 'jpg', 'png'],
    //     uploadAsync: true,
    //     showUploadedThumbs: false,
    //     uploadUrl: getBaseURL() + "sml_admin/albums",
    //     uploadExtraData: function (previewId, index) {
    //         var albumname = $("#submit-confirm-create-album input[name='albumname']").val();
    //         var info = {
    //             '_token': token,
    //             data: "uploadImage",
    //             'albumname': albumname
    //         }
    //         return info;
    //     }
    // });
    //
    // $("#input-file-album").on('fileuploaded', function (event, data, previewId, index) {
    //     var form = data.form, files = data.files, extra = data.extra,
    //         response = data.response.success, reader = data.reader;
    // });

    $('#openModalCreateAlbum').click(function () {
        $('#submit-confirm-create-album').modal();
    });

    function getDirectoryImage() {
        $.ajax({
            type: "POST",
            url: getBaseURL() + "sml_admin/albums",
            dataType: 'json',
            data: {
                '_token': token,
                'data': 'getDirectory',
            },
            success: function (data) {
                if (data.success) {
                    var html = "";
                    var listfile = data.listfile;
                    listfile.forEach(function (entry) {
                        html += " <option>" + entry + "</option>";
                    });
                    $("#ddAlbum").html(html);
                }
            },
            error: function (data) {
                alert('zo error');
            }
        });
    }

    $('#openModalChooseImage').click(function () {
        getDirectoryImage();
        $('#submit-confirm-choose-image').modal();
    });
    // $('.selectpicker#ddAlbum').on('change', function () {
    //     var selected = $(this).find("option:selected").val();
    //     $.ajax({
    //         type: "POST",
    //         url: getBaseURL() + "sml_admin/albums",
    //         dataType: 'json',
    //         data: {
    //             '_token': token,
    //             'data': 'getListImage',
    //             'nameFolder': selected
    //         },
    //         success: function (data) {
    //
    //             var html;
    //             var APP_URL = getBaseURL();
    //             // html += " <option data-img-src='" + APP_URL + data[0] + "' data-img-alt='Page'" + 1 + " value='" + 1 + "'>  Page 1  </option>"
    //             var count = 1;
    //             for (i = 1; i < data.length+1; i++) {
    //                 //count += i;
    //                 html += " <option data-img-src='" + APP_URL + data[i-1] + "' data-img-alt='Page'" + count + " value='" + count + "'>  Page " + count + "  </option>"
    //                 count += i;
    //             }
    //             // html += " <option data-img-src='" + APP_URL + data[data.length - 1] + "' data-img-alt='Page'" + data.length + " value='" + data.length + "'>  Page " + data.length + "  </option>"
    //             $('#container-image-choose .image-picker').html(html);
    //             $("select").imagepicker({
    //                 hide_select:false,
    //                 clicked: function () {
    //                     // $("input[name='txticon']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL, "").replace(/^.*(\\|\/|\:)/, ''));
    //                     // $("input[name='srcIcon']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL, ""));
    //                     // $("input[name='fileName']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL, "").replace(/^.*(\\|\/|\:)/, ''));
    //                 }
    //             });
    //             $('#ddAlbum').css('display','true');
    //         },
    //         error: function (data) {
    //             alert('zo error');
    //         }
    //     });
    // });

});
