"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PostLibrary } from "./components/post-library"
import { VideoScripts } from "./components/video-scripts"
import { ContentCalendar } from "./components/content-calendar"
import { Calendar, FileText, Video } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://d7gtruneqk2qegaa.public.blob.vercel-storage.com/app-icon-0422ff-OkSxa1CvyxbGXfXTW8yDtt1eBci3lk.png"
              alt="Brand Icon"
              className="w-8 h-8"
            />
            <h1 className="text-2xl font-bold text-gray-900">Content Hub</h1>
          </div>
          <div className="text-sm text-gray-600">Ready to organize your content ✨</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="library" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white rounded-xl shadow-sm border border-gray-200">
            <TabsTrigger
              value="library"
              className="flex items-center space-x-2 data-[state=active]:bg-[#0422FF] data-[state=active]:text-white rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>Post Library</span>
            </TabsTrigger>
            <TabsTrigger
              value="scripts"
              className="flex items-center space-x-2 data-[state=active]:bg-[#0422FF] data-[state=active]:text-white rounded-lg"
            >
              <Video className="w-4 h-4" />
              <span>Video Scripts</span>
            </TabsTrigger>
            <TabsTrigger
              value="calendar"
              className="flex items-center space-x-2 data-[state=active]:bg-[#0422FF] data-[state=active]:text-white rounded-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Content Calendar</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="library">
            <PostLibrary />
          </TabsContent>

          <TabsContent value="scripts">
            <VideoScripts />
          </TabsContent>

          <TabsContent value="calendar">
            <ContentCalendar />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
