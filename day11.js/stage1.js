// Parsing Stage – The Engine Reads & Understands Code

// Code with Syntax Error
function greet() {
  console.log("Hello"  // ← Missing closing parenthesis
}

//  What Happens:
// The parser tries to read the code and make sense of it.

// But there’s a syntax error!

//  The JS Engine stops and throws:
// SyntaxError: missing ) after argument list

//  Lesson:
// If the code has syntax issues, the engine can’t even start compiling or running it