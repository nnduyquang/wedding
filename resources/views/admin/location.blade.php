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
            Albums
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
                        <h3 class="box-title">Data Table With Full Features</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <script>
                            setTimeout(function() {
                                $('#notice').fadeOut('fast');
                            }, 3000); // <-- time in milliseconds
                        </script>
                        @if(\Session::has('success'))
                            <h4 id="notice"><p class="text-center bg-success">Thêm Thành Công</p></h4>
                        @elseif(\Session::has('fail'))
                            <h4 id="notice"><p class="text-center bg-danger">Thêm Thất Bại</p></h4>
                        @endif
                        <table id="example1" class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th><input type="checkbox"></th>
                                <th>Địa Điểm</th>
                                <th>Người Thực Hiện</th>
                                <th>Ngày</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>Internet
                                    Explorer 4.0
                                </td>
                                <td>Win 95+</td>
                                <td> 4</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>Internet
                                    Explorer 5.0
                                </td>
                                <td>Win 95+</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>Internet
                                    Explorer 5.5
                                </td>
                                <td>Win 95+</td>
                                <td>5.5</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>Internet
                                    Explorer 6
                                </td>
                                <td>Win 98+</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>Internet Explorer 7</td>
                                <td>Win XP SP2+</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>AOL browser (AOL desktop)</td>
                                <td>Win XP</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>Firefox 1.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.7</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>Firefox 1.5</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>Firefox 3.0</td>
                                <td>Win 2k+ / OSX.3+</td>
                                <td>1.9</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>Camino 1.0</td>
                                <td>OSX.2+</td>
                                <td>1.8</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th><input type="checkbox"></th>
                                <th>Địa Điểm</th>
                                <th>Người Thực Hiện</th>
                                <th>Ngày</th>
                            </tr>
                            </tfoot>
                        </table>
                        <form action="{{ route('locations') }}" method="post">
                            {{ csrf_field() }}
                            <div class="col-md-7">
                                <div class="col-md-2">
                                    <span>Địa Điểm</span>
                                </div>
                                <div class="col-md-5">
                                    <input type="text"  name="location" class="form-control" placeholder="Nhập Địa Điểm Cần Thêm">
                                    <p style="color: red">*{{($errors->has('location'))? $errors->first('location'):''}}</p>
                                </div>
                                <div class="col-md-5">
                                    <input name="insertLocation" type="submit" class="btn btn-primary" value="Thêm"/>
                                    <input name="updateLocation" type="submit" class="btn btn-primary" value="Sửa"/>
                                    <input name="deleteLocation" type="submit" class="btn btn-primary" value="Xóa"/>
                                </div>
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