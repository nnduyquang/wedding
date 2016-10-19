<div class="modal fade" id="submit-confirm-crud" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span
                            class="sr-only">Đóng</span></button>
                <h4 class="modal-title"></h4>
            </div>
            <div class="modal-body">
                <div class="col-md-12">
                    <input type="hidden" name="hdId">
                    <input type="text" name="txtsevice" class="form-control" placeholder="Nhập Tên Service">
                </div>
                <div class="col-md-12" style="margin-bottom: 15px">
                    <input type="hidden" name="srcIcon">
                    <input type="text" name="txticon" class="form-control" placeholder="Xin Chọn Icon">
                </div>

                <div class="col-md-12">
                    <div id="container-image">
                        <div class="mygrid-wrapper-div">
                            <select class='image-picker show-html'>

                            </select>
                        </div>

                    </div>
                </div>
            </div>
            {{-- <div class="col-md-2">
                 <div class="">Chọn Icon</div>
             </div>
             <div class="col-md-10"><input id="input-2" name="input2" type="file" class="file" multiple
                                           data-show-upload="false" data-show-caption="true"></div>--}}

            <div class="modal-footer" style="margin-top: 50px">
                <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                <input name="updateLocation" type="submit" class="btn btn-primary"
                       value="Cập Nhật"/>
            </div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function () {
        $('button[data-toggle="modal-confirm-crud"]').click(function (event) {
            event.preventDefault();
            var self = $(this);
            var type = self.data('type');
            if (type == 'insert') {
                var target = $(self.data('target'));
                if (target.length == 1) {
                    $('input[data-confirm="modal"]').attr("name", "insertLocation");
                    $('input[data-confirm="modal"]').attr("value", "Thêm");
                }
                var showModal = true;
                var condition = self.data('condition');
                var fn = window[condition];
                if (typeof fn === 'function') {
                    showModal = fn(condition);
                }
                console.log(showModal)
                if (showModal) {
                    target.on('shown.bs.modal', function (e) {
                        target.find('input[data-confirm="modal"]').click(function (e) {
                            // e.preventDefault();
                            var parentForm = self.closest('form');
                            if (parentForm.length == 1) {
                                parentForm.submit();
                            }
                        });
                    });
                    var token = $('meta[name="csrf-token"]').attr('content');

                    $.ajax({
                        type: "POST",
                        url: "{{route('services')}}",
                        data: {'_token': token, 'data': 'getimage'},
                        success: function (data) {
                            var html;
                            var APP_URL = {!!  json_encode(url('/')) !!};
                            html += " <option data-img-src='" + APP_URL + data[0] + "' data-img-alt='Page'" + 1 + " value='" + 1 + "'>  Page 1  </option>"
                            var count = 1;
                            for (i = 1; i < data.length - 1; i++) {
                                count += i;
                                html += " <option data-img-src='" + APP_URL + data[i] + "' data-img-alt='Page'" + count + " value='" + count + "'>  Page " + count + "  </option>"
                            }
                            html += " <option data-img-src='" + APP_URL + data[data.length - 1] + "' data-img-alt='Page'" + data.length + " value='" + data.length + "'>  Page " + data.length + "  </option>"
                            $('#container-image .image-picker').html(html);
                            $("select").imagepicker({
                                clicked:function(){
                                    $("input[name='txticon']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL,"").replace(/^.*(\\|\/|\:)/, ''));
                                    $("input[name='srcIcon']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL,""));
//                                    console.log($(this).find("option[value='" + $(this).val() + "']").data('img-src'));
                                }
                            });

                        }
                    });
                    target.modal({show: true});
                }
            }

        });
        $(".image-picker").find(".selected img").each(function(index, item){
            console.log("haha");
        });
        /* $("#checkAll").change(function () {
         $("input:checkbox").prop('checked', $(this).prop("checked"));
         });*/
    });
</script>