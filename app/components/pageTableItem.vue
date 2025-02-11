<template>
     <div class="overflow-x-auto bg-base-100">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reviewer</th>
                    <th>Date Published</th>
                    <th>Date Modified</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-base-200">
                    <td>{{ pagesStore.pageItem?.title }}</td>
                    <td>
                        <div class="flex items-center gap-3">
                            <div class="avatar">
                                <div class="mask mask-squircle h-12 w-12">
                                    <img
                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">{{pagesStore.pageItem?.reviewer.name}}</div>
                                <div class="text-sm opacity-50">{{ pagesStore.pageItem?.reviewer.credentials }}</div>
                                <div class="text-sm opacity-50">{{ pagesStore.pageItem?.reviewer.affiliation }}</div>
                            </div>
                        </div>
                    </td>
                    <td>{{ pagesStore.pageItem?.datePublished }}</td>
                    <td>{{ pagesStore.pageItem?.dateModified }}</td>

                </tr>
            </tbody>
        </table>
        <div class="container">
            <div class="flex flex-row @sm:@max-md:flex-col" v-html="pagesStore.pageItem?.body">

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const pagesStore = usePagesStore();
</script>