<script lang="ts">
export const description = 'Fotecky'
</script>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const baseUrl = import.meta.env.BASE_URL

const photos: { src: string, alt: string, title: string }[] = [
    { src: `${baseUrl}p1.jpg`, alt: 'Group photo one', title: 'Fotecka 1' },
    { src: `${baseUrl}p2.jpg`, alt: 'Group photo two', title: 'Fotecka 2' },
    { src: `${baseUrl}p3.jpg`, alt: 'Group photo three', title: 'Fotecka 3 [Tu sme sa už poniektorí veľmi nudili]' },
    { src: `${baseUrl}p4.jpg`, alt: 'Group photo four', title: 'Fotecka 4' },
    { src: `${baseUrl}p5.jpg`, alt: 'Group photo five', title: 'Fotecka 5' },
    { src: `${baseUrl}p6.jpg`, alt: 'Group photo six', title: 'Fotecka 6' },
    { src: `${baseUrl}p7.jpg`, alt: 'Group photo seven', title: 'Fotecka 7' },
    { src: `${baseUrl}p8.jpg`, alt: 'Group photo eight', title: 'Fotecka 8' },
]

const selectedPhotoIndex = ref<number | null>(null)

const selectedPhoto = computed(() => {
    if (selectedPhotoIndex.value === null) {
        return null
    }

    return photos[selectedPhotoIndex.value]
})

const openPreview = (index: number) => {
    selectedPhotoIndex.value = index
}

const closePreview = () => {
    selectedPhotoIndex.value = null
}

const showPreviousPhoto = () => {
    if (selectedPhotoIndex.value === null) {
        return
    }

    selectedPhotoIndex.value = (selectedPhotoIndex.value - 1 + photos.length) % photos.length
}

const showNextPhoto = () => {
    if (selectedPhotoIndex.value === null) {
        return
    }

    selectedPhotoIndex.value = (selectedPhotoIndex.value + 1) % photos.length
}

const handlePreviewKeydown = (event: KeyboardEvent) => {
    if (selectedPhotoIndex.value === null) {
        return
    }

    if (event.key === 'Escape') {
        closePreview()
        return
    }

    if (event.key === 'ArrowLeft') {
        showPreviousPhoto()
        return
    }

    if (event.key === 'ArrowRight') {
        showNextPhoto()
    }
}

watch(selectedPhotoIndex, (newIndex) => {
    document.body.style.overflow = newIndex === null ? '' : 'hidden'
})

onMounted(() => {
    window.addEventListener('keydown', handlePreviewKeydown)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handlePreviewKeydown)
    document.body.style.overflow = ''
})
</script>

<template>
    <section class="gallery-page">
        <header class="gallery-header">
            <h1>Vychutnajte si náš fotografický talent...</h1>
        </header>

        <div class="gallery-grid">
            <figure v-for="(photo, index) in photos" :key="photo.src" class="gallery-card">
                <button
                    type="button"
                    class="gallery-card__trigger"
                    :aria-label="`Open preview for ${photo.title}`"
                    @click="openPreview(index)"
                >
                    <img :src="photo.src" :alt="photo.alt" loading="lazy" />
                </button>
                <figcaption>{{ photo.title }}</figcaption>
            </figure>
        </div>
    </section>

    <Teleport to="body">
        <div
            v-if="selectedPhoto"
            class="photo-preview"
            role="dialog"
            aria-modal="true"
            :aria-label="selectedPhoto.title"
            @click.self="closePreview"
        >
            <button
                type="button"
                class="photo-preview__control photo-preview__control--close"
                @click="closePreview"
            >
                Close
            </button>

            <button
                type="button"
                class="photo-preview__control photo-preview__control--prev"
                aria-label="Show previous photo"
                @click.stop="showPreviousPhoto"
            >
                <span aria-hidden="true">&larr;</span>
            </button>

            <figure class="photo-preview__figure" @click.stop>
                <img :src="selectedPhoto.src" :alt="selectedPhoto.alt" />
                <figcaption>{{ selectedPhoto.title }}</figcaption>
            </figure>

            <button
                type="button"
                class="photo-preview__control photo-preview__control--next"
                aria-label="Show next photo"
                @click.stop="showNextPhoto"
            >
                <span aria-hidden="true">&rarr;</span>
            </button>
        </div>
    </Teleport>
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
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

.gallery-card {
    margin: 0;
    border: 1px solid var(--border);
    background: color-mix(in oklab, var(--card) 88%, black);
    overflow: hidden;
}

.gallery-card__trigger {
    display: block;
    width: 100%;
    border: 0;
    padding: 0;
    background: transparent;
    cursor: zoom-in;
}

.gallery-card__trigger img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-bottom: 1px solid var(--border);
    transition: transform 160ms ease;
}

.gallery-card__trigger:hover img {
    transform: scale(1.02);
}

.gallery-card figcaption {
    padding: 0.55rem 0.65rem;
    font-size: 0.85rem;
    color: var(--muted-foreground);
}

.photo-preview {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: grid;
    place-items: center;
    padding: 1rem;
    background: color-mix(in oklab, var(--background) 55%, black);
    backdrop-filter: blur(4px);
}

.photo-preview__figure {
    margin: 0;
    display: grid;
    gap: 0.6rem;
    justify-items: center;
}

.photo-preview__figure img {
    display: block;
    width: auto;
    max-width: min(95vw, 1100px);
    max-height: calc(100svh - 8rem);
    object-fit: contain;
    border: 1px solid var(--border);
    background: color-mix(in oklab, var(--card) 88%, black);
}

.photo-preview__figure figcaption {
    color: var(--foreground);
    font-size: 0.9rem;
    text-align: center;
}

.photo-preview__control {
    position: fixed;
    width: 2.8rem;
    height: 2.8rem;
    border: 1px solid var(--border);
    background: color-mix(in oklab, var(--card) 92%, black);
    color: var(--foreground);
    display: grid;
    place-items: center;
    cursor: pointer;
    font-size: 1.15rem;
}

.photo-preview__control--close {
    top: 1rem;
    right: 1rem;
    width: auto;
    height: auto;
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
}

.photo-preview__control--prev {
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
}

.photo-preview__control--next {
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
}

@media (max-width: 700px) {
    .gallery-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .photo-preview {
        padding: 0.75rem 0.65rem 4rem;
    }

    .photo-preview__figure img {
        max-height: calc(100svh - 10rem);
    }

    .photo-preview__control--prev,
    .photo-preview__control--next {
        top: auto;
        bottom: 0.75rem;
        transform: none;
    }

    .photo-preview__control--prev {
        left: 0.75rem;
    }

    .photo-preview__control--next {
        right: 0.75rem;
    }

    .photo-preview__control--close {
        top: 0.75rem;
        right: 0.75rem;
    }
}

@media (max-width: 480px) {
    .gallery-grid {
        grid-template-columns: 1fr;
    }
}
</style>
