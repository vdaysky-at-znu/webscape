from django.db import models


class Item(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.CharField(max_length=255)


class ItemTag(models.Model):
    name = models.CharField(max_length=255)
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name="tags")
