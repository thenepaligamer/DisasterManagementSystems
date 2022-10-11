<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PDF;

class PDFTest extends Controller
{
    //
    public function index()
    {
        $data = [
            'title' => 'Welcome to Tutsmake.com',
            'date' => date('m/d/Y')
        ];
           
        $pdf = PDF::loadView('Reports/incidentreport', $data);
     
        return $pdf->stream('tutsmake.pdf');
    }
}
