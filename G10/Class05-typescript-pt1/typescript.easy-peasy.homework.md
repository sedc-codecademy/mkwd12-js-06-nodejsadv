# Typescript Exercises

## Exercise 1

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

## Exercise 2

Create interface Person that will have the following properties:

- name which is string,
- age which is number and
- gender which is 'male' or 'female'.

Create a function named filterByProperty. The function should accept three parameters:

- people => which is array of Person objects
- property => which is string
- value => which is string

So if we invoke the function filterByProperty as filterByProperty(peopleArray, "gender", "male") it should return the objects of the peopleArray that its gender is male, and if we invoke the function filterByProperty as filterByProperty(peopleArray, "age", 30) it should return the objects of the peopleArray that its age is 30.

## Exercise 3

Given an array of numbers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

## Exercise 4

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

## Exercise 5

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

## Exercise 6

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

## Exercise 7

Given an array of numbers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

## Exercise 8

Create a function that takes a number as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

## Exercise 9

Implement a Basic Calculator

Description: Create a basic calculator application using TypeScript. The calculator should support addition, subtraction, multiplication, and division operations.

Requirements:
Use TypeScript for defining types, interfaces etc.
Implement functions for performing basic arithmetic operations.
Ensure error handling for division by zero and invalid inputs.
