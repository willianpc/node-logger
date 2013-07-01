var
	write = require('fs').appendFile,
	doLog = require('util').log

;

function getDate() {
	var d = new Date();
	return d.getFullYear() + '' + (d.getMonth()+1) + '' + d.getDate() + '.log';
}

exports.log = function(str) {
	console.trace('inicio da funcao log')
	write(getDate(), new Date() + ' - ' + str + '\r\n', function(err) {
		if(err) {
			console.log("Ocorreu um erro ao tentar gravar o log" + err);
		}
	});
};