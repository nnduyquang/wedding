@extends('admin.admin')
@section('scripts')
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
            Phụ Kiện
            <small>Trang Điều Khiển</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Phụ Kiện</li>
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
                        @if(\Session::has('success'))
                            <h4 id="notice"><p class="text-center bg-success">{{\Session::get('success')}}</p></h4>
                        @elseif(\Session::has('fail'))
                            <h4 id="notice"><p class="text-center bg-danger">{{\Session::get('fail')}}</p></h4>
                        @endif
                        <form action="{{ route('accessories') }}" method="post">
                            {{ csrf_field() }}
                            <table id="example1" class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th><input class="text-center" id="checkAll" type="checkbox"></th>
                                    <th>Phụ Kiện</th>
                                    <th>Người Thực Hiện</th>
                                    <th>Ngày</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($data as $row)
                                    <tr>
                                        <td><input name="checkbox[]" type="checkbox" value="{{$row->id_accessory}}"></td>
                                        <td>{{$row->name}}
                                        </td>
                                        <td>{{$row->users->name}}</td>
                                        <td> {{$row->updated_at}}</td>
                                        <td><button class="btn btn-primary" data-condition="test" data-toggle="modal-confirm" data-hidden="{{$row->id_accessory}}" data-name="{{$row->name}}" data-title="Cập Nhật Dữ Liệu!" data-target="#submit-confirm" type="submit">Sửa</button></td>
                                    </tr>
                                @endforeach
                                </tfoot>
                            </table>

                            <div class="col-md-9">
                                <div class="col-md-2">
                                    <span>Tên Phụ Kiện</span>
                                </div>
                                <div class="col-md-5">
                                    <input type="text" name="accessory" class="form-control"
                                           placeholder="Nhập Tên Phụ Kiện Cần Thêm">
                                    <p style="color: red">{{($errors->has('accessory'))? $errors->first('accessory'):''}}</p>
                                </div>
                                <div class="col-md-5">
                                    <input name="insertAccessory" type="submit" class="btn btn-primary" value="Thêm"/>
                                    <input name="deleteAccessory"
                                           onclick="return confirm('Chú Có Thật Sự Muốn Xóa? Bút Sa Gà Xối Mỡ');"
                                           type="submit" class="btn btn-primary" value="Xóa"/>
                                </div>
                                {{-- Modal --}}
                                @include('admin.modal.accessories.updatemodal')
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