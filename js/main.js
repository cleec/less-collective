
// Loads Behance Feed			
			
$(document).ready(function() {

	var username01 = "calebchesnut",
    username02 = "stephenpolitte",
    username03 = "joeboyle";
			
	var username = ["calebchesnut", "stephenpolitte", "joeboyle"];	

	// Set behance api key
	behanceAPI.setKey(behancekey);
	
	// Get projects
	behanceAPI.getProjects(username01, function(projectlist) {
		var projectHTML = "";
		for(var i=0; i<projectlist.length; i++) {
			var project = projectlist[i];
	  projectHTML += "<li><a href='#' onclick='loadProject(" + project.id + ")'><img src='" + project.covers[202] + "'></a>" + 
	  "<div class='project-name'  href='#' onclick='loadProject(" + project.id + ")'><a href='#' ><img src='" + project.owners[0].images[50] + "'><span class='owner'>" + project.owners[0].first_name + "</span><span class='field'>" + project.fields[0] + "</span></a></div></li>";
		}
	
	$(".projects").html(projectHTML);
	});
	

});

		
// Trying out Skrollr

( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );


// Nav

$("#explore-nav").hover(function(){
	$('ul', this).stop().toggle("drop");
});

