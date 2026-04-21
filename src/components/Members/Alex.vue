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
            <AvatarImage src="https://avatars.githubusercontent.com/u/231720640?v=4" alt="@af" />
            <AvatarFallback>AF</AvatarFallback>
            </Avatar>
        </div>
      <CardTitle>Alexandra Farkasova</CardTitle>
      <CardDescription>Balatro </CardDescription>
    </CardHeader>
    <CardContent>
      <p>Tak co sem mam napisat no...</p>
    </CardContent>
    <CardFooter>
        <div class="flex w-full flex-wrap gap-2">
        <Badge
          variant="outline"
          class="border-violet-500/25 bg-violet-500/10 text-violet-200 dark:border-violet-400/25 dark:bg-violet-400/10 dark:text-violet-100"
        >
                <CircleQuestionMark />
                Balatro
            </Badge>
        </div>
    </CardFooter>
  </Card>

</template>
