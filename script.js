// Sample comments data
const commentData = [
    {
        name: "Jennifer Moore",
        avatar: "https://randomuser.me/api/portraits/women/41.jpg",
        text: "Day 11 changed EVERYTHING for me too! I manifested an unexpected tax refund of $4,620 two days after listening to it!",
        time: "Just now"
    },
    {
        name: "Michael Thompson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "That's amazing! I'm on Day 7 and already feeling so much more positive about money. Can't wait to see what Day 11 brings!",
        time: "Just now"
    },
    {
        name: "Elizabeth Chase",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        text: "I found headphones work better for me, especially at night. My first manifestation came on Day 4! 💫",
        time: "Just now"
    },
    {
        name: "David Wilson",
        avatar: "https://randomuser.me/api/portraits/men/88.jpg",
        text: "Incredible! I'm so inspired by your journey. Just ordered mine today and can't wait to start.",
        time: "Just now"
    },
    {
        name: "Patricia Garcia",
        avatar: "https://randomuser.me/api/portraits/women/63.jpg",
        text: "The same thing happened to me with Day 14! It's like it unlocks something in your brain. I now have 2 passive income streams generating $2,700/month!",
        time: "Just now"
    },
    {
        name: "Richard Taylor",
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        text: "I was skeptical too but these melodies are the real deal. Just stick with it and trust the process!",
        time: "Just now"
    },
    {
        name: "Susan Martinez",
        avatar: "https://randomuser.me/api/portraits/women/74.jpg",
        text: "Day 21 was life-changing for me too! I've paid off $18,400 in debt since completing the program 2 months ago!",
        time: "Just now"
    },
    {
        name: "Kevin Johnson",
        avatar: "https://randomuser.me/api/portraits/men/66.jpg",
        text: "I'm in my second week and already manifested a $3,270 opportunity! Can't believe I waited so long to try this.",
        time: "Just now"
    }
];

// Sample new post data
const newPostData = [
    {
        name: "Linda Parker",
        avatar: "https://randomuser.me/api/portraits/women/91.jpg",
        badge: "Day 8",
        badgeClass: "badge-primary",
        text: "OMG!!!! 😱 Just finished the 'Opportunity Vision Activator' melody this morning and my phone rang immediately after. It was for a job interview I applied for 6 months ago and had given up on! The position now pays $22k more than originally listed! This is WILD! #ManifestingMelodies",
        likes: 5,
        comments: 2,
        shares: 0
    },
    {
        name: "Carlos Rodriguez",
        avatar: "https://randomuser.me/api/portraits/men/72.jpg",
        badge: "Day 19",
        badgeClass: "badge-primary",
        text: "The 'Childhood Money Wound Healer' melody is hitting DEEP. I've been in tears all morning as I'm finally releasing financial trauma from my childhood. Already feeling lighter and more abundant. For anyone hesitating - this is about so much more than money. It's healing on every level. ✨",
        likes: 12,
        comments: 4,
        shares: 1
    },
    {
        name: "Emma Watson",
        avatar: "https://randomuser.me/api/portraits/women/15.jpg",
        badge: "New Member",
        badgeClass: "badge-warning",
        text: "Just purchased and starting Day 1 today! 🎉 So inspired by all your incredible stories here. Quick question - is it normal to feel tingling in your head while listening to the melodies? It's like my brain is being rewired in real-time!",
        likes: 8,
        comments: 7,
        shares: 0
    }
];

// New user names for typing indicators
const typingUsers = [
    "Mark Davis", "Sarah Wilson", "James Taylor", "Jessica Brown", 
    "Michael Johnson", "Emily Martinez", "Robert Anderson", "Michelle Thompson"
];

