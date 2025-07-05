"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, Plus } from "lucide-react"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const mockScheduledContent = {
  "2024-01-15": [
    { type: "post", title: "Monday Motivation", platform: "Instagram" },
    { type: "video", title: "Transformation Tuesday", platform: "TikTok" },
  ],
  "2024-01-18": [{ type: "post", title: "Educational Tip", platform: "LinkedIn" }],
  "2024-01-22": [
    { type: "video", title: "Day in the Life", platform: "Instagram" },
    { type: "post", title: "Customer Success Story", platform: "LinkedIn" },
  ],
  "2024-01-25": [{ type: "post", title: "Behind the Scenes", platform: "Instagram" }],
  "2024-01-29": [{ type: "video", title: "Quick Tip Tutorial", platform: "TikTok" }],
}

export function ContentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 1)) // January 2024
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDateKey = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const exportCalendar = () => {
    const monthName = months[currentDate.getMonth()]
    const year = currentDate.getFullYear()

    let exportText = `Content Calendar - ${monthName} ${year}\n\n`

    Object.entries(mockScheduledContent).forEach(([date, content]) => {
      const dateObj = new Date(date)
      if (dateObj.getMonth() === currentDate.getMonth() && dateObj.getFullYear() === currentDate.getFullYear()) {
        exportText += `${dateObj.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}:\n`
        content.forEach((item) => {
          exportText += `  • ${item.title} (${item.platform}) - ${item.type}\n`
        })
        exportText += "\n"
      }
    })

    const blob = new Blob([exportText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `content-calendar-${monthName.toLowerCase()}-${year}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => navigateMonth("prev")} className="rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h2 className="text-2xl font-bold text-gray-900">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <Button variant="outline" onClick={() => navigateMonth("next")} className="rounded-full">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <Button onClick={exportCalendar} className="bg-[#0422FF] hover:bg-[#0422FF]/90 text-white rounded-lg">
            <Download className="w-4 h-4 mr-2" />
            Export Calendar
          </Button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Day Headers */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}

          {/* Empty Days */}
          {emptyDays.map((day) => (
            <div key={`empty-${day}`} className="p-2 h-24"></div>
          ))}

          {/* Calendar Days */}
          {days.map((day) => {
            const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth(), day)
            const hasContent = mockScheduledContent[dateKey]
            const isSelected = selectedDate === dateKey

            return (
              <div
                key={day}
                onClick={() => setSelectedDate(isSelected ? null : dateKey)}
                className={`p-2 h-24 border rounded-lg cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-[#0422FF] text-white border-[#0422FF]"
                    : hasContent
                      ? "bg-blue-50 border-blue-200 hover:bg-blue-100"
                      : "bg-white border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="text-sm font-medium mb-1">{day}</div>
                {hasContent && (
                  <div className="space-y-1">
                    {hasContent.slice(0, 2).map((item, index) => (
                      <div
                        key={index}
                        className={`text-xs px-1 py-0.5 rounded truncate ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : item.type === "post"
                              ? "bg-green-100 text-green-800"
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {item.title}
                      </div>
                    ))}
                    {hasContent.length > 2 && (
                      <div className={`text-xs ${isSelected ? "text-white/80" : "text-gray-500"}`}>
                        +{hasContent.length - 2} more
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Selected Date Details */}
      {selectedDate && mockScheduledContent[selectedDate] && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Content for{" "}
            {new Date(selectedDate).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </h3>
          <div className="space-y-3">
            {mockScheduledContent[selectedDate].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Badge
                    className={`${
                      item.type === "post" ? "bg-green-100 text-green-800" : "bg-purple-100 text-purple-800"
                    } border-0 rounded-full`}
                  >
                    {item.type}
                  </Badge>
                  <span className="font-medium">{item.title}</span>
                  <Badge variant="outline" className="rounded-full text-xs">
                    {item.platform}
                  </Badge>
                </div>
                <Button size="sm" variant="outline" className="rounded-lg bg-transparent">
                  Edit
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="justify-start h-auto p-4 hover:bg-[#D7E022]/20 bg-transparent">
            <Plus className="w-4 h-4 mr-2" />
            <div className="text-left">
              <div className="font-medium">Schedule Post</div>
              <div className="text-sm text-gray-500">Add content to calendar</div>
            </div>
          </Button>
          <Button variant="outline" className="justify-start h-auto p-4 hover:bg-[#D7E022]/20 bg-transparent">
            <Plus className="w-4 h-4 mr-2" />
            <div className="text-left">
              <div className="font-medium">Batch Schedule</div>
              <div className="text-sm text-gray-500">Plan multiple posts</div>
            </div>
          </Button>
          <Button variant="outline" className="justify-start h-auto p-4 hover:bg-[#D7E022]/20 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            <div className="text-left">
              <div className="font-medium">Export Week</div>
              <div className="text-sm text-gray-500">Download weekly plan</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}
