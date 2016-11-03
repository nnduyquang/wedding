<div class="modal fade" id="submit-confirm-insert" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">

        <div class="modal-content">
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

                    <div class="notics" id="errtxtService" style="display: none"><p style="color: red;"></p></div>

                </div>
                <div class="col-md-12">
                    <input type="hidden" name="srcIcon" value="{{old('srcIcon')}}">
                    <input type="hidden" name="fileName" value="{{old('fileName')}}">
                    <input type="text" name="txticon" value="{{old('fileName')}}" class="form-control"
                           placeholder="Xin Chọn Icon" disabled>

                    <div class="notics" id="errsrcIcon" style="display: none"><p style="color: red"></p></div>

                </div>

                <div class="col-md-7" style="margin-bottom: 15px">
                    <div class="form-inline" style="text-align: left">
                        <div class="form-group">
                            <label>Độ Ưu Tiên</label>
                            <input type="text" name="txtorder" class="form-control" placeholder="Ưu Tiên">
                        </div>
                    </div>

                    <div class="notics" id="errtxtorder" style="display: none"><p style="color: red">{{($errors->has('txtorder'))? $errors->first('txtorder'):''}}</p></div>


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
                    <button id="insertService" class="btn btn-primary">Thêm</button>
                </div>
            </div>
        </div>
    </div>
</div>
