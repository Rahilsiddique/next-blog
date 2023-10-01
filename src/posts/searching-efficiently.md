---
title: "Searching Efficiently with Binary Search"
author: "amit-suthar"
date: "10-1-23"
tags: ["binary-search", "dsa", "algorithm"]
img: "posts/amit/binary-search.png"
---

## Searching Efficiently with Binary Search

_BInary Search is used to Search Elements in a Linear **Sorted** Data Structure._

---

**Logic**

1. Find Mid --> mid = start + (end - start) / 2.
2. Compare mid with target --> possible comparisons (mid == target) or (mid > target) or (mid < target).
3. If mid == target, return mid.
4. If mid != target, change path w.r.t (mid > target) or (mid < target)
5. If mid > target, start --> same, end --> mid - 1.
6. If mid < target, end --> same, start --> mid + 1.
7. Repeat.

---

**Time Complexity:**

1. **Best Case: O(1)** --> Element at middle of the array.
2. **Average / Worst Case: O(log n)** --> Element at 1st or last position.

---

### 1. Search in Rotated Sorted Array of Unique Elements.

**Problem statement :** You're given an array of **unique** elements which is rotated and sorted about a pivot, search for an element in that array.

This problem could be solved using a **linear search** with a time complexity of **O(N)**, but to make it more efficient, we'll use **Binary Search** to solve it efficiently in **O(log N)**.

---

```cpp
int sorted_rotated_array[9] = {7, 8, 9, 1, 2, 3, 4, 5, 6};
// the above array is rotated about 2nd index.
```

To find an element in above array, we couldn't directly proceed with generic binary search.

Because, let's say you've to search for 9 in the array. The first thing we do is to calculate the mid and compare it with target value.

Here mid is 2 and when we compare it with target 9 to eleminate some search space, we found that 2 < 9 but 9 in this array despite being in right search space, is now in the left search space.

So if we procced with normal binary search then we'll eleminate the incorrect half of the array and hence, could have never found the target.

---

### Steps to solve this problem :

To solve this type of problem, we'll always try to first find out the sorted half of the array because as you can observe in `{7, 8, 9, 1, 2, 3, 4, 5, 6}`, the right half from the mid is sorted `{2, 3, 4, 5, 6}` and the left half `{7, 8, 9, 2}` is not sorted.

**Step 1 : Check for the sorted half :**

If `arr[low] > arr[mid]`, then it means that our left half is not sorted and we can't apply a Binary Search over there. In our case `(7 > 2)` so we'll consider the other sorted half.

**Step 2 : Check for the target in our sorted half :**

Suppose our **target value is 1.**

If the target value is present in our right (sorted) half, then it'll always be in the range `arr[mid] <= target <= arr[high]`.

In our right sorted half, the condition `2 <= 1 <= 6` fails and hence we'll eleminate the right half and now look for 1 in the left half.

Thereby high goes to `mid - 1` and our search space now is the left half.

Again, we'll look for the sorted half by following the condition `arr[low] > arr[mid]` and then we'll again check for the target in the sorted half. If not present, eleminate that half and again repeat the same steps untill we get `arr[mid] == target`.

---

### Step by Step Explanation :

Consider the Array :

```
index ->   0  1  2  3  4  5  6  7  9
int arr = {7, 8, 9, 1, 2, 3, 4, 5, 6};
           ^           ^           ^
          low         mid         high

target = 1
```

**Check for the sorted half :**

```
Here, arr[mid] != target and arr[low] > arr[mid];
Hence left half is not sorted.
And ultimately, the right half is sorted.
```

**Check for element in the right sorted half :**

```
index ->   0  1  2  3  4  5  6  7  9
int arr = {7, 8, 9, 1, 2, 3, 4, 5, 6};
           ^           ^           ^
          low         mid         high

if (arr[mid] <= target && target <= arr[high]);
that is, if (2 <= 1 && 1 <= 6) which is false,
Means, 1 is not in our right half.
Hence, the right half is now eleminated.
```

```
thereby, high = mid - 1;
```

And now our required array becomes,

```
index ->   0  1  2  3  4  5  6  7  9
int arr = {7, 8, 9, 1, 2, 3, 4, 5, 6};
           ^  ^     ^
          low mid  high
```

**Again Check for the sorted half :**

```
Here, arr[mid] != target but arr[low] <= arr[mid];
Hence, They are sorted
```

**Check for element in the left sorted half :**

```
index ->   0  1  2  3  4  5  6  7  9
int arr = {7, 8, 9, 1, 2, 3, 4, 5, 6};
           ^  ^     ^
          low mid  high

if (arr[low] <= target && target <= arr[mid]);
that is, if (7 <= 1 && 1 <= 8) which is false,
Means, 1 is not in our left half.
Hence, the left half is now eleminated.
```

```
thereby, low = mid + 1;
```

And now our required array becomes,

```
index ->   0  1  2   3  4  5  6  7  9
int arr = {7, 8, 9,  1, 2, 3, 4, 5, 6};
                 ^   ^
                low high
                 ^
                mid
```

