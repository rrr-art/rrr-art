
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pixel Pulse - Your Gaming Hub</title>
    <link rel="stylesheet" href="style.css">
    </head>
<body>
    <header>
        <nav>
            <div class="logo">Pixel Pulse</div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Community</a></li>
            </ul>
        </nav>
    </header>

    <section id="featured-game">
        <div class="hero-content">
            <h1>Featured: Eldoria Saga - A Review</h1>
            <p>Dive into the epic world and see if the graphics live up to the hype!</p>
            <a href="#" class="btn-read-more">Read Full Review</a>
        </div>
    </section>

    <div class="container">
        <main id="main-content">
            <article class="post-card">
                <h2>Top 10 RPGs to Play This Winter</h2>
                <p class="meta">By GameMaster | Nov 29, 2025</p>
                <img src="images/rpg_preview.jpg" alt="Preview of RPG games">
                <p>From open-world epics to cozy indies, we break down the best games to sink hundreds of hours into.</p>
                <a href="#">Continue Reading...</a>
            </article>

            </main>

        <aside id="sidebar">
            <div class="widget">
                <h3>Popular Tags</h3>
                <span class="tag">#FPS</span>
                <span class="tag">#Indie</span>
                <span class="tag">#Esports</span>
            </div>
            <div class="widget">
                <h3>Latest Videos</h3>
                <p>Check out our latest gameplay trailer!</p>
            </div>
        </aside>
    </div>

    <footer>
        <p>&copy; 2025 Pixel Pulse. All rights reserved.</p>
    </footer>

    <script src="script.js">/* Styling the Navigation Bar (Header) */
header {
    background-color: var(--secondary-color);
    color: var(--light-text);
    padding: 1rem 0;
}

nav ul li a {
    color: var(--light-text); /* Ensure links in the nav are white */
}

/* Styling the Main Content and Sidebar containers */
#main-content {
    background: var(--secondary-color);
    padding: 20px;
    border-radius: 8px;
}

#sidebar {
    background: var(--secondary-color);
    padding: 20px;
    border-radius: 8px;
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real-Time Collaborative Chat</title>
    <!-- Tailwind CSS CDN for styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Inter Font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        /* Style for the main chat window to ensure it takes up the available space */
        .chat-container {
            display: flex;
            flex-direction: column;
            height: 90vh; /* Responsive height */
            max-width: 600px;
            margin: 20px auto;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .message-area {
            flex-grow: 1;
            overflow-y: auto;
            padding: 1rem;
            background-color: #f7f7f7;
            border-bottom: 1px solid #e0e0e0;
        }
        .message-bubble {
            max-width: 85%;
            padding: 8px 12px;
            border-radius: 18px;
            margin-bottom: 10px;
            word-wrap: break-word;
        }
        .self-message {
            margin-left: auto;
            background-color: #3b82f6; /* Blue 500 */
            color: white;
            border-bottom-right-radius: 2px;
        }
        .other-message {
            background-color: #ffffff; /* White */
            border: 1px solid #e5e7eb; /* Gray 200 */
            border-bottom-left-radius: 2px;
        }
        .username-field {
            transition: all 0.3s ease;
        }
    </style>
</head>
<body class="bg-gray-50 p-2 sm:p-4">

    <!-- Main Chat Container -->
    <div class="chat-container">
        <!-- Header -->
        <header class="bg-indigo-600 text-white p-4 shadow-md flex justify-between items-center">
            <h1 class="text-xl font-bold">Real-Time Chat Room</h1>
            <!-- Full User ID for collaboration -->
            <div id="user-info" class="text-xs opacity-80 rounded-full bg-indigo-700 py-1 px-3">Loading User...</div>
        </header>
        
        <!-- Username Input Area -->
        <div id="username-container" class="p-3 bg-yellow-50 border-b border-yellow-200 username-field">
            <form id="username-form" class="flex space-x-2 items-center">
                <label for="username-input" class="text-sm font-medium text-gray-700 whitespace-nowrap">Your Name:</label>
                <input type="text" id="username-input" placeholder="Choose a display name" maxlength="20"
                       class="flex-grow p-2 border border-yellow-400 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
                       required>
                <button type="submit" id="save-username-btn"
                        class="bg-yellow-500 text-white p-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-150 shadow-sm text-sm">
                    Save
                </button>
            </form>
        </div>

        <!-- Message Display Area -->
        <div id="message-area" class="message-area">
            <div id="loading-spinner" class="text-center p-8 text-gray-500">
                <svg class="animate-spin h-5 w-5 mr-3 inline text-indigo-500" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Connecting to Chat...
            </div>
        </div>

        <!-- Message Input Form -->
        <div class="p-3 bg-white border-t border-gray-200">
            <form id="message-form" class="flex space-x-2">
                <input type="text" id="message-input" placeholder="Type your message

