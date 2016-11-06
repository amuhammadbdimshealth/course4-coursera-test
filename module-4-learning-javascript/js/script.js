// Object literals and "this"
var literalCircle = {
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(this);

    var increaseRadius = function () {
      // self.radius = 20;
    };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());


// // Object literals and "this"
// var literalCircle = {
//   radius: 10,

//   getArea: function () {
//     var self = this;
//     console.log(this.radius);
//     var increaseRadius = function () {
//       console.log("inside nested func ",self);
//       self.radius++;
//     };
//     increaseRadius();
//     console.log(this.radius);
//   }
// };

// literalCircle.getArea();




