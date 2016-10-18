<div class="modal fade" id="submit-confirm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span
                            class="sr-only">Đóng</span></button>
                <h4 class="modal-title"></h4>
            </div>
            <div class="modal-body">
                <input type="hidden" name="hdId">
                <input type="text" name="txtsevice" class="form-control" placeholder="Nhập Tên Service">
                <div id="container-image">
                    <div class="mygrid-wrapper-div">
                        <select class='image-picker show-html'>

                        </select>
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
                <input name="updateLocation" type="submit" class="btn btn-primary" data-confirm="modal"
                       value="Cập Nhật"/>
            </div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function () {
        $('button[data-toggle="modal-confirm"]').click(function (event) {
            event.preventDefault();
            var self = $(this);
            var type = self.data('type');
            if (type == 'insert') {
                var target = $(self.data('target'));
                if (target.length == 1) {
                    console.log('step3');
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
                            console.log('step5');
                            // e.preventDefault();
                            var parentForm = self.closest('form');
                            //console.log(parentForm.html());
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
                            console.log(data);
                            var html;
                            var APP_URL = {!!  json_encode(url('/')) !!};
                            console.log(APP_URL);
                            html += " <option data-img-src='" + APP_URL + data[0] + "' data-img-alt='Page'" + 1 + " value='" + 1 + "'>  Page 1  </option>"
                            var count = 1;
                            for (i = 1; i < data.length - 1; i++) {
                                count += i;
                                html += " <option data-img-src='" + APP_URL + data[i] + "' data-img-alt='Page'" + count + " value='" + count + "'>  Page " + count + "  </option>"
                                //break;
                            }
                            html += " <option data-img-src='" + APP_URL + data[data.length - 1] + "' data-img-alt='Page'" + data.length + " value='" + data.length + "'>  Page " + data.length + "  </option>"
                            $('#container-image .image-picker').append(html);
                            $("select").imagepicker();
                        }
                    });

                    target.modal({show: true});
                }
            }
            /* var hidden = self.data('hidden');
             var name = self.data('name');
             var title = self.data('title');
             var target = $(self.data('target'));
             var condition = self.data('condition');
             if (target.length == 1) {
             target.find('.modal-title').html(title);
             target.find('.modal-body input[name="editlocation"]').val(name);
             target.find('.modal-body input[name="hdId"]').val(hidden);
             //target.find('.modal-body input').val(name);
             var showModal = true;
             var fn = window[condition];
             if (typeof fn === 'function') {
             showModal = fn(condition);
             }
             if (showModal) {
             target.on('shown.bs.modal', function (e) {
             target.find('input[data-confirm="modal"]').click(function (e) {
             // e.preventDefault();
             var parentForm = self.closest('form');
             //console.log(parentForm.html());
             if (parentForm.length == 1) {
             parentForm.submit();
             }
             });
             });
             target.modal({show: true});
             };
             };*/
        });
        /* $("#checkAll").change(function () {
         $("input:checkbox").prop('checked', $(this).prop("checked"));
         });*/
    });
</script>