"# assignment1"
<<<<<<< Provide an example of using union and intersection types in TypeScript.  >>>>>>>

Answer:
>>> Union Type Example

Union type মানে—একটি ভ্যালু একাধিক টাইপের যেকোনো একটি হতে পারে।

Example:

const inputValue = (value: number | string ) =>{
  console.log(Your Value: value);
}

inputValue("Jahid");
inputValue(27);

ব্যাখ্যা: value: string | number → value string বা number যেকোনোটি হতে পারে।

>>>Intersection Type Example

Intersection type মানে—একাধিক টাইপকে একত্রে মিলিয়ে নতুন টাইপ তৈরি করা,
এবং সেই নতুন টাইপকে সব টাইপের প্রপার্টি থাকতে হবে।

Example:
type UserName = {
  name: string;
};

type UserID = {
  id: number;
};

type UserInfo =  UserName & UserId;

const userInfo: UserInfo = {
  name: "Jahid",
  id: 25,
};

console.log(userInfo);

ব্যাখ্যা: UserNmae & UserId → UserInfo টাইপে name + id দুটোই থাকতে হবে।


<<<<<<<<<< Explain the difference between any, unknown, and never types in TypeScript. >>>>>>>>>>

Answar:

* any Type

-> any Type যে কোনো value ধরতে পারে।
-> TypeScript এই টাইপের উপর কোনো type-checking করে না।
-> Unsafe, কিন্তু legacy code বা JS migration-এ কাজে আসে।

* unknown Type

-> unknown টাইপও যে কোনো value ধরতে পারে।
-> কিন্তু এটি safer কারণ, এর সাথে কাজ করতে গেলে type assertion বা type-checking করতে হয়।

* never Type

-> never type বোঝায়—এই value কখনো return হবে না।
-> প্রায়ই ব্যবহার হয় error throw করা, infinite loop, বা unreachable code-এ।
