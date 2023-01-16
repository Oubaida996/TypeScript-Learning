// Object Type

// Properties can also be marked as readonly for TypeScript. While it won’t change any behavior at runtime, a property marked as readonly can’t be written to during type-checking.

// The question mark mean, you can ignore the set of property

let obj: { readonly id: number; name: string; age?: number } = {
  id: 1,
  name: 'Ali',
  //   age:'15'
};
