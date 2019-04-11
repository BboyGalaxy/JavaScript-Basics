

var skills = ["aweasome","intelligent","handsome"];
//that is an object
var bio = {
	"name" : "Adelson Diaz",
	"age"  : 22,
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "829-763-9602",
		"facebook" : "Adelson Diaz Gil",
		"location" : "Santiago"
	},
	"skills" : ["aweasomeness","intelligent","handsome"],
	"bioPic" : "images/fry.jpg"

}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts.mobile);
$("#main").append(bio.location);
$("#main").append(bio.skills[0]);
$("#main").append(bio.bioPic);

var work = {};
work.position = "Web Developer";
work.employer = "Intellisys";
work.years = "0.1";*/

var education = {
	"schools" : [
	{"name": "UTESA",
	"years" : "2014-NOW",
	"city" : "Santiago de los caballeros",
	"location" : "Av. Circunvalación & Av Salvador Estrella Sadhalá, Santiago De Los Caballeros 51000"
	}
	]
};
/*education["name"] = "UTESA";
education["years"] = "2014-NOW";
education["city"] = "Santiago";*/

/*$("#main").append(work["position"]);
$("#main").append(education.name);*/

//--------------------------------------------
var work = {
	"jobs" : [{
		"title" : "Web Developer",
		"employer" : "Intellisys",
		"dates" : "2019-Future",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
		"location" : "Calle H, Santiago de los Caballeros 51000"
	},
	{
		"title" : "Production Manager",
		"employer" : "SD D&W",
		"dates" : "2014-2019",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
		"location" : "Reparto Villa Jagua, Santiago De Los Caballeros 51000"
	}]
}

var projects = {
	"projects" : [
		{
			"title" : "Project 1",
			"dates" : "2019",
			"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			"ProjectPics" : ["images/project.jpg","images/fry.jpg"]
		}
	]
}
//------------------------------------------

	HTMLbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(HTMLbioPic);


	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
	}
function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedWorkTittle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTittle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		
	}
}

displayWork();

$(document).click(function(loc) {
  // your code goes here
  var x = loc.screenX;
  var y = loc.screenY;
  logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName(name){	
	var name = name.split(" ");
	console.log(name);
	var newName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase() + " " +name[1].toUpperCase();
	return newName;
}

projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		//alert(formattedprojectTitle);
		$(".project-entry:last").append(formattedprojectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if(projects.projects[project].ProjectPics.length > 0){
			for(image in projects.projects[project].ProjectPics){
				var formattedProjectPics = HTMLprojectImage.replace("%data%",projects.projects[project].ProjectPics[image]);
				$(".project-entry:last").append(formattedProjectPics);
			}
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);


