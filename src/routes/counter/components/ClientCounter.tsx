"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Plus, Sparkles, Trophy, Target, Rocket, Zap } from 'lucide-react'

export function ClientCounter() {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showMilestone, setShowMilestone] = useState(false)
  const [currentMilestone, setCurrentMilestone] = useState<any>(null)
  const [achievedMilestones, setAchievedMilestones] = useState<any[]>([])

  const triggerAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 400)
  }

  const showMilestoneMessage = (milestone: any) => {
    setCurrentMilestone(milestone)
    setShowMilestone(true)
    setTimeout(() => setShowMilestone(false), 3000) // Show for 3 seconds
  }

  const increment = () => {
    const newCount = count + 1
    setCount(newCount)
    triggerAnimation()

    // Check for milestone with new count
    const milestone = getMilestoneMessage(newCount)
    if (milestone) {
      showMilestoneMessage(milestone)
      setAchievedMilestones(prev => {
        if (!prev.find(m => m.count === newCount)) {
          return [...prev, { ...milestone, count: newCount }]
        }
        return prev
      })
    }
  }

  const getMilestoneMessage = (checkCount: number) => {
    if (checkCount === 1) return { text: "First click! Welcome!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 5) return { text: "High five!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 10) return { text: "Double digits!", icon: <Zap className="h-4 w-4" /> }
    if (checkCount === 25) return { text: "Quarter century!", icon: <Target className="h-4 w-4" /> }
    if (checkCount === 42) return { text: "Answer to everything!", icon: <Trophy className="h-4 w-4" /> }
    if (checkCount === 50) return { text: "Half hundred!", icon: <Rocket className="h-4 w-4" /> }
    if (checkCount === 69) return { text: "Nice!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 77) return { text: "Lucky sevens!", icon: <Trophy className="h-4 w-4" /> }
    if (checkCount === 88) return { text: "Crazy eights!", icon: <Zap className="h-4 w-4" /> }
    if (checkCount === 99) return { text: "Almost century!", icon: <Target className="h-4 w-4" /> }
    if (checkCount === 100) return { text: "CENTURY! Amazing!", icon: <Trophy className="h-4 w-4" /> }
    if (checkCount === 111) return { text: "Triple ones!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 123) return { text: "Counting sequence!", icon: <Target className="h-4 w-4" /> }
    if (checkCount === 200) return { text: "Double century!", icon: <Rocket className="h-4 w-4" /> }
    if (checkCount === 222) return { text: "Triple twos!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 300) return { text: "Triple century!", icon: <Zap className="h-4 w-4" /> }
    if (checkCount === 333) return { text: "Triple threes!", icon: <Trophy className="h-4 w-4" /> }
    if (checkCount === 420) return { text: "Blaze it!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 500) return { text: "Half thousand!", icon: <Rocket className="h-4 w-4" /> }
    if (checkCount === 777) return { text: "Jackpot!", icon: <Trophy className="h-4 w-4" /> }
    if (checkCount === 888) return { text: "Infinity vibes!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 999) return { text: "Almost 1000!", icon: <Target className="h-4 w-4" /> }
    if (checkCount === 1000) return { text: "THOUSAND! Legend!", icon: <Trophy className="h-4 w-4" /> }
    if (checkCount % 1000 === 0 && checkCount > 1000) return { text: `${checkCount/1000}K milestone!`, icon: <Rocket className="h-4 w-4" /> }
    return null
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-4 sm:p-6 relative">
      {/* Counter Display */}
      <div className="relative">
        <div className={`text-4xl sm:text-6xl font-bold transition-all duration-400 text-primary ${
          isAnimating ? 'scale-110 sm:scale-125' : 'scale-100'
        }`}>
          {count}
        </div>

        {/* Animated effect */}
        {isAnimating && (
          <div className="absolute inset-0 text-4xl sm:text-6xl font-bold animate-pulse opacity-30 text-primary">
            {count}
          </div>
        )}


        {/* Milestone Message - Positioned over counter with longer visibility */}
        {showMilestone && currentMilestone && (
          <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2 z-20 w-max max-w-xs sm:max-w-none">
            <div className="text-center p-3 sm:p-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-800/30 dark:to-blue-800/30 rounded-xl border-2 border-green-300 dark:border-green-700 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 text-sm sm:text-lg font-bold text-green-900 dark:text-green-100 whitespace-nowrap animate-pulse">
                {currentMilestone.icon}
                <span className="truncate">{currentMilestone.text}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Increment Button - Closer to counter */}
      <Button
        onClick={increment}
        size="lg"
        className={`h-12 w-12 sm:h-16 sm:w-16 rounded-full transition-all duration-200 text-lg sm:text-xl font-bold touch-manipulation ${
          showMilestone
            ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 animate-pulse'
            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
        } hover:scale-105 active:scale-95 shadow-lg`}
      >
        <Plus className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>

      {/* Achieved Milestones Display */}
      {achievedMilestones.length > 0 && (
        <div className="mt-8 w-full max-w-md">
          <h3 className="text-lg font-semibold mb-3 text-center">Achieved Milestones</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {achievedMilestones.slice(-10).reverse().map((milestone, index) => (
              <div key={`${milestone.count}-${index}`} className="flex items-center justify-between p-2 bg-accent/50 rounded-lg">
                <div className="flex items-center gap-2">
                  {milestone.icon}
                  <span className="text-sm font-medium">{milestone.text}</span>
                </div>
                <span className="text-sm text-muted-foreground font-mono">{milestone.count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}
