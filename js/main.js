
// Loads Behance Feed

var username01 = "calebchesnut",
    username02 = "stephenpolitte",
    username03 = "joeboyle";
			
/*
function loadProject(projectID) {
	behanceAPI.getProjectDetails(projectID, function(loadModules) {
    var moduleHTML = "";
			
    var moduleTitle = "";
    moduleTitle += "<h1>" + loadModules.name + "</h1>";
    $(".module-title").html(moduleTitle);
			
    var moduleDescription = "";
    moduleDescription += "<p>" + loadModules.description + "</p>";
    $(".module-description").html(moduleDescription);
			
    for(var i=0; i<loadModules.modules.length; i++) {
	    if(loadModules.modules[i].src!=undefined) {
	        moduleHTML += "<p><img src='" + loadModules.modules[i].src + "'></p>";
	    }
	  }
	  
	$(".modules").html(moduleHTML);
	});
}
*/
			
$(document).ready(function() {
	// Set behance api key
	behanceAPI.setKey(behancekey);
	
	// Get projects
	behanceAPI.getProjects(username01, function(projectlist) {
		var projectHTML = "";
		for(var i=0; i<projectlist.length; i++) {
			var project = projectlist[i];
	  projectHTML += "<li><a href='#' onclick='loadProject(" + project.id + ")'>" + project.name + "</a></li>";
	  // if you would like to see project thumbnails use this:
	   projectHTML += "<a href='#' onclick='loadProject(" + project.id + ")'><img src='" + project.covers[202] + "'></a>";
	}
	$(".projects").html(projectHTML);
	});
	
	behanceAPI.getProjects(username01, function(projectID){})
	
});
