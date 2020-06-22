<template>
  <v-main class="main-height">
    <v-container class="fill-height" fluid>
      <v-row justify="center" align="center">
        <v-col lg="4" md="6" cols="11">
          <v-card class="card text-center py-10">
            <p class="text-h3 text-center mb-7">
              {{ error.statusCode === 404 ? pageNotFound : otherError }}
            </p>
            <v-btn to="/dashboard" link color="success dark" raised
              >Dashboard</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.main-height {
  min-height: 100vh;
}
</style>
