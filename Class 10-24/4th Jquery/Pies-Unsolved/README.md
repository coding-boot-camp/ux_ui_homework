# Order Form

In this activity, you will create a order for that tallies the quantity of items ordered and triggers a modal with that information for confirmation.

## Instructions

- Open `form.html` in a text editor and take a minute to inspect the code.

- Add a modal that is triggered when the `#submitOrder` button.  The modal should have:

   1. The title "Thank you for your order!"

   2. A "Confirm Order" button that dismisses the modal.

   3. A "Cancel" button that also closes the modal.

- Open `form.js` and create JavaScript code to complete the following:

  1. Create an event listener on the `#submitOrder` button.

  2. Retrieve the values from the the input fields and store the results as a variable.

  3. Write conditionals for each input variable that:

     - Re-assign the value to `0` if the input was an empty string.

     - If it is not an empty string, re-assign the variable value to be the value of the input converted to an integer using `parseInt()`.

  4. Create a variable that holds the sum of the variables.

  5. Alter the HTML of the `.modal-body` that says "Please confirm your order of {the total number} pies!"

## Hint

- You will use three different if/else statements: one for each variable.

## Bonus

- If a user enters a value that is not able to converted to an integer, the sum returns as `NaN`. Write a conditional that:

  1. Checks that the sum of pies is not 'Nan`. (Look for a JavaScript function to do this.)

  1. Checks that the total is not 0.

  1. If either of the above conditions are true, modify the modal content to read "Please enter number values for the amount."
