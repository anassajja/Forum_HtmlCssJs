const data = {
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },
    username: "admin",
  },
  comments: [
    {
      parent: 0,
      id: 1,
      content:
        "That result means Pep Guardiola’s side cannot be caught with three league matches of their season remaining, and they will lift the Premier League trophy after Sunday’s match with Chelsea for the fifth time in the last six seasons",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [
        {
          parent: 2,
          id: 1,
          content:
            "City are the first team to win the title three years in a row since Manchester United achieved the feat between 2006 and 2009, and only the third team to do it in the history of the competition (with the other also being United between 1998 and 2001)",
          createdAt: "3 week ago",
          score: 1,
          replyingTo: "amyrobson",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "Anass",
          },
        },
        {
          parent: 2,
          id: 1,
          content:
            "For much of the season the reigning champions trailed behind Arsenal in the race for the title but a 13-match winning streak (which included a 4-1 victory over the Gunners) ultimately saw them overtake Mikel Arteta’s side",
          createdAt: "2 week ago",
          score: 6,
          replyingTo: "amyrobson",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "Reda",
          },
        },
      ],
    },
    {
      parent: 0,
      id: 2,
      content:
        "The arrival of Erling Haaland from Borussia Dortmund last summer has undoubtedly been a key part of City’s success, with the 22-year-old Norwegian netting a record-breaking 36 Premier League goals this term",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          parent: 2,
          id: 2,
          content:
            "City’s season isn’t finished here, and they will now be aiming to become the first team since Manchester United in 1998/99 to win the Premier League title, the FA Cup and the Champions League in the same campaign",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          parent: 2,
          id: 2,
          content:
            "They will face Manchester United in the FA Cup final at Wembley on 3 June, before taking on Inter Milan in the Champions League final in Istanbul seven days later",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "./images/avatars/image-jack.png",
              webp: "./images/avatars/image-jack.webp",
            },
            username: "jack",
          },
          replies: [
            {
              parent: 2,
              id: 1,
              content:
                "Manchester City are officially Premier League champions for the third successive season following Arsenal’s 1-0 defeat to Nottingham Forest",
              createdAt: "2 days ago",
              score: 1,
              replyingTo: "jack",
              user: {
                image: {
                  png: "./images/avatars/image-ramsesmiron.png",
                  webp: "./images/avatars/image-ramsesmiron.webp",
                },
                username: "david",
              },
            },
          ]
        },
        {
          parent: 2,
          id: 2,
          content:
            "PEP GUARDIOLA’S HAT-TRICK OF PREMIER LEAGUE TITLES WOWWW !!!",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "admin",
          },
        },
      ],
    },
    {
      parent: 0,
      id: 3,
      content:
        "The treble is on with an FA Cup final against Manchester United also scheduled for June 3 💀",
      createdAt: "1 year ago",
      score: 3,
      user: {
        image: {
          png: "./images/avatars/image-omar.png",
          webp: "./images/avatars/image-omar.webp",
        },
        username: "omar",
      },
      replies: [
        {
          parent: 3,
          id: 3,
          content:
            "Second world best after Barcelona 🤭😂",
          createdAt: " 3 months ago",
          score: 1,
          replyingTo: "omar",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "Ayman",
          },
        },
      ]
    }
  ],
};
function appendFrag(frag, parent) {
  var children = [].slice.call(frag.childNodes, 0);
  parent.appendChild(frag);
  //console.log(children);
  return children[1];
}

const addComment = (body, parentId, replyTo = undefined) => {
  let commentParent =
    parentId === 0
      ? data.comments
      : data.comments.filter((c) => c.id == parentId)[0].replies;
  let newComment = {
    parent: parentId,
    id:
      commentParent.length == 0
        ? 1
        : commentParent[commentParent.length - 1].id + 1,
    content: body,
    createdAt: "Now",
    replyingTo: replyTo,
    score: 0,
    replies: parent == 0 ? [] : undefined,
    user: data.currentUser,
  };
  commentParent.push(newComment);
  initComments();
};
const deleteComment = (commentObject) => {
  if (commentObject.parent == 0) {
    data.comments = data.comments.filter((e) => e != commentObject);
  } else {
    data.comments.filter((e) => e.id === commentObject.parent)[0].replies =
      data.comments
        .filter((e) => e.id === commentObject.parent)[0]
        .replies.filter((e) => e != commentObject);
  }
  initComments();
};

