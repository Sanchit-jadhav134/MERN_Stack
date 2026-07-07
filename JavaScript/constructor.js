function Dog(name, breed, age, weightinKgs) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.weightinKgs = weightinKgs;

  this.eat = function () {
    console.log("Chomp");
  };

  this.bark = function () {
    console.log("Woof!");
  };
}

const dogTheMarley = new Dog("Sandy", "Hybrid", 21, 53);

console.log(dogTheMarley);
dogTheMarley.eat();
dogTheMarley.bark();