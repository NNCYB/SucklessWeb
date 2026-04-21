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
import { CircleQuestionMark } from 'lucide-vue-next'
</script>

<template>

  <Card>
    <CardHeader>
        <div class="flex flex-row flex-wrap items-center gap-12">
            <Avatar>
            <AvatarImage src="" alt="@mk" />
            <AvatarFallback>MK</AvatarFallback>
            </Avatar>
        </div>
      <CardTitle>Matej Kovac</CardTitle>
      <CardDescription>Vlastne tam ani nebol </CardDescription>
    </CardHeader>
    <CardContent>
      <p>Tak co sem mam napisat no...</p>
    </CardContent>
    <CardFooter>
        <div class="flex w-full flex-wrap gap-2">
        <Badge
          variant="outline"
          class="border-slate-500/25 bg-slate-500/10 text-slate-200 dark:border-slate-400/25 dark:bg-slate-400/10 dark:text-slate-100"
        >
                <CircleQuestionMark />
                Vlastne tam ani nebol
            </Badge>
        </div>
    </CardFooter>
  </Card>

</template>
