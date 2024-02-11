function addSectionBasedOnResolution(){var s=window.innerWidth,i=document.querySelector(".desktop, .mobile");i&&i.remove();var a=document.createElement("section");s>=750?(a.className="desktop",a.innerHTML=`
<section class="desktop">
 <div class="container">
  <div class="header">
   <div class="logo-container">
    <div class="logo">
     <img src="./static/assets-v4/images/pc/img-1.png" alt="">
     <div class="logo-txt">
      <img src="./static/assets-v4/images/pc/img-2.png" class="txt-1">
      <img src="./static/assets-v4/images/pc/img-3.png" class="txt-2">
     </div>
    </div>
   </div>
   <div class="contact-container">
    <a class="nav-item" onclick="onAddress('link1')">
     <div class="contact-us"><img src="./static/assets-v4/images/pc/img-4.png" alt=""></div>
    </a>
   </div>
  </div>  
  <div class="main">
   <div class="title-container">
    <div class="decs-container">
     <div class="title_">
      <img src="./static/assets-v4/images/pc/img-6.png" alt="">
     </div>
     <div class="info-activity">
      <div class="qrcode">
       <div class="qr" title="https://h5.seai.site"><!--canvas width="120" height="120"></canvas--><img src="./static/assets-v4/images/pc/dl-qr.png"></div>
      </div>
      <div class="cont">
       <img src="./static/assets-v4/images/pc/and.png" alt="" class="android-img" onclick="downloadApp('android')">
       <img src="./static/assets-v4/images/pc/ios.png" alt="" class="ios-img" onclick="downloadApp('ios')">
      </div>
     </div>
    </div>
   </div>
   <div class="theme-content">
    <img src="./static/assets-v4/images/pc/img-7.png" alt="" class="imgg">
   </div>
  </div>
 </div>
</section>
 `):(a.className="mobile",a.innerHTML=`
<section class="mobile">
 <div class="wrap-body">
  <div class="main-content">
   <div class="top-btn">
    <div class="logo-container">
     <img src="./static/assets-v4/images/mb/img-2.png" alt="text" title="" class="logo-header">
     <div class="logo-txt">
      <div class="txt-1">
       <img src="./static/assets-v4/images/mb/img-3.png" alt="" class="title-img-1">
      </div>
      <div class="txt-2">
       <img src="./static/assets-v4/images/mb/img-4.png" alt="">
      </div>
     </div>
    </div>
    <div class="btn-list">
     <div class="btnimg" onclick="onAddress('link1')">
      <img class="icon-img" src="./static/assets-v4/images/mb/img-5.png">
     </div>
    </div>
   </div>
   <div class="recommend">
    <img src="./static/assets-v4/images/mb/img-7.png" alt="">
    <div class="textimg">
     <img src="./static/assets-v4/images/mb/txtt.png" alt="">
    </div>
   </div>

   <div class="footer-area">
    <div class="device-app">
     <img src="./static/assets-v4/images/mb/and.png" alt="" onclick="downloadApp('android')">
     <img src="./static/assets-v4/images/mb/ios.png" alt="" onclick="downloadApp('ios')">
    </div>
    <div class="device-area">
     <img src="./static/assets-v4/images/mb/e.png" alt="" onclick="downloadApp('web')">
     <img src="./static/assets-v4/images/mb/app.png" alt="" class="setup-tips-container">
    </div>
   </div>
  </div>
  <div class="android-modal" id="platform-list">
   <div class="header">
    <div class="android-modal-arrow" data-type="1"><img src="./static/assets-v4/mobile/back-black.png" alt=""></div>
    <div class="title" id="show-platform-tips"><img src="./static/assets-v4/mobile/u-1.png" alt=""></div>
    <div>&nbsp;&nbsp;</div>
   </div>
   <div class="content">
    <div class="platform-item" data-src="./static/assets-v4/mobile/cell1-detail.jpg"><img src="./static/assets-v4/mobile/cell1.png" alt=""></div>
    <div class="platform-item" data-src="./static/assets-v4/mobile/cell2-detail.jpg"><img src="./static/assets-v4/mobile/cell2.png" alt=""></div>
    <div class="platform-item" data-src="./static/assets-v4/mobile/cell3-detail1.jpg" data-src2="./static/assets-v4/mobile/cell3-detail2.jpg"><img src="./static/assets-v4/mobile/cell3.png" alt=""></div>
    <div class="platform-item" data-src="./static/assets-v4/mobile/cell4-detail.jpg"><img src="./static/assets-v4/mobile/cell4.png" alt=""></div>
    <div class="platform-item" data-src="./static/assets-v4/mobile/cell5-detail.jpg"><img src="./static/assets-v4/mobile/cell5.png" alt=""></div>
    <div class="platform-item" data-src="./static/assets-v4/mobile/cell6-detail.jpg"><img src="./static/assets-v4/mobile/cell6.png" alt=""></div>
    <div class="platform-item" data-src="./static/assets-v4/mobile/cell7-detail.jpg"><img src="./static/assets-v4/mobile/cell7.png" alt=""></div>
    <div class="platform-item" data-src="./static/assets-v4/mobile/cell8-detail.jpg"><img src="./static/assets-v4/mobile/cell8.png" alt=""></div>
    <div class="platform-item" data-src="./static/assets-v4/mobile/cell9-detail.jpg"><img src="./static/assets-v4/mobile/cell9.png" alt=""></div>
   </div>
  </div>
  
  <div class="android-modal two" id="platform-detail">
   <div class="header">
    <div class="android-modal-arrow" data-type="2"><img src="./static/assets-v4/mobile/back-black.png" alt=""></div>
    <div class="title"><img src="./static/assets-v4/mobile/u-1.png" alt=""></div>
    <div>&nbsp;&nbsp;</div>
   </div>
   <div class="content">
    <img class="modal-common-img" alt="">
    <img class="modal-common-img-2" alt="">
   </div>
  </div>
  
  <div class="android-modal two" id="ios-detail">
   <div class="header">
    <div class="android-modal-arrow" data-type="3"><img src="./static/assets-v4/mobile/back-black.png" alt=""></div>
    <div class="title"><img src="./static/assets-v4/mobile/u-2.png" alt=""></div>
    <div>&nbsp;&nbsp;</div>
   </div>
   <div class="content">
    <img class="modal-common-img" src="./static/assets-v4/mobile/doc-ios-1.jpeg">
   </div>
  </div>
 </div>
</section>
 `),document.body.appendChild(a)}addSectionBasedOnResolution(),window.addEventListener("resize",function(){addSectionBasedOnResolution()});const getDeviceInfo=()=>{let s=navigator.userAgent.toLowerCase(),i=!1===Boolean(s.match(/mobile|android|iphone/i)),a=Boolean(s.match(/mobile|android|iphone/i)),t=Boolean(s.match(/iphone|ipad/i)),c=Boolean(s.match(/android|mobile|pad/i)&&!1===Boolean(s.match(/ipad/i))&&!1===Boolean(s.match(/mac/i)));return screen.availWidth>=1024&&c&&(i=!0,a=!1,c=!1),{isPc:i,isMobile:a,isIos:t,isAndroid:c}};function downloadApp(s){void 0===s&&(s=getDeviceInfo().isIos?"ios":"android"),"ios"===s?downapp_ios():"web"===s?downapp_web():downapp_android()}function downapp_ios(){setTimeout(function(){location.href=dataMap.iosLink},200)}function downapp_web(){setTimeout(function(){location.href=dataMap.web},200)}function downapp_android(){setTimeout(function(){location.href=dataMap.androidLink},200)}function onAddress(s){event.stopPropagation(),"link1"===s&&window.open(dataMap.link1,"_blank")}$(document).ready(function(){getDeviceInfo().isIos?$(".setup-tips-container").on("click",function(){$("#ios-detail").fadeIn().css("display","flex")}):$(".setup-tips-container").on("click",function(){$("#platform-list").fadeIn().css("display","flex")}),$(".platform-item").on("click",function(){let s=$(this).data("src"),i=$(this).data("src2"),a=$("#platform-detail");a.find(".modal-common-img").attr("src",s),(""!==i||void 0!==i)&&a.find(".modal-common-img-2").attr("src",i);a.find(".modal-common-img-2").attr("src")?a.find(".modal-common-img-2").show():a.find(".modal-common-img-2").hide(),a.fadeIn().css("display","flex")}),$(".android-modal-arrow").on("click",function(){let s=$(this).data("type");if(1===s&&$("#platform-list").fadeOut(),2===s){$("#platform-detail").fadeOut();let i=$("#platform-detail");i.find(".modal-common-img").attr("src",""),i.find(".modal-common-img-2").attr("src","")}3===s&&$("#ios-detail").fadeOut()})});