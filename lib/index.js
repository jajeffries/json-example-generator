
function Generator(schema) {

	this.generate = function() {
		var output = {};
		for(var property in schema.properties) {
			if(output[property]['type'] == 'string') {
				output[property] = "";
			}
		}
		return output;
	}
}

exports.Generator = Generator;