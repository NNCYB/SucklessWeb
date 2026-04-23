<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Navbar from '@/components/ui/Navbar.vue'

const headerMessages = [
  'NNCYB - Road2FEI',
  'We love unsecured switches',
  'Not Necessarily CYB',
  'Zzz...',
  'Elevators are a technological marvel',
  'To Cybertron or not to Cybertron',
  'If if\'s and but\'s were candy and nuts, oh what christmas we\'d have',
  '(and by that we mean a good working robot)'
]

const headerRotateMs = 3600
const scrambleFrameMs = 45
const scrambleGlyphs = '01[]{}<>/\\|+-*#_$%'

const displayedTitle = ref(headerMessages[0] ?? 'NNCYB')
const activeHeaderIndex = ref(0)

let rotationTimer: number | undefined
let scrambleTimer: number | undefined

function randomGlyph() {
  return scrambleGlyphs[Math.floor(Math.random() * scrambleGlyphs.length)]
}

function scrambleTo(nextTitle: string) {
  if (displayedTitle.value === nextTitle) {
    return
  }

  if (scrambleTimer !== undefined) {
    window.clearInterval(scrambleTimer)
  }

  const previousTitle = displayedTitle.value
  const maxLength = Math.max(previousTitle.length, nextTitle.length)
  const settleFrames = maxLength + 5
  let frame = 0

  scrambleTimer = window.setInterval(() => {
    frame += 1

    displayedTitle.value = Array.from({ length: maxLength }, (_, index) => {
      if (frame >= settleFrames || index < frame - 4) {
        return nextTitle[index] ?? ''
      }

      return randomGlyph()
    }).join('')

    if (frame >= settleFrames) {
      displayedTitle.value = nextTitle
      window.clearInterval(scrambleTimer)
      scrambleTimer = undefined
    }
  }, scrambleFrameMs)
}

onMounted(() => {
  if (headerMessages.length < 2) {
    return
  }

  rotationTimer = window.setInterval(() => {
    activeHeaderIndex.value = (activeHeaderIndex.value + 1) % headerMessages.length
    scrambleTo(headerMessages[activeHeaderIndex.value] ?? displayedTitle.value)
  }, headerRotateMs)
})

onBeforeUnmount(() => {
  if (rotationTimer !== undefined) {
    window.clearInterval(rotationTimer)
  }

  if (scrambleTimer !== undefined) {
    window.clearInterval(scrambleTimer)
  }
})
</script>

<template>
  <div class="page-grid" aria-hidden="true" />

  <header class="app-header">
    <h1 class="app-title" aria-live="polite">
      <span class="app-title__text">{{ displayedTitle }}</span>
      <span class="app-title__cursor" aria-hidden="true">_</span>
    </h1>
    <Navbar />
  </header>

  <main>
    <div class="page-shell">
      <RouterView />
    </div>
  </main>
</template>
