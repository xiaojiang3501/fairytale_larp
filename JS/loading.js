// <!-- 載入畫面 -->

// 確認整個頁面讀取完畢再將這三個div隱藏起來
$(window).load(function() { 
//delay --> 延遲幾秒才fadeOut        
$("#status").delay(400).fadeOut(800); 
$("#preloader").delay(400).fadeOut(1000);
})
