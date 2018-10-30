var projects = [];

// Load all 9 pages
for (var i=1; i<=9; i++) {
  $.get("http://git.pedia.vn/?page=2", function(data){
    var elements = $(data).find(".projects-list.content-list .project-full-name");
    var content = elements.text().replace(/\n/g, '.');

    var prs = content.split('....');

    for (var index=0; index<prs.length; index++) {
      // Separate namespace and project
      var it = prs[index];
      var pr = it.split('./...');

      // Remove dots
      var namespace = pr[0].replace(/\.*/g, '');
      var project = pr[1].replace(/\.*/g, '');

      // Push to projects
      projects.push([namespace, project]);
    }

    console.log("Done!")
  });
}

console.log(projects);
