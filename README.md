# chat/views.py (Updated)

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
    return render(request, 'chat/private_chat_room.html', context)
