import Footer from 'components/Footer';
import Menu from 'components/Menu';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Inicio = lazy(() => import('pages/Inicio'));
const Cardapio = lazy(() => import('pages/Cardapio'));
const Sobre = lazy(() => import('pages/Sobre'));
const Prato = lazy(() => import('pages/Prato'));
const NotFound = lazy(() => import('pages/NotFound'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Suspense fallback={<p>Carregando...</p>}>
          <Routes>
            <Route path='/' element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='sobre' element={<Sobre />} />
            </Route>
            <Route path='prato/:id' element={<Prato />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}