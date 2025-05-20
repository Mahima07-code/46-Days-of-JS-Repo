function compareValues() {
      let val1 = document.getElementById('val1').value;
      let val2 = document.getElementById('val2').value;

      let mode = document.getElementById('strict').checked ? 'strict' : 'loose';

      // Try parsing to number if possible
      let parsed1 = isNaN(val1) ? val1 : JSON.parse(val1);
      let parsed2 = isNaN(val2) ? val2 : JSON.parse(val2);

      let resultText = '';
      if (mode === 'loose') {
        resultText = (parsed1 == parsed2) 
          ? "✅ They look the same! == says YES!" 
          : "❌ They just don't vibe. == says NO!";
      } else {
        resultText = (parsed1 === parsed2) 
          ? "💍 It's a perfect match! === says YES!" 
          : "🙅‍♂️ Nope, types or values are different! === says NO!";
      }

      let type1 = typeof parsed1;
      let type2 = typeof parsed2;

      document.getElementById('result').innerText = resultText;
      document.getElementById('types').innerText = `Type of Value 1: ${type1} | Type of Value 2: ${type2}`;
    }