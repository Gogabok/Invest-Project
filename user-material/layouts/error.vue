<template>
  <v-app dark width="100%">
    <v-main fluid>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="ratio-inner" cols="12" sm="8" md="4">
            <v-card class="card text-center py-10 ratio-content">
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
  </v-app>
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
</style>
