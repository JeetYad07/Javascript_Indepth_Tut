// A generator function in JavaScript is a special function that can pause execution and later resume from
//  where it left off. It is defined using the function* syntax and uses the yield keyword to return values
//  lazily, making it highly useful for handling large datasets, infinite sequences, or asynchronous operations.

// Generator function for a range
function* range(start, end, step = 1){
    if(step <= 0){
        throw new Error("Steps must be greater than 0")
    }
    for(let i = start; i< end; i+=step){
        yield i
    }
}

const numbers = range(1,10,2)
// console.log(numbers.next().value);
// console.log(numbers.next().value);

// Real Time Example: Pagination(Lazy Loading Data)
function* fetchPages(totalPages){
    for (let page = 1; page <= totalPages; page++) {
        console.log(`Fetching data for a page ${page}`);
        yield `Data for page ${page}`
        
        
    }
}

const pages = fetchPages(3)
console.log(pages.next().value);
// console.log(pages.next().value);
// console.log(pages.next().value);

/**
 * Why use a generator here?

It fetches pages only when needed instead of loading all at once.
Saves memory and improves performance.
Perfect for handling pagination in large datasets.
 */