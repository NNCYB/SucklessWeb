<script setup lang="ts">
import { useRoute } from 'vue-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

const route = useRoute()

const navigationItems = [
  { to: '/', label: 'Domov' },
  { to: '/members', label: 'Členovia Tímu' },
  { to: '/photos', label: 'Fotky' },
]

function isActiveRoute(path: string) {
  return route.path === path
}
</script>

<template>
  <NavigationMenu :viewport="false">
    <NavigationMenuList>
      <NavigationMenuItem v-for="item in navigationItems" :key="item.to">
        <NavigationMenuLink
          as-child
          :active="isActiveRoute(item.to)"
          :class="cn(
            navigationMenuTriggerStyle(),
            'rounded-none border border-transparent bg-transparent font-mono tracking-[0.08em] text-muted-foreground',
            isActiveRoute(item.to)
              ? 'border-primary bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary/90 hover:text-primary-foreground focus:text-primary-foreground'
              : 'hover:border-border hover:bg-accent hover:text-foreground focus:text-foreground',
          )"
        >
          <RouterLink :to="item.to" :aria-current="isActiveRoute(item.to) ? 'page' : undefined">
            {{ item.label }}
          </RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
