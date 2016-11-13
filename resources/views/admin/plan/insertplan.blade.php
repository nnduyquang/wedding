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
                        {!! Form::open(array('id'=>'formInsertPlan','url'=>'sml_admin/plans','method'=>'POST')) !!}
                        <div class="form-group row">
                            <label for="example-text-input" class="col-xs-2 col-form-label">Tên Kế Hoạch</label>
                            <div class="col-xs-10">
                                <input class="form-control" type="text" id="nameAlbum">
                                <div class="notics" id="errtxtnameAlbum" style="display: none"><p style="color: red"></p></div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="example-search-input" class="col-xs-2 col-form-label">Mô Tả</label>
                            <div class="col-xs-10">
                                <textarea class="form-control" id="descriptionAlbum" rows="3"></textarea>
                                <div class="notics" id="errtxtdescriptionAlbum" style="display: none"><p style="color: red"></p></div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="example-search-input" class="col-xs-2 col-form-label">Chọn Album</label>
                            <div class="col-xs-10">
                                <select class="custom-select" id="folderChoose">
                                    <option selected>Chọn Album Hình</option>
                                    @foreach(json_decode($data->content())->albumfolders as $key)
                                        <option value="{{$key->id_folder}}">{{$key->name}}</option>
                                    @endforeach
                                </select>
                                <div class="notics" id="errtxtfolderChoose" style="display: none"><p style="color: red"></p></div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="example-search-input" class="col-xs-2 col-form-label">Chọn Địa Điểm</label>
                        </div>
                        <div class="form-group row">
                            <div class="notics" id="errtxtlocations" style="display: none"><p style="color: red"></p></div>
                            @foreach(json_decode($data->content())->locations as $key)
                                <div class="col-xs-6">
                                    <input class="form-check-input" name="locations[]" type="checkbox" id="inlineCheckbox1"
                                           value="{{$key->id_location}}">
                                    {{$key->name}}
                                </div>
                            @endforeach

                        </div>

                        <div class="form-group row">
                            <h3 class="p-plan-details__title c-headline">
                                <span>Kế Hoạch Chi Tiết</span>
                            </h3>
                        </div>
                        <div class="form-group row">
                            @foreach(json_decode($data->content())->accessories as $key)
                                @if($key->type==1)
                                    <div class="col-xs-6">
                                        <div class="form-group">
                                            <label for="formGroupExampleInput">{{$key->name}}<span style="color: red">*</span></label>
                                            <input type="text" class="form-control" id="accessory_description_{{$key->id_accessory}}">
                                            <input data="idHiddenAccessoryMain" type="hidden" id="accessory_id_{{$key->id_accessory}}" value="{{$key->id_accessory}}">
                                        </div>
                                    </div>
                                @endif
                            @endforeach
                                <div class="notics" id="errtxtAccessoryMain" style="display: none"><p style="color: red"></p></div>
                        </div>
                        <div class="form-group row">
                            <h3 class="p-plan-details__title c-headline">
                                <span>Phụ Kiện Đi Kèm</span>
                            </h3>
                        </div>
                        <div class="form-group row">
                            @foreach(json_decode($data->content())->accessories as $key)
                                @if($key->type==0)
                                    <div class="col-xs-6">
                                        <input class="form-check-input" name="accessorySubs[]" type="checkbox" id="inlineCheckbox1"
                                               value="{{$key->id_accessory}}">
                                        {{$key->name}}
                                    </div>
                                @endif
                            @endforeach
                        </div>
                        <div class="form-group row">
                            <h3 class="p-plan-details__title c-headline">
                                <span>Dịch Vụ Đi Kèm</span>
                            </h3>
                        </div>
                        <div class="form-group row">
                            @foreach(json_decode($data->content())->services as $key)
                                <div class="col-xs-6">
                                    <div class="form-group">
                                        <input class="form-check-input" name="services" type="checkbox" id="inlineCheckbox1"
                                               value="{{$key->id_service}}">
                                        {{$key->name}}
                                        <input type="text" class="form-control" id="description_{{$key->id_service}}">
                                    </div>

                                </div>
                            @endforeach
                        </div>
                        <div class="form-group row">
                            <label for="example-text-input" class="col-xs-2 col-form-label">Tags</label>
                            <div class="col-xs-10">
                                <input class="form-control" type="text" id="tags">
                            </div>
                        </div>

                        <div class="col-md-12 text-center">
                            <button id="insertplan" class="btn btn-primary">Thêm</button>
                            <button id="" type="submit" class="btn btn-primary">Xóa</button>
                            {{-- Modal --}}
                        </div>
                        {!! Form::close() !!}
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
