
var should = require('should');
var View = require('../');

describe('.config', function () {
  it('should load layouts and partials', function () {
    View.config({
      data: ['test/fixtures/data/*.{json,yaml}'],
      layouts: ['test/fixtures/layouts/*.hbs'],
      partials: ['test/fixtures/partials/*.hbs']
    });
    Object.keys(View.template.cache.layouts).length.should.eql(2);
    Object.keys(View.template.cache.partials).length.should.eql(1);
    View.template.cache.data.should.exist;
    View.template.cache.data.site.should.exist;
    View.template.cache.data.site.title.should.exist;
    View.template.cache.data.site.title.should.eql('Doowb Express!!!');
  });
});

