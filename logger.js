var
	write = require('fs').appendFile
;

/*
Returns the filename to be used for the logger
Log file changes every day, as the follows:
	- 201371.log
	- 201372.log
	And so on, whenever a new day arrives
*/
function getDate() {
	var d = new Date();
	return d.getFullYear() + '' + (d.getMonth()+1) + '' + d.getDate() + '.log';
}

exports.log = function(str) {
	write(getDate(), new Date() + ' - ' + str + '\r\n', function(err) {
		if(err) {
			console.log("An error occurred while trying to write the log: " + err);
		}
	});
};