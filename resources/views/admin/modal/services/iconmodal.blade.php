<div class="modal fade" id="submit-confirm-icon" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
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
                    <input id="input-file" name="input-file" type="file">
                </div>
            </div>

            <div class="modal-footer" style="margin-top: 50px">
                <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                <input name="iconLocation" type="submit" class="btn btn-primary"
                       value="Upload"/>
            </div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function () {
        var APP_URL = {!!  json_encode(url('/')) !!};
        console.log(APP_URL);
        var token = $('meta[name="csrf-token"]').attr('content');
        //$.ajaxSetup({ headers: { 'X-CSRF-TOKEN':token } });
        $("#input-file").fileinput({
            allowedFileExtensions : ['jpeg','jpg','png'],
            uploadAsync: true,
            showUploadedThumbs:false,
            uploadUrl: APP_URL+"/sml_admin/services",
            uploadExtraData: {
                '_token': token,
                data:"uploadImage",

            }
        });
        $('button[data-toggle="modal-confirm-icon"]').click(function (event) {
            event.preventDefault();
            var self = $(this);
            var type = self.data('type');
            if (type == 'icon') {
                var target = $(self.data('target'));
                if (target.length == 1) {
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
                            //console.log(parentForm.html());
                            if (parentForm.length == 1) {
                                parentForm.submit();
                            }
                        });
                    });
                    var token = $('meta[name="csrf-token"]').attr('content');

                    target.modal({show: true});
                }
            }

        });
    });
</script>