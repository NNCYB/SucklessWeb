<script setup lang="ts">
import Tade from '@/components/Members/Tade.vue'
import Adam from '@/components/Members/Adam.vue'
import MatejM from '@/components/Members/MatejM.vue'
import Alex from '@/components/Members/Alex.vue'
import MatejK from '@/components/Members/MatejK.vue'
</script>

<template>
    <section class="members-page">
        <header class="members-page__header">
            <h1>Spoznajte nas tim...</h1>
        </header>

        <div class="members-grid">
            <Adam />
            <Tade />
            <MatejM />
            <Alex />
            <MatejK />
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