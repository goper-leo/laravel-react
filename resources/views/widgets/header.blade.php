<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
        <img alt="onerent" src="images/logo.png">
      </a>
    </div>

    <form class="navbar-form navbar-left" role="search">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><i class="fa fa-search"></i></div>
          <input type="text" class="form-control" id="exampleInputAmount" placeholder="Place">
        </div>
      </div>

      <div class="btn-group">
        <button type="button" class="no-radius btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="fa fa-calendar"></span> Anytime
        </button>
        <ul class="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </div>
      <div class="btn-group ">
        <button type="button" class="text-left btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="fa fa-group"></span> 1 Guest
        </button>
        <ul class="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </div>
    </form>

    <ul class="nav navbar-nav navbar-right">
      <li><a href="#">Become a Host</a></li>
      <li><a href="#">Help</a></li>
      <li><a href="#">Sign Up</a></li>
      <li><a href="#">Log In</a></li>

    </ul>
  </div>
  <div class="container-fluid nav-second-layer">
    {{-- Second Layer --}}
    <ul class="nav navbar-nav navbar-left text-uppercase">
      <li><a href="#">For You</a></li>
      <li class="active"><a href="#">Homes</a></li>
      <li><a href="#">Experiences</a></li>
      <li><a href="#">Places</a></li>

    </ul>
  </div>

  {{-- Third Layer --}}
  <div class="container-fluid third-layer">
    <ul class="nav navbar-nav navbar-left">
      <li class="dropdown">
        <a id="dLabel"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Room Type
          <span class="caret"></span>
        </a>
        <div class="dropdown-menu" aria-labelledby="dLabel">
          asdasd
        </div>

      </li>
      <li class="dropdown">
        <a id="dLabel"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Price range
          <span class="caret"></span>
        </a>
        <div class="dropdown-menu" aria-labelledby="dLabel">
          asdasd
        </div>

      </li>
      <li class="dropdown">
        <a id="dLabel"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Instant Book
          <span class="caret"></span>
        </a>
        <div class="dropdown-menu" aria-labelledby="dLabel">
          asdasd
        </div>

      </li>
      <li class="dropdown">
        <a id="dLabel"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More Filters
          <span class="caret"></span>
        </a>
        <div class="dropdown-menu" aria-labelledby="dLabel">
          asdasd
        </div>

      </li>

    </ul>
  </div>
  <div id="test-append">
    Test
  </div>
</nav>
