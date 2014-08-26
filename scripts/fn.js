// JavaScript Document

//declaring the GLobar variables
var sizeclass = "twelve"; 
//sizeclass gets the value of the data- title attribute of the a tag of the submenu of the sidebar i.e. the size buttons
//the data-title attribute contains the class names that are setup in css with the specific font sizes
//this affects the class of the div#show and changes the size
//the default value of sizeclass being set to twelve to match the HTML and css and to avoid undefined
var fontclass = "Aller";
//sizeclass gets the value of the innerHTML of the main buttons of sidebar i.e the font-family buttons
//This helps the function FontChange to change the class and hence the font of div#show
//the default value of sizeclass being set to Aller to match the HTML and css and to avoid undefined
var sizenum;

//an additional function scrollnav that fixes the navbar to top after the scroll is greater than 40 
//i.e after the header is no longer visible 
//this basically changes the class of navbar to navtop which has postion fixed when the scroll is greater than 40
//then back to navsimple where position is relative 
function scrollnav() {
  //x takes the scrollpostion from top of the the current window using jquery
	var x = $(window).scrollTop();
	
	if(x >97) {
		
		document.getElementById('navplaceholder').style.display="block";
		document.getElementById('navbar').className = "navtop";
		if(x >97 && x<107)
		{
			$(window).animate().scrollTop(108);
		}
		
	}
	
	else{
		document.getElementById('navplaceholder').style.display="none";
		document.getElementById("navbar").className = "navsimple";
		
		
	}
}

//this the function that triggers the font functionality 
function font()
{
	//fontNames gets all the <a> tag that are font buttons 
	var fontNames=document.querySelectorAll("a.mains");

	
	for(i=0; i<fontNames.length ; i++) {
		fontNames[i].onclick = FontChange;
		//triggering the function FontChange on click of each one which will change the class of div#show according to the font family being clicked on 
	}
	//sizenum gets all the <a> tags that are font size buttons
	 sizenum = document.querySelectorAll("a.asub");
		
		for(i=0; i<sizenum.length ; i++) {
			sizenum[i].onclick = size;
			//triggring the function FontChange on click of each one that changes the class of div#show according to the font size  button being clicked on.
		}

}

//function that handles the size 
function size() {
		//getting the data-title attribute i.e the size class of the font button being clicked on and giving it to cname
		cname = this.getAttribute('data-title');
		//changing the class of the div#show and using the global variable fontclass to have tho classes i.e the size class and font class at the sam time
		//no over-writing of class , instead concatenation takes place
		document.getElementById('show').className = cname+" "+fontclass;
		//parsing the value of cname to the global variable sizeclass so that it doesnot change back to default value and sets the size back to 12px
		sizeclass = cname;
		
		//additional: the class toggle of the size buttons
		//(adds and remove class sidesubsel which affects the background color and font color of the button)
		//using the global variable sizenum that has all the font buttons already
		for(i=0; i<sizenum.length ; i++)
		{
			//checking for all the size buttons that has data-title attribute value same as cname 
			//Example is cname is twelve then get all the buttons with data-title 'twelve'
			if( sizenum[i].getAttribute('data-title')==cname)
				{
				sizenum[i].className+= " sidesubsel";
				//applying the class to all the buttons that have are true for this condition
				}		
			else
				{
					//noThis still gets all the <a> tags in array sizenum
					
					notThis = sizenum[i];
					//this removes the class sidesubsel that do not pass the condition
					//Also helps in making use of one only function instead of calling different function each and every button 					//use of jQuery to remove a specific class
					$(notThis).removeClass('sidesubsel');
				}
		}
		
		
	}


function FontChange()
	{
		//setting the class of the fadeOut of the <p> tag in the div#name to fadeout that triggers the css fadeOut animation
		document.querySelector('#name p').className = "fadeOut";
		//parsing the inner.HTML value of the <a> tag i.e. the font-family button that is being clicked
		//this would be used to change the class of the div#show
		fontclass=this.innerHTML;
		// selected gets the all the li elements that have class="selected"
		var selected=document.querySelectorAll("li.selected");
		//changing the class to notselected
		for(i=0; i<selected.length ; i++)
			{
				selected[i].className = "notselected";
			}
		//getting the parent li of the <a> tag being clicked on and then changing its class to selected
		this.parentNode.className = "selected";
		//getting all the <p> tag in the div#fontdesc which contain the font description
		//the display is set to display:none in css for jQuery fadeIn and fadeOut to function
		var allp=document.querySelectorAll('#fontdesc p');
		//using jQuery to fadeout the all <p> tag 
		for(x=0; x<allp.length ; x++)
			{
				($(allp[x]).fadeOut(0))	//the time of fadeout being set to 0		
			}
		//fading in only that <p> tag that has id same as the innerHTML of font-family button being clicked 
		$('#'+this.innerHTML).fadeIn();
		//parsing the innerHTMl value of the button to the <p> tag in div#name
		document.querySelector('#name p').innerHTML = this.innerHTML;
		//setting the class of the fadeIn of the <p> tag in the div#name to fadeout that triggers the css fadeIn animation
		document.querySelector('#name p').className = "fadeIn";
		//giving multiiple classes to div#show using the global variables sizeclass and fontclass
		//sizeclass got its value from the function size()
		//fontclass ot its value at the beginning of this function
		//concatenation is being used to give space between classes, making it compatible with css and HTML
		document.getElementById('show').className = sizeclass+" "+fontclass;
	
	}
	
	
window.onload = font;
window.onscroll = scrollnav;	
