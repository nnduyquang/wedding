<div class="modal fade" id="submit-confirm-insert-image-to-album" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true" xmlns="http://www.w3.org/1999/html">
    <div class="modal-dialog">
        {!! Form::open(array('id'=>'forminsertimagetoalbumsummit','url'=>'sml_admin/albums','method'=>'POST', 'files'=>true)) !!}
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span
                            class="sr-only">Đóng</span></button>
                <h4 class="modal-title"></h4>
            </div>
            <div class="modal-body">
                <div class="col-md-12">
                    <input type="hidden" name="albumname">
                    <div class="form-group col-md-12">
                        <div class="col-sm-12">
                            {!! Form::file('uploadfile[]', array('multiple'=>true,'accept'=>'image/jpeg,image/jpg,image/png')) !!}
                            <div class="notics" id="errtxtchooseimage" style="display: none"><p style="color: red"></p></div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="modal-footer" style="margin-top: 50px">
                <input id="uploadImageToAlbum" type="submit" class="btn btn-default" value="Upload"/>
                <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
            </div>
        </div>
        {!! Form::close() !!}
    </div>
</div>
