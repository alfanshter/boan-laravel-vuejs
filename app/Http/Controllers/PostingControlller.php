<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\posting;

class ProductController extends Controller
{
    public function index()
    {
        $products = posting::all()->toArray();
        return array_reverse($products);      
    }

    public function store(Request $request)
    {
        $posting = new posting([
            'name' => $request->input('name'),
            'detail' => $request->input('detail')
        ]);
        $posting->save();

        return response()->json('posting created!');
    }

    public function show($id)
    {
        $posting = posting::find($id);
        return response()->json($posting);
    }

    public function update($id, Request $request)
    {
        $posting = posting::find($id);
        $posting->update($posting->all());

        return response()->json('Product updated!');
    }

    public function destroy($id)
    {
        $posting = posting::find($id);
        $posting->delete();

        return response()->json('Product deleted!');
    }
}