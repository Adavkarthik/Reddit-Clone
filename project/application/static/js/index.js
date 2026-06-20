const commentsContainer =
document.getElementById("commentsContainer");

function addComment(){

    const text =
    document.getElementById("commentInput").value;

    if(!text.trim()) return;

    const commentObj = {
        text:text,
        replies:[]
    };

    renderComment(commentObj, commentsContainer);

    document.getElementById("commentInput").value="";
}

function renderComment(commentObj,parentElement){

    const commentDiv =
    document.createElement("div");

    commentDiv.classList.add("comment");

    commentDiv.innerHTML=`
        <p>${commentObj.text}</p>

        <button class="reply-btn">
            Reply
        </button>

        <div class="reply-section"></div>

        <div class="reply-container"></div>
    `;

    parentElement.appendChild(commentDiv);

    const replyBtn =
    commentDiv.querySelector(".reply-btn");

    const replySection =
    commentDiv.querySelector(".reply-section");

    const replyContainer =
    commentDiv.querySelector(".reply-container");

    replyBtn.addEventListener("click",()=>{

        if(replySection.innerHTML !== ""){
            return;
        }

        replySection.innerHTML=`
            <div class="reply-box">
                <textarea
                placeholder="Write a reply">
                </textarea>

                <button>
                    Post Reply
                </button>
            </div>
        `;

        const postReplyBtn =
        replySection.querySelector("button");

        postReplyBtn.addEventListener("click",()=>{

            const textarea =
            replySection.querySelector("textarea");

            const replyText =
            textarea.value;

            if(!replyText.trim()) return;

            const replyObj = {
                text:replyText,
                replies:[]
            };

            renderComment(
                replyObj,
                replyContainer
            );

            replySection.innerHTML="";
        });
    });
}