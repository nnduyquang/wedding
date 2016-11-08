@extends('admin.admin')
@section('scripts')
    <style type="text/css">
        .c-headline {
            z-index: 1;
            position: relative;
            width: 100%;
            text-align: center;
        }

        .mygrid-wrapper-div {
            overflow: scroll;
            height: 300px;
            padding-left: 5%;
            padding-right: 5%;
        }

        .c-headline span {
            vertical-align: middle;
            z-index: 10;
            position: relative;
            display: inline-block;
            color: #333333;
            padding: 0 18px;
            background: #fff;
            font-family: 'Muli', "Century Gothic", "Carme", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro", sans-serif;
            font-weight: 200;
            font-style: normal;
            font-size: 28px;
            line-height: 1.2;
        }

        .c-headline:after {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            width: 100%;
            height: 1px;
            background: #c8c8c8;
        }
    </style>
@stop
@section('contain_admin')
    <section class="content-header">
        <h1>
            Tạo Kế Hoạch
            <small>Trang Điều Khiển</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Tạo Kế Hoạch</li>
        </ol>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">Bảng Dữ Liệu</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <div class="form-group row">
                            <label for="example-text-input" class="col-xs-2 col-form-label">Tên Kế Hoạch</label>
                            <div class="col-xs-10">
                                <input class="form-control" type="text" id="example-text-input">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="example-search-input" class="col-xs-2 col-form-label">Mô Tả</label>
                            <div class="col-xs-10">
                                <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="example-search-input" class="col-xs-2 col-form-label">Chọn Album</label>
                            <div class="col-xs-10">
                                <select class="custom-select">
                                    <option selected>Chọn Album Hình</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="example-search-input" class="col-xs-2 col-form-label">Chọn Địa Điểm</label>
                            <div class="col-xs-10">
                                <select class="custom-select">
                                    <option selected>Chọn Địa Điểm</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <h3 class="p-plan-details__title c-headline">
                                <span>Kế Hoạch Chi Tiết</span>
                            </h3>
                        </div>
                        <div class="form-group row">
                            <div class="col-xs-6">
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Tổng Thời Gian Chụp</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Số Shot Hình</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Đồ Cô Dâu</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Đồ Chú Rể</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <h3 class="p-plan-details__title c-headline">
                                <span>Phụ Kiện Đi Kèm</span>
                            </h3>
                        </div>
                        <div class="form-group row">
                            <div class="col-xs-6">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> Cóc xê cho váy
                            </div>
                            <div class="col-xs-6">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> Áo sơ mi trắng
                            </div>
                            <div class="col-xs-6">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> Giày Cho Cô dâu chú rể
                            </div>
                            <div class="col-xs-6">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> 1
                            </div>
                            <div class="col-xs-6">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> 1
                            </div>
                            <div class="col-xs-6">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> 1
                            </div>
                        </div>
                        <div class="form-group row">
                            <h3 class="p-plan-details__title c-headline">
                                <span>Dịch Vụ Đi Kèm</span>
                            </h3>
                        </div>
                        <div class="form-group row">
                            <div class="col-xs-6">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> Cóc xê cho váy
                            </div>
                            <div class="col-xs-6">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> Áo sơ mi trắng
                            </div>
                            <div class="col-xs-6">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> Giày Cho Cô dâu chú rể
                            </div>
                            <div class="col-xs-6">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> 1
                            </div>
                            <div class="col-xs-6">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> 1
                            </div>
                            <div class="col-xs-6">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> 1
                            </div>
                        </div>

                        <div class="col-md-12 text-center">
                            <button onclick="" class="btn btn-primary">Thêm</button>
                            <button id="" type="submit" class="btn btn-primary">Xóa</button>
                            {{-- Modal --}}
                        </div>
                        {{--</form>--}}
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </section>
@stop
