
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Robot, MessageSquare, Code } from 'lucide-react';

const agents = [
  {
    id: 1,
    title: "Data Analysis Assistant",
    category: "Analytics",
    description: "Advanced AI agent specialized in data processing, visualization, and statistical analysis.",
    icon: Robot,
    users: 245,
    background: "neutral-700"
  },
  {
    id: 2,
    title: "Customer Support Bot",
    category: "Support",
    description: "Intelligent conversational agent designed to handle customer inquiries.",
    icon: MessageSquare,
    users: 389,
    background: "neutral-800"
  },
  {
    id: 3,
    title: "Code Generation Assistant",
    category: "Development",
    description: "Powerful AI coding assistant that helps write, debug, and optimize code.",
    icon: Code,
    users: 167,
    background: "neutral-900"
  }
];

export default function Dashboard() {
  const { logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-neutral-800">My Agents</h2>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search agents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-6">
          {agents.map((agent) => (
            <Link to={`/agent/${agent.id}`} key={agent.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className={`md:w-1/3 bg-${agent.background} flex items-center justify-center p-6 md:p-0`}>
                    <div className="w-full h-48 md:h-full flex items-center justify-center">
                      <agent.icon className="text-white h-12 w-12" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl text-neutral-800">{agent.title}</h3>
                      <span className="bg-neutral-100 text-neutral-800 text-xs px-2.5 py-0.5 rounded-full">
                        {agent.category}
                      </span>
                    </div>
                    <p className="text-neutral-600 mb-4">{agent.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                          {[1, 2].map((i) => (
                            <img
                              key={i}
                              src={`https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=${agent.id}${i}`}
                              alt="User avatar"
                              className="w-8 h-8 rounded-full border-2 border-white"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-neutral-500 ml-2">{agent.users} users</span>
                      </div>
                      <Button className="bg-neutral-800 hover:bg-neutral-700">
                        <i className="fa-solid fa-play mr-2"></i>
                        Launch Agent
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
