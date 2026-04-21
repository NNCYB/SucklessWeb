<script lang="ts">
export const description = 'Fotecky'
</script>

<script setup lang="ts">
const photos: { src: string, alt: string, title: string }[] = [
    { src: '/p1.jpg', alt: 'Group photo one', title: 'Fotecka 1' },
    { src: '/p2.jpg', alt: 'Group photo two', title: 'Fotecka 2' },
    { src: '/p3.jpg', alt: 'Group photo three', title: 'Fotecka 3 [Tu sme sa uz poniektori velmi nudili]' },
    { src: '/p4.jpg', alt: 'Group photo four', title: 'Fotecka 4' },
]
</script>

<template>
    <section class="gallery-page">
        <header class="gallery-header">
            <h1>Vychutnajte si nas fotograficky talent...</h1>
        </header>

        <div class="gallery-grid">
            <figure v-for="photo in photos" :key="photo.src" class="gallery-card">
                <img :src="photo.src" :alt="photo.alt" loading="lazy" />
                <figcaption>{{ photo.title }}</figcaption>
            </figure>
        </div>
    </section>
</template>

<style scoped>
.gallery-page {
    display: grid;
    gap: 1rem;
}

.gallery-header {
    display: grid;
    gap: 0.35rem;
}

.gallery-header p {
    color: var(--muted-foreground);
}

.gallery-grid {
    display: grid;
    gap: 0.85rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.gallery-card {
    margin: 0;
    border: 1px solid var(--border);
    background: color-mix(in oklab, var(--card) 88%, black);
    overflow: hidden;
}

.gallery-card img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-bottom: 1px solid var(--border);
}

.gallery-card figcaption {
    padding: 0.55rem 0.65rem;
    font-size: 0.85rem;
    color: var(--muted-foreground);
}

@media (max-width: 700px) {
    .gallery-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
}
</style>