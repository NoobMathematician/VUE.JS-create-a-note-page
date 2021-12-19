<template>
  <div class="note">
      <div class="actions">
          <h3 @click="showDetails = !showDetails"> {{ note.title }} </h3>
          <div class="icons">
            <router-link :to="{ name: 'EditNote' , params: { id: note.id }}">
                <span class="material-icons">edit</span>  
            </router-link>
            <span @click="deleteNote" class="material-icons">delete</span>                    
            </div>
      </div>
      <div v-if="showDetails" class="details">
          <p> {{ note.details }} </p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['note'],
    data() {
        return {
            showDetails: false,
            uri: 'http://localhost:3000/notes/' + this.note.id
        }
    },
    methods: {
        deleteNote() {
            fetch(this.uri, {method: 'DELETE'})
                .then(() => this.$emit('delete', this.note.id))
                .catch(err => console.log(err))

        }
    }
}
</script>

<style>
.note{
    margin: 20px auto;
    padding: 10px 20px;
    border-radius: 5px;
    border-left: 6px solid #055c2c;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
}
h3{
    cursor: pointer;
}
.actions{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-icons {
    font-size: 25px;
    margin-left: 15px;
    color:rgb(58, 138, 134);
    cursor: pointer;
}
.material-icons:hover {
    color: rgb(189, 44, 92);
}
</style>