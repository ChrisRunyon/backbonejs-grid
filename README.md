# backbonejs-grid

#### Summary: 
This versatile Backbonejs Grid can be used to display a grid of elements and list of elements or pages of elements.

#### Dependencies:
You will need requirejs, backbonejs, underscorejs, and jQuery to use this module.  

#### Recommended reading:
Everything here can be found in the great documentation provided. 

[](http://)
	[http://backbonejs.org](http://backbonejs.org)  
[](http://)
	[http://requirejs.org](http://requirejs.org)  
[](http://)	
	[http://underscorejs.org](http://underscorejs.org)  
[](http://)
	[http://api.jquery.com](http://api.jquery.com)


#### Usage: 

Instantiate gridBase.js and override the gridElements variable to the number of elements you want to appear in your gridPage. Use grid.css to resize the .gridwrapper, .gridcontainer, and .gridpage. 

Use .gridbutton, .item-imagewrapper, .item-image to resize the gridButton. 

Any gridButton elements that don't fit within the properties set in grid.css will automatically generate another gridPage.  

#### Benchmark: 

	Generates 2108 DOM elements < 1000ms (average).
[](http://)
	[http://jsperf.plasmicmedia.com](http://jsperf.plasmicmedia.com)


