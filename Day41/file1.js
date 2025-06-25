// <!-- Example you hav this part of HTML file-->
// <!-- You want to do something when someone clicks any <li>. -->
<ul id="fruits">
  <li>Apple</li>
  <li>Mango</li>
  <li>Banana</li>
</ul>

// In JAVASCRIPT code

// <!-- INSTEAD OF  -->
 document.querySelectorAll("#fruits li").forEach(item => {
  item.addEventListener("click", () => {
    console.log("Clicked:", item.textContent);
  });
});

// Better USE Event Delegation
document.querySelectorAll("#fruits li").forEach(item => {
  item.addEventListener("click", () => {
    console.log("Clicked:", item.textContent);
  });
});


//  How it works:
// You add the click event only to the ul (the parent).
// When you click on a li, the event goes up to the ul (this is called bubbling).
// In the event function, you check: Did we click on a li? If yes, do something.