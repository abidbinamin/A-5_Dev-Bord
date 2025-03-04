document.getElementById('complete-btn').addEventListener('click', function() {
    this.disabled = true;
    this.classList.add('bg-gray-500', 'text-gray-500');
    alert("Board Updated Successfully");
});