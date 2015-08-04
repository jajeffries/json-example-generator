
function Generator(schema, options) {

	var _defaults = {
		string: '',
		number: 0,
		array: []
	};
	if(options && options.defaults) {
		merge(_defaults, options.defaults)
	}

	function merge(obj1, obj2) {
		for (var attrname in obj2) { obj1[attrname] = obj2[attrname]; }
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