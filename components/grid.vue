<template>
    <v-data-table
        v-model="selected"
        :headers="config.headers"
        :items="config.items"
        select-all
        item-key="name"
    >
        <template slot="headers" slot-scope="props">
        <tr>
            <th>
            <v-checkbox
                :input-value="props.all"
                :indeterminate="props.indeterminate"
                primary
                hide-details
                @click="toggleAll"
            ></v-checkbox>
            </th>
            <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
            >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
            </th>
        </tr>
        </template>
        <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
            <td>
            <v-checkbox
                :input-value="props.selected"
                primary
                hide-details
            ></v-checkbox>
            </td>
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.place }}</td>
            <td class="text-xs-right">{{ props.item.location }}</td>
            <td class="text-xs-right">{{ props.item.time_event }}</td>
        </tr>
        </template>
    </v-data-table>
</template>
<script>
export default {
    props: ['config'],
    data() {
        return {
            selected: [],
            
            pagination: {
                sortBy: 'name'
            },
        }
    }
}
</script>