**Again Check for the sorted half :**

```
Here, arr[mid] != target but arr[low] <= arr[mid];
that is 9 <= 9, they are sorted.
```

**Check for element in the left sorted half :**

```
index ->   0  1  2   3  4  5  6  7  9
int arr = {7, 8, 9,  1, 2, 3, 4, 5, 6};
                 ^   ^
                low high
                 ^
                mid

if (arr[low] <= target && target <= arr[mid]);
that is, if (9 <= 1 && 1 <= 9) which is false,
Means, 1 is not in our left half.
Hence, the left half is now eleminated.
```

```
thereby, low = mid + 1;
```

And now our required array becomes,

```
index ->   0  1  2  3  4  5  6  7  9
int arr = {7, 8, 9, 1, 2, 3, 4, 5, 6};
                    ^
                   low
                    ^
                   mid
                    ^
                   high
```

```
Here, arr[mid] == target and arr[low] <= arr[mid] and (arr[low] <= target && target <= arr[mid]);
That is (1 <= 1 && 1 <= 1)

Hence we found our element!
```

---

### Implementation :

```cpp
int search(vector<int>& arr, int n, int k)
{
    int low = 0, high = n - 1;
    while (low <= high){
        int mid = low + (high - low) / 2;

        // base condition
        if (arr[mid] == k) return mid;

        // check if left half is sorted
        if (arr[low] <= arr[mid]){
            // Check for element in the left sorted half
            if (arr[low] <= k && k <= arr[mid]){
                // if it is present, eleminate right search space
                high = mid - 1;
            } else {
                // if not present, eleminate left search space
                low = mid + 1;
            }
        }
        else {  // if right half is sorted
                // Check for element in the right sorted half
                if(arr[mid] <= k && k <= arr[high]){
                    // if it is present, eleminate left search space
                    low = mid + 1;
                } else {
                    // if not present, eleminate right search space
                    high = mid - 1;
                }
        }

    }
    return -1;
}
```

**Solve it on :**

[Coding Ninjas](https://www.codingninjas.com/studio/problems/search-in-rotated-sorted-array_1082554?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf) &
[LeetCode](https://leetcode.com/problems/search-in-rotated-sorted-array/).

---

## Search in Rotated Sorted Array of Duplicate Elements.

**NOTE : A function Searching for an element in Rotated Sorted Array of Duplicate Elements cannot return it's index but returns a boolean value if the target is present in element or not.**

---

In [previous problem](./07-search-in-rotated-sorted-unique-array.md), when we searched the element in a rotated array of unique elements, if followed the steps :

- Compare mid with target.
- Check for the sorted half.
- Check for the element in the sorted half.

This steps would probably work with array of duplicate elements in very few cases, for example, if we have an array

```cpp
int arr[9] = {5, 6, 1, 2, 3, 3, 4, 4, 4};
int target = 4;
```

Everything works fine, we check for the sorted part by comparing `mid` with `low` and we see that the left half is not sorted so we trim that part and then we check for the target in right half and we found some duplicates of target so we returned `true` and everthing seems fine.

---

### But we are not considering an edge case !

```cpp
int arr[6] = {3, 1, 3, 3, 3, 3};
int target = 1;
```

Here we can't even compare the `mid`, `low` and `high` in order to find the sorted part as `low == mid == high`. But finding the sorted part is a crucial step to move forward! So how we'll procced further ??

---

**Well, to tackle this problem, we an first check if the mid is not equal to target and if it's not then we can trim down the search space until we find duplicates on low, mid and high.**

Here's what I mean :

```
Initial array:

index -->     0  1  2  3  4  5
int arr[6] = {3, 1, 3, 3, 3, 3}
              ^     ^        ^
             low   mid      high
```

```
Array after trimming corner duplicates if mid != target :

index -->     0  1   2  3  4  5
int arr[6] = {3, 1,  3, 3, 3, 3}
                 ^   ^     ^
                low mid   high
```

Once we came to a situation where `low != mid` or `mid != high`.

---

**How to trim the search space :**

```cpp
if (arr[low] == arr[mid] && arr[mid] == arr[high]){
    low++; high--;
    continue;
}
```

---

### Implementation :

```cpp
bool searchInARotatedSortedArrayII(vector<int>&arr, int target) {
    int n = arr.size();
    int low = 0; int high = n - 1;
    while (low <= high){
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return true;

        // if corner elements are duplicates of mid element
        if (arr[low] == arr[mid] && arr[mid] == arr[high]){
            low++; high--;
            continue;
        }

        // normal search-rotate-sort algorithm
        if (arr[low] <= arr[mid]){
            if (arr[low] <= target && target <= arr[mid]){
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        else {
            if (arr[mid] <= target && target <= arr[high]){
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return false;
}
```

---

**Solve it on :**

[Coding Ninjas](https://www.codingninjas.com/studio/problems/search-in-a-rotated-sorted-array-ii_7449547?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf) &
[LeetCode](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/).

---

_made with_ ❤️ _by [Amit Suthar](https://github.com/amitsuthar69)_
