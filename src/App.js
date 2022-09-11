import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import SignInAdminPage from './pages/SignInAdminPage';
import LayoutDashboardAdmin from './layout/layoutDashboardAdmin';

import AddPostPage from './pages/AddPostPage';
import CategoryAddNewAdmin from './modules/category/CategoryAddNewAdmin';
function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboardAdmin></LayoutDashboardAdmin>}>
          <Route path="/admin" element={<AdminPage></AdminPage>} />
          <Route path="/add-post" element={<AddPostPage></AddPostPage>} />
          <Route
            path="/add-category"
            element={<CategoryAddNewAdmin></CategoryAddNewAdmin>}
          />
        </Route>
        <Route path="/sign-in" element={<SignInAdminPage></SignInAdminPage>} />
      </Routes>
    </Suspense>
  );
}

export default App;
