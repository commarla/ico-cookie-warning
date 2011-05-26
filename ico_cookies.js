// Created 26/5/2011 by Jason Kneen http://www.jasonified.com
// Original Banner HTML code lifted from ico.gov.uk

	var cookieName = 'ICO_auth';

	if (document.cookie.indexOf(cookieName) == -1) {
		function check(){
			var checkBox = document.getElementById('chk_ico_cookie');
			if (checkBox.checked) {
				
				if (!postBack == null){
						
					document.getElementById('ico_banner').style.display = 'none';
					postBack();
				}
				else
				{
			
					document.cookie =cookieName + '=1';
					document.getElementById('ico_banner').style.display = 'none';
					
					
				}
					
				}
				else
				{
					alert(errorMessage || 'Please select that you accept Cookies to remove this message');
				}
				
		}

	if (navigator.cookieEnabled) {
	
		var sPrivacyText = 'To find out more about cookies on this website and how to delete cookies, see our <a href="' + privacyLink +'">privacy notice</a>.'
		
		if (!privacyLink){
			sPrivacyText = '';
		}
		
		var sBannerStyle = 'style="font-Family:tahoma;font-size:12px;float: left;border: solid 1px #003768;background: white;margin: 0 8px 0 8px;font-weight: bold;color: #003768;padding: 4px 6px 4px 6px;"'	
			
		var sBanner = '<div id="ico_banner" ' + sBannerStyle + '><strong>On 26 May 2011, the rules about cookies on websites changed. This site uses cookies. One of the cookies we use is essential for parts of the site to operate and has already been set. You may delete and block all cookies from this site, but parts of the site will not work.' + sPrivacyText + ' </strong><br /><br />'
			
		var sForm = '<input id="chk_ico_cookie" type="checkbox" name="chk_ico_cookie" style="float: left;padding-top: 2px;margin: 0 8px 0 0;line-height: 1.1em;" /> <label for="chk_ico_cookie" style="float: left;padding-top: 2px;margin: 0 8px 0 0;line-height: 1.1em;">I accept cookies from this site.</label> <input type="submit" name="btn_ico_Cookie" value="Continue" id="btnCookie" onClick="javascript:check()" style="float: left;clear: none;padding: 2px 5px;margin-top: -2px;background-color: #FCFCFB;border: 1px solid #003C74 !important;color: black;" /></div>'
		

		document.write(sBanner + sForm)
	
	}
}



		
		