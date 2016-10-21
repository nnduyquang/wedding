<div class="modal fade" id="submit-confirm-crud" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <script>
            setTimeout(function () {
                $('.notics').fadeOut('fast');
            }, 3000); // <-- time in milliseconds
        </script>
        <div class="modal-content">
            <input type="hidden" name="errors">
            <input type="hidden" name="state" value="{{\Session::get('state')}}">
            <input type="hidden" name="idReturn" value="{{\Session::get('idReturn')}}">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span
                            class="sr-only">Đóng</span></button>
                <h4 class="modal-title"></h4>
            </div>
            <div class="modal-body form-group">
                <div class="col-md-12">
                    <input type="hidden" name="hdId">
                    <input type="text" name="txtsevice" value="{{old('txtsevice')}}" class="form-control"
                           placeholder="Nhập Tên Service">

                    <div class="notics"><p style="color: red;">{{($errors->has('txtsevice'))? $errors->first('txtsevice'):''}}</p></div>

                </div>
                <div class="col-md-12">
                    <input type="hidden" name="srcIcon" value="{{old('srcIcon')}}">
                    <input type="hidden" name="fileName" value="{{old('fileName')}}">
                    <input type="text" name="txticon" value="{{old('fileName')}}" class="form-control"
                           placeholder="Xin Chọn Icon" disabled>

                    <div class="notics"><p style="color: red">{{($errors->has('srcIcon'))? $errors->first('srcIcon'):''}}</p></div>

                </div>

                <div class="col-md-7" style="margin-bottom: 15px">
                    <div class="form-inline" style="text-align: left">
                        <div class="form-group">
                            <label>Độ Ưu Tiên</label>
                            <input type="text" name="txtorder" class="form-control" placeholder="Ưu Tiên">
                        </div>
                    </div>

                    <div class="notics"><p style="color: red">{{($errors->has('txtorder'))? $errors->first('txtorder'):''}}</p></div>


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
                <div class="col-md-12">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    <input data-confirm="modal" name="insertLocation" type="submit" class="btn btn-primary"
                           value="Cập Nhật"/>
                </div>
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
            //$errors
            if (type == 'insert') {
                var errors = $("input[name='errors']").val();
                console.log(errors);
                if (errors == 0) {
                    $("input[name='txticon']").val("");
                    $("input[name='srcIcon']").val("");
                    $("input[name='fileName']").val("");
                    $("input[name='txtsevice']").val("");
                    $("input[name='txtorder']").val("");
                }
                var target = $(self.data('target'));
                if (target.length == 1) {
                    $('input[data-confirm="modal"]').attr("name", "insertService");
                    $('input[data-confirm="modal"]').attr("value", "Thêm");
                }
                var showModal = true;
                var condition = self.data('condition');
                var fn = window[condition];
                if (typeof fn === 'function') {
                    showModal = fn(condition);
                }
                //console.log(showModal)
                if (showModal) {
                    target.on('shown.bs.modal', function (e) {
                        target.find('input[data-confirm="modal"]').click(function (e) {
                            //e.preventDefault();
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
                                clicked: function () {
                                    $("input[name='txticon']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL, "").replace(/^.*(\\|\/|\:)/, ''));
                                    $("input[name='srcIcon']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL, ""));
                                    $("input[name='fileName']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL, "").replace(/^.*(\\|\/|\:)/, ''));
                                }
                            });

                        }
                    });
                    target.modal({show: true});
                }
            } else if (type == 'update') {
                var target = $(self.data('target'));
                var hidden = self.data('hidden');
                if (target.length == 1) {
                    $('input[data-confirm="modal"]').attr("name", "updateService");
                    $('input[data-confirm="modal"]').attr("value", "Cập Nhật");
                    target.find('.modal-body input[name="hdId"]').val(hidden);
                }
                var showModal = true;
                var condition = self.data('condition');
                var fn = window[condition];
                var showModal = true;
                var condition = self.data('condition');

                var fn = window[condition];
                if (typeof fn === 'function') {
                    showModal = fn(condition);
                }
                if (showModal) {
                    target.on('shown.bs.modal', function (e) {
                        target.find('input[data-confirm="modal"]').click(function (e) {
                            //e.preventDefault();
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
                                clicked: function () {
                                    $("input[name='txticon']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL, "").replace(/^.*(\\|\/|\:)/, ''));
                                    $("input[name='srcIcon']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL, ""));
                                    $("input[name='fileName']").val($(this).find("option[value='" + $(this).val() + "']").data('img-src').replace(APP_URL, "").replace(/^.*(\\|\/|\:)/, ''));
                                }
                            });

                        }
                    });
                    $.ajax({
                        type: "POST",
                        url: "{{route('services')}}",
                        data: {'_token': token, 'data': 'selectService', 'id': self.data('value')},
                        success: function (data) {
                            console.log(data);
                            var APP_URL = {!!  json_encode(url('/')) !!};
                            $("input[name='txticon']").val(data.icon.replace(/^.*(\\|\/|\:)/, ''));
                            $("input[name='srcIcon']").val(data.icon);
                            $("input[name='fileName']").val(data.icon);
                            $("input[name='txtsevice']").val(data.name);
                            $("input[name='txtorder']").val(data.order);
                        }
                    });
                    target.modal({show: true});
                }
            }
        });

//        $('button[data-toggle="modal-confirm-update"]').click(function (event) {
//            event.preventDefault();
//            var self = $(this);
//            var type = self.data('type');
//            var target = $(self.data('target'))
//            if(type == 'update'){
//
//            }
//        });


        @if (count($errors) > 0)
        //$('#submit-confirm-crud').modal('show');
            $("input[name='errors']").val(1);
            //var state=$("input[name='state']").val();
            console.log($("input[name='state']").val());
            console.log($("input[name='idReturn']").val());
            @if( \Session::get('state')==='insertState')
               $('button[data-type="insert"]').trigger("click");
            @elseif( \Session::get('state') ==='updateState')
               $("button[data-type='update'][data-value='{!! \Session::get('idReturn') !!}']").trigger("click");
            @endif
        @else
            $("input[name='errors']").val(0);
        @endif
            $(".image-picker").find(".selected img").each(function (index, item) {
                console.log("haha");
            });
        $("#checkAll").change(function () {
            $("input:checkbox").prop('checked', $(this).prop("checked"));
        });
    });
</script>