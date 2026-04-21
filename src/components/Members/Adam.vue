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
import { Crown } from 'lucide-vue-next'
import { Code } from 'lucide-vue-next'
</script>

<template>

  <Card>
    <CardHeader>
        <div class="flex flex-row flex-wrap items-center gap-12">
            <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/206765939?v=4" alt="@ao" />
                <AvatarFallback>AO</AvatarFallback>
            </Avatar>
        </div>
      <CardTitle>Adam Ondrejcak</CardTitle>
      <CardDescription>Team Lead</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
        <div class="flex w-full flex-wrap gap-2">
        <Badge
        variant="outline"
        class="border-amber-500/25 bg-amber-500/10 text-amber-200 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-100"
            >
            <Crown />
            Team Leader
        </Badge>
        <Badge
        variant="outline"
        class="border-sky-500/25 bg-sky-500/10 text-sky-200 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-100"
        >
            <Code />
            Programator
        </Badge>
        </div>
    </CardFooter>
  </Card>

</template>
