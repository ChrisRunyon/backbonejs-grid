# backbonejs-grid

#### Summary: 
Don't over-engineer your app with code bloat from a Javascript framework. 
	 
This versatile and responsive BackboneJS Grid can be used to display a grid of elements and list of elements or pages of elements.

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

Instantiate gridBase.js and override the elements property in the options to a number of items you want to appear in your gridPage. Use grid.css to resize the .gridwrapper, .gridcontainer, and .gridpage. 

Use .gridbutton, .item-imagewrapper, .item-image to resize the gridButton. 

Any gridButton elements that don't fit within the properties set in grid.css will automatically generate another gridPage.  

#### Grid: 
``` javascript
	createGridContainer: function (data) {
        var options = {
            data: data.result,
            elements: 100
        };
        this.gridcontainer = new GridBase(options);
        var container = this.$el.find(".galleryContainer");
        container.append(this.gridcontainer.render().el);
    },
``` 

#### CSS:
``` css
	.gridwrapper {
	  	height: 1450px;
	  	overflow: hidden;
	  	position: relative;
	  	width: 950px
	}

	.gridcontainer {
	  	margin-left: 0;
	  	height: 1450px;
	  	width: 10000px;
	}

	.gridpagecontainer {
	  	display: block;
	}

	.gridpage {
	  	float: left;
	  	width: 950px;
	  	height: 1450px;
	}

	.gridbutton {
	  	float: left;
	  	width: 12px;
	 	height: 12px;
	  	margin: 5px 5px;
	}

	.item-imagewrapper {
	  	width: 12px;
	  	height: 13px;
	}

	.item-image {
	  	position: relative;
	  	top: -2px;
	  	left: 1px;
	}
```

#### Benchmark: 

	Generates 2108 DOM elements < 1000ms (average).

#### Example: 
See the grid in action here.

[](http://)
	[http://aplacefor3d.com/models](http://aplacefor3d.com/models)  
[](http://)
	[http://modernjs.aplacefor3d.com](http://modernjs.aplacefor3d.com)  

#### Note: 
For people who didn't know, it's because you don't know me. So please stop speaking for me or pretending you know who I am. Stalking is not a cute word. https://en.wikipedia.org/wiki/Stalking Stalking is not a way to get to know me. Don't be that person. Any questions or comments send them to chris@plasmicmedia.com. No politics. This is not an endorsement nor a proposal and is solely intended for research. Remember this is public so it's free and shouldn't reflect work you know nothing about, such as private or for business projects. Many thanks to those who are with me and rise up everyday.

#### Free Software:
Please consider donating in order to continue work for free software.

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVACW559Q5Z92)

If you would like me to continue posting solutions to github then donate. This is not meant to imply that I work for free.

Thanks
