<template>
  <div>
      <h1>Membership Points</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <!-- <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Membership Points</router-link>
          </div> -->
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Member Points</th>
              <th>Login ID</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post._id">
                  <td>{{ post.title }}</td>
                  <td>{{ post.body }}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          posts: []
        }
      },
      created() {
      let uri = 'http://localhost:4000/posts';
      this.axios.get(uri).then(response => {
        this.posts = response.data;
      });
    },
    methods: {
      // deletePost(id)
      // {
      //   let uri = `http://localhost:4000/posts/delete/${id}`;
      //   this.axios.delete(uri).then(response => {
      //     this.posts.splice(this.posts.indexOf(id), 1);
      //   });
      // }
    }
  }
</script>