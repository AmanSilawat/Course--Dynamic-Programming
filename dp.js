/*
*What is Dynamic Programming ?*

https://www.geeksforgeeks.org/overlapping-subproblems-property-in-dynamic-programming-dp-1/

Dynamic Programming is an algorithmic paradigm that solves a given complex problem by breaking it into subproblems and stores the results of subproblems to avoid computing the same results again.

*Two main properties to solve problem*

1) Overlapping Subproblems
2) Optimal Substructure


1) Overlapping Subproblems:
-Like Divide and Conquer.
-Not again solve, solved problem.
-DP is not useful when there are no common(overlapping).




*/

/* simple recursive program for Fibonacci numbers */

function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
fib(6); // 8;

/*

*Recursion tree for execution of fib(5)*

                         fib(5)
                     /             \
               fib(4)                fib(3)
             /      \                /     \
         fib(3)      fib(2)         fib(2)    fib(1)
        /     \        /    \       /    \
  fib(2)   fib(1)  fib(1) fib(0) fib(1) fib(0)
  /    \
fib(1) fib(0)


We can see that the function fib(3) is being called
!2 times.
stored the value of fib(3), then instead of computing it again, we could have reused the old stored value.
?two way to re used (values)

a) Memoization (Top Down)
b) Tabulation (Bottom Up)

*/