var mouse = {x: 0, y: 0};

document.addEventListener('mousemove', function(e){ 
    mouse.x = e.clientX || e.pageX; 
    mouse.y = e.clientY || e.pageY 
}, false);


var Tell = {
	width: 400,
	height: $(".tell-dialog").height(),
	active: false,
	custom_location: false
};

Tell.dismiss = function() {
	$(".tell-element").empty();
	$(".tell-element").remove();
	Tell.active = false;
	Tell.custom_location = false;
}

Tell.center = function() {
	document.querySelector(".tell-dialog").style.left = (($(window).width() / 2) - (Tell.width / 2)) + "px";
	document.querySelector(".tell-dialog").style.top = (($(window).height() / 2) - (Tell.height / 2)) + "px";
}

Tell.reposition = function(x, y) {	
	document.querySelector(".tell-dialog").style.left = (x - Tell.width/2) + "px";
	document.querySelector(".tell-dialog").style.top = (y - Tell.height/2) + "px";
}


/*
*	Generic alerts
*	
*	@params:
*		message: Message to display
*/

Tell.alert = function(message) {
	Tell.dismiss();
	Tell.active = true;
	$("body").append("<div class='tell-element tell-overlay'></div>");
	
	var dialog = '<div class="tell-element tell-dialog" draggable="true" ondragstart="drag(event)">' +
					'<div class="tell-element tell-titlebar">' + 
						'<div class="tell-title">Alert</div>' + 
					'</div>' + 
					'<div class="tell-element tell-body">' + 
						'<div class="tell-element tell-content">' + 
							message +
							'<br><br><button class="tell-confirm-button">Okay</button>' +
						'</div>' +
					'</div>' + 
				'</div>';
				
	$("body").append(dialog);
	Tell.height = $(".tell-dialog").height();
	Tell.center();
	
	document.querySelector(".tell-confirm-button").addEventListener('click', function() {
		Tell.dismiss();
	}, false);
};


/*
*	Confirm a choice
*	
*	@params:
*		message: Message to display
*/

Tell.confirm = function(message) {
	Tell.dismiss();
	Tell.active = true;
	$("body").append("<div class='tell-element tell-overlay'></div>");
	
	var dialog = '<div class="tell-element tell-dialog" draggable="true" ondragstart="drag(event)">' +
					'<div class="tell-element tell-titlebar">' + 
						'<div class="tell-title">Confirm</div>' + 
					'</div>' + 
					'<div class="tell-element tell-body">' + 
						'<div class="tell-element tell-content">' + 
							message +
							'<br><br><button class="tell-confirm-button">Okay</button> <button class="tell-confirm-button">No</button>' +
						'</div>' +
					'</div>' + 
				'</div>';
				
	$("body").append(dialog);
	Tell.height = $(".tell-dialog").height();
	Tell.center();
	
	document.querySelector(".tell-confirm-button").addEventListener('click', function() {
		Tell.dismiss();
	}, false);
};



function drag(e) {
	Tell.custom_location = true;
	var img = document.createElement("img");
	img.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
	e.dataTransfer.setDragImage(img, 0, 0);
}


window.onresize = function(event) {
    if(Tell.active && !Tell.custom_location)
		Tell.center();
};

$(document).on('click', '.tell-overlay', function() {
	Tell.dismiss();
});

document.ondragover = function() {
    Tell.reposition(window.event.pageX, window.event.pageY);
}