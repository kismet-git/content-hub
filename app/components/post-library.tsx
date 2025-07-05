"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Search } from "lucide-react"
import { toast } from "sonner"

const mockPosts = [
  {
    id: 1,
    title: "Monday Motivation",
    content:
      "Starting the week strong! Remember, every expert was once a beginner. What's one small step you're taking today toward your goals? 💪 #MondayMotivation #Growth",
    tags: ["motivation", "education"],
    platforms: ["Instagram", "LinkedIn"],
  },
  {
    id: 2,
    title: "Product Showcase",
    content:
      "✨ Introducing our game-changing solution! See how Sarah transformed her business in just 30 days. Swipe to see her incredible results! Link in bio 👆",
    tags: ["promo", "testimonial"],
    platforms: ["Instagram", "TikTok"],
  },
  {
    id: 3,
    title: "Behind the Scenes",
    content:
      "Coffee, creativity, and a whole lot of passion ☕ Here's what goes into creating content that actually connects. What fuels your creative process?",
    tags: ["story", "education"],
    platforms: ["Instagram", "LinkedIn", "TikTok"],
  },
  {
    id: 4,
    title: "Customer Success Story",
    content:
      "🎉 HUGE congratulations to Maria! She just hit her first $10K month using our strategies. Her secret? Consistency and showing up authentically every single day.",
    tags: ["testimonial", "promo"],
    platforms: ["LinkedIn", "Instagram"],
  },
  {
    id: 5,
    title: "Educational Tip",
    content:
      "Pro tip: The best time to post isn't when everyone else is posting. It's when YOUR audience is most active. Check your analytics and test different times! 📊",
    tags: ["education"],
    platforms: ["LinkedIn", "Instagram", "TikTok"],
  },
  {
    id: 6,
    title: "Weekend Reflection",
    content:
      "Weekend check-in: What's one win you're celebrating this week? Big or small, every step forward counts. Share in the comments! 🌟",
    tags: ["story", "motivation"],
    platforms: ["Instagram", "LinkedIn"],
  },
]

const tagColors = {
  education: "bg-blue-100 text-blue-800",
  promo: "bg-pink-100 text-pink-800",
  story: "bg-yellow-100 text-yellow-800",
  testimonial: "bg-green-100 text-green-800",
  motivation: "bg-purple-100 text-purple-800",
}

export function PostLibrary() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPlatform, setSelectedPlatform] = useState("all")
  const [selectedTag, setSelectedTag] = useState("all")

  const filteredPosts = mockPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlatform = selectedPlatform === "all" || post.platforms.includes(selectedPlatform)
    const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag)

    return matchesSearch && matchesPlatform && matchesTag
  })

  const copyToClipboard = (content: string, title: string) => {
    navigator.clipboard.writeText(content)
    toast.success(`"${title}" copied to clipboard!`)
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="All Platforms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="Instagram">Instagram</SelectItem>
              <SelectItem value="TikTok">TikTok</SelectItem>
              <SelectItem value="LinkedIn">LinkedIn</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="promo">Promo</SelectItem>
              <SelectItem value="story">Story</SelectItem>
              <SelectItem value="testimonial">Testimonial</SelectItem>
              <SelectItem value="motivation">Motivation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-gray-900 text-lg">{post.title}</h3>
                <Button
                  size="sm"
                  onClick={() => copyToClipboard(post.content, post.title)}
                  className="bg-[#0422FF] hover:bg-[#0422FF]/90 text-white rounded-lg"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{post.content}</p>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} className={`${tagColors[tag as keyof typeof tagColors]} border-0 rounded-full`}>
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.platforms.map((platform) => (
                    <Badge key={platform} variant="outline" className="rounded-full text-xs">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No posts found matching your filters.</p>
        </div>
      )}
    </div>
  )
}
