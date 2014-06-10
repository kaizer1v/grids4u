// given a number w, return a number x such that it is the closest multiple of another given number n
// w = total width of the container - can be auto detected
// n = number of columns needed
// x = return value as width of each column

$("#txt_container_width").val($("body").innerWidth());
totalGutter = 20;
function getSingleColumnWidth(n, w) {
	w = typeof w !== 'undefined' ? w : $("body").innerWidth();
	w = Math.round(w)		// remove decimals
	n = Math.round(n)		// remove decimals
	x = Math.floor(w/n);	// gives the quotient of w/n (removing remainder) i.e. the closest multiple of n

	// return x;
	
/* Main functionality of the function ends right here */

	$(".col-container").css("width", w+"px");
	$(".col-container").html("");
	$("#css").html("");
	
	for(j = 1; j <= n; j++) {
	
		for(i = 1; i <= n/j; i++) {
			$(".col-container").append("\
				<div class='col-"+j+" cols'><p>.col-"+ j +" { width: "+ ((j*x) - totalGutter) +"px; }</p></div>\
			");
			
		}
	}
	
	$("#css").append("\
		<p>.col-container {\
			margin: 0 auto;\
			width: "+w+"px;\
		 }</p>\
		 <p>.cols {\
			display: block;\
			float: left;\
			background: red;\
			color: #000;\
			padding: 10px 0;\
			margin: 10px 0;\
		}</p>\
	")
	
	for(i = 1; i <= n; i++) {
		$("#css").append("\
			<p>.col-"+i+" { width: "+((i*x) - totalGutter)+"px; }</p>\
		");
	}
	
	$(".cols").css("margin-right", 10+"px");
	$(".cols").css("margin-left", 10+"px");
	
	// $(".col-1").css("width", x - totalGutter+"px");
	
	for(i = 1; i <= n; i++) {
		$(".col-"+i).css("width", (i*x) - totalGutter+"px");
	}
}





// by restricting the column width, return how many columns (n) can actually fit in the given width (w)
function getTotalColumns(x, w) {
	w = typeof w !== 'undefined' ? w : $("body").innerWidth();
	w = Math.round(w)		// remove decimals
	x = Math.round(x);
	n = Math.floor(w/x);

	// return n;

/* Main functionality of the function ends right here */

	$(".col-container").css("width", w+"px");

	for(i = 1; i <= n; i++) {
		$(".col-container").append("\
			<div class='cols'>Col #"+ i +"</div>\
		");
	}
	
	$(".cols").css("width", x - 20+"px");
	$(".cols").css("margin-right", 10+"px");
	$(".cols").css("margin-left", 10+"px");
}

// getSingleColumnWidth(12, 1200);
// getTotalColumns(80);




getSingleColumnWidth($("#txt_total_col").val(), $("#txt_container_width").val());
$("#txt_total_col").on("change", function() {
	// first get the container width
	var containerWidth = ($("#txt_container_width").val() !== "") ? parseInt($("#txt_container_width").val()) : $("body").innerWidth();
	var colWidth = parseInt($(this).val());
	getSingleColumnWidth(colWidth, containerWidth)
})


$("#txt_container_width").on("change", function() {
	var colWidth = ($("#txt_total_col").val() !== "") ? parseInt($("#txt_total_col").val()) : $("body").innerWidth();
	var containerWidth = parseInt($(this).val());
	getSingleColumnWidth(colWidth, containerWidth)
})
