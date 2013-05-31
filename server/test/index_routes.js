describe("index routes", function(){
    describe("GET /", function(){
        it("should return application html page", function(done){
            request(app)
                .get("/")
                .expect(200)
                .end(function(err, res){
                    if (err) return done(err);
                    res.text.should.include('html');
                    res.text.should.include('app.js');
                    res.text.should.include('vendor.js');
                    done();
                });
        });
    });

    describe("GET /api/me", function(){
        it("should return guest user", function(done){
            request(app)
                .get("/api/me")
                .expect(200)
                .end(function(err, res){
                    if (err) return done(err);
                    res.body._id.should.equal('guest');
                    res.body.active.should.be.false;
                    done();
                });
        });
    });
});