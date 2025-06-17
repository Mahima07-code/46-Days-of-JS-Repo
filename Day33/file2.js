// Avoid Magic Numbers & Strings

// Bad ❌
if (score > 90) {
  // A grade
}

// Good ✅
const A_GRADE_THRESHOLD = 90;
if (score > A_GRADE_THRESHOLD) {
  // A grade
}

