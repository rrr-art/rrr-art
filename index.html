<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>RR Website</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #2c3e50; color: #ecf0f1; padding: 20px; }
        h1 { color: #e74c3c; border-bottom: 2px solid #34495e; padding-bottom: 10px; }
        #chat-container { display: flex; flex-direction: column; max-width: 800px; margin: 0 auto; }
        #chat-log { height: 400px; overflow-y: auto; border: 1px solid #34495e; padding: 15px; margin-bottom: 15px; background-color: #34495e; border-radius: 8px; }
        .message { margin-bottom: 8px; line-height: 1.4; }
        .sender { font-weight: bold; color: #f1c40f; margin-right: 5px; }
        #message-input-area { display: flex; }
        #username-input { flex-grow: 0.1; padding: 10px; border: none; background-color: #444; color: white; border-radius: 4px 0 0 4px; }
        #message-input { flex-grow: 0.7; padding: 10px; border: none; background-color: #444; color: white; }
        #message-submit { flex-grow: 0.2; padding: 10px; background-color: #e74c3c; color: white; border: none; cursor: pointer; border-radius: 0 4px 4px 0; transition: background-color 0.2s; }
        #message-submit:hover { background-color: #c0392b; }
    </style>
</head>
<body>
    <div id="chat-container">
        <h1>RR Chat: Global Room</h1>
        
        <input type="text" id="username-input" placeholder="Your Rrr-art Username" value="RrrUser">
        
        <div id="chat-log"></div>

        <div id="message-input-area">
            <input id="message-input" type="text" placeholder="Type your message here...">
            <input id="message-submit" type="button" value="Send">
        </div>
    </div>
    
    <script>
        // Use wss (WebSocket Secure) in a live environment, but ws for local testing
        const roomName = 'rrr_global_chat';
        const chatSocket = new WebSocket(
            'ws://' + window.location.host +
            '/ws/chat/' + roomName + '/'
        );

        // --- 1. Handle Incoming Messages ---
        chatSocket.onmessage = function(e) {
            const data = JSON.parse(e.data);
            const message = data.message;
            const username = data.username;
            
            const log = document.querySelector('#chat-log');
            
            // Create a new message element and append it
            const msgElement = document.createElement('div');
            msgElement.classList.add('message');
            msgElement.innerHTML = `<span class="sender">${username}:</span> ${message}`;
            
            log.appendChild(msgElement);
            log.scrollTop = log.scrollHeight; // Auto-scroll
        };

        chatSocket.onclose = function(e) {
            console.error('Chat socket closed unexpectedly');
            alert('Connection lost. Please refresh the page.');
        };
        
        // --- 2. Handle Outgoing Messages ---
        document.querySelector('#message-submit').onclick = function(e) {
            const messageInputDom = document.querySelector('#message-input');
            const message = messageInputDom.value.trim();
            const username = document.querySelector('#username-input').value.trim() || 'Anonymous';
            
            if (message === '') return; // Don't send empty messages

            chatSocket.send(JSON.stringify({
                'message': message,
                'username': username
            }));

            messageInputDom.value = ''; // Clear the input field
            messageInputDom.focus(); // Keep focus on the input
        };
        
        // --- 3. Allow sending with ENTER key ---
        document.querySelector('#message-input').onkeyup = function(e) {
            if (e.keyCode === 13) {  // 13 is the Enter key
                document.querySelector('#message-submit').click();
            }
        };
    </script>
</body>
</html># File: chat/consumers.py (The WebSocket Handler)

import json
from channels.generic.websocket import AsyncWebsocketConsumer

# IMPORTANT: In a real app, this would use the database 
# to save the message and determine the private 'room' name 
# for a one-on-one chat (e.g., 'chat_user1_user2').
# For this example, we'll use a simple public 'room' for demonstration.

class RrrChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # The room name will be fixed for this example (e.g., a public chat)
        self.room_name = 'rrr_global_chat'
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data['message']
        username = data['username'] # Passed from the JavaScript

        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message', # This calls the chat_message method below
                'message': message,
                'username': username
            }
        )

    # Receive message from room group (Called by group_send)
    async def chat_message(self, event):
        message = event['message']
        username = event['username']

        # Send message back to the WebSocket (to the browser)
        await self.send(text_data=json.dumps({
            'username': username,
            'message': message
        }))# File: chat/consumers.py (The WebSocket Handler)

