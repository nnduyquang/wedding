<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hải Mộc Wedding Studio Login</title>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    {{ Html::style('public/css/login.css') }}
    <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    {{ Html::script('public/js/login.js') }}
</head>

<body>
<div class="wrapper">
    <form class="login" role="form" method="POST" action="{{ route('login') }}">
        {{ csrf_field() }}
        <p class=title">Đăng Nhập</p>
        <span class="help-block">
                    {{ $errors->first('errors')? $errors->first('errors'):'' }}
        </span>
        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
            <input type="text" placeholder="Email" class="form-control" name="email" value="{{ old('email') }}"
                   autofocus required/>
            @if ($errors->has('email'))
                <span class="help-block">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif

            <i class="fa fa-user"></i>
        </div>
        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
            <input type="password" placeholder="Password" class="form-control" name="password" required/>
            @if ($errors->has('password'))
                <span class="help-block">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @endif
            <i class="fa fa-key"></i>
            <a href="#">Quên Mật Khẩu? Gọi Anh Quang</a>
        </div>
        <button type="submit">
            <i class="spinner"></i>
            <span class="state">Đăng Nhập</span>
        </button>
    </form>
    <footer><a target="blank" href="http://smartlinks.vn/">smartlinks.vn</a></footer>
    </p>
</div>
</body>
</html>
