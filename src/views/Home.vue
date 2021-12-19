<template>
  <div class="home">
    <div v-if="notes.length">
      <div v-for="note in notes" :key="note.id">
        <NoteDetails :note="note" @delete="noteDelete"/>
      </div>
    </div>
  </div>
</template>

<script>
import NoteDetails from '../components/NoteDetails.vue'

export default {
  name: 'Home',
  components: { NoteDetails },
  data() {
    return {
      notes: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/notes')
      .then(res => res.json())
      .then(data => this.notes = data)
      .catch(err => console.log(err.message))
  },
  methods: {
    noteDelete(id) {
      this.notes = this.notes.filter((note) => {
        return note.id !=id
      })
    }
  }
}
</script>
