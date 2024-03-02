// Sample array of names
var names = ["John", "Jane", "Jack", "Mary,"];

// Function to greet the names according to the rules
function greetNames(names) {
    names.forEach(function(name) {
        // Check if the name starts with 'J' or 'j'
        if (name.charAt(0).toLowerCase() === 'j') {
            // Fix provided library for printing Goodbye
            var library1 = {
                // Fixing the print function to console.log
                print: function(message) {
                    console.log(message);
                }
            };
         library1.print("Goodbye " + name);
        } else { 
            // Fix provided library for printing Hello
            var library2 = {
                // Fixing the print function to console.log
                print: function(message) {
                    console.log(message);
                }
            };
            library2.print("Hello " + name);
        }
    });
}

// Call the function to greet the names
greetNames(names);


