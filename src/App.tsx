import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BackToTopButton from './components/BackToTopButton';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BackToTopButton />
    </BrowserRouter>
  );
}
