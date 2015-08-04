
function Generator(schema, options) {

	var _defaults = {
		string: '',
		number: 0,
		array: [],
		// object: function (output, property) {
		// 	generateObject
		// }
	};
	if(options && options.defaults) {
		merge(_defaults, options.defaults)
	}

	function merge(obj1, obj2) {
		for (var attrname in obj2) { obj1[attrname] = obj2[attrname]; }
	}

	this.generate = function() {
		var output = {};
		return generateObject(output, schema.properties);
	}

	function generateObject(output, properties) {
		for(var property in properties) {
			var propertyType = properties[property]['type'], 
				defaultValue = _defaults[propertyType];
			if(typeof defaultValue !== "function") {			
				output[property] = defaultValue;
			}
		}
		return output;
	}
}

exports.Generator = Generator;