
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
	  "<a class='project-name'  href='#' onclick='loadProject(" + project.id + ")'>" + project.name + "</a></li>";
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