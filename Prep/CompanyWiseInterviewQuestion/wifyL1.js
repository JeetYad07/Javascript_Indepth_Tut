// Introduce your self
// What are the major challenges you have faced while working on the prod environ, how you have tackled
// Major feature of Reactjs
// Difference b/w sql/nosql
// what is babel, why it is used
// how you have optimized the frontend
// why you have used ElasticSearch, what type of data you have stored
// find the factors of a number
// takes O(n)
function factors(num){
    let cnt = 0;
    for(let i = 1;i<=num;i++){
        if(num % i === 0){
            console.log(i);
            cnt++;
        }
    }
    return cnt;
}

// Optimized O(root(n))
function Optimizefactors(num){
    let cnt = 0;
    for(let i = 0; i<=Math.sqrt(num);i++){
        if(num % i === 0){
            if(i == Math.sqrt(num)){
                cnt += 1;
            }else{
                 cnt +=2;
            }
        }
    }
    return cnt;
    
}

// console.log(factors(36))
console.log(Optimizefactors(10000000000))


// Difference b/w Vite and webpack