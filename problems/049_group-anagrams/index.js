/*
---
created: 20190822
updated: 
  - 20190822
source: 
  - https://leetcode.com/problems/group-anagrams/ 
tags: 
  - hash table
  - string
solutions: 
  - groupAnagrams
    - runtime: 132 ms, beats 54.20%
    - memory: 45.6 MB, beats 47.37%
---
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsWithObjectAndReduce = function(strs) {
  const hashMap = strs.reduce( (acc,cur) => {
    const k = [...cur].sort().join('');
    const val = (acc[k] || []).concat(cur);
    acc[k] = val;
    return acc;
  }, {});
  return Object.values(hashMap);
};

const groupAnagramsWithMap = strs => {
  const map = new Map();
  for (let str of strs) {
    const key = [...str].sort().join('');
    const val = (map.get(key) || []).concat(str);
    map.set(key, val);
  }
  return Array.from(map.values());
};

module.exports = {
  groupAnagramsWithObjectAndReduce,
  groupAnagramsWithMap
};
