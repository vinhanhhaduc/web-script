import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import AdminPage from './pages/AdminPage';
import SignInAdminPage from './pages/SignInAdminPage';
import { AuthProvider } from './contexts/auth-context';
import DashboardSearch from './modules/dashboardAdmin/dashboardSearch';
import DashboardAdminTopbar from './modules/dashboardAdmin/dashboardAdminTopbar';
function App() {
  return (
    <div>
      <AuthProvider>
        <Suspense>
          <Routes>
            <Route element={<DashboardAdminTopbar></DashboardAdminTopbar>}>
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
