import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import SignInAdminPage from './pages/SignInAdminPage';
import { AuthProvider } from './contexts/auth-context';
import LayoutDashboardAdmin from './layout/layoutDashboardAdmin';
function App() {
  return (
    <div>
      <AuthProvider>
        <Suspense>
          <Routes>
            <Route element={<LayoutDashboardAdmin></LayoutDashboardAdmin>}>
              <Route path="/admin" element={<AdminPage></AdminPage>} />
            </Route>
            <Route
              path="/sign-in"
              element={<SignInAdminPage></SignInAdminPage>}
            />
          </Routes>
        </Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;
