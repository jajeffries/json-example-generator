
function Generator(schema) {

	this.generate = function() {
		var output = {};
		for(var property in schema.properties) {
			if(schema.properties[property]['type'] == 'string') {
				output[property] = "";
			}
		}
		return output;
	}
}

exports.Generator = Generator;