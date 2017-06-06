from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("first_name", "last_name", "email", "pk", 'password', "username")
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, data):
        errors = {}

        # username is already checked by django
        # password is already checked by django

        # Ckeck email
        email = data.get("email", None)
        if email is None:
            errors['email'] = "Email cannot be empty"
            raise serializers.ValidationError(errors)

        return data

