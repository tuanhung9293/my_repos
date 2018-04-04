import {
    UserRegister,
    UserLogin,
    UserProfile,
    BooksList,
    BookDetails,
    BookCreation,
    BookEdition,
  } from '../containers/pages';
  
  import App from '../containers/App';
  
  const routes = [
    {
      component: App,
      // requireLogin: '/dang-nhap',
      routes: [
        {
          component: UserRegister,
          path: '/register'
        },
        {
          component: UserLogin,
          path: '/login'
        },
        {
          component: UserProfile,
          path: '/profile'
        },
        {
          component: BooksList,
          path: '/books-list'
        },
        {
          component: BookDetails,
          path: '/book/:id'
        },
        {
          component: BookCreation,
          path: '/book-create'
        },
        {
          component: BookEdition,
          path: '/book-edit/:id'
        },
      ]
    }
  ];
  
  export default routes;
  