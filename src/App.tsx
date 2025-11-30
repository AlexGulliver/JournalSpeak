// App.tsx (or AppRouter.tsx)

import Layout from './Layout.tsx';
import Home from './Home.tsx';
import About from './About.tsx';
import { Route, Routes } from 'react-router-dom';

export default function App() {
    return (
      <Routes>
        <Route 
          path="/" 
          element={<Layout />}
          > 

          <Route 
            index 
            element={<Home />}
            />
          
          <Route 
            path="about"
            element={<About />} 
            />
          
        </Route>
        
        {/* Optional: Add routes *outside* the Layout here (e.g., login, 404) */}
        {/* <Route path="*" element={<NotFound />} /> */}
        
      </Routes>
    );
}