// Create and append a comment to a post
function createComment(postElement, commentData) {
    const commentSection = document.createElement('div');
    commentSection.className = 'post-comments';
    commentSection.style.borderTop = '1px solid #E4E6EB';
    commentSection.style.marginTop = '10px';
    commentSection.style.paddingTop = '10px';
    
    const commentEl = document.createElement('div');
    commentEl.className = 'comment';
    commentEl.style.display = 'flex';
    commentEl.style.marginBottom = '10px';
    commentEl.style.animation = 'fadeIn 0.5s ease-in-out';
    
    commentEl.innerHTML = `
        <div class="post-avatar" style="background-image: url('${commentData.avatar}'); width: 32px; height: 32px;"></div>
        <div style="margin-left: 8px; background-color: #F0F2F5; border-radius: 18px; padding: 8px 12px; flex-grow: 1;">
            <div style="font-weight: bold; font-size: 13px;">${commentData.name}</div>
            <div style="font-size: 14px;">${commentData.text}</div>
        </div>
    `;
    
    const commentTimeEl = document.createElement('div');
    commentTimeEl.style.fontSize = '12px';
    commentTimeEl.style.color = '#65676B';
    commentTimeEl.style.marginLeft = '48px';
    commentTimeEl.style.marginTop = '2px';
    commentTimeEl.textContent = commentData.time;
    
    commentSection.appendChild(commentEl);
    commentSection.appendChild(commentTimeEl);
    
    // Find where to insert the comment section
    const actionsSection = postElement.querySelector('.post-actions');
    
    // Check if comments section already exists
    let existingComments = postElement.querySelector('.post-comments');
    
    if (existingComments) {
        // Insert just the new comment at the top of existing comments
        existingComments.insertBefore(commentEl, existingComments.firstChild);
        existingComments.insertBefore(commentTimeEl, existingComments.childNodes[1]);
    } else {
        // Insert the whole new comments section
        postElement.insertBefore(commentSection, actionsSection.nextSibling);
    }
    
    // Update the comment count in the post actions
    const commentButton = postElement.querySelector('.action-button:nth-child(2)');
    const currentComments = parseInt(commentButton.innerText.match(/\d+/)[0]);
    commentButton.innerHTML = `<span class="icon">💬</span> Comment (${currentComments + 1})`;
}

// Create a new post and add it to the top of the feed
function createNewPost(postData) {
    const postContainer = document.createElement('div');
    postContainer.className = 'post';
    postContainer.style.animation = 'fadeIn 0.5s ease-in-out';
    
    postContainer.innerHTML = `
        <div class="post-header">
            <div class="post-avatar" style="background-image: url('${postData.avatar}');"></div>
            <div class="post-meta">
                <div class="post-author">${postData.name} <span class="badge ${postData.badgeClass}">${postData.badge}</span></div>
                <div class="post-time">Just now</div>
            </div>
        </div>
        <div class="post-content">
            ${postData.text}
        </div>
        <div class="post-actions">
            <div class="action-button">
                <span class="icon">👍</span> Like (${postData.likes})
            </div>
            <div class="action-button">
                <span class="icon">💬</span> Comment (${postData.comments})
            </div>
            <div class="action-button">
                <span class="icon">🔄</span> Share (${postData.shares})
            </div>
        </div>
    `;
    
    // Add typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = `
        <span>${typingUsers[Math.floor(Math.random() * typingUsers.length)]} is typing</span>
        <div class="typing-dots">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    
    // Insert typing indicator before post actions
    const postActions = postContainer.querySelector('.post-actions');
    postContainer.insertBefore(typingIndicator, postActions);
    
    // Add the post to the top of the feed (after new post indicator)
    const newPostIndicator = document.getElementById('newPostIndicator');
    newPostIndicator.parentNode.insertBefore(postContainer, newPostIndicator.nextSibling);
    
    return postContainer;
}

// Initialize the post counter
let newPostsCount = 0;

// Simulate new posts appearing
function showNewPostNotification() {
    newPostsCount++;
    const newPostIndicator = document.getElementById('newPostIndicator');
    newPostIndicator.innerHTML = `<span>${newPostsCount} New Post${newPostsCount > 1 ? 's' : ''}</span>`;
    newPostIndicator.classList.add('visible');
    
    // Automatically add a new post after some time
    setTimeout(() => {
        const randomPostIndex = Math.floor(Math.random() * newPostData.length);
        const newPost = createNewPost(newPostData[randomPostIndex]);
        
        // Reset the notification
        newPostIndicator.classList.remove('visible');
        setTimeout(() => {
            newPostsCount = 0;
        }, 300);
        
        // Sometimes add an immediate comment to the new post
        if (Math.random() > 0.5) {
            setTimeout(() => {
                const randomCommentIndex = Math.floor(Math.random() * commentData.length);
                createComment(newPost, commentData[randomCommentIndex]);
            }, 5000 + Math.random() * 5000);
        }
    }, 3000 + Math.random() * 2000);
}

// Start the new post notification cycle
setInterval(showNewPostNotification, 30000 + Math.random() * 30000);

// Schedule the first notification sooner
setTimeout(showNewPostNotification, 10000);

