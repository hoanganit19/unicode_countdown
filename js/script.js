window.addEventListener('DOMContentLoaded', function(){

    var listsTimers = document.querySelectorAll('.timer');

    if (listsTimers!==null){
        listsTimers.forEach(function(timer){
            var daysObj = timer.querySelector('.days');
            var hoursObj = timer.querySelector('.hours');
            var minsObj = timer.querySelector('.mins');
            var secondsObj = timer.querySelector('.seconds');
        
            var expireDate = timer.dataset.expires;
        
            //Tính toán số ngày còn lại
        
            var daysFirst = 0;
        
             //Lấy thời gian hiện tại
             var nowTimeObj = new Date();
             var nowTimestamp = nowTimeObj.getTime();
         
             //Lấy thời gian tại thời điểm expire (hết hạn)
             var expireDateObj = new Date(expireDate);
             var expireTimestamp = expireDateObj.getTime();
         
             //Tính khoảng thời gian
             var rangeTimes = (expireTimestamp - nowTimestamp)/1000; //Quy đổi ra giây
            
             if (rangeTimes>0){
         
                 //Tính ngày
                 daysFirst = Math.floor(rangeTimes/86400);
        
             }
        
            //days
            var countDay = daysFirst;
            var translateValueDay;
        
            //min
            var countMin = 59;
            var translateValueMin;
        
            //hour
            var countHour = 23;
            var translateValueHour;
        
            //second
            var translateValue;
            var count = 59;
        
            setTimeout(function(){
        
                if (daysObj!==null){
                    var innersObj = daysObj.querySelector('.item-inner');
                
                    if (innersObj!==null){
            
                       var numberHtml = '';
            
                       for (var index = daysFirst; index>=0; index--){
                          numberHtml+=`<span class="number">${index}</span>\n`;
                       } 
            
                       innersObj.innerHTML = numberHtml;
                       
                    }
                }
        
                if (hoursObj!==null){
                    var innersObj = hoursObj.querySelector('.item-inner');
                
                    if (innersObj!==null){
            
                       var numberHtml = '';
            
                       for (var index = 23; index>=0; index--){
                          numberHtml+=`<span class="number">${index}</span>\n`;
                       } 
            
                       innersObj.innerHTML = numberHtml;
                       
                    }
                }
        
                if (minsObj!==null){
                    var innersObj = minsObj.querySelector('.item-inner');
                
                    if (innersObj!==null){
            
                       var numberHtml = '';
            
                       for (var index = 59; index>=0; index--){
                          numberHtml+=`<span class="number">${index}</span>\n`;
                       } 
            
                       innersObj.innerHTML = numberHtml;
            
                    }
                }
        
                if (secondsObj!==null){
                    var innersObj = secondsObj.querySelector('.item-inner');
                
                    if (innersObj!==null){
            
                       var numberHtml = '';
            
                       for (var index = 59; index>=0; index--){
                          numberHtml+=`<span class="number">${index}</span>\n`;
                       } 
            
                       innersObj.innerHTML = numberHtml;
            
                    }
                }    
            }, 1000);
            
        
            var checkFirst = false;
        
            var intervalObj = setInterval(function(){
            
            //Lấy thời gian hiện tại
            var nowTimeObj = new Date();
            var nowTimestamp = nowTimeObj.getTime();
        
            //Lấy thời gian tại thời điểm expire (hết hạn)
            var expireDateObj = new Date(expireDate);
            var expireTimestamp = expireDateObj.getTime();
        
        
            //Tính khoảng thời gian
            var rangeTimes = (expireTimestamp - nowTimestamp)/1000; //Quy đổi ra giây
        
            if (rangeTimes>0){
        
                //Tính ngày
                var days = Math.floor(rangeTimes/86400);
               
                rangeTimes = rangeTimes - (days*86400);
        
                //Tính giờ
                var hours = Math.floor(rangeTimes/3600);
        
                rangeTimes = rangeTimes - (hours*3600);
        
                //Tính phút
                var mins = Math.floor(rangeTimes/60);
                rangeTimes = rangeTimes - (mins*60);
        
                //Tính giây
                var seconds = Math.floor(rangeTimes);
                
                //Render lên html
        
                if (daysObj!==null){
                    var innersObj = daysObj.querySelector('.item-inner');
                
                    if (innersObj!==null){
                       var numbersObj = innersObj.querySelectorAll('.number');
        
                       countDay = days;
                       translateValueDay = 0-(daysFirst - countDay)*37;
                
                       numbersObj.forEach(function(item){
                            item.style.transform = 'translateY('+translateValueDay+'px)';
                       });
                       
                        if (count==-1){
                            translateValueDay = 0;
                            countDay = daysFirst;
                            numbersObj.forEach(function(item){
                                item.style.transform = 'translateY('+translateValueDay+'px)';
                            });
                        }
                    }
                }
                
                if (hoursObj!==null){
                    var innersObj = hoursObj.querySelector('.item-inner');
                
                    if (innersObj!==null){
                       var numbersObj = innersObj.querySelectorAll('.number');
        
                       countHour = hours;
                       translateValueHour = 0-(23 - countHour)*37;
                
                       numbersObj.forEach(function(item){
                            item.style.transform = 'translateY('+translateValueHour+'px)';
                       });
                       
                        if (count==-1){
                            translateValueHour = 0;
                            countHour = 23;
                            numbersObj.forEach(function(item){
                                item.style.transform = 'translateY('+translateValueHour+'px)';
                            });
                        }
                    }
                }
        
                if (minsObj!==null){
                    var innersObj = minsObj.querySelector('.item-inner');
                
                    if (innersObj!==null){
                        
                       var numbersObj = innersObj.querySelectorAll('.number');
        
                       countMin = mins;
                       translateValueMin = 0-(59 - countMin)*37;
                
                       numbersObj.forEach(function(item){
                            item.style.transform = 'translateY('+translateValueMin+'px)';
                       });
                       
                        if (count==-1){
                            translateValueMin = 0;
                            countMin = 59;
                            numbersObj.forEach(function(item){
                                item.style.transform = 'translateY('+translateValueMin+'px)';
                            });
                        }
                       
                    }
                }
        
                if (secondsObj!==null){
                    var innersObj = secondsObj.querySelector('.item-inner');
                
                    if (innersObj!==null){
            
                       var numbersObj = innersObj.querySelectorAll('.number');
        
                       count = seconds;
                       translateValue = 0-(59 - count)*37;
                       
                      
                       numbersObj.forEach(function(item){
                            item.style.transform = 'translateY('+translateValue+'px)';
                       });
        
                    
                        if (count==-1){
                            translateValue = 0;
                            count = 59;
                            numbersObj.forEach(function(item){
                                item.style.transform = 'translateY('+translateValue+'px)';
                            });
                        }
                        
                    }
                }
            }
        
            }, 1000);
        });
    }

   

    
});