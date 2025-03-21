document.addEventListener('DOMContentLoaded', function() {
  const completeButtons = document.querySelectorAll('#complete-btn');
  const taskCountElement = document.querySelector('#task-card p');
  const taskAddElement = document.querySelector('#task-add');
  const activityLog = document.getElementById('activity');

  
  completeButtons.forEach(button => {
    button.addEventListener('click', function() {
          const taskCard = this.closest('.bg-blue-50');
      const taskName = taskCard.querySelector('h2').textContent;
          const currentTime = new Date().toLocaleTimeString();

          alert('Board updated successfully');

          let currentTaskCount = parseInt(taskCountElement.textContent);
          
          if (currentTaskCount > 0) {
              taskCountElement.textContent = currentTaskCount - 1;
          }


          let currentNavbarCount = parseInt(taskAddElement.textContent);
          taskAddElement.textContent = currentNavbarCount + 1;


          const activityMessage = document.createElement('p');
          
          activityMessage.textContent = `You have completed the task ${taskName} at ${currentTime}`;
          activityLog.insertBefore(activityMessage, activityLog.lastElementChild);

          this.disabled = true;
          this.classList.remove('bg-blue-500', 'hover:bg-blue-600');
          this.classList.add('bg-gray-400', 'cursor-not-allowed');

          
          checkAllCompleted();
      });
  });

  function checkAllCompleted() {
    const remainingButtons = document.querySelectorAll('#complete-btn:not([disabled])');
      if (remainingButtons.length === 0) {
          alert("Congrats!!! You have completed all the current tasks");
      }
  }
});



// clear history

document.addEventListener('DOMContentLoaded', function() {
    const clearHistoryButton = document.querySelector('#clear-history-btn');
    const activityLog = document.getElementById('activity');
  
    if (clearHistoryButton && activityLog) {
      clearHistoryButton.addEventListener('click', function() {
        const activityMessages = activityLog.querySelectorAll('p');
        activityMessages.forEach(message => {
          message.remove();
        });
      });
    }
    }
  );