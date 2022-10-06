/* q1 */
function calculate(array, sum) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] + array[j] == sum) {
        result.push({ [array[i]]: array[j] });
      }
    }
  }
  return result;
}
console.log(calculate([2, 3, 4, 5, 6, 7, 8], 10));

/* q2 */
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.reverse();

console.log(reversedNumbers);
// [5, 4, 3, 2, 1]

console.log(numbers);
// [5, 4, 3, 2, 1]

/* q3 */
function areRotEq(str1, str2) {
  if (str1 === str2) return true;
  if (str1.length !== str2.length) return false;

  var start2 = str2.indexOf(str1[0]);
  if (start2 === -1) return false;

  return str1 === str2.slice(start2) + str2.slice(0, start2);
}

console.log(areRotEq("abcd", "abcd"));
/* q4 */
function find_FirstNotRepeatedChar(str) {
  var arra1 = str.split("");
  var result = "";
  var ctr = 0;

  for (var x = 0; x < arra1.length; x++) {
    ctr = 0;

    for (var y = 0; y < arra1.length; y++) {
      if (arra1[x] === arra1[y]) {
        ctr += 1;
      }
    }

    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}
console.log(find_FirstNotRepeatedChar("aaccddffghh"));

/* q5 */
// Tower of Hanoi consists of three pegs or towers with n disks placed one over the other.

//The objective of the puzzle is to move the stack to another peg following these simple rules.
//Only one disk can be moved at a time.
//No disk can be placed on top of the smaller disk.

function Hanoi(n, from, to, via) {
  if (n == 0) return;

  Hanoi(n - 1, from, via, to);

  moveDisk(from, to);

  // callStack.push([from,to]); // save parameters to callStack array

  Hanoi(n - 1, via, to, from);
}
/* q6 */
//Infix Expression = A + B,    A + B * C

//Prefix Expression=+ A B,    + A * B C
//Postfix Expression=A B +,    A B C * +

function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "/":
    case "*":
      return true;
  }
  return false;
}

// Convert postfix to Prefix expression
function postToPre(post_exp) {
  let s = [];

  let length = post_exp.length;

  // reading from right to left
  for (let i = 0; i < length; i++) {
    // check if symbol is operator
    if (isOperator(post_exp[i])) {
      // Pop two operands from stack
      let op1 = s[s.length - 1];
      s.pop();
      let op2 = s[s.length - 1];
      s.pop();

      let temp = post_exp[i] + op2 + op1;

      s.push(temp);
    } else {
      // Push the operand to the stack
      s.push(post_exp[i] + "");
    }
  }

  let ans = "";
  while (s.length > 0) ans += s.pop();
  return ans;
}

let post_exp = "ABC/-AK/L-*";

document.write("Prefix : " + postToPre(post_exp));

/* Q7 */
function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "^":
    case "%":
      return true;
  }
  return false;
}

// Convert prefix to Infix expression
function convert(str) {
  let stack = [];

  // Length of expression
  let l = str.length;

  // Reading from right to left
  for (let i = l - 1; i >= 0; i--) {
    let c = str[i];

    if (isOperator(c)) {
      let op1 = stack[stack.length - 1];
      stack.pop();
      let op2 = stack[stack.length - 1];
      stack.pop();

      // Concat the operands and operator
      let temp = "(" + op1 + c + op2 + ")";
      stack.push(temp);
    } else {
      // To make character to string
      stack.push(c + "");
    }
  }
  return stack[stack.length - 1];
}

let exp = "*-A/BC-/AKL";

document.write("Infix : " + convert(exp));

/* Q8 */
const checkBracketSequenceBalance = (exp) => {
  const pairs = {
      "(": ")",
      "[": "]",
      "{": "}",
    },
    open = [];

  for (let i = 0; i < exp.length; i++)
    if (pairs[exp[i]]) open.push(exp[i]);
    else if (exp[i] === pairs[open[open.length - 1]]) open.pop();

  return !open.length;
};
/* Q9 */
function Stack() {
  this.arr = [];
  this.top = 0;
}

Stack.prototype.push = function (val) {
  this.arr[this.top] = val;
  this.top = this.top + 1;
};

Stack.prototype.pop = function () {
  if (this.is_empty()) {
    throw new Error("Underflow, stack is empty");
  }

  var topEl = this.arr[this.top - 1];

  this.top = this.top - 1;
  this.arr.pop();

  return topEl;
};

Stack.prototype.is_empty = function () {
  return this.top === 0;
};

Stack.prototype.reverse = function () {
  if (this.is_empty()) {
    throw new Error("Underflow, stack is empty");
  }

  var revStr = "";

  for (var i = this.top - 1; i >= 0; i--) {
    revStr += this.arr[i];
  }

  return revStr;
};

Stack.prototype.reverseV1 = function () {
  if (this.is_empty()) {
    throw new Error("Underflow, stack is empty");
  }

  var revStr = "";

  while (!this.is_empty()) {
    revStr += this.pop();
  }

  return revStr;
};

var stack = new Stack();

stack.push("a");
stack.push("b");
stack.push("c");

console.log(stack.reverse()); // cba
console.log(stack.reverseV1()); // cba

/* Q10 */
const arr = [numbers];
const min = Math.min(...arr);
console.log(min);
