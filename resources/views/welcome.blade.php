@if (Auth::check())
    <li><a href="dashboard.html"> Hello {{ Auth::user()->id }}  </a></li>
@endif

