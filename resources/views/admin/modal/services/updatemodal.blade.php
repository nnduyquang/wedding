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
                    <select class='image-picker show-html'>
                        <option data-img-src="http://localhost:8080/wedding/public/images/temps/10_album.png" data-img-class="first" data-img-alt="Page 1" value="1">  Page 1  </option>
                        <option data-img-src="http://localhost:8080/wedding/public/images/temps/10_album.png" data-img-alt="Page 2" value="2">  Page 2  </option>
                        <option data-img-src="http://localhost:8080/wedding/public/images/temps/10_album.png" data-img-alt="Page 3" value="3">  Page 3  </option>
                        <option data-img-src="http://localhost:8080/wedding/public/images/temps/10_album.png" data-img-alt="Page 4" value="4">  Page 4  </option>
                        <option data-img-src="http://localhost:8080/wedding/public/images/temps/10_album.png" data-img-alt="Page 5" value="5">  Page 5  </option>
                        <option data-img-src="http://localhost:8080/wedding/public/images/temps/10_album.png" data-img-alt="Page 6" value="6">  Page 6  </option>
                        <option data-img-src="http://localhost:8080/wedding/public/images/temps/10_album.png" data-img-alt="Page 7" value="7">  Page 7  </option>
                        <option data-img-src="http://localhost:8080/wedding/public/images/temps/10_album.png" data-img-alt="Page 8" value="8">  Page 8  </option>
                        <option data-img-src="http://localhost:8080/wedding/public/images/temps/10_album.png" data-img-alt="Page 9" value="9">  Page 9  </option>
                        <option data-img-src="http://localhost:8080/wedding/public/images/temps/10_album.png" data-img-alt="Page 10" value="10"> Page 10 </option>
                        <option data-img-src="http://localhost:8080/wedding/public/images/temps/10_album.png" data-img-alt="Page 11" value="11"> Page 11 </option>
                        <option data-img-src="http://localhost:8080/wedding/public/images/temps/10_album.png" data-img-alt="Page 12" data-img-class="last" value="12"> Page 12 </option>
                    </select>

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
                            var images = data;
                            var html;

                            for (i = 0; i <= data.length; i++) {
                                html += "<option data-img-src='http://localhost:8080/wedding/" + data[i] + "' data-img-class='first' " + "data-img-alt='Page 1' value='1'>  Page 1  </option> "
                                break;
                            }
                            //$('#container-image .image-picker').append(html);
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