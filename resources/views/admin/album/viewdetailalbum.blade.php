@extends('admin.admin')
@section('scripts')
    <style type="text/css">
        .thumbnails li img {
            width: 50px;
            height: 50px;
        }

        .mygrid-wrapper-div {
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
            Quản Lý Album Hình
            <small>Trang Điều Khiển</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Albums Hình</li>
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
                        <input name="idFolder" type="hidden" value="{{json_decode($data->content())->id_folder}}">
                        <script>
                            setTimeout(function () {
                                $('#notice').fadeOut('fast');
                            }, 3000); // <-- time in milliseconds
                        </script>
                        @if(\Session::has('success') && count($errors->all())==0)
                            <h4 id="notice"><p class="text-center bg-success">{{\Session::get('success')}}</p></h4>
                        @elseif(\Session::has('fail')&& count($errors->all())==0)
                            <h4 id="notice"><p class="text-center bg-danger">{{\Session::get('fail')}}</p></h4>
                        @endif
                        <div class="page-header">
                            <h1>{{json_decode($data->content())->name }} </h1>
                        </div>
                        {{--<form action="{{ route('services') }}" method="post">--}}
                        {{ csrf_field() }}
                        <table id="example1" class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th><input class="text-center" id="checkAll" type="checkbox"></th>
                                <th>Hình</th>
                                <th>Tên Hình</th>
                                <th>Hình Chính</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>

                            @foreach(json_decode($data->content())->images as $key)
                                <tr>
                                    <td><input name="checkbox[]" type="checkbox" data-name="{{$key[1]}}"
                                               data-folder="{{json_decode($data->content())->name }}"></td>
                                    <td>{{ Html::image($key[0], '',array('width' => 200,'height' => 150)) }}</td>
                                    <td>{{$key[1]}}</td>
                                    @if($key[1]==json_decode($data->content())->mainImage)
                                        <td><input name="mainImage" type="radio" value="{{$key[1]}}" checked><br></td>
                                    @else
                                        <td><input name="mainImage" type="radio" value="{{$key[1]}}"><br></td>
                                    @endif
                                    <td>
                                        <button id="deleteImageInfolder" class="deleteImageInfolder btn btn-primary"
                                                data-name="{{$key[1]}}"
                                                data-folder="{{json_decode($data->content())->name }}"
                                                class="btn btn-primary">Xóa
                                        </button>
                                    </td>
                                </tr>
                            @endforeach
                            </tfoot>
                        </table>

                        <div class="col-md-12 text-center">
                            {{--                            @include('admin.modal.albums.addalbummodal')--}}
                            @include('admin.modal.albums.insertimagetoalbummodal')
                            <button id="insertImageToAlbum" data-target="submit-confirm-insert-image-to-album"
                                    data-name="{{json_decode($data->content())->name }}" class="btn btn-primary">Thêm
                                Hình Vào Album
                            </button>
                            <button id="updateMainImage" class="btn btn-primary">Cập Nhật Hình Chủ Đề</button>
                            <button id="deleteService" type="submit" class="btn btn-primary">Xóa</button>
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
    <!-- /.content -->
@stop