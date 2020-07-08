<?php 
$_GET['appName'] = '!!!!fdjskfhsdkfjhdfghgfhgfh';
$GET['country'] = 'USA';
$country =  $GET['country'];
$appName = $_GET['appName'] ;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Pro theme</title>
  <meta charset="utf-8">
 
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css" integrity="sha256-46r060N2LrChLLb5zowXQ72/iKKNiw/lAmygmHExk/o=" crossorigin="anonymous" />
  
<link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div id ="slider_message"></div>
<div class="con">
   <div class="top-nav">
    <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#Featured" onclick="Featured()">Featured</a></li>
        <li><a data-toggle="tab" href="#top10" onclick="get_default_slags(appName,'top10')">Top 10</a></li>
        <li><a data-toggle="tab" href="#packages" onclick="get_default_slags(appName,'packages')">Packages</a></li>
    </ul>
  </div>
    <div class="tab-content">
    <div id="Featured" class="tab-pane fade in active">
    <div class="theme">
     <img src="" alt="" class="theme-image" id="slider">
    </div>
    </div>
    <div id="top10" class="tab-pane fade">
    <div id="titleTop"></div>
      <div class="strips"  id="top10Content">
      </div>
    </div>
    <div id="packages" class="tab-pane fade">
    <div id="packagesContent" >
    </div>
    </div>
  </div>
  <div id="container_bottom">
    <div class="second-nav">
        <ul class="nav nav-tabs">
           <li id="liDefault" class="active"><a  data-toggle="tab" href="#default" onclick="get_default_slags(appName,'default')"><i class="fa fa-star"></i><div class="contentTab">CASINO</div></a></li>
           <li id="liOffers"><a data-toggle="tab" href="#offers" onclick="get_default_slags(appName,'offers')"><i class="far fa-list-alt"></i><div class="contentTab">OFFERS</div> </a></li>
           <li id="liVip"><a data-toggle="tab" href="#vip" onclick="get_default_slags(appName,'vip')"><i class="far fa-heart"></i><div class="contentTab">VIP</div></a></li>
           <li id="liSlots"><a data-toggle="tab" href="#slots" onclick="get_default_slags(appName,'slots')"><i class="fas fa-gamepad"></i><div class="contentTab">SLOTS</div></a></li>
        </ul>
     </div>
     <div class="tab-content">
             <div id="default">
             <div class="strips" id="defaultContent"></div> 
            </div>
            <div id="offers">
            <div class="strips" id="offersContent"></div> 
            </div>
            <div id="vip">
            <div class="strips" id="vipContent"></div> 
            </div> 
            <div id="slots">
            <div class="strips" id="slotsContent"></div> 
            </div>    
      </div>

     
      <div id="slider_bottom">
      <span id="openColse" ><div class="text">show more games</div><i id="show-hidden-menu" class="fas fa-sort-up arrow"></i></span>
          <div class="hidden-menu" style="display: none;" id="slider_slugs">
          <div class="slide">
            <div class="card">
            <img class="img_slider card-img-top" src="" alt="Photo of sunset">
            <div class="card-body">
            <h3 id="textUp" class="card-title"></h3>
            <a href="#" class="btn btn-light">PLAY NOW</a>
            </div>
            </div>    
          </div>
          <div class="slide">
            <div class="card">
            <img class="img_slider card-img-top" src="" alt="Photo of sunset">
            <div class="card-body">
            <h3 id="textUp" class="card-title"></h3>
            <a href="#" class="btn btn-light">PLAY NOW</a>
            </div>
            </div>    
          </div>
          <div class="slide">
            <div class="card">
            <img class="img_slider card-img-top" src="" alt="Photo of sunset">
            <div class="card-body">
            <h3 id="textUp" class="card-title"></h3>
            <a href="#" class="btn btn-light">PLAY NOW</a>
            </div>
            </div>    
          </div>
          <div class="slide">
            <div class="card">
            <img class="img_slider card-img-top" src="" alt="Photo of sunset">
            <div class="card-body">
            <h3 id="textUp" class="card-title"></h3>
            <a href="#" class="btn btn-light">PLAY NOW</a>
            </div>
            </div>    
          </div>
          <div class="slide">
            <div class="card">
            <img class="img_slider card-img-top" src="" alt="Photo of sunset">
            <div class="card-body">
            <h3 id="textUp" class="card-title"></h3>
            <a href="#" class="btn btn-light">PLAY NOW</a>
            </div>
            </div>    
          </div>
          <!-- <div class="slide"><div class="card"><h5 id="textUp"></h5><img class="img_slider" src="" alt="Photo of sunset"></div></div>
          <div class="slide"><div class="card"><h5 id="textUp"></h5><img class="img_slider" src="" alt="Photo of sunset"></div></div>
          <div class="slide"><div class="card"><h5 id="textUp"></h5><img class="img_slider" src="" alt="Photo of sunset"></div></div> -->

          </div>
     
       </div>
</div>

</div>

<div class="modal fade" id="overlay">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <!-- <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> -->
        <h4 class="modal-title">Play now!!!</h4>
      </div>
      <div class="modal-body">
      <div class="strip" style="border: none;">    
            <div class="image"><img src="" id ='imgPopUp'class="logo heartbeat" width="70px" height="100px"  alt="" data-toggle="modal" data-target="#myModal--specialPromo"></div>
            <div class="namePopUp" id="namePopUp"></div>
            <div class="rate" id="rate">
            <span class="number">5</span>
            </div>
            </div>
            <div class="links">
                <div class="button"><a href="" id="linkPopUp"><div class="btnPopUp btn">VISIT</div></a></div>
                <div class="link">Read Review</div>
            </div>
        </div>
      </div>
    </div>

  </div>
 
</div>

<script>
const appName = '<?= $appName;?>';
const country = '<?= $country;?>';
</script>
<script src="js/main.js"></script>
</body>
</html>
