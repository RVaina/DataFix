import pandas as pd
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import status
from .serealizers import ImportFileSerealizer

# Create your views here.
class ImportFileViews(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request):
        print(request.data)
        serealizer = ImportFileSerealizer(data= request.data)

        if not serealizer.is_valid():
            return Response(serealizer.error, status=status.HTTP_400_BAD_REQUEST)
        
        file_obj = serealizer.validated_data['file']
        print(file_obj)
        filename = file_obj.name.lower()

        try:
            if filename.endswith(".csv"):
                df = pd.read_csv(file_obj)
            elif filename.endswith(".xlsx"):
                df = pd.read_excel(file_obj, engine="openpyxl")
            elif filename.endswith(".xls"):
                df = pd.read_csv(file_obj, engine="xlrd")
        except Exception as e:
            return Response(
                {"error": f"erreur de lecture de fichier"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        return Response({"message": "success"}, status=status.HTTP_200_OK)