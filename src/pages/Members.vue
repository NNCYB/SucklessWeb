<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Tade from '@/components/Members/Tade.vue'
import Adam from '@/components/Members/Adam.vue'
import MatejM from '@/components/Members/MatejM.vue'
import Alex from '@/components/Members/Alex.vue'
import MatejK from '@/components/Members/MatejK.vue'

const membersGrid = ref<HTMLElement | null>(null)

let activeCard: HTMLElement | null = null

function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max)
}

function resetCard(card: HTMLElement) {
    card.style.setProperty('--member-card-rotate-x', '0deg')
    card.style.setProperty('--member-card-rotate-y', '0deg')
    delete card.dataset.interacting
}

function handleMembersPointerMove(event: PointerEvent) {
    if (event.pointerType === 'touch') {
        return
    }

    const eventTarget = event.target

    if (!(eventTarget instanceof HTMLElement)) {
        return
    }

    const hoveredCard = eventTarget.closest('.member-card')

    if (!(hoveredCard instanceof HTMLElement)) {
        if (activeCard) {
            resetCard(activeCard)
            activeCard = null
        }

        return
    }

    if (hoveredCard !== activeCard) {
        if (activeCard) {
            resetCard(activeCard)
        }

        activeCard = hoveredCard
        activeCard.dataset.interacting = 'true'
    }

    const rect = hoveredCard.getBoundingClientRect()
    const localX = event.clientX - rect.left
    const localY = event.clientY - rect.top
    const normalizedX = (localX / rect.width) - 0.5
    const normalizedY = (localY / rect.height) - 0.5
    const rotateX = clamp(-normalizedY * 7, -4, 4)
    const rotateY = clamp(normalizedX * 9, -5, 5)

    hoveredCard.style.setProperty('--member-card-rotate-x', `${rotateX.toFixed(2)}deg`)
    hoveredCard.style.setProperty('--member-card-rotate-y', `${rotateY.toFixed(2)}deg`)
}

function handleMembersPointerLeave() {
    if (!activeCard) {
        return
    }

    resetCard(activeCard)
    activeCard = null
}

onMounted(() => {
    const grid = membersGrid.value

    if (!grid) {
        return
    }

    grid.addEventListener('pointermove', handleMembersPointerMove, { passive: true })
    grid.addEventListener('pointerleave', handleMembersPointerLeave)
})

onBeforeUnmount(() => {
    const grid = membersGrid.value

    if (!grid) {
        return
    }

    grid.removeEventListener('pointermove', handleMembersPointerMove)
    grid.removeEventListener('pointerleave', handleMembersPointerLeave)
})
</script>

<template>
    <section class="members-page">
        <header class="members-page__header">
            <h1>Spoznajte náš tím...</h1>
        </header>

        <div ref="membersGrid" class="members-grid">
            <Adam class="member-card" />
            <Tade class="member-card" />
            <MatejM class="member-card" />
            <Alex class="member-card" />
            <MatejK class="member-card" />
        </div>
    </section>
</template>

<style scoped>
.members-page {
    display: grid;
    gap: 1rem;
}

.members-page__header {
    display: grid;
    gap: 0.35rem;
}

.members-page__header p {
    color: var(--muted-foreground);
    max-width: 60ch;
}

.members-grid {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    align-items: stretch;
}

.members-grid > * {
    min-width: 0;
}

:deep(.member-card) {
    --member-card-rotate-x: 0deg;
    --member-card-rotate-y: 0deg;
    position: relative;
    overflow: hidden;
    transform:
        perspective(1100px)
        rotateX(var(--member-card-rotate-x))
        rotateY(var(--member-card-rotate-y))
        translateY(0);
    transform-style: preserve-3d;
    transition:
        transform 160ms ease,
        box-shadow 160ms ease;
    will-change: transform;
}

:deep(.member-card[data-interacting='true']) {
    box-shadow: 0 18px 32px oklch(0 0 0 / 0.18);
    transform:
        perspective(1100px)
        rotateX(var(--member-card-rotate-x))
        rotateY(var(--member-card-rotate-y))
        translateY(-4px);
}

:deep([data-slot='card']) {
    height: 100%;
    border-color: var(--border);
    background: color-mix(in oklab, var(--card) 94%, black);
}

:deep([data-slot='card-header']) {
    gap: 0.9rem;
    justify-items: center;
    text-align: center;
}

:deep([data-slot='card-header'] > div) {
    display: flex;
    width: 100%;
    justify-content: center;
}

:deep([data-slot='avatar']) {
    width: 4rem;
    height: 4rem;
    border: 1px solid var(--border);
}

:deep([data-slot='card-title']) {
    font-size: 1.05rem;
}

:deep([data-slot='card-description']) {
    color: var(--muted-foreground);
}

:deep([data-slot='card-content']) {
    text-align: center;
}

:deep([data-slot='card-footer']) {
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
}

@media (max-width: 700px) {
    .members-grid {
        grid-template-columns: 1fr;
    }

    :deep([data-slot='avatar']) {
        width: 3.5rem;
        height: 3.5rem;
    }
}
</style>
