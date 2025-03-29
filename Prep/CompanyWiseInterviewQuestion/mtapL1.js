// Applied for full stack developer (MERN)

// What is Event Loop
// Based on event loop
console.log('Start'); // first line logs: start immediately since it is synchronous code

setTimeout(function() {
    console.log('Timeout callback');
}, 1000); 

/**
 * The setTimeout function schedules a callback to log "Timeout callback" 
 * after 1000 milliseconds (or 1 second). However, this callback doesn’t run immediately.
 *  It's added to the message queue to be executed after 1 second and
 *  when the event loop finds the call stack empty.
 */

//Blocking the Event Loop - while Loop:
/**
 * The while loop is a synchronous blocking operation that holds the code for about
 *  3 seconds. During this time, the JavaScript runtime is busy, so no other code,
 *  including the setTimeout callback, can run until this loop completes.
 */
const end = Date.now() + 3000;
while (Date.now() < end) {
   
}

console.log('End'); // end will be printed after 3s

/**
 * Processing the Timeout Callback: After logging "End," the call stack is finally empty,
 *  so the event loop can now check the message queue. The setTimeout callback
 *  (scheduled for 1 second) is waiting, but it has been delayed due to the blocking 
 * while loop. Once the call stack is free,
 *  the event loop picks up the callback and logs "Timeout callback" to the console.
 */


/**
 * Final Output Sequence
"Start"
"End" (after ~3 seconds)
"Timeout callback" (even though it was set for 1 second, it executes after ~3 seconds due to blocking)
 */

// coding
// Reverse the string 'Jeet Bahadur' => 'teej rudahab' - Medium 

// Controlled Vs Uncontrolled Components in Reactjs

// 1. How to make fast reterival from 1M of data ? 



