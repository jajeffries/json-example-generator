
function Generator(schema) {

	var _defaults = {
		'string': '',
		'number': 0,
		'array': []
	}

	this.generate = function() {
		var output = {};
		for(var property in schema.properties) {
			var propertyType = schema.properties[property]['type'];
			output[property] = _defaults[propertyType];
		}
		return output;
	}
}

exports.Generator = Generator;