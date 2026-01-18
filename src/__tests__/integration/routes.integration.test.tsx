import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AppRouter from '../../routes';

// Variable to control the initial route for each test
let testRoute = '/';

// Mock BrowserRouter to use MemoryRouter with our testRoute
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    BrowserRouter: ({ children }: { children: React.ReactNode }) => (
      <actual.MemoryRouter initialEntries={[testRoute]}>
        {children}
      </actual.MemoryRouter>
    ),
  };
});

// I need to mock these components so the test doesn't break
jest.mock('../../screens/dashboard', () => {
  return function MockDashboard() {
    return <div>Dashboard Page</div>;
  };
});

jest.mock('../../screens/pokemonDetail', () => {
  return function MockPokemonDetail() {
    return <div>Pokemon Detail Page</div>;
  };
});

// Layout uses <Outlet /> not children, so we need to import and use Outlet
jest.mock('../../screens/layout', () => {
  const { Outlet } = jest.requireActual('react-router-dom');
  return function MockLayout() {
    return (
      <div data-testid="layout">
        <Outlet />
      </div>
    );
  };
});

describe('Routes', () => {
  // Reset the route before each test
  beforeEach(() => {
    testRoute = '/';
  }); 
  
  it('should render AppRouter', () => {
    expect(AppRouter).toBeDefined();
  });

  it('should render dashboard when going to /dashboard', () => {
    testRoute = '/dashboard';
    render(<AppRouter />); 
    
    expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
  });

  it('should render pokemon detail when going to /pokemon/25', () => {
    testRoute = '/pokemon/25';
    render(<AppRouter />);

    expect(screen.getByText('Pokemon Detail Page')).toBeInTheDocument();
  });

  it('should redirect to dashboard when going to /', () => {
    testRoute = '/';
    render(<AppRouter />);

    // Since "/" redirects to "/dashboard", we should see Dashboard
    expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
  });
});
