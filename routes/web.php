<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  $houses = \App\Models\House::paginate(16);

  // Check request if an ajax call
  if (request()->ajax()) {
    // True - get view and return
    $items = view('widgets.house_items', compact('houses'))->render();
    $paginator = view('widgets.paginator', ['data' => $houses])->render();
    return response()->json(['items' => $items, 'paginator' => $paginator]);
  }

  return view('homes', compact('houses'));
});

Route::get('/houses', function () {
  $houses = \App\Models\House::with('images')->take(8)->get();

  return response()->json(['houses' => $houses]);

});
