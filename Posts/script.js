let video = document.querySelectorAll("video")
video.forEach(video => {
    let playPromise = video.play()
    if(playPromise !== undefined) {
        playPromise.then(() => {
            let observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    video.muted = false
                    if(entry.intersectionRatio !== 1 && !video.paused){
                        video.pause()
                    } else if (entry.intersectionRatio > 0.5 && video.paused) {
                        video.play()
                    }
                })
            }, {threshold: 0.5})
            observer.observe(video)
        })
    }
})

// Sélectionner tous les éléments avec la classe .fas.fa-heart.fa-lg
let icons = document.querySelectorAll (".fas.fa-heart.fa-lg");

// Parcourir la liste des éléments
icons.forEach (function (icon) {
  // Ajouter un écouteur d'événement click à chaque élément
  icon.addEventListener ("click", function () {
    // Changer la couleur du svg à rouge si il est noir, ou à noir si il est rouge
    if (icon.style.color === "black") {
      icon.style.color = "red";
    } else {
      icon.style.color = "black";
    }
  });
});

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
        "Am I the only one who thinks Alvarez is better than Halland.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [{
        parent: 2,
        id: 1,
        content:
          "how is he better?",
        createdAt: "1 week ago",
        score: 4,
        replyingTo: "amyrobson",
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
        id: 1,
        content:
          "way more class…Haaland is good striker but really bad footballer…Alvarez is good at both.",
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
      {
        parent: 2,
        id: 1,
        content:
          "bad footballer ? Okay the guy scored a useless goal and now his better than harland come on theres a reason why haaland is top choice for the ballon dor",
        createdAt: "1 week ago",
        score: 4,
        replyingTo: "admin",
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
        id: 1,
        content:
          "Bro thats some fifa ultimate team logic you brought there 💀",
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
        id: 1,
        content:
          "yaa that's what I'm talking about na he can score goal but he can't take the ball and dribble through 2-3 defenders",
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
      },],
    },
    {
      parent: 0,
      id: 2,
      content:
        "Chelsea gonna be dangerous next season",
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
          id: 1,
          content:
            "People that are laughing at chelsea are not realising that they didn't spend so much for no reason, they literally bought almost a whole new 11, they might now have chemistry and be out of form right now, but when all these expensive players actually start playing well together, chelsea will become a dangerous team",
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
          id: 1,
          content:
            "Well said mate, you know ball",
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
      id: 2,
      content:
        "All good Players grow in the Bundesliga..imagine they hold players like haaland Bellingham nkunku rüdiger alaba kroos gündogan nkunku sancho…Bundesliga best league…PL can only buy players…like a Bad Kid on Ultimate Team with a Tots team that cant play ..PL boring",
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
          id: 1,
          content:
            " hahahaha hilarious considering Haaland, Bellingham, Nkunku and Sancho were all purchased 😭😭😂😂😂",
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
          id: 1,
          content:
            "Chelsea’s academy is still one of the best itw a lot of good players hv come from there",
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
const commentIcons = document.querySelectorAll('.video-icons .fas.fa-comment-dots.fa-lg');
const closeDialogButton = document.getElementById('close-dialog');
const dialogOverlay = document.querySelector('.dialog-overlay');

// Ajout des listeners pour ouvrir et fermer la boîte de dialogue
for (let i = 0; i < commentIcons.length; i++) {
  const commentIcon = commentIcons[i];

  var modal = document.getElementById("create-post-modal");

  commentIcon.addEventListener('click', () => {
    dialogOverlay.style.display = 'block';
  });
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const followButtons = document.querySelectorAll('.follow-button');

// Fonction pour basculer entre "Follow" et "Following"
function toggleFollow() {
 if (this.textContent === 'Follow') {
 this.textContent = 'Following';
 this.style.backgroundColor = 'red';
 this.style.color = 'white';
 if (this.classList.contains('following')) {
 this.style.animationPlayState = 'running';
 }
 } else {
 this.textContent = 'Follow';
 this.style.backgroundColor = 'transparent';
 this.style.color = 'rgb(254, 44, 85)';
 if (this.classList.contains('following')) {
 this.style.animationPlayState = 'paused';
 }
 }
}

// Application de la fonction à chaque bouton
followButtons.forEach(button => {
 button.addEventListener('click', toggleFollow);
});

var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    if (this.classList.contains('following')) {
      this.classList.remove('following');
      this.style.animationPlayState = 'running';
    } else {
      this.classList.add('following');
      this.style.animationPlayState = 'paused';
    }
  });
}
const shareButtons = document.querySelectorAll('.share-btn');
const shareOptions = document.querySelectorAll('.share-options');

shareButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    shareOptions[index].classList.toggle('active');
  });
});

const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

const scrollUpButton = document.getElementById('scroll-up');
const scrollDownButton = document.getElementById('scroll-down');
const postContainer = document.querySelector('.right');
const posts = postContainer.querySelectorAll('.post');

let currentIndex = 0; // Indice du post actuel
let isScrolling = false; // Suivre si le défilement est en cours

scrollUpButton.addEventListener('click', function() {
  if (currentIndex === 0) {
    postContainer.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    currentIndex--;
    const currentPost = posts[currentIndex];
    isScrolling = true;
    currentPost.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

scrollDownButton.addEventListener('click', function() {
  if (currentIndex === posts.length - 1) {
    postContainer.scrollTo({ top: postContainer.scrollHeight, behavior: 'smooth' });
  } else {
    currentIndex++;
    const currentPost = posts[currentIndex];
    isScrolling = true;
    currentPost.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

postContainer.addEventListener('scroll', function() {
  if (!isScrolling) {
    const scrollPosition = postContainer.scrollTop;
    const postHeight = postContainer.scrollHeight / posts.length;
    const newCurrentIndex = Math.floor(scrollPosition / postHeight);
    
    if (newCurrentIndex !== currentIndex) {
      currentIndex = newCurrentIndex;
      const currentPost = posts[currentIndex];
      isScrolling = true;
      currentPost.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  if (postContainer.scrollTop === 0) {
    scrollUpButton.style.display = 'none';
  } else {
    scrollUpButton.style.display = 'block';
  }

  if (postContainer.scrollTop + postContainer.clientHeight >= postContainer.scrollHeight - 1) {
    scrollDownButton.style.display = 'none';
  } else {
    scrollDownButton.style.display = 'block';
  }
});






