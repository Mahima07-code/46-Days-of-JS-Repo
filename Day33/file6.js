// Avoid Deep Nesting
// Refactor nested code with early returns or separate functions.

// Bad ❌

if (user) {
  if (user.active) {
    if (user.age > 18) {
      // do something
    }
  }
}

// Good ✅
if (!user || !user.active || user.age <= 18) return;
// do something