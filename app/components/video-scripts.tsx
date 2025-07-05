"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react"
import { toast } from "sonner"

const mockScripts = [
  {
    id: 1,
    title: "Value Proposition - 3 Cents Per Prompt",
    hook: "What if I told you that you could get 1000+ AI prompts for less than the cost of a coffee?",
    story:
      "I used to spend hours crafting the perfect prompts for ChatGPT, Claude, and other AI tools. Then I realized I was reinventing the wheel. My AI Prompt Pack Bundle gives you 1000+ proven prompts for just $30. That's literally 3 cents per prompt - less than what you'd pay for a single gumball!",
    cta: "Stop wasting time writing prompts from scratch. Get my AI Prompt Pack Bundle and start getting better results today. Link in bio!",
    visuals: "Calculator showing 3 cents per prompt, coffee price comparison, before/after prompt results",
    category: "value",
  },
  {
    id: 2,
    title: "No Subscriptions Needed",
    hook: "Tired of monthly subscriptions eating your budget? Here's what I use instead...",
    story:
      "Everyone's selling AI courses for $497 or monthly subscriptions for $97. But here's the thing - you don't need another course. You need prompts that work RIGHT NOW. My AI Prompt Pack Bundle is a one-time purchase. No monthly fees, no upsells, no BS.",
    cta: "Get instant access to 1000+ prompts for one low price. No subscriptions, no recurring charges. Comment 'PROMPTS' for the link!",
    visuals: "Crossed out subscription fees, one-time payment highlight, immediate access screenshots",
    category: "simplicity",
  },
  {
    id: 3,
    title: "Speed & Efficiency Focus",
    hook: "I went from spending 2 hours writing one social media post to creating 10 posts in 30 minutes...",
    story:
      "The secret? Having the right prompts ready to go. Instead of staring at a blank screen wondering what to ask AI, I just grab a proven prompt from my bundle. Email campaigns, social posts, product descriptions - I have prompts for everything.",
    cta: "Ready to write faster and market smarter? My AI Prompt Pack Bundle is your shortcut to better content. Link in bio!",
    visuals: "Time-lapse of fast content creation, before/after productivity comparison, multiple content examples",
    category: "speed",
  },
  {
    id: 4,
    title: "Perfect for Beginners Over 40",
    hook: "If you're over 40 and feel like AI is too complicated, this one's for you...",
    story:
      "I get it. Everyone's talking about AI like you need a computer science degree. But here's the truth - you don't need to learn AI, you just need to USE it. My prompts are written in plain English, tested by real people, and designed for business owners who want results, not tech lessons.",
    cta: "Stop feeling left behind by technology. Get prompts that actually work for real business owners. Comment 'READY' below!",
    visuals: "Relatable business owner using AI successfully, simple prompt examples, testimonials from 40+ users",
    category: "beginner-friendly",
  },
  {
    id: 5,
    title: "Problem/Solution Story",
    hook: "I wasted $500 on AI courses before I figured out this simple truth...",
    story:
      "The courses taught me theory, but I needed practical prompts that worked TODAY. So I spent months testing, tweaking, and perfecting over 1000 prompts. Now I'm sharing them all for less than what most people spend on lunch. No fluff, no theory - just prompts that get results.",
    cta: "Skip the expensive courses and get straight to what works. My AI Prompt Pack Bundle is everything you need for $30. Link in bio!",
    visuals: "Expensive course prices crossed out, stack of tested prompts, real results screenshots",
    category: "transformation",
  },
  {
    id: 6,
    title: "Instant Results Testimonial Style",
    hook: "My client Sarah used ONE prompt from my bundle and landed a $5K client the same day...",
    story:
      "She'd been struggling to write compelling proposals for months. I gave her my 'Irresistible Proposal' prompt, and within hours she had a proposal that converted. That's the power of having the right words at the right time. My bundle has 1000+ prompts just like this one.",
    cta: "Want the same prompts that are helping my clients win more business? Get my AI Prompt Pack Bundle today. Comment 'SUCCESS' for the link!",
    visuals: "Client success story, proposal before/after, testimonial screenshots, bundle preview",
    category: "testimonial",
  },
]

