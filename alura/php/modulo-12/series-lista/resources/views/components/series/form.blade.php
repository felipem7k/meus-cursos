<form action="{{ $action }}" method="post">
    @csrf
    @if ($update)
    @method('PUT')
    @endif 
    <div class="mb-3">
        <label class="form-label" for="nome">Nome:</label>
        <input class="form-control" type="text" name="nome" 
        @isset($nome)
        value="{{$nome}}" 
        @endisset 
        >
    </div>
    <button type="submit" class="btn btn-primary">
        @if ($update)
        Editar
        @else
        Adicionar
        @endif
    </button>
</form>