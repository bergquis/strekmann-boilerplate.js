describe('Index Layout', function(){
    var Application = require('Application');
    var IndexLayout = require('views/IndexLayout');
    var Router = require('routers/Router');
    var Me = require('models/Me');
    var $el;

    before(function(done){
        Application.router = new Router();
        Application.me = new Me({
            _id: 'test',
            name: 'Mocha Tester',
            active: false
        });
        done();
    });

    after(function(done){
        Application.router = undefined;
        Application.me = undefined;
        done();
    });

    it('should render', function(done){
        var layout = new IndexLayout();
        layout.render().then(function(){
            $el = layout.$el;
            layout.$el.should.be.a('object');
            done();
        });
    });

    it('should have h1', function(){
        $el.find('h1').length.should.equal(1);
    });
});