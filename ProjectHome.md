This script allows you to display a banner at the top of your page which asks the user to click an acceptance if they wish to hide the message. The message warns that the site may use Cookies and asks for an OK from the user.

Add with this line
```
<script src='http://ico-cookie-warning.googlecode.com/svn/trunk/ico_cookies.js'></script>
```
or to override defaults use this:-
```
<script>
		
  // Insert your privacy link here e.g. /privacy.html
  var privacyLink = '';
						
  // optional postBack function 
  var postBack = null
			
  // custom error message when clicking continue without ticking the box
  var errorMessage = '';
			
  // write out the include
  document.write("<script src='http://ico-cookie-warning.googlecode.com/svn/trunk/ico_cookies.js'><\/script>");
	
</script>
```

Obviously it only works if JavaScript is enabled!