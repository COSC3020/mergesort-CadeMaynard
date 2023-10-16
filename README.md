[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12217305&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## My Analysis

The outermost loop is represented as $log_2n$ because it is just going to grow by powers of 2 until it is just larger than the array. But because the loops inside of it use its iterations for their own calculations, which are different every time, it is better represented as a sum than as a multiplication. The second loop within the first divides the length of the array by the current power of two given by the outermost loop. Currently, our runtime equation looks like this:
$$\sum_{i=1}^{log_2n}\frac{n}{2^i}$$
The $log_2n$ as the ending value of the sum represents what would normally be a multiplication.
The next part of this is going to be the third nested loop. For the worst case, the else case is always going to be the one run, meaning that the only test from the loop signature that will reliably end the loop is "hiSecIn < (loSec + section)". This means it will always run through $\frac{section}{2}$ times. In our sum, section is represented by $2^i$, so we can add this to our equation like so:
$$\sum_{i=1}^{log_2n}\frac{n}{2^i}2^{i-1}$$
For our last loop, which will run every time in the worst case is represented by $\frac{n}{2^{i-1}}$. This is because every time this loop runs a value must be moved across half of the section we are working with because the halves of the section are effectively the sorted "arrays" we are pulling from to make our larger sorted array. Finally, we get this equation:
$$\sum_{i=1}^{log_2n}\frac{n}{2^i}2^{i-1}\frac{n}{2^{i-1}}$$
We can do some canceling and simplifying to get:
$$\sum_{i=1}^{log_2n}\frac{n^2}{2^i}$$
Factoring out the $n^2$:
$$n^2\sum_{i=1}^{log_2n}\frac{1}{2^i}$$
The sum is now clearly a constant so for the sake of asymptotic analysis, we can ignore it and we get:
$$\Theta(n^2)$$
For the big Theta of the worst case for merge sort.
