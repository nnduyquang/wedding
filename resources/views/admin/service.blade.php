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

            //$('#input-file').fileinput({'showUpload':false, 'previewFileType':'any'});
        });
    </script>
@stop
@section('contain_admin')
    <section class="content-header">
        <h1>
            Dịch Vụ
            <small>Trang Điều Khiển</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Albums</li>
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
                        <form action="{{ route('services') }}" method="post">
                            {{ csrf_field() }}
                            <table id="example1" class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th><input class="text-center" id="checkAll" type="checkbox"></th>
                                    <th>Tên Dịch Vụ</th>
                                    <th>Biểu Tượng</th>
                                    <th>Ưu Tiên</th>
                                    <th>Người Thực Hiện</th>
                                    <th>Ngày</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                 @foreach($data as $row)
                                     <tr>
                                         <td><input name="checkbox[]" type="checkbox" value="{{$row->id_service}}"></td>
                                         <td>{{$row->name}}</td>
                                         <td>{{ Html::image($row->icon,'',array('width'=>50,'height'=>50)) }}</td>
                                         <td>{{$row->order}}</td>
                                         <td>{{$row->users->name}}</td>
                                         <td> {{$row->updated_at}}</td>
                                         <td><button class="btn btn-primary" data-type="update" data-condition="test" data-toggle="modal-confirm-crud" data-hidden="{{$row->id_service}}" data-name="{{$row->name}}" data-title="Cập Nhật Dữ Liệu!" data-target="#submit-confirm-crud" type="submit" data-value="{{$row->id_service}}">Sửa</button></td>
                                     </tr>
                                 @endforeach
                                </tfoot>
                            </table>

                            <div class="col-md-12 text-center">
                                <button class="btn btn-primary" data-toggle="modal-confirm-crud" data-type="insert" data-condition="test" data-target="#submit-confirm-crud">Thêm</button>
                                <input name="deleteService"
                                       onclick="return confirm('Chú Có Thật Sự Muốn Xóa? Bút Sa Gà Xối Mỡ');"
                                       type="submit" class="btn btn-primary" value="Xóa"/>
                                <button class="btn btn-primary" data-toggle="modal-confirm-icon" data-type="icon" data-condition="testicon" data-target="#submit-confirm-icon">Upload Icon</button>
                                {{-- Modal --}}
                                @include('admin.modal.services.updatemodal')
                                @include('admin.modal.services.iconmodal')
                            </div>
                        </form>
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