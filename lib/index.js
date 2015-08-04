
function Generator(schema) {

	this.generate = function() {
		var output = {};
		for(var property in schema.properties) {
			if(schema.properties[property]['type'] == 'string') {
				output[property] = "";
			}

			if(schema.properties[property]['type'] == 'number') {
				output[property] = 0;
			}

			if(schema.properties[property]['type'] == 'array') {
				output[property] = [];
			}
		}
		return output;
	}
}

exports.Generator = Generator;