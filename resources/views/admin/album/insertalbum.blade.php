@extends('admin.admin')
@section('scripts')
    <style type="text/css">
        .thumbnails li img{
            width: 50px;
            height: 50px;
        }
        .mygrid-wrapper-div{
            overflow: scroll;
            height: 300px;
            padding-left: 5%;
            padding-right: 5%;
        }
    </style>
    <script>
        $(function () {

            $('#example1').DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": true,
                "ordering": false,
                "info": true,
                "autoWidth": false
            });

        });
    </script>
@stop
@section('contain_admin')
    <section class="content-header">
        <h1>
            Thêm Album
            <small>Trang Điều Khiển</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Albums</li>
            <li class="active">Thêm Album</li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">Bảng Dữ Liệu</h3>
                    </div>
                    <div class="form-horizontal">
                        <div class="form-group col-md-12">
                            <label for="name" class="col-sm-2 control-label">Tên Album</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="name" name="name"
                                       placeholder="Đặt Tên Album" value="">
                            </div>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="message" class="col-sm-2 control-label">Mô Tả</label>
                            <div class="col-sm-10">
                                <textarea placeholder="Mô Tả Ngắn Về Album" class="form-control" rows="4" name="message"></textarea>
                            </div>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="message" class="col-sm-2 control-label">Hình Đại Diện</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="name" name="name"
                                       placeholder="" value="">
                                <img src="" width="200" height="200">
                                <button id="openModalChooseImage"class="btn btn-primary">Chọn</button>
                                <button id="openModalCreateAlbum"class="btn btn-primary">Tạo Album</button>
                            </div>
                        </div>
                        <div class="form-group col-md-12">
                            <div class="col-sm-10 col-sm-offset-2">
                                @include('admin.modal.albums.createalbummodal')
                                @include('admin.modal.albums.chooseimagemainmodal')
                                <button id="submit"class="btn btn-primary">Thêm</button>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-10 col-sm-offset-2">
                                <! Will be used to display an alert to the user>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
@stop