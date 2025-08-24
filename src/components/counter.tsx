"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Plus, Sparkles, Trophy, Target, Rocket, Zap } from 'lucide-react'

export function Counter() {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showMilestone, setShowMilestone] = useState(false)
  const [currentMilestone, setCurrentMilestone] = useState<any>(null)

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
    }
  }

  const getMilestoneMessage = (checkCount: number) => {
    if (checkCount === 1) return { text: "🎉 First click! Welcome!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 5) return { text: "🖐 High five!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 10) return { text: "🔥 Double digits!", icon: <Zap className="h-4 w-4" /> }
    if (checkCount === 25) return { text: "⭐ Quarter century!", icon: <Target className="h-4 w-4" /> }
    if (checkCount === 42) return { text: "🎯 Answer to everything!", icon: <Trophy className="h-4 w-4" /> }
    if (checkCount === 50) return { text: "🎊 Half hundred!", icon: <Rocket className="h-4 w-4" /> }
    if (checkCount === 69) return { text: "😎 Nice!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 77) return { text: "🍀 Lucky sevens!", icon: <Trophy className="h-4 w-4" /> }
    if (checkCount === 88) return { text: "🎱 Crazy eights!", icon: <Zap className="h-4 w-4" /> }
    if (checkCount === 99) return { text: "🔥 Almost century!", icon: <Target className="h-4 w-4" /> }
    if (checkCount === 100) return { text: "🏆 CENTURY! Amazing!", icon: <Trophy className="h-4 w-4" /> }
    if (checkCount === 111) return { text: "🎯 Triple ones!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 123) return { text: "🔢 Counting sequence!", icon: <Target className="h-4 w-4" /> }
    if (checkCount === 200) return { text: "🚀 Double century!", icon: <Rocket className="h-4 w-4" /> }
    if (checkCount === 222) return { text: "✨ Triple twos!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 300) return { text: "⚡ Triple century!", icon: <Zap className="h-4 w-4" /> }
    if (checkCount === 333) return { text: "🎊 Triple threes!", icon: <Trophy className="h-4 w-4" /> }
    if (checkCount === 420) return { text: "🌿 Blaze it!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 500) return { text: "🎖️ Half thousand!", icon: <Rocket className="h-4 w-4" /> }
    if (checkCount === 777) return { text: "🎰 Jackpot!", icon: <Trophy className="h-4 w-4" /> }
    if (checkCount === 888) return { text: "♾️ Infinity vibes!", icon: <Sparkles className="h-4 w-4" /> }
    if (checkCount === 999) return { text: "🔥 Almost 1000!", icon: <Target className="h-4 w-4" /> }
    if (checkCount === 1000) return { text: "👑 THOUSAND! Legend!", icon: <Trophy className="h-4 w-4" /> }
    if (checkCount % 1000 === 0 && checkCount > 1000) return { text: `🌟 ${checkCount/1000}K milestone!`, icon: <Rocket className="h-4 w-4" /> }
    return null
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-6 relative">
      {/* Counter Display */}
      <div className="relative">
        <div className={`text-6xl font-bold transition-all duration-400 text-primary ${
          isAnimating ? 'scale-125' : 'scale-100'
        }`}>
          {count}
        </div>
        
        {/* Animated effect */}
        {isAnimating && (
          <div className="absolute inset-0 text-6xl font-bold animate-pulse opacity-30 text-primary">
            {count}
          </div>
        )}
        
        {/* Celebration particles for milestones */}
        {showMilestone && isAnimating && (
          <>
            <div className="absolute -top-4 -left-4 text-2xl animate-bounce">✨</div>
            <div className="absolute -top-4 -right-4 text-2xl animate-bounce delay-100">🎉</div>
            <div className="absolute -bottom-4 -left-4 text-2xl animate-bounce delay-200">⭐</div>
            <div className="absolute -bottom-4 -right-4 text-2xl animate-bounce delay-300">🎊</div>
          </>
        )}

        {/* Milestone Message - Positioned over counter with longer visibility */}
        {showMilestone && currentMilestone && (
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-20 w-max">
            <div className="text-center p-4 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-800/30 dark:to-orange-800/30 rounded-xl border-2 border-yellow-300 dark:border-yellow-700 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 text-lg font-bold text-yellow-900 dark:text-yellow-100 whitespace-nowrap animate-pulse">
                {currentMilestone.icon}
                {currentMilestone.text}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Increment Button - Closer to counter */}
      <Button 
        onClick={increment}
        size="lg"
        className={`h-16 w-16 rounded-full transition-all duration-200 text-xl font-bold ${
          showMilestone 
            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 animate-pulse' 
            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
        } hover:scale-110 active:scale-95 shadow-lg`}
      >
        <Plus className="h-8 w-8" />
      </Button>

    </div>
  )
}