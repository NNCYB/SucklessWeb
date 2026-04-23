<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge'
import { Box } from 'lucide-vue-next'
import { Code } from 'lucide-vue-next'
</script>

<template>

  <Card>
    <CardHeader>
        <div class="flex flex-row flex-wrap items-center gap-12">
            <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/128937317?v=4" alt="@td" />
            <AvatarFallback>TD</AvatarFallback>
            </Avatar>
        </div>
      <CardTitle>Tadeáš Ditte</CardTitle>
      <CardDescription>Programátor</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Niečo som robil, väčšinou to bolo na chuj, a potom som to prerobil ešte horšie...</p>
    </CardContent>
    <CardFooter>
        <div class="flex w-full flex-wrap gap-2">
      <Badge
        variant="outline"
        class="border-slate-500/25 bg-slate-500/10 text-slate-200 dark:border-slate-400/25 dark:bg-slate-400/10 dark:text-slate-100"
      >
            <Box />
            CAD
        </Badge>
      <Badge
        variant="outline"
        class="border-sky-500/25 bg-sky-500/10 text-sky-200 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-100"
      >
            <Code />
            Programátor
        </Badge>
        </div>
    </CardFooter>
  </Card>

</template>
