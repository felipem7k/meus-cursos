<form action="{{ $action }}" method="post">
    @csrf
    @isset($nome)
    @method('PUT')
    @endisset 
    <div class="mb-3">
        <label class="form-label" for="nome">Nome:</label>
        <input class="form-control" type="text" name="nome" 
        @isset($nome)
        value="{{$nome}}" 
        @endisset 
        >
    </div>
    <button type="submit" class="btn btn-primary">
        @isset($nome)
        Editar
        @else
        Adicionar
        @endisset
    </button>
</form>