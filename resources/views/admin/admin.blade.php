OK! GOOD
{!! csrf_field() !!}
@if(isset($user))
    {{"Email: ". $user->email}}
    <br>
    {{"Name: ". $user->name}}
@endif
<a href="{{ url('/logout') }}">
    Logout
</a>
