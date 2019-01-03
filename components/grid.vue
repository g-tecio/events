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
            ></v-checkbox>
                <!-- @click="toggleAll" -->
            </th>
            <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            >
            <!-- @click="changeSort(header.value)" -->
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
            </th>
        </tr>
        </template>
        <template slot="items" slot-scope="props">
        <tr :active="props.selected" >
        <!-- @click="props.selected = !props.selected" -->
            <td>
            <v-checkbox
                :input-value="props.selected"
                primary
                hide-details
            ></v-checkbox>
            </td>
            <td>{{ props.item.venue_name }}</td>
            <td class="text-xs-left">
                City: {{ props.item.address.city}},<br>
                line_address1: {{ props.item.address.line_address1 }},<br>
                state: {{ props.item.address.state }}
            </td>
            <td class="text-xs-center">
                latitude: {{ props.item.location.latitude }}, <br>
                longitude: {{ props.item.location.latitude }}
            </td>
            <td class="text-xs-center">{{ props.item.time_zone }}</td>
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