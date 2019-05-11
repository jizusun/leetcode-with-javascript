## Practice LeetCode with JavaScript

[![Build Status](https://travis-ci.com/jizusun/leetcode-with-javascript.svg?branch=master)](https://travis-ci.com/jizusun/leetcode-with-javascript)
[![Coverage Status](https://coveralls.io/repos/github/jizusun/leetcode-with-javascript/badge.svg?branch=master)](https://coveralls.io/github/jizusun/leetcode-with-javascript?branch=master)
[![codecov](https://codecov.io/gh/jizusun/leetcode-with-javascript/branch/master/graph/badge.svg)](https://codecov.io/gh/jizusun/leetcode-with-javascript)

### JavaScript Runtime on LeetCode
> - nodejs 10.15.0
> - Run with --harmony flag, enabling new ES6 features.
`lodash.js` library is included by default.

Source: [LeetCode - What are the environments for the programming languages?](https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages)

### Front Matter
The front matter concept is learnt from Jekyll: https://jekyllrb.com/docs/front-matter/

The front matter must be the first thing in the file and must take the form of
valid YAML set between triple-dashed lines within a valid JavaScript block
comment

Here is a basic example:
```
/*
---
created: 20190510
updated: 
  - 20190511
tags: 
  - recursive
  - linked list
solutions: 
  - reverseList
    - runtime: 52 ms, beats 99.80%
    - memory: 35 MB, beats 47.37%
  - reverseListRecursive
    - runtime: 60 ms, beats 98.89%
    - memory: 35.4 MB, beats 15.38%
---
*/
```


### Topics

https://leetcode.com/problemset/all/

#### 1. Array
#### 2. Hash Table
#### 3. Linked List
#### 4. Math
#### 5. Two Pointers
#### 6. String
#### 7. Binary Search
#### 8. Divide and Conquer
#### 9. Dynamic Programming
#### 10. Backtracking
#### 11. Stack
#### 12. Heap
#### 13. Greedy
#### 14. Sort
#### 15. Bit Manipulation
#### 16. Tree
#### 17. Depth-first Search
#### 18. Breadth-first Search
#### 19. Union Find
#### 20. Graph
#### 21. Design
#### 22. Topological Sort
#### 23. Trie
#### 24. Binary Indexed Tree
#### 25. Segment Tree
#### 26. Binary Search Tree
#### 27. Recursion
#### 28. Brainteaser
#### 29. Memoization
#### 30. Queue
#### 31. Minimax
#### 32. Reservoir Sampling
#### 33. Map
#### 34. Geometry
#### 35. Random
#### 36. Rejection Sampling
#### 37. Sliding Window

### Test Cases
I use [Jest](https://jestjs.io) to test the programs, the test cases are defined in the problems/*/index.test.js:
```sh
yarn test                    # test all test cases
```

CI Tutorials:
- [Travis CI Docs](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)
- [Coveralls Docs](https://docs.coveralls.io/javascript)
- [Javascript Quality Control with Jest 🤹 and ESLint ✨](https://medium.com/asos-techblog/javascript-quality-control-with-jest-and-eslint-b888eeb4b0c4)
- [Start measuring code coverage with Jest, Travis CI and Coveralls](https://medium.com/@ollelauribostr/start-measuring-coverage-with-jest-travis-ci-and-coveralls-1867928aca42)
- Git commit hooks: [Running Jest Tests Before Each Git Commit](https://benmccormick.org/2017/02/26/running-jest-tests-before-each-git-commit/)
### Inspired by
- https://github.com/MrHuxu/leetcode: JavaSciript solutions with tests
- https://github.com/invzhi/LeetCode: with Anki Deck
- https://github.com/dnshi/Leetcode: JavaScript solutions without tests



### References
- [Learn Data Structures with Unit Testing](https://github.com/jizusun/learn-data-structures-with-javascript)
- [Blog: LeetCode Solutions and Explanations (Java)](http://www.goodtecher.com/leetcode-solutions-explanations/)
- [Gitbooks: 算法珠玑——一个最精简的题库](https://soulmachine.gitbooks.io/algorithm-essentials/content/java/)
- [Google Search: 如何刷leetcode](https://www.google.com/search?q=%E5%A6%82%E4%BD%95%E5%88%B7+leetcode)
- geeksforgeeks, lintcode

