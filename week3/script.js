const topicsData = [
  { id: 1, title: "crypto"},
  { id: 2, title: "tesla"},
];

const commentsData = [
  { topicId: 1, content: "Comments." },
  { topicId: 2, content: "Comments." },
];

function displayTopics() {
  const topicList = document.getElementById("topic-list");
  topicList.innerHTML = "";

  topicsData.forEach((topic) => {
    const li = document.createElement("li");
    li.textContent = topic.title;
    li.addEventListener("click", () => displayDiscussion(topic));
    topicList.appendChild(li);
  });
}

function displayDiscussion(topic) {
  const discussionContent = document.getElementById("discussion-content");
  discussionContent.innerHTML = "";

  const topicHeader = document.createElement("h3");
  topicHeader.textContent = topic.title;
  discussionContent.appendChild(topicHeader);

  const topicContent = document.createElement("p");
  topicContent.textContent = topic.content;
  discussionContent.appendChild(topicContent);

  const topicComments = commentsData.filter(
    (comment) => comment.topicId === topic.id
  );

  topicComments.forEach((comment) => {
    const commentText = document.createElement("p");
    commentText.textContent = comment.content;
    discussionContent.appendChild(commentText);
  });
}

const commentForm = document.getElementById("comment-form");
commentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const commentTextarea = document.getElementById("comment");
  const commentContent = commentTextarea.value.trim();

  if (commentContent !== "") {

    const discussionContent = document.getElementById("discussion-content");
    const commentText = document.createElement("p");
    commentText.textContent = commentContent;
    discussionContent.appendChild(commentText);

    commentTextarea.value = "";
  }
});

displayTopics();
