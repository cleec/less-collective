
// Loads Behance Feed

var username01 = "calebchesnut",
    username02 = "stephenpolitte",
    username03 = "joeboyle";
			
$(document).ready(function() {
	// Set behance api key
	behanceAPI.setKey(behancekey);
	
	// Get projects
	behanceAPI.getProjects(username01, function(projectlist) {
		var projectHTML = "";
		for(var i=0; i<projectlist.length; i++) {
			var project = projectlist[i];
	  projectHTML += "<li><a href='#' onclick='loadProject(" + project.id + ")'><img src='" + project.covers[202] + "'></a>" + 
	  "<a href='#' onclick='loadProject(" + project.id + ")'>" + project.name + "</a></li>";
	}
	$(".projects").html(projectHTML);
	});
});


/*

<script id="entry-template" type="text/x-handlebars-template">
  template content
</script>


var source   = $("#entry-template").html();
var template = Handlebars.compile(source);


var context = {title: "My New Post", body: "This is my first post!"}
var html    = template(context);


<div class="entry">
  <h1>My New Post</h1>
  <div class="body">
    This is my first post!
  </div>
</div>


project-id : "project.id" 
*/