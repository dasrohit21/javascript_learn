// Immediately invoked function expression (IIFE)
(
function chai(){
    //name iife
    console.log(`DB CONNECTED`);
    
})();

( (name) => {
    //unnamed iife
    console.log(`db connected ${name}`);
    
})('rohit')
