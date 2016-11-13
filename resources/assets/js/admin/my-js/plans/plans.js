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

    $('#tags').tokenfield({
        autocomplete: {
            // source: function(query, process){
            //     return $.ajax({
            //         url: $(this)[0].$element[0].dataset.link,
            //         type: 'get',
            //         data: {query: query},
            //         dataType: 'json',
            //         success: function(json) {
            //             return typeof json.options == 'undefined' ? false : process(json.options);
            //         }
            //     });
            // },
            source: ['red', 'blue', 'green', 'yellow', 'violet', 'brown', 'purple', 'black', 'white'],
            delay: 100
        },
        showAutocompleteOnFocus: true
    })
    // function showError(idForm,idError,returnError){
    //     $('#'+idForm+' .notics#'+idError+' p').html('');
    //     $('#'+idForm+' .notics#'+idError+' p').html(returnError);
    //     $('#'+idForm+' #'+idError).fadeIn().delay(3000).fadeOut();
    // }
    $('#formInsertPlan').submit(function (e) {
        e.preventDefault();
        var nameAlbum = $('#formInsertPlan input#nameAlbum').val();
        var descriptionAlbum = $('#formInsertPlan textarea#descriptionAlbum').val();
        var idFolderAlbum = $("#formInsertPlan option:selected").val();
        var data = new FormData($(this).get(0));
        var locations=[];
        $.each($("#formInsertPlan input[name='locations']").files, function(i, locaiton) {
            data.append(locations, locaiton);
        });
        var accessoryMain=[];
        var infoAccessoryMain;
        $('#formInsertPlan input[data=idHiddenAccessoryMain]').each(function(){
            var id=$(this).val();
            var descriptionMain=$('#formInsertPlan input#accessory_description_'+id).val();
            infoAccessoryMain={
                idAccessory:id,
                description:descriptionMain
            };
            accessoryMain.push(infoAccessoryMain);
        });
        var accessorySubs=[];
        $.each($("#formInsertPlan input[name='accessorySubs']").files, function(i, accessorySub) {
            data.append(accessorySubs, accessorySub);
        });
        var services=[];
        var infoService;

        $('#formInsertPlan input[name="services"]:checked').each(function(){
            var idService=this.value;
            var descriptionService=$('#formInsertPlan input#description_'+idService).val();
            infoService={
                'idService': idService,
                'description': descriptionService
            };
            services.push(infoService);
        });


        data.append('data','insertPlan');
        data.append('nameAlbum',nameAlbum);
        data.append('descriptionAlbum',descriptionAlbum);
        data.append('idFolderAlbum',idFolderAlbum);
        data.append('accessoryMain',JSON.stringify(accessoryMain));
        data.append('services',JSON.stringify(services));
        $.ajax({
            type: "POST",
            url: getBaseURL() + "sml_admin/plans",
            dataType: 'json',
            processData: false,
            contentType: false,
            data:data,
            success:function(data){
                if(data.success){
                    alert('zo data success');
                }else{
                    showError('formInsertPlan','errtxtnameAlbum',data.errors.nameAlbum);
                    showError('formInsertPlan','errtxtdescriptionAlbum',data.errors.descriptionAlbum);
                    showError('formInsertPlan','errtxtfolderChoose',data.errors.idFolderAlbum);
                    showError('formInsertPlan','errtxtlocations',data.errors.locations);
                    showError('formInsertPlan','errtxtAccessoryMain',data.errors.accessoryMain);

                }
            },
            error:function(data){
                //alert('zo error');
            }
        });
    });

// });
