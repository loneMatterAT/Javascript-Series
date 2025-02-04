// For Loop in Javascript
// Is used to execute a block of code, while the condition is met/true.
// for(variable;condition;operation) variable(let i = 0;) -> condition(i < 5;) -> displays(console.log) -> operation(i++) looped
for(let i = 0; i < 5; i++) {
  console.log(i);
}

// Iterate Array
// We can use for loop to read through all the array elements.
let people = ["Rui", "Naomi", "Saoru", "Saki"];

// Manually checking condition
for(let i = 0; i < 4; i++) {
  console.log(people[i]);
}

// Auto checking condition using array length
for(let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// Decrementation inverted array (Simulation)
//          Variable                         Condition              Display       Operation
// i = people.length(4) - 1 = 3           i(3) >= 0(True)            Saki        i(3)-1 = 2 
// i = people.length(3) - 1 = 2           i(2) >= 0(True)            Saoru       i(2)-1 = 1
// i = people.length(2) - 1 = 1           i(1) >= 0(True)            Naomi       i(1)-1 = 0
// i = people.length(1) - 1 = 0           i(0) >= 0(True)            Rui         i(0)-1 = -1
// i = people.length(0) - 1 = -1          i(-1) >= 0(False)(Condition met, END OF LOOP)
for(let i = people.length-1; i >= 0; i--) {
  console.log(people[i]);
}

// For Loop vs While Loop
// For loops are used when the number of iterations are known.
for(let i = 0; i < people.length; i++) { // We used people.length because we know how many people in array
  console.log(people[i]);
}
// While loops are used when the number of iterations are unknown.
let i = 0;

while(people[i] !== undefined) { // We used people[i] because we not know how many people in array, purpose to check if people[i] is null
  console.log(people[i]); // While people[i] is not null, it run console.log(people[i]);
  i++;
}

// Break keyword
// We can use break keyword to break out of a loop earlier than expected.
// Variable             Condition                            Display           Condition                 Operation
// i = 0          i(0) < people.length(4)(True)              Rui               i(0) === 2(True)          i(0)+1 = 1 
// i = 1          i(1) < people.length(4)(True)              Naomi             i(1) === 2(True)          i(1)+1 = 2
// i = 2          i(2) < people.length(4)(True)              Saoru             i(2) === 2(True)          END OF LOOP

for(let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if(i === 2) break; // We can use break for searching a specific value in array or to cut-off the loop earlier
}

// For/In Loop
// Are used for iterating JSONs or Arrays. It returns the key or index of each item.
// Downside: Reverse reading or iterating array is far more complex than normal for loop.
let animals = ["Dog", "Cat", "Parrot", "Hamster", "Goldfish"];

for(let x in animals) {
  console.log(animals[x]);
}

// Numbering using For/In loop
// Variable               Condition                   Operation             Display
// x = 0            x(0) in animals(5) (True)         x(0) + 1 = 1          1. Dog
// x = 1            x(1) in animals(5) (True)         x(1) + 1 = 2          2. Cat
// x = 2            x(2) in animals(5) (True)         x(2) + 1 = 3          3. Parrot
// x = 3            x(3) in animals(5) (True)         x(3) + 1 = 4          4. Hamster
// x = 4            x(4) in animals(5) (True)         x(4) + 1 = 5          5. Goldfish
// x = 5            x(5) in animals(5) (False)        

for(let x in animals) {
  console.log(`${parseInt(x)+1}. ${(animals[x])}`);
}

// For/Of Loop
// Are used for iterating over Arrays. It returns the alue of each element.
// Downside: Without index, we can't numbering. So we need to declare variable first.
// Variable               Condition                   Display             Operation
// k = 1            k(1) in animals(5) (True)         1. Dog              k(1) + 1 = 2          
// k = 2            k(2) in animals(5) (True)         2. Cat              k(2) + 1 = 3          
// k = 3            k(3) in animals(5) (True)         3. Parrot           k(3) + 1 = 4          
// k = 4            k(4) in animals(5) (True)         4. Hamster          k(4) + 1 = 5          
// k = 5            k(5) in animals(5) (True)         5. Goldfish         k(5) + 1 = 6        
// k = 6            x(6) in animals(5) (False)        

let k = 1;

for(let pets of animals) {
  console.log(`${k}.${pets}`); // We can call name of assigned variable for all element/values directly without iterating index [].
  k++;
}
