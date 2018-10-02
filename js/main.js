$(document).ready(function(){
	$(".ham").click(function(){
		$(this).toggleClass("is-active");
		$(this).siblings().delay(100).slideToggle();
	});
	var html="";
	for (var i = 0; i < data.length; i++) {
		html += "<div class='col-lg-3 col-md-4 col-xs-6'><div class='icon'>";
		html += "<i class='icon-" + data[i].icon + "'></i>";
		html += "</div><div class='skill'>";
		html += "<span class='percent'>" + data[i].percent + "%</span>";
		html += "<span class='name'>" + data[i].app + "</span>";
		html += "<span class='bar width" + data[i].percent + "'></span>";
		html += "</div></div>";
	};
	$(".skill-set").html(html);
	// console.log(data.length);

	if ($("section").hasClass("work")) {
		var workCt="";
		for (var j = 0; j < work.length; j++) {
			workCt += "<div class='col-md-4 col-xs-6 grid'>";
			workCt += "<div class='front'>";
			workCt += "<img src='img/work-" + work[j].num + "@3x.png' alt='" + work[j].alt + "'>";
			workCt += "<div class='text'>";
			workCt += "<div class='h4'>" + work[j].title + "</div>";
			workCt += "<ul>" + work[j].detail + "</ul>";
			workCt += "<a id='" + work[j].num + "' target='_blank' href='" + work[j].link + "/' class='btn'>前往頁面</a>";
			workCt += "</div></div></div>";
		};
		$(".grid-block").html(workCt);
		// console.log(work.length);
	}
});
