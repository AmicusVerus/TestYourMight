/* ------------------------------ TASK 4 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */


function Movie(title, director, budget) {
  this.title = title;
  this.director = director;
  this.budget = budget;

  this.wasExpensive = function () {
    return this.budget > 100000000;
  };
}

const movie1 = new Movie("Avatar", "James Cameron", 237000000);
const movie2 = new Movie("Inception", "Christopher Nolan", 160000000);
const movie3 = new Movie("The Avengers", "Joss Whedon", 220000000);

console.log(`${movie1.title} was expensive: ${movie1.wasExpensive()}`);
console.log(`${movie2.title} was expensive: ${movie2.wasExpensive()}`);
console.log(`${movie3.title} was expensive: ${movie3.wasExpensive()}`);