'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.uuid('id').primary().defaultTo(this.db.raw('uuid()'))
      table.string('name').notNullable()
      table.text('description').nullable()
      table.decimal('price', 8, 2).notNullable()
      table.integer('qtd_available').notNullable()
      table.integer('qtd_total').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
