import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import AddRecipePage from "./pages/AddRecipePage";
import AddTestimonialPage from "./pages/AddTestimonialPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="/add-testimonial" element={<AddTestimonialPage />} />
        {/* <Route path="/notes" element={<NotesPage />} />
        <Route path="/add-notes" element={<AddNotesPage />} />
        <Route path="/notes/:id" element={<Notepage />} loader={noteLoader} />
        <Route
          path="/edit-note/:id"
          element={<EditNotesPage />}
          loader={noteLoader}
        /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
