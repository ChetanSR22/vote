// Initialize vote counts
let count1 = 0;
let count2 = 0;
let count3 = 0;

// Function to update vote count display
function updateCount(option, count) {
  document.getElementById(`voteCount${option}`).textContent = count;
}

// Event listener for Option 1 vote button
document.getElementById('voteBtn1').addEventListener('click', function() {
  count1++;
  updateCount(1, count1);
  alert("You have voted for the Indias Growth")
});

// Event listener for Option 2 vote button
document.getElementById('voteBtn2').addEventListener('click', function() {
  count2++;
  updateCount(2, count2);
  alert("You have Voted for the Indias Better Education")
});


document.getElementById('voteBtn3').addEventListener('click', function() {
    count3++;
    updateCount(3, count3);
    alert(("Congratulations App AndhBhakt Ban Chuke Ho!!"));
  });
  