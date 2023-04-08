const {Shape, Circle} = require ('./shapes')



it("Render a green circle", function()
    test("circle to render", () => {
      
    var shape = new Circle('green', 'test');
    expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20"/> fill="green" />');
})
)