
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function AgentDetail() {
  const { id } = useParams();
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="w-full bg-neutral-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <i className="fa-solid fa-robot text-2xl mr-3"></i>
            <h1 className="text-xl">Agent Store</h1>
          </div>
          <div className="flex items-center">
            <span className="mr-4 hidden md:block">Welcome, Admin</span>
            <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=423"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <Button
              variant="ghost"
              className="text-white"
              onClick={logout}
            >
              <i className="fa-solid fa-sign-out-alt mr-2"></i>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/dashboard" className="inline-flex items-center text-neutral-600 hover:text-neutral-800">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-robot text-white text-2xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-neutral-800">Agent #{id}</h1>
              <p className="text-neutral-500">View and manage agent details</p>
            </div>
          </div>
          
          <div className="text-center text-neutral-600 py-12">
            <p>Agent detail page content will be implemented in the next iteration.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
