<template>
  <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input type="text" v-model="title" required>
      <label>Note:</label>
      <textarea v-model="details" required></textarea>
      <button>Add Note</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            details: ''
        }
    },
    methods: {
        handleSubmit() {
            let note = {
                title: this.title,
                details: this.details,
            }
            console.log(note)
            fetch('http://localhost:3000/notes', {
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(note)
            }).then(() => {
                this.$router.push('/')
            }).catch((err) => console.log(err))
        }
    }
}
</script>

<style>

form{
    background: white;
    padding: 20px;
    border-radius: 10px;
}
label{
    display: block;
    font-size: 15px;
    font-weight: bold;
    margin: 20px 0 10px 0;
}
input{
    padding: 10px;
    border: 1px solid rgb(14, 165, 59);
    width: 100%;
    box-sizing: border-box;
}
textarea{
    padding: 10px;
    border: 1px solid rgb(14, 165, 59);
    width: 100%;
    height: 150px;
    box-sizing: border-box;
}
form button{
    font-size: 15px;
    font-weight: bold;
    color:white;
    display: block;
    cursor: pointer;
    border:0;
    padding: 15px;
    margin: 15px auto 0;
    background: rgb(78, 190, 143);
    border-radius: 8%;
}
form button:hover {
    background: rgb(23, 128, 66);
}
</style>