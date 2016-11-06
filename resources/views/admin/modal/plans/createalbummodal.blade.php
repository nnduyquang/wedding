<div class="modal fade" id="submit-confirm-create-album" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true" xmlns="http://www.w3.org/1999/html">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span
                            class="sr-only">Đóng</span></button>
                <h4 class="modal-title"></h4>
            </div>
            <div class="modal-body">
                <div class="col-md-12">
                    <div class="form-group col-md-12">
                        <label for="message" class="col-sm-3 control-label">Tên Album</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="albumname" name='albumname' placeholder="Đặt Tên Album" type="file">
                            <div class="notics" id="errtxtnamealbum" style="display: none"><p style="color: red">{{($errors->has('txtorder'))? $errors->first('txtorder'):''}}</p></div>
                        </div>
                        <div class="col-sm-12">
                            <input id="input-file-album" name="input-file-album" type="file">
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer" style="margin-top: 50px">
                <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
            </div>
        </div>
    </div>
</div>
