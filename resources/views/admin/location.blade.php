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
                            setTimeout(function () {
                                $('#notice').fadeOut('fast');
                            }, 3000); // <-- time in milliseconds
                        </script>
                        @if(\Session::has('success'))
                            <h4 id="notice"><p class="text-center bg-success">{{\Session::get('success')}}</p></h4>
                        @elseif(\Session::has('fail'))
                            <h4 id="notice"><p class="text-center bg-danger">{{\Session::get('fail')}}</p></h4>
                        @endif
                        <form action="{{ route('locations') }}" method="post">
                            {{ csrf_field() }}
                            <table id="example1" class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th><input type="checkbox"></th>
                                    <th>Địa Điểm</th>
                                    <th>Người Thực Hiện</th>
                                    <th>Ngày</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($data as $row)
                                    <tr>
                                        <td><input name="checkbox[]" type="checkbox" value="{{$row->id_location}}"></td>
                                        <td>{{$row->name}}
                                        </td>
                                        <td>{{$row->users->name}}</td>
                                        <td> {{$row->updated_at}}</td>
                                        <td><button class="btn btn-primary" data-condition="test" data-toggle="modal-confirm" data-hidden="{{$row->id_location}}" data-name="{{$row->name}}" data-title="Cập Nhật Dữ Liệu!" data-target="#submit-confirm" type="submit">Sửa</button></td>
                                    </tr>
                                @endforeach
                                </tfoot>
                            </table>

                            <div class="col-md-7">
                                <div class="col-md-2">
                                    <span>Địa Điểm</span>
                                </div>
                                <div class="col-md-5">
                                    <input type="text" name="location" class="form-control"
                                           placeholder="Nhập Địa Điểm Cần Thêm">
                                    <p style="color: red">{{($errors->has('location'))? $errors->first('location'):''}}</p>
                                </div>
                                <div class="col-md-5">
                                    <input name="insertLocation" type="submit" class="btn btn-primary" value="Thêm"/>
                                    <input name="deleteLocation"
                                           onclick="return confirm('Chú Có Thật Sự Muốn Xóa? Bút Sa Gà Xối Mỡ');"
                                           type="submit" class="btn btn-primary" value="Xóa"/>
                                </div>
                                <!-- Modal -->
                                <div class="modal fade" id="submit-confirm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                                <h4 class="modal-title"></h4>
                                            </div>
                                            <div class="modal-body"><input type="hidden" name="hdId"> <input type="text" name="editlocation" class="form-control"></div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                <input name="updateLocation" type="submit" class="btn btn-primary" data-confirm="modal" value="Cập Nhật"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <script>
                                    $(document).ready(function(){
                                        $('button[data-toggle="modal-confirm"]').click(function(event) {
                                            event.preventDefault();
                                            var self = $(this);
                                            var hidden = self.data('hidden');
                                            var name = self.data('name');
                                            var title = self.data('title');
                                            var target = $(self.data('target'));
                                            var condition = self.data('condition');
                                            if( target.length == 1) {
                                                target.find('.modal-title').html(title);
                                                target.find('.modal-body input[name="editlocation"]').val(name);
                                                target.find('.modal-body input[name="hdId"]').val(hidden);
                                                //target.find('.modal-body input').val(name);
                                                var showModal = true;
                                                var fn = window[condition];
                                                if(typeof fn === 'function') {
                                                    showModal = fn(condition);
                                                }
                                                if( showModal ) {
                                                    target.on('shown.bs.modal', function(e) {
                                                        target.find('input[data-confirm="modal"]').click(function(e){
                                                           // e.preventDefault();
                                                            var parentForm = self.closest('form');
                                                            //console.log(parentForm.html());
                                                            if( parentForm.length == 1 ) {
                                                                parentForm.submit();
                                                            }
                                                        });
                                                    });
                                                    target.modal({ show: true });
                                                };
                                            };
                                        });
                                    });
                                </script>
                                <!---End Modal--->
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