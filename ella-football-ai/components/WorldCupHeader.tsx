import { Trophy, Bell, User } from 'lucide-react';
import { Button } from './ui/button';

export function WorldCupHeader() {
  return (
    <header className="bg-[#121212] border-b border-[#1E1E1E]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-gradient-to-br from-[#4A90E2] to-[#00B0FF] rounded-full flex items-center justify-center">
              <Trophy className="size-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Ella Football AI</h1>
              <p className="text-sm text-[#B0B0B0]">Professional Match Predictions</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-[#B0B0B0] hover:bg-[#1E1E1E] hover:text-white">
              <Bell className="size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#B0B0B0] hover:bg-[#1E1E1E] hover:text-white">
              <User className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}