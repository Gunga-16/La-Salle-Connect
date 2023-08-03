const initialComments = {
    1: ["Comentário 1", "Comentário 2"],
    2: ["Comentário 1"]
};

function addComment(topicId) {
    const commentInput = document.getElementById(`commentInput${topicId}`);
    const commentText = commentInput.value.trim();
    
    if (commentText !== "") {
        const commentList = document.getElementById(`comments${topicId}`).getElementsByTagName("ul")[0];
        const newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
}

function addTopic(topicId, topicTitle, topicDescription, comments) {
    const topicList = document.getElementById("topicList");
    const newTopicItem = document.createElement("li");
    newTopicItem.innerHTML = `
        <h3>${topicTitle}</h3>
        <p>${topicDescription}</p>
        <div class="comentarios" id="comments${topicId}">
            <h4>Comentários:</h4>
            <ul>
                ${comments.map(comment => `<li>${comment}</li>`).join("")}
            </ul>
            <input type="text" placeholder="Digite seu comentário..." id="commentInput${topicId}">
            <button onclick="addComment(${topicId})">Enviar</button>
        </div>
    `;
    topicList.appendChild(newTopicItem);
}

document.addEventListener("DOMContentLoaded", function() {
    Object.keys(initialComments).forEach(topicId => {
        const comments = initialComments[topicId];
        addTopic(topicId, `Tópico ${topicId}`, `Descrição do Tópico ${topicId}...`, comments);
    });
});
