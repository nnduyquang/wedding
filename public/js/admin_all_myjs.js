$(document).ready(function(){function e(){var e=location.href,t=e.substring(0,e.indexOf("/",14));if(t.indexOf("http://localhost")!=-1){var e=location.href,n=location.pathname,a=e.indexOf(n),i=e.indexOf("/",a+1),r=e.substr(0,i);return r+"/"}return t+"/"}function t(){$.ajax({type:"POST",url:"services",data:{_token:n,data:"getimage"},success:function(t){var n,a=e();n+=" <option data-img-src='"+a+t[0]+"' data-img-alt='Page'1 value='1'>  Page 1  </option>";var r=1;for(i=1;i<t.length-1;i++)r+=i,n+=" <option data-img-src='"+a+t[i]+"' data-img-alt='Page'"+r+" value='"+r+"'>  Page "+r+"  </option>";n+=" <option data-img-src='"+a+t[t.length-1]+"' data-img-alt='Page'"+t.length+" value='"+t.length+"'>  Page "+t.length+"  </option>",$("#container-image .image-picker").html(n),$("select").imagepicker({clicked:function(){$("input[name='txticon']").val($(this).find("option[value='"+$(this).val()+"']").data("img-src").replace(a,"").replace(/^.*(\\|\/|\:)/,"")),$("input[name='srcIcon']").val($(this).find("option[value='"+$(this).val()+"']").data("img-src").replace(a,"")),$("input[name='fileName']").val($(this).find("option[value='"+$(this).val()+"']").data("img-src").replace(a,"").replace(/^.*(\\|\/|\:)/,""))}})}})}var n=$('meta[name="csrf-token"]').attr("content");$("#checkAll").change(function(){$("input:checkbox").prop("checked",$(this).prop("checked"))}),$("button#openUpdateModalService").click(function(){t(),$.ajax({type:"POST",url:"services",dataType:"json",data:{_token:n,data:"getDetailService",id:$(this).data("id")},success:function(e){e.success&&($("#submit-confirm-update input[name='txtsevice']").val(e.data.name),$("#submit-confirm-update input[name='srcIcon']").val(e.data.icon),$("#submit-confirm-update input[name='txticon']").val(e.data.icon.replace(/^.*(\\|\/|\:)/,"")),$("#submit-confirm-update input[name='txtorder']").val(e.data.order),$("#submit-confirm-update input[name='idService']").val(e.data.id_service))},error:function(e){alert("error")}}),$("#submit-confirm-update").modal()}),$("button#updateService").click(function(){var e=$("#submit-confirm-update input[name='txtsevice']").val(),t=$("#submit-confirm-update input[name='srcIcon']").val(),a=$("#submit-confirm-update input[name='txtorder']").val(),i=$("#submit-confirm-update input[name='idService']").val();$.ajax({type:"POST",url:"services",dataType:"json",data:{_token:n,data:"updateService",txtsevice:e,srcIcon:t,txtorder:a,id:i},success:function(e){e.success?location.reload():($("#submit-confirm-update .notics#errtxtService p").html(""),$("#submit-confirm-update .notics#errsrcIcon p").html(""),$("#submit-confirm-update .notics#errtxtService p").html(e.errors.txtsevice),$("#submit-confirm-update .notics#errsrcIcon p").html(e.errors.srcIcon),$("#submit-confirm-update .notics#errtxtorder p").html(e.errors.txtorder),$("#submit-confirm-update #errtxtService").fadeIn().delay(3e3).fadeOut(),$("#submit-confirm-update #errsrcIcon").fadeIn().delay(3e3).fadeOut(),$("#submit-confirm-update #errtxtorder").fadeIn().delay(3e3).fadeOut())},error:function(e){alert("zo error")}})}),$("button#openInsertModalService").click(function(){t(),$("#submit-confirm-insert input[name='txticon']").val(""),$("#submit-confirm-insert input[name='srcIcon']").val(""),$("#submit-confirm-insert input[name='fileName']").val(""),$("#submit-confirm-insert input[name='txtsevice']").val(""),$("#submit-confirm-insert input[name='txtorder']").val(""),$("#submit-confirm-insert").modal()}),$("button#insertService").click(function(){var e=$("#submit-confirm-insert input[name='txtsevice']").val(),t=$("#submit-confirm-insert input[name='srcIcon']").val(),a=$("#submit-confirm-insert input[name='txtorder']").val();$.ajax({type:"POST",url:"services",dataType:"json",data:{_token:n,data:"insertService",txtsevice:e,srcIcon:t,txtorder:a},success:function(e){e.success?location.reload():($("#submit-confirm-insert .notics#errtxtService p").html(""),$("#submit-confirm-insert .notics#errsrcIcon p").html(""),$("#submit-confirm-insert .notics#errtxtService p").html(e.errors.txtsevice),$("#submit-confirm-insert .notics#errsrcIcon p").html(e.errors.srcIcon),$("#submit-confirm-insert .notics#errtxtorder p").html(e.errors.txtorder),$("#submit-confirm-insert #errtxtService").fadeIn().delay(3e3).fadeOut(),$("#submit-confirm-insert #errsrcIcon").fadeIn().delay(3e3).fadeOut(),$("#submit-confirm-insert #errtxtorder").fadeIn().delay(3e3).fadeOut())},error:function(e){alert("zo error")}})}),$("button#deleteService").click(function(){var e=$("input:checkbox:checked").map(function(){return this.value}).toArray();$.ajax({type:"POST",url:"services",dataType:"json",data:{_token:n,data:"deleteService",checkboxlist:e},success:function(e){e.success&&location.reload()},error:function(e){alert("zo error")}})}),$("#openIconModalService").click(function(){$("#submit-confirm-icon").modal()}),$("#input-file").fileinput({allowedFileExtensions:["jpeg","jpg","png"],uploadAsync:!0,showUploadedThumbs:!1,uploadUrl:e()+"/sml_admin/services",uploadExtraData:{_token:n,data:"uploadImage"}}),$("#input-file").on("fileuploaded",function(e,t,n,a){t.form,t.files,t.extra,t.response.success,t.reader})}),$(document).ready(function(){function e(){var e=location.href,t=e.substring(0,e.indexOf("/",14));if(t.indexOf("http://localhost")!=-1){var e=location.href,n=location.pathname,a=e.indexOf(n),i=e.indexOf("/",a+1),r=e.substr(0,i);return r+"/"}return t+"/"}function t(){$.ajax({type:"POST",url:e()+"sml_admin/albums",dataType:"json",data:{_token:n,data:"getDirectory"},success:function(e){if(e.success){var t="",n=e.listfile;n.forEach(function(e){t+=" <option>"+e+"</option>"}),$("#ddAlbum").html(t)}},error:function(e){alert("zo error")}})}var n=$('meta[name="csrf-token"]').attr("content");$("#openModalCreateAlbum").click(function(){$("#submit-confirm-create-album").modal()}),$("#openModalChooseImage").click(function(){t(),$("#submit-confirm-choose-image").modal()})}),$(document).ready(function(){function e(){var e=location.href,t=e.substring(0,e.indexOf("/",14));if(t.indexOf("http://localhost")!=-1){var e=location.href,n=location.pathname,a=e.indexOf(n),i=e.indexOf("/",a+1),r=e.substr(0,i);return r+"/"}return t+"/"}$('meta[name="csrf-token"]').attr("content");$("#openModalCreateAlbum").click(function(){$("#submit-confirm-create-album").modal()}),$("#formsummit").submit(function(t){t.preventDefault();var n=$("#submit-confirm-create-album input[name='albumname']").val(),a=new FormData($(this).get(0)),i=[];$.each($("input[name='uploadfile']").files,function(e,t){a.append(i,t)}),a.append("data","uploadImage"),a.append("albumname",n),$.ajax({type:"POST",url:e()+"sml_admin/albums",dataType:"json",processData:!1,contentType:!1,data:a,success:function(e){e.success?location.reload():($("#submit-confirm-create-album .notics#errtxtnamealbum p").html(""),$("#submit-confirm-create-album .notics#errtxtnamealbum p").html(e.errors.albumname),$("#submit-confirm-create-album .notics#errtxtchooseimage p").html(""),$("#submit-confirm-create-album .notics#errtxtchooseimage p").html(e.errors.uploadfile),$("#submit-confirm-create-album #errtxtnamealbum").fadeIn().delay(3e3).fadeOut(),$("#submit-confirm-create-album #errtxtchooseimage").fadeIn().delay(3e3).fadeOut())},error:function(e){alert("zo error")}})}),$(".viewDetailAlbum").click(function(){var e=$(this).data("id");window.location="albummanagers/view/"+e})});