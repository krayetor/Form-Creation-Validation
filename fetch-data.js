//  Initialize the Async Function
async function fetchUserData() {
    // Defining the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Selecting the data container
    const dataContainer = document.getElementById('api-data');

    try {
        // fetching data using the try-catch
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clearing the Loading Message
        dataContainer.innerHTML = '';

        // Create and Append User List
        const userList = document.createElement('ul');
        
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // Error Handling
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded',fetchUserData);