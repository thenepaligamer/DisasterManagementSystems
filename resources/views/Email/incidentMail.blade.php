@component('mail::message')
{{ $mailInfo['title'] }}

Please evacuate to the nearest safe place.<br>
Tune in into Radio Nepal 100Mhz for any updates.
Admin @ {{ config('app.name') }}
@endcomponent