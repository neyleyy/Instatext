```javascript
/* =========================
   ZMIANA STRON
========================= */

function showPage(page, button) {

    document.getElementById("home").style.display = "none";
    document.getElementById("explore").style.display = "none";
    document.getElementById("profile").style.display = "none";

    document.getElementById(page).style.display = "block";

    document.querySelectorAll(".nav-button").forEach(function(btn) {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    window.scrollTo(0, 0);
}


/* =========================
   PROFIL
========================= */

function showProfile() {
    showPage("profile");
}


/* =========================
   LAJKI
========================= */

function likePost(element) {

    const post = element.closest(".post");
    const likesElement = post.querySelector(".likes");

    let likes = parseInt(
        likesElement.textContent.replace(/[^0-9]/g, "")
    );

    if (element.classList.contains("liked")) {

        element.classList.remove("liked");
        element.innerHTML = "♡";
        likes--;

    } else {

        element.classList.add("liked");
        element.innerHTML = "♥";
        likes++;

    }

    likesElement.textContent =
        likes.toLocaleString("en-US") + " likes";
}


/* =========================
   OTWIERANIE KOMENTARZY
========================= */

function toggleComments(element) {

    const commentsBox =
        element.parentElement.querySelector(".comment-section");

    if (!commentsBox) {
        return;
    }

    commentsBox.classList.toggle("open");

    if (commentsBox.classList.contains("open")) {

        element.textContent = "Hide comments";

    } else {

        element.textContent = "View all comments";

    }
}


/* =========================
   DODAWANIE KOMENTARZA
========================= */

function addComment(button) {

    const post =
        button.closest(".post");

    const input =
        post.querySelector(".comment-input");

    const commentList =
        post.querySelector(".comment-list");

    const text =
        input.value.trim();

    if (text === "") {
        return;
    }

    const comment =
        document.createElement("div");

    comment.className = "comment";


    const content =
        document.createElement("div");

    content.className = "comment-content";

    const username =
        document.createElement("b");

    username.textContent = "@you";

    content.appendChild(username);

    content.appendChild(
        document.createTextNode(" " + text)
    );


    const replyButton =
        document.createElement("button");

    replyButton.className = "reply-button";
    replyButton.textContent = "Reply";

    replyButton.onclick = function() {
        showReplyBox(this);
    };


    const replies =
        document.createElement("div");

    replies.className = "replies";


    comment.appendChild(content);
    comment.appendChild(replyButton);
    comment.appendChild(replies);

    commentList.appendChild(comment);

    input.value = "";
}


/* =========================
   ENTER = KOMENTARZ
========================= */

function handleCommentKey(event, input) {

    if (event.key === "Enter") {

        const button =
            input.parentElement.querySelector(".comment-button");

        addComment(button);
    }
}


/* =========================
   REPLY — OTWIERANIE POLA
========================= */

function showReply
```

