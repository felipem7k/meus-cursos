from django.shortcuts import render

def index(request):
    return render(request, 'galeria/index.html')

def imagem(request, imagem_id):
    return render(request, 'galeria/imagem.html', {'imagem_id': imagem_id})
