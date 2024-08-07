import {defineDb, defineTable, column, NOW} from 'astro:db';

const Categories = defineTable({
    columns: {
        id: column.number({primaryKey: true, unique: true}),
        name: column.text(),
        description: column.text(),
        color: column.text({optional: true}),
        icon: column.text({optional: true}),
    }
})

const Cards = defineTable({
    columns: {
        id: column.number({primaryKey: true, unique: true}),
        question: column.text(),
        categoryId: column.number({references: () => Categories.columns.id}),
        askedCount: column.number({default: 0}),
        lastAsked: column.date({default: NOW})
    },
})

export default defineDb({
    tables: {Cards, Categories},
})