const promptDel = (commentObject) => {
  const modalWrp = document.querySelector(".modal-wrp");
  modalWrp.classList.remove("invisible");
  modalWrp.querySelector(".yes").addEventListener("click", () => {
    deleteComment(commentObject);
    modalWrp.classList.add("invisible");
  });
  modalWrp.querySelector(".no").addEventListener("click", () => {
    modalWrp.classList.add("invisible");
  });
};

const spawnReplyInput = (parent, parentId, replyTo = undefined) => {
  if (parent.querySelectorAll(".reply-input")) {
    parent.querySelectorAll(".reply-input").forEach((e) => {
      e.remove();
    });
  }
  const inputTemplate = document.querySelector(".reply-input-template");
  const inputNode = inputTemplate.content.cloneNode(true);
  const addedInput = appendFrag(inputNode, parent);
  addedInput.querySelector(".bu-primary").addEventListener("click", () => {
    let commentBody = addedInput.querySelector(".cmnt-input").value;
    if (commentBody.length == 0) return;
    addComment(commentBody, parentId, replyTo);
  });
};

const createCommentNode = (commentObject) => {
  const commentTemplate = document.querySelector(".comment-template");
  var commentNode = commentTemplate.content.cloneNode(true);
  commentNode.querySelector(".usr-name").textContent =
    commentObject.user.username;
  commentNode.querySelector(".usr-img").src = commentObject.user.image.webp;
  commentNode.querySelector(".score-number").textContent = commentObject.score;
  commentNode.querySelector(".cmnt-at").textContent = commentObject.createdAt;
  commentNode.querySelector(".c-body").textContent = commentObject.content;
  if (commentObject.replyingTo)
    commentNode.querySelector(".reply-to").textContent =
      "@" + commentObject.replyingTo;

  commentNode.querySelector(".score-plus").addEventListener("click", () => {
    commentObject.score++;
    initComments();
  });

  commentNode.querySelector(".score-minus").addEventListener("click", () => {
    commentObject.score--;
    if (commentObject.score < 0) commentObject.score = 0;
    initComments();
  });
  if (commentObject.user.username == data.currentUser.username) {
    commentNode.querySelector(".comment").classList.add("this-user");
    commentNode.querySelector(".delete").addEventListener("click", () => {
      promptDel(commentObject);
    });
    commentNode.querySelector(".edit").addEventListener("click", (e) => {
      const path = e.path[3].querySelector(".c-body");
      if (
        path.getAttribute("contenteditable") == false ||
        path.getAttribute("contenteditable") == null
      ) {
        path.setAttribute("contenteditable", true);
        path.focus()
      } else {
        path.removeAttribute("contenteditable");
      }
      
    });
    return commentNode;
  }
  return commentNode;
};

const appendComment = (parentNode, commentNode, parentId) => {
  const bu_reply = commentNode.querySelector(".reply");
  // parentNode.appendChild(commentNode);
  const appendedCmnt = appendFrag(commentNode, parentNode);
  const replyTo = appendedCmnt.querySelector(".usr-name").textContent;
  bu_reply.addEventListener("click", () => {
    if (parentNode.classList.contains("replies")) {
      spawnReplyInput(parentNode, parentId, replyTo);
    } else {
      //console.log(appendedCmnt.querySelector(".replies"));
      spawnReplyInput(
        appendedCmnt.querySelector(".replies"),
        parentId,
        replyTo
      );
    }
  });
};

function initComments(
  commentList = data.comments,
  parent = document.querySelector(".comments-wrp")
) {
  parent.innerHTML = "";
  commentList.forEach((element) => {
    var parentId = element.parent == 0 ? element.id : element.parent;
    const comment_node = createCommentNode(element);
    if (element.replies && element.replies.length > 0) {
      initComments(element.replies, comment_node.querySelector(".replies"));
    }
    appendComment(parent, comment_node, parentId);
  });
}

initComments();
const cmntInput = document.querySelector(".reply-input");
cmntInput.querySelector(".bu-primary").addEventListener("click", () => {
  let commentBody = cmntInput.querySelector(".cmnt-input").value;
  if (commentBody.length == 0) return;
  addComment(commentBody, 0);
  cmntInput.querySelector(".cmnt-input").value = "";
});
// addComment("Hello ! It works !!",0);
