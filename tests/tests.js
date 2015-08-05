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

		describe('from schema with integer attribute type', function () {
			var exampleSchema = {
				"$schema": "http://json-schema.org/draft-04/schema#",
				"title": "Product",
				"description": "Test data with integer",
				"type": "object",
				"properties": {
					"id": {
						"description": "ID of the example",
						"type": "integer"
					}
				}
			};
			it('should generate example with integer', function () {
				var example = new Generator(exampleSchema).generate(),
					expected = {
						id: 0
					};
				assert.ok(_.isEqual(expected, example));
			});
		});

		describe('from schema with boolean attribute type', function () {
			var exampleSchema = {
				"$schema": "http://json-schema.org/draft-04/schema#",
				"title": "Product",
				"description": "Test data with boolean",
				"type": "object",
				"properties": {
					"flag": {
						"description": "Some flag in the example",
						"type": "boolean"
					}
				}
			};
			it('should generate example with boolean', function () {
				var example = new Generator(exampleSchema).generate(),
					expected = {
						flag: false
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

		describe('from schema with enum attribute type', function () {
			var exampleSchema = {
				"$schema": "http://json-schema.org/draft-04/schema#",
				"title": "Product",
				"description": "Test data with number",
				"type": "object",
				"properties": {
					"tags": {
						"enum": ["value1", "value2"]
					}
				}
			};
			it('should generate example with enum', function () {
				var example = new Generator(exampleSchema).generate(),
					expected = {
						tags: "value1"
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
					},
					example = new Generator(exampleSchema, options).generate(),
					expected = {
						tags: ['test']
					};
				assert.ok(_.isEqual(expected, example));
			});
		});

		describe('from schema with nested object', function () {
			var exampleSchema = {
				"$schema": "http://json-schema.org/draft-04/schema#",
				"title": "Product",
				"description": "Test data with number",
				"type": "object",
				"properties": {
					"dimensions": {
						"description": "embedded object",
						"type": "object",
						"properties": {
							"height": { "type" : "number" }, 
							"width": { "type" : "number" }
						}
					}
				}
			};
			it('should generate example with embeded object', function () {
				var example = new Generator(exampleSchema).generate(),
					expected = {
						dimensions: {
							height: 0,
							width: 0
						}
					};
				assert.ok(_.isEqual(expected, example), JSON.stringify(example) + JSON.stringify(expected));
			});
		});
	});
});