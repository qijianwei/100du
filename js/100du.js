$(function(){
           
           //搜索切换
           (function(){
           	    var aLi=$("#menu li");
           	    var oText=$("#search .form").find(".text");
           	    var iNow=0;
           	    var arrText = [
			   '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			   '例如：昌平区育新站龙旗广场2号楼609室',
			   '例如：万达影院双人情侣券',
			   '例如：东莞出事了，大老虎是谁？',
			   '例如：北京初春降雪，天气变幻莫测'
		        ];
		         oText.val(arrText[iNow]);

                 aLi.each(function(index) {
                 	$(this).click(function(event) {
                 		aLi.attr('class','');
                 		$(this).attr('class','active');
                 		iNow=index;
                 		oText.val(arrText[iNow]);
                 	});
                 });  
                 
                 oText.focus(function() {
                 	if($(this).val()==arrText[iNow]){
                 		$(this).val('');

                 	}
                 });
                 
                  oText.blur(function() {
                  	if($(this).val()==""){
                  	  $(this).val(arrText[iNow]);
                  	}
                  });
            })();      
           
            
            //update文字滚动
            (function(){
                var oUpdate=$(".update");
                var oUl=oUpdate.find('ul');
                var oUpBtn=$('#upBtn');
                var oDownBtn=$('#downBtn');
                var iH=0;
                var str='';
                var num=0;
                var timer=null;
            	arrDate=[

                      { 'name':'萱萱', 'time':4, 'title':'我爱你灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
                      { 'name':'聪聪', 'time':5, 'title':'那些年我们一起追的女孩', 'url':'http://www.miaov.com/2013/' },
                      { 'name':'淡淡', 'time':6, 'title':'床前明月光，疑是地上霜', 'url':'http://www.miaov.com/2013/' },
                      { 'name':'威威', 'time':7, 'title':'惨象已使我目不忍视', 'url':'http://www.miaov.com/2013/' },
                      { 'name':'龙龙', 'time':8, 'title':'十年生死两茫茫', 'url':'http://www.miaov.com/2013/' },
                      { 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			          { 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
            	]
                for( var i=0;i<arrDate.length;i++){
                    str+= '<li><a href="'+arrDate[i].url+'"><strong>'+arrDate[i].name+'</strong><span>'+arrDate[i].time+'分钟前</span>写了一篇新文章：'+arrDate[i].title+'</a></li>';
                }
                oUl.html(str);
                var iH=oUl.find('li').height();
             
                
            	oUpBtn.click(function(){
            		
                   doMove(-1);
            	})

            	oDownBtn.click(function(){

                   doMove(1);
            	})
                
                oUpdate.hover(function(){
                    
                       clearInterval(timer);
                }, autoPlay);

                function autoPlay(){
                	timer=setInterval(function(){
                        doMove(-1);

                	},1500)

                } 

                autoPlay();

                function doMove(iNow){
                   num+=iNow;
                   if(Math.abs(num)>arrDate.length-1){
                   	 num=0;
                   }
                   if(num>0){
                   	 num=-(arrDate.length-1);
                   }
                   oUl.stop().animate({'top':num*iH},2000,'elasticOut');
                }

            })();


            //选项卡切换
            (function(){

                fnTab($('.tabNav1'),$('.tabCon1'),'click');
                fnTab($('.tabNav2'),$('.tabCon2'),'click');
                fnTab($('.tabNav3'),$('.tabCon3'),'mouseover');
                fnTab($('.tabNav4'),$('.tabCon4'),'mouseover');
                function fnTab(oTab,aCon,aEvent){
                    var aElem=oTab.children();
                    aCon.hide().eq(0).show();

                    aElem.each(function(index){

                    	$(this).on(aEvent,function(){
                    		aElem.removeClass('active').addClass('gradient');
                    		$(this).addClass('active');
                    		aElem.find('a').attr('class','triangle_down_grey');
                    		$(this).find('a').attr('class','triangle_down_red');
                    		aCon.hide().eq(index).show();
                    	})
                    })    
                }

            })();

             
            //自动播放的焦点图
            (function(){
                
                var oDiv=$('#fade');
                var aUlLi=oDiv.find('ul li');
                var aOlLi=oDiv.find('ol li');
                var oP=oDiv.find('p');
                var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
                var iNow=0;
                var timer=null;
                fadeOut();
                autoPlay();
                
                aOlLi.click(function(){
                	iNow=$(this).index();
                	fadeOut();
                })

                aUlLi.hover(function(){

                	clearInterval(timer);
                },autoPlay);

                function autoPlay(){
                	timer=setInterval(function(){
                		iNow++;
                		iNow=iNow%arr.length;
                        fadeOut();
                	},1000)
                } 
                function fadeOut(){
                    aOlLi.each(function(index){
                        if(index!=iNow){
                           aUlLi.eq(index).fadeOut().css('zIndex',1);
                           aOlLi.eq(index).attr('class','');

                        }else{
                           aUlLi.eq(index).fadeIn().css('zIndex',2);
                           aOlLi.eq(index).attr('class','active');
                           oP.text(arr[iNow]);
                        }
                      }) 
                 }       
                   
             })();   
             
           
           //日历提示说明
           (function(){

               var aSpan = $('.calendar h3 span');
		       var aImg = $('.calendar .img');
		       var oPrompt = $('.today_info');
		       var oImg = oPrompt.find('img');
		       var oStrong = oPrompt.find('strong');
		       var oP = oPrompt.find('p');

		       aImg.hover(function(){

                    //console.log($(this).parent().index()%7); 
                    var index=$(this).parent().index()%7;
                    var iTop=$(this).parent().position().top-30;
                    var iLeft=$(this).parent().position().left+55;
                    console.log($(this).parent().position());

                    oP.text($(this).attr('info'));
                    oStrong.text(aSpan.eq(index).text());
                    oImg.attr('src',$(this).attr('src'));
                    oPrompt.show().css({'left':iLeft,'top':iTop});
		       },function(){

		       	  oPrompt.hide();
		       })

		   })();

		   //bbs高亮移动
		   (function(){
               $('.bbs ol li').mouseover(function(){
                    $('.bbs ol li').attr('class','');
               	    $(this).attr('class','active');
               })
              
		   })();

		   //鼠标半透明显示
		   (function(){
               var arr = [
			        '',
			        '用户1<br />人气1',
			        '用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			        '用户3<br />人气3',
			        '用户4<br />人气4',
			        '用户5<br />人气5',
			        '用户6<br />人气6',
			        '用户7<br />人气7',
			        '用户8<br />人气8',
			        '用户9<br />人气9',
			        '用户10<br />人气10'
		          ];


		   	   $('.hot_area li').mouseover(function(){
                  if($(this).index()==0)  return;

                  $('.hot_area li p').remove();
                  $(this).append('<p style="width:'+($(this).width()-12)+'px;height:'+($(this).height()-12)+'px;">'+arr[$(this).index()]+'</p>');
		   	   })

		    })();

	   });
