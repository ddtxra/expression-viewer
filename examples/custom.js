colors={
	positive:"orange",
	high:"green",
	medium:"purple",
	low:"brown",
	negative:"black",
	container:"grey"
	};
var viewer = require('expression-viewer');
var next = new viewer({el: rootDiv,protein:'NX_P01308',colors:colors});

document.getElementById("button").onclick=function(e){
	console.log(e);
	 next.init(document.getElementById("changer").value);
	}
