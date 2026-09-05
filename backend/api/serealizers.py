from rest_framework import serializers
import os

class ImportFileSerealizer(serializers.Serializer):
    file = serializers.FileField()

    EXTENSION_ACCEPTER = [".csv", ".xlsx", ".xls"]

    def validate_file(self, value):
        extention = os.path.splitext(value.name)[1].lower()

        if extention not in self.EXTENSION_ACCEPTER:
            raise serializers.ValidationError(
                f"Format non supporter {extention} "
            )
        return value    
