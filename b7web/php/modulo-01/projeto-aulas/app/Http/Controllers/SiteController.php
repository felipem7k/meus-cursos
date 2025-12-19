<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function index() {
        $nome = "Felipe";

        $data = [
            "nome" => $nome
        ];

        return view('welcome', $data);
    }

    public function exit() {
        return view("exit");
    }

    public function users(Request $request) {
        $data = [
            "amount_users" => $request->qnt
        ];

        return view("users", $data);
    }
}