// Add comments to existing posts periodically
const posts = document.querySelectorAll('.post');

function addRandomComment() {
    const randomPostIndex = Math.floor(Math.random() * posts.length);
    const randomCommentIndex = Math.floor(Math.random() * commentData.length);
    const post = posts[randomPostIndex];
    createComment(post, commentData[randomCommentIndex]);
}

// Add first comments sooner
setTimeout(addRandomComment, 5000);
setTimeout(addRandomComment, 12000);

// Continue adding comments periodically
setInterval(addRandomComment, 15000 + Math.random() * 15000);

// Add more live interactions (likes increasing)
let likeCount = 0;

setInterval(() => {
    const randomPost = Math.floor(Math.random() * posts.length);
    const likeButton = posts[randomPost].querySelector('.action-button:first-child');
    const currentLikes = parseInt(likeButton.innerText.match(/\d+/)[0]);
    likeButton.innerHTML = `<span class="icon">👍</span> Like (${currentLikes + 1})`;
    
    // Sometimes increase shares too
    if (Math.random() > 0.8) {
        const shareButton = posts[randomPost].querySelector('.action-button:nth-child(3)');
        const currentShares = parseInt(shareButton.innerText.match(/\d+/)[0]);
        shareButton.innerHTML = `<span class="icon">🔄</span> Share (${currentShares + 1})`;
    }
}, 3000 + Math.random() * 2000);

// Simulate typing indicators appearing and disappearing
function updateTypingIndicators() {
    const typingIndicators = document.querySelectorAll('.typing-indicator');
    
    typingIndicators.forEach(indicator => {
        // 30% chance to toggle visibility
        if (Math.random() > 0.7) {
            indicator.style.display = indicator.style.display === 'none' ? 'flex' : 'none';
        }
        
        // 20% chance to change the name of who's typing
        if (Math.random() > 0.8 && indicator.style.display !== 'none') {
            const nameSpan = indicator.querySelector('span');
            const randomName = typingUsers[Math.floor(Math.random() * typingUsers.length)];
            nameSpan.textContent = `${randomName} is typing`;
        }
    });
}

// Update typing indicators periodically
setInterval(updateTypingIndicators, 5000);

// Update online member count with a natural fluctuation
function updateOnlineCount() {
    const onlineCountEl = document.querySelector('.stats .stat-item:nth-child(2) .stat-number');
    const membersOnlineText = document.querySelector('.members-online strong');
    
    // Get current count
    const currentOnline = parseInt(onlineCountEl.innerText.replace(',', ''));
    
    // Calculate a natural fluctuation (more ups than downs, trending slowly upward)
    let change;
    const rand = Math.random();
    
    if (rand < 0.6) { // 60% chance of increase
        change = Math.floor(Math.random() * 10) + 1; // +1 to +10
    } else if (rand < 0.9) { // 30% chance of decrease
        change = -Math.floor(Math.random() * 8); // -1 to -7
    } else { // 10% chance of larger increase (new wave of users)
        change = Math.floor(Math.random() * 30) + 10; // +10 to +39
    }
    
    // Apply the change with natural formatting
    const newCount = currentOnline + change;
    onlineCountEl.innerText = newCount.toLocaleString();
    membersOnlineText.innerText = `${newCount.toLocaleString()} members`;
}

// Update online count frequently for liveliness
setInterval(updateOnlineCount, 5000);

// Update total members count occasionally (trending upward)
function updateTotalMembers() {
    const totalMembersEl = document.querySelector('.stats .stat-item:nth-child(1) .stat-number');
    const currentTotal = parseInt(totalMembersEl.innerText.replace(',', ''));
    
    // Always increase, by 1-5
    const increase = Math.floor(Math.random() * 5) + 1;
    totalMembersEl.innerText = (currentTotal + increase).toLocaleString();
}

// Update total members count less frequently
setInterval(updateTotalMembers, 15000);

// Update manifestation count (total successes)
function updateManifestationCount() {
    const manifestationsEl = document.querySelector('.stats .stat-item:nth-child(3) .stat-number');
    const currentCount = parseFloat(manifestationsEl.innerText.replace('M', ''));
    
    // Increase by a small amount
    const increase = Math.random() * 0.01; // 0 to 0.01M (0 to 10,000)
    const newCount = (currentCount + increase).toFixed(1);
    manifestationsEl.innerText = newCount + 'M';
}

// Update manifestation count periodically
setInterval(updateManifestationCount, 20000);