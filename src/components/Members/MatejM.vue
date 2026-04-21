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
import { CircuitBoard } from 'lucide-vue-next'
</script>

<template>

  <Card>
    <CardHeader>
        <div class="flex flex-row flex-wrap items-center gap-12">
            <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/191978192?v=4" alt="@mm" />
            <AvatarFallback>MM</AvatarFallback>
            </Avatar>
        </div>
      <CardTitle>Matej Majan</CardTitle>
      <CardDescription>Hardware </CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
        <div class="flex w-full flex-wrap gap-2">
        <Badge
          variant="outline"
          class="border-emerald-500/25 bg-emerald-500/10 text-emerald-200 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-100"
        >
                <CircuitBoard />
                Hardware
            </Badge>
        </div>
    </CardFooter>
  </Card>

</template>
