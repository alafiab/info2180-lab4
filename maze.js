window.onload = function(){
	//Exercise 1
	var a = document.getElementById("boundary1");
	a.onmouseover = function()
		{
			this.setAttribute("class","boundary youlose");
		}

	//Excercise 2
	var boundaries = document.querySelectorAll(".boundary"); 
	var check = false;
			for(var i=0; i < boundaries.length; i++)
			{
				boundaries[i].onmouseover = function()
				{
					this.setAttribute("class", "boundary youlose");
					check = true;
				}

			}	 
	//Exercise 3
	var c = document.getElementById("end");
		c.onmouseover = function()
		{
			var e = document.getElementById("status");
				{
					if (check == false)
						{
							e.innerHTML="You Win!";
						}
					else
						{
							e.innerHTML="You Lose!";
						}
				}
		}
	//Exercise 4
	var d = document.getElementById("start");
		d.onclick = function()
		{
			for(var r = 0; r < boundaries.length; r++)
			{
				boundaries[r].setAttribute("class","boundary");
			}

		}
	//Exercise 6
	
}