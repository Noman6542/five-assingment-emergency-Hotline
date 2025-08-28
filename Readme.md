1.Q:What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1.Ans:
there is difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
getElementById - it's selected or find out one element;
getElementsByClassName-it's selected or find out all elements in same class name;
querySelector-when i have many same class or id name , then querySelector selected first element;
querySelectorAll-when i have many same class or id name , then querySelectorAll selected All element;

<!-- -------------------------------------------------------------------------------------------- -->

2.Q:How do you create and insert a new element into the DOM?
2.Ans:
      
      We use document.createElement();

      add text inside it with innerHTML;
      then finally- appended
      document.body.appendChild(newDiv);
      or prepend
      document.body.prepend(newDiv);

<!-- -------------------------------------------------------------------------------------------- -->

3.Q:What is Event Bubbling and how does it work?
3.Ans:
 Event Bubbling means : event-'click', when i click then The event upwards from the inner element to the outer parent element. 

<!-- -------------------------------------------------------------------------------------------- -->

4.Q:What is Event Delegation in JavaScript? Why is it useful?
4.Ans:
  Event Delegation means having separate event listeners for many child elements, we use one event listener on parent element. Then we can catch the event through event bubbling.

It catch the event parent, but it  work for inner child.

<!-- -------------------------------------------------------------------------------------------- -->

5.Q:What is the difference between preventDefault() and stopPropagation() methods?
5.Ans:
  there is difference:
    preventDefault:- Disables the browser's default action .

    stopPropagation:- Event bubbling / capturing stops propagating to parent.

<!-- -------------------------------------------------------------------------------------------- -->