import json
from channels.generic.websocket import AsyncWebsocketConsumer

# This consumer handles the real-time message passing for the Rrr Chat website.
class RrrChatConsumer(AsyncWebsocketConsumer):
    
    # 1. Connect: Called when the browser opens the WebSocket connection
    async def connect(self):
        # Define the unique group name (room) for the chat
        self.room_name = self.scope['url_route']['kwargs']['room_name'] # Gets 'rrr_global_chat'
        self.room_group_name = 'chat_%s' % self.room_name

        # Add the current user's channel to the group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept() # Accept the connection

    # 2. Disconnect: Called when the browser closes the WebSocket connection
    async def disconnect(self, close_code):
        # Remove the user's channel from the group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # 3. Receive: Called when the server receives a message from a WebSocket (from the JS)
    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data['message']
        username = data['username']

        # Send the message and username to the entire group/room
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message', # Calls the method below
                'message': message,
                'username': username
            }
        )

    # 4. chat_message: Called when the group receives a message (from the server)
    async def chat_message(self, event):
        message = event['message']
        username = event['username']

        # Send the message back to the individual WebSocket (to all browsers in the group)
        await self.send(text_data=json.dumps({
            'username': username,
            'message': message
        }))from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView # Import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # 1. Django Authentication URLs (Login, Logout, etc.)
    # By default, these URLs look for templates in a 'registration/' folder.
    path('accounts/', include('django.contrib.auth.urls')), 
    
    # 2. Add the path for your Rrr Chat application (we'll start with a homepage)
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
    
    # This is where your /chat/ URLs will eventually go:
    path('chat/', include('chat.urls')), 
]<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rrr | Login</title>
    <style>
        body { font-family: sans-serif; background-color: #2c3e50; color: #ecf0f1; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
        .login-box { background-color: #34495e; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); width: 350px; }
        h2 { color: #e74c3c; text-align: center; margin-bottom: 25px; }
        input[type="text"], input[type="password"] { width: 100%; padding: 10px; margin: 8px 0 15px; display: inline-block; border: 1px solid #444; background: #2c3e50; color: #ecf0f1; border-radius: 4px; box-sizing: border-box; }
        button { background-color: #e74c3c; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; width: 100%; font-size: 16px; transition: background-color 0.2s; }
        button:hover { background-color: #c0392b; }
        .errorlist { color: #f39c12; list-style: none; padding: 0; margin-top: -10px; margin-bottom: 10px; }
    </style>
</head>
<body>
    <div class="login-box">
        <h2>Rrr Login</h2>
        <form method="post">
            {% csrf_token %}
            {{ form.as_p }}
            <button type="submit">Log In to Rrr</button>
        </form>
        <p style="text-align: center; margin-top: 20px;">
            Don't have an account? <a href="{% url 'register' %}" style="color: #3498db; text-decoration: none;">Register here</a>
        </p>
    </div>
</body>
</html><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rrr | Welcome</title>
    <style>
        /* (Use the same styles as login.html for consistency) */
        body { font-family: sans-serif; background-color: #2c3e50; color: #ecf0f1; padding: 20px; }
        nav { background-color: #34495e; padding: 15px; border-radius: 4px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
        nav a { color: #ecf0f1; text-decoration: none; padding: 8px 15px; margin: 0 5px; border-radius: 4px; transition: background-color 0.2s; }
        nav a:hover { background-color: #2c3e50; }
        .logo { color: #e74c3c; font-size: 24px; font-weight: bold; }
        .content { background-color: #34495e; padding: 30px; border-radius: 8px; }
    </style>
</head>
<body>
    <nav>
        <div class="logo">Rrr</div>
        <div>
            {% if user.is_authenticated %}
                <span style="margin-right: 15px;">Welcome, {{ user.username }}!</span>
                <a href="{% url 'logout' %}">Logout</a>
                <a href="/chat/">Go to Chat</a>
            {% else %}
                <a href="{% url 'login' %}">Login</a>
                <a href="{% url 'register' %}">Register</a>
            {% endif %}
        </div>
    </nav>

    <div class="content">
        {% if user.is_authenticated %}
            <h2>You are logged in!</h2>
            <p>You can now access your private Rrr features.</p>
        {% else %}
            <h2>Welcome to Rrr!</h2>
            <p>Please log in or register to start chatting and connecting with your friends.</p>
        {% endif %}
    </div>
</body>
</html>INSTALLED_APPS = [
    # ... other apps
    'accounts',
    # ...
]# accounts/forms.py

from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms

class RrrUserCreationForm(UserCreationForm):
    # Add an email field, and make it required
    email = forms.EmailField(required=True) 

    class Meta(UserCreationForm.Meta):
        # Specify the model and the fields you want on the form
        model = User
        fields = UserCreationForm.Meta.fields + ('email',)# accounts/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
]<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rrr | Register</title>
    <style>
        /* (Use the same styles as login.html for consistency) */
        body { font-family: sans-serif; background-color: #2c3e50; color: #ecf0f1; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
        .register-box { background-color: #34495e; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); width: 400px; }
        h2 { color: #e74c3c; text-align: center; margin-bottom: 25px; }
        input[type="text"], input[type="email"], input[type="password"] { width: 100%; padding: 10px; margin: 5px 0 10px; display: inline-block; border: 1px solid #444; background: #2c3e50; color: #ecf0f1; border-radius: 4px; box-sizing: border-box; }
        button { background-color: #e74c3c; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; width: 100%; font-size: 16px; transition: background-color 0.2s; }
        button:hover { background-color: #c0392b; }
        .errorlist { color: #f39c12; list-style: none; padding: 0; margin-top: -10px; margin-bottom: 10px; }
        /* Style form paragraphs to ensure input fields are full width */
        .register-box form p { margin-bottom: 15px; }
        .register-box form p label { display: block; margin-bottom: 5px; font-weight: bold; }
    </style>
</head>
<body>
    <div class="register-box">
        <h2>Rrr Register</h2>
        <form method="POST">
            {% csrf_token %}
            {{ form.as_p }}
            <button type="submit">Create Rrr Account</button>
        </form>
    </div>
</body>
</html>python manage.py makemigrations
python manage.py migrate# chat/models.py (New File)

from django.db import models
from django.contrib.auth.models import User

class FriendRequest(models.Model):
    # The user who sent the request
    from_user = models.ForeignKey(
        User, 
        related_name='friend_requests_sent', 
        on_delete=models.CASCADE
    )
    
    # The user who received the request
    to_user = models.ForeignKey(
        User, 
        related_name='friend_requests_received', 
        on_delete=models.CASCADE
    )
    
    # Status can be 'pending', 'accepted', or 'rejected'
    status = models.CharField(
        max_length=10, 
        default='pending',
        choices=[
            ('pending', 'Pending'),
            ('accepted', 'Accepted'),
            ('rejected', 'Rejected'),
        ]
    )
    
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Ensures a user can't send the SAME request to the SAME person multiple times
        unique_together = ('from_user', 'to_user')

    def __str__(self):
        return f"{self.from_user.username} -> {self.to_user.username} ({self.status})"


class Contact(models.Model):
    # This is the user whose contact list we are viewing
    user = models.ForeignKey(User, related_name='contacts', on_delete=models.CASCADE)
    
    # The actual friend on the list
    friend = models.ForeignKey(User, related_name='is_friend_of', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username} is friends with {self.friend.username}"# chat/views.py (Updated)

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required # New import!
from django.db.models import Q # New import for complex queries

from .models import FriendRequest, Contact # Import the models you just created

# --- 1. View to Render the Chat Home/User List ---
@login_required
def index(request):
    # Get all users (excluding the current user) for the user search/listing
    all_users = User.objects.exclude(id=request.user.id)
    
    # Get incoming friend requests for the current user
    incoming_requests = FriendRequest.objects.filter(
        to_user=request.user, 
        status='pending'
    )
    
    # Get the current user's friends
    friends = Contact.objects.filter(user=request.user).values_list('friend__username', flat=True)

    context = {
        'all_users': all_users,
        'incoming_requests': incoming_requests,
        'friends': friends,
    }
    return render(request, 'chat/index.html', context)


# --- 2. View to Send a Friend Request ---
@login_required
def send_friend_request(request, to_user_id):
    to_user = get_object_or_404(User, id=to_user_id)
    
    # Prevent sending a request if one already exists or they are already friends
    if not FriendRequest.objects.filter(from_user=request.user, to_user=to_user).exists() and \
       not Contact.objects.filter(user=request.user, friend=to_user).exists():
        
        FriendRequest.objects.create(from_user=request.user, to_user=to_user)
        # You would typically add a success message here
    
    return redirect('chat_index') # Redirect back to the user list


# --- 3. View to Accept a Friend Request ---
@login_required
def accept_friend_request(request, request_id):
    # 1. Get the request object and ensure it belongs to the current user
    friend_request = get_object_or_404(FriendRequest, id=request_id, to_user=request.user)
    
    # 2. Update status and save
    friend_request.status = 'accepted'
    friend_request.save()
    
    # 3. Create bidirectional Contact objects
    # Add the sender to the current user's contact list
    Contact.objects.create(user=request.user, friend=friend_request.from_user)
    # Add the receiver (current user) to the sender's contact list
    Contact.objects.create(user=friend_request.from_user, friend=request.user)
    
    return redirect('chat_index')# chat/urls.py (Updated)

from django.urls import path
from . import views

urlpatterns = [
    # The main chat landing page that lists users/friends
    path('', views.index, name='chat_index'), 
    
    # URL to send a request (e.g., /chat/request/5/)
    path('request/<int:to_user_id>/', views.send_friend_request, name='send_friend_request'),
    
    # URL to accept a request (e.g., /chat/accept/12/)
    path('accept/<int:request_id>/', views.accept_friend_request, name='accept_friend_request'),
    
    # Placeholder for the actual private chat room (next step!)
    path('<str:username>/', views.private_chat_room, name='private_chat_room'),
]{% extends "base.html" %} 
{% load static %}

<div id="chat-container">
    <h1>Rrr User Hub</h1>

    {% if incoming_requests %}
        <div class="requests-list">
            <h2>Incoming Requests ({{ incoming_requests.count }})</h2>
            {% for request in incoming_requests %}
                <p>
                    Request from: <strong>{{ request.from_user.username }}</strong>
                    <a href="{% url 'accept_friend_request' request.id %}" class="accept-btn">Accept</a>
                </p>
            {% endfor %}
        </div>
    {% endif %}

    <div class="friends-list">
        <h2>Your Friends</h2>
        {% if friends %}
            <ul>
                {% for friend_username in friends %}
                    <li>
                        <a href="{% url 'private_chat_room' friend_username %}" class="chat-link">{{ friend_username }}</a>
                    </li>
                {% endfor %}
            </ul>
        {% else %}
            <p>You have no friends yet. Send a request below!</p>
        {% endif %}
    </div>

    <div class="users-list">
        <h2>Find Users</h2>
        <ul>
            {% for user_obj in all_users %}
                <li>
                    {{ user_obj.username }} 
                    
                    {% if user_obj.username in friends %}
                        <span class="status-friend">(Friend)</span>
                    {% else %}
                        <a href="{% url 'send_friend_request' user_obj.id %}" class="request-btn">Send Request</a>
                    {% endif %}
                </li>
            {% endfor %}
        </ul>
    </div>
</div>python manage.py makemigrations chat
python manage.py migrate# chat/views.py (Updated)

# ... (existing imports and functions like index, send_friend_request, accept_friend_request) ...

from django.db.models import Q 
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required 
from django.http import Http404

# ... (existing models import) ...

# New View: Handles entry into a specific private chat room
@login_required
def private_chat_room(request, username):
    # 1. Check if the target user exists
    try:
        target_user = User.objects.get(username=username)
    except User.DoesNotExist:
        raise Http404("User not found.")

    # 2. Check if the target user is actually a friend
    # You must be friends to open a private room!
    is_friend = Contact.objects.filter(
        Q(user=request.user, friend=target_user) | Q(user=target_user, friend=request.user)
    ).exists()
    
    if not is_friend:
        # Prevent non-friends from entering a private chat room URL directly
        return redirect('chat_index') 

    # 3. Create a unique room name based on the IDs of the two users
    # This ensures UserA <-> UserB always uses the same room name (e.g., chat_1_5)
    user_ids = sorted([request.user.id, target_user.id])
    room_name = f"private_{user_ids[0]}_{user_ids[1]}"
    
    context = {
        'target_user': target_user,
        'room_name': room_name,
        # In a real app, you would load past message history here
    }

    # Use a specific template for the chat room
    return render(request, 'chat/private_chat_room.html', context)# chat/consumers.py (Updated)

import json
from channels.generic.websocket import AsyncWebsocketConsumer
from django.contrib.auth.models import AnonymousUser # New import

class RrrChatConsumer(AsyncWebsocketConsumer):
    
    async def connect(self):
        # 1. SECURITY CHECK: Only allow connections from logged-in users
        if self.scope['user'] == AnonymousUser():
            await self.close() # Close the connection immediately if not logged in
            return

        # 2. Define the room name based on the URL path
        # Gets the room name (e.g., 'private_1_5') from the URL
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = self.room_name # Use the room name as the group name

        # 3. Add the user's channel to the specific private group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept() # Accept the connection
        
    # ... (disconnect method remains the same) ...

    # 4. Receive message from WebSocket (from the JS)
    async def receive(self, text_data):
        # The user is now self.scope['user']
        current_user = self.scope['user'] 
        
        # Load the message data
        data = json.loads(text_data)
        message = data['message']
        
        # NOTE: We use the secure username from the scope, not the unreliable one from the JS!
        username = current_user.username 

        # IMPORTANT: This is where you would save the message to the database 
        # (e.g., Message.objects.create(room=self.room_name, sender=current_user, content=message))

        # Send message to the specific private room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message', 
                'message': message,
                'username': username
            }
        )

    # ... (chat_message method remains the same) ...{% load static %}
<div id="chat-container">
    <h1>Private Chat with {{ target_user.username }} (Room: {{ room_name }})</h1>

    <div id="chat-log">
        </div>

    <div id="message-input-area">
        <input id="message-input" type="text" placeholder="Send a private message...">
        <input id="message-submit" type="button" value="Send">
    </div>
</div>

<script>
    // The specific room name is passed from the Python view!
    const roomName = JSON.parse(document.getElementById('room-name').textContent);
    
    // Connect to the specific private WebSocket URL
    const chatSocket = new WebSocket(
        'ws://' + window.location.host +
        '/ws/chat/' + roomName + '/'
    );

    // --- 1. Handle Incoming Messages ---
    chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        const message = data.message;
        const username = data.username;
        
        // ... (display message logic) ...
        const log = document.querySelector('#chat-log');
        const msgElement = document.createElement('div');
        msgElement.innerHTML = `<span class="sender">${username}:</span> ${message}`;
        log.appendChild(msgElement);
        log.scrollTop = log.scrollHeight;
    };

    // ... (onclose event remains the same) ...

    // --- 2. Handle Outgoing Messages ---
    document.querySelector('#message-submit').onclick = function(e) {
        const messageInputDom = document.querySelector('#message-input');
        const message = messageInputDom.value.trim();
        
        if (message === '') return;

        // Note: We DO NOT send the username here. The server uses the logged-in user.
        chatSocket.send(JSON.stringify({
            'message': message
        }));

        messageInputDom.value = '';
        messageInputDom.focus();
    };

    // ... (onkeyup event remains the same) ...
</script>

<div id="room-name" style="display: none;">{{ room_name|json_script }}</div># chat/models.py (Continuing the file)

# ... (Existing models: FriendRequest, Contact) ...

# New Model 1: The Group/Room Information
class GroupChat(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True) # A URL-friendly version of the name
    owner = models.ForeignKey(User, related_name='owned_groups', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

# New Model 2: The membership list for the group
class GroupMembership(models.Model):
    group = models.ForeignKey(GroupChat, on_delete=models.CASCADE)
    member = models.ForeignKey(User, related_name='group_memberships', on_delete=models.CASCADE)
    
    # Ensures a user can only be in a group once
    class Meta:
        unique_together = ('group', 'member')

    def __str__(self):
        return f"{self.member.username} in {self.group.name}"# chat/views.py (Continuing the file)

# ... (existing imports and functions) ...

from django.db import IntegrityError # New import for error handling
from django.utils.text import slugify # New import for generating clean URLs

# --- 1. View to Create a New Group ---
@login_required
def create_group(request):
    if request.method == "POST":
        group_name = request.POST.get('group_name').strip()
        
        if group_name:
            slug = slugify(group_name)
            try:
                # Create the Group
                new_group = GroupChat.objects.create(
                    name=group_name,
                    slug=slug,
                    owner=request.user
                )
                
                # Add the creator as the first member
                GroupMembership.objects.create(group=new_group, member=request.user)
                
                # Success message here
                return redirect('group_chat_room', slug=slug)
            
            except IntegrityError:
                # Handle case where the group name already exists
                # Add an error message here
                pass 
                
    # You would render a form here for group creation, but for simplicity, we redirect
    return redirect('chat_index') # Send them back to the user hub


# --- 2. View to Enter a Group Chat Room ---
@login_required
def group_chat_room(request, slug):
    # Get the group object, or return 404
    group = get_object_or_404(GroupChat, slug=slug)
    
    # Check if the user is a member of this group
    is_member = GroupMembership.objects.filter(group=group, member=request.user).exists()
    
    if not is_member:
        # Prevent non-members from accessing the group chat
        # You would typically have a "Join Group" view here.
        # For now, we redirect to the main hub.
        return redirect('chat_index') 

    context = {
        'group': group,
        # The room name for the WebSocket is the group's unique slug
        'room_name': slug, 
    }
    
    # Use the same template structure as the private chat room for simplicity
    return render(request, 'chat/group_chat_room.html', context) 
    
    
# --- 3. View to Add/Invite Members (Optional but necessary) ---
@login_required
def add_group_member(request, slug, user_id):
    group = get_object_or_404(GroupChat, slug=slug)
    # NOTE: You would add checks here to ensure only the owner can add members
    
    if request.user != group.owner:
         raise Http404("You are not the group owner.")

    member = get_object_or_404(User, id=user_id)
    
    # Add the member
    GroupMembership.objects.get_or_create(group=group, member=member)
    
    return redirect('group_chat_room', slug=slug)# chat/urls.py (Updated with Group Chat Routes)

from django.urls import path
from . import views

urlpatterns = [
    # ... (existing views for index, send_friend_request, accept_friend_request) ...
    
    # 1. Group Creation
    path('group/create/', views.create_group, name='create_group'),
    
    # 2. Group Chat Room (uses the unique slug for the URL)
    path('group/<slug:slug>/', views.group_chat_room, name='group_chat_room'),
    
    # 3. Add Member (optional)
    path('group/<slug:slug>/add/<int:user_id>/', views.add_group_member, name='add_group_member'),
    
    # Private chat room for friends (from the previous step)
    path('<str:username>/', views.private_chat_room, name='private_chat_room'),
]{% load static %}
<div id="chat-container">
    <h1>Group Chat: {{ group.name }}</h1>
    <p>Owner: {{ group.owner.username }}</p>

    <div id="chat-log">
        </div>

    <div id="message-input-area">
        <input id="message-input" type="text" placeholder="Send a message to the group...">
        <input id="message-submit" type="button" value="Send">
    </div>
</div>

<div id="room-name" style="display: none;">{{ room_name|json_script }}</div>

<script>
    // Load the room name (which is the group slug)
    const roomName = JSON.parse(document.getElementById('room-name').textContent);
    
    const chatSocket = new WebSocket(
        'ws://' + window.location.host +
        '/ws/chat/' + roomName + '/' // Connects to the group's slug
    );

    // --- (Paste the full JavaScript from the private_chat_room.html here) ---
    // The message sending and receiving logic is identical.
    
    // ... (Paste the onmessage, onclick, and onkeyup functions here) ...
</script>python manage.py makemigrations chat
python manage.py migrate# chat/consumers.py (Modifying the RrrChatConsumer)

# ... (existing imports) ...

class RrrChatConsumer(AsyncWebsocketConsumer):
    # ... (existing connect, disconnect, and chat_message methods) ...

    # We will assume a specific group name for a call is passed in the URL, 
    # similar to private chat (e.g., 'call_private_1_5').

    async def receive(self, text_data):
        current_user = self.scope['user'] 
        data = json.loads(text_data)
        
        # Check the type of message being sent
        message_type = data.get('type')
        
        if not message_type:
            # If no type is specified, treat it as a standard text message
            message = data['message']
            username = current_user.username 
            
            # Send message to the specific room group
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'chat_message', 
                    'message': message,
                    'username': username
                }
            )
        
        # --- NEW CODE FOR WEBRTC SIGNALING ---
        elif message_type in ['call_offer', 'call_answer', 'ice_candidate']:
            
            # 1. Get the recipient of the signal
            recipient_username = data.get('recipient')
            recipient_channel_name = await self.get_channel_name_for_user(recipient_username)

            if recipient_channel_name:
                # 2. Forward the WebRTC signal directly to the recipient's channel
                # We use channel_send instead of group_send for one-to-one signal transfer
                await self.channel_layer.send(
                    recipient_channel_name,
                    {
                        'type': 'webrtc.signal', # This calls the webrtc_signal method below
                        'sender': current_user.username,
                        'data': data
                    }
                )
        
        # NOTE: You will need to write the `get_channel_name_for_user` helper function
        # which requires tracking which user is on which channel—this is a complex task
        # requiring a separate database/Redis store for active users.

    # New method: Handles forwarding the WebRTC signal
    async def webrtc_signal(self, event):
        # Send the received signal data back to the browser of the recipient
        await self.send(text_data=json.dumps(event['data']))// --- 1. SETUP VARIABLES ---
const localVideo = document.getElementById('local-video'); // <video id="local-video" autoplay></video> (must be added to HTML)
const remoteVideo = document.getElementById('remote-video'); // <video id="remote-video" autoplay></video> (must be added to HTML)

let localStream;
let peerConnection;
let callerUsername = "{{ user.username }}"; // Get the logged-in user's username
let recipientUsername = "{{ target_user.username }}"; // Get the friend's username

// --- 2. STUN Server Configuration (Required to find paths between users) ---
const iceServers = {
    'iceServers': [
        { 'urls': 'stun:stun.l.google.com:19302' }, // Google's public STUN server
    ]
};// Function to initiate connection and get media
async function startCall() {
    try {
        // 1. Get user's media (camera/mic)
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;

        // 2. Create the Peer Connection
        peerConnection = new RTCPeerConnection(iceServers);

        // 3. Add local tracks (audio/video) to the connection
        localStream.getTracks().forEach(track => {
            peerConnection.addTrack(track, localStream);
        });

        // 4. Handle incoming remote stream from the friend
        peerConnection.ontrack = (event) => {
            if (remoteVideo.srcObject !== event.streams[0]) {
                remoteVideo.srcObject = event.streams[0];
            }
        };

        // 5. Handle ICE Candidates (Crucial for connectivity)
        peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
                // Send the ICE Candidate to the other user via WebSocket
                sendSignal({
                    'type': 'ice_candidate',
                    'candidate': event.candidate,
                    'recipient': recipientUsername // Send signal to the friend
                });
            }
        };

        // 6. Create the Call OFFER
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);

        // 7. Send the Offer via WebSocket (Django Channels)
        sendSignal({
            'type': 'call_offer',
            'sdp': peerConnection.localDescription,
            'recipient': recipientUsername
        });

    } catch (error) {
        console.error("Error starting call or accessing media:", error);
        alert("Cannot access camera/mic. Check permissions.");
    }
}

// Function to handle receiving a call and sending an answer
async function handleOffer(offer) {
    // ... (Steps 1-5 from startCall must be run first: get media, create connection, set tracks, set onicecandidate) ...
    
    // Assume startCall() logic has been run up to step 4 by the receiver
    await peerConnection.setRemoteDescription(offer);

    // 6. Create the Call ANSWER
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);

    // 7. Send the Answer back via WebSocket
    sendSignal({
        'type': 'call_answer',
        'sdp': peerConnection.localDescription,
        'recipient': recipientUsername // Send signal back to the caller
    });
}// Function to send a WebRTC signal via the existing chat WebSocket
function sendSignal(signalData) {
    // Add sender info before sending to the Django server
    signalData.sender = callerUsername; 
    
    // The chatSocket is the WebSocket created for the chat room
    if (chatSocket && chatSocket.readyState === WebSocket.OPEN) {
        chatSocket.send(JSON.stringify(signalData));
    } else {
        console.error("WebSocket not open. Cannot send signal.");
    }
}

// --- WebSocket Event Handler Update ---
// In your existing chatSocket.onmessage function in private_chat_room.html:

chatSocket.onmessage = async function(e) {
    const data = JSON.parse(e.data);
    const message_type = data.type;

    // Handle standard text messages
    if (message_type === undefined) {
        // ... (existing chat message display logic) ...
    } 
    
    // Handle WebRTC Signaling messages
    else if (message_type === 'call_offer') {
        // User receives a call offer
        console.log("Received call offer.");
        
        // This is where you would prompt the user: "User X is calling. Accept/Reject?"
        if (confirm(`${data.sender} is calling you! Accept?`)) {
            // Initiate connection and send the answer back
            await startCall(); 
            await handleOffer(data.sdp);
        }

    } else if (message_type === 'call_answer') {
        // Caller receives the answer from the recipient
        console.log("Received call answer.");
        await peerConnection.setRemoteDescription(data.sdp);

    } else if (message_type === 'ice_candidate') {
        // Both sides receive ICE candidates from the other
        console.log("Received ICE candidate.");
        try {
            const candidate = new RTCIceCandidate(data.candidate);
            await peerConnection.addIceCandidate(candidate);
        } catch (error) {
            console.error("Error adding ICE candidate:", error);
        }
    }
};<div id="video-area">
    <button onclick="startCall()">Start Video Call with {{ target_user.username }}</button>
    
    <div class="video-container">
        <h3>You</h3>
        <video id="local-video" autoplay muted playsinline></video>
    </div>
    
    <div class="video-container">
        <h3>{{ target_user.username }}</h3>
        <video id="remote-video" autoplay playsinline></video>
    </div>
</div>

<script src="{% static 'chat/webrtc.js' %}"></script>
