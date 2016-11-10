<div class="modal fade" id="submit-confirm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Đóng</span></button>
            <h4 class="modal-title"></h4>
        </div>
        <div class="modal-body">
            <input type="hidden" name="hdId">
            <input type="text" name="editaccessory" class="form-control">
            <input class="form-check-input" type="checkbox" name="edittype" id="inlineCheckbox1"> Chính?
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
            <input name="updateAccessory" type="submit" class="btn btn-primary" data-confirm="modal" value="Cập Nhật"/>
        </div>
    </div>
</div>
</div>
<script>
    $(document).ready(function(){
        $('button[data-toggle="modal-confirm"]').click(function(event) {
            event.preventDefault();
            var self = $(this);
            var hidden = self.data('hidden');
            var name = self.data('name');
            var title = self.data('title');
            var type=self.data('type');
            var target = $(self.data('target'));
            var condition = self.data('condition');
            if( target.length == 1) {
                target.find('.modal-title').html(title);
                target.find('.modal-body input[name="editaccessory"]').val(name);
                target.find('.modal-body input[name="hdId"]').val(hidden);
                if(type==1)
                    target.find('.modal-body input[name="edittype"]').prop('checked',true);
                else
                    target.find('.modal-body input[name="edittype"]').prop('checked',false);
                //target.find('.modal-body input').val(name);
                var showModal = true;
                var fn = window[condition];
                if(typeof fn === 'function') {
                    showModal = fn(condition);
                }
                if( showModal ) {
                    target.on('shown.bs.modal', function(e) {
                        target.find('input[data-confirm="modal"]').click(function(e){
                            // e.preventDefault();
                            var parentForm = self.closest('form');
                            //console.log(parentForm.html());
                            if( parentForm.length == 1 ) {
                                parentForm.submit();
                            }
                        });
                    });
                    target.modal({ show: true });
                };
            };
        });
        $("#checkAll").change(function () {
            $("input:checkbox").prop('checked', $(this).prop("checked"));
        });
    });
</script>