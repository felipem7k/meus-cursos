<x-layout title="Nova série">
    <form action="{{ route('series.store') }}" method="post" enctype="multipart/form-data">
        @csrf

        <div class="row mb-3">
            <div class="col-8">
                <label class="form-label" for="nome">Nome:</label>
                <input autofocus class="form-control" type="text" name="nome" value="{{ old('nome') }}">
            </div>

            <div class="col-2">
                <label class="form-label" for="seasonsQty">N. Temporadas:</label>
                <input class="form-control" type="text" name="seasonsQty" value="{{ old('seasonsQty') }}">
            </div>

            <div class="col-2">
                <label class="form-label" for="seasonsEps">Eps / Temporada:</label>
                <input class="form-control" type="text" name="seasonsEps" value="{{ old('seasonsEps') }}">
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-12">
                <label for="cover" class="form-label">Capa</label>
                <input type="file" id="cover" name="cover" class="form-control" accept="image/gif, image/jpeg, image/png">
            </div>
        </div>

        <button type="submit" class="btn btn-primary"> Adicionar </button>
    </form>
</x-layout>