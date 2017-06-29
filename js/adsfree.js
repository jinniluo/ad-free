
;
$(function() {

	var clearAd = {
		//specify the ads from the host that you don't wanna remove
		checkUrl: function() {
			var Checkflag = 0,
				url = window.location.href;

			//add ads that you dont wanna delete
			var notDel = [
//				"www.baidu.com",
				"taobao.com",
				"tmall.com"
//				"jd.com"
			];

			//if it matches then commit
			for (var i = 0; i < notDel.length; i++) {
				var reg = new RegExp(notDel[i], "g");

				if (reg.test(url)) {
					console.log('This page does not clear ads.');
					break;
				} else {
					if (i == notDel.length - 1) {
						Checkflag = 1;
					}
				}
			}
			
			if (Checkflag == 1) {
				this.clear();
				this.findSomeAdPossible();
			}
		},
		clear: function() {
			console.log('Clear Start');
			//specify some commonly used ads id
			var ad_id_name = [
				"cproIframe2001holder",
				"cproIframe2002holder",
				"cproIframe2003holder",
				"cproIframe2004holder",
				"cproIframe2005holder",
				"cproIframe2006holder",
				"cproIframe2007holder",
				"cproIframe2008holder",
				"cproIframe2009holder",
				"id_300x250_banner_top",
				"ads",
				"google_image_div",
				"mx_cs_71603_1261456",
				"AC_TR86_71603",
				"cproIframe_u2060917_1",
				"content_right",
				"left-promotion",
				"top_ads"
			];

			//ads class name
			var ad_css_name = [
				"cproIframe_u410704_3",
				"img_ad",
				"hover_btn"
			];

			for (var i = 0; i < ad_id_name.length; i++) {
				//use .remove() from jquery to get rid of the selected div
				$('#' + ad_id_name[i]).remove();
			}

			for (var i = 0; i < ad_css_name.length; i++) {
				$('.' + ad_css_name[i]).remove();
			}
		},
        
		//an algorithm to find some ads if not specified 
		findSomeAdPossible: function() {
			var sap = $('div iframe'),
				ad_img = $('div script').parent().find('img,embed'),
				float_img = $('div object').parent().find('img,embed');

			this.arrayDel(sap, 360, 200);
			this.arrayDel(ad_img, 350, 150);
			this.arrayDel(float_img, 350, 150);
		},
        
		arrayDel: function(arr, conWidth, conHeight) {
			var len = arr.length;

			for (var i = 0; i < len; i++) {
				var self = arr.eq(i);

				if (self.width() <= conWidth || self.height() <= conHeight) {
					self.remove();
				}

			}
		},
		init: function() {
			this.checkUrl();
		}
        
        
	}

	$(document).ready(function() {
		clearAd.init();
        console.log("run");
		//clear the ads again if reloaded 
		setTimeout(function() {
			clearAd.init();
		}, 4000)
	});
})