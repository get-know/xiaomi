		
		//swiper轮播图
		+function(){
			var mySwiper = new Swiper('.swiper-container', {
			autoplay: true,//可选选项，自动滑动
			disableOnInteraction: false,
			effect : 'fade',
			loop:true,
			speed:1000,
			clickable :true,
			pagination :{
    		el: '.swiper-pagination',
    		clickable :true,
			autoplayDisableOnInteraction : false,  
			
    		},
    
		    // 如果需要前进后退按钮
		    navigation: {
			      nextEl: '.swiper-button-next',
			      prevEl: '.swiper-button-prev',
		    	},
			})			
		}();		
		

		//热门选项卡
		+function(){
			let jdSpan = document.querySelectorAll('#domestic-appliance .t-right span'),
				jdRig = document.querySelectorAll('#domestic-appliance .con-right'),
				
				znSpan = document.querySelectorAll('#intelligent .t-right span'),
				znRig = document.querySelectorAll('#intelligent .con-right'),
				
				dpSpan = document.querySelectorAll('#collocation .t-right span'),
				dpRig = document.querySelectorAll('#collocation .con-right'),
				
				pjSpan = document.querySelectorAll('#parts .t-right span'),
				pjRig = document.querySelectorAll('#parts .con-right'),
				
				zbSpan = document.querySelectorAll('#periphery .t-right span'),
				zbRig = document.querySelectorAll('#periphery .con-right'),
							
				index = 0;
				
				change(jdSpan,jdRig,index);
				change(znSpan,znRig,index);
				change(dpSpan,dpRig,index);
				change(pjSpan,pjRig,index);
				change(zbSpan,zbRig,index);
						
			function change(aSpan,aRight,index){
				for(var i = 0;i<aSpan.length;i++){
					aSpan[i].index = i;
					aSpan[i].onmouseenter = function(){
						aSpan[index].className = '';
						aRight[index].className = 'con-right ';
						index = this.index;
						aSpan[index].classList.add('on');
						aRight[index].classList.add('on');
					}
				}										
			}
		}();	
		
		//导航下拉菜单选项卡
		+function(){
			var aLi = document.querySelectorAll('nav .con ul li'),
				aDiv = document.querySelectorAll('.l-innerWidth'),
				oUl = document.querySelector('nav .con ul'),
				oLiChild = document.querySelector('.li-child'),
				len = aLi.length - 3,
				index = 0;
			// console.log(aDiv.length);
			for(var i = 0;i < len;i++){
				aLi[i].index = i;
				aLi[i].onmouseover = function(){
					console.log(this.index);
					oLiChild.classList.add('on');
					aDiv[index].className = 'l-innerWidth';
					index = this.index;					
					aDiv[index].className = 'l-innerWidth on';
				}
				oUl.onmouseleave = function(){
					oLiChild.className = 'li-child';
				}
			}		
		}();
		
		//input框
		+function(){
			let oInp = document.querySelector('.search input'),
				oTips = document.querySelector('.input-con');				
			oInp.onfocus = function(){
				oTips.className += ' on';
			}
			oInp.onblur = function(){
				if(!oInp.value){
					oTips.className = 'input-con';
				}					
			}
		}();


		//内容选项卡
		!function(){
			var aCon = document.querySelectorAll('.books .bottom'),
				aSpan = document.querySelectorAll('.books .change span'),
				oNext = document.querySelector('.books .next'),
				oPrev = document.querySelector('.books .prev'),
				oA = document.querySelector('.books >a'),
				index = 0,
				speed = 0,
				count = 0;

			var aCon1 = document.querySelectorAll('.mi-ui .bottom'),
			aSpan1 = document.querySelectorAll('.mi-ui .change span'),
			oNext1 = document.querySelector('.mi-ui .next'),
			oPrev1 = document.querySelector('.mi-ui .prev'),
			oA1 = document.querySelector('.mi-ui >a'),
			index = 0,
			speed = 0,
			count = 0;

			var aCon2 = document.querySelectorAll('.game .bottom'),
			aSpan2 = document.querySelectorAll('.game .change span'),
			oNext2 = document.querySelector('.game .next'),
			oPrev2 = document.querySelector('.game .prev'),
			oA2 = document.querySelector('.game >a'),
			index2 = 0,
			speed2 = 0,
			count2 = 0;

			var aCon3 = document.querySelectorAll('.application .bottom'),
			aSpan3 = document.querySelectorAll('.application .change span'),
			oNext3 = document.querySelector('.application .next'),
			oPrev3 = document.querySelector('.application .prev'),
			oA3 = document.querySelector('.application >a'),
			index = 0,
			speed = 0,
			count = 0;


			leftRightBanner(aCon,aSpan,oNext,oPrev,oA,index,speed,count);
			leftRightBanner(aCon1,aSpan1,oNext1,oPrev1,oA1,index,speed,count);
			leftRightBanner(aCon2,aSpan2,oNext2,oPrev2,oA2,index,speed,count);
			leftRightBanner(aCon3,aSpan3,oNext3,oPrev3,oA3,index,speed,count);


			function leftRightBanner(aCon,aSpan,oNext,oPrev,oA,index,speed,count){
				//轮播点移入
				for(let i = 0;i < aSpan.length;i++){
					aSpan[i].index = i;
					aSpan[i].onclick = function(){
						aSpan[count].classList.remove('on');
						index = this.index;
						aSpan[index].classList.add('on');
						oA.style.marginLeft =  - index * aCon[0].offsetWidth + 'px';
						count = this.index;
						speed = this.index *(aCon[0].offsetWidth);
					console.log(speed);
	
					}
				}
				//右边按钮点击
				oNext.onclick = function(){
					if(oA.style.marginLeft == -aCon[0].offsetWidth*(aCon.length-1)+'px' ){
						return;
					} 
					for(let i=0;i<aSpan.length;i++){	
						aSpan[i].classList.remove('on');
					}
					speed = speed + aCon[0].offsetWidth;
					oA.style.marginLeft = -speed  + 'px';
					aSpan[++count].classList.add('on');
					
					console.log(speed);
				}
				//左边按钮点击
				oPrev.onclick = function(){
					
					if(oA.style.marginLeft == -0 + 'px' || oA.style.marginLeft =='' && count == 0){
						return;
					}
					for(let i=0;i<aSpan.length;i++){
						aSpan[i].classList.remove('on');
					}
					speed = speed-aCon[0].offsetWidth;	
					oA.style.marginLeft = -speed + 'px';
					
					aSpan[--count].classList.add('on');
					console.log(speed);
	
				}
			}
			
			
			

		}();


		//闪购
		!function(){
			let aLi = document.querySelectorAll('.wrap > ul > li'),
				oUl = document.querySelector('.wrap > ul'),
				width = document.querySelector('.wrap > ul >li').offsetWidth*aLi.length/3,
				oPrev =document.querySelector('.star .prev'),
				oNext =document.querySelector('.star .next');
				//num = 0;
				console.log(width);
			oNext.onclick = function(){
				// num++;
				// if(num == 3 ){
				// 	num = 2;
				// 	return;
				// }
				this.classList.add('off');
				oPrev.classList.remove('off');
				oUl.style.transform = 'translateX('+(-1240)+'px)';
			}
			oPrev.onclick = function(){
				// num--;
				// if(num < 0){
				// 	num = 0;
				// }
				this.classList.add('off');
				oNext.classList.remove('off');
				oUl.style.transform = 'translateX('+(-0)+'px)';
			}
		}();
