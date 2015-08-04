
function Generator(schema) {

	this.generate = function() {
		var output = {};
		for(var property in schema.properties) {
			output[property] = "";
		}
		return output;
	}
}

exports.Generator = Generator;