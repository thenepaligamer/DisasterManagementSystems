@component('mail::message')
{{ $mailInfo['title'] }}

Congratulations! You have been registered as a volunteer.

Thank you for being a volunteer,<br>
Admin @ {{ config('app.name') }}
@endcomponent