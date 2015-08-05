
function Generator(schema, options) {

	var _defaults = {
		string: '',
		number: 0,
		integer: 0,
		array: [],
		boolean: false,
		object: function (property, output) {
			return generateObject(property.properties, output);
		}
	};
	if(options && options.defaults) {
		merge(_defaults, options.defaults)
	}

	function merge(obj1, obj2) {
		for (var attrname in obj2) { obj1[attrname] = obj2[attrname]; }
	}

	this.generate = function() {
		return generateObject(schema.properties, {});
	}

	function generateObject(properties, output) {
		for(var property in properties) {
			var propertyType = properties[property]['type'], 
				defaultValue = _defaults[propertyType];
			if(typeof defaultValue === "undefined" && properties[property]['enum']) {
				output[property] = properties[property]['enum'][0]
			} else if (typeof defaultValue !== "function") {			
				output[property] = defaultValue;
			} else {
				output[property] = defaultValue(properties[property], {});
			}
		}
		return output;
	}
}

exports.Generator = Generator;