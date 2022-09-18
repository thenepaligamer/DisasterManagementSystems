@component('mail::message')
{{ $mailInfo['title'] }}

Congratulations! Your account has been created.

@component('mail::button', ['url' => $mailInfo['url']])
Cheers!
@endcomponent

Thank you for being a volunteer,<br>
Admin @ {{ config('app.name') }}
@endcomponent