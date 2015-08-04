var Generator = require('../lib/index.js').Generator,
	assert = require("assert"),
	_ = require('underscore');

describe('Generator', function () {
	describe('#generate', function () {
		describe('from schema with string attribute type', function () {
			var exampleSchema = {
				"$schema": "http://json-schema.org/draft-04/schema#",
				"title": "Product",
				"description": "Test data with string",
				"type": "object",
				"properties": {
					"name": {
						"description": "Name of the product",
						"type": "string"
					}
				}
			};
			it('should generate example with empty string', function () {
				console.log(Generator);

				var example = new Generator(exampleSchema).generate(),
					expected = {
						name: ""
					};
				assert.ok(_.isEqual(expected, example));
			});
		});
	});
});