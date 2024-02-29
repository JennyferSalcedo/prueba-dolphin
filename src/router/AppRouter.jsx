import { Route, Routes } from 'react-router-dom';
import { CharactersPage } from '../pages/CharactersPage';
import { AuthorPage } from '../pages/AuthorPage';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="characters" element={<CharactersPage/>} />
        <Route path="creator" element={<AuthorPage/>} />
        <Route path="/*" element={<CharactersPage/>} />
      </Routes>
    </>
  );
};
