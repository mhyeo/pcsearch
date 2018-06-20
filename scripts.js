function printResults(resTable, res){
	resTable.empty();
	for(var i = 0; i < res.length; i++){
		var podcast = res[i];
		var pcLink = "<a href=\"" + podcast.url + "\">" + podcast.title + "</a>"
		var desc = podcast.description
		var subNum = podcast.subscribers
		var subButton = "<button onclick=\"addPodcast('mySubs, " + podcast + "')\">Subscribe</button>"
		var fullRow = "<tr><td>" + pcLink + "</td><td>" + desc + "</td><td>" + "</td><td>" + subNum + "</td><td>" + subButton + "</td></tr>"
		resTable.append(fullRow)
	}
}

function addPodcast(subs, podcast){
	subs += podcast;
	console.log(subs);
}

function getTop50(){
	var resTable = $("#results");
	$.ajax("https://gpodder.net/toplist/50.json")
		.then(function(res){
			printResults(resTable, res);
		})
}

function search(){
	var resTable = $("#results");
	var query = $("#query").val();
	$.ajax("https://gpodder.net/search.json?q=" + query)
		.then(function(res){
			printResults(resTable, res);
		})	
}
