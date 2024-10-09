Create the `PaginationHelper` class, which is a utility class helpful for
querying paging information related to an array.

The class is designed to take in an array of string `collection` and an integer
`itemsPerPage` indicating how many items will be allowed per each page.

The class should have the following methods:

- `pageCount` returns the number of pages in the collection;
- `itemCount` return the number of items in the collection;
- `pageItemCount` accepts an integer `pageIndex` and returns the number of items
  on that page; if `pageIndex` is invalid, it should return `-1`;
- `pageIndex` accepts an integer `itemIndex` and returns the index of the page
  where this item is located; if `itemIndex` is invalid, it should return `-1`;

Examples:

```js
const pagination = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

pagination.pageCount() === 2;
pagination.itemCount() === 6;
pagination.pageItemCount(0) === 4;
pagination.pageItemCount(1) === 2; // last page
pagination.pageItemCount(2) === -1; // the page is invalid
pagination.pageIndex(2) === 0;
pagination.pageIndex(5) === 1;
pagination.pageIndex(7) === -1; // the item index is invalid
```
