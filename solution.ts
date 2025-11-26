const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }

  return value;
}

// console.log(formatValue("jahid"))
// console.log(formatValue(5))
// console.log(formatValue(false))


const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
}

// console.log(getLength("Bangladesh"));
// console.log(getLength([10, 20, 30, 40, 50]));



class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name} and Age: ${this.age}`
  }
}

const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

const person2 = new Person('Alice', 25);

// console.log(person2.getDetails());



type Item = {
  title: string;
  rating: number;
}
const filterByRating = (items: Item[]) => {
  return items.filter(item => item.rating >= 4);
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.5 },
  { title: 'Book C', rating: 5.0 }
]

// console.log(filterByRating(books));



type Users = {
  id: number,
  name: string,
  email: string,
  isActive: boolean
}
const filterActiveUsers = (users: Users[]) => {
  return users.filter(user => user.isActive);
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));


const getUniqueValues = (
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] => {

  const result: (number | string)[] = [];

  const checkValue = (value: number | string) => {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) return true;
    }
    return false;
  };


  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    if (value !== undefined && !checkValue(value)) {
      result.push(value)
    };
  }

  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    if (value !== undefined && !checkValue(value)) {
      result.push(value)
    };
  }

  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(getUniqueValues(array1, array2));

interface Book {
  title: string,
  author: string,
  publishedYear: number,
  isAvailable: boolean
}

const printBookDetails = (book: Book) => {
  const { title, author, publishedYear, isAvailable } = book;

  // console.log(`"Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? "Yes" : "No"}`)
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);


interface Product {
  name: string,
  price: number,
  quantity: number,
  discount?: number
}

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;

  return products.map(product => {
    const totalAmount = product.price * product.quantity;
    if (product.discount !== undefined) {
      const discountAmount = (totalAmount * product.discount) / 100;
      return totalAmount - discountAmount;
    }
    return totalAmount;
  })
    .reduce((sum, value) => sum + value, 0);
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));
