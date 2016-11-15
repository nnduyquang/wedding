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
            Kế Hoạch
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
                        <table id="example1" class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th><input class="text-center" id="checkAll" type="checkbox"></th>
                                <th>Tên Plan</th>
                                <th>Album Hình</th>
                                <th>User</th>
                                <th>Ngày</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($data as $row)
                                <tr>
                                    <td><input name="checkbox[]" type="checkbox" value="{{$row->id_album}}"></td>
                                    <td>{{$row->name}}</td>
                                    <td>{{$row->albumfolders->name}}</td>
                                    <td>{{$row->users->name}}</td>
                                    <td>{{$row->updated_at}}</td>
                                    <td><button id="viewDetailPlan" data-id="{{$row->id_album}}" class="btn btn-primary viewDetailPlan">Xem</button></td>
                                </tr>
                            @endforeach
                            </tfoot>
                        </table>

                        <div class="col-md-12 text-center">
                            <button onclick="window.location='{{ URL::route('insertplan') }}'" class="btn btn-primary">Thêm Kế Hoạch</button>
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
    <!-- /.content -->
@stop