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
				var example = new Generator(exampleSchema).generate(),
					expected = {
						id: 0
					};
				assert.ok(_.isEqual(expected, example));
			});
		});

		describe('from schema with array attribute type', function () {
			var exampleSchema = {
				"$schema": "http://json-schema.org/draft-04/schema#",
				"title": "Product",
				"description": "Test data with number",
				"type": "object",
				"properties": {
					"tags": {
						"description": "tags of the example",
						"type": "array"
					}
				}
			};
			it('should generate example with array', function () {
				var example = new Generator(exampleSchema).generate(),
					expected = {
						tags: []
					};
				assert.ok(_.isEqual(expected, example));
			});
		});

		describe('from schema with specified defaults', function () {
			var exampleSchema = {
				"$schema": "http://json-schema.org/draft-04/schema#",
				"title": "Product",
				"description": "Test data with number",
				"type": "object",
				"properties": {
					"tags": {
						"description": "tags of the example",
						"type": "array"
					}
				}
			};
			it('should generate example with different array default', function () {
				var options = {
					defaults: {
						array: ['test']
					}
				}
					example = new Generator(exampleSchema, options).generate(),
					expected = {
						tags: ['test']
					};
				assert.ok(_.isEqual(expected, example));
			});
		});
	});
});