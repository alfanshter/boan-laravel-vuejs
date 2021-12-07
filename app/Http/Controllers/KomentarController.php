<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Komentar;

class ProductController extends Controller
{
    public function index()
    {
        $komentar = Komentar::all()->toArray();
        return array_reverse($komentar);      
    }

    public function store(Request $request)
    {
        $komentar = new Komentar([
            'name' => $request->input('name'),
            'detail' => $request->input('detail')
        ]);
        $komentar->save();

        return response()->json('Product created!');
    }

    public function show($id)
    {
        $komentar = Komentar::find($id);
        return response()->json($komentar);
    }

    public function update($id, Request $request)
    {
        $komentar = Komentar::find($id);
        $komentar->update($request->all());

        return response()->json('komentar updated!');
    }

    public function destroy($id)
    {
        $komentar = Komentar::find($id);
        $komentar->delete();

        return response()->json('komentar deleted!');
    }
}