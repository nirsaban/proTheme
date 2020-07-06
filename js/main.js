 window.onload = init;
 function init(){
  $.ajax({
    url:'server/get_data.php',
    method:'POST',
    data:{appName:appName,country:country,type:'popup'},
    success:function (data){
      renderPopUp(data)
    }
   })
 }
function  renderPopUp(data){
  let dataArr = JSON.parse(data);
  console.log(dataArr)
  imgPopUp.src = dataArr.appLogo;
  linkPopUp.href  = dataArr.appLink;
  namePopUp.innerText = dataArr.appText_UP
  for(let i = 0; i < 6 ; i++){
    rate.innerHTML += '<i class="fa fa-star"></i>'
  }
  setTimeout(popup, 4000)
  $('#overlay').modal('show');
  setTimeout(function() {
      $('#overlay').modal('hide');
  }, 2500);
  setInterval(slide_message,1500)
  setInterval(slide_img,1500)
  get_default_slags(appName,'default')
  
}
function slide_message(){
  let messageArr = ['10 users as corrently in this site','play now and take the money','the Best games in the world ','casino games'];
  var itemMsg = messageArr[Math.floor(Math.random() * messageArr.length)];
  let message = document.getElementById('slider_message')
  message.textContent = itemMsg.toUpperCase();
}
 function popup(){
  $("#popup").show(3000).fadeIn(1000,function(){
      $("#popup").fadeOut(5500);
  });
}

 function slide_img(){
   let imgArr = ['image.jpg','image1','images2','images3'];
   var itemImg = imgArr[Math.floor(Math.random() * imgArr.length)];
   let img = document.querySelector('.theme-image');
   img.src = `assets/${itemImg}`;
  
 }
 function get_default_slags(appName,type){
  $.ajax({
      url:'server/get_data.php',
      method:'POST',
      data:{appName:appName,country:country,type:type},
      success:function (data){
        render_dom(data,type);
      }
  })
 }
 function render_dom(data,type){
  const dataArr = JSON.parse(data);
 if(type === 'default'){
   render_default(dataArr,type)
 }else if(type == 'top10'){
  render_top10(dataArr,type)
 }else if(type == 'packages'){
   render_packages(dataArr,type)
 }else if(type == 'offers'){
   render_offers(dataArr,type)
 }else if(type == 'vip'){
   render_vip(dataArr,type)
 }else if(type == 'slots'){
  render_slots(dataArr,type)
 }
 }
 
  function render_slots(dataArr,type){
    defaultContent.innerHTML = '';
    offersContent.innerHTML = '';
    vipContent.innerHTML = '';
    let slotsContent = document.getElementById('slotsContent');
    slotsContent.innerHTML = '';
      dataArr.map((strip,key) =>{
        vipContent.innerHTML += `<div class="stripSlots${key}">`+
                            '<div class="logo">'+ 
                            `<img src="${strip.appLogo}" alt="" class="image">`+
                            '</div>'+ 
                            `<div class="contentSlots${key}">`+
                             `<div class="price">`+
                             ` ${strip.appText_DOWN} `+ 
                            `<div class="rate">`+
                            `<span class="number">5</span>`+
                            `<div class="starsSlots${key}">`+
                            '</div>';
                            let stars = document.querySelector(`.starsSlots${key}`);
                            for(let i = 0 ; i < 5; i++){
                              stars.innerHTML += `<i class="fa fa-star"></i>`;
                            }
                            let contentDiv = document.querySelector(`.contentSlots${key}`);
                                contentDiv.innerHTML += `<div class="name">${strip.appText_UP}`+
                               '</div>';
                               let stripDiv = document.querySelector(`.stripSlots${key}`);
                               let st = document.querySelector(`.stripSlots${key}`)  
                               st.innerHTML += '<div class="links">'+
                               '<div class="offer">SLOTS GAME'+
                               '</div>'+
                               '<div class="btn btn-danger">PLAY NOW</div>'+
                               '<a href="" class="read">Read Review</a>'+
                              '</div>'+
                               '</div>';
                               stripDiv.classList += ' stripOfAll';  
                                                 
  })
  
  }
 function render_vip(dataArr,type){
   
  slotsContent.innerHTML = '';
  defaultContent.innerHTML = '';
  offersContent.innerHTML = '';
  let vipContent = document.getElementById('vipContent');
  vipContent.innerHTML = '';
    dataArr.map((strip,key) =>{
      vipContent.innerHTML += `<div class="stripVip${key}">`+
                          '<div class="logo">'+ 
                          `<img src="${strip.appLogo}" alt="" class="image">`+
                          '</div>'+ 
                          `<div class="contentVip${key}">`+
                           `<div class="price">`+
                           ` ${strip.appText_DOWN} `+ 
                          `<div class="rate">`+
                          `<span class="number">5</span>`+
                          `<div class="starsVip${key}">`+
                          '</div>';
                          let stars = document.querySelector(`.starsVip${key}`);
                          for(let i = 0 ; i < 5; i++){
                            stars.innerHTML += `<i class="fa fa-star"></i>`;
                          }
                          let contentDiv = document.querySelector(`.contentVip${key}`);
                              contentDiv.innerHTML += `<div class="name">${strip.appText_UP}`+
                             '</div>';
                             let stripDiv = document.querySelector(`.stripVip${key}`);
                             let st = document.querySelector(`.stripVip${key}`)  
                             st.innerHTML += '<div class="links">'+
                             '<div class="offer">VIP'+
                             '</div>'+
                             '<div class="btn btn-dark animVip">PLAY NOW</div>'+
                             '<a href="" class="read">Read Review</a>'+
                            '</div>'+
                             '</div>';
                             stripDiv.classList += ' stripOfAll';  
                                               
})

 }
 function render_offers(dataArr,type){
  slotsContent.innerHTML = '';
  vipContent.innerHTML = '';
   defaultContent.innerHTML = '';
  let offersContent = document.getElementById('offersContent');
  offersContent.innerHTML = '';
    dataArr.map((strip,key) =>{
    offersContent.innerHTML += `<div class="stripOf${key}">`+
                          '<div class="logo">'+ 
                          `<img src="${strip.appLogo}" alt="" class="image">`+
                          '</div>'+ 
                          `<div class="contentOf${key}">`+
                           `<div class="price">`+
                           ` ${strip.appText_DOWN} `+ 
                          `<div class="rate">`+
                          `<span class="number">5</span>`+
                          `<div class="starsOf${key}">`+
                          '</div>';
                          let stars = document.querySelector(`.starsOf${key}`);
                          for(let i = 0 ; i < 5; i++){
                            stars.innerHTML += `<i class="fa fa-star"></i>`;
                          }
                          let contentDiv = document.querySelector(`.contentOf${key}`);
                              contentDiv.innerHTML += `<div class="name">${strip.appText_UP}`+
                             '</div>';
                             let stripDiv = document.querySelector(`.stripOf${key}`);
                             let st = document.querySelector(`.stripOf${key}`)  
                             st.innerHTML += '<div class="links">'+
                             '<div class="offer">NEW OFFER'+
                             '</div>'+
                             '<div class="btn btn-info">PLAY NOW</div>'+
                             '<a href="" class="read">Read Review</a>'+
                            '</div>'+
                             '</div>';
                             stripDiv.classList += ' stripOfAll';  
                                               
})
 }
 function render_packages(dataArr,type){
  
   console.log(dataArr)
  packagesContent.innerHTML = '';
  container_bottom.classList = 'none';
  packagesContent.innerHTML += '<h2 class="packagesTitle">Best Packages</h2>';
  dataArr.map((package,key) =>{
    if(key == 4){
      packagesContent.removeAttribute("id");
    }
    packagesContent.innerHTML += `<div class="container" >`+
    `<div class="card" id = contentP${key}>`+ 
    `<div class="card-body" >`+
      `<h4 class="card-title">${package.appText_UP}</h4>`+
     `<span class="rateP" id="rateP${key}">${5 - key}</span>`;
       let ratePackage = document.getElementById(`rateP${key}`);
        for(let z = 0; z < (5 - key) ; z++){
         ratePackage.innerHTML += '<i class="fa fa-star" style="color: #faf609;"></i>'
       }
       let contentP = document.getElementById(`contentP${key}`);
       contentP.innerHTML +=
    `<br>`+
    `<a href="${package.appLink}" class="btn btn-success">PLAY NOW <i class="fas fa-play faz-3x"></i></a>`+
    `</div>`+
      `<img src="${package.appLogo}" alt="" class="card-img-button" width="100%" height="100px">`+    
    `</div>`+
    `</div>`;
  })
   
 }
 function  render_top10(dataArr,type){
  
  top10Content.innerHTML = ''
  container_bottom.classList = 'none'
  top10Content.innerHTML += '<h2 class="top10Title">Top 10 Games</h2>';
  dataArr.map((strip,key) =>{
    top10Content.innerHTML += `<div class="strip${key}">`+
                            '<div class="logo">'+ 
                            `<img src="${strip.appLogo}" alt="" class="image">`+
                            '</div>'+ 
                            `<div class="content${key}">`+
                             `<div class="price">`+
                             ` ${strip.appText_DOWN} `+ 
                            `<div class="rate">`+
                            `<span class="number">5 - </span> `+
                            `<div class="stars${key}" >`;
                            let stars = document.querySelector(`.stars${key}`);
                            for(let i = 0 ; i < 5; i++){
                              stars.innerHTML += `<i class="fa fa-star" id ="starAnim"></i>`;
                            }
                            let contentDiv = document.querySelector(`.content${key}`);
                            contentDiv.innerHTML +=                             
                            `<div class="name">${strip.appText_UP}`+
                              '</div>'
                               '</div>';
                               let stripDiv = document.querySelector(`.strip${key}`);
                              
                              
                               let st = document.querySelector(`.strip${key}`)  
                               st.innerHTML += '<div class="links">'+
                               '<div class="offer">Top 10 Game'+
                               '</div>'+
                               '<div class="btn btn-warning">PLAY NOW</div>'+
                               '<a href="" class="read">Read Review</a>'+
                              '</div>'+
                               '</div>';

                               stripDiv.classList += ' stripAll';  
                                                 
 })

 }
    function render_default(dataArr,type){
      vipContent.innerHTML = '';
      slotsContent.innerHTML = '';
      offersContent.innerHTML = '';
    let defaultContent = document.getElementById('defaultContent')
    defaultContent.innerHTML = '';
    dataArr.map((strip,key) =>{
    defaultContent.innerHTML += `<div class="stripDef${key}">`+
                            '<div class="logo">'+ 
                            `<img src="${strip.appLogo}" alt="" class="image">`+
                            '</div>'+ 
                            `<div class="contentDef${key}">`+
                             `<div class="price">`+
                             ` ${strip.appText_DOWN} `+ 
                            `<div class="rate">`+
                            `<span class="number">5</span>`+
                            `<div class="starsDef${key}">`+
                            `</div>`;
                            let stars = document.querySelector(`.starsDef${key}`);
                            for(let i = 0 ; i < 5; i++){
                              stars.innerHTML += `<i class="fa fa-star"></i>`;
                            }
                            let contentDiv = document.querySelector(`.contentDef${key}`);
                                contentDiv.innerHTML +=`<div class="name">${strip.appText_UP}`+
                               '</div>';
                               let stripDiv = document.querySelector(`.stripDef${key}`);
                               let st = document.querySelector(`.stripDef${key}`)  
                               st.innerHTML += '<div class="links">'+
                               '<div class="offer">CASINO'+
                               '</div>'+
                               '<div class="btn btn-primary">PLAY NOW</div>'+
                               '<a href="" class="read">Read Review</a>'+
                              '</div>'+
                               '</div>';
                               stripDiv.classList += ' stripDefAll';  
                                                 
 })
 }
 
 function Featured(){
  //  location.reload()
  if(liOffers.classList == 'active'){
    get_default_slags(appName,'offers')
   }
   if(container_bottom.classList = 'none'){
    container_bottom.classList.remove("none");
   }
 }



