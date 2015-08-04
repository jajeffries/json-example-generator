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
						"description": "Name of the example",
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

		describe('from schema with number attribute type', function () {
			var exampleSchema = {
				"$schema": "http://json-schema.org/draft-04/schema#",
				"title": "Product",
				"description": "Test data with number",
				"type": "object",
				"properties": {
					"id": {
						"description": "ID of the example",
						"type": "number"
					}
				}
			};
			it('should generate example with number', function () {
				console.log(Generator);

				var example = new Generator(exampleSchema).generate(),
					expected = {
						id: 0
					};
				assert.ok(_.isEqual(expected, example));
			});
		});
	});
});