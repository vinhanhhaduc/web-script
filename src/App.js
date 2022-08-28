import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import AdminPage from './pages/AdminPage';
import SignInAdminPage from './pages/SignInAdminPage';
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/admin" element={<AdminPage></AdminPage>} />
        <Route path="/sign-in" element={<SignInAdminPage></SignInAdminPage>} />
      </Routes>
    </Suspense>
  );
}

export default App;
