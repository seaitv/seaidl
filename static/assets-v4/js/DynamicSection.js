// 创建一个函数来动态添加section和其中的HTML内容
function addSectionBasedOnResolution() {
  // 获取屏幕宽度
  var screenWidth = window.innerWidth;
  
  // 检查是否已经存在相应的section
  var existingSection = document.querySelector('.desktop, .mobile');
  if (existingSection) {
    existingSection.remove(); // 如果存在，则先删除
  }

  // 创建一个新的section元素
  var section = document.createElement('section');

  // 根据屏幕宽度添加相应的类名
  if (screenWidth >= 750) {
    section.className = 'desktop';
    // 添加desktop设备对应的HTML内容
    section.innerHTML = `
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
    `;
  } else {
    section.className = 'mobile';
    // 添加mobile设备对应的HTML内容
    section.innerHTML = `
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
    `;
  }

  // 将section元素添加到body中
  document.body.appendChild(section);
}



// 调用函数来动态添加section和其中的HTML内容
addSectionBasedOnResolution();

// 监听窗口大小变化的事件
window.addEventListener('resize', function() {
  // 重新执行addSectionBasedOnResolution()函数
  addSectionBasedOnResolution();
});