@extends('master')


@section('inline_css')
  <link href="vendors/lightslider/css/lightslider.min.css" rel="stylesheet" type="text/css">
@endsection

@section('body')

<div class="row">

  <div class="col-xs-8">

    <div class="loading" style="display: none">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </div>

    <div class="houses-item-container">
      @include('widgets.house_items')
    </div>


    <div class="text-center paginator">
      {{$houses->links()}}
    </div>

  </div>
  <div class="col-xs-4">
    @include('widgets.map')
  </div>
</div>
@endsection



@section('inline_scripts')
  <script src='https://maps.google.com/maps/api/js?sensor=false&libraries=geometry&v=3.22&key=AIzaSyC6pwEoTVF29E3iuxfazy-LqRTx_4EmIPY'></script>
  <script type="text/javascript" src="vendors/lightslider/js/lightslider.min.js"></script>
  <script src="vendors/maplace-js/maplace.js"></script>
  <script type="text/javascript" src="js/app.js"></script>
  <script type="text/javascript" src="js/test.js"></script>
@endsection