const categoryColors = {
  value: "bg-green-100 text-green-800",
  simplicity: "bg-blue-100 text-blue-800",
  speed: "bg-yellow-100 text-yellow-800",
  "beginner-friendly": "bg-purple-100 text-purple-800",
  transformation: "bg-pink-100 text-pink-800",
  testimonial: "bg-orange-100 text-orange-800",
}

export function VideoScripts() {
  const [currentScript, setCurrentScript] = useState(0)

  const nextScript = () => {
    setCurrentScript((prev) => (prev + 1) % mockScripts.length)
  }

  const prevScript = () => {
    setCurrentScript((prev) => (prev - 1 + mockScripts.length) % mockScripts.length)
  }

  const copyScript = (script: (typeof mockScripts)[0]) => {
    const fullScript = `HOOK: ${script.hook}\n\nSTORY: ${script.story}\n\nCTA: ${script.cta}\n\nVISUALS: ${script.visuals}`
    navigator.clipboard.writeText(fullScript)
    toast.success(`"${script.title}" script copied to clipboard!`)
  }

  const script = mockScripts[currentScript]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="outline" onClick={prevScript} className="rounded-full hover:bg-[#D7E022]/20 bg-transparent">
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            {currentScript + 1} of {mockScripts.length}
          </p>
        </div>

        <Button variant="outline" onClick={nextScript} className="rounded-full hover:bg-[#D7E022]/20 bg-transparent">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Script Card */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">{script.title}</h2>
              <Badge
                className={`${categoryColors[script.category as keyof typeof categoryColors]} border-0 rounded-full`}
              >
                {script.category}
              </Badge>
            </div>
            <Button
              onClick={() => copyScript(script)}
              className="bg-[#FF2E56] hover:bg-[#FF2E56]/90 text-white rounded-lg"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Script
            </Button>
          </div>

          {/* Script Content */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#0422FF] mb-2">🎣 HOOK</h3>
              <p className="text-gray-700">{script.hook}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">📖 STORY</h3>
              <p className="text-gray-700">{script.story}</p>
            </div>

            <div className="bg-pink-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#FF2E56] mb-2">🎯 CALL TO ACTION</h3>
              <p className="text-gray-700">{script.cta}</p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">🎬 SUGGESTED VISUALS</h3>
              <p className="text-gray-700">{script.visuals}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prompt Examples Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-gray-200 p-8 mt-8">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Sparkles className="w-5 h-5 text-[#0422FF]" />
            <h3 className="text-xl font-bold text-gray-900">See What's Inside the Bundle</h3>
            <Sparkles className="w-5 h-5 text-[#0422FF]" />
          </div>
          <p className="text-gray-600">Real prompts from the AI Prompt Pack Bundle - see the quality for yourself!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Marketing Prompt */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <Badge className="bg-green-100 text-green-800 border-0 rounded-full">Email Marketing</Badge>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "Write a compelling email subject line for [PRODUCT/SERVICE] that targets [TARGET AUDIENCE] and focuses on [MAIN BENEFIT]. Make it urgent but not spammy, and keep it under 50 characters. Include 5 variations with different emotional triggers: curiosity, urgency, benefit-focused, question-based, and personalized.",
                  )
                  toast.success("Email prompt copied!")
                }}
                className="text-xs hover:bg-[#D7E022]/20"
              >
                <Copy className="w-3 h-3 mr-1" />
                Copy
              </Button>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#0422FF]">Prompt:</strong> "Write a compelling email subject line for
              [PRODUCT/SERVICE] that targets [TARGET AUDIENCE] and focuses on [MAIN BENEFIT]. Make it urgent but not
              spammy, and keep it under 50 characters. Include 5 variations with different emotional triggers:
              curiosity, urgency, benefit-focused, question-based, and personalized."
            </div>
            <div className="mt-3 text-xs text-gray-500">
              <Eye className="w-3 h-3 inline mr-1" />
              Perfect for email campaigns that actually get opened
            </div>
          </div>

          {/* Social Media Prompt */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <Badge className="bg-pink-100 text-pink-800 border-0 rounded-full">Social Media</Badge>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "Create a week's worth of Instagram captions for [BUSINESS TYPE] that educates [TARGET AUDIENCE] about [TOPIC]. Each caption should: 1) Start with a hook question 2) Provide valuable tip or insight 3) Include a clear call-to-action 4) Use relevant hashtags 5) Maintain [BRAND VOICE]. Make them engaging but not salesy.",
                  )
                  toast.success("Social media prompt copied!")
                }}
                className="text-xs hover:bg-[#D7E022]/20"
              >
                <Copy className="w-3 h-3 mr-1" />
                Copy
              </Button>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#0422FF]">Prompt:</strong> "Create a week's worth of Instagram captions for
              [BUSINESS TYPE] that educates [TARGET AUDIENCE] about [TOPIC]. Each caption should: 1) Start with a hook
              question 2) Provide valuable tip or insight 3) Include a clear call-to-action 4) Use relevant hashtags 5)
              Maintain [BRAND VOICE]. Make them engaging but not salesy."
            </div>
            <div className="mt-3 text-xs text-gray-500">
              <Eye className="w-3 h-3 inline mr-1" />
              Generate a full week of content in minutes
            </div>
          </div>

          {/* Sales Copy Prompt */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <Badge className="bg-purple-100 text-purple-800 border-0 rounded-full">Sales Copy</Badge>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "Write a persuasive product description for [PRODUCT] that converts browsers into buyers. Focus on benefits over features, address the main pain point of [TARGET CUSTOMER], and include social proof elements. Use the AIDA framework (Attention, Interest, Desire, Action) and keep it scannable with bullet points. End with a compelling reason to buy now.",
                  )
                  toast.success("Sales copy prompt copied!")
                }}
                className="text-xs hover:bg-[#D7E022]/20"
              >
                <Copy className="w-3 h-3 mr-1" />
                Copy
              </Button>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#0422FF]">Prompt:</strong> "Write a persuasive product description for [PRODUCT]
              that converts browsers into buyers. Focus on benefits over features, address the main pain point of
              [TARGET CUSTOMER], and include social proof elements. Use the AIDA framework (Attention, Interest, Desire,
              Action) and keep it scannable with bullet points. End with a compelling reason to buy now."
            </div>
            <div className="mt-3 text-xs text-gray-500">
              <Eye className="w-3 h-3 inline mr-1" />
              Turn features into sales with proven frameworks
            </div>
          </div>

          {/* Customer Service Prompt */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <Badge className="bg-blue-100 text-blue-800 border-0 rounded-full">Customer Service</Badge>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "Help me respond to this customer complaint: [PASTE COMPLAINT]. Create a professional, empathetic response that: 1) Acknowledges their frustration 2) Takes responsibility where appropriate 3) Offers a specific solution 4) Prevents future issues 5) Maintains brand reputation. Keep the tone helpful and solution-focused, not defensive.",
                  )
                  toast.success("Customer service prompt copied!")
                }}
                className="text-xs hover:bg-[#D7E022]/20"
              >
                <Copy className="w-3 h-3 mr-1" />
                Copy
              </Button>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#0422FF]">Prompt:</strong> "Help me respond to this customer complaint: [PASTE
              COMPLAINT]. Create a professional, empathetic response that: 1) Acknowledges their frustration 2) Takes
              responsibility where appropriate 3) Offers a specific solution 4) Prevents future issues 5) Maintains
              brand reputation. Keep the tone helpful and solution-focused, not defensive."
            </div>
            <div className="mt-3 text-xs text-gray-500">
              <Eye className="w-3 h-3 inline mr-1" />
              Turn complaints into customer loyalty
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center mt-6 p-4 bg-white rounded-lg border border-gray-200">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            These are just 4 prompts out of 1000+ in the bundle!
          </p>
          <p className="text-gray-600 mb-3">
            Each prompt is tested, refined, and ready to use. No guesswork, no trial and error.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Email Marketing</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Social Media</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Sales Copy</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Customer Service</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>+ 20 More Categories</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {mockScripts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentScript(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentScript ? "bg-[#0422FF]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
