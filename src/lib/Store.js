import { writable } from 'svelte/store'
import { browser } from '$app/env'

export const store = writable(browser && JSON.parse(localStorage.getItem('todos')) || [])

store.subscribe(updatedStore => {
  console.log(updatedStore);
  browser && localStorage.setItem('todos', JSON.stringify(updatedStore))
})