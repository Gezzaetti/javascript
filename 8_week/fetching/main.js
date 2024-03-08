 const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => displayData(json));
};
fetchData();

// fetchData = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if(!response.ok) {
//             throw new Error(`Error status: ${response.status}`);
//         }
//         const data = await response.json();
//         displayData(data);
//     } catch (error) {
        
//     }
// };

const displayData = (data) => {
    const container = document.querySelector('#blogContainer');
    data.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
<h2>${post.name}</h2>
<p>${post.body}</p>
`;
container.appendChild(postElement);
    });
};