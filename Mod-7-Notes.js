// 1.) SCRIPT TAG TO INCLUDE JQUERY LIBRARY IN YOUR WEBPAGE

// Example of Tag:
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

// This script tag includes the jQuery library from the specified URL (https://code.jquery.com/jquery-3.6.0.min.js). Make sure to place this script tag within the <head> or <body> section of your HTML document, depending on your specific requirements.

// 2.) HOW TO USE .READY()

// The .ready() method in jQuery is used to specify a function to execute when the DOM is fully loaded. It ensures that all elements on the page have been constructed and are ready to be manipulated.

// Example of Syntax:
$(document).ready(function() {
  // Your code here
});

// Example whithin HTML Document:
<!DOCTYPE html>
<html>
<head>
  <title>Using .ready()</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(function() {
      // Code inside this function will execute when the DOM is ready
      alert("DOM is ready!");
    });
  </script>
</head>
<body>
  <!-- HTML content here -->
</body>
</html>

// 3.) HOW TO USE JQUERY SELECTORS

// By Element - Selecting the HTML tag name

// Example:
$('tagname')

// By ID - To select an element by its ID using jQuery, you can use the $('#id') selector, where id is the value of the element's ID attribute.

// Example:
$(document).ready(function() {
  // Selecting an element by ID
  var element = $('#myElement');
  
  // Manipulating the selected element
  element.text('This element was selected by ID.');
  element.css('color', 'red');
});

// By Class - To select elements by their class using jQuery, you can use the $('.classname') selector, where classname is the value of the class attribute of the desired elements.

// Example:
$(document).ready(function() {
  // Selecting elements by class
  var elements = $('.myClass');
  
  // Manipulating the selected elements
  elements.text('These elements were selected by class.');
  elements.css('color', 'blue');
});

// Selecting multiple targets - To select multiple targets using jQuery selectors, you can separate the selectors with commas within a single jQuery selector.

// Example:
$(document).ready(function() {
  // Selecting multiple targets
  var targets = $('.target1, .target2, #target3');
  
  // Manipulating the selected targets
  targets.text('These are the selected targets.');
  targets.css('color', 'green');
});

// 4.) HOW TO USE JQUERY EVENTS

// .click() - The .click() method in jQuery is used to attach an event handler function to elements, which will be executed when the element is clicked.

// Example:
$(document).ready(function() {
  // Click event handler
  $('#myButton').click(function() {
    // Code to execute when the button is clicked
    alert("Button clicked!");
  });
});

// .mouseenter() - The .mouseenter() event in jQuery is used to attach a function to an element that is triggered when the mouse pointer enters the boundaries of the element. It is commonly used to perform actions when the user hovers over an element.

// Example:
$(document).ready(function() {
  // Using .mouseenter() event
  $('.myElement').mouseenter(function() {
    // Code to be executed when mouse enters the element
    $(this).css('background-color', 'yellow');
  });
});

// .mouseleave() - The .mouseleave() method in jQuery is used to attach an event handler function to elements that will be triggered when the mouse pointer leaves the selected element. It is typically used to define actions or behavior when the mouse cursor moves outside of an element.

// Example:
$(document).ready(function() {
  // Handling mouse leave event
  $('.myElement').mouseleave(function() {
    // Code to execute when mouse leaves the element
    $(this).text('Mouse has left the element.');
    $(this).css('color', 'red');
  });
});

// 5.) HOW TO USE JQUERY EFFECTS

// .show() - The .show() method in jQuery is used to display elements that are hidden. It can be used to reveal elements that were previously hidden using CSS or the .hide() method.

// Example:
$(document).ready(function() {
  // Showing an element
  $('.myElement').show();
});

// .hide() - The .hide() method in jQuery is used to hide elements by setting their CSS display property to none. This method allows you to hide elements smoothly with an optional duration parameter for animation.

// Example:
$(document).ready(function() {
  // Hide an element
  $('#myElement').hide(); // Hides the element with ID "myElement"
  
  // Hide an element with animation
  $('.myClass').hide(1000); // Hides all elements with class "myClass" with a 1-second (1000 milliseconds) animation
});

// .slideDown() - The .slideDown() method in jQuery is used to create a sliding animation that reveals an element by sliding it down.

// Example:
$(document).ready(function() {
  // Trigger the slide down animation on a button click
  $('#slideDownButton').click(function() {
    $('#targetElement').slideDown();
  });
});

// .slideUp() - The .slideUp() method in jQuery is used to create a sliding animation that gradually hides the selected elements by vertically sliding them up. 

// Example:
$(document).ready(function() {
  // Selecting the element and applying the slideUp effect
  $('.myElement').slideUp(1000); // Slides up the element with the class "myElement" over a duration of 1000 milliseconds (1 second)
});

// .toggle() - The .toggle() method in jQuery is used to toggle the visibility of elements with a sliding animation effect.

// Example:
$(document).ready(function() {
  // Toggle the visibility of an element on click
  $('#myButton').click(function() {
    $('#myElement').toggle('slow');
  });
});

// .stop() - In jQuery, the .stop() method is used to stop the animation or effects currently running on selected elements. It is often used in conjunction with animations created using methods such as .animate() or effects like .fadeIn(), .fadeOut(), .slideDown(), and so on.

// Example Syntax:
$(selector).stop(clearQueue, jumpToEnd);

// Example of Usage:
$(document).ready(function() {
  // Triggering an animation on a button click
  $('button').click(function() {
    $('.box').animate({ left: '200px' }, 2000);
  });

  // Stopping the animation on another button click
  $('#stopButton').click(function() {
    $('.box').stop();
  });
});

// 6.) CHAINING IN JQUERY

// Chaining in jQuery allows you to perform multiple actions on the same set of selected elements in a single statement. This can help simplify your code and make it more concise. jQuery methods are designed to return the selected elements themselves, allowing you to chain additional methods or operations onto them.

// Example:
$(document).ready(function() {
  $('.myElement')
    .addClass('highlight')
    .text('Hello, world!')
    .fadeOut(2000)
    .fadeIn(2000);
});

// 7.) CALLBACKS

// In jQuery, callbacks are functions that are executed after a specific event or action occurs. They are commonly used to handle asynchronous operations or to respond to user interactions. jQuery provides several methods to work with callbacks, such as $.callback(), $.Deferred(), and $.when().

// Example Event Callbacks:
// Attach a click event handler to a button
$('#myButton').click(function() {
  // Callback function executed when the button is clicked
  console.log('Button clicked!');
});

// Example Animation Callbacks:
// Animate an element's opacity and execute a callback when the animation completes
$('#myElement').animate({ opacity: 0.5 }, 1000, function() {
  // Callback function executed after the animation completes
  console.log('Animation complete!');
});

// Example Asynchronous Callbacks:
// Perform an asynchronous operation (e.g., AJAX request) with a callback
$.ajax({
  url: 'example.com/data',
  success: function(response) {
    // Callback function executed when the request succeeds
    console.log('Data received:', response);
  },
  error: function(error) {
    // Callback function executed when the request fails
    console.error('Error:', error);
  }
});

// Example Deferred Callbacks:
// Create a deferred object
var deferred = $.Deferred();

// Attach a callback to be executed when the deferred is resolved
deferred.done(function(value) {
  console.log('Deferred resolved with value:', value);
});

// Resolve the deferred with a value
deferred.resolve('Hello, world!');