// ✅ Singleton Pattern

const Settings = (function () {
  let instance;

  function createInstance() {
    return { theme: "dark", version: "1.0" };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const s1 = Settings.getInstance();
const s2 = Settings.getInstance();
console.log(s1 === s2); // true ✅
