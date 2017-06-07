from rest_framework.routers import DefaultRouter

from s2b.core.views import UserViewSet

router = DefaultRouter()
router.register('users', UserViewSet)
