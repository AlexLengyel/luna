from rest_framework import serializers
from comment.models import Comment


class MainCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ['id', 'content', 'created', 'modified', 'user', 'review', 'liked_by']
        read_only_fields = ['id', 'created', 'modified', 'user', 'review', 'liked_by']
