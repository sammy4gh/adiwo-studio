'use client'

import { Search, Clock, Home, PenTool, LayoutGrid, FileText, Settings, HelpCircle, User } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function DashboardComponent() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-16 bg-white border-r flex flex-col items-center py-4 space-y-4">
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <Home className="w-6 h-6 text-gray-600" />
        <PenTool className="w-6 h-6 text-gray-600" />
        <LayoutGrid className="w-6 h-6 text-gray-600" />
        <FileText className="w-6 h-6 text-gray-600" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <div className="flex items-center w-1/2">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <Input type="text" placeholder="Search for apps, files, templates and more" className="w-full" />
          </div>
          <div className="flex items-center space-x-4">
            <Clock className="w-6 h-6 text-gray-600" />
            <Settings className="w-6 h-6 text-gray-600" />
            <HelpCircle className="w-6 h-6 text-gray-600" />
            <User className="w-6 h-6 text-gray-600" />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
          <p className="text-sm text-gray-600 mb-6">Free • 205 MB used of 5 GB (4%)</p>

          <div className="flex justify-between mb-8">
            <h2 className="text-xl font-semibold">Create New</h2>
            <div className="space-x-2">
              <Button variant="outline">Install apps</Button>
              <Button>Buy Premium</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Timetable</h3>
                <p className="text-sm text-gray-600">Manage your schedule</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Library</h3>
                <p className="text-sm text-gray-600">Access your resources</p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Quick access</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b">
              <Button variant="ghost" className="mr-2">Recently opened</Button>
              <Button variant="ghost" className="mr-2">Shared</Button>
              <Button variant="ghost">Favorites</Button>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">No recent items</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}