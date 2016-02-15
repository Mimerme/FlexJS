
const readline = require('readline');
var readlineSync = require('readline-sync');
var fs = require('fs');

const rl = readline.createInterface(
  input: process.stdin,
  output: process.stdout
});

var flexLineCount = 0;

var flexCSSComplete = [];
var flexHTMLComplete = [];

//Writes input data to disk
function writeToDisk(filename, data){
	var date = "";
	for (var oh = 0; oh < data.length; oh++) {
		
    		date += data[oh];
	}
		console.log(date);
	
	fs.writeFile(filename, date, function(err) {
    	if(err) {
        	return console.log(err);
    	}

    	console.log("The file was saved!");
	}); 
}


var prompt = function(){
	console.log("NOTE: The input will not appear");
	var flexLineCount = readlineSync.questionInt('How many flex lines do you want?');
	
		console.log("Creating " + flexLineCount + " lines");		
		for (var i = 0; i < flexLineCount; i++){
			var flexItem = ".flex-item-" + i;
			
			var flexLine = ".flex-container-" + i + " {display: -webkit-flex;display: flex;width: 100%;height: ";

			//Template for each line
			var flexHTMLBuffer =  '<div class="flex-container-' + i + '">'
			flexHTMLComplete.push(flexHTMLBuffer);
		

			//Depends on how many items are needed
			var flexHTMLItemStichedBuffer = "";

			var lineHeight = readlineSync.questionInt('Height of flex line ' + i + ' ');
				flexLine = flexLine + lineHeight + "px;background-color: lightgrey;}";
			

			var width = readlineSync.questionInt('Width of each flex item on line ' + i + ' ');
				 flexItem = flexItem +  " {width: " + width  + "px;height: ";
				 var height = readlineSync.questionInt('Height of each flex item on line ' + i + ' ');
				 	flexItem = flexItem + height + "px;";
					var itemCount = readlineSync.questionInt('Number of boxes per line' + ' ');
						for(var kk = 0; kk < itemCount; kk++){

							//Template for the items
							var flexHTMLItemBuffer =  '<div class="flex-item-' + i + '">'
							flexHTMLComplete.push(flexHTMLItemBuffer + "</div>");			
						}
							flexHTMLComplete.push("</div>");								
						
				
				
			
			//Add these lines to complete CSS buffer for writting after the loop
			flexCSSComplete.push(flexItem + "}");
			flexCSSComplete.push(flexLine);


		}
  		rl.close();
		writeToDisk("test.css",flexCSSComplete);		
		writeToDisk("test.html",flexHTMLComplete);

}

prompt();
